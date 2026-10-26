import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Link, Navigate, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { getCarById } from "../data/carData";
import { useAuth } from "../context/AuthContext";
import { computeQuote, getBookingConfig } from "../pricing";
import { STEPS, hydrateDraft, stepIndex } from "../booking/bookingDefaults";
import { clearDraft, generateBookingId, readDraft, saveBooking, writeDraft } from "../booking/bookingStorage";
import { buildBookingRecord } from "../booking/bookingRecord";
import { validateBuyer } from "../booking/validation";
import PriceSummary from "../booking/PriceSummary";
import { Notice } from "../booking/ui";
import VariantStep from "../booking/steps/VariantStep";
import CustomizeStep from "../booking/steps/CustomizeStep";
import OnRoadStep from "../booking/steps/OnRoadStep";
import DetailsStep from "../booking/steps/DetailsStep";
import FinanceStep from "../booking/steps/FinanceStep";
import ReviewStep from "../booking/steps/ReviewStep";
import PaymentStep from "../booking/steps/PaymentStep";
import "../styles/booking.css";

function validateStep(slug, { draft, quote, config }) {
  const e = {};
  if (slug === "variant") {
    if (!draft.variant) e.variant = "Select a variant to continue.";
    if (!Number.isFinite(quote.exShowroom) || quote.exShowroom <= 0) e.variant = "This variant has no valid price, so it can't be booked online.";
  }
  if (slug === "on-road") {
    if (!draft.state || !config.stateRules[draft.state]) e.state = "Select the registration state.";
    if (!draft.city.trim()) e.city = "Select or enter the registration city.";
    if (!draft.rto.trim()) e.rto = "Select or enter the preferred RTO.";
    if (draft.tradeIn.enabled) {
      if (quote.tradeIn.errors.length) e.tradeValue = quote.tradeIn.errors[0];
      else if (!(quote.tradeIn.value > 0)) e.tradeValue = "Enter the estimated trade-in value, or untick trade-in.";
      if (!draft.tradeIn.car.trim()) e.tradeCar = "Enter the existing car.";
    }
    if (!quote.onRoad.ok && !e.state) e.state = quote.onRoad.errors[0];
  }
  if (slug === "details") {
    Object.assign(e, validateBuyer(draft.buyer, { registrationState: draft.state }));
    if (!draft.buyer.identityType) e.identityType = "Select an identity proof type.";
    if (!draft.buyer.addressType) e.addressType = "Select an address proof type.";
    if (!draft.docs.identity || !draft.docs.address) e.docs = "Upload both identity proof and address proof to continue.";
  }
  if (slug === "finance" && draft.paymentMode === "finance") {
    if (quote.financeErrors.length || !quote.finance?.valid) e.paymentMode = quote.financeErrors[0] || "Fix the loan details to continue.";
    if (!draft.eligibility.employment) e.employment = "Select employment type.";
    if (!(Number(draft.eligibility.income) > 0)) e.income = "Enter your monthly income.";
    if (!draft.buyer.pan) e.pan = "PAN is usually required by lenders for car loans.";
    if (!draft.docs.pan || !draft.docs.income || !draft.docs.bank) e.docs = "Upload PAN, income proof and bank statement for a finance booking.";
  }
  if (slug === "review") {
    const need = ["config", "charges", "optional", "booking", ...(quote.financed ? ["finance"] : [])];
    if (need.some((k) => !draft.terms[k])) e.terms = "Please tick every confirmation to continue.";
  }
  return e;
}

