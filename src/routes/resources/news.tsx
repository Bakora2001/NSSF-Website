import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Calendar, ArrowRight, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import nssf1 from "@/assets/hero/nssf-photo1.jpg";
import nssf2 from "@/assets/hero/nssf-photo2.jpg";
import nssfBuilding1 from "@/assets/hero/nssf-building-1.png";

export const Route = createFileRoute("/resources/news")({
  head: () => ({
    meta: [
      { title: "News & Articles — NSSF SACCO" },
      { name: "description", content: "Stay updated with the latest news, announcements, and articles from NSSF SACCO." },
    ],
  }),
  component: NewsArticlesPage,
});

const ARTICLES = [
  {
    id: 1,
    tag: "Important Notice",
    tagColor: "bg-red-500 text-white",
    date: "May 20, 2025",
    title: "2026 Annual General Meeting Notice",
    desc: "Notice is hereby given that the 2026 Annual General Meeting will be held on Saturday to discuss key updates, dividend payouts, and election results.",
    image: nssfBuilding1,
  },
  {
    id: 2,
    tag: "News",
    tagColor: "bg-[#286d65] text-white",
    date: "May 15, 2025",
    title: "Board of Directors Elections 2026",
    desc: "The SACCO will be conducting elections for positions on the Board of Directors and Supervisory Committee.",
    image: nssf2,
  },
  {
    id: 3,
    tag: "Update",
    tagColor: "bg-[#F5B83C] text-[#286d65]",
    date: "May 10, 2025",
    title: "System Maintenance Notice",
    desc: "Please note that our systems will be undergoing scheduled maintenance on...",
    image: nssf1,
  },
  {
    id: 4,
    tag: "Article",
    tagColor: "bg-blue-500 text-white",
    date: "May 5, 2025",
    title: "Financial Planning Tips for Members",
    desc: "Learn effective ways to manage your investments and achieve your financial goals.",
    image: null,
  },
];

const CATEGORIES = [
  { name: "All News", count: 24 },
  { name: "Notices", count: 8 },
  { name: "Events", count: 5 },
  { name: "Updates", count: 4 },
  { name: "Financial Tips", count: 7 },
];

const ARCHIVES = ["May 2025", "April 2025", "March 2025", "February 2025"];

function NewsArticlesPage() {
  return (
    <PublicLayout>
      {/* ── Main Content (no hero section) ── */}
      <section className="mx-auto max-w-7xl px-6 py-10 grid lg:grid-cols-[1fr_300px] gap-8">

        {/* Articles Grid */}
        <div className="space-y-8">
          <h2 className="text-xl font-display font-extrabold text-foreground border-b border-border pb-3">
            Latest News &amp; Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {ARTICLES.map((art, i) => (
              <motion.article
                key={art.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.08 }}
                whileHover={{ y: -3 }}
                className="bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
              >
                {/* Article image thumbnail */}
                {art.image ? (
                  <div className="relative h-36 overflow-hidden bg-muted">
                    <img
                      src={art.image}
                      alt={art.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Tag overlay on image */}
                    <div className="absolute top-3 left-3">
                      <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${art.tagColor}`}>
                        {art.tag}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="px-5 pt-5">
                    <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full ${art.tagColor}`}>
                      {art.tag}
                    </span>
                  </div>
                )}

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" /> {art.date}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-2 leading-snug hover:text-[#286d65] transition-colors cursor-pointer">
                    {art.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-4 flex-1">{art.desc}</p>
                  <button className="inline-flex items-center gap-1 text-xs font-bold text-[#286d65] hover:text-[#286d65]/80 self-start">
                    Read More <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Categories */}
          <div className="bg-card border border-border/60 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#286d65] mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-[#F5B83C]" /> Categories
            </h3>
            <ul className="space-y-2">
              {CATEGORIES.map((cat, idx) => (
                <li key={idx}>
                  <button className="w-full flex items-center justify-between text-xs font-bold text-foreground/80 hover:text-[#286d65] py-1.5 transition-colors border-b border-border/40 last:border-0">
                    <span>{cat.name}</span>
                    <span className="bg-muted px-2 py-0.5 rounded-full text-[10px] text-muted-foreground">{cat.count}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Archive */}
          <div className="bg-card border border-border/60 rounded-2xl p-5 shadow-sm">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#286d65] mb-4">
              Archive
            </h3>
            <ul className="space-y-2">
              {ARCHIVES.map((arch, idx) => (
                <li key={idx}>
                  <button className="w-full text-left text-xs font-bold text-foreground/80 hover:text-[#286d65] py-1 transition-colors">
                    {arch}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

      </section>
    </PublicLayout>
  );
}
