/* VELORA — Maruti Suzuki ARENA catalogue enrichment
   Source: Maruti Suzuki ARENA search/configurator/price pages.
   Prices are starting/ex-showroom figures shown by the source page and can change.
*/

export const MARUTI_ARENA_SOURCE = "https://www.marutisuzuki.com/arena/search?q=cars&tab=all&p=1";

export const marutiArenaServices = [
  { title: "Help Me Select", text: "Answer a few questions and get guided toward a suitable Arena car.", action: "Find My Car", href: "/find-my-car" },
  { title: "Compare Cars", text: "Compare Arena cars across overview, features and technical specifications.", action: "Compare", href: "/cars?brand=Maruti%20Suzuki" },
  { title: "Book a Car", text: "Select a car, choose a showroom and continue to booking confirmation.", action: "Book Now", href: "/cars?brand=Maruti%20Suzuki" },
  { title: "Book Test Drive", text: "Select a vehicle, dealership, date and personal details for a test drive.", action: "Test Drive", href: "/cars?brand=Maruti%20Suzuki" },
  { title: "Smart Finance", text: "Explore finance-oriented ownership options for your selected car.", action: "Explore Finance", href: "https://www.marutisuzuki.com/arena" },
  { title: "Genuine Accessories", text: "Personalize your vehicle with model-specific genuine accessories.", action: "Accessories", href: "https://www.marutisuzuki.com/arena" },
  { title: "Service Hub", text: "Book service, find support, warranty and maintenance options.", action: "Service", href: "https://www.marutisuzuki.com/arena" },
  { title: "Genuine Parts", text: "Explore genuine replacement parts and ownership support.", action: "Parts", href: "https://www.marutisuzuki.com/arena" },
];

