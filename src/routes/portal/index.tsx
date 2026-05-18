import { createFileRoute, Link } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { MOCK_MEMBER, MOCK_TRANSACTIONS, MOCK_LOAN_SUMMARY } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { BadgeCheck, PiggyBank, TrendingUp, HandCoins, Wallet, ArrowRight, ArrowUpRight, ArrowDownRight, Smartphone, User, FileText, Sparkles } from "lucide-react";

export const Route = createFileRoute("/portal/")({
  head: () => ({ meta: [{ title: "Dashboard — NSSF SACCO Member Portal" }] }),
  component: Dashboard,
});

const KES = (n: number) => "KES " + n.toLocaleString();

function Dashboard() {
  return (
    <PortalLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-extrabold flex items-center gap-2">
          Welcome back, {MOCK_MEMBER.name.split(" ")[0]} {MOCK_MEMBER.name.split(" ")[1]} <span className="text-2xl">👋</span>
          <span className="inline-flex items-center gap-1 rounded-full bg-lime/20 text-primary-deep px-2.5 py-0.5 text-[10px] font-bold ml-1"><BadgeCheck className="h-3 w-3" /> Verified</span>
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Here's what's happening with your accounts today.</p>
      </div>

      {/* Top stats */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
        <StatCard Icon={PiggyBank} label="Total Savings" value={KES(1278650)} hint="+12.5% this month" color="gold" hintColor="text-green-600" />
        <StatCard Icon={TrendingUp} label="Shares" value={KES(856000)} hint="+8.2% this month" color="lime" hintColor="text-green-600" />
        <StatCard Icon={HandCoins} label="Loan Balance" value={KES(450000)} hint="Outstanding" color="gold" hintColor="text-muted-foreground" />
        <StatCard Icon={Wallet} label="Available Balance" value={KES(828650)} hint="View Accounts →" color="primary" hintColor="text-gold" link="/portal/accounts" />
      </div>

      {/* Middle row: Loan Overview · Recent Transactions · AI Loan Assistant */}
      <div className="grid gap-5 lg:grid-cols-3 mb-6">
        {/* Loan Overview */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-card flex flex-col">
          <h3 className="font-display font-bold text-foreground mb-3">Loan Overview</h3>
          <div className="rounded-xl bg-secondary/40 p-4">
            <div className="text-xs text-muted-foreground">Karo Loan</div>
            <div className="font-display text-2xl font-extrabold text-foreground mt-1">{KES(450000)}</div>
            <div className="text-[11px] text-muted-foreground">Outstanding Balance</div>
          </div>
          <div className="mt-4 flex items-end justify-between">
            <div>
              <div className="text-xs text-muted-foreground">Next Repayment</div>
              <div className="font-display text-lg font-extrabold text-foreground">{KES(15000)}</div>
              <div className="text-[11px] text-muted-foreground">Due on 25 May 2025</div>
            </div>
            <Sparkline />
          </div>
          <div className="mt-4">
            <div className="flex justify-between text-xs mb-1.5"><span className="text-muted-foreground">Repayment Progress</span><span className="font-bold text-foreground">60%</span></div>
            <div className="h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-lime" style={{ width: "60%" }} /></div>
          </div>
          <Button asChild variant="outline" className="mt-5 w-full border-primary text-primary font-bold uppercase tracking-wide text-[11px]"><Link to="/portal/loans">View Loan Details</Link></Button>
        </div>

        {/* Recent Transactions */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
          <h3 className="font-display font-bold text-foreground mb-3">Recent Transactions</h3>
          <div className="space-y-3">
            {MOCK_TRANSACTIONS.slice(0, 4).map((t, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className={`grid h-9 w-9 place-items-center rounded-lg ${t.type === "Credit" ? "bg-lime/20 text-primary-deep" : "bg-gold/15 text-gold-foreground"}`}>
                  {t.type === "Credit" ? <ArrowDownRight className="h-4 w-4" /> : <ArrowUpRight className="h-4 w-4" />}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="text-sm font-semibold text-foreground truncate">{t.description}</div>
                  <div className="text-[11px] text-muted-foreground">{t.date}</div>
                </div>
                <div className={`text-sm font-bold ${t.type === "Credit" ? "text-green-600" : "text-destructive"}`}>
                  {t.type === "Credit" ? "+" : "-"}{KES(t.amount)}
                </div>
              </div>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-5 w-full border-primary text-primary font-bold uppercase tracking-wide text-[11px]"><Link to="/portal/accounts">View All Transactions</Link></Button>
        </div>

        {/* AI Loan Assistant */}
        <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
          <div className="flex items-center gap-2 mb-1">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-soft text-primary"><Sparkles className="h-4 w-4" /></span>
            <h3 className="font-display font-bold text-foreground">AI Loan Assistant</h3>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Based on your profile, you may qualify for the following loans</p>
          <div className="mt-4 rounded-xl border border-border p-4">
            <div className="flex items-start gap-3">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-lime/20 text-primary-deep"><BadgeCheck className="h-4 w-4" /></span>
              <div className="flex-1">
                <div className="font-display font-extrabold text-sm">Karo Loan</div>
                <div className="text-[11px] text-muted-foreground">Up to KES 850,000 · 36 Months</div>
                <div className="mt-2 flex items-end justify-between">
                  <span className="text-xs font-bold text-primary">85% Match</span>
                  <MiniRising />
                </div>
              </div>
            </div>
          </div>
          <Button asChild className="mt-4 w-full bg-gold text-gold-foreground hover:bg-gold/90 font-bold uppercase tracking-wider text-[11px]"><Link to="/portal/ai-assistant">Check Eligibility</Link></Button>
          <Link to="/portal/ai-assistant" className="mt-3 flex items-center justify-center gap-1 text-xs font-semibold text-primary hover:underline">See All Loan Options <ArrowRight className="h-3 w-3" /></Link>
        </div>
      </div>

      {/* Bottom row: Savings Goal · Share Capital · Dividend · Quick Actions */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
          <h3 className="font-display font-bold text-foreground mb-3">Savings Goal</h3>
          <div className="text-xs text-muted-foreground">Holiday Trip</div>
          <div className="flex items-center justify-between mt-1">
            <div className="font-display font-extrabold text-foreground text-sm">{KES(120000)} <span className="text-muted-foreground font-normal">of {KES(200000)}</span></div>
            <span className="text-xs font-bold text-primary">60%</span>
          </div>
          <div className="mt-3 h-2 rounded-full bg-secondary overflow-hidden"><div className="h-full bg-lime" style={{ width: "60%" }} /></div>
          <Button asChild variant="outline" className="mt-5 w-full border-primary text-primary font-bold uppercase tracking-wide text-[11px]"><Link to="/portal/accounts">View Goals</Link></Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
          <h3 className="font-display font-bold text-foreground mb-3">Share Capital Tier</h3>
          <div className="flex items-center justify-between text-xs"><span className="text-muted-foreground">Current Tier</span><span className="font-bold text-foreground">{KES(856000)}</span></div>
          <div className="font-display text-2xl font-extrabold text-foreground mt-2">Tier B</div>
          <div className="text-[11px] text-muted-foreground mt-1">Next Tier: Tier C ({KES(1000000)})</div>
          <Button asChild variant="outline" className="mt-5 w-full border-primary text-primary font-bold uppercase tracking-wide text-[11px]"><Link to="/portal/investments">View Details</Link></Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
          <h3 className="font-display font-bold text-foreground mb-3">Dividend Status</h3>
          <div className="text-xs text-muted-foreground">2024 Dividend</div>
          <div className="font-display text-2xl font-extrabold text-foreground mt-1">{KES(25680)}</div>
          <div className="text-[11px] text-muted-foreground mt-1">Paid on 15 April 2025</div>
          <Button asChild variant="outline" className="mt-5 w-full border-primary text-primary font-bold uppercase tracking-wide text-[11px]"><Link to="/portal/investments">View History</Link></Button>
        </div>

        <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
          <h3 className="font-display font-bold text-foreground mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 gap-3">
            <QA Icon={User} label="Quick Transfer" to="/portal/transfers" />
            <QA Icon={HandCoins} label="Pay Loan" to="/portal/loans" />
            <QA Icon={FileText} label="My Statements" to="/portal/accounts" />
            <QA Icon={Smartphone} label="Mobile Banking" to="/portal/accounts" />
          </div>
        </div>
      </div>

      {/* Hide unused vars warning */}
      <div className="hidden">{MOCK_LOAN_SUMMARY.length}</div>
    </PortalLayout>
  );
}

function StatCard({ Icon, label, value, hint, color, hintColor }: { Icon: any; label: string; value: string; hint: string; color: "primary"|"gold"|"lime"; hintColor: string; link?: string }) {
  const cls = color === "primary" ? "bg-primary-soft text-primary" : color === "gold" ? "bg-gold/15 text-gold-foreground" : "bg-lime/20 text-primary-deep";
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
      <div className="flex items-start gap-3">
        <span className={`grid h-11 w-11 place-items-center rounded-full ${cls}`}><Icon className="h-5 w-5" strokeWidth={2.2} /></span>
        <div className="flex-1 min-w-0">
          <div className="text-xs font-semibold text-muted-foreground">{label}</div>
          <div className="mt-0.5 font-display text-xl font-extrabold text-gold">{value}</div>
        </div>
      </div>
      <div className={`mt-3 text-[11px] font-semibold ${hintColor}`}>{hint}</div>
    </div>
  );
}

function QA({ Icon, label, to }: { Icon: any; label: string; to: string }) {
  return (
    <Link to={to} className="rounded-xl border border-border p-3 text-center hover:bg-secondary/50 transition">
      <span className="mx-auto mb-1.5 grid h-9 w-9 place-items-center rounded-full bg-primary-soft text-primary"><Icon className="h-4 w-4" /></span>
      <div className="text-[11px] font-semibold text-foreground">{label}</div>
    </Link>
  );
}

function Sparkline() {
  return (
    <svg viewBox="0 0 100 40" className="w-24 h-10" preserveAspectRatio="none">
      <defs>
        <linearGradient id="sparkFill" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.65 0.18 145)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="oklch(0.65 0.18 145)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0,32 C20,28 30,24 45,20 C60,16 70,12 100,4 L100,40 L0,40 Z" fill="url(#sparkFill)" />
      <path d="M0,32 C20,28 30,24 45,20 C60,16 70,12 100,4" fill="none" stroke="oklch(0.65 0.18 145)" strokeWidth="2" strokeDasharray="4 3" strokeLinecap="round" />
    </svg>
  );
}

function MiniRising() {
  return (
    <svg viewBox="0 0 60 24" className="w-16 h-6">
      <path d="M2,20 C12,18 20,12 30,10 C40,8 48,6 58,3" fill="none" stroke="oklch(0.65 0.18 145)" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

