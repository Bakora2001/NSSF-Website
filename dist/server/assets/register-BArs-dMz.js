import { Q as reactExports, I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { L as Link } from "./router-BzjeXSTk.js";
import { b as PublicLayout } from "./PublicLayout-DuPv2Yua.js";
import { B as Button } from "./button-CfNrbVTa.js";
import { A as AnimatePresence, m as motion } from "./proxy-D0dequ3V.js";
import { c as createLucideIcon } from "./Logo-BQiZWFaB.js";
import { C as CircleCheck } from "./circle-check-CslMpa8q.js";
import { U as Upload } from "./upload-sCk4ynsG.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./x-BEHNncdV.js";
const __iconNode$3 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$3);
const __iconNode$2 = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode$2);
const __iconNode$1 = [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }]
];
const Plus = createLucideIcon("plus", __iconNode$1);
const __iconNode = [
  ["path", { d: "M10 11v6", key: "nco0om" }],
  ["path", { d: "M14 11v6", key: "outv1u" }],
  ["path", { d: "M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6", key: "miytrc" }],
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2", key: "e791ji" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
const STEPS = ["Personal Details", "Identification", "Next of Kin", "Employment", "Documents", "Final Steps"];
function Register() {
  const [step, setStep] = reactExports.useState(0);
  const [done, setDone] = reactExports.useState(false);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(PublicLayout, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/30 min-h-screen py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-4xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join", className: "text-sm text-primary hover:underline", children: "← Back" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-3 font-display text-3xl font-extrabold", children: "Join NSSF SACCO" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Complete the 6 steps to access your Member Portal." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-2xl bg-card border border-border p-2 shadow-card", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-6 gap-1", children: STEPS.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `h-1.5 rounded-full ${i <= step ? "bg-gold" : "bg-muted"}` }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `mt-2 text-[10px] font-semibold uppercase tracking-wider ${i === step ? "text-primary" : "text-muted-foreground"}`, children: `Step ${i + 1}` })
    ] }, s)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 rounded-2xl bg-card border border-border p-6 md:p-8 shadow-card", children: done ? /* @__PURE__ */ jsxRuntimeExports.jsx(DonePane, {}) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl font-extrabold mb-1", children: STEPS[step] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground mb-6", children: [
        "Step ",
        step + 1,
        " of ",
        STEPS.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        x: 20
      }, animate: {
        opacity: 1,
        x: 0
      }, exit: {
        opacity: 0,
        x: -20
      }, transition: {
        duration: 0.25
      }, children: [
        step === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step1, {}),
        step === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step2, {}),
        step === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step3, {}),
        step === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step4, {}),
        step === 4 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step5, {}),
        step === 5 && /* @__PURE__ */ jsxRuntimeExports.jsx(Step6, {})
      ] }, step) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", disabled: step === 0, onClick: () => setStep((s) => Math.max(0, s - 1)), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4 mr-1" }),
          " Back"
        ] }),
        step < STEPS.length - 1 ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { onClick: () => setStep((s) => s + 1), className: "bg-primary text-primary-foreground hover:bg-primary-deep", children: [
          "Continue ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4 ml-1" })
        ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: () => setDone(true), className: "bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-glow", children: "Complete Registration" })
      ] })
    ] }) })
  ] }) }) });
}
function Field({
  label,
  type = "text",
  placeholder,
  as = "input",
  options
}) {
  const base = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground", children: label }),
    as === "select" ? /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: base + " mt-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: "Select…" }),
      options?.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: o }, o))
    ] }) : as === "textarea" ? /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 3, className: base + " mt-1", placeholder }) : /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, className: base + " mt-1", placeholder })
  ] });
}
function Step1() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Title", as: "select", options: ["Mr.", "Mrs.", "Ms.", "Dr.", "Prof."] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Sex", as: "select", options: ["Male", "Female"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "First Name" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Middle Name" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Last Name" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Country", as: "select", options: ["Kenya", "Uganda", "Tanzania", "Rwanda"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "State / County", as: "select", options: ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "City / Town" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Address 1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Address 2" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "P.O. Box" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone Number / Cell", type: "tel" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email Address", type: "email" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Confirm Email Address", type: "email" })
  ] });
}
function Step2() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Identification Type", as: "select", options: ["National ID", "Passport"] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Date of Birth", type: "date" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "National ID No." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Passport Number" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Expiry Date", type: "date" })
  ] });
}
function Step3() {
  const [rows, setRows] = reactExports.useState([0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: rows.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border p-4 grid sm:grid-cols-2 gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Full Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Relation", as: "select", options: ["Spouse", "Child", "Parent", "Sibling", "Other"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Address" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Contact Number", type: "tel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Date of Birth", type: "date" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Sex", as: "select", options: ["Male", "Female"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Benefit (%)", type: "number" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "button", variant: "outline", className: "text-destructive border-destructive/40", onClick: () => setRows((rs) => rs.length > 1 ? rs.filter((x) => x !== r) : rs), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4" }) }) })
    ] }, r)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { type: "button", variant: "outline", onClick: () => setRows((rs) => [...rs, Date.now()]), className: "mt-4 border-primary text-primary", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1" }),
      " Add Next of Kin"
    ] })
  ] });
}
function Step4() {
  const [tab, setTab] = reactExports.useState("Employed");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex rounded-lg border border-border p-1 bg-secondary mb-5", children: ["Employed", "Self Employed"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setTab(t), className: `px-4 py-1.5 rounded-md text-sm font-semibold ${tab === t ? "bg-card shadow-card text-primary" : "text-muted-foreground"}`, children: t }, t)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: tab === "Employed" ? "Employer's Name" : "Business Name" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: tab === "Employed" ? "Employer's Phone Number" : "Business Phone Number", type: "tel" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: tab === "Employed" ? "Profession" : "Nature of Business" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Physical Address" })
    ] })
  ] });
}
function Step5() {
  const FILES = ["Upload Signature", "Upload Passport Photo", "Upload Page 1 of Identification", "Upload Page 2 of Identification"];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-3", children: FILES.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { className: "flex items-center justify-between gap-3 rounded-xl border-2 border-dashed border-border p-4 hover:border-primary cursor-pointer bg-secondary/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-semibold text-sm", children: f }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: "PDF, PNG or JPG · Max 5MB" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-primary font-semibold", children: "Choose file" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "file", className: "hidden" })
  ] }, f)) });
}
function Step6() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Security Question", as: "select", options: ["What is your favourite fruit?", "Mother's maiden name?", "Name of first school?", "Childhood pet name?"] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Answer" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-muted-foreground mb-2", children: "Favourite Fruit (additional check):" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2 flex-wrap", children: ["Apple", "Grape", "Mango", "Banana", "Orange"].map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", className: "rounded-full border border-border px-3 py-1.5 text-sm hover:border-primary hover:bg-primary-soft hover:text-primary", children: f }, f)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/40 p-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold", children: "Registration Fee — KES 1,000" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-1", children: "Choose your preferred payment method:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-gold text-gold-foreground hover:bg-gold/90 font-bold", children: "Pay via MPESA" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", className: "border-primary text-primary", children: "I'll pay later" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Referrer Membership Number (optional)", placeholder: "NSSF/XXXXXX" })
  ] });
}
function DonePane() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center py-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-auto grid h-20 w-20 place-items-center rounded-full bg-lime/20 text-primary-deep mb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-10 w-10" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-extrabold", children: "Registration submitted!" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 max-w-md mx-auto", children: "We've sent your details to the SACCO secretariat for verification. You'll receive your Membership Number via SMS within 24 hours." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex gap-3 justify-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-primary text-primary-foreground hover:bg-primary-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/login", children: "Go to Member Portal" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "border-primary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", children: "Back to Home" }) })
    ] })
  ] });
}
export {
  Register as component
};
