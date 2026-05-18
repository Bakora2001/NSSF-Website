import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { PageHero } from "@/components/layout/PageHero";

export const Route = createFileRoute("/media")({
  head: () => ({ meta: [{ title: "Media Centre — NSSF SACCO" }, { name: "description", content: "News, announcements, AGM updates and publications." }] }),
  component: MediaPage,
});

const POSTS = [
  { tag: "Announcement", title: "2025 AGM scheduled for July — register early", date: "May 12, 2025", img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" },
  { tag: "Product", title: "Introducing the AI Loan Qualification Assistant", date: "Apr 30, 2025", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80" },
  { tag: "Dividend", title: "Board declares 14.2% dividend for FY 2024", date: "Mar 18, 2025", img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80" },
];

function MediaPage() {
  return (
    <PublicLayout>
      <PageHero eyebrow="Media Centre" title="News, updates & publications" />
      <section className="mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-3">
        {POSTS.map(p => (
          <article key={p.title} className="overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-elegant transition-all">
            <div className="aspect-[16/10] bg-cover bg-center" style={{ backgroundImage: `url(${p.img})` }} />
            <div className="p-5">
              <div className="text-[10px] font-bold uppercase tracking-widest text-primary">{p.tag}</div>
              <h3 className="mt-2 font-display font-bold text-base leading-tight">{p.title}</h3>
              <div className="mt-3 text-xs text-muted-foreground">{p.date}</div>
            </div>
          </article>
        ))}
      </section>
    </PublicLayout>
  );
}
