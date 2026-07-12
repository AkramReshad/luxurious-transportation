import Image from "next/image";
import Link from "next/link";
import type { Vehicle } from "@/lib/site-data";

export function VehicleGrid({ items }: { items: Vehicle[] }) {
  return <div className="vehicle-grid">{items.map((v, index) => <article className="vehicle-card" key={`${v.name}-${v.capacity}`}>
    <div className="vehicle-image"><Image src={v.image} alt={`${v.name} from the Luxurious Transportation fleet`} fill sizes="(min-width: 900px) 33vw, 100vw" /></div>
    <div className="vehicle-number">{String(index + 1).padStart(2, "0")}</div><h2>{v.name}</h2><p className="capacity">Up to {v.capacity} passengers</p><p>{v.description}</p><Link href={`/contact/?vehicle=${encodeURIComponent(v.name)}`} className="text-link">Get pricing</Link>
  </article>)}</div>;
}
