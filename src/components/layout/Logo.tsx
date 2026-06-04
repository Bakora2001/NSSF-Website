import { Link } from "@tanstack/react-router";
import logoImg from "../../assets/hero/nssf_sacco_logo.png";

export function Logo({ variant = "dark" }: { variant?: "dark" | "light" }) {
  return (
    <Link to="/" className="flex items-center group">
      <img src={logoImg} alt="NSSF SACCO Logo" className={`h-12 w-auto transition-transform group-hover:scale-105 ${variant === "light" ? "brightness-0 invert" : ""}`} />
    </Link>
  );
}
