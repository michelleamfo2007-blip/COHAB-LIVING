import Link from "next/link";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="CoHab OS home">
      <span className={`grid h-9 w-9 place-items-center rounded-lg ${light ? "bg-gold text-navy" : "bg-navy text-gold"}`}>
        <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
          <path
            fill="currentColor"
            d="M4.2 10.6 12 4.2l7.8 6.4V19a1 1 0 0 1-1 1h-4.4v-5.1H9.6V20H5.2a1 1 0 0 1-1-1v-8.4Z"
          />
        </svg>
      </span>
      <span className={`font-serif text-[1.35rem] leading-none tracking-tight ${light ? "text-paper" : "text-navy"}`}>
        CoHab <span className={light ? "text-gold-soft" : "text-sage"}>OS</span>
      </span>
    </Link>
  );
}

export function Section({
  id,
  tone = "paper",
  children,
  className = "",
}: {
  id?: string;
  tone?: "paper" | "ivory" | "navy";
  children: React.ReactNode;
  className?: string;
}) {
  const tones = {
    paper: "bg-paper text-ink",
    ivory: "bg-ivory text-ink",
    navy: "bg-navy text-paper",
  };
  return (
    <section id={id} className={`scroll-mt-24 ${tones[tone]} ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:py-28">{children}</div>
    </section>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  lede,
  light = false,
  action,
}: {
  eyebrow?: string;
  title: string;
  lede?: string;
  light?: boolean;
  action?: React.ReactNode;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow ? (
        <p className={`text-xs font-semibold uppercase tracking-[0.2em] ${light ? "text-gold-soft" : "text-sage"}`}>
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={`mt-3 font-serif text-3xl leading-[1.15] text-balance sm:text-4xl lg:text-[2.75rem] ${light ? "text-paper" : "text-navy"}`}
      >
        {title}
      </h2>
      {lede ? (
        <p className={`mt-4 text-lg leading-relaxed text-pretty ${light ? "text-mist" : "text-muted"}`}>{lede}</p>
      ) : null}
      {action ? <div className="mt-6">{action}</div> : null}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lede,
  children,
}: {
  eyebrow: string;
  title: string;
  lede: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="bg-navy text-paper">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 lg:py-24">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">{eyebrow}</p>
        <h1 className="mt-4 max-w-4xl font-serif text-4xl leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-mist">{lede}</p>
        {children ? <div className="mt-8 flex flex-wrap gap-3">{children}</div> : null}
      </div>
    </section>
  );
}

export function ArrowIcon() {
  return (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="none" aria-hidden="true">
      <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
