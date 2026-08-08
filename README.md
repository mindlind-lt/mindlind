# Mindlind

Website of the Mindlind Werbeagentur — a Next.js 16 App Router site with an
R3F/Spline-driven visual layer.

## Requirements

- Node.js 20.9+ (developed on 22)
- npm

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:3000.

## Scripts

| Script              | What it does                                     |
| ------------------- | ------------------------------------------------ |
| `npm run dev`       | Dev server (Turbopack)                           |
| `npm run build`     | Production build                                 |
| `npm start`         | Serve the production build                       |
| `npm run lint`      | ESLint (flat config, `eslint-config-next`)       |
| `npm run typecheck` | `tsc --noEmit`                                   |

## Environment

| Variable               | Default                | Purpose                                              |
| ---------------------- | ---------------------- | ---------------------------------------------------- |
| `NEXT_PUBLIC_SITE_URL` | `https://mindlind.de`  | Canonical origin for canonicals, OG URLs and sitemap |

Set it on preview/staging deployments so those environments don't emit
canonical URLs pointing at production.

## Project layout

```
app/                 App Router routes
  layout.tsx         Root layout: fonts, chrome, site-wide metadata
  sitemap.ts         Generated from lib/site.ts
  robots.ts          Generated from lib/site.ts
  opengraph-image.tsx  1200×630 social card, rendered with next/og
  error.tsx          Route-level error boundary
  global-error.tsx   Root-layout error boundary (renders its own document)
  not-found.tsx      404
components/          UI, split by feature; canvasui/ holds the R3F pieces
lib/site.ts          Site identity + the route registry (SEO source of truth)
lib/metadata.ts      Builds a page's Metadata from that registry
public/              Static assets served as-is
```

## Cache Components

`cacheComponents: true` is enabled in `next.config.ts`. Every route currently
prerenders as a fully static shell with no opt-outs. If you add data fetching,
Next will surface an instant-navigation insight in the dev overlay — resolve it
by caching the data with `use cache` or wrapping it in `<Suspense>` rather than
reaching for `export const instant = false`.

## Adding a route

1. Create the route under `app/`.
2. Add an entry to `routes` in `lib/site.ts` (title, description, published).
3. Export its metadata: `export const metadata = buildMetadata("/your-path")`.

Sitemap, robots and social cards pick it up from there. Routes with
`published: false` are marked `noindex` and left out of the sitemap.
