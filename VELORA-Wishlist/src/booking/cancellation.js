/* VELORA — booking cancellation & refund rules (frontend demo).
   The refund is calculated on the BOOKING AMOUNT only, based on how long ago the booking was made.
   All numbers are demo policy values; edit CANCELLATION_POLICY to change them.
   No real money moves — a backend / payment gateway would be needed for actual refunds. */

import { getBookingConfig } from "../pricing";
import { BOOKINGS_KEY, getBookingById, readBookings } from "./bookingStorage";

export const CANCELLATION_POLICY = {
  processingFee: 500, // flat fee deducted once the free-cancellation window has passed
  tiers: [
    { maxHours: 24, refundPct: 100, label: "Within 24 hours of booking", fee: false },
    { maxHours: 24 * 7, refundPct: 90, label: "Within 7 days", fee: true },
    { maxHours: 24 * 14, refundPct: 75, label: "Within 14 days", fee: true },
    { maxHours: Infinity, refundPct: 50, label: "After 14 days", fee: true },
  ],
  refundDays: "5-7 working days",
};

export const CANCEL_REASONS = [
  "Changed my mind",
  "Found a better price elsewhere",
  "Financing not approved / not suitable",
  "Booked the wrong car or variant",
  "Delivery is taking too long",
  "Other",
];

export const isCancelled = (booking) => booking?.delivery?.status === "Cancelled" || Boolean(booking?.cancellation);

/** A booking can be cancelled until it is delivered (or already cancelled). */
export const canCancel = (booking) => Boolean(booking) && !isCancelled(booking) && booking.delivery?.status !== "Delivered";

/** Booking amount that is refundable for a record (legacy records fall back to the configured amount). */
export function refundableBase(booking) {
  const paid = Number(booking?.details?.payment?.bookingAmount);
  if (Number.isFinite(paid) && paid > 0) return { amount: paid, estimated: false };
  const fallback = Number(getBookingConfig().bookingAmount) || 0;
  const total = Number(booking?.total) || fallback;
  return { amount: Math.min(fallback, total), estimated: true };
}

export function calculateRefund(booking, now = new Date()) {
  const { amount, estimated } = refundableBase(booking);
  const created = new Date(booking?.createdAt);
  const hours = Number.isNaN(created.getTime()) ? 0 : Math.max(0, (now - created) / 36e5);
  const tier = CANCELLATION_POLICY.tiers.find((t) => hours <= t.maxHours) || CANCELLATION_POLICY.tiers.at(-1);
  const deduction = Math.round((amount * (100 - tier.refundPct)) / 100);
  const fee = tier.fee ? Math.min(CANCELLATION_POLICY.processingFee, amount - deduction) : 0;
  const refund = Math.max(0, amount - deduction - fee);
  return { base: amount, estimated, tier, deduction, fee, refund, hours };
}

/** Marks the booking cancelled in localStorage. Returns the updated record or null. */
export function cancelBooking(id, reason, note = "") {
  const booking = getBookingById(id);
  if (!canCancel(booking)) return null;
  const calc = calculateRefund(booking);
  const nowIso = new Date().toISOString();
  const updated = {
    ...booking,
    delivery: { ...(booking.delivery || {}), status: "Cancelled" },
    cancellation: {
      cancelledAt: nowIso,
      reason,
      note: note.trim(),
      refundBase: calc.base,
      refundPct: calc.tier.refundPct,
      deduction: calc.deduction,
      processingFee: calc.fee,
      refundAmount: calc.refund,
      refundStatus: calc.refund > 0 ? "Refund initiated" : "No refund due",
      refundEta: CANCELLATION_POLICY.refundDays,
      demo: true,
    },
    details: booking.details
      ? { ...booking.details, status: { ...booking.details.status, booking: "Cancelled", delivery: "Cancelled", finance: booking.details.finance ? "Cancelled" : booking.details.status.finance } }
      : booking.details,
  };
  const list = readBookings().map((b) => (b.id === id ? updated : b));
  try {
    localStorage.setItem(BOOKINGS_KEY, JSON.stringify(list));
  } catch {
    return null;
  }
  return updated;
}
