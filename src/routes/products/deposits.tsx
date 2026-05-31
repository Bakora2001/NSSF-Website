import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import {
  ChevronRight, ShieldCheck, BookOpen, Activity, PiggyBank,
  Sparkles, Lock, User, TrendingUp, CheckCircle2, ArrowRight,
  BadgeCheck,
} from "lucide-react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/products/deposits")({
  head: () => ({
    meta: [
      { title: "Deposits Savings Account — NSSF SACCO" },
      { name: "description", content: "Explore non-withdrawable and withdrawable savings options with NSSF SACCO." },
    ],
  }),
  component: DepositsPage,
});

/* ─── Tilt Card ──────────────────────────────────────────────────────────── */
function TiltCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-80, 80], [8, -8]);
  const rotateY = useTransform(x, [-80, 80], [-8, 8]);
  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - r.left - r.width / 2);
    y.set(e.clientY - r.top - r.height / 2);
  }
  function onLeave() { x.set(0); y.set(0); }
  return (
    <motion.div
      onMouseMove={onMove} onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.025 }}
      className={`cursor-pointer rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div style={{ transform: "translateZ(18px)" }}>{children}</div>
    </motion.div>
  );
}

/* ─── Illustration ───────────────────────────────────────────────────────── */
function DepositsIllustration() {
  return (
    <svg viewBox="0 0 220 180" className="h-36 w-auto drop-shadow-xl">
      <defs>
        <linearGradient id="dg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#286d65" /><stop offset="100%" stopColor="#194c45" />
        </linearGradient>
        <linearGradient id="dg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" /><stop offset="100%" stopColor="#e8a000" />
        </linearGradient>
        <linearGradient id="dg3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a1d862" /><stop offset="100%" stopColor="#7cb63f" />
        </linearGradient>
      </defs>
      {/* Coins behind */}
      <circle cx="60" cy="55" r="24" fill="url(#dg2)" />
      <circle cx="88" cy="44" r="20" fill="url(#dg2)" opacity="0.9" />
      <circle cx="116" cy="58" r="22" fill="url(#dg2)" />
      <circle cx="60" cy="55" r="17" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="116" cy="58" r="15" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="3 3" />
      {/* Wallet */}
      <rect x="28" y="70" width="155" height="90" rx="16" fill="url(#dg1)" />
      <path d="M 125 80 L 183 100 L 183 132 L 125 152 Z" fill="#1b4742" />
      <circle cx="152" cy="116" r="11" fill="url(#dg2)" />
      <circle cx="152" cy="116" r="6" fill="#fff" />
      {/* Notes */}
      <path d="M 42 70 L 42 38 L 165 38 L 165 70" fill="url(#dg3)" opacity="0.8" />
      <path d="M 54 70 L 54 26 L 155 26 L 155 70" fill="url(#dg3)" />
      {/* Arrow up */}
      <path d="M 194 30 L 208 48 L 201 48 L 201 65 L 187 65 L 187 48 L 180 48 Z" fill="url(#dg3)" />
    </svg>
  );
}

/* ─── Data ───────────────────────────────────────────────────────────────── */
const ACCOUNTS = [
  {
    id: "normal", name: "Normal Deposits", type: "non-withdrawable",
    category: "Non-Withdrawable Deposits", icon: ShieldCheck, color: "#286d65",
    badge: "Membership Required",
    tagline: "Your gateway to NSSF SACCO membership",
    desc: "On a minimum monthly contribution of Kshs. 3,000, these deposits qualify one to be a member of the Sacco.",
    features: [
      "Minimum monthly contribution of Kshs. 3,000.",
      "Qualifies member for the Development Loan, Emergency Loan, Fanisi Loan, Refinancing Loan, Supersavers Loan and School Fees Loan.",
      "Forms the basis of all BOSA loan multipliers.",
    ],
    highlight: "Min. Monthly: Kshs. 3,000",
  },
  {
    id: "karo", name: "Karo Deposits", type: "non-withdrawable",
    category: "Non-Withdrawable Deposits", icon: BookOpen, color: "#286d65",
    badge: "4× Multiplier",
    tagline: "Build steadily and borrow at 4× your savings",
    desc: "A contributory scheme whose minimum monthly contribution is Kshs. 1,000. It enables a member to qualify for the Karo Loan product whose multiplier is 4 times the Karo Deposits saved.",
    features: [
      "Minimum monthly contribution of Kshs. 1,000.",
      "Enables access to Karo Loan at a multiplier of 4× Karo Deposits saved.",
      "Dedicated scheme separate from normal deposits.",
    ],
    highlight: "Loan Multiplier: 4×",
  },
  {
    id: "flex", name: "Flex Deposits", type: "non-withdrawable",
    category: "Non-Withdrawable Deposits", icon: Activity, color: "#a1d862",
    badge: "3× Multiplier",
    tagline: "Flexible contributions, rewarding returns",
    desc: "A contributory and flexible scheme whose monthly minimum contribution is Kshs. 1,000. It enables a member to qualify for the Special Flex Loan whose multiplier is 3 times the Special Flex deposits saved.",
    features: [
      "Minimum monthly contribution of Kshs. 1,000.",
      "Enables access to Special Flex Loan at multiplier of 3× deposits.",
      "Savings under this scheme do not participate in normal loan granting.",
    ],
    highlight: "Loan Multiplier: 3×",
  },
  {
    id: "jumbo", name: "Jumbo Deposits", type: "withdrawable",
    category: "Withdrawable Deposit", icon: PiggyBank, color: "#286d65",
    badge: "Current Account",
    tagline: "Your transactional savings hub at FOSA",
    desc: "Members' cash savings held in the FOSA accounts in the Sacco. Acts as a current account with services such as EFT funds transfers, Salary processing, Banker's cheques, Agency Banking, Mobile Banking.",
    features: [
      "Minimum deposit of Kshs. 1,100 for account operation.",
      "Services include EFT, Salary Processing, Banker's Cheques, Agency Banking.",
      "Accessible via Mobile Banking, Co-op ATMs and VISA-branded ATMs.",
    ],
    highlight: "Min. Deposit: Kshs. 1,100",
  },
  {
    id: "tausi", name: "Tausi Deposits", type: "withdrawable",
    category: "Withdrawable Deposit", icon: Sparkles, color: "#F5B83C",
    badge: "4× Loan Multiplier",
    tagline: "Monthly savings that unlock Tausi Loan",
    desc: "Minimum monthly savings sustained at Kshs. 500 through check-off or standing order. This account is used to apply for Tausi Loan at a multiplier of 4 times the Tausi savings.",
    features: [
      "Minimum monthly savings of Kshs. 500 through check-off or standing order.",
      "Apply for Tausi Loan at a multiplier of 4× the Tausi savings in account.",
      "Must save for minimum 6 months to qualify for the Tausi Loan.",
      "Interest credited to account on monthly basis at the rate of 3% p.a.",
    ],
    highlight: "Interest: 3% p.a.",
  },
  {
    id: "fixed", name: "Fixed Deposits", type: "withdrawable",
    category: "Withdrawable Deposit", icon: Lock, color: "#286d65",
    badge: "Up to 11% p.a.",
    tagline: "Lock in your savings and earn top returns",
    desc: "Fixed Deposit accounts available with the minimum amount to fix from Kshs. 50,000. Duration to maturity varies from 91 days, 182 days and 365 days.",
    features: [
      "Minimum amount to fix is Kshs. 50,000.",
      "Maturity durations: 91 days, 182 days and 365 days.",
      "Interest rates negotiable and competitive up to 11% p.a.",
    ],
    highlight: "Min. Fix: Kshs. 50,000",
  },
  {
    id: "junior", name: "Junior Akiba Deposits", type: "withdrawable",
    category: "Withdrawable Deposit", icon: User, color: "#F5B83C",
    badge: "For Children",
    tagline: "Invest in your child's future today",
    desc: "This account enables one to accumulate savings for a child/children under the age 18. The account is operated by the child's sponsor.",
    features: [
      "For children under age 18, operated by the child's sponsor.",
      "Minimum savings of Kshs. 300 through check-off or standing order.",
      "Interest credited to account on monthly basis at the rate of 6% p.a.",
    ],
    highlight: "Interest: 6% p.a.",
  },
  {
    id: "mustard", name: "Mustard Asset Deposits", type: "withdrawable",
    category: "Withdrawable Deposit", icon: TrendingUp, color: "#a1d862",
    badge: "Retirement",
    tagline: "Plant a seed today — harvest in retirement",
    desc: "For restful time when out of gainful employment, plant a mustard seed today. The account gives an additional facility to save for your retirement at a minimum of Kshs. 500 per month contribution through check-off.",
    features: [
      "Minimum monthly contribution of Kshs. 500 through check-off.",
      "Designed to accumulate funds for retirement security.",
      "Interest rate at 10% p.a.",
    ],
    highlight: "Interest: 10% p.a.",
  },
];

const TABS = [
  { id: "all", label: "All Accounts" },
  { id: "non-withdrawable", label: "Non-Withdrawable" },
  { id: "withdrawable", label: "Withdrawable" },
];

/* ─── Page ───────────────────────────────────────────────────────────────── */
function DepositsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = ACCOUNTS.filter((a) => activeTab === "all" || a.type === activeTab);

  return (
    <PublicLayout>
      {/* Hero */}
      <div className="relative bg-gradient-to-br from-[#286d65]/10 via-[#a1d862]/5 to-[#F5B83C]/5 py-14 border-b border-border overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full border border-[#286d65]/10"
              style={{ width: 90 + i * 55, height: 90 + i * 55, top: `${5 + i * 10}%`, left: `${55 + i * 5}%` }}
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
              <span className="text-foreground font-semibold">Deposits Savings Account</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground leading-tight">
              Deposits Savings<br /><span className="text-[#286d65]">Account</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
              A variety of savings options — both non-withdrawable and withdrawable — designed to help you save, grow, and qualify for competitive loan products.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: ShieldCheck, text: "SASRA Regulated" },
                { icon: BadgeCheck, text: "Competitive Rates" },
                { icon: TrendingUp, text: "High Multipliers" },
              ].map((item, i) => (
                <motion.div key={i} initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-bold text-[#286d65] border border-[#286d65]/20 shadow-sm">
                  <item.icon className="h-3.5 w-3.5" />{item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.2 }} className="hidden md:flex items-center justify-center">
            <DepositsIllustration />
          </motion.div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-[#286d65] text-white">
        <div className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Account Types", value: "8" },
            { label: "Min. Contribution", value: "Kshs. 300" },
            { label: "Max. Interest", value: "10% p.a." },
            { label: "Max. Multiplier", value: "4×" },
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

        {/* Category explanations */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {[
            {
              title: "Non-Withdrawable Deposits",
              color: "#286d65",
              desc: "These are your core membership deposits that serve as collateral for BOSA loans. They grow your loan eligibility multiplier and cannot be withdrawn while you are an active member.",
              items: ["Normal Deposits", "Karo Deposits", "Flex Deposits"],
            },
            {
              title: "Withdrawable Deposits",
              color: "#F5B83C",
              desc: "These are flexible savings accounts within the FOSA system that can be accessed and withdrawn, while still earning interest and qualifying you for certain loan products.",
              items: ["Jumbo Deposits", "Tausi Deposits", "Fixed Deposits", "Junior Akiba", "Mustard Asset"],
            },
          ].map((cat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }}
              className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <span className="h-3 w-3 rounded-full" style={{ background: cat.color }} />
                <h3 className="font-display font-bold text-sm text-foreground">{cat.title}</h3>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-3">{cat.desc}</p>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span key={item} className="text-[10px] font-bold px-2.5 py-1 rounded-full" style={{ background: `${cat.color}15`, color: cat.color }}>
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => (
            <motion.button key={tab.id} onClick={() => setActiveTab(tab.id)} whileTap={{ scale: 0.97 }}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all border ${activeTab === tab.id ? "bg-[#286d65] text-white border-[#286d65] shadow-md" : "bg-white text-muted-foreground border-border hover:border-[#286d65]/40 hover:text-[#286d65]"}`}>
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((acc, i) => {
              const Icon = acc.icon;
              const isExpanded = expandedId === acc.id;
              return (
                <motion.div key={acc.id} layout initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.3, delay: i * 0.06 }}>
                  <TiltCard>
                    <div className="flex items-start justify-between mb-4">
                      <span className="grid h-12 w-12 place-items-center rounded-2xl" style={{ background: `${acc.color}18` }}>
                        <Icon className="h-5 w-5" style={{ color: acc.color }} />
                      </span>
                      <span className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full" style={{ background: `${acc.color}15`, color: acc.color }}>
                        {acc.badge}
                      </span>
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#F5B83C] block mb-1">{acc.category}</span>
                    <h3 className="font-display font-bold text-base text-foreground mb-1 leading-snug">{acc.name}</h3>
                    <p className="text-[11px] text-muted-foreground mb-3 italic">{acc.tagline}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{acc.desc}</p>
                    <div className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold mb-4" style={{ background: `${acc.color}12`, color: acc.color }}>
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: acc.color }} />
                      {acc.highlight}
                    </div>
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.25 }}
                          className="overflow-hidden border-t border-border/40 pt-4 mb-4 space-y-2">
                          {acc.features.map((feat, fi) => (
                            <div key={fi} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#286d65] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                    <button onClick={() => setExpandedId(isExpanded ? null : acc.id)}
                      className="flex items-center gap-1.5 text-xs font-bold transition-colors" style={{ color: acc.color }}>
                      {isExpanded ? "Show Less" : "View Features"}
                      <motion.span animate={{ rotate: isExpanded ? 90 : 0 }} transition={{ duration: 0.2 }}>
                        <ArrowRight className="h-3.5 w-3.5" />
                      </motion.span>
                    </button>
                  </TiltCard>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-[#286d65] py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-3">Start Saving With NSSF SACCO</h2>
            <p className="text-white/75 text-sm mb-6 max-w-lg mx-auto">Join thousands of members enjoying competitive interest rates, flexible savings options and high loan multipliers.</p>
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
