import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/join/")({
  head: () => ({ meta: [{ title: "Join NSSF SACCO" }, { name: "description", content: "Become a member of NSSF SACCO Limited." }] }),
  component: JoinPage,
});

function JoinPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="Membership" title="Become a Member" subtitle="6 simple steps. Online from anywhere. KES 1,000 one-time fee." />
      <section className="mx-auto max-w-5xl px-6 py-16 grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <div>
          <h2 className="font-display text-2xl font-extrabold">What you'll need</h2>
          <ul className="mt-5 space-y-3 text-sm">
            {[
              "Valid National ID or Passport",
              "Passport-sized photo and a signature specimen",
              "Next of kin details (you can add multiple beneficiaries)",
              "Employer or business details",
              "MPESA for the KES 1,000 registration fee",
            ].map(t => <li key={t} className="flex gap-2"><CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />{t}</li>)}
          </ul>
          <div className="mt-8 flex gap-3">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-glow"><Link to="/join/register">Start Registration</Link></Button>
            <Button asChild size="lg" variant="outline" className="border-primary text-primary"><Link to="/portal/login">I'm already a member</Link></Button>
          </div>
        </div>
        <div className="rounded-2xl bg-gradient-hero text-white p-8 shadow-elegant">
          <ShieldCheck className="h-8 w-8 text-gold" />
          <h3 className="mt-4 font-display text-xl font-extrabold">Your data is protected</h3>
          <p className="mt-2 text-sm text-white/85">All documents are encrypted in transit and at rest. NSSF SACCO is SASRA regulated and ISO-aligned for member data protection.</p>
        </div>
      </section>
    </PublicLayout>
  );
}
