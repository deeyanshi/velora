/* VELORA — SAMPLE reviews for demo purposes.
   These are made-up placeholder reviews (not from real customers) so the Reviews tab is not empty.
   They are generated in code, never saved to localStorage, cannot be deleted, and are labelled
   "Sample" in the UI. Set SHOW_SAMPLE_REVIEWS to false to hide them. */

export const SHOW_SAMPLE_REVIEWS = true;

const POOL = [
  { name: "Rohan Sharma", rating: 5, title: "Great all-rounder", text: "The {car} feels smooth and easy to drive in the city. Comfortable seats and a well laid out dashboard. Very happy with my choice.", date: "2026-09-18" },
  { name: "Priya Verma", rating: 4, title: "Good value for money", text: "Solid car for the price. Features are good for daily use and the ride is comfortable. Wish the boot space was a little bigger.", date: "2026-09-02" },
  { name: "Amandeep Singh", rating: 5, title: "Perfect for the family", text: "We bought the {car} for family trips and it has been reliable so far. Plenty of space and the safety features give peace of mind.", date: "2026-08-24" },
  { name: "Neha Gupta", rating: 4, title: "Easy to drive", text: "Light steering and good visibility make parking simple. The infotainment screen is responsive. A few small plastic parts could feel better.", date: "2026-08-11" },
  { name: "Karan Malhotra", rating: 3, title: "Decent, not perfect", text: "Does the job for daily commuting. The ride gets a bit firm on rough roads and the cabin could be quieter at higher speeds.", date: "2026-07-29" },
  { name: "Simran Kaur", rating: 5, title: "Loved the test drive", text: "Took a test drive and booked on the spot. Pickup is nice, the cabin feels modern and the showroom team was helpful.", date: "2026-07-15" },
  { name: "Vikram Joshi", rating: 4, title: "Reliable choice", text: "Running costs have been reasonable and service has been hassle free. The {car} is a practical pick if you want something dependable.", date: "2026-07-03" },
  { name: "Anjali Mehta", rating: 3, title: "Good, but check the variants", text: "Base variant felt a little basic for me. Higher variants add the features that really make a difference, so compare them before booking.", date: "2026-06-21" },
];

function hash(text) {
  let h = 0;
  for (let i = 0; i < text.length; i += 1) h = (h * 31 + text.charCodeAt(i)) >>> 0;
  return h;
}

/** Three deterministic sample reviews per car (same car always gets the same ones). */
export function getSampleReviews(car) {
  if (!SHOW_SAMPLE_REVIEWS || !car?.id) return [];
  const start = hash(car.id) % POOL.length;
  return [0, 3, 5].map((offset) => {
    const item = POOL[(start + offset) % POOL.length];
    return {
      id: `SAMPLE-${car.id}-${(start + offset) % POOL.length}`,
      carId: car.id,
      email: "",
      sample: true,
      name: item.name,
      rating: item.rating,
      title: item.title,
      text: item.text.replace("{car}", car.name),
      createdAt: `${item.date}T10:00:00.000Z`,
    };
  });
}
