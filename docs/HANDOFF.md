# 1nx.io — handoff & operations

Everything needed to continue this project from a cold start. Pair with `README.md`
(developer basics), `docs/superpowers/specs/2026-06-25-1nx-website-design.md` (design rationale)
and `docs/superpowers/plans/2026-06-25-1nx-website.md` (build plan).

---

## 1. What this is

The marketing website for **1nx** (`1nx.io`) — an AI-tech and business-transformation company and the
parent brand over the product family (**1pay2link, 1ncall, 1nflow, termssh**).

- **Slogan:** "One idea. N executions." (the name encodes 1 → n via x).
- **Look:** monochrome **dark** — white / black / gray only, no hue. Emphasis is brightness, not color.
- **Signature:** the home page is a **full-screen hero with no nav bar** (nav fades in after you scroll
  past it); a live "1 → N" particle network is the recurring motif.

## 2. Stack

- Next.js 15.5 (App Router) · React 19 · TypeScript **5.7 (pinned** — TS 6 broke CSS side-effect
  imports; `global.d.ts` declares `*.css`)
- Tailwind CSS **v4** (`@theme` tokens; use `bg-linear-*`, not `bg-gradient-*`)
- Motion: **Lenis** (smooth scroll) · **Framer Motion** (reveals + scroll-scrubbed `ScrollStage`) ·
  **Canvas 2D** heroes (`HeroBurst`, `ProductConstellation`). All motion honours `prefers-reduced-motion`.
- **Vitest** for logic tests (localize, middleware, contact validation)
- Fonts via `<link>`: Space Grotesk (display) · Inter (body) · IBM Plex Mono (labels)

> Engineering note: the hero uses Canvas 2D (not WebGL/OGL) and Framer Motion scroll utilities
> (not GSAP) — chosen for reliability + screenshot-verifiability with the same cinematic result.
> `gsap`/`ogl` are still in `package.json` but unused.

## 3. Identity (final)

- **Monochrome dark** tokens in `app/globals.css` `@theme`: bg `#0a0a0b`, soft `#121214`, fg white,
  muted/faint grays, `--color-accent` = white. `.section-dark` = pure-black band. White primary
  buttons (black text), dark cards, `.gradient-text` = white→gray clip, dark form inputs.
- **Logo** = the "fan" mark (one node → N) + `1nx` wordmark, monochrome white/gray
  (`components/site/Logo.tsx`, `app/icon.svg`). Source/renders in `brand/`.

## 4. Structure

- `app/` — routes. EN at root, **ID mirrored under `/id/*`** (server-rendered, hreflang + canonical,
  in sitemap). Thin route wrappers render `LocaleShell` (provider + Nav + Footer); bodies in
  `components/pages/*Content.tsx`.
- `lib/dictionary.ts` — all EN + ID copy (`Dict = typeof en`), incl. `family.items` (product copy).
  `lib/i18n.tsx` — provider + `localize()`. `lib/locale.ts` — `decideLocale()` (used by `middleware.ts`).
  `lib/site.ts` — `SITE_URL`, `FAMILY` (name/href/motif).
- `components/motion/` — `SmoothScroll` (Lenis), `ScrollStage` (pinned scroll-scrub).
- `components/graphics/` — `HeroBurst`, `OneToNFlow`, `ExecutionTimeline`, `ImpactCounters`,
  `ProductConstellation`, `ProductMotifs` (pay/msg/flow/term).
- `components/site/` — `Logo`, `Nav` (fixed; hidden over the home hero via `isHome` + spacer on inner
  pages), `Footer`, `LanguageSwitcher`, `LocaleShell`, `ProductCard`.

## 5. Pages

| Page | EN | ID | Notes |
|---|---|---|---|
| Home | `/` | `/id` | Full-screen hero (no nav) → 1→N thesis (pinned) → pillars → execution timeline → capabilities → industries → impact (count-up) → products teaser → CTA |
| Solutions | `/solutions` | `/id/solutions` | 4 pillar deep-dives, anchors `#ai/#transformation/#automation/#enterprise` |
| Products | `/products` | `/id/products` | Full-screen `ProductConstellation` hero + one full-screen section per product with a bespoke motif |
| Industries | `/industries` | `/id/industries` | sector grid |
| Company | `/company` | `/id/company` | philosophy + values + products |
| Contact | `/contact` | `/id/contact` | validated form → `/api/contact` |

