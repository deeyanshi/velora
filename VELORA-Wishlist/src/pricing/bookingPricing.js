/* VELORA — booking pricing: ties catalogue data + draft selections + on-road + discounts +
   trade-in + finance into one derived "quote" object. Pure function, no UI, no storage.

   Flow of money (kept strictly separate):
     CORE ON-ROAD (mandatory)  + hypothecation charge (only if financed)
   + OPTIONAL ADD-ONS (colour, accessories, protection, warranty/service/RSA, modifications)
   - DISCOUNTS
   = PURCHASE AMOUNT
   - TRADE-IN CREDIT
   = FINAL PURCHASE (financed purchase amount when financing)
   - DOWN PAYMENT  = LOAN PRINCIPAL
   Booking amount is a separate reservation payment, never assumed to be the down payment. */

import { resolveItemPrice } from "./bookingConfig";
import {
  calculateEMI, calculateNumberOfEmis, calculateTotalInterest,
  calculateTotalRepayment, validateFinanceInputs,
} from "./financeCalculator";
import { calculateHypothecationFee, calculateOnRoadPrice } from "./onRoadPricing";
import { isFiniteNumber, roundMoney, toAmount } from "./format";

/* ---------- vehicle / variant ---------- */

/** Variants of a car; cars without variant data get one derived "Standard" entry (no invented data). */
export function getVariantList(car) {
  if (!car) return [];
  if (Array.isArray(car.variants) && car.variants.length) return car.variants;
  return [{
    name: "Standard",
    fuel: car.specs?.["Fuel Type"] || "—",
    transmission: car.specs?.Transmission || "—",
    engine: car.specs?.Engine,
    highlights: [],
    derived: true,
  }];
}

export function findVariant(car, name) {
  const list = getVariantList(car);
  return list.find((variant) => variant.name === name) || null;
}

/** Ex-showroom price for a variant. Variant-wise prices are not yet in the catalogue, so unless an
    override exists in config.variantPrices the model's listed price is used and flagged. */
export function getVariantPrice(car, variantName, config) {
  const override = Number(config?.variantPrices?.[car?.id]?.[variantName]);
  if (Number.isFinite(override) && override > 0) return { price: override, source: "variant" };
  const base = Number(car?.price);
  if (Number.isFinite(base) && base > 0) return { price: base, source: "model" };
  return { price: null, source: "missing" };
}

/** Snapshot of the vehicle details carried into the booking. */
export function buildVehicleSummary(car, variantName, colourName, config) {
  const variant = findVariant(car, variantName);
  const { price, source } = getVariantPrice(car, variantName, config);
  const colour = (car?.colors || []).find((item) => item.name === colourName) || null;
  return {
    carId: car?.id,
    brand: car?.brand,
    model: car?.name,
    variant: variant?.name || variantName || "",
    fuel: variant?.fuel || car?.specs?.["Fuel Type"] || "—",
    transmission: variant?.transmission || car?.specs?.Transmission || "—",
    seating: car?.specs?.Seating ?? "—",
    bodyStyle: car?.type || "—",
    engine: variant?.engine || car?.specs?.Engine || "—",
    colour: colour?.name || colourName || "Standard",
    image: variant?.image || colour?.image || car?.image || "",
    exShowroom: price,
    priceSource: source,
  };
}

/* ---------- optional add-ons ---------- */

export const colourSurcharge = (car, colourName) => {
  const colour = (car?.colors || []).find((item) => item.name === colourName);
  return Math.max(0, Number(colour?.price ?? colour?.surcharge) || 0);
};

const pick = (catalogue, ids, exShowroom) =>
  (catalogue || [])
    .filter((item) => (ids || []).includes(item.id))
    .map((item) => ({ id: item.id, name: item.name, price: resolveItemPrice(item.price, exShowroom), kind: item.kind }));

const sum = (rows) => rows.reduce((total, row) => total + (Number(row.price) || 0), 0);

/** Catalogue shown on the customise step: config accessories minus any duplicated by the car's own mods. */
export function getAccessoryCatalogue(car, config) {
  const modIds = new Set((car?.mods || []).map((mod) => mod.id));
  return (config.accessories || []).filter((item) => !item.skipIfCarHasMod || !modIds.has(item.skipIfCarHasMod));
}

