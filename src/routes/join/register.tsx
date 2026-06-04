import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ChevronLeft, ChevronRight, Upload, Plus, Trash2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/join/register")({
  head: () => ({ meta: [{ title: "Register — NSSF SACCO" }] }),
  component: Register,
});

const STEPS = ["Personal Details", "Identification", "Next of Kin", "Employment", "Documents", "Final Steps"] as const;

function Register() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  return (
    <PublicLayout>
      <section className="bg-secondary/30 min-h-screen py-10">
        <div className="mx-auto max-w-4xl px-6">
          <Link to="/join" className="text-sm text-primary hover:underline">← Back</Link>
          <h1 className="mt-3 font-display text-3xl font-extrabold">Join NSSF SACCO</h1>
          <p className="text-sm text-muted-foreground">Complete the 6 steps to access your Member Portal.</p>

          <div className="mt-6 rounded-2xl bg-card border border-border p-2 shadow-card">
            <div className="grid grid-cols-6 gap-1">
              {STEPS.map((s, i) => (
                <div key={s} className="text-center">
                  <div className={`h-1.5 rounded-full ${i <= step ? "bg-gold" : "bg-muted"}`} />
                  <div className={`mt-2 text-[10px] font-semibold uppercase tracking-wider ${i === step ? "text-primary" : "text-muted-foreground"}`}>{`Step ${i+1}`}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 rounded-2xl bg-card border border-border p-6 md:p-8 shadow-card">
            {done ? <DonePane /> : (
              <>
                <h2 className="font-display text-xl font-extrabold mb-1">{STEPS[step]}</h2>
                <p className="text-xs text-muted-foreground mb-6">Step {step + 1} of {STEPS.length}</p>
                <AnimatePresence mode="wait">
                  <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
                    {step === 0 && <Step1 />}
                    {step === 1 && <Step2 />}
                    {step === 2 && <Step3 />}
                    {step === 3 && <Step4 />}
                    {step === 4 && <Step5 />}
                    {step === 5 && <Step6 />}
                  </motion.div>
                </AnimatePresence>
                <div className="mt-8 flex items-center justify-between">
                  <Button variant="outline" disabled={step === 0} onClick={() => setStep(s => Math.max(0, s - 1))}><ChevronLeft className="h-4 w-4 mr-1" /> Back</Button>
                  {step < STEPS.length - 1 ? (
                    <Button onClick={() => setStep(s => s + 1)} className="bg-primary text-primary-foreground hover:bg-primary-deep">Continue <ChevronRight className="h-4 w-4 ml-1" /></Button>
                  ) : (
                    <Button onClick={() => setDone(true)} className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold shadow-glow">Complete Registration</Button>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

function Field({ label, type = "text", placeholder, as = "input", options }: { label: string; type?: string; placeholder?: string; as?: "input" | "select" | "textarea"; options?: string[] }) {
  const base = "w-full rounded-md border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring";
  return (
    <div>
      <label className="text-xs font-semibold text-muted-foreground">{label}</label>
      {as === "select" ? (
        <select className={base + " mt-1"}><option>Select…</option>{options?.map(o => <option key={o}>{o}</option>)}</select>
      ) : as === "textarea" ? (
        <textarea rows={3} className={base + " mt-1"} placeholder={placeholder} />
      ) : (
        <input type={type} className={base + " mt-1"} placeholder={placeholder} />
      )}
    </div>
  );
}

function Step1() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <Field label="Title" as="select" options={["Mr.","Mrs.","Ms.","Dr.","Prof."]} />
      <Field label="Sex" as="select" options={["Male","Female"]} />
      <Field label="First Name" />
      <Field label="Middle Name" />
      <Field label="Last Name" />
      <Field label="Country" as="select" options={["Kenya","Uganda","Tanzania","Rwanda"]} />
      <Field label="State / County" as="select" options={["Nairobi","Mombasa","Kisumu","Nakuru","Eldoret"]} />
      <Field label="City / Town" />
      <Field label="Address 1" />
      <Field label="Address 2" />
      <Field label="P.O. Box" />
      <Field label="Phone Number / Cell" type="tel" />
      <Field label="Email Address" type="email" />
      <Field label="Confirm Email Address" type="email" />
    </div>
  );
}
function Step2() {
  return (
    <div className="grid sm:grid-cols-2 gap-4">
      <Field label="Identification Type" as="select" options={["National ID","Passport"]} />
      <Field label="Date of Birth" type="date" />
      <Field label="National ID No." />
      <Field label="Passport Number" />
      <Field label="Expiry Date" type="date" />
    </div>
  );
}
function Step3() {
  const [rows, setRows] = useState([0]);
  return (
    <div>
      <div className="space-y-4">
        {rows.map(r => (
          <div key={r} className="rounded-xl border border-border p-4 grid sm:grid-cols-2 gap-3">
            <Field label="Full Name" />
            <Field label="Relation" as="select" options={["Spouse","Child","Parent","Sibling","Other"]} />
            <Field label="Address" />
            <Field label="Contact Number" type="tel" />
            <Field label="Date of Birth" type="date" />
            <Field label="Sex" as="select" options={["Male","Female"]} />
            <Field label="Benefit (%)" type="number" />
            <div className="flex items-end">
              <Button type="button" variant="outline" className="text-destructive border-destructive/40" onClick={() => setRows(rs => rs.length > 1 ? rs.filter(x => x !== r) : rs)}><Trash2 className="h-4 w-4" /></Button>
            </div>
          </div>
        ))}
      </div>
      <Button type="button" variant="outline" onClick={() => setRows(rs => [...rs, Date.now()])} className="mt-4 border-primary text-primary"><Plus className="h-4 w-4 mr-1" /> Add Next of Kin</Button>
    </div>
  );
}
function Step4() {
  const [tab, setTab] = useState<"Employed"|"Self Employed">("Employed");
  return (
    <div>
      <div className="inline-flex rounded-lg border border-border p-1 bg-secondary mb-5">
        {(["Employed","Self Employed"] as const).map(t => (
          <button key={t} onClick={() => setTab(t)} className={`px-4 py-1.5 rounded-md text-sm font-semibold ${tab === t ? "bg-card shadow-card text-primary" : "text-muted-foreground"}`}>{t}</button>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label={tab === "Employed" ? "Employer's Name" : "Business Name"} />
        <Field label={tab === "Employed" ? "Employer's Phone Number" : "Business Phone Number"} type="tel" />
        <Field label={tab === "Employed" ? "Profession" : "Nature of Business"} />
        <Field label="Physical Address" />
      </div>
    </div>
  );
}
function Step5() {
  const FILES = ["Upload Signature","Upload Passport Photo","Upload Page 1 of Identification","Upload Page 2 of Identification"];
  return (
    <div className="space-y-3">
      {FILES.map(f => (
        <label key={f} className="flex items-center justify-between gap-3 rounded-xl border-2 border-dashed border-border p-4 hover:border-primary cursor-pointer bg-secondary/30">
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary-soft text-primary"><Upload className="h-4 w-4" /></span>
            <div><div className="font-semibold text-sm">{f}</div><div className="text-xs text-muted-foreground">PDF, PNG or JPG · Max 5MB</div></div>
          </div>
          <span className="text-xs text-primary font-semibold">Choose file</span>
          <input type="file" className="hidden" />
        </label>
      ))}
    </div>
  );
}
function Step6() {
  return (
    <div className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-4">
        <Field label="Security Question" as="select" options={["What is your favourite fruit?","Mother's maiden name?","Name of first school?","Childhood pet name?"]} />
        <Field label="Answer" />
      </div>
      <div>
        <div className="text-xs font-semibold text-muted-foreground mb-2">Favourite Fruit (additional check):</div>
        <div className="flex gap-2 flex-wrap">
          {["Apple","Grape","Mango","Banana","Orange"].map(f => (
            <button key={f} type="button" className="rounded-full border border-border px-3 py-1.5 text-sm hover:border-primary hover:bg-primary-soft hover:text-primary">{f}</button>
          ))}
        </div>
      </div>
      <div className="rounded-xl border border-border bg-secondary/40 p-5">
        <div className="font-display font-bold">Registration Fee — KES 1,000</div>
        <p className="text-xs text-muted-foreground mt-1">Choose your preferred payment method:</p>
        <div className="mt-3 flex gap-2">
          <Button className="bg-gold text-gold-foreground hover:bg-gold/90 font-bold">Pay via MPESA</Button>
          <Button variant="outline" className="border-primary text-primary">I'll pay later</Button>
        </div>
      </div>
      <Field label="Referrer Membership Number (optional)" placeholder="NSSF/XXXXXX" />
    </div>
  );
}

function DonePane() {
  return (
    <div className="text-center py-10">
      <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-lime/20 text-primary-deep mb-5"><CheckCircle2 className="h-10 w-10" /></span>
      <h2 className="font-display text-2xl font-extrabold">Registration submitted!</h2>
      <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">We've sent your details to the SACCO secretariat for verification. You'll receive your Membership Number via SMS within 24 hours.</p>
      <div className="mt-6 flex gap-3 justify-center">
        <Button asChild className="bg-primary text-primary-foreground hover:bg-primary-deep"><Link to="/portal/login">Go to Member Portal</Link></Button>
        <Button asChild variant="outline" className="border-primary text-primary"><Link to="/">Back to Home</Link></Button>
      </div>
    </div>
  );
}
