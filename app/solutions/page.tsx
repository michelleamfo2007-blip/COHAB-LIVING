import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";
import { features } from "@/lib/content";

export const metadata: Metadata = {
  title: "Solutions",
  description:
    "Property management, resident living, maintenance, rent, utilities, vendors, and the rest of the CoHab OS platform.",
};

const deep = [
  {
    id: "property-management",
    eyebrow: "Property management",
    title: "The portfolio, the tenancy, and the lease.",
    text: "Smart property management starts with a home that has a shape: rooms, people, documents, and responsibility. Onboarding and verification follow a sequence. The lease stays on the tenancy, including the house rules and the renewal.",
    points: [
      "Property, room, and occupancy records",
      "Tenant onboarding and verification",
      "Digital lease management",
      "A portfolio view when you operate more than one home",
    ],
    href: "/property-managers",
    cta: "For property managers",
  },
  {
    id: "residents",
    eyebrow: "Residents",
    title: "A house people can actually live in.",
    text: "Residents get a path through onboarding, a lease they can reopen, and tools for the shared parts of the home. Living IQ is the house’s own picture of how things are going. Chores can be swapped. Community stays inside the home.",
    points: [
      "Digital onboarding and lease access",
      "Resident community and Living IQ",
      "Chore management and swapping",
      "Landlord reliability, written as a record",
    ],
    href: "/residents",
    cta: "The resident experience",
  },
  {
    id: "maintenance",
    eyebrow: "Maintenance",
    title: "A fault with a status, and a vendor who can be found.",
    text: "Maintenance management gives every request a home, a priority, and a history. Vendor management keeps the plumber, the electrician, and the cleaning crew on the property, so dispatch is not a search through old messages.",
    points: [
      "Resident requests with a visible status",
      "Dispatch across a portfolio",
      "Vendor records tied to the property",
      "A trail of what was reported and what was done",
    ],
    href: "/contact#demo",
    cta: "See it in a demo",
  },
  {
    id: "financial",
    eyebrow: "Financial management",
    title: "Rent, splits, and a statement someone can read.",
    text: "Rent tracking shows what was charged, what was received, and what is still open. Utility bill splitting follows the rule the house agreed. Reporting gives owners a view of the month without a reconstruction.",
    points: [
      "Rent schedules and balances",
      "Utility bill splitting",
      "Statements for a home or a portfolio",
      "Analytics and AI intelligence — coming soon, and not sold as live",
    ],
    href: "/pricing",
    cta: "View plans",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <PageHero
        eyebrow="Solutions"
        title="The capabilities of a shared home, held in one system."
        lede="CoHab OS covers the work of running a co-living property and the experience of living in it. What follows is the platform. This website is the guide."
      >
        <Link href="/contact#demo" className="btn btn-gold">
          Book a demo
        </Link>
        <Link href="/pricing" className="btn btn-ghost-light">
          View pricing
        </Link>
      </PageHero>
      <Section>
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">All capabilities</p>
        <h2 className="mt-3 max-w-2xl font-serif text-4xl text-navy">Eleven parts. One property record.</h2>
        <ol className="mt-10 border-t border-navy/10">
          {features.map((feature, index) => (
            <li key={feature.title} className="grid gap-3 border-b border-navy/10 py-7 md:grid-cols-12 md:gap-6">
              <p className="font-serif text-xl text-sage md:col-span-1">{String(index + 1).padStart(2, "0")}</p>
              <h3 className="font-serif text-2xl text-navy md:col-span-4">
                {feature.title}
                {"comingSoon" in feature && feature.comingSoon ? (
                  <span className="ml-3 align-middle text-xs font-semibold uppercase tracking-[0.14em] text-sage">
                    Coming soon
                  </span>
                ) : null}
              </h3>
              <p className="text-sm leading-relaxed text-muted md:col-span-7">{feature.summary}</p>
            </li>
          ))}
        </ol>
      </Section>
      {deep.map((section, index) => (
        <Section key={section.id} id={section.id} tone={index % 2 === 0 ? "ivory" : "paper"}>
          <div className="grid items-start gap-10 lg:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">{section.eyebrow}</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-navy">{section.title}</h2>
              <p className="mt-5 text-lg leading-relaxed text-muted">{section.text}</p>
              <Link href={section.href} className="btn btn-navy mt-8">
                {section.cta}
              </Link>
            </div>
            <ul className="divide-y divide-navy/10 border-y border-navy/10">
              {section.points.map((point) => (
                <li key={point} className="py-4 text-lg text-navy">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </Section>
      ))}
      <Section tone="navy">
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl text-paper">Where the website stops and the product starts.</h2>
          <p className="mt-5 text-lg leading-relaxed text-mist">
            Tenant dashboards, landlord dashboards, maintenance portals, payment processing, chore management, and rent
            scoring are platform functionality. They are described here so you can judge the fit. They are not rebuilt
            as mini-apps on this marketing site.
          </p>
          <Link href="/get-started" className="btn btn-gold mt-8">
            Get started
          </Link>
        </div>
      </Section>
    </>
  );
}
