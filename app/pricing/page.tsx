import type { Metadata } from "next";
import Link from "next/link";
import { PricingTable } from "@/components/PricingTable";
import { PageHero, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "CoHab OS plans for landlords and property managers, with monthly and annual billing, and enterprise agreements by conversation.",
};

export default function PricingPage() {
  return (
    <>
      <PageHero
        eyebrow="Pricing"
        title="Plans for the people who operate the homes."
        lede="Starter, Growth, and Portfolio are subscriptions for landlords and managers. Enterprise is scoped with sales. Residents join through the home and are not billed a separate platform fee."
      >
        <Link href="/contact?intent=enterprise" className="btn btn-gold">
          Contact sales
        </Link>
      </PageHero>
      <Section>
        <PricingTable />
      </Section>
    </>
  );
}
