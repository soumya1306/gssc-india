"use client";

import { useState } from "react";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const filterCategories = [
  { label: "All Work", id: "all" },
  { label: "Power & Utilities", id: "power" },
  { label: "Industrial", id: "industrial" },
  { label: "Civil Works", id: "civil" },
  { label: "Aviation", id: "aviation" },
];

const capabilityCards = [
  {
    num: "01",
    icon: "precision_manufacturing",
    title: "Operation & Maintenance",
    desc: "Power, industrial and facility systems, outage support, preventive maintenance, and planned plant turnaround execution.",
  },
  {
    num: "02",
    icon: "construction",
    title: "Plant & Machinery Installation",
    desc: "Heavy equipment rigging, comprehensive plant commissioning, machinery relocation, and micro-precision mechanical alignment.",
  },
  {
    num: "03",
    icon: "foundation",
    title: "Civil Works & Construction",
    desc: "Industrial heavy foundations, structural reinforced concrete, plant drainage networks, and facility infrastructure delivery.",
  },
  {
    num: "04",
    icon: "bolt",
    title: "Electrical & Instrumentation",
    desc: "High-voltage substation works, loop testing, calibration, DCS integration, tray routing, and heavy switchgear installation.",
  },
  {
    num: "05",
    icon: "hardware",
    title: "Steel Fabrication & Erection",
    desc: "Structural steel engineering, complex piping spools, demanding architectural canopies, and heavy industrial gantry structures.",
  },
  {
    num: "06",
    icon: "shield",
    title: "Specialist Site Services",
    desc: "Certified industrial scaffolding, abrasive blasting, protective surface coating, thermal insulation, and HVAC systems.",
  },
];

const projectRecords = [
  {
    id: "mundra",
    category: "power",
    tag: "01 / Gujarat • Power & Utilities",
    title: "Mundra Mega Power – Gas & Steam Turbine Turnaround",
    desc: "High-precision steam turbine overhaul, balance of plant preventive maintenance, rotor alignment, HP/IP steam piping inspection, and 24/7 technical crew mobilization during major outage.",
    sector: "Turbine Overhaul & Piping",
    image: "/images/homepage/project-mundra.jpg",
  },
  {
    id: "chandrapur",
    category: "industrial",
    tag: "02 / Maharashtra • Cement & Heavy Process",
    title: "Chandrapur Cement Complex – Kiln & Mill Overhaul",
    desc: "Complete mechanical refurbishment of rotary kilns, raw mill roller assemblies, structural conveyor galleries, and high-temperature gas ducting systems across central India.",
    sector: "Mechanical & Heavy Rigging",
    image: "/images/homepage/project-chandrapur.jpg",
  },
  {
    id: "jamnagar",
    category: "civil",
    tag: "03 / Jamnagar • Petrochemical & Refinery",
    title: "Petrochemical Expansion – Heavy Civil & Steel Structures",
    desc: "Deep foundation engineering, heavy compressor deck civil works, underground utilities, and multi-tier structural steel piperack erection in high-hazard refinery environments.",
    sector: "Civil & Heavy Fabrication",
    image: "/images/homepage/project-petrochem.jpg",
  },
  {
    id: "airport",
    category: "aviation",
    tag: "04 / Tamil Nadu & Karnataka • Aviation & Transit",
    title: "Southern International Airport – BHS & Electromechanical",
    desc: "Turnkey installation and testing of automated baggage conveyor lines, high-bay electrical distributions, HVAC instrumentation, and specialized technical maintenance deployment.",
    sector: "Electromechanical Systems",
    image: "/images/homepage/project-airport.jpg",
  },
];

