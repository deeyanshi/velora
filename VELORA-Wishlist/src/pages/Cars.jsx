
import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import CarCard from "../components/CarCard";
import { brands, getBrand, getCarsByBrand } from "../data/carData";

const BODY_TYPES = [
  {
    id: "hatchback",
    title: "Hatchback",
    icon: "🚗",
    description:
      "Compact cars with a rear hatch. A practical choice for city driving, easy parking and everyday use.",
  },
  {
    id: "sedan",
    title: "Sedan",
    icon: "🚘",
    description:
      "Cars with a separate boot and passenger cabin. Often chosen for comfortable daily and highway driving.",
  },
  {
    id: "suv",
    title: "SUV",
    icon: "🚙",
    description:
      "Higher-riding vehicles designed around space, road presence and versatility for families and mixed driving.",
  },
  {
    id: "mpv",
    title: "MPV",
    icon: "🚐",
    description:
      "Multi-purpose vehicles designed to prioritize passenger space and flexible seating for families and groups.",
  },
  {
    id: "coupe",
    title: "Coupe",
    icon: "🏎️",
    description:
      "Sportier, usually lower-slung cars focused on styling and driving character, commonly with two doors.",
  },
  {
    id: "convertible",
    title: "Convertible",
    icon: "🌤️",
    description:
      "Cars with a retractable or removable roof, designed for an open-air driving experience.",
  },
  {
    id: "sports",
    title: "Sports / Supercar",
    icon: "🏁",
    description:
      "Performance-focused cars built around acceleration, handling, design and driving experience.",
  },
  {
    id: "wagon",
    title: "Wagon",
    icon: "🚘",
    description:
      "Cars that combine car-like driving with an extended rear cargo area for additional practicality.",
  },
  {
    id: "pickup",
    title: "Pickup",
    icon: "🛻",
    description:
      "Vehicles with an open cargo bed, commonly used when carrying equipment or heavier loads matters.",
  },
];

const normalize = (value = "") => String(value).toLowerCase();

function getBodyType(car) {
  const type = normalize(car.type);
  const name = normalize(car.name);

  if (
    type.includes("mpv") ||
    type.includes("muv") ||
    type.includes("van") ||
    type.includes("people")
  ) {
    return "mpv";
  }

  if (
    type.includes("pickup") ||
    type.includes("pick-up") ||
    type.includes("truck")
  ) {
    return "pickup";
  }

  if (
    type.includes("convertible") ||
    type.includes("roadster") ||
    type.includes("cabriolet")
  ) {
    return "convertible";
  }

  if (type.includes("wagon") || type.includes("estate")) return "wagon";
  if (type.includes("hatch")) return "hatchback";
  if (type.includes("coupe")) return "coupe";

  if (
    type.includes("supercar") ||
    type.includes("sports") ||
    type.includes("hypercar")
  ) {
    return "sports";
  }

  if (
    type.includes("suv") ||
    type.includes("crossover") ||
    ["range rover", "jeep"].includes(normalize(car.brand))
  ) {
    return "suv";
  }

  if (
    name.includes("roadster") ||
    name.includes("spider") ||
    name.includes("huracan") ||
    name.includes("ferrari")
  ) {
    return "sports";
  }

  return "sedan";
}

function getFuelTypes(car) {
  const fuel = normalize(car.specs?.["Fuel Type"] || car.fuel || "");
  const values = [];

  if (fuel.includes("electric") || normalize(car.brand) === "tesla") {
    values.push("EV");
  }

  if (fuel.includes("diesel")) values.push("Diesel");
  if (fuel.includes("petrol") || fuel.includes("gasoline")) {
    values.push("Petrol");
  }

  if (fuel.includes("cng")) values.push("CNG");
  if (fuel.includes("hybrid")) values.push("Hybrid");

  return values.length ? values : ["Petrol"];
}

