import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Check, Phone } from "@phosphor-icons/react/dist/ssr";
import { getService, getVehicle, services, siteConfig } from "@/lib/site-data";
import { InquiryCta } from "@/components/inquiry-cta";
import { SectionHeading } from "@/components/section-heading";
import { VehicleCard } from "@/components/vehicle-card";

export function ServiceDetailPage({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) return null;
  const relevantVehicles = service.vehicleSlugs.map(getVehicle).filter((vehicle): vehicle is NonNullable<ReturnType<typeof getVehicle>> => Boolean(vehicle));
  const relatedServices = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <main>
      <section className="detail-hero">
        <Image src={service.image} alt={service.alt} fill priority sizes="100vw" className="detail-hero__image" />
        <div className="detail-hero__scrim" />
        <div className="page-container detail-hero__content">
          <Link href="/services/" className="back-link"><ArrowLeft size={17} /> All services</Link>
          <p className="eyebrow">{service.eyebrow}</p>
          <h1 className="display display--hero">{service.name}</h1>
          <p className="detail-hero__lede">{service.description}</p>
          <div className="detail-hero__actions"><Link href="/contact/" className="button button--gold">Request pricing <ArrowUpRight size={18} /></Link><a href={siteConfig.phoneHref} className="button button--quiet"><Phone size={18} /> Call the team</a></div>
        </div>
      </section>

      <section className="page-container detail-intro">
        <div><p className="eyebrow">Built around your group</p><h2 className="display">A smoother plan makes a better night.</h2></div>
        <div className="detail-intro__benefits">{service.benefits.map((benefit) => <div key={benefit}><span><Check size={17} weight="bold" /></span><p>{benefit}</p></div>)}</div>
      </section>

      <section className="page-container detail-fleet">
        <SectionHeading eyebrow="Suggested vehicles" title="The right cabin for the guest list." copy={<p>These are strong starting points for this kind of itinerary. We’ll confirm the best match around your date, group size, and route.</p>} />
        <div className="vehicle-grid vehicle-grid--three">{relevantVehicles.map((vehicle) => <VehicleCard key={vehicle.slug} vehicle={vehicle} compact />)}</div>
      </section>

      <section className="page-container related-services">
        <SectionHeading eyebrow="Keep exploring" title="More ways to move through Las Vegas." />
        <div className="related-services__grid">{relatedServices.map((item) => <Link key={item.slug} href={item.path} className="related-service"><span>{item.name}</span><ArrowUpRight size={18} /></Link>)}</div>
      </section>
      <InquiryCta title={`Make ${service.name.toLowerCase()} easy to plan.`} />
    </main>
  );
}
