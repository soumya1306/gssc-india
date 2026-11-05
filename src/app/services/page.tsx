"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const filters = [
  { label: "All Services", count: 13, value: "all" },
  { label: "Operation & Maintenance", count: null, value: "O&M" },
  { label: "Plant Installation", count: null, value: "Installation" },
  { label: "Civil Works", count: null, value: "Civil" },
  { label: "Electrical & Instrumentation", count: null, value: "E&I" },
  { label: "Steel Fabrication", count: null, value: "Fabrication" },
  { label: "Site Services", count: null, value: "Site" },
];

const serviceCards = [
  {
    num: "01",
    category: "O&M",
    title: "Operation & Maintenance",
    icon: "settings",
    desc: "GSSC India provides long-term O&M contracts for gas turbines, steam boilers, rotating equipment, and process plant systems — encompassing preventive maintenance, predictive analytics, and 24×7 control-room operations.",
    competencies: [
      "Gas Turbine O&M (Frame 5/6/7)",
      "Steam Generator Maintenance",
      "Rotating Equipment Overhaul",
      "Predictive Maintenance Programs",
      "24×7 Control Room Operations",
      "Annual Maintenance Contracts",
    ],
    standard: "ISO 55001 Asset Management",
  },
  {
    num: "02",
    category: "Installation",
    title: "Plant Installation",
    icon: "factory",
    desc: "Complete plant installation services encompassing mechanical equipment erection, process piping, structural steel, and system commissioning for new and brownfield industrial facilities.",
    competencies: [
      "Mechanical Equipment Erection",
      "Process & Utility Piping",
      "Structural Steel Erection",
      "Pre-commissioning & Commissioning",
      "Brownfield Tie-ins & Turnarounds",
      "Vendor Coordination & QA/QC",
    ],
    standard: "IBR · ASME B31.3",
  },
  {
    num: "03",
    category: "Civil",
    title: "Civil Works",
    icon: "apartment",
    desc: "Industrial civil and structural works from deep foundations and reinforced concrete structures to steel-framed buildings, roads, drainage, and site infrastructure.",
    competencies: [
      "RCC Foundation & Structures",
      "Pre-Engineered Steel Buildings",
      "Industrial Roads & Paving",
      "Storm Water & Drainage",
      "Underground Utilities",
      "Site Levelling & Earthworks",
    ],
    standard: "IS 456 · IS 800 · NBC",
  },
  {
    num: "04",
    category: "E&I",
    title: "Electrical & Instrumentation",
    icon: "electrical_services",
    desc: "Full E&I scope from HT/LT power systems, MCC panels, and cable trays to field instruments, DCS/SCADA integration, control system wiring, and loop checking.",
    competencies: [
      "HT/LT Power Distribution",
      "Motor Control Centres (MCC)",
      "Field Instrumentation (P&ID)",
      "DCS / SCADA Integration",
      "Control System Wiring & Loop Check",
      "Earthing, Lightning Protection",
    ],
    standard: "IEC 61511 · IS 5578",
  },
  {
    num: "05",
    category: "Fabrication",
    title: "Steel Fabrication",
    icon: "precision_manufacturing",
    desc: "In-house structural and pressure vessel fabrication with IBR certification. All works supported by qualified welders, NDE testing, radiography, and comprehensive quality documentation.",
    competencies: [
      "Structural Steel Fabrication",
      "IBR Pressure Vessel Fabrication",
      "Pipe Spooling & Prefabrication",
      "NDE (UT / RT / PT / MT)",
      "PWHT & Hydro Testing",
      "QA Documentation & MTC",
    ],
    standard: "IBR · ASME Sec. VIII · IS 2062",
  },
  {
    num: "06",
    category: "Site",
    title: "Site Services",
    icon: "engineering",
    desc: "Essential support services that keep projects running safely and efficiently: scaffolding, insulation & cladding, surface preparation and painting, industrial cleaning, safety supervision, and logistics management.",
    competencies: [
      "Industrial Scaffolding",
      "Insulation & Cladding",
      "Surface Preparation & Painting",
      "Industrial Cleaning & Flushing",
      "Safety Supervision & HSE",
      "Site Logistics & Housekeeping",
    ],
    standard: "OSHA / ISO 45001",
  },
];

const editorialCards = [
  {
    title: "Thermal & Gas Power",
    desc: "Gas turbine packages, steam generators, combined-cycle plants, and power plant O&M.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVqKUNqeqhpCCn3kBnScBuqTJn2o3GnJZkFrHAXm74k_KU_3cNEfVGqGcuYrB1A-VBd3yvxcQnMzVQeDhfAXgj_m8q6LH8ywHH5Hm9A_VRrN_I-t0C2BakHm-Vt7kFBqb0D7a_3laMY2XD9M7eMtZ8LHi_P2Q16CqL5OhgNiInl0ZOCdifxelTy3Hxk3GqbU1-qEpD-9h7KN2HqIm3JOk3FLEHb7nzHbfYRhviqDfYkv-wLe_8oI_OdmIv3NJRE17I6KFXZH30DhNaJM70s03iqFI7jXQOh3MQ5qIfz_bExHEv2D-y0A",
  },
  {
    title: "Petrochemical & Fertilizers",
    desc: "Process plant installation, piping, and maintenance for refinery, petrochemical, and fertilizer complexes.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPX_RJaRUYGpF4G2Kb3gMrLzpMLZnNMsEBiQFkIRh8F1CvVmtlYz0TKmR1iAqZ3_fkVMnJzCpVoqgLqxJdtlscLTetDi_3VBiYl_qBT1O24dh2D3v_aJnp0r-9gv5a2w1vNFaSkyK5R-fMm5jx8lNlGNHJr6PsKwV3rNqRqy8BxJTJTVOQ-5H_H0h5oq3B-FkTDkOEMiY9lQMR3lFSFTYlfMrAX1jCbRZI0Hj7oTy_RRrX5aVPT3xz96cJlqNk0P8e0wVA5D8Ke7SkuBjkzuNPz0MXr0TfSO51f0QIB-HgaV8_kNl9Kw",
  },
  {
    title: "Aviation & Transit Utilities",
    desc: "MEP, utility infrastructure, and civil works for airports, metro stations, and transit hubs.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClD-p9ZTvtYq_GXKVGSXFMkCVuulrSJXmBWNhPkEkMQ0XyRmpGSO4Jrm4eHfCFJpBYxh3bz6MBjzRTlb5CJAJ2vn4jreBbSdj9qBMWG2a4BjqPPWsLNsNXDwGUeWqG5pn2cA4SXh_6Hu8TZ-b-jTq6aGgVbMOWcRsQQFLuM6U01ILfgHPgPnnCVNPfEUZXS1daqNNajt4OiXOi-JjJsQT3rYnifAR3A-3vCHNUm-BjhzV8gCfIeEgNMLvjpZMSSjUGCjjVEe0GfFSaJaluJMo6WC3FbxoYFVxFvQ1MLQXKX_YzWUTWJA",
  },
];

