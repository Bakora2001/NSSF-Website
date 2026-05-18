import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { Logo } from "@/components/layout/Logo";
import { Button } from "@/components/ui/button";
import { Shield, Eye, EyeOff } from "lucide-react";

export const Route = createFileRoute("/portal/login")({
  head: () => ({ meta: [{ title: "Member Portal Login — NSSF SACCO" }, { name: "description", content: "Secure NSSF SACCO Member Portal login." }] }),
  component: LoginPage,
});

const FIELDS = ["Member Number", "National ID Number", "Phone Number", "Username (Staff Only)"] as const;

function LoginPage() {
  const nav = useNavigate();
  const [field, setField] = useState<typeof FIELDS[number]>("Member Number");
  const [showPw, setShowPw] = useState(false);
  const [a, b] = useMemo(() => [Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1], []);
  const [captcha, setCaptcha] = useState("");
  const [verified, setVerified] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!verified) return;
    nav({ to: "/portal" });
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 bg-secondary/30">
      <div className="hidden lg:block relative isolate bg-gradient-hero text-white p-12 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_70%,rgba(245,184,60,0.25),transparent_60%)]" />
        <Logo variant="light" />
        <div className="mt-24 max-w-md">
          <h1 className="font-display text-4xl font-extrabold leading-tight">Welcome back, member.</h1>
          <p className="mt-4 text-white/80">Access your savings, loans, dividends and the AI Loan Assistant — securely connected to Microsoft Dynamics 365.</p>
          <div className="mt-12 grid grid-cols-2 gap-4">
            {[{n:"KES 12.8B+",l:"Savings"},{n:"125,894+",l:"Members"},{n:"14.2%",l:"Dividend"},{n:"24/7",l:"Support"}].map(s => (
              <div key={s.l} className="rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/20">
                <div className="font-display text-2xl font-extrabold text-gold">{s.n}</div>
                <div className="text-xs text-white/70 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="grid place-items-center p-6">
        <div className="w-full max-w-md">
          <div className="lg:hidden mb-6"><Logo /></div>
          <div className="rounded-2xl bg-card shadow-elegant p-8 border border-border">
            <h2 className="font-display text-2xl font-extrabold">Member Portal Sign In</h2>
            <p className="text-sm text-muted-foreground mt-1">Choose how you'd like to identify yourself.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div>
                <label className="text-xs font-semibold text-muted-foreground">Identify with</label>
                <select value={field} onChange={(e) => setField(e.target.value as any)} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm">
                  {FIELDS.map(f => <option key={f}>{f}</option>)}
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground">{field}</label>
                <input required className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring" placeholder={field} />
              </div>
              <div>
                <label className="text-xs font-semibold text-muted-foreground">Password</label>
                <div className="relative mt-1">
                  <input type={showPw ? "text" : "password"} required className="w-full rounded-md border border-input bg-background px-3 py-2.5 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring" />
                  <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="rounded-xl border border-border bg-secondary/40 p-4">
                <div className="flex items-center gap-2 text-xs font-semibold text-primary mb-2"><Shield className="h-4 w-4" /> Human verification</div>
                <div className="flex items-center gap-3">
                  <span className="font-display text-lg font-extrabold text-foreground">{a} + {b} = ?</span>
                  <input value={captcha} onChange={(e) => { setCaptcha(e.target.value); setVerified(parseInt(e.target.value) === a + b); }} className="w-20 rounded-md border border-input bg-background px-2 py-1.5 text-sm" />
                  {verified && <span className="text-xs font-semibold text-primary">✓ Verified</span>}
                </div>
              </div>
              <Button type="submit" disabled={!verified} className="w-full bg-primary text-primary-foreground hover:bg-primary-deep font-bold h-11">Sign in to Portal</Button>
              <div className="text-center text-sm">
                <Link to="/join" className="text-primary font-semibold hover:underline">New member? Sign up here</Link>
              </div>
            </form>
          </div>
          <div className="mt-4 text-center text-xs text-muted-foreground">
            <Link to="/" className="hover:text-primary">← Back to homepage</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
