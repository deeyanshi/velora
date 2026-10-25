import { useState } from "react";
import { inr } from "../pricing";
import { Badge, Row } from "./ui";

/** Live "YOUR BUILD" summary. Sticky sidebar on desktop, collapsible panel on mobile. */
export default function PriceSummary({ quote, config }) {
  const [open, setOpen] = useState(false);
  const { vehicle, onRoad, optional, discounts, tradeIn, financed } = quote;
  const optionalLines = [
    ["Selected colour", optional.totals.colour],
    ["Accessories", optional.totals.accessories],
    ["Protection", optional.totals.protection],
    ["Extended warranty", optional.totals.warranty],
    ["Service package", optional.totals.service],
    ["RSA", optional.totals.rsa],
    ["Modifications", optional.totals.modifications],
  ];

  const body = (
    <>
      <div className="bk-summary-car">
        {vehicle.image && <img src={vehicle.image} alt="" onError={(e) => { e.currentTarget.style.display = "none"; }} />}
        <div>
          <strong>{vehicle.brand} {vehicle.model}</strong>
          <span>{vehicle.variant} · {vehicle.colour}</span>
        </div>
      </div>

      <h5 className="bk-summary-title">Mandatory on-road costs <Badge kind="mandatory">Mandatory</Badge></h5>
      <Row label="Ex-showroom price" value={inr(quote.exShowroom)} tone="mandatory" />
      {onRoad.ok ? (
        <>
          {onRoad.lines.filter((l) => l.key !== "exShowroom").map((line) => (
            <Row key={line.key} label={line.label} value={inr(line.amount)} tone="mandatory" note={line.estimated ? "estimate" : ""} />
          ))}
          {quote.hypothecation > 0 && <Row label="Hypothecation charge (finance only)" value={inr(quote.hypothecation)} tone="mandatory" note="estimate" />}
          <Row label="Core on-road price" value={inr(quote.core)} tone="mandatory" strong />
        </>
      ) : (
        <p className="bk-muted">Choose the registration state on the Price step to see road tax, registration, HSRP and insurance estimates.</p>
      )}

      <h5 className="bk-summary-title">Optional add-ons <Badge kind="optional">Optional</Badge></h5>
      {optionalLines.filter(([, amount]) => amount > 0).map(([label, amount]) => <Row key={label} label={label} value={inr(amount)} tone="optional" />)}
      {optional.total === 0 && <p className="bk-muted">No optional add-ons selected.</p>}
      <Row label="Optional additions" value={inr(optional.total)} tone="optional" strong />

      {discounts.total > 0 && (
        <>
          <h5 className="bk-summary-title">Discounts</h5>
          {discounts.lines.map((line) => <Row key={line.id} label={line.label} value={`− ${inr(line.amount)}`} />)}
        </>
      )}
      {tradeIn.credit > 0 && <Row label="Trade-in credit" value={`− ${inr(tradeIn.credit)}`} />}

      <div className="bk-summary-total">
        <span>{onRoad.ok ? "Configured purchase amount" : "Total (select state)"}</span>
        <strong>{onRoad.ok ? inr(quote.finalPurchase) : "—"}</strong>
      </div>

      {financed && quote.finance?.valid && (
        <div className="bk-summary-finance">
          <Row label="Down payment" value={inr(quote.finance.downPayment)} />
          <Row label="Loan principal" value={inr(quote.finance.principal)} />
          <Row label={`EMI × ${quote.finance.months}`} value={inr(quote.finance.emi)} strong />
        </div>
      )}
      <Row label="Booking amount (pay now)" value={inr(quote.bookingAmount)} />
      <p className="bk-fineprint">Estimated figures. Not an official quotation. Optional add-ons are not part of the mandatory on-road price.</p>
    </>
  );

  return (
    <aside className="bk-summary" aria-label="Your build price summary">
      <button type="button" className="bk-summary-toggle" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <span>Your build · {onRoad.ok ? inr(quote.finalPurchase) : inr(quote.exShowroom)}</span>
        <span>{open ? "Hide ▾" : "Details ▴"}</span>
      </button>
      <div className={`bk-summary-body ${open ? "open" : ""}`}>
        <h4 className="bk-summary-heading">YOUR BUILD</h4>
        {body}
      </div>
    </aside>
  );
}
