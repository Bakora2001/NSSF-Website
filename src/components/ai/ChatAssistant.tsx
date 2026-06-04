import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { chatAnswer } from "@/lib/loan-engine";
import { MOCK_MEMBER, MOCK_PAYSLIP } from "@/lib/mock-data";

type Msg = { role: "user" | "ai"; text: string };

const SUGGESTIONS = [
  "Which loan do I qualify for?",
  "How much can I borrow?",
  "Why was my loan rejected?",
  "What documents are missing?",
];

export function ChatAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: "ai", text: `Hi ${MOCK_MEMBER.name.split(" ")[0]}! I'm your NSSF SACCO AI Assistant. Ask me anything about loans, eligibility or documents.` },
  ]);

  const send = (text: string) => {
    if (!text.trim()) return;
    const reply = chatAnswer(text, MOCK_PAYSLIP, MOCK_MEMBER);
    setMsgs((m) => [...m, { role: "user", text }, { role: "ai", text: reply }]);
    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 grid h-14 w-14 place-items-center rounded-full bg-gradient-hero text-white shadow-elegant hover:scale-105 transition-transform"
        aria-label="Open AI Assistant"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-gold animate-pulse" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-2rem)] rounded-2xl border border-border bg-card shadow-elegant overflow-hidden"
          >
            <div className="bg-gradient-hero p-4 text-white flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15"><Sparkles className="h-5 w-5 text-gold" /></span>
              <div className="flex-1">
                <div className="font-display font-bold">AI Loan Assistant</div>
                <div className="text-[11px] text-white/70">Powered by NSSF SACCO AI</div>
              </div>
              <button onClick={() => setOpen(false)} className="grid h-8 w-8 place-items-center rounded-md hover:bg-white/10"><X className="h-4 w-4" /></button>
            </div>
            <div className="h-80 overflow-y-auto p-4 space-y-3 bg-secondary/30">
              {msgs.map((m, i) => (
                <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm ${m.role === "user" ? "bg-primary text-primary-foreground rounded-br-sm" : "bg-card border border-border rounded-bl-sm"}`}>{m.text}</div>
                </div>
              ))}
            </div>
            <div className="border-t border-border p-3 space-y-2">
              <div className="flex gap-1.5 flex-wrap">
                {SUGGESTIONS.map((s) => (
                  <button key={s} onClick={() => send(s)} className="text-[11px] rounded-full border border-border bg-secondary px-2.5 py-1 hover:bg-primary-soft hover:border-primary hover:text-primary transition-colors">{s}</button>
                ))}
              </div>
              <form onSubmit={(e) => { e.preventDefault(); send(input); }} className="flex gap-2">
                <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Ask about loans…" className="flex-1 rounded-md border border-input bg-background px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
                <button type="submit" className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground hover:bg-primary-deep"><Send className="h-4 w-4" /></button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
