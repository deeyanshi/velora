import { useId } from "react";

export function Field({ label, error, hint, required, children, htmlFor }) {
  return (
    <div className={`bk-field ${error ? "has-error" : ""}`}>
      <label htmlFor={htmlFor}>{label}{required && <span className="req" aria-hidden="true"> *</span>}</label>
      {children}
      {hint && !error && <p className="bk-hint">{hint}</p>}
      {error && <p className="bk-error" role="alert">{error}</p>}
    </div>
  );
}

export function TextField({ label, error, hint, required, value, onChange, ...rest }) {
  const id = useId();
  return (
    <Field label={label} error={error} hint={hint} required={required} htmlFor={id}>
      <input id={id} value={value ?? ""} onChange={(e) => onChange(e.target.value)} aria-invalid={Boolean(error)} {...rest} />
    </Field>
  );
}

export function SelectField({ label, error, hint, required, value, onChange, options, placeholder = "Select", disabled }) {
  const id = useId();
  return (
    <Field label={label} error={error} hint={hint} required={required} htmlFor={id}>
      <select id={id} value={value ?? ""} disabled={disabled} onChange={(e) => onChange(e.target.value)} aria-invalid={Boolean(error)}>
        <option value="">{placeholder}</option>
        {options.map((option) => {
          const [val, text] = Array.isArray(option) ? option : [option, option];
          return <option key={val} value={val}>{text}</option>;
        })}
      </select>
    </Field>
  );
}

export function Badge({ kind = "info", children }) {
  return <span className={`bk-badge bk-badge-${kind}`}>{children}</span>;
}

export function Card({ title, subtitle, badge, children, className = "", action }) {
  return (
    <section className={`bk-card ${className}`}>
      {(title || badge || action) && (
        <header className="bk-card-head">
          <div>
            {title && <h3>{title}</h3>}
            {subtitle && <p className="bk-sub">{subtitle}</p>}
          </div>
          <div className="bk-card-head-right">{badge}{action}</div>
        </header>
      )}
      {children}
    </section>
  );
}

export function Notice({ kind = "info", children }) {
  return <div className={`bk-notice bk-notice-${kind}`} role={kind === "error" ? "alert" : "note"}>{children}</div>;
}

export function Accordion({ title, children }) {
  return (
    <details className="bk-accordion">
      <summary>{title}</summary>
      <div className="bk-accordion-body">{children}</div>
    </details>
  );
}

export function Row({ label, value, tone, strong, note }) {
  return (
    <div className={`bk-row ${tone ? `tone-${tone}` : ""} ${strong ? "strong" : ""}`}>
      <span>{label}{note && <small>{note}</small>}</span>
      <span>{value}</span>
    </div>
  );
}
