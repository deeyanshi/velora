import { useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import CarCard from "../components/CarCard";
import { brands, cars, formatINR } from "../data/carData";
import "../styles/car-preference.css";

const initialAnswers = {
  seatingPreference: "",
  usage: "",
  fuel: "",
  budget: "",
  bodyStyle: "",
  transmission: "",
  priority: "",
  terrain: "",
  brand: "Any",
  features: [],
};

const steps = [
  { key: "seatingPreference", title: "How many people will usually travel in the car?", subtitle: "We'll prioritize cars with enough room for everyone.", options: [["1–2", "1–2 seats"], ["3–4", "3–4 seats"], ["5", "5 seats"], ["6–7", "6–7 seats"], ["8+", "8 or more"]] },
  { key: "usage", title: "What will you mainly use the car for?", subtitle: "Choose the use case that best describes your everyday driving.", options: [["city", "Daily city driving", "🏙️"], ["family", "Family & practical trips", "👨‍👩‍👧‍👦"], ["highway", "Highway & long journeys", "🛣️"], ["performance", "Performance & fun", "🏁"], ["adventure", "Adventure & off-road", "⛰️"]] },
  { key: "fuel", title: "Which powertrain do you prefer?", subtitle: "We'll use your preference as a strong recommendation signal.", options: [["petrol", "Petrol", "⛽"], ["diesel", "Diesel", "🛢️"], ["ev", "Electric (EV)", "⚡"], ["hybrid", "Hybrid", "♻️"], ["any", "No preference", "✨"]] },
  { key: "budget", title: "What's your comfortable budget?", subtitle: "You can always review cars slightly above your range too.", options: [["under-15", "Under ₹15 lakh"], ["15-30", "₹15–30 lakh"], ["30-60", "₹30–60 lakh"], ["60-100", "₹60 lakh–₹1 crore"], ["100+", "Above ₹1 crore"]] },
  { key: "bodyStyle", title: "What body style feels right for you?", subtitle: "Pick the shape that matches your lifestyle.", options: [["suv", "SUV", "🚙"], ["sedan", "Sedan", "🚘"], ["hatchback", "Hatchback", "🚗"], ["sports", "Sports / Supercar", "🏎️"], ["any", "I'm open to anything", "✨"]] },
  { key: "transmission", title: "Which transmission do you want?", subtitle: "Automatic is recommended for relaxed city driving.", options: [["automatic", "Automatic", "A"], ["manual", "Manual", "M"], ["any", "No preference", "—"]] },
  { key: "priority", title: "What's your #1 priority?", subtitle: "This helps us break ties between otherwise suitable cars.", options: [["value", "Value for money", "₹"], ["comfort", "Comfort & luxury", "✦"], ["safety", "Safety", "🛡️"], ["performance", "Performance", "⚡"], ["efficiency", "Efficiency", "◒"]] },
  { key: "terrain", title: "Where will you drive most?", subtitle: "Think about the roads you use most often.", options: [["city", "Mostly city roads", "🏙️"], ["highway", "Highways", "🛣️"], ["mixed", "City + highway", "🔀"], ["rough", "Rough / off-road roads", "⛰️"]] },
  { key: "brand", title: "Do you have a preferred brand?", subtitle: "Optional — choose Any if you want us to search the whole VELORA collection.", options: [["Any", "Any brand", "◎"], ...brands.map((b) => [b.name, b.name, "◉"])] },
  { key: "features", title: "Which features matter most to you?", subtitle: "Pick up to 3. We'll use these as bonus signals, not hard filters.", multi: true, options: [["sunroof", "Sunroof", "☀️"], ["safety", "Advanced safety", "🛡️"], ["infotainment", "Connected infotainment", "◉"], ["camera", "Camera / parking assist", "◌"], ["premium", "Premium interior", "✦"], ["drive", "Drive modes / traction", "⌁"]] },
];

const priceBand = (price) => (price === null || price === undefined ? null : price / 100000);
const normalized = (value = "") => String(value).toLowerCase();
const has = (car, terms) => terms.some((term) => normalized(JSON.stringify(car)).includes(term));
const seatingNumber = (car) => {
  const match = String(car.specs?.Seating || "").match(/(\d+)/g);
  return match ? Math.max(...match.map(Number)) : 5;
};
const fuelText = (car) => normalized(car.specs?.["Fuel Type"] || "");
const inferredFuel = (car) => {
  const f = fuelText(car);
  if (f.includes("electric") || normalized(car.brand) === "tesla") return "ev";
  if (f.includes("diesel")) return "diesel";
  if (f.includes("hybrid")) return "hybrid";
  return "petrol";
};
const inferredBody = (car) => {
  const t = normalized(car.type);
  if (t.includes("suv") || ["range rover", "jeep"].includes(normalized(car.brand))) return "suv";
  if (t.includes("hatch")) return "hatchback";
  if (t.includes("supercar") || t.includes("sports")) return "sports";
  return "sedan";
};
const budgetRange = { "under-15": [0, 15], "15-30": [15, 30], "30-60": [30, 60], "60-100": [60, 100], "100+": [100, Infinity] };

function scoreCar(car, a) {
  let score = 0;
  const reasons = [];
  const price = priceBand(car.price);
  const fuel = inferredFuel(car);
  const body = inferredBody(car);
  const text = normalized(JSON.stringify(car));

  if (a.seatingPreference) {
    const desired = a.seatingPreference === "8+" ? 8 : Number(a.seatingPreference.split("–")[1] || a.seatingPreference);
    const ok = seatingNumber(car) >= desired;
    score += ok ? 22 : Math.max(0, 10 - (desired - seatingNumber(car)) * 4);
    if (ok) reasons.push("Fits your passenger needs");
  }
  if (a.usage) {
    const terms = { city: ["city", "comfort", "compact"], family: ["family", "suv", "comfort", "safety"], highway: ["highway", "cruise", "comfort"], performance: ["sport", "performance", "power", "turbo"], adventure: ["off-road", "suv", "traction", "drive modes"] }[a.usage];
    const hit = has(car, terms);
    score += hit ? 13 : 3;
    if (hit) reasons.push("Matches your main use");
  }
  if (a.fuel && a.fuel !== "any") {
    if (fuel === a.fuel) { score += 20; reasons.push(`${a.fuel === "ev" ? "Electric" : a.fuel[0].toUpperCase() + a.fuel.slice(1)} powertrain match`); }
    else score -= 12;
  }
  if (a.budget && price !== null) {
    const [min, max] = budgetRange[a.budget];
    if (price >= min && price <= max) { score += 20; reasons.push("Within your budget"); }
    else if (price < min) score += 8;
    else score -= Math.min(18, (price - max) / Math.max(max, 1) * 18);
  }
  if (a.bodyStyle && a.bodyStyle !== "any") {
    if (body === a.bodyStyle) { score += 13; reasons.push(`${a.bodyStyle.toUpperCase()} body style`); }
    else score -= 6;
  }
  if (a.transmission && a.transmission !== "any") {
    const tr = normalized(car.specs?.Transmission);
    const ok = tr.includes(a.transmission);
    score += ok ? 8 : -2;
    if (ok) reasons.push(`${a.transmission[0].toUpperCase() + a.transmission.slice(1)} transmission`);
  }
  if (a.priority) {
    const terms = { value: ["reliability", "everyday", "comfort"], comfort: ["luxury", "premium", "climate", "comfort"], safety: ["safety", "collision", "lane", "parking"], performance: ["power", "sport", "performance", "turbo"], efficiency: ["electric", "mileage", "efficiency"] }[a.priority];
    if (has(car, terms)) { score += 9; reasons.push(`Strong ${a.priority} fit`); }
  }
  if (a.terrain) {
    const terms = { city: ["city", "parking", "compact"], highway: ["cruise", "highway", "comfort"], mixed: ["cruise", "comfort", "parking"], rough: ["off-road", "traction", "suv", "drive modes"] }[a.terrain];
    if (has(car, terms)) { score += 7; reasons.push("Suitable for your roads"); }
  }
  if (a.brand && a.brand !== "Any") {
    if (car.brand === a.brand) { score += 12; reasons.push("Preferred brand"); }
    else score -= 4;
  }
  if (a.features?.length) {
    const featureTerms = { sunroof: ["sunroof"], safety: ["safety", "collision", "lane"], infotainment: ["infotainment", "connected"], camera: ["camera", "parking"], premium: ["premium", "leather"], drive: ["drive modes", "traction"] };
    const hits = a.features.filter((f) => has(car, featureTerms[f]));
    score += hits.length * 3;
    if (hits.length) reasons.push(`${hits.length} preferred feature${hits.length > 1 ? "s" : ""}`);
  }
  // Small relevance bonus keeps ties varied without overriding explicit preferences.
  score += Math.max(0, 5 - cars.indexOf(car) / cars.length * 5);
  return { car, score, reasons: reasons.slice(0, 4) };
}

export default function CarPreference() {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState(initialAnswers);
  const [results, setResults] = useState(null);

  const current = steps[step];
  const recommendations = useMemo(() => results || [], [results]);

  const choose = (value) => {
    if (current.multi) {
      setAnswers((old) => ({ ...old, features: old.features.includes(value) ? old.features.filter((x) => x !== value) : old.features.length < 3 ? [...old.features, value] : old.features }));
      return;
    }
    setAnswers((old) => ({ ...old, [current.key]: value }));
  };

  const finish = (nextAnswers = answers) => {
    const ranked = cars.map((car) => scoreCar(car, nextAnswers)).sort((a, b) => b.score - a.score).slice(0, 12);
    setResults(ranked);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const next = () => {
    if (step === steps.length - 1) finish();
    else setStep((s) => s + 1);
  };

  const restart = () => { setAnswers(initialAnswers); setStep(0); setResults(null); window.scrollTo({ top: 0, behavior: "auto" }); };

  if (results) {
    return (
      <main className="preference-page results-page">
        <div className="preference-shell">
          <div className="results-top"><button className="text-action" onClick={restart}>← Restart Quiz</button><span>VELORA AI MATCH</span></div>
          <div className="results-hero">
            <p className="eyebrow">YOUR PERSONALIZED SHORTLIST</p>
            <h1>Cars that fit <span>your life.</span></h1>
            <p>We scored all {cars.length} cars in the existing VELORA catalogue against your preferences and ranked the closest matches.</p>
            <div className="answer-pills">{answers.seatingPreference && <span>👥 {answers.seatingPreference}</span>}{answers.fuel && <span>⚡ {answers.fuel}</span>}{answers.budget && <span>₹ {budgetRange[answers.budget][1] === Infinity ? "1Cr+" : answers.budget}</span>}{answers.brand !== "Any" && <span>◉ {answers.brand}</span>}</div>
          </div>
          <div className="recommendation-grid">
            {recommendations.map((item, index) => (
              <article className="recommendation-card" key={item.car.id}>
                <div className="match-badge">{Math.max(72, Math.min(99, Math.round(item.score)))}% MATCH</div>
                <div className="recommendation-image"><img src={item.car.image} alt={`${item.car.brand} ${item.car.name}`} /></div>
                <div className="recommendation-body">
                  <p className="tag">#{index + 1} · {item.car.brand}</p><h2>{item.car.name}</h2><p className="rec-price">{formatINR(item.car.price)}</p>
                  <div className="reason-list">{item.reasons.map((r) => <span key={r}>✓ {r}</span>)}</div>
                  <div className="rec-actions"><button onClick={() => navigate(`/cars/${encodeURIComponent(item.car.id)}`)}>View Details</button><button className="outline" onClick={() => navigate(`/cars/${encodeURIComponent(item.car.id)}`)}>Book / Explore</button></div>
                </div>
              </article>
            ))}
          </div>
          <div className="results-footer"><button className="primary-btn" onClick={restart}>Refine My Preferences</button><Link className="secondary-btn" to="/">Back to VELORA</Link></div>
        </div>
      </main>
    );
  }

  const selected = current.multi ? answers.features : answers[current.key];
  return (
    <main className="preference-page">
      <div className="preference-shell">
        <div className="preference-nav"><button className="text-action" onClick={() => navigate(-1)}>← Back</button><span className="quiz-brand">VELORA</span><button className="text-action" onClick={restart}>Restart</button></div>
        <section className="quiz-card">
          <div className="quiz-progress-head"><span>Step {step + 1} of {steps.length}</span><span>{Math.round(((step + 1) / steps.length) * 100)}%</span></div>
          <div className="progress-track"><div style={{ width: `${((step + 1) / steps.length) * 100}%` }} /></div>
          <div className="quiz-heading"><p className="eyebrow">FIND YOUR PERFECT CAR</p><h1>{current.title}</h1><p>{current.subtitle}</p></div>
          <div className={`preference-options ${current.key === "brand" ? "brand-options" : ""}`}>
            {current.options.map(([value, label, icon]) => {
              const active = current.multi ? answers.features.includes(value) : selected === value;
              return <button type="button" key={value} className={`preference-option ${active ? "active" : ""}`} onClick={() => choose(value)}><span className="option-icon">{icon || "✓"}</span><span>{label}</span>{active && <b>✓</b>}</button>;
            })}
          </div>
          <div className="quiz-actions"><button className="secondary-btn" onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0}>Back</button><div>{!current.multi && <button className="skip-btn" onClick={() => step === steps.length - 1 ? finish() : setStep((s) => s + 1)}>Skip</button>}<button className="primary-btn" disabled={current.multi && answers.features.length === 0} onClick={next}>{step === steps.length - 1 ? "Find My Cars →" : "Continue →"}</button></div></div>
          {current.multi && <p className="selection-note">{answers.features.length}/3 selected</p>}
        </section>
      </div>
    </main>
  );
}
