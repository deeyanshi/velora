# VELORA React

React/Vite conversion of the supplied VELORA HTML/CSS/JavaScript project.

## Run

```bash
npm install
npm run dev
```

## Routes

- `/`
- `/cars?brand=BMW`
- `/cars/:id`
- `/history`

The old HTML and DOM-manipulation JavaScript files are not used by the React application.

## Data

`src/data/carData.js` contains the original 16-brand / 320-car catalog converted to ES-module exports.

## Browser storage compatibility

The React app keeps the original storage keys:

- `velora_users`
- `velora_session`
- `velora_bookings`
- `velora_test_drives`

This keeps existing demo data readable after migration.

## Images

The supplied catalog uses external image URLs, so those URLs are preserved. No local image files were supplied in the uploaded project. If local images are added later, place them under `src/assets/images/` and update the corresponding data entries.

## Security note

The original demo stores passwords in localStorage. This migration preserves that demo behavior for compatibility; it is not appropriate for production. A real MERN backend should hash passwords and handle authentication server-side.


## Latest catalogue update
The catalogue now includes all 27 requested brand logos and seven separately selectable Maruti Suzuki hatchbacks: S-Presso, Alto K10, Celerio, WagonR, Swift, Baleno and Ignis. Model-specific image URLs are used instead of LoremFlickr fallbacks, with current manufacturer-hosted Maruti images where available.

## Maruti Suzuki ARENA enrichment

VELORA now includes an ARENA data layer based on the official Maruti Suzuki ARENA search/configurator/variant pages. It adds the current Arena model range, starting-price metadata, fuel and transmission types, variant lists, specifications, colours, feature highlights, official model links, quick filters, and ownership/service pathways (compare, booking, test drive, finance, genuine accessories, service and genuine parts).

Source: https://www.marutisuzuki.com/arena/search?q=cars&tab=all&p=1

## Booking journey (7 steps) — added

`BOOK NOW` (car hero, each variant card, Book tab) opens a dedicated flow instead of the old quick form.

Routes: `/book/:carId` → `/book/:carId/{variant|customize|on-road|details|finance|review|payment}`,
`/booking-success/:bookingId`, `/booking/:bookingId` (details), existing `/history` (now has VIEW DETAILS).
Selections from the car page are carried in the URL (`?variant=&color=&mods=`).

Code layout
- `src/pricing/` — pure, UI-free engine: `stateTaxRules.js` (state-wise ESTIMATE rules, all `verified:false`),
  `bookingConfig.js` (admin-editable booking amount, accessories, protection, warranty, discounts, finance defaults,
  per-variant prices; optional JSON override under `localStorage["velora_pricing_config_v1"]`),
  `onRoadPricing.js`, `financeCalculator.js` (EMI, amortization, eligibility), `bookingPricing.js` (full quote).
- `src/booking/` — steps, price summary, draft/booking storage, validation.
- Storage: bookings reuse `velora_bookings` (old records still render); drafts use `velora_booking_draft_v1`.

Needs a real backend before production: KYC/document storage, payment gateway (Razorpay/Stripe — the payment screen is
a marked DEMO), lender integration/approval, verified state/RTO rates, dealer confirmation, real variant-wise prices.
