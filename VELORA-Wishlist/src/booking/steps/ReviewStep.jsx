import { Badge, Card, Notice, Row } from "../ui";
import { inr } from "../../pricing";

const EditBtn = ({ to, onEdit }) => <button type="button" className="bk-link" onClick={() => onEdit(to)}>Edit</button>;

export default function ReviewStep({ draft, update, quote, errors, onEdit }) {
  const v = quote.vehicle;
  const o = quote.optional;
  const b = draft.buyer;
  const f = quote.finance;
  const t = draft.terms;
  const setTerm = (key) => (e) => update({ terms: { ...t, [key]: e.target.checked } });
  const optionalRows = [
    ["Colour", o.colourCost ? [{ name: v.colour, price: o.colourCost }] : []],
    ["Accessories", o.accessories], ["Protection", o.protection], ["Extended warranty", o.warranty],
    ["Service package", o.service], ["Roadside assistance", o.rsa], ["Modifications", o.modifications],
  ];
  const terms = [
    ["config", "I confirm the selected vehicle, variant and configuration."],
    ["charges", "I have reviewed the mandatory on-road charges."],
    ["optional", "I understand optional accessories/modifications are separate."],
    ...(quote.financed ? [["finance", "I understand finance approval is subject to lender verification."]] : []),
    ["booking", "I agree to the applicable booking, payment and cancellation terms."],
  ];

  return (
    <>
      <Card title="Vehicle" action={<EditBtn to="variant" onEdit={onEdit} />}>
        <div className="bk-review-car">
          {v.image && <img src={v.image} alt={`${v.brand} ${v.model}`} onError={(e) => { e.currentTarget.style.display = "none"; }} />}
          <dl className="bk-specs">
            <dt>Brand</dt><dd>{v.brand}</dd><dt>Model</dt><dd>{v.model}</dd><dt>Variant</dt><dd>{v.variant}</dd>
            <dt>Fuel</dt><dd>{v.fuel}</dd><dt>Transmission</dt><dd>{v.transmission}</dd><dt>Colour</dt><dd>{v.colour}</dd>
          </dl>
        </div>
      </Card>

      <Card title="Mandatory on-road price" badge={<Badge kind="mandatory">Mandatory</Badge>} action={<EditBtn to="on-road" onEdit={onEdit} />} subtitle={`Registration: ${draft.state}, ${draft.city}${draft.rto ? ` (${draft.rto})` : ""} · estimated`}>
        {quote.onRoad.lines.map((l) => <Row key={l.key} label={l.label} value={inr(l.amount)} tone="mandatory" />)}
        {quote.hypothecation > 0 && <Row label="Hypothecation charge (finance only)" value={inr(quote.hypothecation)} tone="mandatory" />}
        <Row label="Core on-road price" value={inr(quote.core + quote.hypothecation)} tone="mandatory" strong />
      </Card>

      <Card title="Optional add-ons" badge={<Badge kind="optional">Optional</Badge>} action={<EditBtn to="customize" onEdit={onEdit} />}>
        {o.total === 0 && <p className="bk-muted">No optional add-ons selected.</p>}
        {optionalRows.map(([title, rows]) => rows.length > 0 && rows.map((r) => <Row key={`${title}-${r.id || r.name}`} label={`${title}: ${r.name}`} value={inr(r.price)} tone="optional" />))}
        <Row label="Optional additions" value={inr(o.total)} tone="optional" strong />
      </Card>

      <Card title="Discounts & trade-in" action={<EditBtn to="on-road" onEdit={onEdit} />}>
        {quote.discounts.lines.length === 0 && !draft.tradeIn.enabled && <p className="bk-muted">No discounts or trade-in applied.</p>}
        {quote.discounts.lines.map((d) => <Row key={d.id} label={d.label} value={`− ${inr(d.amount)}`} />)}
        {draft.tradeIn.enabled && quote.tradeIn.credit > 0 && <Row label={`Trade-in: ${draft.tradeIn.car || "existing car"}`} value={`− ${inr(quote.tradeIn.credit)}`} />}
        <Row label="Final configured purchase amount" value={inr(quote.finalPurchase)} strong />
      </Card>

      <Card title="Payment" action={<EditBtn to="finance" onEdit={onEdit} />}>
        <Row label="Payment type" value={quote.financed ? "Car loan / finance" : "Full payment"} />
        <Row label="Booking amount (pay now)" value={inr(quote.bookingAmount)} />
        {quote.financed && f && (
          <>
            <Row label="Down payment" value={inr(f.downPayment)} />
            <Row label="Loan principal" value={inr(f.principal)} />
            <Row label="Interest rate" value={`${f.interestRate}% p.a.`} />
            <Row label="Tenure" value={`${f.years} years (${f.months} EMIs)`} />
            <Row label="Monthly EMI" value={inr(f.emi)} strong />
            <Row label="Total interest" value={inr(f.totalInterest)} />
            <Row label="Total repayment" value={inr(f.totalRepayment)} />
          </>
        )}
      </Card>

      <Card title="Customer" action={<EditBtn to="details" onEdit={onEdit} />}>
        <Row label="Name" value={b.name} /><Row label="Mobile" value={b.mobile} /><Row label="Email" value={b.email} />
        <Row label="Registration" value={`${draft.state}${draft.rto ? ` · ${draft.rto}` : ""}`} />
      </Card>

      <Card title="Terms & confirmation">
        {terms.map(([key, text]) => (
          <label key={key} className="bk-check">
            <input type="checkbox" checked={Boolean(t[key])} onChange={setTerm(key)} /><span>{text}</span>
          </label>
        ))}
        {errors.terms && <p className="bk-error" role="alert">{errors.terms}</p>}
        <Notice kind="warn">Prices are estimates and not an official quotation. The booking amount reserves the vehicle/configuration subject to booking and cancellation terms.</Notice>
      </Card>
    </>
  );
}
