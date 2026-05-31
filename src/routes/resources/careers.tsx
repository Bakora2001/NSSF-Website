import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Briefcase, MapPin, CheckCircle2, Send, X, ExternalLink, Clock } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/resources/careers")({
  head: () => ({
    meta: [
      { title: "Careers & Vacancies — NSSF SACCO" },
      { name: "description", content: "Join the NSSF SACCO team and build a rewarding career in financial services." },
    ],
  }),
  component: CareersPage,
});

const ACCOUNTANT_JOB = {
  title: "Accountant",
  dept: "Finance Department",
  loc: "Nairobi, Kenya",
  type: "Full Time",
  deadline: "3rd June 2026",
  applyLink: "https://forms.office.com/r/udpT8smpKz",
  positionScope: `Reporting to the Chief Accountant, the successful candidate will be responsible for carrying out various accounting tasks in line with general accounting standards and Sacco's policies and procedures.`,
  responsibilities: [
    "Ensuring budgetary controls through maintaining and managing the votes as per the approved AGM budgets.",
    "Facilitating timely and accurate payments to suppliers, staff and the Board.",
    "Maintaining general ledgers, cash book, investment ledgers and other subsidiary ledgers.",
    "Preparing online petty cash payments in line with the finance policy and procedures.",
    "Monitoring on use of cheque books and ensure adequate and continuous supply.",
    "Preparing bank accounts reconciliation and following up on the outstanding or unknown.",
    "Tracking the utilization of capital and operational expenditure against the approved budget and report on the same.",
    "Monitoring monthly revenues and expenses and where applicable ensuring that they are accrued or posted in the correct accounting period.",
    "Preparing draft financial reports and statements in conformance with the applicable International Financial Reporting Standard and Generally Acceptable Accounting Principles.",
    "Ensuring accuracy, completeness and conformance in accounting records and receivables with the required financial standards.",
    "Preparing and remitting various taxes to Kenya Revenue Authority.",
    "Ensuring compliance with of all statutory deductions.",
    "Preparing of audit files for both internal and external auditors upon request.",
    "Preparing the annual tax deductions returns and furnishing staff and Management as appropriate.",
    "Maintaining and regularly updating the fixed asset and insurance cover for the assets are up to date.",
    "Ensuring delightful customer service with both external and internal customers.",
    "Selling and cross-selling of Sacco products.",
    "Performing any other duties as may be assigned from time to time.",
  ],
  academicQualification: [
    "Must be a Registered Certified Public Accountant – CPA(K) or ACCA.",
    "Bachelors Degree of Commerce, Finance/Accounting or any other business-related field will be an added advantage.",
  ],
  experience: "At least 3 years' relevant work experience.",
  skills: [
    "Communication and interpersonal skills",
    "Accounting & financial management skills",
    "Decision making skills",
    "Analytical and risk assessment skill",
    "Report writing",
  ],
};

