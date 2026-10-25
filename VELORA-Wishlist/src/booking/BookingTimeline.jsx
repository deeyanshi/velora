export function buildTimeline(booking) {
  const d = booking?.details;
  const financed = d?.payment?.mode === "finance";
  const delivered = booking?.delivery?.status === "Delivered";
  if (booking?.cancellation || booking?.delivery?.status === "Cancelled") {
    const refunded = booking?.cancellation?.refundAmount > 0;
    return [
      ["Booking confirmed", true],
      ["Booking cancelled", true],
      [refunded ? "Refund initiated" : "No refund due", true, booking?.cancellation?.demo ? "demo" : ""],
    ];
  }
  const steps = [
    ["Booking confirmed", true],
    ["Payment received", Boolean(d?.status?.payment?.startsWith("Received")), d?.payment?.demo ? "demo" : ""],
    ...(financed ? [["Finance verification", false]] : []),
    ["Vehicle allocation", delivered],
    ["Registration", delivered],
    ["Delivery", delivered],
  ];
  return steps;
}

export default function BookingTimeline({ booking }) {
  return (
    <ol className="bk-timeline">
      {buildTimeline(booking).map(([label, done, tag]) => (
        <li key={label} className={done ? "done" : ""}>
          <span className="bk-timeline-mark">{done ? "✓" : "○"}</span>
          <span>{label}{tag ? <small> ({tag})</small> : null}</span>
        </li>
      ))}
    </ol>
  );
}
