import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getBookingById } from "../booking/bookingStorage";
import BookingTimeline from "../booking/BookingTimeline";
import CancelBooking, { CancellationSummary } from "../booking/CancelBooking";
import { isCancelled } from "../booking/cancellation";
import { Badge, Card, Notice, Row } from "../booking/ui";
import { inr } from "../pricing";
import "../styles/booking.css";

const fmt = (value) => {
  const d = new Date(value);
  return Number.isNaN(d.getTime()) ? "To be confirmed" : d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

function LegacyDetails({ booking }) {
  return (
    <Card title="Booking summary">
      <Notice>This booking was made with the earlier quick-booking form, so a full price breakdown isn't available.</Notice>
      <Row label="Car" value={booking.carName} />
      {booking.variant && <Row label="Variant" value={booking.variant} />}
      <Row label="Colour" value={booking.color || "Standard"} />
      <Row label="Payment mode" value={booking.payment || "Not specified"} />
      <Row label="Total" value={inr(booking.total)} strong />
      {booking.mods?.length > 0 && <Row label="Selected extras" value={booking.mods.join(", ")} />}
      <Row label="Booked on" value={fmt(booking.createdAt)} />
    </Card>
  );
}

export default function BookingDetails() {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(() => getBookingById(decodeURIComponent(bookingId || "")));
  useEffect(() => { setBooking(getBookingById(decodeURIComponent(bookingId || ""))); }, [bookingId]);
  useEffect(() => { document.title = "VELORA | Booking Details"; }, []);

  if (!booking) {
    return (
      <main className="bk-page bk-narrow"><Notice kind="error">Booking not found on this device.</Notice><Link className="bk-btn bk-btn-primary" to="/history">Back to history</Link></main>
    );
  }
  const d = booking.details;
  return (
    <main className="bk-page bk-narrow">
      <p className="breadcrumbs"><Link to="/history">History</Link> / <span>{booking.id}</span></p>
      <h1 className="bk-title">{booking.carName}{d?.vehicle?.variant ? ` · ${d.vehicle.variant}` : ""}</h1>
      <p className="bk-sub">Booking ID {booking.id} · booked {fmt(booking.createdAt)}</p>
      {isCancelled(booking) && <CancellationSummary booking={booking} />}
      {!d ? <LegacyDetails booking={booking} /> : (
        <>
          <Card title="Vehicle">
            <div className="bk-review-car">
              {d.vehicle.image && <img src={d.vehicle.image} alt={booking.carName} onError={(e) => { e.currentTarget.style.display = "none"; }} />}
              <dl className="bk-specs">
                <dt>Variant</dt><dd>{d.vehicle.variant}</dd><dt>Fuel</dt><dd>{d.vehicle.fuel}</dd><dt>Transmission</dt><dd>{d.vehicle.transmission}</dd>
                <dt>Seating</dt><dd>{d.vehicle.seating}</dd><dt>Body</dt><dd>{d.vehicle.bodyStyle}</dd><dt>Colour</dt><dd>{d.vehicle.colour}</dd>
              </dl>
            </div>
          </Card>
          <Card title="Price breakdown" badge={<Badge kind="mandatory">Mandatory</Badge>} subtitle={`Registration: ${d.registration.state}, ${d.registration.city} (${d.registration.rto}) · estimated`}>
            {d.onRoad.lines.map((l) => <Row key={l.key} label={l.label} value={inr(l.amount)} tone="mandatory" />)}
            {d.onRoad.hypothecation > 0 && <Row label="Hypothecation charge" value={inr(d.onRoad.hypothecation)} tone="mandatory" />}
            <Row label="Core on-road price" value={inr(d.onRoad.core + d.onRoad.hypothecation)} tone="mandatory" strong />
          </Card>
          <Card title="Optional add-ons" badge={<Badge kind="optional">Optional</Badge>}>
            {d.optional.colour > 0 && <Row label={`Colour: ${d.vehicle.colour}`} value={inr(d.optional.colour)} tone="optional" />}
            {["accessories", "protection", "warranty", "service", "rsa", "modifications"].flatMap((k) => d.optional[k] || []).map((r) => <Row key={r.id} label={r.name} value={inr(r.price)} tone="optional" />)}
            {d.optional.total === 0 && <p className="bk-muted">None selected.</p>}
            <Row label="Optional additions" value={inr(d.optional.total)} tone="optional" strong />
            {d.discounts.map((x) => <Row key={x.label} label={x.label} value={`− ${inr(x.amount)}`} />)}
            {d.tradeIn && <Row label={`Trade-in: ${d.tradeIn.car || "existing car"}`} value={`− ${inr(d.tradeIn.credit)}`} />}
            <Row label="Final purchase amount" value={inr(d.finalAmount)} strong />
          </Card>
          <Card title="Payment">
            <Row label="Payment type" value={d.payment.mode === "finance" ? "Car loan / finance" : "Full payment"} />
            <Row label="Method" value={d.payment.method} />
            <Row label="Booking amount" value={inr(d.payment.bookingAmount)} />
            <Row label="Payment status" value={d.status.payment} />
            {d.payment.demo && <p className="bk-muted">Demo booking — no real payment was processed.</p>}
          </Card>
          {d.finance && (
            <Card title="Finance">
              <Row label="Down payment" value={inr(d.finance.downPayment)} />
              <Row label="Loan principal" value={inr(d.finance.loanPrincipal)} />
              <Row label="Interest rate" value={`${d.finance.interestRate}% p.a.`} />
              <Row label="Tenure" value={`${d.finance.tenureYears} years (${d.finance.months} EMIs)`} />
              <Row label="Monthly EMI" value={inr(d.finance.emi)} strong />
              <Row label="Total interest" value={inr(d.finance.totalInterest)} />
              <Row label="Total repayment" value={inr(d.finance.totalRepayment)} />
              <Row label="Finance status" value={d.finance.status} />
              <p className="bk-muted">No repayments have started, so no remaining-balance tracking is available yet.</p>
            </Card>
          )}
          <Card title="Status">
            <Row label="Booking status" value={d.status.booking} />
            <Row label="Delivery status" value={booking.delivery?.status || d.status.delivery} />
            <Row label="Estimated delivery" value={fmt(booking.delivery?.estimatedDate || d.estimatedDelivery)} note="Estimate" />
            <Row label="Registration status" value={d.status.registration} />
            <BookingTimeline booking={booking} />
          </Card>
          <Card title="Customer">
            <Row label="Name" value={d.buyer.name} /><Row label="Mobile" value={d.buyer.mobile} /><Row label="Email" value={d.buyer.email} /><Row label="Address" value={d.buyer.address} />
            {d.buyer.panMasked && <Row label="PAN" value={d.buyer.panMasked} />}
          </Card>
        </>
      )}
      <CancelBooking booking={booking} onCancelled={setBooking} />
      <div className="bk-actions"><Link className="bk-btn bk-btn-ghost" to="/history">← Back to history</Link><Link className="bk-btn bk-btn-primary" to="/">GO TO HOME</Link></div>
    </main>
  );
}
