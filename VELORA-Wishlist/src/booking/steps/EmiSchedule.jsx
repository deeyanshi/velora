import { useMemo, useState } from "react";
import { generateAmortizationSchedule, inr } from "../../pricing";

export default function EmiSchedule({ principal, rate, months }) {
  const [open, setOpen] = useState(false);
  const rows = useMemo(() => (open ? generateAmortizationSchedule(principal, rate, months) : []), [open, principal, rate, months]);
  return (
    <div className="bk-schedule">
      <button type="button" className="bk-btn bk-btn-ghost" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        {open ? "HIDE EMI SCHEDULE" : "VIEW EMI SCHEDULE"}
      </button>
      {open && (
        <div className="bk-table-scroll" tabIndex={0} aria-label="EMI amortization schedule">
          <table className="bk-table">
            <thead><tr><th scope="col">Month</th><th scope="col">EMI</th><th scope="col">Interest</th><th scope="col">Principal</th><th scope="col">Balance</th></tr></thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.month}><td>{r.month}</td><td>{inr(r.emi)}</td><td>{inr(r.interest)}</td><td>{inr(r.principal)}</td><td>{inr(r.balance)}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