function JobDetailsModal({ onClose }: { onClose: () => void }) {
  return (
    <AnimatePresence>
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.90, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.90, y: 30 }}
          transition={{ type: "spring", stiffness: 300, damping: 26 }}
          className="bg-white rounded-3xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative"
          onClick={(e) => e.stopPropagation()}
        >
          {/* ── Modal Header — white background with gold/yellow accent ── */}
          <div className="bg-white border-b border-border rounded-t-3xl px-8 py-6 relative overflow-hidden">
            {/* Yellow decorative stripe at top */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#F5B83C] rounded-t-3xl" />

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-5 right-6 grid h-9 w-9 place-items-center rounded-full bg-muted hover:bg-muted/80 text-foreground transition-all"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Header content */}
            <div className="flex items-start gap-5 mt-2">
              {/* Icon */}
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-[#F5B83C]/20 border border-[#F5B83C]/40 shrink-0">
                <Briefcase className="h-7 w-7 text-[#286d65]" />
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="inline-block bg-[#286d65] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                    Full Time
                  </span>
                  <span className="inline-block bg-[#F5B83C]/30 text-[#a37207] text-[10px] font-bold px-3 py-1 rounded-full border border-[#F5B83C]/50">
                    Finance Department
                  </span>
                </div>
                <h2 className="text-2xl font-display font-extrabold text-foreground leading-tight">
                  {ACCOUNTANT_JOB.title} <span className="text-[#286d65]">Position</span>
                </h2>
                <div className="flex flex-wrap items-center gap-4 mt-2 text-xs text-muted-foreground font-semibold">
                  <span className="flex items-center gap-1.5">
                    <MapPin className="h-3.5 w-3.5 text-[#286d65]" /> {ACCOUNTANT_JOB.loc}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5 text-[#F5B83C]" />
                    Deadline: <strong className="text-red-600 ml-1">{ACCOUNTANT_JOB.deadline}</strong>
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Modal Body ── */}
          <div className="px-8 py-6 space-y-6">

            {/* Two columns for desktop */}
            <div className="grid md:grid-cols-2 gap-6">

              {/* Left column */}
              <div className="space-y-6">
                {/* Position Scope */}
                <div>
                  <h3 className="font-extrabold text-[#286d65] uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#F5B83C] inline-block rounded" />
                    Position Scope
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-xs bg-muted/30 rounded-xl p-4">
                    {ACCOUNTANT_JOB.positionScope}
                  </p>
                </div>

                {/* Academic Qualification */}
                <div>
                  <h3 className="font-extrabold text-[#286d65] uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#F5B83C] inline-block rounded" />
                    Academic Qualification
                  </h3>
                  <p className="text-xs text-muted-foreground mb-2 italic">The ideal candidate must possess:</p>
                  <ul className="space-y-2">
                    {ACCOUNTANT_JOB.academicQualification.map((q, i) => (
                      <li key={i} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#286d65] shrink-0 mt-0.5" />
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Experience */}
                <div>
                  <h3 className="font-extrabold text-[#286d65] uppercase tracking-wider text-xs mb-2 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#F5B83C] inline-block rounded" />
                    Experience
                  </h3>
                  <p className="text-xs text-muted-foreground bg-muted/30 rounded-xl p-4">{ACCOUNTANT_JOB.experience}</p>
                </div>

                {/* Skills */}
                <div>
                  <h3 className="font-extrabold text-[#286d65] uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#F5B83C] inline-block rounded" />
                    Knowledge, Skills &amp; Attributes
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {ACCOUNTANT_JOB.skills.map((s, i) => (
                      <span key={i} className="bg-[#286d65]/10 text-[#286d65] text-[10px] font-bold px-3 py-1 rounded-full border border-[#286d65]/20">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-6">
                {/* Key Tasks */}
                <div>
                  <h3 className="font-extrabold text-[#286d65] uppercase tracking-wider text-xs mb-3 flex items-center gap-2">
                    <span className="w-4 h-0.5 bg-[#F5B83C] inline-block rounded" />
                    Key Tasks &amp; Responsibilities
                  </h3>
                  <ul className="space-y-2 max-h-72 overflow-y-auto pr-2">
                    {ACCOUNTANT_JOB.responsibilities.map((r, i) => (
                      <li key={i} className="flex gap-2.5 text-xs text-muted-foreground leading-relaxed">
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#F5B83C] shrink-0 mt-0.5" />
                        {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* How to Apply — full width */}
            <div className="bg-[#286d65]/5 border border-[#286d65]/20 rounded-2xl p-6 space-y-3">
              <h3 className="font-extrabold text-[#286d65] uppercase tracking-wider text-xs flex items-center gap-2">
                <span className="w-4 h-0.5 bg-[#F5B83C] inline-block rounded" />
                How to Apply
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-xs text-muted-foreground">
                <div className="space-y-2">
                  <p>For a full role profile, please visit our website <a href="https://www.nssfsacco.co.ke" target="_blank" rel="noopener noreferrer" className="text-[#286d65] font-bold hover:underline">www.nssfsacco.co.ke</a></p>
                  <p>Apply online <strong className="text-foreground">not later than 3rd June 2026.</strong></p>
                </div>
                <ul className="space-y-1">
                  <li>• Only short-listed candidates will be contacted.</li>
                  <li>• Any form of canvassing will lead to automatic disqualification.</li>
                  <li className="font-semibold text-foreground">• NSSF SACCO SOCIETY LIMITED is an equal opportunity employer.</li>
                </ul>
              </div>
              <a
                href={ACCOUNTANT_JOB.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#F5B83C] hover:bg-[#e2a82b] text-[#286d65] font-extrabold rounded-xl px-8 py-3 text-xs shadow-md transition-all w-full justify-center mt-2"
              >
                <ExternalLink className="h-4 w-4" />
                Apply Now Online
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}

function CareersPage() {
  const [showModal, setShowModal] = useState(false);

  return (
    <PublicLayout>
      {/* ── Main Content (no hero) ── */}
      <section className="mx-auto max-w-7xl px-6 py-10 grid lg:grid-cols-[1fr_300px] gap-8">

        {/* Left: Jobs List */}
        <div className="space-y-6">
          <h2 className="text-lg font-display font-extrabold text-foreground mb-4">Current Job Openings</h2>
          <div className="space-y-4">
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="bg-card border border-border/60 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex flex-wrap items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#286d65]/10 text-[#286d65]">
                  <Briefcase className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-display font-bold text-sm text-foreground mb-1">{ACCOUNTANT_JOB.title}</h3>
                  <p className="text-xs text-muted-foreground mb-2">Department: {ACCOUNTANT_JOB.dept}</p>
                  <div className="flex flex-wrap items-center gap-3 text-[11px] text-muted-foreground font-semibold">
                    <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" /> {ACCOUNTANT_JOB.loc}</span>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="bg-[#286d65] text-white text-[10px] font-extrabold px-3 py-1 rounded-full">
                  {ACCOUNTANT_JOB.type}
                </span>
                <button
                  onClick={() => setShowModal(true)}
                  className="bg-[#F5B83C] hover:bg-[#e0a52b] text-[#286d65] font-extrabold text-xs rounded-xl px-5 py-2.5 shadow-sm transition-all"
                >
                  View Details
                </button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Right Info Sidebar */}
        <aside className="space-y-6">
          {/* Why Work With Us */}
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm space-y-4">
            <h3 className="text-sm font-extrabold uppercase tracking-widest text-[#286d65]">Why Work With Us?</h3>
            <ul className="space-y-3">
              {[
                "Competitive compensation",
                "Professional growth opportunities",
                "Conducive work environment",
                "Training and development",
                "Career advancement",
              ].map((item, i) => (
                <li key={i} className="flex gap-2 text-xs text-muted-foreground font-semibold leading-relaxed">
                  <CheckCircle2 className="h-4 w-4 text-[#F5B83C] shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Don't see a suitable role? */}
          <div className="rounded-3xl bg-[#286d65] text-white p-6 shadow-md space-y-4">
            <h3 className="font-display font-bold text-sm">Don't see a suitable role?</h3>
            <p className="text-xs text-white/80 leading-relaxed">
              Send us your CV and we'll keep you in mind for future opportunities.
            </p>
            <button className="w-full bg-[#F5B83C] hover:bg-[#F5B83C]/90 text-[#286d65] font-extrabold rounded-xl py-2.5 text-xs transition-all flex items-center justify-center gap-2">
              <Send className="h-3.5 w-3.5" /> Send Your CV
            </button>
          </div>
        </aside>
      </section>

      {/* ── Job Details Modal ── */}
      {showModal && <JobDetailsModal onClose={() => setShowModal(false)} />}
    </PublicLayout>
  );
}
