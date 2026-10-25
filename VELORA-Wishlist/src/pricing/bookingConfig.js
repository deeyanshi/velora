/* VELORA — booking configuration (admin-editable data layer).

   Everything an admin would reasonably want to change lives here: booking amount, optional
   accessories / protection / warranty catalogue, discounts, finance defaults, tenure options,
   per-variant price overrides and state pricing rules.

   The project currently has no admin panel, so values are read from this file and can optionally be
   overridden at runtime by JSON stored under CONFIG_STORAGE_KEY (a future admin screen or backend
   sync can simply write that key — or replace getBookingConfig() with an API call).

   All catalogue prices are INDICATIVE placeholders; the dealer confirms final prices.
   Price of an item is either a flat number or { pct, min, max } (percentage of ex-showroom, clamped). */

import { getEffectiveStateRules } from "./stateTaxRules";

export const CONFIG_STORAGE_KEY = "velora_pricing_config_v1";

export const DEFAULT_BOOKING_CONFIG = {
  bookingAmount: 25000,
  bookingAmountNote:
    "The booking amount reserves the selected vehicle/configuration subject to applicable booking and cancellation terms.",
  deliveryEtaDays: 14,

  /* Exact ex-showroom price per variant: { "<carId>": { "<variant name>": 123456 } }.
     Variant-wise prices are not yet mapped in the catalogue, so this is empty by default and the
     model's starting price is used (and labelled as such) until a variant price is supplied. */
  variantPrices: {},

  finance: {
    defaultInterestRate: 9.5, // indicative placeholder, not a lender quote
    minInterestRate: 0,
    maxInterestRate: 30,
    tenureYears: [1, 2, 3, 4, 5, 6, 7],
    defaultTenureYears: 5,
    defaultDownPaymentPct: 20,
    foirPct: 50, // share of income that may go to EMIs in the indicative eligibility check
  },

  accessories: [
    { id: "acc-floor-mats", name: "Floor mats", desc: "All-weather floor mat set", price: 3500 },
    { id: "acc-seat-covers", name: "Seat covers", desc: "Fitted seat cover set", price: 8500 },
    { id: "acc-dashcam", name: "Dashcam", desc: "Front dash camera with installation", price: 7500 },
    { id: "acc-mud-flaps", name: "Mud flaps", desc: "Set of four mud flaps", price: 1500 },
    { id: "acc-door-visors", name: "Door visors", desc: "Rain / wind door visors", price: 2500 },
    { id: "acc-boot-mat", name: "Boot mat", desc: "Moulded boot mat", price: 2200 },
    { id: "acc-sun-shades", name: "Sun shades", desc: "Window sun shades", price: 1800 },
    { id: "acc-alloy-wheels", name: "Alloy wheels", desc: "Alloy wheel set", price: 24000, skipIfCarHasMod: "alloy" },
  ],

  protection: [
    { id: "prot-ppf", name: "Paint protection film (PPF)", desc: "Self-healing film on high-impact panels", price: { pct: 3, min: 15000, max: 120000 } },
    { id: "prot-ceramic", name: "Ceramic coating", desc: "Multi-layer exterior ceramic coating", price: { pct: 0.8, min: 8000, max: 40000 } },
    { id: "prot-paint", name: "Paint protection", desc: "Paint sealant treatment", price: { pct: 0.4, min: 4000, max: 20000 } },
    { id: "prot-interior", name: "Interior protection", desc: "Fabric / leather interior guard", price: { pct: 0.3, min: 3000, max: 12000 } },
  ],

  warranty: [
    { id: "war-extended", name: "Extended warranty", desc: "Additional warranty beyond the standard period", price: { pct: 2, min: 6000, max: 60000 }, kind: "warranty" },
    { id: "war-service", name: "Service package", desc: "Prepaid periodic service package", price: { pct: 1.5, min: 5000, max: 40000 }, kind: "service" },
    { id: "war-rsa", name: "Roadside assistance (RSA)", desc: "24x7 roadside assistance", price: 2500, kind: "rsa" },
  ],

  /* Structured discounts. type: manufacturer | dealer | exchange | promotional | other.
     Provide `amount` (flat) or `pct` (of ex-showroom). Optional scoping: carIds[], brands[].
     `code` => applied only when the customer enters the code; `requires: "tradeIn"` => applied only
     when a trade-in value is entered. Entries marked `demo: true` are placeholders for testing;
     no real manufacturer / dealer offers are configured. */
  discounts: [
    { id: "exchange-bonus-demo", type: "exchange", label: "Exchange bonus (demo)", amount: 10000, requires: "tradeIn", enabled: true, demo: true },
    { id: "promo-demo", type: "promotional", label: "Promo code VELORA5K (demo)", amount: 5000, code: "VELORA5K", enabled: true, demo: true },
  ],

  documents: {
    identityTypes: ["Aadhaar (as accepted by lender/RTO)", "Passport", "Voter ID", "Driving licence", "Other government photo ID"],
    addressTypes: ["Aadhaar (as accepted by lender/RTO)", "Passport", "Utility bill", "Rent agreement", "Bank statement / passbook", "Other address proof"],
  },
};

function safeParse(raw) {
  try {
    const value = JSON.parse(raw);
    return value && typeof value === "object" && !Array.isArray(value) ? value : null;
  } catch {
    return null;
  }
}

/** Returns the effective config (defaults + optional stored overrides). Never throws. */
export function getBookingConfig() {
  let overrides = null;
  try {
    overrides = safeParse(localStorage.getItem(CONFIG_STORAGE_KEY));
  } catch {
    overrides = null;
  }
  const base = DEFAULT_BOOKING_CONFIG;
  const merged = {
    ...base,
    ...(overrides || {}),
    finance: { ...base.finance, ...(overrides?.finance || {}) },
    documents: { ...base.documents, ...(overrides?.documents || {}) },
  };
  const { stateRules: stateOverrides, ...rest } = merged;
  return { ...rest, stateRules: getEffectiveStateRules(stateOverrides) };
}

export function resolveItemPrice(price, exShowroom) {
  if (typeof price === "number") return Math.max(0, price);
  if (price && typeof price === "object") {
    const raw = ((Number(exShowroom) || 0) * (Number(price.pct) || 0)) / 100;
    const min = Number.isFinite(price.min) ? price.min : 0;
    const max = Number.isFinite(price.max) ? price.max : Infinity;
    return Math.round(Math.min(max, Math.max(min, raw)) / 100) * 100;
  }
  return 0;
}
