import { createFileRoute } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { LifeBuoy, Phone, Mail, HelpCircle, ArrowRight, MessageSquareCode } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/portal/support")({
  head: () => ({ meta: [{ title: "Support — NSSF SACCO Portal" }] }),
  component: Page,
});

function Page() {
  const [activeTab, setActiveTab] = useState("help-center");

  const helpTopics = [
    { title: "Account Management", desc: "Setting up, verifying, next of kin updates" },
    { title: "Loans & Repayments", desc: "Eligibility rules, calculators, schedules, processing" },
    { title: "Transfers & Payments", desc: "Internal transfers, M-PESA paybills, RTGS" },
    { title: "Investments & Shares", desc: "Share capital tiers, dividends, Sukuk, statements" },
    { title: "General Support", desc: "Session timeouts, browser compatibility, app support" },
  ];

  const popularArticles = [
    { title: "How to apply for a loan", link: "#" },
    { title: "How to update your profile", link: "#" },
    { title: "How to transfer funds", link: "#" },
    { title: "Understanding your loan statement", link: "#" },
  ];

  return (
    <PortalLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-extrabold flex items-center gap-3">
          <LifeBuoy className="h-7 w-7 text-primary" /> Support & Help
        </h1>
        <p className="text-sm text-muted-foreground mt-1">We're here to help you</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border/60 mb-6 overflow-x-auto whitespace-nowrap scrollbar-none">
        {[
          { id: "help-center", label: "Help Center" },
          { id: "contact", label: "Contact Us" },
          { id: "tickets", label: "My Tickets" },
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

      {activeTab === "help-center" && (
        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* Main Topics */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Help Topics Grid */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">Help Topics</h3>
              <div className="space-y-3">
                {helpTopics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl border border-border/60 hover:bg-secondary/40 transition cursor-pointer">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-primary-soft text-primary font-bold text-xs shrink-0">{i+1}</span>
                    <div>
                      <h4 className="font-semibold text-xs text-foreground">{topic.title}</h4>
                      <p className="text-[10px] text-muted-foreground mt-0.5">{topic.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Popular Articles */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">Popular Articles</h3>
              <ul className="space-y-3 text-xs font-semibold">
                {popularArticles.map((art, i) => (
                  <li key={i}>
                    <a href={art.link} className="flex items-center justify-between p-2.5 rounded-lg border border-border/40 hover:text-primary hover:border-primary/45 transition">
                      <span className="flex items-center gap-2"><HelpCircle className="h-4 w-4 text-primary" /> {art.title}</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-5 text-center">
                <button className="rounded-xl border border-primary text-primary hover:bg-primary/5 px-6 py-2.5 text-xs font-bold uppercase tracking-wider">
                  View All Articles
                </button>
              </div>
            </div>

          </div>

          {/* Contact Box Callout */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card space-y-5 text-center flex flex-col items-center">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-[#1a4a43]/10 text-primary"><Phone className="h-6 w-6" /></span>
              
              <div>
                <h3 className="font-display font-extrabold text-foreground text-sm">Need More Help?</h3>
                <p className="text-[10px] text-muted-foreground mt-1 max-w-xs mx-auto">
                  Can't find what you are looking for? Our support team is ready to assist you.
                </p>
              </div>

              <button className="w-full rounded-xl bg-primary text-primary-foreground hover:bg-primary-deep py-2.5 text-xs font-bold uppercase tracking-wider transition-all">
                Contact Support
              </button>

              <div className="w-full h-px bg-border my-4" />

              <div className="w-full text-left space-y-3.5 text-xs">
                <div className="flex gap-3">
                  <Phone className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground">Phone Support</div>
                    <a href="tel:+254111018100" className="text-[10px] text-primary hover:underline font-mono mt-0.5 block">+254 111 018 100</a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="h-4 w-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-foreground">Email Support</div>
                    <a href="mailto:info@nssfsacco.co.ke" className="text-[10px] text-primary hover:underline mt-0.5 block">info@nssfsacco.co.ke</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      )}

      {activeTab === "contact" && (
        <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
          <Mail className="h-10 w-10 mx-auto text-primary mb-3" />
          <h2 className="font-display font-bold text-lg">Leave a Message</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            Drop us an email or submit an inquiry directly. Our customer care representatives respond within 24 hours.
          </p>
        </div>
      )}

      {activeTab === "tickets" && (
        <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
          <MessageSquareCode className="h-10 w-10 mx-auto text-primary mb-3" />
          <h2 className="font-display font-bold text-lg">My Support Tickets</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            View open, pending, and resolved service requests submitted through the portal.
          </p>
        </div>
      )}
    </PortalLayout>
  );
}
