/* VELORA — small numeric/formatting helpers shared by the pricing engine and booking UI. */

export const roundMoney = (value) => Math.round((Number(value) || 0) * 100) / 100;

/** Whole-rupee Indian-format currency string. Never throws; invalid input renders as an em dash. */
export function inr(value) {
  const number = Number(value);
  if (value === null || value === undefined || !Number.isFinite(number)) return "—";
  const rounded = Math.round(number);
  return `${rounded < 0 ? "-" : ""}₹${Math.abs(rounded).toLocaleString("en-IN")}`;
}

/** Empty / missing -> 0. A non-numeric string -> NaN so callers can flag it as invalid. */
export function toAmount(value) {
  if (value === "" || value === null || value === undefined) return 0;
  if (typeof value === "number") return value;
  const parsed = Number(String(value).replace(/[,\s₹]/g, ""));
  return parsed;
}

export const isFiniteNumber = (value) => typeof value === "number" && Number.isFinite(value);
