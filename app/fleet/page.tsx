import type { Metadata } from "next";
import { EditorialHero } from "@/components/editorial-hero";
import { PageShell } from "@/components/page-shell";
import { VehicleGrid } from "@/components/vehicle-grid";
import { vehicles } from "@/lib/site-data";

export const metadata: Metadata = { title: "Las Vegas Transportation Fleet", description: "Explore nine Luxurious Transportation vehicle listings for groups of 7 to 55 passengers in Las Vegas." };
export default function FleetPage() { return <PageShell><EditorialHero priority eyebrow="Nine ways to arrive" title="The fleet shapes the night." copy="From executive arrivals to full-group celebrations, choose a starting point and we’ll confirm the right vehicle for your date." image="/generated/services/fleet-index-hero.webp" imageAlt="Lineup of black luxury transportation vehicles in a Las Vegas forecourt" /><section className="content-section"><div className="section-heading"><p className="eyebrow">The collection</p><h2>Capacity with presence.</h2><p>Passenger capacities reflect the current public fleet listing and remain subject to vehicle availability.</p></div><VehicleGrid items={vehicles} /></section></PageShell>; }
