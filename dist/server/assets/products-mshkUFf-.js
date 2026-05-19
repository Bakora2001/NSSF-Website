import { I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { b as PublicLayout, S as ShieldCheck } from "./PublicLayout-DuPv2Yua.js";
import { P as PageHero } from "./PageHero-DMRbzd6u.js";
import { P as PiggyBank } from "./piggy-bank-DBwLaLiy.js";
import { B as Banknote, a as Building2 } from "./building-2-Bw4W8voL.js";
import { c as createLucideIcon } from "./Logo-BQiZWFaB.js";
import { S as Smartphone } from "./smartphone-kw7Ks_hq.js";
import { P as Plane } from "./plane-DtdcmtJ8.js";
import { A as ArrowLeftRight } from "./arrow-left-right-D40nYtNf.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BzjeXSTk.js";
import "./button-CfNrbVTa.js";
import "./x-BEHNncdV.js";
const __iconNode = [
  ["rect", { width: "20", height: "14", x: "2", y: "5", rx: "2", key: "ynyp8z" }],
  ["line", { x1: "2", x2: "22", y1: "10", y2: "10", key: "1b3vmo" }]
];
const CreditCard = createLucideIcon("credit-card", __iconNode);
const PRODUCTS = [{
  Icon: PiggyBank,
  name: "Savings Accounts",
  desc: "Flexible savings with competitive rates. Charges of KES 120 per OTC withdrawal, KES 36 via Co-op ATM."
}, {
  Icon: Banknote,
  name: "Jumbo Savings (FOSA)",
  desc: "Front Office Service Account with mobile banking access, salary processing and standing orders."
}, {
  Icon: CreditCard,
  name: "VISA SaccoLink Card",
  desc: "ATM + POS card accepted globally. KES 50 per Co-op ATM transaction; KES 200 elsewhere."
}, {
  Icon: Smartphone,
  name: "Mobile Banking",
  desc: "Pay loans, transfer shares, withdraw to MPESA — automatic with Jumbo account."
}, {
  Icon: Building2,
  name: "Agency Banking",
  desc: "Co-op, Equity and KCB agency services at our FOSA halls — deposit and withdraw with ID + ATM."
}, {
  Icon: Plane,
  name: "Johari Holiday Account",
  desc: "Save monthly for annual SACCO trips — local and international destinations."
}, {
  Icon: ShieldCheck,
  name: "Bankers Cheques",
  desc: "KES 120 per leaf, issued the same day at the FOSA office."
}, {
  Icon: ArrowLeftRight,
  name: "EFT & RTGS",
  desc: "Send funds to any commercial bank — EFT KES 400, RTGS KES 800 per transaction."
}];
function ProductsPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Products & Services", title: "Everything a modern SACCO member needs", subtitle: "From everyday savings to global card payments — all under one trusted roof." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-5 md:grid-cols-2 lg:grid-cols-3", children: PRODUCTS.map(({
      Icon,
      name,
      desc
    }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elegant hover:-translate-y-1 transition-all", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-12 w-12 place-items-center rounded-xl bg-primary-soft text-primary mb-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-base", children: name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: desc })
    ] }, name)) }) })
  ] });
}
export {
  ProductsPage as component
};
