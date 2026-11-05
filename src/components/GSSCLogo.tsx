export function GSSCLogo({ className = "h-10 w-auto" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 260 52" fill="none" xmlns="http://www.w3.org/2000/svg">
      <text x="0" y="30" fill="#0b1c30" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="34" fontWeight="900" letterSpacing="-0.03em">GSSC</text>
      <line x1="0" y1="37" x2="52" y2="37" stroke="#94a3b8" strokeWidth="2" />
      <text x="96" y="20" fill="#f97316" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="20" fontWeight="800" letterSpacing="0.05em">INDIA</text>
      <text x="96" y="32" fill="#565e74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="9" fontWeight="700" letterSpacing="0.08em">GAS &amp; STEAM</text>
      <text x="96" y="43" fill="#565e74" fontFamily="'Plus Jakarta Sans', sans-serif" fontSize="8.5" fontWeight="600" letterSpacing="0.06em">SOLUTIONS COMPANY</text>
    </svg>
  );
}

export function GSSCLogoText({ className = "" }: { className?: string }) {
  return (
    <div className={`inline-flex flex-col select-none text-slate-900 font-montserrat ${className}`}>
      <div className="text-2xl font-black tracking-[-0.04em] leading-none uppercase">GSSC</div>
      <div className="flex flex-col pl-4 -mt-0.5">
        <span className="text-[9px] font-black tracking-tight leading-none uppercase text-orange-600">INDIA</span>
        <span className="text-[6px] font-normal text-slate-500 leading-tight">Gas &amp; Steam Solutions</span>
      </div>
    </div>
  );
}

