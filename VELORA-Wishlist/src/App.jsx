import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import CarDetails from "./pages/CarDetails";
import History from "./pages/History";
import CarPreference from "./pages/CarPreference";
import Wishlist from "./pages/Wishlist";
import BookingFlow from "./pages/BookingFlow";
import BookingSuccess from "./pages/BookingSuccess";
import BookingDetails from "./pages/BookingDetails";

function ScrollRestoration() {
  const { pathname, search } = useLocation();

  useEffect(() => {
    if (search.includes("brand=")) {
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [pathname, search]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollRestoration />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/cars/:id" element={<CarDetails />} />
        <Route path="/history" element={<History />} />
        <Route path="/find-my-car" element={<CarPreference />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/car-detail/:id" element={<CarDetails />} />
        <Route path="/book/:carId" element={<BookingFlow />} />
        <Route path="/book/:carId/:step" element={<BookingFlow />} />
        <Route path="/booking-success/:bookingId" element={<BookingSuccess />} />
        <Route path="/booking/:bookingId" element={<BookingDetails />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}
