"use client";

import { useMemo, useState } from "react";
import { PropertyCard } from "@/components/PropertyCard";
import { marketLabel, type Market, type Property } from "@/lib/properties";

const markets: Array<Market | "All"> = ["All", "Ghana", "Nigeria", "USA"];
const statuses = ["All", "Available", "Limited", "Waitlist"] as const;

export function PropertyBrowser({ properties }: { properties: Property[] }) {
  const [market, setMarket] = useState<(typeof markets)[number]>("All");
  const [status, setStatus] = useState<(typeof statuses)[number]>("All");
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return properties.filter((property) => {
      const marketOk = market === "All" || property.country === market;
      const statusOk = status === "All" || property.status === status;
      const haystack = `${property.name} ${property.city} ${property.neighborhood} ${property.region} ${marketLabel[property.country]}`.toLowerCase();
      return marketOk && statusOk && (!needle || haystack.includes(needle));
    });
  }, [market, properties, query, status]);

  return (
    <div>
      <div className="flex flex-col gap-4 border-b border-navy/10 pb-6 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-sm text-muted">
            Showing {results.length} {results.length === 1 ? "home" : "homes"}
          </p>
          <div className="mt-3 flex flex-wrap gap-2" role="group" aria-label="Filter by market">
            {markets.map((item) => (
              <button
                key={item}
                type="button"
                aria-pressed={market === item}
                onClick={() => setMarket(item)}
                className={chip(market === item)}
              >
                {item === "USA" ? "United States" : item}
              </button>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <label className="text-sm text-navy">
            <span className="mb-1.5 block font-medium">Availability</span>
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as (typeof statuses)[number])}
              className="w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 sm:w-44"
            >
              {statuses.map((item) => (
                <option key={item}>{item}</option>
              ))}
            </select>
          </label>
          <label className="text-sm text-navy">
            <span className="mb-1.5 block font-medium">Search</span>
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="City or neighborhood"
              className="w-full rounded-xl border border-navy/15 bg-white px-3 py-2.5 sm:w-56"
            />
          </label>
        </div>
      </div>
      {results.length === 0 ? (
        <div className="py-16">
          <p className="font-serif text-3xl text-navy">No homes match that filter.</p>
          <button
            type="button"
            className="btn btn-ghost mt-6"
            onClick={() => {
              setMarket("All");
              setStatus("All");
              setQuery("");
            }}
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {results.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      )}
    </div>
  );
}

function chip(active: boolean) {
  return `rounded-full px-3.5 py-1.5 text-sm font-medium ${active ? "bg-navy text-paper" : "bg-ivory text-navy"}`;
}
