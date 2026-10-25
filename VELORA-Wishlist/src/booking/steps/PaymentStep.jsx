import { useState } from "react";
import { Badge, Card, Notice, Row } from "../ui";
import { inr } from "../../pricing";

const METHODS = [["UPI", "UPI"], ["Card", "Credit / debit card"], ["Net Banking", "Net banking"], ["Other", "Other gateway methods"]];

/* DEMO ONLY. No card number / CVV / UPI ID is collected. Replace `onPay` with a Razorpay / Stripe
   checkout call (create the order on a server, verify the signature on a server). */
export default function PaymentStep({ draft, update, quote, onPay, onBack, busy, failure }) {
  const [simulateFail, setSimulateFail] = useState(false);
  return (
    <>
      <Notice kind="warn"><strong>Demo Payment Mode.</strong> No real payment is processed and no money is charged. Do not enter real card or bank details.</Notice>
      {failure && <Notice kind="error">{failure}</Notice>}
      <Card title="Pay booking amount" badge={<Badge kind="info">Demo</Badge>}>
        <Row label="Booking amount" value={inr(quote.bookingAmount)} strong />
        <Row label="Final purchase amount" value={inr(quote.finalPurchase)} />
        <div className="bk-methods" role="radiogroup" aria-label="Payment method">
          {METHODS.map(([value, label]) => (
            <label key={value} className={`bk-method ${draft.paymentMethod === value ? "active" : ""}`}>
              <input type="radio" name="pm" checked={draft.paymentMethod === value} onChange={() => update({ paymentMethod: value })} />
              <span>{label}</span>
            </label>
          ))}
        </div>
        <label className="bk-check"><input type="checkbox" checked={simulateFail} onChange={(e) => setSimulateFail(e.target.checked)} /><span>Simulate a failed payment (demo testing)</span></label>
        <div className="bk-actions">
          <button type="button" className="bk-btn bk-btn-ghost" onClick={onBack} disabled={busy}>← Back to review</button>
          <button type="button" className="bk-btn bk-btn-primary" disabled={busy} onClick={() => onPay(simulateFail)}>{busy ? "Processing…" : `Pay ${inr(quote.bookingAmount)} (demo)`}</button>
        </div>
      </Card>
    </>
  );
}
