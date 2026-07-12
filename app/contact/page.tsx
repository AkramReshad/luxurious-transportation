import type { Metadata } from "next";
import { Suspense } from "react";
import { InquiryForm } from "@/components/inquiry-form";
import { PageShell } from "@/components/page-shell";

export const metadata: Metadata = { title: "Request Las Vegas Transportation Pricing", description: "Request availability and pricing from Luxurious Transportation Services in Las Vegas or call 702-470-9700." };
export default function ContactPage() { return <PageShell><section className="contact-hero"><div><p className="eyebrow">Pricing & availability</p><h1>Tell us where the night is going.</h1><p>Share the essential details and we’ll respond with availability for your itinerary.</p><a className="contact-phone" href="tel:+17024709700">702-470-9700</a><p className="small-note">Available 24/7 · CPCN 2158-7</p></div><Suspense fallback={<p>Loading inquiry form…</p>}><InquiryForm /></Suspense></section></PageShell>; }
