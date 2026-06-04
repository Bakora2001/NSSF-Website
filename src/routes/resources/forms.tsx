import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PublicLayout } from "@/components/layout/PublicLayout";
import { ChevronRight, FileText, Download, Search, Info } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/resources/forms")({
  head: () => ({
    meta: [
      { title: "Downloadable Forms — NSSF SACCO" },
      { name: "description", content: "Access and download all official NSSF SACCO membership, loan, and claim forms." },
    ],
  }),
  component: DownloadableFormsPage,
});

const CATEGORIES = [
  { id: "app-forms", name: "Application Forms", count: 19, color: "text-emerald-600 bg-emerald-50 border-emerald-200" },
  { id: "procurement", name: "Procurement", count: 2, color: "text-orange-600 bg-orange-50 border-orange-200" },
  { id: "notices", name: "Notices", count: 4, color: "text-purple-600 bg-purple-50 border-purple-200" },
  { id: "nassefu", name: "Nassefu Insurance Forms", count: 10, color: "text-blue-600 bg-blue-50 border-blue-200" },
  { id: "by-laws", name: "SACCO By-Laws", count: 1, color: "text-amber-600 bg-amber-50 border-amber-200" },
];

const FORMS_DATA: Record<string, string[]> = {
  "app-forms": [
    "NSSF SACCO MEMBERSHIP REGISTRATION FORM",
    "NSSF SACCO LOAN APPLICATION FORM",
    "VOLUNTARY CAPITALIZATION OF DEPOSITS",
    "NOMINEE INFORMATION CARD",
    "TAUSI AND MUSTARD ACCOUNT APPLICATION FORM",
    "Nssf Sacco Change of Guarantor Form",
    "NEXT OF KIN BENEFICIARY FORM",
    "Nssf Sacco Dividend Advance Loan Application Form",
    "DEPOSITS TRANSFER FORM",
    "Deposit Variation Form",
    "FIXED DEPOSIT APPLICATION FORM",
    "PAMOJA SAVINGS APPLICATION FORM",
    "Sacco Link ATM Application Form",
    "Nssf Sacco Member Details Update Form",
    "Nssf Sacco Mobile Banking Application Form",
    "PENSIONERS PAYPOINT FORM 2024",
    "Nssf Sacco Bankers Cheque Requisition Form",
    "Nssf Sacco Johari Holiday Savings Application Form",
    "Paypoint Salary"
  ],
  "nassefu": [
    "Last Expense Application Form 2021",
    "Last Expense Brochure Catalogue 2021",
    "Heritage Insurance Personal Accident Claim Form",
    "CIC Motor Accident Claim Form",
    "UAP Insurance Motor Accident Claim Form",
    "Heritage Insurance Motor Claim Form",
    "CIC Insurance General Claim Form",
    "Jubilee Insurance Motor Accident Claim Form",
    "Jubilee Insurance Medical Claim Form",
    "Police Abstract Form"
  ],
  "notices": [
    "2026 AGM NOTICE",
    "2026 BOD and SUPERVISORY ELECTIONS",
    "SACCO LINK ATM CARD TERMS AND CONDITIONS",
    "2026 BOD OF DIRECTORS RECONSTITUTION"
  ],
  "procurement": [
    "Pre-qualification of Suppliers Document 2026",
    "Standard Tender Document for Supply of Goods"
  ],
  "by-laws": [
    "Registered NSSF SACCO By-Laws Document"
  ]
};

function DownloadableFormsPage() {
  const [selectedCat, setSelectedCat] = useState("app-forms");
  const [searchQuery, setSearchQuery] = useState("");

  const activeCategory = CATEGORIES.find(c => c.id === selectedCat) || CATEGORIES[0];
  const forms = FORMS_DATA[selectedCat] || [];
  
  const filteredForms = forms.filter(form => 
    form.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <PublicLayout>

      {/* Main Content (no hero) */}
      <section className="mx-auto max-w-7xl px-6 py-10 space-y-10">
        
        
        {/* Form Categories Grid */}
        <div>
          <h2 className="text-lg font-display font-extrabold text-foreground mb-6">Form Categories</h2>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {CATEGORIES.map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -3 }}
                onClick={() => setSelectedCat(cat.id)}
                className={`rounded-2xl border p-5 cursor-pointer transition-all flex flex-col justify-between h-40 ${
                  selectedCat === cat.id
                    ? "border-[#286d65] bg-[#286d65]/5 shadow-sm"
                    : "border-border/60 bg-card hover:border-[#286d65]/40 hover:bg-[#286d65]/5"
                }`}
              >
                <div>
                  <div className={`w-10 h-10 rounded-xl grid place-items-center mb-4 border ${cat.color}`}>
                    <FileText className="h-5 w-5" />
                  </div>
                  <h3 className="font-display font-bold text-xs text-foreground leading-tight mb-1">{cat.name}</h3>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <span className="text-[11px] font-bold text-muted-foreground">{cat.count} Files</span>
                  <span className="text-[10.5px] font-extrabold text-[#286d65] flex items-center gap-0.5 group">
                    View Forms <ChevronRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Action Bar: Alert + Search */}
        <div className="flex flex-wrap items-center justify-between gap-4 bg-muted/30 border border-border/50 rounded-2xl p-4">
          <div className="flex items-center gap-2.5 text-xs text-muted-foreground">
            <Info className="h-4 w-4 text-[#286d65] shrink-0" />
            <span>All forms are in PDF format and require Adobe Acrobat Reader to open.</span>
          </div>
          <div className="relative w-full sm:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search forms..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-border bg-white text-xs placeholder:text-muted-foreground focus:outline-none focus:border-[#286d65] focus:ring-1 focus:ring-[#286d65]"
            />
          </div>
        </div>

        {/* Selected Category Forms List */}
        <div className="rounded-3xl border border-border bg-card p-6 md:p-8 shadow-sm">
          <div className="border-b border-border/60 pb-4 mb-6 flex items-center justify-between">
            <div>
              <h3 className="font-display font-extrabold text-base text-foreground">{activeCategory.name}</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Click the download button to save the file.</p>
            </div>
            <span className="bg-[#286d65]/10 text-[#286d65] text-xs font-bold px-3 py-1 rounded-full">
              {filteredForms.length} Files
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <AnimatePresence mode="popLayout">
              {filteredForms.map((form, i) => (
                <motion.div
                  key={form}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.2, delay: i * 0.03 }}
                  whileHover={{ scale: 1.015 }}
                  className="group flex items-center justify-between rounded-xl border border-border bg-muted/10 p-4 hover:border-[#286d65]/40 hover:bg-[#286d65]/5 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-lg bg-red-50 text-red-500 group-hover:bg-[#286d65]/10 group-hover:text-[#286d65] transition-colors">
                      <FileText className="h-5 w-5" />
                    </span>
                    <div className="text-xs font-bold text-foreground max-w-[170px] leading-tight group-hover:text-[#286d65] transition-colors">
                      {form}
                    </div>
                  </div>
                  <Download className="h-4 w-4 text-muted-foreground group-hover:text-[#286d65] transition-colors shrink-0 ml-2" />
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredForms.length === 0 && (
              <div className="col-span-full py-8 text-center text-xs text-muted-foreground">
                No forms found matching "{searchQuery}".
              </div>
            )}
          </div>
        </div>

      </section>
    </PublicLayout>
  );
}
