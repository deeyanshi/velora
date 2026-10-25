import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { formatINR, getCarById } from "../data/carData";
import VariantsPanel from "../components/VariantsPanel";
import CarConfigurator from "../components/CarConfigurator";
import CarReviews from "../components/CarReviews";

const FALLBACK_IMAGE =
  "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80";

const tabs = [
  ["overview", "Overview"],
  ["reviews", "Reviews"],
  ["variants", "Variants"],
  ["features", "Features"],
  ["colours", "Colours"],
  ["configurator", "360° Configurator"],
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

function appendStorage(key, record) {
  const list = readArray(key);
  list.push(record);
  try {
    localStorage.setItem(key, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}

function todayString() {
  const date = new Date();
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000);
  return local.toISOString().split("T")[0];
}

function getSelectedVisual(car, selectedColor, selectedVariant) {
  const variant = (car?.variants || []).find((item) => item.name === selectedVariant);
  return {
    src: variant?.image || selectedColor?.image || car?.image || FALLBACK_IMAGE,
    filter: selectedColor?.visualFilter || "none",
  };
}

function DetailRows({ rows }) {
  return (
    <>
      {rows.map(([label, value]) => (
        <div className="row" key={label}>
          <span>{label}</span>
          <span>{value}</span>
        </div>
      ))}
    </>
  );
}

export default function CarDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = getCarById(id);

  const [activeTab, setActiveTab] = useState("overview");
  const [selectedColor, setSelectedColor] = useState(car?.colors?.[0] || { name: "Standard", hex: "#777777" });
  const [selectedModIds, setSelectedModIds] = useState([]);
  const [confirmation, setConfirmation] = useState(null);
  const [selectedVariant, setSelectedVariant] = useState(car?.variants?.[0]?.name || "");

  const [testDriveForm, setTestDriveForm] = useState({
    name: "",
    phone: "",
    city: "",
    date: "",
    slot: "10:00 AM",
  });

  useEffect(() => {
    document.title = car ? `VELORA | ${car.name}` : "VELORA | Car Not Found";
  }, [car]);

  useEffect(() => {
    if (!car) return;
    setSelectedColor(car.colors?.[0] || { name: "Standard", hex: "#777777" });
    setSelectedModIds([]);
    setSelectedVariant(car.variants?.[0]?.name || "");
    setConfirmation(null);
    setActiveTab("overview");
  }, [id, car]);

  const selectedVisual = useMemo(
    () => getSelectedVisual(car, selectedColor, selectedVariant),
    [car, selectedColor, selectedVariant]
  );

  const selectedMods = useMemo(
    () => (car?.mods || []).filter((mod) => selectedModIds.includes(mod.id)),
    [car, selectedModIds]
  );

  const total = useMemo(() => {
    if (car?.price === null || car?.price === undefined) return null;
    return Number(car.price) + selectedMods.reduce((sum, mod) => sum + (Number(mod.price) || 0), 0);
  }, [car, selectedMods]);

  const visibleTabs = useMemo(
    () => tabs.filter(([tabId]) => tabId !== "variants" || car?.variants?.length),
    [car]
  );

  const overviewText = useMemo(() => {
    if (!car) return "";
    if (car.overview) return car.overview;
    const engine = car.specs?.Engine || "modern engine";
    const power = car.specs?.Power || "strong performance";
    const transmission = car.specs?.Transmission || "automatic transmission";
    const seating = car.specs?.Seating || "multiple passengers";
    const fuel = car.specs?.["Fuel Type"] || "modern powertrain";

    return `The ${car.brand} ${car.name} pairs a ${engine} with ${power} through a ${transmission} gearbox, seating ${seating} and running on ${fuel}. Explore its features, pick a colour, add optional accessories, then book it or reserve a test drive — all from this page.`;
  }, [car]);

  const bookingPath = useMemo(() => {
    if (!car) return "/";
    const params = new URLSearchParams();
    if (selectedVariant) params.set("variant", selectedVariant);
    if (selectedColor?.name) params.set("color", selectedColor.name);
    if (selectedModIds.length) params.set("mods", selectedModIds.join(","));
    const query = params.toString();
    return `/book/${encodeURIComponent(car.id)}${query ? `?${query}` : ""}`;
  }, [car, selectedVariant, selectedColor, selectedModIds]);

  const goToTab = (tab) => {
    if (!tab) return;
    setActiveTab(tab);
    requestAnimationFrame(() => {
      document.getElementById("detailTabs")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  const updateTestDrive = (event) => {
    const { name, value } = event.target;
    setTestDriveForm((current) => ({ ...current, [name]: value }));
  };

  const submitTestDrive = (event) => {
    event.preventDefault();
    if (!car) return;

    const name = testDriveForm.name.trim();
    const phone = testDriveForm.phone.trim();
    const city = testDriveForm.city.trim();
    const date = testDriveForm.date;

    if (!name || !phone || !city || !date) {
      alert("Please fill in all the fields.");
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
      fee: car.testDrivePrice,
      duration: 60,
      name,
      phone,
      city,
      date,
      slot: testDriveForm.slot,
      createdAt: new Date().toISOString(),
    };

    appendStorage("velora_test_drives", record);

    setConfirmation({
      title: "Test Drive Scheduled!",
      text: `Your test drive for the ${car.brand} ${car.name} is scheduled for ${date} at ${testDriveForm.slot}.`,
    });
  };

  if (!car) {
    return (
      <main className="page-wrap">
        <p className="breadcrumbs"><Link to="/">Home</Link> / <span>Car Not Found</span></p>
        <p className="no-results">Car not found. Please go back and select a car.</p>
      </main>
    );
  }

  if (confirmation) {
    return (
      <main className="page-wrap">
        <div className="confirm-box" style={{ display: "block" }}>
          <div className="check">✓</div>
          <h2>{confirmation.title}</h2>
          <p>{confirmation.text}</p>
          <Link className="btn-primary" to="/">Back to Brands</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-wrap">
      <p className="breadcrumbs" id="crumbs">
        <Link to="/">Home</Link> /{" "}
        <Link to={`/cars?brand=${encodeURIComponent(car.brand)}`}>{car.brand}</Link> /{" "}
        <span>{car.name}</span>
      </p>

      <div className="car-hero" id="carContent">
        <img 
          id="carImage"
          src={selectedVisual.src}
          alt={`${car.brand} ${car.name} ${selectedVariant || ""}`}
          style={{ filter: selectedVisual.filter }}
          onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = `https://carapi.trustcar.info/getImage?make=${encodeURIComponent(car.brand)}&model=${encodeURIComponent(car.name)}`;
        }}
        />

        <div>
          <p className="kicker">{car.brand.toUpperCase()} · {car.type.toUpperCase()}</p>
          <h1>{car.name}</h1>
          <p className="start-price">
            Starting at <strong>{formatINR(car.price)}</strong>
          </p>

          <div className="spec-grid">
            {Object.entries(car.specs || {}).map(([key, value]) => (
              <div className="spec-box" key={key}>
                <div className="val">{value ?? "—"}</div>
                <div className="label">{key}</div>
              </div>
            ))}
          </div>

          <div className="hero-actions">
            <Link className="btn-primary" to={bookingPath}>
              BOOK NOW
            </Link>
            <button className="btn-secondary" type="button" onClick={() => goToTab("testdrive")}>
              Book Test Drive
            </button>
          </div>
        </div>
      </div>

      <div className="detail-tabs" id="detailTabs">
        {visibleTabs.map(([tabId, label]) => (
          <button
            key={tabId}
            className={`detail-tab-btn ${activeTab === tabId ? "active" : ""}`}
            data-tab={tabId}
            type="button"
            onClick={() => setActiveTab(tabId)}
          >
            {label}
          </button>
        ))}
      </div>

      <div className={`tab-panel ${activeTab === "overview" ? "active" : ""}`} id="panel-overview">
        <p style={{ color: "#ccc", lineHeight: 1.8, maxWidth: 700 }}>{overviewText}</p>
      </div>

      <div className={`tab-panel ${activeTab === "reviews" ? "active" : ""}`} id="panel-reviews">
        <CarReviews car={car} />
      </div>

      {car.variants?.length > 0 && (
        <div className={`tab-panel ${activeTab === "variants" ? "active" : ""}`} id="panel-variants">
          <VariantsPanel car={car} selectedVariant={selectedVariant} onSelect={setSelectedVariant} getBookingPath={(name) => `/book/${encodeURIComponent(car.id)}?${new URLSearchParams({ variant: name, ...(selectedColor?.name ? { color: selectedColor.name } : {}), ...(selectedModIds.length ? { mods: selectedModIds.join(",") } : {}) })}`} />
        </div>
      )}

      {car.arena && (
        <section className="arena-detail-panel">
          <div className="arena-detail-heading">
            <div><p className="eyebrow">MARUTI SUZUKI ARENA DATA</p><h2>Official-range information for {car.name}</h2><p>Specifications, powertrains, variants, connected ownership and support options are consolidated here for your selected model.</p></div>
            <a href={car.arena.official} target="_blank" rel="noreferrer">View official model page ↗</a>
          </div>
          <div className="arena-detail-links">
            {car.arena.services.map((service) => service.href.startsWith("/") ? <Link key={service.title} to={service.href}>{service.title}</Link> : <a key={service.title} href={service.href} target="_blank" rel="noreferrer">{service.title} ↗</a>)}
          </div>
        </section>
      )}

      <div className={`tab-panel ${activeTab === "features" ? "active" : ""}`} id="panel-features">
        <div className="features-grid">
          {(car.features || []).length ? (
            car.features.map((feature) => (
              <div className="feature-chip" key={feature}>
                <span className="dot"></span>{feature}
              </div>
            ))
          ) : <p style={{ color: "#999" }}>No features available.</p>}
        </div>
      </div>

      <div className={`tab-panel ${activeTab === "configurator" ? "active" : ""}`} id="panel-configurator">
        <CarConfigurator
          car={car}
          selectedColor={selectedColor}
          selectedVariant={selectedVariant}
          onColorChange={setSelectedColor}
          onVariantChange={setSelectedVariant}
        />
      </div>

      <div className={`tab-panel ${activeTab === "colours" ? "active" : ""}`} id="panel-colours">
        <div className="color-swatches">
          {(car.colors || []).length ? (
            car.colors.map((color) => (
              <button
                key={color.name}
                type="button"
                className={`color-swatch ${selectedColor?.name === color.name ? "selected" : ""}`}
                onClick={() => setSelectedColor(color)}
              >
                <span
                  className="dot"
                  style={{ background: color.hex, border: "2px solid rgba(255,255,255,0.15)" }}
                ></span>
                <span>{color.name}</span>
              </button>
            ))
          ) : <p style={{ color: "#999" }}>Colour options for this model will be added soon.</p>}
        </div>
      </div>

      <div className={`tab-panel ${activeTab === "modify" ? "active" : ""}`} id="panel-modify">
        <div className="modify-layout">
          <div className="mod-list">
            {(car.mods || []).length ? (
              car.mods.map((mod) => {
                const checked = selectedModIds.includes(mod.id);
                return (
                  <label className={`mod-item ${checked ? "checked" : ""}`} key={mod.id}>
                    <div className="mod-item-left">
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() =>
                          setSelectedModIds((current) =>
                            current.includes(mod.id)
                              ? current.filter((item) => item !== mod.id)
                              : [...current, mod.id]
                          )
                        }
                      />
                      <div>
                        <h4>{mod.name}</h4>
                        <p>{mod.desc}</p>
                      </div>
                    </div>
                    <span className="mod-price">+ {formatINR(mod.price)}</span>
                  </label>
                );
              })
            ) : <p style={{ color: "#999" }}>Accessories for this model will be added soon.</p>}
          </div>

          <div className="price-summary">
            <h4>Price Breakdown</h4>
            <DetailRows
              rows={[
                ["Base Price", formatINR(car.price)],
                ...selectedMods.map((mod) => [mod.name, formatINR(mod.price)]),
              ]}
            />
            <div className="total">
              <span>Total</span>
              <span>{formatINR(total)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`tab-panel ${activeTab === "book" ? "active" : ""}`} id="panel-book">
        <div className="detail-form-layout">
          <div className="detail-form-panel">
            <h3 style={{ marginBottom: 8 }}>Book this car online</h3>
            <p className="detail-form-note">
              Choose your variant, customise colour and accessories, see an estimated state-wise on-road price,
              pick full payment or a car loan, and confirm — all in one guided booking.
            </p>
            {car.variants?.length > 0 && (
              <div className="form-group">
                <label htmlFor="bookVariant">Variant</label>
                <select id="bookVariant" value={selectedVariant} onChange={(event) => setSelectedVariant(event.target.value)}>
                  {car.variants.map((variant) => <option key={variant.name} value={variant.name}>{variant.name}</option>)}
                </select>
              </div>
            )}
            <Link className="btn-primary" style={{ width: "100%", marginTop: 10 }} to={bookingPath}>BOOK NOW</Link>
          </div>

          <div className="price-summary">
            <h4>Your selection</h4>
            <DetailRows
              rows={[
                [`${car.brand} ${car.name}`, formatINR(car.price)],
                ...(selectedVariant ? [["Variant", selectedVariant]] : []),
                ["Colour", selectedColor?.name || "Standard"],
                ...selectedMods.map((mod) => [mod.name, formatINR(mod.price)]),
              ]}
            />
            <div className="total">
              <span>Ex-showroom + mods</span>
              <span>{formatINR(total)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className={`tab-panel ${activeTab === "testdrive" ? "active" : ""}`} id="panel-testdrive">
        <form className="detail-form-panel" onSubmit={submitTestDrive}>
          <p className="detail-form-note">
            A refundable booking fee of <strong style={{ color: "#c9a96e" }}>{formatINR(car.testDrivePrice)}</strong>{" "}
            applies, adjusted against your purchase if you buy the car.
          </p>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tdName">Full Name</label>
              <input id="tdName" name="name" autoComplete="name" placeholder="Enter your full name" required value={testDriveForm.name} onChange={updateTestDrive} />
            </div>
            <div className="form-group">
              <label htmlFor="tdPhone">Phone Number</label>
              <input id="tdPhone" name="phone" inputMode="numeric" maxLength="10" pattern="[0-9]{10}" placeholder="10-digit number" required value={testDriveForm.phone} onChange={updateTestDrive} />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="tdCity">City / Showroom</label>
            <input id="tdCity" name="city" placeholder="Enter your city" required value={testDriveForm.city} onChange={updateTestDrive} />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="tdDate">Preferred Date</label>
              <input id="tdDate" name="date" type="date" min={todayString()} required value={testDriveForm.date} onChange={updateTestDrive} />
            </div>
            <div className="form-group">
              <label htmlFor="tdSlot">Preferred Slot</label>
              <select id="tdSlot" name="slot" value={testDriveForm.slot} onChange={updateTestDrive}>
                <option value="10:00 AM">10:00 AM</option>
                <option value="12:00 PM">12:00 PM</option>
                <option value="2:00 PM">2:00 PM</option>
                <option value="4:00 PM">4:00 PM</option>
                <option value="6:00 PM">6:00 PM</option>
              </select>
            </div>
          </div>

          <button className="btn-primary" style={{ width: "100%", marginTop: 10 }} type="submit">Schedule Test Drive</button>
        </form>
      </div>
    </main>
  );
}
