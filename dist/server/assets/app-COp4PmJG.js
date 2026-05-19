import { I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { b as PublicLayout } from "./PublicLayout-DuPv2Yua.js";
import { P as PageHero } from "./PageHero-DMRbzd6u.js";
import { C as CircleCheck } from "./circle-check-CslMpa8q.js";
import { S as Smartphone } from "./smartphone-kw7Ks_hq.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Logo-BQiZWFaB.js";
import "./router-BzjeXSTk.js";
import "./button-CfNrbVTa.js";
import "./x-BEHNncdV.js";
function AppPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Mobile App", title: "Your SACCO in your pocket" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16 grid lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl font-extrabold", children: "Everything you need, on mobile" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-6 space-y-3 text-sm", children: ["Check balances and statements instantly", "Apply for loans with AI eligibility check", "Pay utilities, transfer funds, top up MPESA", "Biometric login and bank-level security", "Real-time notifications and approvals"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary mt-0.5" }),
          t
        ] }, t)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl bg-foreground text-background px-5 py-3 font-semibold", children: "App Store" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "rounded-xl bg-foreground text-background px-5 py-3 font-semibold", children: "Google Play" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-96 w-56 rounded-[3rem] bg-gradient-hero p-4 shadow-elegant", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full w-full rounded-[2.4rem] bg-card grid place-items-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-16 w-16 text-primary" }) }) }) })
    ] })
  ] });
}
export {
  AppPage as component
};
