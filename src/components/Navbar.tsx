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
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest/95 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full px-margin-desktop flex items-center justify-between">
        <Link href="/" className="flex items-center gap-space-sm group">
          <div className="flex items-center select-none">
            <GSSCLogo className="h-10 w-auto" />
          </div>
        </Link>

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
                className={`font-body-md text-body-md transition-colors py-space-xs ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-on-surface-variant hover:text-on-surface"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-md">
          <Link
            href="/login"
            className="inline-flex items-center gap-2 px-4 py-2 rounded bg-primary text-on-primary font-body-md text-body-md font-semibold hover:bg-primary-container transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">lock</span>
            <span>Portal Login</span>
          </Link>
          <Link
            href="/portal"
            className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-primary hover:bg-surface-variant transition-colors"
            title="Employee Portal"
          >
            <span className="material-symbols-outlined text-[20px]">account_circle</span>
          </Link>
        </div>
      </div>
    </header>
  );
}
