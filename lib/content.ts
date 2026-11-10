export const solutionLinks = [
  {
    href: "/solutions#property-management",
    title: "Property Management",
    text: "Portfolios, tenants, and the daily running of each home.",
  },
  {
    href: "/solutions#residents",
    title: "Residents",
    text: "Onboarding, rent, documents, and life in the house.",
  },
  {
    href: "/solutions#maintenance",
    title: "Maintenance",
    text: "Requests, status, and the vendors who do the work.",
  },
  {
    href: "/solutions#financial",
    title: "Financial Management",
    text: "Rent, utility splits, and reporting owners can read.",
  },
] as const;

export const features = [
  {
    title: "Smart Property Management",
    summary:
      "Every home has one record: rooms, residents, documents, and the people responsible. Managers see the portfolio without rebuilding it from chats.",
  },
  {
    title: "Tenant Onboarding & Verification",
    summary:
      "Applications, identity checks, and move-in steps follow a sequence. The evidence stays with the tenancy, and the resident can see what is still outstanding.",
  },
  {
    title: "Digital Lease Management",
    summary:
      "Leases are issued, stored, and reopened from the tenancy. Renewals and house rules stay attached to the person and the room.",
  },
  {
    title: "Rent Tracking & Financial Management",
    summary:
      "Charges, receipts, and balances are visible to the people who should see them. Owners get a ledger they can explain.",
  },
  {
    title: "Utility Bill Splitting",
    summary:
      "Shared electricity, water, and other house costs are divided by the rule the home agreed. Each resident can check the split.",
  },
  {
    title: "Maintenance Management",
    summary:
      "A resident reports a fault once. The request keeps a priority, a status, and a history. Managers see what is open across homes.",
  },
  {
    title: "Vendor Management",
    summary:
      "Plumbers, electricians, and cleaning crews belong to the property, not to one person’s phone. A request can be sent with the address and the fault already attached.",
  },
  {
    title: "Resident Community & Living IQ",
    summary:
      "Living IQ is the home’s shared picture of how the house is running: notices, participation, and the tone of life in common. It is a house tool, not a public social network.",
  },
  {
    title: "Chore Management",
    summary:
      "Recurring chores are visible, assignable, and swappable. The rota does not depend on whoever happens to remember.",
  },
  {
    title: "Landlord Reliability Ratings",
    summary:
      "Reliability is a record of communication, repairs, and whether the home matches what was offered. Residents can read it. Landlords earn it.",
  },
  {
    title: "Property Analytics & AI Intelligence",
    summary:
      "Pattern-finding across rent, maintenance, and occupancy is on the roadmap. It will sit on the record CoHab OS already keeps. It is not part of the product today.",
    comingSoon: true,
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "Set up the home",
    text: "Add the property, the rooms, the house rules, and the people who run it. One record replaces the folder, the sheet, and the chat.",
  },
  {
    number: "02",
    title: "Bring residents in",
    text: "Applications, verification, and the lease happen in order. Both sides finish move-in with the same documents.",
  },
  {
    number: "03",
    title: "Run the month",
    text: "Rent, utility splits, maintenance, vendors, and chores stay on that home. Nothing important has to live in a side thread.",
  },
  {
    number: "04",
    title: "Read the record",
    text: "Owners get reporting. Residents get a status they can check. Reliability is something the house can point to.",
  },
] as const;

export const audiences = [
  {
    title: "Landlords",
    href: "/property-managers",
    points: [
      "Rent you can see without chasing a message",
      "A clear view of which homes need attention",
      "A reliability record built from what actually happened",
      "Statements that are ready when you ask for them",
    ],
  },
  {
    title: "Property managers",
    href: "/property-managers",
    points: [
      "Many homes, one operating picture",
      "Onboarding that does not restart in a spreadsheet",
      "Vendors dispatched from the request itself",
      "A team working from the same record",
    ],
  },
  {
    title: "Residents",
    href: "/residents",
    points: [
      "Verification, lease, and move-in in a known order",
      "Rent and utility splits you can check",
      "A maintenance request with a status",
      "Chores, notices, and a say in how the home is run",
    ],
  },
] as const;

