"use client";

import { useState } from "react";
import Link from "next/link";
import { GSSCLogo } from "@/components/GSSCLogo";

export default function EmployeePortalPage() {
  const [activeTab, setActiveTab] = useState("details");
  const [sameAddress, setSameAddress] = useState(false);
  const [savedMessage, setSavedMessage] = useState<string | null>(null);

  // Form State
  const [form, setForm] = useState({
    username: "rajesh.k4089",
    firstName: "Rajesh",
    lastName: "Kumar",
    dob: "1988-06-14",
    placeOfBirth: "Varanasi, UP",
    gender: "Male",
    nationality: "Indian",
    maritalStatus: "Married",
    religion: "Hinduism",
    bloodGroup: "O+",

    // ID
    aadhaar: "5821 9840 8921",
    pan: "ABCDE1234F",
    uan: "1009 2837 4612",
    esic: "3100 8920 1823",

    // Contact
    mobilePrimary: "+91 98251 40892",
    mobileAlternate: "+91 98251 40890",
    phoneOffice: "+91 261 300 4789",
    emailPrimary: "rajesh.kumar@gsscindia.in",
    emailAlternate: "rajesh.eng88@gmail.com",

    // Emergency Contact
    emergencyName: "Sunita Kumar",
    emergencyRelation: "Spouse",
    emergencyPhone: "+91 98251 40899",

    // Present Address
    presentStreet: "Flat 402, Shivam Enclave, Dumas Road",
    presentCity: "Surat",
    presentState: "Gujarat",
    presentPincode: "395007",
    presentCountry: "India",

    // Permanent Address
    permStreet: "Village Rampur, Post Office Shivpur",
    permCity: "Varanasi",
    permState: "Uttar Pradesh",
    permPincode: "221001",
    permCountry: "India",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = (type: "draft" | "submit") => {
    setSavedMessage(
      type === "draft"
        ? "Draft saved successfully to local telemetry node."
        : "Profile & KYC dossier submitted for Admin verification."
    );
    setTimeout(() => setSavedMessage(null), 4000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex">
      {/* Left Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200/90 flex flex-col fixed inset-y-0 left-0 z-30 shadow-xs">
        {/* Brand */}
        <div className="h-16 px-5 border-b border-slate-100 flex items-center justify-between">
          <Link href="/">
            <GSSCLogo />
          </Link>
          <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600">
            v2.4
          </span>
        </div>

        {/* User Card in Sidebar */}
        <div className="p-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-orange-500 text-white font-bold flex items-center justify-center text-sm shadow-sm shadow-orange-500/30">
              RK
            </div>
            <div className="overflow-hidden">
              <div className="text-sm font-bold text-slate-900 truncate">Rajesh Kumar</div>
              <div className="text-[11px] font-mono text-orange-600 font-semibold truncate">
                #IND-4089 · PLANT ENG
              </div>
            </div>
          </div>

          {/* KYC progress bar */}
          <div className="mt-4 pt-3 border-t border-slate-100">
            <div className="flex items-center justify-between text-[11px] font-mono mb-1.5">
              <span className="text-slate-500">Compliance &amp; KYC</span>
              <span className="text-emerald-600 font-bold">98% Verified</span>
            </div>
            <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
              <div className="bg-emerald-500 h-full rounded-full" style={{ width: "98%" }} />
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
          {[
            { id: "details", label: "My Profile Details", icon: "badge" },
            { id: "docs", label: "Uploaded Documents", icon: "folder_shared", badge: "4 Files" },
            { id: "notifications", label: "Station Alerts", icon: "notifications", badge: "2" },
            { id: "payments", label: "Compensation & PF", icon: "payments" },
            { id: "safety", label: "HSE & Work Permits", icon: "security" },
            { id: "help", label: "Help & Operations Desk", icon: "support_agent" },
          ].map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold transition ${isActive
                    ? "bg-orange-50 text-orange-600 font-bold"
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                  }`}
              >
                <div className="flex items-center gap-2.5">
                  <span
                    className={`material-symbols-outlined text-[18px] ${isActive ? "text-orange-600" : "text-slate-400"
                      }`}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${isActive
                        ? "bg-orange-200 text-orange-800"
                        : "bg-slate-100 text-slate-500"
                      }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-slate-100 space-y-1">
          <Link
            href="/admin"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-100 transition"
          >
            <span className="material-symbols-outlined text-slate-400 text-[18px]">
              admin_panel_settings
            </span>
            <span>Switch to Admin View</span>
          </Link>
          <Link
            href="/login"
            className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-semibold text-rose-600 hover:bg-rose-50 transition"
          >
            <span className="material-symbols-outlined text-rose-500 text-[18px]">logout</span>
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Fixed Top Header */}
        <header className="h-16 bg-white/95 backdrop-blur-md border-b border-slate-200/90 fixed top-0 right-0 left-64 z-20 px-8 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <div className="px-2 py-0.5 rounded bg-orange-100 text-orange-800 text-[11px] font-mono font-bold uppercase tracking-wider">
              PORTAL
            </div>
            <div>
              <h1 className="text-sm font-bold text-slate-900">Employee Operational Profile</h1>
              <p className="text-[11px] font-mono text-slate-400">Station 04 - Hazira High-Pressure Unit</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-mono font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Shift: General / Plant Online</span>
            </div>

            <div className="flex items-center gap-2 pl-3 border-l border-slate-200">
              <button
                type="button"
                className="w-9 h-9 rounded-lg hover:bg-slate-100 text-slate-600 flex items-center justify-center relative"
              >
                <span className="material-symbols-outlined text-[20px]">notifications</span>
                <span className="w-2 h-2 rounded-full bg-orange-500 absolute top-2 right-2 ring-2 ring-white" />
              </button>
              <Link
                href="/"
                className="text-xs font-semibold text-slate-500 hover:text-orange-600 px-2 py-1"
              >
                Public Site
              </Link>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="p-8 pt-24 pb-28 flex-1 max-w-6xl w-full mx-auto space-y-6">
          {savedMessage && (
            <div className="bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-3 rounded-xl flex items-center gap-3 text-sm animate-fade-in shadow-xs">
              <span className="material-symbols-outlined text-emerald-600">check_circle</span>
              <span className="font-medium">{savedMessage}</span>
            </div>
          )}

          {/* Profile Overview Card */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-6 shadow-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-500 text-white font-black text-2xl flex items-center justify-center shadow-md shadow-orange-500/20">
                  RK
                </div>
                <button
                  type="button"
                  title="Upload Photo"
                  className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-white border border-slate-200 text-slate-600 hover:text-orange-600 flex items-center justify-center shadow-xs"
                >
                  <span className="material-symbols-outlined text-[14px]">photo_camera</span>
                </button>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h2 className="text-xl font-bold text-slate-900">Rajesh Kumar</h2>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[11px] font-mono font-bold">
                    Active Verified
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-0.5 font-medium">
                  Lead Plant Engineer · Gas Turbine Operations
                </p>
                <div className="flex flex-wrap items-center gap-3 mt-2 text-xs font-mono text-slate-400">
                  <span>ID: <strong className="text-slate-700">IND-4089</strong></span>
                  <span>·</span>
                  <span>Joining: <strong className="text-slate-700">12 May 2018</strong></span>
                  <span>·</span>
                  <span>Blood: <strong className="text-slate-700">O+</strong></span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              <button
                type="button"
                onClick={() => alert("Downloading Digital Station ID Card PDF...")}
                className="px-3.5 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 inline-flex items-center gap-1.5 transition"
              >
                <span className="material-symbols-outlined text-[16px]">id_card</span>
                <span>Download ID Card</span>
              </button>
              <button
                type="button"
                onClick={() => alert("Document upload dialog triggered.")}
                className="px-3.5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold inline-flex items-center gap-1.5 shadow-xs shadow-orange-500/20 transition"
              >
                <span className="material-symbols-outlined text-[16px]">upload_file</span>
                <span>Upload New Docs</span>
              </button>
            </div>
          </div>

          {/* Form Section 1: Basic Details */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-[20px]">person</span>
                <h3 className="font-bold text-slate-900 text-sm">SEC BD-101: Basic Personal Dossier</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">HR Registry #BD-902</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Portal Username
                </label>
                <input
                  type="text"
                  disabled
                  value={form.username}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-lg text-xs font-mono text-slate-600 cursor-not-allowed"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={form.dob}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Place of Birth
                </label>
                <input
                  type="text"
                  name="placeOfBirth"
                  value={form.placeOfBirth}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Gender
                </label>
                <select
                  name="gender"
                  value={form.gender}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                >
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Nationality
                </label>
                <input
                  type="text"
                  name="nationality"
                  value={form.nationality}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Marital Status
                </label>
                <select
                  name="maritalStatus"
                  value={form.maritalStatus}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                >
                  <option>Married</option>
                  <option>Single</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Blood Group
                </label>
                <select
                  name="bloodGroup"
                  value={form.bloodGroup}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-medium text-slate-800 bg-white focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500/20"
                >
                  <option>O+</option>
                  <option>O-</option>
                  <option>A+</option>
                  <option>A-</option>
                  <option>B+</option>
                  <option>B-</option>
                  <option>AB+</option>
                  <option>AB-</option>
                </select>
              </div>
            </div>
          </div>

          {/* Form Section 2: Statutory Identification & Emergency Contact */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-[20px]">verified</span>
                <h3 className="font-bold text-slate-900 text-sm">
                  SEC ID-204: Statutory Identification &amp; Contact Registry
                </h3>
              </div>
              <span className="text-[11px] font-mono text-emerald-600 font-semibold">
                UIDAI &amp; EPFO Synced
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    Aadhaar Number
                  </label>
                  <span className="text-[10px] text-emerald-600 font-bold font-mono">VERIFIED</span>
                </div>
                <input
                  type="text"
                  name="aadhaar"
                  value={form.aadhaar}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-emerald-300 bg-emerald-50/20 rounded-lg text-xs font-mono text-slate-800 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  PAN Number
                </label>
                <input
                  type="text"
                  name="pan"
                  value={form.pan}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono uppercase text-slate-800 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Provident Fund UAN
                </label>
                <input
                  type="text"
                  name="uan"
                  value={form.uan}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Primary Mobile (Registered)
                </label>
                <input
                  type="tel"
                  name="mobilePrimary"
                  value={form.mobilePrimary}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Alternate Contact Number
                </label>
                <input
                  type="tel"
                  name="mobileAlternate"
                  value={form.mobileAlternate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:outline-none focus:border-orange-500"
                />
              </div>

              <div>
                <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                  Official Plant Email
                </label>
                <input
                  type="email"
                  name="emailPrimary"
                  value={form.emailPrimary}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono text-slate-800 focus:outline-none focus:border-orange-500"
                />
              </div>
            </div>

            {/* Emergency sub-panel */}
            <div className="mt-5 p-4 rounded-xl bg-orange-50/50 border border-orange-200/60">
              <div className="text-xs font-bold text-orange-900 mb-3 flex items-center gap-1.5">
                <span className="material-symbols-outlined text-orange-600 text-[18px]">emergency</span>
                <span>Plant Site Emergency Point of Contact</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Contact Name
                  </label>
                  <input
                    type="text"
                    name="emergencyName"
                    value={form.emergencyName}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Relationship
                  </label>
                  <input
                    type="text"
                    name="emergencyRelation"
                    value={form.emergencyRelation}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Emergency Phone
                  </label>
                  <input
                    type="tel"
                    name="emergencyPhone"
                    value={form.emergencyPhone}
                    onChange={handleChange}
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-xs font-mono text-slate-800"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Form Section 3: Address Directory */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-7 shadow-xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-500 text-[20px]">home_pin</span>
                <h3 className="font-bold text-slate-900 text-sm">SEC LOC-302: Residential Address Directory</h3>
              </div>
              <span className="text-[11px] font-mono text-slate-400">Postal Verified</span>
            </div>

            {/* Present Address */}
            <div className="space-y-4">
              <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                Present / Residential Address (Work Station)
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    Street Address &amp; Apartment
                  </label>
                  <input
                    type="text"
                    name="presentStreet"
                    value={form.presentStreet}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    City / Town
                  </label>
                  <input
                    type="text"
                    name="presentCity"
                    value={form.presentCity}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    State
                  </label>
                  <input
                    type="text"
                    name="presentState"
                    value={form.presentState}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    PIN Code
                  </label>
                  <input
                    type="text"
                    name="presentPincode"
                    value={form.presentPincode}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono text-slate-800"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                    Country
                  </label>
                  <input
                    type="text"
                    name="presentCountry"
                    value={form.presentCountry}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-800"
                  />
                </div>
              </div>
            </div>

            {/* Permanent Address Toggle */}
            <div className="pt-6 mt-6 border-t border-slate-100">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Permanent / Home State Address
                </h4>
                <label className="flex items-center gap-2 text-xs font-medium text-slate-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={sameAddress}
                    onChange={(e) => {
                      setSameAddress(e.target.checked);
                      if (e.target.checked) {
                        setForm((prev) => ({
                          ...prev,
                          permStreet: prev.presentStreet,
                          permCity: prev.presentCity,
                          permState: prev.presentState,
                          permPincode: prev.presentPincode,
                          permCountry: prev.presentCountry,
                        }));
                      }
                    }}
                    className="w-4 h-4 rounded border-slate-300 text-orange-500 focus:ring-orange-400"
                  />
                  <span>Same as Present Address</span>
                </label>
              </div>

              {!sameAddress && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                      Permanent Street Address
                    </label>
                    <input
                      type="text"
                      name="permStreet"
                      value={form.permStreet}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                      City / District
                    </label>
                    <input
                      type="text"
                      name="permCity"
                      value={form.permCity}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                      State
                    </label>
                    <input
                      type="text"
                      name="permState"
                      value={form.permState}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                      PIN Code
                    </label>
                    <input
                      type="text"
                      name="permPincode"
                      value={form.permPincode}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs font-mono text-slate-800"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1.5">
                      Country
                    </label>
                    <input
                      type="text"
                      name="permCountry"
                      value={form.permCountry}
                      onChange={handleChange}
                      className="w-full px-3 py-2 border border-slate-200 rounded-lg text-xs text-slate-800"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Sticky Bottom Action Bar */}
        <div className="fixed bottom-0 right-0 left-64 bg-white/95 backdrop-blur-md border-t border-slate-200/90 py-3.5 px-8 z-20 flex items-center justify-between shadow-lg">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-mono text-slate-500">
              TELEMETRY REGISTRY · <strong className="text-slate-800">SYNCED WITH HAZIRA-04</strong>
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => handleSave("draft")}
              className="px-4 py-2 rounded-lg border border-slate-200 hover:bg-slate-50 text-xs font-bold text-slate-700 transition"
            >
              Save Draft
            </button>
            <button
              type="button"
              onClick={() => handleSave("submit")}
              className="px-5 py-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs font-bold shadow-sm shadow-orange-500/20 inline-flex items-center gap-1.5 transition"
            >
              <span className="material-symbols-outlined text-[16px]">cloud_upload</span>
              <span>Submit for Verification</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

