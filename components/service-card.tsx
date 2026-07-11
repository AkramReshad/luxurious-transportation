import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import type { Service } from "@/lib/site-data";

export function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="service-card">
      <div className="service-card__image">
        <Image src={service.image} alt={service.alt} fill sizes="(min-width: 800px) 33vw, 100vw" />
        <span className="service-card__index">{String(service.slug.length).padStart(2, "0")}</span>
      </div>
      <div className="service-card__body">
        <p className="eyebrow">{service.eyebrow}</p>
        <h3>{service.name}</h3>
        <p>{service.shortDescription}</p>
        <Link href={service.path} className="text-link">Explore service <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}
