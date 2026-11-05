"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const projectCategories = ["All Work", "Power & Utilities", "Industrial", "Civil Works", "Aviation"];

const projects = [
  {
    title: "Hazira High-Pressure Gas Station",
    category: "Power & Utilities",
    year: "2023",
    location: "Hazira, Gujarat",
    description: "Complete O&M of a 420 MW combined-cycle gas turbine station including turbine maintenance, instrumentation calibration, and 24×7 control room operations.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDVqKUNqeqhpCCn3kBnScBuqTJn2o3GnJZkFrHAXm74k_KU_3cNEfVGqGcuYrB1A-VBd3yvxcQnMzVQeDhfAXgj_m8q6LH8ywHH5Hm9A_VRrN_I-t0C2BakHm-Vt7kFBqb0D7a_3laMY2XD9M7eMtZ8LHi_P2Q16CqL5OhgNiInl0ZOCdifxelTy3Hxk3GqbU1-qEpD-9h7KN2HqIm3JOk3FLEHb7nzHbfYRhviqDfYkv-wLe_8oI_OdmIv3NJRE17I6KFXZH30DhNaJM70s03iqFI7jXQOh3MQ5qIfz_bExHEv2D-y0A",
  },
  {
    title: "ONGC Hazira Plant Expansion",
    category: "Industrial",
    year: "2022",
    location: "Hazira, Gujarat",
    description: "Structural steel fabrication, piping, and mechanical installation for a new processing train handling 15 MMSCMD of natural gas for ONGC's Hazira complex.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDPX_RJaRUYGpF4G2Kb3gMrLzpMLZnNMsEBiQFkIRh8F1CvVmtlYz0TKmR1iAqZ3_fkVMnJzCpVoqgLqxJdtlscLTetDi_3VBiYl_qBT1O24dh2D3v_aJnp0r-9gv5a2w1vNFaSkyK5R-fMm5jx8lNlGNHJr6PsKwV3rNqRqy8BxJTJTVOQ-5H_H0h5oq3B-FkTDkOEMiY9lQMR3lFSFTYlfMrAX1jCbRZI0Hj7oTy_RRrX5aVPT3xz96cJlqNk0P8e0wVA5D8Ke7SkuBjkzuNPz0MXr0TfSO51f0QIB-HgaV8_kNl9Kw",
  },
  {
    title: "GMR Hyderabad Airport Utility Block",
    category: "Aviation",
    year: "2022",
    location: "Hyderabad, Telangana",
    description: "Civil and MEP works for a 2,400 sq.m. utility block including steam distribution, chilled water plant, and electrical switchyard for GMR's airport expansion.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuClD-p9ZTvtYq_GXKVGSXFMkCVuulrSJXmBWNhPkEkMQ0XyRmpGSO4Jrm4eHfCFJpBYxh3bz6MBjzRTlb5CJAJ2vn4jreBbSdj9qBMWG2a4BjqPPWsLNsNXDwGUeWqG5pn2cA4SXh_6Hu8TZ-b-jTq6aGgVbMOWcRsQQFLuM6U01ILfgHPgPnnCVNPfEUZXS1daqNNajt4OiXOi-JjJsQT3rYnifAR3A-3vCHNUm-BjhzV8gCfIeEgNMLvjpZMSSjUGCjjVEe0GfFSaJaluJMo6WC3FbxoYFVxFvQ1MLQXKX_YzWUTWJA",
  },
  {
    title: "Navi Mumbai Industrial Township",
    category: "Civil Works",
    year: "2021",
    location: "Navi Mumbai, Maharashtra",
    description: "Civil infrastructure package for a 60-acre industrial township: roads, drainage, storm water, water supply and underground utilities for 12 industrial plots.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDFZwTHiPDQjB_LvvzVOGmUTT7MN3UqvOCDiPLSUOKs9UHCaHGYUCDtSHsVKFTnalBmrqfzETpjBiHqnv37OO-LMgB8e0dEqTr0CKJL4lXCMcAHBVa-bUMi3EVXp1Z5zTzXGMuCKj7GRFI7Mn5CY0nxWo6yPdFsAjNkNfQr-m5oGf8u5jl_oBVf7MpvqE5lW0kZ6HWjmJQAjIiYsU-T0BRJqrC8Oq_WixnJNbzlS88m-vT2CRF9kCAP3vRQiUH4a3IDy2n8bqbSb7-Yn3r8bPt2d2XfBP0ICXgGVYVUSE7KHNTbTYFEA",
  },
];

