"use client";

import { useState, useEffect } from "react";
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 lg:h-20 w-full px-4 sm:px-6 lg:px-margin-desktop flex items-center justify-between">
        {/* Brand Logo */}
        <Link href="/" className="flex items-center gap-space-sm group">
          <div className="flex items-center select-none">
            <GSSCLogo className="h-10 sm:h-12 lg:h-14 w-auto" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-space-lg">
          {navLinks.map((link) => {
            const isActive =
              link.path === "services"
                ? pathname.startsWith("/services")
                : link.path === "contact"
                  ? pathname.startsWith("/contact")
                  : false;

            return (
              <Link
                key={link.path}
                href={link.href}
                className={`font-body-md text-body-md transition-colors py-space-xs ${isActive
                  ? "text-primary font-bold"
                  : "text-on-surface-variant hover:text-on-surface"
                  }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions & Mobile Menu Button */}
        <div className="flex items-center gap-2 sm:gap-space-md">
          <Link
            href="/login"
            className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded bg-primary text-on-primary font-body-md text-xs sm:text-body-md font-semibold hover:bg-primary-container transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[16px] sm:text-[18px]">lock</span>
            <span>Portal Login</span>
          </Link>
          <Link
            href="/portal"
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-variant transition-colors"
            title="Employee Portal"
          >
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
          </Link>

          {/* Hamburger Menu Toggle (Mobile & Tablet) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden w-9 h-9 rounded-lg flex items-center justify-center text-on-surface hover:text-primary hover:bg-surface-container transition-colors"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-surface-container-lowest/98 backdrop-blur-xl px-4 py-4 shadow-xl transition-all">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive =
                link.path === "services"
                  ? pathname.startsWith("/services")
                  : link.path === "contact"
                    ? pathname.startsWith("/contact")
                    : false;

              return (
                <Link
                  key={link.path}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-colors ${isActive
                    ? "bg-primary/10 text-primary font-bold"
                    : "text-on-surface hover:bg-surface-container"
                    }`}
                >
                  <span>{link.label}</span>
                  <span className="material-symbols-outlined text-[18px] text-secondary">
                    chevron_right
                  </span>
                </Link>
              );
            })}

            <div className="pt-3 mt-2 border-t border-slate-100 flex flex-col gap-2">
              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <span className="material-symbols-outlined text-orange-500 text-[18px]">
                  admin_panel_settings
                </span>
                <span>Admin Operations Center</span>
              </Link>
              <Link
                href="/portal"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-mono font-semibold text-slate-600 hover:bg-slate-100 transition-colors"
              >
                <span className="material-symbols-outlined text-primary text-[18px]">
                  badge
                </span>
                <span>Employee Self-Service Portal</span>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
