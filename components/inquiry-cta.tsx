import Link from "next/link";
import { ArrowUpRight, Phone } from "@phosphor-icons/react/dist/ssr";
import { siteConfig } from "@/lib/site-data";

export function InquiryCta({ title = "Tell us how the night should feel.", copy = "Share the date, group size, and rough itinerary. We’ll help match the plan to the right vehicle." }: { title?: string; copy?: string }) {
  return (
    <section className="inquiry-cta">
      <div>
        <p className="eyebrow">Start with the details</p>
        <h2 className="display display--cta">{title}</h2>
        <p className="inquiry-cta__copy">{copy}</p>
      </div>
      <div className="inquiry-cta__actions">
        <Link href="/contact/" className="button button--gold">Request a quote <ArrowUpRight size={18} /></Link>
        <a href={siteConfig.phoneHref} className="button button--quiet"><Phone size={18} /> Call {siteConfig.phone}</a>
      </div>
    </section>
  );
}
