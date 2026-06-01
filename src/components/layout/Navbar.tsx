import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronRight, CheckCircle2 } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

type DropdownLink = { label: string; to: string };
type NavItem =
  | { label: string; to: string; dropdown?: never; megaMenu?: never }
  | { label: string; to?: string; dropdown: DropdownLink[]; megaMenu?: never }
  | { label: string; to?: string; dropdown?: never; megaMenu: boolean };

const NAV: NavItem[] = [
  { label: "HOME", to: "/" },
  {
    label: "ABOUT US",
    dropdown: [
      { label: "Our Story",                to: "/our-story" },
      { label: "Leadership & Governance",  to: "/leadership" },
    ],
  },
  { label: "PRODUCTS", megaMenu: true },
  {
    label: "INSURANCE AGENCY",
    to: "/insurance",
    dropdown: [
      { label: "Insurance Products", to: "/insurance-products" },
    ],
  },
  { label: "CONTACT US",       to: "/contact" },
  { label: "MEMBER PORTAL",    to: "/portal/login" },
  { label: "FAQs",             to: "/faqs" },
  {
    label: "RESOURCES",
    dropdown: [
      { label: "News & Articles", to: "/resources/news" },
      { label: "Downloadable Forms", to: "/resources/forms" },
      { label: "Tenders", to: "/resources/tenders" },
      { label: "Careers & Vacancies", to: "/resources/careers" },
      { label: "Calculator", to: "/resources/calculator" },
    ],
  },
];

/* ─── Mega Menu Data Mapping ────────────────────────────────────────────── */
interface MegaMenuCategory {
  id: string;
  label: string;
  to: string;
  desc: string;
  subgroups: {
    title: string;
    links: { label: string; to: string }[];
  }[];
  promoCard: {
    title: string;
    subtitle: string;
    action: string;
    to: string;
  };
  benefitsTitle: string;
  benefits: string[];
}

