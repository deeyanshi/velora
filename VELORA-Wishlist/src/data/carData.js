/* VELORA — React data module
   Source: original cars-data.js. 16 brands × 20 models = 320 cars.
   Car images are resolved automatically by make + model through carapi.trustcar.info.
   This removes the need to manually maintain 320 image files.
*/
import { marutiSuzukiCars, marutiUpcomingModels } from "./marutiSuzuki";

export const brands = [
  { name: "Maruti Suzuki", upcoming: marutiUpcomingModels, category: "Indian Automobile", logo: "https://cdn.simpleicons.org/suzuki", tagline: "Practical, efficient and designed for everyday mobility." },
  { name: "Tata Motors", category: "Indian Automobile", logo: "https://cdn.simpleicons.org/tata", tagline: "Indian engineering with a focus on safety, technology and versatility." },
  { name: "Hyundai", category: "Korean Automobile", logo: "https://cdn.simpleicons.org/hyundai", tagline: "Technology, comfort and modern design for everyday driving." },
  { name: "Renault", category: "French Automobile", logo: "https://cdn.simpleicons.org/renault", tagline: "Distinctive design, practicality and accessible innovation." },
  { name: "Nissan", category: "Japanese Automobile", logo: "https://cdn.simpleicons.org/nissan", tagline: "Japanese engineering with innovation and distinctive design." },
  { name: "Toyota", category: "Japanese Automobile", logo: "https://cdn.simpleicons.org/toyota", tagline: "Reliability, practicality and long-term engineering." },
  { name: "Honda", category: "Japanese Automobile", logo: "https://cdn.simpleicons.org/honda", tagline: "Engineering, efficiency and refined everyday performance." },
  { name: "Jeep", category: "American SUV", logo: "https://cdn.simpleicons.org/jeep", tagline: "Adventure-focused vehicles built around SUV capability." },
  { name: "Kia", category: "Korean Automobile", logo: "https://cdn.simpleicons.org/kia", tagline: "Bold design, technology and feature-rich vehicles." },
  { name: "Mahindra", category: "Indian Automobile", logo: "https://cdn.simpleicons.org/mahindra", tagline: "Rugged vehicles built for varied Indian roads and lifestyles." },
  { name: "Skoda", category: "Czech Automobile", logo: "https://cdn.simpleicons.org/skoda", tagline: "European engineering, practicality and understated design." },
  { name: "Volkswagen", category: "German Automobile", logo: "https://cdn.simpleicons.org/volkswagen", tagline: "German engineering with practical and refined everyday vehicles." },
  { name: "Mercedes-Benz", category: "German Luxury", logo: "https://cdn.simpleicons.org/mercedes-benz", tagline: "Luxury, comfort, technology and sophisticated design." },
  { name: "BMW", category: "German Luxury", logo: "https://cdn.simpleicons.org/bmw", tagline: "Performance, driving dynamics and premium engineering." },
  { name: "Volvo", category: "Swedish Automobile", logo: "https://cdn.simpleicons.org/volvo", tagline: "Safety, Scandinavian design and modern electrification." },
  { name: "Jaguar", category: "British Luxury", logo: "https://cdn.simpleicons.org/jaguar", tagline: "British design, luxury and performance." },
  { name: "Lexus", category: "Japanese Luxury", logo: "https://cdn.simpleicons.org/lexus", tagline: "Japanese luxury, refinement and craftsmanship." },
  { name: "Rolls-Royce", category: "British Ultra-Luxury", logo: "https://cdn.simpleicons.org/rollsroyce", tagline: "Handcrafted luxury, refinement and exclusivity." },
  { name: "Bentley", category: "British Luxury", logo: "https://cdn.simpleicons.org/bentley", tagline: "Handcrafted luxury combined with grand touring performance." },
  { name: "Porsche", category: "German Sports Car", logo: "https://cdn.simpleicons.org/porsche", tagline: "Performance engineering, precision and sports-car heritage." },
  { name: "Ferrari", category: "Italian Supercar", logo: "https://cdn.simpleicons.org/ferrari", tagline: "Italian performance, racing heritage and exclusivity." },
  { name: "Lamborghini", category: "Italian Supercar", logo: "https://cdn.simpleicons.org/lamborghini", tagline: "Dramatic design, high performance and Italian automotive character." },
  { name: "Aston Martin", category: "British Luxury Sports", logo: "https://cdn.simpleicons.org/astonmartin", tagline: "British craftsmanship, luxury and high-performance grand touring." },
  { name: "Audi", category: "German Automobile", logo: "https://cdn.simpleicons.org/audi", tagline: "Progressive design, technology and sophisticated performance." },
  { name: "Tesla", category: "Electric", logo: "https://cdn.simpleicons.org/tesla", tagline: "Electric vehicles centered around software and technology." },
  { name: "Ford", category: "American Automobile", logo: "https://cdn.simpleicons.org/ford", tagline: "Practical vehicles, performance and American automotive heritage." },
  { name: "Range Rover", category: "British Luxury SUV", logo: "https://cdn.simpleicons.org/landrover", tagline: "Luxury SUVs combining refinement with all-terrain capability." },
];

