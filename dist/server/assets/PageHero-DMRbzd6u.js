import { I as jsxRuntimeExports } from "./server-H48dsyju.js";
function PageHero({ eyebrow, title, subtitle }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden bg-gradient-hero text-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(245,184,60,0.2),transparent_60%)]" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 py-20 md:py-28 text-center", children: [
      eyebrow && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3", children: eyebrow }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-4xl sm:text-5xl font-display font-extrabold text-balance", children: title }),
      subtitle && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl mx-auto text-white/80", children: subtitle })
    ] })
  ] });
}
export {
  PageHero as P
};
