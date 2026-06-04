import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import {
  ChevronRight, Wallet, Sparkles, Star, Flame, Lock,
  Users, Calendar, CheckCircle2, ArrowRight, ShieldCheck, BadgeCheck,
} from "lucide-react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/products/fosa-savings")({
  head: () => ({
    meta: [
      { title: "FOSA Savings Accounts — NSSF SACCO" },
      { name: "description", content: "Open transactional and targeted savings accounts under FOSA at NSSF SACCO." },
    ],
  }),
  component: FosaSavingsPage,
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
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      whileHover={{ scale: 1.025 }}
      className={`cursor-pointer rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-xl transition-shadow duration-300 ${className}`}
    >
      <div style={{ transform: "translateZ(18px)" }}>{children}</div>
    </motion.div>
  );
}

/* ─── Hero Illustration ──────────────────────────────────────────────────── */
function FosaSavingsIllustration() {
  return (
    <svg viewBox="0 0 220 180" className="h-36 w-auto drop-shadow-xl">
      <defs>
        <linearGradient id="fsg1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#286d65" />
          <stop offset="100%" stopColor="#194c45" />
        </linearGradient>
        <linearGradient id="fsg2" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#e8a000" />
        </linearGradient>
        <linearGradient id="fsg3" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a1d862" />
          <stop offset="100%" stopColor="#7cb63f" />
        </linearGradient>
      </defs>
      {/* Coin stack */}
      <ellipse cx="60" cy="145" rx="28" ry="8" fill="url(#fsg2)" opacity="0.4" />
      <rect x="32" y="120" width="56" height="26" rx="4" fill="url(#fsg2)" />
      <ellipse cx="60" cy="120" rx="28" ry="8" fill="#ffd700" />
      <rect x="32" y="100" width="56" height="22" rx="4" fill="#f0c800" />
      <ellipse cx="60" cy="100" rx="28" ry="8" fill="#ffd700" />
      <rect x="32" y="82" width="56" height="20" rx="4" fill="#e8b800" />
      <ellipse cx="60" cy="82" rx="28" ry="8" fill="#ffd700" />
      {/* Piggy bank body */}
      <ellipse cx="148" cy="110" rx="52" ry="42" fill="url(#fsg1)" />
      <rect x="188" y="98" width="18" height="22" rx="5" fill="#1b4742" />
      <circle cx="196" cy="104" r="3" fill="#ffd700" />
      <circle cx="196" cy="113" r="3" fill="#ffd700" />
      <path d="M 120 78 L 108 58 L 126 68 Z" fill="#1b4742" />
      <path d="M 162 76 L 174 56 L 156 66 Z" fill="#1b4742" />
      <rect x="126" y="143" width="14" height="22" rx="5" fill="#153b37" />
      <rect x="155" y="143" width="14" height="22" rx="5" fill="#153b37" />
      <ellipse cx="148" cy="74" rx="13" ry="4" fill="#153b37" />
      <circle cx="138" cy="106" r="5" fill="#153b37" opacity="0.7" />
      {/* Up arrow */}
      <path d="M 198 40 L 210 55 L 204 55 L 204 70 L 192 70 L 192 55 L 186 55 Z" fill="url(#fsg3)" />
      {/* Small sparkle */}
      <circle cx="30" cy="40" r="5" fill="#ffd700" opacity="0.7" />
      <circle cx="20" cy="60" r="3" fill="#ffd700" opacity="0.5" />
    </svg>
  );
}

