---
read_when: Read before changing any visual, interaction, layout, copy, or image treatment. The committed original homepage is the final authority when this guide is ambiguous.
last_updated: 2026-07-11
---

# Luxurious Transportation Design System

## Authority

The committed original homepage is the canonical visual reference. Every route must feel built from that system. Composition and imagery may vary; fonts, colors, surfaces, controls, radii, spacing rhythm, and motion may not drift without explicit product approval.

## Typography

- Body: `Satoshi, Geist, "Avenir Next", system-ui, sans-serif`.
- Display: `Cabinet Grotesk, Satoshi, "Avenir Next", system-ui, sans-serif`.
- Use `font-display` for primary page and section headings.
- Display headings use regular weight, tight leading (`0.98`–`1`), and balanced wrapping.
- Body copy uses 16–18px text, generous leading, and a readable maximum width near 65 characters.
- Labels and navigation use small uppercase sans-serif text. Eyebrows and section labels use champagne.
- Do not use serif type on customer-facing pages.

## Color

| Token | Value | Use |
| --- | --- | --- |
| `obsidian` | `#080907` | Primary background |
| `coal` | `#151311` | Raised dark surface |
| `ink` | `#11110f` | Dark text on gold |
| `bone` | `#f3eee3` | Primary foreground |
| `champagne` | `#d7ad53` | Accent, borders, labels, CTAs |
| `champagne-hover` | `#f0c56b` | Gold control hover |
| `muted` | `rgba(255,255,255,.66)` | Secondary copy |
| `line` | `rgba(255,255,255,.14)` | Dividers and glass edges |

Champagne is the only brand accent. Status colors may appear only in form feedback and must remain subordinate.

## Layout and Spacing

- Maximum content width: `1500px`.
- Horizontal gutters: `20px` mobile and `32px` tablet/desktop.
- Standard section spacing: `96px` mobile and `120px` desktop, adjusted optically when the homepage establishes a stronger composition.
- Use asymmetric grids, image-led sections, and generous negative space.
- Avoid consecutive identical card grids.
- Heroes use `min-height: 100dvh` when appropriate and preserve the cinematic image-first hierarchy.

## Surfaces and Imagery

- Use obsidian foundations, translucent white glass, champagne edge light, and the canonical grain overlay.
- Glass uses approximately `rgba(255,255,255,.13)`, a `1px` white edge at `.14`–`.18`, strong backdrop blur, and `shadow-glass`.
- Canonical radii: `12px` brand containers, `28px` media, `30px` glass panels, and full-pill CTAs.
- Images use Las Vegas night lighting, black vehicles, warm gold highlights, controlled saturation, deep contrast, and purposeful crops.
- Create original page-specific imagery. Accurate fleet representation takes priority over generated spectacle.

## Controls and Motion

- Primary CTA: champagne fill, ink text, full pill, minimum 48px height.
- Secondary CTA: champagne border or underline.
- Interactive transitions use 250–300ms. Image hover scale uses approximately 700ms.
- Pressed controls scale to `0.98`. Magnetic motion is reserved for primary homepage-level CTAs.
- Every control requires a visible champagne focus ring. Honor `prefers-reduced-motion`.

## Copy

Write concise, confident, Las Vegas-specific copy focused on group transportation and inquiry conversion. Rewrite inherited content while preserving verified facts. Do not invent vehicles, capacities, amenities, pricing, venue access, alcohol offers, or availability.

## Enforcement

- Reuse shared components before adding page-local variants.
- Use Tailwind theme tokens or global CSS variables; avoid hardcoded near-matches.
- New fonts, accent colors, button styles, radii, shadows, or motion patterns require explicit product approval.
- Verify every visual change against the homepage at desktop and mobile widths with screenshots.