const services = [
  { num: "01", icon: "settings", title: "Operation & Maintenance", desc: "Long-term O&M contracts for gas turbines, boilers, steam systems, and rotating equipment with predictive maintenance frameworks." },
  { num: "02", icon: "construction", title: "Plant Installation", desc: "End-to-end plant installation including mechanical, piping, structural, and commissioning services for industrial facilities." },
  { num: "03", icon: "apartment", title: "Civil Works", desc: "Industrial civil works from foundations and structural steel to buildings, roads, and site infrastructure." },
  { num: "04", icon: "electrical_services", title: "Electrical & Instrumentation", desc: "Complete E&I packages: HT/LT power systems, control panels, field instrumentation, DCS/SCADA integration." },
  { num: "05", icon: "precision_manufacturing", title: "Steel Fabrication", desc: "In-house structural and pressure vessel fabrication with IBR certification, non-destructive testing, and quality documentation." },
  { num: "06", icon: "engineering", title: "Site Services", desc: "Supplementary site services: scaffolding, insulation, painting, housekeeping, safety supervision, and logistics." },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All Work");

  const filteredProjects = activeCategory === "All Work"
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#f8f9ff] font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-20 min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-8 py-24 w-full">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Left: Text */}
            <div className="col-span-12 lg:col-span-7 flex flex-col gap-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-orange-200 bg-orange-50 w-fit">
                <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                <span className="text-xs font-mono font-semibold text-orange-600 tracking-widest uppercase">Industrial Engineering · Since 2002</span>
              </div>
              <h1 className="text-5xl xl:text-6xl font-black text-slate-900 leading-[1.08] tracking-tight">
                Gas & Steam Power.<br />
                <span className="text-orange-500">Engineering</span> Across India.
              </h1>
              <p className="text-lg text-slate-500 max-w-xl leading-relaxed">
                GSSC India is the country&apos;s dedicated heavy industrial engineering partner—delivering O&amp;M, construction, and compliance for gas, steam, and petrochemical facilities.
              </p>
              <div className="flex flex-wrap gap-3 mt-2">
                <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-sm text-sm">
                  <span className="material-symbols-outlined text-[18px]">explore</span>
                  Explore Services
                </Link>
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors text-sm">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  Contact Us
                </Link>
              </div>
              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
                <div>
                  <div className="text-3xl font-black text-slate-900">1,800<span className="text-orange-500">+</span></div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">Workforce</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">2002</div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">Est.</div>
                </div>
                <div>
                  <div className="text-3xl font-black text-slate-900">100<span className="text-orange-500">%</span></div>
                  <div className="text-xs text-slate-500 font-mono uppercase tracking-wider mt-1">LTI-Free Target</div>
                </div>
              </div>
            </div>
            {/* Right: Image */}
            <div className="col-span-12 lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-md">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVqKUNqeqhpCCn3kBnScBuqTJn2o3GnJZkFrHAXm74k_KU_3cNEfVGqGcuYrB1A-VBd3yvxcQnMzVQeDhfAXgj_m8q6LH8ywHH5Hm9A_VRrN_I-t0C2BakHm-Vt7kFBqb0D7a_3laMY2XD9M7eMtZ8LHi_P2Q16CqL5OhgNiInl0ZOCdifxelTy3Hxk3GqbU1-qEpD-9h7KN2HqIm3JOk3FLEHb7nzHbfYRhviqDfYkv-wLe_8oI_OdmIv3NJRE17I6KFXZH30DhNaJM70s03iqFI7jXQOh3MQ5qIfz_bExHEv2D-y0A"
                  alt="Gas turbine plant operations"
                  className="w-full h-80 object-cover rounded-xl shadow-2xl"
                />
                {/* Credential card */}
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-xl p-3 border border-slate-100 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                    <span className="material-symbols-outlined text-orange-600 text-[20px]">verified</span>
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-800">ISO 9001:2015</div>
                    <div className="text-[10px] text-slate-500 font-mono">Quality Certified · IBR Licensed</div>
                  </div>
                </div>
                {/* ISO badge */}
                <div className="absolute -top-3 -right-3 bg-orange-500 text-white rounded-lg p-2 shadow-lg">
                  <span className="text-xs font-black font-mono tracking-wider">ISO<br/>45001</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 01 — The GSSC Standard */}
      <section className="py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-12 gap-12 items-start">
            <div className="col-span-12 lg:col-span-5 flex flex-col gap-6 sticky top-28">
              <div className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest">Section 01</div>
              <h2 className="text-4xl font-black text-slate-900 leading-tight">
                Capability at scale.<br />Integrity across India.
              </h2>
              <p className="text-slate-500 leading-relaxed text-sm">
                Since 2002, GSSC India has built its reputation on technical depth, safety culture, and long-term client partnerships. We operate where it matters most — inside complex gas and steam environments where downtime is not an option.
              </p>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                View all capabilities <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
            <div className="col-span-12 lg:col-span-7 grid grid-cols-2 gap-4">
              {[
                { label: "Est.", value: "2002", desc: "Over two decades of uninterrupted industrial operations across India." },
                { label: "Workforce", value: "1,800+", desc: "Skilled engineers, technicians, and trade workers deployed nationwide." },
                { label: "Service Pillars", value: "14+", desc: "Comprehensive capability set covering the full project lifecycle." },
                { label: "LTI Focus", value: "100%", desc: "Zero Lost-Time Incident target culture embedded in every project." },
              ].map((m) => (
                <div key={m.label} className="bg-white rounded-xl border border-slate-100 p-6 flex flex-col gap-2 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">{m.label}</div>
                  <div className="text-4xl font-black text-slate-900">{m.value}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{m.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 02 — What We Do */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12">
            <div className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest mb-3">Section 02</div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <h2 className="text-4xl font-black text-slate-900">What We Do</h2>
              <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-orange-500 hover:text-orange-600 transition-colors whitespace-nowrap">
                All 13 services <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <div key={s.num} className="group bg-[#f8f9ff] rounded-xl border border-slate-100 p-6 hover:border-orange-200 hover:shadow-md transition-all">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-slate-400 tracking-widest">{s.num}</span>
                  <span className="material-symbols-outlined text-slate-300 group-hover:text-orange-400 transition-colors text-[28px]">{s.icon}</span>
                </div>
                <h3 className="font-bold text-slate-800 mb-2 text-sm">{s.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed mb-4">{s.desc}</p>
                <Link href="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-orange-500 hover:text-orange-600 transition-colors">
                  Learn more <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03 — Selected Experience */}
      <section id="projects" className="py-24 bg-[#f8f9ff]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-10">
            <div className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest mb-3">Section 03</div>
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
              <h2 className="text-4xl font-black text-slate-900">Selected Experience</h2>
              {/* Filter tabs */}
              <div className="flex flex-wrap gap-2">
                {projectCategories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-3 py-1.5 rounded text-xs font-semibold transition-colors ${
                      activeCategory === cat
                        ? "bg-orange-500 text-white"
                        : "bg-white text-slate-600 border border-slate-200 hover:border-orange-200"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((p) => (
              <div key={p.title} className="group bg-white rounded-xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 px-2 py-1 bg-black/50 backdrop-blur-sm rounded text-[10px] text-white font-mono font-bold uppercase tracking-wider">
                    {p.category}
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-bold text-slate-800 text-sm">{p.title}</h3>
                    <span className="text-xs text-slate-400 font-mono">{p.year}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-slate-400 mb-3">
                    <span className="material-symbols-outlined text-[14px]">location_on</span>
                    {p.location}
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">{p.description}</p>
                </div>
              </div>
            ))}
          </div>
          {filteredProjects.length === 0 && (
            <div className="text-center py-16 text-slate-400 text-sm">No projects in this category yet.</div>
          )}
          {/* Callout strip */}
          <div className="mt-10 bg-slate-900 rounded-xl p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <div className="text-white font-bold text-lg">22+ years of project delivery</div>
              <div className="text-slate-400 text-sm mt-1">Across gas, steam, petrochemical, civil, and aviation sectors</div>
            </div>
            <Link href="/contact" className="whitespace-nowrap inline-flex items-center gap-2 px-5 py-3 rounded bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors">
              Start a conversation <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 04 — Non-Negotiables */}
      <section id="standards" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="mb-12 text-center">
            <div className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest mb-3">Section 04</div>
            <h2 className="text-4xl font-black text-slate-900">Our Non-Negotiables</h2>
            <p className="text-slate-500 mt-3 max-w-xl mx-auto text-sm">Three pillars that define every project, every contract, every day on site.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "verified", title: "Quality", color: "text-orange-500", bg: "bg-orange-50", desc: "ISO 9001:2015 certified processes with stringent QA/QC at every stage — from material inspection to final commissioning." },
              { icon: "shield", title: "Safety", color: "text-blue-500", bg: "bg-blue-50", desc: "Zero Lost-Time Incident target. OHSAS / ISO 45001 compliant. Every worker trained, every hazard mapped before work begins." },
              { icon: "visibility", title: "Transparency", color: "text-green-600", bg: "bg-green-50", desc: "Real-time reporting, digital documentation, and open client communication at every project milestone." },
            ].map((p) => (
              <div key={p.title} className="rounded-xl border border-slate-100 p-8 flex flex-col gap-4 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 rounded-full ${p.bg} flex items-center justify-center`}>
                  <span className={`material-symbols-outlined ${p.color} text-[24px]`}>{p.icon}</span>
                </div>
                <h3 className="font-black text-slate-800 text-xl">{p.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="py-20 bg-[#f8f9ff]">
        <div className="max-w-4xl mx-auto px-8 text-center flex flex-col items-center gap-6">
          <h2 className="text-4xl font-black text-slate-900">Ready to work together?</h2>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
            Whether you need a long-term O&amp;M partner, a construction contractor, or a specialist for a critical turnaround — we&apos;re equipped and ready.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded bg-orange-500 text-white font-semibold hover:bg-orange-600 transition-colors shadow-sm text-sm">
              <span className="material-symbols-outlined text-[18px]">mail</span>
              Contact Us
            </Link>
            <Link href="/login" className="inline-flex items-center gap-2 px-6 py-3 rounded border border-slate-200 text-slate-700 font-semibold hover:bg-white transition-colors text-sm">
              <span className="material-symbols-outlined text-[18px]">login</span>
              Employee Portal
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
