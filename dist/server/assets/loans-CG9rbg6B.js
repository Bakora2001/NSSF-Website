import { I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { L as Link } from "./router-BzjeXSTk.js";
import { b as PublicLayout } from "./PublicLayout-DuPv2Yua.js";
import { P as PageHero } from "./PageHero-DMRbzd6u.js";
import { L as LOAN_PRODUCTS, S as Sparkles } from "./mock-data-C_YdYJ-2.js";
import { B as Button } from "./button-CfNrbVTa.js";
import { C as Clock } from "./clock-B9i-XBJP.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Logo-BQiZWFaB.js";
import "./x-BEHNncdV.js";
function LoansPage() {
  const bosa = LOAN_PRODUCTS.filter((l) => l.category === "BOSA");
  const fosa = LOAN_PRODUCTS.filter((l) => l.category === "FOSA");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Credit Facilities", title: "Loan products with clear terms", subtitle: "From same-day Mobile Advances to 108-month Nawiri loans — choose what fits, or let our AI choose for you." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-12", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-hero text-white p-6 md:p-8 flex flex-wrap items-center justify-between gap-4 shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-gold", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }),
          " Not sure which loan?"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-2 font-display text-2xl font-extrabold", children: "Let AI tell you what you qualify for — in seconds." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gold text-gold-foreground hover:bg-gold/90 font-bold", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/ai-assistant", children: "Check Eligibility" }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoanTable, { title: "BOSA Loans", items: bosa }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoanTable, { title: "FOSA Loans", items: fosa })
  ] });
}
function LoanTable({
  title,
  items
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-extrabold mb-6", children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border bg-card shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "w-full text-sm", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { className: "bg-primary-soft text-primary text-xs uppercase tracking-wider", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3", children: "Loan" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3", children: "Repayment Period" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3", children: "TAT" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "text-left px-5 py-3 hidden md:table-cell", children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { className: "px-5 py-3" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tbody", { className: "divide-y divide-border", children: items.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "hover:bg-secondary/40", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 font-display font-bold text-foreground", children: l.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { className: "px-5 py-4 text-muted-foreground", children: [
          l.repaymentMonths,
          " Months"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-lime/20 px-2.5 py-1 text-[11px] font-bold text-primary-deep", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3 w-3" }),
          l.tatDays === 0 ? "Immediate" : `${l.tatDays} Day${l.tatDays > 1 ? "s" : ""}`
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-muted-foreground hidden md:table-cell", children: l.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { className: "px-5 py-4 text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "border-primary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/ai-assistant", children: "Apply" }) }) })
      ] }, l.code)) })
    ] }) })
  ] });
}
export {
  LoansPage as component
};
