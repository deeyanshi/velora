/* VELORA — car-loan maths (reducing-balance EMI). Pure functions, no UI. */

import { roundMoney } from "./format";

export const calculateMonthlyRate = (annualRate) => (Number(annualRate) || 0) / 12 / 100;
export const calculateNumberOfEmis = (years) => Math.round((Number(years) || 0) * 12);

/** EMI = P r (1+r)^N / ((1+r)^N - 1); zero interest => P / N. Returns 0 for invalid input. */
export function calculateEMI(principal, annualRate, months) {
  const P = Number(principal);
  const N = Number(months);
  const R = Number(annualRate);
  if (!Number.isFinite(P) || !Number.isFinite(N) || !Number.isFinite(R) || P <= 0 || N <= 0 || R < 0) return 0;
  if (R === 0) return roundMoney(P / N);
  const r = calculateMonthlyRate(R);
  const growth = Math.pow(1 + r, N);
  return roundMoney((P * r * growth) / (growth - 1));
}

export const calculateTotalRepayment = (emi, months) => roundMoney((Number(emi) || 0) * (Number(months) || 0));
export const calculateTotalInterest = (totalRepayment, principal) =>
  roundMoney(Math.max(0, (Number(totalRepayment) || 0) - (Number(principal) || 0)));

/** Month-by-month schedule. The last row clears the remaining balance exactly (absorbs rounding). */
export function generateAmortizationSchedule(principal, annualRate, months) {
  const P = Number(principal);
  const N = Math.round(Number(months));
  if (!Number.isFinite(P) || P <= 0 || !Number.isFinite(N) || N <= 0) return [];
  const emi = calculateEMI(P, annualRate, N);
  const r = calculateMonthlyRate(annualRate);
  const rows = [];
  let balance = P;
  for (let month = 1; month <= N; month += 1) {
    const interest = roundMoney(balance * r);
    let principalPart = roundMoney(emi - interest);
    let payment = emi;
    if (month === N || principalPart > balance) {
      principalPart = roundMoney(balance);
      payment = roundMoney(principalPart + interest);
    }
    balance = roundMoney(balance - principalPart);
    if (month === N || Math.abs(balance) < 0.5) balance = month === N ? 0 : balance;
    rows.push({ month, emi: payment, interest, principal: principalPart, balance });
  }
  return rows;
}

export function validateFinanceInputs({ principal, annualRate, years, tenureOptions, minRate = 0, maxRate = 30 }) {
  const errors = [];
  if (!Number.isFinite(Number(principal)) || Number(principal) <= 0) errors.push("Loan amount must be greater than zero.");
  const rate = Number(annualRate);
  if (!Number.isFinite(rate) || rate < minRate || rate > maxRate) errors.push(`Interest rate must be between ${minRate}% and ${maxRate}%.`);
  const tenure = Number(years);
  if (!Number.isFinite(tenure) || tenure <= 0 || (Array.isArray(tenureOptions) && !tenureOptions.includes(tenure))) errors.push("Choose a valid loan tenure.");
  return errors;
}

/** Summary for one tenure choice (used by the main card and the shorter-vs-longer comparison). */
export function summarizeLoan(principal, annualRate, years) {
  const months = calculateNumberOfEmis(years);
  const emi = calculateEMI(principal, annualRate, months);
  const totalRepayment = calculateTotalRepayment(emi, months);
  return { years, months, emi, totalRepayment, totalInterest: calculateTotalInterest(totalRepayment, principal) };
}

/** Indicative eligibility only — never an approval. */
export function estimateEligibility({ monthlyIncome, existingEmi, foirPct, annualRate, months, requestedLoan }) {
  const income = Number(monthlyIncome);
  const obligations = Number(existingEmi) || 0;
  if (!Number.isFinite(income) || income <= 0) return { status: "unknown", maxEmi: 0, indicativeLoan: 0 };
  const maxEmi = Math.max(0, roundMoney((income * (Number(foirPct) || 50)) / 100 - obligations));
  if (maxEmi <= 0) return { status: "none", maxEmi: 0, indicativeLoan: 0 };
  const r = calculateMonthlyRate(annualRate);
  const N = Number(months);
  const indicativeLoan = r === 0 ? maxEmi * N : (maxEmi * (Math.pow(1 + r, N) - 1)) / (r * Math.pow(1 + r, N));
  return {
    status: Number(requestedLoan) <= indicativeLoan ? "within" : "above",
    maxEmi,
    indicativeLoan: Math.round(indicativeLoan),
  };
}
