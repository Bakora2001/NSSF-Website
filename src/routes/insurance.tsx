import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/layout/PageHero";
import { ShieldCheck, HeartPulse, Car, Home, Briefcase, Plane } from "lucide-react";

export const Route = createFileRoute("/insurance")({
  head: () => ({ meta: [{ title: "Insurance Agency — Nassefu" }, { name: "description", content: "Nassefu Insurance Agency — covers tailored for NSSF SACCO members." }] }),
  component: InsurancePage,
});

const COVERS = [
  { Icon: HeartPulse, name: "Medical Cover", desc: "Inpatient, outpatient and chronic care for you and your family." },
  { Icon: Car, name: "Motor Insurance", desc: "Comprehensive and third-party covers at member rates." },
  { Icon: Home, name: "Home Insurance", desc: "Protect your home, contents and personal effects." },
  { Icon: Briefcase, name: "Business Cover", desc: "Liability, asset and continuity covers for SMEs." },
  { Icon: Plane, name: "Travel Insurance", desc: "Coverage for SACCO holiday trips and personal travel." },
  { Icon: ShieldCheck, name: "Life & Funeral", desc: "Last-expense and life policies with flexible premiums." },
];

function InsurancePage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="Nassefu Insurance Agency" title="Cover what matters — at member rates" subtitle="Through Nassefu Insurance Agency, we negotiate the best terms with leading underwriters on behalf of our members." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {COVERS.map(({ Icon, name, desc }) => (
            <div key={name} className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-all">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold-foreground mb-4"><Icon className="h-5 w-5" /></span>
              <h3 className="font-display font-bold">{name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
