import { Link } from "react-router-dom";
import CarCard from "../components/CarCard";
import { useWishlist } from "../context/WishlistContext";

export default function Wishlist() {
  const { wishlist, clearWishlist } = useWishlist();

  return (
    <main className="page-wrap wishlist-page">
      <p className="breadcrumbs">
        <Link to="/">Home</Link> / <span>My Wishlist</span>
      </p>

      <div className="page-heading wishlist-heading">
        <p className="eyebrow">YOUR COLLECTION</p>
        <h1>My <span>Wishlist</span></h1>
        <p className="desc">
          Keep your favourite cars in one place and come back whenever you're ready to explore or book.
        </p>
      </div>

      {wishlist.length > 0 ? (
        <>
          <div className="wishlist-toolbar">
            <p>{wishlist.length} {wishlist.length === 1 ? "car" : "cars"} saved</p>
            <button type="button" className="wishlist-clear-btn" onClick={clearWishlist}>
              Clear Wishlist
            </button>
          </div>
          <div className="cars-grid">
            {wishlist.map((car) => <CarCard key={car.id} car={car} />)}
          </div>
        </>
      ) : (
        <div className="wishlist-empty">
          <div className="wishlist-empty-icon">♡</div>
          <h2>Your wishlist is empty</h2>
          <p>Tap the heart on any car you love and it will appear here.</p>
          <Link to="/cars?brand=BMW" className="btn-primary">Explore Cars</Link>
        </div>
      )}
    </main>
  );
}
