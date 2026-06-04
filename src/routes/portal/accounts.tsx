import { createFileRoute, useSearch } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { Wallet, BadgeCheck, TrendingUp, PiggyBank, ArrowDownRight, ArrowUpRight, Search, PlusCircle, Layers, CreditCard, ChevronRight } from "lucide-react";
import { MOCK_MEMBER, MOCK_TRANSACTIONS } from "@/lib/mock-data";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/portal/accounts")({
  head: () => ({ meta: [{ title: "Accounts — NSSF SACCO Portal" }] }),
  component: Page,
});

const KES = (n: number) => "KES " + n.toLocaleString();

function Page() {
  const search: any = useSearch({ from: "/portal/accounts" });
  const initialTab = search.tab || "all";
  
  const [activeTab, setActiveTab] = useState(initialTab);

  // Accounts Data matching John Mwangi's profile
  const accounts = [
    { name: "Jumbo Savings Account", number: "BOSA1234567890", balance: 1028650, status: "Active", type: "savings", rate: "8% p.a" },
    { name: "FDSA Account", number: "FDSA9876543210", balance: 250000, status: "Active", type: "fosa", rate: "6% p.a" },
    { name: "Holiday Savings Account", number: "HSA112233445566", balance: 120000, status: "Active", type: "holiday", rate: "9% p.a" }
  ];

  const filteredAccounts = useMemo(() => {
    if (activeTab === "all") return accounts;
    return accounts.filter(acc => acc.type === activeTab);
  }, [activeTab]);

  const totalBalance = accounts.reduce((sum, acc) => sum + acc.balance, 0);

  return (
    <PortalLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-extrabold flex items-center gap-3">
          <Wallet className="h-7 w-7 text-primary" /> Accounts
        </h1>
        <p className="text-sm text-muted-foreground mt-1">View and manage your accounts</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border/60 mb-6 overflow-x-auto whitespace-nowrap scrollbar-none">
        {[
          { id: "all", label: "All Accounts" },
          { id: "fosa", label: "FOSA Accounts" },
          { id: "savings", label: "Savings Accounts" },
          { id: "holiday", label: "Holiday Accounts" },
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

      <div className="grid gap-6 lg:grid-cols-3 mb-6">
        {/* Left Column: Accounts Summary (Balances + Donut Chart) */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-card lg:col-span-1 flex flex-col justify-between">
          <div>
            <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">Accounts Summary</h3>
            <div className="text-xs text-muted-foreground">Total Balance</div>
            <div className="font-display text-3xl font-extrabold text-gold mt-1">
              {KES(totalBalance)}
            </div>
            <div className="text-[11px] text-green-600 font-semibold mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3" /> +12.5% this month
            </div>
          </div>

          {/* Donut Chart SVG */}
          <div className="my-6 flex items-center justify-center gap-4">
            <svg width="120" height="120" viewBox="0 0 36 36" className="w-28 h-28 transform -rotate-90">
              {/* Jumbo Savings (73.5%) */}
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="oklch(0.49 0.07 184)" strokeWidth="4" strokeDasharray="73.5 26.5" strokeDashoffset="0" />
              {/* FDSA Account (17.9%) */}
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="oklch(0.81 0.16 78)" strokeWidth="4" strokeDasharray="17.9 82.1" strokeDashoffset="-73.5" />
              {/* Holiday Account (8.6%) */}
              <circle cx="18" cy="18" r="15.915" fill="none" stroke="oklch(0.82 0.16 130)" strokeWidth="4" strokeDasharray="8.6 91.4" strokeDashoffset="-91.4" />
            </svg>
            <div className="space-y-1.5 text-[10px] font-semibold text-muted-foreground">
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-primary" /> Jumbo Savings (73%)</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-gold" /> FDSA Account (18%)</div>
              <div className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-lime" /> Holiday (9%)</div>
            </div>
          </div>
        </div>

        {/* Right Columns: My Accounts list & Recent Transactions */}
        <div className="lg:col-span-2 space-y-6">
          {/* Accounts List Table */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-display font-bold text-foreground">My Accounts</h3>
              <button className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
                <PlusCircle className="h-3.5 w-3.5" /> Open New Account
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs">
                <thead>
                  <tr className="border-b border-border text-muted-foreground uppercase font-bold text-[10px] text-left">
                    <th className="py-2.5">Account Name</th>
                    <th className="py-2.5">Account Number</th>
                    <th className="py-2.5">Available Balance</th>
                    <th className="py-2.5">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredAccounts.map((acc, i) => (
                    <tr key={i} className="hover:bg-secondary/20">
                      <td className="py-3 font-semibold text-foreground">{acc.name}</td>
                      <td className="py-3 font-mono text-muted-foreground">{acc.number}</td>
                      <td className="py-3 font-bold text-foreground">{KES(acc.balance)}</td>
                      <td className="py-3">
                        <span className="inline-flex items-center gap-1 rounded-full bg-lime/20 px-2 py-0.5 text-[10px] font-bold text-primary-deep">
                          <BadgeCheck className="h-3 w-3" /> {acc.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                  {filteredAccounts.length === 0 && (
                    <tr>
                      <td colSpan={4} className="py-8 text-center text-muted-foreground">
                        No accounts found for this category.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Transactions List */}
      <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-display font-bold text-foreground">Recent Transactions</h3>
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted-foreground" />
            <input placeholder="Filter transactions…" className="rounded-lg border border-input pl-8 pr-3 py-1 text-xs outline-none focus:ring-1 focus:ring-ring bg-background" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left">
            <thead>
              <tr className="border-b border-border text-muted-foreground uppercase font-bold text-[10px] pb-2">
                <th className="py-2.5">Date</th>
                <th className="py-2.5">Description</th>
                <th className="py-2.5">Type</th>
                <th className="py-2.5">Amount</th>
                <th className="py-2.5 text-right">Balance</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {MOCK_TRANSACTIONS.map((t, idx) => (
                <tr key={idx} className="hover:bg-secondary/20">
                  <td className="py-3 text-muted-foreground">{t.date}</td>
                  <td className="py-3 font-semibold text-foreground">{t.description}</td>
                  <td className="py-3">
                    <span className={`inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${t.type === "Credit" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                      {t.type === "Credit" ? <ArrowDownRight className="h-3 w-3" /> : <ArrowUpRight className="h-3 w-3" />}
                      {t.type}
                    </span>
                  </td>
                  <td className={`py-3 font-bold ${t.type === "Credit" ? "text-green-600" : "text-destructive"}`}>
                    {t.type === "Credit" ? "+" : "-"}{KES(t.amount)}
                  </td>
                  <td className="py-3 font-bold text-foreground text-right">{KES(t.balance)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PortalLayout>
  );
}
