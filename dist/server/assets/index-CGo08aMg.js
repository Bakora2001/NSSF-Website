import { I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { L as Link } from "./router-BzjeXSTk.js";
import { b as PublicLayout, S as ShieldCheck } from "./PublicLayout-DuPv2Yua.js";
import { P as PageHero } from "./PageHero-DMRbzd6u.js";
import { B as Button } from "./button-CfNrbVTa.js";
import { C as CircleCheck } from "./circle-check-CslMpa8q.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Logo-BQiZWFaB.js";
import "./x-BEHNncdV.js";
function JoinPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Membership", title: "Become a Member", subtitle: "6 simple steps. Online from anywhere. KES 1,000 one-time fee." }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl px-6 py-16 grid lg:grid-cols-[1.2fr_1fr] gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-extrabold", children: "What you'll need" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-5 space-y-3 text-sm", children: ["Valid National ID or Passport", "Passport-sized photo and a signature specimen", "Next of kin details (you can add multiple beneficiaries)", "Employer or business details", "MPESA for the KES 1,000 registration fee"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary mt-0.5" }),
          t
        ] }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join/register", children: "Start Registration" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-primary text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/login", children: "I'm already a member" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-gradient-hero text-white p-8 shadow-elegant", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-8 w-8 text-gold" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-xl font-extrabold", children: "Your data is protected" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-white/85", children: "All documents are encrypted in transit and at rest. NSSF SACCO is SASRA regulated and ISO-aligned for member data protection." })
      ] })
    ] })
  ] });
}
export {
  JoinPage as component
};
