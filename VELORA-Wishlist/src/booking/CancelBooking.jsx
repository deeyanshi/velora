import { useEffect, useState } from "react";
import { inr } from "../pricing";
import { Card, Notice, Row, SelectField, TextField } from "./ui";
import { CANCEL_REASONS, CANCELLATION_POLICY, calculateRefund, canCancel, cancelBooking } from "./cancellation";

const fmtDateTime = (v) => {
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? "—" : d.toLocaleString("en-IN", { day: "2-digit", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
};

/** Refund policy table. `activeLabel` highlights the tier that applies right now. */
export function RefundPolicyTable({ activeLabel }) {
  const { tiers, processingFee, refundDays } = CANCELLATION_POLICY;
  return (
    <div className="bk-doc">
      <table className="bk-policy-table">
        <thead><tr><th>When you cancel</th><th>Refund of booking amount</th><th>Processing fee</th></tr></thead>
        <tbody>
          {tiers.map((t) => (
            <tr key={t.label} className={t.label === activeLabel ? "active" : ""}>
              <td>{t.label}</td><td>{t.refundPct}%</td><td>{t.fee ? inr(processingFee) : "Nil"}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="bk-muted">Refunds go to the original payment method in {refundDays}. Demo policy — no real money is processed. Cars that have been delivered cannot be cancelled.</p>
    </div>
  );
}

/** Shown on a cancelled booking. */
export function CancellationSummary({ booking }) {
  const c = booking.cancellation;
  if (!c) return <Notice kind="error">This booking was cancelled.</Notice>;
  return (
    <Card title="Cancellation & refund" badge={<span className="bk-badge bk-badge-cancelled">Cancelled</span>}>
      <Row label="Cancelled on" value={fmtDateTime(c.cancelledAt)} />
      <Row label="Reason" value={c.reason} />
      {c.note && <Row label="Your note" value={c.note} />}
      <Row label="Booking amount paid" value={inr(c.refundBase)} />
      <Row label={`Deduction (${100 - c.refundPct}%)`} value={`− ${inr(c.deduction)}`} />
      {c.processingFee > 0 && <Row label="Processing fee" value={`− ${inr(c.processingFee)}`} />}
      <Row label="Refund amount" value={inr(c.refundAmount)} strong />
      <Row label="Refund status" value={c.refundStatus} />
      {c.refundAmount > 0 && <Row label="Expected in account" value={c.refundEta} note="Estimate" />}
      <p className="bk-muted">Demo cancellation — no real refund is processed.</p>
    </Card>
  );
}

/** Cancel button + confirmation modal. Calls onCancelled(updatedBooking) after success. */
export default function CancelBooking({ booking, onCancelled }) {
  const [open, setOpen] = useState(false);
  const [reason, setReason] = useState("");
  const [note, setNote] = useState("");
  const [agree, setAgree] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!canCancel(booking)) return null;
  const calc = calculateRefund(booking);

  const confirm = () => {
    if (!reason) return setError("Please select a reason for cancelling.");
    if (!agree) return setError("Please confirm that you understand the refund amount.");
    const updated = cancelBooking(booking.id, reason, note);
    if (!updated) return setError("Could not cancel this booking. Please try again.");
    setOpen(false);
    onCancelled(updated);
  };

  return (
    <>
      <Card title="Cancel booking" subtitle="Changed your mind? See the refund you would get.">
        <Row label="Booking amount paid" value={inr(calc.base)} note={calc.estimated ? "Estimate" : ""} />
        <Row label="Refund if cancelled now" value={inr(calc.refund)} strong note={calc.tier.label} />
        <RefundPolicyTable activeLabel={calc.tier.label} />
        <button type="button" className="bk-btn bk-btn-danger" onClick={() => { setError(""); setOpen(true); }}>CANCEL BOOKING</button>
      </Card>

      {open && (
        <div className="bk-modal-backdrop" onClick={() => setOpen(false)}>
          <div className="bk-modal" role="dialog" aria-modal="true" aria-labelledby="cancel-title" onClick={(e) => e.stopPropagation()}>
            <h3 id="cancel-title">Cancel booking {booking.id}?</h3>
            <p className="bk-muted">{booking.carName}{booking.variant ? ` · ${booking.variant}` : ""}. This cannot be undone.</p>
            <SelectField label="Reason for cancelling" required value={reason} onChange={setReason} options={CANCEL_REASONS} placeholder="Select a reason" />
            <TextField label="Additional note (optional)" value={note} onChange={setNote} maxLength={200} placeholder="Tell us more" />
            <div className="bk-refund-box">
              <Row label="Booking amount paid" value={inr(calc.base)} />
              <Row label={`Deduction (${100 - calc.tier.refundPct}%)`} value={`− ${inr(calc.deduction)}`} />
              {calc.fee > 0 && <Row label="Processing fee" value={`− ${inr(calc.fee)}`} />}
              <Row label="You will be refunded" value={inr(calc.refund)} strong />
            </div>
            <label className="bk-check">
              <input type="checkbox" checked={agree} onChange={(e) => setAgree(e.target.checked)} />
              <span>I understand the refund amount and want to cancel this booking.</span>
            </label>
            {error && <p className="bk-error" role="alert">{error}</p>}
            <div className="bk-actions">
              <button type="button" className="bk-btn bk-btn-ghost" onClick={() => setOpen(false)}>KEEP BOOKING</button>
              <button type="button" className="bk-btn bk-btn-danger" onClick={confirm}>CONFIRM CANCELLATION</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
