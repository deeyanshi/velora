import { getVariantList } from "../pricing";

export const STEPS = [
  { slug: "variant", label: "Variant", title: "Select variant" },
  { slug: "customize", label: "Customize", title: "Customize your car" },
  { slug: "on-road", label: "Price", title: "On-road price" },
  { slug: "details", label: "Details", title: "Buyer details" },
  { slug: "finance", label: "Finance", title: "Payment / finance" },
  { slug: "review", label: "Review", title: "Final review" },
];

export const stepIndex = (slug) => STEPS.findIndex((step) => step.slug === slug);

export const EMPTY_BUYER = {
  name: "", mobile: "", email: "", dob: "", house: "", street: "", city: "", district: "", state: "", pin: "", pan: "",
  identityType: "", addressType: "",
};

export function createDefaultDraft(car, config, query = {}) {
  const variants = getVariantList(car);
  const variantName = variants.find((v) => v.name === query.variant)?.name || variants[0]?.name || "";
  const colour = (car?.colors || []).find((c) => c.name === query.color)?.name || car?.colors?.[0]?.name || "Standard";
  const validMods = new Set((car?.mods || []).map((m) => m.id));
  const modIds = String(query.mods || "").split(",").filter((id) => validMods.has(id));
  return {
    variant: variantName,
    color: colour,
    modIds,
    accIds: [], protIds: [], warIds: [],
    state: "", city: "", rto: "",
    discountCode: "",
    tradeIn: { enabled: false, car: "", value: "", outstanding: "" },
    paymentMode: "full",
    downPayment: null,
    interestRate: config.finance.defaultInterestRate,
    tenureYears: config.finance.defaultTenureYears,
    eligibility: { employment: "", income: "", existingEmi: "", duration: "" },
    buyer: { ...EMPTY_BUYER },
    docs: {},
    paymentMethod: "UPI",
    terms: { config: false, charges: false, optional: false, finance: false, booking: false },
    maxStep: 0,
  };
}

/** Merge a stored (possibly old / partial / corrupt) draft onto fresh defaults. */
export function hydrateDraft(stored, car, config, query) {
  const base = createDefaultDraft(car, config, query);
  if (!stored || typeof stored !== "object") return base;
  const merged = { ...base, ...stored };
  merged.tradeIn = { ...base.tradeIn, ...(stored.tradeIn || {}) };
  merged.eligibility = { ...base.eligibility, ...(stored.eligibility || {}) };
  merged.buyer = { ...base.buyer, ...(stored.buyer || {}) };
  ["modIds", "accIds", "protIds", "warIds"].forEach((key) => { if (!Array.isArray(merged[key])) merged[key] = []; });
  merged.docs = {};
  merged.terms = { ...base.terms };
  if (!getVariantList(car).some((v) => v.name === merged.variant)) merged.variant = base.variant;
  if (!(car?.colors || []).some((c) => c.name === merged.color)) merged.color = base.color;
  const validMods = new Set((car?.mods || []).map((m) => m.id));
  merged.modIds = merged.modIds.filter((id) => validMods.has(id));
  if (!config.stateRules[merged.state]) { merged.state = ""; merged.city = ""; merged.rto = ""; }
  merged.maxStep = Number.isInteger(merged.maxStep) ? Math.min(Math.max(merged.maxStep, 0), STEPS.length - 1) : 0;
  // explicit selections coming from the car page win over an older draft
  if (query?.variant && getVariantList(car).some((v) => v.name === query.variant)) merged.variant = query.variant;
  if (query?.color && (car?.colors || []).some((c) => c.name === query.color)) merged.color = query.color;
  if (query?.mods) merged.modIds = base.modIds;
  return merged;
}
