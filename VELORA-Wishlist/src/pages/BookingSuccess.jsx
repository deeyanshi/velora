import { useEffect, useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { getBookingById } from "../booking/bookingStorage";
import BookingTimeline from "../booking/BookingTimeline";
import { Notice, Row } from "../booking/ui";
import { inr } from "../pricing";
import "../styles/booking.css";

export default function BookingSuccess() {
  const { bookingId } = useParams();
  const booking = useMemo(() => getBookingById(decodeURIComponent(bookingId || "")), [bookingId]);
  useEffect(() => { document.title = "VELORA | Booking Confirmed"; }, []);

  if (!booking?.details) {
    return (
      <main className="bk-page bk-narrow">
        <Notice kind="error">We couldn't find this booking on this device.</Notice>
        <div className="bk-actions"><Link className="bk-btn bk-btn-ghost" to="/">GO TO HOME</Link><Link className="bk-btn bk-btn-primary" to="/history">VIEW BOOKING HISTORY</Link></div>
      </main>
    );
  }
  const d = booking.details;
  return (
    <main className="bk-page bk-narrow">
      <div className="bk-success">
        <div className="bk-success-icon" aria-hidden="true">🎉</div>
        <h1>BOOKING CONFIRMED</h1>
        <p className="bk-success-id">Booking ID: <strong>{booking.id}</strong></p>
        <Notice kind="warn">Demo booking: no real payment was processed and no money was charged.</Notice>
        {d.vehicle.image && <img className="bk-success-img" src={d.vehicle.image} alt={booking.carName} onError={(e) => { e.currentTarget.style.display = "none"; }} />}
        <div className="bk-card">
          <Row label="Vehicle" value={booking.carName} />
          <Row label="Variant" value={d.vehicle.variant} />
          <Row label="Colour" value={d.vehicle.colour} />
          <Row label="Booking amount" value={inr(d.payment.bookingAmount)} />
          <Row label="Payment status" value={d.status.payment} />
        </div>
        <div className="bk-card"><h3>Booking progress</h3><BookingTimeline booking={booking} /></div>
        <div className="bk-actions bk-center">
          <Link className="bk-btn bk-btn-ghost" to="/">GO TO HOME</Link>
          <Link className="bk-btn bk-btn-primary" to="/history">VIEW BOOKING HISTORY</Link>
        </div>
      </div>
    </main>
  );
}
