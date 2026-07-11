import type { Metadata } from "next";
import { PricingInquiryForm } from "@/components/pricing-inquiry-form";
import { SiteShell } from "@/components/site-shell";

export const metadata: Metadata = { title: "Pricing Inquiry", description: "Tell Luxurious Transportation Services about your Las Vegas transportation plan and request a quote." };

export default function PricingPage() {
  return <SiteShell><main><section className="page-hero page-container"><p className="eyebrow">Pricing inquiry</p><h1 className="display display--page">A quote shaped<br /><em>around your plan.</em></h1><p className="page-hero__lede">Rates depend on date, vehicle, timing, and route. Send the details once and we’ll take it from there.</p></section><section className="page-container contact-layout"><PricingInquiryForm /></section></main></SiteShell>;
}