export function calculateOptionalAddons({ car, config, draft, exShowroom }) {
  const colourCost = colourSurcharge(car, draft.color);
  const accessories = pick(getAccessoryCatalogue(car, config), draft.accIds, exShowroom);
  const protection = pick(config.protection, draft.protIds, exShowroom);
  const warrantyAll = pick(config.warranty, draft.warIds, exShowroom);
  const warranty = warrantyAll.filter((item) => item.kind === "warranty");
  const service = warrantyAll.filter((item) => item.kind === "service");
  const rsa = warrantyAll.filter((item) => item.kind === "rsa");
  const modifications = (car?.mods || [])
    .filter((mod) => (draft.modIds || []).includes(mod.id))
    .map((mod) => ({ id: mod.id, name: mod.name, price: Math.max(0, Number(mod.price) || 0) }));
  const totals = {
    colour: colourCost, accessories: sum(accessories), protection: sum(protection),
    warranty: sum(warranty), service: sum(service), rsa: sum(rsa), modifications: sum(modifications),
  };
  const total = Object.values(totals).reduce((a, b) => a + b, 0);
  return { colourCost, accessories, protection, warranty, service, rsa, modifications, totals, total };
}

/* ---------- discounts / trade-in ---------- */

export function calculateDiscounts({ config, car, draft, exShowroom, base }) {
  const code = String(draft.discountCode || "").trim().toUpperCase();
  const tradeValue = Math.max(0, toAmount(draft.tradeIn?.value) || 0);
  const lines = [];
  (config.discounts || []).forEach((rule) => {
    if (!rule || rule.enabled === false) return;
    if (rule.carIds?.length && !rule.carIds.includes(car?.id)) return;
    if (rule.brands?.length && !rule.brands.includes(car?.brand)) return;
    if (rule.code && rule.code.toUpperCase() !== code) return;
    if (rule.requires === "tradeIn" && !(draft.tradeIn?.enabled && tradeValue > 0)) return;
    const amount = rule.amount != null ? Number(rule.amount) : (exShowroom * (Number(rule.pct) || 0)) / 100;
    if (!isFiniteNumber(amount) || amount <= 0) return;
    lines.push({ id: rule.id, type: rule.type, label: rule.label, amount: roundMoney(amount), demo: Boolean(rule.demo) });
  });
  const raw = lines.reduce((total, line) => total + line.amount, 0);
  const total = Math.min(raw, Math.max(0, base));
  return { lines, total: roundMoney(total), codeApplied: Boolean(code) && lines.some((l) => config.discounts.find((r) => r.id === l.id)?.code) };
}

/** Trade-in credit. Outstanding loan on the old car is settled out of its value first. */
export function calculateTradeIn(tradeIn, maxCredit = Infinity) {
  if (!tradeIn?.enabled) return { value: 0, outstanding: 0, credit: 0, errors: [] };
  const errors = [];
  const value = toAmount(tradeIn.value);
  const outstanding = toAmount(tradeIn.outstanding);
  if (!Number.isFinite(value) || value < 0) errors.push("Trade-in value must be a valid, non-negative amount.");
  if (!Number.isFinite(outstanding) || outstanding < 0) errors.push("Outstanding loan must be a valid, non-negative amount.");
  if (errors.length) return { value: 0, outstanding: 0, credit: 0, errors };
  if (value > 0 && !String(tradeIn.car || "").trim()) errors.push("Enter the existing car you are trading in.");
  const net = Math.max(0, value - outstanding);
  return { value, outstanding, credit: roundMoney(Math.min(net, maxCredit)), errors };
}

export const calculateLoanAmount = (financedPurchase, downPayment) => roundMoney((Number(financedPurchase) || 0) - (Number(downPayment) || 0));

export const defaultDownPayment = (financedPurchase, pct) =>
  Math.max(0, Math.round(((Number(financedPurchase) || 0) * (Number(pct) || 0)) / 100 / 1000) * 1000);