const arenaMeta = {
  "S-Presso": {
    startingPrice: 349900, fuel: "Petrol / S-CNG", transmissions: "5MT / AGS", seating: 5,
    engine: "998 cc K10C Advanced Dual Jet, Dual VVT", power: "49 kW @ 5500 rpm", torque: "89 Nm @ 3500 rpm",
    mileage: "25.30 km/l petrol; 32.73 km/kg CNG", dimensions: "3565 × 1520 × 1567 mm", wheelbase: "2380 mm", boot: "239 L", tank: "27 L",
    colours: ["Solid Sizzle Orange", "Solid Fire Red", "Bluish Black", "Pearl Starry Blue", "Metallic Granite Grey", "Solid White", "Metallic Silky Silver"],
    variants: ["Std (O) MT", "LXi (O) MT", "LXi (O) CNG", "VXi (O) MT", "VXi (O) AGS", "VXi (O) CNG", "VXi+ (O) MT", "VXi+ (O) AGS"],
    features: ["SUV-inspired stance", "C-shaped tail lamps", "Twin chamber headlamps", "14-inch tyres", "Electrically adjustable ORVMs", "239 L boot", "SmartPlay Studio", "Steering-mounted audio and voice controls", "Hill Hold Assist", "ESP", "HEARTECT platform", "ABS with EBD", "Reverse parking sensors", "Dual airbags", "Idle Start-Stop on petrol"],
    official: "https://www.marutisuzuki.com/arena/s-presso"
  },
  "Alto K10": {
    startingPrice: 369900, fuel: "Petrol / S-CNG", transmissions: "5MT / AGS", seating: 5,
    engine: "998 cc K-Series Dual Jet, Dual VVT", power: "50.4 kW @ 5600 rpm", torque: "89 Nm", mileage: "24.39 km/l petrol; 24.90 km/l petrol AGS; 33.40 km/kg CNG",
    dimensions: "3530 × 1490 × 1520 mm", wheelbase: "2380 mm", boot: "214 L", tank: "27 L",
    colours: ["Metallic Sizzling Red", "Metallic Silky Silver", "Metallic Granite Grey", "Premium Earth Gold", "Metallic Speedy Blue", "Solid White", "Bluish Black"],
    variants: ["Std", "LXi", "VXi", "VXi+", "LXi CNG"],
    features: ["Honeycomb grille", "13-inch wheels", "Reverse parking sensor", "Smartplay Studio with smartphone navigation", "Steering-mounted audio and voice control", "Digital speedometer", "AGS", "6 airbags standard", "HEARTECT platform", "ESP", "3-point ELR seat belts", "ABS with EBD"],
    official: "https://www.marutisuzuki.com/arena/alto-k10"
  },
  "Celerio": {
    startingPrice: 469900, fuel: "Petrol / S-CNG", transmissions: "5MT / AGS", seating: 5,
    engine: "998 cc K10C", power: "50.4 kW (68.5 PS) @ 5600 rpm", torque: "91.1 Nm @ 3400 rpm", mileage: "Up to 26.00 km/l petrol; 34.43 km/kg CNG",
    dimensions: "3695 × 1655 × 1555 mm", wheelbase: "2435 mm", boot: "292 L", tank: "32 L",
    variants: ["LXi MT", "VXi MT", "VXi AGS", "VXi CNG", "ZXi MT", "ZXi AGS", "ZXi+ MT", "ZXi+ AGS"],
    colours: ["Caffeine Brown", "Fire Red", "Speedy Blue", "Silky Silver", "Arctic White", "Glistering Grey"],
    features: ["6 airbags", "ABS with EBD", "ESP", "Hill Hold Assist", "Reverse parking sensors", "60:40 folding rear seats", "Rear defogger", "Power windows", "Electrically adjustable ORVMs", "SmartPlay/Dock infotainment", "4 speakers", "Idle Start-Stop", "292 L boot"],
    official: "https://www.marutisuzuki.com/arena/celerio"
  },
  "Wagon R": {
    startingPrice: 498900, fuel: "Petrol / S-CNG", transmissions: "5MT / AGS", seating: 5,
    engine: "1.0L / 1.2L petrol and S-CNG", power: "Variant dependent", torque: "Variant dependent", mileage: "Variant dependent",
    dimensions: "3655 × 1620 × 1675 mm", wheelbase: "2435 mm", boot: "341 L", tank: "32 L",
    variants: ["LXi", "LXi CNG", "VXi", "VXi AGS", "VXi CNG", "ZXi", "ZXi AGS", "ZXi+", "ZXi+ AGS"],
    colours: ["Superior White", "Silky Silver", "Magma Grey", "Nutmeg Brown", "Poolside Blue", "Autumn Orange"],
    features: ["Side and curtain airbags", "Dual front airbags", "ABS with EBD", "ESP", "Hill Hold Assist on AGS", "Rear parking sensors", "Central locking", "SmartPlay Studio", "Apple CarPlay", "Android Auto", "Bluetooth", "Steering-mounted controls", "14-inch alloy wheels on ZXi+", "Electrically adjustable ORVMs", "60:40 rear seat", "Rear wiper/washer on equipped variants"],
    official: "https://www.marutisuzuki.com/arena/wagonr"
  },
  "Eeco": {
    startingPrice: 528400, fuel: "Petrol / S-CNG", transmissions: "5MT", seating: "5 / 6", engine: "1197 cc K12N", power: "60.5 kW @ 6000 rpm", torque: "105.5 Nm @ 3000 rpm", mileage: "19.71 km/l petrol; CNG varies",
    dimensions: "3675 × 1475 × 1825 mm", wheelbase: "2350 mm", tank: "32 L",
    variants: ["5 Seater Standard", "6 Seater Standard", "5 Seater AC", "5 Seater AC CNG", "Ambulance", "Ambulance Shell"],
    colours: ["Solid White", "Metallic Silky Silver", "Metallic Glistening Grey", "Metallic Brisk Blue", "Pearl Midnight Blue"],
    features: ["5- and 6-seater options", "Large boot space", "Spacious cabin", "Air conditioner with heater", "3-point ELR seat belts for rear seats", "Clear lens headlamps", "Clear lens tail lamps", "Outside rear view mirrors", "Front mud flaps", "Factory-fitted CNG option", "5-speed manual transmission"],
    official: "https://www.marutisuzuki.com/arena/eeco"
  },
  "Swift": {
    startingPrice: 583900, fuel: "Petrol / S-CNG", transmissions: "5MT / AMT", seating: 5,
    engine: "1197 cc Z12E", power: "60 kW @ 5700 rpm petrol", torque: "111.7 Nm @ 4300 rpm petrol", mileage: "24.80 km/l petrol; 32.85 km/kg CNG",
    dimensions: "3860 × 1735 × 1520 mm", wheelbase: "2450 mm", boot: "265 L", tank: "37 L petrol / 55 L CNG water capacity",
    colours: ["Sizzling Red", "Luster Blue", "Novel Orange", "Magma Grey", "Splendid Silver", "Pearl Arctic White", "Sizzling Red with Midnight Black Roof", "Luster Blue with Midnight Black Roof", "Pearl Arctic White with Midnight Black Roof"],
    variants: ["LXi MT", "VXi MT", "VXi (O) MT", "VXi AMT", "VXi (O) AMT", "VXi CNG", "VXi (O) CNG", "VXi CNG AGS", "VXi (O) CNG AGS", "ZXi MT", "ZXi AMT", "ZXi CNG", "ZXi CNG AGS", "ZXi+ MT", "ZXi+ AMT"],
    features: ["Side and curtain airbags", "Hill Hold Assist", "ESP", "ABS with EBD", "SmartPlay Pro 17.78 cm touchscreen", "Wireless Android Auto and Apple CarPlay", "Suzuki Connect", "Reverse parking sensors", "Push-button start", "Smart key", "Auto headlamps", "Wireless charger", "Rear AC vents", "LED projector headlamps on equipped variants", "Cruise control", "9-inch touchscreen on top variant"],
    official: "https://www.marutisuzuki.com/arena/swift"
  },
  "Dzire": {
    startingPrice: 630600, fuel: "Petrol / S-CNG", transmissions: "5MT / AGS", seating: 5,
    engine: "1197 cc Z-Series", power: "66 kW / 81.58 PS @ 5700 rpm", torque: "111.7 Nm @ 4300 rpm", mileage: "24.79 km/l petrol MT; 25.71 km/l AGS; 33.73 km/kg CNG",
    dimensions: "3995 × 1735 × 1525 mm", wheelbase: "2450 mm", boot: "382 L", tank: "37 L petrol / CNG water capacity varies",
    colours: ["Sizzling Red", "Bluish Black", "Splendid Silver", "Pearl Arctic White", "Magma Grey", "Lustrous Beige"],
    variants: ["LXi MT", "VXi MT", "VXi AMT", "VXi CNG", "ZXi MT", "ZXi AMT", "ZXi CNG", "ZXi+ MT", "ZXi+ AMT"],
    features: ["6 airbags", "ESP with Hill Hold Assist", "ABS with EBD", "Tyre Pressure Monitoring System", "LED Crystal Vision headlamps", "LED DRLs", "Shark-fin antenna", "Electric sunroof", "Wireless charger", "SmartPlay Pro+", "Wireless Android Auto and Apple CarPlay", "Suzuki Connect", "Rear AC vents", "Cruise control", "382 L boot"],
    official: "https://www.marutisuzuki.com/arena/dzire"
  },
  "Brezza": {
    startingPrice: 739900, fuel: "Petrol / S-CNG", transmissions: "5MT / 6AT", seating: 5,
    engine: "1462 cc K15C / Smart Hybrid", power: "74 kW / 100.6 PS petrol; 75.8 kW / 103.1 PS Smart Hybrid; 64.6 kW / 87.8 PS CNG", torque: "137.1 Nm petrol; 139 Nm Smart Hybrid; 121.5 Nm CNG", mileage: "Variant dependent",
    dimensions: "3995 × 1790 × 1685 mm", wheelbase: "2500 mm", boot: "328 L", tank: "48 L petrol / 55 L CNG water equivalent",
    colours: ["Vivacious Orange", "Lustrous Beige", "Pearl Bluish Black", "Magma Grey", "Sizzling Red", "Splendid Silver", "Pearl Arctic White", "Lustrous Beige with Bluish Black Roof", "Arctic White with Bluish Black Roof", "Sizzling Red with Bluish Black Roof"],
    variants: ["LXi MT", "VXi MT", "VXi AT", "ZXi MT", "ZXi AT", "ZXi+ MT", "ZXi+ AT", "LXi CNG MT", "VXi CNG MT", "ZXi CNG MT"],
    features: ["Electric sunroof", "Wireless charger", "Projector LED headlamps with DRLs", "SmartPlay Pro with Arkamys", "SmartPlay Pro X on equipped variant", "360-degree camera", "Front ventilated seats", "6 airbags", "ESP with Hill Hold Control", "Suzuki Connect", "Smart Hybrid", "S-CNG option", "Shark-fin antenna", "Alloy wheels", "Rear parking sensors"],
    official: "https://www.marutisuzuki.com/arena/brezza"
  },
  "Ertiga": {
    startingPrice: 890000, fuel: "Smart Hybrid / S-CNG", transmissions: "5MT / 6AT", seating: 7,
    engine: "1462 cc K15C Smart Hybrid", power: "75.8 kW @ 6000 rpm", torque: "136.8 Nm @ 4400 rpm", mileage: "20.51 km/l petrol; 26.11 km/kg CNG",
    dimensions: "4395 × 1735 × 1690 mm", wheelbase: "2740 mm", tank: "45 L petrol / 60 L CNG",
    variants: ["LXi MT", "VXi MT", "VXi AT", "VXi CNG", "ZXi MT", "ZXi AT", "ZXi CNG", "ZXi+ MT", "ZXi+ AT"],
    colours: ["Pearl Metallic Auburn Red", "Pearl Metallic Oxford Blue", "Metallic Splendid Silver", "Pearl Arctic White", "Metallic Magma Grey", "Dignity Brown"],
    features: ["7-seat three-row layout", "3rd-row AC with 3-stage control", "USB Type-C fast charger", "6 airbags", "ABS with EBD and Brake Assist", "ESP with Hill Hold Control", "ISOFIX", "Reverse parking sensors", "SmartPlay Studio 17.78 cm touchscreen", "Android Auto and Apple CarPlay", "Suzuki Connect", "Rear AC vents", "60:40 folding rear seats", "50:50 split third-row seats", "Smart Hybrid", "S-CNG"],
    official: "https://www.marutisuzuki.com/arena/ertiga"
  },
  "Victoris": {
    startingPrice: 1049900, fuel: "Petrol / S-CNG / Strong Hybrid", transmissions: "Manual / Automatic / eCVT", seating: 5,
    engine: "1.5L K15C petrol / CNG / Strong Hybrid", power: "Up to 103.06 PS petrol; strong hybrid system dependent", torque: "Up to 139 Nm petrol", dimensions: "4360 × 1795 × 1655 mm", wheelbase: "2600 mm", tank: "45 L petrol; CNG 55 L water equivalent",
    variants: ["Multiple petrol, CNG and strong-hybrid variants; transmission dependent"],
    colours: ["Eternal Blue", "Sizzling Red", "Mystic Green", "Bluish Black", "Splendid Silver", "Magma Grey", "Pearl Arctic White", "Eternal Blue with Bluish Black Roof", "Sizzling Red with Bluish Black Roof", "Splendid Silver with Bluish Black Roof"],
    features: ["Strong Hybrid option", "S-CNG option", "Advanced connected technology", "Suzuki Connect", "Multiple transmission choices", "360-degree camera on equipped variants", "Premium infotainment", "Advanced safety suite", "Spacious 5-seat SUV cabin", "Dual-tone exterior options"],
    official: "https://www.marutisuzuki.com/arena/victoris"
  },
  "Tour": {
    startingPrice: null, fuel: "Petrol / CNG", transmissions: "Manual / AGS", seating: "Variant dependent",
    variants: ["Tour range — model-specific variants"],
    features: ["Commercial-focused Maruti Arena range", "Fleet-oriented ownership support", "Petrol and CNG options on applicable Tour models"],
    official: "https://www.marutisuzuki.com/arena"
  }
};

