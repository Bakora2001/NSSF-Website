import { c as createLucideIcon } from "./Logo-BQiZWFaB.js";
const __iconNode = [
  [
    "path",
    {
      d: "M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",
      key: "1s2grr"
    }
  ],
  ["path", { d: "M20 2v4", key: "1rf3ol" }],
  ["path", { d: "M22 4h-4", key: "gwowj6" }],
  ["circle", { cx: "4", cy: "20", r: "2", key: "6kqj1y" }]
];
const Sparkles = createLucideIcon("sparkles", __iconNode);
const LOAN_PRODUCTS = [
  { code: "FANISI", name: "Fanisi Loan", category: "BOSA", repaymentMonths: 84, tatDays: 2, maxMultiplier: 4, rate: 1, description: "Long-term development loan with extended repayment.", requiresGuarantors: true },
  { code: "SUPERSAVERS", name: "Supersavers Loan", category: "BOSA", repaymentMonths: 96, tatDays: 2, maxMultiplier: 5, rate: 1, description: "For loyal savers — highest borrowing ceiling.", requiresGuarantors: true },
  { code: "DEVELOPMENT", name: "Development Loan", category: "BOSA", repaymentMonths: 48, tatDays: 2, maxMultiplier: 3, rate: 1.1, description: "Build, invest, expand. Flexible terms.", requiresGuarantors: true },
  { code: "KARO", name: "Karo Loan", category: "BOSA", repaymentMonths: 36, tatDays: 2, maxMultiplier: 3, rate: 1.1, description: "Fast-track loan for active members in good standing.", requiresGuarantors: true },
  { code: "EMERGENCY", name: "Emergency Loan", category: "BOSA", repaymentMonths: 18, tatDays: 1, maxMultiplier: 2, rate: 1.2, description: "Same-day relief for urgent needs.", requiresGuarantors: false },
  { code: "SCHOOL", name: "School Fees Loan", category: "BOSA", repaymentMonths: 12, tatDays: 1, maxMultiplier: 2, rate: 1, description: "Cover term fees, get back to focus.", requiresGuarantors: false },
  { code: "BIMA", name: "BIMA Loan", category: "BOSA", repaymentMonths: 11, tatDays: 1, maxMultiplier: 1, rate: 1, description: "Pay insurance premiums in installments.", requiresGuarantors: false },
  { code: "NAWIRI", name: "Nawiri Loan", category: "BOSA", repaymentMonths: 108, tatDays: 2, maxMultiplier: 6, rate: 1, description: "Our longest tenure — biggest dreams.", requiresGuarantors: true },
  { code: "TWIGA", name: "Twiga Loan", category: "FOSA", repaymentMonths: 48, tatDays: 2, maxMultiplier: 4, rate: 1.3, description: "FOSA-based loan with competitive ceiling.", requiresGuarantors: true },
  { code: "JUMBO", name: "Jumbo Loan", category: "FOSA", repaymentMonths: 42, tatDays: 2, maxMultiplier: 3, rate: 1.3, description: "For Jumbo savings account holders.", requiresGuarantors: true },
  { code: "TAUSI", name: "Tausi Loan", category: "FOSA", repaymentMonths: 36, tatDays: 2, maxMultiplier: 3, rate: 1.3, description: "Balanced repayment, broad eligibility.", requiresGuarantors: false },
  { code: "MUSTARD", name: "Mustard Asset Loan", category: "FOSA", repaymentMonths: 60, tatDays: 2, maxMultiplier: 4, rate: 1.2, description: "Acquire assets — car, plot, equipment.", requiresGuarantors: true },
  { code: "MAKEOVER", name: "Makeover Loan", category: "FOSA", repaymentMonths: 12, tatDays: 2, maxMultiplier: 1, rate: 1.4, description: "Home or lifestyle improvements.", requiresGuarantors: false },
  { code: "PREMIUM", name: "Premium Advance", category: "FOSA", repaymentMonths: 36, tatDays: 1, maxMultiplier: 2, rate: 1.5, description: "Quick advance with simple terms.", requiresGuarantors: false },
  { code: "SALARY", name: "Salary Advance", category: "FOSA", repaymentMonths: 1, tatDays: 1, maxMultiplier: 1, rate: 2, description: "Bridge to your next payday.", requiresGuarantors: false },
  { code: "MOBILE", name: "Mobile Advance", category: "FOSA", repaymentMonths: 1, tatDays: 0, maxMultiplier: 0.5, rate: 2.5, description: "Instant via mobile banking.", requiresGuarantors: false }
];
const MOCK_MEMBER = {
  memberNo: "NSSF/123456",
  name: "John Mwangi",
  verified: true,
  totalSavings: 245680,
  shares: 156300
};
const MOCK_PAYSLIP = {
  period: "May 2025",
  grossSalary: 185e3,
  netSalary: 124800,
  existingLoanDeductions: 18500
};
const MOCK_TRANSACTIONS = [
  { date: "2025-05-18", description: "Salary Contribution", type: "Credit", amount: 25e3, balance: 92560 },
  { date: "2025-05-17", description: "Loan Repayment - Karo", type: "Debit", amount: 8560, balance: 67560 },
  { date: "2025-05-15", description: "Utility Payment - KPLC", type: "Debit", amount: 2450, balance: 76120 },
  { date: "2025-05-12", description: "FOSA Deposit", type: "Credit", amount: 1e4, balance: 78570 },
  { date: "2025-05-08", description: "MPESA Withdrawal", type: "Debit", amount: 5e3, balance: 68570 },
  { date: "2025-05-01", description: "Dividend Payout", type: "Credit", amount: 12400, balance: 73570 }
];
const MOCK_LOAN_SUMMARY = [
  { product: "Development Loan", outstanding: 25e4, nextPayment: "2025-06-01" },
  { product: "Emergency Loan", outstanding: 135120, nextPayment: "2025-06-01" }
];
export {
  LOAN_PRODUCTS as L,
  MOCK_LOAN_SUMMARY as M,
  Sparkles as S,
  MOCK_MEMBER as a,
  MOCK_PAYSLIP as b,
  MOCK_TRANSACTIONS as c
};
