import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext(null);
const USERS_KEY = "velora_users";
const SESSION_KEY = "velora_session";

function readUsers() {
  try {
    const value = JSON.parse(localStorage.getItem(USERS_KEY) || "[]");
    return Array.isArray(value) ? value : [];
  } catch {
    return [];
  }
}

function writeUsers(users) {
  try {
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
  } catch {
    // Keep the demo usable if storage is unavailable.
  }
}

function readSession() {
  try {
    return JSON.parse(localStorage.getItem(SESSION_KEY) || "null");
  } catch {
    return null;
  }
}

function writeSession(session) {
  try {
    if (session) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  } catch {
    // Ignore storage errors.
  }
}

function getInitials(name = "") {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return "";
  const first = parts[0][0] || "";
  const last = parts.length > 1 ? parts[parts.length - 1][0] : "";
  return (first + last).toUpperCase();
}

function calculateAge(dateOfBirth) {
  const birthDate = new Date(dateOfBirth);
  const today = new Date();
  if (Number.isNaN(birthDate.getTime())) return -1;

  let age = today.getFullYear() - birthDate.getFullYear();
  const month = today.getMonth() - birthDate.getMonth();

  if (month < 0 || (month === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

export function AuthProvider({ children }) {
  const [session, setSessionState] = useState(readSession);

  useEffect(() => {
    const handleStorage = (event) => {
      if (event.key === SESSION_KEY) {
        setSessionState(readSession());
      }
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  const register = (user) => {
    const users = readUsers();
    if (users.some((item) => item.email.toLowerCase() === user.email.trim().toLowerCase())) {
      return { ok: false, message: "An account already exists for that email. Please login instead." };
    }

    const normalizedUser = {
      name: user.name.trim(),
      email: user.email.trim(),
      password: user.password,
      dob: user.dob,
    };

    users.push(normalizedUser);
    writeUsers(users);

    const nextSession = {
      name: normalizedUser.name,
      email: normalizedUser.email,
    };
    writeSession(nextSession);
    setSessionState(nextSession);

    return { ok: true };
  };

  const login = (email, password) => {
    const target = email.trim().toLowerCase();
    const user = readUsers().find((item) => item.email.toLowerCase() === target);

    if (!user || user.password !== password.trim()) {
      return {
        ok: false,
        message:
          "We couldn't find an account with that email and password. Please check your details, or create an account instead.",
      };
    }

    const nextSession = { name: user.name, email: user.email };
    writeSession(nextSession);
    setSessionState(nextSession);
    return { ok: true, user: nextSession };
  };

  const logout = () => {
    writeSession(null);
    setSessionState(null);
  };

  const value = useMemo(
    () => ({
      session,
      initials: getInitials(session?.name),
      register,
      login,
      logout,
      calculateAge,
    }),
    [session]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
