import Image from "next/image";
import Link from "next/link";
import { phoneDisplay, phoneHref, services } from "@/lib/site-data";

export function SiteFooter() {
  return <footer className="site-footer">
    <div className="footer-lead"><p className="eyebrow">Your night, in motion</p><h2>Plan the ride around the occasion.</h2><Link href="/contact/" className="gold-button">Request pricing</Link></div>
    <div className="footer-grid">
      <div><div className="footer-logo"><Image src="/brand/ltslv-logo.png" alt="" fill sizes="150px" /></div><p>Luxurious Transportation Services<br />Las Vegas, Nevada</p><p>CPCN 2158-7</p></div>
      <div><h3>Explore</h3><Link href="/fleet/">Fleet</Link><Link href="/services/">Services</Link><Link href="/contact/">Contact</Link></div>
      <div><h3>Services</h3>{services.slice(0, 4).map(s => <Link key={s.slug} href={`/${s.slug}/`}>{s.name}</Link>)}</div>
      <div><h3>Call anytime</h3><a className="footer-phone" href={phoneHref}>{phoneDisplay}</a><p>Availability and pricing are confirmed by inquiry.</p></div>
    </div>
    <p className="copyright">© {new Date().getFullYear()} Luxurious Transportation Services. All rights reserved.</p>
  </footer>;
}
