import { Card, Notice, SelectField, TextField } from "../ui";
import DocumentUpload from "./DocumentUpload";
import { listStates } from "../../pricing";

export default function DetailsStep({ draft, update, config, errors }) {
  const b = draft.buyer;
  const set = (patch) => update({ buyer: { ...b, ...patch } });
  const states = listStates(config.stateRules).filter((s) => !s.startsWith("Other"));
  const setDocs = (docs) => update({ docs });
  const ids = config.documents.identityTypes;
  const addr = config.documents.addressTypes;

  return (
    <>
      <Card title="Personal details">
        <div className="bk-grid-2">
          <TextField label="Full name" required autoComplete="name" value={b.name} onChange={(v) => set({ name: v })} error={errors.name} />
          <TextField label="Mobile number" required inputMode="numeric" maxLength={10} autoComplete="tel-national" value={b.mobile} onChange={(v) => set({ mobile: v.replace(/\D/g, "") })} error={errors.mobile} />
          <TextField label="Email" required type="email" autoComplete="email" value={b.email} onChange={(v) => set({ email: v })} error={errors.email} />
          <TextField label="Date of birth" required type="date" autoComplete="bday" max={new Date().toISOString().split("T")[0]} value={b.dob} onChange={(v) => set({ dob: v })} error={errors.dob} />
        </div>
      </Card>

      <Card title="Address">
        <div className="bk-grid-2">
          <TextField label="House / Flat" required autoComplete="address-line1" value={b.house} onChange={(v) => set({ house: v })} error={errors.house} />
          <TextField label="Street / Locality" required autoComplete="address-line2" value={b.street} onChange={(v) => set({ street: v })} error={errors.street} />
          <TextField label="City" required autoComplete="address-level2" value={b.city} onChange={(v) => set({ city: v })} error={errors.city} />
          <TextField label="District" required value={b.district} onChange={(v) => set({ district: v })} error={errors.district} />
          <SelectField label="State" required value={b.state} onChange={(v) => set({ state: v })} options={states} error={errors.state} />
          <TextField label="PIN code" required inputMode="numeric" maxLength={6} autoComplete="postal-code" value={b.pin} onChange={(v) => set({ pin: v.replace(/\D/g, "") })} error={errors.pin} />
        </div>
      </Card>

      <Card title="Registration" subtitle="Taken from the Price step. Go back to change it.">
        {errors.registration && <Notice kind="error">{errors.registration}</Notice>}
        <div className="bk-grid-3">
          <div className="bk-readonly"><span>Registration state</span><strong>{draft.state || "—"}</strong></div>
          <div className="bk-readonly"><span>Registration city</span><strong>{draft.city || "—"}</strong></div>
          <div className="bk-readonly"><span>Preferred RTO</span><strong>{draft.rto || "—"}</strong></div>
        </div>
      </Card>

      <Card title="KYC & documents" subtitle="Accepted documents vary by lender and RTO. Aadhaar is one accepted option, not a requirement for every booking.">
        <Notice kind="warn">Demo upload: files are not saved or sent anywhere. A real VELORA backend must handle secure document storage and KYC.</Notice>
        <div className="bk-grid-2">
          <TextField label="PAN (optional, required for car loans)" value={b.pan} maxLength={10} onChange={(v) => set({ pan: v.toUpperCase() })} error={errors.pan} hint="Only the last 4 characters are kept after booking." autoComplete="off" />
        </div>
        <div className="bk-grid-2">
          <SelectField label="Identity proof type" required value={b.identityType} onChange={(v) => set({ identityType: v })} options={ids} error={errors.identityType} />
          <SelectField label="Address proof type" required value={b.addressType} onChange={(v) => set({ addressType: v })} options={addr} error={errors.addressType} />
        </div>
        <DocumentUpload docKey="identity" label="Identity proof" docs={draft.docs} setDocs={setDocs} />
        <DocumentUpload docKey="address" label="Address proof" docs={draft.docs} setDocs={setDocs} />
        {errors.docs && <p className="bk-error" role="alert">{errors.docs}</p>}
      </Card>
    </>
  );
}
