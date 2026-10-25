import { useEffect, useMemo, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { getSampleReviews } from "../reviews/sampleReviews";
import { addReview, deleteReview, getReviewsForCar, summarize } from "../reviews/reviewStorage";
import "../styles/reviews.css";

const LABELS = ["", "Poor", "Fair", "Good", "Very good", "Excellent"];

function Stars({ value, size = 18 }) {
  return (
    <span className="rv-stars" role="img" aria-label={`${value.toFixed(1)} out of 5 stars`} style={{ fontSize: size }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={value >= n - 0.25 ? "on" : value >= n - 0.75 ? "half" : ""}>★</span>
      ))}
    </span>
  );
}

function StarPicker({ value, onChange }) {
  const [hover, setHover] = useState(0);
  const shown = hover || value;
  return (
    <div className="rv-picker" onMouseLeave={() => setHover(0)}>
      <div role="radiogroup" aria-label="Your rating">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            role="radio"
            aria-checked={value === n}
            aria-label={`${n} star${n > 1 ? "s" : ""}`}
            className={shown >= n ? "on" : ""}
            onMouseEnter={() => setHover(n)}
            onClick={() => onChange(n)}
          >★</button>
        ))}
      </div>
      <span className="rv-picker-label">{shown ? LABELS[shown] : "Select a rating"}</span>
    </div>
  );
}

const fmtDate = (v) => {
  const d = new Date(v);
  return Number.isNaN(d.getTime()) ? "" : d.toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" });
};

export default function CarReviews({ car }) {
  const { session } = useAuth();
  const [stored, setStored] = useState(() => getReviewsForCar(car.id));
  const [sort, setSort] = useState("newest");
  const [rating, setRating] = useState(0);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [error, setError] = useState("");
  const [done, setDone] = useState("");

  useEffect(() => { setStored(getReviewsForCar(car.id)); setRating(0); setTitle(""); setText(""); setError(""); setDone(""); }, [car.id]);

  const email = session?.email?.trim().toLowerCase() || "";
  const samples = useMemo(() => getSampleReviews(car), [car]);
  const reviews = useMemo(() => [...samples, ...stored], [samples, stored]);
  const isMine = (r) => !r.sample && Boolean(email) && r.email === email;
  const mine = stored.find(isMine);
  const stats = useMemo(() => summarize(reviews), [reviews]);
  const sorted = useMemo(() => {
    const list = [...reviews];
    if (sort === "highest") list.sort((a, b) => b.rating - a.rating || new Date(b.createdAt) - new Date(a.createdAt));
    else if (sort === "lowest") list.sort((a, b) => a.rating - b.rating || new Date(b.createdAt) - new Date(a.createdAt));
    else list.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    return list;
  }, [reviews, sort]);

  const submit = (e) => {
    e.preventDefault();
    setError(""); setDone("");
    if (!rating) return setError("Please choose a star rating.");
    if (text.trim().length < 10) return setError("Please write at least 10 characters in your review.");
    const result = addReview({ carId: car.id, email: session.email, name: session.name, rating, title, text });
    if (!result.ok) return setError(result.message);
    setStored(getReviewsForCar(car.id));
    setRating(0); setTitle(""); setText("");
    setDone("Thanks! Your review has been posted.");
  };

  const remove = (id) => {
    if (!window.confirm("Delete your review?")) return;
    if (deleteReview(id, session?.email)) setStored(getReviewsForCar(car.id));
  };

  return (
    <section className="rv">
      <div className="rv-summary">
        <div className="rv-score">
          <strong>{stats.total ? stats.average.toFixed(1) : "—"}</strong>
          <Stars value={stats.average} size={22} />
          <span>{stats.total ? `${stats.total} review${stats.total > 1 ? "s" : ""}` : "No reviews yet"}</span>
        </div>
        <div className="rv-bars">
          {[5, 4, 3, 2, 1].map((n) => (
            <div className="rv-bar-row" key={n}>
              <span>{n} ★</span>
              <div className="rv-bar"><i style={{ width: stats.total ? `${(stats.counts[n] / stats.total) * 100}%` : "0%" }} /></div>
              <span className="rv-bar-count">{stats.counts[n]}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rv-form-card">
        <h3>Write a review</h3>
        {!session ? (
          <>
            <p className="rv-muted">Please log in to rate and review the {car.name}.</p>
            <button type="button" className="btn-primary" onClick={() => window.dispatchEvent(new Event("velora:open-login"))}>LOGIN TO REVIEW</button>
          </>
        ) : mine ? (
          <p className="rv-muted">You have already reviewed this car — thank you! You can delete your review below to write a new one.</p>
        ) : (
          <form onSubmit={submit} noValidate>
            <p className="rv-muted">Posting as <strong>{session.name}</strong></p>
            <StarPicker value={rating} onChange={setRating} />
            <label htmlFor="rv-title">Title (optional)</label>
            <input id="rv-title" value={title} maxLength={80} onChange={(e) => setTitle(e.target.value)} placeholder="Sum up your experience" />
            <label htmlFor="rv-text">Your review</label>
            <textarea id="rv-text" rows={4} maxLength={1000} value={text} onChange={(e) => setText(e.target.value)} placeholder="What did you like or dislike? Comfort, mileage, features, value for money..." />
            <p className="rv-count">{text.length} / 1000</p>
            {error && <p className="rv-error" role="alert">{error}</p>}
            {done && <p className="rv-ok" role="status">{done}</p>}
            <button type="submit" className="btn-primary">POST REVIEW</button>
          </form>
        )}
        {session && mine && done && <p className="rv-ok" role="status">{done}</p>}
      </div>

      <div className="rv-list-head">
        <h3>Customer reviews</h3>
        {reviews.length > 1 && (
          <select value={sort} onChange={(e) => setSort(e.target.value)} aria-label="Sort reviews">
            <option value="newest">Newest first</option>
            <option value="highest">Highest rating</option>
            <option value="lowest">Lowest rating</option>
          </select>
        )}
      </div>

      {sorted.length === 0 ? (
        <div className="rv-empty">No reviews for the {car.name} yet. Be the first to share your experience!</div>
      ) : (
        <ul className="rv-list">
          {sorted.map((r) => (
            <li key={r.id} className="rv-item">
              <div className="rv-item-top">
                <span className="rv-avatar" aria-hidden="true">{(r.name || "C").trim()[0].toUpperCase()}</span>
                <div>
                  <strong>{r.name}</strong>{isMine(r) && <span className="rv-you">You</span>}{r.sample && <span className="rv-sample">Sample</span>}
                  <div className="rv-meta"><Stars value={r.rating} size={15} /> <span>{fmtDate(r.createdAt)}</span></div>
                </div>
              </div>
              {r.title && <h4>{r.title}</h4>}
              <p>{r.text}</p>
              {isMine(r) && <button type="button" className="rv-delete" onClick={() => remove(r.id)}>Delete my review</button>}
            </li>
          ))}
        </ul>
      )}
      <p className="rv-note">Demo feature: reviews you post are saved in this browser only (localStorage). Reviews marked "Sample" are made-up placeholders, not real customers.</p>
    </section>
  );
}
