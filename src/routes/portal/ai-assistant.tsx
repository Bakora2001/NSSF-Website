import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { Button } from "@/components/ui/button";
import { Upload, Cloud, CheckCircle2, Sparkles, FileText } from "lucide-react";
import { motion } from "framer-motion";
import { evaluateLoans } from "@/lib/loan-engine";
import { MOCK_MEMBER, MOCK_PAYSLIP } from "@/lib/mock-data";

export const Route = createFileRoute("/portal/ai-assistant")({
  head: () => ({ meta: [{ title: "AI Loan Assistant — NSSF SACCO" }] }),
  component: AIAssistantPage,
});

type Stage = "upload" | "analyzing" | "results";
const KES = (n: number) => "KES " + n.toLocaleString();

function AIAssistantPage() {
  const [stage, setStage] = useState<Stage>("upload");
  const start = () => { setStage("analyzing"); setTimeout(() => setStage("results"), 2200); };
  const recs = evaluateLoans(MOCK_PAYSLIP, MOCK_MEMBER);

  return (
    <PortalLayout>
      <div className="mb-6">
        <h1 className="font-display text-3xl font-extrabold flex items-center gap-2"><Sparkles className="h-7 w-7 text-gold" /> AI Loan Assistant</h1>
        <p className="text-sm text-muted-foreground mt-1">Three steps to know exactly what you qualify for.</p>
      </div>

      <div className="flex items-center gap-4 mb-8">
        {["Upload / Fetch Data", "Analysis", "Recommendations"].map((s, i) => {
          const idx = i + 1;
          const current = (stage === "upload" && idx === 1) || (stage === "analyzing" && idx === 2) || (stage === "results" && idx === 3);
          const done = (stage === "analyzing" && idx === 1) || (stage === "results" && idx <= 2);
          return (
            <div key={s} className="flex items-center gap-2">
              <span className={`grid h-8 w-8 place-items-center rounded-full font-bold text-sm ${done ? "bg-lime text-primary-deep" : current ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`}>{done ? <CheckCircle2 className="h-4 w-4" /> : idx}</span>
              <span className={`text-sm font-semibold ${current || done ? "text-foreground" : "text-muted-foreground"}`}>{s}</span>
              {i < 2 && <span className="h-px w-8 bg-border" />}
            </div>
          );
        })}
      </div>

      {stage === "upload" && (
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display font-bold mb-1">Upload Payslip</h3>
            <p className="text-xs text-muted-foreground mb-4">Upload your latest payslip and our AI will analyze your income, deductions and eligibility.</p>
            <div className="rounded-xl border-2 border-dashed border-border p-10 text-center bg-secondary/30">
              <Upload className="h-10 w-10 mx-auto text-primary" />
              <p className="mt-3 text-sm font-semibold">Drag & drop your payslip here</p>
              <p className="text-xs text-muted-foreground mt-1">or</p>
              <Button onClick={start} className="mt-3 bg-primary text-primary-foreground hover:bg-primary-deep">Choose File</Button>
              <p className="text-[11px] text-muted-foreground mt-3">PDF, PNG, JPG (Max 5MB)</p>
            </div>
            <Button onClick={start} variant="outline" className="w-full mt-4 border-primary text-primary"><Cloud className="h-4 w-4 mr-2" /> Fetch Data from Microsoft Dynamics 365</Button>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <h3 className="font-display font-bold mb-4">How it works</h3>
            <ol className="space-y-4">
              {[
                { t: "We securely read your payslip", d: "OCR extracts net salary, deductions and existing loan obligations." },
                { t: "AI checks SACCO loan rules", d: "Eligibility, share multipliers, repayment capacity and 1/3 rule." },
                { t: "You get ranked recommendations", d: "Best fit, fastest approval, lowest stress and highest ceiling — with reasons." },
              ].map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">{i + 1}</span>
                  <div><div className="font-semibold text-sm">{step.t}</div><div className="text-xs text-muted-foreground">{step.d}</div></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}

      {stage === "analyzing" && (
        <div className="rounded-2xl border border-border bg-card p-12 shadow-card text-center">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1.6, repeat: Infinity, ease: "linear" }} className="mx-auto h-16 w-16 rounded-full border-4 border-primary-soft border-t-primary" />
          <h3 className="mt-6 font-display text-xl font-extrabold">Analyzing your profile…</h3>
          <p className="text-sm text-muted-foreground mt-2">Verifying income, scanning existing loans, scoring eligibility.</p>
          <div className="mt-6 max-w-md mx-auto space-y-2 text-left text-sm">
            {["Income verified","Existing loans checked","Repayment capacity assessed"].map(t => (
              <div key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-lime" />{t}</div>
            ))}
          </div>
        </div>
      )}

      {stage === "results" && (
        <>
          <div className="grid gap-6 lg:grid-cols-3 mb-8">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-1 grid place-items-center text-center">
              <ScoreRing value={85} />
              <p className="mt-3 text-sm font-semibold">Analysis Complete</p>
              <p className="text-xs text-muted-foreground">Net salary KES {MOCK_PAYSLIP.netSalary.toLocaleString()}</p>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-display font-bold">Analysis Result</h3>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary"><FileText className="h-3 w-3" /> Source: Dynamics 365 · {MOCK_PAYSLIP.period}</span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {["Income Verified","Existing Loans Checked","Repayment Capacity Assessed","Credit Score Evaluated","Guarantor Requirement Checked","Debt-to-Income within range"].map(t => (
                  <div key={t} className="flex items-center gap-2 text-sm"><CheckCircle2 className="h-4 w-4 text-primary" />{t}</div>
                ))}
              </div>
            </div>
          </div>

          <h2 className="font-display text-xl font-extrabold mb-4">Recommended loans for you</h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {recs.slice(0, 4).map(r => (
              <div key={r.product.code} className={`rounded-2xl border bg-card p-5 shadow-card relative ${r.badge === "Recommended" ? "border-primary shadow-elegant ring-1 ring-primary" : "border-border"}`}>
                {r.badge && <span className="absolute -top-2.5 right-4 rounded-full bg-gold text-gold-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">{r.badge}</span>}
                <h3 className="font-display font-extrabold">{r.product.name}</h3>
                <p className="text-xs text-muted-foreground mt-0.5">Up to {KES(r.maxAmount)}</p>
                <div className="mt-4 space-y-1.5 text-xs">
                  <Row k="Repayment Period" v={`${r.product.repaymentMonths} Months`} />
                  <Row k="Est. Monthly Repayment" v={KES(r.monthlyRepayment)} />
                  <Row k="Eligibility Score" v={`${r.eligibilityScore}%`} />
                </div>
                <div className="mt-4 rounded-lg bg-secondary/50 p-3">
                  <div className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Why you qualify</div>
                  <div className="mt-1 text-xs text-foreground/80">{r.reasons[0]}</div>
                </div>
                <Button className="w-full mt-4 bg-primary text-primary-foreground hover:bg-primary-deep font-bold">Apply Now</Button>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-2xl bg-gradient-hero text-white p-5 flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm">Need help? Chat with our AI Assistant — bottom right corner.</p>
            <Button onClick={() => setStage("upload")} variant="outline" className="border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white">Re-run Analysis</Button>
          </div>
        </>
      )}
    </PortalLayout>
  );
}

function Row({ k, v }: { k: string; v: string }) {
  return <div className="flex items-center justify-between"><span className="text-muted-foreground">{k}</span><span className="font-semibold text-foreground">{v}</span></div>;
}

function ScoreRing({ value }: { value: number }) {
  const r = 50;
  const c = 2 * Math.PI * r;
  const dash = (value / 100) * c;
  return (
    <svg viewBox="0 0 120 120" className="h-36 w-36 -rotate-90">
      <circle cx="60" cy="60" r={r} fill="none" stroke="currentColor" strokeWidth="10" className="text-primary-soft" />
      <circle cx="60" cy="60" r={r} fill="none" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeDasharray={`${dash} ${c}`} className="text-primary" />
      <text x="60" y="62" textAnchor="middle" dominantBaseline="central" className="fill-foreground font-display font-extrabold" style={{ fontSize: 22, transform: "rotate(90deg)", transformOrigin: "60px 60px" }}>{value}%</text>
    </svg>
  );
}
