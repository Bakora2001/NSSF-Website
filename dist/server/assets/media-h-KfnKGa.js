import { I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { b as PublicLayout } from "./PublicLayout-DuPv2Yua.js";
import { P as PageHero } from "./PageHero-DMRbzd6u.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Logo-BQiZWFaB.js";
import "./router-BzjeXSTk.js";
import "./button-CfNrbVTa.js";
import "./x-BEHNncdV.js";
const POSTS = [{
  tag: "Announcement",
  title: "2025 AGM scheduled for July — register early",
  date: "May 12, 2025",
  img: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80"
}, {
  tag: "Product",
  title: "Introducing the AI Loan Qualification Assistant",
  date: "Apr 30, 2025",
  img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
}, {
  tag: "Dividend",
  title: "Board declares 14.2% dividend for FY 2024",
  date: "Mar 18, 2025",
  img: "https://images.unsplash.com/photo-1565514020179-026b92b84bb6?auto=format&fit=crop&w=1200&q=80"
}];
function MediaPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Media Centre", title: "News, updates & publications" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-16 grid gap-6 md:grid-cols-3", children: POSTS.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-card hover:shadow-elegant transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-[16/10] bg-cover bg-center", style: {
        backgroundImage: `url(${p.img})`
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-primary", children: p.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display font-bold text-base leading-tight", children: p.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 text-xs text-muted-foreground", children: p.date })
      ] })
    ] }, p.title)) })
  ] });
}
export {
  MediaPage as component
};
