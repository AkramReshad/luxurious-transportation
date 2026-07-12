# Repository Guidelines

## Project Structure

This is a single-page Next.js 16 site using TypeScript and the App Router.

- `app/`: page entry point, layout, metadata, and global styles.
- `components/`: reusable React UI, including the main landing-page experience.
- `public/brand/`: logos and brand assets.
- `public/generated/`: generated campaign imagery.

## Agent Protocol

The repository owner sets product direction; Codex owns engineering execution. For concrete tasks, take initiative and complete the work end-to-end: inspect the relevant code, choose the simplest repo-native implementation, make the change, and verify it. Ask only when product intent, credentials, destructive actions, or acceptance criteria create a genuine blocker. Fix root causes, keep changes focused, and state any verification blocker precisely.

You need to live verify every change with screenshots. Do not say done otherwise

Keep the product focused and operationally simple. Prioritize customer inquiries, mobile presentation, trust, accessibility, performance, and low maintenance. Add scope only when it materially supports those goals.

Preserve the established cinematic black-and-gold visual system across all routes. Create original, page-specific imagery and rewrite inherited copy so each page improves on the legacy site. Keep verified business facts accurate; do not invent fleet details, amenities, pricing, or promotional claims.

Read `DESIGN_SYSTEM.md` before any visual, layout, interaction, copy, or image work. The committed original homepage is authoritative. New pages may vary composition and imagery, but may not introduce new fonts, accent colors, radii, shadows, controls, surface treatments, or motion patterns without explicit product approval.

## Commands

- `npm ci`: install locked dependencies.
- `npm run dev`: start the local development server.
- `npm run lint`: run ESLint with zero warnings allowed.
- `npm run build`: verify types and create a production build.
- `npm start`: serve the production build.

Run lint and build before submitting changes.

## Code Conventions

Use strict TypeScript, functional React components, two-space indentation, semicolons, and double quotes. Name components in PascalCase and component files in kebab-case, such as `design-showcase.tsx`. Prefer `@/` imports. Keep `app/page.tsx` small and place substantial UI in `components/`. Reference public assets with root-relative paths such as `/generated/emerald-bus.png`.

## Tools

### Browser-use
