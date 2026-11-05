export interface Employee {
  id: string;
  staffId: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  altPhone?: string;
  joiningDate: string;
  location: string;
  status: "Active" | "Pending KYC" | "Suspended" | "On Leave";
  complianceScore: number;
  avatarBg: string;
  initials: string;
  panNumber: string;
  aadhaarNumber: string;
  uanNumber: string;
  emergencyContact: {
    name: string;
    relation: string;
    phone: string;
  };
  address: {
    present: string;
    permanent: string;
  };
  certifications: string[];
}

export const initialEmployees: Employee[] = [
  {
    id: "EMP-001",
    staffId: "IND-4089",
    name: "Rajesh Kumar",
    role: "Lead Plant Engineer",
    department: "Gas Turbine Operations",
    email: "rajesh.kumar@gsscindia.in",
    phone: "+91 98251 40892",
    altPhone: "+91 98251 40890",
    joiningDate: "12 May 2018",
    location: "Station 04 - Hazira",
    status: "Active",
    complianceScore: 98,
    avatarBg: "bg-blue-600",
    initials: "RK",
    panNumber: "ABCDE1234F",
    aadhaarNumber: "XXXX-XXXX-8921",
    uanNumber: "100928374612",
    emergencyContact: {
      name: "Sunita Kumar",
      relation: "Spouse",
      phone: "+91 98251 40899",
    },
    address: {
      present: "Flat 402, Shivam Enclave, Dumas Road, Surat, Gujarat - 395007",
      permanent: "Village Rampur, Dist. Varanasi, Uttar Pradesh - 221001",
    },
    certifications: ["IBR Boiler Inspector Grade I", "ISO 45001 Lead Auditor", "GE Frame-9 Turbine Specialist"],
  },
  {
    id: "EMP-002",
    staffId: "IND-3102",
    name: "Priya Sharma",
    role: "E&I Systems Specialist",
    department: "Electrical & Instrumentation",
    email: "priya.sharma@gsscindia.in",
    phone: "+91 94280 31024",
    joiningDate: "03 Aug 2020",
    location: "Station 04 - Hazira",
    status: "Active",
    complianceScore: 95,
    avatarBg: "bg-emerald-600",
    initials: "PS",
    panNumber: "BKUPS8712K",
    aadhaarNumber: "XXXX-XXXX-3102",
    uanNumber: "100874512984",
    emergencyContact: {
      name: "Ramesh Sharma",
      relation: "Father",
      phone: "+91 94280 31020",
    },
    address: {
      present: "B-12 Krishna Complex, Adajan, Surat, Gujarat - 395009",
      permanent: "B-12 Krishna Complex, Adajan, Surat, Gujarat - 395009",
    },
    certifications: ["Siemens PCS7 Certified", "SIL-3 Safety Loops Specialist", "ATEX Ex-Proof Inspector"],
  },
  {
    id: "EMP-003",
    staffId: "IND-5219",
    name: "Vikram Singh",
    role: "Mechanical Piping Supervisor",
    department: "Mechanical & Piping",
    email: "vikram.singh@gsscindia.in",
    phone: "+91 98982 52190",
    joiningDate: "19 Nov 2021",
    location: "ONGC Expansion Block",
    status: "Pending KYC",
    complianceScore: 72,
    avatarBg: "bg-amber-600",
    initials: "VS",
    panNumber: "CPSVS5219M",
    aadhaarNumber: "XXXX-XXXX-5219",
    uanNumber: "100654129871",
    emergencyContact: {
      name: "Anita Singh",
      relation: "Spouse",
      phone: "+91 98982 52195",
    },
    address: {
      present: "House 54, GIDC Colony, Hazira, Gujarat - 394510",
      permanent: "Ward 4, Civil Lines, Kota, Rajasthan - 324001",
    },
    certifications: ["ASME Section IX Welding Inspector", "CSWIP 3.1 Certified"],
  },
  {
    id: "EMP-004",
    staffId: "IND-1845",
    name: "Amit Patel",
    role: "Civil Infrastructure Lead",
    department: "Civil & Structural",
    email: "amit.patel@gsscindia.in",
    phone: "+91 97271 18456",
    joiningDate: "14 Jan 2017",
    location: "Station 04 - Hazira",
    status: "Active",
    complianceScore: 100,
    avatarBg: "bg-purple-600",
    initials: "AP",
    panNumber: "DPAAP1845Q",
    aadhaarNumber: "XXXX-XXXX-1845",
    uanNumber: "100123987456",
    emergencyContact: {
      name: "Meena Patel",
      relation: "Spouse",
      phone: "+91 97271 18450",
    },
    address: {
      present: "Row House 11, Vesu Canal Road, Surat, Gujarat - 395007",
      permanent: "Row House 11, Vesu Canal Road, Surat, Gujarat - 395007",
    },
    certifications: ["Chartered Engineer (India)", "Seismic Design IS 1893", "Heavy Machine Foundations"],
  },
  {
    id: "EMP-005",
    staffId: "IND-6031",
    name: "Sneha Reddy",
    role: "QA/QC Senior Inspector",
    department: "Quality Assurance",
    email: "sneha.reddy@gsscindia.in",
    phone: "+91 99890 60312",
    joiningDate: "10 Feb 2022",
    location: "Station 04 - Hazira",
    status: "Active",
    complianceScore: 96,
    avatarBg: "bg-rose-600",
    initials: "SR",
    panNumber: "EKPSR6031N",
    aadhaarNumber: "XXXX-XXXX-6031",
    uanNumber: "100987345123",
    emergencyContact: {
      name: "Venkat Reddy",
      relation: "Father",
      phone: "+91 99890 60319",
    },
    address: {
      present: "Flat 204, Green Heights, Piplod, Surat, Gujarat - 395007",
      permanent: "Plot 88, Jubilee Hills, Hyderabad, Telangana - 500033",
    },
    certifications: ["ASNT NDT Level III (RT, UT, MT, PT)", "ISO 9001:2015 Lead Auditor"],
  },
  {
    id: "EMP-006",
    staffId: "IND-4780",
    name: "Mohammed Arshad",
    role: "HSE Safety Officer",
    department: "Health, Safety & Environment",
    email: "m.arshad@gsscindia.in",
    phone: "+91 98450 47801",
    joiningDate: "05 Jun 2019",
    location: "Station 04 - Hazira",
    status: "Active",
    complianceScore: 99,
    avatarBg: "bg-cyan-600",
    initials: "MA",
    panNumber: "FAMAR4780L",
    aadhaarNumber: "XXXX-XXXX-4780",
    uanNumber: "100456789123",
    emergencyContact: {
      name: "Fatima Arshad",
      relation: "Spouse",
      phone: "+91 98450 47809",
    },
    address: {
      present: "78 Rander Road, Navyug College Lane, Surat, Gujarat - 395005",
      permanent: "78 Rander Road, Navyug College Lane, Surat, Gujarat - 395005",
    },
    certifications: ["NEBOSH International Diploma", "OSHA 30-Hour General Industry", "First Aid Trainer"],
  },
  {
    id: "EMP-007",
    staffId: "IND-7142",
    name: "Anand Verma",
    role: "Turbine Mechanical Fitter",
    department: "Gas Turbine Operations",
    email: "anand.verma@gsscindia.in",
    phone: "+91 91670 71423",
    joiningDate: "01 Sep 2023",
    location: "Station 04 - Hazira",
    status: "Pending KYC",
    complianceScore: 68,
    avatarBg: "bg-indigo-600",
    initials: "AV",
    panNumber: "GPAAV7142P",
    aadhaarNumber: "XXXX-XXXX-7142",
    uanNumber: "100345678901",
    emergencyContact: {
      name: "Suresh Verma",
      relation: "Brother",
      phone: "+91 91670 71428",
    },
    address: {
      present: "Room 14, Shramik Chawl, Hazira Port Road, Surat, Gujarat - 394510",
      permanent: "Village Belva, Dist. Gorakhpur, Uttar Pradesh - 273001",
    },
    certifications: ["ITI Fitter Trade Certificate", "Rigging & Slinging Level 2"],
  },
];

