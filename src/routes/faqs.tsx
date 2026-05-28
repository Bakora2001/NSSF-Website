import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PublicLayout } from "@/components/layout/PublicLayout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Phone, MessageCircle, Mail, MapPin, HelpCircle, ChevronRight, ShieldCheck, Users, Clock, Headphones } from "lucide-react";
import nssfBuilding from "@/assets/hero/nssf_sacco_logo.png";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "FAQs — NSSF SACCO" },
      { name: "description", content: "Frequently asked questions about NSSF SACCO membership, loans and services." },
    ],
  }),
  component: FaqsPage,
});

/* ─── FAQ DATA ───────────────────────────────────────────────────────────── */
const ALL_FAQS = [
  {
    category: "Portal",
    q: "HOW DO I APPLY FOR A LOAN THROUGH THE MEMBERS' PORTAL?",
    a: (
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>
          From the Sacco website, log into the portal with your username (National ID) and
          Password. You will first be prompted with a security check to verify you are not a robot.
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>If you have not logged in before, kindly click on <strong>activate/reset password</strong>. The system will send you a reset password on your phone as an SMS.</li>
          <li>Log into the portal using these credentials and you will be prompted with a screen on updating or retaining your password.</li>
          <li>Change or retain the password and proceed to the portal dashboard where you will find all your Sacco activities and statement in an organized summary.</li>
          <li>Go to the menu on the left and click on <strong>"Apply for a Loan"</strong>.</li>
          <li>Choose loan type, Loan amount and click <strong>Next</strong>.</li>
          <li>Choose guarantors, either by their ID number or Phone Number and click <strong>"send"</strong>.</li>
          <li>An SMS will prompt the guarantors to log into the portal and accept or reject the guarantorship.</li>
          <li>After all guarantors have accepted, click on <strong>"Proceed to Sacco"</strong> so as to get the Loan Offer Letter that you download and sign.</li>
          <li>Scan send back to the Sacco the letter together with your ID copy and 2 months' payslips.</li>
          <li>Wait for SMS feedback on the loan to go through appraisal and lastly to be posted in your FOSA account.</li>
        </ul>
      </div>
    ),
  },
  {
    category: "Loans",
    q: "CAN I TOP UP MY LOAN ONLINE?",
    a: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        Yes. You can apply for a loan top up on the members portal by logging into the portal and
        follow the instructions as shown above. There will be an additional section where you can
        choose the loan you want to top up and click <strong>"Submit"</strong>.
      </p>
    ),
  },
  {
    category: "Loans",
    q: "WHAT DO I NEED WHEN APPLYING FOR A LOAN?",
    a: (
      <ul className="list-disc pl-5 space-y-1.5 text-sm text-muted-foreground leading-relaxed">
        <li>Minimum of six guarantors who must be active members and have contributed deposits for at least three months.</li>
        <li>Most current 2 months' pay slips certified by the applicant's employer's payroll officer, MUST be attached to the application.</li>
        <li>Attach copy of an acceptable form of identification (National ID / Valid Passport).</li>
        <li>Must have been an active member for at least six months.</li>
      </ul>
    ),
  },
  {
    category: "Loans",
    q: "CAN I APPLY FOR MORE THAN ONE LOAN?",
    a: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        A member is allowed to take all the loan products on offer so long as total loans repayments
        do not exceed two thirds of the member's salary and three times the member's savings.
        (Four times for Supersavers' loan)
      </p>
    ),
  },
  {
    category: "Loans",
    q: "CAN I APPLY FOR A TOP UP OF AN EXISTING LOAN?",
    a: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        A member with an existing loan is allowed to apply for a new loan of the same type from
        which the Society will recover the balance of the existing loan and give the member the
        difference subject to third rule on the member's current pay slip.
      </p>
    ),
  },
  {
    category: "Accounts",
    q: "CAN I OFFSET MY DEPOSITS AGAINST MY LOAN?",
    a: (
      <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
        <p>
          A member is only allowed to offset his deposits against his loans if he/she is ceasing to
          be a member of the Society. The member will then be required to pay off any loan balance
          if any. Additional requirements are as follows:
        </p>
        <ul className="list-disc pl-5 space-y-1.5">
          <li>Offsets are also allowed when a member asks those he has guaranteed to seek for guarantor replacements.</li>
          <li>Your Share Capital Deposits remains in the Sacco and earns dividends but can only be transferred to another member at the same value.</li>
        </ul>
      </div>
    ),
  },
  {
    category: "Loans",
    q: "IF I CLEAR A LOAN BEFORE ITS COMPLETION DATE WILL I BE REQUIRED TO PAY INTEREST FOR FUTURE PERIODS?",
    a: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        No, interest is only charged for the current month the loan is being cleared on period.
      </p>
    ),
  },
  {
    category: "Accounts",
    q: "CAN I TRANSFER MY SHARE CAPITAL DEPOSITS TO ANOTHER MEMBER?",
    a: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        Yes, all a member needs to do is to instruct the Society by filling in a share transfer
        form. This is only possible upon member withdrawal from the SACCO.
      </p>
    ),
  },
  {
    category: "Membership",
    q: "WHAT DO I NEED TO DO WHEN WITHDRAWING FROM THE SOCIETY?",
    a: (
      <p className="text-sm text-muted-foreground leading-relaxed">
        A member needs to inform the Society by filling in a withdrawal form giving the Society
        60 days' notice on the same.
      </p>
    ),
  },
  {
    category: "Payments",
    q: "HOW DO I PAY FOR MY LOAN THROUGH MOBILE BANKING? (*477#)",
    a: (
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p><strong>Step 1:</strong> Deposit funds to your FOSA account through Sacco Paybill <strong>819890</strong> and input your Sacco Member Number in the account option. Input the amount you wish to pay for the loan. The funds will be deposited in your FOSA account.</p>
        <p><strong>Step 2:</strong> Dial <strong>*477#</strong> and choose loan repayment, choose any loan you would like to pay off (i.e. Mobile Banking or Emergency Loan) and input the amount and complete the transaction with your mobile banking PIN.</p>
      </div>
    ),
  },
  {
    category: "Payments",
    q: "HOW DO I PAY FOR MY LOAN THROUGH THE MOBILE APP?",
    a: (
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p><strong>Step 1:</strong> Log into the APP and choose loan repayment icon, choose to pay by either FOSA or MPESA option, a list of your current loans with their balances will be displayed.</p>
        <p><strong>Step 2:</strong> Choose the loan you want to pay off and input your mobile banking PIN to complete.</p>
      </div>
    ),
  },
  {
    category: "Portal",
    q: "HOW DO I RESET OR ACTIVATE MY MEMBERS' PORTAL ACCOUNT PASSWORD?",
    a: (
      <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
        <p>The members portal is a self-service system. If you forget or want to activate your account, below are the steps:</p>
        <ol className="list-decimal pl-5 space-y-1.5">
          <li>Go to the Sacco website (<strong>www.nssfsacco.co.ke</strong>) and locate the members' portal at the menu. (top right)</li>
          <li>Input the indicated security code when prompted.</li>
          <li>Go to log in screen with username and password, below these there is a link called <strong>"activate or reset password"</strong>, click on it.</li>
          <li>You will be asked "what do you remember about your account?" with a prompt of either ID Number, Telephone Number, Member number or Email Address.</li>
          <li>Input either of the above you remember on the pop up and select <strong>"send password"</strong> button.</li>
          <li>An SMS with a new password will be sent to your cell phone number.</li>
          <li>Go back to log in and input the Membership Number / ID Number as your Username and your new password as indicated on the SMS sent.</li>
          <li>After you login with your new password, the system will prompt you to change the password. From here, you can change the new password or choose to skip.</li>
          <li>The system will log you in and take you to the portal dashboard.</li>
        </ol>
      </div>
    ),
  },
];