const MEGA_PRODUCTS: MegaMenuCategory[] = [
  {
    id: "deposits",
    label: "Deposits Savings Account",
    to: "/products/deposits",
    desc: "A variety of savings options designed to help you save, grow and achieve your financial goals.",
    subgroups: [
      {
        title: "Deposit Accounts",
        links: [
          { label: "Normal Deposits", to: "/products/deposits" },
          { label: "Karo Deposits", to: "/products/deposits" },
          { label: "Flex Deposits", to: "/products/deposits" }
        ]
      },
      {
        title: "Withdrawable Deposits",
        links: [
          { label: "Jumbo Deposits", to: "/products/deposits" },
          { label: "Tausi Deposits", to: "/products/deposits" }
        ]
      },
      {
        title: "Non-Withdrawable Deposits",
        links: [
          { label: "Junior Akiba Deposits", to: "/products/deposits" },
          { label: "Mustard Asset Deposits", to: "/products/deposits" },
          { label: "Fixed Deposits", to: "/products/deposits" }
        ]
      }
    ],
    promoCard: {
      title: "Save Today Secure Tomorrow",
      subtitle: "Build your future with NSSF SACCO savings accounts.",
      action: "Learn More",
      to: "/products/deposits"
    },
    benefitsTitle: "Why Save With Us?",
    benefits: [
      "Competitive Interest Rates (Enjoy some of the best rates in the market.)",
      "Flexible Savings Options (Choose a plan that fits your lifestyle.)",
      "Secure & Regulated (Your deposits are safe and fully protected.)"
    ]
  },
  {
    id: "bosa-loans",
    label: "Bosa Loan Products",
    to: "/products/bosa-loans",
    desc: "Flexible development, short term and long term loan options at highly competitive rates.",
    subgroups: [
      {
        title: "Short Term Credits",
        links: [
          { label: "Emergency Loan", to: "/products/bosa-loans" },
          { label: "School Fees Loan", to: "/products/bosa-loans" },
          { label: "BIMA Loan", to: "/products/bosa-loans" }
        ]
      },
      {
        title: "Development & Flex",
        links: [
          { label: "Normal Loan (Development)", to: "/products/bosa-loans" },
          { label: "Special Flex Loan", to: "/products/bosa-loans" },
          { label: "Karo Loan", to: "/products/bosa-loans" },
          { label: "Refinancing Loan", to: "/products/bosa-loans" },
          { label: "Daraja Loan", to: "/products/bosa-loans" }
        ]
      },
      {
        title: "Premium & SLA",
        links: [
          { label: "Supersaver's Loan", to: "/products/bosa-loans" },
          { label: "Fanisi Loan", to: "/products/bosa-loans" },
          { label: "Nawiri Loan", to: "/products/bosa-loans" }
        ]
      }
    ],
    promoCard: {
      title: "Dream Big Achieve More",
      subtitle: "Access affordable loans with flexible tenure options.",
      action: "Learn More",
      to: "/products/bosa-loans"
    },
    benefitsTitle: "Why Borrow With Us?",
    benefits: [
      "Low Interest Rates (Charges from 12% to 15% p.a. on reducing balance.)",
      "High Loan Multipliers (Access up to 3x, 4x, or 5x your savings.)",
      "Guarantor Networks (Durable structures to secure your credit needs.)"
    ]
  },
  {
    id: "fosa-savings",
    label: "FOSA Savings Account",
    to: "/products/fosa-savings",
    desc: "Front Office transactional accounts for mobile access and salary point administration.",
    subgroups: [
      {
        title: "Transactional",
        links: [
          { label: "FOSA Jumbo Savings Account", to: "/products/fosa-savings" },
          { label: "Pamoja Savings (Chama)", to: "/products/fosa-savings" }
        ]
      },
      {
        title: "Targeted Schemes",
        links: [
          { label: "Tausi Savings Account", to: "/products/fosa-savings" },
          { label: "Junior Akiba", to: "/products/fosa-savings" },
          { label: "Johari Holiday Savings", to: "/products/fosa-savings" }
        ]
      },
      {
        title: "Retirement & Fixed",
        links: [
          { label: "Mustard Savings Account", to: "/products/fosa-savings" },
          { label: "Fixed Deposit & Call Account", to: "/products/fosa-savings" }
        ]
      }
    ],
    promoCard: {
      title: "Smart Transactional Channels",
      subtitle: "Access salaries, dividends, and ATM networks instantly.",
      action: "Learn More",
      to: "/products/fosa-savings"
    },
    benefitsTitle: "Why FOSA Accounts?",
    benefits: [
      "ATM / POS Networks (VISA-branded cards for shopping and withdrawing.)",
      "Instant Mobile Banking (Full dial prompts via *477# on your phone.)",
      "High Competitive Returns (Earn annual interest on your FOSA balances.)"
    ]
  },
  {
    id: "fosa-loans",
    label: "FOSA Loan Products",
    to: "/products/fosa-loans",
    desc: "Quick salary advances and mobile microloans credited straight to your FOSA account.",
    subgroups: [
      {
        title: "Salary Linked",
        links: [
          { label: "Salary Advance Loan", to: "/products/fosa-loans" },
          { label: "Jumbo Loan", to: "/products/fosa-loans" },
          { label: "Premium Loan", to: "/products/fosa-loans" }
        ]
      },
      {
        title: "Instant Credits",
        links: [
          { label: "Mobile Advance Loan", to: "/products/fosa-loans" },
          { label: "BIMA Loan", to: "/products/fosa-loans" }
        ]
      },
      {
        title: "Special Projects",
        links: [
          { label: "FOSA Twiga Loan", to: "/products/fosa-loans" },
          { label: "Mustard Asset Loan", to: "/products/fosa-loans" },
          { label: "MakeOver Loan", to: "/products/fosa-loans" }
        ]
      }
    ],
    promoCard: {
      title: "Mobile Advance Loans",
      subtitle: "Access up to KES 100,000 without guarantors instantly.",
      action: "Learn More",
      to: "/products/fosa-loans"
    },
    benefitsTitle: "Why FOSA Credits?",
    benefits: [
      "Zero Guarantors Needed (Mobile advance issued instantly on prompt repayment.)",
      "Speedy Processing SLAs (Immediate disbursement on mobile advance.)",
      "Low Operational Margins (Low processing and check-off fees.)"
    ]
  },
  {
    id: "islamic-finance",
    label: "Islamic Finance Products",
    to: "/products/islamic-finance",
    desc: "Shariah-compliant savings and share investment models based on Sukuk structures.",
    subgroups: [
      {
        title: "Core Share Capital",
        links: [
          { label: "Barakaat Share Capital", to: "/products/islamic-finance" }
        ]
      },
      {
        title: "Shariah Certificates",
        links: [
          { label: "Musharakah Sukuk Certificate", to: "/products/islamic-finance" }
        ]
      }
    ],
    promoCard: {
      title: "Ethical Shariah Banking",
      subtitle: "Musharakah joint ownership model for interest-free shares.",
      action: "Learn More",
      to: "/products/islamic-finance"
    },
    benefitsTitle: "Why Islamic Finance?",
    benefits: [
      "Musharakah Sukuk Model (100% Shariah Compliant contracts.)",
      "Transparent Profit Shares (Cooperative profit splits under Shariah principles.)",
      "Open to All Members (Ethical investments for everyone.)"
    ]
  },
  {
    id: "financial-services",
    label: "Financial Services",
    to: "/products/financial-services",
    desc: "Cooperative bank agency services, travel tours, and third party clearance at FOSA.",
    subgroups: [
      {
        title: "Agencies & Halls",
        links: [
          { label: "Co-op Bank Agency", to: "/products/financial-services" },
          { label: "Equity Bank Agency", to: "/products/financial-services" },
          { label: "KCB Bank Agency", to: "/products/financial-services" }
        ]
      },
      {
        title: "Clearing & Transfers",
        links: [
          { label: "EFT / RTGS Transfers", to: "/products/financial-services" },
          { label: "Third Party Cheque Clearance", to: "/products/financial-services" },
          { label: "Salary Pay Point Processing", to: "/products/financial-services" }
        ]
      },
      {
        title: "Travels & Insurance",
        links: [
          { label: "Sacco Holiday Trips", to: "/products/financial-services" },
          { label: "Nassefu Insurance Agency", to: "/products/financial-services" }
        ]
      }
    ],
    promoCard: {
      title: "One-Stop Financial Hub",
      subtitle: "Access banking, transfers, holiday trips, and insurance covers.",
      action: "Learn More",
      to: "/products/financial-services"
    },
    benefitsTitle: "Why Our Services?",
    benefits: [
      "Complete SLA TAT Table (Track turn-around-times from 1 hour to 2 days.)",
      "Subsidized Holiday Travels (Annual getaways to Dubai, Thailand, or Maasai Mara.)",
      "Agency Hall Conveniences (Full transactions for major commercial banks.)"
    ]
  }
];

