import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/resources/calculator")({
  head: () => ({
    meta: [
      { title: "Financial Calculators — NSSF SACCO" },
      { name: "description", content: "Estimate your loan payments, interest rates, and dividend returns with NSSF SACCO calculators." },
    ],
  }),
  component: CalculatorPage,
});

/* ─── Loan Types Data ────────────────────────────────────────────────────── */
interface LoanType {
  id: string;
  name: string;
  category: "BOSA" | "FOSA";
  rate: number;
  isMonthlyRate: boolean;
  method: "reducing" | "flat";
  minTerm: number;
  maxTerm: number;
  minAmount: number;
  maxAmount: number;
  guarantors: number;
}

const LOAN_TYPES: LoanType[] = [
  { id: "dev", name: "Development Loan", category: "BOSA", rate: 0.12, isMonthlyRate: false, method: "reducing", minTerm: 1, maxTerm: 48, minAmount: 5000, maxAmount: 10000000, guarantors: 2 },
  { id: "emergency", name: "Emergency Loan", category: "BOSA", rate: 0.15, isMonthlyRate: false, method: "reducing", minTerm: 1, maxTerm: 18, minAmount: 5000, maxAmount: 200000, guarantors: 2 },
  { id: "fees", name: "School Fees Loan", category: "BOSA", rate: 0.15, isMonthlyRate: false, method: "reducing", minTerm: 1, maxTerm: 24, minAmount: 5000, maxAmount: 200000, guarantors: 2 },
  { id: "super", name: "Supersaver's Loan", category: "BOSA", rate: 0.132, isMonthlyRate: false, method: "reducing", minTerm: 1, maxTerm: 96, minAmount: 1500000, maxAmount: 15000000, guarantors: 2 },
  { id: "flex", name: "Special Flex Loan", category: "BOSA", rate: 0.15, isMonthlyRate: false, method: "reducing", minTerm: 1, maxTerm: 48, minAmount: 5000, maxAmount: 5000000, guarantors: 2 },
  { id: "jumbo", name: "Jumbo Loan", category: "FOSA", rate: 0.135, isMonthlyRate: false, method: "reducing", minTerm: 1, maxTerm: 42, minAmount: 5000, maxAmount: 800000, guarantors: 2 },
  { id: "advance", name: "Salary Advance Loan", category: "FOSA", rate: 0.06, isMonthlyRate: true, method: "flat", minTerm: 1, maxTerm: 1, minAmount: 5000, maxAmount: 50000, guarantors: 1 },
  { id: "twiga", name: "FOSA Twiga Loan", category: "FOSA", rate: 0.135, isMonthlyRate: false, method: "reducing", minTerm: 1, maxTerm: 48, minAmount: 5000, maxAmount: 1200000, guarantors: 2 },
  { id: "tausi", name: "Tausi Loan", category: "FOSA", rate: 0.135, isMonthlyRate: false, method: "flat", minTerm: 1, maxTerm: 36, minAmount: 5000, maxAmount: 1000000, guarantors: 2 },
  { id: "mustard", name: "Mustard Asset Loan", category: "FOSA", rate: 0.145, isMonthlyRate: false, method: "reducing", minTerm: 1, maxTerm: 60, minAmount: 5000, maxAmount: 2500000, guarantors: 2 },
  { id: "makeover", name: "MakeOver Loan", category: "FOSA", rate: 0.145, isMonthlyRate: false, method: "reducing", minTerm: 1, maxTerm: 12, minAmount: 5000, maxAmount: 300000, guarantors: 2 },
  { id: "bima", name: "BIMA Loan", category: "FOSA", rate: 0.06, isMonthlyRate: false, method: "reducing", minTerm: 1, maxTerm: 11, minAmount: 5000, maxAmount: 500000, guarantors: 2 },
];

