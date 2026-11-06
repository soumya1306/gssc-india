import Link from "next/link";
import { GSSCLogo } from "./GSSCLogo";

export function Footer() {
  return (
    <footer className="w-full bg-surface-bright shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-space-xl pb-space-lg">
      <div className="w-full px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter-desktop mb-space-xl">
          {/* Company Intro & Certifications */}
          <div className="lg:col-span-4 flex flex-col gap-space-md">
            <div className="flex items-center select-none mb-1">
              <GSSCLogo className="h-11 w-auto" />
            </div>
            <p className="font-body-sm text-body-sm text-secondary leading-relaxed max-w-sm">
              GSSC INDIA (Gas &amp; Steam Solutions Company) - Specializing in gas turbine, steam power, plant maintenance, piping engineering, and heavy industrial electromechanical turnkey services across India since 2002.
            </p>
            <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-primary">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span>ISO 9001:2015, ISO 45001 &amp; BIS Certified</span>
            </div>
          </div>

          {/* Company */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
              Company
            </span>
            <nav className="flex flex-col gap-space-xs">
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/#about">
                About GSSC India
              </Link>
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/#standards">
                Quality &amp; Standards
              </Link>
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/#careers">
                Careers in India
              </Link>
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/portal">
                Client Portal
              </Link>
            </nav>
          </div>

          {/* Capabilities */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
              Capabilities
            </span>
            <nav className="flex flex-col gap-space-xs">
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/services">
                Gas &amp; Steam Turbines
              </Link>
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/services">
                Electromechanical
              </Link>
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/services">
                High-Pressure Piping
              </Link>
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/services">
                Plant Turnaround
              </Link>
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/services">
                Civil &amp; Foundations
              </Link>
            </nav>
          </div>

          {/* Hubs & Corridors */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
              Hubs &amp; Corridors
            </span>
            <nav className="flex flex-col gap-space-xs">
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/#projects">
                Gujarat Petro Corridor
              </Link>
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/#projects">
                Maharashtra Industrial Belt
              </Link>
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/#projects">
                Tamil Nadu Energy Hub
              </Link>
              <Link className="font-body-sm text-body-sm text-secondary hover:text-on-surface transition-colors" href="/#projects">
                Eastern Power Corridor
              </Link>
            </nav>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2 flex flex-col gap-space-sm">
            <span className="font-label-md text-label-md uppercase tracking-wider text-on-surface font-semibold">
              Contact
            </span>
            <div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-secondary">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-primary">mail</span>
                <a className="hover:text-on-surface transition-colors" href="mailto:info@gssc.in">
                  info@gssc.in
                </a>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-primary">call</span>
                <span>+91 22 6890 4100</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
                <span className="font-label-sm text-label-sm">Mon - Sat: 09:00 - 18:00 IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-space-md flex flex-col md:flex-row items-center justify-between gap-space-sm font-label-sm text-label-sm text-secondary border-t border-surface-container">
          <p>© 2024 GSSC INDIA (Gas &amp; Steam Solutions Company). All rights reserved.</p>
          <div className="flex items-center gap-space-md">
            <Link className="hover:text-on-surface transition-colors" href="/contact">
              Privacy Policy
            </Link>
            <Link className="hover:text-on-surface transition-colors" href="/contact">
              Terms of Service
            </Link>
            <Link className="hover:text-on-surface transition-colors" href="/contact">
              HSE &amp; Safety Policy
            </Link>
            <Link className="hover:text-on-surface transition-colors" href="/login">
              Client Portal
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
