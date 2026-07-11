import type { Metadata } from "next";
import { InquiryCta } from "@/components/inquiry-cta";
import { SectionHeading } from "@/components/section-heading";
import { SiteShell } from "@/components/site-shell";
import { VehicleCard } from "@/components/vehicle-card";
import { vehicles } from "@/lib/site-data";

export const metadata: Metadata = { title: "Our Fleet", description: "Explore the Las Vegas luxury party bus and group transportation fleet from Luxurious Transportation Services." };

export default function FleetPage() {
  return <SiteShell><main><section className="page-hero page-container"><p className="eyebrow">The fleet</p><h1 className="display display--page">Choose the room<br /><em>for your night.</em></h1><p className="page-hero__lede">Nine ways to arrive with intention, from intimate Sprinter groups to larger celebrations and coordinated fleet plans.</p></section><section className="page-container listing-section"><SectionHeading eyebrow="Vehicle guide" title="Every vehicle has a point of view." copy={<p>Capacities are planning guides and availability varies by date. Tell us about the itinerary and we’ll confirm the best fit.</p>} /><div className="vehicle-grid vehicle-grid--three">{vehicles.map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}</div></section><InquiryCta title="Need help choosing the right vehicle?" copy="Share your guest count and plan. We’ll make a practical recommendation and confirm availability." /></main></SiteShell>;
}
