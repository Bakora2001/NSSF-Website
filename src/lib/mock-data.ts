export type LoanProduct = {
  code: string;
  name: string;
  category: "BOSA" | "FOSA";
  repaymentMonths: number;
  tatDays: number;
  maxMultiplier: number; // max amount = multiplier x net salary
  rate: number; // monthly interest %
  description: string;
  requiresGuarantors: boolean;
};

export const LOAN_PRODUCTS: LoanProduct[] = [
  { code: "FANISI", name: "Fanisi Loan", category: "BOSA", repaymentMonths: 84, tatDays: 2, maxMultiplier: 4, rate: 1.0, description: "Long-term development loan with extended repayment.", requiresGuarantors: true },
  { code: "SUPERSAVERS", name: "Supersavers Loan", category: "BOSA", repaymentMonths: 96, tatDays: 2, maxMultiplier: 5, rate: 1.0, description: "For loyal savers — highest borrowing ceiling.", requiresGuarantors: true },
  { code: "DEVELOPMENT", name: "Development Loan", category: "BOSA", repaymentMonths: 48, tatDays: 2, maxMultiplier: 3, rate: 1.1, description: "Build, invest, expand. Flexible terms.", requiresGuarantors: true },
  { code: "KARO", name: "Karo Loan", category: "BOSA", repaymentMonths: 36, tatDays: 2, maxMultiplier: 3, rate: 1.1, description: "Fast-track loan for active members in good standing.", requiresGuarantors: true },
  { code: "EMERGENCY", name: "Emergency Loan", category: "BOSA", repaymentMonths: 18, tatDays: 1, maxMultiplier: 2, rate: 1.2, description: "Same-day relief for urgent needs.", requiresGuarantors: false },
  { code: "SCHOOL", name: "School Fees Loan", category: "BOSA", repaymentMonths: 12, tatDays: 1, maxMultiplier: 2, rate: 1.0, description: "Cover term fees, get back to focus.", requiresGuarantors: false },
  { code: "BIMA", name: "BIMA Loan", category: "BOSA", repaymentMonths: 11, tatDays: 1, maxMultiplier: 1, rate: 1.0, description: "Pay insurance premiums in installments.", requiresGuarantors: false },
  { code: "NAWIRI", name: "Nawiri Loan", category: "BOSA", repaymentMonths: 108, tatDays: 2, maxMultiplier: 6, rate: 1.0, description: "Our longest tenure — biggest dreams.", requiresGuarantors: true },
  { code: "TWIGA", name: "Twiga Loan", category: "FOSA", repaymentMonths: 48, tatDays: 2, maxMultiplier: 4, rate: 1.3, description: "FOSA-based loan with competitive ceiling.", requiresGuarantors: true },
  { code: "JUMBO", name: "Jumbo Loan", category: "FOSA", repaymentMonths: 42, tatDays: 2, maxMultiplier: 3, rate: 1.3, description: "For Jumbo savings account holders.", requiresGuarantors: true },
  { code: "TAUSI", name: "Tausi Loan", category: "FOSA", repaymentMonths: 36, tatDays: 2, maxMultiplier: 3, rate: 1.3, description: "Balanced repayment, broad eligibility.", requiresGuarantors: false },
  { code: "MUSTARD", name: "Mustard Asset Loan", category: "FOSA", repaymentMonths: 60, tatDays: 2, maxMultiplier: 4, rate: 1.2, description: "Acquire assets — car, plot, equipment.", requiresGuarantors: true },
  { code: "MAKEOVER", name: "Makeover Loan", category: "FOSA", repaymentMonths: 12, tatDays: 2, maxMultiplier: 1, rate: 1.4, description: "Home or lifestyle improvements.", requiresGuarantors: false },
  { code: "PREMIUM", name: "Premium Advance", category: "FOSA", repaymentMonths: 36, tatDays: 1, maxMultiplier: 2, rate: 1.5, description: "Quick advance with simple terms.", requiresGuarantors: false },
  { code: "SALARY", name: "Salary Advance", category: "FOSA", repaymentMonths: 1, tatDays: 1, maxMultiplier: 1, rate: 2.0, description: "Bridge to your next payday.", requiresGuarantors: false },
  { code: "MOBILE", name: "Mobile Advance", category: "FOSA", repaymentMonths: 1, tatDays: 0, maxMultiplier: 0.5, rate: 2.5, description: "Instant via mobile banking.", requiresGuarantors: false },
];

export type Member = {
  memberNo: string;
  name: string;
  email: string;
  phone: string;
  verified: boolean;
  joined: string;
  employer: string;
  category: "A" | "B" | "C";
  totalSavings: number;
  shares: number;
  loanBalance: number;
  available: number;
  monthlyContribution: number;
};

export const MOCK_MEMBER: Member = {
  memberNo: "NSSF/123456",
  name: "John Mwangi",
  email: "john.mwangi@example.co.ke",
  phone: "+254 712 345 678",
  verified: true,
  joined: "2019-03-12",
  employer: "National Social Security Fund",
  category: "B",
  totalSavings: 245680,
  shares: 156300,
  loanBalance: 385120,
  available: 92560,
  monthlyContribution: 25000,
};

export type Payslip = {
  employer: string;
  period: string;
  grossSalary: number;
  netSalary: number;
  totalDeductions: number;
  existingLoanDeductions: number;
  pensionContribution: number;
  taxPaye: number;
};

export const MOCK_PAYSLIP: Payslip = {
  employer: "National Social Security Fund",
  period: "May 2025",
  grossSalary: 185000,
  netSalary: 124800,
  totalDeductions: 60200,
  existingLoanDeductions: 18500,
  pensionContribution: 11100,
  taxPaye: 30600,
};

export type Transaction = { date: string; description: string; type: "Credit" | "Debit"; amount: number; balance: number };

export const MOCK_TRANSACTIONS: Transaction[] = [
  { date: "2025-05-18", description: "Salary Contribution", type: "Credit", amount: 25000, balance: 92560 },
  { date: "2025-05-17", description: "Loan Repayment - Karo", type: "Debit", amount: 8560, balance: 67560 },
  { date: "2025-05-15", description: "Utility Payment - KPLC", type: "Debit", amount: 2450, balance: 76120 },
  { date: "2025-05-12", description: "FOSA Deposit", type: "Credit", amount: 10000, balance: 78570 },
  { date: "2025-05-08", description: "MPESA Withdrawal", type: "Debit", amount: 5000, balance: 68570 },
  { date: "2025-05-01", description: "Dividend Payout", type: "Credit", amount: 12400, balance: 73570 },
];

export type LoanSummaryItem = { product: string; outstanding: number; nextPayment: string };
export const MOCK_LOAN_SUMMARY: LoanSummaryItem[] = [
  { product: "Development Loan", outstanding: 250000, nextPayment: "2025-06-01" },
  { product: "Emergency Loan", outstanding: 135120, nextPayment: "2025-06-01" },
];
