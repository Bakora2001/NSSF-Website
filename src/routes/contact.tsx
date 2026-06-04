import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  head: () => ({ meta: [{ title: "Contact Us — NSSF SACCO" }, { name: "description", content: "Get in touch with NSSF SACCO Limited customer support." }] }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="Contact Us" title="We're here to help" />
      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { Icon: MapPin, title: "Visit Us", text: "Social Security House Block 'C', Ground Floor, Bishop Road, Nairobi" },
            { Icon: Phone, title: "Call Us", text: "+254 111 018 100" },
            { Icon: Mail, title: "Email Us", text: "info@nssfsacco.co.ke" },
            { Icon: Clock, title: "Hours", text: "Mon — Fri · 8:00 AM — 5:00 PM" },
          ].map(({ Icon, title, text }) => (
            <div key={title} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><Icon className="h-5 w-5" /></span>
              <div><div className="font-display font-bold">{title}</div><div className="text-sm text-muted-foreground mt-1">{text}</div></div>
            </div>
          ))}
        </div>
        <form className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card space-y-4">
          <h3 className="font-display text-xl font-extrabold">Send us a message</h3>
          <div className="grid sm:grid-cols-2 gap-3">
            <Input label="Full Name" />
            <Input label="Email" type="email" />
          </div>
          <Input label="Subject" />
          <div>
            <label className="text-xs font-semibold text-muted-foreground">Message</label>
            <textarea rows={5} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold w-full">Send Message</Button>
        </form>
      </section>
    </PublicLayout>
  );
}

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground">{label}</label>
      <input type={type} className="mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
    </div>
  );
}
