import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, Phone, ShieldCheck } from "@phosphor-icons/react/dist/ssr";
import { InquiryCta } from "@/components/inquiry-cta";
import { SectionHeading } from "@/components/section-heading";
import { ServiceCard } from "@/components/service-card";
import { SiteShell } from "@/components/site-shell";
import { VehicleCard } from "@/components/vehicle-card";
import { services, siteConfig, trustPoints, vehicles } from "@/lib/site-data";

export default function Home() {
  return (
    <SiteShell>
      <main>
        <section className="home-hero">
          <Image src="/generated/cinematic-sprinter-hero-black-gold.png" alt="Black Mercedes Sprinter party vehicle on the Las Vegas Strip at night" fill priority sizes="100vw" className="home-hero__image" />
          <div className="home-hero__scrim" />
          <div className="page-container home-hero__content">
            <p className="eyebrow">Las Vegas party bus service · CPCN {siteConfig.cpcn}</p>
            <h1 className="display display--home-hero">Own the<br /><em>Strip tonight.</em></h1>
            <p className="home-hero__lede">Luxury transportation for the celebrations, events, and nights you’ll talk about long after the lights go down.</p>
            <div className="hero-actions"><Link href="/contact/" className="button button--gold">Request a quote <ArrowUpRight size={18} /></Link><Link href="/fleet/" className="button button--quiet">View the fleet <ArrowDownRight size={18} /></Link></div>
            <div className="hero-bottomline"><span>Serving Las Vegas since day one</span><span className="hero-bottomline__line" /><span>Private groups · Events · Experiences</span></div>
          </div>
        </section>

        <section className="trust-strip"><div className="page-container trust-strip__grid">{trustPoints.map((point) => <div key={point.label}><strong>{point.value}</strong><span>{point.label}</span></div>)}</div></section>

        <section id="about" className="page-container home-intro">
          <SectionHeading eyebrow="The LTSLV approach" title="The ride is where the night begins." copy={<><p>From the first pickup to the last drop-off, every transition should feel considered. We pair polished vehicles with practical coordination so the group can stay present.</p><Link href="/contact/" className="text-link">Talk through your plan <ArrowUpRight size={17} /></Link></>} />
          <div className="home-intro__image"><Image src="/generated/cinematic-lounge-black-gold.png" alt="Black and gold party bus lounge interior" fill sizes="(min-width: 800px) 50vw, 100vw" /></div>
        </section>

        <section id="services" className="page-container home-services"><SectionHeading eyebrow="Choose your occasion" title="Built for the nights that matter." copy={<Link href="/services/" className="text-link">See all services <ArrowUpRight size={17} /></Link>} /><div className="service-grid">{services.slice(0, 6).map((service) => <ServiceCard key={service.slug} service={service} />)}</div></section>

        <section id="fleet" className="page-container home-fleet"><SectionHeading eyebrow="The fleet" title="Find your cabin." copy={<p>Choose the atmosphere and capacity that fit the group. Every inquiry gets a human recommendation around the actual plan.</p>} /><div className="vehicle-grid vehicle-grid--featured">{vehicles.filter((vehicle) => vehicle.featured || vehicle.slug === "champagne-coach" || vehicle.slug === "grand-strip-coach").map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} />)}</div><Link href="/fleet/" className="button button--outline centered-button">Explore all nine vehicles <ArrowUpRight size={18} /></Link></section>

        <section id="experience" className="experience-section"><div className="page-container"><div className="experience-section__header"><SectionHeading eyebrow="A better kind of logistics" title="Clear details. Confident arrival." copy={<p>We keep the operational pieces visible: timing, locations, passenger count, and the vehicle that fits. That’s how a good night stays easy.</p>} /></div><div className="experience-section__grid"><div className="experience-panel experience-panel--image"><Image src="/generated/cinematic-detail-black-gold.png" alt="Black and gold luxury vehicle detail" fill sizes="(min-width: 800px) 50vw, 100vw" /></div><div className="experience-panel experience-panel--copy"><ShieldCheck size={31} weight="light" /><h3>Travel with a team that has the details covered.</h3><div className="experience-checks"><p><Check size={17} /> Professional driver coordination</p><p><Check size={17} /> Clear pickup and drop-off planning</p><p><Check size={17} /> One point of contact for your inquiry</p></div><a href={siteConfig.phoneHref} className="text-link"><Phone size={17} /> Call {siteConfig.phone}</a></div></div></div></section>

        <InquiryCta />
      </main>
    </SiteShell>
  );
}