/* ─── Account Data ───────────────────────────────────────────────────────── */
const ACCOUNTS = [
  {
    id: "jumbo-savings",
    name: "FOSA Jumbo Savings Account",
    type: "transactional",
    category: "Transactional Account",
    icon: Wallet,
    color: "#286d65",
    badge: "Most Popular",
    tagline: "Your everyday banking home at NSSF SACCO",
    desc: "The account creates an avenue for a member to access several services in FOSA e.g. E.F.T, Salary Processing, Dividends Payments, Sacco Loans, Banker's Cheques etc. The account is similar to a current account in a Bank but this earns interest annually.",
    features: [
      "Savings account shall be maintained at a minimum balance of Kshs. 1,000.00",
      "Funds are accessible through Mobile Banking M-Pesa platform, Co-op Agency, Co-operative Bank ATMs and Visa branded ATMs.",
      "Minimum balance to earn a competitive interest rate is at Kshs. 3,000.00",
      "The account is similar to a current account in a Bank but earns interest annually.",
    ],
    highlight: "Min. Balance: Kshs. 1,000",
  },
  {
    id: "tausi-savings",
    name: "Tausi Savings Account",
    type: "targeted",
    category: "Targeted Savings",
    icon: Sparkles,
    color: "#286d65",
    badge: "6× Multiplier",
    tagline: "Save and unlock premium Tausi Loan benefits",
    desc: "A special targeted scheme to accumulate funds and secure the premium Tausi Loan product at high multipliers.",
    features: [
      "Minimum monthly savings is at Kshs. 500.00.",
      "This account will be used to advance Tausi Loan at a Multiplier of 6 times the Tausi Savings amount.",
      "A competitive interest rate is paid on annual basis.",
    ],
    highlight: "Loan Multiplier: 6×",
  },
  {
    id: "junior-akiba",
    name: "Junior Akiba",
    type: "targeted",
    category: "Targeted Savings",
    icon: Star,
    color: "#F5B83C",
    badge: "For Children",
    tagline: "Secure your child's financial future today",
    desc: "The account will enable one to accumulate savings for a child/children under the age of 18. The account will be operated by the child's sponsor.",
    features: [
      "Minimum savings is at Kshs. 300 through checkoff, Mobile Banking MPesa platform, standing orders and also over the counter withdrawals.",
      "A competitive interest rate is payable on annual basis.",
      "Operated by the child's sponsor on behalf of the beneficiary.",
    ],
    highlight: "Min. Monthly: Kshs. 300",
  },
  {
    id: "mustard-savings",
    name: "Mustard Savings Account",
    type: "retirement",
    category: "Fixed & Retirement",
    icon: Flame,
    color: "#a1d862",
    badge: "Retirement",
    tagline: "Plant a seed today — harvest tomorrow",
    desc: "To secure your future when out of gainful employment, plant a mustard seed today. The account gives an additional facility to save for your retirement.",
    features: [
      "Minimum of Kshs. 300 per month contribution through check-off, standing order etc.",
      "The account attracts a competitive interest rate payable on annual basis.",
      "Savings continue growing even after leaving active employment.",
    ],
    highlight: "Min. Monthly: Kshs. 300",
  },
  {
    id: "fixed-deposit",
    name: "Fixed Deposit & Call Account",
    type: "retirement",
    category: "Fixed & Retirement",
    icon: Lock,
    color: "#286d65",
    badge: "6% p.a.+",
    tagline: "Maximize returns on your idle funds",
    desc: "This account allows you to maximize returns while you wait to utilize your money over flexible lock durations.",
    features: [
      "Minimum opening balance of Kshs. 10,000.",
      "Attracts a competitive interest rate at a minimum of 6% p.a. payable on monthly basis.",
      "Flexible lock-in durations to suit your needs.",
    ],
    highlight: "Min. Opening: Kshs. 10,000",
  },
  {
    id: "pamoja-savings",
    name: "Pamoja Savings Account",
    type: "transactional",
    category: "Group & Chama Account",
    icon: Users,
    color: "#286d65",
    badge: "Group Account",
    tagline: "Pool resources together with your Chama",
    desc: "This account is for Chama and Registered groups. At least one member of the group should be a member of NSSF SACCO.",
    features: [
      "At least one member of the group should be a member of NSSF SACCO.",
      "Minutes of the group meeting authorizing officials to open the chama account are required.",
      "The group name should be registered following the government registration process.",
      "Minimum interest earning balance is Kshs. 20,000, earned annually.",
      "The account has no monthly charges.",
    ],
    highlight: "No Monthly Charges",
  },
  {
    id: "johari-holiday",
    name: "Johari Holiday Savings",
    type: "targeted",
    category: "Targeted Savings",
    icon: Calendar,
    color: "#F5B83C",
    badge: "Travel & Leisure",
    tagline: "Save today — travel the world tomorrow",
    desc: "The purpose of this account is to save for a holiday trip organized by the Sacco annually at highly subsidized rates.",
    features: [
      "The account has no monthly charges.",
      "It has no minimum balance requirement.",
      "Purpose of the account is to save for a holiday trip organized by the Sacco annually at subsidized rates.",
      "Trips include Dubai, Thailand, Mombasa and Maasai Mara.",
    ],
    highlight: "No Min. Balance",
  },
];

