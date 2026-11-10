import { DesktopMock, MiniStat, PhoneMock } from "@/components/mockups/chrome";

export function ManagementDashboard() {
  const homes = [
    ["The Meridian", "East Legon", "8/8 occupied"],
    ["Lekki Shore House", "Lagos", "7/10 occupied"],
    ["Oak & Vine", "Austin", "3/4 occupied"],
  ];
  return (
    <DesktopMock title="Property management" active="Overview">
      <p className="text-[11px] text-muted">November · sample portfolio</p>
      <p className="font-serif text-xl text-navy">Portfolio overview</p>
      <div className="mt-3 grid grid-cols-2 gap-2 lg:grid-cols-3">
        <MiniStat label="Properties" value="12" />
        <MiniStat label="Occupied units" value="86" />
        <MiniStat label="Vacant units" value="9" />
        <MiniStat label="Rent this month" value="GHS 428k" />
        <MiniStat label="Active residents" value="94" />
        <MiniStat label="Open repairs" value="7" />
      </div>
      <div className="mt-3 divide-y divide-navy/10 rounded-xl bg-white">
        {homes.map(([name, place, status]) => (
          <div key={name} className="flex items-center justify-between gap-3 px-3 py-2 text-[11px]">
            <span className="min-w-0">
              <span className="block truncate font-semibold text-navy">{name}</span>
              <span className="text-muted">{place}</span>
            </span>
            <span className="shrink-0 text-sage">{status}</span>
          </div>
        ))}
      </div>
    </DesktopMock>
  );
}

export function LivenessPhone() {
  return (
    <PhoneMock>
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sage">Identity check</p>
      <p className="mt-1 font-serif text-lg leading-tight text-navy">Liveness detection</p>
      <div className="relative mx-auto mt-3 grid h-40 w-32 place-items-center rounded-[2rem] border-2 border-dashed border-sage/50 bg-[#e7efe9]">
        <svg viewBox="0 0 80 100" className="h-24 w-16 text-sage" fill="none" aria-hidden>
          <ellipse cx="40" cy="42" rx="18" ry="22" stroke="currentColor" strokeWidth="1.6" />
          <path d="M16 86c4-12 14-18 24-18s20 6 24 18" stroke="currentColor" strokeWidth="1.6" />
          <circle cx="33" cy="40" r="1.4" fill="currentColor" />
          <circle cx="47" cy="40" r="1.4" fill="currentColor" />
        </svg>
        <p className="absolute bottom-2 px-2 text-center text-[9px] leading-tight text-sage">Blink once. A still photo will not pass.</p>
      </div>
      <p className="mt-3 text-[10px] leading-snug text-muted">Designed to match a live person to the government ID they upload. Consent is required first.</p>
    </PhoneMock>
  );
}

export function VerifiedPhone() {
  return (
    <PhoneMock>
      <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-sage">Identity check</p>
      <div className="mt-6 grid place-items-center">
        <span className="grid h-16 w-16 place-items-center rounded-full bg-sage text-2xl text-paper">✓</span>
        <p className="mt-4 text-center font-serif text-xl text-navy">Verified successfully</p>
        <p className="mt-2 text-center text-[11px] leading-snug text-muted">Sample result. This website does not capture a face or an identity document.</p>
      </div>
      <div className="mt-5 space-y-1.5 text-[10px] text-navy">
        <p className="rounded-lg bg-ivory px-2 py-1.5">Government ID · on file in the product design</p>
        <p className="rounded-lg bg-ivory px-2 py-1.5">House rules · acknowledgement still to come</p>
      </div>
    </PhoneMock>
  );
}

export function ResidentPhone() {
  const links = ["Rent & payments", "Maintenance", "Living IQ", "Documents"];
  return (
    <PhoneMock>
      <p className="text-[10px] uppercase tracking-[0.14em] text-sage">My home</p>
      <p className="font-serif text-lg text-navy">The Meridian · Room 3</p>
      <p className="text-[11px] text-muted">East Legon · sample resident view</p>
      <div className="mt-3 rounded-xl bg-navy px-3 py-2.5 text-paper">
        <p className="text-[10px] text-mist">Next rent</p>
        <p className="font-serif text-xl">GHS 8,400</p>
        <p className="text-[10px] text-gold-soft">Due 1 December · sample</p>
      </div>
      <ul className="mt-3 space-y-1.5">
        {links.map((item) => (
          <li key={item} className="rounded-lg border border-navy/10 px-2.5 py-1.5 text-[11px] text-navy">
            {item}
          </li>
        ))}
      </ul>
    </PhoneMock>
  );
}

