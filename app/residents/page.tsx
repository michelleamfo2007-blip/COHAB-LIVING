import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Residents",
  description:
    "The CoHab OS resident experience: digital onboarding, rent, maintenance, community, chores, lease documents, and support.",
};

const items = [
  {
    title: "Digital onboarding",
    text: "You see the steps: application, verification, lease, and move-in. What is still outstanding is visible, so you are not guessing what the manager is waiting for.",
  },
  {
    title: "Online rent payments",
    text: "Rent is paid inside the platform, against the schedule on your lease. You can see what posted and what is still open. Payment processing itself lives in the product, not on this website.",
  },
  {
    title: "Maintenance requests",
    text: "Report a fault once. The request keeps a status, so you know whether it is waiting, assigned, or done. You do not have to ask three people what happened to the tap.",
  },
  {
    title: "Community ratings",
    text: "Living IQ and community ratings stay inside the house. They describe how the home is running. Landlord reliability is part of that picture, and it is based on the record, not on an anonymous star.",
  },
  {
    title: "Chore swapping",
    text: "The rota is visible. If you cannot take your week, you can offer a swap. The house still knows who is responsible when the week arrives.",
  },
  {
    title: "Lease document access",
    text: "Your lease, the house rules, and the papers you signed stay on your tenancy. You can open them later without emailing the office for a copy.",
  },
  {
    title: "Resident support",
    text: "Support starts with the property team on your home. CoHab OS also takes resident questions by email while in-product support is connected. You will not be handed a dashboard that does not exist yet.",
  },
];

export default function ResidentsPage() {
  return (
    <>
      <PageHero
        eyebrow="Residents"
        title="A shared home with the paperwork in order."
        lede="CoHab OS is the resident side of the house: onboarding, rent, repairs, documents, and the small agreements that make a shared kitchen survivable."
      >
        <Link href="/properties" className="btn btn-gold">
          Look at homes
        </Link>
        <Link href="/login?role=resident" className="btn btn-ghost-light">
          Resident login
        </Link>
      </PageHero>
      <Section>
        <div className="grid gap-6 lg:grid-cols-2">
          {items.map((item) => (
            <article key={item.title} className="border-t border-navy/10 pt-6">
              <h2 className="font-serif text-3xl text-navy">{item.title}</h2>
              <p className="mt-3 leading-relaxed text-muted">{item.text}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section tone="ivory">
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl text-navy">Already living in a CoHab home?</h2>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
              Resident login will open your home when platform authentication is connected. If you are looking, start
              with the listings. If you are moving in, your manager will invite you. You can also request an account.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/get-started?role=resident" className="btn btn-navy">
                Create a resident account
              </Link>
              <Link href="/contact?intent=resident" className="btn btn-ghost">
                Contact support
              </Link>
            </div>
          </div>
          <div className="rounded-2xl bg-navy p-8 text-paper lg:col-span-5">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold-soft">A boundary worth knowing</p>
            <p className="mt-4 font-serif text-3xl">This page is the explanation. Your home is the product.</p>
            <p className="mt-4 text-sm leading-relaxed text-mist">
              Paying rent, swapping a chore, and scoring a stay happen in CoHab OS. You will not be asked to do those
              things on the marketing site.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
