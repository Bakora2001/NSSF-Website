import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { ChevronRight, ShieldCheck, HeartHandshake, CheckCircle2, FileCheck } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/products/islamic-finance")({
  head: () => ({
    meta: [
      { title: "Islamic Finance Products — NSSF SACCO" },
      { name: "description", content: "Explore Shariah-compliant financial services and Musharakah Sukuk with NSSF SACCO." },
    ],
  }),
  component: IslamicFinancePage,
});

/* ─── Islamic Finance SVG Illustration ──────────────────────────────────── */
function IslamicFinanceIllustration() {
  return (
    <svg viewBox="0 0 200 160" className="h-28 w-auto filter drop-shadow-md">
      <defs>
        <linearGradient id="islamicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#286d65" />
          <stop offset="100%" stopColor="#194c45" />
        </linearGradient>
        <linearGradient id="goldGrad5" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#ffd700" />
          <stop offset="100%" stopColor="#c5a000" />
        </linearGradient>
      </defs>
      
      {/* Decorative Crescent Moon and Star */}
      <path d="M 140 30 A 18 18 0 1 1 140 66 A 14 14 0 1 0 140 30 Z" fill="url(#goldGrad5)" />
      <polygon points="146,42 150,49 158,49 152,54 154,61 146,57 138,61 140,54 134,49 142,49" fill="url(#goldGrad5)" />

      {/* Islamic Arch structure */}
      <path d="M 40 140 L 40 70 C 40 40 60 25 100 25 C 140 25 160 40 160 70 L 160 140 Z" fill="url(#islamicGrad)" />
      <path d="M 50 140 L 50 75 C 50 50 65 37 100 37 C 135 37 150 50 150 75 L 150 140 Z" fill="none" stroke="#ffd700" strokeWidth="2.5" />
      
      {/* Golden pillars */}
      <rect x="58" y="80" width="8" height="60" fill="url(#goldGrad5)" />
      <rect x="134" y="80" width="8" height="60" fill="url(#goldGrad5)" />
      
      {/* Center scales of justice/ethical commerce */}
      <circle cx="100" cy="70" r="10" fill="url(#goldGrad5)" />
    </svg>
  );
}

/* ─── Islamic Finance Page Component ────────────────────────────────────── */
function IslamicFinancePage() {
  const FEATURES = [
    "Every member shall hold at least 50 shares of KES 100 each in category C, 100 shares of KES 100 in category B and 200 shares of 100 KES in category A.",
    "Shares can be transferred to another member but are not withdrawable.",
    "Share transfer fee shall be paid by the buyer.",
    "Profits are paid according to Shariah-compliant business performance under Musharakah principles.",
  ];

  const DOCS = [
    "Duly filled Membership Application Form.",
    "Sukuk Share Certificate issued upon payment confirmation.",
    "Copy of National ID and Passport Sized Photograph.",
  ];

  return (
    <PublicLayout>
      {/* Header Container */}
      <div className="bg-[#286d65]/10 py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-[1fr_auto] gap-8 items-center">
          <div>
            <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-4" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-[#286d65] transition-colors">Home</Link>
              <ChevronRight className="h-3 w-3 shrink-0" />
              <Link to="/products" className="hover:text-[#286d65] transition-colors">Products</Link>
              <ChevronRight className="h-3 w-3 shrink-0" />
              <span className="text-foreground font-semibold">Islamic Finance Products</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground leading-tight">
              Islamic Finance Products
            </h1>
            <p className="mt-3 text-muted-foreground max-w-xl text-sm leading-relaxed">
              Ethical, interest-free, and Shariah-compliant financial services based on profit-and-loss sharing principles.
            </p>
          </div>
          <div className="hidden md:block">
            <IslamicFinanceIllustration />
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <section className="mx-auto max-w-4xl px-6 py-16 space-y-10">
        
        {/* Core Product Information Card */}
        <div className="rounded-3xl border border-border bg-card shadow-elegant overflow-hidden">
          <div className="bg-[#286d65]/5 px-6 py-6 border-b border-border/60 flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#286d65]/10 text-[#286d65]">
              <HeartHandshake className="h-6 w-6" />
            </span>
            <div>
              <h2 className="font-display font-extrabold text-xl text-foreground">Barakaat Share Capital</h2>
              <div className="flex items-center gap-2 mt-0.5 text-xs text-muted-foreground">
                <span className="bg-[#F5B83C]/20 text-[#286d65] font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                  Shariah Principle
                </span>
                <span className="font-bold text-foreground">Musharakah Sukuk</span>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8 space-y-6">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Barakaat Share Capital offers members an avenue to invest in joint-ownership cooperative shares based on the Musharakah Sukuk principle. Under this model, the cooperative pools member capital to engage in Shariah-compliant economic ventures, sharing both risk and profits equitably.
            </p>

            {/* Features Checklist */}
            <div className="space-y-4">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#286d65]">
                Account Features
              </h3>
              <div className="grid gap-3.5">
                {FEATURES.map((feat, i) => (
                  <div key={i} className="flex gap-3 text-xs text-muted-foreground leading-relaxed">
                    <CheckCircle2 className="h-5 w-5 text-[#F5B83C] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Section */}
            <div className="space-y-4 pt-6 border-t border-border/40">
              <h3 className="text-xs font-extrabold uppercase tracking-widest text-[#286d65] flex items-center gap-2">
                <FileCheck className="h-4.5 w-4.5 text-[#286d65]" /> Required Documentation
              </h3>
              <ul className="space-y-2.5 pl-1">
                {DOCS.map((doc, i) => (
                  <li key={i} className="flex gap-3 text-xs text-muted-foreground items-center">
                    <span className="h-2 w-2 rounded-full bg-[#286d65]" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Footer */}
          <div className="px-6 py-5 bg-muted/30 border-t border-border/40 flex flex-wrap gap-4 items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-[#286d65]" />
              <span>Monitored for full Shariah-compliance.</span>
            </div>
            <button className="bg-[#286d65] hover:bg-[#286d65]/95 text-white font-bold rounded-xl px-5 py-2.5 text-xs shadow-sm transition-all">
              <Link to="/join">Invest in Barakaat</Link>
            </button>
          </div>
        </div>

      </section>
    </PublicLayout>
  );
}