export function RentPhone() {
  return (
    <PhoneMock>
      <p className="text-[10px] uppercase tracking-[0.14em] text-sage">Rent & payments</p>
      <div className="mt-2 flex items-center gap-3">
        <div
          className="grid h-16 w-16 place-items-center rounded-full"
          style={{ background: "conic-gradient(#1e4d3c 0 342deg, #e4ddd2 342deg)" }}
        >
          <span className="grid h-12 w-12 place-items-center rounded-full bg-paper font-serif text-sm text-navy">95</span>
        </div>
        <div>
          <p className="font-serif text-lg text-navy">Rent-Score</p>
          <p className="text-[11px] text-muted">95 / 100 · sample</p>
        </div>
      </div>
      <div className="mt-3 space-y-1.5 text-[11px]">
        <p className="flex justify-between rounded-lg bg-white px-2 py-1.5">
          <span>1 Nov · on time</span>
          <span className="text-sage">+5</span>
        </p>
        <p className="flex justify-between rounded-lg bg-white px-2 py-1.5">
          <span>Balance</span>
          <span className="font-semibold">GHS 0</span>
        </p>
        <p className="flex justify-between rounded-lg bg-white px-2 py-1.5">
          <span>Next due</span>
          <span>1 Dec</span>
        </p>
      </div>
      <p className="mt-2 text-[9px] leading-snug text-muted">Designed rule: start at 100. Due the 1st. Grace through the 3rd. −3 a day from the 4th. +5 if paid on the 1st.</p>
    </PhoneMock>
  );
}

export function IntelligenceDesktop() {
  return (
    <DesktopMock title="Property intelligence" active="Analytics" comingSoon>
      <p className="font-serif text-lg text-navy">Ask the portfolio</p>
      <p className="mt-2 max-w-md rounded-2xl rounded-tl-sm bg-white px-3 py-2 text-[12px] text-navy">
        How much rental income did my New Jersey properties generate this month?
      </p>
      <p className="ml-8 mt-2 rounded-2xl rounded-tr-sm bg-navy px-3 py-2 text-[12px] leading-relaxed text-paper">
        Sample reply only. A connected assistant would read the ledger and answer. That assistant is not part of this release.
      </p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <MiniStat label="Income" value="—" />
        <MiniStat label="Occupancy" value="—" />
        <MiniStat label="Repairs" value="—" />
      </div>
    </DesktopMock>
  );
}

export function MaintenanceDesktop() {
  return (
    <DesktopMock title="Maintenance dispatch" active="Maintenance">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="text-[10px] uppercase tracking-[0.14em] text-sage">Request 1842</p>
          <p className="font-serif text-lg text-navy">Kitchen leak · The Meridian</p>
          <p className="text-[11px] text-muted">Reported with a photo · plumbing</p>
        </div>
        <span className="rounded-full bg-gold px-2 py-1 text-[10px] font-semibold text-navy">En route</span>
      </div>
      <div className="mt-3 grid gap-2 sm:grid-cols-3">
        <MiniStat label="Technician" value="Kojo A." />
        <MiniStat label="Arrival" value="14:40" />
        <MiniStat label="Vendor" value="Private" />
      </div>
      <ol className="mt-3 space-y-1.5 text-[11px] text-navy">
        {["Resident submitted", "Vendor assigned", "On the way", "Completion still open"].map((step, index) => (
          <li key={step} className="flex items-center gap-2">
            <span className={`h-2 w-2 rounded-full ${index < 3 ? "bg-sage" : "bg-navy/20"}`} />
            {step}
          </li>
        ))}
      </ol>
    </DesktopMock>
  );
}

