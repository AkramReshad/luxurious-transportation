"use client";

import Image from "next/image";
import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  CalendarBlank,
  MapPin,
  Quotes,
  ShieldCheck,
  UsersThree
} from "@phosphor-icons/react";
import { SiteHeader } from "@/components/site-header";
import { testimonials } from "@/lib/site-data";

export function DesignShowcase() {
  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-obsidian text-bone">
      <div className="grain-overlay" />
      <StripNoir />
    </main>
  );
}

function MagneticButton({
  href,
  children,
  className = ""
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 120, damping: 18 });
  const springY = useSpring(y, { stiffness: 120, damping: 18 });
  const rotate = useTransform(springX, [-18, 18], [-1.1, 1.1]);

  function handleMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.18);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.18);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.a
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY, rotate }}
      className={`inline-flex min-h-12 items-center justify-center gap-3 whitespace-nowrap px-6 py-3 text-sm font-semibold transition duration-300 active:scale-[0.98] ${className}`}
    >
      {children}
    </motion.a>
  );
}

function StripNoir() {
  return (
    <article className="bg-obsidian text-white">
      <section data-hero-section className="relative isolate min-h-[100dvh] overflow-hidden">
        <Image
          src="/generated/cinematic-sprinter-hero-black-gold.png"
          alt="Black Mercedes Sprinter party van on the Las Vegas Strip at night"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[62%_52%] brightness-[1.18] contrast-[1.08] saturate-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-obsidian/88 via-obsidian/32 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-obsidian/46 via-transparent to-obsidian/34" />

        <div className="relative z-[1] flex min-h-[100dvh] flex-col">
          <SiteHeader />
          <div aria-hidden="true" className="h-[118px] shrink-0" />

          <div className="mx-auto grid w-full max-w-[1660px] flex-1 px-5 pb-8 pt-8 sm:px-8 lg:pt-14 min-[1724px]:px-0">
            <div className="grid min-h-[calc(100dvh-150px)] content-between gap-10">
              <div className="max-w-[720px] pt-10 lg:pt-14 xl:pt-24">
                <p className="text-sm uppercase text-champagne sm:text-base">Las Vegas party bus experience</p>
                <h1 className="mt-5 max-w-[690px] font-display text-[54px] leading-[0.98] sm:text-[76px] lg:text-[88px] 2xl:text-[104px]">
                  Own The
                  <span className="block">Strip Tonight</span>
                </h1>
                <p className="mt-7 max-w-xl text-lg leading-8 text-white/82">
                  Luxury party buses. Epic nights. Unforgettable memories on the Las Vegas Strip.
                </p>
                <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
                  <MagneticButton
                    href="/contact/"
                    className="rounded-full bg-champagne px-8 text-ink hover:bg-[#f0c56b]"
                  >
                    Book your party bus
                  </MagneticButton>
                  <Link
                    href="/fleet/"
                    className="inline-flex min-h-12 items-center border-b border-champagne px-1 text-sm font-semibold uppercase text-white transition duration-300 active:scale-[0.98]"
                  >
                    View fleet
                  </Link>
                </div>
              </div>

              <div className="hidden justify-end lg:flex">
                <div>
                  <BookingPanel />
                  <div className="mt-4 flex justify-start gap-3 text-sm text-white/80 min-[1450px]:justify-center">
                    <ShieldCheck size={17} weight="bold" />
                    <span>Secure booking.</span>
                    <span>No hidden fees.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="fleet" className="mx-auto grid max-w-[1660px] gap-10 px-5 py-24 sm:px-8 min-[1724px]:px-0 lg:grid-cols-[0.72fr_1.28fr]">
        <div>
          <p className="text-sm uppercase text-champagne">Black and gold fleet</p>
          <h2 className="mt-4 max-w-xl font-display text-5xl leading-none lg:text-7xl">
            The vehicle is part of the night.
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="relative min-h-[460px] overflow-hidden rounded-[28px] border border-white/12">
            <Image
              src="/generated/cinematic-lounge-black-gold.png"
              alt="Black and gold party bus lounge interior"
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
          </div>
          <div className="grid gap-5">
            <div className="relative min-h-[260px] overflow-hidden rounded-[28px] border border-white/12">
              <Image
                src="/generated/cinematic-sprinter-detail-black-gold.png"
                alt="Black Mercedes Sprinter detail with gold running lights"
                fill
                sizes="(min-width: 1024px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
            {[
              ["Private room feel", "Large seating, lighting, sound, and a bar-ready layout."],
              ["Strip-first routing", "Generic placeholder for hotel pickups and planned stops."],
              ["Handled details", "Drivers, schedule, fleet match, and arrival timing."]
            ].map(([title, copy]) => (
              <div key={title} className="border-t border-white/14 py-5">
                <h3 className="text-2xl font-semibold">{title}</h3>
                <p className="mt-3 leading-7 text-white/66">{copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="testimonials"
        aria-labelledby="testimonials-heading"
        className="mx-auto grid max-w-[1660px] gap-14 border-t border-white/14 px-5 py-24 sm:px-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20 lg:py-[120px] min-[1724px]:px-0"
      >
        <div>
          <p className="text-sm uppercase text-champagne">From the passenger seat</p>
          <h2
            id="testimonials-heading"
            className="mt-4 max-w-xl font-display text-5xl leading-none sm:text-6xl lg:text-7xl"
          >
            The night, remembered.
          </h2>
          <p className="mt-6 max-w-md text-lg leading-8 text-white/66">
            A few words from groups who trusted us with their Las Vegas plans.
          </p>
          <div className="relative mt-10 aspect-[4/3] overflow-hidden rounded-[28px] border border-white/12 lg:aspect-[4/5]">
            <Image
              src="/generated/cinematic-lounge-black-gold.png"
              alt="Black and gold party bus lounge interior"
              fill
              sizes="(min-width: 1024px) 38vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-obsidian/40 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 text-sm font-semibold uppercase text-champagne">
              The room between destinations
            </p>
          </div>
        </div>

        <div>
          {testimonials.map(([quote, name], index) => (
            <figure
              key={name}
              className="grid gap-6 border-t border-white/14 py-10 first:border-champagne first:pt-10 sm:grid-cols-[64px_1fr] sm:gap-8 lg:py-12"
            >
              <div className="flex items-start justify-between sm:block">
                <Quotes size={42} weight="fill" className="text-champagne" aria-hidden="true" />
                <span className="text-xs text-white/38 sm:mt-7 sm:block">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <blockquote>
                <p className="max-w-4xl font-display text-[30px] leading-[1.18] text-bone sm:text-[38px] lg:text-[46px]">
                  “{quote}”
                </p>
                <figcaption className="mt-7 text-sm font-semibold uppercase tracking-[0.08em] text-champagne">
                  {name}
                </figcaption>
              </blockquote>
            </figure>
          ))}
        </div>
      </section>
    </article>
  );
}

function BookingPanel() {
  return (
    <div id="booking" className="w-full max-w-[760px] rounded-[30px] border border-white/18 bg-white/13 p-4 shadow-glass backdrop-blur-2xl">
      <div className="grid gap-4 lg:grid-cols-3 min-[1450px]:grid-cols-[1fr_1fr_1.15fr_auto] min-[1450px]:items-center">
        <BookingField icon={<UsersThree size={28} />} label="Group size" value="10-40 guests" />
        <BookingField icon={<CalendarBlank size={28} />} label="Date" value="Sat, May 24" />
        <BookingField icon={<MapPin size={28} />} label="Pick up" value="Mandalay Bay" />
        <MagneticButton
          href="tel:+17024709700"
          className="w-full rounded-full bg-champagne px-7 text-ink hover:bg-[#f0c56b] lg:col-span-3 min-[1450px]:col-span-1"
        >
          Check availability
        </MagneticButton>
      </div>
    </div>
  );
}

function BookingField({ icon, label, value }: { icon: ReactNode; label: string; value: string }) {
  return (
    <div className="grid grid-cols-[auto_1fr] items-center gap-3 border-white/16 min-[1450px]:border-r min-[1450px]:pr-5 min-[1450px]:last:border-r-0">
      <div className="text-white/90">{icon}</div>
      <div>
        <p className="text-xs uppercase text-white/58">{label}</p>
        <p className="mt-1 text-sm font-semibold uppercase text-white">{value}</p>
      </div>
    </div>
  );
}