export const MARUTI_ARENA_MODELS = Object.keys(arenaMeta);

export function enrichMarutiCar(car) {
  const meta = arenaMeta[car.name];
  if (!meta) return car;
  const mergedSpecs = { ...(car.specs || {}) };
  Object.entries({
    "Starting Price": meta.startingPrice == null ? "—" : `₹${meta.startingPrice.toLocaleString("en-IN")}`,
    "Fuel Type": meta.fuel,
    Transmission: meta.transmissions,
    Seating: meta.seating,
    Engine: meta.engine,
    Power: meta.power,
    Torque: meta.torque,
    Mileage: meta.mileage,
    Dimensions: meta.dimensions,
    Wheelbase: meta.wheelbase,
    "Boot Space": meta.boot,
    "Fuel Tank": meta.tank,
  }).forEach(([k,v]) => { if (v) mergedSpecs[k] = v; });

  const colors = (car.colors?.length ? car.colors : meta.colours?.map((name, i) => ({
    name, hex: ["#b7262d","#a8adb2","#555a61","#f3f3f0","#1b2430","#2e5e89","#8b6a4a"][i % 7]
  })) || []);

  return {
    ...car,
    price: meta.startingPrice ?? car.price,
    specs: mergedSpecs,
    features: [...new Set([...(car.features || []), ...(meta.features || [])])],
    colors,
    variants: meta.variants.map((name) => {
      /* Inherit details from the closest researched variant (exact match, else the longest name the
         arena variant starts with, so "ZXi+ MT" maps to "ZXi+" not "ZXi"). Keep the arena variant's
         own full name so every variant stays distinct and independently selectable/bookable. */
      const exact = (car.variants || []).find(v => v.name === name);
      const prefix = (car.variants || [])
        .filter(v => name.startsWith(v.name))
        .sort((a, b) => b.name.length - a.name.length)[0];
      const existing = exact || prefix;
      return existing ? { ...existing, name } : { name, fuel: meta.fuel, transmission: meta.transmissions, highlights: [] };
    }),
    arena: {
      source: MARUTI_ARENA_SOURCE,
      official: meta.official,
      startingPrice: meta.startingPrice,
      fuel: meta.fuel,
      transmissions: meta.transmissions,
      services: marutiArenaServices,
    },
  };
}
