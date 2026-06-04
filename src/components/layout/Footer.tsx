import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ShieldCheck, Globe } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Logo } from "./Logo";

const BOSA_LOANS = [
  "Emergency Loan",
  "School Fees Loan",
  "Normal Loan",
  "Special Flex Loan",
  "Supersaver's Loan",
  "Karo Loan",
  "Fanisi Loan",
  "Refinancing Loan",
  "Nawiri Loan",
  "Daraja Loan",
];

const FOSA_LOANS = [
  "Jumbo Loan",
  "Salary Advance Loan",
  "FOSA Twiga Loan",
  "Tausi Loan",
  "Mustard Asset Loan",
  "BIMA Loan",
  "Premium Loan",
  "Mobile Advance Loan",
  "MakeOver Loan",
];

const SOCIAL_LINKS = [
  { Icon: FaFacebookF,  href: "https://www.facebook.com/NSSFSacco?_rdc=1&_rdr#",                        label: "Facebook" },
  { Icon: FaXTwitter,   href: "https://x.com/SaccoNssf",                                                label: "Twitter/X" },
  { Icon: FaInstagram,  href: "https://www.instagram.com/nssf_sacco/",                                  label: "Instagram" },
  { Icon: FaLinkedinIn, href: "https://www.linkedin.com/company/nssf-sacco-society-limited/",           label: "LinkedIn" },
  { Icon: FaYoutube,    href: "https://www.youtube.com/channel/UCSYFlX4T6rdH-lndiQ4MQOA/",             label: "YouTube" },
];

