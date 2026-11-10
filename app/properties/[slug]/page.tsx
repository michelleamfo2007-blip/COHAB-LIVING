import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { TourForm } from "@/components/Forms";
import { PropertyCard } from "@/components/PropertyCard";
import { PropertyGallery } from "@/components/PropertyGallery";
import { getProperty, marketLabel, properties, relatedProperties } from "@/lib/properties";

type Params = { slug: string };

export function generateStaticParams() {
  return properties.map((property) => ({ slug: property.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) return { title: "Property" };
  return {
    title: `${property.name} · ${property.city}`,
    description: property.summary,
  };
}

export default async function PropertyPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const property = getProperty(slug);
  if (!property) notFound();
  const related = relatedProperties(property.slug);
  const maps = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${property.neighborhood}, ${property.city}, ${marketLabel[property.country]}`,
  )}`;

  return (
    <article>
      <div className="border-b border-navy/10 bg-ivory">
        <div className="mx-auto w-full max-w-7xl px-5 py-8 sm:px-8">
          <Link href="/properties" className="text-sm font-semibold text-sage">
            All properties
          </Link>
          <p className="mt-4 text-xs font-semibold uppercase tracking-[0.18em] text-sage">
            {property.neighborhood}, {property.city} · {marketLabel[property.country]}
          </p>
          <div className="mt-2 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <h1 className="font-serif text-4xl text-navy sm:text-6xl">{property.name}</h1>
            <p className="font-serif text-3xl text-navy">
              {property.price}
              <span className="ml-2 font-sans text-sm font-medium text-muted">{property.priceNote}</span>
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-10 sm:px-8 lg:grid-cols-12 lg:py-14">
        <div className="lg:col-span-7">
          <PropertyGallery images={property.gallery} name={property.name} />
          <div className="mt-10 space-y-4 text-lg leading-relaxed text-muted">
            {property.description.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <h2 className="mt-12 font-serif text-3xl text-navy">Amenities and facilities</h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2">
            {property.amenities.map((amenity) => (
              <li key={amenity} className="rounded-xl border border-navy/10 px-4 py-3 text-sm text-navy">
                {amenity}
              </li>
            ))}
          </ul>
          <h2 className="mt-12 font-serif text-3xl text-navy">Location</h2>
          <p className="mt-4 leading-relaxed text-muted">{property.locationNote}</p>
          <a href={maps} className="mt-4 inline-block text-sm font-semibold text-sage underline underline-offset-4" rel="noreferrer">
            Open {property.neighborhood} in maps
          </a>
          <div className="mt-12 rounded-2xl border border-navy/10 bg-ivory p-6">
            <h2 className="font-serif text-3xl text-navy">{property.virtualTour ? "Photo tour" : "Virtual tour"}</h2>
            {property.virtualTour ? (
              <p className="mt-3 leading-relaxed text-muted">
                Use the gallery above as a photo tour of {property.name}. A live virtual tour can be scheduled with the
                property team. Choose “Virtual” when you request a time.
              </p>
            ) : (
              <p className="mt-3 leading-relaxed text-muted">
                A virtual tour is not offered for this home yet. You can still book an in-person visit, or ask the team
                to walk you through on a call if one becomes possible.
              </p>
            )}
          </div>
        </div>
        <aside className="lg:col-span-5">
          <div className="rounded-2xl border border-navy/10 bg-paper p-6 lg:sticky lg:top-28">
            <dl className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-muted">Status</dt>
                <dd className="mt-1 font-semibold text-navy">{property.status}</dd>
              </div>
              <div>
                <dt className="text-muted">Availability</dt>
                <dd className="mt-1 font-semibold text-navy">{property.roomsLabel}</dd>
              </div>
              <div>
                <dt className="text-muted">Type</dt>
                <dd className="mt-1 font-semibold text-navy">{property.type}</dd>
              </div>
              <div>
                <dt className="text-muted">Virtual tour</dt>
                <dd className="mt-1 font-semibold text-navy">{property.virtualTour ? "Available" : "Not yet"}</dd>
              </div>
            </dl>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Listing guides only. A lease in CoHab OS confirms rent, deposit, and included utilities.
            </p>
            <h2 className="mt-8 font-serif text-3xl text-navy">Schedule a tour</h2>
            <div className="mt-5">
              <TourForm propertyName={property.name} />
            </div>
          </div>
        </aside>
      </div>
      {related.length ? (
        <section className="border-t border-navy/10 bg-ivory">
          <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8">
            <h2 className="font-serif text-3xl text-navy">Other homes</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {related.map((item) => (
                <PropertyCard key={item.slug} property={item} />
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </article>
  );
}
