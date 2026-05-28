import { Link } from "@tanstack/react-router";
import { LayoutDashboard, User, Wallet, HandCoins, ArrowLeftRight, TrendingUp, Sparkles, LifeBuoy, LogOut, Bell, Settings } from "lucide-react";
import { Logo } from "./Logo";

const NAV = [
  { to: "/portal", label: "Dashboard", Icon: LayoutDashboard, exact: true },
  { to: "/portal/profile", label: "My Profile", Icon: User },
  { to: "/portal/accounts", label: "Accounts", Icon: Wallet },
  { to: "/portal/loans", label: "Loans", Icon: HandCoins },
  { to: "/portal/transfers", label: "Transfer of Funds", Icon: ArrowLeftRight },
  { to: "/portal/investments", label: "Investments & Shares", Icon: TrendingUp },
  { to: "/portal/ai-assistant", label: "AI Loan Assistant", Icon: Sparkles, accent: true },
  { to: "/portal/support", label: "Support & Help", Icon: LifeBuoy },
  { to: "/portal/notifications", label: "Notifications", Icon: Bell, badge: 3 },
  { to: "/portal/settings", label: "Settings", Icon: Settings },
] as const;

export function PortalSidebar() {
  return (
    <aside className="sticky top-0 h-screen hidden lg:flex w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground">
      <div className="p-5 border-b border-sidebar-border bg-sidebar-accent">
        <Logo variant="light" />
      </div>
      <nav className="flex-1 overflow-y-auto p-3 space-y-1">
        {NAV.map(({ to, label, Icon, badge, accent, exact }: any) => (
          <Link
            key={to}
            to={to}
            activeOptions={{ exact }}
            activeProps={{ className: "bg-gold text-gold-foreground" }}
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-sidebar-accent transition-colors ${accent ? "text-gold" : ""}`}
          >
            <Icon className="h-4 w-4" />
            <span className="flex-1">{label}</span>
            {badge && <span className="grid h-5 w-5 place-items-center rounded-full bg-gold text-gold-foreground text-[10px] font-bold">{badge}</span>}
          </Link>
        ))}
      </nav>
      <div className="p-3 border-t border-sidebar-border">
        <Link to="/portal/login" className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium hover:bg-sidebar-accent">
          <LogOut className="h-4 w-4" /> Logout
        </Link>
      </div>
    </aside>
  );
}
