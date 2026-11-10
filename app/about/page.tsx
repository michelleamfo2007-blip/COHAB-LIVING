import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "CoHab OS builds the operating system for shared homes, with a vision that reaches the United States, Ghana, Nigeria, and further markets.",
};

const principles = [
  {
    title: "One record for the home",
    text: "Rooms, people, money, and repairs belong together. A second spreadsheet is a sign that the system has failed.",
  },
  {
    title: "Residents are users",
    text: "People who live in the house should be able to see the lease, the balance, and the repair. They are not a row that only the office can read.",
  },
  {
    title: "Money should be explainable",
    text: "Rent, deposits, and utility splits need a rule and a receipt. If it cannot be shown, it should not be charged.",
  },
  {
    title: "Trust should leave a trail",
    text: "Landlord reliability is earned from communication, repairs, and whether the home matches the offer. It is a record, not a slogan.",
  },
  {
    title: "Markets are not a theme",
    text: "Power, water, currency, and data-protection law differ between Atlanta, Accra, and Lagos. The product has to respect that, not paper over it.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="A property company, built as software."
        lede="CoHab OS exists for homes that are shared. We build the system landlords and managers use to run those homes, and the experience residents use to live in them."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Company</p>
            <h2 className="mt-3 font-serif text-4xl text-navy">The introduction is simple.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7">
            <p>
              CoHab OS is the operating system for modern co-living. The company sits between a property business and a
              software business: the website helps people understand the platform and find a home; the product runs the
              home after they are in it.
            </p>
            <p>
              We work with independent landlords, property managers, and the residents of the houses they operate. The
              first markets are the United States, Ghana, and Nigeria. The standard is the same in each: a shared home
              should be as clear as a well-kept ledger and as considered as a well-run building.
            </p>
            <p>
              We do not invent a headquarters we do not have, or a customer list we have not earned. The work right now
              is the product, the homes, and the care taken with both.
            </p>
          </div>
        </div>
      </Section>
      <Section tone="ivory">
        <div className="grid gap-10 lg:grid-cols-2">
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Vision</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-navy">
              Shared housing that feels considered, and that can account for itself.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              A resident should know what they owe, what is being fixed, and whether the house is run fairly. An owner
              should know the same things from the other side of the door. That is the standard CoHab OS is built toward.
            </p>
          </article>
          <article>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Mission</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-navy">
              Give every shared home one trustworthy system.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              The lease, the money, the maintenance, and the ordinary life of living together belong in one place. Our
              mission is to make that place calm enough to use every week, and precise enough to trust.
            </p>
          </article>
        </div>
      </Section>
      <Section>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">The problem</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl text-navy">Shared homes are still run on memory and messages.</h2>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {[
            ["The rent chase", "Someone is late, someone else has paid, and the proof is a screenshot in a thread that three people cannot find."],
            ["The repair in a chat", "A tap is reported on Monday. By Thursday nobody can say whether a vendor was called, or which home it was."],
            ["The utility argument", "The bill arrives. The split was never written down. The house spends the evening negotiating a number that should have been a rule."],
          ].map(([title, text]) => (
            <article key={title}>
              <h3 className="font-serif text-2xl text-navy">{title}</h3>
              <p className="mt-3 leading-relaxed text-muted">{text}</p>
            </article>
          ))}
        </div>
        <p className="mt-10 max-w-3xl text-lg leading-relaxed text-muted">
          Residents feel this as uncertainty. Managers feel it as overhead. Landlords feel it when a portfolio grows past
          what one person can hold in their head. CoHab OS is the answer to that gap: not another chat, a record.
        </p>
      </Section>
      <Section tone="navy">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Our approach</p>
        <h2 className="mt-3 max-w-3xl font-serif text-4xl text-paper">Modern property management, with the resident in the room.</h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {principles.map((principle, index) => (
            <article key={principle.title} className="border-t border-white/15 pt-5">
              <p className="text-sm text-gold-soft">0{index + 1}</p>
              <h3 className="mt-2 font-serif text-2xl">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-mist">{principle.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section>
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">Where we are going</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-navy">United States, Ghana, Nigeria — and only as far as we can support.</h2>
          </div>
          <div className="space-y-5 text-lg leading-relaxed text-muted lg:col-span-7">
            <p>
              The product is designed for homes in the United States, Ghana, and Nigeria first. That means more than a
              currency switch. It means backup power and water storage treated as real amenities, leases that can be
              read on a phone, and privacy practices that can sit beside US state law, Ghana’s Data Protection Act, and
              Nigeria’s data-protection regime.
            </p>
            <p>
              Further markets are a vision, not a claim of presence. We will open them when implementation, support, and
              local understanding can match the software. Expansion that outruns operations is how property platforms
              lose the trust they were built to create.
            </p>
            <p>
              If you operate homes in one of the first three markets, start with a demonstration. If you are elsewhere
              and the problem is the same, write to us. The conversation is welcome. A promise of coverage is not.
            </p>
            <Link href="/contact#demo" className="btn btn-navy">
              Book a demo
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
