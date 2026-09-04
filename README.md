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
| `npm run build`     | Static export into `out/`                        |
| `npm start`         | Serve `out/` locally the way the host will       |
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

## Deployment — static export

The site is a **static export**: `next build` writes a complete site to `out/`
and nothing runs on the server afterwards. Upload the *contents* of `out/` to
the host's web root (`public_html`, `httpdocs`, `www` — whatever the panel
calls it). Nothing else from this repo goes on the server: no `node_modules`,
no Node runtime.

```bash
npm ci
npm run build     # -> out/
npm start         # check http://localhost:3000 before uploading
```

`npm start` serves `out/` through `scripts/serve-export.mjs`, which reproduces
the three host rules the export depends on (clean URLs, the brotli scenes, the
extensionless OG image). If a page is right there, it will be right on the
host.

Upload with whatever the host offers. Over SFTP/rsync:

```bash
rsync -avz --delete out/ user@host:/home/user/public_html/
```

`--delete` matters: the JS filenames are content-hashed, so without it every
deploy leaves the previous build's chunks behind.

### Server configuration

`public/.htaccess` is copied into `out/` by the build and carries every header
the old `next.config.ts` `headers()` block used to send. **It is required, not
an optimisation.** Without it:

- every page except the homepage answers 403 or 404 (the export writes both
  `agency.html` and an `agency/` directory of navigation payloads, and Apache
  picks the directory);
- the Spline scenes never load (the files in `/scenes` are brotli streams on
  disk and need `Content-Encoding: br`);
- link previews come out blank (`/opengraph-image` is a PNG with no extension).

Apache and LiteSpeed — which is what shared hosting nearly always runs — read
it automatically. Confirm after uploading:

```bash
curl -sI https://<domain>/agency | head -1                      # 200, not 403
curl -sI https://<domain>/scenes/<file>.splinecode              # br + json
curl -sI https://<domain>/opengraph-image | grep -i content-type # image/png
```

If `.htaccess` has no effect, the host has `AllowOverride None` — ask support
to enable it for the account.

On nginx, `.htaccess` is ignored and the equivalent belongs in the server
block:

```nginx
root /var/www/mindlind/out;
index index.html;
error_page 404 /404.html;

# Clean URLs: try the .html file before the payload directory.
location / {
    try_files $uri $uri.html $uri/index.html =404;
}

# Scenes are brotli on disk; hand them over as-is.
location ~ \.splinecode$ {
    types { }
    default_type application/json;
    add_header Content-Encoding br;
    add_header Cache-Control "public, max-age=31536000, immutable";
    gzip off;
}

location = /opengraph-image {
    types { }
    default_type image/png;
}

location /_next/static/ {
    add_header Cache-Control "public, max-age=31536000, immutable";
}

# RSC navigation payloads must not be indexed (see public/.htaccess).
location ~ "^(?!.*/(llms|robots)\.txt$).*\.txt$" {
    add_header X-Robots-Tag noindex;
}
```

### What the static export gives up

Documented in the header comment of `next.config.ts`. In short: no
`cacheComponents`/PPR (it cannot be enabled in export mode), no image
optimisation (`/_next/image` is a server endpoint — `<Image>` now serves the
original file from `public/`, so keep source images sized sensibly), and no
redirects, rewrites, ISR, server actions, or request-reading route handlers.
The generated routes (`sitemap.ts`, `robots.ts`, `llms.txt/route.ts`,
`opengraph-image.tsx`) each carry `export const dynamic = "force-static"` for
that reason.

## Adding a route

1. Create the route under `app/`.
2. Add an entry to `routes` in `lib/site.ts` (title, description, published).
3. Export its metadata: `export const metadata = buildMetadata("/your-path")`.

Sitemap, robots and social cards pick it up from there. Routes with
`published: false` are marked `noindex` and left out of the sitemap.
