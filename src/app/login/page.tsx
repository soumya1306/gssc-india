"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { GSSCLogo } from "@/components/GSSCLogo";

type Role = "admin" | "staff" | "auditor";

export default function LoginPage() {
  const router = useRouter();
  const [role, setRole] = useState<Role>("staff");
  const [staffId, setStaffId] = useState("IND-4089");
  const [password, setPassword] = useState("••••••••••••");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const roleDetails = {
    staff: {
      title: "Plant Staff",
      hint: "Use your Employee ID (e.g., IND-4089) or official GSSC mail",
      defaultDestination: "/portal",
      defaultUser: "IND-4089",
    },
    admin: {
      title: "Eng. Admin",
      hint: "Station / Engineering Lead credentials with multi-factor token",
      defaultDestination: "/admin",
      defaultUser: "ADM-HAZIRA-04",
    },
    auditor: {
      title: "Auditor",
      hint: "Third-party compliance / ISO inspection access credentials",
      defaultDestination: "/admin",
      defaultUser: "AUD-ISO-2024",
    },
  };

  const handleRoleChange = (newRole: Role) => {
    setRole(newRole);
    setStaffId(roleDetails[newRole].defaultUser);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      router.push(roleDetails[role].defaultDestination);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] relative flex flex-col justify-between items-center p-4 selection:bg-orange-500 selection:text-white overflow-hidden">
      {/* Background SVG Grid & Blur Blobs */}
      <div
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{
          backgroundImage: `radial-gradient(#cbd5e1 1.2px, transparent 1.2px)`,
          backgroundSize: "24px 24px",
        }}
      />
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-400/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Top telemetry status bar */}
      <header className="w-full max-w-5xl z-10 flex items-center justify-between py-4 text-xs font-mono text-slate-500">
        <Link href="/" className="inline-flex items-center gap-1.5 hover:text-slate-900 transition-colors">
          <span className="material-symbols-outlined text-[16px]">arrow_back</span>
          <span>Back to Public Portal</span>
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded bg-white border border-slate-200/80 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-semibold text-slate-700">NODE: HAZIRA-04-AUTH</span>
          </div>
          <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900 text-white font-mono text-[11px]">
            <span className="material-symbols-outlined text-[14px] text-emerald-400">lock</span>
            <span>TLS 1.3 / AES-256</span>
          </div>
        </div>
      </header>

      {/* Center login card */}
      <main className="w-full max-w-md z-10 my-auto">
        <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xl shadow-slate-200/50 p-7 sm:p-9 relative">
          {/* Brand header */}
          <div className="flex flex-col items-center text-center mb-7">
            <Link href="/" className="mb-4">
              <GSSCLogo className="h-11 w-auto" />
            </Link>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-orange-50 border border-orange-200/80 text-[11px] font-mono font-bold text-orange-600 uppercase tracking-wider mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500" />
              Workforce &amp; Client Operations
            </div>
            <h1 className="text-xl font-bold text-slate-900">Secure Industrial Access</h1>
            <p className="text-xs text-slate-500 mt-1">Authenticate via plant telemetry identity</p>
          </div>

          {/* Role selector tabs */}
          <div className="mb-6">
            <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-2">
              Select Operational Role
            </label>
            <div className="grid grid-cols-3 gap-1.5 p-1 bg-slate-100/90 rounded-lg border border-slate-200/60">
              {(["staff", "admin", "auditor"] as Role[]).map((r) => {
                const isSelected = role === r;
                return (
                  <button
                    key={r}
                    type="button"
                    onClick={() => handleRoleChange(r)}
                    className={`py-2 px-1 text-center rounded text-xs font-semibold transition-all ${
                      isSelected
                        ? "bg-white text-orange-600 shadow-sm font-bold"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    {roleDetails[r].title}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
                  Staff ID / Official Email
                </label>
                <span className="text-[10px] font-mono text-orange-600 font-medium">Auto-mapped</span>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
                  badge
                </span>
                <input
                  type="text"
                  required
                  value={staffId}
                  onChange={(e) => setStaffId(e.target.value)}
                  className="w-full pl-9 pr-3 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-mono text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500/20 transition"
                  placeholder="IND-XXXX or user@gsscindia.in"
                />
              </div>
              <p className="text-[11px] text-slate-400 mt-1">{roleDetails[role].hint}</p>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">
                  Password / Key Phrase
                </label>
                <a href="#reset" onClick={(e) => { e.preventDefault(); alert("Please contact Plant Station IT at #4090 to reset hardware security keys."); }} className="text-[10px] font-mono text-orange-600 hover:underline">
                  Forgot key?
                </a>
              </div>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
                  key
                </span>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full pl-9 pr-10 py-2.5 bg-slate-50 border border-slate-200 rounded-lg text-sm font-mono text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white focus:ring-1 focus:ring-orange-500/20 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <span className="material-symbols-outlined text-[18px]">
                    {showPassword ? "visibility_off" : "visibility"}
                  </span>
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between pt-1">
              <label className="flex items-center gap-2 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-400"
                />
                <span className="text-xs text-slate-600">Remember credentials</span>
              </label>
              <span className="text-[11px] font-mono text-slate-400">Session 12H</span>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full mt-2 py-3 px-4 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 flex items-center justify-center gap-2 transition disabled:opacity-75"
            >
              {isLoading ? (
                <>
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>Verifying Node Identity...</span>
                </>
              ) : (
                <>
                  <span>
                    {role === "staff"
                      ? "Enter Employee Portal"
                      : role === "admin"
                      ? "Access Admin Console"
                      : "Open Compliance Dossier"}
                  </span>
                  <span className="material-symbols-outlined text-[18px]">login</span>
                </>
              )}
            </button>
          </form>

          {/* Quick links to test */}
          <div className="mt-6 pt-5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
            <span>Direct Jump:</span>
            <div className="flex gap-3 font-mono">
              <Link href="/portal" className="text-orange-600 hover:underline">
                /portal
              </Link>
              <span>·</span>
              <Link href="/admin" className="text-orange-600 hover:underline">
                /admin
              </Link>
            </div>
          </div>
        </div>

        {/* Security badge notice */}
        <div className="mt-5 text-center flex items-center justify-center gap-4 text-[11px] font-mono text-slate-400">
          <span className="flex items-center gap-1">
            <span className="material-symbols-outlined text-[13px] text-emerald-500">verified_user</span>
            ISO 27001 Certified
          </span>
          <span>·</span>
          <span>Station Hazira Node-04</span>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full max-w-5xl z-10 py-4 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-slate-400 gap-2 border-t border-slate-200/50">
        <div>Authorized personnel only · All operations logged under IPC 43/66</div>
        <div>v2.4.11-rc4 · 24/7 Helpline: +91 98250 00700</div>
      </footer>
    </div>
  );
}

