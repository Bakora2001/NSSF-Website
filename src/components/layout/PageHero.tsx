export function PageHero({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-hero text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_20%,rgba(245,184,60,0.2),transparent_60%)]" />
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.25em] text-gold mb-3">{eyebrow}</p>}
        <h1 className="text-4xl sm:text-5xl font-display font-extrabold text-balance">{title}</h1>
        {subtitle && <p className="mt-4 max-w-2xl mx-auto text-white/80">{subtitle}</p>}
      </div>
    </section>
  );
}
