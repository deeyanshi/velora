import { Link } from "react-router-dom";
import { formatINR } from "../data/carData";
import { useWishlist } from "../context/WishlistContext";

export default function CarCard({ car }) {
  const { isWishlisted, toggleWishlist } = useWishlist();
  const saved = isWishlisted(car.id);

  const handleWishlistClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    toggleWishlist(car);
  };

  return (
    <article className="car-card2">
      <Link to={`/cars/${encodeURIComponent(car.id)}`} className="car-card2-link">
        <div className="thumb">
          <img
            src={car.image}
            alt={`${car.brand} ${car.name}`}
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = `https://carapi.trustcar.info/getImage?make=${encodeURIComponent(car.brand)}&model=${encodeURIComponent(car.name)}`;
            }}
          />
          <button
            type="button"
            className={`wishlist-heart ${saved ? "saved" : ""}`}
            onClick={handleWishlistClick}
            aria-label={saved ? `Remove ${car.name} from wishlist` : `Add ${car.name} to wishlist`}
            aria-pressed={saved}
            title={saved ? "Remove from wishlist" : "Add to wishlist"}
          >
            {saved ? "♥" : "♡"}
          </button>
        </div>
        <div className="body">
          <p className="tag">{car.type.toUpperCase()}</p>
          <h3>{car.name}</h3>
          <p className="price">
            Starting at <strong>{formatINR(car.price)}</strong>
          </p>
          <span className="btn-secondary car-card-view-button">View Details →</span>
        </div>
      </Link>
    </article>
  );
}
