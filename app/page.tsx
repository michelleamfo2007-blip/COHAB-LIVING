import Link from "next/link";
import { ArrowIcon, Section, SectionIntro } from "@/components/ui";
import { ProductShowcase } from "@/components/ProductShowcase";
import { PropertyCard } from "@/components/PropertyCard";
import { audiences, features, steps, testimonials } from "@/lib/content";
import { featuredProperties } from "@/lib/properties";

const highlights = features.filter((feature) =>
  [
    "Smart Property Management",
    "Digital Lease Management",
    "Rent Tracking & Financial Management",
    "Maintenance Management",
    "Resident Community & Living IQ",
    "Landlord Reliability Ratings",
  ].includes(feature.title),
);

export default function HomePage() {
  return (
    <>
      <section className="bg-navy text-paper">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-6">
            <p className="rise text-xs font-semibold uppercase tracking-[0.22em] text-gold-soft">Property operating system</p>
            <h1 className="rise rise-2 mt-5 font-serif text-4xl leading-[1.08] text-balance sm:text-6xl lg:text-[4.4rem]">
              The operating system for homes people share.
            </h1>
            <p className="rise rise-3 mt-6 max-w-xl text-lg leading-relaxed text-mist">
              CoHab OS gives landlords, property managers, and residents one calm place for the lease, the rent, the
              repair, and the day-to-day of living together.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact#demo" className="btn btn-gold">
                Book a demo <ArrowIcon />
              </Link>
              <Link href="/properties" className="btn btn-ghost-light">
                Browse properties
              </Link>
            </div>
            <p className="mt-6 text-sm text-mist">
              United States, Ghana, and Nigeria.{" "}
              <Link href="/about" className="underline decoration-white/30 underline-offset-4">
                Read the story
              </Link>
            </p>
          </div>
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-navy-800 sm:aspect-[5/4]">
                <img
                  src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80"
                  alt="A furnished living room in a modern shared residence"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute inset-x-3 bottom-4 rounded-2xl border border-white/10 bg-navy-800/95 p-4 shadow-2xl sm:inset-x-auto sm:-left-8 sm:bottom-6 sm:max-w-xs sm:p-5">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gold-soft">Product preview</p>
                <p className="mt-2 font-serif text-2xl">The Meridian · East Legon</p>
                <ul className="mt-3 space-y-1.5 text-sm text-mist">
                  <li>Lease held on the tenancy</li>
                  <li>Rent visible to owner and resident</li>
                  <li>Repair open, vendor assigned</li>
                </ul>
                <Link href="/properties/the-meridian" className="mt-4 inline-flex text-sm font-semibold text-gold-soft">
                  See the home
                </Link>
              </div>
            </div>
            <p className="mt-3 text-xs text-mist/80">Illustrative preview. Live workspaces open inside the platform.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-navy/10 bg-ivory">
        <div className="mx-auto grid w-full max-w-7xl gap-6 px-5 py-8 sm:px-8 md:grid-cols-3">
          {[
            ["01", "One record", "The home, the people, and the money stay together."],
            ["02", "Three audiences", "Landlords, managers, and residents each have a clear role."],
            ["03", "Three markets", "Built for the United States, Ghana, and Nigeria."],
          ].map(([number, title, text]) => (
            <div key={number} className="flex gap-4">
              <span className="font-serif text-xl text-sage">{number}</span>
              <div>
                <p className="font-semibold text-navy">{title}</p>
                <p className="mt-1 text-sm text-muted">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Section>
        <SectionIntro
          eyebrow="Capabilities"
          title="What the platform holds."
          lede="CoHab OS is the system behind the home. This website explains it and lists properties. The work itself happens in the product."
        />
        <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-navy/10 bg-navy/10 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((feature) => (
            <article key={feature.title} className="bg-paper p-6 sm:p-8">
              <h3 className="font-serif text-2xl text-navy">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{feature.summary}</p>
            </article>
          ))}
        </div>
        <Link href="/solutions" className="btn btn-ghost mt-8">
          See all capabilities <ArrowIcon />
        </Link>
      </Section>

      <Section tone="ivory" id="how-it-works">
        <SectionIntro
          eyebrow="How CoHab OS works"
          title="From an empty room to a house that can explain itself."
          lede="Four movements. The same record carries all of them, so nobody has to reconstruct the month from memory."
        />
        <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li key={step.number}>
              <p className="font-serif text-4xl text-sage">{step.number}</p>
              <h3 className="mt-3 font-serif text-2xl text-navy">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 max-w-3xl text-sm leading-relaxed text-muted">
          Dashboards, rent collection, maintenance desks, chore swaps, and ratings are platform features. The screens
          below are the proposed experience. You use them once your CoHab OS account is open.
        </p>
      </Section>

      <ProductShowcase />

      <Section>
        <SectionIntro
          eyebrow="Who it is for"
          title="A serious tool for the people on every side of the lease."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {audiences.map((audience) => (
            <article key={audience.title} className="flex flex-col rounded-2xl border border-navy/10 p-7">
              <h3 className="font-serif text-3xl text-navy">{audience.title}</h3>
              <ul className="mt-5 flex-1 space-y-3 text-sm leading-relaxed text-muted">
                {audience.points.map((point) => (
                  <li key={point} className="border-t border-navy/10 pt-3">
                    {point}
                  </li>
                ))}
              </ul>
              <Link href={audience.href} className="mt-6 text-sm font-semibold text-sage">
                Learn more
              </Link>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="ivory">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionIntro
            eyebrow="Featured properties"
            title="Homes currently offered through CoHab OS."
            lede="A first collection across Accra, Lagos, Austin, and Atlanta. Each listing can be toured. The lease, once agreed, lives in the platform."
          />
          <Link href="/properties" className="btn btn-ghost shrink-0">
            All properties
          </Link>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {featuredProperties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="In practice"
          title="What people need the system to carry."
          lede="Composite illustrations of daily use. They are not a published customer list."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.place} className="flex flex-col border-t-2 border-gold pt-6">
              <blockquote className="flex-1 font-serif text-2xl leading-snug text-navy">“{item.quote}”</blockquote>
              <figcaption className="mt-6 text-sm text-muted">
                {item.role}
                <span className="text-navy/30"> · </span>
                {item.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <section className="bg-navy text-paper">
        <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-soft">Contact and demo</p>
            <h2 className="mt-3 font-serif text-4xl leading-tight text-balance sm:text-5xl">
              See the platform against your own portfolio.
            </h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-mist">
              Tell us how many homes you run, and where. A demonstration walks through onboarding, rent, maintenance,
              and the resident view — without pretending this website is the product.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link href="/contact#demo" className="btn btn-gold">
              Book a demo
            </Link>
            <Link href="/contact#enquiry" className="btn btn-ghost-light">
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
