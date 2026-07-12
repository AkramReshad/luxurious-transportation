"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CaretDown, List, X } from "@phosphor-icons/react";
import { services } from "@/lib/site-data";

const links = [
  ["Fleet", "/fleet/"],
  ["Contact", "/contact/"]
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="site-header">
      <Link href="/" className="brand" aria-label="Luxurious Transportation Services home">
        <Image src="/brand/ltslv-logo.png" alt="Luxurious Transportation Services" fill sizes="160px" />
      </Link>
      <nav className={open ? "nav-links is-open" : "nav-links"} aria-label="Primary navigation">
        <div className="services-menu">
          <Link href="/services/" onClick={() => setOpen(false)}>
            Services
            <CaretDown className="nav-caret" size={13} weight="bold" />
          </Link>
          <div className="services-dropdown">
            <div className="services-dropdown-panel">
              {services.map((service) => (
                <Link key={service.slug} href={`/${service.slug}/`} onClick={() => setOpen(false)}>
                  {service.name.replace(" Transportation", "")}
                </Link>
              ))}
            </div>
          </div>
        </div>
        {links.map(([label, href]) => (
          <Link key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        ))}
        <Link className="nav-book nav-book-mobile" href="/contact/" onClick={() => setOpen(false)}>
          Book now
        </Link>
      </nav>
      <Link className="nav-book nav-book-desktop" href="/contact/">Book now</Link>
      <button
        className="menu-button"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        {open ? <X /> : <List />}
      </button>
    </header>
  );
}
