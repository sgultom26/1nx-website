# 1nx — marketing website

Cinematic, bilingual (EN/ID) marketing site for **1nx** — AI-enabled solutions, digital
transformation and automation for the enterprise. **One idea. N executions.**

> **Continuing this project?** Read **[`docs/HANDOFF.md`](docs/HANDOFF.md)** first — full ops/deploy
> state (Vercel from GitHub, domain, i18n, products, motion) + runbook. Design rationale in
> `docs/superpowers/specs/`, build plan in `docs/superpowers/plans/`.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript 5.7 (pinned) · Tailwind CSS v4
- Motion: **Lenis** (smooth scroll) · **Framer Motion** (reveals + scroll-scrubbed `ScrollStage`) ·
  Canvas 2D hero (`HeroBurst`). All motion honours `prefers-reduced-motion`.
- Fonts: Space Grotesk (display) · Inter (body) · IBM Plex Mono (labels)
- Identity: dominant white/black + single **dark-cyan** accent; near-flat cards.

## Develop

```bash
npm install
npm run dev        # http://localhost:3000
npm run build && npm start
npm test           # vitest: localize() · middleware decideLocale() · contact validation
```

> Don't run `npm run dev` and `npm start` against the same `.next` at once.

## Structure

- `app/` — routes. EN at root, ID mirrored under `/id/*` (server-rendered, hreflang + canonical, in
  the sitemap). Thin route wrappers render `LocaleShell` (provider + Nav + Footer); page bodies live
  in `components/pages/*Content.tsx`.
- `lib/dictionary.ts` — all EN + ID copy (`Dict = typeof en`). `lib/i18n.tsx` — provider + `localize()`.
  `lib/locale.ts` — `decideLocale()` used by `middleware.ts`. `lib/site.ts` — `SITE_URL`, product family.
- `components/motion/` — `SmoothScroll` (Lenis), `ScrollStage` (pinned scroll-scrub).
- `components/graphics/` — `HeroBurst` (1→N canvas), `OneToNFlow` (pinned thesis), `ExecutionTimeline`,
  `ImpactCounters`.
- `components/site/` — `Logo` (fan mark + wordmark), `Nav`, `Footer`, `LanguageSwitcher`, `LocaleShell`.

## SEO

Per-page metadata + canonical/hreflang, `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`,
dynamic `app/opengraph-image.tsx`, JSON-LD (`Organization` + `WebSite`) in the layout. Absolute URLs
via `NEXT_PUBLIC_SITE_URL` (default `https://1nx.io`).

## Contact

`/contact` (+ `/id/contact`) posts to `app/api/contact/route.ts` (form-only; validation in
`lib/contact.ts`, logged to server logs). Swap for email/CRM later.

## Brand

Logo source + renders in `brand/`. Design rationale: `docs/superpowers/specs/`. Build plan:
`docs/superpowers/plans/`.
