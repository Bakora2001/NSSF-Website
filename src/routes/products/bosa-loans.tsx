import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { ChevronRight, Percent, CheckCircle2, ShieldAlert, ArrowRight, BadgeCheck, TrendingUp, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/products/bosa-loans")({
  head: () => ({
    meta: [
      { title: "BOSA Loan Products — NSSF SACCO" },
      { name: "description", content: "Explore development, emergency, education and flex loans with NSSF SACCO BOSA." },
    ],
  }),
  component: BosaLoansPage,
});

/* ─── Illustration ───────────────────────────────────────────────────────── */
function LoanIllustration() {
  return (
    <svg viewBox="0 0 220 180" className="h-36 w-auto drop-shadow-xl">
      <defs>
        <linearGradient id="bl1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#286d65" /><stop offset="100%" stopColor="#194c45" />
        </linearGradient>
        <linearGradient id="bl2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" /><stop offset="100%" stopColor="#e8a000" />
        </linearGradient>
      </defs>
      <rect x="78" y="18" width="62" height="46" rx="10" fill="url(#bl2)" transform="rotate(-10 78 18)" />
      <text x="110" y="50" fill="#1b4742" fontWeight="900" fontSize="24" textAnchor="middle" transform="rotate(-10 78 18)">%</text>
      <rect x="28" y="70" width="155" height="90" rx="16" fill="url(#bl1)" />
      <path d="M 126 80 L 183 100 L 183 132 L 126 152 Z" fill="#1b4742" />
      <circle cx="152" cy="116" r="11" fill="url(#bl2)" />
      <circle cx="56" cy="108" r="24" fill="url(#bl2)" />
      <path d="M48 116 L64 100" stroke="#1b4742" strokeWidth="2.5" />
      <circle cx="52" cy="103" r="4" fill="#1b4742" />
      <circle cx="62" cy="112" r="4" fill="#1b4742" />
      <path d="M 190 30 L 206 48 L 199 48 L 199 65 L 183 65 L 183 48 L 176 48 Z" fill="#a1d862" />
    </svg>
  );
}

