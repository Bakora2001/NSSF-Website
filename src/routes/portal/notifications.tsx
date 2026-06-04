import { createFileRoute } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { useState } from "react";
import {
  Bell, CheckCircle, HandCoins, TrendingUp, Settings, X,
  AlertCircle, Info, CheckSquare, Filter, RefreshCw, Sparkles,
  DollarSign, Users, FileText, Clock
} from "lucide-react";

export const Route = createFileRoute("/portal/notifications")({
  head: () => ({ meta: [{ title: "Notifications — NSSF SACCO Portal" }] }),
  component: Page,
});

interface Notification {
  id: string;
  type: "loan" | "shares" | "system" | "dividend" | "guarantor";
  title: string;
  message: string;
  time: string;
  read: boolean;
  icon: "loan" | "shares" | "system" | "dividend" | "guarantor" | "alert";
}

const INITIAL_NOTIFICATIONS: Notification[] = [
  { id: "N001", type: "loan", title: "Loan Application Approved", message: "Your Karo Loan application of KES 250,000 has been approved. Disbursement will be processed within 2 business days.", time: "2 hours ago", read: false, icon: "loan" },
  { id: "N002", type: "shares", title: "Bid Accepted", message: "Your bid of KES 117/share for 500 shares from Mary Wanjiku has been accepted. Proceed to complete payment.", time: "3 hours ago", read: false, icon: "shares" },
  { id: "N003", type: "dividend", title: "Dividend Credited", message: "A dividend of KES 12,400 has been credited to your FOSA account for the Q1 2025 period.", time: "1 day ago", read: false, icon: "dividend" },
  { id: "N004", type: "guarantor", title: "Guarantor Request", message: "James Kariuki (NSSF/112233) has requested you to be a guarantor for their Development Loan application of KES 180,000.", time: "2 days ago", read: true, icon: "guarantor" },
  { id: "N005", type: "system", title: "System Maintenance Notice", message: "The portal will undergo scheduled maintenance on Saturday, June 7th from 11 PM to 2 AM EAT. Some features may be unavailable.", time: "3 days ago", read: true, icon: "system" },
  { id: "N006", type: "loan", title: "Loan Repayment Due", message: "Your Emergency Loan repayment of KES 8,560 is due on June 1st, 2025. Ensure sufficient funds in your account.", time: "4 days ago", read: true, icon: "alert" },
  { id: "N007", type: "shares", title: "New Share Listing", message: "A new listing of 1,000 shares at KES 115/share is now available. View it in the Buy/Sell Shares section.", time: "5 days ago", read: true, icon: "shares" },
  { id: "N008", type: "dividend", title: "Annual Statement Ready", message: "Your 2024 Annual Statement is ready for download. View it in the Accounts section.", time: "1 week ago", read: true, icon: "dividend" },
  { id: "N009", type: "system", title: "Profile Updated", message: "Your profile information was successfully updated. If you did not make this change, please contact support immediately.", time: "1 week ago", read: true, icon: "system" },
  { id: "N010", type: "loan", title: "Cleared Loan Confirmation", message: "Congratulations! Your School Fees Loan has been fully cleared. Your loan account is now closed.", time: "2 weeks ago", read: true, icon: "loan" },
];

const TYPE_ICONS = {
  loan: <HandCoins className="h-5 w-5 text-blue-500" />,
  shares: <TrendingUp className="h-5 w-5 text-emerald-500" />,
  system: <Settings className="h-5 w-5 text-gray-500" />,
  dividend: <DollarSign className="h-5 w-5 text-amber-500" />,
  guarantor: <Users className="h-5 w-5 text-purple-500" />,
  alert: <AlertCircle className="h-5 w-5 text-rose-500" />,
};

const TYPE_BG = {
  loan: "bg-blue-50 dark:bg-blue-950/20 border-blue-100 dark:border-blue-900",
  shares: "bg-emerald-50 dark:bg-emerald-950/20 border-emerald-100 dark:border-emerald-900",
  system: "bg-gray-50 dark:bg-muted/20 border-gray-100 dark:border-border",
  dividend: "bg-amber-50 dark:bg-amber-950/20 border-amber-100 dark:border-amber-900",
  guarantor: "bg-purple-50 dark:bg-purple-950/20 border-purple-100 dark:border-purple-900",
  alert: "bg-rose-50 dark:bg-rose-950/20 border-rose-100 dark:border-rose-900",
};

