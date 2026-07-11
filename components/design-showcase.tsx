"use client";

import Image from "next/image";
import type { MouseEvent, ReactNode } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  CalendarBlank,
  CaretDown,
  MapPin,
  ShieldCheck,
  UsersThree
} from "@phosphor-icons/react";

const galleryImages = [
  {
    src: "/generated/cinematic-sprinter-hero-black-gold.png",
    alt: "Black Mercedes Sprinter party van on the Las Vegas Strip at night",
    label: "Exterior"
  },
  {
    src: "/generated/cinematic-lounge-black-gold.png",
    alt: "Black and gold party bus lounge interior",
    label: "Lounge"
  },
  {
    src: "/generated/cinematic-sprinter-detail-black-gold.png",
    alt: "Black Mercedes Sprinter detail with gold running lights",
    label: "Details"
  }
];

export function DesignShowcase() {
  return (
    <main className="relative min-h-[100dvh] overflow-x-hidden bg-obsidian text-bone">
      <div className="grain-overlay" />
      <StripNoir />
    </main>
  );
}

function BrandLogo() {
  return (
    <div className="relative h-16 w-[154px] shrink-0 overflow-hidden rounded-xl bg-black/35 sm:h-[70px] sm:w-[176px]">
      <Image
        src="/brand/ltslv-logo.png"
        alt="Luxurious Transportation Services logo"
        fill
        priority
        sizes="(min-width: 640px) 176px, 154px"
        className="object-cover"
      />
    </div>
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
          <nav className="mx-auto flex w-full max-w-[1500px] items-center justify-between gap-6 px-5 py-6 sm:px-8">
            <BrandLogo />
            <div className="hidden items-center gap-9 text-sm font-semibold uppercase text-white/82 lg:flex">
              <a href="#services" className="inline-flex items-center gap-1">
                Services <CaretDown size={13} weight="bold" />
              </a>
              <a href="#fleet">Fleet</a>
              <a href="#experience">Experience</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <a
              href="#booking"
              className="rounded-full border border-champagne px-5 py-3 text-sm font-semibold uppercase text-champagne transition duration-300 hover:bg-champagne hover:text-ink active:scale-[0.98] sm:px-7"
            >
              Book now
            </a>
          </nav>

          <div className="mx-auto grid w-full max-w-[1500px] flex-1 px-5 pb-8 pt-8 sm:px-8 lg:pt-14">
            <div className="grid min-h-[calc(100dvh-150px)] content-between gap-10">
              <div className="max-w-[720px] pt-10 lg:pt-14 xl:pt-20">
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
                    href="#booking"
                    className="rounded-full bg-champagne px-8 text-ink hover:bg-[#f0c56b]"
                  >
                    Book your party bus
                  </MagneticButton>
                  <a
                    href="#fleet"
                    className="inline-flex min-h-12 items-center border-b border-champagne px-1 text-sm font-semibold uppercase text-white transition duration-300 active:scale-[0.98]"
                  >
                    View fleet
                  </a>
                </div>
              </div>

              <div className="grid gap-6 min-[1450px]:grid-cols-[minmax(360px,610px)_minmax(520px,760px)] min-[1450px]:items-end min-[1450px]:justify-between">
                <RouteTimeline />
                <div className="min-[1450px]:justify-self-end">
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

      <section id="fleet" className="mx-auto grid max-w-[1500px] gap-10 px-5 py-24 sm:px-8 lg:grid-cols-[0.72fr_1.28fr]">
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

      <section id="experience" className="mx-auto max-w-[1500px] px-5 pb-28 sm:px-8">
        <div className="mb-8 flex flex-col justify-between gap-5 border-t border-white/14 pt-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm uppercase text-champagne">Night sequence</p>
            <h2 className="mt-4 font-display text-5xl leading-none lg:text-7xl">Arrival to after-hours.</h2>
          </div>
          <p className="max-w-md leading-7 text-white/66">
            Generic copy for the next pass. The visual system stays focused on polished black surfaces,
            gold reflections, and the Strip after dark.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr]">
          <GalleryTile image={galleryImages[0]} tall />
          <div className="grid gap-5">
            <GalleryTile image={galleryImages[1]} />
            <GalleryTile image={galleryImages[2]} />
          </div>
        </div>
      </section>
    </article>
  );
}

function BookingPanel() {
  return (
    <div
      id="booking"
      className="w-full max-w-[760px] rounded-[30px] border border-white/18 bg-white/13 p-4 shadow-glass backdrop-blur-2xl"
    >
      <div className="grid gap-4 md:grid-cols-3 min-[1450px]:grid-cols-[1fr_1fr_1.15fr_auto] min-[1450px]:items-center">
        <BookingField icon={<UsersThree size={28} />} label="Group size" value="10-40 guests" />
        <BookingField icon={<CalendarBlank size={28} />} label="Date" value="Sat, May 24" />
        <BookingField icon={<MapPin size={28} />} label="Pick up" value="Mandalay Bay" />
        <MagneticButton
          href="tel:+17025551947"
          className="w-full rounded-full bg-champagne px-7 text-ink hover:bg-[#f0c56b] md:col-span-3 min-[1450px]:col-span-1"
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

function RouteTimeline() {
  const stops = [
    ["Start", "Mandalay Bay"],
    ["Welcome", "Fabulous Las Vegas sign"],
    ["Caesars", "Palace"],
    ["The", "Linq"],
    ["Bellagio", "Fountains"],
    ["Finish", "Resorts World"]
  ];

  return (
    <div data-route-timeline className="max-w-[610px]">
      <div className="relative mb-4 h-4">
        <div className="absolute left-0 right-0 top-1/2 h-px bg-champagne" />
        {stops.map((stop, index) => (
          <span
            key={stop.join("-")}
            className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full border-2 border-champagne bg-obsidian"
            style={{ left: `${(index / (stops.length - 1)) * 100}%` }}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 gap-4 text-xs uppercase text-white/84 sm:grid-cols-3 lg:grid-cols-6">
        {stops.map(([label, value]) => (
          <div key={`${label}-${value}`}>
            <p className="text-champagne">{label}</p>
            <p className="mt-1 leading-5">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function GalleryTile({
  image,
  tall = false
}: {
  image: (typeof galleryImages)[number];
  tall?: boolean;
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-[28px] border border-white/12 bg-white/5 ${
        tall ? "min-h-[620px]" : "min-h-[300px]"
      }`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        sizes={tall ? "(min-width: 768px) 58vw, 100vw" : "(min-width: 768px) 38vw, 100vw"}
        className="object-cover transition duration-700 group-hover:scale-[1.03]"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-obsidian/78 via-transparent to-transparent" />
      <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-5">
        <p className="text-sm font-semibold uppercase text-champagne">{image.label}</p>
        <span className="h-px flex-1 bg-champagne/50" />
      </div>
    </div>
  );
}
