import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Target, Eye, Heart, Users, TrendingUp, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — NSSF SACCO Limited" }, { name: "description", content: "Learn about NSSF SACCO Limited — our story, mission, vision and values." }] }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="About Us" title="Built by members, for members" subtitle="Since 1977, NSSF SACCO Limited has empowered Kenyans to save, borrow and invest with confidence — backed by SASRA regulation and the strength of community." />
      <section className="mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-6">
        {[
          { Icon: Target, title: "Our Mission", text: "To provide affordable, innovative and member-focused financial services that uplift Kenyan livelihoods." },
          { Icon: Eye, title: "Our Vision", text: "To be the most trusted and technologically advanced SACCO in East Africa." },
          { Icon: Heart, title: "Our Values", text: "Integrity, transparency, member focus, innovation and stewardship of member resources." },
        ].map(({ Icon, title, text }) => (
          <div key={title} className="rounded-2xl border border-border bg-card p-6 shadow-card">
            <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary mb-4"><Icon className="h-5 w-5" /></span>
            <h3 className="font-display font-bold text-lg">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{text}</p>
          </div>
        ))}
      </section>
      <section className="bg-secondary/40 py-16">
        <div className="mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { Icon: Users, num: "125,894+", label: "Active members" },
            { Icon: TrendingUp, num: "KES 12.8B+", label: "Total savings under management" },
            { Icon: ShieldCheck, num: "47", label: "Years serving members" },
            { Icon: TrendingUp, num: "14.2%", label: "Average dividend payout" },
          ].map(({ Icon, num, label }) => (
            <div key={label} className="rounded-2xl bg-card p-6 text-center shadow-card">
              <Icon className="h-6 w-6 mx-auto text-primary" />
              <div className="mt-3 font-display text-3xl font-extrabold text-foreground">{num}</div>
              <div className="text-xs text-muted-foreground mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
