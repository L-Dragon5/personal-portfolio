# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview
Joseph Oh's personal portfolio (joseph-oh.com) — a single-page site built with **Vite + React 19 + TypeScript**, styled with **Tailwind v4 + shadcn/ui**, animated with **React Bits** + **Motion**. Tooled with **Biome** (lint + format) and run with **Bun**. Deployed as a static SPA on Vercel (`dist/` output).

## Commands
- `bun dev` — Vite dev server at http://localhost:5173
- `bun run build` — type-check (`tsc -b`) then production build to `dist/`
- `bun run preview` — serve the built output
- `bun run lint` — Biome check (lint + format verify). Use `bun run lint:fix` to apply safe fixes.
- `bun run format` — Biome format-write

Use Node v24 LTS (`.nvmrc`). There is **no test suite** — verify changes by running the app (see Verification).

## Architecture

Single page composed top-to-bottom in `src/App.tsx`: `Nav` + `Hero → About → Experience → Skills → Projects → Contact` + `Footer`. Section components live in `src/components/sections/`.

### Content is data-driven — edit data, not JSX
All copy lives in two typed files; the section components just render them:
- **`src/data/resume.ts`** — `profile` (name, role, contact, résumé URL, bio), `experience` (timeline roles), `skills` (grouped chips), `techMarquee` (flat list for the Skills LogoLoop), `education`. **This is the source of truth for the bio/experience/skills sections** — update here, not in the components.
- **`src/data/projects.ts`** — the featured projects array (`Project[]`: name, tagline, stack, repoUrl, liveUrl?, accent color, image?, draft?). Adding/removing a project = editing this array. Cards with an imported `image` show a screenshot; otherwise they render an accent-gradient banner. `draft: true` shows a "details soon" badge.
  - **FES** is a placeholder pending the private `The-Circle-of-Code/fes-web` repo (fill once `gh` is authed). Do **not** reference `fesapp.net` or the retired `L-Dragon5/fan-event-scheduler` repo.

### shadcn/ui + React Bits
- `components.json` configures shadcn (Vite, TS, `@` alias, base color neutral) **and** registers the React Bits registry under `@react-bits` (`https://reactbits.dev/r/{name}.json`).
- Add shadcn primitives: `bunx --bun shadcn@latest add <name>` → lands in `src/components/ui/`.
- Add React Bits components: `bunx --bun shadcn@latest add @react-bits/<Name>-TS-TW` → these are placed in **`src/components/reactbits/`** (Aurora, GradientText, SplitText, LogoLoop). They pull peer deps (`ogl`, `gsap`/`@gsap/react`, `motion`).
- **Vendor folders (`reactbits/`, `ui/`) have linting disabled** via a `biome.json` override — they're third-party source. Don't hand-format them to satisfy Biome; the override handles it.

### Styling
- Tailwind v4 via `@tailwindcss/vite`; the theme is defined in **`src/index.css`** using `@theme inline` over CSS variables (no `tailwind.config.js`). Dark canvas + a playful multi-color accent ramp (`--coral/--pink/--amber/--cyan/--violet/--lime`). Custom `text-gradient` utility for the rainbow headings.
- Fonts loaded via Google Fonts `<link>` in `index.html`: **Bricolage Grotesque** (display), **Outfit** (body), **JetBrains Mono** (labels/code).
- Biome does **not** lint/format `index.css` (its CSS parser can't read Tailwind v4 at-rules); `*.css` is excluded from `files.includes`.
- `cn()` (`src/lib/utils.ts`) merges class names. Follow the shadcn conventions: `className` for layout only, semantic color tokens (`bg-card`, `text-muted-foreground`), `gap-*` not `space-*`, `size-*` for equal dims.

### Animation
- `src/components/Reveal.tsx` — shared scroll-reveal wrapper (Motion `whileInView`, respects `prefers-reduced-motion`). Used by `Section` and most blocks. NOTE: Playwright **full-page** screenshots leave below-the-fold reveals at opacity 0 (IntersectionObserver doesn't fire during synthetic capture) — screenshot per-section viewport instead.
- Hero uses the OGL `Aurora` background + `GradientText`/`SplitText`.

## Verification
1. `bun run lint` and `bun run build` both pass clean.
2. `bun dev`, then drive with Playwright MCP per-section (`/#about`, `/#work`, `/#contact`) — confirm sections render, project links resolve, and the résumé link points to the current Google Doc. Avoid relying on a single full-page screenshot (reveal quirk above).
