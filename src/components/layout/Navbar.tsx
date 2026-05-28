import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

type DropdownLink = { label: string; to: string };
type NavItem =
  | { label: string; to: string; dropdown?: never }
  | { label: string; to?: string; dropdown: DropdownLink[] };

const NAV: NavItem[] = [
  { label: "HOME", to: "/" },
  {
    label: "ABOUT US",
    dropdown: [
      { label: "Our Story",                to: "/our-story" },
      { label: "Leadership & Governance",  to: "/leadership" },
    ],
  },
  { label: "PRODUCTS",         to: "/products" },
  { label: "LOANS",            to: "/loans" },
  { label: "INSURANCE",        to: "/insurance" },
  { label: "MEDIA",            to: "/media" },
  { label: "TENDERS",          to: "/tenders" },
  { label: "CONTACT US",       to: "/contact" },
  { label: "FAQs",             to: "/faqs" },
];

/* ── Dropdown nav item ─────────────────────────────────────────────────── */
function NavDropdown({ item }: { item: { label: string; dropdown: DropdownLink[] } }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-colors flex items-center gap-1 font-semibold text-[12.5px] tracking-wide"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        {item.label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        />
      </button>

      {/* Dropdown panel */}
      {open && (
        <div className="absolute top-full left-0 mt-1 min-w-[220px] rounded-xl border border-border bg-white shadow-elegant overflow-hidden z-50"
             style={{ animation: "fadeSlideDown 0.15s ease" }}>
          {item.dropdown.map((d) => (
            <Link
              key={d.to}
              to={d.to}
              className="block px-5 py-3 text-sm text-foreground/80 hover:bg-primary hover:text-white transition-colors font-medium border-b border-border/40 last:border-0"
              onClick={() => setOpen(false)}
            >
              {d.label}
            </Link>
          ))}
        </div>
      )}

      <style>{`
        @keyframes fadeSlideDown {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

/* ── Main Navbar ───────────────────────────────────────────────────────── */
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

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-1 text-[12.5px] font-semibold tracking-wide">
          {NAV.map((n) =>
            n.dropdown ? (
              <NavDropdown key={n.label} item={{ label: n.label, dropdown: n.dropdown }} />
            ) : (
              <Link
                key={n.to}
                to={n.to!}
                className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-colors"
                activeProps={{ className: "text-primary" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA buttons */}
        <div className="hidden md:flex items-center gap-2">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold"
          >
            <Link to="/portal/login">MEMBER PORTAL</Link>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-glow"
          >
            <Link to="/join">JOIN US</Link>
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

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl px-4 py-4 grid gap-1 text-sm font-semibold">
            {NAV.map((n) =>
              n.dropdown ? (
                <div key={n.label}>
                  <p className="px-3 py-1 text-xs uppercase tracking-wider text-muted-foreground font-bold mt-1">
                    {n.label}
                  </p>
                  {n.dropdown.map((d) => (
                    <Link
                      key={d.to}
                      to={d.to}
                      onClick={() => setOpen(false)}
                      className="block pl-6 pr-3 py-2 rounded-md hover:bg-muted text-foreground/80"
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={n.to}
                  to={n.to!}
                  onClick={() => setOpen(false)}
                  className="px-3 py-2 rounded-md hover:bg-muted text-foreground/80"
                  activeProps={{ className: "bg-primary-soft text-primary" }}
                >
                  {n.label}
                </Link>
              )
            )}
            <div className="flex gap-2 pt-2">
              <Button asChild variant="outline" className="flex-1 border-primary text-primary">
                <Link to="/portal/login" onClick={() => setOpen(false)}>MEMBER PORTAL</Link>
              </Button>
              <Button asChild className="flex-1 bg-gold text-gold-foreground">
                <Link to="/join" onClick={() => setOpen(false)}>JOIN US</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