export const testimonials = [
  {
    quote:
      "Rent, the open repair, and the house rules belong in one record. That is the difference between managing a home and chasing it.",
    role: "Property manager",
    place: "Accra",
  },
  {
    quote:
      "The utility split should be visible before anyone has to argue about it. A shared house needs a rule both sides can open.",
    role: "Landlord",
    place: "Lagos",
  },
  {
    quote:
      "I want the lease, a way to pay, and a repair request that does not disappear. I do not need a social network from my landlord.",
    role: "Resident",
    place: "Austin",
  },
] as const;

export type Plan = {
  id: string;
  name: string;
  audience: string;
  monthly: number | null;
  annual: number | null;
  note: string;
  features: string[];
  cta: string;
  href: string;
  featured?: boolean;
};

export const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    audience: "Independent landlords",
    monthly: 49,
    annual: 39,
    note: "Up to 2 properties and 1 manager seat.",
    features: [
      "Property and room records",
      "Tenant records and onboarding checklist",
      "Digital lease storage",
      "Rent tracking",
      "Maintenance requests",
      "Basic monthly statement",
    ],
    cta: "Get started",
    href: "/get-started?plan=starter&role=manager",
  },
  {
    id: "growth",
    name: "Growth",
    audience: "Property managers",
    monthly: 149,
    annual: 119,
    note: "Up to 20 properties and 5 seats.",
    features: [
      "Everything in Starter",
      "Verification workflow",
      "Utility bill splitting",
      "Vendor management",
      "Resident community and Living IQ",
      "Chore management",
      "Landlord reliability profile",
      "Portfolio dashboard",
    ],
    cta: "Get started",
    href: "/get-started?plan=growth&role=manager",
    featured: true,
  },
  {
    id: "portfolio",
    name: "Portfolio",
    audience: "Multi-property operators",
    monthly: 399,
    annual: 329,
    note: "Up to 100 properties and 20 seats.",
    features: [
      "Everything in Growth",
      "Multi-property reporting",
      "Consolidated financial reports",
      "Maintenance dispatch rules",
      "Priority onboarding",
      "Dedicated success manager",
    ],
    cta: "Get started",
    href: "/get-started?plan=portfolio&role=manager",
  },
  {
    id: "enterprise",
    name: "Enterprise",
    audience: "Groups and new markets",
    monthly: null,
    annual: null,
    note: "Properties, seats, and markets by agreement.",
    features: [
      "Rollout support in the USA, Ghana, and Nigeria",
      "Custom roles and a security review",
      "Data-processing addendum",
      "Commercial support terms",
      "Property analytics and AI intelligence, when released",
    ],
    cta: "Contact sales",
    href: "/contact?intent=enterprise",
  },
];

export const pricingFaqs = [
  {
    q: "Who is the subscription for?",
    a: "Landlords and property managers subscribe. The plan covers the homes they operate and the staff seats they need. Residents use CoHab OS through the home they live in.",
  },
  {
    q: "Do residents pay a separate CoHab OS fee?",
    a: "Not on these plans. Residents are invited into a home that is already on the platform. Rent and deposits are between the resident and the property, tracked in the product.",
  },
  {
    q: "What is not live yet?",
    a: "Property analytics and AI intelligence are marked as coming soon and are not included in any plan today. They will be offered when the feature is released, starting with enterprise agreements.",
  },
  {
    q: "Can billing be arranged in Ghana or Nigeria?",
    a: "Listed prices are in US dollars. Local billing can be arranged for Portfolio and Enterprise. Starter and Growth are billed in dollars unless sales agrees otherwise.",
  },
  {
    q: "Is this website the product?",
    a: "No. This website introduces CoHab OS and lists homes. Dashboards, payments, maintenance desks, chore swaps, and ratings run in the platform, which is opened when your account is connected.",
  },
] as const;

export function formatUsd(amount: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
