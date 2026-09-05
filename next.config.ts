import type { NextConfig } from "next";

/**
 * STATIC EXPORT
 *
 * `next build` writes a self-contained site to `out/` — HTML, CSS, JS and
 * everything from public/ — which is what gets uploaded to the shared host.
 * There is no Node process in production, so nothing here can run at request
 * time. The consequences, all of them deliberate:
 *
 *  - `cacheComponents` is OFF. It implies PPR, and PPR cannot be enabled in
 *    export mode ("Invariant: PPR cannot be enabled in export mode"). With
 *    every route prerendered at build time there is no dynamic half for PPR to
 *    stream anyway. It also means no `use cache` directive: the generated
 *    routes use `export const dynamic = "force-static"` instead (app/sitemap.ts,
 *    app/robots.ts, app/llms.txt/route.ts, app/opengraph-image.tsx).
 *  - `images.unoptimized` is required: /_next/image is a server endpoint. Every
 *    <Image> now serves the original file from public/, so keep source images
 *    reasonably sized.
 *  - `headers()` no longer runs in production. Static hosts serve headers from
 *    their own config — ours live in `public/.htaccess`, which Apache/LiteSpeed
 *    (what shared hosting almost always runs) reads from the uploaded
 *    directory. That file is the direct translation of the headers this block
 *    used to return, and it is NOT optional: the Spline scenes are brotli
 *    streams on disk and are unreadable without the Content-Encoding it sets.
 *    The one place it still has to run is `next dev`, which serves public/
 *    itself and never reads .htaccess — see the `headers()` below.
 *
 * Also unavailable, none of which this site uses: redirects/rewrites, proxy,
 * ISR, server actions, cookies()/headers(), and route handlers that read the
 * request.
 */
const nextConfig: NextConfig = {
  output: "export",
  // Dev only. `next dev` serves public/ from its own handler and never sees
  // public/.htaccess, so without this the .splinecode files reach the browser
  // as raw brotli and @splinetool/runtime dies parsing them with "Data read,
  // but end of buffer not reached". `next build` ignores headers() under
  // `output: "export"` (and warns about it), hence the guard — production gets
  // the equivalent lines from .htaccess.
  ...(process.env.NODE_ENV === "development"
    ? {
        async headers() {
          return [
            {
              source: "/scenes/:file+",
              headers: [
                { key: "Content-Type", value: "application/json" },
                { key: "Content-Encoding", value: "br" },
                { key: "Vary", value: "Accept-Encoding" },
              ],
            },
          ];
        },
      }
    : {}),
  images: {
    unoptimized: true,
  },
  turbopack: {
    resolveAlias: {
      // Next's client entry unconditionally imports its polyfill bundle
      // (`next/dist/build/polyfills/polyfill-module`), which shims
      // String.prototype.trimStart/trimEnd, Array.prototype.at/flat/flatMap,
      // Object.fromEntries/hasOwn and Symbol.prototype.description. Every one
      // of those is native well below Next 16's own browser baseline
      // (Chrome 111+, Safari 16.4+), so it is dead weight that Lighthouse
      // reports under "Legacy JavaScript". There is no config flag for it, and
      // the import is a hardcoded relative path — hence the alias.
      //
      // Fails open: if Next moves the file, the alias stops matching and the
      // polyfills simply come back. Re-check with `npm run audit:legacy-js`.
      "../build/polyfills/polyfill-module": "./lib/empty-module.js",
    },
  },
};

export default nextConfig;
