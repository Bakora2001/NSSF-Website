import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/layout/PageHero";
import { PiggyBank, CreditCard, Smartphone, Plane, Building2, Banknote, ShieldCheck, ArrowLeftRight } from "lucide-react";

export const Route = createFileRoute("/products/")({
  head: () => ({ meta: [{ title: "Products & Services — NSSF SACCO" }, { name: "description", content: "Savings, FOSA, VISA SaccoLink, Mobile Banking, Agency Banking and more." }] }),
  component: ProductsOverviewPage,
});

const PRODUCTS = [
  { Icon: PiggyBank, name: "Savings Accounts", desc: "Flexible savings with competitive rates. Charges of KES 120 per OTC withdrawal, KES 36 via Co-op ATM." },
  { Icon: Banknote, name: "Jumbo Savings (FOSA)", desc: "Front Office Service Account with mobile banking access, salary processing and standing orders." },
  { Icon: CreditCard, name: "VISA SaccoLink Card", desc: "ATM + POS card accepted globally. KES 50 per Co-op ATM transaction; KES 200 elsewhere." },
  { Icon: Smartphone, name: "Mobile Banking", desc: "Pay loans, transfer shares, withdraw to MPESA — automatic with Jumbo account." },
  { Icon: Building2, name: "Agency Banking", desc: "Access Co-op, Equity & KCB agency services at our convenience." },
  { Icon: Plane, name: "Johari Holiday Account", desc: "Save monthly for annual SACCO trips — local and international destinations." },
  { Icon: ShieldCheck, name: "Bankers Cheques", desc: "KES 120 per leaf, issued the same day at the FOSA office." },
  { Icon: ArrowLeftRight, name: "EFT & RTGS", desc: "Send funds to any commercial bank — EFT KES 400, RTGS KES 800 per transaction." },
];

function ProductsOverviewPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="Products & Services" title="Everything a modern SACCO member needs" subtitle="From everyday savings to global card payments — all under one trusted roof." />
      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {PRODUCTS.map(({ Icon, name, desc }) => (
            <div key={name} className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary mb-4"><Icon className="h-5 w-5" /></span>
              <h3 className="font-display font-bold text-base">{name}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>
    </PublicLayout>
  );
}