const CATEGORIES = ["All Questions", "Loans", "Accounts", "Membership", "Payments", "Portal"];

const FEATURES = [
  { icon: ShieldCheck, label: "Secure & Reliable",  sub: "Your security is our priority" },
  { icon: Users,       label: "Member Focused",     sub: "We are here for your growth" },
  { icon: Clock,       label: "24/7 Access",        sub: "Access your account anytime" },
  { icon: Headphones,  label: "Expert Support",     sub: "Get help from our dedicated team" },
];

/* ─── COMPONENT ─────────────────────────────────────────────────────────── */
function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState("All Questions");

  const filtered =
    activeCategory === "All Questions"
      ? ALL_FAQS
      : ALL_FAQS.filter((f) => f.category === activeCategory);

  return (
    <PublicLayout>
      {/* ── Outer wrapper ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 py-10 lg:py-14">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* ════════════════════════════════════════
              LEFT SIDEBAR
          ════════════════════════════════════════ */}
          <aside className="w-full lg:w-56 xl:w-64 shrink-0 space-y-6">
            {/* Title block */}
            <div>
              <h2 className="text-2xl font-display font-extrabold text-primary-deep">FAQs</h2>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Find answers to common questions about our products, services and membership.
              </p>
            </div>

            {/* We are here to help */}
            <div className="rounded-2xl border border-primary/20 bg-primary-soft/40 p-4 space-y-3">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <HelpCircle className="h-4 w-4 text-gold" />
                We are here to help you
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Browse through the frequently asked questions or contact our support team.
              </p>

              {/* Contact items */}
              <ul className="space-y-3 pt-1">
                <li className="flex items-start gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10">
                    <Phone className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <div className="text-xs">
                    <p className="font-semibold text-foreground">Call Us</p>
                    <a href="tel:+254111018100" className="text-muted-foreground hover:text-primary transition-colors">020 272 9800</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10">
                    <MessageCircle className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <div className="text-xs">
                    <p className="font-semibold text-foreground">WhatsApp</p>
                    <a href="https://wa.me/254711082000" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">0711 082 000</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10">
                    <Mail className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <div className="text-xs">
                    <p className="font-semibold text-foreground">Email Us</p>
                    <a href="mailto:info@nssfsacco.co.ke" className="text-muted-foreground hover:text-primary transition-colors">info@nssfsacco.co.ke</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary/10">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                  </span>
                  <div className="text-xs">
                    <p className="font-semibold text-foreground">Visit Us</p>
                    <span className="text-muted-foreground">Social Security House,<br />Upper Hill, Nairobi</span>
                  </div>
                </li>
              </ul>
            </div>

            {/* Still Need Help? */}
            <div className="rounded-2xl border border-gold/30 bg-gold/5 p-4 space-y-3">
              <div className="flex items-center gap-2 text-primary font-semibold text-sm">
                <HelpCircle className="h-4 w-4 text-gold" />
                Still Need Help?
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Our support team is ready to assist you.
              </p>
              <a
                href="/contact"
                className="flex items-center gap-1 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary-deep transition-colors w-full justify-center"
              >
                CONTACT SUPPORT <ChevronRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </aside>

          {/* ════════════════════════════════════════
              MAIN + RIGHT
          ════════════════════════════════════════ */}
          <div className="flex-1 min-w-0 flex flex-col xl:flex-row gap-8">

            {/* ── CENTRE: FAQ accordion ── */}
            <div className="flex-1 min-w-0">
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl font-display font-extrabold text-foreground leading-tight">
                  Frequently Asked Questions
                </h1>
                <p className="mt-2 text-sm text-muted-foreground">
                  Everything you need to know about NSSF SACCO products and services.
                </p>
              </div>

              {/* Category filter tabs */}
              <div className="flex flex-wrap gap-2 mb-6">
                {CATEGORIES.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`rounded-full px-4 py-1.5 text-xs font-semibold border transition-colors ${
                      activeCategory === cat
                        ? "bg-primary text-white border-primary"
                        : "bg-transparent text-foreground border-border hover:border-primary hover:text-primary"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Accordion */}
              <Accordion type="single" collapsible className="space-y-2">
                {filtered.map((faq, i) => {
                  const globalIndex = ALL_FAQS.indexOf(faq) + 1;
                  return (
                    <AccordionItem
                      key={i}
                      value={`item-${i}`}
                      className="rounded-xl border border-border bg-card shadow-sm overflow-hidden"
                    >
                      <AccordionTrigger className="px-5 py-3.5 hover:bg-secondary/50 text-left gap-3 [&>svg]:shrink-0">
                        <span className="flex items-center gap-3 flex-1 min-w-0">
                          <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/10 text-primary text-xs font-bold">
                            {globalIndex}
                          </span>
                          <span className="text-sm font-bold text-foreground tracking-wide uppercase leading-tight">
                            {faq.q}
                          </span>
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-5 pb-5 pt-1">
                        <div className="pl-9">{faq.a}</div>
                      </AccordionContent>
                    </AccordionItem>
                  );
                })}
              </Accordion>
            </div>

            {/* ── RIGHT PANEL ── */}
            <div className="w-full xl:w-72 shrink-0 space-y-6">
              {/* Building image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elegant h-64 xl:h-80 bg-primary-deep flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
                  alt="Social Security House – NSSF SACCO"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/80 via-primary-deep/20 to-transparent" />
                {/* Logo overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end gap-3">
                  <div className="rounded-xl bg-white/15 backdrop-blur-sm p-2 border border-white/20">
                    <img src={nssfBuilding} alt="NSSF SACCO" className="h-10 w-10 object-contain" />
                  </div>
                  <div>
                    <p className="text-white font-display font-bold text-sm leading-tight">NSSF SACCO</p>
                    <p className="text-white/70 text-xs">LIMITED</p>
                    <p className="text-white/60 text-[10px] mt-0.5">SOCIAL SECURITY HOUSE</p>
                  </div>
                </div>
              </div>

              {/* Feature icons */}
              <div className="grid grid-cols-2 gap-3">
                {FEATURES.map(({ icon: Icon, label, sub }) => (
                  <div key={label} className="rounded-xl border border-border bg-card p-3 text-center shadow-sm">
                    <div className="grid h-10 w-10 mx-auto mb-2 place-items-center rounded-full bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <p className="text-xs font-bold text-foreground leading-tight">{label}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5 leading-tight">{sub}</p>
                  </div>
                ))}
              </div>

              {/* Quote block */}
              <div className="rounded-2xl border border-primary/20 bg-primary-soft/30 p-5 relative overflow-hidden">
                <div className="absolute top-3 right-3 text-primary/10 font-display font-black text-6xl select-none leading-none">"</div>
                <p className="text-sm text-foreground leading-relaxed relative">
                  NSSF SACCO is committed to enhancing the financial wellness of our members through
                  innovative, reliable and member-focused services.
                </p>
                <p className="mt-3 text-xs font-semibold text-primary">— Management</p>
              </div>
            </div>

          </div>{/* end main+right */}
        </div>{/* end flex */}
      </div>{/* end outer wrapper */}
    </PublicLayout>
  );
}
