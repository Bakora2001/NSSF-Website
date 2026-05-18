import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/layout/PageHero";
import { LOAN_PRODUCTS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Sparkles, Clock } from "lucide-react";

export const Route = createFileRoute("/loans")({
  head: () => ({ meta: [{ title: "Loan Products — NSSF SACCO" }, { name: "description", content: "BOSA and FOSA loans with turnaround times and repayment periods. Use our AI Assistant to know what you qualify for." }] }),
  component: LoansPage,
});

function LoansPage() {
  const bosa = LOAN_PRODUCTS.filter(l => l.category === "BOSA");
  const fosa = LOAN_PRODUCTS.filter(l => l.category === "FOSA");
  return (
    <PublicLayout>
      <PageHero eyebrow="Credit Facilities" title="Loan products with clear terms" subtitle="From same-day Mobile Advances to 108-month Nawiri loans — choose what fits, or let our AI choose for you." />
      <section className="mx-auto max-w-7xl px-6 py-12">
        <div className="rounded-2xl bg-gradient-hero text-white p-6 md:p-8 flex flex-wrap items-center justify-between gap-4 shadow-elegant">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold"><Sparkles className="h-4 w-4" /> Not sure which loan?</div>
            <h2 className="mt-2 font-display text-2xl font-extrabold">Let AI tell you what you qualify for — in seconds.</h2>
          </div>
          <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold"><Link to="/portal/ai-assistant">Check Eligibility</Link></Button>
        </div>
      </section>
      <LoanTable title="BOSA Loans" items={bosa} />
      <LoanTable title="FOSA Loans" items={fosa} />
    </PublicLayout>
  );
}

function LoanTable({ title, items }: { title: string; items: typeof LOAN_PRODUCTS }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <h2 className="font-display text-2xl font-extrabold mb-6">{title}</h2>
      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
        <table className="w-full text-sm">
          <thead className="bg-primary-soft text-primary text-xs uppercase tracking-wider">
            <tr>
              <th className="text-left px-5 py-3">Loan</th>
              <th className="text-left px-5 py-3">Repayment Period</th>
              <th className="text-left px-5 py-3">TAT</th>
              <th className="text-left px-5 py-3 hidden md:table-cell">Description</th>
              <th className="px-5 py-3"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {items.map(l => (
              <tr key={l.code} className="hover:bg-secondary/40">
                <td className="px-5 py-4 font-display font-bold text-foreground">{l.name}</td>
                <td className="px-5 py-4 text-muted-foreground">{l.repaymentMonths} Months</td>
                <td className="px-5 py-4"><span className="inline-flex items-center gap-1 rounded-full bg-lime/20 px-2.5 py-1 text-[11px] font-bold text-primary-deep"><Clock className="h-3 w-3" />{l.tatDays === 0 ? "Immediate" : `${l.tatDays} Day${l.tatDays>1?"s":""}`}</span></td>
                <td className="px-5 py-4 text-muted-foreground hidden md:table-cell">{l.description}</td>
                <td className="px-5 py-4 text-right"><Button asChild size="sm" variant="outline" className="border-primary text-primary"><Link to="/portal/ai-assistant">Apply</Link></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
