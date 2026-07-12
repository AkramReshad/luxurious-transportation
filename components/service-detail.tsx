import Image from "next/image";
import Link from "next/link";
import { EditorialHero } from "@/components/editorial-hero";
import { PageShell } from "@/components/page-shell";
import { services, vehicles, type Service } from "@/lib/site-data";

export function ServiceDetail({ service }: { service: Service }) {
  const relevant = vehicles.filter(v => service.vehicleNames.includes(v.name)).slice(0, 3);
  const related = services.filter(s => s.slug !== service.slug).slice(0, 3);
  return <PageShell>
    <EditorialHero priority eyebrow={service.eyebrow} title={service.name} copy={service.summary} image={service.image} imageAlt={service.imageAlt} />
    <section className="split-section"><div><p className="eyebrow">Designed around your plans</p><h2>One itinerary. One point of coordination.</h2></div><div><p className="large-copy">{service.description}</p><ul className="benefit-list">{service.benefits.map(x => <li key={x}>{x}</li>)}</ul></div></section>
    <section className="dark-panel"><div className="section-heading"><p className="eyebrow">A starting selection</p><h2>Vehicles for the occasion.</h2><p>Final vehicle selection depends on passenger count, date, route, and availability.</p></div><div className="mini-fleet">{relevant.map(v => <article key={`${v.name}-${v.capacity}`}><div><Image src={v.image} alt="" fill sizes="33vw" /></div><h3>{v.name}</h3><p>Up to {v.capacity} passengers</p></article>)}</div></section>
    <section className="related-section"><p className="eyebrow">Continue exploring</p><div className="related-links">{related.map(s => <Link href={`/${s.slug}/`} key={s.slug}>{s.name}<span>↗</span></Link>)}</div></section>
  </PageShell>;
}
