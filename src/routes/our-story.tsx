import { createFileRoute, Link } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import {
  ChevronRight, Eye, Target, Heart, CheckCircle2,
  Phone, Building2, CreditCard, Smartphone,
} from "lucide-react";

export const Route = createFileRoute("/our-story")({
  head: () => ({
    meta: [
      { title: "Our Story — NSSF SACCO Limited" },
      { name: "description", content: "Learn about NSSF SACCO's history, vision, mission and membership requirements since 1990." },
    ],
  }),
  component: OurStoryPage,
});

/* ─── Data ─────────────────────────────────────────────────────────────── */
const REQUIREMENTS = [
  "Fill up a membership form (on the \"downloads\" page on this website), complete with personal details, next of kin and list of nominees. Include a passport sized photo and a copy of your ID.",
  "Membership is Kshs. 1,000. This is a one-off payment (non-refundable).",
  "Share Capital (Shareholding in the SACCO): Category A: KES. 20,000 | Category B: KES. 10,000 | Category C: KES. 5,000. Non-refundable but transferable to an existing SACCO member upon exit.",
  "Monthly contributions — Minimum KES. 3,500. KES. 500 goes towards loan guard insurance thus not inclusive in the monthly savings.",
  "Loans — Given up to three times your Savings/Normal shares. Requirements: 6 guarantors, 2 latest pay-slips, copy of ID and fully filled up loan form.",
  "Self-Guarantee — Requirements: 6 months bank statements and a standing order to the SACCO Bank Accounts.",
  "Sacco withdrawal — takes 60 days duration from receipt of withdrawal letter. Withdrawal Fee of Kshs. 1,000 applies.",
];

const PAYMENT_MODES = [
  {
    icon: Smartphone,
    title: "Mpesa Paybill",
    desc: "Business No. 819890. AC No. is your Sacco Membership Number or National ID Number.",
  },
  {
    icon: Building2,
    title: "Standing Order",
    desc: "Co-operative Bank: A/C Name: NSSF SACCO LIMITED. A/C No. 01120040151300. Branch: Ukulima Branch. Reference: Your ID No. or Member No.",
  },
  {
    icon: CreditCard,
    title: "Cash Payment",
    desc: "Over the Counter at the Sacco Banking Hall.",
  },
];

const MOBILE_STEPS = [
  "Download and fill in the Mobile Banking Form, send it as a scan copy to the Sacco as well as your ID copy through info@nssfsacco.co.ke",
  "Use Mpesa Paybill (819890) to transfer money from Mpesa to Fosa account. A/C No. is your Sacco Membership number (you can get the membership number through the Members' Portal on member profile).",
  "Upon successful registration you will receive an SMS with instructions on Mobile Banking as well as your PIN. Kindly keep the PIN a secret and change it through the prompts on the Mobile Banking Menu.",
  "Dial *477# and follow the prompts e.g. transfer from FOSA Account to Mpesa, Repay Loan, make contribution etc. Put the amount and complete the transaction with your PIN.",
  "To make sure the FOSA Account is active, a member needs to transact with FOSA at least once every three months and have a minimum balance of KES. 1,000 in the FOSA Account.",
];

const CORE_VALUES = [
  "Customer-Centric",
  "Innovation",
  "Professionalism",
  "Integrity",
  "Sustainability",
];

const STATS = [
  { num: "8,000+", label: "Members" },
  { num: "30+",    label: "Years of Trust" },
  { num: "SASRA",  label: "Licensed & Regulated" },
  { num: "1990",   label: "Founded" },
];

