import { motion } from "framer-motion";

export function Partners() {
  const PARTNERS = [
    {
      name: "Co-operative Bank",
      logo: "coop",
      svg: (
        <svg viewBox="0 0 100 100" className="h-9 w-9 text-[#286d65]" fill="currentColor">
          <path d="M10 10h80v20H10z" />
          <path d="M10 40h80v20H10z" opacity="0.85" />
          <path d="M10 70h80v20H10z" className="text-[#F5B83C]" />
        </svg>
      )
    },
    {
      name: "Ministry of Co-operatives",
      logo: "ministry",
      svg: (
        <svg viewBox="0 0 100 100" className="h-9 w-9 text-[#286d65]" fill="currentColor">
          <path d="M50 5 L90 25 L90 35 L10 35 L10 25 Z" />
          <rect x="18" y="35" width="8" height="40" />
          <rect x="34" y="35" width="8" height="40" />
          <rect x="50" y="35" width="8" height="40" />
          <rect x="66" y="35" width="8" height="40" />
          <rect x="82" y="35" width="8" height="40" />
          <rect x="5" y="75" width="90" height="10" rx="2" />
          <rect x="2" y="85" width="96" height="10" rx="2" className="text-[#F5B83C]" />
        </svg>
      )
    },
    {
      name: "SASRA Regulatory",
      logo: "sasra",
      svg: (
        <svg viewBox="0 0 100 100" className="h-9 w-9 text-[#286d65]" fill="currentColor">
          <path d="M50 10 L85 25 L85 55 C85 75 50 90 50 90 C50 90 15 75 15 55 L15 25 Z" />
          <circle cx="50" cy="48" r="16" fill="#fff" />
          <path d="M50 38 L58 46 L46 54 L54 62" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
        </svg>
      )
    }
  ];

  return (
    <section className="bg-white border-y border-border py-12">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-8">
          <h3 className="text-xs uppercase tracking-widest text-[#286d65] font-extrabold">Our Key Partners &amp; Integration Systems</h3>
          <p className="text-sm text-muted-foreground mt-1.5">Regulated, integrated, and backed by major financial and tech institutions</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
          {PARTNERS.map((p) => (
            <motion.div
              key={p.name}
              whileHover={{ scale: 1.04 }}
              className="flex items-center gap-3 cursor-default opacity-85 hover:opacity-100 transition-opacity"
            >
              {p.svg}
              <div>
                <div className="font-display font-extrabold text-[12px] text-foreground tracking-wide">{p.name}</div>
                <div className="text-[10px] text-muted-foreground">Certified Integration</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
