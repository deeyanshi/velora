# VELORA Brand & Catalogue Update

## Brands
All 27 brands in the VELORA catalogue now have a logo URL.

## Maruti Suzuki hatchback catalogue
The Maruti Suzuki hatchback section now contains these separate, selectable models:
1. S-Presso
2. Alto K10
3. Celerio
4. WagonR
5. Swift
6. Baleno
7. Ignis

Each model is its own car record and can be opened, viewed in detail, selected for variants where available, booked, wishlisted and used by the existing VELORA flows.

## Images
- Existing catalogue entries keep their model-specific `carapi.trustcar.info` image URLs.
- The Maruti Suzuki Arena hatchbacks use current manufacturer-hosted imagery where available.
- The generic LoremFlickr fallback was removed; if a model-specific image fails, VELORA retries using the model/brand-specific CarAPI image endpoint.

## Detailed Maruti data
The Maruti hatchback entries include more precise manufacturer-backed fields such as:
- engine capacity/type
- power and torque
- fuel type
- transmission
- mileage/efficiency
- seating
- dimensions
- wheelbase
- boot space
- fuel-tank capacity where available
- safety and technology features
- variant highlights where researched

Prices are current starting ex-showroom figures where the official manufacturer page exposed them; prices should be treated as live/indicative and rechecked before a real purchase.
