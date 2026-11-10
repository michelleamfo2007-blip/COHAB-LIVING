export const site = {
  name: "CoHab OS",
  url: "https://cohabos.com",
  description:
    "CoHab OS is the operating system for modern co-living. Discover homes and see how landlords, property managers, and residents run shared living in one place.",
  email: "hello@cohabos.com",
  salesEmail: "sales@cohabos.com",
  updated: "10 November 2026",
  // Reserved fictional US number (555-0100–0199). Replace before launch.
  phone: { region: "United States", display: "+1 (404) 555-0190", href: "tel:+14045550190" },
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/cohab-os" },
    { label: "Instagram", href: "https://www.instagram.com/cohabos" },
    { label: "X", href: "https://x.com/cohabos" },
  ],
} as const;

export function mailto(to: string, subject: string, lines: string[]) {
  return `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
}
