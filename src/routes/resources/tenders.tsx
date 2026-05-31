import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Download, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export const Route = createFileRoute("/resources/tenders")({
  head: () => ({
    meta: [
      { title: "Tenders — NSSF SACCO" },
      { name: "description", content: "Active tenders and procurement opportunities from NSSF SACCO." },
    ],
  }),
  component: TendersPage,
});

const TENDERS = [
  {
    title: "SUPPLY AND DELIVERY OF OFFICE FURNITURE",
    desc: "Tender for supply and delivery of office furniture and fittings.",
    published: "May 15, 2025",
    deadline: "May 30, 2025",
  },
  {
    title: "PROVISION OF ICT SUPPORT SERVICES",
    desc: "Provision of ICT support services for a period of 2 years.",
    published: "May 10, 2025",
    deadline: "May 27, 2025",
  },
  {
    title: "AUDIT SERVICES FOR YEAR 2025",
    desc: "External audit services for the financial year ending 2025.",
    published: "April 30, 2025",
    deadline: "May 20, 2025",
  },
  {
    title: "PROVISION OF SECURITY SERVICES",
    desc: "Security services for NSSF SACCO premises.",
    published: "April 20, 2025",
    deadline: "May 15, 2025",
  },
  {
    title: "SUPPLY OF STATIONERY AND OFFICE SUPPLIES",
    desc: "Supply of stationery and office consumables.",
    published: "April 10, 2025",
    deadline: "May 5, 2025",
  },
];

function TendersPage() {
  return (
    <PublicLayout>
      {/* ── Main Content (no hero) ── */}
      <section className="mx-auto max-w-7xl px-6 py-10 grid lg:grid-cols-[1fr_300px] gap-8">

        {/* Left: Tenders Table */}
        <div className="space-y-6">
          <h2 className="text-lg font-display font-extrabold text-foreground mb-4">Tender Documents</h2>
          <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead>
                  <tr className="bg-muted text-muted-foreground font-bold border-b border-border/60 uppercase tracking-wider">
                    <th className="px-5 py-4">Title</th>
                    <th className="px-5 py-4">Description</th>
                    <th className="px-5 py-4">Published Date</th>
                    <th className="px-5 py-4">Deadline</th>
                    <th className="px-5 py-4 text-center">Download</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/40">
                  {TENDERS.map((t, idx) => (
                    <motion.tr
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="hover:bg-muted/30 transition-colors"
                    >
                      <td className="px-5 py-4 font-bold text-foreground max-w-[200px] leading-tight">{t.title}</td>
                      <td className="px-5 py-4 text-muted-foreground max-w-[240px] leading-relaxed">{t.desc}</td>
                      <td className="px-5 py-4 text-muted-foreground whitespace-nowrap">{t.published}</td>
                      <td className="px-5 py-4 text-muted-foreground font-semibold whitespace-nowrap">{t.deadline}</td>
                      <td className="px-5 py-4 text-center">
                        <button className="inline-flex items-center gap-1.5 bg-transparent hover:bg-[#286d65]/10 transition-all rounded-lg px-3 py-1.5 font-bold text-[#286d65] text-[11px] border border-[#286d65]/30 hover:border-[#286d65]">
                          <Download className="h-3.5 w-3.5" /> PDF
                        </button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Right: Info Sidebar */}
        <aside className="space-y-6">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#286d65]">Tender Information</h3>
            <ul className="space-y-3">
              {[
                "All tenders are open to eligible and qualified bidders.",
                "Download tender documents for detailed requirements.",
                "Submit your proposals before the deadline.",
                "For inquiries, contact our procurement office.",
              ].map((item, i) => (
                <li key={i} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-[#F5B83C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-[#286d65] hover:bg-[#286d65]/90 text-white font-bold rounded-xl py-2.5 text-xs transition-all mt-4">
              View Past Tenders
            </button>
          </div>
        </aside>

      </section>
    </PublicLayout>
  );
}
