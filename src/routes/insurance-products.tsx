import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useRef } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import {
  ChevronRight, Shield, ShieldCheck, HeartPulse, Car, Home,
  Briefcase, Coins, CheckCircle2, PhoneCall, Mail, ClipboardCheck, ArrowRight,
  TrendingUp, Activity, Lock, Users, Phone, HelpCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/insurance-products")({
  head: () => ({
    meta: [
      { title: "Insurance Products — Nassefu Insurance Agency" },
      { name: "description", content: "Comprehensive general, health, life, and last expense insurance products tailored for NSSF SACCO members." },
    ],
  }),
  component: InsuranceProductsPage,
});

/* ─── Hero Feature Card ──────────────────────────────────────────────────── */
function HeroFeature({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-3 bg-white/10 backdrop-blur-md rounded-2xl p-4 border border-white/15 shadow-sm hover:bg-white/15 transition-all">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gold/20 text-[#F5B83C]">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h4 className="text-xs font-bold text-white uppercase tracking-wider">{title}</h4>
        <p className="text-[11px] text-white/80 mt-1 leading-normal">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Quick Stats Bar Item ───────────────────────────────────────────────── */
function StatItem({ icon: Icon, title, desc }: { icon: any; title: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 justify-center md:justify-start">
      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-teal-50 text-[#286d65]">
        <Icon className="h-4.5 w-4.5" />
      </span>
      <div className="text-left">
        <h5 className="text-[12px] font-bold text-gray-800 leading-snug">{title}</h5>
        <p className="text-[10px] text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

/* ─── Main Insurance Products Page ───────────────────────────────────────── */
function InsuranceProductsPage() {
  const [activeTab, setActiveTab] = useState<"general" | "life" | "health" | "lastexpense">("general");

  const generalRef = useRef<HTMLDivElement>(null);
  const lifeRef = useRef<HTMLDivElement>(null);
  const healthRef = useRef<HTMLDivElement>(null);
  const lastExpenseRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>, tab: "general" | "life" | "health" | "lastexpense") => {
    setActiveTab(tab);
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <PublicLayout>
      {/* ─── PREMIUM HERO SECTION ─── */}
      <div className="relative bg-gradient-to-br from-[#1a4a44] via-[#286d65] to-[#123631] text-white py-16 px-6 overflow-hidden">
        {/* Abstract shapes & decorative lines */}
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path d="M-10,50 Q25,80 60,30 T110,60" fill="none" stroke="white" strokeWidth="0.5" />
            <path d="M-20,30 Q30,10 70,50 T120,20" fill="none" stroke="white" strokeWidth="0.3" />
          </svg>
        </div>

        <div className="mx-auto max-w-7xl relative z-10">
          <nav className="flex items-center gap-1 text-[11px] text-white/70 mb-4 uppercase tracking-wider" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-[#F5B83C] transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <Link to="/insurance" className="hover:text-[#F5B83C] transition-colors">Insurance Agency</Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-[#F5B83C] font-semibold">Insurance Products</span>
          </nav>

          <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-center">
            {/* Left Column: Headings */}
            <div>
              <span className="inline-block bg-[#F5B83C]/20 border border-[#F5B83C]/35 text-[#F5B83C] text-[10px] font-extrabold uppercase px-3 py-1 rounded-full tracking-widest mb-3">
                Nassefu Insurance Agency
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-white leading-tight">
                Insurance Products
              </h1>
              <p className="mt-4 text-[#e6f0ed] max-w-xl text-sm leading-relaxed">
                Nassefu Insurance Agency provides comprehensive, negotiated insurance solutions to protect what matters most to you, your family, and your business.
              </p>

              {/* Hero Features Grid */}
              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <HeroFeature icon={ShieldCheck} title="Trusted Coverage" desc="Reliable protection you can depend on daily." />
                <HeroFeature icon={Coins} title="Affordable Plans" desc="Flexible premiums that comfortably fit your budget." />
                <HeroFeature icon={Activity} title="Fast Claims" desc="Quick and hassle-free claim settlements." />
                <HeroFeature icon={Users} title="Expert Support" desc="Dedicated team always here to guide you." />
              </div>
            </div>

            {/* Right Column: Hero Illustration Box */}
            <div className="hidden lg:flex justify-center relative">
              {/* Beautiful stacked premium gradient circles */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#F5B83C]/20 to-teal-500/20 rounded-full blur-2xl opacity-75"></div>
              
              <div className="relative rounded-3xl bg-white/5 border border-white/10 p-6 shadow-2xl backdrop-blur-sm max-w-md w-full overflow-hidden">
                {/* Simulated 3D Icon Overlay */}
                <div className="h-48 w-full flex items-center justify-center bg-gradient-to-br from-teal-800 to-teal-950 rounded-2xl relative border border-white/5 overflow-hidden">
                  <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-[#F5B83C]/10 rounded-full blur-xl"></div>
                  <div className="absolute -left-12 -top-12 w-48 h-48 bg-teal-500/20 rounded-full blur-xl"></div>
                  <div className="flex flex-col items-center">
                    <Shield className="h-16 w-16 text-[#F5B83C] drop-shadow-[0_4px_12px_rgba(245,184,60,0.35)]" />
                    <span className="text-white font-display font-extrabold text-lg mt-3 uppercase tracking-wider">Nassefu Secure</span>
                    <span className="text-white/60 text-[10px] uppercase tracking-widest mt-1">Underwriter Partners</span>
                  </div>
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between text-xs text-white/70 border-b border-white/10 pb-2">
                    <span>Partner Underwriters</span>
                    <span className="font-bold text-white">Leading Kenyan Companies</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/70 border-b border-white/10 pb-2">
                    <span>Sacco Member Benefit</span>
                    <span className="font-bold text-[#F5B83C]">Subsidized Premium Rates</span>
                  </div>
                  <div className="flex items-center justify-between text-xs text-white/70">
                    <span>Registration TAT</span>
                    <span className="font-bold text-white">Less than 24 Hours</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ─── NAVIGATION TAB BAR ─── */}
      <div className="sticky top-[73px] z-40 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
        <div className="mx-auto max-w-7xl px-6 py-3 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {[
              { id: "general", label: "General Insurance" },
              { id: "life", label: "Life Insurance" },
              { id: "health", label: "Health & Medical" },
              { id: "lastexpense", label: "Last Expense Cover" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  if (tab.id === "general") scrollToSection(generalRef, "general");
                  if (tab.id === "life") scrollToSection(lifeRef, "life");
                  if (tab.id === "health") scrollToSection(healthRef, "health");
                  if (tab.id === "lastexpense") scrollToSection(lastExpenseRef, "lastexpense");
                }}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-all border ${
                  activeTab === tab.id
                    ? "bg-[#286d65] text-white border-[#286d65] shadow-sm"
                    : "bg-gray-50 text-gray-600 border-gray-200 hover:border-[#286d65]/40 hover:text-[#286d65]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2 text-xs text-gray-500 font-semibold bg-gray-100 px-3 py-1.5 rounded-lg border border-gray-200">
            <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Agent Helpline: +254 111 018 100
          </div>
        </div>
      </div>

      {/* ─── MIDDLE DYNAMIC VALUE PROP BAR ─── */}
      <div className="bg-white border-b border-gray-100 py-5">
        <div className="mx-auto max-w-7xl px-6 grid grid-cols-2 md:grid-cols-4 gap-6">
          <StatItem icon={Lock} title="Long-term Security" desc="Plan your future with confidence" />
          <StatItem icon={Coins} title="Guaranteed Income" desc="Steady income for your peace of mind" />
          <StatItem icon={Activity} title="Flexible Options" desc="Plans tailored to your needs" />
          <StatItem icon={ShieldCheck} title="Trusted Partner" desc="We protect what matters most" />
        </div>
      </div>

      {/* ─── DYNAMIC DETAILED CONTENT SECTIONS ─── */}
      <div className="bg-gray-50/50">
        
        {/* ─── SECTION 1: GENERAL INSURANCE ─── */}
        <div ref={generalRef} className="scroll-mt-36 py-16 border-b border-gray-200/60 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <div>
                <span className="text-[10px] font-extrabold text-[#286d65] uppercase tracking-widest block mb-1">Protection Category</span>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 flex items-center gap-2">
                  <Shield className="h-7 w-7 text-[#286d65]" /> General Insurance
                </h2>
                <p className="text-gray-500 text-xs mt-1 max-w-2xl">
                  Comprehensive protection for your assets, vehicles, residential property, and professional liability.
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#286d65] to-[#F5B83C] w-24 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* 1.1 Motor Insurance */}
              <div className="rounded-3xl border border-gray-200/70 bg-card p-6 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-[#286d65]">
                      <Car className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-base text-gray-900">Motor Insurance</h3>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#F5B83C]">Annual Renewable Pack</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-5">
                    Nassefu Insurance Agency provides Motor Insurance to take care of the cost of repairs in case your vehicle is involved in an accident or compensation if your vehicle is totally damaged or stolen. This is facilitated by a client paying a premium to the insurance company for a predetermined insurance package that is renewable annually.
                  </p>

                  <div className="space-y-4 border-t border-gray-100 pt-4">
                    <h4 className="text-[11px] uppercase font-extrabold tracking-wider text-[#286d65] mb-2">Types of Motor Insurance Covers</h4>
                    
                    {/* Cover 1 */}
                    <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-[#286d65] text-white text-[10px] font-bold">1</span>
                        <h5 className="text-xs font-bold text-gray-900">Comprehensive Policy</h5>
                      </div>
                      <ul className="space-y-1.5 pl-7">
                        {[
                          "Assists in vehicle repair in case of an accident.",
                          "Compensates you if your car is stolen or totally damaged.",
                          "Pays for third party damages.",
                          "Additional riders include Political Violence & Terrorism Cover, Car Hire, AA Towing Service, among others."
                        ].map((li, idx) => (
                          <li key={idx} className="flex gap-2 text-[10.5px] text-gray-500 leading-snug">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#286d65] shrink-0 mt-0.5" />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Cover 2 */}
                    <div className="bg-gray-50 rounded-xl p-3.5 border border-gray-100">
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="grid h-5 w-5 place-items-center rounded-full bg-[#286d65] text-white text-[10px] font-bold">2</span>
                        <h5 className="text-xs font-bold text-gray-900">Third Party Policy</h5>
                      </div>
                      <ul className="space-y-1.5 pl-7">
                        {[
                          "Third Party Insurance Cover covers third party damages only.",
                          "Insurance cover is mandatory in Kenya.",
                          "Pays for third party damages but can also include theft and political terrorism or riot."
                        ].map((li, idx) => (
                          <li key={idx} className="flex gap-2 text-[10.5px] text-gray-500 leading-snug">
                            <CheckCircle2 className="h-3.5 w-3.5 text-[#286d65] shrink-0 mt-0.5" />
                            <span>{li}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="mt-6 border-t border-gray-100 pt-4">
                  <p className="text-[10px] text-gray-500 leading-relaxed font-semibold italic">
                    Vehicles Covered: Private Vehicles as well as Commercial vehicles are covered and this can be advised further by our sales reps in the Sacco offices.
                  </p>
                  <a href="tel:+254111018100" className="inline-flex items-center gap-1.5 text-xs text-[#286d65] hover:text-[#286d65]/80 font-bold mt-3 transition-colors">
                    For details, contact us on +254 111 018 100 <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>

              {/* Right Side: Split between Domestic, Public Liability, and Annuities */}
              <div className="space-y-6">
                {/* 1.2 Domestic Insurance */}
                <div className="rounded-3xl border border-gray-200/70 bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-50 text-[#286d65]">
                      <Home className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-sm text-gray-900">Domestic Insurance</h3>
                      <span className="text-[8.5px] uppercase font-bold tracking-widest text-[#F5B83C]">Home & Household Cover</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    This insurance package covers accidental loss or damage to residential homes and/or contents of a dwelling house including valuable items normally carried or worn. It incorporates your personal liability and that of your household members.
                  </p>
                  <p className="text-[11px] text-gray-500 border-l-2 border-[#F5B83C] pl-3 py-1 bg-gray-50 rounded-r-lg leading-relaxed">
                    The policy also covers the cost and expenses that you incur in the event of death of or injury or disease to your domestic servant arising out of and in the course of his or her employment as defined in the Work Injury Benefits Act (WIBA).
                  </p>
                </div>

                {/* 1.3 Public Liability Insurance */}
                <div className="rounded-3xl border border-gray-200/70 bg-card p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="grid h-10 w-10 place-items-center rounded-xl bg-teal-50 text-[#286d65]">
                      <Briefcase className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-sm text-gray-900">Public Liability Insurance</h3>
                      <span className="text-[8.5px] uppercase font-bold tracking-widest text-emerald-500">Business & Professional Liability</span>
                    </div>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mb-3">
                    Public Liability protects against claims of personal injury or property damage that a third party suffers as a result of your business activities. It safeguards your business by covering third party claims and providing legal defense costs, giving you the confidence to run your work securely.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-2 mt-3 pt-3 border-t border-gray-100">
                    {[
                      "Injuries from slips/falls to third parties",
                      "Death claims to third parties",
                      "Loss of or damage to third party property",
                      "Legal defense & payout liabilities"
                    ].map((feat, idx) => (
                      <div key={idx} className="flex gap-1.5 items-start text-[10.5px] text-gray-500 leading-tight">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#286d65] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-[9px] text-gray-400 mt-2 font-semibold uppercase tracking-wider">
                    * Covers external third parties only, not own employees.
                  </p>
                </div>
              </div>
            </div>

            {/* 1.4 Annuities Cover - Full Width Card */}
            <div className="mt-8 rounded-3xl border border-gray-200/70 bg-[#fafdfc] p-6 shadow-sm">
              <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-[#F5B83C]">
                      <Coins className="h-5.5 w-5.5" />
                    </span>
                    <div>
                      <h3 className="font-display font-extrabold text-base text-gray-900">Annuities</h3>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-[#286d65]">Retirement Security Plan</span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4">
                    An annuity is a financial instrument issued and backed by an insurance company that provides guaranteed monthly income payments for the life of the contract, regardless of market conditions. It can be customized based on options like life expectancy, when payouts should start, and beneficiary transfers.
                  </p>

                  <p className="text-xs text-gray-600 leading-relaxed mb-4 font-semibold text-[#286d65]">
                    How Do Annuities Work?
                  </p>
                  <p className="text-[11px] text-gray-500 leading-relaxed mb-4">
                    Annuities work by converting a lump-sum premium into a stream of guaranteed income. You pay a premium to the insurance company, which grows tax-deferred throughout the accumulation phase (typically 10 to 30 years). Once the annuitization or distribution phase begins, you will start receiving regular guaranteed monthly payments that you cannot outlive.
                  </p>
                </div>

                <div className="bg-white rounded-2xl border border-gray-200/60 p-5 space-y-4">
                  <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider border-b border-gray-100 pb-2">Why Optimize Annuities?</h4>
                  <ul className="space-y-2.5">
                    {[
                      "Long-Term Financial Security in retirement",
                      "Tax-Deferred Growth during accumulation",
                      "Guaranteed Monthly Income you can't outlive",
                      "Principal Preservation & Portfolio Diversification"
                    ].map((li, idx) => (
                      <li key={idx} className="flex gap-2 text-[10.5px] text-gray-500 leading-snug">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#F5B83C] shrink-0 mt-0.5" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[9.5px] text-gray-400 leading-normal italic pt-2 border-t border-gray-100">
                    Annuities are designed for long-term security and income stream planning, not short-term investments.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* ─── SECTION 2: LIFE & HEALTH INSURANCE ─── */}
        <div className="py-16 border-b border-gray-200/60 bg-gray-50/50">
          <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-8">
            
            {/* 2.1 Life Insurance */}
            <div ref={lifeRef} className="scroll-mt-36 rounded-3xl border border-gray-200/70 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-amber-50 text-[#F5B83C]">
                    <ShieldCheck className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display font-extrabold text-base text-gray-900">Life Insurance</h2>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-[#286d65]">Family Financial Security</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-5">
                  This is an excellence cover that provides good returns on investments and combines with insurance protection. In case the insured passes on, the beneficiaries receive the sum assured to help them meet their financial needs.
                </p>

                <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                  <h4 className="text-[11px] uppercase font-extrabold tracking-wider text-[#286d65] mb-2.5">Key Features & Benefits</h4>
                  <ul className="space-y-2">
                    {[
                      "Provides high and stable returns on your investments.",
                      "Ensures financial safety net for dependants.",
                      "Payout of full sum assured to your designated beneficiaries.",
                      "Helps family meet daily expenses, educational fees, or mortgage debts."
                    ].map((li, idx) => (
                      <li key={idx} className="flex gap-2 text-[11px] text-gray-500 leading-snug">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#286d65] shrink-0 mt-0.5" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Life & Investment Pack</span>
                <a href="mailto:nassefuinsurance@nssfsacco.co.ke" className="text-xs text-[#286d65] font-bold flex items-center gap-1 hover:underline">
                  Email Quotation <Mail className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* 2.2 Health Insurance */}
            <div ref={healthRef} className="scroll-mt-36 rounded-3xl border border-gray-200/70 bg-white p-6 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <span className="grid h-12 w-12 place-items-center rounded-2xl bg-rose-50 text-rose-500">
                    <HeartPulse className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="font-display font-extrabold text-base text-gray-900">Health Insurance</h2>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-emerald-500">Comprehensive Medical Cover</span>
                  </div>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  A medical cover gives you peace of mind in that if you or your family members fall sick at any given time, your medical bills are taken care of. This is facilitated by paying a premium to the insurance company through our agency for a predetermined insurance package that is renewable annually.
                </p>

                <p className="text-xs text-gray-600 leading-relaxed mb-4">
                  Nassefu Insurance Agency has partnered with different leading Insurance companies to offer comprehensive medical cover that takes care of your medical bills. The cover offers two core options:
                </p>

                <div className="space-y-3.5">
                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <h5 className="text-[11px] font-bold text-gray-900 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#286d65]" /> Inpatient Cover
                    </h5>
                    <p className="text-[10.5px] text-gray-500 leading-relaxed pl-3">
                      Takes care of your medical bills upon admission to hospital.
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
                    <h5 className="text-[11px] font-bold text-gray-900 flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#286d65]" /> Outpatient Cover
                    </h5>
                    <p className="text-[10.5px] text-gray-500 leading-relaxed pl-3">
                      Takes care of medical bills upon visit to the doctor. Optional additions include dental, optical and maternity covers.
                    </p>
                  </div>
                </div>

                <div className="mt-4 bg-[#fbfdfb] border border-emerald-100 rounded-xl p-3">
                  <h4 className="text-[10px] uppercase font-extrabold text-[#286d65] tracking-wider mb-2">Benefits of Medical Cover</h4>
                  <div className="grid grid-cols-2 gap-2 text-[10px] text-gray-500">
                    <div className="flex gap-1 items-start"><CheckCircle2 className="h-3 w-3 text-[#286d65] shrink-0 mt-0.5" /><span>Safety net in emergencies</span></div>
                    <div className="flex gap-1 items-start"><CheckCircle2 className="h-3 w-3 text-[#286d65] shrink-0 mt-0.5" /><span>Ambulance services cover</span></div>
                    <div className="flex gap-1 items-start"><CheckCircle2 className="h-3 w-3 text-[#286d65] shrink-0 mt-0.5" /><span>Access quality health services</span></div>
                    <div className="flex gap-1 items-start"><CheckCircle2 className="h-3 w-3 text-[#286d65] shrink-0 mt-0.5" /><span>No cash deposit required</span></div>
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4 flex items-center justify-between">
                <span className="text-[9.5px] text-gray-400 font-bold leading-normal">
                  * Senior citizens and retirees covers are available.
                </span>
                <a href="tel:+254111018100" className="text-xs text-[#286d65] font-bold flex items-center gap-1 hover:underline">
                  Free Quotation <PhoneCall className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* ─── SECTION 3: LAST EXPENSE COVER (TAB 4) ─── */}
        <div ref={lastExpenseRef} className="scroll-mt-36 py-16 bg-white">
          <div className="mx-auto max-w-7xl px-6">
            
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
              <div>
                <span className="text-[10px] font-extrabold text-[#286d65] uppercase tracking-widest block mb-1">Funeral Insurance Support</span>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 flex items-center gap-2">
                  <ShieldCheck className="h-7 w-7 text-[#F5B83C]" /> Last Expense Cover
                </h2>
                <p className="text-gray-500 text-xs mt-1 max-w-2xl">
                  A funeral insurance cover designed to cater for expenses during the difficult times of the death of a loved one. Covers principal, spouse, children, and parents on both sides.
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-[#286d65] to-[#F5B83C] w-24 rounded-full"></div>
            </div>

            <div className="grid lg:grid-cols-[1fr_360px] gap-8 items-start">
              
              {/* Premium & Benefits Matrix Table */}
              <div className="rounded-3xl border border-gray-200/80 bg-white p-6 shadow-sm overflow-hidden">
                <h3 className="font-display font-extrabold text-sm text-[#286d65] uppercase tracking-wider mb-4 border-b border-gray-100 pb-2">
                  Premium & Benefits Matrix
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b border-gray-200 bg-gray-50 text-[10px] font-extrabold uppercase text-[#286d65] tracking-wider">
                        <th className="py-3 px-4 font-bold rounded-l-lg">Benefits Option (KES)</th>
                        <th className="py-3 px-3 text-right">50,000</th>
                        <th className="py-3 px-3 text-right">100,000</th>
                        <th className="py-3 px-3 text-right">150,000</th>
                        <th className="py-3 px-3 text-right">250,000</th>
                        <th className="py-3 px-4 text-right rounded-r-lg">500,000</th>
                      </tr>
                    </thead>
                    <tbody className="text-[11px] text-gray-600 divide-y divide-gray-100 font-bold">
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-gray-900">
                          <span className="inline-block bg-teal-50 text-[#286d65] text-[9px] font-extrabold rounded h-4 w-4 text-center mr-2">1</span>
                          Nuclear Family Premium
                        </td>
                        <td className="py-3 px-3 text-right font-mono">664</td>
                        <td className="py-3 px-3 text-right font-mono">1,320</td>
                        <td className="py-3 px-3 text-right font-mono">1,976</td>
                        <td className="py-3 px-3 text-right font-mono">3,288</td>
                        <td className="py-3 px-4 text-right font-mono text-[#286d65]">6,576</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-gray-900">
                          <span className="inline-block bg-teal-50 text-[#286d65] text-[9px] font-extrabold rounded h-4 w-4 text-center mr-2">2</span>
                          Individuals Above 60 Years Premium
                        </td>
                        <td className="py-3 px-3 text-right font-mono">842</td>
                        <td className="py-3 px-3 text-right font-mono">1,530</td>
                        <td className="py-3 px-3 text-right font-mono">2,295</td>
                        <td className="py-3 px-3 text-right font-mono">3,825</td>
                        <td className="py-3 px-4 text-right font-mono text-[#286d65]">7,650</td>
                      </tr>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-4 font-semibold text-gray-900">
                          <span className="inline-block bg-teal-50 text-[#286d65] text-[9px] font-extrabold rounded h-4 w-4 text-center mr-2">3</span>
                          Individuals Up to 60 Years Premium
                        </td>
                        <td className="py-3 px-3 text-right font-mono">496</td>
                        <td className="py-3 px-3 text-right font-mono">992</td>
                        <td className="py-3 px-3 text-right font-mono">1,488</td>
                        <td className="py-3 px-3 text-right font-mono">2,480</td>
                        <td className="py-3 px-4 text-right font-mono text-[#286d65]">4,961</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Important Notes */}
                <div className="mt-6 pt-4 border-t border-gray-100 bg-[#fbfdfc] p-4 rounded-2xl border border-teal-50">
                  <h4 className="text-[10px] font-extrabold uppercase text-[#286d65] tracking-widest mb-2 flex items-center gap-1">
                    <HelpCircle className="h-3.5 w-3.5" /> Important Guidelines (NB):
                  </h4>
                  <ul className="space-y-1.5 text-[10px] text-gray-500 font-medium pl-1.5">
                    <li className="flex items-start gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#286d65] mt-1 shrink-0" /> Maximum entry age is 75 years.</li>
                    <li className="flex items-start gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#286d65] mt-1 shrink-0" /> <b>Turn-Around-Time (TAT) on claims is a maximum of 48 hours.</b></li>
                    <li className="flex items-start gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#286d65] mt-1 shrink-0" /> Additional family dependents can be added separately under Option 2 and 3.</li>
                    <li className="flex items-start gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#286d65] mt-1 shrink-0" /> Nuclear option covers up to a maximum of 6 individuals (2 parents and 4 biological children). Extra/adopted siblings can be added under Option 3.</li>
                    <li className="flex items-start gap-1.5"><span className="h-1.5 w-1.5 rounded-full bg-[#286d65] mt-1 shrink-0" /> Seamless, digital and quick registration process.</li>
                  </ul>
                </div>
              </div>

              {/* Registration and Claims Requirements Checklist Cards */}
              <div className="space-y-6">
                
                {/* Requirements for Registration */}
                <div className="rounded-3xl border border-gray-200/80 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                    <ClipboardCheck className="h-4.5 w-4.5 text-[#286d65]" />
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Registration Requirements</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Fill in the application form",
                      "Copy of your ID number (Principal)",
                      "Copy of your KRA Pin (Principal)",
                      "ID / Birth Certificate number of your family member"
                    ].map((req, idx) => (
                      <li key={idx} className="flex gap-2 text-[10.5px] text-gray-500 font-semibold leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#286d65] shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Claim Registration Requirements */}
                <div className="rounded-3xl border border-gray-200/80 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-3 pb-2 border-b border-gray-100">
                    <ShieldCheck className="h-4.5 w-4.5 text-[#F5B83C]" />
                    <h4 className="text-xs font-bold text-gray-900 uppercase tracking-wider">Claim Documents Required</h4>
                  </div>
                  <ul className="space-y-2">
                    {[
                      "Principal ID and KRA copy",
                      "Deceased ID copy",
                      "Account details where funds are to be deposited (ATM Card photo)"
                    ].map((req, idx) => (
                      <li key={idx} className="flex gap-2 text-[10.5px] text-gray-500 font-semibold leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#F5B83C] shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>

      {/* ─── PREMIUM FOOTER CTA BAND ─── */}
      <section className="bg-gradient-to-r from-[#173e3a] to-[#286d65] text-white py-8 border-t border-teal-950">
        <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-teal-800 text-[#F5B83C] border border-teal-700">
                <Phone className="h-4 w-4" />
              </span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-teal-300 font-bold">Call Agent Desk</p>
                <a href="tel:+254111018100" className="text-sm font-extrabold hover:text-[#F5B83C] transition-colors font-mono">
                  +254 111 018 100
                </a>
              </div>
            </div>

            <div className="h-8 w-px bg-white/10 hidden sm:block"></div>

            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-teal-800 text-[#F5B83C] border border-teal-700">
                <Mail className="h-4 w-4" />
              </span>
              <div className="text-left">
                <p className="text-[10px] uppercase tracking-widest text-teal-300 font-bold">Email Inquiries</p>
                <a href="mailto:nassefuinsurance@nssfsacco.co.ke" className="text-sm font-extrabold hover:text-[#F5B83C] transition-colors font-mono">
                  nassefuinsurance@nssfsacco.co.ke
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 w-full lg:w-auto justify-center">
            <Link 
              to="/contact" 
              className="rounded-full bg-[#F5B83C] text-[#286d65] font-extrabold px-6 py-2.5 text-xs hover:bg-[#F5B83C]/90 transition-all uppercase tracking-wider flex items-center gap-1.5 shadow-md"
            >
              Request a Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

        </div>
      </section>

    </PublicLayout>
  );
}
