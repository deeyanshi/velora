import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext(null);
const GUEST_KEY = "velora_wishlist_guest";

function getKey(session) {
  return session?.email
    ? `velora_wishlist_${session.email.trim().toLowerCase()}`
    : GUEST_KEY;
}

function readWishlist(key) {
  try {
    const value = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function writeWishlist(key, wishlist) {
  try {
    localStorage.setItem(key, JSON.stringify(wishlist));
  } catch {
    // Keep the wishlist usable if browser storage is unavailable.
  }
}

export function WishlistProvider({ children }) {
  const { session } = useAuth();
  const storageKey = getKey(session);
  const [wishlist, setWishlist] = useState(() => readWishlist(storageKey));

  useEffect(() => {
    setWishlist(readWishlist(storageKey));
  }, [storageKey]);

  useEffect(() => {
    writeWishlist(storageKey, wishlist);
  }, [storageKey, wishlist]);

  const isWishlisted = (carId) => wishlist.some((item) => item.id === carId);

  const toggleWishlist = (car) => {
    setWishlist((current) => {
      if (current.some((item) => item.id === car.id)) {
        return current.filter((item) => item.id !== car.id);
      }

      return [...current, car];
    });
  };

  const removeFromWishlist = (carId) => {
    setWishlist((current) => current.filter((item) => item.id !== carId));
  };

  const clearWishlist = () => setWishlist([]);

  const value = useMemo(
    () => ({
      wishlist,
      wishlistCount: wishlist.length,
      isWishlisted,
      toggleWishlist,
      removeFromWishlist,
      clearWishlist,
    }),
    [wishlist]
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) throw new Error("useWishlist must be used inside WishlistProvider");
  return context;
}
