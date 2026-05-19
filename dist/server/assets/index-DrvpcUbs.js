import { I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { L as Link } from "./router-BzjeXSTk.js";
import { P as PortalLayout, W as Wallet } from "./PortalLayout-B1fagZOo.js";
import { a as MOCK_MEMBER, c as MOCK_TRANSACTIONS, S as Sparkles, M as MOCK_LOAN_SUMMARY } from "./mock-data-C_YdYJ-2.js";
import { B as Button } from "./button-CfNrbVTa.js";
import { c as createLucideIcon } from "./Logo-BQiZWFaB.js";
import { P as PiggyBank } from "./piggy-bank-DBwLaLiy.js";
import { T as TrendingUp } from "./trending-up-C5En9192.js";
import { H as HandCoins, U as User } from "./ChatAssistant-BDX1jNKg.js";
import { A as ArrowRight } from "./arrow-right-DDJlnQtJ.js";
import { F as FileText } from "./file-text-Ct5hwvBO.js";
import { S as Smartphone } from "./smartphone-kw7Ks_hq.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./arrow-left-right-D40nYtNf.js";
import "./proxy-D0dequ3V.js";
import "./x-BEHNncdV.js";
const __iconNode$2 = [
  ["path", { d: "m7 7 10 10", key: "1fmybs" }],
  ["path", { d: "M17 7v10H7", key: "6fjiku" }]
];
const ArrowDownRight = createLucideIcon("arrow-down-right", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M7 7h10v10", key: "1tivn9" }],
  ["path", { d: "M7 17 17 7", key: "1vkiza" }]
];
const ArrowUpRight = createLucideIcon("arrow-up-right", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",
      key: "3c2336"
    }
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }]
];
const BadgeCheck = createLucideIcon("badge-check", __iconNode);
const KES = (n) => "KES " + n.toLocaleString();
function Dashboard() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-2xl md:text-3xl font-extrabold flex items-center gap-2", children: [
        "Welcome back, ",
        MOCK_MEMBER.name.split(" ")[0],
        " ",
        MOCK_MEMBER.name.split(" ")[1],
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "👋" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 rounded-full bg-lime/20 text-primary-deep px-2.5 py-0.5 text-[10px] font-bold ml-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-3 w-3" }),
          " Verified"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Here's what's happening with your accounts today." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { Icon: PiggyBank, label: "Total Savings", value: KES(1278650), hint: "+12.5% this month", color: "gold", hintColor: "text-green-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { Icon: TrendingUp, label: "Shares", value: KES(856e3), hint: "+8.2% this month", color: "lime", hintColor: "text-green-600" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { Icon: HandCoins, label: "Loan Balance", value: KES(45e4), hint: "Outstanding", color: "gold", hintColor: "text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { Icon: Wallet, label: "Available Balance", value: KES(828650), hint: "View Accounts →", color: "primary", hintColor: "text-gold", link: "/portal/accounts" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 lg:grid-cols-3 mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card flex flex-col", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-3", children: "Loan Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl bg-secondary/40 p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Karo Loan" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-extrabold text-foreground mt-1", children: KES(45e4) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Outstanding Balance" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-end justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Next Repayment" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-lg font-extrabold text-foreground", children: KES(15e3) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Due on 25 May 2025" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkline, {})
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-between text-xs mb-1.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Repayment Progress" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: "60%" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-2 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-lime", style: {
            width: "60%"
          } }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "mt-5 w-full border-primary text-primary font-bold uppercase tracking-wide text-[11px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/loans", children: "View Loan Details" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-3", children: "Recent Transactions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: MOCK_TRANSACTIONS.slice(0, 4).map((t, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid h-9 w-9 place-items-center rounded-lg ${t.type === "Credit" ? "bg-lime/20 text-primary-deep" : "bg-gold/15 text-gold-foreground"}`, children: t.type === "Credit" ? /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowDownRight, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-semibold text-foreground truncate", children: t.description }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: t.date })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `text-sm font-bold ${t.type === "Credit" ? "text-green-600" : "text-destructive"}`, children: [
            t.type === "Credit" ? "+" : "-",
            KES(t.amount)
          ] })
        ] }, i)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "mt-5 w-full border-primary text-primary font-bold uppercase tracking-wide text-[11px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/accounts", children: "View All Transactions" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground", children: "AI Loan Assistant" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-2", children: "Based on your profile, you may qualify for the following loans" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl border border-border p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-8 w-8 place-items-center rounded-full bg-lime/20 text-primary-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-extrabold text-sm", children: "Karo Loan" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground", children: "Up to KES 850,000 · 36 Months" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 flex items-end justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary", children: "85% Match" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(MiniRising, {})
            ] })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-4 w-full bg-gold text-gold-foreground hover:bg-gold/90 font-bold uppercase tracking-wider text-[11px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/ai-assistant", children: "Check Eligibility" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/ai-assistant", className: "mt-3 flex items-center justify-center gap-1 text-xs font-semibold text-primary hover:underline", children: [
          "See All Loan Options ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-3", children: "Savings Goal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "Holiday Trip" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mt-1", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display font-extrabold text-foreground text-sm", children: [
            KES(12e4),
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-muted-foreground font-normal", children: [
              "of ",
              KES(2e5)
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-bold text-primary", children: "60%" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 h-2 rounded-full bg-secondary overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-lime", style: {
          width: "60%"
        } }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "mt-5 w-full border-primary text-primary font-bold uppercase tracking-wide text-[11px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/accounts", children: "View Goals" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-3", children: "Share Capital Tier" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "Current Tier" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-bold text-foreground", children: KES(856e3) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-extrabold text-foreground mt-2", children: "Tier B" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-muted-foreground mt-1", children: [
          "Next Tier: Tier C (",
          KES(1e6),
          ")"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "mt-5 w-full border-primary text-primary font-bold uppercase tracking-wide text-[11px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/investments", children: "View Details" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-3", children: "Dividend Status" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "2024 Dividend" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-extrabold text-foreground mt-1", children: KES(25680) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-muted-foreground mt-1", children: "Paid on 15 April 2025" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "mt-5 w-full border-primary text-primary font-bold uppercase tracking-wide text-[11px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/investments", children: "View History" }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-foreground mb-3", children: "Quick Actions" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(QA, { Icon: User, label: "Quick Transfer", to: "/portal/transfers" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(QA, { Icon: HandCoins, label: "Pay Loan", to: "/portal/loans" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(QA, { Icon: FileText, label: "My Statements", to: "/portal/accounts" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(QA, { Icon: Smartphone, label: "Mobile Banking", to: "/portal/accounts" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden", children: MOCK_LOAN_SUMMARY.length })
  ] });
}
function StatCard({
  Icon,
  label,
  value,
  hint,
  color,
  hintColor
}) {
  const cls = color === "primary" ? "bg-primary-soft text-primary" : color === "gold" ? "bg-gold/15 text-gold-foreground" : "bg-lime/20 text-primary-deep";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-5 shadow-card", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid h-11 w-11 place-items-center rounded-full ${cls}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5", strokeWidth: 2.2 }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground", children: label }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 font-display text-xl font-extrabold text-gold", children: value })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-3 text-[11px] font-semibold ${hintColor}`, children: hint })
  ] });
}
function QA({
  Icon,
  label,
  to
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to, className: "rounded-xl border border-border p-3 text-center hover:bg-secondary/50 transition", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto mb-1.5 grid h-9 w-9 place-items-center rounded-full bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-semibold text-foreground", children: label })
  ] });
}
function Sparkline() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 40", className: "w-24 h-10", preserveAspectRatio: "none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "sparkFill", x1: "0", x2: "0", y1: "0", y2: "1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "oklch(0.65 0.18 145)", stopOpacity: "0.35" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "oklch(0.65 0.18 145)", stopOpacity: "0" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,32 C20,28 30,24 45,20 C60,16 70,12 100,4 L100,40 L0,40 Z", fill: "url(#sparkFill)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,32 C20,28 30,24 45,20 C60,16 70,12 100,4", fill: "none", stroke: "oklch(0.65 0.18 145)", strokeWidth: "2", strokeDasharray: "4 3", strokeLinecap: "round" })
  ] });
}
function MiniRising() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 60 24", className: "w-16 h-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M2,20 C12,18 20,12 30,10 C40,8 48,6 58,3", fill: "none", stroke: "oklch(0.65 0.18 145)", strokeWidth: "2", strokeLinecap: "round" }) });
}
export {
  Dashboard as component
};
