import { createFileRoute } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { ArrowLeftRight, CheckCircle2, DollarSign, Send, Landmark, Receipt } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/portal/transfers")({
  head: () => ({ meta: [{ title: "Transfer of Funds — NSSF SACCO Portal" }] }),
  component: Page,
});

const KES = (n: number) => "KES " + n.toLocaleString();

function Page() {
  const [activeTab, setActiveTab] = useState("internal");
  
  // Form states
  const [fromAccount, setFromAccount] = useState("jumbo");
  const [toAccount, setToAccount] = useState("fdsa");
  const [amount, setAmount] = useState<string>("");
  const [purpose, setPurpose] = useState("savings");
  const [success, setSuccess] = useState(false);

  // Accounts balances matching MOCK data
  const accounts: Record<string, { name: string; balance: number }> = {
    jumbo: { name: "Jumbo Savings (BOSA)", balance: 1028650 },
    fdsa: { name: "FDSA Account (FOSA)", balance: 250000 },
    holiday: { name: "Holiday Savings (FOSA)", balance: 120000 }
  };

  const recentTransfers = [
    { type: "To FDSA Account", date: "16 May 2025", amount: 10000, status: "Completed" },
    { type: "To M-PESA Transfer", date: "12 May 2025", amount: 5000, status: "Completed" },
    { type: "Pay Utilities (KPLC)", date: "08 May 2025", amount: 2450, status: "Completed" },
    { type: "To Savings Contribution", date: "01 May 2025", amount: 15000, status: "Completed" }
  ];

  const handleTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount || parseFloat(amount) <= 0) return;
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setAmount("");
    }, 3000);
  };

  return (
    <PortalLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-extrabold flex items-center gap-3">
          <ArrowLeftRight className="h-7 w-7 text-primary" /> Transfer of Funds
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Transfer money between accounts and make payments</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border/60 mb-6 overflow-x-auto whitespace-nowrap scrollbar-none">
        {[
          { id: "internal", label: "Internal Transfer" },
          { id: "mpesa", label: "M-PESA Transfer" },
          { id: "utilities", label: "Pay Utilities" },
          { id: "others", label: "Other Payments" },
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

      {success && (
        <div className="rounded-2xl bg-green-50 border border-green-200 p-4 mb-6 text-green-700 flex items-center gap-3 text-xs font-semibold animate-in fade-in duration-200">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <span>Transfer initiated successfully! Synced with Microsoft Dynamics 365.</span>
        </div>
      )}

      {activeTab === "internal" ? (
        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* Transfer Form */}
          <form onSubmit={handleTransfer} className="lg:col-span-2 rounded-2xl border border-border bg-card p-5 shadow-card space-y-4 text-xs">
            <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-2">Initiate Internal Transfer</h3>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* From Account */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">From Account</label>
                <select
                  value={fromAccount}
                  onChange={(e) => setFromAccount(e.target.value)}
                  className="w-full rounded-xl border border-border bg-white px-3 py-2.5 font-semibold text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="jumbo">Jumbo Savings — {KES(accounts.jumbo.balance)}</option>
                  <option value="fdsa">FDSA Account — {KES(accounts.fdsa.balance)}</option>
                  <option value="holiday">Holiday Savings — {KES(accounts.holiday.balance)}</option>
                </select>
              </div>

              {/* To Account */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">To Account</label>
                <select
                  value={toAccount}
                  onChange={(e) => setToAccount(e.target.value)}
                  className="w-full rounded-xl border border-border bg-white px-3 py-2.5 font-semibold text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="fdsa">FDSA Account — {KES(accounts.fdsa.balance)}</option>
                  <option value="jumbo">Jumbo Savings — {KES(accounts.jumbo.balance)}</option>
                  <option value="holiday">Holiday Savings — {KES(accounts.holiday.balance)}</option>
                </select>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {/* Amount */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Transfer Amount (KES)</label>
                <input
                  required
                  type="number"
                  placeholder="e.g. 10000"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full rounded-xl border border-border px-3.5 py-2.5 font-semibold text-foreground focus:outline-none focus:border-primary"
                />
              </div>

              {/* Purpose */}
              <div className="space-y-1.5">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Purpose</label>
                <select
                  value={purpose}
                  onChange={(e) => setPurpose(e.target.value)}
                  className="w-full rounded-xl border border-border bg-white px-3 py-2.5 font-semibold text-foreground focus:outline-none focus:border-primary"
                >
                  <option value="savings">Deposit Savings Contribution</option>
                  <option value="fosa">FOSA Top Up</option>
                  <option value="share">Share Capital Purchase</option>
                  <option value="repay">Loan Repayment</option>
                </select>
              </div>
            </div>

            <button type="submit" className="w-full mt-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary-deep py-2.5 text-xs font-bold uppercase tracking-wider transition-all">
              Review Transfer
            </button>
          </form>

          {/* Recent Transfers Log */}
          <div className="lg:col-span-1 rounded-2xl border border-border bg-card p-5 shadow-card">
            <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">Recent Transfers</h3>
            <div className="space-y-4 text-xs">
              {recentTransfers.map((t, idx) => (
                <div key={idx} className="flex items-center justify-between border-b border-border/40 pb-3 last:border-0 last:pb-0">
                  <div>
                    <div className="font-bold text-foreground">{t.type}</div>
                    <div className="text-[10px] text-muted-foreground mt-0.5">{t.date}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-extrabold text-foreground">{KES(t.amount)}</div>
                    <div className="text-[10px] text-green-600 font-bold mt-0.5">{t.status}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      ) : (
        <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
          <Landmark className="h-10 w-10 mx-auto text-primary mb-3" />
          <h2 className="font-display font-bold text-lg">Third-Party Gateway Integrated</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            This checkout channel handles merchant API logs. Standard RTGS settlement times apply.
          </p>
        </div>
      )}
    </PortalLayout>
  );
}
