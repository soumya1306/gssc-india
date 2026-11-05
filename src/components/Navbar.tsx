"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { GSSCLogo } from "./GSSCLogo";

const navLinks = [
  { label: "Services", href: "/services", path: "services" },
  { label: "Projects", href: "/#projects", path: "projects" },
  { label: "Standards", href: "/#standards", path: "standards" },
  { label: "Contact", href: "/contact", path: "contact" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="flex items-center select-none">
            <GSSCLogo className="h-10 w-auto" />
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`/${link.path}`);
            return (
              <Link
                key={link.path}
                href={link.href}
                className={`text-sm py-1 transition-colors ${
                  isActive
                    ? "text-orange-600 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 rounded bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px] mr-1">login</span>
            Portal Login
          </Link>
          <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-[18px]">person</span>
          </div>
        </div>
      </div>
    </header>
  );
}

