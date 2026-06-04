import { createFileRoute, useSearch } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { TrendingUp, BadgeCheck, FileText, Printer, ArrowDownToLine, PieChart, Layers, HelpCircle } from "lucide-react";
import { useState, useMemo } from "react";

export const Route = createFileRoute("/portal/investments")({
  head: () => ({ meta: [{ title: "Investments & Shares — NSSF SACCO Portal" }] }),
  component: Page,
});

const KES = (n: number) => "KES " + n.toLocaleString();

function Page() {
  const search: any = useSearch({ from: "/portal/investments" });
  const initialTab = search.tab || "share-capital";

  const [activeTab, setActiveTab] = useState(initialTab);

  // Shares breakdowns matching John Mwangi's profile
  const shareCapitalSummary = {
    total: 856000,
    tier: "Tier B",
    nextTier: "Tier C (KES 1,000,000)",
    progressPercent: 85.6,
  };

  const categories = [
    { name: "Category A Shares", code: "CAT-A", units: 200, amount: 200000, desc: "Primary cooperative shares (non-withdrawable)" },
    { name: "Category B Shares", code: "CAT-B", units: 656, amount: 656000, desc: "Bonus reinvested cooperative capital shares" },
  ];

  const dividends = [
    { year: 2024, rate: "15.00%", gross: 45000, tax: 2250, net: 42560, date: "15 Dec 2024", status: "Paid" },
    { year: 2023, rate: "14.50%", gross: 38000, tax: 1900, net: 36100, date: "18 Dec 2023", status: "Paid" },
    { year: 2022, rate: "14.00%", gross: 31000, tax: 1550, net: 29450, date: "16 Dec 2022", status: "Paid" },
  ];

  const handlePrintSlip = (div: any) => {
    window.print();
  };

  return (
    <PortalLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-extrabold flex items-center gap-3">
          <TrendingUp className="h-7 w-7 text-primary" /> Investments & Shares
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Track your share capital and investment portfolio</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border/60 mb-6 overflow-x-auto whitespace-nowrap scrollbar-none">
        {[
          { id: "share-capital", label: "Share Capital" },
          { id: "investments", label: "Investments" },
          { id: "dividends", label: "Dividend History" },
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

      {activeTab === "share-capital" && (
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left Summary Box */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card lg:col-span-1 flex flex-col justify-between">
            <div>
              <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-4">Share Capital Summary</h3>
              <div className="text-xs text-muted-foreground">Total Share Capital</div>
              <div className="font-display text-3xl font-extrabold text-gold mt-1">
                {KES(shareCapitalSummary.total)}
              </div>
              <div className="font-display text-xl font-bold text-foreground mt-2">
                {shareCapitalSummary.tier}
              </div>
              <div className="text-[11px] text-muted-foreground mt-1">
                Next Tier: {shareCapitalSummary.nextTier}
              </div>
            </div>

            {/* Progress to next tier */}
            <div className="mt-8">
              <div className="flex justify-between text-xs font-semibold mb-1.5">
                <span className="text-muted-foreground">Progress to Next Tier</span>
                <span className="text-primary font-bold">{shareCapitalSummary.progressPercent}%</span>
              </div>
              <div className="h-2.5 rounded-full bg-secondary overflow-hidden">
                <div className="h-full bg-lime rounded-full" style={{ width: `${shareCapitalSummary.progressPercent}%` }} />
              </div>
            </div>
          </div>

          {/* Right Detailed Table */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">Share Capital Breakdown</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-border text-muted-foreground uppercase font-bold text-[10px]">
                      <th className="py-2.5">Share Category</th>
                      <th className="py-2.5">Category Code</th>
                      <th className="py-2.5 text-center">Units</th>
                      <th className="py-2.5 text-right">Amount (KES)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {categories.map((c, i) => (
                      <tr key={i} className="hover:bg-secondary/20">
                        <td className="py-4">
                          <div className="font-semibold text-foreground">{c.name}</div>
                          <div className="text-[10px] text-muted-foreground mt-0.5">{c.desc}</div>
                        </td>
                        <td className="py-4 font-mono text-muted-foreground">{c.code}</td>
                        <td className="py-4 text-center font-bold text-foreground">{c.units}</td>
                        <td className="py-4 text-right font-extrabold text-foreground">{KES(c.amount)}</td>
                      </tr>
                    ))}
                    <tr className="bg-secondary/10 font-bold">
                      <td colSpan={2} className="py-3 pl-3">Total Shares</td>
                      <td className="py-3 text-center text-primary-deep">
                        {categories.reduce((acc, c) => acc + c.units, 0)}
                      </td>
                      <td className="py-3 text-right text-gold">
                        {KES(categories.reduce((acc, c) => acc + c.amount, 0))}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "investments" && (
        <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
          <Layers className="h-10 w-10 mx-auto text-primary mb-3" />
          <h2 className="font-display font-bold text-lg">Alternative Investment Products</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            View third-party Sukuk certificates, equity investment schemes, and land development assets.
          </p>
          <button className="mt-5 rounded-xl bg-primary text-primary-foreground px-6 py-2.5 text-xs font-bold uppercase tracking-wider">
            Explore Offerings
          </button>
        </div>
      )}

      {activeTab === "dividends" && (
        <div className="space-y-6">
          {/* Dividend Quick Stats */}
          <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-card">
              <div className="text-xs text-muted-foreground">Last Dividend Rate</div>
              <div className="font-display text-2xl font-extrabold text-primary mt-1">15.00% p.a.</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Paid December 2024</div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-card">
              <div className="text-xs text-muted-foreground">Earned Dividend (Net)</div>
              <div className="font-display text-2xl font-extrabold text-gold mt-1">KES 42,560</div>
              <div className="text-[10px] text-green-600 font-semibold mt-0.5 flex items-center gap-0.5">
                <BadgeCheck className="h-3.5 w-3.5" /> Disbursed to FOSA
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-4 shadow-card">
              <div className="text-xs text-muted-foreground">Next Dividend Payout</div>
              <div className="font-display text-2xl font-extrabold text-muted-foreground mt-1">Dec 2025</div>
              <div className="text-[10px] text-muted-foreground mt-0.5">Subject to AGM audit approval</div>
            </div>
          </div>

          {/* Dividend Payout Logs */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
            <h3 className="font-display font-bold text-foreground mb-4">Dividend Information</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead>
                  <tr className="border-b border-border text-muted-foreground uppercase font-bold text-[10px]">
                    <th className="py-2.5">Year</th>
                    <th className="py-2.5">Audited Rate</th>
                    <th className="py-2.5">Gross Dividend</th>
                    <th className="py-2.5">Tax (5%)</th>
                    <th className="py-2.5">Net Dividend</th>
                    <th className="py-2.5">Payment Date</th>
                    <th className="py-2.5 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {dividends.map((div, i) => (
                    <tr key={i} className="hover:bg-secondary/20">
                      <td className="py-3 font-bold text-foreground">{div.year}</td>
                      <td className="py-3 text-primary-deep font-semibold">{div.rate}</td>
                      <td className="py-3 font-semibold text-foreground">{KES(div.gross)}</td>
                      <td className="py-3 text-red-500 font-mono">{KES(div.tax)}</td>
                      <td className="py-3 font-extrabold text-green-600">{KES(div.net)}</td>
                      <td className="py-3 text-muted-foreground">{div.date}</td>
                      <td className="py-3 text-right space-x-1.5">
                        <button 
                          onClick={() => handlePrintSlip(div)}
                          className="inline-flex items-center gap-1 rounded-lg border border-border hover:border-primary hover:text-primary px-2.5 py-1 text-[11px] font-bold text-muted-foreground transition-all bg-white"
                        >
                          <Printer className="h-3 w-3" /> Slip
                        </button>
                        <button className="inline-flex items-center gap-1 rounded-lg bg-primary text-primary-foreground hover:bg-primary-deep px-2.5 py-1 text-[11px] font-bold transition-all">
                          <ArrowDownToLine className="h-3 w-3" /> PDF
                        </button>
                      </td>
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
