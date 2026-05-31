import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Shield, Smartphone, Coins, Bell, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/app")({
  head: () => ({
    meta: [
      { title: "NSSF SACCO Mobile App — Bank on the Go" },
      { name: "description", content: "Download the official NSSF SACCO Mobile App from Google Play Store for secure and convenient banking." },
    ],
  }),
  component: AppPage,
});

function AppPage() {
  const playStoreLink = "https://play.google.com/store/apps/details?id=lanstar.co.ke.nssf_m_banking";

  return (
    <PublicLayout>
      {/* ── Dark Green Hero Header (matches image banner) ── */}
      <div className="relative bg-[#1a4a43] overflow-hidden rounded-b-[2rem]">
        {/* Decorative pattern top-right */}
        <div
          className="absolute top-0 right-0 w-72 h-72 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23F5B83C' stroke-width='1.5'%3E%3Ccircle cx='50' cy='50' r='6'/%3E%3Ccircle cx='150' cy='50' r='6'/%3E%3Ccircle cx='100' cy='150' r='6'/%3E%3Ccircle cx='170' cy='130' r='4'/%3E%3Ccircle cx='30' cy='150' r='4'/%3E%3Cline x1='50' y1='50' x2='150' y2='50'/%3E%3Cline x1='150' y1='50' x2='100' y2='150'/%3E%3Cline x1='100' y1='150' x2='50' y2='50'/%3E%3Cline x1='150' y1='50' x2='170' y2='130'/%3E%3Cline x1='50' y1='50' x2='30' y2='150'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />

        <div className="mx-auto max-w-7xl px-8 py-10 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-[11px] text-white/60 font-semibold mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3" />
            <span className="text-[#F5B83C] font-extrabold">App</span>
          </nav>

          {/* Logo mark + title */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 grid place-items-center shadow-inner border border-white/20">
              <svg viewBox="0 0 40 40" className="w-6 h-6" fill="none">
                <path d="M20 6 L34 20 L20 34 L6 20 Z" stroke="#F5B83C" strokeWidth="2.5" />
                <path d="M20 12 L28 20 L20 28 L12 20 Z" fill="#F5B83C" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl md:text-3xl font-display font-extrabold text-white tracking-tight">APP</h1>
              <p className="text-xs text-white/80 font-medium">NSSF SACCO Mobile App</p>
            </div>
          </div>
          <p className="mt-2 text-xs text-white/70 max-w-xl">
            Bank on the go with our secure and convenient mobile banking app.
          </p>
        </div>
      </div>

      {/* ── Main App Content (White / Light-gray Background, 3-column Layout) ── */}
      <div className="bg-[#f8fafc] py-12 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-8 items-start">
            
            {/* Column 1: Feature list (Left side of phone) */}
            <div className="space-y-6 lg:mt-6">
              {[
                {
                  icon: Shield,
                  title: "Secure Banking",
                  desc: "Bank with confidence using advanced security features",
                },
                {
                  icon: Smartphone,
                  title: "Easy Transactions",
                  desc: "Transfer money, pay bills, and manage accounts",
                },
                {
                  icon: Coins,
                  title: "Loan Management",
                  desc: "Apply for loans and track your loan status",
                },
                {
                  icon: Bell,
                  title: "Real-time Notifications",
                  desc: "Get instant alerts for all your transactions",
                },
              ].map((feat, i) => {
                const Icon = feat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                    className="flex gap-4 items-center bg-white border border-border/40 rounded-2xl p-4 shadow-sm"
                  >
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-[#286d65]/10 text-[#286d65] shrink-0">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-extrabold text-sm text-[#286d65]">{feat.title}</h3>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{feat.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Column 2: Phone Mockup (Middle) */}
            <div className="flex justify-center items-center">
              <div className="relative">
                {/* Phone frame */}
                <div className="relative w-64 h-[480px] rounded-[3rem] bg-slate-900 border-[6px] border-slate-700 shadow-2xl overflow-hidden">
                  {/* Notch */}
                  <div className="absolute top-3 left-1/2 -translate-x-1/2 w-24 h-5 bg-slate-900 rounded-full z-20" />

                  {/* Screen content */}
                  <div className="w-full h-full bg-white overflow-hidden flex flex-col">
                    {/* Status bar */}
                    <div className="flex items-center justify-between px-4 pt-6 pb-2 bg-white">
                      <span className="text-[9px] font-extrabold text-slate-700">11:01</span>
                      <div className="flex gap-1 items-center">
                        <div className="w-4.5 h-2.5 border border-slate-600 rounded-sm p-0.5"><div className="w-full h-full bg-slate-600 rounded-sm" /></div>
                      </div>
                    </div>

                    {/* App header */}
                    <div className="flex items-center justify-between px-4 pb-3">
                      <div className="flex items-center gap-1.5">
                        <div className="w-5 h-5 rounded-full bg-[#286d65] grid place-items-center">
                          <span className="text-white text-[8px] font-extrabold">N</span>
                        </div>
                        <div className="text-[10px] font-extrabold text-[#286d65]">NSSF SACCO</div>
                      </div>
                      <div className="flex flex-col gap-0.5 cursor-pointer">
                        <div className="w-3.5 h-0.5 bg-[#286d65] rounded" />
                        <div className="w-3.5 h-0.5 bg-[#286d65] rounded" />
                        <div className="w-3.5 h-0.5 bg-[#286d65] rounded" />
                      </div>
                    </div>

                    {/* Welcome card */}
                    <div className="mx-3.5 rounded-2xl bg-[#286d65] p-3 text-white shadow-sm">
                      <div className="text-[8px] text-white/70 font-semibold">Welcome Back!</div>
                      <div className="text-[10px] font-extrabold flex items-center gap-1 mt-0.5">
                        John Mwangi! <span>👋</span>
                      </div>
                      <div className="mt-3 pt-2.5 border-t border-white/20">
                        <div className="text-[7.5px] text-white/60 uppercase tracking-wide font-extrabold">Available Balance</div>
                        <div className="text-[15px] font-extrabold text-[#a1d862] mt-0.5">KES 128,650</div>
                      </div>
                    </div>

                    {/* Action Grid */}
                    <div className="grid grid-cols-3 gap-2 mx-3.5 mt-4">
                      {[
                        { label: "Accounts", icon: "💼" },
                        { label: "Transfers", icon: "💸" },
                        { label: "Loans", icon: "📈" },
                        { label: "Pay Bills", icon: "🧾" },
                        { label: "Statements", icon: "📊" },
                        { label: "More", icon: "⚙️" },
                      ].map((act, idx) => (
                        <div key={idx} className="bg-slate-50 rounded-xl p-2 text-center border border-slate-100/80 hover:bg-slate-100 transition-colors cursor-pointer">
                          <div className="text-sm">{act.icon}</div>
                          <div className="text-[7.5px] font-extrabold text-slate-700 mt-1 leading-tight">{act.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Download & Features Panel (Right side of phone) */}
            <div className="space-y-6">
              <div className="rounded-3xl border border-border/40 bg-white p-6 shadow-sm space-y-5">
                <h2 className="font-display font-extrabold text-base text-[#286d65]">Download Now</h2>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Get the NSSF SACCO mobile app from Google Play Store and enjoy banking at your fingertips.
                </p>

                {/* Google Play Store Badge - Matches image exactly */}
                <a
                  href={playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="flex items-center gap-3 bg-black hover:bg-slate-900 transition-colors text-white rounded-xl px-4 py-2.5 shadow-md w-fit">
                    {/* SVG Google Play Logo */}
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M3 20.29V3.71c0-.49.25-.92.65-1.16l9.64 9.64-9.64 9.65c-.4-.25-.65-.68-.65-1.17z" fill="#00E5FF"/>
                      <path d="M17.38 16.62l-4.09-4.09-9.64 9.65c.19.12.43.19.7.19.53 0 1.05-.21 1.48-.64l11.55-11.55c.34-.34.34-.9 0-1.24l-3.32-3.32z" fill="#FFC107"/>
                      <path d="M3.65 2.55C3.84 2.43 4.08 2.36 4.35 2.36c.53 0 1.05.21 1.48.64l11.55 11.55c.34.34.34.9 0 1.24l-3.32 3.32-10.41-10.41 1.05-1.05z" fill="#FF3D00"/>
                      <path d="M17.38 7.38l-4.09 4.09 9.64-9.64c-.19-.12-.43-.19-.7-.19-.53 0-1.05.21-1.48.64L9.2 13.83c-.34.34-.34.9 0 1.24l3.32 3.32L22.93 8c.34-.34.34-.9 0-1.24L19.61 3.44z" fill="#4CAF50"/>
                    </svg>
                    <div>
                      <div className="text-[7.5px] text-white/70 font-semibold uppercase tracking-wider">GET IT ON</div>
                      <div className="text-xs font-extrabold leading-tight">Google Play</div>
                    </div>
                  </div>
                </a>

                {/* Gold Download Button */}
                <a
                  href={playStoreLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#F5B83C] hover:bg-[#e2a82b] text-[#286d65] font-extrabold rounded-xl py-3 text-xs shadow-sm transition-all"
                >
                  Download on Google Play
                </a>

                {/* App Features checklist */}
                <div className="pt-4 border-t border-border/40">
                  <h3 className="text-xs font-extrabold text-[#286d65] uppercase tracking-wider mb-3">App Features</h3>
                  <ul className="space-y-2.5">
                    {[
                      "24/7 Account Access",
                      "Funds Transfer",
                      "Bill Payments",
                      "Loan Applications",
                      "Account Statements",
                    ].map((feat, i) => (
                      <li key={i} className="flex items-center gap-2.5 text-xs text-muted-foreground font-semibold">
                        <CheckCircle2 className="h-4 w-4 text-[#286d65] shrink-0" />
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>

          {/* Footer note inside white/gray area */}
          <p className="text-center text-[10px] text-muted-foreground mt-12 font-medium">
            Click the button above to download our official app from Google Play Store.
          </p>
        </div>
      </div>
    </PublicLayout>
  );
}
