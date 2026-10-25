import { enrichMarutiCar } from "./marutiArena.js";

/* VELORA — Maruti Suzuki catalogue
   Source: researched data supplied by the project owner.
   Only information that was supplied is included. Fields not yet
   researched (price, colours, accessories, engine details for some
   models) are intentionally left empty rather than invented.
   Models still awaiting data are listed in `marutiUpcomingModels`. */

export const marutiUpcomingModels = [
  "Grand Vitara", "Jimny", "Fronx", "Invicto", "XL6", "e VITARA", "Ciaz",
];

const IMG = (model) =>
  `https://carapi.trustcar.info/getImage?make=Maruti%20Suzuki&model=${encodeURIComponent(model)}`;

const flatten = (variants) => [...new Set(variants.flatMap((v) => v.highlights))];

/* ---------------- ALTO K10 ---------------- */
const altoVariants = [
  { name: "Std (O)", position: "Base", fuel: "Petrol", transmission: "Manual",
    highlights: ["6 airbags", "ESP", "ABS + EBD", "Rear parking sensors", "Digital speedometer", "13\" steel wheels", "Cabin air filter"] },
  { name: "LXi (O)", position: "Basic", fuel: "Petrol", transmission: "Manual",
    highlights: ["AC + heater", "Power steering", "Body-coloured bumpers"] },
  { name: "VXi (O)", position: "Mid / Value", fuel: "Petrol / CNG", transmission: "Manual / AGS",
    highlights: ["Front power windows", "Central locking", "Bluetooth audio", "2 speakers", "Adjustable ORVMs", "Wheel covers", "Roof antenna"] },
  { name: "VXi Plus (O)", position: "Top", fuel: "Petrol", transmission: "Manual / AGS",
    highlights: ["7\" touchscreen", "Apple CarPlay", "Android Auto", "Steering controls", "4 speakers", "Parcel tray", "Keyless entry"] },
];

