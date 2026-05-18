import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "HOME", to: "/" },
  { label: "ABOUT US", to: "/about" },
  { label: "PRODUCTS", to: "/products" },
  { label: "INSURANCE AGENCY", to: "/insurance" },
  { label: "MEDIA CENTRE", to: "/media" },
  { label: "CONTACT US", to: "/contact" },
  { label: "FAQs", to: "/faqs" },
  { label: "TENDERS", to: "/tenders" },
  { label: "APP", to: "/app" },
] as const;

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
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "glass border-b border-border shadow-card" : "bg-background"}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-6 py-3">
        <Logo />
        <nav className="hidden xl:flex items-center gap-1 text-[12.5px] font-semibold tracking-wide">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="relative px-3 py-2 text-foreground/80 hover:text-primary transition-colors"
              activeProps={{ className: "text-primary" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold">
            <Link to="/portal/login">MEMBER PORTAL</Link>
          </Button>
          <Button asChild size="sm" className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-glow">
            <Link to="/join">JOIN US</Link>
          </Button>
        </div>
        <button className="xl:hidden grid h-10 w-10 place-items-center rounded-md hover:bg-muted" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="mx-auto max-w-7xl px-4 py-4 grid gap-1 text-sm font-semibold">
            {NAV.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="px-3 py-2 rounded-md hover:bg-muted text-foreground/80" activeProps={{ className: "bg-primary-soft text-primary" }}>{n.label}</Link>
            ))}
            <div className="flex gap-2 pt-2">
              <Button asChild variant="outline" className="flex-1 border-primary text-primary"><Link to="/portal/login" onClick={() => setOpen(false)}>MEMBER PORTAL</Link></Button>
              <Button asChild className="flex-1 bg-gold text-gold-foreground"><Link to="/join" onClick={() => setOpen(false)}>JOIN US</Link></Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
