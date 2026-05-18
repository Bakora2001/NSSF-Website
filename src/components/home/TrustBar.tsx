import { ShieldCheck, Zap, Lock, Headphones } from "lucide-react";

const ITEMS = [
  { Icon: ShieldCheck, title: "SASRA Regulated", desc: "Your deposits are safe and protected." },
  { Icon: Zap, title: "Fast Loan Processing", desc: "Quick approvals within 24–48 hours." },
  { Icon: Lock, title: "Secure & Reliable", desc: "Bank-level security for your peace of mind." },
  { Icon: Headphones, title: "24/7 Support", desc: "We are always here to help you." },
];

export function TrustBar() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {ITEMS.map(({ Icon, title, desc }) => (
          <div key={title} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><Icon className="h-5 w-5" /></span>
            <div>
              <div className="font-display font-bold text-sm text-foreground">{title}</div>
              <div className="text-xs text-muted-foreground">{desc}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
