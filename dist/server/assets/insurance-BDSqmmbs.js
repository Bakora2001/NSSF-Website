import { I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { b as PublicLayout, S as ShieldCheck } from "./PublicLayout-DuPv2Yua.js";
import { P as PageHero } from "./PageHero-DMRbzd6u.js";
import { c as createLucideIcon } from "./Logo-BQiZWFaB.js";
import { H as House } from "./house-zTH-GeIT.js";
import { P as Plane } from "./plane-DtdcmtJ8.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BzjeXSTk.js";
import "./button-CfNrbVTa.js";
import "./x-BEHNncdV.js";
const __iconNode$2 = [
  ["path", { d: "M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16", key: "jecpp" }],
  ["rect", { width: "20", height: "14", x: "2", y: "6", rx: "2", key: "i6l2r4" }]
];
const Briefcase = createLucideIcon("briefcase", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",
      key: "5owen"
    }
  ],
  ["circle", { cx: "7", cy: "17", r: "2", key: "u2ysq9" }],
  ["path", { d: "M9 17h6", key: "r8uit2" }],
  ["circle", { cx: "17", cy: "17", r: "2", key: "axvx0g" }]
];
const Car = createLucideIcon("car", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ],
  ["path", { d: "M3.22 13H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "auskq0" }]
];
const HeartPulse = createLucideIcon("heart-pulse", __iconNode);
const COVERS = [{
  Icon: HeartPulse,
  name: "Medical Cover",
  desc: "Inpatient, outpatient and chronic care for you and your family."
}, {
  Icon: Car,
  name: "Motor Insurance",
  desc: "Comprehensive and third-party covers at member rates."
}, {
  Icon: House,
  name: "Home Insurance",
  desc: "Protect your home, contents and personal effects."
}, {
  Icon: Briefcase,
  name: "Business Cover",
  desc: "Liability, asset and continuity covers for SMEs."
}, {
  Icon: Plane,
  name: "Travel Insurance",
  desc: "Coverage for SACCO holiday trips and personal travel."
}, {
  Icon: ShieldCheck,
  name: "Life & Funeral",
  desc: "Last-expense and life policies with flexible premiums."
}];
function InsurancePage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Nassefu Insurance Agency", title: "Cover what matters — at member rates", subtitle: "Through Nassefu Insurance Agency, we negotiate the best terms with leading underwriters on behalf of our members." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: COVERS.map(({
      Icon,
      name,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-gold/15 text-gold-foreground mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: desc })
    ] }, name)) }) })
  ] });
}
export {
  InsurancePage as component
};
