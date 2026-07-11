"use client";

import Image from "next/image";
import Link from "next/link";
import { List, Phone, X } from "@phosphor-icons/react";
import { useState } from "react";
import { siteConfig } from "@/lib/site-data";

const navItems = [
  { label: "Services", href: "/services/" },
  { label: "Fleet", href: "/fleet/" },
  { label: "Experience", href: "/#experience" },
  { label: "About", href: "/#about" }
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" className="site-header__brand" aria-label="Luxurious Transportation Services home" onClick={() => setOpen(false)}>
          <Image src="/brand/ltslv-logo.png" alt="Luxurious Transportation Services" width={152} height={66} priority />
        </Link>

        <nav className="site-header__nav" aria-label="Main navigation">
          {navItems.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          <Link href="/contact/">Contact</Link>
        </nav>

        <div className="site-header__actions">
          <a className="site-header__phone" href={siteConfig.phoneHref} aria-label={`Call ${siteConfig.phone}`}>
            <Phone size={17} weight="bold" />
            <span>{siteConfig.phone}</span>
          </a>
          <Link href="/contact/" className="button button--small button--outline">Request a quote</Link>
          <button className="menu-button" type="button" aria-expanded={open} aria-controls="mobile-navigation" onClick={() => setOpen((value) => !value)}>
            <span className="sr-only">{open ? "Close" : "Open"} menu</span>
            {open ? <X size={25} /> : <List size={25} />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-navigation" className="mobile-navigation" aria-label="Mobile navigation">
          {[...navItems, { label: "Contact", href: "/contact/" }].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</Link>
          ))}
          <a href={siteConfig.phoneHref} className="mobile-navigation__call" onClick={() => setOpen(false)}><Phone size={18} /> Call {siteConfig.phone}</a>
        </nav>
      )}
    </header>
  );
}
