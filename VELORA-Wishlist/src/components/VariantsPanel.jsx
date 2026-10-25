import { Link } from "react-router-dom";

export default function VariantsPanel({ car, selectedVariant, onSelect, getBookingPath }) {
  const variants = car.variants || [];
  const progression = car.progression || [];
  const matrix = car.matrix;

  return (
    <div className="variants-panel">
      <section className="variants-block">
        <h3 className="variants-title">Choose your variant</h3>
        <p className="variants-sub">Select a variant to carry it into your booking.</p>
        <div className="variant-grid">
          {variants.map((variant) => {
            const active = selectedVariant === variant.name;
            return (
              <div key={variant.name} className={`variant-card ${active ? "active" : ""}`}>
                <button type="button" className="variant-card-body" aria-pressed={active} onClick={() => onSelect(variant.name)}>
                  <div className="variant-card-head">
                    <h4>{variant.name}</h4>
                    {variant.position && <span className="variant-pill">{variant.position}</span>}
                  </div>
                  <dl className="variant-meta">
                    {variant.engine && (<><dt>Engine</dt><dd>{variant.engine}</dd></>)}
                    <dt>Fuel</dt><dd>{variant.fuel}</dd>
                    <dt>Gearbox</dt><dd>{variant.transmission}</dd>
                  </dl>
                  <ul className="variant-highlights">
                    {(variant.highlights || []).map((item) => <li key={item}>{item}</li>)}
                  </ul>
                  <span className="variant-select-label">{active ? "✓ Selected" : "Select variant"}</span>
                </button>
                {getBookingPath && (
                  <Link className="btn-primary variant-book-btn" to={getBookingPath(variant.name)}>BOOK NOW</Link>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {progression.length > 0 && (
        <section className="variants-block">
          <h3 className="variants-title">What each step up adds</h3>
          <p className="variants-sub">Features gained when moving to the next variant.</p>
          <ol className="progression">
            {progression.map((step) => (
              <li className="progression-step" key={`${step.from}-${step.to}`}>
                <div className="progression-head">
                  <span>{step.from}</span><span className="arrow">→</span><strong>{step.to}</strong>
                </div>
                <div className="progression-chips">
                  {step.adds.map((item) => <span key={item}>+ {item}</span>)}
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {matrix && (
        <section className="variants-block">
          <h3 className="variants-title">Feature matrix</h3>
          <p className="variants-sub">A quick side-by-side of what is included in each variant.</p>
          <div className="matrix-scroll">
            <table className="feature-matrix">
              <thead>
                <tr>
                  <th scope="col">Feature</th>
                  {matrix.columns.map((col) => <th scope="col" key={col}>{col}</th>)}
                </tr>
              </thead>
              <tbody>
                {matrix.rows.map(([label, values]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    {values.map((value, index) => (
                      <td key={index} className={value ? "yes" : "no"}>
                        <span aria-label={value ? "Included" : "Not included"}>{value ? "✓" : "—"}</span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}
    </div>
  );
}
