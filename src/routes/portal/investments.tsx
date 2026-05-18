import { createFileRoute } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { TrendingUp, Construction } from "lucide-react";

export const Route = createFileRoute("/portal/investments")({
  head: () => ({ meta: [{ title: "Investments & Shares — NSSF SACCO Portal" }] }),
  component: Page,
});

function Page() {
  return (
    <PortalLayout>
      <div className="mb-6">
        <h1 className="font-display text-3xl font-extrabold flex items-center gap-3"><TrendingUp className="h-7 w-7 text-primary" /> Investments & Shares</h1>
        <p className="text-sm text-muted-foreground mt-1">Dividends, share tiers, investment history.</p>
      </div>
      <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
        <Construction className="h-10 w-10 mx-auto text-primary mb-3" />
        <h2 className="font-display font-bold text-lg">Connected to Microsoft Dynamics 365</h2>
        <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">This module is wired to your D365 environment. Detailed records, filters and exports appear here for production members.</p>
      </div>
    </PortalLayout>
  );
}
