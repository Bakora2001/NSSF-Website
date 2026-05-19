import { Q as reactExports, I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { P as PortalLayout } from "./PortalLayout-B1fagZOo.js";
import { B as Button } from "./button-CfNrbVTa.js";
import { e as evaluateLoans } from "./ChatAssistant-BDX1jNKg.js";
import { a as MOCK_MEMBER, b as MOCK_PAYSLIP, S as Sparkles } from "./mock-data-C_YdYJ-2.js";
import { C as CircleCheck } from "./circle-check-CslMpa8q.js";
import { U as Upload } from "./upload-sCk4ynsG.js";
import { c as createLucideIcon } from "./Logo-BQiZWFaB.js";
import { m as motion } from "./proxy-D0dequ3V.js";
import { F as FileText } from "./file-text-Ct5hwvBO.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BzjeXSTk.js";
import "./arrow-left-right-D40nYtNf.js";
import "./trending-up-C5En9192.js";
import "./x-BEHNncdV.js";
const __iconNode = [
  ["path", { d: "M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z", key: "p7xjir" }]
];
const Cloud = createLucideIcon("cloud", __iconNode);
const KES = (n) => "KES " + n.toLocaleString();
function AIAssistantPage() {
  const [stage, setStage] = reactExports.useState("upload");
  const start = () => {
    setStage("analyzing");
    setTimeout(() => setStage("results"), 2200);
  };
  const recs = evaluateLoans(MOCK_PAYSLIP, MOCK_MEMBER);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-extrabold flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-7 w-7 text-gold" }),
        " AI Loan Assistant"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Three steps to know exactly what you qualify for." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-4 mb-8", children: ["Upload / Fetch Data", "Analysis", "Recommendations"].map((s, i) => {
      const idx = i + 1;
      const current = stage === "upload" && idx === 1 || stage === "analyzing" && idx === 2 || stage === "results" && idx === 3;
      const done = stage === "analyzing" && idx === 1 || stage === "results" && idx <= 2;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid h-8 w-8 place-items-center rounded-full font-bold text-sm ${done ? "bg-lime text-primary-deep" : current ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"}`, children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4" }) : idx }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `text-sm font-semibold ${current || done ? "text-foreground" : "text-muted-foreground"}`, children: s }),
        i < 2 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-px w-8 bg-border" })
      ] }, s);
    }) }),
    stage === "upload" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold mb-1", children: "Upload Payslip" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mb-4", children: "Upload your latest payslip and our AI will analyze your income, deductions and eligibility." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border-2 border-dashed border-border p-10 text-center bg-secondary/30", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-10 w-10 mx-auto text-primary" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-semibold", children: "Drag & drop your payslip here" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "or" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: start, className: "mt-3 bg-primary text-primary-foreground hover:bg-primary-deep", children: "Choose File" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground mt-3", children: "PDF, PNG, JPG (Max 5MB)" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: start, variant: "outline", className: "w-full mt-4 border-primary text-primary", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Cloud, { className: "h-4 w-4 mr-2" }),
          " Fetch Data from Microsoft Dynamics 365"
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold mb-4", children: "How it works" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ol", { className: "space-y-4", children: [{
          t: "We securely read your payslip",
          d: "OCR extracts net salary, deductions and existing loan obligations."
        }, {
          t: "AI checks SACCO loan rules",
          d: "Eligibility, share multipliers, repayment capacity and 1/3 rule."
        }, {
          t: "You get ranked recommendations",
          d: "Best fit, fastest approval, lowest stress and highest ceiling — with reasons."
        }].map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0", children: i + 1 }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: step.t }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: step.d })
          ] })
        ] }, i)) })
      ] })
    ] }),
    stage === "analyzing" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-12 shadow-card text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { animate: {
        rotate: 360
      }, transition: {
        duration: 1.6,
        repeat: Infinity,
        ease: "linear"
      }, className: "mx-auto h-16 w-16 rounded-full border-4 border-primary-soft border-t-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-xl font-extrabold", children: "Analyzing your profile…" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2", children: "Verifying income, scanning existing loans, scoring eligibility." }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 max-w-md mx-auto space-y-2 text-left text-sm", children: ["Income verified", "Existing loans checked", "Repayment capacity assessed"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-lime" }),
        t
      ] }, t)) })
    ] }),
    stage === "results" && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-6 lg:grid-cols-3 mb-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-1 grid place-items-center text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreRing, { value: 85 }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm font-semibold", children: "Analysis Complete" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground", children: [
            "Net salary KES ",
            MOCK_PAYSLIP.netSalary.toLocaleString()
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card lg:col-span-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold", children: "Analysis Result" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(FileText, { className: "h-3 w-3" }),
              " Source: Dynamics 365 · ",
              MOCK_PAYSLIP.period
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3", children: ["Income Verified", "Existing Loans Checked", "Repayment Capacity Assessed", "Credit Score Evaluated", "Guarantor Requirement Checked", "Debt-to-Income within range"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary" }),
            t
          ] }, t)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-extrabold mb-4", children: "Recommended loans for you" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 md:grid-cols-2 lg:grid-cols-4", children: recs.slice(0, 4).map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `rounded-2xl border bg-card p-5 shadow-card relative ${r.badge === "Recommended" ? "border-primary shadow-elegant ring-1 ring-primary" : "border-border"}`, children: [
        r.badge && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2.5 right-4 rounded-full bg-gold text-gold-foreground px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest", children: r.badge }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-extrabold", children: r.product.name }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mt-0.5", children: [
          "Up to ",
          KES(r.maxAmount)
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 space-y-1.5 text-xs", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Repayment Period", v: `${r.product.repaymentMonths} Months` }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Est. Monthly Repayment", v: KES(r.monthlyRepayment) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Row, { k: "Eligibility Score", v: `${r.eligibilityScore}%` })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 rounded-lg bg-secondary/50 p-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground", children: "Why you qualify" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-foreground/80", children: r.reasons[0] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "w-full mt-4 bg-primary text-primary-foreground hover:bg-primary-deep font-bold", children: "Apply Now" })
      ] }, r.product.code)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 rounded-2xl bg-gradient-hero text-white p-5 flex flex-wrap items-center justify-between gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Need help? Chat with our AI Assistant — bottom right corner." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setStage("upload"), variant: "outline", className: "border-white/40 text-white bg-white/10 hover:bg-white/20 hover:text-white", children: "Re-run Analysis" })
      ] })
    ] })
  ] });
}
function Row({
  k,
  v
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: k }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-foreground", children: v })
  ] });
}
function ScoreRing({
  value
}) {
  const r = 50;
  const c = 2 * Math.PI * r;
  const dash = value / 100 * c;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 120 120", className: "h-36 w-36 -rotate-90", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "60", r, fill: "none", stroke: "currentColor", strokeWidth: "10", className: "text-primary-soft" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "60", r, fill: "none", stroke: "currentColor", strokeWidth: "10", strokeLinecap: "round", strokeDasharray: `${dash} ${c}`, className: "text-primary" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("text", { x: "60", y: "62", textAnchor: "middle", dominantBaseline: "central", className: "fill-foreground font-display font-extrabold", style: {
      fontSize: 22,
      transform: "rotate(90deg)",
      transformOrigin: "60px 60px"
    }, children: [
      value,
      "%"
    ] })
  ] });
}
export {
  AIAssistantPage as component
};
