import Image from "next/image";
import Link from "next/link";

export function EditorialHero({ eyebrow, title, copy, image, imageAlt, priority = false }: { eyebrow: string; title: string; copy: string; image: string; imageAlt: string; priority?: boolean }) {
  return <section className="editorial-hero">
    <Image src={image} alt={imageAlt} fill priority={priority} sizes="100vw" className="hero-image" />
    <div className="hero-shade" />
    <div className="hero-content"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="hero-copy">{copy}</p><div className="hero-actions"><Link href="/contact/" className="gold-button">Request pricing</Link><a href="tel:+17024709700" className="text-link">Call 702-470-9700</a></div></div>
  </section>;
}
