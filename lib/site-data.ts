export type Vehicle = {
  slug: string;
  name: string;
  category: string;
  capacity: string;
  description: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export type Service = {
  slug: string;
  path: string;
  name: string;
  eyebrow: string;
  shortDescription: string;
  description: string;
  image: string;
  alt: string;
  benefits: string[];
  vehicleSlugs: string[];
};

export const siteConfig = {
  name: "Luxurious Transportation Services",
  shortName: "LTSLV",
  phone: "+1 (702) 470-9700",
  phoneHref: "tel:+17024709700",
  cpcn: "2158-7",
  location: "Las Vegas, Nevada",
  url: "https://ltslv.com",
  email: "info@ltslv.com"
};

export const vehicles: Vehicle[] = [
  {
    slug: "black-label-sprinter",
    name: "Black Label Sprinter",
    category: "Mercedes-Benz Sprinter",
    capacity: "Up to 14 guests",
    description: "A private-lounge layout with generous seating, warm lighting, and an easy fit for smaller celebrations.",
    image: "/generated/cinematic-sprinter-hero-black-gold.png",
    alt: "Black Mercedes Sprinter party vehicle on the Las Vegas Strip",
    featured: true
  },
  {
    slug: "gold-line-sprinter",
    name: "Gold Line Sprinter",
    category: "Mercedes-Benz Sprinter",
    capacity: "Up to 14 guests",
    description: "A polished group ride for dinners, nightlife, airport transfers, and city-wide celebrations.",
    image: "/generated/cinematic-sprinter-detail-black-gold.png",
    alt: "Black and gold Mercedes Sprinter detail at night"
  },
  {
    slug: "strip-noir-coach",
    name: "Strip Noir Coach",
    category: "Luxury party bus",
    capacity: "Up to 20 guests",
    description: "A dark, cinematic cabin made for a coordinated arrival and a night that stays in motion.",
    image: "/generated/strip-noir-bus.png",
    alt: "Black luxury party bus in Las Vegas"
  },
  {
    slug: "emerald-coach",
    name: "Emerald Coach",
    category: "Luxury party bus",
    capacity: "Up to 24 guests",
    description: "A spacious group setting with a statement finish for weddings, events, and milestone nights.",
    image: "/generated/emerald-bus.png",
    alt: "Emerald green luxury party bus"
  },
  {
    slug: "redline-coach",
    name: "Redline Coach",
    category: "Luxury party bus",
    capacity: "Up to 28 guests",
    description: "A bold interior and flexible seating plan for larger groups moving between venues.",
    image: "/generated/redline-interior.png",
    alt: "Red-lit luxury party bus interior"
  },
  {
    slug: "champagne-coach",
    name: "Champagne Coach",
    category: "Luxury party bus",
    capacity: "Up to 30 guests",
    description: "A warm, refined cabin for receptions, bachelor and bachelorette parties, and private tours.",
    image: "/generated/champagne-interior.png",
    alt: "Champagne-lit luxury party bus interior"
  },
  {
    slug: "grand-strip-coach",
    name: "Grand Strip Coach",
    category: "Luxury party bus",
    capacity: "Up to 36 guests",
    description: "Room to gather, toast, and travel together when the guest list calls for a larger cabin.",
    image: "/generated/cinematic-lounge-black-gold.png",
    alt: "Large black and gold luxury party bus lounge"
  },
  {
    slug: "silver-service-coach",
    name: "Silver Service Coach",
    category: "Executive coach",
    capacity: "Up to 40 guests",
    description: "A comfortable group transfer for conventions, golf outings, and multi-stop itineraries.",
    image: "/generated/cinematic-detail-black-gold.png",
    alt: "Luxury coach detail with black and gold finish"
  },
  {
    slug: "signature-fleet",
    name: "Signature Fleet",
    category: "Private group transportation",
    capacity: "40+ guests by request",
    description: "A coordinated multi-vehicle plan for conferences, large celebrations, and complex schedules.",
    image: "/generated/cinematic-hero-black-gold.png",
    alt: "Luxury transportation fleet arriving in Las Vegas"
  }
];

export const services: Service[] = [
  {
    slug: "nightclub-crawl",
    path: "/nightclub-crawl/",
    name: "Nightclub Crawl",
    eyebrow: "Make every venue feel connected",
    shortDescription: "Move through the Strip with a dedicated ride, an intentional route, and a clean return plan.",
    description: "Your night should feel like one continuous experience. We coordinate pickup timing, venue-to-venue movement, and the ride home around your group’s plan.",
    image: "/generated/cinematic-hero-black-gold.png",
    alt: "Luxury party bus arriving on the Las Vegas Strip at night",
    benefits: ["One dedicated vehicle for the group", "Pickup and return timing planned around your itinerary", "A polished arrival between venues"],
    vehicleSlugs: ["black-label-sprinter", "strip-noir-coach", "grand-strip-coach"]
  },
  {
    slug: "bachelor-and-bachelorette-parties",
    path: "/bachelor-and-bachelorette-parties/",
    name: "Bachelor & Bachelorette Parties",
    eyebrow: "Start the celebration before the first stop",
    shortDescription: "Keep the full group together from dinner to the last reservation of the night.",
    description: "Build a celebration around the people who came to make it memorable. We make the transitions easy so your group can focus on the occasion.",
    image: "/generated/champagne-interior.png",
    alt: "Champagne-lit party bus interior for a celebration",
    benefits: ["Vehicle options sized to your guest list", "Flexible pickup locations across Las Vegas", "Simple coordination with one point of contact"],
    vehicleSlugs: ["gold-line-sprinter", "champagne-coach", "redline-coach"]
  },
  {
    slug: "prom-transportation",
    path: "/prom-transportation/",
    name: "Prom Transportation",
    eyebrow: "A polished arrival for a milestone night",
    shortDescription: "Give students and families a dependable, memorable way to arrive and return together.",
    description: "Prom transportation should feel special and stay organized. Our team helps families plan a clear itinerary with a comfortable vehicle and a professional driver.",
    image: "/generated/emerald-bus.png",
    alt: "Emerald luxury party bus ready for a special event",
    benefits: ["Clear pickup and drop-off details", "Group seating that keeps everyone together", "Professional service for an important evening"],
    vehicleSlugs: ["black-label-sprinter", "emerald-coach", "grand-strip-coach"]
  },
  {
    slug: "edc",
    path: "/edc/",
    name: "EDC Transportation",
    eyebrow: "The festival transfer that keeps the night moving",
    shortDescription: "Coordinate your group around festival timing, hotel pickup, and a reliable return plan.",
    description: "EDC is a long night with a lot of moving pieces. A dedicated vehicle gives your group one meeting point, consistent communication, and a comfortable place to reset between moments.",
    image: "/generated/redline-interior.png",
    alt: "Red-lit party bus interior for a festival group",
    benefits: ["Group transportation to and from the festival area", "Planned pickup windows and meeting details", "A private cabin between the big moments"],
    vehicleSlugs: ["strip-noir-coach", "redline-coach", "grand-strip-coach"]
  },
  {
    slug: "golf-course",
    path: "/golf-course/",
    name: "Golf Course Transportation",
    eyebrow: "Arrive ready to play",
    shortDescription: "Make the course transfer easy for your foursome, tournament, or corporate outing.",
    description: "From hotel pickup to the final clubhouse stop, we build a practical route around tee times, equipment, and the pace of your day.",
    image: "/generated/cinematic-lounge-black-gold.png",
    alt: "Luxury transportation lounge for a golf outing",
    benefits: ["Pickup plans built around tee times", "Room for groups and golf-day essentials", "Comfortable return transportation after the round"],
    vehicleSlugs: ["gold-line-sprinter", "silver-service-coach", "signature-fleet"]
  },
  {
    slug: "quinceanera-transportation",
    path: "/Quinceanera-Transportation/",
    name: "Quinceañera Transportation",
    eyebrow: "Make the entrance part of the story",
    shortDescription: "A beautiful, dependable ride for the guest of honor and the people celebrating with her.",
    description: "Your family has planned a meaningful day. We help the transportation feel just as considered, with clear timing and a vehicle that photographs beautifully.",
    image: "/generated/champagne-interior.png",
    alt: "Elegant champagne-lit transportation interior",
    benefits: ["Thoughtful timing for photos and venue arrivals", "Capacity for family and friends", "A calm, professional transportation experience"],
    vehicleSlugs: ["black-label-sprinter", "champagne-coach", "emerald-coach"]
  },
  {
    slug: "nfr",
    path: "/nfr/",
    name: "NFR Transportation",
    eyebrow: "Get to the rodeo and back together",
    shortDescription: "Keep your group on schedule through NFR events, dinners, and late-night stops.",
    description: "The National Finals Rodeo brings a full calendar to Las Vegas. We plan the transportation around your tickets, dinner reservations, hotel, and preferred pace.",
    image: "/generated/strip-noir-bus.png",
    alt: "Black luxury party bus for a Las Vegas event",
    benefits: ["Event-day transportation for groups", "Multi-stop itineraries across the city", "A dependable plan for the ride home"],
    vehicleSlugs: ["strip-noir-coach", "grand-strip-coach", "silver-service-coach"]
  },
  {
    slug: "ces",
    path: "/ces/",
    name: "CES Transportation",
    eyebrow: "Keep the convention schedule moving",
    shortDescription: "Professional group transportation for exhibitors, teams, clients, and conference events.",
    description: "CES schedules are dense and locations are spread across the city. We help teams coordinate hotel transfers, venue movements, dinners, and hosted events.",
    image: "/generated/cinematic-detail-black-gold.png",
    alt: "Black and gold luxury vehicle detail",
    benefits: ["Scheduled hotel and venue transfers", "Vehicle planning for teams and client groups", "A professional point of contact for the itinerary"],
    vehicleSlugs: ["silver-service-coach", "signature-fleet", "gold-line-sprinter"]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function getVehicle(slug: string) {
  return vehicles.find((vehicle) => vehicle.slug === slug);
}

export const trustPoints = [
  { value: "2158-7", label: "Nevada CPCN" },
  { value: "24/7", label: "Inquiry support" },
  { value: "1", label: "Dedicated point of contact" }
];
