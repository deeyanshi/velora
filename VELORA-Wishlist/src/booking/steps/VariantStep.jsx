import { Card, Notice, Badge } from "../ui";
import { getVariantList, getVariantPrice, inr } from "../../pricing";

export default function VariantStep({ car, draft, update, config, errors }) {
  const variants = getVariantList(car);
  const missingPrice = variants.every((v) => getVariantPrice(car, v.name, config).source === "missing");
  return (
    <Card title="Select your variant" subtitle={`${car.brand} ${car.name} · every variant is independently bookable`}>
      {errors.variant && <Notice kind="error">{errors.variant}</Notice>}
      {missingPrice && <Notice kind="error">No ex-showroom price is available for this model yet, so it can't be booked online.</Notice>}
      {variants.some((v) => getVariantPrice(car, v.name, config).source === "model") && (
        <Notice>Variant-wise prices are not mapped in the catalogue yet, so the model's listed starting price is used for each variant. Final variant pricing is confirmed by the dealer.</Notice>
      )}
      <div className="bk-variant-grid">
        {variants.map((variant) => {
          const active = draft.variant === variant.name;
          const { price, source } = getVariantPrice(car, variant.name, config);
          const image = variant.image || car.image;
          return (
            <button key={variant.name} type="button" className={`bk-variant ${active ? "active" : ""}`} aria-pressed={active} onClick={() => update({ variant: variant.name })}>
              {image && <img src={image} alt="" loading="lazy" onError={(e) => { e.currentTarget.style.display = "none"; }} />}
              <div className="bk-variant-head">
                <h4>{variant.name}</h4>
                {variant.position && <Badge kind="info">{variant.position}</Badge>}
              </div>
              <dl className="bk-specs">
                <dt>Fuel</dt><dd>{variant.fuel || "—"}</dd>
                <dt>Transmission</dt><dd>{variant.transmission || "—"}</dd>
                <dt>Seating</dt><dd>{car.specs?.Seating ?? "—"}</dd>
                <dt>Engine</dt><dd>{variant.engine || car.specs?.Engine || "—"}</dd>
              </dl>
              <p className="bk-variant-price">{inr(price)}<small>{source === "variant" ? "ex-showroom" : source === "model" ? "ex-showroom (model starting price)" : ""}</small></p>
              {variant.highlights?.length > 0 && (
                <ul className="bk-variant-features">{variant.highlights.slice(0, 5).map((h) => <li key={h}>{h}</li>)}</ul>
              )}
              <span className="bk-variant-cta">{active ? "✓ Selected" : "Select variant"}</span>
            </button>
          );
        })}
      </div>
    </Card>
  );
}
