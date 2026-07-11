import type { Metadata } from "next";
import { InquiryCta } from "@/components/inquiry-cta";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { SiteShell } from "@/components/site-shell";
import { services } from "@/lib/site-data";

export const metadata: Metadata = { title: "Las Vegas Transportation Services", description: "Explore event and group transportation services for Las Vegas nights, celebrations, conventions, and experiences." };

export default function ServicesPage() {
  return <SiteShell><main><section className="page-hero page-container"><p className="eyebrow">Services</p><h1 className="display display--page">Move through<br /><em>the whole story.</em></h1><p className="page-hero__lede">From milestone celebrations to convention schedules, we build the ride around what your group is actually doing.</p></section><section className="page-container listing-section"><SectionHeading eyebrow="Find your occasion" title="A better route starts here." /><div className="service-grid">{services.map((service) => <ServiceCard key={service.slug} service={service} />)}</div></section><InquiryCta /></main></SiteShell>;
}
