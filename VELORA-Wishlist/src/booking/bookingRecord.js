import { maskPan } from "./validation";

const DELIVERY_ETA_DAYS = 14;

/** Builds the record saved to `velora_bookings`. Top-level keys stay compatible with the old History
    page (id, carId, carName, color, mods, total, payment, customer, delivery, createdAt); the
    complete snapshot lives under `details`. No documents, card data or full PAN are included. */
export function buildBookingRecord({ id, car, draft, quote, config, paymentMethod }) {
  const now = new Date();
  const eta = new Date(now);
  eta.setDate(eta.getDate() + (Number(config.deliveryEtaDays) || DELIVERY_ETA_DAYS));
  const v = quote.vehicle;
  const b = draft.buyer;
  const financed = quote.financed;
  const f = quote.finance;
  const opt = quote.optional;
  const names = (rows) => rows.map((r) => r.name);

  return {
    id,
    v: 2,
    carId: car.id,
    carName: `${v.brand} ${v.model}`,
    variant: v.variant,
    color: v.colour,
    mods: [...names(opt.modifications), ...names(opt.accessories), ...names(opt.protection), ...names([...opt.warranty, ...opt.service, ...opt.rsa])],
    total: quote.finalPurchase,
    payment: financed ? "Finance" : "Full Payment",
    customer: { name: b.name.trim(), phone: b.mobile, email: b.email.trim(), city: b.city.trim() },
    createdAt: now.toISOString(),
    delivery: { status: "Order Confirmed", estimatedDate: eta.toISOString(), shippedDate: null, deliveredAt: null },
    details: {
      vehicle: { ...v },
      registration: { state: draft.state, city: draft.city, rto: draft.rto, estimated: true, verified: Boolean(quote.onRoad.verified) },
      onRoad: { lines: quote.onRoad.lines.map(({ key, label, amount, estimated }) => ({ key, label, amount, estimated })), hypothecation: quote.hypothecation, core: quote.core },
      optional: {
        colour: opt.colourCost,
        accessories: opt.accessories, protection: opt.protection, warranty: opt.warranty, service: opt.service, rsa: opt.rsa,
        modifications: opt.modifications, total: opt.total,
      },
      discounts: quote.discounts.lines.map(({ label, type, amount, demo }) => ({ label, type, amount, demo })),
      discountTotal: quote.discounts.total,
      tradeIn: draft.tradeIn.enabled ? { car: draft.tradeIn.car, value: quote.tradeIn.value, outstanding: quote.tradeIn.outstanding, credit: quote.tradeIn.credit } : null,
      purchaseAmount: quote.purchase,
      finalAmount: quote.finalPurchase,
      payment: {
        mode: financed ? "finance" : "full",
        method: paymentMethod,
        bookingAmount: quote.bookingAmount,
        balanceAfterBooking: quote.balanceAfterBooking,
        status: "Demo payment (no real money charged)",
        demo: true,
      },
      finance: financed && f ? {
        downPayment: f.downPayment, loanPrincipal: f.principal, interestRate: f.interestRate, tenureYears: f.years,
        months: f.months, emi: f.emi, totalInterest: f.totalInterest, totalRepayment: f.totalRepayment,
        status: "Pending lender verification",
        employment: draft.eligibility.employment,
      } : null,
      buyer: {
        name: b.name.trim(), mobile: b.mobile, email: b.email.trim(),
        address: [b.house, b.street, b.city, b.district, b.state, b.pin].map((x) => String(x || "").trim()).filter(Boolean).join(", "),
        panMasked: maskPan(b.pan),
        documentsProvided: Object.keys(draft.docs || {}).length,
      },
      status: { booking: "Confirmed", payment: "Received (demo)", finance: financed ? "Pending verification" : "Not applicable", delivery: "Order Confirmed", registration: "Not started" },
      estimatedDelivery: eta.toISOString(),
    },
  };
}