const DEPT_CONTACTS = [
  { dept: "Credit Department",     note: "Loans, Deposit Contributions & Refunds",           tel: "+254 111 018 116" },
  { dept: "FOSA Department",       note: "FOSA Account Opening, EFTs, ATM, Pensions & Salary", tel: "+254 111 018 110" },
  { dept: "Finance Department",    note: "Receipts & Standing Orders",                        tel: "+254 111 018 106" },
  { dept: "Membership Enquiries",  note: "New SACCO Membership & Registrations",              tel: "+254 111 018 119" },
  { dept: "Registry",              note: "Membership Details & Next of Kin",                  tel: "+254 111 018 113" },
  { dept: "ICT Department",        note: "Mobile Banking & Member's Portal",                  tel: "+254 111 018 107" },
];

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white/80 mt-20">

      {/* ════════════════════════════════════════════════════════
          MAIN 4-COLUMN GRID
          Col 1 : Brand + Social
          Col 2 : BOSA / FOSA Loans + Useful Links
          Col 3 : Departmental Contacts
          Col 4 : Our Contacts  ← rightmost
      ════════════════════════════════════════════════════════ */}
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">

        {/* ── Col 1 : Brand + Social ── */}
        <div className="space-y-5">
          <Logo variant="light" />
          <p className="text-sm leading-relaxed text-white/70">
            A SASRA-regulated cooperative society serving members across Kenya with savings,
            credit and investment solutions since 1977.
          </p>
          <div className="flex items-center gap-2 text-xs">
            <ShieldCheck className="h-4 w-4 text-lime" />
            SASRA Licensed &amp; Regulated
          </div>

          {/* Social Icons */}
          <div className="flex flex-wrap items-center gap-2 pt-1">
            {SOCIAL_LINKS.map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep transition-colors"
              >
                <Icon className="h-3.5 w-3.5" />
              </a>
            ))}
          </div>
        </div>

        {/* ── Col 2 : Loans + Useful Links ── */}
        <div>
          <h4 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            BOSA Loans
          </h4>
          <ul className="space-y-1.5 text-sm">
            {BOSA_LOANS.map((loan) => (
              <li key={loan}>
                <Link to="/loans" className="hover:text-gold transition-colors">{loan}</Link>
              </li>
            ))}
          </ul>

          <h4 className="font-display text-white font-semibold mt-6 mb-4 text-sm uppercase tracking-wider">
            FOSA Loans
          </h4>
          <ul className="space-y-1.5 text-sm">
            {FOSA_LOANS.map((loan) => (
              <li key={loan}>
                <Link to="/loans" className="hover:text-gold transition-colors">{loan}</Link>
              </li>
            ))}
          </ul>

          <h4 className="font-display text-white font-semibold mt-6 mb-3 text-sm uppercase tracking-wider">
            Useful Links
          </h4>
          <ul className="space-y-1.5 text-sm">
            <li>
              <Link to="/join" className="hover:text-gold transition-colors">Application Forms</Link>
            </li>
            <li>
              <a
                href="https://www.facebook.com/NSSFSacco?_rdc=1&_rdr#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold transition-colors"
              >
                Reach us on Facebook
              </a>
            </li>
          </ul>
        </div>

        {/* ── Col 3 : Departmental Contacts ── */}
        <div>
          <h4 className="font-display text-white font-semibold mb-3 text-sm uppercase tracking-wider">
            Departmental Contacts
          </h4>
          <p className="text-[11px] text-white/50 mb-4 italic">
            Available Monday – Friday, 8:00 am – 5:00 pm.
          </p>
          <ul className="space-y-3">
            {DEPT_CONTACTS.map(({ dept, note, tel }, i) => (
              <li key={dept} className="flex gap-3 text-sm">
                <span className="flex-shrink-0 grid h-5 w-5 place-items-center rounded-full bg-gold/20 text-gold text-[11px] font-bold">
                  {i + 1}
                </span>
                <div>
                  <p className="text-white font-medium text-xs leading-snug">{dept}</p>
                  <p className="text-white/50 text-[11px] leading-snug">{note}</p>
                  <a
                    href={`tel:${tel.replace(/\s/g, "")}`}
                    className="text-gold hover:text-lime transition-colors font-mono text-[11px]"
                  >
                    {tel}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Col 4 : Our Contacts (rightmost) ── */}
        <div>
          <h4 className="font-display text-white font-semibold mb-4 text-sm uppercase tracking-wider">
            Our Contacts
          </h4>
          <ul className="space-y-3 text-sm text-white/75">
            <li className="flex gap-2 items-start">
              <MapPin className="h-4 w-4 shrink-0 text-gold mt-0.5" />
              <span className="text-[13px] leading-relaxed">
                NSSF SACCO Society Ltd<br />
                Social Security House,<br />
                Block 'C' Ground Floor, Bishops Road.<br />
                P.O. Box 43338-00100,<br />
                Nairobi, Kenya.
              </span>
            </li>
            <li className="flex gap-2 items-start">
              <Phone className="h-4 w-4 shrink-0 text-gold mt-0.5" />
              <span className="text-[13px] leading-relaxed">
                <a href="tel:+254111018100" className="hover:text-gold transition-colors block">+254 111 018 100</a>
                <a href="tel:+254202832939" className="hover:text-gold transition-colors block">+254 20 2832939</a>
              </span>
            </li>
            <li className="flex gap-2 items-center">
              <Mail className="h-4 w-4 shrink-0 text-gold" />
              <a href="mailto:info@nssfsacco.co.ke" className="text-[13px] hover:text-gold transition-colors">
                info@nssfsacco.co.ke
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <Globe className="h-4 w-4 shrink-0 text-gold" />
              <a
                href="https://www.nssfsacco.co.ke"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[13px] hover:text-gold transition-colors"
              >
                www.nssfsacco.co.ke
              </a>
            </li>
          </ul>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs flex flex-wrap justify-between gap-3 text-white/60">
          <span>© {new Date().getFullYear()} NSSF SACCO Society Limited. All rights reserved.</span>
          <span>
            Powered by{" "}
            <a
              href="https://wa.me/254701197759"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-lime transition-colors font-semibold"
            >
              PowerSpur Solutions
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
