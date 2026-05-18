import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-primary-deep text-white/80 mt-20">
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-4">
          <Logo variant="light" />
          <p className="text-sm leading-relaxed text-white/70">A SASRA-regulated cooperative society serving members across Kenya with savings, credit and investment solutions since 1977.</p>
          <div className="flex items-center gap-2 text-xs">
            <ShieldCheck className="h-4 w-4 text-lime" /> SASRA Licensed & Regulated
          </div>
        </div>
        <div>
          <h4 className="font-display text-white font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[["About Us","/about"],["Products","/products"],["Loans","/loans"],["Insurance Agency","/insurance"],["FAQs","/faqs"],["Tenders","/tenders"]].map(([l,h])=>(
              <li key={h}><Link to={h} className="hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-white font-semibold mb-4">Member Services</h4>
          <ul className="space-y-2 text-sm">
            {[["Member Portal","/portal/login"],["Become a Member","/join"],["AI Loan Assistant","/portal/ai-assistant"],["Loan Products","/loans"],["Mobile Banking","/products"]].map(([l,h])=>(
              <li key={h}><Link to={h} className="hover:text-gold transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-white font-semibold mb-4">Get in Touch</h4>
          <ul className="space-y-3 text-sm">
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0 text-gold" /> Social Security House Block 'C', Ground Floor, Bishop Road, Nairobi</li>
            <li className="flex gap-2"><Phone className="h-4 w-4 shrink-0 text-gold" /> +254 111 018 100</li>
            <li className="flex gap-2"><Mail className="h-4 w-4 shrink-0 text-gold" /> info@nssfsacco.co.ke</li>
          </ul>
          <div className="flex items-center gap-2 mt-5">
            {[FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube].map((Icon, i) => (
              <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep transition-colors"><Icon className="h-3.5 w-3.5" /></a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs flex flex-wrap justify-between gap-3 text-white/60">
          <span>© {new Date().getFullYear()} NSSF SACCO Limited. All rights reserved.</span>
          <span>Powered by Microsoft Dynamics 365 · Built for members.</span>
        </div>
      </div>
    </footer>
  );
}
