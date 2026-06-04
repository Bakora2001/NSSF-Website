import { useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { 
  Home, 
  Building2, 
  HandCoins, 
  Users, 
  User, 
  PieChart, 
  Coins, 
  FileCheck, 
  Clock, 
  Briefcase, 
  Tags, 
  Calculator, 
  Mail, 
  CheckSquare, 
  UserCheck, 
  FileText, 
  LogOut, 
  ChevronDown, 
  ChevronRight,
  Sparkles,
  LifeBuoy,
  Bell,
  Settings,
  TrendingUp,
  X
} from "lucide-react";
import { Logo } from "./Logo";
import { MOCK_MEMBER } from "@/lib/mock-data";

export function PortalSidebar({ isOpen, onClose }: { isOpen?: boolean; onClose?: () => void }) {
  const location = useLocation();
  const currentPath = location.pathname;

  // Track accordion states
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({
    shares: currentPath.includes("investments") || currentPath.includes("accounts"),
    loans: currentPath.includes("loans"),
    guarantors: currentPath.includes("guarantors") || (currentPath.includes("loans") && location.search.tab === "guarantors"),
    others: currentPath.includes("profile") || currentPath.includes("dividend-slip"),
  });

  const toggleMenu = (key: string) => {
    setOpenMenus((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <>
      {/* Mobile Drawer Backdrop */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs lg:hidden"
        />
      )}
      <aside className={`
        fixed inset-y-0 left-0 z-50 flex h-full w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground shadow-elegant border-r border-sidebar-border/20 transition-transform duration-300
        lg:sticky lg:top-0 lg:h-screen lg:translate-x-0
        ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}>
        
        {/* Brand Header */}
        <div className="p-5 border-b border-sidebar-border bg-sidebar-accent flex items-center justify-between gap-1">
          <Logo variant="light" />
          {onClose && (
            <button
              onClick={onClose}
              className="lg:hidden text-white/70 hover:text-white p-1 rounded-lg transition-colors"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>

        {/* Profile Card (matching top-left in the image) */}
        <div className="p-4 border-b border-sidebar-border/40 bg-sidebar-accent/50 flex items-center gap-3">
          <div className="h-10 w-10 rounded-full bg-gradient-hero border border-white/20 flex items-center justify-center font-display font-bold text-white text-sm">
            {MOCK_MEMBER.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
          </div>
          <div className="min-w-0">
            <div className="text-xs font-bold truncate text-white">{MOCK_MEMBER.name}</div>
            <div className="text-[10px] text-white/60 font-mono truncate">{MOCK_MEMBER.memberNo}</div>
          </div>
        </div>

        {/* Scrollable Navigation */}
        <nav 
          onClick={(e) => {
            if (onClose && (e.target as HTMLElement).closest("a")) {
              onClose();
            }
          }}
          className="flex-1 overflow-y-auto p-3 space-y-1"
        >
          
          {/* Home / Dashboard */}
          <Link
            to="/portal"
            activeOptions={{ exact: true }}
            activeProps={{ className: "bg-gold text-gold-foreground" }}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent transition-colors"
        >
          <Home className="h-4 w-4" />
          <span className="flex-1">Home</span>
        </Link>

        {/* 1. Shares and Savings Dropdown */}
        <div className="space-y-0.5">
          <button
            onClick={() => toggleMenu("shares")}
            className={`w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent transition-colors text-left ${
              openMenus.shares ? "text-gold bg-sidebar-accent/40" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <Building2 className="h-4 w-4" />
              <span>Shares and Savings</span>
            </div>
            {openMenus.shares ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
          </button>
          
          {openMenus.shares && (
            <div className="pl-6 pr-1 py-1 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
              <Link
                to="/portal/investments"
                search={{ tab: "share-capital" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("investments") && location.search.tab === "share-capital" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <PieChart className="h-3.5 w-3.5" />
                <span>Share Capital</span>
              </Link>
              <Link
                to="/portal/accounts"
                search={{ tab: "savings" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("accounts") && location.search.tab === "savings" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <Coins className="h-3.5 w-3.5" />
                <span>Normal Deposits</span>
              </Link>
              <Link
                to="/portal/accounts"
                search={{ tab: "all" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("accounts") && (location.search.tab === "all" || !location.search.tab) ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <Building2 className="h-3.5 w-3.5" />
                <span>Accounts</span>
              </Link>
            </div>
          )}
        </div>

        {/* Buy / Sell Shares Link */}
        <Link
          to="/portal/buy-sell-shares"
          activeProps={{ className: "bg-gold text-gold-foreground font-bold" }}
          className={`flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent transition-colors ${
            currentPath.includes("buy-sell-shares") ? "text-gold bg-sidebar-accent/40" : ""
          }`}
        >
          <TrendingUp className="h-4 w-4" />
          <span className="flex-1">Buy / Sell Shares</span>
          <span className="rounded-full bg-gold/20 text-gold text-[9px] px-1.5 py-0.5 font-bold uppercase tracking-wider">New</span>
        </Link>

        {/* 2. Loans Dropdown */}
        <div className="space-y-0.5">
          <button
            onClick={() => toggleMenu("loans")}
            className={`w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent transition-colors text-left ${
              openMenus.loans ? "text-gold bg-sidebar-accent/40" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <HandCoins className="h-4 w-4" />
              <span>Loans</span>
            </div>
            {openMenus.loans ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
          </button>

          {openMenus.loans && (
            <div className="pl-6 pr-1 py-1 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
              <Link
                to="/portal/loans"
                search={{ tab: "apply" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("loans") && location.search.tab === "apply" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <FileCheck className="h-3.5 w-3.5" />
                <span>Apply for a loan</span>
              </Link>
              <Link
                to="/portal/loans"
                search={{ tab: "pending" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("loans") && location.search.tab === "pending" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <Clock className="h-3.5 w-3.5" />
                <span>Loans Pending Approval</span>
              </Link>
              <Link
                to="/portal/loans"
                search={{ tab: "current" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("loans") && location.search.tab === "current" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <Coins className="h-3.5 w-3.5" />
                <span>Current Loans</span>
              </Link>
              <Link
                to="/portal/loans"
                search={{ tab: "cleared" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("loans") && location.search.tab === "cleared" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <Briefcase className="h-3.5 w-3.5" />
                <span>Cleared Loans</span>
              </Link>
              <Link
                to="/portal/loans"
                search={{ tab: "products" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("loans") && location.search.tab === "products" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <Tags className="h-3.5 w-3.5" />
                <span>Loan Products</span>
              </Link>
              <Link
                to="/portal/loans"
                search={{ tab: "calculator" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("loans") && location.search.tab === "calculator" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <Calculator className="h-3.5 w-3.5" />
                <span>Loan Calculator</span>
              </Link>
            </div>
          )}
        </div>

        {/* 3. Guarantors Dropdown */}
        <div className="space-y-0.5">
          <button
            onClick={() => toggleMenu("guarantors")}
            className={`w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent transition-colors text-left ${
              openMenus.guarantors ? "text-gold bg-sidebar-accent/40" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <Users className="h-4 w-4" />
              <span>Guarantors</span>
            </div>
            {openMenus.guarantors ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
          </button>

          {openMenus.guarantors && (
            <div className="pl-6 pr-1 py-1 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
              <Link
                to="/portal/loans"
                search={{ tab: "guarantors", subtab: "requests" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("loans") && location.search.tab === "guarantors" && location.search.subtab === "requests" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Guarantor Requests</span>
              </Link>
              <Link
                to="/portal/loans"
                search={{ tab: "guarantors", subtab: "commitments" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("loans") && location.search.tab === "guarantors" && location.search.subtab === "commitments" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <CheckSquare className="h-3.5 w-3.5" />
                <span>My Commitments</span>
              </Link>
              <Link
                to="/portal/loans"
                search={{ tab: "guarantors", subtab: "my-guarantors" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("loans") && location.search.tab === "guarantors" && location.search.subtab === "my-guarantors" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <UserCheck className="h-3.5 w-3.5" />
                <span>My Guarantors</span>
              </Link>
            </div>
          )}
        </div>

        {/* 4. Others Dropdown */}
        <div className="space-y-0.5">
          <button
            onClick={() => toggleMenu("others")}
            className={`w-full flex items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent transition-colors text-left ${
              openMenus.others ? "text-gold bg-sidebar-accent/40" : ""
            }`}
          >
            <div className="flex items-center gap-3">
              <User className="h-4 w-4" />
              <span>Others</span>
            </div>
            {openMenus.others ? <ChevronDown className="h-3.5 w-3.5" /> : <ChevronRight className="h-3.5 w-3.5" />}
          </button>

          {openMenus.others && (
            <div className="pl-6 pr-1 py-1 space-y-0.5 animate-in fade-in slide-in-from-top-1 duration-150">
              <Link
                to="/portal/investments"
                search={{ tab: "dividends" }}
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("investments") && location.search.tab === "dividends" ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <FileText className="h-3.5 w-3.5" />
                <span>Dividend Slip</span>
              </Link>
              <Link
                to="/portal/profile"
                className={`flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80 ${
                  currentPath.includes("profile") ? "text-gold font-bold bg-sidebar-accent/30" : ""
                }`}
              >
                <User className="h-3.5 w-3.5" />
                <span>Profile</span>
              </Link>
              <Link
                to="/portal/login"
                className="flex items-center gap-2.5 rounded-md px-3 py-1.5 text-xs font-medium hover:bg-sidebar-accent transition-colors text-white/80"
              >
                <LogOut className="h-3.5 w-3.5" />
                <span>Logout</span>
              </Link>
            </div>
          )}
        </div>

        {/* Separator */}
        <div className="h-px bg-sidebar-border/30 my-4" />

        {/* AI Assistant */}
        <Link
          to="/portal/ai-assistant"
          activeProps={{ className: "bg-gold text-gold-foreground font-bold" }}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-gold hover:bg-sidebar-accent transition-colors"
        >
          <Sparkles className="h-4 w-4" />
          <span className="flex-1">AI Loan Assistant</span>
          <span className="rounded-full bg-gold/20 text-gold text-[9px] px-1.5 py-0.5 font-bold uppercase tracking-wider">New</span>
        </Link>

        {/* Support */}
        <Link
          to="/portal/support"
          activeProps={{ className: "bg-gold text-gold-foreground font-bold" }}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent transition-colors"
        >
          <LifeBuoy className="h-4 w-4" />
          <span className="flex-1">Support & Help</span>
        </Link>

        {/* Notifications */}
        <Link
          to="/portal/notifications"
          activeProps={{ className: "bg-gold text-gold-foreground font-bold" }}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent transition-colors"
        >
          <Bell className="h-4 w-4" />
          <span className="flex-1">Notifications</span>
          <span className="grid h-5 w-5 place-items-center rounded-full bg-gold text-gold-foreground text-[10px] font-bold">3</span>
        </Link>

        {/* Settings */}
        <Link
          to="/portal/settings"
          activeProps={{ className: "bg-gold text-gold-foreground font-bold" }}
          className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent transition-colors"
        >
          <Settings className="h-4 w-4" />
          <span className="flex-1">Settings</span>
        </Link>

      </nav>

      {/* Lower Assistant Invite Card */}
      <div className="p-3 m-3 rounded-xl bg-sidebar-accent/40 border border-sidebar-border/30 flex flex-col gap-2.5 text-center">
        <div className="flex items-center gap-2 justify-center">
          <Sparkles className="h-4 w-4 text-gold animate-pulse" />
          <span className="text-xs font-bold text-white">Need Help?</span>
        </div>
        <p className="text-[10px] text-white/60 leading-normal">Chat with our AI Loan Assistant now to check your details.</p>
        <Link 
          to="/portal/ai-assistant" 
          className="w-full text-center bg-gold text-gold-foreground hover:bg-gold/90 py-1.5 rounded-lg text-xs font-bold transition-all"
        >
          Chat Now
        </Link>
      </div>

      {/* Footer logout */}
      <div 
        onClick={(e) => {
          if (onClose && (e.target as HTMLElement).closest("a")) {
            onClose();
          }
        }}
        className="p-3 border-t border-sidebar-border"
      >
        <Link to="/portal/login" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium hover:bg-sidebar-accent text-white/70 hover:text-white transition-colors">
          <LogOut className="h-4 w-4" /> Logout
        </Link>
      </div>
    </aside>
  </>
  );
}
