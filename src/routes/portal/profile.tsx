import { createFileRoute } from "@tanstack/react-router";
import { PortalLayout } from "@/components/layout/PortalLayout";
import { User, BadgeCheck, FileText, ShieldAlert, Edit2, Camera } from "lucide-react";
import { MOCK_MEMBER } from "@/lib/mock-data";
import { useState } from "react";

export const Route = createFileRoute("/portal/profile")({
  head: () => ({ meta: [{ title: "My Profile — NSSF SACCO Portal" }] }),
  component: Page,
});

function Page() {
  const [activeTab, setActiveTab] = useState("personal");

  return (
    <PortalLayout>
      <div className="mb-6">
        <h1 className="font-display text-2xl md:text-3xl font-extrabold flex items-center gap-3">
          <User className="h-7 w-7 text-primary" /> My Profile
        </h1>
        <p className="text-sm text-muted-foreground mt-1">Manage your personal details and preferences</p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-border/60 mb-6 overflow-x-auto whitespace-nowrap scrollbar-none">
        {[
          { id: "personal", label: "Personal Details" },
          { id: "kin", label: "Next of Kin" },
          { id: "beneficiaries", label: "Beneficiaries" },
          { id: "docs", label: "Documents" },
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

      {activeTab === "personal" && (
        <div className="grid gap-6 lg:grid-cols-3">
          
          {/* Form details */}
          <div className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-display font-bold text-foreground">Personal Information</h3>
                <button className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:underline border border-primary/20 rounded-lg px-3 py-1.5 bg-primary/5">
                  <Edit2 className="h-3.5 w-3.5" /> Edit Profile
                </button>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 text-xs">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-1">Full Name</label>
                  <input disabled value={MOCK_MEMBER.name} className="w-full rounded-xl border border-border bg-slate-50 px-3.5 py-2.5 font-semibold text-foreground" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-1">Member Number</label>
                  <input disabled value={MOCK_MEMBER.memberNo} className="w-full rounded-xl border border-border bg-slate-50 px-3.5 py-2.5 font-mono font-semibold text-foreground" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-1">Date of Birth</label>
                  <input disabled value="12 March 1985" className="w-full rounded-xl border border-border bg-slate-50 px-3.5 py-2.5 font-semibold text-foreground" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-1">ID Number</label>
                  <input disabled value="12345678" className="w-full rounded-xl border border-border bg-slate-50 px-3.5 py-2.5 font-mono font-semibold text-foreground" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-1">Phone Number</label>
                  <input disabled value={MOCK_MEMBER.phone} className="w-full rounded-xl border border-border bg-slate-50 px-3.5 py-2.5 font-semibold text-foreground" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-1">Email Address</label>
                  <input disabled value={MOCK_MEMBER.email} className="w-full rounded-xl border border-border bg-slate-50 px-3.5 py-2.5 font-semibold text-foreground" />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-1">Address</label>
                  <input disabled value="123 Bishop Road, Social Security House, Nairobi, Kenya" className="w-full rounded-xl border border-border bg-slate-50 px-3.5 py-2.5 font-semibold text-foreground" />
                </div>
              </div>
            </div>

            {/* Employment Information */}
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card">
              <h3 className="font-display font-bold text-foreground mb-4">Employment Information</h3>
              <div className="grid gap-4 sm:grid-cols-2 text-xs">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-1">Employer</label>
                  <input disabled value={MOCK_MEMBER.employer} className="w-full rounded-xl border border-border bg-slate-50 px-3.5 py-2.5 font-semibold text-foreground" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-1">Job Title</label>
                  <input disabled value="Systems Analyst" className="w-full rounded-xl border border-border bg-slate-50 px-3.5 py-2.5 font-semibold text-foreground" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-1">Employment Type</label>
                  <input disabled value="Permanent" className="w-full rounded-xl border border-border bg-slate-50 px-3.5 py-2.5 font-semibold text-foreground" />
                </div>
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-wider text-muted-foreground mb-1">Payroll Number</label>
                  <input disabled value="NSSF/ICT/011234" className="w-full rounded-xl border border-border bg-slate-50 px-3.5 py-2.5 font-mono font-semibold text-foreground" />
                </div>
              </div>
            </div>
          </div>

          {/* Avatar side card */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-card text-center flex flex-col items-center">
              <div className="relative group cursor-pointer mt-4">
                <div className="h-32 w-32 rounded-full bg-gradient-hero border-4 border-primary/20 flex items-center justify-center font-display font-extrabold text-white text-3xl overflow-hidden shadow-inner">
                  {MOCK_MEMBER.name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
                <div className="absolute inset-0 rounded-full bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                  <Camera className="h-6 w-6 text-white" />
                </div>
              </div>

              <h4 className="font-display font-bold text-foreground text-base mt-4">{MOCK_MEMBER.name}</h4>
              <p className="text-xs text-muted-foreground mt-0.5">{MOCK_MEMBER.memberNo}</p>
              
              <button className="mt-4 rounded-xl border border-border hover:border-primary hover:text-primary bg-white text-muted-foreground px-4 py-2 text-xs font-bold transition-all w-full">
                Change Photo
              </button>

              <div className="w-full h-px bg-border my-5" />

              <div className="w-full text-left space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-semibold">Account Status</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-lime/20 px-2.5 py-0.5 text-[10px] font-bold text-primary-deep">
                    <BadgeCheck className="h-3.5 w-3.5" /> Verified
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-semibold">Join Date</span>
                  <span className="text-foreground font-bold">{MOCK_MEMBER.joined}</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-muted-foreground font-semibold">Share Capital Tier</span>
                  <span className="text-primary font-bold">Tier B</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "kin" && (
        <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
          <ShieldAlert className="h-10 w-10 mx-auto text-primary mb-3" />
          <h2 className="font-display font-bold text-lg">Next of Kin Details</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            View or update details of your next of kin. Contact registry if updates are required.
          </p>
        </div>
      )}

      {activeTab === "beneficiaries" && (
        <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
          <User className="h-10 w-10 mx-auto text-primary mb-3" />
          <h2 className="font-display font-bold text-lg">Beneficiaries</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            Designate beneficiaries for deposit payouts. Requires approval from the board registry.
          </p>
        </div>
      )}

      {activeTab === "docs" && (
        <div className="rounded-2xl border border-border bg-card p-10 shadow-card text-center">
          <FileText className="h-10 w-10 mx-auto text-primary mb-3" />
          <h2 className="font-display font-bold text-lg">My Uploaded Documents</h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            National ID scans, KRA PIN certificates, passport photos, and payslip logs.
          </p>
        </div>
      )}
    </PortalLayout>
  );
}
