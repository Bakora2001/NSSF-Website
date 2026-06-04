import { createFileRoute } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { Settings, Shield, Bell, KeyRound, Globe, Palette } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/portal/settings")({
  head: () => ({ meta: [{ title: "Settings — NSSF SACCO Portal" }] }),
  component: Page,
});

function Page() {
  const [activeTab, setActiveTab] = useState("profile-settings");

  return (
    <PortalLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-extrabold flex items-center gap-3">
          <Settings className="h-7 w-7 text-primary" /> Settings
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your account settings and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border/60 mb-6 overflow-x-auto whitespace-nowrap scrollbar-none">
        {[
          { id: "profile-settings", label: "Profile Settings" },
          { id: "security", label: "Security" },
          { id: "notifications", label: "Notifications" },
          { id: "preferences", label: "Preferences" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-5 py-3 text-xs font-bold transition-all border-b-2 ${
              activeTab === tab.id
                ? "border-primary text-primary"
                : "border-transparent text-muted-foreground hover:text-primary"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {activeTab === "profile-settings" && (
        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* Settings Options */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card space-y-5">
              <h3 className="font-display font-bold text-foreground text-sm uppercase tracking-wider mb-2">General Preferences</h3>

              {/* Language */}
              <div className="flex items-center justify-between text-xs py-2 border-b border-border/40">
                <div>
                  <div className="font-bold text-foreground flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> Language</div>
                  <div className="text-muted-foreground text-[10px] mt-0.5">Select your preferred system language</div>
                </div>
                <select className="rounded-lg border border-border bg-white px-3 py-1.5 font-semibold text-foreground focus:outline-none focus:border-primary">
                  <option>English</option>
                  <option>Kiswahili</option>
                </select>
              </div>

              {/* Currency */}
              <div className="flex items-center justify-between text-xs py-2 border-b border-border/40">
                <div>
                  <div className="font-bold text-foreground flex items-center gap-2"><Globe className="h-4 w-4 text-primary" /> Currency</div>
                  <div className="text-muted-foreground text-[10px] mt-0.5">Display currency for values and statements</div>
                </div>
                <select className="rounded-lg border border-border bg-white px-3 py-1.5 font-semibold text-foreground focus:outline-none focus:border-primary">
                  <option>KES - Kenyan Shilling</option>
                  <option>USD - US Dollar</option>
                </select>
              </div>

              {/* Theme */}
              <div className="flex items-center justify-between text-xs py-2 border-b border-border/40">
                <div>
                  <div className="font-bold text-foreground flex items-center gap-2"><Palette className="h-4 w-4 text-primary" /> Theme</div>
                  <div className="text-muted-foreground text-[10px] mt-0.5">Toggle between light and dark modes</div>
                </div>
                <select className="rounded-lg border border-border bg-white px-3 py-1.5 font-semibold text-foreground focus:outline-none focus:border-primary">
                  <option>Light</option>
                  <option>Dark</option>
                </select>
              </div>

              {/* Email Notifications */}
              <div className="flex items-center justify-between text-xs py-2 border-b border-border/40">
                <div>
                  <div className="font-bold text-foreground flex items-center gap-2"><Bell className="h-4 w-4 text-primary" /> Email Notifications</div>
                  <div className="text-muted-foreground text-[10px] mt-0.5">Receive monthly e-statements and alerts</div>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary" />
              </div>

              {/* SMS Notifications */}
              <div className="flex items-center justify-between text-xs py-2 border-b border-border/40">
                <div>
                  <div className="font-bold text-foreground flex items-center gap-2"><Bell className="h-4 w-4 text-primary" /> SMS / Mobile Alerts</div>
                  <div className="text-muted-foreground text-[10px] mt-0.5">Receive transactional texts and OTPs</div>
                </div>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary" />
              </div>

              {/* Marketing */}
              <div className="flex items-center justify-between text-xs py-2">
                <div>
                  <div className="font-bold text-foreground flex items-center gap-2"><Bell className="h-4 w-4 text-primary" /> Marketing Communications</div>
                  <div className="text-muted-foreground text-[10px] mt-0.5">Receive product updates and newsletters</div>
                </div>
                <input type="checkbox" className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary accent-primary" />
              </div>

            </div>
          </div>

          {/* Change Password side card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card space-y-4 text-xs">
              <h3 className="font-display font-bold text-foreground text-sm flex items-center gap-2"><KeyRound className="h-4 w-4 text-primary" /> Change Password</h3>
              <div className="space-y-1.5">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Current Password</label>
                <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-border px-3.5 py-2.5 font-semibold text-foreground focus:outline-none focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">New Password</label>
                <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-border px-3.5 py-2.5 font-semibold text-foreground focus:outline-none focus:border-primary" />
              </div>
              <div className="space-y-1.5">
                <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground">Confirm New Password</label>
                <input type="password" placeholder="••••••••" className="w-full rounded-xl border border-border px-3.5 py-2.5 font-semibold text-foreground focus:outline-none focus:border-primary" />
              </div>
              <button className="w-full mt-4 rounded-xl bg-primary text-primary-foreground hover:bg-primary-deep py-2.5 text-xs font-bold uppercase tracking-wider transition-all">
                Update Password
              </button>
            </div>
          </div>

        </div>
      )}

      {activeTab === "security" && (
        <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
          <Shield className="h-10 w-10 mx-auto text-primary mb-3" />
          <h2 className="font-display font-bold text-lg">Security & MFA Settings</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            Configure Multi-Factor Authentication (SMS OTP, Email verification, or Authenticator app codes).
          </p>
        </div>
      )}

      {activeTab === "notifications" && (
        <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
          <Bell className="h-10 w-10 mx-auto text-primary mb-3" />
          <h2 className="font-display font-bold text-lg">Notification History</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            View logs of all emails, transactional SMS, and portal alerts dispatched to your accounts.
          </p>
        </div>
      )}

      {activeTab === "preferences" && (
        <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
          <Settings className="h-10 w-10 mx-auto text-primary mb-3" />
          <h2 className="font-display font-bold text-lg">System Preferences</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            Manage session timeouts, biometric logins, offline dashboard modes, and analytics shares.
          </p>
        </div>
      )}
    </PortalLayout>
  );
}