export default function Cars() {
  const [searchParams, setSearchParams] = useSearchParams();

  const brandName = searchParams.get("brand") || "";
  const selectedBody = searchParams.get("body") || "";
  const selectedFuel = searchParams.get("fuel") || "";

  const [search, setSearch] = useState("");

  const brand = getBrand(brandName);
  const brandCars = getCarsByBrand(brandName);
  const hasCars = brandCars.length > 0;

  const brandsWithCars = brands.filter(
    (item) => getCarsByBrand(item.name).length > 0
  );

  useEffect(() => {
    document.title = brand
      ? `VELORA | ${brand.name} Cars`
      : "VELORA | Cars";
  }, [brand]);

  const bodyCounts = useMemo(() => {
    const counts = {};

    BODY_TYPES.forEach((type) => {
      counts[type.id] = brandCars.filter(
        (car) => getBodyType(car) === type.id
      ).length;
    });

    return counts;
  }, [brandCars]);

  const availableFuelTypes = useMemo(() => {
    const fuelTypes = new Set();

    brandCars.forEach((car) => {
      getFuelTypes(car).forEach((fuel) => fuelTypes.add(fuel));
    });

    return ["Petrol", "Diesel", "EV", "Hybrid", "CNG"].filter((fuel) =>
      fuelTypes.has(fuel)
    );
  }, [brandCars]);

  const filteredCars = useMemo(() => {
    const query = normalize(search.trim());

    return brandCars.filter((car) => {
      const matchesBody =
        !selectedBody || getBodyType(car) === selectedBody;

      const matchesFuel =
        !selectedFuel || getFuelTypes(car).includes(selectedFuel);

      const searchable = [
        car.brand,
        car.name,
        car.type,
        ...(car.features || []),
        ...(car.variants || []).map(
          (variant) =>
            `${variant.name} ${variant.fuel || ""} ${
              variant.transmission || ""
            }`
        ),
        ...Object.entries(car.specs || {}).flatMap(([key, value]) => [
          key,
          value,
        ]),
      ]
        .join(" ")
        .toLowerCase();

      const matchesSearch = !query || searchable.includes(query);

      return matchesBody && matchesFuel && matchesSearch;
    });
  }, [brandCars, selectedBody, selectedFuel, search]);

  const chooseBody = (body) => {
    const next = new URLSearchParams(searchParams);

    if (body) {
      next.set("body", body);
    } else {
      next.delete("body");
    }

    next.delete("fuel");
    setSearchParams(next);
  };

  const chooseFuel = (fuel) => {
    const next = new URLSearchParams(searchParams);

    if (fuel) {
      next.set("fuel", fuel);
    } else {
      next.delete("fuel");
    }

    setSearchParams(next);
  };

  if (!brand) {
    return (
      <main className="page-wrap">
        <p className="breadcrumbs">
          <Link to="/">Home</Link> / <span>Not found</span>
        </p>

        <div className="page-heading">
          <p className="eyebrow">BRAND</p>
          <h1>Brand not found</h1>
          <p className="desc">
            We couldn't find that brand. Go back and pick one from the VELORA
            brand collection.
          </p>
          <Link className="btn-primary" to="/">
            Explore Brands
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page-wrap brand-discovery-page">
      <p className="breadcrumbs">
        <Link to="/">Home</Link> / <span>{brand.name}</span>
        {selectedBody && (
          <>
            {" "}
            /{" "}
            <span>
              {BODY_TYPES.find((item) => item.id === selectedBody)?.title}
            </span>
          </>
        )}
      </p>

      <section className="brand-intro-panel">
        <div className="brand-intro-copy">
          <p className="eyebrow">{brand.category.toUpperCase()}</p>

          <h1>
            Explore <span>{brand.name}</span>
          </h1>

          <p className="brand-intro-lead">{brand.tagline}</p>

          <p className="brand-intro-text">
            {hasCars
              ? "Start by understanding the kind of vehicle you want. Select a body type below and VELORA will show the cars available in that category for this brand."
              : `We are finalising verified specifications for ${brand.name}. Its models will appear here as soon as they are ready.`}
          </p>

          <div className="brand-intro-pills">
            <span>
              {hasCars
                ? `${brandCars.length} ${
                    brandCars.length === 1 ? "model" : "models"
                  } in catalogue`
                : "Models coming soon"}
            </span>

            {availableFuelTypes.map((fuel) => (
              <span key={fuel}>{fuel}</span>
            ))}
          </div>
        </div>

        <div className="brand-intro-mark">
          {brand.logo ? (
            <img src={brand.logo} alt={`${brand.name} logo`} />
          ) : (
            <span>
              {brand.name
                .split(/\s+/)
                .map((part) => part[0])
                .join("")
                .slice(0, 3)
                .toUpperCase()}
            </span>
          )}
        </div>
      </section>

      {!hasCars && (
        <section className="coming-soon-panel">
          <div className="coming-soon-icon" aria-hidden="true">
            ◌
          </div>

          <h2>{brand.name} models are coming soon</h2>

          <p>
            VELORA only lists vehicles with verified specifications. Meanwhile,
            explore brands that already have a full line-up, or let us suggest
            a car for you.
          </p>

          <div className="coming-soon-brands">
            {brandsWithCars.map((item) => (
              <Link
                key={item.name}
                to={`/cars?brand=${encodeURIComponent(item.name)}`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="coming-soon-actions">
            <Link className="btn-primary" to="/#brands">
              Browse all brands
            </Link>

            <Link className="btn-secondary" to="/find-my-car">
              Find My Car
            </Link>
          </div>
        </section>
      )}

      {hasCars && (
        <>
          <section className="body-type-section">
            <div className="section-heading-inline">
              <div>
                <p className="eyebrow">CHOOSE YOUR STYLE</p>
                <h2>What kind of car are you looking for?</h2>
                <p>
                  Pick a body type to narrow this brand's line-up. Each option
                  explains what it is commonly used for.
                </p>
              </div>

              {selectedBody && (
                <button
                  className="clear-filter-btn"
                  onClick={() => chooseBody("")}
                >
                  Show all
                </button>
              )}
            </div>

            <div className="body-type-grid">
              {BODY_TYPES.filter(
                (type) => (bodyCounts[type.id] || 0) > 0
              ).map((type) => {
                const count = bodyCounts[type.id] || 0;
                const active = selectedBody === type.id;

                return (
                  <button
                    type="button"
                    key={type.id}
                    className={`body-type-card ${
                      active ? "active" : ""
                    } ${count === 0 ? "unavailable" : ""}`}
                    onClick={() => count > 0 && chooseBody(type.id)}
                    disabled={count === 0}
                  >
                    <span className="body-type-icon">{type.icon}</span>
                    <span className="body-type-title">{type.title}</span>
                    <span className="body-type-description">
                      {type.description}
                    </span>
                    <span className="body-type-count">
                      {count
                        ? `${count} available`
                        : "Not in current catalogue"}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          <section className="cars-results-section">
            <div className="results-heading-row">
              <div>
                <p className="eyebrow">
                  {selectedBody
                    ? BODY_TYPES.find(
                        (item) => item.id === selectedBody
                      )?.title.toUpperCase()
                    : "CURRENT LINEUP"}
                </p>

                <h2>
                  {selectedBody
                    ? `${brand.name} ${
                        BODY_TYPES.find(
                          (item) => item.id === selectedBody
                        )?.title
                      }s`
                    : `${brand.name} Cars`}
                </h2>
              </div>

              <div className="catalog-search-wrap">
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search cars, features or specifications..."
                  aria-label="Search this brand"
                />
              </div>
            </div>

            <div className="fuel-filter-row">
              <span>Powertrain:</span>

              <button
                className={!selectedFuel ? "active" : ""}
                onClick={() => chooseFuel("")}
              >
                All
              </button>

              {availableFuelTypes.map((fuel) => (
                <button
                  key={fuel}
                  className={selectedFuel === fuel ? "active" : ""}
                  onClick={() => chooseFuel(fuel)}
                >
                  {fuel}
                </button>
              ))}
            </div>

            {filteredCars.length === 0 ? (
              <div className="no-results brand-no-results">
                <h3>No cars match this selection yet.</h3>

                <p>
                  That is because the current catalogue only contains the
                  researched models currently loaded into VELORA. More models
                  can be added later without changing this page.
                </p>

                <button
                  className="secondary-btn"
                  onClick={() => {
                    setSearch("");
                    chooseBody("");
                  }}
                >
                  Reset Selection
                </button>
              </div>
            ) : (
              <div className="cars-grid">
                {filteredCars.map((car) => (
                  <CarCard key={car.id} car={car} />
                ))}
              </div>
            )}

            {brand.upcoming?.length > 0 && (
              <div className="upcoming-block">
                <p className="eyebrow">MORE ON THE WAY</p>
                <h3>Models being added</h3>

                <div className="upcoming-chips">
                  {brand.upcoming.map((name) => (
                    <span key={name}>{name}</span>
                  ))}
                </div>
              </div>
            )}
          </section>
        </>
      )}
    </main>
  );
}

