# 1nx.io — marketing website design spec

**Date:** 2026-06-25 · **Status:** approved (brainstorm), pending implementation plan
**Repo:** `~/Stuff/Project/1nx/1nx-landing`

---

## 1. What this is

A cinematic, enterprise-grade marketing website for **1nx** (`1nx.io`) — an AI-tech and
business-transformation company. 1nx is the parent brand over the product family
(**1pay2link, 1ncall, 1nflow, termssh**) and sells outcome-driven AI + transformation services:
AI-enabled solutions, digital transformation, automation & workflow, and enterprise professional
solutions.

**Positioning / essence:** the name encodes the promise — **1 → n via x** — "one idea, executed N
ways, at scale." The site must feel like a top-tier creative-tech studio (reference:
ilabsolutions.it) while remaining enterprise-credible, fast, and indexable.

- **Primary slogan:** **"One idea. N executions."**
- **Supporting hero subhead (EN):** "1nx turns a single idea into many engineered executions —
  AI-enabled solutions, digital transformation and automation, delivered for the enterprise."

## 2. Brand & identity (final)

- **Logo:** **Concept B — "Fan (1 → N)"**. A single source node fanning into three graduated nodes
  (one idea → many executions), beside the **`1nx`** wordmark. Approved render:
  `brand/1nx-logo-concepts-final.png`; source markup: `brand/1nx-logo-source.html`.
  - Wordmark: `1` in ink, `nx` in dark cyan. On dark backgrounds: `1` white, `nx` bright cyan.
  - App-icon / favicon: the fan mark in white on a dark-cyan rounded tile (and a black tile +
    cyan-stroke variant for dark contexts).
  - The fan endpoints **graduate cyan → bright** (`#0E7490 → #0891B2 → #22D3EE`) — depth + a built-in
    motion cue. The mark animates in the hero (one node bursts into N).
- **Colour — dominant white + black, single dark-cyan accent:**
  - Ink / black: `#0A0A0B`. Paper / white: `#FFFFFF`, soft `#F6F8F9`.
  - Accent dark cyan: `#0E7490` (primary), `#0891B2` (cyan-600), `#22D3EE` (bright, motion/glow only).
  - Hairlines `#E6E8EB`. No other hues; cyan is the only colour.
  - **Sections alternate white "editorial" ↔ black "cinematic" full-screen moments** for rhythm and
    contrast (this is how the white+black dominance reads as premium).
- **Typography:** **Space Grotesk** (display / headings, techy geometric), **Inter** (body/UI),
  **IBM Plex Mono** (eyebrow/labels/stats). Loaded via `<link>`. Deliberately distinct from
  1pay2link's Clash Display so the brands feel related but not identical.
- **Cards:** near-flat (4px radius), hairline borders — consistent with the 1pay2link family feel.

## 3. Tech approach (approved: "SSR content + cinematic enhancement layer")

Server-rendered, indexable, bilingual content as the foundation; the cinematic layer is progressive
enhancement mounted client-side.

- **Framework:** Next.js 15.5 (App Router, SSR/SSG) · React 19 · TypeScript **5.7 (pinned**, as in
  1pay2link — TS 6 broke CSS side-effect imports; ship `global.d.ts` with `declare module "*.css"`).
- **Styling:** Tailwind CSS **v4** (`@theme` tokens; use `bg-linear-*`, not `bg-gradient-*`).
- **Motion stack:**
  - **Lenis** — smooth scroll (the cinematic "weight").
  - **GSAP + ScrollTrigger** (now free) — pin + scrub the full-screen scrollytelling sequences.
  - **Framer Motion 12** — component reveals / micro-interactions.
  - **WebGL hero** — **OGL** (preferred, ~tiny) or Three.js — the "1 → N" particle/network burst.
    Lazy-loaded, client-only, never blocks content.
  - **lucide-react** — icons.
- **"Scroll-jacked" clarification:** we do **pinned, scroll-scrubbed** sections (the section locks
  while its animation plays with scroll progress), **not** native-scroll hijacking. Same cinematic
  feel, but real DOM content stays present and indexable.
- **Fallbacks (required):** honor `prefers-reduced-motion` (swap scrubbed sequences for simple
  fades, freeze WebGL to a static frame); on small screens / touch, simplify or disable pinning and
  drop heavy WebGL to a lightweight canvas or static SVG. Content is identical across all states.

## 4. Sitemap & i18n

Locale-routed, mirroring 1pay2link: **EN = root**, **ID = `/id/*`** (server-rendered, indexable,
hreflang + canonical, both in sitemap).

