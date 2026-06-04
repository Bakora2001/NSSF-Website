import { useState } from "react";
import { PortalSidebar } from "./PortalSidebar";
import { ChatAssistant } from "@/components/ai/ChatAssistant";
import { Bell, Search, Menu } from "lucide-react";
import { MOCK_MEMBER } from "@/lib/mock-data";

export function PortalLayout({ children }: { children: React.ReactNode }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-secondary/30">
      <PortalSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1 flex flex-col min-w-0">
        <header className="sticky top-0 z-30 bg-card border-b border-border">
          <div className="flex items-center justify-between gap-4 px-5 py-3">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-muted text-foreground transition-colors shrink-0 mr-1"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-2 flex-1 max-w-md">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input placeholder="Search transactions, loans…" className="w-full rounded-lg border border-input bg-background pl-9 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-ring" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative grid h-9 w-9 place-items-center rounded-lg hover:bg-muted">
                <Bell className="h-4 w-4" />
                <span className="absolute top-1 right-1 grid h-4 w-4 place-items-center rounded-full bg-gold text-[9px] font-bold text-gold-foreground">3</span>
              </button>
              <div className="flex items-center gap-2.5">
                <div className="hidden sm:block text-right">
                  <div className="text-sm font-semibold leading-tight text-foreground">{MOCK_MEMBER.name}</div>
                  <div className="text-[11px] text-muted-foreground">{MOCK_MEMBER.memberNo}</div>
                </div>
                <div className="h-10 w-10 rounded-full bg-gradient-hero text-white grid place-items-center font-display font-bold">
                  {MOCK_MEMBER.name.split(" ").map(n => n[0]).slice(0,2).join("")}
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="flex-1 p-5 md:p-8">{children}</main>
        <ChatAssistant />
      </div>
    </div>
  );
}
