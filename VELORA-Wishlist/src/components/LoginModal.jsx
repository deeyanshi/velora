import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";

export default function LoginModal({ open, onClose }) {
  const { register, login, calculateAge } = useAuth();
  const [mode, setMode] = useState("login");
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showSignupPassword, setShowSignupPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginForm, setLoginForm] = useState({ email: "", password: "", rememberMe: false });
  useEffect(() => {
    if (open) {
      setMode("login");
      setShowLoginPassword(false);
      setShowSignupPassword(false);
      setShowConfirmPassword(false);
    }
  }, [open]);

  const [signupForm, setSignupForm] = useState({
    name: "",
    dob: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pin: "",
    license: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  if (!open) return null;

  const updateLogin = (event) => {
    const { name, value, checked, type } = event.target;
    setLoginForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const updateSignup = (event) => {
    const { name, value, checked, type } = event.target;
    setSignupForm((current) => ({
      ...current,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const switchMode = (nextMode) => {
    setMode(nextMode);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = loginForm.email.trim();
    const password = loginForm.password.trim();

    if (!email || !password) {
      alert("Please enter your email and password.");
      return;
    }

    const result = login(email, password);
    if (!result.ok) {
      alert(result.message);
      return;
    }

    alert(`Login successful!\n\nWelcome back, ${result.user.name}.`);
    setLoginForm({ email: "", password: "", rememberMe: false });
    onClose();
  };

  const handleForgotPassword = (event) => {
    event.preventDefault();
    const email = window.prompt("Enter your registered email address:");
    if (email !== null && email.trim() !== "") {
      alert(`If an account exists for ${email}, a password reset link would be sent.`);
    }
  };

  const handleSignup = (event) => {
    event.preventDefault();

    const fullName = signupForm.name.trim();
    const email = signupForm.email.trim();
    const password = signupForm.password;
    const confirmPassword = signupForm.confirmPassword;

    if (password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    const age = calculateAge(signupForm.dob);
    if (age < 18) {
      alert("You must be at least 18 years old to book a car.");
      return;
    }

    if (!/^[0-9]{10}$/.test(signupForm.phone)) {
      alert("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!/^[0-9]{6}$/.test(signupForm.pin)) {
      alert("Please enter a valid 6-digit PIN / ZIP code.");
      return;
    }

    if (!signupForm.terms) {
      alert("Please agree to the Terms & Conditions and Privacy Policy.");
      return;
    }

    const result = register({
      name: fullName,
      email,
      password,
      dob: signupForm.dob,
    });

    if (!result.ok) {
      alert(result.message);
      setMode("login");
      return;
    }

    alert(`Welcome to VELORA, ${fullName}!\n\nYour account has been created successfully.`);

    setSignupForm({
      name: "",
      dob: "",
      gender: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      pin: "",
      license: "",
      password: "",
      confirmPassword: "",
      terms: false,
    });
    onClose();
  };

  return (
    <div
      className="login-overlay active"
      id="loginModal"
      role="presentation"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="login-box" role="dialog" aria-modal="true" aria-label="VELORA account">
        <button className="login-close" onClick={onClose} type="button" aria-label="Close">
          ×
        </button>

        <div className="login-intro">
          <div className="velora-small-logo">VELORA</div>
          <h2>
            Your Journey <span>Starts Here.</span>
          </h2>
          <p>
            Create your VELORA account and enjoy a seamless car-booking experience with access to
            premium vehicles from trusted brands.
          </p>

          <div className="login-benefits">
            <div className="benefit"><span>✓</span><p>Easy and fast car booking</p></div>
            <div className="benefit"><span>✓</span><p>Save your favourite vehicles</p></div>
            <div className="benefit"><span>✓</span><p>Manage your bookings easily</p></div>
            <div className="benefit"><span>✓</span><p>Secure customer account</p></div>
          </div>
        </div>

        <div className="login-form-area">
          <div className="login-tabs">
            <button
              className={`login-tab ${mode === "login" ? "active" : ""}`}
              type="button"
              onClick={() => switchMode("login")}
            >
              Login
            </button>
            <button
              className={`login-tab ${mode === "signup" ? "active" : ""}`}
              type="button"
              onClick={() => switchMode("signup")}
            >
              Create Account
            </button>
          </div>

          {mode === "login" ? (
            <form className="account-form" id="loginForm" onSubmit={handleLogin}>
              <h3>Welcome Back</h3>
              <p className="form-subtitle">Login to continue your journey with VELORA.</p>

              <div className="form-group">
                <label htmlFor="loginEmail">Email Address</label>
                <input
                  id="loginEmail"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={loginForm.email}
                  onChange={updateLogin}
                />
              </div>

              <div className="form-group">
                <label htmlFor="loginPassword">Password</label>
                <div className="password-field">
                  <input
                    id="loginPassword"
                    name="password"
                    type={showLoginPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    required
                    value={loginForm.password}
                    onChange={updateLogin}
                  />
                  <button
                    className="show-password"
                    type="button"
                    onClick={() => setShowLoginPassword((value) => !value)}
                  >
                    {showLoginPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <div className="login-options">
                <label className="remember-me">
                  <input
                    id="rememberMe"
                    name="rememberMe"
                    type="checkbox"
                    checked={loginForm.rememberMe}
                    onChange={updateLogin}
                  />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" onClick={handleForgotPassword}>Forgot Password?</a>
              </div>

              <button className="account-button" type="submit">Login to VELORA</button>

              <p className="switch-account">
                Don't have an account?{" "}
                <a href="#signup" onClick={(event) => { event.preventDefault(); switchMode("signup"); }}>
                  Create Account
                </a>
              </p>
            </form>
          ) : (
            <form className="account-form" id="signupForm" onSubmit={handleSignup}>
              <h3>Create Your Account</h3>
              <p className="form-subtitle">Join VELORA and start booking your perfect car.</p>

              <div className="form-section-title">Personal Information</div>

              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input id="fullName" name="name" type="text" placeholder="Enter your full name" required value={signupForm.name} onChange={updateSignup} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="dob">Date of Birth</label>
                  <input id="dob" name="dob" type="date" required value={signupForm.dob} onChange={updateSignup} />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select id="gender" name="gender" required value={signupForm.gender} onChange={updateSignup}>
                    <option value="">Select</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                    <option value="Prefer not to say">Prefer not to say</option>
                  </select>
                </div>
              </div>

              <div className="form-section-title">Contact Information</div>

              <div className="form-group">
                <label htmlFor="signupEmail">Email Address</label>
                <input id="signupEmail" name="email" type="email" placeholder="example@email.com" required value={signupForm.email} onChange={updateSignup} />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input id="phone" name="phone" type="tel" inputMode="numeric" maxLength="10" pattern="[0-9]{10}" placeholder="Enter your phone number" required value={signupForm.phone} onChange={updateSignup} />
                <small>Enter a 10-digit phone number.</small>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address</label>
                <textarea id="address" name="address" rows="3" placeholder="House/Flat number, street, area" required value={signupForm.address} onChange={updateSignup} />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="city">City</label>
                  <input id="city" name="city" type="text" placeholder="Enter city" required value={signupForm.city} onChange={updateSignup} />
                </div>
                <div className="form-group">
                  <label htmlFor="state">State</label>
                  <input id="state" name="state" type="text" placeholder="Enter state" required value={signupForm.state} onChange={updateSignup} />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="pin">PIN / ZIP Code</label>
                <input id="pin" name="pin" type="text" maxLength="6" placeholder="Enter PIN / ZIP code" required value={signupForm.pin} onChange={updateSignup} />
              </div>

              <div className="form-section-title">Driving Information</div>

              <div className="form-group">
                <label htmlFor="license">Driving Licence Number</label>
                <input id="license" name="license" type="text" placeholder="Enter your licence number" required value={signupForm.license} onChange={updateSignup} />
              </div>

              <div className="form-section-title">Account Security</div>

              <div className="form-group">
                <label htmlFor="signupPassword">Password</label>
                <div className="password-field">
                  <input
                    id="signupPassword"
                    name="password"
                    type={showSignupPassword ? "text" : "password"}
                    minLength="8"
                    placeholder="Create a password"
                    required
                    value={signupForm.password}
                    onChange={updateSignup}
                  />
                  <button className="show-password" type="button" onClick={() => setShowSignupPassword((value) => !value)}>
                    {showSignupPassword ? "Hide" : "Show"}
                  </button>
                </div>
                <small>Password must contain at least 8 characters.</small>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <div className="password-field">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    required
                    value={signupForm.confirmPassword}
                    onChange={updateSignup}
                  />
                  <button className="show-password" type="button" onClick={() => setShowConfirmPassword((value) => !value)}>
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>
              </div>

              <label className="terms-checkbox">
                <input id="terms" name="terms" type="checkbox" required checked={signupForm.terms} onChange={updateSignup} />
                <span>
                  I agree to the <a href="#policies" onClick={onClose}>Terms &amp; Conditions</a> and{" "}
                  <a href="#policies" onClick={onClose}>Privacy Policy</a>.
                </span>
              </label>

              <button className="account-button" type="submit">Create VELORA Account</button>

              <p className="switch-account">
                Already have an account?{" "}
                <a href="#login" onClick={(event) => { event.preventDefault(); switchMode("login"); }}>
                  Login
                </a>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
