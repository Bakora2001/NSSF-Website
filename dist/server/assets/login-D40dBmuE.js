import { Q as reactExports, I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { u as useNavigate, L as Link } from "./router-BzjeXSTk.js";
import { c as createLucideIcon, L as Logo } from "./Logo-BQiZWFaB.js";
import { B as Button } from "./button-CfNrbVTa.js";
import { E as Eye } from "./eye-CiwP9_kp.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
const __iconNode$1 = [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f"
    }
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a"
    }
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }]
];
const EyeOff = createLucideIcon("eye-off", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y"
    }
  ]
];
const Shield = createLucideIcon("shield", __iconNode);
const FIELDS = ["Member Number", "National ID Number", "Phone Number", "Username (Staff Only)"];
function LoginPage() {
  const nav = useNavigate();
  const [field, setField] = reactExports.useState("Member Number");
  const [showPw, setShowPw] = reactExports.useState(false);
  const [a, b] = reactExports.useMemo(() => [Math.floor(Math.random() * 9) + 1, Math.floor(Math.random() * 9) + 1], []);
  const [captcha, setCaptcha] = reactExports.useState("");
  const [verified, setVerified] = reactExports.useState(false);
  const submit = (e) => {
    e.preventDefault();
    if (!verified) return;
    nav({
      to: "/portal"
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen grid lg:grid-cols-2 bg-secondary/30", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:block relative isolate bg-gradient-hero text-white p-12 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 -z-10 bg-[radial-gradient(circle_at_30%_70%,rgba(245,184,60,0.25),transparent_60%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, { variant: "light" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-24 max-w-md", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl font-extrabold leading-tight", children: "Welcome back, member." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-white/80", children: "Access your savings, loans, dividends and the AI Loan Assistant — securely connected to Microsoft Dynamics 365." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid grid-cols-2 gap-4", children: [{
          n: "KES 12.8B+",
          l: "Savings"
        }, {
          n: "125,894+",
          l: "Members"
        }, {
          n: "14.2%",
          l: "Dividend"
        }, {
          n: "24/7",
          l: "Support"
        }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-white/10 backdrop-blur p-4 border border-white/20", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl font-extrabold text-gold", children: s.n }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-white/70 mt-1", children: s.l })
        ] }, s.l)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid place-items-center p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full max-w-md", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mb-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Logo, {}) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl bg-card shadow-elegant p-8 border border-border", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl font-extrabold", children: "Member Portal Sign In" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground mt-1", children: "Choose how you'd like to identify yourself." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: submit, className: "mt-6 space-y-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground", children: "Identify with" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("select", { value: field, onChange: (e) => setField(e.target.value), className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm", children: FIELDS.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsx("option", { children: f }, f)) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground", children: field }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("input", { required: true, className: "mt-1 w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring", placeholder: field })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-semibold text-muted-foreground", children: "Password" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: showPw ? "text" : "password", required: true, className: "w-full rounded-md border border-input bg-background px-3 py-2.5 pr-10 text-sm outline-none focus:ring-2 focus:ring-ring" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: () => setShowPw(!showPw), className: "absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground", children: showPw ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" }) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-secondary/40 p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 text-xs font-semibold text-primary mb-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-4 w-4" }),
              " Human verification"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display text-lg font-extrabold text-foreground", children: [
                a,
                " + ",
                b,
                " = ?"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: captcha, onChange: (e) => {
                setCaptcha(e.target.value);
                setVerified(parseInt(e.target.value) === a + b);
              }, className: "w-20 rounded-md border border-input bg-background px-2 py-1.5 text-sm" }),
              verified && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary", children: "✓ Verified" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", disabled: !verified, className: "w-full bg-primary text-primary-foreground hover:bg-primary-deep font-bold h-11", children: "Sign in to Portal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center text-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join", className: "text-primary font-semibold hover:underline", children: "New member? Sign up here" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 text-center text-xs text-muted-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-primary", children: "← Back to homepage" }) })
    ] }) })
  ] });
}
export {
  LoginPage as component
};