const TABS = [
  { id: "all", label: "All Accounts" },
  { id: "transactional", label: "Transactional" },
  { id: "targeted", label: "Targeted Savings" },
  { id: "retirement", label: "Fixed & Retirement" },
];

/* ─── Page Component ─────────────────────────────────────────────────────── */
function FosaSavingsPage() {
  const [activeTab, setActiveTab] = useState("all");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filtered = ACCOUNTS.filter((a) => activeTab === "all" || a.type === activeTab);

  return (
    <PublicLayout>
      {/* ── Hero ── */}
      <div className="relative bg-gradient-to-br from-[#286d65]/10 via-[#a1d862]/5 to-[#F5B83C]/5 py-14 border-b border-border overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full border border-[#286d65]/10"
              style={{
                width: 80 + i * 60,
                height: 80 + i * 60,
                top: `${10 + i * 8}%`,
                left: `${60 + i * 4}%`,
              }}
              animate={{ rotate: 360 }}
              transition={{ duration: 20 + i * 5, repeat: Infinity, ease: "linear" }}
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
              <span className="text-foreground font-semibold">FOSA Savings Accounts</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground leading-tight">
              FOSA Savings<br />
              <span className="text-[#286d65]">Accounts</span>
            </h1>
            <p className="mt-4 text-muted-foreground max-w-xl text-sm leading-relaxed">
              Front Office Services Activity (FOSA) accounts give you transactional banking, mobile access, 
              salary processing and targeted savings — all earning competitive interest annually.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {[
                { icon: ShieldCheck, text: "SASRA Regulated" },
                { icon: BadgeCheck, text: "Earn Annual Interest" },
                { icon: Wallet, text: "Mobile Banking Ready" },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-full px-4 py-1.5 text-xs font-bold text-[#286d65] border border-[#286d65]/20 shadow-sm"
                >
                  <item.icon className="h-3.5 w-3.5" />
                  {item.text}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center justify-center"
          >
            <FosaSavingsIllustration />
          </motion.div>
        </div>
      </div>

      {/* ── Stats Bar ── */}
      <div className="bg-[#286d65] text-white">
        <div className="mx-auto max-w-7xl px-6 py-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Account Types", value: "7+" },
            { label: "Min. Balance", value: "Kshs. 300" },
            { label: "Max. Interest", value: "6% p.a." },
            { label: "Loan Multiplier", value: "Up to 6×" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.08 }}
              className="text-center"
            >
              <div className="text-xl font-display font-extrabold text-[#a1d862]">{stat.value}</div>
              <div className="text-[10px] text-white/70 uppercase tracking-widest font-bold mt-0.5">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Main Content ── */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        {/* Tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {TABS.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              whileTap={{ scale: 0.97 }}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all border ${
                activeTab === tab.id
                  ? "bg-[#286d65] text-white border-[#286d65] shadow-md"
                  : "bg-white text-muted-foreground border-border hover:border-[#286d65]/40 hover:text-[#286d65]"
              }`}
            >
              {tab.label}
            </motion.button>
          ))}
        </div>

        {/* Cards Grid */}
        <motion.div
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((acc, i) => {
              const Icon = acc.icon;
              const isExpanded = expandedId === acc.id;
              return (
                <motion.div
                  key={acc.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <TiltCard>
                    {/* Badge */}
                    <div className="flex items-start justify-between mb-4">
                      <span
                        className="grid h-12 w-12 place-items-center rounded-2xl"
                        style={{ background: `${acc.color}18` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: acc.color }} />
                      </span>
                      <span
                        className="text-[9px] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full"
                        style={{ background: `${acc.color}15`, color: acc.color }}
                      >
                        {acc.badge}
                      </span>
                    </div>

                    <span className="text-[10px] uppercase font-bold tracking-widest text-[#F5B83C] block mb-1">
                      {acc.category}
                    </span>
                    <h3 className="font-display font-bold text-base text-foreground mb-1 leading-snug">{acc.name}</h3>
                    <p className="text-[11px] text-muted-foreground mb-3 italic">{acc.tagline}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-4">{acc.desc}</p>

                    {/* Highlight pill */}
                    <div
                      className="inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[10px] font-bold mb-4"
                      style={{ background: `${acc.color}12`, color: acc.color }}
                    >
                      <span className="h-1.5 w-1.5 rounded-full" style={{ background: acc.color }} />
                      {acc.highlight}
                    </div>

                    {/* Features toggle */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden border-t border-border/40 pt-4 mb-4 space-y-2"
                        >
                          {acc.features.map((feat, fi) => (
                            <div key={fi} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                              <CheckCircle2 className="h-3.5 w-3.5 text-[#286d65] shrink-0 mt-0.5" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>

                    <button
                      onClick={() => setExpandedId(isExpanded ? null : acc.id)}
                      className="flex items-center gap-1.5 text-xs font-bold transition-colors"
                      style={{ color: acc.color }}
                    >
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

      {/* ── Why Open a FOSA Account ── */}
      <section className="bg-gradient-to-br from-[#286d65]/5 to-[#a1d862]/5 border-t border-border py-14">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#286d65]">Benefits</span>
            <h2 className="mt-2 text-2xl md:text-3xl font-display font-extrabold text-foreground">Why Open a FOSA Account?</h2>
            <p className="mt-2 text-sm text-muted-foreground max-w-lg mx-auto">
              FOSA accounts combine the best of bank-grade services with the cooperative advantage — more benefits, lower costs.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "🏧",
                title: "ATM & Mobile Access",
                desc: "Withdraw from Co-op Bank ATMs, VISA-branded ATMs, MPesa and Agency Banking nationwide.",
              },
              {
                icon: "💸",
                title: "Salary Processing",
                desc: "Channel your salary directly into your Jumbo Account and receive it faster with lower fees.",
              },
              {
                icon: "📈",
                title: "Earn Annual Interest",
                desc: "Unlike regular bank accounts, your FOSA savings earn competitive interest credited annually.",
              },
              {
                icon: "🔐",
                title: "SASRA Protected",
                desc: "All deposits are safe, insured, and regulated by SASRA — Kenya's Sacco regulatory authority.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-white rounded-2xl border border-border p-5 shadow-sm text-center hover:shadow-md transition-all"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-display font-bold text-sm text-foreground mb-2">{item.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#286d65] py-12">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-white mb-3">
              Ready to Open Your FOSA Account?
            </h2>
            <p className="text-white/75 text-sm mb-6 max-w-lg mx-auto">
              Join thousands of NSSF SACCO members enjoying the convenience of FOSA banking — 
              more access, better interest, zero monthly charges on select accounts.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link
                to="/join"
                className="rounded-xl bg-[#F5B83C] text-[#286d65] font-bold px-7 py-3 text-sm hover:bg-[#F5B83C]/90 transition-all shadow-lg"
              >
                Join NSSF SACCO
              </Link>
              <Link
                to="/contact"
                className="rounded-xl border border-white/30 text-white font-bold px-7 py-3 text-sm hover:bg-white/10 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PublicLayout>
  );
}
