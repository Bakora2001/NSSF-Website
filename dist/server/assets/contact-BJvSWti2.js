import { I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { b as PublicLayout, a as MapPin, P as Phone, M as Mail } from "./PublicLayout-DuPv2Yua.js";
import { P as PageHero } from "./PageHero-DMRbzd6u.js";
import { B as Button } from "./button-CfNrbVTa.js";
import { C as Clock } from "./clock-B9i-XBJP.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./Logo-BQiZWFaB.js";
import "./router-BzjeXSTk.js";
import "./x-BEHNncdV.js";
function ContactPage() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageHero, { eyebrow: "Contact Us", title: "We're here to help" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 py-16 grid gap-10 lg:grid-cols-[1fr_1.2fr]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: [{
        Icon: MapPin,
        title: "Visit Us",
        text: "Social Security House Block 'C', Ground Floor, Bishop Road, Nairobi"
      }, {
        Icon: Phone,
        title: "Call Us",
        text: "+254 111 018 100"
      }, {
        Icon: Mail,
        title: "Email Us",
        text: "info@nssfsacco.co.ke"
      }, {
        Icon: Clock,
        title: "Hours",
        text: "Mon — Fri · 8:00 AM — 5:00 PM"
      }].map(({
        Icon,
        title,
        text
      }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm text-muted-foreground mt-1", children: text })
        ] })
      ] }, title)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { className: "rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card space-y-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl font-extrabold", children: "Send us a message" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Full Name" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Email", type: "email" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { label: "Subject" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground", children: "Message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", { rows: 5, className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: "bg-gold text-gold-foreground hover:bg-gold/90 font-bold w-full", children: "Send Message" })
      ] })
    ] })
  ] });
}
function Input({
  label,
  type = "text"
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type, className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" })
  ] });
}
export {
  ContactPage as component
};
