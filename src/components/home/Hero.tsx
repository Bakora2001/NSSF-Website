import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Play, Users, Lock, HandCoins, Building2 } from "lucide-react";

import photo1 from "@/assets/hero/nssf-photo1.jpg";
import photo2 from "@/assets/hero/nssf-photo2.jpg";
import nssfBuilding1 from "@/assets/hero/nssf-building-1.jpg";
import nssfBuilding2 from "@/assets/hero/nssf-building-2.jpg";

const SLIDES = [photo1, photo2, nssfBuilding1, nssfBuilding2];

export function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % SLIDES.length), 5500);
    return () => clearInterval(t);
  }, []);
  return (
    <section className="relative isolate overflow-hidden pb-16">
      {/* Background images */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence mode="sync">
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${SLIDES[i]})` }}
          />
        </AnimatePresence>
        {/* Left dark / right brighter gradient */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,oklch(0.20_0.05_184/0.96)_0%,oklch(0.30_0.06_184/0.80)_38%,oklch(0.36_0.06_184/0.40)_62%,transparent_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_30%,rgba(245,184,60,0.10),transparent_55%)]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-32 grid lg:grid-cols-[1.25fr_1fr] gap-12 items-center">
        <div className="text-white">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-lime animate-pulse" /> Now with AI Loan Qualification
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05] text-balance">
            Empowering Your <br />
            <span className="bg-gradient-to-r from-gold via-yellow to-gold bg-clip-text text-transparent">Financial Future</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }} className="mt-4 text-white/90 text-sm font-semibold tracking-wide">
            Secure <span className="text-gold">·</span> Grow <span className="text-gold">·</span> Thrive
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.25 }} className="mt-3 max-w-xl text-white/80 text-base sm:text-lg">
            We are committed to providing innovative financial solutions that empower our members to achieve their dreams and secure their future — now with AI-powered loan recommendations.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-8 flex flex-wrap gap-3 items-center">
            <Button asChild size="lg" className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-glow uppercase tracking-wide">
              <Link to="/join">Become a Member</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white/50 text-white bg-transparent hover:bg-white/10 hover:text-white font-semibold uppercase tracking-wide">
              <Link to="/portal/login">Member Portal</Link>
            </Button>
            <Link to="/portal/ai-assistant" className="group inline-flex items-center gap-3 text-white font-semibold">
              <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-white/70 group-hover:bg-white/10 transition">
                <Play className="h-4 w-4 fill-white" />
              </span>
              <span className="uppercase tracking-wider text-sm">Watch Video</span>
            </Link>
          </motion.div>
        </div>

        {/* Stats card matching reference */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="relative lg:justify-self-end">
          <div className="rounded-2xl bg-white/95 backdrop-blur p-5 shadow-elegant border border-white/40 max-w-[270px]">
            <div className="space-y-3">
              <StatCard Icon={Users} label="Members" value="8000+" color="primary" trend={[8, 12, 10, 15, 13, 18, 22, 20, 26, 30]} />
              <StatCard Icon={Lock} label="Total Savings" value="KES 12.8B+" color="yellow" trend={[6, 9, 8, 12, 14, 11, 16, 19, 22, 28]} />
              <StatCard Icon={HandCoins} label="Loans Disbursed" value="KES 8.6B+" color="lime" trend={[4, 7, 6, 10, 12, 9, 14, 17, 21, 25]} />
              <StatCard Icon={Building2} label="Branches" value="24" color="primary" trend={[10, 10, 12, 12, 14, 14, 16, 18, 20, 24]} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wavy bottom edge */}
      <div className="absolute -bottom-px left-0 right-0 leading-[0]">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="block w-full h-[80px] md:h-[120px]" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,120 L0,100 C75,100 75,90 150,90 C225,90 225,95 300,95 C375,95 375,70 450,70 C525,70 525,80 600,80 C675,80 675,50 750,50 C825,50 825,60 900,60 C975,60 975,30 1050,30 C1125,30 1125,40 1200,40 C1275,40 1275,10 1350,10 C1395,10 1395,20 1440,20 L1440,120 Z" fill="var(--color-background)" />
        </svg>
      </div>
    </section>
  );
}

function StatCard({ Icon, label, value, color, trend }: { Icon: any; label: string; value: string; color: "primary" | "gold" | "lime" | "yellow"; trend: number[] }) {
  const bg = color === "primary" ? "bg-primary-soft text-primary" : color === "gold" ? "bg-gold/15 text-gold-foreground" : color === "yellow" ? "bg-[#f5b83c]/20 text-[#d99716]" : "bg-lime/20 text-primary-deep";
  const max = Math.max(...trend);
  const min = Math.min(...trend);
  const range = max - min || 1;
  const pts = trend.map((v, idx) => `${(idx / (trend.length - 1)) * 100},${30 - ((v - min) / range) * 24}`).join(" ");
  
  const valueColorClass = "text-[#286d65]";
  const safeId = label.replace(/[^a-zA-Z]/g, "");

  return (
    <div className="flex items-center gap-3 rounded-xl border border-border bg-card p-2.5">
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${bg}`}><Icon className="h-4 w-4" strokeWidth={2.2} /></span>
      <div className="flex-1 min-w-0">
        <div className="text-[11px] font-medium text-muted-foreground">{label}</div>
        <div className={`font-display font-extrabold text-[15px] leading-tight ${valueColorClass}`}>{value}</div>
      </div>
      <svg viewBox="0 0 100 32" className="w-14 h-8 shrink-0 overflow-visible" preserveAspectRatio="none">
        <defs>
          <marker id={`arrow-${safeId}`} viewBox="0 0 10 10" refX="7" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
            <path d="M 0 1 L 10 5 L 0 9 z" fill="#a1d862" />
          </marker>
        </defs>
        <polyline points={pts} fill="none" stroke="#a1d862" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" markerEnd={`url(#arrow-${safeId})`} />
      </svg>
    </div>
  );
}
