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
          {slug === "payment" && <PaymentStep draft={draft} update={update} quote={quote} onPay={pay} onBack={back} busy={busy} failure={failure} />}

          {slug !== "payment" && (
            <div className="bk-actions">
              <button type="button" className="bk-btn bk-btn-ghost" onClick={back}>← Back</button>
              <button type="button" className="bk-btn bk-btn-link" onClick={saveNow}>Save selections</button>
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
