import logo from "@/assets/wt-logo.svg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src={logo} alt="" width={32} height={32} className="h-8 w-8 rounded-[9px] shadow-red" />
      <span className="font-display text-[17px] font-bold tracking-tight">
        WT<span className="text-primary">&amp;</span>tudio
      </span>
    </span>
  );
}