/* ─── ABOUT US Dropdown Component with Hover Delay ───────────────────────── */
function NavDropdown({ item }: { item: { label: string; to?: string; dropdown: DropdownLink[] } }) {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 500); // 500ms delay so user can move to dropdown
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const triggerClasses = `relative px-3 py-2 xl:px-2 2xl:px-3 transition-colors flex items-center gap-1 font-semibold text-[12.5px] tracking-wide whitespace-nowrap ${
    open ? "text-primary" : "text-foreground/80 hover:text-primary"
  }`;

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {item.to ? (
        <Link
          to={item.to}
          className={triggerClasses}
          activeProps={{ className: "text-primary" }}
        >
          {item.label}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </Link>
      ) : (
        <button
          className={triggerClasses}
        >
          {item.label}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          />
        </button>
      )}

      {open && (
        <div
          className="absolute top-full left-0 mt-1 min-w-[220px] rounded-xl border border-border bg-white shadow-elegant overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {item.dropdown.map((d) => (
            <Link
              key={d.to}
              to={d.to}
              className="block px-5 py-3 text-xs text-foreground/80 hover:bg-primary hover:text-white transition-colors font-bold border-b border-border/40 last:border-0"
              onClick={() => setOpen(false)}
            >
              {d.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

/* ─── PRODUCTS Mega Dropdown Component with Hover Delay ──────────────────── */
function ProductsMegaDropdown() {
  const [open, setOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("deposits");
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpen(false);
    }, 500); // 500ms delay so user can navigate to dropdown
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const activeCategory = MEGA_PRODUCTS.find((c) => c.id === activeTab) || MEGA_PRODUCTS[0];

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        className={`relative px-3 py-2 xl:px-2 2xl:px-3 transition-colors flex items-center gap-1 font-semibold text-[12.5px] tracking-wide whitespace-nowrap ${
          open ? "text-primary" : "text-foreground/80 hover:text-primary"
        }`}
      >
        PRODUCTS
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div
          className="absolute left-1/2 -translate-x-[42%] top-full mt-1 w-[960px] max-w-[96vw] rounded-3xl border border-border bg-white shadow-elegant overflow-hidden z-50 grid grid-cols-[230px_1fr] gap-0 animate-in fade-in slide-in-from-top-4 duration-200"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Left Vertical Options Sidebar */}
          <div className="bg-muted/30 border-r border-border p-4 flex flex-col gap-1">
            <p className="px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-widest text-muted-foreground mb-1">
              Main Products
            </p>
            {MEGA_PRODUCTS.map((cat) => (
              <Link
                key={cat.id}
                to={cat.to}
                onMouseEnter={() => setActiveTab(cat.id)}
                onClick={() => setOpen(false)}
                className={`w-full text-left rounded-xl px-4 py-3 text-xs font-bold transition-all flex items-center justify-between ${
                  activeTab === cat.id
                    ? "bg-[#286d65] text-white shadow-sm"
                    : "text-foreground/80 hover:bg-muted"
                }`}
              >
                <span>{cat.label}</span>
                <ChevronRight className={`h-4 w-4 opacity-80 ${activeTab === cat.id ? "translate-x-0.5" : ""}`} />
              </Link>
            ))}
          </div>

          {/* Right Detailed Content Grid */}
          <div className="p-6 grid grid-cols-[1fr_260px] gap-6 bg-white max-h-[460px] overflow-y-auto">
            
            {/* Center: Title + subgroups */}
            <div className="space-y-6">
              <div>
                <h3 className="font-display font-extrabold text-base text-foreground mb-1">{activeCategory.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed max-w-lg">{activeCategory.desc}</p>
              </div>

              {/* Sub-groups columns */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-border/50">
                {activeCategory.subgroups.map((group, idx) => (
                  <div key={idx} className="space-y-2.5">
                    <h4 className="text-[10px] font-extrabold uppercase tracking-wider text-[#286d65]">
                      {group.title}
                    </h4>
                    <ul className="space-y-1.5">
                      {group.links.map((link, i) => (
                        <li key={i}>
                          <Link
                            to={link.to}
                            onClick={() => setOpen(false)}
                            className="text-[11px] text-muted-foreground hover:text-[#286d65] font-bold block transition-colors leading-tight"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side Cards */}
            <div className="space-y-4 border-l border-border/50 pl-6 flex flex-col justify-between">
              {/* Plant Promo Card */}
              <div className="rounded-2xl bg-[#286d65] text-white p-4 space-y-2 relative overflow-hidden flex-1 flex flex-col justify-between">
                <div className="absolute right-0 bottom-0 opacity-10 translate-x-4 translate-y-4">
                  <Logo variant="light" />
                </div>
                <div>
                  <h4 className="text-xs font-extrabold tracking-wide">{activeCategory.promoCard.title}</h4>
                  <p className="text-[10px] text-white/80 leading-normal mt-1">{activeCategory.promoCard.subtitle}</p>
                </div>
                <Link
                  to={activeCategory.promoCard.to}
                  onClick={() => setOpen(false)}
                  className="inline-block mt-3 text-center rounded-xl bg-white px-3 py-1.5 text-[10px] font-bold text-[#286d65] hover:bg-white/90 transition-all uppercase tracking-wider w-full"
                >
                  {activeCategory.promoCard.action}
                </Link>
              </div>

              {/* Benefits Checklist */}
              <div className="space-y-2">
                <p className="text-[9.5px] font-extrabold uppercase tracking-widest text-[#286d65]">
                  {activeCategory.benefitsTitle}
                </p>
                <div className="space-y-1.5">
                  {activeCategory.benefits.map((benefit, i) => (
                    <div key={i} className="flex gap-1.5 items-start text-[9.5px] text-muted-foreground leading-snug">
                      <CheckCircle2 className="h-3.5 w-3.5 text-[#a1d862] shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        </div>
      )}
    </div>
  );
}

/* ─── Main Navbar ───────────────────────────────────────────────────────── */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "glass border-b border-border shadow-card" : "bg-background"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-6 py-3">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden xl:flex items-center gap-1 xl:gap-0.5 2xl:gap-1.5 text-[12.5px] font-semibold tracking-wide">
          {NAV.map((n) => {
            if (n.dropdown) {
              return <NavDropdown key={n.label} item={{ label: n.label, to: n.to, dropdown: n.dropdown }} />;
            }
            if (n.megaMenu) {
              return <ProductsMegaDropdown key={n.label} />;
            }
            return (
              <Link
                key={n.to}
                to={n.to!}
                className="relative px-3 py-2 xl:px-2 2xl:px-3 text-foreground/80 hover:text-primary transition-colors whitespace-nowrap"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Buttons — Join Us / Login + APP side by side */}
        <div className="hidden xl:flex items-center gap-2 xl:gap-1.5 2xl:gap-2.5">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="border-[#286d65] text-[#286d65] hover:bg-[#286d65] hover:text-white font-extrabold uppercase px-4 py-2 rounded-full text-[11px] tracking-wider shadow-sm transition-all whitespace-nowrap"
          >
            <Link to="/join">JOIN US / LOGIN</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-[#F5B83C] hover:bg-[#e2a82b] text-[#286d65] font-extrabold uppercase px-5 py-2 rounded-full text-[11px] tracking-wider shadow-sm transition-all"
          >
            <Link to="/app">APP</Link>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden grid h-10 w-10 place-items-center rounded-md hover:bg-muted"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="xl:hidden border-t border-border bg-background max-h-[85vh] overflow-y-auto">
          <nav className="mx-auto max-w-7xl px-4 py-4 grid gap-1 text-sm font-semibold">
            {NAV.map((n) => {
              if (n.dropdown) {
                return (
                  <div key={n.label}>
                    {n.to ? (
                      <Link
                        to={n.to}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground font-bold mt-1 hover:text-primary transition-colors"
                      >
                        {n.label}
                      </Link>
                    ) : (
                      <p className="px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground font-bold mt-1">
                        {n.label}
                      </p>
                    )}
                    {n.dropdown.map((d) => (
                      <Link
                        key={d.to}
                        to={d.to}
                        onClick={() => setOpen(false)}
                        className="block pl-6 pr-3 py-2 rounded-md hover:bg-muted text-foreground/80 font-bold"
                      >
                        {d.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              if (n.megaMenu) {
                return (
                  <div key={n.label}>
                    <p className="px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground font-bold mt-1">
                      {n.label}
                    </p>
                    {MEGA_PRODUCTS.map((p) => (
                      <Link
                        key={p.id}
                        to={p.to}
                        onClick={() => setOpen(false)}
                        className="block pl-6 pr-3 py-2 rounded-md hover:bg-muted text-foreground/80 font-bold"
                      >
                        {p.label}
                      </Link>
                    ))}
                  </div>
                );
              }
              return (
                <Link
                  key={n.to}
                  to={n.to!}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-muted text-foreground/80"
                  activeProps={{ className: "bg-primary-soft text-primary" }}
                >
                  {n.label}
                </Link>
              );
            })}
            
            <div className="grid gap-2 pt-4 border-t border-border/40 mt-2">
              <div className="flex gap-2">
                <Button asChild variant="outline" className="flex-1 border-primary text-primary">
                  <Link to="/portal/login" onClick={() => setOpen(false)}>LOGIN</Link>
                </Button>
                <Button asChild className="flex-1 bg-[#286d65] hover:bg-[#286d65]/90 text-white">
                  <Link to="/join" onClick={() => setOpen(false)}>JOIN US</Link>
                </Button>
              </div>
              <Button asChild className="w-full bg-[#F5B83C] hover:bg-[#e2a82b] text-[#286d65] font-bold">
                <Link to="/app" onClick={() => setOpen(false)}>DOWNLOAD MOBILE APP</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
