import { Phone, Mail, MapPin } from "lucide-react";
import { FaFacebookF, FaXTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export function UtilityBar() {
  return (
    <div className="hidden md:block bg-[#1f7a73] text-white/90 text-xs">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
        <div className="flex items-center gap-6">
          <a href="tel:+254111018100" className="flex items-center gap-1.5 hover:text-gold transition-colors"><Phone className="h-3.5 w-3.5" /> +254 111 018 100</a>
          <a href="mailto:info@nssfsacco.co.ke" className="flex items-center gap-1.5 hover:text-gold transition-colors"><Mail className="h-3.5 w-3.5" /> info@nssfsacco.co.ke</a>
          <span className="hidden lg:flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" /> Social Security House Block 'C', Ground Floor, Bishop Road</span>
        </div>
        <div className="flex items-center gap-3">
          {[
            { Icon: FaFacebookF, href: "#", label: "Facebook" },
            { Icon: FaXTwitter, href: "#", label: "X" },
            { Icon: FaInstagram, href: "#", label: "Instagram" },
            { Icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
            { Icon: FaYoutube, href: "#", label: "YouTube" },
          ].map(({ Icon, href, label }) => (
            <a key={label} href={href} aria-label={label} className="grid h-6 w-6 place-items-center rounded-full bg-white/10 hover:bg-gold hover:text-primary-deep transition-colors">
              <Icon className="h-3 w-3" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
