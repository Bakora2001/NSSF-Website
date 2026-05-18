import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Smartphone, CheckCircle2 } from "lucide-react";

export const Route = createFileRoute("/app")({
  head: () => ({ meta: [{ title: "Mobile App — NSSF SACCO" }, { name: "description", content: "Download the NSSF SACCO mobile app for banking on the go." }] }),
  component: AppPage,
});

function AppPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="Mobile App" title="Your SACCO in your pocket" />
      <section className="mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-3xl font-extrabold">Everything you need, on mobile</h2>
          <ul className="mt-6 space-y-3 text-sm">
            {["Check balances and statements instantly","Apply for loans with AI eligibility check","Pay utilities, transfer funds, top up MPESA","Biometric login and bank-level security","Real-time notifications and approvals"].map(t => (
              <li key={t} className="flex items-start gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />{t}</li>
            ))}
          </ul>
          <div className="mt-8 flex gap-3">
            <button className="rounded-xl bg-foreground text-background px-5 py-3 font-semibold">App Store</button>
            <button className="rounded-xl bg-foreground text-background px-5 py-3 font-semibold">Google Play</button>
          </div>
        </div>
        <div className="relative grid place-items-center">
          <div className="h-96 w-56 rounded-[3rem] bg-gradient-hero p-4 shadow-elegant">
            <div className="h-full w-full rounded-[2.4rem] bg-card grid place-items-center">
              <Smartphone className="h-16 w-16 text-primary" />
            </div>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}
