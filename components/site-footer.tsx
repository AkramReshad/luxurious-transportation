import Link from "next/link";
import { ArrowUpRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { services, siteConfig } from "@/lib/site-data";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <p className="eyebrow">Las Vegas, after dark</p>
          <h2 className="display display--footer">Make the ride part of the night.</h2>
          <Link href="/contact/" className="text-link">Start an inquiry <ArrowUpRight size={17} /></Link>
        </div>
        <div className="site-footer__contact">
          <p className="eyebrow">Talk with our team</p>
          <a href={siteConfig.phoneHref} className="site-footer__phone"><Phone size={20} /> {siteConfig.phone}</a>
          <a href={`mailto:${siteConfig.email}`} className="site-footer__email">{siteConfig.email}</a>
          <p className="site-footer__fine">Licensed Nevada passenger carrier · CPCN {siteConfig.cpcn}</p>
        </div>
        <div className="site-footer__links">
          <p className="eyebrow">Explore</p>
          <Link href="/fleet/">Fleet</Link>
          <Link href="/services/">Services</Link>
          <Link href="/pricing/">Pricing inquiries</Link>
          <Link href="/contact/">Contact</Link>
        </div>
        <div className="site-footer__links">
          <p className="eyebrow">Popular routes</p>
          {services.slice(0, 4).map((service) => <Link key={service.slug} href={service.path}>{service.name}</Link>)}
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {siteConfig.name}</span>
        <span>Serving Las Vegas and beyond</span>
      </div>
    </footer>
  );
}
