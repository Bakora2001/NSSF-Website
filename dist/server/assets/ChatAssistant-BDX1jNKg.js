import { c as createLucideIcon } from "./Logo-BQiZWFaB.js";
import { Q as reactExports, I as jsxRuntimeExports } from "./server-H48dsyju.js";
import { L as LOAN_PRODUCTS, a as MOCK_MEMBER, S as Sparkles, b as MOCK_PAYSLIP } from "./mock-data-C_YdYJ-2.js";
import { A as AnimatePresence, m as motion } from "./proxy-D0dequ3V.js";
import { X } from "./x-BEHNncdV.js";
const __iconNode$3 = [
  ["path", { d: "M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17", key: "geh8rc" }],
  [
    "path",
    {
      d: "m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",
      key: "1fto5m"
    }
  ],
  ["path", { d: "m2 16 6 6", key: "1pfhp9" }],
  ["circle", { cx: "16", cy: "9", r: "2.9", key: "1n0dlu" }],
  ["circle", { cx: "6", cy: "5", r: "3", key: "151irh" }]
];
const HandCoins = createLucideIcon("hand-coins", __iconNode$3);
const __iconNode$2 = [
  [
    "path",
    {
      d: "M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719",
      key: "1sd12s"
    }
  ]
];
const MessageCircle = createLucideIcon("message-circle", __iconNode$2);
const __iconNode$1 = [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3"
    }
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }]
];
const Send = createLucideIcon("send", __iconNode$1);
const __iconNode = [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }]
];
const User = createLucideIcon("user", __iconNode);
const KES = (n) => Math.round(n / 100) * 100;
function evaluateLoans(payslip, member) {
  const disposable = payslip.netSalary - payslip.existingLoanDeductions;
  const oneThird = payslip.grossSalary / 3;
  const safeMonthly = Math.max(0, Math.min(disposable * 0.6, oneThird - payslip.existingLoanDeductions));
  const recs = LOAN_PRODUCTS.map((product) => {
    const months = product.repaymentMonths;
    const rate = product.rate / 100;
    const ceilingBySalary = payslip.netSalary * product.maxMultiplier;
    const ceilingByShares = member.shares * 3;
    let maxByAffordability = safeMonthly * months / (1 + rate * months);
    if (maxByAffordability < 0) maxByAffordability = 0;
    const maxAmount = KES(Math.max(0, Math.min(ceilingBySalary, ceilingByShares, maxByAffordability)));
    const monthlyRepayment = Math.round(maxAmount * (1 + rate * months) / Math.max(1, months));
    const reasons = [];
    if (member.verified) reasons.push("Verified member in good standing");
    if (member.totalSavings > 1e5) reasons.push(`Strong savings history (KES ${member.totalSavings.toLocaleString()})`);
    if (payslip.existingLoanDeductions < payslip.netSalary * 0.3) reasons.push("Healthy debt-to-income ratio");
    if (product.requiresGuarantors) reasons.push("Requires guarantors — your shares partially secure this");
    if (product.tatDays <= 1) reasons.push(`Fast approval: ${product.tatDays} day turnaround`);
    const ratio = safeMonthly > 0 ? monthlyRepayment / safeMonthly : 1;
    const ratioScore = Math.max(0, 100 - ratio * 100);
    const tenureScore = Math.min(100, 60 + product.repaymentMonths / 108 * 40);
    const eligibilityScore = Math.round(Math.min(100, ratioScore * 0.6 + tenureScore * 0.3 + (member.verified ? 10 : 0)));
    const qualifies = maxAmount >= 1e4 && eligibilityScore >= 55;
    return { product, maxAmount, monthlyRepayment, eligibilityScore, qualifies, reasons };
  });
  const sorted = recs.sort((a, b) => b.eligibilityScore - a.eligibilityScore);
  if (sorted[0]) sorted[0].badge = "Recommended";
  const fastest = [...sorted].filter((r) => r.qualifies).sort((a, b) => a.product.tatDays - b.product.tatDays)[0];
  if (fastest && fastest !== sorted[0]) fastest.badge = "Fastest";
  const lowest = [...sorted].filter((r) => r.qualifies).sort((a, b) => a.monthlyRepayment - b.monthlyRepayment)[0];
  if (lowest && !lowest.badge) lowest.badge = "Lowest Stress";
  const highest = [...sorted].filter((r) => r.qualifies).sort((a, b) => b.maxAmount - a.maxAmount)[0];
  if (highest && !highest.badge) highest.badge = "Highest Ceiling";
  return sorted;
}
function chatAnswer(question, payslip, member) {
  const recs = evaluateLoans(payslip, member).filter((r) => r.qualifies);
  const q = question.toLowerCase();
  if (q.includes("which loan") || q.includes("qualify")) {
    const top = recs[0];
    if (!top) return "Based on your current profile you don't strongly qualify for our standard products. Increase your monthly contributions or clear existing deductions to unlock more options.";
    return `You qualify for ${top.product.name} up to KES ${top.maxAmount.toLocaleString()} over ${top.product.repaymentMonths} months. Estimated monthly repayment: KES ${top.monthlyRepayment.toLocaleString()}. Reason: ${top.reasons[0]}.`;
  }
  if (q.includes("how much") || q.includes("borrow")) {
    const ceiling = Math.max(...recs.map((r) => r.maxAmount), 0);
    return `Your maximum borrowing capacity across all products is approximately KES ${ceiling.toLocaleString()}, based on your net salary of KES ${payslip.netSalary.toLocaleString()} and current deductions.`;
  }
  if (q.includes("rejected") || q.includes("why")) {
    return "Most rejections come from high existing loan deductions, insufficient shares, or missing guarantors. Your current debt-to-income looks healthy — focus on guarantor sign-off if applying for BOSA loans.";
  }
  if (q.includes("document")) {
    return "Standard documents: latest payslip, copy of National ID (both sides), passport photo, and signature specimen. For school fees loans add fee structure. Guaranteed loans need guarantor consent forms.";
  }
  return 'I can help with loan eligibility, borrowing limits, rejection reasons and required documents. Try: "Which loan do I qualify for?"';
}
const SUGGESTIONS = [
  "Which loan do I qualify for?",
  "How much can I borrow?",
  "Why was my loan rejected?",
  "What documents are missing?"
];
function ChatAssistant() {
  const [open, setOpen] = reactExports.useState(false);
  const [input, setInput] = reactExports.useState("");
  const [msgs, setMsgs] = reactExports.useState([
    { role: "ai", text: `Hi ${MOCK_MEMBER.name.split(" ")[0]}! I'm your NSSF SACCO AI Assistant. Ask me anything about loans, eligibility or documents.` }
  ]);
  const send = (text) => {
    if (!text.trim()) return;
    const reply = chatAnswer(text, MOCK_PAYSLIP, MOCK_MEMBER);
    setMsgs((m) => [...m, { role: "user", text }, { role: "ai", text: reply }]);
    setInput("");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "button",
      {
        onClick: () => setOpen(true),
        className: "fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-hero text-white shadow-elegant hover:scale-105 transition-transform",
        "aria-label": "Open AI Assistant",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-6 w-6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gold animate-pulse" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1 },
        exit: { opacity: 0, y: 30, scale: 0.95 },
        className: "fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-card shadow-elegant overflow-hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-gradient-hero p-4 text-white flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "grid h-10 w-10 place-items-center rounded-full bg-white/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-5 w-5 text-gold" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display font-bold", children: "AI Loan Assistant" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[11px] text-white/70", children: "Powered by NSSF SACCO AI" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setOpen(false), className: "grid h-8 w-8 place-items-center rounded-md hover:bg-white/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-80 overflow-y-auto p-4 space-y-3 bg-secondary/30", children: msgs.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flex ${m.role === "user" ? "justify-end" : "justify-start"}`, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `max-w-[85%] rounded-2xl px-3.5 py-2 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border rounded-bl-sm"}`, children: m.text }) }, i)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-t border-border p-3 space-y-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1.5 flex-wrap", children: SUGGESTIONS.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => send(s), className: "text-[11px] rounded-full border border-border bg-secondary px-2.5 py-1 hover:bg-primary-soft hover:border-primary hover:text-primary transition-colors", children: s }, s)) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("form", { onSubmit: (e) => {
              e.preventDefault();
              send(input);
            }, className: "flex gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("input", { value: input, onChange: (e) => setInput(e.target.value), placeholder: "Ask about loans…", className: "flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "submit", className: "grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground hover:bg-primary-deep", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4" }) })
            ] })
          ] })
        ]
      }
    ) })
  ] });
}
export {
  ChatAssistant as C,
  HandCoins as H,
  User as U,
  evaluateLoans as e
};
