import type { Metadata } from "next";
import { PropertyBrowser } from "@/components/PropertyBrowser";
import { PageHero, Section } from "@/components/ui";
import { properties } from "@/lib/properties";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Available co-living homes in Accra, Lagos, Austin, and Atlanta. Photos, amenities, prices, and a way to schedule a tour.",
};

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Properties"
        title="Homes with a manager, a price, and a status you can read."
        lede="A first collection of shared residences in Ghana, Nigeria, and the United States. Figures are listing guides. The lease in CoHab OS confirms the amount, the deposit, and what the utilities include."
      />
      <Section>
        <PropertyBrowser properties={properties} />
      </Section>
    </>
  );
}
