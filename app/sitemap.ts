import type { MetadataRoute } from "next";
import { properties } from "@/lib/properties";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/about",
    "/solutions",
    "/properties",
    "/property-managers",
    "/residents",
    "/pricing",
    "/contact",
    "/login",
    "/get-started",
    "/legal/privacy",
    "/legal/terms",
    "/legal/cookies",
    "/legal/data-protection",
    "/legal/accessibility",
    ...properties.map((property) => `/properties/${property.slug}`),
  ];

  return paths.map((path) => ({
    url: `${site.url}${path}`,
    lastModified: new Date("2026-11-10"),
  }));
}