/* ─── Loan Data ──────────────────────────────────────────────────────────── */
const LOANS = [
  {
    id: "emergency", name: "Emergency Loan", tag: "Short-Term",
    badge: "Max 18 Months", color: "#e85555",
    tagline: "Fast relief during unexpected financial emergencies",
    desc: "Designed to support members during unexpected financial emergencies with quick processing.",
    features: [
      "The maximum amount is Kshs 200,000.00.",
      "Maximum repayment period is 18 months.",
      "Interest will be at 15% per annum on reducing balance.",
      "The loan shall be assessed three times the member's deposit in the Society.",
      "A minimum of 6 guarantors is required to qualify for the loan.",
    ],
  },
  {
    id: "school-fees", name: "School Fees Loan", tag: "Short-Term",
    badge: "Max 24 Months", color: "#286d65",
    tagline: "Support your children's education without stress",
    desc: "Supporting your children's education without financial stress — quick turnaround for school fees.",
    features: [
      "The maximum amount is Kshs 200,000.",
      "Interest will be at 15% per annum on reducing balance.",
      "Maximum repayment period is 24 months.",
      "Minimum of 6 guarantors is required for this product.",
      "The Loan shall be assessed three times the members deposit in the Society.",
    ],
  },
  {
    id: "normal", name: "Normal Loan (Development)", tag: "Development",
    badge: "Max 48 Months", color: "#286d65",
    tagline: "Our core development loan for long-term projects",
    desc: "The cornerstone development loan for projects, assets and building your future.",
    features: [
      "The loan shall be assessed four times a member's deposits in the Society.",
      "Maximum repayment period for the loan is 48 months.",
      "Interest will be charged at 12% per annum on reducing balance.",
      "Minimum of 6 guarantors is required at loan application.",
    ],
  },
  {
    id: "special-flex", name: "Special Flex Loan", tag: "Development",
    badge: "Max 48 Months", color: "#a1d862",
    tagline: "Flexible financing linked to your Flex Deposits",
    desc: "Issued to members who participate in the Special Flex Savings scheme at 3× multiplier.",
    features: [
      "Special Flex Loans issued to members in the Special Flex Savings scheme.",
      "Maximum loan is 3× a member's deposits in the special flex scheme.",
      "Minimum monthly special flex deposits contribution at KES. 1,000.",
      "Maximum repayment period is 48 months.",
      "Interest will be at 15% per annum on reducing balance.",
      "Savings under the scheme shall not participate in normal loan granting.",
      "Minimum of six guarantors is required.",
    ],
  },
  {
    id: "supersavers", name: "Supersaver's Loan", tag: "Premium",
    badge: "Max 96 Months", color: "#F5B83C",
    tagline: "Exclusive high-value credit for high savers",
    desc: "Tailored for members with deposits above KES 1,500,000 — access premium loan amounts.",
    features: [
      "Eligible for members with Deposits above KES. 1,500,000.",
      "The Loan shall be assessed five times the Member's Deposit in the Society.",
      "Maximum repayment period is 96 months.",
      "Interest is charged at 13.2% per annum on reducing balance.",
      "Minimum of 6 guarantors is required.",
    ],
    table: {
      title: "Applicable Monthly Deposits Upon Qualification",
      headers: ["Loan Range (KES)", "Monthly Deposits (KES)"],
      rows: [["Below 1,000,000", "5,000"], ["1,000,001 – 1,500,000", "5,500"], ["1,500,001 – 2,000,000", "6,000"], ["Above 2,000,000", "7,000"]],
    },
  },
  {
    id: "karo-loan", name: "Karo Loan", tag: "Development",
    badge: "Max 36 Months", color: "#286d65",
    tagline: "Exclusively for KARO Savings Scheme members",
    desc: "Accessed by members who participate in the KARO Savings Scheme at a 4× multiplier.",
    features: [
      "Karo Loans accessed by members in the KARO Savings Scheme.",
      "Maximum repayment period is 36 months.",
      "Interest will be at 13.2% per annum on reducing balance.",
      "The Loan shall be assessed four times the members KARO savings.",
      "Minimum monthly KARO Shares contribution shall be Kshs. 1,000.",
      "Minimum of six guarantors is required.",
    ],
  },
  {
    id: "fanisi", name: "Fanisi Loan", tag: "Premium",
    badge: "Max 84 Months", color: "#286d65",
    tagline: "Larger financing over an extended repayment window",
    desc: "Larger development financing with longer repayment windows — for members committed to sustained saving.",
    features: [
      "The Loan shall be assessed three times member's deposits in the Society.",
      "Maximum Loan repayment period is 84 months.",
      "The interest rate is 14% per annum on reducing balance.",
      "Minimum of 6 guarantors is required for this product.",
      "Member must commit to saving minimum monthly deposits based on loan amount.",
    ],
    table: {
      title: "Minimum Deposits Contributions Schedule",
      headers: ["Loan Amount (KES)", "Minimum Deposits Contribution (KES)"],
      rows: [["Below 400,000", "3,500"], ["400,001 – 1,000,000", "4,000"], ["1,000,001 – 1,500,000", "5,000"], ["1,500,001 – 2,000,000", "6,000"], ["Above 2,000,001", "7,000"]],
    },
  },
  {
    id: "refinancing", name: "Refinancing Loan", tag: "Development",
    badge: "Max 36 Months", color: "#a1d862",
    tagline: "Replace existing debt with more favorable terms",
    desc: "A refinancing loan helps a member replace an existing debt under different, more favorable terms.",
    features: [
      "The loan has a repayment period of 36 months.",
      "To qualify, a member should have member deposits.",
      "Interest rate of 1.34% per month on reducing balance.",
      "A minimum of 6 guarantors is required to qualify for the loan.",
    ],
  },
  {
    id: "nawiri", name: "Nawiri Loan", tag: "Premium",
    badge: "Max 108 Months", color: "#286d65",
    tagline: "Flagship premium loan for high-value members",
    desc: "Premium high-value development financing available to members with Normal Deposits of KES. 1,000,000 and above.",
    features: [
      "The Loan shall be assessed three times Member's Deposits in the Society.",
      "Maximum Loan repayment period is 108 months.",
      "The interest rate is 14% per annum on reducing balance.",
      "Eligible to members with Normal Deposits of KES. 1,000,000 and above.",
      "Minimum of 6 guarantors is required for this product.",
    ],
    table: {
      title: "Monthly Share Contribution Scale",
      headers: ["Loan Amount (KES)", "Minimum Monthly Contribution (KES)"],
      rows: [["Less than 500,000", "5,000"], ["500,001 – 1,000,000", "6,000"], ["1,000,001 – 1,500,000", "7,000"], ["1,500,001 – 2,000,000", "8,000"], ["2,000,001 – 2,500,000", "9,000"], ["Above 2,500,001", "10,000"]],
    },
  },
  {
    id: "daraja", name: "Daraja Loan", tag: "Inclusive",
    badge: "Max 24 Months", color: "#F5B83C",
    tagline: "Designed for members earning KES. 30,000 and below",
    desc: "The Daraja Loan is for members under the Daraja category who deposit a minimum of KES. 1,000 per month.",
    features: [
      "Member must be actively contributing deposits for six months.",
      "Member should be earning KES. 30,000 and below to qualify.",
      "Interest rate of 1.2% per month on reducing balance.",
      "A minimum of 6 guarantors is required to qualify for the loan.",
      "The loan has a flexible maximum repayment period of 24 months.",
      "Assessed at two times your Deposits (Daraja category).",
    ],
  },
];

