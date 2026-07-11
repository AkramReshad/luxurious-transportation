import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, UsersThree } from "@phosphor-icons/react/dist/ssr";
import type { Vehicle } from "@/lib/site-data";

export function VehicleCard({ vehicle, compact = false }: { vehicle: Vehicle; compact?: boolean }) {
  return (
    <article className={`vehicle-card ${compact ? "vehicle-card--compact" : ""}`}>
      <div className="vehicle-card__image">
        <Image src={vehicle.image} alt={vehicle.alt} fill sizes="(min-width: 1000px) 33vw, 100vw" />
        <span className="vehicle-card__category">{vehicle.category}</span>
      </div>
      <div className="vehicle-card__body">
        <div>
          <p className="vehicle-card__capacity"><UsersThree size={16} /> {vehicle.capacity}</p>
          <h3>{vehicle.name}</h3>
        </div>
        <p>{vehicle.description}</p>
        <Link href="/contact/" className="text-link">Check availability <ArrowUpRight size={17} /></Link>
      </div>
    </article>
  );
}