function Page() {
  const [notifications, setNotifications] = useState<Notification[]>(INITIAL_NOTIFICATIONS);
  const [activeFilter, setActiveFilter] = useState<"all" | "unread" | "loan" | "shares" | "system" | "dividend" | "guarantor">("all");

  const unreadCount = notifications.filter(n => !n.read).length;

  const filtered = notifications.filter(n => {
    if (activeFilter === "all") return true;
    if (activeFilter === "unread") return !n.read;
    return n.type === activeFilter;
  });

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
  };

  const markRead = (id: string) => {
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  };

  const dismiss = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <PortalLayout>
      {/* Header */}
      <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="font-display text-2xl font-extrabold flex items-center gap-3">
            <Bell className="h-7 w-7 text-primary" />
            Notifications
            {unreadCount > 0 && (
              <span className="h-7 min-w-7 px-2 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                {unreadCount}
              </span>
            )}
          </h1>
          <p className="text-sm text-muted-foreground mt-1">Stay up to date with your account activity and alerts.</p>
        </div>
        <div className="flex gap-2">
          {unreadCount > 0 && (
            <button
              onClick={markAllRead}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card hover:border-primary text-sm font-semibold transition-colors"
            >
              <CheckSquare className="h-4 w-4" /> Mark All Read
            </button>
          )}
          <button className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-card hover:border-primary text-sm font-semibold transition-colors">
            <RefreshCw className="h-4 w-4" /> Refresh
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 mb-6">
        {[
          { key: "all", label: "All", count: notifications.length },
          { key: "unread", label: "Unread", count: unreadCount },
          { key: "loan", label: "Loans", count: notifications.filter(n => n.type === "loan").length },
          { key: "shares", label: "Shares", count: notifications.filter(n => n.type === "shares").length },
          { key: "dividend", label: "Dividends", count: notifications.filter(n => n.type === "dividend").length },
          { key: "guarantor", label: "Guarantors", count: notifications.filter(n => n.type === "guarantor").length },
          { key: "system", label: "System", count: notifications.filter(n => n.type === "system").length },
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveFilter(tab.key as typeof activeFilter)}
            className={`flex items-center gap-1.5 whitespace-nowrap px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
              activeFilter === tab.key
                ? "bg-primary text-primary-foreground shadow-md"
                : "border border-border bg-card hover:border-primary text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {tab.count > 0 && (
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${
                activeFilter === tab.key ? "bg-white/20" : "bg-muted"
              }`}>{tab.count}</span>
            )}
          </button>
        ))}
      </div>

      {/* Notification List */}
      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-border bg-card p-16 text-center">
          <Bell className="h-14 w-14 mx-auto text-muted-foreground/30 mb-4" />
          <h3 className="font-display font-bold text-xl mb-2">All Clear!</h3>
          <p className="text-muted-foreground text-sm">No notifications in this category.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map(n => (
            <div
              key={n.id}
              className={`relative rounded-2xl border p-5 transition-all ${TYPE_BG[n.icon as keyof typeof TYPE_BG] || TYPE_BG.system} ${
                !n.read ? "shadow-md" : "opacity-80"
              }`}
            >
              {!n.read && (
                <div className="absolute top-5 left-5 h-2 w-2 rounded-full bg-primary" />
              )}
              <div className="flex items-start gap-4 pl-4">
                <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${
                  !n.read ? "bg-white dark:bg-card shadow" : "bg-white/60 dark:bg-card/50"
                }`}>
                  {TYPE_ICONS[n.icon as keyof typeof TYPE_ICONS] || TYPE_ICONS.system}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className={`font-display font-bold text-sm ${!n.read ? "text-foreground" : "text-muted-foreground"}`}>
                        {n.title}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1 leading-relaxed">{n.message}</div>
                      <div className="flex items-center gap-3 mt-2">
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Clock className="h-3 w-3" /> {n.time}
                        </span>
                        <span className={`text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full ${
                          n.type === "loan" ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300" :
                          n.type === "shares" ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300" :
                          n.type === "dividend" ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300" :
                          n.type === "guarantor" ? "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300" :
                          "bg-gray-100 text-gray-600 dark:bg-gray-900/40 dark:text-gray-400"
                        }`}>
                          {n.type}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 shrink-0">
                      {!n.read && (
                        <button
                          onClick={() => markRead(n.id)}
                          className="p-1.5 rounded-lg hover:bg-white/50 dark:hover:bg-card/50 transition-colors"
                          title="Mark as read"
                        >
                          <CheckCircle className="h-4 w-4 text-emerald-500" />
                        </button>
                      )}
                      <button
                        onClick={() => dismiss(n.id)}
                        className="p-1.5 rounded-lg hover:bg-white/50 dark:hover:bg-card/50 transition-colors"
                        title="Dismiss"
                      >
                        <X className="h-4 w-4 text-muted-foreground" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* AI-powered Tip */}
      <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-5 flex items-start gap-4">
        <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center shrink-0">
          <Sparkles className="h-5 w-5 text-primary" />
        </div>
        <div>
          <div className="font-bold text-sm mb-1">AI Insight</div>
          <p className="text-sm text-muted-foreground">
            You have <strong className="text-foreground">{unreadCount} unread</strong> notification{unreadCount !== 1 ? "s" : ""}.
            {unreadCount > 0 && " Your loan repayment is due soon — ensure your FOSA account is funded to avoid penalties."}
            {unreadCount === 0 && " Great job staying on top of your account activity!"}
          </p>
        </div>
      </div>
    </PortalLayout>
  );
}
