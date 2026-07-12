---
read_when: Read before expanding the landing page into the full replacement for ltslv.com or changing migration scope.
last_updated: 2026-07-11
---

# Full-Site Implementation Plan

## Goal

Rebuild the current Luxurious Transportation website in the new visual system while preserving its useful pages, public URLs, business information, and customer inquiry paths. The replacement must materially improve the design, copy, imagery, usability, and conversion experience.

## Creative Direction

- Treat the current repository homepage as the visual source of truth: cinematic Las Vegas nightlife, obsidian surfaces, champagne-gold accents, high-contrast photography, large editorial typography, subtle grain, and restrained motion.
- Maintain one recognizable design system across every route while giving each fleet or service page its own composition and visual focal point.
- Create original, page-specific imagery in the established style. Use new hero and supporting images where they improve the narrative; avoid repeating the same small asset set across the entire site.
- Do not present an AI-generated vehicle as an exact fleet vehicle unless the business owner confirms the match. Preserve authentic fleet photography when vehicle accuracy matters and improve its presentation through art direction, cropping, and layout.
- Rewrite all inherited copy for clarity, credibility, search intent, and customer conversion. Preserve verified business facts while correcting weak phrasing, duplication, spelling, and grammar.
- Keep copy specific to the service and Las Vegas context. Do not publish unsupported claims, invented amenities, fabricated pricing, or outdated venue promises.

**Acceptance:** New routes feel like extensions of the current premium homepage, contain original page-appropriate imagery and copy, and provide a visibly stronger customer experience than the legacy site.

## 1. Shared Layout and Conversion System

- Build a shared header, mobile navigation, footer, and route-level metadata defaults.
- Extract the landing page's design tokens and reusable layout primitives.
- Create shared call, pricing, testimonials, and inquiry CTA components.
- Keep the phone number, business identity, and CPCN `2158-7` consistent across routes.
- Preserve the current typography, palette, image treatment, spacing, surface texture, and motion language.

**Acceptance:** Every route uses the same responsive, accessible navigation, footer, and conversion actions.

## 2. Fleet and Services Indexes

- Implement `/fleet/` with the nine current vehicle listings.
- Implement `/services/` with the eight current service categories.
- Store vehicle and service content in typed, centralized data modules.
- Include imagery, passenger capacity, concise descriptions, and pricing CTAs.
- Give each index a purpose-built hero and a varied editorial layout that fits the established style.

**Acceptance:** Every current listing appears once, and shared content can be maintained without editing page components.

## 3. Service Detail Pages

Create a reusable detail-page template for:

- `/nightclub-crawl/`
- `/bachelor-and-bachelorette-parties/`
- `/prom-transportation/`
- `/edc/`
- `/golf-course/`
- `/Quinceanera-Transportation/`
- `/nfr/`
- `/ces/`

Each page needs original service-specific copy, a newly created hero image, supporting imagery where useful, benefits, relevant vehicles, inquiry CTAs, related services, and unique metadata. Correct obvious spelling errors and replace the copied EDC content currently present on the NFR page.

**Acceptance:** Every legacy service URL resolves directly and contains distinct, accurate content.

## 4. Contact and Pricing Inquiry Flow

- Implement `/contact/` and a reusable pricing inquiry form.
- Capture contact details, event type, date, passenger count, trip locations, and message.
- Add accessible validation, spam protection, submission feedback, and a click-to-call fallback.
- Keep credentials and provider configuration server-side.

**Open question:** Which service or backend should receive form submissions?

**Acceptance:** Valid inquiries reliably reach the configured destination, and failures provide a clear recovery path.

## 5. Verification, Metadata, and Migration

- Confirm fleet names, capacities, availability, images, contact details, and CPCN information with the business owner.
- Verify claims involving alcohol, venue admission, amenities, and fleet size before publication.
- Add unique titles, descriptions, social metadata, sitemap, robots configuration, and canonical URLs.
- Preserve existing paths through direct routes or permanent redirects.
- Test responsive layouts, keyboard navigation, focus states, reduced motion, forms, links, and image loading.
- Run `npm run lint`, `npm run build`, and browser QA across every route.

**Acceptance:** All legacy URLs resolve correctly, conversion flows work, verification gates pass, and no browser errors remain.

## Delivery Order

1. Content inventory and owner-verification checklist.
2. Shared layout, components, and content models.
3. Fleet and services indexes.
4. Service detail routes.
5. Contact and pricing inquiry flow.
6. Metadata, redirects, and full-site QA.
