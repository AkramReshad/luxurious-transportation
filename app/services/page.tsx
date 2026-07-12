import type { Metadata } from "next";
import { EditorialHero } from "@/components/editorial-hero";
import { PageShell } from "@/components/page-shell";
import { ServiceGrid } from "@/components/service-grid";
import { services } from "@/lib/site-data";

export const metadata: Metadata = { title: "Las Vegas Group Transportation Services", description: "Private Las Vegas transportation for nightlife, celebrations, festivals, golf, NFR, CES, and milestone events." };
export default function ServicesPage() { return <PageShell><EditorialHero priority eyebrow="Las Vegas, considered" title="Transportation built around the occasion." copy="Every itinerary begins with the people, the timing, and the reason you’re here." image="/generated/services/services-index-hero.webp" imageAlt="Professional driver welcoming guests to a black executive van in Las Vegas" /><section className="content-section"><div className="section-heading"><p className="eyebrow">Eight distinct plans</p><h2>Choose your occasion.</h2><p>Explore the service closest to your plans, then request a quote based on the real itinerary.</p></div><ServiceGrid items={services} /></section></PageShell>; }
