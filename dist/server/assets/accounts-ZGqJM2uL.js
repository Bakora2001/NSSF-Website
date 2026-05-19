import { I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { P as PortalLayout, W as Wallet } from "./PortalLayout-B1fagZOo.js";
import { C as Construction } from "./construction-DXRJx90d.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./router-BzjeXSTk.js";
import "./Logo-BQiZWFaB.js";
import "./ChatAssistant-BDX1jNKg.js";
import "./mock-data-C_YdYJ-2.js";
import "./proxy-D0dequ3V.js";
import "./x-BEHNncdV.js";
import "./arrow-left-right-D40nYtNf.js";
import "./trending-up-C5En9192.js";
function Page() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PortalLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "font-display text-3xl font-extrabold flex items-center gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Wallet, { className: "h-7 w-7 text-primary" }),
        " Accounts"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "FOSA accounts, transactions and statements." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-border bg-card p-10 shadow-card text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Construction, { className: "h-10 w-10 mx-auto text-primary mb-3" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-lg", children: "Connected to Microsoft Dynamics 365" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-2 max-w-md mx-auto", children: "This module is wired to your D365 environment. Detailed records, filters and exports appear here for production members." })
    ] })
  ] });
}
export {
  Page as component
};