/* ─── Component ─────────────────────────────────────────────────────────── */
function OurStoryPage() {
  return (
    <PublicLayout>
      {/* ══ HEADER ════════════════════════════════════════════════════════ */}
      <div className="bg-primary-soft/40 py-12 border-b border-border">
        <div className="mx-auto max-w-7xl px-6">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-1 text-xs text-muted-foreground mb-4" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-muted-foreground">About Us</span>
            <ChevronRight className="h-3 w-3 shrink-0" />
            <span className="text-foreground font-semibold">Our Story</span>
          </nav>

          <h1 className="text-4xl md:text-5xl font-display font-extrabold text-foreground leading-tight">
            Our Story
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl text-sm leading-relaxed">
            Discover our journey, purpose, and the values that drive us to empower lives
            and build a better financial future.
          </p>
        </div>
      </div>

      {/* ══ MAIN CONTENT ════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid lg:grid-cols-3 gap-12">

          {/* ── LEFT + CENTRE (2 cols) ── */}
          <div className="lg:col-span-2 space-y-14">

            {/* OUR HISTORY */}
            <section>
              <h2 className="text-2xl font-display font-extrabold text-foreground mb-5 flex items-center gap-3">
                <span className="h-1 w-8 rounded-full bg-primary inline-block" />
                Our History
              </h2>
              <div className="space-y-4 text-sm text-muted-foreground leading-relaxed">
                <p>
                  NSSF SACCO LIMITED formerly NASSEFU SAVINGS AND CREDIT SOCIETY was registered on
                  20th August, 1990 by 8 employees of National Social Security Fund which grew to
                  280 members in its first Annual General Meeting. This was a common goal initiation
                  by the members employed in NSSF Fund, at the time.
                </p>
                <p>
                  With increased member activity and growth in assets, the Front Office Service
                  Activities (FOSA) commenced operations in December 2010, after obtaining Licensing
                  from SASRA, to offer quasi banking services to NSSF SACCO members at competitive
                  rates.
                </p>
                <p>
                  This catapulted the SACCO's growth further where it was now necessary to open the
                  Common Bond of the Sacco enabling more employer Companies join with their employees
                  to achieve their personal financial goals. With this, the Sacco membership has
                  grown to more than 8,000 members and counting.
                </p>
              </div>
            </section>

            {/* MEMBERSHIP */}
            <section>
              <h2 className="text-2xl font-display font-extrabold text-foreground mb-6 flex items-center gap-3">
                <span className="h-1 w-8 rounded-full bg-primary inline-block" />
                Membership
              </h2>

              {/* Requirements */}
              <div className="rounded-2xl border border-border bg-card shadow-card p-6 mb-6">
                <h3 className="text-base font-bold text-primary mb-5 uppercase tracking-wide">
                  Requirements for Joining NSSF SACCO
                </h3>
                <ul className="space-y-4">
                  {REQUIREMENTS.map((req, i) => (
                    <li key={i} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="flex-shrink-0 grid h-6 w-6 place-items-center rounded-full bg-primary/10 text-primary text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Payment Contribution Modes */}
              <h3 className="text-base font-bold text-primary mb-4 uppercase tracking-wide">
                Payment Contribution Modes
              </h3>
              <div className="grid sm:grid-cols-3 gap-4 mb-8">
                {PAYMENT_MODES.map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="rounded-xl border border-border bg-card p-5 shadow-sm hover:shadow-card transition-shadow">
                    <div className="grid h-11 w-11 mb-3 place-items-center rounded-xl bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="font-bold text-sm text-foreground mb-1">{title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                ))}
              </div>

              {/* How to contribute via Mobile */}
              <div className="rounded-2xl bg-primary-deep text-white p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/15">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <h3 className="font-display font-bold text-lg">
                    How to Contribute Shares &amp; Repay Loans on the Phone/App
                  </h3>
                </div>
                <ol className="space-y-4">
                  {MOBILE_STEPS.map((step, i) => (
                    <li key={i} className="flex gap-3 text-sm text-white/80 leading-relaxed">
                      <span className="flex-shrink-0 grid h-6 w-6 place-items-center rounded-full bg-gold/25 text-gold text-xs font-bold mt-0.5">
                        {i + 1}
                      </span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </section>
          </div>

          {/* ── RIGHT SIDEBAR ── */}
          <div className="space-y-6">

            {/* Vision / Mission / Core Values card (sticky) */}
            <div className="rounded-2xl border border-border bg-card shadow-card p-6 space-y-5 sticky top-24">
              <h2 className="text-lg font-display font-extrabold text-foreground border-b border-border pb-3">
                Vision, Mission and Core Values
              </h2>

              {/* Vision */}
              <div className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10">
                  <Eye className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <p className="font-bold text-sm text-foreground mb-1">Our Vision</p>
                  <p className="text-sm text-muted-foreground">Excellence in value creation.</p>
                </div>
              </div>

              {/* Mission */}
              <div className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10">
                  <Target className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <p className="font-bold text-sm text-foreground mb-1">Our Mission</p>
                  <p className="text-sm text-muted-foreground">Mobilization of resources and transforming lives.</p>
                </div>
              </div>

              {/* Core Values */}
              <div className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-primary/10">
                  <Heart className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <p className="font-bold text-sm text-foreground mb-2">Our Core Values</p>
                  <ul className="space-y-1">
                    {CORE_VALUES.map((v) => (
                      <li key={v} className="flex items-center gap-1.5 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary shrink-0" />
                        {v}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tagline */}
              <div className="rounded-xl bg-gradient-to-br from-primary-deep to-primary text-white p-5 text-center mt-2">
                <p className="text-[10px] uppercase tracking-widest text-white/60 mb-1">Tagline</p>
                <p className="font-display font-extrabold text-xl text-gold leading-tight">
                  "Inspiring Prosperity"
                </p>
              </div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-3">
              {STATS.map(({ num, label }) => (
                <div key={label} className="rounded-xl border border-border bg-card p-4 text-center shadow-sm">
                  <p className="font-display font-extrabold text-2xl text-primary">{num}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{label}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-5 text-center space-y-3">
              <p className="font-display font-bold text-foreground">Ready to Join?</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Become a member today and start your journey to financial wellness.
              </p>
              <Link
                to="/join"
                className="block rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-white hover:bg-primary-deep transition-colors"
              >
                JOIN NSSF SACCO
              </Link>
            </div>
          </div>

        </div>
      </div>
    </PublicLayout>
  );
}
