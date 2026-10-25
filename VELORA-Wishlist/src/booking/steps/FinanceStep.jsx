import { Accordion, Badge, Card, Notice, Row, SelectField, TextField } from "../ui";
import DocumentUpload from "./DocumentUpload";
import EmiSchedule from "./EmiSchedule";
import { estimateEligibility, inr, summarizeLoan } from "../../pricing";

const EMPLOYMENT = ["Salaried", "Self-employed", "Business", "Other"];

export default function FinanceStep({ draft, update, config, quote, errors }) {
  const financed = draft.paymentMode === "finance";
  const f = quote.finance;
  const fc = config.finance;
  const el = draft.eligibility;
  const setEl = (patch) => update({ eligibility: { ...el, ...patch } });
  const setDocs = (docs) => update({ docs });
  const max = Math.max(0, Math.round(quote.finalPurchase));
  const dpValue = draft.downPayment === null || draft.downPayment === undefined ? (f?.downPayment ?? 0) : draft.downPayment;

  const elig = financed && f?.valid ? estimateEligibility({
    monthlyIncome: Number(el.income), existingEmi: Number(el.existingEmi), foirPct: fc.foirPct,
    annualRate: f.interestRate, months: f.months, requestedLoan: f.principal,
  }) : null;

  const short = financed && f?.valid && f.years > 1 ? summarizeLoan(f.principal, f.interestRate, Math.max(1, f.years - 2)) : null;
  const long = financed && f?.valid && f.years < Math.max(...fc.tenureYears) ? summarizeLoan(f.principal, f.interestRate, Math.min(Math.max(...fc.tenureYears), f.years + 2)) : null;

  return (
    <>
      <Card title="How would you like to pay?">
        <div className="bk-choice">
          {[["full", "OPTION A", "Full payment", "Pay the full configured amount"], ["finance", "OPTION B", "Car loan / finance", "Pay a down payment and finance the rest"]].map(([mode, tag, title, text]) => (
            <button key={mode} type="button" className={`bk-choice-card ${draft.paymentMode === mode ? "active" : ""}`} aria-pressed={draft.paymentMode === mode} onClick={() => update({ paymentMode: mode })}>
              <small>{tag}</small><strong>{title}</strong><span>{text}</span>
            </button>
          ))}
        </div>
        {errors.paymentMode && <p className="bk-error" role="alert">{errors.paymentMode}</p>}
      </Card>

      <Card title="Booking amount" subtitle="Four separate amounts: booking amount, down payment, loan amount and final purchase amount.">
        <Row label="Booking amount (pay now to reserve)" value={inr(quote.bookingAmount)} strong />
        <p className="bk-muted">{config.bookingAmountNote} It is not automatically your down payment.</p>
      </Card>

      {!financed && (
        <Card title="Full payment" badge={<Badge kind="info">Demo mode</Badge>}>
          <Row label="Final configured purchase amount" value={inr(quote.finalPurchase)} />
          <Row label="Booking amount payable now" value={inr(quote.bookingAmount)} />
          <Row label="Balance payable at delivery / invoicing" value={inr(quote.balanceAfterBooking)} strong />
          <p className="bk-muted">Payment methods (UPI, card, net banking) are chosen on the final payment screen, which runs in demo mode until a real gateway is connected.</p>
        </Card>
      )}

      {financed && (
        <>
          <Card title="Loan calculator" subtitle="Everything below recalculates as you change a value.">
            <Row label="Financed purchase amount" value={inr(quote.finalPurchase)} />
            {quote.hypothecation > 0 && <p className="bk-muted">Includes an estimated hypothecation charge of {inr(quote.hypothecation)} that applies only to financed purchases.</p>}
            {quote.financeErrors.length > 0 && <Notice kind="error">{quote.financeErrors.map((m) => <div key={m}>{m}</div>)}</Notice>}

            <div className="bk-grid-2">
              <div>
                <TextField label="Down payment (₹)" inputMode="numeric" value={dpValue === "" ? "" : String(dpValue)} onChange={(v) => update({ downPayment: v.replace(/[^\d]/g, "") })} />
                <input className="bk-range" type="range" aria-label="Down payment slider" min={0} max={max} step={1000} value={Math.min(Number(dpValue) || 0, max)} onChange={(e) => update({ downPayment: Number(e.target.value) })} />
                <div className="bk-range-labels"><span>₹0</span><span>{inr(max)}</span></div>
              </div>
              <div>
                <TextField label="Interest rate (% per year)" inputMode="decimal" value={draft.interestRate} onChange={(v) => update({ interestRate: v.replace(/[^\d.]/g, "") })} hint={`Indicative default ${fc.defaultInterestRate}%. Your lender sets the actual rate.`} />
                <SelectField label="Loan tenure" value={String(draft.tenureYears)} onChange={(v) => update({ tenureYears: Number(v) })} options={fc.tenureYears.map((y) => [String(y), `${y} ${y === 1 ? "year" : "years"} (${y * 12} EMIs)`])} placeholder="Select tenure" />
              </div>
            </div>

            {f?.valid && (
              <div className="bk-emi-box">
                <div className="bk-emi-main"><span>Monthly EMI</span><strong>{inr(f.emi)}</strong></div>
                <Row label="Loan principal" value={inr(f.principal)} />
                <Row label="Number of EMIs" value={f.months} />
                <Row label="Total interest" value={inr(f.totalInterest)} />
                <Row label="Total repayment" value={inr(f.totalRepayment)} strong />
                <EmiSchedule principal={f.principal} rate={f.interestRate} months={f.months} />
              </div>
            )}
          </Card>

          {f?.valid && (short || long) && (
            <Card title="Shorter vs longer tenure">
              <div className="bk-compare">
                {short && <div><small>Shorter · {short.years} yr</small><strong>{inr(short.emi)}/mo</strong><span>Higher EMI → lower total interest ({inr(short.totalInterest)})</span></div>}
                <div className="current"><small>Selected · {f.years} yr</small><strong>{inr(f.emi)}/mo</strong><span>Total interest {inr(f.totalInterest)}</span></div>
                {long && <div><small>Longer · {long.years} yr</small><strong>{inr(long.emi)}/mo</strong><span>Lower EMI → higher total interest ({inr(long.totalInterest)})</span></div>}
              </div>
            </Card>
          )}

          <Card title="Finance eligibility (indicative)" subtitle="Estimated eligibility only. Final approval is subject to lender verification.">
            <div className="bk-grid-2">
              <SelectField label="Employment type" required value={el.employment} onChange={(v) => setEl({ employment: v })} options={EMPLOYMENT} error={errors.employment} />
              <TextField label="Monthly income (₹)" required inputMode="numeric" value={el.income} onChange={(v) => setEl({ income: v.replace(/\D/g, "") })} error={errors.income} />
              <TextField label="Existing monthly EMI (₹)" inputMode="numeric" value={el.existingEmi} onChange={(v) => setEl({ existingEmi: v.replace(/\D/g, "") })} />
              <TextField label="Employment / business duration" value={el.duration} onChange={(v) => setEl({ duration: v })} placeholder="e.g. 3 years" />
            </div>
            {elig?.status === "within" && <Notice>Your requested loan looks within an indicative range (about {inr(elig.indicativeLoan)} at this EMI capacity). This is not an approval.</Notice>}
            {elig?.status === "above" && <Notice kind="warn">The requested loan looks above an indicative range (about {inr(elig.indicativeLoan)}). A larger down payment or longer tenure may help. This is not a rejection.</Notice>}
            {elig?.status === "none" && <Notice kind="warn">Your existing EMIs leave little room for a new loan on this indicative check. A lender may still assess differently.</Notice>}
            <p className="bk-fineprint">Estimated eligibility only. Final approval is subject to lender verification. VELORA does not promise loan approval.</p>
          </Card>

          <Card title="Finance documents" subtitle="Which documents are needed depends on the lender. Upload what you have; the dealer or lender may ask for more.">
            {errors.pan && <TextField label="PAN" required value={draft.buyer.pan} maxLength={10} onChange={(v) => update({ buyer: { ...draft.buyer, pan: v.toUpperCase() } })} error={errors.pan} />}
            <DocumentUpload docKey="pan" label="PAN card" docs={draft.docs} setDocs={setDocs} />
            <DocumentUpload docKey="income" label={el.employment === "Salaried" ? "Salary slips (latest 3 months)" : "Income proof (ITR / Form 16 / business documents)"} docs={draft.docs} setDocs={setDocs} />
            <DocumentUpload docKey="bank" label="Bank statement (latest 6 months)" docs={draft.docs} setDocs={setDocs} />
            {errors.docs && <p className="bk-error" role="alert">{errors.docs}</p>}
          </Card>

          <Card title="Understand your loan">
            <Accordion title="What is EMI?">EMI (Equated Monthly Instalment) is the fixed amount you pay every month. Each EMI contains two parts: a repayment of the loan principal and the interest on the balance still owed. Early EMIs are mostly interest; later ones are mostly principal.</Accordion>
            <Accordion title="What is loan tenure?">Tenure is the period over which you repay the loan, counted in monthly instalments. A 5-year tenure means 60 EMIs.</Accordion>
            <Accordion title="What is down payment?">The down payment is your upfront contribution towards the car. It is subtracted from the financed purchase amount, so a larger down payment means a smaller loan and a lower EMI.</Accordion>
            <Accordion title="Why does a longer tenure have a lower EMI?">A longer tenure spreads the same principal over more months, so each EMI is smaller. But interest accrues for longer, so you generally pay more in total.
              <div className="bk-compare small"><div><small>Shorter tenure</small><span>→ Higher EMI<br />→ Lower total interest</span></div><div><small>Longer tenure</small><span>→ Lower EMI<br />→ Higher total interest</span></div></div>
            </Accordion>
          </Card>
        </>
      )}
    </>
  );
}