const alto = {
  id: "maruti-suzuki-alto-k10",
  brand: "Maruti Suzuki",
  name: "Alto K10",
  type: "Hatchback",
  price: 369900,
  testDrivePrice: 999,
  image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:e116082e-6253-4c71-9a42-f4a32031a768/as/Navigation_1920x1080_Alto.png?id=1&preferwebp=true&width=1200",
  overview:
    "The Maruti Suzuki Alto K10 is a hatchback offered in four variants — Std (O), LXi (O), VXi (O) and VXi Plus (O). Every variant includes 6 airbags, ESP, ABS with EBD and rear parking sensors. Petrol and CNG options pair with manual or AGS transmissions across the range. Compare variants, then book it or reserve a test drive from this page.",
  specs: { "Fuel Type": "Petrol / CNG", Transmission: "Manual / AGS", Variants: "4" },
  features: flatten(altoVariants),
  colors: [
    { name: "Metallic Sizzling Red", hex: "#d72626", image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:e116082e-6253-4c71-9a42-f4a32031a768/as/Navigation_1920x1080_Alto.png?id=1&preferwebp=true&width=1200" },
    { name: "Metallic Silky Silver", hex: "#b7bcc2", image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:e116082e-6253-4c71-9a42-f4a32031a768/as/Navigation_1920x1080_Alto.png?id=1&preferwebp=true&width=1200", visualFilter: "grayscale(.72) brightness(1.08) contrast(.92)" },
    { name: "Metallic Granite Grey", hex: "#60656b", image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:e116082e-6253-4c71-9a42-f4a32031a768/as/Navigation_1920x1080_Alto.png?id=1&preferwebp=true&width=1200", visualFilter: "grayscale(.65) brightness(.72) contrast(1.08)" },
    { name: "Premium Earth Gold", hex: "#9a7650", image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:e116082e-6253-4c71-9a42-f4a32031a768/as/Navigation_1920x1080_Alto.png?id=1&preferwebp=true&width=1200", visualFilter: "sepia(.55) saturate(.8) brightness(.88)" },
    { name: "Metallic Speedy Blue", hex: "#2f6ea8", image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:e116082e-6253-4c71-9a42-f4a32031a768/as/Navigation_1920x1080_Alto.png?id=1&preferwebp=true&width=1200", visualFilter: "hue-rotate(145deg) saturate(.9) brightness(.9)" },
    { name: "Solid White", hex: "#f5f5f2", image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:e116082e-6253-4c71-9a42-f4a32031a768/as/Navigation_1920x1080_Alto.png?id=1&preferwebp=true&width=1200", visualFilter: "grayscale(.35) brightness(1.35) contrast(.82)" },
    { name: "Bluish Black", hex: "#11161c", image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:e116082e-6253-4c71-9a42-f4a32031a768/as/Navigation_1920x1080_Alto.png?id=1&preferwebp=true&width=1200", visualFilter: "grayscale(.9) brightness(.48) contrast(1.25)" },
  ],
  mods: [],
  variants: altoVariants,
  progression: [
    { from: "Std (O)", to: "LXi (O)", adds: ["Air conditioning", "Heater", "Power steering", "Body-coloured bumpers"] },
    { from: "LXi (O)", to: "VXi (O)", adds: ["Front power windows", "Central locking", "Bluetooth audio", "2 speakers", "Adjustable ORVMs", "Wheel covers", "Roof antenna", "AGS availability", "CNG availability"] },
    { from: "VXi (O)", to: "VXi Plus (O)", adds: ["7\" touchscreen", "Wired Apple CarPlay", "Wired Android Auto", "Steering-mounted controls", "4-speaker system", "Parcel tray", "Remote / keyless central locking"] },
  ],
  matrix: {
    columns: ["Std (O)", "LXi (O)", "VXi (O)", "VXi Plus (O)"],
    rows: [
      ["6 Airbags", [1, 1, 1, 1]],
      ["ESP", [1, 1, 1, 1]],
      ["ABS + EBD", [1, 1, 1, 1]],
      ["Rear Parking Sensors", [1, 1, 1, 1]],
      ["AC", [0, 1, 1, 1]],
      ["Power Steering", [0, 1, 1, 1]],
      ["Power Windows", [0, 0, 1, 1]],
      ["Central Locking", [0, 0, 1, 1]],
      ["Bluetooth Audio", [0, 0, 1, 1]],
      ["Touchscreen", [0, 0, 0, 1]],
      ["Apple CarPlay", [0, 0, 0, 1]],
      ["Android Auto", [0, 0, 0, 1]],
      ["Steering Controls", [0, 0, 0, 1]],
      ["CNG", [0, 0, 1, 0]],
      ["AGS", [0, 0, 1, 1]],
    ],
  },
};

/* ---------------- WAGON R ---------------- */
const wagonVariants = [
  { name: "LXi", engine: "1.0L", fuel: "Petrol / CNG", transmission: "Manual",
    highlights: ["Front power windows", "Manual AC", "Idle start/stop", "Part-digital cluster", "13\" steel wheels"] },
  { name: "VXi", engine: "1.0L", fuel: "Petrol / CNG", transmission: "Manual / AGS",
    highlights: ["4 power windows", "Keyless entry", "Bluetooth audio", "2 speakers", "60:40 rear seats", "Body-coloured handles/mirrors"] },
  { name: "ZXi", engine: "1.2L", fuel: "Petrol", transmission: "Manual / AGS",
    highlights: ["Steering audio/phone controls", "Tachometer", "Premium seat fabric"] },
  { name: "ZXi+", engine: "1.2L", fuel: "Petrol / Bioflex", transmission: "Manual / AGS",
    highlights: ["7\" touchscreen", "Apple CarPlay", "Android Auto", "4 speakers", "14\" alloys", "Fog lamps", "Rear wiper/washer", "Folding ORVMs"] },
];

const wagonR = {
  id: "maruti-suzuki-wagon-r",
  brand: "Maruti Suzuki",
  name: "Wagon R",
  type: "Hatchback",
  price: 498900,
  testDrivePrice: 999,
  image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:7715324c-cf11-462f-8a48-00b9ca1928ff/as/Navigation_1920x1080_Wagonr.png?id=1&preferwebp=true&width=1200",
  overview:
    "The Maruti Suzuki Wagon R is a hatchback offered in LXi, VXi, ZXi and ZXi+ variants. The LXi and VXi use a 1.0L engine (petrol or CNG), while the ZXi and ZXi+ move to a 1.2L engine. The top ZXi+ adds a 7\" touchscreen with Apple CarPlay and Android Auto, 14\" alloys, fog lamps and electrically folding ORVMs.",
  specs: { Engine: "1.0L / 1.2L", "Fuel Type": "Petrol / CNG / Bioflex", Transmission: "Manual / AGS", Variants: "4" },
  features: flatten(wagonVariants),
  colors: [],
  mods: [],
  variants: wagonVariants,
  progression: [
    { from: "LXi", to: "VXi", adds: ["Rear power windows", "Remote keyless entry", "Bluetooth media system", "2 speakers", "60:40 split rear seats", "Day/night IRVM", "Body-coloured handles and mirrors"] },
    { from: "VXi", to: "ZXi", adds: ["Larger 1.2L engine", "Steering-mounted audio controls", "Phone controls", "Tachometer", "Premium seat fabric"] },
    { from: "ZXi", to: "ZXi+", adds: ["7\" SmartPlay Studio", "Apple CarPlay", "Android Auto", "4-speaker system", "14\" alloy wheels", "Fog lamps", "Rear wiper/washer", "Electrically folding ORVMs"] },
  ],
};

/* ---------------- SWIFT ---------------- */
const swiftVariants = [
  { name: "LXi", position: "Base", fuel: "Petrol", transmission: "Manual",
    highlights: ["Halogen projector lamps", "Manual AC", "4 power windows", "Keyless entry", "Tilt steering"] },
  { name: "VXi", position: "Mid", fuel: "Petrol / CNG", transmission: "Manual / AMT",
    highlights: ["7\" touchscreen", "Android Auto", "Apple CarPlay", "4 speakers", "Steering controls", "Height-adjustable driver's seat"] },
  { name: "VXi (O)", position: "Mid+", fuel: "Petrol / CNG", transmission: "Manual / AMT",
    highlights: ["Push-button start", "Smart key", "Folding ORVMs", "Suzuki Connect"] },
  { name: "ZXi", position: "Premium Mid", fuel: "Petrol / CNG", transmission: "Manual / AMT",
    highlights: ["LED projector headlamps", "L-shaped DRLs", "15\" alloys", "Automatic climate control", "Rear AC vents", "Wireless charger", "Rear wiper/washer"] },
  { name: "ZXi+", position: "Top", fuel: "Petrol", transmission: "Manual / AMT",
    highlights: ["9\" touchscreen", "Arkamys sound", "Reverse camera", "Cruise control", "Leather-wrapped steering", "LED fog lamps", "Dual-tone alloys"] },
];

const swift = {
  id: "maruti-suzuki-swift",
  brand: "Maruti Suzuki",
  name: "Swift",
  type: "Hatchback",
  price: 583900,
  testDrivePrice: 999,
  image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:f81c4477-05ea-4054-9bdd-e55512352e83/as/Navigation_1920x1080_Swift.png?id=1&preferwebp=true&width=1200",
  overview:
    "The Maruti Suzuki Swift is a hatchback offered in five variants — LXi, VXi, VXi (O), ZXi and ZXi+ — with manual and AMT transmissions and CNG available on the VXi, VXi (O) and ZXi. The range steps up from halogen projector lamps and a manual AC to LED projector headlamps, automatic climate control, and on the ZXi+ a 9\" touchscreen with Arkamys sound, reverse camera and cruise control.",
  specs: { "Fuel Type": "Petrol / CNG", Transmission: "Manual / AMT", Variants: "5" },
  features: flatten(swiftVariants),
  colors: [],
  mods: [],
  variants: swiftVariants,
  progression: [
    { from: "LXi", to: "VXi", adds: ["Touchscreen", "Apple CarPlay", "Android Auto", "4 speakers", "Steering controls", "Height-adjustable driver's seat", "CNG availability"] },
    { from: "VXi", to: "VXi (O)", adds: ["Push-button start", "Smart key", "Electrically folding ORVMs", "Suzuki Connect"] },
    { from: "VXi (O)", to: "ZXi", adds: ["LED projector headlamps", "L-shaped DRLs", "Alloy wheels", "Automatic climate control", "Rear AC vents", "Wireless charger", "Rear wiper/washer", "60:40 split rear seats"] },
    { from: "ZXi", to: "ZXi+", adds: ["9\" touchscreen", "Arkamys audio", "Reverse parking camera", "Cruise control", "Leather-wrapped steering", "LED fog lamps", "Dual-tone alloys"] },
  ],
};


/* ---------------- S-PRESSO ---------------- */
const sPresso = {
  id: "maruti-suzuki-s-presso",
  brand: "Maruti Suzuki",
  name: "S-Presso",
  type: "Hatchback",
  price: 349900,
  testDrivePrice: 999,
  image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:2e46733c-4548-441e-936e-e2df52418b68/as/Navigation_1920x1080_Spresso.png?id=1&preferwebp=true&width=1200",
  overview: "The S-Presso is a compact, SUV-inspired hatchback focused on city manoeuvrability, cabin practicality and fuel efficiency. It is offered with a 998 cc K10C petrol engine, manual or AGS transmission and selected S-CNG variants.",
  specs: {
    "Engine": "998 cc K10C petrol / K10C CNG",
    "Power": "50.4 kW @ 5600 rpm (petrol)",
    "Torque": "91.1 Nm @ 3400 rpm (petrol)",
    "Mileage": "Up to 24.76 km/l petrol; ~32.73 km/kg CNG",
    "Seating": "5 (petrol) / 4 (CNG)",
    "Fuel Type": "Petrol / S-CNG",
    "Transmission": "5MT / AGS",
    "Dimensions": "3565 × 1520 × 1553–1567 mm",
    "Wheelbase": "2380 mm",
    "Boot Space": "239 L",
    "Fuel Tank": "27 L petrol / 55 L water-equivalent CNG"
  },
  features: [
    "SUV-inspired upright design", "C-shaped rear tail lamps", "14-inch tyres",
    "Electrically adjustable ORVMs", "SmartPlay Studio infotainment",
    "Steering-mounted audio and voice controls", "Idle Start-Stop",
    "5-speed manual / AGS", "S-CNG option", "Rear parking sensors",
    "ABS with EBD", "Electronic Stability Program on equipped variants",
    "Dual front airbags / 6-airbag availability by variant"
  ],
  colors: [
    { name: "Solid Sizzle Orange", hex: "#d95b20" },
    { name: "Solid Fire Red", hex: "#b72d28" },
    { name: "Bluish Black", hex: "#11161c" },
    { name: "Pearl Starry Blue", hex: "#304f7c" },
    { name: "Metallic Granite Grey", hex: "#6d7074" },
    { name: "Solid White", hex: "#f3f3f3" },
    { name: "Metallic Silky Silver", hex: "#b7b9ba" }
  ],
  mods: [],
  variants: [
    { name: "Std (O)", position: "Base", fuel: "Petrol", transmission: "Manual", highlights: ["Digital instrument display", "Dual airbags", "ABS with EBD", "Rear parking sensors"] },
    { name: "LXi (O)", position: "Basic", fuel: "Petrol / CNG", transmission: "Manual", highlights: ["Air conditioning", "Power steering", "Front power windows"] },
    { name: "VXi (O)", position: "Mid", fuel: "Petrol", transmission: "Manual / AGS", highlights: ["SmartPlay Studio", "Steering controls", "Voice controls", "AGS availability"] },
    { name: "VXi+ (O)", position: "Top", fuel: "Petrol", transmission: "Manual / AGS", highlights: ["Higher equipment level", "Infotainment and connectivity features", "AGS availability"] }
  ],
  progression: [
    { from: "Std (O)", to: "LXi (O)", adds: ["Air conditioning", "Power steering", "Front power windows"] },
    { from: "LXi (O)", to: "VXi (O)", adds: ["SmartPlay Studio", "Steering-mounted controls", "Voice controls", "AGS availability"] },
    { from: "VXi (O)", to: "VXi+ (O)", adds: ["Top-variant equipment", "Additional convenience and connectivity features"] }
  ]
};

/* ---------------- CELERIO ---------------- */
const celerio = {
  id: "maruti-suzuki-celerio",
  brand: "Maruti Suzuki",
  name: "Celerio",
  type: "Hatchback",
  price: 469900,
  testDrivePrice: 999,
  image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:856063e7-29a2-4e21-8429-110bb0395cee/as/2025.04.15_13.08.19_Celerio_360_Red_PathTracer_0006.png?id=1&preferwebp=true&width=1200",
  overview: "The Celerio is a 5-seat hatchback with a 998 cc K10C engine, 5-speed manual or AGS transmission and petrol/S-CNG powertrains. It combines a compact footprint with a 292-litre boot.",
  specs: {
    "Engine": "998 cc K10C, 3-cylinder",
    "Power": "50.4 kW (68.5 PS) @ 5600 rpm",
    "Torque": "91.1 Nm @ 3400 rpm",
    "Mileage": "Up to 26.00 km/l (AGS petrol)",
    "Seating": "5",
    "Fuel Type": "Petrol / S-CNG",
    "Transmission": "5MT / AGS",
    "Dimensions": "3695 × 1655 × 1555 mm",
    "Wheelbase": "2435 mm",
    "Boot Space": "292 L",
    "Fuel Tank": "32 L"
  },
  features: [
    "K10C 998 cc 3-cylinder engine", "Idle Start-Stop", "5-speed manual",
    "Auto Gear Shift (AGS)", "S-CNG option", "Hill Hold Assist",
    "ABS with EBD", "Rear parking sensors", "SmartPlay Dock / infotainment",
    "Apple CarPlay and Android Auto on equipped variants", "5-seat cabin",
    "292 L boot space", "MacPherson strut front suspension", "Torsion beam rear suspension"
  ],
  colors: [
    { name: "Caffeine Brown", hex: "#4b342a" },
    { name: "Speedy Blue", hex: "#3c6590" },
    { name: "Fire Red", hex: "#b72c2c" },
    { name: "Silky Silver", hex: "#b7b9ba" },
    { name: "Pearl Arctic White", hex: "#f3f3f3" },
    { name: "Magma Grey", hex: "#5c6065" }
  ],
  mods: []
};

/* ---------------- BALENO ---------------- */
const baleno = {
  id: "maruti-suzuki-baleno",
  brand: "Maruti Suzuki",
  name: "Baleno",
  type: "Hatchback",
  price: 599900,
  testDrivePrice: 999,
  image: "https://www.nexaexperience.com/adobe/assets/urn:aaid:aem:cf19fb2c-73b8-4a25-a8cb-70c1f97e6c63/as/Suzuki_Baleno_3-4th-(Co-Dr)-Low-Angle_left_CMYK.png?height=900&width=1600",
  overview: "The Baleno is NEXA's premium hatchback, available with the Z12E petrol engine and S-CNG. Current technology includes SmartPlay Pro+, wireless smartphone integration, head-up display and 360-view camera on equipped variants.",
  specs: {
    "Engine": "Z12E petrol / S-CNG",
    "Power": "60 kW @ 5700 rpm (petrol)",
    "Torque": "113 Nm @ 4400 rpm (petrol)",
    "Mileage": "Variant dependent",
    "Seating": "5",
    "Fuel Type": "Petrol / S-CNG",
    "Transmission": "5MT / AMT",
    "Dimensions": "3990 × 1745 × 1500 mm",
    "Wheelbase": "2520 mm",
    "Boot Space": "318 L",
    "Safety": "6 airbags, ESP with Hill Hold Assist"
  },
  features: [
    "Z12E Series petrol engine", "S-CNG option", "5-speed AMT",
    "SmartPlay Pro+ infotainment", "Wireless Apple CarPlay", "Wireless Android Auto",
    "ARKAMYS Surround Sense", "Head-Up Display", "360 View Camera",
    "Wireless charging with active cooling", "Suzuki Connect", "6 airbags",
    "ESP with Hill Hold Assist", "LED lighting", "NEXWave grille",
    "LED fog lamps", "NEXTRÈ LED rear lamps"
  ],
  colors: [
    { name: "NEXA Blue", hex: "#1f4f82" },
    { name: "Opulent Red", hex: "#9f262d" },
    { name: "Splendid Silver", hex: "#a9abad" },
    { name: "Grandeur Grey", hex: "#55585d" },
    { name: "Pearl Arctic White", hex: "#f3f3f3" },
    { name: "Bluish Black", hex: "#11161c" }
  ],
  mods: []
};

/* ---------------- IGNIS ---------------- */
const ignis = {
  id: "maruti-suzuki-ignis",
  brand: "Maruti Suzuki",
  name: "Ignis",
  type: "Hatchback",
  price: null,
  testDrivePrice: 999,
  image: "https://carapi.trustcar.info/getImage?make=Maruti%20Suzuki&model=Ignis",
  overview: "The Ignis is a compact NEXA hatchback with a 1.2-litre petrol engine, 5-speed manual or AMT transmission, 5-seat capacity and a compact 3700 mm footprint.",
  specs: {
    "Engine": "1197 cc VVT petrol, 4-cylinder",
    "Power": "61 kW @ 6000 rpm",
    "Torque": "113 Nm @ 4200 rpm",
    "Mileage": "20.89 km/l",
    "Seating": "5",
    "Fuel Type": "Petrol",
    "Transmission": "5MT / AMT",
    "Dimensions": "3700 × 1690 × 1595 mm",
    "Wheelbase": "2435 mm",
    "Boot Space": "260 L",
    "Fuel Tank": "32 L"
  },
  features: [
    "1.2L VVT petrol engine", "5-speed manual / AMT", "5-seat cabin",
    "260 L boot", "NEXA infotainment", "Turn indicators on ORVMs",
    "Roof rails", "Roof spoiler", "Dual front airbags", "ABS with EBD",
    "ISOFIX child-seat anchorages", "Suzuki-TECT body", "McPherson strut front suspension",
    "Torsion beam rear suspension", "20.89 km/l claimed efficiency"
  ],
  colors: [
    { name: "NEXA Blue", hex: "#305d88" },
    { name: "Lucent Orange", hex: "#d66a2b" },
    { name: "Glistening Grey", hex: "#686b70" },
    { name: "Silky Silver", hex: "#b8b9ba" },
    { name: "Pearl Arctic White", hex: "#f2f2f2" }
  ],
  mods: []
};

const arenaMissingCars = [
  { id: "maruti-suzuki-dzire", brand: "Maruti Suzuki", name: "Dzire", type: "Sedan", price: 630600, testDrivePrice: 999, image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:dzire/as/Navigation_1920x1080_Dzire.png?width=1200", overview: "The All-New Dzire is Maruti Suzuki ARENA's compact sedan with petrol and S-CNG powertrains, manual and AGS choices, strong safety equipment and connected technology.", specs: {}, features: [], colors: [], mods: [], variants: [] },
  { id: "maruti-suzuki-brezza", brand: "Maruti Suzuki", name: "Brezza", type: "SUV", price: 739900, testDrivePrice: 999, image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:brezza/as/Navigation_1920x1080_Brezza.png?width=1200", overview: "Brezza is a compact SUV with petrol, Smart Hybrid and S-CNG choices, manual or automatic transmissions and connected features.", specs: {}, features: [], colors: [], mods: [], variants: [] },
  { id: "maruti-suzuki-ertiga", brand: "Maruti Suzuki", name: "Ertiga", type: "MPV", price: 890000, testDrivePrice: 999, image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:ertiga/as/Navigation_1920x1080_Ertiga.png?width=1200", overview: "Ertiga is a 7-seat MPV with Smart Hybrid and S-CNG powertrains, flexible three-row seating and connected technology.", specs: {}, features: [], colors: [], mods: [], variants: [] },
  { id: "maruti-suzuki-eeco", brand: "Maruti Suzuki", name: "Eeco", type: "Van", price: 528400, testDrivePrice: 999, image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:eeco/as/Navigation_1920x1080_Eeco.png?width=1200", overview: "Eeco is a practical people/cargo mover offered in 5- and 6-seat configurations with petrol and factory-fitted CNG options.", specs: {}, features: [], colors: [], mods: [], variants: [] },
  { id: "maruti-suzuki-victoris", brand: "Maruti Suzuki", name: "Victoris", type: "SUV", price: 1049900, testDrivePrice: 999, image: "https://www.marutisuzuki.com/adobe/assets/urn:aaid:aem:victoris/as/Navigation_1920x1080_Victoris.png?width=1200", overview: "Victoris is a 5-seat Arena SUV available with petrol, S-CNG and strong-hybrid powertrains, multiple transmissions and connected features.", specs: {}, features: [], colors: [], mods: [], variants: [] },
  { id: "maruti-suzuki-tour", brand: "Maruti Suzuki", name: "Tour", type: "Sedan", price: null, testDrivePrice: 999, image: "https://carapi.trustcar.info/getImage?make=Maruti%20Suzuki&model=Tour", overview: "Maruti Suzuki's Tour range is designed for commercial and fleet-oriented use, with model-specific petrol and CNG configurations.", specs: {}, features: [], colors: [], mods: [], variants: [] },
];

export const marutiSuzukiCars = [alto, wagonR, swift, sPresso, celerio, baleno, ignis, ...arenaMissingCars].map(enrichMarutiCar);
