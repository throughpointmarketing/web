# Frontend Rebuild Implementation Plan

> **For agentic workers:** Execute task-by-task. Steps use checkbox syntax.

**Goal:** Rebuild ThroughPoint Marketing to match the Downloads design while preserving Signal Scan API, quiz, privacy, thank-you, GTM, and SEO.

**Architecture:** Port Tailwind 4 + new UI components from Downloads into the existing `src/` Next.js repo; wire Contact to `/api/signal-scan`; keep quiz logic and restyle; restyle privacy/thank-you.

**Tech Stack:** Next.js 16, React 19, Tailwind 4, motion, lucide-react, Resend, GTM

## Global Constraints

- Keep `/api/signal-scan`, Resend, GTM events, thank-you gate
- Keep AI Signal Scan quiz questions/scoring; restyle only
- Keep `/privacy-policy` route; restyle with new chrome
- Add `/about` and `/services`
- Footer: copyright + Privacy Policy link
- Do not commit `.env.local` or `.pnpm-store`

### Task 1: Tailwind + deps + assets

- [ ] Add Tailwind/postcss deps and config from design
- [ ] Copy logo assets into `public/`
- [ ] Replace `globals.css` with design tokens; keep path aliases `@/*` → `src/*`

### Task 2: Layout chrome

- [ ] Port header/footer/logo/reveal/utils/button into `src/components`
- [ ] Update root `layout.tsx` with new fonts, GTM, header/footer
- [ ] Footer includes copyright + privacy link

### Task 3: Homepage + quiz + contact wiring

- [ ] Port Hero, SignalEconomy, SignalScan, Process
- [ ] Wire Contact to existing API + thank-you + GTM
- [ ] Insert SignalScanQuiz after Signal Scan section; restyle quiz to tokens
- [ ] Update `src/app/page.tsx`

### Task 4: About, Services, privacy, thank-you, sitemap

- [ ] Add About and Services pages
- [ ] Restyle privacy-policy and thank-you
- [ ] Update sitemap with new routes
- [ ] `pnpm build` must pass
