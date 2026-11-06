"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", subject: "", message: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="min-h-screen bg-[#f8f9ff] font-sans">
      <Navbar />

      {/* Header */}
      <section className="pt-16 lg:pt-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="text-xs font-mono font-bold text-orange-500 uppercase tracking-widest mb-3">Contact Us</div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 mb-4 leading-tight">
            Let&apos;s discuss your<br />next project.
          </h1>
          <p className="text-slate-500 text-sm max-w-lg leading-relaxed">
            Whether it&apos;s a long-term O&amp;M contract, a greenfield plant, or a critical turnaround — reach out and our team will respond within one business day.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-10">

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-xl border border-slate-100 p-6 flex flex-col gap-5">
              <div className="font-bold text-slate-800 text-sm uppercase tracking-wider">Head Office</div>
              {[
                { icon: "location_on", label: "Address", value: "GSSC India Pvt. Ltd.\n302, Industrial Hub Tower\nHazira, Surat – 394 510\nGujarat, India" },
                { icon: "phone", label: "Telephone", value: "+91 261 300 4700" },
                { icon: "mail", label: "Email", value: "enquiry@gsscindia.in" },
                { icon: "schedule", label: "Office Hours", value: "Mon – Sat: 09:00 – 18:00 IST" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="material-symbols-outlined text-orange-500 text-[20px] mt-0.5 flex-shrink-0">{item.icon}</span>
                  <div>
                    <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-0.5">{item.label}</div>
                    <div className="text-xs text-slate-700 leading-relaxed whitespace-pre-line">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Emergency / 24x7 */}
            <div className="bg-orange-500 rounded-xl p-5 text-white flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px]">emergency</span>
                <span className="font-bold text-sm">24×7 Site Emergency</span>
              </div>
              <div className="text-orange-100 text-xs leading-relaxed">
                For operational emergencies at any GSSC-managed plant, contact our round-the-clock operations desk.
              </div>
              <div className="font-mono font-black text-lg">+91 98250 00700</div>
            </div>

            {/* Standards */}
            <div className="bg-white rounded-xl border border-slate-100 p-5 flex flex-col gap-3">
              <div className="text-xs font-mono font-bold text-slate-400 uppercase tracking-widest">Certifications</div>
              {["ISO 9001:2015 — Quality Management", "ISO 45001 / OHSAS — Safety", "IBR Licensed — Pressure Equipment", "OISD Compliant — Oil Sector"].map((c) => (
                <div key={c} className="flex items-center gap-2 text-xs text-slate-600">
                  <span className="material-symbols-outlined text-green-500 text-[14px]">verified</span>
                  {c}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-2">
            {submitted ? (
              <div className="bg-white rounded-xl border border-slate-100 p-12 flex flex-col items-center gap-4 text-center">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-[32px]">check_circle</span>
                </div>
                <h2 className="font-black text-slate-800 text-xl">Message Sent!</h2>
                <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
                  Thank you for reaching out. Our team will review your enquiry and respond within one business day.
                </p>
                <button onClick={() => setSubmitted(false)} className="mt-2 px-5 py-2 bg-orange-500 text-white text-sm font-semibold rounded hover:bg-orange-600 transition-colors">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white rounded-xl border border-slate-100 p-8 flex flex-col gap-5">
                <div className="font-bold text-slate-800 text-sm uppercase tracking-wider mb-2">Enquiry Form</div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {[
                    { name: "name", label: "Full Name *", type: "text", placeholder: "Rajesh Kumar" },
                    { name: "company", label: "Company / Organisation", type: "text", placeholder: "ONGC Ltd." },
                    { name: "email", label: "Email Address *", type: "email", placeholder: "rajesh@example.com" },
                    { name: "phone", label: "Phone Number", type: "tel", placeholder: "+91 98XXX XXXXX" },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">{f.label}</label>
                      <input
                        name={f.name}
                        type={f.type}
                        placeholder={f.placeholder}
                        value={(form as Record<string, string>)[f.name]}
                        onChange={handleChange}
                        required={f.label.includes("*")}
                        className="w-full px-3 py-2.5 border border-slate-200 rounded text-sm text-slate-800 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 placeholder:text-slate-300 transition"
                      />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Subject / Service Interest *</label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded text-sm text-slate-800 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 transition bg-white"
                  >
                    <option value="">Select a service area…</option>
                    <option>Operation & Maintenance</option>
                    <option>Plant Installation</option>
                    <option>Civil Works</option>
                    <option>Electrical & Instrumentation</option>
                    <option>Steel Fabrication</option>
                    <option>Site Services</option>
                    <option>General Enquiry</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">Message *</label>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Describe your project requirements, site location, estimated scope, and any other details that would help us respond accurately."
                    value={form.message}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2.5 border border-slate-200 rounded text-sm text-slate-800 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-200 placeholder:text-slate-300 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded hover:bg-orange-600 transition-colors shadow-sm text-sm mt-1"
                >
                  <span className="material-symbols-outlined text-[18px]">send</span>
                  Send Enquiry
                </button>

                <p className="text-[10px] text-slate-400 font-mono leading-relaxed">
                  By submitting this form you consent to GSSC India processing your data to respond to your enquiry. We do not share your details with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