const baseCars = [
    {
        "id": "bmw-1-series",
        "brand": "BMW",
        "name": "1 Series",
        "type": "Sedan/Hatchback",
        "price": 7175000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=1%20Series",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-2-series",
        "brand": "BMW",
        "name": "2 Series",
        "type": "Sedan/Hatchback",
        "price": 7350000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=2%20Series",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-3-series",
        "brand": "BMW",
        "name": "3 Series",
        "type": "Sedan/Hatchback",
        "price": 7525000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=3%20Series",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-4-series",
        "brand": "BMW",
        "name": "4 Series",
        "type": "Sedan/Hatchback",
        "price": 7700000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=4%20Series",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-5-series",
        "brand": "BMW",
        "name": "5 Series",
        "type": "Sedan/Hatchback",
        "price": 7875000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=5%20Series",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-7-series",
        "brand": "BMW",
        "name": "7 Series",
        "type": "Sedan/Hatchback",
        "price": 8050000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=7%20Series",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-8-series",
        "brand": "BMW",
        "name": "8 Series",
        "type": "Sedan/Hatchback",
        "price": 8225000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=8%20Series",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-x1",
        "brand": "BMW",
        "name": "X1",
        "type": "SUV/Crossover",
        "price": 9800000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=X1",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-x2",
        "brand": "BMW",
        "name": "X2",
        "type": "SUV/Crossover",
        "price": 9975000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=X2",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-x3",
        "brand": "BMW",
        "name": "X3",
        "type": "SUV/Crossover",
        "price": 10150000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=X3",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-x4",
        "brand": "BMW",
        "name": "X4",
        "type": "SUV/Crossover",
        "price": 10325000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=X4",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-x5",
        "brand": "BMW",
        "name": "X5",
        "type": "SUV/Crossover",
        "price": 10500000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=X5",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-x6",
        "brand": "BMW",
        "name": "X6",
        "type": "SUV/Crossover",
        "price": 10675000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=X6",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-x7",
        "brand": "BMW",
        "name": "X7",
        "type": "SUV/Crossover",
        "price": 10850000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=X7",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-xm",
        "brand": "BMW",
        "name": "XM",
        "type": "Sedan/Hatchback",
        "price": 9625000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=XM",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-i4",
        "brand": "BMW",
        "name": "i4",
        "type": "Sedan/Hatchback",
        "price": 9800000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=i4",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-i5",
        "brand": "BMW",
        "name": "i5",
        "type": "Sedan/Hatchback",
        "price": 9975000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=i5",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-i7",
        "brand": "BMW",
        "name": "i7",
        "type": "Sedan/Hatchback",
        "price": 10150000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=i7",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-ix",
        "brand": "BMW",
        "name": "iX",
        "type": "Sedan/Hatchback",
        "price": 10325000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=iX",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "bmw-z4",
        "brand": "BMW",
        "name": "Z4",
        "type": "Coupe/Performance",
        "price": 20500000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=BMW&model=Z4",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-a-class",
        "brand": "Mercedes-Benz",
        "name": "A-Class",
        "type": "Sedan/Hatchback",
        "price": 7175000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=A-Class",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-c-class",
        "brand": "Mercedes-Benz",
        "name": "C-Class",
        "type": "Sedan/Hatchback",
        "price": 7350000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=C-Class",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-e-class",
        "brand": "Mercedes-Benz",
        "name": "E-Class",
        "type": "Sedan/Hatchback",
        "price": 7525000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=E-Class",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-s-class",
        "brand": "Mercedes-Benz",
        "name": "S-Class",
        "type": "Sedan/Hatchback",
        "price": 7700000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=S-Class",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-cla",
        "brand": "Mercedes-Benz",
        "name": "CLA",
        "type": "Sedan/Hatchback",
        "price": 7875000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=CLA",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-cle-coupe",
        "brand": "Mercedes-Benz",
        "name": "CLE Coupé",
        "type": "Coupe/Performance",
        "price": 18050000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=CLE%20Coup%C3%A9",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-gla",
        "brand": "Mercedes-Benz",
        "name": "GLA",
        "type": "SUV/Crossover",
        "price": 9625000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=GLA",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-glb",
        "brand": "Mercedes-Benz",
        "name": "GLB",
        "type": "SUV/Crossover",
        "price": 9800000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=GLB",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-glc",
        "brand": "Mercedes-Benz",
        "name": "GLC",
        "type": "SUV/Crossover",
        "price": 9975000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=GLC",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-glc-coupe",
        "brand": "Mercedes-Benz",
        "name": "GLC Coupé",
        "type": "SUV/Crossover",
        "price": 10150000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=GLC%20Coup%C3%A9",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-gle",
        "brand": "Mercedes-Benz",
        "name": "GLE",
        "type": "SUV/Crossover",
        "price": 10325000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=GLE",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-gle-coupe",
        "brand": "Mercedes-Benz",
        "name": "GLE Coupé",
        "type": "SUV/Crossover",
        "price": 10500000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=GLE%20Coup%C3%A9",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-gls",
        "brand": "Mercedes-Benz",
        "name": "GLS",
        "type": "SUV/Crossover",
        "price": 10675000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=GLS",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-g-class",
        "brand": "Mercedes-Benz",
        "name": "G-Class",
        "type": "SUV/Crossover",
        "price": 10850000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=G-Class",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-eqe-sedan",
        "brand": "Mercedes-Benz",
        "name": "EQE Sedan",
        "type": "Sedan/Hatchback",
        "price": 9625000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=EQE%20Sedan",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-eqe-suv",
        "brand": "Mercedes-Benz",
        "name": "EQE SUV",
        "type": "SUV/Crossover",
        "price": 11200000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=EQE%20SUV",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-eqs-sedan",
        "brand": "Mercedes-Benz",
        "name": "EQS Sedan",
        "type": "Sedan/Hatchback",
        "price": 9975000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=EQS%20Sedan",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-eqs-suv",
        "brand": "Mercedes-Benz",
        "name": "EQS SUV",
        "type": "SUV/Crossover",
        "price": 11550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=EQS%20SUV",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-amg-gt",
        "brand": "Mercedes-Benz",
        "name": "AMG GT",
        "type": "Sedan/Hatchback",
        "price": 10325000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=AMG%20GT",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mercedes-benz-sl-roadster",
        "brand": "Mercedes-Benz",
        "name": "SL Roadster",
        "type": "Coupe/Performance",
        "price": 20500000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mercedes-Benz&model=SL%20Roadster",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-a3",
        "brand": "Audi",
        "name": "A3",
        "type": "Sedan/Hatchback",
        "price": 7175000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=A3",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-a5",
        "brand": "Audi",
        "name": "A5",
        "type": "Sedan/Hatchback",
        "price": 7350000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=A5",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-a6",
        "brand": "Audi",
        "name": "A6",
        "type": "Sedan/Hatchback",
        "price": 7525000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=A6",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-a8",
        "brand": "Audi",
        "name": "A8",
        "type": "Sedan/Hatchback",
        "price": 7700000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=A8",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-q3",
        "brand": "Audi",
        "name": "Q3",
        "type": "SUV/Crossover",
        "price": 9275000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=Q3",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-q5",
        "brand": "Audi",
        "name": "Q5",
        "type": "SUV/Crossover",
        "price": 9450000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=Q5",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-q7",
        "brand": "Audi",
        "name": "Q7",
        "type": "SUV/Crossover",
        "price": 9625000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=Q7",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-q8",
        "brand": "Audi",
        "name": "Q8",
        "type": "SUV/Crossover",
        "price": 9800000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=Q8",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-q9",
        "brand": "Audi",
        "name": "Q9",
        "type": "SUV/Crossover",
        "price": 9975000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=Q9",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-a6-e-tron",
        "brand": "Audi",
        "name": "A6 e-tron",
        "type": "Sedan/Hatchback",
        "price": 8750000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=A6%20e-tron",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-q4-e-tron",
        "brand": "Audi",
        "name": "Q4 e-tron",
        "type": "Sedan/Hatchback",
        "price": 8925000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=Q4%20e-tron",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-q6-e-tron",
        "brand": "Audi",
        "name": "Q6 e-tron",
        "type": "Sedan/Hatchback",
        "price": 9100000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=Q6%20e-tron",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-e-tron-gt",
        "brand": "Audi",
        "name": "e-tron GT",
        "type": "Sedan/Hatchback",
        "price": 9275000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=e-tron%20GT",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-s3",
        "brand": "Audi",
        "name": "S3",
        "type": "Sedan/Hatchback",
        "price": 9450000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=S3",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-s5",
        "brand": "Audi",
        "name": "S5",
        "type": "Sedan/Hatchback",
        "price": 9625000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=S5",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-s6-e-tron",
        "brand": "Audi",
        "name": "S6 e-tron",
        "type": "Sedan/Hatchback",
        "price": 9800000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=S6%20e-tron",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-sq5",
        "brand": "Audi",
        "name": "SQ5",
        "type": "SUV/Crossover",
        "price": 11375000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=SQ5",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-sq7",
        "brand": "Audi",
        "name": "SQ7",
        "type": "SUV/Crossover",
        "price": 11550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=SQ7",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-sq8",
        "brand": "Audi",
        "name": "SQ8",
        "type": "SUV/Crossover",
        "price": 11725000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=SQ8",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "audi-rs-e-tron-gt",
        "brand": "Audi",
        "name": "RS e-tron GT",
        "type": "Sedan/Hatchback",
        "price": 10500000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Audi&model=RS%20e-tron%20GT",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-3",
        "brand": "Tesla",
        "name": "Model 3",
        "type": "Sedan/Hatchback",
        "price": 5775000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%203",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-3-long-range",
        "brand": "Tesla",
        "name": "Model 3 Long Range",
        "type": "Sedan/Hatchback",
        "price": 5950000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%203%20Long%20Range",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-3-performance",
        "brand": "Tesla",
        "name": "Model 3 Performance",
        "type": "Sedan/Hatchback",
        "price": 6125000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%203%20Performance",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-y",
        "brand": "Tesla",
        "name": "Model Y",
        "type": "Sedan/Hatchback",
        "price": 6300000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%20Y",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-y-long-range",
        "brand": "Tesla",
        "name": "Model Y Long Range",
        "type": "Sedan/Hatchback",
        "price": 6475000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%20Y%20Long%20Range",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-y-performance",
        "brand": "Tesla",
        "name": "Model Y Performance",
        "type": "Sedan/Hatchback",
        "price": 6650000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%20Y%20Performance",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-y-l",
        "brand": "Tesla",
        "name": "Model Y L",
        "type": "Sedan/Hatchback",
        "price": 6825000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%20Y%20L",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-s",
        "brand": "Tesla",
        "name": "Model S",
        "type": "Sedan/Hatchback",
        "price": 7000000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%20S",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-s-plaid",
        "brand": "Tesla",
        "name": "Model S Plaid",
        "type": "Sedan/Hatchback",
        "price": 7175000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%20S%20Plaid",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-x",
        "brand": "Tesla",
        "name": "Model X",
        "type": "Sedan/Hatchback",
        "price": 7350000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%20X",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-x-plaid",
        "brand": "Tesla",
        "name": "Model X Plaid",
        "type": "Sedan/Hatchback",
        "price": 7525000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%20X%20Plaid",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-cybertruck-awd",
        "brand": "Tesla",
        "name": "Cybertruck AWD",
        "type": "Sedan/Hatchback",
        "price": 7700000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Cybertruck%20AWD",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-cybertruck-cyberbeast",
        "brand": "Tesla",
        "name": "Cybertruck Cyberbeast",
        "type": "Sedan/Hatchback",
        "price": 7875000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Cybertruck%20Cyberbeast",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-cybercab",
        "brand": "Tesla",
        "name": "Cybercab",
        "type": "Sedan/Hatchback",
        "price": 8050000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Cybercab",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-roadster",
        "brand": "Tesla",
        "name": "Roadster",
        "type": "Coupe/Performance",
        "price": 16225000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Roadster",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "2–4",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-semi",
        "brand": "Tesla",
        "name": "Semi",
        "type": "Sedan/Hatchback",
        "price": 8400000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Semi",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-3-premium",
        "brand": "Tesla",
        "name": "Model 3 Premium",
        "type": "Sedan/Hatchback",
        "price": 8575000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%203%20Premium",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-y-premium",
        "brand": "Tesla",
        "name": "Model Y Premium",
        "type": "Sedan/Hatchback",
        "price": 8750000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%20Y%20Premium",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-s-long-range",
        "brand": "Tesla",
        "name": "Model S Long Range",
        "type": "Sedan/Hatchback",
        "price": 8925000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%20S%20Long%20Range",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "tesla-model-x-long-range",
        "brand": "Tesla",
        "name": "Model X Long Range",
        "type": "Sedan/Hatchback",
        "price": 9100000.0,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Tesla&model=Model%20X%20Long%20Range",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-corolla",
        "brand": "Toyota",
        "name": "Corolla",
        "type": "Sedan/Hatchback",
        "price": 3675000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Corolla",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-camry",
        "brand": "Toyota",
        "name": "Camry",
        "type": "Sedan/Hatchback",
        "price": 3850000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Camry",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-crown",
        "brand": "Toyota",
        "name": "Crown",
        "type": "Sedan/Hatchback",
        "price": 4025000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Crown",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-prius",
        "brand": "Toyota",
        "name": "Prius",
        "type": "Sedan/Hatchback",
        "price": 4200000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Prius",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-yaris",
        "brand": "Toyota",
        "name": "Yaris",
        "type": "Sedan/Hatchback",
        "price": 4375000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Yaris",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-yaris-cross",
        "brand": "Toyota",
        "name": "Yaris Cross",
        "type": "Sedan/Hatchback",
        "price": 4550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Yaris%20Cross",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-corolla-cross",
        "brand": "Toyota",
        "name": "Corolla Cross",
        "type": "Sedan/Hatchback",
        "price": 4725000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Corolla%20Cross",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-rav4",
        "brand": "Toyota",
        "name": "RAV4",
        "type": "Sedan/Hatchback",
        "price": 4900000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=RAV4",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-highlander",
        "brand": "Toyota",
        "name": "Highlander",
        "type": "Sedan/Hatchback",
        "price": 5075000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Highlander",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-land-cruiser",
        "brand": "Toyota",
        "name": "Land Cruiser",
        "type": "Sedan/Hatchback",
        "price": 5250000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Land%20Cruiser",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-land-cruiser-prado",
        "brand": "Toyota",
        "name": "Land Cruiser Prado",
        "type": "Sedan/Hatchback",
        "price": 5425000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Land%20Cruiser%20Prado",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-fortuner",
        "brand": "Toyota",
        "name": "Fortuner",
        "type": "SUV/Crossover",
        "price": 6300000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Fortuner",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-hilux",
        "brand": "Toyota",
        "name": "Hilux",
        "type": "SUV/Crossover",
        "price": 6475000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Hilux",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-innova-hycross",
        "brand": "Toyota",
        "name": "Innova HyCross",
        "type": "MPV/Van",
        "price": 4950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Innova%20HyCross",
        "specs": {
            "Engine": "Petrol engine + hybrid system",
            "Power": "Variant dependent",
            "Transmission": "Automatic / e-CVT",
            "Mileage": "Varies by market/trim",
            "Seating": "6–9",
            "Fuel Type": "Hybrid / Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-urban-cruiser",
        "brand": "Toyota",
        "name": "Urban Cruiser",
        "type": "Sedan/Hatchback",
        "price": 6125000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Urban%20Cruiser",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-urban-cruiser-hyryder",
        "brand": "Toyota",
        "name": "Urban Cruiser Hyryder",
        "type": "Sedan/Hatchback",
        "price": 6300000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=Urban%20Cruiser%20Hyryder",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-bz4x",
        "brand": "Toyota",
        "name": "bZ4X",
        "type": "Coupe/Performance",
        "price": 11475000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=bZ4X",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-gr86",
        "brand": "Toyota",
        "name": "GR86",
        "type": "Coupe/Performance",
        "price": 11650000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=GR86",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-gr-supra",
        "brand": "Toyota",
        "name": "GR Supra",
        "type": "Coupe/Performance",
        "price": 11825000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=GR%20Supra",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "toyota-gr-corolla",
        "brand": "Toyota",
        "name": "GR Corolla",
        "type": "Sedan/Hatchback",
        "price": 7000000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Toyota&model=GR%20Corolla",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-fiesta",
        "brand": "Ford",
        "name": "Fiesta",
        "type": "Sedan/Hatchback",
        "price": 3675000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Fiesta",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-focus",
        "brand": "Ford",
        "name": "Focus",
        "type": "Sedan/Hatchback",
        "price": 3850000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Focus",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-mustang",
        "brand": "Ford",
        "name": "Mustang",
        "type": "Coupe/Performance",
        "price": 9025000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Mustang",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-mustang-mach-e",
        "brand": "Ford",
        "name": "Mustang Mach-E",
        "type": "Coupe/Performance",
        "price": 9200000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Mustang%20Mach-E",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-explorer",
        "brand": "Ford",
        "name": "Explorer",
        "type": "Sedan/Hatchback",
        "price": 4375000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Explorer",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-escape",
        "brand": "Ford",
        "name": "Escape",
        "type": "Sedan/Hatchback",
        "price": 4550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Escape",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-kuga",
        "brand": "Ford",
        "name": "Kuga",
        "type": "Sedan/Hatchback",
        "price": 4725000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Kuga",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-edge",
        "brand": "Ford",
        "name": "Edge",
        "type": "Sedan/Hatchback",
        "price": 4900000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Edge",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-bronco",
        "brand": "Ford",
        "name": "Bronco",
        "type": "Sedan/Hatchback",
        "price": 5075000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Bronco",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-bronco-sport",
        "brand": "Ford",
        "name": "Bronco Sport",
        "type": "Sedan/Hatchback",
        "price": 5250000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Bronco%20Sport",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-everest",
        "brand": "Ford",
        "name": "Everest",
        "type": "Sedan/Hatchback",
        "price": 5425000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Everest",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-ranger",
        "brand": "Ford",
        "name": "Ranger",
        "type": "Sedan/Hatchback",
        "price": 5600000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Ranger",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-maverick",
        "brand": "Ford",
        "name": "Maverick",
        "type": "Sedan/Hatchback",
        "price": 5775000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Maverick",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-f-150",
        "brand": "Ford",
        "name": "F-150",
        "type": "Sedan/Hatchback",
        "price": 5950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=F-150",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-f-150-lightning",
        "brand": "Ford",
        "name": "F-150 Lightning",
        "type": "Sedan/Hatchback",
        "price": 6125000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=F-150%20Lightning",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-expedition",
        "brand": "Ford",
        "name": "Expedition",
        "type": "Sedan/Hatchback",
        "price": 6300000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Expedition",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-transit",
        "brand": "Ford",
        "name": "Transit",
        "type": "MPV/Van",
        "price": 5475000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Transit",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "6–9",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-tourneo-custom",
        "brand": "Ford",
        "name": "Tourneo Custom",
        "type": "MPV/Van",
        "price": 5650000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Tourneo%20Custom",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "6–9",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-explorer-ev",
        "brand": "Ford",
        "name": "Explorer EV",
        "type": "Sedan/Hatchback",
        "price": 6825000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Explorer%20EV",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ford-capri",
        "brand": "Ford",
        "name": "Capri",
        "type": "Sedan/Hatchback",
        "price": 7000000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ford&model=Capri",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-revuelto",
        "brand": "Lamborghini",
        "name": "Revuelto",
        "type": "Coupe/Performance",
        "price": 68175000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Revuelto",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-temerario",
        "brand": "Lamborghini",
        "name": "Temerario",
        "type": "Coupe/Performance",
        "price": 68350000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Temerario",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-urus",
        "brand": "Lamborghini",
        "name": "Urus",
        "type": "SUV/Crossover",
        "price": 34125000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Urus",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-urus-se",
        "brand": "Lamborghini",
        "name": "Urus SE",
        "type": "SUV/Crossover",
        "price": 34300000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Urus%20SE",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-urus-se-performante",
        "brand": "Lamborghini",
        "name": "Urus SE Performante",
        "type": "SUV/Crossover",
        "price": 34475000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Urus%20SE%20Performante",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-urus-performante",
        "brand": "Lamborghini",
        "name": "Urus Performante",
        "type": "SUV/Crossover",
        "price": 34650000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Urus%20Performante",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-hurac-n-evo",
        "brand": "Lamborghini",
        "name": "Huracán EVO",
        "type": "Coupe/Performance",
        "price": 69225000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Hurac%C3%A1n%20EVO",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "2–4",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-hurac-n-tecnica",
        "brand": "Lamborghini",
        "name": "Huracán Tecnica",
        "type": "Coupe/Performance",
        "price": 69400000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Hurac%C3%A1n%20Tecnica",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-hurac-n-sto",
        "brand": "Lamborghini",
        "name": "Huracán STO",
        "type": "Coupe/Performance",
        "price": 69575000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Hurac%C3%A1n%20STO",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-hurac-n-sterrato",
        "brand": "Lamborghini",
        "name": "Huracán Sterrato",
        "type": "Coupe/Performance",
        "price": 69750000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Hurac%C3%A1n%20Sterrato",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-hurac-n-spyder",
        "brand": "Lamborghini",
        "name": "Huracán Spyder",
        "type": "Coupe/Performance",
        "price": 69925000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Hurac%C3%A1n%20Spyder",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-aventador-svj",
        "brand": "Lamborghini",
        "name": "Aventador SVJ",
        "type": "Coupe/Performance",
        "price": 70100000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Aventador%20SVJ",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-aventador-s",
        "brand": "Lamborghini",
        "name": "Aventador S",
        "type": "Coupe/Performance",
        "price": 70275000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Aventador%20S",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-aventador-roadster",
        "brand": "Lamborghini",
        "name": "Aventador Roadster",
        "type": "Coupe/Performance",
        "price": 70450000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Aventador%20Roadster",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-aventador-svj-roadster",
        "brand": "Lamborghini",
        "name": "Aventador SVJ Roadster",
        "type": "Coupe/Performance",
        "price": 70625000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Aventador%20SVJ%20Roadster",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-revuelto-ad-personam",
        "brand": "Lamborghini",
        "name": "Revuelto Ad Personam",
        "type": "Coupe/Performance",
        "price": 70800000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Revuelto%20Ad%20Personam",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-revuelto-opera-unica",
        "brand": "Lamborghini",
        "name": "Revuelto Opera Unica",
        "type": "Coupe/Performance",
        "price": 70975000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Revuelto%20Opera%20Unica",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-countach-lpi-800-4",
        "brand": "Lamborghini",
        "name": "Countach LPI 800-4",
        "type": "Sedan/Hatchback",
        "price": 31150000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Countach%20LPI%20800-4",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-si-n-fkp-37",
        "brand": "Lamborghini",
        "name": "Sián FKP 37",
        "type": "Sedan/Hatchback",
        "price": 31325000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Si%C3%A1n%20FKP%2037",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "lamborghini-si-n-roadster",
        "brand": "Lamborghini",
        "name": "Sián Roadster",
        "type": "Coupe/Performance",
        "price": 71500000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Lamborghini&model=Si%C3%A1n%20Roadster",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-911-carrera",
        "brand": "Porsche",
        "name": "911 Carrera",
        "type": "Coupe/Performance",
        "price": 25675000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=911%20Carrera",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-911-carrera-t",
        "brand": "Porsche",
        "name": "911 Carrera T",
        "type": "Coupe/Performance",
        "price": 25850000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=911%20Carrera%20T",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-911-carrera-s",
        "brand": "Porsche",
        "name": "911 Carrera S",
        "type": "Coupe/Performance",
        "price": 26025000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=911%20Carrera%20S",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-911-carrera-gts",
        "brand": "Porsche",
        "name": "911 Carrera GTS",
        "type": "Coupe/Performance",
        "price": 26200000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=911%20Carrera%20GTS",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-911-turbo-s",
        "brand": "Porsche",
        "name": "911 Turbo S",
        "type": "Sedan/Hatchback",
        "price": 11375000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=911%20Turbo%20S",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-911-gt3",
        "brand": "Porsche",
        "name": "911 GT3",
        "type": "Coupe/Performance",
        "price": 26550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=911%20GT3",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-911-gt3-rs",
        "brand": "Porsche",
        "name": "911 GT3 RS",
        "type": "Coupe/Performance",
        "price": 26725000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=911%20GT3%20RS",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-718-cayman",
        "brand": "Porsche",
        "name": "718 Cayman",
        "type": "Coupe/Performance",
        "price": 26900000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=718%20Cayman",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-718-boxster",
        "brand": "Porsche",
        "name": "718 Boxster",
        "type": "Coupe/Performance",
        "price": 27075000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=718%20Boxster",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-718-spyder-rs",
        "brand": "Porsche",
        "name": "718 Spyder RS",
        "type": "Coupe/Performance",
        "price": 27250000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=718%20Spyder%20RS",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-718-cayman-gt4-rs",
        "brand": "Porsche",
        "name": "718 Cayman GT4 RS",
        "type": "Coupe/Performance",
        "price": 27425000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=718%20Cayman%20GT4%20RS",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-taycan",
        "brand": "Porsche",
        "name": "Taycan",
        "type": "Sedan/Hatchback",
        "price": 12600000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=Taycan",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-taycan-turbo-s",
        "brand": "Porsche",
        "name": "Taycan Turbo S",
        "type": "Sedan/Hatchback",
        "price": 12775000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=Taycan%20Turbo%20S",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-taycan-cross-turismo",
        "brand": "Porsche",
        "name": "Taycan Cross Turismo",
        "type": "Sedan/Hatchback",
        "price": 12950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=Taycan%20Cross%20Turismo",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-panamera",
        "brand": "Porsche",
        "name": "Panamera",
        "type": "Sedan/Hatchback",
        "price": 13125000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=Panamera",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-panamera-turbo-e-hybrid",
        "brand": "Porsche",
        "name": "Panamera Turbo E-Hybrid",
        "type": "Sedan/Hatchback",
        "price": 13300000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=Panamera%20Turbo%20E-Hybrid",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "4–5",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-macan",
        "brand": "Porsche",
        "name": "Macan",
        "type": "SUV/Crossover",
        "price": 15575000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=Macan",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-macan-electric",
        "brand": "Porsche",
        "name": "Macan Electric",
        "type": "SUV/Crossover",
        "price": 15750000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=Macan%20Electric",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "5–7",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-cayenne",
        "brand": "Porsche",
        "name": "Cayenne",
        "type": "SUV/Crossover",
        "price": 15925000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=Cayenne",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "porsche-cayenne-turbo-e-hybrid",
        "brand": "Porsche",
        "name": "Cayenne Turbo E-Hybrid",
        "type": "SUV/Crossover",
        "price": 16100000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Porsche&model=Cayenne%20Turbo%20E-Hybrid",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-296-gtb",
        "brand": "Ferrari",
        "name": "296 GTB",
        "type": "Coupe/Performance",
        "price": 68175000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=296%20GTB",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-296-gts",
        "brand": "Ferrari",
        "name": "296 GTS",
        "type": "Coupe/Performance",
        "price": 68350000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=296%20GTS",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-sf90-stradale",
        "brand": "Ferrari",
        "name": "SF90 Stradale",
        "type": "Coupe/Performance",
        "price": 68525000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=SF90%20Stradale",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-sf90-spider",
        "brand": "Ferrari",
        "name": "SF90 Spider",
        "type": "Coupe/Performance",
        "price": 68700000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=SF90%20Spider",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-12cilindri",
        "brand": "Ferrari",
        "name": "12Cilindri",
        "type": "Coupe/Performance",
        "price": 68875000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=12Cilindri",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-12cilindri-spider",
        "brand": "Ferrari",
        "name": "12Cilindri Spider",
        "type": "Coupe/Performance",
        "price": 69050000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=12Cilindri%20Spider",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-purosangue",
        "brand": "Ferrari",
        "name": "Purosangue",
        "type": "Sedan/Hatchback",
        "price": 29225000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=Purosangue",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-roma",
        "brand": "Ferrari",
        "name": "Roma",
        "type": "Coupe/Performance",
        "price": 69400000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=Roma",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-roma-spider",
        "brand": "Ferrari",
        "name": "Roma Spider",
        "type": "Coupe/Performance",
        "price": 69575000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=Roma%20Spider",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-812-superfast",
        "brand": "Ferrari",
        "name": "812 Superfast",
        "type": "Sedan/Hatchback",
        "price": 29750000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=812%20Superfast",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-812-gts",
        "brand": "Ferrari",
        "name": "812 GTS",
        "type": "Coupe/Performance",
        "price": 69925000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=812%20GTS",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-f8-tributo",
        "brand": "Ferrari",
        "name": "F8 Tributo",
        "type": "Coupe/Performance",
        "price": 70100000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=F8%20Tributo",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-f8-spider",
        "brand": "Ferrari",
        "name": "F8 Spider",
        "type": "Coupe/Performance",
        "price": 70275000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=F8%20Spider",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-488-pista",
        "brand": "Ferrari",
        "name": "488 Pista",
        "type": "Coupe/Performance",
        "price": 70450000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=488%20Pista",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-488-spider",
        "brand": "Ferrari",
        "name": "488 Spider",
        "type": "Coupe/Performance",
        "price": 70625000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=488%20Spider",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-portofino-m",
        "brand": "Ferrari",
        "name": "Portofino M",
        "type": "Sedan/Hatchback",
        "price": 30800000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=Portofino%20M",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-monza-sp1",
        "brand": "Ferrari",
        "name": "Monza SP1",
        "type": "Coupe/Performance",
        "price": 70975000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=Monza%20SP1",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-monza-sp2",
        "brand": "Ferrari",
        "name": "Monza SP2",
        "type": "Coupe/Performance",
        "price": 71150000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=Monza%20SP2",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-daytona-sp3",
        "brand": "Ferrari",
        "name": "Daytona SP3",
        "type": "Sedan/Hatchback",
        "price": 31325000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=Daytona%20SP3",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "ferrari-laferrari",
        "brand": "Ferrari",
        "name": "LaFerrari",
        "type": "Coupe/Performance",
        "price": 71500000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Ferrari&model=LaFerrari",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover",
        "brand": "Range Rover",
        "name": "Range Rover",
        "type": "SUV/Crossover",
        "price": 8575000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover-se",
        "brand": "Range Rover",
        "name": "Range Rover SE",
        "type": "SUV/Crossover",
        "price": 8750000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover%20SE",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover-autobiography",
        "brand": "Range Rover",
        "name": "Range Rover Autobiography",
        "type": "SUV/Crossover",
        "price": 8925000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover%20Autobiography",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover-sv",
        "brand": "Range Rover",
        "name": "Range Rover SV",
        "type": "SUV/Crossover",
        "price": 9100000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover%20SV",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover-phev",
        "brand": "Range Rover",
        "name": "Range Rover PHEV",
        "type": "SUV/Crossover",
        "price": 9275000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover%20PHEV",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover-sport",
        "brand": "Range Rover",
        "name": "Range Rover Sport",
        "type": "SUV/Crossover",
        "price": 9450000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover%20Sport",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover-sport-sv",
        "brand": "Range Rover",
        "name": "Range Rover Sport SV",
        "type": "SUV/Crossover",
        "price": 9625000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover%20Sport%20SV",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover-sport-phev",
        "brand": "Range Rover",
        "name": "Range Rover Sport PHEV",
        "type": "SUV/Crossover",
        "price": 9800000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover%20Sport%20PHEV",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover-velar",
        "brand": "Range Rover",
        "name": "Range Rover Velar",
        "type": "SUV/Crossover",
        "price": 9975000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover%20Velar",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover-velar-phev",
        "brand": "Range Rover",
        "name": "Range Rover Velar PHEV",
        "type": "SUV/Crossover",
        "price": 10150000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover%20Velar%20PHEV",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover-evoque",
        "brand": "Range Rover",
        "name": "Range Rover Evoque",
        "type": "SUV/Crossover",
        "price": 10325000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover%20Evoque",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "5–7",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-range-rover-evoque-phev",
        "brand": "Range Rover",
        "name": "Range Rover Evoque PHEV",
        "type": "SUV/Crossover",
        "price": 10500000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Range%20Rover%20Evoque%20PHEV",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-defender-90",
        "brand": "Range Rover",
        "name": "Defender 90",
        "type": "SUV/Crossover",
        "price": 10675000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Defender%2090",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-defender-110",
        "brand": "Range Rover",
        "name": "Defender 110",
        "type": "SUV/Crossover",
        "price": 10850000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Defender%20110",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-defender-130",
        "brand": "Range Rover",
        "name": "Defender 130",
        "type": "SUV/Crossover",
        "price": 11025000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Defender%20130",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-defender-octa",
        "brand": "Range Rover",
        "name": "Defender OCTA",
        "type": "SUV/Crossover",
        "price": 11200000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Defender%20OCTA",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-discovery",
        "brand": "Range Rover",
        "name": "Discovery",
        "type": "SUV/Crossover",
        "price": 11375000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Discovery",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-discovery-sport",
        "brand": "Range Rover",
        "name": "Discovery Sport",
        "type": "SUV/Crossover",
        "price": 11550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Discovery%20Sport",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-discovery-sport-phev",
        "brand": "Range Rover",
        "name": "Discovery Sport PHEV",
        "type": "SUV/Crossover",
        "price": 11725000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Discovery%20Sport%20PHEV",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "range-rover-defender-v8",
        "brand": "Range Rover",
        "name": "Defender V8",
        "type": "SUV/Crossover",
        "price": 11900000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Range%20Rover&model=Defender%20V8",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-ex30",
        "brand": "Volvo",
        "name": "EX30",
        "type": "SUV/Crossover",
        "price": 4375000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=EX30",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-ex40",
        "brand": "Volvo",
        "name": "EX40",
        "type": "SUV/Crossover",
        "price": 4550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=EX40",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-ec40",
        "brand": "Volvo",
        "name": "EC40",
        "type": "Sedan/Hatchback",
        "price": 4025000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=EC40",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-ex60",
        "brand": "Volvo",
        "name": "EX60",
        "type": "SUV/Crossover",
        "price": 4900000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=EX60",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-ex90",
        "brand": "Volvo",
        "name": "EX90",
        "type": "Sedan/Hatchback",
        "price": 4375000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=EX90",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-es90",
        "brand": "Volvo",
        "name": "ES90",
        "type": "Sedan/Hatchback",
        "price": 4550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=ES90",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-em90",
        "brand": "Volvo",
        "name": "EM90",
        "type": "Sedan/Hatchback",
        "price": 4725000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=EM90",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-xc40",
        "brand": "Volvo",
        "name": "XC40",
        "type": "SUV/Crossover",
        "price": 5600000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=XC40",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-xc60",
        "brand": "Volvo",
        "name": "XC60",
        "type": "SUV/Crossover",
        "price": 5775000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=XC60",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-xc90",
        "brand": "Volvo",
        "name": "XC90",
        "type": "SUV/Crossover",
        "price": 5950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=XC90",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-s60",
        "brand": "Volvo",
        "name": "S60",
        "type": "Sedan/Hatchback",
        "price": 5425000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=S60",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-s90",
        "brand": "Volvo",
        "name": "S90",
        "type": "Sedan/Hatchback",
        "price": 5600000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=S90",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-v60",
        "brand": "Volvo",
        "name": "V60",
        "type": "Sedan/Hatchback",
        "price": 5775000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=V60",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-v60-cross-country",
        "brand": "Volvo",
        "name": "V60 Cross Country",
        "type": "Sedan/Hatchback",
        "price": 5950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=V60%20Cross%20Country",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-v90",
        "brand": "Volvo",
        "name": "V90",
        "type": "Sedan/Hatchback",
        "price": 6125000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=V90",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-v90-cross-country",
        "brand": "Volvo",
        "name": "V90 Cross Country",
        "type": "Sedan/Hatchback",
        "price": 6300000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=V90%20Cross%20Country",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-c40-recharge",
        "brand": "Volvo",
        "name": "C40 Recharge",
        "type": "Sedan/Hatchback",
        "price": 6475000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=C40%20Recharge",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "4–5",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-xc40-recharge",
        "brand": "Volvo",
        "name": "XC40 Recharge",
        "type": "SUV/Crossover",
        "price": 7350000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=XC40%20Recharge",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-s90-recharge",
        "brand": "Volvo",
        "name": "S90 Recharge",
        "type": "Sedan/Hatchback",
        "price": 6825000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=S90%20Recharge",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "4–5",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "volvo-xc90-recharge",
        "brand": "Volvo",
        "name": "XC90 Recharge",
        "type": "SUV/Crossover",
        "price": 7700000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Volvo&model=XC90%20Recharge",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-i10",
        "brand": "Hyundai",
        "name": "i10",
        "type": "Sedan/Hatchback",
        "price": 3675000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=i10",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-i20",
        "brand": "Hyundai",
        "name": "i20",
        "type": "Sedan/Hatchback",
        "price": 3850000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=i20",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-i30",
        "brand": "Hyundai",
        "name": "i30",
        "type": "Sedan/Hatchback",
        "price": 4025000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=i30",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-verna",
        "brand": "Hyundai",
        "name": "Verna",
        "type": "Sedan/Hatchback",
        "price": 4200000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Verna",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-elantra",
        "brand": "Hyundai",
        "name": "Elantra",
        "type": "Sedan/Hatchback",
        "price": 4375000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Elantra",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-sonata",
        "brand": "Hyundai",
        "name": "Sonata",
        "type": "Sedan/Hatchback",
        "price": 4550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Sonata",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-venue",
        "brand": "Hyundai",
        "name": "Venue",
        "type": "SUV/Crossover",
        "price": 5425000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Venue",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-creta",
        "brand": "Hyundai",
        "name": "Creta",
        "type": "SUV/Crossover",
        "price": 5600000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Creta",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-creta-electric",
        "brand": "Hyundai",
        "name": "Creta Electric",
        "type": "SUV/Crossover",
        "price": 5775000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Creta%20Electric",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "5–7",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-alcazar",
        "brand": "Hyundai",
        "name": "Alcazar",
        "type": "SUV/Crossover",
        "price": 5950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Alcazar",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-tucson",
        "brand": "Hyundai",
        "name": "Tucson",
        "type": "SUV/Crossover",
        "price": 6125000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Tucson",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-santa-fe",
        "brand": "Hyundai",
        "name": "Santa Fe",
        "type": "Sedan/Hatchback",
        "price": 5600000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Santa%20Fe",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-palisade",
        "brand": "Hyundai",
        "name": "Palisade",
        "type": "SUV/Crossover",
        "price": 6475000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Palisade",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-kona",
        "brand": "Hyundai",
        "name": "Kona",
        "type": "Sedan/Hatchback",
        "price": 5950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Kona",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-kona-electric",
        "brand": "Hyundai",
        "name": "Kona Electric",
        "type": "Sedan/Hatchback",
        "price": 6125000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Kona%20Electric",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-ioniq-5",
        "brand": "Hyundai",
        "name": "Ioniq 5",
        "type": "Sedan/Hatchback",
        "price": 6300000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Ioniq%205",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-ioniq-6",
        "brand": "Hyundai",
        "name": "Ioniq 6",
        "type": "Sedan/Hatchback",
        "price": 6475000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Ioniq%206",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-ioniq-9",
        "brand": "Hyundai",
        "name": "Ioniq 9",
        "type": "Sedan/Hatchback",
        "price": 6650000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Ioniq%209",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-exter",
        "brand": "Hyundai",
        "name": "Exter",
        "type": "Sedan/Hatchback",
        "price": 6825000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Exter",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "hyundai-aura",
        "brand": "Hyundai",
        "name": "Aura",
        "type": "Sedan/Hatchback",
        "price": 7000000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Hyundai&model=Aura",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-picanto",
        "brand": "Kia",
        "name": "Picanto",
        "type": "Sedan/Hatchback",
        "price": 3675000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Picanto",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-rio",
        "brand": "Kia",
        "name": "Rio",
        "type": "Sedan/Hatchback",
        "price": 3850000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Rio",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-ceed",
        "brand": "Kia",
        "name": "Ceed",
        "type": "Sedan/Hatchback",
        "price": 4025000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Ceed",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-cerato",
        "brand": "Kia",
        "name": "Cerato",
        "type": "Sedan/Hatchback",
        "price": 4200000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Cerato",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-k3",
        "brand": "Kia",
        "name": "K3",
        "type": "Sedan/Hatchback",
        "price": 4375000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=K3",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-k4",
        "brand": "Kia",
        "name": "K4",
        "type": "Sedan/Hatchback",
        "price": 4550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=K4",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-k5",
        "brand": "Kia",
        "name": "K5",
        "type": "Sedan/Hatchback",
        "price": 4725000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=K5",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-seltos",
        "brand": "Kia",
        "name": "Seltos",
        "type": "SUV/Crossover",
        "price": 5600000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Seltos",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-sonet",
        "brand": "Kia",
        "name": "Sonet",
        "type": "Sedan/Hatchback",
        "price": 5075000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Sonet",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-sportage",
        "brand": "Kia",
        "name": "Sportage",
        "type": "SUV/Crossover",
        "price": 5950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Sportage",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-sorento",
        "brand": "Kia",
        "name": "Sorento",
        "type": "SUV/Crossover",
        "price": 6125000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Sorento",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-telluride",
        "brand": "Kia",
        "name": "Telluride",
        "type": "SUV/Crossover",
        "price": 6300000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Telluride",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-carnival",
        "brand": "Kia",
        "name": "Carnival",
        "type": "MPV/Van",
        "price": 4775000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Carnival",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "6–9",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-carens",
        "brand": "Kia",
        "name": "Carens",
        "type": "MPV/Van",
        "price": 4950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Carens",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "6–9",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-ev3",
        "brand": "Kia",
        "name": "EV3",
        "type": "Sedan/Hatchback",
        "price": 6125000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=EV3",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-ev4",
        "brand": "Kia",
        "name": "EV4",
        "type": "Sedan/Hatchback",
        "price": 6300000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=EV4",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-ev5",
        "brand": "Kia",
        "name": "EV5",
        "type": "Sedan/Hatchback",
        "price": 6475000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=EV5",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-ev6",
        "brand": "Kia",
        "name": "EV6",
        "type": "Sedan/Hatchback",
        "price": 6650000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=EV6",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-ev9",
        "brand": "Kia",
        "name": "EV9",
        "type": "Sedan/Hatchback",
        "price": 6825000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=EV9",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "kia-stinger",
        "brand": "Kia",
        "name": "Stinger",
        "type": "Coupe/Performance",
        "price": 12000000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Kia&model=Stinger",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-xuv-3xo",
        "brand": "Mahindra",
        "name": "XUV 3XO",
        "type": "SUV/Crossover",
        "price": 4375000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=XUV%203XO",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-xuv400",
        "brand": "Mahindra",
        "name": "XUV400",
        "type": "SUV/Crossover",
        "price": 4550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=XUV400",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-xuv700",
        "brand": "Mahindra",
        "name": "XUV700",
        "type": "SUV/Crossover",
        "price": 4725000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=XUV700",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-scorpio-n",
        "brand": "Mahindra",
        "name": "Scorpio-N",
        "type": "SUV/Crossover",
        "price": 4900000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=Scorpio-N",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-scorpio-classic",
        "brand": "Mahindra",
        "name": "Scorpio Classic",
        "type": "SUV/Crossover",
        "price": 5075000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=Scorpio%20Classic",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-thar",
        "brand": "Mahindra",
        "name": "Thar",
        "type": "SUV/Crossover",
        "price": 5250000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=Thar",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-thar-roxx",
        "brand": "Mahindra",
        "name": "Thar Roxx",
        "type": "SUV/Crossover",
        "price": 5425000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=Thar%20Roxx",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-bolero",
        "brand": "Mahindra",
        "name": "Bolero",
        "type": "SUV/Crossover",
        "price": 5600000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=Bolero",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-bolero-neo",
        "brand": "Mahindra",
        "name": "Bolero Neo",
        "type": "SUV/Crossover",
        "price": 5775000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=Bolero%20Neo",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-bolero-neo-plus",
        "brand": "Mahindra",
        "name": "Bolero Neo Plus",
        "type": "SUV/Crossover",
        "price": 5950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=Bolero%20Neo%20Plus",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-marazzo",
        "brand": "Mahindra",
        "name": "Marazzo",
        "type": "MPV/Van",
        "price": 4425000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=Marazzo",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "6–9",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-alturas-g4",
        "brand": "Mahindra",
        "name": "Alturas G4",
        "type": "Sedan/Hatchback",
        "price": 5600000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=Alturas%20G4",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-tuv300",
        "brand": "Mahindra",
        "name": "TUV300",
        "type": "Sedan/Hatchback",
        "price": 5775000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=TUV300",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-kuv100",
        "brand": "Mahindra",
        "name": "KUV100",
        "type": "Sedan/Hatchback",
        "price": 5950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=KUV100",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-be-6",
        "brand": "Mahindra",
        "name": "BE 6",
        "type": "Sedan/Hatchback",
        "price": 6125000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=BE%206",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-xev-9e",
        "brand": "Mahindra",
        "name": "XEV 9e",
        "type": "Sedan/Hatchback",
        "price": 6300000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=XEV%209e",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-be-rall-e",
        "brand": "Mahindra",
        "name": "BE Rall-E",
        "type": "Sedan/Hatchback",
        "price": 6475000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=BE%20Rall-E",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-be-07",
        "brand": "Mahindra",
        "name": "BE 07",
        "type": "Sedan/Hatchback",
        "price": 6650000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=BE%2007",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-be-08",
        "brand": "Mahindra",
        "name": "BE 08",
        "type": "Sedan/Hatchback",
        "price": 6825000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=BE%2008",
        "specs": {
            "Engine": "Electric motor / battery system",
            "Power": "Variant dependent",
            "Transmission": "Single-speed reduction gear",
            "Mileage": "Range varies by battery/trim",
            "Seating": "4–5",
            "Fuel Type": "Battery electric"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "High-voltage battery management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "mahindra-vision-s",
        "brand": "Mahindra",
        "name": "Vision S",
        "type": "Sedan/Hatchback",
        "price": 7000000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Mahindra&model=Vision%20S",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-f-pace",
        "brand": "Jaguar",
        "name": "F-PACE",
        "type": "Sedan/Hatchback",
        "price": 7175000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=F-PACE",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-e-pace",
        "brand": "Jaguar",
        "name": "E-PACE",
        "type": "Sedan/Hatchback",
        "price": 7350000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=E-PACE",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-i-pace",
        "brand": "Jaguar",
        "name": "I-PACE",
        "type": "Sedan/Hatchback",
        "price": 7525000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=I-PACE",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-f-type",
        "brand": "Jaguar",
        "name": "F-TYPE",
        "type": "Coupe/Performance",
        "price": 17700000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=F-TYPE",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-xe",
        "brand": "Jaguar",
        "name": "XE",
        "type": "Sedan/Hatchback",
        "price": 7875000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=XE",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-xf",
        "brand": "Jaguar",
        "name": "XF",
        "type": "Sedan/Hatchback",
        "price": 8050000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=XF",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-xj",
        "brand": "Jaguar",
        "name": "XJ",
        "type": "Sedan/Hatchback",
        "price": 8225000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=XJ",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-xk",
        "brand": "Jaguar",
        "name": "XK",
        "type": "Sedan/Hatchback",
        "price": 8400000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=XK",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-e-type",
        "brand": "Jaguar",
        "name": "E-Type",
        "type": "Sedan/Hatchback",
        "price": 8575000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=E-Type",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-f-pace-svr",
        "brand": "Jaguar",
        "name": "F-PACE SVR",
        "type": "Sedan/Hatchback",
        "price": 8750000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=F-PACE%20SVR",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-f-pace-p400e",
        "brand": "Jaguar",
        "name": "F-PACE P400e",
        "type": "Sedan/Hatchback",
        "price": 8925000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=F-PACE%20P400e",
        "specs": {
            "Engine": "Petrol engine + hybrid system",
            "Power": "Variant dependent",
            "Transmission": "Automatic / e-CVT",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Hybrid / Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-i-pace-r-dynamic",
        "brand": "Jaguar",
        "name": "I-PACE R-Dynamic",
        "type": "Sedan/Hatchback",
        "price": 9100000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=I-PACE%20R-Dynamic",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-xf-sportbrake",
        "brand": "Jaguar",
        "name": "XF Sportbrake",
        "type": "Sedan/Hatchback",
        "price": 9275000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=XF%20Sportbrake",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-xe-sv-project-8",
        "brand": "Jaguar",
        "name": "XE SV Project 8",
        "type": "Sedan/Hatchback",
        "price": 9450000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=XE%20SV%20Project%208",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-f-type-r",
        "brand": "Jaguar",
        "name": "F-TYPE R",
        "type": "Coupe/Performance",
        "price": 19625000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=F-TYPE%20R",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-f-type-p450",
        "brand": "Jaguar",
        "name": "F-TYPE P450",
        "type": "Coupe/Performance",
        "price": 19800000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=F-TYPE%20P450",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "2–4",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Sport-tuned chassis and performance drive modes",
            "High-performance braking/tyre package (variant dependent)"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-xj50",
        "brand": "Jaguar",
        "name": "XJ50",
        "type": "Sedan/Hatchback",
        "price": 9975000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=XJ50",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-i-pace-black",
        "brand": "Jaguar",
        "name": "I-PACE Black",
        "type": "Sedan/Hatchback",
        "price": 10150000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=I-PACE%20Black",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-e-pace-r-dynamic",
        "brand": "Jaguar",
        "name": "E-PACE R-Dynamic",
        "type": "Sedan/Hatchback",
        "price": 10325000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=E-PACE%20R-Dynamic",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jaguar-f-pace-90th-anniversary",
        "brand": "Jaguar",
        "name": "F-PACE 90th Anniversary",
        "type": "Sedan/Hatchback",
        "price": 10500000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jaguar&model=F-PACE%2090th%20Anniversary",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-avenger",
        "brand": "Jeep",
        "name": "Avenger",
        "type": "SUV/Crossover",
        "price": 4375000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Avenger",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-renegade",
        "brand": "Jeep",
        "name": "Renegade",
        "type": "SUV/Crossover",
        "price": 4550000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Renegade",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-compass",
        "brand": "Jeep",
        "name": "Compass",
        "type": "SUV/Crossover",
        "price": 4725000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Compass",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-cherokee",
        "brand": "Jeep",
        "name": "Cherokee",
        "type": "SUV/Crossover",
        "price": 4900000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Cherokee",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-grand-cherokee",
        "brand": "Jeep",
        "name": "Grand Cherokee",
        "type": "SUV/Crossover",
        "price": 5075000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Grand%20Cherokee",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-grand-cherokee-l",
        "brand": "Jeep",
        "name": "Grand Cherokee L",
        "type": "SUV/Crossover",
        "price": 5250000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Grand%20Cherokee%20L",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-wrangler",
        "brand": "Jeep",
        "name": "Wrangler",
        "type": "SUV/Crossover",
        "price": 5425000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Wrangler",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-gladiator",
        "brand": "Jeep",
        "name": "Gladiator",
        "type": "SUV/Crossover",
        "price": 5600000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Gladiator",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-wagoneer",
        "brand": "Jeep",
        "name": "Wagoneer",
        "type": "SUV/Crossover",
        "price": 5775000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Wagoneer",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-grand-wagoneer",
        "brand": "Jeep",
        "name": "Grand Wagoneer",
        "type": "SUV/Crossover",
        "price": 5950000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Grand%20Wagoneer",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-recon",
        "brand": "Jeep",
        "name": "Recon",
        "type": "Sedan/Hatchback",
        "price": 5425000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Recon",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-wagoneer-s",
        "brand": "Jeep",
        "name": "Wagoneer S",
        "type": "SUV/Crossover",
        "price": 6300000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Wagoneer%20S",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-commander",
        "brand": "Jeep",
        "name": "Commander",
        "type": "Sedan/Hatchback",
        "price": 5775000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Commander",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "4–5",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-meridian",
        "brand": "Jeep",
        "name": "Meridian",
        "type": "SUV/Crossover",
        "price": 6650000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Meridian",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-compass-e-hybrid",
        "brand": "Jeep",
        "name": "Compass e-Hybrid",
        "type": "SUV/Crossover",
        "price": 6825000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Compass%20e-Hybrid",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-renegade-4xe",
        "brand": "Jeep",
        "name": "Renegade 4xe",
        "type": "SUV/Crossover",
        "price": 7000000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Renegade%204xe",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-wrangler-4xe",
        "brand": "Jeep",
        "name": "Wrangler 4xe",
        "type": "SUV/Crossover",
        "price": 7175000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Wrangler%204xe",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-grand-cherokee-4xe",
        "brand": "Jeep",
        "name": "Grand Cherokee 4xe",
        "type": "SUV/Crossover",
        "price": 7350000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Grand%20Cherokee%204xe",
        "specs": {
            "Engine": "Turbo petrol + electric motor",
            "Power": "Variant dependent",
            "Transmission": "Automatic",
            "Mileage": "Varies by driving mode",
            "Seating": "5–7",
            "Fuel Type": "Plug-in hybrid"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "Hybrid energy management",
            "Regenerative braking"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-gladiator-mojave",
        "brand": "Jeep",
        "name": "Gladiator Mojave",
        "type": "SUV/Crossover",
        "price": 7525000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Gladiator%20Mojave",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    },
    {
        "id": "jeep-wrangler-rubicon",
        "brand": "Jeep",
        "name": "Wrangler Rubicon",
        "type": "SUV/Crossover",
        "price": 7700000,
        "testDrivePrice": 999,
        "image": "https://carapi.trustcar.info/getImage?make=Jeep&model=Wrangler%20Rubicon",
        "specs": {
            "Engine": "Turbo petrol/diesel engine (variant dependent)",
            "Power": "Variant dependent",
            "Transmission": "Automatic / manual (market dependent)",
            "Mileage": "Varies by market/trim",
            "Seating": "5–7",
            "Fuel Type": "Petrol/Diesel (market dependent)"
        },
        "features": [
            "Digital cockpit / connected infotainment",
            "Wireless smartphone integration",
            "Adaptive cruise / driver assistance (trim dependent)",
            "Lane keeping / collision assistance (market dependent)",
            "Parking sensors and camera system",
            "Keyless entry and push-button start",
            "Automatic climate control",
            "Premium interior materials and configurable lighting",
            "SUV-oriented ground clearance",
            "Selectable drive modes / traction control"
        ],
        "colors": [
            {
                "name": "Midnight Black",
                "hex": "#0b0b0d"
            },
            {
                "name": "Pearl White",
                "hex": "#f2f2f2"
            },
            {
                "name": "Storm Grey",
                "hex": "#6b6f76"
            },
            {
                "name": "Racing Red",
                "hex": "#a8231f"
            },
            {
                "name": "Deep Blue",
                "hex": "#1f3a63"
            }
        ],
        "mods": [
            {
                "id": "alloy",
                "name": "20-inch Alloy Wheels",
                "desc": "Sport alloy wheel upgrade",
                "price": 45000
            },
            {
                "id": "sunroof",
                "name": "Panoramic Sunroof",
                "desc": "Full-length glass roof",
                "price": 60000
            },
            {
                "id": "leather",
                "name": "Premium Interior",
                "desc": "Upgraded leather / premium trim",
                "price": 75000
            },
            {
                "id": "sound",
                "name": "Premium Sound System",
                "desc": "Enhanced multi-speaker audio",
                "price": 55000
            },
            {
                "id": "wrap",
                "name": "Matte Wrap Finish",
                "desc": "Full-body matte finish",
                "price": 40000
            }
        ]
    }
];

export const cars = [...baseCars, ...marutiSuzukiCars];

export function getBrand(name = "") {
  const decoded = decodeURIComponent(name || "");
  return brands.find((brand) => brand.name.toLowerCase() === decoded.toLowerCase());
}

export function getCarsByBrand(brandName = "") {
  const decoded = decodeURIComponent(brandName || "");
  return cars.filter((car) => car.brand.toLowerCase() === decoded.toLowerCase());
}

export function getCarById(id = "") {
  return cars.find((car) => car.id === id);
}

export function formatINR(num) {
  if (num === null || num === undefined || Number.isNaN(Number(num))) return "Price on request";
  return "₹" + Number(num).toLocaleString("en-IN");
}
