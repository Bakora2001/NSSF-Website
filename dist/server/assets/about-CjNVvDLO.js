import { I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { b as PublicLayout, S as ShieldCheck } from "./PublicLayout-DuPv2Yua.js";
import { P as PageHero } from "./PageHero-DMRbzd6u.js";
import { c as createLucideIcon } from "./Logo-BQiZWFaB.js";
import { E as Eye } from "./eye-CiwP9_kp.js";
import { U as Users } from "./users-BNsoRwom.js";
import { T as TrendingUp } from "./trending-up-C5En9192.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BzjeXSTk.js";
import "./button-CfNrbVTa.js";
import "./x-BEHNncdV.js";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",
      key: "mvr1a0"
    }
  ]
];
const Heart = createLucideIcon("heart", __iconNode$1);
const __iconNode = [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["circle", { cx: "12", cy: "12", r: "6", key: "1vlfrh" }],
  ["circle", { cx: "12", cy: "12", r: "2", key: "1c9p78" }]
];
const Target = createLucideIcon("target", __iconNode);
function AboutPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "About Us", title: "Built by members, for members", subtitle: "Since 1977, NSSF SACCO Limited has empowered Kenyans to save, borrow and invest with confidence — backed by SASRA regulation and the strength of community." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-16 grid md:grid-cols-3 gap-6", children: [{
      Icon: Target,
      title: "Our Mission",
      text: "To provide affordable, innovative and member-focused financial services that uplift Kenyan livelihoods."
    }, {
      Icon: Eye,
      title: "Our Vision",
      text: "To be the most trusted and technologically advanced SACCO in East Africa."
    }, {
      Icon: Heart,
      title: "Our Values",
      text: "Integrity, transparency, member focus, innovation and stewardship of member resources."
    }].map(({
      Icon,
      title,
      text
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-lg", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: text })
    ] }, title)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-secondary/40 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-7xl px-6 grid sm:grid-cols-2 lg:grid-cols-4 gap-6", children: [{
      Icon: Users,
      num: "125,894+",
      label: "Active members"
    }, {
      Icon: TrendingUp,
      num: "KES 12.8B+",
      label: "Total savings under management"
    }, {
      Icon: ShieldCheck,
      num: "47",
      label: "Years serving members"
    }, {
      Icon: TrendingUp,
      num: "14.2%",
      label: "Average dividend payout"
    }].map(({
      Icon,
      num,
      label
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card p-6 text-center shadow-card", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6 mx-auto text-primary" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-display text-3xl font-extrabold text-foreground", children: num }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground mt-1", children: label })
    ] }, label)) }) })
  ] });
}
export {
  AboutPage as component
};
