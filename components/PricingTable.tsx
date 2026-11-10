"use client";

import { useState } from "react";
import Link from "next/link";
import { plans, formatUsd, pricingFaqs } from "@/lib/content";

export function PricingTable() {
  const [annual, setAnnual] = useState(true);

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted">Prices in US dollars. Annual billing includes two months.</p>
        <div className="inline-flex rounded-full border border-navy/15 p-1" role="group" aria-label="Billing period">
          <button type="button" aria-pressed={!annual} className={toggle(!annual)} onClick={() => setAnnual(false)}>
            Monthly
          </button>
          <button type="button" aria-pressed={annual} className={toggle(annual)} onClick={() => setAnnual(true)}>
            Annual
          </button>
        </div>
      </div>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {plans.map((plan) => {
          const price = annual ? plan.annual : plan.monthly;
          const savings = plan.monthly && plan.annual ? (plan.monthly - plan.annual) * 12 : 0;
          return (
            <article
              key={plan.id}
              className={`flex flex-col rounded-2xl border p-6 ${plan.featured ? "border-gold bg-ivory" : plan.id === "enterprise" ? "border-navy bg-navy text-paper" : "border-navy/10 bg-paper"}`}
            >
              <p className={`text-xs font-semibold uppercase tracking-[0.16em] ${plan.id === "enterprise" ? "text-gold-soft" : "text-sage"}`}>
                {plan.audience}
              </p>
              <h3 className="mt-3 font-serif text-3xl">{plan.name}</h3>
              {price ? (
                <p className="mt-4">
                  <span className="font-serif text-4xl">{formatUsd(price)}</span>
                  <span className={`text-sm ${plan.id === "enterprise" ? "text-mist" : "text-muted"}`}> / month</span>
                </p>
              ) : (
                <p className="mt-4 font-serif text-4xl">Custom</p>
              )}
              <p className={`mt-2 text-sm ${plan.id === "enterprise" ? "text-mist" : "text-muted"}`}>
                {price ? (annual ? `Billed annually. Save ${formatUsd(savings)} a year.` : "Billed monthly.") : "Scoped with the sales team."}
              </p>
              <p className={`mt-4 text-sm leading-relaxed ${plan.id === "enterprise" ? "text-mist" : "text-ink"}`}>{plan.note}</p>
              <ul className="mt-5 flex-1 space-y-2.5 text-sm">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-2">
                    <span aria-hidden="true" className={plan.id === "enterprise" ? "text-gold-soft" : "text-sage"}>
                      —
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href={plan.href} className={`btn mt-8 ${plan.id === "enterprise" ? "btn-gold" : "btn-navy"}`}>
                {plan.cta}
              </Link>
            </article>
          );
        })}
      </div>
      <div className="mt-14 max-w-3xl">
        <h3 className="font-serif text-3xl text-navy">Questions before you choose</h3>
        <div className="mt-4 border-t border-navy/10">
          {pricingFaqs.map((item) => (
            <details key={item.q} className="border-b border-navy/10 py-4">
              <summary className="flex cursor-pointer items-center justify-between gap-4 text-base font-medium text-navy">
                {item.q}
                <span aria-hidden="true" className="text-sage">
                  +
                </span>
              </summary>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}

function toggle(active: boolean) {
  return `rounded-full px-4 py-2 text-sm font-semibold ${active ? "bg-navy text-paper" : "text-navy"}`;
}