export default function ServicesPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all"
    ? serviceCards
    : serviceCards.filter(s => s.category === activeFilter);

  return (
    <div className="min-h-screen bg-[#f8f9ff] font-sans">
      <Navbar />

      {/* Page Header */}
      <section className="pt-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-8 py-16">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-8">
            <Link href="/" className="hover:text-orange-500 transition-colors">Home</Link>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-slate-600">Capabilities & Services</span>
          </nav>
          <h1 className="text-5xl font-black text-slate-900 mb-6 leading-tight">
            Depth across the<br />whole build.
          </h1>
          {/* 4-metric strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-10">
            {[
              { value: "2,200+", label: "Workforce" },
              { value: "2002", label: "Since" },
              { value: "13", label: "Service Pillars" },
              { value: "0 LTI", label: "Focus" },
            ].map((m) => (
              <div key={m.label} className="border-l-2 border-orange-500 pl-4">
                <div className="text-2xl font-black text-slate-900">{m.value}</div>
                <div className="text-xs text-slate-400 font-mono uppercase tracking-wider">{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sticky Filter Tabs */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center gap-1 overflow-x-auto scrollbar-hide py-3">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setActiveFilter(f.value)}
                className={`whitespace-nowrap px-4 py-2 rounded text-xs font-semibold transition-colors flex items-center gap-1.5 ${
                  activeFilter === f.value
                    ? "bg-orange-500 text-white"
                    : "text-slate-500 hover:text-slate-800 hover:bg-slate-50"
                }`}
              >
                {f.label}
                {f.count && (
                  <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    activeFilter === f.value ? "bg-white/20 text-white" : "bg-slate-100 text-slate-500"
                  }`}>{f.count}</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Service Cards Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.map((s) => (
              <article key={s.num} className="bg-white rounded-xl border border-slate-100 p-7 hover:border-orange-200 hover:shadow-md transition-all group" data-category={s.category}>
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono font-bold text-slate-400 tracking-widest">{s.num}</span>
                    <span className="material-symbols-outlined text-orange-400 text-[28px] group-hover:text-orange-500 transition-colors">{s.icon}</span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-orange-50 text-orange-600 uppercase tracking-wider">{s.category}</span>
                </div>
                <h3 className="text-lg font-black text-slate-800 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-5">{s.desc}</p>
                <div className="mb-5">
                  <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">Core Competencies</div>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5">
                    {s.competencies.map((c) => (
                      <li key={c} className="flex items-center gap-1.5 text-xs text-slate-600">
                        <span className="w-1 h-1 rounded-full bg-orange-400 flex-shrink-0" />
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-slate-50">
                  <span className="text-[10px] font-mono text-slate-400">{s.standard}</span>
                  <Link href="/contact" className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                    Technical specifications <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
          {filtered.length === 0 && (
            <div className="text-center py-16 text-slate-400 text-sm">No services in this category.</div>
          )}
        </div>
      </section>

      {/* Editorial — Sectors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-10">
            <div className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest mb-3">Sectors</div>
            <h2 className="text-3xl font-black text-slate-900">We build across industries</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {editorialCards.map((c) => (
              <div key={c.title} className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow">
                <img src={c.image} alt={c.title} className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex flex-col justify-end p-5">
                  <h3 className="font-black text-white text-base mb-1">{c.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Deliver */}
      <section className="py-20 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-10">
            <div className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest mb-3">Methodology</div>
            <h2 className="text-3xl font-black text-slate-900">How We Deliver</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
            {[
              { step: "01", title: "Assess & Plan", icon: "search", desc: "Site survey, scope definition, risk assessment, and detailed project planning." },
              { step: "02", title: "Mobilise", icon: "groups", desc: "Skilled workforce deployment, equipment logistics, and safety induction." },
              { step: "03", title: "Execute", icon: "construction", desc: "Works execution with real-time QA/QC monitoring and daily reporting." },
              { step: "04", title: "Commission & Handover", icon: "done_all", desc: "Pre-commissioning, testing, punch-list clearance, and documentation handover." },
            ].map((p) => (
              <div key={p.step} className="bg-white rounded-xl border border-slate-100 p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono font-bold text-orange-500">{p.step}</span>
                  <span className="material-symbols-outlined text-slate-300 text-[22px]">{p.icon}</span>
                </div>
                <h3 className="font-bold text-slate-800 text-sm">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

