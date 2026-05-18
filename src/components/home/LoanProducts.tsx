import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, User, GraduationCap, Building2, Home, Sparkles, CheckCircle2, Bot, Banknote, Calendar, Clock } from "lucide-react";
import { LOAN_PRODUCTS } from "@/lib/mock-data";

const ICONS: Record<string, any> = {
  KARO: Phone,
  DEVELOPMENT: User,
  EMERGENCY: Building2,
  SCHOOL: GraduationCap,
  JUMBO: Home,
};

const AMOUNTS: Record<string, string> = {
  KARO: "850,000",
  DEVELOPMENT: "600,000",
  EMERGENCY: "150,000",
  SCHOOL: "120,000",
  JUMBO: "2,000,000",
};

export function LoanProducts() {
  const featured = ["KARO", "DEVELOPMENT", "EMERGENCY", "SCHOOL", "JUMBO"];
  const loans = LOAN_PRODUCTS.filter(l => featured.includes(l.code));
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-[#11322d]">Our Loan Products</h2>
            <p className="mt-2 text-muted-foreground text-sm">Affordable loans tailored to your needs</p>
          </div>
          <Button asChild className="bg-[#F5B83C] text-[#11322d] hover:bg-[#F5B83C]/90 font-bold uppercase tracking-wide rounded-lg px-6 py-2 h-auto shadow-sm">
            <Link to="/loans">View All Loans <ArrowRight className="ml-2 h-4 w-4" /></Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {loans.map((l, i) => {
            const Icon = ICONS[l.code] ?? Phone;
            return (
              <motion.div
                key={l.code}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="rounded-2xl border border-border bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col"
              >
                <h3 className="font-display font-extrabold text-foreground text-[13px] tracking-wider text-center mb-4 uppercase">{l.name}</h3>
                
                <div className="flex items-center gap-3 mb-5 flex-1">
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f0f9f0] text-[#286d65]">
                    <Icon className="h-6 w-6" strokeWidth={1.5} />
                  </div>
                  
                  <div className="space-y-2 text-[11px] text-muted-foreground flex-1">
                    <div className="flex items-start gap-1.5">
                      <Banknote className="h-3.5 w-3.5 text-[#a1d862] shrink-0 mt-0.5" />
                      <span>Up to KES {AMOUNTS[l.code]}</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Calendar className="h-3.5 w-3.5 text-[#a1d862] shrink-0 mt-0.5" />
                      <span>Up to {l.repaymentMonths} Months</span>
                    </div>
                    <div className="flex items-start gap-1.5">
                      <Clock className="h-3.5 w-3.5 text-[#286d65] shrink-0 mt-0.5" />
                      <span>{l.tatDays === 0 ? "Same" : l.tatDays} Day{l.tatDays === 1 ? "" : "s"} TAT</span>
                    </div>
                  </div>
                </div>

                <Button asChild variant="outline" className="w-full border-[#286d65]/30 text-[#286d65] hover:bg-[#286d65] hover:text-white font-bold uppercase tracking-wide text-[11px] rounded-lg">
                  <Link to="/loans">Learn More</Link>
                </Button>
              </motion.div>
            );
          })}
        </div>

        {/* AI Loan Qualification banner */}
        <div className="mt-10 relative overflow-hidden rounded-3xl bg-gradient-hero text-white shadow-elegant">
          <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-lime/15 blur-3xl" />
          <div className="relative grid lg:grid-cols-[auto_1fr_auto_1fr] gap-8 p-8 md:p-10 items-center">
            {/* Robot illustration */}
            <div className="hidden lg:flex relative h-40 w-40 shrink-0 items-end justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-transparent blur-2xl" />
              <div className="relative grid h-32 w-32 place-items-center rounded-3xl bg-white/10 border border-white/20 backdrop-blur">
                <Bot className="h-16 w-16 text-lime" strokeWidth={1.6} />
              </div>
              <span className="absolute top-2 right-2 grid h-7 w-7 place-items-center rounded-full bg-gold text-gold-foreground text-xs font-bold animate-float">+</span>
            </div>

            <div>
              <h3 className="font-display text-2xl md:text-3xl font-extrabold text-gold">AI Loan Qualification Assistant</h3>
              <p className="mt-2 text-white/85 text-sm max-w-md">Upload your payslip or connect your payroll to find out which loans you qualify for in seconds.</p>
              <ul className="mt-4 space-y-2 text-sm">
                {["Instant eligibility check","Personalized loan recommendations","Know your repayment capacity","Reduce approval time"].map(t => (
                  <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-lime shrink-0" />{t}</li>
                ))}
              </ul>
              <Button asChild className="mt-5 bg-gold text-gold-foreground hover:bg-gold/90 font-bold uppercase tracking-wider shadow-glow">
                <Link to="/portal/ai-assistant">Check Eligibility</Link>
              </Button>
            </div>

            {/* Eligibility ring */}
            <div className="hidden md:flex justify-center">
              <ScoreRing value={85} />
            </div>

            {/* Top loan matches */}
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-3">Top Loan Matches</div>
              <div className="space-y-2">
                {[
                  { n: 1, name: "KARO Loan", amt: "850,000" },
                  { n: 2, name: "Development Loan", amt: "600,000" },
                  { n: 3, name: "Jumbo Loan", amt: "2,000,000" },
                ].map(m => (
                  <div key={m.n} className="flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 px-3 py-2.5">
                    <span className="grid h-7 w-7 place-items-center rounded-full bg-gold/20 text-gold text-xs font-bold">{m.n}</span>
                    <div className="flex-1 min-w-0">
                      <div className="font-display font-bold text-sm">{m.name}</div>
                      <div className="text-[11px] text-white/70">Up to KES {m.amt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Floating chat pill */}
          <Link to="/portal/ai-assistant" className="absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-primary-deep/80 hover:bg-primary-deep border border-white/20 backdrop-blur px-4 py-2 text-xs font-semibold text-white shadow-glow">
            <Sparkles className="h-3.5 w-3.5 text-gold" /> Chat with AI Assistant
          </Link>
        </div>
      </div>
    </section>
  );
}

function ScoreRing({ value }: { value: number }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <div className="relative">
      <svg viewBox="0 0 120 120" className="h-44 w-44 -rotate-90">
        <circle cx="60" cy="60" r={r} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="10" />
        <circle cx="60" cy="60" r={r} fill="none" stroke="oklch(0.82 0.16 130)" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${dash} ${c}`} />
      </svg>
      <div className="absolute inset-0 grid place-items-center text-center">
        <div>
          <div className="font-display text-3xl font-extrabold text-white">{value}%</div>
          <div className="text-[10px] uppercase tracking-widest text-white/70">Eligibility Score</div>
        </div>
      </div>
    </div>
  );
}
