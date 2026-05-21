# Petersfield's Kebab House — Design Concept

A concept-phase frontend build for **petersfieldkebab.co.uk**, created as a tangible demo for client review.

## What's in scope

- **Homepage** — fully designed, all sections, mobile + desktop.
- **Menu page** — proper categories, item rows with prices, descriptions and allergen notes. This replaces the current live `/menu` 404.
- **Contact / Find us block** — address, hours, tap-to-call, directions link.
- **About / Story block** — short heritage section on the homepage.
- **SEO foundations** — metadata, OG tags, Restaurant JSON-LD schema, semantic headings, `/sitemap.xml`, `/robots.txt`.
- **Accessibility** — focus rings, semantic landmarks, alt text, touch targets, reduced-motion support.

## What's stubbed / not real yet

- **Photography** — every image is a warm-gradient placeholder labelled "Photography placeholder". The real photos come after a client-confirmed shoot.
- **Founding year** — currently shown as `[year]` placeholder pending client confirmation.
- **Menu prices and items** — based on Grace's content audit and best-effort inference. Client will confirm exact menu and pricing.
- **Google Reviews** — the rating block (`4.8★ · 535 Google reviews`) is hardcoded for the demo. Live data integration is post-signoff.
- **Ordering** — CTAs link to `https://connect.poscraft.co.uk/` (the current POSCraft tenant URL). No basket, no checkout, no auth.
- **Logo / symbol** — concept uses the wordmark only. Symbol exploration is a separate task once the client confirms openness.
- **Social handles** — not linked until confirmed.

## Stack

- Next.js 16 (App Router) + React 19 + Tailwind 4
- TypeScript + Biome (lint/format)
- OpenNext for Cloudflare (ready for eventual deploy)
- Fraunces (serif headlines) + Inter (body/UI) via next/font/google

## How to run

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Scripts

- `npm run dev` — local dev server
- `npm run build` — production build
- `npm run lint` — Biome check
- `npm run format` — Biome format --write

## Known TBCs

1. Founding year — `[year]` placeholder.
2. Photoshoot budget — all imagery is flagged placeholder.
3. Logo direction — wordmark only for now.
4. Brand colour openness — using proposed palette unless overridden.
5. Social handles — link to whatever exists; otherwise hide.
6. Full menu + prices — using inferred placeholder data.
7. Owner / family story — short placeholder, expand once client confirmed.