Top nav: **Solutions · Products · Industries · Company** + "Talk to us" (ghost) + "Bring an idea" (primary, → /contact).

## 6. Products (the family — real domains)

Defined in `lib/site.ts` `FAMILY` (name/href/motif); **copy localized** in `t.family.items` (EN/ID, same order).

- **1pay2link** → https://1pay2link.com — payment orchestration (Indonesia). motif `pay`.
- **1ncall** → https://1ncall.com — workflow automation + omnichannel messaging (WhatsApp/SMS/voice), AI. motif `msg`.
- **1nflow** → **https://1nflow.ai** — banking/lending software (LOS, appraisal, collections, treasury,
  KYC; BPMN/DMN engine + AI credit narrative). motif `flow`.
- **termssh** → https://termssh.com — secure SSH + zero-knowledge encrypted vault. motif `term`.

## 7. SEO & contact

- Per-page metadata + canonical/hreflang; `app/robots.ts`, `app/sitemap.ts`, `app/manifest.ts`,
  dynamic `app/opengraph-image.tsx`, JSON-LD (`Organization` + `WebSite`) in the layout.
- `NEXT_PUBLIC_SITE_URL` drives absolute URLs (default `https://1nx.io`).
- `/contact` → `app/api/contact/route.ts` (form-only; validation in `lib/contact.ts`, logged to server
  logs / Vercel function logs). Swap for email/CRM later.

## 8. Repo & deployment — Vercel from GitHub

- **GitHub (public, deploy source):** `git@github.com:sgultom26/1nx-website.git` → `origin`, branch `main`.
  Public because the chosen path is "full source → public GitHub → Vercel build". No secrets are committed.
- **Deploy = Vercel building from GitHub.** Every push to `main` auto-deploys.
  Keeps all features (SSR, `/api/contact`, middleware geo-redirect, dynamic OG).
- **One-time Vercel setup (dashboard):**
  1. Add New → Project → Import `sgultom26/1nx-website` (auto-detects Next.js; default build). Deploy.
  2. Settings → Domains → add `1nx.io` (+ `www.1nx.io`); set the DNS records Vercel shows at the
     registrar (apex `A 76.76.21.21` or Vercel's ALIAS/CNAME; `www` → `cname.vercel-dns.com`).
  3. (Optional) env `NEXT_PUBLIC_SITE_URL=https://1nx.io` — already the default.
- **Keeping source private instead:** Vercel free's public-repo limit is only for the *Git integration*.
  You can keep source private and deploy with the **Vercel CLI** from GitLab CI: `vercel pull`,
  `vercel build`, `vercel deploy --prebuilt --prod` with a `VERCEL_TOKEN` + project IDs as CI variables.
  No GitHub needed. (Not currently set up.)
- **No GitLab remote** is configured yet. To add a private mirror: `git remote add gitlab <url> && git push gitlab main`.

## 9. Common operations

```bash
npm install
npm run dev            # http://localhost:3000  (don't run alongside `npm start` — shared .next)
npm run build && npm start
npm test               # vitest: localize · decideLocale · validateContact
```
Verify a route's copy after build: `grep -o "<string>" .next/server/app/<route>.html`.
If CSS 404s after switching build modes, `rm -rf .next && npm run build` (stale-hash gotcha).

## 10. Status & follow-ons (2026-06-26)

- ✅ Built, monochrome dark, full-screen home hero, bilingual EN/ID (incl. product copy), dedicated
  animated Products page, security headers, `output:standalone` removed. Build green; 10/10 tests.
- ✅ Pushed to GitHub `main`. ⏳ **User to connect Vercel + point `1nx.io` DNS** (see §8).
- Ideas: real impact metrics (currently "indicative"); Privacy/Terms pages; per-pillar infographics on
  Solutions; scroll-scrubbed entrances on the product sections; optional GitLab private mirror.
