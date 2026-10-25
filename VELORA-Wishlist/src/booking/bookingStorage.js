/* VELORA — booking persistence (frontend demo).
   Bookings reuse the EXISTING `velora_bookings` key so History keeps working; new records are
   backward-compatible and carry a `v: 2` snapshot in `details`. Drafts use a separate versioned key.

   NOT stored (needs a real secure backend): uploaded KYC / income documents, full PAN, card numbers,
   CVV, passwords. Only document names/counts and a masked PAN are kept in a booking record. */

export const BOOKINGS_KEY = "velora_bookings";
export const DRAFT_KEY = "velora_booking_draft_v1";

function readJson(key, fallback) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "null");
    return parsed ?? fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    return false;
  }
}

export const readBookings = () => {
  const list = readJson(BOOKINGS_KEY, []);
  return Array.isArray(list) ? list.filter((item) => item && typeof item === "object") : [];
};

export const getBookingById = (id) => readBookings().find((booking) => booking.id === id) || null;

export function generateBookingId(existing = readBookings()) {
  const used = new Set(existing.map((b) => b.id));
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";
  for (let attempt = 0; attempt < 20; attempt += 1) {
    let suffix = "";
    for (let i = 0; i < 6; i += 1) suffix += alphabet[Math.floor(Math.random() * alphabet.length)];
    const id = `VEL-${new Date().getFullYear()}-${suffix}`;
    if (!used.has(id)) return id;
  }
  return `VEL-${new Date().getFullYear()}-${Date.now().toString(36).toUpperCase().slice(-6)}`;
}

export function saveBooking(record) {
  const list = readBookings();
  list.push(record);
  return writeJson(BOOKINGS_KEY, list) ? record : null;
}

/* ---- drafts (one per car) ---- */

const SENSITIVE_BUYER_KEYS = ["pan"];

export function readDraft(carId) {
  const all = readJson(DRAFT_KEY, {});
  const draft = all && typeof all === "object" ? all[carId] : null;
  return draft && typeof draft === "object" ? draft : null;
}

export function writeDraft(carId, draft) {
  const all = readJson(DRAFT_KEY, {});
  const safeBuyer = { ...(draft.buyer || {}) };
  SENSITIVE_BUYER_KEYS.forEach((key) => delete safeBuyer[key]);
  const { docs, terms, ...rest } = draft; // documents & consent are never persisted in drafts
  const next = { ...(all && typeof all === "object" ? all : {}), [carId]: { ...rest, buyer: safeBuyer, savedAt: new Date().toISOString() } };
  return writeJson(DRAFT_KEY, next);
}

export function clearDraft(carId) {
  const all = readJson(DRAFT_KEY, {});
  if (all && typeof all === "object") {
    delete all[carId];
    writeJson(DRAFT_KEY, all);
  }
}
