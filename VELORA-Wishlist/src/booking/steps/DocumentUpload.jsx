import { useId, useState } from "react";

const MAX_BYTES = 5 * 1024 * 1024;
const ACCEPT = ".pdf,.jpg,.jpeg,.png";

/* UI + state flow only. The chosen file is NOT read, stored or sent anywhere: only its name/size are
   kept in memory so the form can be validated. A real secure upload service must replace onPick(). */
export default function DocumentUpload({ docKey, label, docs, setDocs, required = true, hint }) {
  const id = useId();
  const [error, setError] = useState("");
  const current = docs[docKey];

  const onPick = (event) => {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    if (file.size > MAX_BYTES) return setError("File is larger than 5 MB.");
    if (!/\.(pdf|jpe?g|png)$/i.test(file.name)) return setError("Upload a PDF, JPG or PNG file.");
    setError("");
    setDocs({ ...docs, [docKey]: { name: file.name, size: file.size } });
  };

  const remove = () => {
    const next = { ...docs };
    delete next[docKey];
    setDocs(next);
  };

  return (
    <div className={`bk-doc ${current ? "done" : ""}`}>
      <div className="bk-doc-text">
        <strong>{label}{required && <span className="req"> *</span>}</strong>
        {hint && <small>{hint}</small>}
        {current && <small className="bk-doc-file">📎 {current.name} · {(current.size / 1024).toFixed(0)} KB</small>}
        {error && <small className="bk-error" role="alert">{error}</small>}
      </div>
      <div className="bk-doc-actions">
        <input id={id} type="file" accept={ACCEPT} onChange={onPick} hidden />
        <label htmlFor={id} className="bk-btn bk-btn-ghost" role="button" tabIndex={0}
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); document.getElementById(id)?.click(); } }}>
          {current ? "Replace" : "Upload"}
        </label>
        {current && <button type="button" className="bk-link" onClick={remove}>Remove</button>}
      </div>
    </div>
  );
}