/* ---------- the whole quote ---------- */

export function computeQuote({ car, draft, config }) {
  const errors = [];
  const vehicle = buildVehicleSummary(car, draft.variant, draft.color, config);
  const exShowroom = vehicle.exShowroom;
  if (!car) errors.push("Car not found.");
  if (!findVariant(car, draft.variant)) errors.push("Select a variant.");
  if (!isFiniteNumber(exShowroom) || exShowroom <= 0) errors.push("This variant has no valid ex-showroom price yet, so it can't be booked online.");

  const financed = draft.paymentMode === "finance";
  const onRoad = calculateOnRoadPrice({ exShowroom, state: draft.state, rules: config.stateRules });
  const core = onRoad.ok ? onRoad.core : 0;
  const hypothecation = financed && onRoad.ok ? calculateHypothecationFee(onRoad.rule) : 0;
  const optional = calculateOptionalAddons({ car, config, draft, exShowroom: exShowroom || 0 });

  const gross = roundMoney(core + hypothecation + optional.total);
  const discounts = calculateDiscounts({ config, car, draft, exShowroom: exShowroom || 0, base: gross });
  const purchase = roundMoney(gross - discounts.total);
  const tradeIn = calculateTradeIn(draft.tradeIn, purchase);
  errors.push(...tradeIn.errors);
  const finalPurchase = roundMoney(Math.max(0, purchase - tradeIn.credit));

  const bookingAmount = roundMoney(Math.min(Math.max(0, Number(config.bookingAmount) || 0), finalPurchase));

  const quote = {
    vehicle, exShowroom, financed, onRoad, core, hypothecation, optional,
    gross, discounts, purchase, tradeIn, finalPurchase,
    bookingAmount, balanceAfterBooking: roundMoney(Math.max(0, finalPurchase - bookingAmount)),
    finance: null, financeErrors: [], errors,
  };

  if (financed) {
    const fc = config.finance;
    const dpRaw = draft.downPayment === null || draft.downPayment === undefined || draft.downPayment === ""
      ? defaultDownPayment(finalPurchase, fc.defaultDownPaymentPct)
      : toAmount(draft.downPayment);
    const rate = draft.interestRate === "" || draft.interestRate == null ? fc.defaultInterestRate : toAmount(draft.interestRate);
    const years = Number(draft.tenureYears) || fc.defaultTenureYears;
    const fe = [];
    if (!Number.isFinite(dpRaw)) fe.push("Enter a valid down payment.");
    else if (dpRaw < 0) fe.push("Down payment cannot be negative.");
    else if (dpRaw > finalPurchase) fe.push("Down payment cannot exceed the financed purchase amount.");
    const principal = Number.isFinite(dpRaw) ? calculateLoanAmount(finalPurchase, dpRaw) : 0;
    if (Number.isFinite(dpRaw) && dpRaw >= 0 && dpRaw <= finalPurchase && principal <= 0) fe.push("Down payment covers the full amount, so no loan is needed. Choose Full Payment instead.");
    if (Number.isFinite(dpRaw) && dpRaw >= 0 && dpRaw < finalPurchase && principal > 0) {
      fe.push(...validateFinanceInputs({ principal, annualRate: rate, years, tenureOptions: fc.tenureYears, minRate: fc.minInterestRate, maxRate: fc.maxInterestRate }));
    }
    const months = calculateNumberOfEmis(years);
    const valid = fe.length === 0;
    const emi = valid ? calculateEMI(principal, rate, months) : 0;
    const totalRepayment = valid ? calculateTotalRepayment(emi, months) : 0;
    quote.financeErrors = fe;
    quote.finance = {
      downPayment: Number.isFinite(dpRaw) ? dpRaw : 0, principal: valid ? principal : Math.max(0, principal),
      interestRate: Number.isFinite(rate) ? rate : 0, years, months, emi, totalRepayment,
      totalInterest: valid ? calculateTotalInterest(totalRepayment, principal) : 0, valid,
    };
  }
  quote.ok = errors.length === 0 && onRoad.ok && (!financed || (quote.finance && quote.finance.valid));
  return quote;
}
