export const phoneDisplay = "702-470-9700";
export const phoneHref = "tel:+17024709700";

export type Vehicle = { name: string; capacity: number; image: string; description: string };
export type Service = {
  slug: string;
  name: string;
  eyebrow: string;
  summary: string;
  description: string;
  image: string;
  imageAlt: string;
  benefits: string[];
  vehicleNames: string[];
};

export const vehicles: Vehicle[] = [
  { name: "Escalade", capacity: 7, image: "/fleet/escalade.webp", description: "A discreet executive SUV for airport arrivals, dinners, and smaller groups." },
  { name: "Mercedes Sprinter", capacity: 16, image: "/fleet/mercedes-sprinter.webp", description: "A polished group option with an easy step-in profile and private cabin feel." },
  { name: "Hummer Limo", capacity: 18, image: "/fleet/hummer-limo.webp", description: "A dramatic stretch limousine for milestone nights and statement arrivals." },
  { name: "F650 Party Bus", capacity: 33, image: "/fleet/f650-party-bus.webp", description: "A large-format party vehicle built for groups that want to travel together." },
  { name: "F750 Party Bus", capacity: 35, image: "/fleet/f750-party-bus.webp", description: "A high-capacity party bus for celebrations and coordinated Strip itineraries." },
  { name: "Party Bus", capacity: 45, image: "/fleet/party-bus-45.webp", description: "Room for a substantial group, with one vehicle and one coordinated schedule." },
  { name: "International Party Bus", capacity: 35, image: "/fleet/international-party-bus.webp", description: "A versatile group vehicle for events, nightlife, and convention transportation." },
  { name: "Freightliner Party Bus", capacity: 45, image: "/fleet/freightliner-party-bus.webp", description: "High-capacity transportation for large parties and multi-stop event plans." },
  { name: "Party Bus", capacity: 55, image: "/fleet/party-bus-55.webp", description: "The largest listed capacity for keeping major groups on one itinerary." }
];

export const services: Service[] = [
  { slug: "nightclub-crawl", name: "Nightclub Crawl", eyebrow: "After dark", summary: "Keep the group together between the Strip’s late-night destinations.", description: "Build a nightclub itinerary around your group, pickup location, and schedule. We coordinate the transportation so the night moves as one experience.", image: "/generated/services/nightclub-crawl-hero.webp", imageAlt: "Evening guests approaching a black party bus outside a Las Vegas nightclub", benefits: ["Coordinated hotel pickup", "Multi-stop itinerary planning", "Vehicle matching for your group"], vehicleNames: ["Mercedes Sprinter", "F650 Party Bus", "Party Bus"] },
  { slug: "bachelor-and-bachelorette-parties", name: "Bachelor & Bachelorette Parties", eyebrow: "One last Las Vegas weekend", summary: "Private group transportation for the dinner, the Strip, and everything after.", description: "Keep the celebration together from the first pickup through the final stop. Tell us the group size and the shape of the night; we’ll help match the vehicle and timing.", image: "/generated/services/bachelor-bachelorette-hero.webp", imageAlt: "Friends walking toward a black executive van beneath a Las Vegas hotel entrance", benefits: ["One ride for the full group", "Flexible pickup and stop planning", "Direct availability support"], vehicleNames: ["Hummer Limo", "Mercedes Sprinter", "F750 Party Bus"] },
  { slug: "prom-transportation", name: "Prom Transportation", eyebrow: "A milestone arrival", summary: "A polished, coordinated ride for a memorable Las Vegas prom night.", description: "Plan transportation around photos, dinner, the event, and the return trip. We focus on clear timing and a vehicle suited to the size of the party.", image: "/generated/services/prom-hero.webp", imageAlt: "Prom party and guardians beside a black limousine at blue hour in Las Vegas", benefits: ["Planned pickup and return", "Group-size vehicle matching", "Clear itinerary coordination"], vehicleNames: ["Hummer Limo", "Mercedes Sprinter", "F650 Party Bus"] },
  { slug: "edc", name: "EDC Transportation", eyebrow: "Festival movement", summary: "Private group transportation planned around the EDC weekend.", description: "Festival traffic and late hours reward a clear transportation plan. Share your lodging, group size, dates, and preferred schedule for a tailored availability quote.", image: "/generated/services/edc-hero.webp", imageAlt: "Black group shuttle in the Nevada desert near distant event lights", benefits: ["Lodging-based pickup planning", "Capacity options for groups", "Schedule-focused coordination"], vehicleNames: ["Mercedes Sprinter", "International Party Bus", "Freightliner Party Bus"] },
  { slug: "golf-course", name: "Golf Transportation", eyebrow: "Tee time, handled", summary: "Group transportation from your hotel to Las Vegas-area golf plans.", description: "Coordinate pickup and return timing for a golf day without splitting the group across multiple cars. Let us know passenger and equipment needs when requesting a quote.", image: "/generated/services/golf-hero.webp", imageAlt: "Golfers loading equipment into a black SUV at a desert clubhouse", benefits: ["Hotel-to-course scheduling", "Group travel coordination", "Quote based on your itinerary"], vehicleNames: ["Escalade", "Mercedes Sprinter", "International Party Bus"] },
  { slug: "Quinceanera-Transportation", name: "Quinceañera Transportation", eyebrow: "A family milestone", summary: "Elegant group transportation for the celebration, portraits, and reception.", description: "Create a smooth itinerary for family, court, and guests. We’ll help select an appropriate vehicle based on passenger count and the day’s confirmed stops.", image: "/generated/services/quinceanera-hero.webp", imageAlt: "Quinceañera celebrant with family and court beside a black limousine", benefits: ["Multi-stop timeline planning", "Options for small and large parties", "Direct coordination before the event"], vehicleNames: ["Hummer Limo", "F650 Party Bus", "Party Bus"] },
  { slug: "nfr", name: "NFR Transportation", eyebrow: "Rodeo week in Las Vegas", summary: "Coordinated transportation for NFR events, dinners, and evening plans.", description: "Move your party between lodging, scheduled events, and Las Vegas destinations with a plan tailored to rodeo week. Availability is quote-based for your dates and group.", image: "/generated/services/nfr-hero.webp", imageAlt: "Guests in contemporary western evening wear boarding a black coach", benefits: ["Event-week itinerary planning", "Group capacity options", "Hotel and venue transfer coordination"], vehicleNames: ["Escalade", "Mercedes Sprinter", "F750 Party Bus"] },
  { slug: "ces", name: "CES Transportation", eyebrow: "Convention logistics", summary: "Professional group transportation for teams, guests, and scheduled CES days.", description: "Coordinate airport arrivals, hotel transfers, convention schedules, dinners, and hosted events through one transportation inquiry.", image: "/generated/services/ces-hero.webp", imageAlt: "Business travelers boarding a black executive van outside a convention center", benefits: ["Airport and hotel transfers", "Team itinerary coordination", "Options across group sizes"], vehicleNames: ["Escalade", "Mercedes Sprinter", "Freightliner Party Bus"] }
];

export const testimonials = [
  ["Great professional service. Our group had a blast!", "Jerome H."],
  ["LTS made our experience in Las Vegas very memorable.", "Derick R."],
  ["On time and professional. Our company will be using them again.", "Keone S."]
] as const;
