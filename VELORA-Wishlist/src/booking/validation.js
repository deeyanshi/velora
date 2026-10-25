export const isValidMobile = (value) => /^[6-9][0-9]{9}$/.test(String(value || "").trim());
export const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(String(value || "").trim());
export const isValidPin = (value) => /^[1-9][0-9]{5}$/.test(String(value || "").trim());
export const isValidPan = (value) => /^[A-Z]{5}[0-9]{4}[A-Z]$/.test(String(value || "").trim().toUpperCase());
export const maskPan = (value) => { const v = String(value || "").trim().toUpperCase(); return v.length === 10 ? `XXXXXX${v.slice(-4)}` : ""; };

export function validateAge(dob, minYears = 18) {
  if (!dob) return "Enter your date of birth.";
  const date = new Date(dob);
  if (Number.isNaN(date.getTime())) return "Enter a valid date of birth.";
  const today = new Date();
  let age = today.getFullYear() - date.getFullYear();
  const beforeBirthday = today.getMonth() < date.getMonth() || (today.getMonth() === date.getMonth() && today.getDate() < date.getDate());
  if (beforeBirthday) age -= 1;
  if (date > today) return "Date of birth cannot be in the future.";
  if (age < minYears) return `Buyer must be at least ${minYears} years old.`;
  if (age > 100) return "Enter a valid date of birth.";
  return "";
}

export function validateBuyer(buyer, { financed, registrationState }) {
  const e = {};
  if (!buyer.name.trim() || buyer.name.trim().length < 2) e.name = "Enter your full name.";
  if (!isValidMobile(buyer.mobile)) e.mobile = "Enter a valid 10-digit Indian mobile number.";
  if (!isValidEmail(buyer.email)) e.email = "Enter a valid email address.";
  const dobError = validateAge(buyer.dob);
  if (dobError) e.dob = dobError;
  if (!buyer.house.trim()) e.house = "Enter house / flat.";
  if (!buyer.street.trim()) e.street = "Enter street / locality.";
  if (!buyer.city.trim()) e.city = "Enter city.";
  if (!buyer.district.trim()) e.district = "Enter district.";
  if (!buyer.state) e.state = "Select state.";
  if (!isValidPin(buyer.pin)) e.pin = "Enter a valid 6-digit PIN code.";
  if (!registrationState) e.registration = "Choose the registration state on the On-Road Price step.";
  if (buyer.pan && !isValidPan(buyer.pan)) e.pan = "PAN must look like ABCDE1234F.";
  if (financed && !buyer.pan) e.pan = "PAN is usually required by lenders for car loans.";
  return e;
}
