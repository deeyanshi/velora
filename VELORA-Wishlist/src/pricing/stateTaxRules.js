/* VELORA — state-wise registration rules (CONFIGURABLE ESTIMATES).

   IMPORTANT: none of the figures below are official quotations. Every state entry is marked
   `verified: false`. Road tax, registration, HSRP, insurance and other charges differ by state,
   vehicle category, fuel type, engine and date, and they change over time. Replace the values with
   verified state / RTO rates (or load them from a backend / admin panel) before using them for real
   quotations. The booking UI always labels these numbers as "Estimated".

   Shape of one rule:
   {
     code:               "RJ",
     verified:           false,
     roadTax:            { slabs: [{ upTo: 1000000, pct: 6 }, { upTo: null, pct: 8 }] },  // pct of ex-showroom; upTo null = no limit
     registrationFee:    flat rupees,
     hsrp:               flat rupees,
     insurancePct:       own-damage estimate as % of ex-showroom,
     thirdPartyPremium:  flat rupees,
     otherCharges:       [{ label, amount }],      // cess, green tax, smart-card fee ...
     fastag:             flat rupees (0 when not applicable),
     hypothecationFee:   flat rupees, charged only when the purchase is financed,
     cities:             [{ name, rtos: [{ code, name }] }]   // suggestions only; RTO codes are indicative
   }
*/

const slabs = (a, b, c) => [
  { upTo: 1000000, pct: a },
  { upTo: 2000000, pct: b },
  { upTo: null, pct: c },
];

const make = (code, taxSlabs, cities, overrides = {}) => ({
  code,
  verified: false,
  roadTax: { slabs: taxSlabs },
  registrationFee: 600,
  hsrp: 700,
  insurancePct: 3,
  thirdPartyPremium: 3500,
  otherCharges: [],
  fastag: 500,
  hypothecationFee: 1500,
  cities,
  ...overrides,
});

const c = (name, ...rtos) => ({ name, rtos: rtos.map(([code, label]) => ({ code, name: label || name })) });

export const DEFAULT_STATE_RULES = {
  Rajasthan: make("RJ", slabs(6, 8, 8), [c("Jaipur", ["RJ-14"]), c("Ajmer", ["RJ-01"]), c("Jodhpur", ["RJ-19"]), c("Udaipur", ["RJ-27"]), c("Kota", ["RJ-20"]), c("Bikaner", ["RJ-07"])]),
  Punjab: make("PB", slabs(6, 8, 9), [c("Ludhiana", ["PB-10"]), c("Amritsar", ["PB-02"]), c("Jalandhar", ["PB-08"]), c("Patiala", ["PB-11"]), c("Mohali", ["PB-65"])]),
  Haryana: make("HR", slabs(6, 8, 10), [c("Gurugram", ["HR-26"]), c("Faridabad", ["HR-51"]), c("Ambala", ["HR-01"]), c("Panipat", ["HR-06"]), c("Rohtak", ["HR-12"]), c("Karnal", ["HR-05"])]),
  "Himachal Pradesh": make("HP", slabs(6, 6, 8), [c("Shimla", ["HP-01"])]),
  Delhi: make("DL", slabs(7, 10, 10), [c("New Delhi", ["DL-1", "Mall Road"], ["DL-3", "Sheikh Sarai"], ["DL-8", "Janakpuri"])]),
  "Uttar Pradesh": make("UP", slabs(8, 10, 10), [c("Lucknow", ["UP-32"]), c("Noida", ["UP-16"]), c("Ghaziabad", ["UP-14"]), c("Agra", ["UP-80"]), c("Kanpur", ["UP-78"]), c("Varanasi", ["UP-65"]), c("Meerut", ["UP-15"])]),
  Maharashtra: make("MH", slabs(11, 12, 13), [c("Mumbai", ["MH-01", "Mumbai Central"]), c("Pune", ["MH-12"]), c("Nagpur", ["MH-31"]), c("Thane", ["MH-04"]), c("Nashik", ["MH-15"])]),
  Gujarat: make("GJ", slabs(6, 6, 6), [c("Ahmedabad", ["GJ-01"]), c("Surat", ["GJ-05"]), c("Vadodara", ["GJ-06"]), c("Rajkot", ["GJ-03"])]),
  "Madhya Pradesh": make("MP", slabs(8, 10, 10), [c("Bhopal", ["MP-04"]), c("Indore", ["MP-09"]), c("Gwalior", ["MP-07"]), c("Jabalpur", ["MP-20"])]),
  Karnataka: make("KA", slabs(13, 14, 18), [c("Bengaluru", ["KA-01", "Bengaluru Central"], ["KA-03", "Indiranagar"], ["KA-05", "Jayanagar"]), c("Mysuru", ["KA-09"]), c("Mangaluru", ["KA-19"]), c("Hubballi", ["KA-25"])]),
  "Tamil Nadu": make("TN", slabs(10, 15, 15), [c("Chennai", ["TN-01", "Chennai Central"]), c("Coimbatore", ["TN-37"]), c("Madurai", ["TN-58"])]),
  Telangana: make("TS", slabs(12, 14, 14), [c("Hyderabad", ["TS-09"])]),
  "West Bengal": make("WB", slabs(10, 10, 10), [c("Kolkata", ["WB-02"])]),
  Kerala: make("KL", slabs(9, 11, 21), [c("Thiruvananthapuram", ["KL-01"]), c("Kochi", ["KL-07", "Ernakulam"]), c("Kozhikode", ["KL-11"]), c("Thrissur", ["KL-08"])]),
  "Other state / UT (generic estimate)": make("—", slabs(8, 10, 12), []),
};

export const OTHER_STATE_KEY = "Other state / UT (generic estimate)";

export const RATES_DISCLAIMER =
  "Road tax, registration, HSRP, insurance and other statutory charges shown here are VELORA estimates built from configurable placeholder rates. They are not an official quotation and are not verified against any state transport department. The final amount is confirmed by the dealer / RTO at registration.";

/** Merge any admin / config overrides (plain JSON) on top of the defaults, one state at a time. */
export function getEffectiveStateRules(overrides) {
  const merged = { ...DEFAULT_STATE_RULES };
  if (overrides && typeof overrides === "object") {
    Object.entries(overrides).forEach(([state, value]) => {
      if (!value || typeof value !== "object") return;
      merged[state] = { ...(merged[state] || DEFAULT_STATE_RULES[OTHER_STATE_KEY]), ...value };
    });
  }
  return merged;
}

export const listStates = (rules = DEFAULT_STATE_RULES) => Object.keys(rules);
