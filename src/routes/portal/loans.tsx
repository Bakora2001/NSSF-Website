import { createFileRoute, useSearch, Link } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { 
  HandCoins, 
  BadgeCheck, 
  Construction, 
  PlusCircle, 
  Calculator, 
  Users, 
  FileText, 
  TrendingUp,
  Clock,
  Sparkles,
  RefreshCw,
  AlertTriangle,
  Printer,
  ChevronRight
} from "lucide-react";
import { MOCK_MEMBER, MOCK_PAYSLIP, LOAN_PRODUCTS } from "@/lib/mock-data";
import { useState, useMemo, useEffect } from "react";

export const Route = createFileRoute("/portal/loans")({
  head: () => ({ meta: [{ title: "Loans — NSSF SACCO Portal" }] }),
  component: Page,
});

const KES = (n: number) => "KES " + n.toLocaleString();

function Page() {
  const search: any = useSearch({ from: "/portal/loans" });
  const initialTab = search.tab || "all";
  const initialSubtab = search.subtab || "requests";
  
  const [activeTab, setActiveTab] = useState(initialTab);
  const [activeSubtab, setActiveSubtab] = useState(initialSubtab);

  // Sync state for tab changes via query params
  useEffect(() => {
    if (search.tab) setActiveTab(search.tab);
    if (search.subtab) setActiveSubtab(search.subtab);
  }, [search.tab, search.subtab]);

  // Active Loans Mock matching the dashboard layout in screenshot
  const activeLoans = [
    { name: "KARO Loan", amount: 300000, outstanding: 200000, nextPayment: "25 May 2025", status: "Active" },
    { name: "Emergency Loan", amount: 100000, outstanding: 60000, nextPayment: "25 May 2025", status: "Active" },
    { name: "School Fees Loan", amount: 150000, outstanding: 90000, nextPayment: "25 May 2025", status: "Active" }
  ];

  const totalOutstanding = activeLoans.reduce((sum, l) => sum + l.outstanding, 0);

  /* ────────────────────────────────────────────────────────── */
  /* LOAN CALCULATOR LOGIC & DYNAMICS 365 SYNC STATES           */
  /* ────────────────────────────────────────────────────────── */
  const [isD365Sync, setIsD365Sync] = useState(true);
  const [syncing, setSyncing] = useState(false);
  const [selectedLoanId, setSelectedLoanId] = useState("DEVELOPMENT");
  const [loanAmount, setLoanAmount] = useState<number>(300000);
  const [loanTerm, setLoanTerm] = useState<number>(36);
  const [customGross, setCustomGross] = useState<number>(185000);
  const [customNet, setCustomNet] = useState<number>(124800);
  const [customDeposits, setCustomDeposits] = useState<number>(245680);
  const [showSchedule, setShowSchedule] = useState(false);

  const selectedProduct = useMemo(() => {
    return LOAN_PRODUCTS.find(p => p.code === selectedLoanId) || LOAN_PRODUCTS[0];
  }, [selectedLoanId]);

  // Handle D365 Auto Sync trigger
  const triggerD365Sync = () => {
    setSyncing(true);
    setTimeout(() => {
      setSyncing(false);
      setCustomGross(MOCK_PAYSLIP.grossSalary);
      setCustomNet(MOCK_PAYSLIP.netSalary);
      setCustomDeposits(MOCK_MEMBER.totalSavings);
      // Auto adjust limits to fit product
      const maxLimit = MOCK_MEMBER.totalSavings * (selectedProduct.maxMultiplier || 3);
      if (loanAmount > maxLimit) setLoanAmount(maxLimit);
    }, 1200);
  };

  // Adjust parameters when loan type changes
  const handleLoanTypeChange = (code: string) => {
    setSelectedLoanId(code);
    const prod = LOAN_PRODUCTS.find(p => p.code === code) || LOAN_PRODUCTS[0];
    setLoanTerm(prod.repaymentMonths);
    const limit = (isD365Sync ? MOCK_MEMBER.totalSavings : customDeposits) * (prod.maxMultiplier || 3);
    if (loanAmount > limit) setLoanAmount(limit);
  };

  // Calculate results using standard formulas
  const loanResults = useMemo(() => {
    const principal = loanAmount;
    const term = loanTerm;
    // Monthly rate = annual rate / 12 (using decimal format, e.g., 1.1% monthly = 13.2% annual)
    const monthlyRate = (selectedProduct.rate || 1.1) / 100;
    
    // Monthly installment using Reducing Balance method
    const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, term)) / (Math.pow(1 + monthlyRate, term) - 1);
    const totalPayable = monthlyPayment * term;
    const totalInterest = totalPayable - principal;
    
    // Check 1/3 salary deduction rule
    // Dynamics policy: net salary after new loan repayment must not fall below 1/3 of gross salary.
    const gross = isD365Sync ? MOCK_PAYSLIP.grossSalary : customGross;
    const currentNet = isD365Sync ? MOCK_PAYSLIP.netSalary : customNet;
    const currentDeductions = isD365Sync ? MOCK_PAYSLIP.totalDeductions : (gross - currentNet);
    
    const oneThirdLimit = gross / 3;
    const proposedNet = currentNet - monthlyPayment;
    const violatesOneThird = proposedNet < oneThirdLimit;

    // Check share multiplier limit
    const deposits = isD365Sync ? MOCK_MEMBER.totalSavings : customDeposits;
    const multiplierLimit = deposits * (selectedProduct.maxMultiplier || 3);
    const violatesMultiplier = principal > multiplierLimit;

    const schedule: { month: number; payment: number; principal: number; interest: number; balance: number }[] = [];
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

    return {
      monthlyPayment: Math.round(monthlyPayment),
      totalInterest: Math.round(totalInterest),
      totalPayable: Math.round(totalPayable),
      violatesOneThird,
      violatesMultiplier,
      multiplierLimit,
      allowedRepaymentSpace: Math.round(currentNet - oneThirdLimit),
      schedule
    };
  }, [loanAmount, loanTerm, selectedProduct, isD365Sync, customGross, customNet, customDeposits]);

  return (
    <PortalLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-extrabold flex items-center gap-3">
          <HandCoins className="h-7 w-7 text-primary" /> Loans
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your loans and view your loan details</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border/60 mb-6 overflow-x-auto whitespace-nowrap scrollbar-none">
        {[
          { id: "all", label: "My Loans" },
          { id: "apply", label: "Apply Loan" },
          { id: "calculator", label: "Loan Calculator" },
          { id: "guarantors", label: "Guarantors" },
          { id: "products", label: "Loan Products" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 text-xs font-bold transition-all border-b-2 ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* 1. MY LOANS TAB */}
      {activeTab === "all" && (
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-3">
            {/* Summary Block */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card lg:col-span-1 flex flex-col justify-between">
              <div>
                <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">Loan Summary</h3>
                <div className="text-xs text-muted-foreground">Total Outstanding</div>
                <div className="font-display text-3xl font-extrabold text-gold mt-1">
                  {KES(totalOutstanding)}
                </div>
                <div className="text-[11px] text-muted-foreground mt-1 flex items-center gap-1">
                  Active Loans: {activeLoans.length}
                </div>
              </div>
              <button 
                onClick={() => setActiveTab("apply")}
                className="mt-8 w-full rounded-xl bg-primary hover:bg-primary-deep text-white py-2.5 text-xs font-bold uppercase tracking-wider transition-all"
              >
                Apply for Loan
              </button>
            </div>

            {/* Active Loans Table */}
            <div className="lg:col-span-2 rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">My Active Loans</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground uppercase font-bold text-[10px]">
                      <th className="py-2.5">Loan Type</th>
                      <th className="py-2.5">Approved Amount</th>
                      <th className="py-2.5">Outstanding Balance</th>
                      <th className="py-2.5">Next Payment</th>
                      <th className="py-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {activeLoans.map((l, i) => (
                      <tr key={i} className="hover:bg-secondary/20">
                        <td className="py-4 font-bold text-foreground">{l.name}</td>
                        <td className="py-4 font-semibold text-foreground">{KES(l.amount)}</td>
                        <td className="py-4 font-extrabold text-gold">{KES(l.outstanding)}</td>
                        <td className="py-4 text-muted-foreground">{l.nextPayment}</td>
                        <td className="py-4">
                          <span className="inline-flex items-center gap-1 rounded-full bg-lime/20 px-2 py-0.5 text-[10px] font-bold text-primary-deep">
                            <BadgeCheck className="h-3 w-3" /> {l.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <h3 className="font-display font-bold text-foreground mb-4">Loan Quick Actions</h3>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
              <button onClick={() => setActiveTab("apply")} className="rounded-xl border border-border p-3 text-center hover:bg-secondary/50 transition">
                <PlusCircle className="mx-auto mb-1.5 h-5 w-5 text-primary" />
                <div className="text-[10px] font-bold text-foreground">Apply Loan</div>
              </button>
              <button onClick={() => setActiveTab("calculator")} className="rounded-xl border border-border p-3 text-center hover:bg-secondary/50 transition">
                <Calculator className="mx-auto mb-1.5 h-5 w-5 text-primary" />
                <div className="text-[10px] font-bold text-foreground">Loan Calculator</div>
              </button>
              <button onClick={() => setActiveTab("guarantors")} className="rounded-xl border border-border p-3 text-center hover:bg-secondary/50 transition">
                <Users className="mx-auto mb-1.5 h-5 w-5 text-primary" />
                <div className="text-[10px] font-bold text-foreground">Guarantors</div>
              </button>
              <button className="rounded-xl border border-border p-3 text-center hover:bg-secondary/50 transition">
                <FileText className="mx-auto mb-1.5 h-5 w-5 text-primary" />
                <div className="text-[10px] font-bold text-foreground">Repayment Schedule</div>
              </button>
              <button className="rounded-xl border border-border p-3 text-center hover:bg-secondary/50 transition">
                <FileText className="mx-auto mb-1.5 h-5 w-5 text-primary" />
                <div className="text-[10px] font-bold text-foreground">Loan Statements</div>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 2. APPLY LOAN TAB */}
      {activeTab === "apply" && (
        <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
          <Construction className="h-10 w-10 mx-auto text-primary mb-3" />
          <h2 className="font-display font-bold text-lg">Dynamics 365 Loan Application Portal</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            Choose a product, request your guarantors, and upload your latest payslip to submit an application directly to Dynamics 365.
          </p>
          <button onClick={() => setActiveTab("calculator")} className="mt-5 rounded-xl bg-gold text-gold-foreground hover:bg-gold/90 px-6 py-2.5 text-xs font-bold uppercase tracking-wider transition-all">
            Calculate Eligibility First
          </button>
        </div>
      )}

      {/* 3. LOAN CALCULATOR WITH DYNAMICS 365 SYNC */}
      {activeTab === "calculator" && (
        <div className="space-y-6">
          {/* Sync Header Alert / Toggle */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4 flex flex-wrap items-center justify-between gap-4 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/10 text-primary">
                <Sparkles className="h-4.5 w-4.5 animate-pulse" />
              </span>
              <div>
                <h4 className="font-display font-bold text-foreground text-sm">Microsoft Dynamics 365 Integration</h4>
                <p className="text-[10px] text-muted-foreground mt-0.5">Toggle sync to fetch real-time salary limits, multipliers, and policy controls.</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-muted-foreground">Auto Sync</span>
              <button 
                onClick={() => {
                  setIsD365Sync(!isD365Sync);
                  if(!isD365Sync) triggerD365Sync();
                }}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${isD365Sync ? "bg-primary" : "bg-muted"}`}
              >
                <span className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${isD365Sync ? "translate-x-5" : "translate-x-0"}`} />
              </button>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Column 1: Details & Settings */}
            <div className="space-y-5 border border-border/40 rounded-2xl p-5 bg-slate-50/50">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-display font-bold text-sm text-primary uppercase tracking-wider">Loan Specifications</h3>
                {isD365Sync && (
                  <button onClick={triggerD365Sync} className="text-muted-foreground hover:text-primary transition-all p-1" title="Sync now">
                    <RefreshCw className={`h-3.5 w-3.5 ${syncing ? "animate-spin text-primary" : ""}`} />
                  </button>
                )}
              </div>

              {/* Loan Type */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Loan Product</label>
                <select
                  value={selectedLoanId}
                  onChange={(e) => handleLoanTypeChange(e.target.value)}
                  className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-xs font-bold text-foreground focus:outline-none focus:border-primary"
                >
                  {LOAN_PRODUCTS.map((l) => (
                    <option key={l.code} value={l.code}>{l.name} ({l.category})</option>
                  ))}
                </select>
              </div>

              {/* D365 Auto Sync Mode Fields */}
              {isD365Sync ? (
                <div className="p-3.5 rounded-xl bg-primary/5 border border-primary/10 space-y-3 text-xs">
                  <div className="text-[10px] font-extrabold text-primary uppercase tracking-widest">Dynamics Profile Data</div>
                  <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Member Deposits</span><span className="text-foreground">{KES(MOCK_MEMBER.totalSavings)}</span></div>
                  <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Gross Salary</span><span className="text-foreground">{KES(MOCK_PAYSLIP.grossSalary)}</span></div>
                  <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Net Salary</span><span className="text-foreground">{KES(MOCK_PAYSLIP.netSalary)}</span></div>
                  <div className="flex justify-between font-semibold"><span className="text-muted-foreground">Active Loan Deductions</span><span className="text-red-500 font-mono">{KES(MOCK_PAYSLIP.existingLoanDeductions)}</span></div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Deposits Balance (KES)</label>
                    <input type="number" value={customDeposits} onChange={(e) => setCustomDeposits(Math.max(0, parseFloat(e.target.value) || 0))} className="w-full rounded-xl border border-border bg-white px-3 py-2 text-xs font-bold text-foreground" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Gross Salary (KES)</label>
                    <input type="number" value={customGross} onChange={(e) => setCustomGross(Math.max(0, parseFloat(e.target.value) || 0))} className="w-full rounded-xl border border-border bg-white px-3 py-2 text-xs font-bold text-foreground" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Net Salary (KES)</label>
                    <input type="number" value={customNet} onChange={(e) => setCustomNet(Math.max(0, parseFloat(e.target.value) || 0))} className="w-full rounded-xl border border-border bg-white px-3 py-2 text-xs font-bold text-foreground" />
                  </div>
                </div>
              )}

              {/* Amount */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Requested Loan Amount (KES)</label>
                <input
                  type="number"
                  value={loanAmount}
                  onChange={(e) => setLoanAmount(Math.max(0, parseFloat(e.target.value) || 0))}
                  className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-xs font-bold text-foreground focus:outline-none focus:border-primary"
                />
                <span className="text-[9px] text-muted-foreground font-semibold">
                  Max allowed: {KES((isD365Sync ? MOCK_MEMBER.totalSavings : customDeposits) * (selectedProduct.maxMultiplier || 3))} ({selectedProduct.maxMultiplier}x deposits)
                </span>
              </div>

              {/* Term */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Repayment Period (Months)</label>
                <input
                  type="number"
                  value={loanTerm}
                  max={selectedProduct.repaymentMonths}
                  onChange={(e) => setLoanTerm(Math.min(selectedProduct.repaymentMonths, Math.max(1, parseInt(e.target.value) || 1)))}
                  className="w-full rounded-xl border border-border bg-white px-3 py-2.5 text-xs font-bold text-foreground focus:outline-none focus:border-primary"
                />
                <span className="text-[9px] text-muted-foreground font-semibold">Max: {selectedProduct.repaymentMonths} Months</span>
              </div>

              {/* Interest Rate (disabled display) */}
              <div className="space-y-1.5">
                <label className="text-[10px] font-extrabold text-slate-700 uppercase tracking-wider block">Monthly Interest Rate</label>
                <input
                  type="text"
                  disabled
                  value={`${selectedProduct.rate}% (Reducing)`}
                  className="w-full rounded-xl border border-slate-200 bg-slate-100/80 px-3 py-2.5 text-xs font-extrabold text-primary"
                />
              </div>
            </div>

            {/* Column 2: Results & Policy checks */}
            <div className="space-y-4 border border-border/40 rounded-2xl p-5 bg-[#fbfdfc] flex flex-col justify-between min-h-[420px]">
              <div>
                <h3 className="font-display font-bold text-sm text-primary uppercase tracking-wider mb-4">Calculation Results</h3>

                <div className="space-y-3.5">
                  <div className="flex justify-between items-center border border-slate-100 rounded-xl p-3 bg-white shadow-sm">
                    <span className="text-xs font-bold text-muted-foreground">Monthly Installment</span>
                    <span className="text-sm font-extrabold text-foreground">{KES(loanResults.monthlyPayment)}</span>
                  </div>

                  <div className="flex justify-between items-center border border-slate-100 rounded-xl p-3 bg-white shadow-sm">
                    <span className="text-xs font-bold text-muted-foreground">Total Interest</span>
                    <span className="text-sm font-extrabold text-foreground">{KES(loanResults.totalInterest)}</span>
                  </div>

                  <div className="flex justify-between items-center border border-slate-100 rounded-xl p-3 bg-white shadow-sm">
                    <span className="text-xs font-bold text-muted-foreground">Multiplier Check</span>
                    <span className={`text-xs font-bold ${loanResults.violatesMultiplier ? "text-red-500" : "text-green-600"}`}>
                      {loanResults.violatesMultiplier ? "Over Limit" : "Within Limit"}
                    </span>
                  </div>

                  {/* 1/3 Rule Alert box */}
                  {loanResults.violatesOneThird ? (
                    <div className="rounded-xl bg-red-50 border border-red-200 p-3 flex gap-2.5 items-start">
                      <AlertTriangle className="h-4.5 w-4.5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] font-extrabold text-red-800 uppercase tracking-wide">1/3 Salary Cap Violation</div>
                        <div className="text-[9.5px] text-red-700 leading-normal mt-0.5">
                          Repayment of {KES(loanResults.monthlyPayment)} exceeds the allowed space of {KES(loanResults.allowedRepaymentSpace)}. Net salary after deduction falls below 1/3 of gross.
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="rounded-xl bg-green-50 border border-green-200 p-3 flex gap-2.5 items-start">
                      <BadgeCheck className="h-4.5 w-4.5 text-green-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] font-extrabold text-green-800 uppercase tracking-wide">D365 Policy Cleared</div>
                        <div className="text-[9.5px] text-green-700 leading-normal mt-0.5">
                          Net salary remains above 1/3 threshold. Repayment leaves {KES(loanResults.allowedRepaymentSpace - loanResults.monthlyPayment)} safety margin.
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Total Payable */}
              <div className="bg-primary text-white rounded-2xl p-4 mt-6 flex justify-between items-center shadow-inner">
                <span className="text-xs font-bold text-white/80">Total Payable</span>
                <span className="text-base font-extrabold text-gold">{KES(loanResults.totalPayable)}</span>
              </div>
            </div>

            {/* Column 3: Rules & Policy parameters */}
            <div className="border border-border/40 rounded-2xl p-5 bg-[#fbfdfc] min-h-[420px] space-y-4">
              <h3 className="font-display font-bold text-sm text-primary uppercase tracking-wider">Dynamics Credit Rules</h3>
              <ul className="space-y-4 text-xs font-semibold text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary font-bold">◆</span>
                  <span>Multiplier: Borrow up to {selectedProduct.maxMultiplier}x your deposits.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">◆</span>
                  <span>Guarantors: {selectedProduct.requiresGuarantors ? "Required to fully back BOSA loans." : "No guarantors needed."}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">◆</span>
                  <span>1/3 Rule: Combined loan check-offs must not reduce net salary below 33.3% of gross salary.</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary font-bold">◆</span>
                  <span>Amortization: Reducing balance formula monthly calculations.</span>
                </li>
              </ul>

              <div className="pt-6 border-t border-border/60 space-y-2">
                <button 
                  onClick={() => setShowSchedule(true)}
                  className="w-full text-center bg-gold text-gold-foreground hover:bg-gold/90 font-bold py-2 rounded-xl text-xs uppercase tracking-wider transition-all"
                >
                  View Amortization Schedule
                </button>
                <button 
                  onClick={() => window.print()}
                  className="w-full text-center bg-primary text-primary-foreground hover:bg-primary-deep font-bold py-2 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-1.5"
                >
                  <Printer className="h-3.5 w-3.5" /> Print / Save PDF
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 4. GUARANTORS TAB */}
      {activeTab === "guarantors" && (
        <div className="space-y-6">
          {/* Subtabs */}
          <div className="flex border-b border-border/40 gap-4 text-xs font-bold overflow-x-auto scrollbar-none">
            {[
              { id: "requests", label: "Guarantor Requests" },
              { id: "commitments", label: "My Commitments" },
              { id: "my-guarantors", label: "My Guarantors" }
            ].map(sub => (
              <button
                key={sub.id}
                onClick={() => setActiveSubtab(sub.id)}
                className={`pb-2 transition-all ${activeSubtab === sub.id ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-primary"}`}
              >
                {sub.label}
              </button>
            ))}
          </div>

          {activeSubtab === "requests" && (
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">Guarantor Requests Pending My Signature</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground uppercase font-bold text-[10px]">
                      <th className="py-2.5">Requester</th>
                      <th className="py-2.5">Loan Type</th>
                      <th className="py-2.5">Requested Amount</th>
                      <th className="py-2.5">Guarantee Amount</th>
                      <th className="py-2.5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-secondary/20">
                      <td className="py-3 font-semibold text-foreground">Jane Wanjiku (NSSF/554321)</td>
                      <td className="py-3 text-muted-foreground">Development Loan</td>
                      <td className="py-3 text-foreground font-mono">{KES(400000)}</td>
                      <td className="py-3 text-gold font-bold">{KES(50000)}</td>
                      <td className="py-3 text-right space-x-1.5">
                        <button className="rounded-lg border border-red-200 hover:border-red-500 text-red-500 px-3 py-1 font-bold bg-red-50/50 hover:bg-red-50 text-[10px] transition-all">Decline</button>
                        <button className="rounded-lg bg-primary text-primary-foreground hover:bg-primary-deep px-3 py-1 font-bold text-[10px] transition-all">Approve &amp; Sign</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSubtab === "commitments" && (
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">Loans I Have Guaranteed For Other Members</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground uppercase font-bold text-[10px]">
                      <th className="py-2.5">Borrower</th>
                      <th className="py-2.5">Loan Category</th>
                      <th className="py-2.5">Guaranteed Amount</th>
                      <th className="py-2.5">Outstanding Borrower Balance</th>
                      <th className="py-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-secondary/20">
                      <td className="py-3 font-semibold text-foreground">Peter Kamau (NSSF/987612)</td>
                      <td className="py-3 text-muted-foreground">BOSA Development</td>
                      <td className="py-3 text-foreground font-semibold">{KES(120000)}</td>
                      <td className="py-3 text-gold font-bold">{KES(98000)}</td>
                      <td className="py-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-lime/20 px-2 py-0.5 text-[9px] font-bold text-primary-deep">
                          Active
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeSubtab === "my-guarantors" && (
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">Guarantors Securing My Loans</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground uppercase font-bold text-[10px]">
                      <th className="py-2.5">Guarantor</th>
                      <th className="py-2.5">My Loan</th>
                      <th className="py-2.5">Guaranteed Space</th>
                      <th className="py-2.5">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    <tr className="hover:bg-secondary/20">
                      <td className="py-3 font-semibold text-foreground">Alice Mwangi (NSSF/231154)</td>
                      <td className="py-3 text-muted-foreground">KARO Loan</td>
                      <td className="py-3 text-foreground font-bold">{KES(100000)}</td>
                      <td className="py-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-lime/20 px-2 py-0.5 text-[9px] font-bold text-primary-deep">
                          Signed
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      )}

      {/* 5. LOAN PRODUCTS TAB */}
      {activeTab === "products" && (
        <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
          <h3 className="font-display font-bold text-foreground mb-4">Available SACCO Loan Products</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-border text-muted-foreground uppercase font-bold text-[10px]">
                  <th className="py-2.5">Code</th>
                  <th className="py-2.5">Product Name</th>
                  <th className="py-2.5">Max Term</th>
                  <th className="py-2.5 text-center">Max Multiplier</th>
                  <th className="py-2.5">Monthly Interest</th>
                  <th className="py-2.5">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {LOAN_PRODUCTS.map((prod) => (
                  <tr key={prod.code} className="hover:bg-secondary/20">
                    <td className="py-3 font-mono font-bold text-primary">{prod.code}</td>
                    <td className="py-3 font-semibold text-foreground">{prod.name} ({prod.category})</td>
                    <td className="py-3 text-muted-foreground">{prod.repaymentMonths} Months</td>
                    <td className="py-3 text-center font-bold text-foreground">{prod.maxMultiplier}x deposits</td>
                    <td className="py-3 text-primary-deep font-bold">{prod.rate}%</td>
                    <td className="py-3 text-muted-foreground truncate max-w-xs">{prod.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* AMORTIZATION MODAL DIALOG */}
      {showSchedule && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 grid place-items-center p-4">
          <div className="bg-card border border-border rounded-3xl p-6 md:p-8 max-w-3xl w-full max-h-[80vh] overflow-y-auto shadow-elegant space-y-6 animate-in zoom-in-95 duration-200">
            <div className="flex justify-between items-center border-b border-border pb-4">
              <div>
                <h3 className="font-display font-extrabold text-base text-foreground">Amortization Repayment Schedule</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Reducing balance breakdown for KES {loanAmount.toLocaleString()} loan over {loanTerm} months.</p>
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
                    <th className="px-4 py-3">Repayment Installment</th>
                    <th className="px-4 py-3">Principal Portion</th>
                    <th className="px-4 py-3">Interest Portion</th>
                    <th className="px-4 py-3">Remaining Balance</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/60">
                  {loanResults.schedule.map((row) => (
                    <tr key={row.month} className="hover:bg-muted/30">
                      <td className="px-4 py-2.5 font-bold text-foreground">Month {row.month}</td>
                      <td className="px-4 py-2.5 font-mono font-semibold text-foreground">{KES(Math.round(row.payment))}</td>
                      <td className="px-4 py-2.5 font-mono text-muted-foreground">{KES(Math.round(row.principal))}</td>
                      <td className="px-4 py-2.5 font-mono text-red-500">{KES(Math.round(row.interest))}</td>
                      <td className="px-4 py-2.5 font-mono text-emerald-600 font-bold">{KES(Math.round(row.balance))}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </PortalLayout>
  );
}