| Page | EN | ID |
|---|---|---|
| Home (cinematic spine) | `/` | `/id` |
| Solutions | `/solutions` | `/id/solutions` |
| Industries | `/industries` | `/id/industries` |
| Company | `/company` | `/id/company` |
| Contact | `/contact` | `/id/contact` |

- Copy in `lib/dictionary.ts` (`en` + `id`, `Dict = typeof en`). Provider + `localize()` helper in
  `lib/i18n.tsx`. Route pages are thin server wrappers rendering a `LocaleShell` (provider + Nav +
  Footer); page bodies live in `components/pages/*Content.tsx`.
- `middleware.ts` redirects Indonesian visitors (`cf-ipcountry` / `x-vercel-ip-country`, or `id`
  Accept-Language) from `/` to `/id`; a sticky `NEXT_LOCALE` cookie (nav EN/ID switcher) always wins.
- Code/tech terms stay English.

## 5. Home — cinematic spine (each section = one animation beat)

1. **Hero** (full-screen, black) — WebGL: a single glowing node **bursts/fans into N nodes** forming
   a living network that settles into the fan mark. Headline "One idea. N executions.", two CTAs
   (Start a project → Contact; See solutions → Solutions), scroll cue.
2. **The 1 → N thesis** (pinned, scrubbed) — one "idea" travels a pipeline and **multiplies** into
   many "executions"; the logo motif at full screen with scroll-driven progress.
3. **Solutions pillars (4)** — AI-Enabled Solutions · Digital Transformation · Automation & Workflow
   · Enterprise Professional Solutions. Staggered/horizontal reveal; each pillar has a **custom
   animated SVG infographic**.
4. **How we execute** (pinned, horizontal scrub) — **Idea → Blueprint → Build → Execute → Scale**,
   a five-step timeline that scrubs with scroll.
5. **AI capability mesh** — an animated agent/neural-network infographic (models, agents, data,
   orchestration) on black.
6. **Industries** — responsive grid that reveals on scroll (Finance, Retail/Commerce, Healthcare,
   Logistics, Public sector, SaaS).
7. **Impact metrics** — scroll-triggered counters (e.g. "N× faster delivery", "% workflows
   automated", "1 platform"). Figures flagged *indicative* until real numbers exist.
8. **The 1nx family** — 1pay2link · 1ncall · 1nflow · termssh, with one-line descriptions + links.
9. **CTA closer** (full-screen, black) → Contact.

## 6. Other pages

- **Solutions** — deep-dive on the four pillars: for each, the problem, what 1nx does, the AI/automation
  angle, an infographic, and representative outcomes. Anchor links from Home pillars.
- **Industries** — per-sector framing (challenges → 1nx approach → example executions).
- **Company** — who 1nx is, the "1 → N" operating philosophy, the product family, values, and an
  approach/method recap. (No team bios until provided.)
- **Contact** — a real, validated **contact form** (form-only handler, like 1pay2link:
  `app/api/contact/route.ts`, server-validates, logs the enquiry; swap for email/CRM later) + direct
  email and "what happens next".

## 7. Custom infographics (hand-built animated SVG/canvas)

`components/graphics/`: **HeroBurst** (WebGL 1→N), **OneToNFlow** (pinned thesis), four **pillar
infographics** (AIEnabled, Transformation, AutomationFlow, EnterprisePro), **ExecutionTimeline**
(Idea→Scale), **CapabilityMesh** (agent/neural net), **ImpactCounters**, **FamilyConstellation**
(the 1nx product family as connected nodes). All respect reduced-motion.

## 8. SEO

Per-page `metadata` (title template, description, canonical), Open Graph + Twitter, **JSON-LD**
(`Organization` for 1nx + `WebSite`; `Service`/`BreadcrumbList` where relevant) in the layout;
`app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`, dynamic `app/opengraph-image.tsx`. Absolute
URLs via `NEXT_PUBLIC_SITE_URL` (default `https://1nx.io`).

## 9. Performance & accessibility

- SSR/SSG content; WebGL and GSAP code-split and lazy. Target good Core Web Vitals despite the motion.
- `prefers-reduced-motion` and mobile fallbacks are first-class, not afterthoughts.
- Keyboard-navigable; pinned sections never trap focus or block scrolling out.
- Semantic headings; the cinematic layer is decorative over real content.

## 10. Out of scope (follow-ons, not this spec)

- Deployment (can later reuse the 1pay2link k3s + GitLab pattern).
- Final marketing copy polish and real metrics/case studies.
- Privacy Policy page (pair with a later Terms/Privacy pass).
- Team bios / careers.

## 11. Assumptions

- 1nx is the parent brand of the existing 1ncall product family; cross-linking to those products is
  desired.
- Brand name renders lowercase **`1nx`**; domain `1nx.io`.
- No backend beyond the form handler in this phase.