function BookingFlowInner({ car, config }) {
  const { step: stepParam } = useParams();
  const [search] = useSearchParams();
  const navigate = useNavigate();
  const { session } = useAuth();
  const query = useMemo(() => ({ variant: search.get("variant") || "", color: search.get("color") || "", mods: search.get("mods") || "" }), [search]);
  const [draft, setDraft] = useState(() => {
    const d = hydrateDraft(readDraft(car.id), car, config, query);
    if (!d.buyer.name && session?.name) d.buyer = { ...d.buyer, name: session.name, email: d.buyer.email || session.email || "" };
    return d;
  });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState("");
  const [busy, setBusy] = useState(false);
  const [failure, setFailure] = useState("");
  const submitted = useRef(false);

  const update = useCallback((patch) => setDraft((d) => ({ ...d, ...patch })), []);
  useEffect(() => { writeDraft(car.id, draft); }, [car.id, draft]);
  useEffect(() => { document.title = `VELORA | Book ${car.name}`; }, [car.name]);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "auto" }); setErrors({}); }, [stepParam]);

  const quote = useMemo(() => computeQuote({ car, draft, config }), [car, draft, config]);
  const base = `/book/${encodeURIComponent(car.id)}`;
  const isPayment = stepParam === "payment";
  const idx = isPayment ? STEPS.length - 1 : stepIndex(stepParam);

  if (idx < 0) return <Navigate to={`${base}/variant${search.toString() ? `?${search}` : ""}`} replace />;
  if (idx > draft.maxStep) return <Navigate to={`${base}/${STEPS[draft.maxStep].slug}`} replace />;
  if (isPayment) {
    const need = ["config", "charges", "optional", "booking", ...(quote.financed ? ["finance"] : [])];
    if (need.some((k) => !draft.terms[k]) || !quote.ok) return <Navigate to={`${base}/review`} replace />;
  }

  const slug = isPayment ? "payment" : STEPS[idx].slug;
  const go = (to) => navigate(`${base}/${to}`);

  const next = () => {
    const found = validateStep(slug, { draft, quote, config });
    if (Object.keys(found).length) { setErrors(found); requestAnimationFrame(() => document.querySelector(".bk-error")?.scrollIntoView({ block: "center", behavior: "smooth" })); return; }
    if (slug === "review") return go("payment");
    const target = idx + 1;
    update({ maxStep: Math.max(draft.maxStep, target) });
    go(STEPS[target].slug);
  };
  const back = () => (isPayment ? go("review") : idx > 0 ? go(STEPS[idx - 1].slug) : navigate(`/cars/${encodeURIComponent(car.id)}`));

  // Demo shortcut is available on every booking step. It uses clearly labelled
  // sample values only; it does not upload documents or process real payments.
  const skipCurrentStepForDemo = () => {
    const target = idx + 1;
    const nextSlug = slug === "review" ? "payment" : STEPS[target]?.slug;
    const targetMaxStep = slug === "payment" ? draft.maxStep : Math.min(target, STEPS.length - 1);
    const patch = { maxStep: Math.max(draft.maxStep, targetMaxStep) };
    const demoFile = (name) => ({ name, size: 0, demo: true });

    if (slug === "variant") {
      const validVariant = car.variants?.some((item) => item.name === draft.variant)
        ? draft.variant
        : car.variants?.[0]?.name || draft.variant || "Standard";
      patch.variant = validVariant;
    }

    if (slug === "customize") {
      patch.color = draft.color || car.colors?.[0]?.name || "Standard";
      patch.accIds = Array.isArray(draft.accIds) ? draft.accIds : [];
      patch.protIds = Array.isArray(draft.protIds) ? draft.protIds : [];
      patch.warIds = Array.isArray(draft.warIds) ? draft.warIds : [];
      patch.modIds = Array.isArray(draft.modIds) ? draft.modIds : [];
    }

    if (slug === "on-road") {
      const entries = Object.entries(config.stateRules || {});
      const currentRule = config.stateRules?.[draft.state];
      const currentCity = currentRule?.cities?.find((item) => item.name === draft.city);
      const usableEntry = entries.find(([key, rule]) =>
        key === draft.state && rule && (rule.cities?.length || key === "OTHER")
      ) || entries.find(([, rule]) => rule && rule.cities?.length) || entries.find(([, rule]) => Boolean(rule));

      if (!usableEntry) {
        setErrors({ state: "No registration pricing rules are configured, so the demo cannot skip this step." });
        return;
      }

      const [state, rule] = usableEntry;
      const cityEntry = state === draft.state && currentCity ? currentCity : rule.cities?.[0];
      const city = cityEntry?.name || draft.city || "Demo City";
      const rto = cityEntry?.rtos?.find((item) => item.code === draft.rto)?.code
        || cityEntry?.rtos?.[0]?.code || draft.rto || "DEMO-RTO";
      patch.state = state;
      patch.city = city;
      patch.rto = rto;
      patch.tradeIn = { ...draft.tradeIn, enabled: false, car: "", value: "", outstanding: "" };
    }

    if (slug === "details") {
      const states = Object.keys(config.stateRules || {}).filter((state) => state && state !== "OTHER");
      const buyerState = draft.buyer.state && states.includes(draft.buyer.state)
        ? draft.buyer.state : (draft.state || states[0] || "Demo State");
      const buyerCity = draft.buyer.city?.trim() || draft.city || "Demo City";
      const buyer = {
        name: draft.buyer.name?.trim().length >= 2 ? draft.buyer.name : "Demo Customer",
        mobile: /^[6-9][0-9]{9}$/.test(String(draft.buyer.mobile || "")) ? draft.buyer.mobile : "9876543210",
        email: /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(draft.buyer.email || "")) ? draft.buyer.email : "demo.customer@velora.example",
        dob: draft.buyer.dob && !Number.isNaN(new Date(draft.buyer.dob).getTime()) && new Date(draft.buyer.dob) < new Date("2008-01-01") ? draft.buyer.dob : "1995-01-01",
        house: draft.buyer.house?.trim() || "Demo House 12",
        street: draft.buyer.street?.trim() || "Demo Main Road",
        city: buyerCity,
        district: draft.buyer.district?.trim() || buyerCity,
        state: buyerState,
        pin: /^[1-9][0-9]{5}$/.test(String(draft.buyer.pin || "")) ? draft.buyer.pin : "110001",
        pan: draft.buyer.pan || "",
        identityType: draft.buyer.identityType || config.documents?.identityTypes?.[0] || "Demo identity proof",
        addressType: draft.buyer.addressType || config.documents?.addressTypes?.[0] || "Demo address proof",
      };
      if (draft.paymentMode === "finance") buyer.pan = /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(String(buyer.pan).toUpperCase()) ? String(buyer.pan).toUpperCase() : "ABCDE1234F";
      patch.buyer = buyer;
      patch.docs = {
        ...(draft.docs || {}),
        identity: draft.docs?.identity || demoFile("DEMO-identity-proof.pdf"),
        address: draft.docs?.address || demoFile("DEMO-address-proof.pdf"),
      };
      if (draft.paymentMode === "finance") {
        patch.docs.pan = draft.docs?.pan || demoFile("DEMO-PAN-card.pdf");
        patch.docs.income = draft.docs?.income || demoFile("DEMO-income-proof.pdf");
        patch.docs.bank = draft.docs?.bank || demoFile("DEMO-bank-statement.pdf");
        patch.eligibility = {
          ...draft.eligibility,
          employment: draft.eligibility?.employment || "Salaried",
          income: Number(draft.eligibility?.income) > 0 ? draft.eligibility.income : "100000",
          existingEmi: draft.eligibility?.existingEmi ?? "0",
          duration: draft.eligibility?.duration || "5 years",
        };
        patch.downPayment = draft.downPayment;
        patch.interestRate = draft.interestRate || config.finance.defaultInterestRate;
        patch.tenureYears = config.finance.tenureYears.includes(Number(draft.tenureYears))
          ? Number(draft.tenureYears) : config.finance.defaultTenureYears;
      }
    }

    if (slug === "finance" && draft.paymentMode === "finance") {
      const purchase = Number(quote.finalPurchase) || 0;
      const defaultDown = Math.round((purchase * 0.2) / 1000) * 1000;
      patch.downPayment = Number.isFinite(Number(draft.downPayment)) && draft.downPayment !== null && draft.downPayment !== ""
        && Number(draft.downPayment) >= 0 && Number(draft.downPayment) < purchase
        ? Number(draft.downPayment) : Math.min(Math.max(0, defaultDown), Math.max(0, purchase - 1));
      patch.interestRate = config.finance.defaultInterestRate;
      patch.tenureYears = config.finance.tenureYears.includes(Number(draft.tenureYears))
        ? Number(draft.tenureYears) : config.finance.defaultTenureYears;
      patch.eligibility = {
        ...draft.eligibility,
        employment: draft.eligibility?.employment || "Salaried",
        income: Number(draft.eligibility?.income) > 0 ? draft.eligibility.income : "100000",
        existingEmi: draft.eligibility?.existingEmi ?? "0",
        duration: draft.eligibility?.duration || "5 years",
      };
      if (draft.paymentMode === "finance") {
        patch.buyer = { ...draft.buyer, pan: /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(String(draft.buyer.pan || "").toUpperCase()) ? String(draft.buyer.pan).toUpperCase() : "ABCDE1234F" };
        patch.docs = {
          ...(draft.docs || {}),
          identity: draft.docs?.identity || demoFile("DEMO-identity-proof.pdf"),
          address: draft.docs?.address || demoFile("DEMO-address-proof.pdf"),
          pan: draft.docs?.pan || demoFile("DEMO-PAN-card.pdf"),
          income: draft.docs?.income || demoFile("DEMO-income-proof.pdf"),
          bank: draft.docs?.bank || demoFile("DEMO-bank-statement.pdf"),
        };
      }
    }

    if (slug === "review") {
      patch.terms = {
        ...draft.terms,
        config: true,
        charges: true,
        optional: true,
        finance: draft.paymentMode === "finance",
        booking: true,
      };
    }

    setErrors({});
    update(patch);
    if (nextSlug) {
      go(nextSlug);
    } else {
      // Payment is the final step. It is still a simulated demo action and does
      // not charge real money or communicate with a payment gateway.
      if (isPayment) pay(false);
    }
  };

  const saveNow = () => { setToast(writeDraft(car.id, draft) ? "Selections saved on this device." : "Couldn't save (browser storage unavailable)."); setTimeout(() => setToast(""), 2500); };

  const pay = (simulateFail) => {
    if (busy || submitted.current) return;
    setFailure(""); setBusy(true);
    setTimeout(() => {
      if (simulateFail) { setBusy(false); setFailure("Demo payment failed. No money was charged. You can try again."); return; }
      const finalQuote = computeQuote({ car, draft, config });
      if (!finalQuote.ok) { setBusy(false); setFailure("Your configuration changed and is no longer valid. Please review it again."); return; }
      const id = generateBookingId();
      const record = buildBookingRecord({ id, car, draft, quote: finalQuote, config, paymentMethod: draft.paymentMethod });
      if (!saveBooking(record)) { setBusy(false); setFailure("Could not save your booking (browser storage is full or blocked)."); return; }
      submitted.current = true;
      clearDraft(car.id);
      navigate(`/booking-success/${encodeURIComponent(id)}`, { replace: true });
    }, 900);
  };

  const shared = { car, draft, update, config, quote, errors };
  const title = isPayment ? "Payment" : STEPS[idx].title;

  return (
    <main className="bk-page">
      <p className="breadcrumbs"><Link to="/">Home</Link> / <Link to={`/cars?brand=${encodeURIComponent(car.brand)}`}>{car.brand}</Link> / <Link to={`/cars/${encodeURIComponent(car.id)}`}>{car.name}</Link> / <span>Book</span></p>

      <ol className="bk-stepper" aria-label="Booking progress">
        {STEPS.map((s, i) => {
          const state = i < idx || (isPayment && i <= idx) ? "done" : i === idx ? "current" : "todo";
          const reachable = i <= draft.maxStep && !isPayment;
          return (
            <li key={s.slug} className={`bk-step ${state}`} aria-current={state === "current" ? "step" : undefined}>
              <button type="button" disabled={!reachable} onClick={() => go(s.slug)}><span className="bk-step-n">{state === "done" ? "✓" : i + 1}</span><span className="bk-step-l">{s.label}</span></button>
            </li>
          );
        })}
        <li className="bk-step todo"><button type="button" disabled><span className="bk-step-n">7</span><span className="bk-step-l">Confirm</span></button></li>
      </ol>

      <div className="bk-layout">
        <div className="bk-main">
          <h1 className="bk-title">{title}</h1>
          {Object.keys(errors).length > 0 && <Notice kind="error">Please fix the highlighted items to continue.</Notice>}
          {slug === "variant" && <VariantStep {...shared} />}
          {slug === "customize" && <CustomizeStep {...shared} />}
          {slug === "on-road" && <OnRoadStep {...shared} />}
          {slug === "details" && <DetailsStep {...shared} />}
          {slug === "finance" && <FinanceStep {...shared} />}
          {slug === "review" && <ReviewStep {...shared} onEdit={go} />}
          {slug === "payment" && <PaymentStep draft={draft} update={update} quote={quote} onPay={pay} onBack={back} onSkipDemo={skipCurrentStepForDemo} busy={busy} failure={failure} />}

          {slug !== "payment" && (
            <div className="bk-actions">
              <button type="button" className="bk-btn bk-btn-ghost" onClick={back}>← Back</button>
              <button type="button" className="bk-btn bk-btn-link" onClick={saveNow}>Save selections</button>
              <button
                type="button"
                className="bk-btn bk-btn-demo-skip"
                onClick={skipCurrentStepForDemo}
                title="Use safe sample values where needed and continue to the next demo step"
              >
                Skip for Demo →
              </button>
              <button type="button" className="bk-btn bk-btn-primary" onClick={next}>{slug === "review" ? "CONFIRM & BOOK" : "Next →"}</button>
            </div>
          )}
          {toast && <div className="bk-toast" role="status">{toast}</div>}
        </div>
        <PriceSummary quote={quote} config={config} />
      </div>
    </main>
  );
}

export default function BookingFlow() {
  const { carId } = useParams();
  const car = getCarById(decodeURIComponent(carId || ""));
  const config = useMemo(() => getBookingConfig(), []);
  if (!car) {
    return (
      <main className="bk-page"><Notice kind="error">We couldn't find that car. Please pick a car and try again.</Notice><Link className="bk-btn bk-btn-primary" to="/">Back to brands</Link></main>
    );
  }
  return <BookingFlowInner key={car.id} car={car} config={config} />;
}
