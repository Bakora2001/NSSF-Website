import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { ChevronRight, Landmark, BadgeCheck, ShieldAlert, Cpu, ArrowRightLeft, PlaneTakeoff, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/products/financial-services")({
  head: () => ({
    meta: [
      { title: "Financial Services — NSSF SACCO" },
      { name: "description", content: "ATM cards, agency banking, money transfers and holiday trips with NSSF SACCO." },
    ],
  }),
  component: FinancialServicesPage,
});

/* ─── 3D Bank Building with Shield SVG Illustration ─────────────────────── */
function BankIllustration() {
  return (
    <svg viewBox="0 0 200 160" className="h-28 w-auto filter drop-shadow-md">
      <defs>
        <linearGradient id="bankGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#286d65" />
          <stop offset="100%" stopColor="#194c45" />
        </linearGradient>
        <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#a1d862" />
          <stop offset="100%" stopColor="#7cb63f" />
        </linearGradient>
      </defs>
      
      {/* Pillars and roof */}
      <polygon points="100,20 20,50 180,50" fill="url(#bankGrad)" />
      <rect x="25" y="50" width="150" height="8" fill="#ffd700" />
      <rect x="35" y="58" width="12" height="72" fill="url(#bankGrad)" />
      <rect x="75" y="58" width="12" height="72" fill="url(#bankGrad)" />
      <rect x="115" y="58" width="12" height="72" fill="url(#bankGrad)" />
      <rect x="153" y="58" width="12" height="72" fill="url(#bankGrad)" />
      <rect x="20" y="130" width="160" height="15" fill="url(#bankGrad)" />

      {/* Golden shield with checkmark */}
      <path d="M 100 80 L 125 90 L 125 110 C 125 125 100 135 100 135 C 100 135 75 125 75 110 L 75 90 Z" fill="url(#shieldGrad)" />
      <path d="M 90 108 L 97 115 L 112 100" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

/* ─── Financial Services Page Component ─────────────────────────────────── */
function FinancialServicesPage() {
  const [activeTab, setActiveTab] = useState<"overview" | "banking" | "agency" | "other" | "tat">("overview");

  const TAT_BOSA = [
    { name: "Fanisi Loan", term: "84 Months", tat: "2 Days" },
    { name: "Supersavers Loan", term: "96 Months", tat: "2 Days" },
    { name: "Development Loan", term: "48 Months", tat: "2 Days" },
    { name: "Special Flex Loan", term: "48 Months", tat: "2 Days" },
    { name: "Karo Loan", term: "36 Months", tat: "2 Days" },
    { name: "Refinancing Loan", term: "36 Months", tat: "2 Days" },
    { name: "Emergency Loan", term: "18 Months", tat: "1 Day" },
    { name: "School fees Loan", term: "12 Months", tat: "1 Day" },
    { name: "BIMA Loan", term: "11 Months", tat: "1 Day" },
    { name: "Nawiri Loan", term: "108 Months", tat: "2 Days" },
  ];

  const TAT_FOSA = [
    { name: "Twiga Loan", term: "48 Months", tat: "2 Days" },
    { name: "Jumbo Loan", term: "42 Months", tat: "2 Days" },
    { name: "Tausi Loan", term: "36 Months", tat: "2 Days" },
    { name: "Mustard Asset Loan", term: "60 Months", tat: "2 Days" },
    { name: "Makeover Loan", term: "12 Months", tat: "2 Days" },
    { name: "Premium Advance", term: "36 Months", tat: "1 Day" },
    { name: "Salary Advance", term: "1 Month", tat: "1 Day" },
    { name: "Mobile Advance", term: "1 Month", tat: "Immediate" },
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
              <span className="text-foreground font-semibold">Financial Services</span>
            </nav>
            <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground leading-tight">
              Financial Services
            </h1>
            <p className="mt-3 text-muted-foreground max-w-xl text-sm leading-relaxed">
              Explore FOSA salary points, ATM SaccoLink integrations, money transfers (EFT/RTGS), and holiday travel facilities.
            </p>
          </div>
          <div className="hidden md:block">
            <BankIllustration />
          </div>
        </div>
      </div>

      {/* Main Container */}
      <section className="mx-auto max-w-7xl px-6 py-12 space-y-10">
        
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-border/60 pb-4">
          {[
            { id: "overview", label: "Overview" },
            { id: "banking", label: "Banking Services" },
            { id: "agency", label: "Agency Banking" },
            { id: "other", label: "Other Services" },
            { id: "tat", label: "Loan TAT" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`rounded-full px-5 py-2 text-xs font-bold transition-all ${
                activeTab === tab.id
                  ? "bg-[#286d65] text-white shadow-sm"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Panel Display */}
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card">
          
          {/* TAB 1: OVERVIEW */}
          {activeTab === "overview" && (
            <div className="space-y-6">
              <h2 className="font-display font-extrabold text-lg text-foreground mb-4">Financial Services at NSSF SACCO</h2>
              <p className="text-xs text-muted-foreground leading-relaxed">
                NSSF Sacco is a licensed deposit-taking Sacco regulated by SASRA, offering a comprehensive suite of financial services. From salary processing and mobile transactions to global Visa SaccoLink cards and commercial bank agent services, we bring full bank-level capabilities to our members' convenience.
              </p>
              
              <div className="grid gap-4 sm:grid-cols-2 mt-6">
                {[
                  "Safe & Regulated: Audited and licensed by SASRA to secure members' assets.",
                  "Global Access: VISA SaccoLink cards compatible at ATMs & POS terminals worldwide.",
                  "Quick Cash Channels: Dial *477# for transfer to M-Pesa, loan payments, and balances.",
                  "Agent Network: Full deposits & withdrawals for Co-op, KCB and Equity account holders.",
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-3 text-xs text-muted-foreground p-3 bg-muted/20 rounded-xl border border-border/40">
                    <BadgeCheck className="h-5 w-5 text-[#286d65] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: BANKING SERVICES */}
          {activeTab === "banking" && (
            <div className="space-y-6">
              <h2 className="font-display font-extrabold text-lg text-foreground border-b border-border/40 pb-3">Transactional Banking Services</h2>
              
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2.5 p-4 rounded-2xl border border-border bg-muted/10">
                  <h3 className="font-display font-bold text-sm text-foreground">Salary Processing</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Channel your monthly pay securely into your FOSA account. Fast clearing with KES 200 fee per transaction.</p>
                </div>
                
                <div className="space-y-2.5 p-4 rounded-2xl border border-border bg-muted/10">
                  <h3 className="font-display font-bold text-sm text-foreground">Banker's Cheques</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Secure instant banker's cheques processed at the FOSA counters for a low fee of KES 120 per leaf.</p>
                </div>

                <div className="space-y-2.5 p-4 rounded-2xl border border-border bg-muted/10">
                  <h3 className="font-display font-bold text-sm text-foreground">Electronic Funds Transfer (EFT)</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Transfer funds to any commercial bank account by requesting in the morning at a cost of KES 400 per transaction.</p>
                </div>

                <div className="space-y-2.5 p-4 rounded-2xl border border-border bg-muted/10">
                  <h3 className="font-display font-bold text-sm text-foreground">Real-Time Gross Settlement (RTGS)</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Need instant money transfer? Clear interbank transfers immediately for KES 800 per transaction.</p>
                </div>

                <div className="space-y-2.5 p-4 rounded-2xl border border-border bg-muted/10">
                  <h3 className="font-display font-bold text-sm text-foreground">Third-Party Cheque Clearance</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Clear institution or individual checks directly into your FOSA account for KES 330 per transaction.</p>
                </div>

                <div className="space-y-2.5 p-4 rounded-2xl border border-border bg-muted/10">
                  <h3 className="font-display font-bold text-sm text-foreground">VISA SaccoLink Card</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">Shop at POS terminals, pay hotels, fuel bills, and withdraw at Co-op ATMs (KES 50) and other bank ATMs (KES 200).</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: AGENCY BANKING */}
          {activeTab === "agency" && (
            <div className="space-y-6">
              <div className="flex items-center gap-3 border-b border-border/40 pb-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-[#286d65]/10 text-[#286d65]">
                  <Landmark className="h-5 w-5" />
                </span>
                <div>
                  <h2 className="font-display font-extrabold text-lg text-foreground">Commercial Bank Agencies</h2>
                  <p className="text-xs text-muted-foreground">Perform cash transactions directly from our FOSA Banking Halls.</p>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-3">
                <div className="rounded-2xl border border-[#286d65]/20 p-5 bg-[#286d65]/5 text-center">
                  <div className="font-display font-extrabold text-base text-[#286d65] mb-2">Co-op Bank Agency</div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">Perform deposit and withdrawal operations. Requirements: Co-op ATM Card and National ID card.</p>
                  <span className="inline-block bg-[#286d65] text-white font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded">Coop Jirani</span>
                </div>

                <div className="rounded-2xl border border-red-200 p-5 bg-red-50/20 text-center">
                  <div className="font-display font-extrabold text-base text-red-900 mb-2">Equity Bank Agency</div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">Deposit and withdraw cash seamlessly at our cashier halls. ID and Equity ATM/phone needed.</p>
                  <span className="inline-block bg-red-900 text-white font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded">Equity Agent</span>
                </div>

                <div className="rounded-2xl border border-[#a1d862]/30 p-5 bg-[#a1d862]/10 text-center">
                  <div className="font-display font-extrabold text-base text-[#286d65] mb-2">KCB Bank Agency</div>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4">Convenient banking for KCB account holders. Deposit and check balances directly at FOSA.</p>
                  <span className="inline-block bg-[#a1d862] text-[#286d65] font-bold text-[9px] uppercase tracking-widest px-2.5 py-1 rounded">KCB Sahani</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: OTHER SERVICES */}
          {activeTab === "other" && (
            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-2xl border border-border p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-orange-100 text-orange-600"><PlaneTakeoff className="h-5 w-5" /></span>
                  <h3 className="font-display font-bold text-sm text-foreground">Sacco Holiday Trips</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Bond, network, and enjoy subsidized local and international travel (Mombasa, Maasai Mara, Dubai, Thailand). Members can open and save monthly in their **Johari Holiday Account** to prepare for annual getaways.
                </p>
              </div>

              <div className="rounded-2xl border border-border p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-100 text-blue-600"><ShieldCheck className="h-5 w-5" /></span>
                  <h3 className="font-display font-bold text-sm text-foreground">Nassefu Insurance Agency</h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Catering directly to our members' insurance needs. Secure affordable premium rates and fast claims settlement on health, motor, life, and asset covers.
                </p>
              </div>
            </div>
          )}

          {/* TAB 5: LOAN TAT */}
          {activeTab === "tat" && (
            <div className="space-y-6">
              <div className="flex items-center gap-2 border-b border-border/40 pb-3">
                <ArrowRightLeft className="h-5 w-5 text-[#286d65]" />
                <h2 className="font-display font-extrabold text-lg text-foreground">Loan Turn Around Time (TAT)</h2>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                Our operations guarantee fixed targets for loan evaluation and disbursement, ensuring you get cash when you need it most.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* BOSA TABLE */}
                <div className="border border-border rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-[#286d65] text-white px-4 py-3 font-display font-extrabold text-xs tracking-wider uppercase">
                    BOSA Loans SLA
                  </div>
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-muted text-muted-foreground font-semibold border-b border-border">
                        <th className="px-4 py-2.5">Loan Product</th>
                        <th className="px-4 py-2.5">Repayment Term</th>
                        <th className="px-4 py-2.5">Disbursement TAT</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {TAT_BOSA.map((loan, idx) => (
                        <tr key={idx} className="hover:bg-muted/30">
                          <td className="px-4 py-2.5 font-bold text-foreground">{loan.name}</td>
                          <td className="px-4 py-2.5 text-muted-foreground">{loan.term}</td>
                          <td className="px-4 py-2.5 text-[#286d65] font-bold">{loan.tat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* FOSA TABLE */}
                <div className="border border-border rounded-xl overflow-hidden shadow-sm">
                  <div className="bg-[#F5B83C] text-[#286d65] px-4 py-3 font-display font-extrabold text-xs tracking-wider uppercase">
                    FOSA Loans SLA
                  </div>
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-muted text-muted-foreground font-semibold border-b border-border">
                        <th className="px-4 py-2.5">Loan Product</th>
                        <th className="px-4 py-2.5">Repayment Term</th>
                        <th className="px-4 py-2.5">Disbursement TAT</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/40">
                      {TAT_FOSA.map((loan, idx) => (
                        <tr key={idx} className="hover:bg-muted/30">
                          <td className="px-4 py-2.5 font-bold text-foreground">{loan.name}</td>
                          <td className="px-4 py-2.5 text-muted-foreground">{loan.term}</td>
                          <td className="px-4 py-2.5 text-[#286d65] font-bold">{loan.tat}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

        </div>
      </section>
    </PublicLayout>
  );
}
