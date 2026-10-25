/* VELORA — car reviews & ratings (frontend demo).
   Stored in the browser's localStorage under `velora_reviews`, so reviews are only visible on this
   device/browser. A real backend/database would be needed to share them between users. */

export const REVIEWS_KEY = "velora_reviews";

function readAll() {
  try {
    const list = JSON.parse(localStorage.getItem(REVIEWS_KEY) || "[]");
    return Array.isArray(list) ? list.filter((r) => r && typeof r === "object") : [];
  } catch {
    return [];
  }
}

function writeAll(list) {
  try {
    localStorage.setItem(REVIEWS_KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}

export const getReviewsForCar = (carId) => readAll().filter((r) => r.carId === carId);

export function addReview({ carId, email, name, rating, title, text }) {
  const all = readAll();
  const key = String(email || "").trim().toLowerCase();
  if (!key) return { ok: false, message: "Please log in to write a review." };
  if (all.some((r) => r.carId === carId && r.email === key)) {
    return { ok: false, message: "You have already reviewed this car. Delete your review to write a new one." };
  }
  const review = {
    id: `RV-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    carId,
    email: key,
    name: String(name || "Customer").trim() || "Customer",
    rating: Math.min(5, Math.max(1, Math.round(Number(rating)))),
    title: String(title || "").trim().slice(0, 80),
    text: String(text || "").trim().slice(0, 1000),
    createdAt: new Date().toISOString(),
  };
  return writeAll([...all, review]) ? { ok: true, review } : { ok: false, message: "Could not save your review (browser storage is unavailable)." };
}

export function deleteReview(id, email) {
  const key = String(email || "").trim().toLowerCase();
  const all = readAll();
  const target = all.find((r) => r.id === id);
  if (!target || target.email !== key) return false; // only the author can delete
  return writeAll(all.filter((r) => r.id !== id));
}

export function summarize(reviews) {
  const counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0 };
  reviews.forEach((r) => { counts[r.rating] += 1; });
  const total = reviews.length;
  const average = total ? reviews.reduce((sum, r) => sum + r.rating, 0) / total : 0;
  return { total, average, counts };
}
