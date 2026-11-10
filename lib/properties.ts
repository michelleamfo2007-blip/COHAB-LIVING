export type Market = "Ghana" | "Nigeria" | "USA";
export type Availability = "Available" | "Limited" | "Waitlist";

export type GalleryImage = {
  src: string;
  alt: string;
};

export type Property = {
  slug: string;
  name: string;
  neighborhood: string;
  city: string;
  region: string;
  country: Market;
  price: string;
  priceNote: string;
  status: Availability;
  roomsLabel: string;
  type: string;
  virtualTour: boolean;
  featured: boolean;
  summary: string;
  description: string[];
  amenities: string[];
  locationNote: string;
  image: GalleryImage;
  gallery: GalleryImage[];
};

const photo = (id: string, alt: string): GalleryImage => ({
  src: `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1800&q=80`,
  alt,
});

export const marketLabel: Record<Market, string> = {
  Ghana: "Ghana",
  Nigeria: "Nigeria",
  USA: "United States",
};

export const properties: Property[] = [
  {
    slug: "the-meridian",
    name: "The Meridian",
    neighborhood: "East Legon",
    city: "Accra",
    region: "Greater Accra",
    country: "Ghana",
    price: "GHS 8,400",
    priceNote: "Private room, per month",
    status: "Available",
    roomsLabel: "2 of 8 rooms open",
    type: "Private room in a shared home",
    virtualTour: true,
    featured: true,
    summary:
      "A furnished house for professionals who want a private room, reliable power, and a manager who answers.",
    description: [
      "The Meridian is a managed co-living house in East Legon. Each resident has a private furnished room. The kitchen, work lounge, and garden are shared, and the house rules are written down before anyone moves in.",
      "Backup power, water storage, and fibre internet are part of the home, not extras you discover after a week. Cleaning follows a rota. Maintenance requests go through CoHab OS, with the vendor and the status kept on the room.",
    ],
    amenities: [
      "Private furnished room",
      "Backup power",
      "Water storage",
      "Fibre internet",
      "Shared work lounge",
      "Weekly cleaning of common areas",
      "In-home security",
      "Laundry",
    ],
    locationNote:
      "East Legon sits north of central Accra, with cafés, supermarkets, and a straightforward ride toward Airport City. The house is on a quiet residential street, a short walk from the main East Legon road.",
    image: photo("photo-1600585154340-be6161a56a0c", "Front of a modern two-storey residence with a pale facade"),
    gallery: [
      photo("photo-1600585154340-be6161a56a0c", "Front of The Meridian"),
      photo("photo-1600607687939-ce8a6c25118c", "Shared living room with a long sofa and garden light"),
      photo("photo-1600566753190-17f0baa2a6c3", "Shared kitchen with an island and wood cabinets"),
      photo("photo-1616594039964-ae9021a400a0", "Private bedroom with linen bedding and a reading chair"),
    ],
  },
  {
    slug: "palm-court",
    name: "Palm Court",
    neighborhood: "Cantonments",
    city: "Accra",
    region: "Greater Accra",
    country: "Ghana",
    price: "GHS 11,200",
    priceNote: "Private suite, per month",
    status: "Limited",
    roomsLabel: "1 suite open",
    type: "Private suite in a courtyard house",
    virtualTour: true,
    featured: true,
    summary:
      "Low-rise suites around a planted courtyard in Cantonments, run as a longer stay rather than a crash pad.",
    description: [
      "Palm Court is for residents who want a quieter house and a longer lease. Suites open onto a courtyard. The kitchen is shared, and a resident host lives on site during the week.",
      "Security, water storage, and a written utility split are part of the offer. Tours can be in person or walked through on a video call with the property team.",
    ],
    amenities: [
      "Private suite",
      "Planted courtyard",
      "Resident host",
      "Backup power",
      "Water storage",
      "Security desk",
      "Fibre internet",
      "Street parking",
    ],
    locationNote:
      "Cantonments is a central Accra neighborhood of embassies, low-rise houses, and older trees. Palm Court is inside the residential grid, not on the high street.",
    image: photo("photo-1600585154526-990dced4db0d", "Modern residence exterior in warm evening light"),
    gallery: [
      photo("photo-1600585154526-990dced4db0d", "Palm Court exterior at dusk"),
      photo("photo-1600210492486-724fe5c67fb0", "Suite interior with a sofa and timber floor"),
      photo("photo-1600573472592-401b489a3cdc", "Dining area beside tall windows"),
      photo("photo-1600566753086-00f18fb6b3ea", "Kitchen used by the house"),
    ],
  },
  {
    slug: "labone-house",
    name: "Labone House",
    neighborhood: "Labone",
    city: "Accra",
    region: "Greater Accra",
    country: "Ghana",
    price: "GHS 6,900",
    priceNote: "Private room, per month",
    status: "Waitlist",
    roomsLabel: "Waitlist only",
    type: "Private room in a shared home",
    virtualTour: false,
    featured: false,
    summary:
      "A smaller house in Labone for residents who want a neighborhood they can walk, with a short wait for the next room.",
    description: [
      "Labone House is full. The waitlist is ordered by application date and verification, not by who messages most often. When a room is coming free, the next person on the list is invited to tour before it is offered more widely.",
      "The home is furnished, with a shared kitchen, a small study, and a manager who treats maintenance as a queue rather than a favor.",
    ],
    amenities: [
      "Furnished private room",
      "Shared study",
      "Fibre internet",
      "Backup power",
      "Weekly cleaning",
      "Nearby grocers",
    ],
    locationNote:
      "Labone runs between Cantonments and the coast road. The house is a walk from local restaurants and a short ride from Osu.",
    image: photo("photo-1570129477492-45c003edd2be", "A low residential house behind a front garden"),
    gallery: [
      photo("photo-1570129477492-45c003edd2be", "Labone House from the street"),
      photo("photo-1493809842364-78817add7ffb", "A bright shared sitting room"),
      photo("photo-1484154218962-a197022b5858", "Kitchen and dining table"),
      photo("photo-1505693416388-ac5ce068fe85", "A simple private bedroom"),
    ],
  },
  {
    slug: "lekki-shore-house",
    name: "Lekki Shore House",
    neighborhood: "Lekki Phase 1",
    city: "Lagos",
    region: "Lagos",
    country: "Nigeria",
    price: "NGN 650,000",
    priceNote: "Private room, per month",
    status: "Available",
    roomsLabel: "3 of 10 rooms open",
    type: "Private room in a shared home",
    virtualTour: true,
    featured: true,
    summary:
      "A managed residence near the Lekki business corridor, with inverter power and a utility split residents can check.",
    description: [
      "Lekki Shore House is built for people who work across the island and want the house itself to be predictable. Rooms are private and furnished. Power runs through an inverter sized for the common areas and evening use in the rooms.",
      "Water is treated and stored on site. Utilities are split by the house rule and shown in CoHab OS before anyone is asked to pay. A property manager, not a group chat, owns the maintenance list.",
    ],
    amenities: [
      "Private furnished room",
      "Inverter power",
      "Treated water storage",
      "Fibre internet",
      "Workspace",
      "Security",
      "Cleaning of common areas",
      "Assigned parking",
    ],
    locationNote:
      "Lekki Phase 1 is on the island corridor east of Victoria Island. The house is off a residential close, with access toward the Lekki-Epe expressway.",
    image: photo("photo-1613490493576-7fde63acd811", "Contemporary house with a wide glazed front"),
    gallery: [
      photo("photo-1613490493576-7fde63acd811", "Lekki Shore House exterior"),
      photo("photo-1600607687920-4e2a09cf159d", "Double-height living space"),
      photo("photo-1600585152220-90363fe7e115", "Kitchen looking toward the dining table"),
      photo("photo-1616594039964-ae9021a400a0", "Private room with layered lighting"),
    ],
  },
  {
    slug: "the-annex",
    name: "The Annex",
    neighborhood: "Victoria Island",
    city: "Lagos",
    region: "Lagos",
    country: "Nigeria",
    price: "NGN 980,000",
    priceNote: "Studio, per month",
    status: "Limited",
    roomsLabel: "1 studio open",
    type: "Private studio in a managed building",
    virtualTour: true,
    featured: false,
    summary:
      "Compact studios in a managed Victoria Island building, for residents who want hotel-level upkeep without a full apartment lease.",
    description: [
      "The Annex offers private studios rather than shared bedrooms. Kitchens are small and in-studio. A front desk holds packages, and the building generator covers common areas and a defined load in each studio.",
      "Leases are digital. Rent is tracked in CoHab OS. The building is suited to longer business stays and to residents who want a private front door inside a managed address.",
    ],
    amenities: [
      "Private studio",
      "In-studio kitchen",
      "Generator cover",
      "Front desk",
      "Fibre internet",
      "Lift",
      "Cleaning on request",
      "Secure entry",
    ],
    locationNote:
      "Victoria Island is Lagos’s commercial core. The Annex is within walking distance of offices, restaurants, and the main VI grid.",
    image: photo("photo-1545324418-cc1a3fa10c00", "A modern apartment building seen from street level"),
    gallery: [
      photo("photo-1545324418-cc1a3fa10c00", "The Annex building"),
      photo("photo-1502672260266-1c1ef2d93688", "A compact furnished studio"),
      photo("photo-1560448204-e02f11c3d0e2", "Studio living area"),
      photo("photo-1556912173-46c336c7fd55", "Small kitchen inside the studio"),
    ],
  },
  {
    slug: "yaba-commons",
    name: "Yaba Commons",
    neighborhood: "Yaba",
    city: "Lagos",
    region: "Lagos",
    country: "Nigeria",
    price: "NGN 420,000",
    priceNote: "Private room, per month",
    status: "Available",
    roomsLabel: "4 of 12 rooms open",
    type: "Private room in a shared home",
    virtualTour: false,
    featured: false,
    summary:
      "A larger shared house in Yaba for residents who want a serious room, a workable desk, and a rent figure that stays legible.",
    description: [
      "Yaba Commons is aimed at residents studying or working on the mainland. Rooms are private. The ground floor has a long table for laptops, and the kitchen is run on a chore rota residents can swap inside CoHab OS.",
      "There is no virtual tour yet. Tours are in person, with the house manager, and the lease is only issued after verification is complete.",
    ],
    amenities: [
      "Private room",
      "Shared work table",
      "Fibre internet",
      "Inverter for common areas",
      "Water storage",
      "Chore rota",
      "Nearby transit",
    ],
    locationNote:
      "Yaba is on the Lagos mainland, known for colleges, startups, and dense street life. The house is on a residential street off the commercial strip.",
    image: photo("photo-1564013799919-ab600027ffc6", "A contemporary house with a pitched roof and garden"),
    gallery: [
      photo("photo-1564013799919-ab600027ffc6", "Yaba Commons from the garden"),
      photo("photo-1522708323590-d24dbb6b0267", "Upstairs room with a desk by the window"),
      photo("photo-1554995207-c18c203602cb", "Shared lounge"),
      photo("photo-1556911220-bff31c812dba", "Shared kitchen"),
    ],
  },
  {
    slug: "oak-and-vine",
    name: "Oak & Vine",
    neighborhood: "East Austin",
    city: "Austin",
    region: "Texas",
    country: "USA",
    price: "$1,450",
    priceNote: "Private suite, per month",
    status: "Available",
    roomsLabel: "1 of 4 suites open",
    type: "Private suite in a shared house",
    virtualTour: true,
    featured: true,
    summary:
      "A craftsman house converted into four private suites, with a shared kitchen, a garden, and a chore system people can live with.",
    description: [
      "Oak & Vine keeps the character of an East Austin house and runs it like a small, careful property. Each suite has its own lock and linens. The kitchen, porch, and garden are shared.",
      "Rent includes a defined set of utilities, published in the listing and repeated in the lease. Anything outside that set is split and shown to the house. Maintenance is handled by vendors the manager already uses, not by a new search every time something breaks.",
    ],
    amenities: [
      "Lockable suite",
      "Furnished bedroom",
      "Shared kitchen",
      "Garden and porch",
      "In-unit laundry",
      "Fibre internet",
      "Central air",
      "Bike storage",
    ],
    locationNote:
      "East Austin is a short ride from downtown and walkable to cafés, groceries, and the neighborhood parks. The house is on a residential block with street trees.",
    image: photo("photo-1572120360610-d971b9d7767c", "A craftsman house with a porch and front steps"),
    gallery: [
      photo("photo-1572120360610-d971b9d7767c", "Oak & Vine from the front walk"),
      photo("photo-1618221195710-dd6b41faaea6", "Living room with a neutral sofa"),
      photo("photo-1600210492493-0946911123ea", "Kitchen and island"),
      photo("photo-1616594039964-ae9021a400a0", "Suite bedroom"),
    ],
  },
  {
    slug: "the-calder",
    name: "The Calder",
    neighborhood: "Buckhead",
    city: "Atlanta",
    region: "Georgia",
    country: "USA",
    price: "$1,280",
    priceNote: "Private room, per month",
    status: "Limited",
    roomsLabel: "1 of 6 rooms open",
    type: "Private room in a shared home",
    virtualTour: false,
    featured: false,
    summary:
      "A Buckhead residence for young professionals, with digital leases, tracked rent, and a maintenance desk that keeps a status.",
    description: [
      "The Calder is a six-room house run by a local manager on CoHab OS. Residents get a private room and share a kitchen, two bathrooms, and a living room that is kept for the house rather than any one person.",
      "There is no virtual tour. The manager hosts in-person tours twice a week and will hold a room for 24 hours after a tour while verification is completed. Parking is one space, allocated with the room that includes it.",
    ],
    amenities: [
      "Furnished private room",
      "Two shared bathrooms",
      "Central air and heat",
      "In-home laundry",
      "Fibre internet",
      "Off-street parking for one room",
      "Walk to groceries",
    ],
    locationNote:
      "Buckhead is in north Atlanta. The Calder is in a residential pocket with a grocery and a bus line within a short walk, and a longer ride into Midtown.",
    image: photo("photo-1600596542815-ffad4c1539a9", "Brick and siding house on a tree-lined street"),
    gallery: [
      photo("photo-1600596542815-ffad4c1539a9", "The Calder exterior"),
      photo("photo-1598928506311-c55ded91a20c", "Living room with armchair and sofa"),
      photo("photo-1560185007-cde436f6a4d0", "Shared living space"),
      photo("photo-1505693416388-ac5ce068fe85", "Private bedroom"),
    ],
  },
];

export function getProperty(slug: string) {
  return properties.find((property) => property.slug === slug);
}

export function relatedProperties(slug: string) {
  const current = getProperty(slug);
  if (!current) return [];
  const sameMarket = properties.filter(
    (property) => property.slug !== slug && property.country === current.country,
  );
  const others = properties.filter(
    (property) => property.slug !== slug && property.country !== current.country,
  );
  return [...sameMarket, ...others].slice(0, 3);
}

export const featuredProperties = properties.filter((property) => property.featured);
