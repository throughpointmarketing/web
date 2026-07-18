# ThroughPoint Marketing frontend rebuild

**Date:** 2026-07-17  
**Status:** Approved for planning  
**Source design:** `/Users/vladtsigler/Downloads/Through-point-marketing folder design/uploads/through-point-marketing-website`

## Goal

Rebuild the live ThroughPoint Marketing website to match the new frontend design while preserving production conversion, legal, and tracking features.

## Decisions (confirmed)

- **Approach:** Adopt the new design stack (Next.js + Tailwind 4 + brand tokens) into the existing `throughpointmarketing/web` repo.
- **Keep:** Signal Scan form + Resend API, AI Signal Scan quiz, GTM/analytics, SEO metadata/sitemap/robots/manifest, thank-you flow.
- **Privacy:** Keep `/privacy-policy` as its own page; restyle to match the new design (header/footer/tokens).
- **Pages:** Homepage + About + Services + privacy + thank-you.

## Architecture

### Stack

- Next.js App Router (existing repo)
- Tailwind CSS 4 + design tokens from the Downloads project
- TypeScript + pnpm
- Preserve existing server routes and env-based secrets

### Routes

| Route | Behavior |
|---|---|
| `/` | New homepage sections |
| `/about` | New About page from design |
| `/services` | New Services page from design |
| `/privacy-policy` | Existing policy content, restyled |
| `/thank-you` | Existing gate/behavior, restyled |
| `/api/signal-scan` | Unchanged server behavior |

### Homepage section order

1. Site header (new)
2. Hero
3. Signal Economy
4. Signal Scan explainer
5. AI Signal Scan quiz (`#ai-signal-quiz`) — existing logic, restyled
6. Process (three steps)
7. Contact form — wired to API
8. Site footer (copyright + Privacy Policy)

## Components & integration

### Bring from Downloads design (adapt into `src/`)

- Layout chrome: `SiteHeader`, `SiteFooter`, `Logo`
- Homepage: `Hero`, `SignalEconomy`, `SignalScan`, `Process`, `Contact`
- About: `PageHero`, `WhyThroughPoint`
- Services page and its section components as used there
- Shared: `Reveal`, UI button helpers, `lib/utils` (`cn`)
- Brand assets/logo into `public/`

### Keep from live site (adapt)

- `SignalScanQuiz` + `lib/signal-scan-quiz.ts` — restyle to navy/coral tokens; do not rewrite scoring logic
- Form submission flow from `LeadForm` — merge into new `Contact` so submit still:
  - `POST /api/signal-scan`
  - fires GTM events
  - redirects to `/thank-you`
- Privacy policy page content
- `lib/site.ts`, analytics helpers, Resend notification helpers
- Existing env vars (`.env.local`)

### Footer requirements

- Copyright: `Copyright {year} ThroughPoint Marketing. All rights reserved.`
- Link: Privacy Policy → `/privacy-policy`
- Nav: Home, Services, About, Contact

## Data flow

1. Optional: user completes AI Signal Quiz → GTM quiz events (start/complete/CTA)
2. User submits Contact form → API validates → Resend emails → thank-you page
3. Privacy page is static; no form

## Error handling

- Contact form: inline error if API fails (preserve current UX)
- Quiz: client-only; no API dependency
- Missing `RESEND_API_KEY`: form fails with clear message; site still renders

## SEO & tracking

- Keep Google Tag Manager integration
- Port/update metadata for `/`, `/about`, `/services`, `/privacy-policy`
- Update sitemap to include About and Services
- Preserve robots/manifest; refresh Open Graph assets if logo/brand assets change
- Keep or adapt JSON-LD where still accurate for homepage content

## Out of scope

- Changing Resend recipient/business rules
- Adding Proof signal question to the quiz
- Cookie consent banner
- Replacing production env secrets
- Committing `.pnpm-store` or the Downloads HTML source file

## Risks & mitigations

| Risk | Mitigation |
|---|---|
| Break form/email | Reuse `/api/signal-scan`; smoke-test submit before push |
| SEO regression | Explicit metadata + sitemap entries for new routes |
| Quiz style drift | Token restyle only; keep question/scoring module |
| Large Tailwind cutover | Verify `pnpm build` and local `pnpm dev` before shipping |

## Implementation sequence

1. Add Tailwind and design dependencies; establish brand tokens
2. Port layout header/footer + public assets
3. Port homepage sections; insert quiz; wire Contact to API
4. Add About and Services pages
5. Restyle privacy and thank-you pages
6. Update sitemap/nav links
7. Local verify (`pnpm build`, form, quiz, privacy link)
8. Commit and push when requested

## Success criteria

- Visual match to Downloads design on home/about/services
- Quiz works and CTA scrolls/links to contact form
- Contact form still emails via Resend and reaches thank-you
- Privacy policy available at `/privacy-policy` with new chrome
- Footer shows copyright + privacy link
- Production build succeeds
