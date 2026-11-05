"use client";

import { useState } from "react";
import Link from "next/link";
import { GSSCLogoText } from "@/components/GSSCLogo";
import { initialEmployees, Employee } from "@/data/employees";

export default function AdminDashboardPage() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  // Notifications flyout state
  const [showNotifications, setShowNotifications] = useState(false);

  // Modals state
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [inspectEmployee, setInspectEmployee] = useState<Employee | null>(null);

  // New Employee Form State
  const [newEmp, setNewEmp] = useState({
    name: "",
    role: "Plant Operations Engineer",
    department: "Gas Turbine Operations",
    email: "",
    phone: "",
    location: "Station 04 - Hazira",
    panNumber: "",
    aadhaarNumber: "",
    uanNumber: "",
    status: "Pending KYC" as Employee["status"],
  });

  // Filter employees
  const filteredEmployees = employees.filter((emp) => {
    const matchesSearch =
      emp.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.staffId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      emp.email.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesRole =
      selectedRole === "All" || emp.role.toLowerCase().includes(selectedRole.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" || emp.status === selectedStatus;
    return matchesSearch && matchesRole && matchesStatus;
  });

  const handleCreateEmployee = (e: React.FormEvent) => {
    e.preventDefault();
    const idCount = employees.length + 1;
    const randomStaffNum = 4100 + idCount;
    const initials = newEmp.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2) || "EMP";

    const created: Employee = {
      id: `EMP-00${idCount}`,
      staffId: `IND-${randomStaffNum}`,
      name: newEmp.name,
      role: newEmp.role,
      department: newEmp.department,
      email: newEmp.email || `emp${randomStaffNum}@gsscindia.in`,
      phone: newEmp.phone || "+91 98250 00000",
      joiningDate: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
      location: newEmp.location,
      status: newEmp.status,
      complianceScore: newEmp.status === "Active" ? 95 : 60,
      avatarBg: "bg-orange-600",
      initials,
      panNumber: newEmp.panNumber || "ABCDE1234F",
      aadhaarNumber: newEmp.aadhaarNumber || "XXXX-XXXX-0000",
      uanNumber: newEmp.uanNumber || "100987654321",
      emergencyContact: {
        name: "Primary Contact",
        relation: "Family",
        phone: newEmp.phone || "+91 98250 00000",
      },
      address: {
        present: "GIDC Industrial Colony, Hazira, Surat",
        permanent: "Permanent Address on file",
      },
      certifications: ["Site Induction Level 1", "Basic HSE Training"],
    };

    setEmployees([created, ...employees]);
    setShowRegisterModal(false);
    setNewEmp({
      name: "",
      role: "Plant Operations Engineer",
      department: "Gas Turbine Operations",
      email: "",
      phone: "",
      location: "Station 04 - Hazira",
      panNumber: "",
      aadhaarNumber: "",
      uanNumber: "",
      status: "Pending KYC",
    });
  };

  const handleApproveKYC = (empId: string) => {
    setEmployees((prev) =>
      prev.map((e) =>
        e.id === empId ? { ...e, status: "Active", complianceScore: 98 } : e
      )
    );
    if (inspectEmployee && inspectEmployee.id === empId) {
      setInspectEmployee((prev) => (prev ? { ...prev, status: "Active", complianceScore: 98 } : null));
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-800 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200/90 flex flex-col fixed inset-y-0 left-0 z-30 shadow-xs">
        {/* Brand */}
        <div className="h-16 px-5 border-b border-slate-100 flex items-center justify-between">
          <Link href="/">
            <GSSCLogoText />
          </Link>
          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-orange-100 text-orange-800">
            ADMIN
          </span>
        </div>

        {/* Section title */}
        <div className="px-4 pt-4 pb-2 text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest flex items-center justify-between">
          <span>OPERATIONAL CORE</span>
          <span className="material-symbols-outlined text-[14px]">tune</span>
        </div>

        {/* Navigation */}
        <nav className="p-3 space-y-1 flex-1 overflow-y-auto">
          <a
            href="#overview"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
          >
            <span className="material-symbols-outlined text-slate-400 text-[18px]">monitoring</span>
            <span>Telemetry Overview</span>
          </a>

          <a
            href="#workforce"
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-bold bg-orange-50 text-orange-600 border-r-2 border-orange-500 transition"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-orange-600 text-[18px]">badge</span>
              <span>Workforce &amp; Registry</span>
            </div>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-orange-200 text-orange-800">
              {employees.length}
            </span>
          </a>

          <a
            href="#kyc"
            onClick={(e) => {
              e.preventDefault();
              setSelectedStatus("Pending KYC");
            }}
            className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
          >
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-slate-400 text-[18px]">verified</span>
              <span>Doc Verification</span>
            </div>
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
              {employees.filter((e) => e.status === "Pending KYC").length} Pending
            </span>
          </a>

          <a
            href="#ibr"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
          >
            <span className="material-symbols-outlined text-slate-400 text-[18px]">local_fire_department</span>
            <span>IBR Steam Boilers</span>
          </a>

          <a
            href="#safety"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
          >
            <span className="material-symbols-outlined text-slate-400 text-[18px]">security</span>
            <span>ISO 45001 HSE Audit</span>
          </a>

          <a
            href="#settings"
            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-600 hover:bg-slate-50 transition"
          >
            <span className="material-symbols-outlined text-slate-400 text-[18px]">settings</span>
            <span>Station Settings</span>
          </a>
        </nav>

        {/* Bottom Station Status */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/50">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="font-bold">LINK STATUS: ONLINE</span>
          </div>
          <p className="text-[10px] font-mono text-slate-400">Node: HAZIRA-04 · Latency: 12ms</p>
          <div className="mt-3 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs">
            <Link href="/portal" className="text-orange-600 hover:underline font-semibold">
              Employee View
            </Link>
            <Link href="/login" className="text-slate-400 hover:text-rose-600 font-mono">
              Sign Out
            </Link>
          </div>
        </div>
      </aside>

      {/* Main Container */}
      <div className="flex-1 ml-64 flex flex-col min-h-screen">
        {/* Header */}
        <header className="h-16 bg-white/95 backdrop-blur-md border-b border-slate-200/90 fixed top-0 right-0 left-64 z-20 px-8 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200/80">
              <span className="material-symbols-outlined text-orange-500 text-[18px]">factory</span>
              <select className="bg-transparent text-xs font-bold text-slate-800 focus:outline-none cursor-pointer">
                <option>Station 04 - Hazira High-Pressure Unit</option>
                <option>Station 01 - Dahej Liquefaction Block</option>
                <option>Station 02 - Jamnagar Refinery Feed</option>
              </select>
            </div>
            <span className="hidden lg:inline text-xs font-mono text-slate-400">|</span>
            <span className="hidden lg:inline text-xs font-medium text-slate-500">
              Plant Administration &amp; Compliance Portal
            </span>
          </div>

          <div className="flex items-center gap-3 relative">
            {/* Notifications Button */}
            <button
              type="button"
              onClick={() => setShowNotifications(!showNotifications)}
              className="w-9 h-9 rounded-lg hover:bg-slate-100 text-slate-600 flex items-center justify-center relative transition"
            >
              <span className="material-symbols-outlined text-[20px]">notifications</span>
              <span className="w-2.5 h-2.5 rounded-full bg-orange-500 absolute top-1.5 right-1.5 ring-2 ring-white" />
            </button>

            {/* Notifications Flyout */}
            {showNotifications && (
              <div className="absolute right-12 top-12 w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-4 z-40 text-xs">
                <div className="flex items-center justify-between font-bold text-slate-900 border-b border-slate-100 pb-2 mb-2">
                  <span>Station Alerts</span>
                  <span className="text-[10px] font-mono text-orange-600">3 New</span>
                </div>
                <div className="space-y-2.5">
                  <div className="p-2 rounded bg-amber-50 border border-amber-200/60 text-amber-900">
                    <div className="font-bold">KYC Pending: Vikram Singh</div>
                    <div className="text-[11px] text-amber-700">Aadhaar / ASME welding cert requires review.</div>
                  </div>
                  <div className="p-2 rounded bg-blue-50 border border-blue-200/60 text-blue-900">
                    <div className="font-bold">Boiler Inspection Due</div>
                    <div className="text-[11px] text-blue-700">IBR Boiler Unit 3 annual cert test in 4 days.</div>
                  </div>
                  <div className="p-2 rounded bg-emerald-50 border border-emerald-200/60 text-emerald-900">
                    <div className="font-bold">New Shift Log Synced</div>
                    <div className="text-[11px] text-emerald-700">Hazira Station 04 afternoon shift signed in.</div>
                  </div>
                </div>
              </div>
            )}

            {/* Admin Avatar */}
            <div className="flex items-center gap-2.5 pl-3 border-l border-slate-200">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center">
                AD
              </div>
              <div className="hidden sm:block text-left">
                <div className="text-xs font-bold text-slate-900">Admin Unit Lead</div>
                <div className="text-[10px] font-mono text-orange-600">Hazira #IND-ADM</div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <main className="p-8 pt-24 pb-20 flex-1 max-w-7xl w-full mx-auto space-y-6">
          {/* Metric Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                <span>Total Workforce</span>
                <span className="material-symbols-outlined text-slate-400 text-[18px]">groups</span>
              </div>
              <div className="text-3xl font-black text-slate-900">1,248</div>
              <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                <span>+12 onboarded this month</span>
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                <span>Active &amp; Deployed</span>
                <span className="material-symbols-outlined text-emerald-500 text-[18px]">check_circle</span>
              </div>
              <div className="text-3xl font-black text-slate-900">1,180</div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                94.5% active duty roster
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                <span>Pending Verification</span>
                <span className="material-symbols-outlined text-amber-500 text-[18px]">pending_actions</span>
              </div>
              <div className="text-3xl font-black text-amber-600">
                {employees.filter((e) => e.status === "Pending KYC").length}
              </div>
              <div className="text-xs text-amber-700 font-medium mt-1">
                Requires dossier compliance sign-off
              </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200/90 p-5 shadow-xs">
              <div className="flex items-center justify-between text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                <span>Audit Readiness</span>
                <span className="material-symbols-outlined text-blue-500 text-[18px]">verified</span>
              </div>
              <div className="text-3xl font-black text-slate-900">99.4%</div>
              <div className="text-xs text-slate-500 font-medium mt-1">
                ISO 9001 &amp; IBR Certified
              </div>
            </div>
          </div>

          {/* Action Toolbar */}
          <div className="bg-white rounded-2xl border border-slate-200/90 p-4 shadow-xs flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            {/* Search and Filters */}
            <div className="flex flex-wrap items-center gap-2.5 flex-1">
              {/* Search */}
              <div className="relative min-w-[220px] flex-1 sm:flex-initial">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
                  search
                </span>
                <input
                  type="text"
                  placeholder="Search staff, ID, or email..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-xs border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-orange-500"
                />
              </div>

              {/* Role filter */}
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-3 py-2 text-xs border border-slate-200 rounded-lg bg-white text-slate-700 focus:outline-none focus:border-orange-500 cursor-pointer"
              >
                <option value="All">All Engineering Roles</option>
                <option value="Plant">Plant Engineers</option>
                <option value="E&I">E&amp;I Specialists</option>
                <option value="Piping">Mechanical / Piping</option>
                <option value="Civil">Civil Infrastructure</option>
                <option value="QA">QA/QC Inspectors</option>
                <option value="HSE">HSE Safety Officers</option>
                <option value="Fitter">Fitters &amp; Trades</option>
              </select>

              {/* Status filter */}
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="px-3 py-2 text-xs border border-slate-200 rounded-lg bg-white text-slate-700 focus:outline-none focus:border-orange-500 cursor-pointer"
              >
                <option value="All">All Statuses</option>
                <option value="Active">Active Only</option>
                <option value="Pending KYC">Pending KYC Only</option>
              </select>

              {(searchQuery || selectedRole !== "All" || selectedStatus !== "All") && (
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedRole("All");
                    setSelectedStatus("All");
                  }}
                  className="text-xs text-orange-600 hover:underline px-1 font-medium"
                >
                  Reset
                </button>
              )}
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={() => alert("Exporting current workforce registry as CSV...")}
                className="px-3.5 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 transition flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">download</span>
                <span>Export CSV</span>
              </button>

              <button
                type="button"
                onClick={() => setShowRegisterModal(true)}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition flex items-center gap-1.5 shadow-sm shadow-orange-500/20"
              >
                <span className="material-symbols-outlined text-[16px]">person_add</span>
                <span>+ Register New Employee</span>
              </button>
            </div>
          </div>

          {/* Workforce Table */}
          <div className="bg-white rounded-2xl border border-slate-200/90 shadow-xs overflow-hidden">
            <div className="p-4 border-b border-slate-100 flex items-center justify-between">
              <div>
                <h3 className="font-bold text-slate-900 text-sm">Industrial Workforce Registry</h3>
                <p className="text-[11px] font-mono text-slate-400">
                  Showing {filteredEmployees.length} registered personnel
                </p>
              </div>
              <span className="text-[11px] font-mono text-slate-500">
                Sorted by: Recent Activity
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/75 border-b border-slate-200/80 text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest">
                    <th className="py-3 px-4">Employee / Credentials</th>
                    <th className="py-3 px-4">Staff ID</th>
                    <th className="py-3 px-4">Engineering Role</th>
                    <th className="py-3 px-4">Compliance Status</th>
                    <th className="py-3 px-4">Direct Contact</th>
                    <th className="py-3 px-4 text-right">Verification Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs">
                  {filteredEmployees.map((emp) => (
                    <tr
                      key={emp.id}
                      className="hover:bg-slate-50/80 transition-colors group cursor-pointer"
                      onClick={() => setInspectEmployee(emp)}
                    >
                      {/* Name & Initials */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-lg ${emp.avatarBg} text-white font-bold text-xs flex items-center justify-center flex-shrink-0 shadow-xs`}
                          >
                            {emp.initials}
                          </div>
                          <div>
                            <div className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                              {emp.name}
                            </div>
                            <div className="text-[11px] text-slate-400 font-mono">
                              Joined {emp.joiningDate}
                            </div>
                          </div>
                        </div>
                      </td>

                      {/* Staff ID */}
                      <td className="py-3.5 px-4 font-mono font-semibold text-slate-700">
                        {emp.staffId}
                      </td>

                      {/* Role & Dept */}
                      <td className="py-3.5 px-4">
                        <div className="font-medium text-slate-800">{emp.role}</div>
                        <div className="text-[11px] text-slate-400">{emp.department}</div>
                      </td>

                      {/* Compliance Status */}
                      <td className="py-3.5 px-4">
                        <div className="flex items-center gap-2">
                          <span
                            className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[11px] font-mono font-bold ${
                              emp.status === "Active"
                                ? "bg-emerald-100 text-emerald-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                emp.status === "Active" ? "bg-emerald-500" : "bg-amber-500"
                              }`}
                            />
                            {emp.status}
                          </span>
                          <span className="text-[11px] font-mono text-slate-400">
                            {emp.complianceScore}%
                          </span>
                        </div>
                      </td>

                      {/* Contact */}
                      <td className="py-3.5 px-4 font-mono text-[11px]">
                        <div className="text-slate-700">{emp.phone}</div>
                        <div className="text-slate-400 truncate max-w-[150px]">{emp.email}</div>
                      </td>

                      {/* Action */}
                      <td className="py-3.5 px-4 text-right" onClick={(e) => e.stopPropagation()}>
                        <div className="flex items-center justify-end gap-1.5">
                          <button
                            type="button"
                            onClick={() => setInspectEmployee(emp)}
                            className="px-2.5 py-1 rounded bg-slate-100 hover:bg-orange-50 hover:text-orange-600 text-slate-700 font-semibold text-xs transition inline-flex items-center gap-1"
                          >
                            <span className="material-symbols-outlined text-[14px]">visibility</span>
                            <span>Inspect KYC</span>
                          </button>
                          {emp.status === "Pending KYC" && (
                            <button
                              type="button"
                              onClick={() => handleApproveKYC(emp.id)}
                              className="px-2.5 py-1 rounded bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold text-xs transition inline-flex items-center gap-1"
                            >
                              <span className="material-symbols-outlined text-[14px]">check</span>
                              <span>Approve</span>
                            </button>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}

                  {filteredEmployees.length === 0 && (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-slate-400 text-xs">
                        No employees found matching the filter criteria.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination footer */}
            <div className="p-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-mono">
              <div>
                Showing 1–{filteredEmployees.length} of {employees.length} records
              </div>
              <div className="flex items-center gap-1">
                <button
                  type="button"
                  disabled
                  className="px-2 py-1 rounded border border-slate-200 text-slate-300 cursor-not-allowed"
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="px-2.5 py-1 rounded bg-orange-500 text-white font-bold"
                >
                  1
                </button>
                <button
                  type="button"
                  disabled
                  className="px-2 py-1 rounded border border-slate-200 text-slate-300 cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Screen 7: Register Employee Modal */}
      {showRegisterModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div>
                <div className="text-[10px] font-mono font-bold text-orange-600 uppercase tracking-widest">
                  HR ONBOARDING · WORKFORCE MODULE
                </div>
                <h3 className="text-lg font-bold text-slate-900 mt-0.5">
                  Register New Industrial Employee
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowRegisterModal(false)}
                className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <form onSubmit={handleCreateEmployee} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ramesh Chandra"
                    value={newEmp.name}
                    onChange={(e) => setNewEmp({ ...newEmp, name: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Engineering Role *
                  </label>
                  <input
                    type="text"
                    required
                    value={newEmp.role}
                    onChange={(e) => setNewEmp({ ...newEmp, role: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Department
                  </label>
                  <select
                    value={newEmp.department}
                    onChange={(e) => setNewEmp({ ...newEmp, department: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg text-slate-800 bg-white focus:outline-none focus:border-orange-500"
                  >
                    <option>Gas Turbine Operations</option>
                    <option>Electrical &amp; Instrumentation</option>
                    <option>Mechanical &amp; Piping</option>
                    <option>Civil &amp; Structural</option>
                    <option>Quality Assurance</option>
                    <option>Health, Safety &amp; Environment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Plant Node / Work Station
                  </label>
                  <select
                    value={newEmp.location}
                    onChange={(e) => setNewEmp({ ...newEmp, location: e.target.value })}
                    className="w-full px-3 py-2 text-xs border border-slate-200 rounded-lg text-slate-800 bg-white focus:outline-none focus:border-orange-500"
                  >
                    <option>Station 04 - Hazira</option>
                    <option>Station 01 - Dahej</option>
                    <option>Station 02 - Jamnagar</option>
                    <option>ONGC Expansion Block</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Mobile Phone
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98XXX XXXXX"
                    value={newEmp.phone}
                    onChange={(e) => setNewEmp({ ...newEmp, phone: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Official Email
                  </label>
                  <input
                    type="email"
                    placeholder="name@gsscindia.in"
                    value={newEmp.email}
                    onChange={(e) => setNewEmp({ ...newEmp, email: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">
                    Aadhaar Number
                  </label>
                  <input
                    type="text"
                    placeholder="XXXX-XXXX-XXXX"
                    value={newEmp.aadhaarNumber}
                    onChange={(e) => setNewEmp({ ...newEmp, aadhaarNumber: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-orange-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1">
                    PAN Card
                  </label>
                  <input
                    type="text"
                    placeholder="ABCDE1234F"
                    value={newEmp.panNumber}
                    onChange={(e) => setNewEmp({ ...newEmp, panNumber: e.target.value })}
                    className="w-full px-3 py-2 text-xs font-mono uppercase border border-slate-200 rounded-lg text-slate-800 focus:outline-none focus:border-orange-500"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setShowRegisterModal(false)}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition shadow-sm shadow-orange-500/20"
                >
                  Complete Registration
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Screen 8: Inspect KYC & Review Docs Modal */}
      {inspectEmployee && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs animate-fade-in">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 sm:p-8">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-6">
              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-xl ${inspectEmployee.avatarBg} text-white font-bold text-sm flex items-center justify-center shadow-xs`}
                >
                  {inspectEmployee.initials}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-slate-900">{inspectEmployee.name}</h3>
                    <span
                      className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold ${
                        inspectEmployee.status === "Active"
                          ? "bg-emerald-100 text-emerald-800"
                          : "bg-amber-100 text-amber-800"
                      }`}
                    >
                      {inspectEmployee.status}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-slate-400">
                    Staff ID: {inspectEmployee.staffId} · {inspectEmployee.role}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setInspectEmployee(null)}
                className="w-8 h-8 rounded-lg hover:bg-slate-100 text-slate-400 hover:text-slate-700 flex items-center justify-center"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            {/* Dossier Body */}
            <div className="space-y-6 text-xs">
              {/* Compliance score banner */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="font-bold text-slate-800 text-sm">Station Compliance Dossier</div>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Location: {inspectEmployee.location} · Synced with UIDAI &amp; EPFO
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-orange-600 font-mono">
                    {inspectEmployee.complianceScore}%
                  </div>
                  <div className="text-[10px] font-mono text-slate-400 uppercase">Audit Score</div>
                </div>
              </div>

              {/* Statutory Documents Check */}
              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-3">
                  Statutory KYC Records
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="p-3 rounded-lg border border-slate-200 bg-white">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Aadhaar Card</div>
                    <div className="font-mono font-bold text-slate-800 mt-1">
                      {inspectEmployee.aadhaarNumber}
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      <span>UIDAI Verified</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border border-slate-200 bg-white">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">Income Tax PAN</div>
                    <div className="font-mono font-bold text-slate-800 mt-1">
                      {inspectEmployee.panNumber}
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      <span>NSDL Matched</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-lg border border-slate-200 bg-white">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">EPFO UAN</div>
                    <div className="font-mono font-bold text-slate-800 mt-1">
                      {inspectEmployee.uanNumber}
                    </div>
                    <div className="mt-2 flex items-center gap-1 text-[11px] text-emerald-600 font-semibold">
                      <span className="material-symbols-outlined text-[14px]">check_circle</span>
                      <span>EPFO Synced</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider mb-2">
                  Technical &amp; Safety Certifications
                </h4>
                <div className="flex flex-wrap gap-2">
                  {inspectEmployee.certifications.map((c) => (
                    <span
                      key={c}
                      className="px-2.5 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700 font-mono text-[11px] flex items-center gap-1.5"
                    >
                      <span className="material-symbols-outlined text-orange-500 text-[14px]">
                        verified
                      </span>
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Addresses */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60">
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Present Address (Plant Residence)
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">
                    {inspectEmployee.address.present}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl border border-slate-100 bg-slate-50/60">
                  <div className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-1">
                    Permanent Address
                  </div>
                  <div className="text-slate-700 leading-relaxed font-medium">
                    {inspectEmployee.address.permanent}
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="p-3.5 rounded-xl border border-orange-200/70 bg-orange-50/40 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono font-bold text-orange-800 uppercase tracking-widest">
                    Emergency Point of Contact
                  </div>
                  <div className="font-bold text-slate-900 mt-0.5">
                    {inspectEmployee.emergencyContact.name} ({inspectEmployee.emergencyContact.relation})
                  </div>
                </div>
                <div className="font-mono font-bold text-slate-800">
                  {inspectEmployee.emergencyContact.phone}
                </div>
              </div>
            </div>

            {/* Modal Actions */}
            <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => alert(`Downloading verified KYC dossier for ${inspectEmployee.name}...`)}
                className="px-3.5 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-700 hover:bg-slate-50 transition inline-flex items-center gap-1.5"
              >
                <span className="material-symbols-outlined text-[16px]">file_download</span>
                <span>Download Dossier PDF</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setInspectEmployee(null)}
                  className="px-4 py-2 border border-slate-200 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-50 transition"
                >
                  Close
                </button>
                {inspectEmployee.status === "Pending KYC" ? (
                  <button
                    type="button"
                    onClick={() => handleApproveKYC(inspectEmployee.id)}
                    className="px-5 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-bold transition shadow-sm shadow-emerald-600/20 inline-flex items-center gap-1.5"
                  >
                    <span className="material-symbols-outlined text-[16px]">check_circle</span>
                    <span>Approve &amp; Activate</span>
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      alert(`Compliance verified for ${inspectEmployee.name}. Status remains Active.`);
                      setInspectEmployee(null);
                    }}
                    className="px-5 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg text-xs font-bold transition shadow-sm shadow-orange-500/20"
                  >
                    Save Changes
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