const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function CalculatorPage() {
  const [activeTab, setActiveTab] = useState<"loan" | "dividend">("loan");

  /* ─── Loan Calculator States ────────────────────────────────────────────── */
  const [selectedLoanId, setSelectedLoanId] = useState("dev");
  const [loanAmount, setLoanAmount] = useState<number>(500000);
  const [loanTerm, setLoanTerm] = useState<number>(48);
  const [showSchedule, setShowSchedule] = useState(false);

  const selectedLoan = useMemo(() => {
    return LOAN_TYPES.find(l => l.id === selectedLoanId) || LOAN_TYPES[0];
  }, [selectedLoanId]);

  const handleLoanTypeChange = (id: string) => {
    setSelectedLoanId(id);
    const loan = LOAN_TYPES.find(l => l.id === id) || LOAN_TYPES[0];
    if (loanAmount < loan.minAmount) setLoanAmount(loan.minAmount);
    if (loanAmount > loan.maxAmount) setLoanAmount(loan.maxAmount);
    if (loanTerm < loan.minTerm) setLoanTerm(loan.minTerm);
    if (loanTerm > loan.maxTerm) setLoanTerm(loan.maxTerm);
  };

  /* ─── Dividend Calculator States ────────────────────────────────────────── */
  const [openingBalance, setOpeningBalance] = useState<number>(0);
  const [shareCapital, setShareCapital] = useState<number>(0);
  const [monthlySavings] = useState<Record<string, number>>(
    MONTHS.reduce((acc, month) => ({ ...acc, [month]: 0 }), {})
  );

  /* ─── Calculations ──────────────────────────────────────────────────────── */
  const loanResults = useMemo(() => {
    const principal = loanAmount;
    const term = loanTerm;
    const rate = selectedLoan.rate;
    const isMonthly = selectedLoan.isMonthlyRate;
    const method = selectedLoan.method;

    let monthlyPayment = 0;
    let totalPayable = 0;
    let totalInterest = 0;
    const schedule: { month: number; payment: number; principal: number; interest: number; balance: number }[] = [];

    if (method === "flat") {
      const monthlyRate = isMonthly ? rate : rate / 12;
      const interestPerMonth = principal * monthlyRate;
      const principalPerMonth = principal / term;
      monthlyPayment = principalPerMonth + interestPerMonth;
      totalInterest = interestPerMonth * term;
      totalPayable = principal + totalInterest;

      let remainingBalance = principal;
      for (let i = 1; i <= term; i++) {
        remainingBalance -= principalPerMonth;
        schedule.push({
          month: i,
          payment: monthlyPayment,
          principal: principalPerMonth,
          interest: interestPerMonth,
          balance: Math.max(0, remainingBalance),
        });
      }
    } else {
      const monthlyRate = rate / 12;
      monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
      totalPayable = monthlyPayment * term;
      totalInterest = totalPayable - principal;

      let remainingBalance = principal;
      for (let i = 1; i <= term; i++) {
        const interestForMonth = remainingBalance * monthlyRate;
        const principalForMonth = monthlyPayment - interestForMonth;
        remainingBalance -= principalForMonth;
        schedule.push({
          month: i,
          payment: monthlyPayment,
          principal: principalForMonth,
          interest: interestForMonth,
          balance: Math.max(0, remainingBalance),
        });
      }
    }

    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalPayable),
      schedule,
    };
  }, [loanAmount, loanTerm, selectedLoan]);

  const dividendResults = useMemo(() => {
    const depositInterestRate = 0.09;
    const shareCapitalRate = 0.15;
    const taxRate = 0.05;

    const shareGross = shareCapital * shareCapitalRate;
    const shareTax = shareGross * taxRate;
    const shareNet = shareGross - shareTax;

    let cumulativeDeposits = openingBalance;
    const monthDetails: { month: string; contribution: number; balance: number; weight: number; qualifying: number; gross: number; tax: number; net: number }[] = [];

    const openingGross = openingBalance * depositInterestRate;
    const openingTax = openingGross * taxRate;
    const openingNet = openingGross - openingTax;
    monthDetails.push({
      month: "Opening Balance",
      contribution: openingBalance,
      balance: openingBalance,
      weight: 12,
      qualifying: openingBalance,
      gross: openingGross,
      tax: openingTax,
      net: openingNet,
    });

    let totalSavingsContribution = openingBalance;
    let totalGrossSavingsInterest = openingGross;

    MONTHS.forEach((month, idx) => {
      const contrib = monthlySavings[month] || 0;
      totalSavingsContribution += contrib;
      cumulativeDeposits += contrib;

      const monthsQualified = 11 - idx;
      const weight = monthsQualified / 12;
      const qualifyingAmt = contrib * weight;
      const gross = qualifyingAmt * depositInterestRate;
      const tax = gross * taxRate;
      const net = gross - tax;

      totalGrossSavingsInterest += gross;

      monthDetails.push({
        month,
        contribution: contrib,
        balance: cumulativeDeposits,
        weight: monthsQualified,
        qualifying: qualifyingAmt,
        gross,
        tax,
        net,
      });
    });

    const totalSavingsTax = totalGrossSavingsInterest * taxRate;
    const totalSavingsNet = totalGrossSavingsInterest - totalSavingsTax;

    const grandGross = shareGross + totalGrossSavingsInterest;
    const grandTax = shareTax + totalSavingsTax;
    const grandNet = shareNet + totalSavingsNet;

    return {
      shareGross, shareTax, shareNet,
      totalSavingsContribution,
      totalGrossSavingsInterest, totalSavingsTax, totalSavingsNet,
      grandGross, grandTax, grandNet,
      monthDetails,
    };
  }, [openingBalance, shareCapital, monthlySavings]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <PublicLayout>
      {/* ── Dark Green Hero Header (matches image) ── */}
      <div className="relative bg-[#1a4a43] overflow-hidden rounded-b-[2rem] print:hidden">
        {/* Decorative lines / circuit graphic on right */}
        <div
          className="absolute inset-y-0 right-0 w-[45%] opacity-35 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='400' height='200' viewBox='0 0 400 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0,50 Q100,0 200,50 T400,50 M0,80 Q120,30 240,80 T400,80 M0,110 Q140,60 280,110 T400,110 M0,140 Q160,90 320,140 T400,140' fill='none' stroke='%23F5B83C' stroke-width='1.5' stroke-dasharray='1 4'/%3E%3Ccircle cx='150' cy='30' r='3' fill='%23F5B83C'/%3E%3Ccircle cx='280' cy='90' r='3.5' fill='%23F5B83C'/%3E%3Ccircle cx='340' cy='120' r='2.5' fill='%23F5B83C'/%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "right center",
          }}
        />

        <div className="mx-auto max-w-7xl px-8 py-10 relative z-10">
          {/* Logo mark + title */}
          <div className="flex items-center gap-3.5 mb-2">
            <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center shadow-inner border border-white/20">
              <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                <path d="M20 6 L34 20 L20 34 L6 20 Z" stroke="#F5B83C" strokeWidth="2.5" />
                <path d="M20 12 L28 20 L20 28 L12 20 Z" fill="#F5B83C" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight">Calculator</h1>
              <p className="text-xs text-white/80 mt-0.5 font-medium">Use our financial calculators to plan your loans and savings.</p>
            </div>
          </div>
          <nav className="flex items-center gap-1.5 text-[11px] text-white/60 font-semibold mt-3">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-white/60">Resources</span>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-[#F5B83C] font-extrabold">Calculator</span>
          </nav>
        </div>
      </div>

      {/* Printable Report Styles and Wrapper */}
      <div className="mx-auto max-w-7xl px-6 py-6 print:p-0">
        
        {/* Main white card block */}
        <div className="bg-white rounded-3xl border border-border shadow-elegant p-6 md:p-8 -mt-6 relative z-20">
          
          {/* Tab Switcher - matches image */}
          <div className="flex border-b border-border/60 mb-6 print:hidden">
            <button
              onClick={() => setActiveTab("loan")}
              className={`px-5 py-3 text-xs font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === "loan"
                  ? "border-[#286d65] text-[#286d65]"
                  : "border-transparent text-muted-foreground hover:text-[#286d65]"
              }`}
            >
              <span className="text-[#286d65]">⊙</span> Loan Calculator
            </button>
            <button
              onClick={() => setActiveTab("dividend")}
              className={`px-5 py-3 text-xs font-bold transition-all border-b-2 flex items-center gap-2 ${
                activeTab === "dividend"
                  ? "border-[#286d65] text-[#286d65]"
                  : "border-transparent text-muted-foreground hover:text-[#286d65]"
              }`}
            >
              Dividend Calculator
            </button>
          </div>

          {activeTab === "loan" && (
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              
              {/* Column 1: Loan Details */}
              <div className="space-y-5 border border-border/40 rounded-2xl p-5 bg-slate-50/50">
                <h3 className="font-display font-extrabold text-sm text-[#286d65] mb-2">Loan Details</h3>
                
                {/* Loan Type */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Loan Type</label>
                  <select
                    value={selectedLoanId}
                    onChange={(e) => handleLoanTypeChange(e.target.value)}
                    className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-xs font-bold text-foreground focus:outline-none focus:border-[#286d65]"
                  >
                    {LOAN_TYPES.map((l) => (
                      <option key={l.id} value={l.id}>{l.name}</option>
                    ))}
                  </select>
                </div>

                {/* Amount */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Loan Amount (KES)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={loanAmount}
                      min={selectedLoan.minAmount}
                      max={selectedLoan.maxAmount}
                      onChange={(e) => setLoanAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                      className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-xs font-bold text-foreground focus:outline-none focus:border-[#286d65]"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs font-bold cursor-pointer">⇅</span>
                  </div>
                  <span className="text-[9.5px] text-muted-foreground font-semibold">Min: Ksh 5,000 - Max: Ksh 30,000,000</span>
                </div>

                {/* Term */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Loan Period (Months)</label>
                  <div className="relative">
                    <input
                      type="number"
                      value={loanTerm}
                      min={selectedLoan.minTerm}
                      max={selectedLoan.maxTerm}
                      onChange={(e) => setLoanTerm(Math.max(0, parseInt(e.target.value) || 0))}
                      className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-xs font-bold text-foreground focus:outline-none focus:border-[#286d65]"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs font-bold cursor-pointer">⇅</span>
                  </div>
                  <span className="text-[9.5px] text-muted-foreground font-semibold">Min: 1 month - Max: 48 months</span>
                </div>

                {/* Interest Rate */}
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Interest Rate</label>
                  <div className="relative">
                    <input
                      type="text"
                      disabled
                      value={`${selectedLoan.rate * 100}%`}
                      className="w-full rounded-xl border border-border bg-slate-100/80 px-3 py-2.5 text-xs font-extrabold text-[#286d65] focus:outline-none"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground text-xs font-bold">⇅</span>
                  </div>
                  <span className="text-[9.5px] text-muted-foreground font-semibold">Annual interest rate based on selected loan type</span>
                </div>
              </div>

              {/* Column 2: Results */}
              <div className="space-y-4 border border-border/40 rounded-2xl p-5 bg-[#fbfdfc] flex flex-col justify-between h-full">
                <div>
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-display font-extrabold text-sm text-[#286d65]">Results</h3>
                    <span className="text-xs text-muted-foreground">📈</span>
                  </div>

                  <div className="space-y-3.5">
                    {/* Monthly Payment */}
                    <div className="flex justify-between items-center border border-slate-100 rounded-xl p-3 bg-white shadow-sm">
                      <span className="text-xs font-bold text-muted-foreground">Monthly Payment</span>
                      <span className="text-sm font-extrabold text-foreground">KES {loanResults.monthlyPayment.toLocaleString()}</span>
                    </div>

                    {/* Principal Amount */}
                    <div className="flex justify-between items-center border border-slate-100 rounded-xl p-3 bg-white shadow-sm">
                      <span className="text-xs font-bold text-muted-foreground">Principal Amount</span>
                      <span className="text-sm font-extrabold text-foreground">KES {loanAmount.toLocaleString()}</span>
                    </div>

                    {/* Total Interest */}
                    <div className="flex justify-between items-center border border-slate-100 rounded-xl p-3 bg-white shadow-sm">
                      <span className="text-xs font-bold text-muted-foreground">Total Interest</span>
                      <span className="text-sm font-extrabold text-foreground">KES {loanResults.totalInterest.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                {/* Total Payable Box (dark green solid block) */}
                <div className="bg-[#1a4a43] rounded-2xl p-4 mt-6 text-white flex justify-between items-center shadow-inner">
                  <span className="text-xs font-bold text-white/80">Total Payable</span>
                  <span className="text-lg font-extrabold text-[#F5B83C]">KES {loanResults.totalPayable.toLocaleString()}</span>
                </div>
              </div>

              {/* Column 3: Loan Information */}
              <div className="border border-border/40 rounded-2xl p-5 bg-[#fbfdfc] h-full space-y-4">
                <h3 className="font-display font-extrabold text-sm text-[#286d65]">Loan Information</h3>
                
                <ul className="space-y-4">
                  {[
                    `${selectedLoan.name} (${selectedLoan.category} Loan)`,
                    `Interest Rate: ${selectedLoan.rate * 100}% p.a.`,
                    `Method: ${selectedLoan.method === "reducing" ? "Reducing Balance" : "Flat Rate"}`,
                    `Repayment Period: 1 - ${selectedLoan.maxTerm} Months`,
                    `Guarantors Required: ${selectedLoan.guarantors}`,
                    `Repayment Frequency: Monthly`,
                  ].map((info, idx) => (
                    <li key={idx} className="flex gap-2.5 text-xs text-muted-foreground font-semibold items-start leading-tight">
                      <span className="text-[#286d65] shrink-0 mt-0.5">◆</span>
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          )}

          {/* Tab 2: Dividend Calculator */}
          {activeTab === "dividend" && (
            <div className="grid lg:grid-cols-3 gap-8 items-start">
              {/* Dividend Column 1: Inputs */}
              <div className="space-y-5 border border-border/40 rounded-2xl p-5 bg-slate-50/50">
                <h3 className="font-display font-extrabold text-sm text-[#286d65] mb-2">Savings Details</h3>
                
                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Opening Savings Balance</label>
                  <input
                    type="number"
                    value={openingBalance}
                    onChange={(e) => setOpeningBalance(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-xs font-bold text-foreground focus:outline-none focus:border-[#286d65]"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Total Share Capital</label>
                  <input
                    type="number"
                    value={shareCapital}
                    onChange={(e) => setShareCapital(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-xs font-bold text-foreground focus:outline-none focus:border-[#286d65]"
                  />
                </div>
              </div>

              {/* Dividend Column 2: Results */}
              <div className="space-y-4 border border-border/40 rounded-2xl p-5 bg-[#fbfdfc] flex flex-col justify-between h-full">
                <div>
                  <h3 className="font-display font-extrabold text-sm text-[#286d65] mb-4">Estimated Return</h3>
                  <div className="space-y-3.5">
                    <div className="flex justify-between items-center border border-slate-100 rounded-xl p-3 bg-white shadow-sm">
                      <span className="text-xs font-bold text-muted-foreground">Total Deposit Contribution</span>
                      <span className="text-sm font-extrabold text-foreground">KES {Math.round(dividendResults.totalSavingsContribution).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center border border-slate-100 rounded-xl p-3 bg-white shadow-sm">
                      <span className="text-xs font-bold text-muted-foreground">Deposits Interest (9% p.a.)</span>
                      <span className="text-sm font-extrabold text-foreground">KES {Math.round(dividendResults.totalSavingsNet).toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between items-center border border-slate-100 rounded-xl p-3 bg-white shadow-sm">
                      <span className="text-xs font-bold text-muted-foreground">Shares Dividend (15% p.a.)</span>
                      <span className="text-sm font-extrabold text-foreground">KES {Math.round(dividendResults.shareNet).toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1a4a43] rounded-2xl p-4 mt-6 text-white flex justify-between items-center shadow-inner">
                  <span className="text-xs font-bold text-white/80">Estimated Net Return</span>
                  <span className="text-lg font-extrabold text-[#F5B83C]">KES {Math.round(dividendResults.grandNet).toLocaleString()}</span>
                </div>
              </div>

              {/* Dividend Column 3: Information */}
              <div className="border border-border/40 rounded-2xl p-5 bg-[#fbfdfc] h-full space-y-4">
                <h3 className="font-display font-extrabold text-sm text-[#286d65]">Dividend Policy</h3>
                <ul className="space-y-4">
                  {[
                    "Deposit Interest Rebate Rate: 9.00% p.a.",
                    "Share Capital Return Rate: 15.00% p.a.",
                    "Withholding Tax Deduction: 5.00%",
                    "Calculated on pro-rata weighted monthly basis.",
                  ].map((info, idx) => (
                    <li key={idx} className="flex gap-2.5 text-xs text-muted-foreground font-semibold items-start leading-tight">
                      <span className="text-[#286d65] shrink-0 mt-0.5">◆</span>
                      <span>{info}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {/* Action Row - matches image */}
          <div className="flex flex-wrap justify-end gap-3 mt-8 pt-6 border-t border-border/60 print:hidden">
            <button
              onClick={() => {
                setLoanAmount(500000);
                setLoanTerm(48);
                setOpeningBalance(0);
                setShareCapital(0);
              }}
              className="rounded-xl border border-border hover:border-[#286d65] hover:text-[#286d65] px-6 py-2.5 text-xs font-bold text-muted-foreground transition-all bg-white"
            >
              Reset
            </button>
            {activeTab === "loan" && (
              <button
                onClick={() => setShowSchedule(true)}
                className="rounded-xl bg-[#F5B83C] hover:bg-[#e2a82b] text-[#286d65] font-extrabold px-6 py-2.5 text-xs shadow-sm transition-all"
              >
                View Payment Schedule
              </button>
            )}
            <button
              onClick={handlePrint}
              className="rounded-xl bg-[#286d65] hover:bg-[#286d65]/90 text-white font-extrabold px-6 py-2.5 text-xs shadow-sm transition-all flex items-center gap-2"
            >
              <span>⎙</span> Print / Save PDF
            </button>
          </div>

        </div>
      </div>

      {/* Amortization Schedule Dialog (Modal) */}
      <AnimatePresence>
        {showSchedule && (
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 grid place-items-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-card border border-border rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-elegant space-y-6"
            >
              <div className="flex justify-between items-center border-b border-border pb-4">
                <div>
                  <h3 className="font-display font-extrabold text-base text-foreground">Repayment Schedule</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Amortized details for your {selectedLoan.name}.</p>
                </div>
                <button
                  onClick={() => setShowSchedule(false)}
                  className="rounded-full w-8 h-8 grid place-items-center hover:bg-muted text-foreground transition-all"
                >
                  ✕
                </button>
              </div>

              <div className="overflow-x-auto border border-border rounded-2xl">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-muted text-muted-foreground font-bold border-b border-border">
                      <th className="px-4 py-3">Month</th>
                      <th className="px-4 py-3">Monthly Repayment</th>
                      <th className="px-4 py-3">Principal Portion</th>
                      <th className="px-4 py-3">Interest Portion</th>
                      <th className="px-4 py-3">Outstanding Balance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/60">
                    {loanResults.schedule.map((row) => (
                      <tr key={row.month} className="hover:bg-muted/30">
                        <td className="px-4 py-2.5 font-bold text-foreground">Month {row.month}</td>
                        <td className="px-4 py-2.5 font-mono font-semibold text-foreground">KES {Math.round(row.payment).toLocaleString()}</td>
                        <td className="px-4 py-2.5 font-mono text-muted-foreground">KES {Math.round(row.principal).toLocaleString()}</td>
                        <td className="px-4 py-2.5 font-mono text-red-500">KES {Math.round(row.interest).toLocaleString()}</td>
                        <td className="px-4 py-2.5 font-mono text-emerald-600 font-bold">KES {Math.round(row.balance).toLocaleString()}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </PublicLayout>
  );
}
