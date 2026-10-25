import { useState } from "react";
import { Badge, Card, Notice, Row, SelectField, TextField } from "../ui";
import { OTHER_STATE_KEY, RATES_DISCLAIMER, inr, listStates } from "../../pricing";

export default function OnRoadStep({ draft, update, config, quote, errors }) {
  const states = listStates(config.stateRules);
  const rule = config.stateRules[draft.state];
  const cities = rule?.cities || [];
  const city = cities.find((c) => c.name === draft.city);
  const [codeMsg, setCodeMsg] = useState("");

  const setState = (state) => update({ state, city: "", rto: "" });
  const setCity = (name) => {
    const found = cities.find((c) => c.name === name);
    update({ city: name, rto: found?.rtos?.length === 1 ? found.rtos[0].code : "" });
  };

  const applyCode = (value) => {
    update({ discountCode: value });
    const code = value.trim().toUpperCase();
    if (!code) return setCodeMsg("");
    const known = config.discounts.some((d) => d.enabled !== false && d.code?.toUpperCase() === code);
    setCodeMsg(known ? "Code applied." : "This code isn't valid.");
  };

  const t = draft.tradeIn;
  const setTrade = (patch) => update({ tradeIn: { ...t, ...patch } });

  return (
    <>
      <Card title="Where will this car be registered?" subtitle="Road tax, registration, HSRP and insurance depend on the registration state.">
        <div className="bk-grid-3">
          <SelectField label="State" required value={draft.state} onChange={setState} options={states} error={errors.state} placeholder="Select state" />
          {cities.length > 0 ? (
            <SelectField label="City" required value={draft.city} onChange={setCity} options={cities.map((c) => c.name)} error={errors.city} placeholder="Select city" disabled={!draft.state} />
          ) : (
            <TextField label="City" required value={draft.city} onChange={(v) => update({ city: v })} error={errors.city} disabled={!draft.state} placeholder="Enter city" />
          )}
          {city?.rtos?.length > 0 ? (
            <SelectField label="Preferred RTO" required value={draft.rto} onChange={(v) => update({ rto: v })} options={city.rtos.map((r) => [r.code, `${r.code} · ${r.name}`])} error={errors.rto} placeholder="Select RTO" />
          ) : (
            <TextField label="Preferred RTO" required value={draft.rto} onChange={(v) => update({ rto: v })} error={errors.rto} disabled={!draft.state} placeholder="e.g. HR-26" />
          )}
        </div>
        {draft.state === OTHER_STATE_KEY && <Notice>A generic estimate is used for states without a dedicated rule. Ask the dealer for the exact figures.</Notice>}
      </Card>

      {quote.onRoad.ok ? (
        <Card title="Core on-road price" badge={<Badge kind="mandatory">Mandatory</Badge>} subtitle={`Estimated for registration in ${draft.state}`}>
          {quote.onRoad.lines.map((line, i) => (
            <Row key={line.key} label={`${i > 0 ? "+ " : ""}${line.label}`} value={inr(line.amount)} tone="mandatory" note={line.estimated ? "Estimated" : ""} />
          ))}
          <Row label="= Core on-road price" value={inr(quote.onRoad.core)} tone="mandatory" strong />
          <Notice kind="warn">{RATES_DISCLAIMER}</Notice>
          <p className="bk-muted">Not included: accessories, protection, warranty, RSA, service packages, modifications and any loan interest. Hypothecation charges apply only if you finance.</p>
        </Card>
      ) : (
        <Notice>{quote.onRoad.errors[0] || "Select a registration state to see the on-road price."}</Notice>
      )}

      <Card title="Offers & discounts" subtitle="Applied to the purchase amount, never to the on-road tax lines.">
        {config.discounts.filter((d) => d.enabled !== false).length === 0 && <p className="bk-muted">No offers are configured right now.</p>}
        {quote.discounts.lines.length === 0 && <p className="bk-muted">No discounts currently apply.</p>}
        {quote.discounts.lines.map((line) => (
          <Row key={line.id} label={line.label} note={line.demo ? "Demo offer for testing" : line.type} value={`− ${inr(line.amount)}`} />
        ))}
        {config.discounts.some((d) => d.code) && (
          <TextField label="Promo code" value={draft.discountCode} onChange={applyCode} placeholder="Enter a code" hint={codeMsg || "Optional"} />
        )}
      </Card>

      <Card title="Trade-in" subtitle="Optional. Your old car's value is credited against the purchase amount." badge={<Badge kind="optional">Optional</Badge>}>
        <label className="bk-check">
          <input type="checkbox" checked={t.enabled} onChange={(e) => setTrade({ enabled: e.target.checked })} />
          <span>I want to trade in my existing car</span>
        </label>
        {t.enabled && (
          <div className="bk-grid-3">
            <TextField label="Existing car" value={t.car} onChange={(v) => setTrade({ car: v })} placeholder="e.g. 2016 Alto 800" error={errors.tradeCar} />
            <TextField label="Estimated trade-in value (₹)" inputMode="numeric" value={t.value} onChange={(v) => setTrade({ value: v.replace(/[^\d]/g, "") })} error={errors.tradeValue} />
            <TextField label="Outstanding loan on old car (₹)" inputMode="numeric" value={t.outstanding} onChange={(v) => setTrade({ outstanding: v.replace(/[^\d]/g, "") })} hint="Settled from the trade-in value first." />
          </div>
        )}
        {t.enabled && quote.tradeIn.credit >= 0 && Number(t.value) > 0 && (
          <>
            <Row label="Trade-in value" value={inr(quote.tradeIn.value)} />
            {quote.tradeIn.outstanding > 0 && <Row label="Less: outstanding loan on old car" value={`− ${inr(quote.tradeIn.outstanding)}`} />}
            <Row label="Trade-in credit applied" value={inr(quote.tradeIn.credit)} strong />
            <p className="bk-muted">Trade-in is a credit against the purchase amount. It is not treated as a cash down payment, and the value is subject to dealer inspection.</p>
          </>
        )}
      </Card>
    </>
  );
}
