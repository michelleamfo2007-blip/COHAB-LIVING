import Link from "next/link";
import type { Property } from "@/lib/properties";
import { marketLabel } from "@/lib/properties";

const statusClass: Record<Property["status"], string> = {
  Available: "bg-sage text-paper",
  Limited: "bg-gold text-navy",
  Waitlist: "bg-paper text-navy",
};

export function PropertyCard({ property }: { property: Property }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-navy/10 bg-paper transition hover:border-navy/25">
      <Link
        href={`/properties/${property.slug}`}
        aria-label={`${property.name} in ${property.city}`}
        className="relative block aspect-[4/3] overflow-hidden bg-ivory"
      >
        <img
          src={property.image.src}
          alt={property.image.alt}
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
        />
        <span className={`absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold ${statusClass[property.status]}`}>
          {property.status}
        </span>
        {property.virtualTour ? (
          <span className="absolute right-3 top-3 rounded-full bg-navy/85 px-3 py-1 text-xs font-semibold text-paper">
            Virtual tour
          </span>
        ) : null}
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-sage">
          {property.neighborhood}, {property.city} · {marketLabel[property.country]}
        </p>
        <h3 className="mt-2 font-serif text-2xl text-navy">
          <Link href={`/properties/${property.slug}`} className="hover:underline">
            {property.name}
          </Link>
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">{property.summary}</p>
        <div className="mt-5 flex items-end justify-between gap-3 border-t border-navy/10 pt-4">
          <div>
            <p className="font-serif text-2xl text-navy">{property.price}</p>
            <p className="text-xs text-muted">{property.priceNote}</p>
          </div>
          <p className="text-right text-sm text-muted">{property.roomsLabel}</p>
        </div>
      </div>
    </article>
  );
}
