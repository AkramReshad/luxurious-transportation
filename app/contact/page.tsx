import type { Metadata } from "next";
import { Phone } from "@phosphor-icons/react/dist/ssr";
import { PricingInquiryForm } from "@/components/pricing-inquiry-form";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = { title: "Contact & Pricing", description: "Request pricing and availability for Las Vegas luxury transportation." };

export default function ContactPage() {
  return <SiteShell><main><section className="page-hero page-container"><p className="eyebrow">Contact</p><h1 className="display display--page">Let’s plan<br /><em>the good part.</em></h1><p className="page-hero__lede">Give us the essentials and a member of our team will follow up about availability, vehicle options, and pricing.</p><a className="page-hero__phone" href={siteConfig.phoneHref}><Phone size={19} /> {siteConfig.phone}</a></section><section className="page-container contact-layout"><PricingInquiryForm /><aside className="contact-aside"><p className="eyebrow">Prefer a conversation?</p><h2 className="display display--aside">Call us directly.</h2><p>For same-day questions or a quick read on availability, our phone line is the fastest path.</p><a href={siteConfig.phoneHref} className="text-link"><Phone size={17} /> {siteConfig.phone}</a><div className="contact-aside__rule" /><p className="eyebrow">Service area</p><p>Las Vegas, the Strip, downtown, airport transfers, conventions, and surrounding destinations by request.</p></aside></section></main></SiteShell>;
}
