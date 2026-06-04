import { motion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, Upload, Cpu } from "lucide-react";

export function AITeaser() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-hero text-white shadow-elegant">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-gold/25 blur-3xl" />
        <div className="absolute -left-24 -bottom-24 h-80 w-80 rounded-full bg-lime/20 blur-3xl" />
        <div className="relative grid lg:grid-cols-[1.1fr_1fr] gap-10 p-8 md:p-14 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold backdrop-blur">
              <Sparkles className="h-3.5 w-3.5 text-gold" /> AI-Powered · Microsoft Dynamics 365 Integrated
            </span>
            <h2 className="mt-5 text-3xl sm:text-4xl font-display font-extrabold leading-tight text-balance">
              <span className="text-white">AI Loan Qualification</span> <span className="text-gold">Assistant</span>
            </h2>
            <p className="mt-4 text-white/85 max-w-xl">Stop guessing. Upload your payslip or let us pull it from Dynamics 365 — our AI instantly tells you which loan you qualify for, how much, and why.</p>
            <ul className="mt-6 grid gap-2.5 text-sm">
              {["Instant eligibility check across all 16 loan products","Personalized loan recommendations with reasons","Know your repayment capacity before applying","Reduces secretary workload by up to 70%"].map(t => (
                <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-lime mt-0.5 shrink-0" />{t}</li>
              ))}
            </ul>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-glow">
                <Link to="/portal/ai-assistant">Check Eligibility</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/40 text-white bg-white/5 hover:bg-white/15 hover:text-white">
                <Link to="/portal/ai-assistant">How it works</Link>
              </Button>
            </div>
          </div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
            <div className="rounded-2xl bg-card text-foreground p-6 shadow-elegant">
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="flex items-center gap-2 text-primary"><Cpu className="h-4 w-4" /> Eligibility Score</span>
                <span className="rounded-full bg-lime/20 px-2 py-0.5 text-primary-deep text-[10px] uppercase tracking-widest">Analyzed</span>
              </div>
              <div className="mt-4 grid grid-cols-[auto_1fr] gap-4 items-center">
                <ScoreRing value={85} />
                <div className="space-y-2 text-sm">
                  {["Income Verified","Existing Loans Checked","Repayment Capacity Assessed","Credit Score Evaluated","Guarantor Requirement Checked"].map(t => (
                    <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-primary" /><span className="text-foreground/80 text-[13px]">{t}</span></div>
                  ))}
                </div>
              </div>
              <div className="mt-5 rounded-xl border border-border p-3">
                <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Top Loan Match</div>
                <div className="mt-1 flex items-center justify-between">
                  <div><div className="font-display font-bold">Karo Loan</div><div className="text-xs text-muted-foreground">Up to KES 850,000 · 36 months</div></div>
                  <span className="rounded-full bg-lime/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary-deep">Recommended</span>
                </div>
              </div>
              <div className="mt-3 flex items-center gap-2 text-[11px] text-muted-foreground"><Upload className="h-3 w-3" /> Payslip parsed via Microsoft Dynamics 365</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ScoreRing({ value }: { value: number }) {
  const r = 38;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <svg viewBox="0 0 100 100" className="h-32 w-32 -rotate-90">
      <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="9" className="text-primary-soft" />
      <circle cx="50" cy="50" r={r} fill="none" stroke="currentColor" strokeWidth="9" strokeLinecap="round" strokeDasharray={`${dash} ${c}`} className="text-primary" />
      <text x="50" y="52" textAnchor="middle" dominantBaseline="central" className="rotate-90 origin-center fill-foreground font-display font-extrabold" style={{ fontSize: 18, transform: "rotate(90deg)", transformOrigin: "50px 50px" }}>{value}%</text>
    </svg>
  );
}