const TAG_COLORS: Record<string, string> = {
  "Short-Term": "#e85555",
  "Development": "#286d65",
  "Premium": "#F5B83C",
  "Inclusive": "#a1d862",
};

const TAGS = ["All", "Short-Term", "Development", "Premium", "Inclusive"];

/* ─── Page ───────────────────────────────────────────────────────────────── */
function BosaLoansPage() {
  const [selectedId, setSelectedId] = useState("emergency");
  const [activeTag, setActiveTag] = useState("All");
  const [viewMode, setViewMode] = useState<"sidebar" | "grid">("sidebar");

  const filtered = LOANS.filter((l) => activeTag === "All" || l.tag === activeTag);
  const activeLoan = LOANS.find((l) => l.id === selectedId) || LOANS[0];

  return (
    <PublicLayout>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#286d65]/10 via-white to-[#F5B83C]/5 py-14 border-b border-border overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full border border-[#286d65]/10"
              style={{ width: 80 + i * 60, height: 80 + i * 60, top: `${8 + i * 9}%`, left: `${55 + i * 5}%` }}
              animate={{ rotate: 360 }} transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
            />
          ))}
        </div>

        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-[1fr_auto] gap-8 items-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[#286d65] transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 shrink-0" />
              <Link to="/products" className="hover:text-[#286d65] transition-colors">Products</Link>
              <ChevronRight className="h-3 w-3 shrink-0" />
              <span className="text-foreground font-semibold">BOSA Loan Products</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground leading-tight">
              BOSA Loan<br /><span className="text-[#286d65]">Products</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
              Flexible loan solutions designed to meet your personal, education, development and emergency needs — at competitive rates on reducing balance.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: Percent, text: "From 12% p.a." },
                { icon: BadgeCheck, text: "Reducing Balance" },
                { icon: TrendingUp, text: "Up to 5× Multiplier" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-bold text-[#286d65] border border-[#286d65]/20 shadow-sm">
                  <item.icon className="h-3.5 w-3.5" />{item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden md:flex items-center justify-center">
            <LoanIllustration />
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#286d65] text-white">
        <div className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Loan Products", value: "10+" },
            { label: "Min. Interest", value: "12% p.a." },
            { label: "Max. Tenure", value: "108 Months" },
            { label: "Max. Multiplier", value: "5×" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }} className="text-center">
              <div className="text-xl font-display font-extrabold text-[#a1d862]">{stat.value}</div>
              <div className="text-[10px] text-white/70 uppercase tracking-widest font-bold mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <section className="mx-auto max-w-7xl px-6 py-12">
        {/* Filter tags + view toggle */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
          <div className="flex flex-wrap gap-2">
            {TAGS.map((tag) => (
              <button key={tag} onClick={() => { setActiveTag(tag); setViewMode("grid"); }}
                className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all border ${activeTag === tag && viewMode === "grid" ? "bg-[#286d65] text-white border-[#286d65]" : "bg-white text-muted-foreground border-border hover:border-[#286d65]/40 hover:text-[#286d65]"}`}>
                {tag}
              </button>
            ))}
          </div>
          <button onClick={() => setViewMode(viewMode === "sidebar" ? "grid" : "sidebar")}
            className="rounded-full px-4 py-1.5 text-xs font-bold border border-border bg-white text-muted-foreground hover:border-[#286d65]/40 hover:text-[#286d65] transition-all">
            {viewMode === "sidebar" ? "Grid View" : "Detail View"}
          </button>
        </div>

        {/* Sidebar/Detail View */}
        {viewMode === "sidebar" && (
          <div className="grid md:grid-cols-[260px_1fr] gap-8 items-start">
            {/* Sidebar */}
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm space-y-1 sticky top-24">
              <p className="px-3 py-1 text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2">Loan Categories</p>
              {LOANS.map((loan) => (
                <motion.button key={loan.id} onClick={() => setSelectedId(loan.id)} whileTap={{ scale: 0.98 }}
                  className={`w-full text-left rounded-xl px-4 py-3 text-xs font-bold transition-all flex items-center justify-between gap-2 ${selectedId === loan.id ? "bg-[#286d65] text-white shadow-sm" : "text-foreground hover:bg-muted"}`}>
                  <span>{loan.name}</span>
                  <span className="text-[9px] font-bold px-2 py-0.5 rounded-full whitespace-nowrap" style={{
                    background: selectedId === loan.id ? "rgba(255,255,255,0.2)" : `${TAG_COLORS[loan.tag]}20`,
                    color: selectedId === loan.id ? "white" : TAG_COLORS[loan.tag],
                  }}>{loan.tag}</span>
                </motion.button>
              ))}
            </div>

            {/* Detail Panel */}
            <AnimatePresence mode="wait">
              <motion.div key={activeLoan.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}
                className="rounded-3xl border border-border bg-card shadow-elegant overflow-hidden">
                {/* Header */}
                <div className="bg-gradient-to-r from-[#286d65]/10 to-[#a1d862]/5 px-6 py-6 border-b border-border/60 flex items-start gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#286d65]/10 text-[#286d65] shrink-0">
                    <Percent className="h-6 w-6" />
                  </span>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full"
                        style={{ background: `${TAG_COLORS[activeLoan.tag]}20`, color: TAG_COLORS[activeLoan.tag] }}>
                        {activeLoan.tag}
                      </span>
                      <span className="text-[10px] text-muted-foreground font-bold">{activeLoan.badge}</span>
                    </div>
                    <h2 className="font-display font-extrabold text-xl text-foreground">{activeLoan.name}</h2>
                    <p className="text-xs text-muted-foreground mt-0.5 italic">{activeLoan.tagline}</p>
                  </div>
                </div>

                <div className="p-6 md:p-8 space-y-6">
                  <p className="text-sm text-muted-foreground leading-relaxed">{activeLoan.desc}</p>

                  {/* Features */}
                  <div>
                    <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#286d65] mb-4 flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#F5B83C]" /> Loan Features & Requirements
                    </h3>
                    <ul className="space-y-3">
                      {activeLoan.features.map((feat, i) => (
                        <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="h-2 w-2 rounded-full bg-[#286d65] mt-2 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Table if present */}
                  {activeLoan.table && (
                    <div className="border border-border/60 rounded-xl overflow-hidden">
                      <div className="bg-[#286d65]/10 px-4 py-3 text-xs font-bold text-[#286d65]">{activeLoan.table.title}</div>
                      <table className="w-full text-left text-xs border-collapse">
                        <thead>
                          <tr className="bg-muted text-muted-foreground font-semibold border-b border-border/60">
                            {activeLoan.table.headers.map((h, i) => <th key={i} className="px-4 py-3">{h}</th>)}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-border/40">
                          {activeLoan.table.rows.map((row, i) => (
                            <tr key={i} className="hover:bg-muted/50">
                              <td className="px-4 py-3 font-semibold text-foreground">{row[0]}</td>
                              <td className="px-4 py-3 text-muted-foreground font-mono">{row[1]}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  <div className="pt-4 border-t border-border/60 flex flex-wrap gap-4 items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <ShieldAlert className="h-4 w-4 text-[#F5B83C]" />
                      <span>Subject to standard member credit vetting.</span>
                    </div>
                    <Link to="/join"
                      className="inline-flex items-center gap-2 bg-[#286d65] text-white hover:bg-[#286d65]/90 font-bold rounded-xl px-6 py-2.5 text-xs shadow-sm transition-all">
                      Apply For Loan <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Grid View */}
        {viewMode === "grid" && (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filtered.map((loan, i) => (
                <motion.div key={loan.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: i * 0.06 }}>
                  <motion.div whileHover={{ y: -4, scale: 1.01 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="rounded-2xl border border-border bg-card p-5 shadow-sm hover:shadow-lg transition-all cursor-pointer h-full flex flex-col"
                    onClick={() => { setSelectedId(loan.id); setViewMode("sidebar"); }}>
                    <div className="flex items-start justify-between mb-3">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#286d65]/10 text-[#286d65]">
                        <Percent className="h-5 w-5" />
                      </span>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{ background: `${TAG_COLORS[loan.tag]}20`, color: TAG_COLORS[loan.tag] }}>
                        {loan.tag}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-foreground mb-1">{loan.name}</h3>
                    <p className="text-[11px] text-muted-foreground italic mb-2">{loan.tagline}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{loan.desc}</p>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#286d65]">
                      <Clock className="h-3.5 w-3.5" /> {loan.badge}
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-xs font-bold text-[#286d65] hover:text-[#286d65]/80">
                      View Details <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </section>

      {/* CTA */}
      <section className="bg-[#286d65] py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-3">Ready to Apply for a Loan?</h2>
            <p className="text-white/75 text-sm mb-6 max-w-lg mx-auto">Join NSSF SACCO, build your deposits, and access flexible loans at competitive rates on reducing balance.</p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link to="/join" className="rounded-xl bg-[#F5B83C] text-[#286d65] font-bold px-7 py-3 text-sm hover:bg-[#F5B83C]/90 transition-all shadow-lg">Join NSSF SACCO</Link>
              <Link to="/contact" className="rounded-xl border border-white/30 text-white font-bold px-7 py-3 text-sm hover:bg-white/10 transition-all">Contact Us</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}
