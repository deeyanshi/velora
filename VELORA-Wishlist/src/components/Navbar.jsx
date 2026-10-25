import { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";
import LoginModal from "./LoginModal";

export default function Navbar() {
  const { session, initials, logout } = useAuth();
  const { wishlistCount } = useWishlist();
  const [loginOpen, setLoginOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const buttonRef = useRef(null);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname, location.search]);

  useEffect(() => {
    const openLogin = () => setLoginOpen(true);
    window.addEventListener("velora:open-login", openLogin);
    return () => window.removeEventListener("velora:open-login", openLogin);
  }, []);

  useEffect(() => {
    const onDocumentClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", onDocumentClick);
    return () => document.removeEventListener("mousedown", onDocumentClick);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("login-open", loginOpen);
    return () => document.body.classList.remove("login-open");
  }, [loginOpen]);

  const handleAccountClick = () => {
    if (session) {
      setDropdownOpen((value) => !value);
    } else {
      setLoginOpen(true);
    }
  };

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="navbar">
        <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          VELORA
        </Link>

        <nav>
          <button className="nav-link-button" onClick={() => scrollToSection("home")}>Home</button>
          <button className="nav-link-button" onClick={() => scrollToSection("brands")}>Cars</button>
          <button className="nav-link-button" onClick={() => scrollToSection("about")}>About</button>
          <button className="nav-link-button" onClick={() => scrollToSection("faq")}>FAQ</button>
          <button className="nav-link-button" onClick={() => scrollToSection("contact")}>Contact</button>
          <Link to="/history">History</Link>
          <Link to="/wishlist" className="wishlist-nav-link">♡ Wishlist{wishlistCount > 0 ? ` (${wishlistCount})` : ""}</Link>
          <Link to="/find-my-car" className="find-my-car-link">Find My Car</Link>
        </nav>

        <button
          ref={buttonRef}
          className={`login-btn ${session ? "user-avatar" : ""}`}
          type="button"
          title={session?.name || undefined}
          onClick={handleAccountClick}
        >
          {session ? initials : "Login"}
        </button>

        {session && dropdownOpen && (
          <div ref={dropdownRef} id="veloraUserDropdown" className="user-dropdown">
            <p className="user-dropdown-name">{session.name}</p>
            <p className="user-dropdown-email">{session.email}</p>
            <button
              type="button"
              className="user-dropdown-logout"
              onClick={() => {
                logout();
                setDropdownOpen(false);
              }}
            >
              Logout
            </button>
          </div>
        )}
      </header>

      <LoginModal open={loginOpen} onClose={() => setLoginOpen(false)} />
    </>
  );
}
