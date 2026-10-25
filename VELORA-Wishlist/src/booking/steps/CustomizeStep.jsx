import { Badge, Card, Notice } from "../ui";
import { colourSurcharge, getAccessoryCatalogue, inr, resolveItemPrice } from "../../pricing";

function OptionList({ items, selected, onToggle, exShowroom }) {
  return (
    <div className="bk-option-list">
      {items.map((item) => {
        const checked = selected.includes(item.id);
        const price = item.priceValue ?? resolveItemPrice(item.price, exShowroom);
        return (
          <label key={item.id} className={`bk-option ${checked ? "checked" : ""}`}>
            <input type="checkbox" checked={checked} onChange={() => onToggle(item.id)} />
            <span className="bk-option-text"><strong>{item.name}</strong><small>{item.desc}</small></span>
            <span className="bk-option-price">+ {inr(price)}</span>
          </label>
        );
      })}
    </div>
  );
}

export default function CustomizeStep({ car, draft, update, config, quote }) {
  const toggle = (key) => (id) => update({ [key]: draft[key].includes(id) ? draft[key].filter((x) => x !== id) : [...draft[key], id] });
  const ex = quote.exShowroom || 0;
  const colours = car.colors || [];
  return (
    <>
      <Notice>Everything on this page is <strong>optional</strong> and is kept separate from the mandatory on-road charges.</Notice>

      <Card title="A. Colour" badge={<Badge kind="optional">Optional</Badge>}>
        {colours.length === 0 ? <p className="bk-muted">Colour options for this model will be added soon. Standard colour applies.</p> : (
          <div className="bk-colours">
            {colours.map((colour) => {
              const cost = colourSurcharge(car, colour.name);
              const active = draft.color === colour.name;
              return (
                <button key={colour.name} type="button" className={`bk-colour ${active ? "active" : ""}`} aria-pressed={active} onClick={() => update({ color: colour.name })}>
                  <span className="bk-colour-dot" style={{ background: colour.hex }} />
                  <span>{colour.name}</span>
                  <small>{cost > 0 ? `+ ${inr(cost)}` : "Included"}</small>
                </button>
              );
            })}
          </div>
        )}
      </Card>

      <Card title="B. Accessories" badge={<Badge kind="optional">Optional</Badge>} subtitle="Indicative prices; the dealer confirms fitment and final pricing.">
        <OptionList items={getAccessoryCatalogue(car, config)} selected={draft.accIds} onToggle={toggle("accIds")} exShowroom={ex} />
      </Card>

      <Card title="C. Protection" badge={<Badge kind="optional">Optional</Badge>}>
        <OptionList items={config.protection} selected={draft.protIds} onToggle={toggle("protIds")} exShowroom={ex} />
      </Card>

      <Card title="D. Warranty / service" badge={<Badge kind="optional">Optional</Badge>}>
        <OptionList items={config.warranty} selected={draft.warIds} onToggle={toggle("warIds")} exShowroom={ex} />
      </Card>

      <Card title="E. Modifications" badge={<Badge kind="optional">Optional</Badge>} subtitle="Same modification list as the Modify tab on the car page.">
        {(car.mods || []).length === 0 ? <p className="bk-muted">No modifications are available for this model yet.</p> : (
          <OptionList items={car.mods.map((m) => ({ ...m, priceValue: Math.max(0, Number(m.price) || 0) }))} selected={draft.modIds} onToggle={toggle("modIds")} exShowroom={ex} />
        )}
      </Card>
    </>
  );
}