export default function HomePage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const visibleProjects =
    activeFilter === "all"
      ? projectRecords
      : projectRecords.filter((p) => p.category === activeFilter);

  return (
    <div className="bg-surface-container-lowest font-body-md text-body-md text-on-surface antialiased min-h-screen">
      <Navbar />

      <main className="w-full pt-20 bg-surface-container-lowest">
        <div className="flex flex-col w-full">
          {/* HERO SECTION */}
          <section className="relative w-full overflow-hidden bg-surface-container-lowest border-b-0">
            <div className="w-full px-margin md:px-margin-desktop pt-8 pb-16 lg:pt-14 lg:pb-24">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
                {/* Hero Text Content */}
                <div className="lg:col-span-7 flex flex-col gap-6 lg:pr-8">
                  <div className="inline-flex items-center gap-2 self-start bg-surface-container-low px-3 py-1.5 rounded-lg">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      India Industrial Engineering &amp; Power Partner
                    </span>
                  </div>

                  <h1 className="font-display-lg text-display-lg-mobile md:text-display-lg text-on-surface tracking-tight font-bold">
                    Gas &amp; Steam Power.
                    <br />
                    <span className="text-primary italic font-normal">
                      Engineering Across India.
                    </span>
                  </h1>

                  <p className="font-body-lg text-body-lg text-secondary leading-relaxed max-w-2xl">
                    GSSC INDIA is a premier industrial engineering partner delivering comprehensive steam
                    turbine, gas turbine, plant overhaul, electromechanical, and heavy industrial
                    maintenance solutions. Backing national infrastructure across Gujarat, Maharashtra,
                    Tamil Nadu, and the Eastern Industrial Corridor.
                  </p>

                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center px-6 py-3.5 rounded bg-primary text-on-primary font-body-md text-body-md font-semibold hover:bg-primary-container transition-all shadow-sm"
                    >
                      Explore our services
                    </Link>
                    <Link
                      href="#projects"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-surface-container-low text-on-surface font-body-md text-body-md font-semibold hover:bg-surface-container hover:text-primary transition-all"
                    >
                      <span>View India projects</span>
                      <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6 mt-4 border-t-0 bg-surface-container-low/70 p-5 rounded-xl">
                    <div className="flex flex-col">
                      <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                        1,800<span className="text-primary">+</span>
                      </span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mt-1">
                        Specialist Workforce in India
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                        2002
                      </span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mt-1">
                        Delivering Proven Excellence
                      </span>
                    </div>
                    <div className="flex flex-col col-span-2 sm:col-span-1">
                      <span className="font-headline-lg text-headline-lg font-bold text-on-surface">
                        100<span className="text-primary">%</span>
                      </span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mt-1">
                        QHSE &amp; BIS Compliance
                      </span>
                    </div>
                  </div>
                </div>

                {/* Hero Visual Showcase */}
                <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                  <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl bg-surface-container">
                    <img
                      className="w-full h-full object-cover"
                      src="/images/homepage/hero.jpg"
                      alt="Modern high-angle industrial engineering photograph of energy complex and power turbine installation"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-on-surface/80 via-transparent to-transparent" />

                    {/* Floating Credential Card */}
                    <div className="absolute bottom-6 left-6 right-6 p-4 rounded-lg bg-surface-container-lowest/95 backdrop-blur-md shadow-md flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-[22px]">verified</span>
                        </div>
                        <div>
                          <p className="font-headline-sm text-headline-sm font-bold text-on-surface leading-tight">
                            GSSC INDIA Operations
                          </p>
                          <p className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                            Pan-India Industrial Sites
                          </p>
                        </div>
                      </div>
                      <span className="font-label-md text-label-md text-primary font-bold">22+ YRS</span>
                    </div>
                  </div>

                  {/* Secondary accent tile */}
                  <div className="hidden sm:block absolute -top-4 -left-4 p-3 bg-surface-container-lowest rounded-lg shadow-md">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary" />
                      <span className="font-label-sm text-label-sm font-semibold tracking-wide text-on-surface">
                        ISO 9001:2015 CERTIFIED
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 01 / THE GSSC STANDARD */}
          <section id="about" className="w-full bg-surface-bright py-20 lg:py-28">
            <div className="w-full px-margin md:px-margin-desktop">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-start">
                {/* Left: Narrative Column */}
                <div className="lg:col-span-6 flex flex-col gap-5">
                  <div className="flex items-center gap-3 font-label-md text-label-md text-primary tracking-widest uppercase">
                    <span>01</span>
                    <span className="w-8 h-px bg-primary/40" />
                    <span>The GSSC Standard</span>
                  </div>

                  <h2 className="font-headline-lg md:font-display-lg text-headline-lg md:text-display-lg font-bold text-on-surface tracking-tight leading-tight">
                    Capability at scale.
                    <br />
                    <span className="text-primary italic font-normal">
                      Integrity across India.
                    </span>
                  </h2>

                  <p className="font-body-lg text-body-lg text-secondary leading-relaxed pt-2">
                    India’s dedicated industrial engineering partner specializing in gas and steam turbine overhauls, high-pressure utility piping, plant turnaround operations, and electromechanical commissioning across major industrial corridors.
                  </p>

                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    From coastal power plants in Gujarat and Maharashtra to manufacturing clusters across Southern and Eastern India, we deploy certified teams, rigorous Indian &amp; international engineering codes, and unyielding safety protocols.
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 font-body-md text-body-md text-primary font-semibold hover:text-primary-container transition-colors group"
                    >
                      <span>Discover our journey</span>
                      <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>

                {/* Right: Architectural Metrics Grid */}
                <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 lg:mt-0">
                  <div className="p-8 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-48">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      Engineering Heritage
                    </span>
                    <div>
                      <p className="font-display-lg text-display-lg font-bold text-on-surface">2002</p>
                      <p className="font-body-sm text-body-sm text-secondary mt-1">
                        Serving Heavy Industries
                      </p>
                    </div>
                  </div>

                  <div className="p-8 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-48">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      Human Capital
                    </span>
                    <div>
                      <p className="font-display-lg text-display-lg font-bold text-on-surface">
                        1,800<span className="text-primary">+</span>
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary mt-1">
                        Engineers &amp; Technicians across India
                      </p>
                    </div>
                  </div>

                  <div className="p-8 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-48">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      Pan-India Footprint
                    </span>
                    <div>
                      <p className="font-display-lg text-display-lg font-bold text-on-surface">
                        14<span className="text-primary">+</span>
                      </p>
                      <p className="font-body-sm text-body-sm text-secondary mt-1">
                        Key industrial state deployments
                      </p>
                    </div>
                  </div>

                  <div className="p-8 rounded-xl bg-primary text-on-primary shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between h-48">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-primary/80">
                      Safety &amp; Compliance
                    </span>
                    <div>
                      <p className="font-display-lg text-display-lg font-bold text-on-primary">100%</p>
                      <p className="font-body-sm text-body-sm text-on-primary/90 mt-1">
                        ISO 9001, 45001 &amp; BIS protocols
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 02 / WHAT WE DO (CORE CAPABILITIES) */}
          <section className="w-full bg-surface-container-lowest py-20 lg:py-28">
            <div className="w-full px-margin md:px-margin-desktop flex flex-col gap-14">
              {/* Section Header */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-full">
                <div className="max-w-2xl flex flex-col gap-3">
                  <div className="flex items-center gap-3 font-label-md text-label-md text-primary tracking-widest uppercase">
                    <span>02</span>
                    <span className="w-8 h-px bg-primary/40" />
                    <span>What We Do</span>
                  </div>
                  <h2 className="font-headline-lg md:font-display-lg text-headline-lg md:text-display-lg font-bold text-on-surface tracking-tight">
                    Depth across the{" "}
                    <span className="text-primary italic font-normal">whole build.</span>
                  </h2>
                  <p className="font-body-lg text-body-lg text-secondary leading-relaxed mt-1">
                    Specialist services, integrated intelligently. Each engagement is led by teams who know the work, the standards and the ground beneath it.
                  </p>
                </div>
                <div>
                  <Link
                    href="/services"
                    className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md font-semibold hover:bg-surface-container hover:text-primary transition-all"
                  >
                    <span>Explore all 13 services</span>
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </Link>
                </div>
              </div>

              {/* 3x2 Capability Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-desktop">
                {capabilityCards.map((c) => (
                  <Link
                    key={c.num}
                    href="/services"
                    className="group flex flex-col justify-between p-8 rounded-xl bg-surface-container-low/60 hover:bg-surface-container-lowest transition-all hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex flex-col gap-4">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-bold text-primary px-2.5 py-1 rounded bg-primary/10">
                          {c.num}
                        </span>
                        <span className="material-symbols-outlined text-secondary group-hover:text-primary transition-colors text-[24px]">
                          {c.icon}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md font-bold text-on-surface group-hover:text-primary transition-colors mt-2">
                        {c.title}
                      </h3>
                      <p className="font-body-md text-body-md text-secondary leading-relaxed">
                        {c.desc}
                      </p>
                    </div>
                    <div className="pt-6 flex items-center gap-2 font-label-md text-label-md text-on-surface font-semibold group-hover:text-primary transition-colors">
                      <span>Learn more</span>
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* 03 / SELECTED EXPERIENCE */}
          <section id="projects" className="w-full bg-surface-bright py-20 lg:py-28">
            <div className="w-full px-margin md:px-margin-desktop flex flex-col gap-12">
              {/* Top Title and Filter Navigation */}
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                <div className="flex flex-col gap-3">
                  <div className="flex items-center gap-3 font-label-md text-label-md text-primary tracking-widest uppercase">
                    <span>03</span>
                    <span className="w-8 h-px bg-primary/40" />
                    <span>Selected Experience</span>
                  </div>
                  <h2 className="font-headline-lg md:font-display-lg text-headline-lg md:text-display-lg font-bold text-on-surface tracking-tight">
                    Trusted where it{" "}
                    <span className="text-primary italic font-normal">counts most.</span>
                  </h2>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-lg bg-surface-container-low self-start md:self-auto">
                  {filterCategories.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveFilter(tab.id)}
                      className={`px-4 py-2 rounded font-label-sm text-label-sm uppercase tracking-wider font-semibold transition-all ${
                        activeFilter === tab.id
                          ? "bg-primary text-on-primary shadow-sm"
                          : "text-secondary hover:text-on-surface"
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Project Showcase Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter-desktop">
                {visibleProjects.map((p) => (
                  <div
                    key={p.id}
                    className="group flex flex-col rounded-xl overflow-hidden bg-surface-container-lowest shadow-sm hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative w-full aspect-[16/10] overflow-hidden bg-surface-container">
                      <img
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        src={p.image}
                        alt={p.title}
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 rounded bg-surface-container-lowest/90 backdrop-blur-sm font-label-sm text-label-sm font-bold text-primary uppercase tracking-wider">
                          {p.tag}
                        </span>
                      </div>
                    </div>

                    <div className="p-8 flex flex-col flex-1 justify-between gap-6">
                      <div className="flex flex-col gap-3">
                        <h3 className="font-headline-md text-headline-md font-bold text-on-surface group-hover:text-primary transition-colors">
                          {p.title}
                        </h3>
                        <p className="font-body-md text-body-md text-secondary leading-relaxed">
                          {p.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t-0">
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                          {p.sector}
                        </span>
                        <Link
                          href="/services"
                          className="inline-flex items-center gap-1.5 font-label-md text-label-md text-primary font-bold group-hover:translate-x-1 transition-transform"
                        >
                          <span>View project record</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Projects Callout Strip */}
              <div className="p-6 md:p-8 rounded-xl bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <p className="font-headline-sm text-headline-sm font-bold text-on-surface">
                    Explore projects categorized by industrial sector
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Discover case studies across energy, desalination, manufacturing, and transport infrastructure.
                  </p>
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded bg-primary text-on-primary font-body-md text-body-md font-semibold hover:bg-primary-container transition-all whitespace-nowrap shadow-sm"
                >
                  <span>View all projects</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </section>

          {/* 04 / OUR NON-NEGOTIABLES */}
          <section id="standards" className="w-full bg-surface-container-lowest py-20 lg:py-28">
            <div className="w-full px-margin md:px-margin-desktop flex flex-col gap-14">
              {/* Section Header */}
              <div className="max-w-2xl flex flex-col gap-3">
                <div className="flex items-center gap-3 font-label-md text-label-md text-primary tracking-widest uppercase">
                  <span>04</span>
                  <span className="w-8 h-px bg-primary/40" />
                  <span>Our Non-Negotiables</span>
                </div>
                <h2 className="font-headline-lg md:font-display-lg text-headline-lg md:text-display-lg font-bold text-on-surface tracking-tight">
                  One standard.{" "}
                  <span className="text-primary italic font-normal">Every site.</span>
                </h2>
                <p className="font-body-lg text-body-lg text-secondary leading-relaxed mt-1">
                  In demanding heavy industrial environments, compromise introduces risk. Our core operating pillars define every team mobilization and client deliverable.
                </p>
              </div>

              {/* 3 Pillar Columns */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
                {/* Pillar 1 */}
                <div className="p-8 rounded-xl bg-surface-container-low/70 flex flex-col justify-between gap-8 hover:bg-surface-container-lowest transition-all hover:shadow-lg">
                  <div className="flex flex-col gap-4">
                    <span className="font-display-lg text-display-lg font-bold text-primary/30">
                      01
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                      Quality, embedded.
                    </h3>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed">
                      Operating systems designed around continual improvement, rigorous contractual transparency, certified material sourcing, and highly competent specialist engineering resources.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Zero-defect objective</span>
                  </div>
                </div>

                {/* Pillar 2 */}
                <div className="p-8 rounded-xl bg-surface-container-low/70 flex flex-col justify-between gap-8 hover:bg-surface-container-lowest transition-all hover:shadow-lg">
                  <div className="flex flex-col gap-4">
                    <span className="font-display-lg text-display-lg font-bold text-primary/30">
                      02
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                      Safety, lived daily.
                    </h3>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed">
                      A shared culture safeguarding every operative, project asset, and client environment at every tier. Daily toolboxes, active hazard abatement, and unyielding OHSAS adherence.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                    <span className="material-symbols-outlined text-[18px]">health_and_safety</span>
                    <span>Target Zero Harm</span>
                  </div>
                </div>

                {/* Pillar 3 */}
                <div className="p-8 rounded-xl bg-surface-container-low/70 flex flex-col justify-between gap-8 hover:bg-surface-container-lowest transition-all hover:shadow-lg">
                  <div className="flex flex-col gap-4">
                    <span className="font-display-lg text-display-lg font-bold text-primary/30">
                      03
                    </span>
                    <h3 className="font-headline-md text-headline-md font-bold text-on-surface">
                      Partnership, earned.
                    </h3>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed">
                      Transparent reporting, senior executive accessibility on the ground, proactive schedule risk resolution, and a genuine promise to stand behind every handover unconditionally.
                    </p>
                  </div>
                  <div className="pt-4 flex items-center gap-2 text-primary font-label-sm text-label-sm uppercase tracking-wider font-semibold">
                    <span className="material-symbols-outlined text-[18px]">handshake</span>
                    <span>Long-term trust</span>
                  </div>
                </div>
              </div>

              {/* Human Craft / Careers Banner */}
              <div
                id="careers"
                className="p-8 md:p-12 rounded-2xl bg-surface-container text-on-surface flex flex-col md:flex-row items-center justify-between gap-8 shadow-sm"
              >
                <div className="flex flex-col gap-2 max-w-xl">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-primary font-bold">
                    A place to build your best work
                  </span>
                  <h3 className="font-headline-lg text-headline-lg font-bold text-on-surface">
                    Bring your{" "}
                    <span className="text-primary italic font-normal">craft</span> to GSSC.
                  </h3>
                  <p className="font-body-md text-body-md text-secondary mt-1">
                    We are always looking for disciplined engineers, technical managers, and certified specialists to power our industrial projects across India.
                  </p>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded bg-surface-container-lowest text-on-surface font-body-md text-body-md font-semibold hover:bg-primary hover:text-on-primary transition-all whitespace-nowrap shadow-sm"
                >
                  <span>Explore careers</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
              </div>
            </div>
          </section>

          {/* 05 / CALL TO ACTION BANNER */}
          <section className="w-full bg-surface-bright py-20 lg:py-28">
            <div className="w-full px-margin md:px-margin-desktop">
              <div className="relative rounded-2xl bg-on-surface text-on-primary-container p-8 md:p-16 overflow-hidden shadow-2xl">
                {/* Subtle industrial background glow */}
                <div className="absolute -right-20 -bottom-20 w-96 h-96 rounded-full bg-primary/20 blur-3xl pointer-events-none" />
                <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-primary/10 blur-2xl pointer-events-none" />

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 flex flex-col gap-4">
                    <div className="flex items-center gap-3 font-label-md text-label-md text-primary-fixed-dim tracking-widest uppercase">
                      <span>05</span>
                      <span className="w-8 h-px bg-primary-fixed-dim/40" />
                      <span>Connect With Us</span>
                    </div>

                    <h2 className="font-headline-lg md:font-display-lg text-headline-lg md:text-display-lg font-bold text-surface tracking-tight leading-tight">
                      Let’s make the{" "}
                      <span className="text-primary-fixed italic font-normal">next project</span> count.
                    </h2>

                    <p className="font-body-lg text-body-lg text-secondary-fixed-dim max-w-2xl leading-relaxed">
                      Tell us what you need. Our team will connect you with the right specialist, review technical scopes, and organize on-site engineering consultations.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-4">
                      <a
                        href="mailto:info@gssc.in"
                        className="flex items-center gap-3 text-surface hover:text-primary-fixed transition-colors font-body-lg text-body-lg"
                      >
                        <span className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center text-primary-fixed">
                          <span className="material-symbols-outlined text-[20px]">mail</span>
                        </span>
                        <span className="font-label-lg text-label-lg font-medium">info@gssc.in</span>
                      </a>
                      <div className="hidden sm:block w-px h-8 bg-surface/20" />
                      <div className="flex items-center gap-3 text-secondary-fixed-dim font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-primary-fixed text-[20px]">
                          schedule
                        </span>
                        <span>Mumbai &amp; Pan-India Industrial Hubs</span>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-4 justify-end lg:items-end">
                    <Link
                      href="/contact"
                      className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-primary text-on-primary font-headline-sm text-headline-sm font-semibold hover:bg-primary-container transition-all shadow-md w-full sm:w-auto text-center"
                    >
                      <span>Start a conversation</span>
                      <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                    </Link>
                    <Link
                      href="/services"
                      className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded bg-surface/10 text-surface hover:bg-surface/20 transition-all font-body-md text-body-md font-medium w-full sm:w-auto text-center"
                    >
                      Explore Capabilities
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
