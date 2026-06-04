import { motion } from "framer-motion";
import { PiggyBank, HandCoins, Smartphone, ShieldCheck, TrendingUp, Building2 } from "lucide-react";

const SERVICES = [
  { Icon: PiggyBank, name: "Savings Accounts", desc: "Flexible savings options that help you achieve your goals faster." },
  { Icon: HandCoins, name: "Loans", desc: "Affordable loan products for every stage of your financial journey." },
  { Icon: Smartphone, name: "Mobile Banking", desc: "Bank on the go with our secure and convenient mobile platform." },
  { Icon: ShieldCheck, name: "Insurance Agency", desc: "Comprehensive insurance solutions for you and your loved ones." },
  { Icon: TrendingUp, name: "Investments & Shares", desc: "Grow your wealth with attractive dividends on your investments." },
  { Icon: Building2, name: "Agency Banking", desc: "Access Co-op, Equity & KCB banking services at our convenience." },
];

export function Services() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10 pb-14">
      <div className="text-center mb-10">
        <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-foreground">
          Our Financial <span className="text-[#286d65]">Solutions</span>
        </h2>
      </div>
      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {SERVICES.map(({ Icon, name, desc }, i) => (
          <motion.div
            key={name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group cursor-pointer rounded-xl border border-border bg-white p-4 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all flex xl:flex-col items-start gap-3 xl:text-center xl:items-center"
          >
            <span className="shrink-0 text-[#286d65] relative">
              <Icon className="h-9 w-9 relative z-10" strokeWidth={1.5} />
              <div className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-[#F5B83C] opacity-80 z-0" />
            </span>
            <div>
              <h3 className="font-display font-bold text-[13px] text-foreground mb-1">{name}</h3>
              <p className="text-[11px] leading-snug text-muted-foreground">{desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
