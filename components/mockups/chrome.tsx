export function DesktopMock({
  title,
  active,
  comingSoon = false,
  children,
}: {
  title: string;
  active: string;
  comingSoon?: boolean;
  children: React.ReactNode;
}) {
  const items = ["Overview", "Properties", "Residents", "Rent", "Maintenance", "Vendors", "Documents", "Analytics"];
  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-[0_28px_70px_rgba(8,20,34,0.14)]">
      <div className="flex items-center gap-3 border-b border-navy/10 bg-paper px-4 py-2.5">
        <span className="flex gap-1.5" aria-hidden>
          <i className="h-2.5 w-2.5 rounded-full bg-[#e4b2a8]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#e4d0a1]" />
          <i className="h-2.5 w-2.5 rounded-full bg-[#b7cbb8]" />
        </span>
        <span className="shrink-0 whitespace-nowrap text-xs font-semibold text-navy">CoHab OS</span>
        <span className="truncate text-xs text-muted">{title}</span>
        <span
          className={`ml-auto shrink-0 rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em] ${comingSoon ? "bg-sage text-paper" : "bg-ivory text-navy"}`}
        >
          {comingSoon ? "Coming soon" : "Proposed"}
        </span>
      </div>
      <div className="grid min-h-[340px] grid-cols-1 sm:grid-cols-[148px_1fr]">
        <aside className="hidden bg-navy px-2.5 py-4 text-[11px] text-mist sm:block">
          <p className="px-2 pb-3 font-serif text-sm text-paper">CoHab</p>
          {items.map((item) => (
            <div key={item} className={`mb-0.5 rounded-md px-2 py-1.5 ${item === active ? "bg-white/10 text-paper" : "text-mist"}`}>
              {item}
            </div>
          ))}
        </aside>
        <div className="bg-[#f4f0e8] p-3 sm:p-4">{children}</div>
      </div>
    </div>
  );
}

export function PhoneMock({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-[238px] rounded-[1.8rem] bg-navy p-[7px] shadow-[0_24px_50px_rgba(8,20,34,0.2)]">
      <div className="overflow-hidden rounded-[1.4rem] bg-paper">
        <div className="flex items-center justify-between px-4 pb-1 pt-2 text-[10px] font-semibold text-navy">
          <span>9:41</span>
          <span className="h-4 w-14 rounded-full bg-navy" />
          <span>LTE</span>
        </div>
        <div className="px-3.5 pb-4">{children}</div>
      </div>
    </div>
  );
}

export function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-white px-2.5 py-2">
      <p className="text-[10px] uppercase tracking-[0.12em] text-muted">{label}</p>
      <p className="mt-0.5 font-serif text-lg leading-none text-navy">{value}</p>
    </div>
  );
}
