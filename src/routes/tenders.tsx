import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/layout/PageHero";
import { Download } from "lucide-react";

export const Route = createFileRoute("/tenders")({
  head: () => ({ meta: [{ title: "Tenders — NSSF SACCO" }, { name: "description", content: "Active tenders and procurement opportunities." }] }),
  component: TendersPage,
});

const TENDERS = [
  { ref: "NSSF-SACCO/T/2025/001", title: "Supply of office stationery", deadline: "Jun 12, 2025", status: "Open" },
  { ref: "NSSF-SACCO/T/2025/002", title: "ICT infrastructure upgrade", deadline: "Jun 20, 2025", status: "Open" },
  { ref: "NSSF-SACCO/T/2025/003", title: "Security services renewal", deadline: "Jun 30, 2025", status: "Open" },
];

function TendersPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="Procurement" title="Active tenders" />
      <section className="mx-auto max-w-5xl px-6 py-16">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-card">
          <table className="w-full text-sm">
            <thead className="bg-primary-soft text-primary text-xs uppercase tracking-wider">
              <tr><th className="text-left px-5 py-3">Reference</th><th className="text-left px-5 py-3">Title</th><th className="text-left px-5 py-3">Deadline</th><th className="text-left px-5 py-3">Status</th><th className="px-5 py-3"></th></tr>
            </thead>
            <tbody className="divide-y divide-border">
              {TENDERS.map(t => (
                <tr key={t.ref} className="hover:bg-secondary/40">
                  <td className="px-5 py-4 font-mono text-xs">{t.ref}</td>
                  <td className="px-5 py-4 font-semibold">{t.title}</td>
                  <td className="px-5 py-4 text-muted-foreground">{t.deadline}</td>
                  <td className="px-5 py-4"><span className="rounded-full bg-lime/20 px-2.5 py-1 text-[11px] font-bold text-primary-deep">{t.status}</span></td>
                  <td className="px-5 py-4 text-right"><button className="inline-flex items-center gap-1 text-primary font-semibold text-sm hover:underline"><Download className="h-3.5 w-3.5" /> PDF</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </PublicLayout>
  );
}
