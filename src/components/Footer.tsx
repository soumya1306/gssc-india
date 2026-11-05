import Link from "next/link";
import { GSSCLogo } from "./GSSCLogo";

const footerLinks = {
  Company: [
    { label: "About Us", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Projects", href: "/" },
    { label: "Contact", href: "/contact" },
  ],
  Portal: [
    { label: "Employee Login", href: "/login" },
    { label: "Admin Dashboard", href: "/admin" },
    { label: "Safety Protocols", href: "/" },
  ],
  Standards: [
    { label: "ISO 9001:2015", href: "/" },
    { label: "OHSAS / ISO 45001", href: "/" },
    { label: "IBR & OISD", href: "/" },
  ],
};

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="flex flex-col gap-4">
            <GSSCLogo className="h-10 w-auto brightness-0 invert" />
            <p className="text-sm leading-relaxed text-slate-400">
              India&apos;s dedicated industrial engineering partner for gas, steam, and heavy industrial operations.
            </p>
            <div className="flex items-center gap-2 text-xs text-orange-400 font-mono font-semibold uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              Operational · Since 2002
            </div>
          </div>
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category} className="flex flex-col gap-3">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{category}</span>
              <ul className="flex flex-col gap-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-slate-300 hover:text-orange-400 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-mono">
          <span>© 2024 GSSC India. Gas &amp; Steam Solutions Company. All rights reserved.</span>
          <span>ISO 9001:2015 · ISO 45001 · IBR · OISD Compliant</span>
        </div>
      </div>
    </footer>
  );
}

