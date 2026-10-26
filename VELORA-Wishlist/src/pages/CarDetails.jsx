

import { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { formatINR, getCarById } from "../data/carData";
import VariantsPanel from "../components/VariantsPanel";
import CarReviews from "../components/CarReviews";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80";

const DEFAULT_ACCESSORIES = [
  {
    id: "floor-mats",
    name: "Premium Floor Mats",
    desc: "All-weather protection for your car's flooring.",
    price: 2499,
  },
  {
    id: "seat-covers",
    name: "Premium Seat Covers",
    desc: "Protect the original upholstery with fitted seat covers.",
    price: 5999,
  },
  {
    id: "body-cover",
    name: "Car Body Cover",
    desc: "Protection against dust, sunlight and everyday exposure.",
    price: 1999,
  },
  {
    id: "mud-flaps",
    name: "Mud Flaps Set",
    desc: "Helps protect the lower body from mud and road debris.",
    price: 999,
  },
  {
    id: "boot-mat",
    name: "Boot Mat",
    desc: "Protect the luggage area from dirt and spills.",
    price: 1499,
  },
  {
    id: "door-sill",
    name: "Door Sill Guards",
    desc: "Helps protect door-entry areas from scratches.",
    price: 1299,
  },
  {
    id: "sunshades",
    name: "Window Sunshades",
    desc: "Helps reduce direct sunlight entering the cabin.",
    price: 1799,
  },
  {
    id: "dash-camera",
    name: "Dash Camera",
    desc: "Records journeys for added convenience.",
    price: 4499,
  },
  {
    id: "neck-cushions",
    name: "Comfort Cushion Set",
    desc: "Additional cushioning for comfortable journeys.",
    price: 1499,
  },
  {
    id: "cleaning-kit",
    name: "Car Care Kit",
    desc: "Cleaning essentials for interior and exterior care.",
    price: 999,
  },
];

const tabs = [
  ["overview", "Overview"],
  ["reviews", "Reviews"],
  ["variants", "Variants"],
  ["features", "Features"],
  ["colours", "Colours"],
  ["modify", "Modify"],
  ["book", "Book Now"],
  ["testdrive", "Test Drive"],
];

function readArray(key) {
  try {
    const parsed = JSON.parse(localStorage.getItem(key) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function todayString() {
  const date = new Date();
  const local = new Date(
    date.getTime() - date.getTimezoneOffset() * 60000
  );
  return local.toISOString().split("T")[0];
}

function DetailRows({ rows }) {
  return rows.map(([label, value], index) => (
    <div className="row" key={`${label}-${index}`}>
      <span>{label}</span>
      <span>{value}</span>
    </div>
  ));
}

function AccessoryList({
  accessories,
  selectedIds,
  onToggle,
}) {
  return (
    <div className="mod-list">
      {accessories.map((mod) => {
        const checked = selectedIds.includes(mod.id);

        return (
          <label
            className={`mod-item ${checked ? "checked" : ""}`}
            key={mod.id}
            style={{ cursor: "pointer" }}
          >
            <div className="mod-item-left">
              <input
                type="checkbox"
                checked={checked}
                onChange={() => onToggle(mod.id)}
              />

              <div>
                <h4>{mod.name}</h4>
                <p>{mod.desc}</p>
              </div>
            </div>

            <span className="mod-price">
              {checked ? "" : "+ "}
              {formatINR(mod.price)}
            </span>
          </label>
        );
      })}
    </div>
  );
}

export default function CarDetails() {
  const { id } = useParams();
  const car = getCarById(id);

  const [activeTab, setActiveTab] = useState("overview");

  const [selectedColor, setSelectedColor] = useState(
    car?.colors?.[0] || {
      name: "Standard",
      hex: "#777777",
    }
  );

  const [selectedVariant, setSelectedVariant] = useState(
    car?.variants?.[0]?.name || ""
  );

  const [selectedModIds, setSelectedModIds] = useState([]);
  const [confirmation, setConfirmation] = useState(null);

  const [testDriveForm, setTestDriveForm] = useState({
    name: "",
    phone: "",
    city: "",
    date: "",
    slot: "10:00 AM",
  });

  const availableMods = useMemo(() => {
    return car?.mods?.length
      ? car.mods
      : DEFAULT_ACCESSORIES;
  }, [car]);

  const selectedMods = useMemo(
    () =>
      availableMods.filter((mod) =>
        selectedModIds.includes(mod.id)
      ),
    [availableMods, selectedModIds]
  );

  const accessoriesTotal = useMemo(
    () =>
      selectedMods.reduce(
        (sum, mod) => sum + (Number(mod.price) || 0),
        0
      ),
    [selectedMods]
  );

  const total = useMemo(
    () => Number(car?.price || 0) + accessoriesTotal,
    [car, accessoriesTotal]
  );

  const visibleTabs = useMemo(
    () =>
      tabs.filter(
        ([tabId]) =>
          tabId !== "variants" || car?.variants?.length
      ),
    [car]
  );

  const overviewText = useMemo(() => {
    if (!car) return "";
    if (car.overview) return car.overview;

    const engine = car.specs?.Engine || "modern engine";
    const power = car.specs?.Power || "strong performance";
    const transmission =
      car.specs?.Transmission || "available transmission options";
    const seating = car.specs?.Seating || "multiple passengers";
    const fuel =
      car.specs?.["Fuel Type"] || "available fuel options";

    return `The ${car.brand} ${car.name} pairs a ${engine} with ${power} through ${transmission}, seats ${seating}, and offers ${fuel}. Explore its features, select a colour and variant, customise accessories, and proceed to booking or schedule a test drive.`;
  }, [car]);

  const bookingPath = useMemo(() => {
    if (!car) return "/";

    const params = new URLSearchParams();

    if (selectedVariant) {
      params.set("variant", selectedVariant);
    }

    if (selectedColor?.name) {
      params.set("color", selectedColor.name);
    }

    if (selectedModIds.length) {
      params.set("mods", selectedModIds.join(","));
    }

    const query = params.toString();

    return `/book/${encodeURIComponent(car.id)}${
      query ? `?${query}` : ""
    }`;
  }, [car, selectedVariant, selectedColor, selectedModIds]);

  useEffect(() => {
    document.title = car
      ? `VELORA | ${car.name}`
      : "VELORA | Car Not Found";
  }, [car]);

  useEffect(() => {
    if (!car) return;

    setSelectedColor(
      car.colors?.[0] || {
        name: "Standard",
        hex: "#777777",
      }
    );

    setSelectedVariant(car.variants?.[0]?.name || "");
    setSelectedModIds([]);
    setConfirmation(null);
    setActiveTab("overview");
  }, [id, car]);

  const toggleAccessory = (modId) => {
    setSelectedModIds((current) =>
      current.includes(modId)
        ? current.filter((item) => item !== modId)
        : [...current, modId]
    );
  };

  const goToTab = (tab) => {
    setActiveTab(tab);

    requestAnimationFrame(() => {
      document.getElementById("detailTabs")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  };

  const updateTestDrive = (event) => {
    const { name, value } = event.target;

    setTestDriveForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const submitTestDrive = (event) => {
    event.preventDefault();

    if (!car) return;

    const name = testDriveForm.name.trim();
    const phone = testDriveForm.phone.trim();
    const city = testDriveForm.city.trim();
    const date = testDriveForm.date;

    if (!name || !phone || !city || !date) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[0-9]{10}$/.test(phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (date < todayString()) {
      alert("Please select today or a future date.");
      return;
    }

    const record = {
      id: `td_${Date.now()}`,
      carId: car.id,
      carName: `${car.brand} ${car.name}`,
      name,
      phone,
      city,
      date,
      slot: testDriveForm.slot,
      createdAt: new Date().toISOString(),
    };

    try {
      const existing = readArray("velora_test_drives");
      existing.push(record);

      localStorage.setItem(
        "velora_test_drives",
        JSON.stringify(existing)
      );
    } catch {
      alert("Unable to save your test drive. Please try again.");
      return;
    }

    setConfirmation({
      title: "Test Drive Request Saved",
      text: `Your request for the ${car.brand} ${car.name} is saved for ${date} at ${testDriveForm.slot}.`,
    });
  };

  if (!car) {
    return (
      <main className="page-wrap">
        <p className="breadcrumbs">
          <Link to="/">Home</Link> / <span>Car Not Found</span>
        </p>
        <p className="no-results">
          Car not found. Please go back and select a car.
        </p>
      </main>
    );
  }

  if (confirmation) {
    return (
      <main className="page-wrap">
        <div
          className="confirm-box"
          style={{ display: "block" }}
        >
          <div className="check">✓</div>
          <h2>{confirmation.title}</h2>
          <p>{confirmation.text}</p>
          <Link className="btn-primary" to="/">
            Back to Brands
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-wrap">
      <p className="breadcrumbs" id="crumbs">
        <Link to="/">Home</Link> /{" "}
        <Link
          to={`/cars?brand=${encodeURIComponent(car.brand)}`}
        >
          {car.brand}
        </Link>{" "}
        / <span>{car.name}</span>
      </p>

      <div className="car-hero" id="carContent">
        <img
          id="carImage"
          src={car.image || FALLBACK_IMAGE}
          alt={`${car.brand} ${car.name}`}
          onError={(event) => {
            event.currentTarget.onerror = null;
            event.currentTarget.src = FALLBACK_IMAGE;
          }}
        />

        <div>
          <p className="kicker">
            {car.brand?.toUpperCase()} · {car.type?.toUpperCase()}
          </p>

          <h1>{car.name}</h1>

          <p className="start-price">
            Starting at <strong>{formatINR(car.price)}</strong>
          </p>

          <div className="spec-grid">
            {Object.entries(car.specs || {}).map(
              ([key, value]) => (
                <div className="spec-box" key={key}>
                  <div className="val">{value ?? "—"}</div>
                  <div className="label">{key}</div>
                </div>
              )
            )}
          </div>

          <div className="hero-actions">
            <button
              className="btn-primary"
              type="button"
              onClick={() => goToTab("book")}
            >
              BOOK NOW
            </button>

            <button
              className="btn-secondary"
              type="button"
              onClick={() => goToTab("testdrive")}
            >
              Book Test Drive
            </button>
          </div>
        </div>
      </div>

      <div className="detail-tabs" id="detailTabs">
        {visibleTabs.map(([tabId, label]) => (
          <button
            key={tabId}
            className={`detail-tab-btn ${
              activeTab === tabId ? "active" : ""
            }`}
            data-tab={tabId}
            type="button"
            onClick={() => setActiveTab(tabId)}
          >
            {label}
          </button>
        ))}
      </div>

      {/* OVERVIEW */}
      <div
        className={`tab-panel ${
          activeTab === "overview" ? "active" : ""
        }`}
        id="panel-overview"
      >
        <p style={{ color: "#ccc", lineHeight: 1.8, maxWidth: 800 }}>
          {overviewText}
        </p>
      </div>

      {/* REVIEWS */}
      <div
        className={`tab-panel ${
          activeTab === "reviews" ? "active" : ""
        }`}
        id="panel-reviews"
      >
        <CarReviews car={car} />
      </div>

      {/* VARIANTS */}
      {car.variants?.length > 0 && (
        <div
          className={`tab-panel ${
            activeTab === "variants" ? "active" : ""
          }`}
          id="panel-variants"
        >
          <VariantsPanel
            car={car}
            selectedVariant={selectedVariant}
            onSelect={setSelectedVariant}
            getBookingPath={(name) => {
              const params = new URLSearchParams();
              params.set("variant", name);

              if (selectedColor?.name) {
                params.set("color", selectedColor.name);
              }

              if (selectedModIds.length) {
                params.set("mods", selectedModIds.join(","));
              }

              return `/book/${encodeURIComponent(
                car.id
              )}?${params.toString()}`;
            }}
          />
        </div>
      )}

      {/* FEATURES */}
      <div
        className={`tab-panel ${
          activeTab === "features" ? "active" : ""
        }`}
        id="panel-features"
      >
        <div className="features-grid">
          {car.features?.length ? (
            car.features.map((feature) => (
              <div className="feature-chip" key={feature}>
                <span className="dot"></span>
                {feature}
              </div>
            ))
          ) : (
            <p style={{ color: "#999" }}>
              No features available for this model yet.
            </p>
          )}
        </div>
      </div>

      {/* COLOURS */}
      <div
        className={`tab-panel ${
          activeTab === "colours" ? "active" : ""
        }`}
        id="panel-colours"
      >
        <div className="color-swatches">
          {car.colors?.length ? (
            car.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                className={`color-swatch ${
                  selectedColor?.name === color.name
                    ? "selected"
                    : ""
                }`}
                onClick={() => setSelectedColor(color)}
              >
                <span
                  className="dot"
                  style={{
                    background: color.hex,
                    border: "2px solid rgba(255,255,255,0.15)",
                  }}
                ></span>
                <span>{color.name}</span>
              </button>
            ))
          ) : (
            <p style={{ color: "#999" }}>
              Colour options will be added soon.
            </p>
          )}
        </div>

        <p style={{ color: "#999", marginTop: 18 }}>
          Selected colour: {selectedColor?.name || "Standard"}
        </p>
      </div>

      {/* MODIFY: ACCESSORY SELECTION */}
      <div
        className={`tab-panel ${
          activeTab === "modify" ? "active" : ""
        }`}
        id="panel-modify"
      >
        <div className="modify-layout">
          
<div className="modify-accessories">
  <p className="kicker">PERSONALISE YOUR CAR</p>

  <h2 className="modify-title">Accessories & Add-ons</h2>

  {/* <p className="modify-subtitle">
    Make your car yours with carefully selected accessories.
  </p> */}

  <AccessoryList
    accessories={availableMods}
    selectedIds={selectedModIds}
    onToggle={toggleAccessory}
  />
</div>


          <div className="price-summary">
            <h4>Price Breakdown</h4>

            <DetailRows
              rows={[
                ["Base Price", formatINR(car.price)],
                ...selectedMods.map((mod) => [
                  mod.name,
                  formatINR(mod.price),
                ]),
              ]}
            />

            <div className="total">
              <span>Total</span>
              <span>{formatINR(total)}</span>
            </div>

            <button
              className="btn-primary"
              type="button"
              style={{ width: "100%", marginTop: 16 }}
              onClick={() => goToTab("book")}
            >
              Continue to Book Now
            </button>
          </div>
        </div>
      </div>

      {/* BOOK NOW: EDIT THE SAME ACCESSORY SELECTION */}
      <div
        className={`tab-panel ${
          activeTab === "book" ? "active" : ""
        }`}
        id="panel-book"
      >
        <div className="detail-form-layout">
          <div className="detail-form-panel">
            <p className="kicker">YOUR CONFIGURATION</p>
            <h3>Book your {car.name}</h3>

            <p className="detail-form-note">
              You can change your accessories here without returning
              to the Modify tab. Your price updates automatically.
            </p>

            {car.variants?.length > 0 && (
              <div className="form-group">
                <label htmlFor="bookVariant">Variant</label>
                <select
                  id="bookVariant"
                  value={selectedVariant}
                  onChange={(event) =>
                    setSelectedVariant(event.target.value)
                  }
                >
                  {car.variants.map((variant) => (
                    <option
                      key={variant.name}
                      value={variant.name}
                    >
                      {variant.name}
                    </option>
                  ))}
                </select>
              </div>
            )}

            <div className="form-group">
              <label>Selected Colour</label>
              <p>{selectedColor?.name || "Standard"}</p>
              <button
                type="button"
                className="btn-secondary"
                onClick={() => goToTab("colours")}
              >
                Change Colour
              </button>
            </div>

            <h3 style={{ marginTop: 24 }}>
              Your Accessories
            </h3>

            <AccessoryList
              accessories={availableMods}
              selectedIds={selectedModIds}
              onToggle={toggleAccessory}
            />

            <Link
              className="btn-primary"
              style={{
                display: "block",
                textAlign: "center",
                marginTop: 20,
              }}
              to={bookingPath}
            >
              CONTINUE TO BOOKING
            </Link>
          </div>

          <div className="price-summary">
            <h4>Live Price Breakdown</h4>

            <DetailRows
              rows={[
                ["Car", `${car.brand} ${car.name}`],
                ["Base Price", formatINR(car.price)],
                ...(selectedVariant
                  ? [["Variant", selectedVariant]]
                  : []),
                ["Colour", selectedColor?.name || "Standard"],
                ...selectedMods.map((mod) => [
                  mod.name,
                  formatINR(mod.price),
                ]),
              ]}
            />

            {selectedMods.length > 0 && (
              <div className="row">
                <span>Accessories Total</span>
                <span>{formatINR(accessoriesTotal)}</span>
              </div>
            )}

            <div className="total">
              <span>Estimated Total</span>
              <span>{formatINR(total)}</span>
            </div>

            <p className="detail-form-note">
              Prices are indicative. Taxes, registration, insurance
              and dealer charges may change the final on-road price.
            </p>

            <button
              className="btn-secondary"
              type="button"
              style={{ width: "100%", marginTop: 12 }}
              onClick={() => goToTab("modify")}
            >
              Open Modify Tab
            </button>
          </div>
        </div>
      </div>

      {/* TEST DRIVE */}
      <div
        className={`tab-panel ${
          activeTab === "testdrive" ? "active" : ""
        }`}
        id="panel-testdrive"
      >
        <form
          className="detail-form-panel"
          onSubmit={submitTestDrive}
        >
          <h3 style={{ marginBottom: 8 }}>Book a Test Drive</h3>

          <p className="detail-form-note">
            Request a preferred date and time for the{" "}
            {car.brand} {car.name}.
          </p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tdName">Full Name</label>
              <input
                id="tdName"
                name="name"
                autoComplete="name"
                placeholder="Enter your full name"
                required
                value={testDriveForm.name}
                onChange={updateTestDrive}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tdPhone">Phone Number</label>
              <input
                id="tdPhone"
                name="phone"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                pattern="[0-9]{10}"
                placeholder="10-digit number"
                required
                value={testDriveForm.phone}
                onChange={updateTestDrive}
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tdCity">City / Showroom</label>
            <input
              id="tdCity"
              name="city"
              placeholder="Enter your city"
              required
              value={testDriveForm.city}
              onChange={updateTestDrive}
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tdDate">Preferred Date</label>
              <input
                id="tdDate"
                name="date"
                type="date"
                min={todayString()}
                required
                value={testDriveForm.date}
                onChange={updateTestDrive}
              />
            </div>

            <div className="form-group">
              <label htmlFor="tdSlot">Preferred Slot</label>
              <select
                id="tdSlot"
                name="slot"
                value={testDriveForm.slot}
                onChange={updateTestDrive}
              >
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
              </select>
            </div>
          </div>

          <button
            className="btn-primary"
            style={{ width: "100%", marginTop: 10 }}
            type="submit"
          >
            Schedule Test Drive
          </button>
        </form>
      </div>
    </main>
  );
}
