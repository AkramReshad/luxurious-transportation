import Image from "next/image";
import Link from "next/link";
import type { Service } from "@/lib/site-data";

export function ServiceGrid({ items }: { items: Service[] }) {
  return <div className="service-grid">{items.map((s, index) => <article className={index % 3 === 0 ? "service-card service-card-wide" : "service-card"} key={s.slug}>
    <Image src={s.image} alt="" fill sizes="(min-width: 900px) 50vw, 100vw" /><div className="service-shade" /><div className="service-content"><p className="eyebrow">{s.eyebrow}</p><h2>{s.name}</h2><p>{s.summary}</p><Link href={`/${s.slug}/`} className="text-link">Explore service</Link></div>
  </article>)}</div>;
}
