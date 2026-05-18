import { Link } from "@tanstack/react-router";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  const color = variant === "light" ? "text-white" : "text-primary";
  return (
    <Link to="/" className="flex items-center gap-2.5 group">
      <span className="relative grid h-10 w-10 place-items-center">
        <svg viewBox="0 0 48 48" className="h-10 w-10 transition-transform group-hover:scale-105">
          <defs>
            <linearGradient id="lgLogo" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#1c7a73" />
              <stop offset="60%" stopColor="#a4c961" />
              <stop offset="100%" stopColor="#f0e41c" />
            </linearGradient>
          </defs>
          <path d="M24 3 L43 13 V35 L24 45 L5 35 V13 Z" fill="url(#lgLogo)" />
          <path d="M24 9 L37 16 V32 L24 39 L11 32 V16 Z" fill="#fff" opacity=".92" />
          <path d="M16 30 V18 L24 26 V14 L32 22 V34" stroke="#1c7a73" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className={`font-display text-base font-extrabold tracking-tight ${color}`}>NSSF SACCO</span>
        <span className={`text-[10px] font-semibold tracking-[0.18em] ${variant === "light" ? "text-white/70" : "text-muted-foreground"}`}>LIMITED</span>
      </span>
    </Link>
  );
}
