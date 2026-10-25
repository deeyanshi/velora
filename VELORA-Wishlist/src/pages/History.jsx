import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { cars, formatINR, getCarById } from "../data/carData";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80";

function readStorage(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function createDemoDelivery(createdAt) {
  const created = new Date(createdAt);
  const estimatedDate = new Date(created);
  estimatedDate.setDate(estimatedDate.getDate() + 14);

  return {
    status: "Order Confirmed",
    estimatedDate: estimatedDate.toISOString(),
    shippedDate: null,
    deliveredAt: null,
  };
}

function normalizeBooking(booking) {
  const createdAt = booking.createdAt || new Date().toISOString();
  return {
    recordType: "booking",
    id: booking.id || `BK-${Date.now()}`,
    carId: booking.carId || "",
    carName: booking.carName || "Unknown Car",
    color: booking.color || "Standard",
    mods: Array.isArray(booking.mods) ? booking.mods : [],
    total: Number(booking.total) || 0,
    payment: booking.payment || "Not specified",
    customer: booking.customer || {},
    delivery: booking.delivery || createDemoDelivery(createdAt),
    createdAt,
    variant: booking.variant || booking.details?.vehicle?.variant || "",
    details: booking.details || null,
    cancellation: booking.cancellation || null,
  };
}

function normalizeTestDrive(drive) {
  return {
    recordType: "testdrive",
    id: drive.id || `TD-${Date.now()}`,
    carId: drive.carId || "",
    carName: drive.carName || "Unknown Car",
    fee: Number(drive.fee) || 0,
    name: drive.name || "Customer",
    phone: drive.phone || "Not provided",
    city: drive.city || "Not provided",
    date: drive.date || "",
    slot: drive.slot || "Not selected",
    duration: Number(drive.duration) || 60,
    createdAt: drive.createdAt || new Date().toISOString(),
  };
}

function formatDate(value) {
  if (!value) return "Not available";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function formatDateTime(value) {
  if (!value) return "Not available";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return String(value);
  return date.toLocaleString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

function getDeliveryStatus(delivery) {
  if (!delivery) return "Order Confirmed";
  if (delivery.status === "Delivered") return "Delivered";
  if (delivery.status === "On the Way") return "On the Way";
  if (delivery.status === "Processing") return "Processing";
  if (delivery.status === "Cancelled") return "Cancelled";
  return "Order Confirmed";
}

function getStatusClass(status) {
  switch (status) {
    case "Delivered": return "status-delivered";
    case "On the Way": return "status-transit";
    case "Processing": return "status-processing";
    case "Cancelled": return "status-cancelled";
    default: return "status-confirmed";
  }
}

function getStatusDate(delivery) {
  if (!delivery) return "";
  if (delivery.status === "Delivered" && delivery.deliveredAt) {
    return `Received ${formatDateTime(delivery.deliveredAt)}`;
  }
  if (delivery.status === "Cancelled") return "";
  return `ETA ${formatDate(delivery.estimatedDate)}`;
}

function normalizeAllRecords() {
  const bookings = readStorage("velora_bookings").map(normalizeBooking);
  const testDrives = readStorage("velora_test_drives").map(normalizeTestDrive);

  return {
    bookings,
    testDrives,
    all: [...bookings, ...testDrives].sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    ),
  };
}

function DetailBox({ label, value }) {
  return (
    <div className="detail-box">
      <p className="detail-box-label">{label}</p>
      <p className="detail-box-value">{value == null ? "Not available" : String(value)}</p>
    </div>
  );
}

function DeliveryTracker({ delivery }) {
  const status = getDeliveryStatus(delivery);
  const processing = ["Processing", "On the Way", "Delivered"].includes(status);
  const transit = ["On the Way", "Delivered"].includes(status);
  const delivered = status === "Delivered";

  const steps = [
    ["Confirmed", true, "✓"],
    ["Processing", processing, processing ? "✓" : "2"],
    ["On the Way", transit, transit ? "✓" : "3"],
    ["Delivered", delivered, delivered ? "✓" : "4"],
  ];

  return (
    <div className="delivery-tracker">
      <h4>Delivery Progress</h4>
      <div className="delivery-progress">
        {steps.map(([label, complete, symbol]) => (
          <div className={`delivery-step ${complete ? "completed" : ""}`} key={label}>
            <div className="delivery-dot">{symbol}</div>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="test-drive-note">
        {status === "Delivered"
          ? "Your car has been delivered. The received date and time are shown in the booking details."
          : "Estimated delivery information is currently demonstration data. Final delivery timing must be confirmed by VELORA."}
      </div>
    </div>
  );
}

function BookingCard({ booking }) {
  const car = getCarById(booking.carId);
  const image = car?.image || FALLBACK_IMAGE;
  const status = getDeliveryStatus(booking.delivery);
  const estimatedDate = booking.delivery?.estimatedDate
    ? formatDate(booking.delivery.estimatedDate)
    : "To be confirmed";
  const deliveredAt = booking.delivery?.deliveredAt
    ? formatDateTime(booking.delivery.deliveredAt)
    : "Not delivered yet";

  const [expanded, setExpanded] = useState(false);

  return (
    <article className="history-card">
      <div className="history-card-top">
        <div className="history-image">
          <img src={image} alt={booking.carName} onError={(event) => { event.currentTarget.src = FALLBACK_IMAGE; }} />
        </div>

        <div>
          <div className="history-type">🚗 Car Booking</div>
          <h2 className="history-card-title">{booking.carName}{booking.variant ? ` · ${booking.variant}` : ""}</h2>
          <p className="history-subtitle">Booking ID: {booking.id}</p>
        </div>

        <div className="history-status">
          <span className={`status-badge ${getStatusClass(status)}`}>{status}</span>
          <span className="status-date">{getStatusDate(booking.delivery)}</span>
        </div>
      </div>

      <div className="history-divider"></div>

      <div className="history-quick-details">
        <div className="quick-detail"><p className="quick-detail-label">Booked On</p><p className="quick-detail-value">{formatDateTime(booking.createdAt)}</p></div>
        <div className="quick-detail"><p className="quick-detail-label">Total Amount</p><p className="quick-detail-value">{formatINR(booking.total)}</p></div>
        <div className="quick-detail"><p className="quick-detail-label">Delivery City</p><p className="quick-detail-value">{booking.customer.city || "Not specified"}</p></div>
        <div className="quick-detail"><p className="quick-detail-label">Estimated Delivery</p><p className="quick-detail-value">{estimatedDate}</p></div>
      </div>

      <div className="history-actions">
        <button type="button" className="details-button" onClick={() => setExpanded((value) => !value)}>
          {expanded ? "Hide Details ↑" : "View Full Details ↓"}
        </button>
        <Link className="details-button" to={`/booking/${encodeURIComponent(booking.id)}`}>VIEW DETAILS</Link>
      </div>

      <div className={`history-expanded ${expanded ? "open" : ""}`}>
        <h3 className="details-heading">Booking Details</h3>

        <div className="details-grid">
          <DetailBox label="Booking ID" value={booking.id} />
          <DetailBox label="Car" value={booking.carName} />
          {booking.variant && <DetailBox label="Variant" value={booking.variant} />}
          <DetailBox label="Colour" value={booking.color} />
          <DetailBox label="Payment Mode" value={booking.payment} />
          {booking.details && <DetailBox label="Booking Amount" value={formatINR(booking.details.payment.bookingAmount)} />}
          {booking.details?.finance && <DetailBox label="Monthly EMI" value={formatINR(booking.details.finance.emi)} />}
          {booking.details?.finance && <DetailBox label="Loan Amount" value={formatINR(booking.details.finance.loanPrincipal)} />}
          {booking.details && <DetailBox label="Booking Status" value={booking.details.status.booking} />}
          <DetailBox label="Base Price" value={formatINR(car?.price || booking.total)} />
          <DetailBox label="Final Amount" value={formatINR(booking.total)} />
          {booking.cancellation && <DetailBox label="Refund" value={`${formatINR(booking.cancellation.refundAmount)} · ${booking.cancellation.refundStatus}`} />}
          {booking.cancellation && <DetailBox label="Cancelled On" value={formatDateTime(booking.cancellation.cancelledAt)} />}
          <DetailBox label="Customer Name" value={booking.customer.name || "Not specified"} />
          <DetailBox label="Phone" value={booking.customer.phone || "Not specified"} />
          <DetailBox label="Email" value={booking.customer.email || "Not specified"} />
          <DetailBox label="Delivery City" value={booking.customer.city || "Not specified"} />
          <DetailBox label="Booked At" value={formatDateTime(booking.createdAt)} />
          <DetailBox label="Estimated Delivery" value={estimatedDate} />
          <DetailBox label="Delivered At" value={deliveredAt} />
        </div>

        <div className="test-drive-note">
          <strong>Accessories:</strong>{" "}
          {booking.mods?.length ? booking.mods.join(", ") : "No optional accessories selected."}
        </div>

        <DeliveryTracker delivery={booking.delivery} />
      </div>
    </article>
  );
}

function TestDriveCard({ drive }) {
  const car = getCarById(drive.carId);
  const image = car?.image || FALLBACK_IMAGE;
  const appointmentDate = drive.date ? formatDate(drive.date) : "Not selected";
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="history-card">
      <div className="history-card-top">
        <div className="history-image">
          <img src={image} alt={drive.carName} onError={(event) => { event.currentTarget.src = FALLBACK_IMAGE; }} />
        </div>

        <div>
          <div className="history-type">🚘 Test Drive</div>
          <h2 className="history-card-title">{drive.carName}</h2>
          <p className="history-subtitle">Test Drive ID: {drive.id}</p>
        </div>

        <div className="history-status">
          <span className="status-badge status-confirmed">Scheduled</span>
          <span className="status-date">{appointmentDate}</span>
        </div>
      </div>

      <div className="history-divider"></div>

      <div className="history-quick-details">
        <div className="quick-detail"><p className="quick-detail-label">Drive Date</p><p className="quick-detail-value">{appointmentDate}</p></div>
        <div className="quick-detail"><p className="quick-detail-label">Time Slot</p><p className="quick-detail-value">{drive.slot}</p></div>
        <div className="quick-detail"><p className="quick-detail-label">Duration</p><p className="quick-detail-value">{drive.duration} minutes</p></div>
        <div className="quick-detail"><p className="quick-detail-label">Test Drive Cost</p><p className="quick-detail-value">{formatINR(drive.fee)}</p></div>
      </div>

      <div className="history-actions">
        <button type="button" className="details-button" onClick={() => setExpanded((value) => !value)}>
          {expanded ? "Hide Details ↑" : "View Full Details ↓"}
        </button>
      </div>

      <div className={`history-expanded ${expanded ? "open" : ""}`}>
        <h3 className="details-heading">Test Drive Details</h3>

        <div className="details-grid">
          <DetailBox label="Test Drive ID" value={drive.id} />
          <DetailBox label="Car" value={drive.carName} />
          <DetailBox label="Date" value={appointmentDate} />
          <DetailBox label="Time Slot" value={drive.slot} />
          <DetailBox label="Duration" value={`${drive.duration} minutes`} />
          <DetailBox label="Test Drive Cost" value={formatINR(drive.fee)} />
          <DetailBox label="Customer Name" value={drive.name} />
          <DetailBox label="Phone" value={drive.phone} />
          <DetailBox label="City / Showroom" value={drive.city} />
          <DetailBox label="Requested At" value={formatDateTime(drive.createdAt)} />
        </div>

        <div className="test-drive-note">
          Your test drive was requested for <strong>{drive.carName}</strong> on{" "}
          <strong>{appointmentDate}</strong> at <strong>{drive.slot}</strong>. The estimated drive
          duration is <strong>{drive.duration} minutes</strong>.
        </div>
      </div>
    </article>
  );
}

export default function History() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { bookings, testDrives, all } = useMemo(normalizeAllRecords, []);

  const filteredRecords = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return all.filter((record) => {
      if (filter !== "all" && record.recordType !== filter) return false;
      if (!search) return true;

      const searchableText = [
        record.id,
        record.carName,
        record.carId,
        record.color,
        record.payment,
        record.city,
        record.name,
        record.phone,
      ].filter(Boolean).join(" ").toLowerCase();

      return searchableText.includes(search);
    });
  }, [all, filter, searchTerm]);

  const delivered = bookings.filter(
    (booking) => booking.delivery?.status === "Delivered"
  ).length;
  const totalValue = bookings
    .filter((booking) => booking.delivery?.status !== "Cancelled")
    .reduce((sum, booking) => sum + Number(booking.total || 0), 0);

  useEffect(() => {
    document.title = "VELORA | My History";
  }, []);

  return (
    <main className="history-page">
      <section className="history-header">
        <p className="history-eyebrow">VELORA ACCOUNT</p>
        <h1>My <span>History</span></h1>
        <p className="history-description">
          Keep track of every car you have booked and every test drive you have scheduled through VELORA.
        </p>
      </section>

      <section className="history-stats">
        <div className="history-stat-card"><div className="stat-icon">🚗</div><div><p>Cars Booked</p><strong>{bookings.length}</strong></div></div>
        <div className="history-stat-card"><div className="stat-icon">🚘</div><div><p>Test Drives</p><strong>{testDrives.length}</strong></div></div>
        <div className="history-stat-card"><div className="stat-icon">📦</div><div><p>Cars Delivered</p><strong>{delivered}</strong></div></div>
        <div className="history-stat-card"><div className="stat-icon">💰</div><div><p>Total Booked Value</p><strong>{formatINR(totalValue)}</strong></div></div>
      </section>

      <section className="history-controls">
        <div className="history-filter-buttons">
          {[
            ["all", "All"],
            ["booking", "Cars Booked"],
            ["testdrive", "Test Drives"],
          ].map(([value, label]) => (
            <button
              key={value}
              type="button"
              className={`history-filter ${filter === value ? "active" : ""}`}
              onClick={() => setFilter(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="history-search">
          <span>🔎</span>
          <input
            type="search"
            placeholder="Search car, booking ID or city..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
        </div>
      </section>

      {all.length === 0 ? (
        <section className="history-empty">
          <div className="empty-icon">📋</div>
          <h2>No History Yet</h2>
          <p>You haven't booked a car or scheduled a test drive through VELORA yet.</p>
          <Link className="empty-button" to="/#brands">Explore Cars</Link>
        </section>
      ) : filteredRecords.length === 0 ? (
        <section className="history-empty">
          <div className="empty-icon">🔎</div>
          <h2>No Matching Records</h2>
          <p>Try another car name, booking ID or city.</p>
        </section>
      ) : (
        <section className="history-list">
          {filteredRecords.map((record) =>
            record.recordType === "booking" ? (
              <BookingCard key={`${record.recordType}-${record.id}`} booking={record} />
            ) : (
              <TestDriveCard key={`${record.recordType}-${record.id}`} drive={record} />
            )
          )}
        </section>
      )}
    </main>
  );
}
