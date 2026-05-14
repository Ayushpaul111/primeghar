# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # start dev server at localhost:3000
npm run build    # production build
npm run lint     # ESLint
```

No test suite is configured.

## Stack

- **Next.js 16.2.5** (App Router) + **React 19** — check `node_modules/next/dist/docs/` for current API; APIs may differ from training data
- **Tailwind CSS v4** — config via PostCSS, no `tailwind.config.*` file; v4 has breaking changes from v3
- **Framer Motion** for all animations
- **TypeScript** strict mode; path alias `@/*` → project root

## Architecture

**Layout structure** (`app/layout.tsx`): A `bg-[#141414]` wrapper holds a fixed `<Header>`, a content area (`bg-[#F7F7F7] rounded-b-3xl`), and a `sticky bottom-0 z-0` footer. The content area scrolls up to reveal the footer beneath it — this is an intentional sticky-reveal pattern.

**Services data** (`app/components/home/services-data.ts`): Single source of truth for all four service definitions (`SERVICES` array). Also exports the `cormorant` font instance (Cormorant Garamond) — import it from here rather than calling `Cormorant_Garamond()` again elsewhere.

**Server/client split**: `ServicesSection` is a server component that passes `SERVICES` and heading JSX as children to `ServicesScrollStack` (a client component). Keep animation-heavy or scroll-driven components as `"use client"`.

**Service pages** live at `app/services/[service-name]/page.tsx`. The four services are: `360-virtual-tour`, `virtual-staging`, `item-removal`, `virtual-renovation`.

## Conventions

- Use `cn()` from `app/lib/utils.ts` (clsx + tailwind-merge) for all conditional class merging.
- Brand colors: `#022b60` (deep blue), `#141414` (dark bg), `#F7F7F7` (light content bg).
- Booking CTA uses cal.com embed via `data-cal-namespace="primeghar"` attributes — do not replace with a plain `<a>` link.
- `ServiceMedia` is a discriminated union (`contentType: "image" | "video"`) — always narrow it before rendering.
