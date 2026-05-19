import { Q as reactExports, I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { S as ShieldCheck, P as Phone, b as PublicLayout } from "./PublicLayout-DuPv2Yua.js";
import { L as Link } from "./router-BzjeXSTk.js";
import { B as Button } from "./button-CfNrbVTa.js";
import { A as AnimatePresence, m as motion } from "./proxy-D0dequ3V.js";
import { c as createLucideIcon } from "./Logo-BQiZWFaB.js";
import { U as Users } from "./users-BNsoRwom.js";
import { H as HandCoins, U as User, C as ChatAssistant } from "./ChatAssistant-BDX1jNKg.js";
import { a as Building2, B as Banknote } from "./building-2-Bw4W8voL.js";
import { P as PiggyBank } from "./piggy-bank-DBwLaLiy.js";
import { S as Smartphone } from "./smartphone-kw7Ks_hq.js";
import { T as TrendingUp } from "./trending-up-C5En9192.js";
import { L as LOAN_PRODUCTS, S as Sparkles } from "./mock-data-C_YdYJ-2.js";
import { A as ArrowRight } from "./arrow-right-DDJlnQtJ.js";
import { H as House } from "./house-zTH-GeIT.js";
import { C as Clock } from "./clock-B9i-XBJP.js";
import { C as CircleCheck } from "./circle-check-CslMpa8q.js";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
import "./x-BEHNncdV.js";
const __iconNode$6 = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
];
const Bot = createLucideIcon("bot", __iconNode$6);
const __iconNode$5 = [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["rect", { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" }],
  ["path", { d: "M3 10h18", key: "8toen8" }]
];
const Calendar = createLucideIcon("calendar", __iconNode$5);
const __iconNode$4 = [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0"
    }
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }]
];
const GraduationCap = createLucideIcon("graduation-cap", __iconNode$4);
const __iconNode$3 = [
  [
    "path",
    {
      d: "M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",
      key: "1xhozi"
    }
  ]
];
const Headphones = createLucideIcon("headphones", __iconNode$3);
const __iconNode$2 = [
  ["rect", { width: "18", height: "11", x: "3", y: "11", rx: "2", ry: "2", key: "1w4ew1" }],
  ["path", { d: "M7 11V7a5 5 0 0 1 10 0v4", key: "fwvmzm" }]
];
const Lock = createLucideIcon("lock", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z",
      key: "10ikf1"
    }
  ]
];
const Play = createLucideIcon("play", __iconNode$1);
const __iconNode = [
  [
    "path",
    {
      d: "M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",
      key: "1xq2db"
    }
  ]
];
const Zap = createLucideIcon("zap", __iconNode);
const photo1 = "/assets/nssf-photo1-BqLiKQie.jpg";
const photo2 = "/assets/nssf-photo2-C2qV8qU7.jpg";
const nssfBuilding1 = "/assets/nssf-building-1-DCN60B16.png";
const nssfBuilding2 = "/assets/nssf-building-2-BZjJaARh.png";
const SLIDES = [photo1, photo2, nssfBuilding1, nssfBuilding2];
function Hero() {
  const [i, setI] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative isolate overflow-hidden pb-16", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 -z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "sync", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.div,
        {
          initial: { opacity: 0, scale: 1.08 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0 },
          transition: { duration: 1.4, ease: "easeOut" },
          className: "absolute inset-0 bg-cover bg-center",
          style: { backgroundImage: `url(${SLIDES[i]})` }
        },
        i
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[linear-gradient(90deg,oklch(0.20_0.05_184/0.96)_0%,oklch(0.30_0.06_184/0.80)_38%,oklch(0.36_0.06_184/0.40)_62%,transparent_100%)]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(245,184,60,0.10),transparent_55%)]" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-[1.25fr_1fr] gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-white", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.h1, { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.1 }, className: "mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-balance", children: [
          "Empowering Your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-gold via-yellow to-gold bg-clip-text text-transparent", children: "Financial Future" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.2 }, className: "mt-4 text-white/90 text-sm font-semibold tracking-wide", children: [
          "Secure ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "·" }),
          " Grow ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gold", children: "·" }),
          " Thrive"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.7, delay: 0.25 }, className: "mt-3 max-w-xl text-white/80 text-base sm:text-lg", children: "We are committed to providing innovative financial solutions that empower our members to achieve their dreams and secure their future now with AI-powered loan recommendations." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: { opacity: 0, y: 16 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.4 }, className: "mt-8 flex flex-wrap gap-3 items-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", className: "bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-glow uppercase tracking-wide", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/join", children: "Become a Member" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-white/50 text-white bg-transparent hover:bg-white/10 hover:text-white font-semibold uppercase tracking-wide", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/login", children: "Member Portal" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/ai-assistant", className: "group inline-flex items-center gap-3 text-white font-semibold", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center rounded-full border-2 border-white/70 group-hover:bg-white/10 transition", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Play, { className: "h-4 w-4 fill-white" }) }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: { opacity: 0, x: 30 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: 0.3 }, className: "relative lg:justify-self-end", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl bg-white/95 backdrop-blur p-5 shadow-elegant border border-white/40 max-w-[270px]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { Icon: Users, label: "Members", value: "8000+", color: "primary", trend: [8, 12, 10, 15, 13, 18, 22, 20, 26, 30] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { Icon: Lock, label: "Total Savings", value: "KES 12.8B+", color: "yellow", trend: [6, 9, 8, 12, 14, 11, 16, 19, 22, 28] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { Icon: HandCoins, label: "Loans Disbursed", value: "KES 8.6B+", color: "lime", trend: [4, 7, 6, 10, 12, 9, 14, 17, 21, 25] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StatCard, { Icon: Building2, label: "Branches", value: "24", color: "primary", trend: [10, 10, 12, 12, 14, 14, 16, 18, 20, 24] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-px left-0 right-0 leading-[0]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 1440 120", preserveAspectRatio: "none", className: "block w-full h-[80px] md:h-[120px]", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M0,120 L0,100 C75,100 75,90 150,90 C225,90 225,95 300,95 C375,95 375,70 450,70 C525,70 525,80 600,80 C675,80 675,50 750,50 C825,50 825,60 900,60 C975,60 975,30 1050,30 C1125,30 1125,40 1200,40 C1275,40 1275,10 1350,10 C1395,10 1395,20 1440,20 L1440,120 Z", fill: "var(--color-background)" }) }) })
  ] });
}
function StatCard({ Icon, label, value, color, trend }) {
  const bg = color === "primary" ? "bg-primary-soft text-primary" : color === "gold" ? "bg-gold/15 text-gold-foreground" : color === "yellow" ? "bg-[#f5b83c]/20 text-[#d99716]" : "bg-lime/20 text-primary-deep";
  const max = Math.max(...trend);
  const min = Math.min(...trend);
  const range = max - min || 1;
  const pts = trend.map((v, idx) => `${idx / (trend.length - 1) * 100},${30 - (v - min) / range * 24}`).join(" ");
  const valueColorClass = "text-[#286d65]";
  const safeId = label.replace(/[^a-zA-Z]/g, "");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl border border-border bg-card p-2.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `grid h-10 w-10 shrink-0 place-items-center rounded-xl ${bg}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-4 w-4", strokeWidth: 2.2 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] font-medium text-muted-foreground", children: label }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `font-display font-extrabold text-[15px] leading-tight ${valueColorClass}`, children: value })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 100 32", className: "w-14 h-8 shrink-0 overflow-visible", preserveAspectRatio: "none", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("marker", { id: `arrow-${safeId}`, viewBox: "0 0 10 10", refX: "7", refY: "5", markerWidth: "5", markerHeight: "5", orient: "auto-start-reverse", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M 0 1 L 10 5 L 0 9 z", fill: "#a1d862" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("polyline", { points: pts, fill: "none", stroke: "#a1d862", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", markerEnd: `url(#arrow-${safeId})` })
    ] })
  ] });
}
const SERVICES = [
  { Icon: PiggyBank, name: "Savings Accounts", desc: "Flexible savings options that help you achieve your goals faster." },
  { Icon: HandCoins, name: "Loans", desc: "Affordable loan products for every stage of your financial journey." },
  { Icon: Smartphone, name: "Mobile Banking", desc: "Bank on the go with our secure and convenient mobile platform." },
  { Icon: ShieldCheck, name: "Insurance Agency", desc: "Comprehensive insurance solutions for you and your loved ones." },
  { Icon: TrendingUp, name: "Investments & Shares", desc: "Grow your wealth with attractive dividends on your investments." },
  { Icon: Building2, name: "Agency Banking", desc: "Access Co-op, Equity & KCB banking services at our convenience." }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-7xl px-6 pt-10 pb-14", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-center mb-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "text-2xl sm:text-3xl font-display font-extrabold text-foreground", children: [
      "Our Financial ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#286d65]", children: "Solutions" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6", children: SERVICES.map(({ Icon, name, desc }, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { duration: 0.4, delay: i * 0.05 },
        className: "group cursor-pointer rounded-xl border border-border bg-white p-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all flex xl:flex-col items-start gap-3 xl:text-center xl:items-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "shrink-0 text-[#286d65] relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-9 w-9 relative z-10", strokeWidth: 1.5 }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#F5B83C] opacity-80 z-0" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold text-[13px] text-foreground mb-1", children: name }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] leading-snug text-muted-foreground", children: desc })
          ] })
        ]
      },
      name
    )) })
  ] });
}
const ICONS = {
  KARO: Phone,
  DEVELOPMENT: User,
  EMERGENCY: Building2,
  SCHOOL: GraduationCap,
  JUMBO: House
};
const AMOUNTS = {
  KARO: "850,000",
  DEVELOPMENT: "600,000",
  EMERGENCY: "150,000",
  SCHOOL: "120,000",
  JUMBO: "2,000,000"
};
function LoanProducts() {
  const featured = ["KARO", "DEVELOPMENT", "EMERGENCY", "SCHOOL", "JUMBO"];
  const loans = LOAN_PRODUCTS.filter((l) => featured.includes(l.code));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "bg-background py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-end justify-between gap-4 mb-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl sm:text-4xl font-display font-extrabold text-[#11322d]", children: "Our Loan Products" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-muted-foreground text-sm", children: "Affordable loans tailored to your needs" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "bg-[#F5B83C] text-[#11322d] hover:bg-[#F5B83C]/90 font-bold uppercase tracking-wide rounded-lg px-6 py-2 h-auto shadow-sm", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/loans", children: [
        "View All Loans ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "ml-2 h-4 w-4" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-5", children: loans.map((l, i) => {
      const Icon = ICONS[l.code] ?? Phone;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 20 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true },
          transition: { duration: 0.4, delay: i * 0.06 },
          className: "rounded-2xl border border-border bg-white p-5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all flex flex-col",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-extrabold text-foreground text-[13px] tracking-wider text-center mb-4 uppercase", children: l.name }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-5 flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#f0f9f0] text-[#286d65]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-6 w-6", strokeWidth: 1.5 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2 text-[11px] text-muted-foreground flex-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Banknote, { className: "h-3.5 w-3.5 text-[#a1d862] shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Up to KES ",
                    AMOUNTS[l.code]
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-[#a1d862] shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    "Up to ",
                    l.repaymentMonths,
                    " Months"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-1.5", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-3.5 w-3.5 text-[#286d65] shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
                    l.tatDays === 0 ? "Same" : l.tatDays,
                    " Day",
                    l.tatDays === 1 ? "" : "s",
                    " TAT"
                  ] })
                ] })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, variant: "outline", className: "w-full border-[#286d65]/30 text-[#286d65] hover:bg-[#286d65] hover:text-white font-bold uppercase tracking-wide text-[11px] rounded-lg", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/loans", children: "Learn More" }) })
          ]
        },
        l.code
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 relative overflow-hidden rounded-3xl bg-gradient-hero text-white shadow-elegant", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-32 -top-32 h-80 w-80 rounded-full bg-gold/20 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-24 -bottom-24 h-72 w-72 rounded-full bg-lime/15 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid lg:grid-cols-[auto_1fr_auto_1fr] gap-8 p-8 md:p-10 items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:flex relative h-40 w-40 shrink-0 items-end justify-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 rounded-full bg-gradient-to-br from-gold/30 to-transparent blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid h-32 w-32 place-items-center rounded-3xl bg-white/10 border border-white/20 backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-16 w-16 text-lime", strokeWidth: 1.6 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 right-2 grid h-7 w-7 place-items-center rounded-full bg-gold text-gold-foreground text-xs font-bold animate-float", children: "+" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl md:text-3xl font-extrabold text-gold", children: "AI Loan Qualification Assistant" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-white/85 text-sm max-w-md", children: "Upload your payslip or connect your payroll to find out which loans you qualify for in seconds." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2 text-sm", children: ["Instant eligibility check", "Personalized loan recommendations", "Know your repayment capacity", "Reduce approval time"].map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-lime shrink-0" }),
            t
          ] }, t)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { asChild: true, className: "mt-5 bg-gold text-gold-foreground hover:bg-gold/90 font-bold uppercase tracking-wider shadow-glow", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/portal/ai-assistant", children: "Check Eligibility" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ScoreRing, { value: 85 }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold uppercase tracking-widest text-white/70 mb-3", children: "Top Loan Matches" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: [
            { n: 1, name: "KARO Loan", amt: "850,000" },
            { n: 2, name: "Development Loan", amt: "600,000" },
            { n: 3, name: "Jumbo Loan", amt: "2,000,000" }
          ].map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 rounded-xl bg-white/10 backdrop-blur border border-white/20 px-3 py-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-7 w-7 place-items-center rounded-full bg-gold/20 text-gold text-xs font-bold", children: m.n }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm", children: m.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-[11px] text-white/70", children: [
                "Up to KES ",
                m.amt
              ] })
            ] })
          ] }, m.n)) })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/portal/ai-assistant", className: "absolute bottom-5 right-5 inline-flex items-center gap-2 rounded-full bg-primary-deep/80 hover:bg-primary-deep border border-white/20 backdrop-blur px-4 py-2 text-xs font-semibold text-white shadow-glow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5 text-gold" }),
        " Chat with AI Assistant"
      ] })
    ] })
  ] }) });
}
function ScoreRing({ value }) {
  const r = 46;
  const c = 2 * Math.PI * r;
  const dash = value / 100 * c;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 120 120", className: "h-44 w-44 -rotate-90", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "60", r, fill: "none", stroke: "rgba(255,255,255,0.12)", strokeWidth: "10" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "60", cy: "60", r, fill: "none", stroke: "oklch(0.82 0.16 130)", strokeWidth: "10", strokeLinecap: "round", strokeDasharray: `${dash} ${c}` })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 grid place-items-center text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-display text-3xl font-extrabold text-white", children: [
        value,
        "%"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] uppercase tracking-widest text-white/70", children: "Eligibility Score" })
    ] }) })
  ] });
}
const ITEMS = [
  { Icon: ShieldCheck, title: "SASRA Regulated", desc: "Your deposits are safe and protected." },
  { Icon: Zap, title: "Fast Loan Processing", desc: "Quick approvals within 24–48 hours." },
  { Icon: Lock, title: "Secure & Reliable", desc: "Bank-level security for your peace of mind." },
  { Icon: Headphones, title: "24/7 Support", desc: "We are always here to help you." }
];
function TrustBar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "mx-auto max-w-7xl px-6 py-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: ITEMS.map(({ Icon, title, desc }) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3 rounded-2xl border border-border bg-card p-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold text-sm text-foreground", children: title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs text-muted-foreground", children: desc })
    ] })
  ] }, title)) }) });
}
function Home() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(PublicLayout, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LoanProducts, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(TrustBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ChatAssistant, {})
  ] });
}
export {
  Home as component
};
