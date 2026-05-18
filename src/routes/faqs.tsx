import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const Route = createFileRoute("/faqs")({
  head: () => ({ meta: [{ title: "FAQs — NSSF SACCO" }, { name: "description", content: "Frequently asked questions about NSSF SACCO membership, loans and services." }] }),
  component: FaqsPage,
});

const FAQS = [
  { q: "Who can join NSSF SACCO?", a: "Any Kenyan citizen aged 18+ with a valid ID can join. Both employed and self-employed individuals are welcome." },
  { q: "How much is the registration fee?", a: "A one-time registration fee of KES 1,000 payable via MPESA or at the FOSA office." },
  { q: "How does the AI Loan Assistant work?", a: "Upload your latest payslip or let us fetch it from Microsoft Dynamics 365. The AI evaluates your eligibility across all loan products and recommends the best fit instantly." },
  { q: "Are my deposits safe?", a: "Yes. NSSF SACCO is SASRA licensed and regulated. All FOSA deposits are protected under the regulatory framework." },
  { q: "What is the loan turnaround time?", a: "Most loans are processed in 1–2 days. Mobile Advances are issued immediately." },
  { q: "Can I access my account on mobile?", a: "Yes. Members with Jumbo savings accounts receive automatic mobile banking access on registration." },
];

function FaqsPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="Help" title="Frequently Asked Questions" />
      <section className="mx-auto max-w-3xl px-6 py-16">
        <Accordion type="single" collapsible className="rounded-2xl border border-border bg-card shadow-card divide-y divide-border overflow-hidden">
          {FAQS.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="border-0">
              <AccordionTrigger className="px-6 py-4 font-display font-bold text-left hover:bg-secondary/50">{f.q}</AccordionTrigger>
              <AccordionContent className="px-6 pb-4 text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </PublicLayout>
  );
}
