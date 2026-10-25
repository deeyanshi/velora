/* VELORA — state-aware ON-ROAD price engine.
   Core on-road = ex-showroom + road tax + registration + HSRP + insurance + other statutory + FASTag.
   Nothing optional (accessories, PPF, warranty, RSA, modifications ...) and no loan interest ever
   enters this number. All state figures are configurable ESTIMATES (see stateTaxRules.js). */

import { roundMoney } from "./format";

export function calculateRoadTax(exShowroom, rule) {
  const price = Number(exShowroom);
  const slabs = rule?.roadTax?.slabs;
  if (!Number.isFinite(price) || price <= 0 || !Array.isArray(slabs) || !slabs.length) return 0;
  const slab = slabs.find((item) => item.upTo === null || item.upTo === undefined || price <= item.upTo) || slabs[slabs.length - 1];
  return roundMoney((price * (Number(slab.pct) || 0)) / 100);
}

export const calculateRegistrationFee = (rule) => Math.max(0, Number(rule?.registrationFee) || 0);
export const calculateHSRP = (rule) => Math.max(0, Number(rule?.hsrp) || 0);
export const calculateFastag = (rule) => Math.max(0, Number(rule?.fastag) || 0);
export const calculateHypothecationFee = (rule) => Math.max(0, Number(rule?.hypothecationFee) || 0);

export function calculateInsurance(exShowroom, rule) {
  const price = Number(exShowroom);
  if (!Number.isFinite(price) || price <= 0) return 0;
  const ownDamage = (price * (Number(rule?.insurancePct) || 0)) / 100;
  return roundMoney(ownDamage + (Number(rule?.thirdPartyPremium) || 0));
}

export function calculateOtherStatutory(rule) {
  const items = (rule?.otherCharges || [])
    .map((item) => ({ label: item.label || "Other statutory charge", amount: Math.max(0, Number(item.amount) || 0) }))
    .filter((item) => item.amount > 0);
  return { items, total: items.reduce((sum, item) => sum + item.amount, 0) };
}

/** Returns { ok, errors, lines, core, ... }. `rules` is the effective state rules map. */
export function calculateOnRoadPrice({ exShowroom, state, rules }) {
  const errors = [];
  const price = Number(exShowroom);
  if (!Number.isFinite(price) || price <= 0) errors.push("Ex-showroom price is missing or invalid.");
  const rule = state && rules ? rules[state] : null;
  if (!state) errors.push("Select the registration state.");
  else if (!rule) errors.push(`No pricing rule is configured for "${state}".`);
  if (errors.length) return { ok: false, errors, lines: [], core: null, rule: null };

  const other = calculateOtherStatutory(rule);
  const lines = [
    { key: "exShowroom", label: "Ex-showroom price", amount: price, estimated: false },
    { key: "roadTax", label: "Road / Motor Vehicle Tax", amount: calculateRoadTax(price, rule), estimated: true },
    { key: "registration", label: "Registration fee", amount: calculateRegistrationFee(rule), estimated: true },
    { key: "hsrp", label: "HSRP / registration plate", amount: calculateHSRP(rule), estimated: true },
    { key: "insurance", label: "Motor insurance (required)", amount: calculateInsurance(price, rule), estimated: true },
    ...other.items.map((item, index) => ({ key: `other${index}`, label: item.label, amount: item.amount, estimated: true })),
    { key: "fastag", label: "FASTag", amount: calculateFastag(rule), estimated: true },
  ].filter((line) => line.key === "exShowroom" || line.amount > 0);

  const core = roundMoney(lines.reduce((sum, line) => sum + line.amount, 0));
  return { ok: true, errors: [], lines, core, rule, verified: Boolean(rule.verified) };
}
