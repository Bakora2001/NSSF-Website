import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { ChevronRight, DollarSign, CheckCircle2, FileText, Download, ArrowRight, Smartphone, BadgeCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/products/fosa-loans")({
  head: () => ({
    meta: [
      { title: "FOSA Loan Products — NSSF SACCO" },
      { name: "description", content: "Apply for salary advances, mobile loans, and custom transactional credits from NSSF SACCO." },
    ],
  }),
  component: FosaLoansPage,
});

/* ─── Illustration ───────────────────────────────────────────────────────── */
function CashIllustration() {
  return (
    <svg viewBox="0 0 220 180" className="h-36 w-auto drop-shadow-xl">
      <defs>
        <linearGradient id="fl1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#286d65" /><stop offset="100%" stopColor="#194c45" />
        </linearGradient>
        <linearGradient id="fl2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" /><stop offset="100%" stopColor="#e8a000" />
        </linearGradient>
      </defs>
      <circle cx="55" cy="100" r="18" fill="url(#fl2)" />
      <circle cx="165" cy="105" r="16" fill="url(#fl2)" />
      <rect x="38" y="45" width="128" height="76" rx="10" fill="url(#fl1)" transform="rotate(-5 100 83)" />
      <rect x="52" y="60" width="104" height="46" rx="7" fill="#fff" opacity="0.13" transform="rotate(-5 100 83)" />
      <text x="106" y="95" fill="#ffd700" fontWeight="900" fontSize="38" textAnchor="middle" transform="rotate(-5 100 83)">$</text>
      <line x1="62" y1="66" x2="84" y2="66" stroke="#ffd700" strokeWidth="3.5" transform="rotate(-5 100 83)" />
      <line x1="122" y1="100" x2="144" y2="100" stroke="#ffd700" strokeWidth="3.5" transform="rotate(-5 100 83)" />
      <path d="M 188 28 L 204 46 L 197 46 L 197 63 L 181 63 L 181 46 L 174 46 Z" fill="#a1d862" />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const LOANS = [
  {
    id: "jumbo", name: "Jumbo Loan", tag: "Salary Linked", color: "#286d65",
    badge: "Max 42 Months",
    tagline: "Premium FOSA credit with salary check-off repayment",
    desc: "Our core premium Front Office transactional loan — up to Kshs. 800,000.",
    features: [
      "The Loan will be granted up to a maximum of Kshs. 800,000.00 repayable at an interest rate of 13.5% per annum for 42 months.",
      "Appraisal fee of 1% of the Loan will be recovered on approval together with insurance fee of 1%.",
      "Repayment will be through check-off or salary passing through FOSA.",
      "Minimum of 6 guarantors is required.",
    ],
  },
  {
    id: "salary-advance", name: "Salary Advance Loan", tag: "Salary Linked", color: "#286d65",
    badge: "1 Month",
    tagline: "Quick emergency funds before payday",
    desc: "Get quick emergency advance funds before payday — up to Kshs. 50,000 in a single month.",
    features: [
      "The Loan shall be granted to a maximum of Kshs. 50,000 repayable within a month at an interest rate of 6% per month.",
      "Appraisal fee of 1% will be recovered on approval together with insurance fee of 1% of the Loan granted.",
      "One guarantor is required.",
      "Repayment will be through monthly salary passing through FOSA account in the Sacco.",
    ],
  },
  {
    id: "twiga", name: "FOSA Twiga Loan", tag: "Special Projects", color: "#a1d862",
    badge: "Max 48 Months",
    tagline: "High limit FOSA credit with Twiga savings commitment",
    desc: "High limit transactional loan with a Twiga savings commitment — up to KES. 1,200,000.",
    features: [
      "Repayment will be through check-off or salary passing through FOSA.",
      "Loan must be fully guaranteed by 6 guarantors.",
      "Maximum Loan amount is KES. 1,200,000.",
      "The interest rate is at 13.5% per annum up to a maximum of 48 months.",
      "The Loan applicant on approval, must open a Twiga Savings Account and save a minimum of Kshs. 1,000 or 0.5% of the Loan amount, whichever is higher.",
      "Appraisal Fee of 1% of the Loan will be recovered on approval together with insurance fee of 1%.",
    ],
  },
  {
    id: "tausi-loan", name: "Tausi Loan", tag: "Salary Linked", color: "#286d65",
    badge: "Max 36 Months",
    tagline: "Linked directly to your Tausi savings — 6× multiplier",
    desc: "Transactional credit linked directly to your Tausi savings at a 6× multiplier.",
    features: [
      "The Loan will be granted six times Tausi Savings up to a maximum of Kshs. 1,000,000.00 repayable in 36 months at an interest rate of 13.5% per annum on flat rate.",
      "Appraisal fee of 1% of the Loan will be recovered on approval together with an insurance fee of 1%.",
      "Repayment will be through check-off or salary passing through the Sacco FOSA Account.",
      "A member must have a Tausi savings Account saving a minimum of Kshs. 500 per month.",
      "Minimum of six guarantors is required.",
    ],
  },
  {
    id: "mustard-asset", name: "Mustard Asset Loan", tag: "Special Projects", color: "#a1d862",
    badge: "Max 60 Months",
    tagline: "Financing for asset or land purchase",
    desc: "Designed for purchasing capital assets or land investment — up to Ksh. 2,500,000.",
    features: [
      "Maximum Loan amount is Ksh. 2,500,000.00 repayable in a period of 60 Months.",
      "Interest rate of the Loan is at 14.5% per annum.",
      "Minimum monthly savings will be at Kshs. 500.",
      "Minimum of six guarantors is required.",
      "The Loan purpose should either be Asset or Land purchase.",
    ],
  },
  {
    id: "bima", name: "BIMA Loan", tag: "Instant Credits", color: "#F5B83C",
    badge: "11 Months",
    tagline: "Cover insurance premiums with quick short-term credit",
    desc: "Cover insurance premiums with quick short-term financing — processed within 1 day.",
    features: [
      "Repayment period is 11 months.",
      "Minimum of three guarantors is required.",
      "Insurance fee of 1% recoverable upfront.",
      "Interest rate will be 6% per annum on reducing balance.",
    ],
  },
  {
    id: "premium", name: "Premium Loan", tag: "Salary Linked", color: "#286d65",
    badge: "Max 36 Months",
    tagline: "Mid-term FOSA credit at competitive check-off rates",
    desc: "Mid-term FOSA credit with competitive check-off repayments — up to Kshs. 500,000.",
    features: [
      "Maximum Loan amount is Kshs. 500,000.00 repayable in 36 months at an interest of 14.5% per annum.",
      "Appraisal fee of 1% of the Loan will be recovered on approval together with an insurance Fee of 1% of the Loan granted.",
      "Repayment will be through check-off or salary passing through the Sacco FOSA account.",
      "Minimum of six guarantors is required.",
    ],
  },
  {
    id: "mobile-advance", name: "Mobile Advance Loan", tag: "Instant Credits", color: "#F5B83C",
    badge: "30 Days",
    tagline: "Instant mobile loans — no guarantors required",
    desc: "Instant mobile loans accessible via *477# — up to KES 100,000 without guarantors.",
    features: [
      "A Member is eligible for mobile advance after paying up the Share Capital.",
      "Maximum limit is KES. 100,000.",
      "Interest rate is at 6% for amounts less than KES. 50,000 and 7.5% for amounts more than KES. 50,001.",
      "No guarantors required.",
      "The Member account must not be dormant (Must have made deposit contribution in the last 3 months).",
      "A member will be eligible for up to a maximum of 10% of the total member Deposits.",
      "Mobile advance amount graduation is done on prompt repayment of the loan.",
      "A member can be able to top up their Mobile Advance within the eligible limit.",
      "The loan should be repaid within 30 days.",
    ],
  },
  {
    id: "makeover", name: "MakeOver Loan", tag: "Special Projects", color: "#a1d862",
    badge: "12 Months",
    tagline: "Short-term consumer financing for personal makeovers",
    desc: "Short-term consumer financing for personal upgrades — up to Kshs. 300,000 in 12 months.",
    features: [
      "Maximum Loan amount is Kshs. 300,000 repayable in 12 months at an interest rate of 14.5% per annum.",
      "Appraisal Fee of 1% of the Loan will be recovered on approval together with an insurance fee of 1%.",
      "Repayment is through check-off or Salary passing through the Sacco FOSA account.",
      "Minimum of three guarantors is required.",
    ],
  },
];

const DOWNLOADS = [
  "NSSF SACCO LOAN APPLICATION FORM",
  "NSSF SACCO MEMBERSHIP REGISTRATION FORM",
  "Nssf Sacco Member Details Update Form",
  "TAUSI AND MUSTARD ACCOUNT APPLICATION FORM",
  "FIXED DEPOSIT APPLICATION FORM",
  "Nssf Sacco Mobile Banking Application Form",
];

const TAG_COLORS: Record<string, string> = {
  "Salary Linked": "#286d65",
  "Special Projects": "#a1d862",
  "Instant Credits": "#F5B83C",
};

const TAGS = ["All", "Salary Linked", "Instant Credits", "Special Projects"];

/* ─── Page ───────────────────────────────────────────────────────────────── */
function FosaLoansPage() {
  const [selectedId, setSelectedId] = useState("jumbo");
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
              style={{ width: 80 + i * 55, height: 80 + i * 55, top: `${8 + i * 9}%`, left: `${55 + i * 5}%` }}
              animate={{ rotate: 360 }} transition={{ duration: 18 + i * 5, repeat: Infinity, ease: "linear" }}
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
              <span className="text-foreground font-semibold">FOSA Loan Products</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground leading-tight">
              FOSA Loan<br /><span className="text-[#286d65]">Products</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
              Quick transactional, emergency, and salary-linked credit options advanced directly to your FOSA account — from instant mobile loans to premium development credits.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: Smartphone, text: "Mobile Advance" },
                { icon: BadgeCheck, text: "1-Day Processing" },
                { icon: DollarSign, text: "Up to KES 2.5M" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-bold text-[#286d65] border border-[#286d65]/20 shadow-sm">
                  <item.icon className="h-3.5 w-3.5" />{item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden md:flex items-center justify-center">
            <CashIllustration />
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#286d65] text-white">
        <div className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Loan Products", value: "9+" },
            { label: "Min. Interest", value: "6% p.m." },
            { label: "Max. Loan", value: "KES 2.5M" },
            { label: "Max. Tenure", value: "60 Months" },
          ].map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }} className="text-center">
              <div className="text-xl font-display font-extrabold text-[#a1d862]">{stat.value}</div>
              <div className="text-[10px] text-white/70 uppercase tracking-widest font-bold mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Main */}
      <section className="mx-auto max-w-7xl px-6 py-12 space-y-12">
        {/* Filters */}
        <div className="flex flex-wrap items-center justify-between gap-3">
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

        {/* Sidebar View */}
        {viewMode === "sidebar" && (
          <div className="grid md:grid-cols-[260px_1fr] gap-8 items-start">
            <div className="rounded-2xl border border-border bg-card p-4 shadow-sm space-y-1 sticky top-24">
              <p className="px-3 py-1 text-[11px] font-bold text-muted-foreground uppercase tracking-widest mb-2">FOSA Credits</p>
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

            <AnimatePresence mode="wait">
              <motion.div key={activeLoan.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.25 }}
                className="rounded-3xl border border-border bg-card shadow-elegant overflow-hidden">
                <div className="bg-gradient-to-r from-[#286d65]/10 to-[#a1d862]/5 px-6 py-6 border-b border-border/60 flex items-start gap-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#286d65]/10 text-[#286d65] shrink-0">
                    <DollarSign className="h-6 w-6" />
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
                  <div className="pt-4 border-t border-border/60 flex flex-wrap gap-4 items-center justify-between">
                    <span className="text-xs text-muted-foreground">Repayable via salary check-off or FOSA account channel.</span>
                    <Link to="/join"
                      className="inline-flex items-center gap-2 bg-[#286d65] text-white hover:bg-[#286d65]/90 font-bold rounded-xl px-6 py-2.5 text-xs shadow-sm transition-all">
                      Apply Now <ArrowRight className="h-3.5 w-3.5" />
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
                        <DollarSign className="h-5 w-5" />
                      </span>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{ background: `${TAG_COLORS[loan.tag]}20`, color: TAG_COLORS[loan.tag] }}>
                        {loan.tag}
                      </span>
                    </div>
                    <h3 className="font-display font-bold text-sm text-foreground mb-1">{loan.name}</h3>
                    <p className="text-[11px] text-muted-foreground italic mb-2">{loan.tagline}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed flex-1">{loan.desc}</p>
                    <div className="mt-4 flex items-center gap-1 text-xs font-bold text-[#286d65] hover:text-[#286d65]/80">
                      View Details <ArrowRight className="h-3.5 w-3.5" />
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* Downloads */}
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card">
          <div className="border-b border-border/60 pb-4 mb-6">
            <h2 className="font-display font-extrabold text-xl text-foreground">Application Forms & Downloads</h2>
            <p className="text-xs text-muted-foreground mt-1">Download and fill the forms to submit for credit processing at any FOSA branch.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {DOWNLOADS.map((form, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between rounded-xl border border-border bg-muted/20 p-4 hover:border-[#286d65]/40 hover:bg-[#286d65]/5 transition-all cursor-pointer">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-red-100 text-red-600 group-hover:bg-[#286d65]/10 group-hover:text-[#286d65] transition-colors">
                    <FileText className="h-5 w-5" />
                  </span>
                  <div className="text-xs font-bold text-foreground max-w-[160px] leading-tight">{form}</div>
                </div>
                <Download className="h-4 w-4 text-muted-foreground group-hover:text-[#286d65] transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#286d65] py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-3">Ready to Apply for a FOSA Loan?</h2>
            <p className="text-white/75 text-sm mb-6 max-w-lg mx-auto">Access instant mobile advances or premium salary-linked credit — all processed within 1–2 business days.</p>
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