export function LivingIqPhone() {
  const scores = [
    ["Cleanliness", "4.4"],
    ["Communication", "4.6"],
    ["Chores", "4.1"],
  ];
  return (
    <PhoneMock>
      <p className="text-[10px] uppercase tracking-[0.14em] text-sage">Living IQ</p>
      <p className="font-serif text-3xl text-navy">82</p>
      <p className="text-[11px] text-muted">This week · anonymous house feedback</p>
      <ul className="mt-3 space-y-1.5">
        {scores.map(([label, score]) => (
          <li key={label} className="flex items-center justify-between rounded-lg bg-white px-2 py-1.5 text-[11px]">
            <span>{label}</span>
            <span className="font-semibold text-navy">{score}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 text-[11px] text-navy">Thursday · kitchen rota · swap offered</p>
    </PhoneMock>
  );
}

export function LandlordScoreDesktop() {
  const rows = [
    ["Maintenance response", "4.9"],
    ["Communication", "4.7"],
    ["Issue resolution", "4.8"],
  ];
  return (
    <DesktopMock title="Landlord reliability" active="Residents">
      <p className="text-[11px] text-muted">Sample profile · monthly resident feedback</p>
      <p className="font-serif text-4xl text-navy">
        4.8<span className="text-lg text-muted"> / 5</span>
      </p>
      <ul className="mt-3 space-y-2">
        {rows.map(([label, score]) => (
          <li key={label}>
            <div className="flex justify-between text-[11px] text-navy">
              <span>{label}</span>
              <span>{score}</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-ivory">
              <div className="h-1.5 rounded-full bg-sage" style={{ width: `${Number(score) * 20}%` }} />
            </div>
          </li>
        ))}
      </ul>
    </DesktopMock>
  );
}

export function TourPhone() {
  return (
    <PhoneMock>
      <p className="text-[10px] uppercase tracking-[0.14em] text-sage">Book a tour</p>
      <p className="font-serif text-lg text-navy">The Meridian</p>
      <div className="mt-2 flex flex-wrap gap-1.5 text-[10px]">
        {["In person", "Virtual", "Self-guided"].map((mode, index) => (
          <span key={mode} className={`rounded-full px-2 py-1 ${index === 0 ? "bg-navy text-paper" : "bg-ivory text-navy"}`}>
            {mode}
          </span>
        ))}
      </div>
      <div className="mt-3 grid grid-cols-2 gap-1.5 text-center text-[11px]">
        {["Thu 14 · 10:00", "Thu 14 · 16:00", "Fri 15 · 11:30", "Sat 16 · 09:00"].map((slot, index) => (
          <span key={slot} className={`rounded-lg px-1 py-2 ${index === 1 ? "bg-sage text-paper" : "bg-white text-navy"}`}>
            {slot}
          </span>
        ))}
      </div>
      <p className="mt-2 text-[9px] leading-snug text-muted">Smart-lock access is a planned option for self-guided visits. It is not connected.</p>
    </PhoneMock>
  );
}

export function VaultPhone() {
  const files = [
    ["Lease agreement", "Signed · sample"],
    ["Government ID", "Stored in the product design"],
    ["House rules", "Acknowledged"],
  ];
  return (
    <PhoneMock>
      <p className="text-[10px] uppercase tracking-[0.14em] text-sage">Document vault</p>
      <p className="font-serif text-lg text-navy">Room 3</p>
      <ul className="mt-3 space-y-1.5">
        {files.map(([name, state]) => (
          <li key={name} className="rounded-lg border border-navy/10 px-2.5 py-2">
            <p className="text-[11px] font-semibold text-navy">{name}</p>
            <p className="text-[10px] text-muted">{state}</p>
          </li>
        ))}
      </ul>
    </PhoneMock>
  );
}

export function VendorDesktop() {
  return (
    <DesktopMock title="Vendor jobs" active="Vendors">
      <p className="font-serif text-lg text-navy">Adeyemi Plumbing</p>
      <div className="mt-3 grid grid-cols-3 gap-2">
        <MiniStat label="Open jobs" value="3" />
        <MiniStat label="This month" value="GHS 12.4k" />
        <MiniStat label="Rating" value="4.9" />
      </div>
      <div className="mt-3 rounded-xl bg-white px-3 py-2 text-[11px]">
        <p className="font-semibold text-navy">Accept · Kitchen leak, East Legon</p>
        <p className="text-muted">Today 14:40 · private vendor list</p>
      </div>
    </DesktopMock>
  );
}

export function AnalyticsDesktop() {
  const bars = [
    ["Accra", "78%"],
    ["Lagos", "64%"],
    ["Austin", "91%"],
    ["Atlanta", "70%"],
  ];
  return (
    <DesktopMock title="Portfolio analytics" active="Analytics">
      <p className="text-[11px] text-muted">Illustrative occupancy by market</p>
      <div className="mt-3 space-y-2">
        {bars.map(([city, width]) => (
          <div key={city}>
            <div className="flex justify-between text-[11px] text-navy">
              <span>{city}</span>
              <span>{width}</span>
            </div>
            <div className="mt-1 h-2 rounded-full bg-white">
              <div className="h-2 rounded-full bg-navy" style={{ width }} />
            </div>
          </div>
        ))}
      </div>
      <p className="mt-3 text-[10px] text-muted">A reporting view of the design. It is not reading a live portfolio.</p>
    </DesktopMock>
  );
}
