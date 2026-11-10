import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "For Property Managers",
  description:
    "How CoHab OS helps property owners and managers run portfolios, tenants, rent, maintenance, vendors, and reporting.",
};

const blocks = [
  {
    title: "Property portfolio management",
    text: "Each home keeps its rooms, documents, and people. A portfolio is the set of those records, not a separate spreadsheet that drifts out of date the week after you build it.",
  },
  {
    title: "Tenant management",
    text: "Applications, verification, move-in, and the life of the tenancy stay on the person and the room. When someone leaves, the record remains understandable to the next manager.",
  },
  {
    title: "Automated rent tracking",
    text: "Schedules, receipts, and balances are kept against the lease. You stop reconstructing the month from messages. Residents see the same figures you do.",
  },
  {
    title: "Maintenance dispatch",
    text: "Open requests are visible across homes. Priority and status travel with the fault. Dispatch sends the vendor the address and the description, instead of a forwarded chat.",
  },
  {
    title: "Financial reporting",
    text: "A home can produce a statement. A portfolio can produce a consolidated one. Owners get something they can read without asking you to export three files and narrate them.",
  },
  {
    title: "Vendor management",
    text: "The people who fix, clean, and service the homes are stored on the property. When a manager is away, the vendor list does not leave with their phone.",
  },
  {
    title: "Multi-property management",
    text: "The same operating picture works for two houses or for a hundred. Seats, roles, and reporting grow with the plan. The record of each home stays intact.",
  },
];

export default function ManagersPage() {
  return (
    <>
      <PageHero
        eyebrow="For property managers"
        title="Run the homes. Stop chasing the record of them."
        lede="CoHab OS is built for owners and managers of shared housing. One operating picture covers the portfolio, the tenants, the rent, the repairs, and the vendors."
      >
        <Link href="/contact#demo" className="btn btn-gold">
          Request a demo
        </Link>
        <Link href="/pricing" className="btn btn-ghost-light">
          Compare plans
        </Link>
      </PageHero>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          {blocks.map((block, index) => (
            <article key={block.title} className="rounded-2xl border border-navy/10 p-7">
              <p className="text-sm font-semibold text-sage">{String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-serif text-3xl text-navy">{block.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{block.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="ivory">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">What you are looking at</p>
            <h2 className="mt-3 font-serif text-4xl text-navy">This page explains the work. The product does the work.</h2>
            <p className="mt-5 text-lg leading-relaxed text-muted">
              Landlord dashboards, maintenance portals, payment processing, and reporting run inside CoHab OS. Request a
              demonstration and we will walk your portfolio through them. Creating an account will connect to that
              platform when authentication is live.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#demo" className="btn btn-navy">
                Request a demo
              </Link>
              <Link href="/get-started?role=manager" className="btn btn-ghost">
                Property manager registration
              </Link>
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl bg-navy">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
              alt="A quiet office table where a property team would review a portfolio"
              className="h-80 w-full object-cover opacity-90"
            />
          </div>
        </div>
      </Section>
    </>
  );
}
