import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },

      // Self-hosted Spline scenes. The files in public/scenes are brotli
      // streams on disk, written by `npm run sync:spline`; these headers are
      // what make them readable.
      //
      // Content-Type matters as much as the encoding: .splinecode resolves to
      // application/octet-stream, which neither Next's compression middleware
      // nor Vercel's edge will compress — so a scene dropped into public/
      // naively would ship the same uncompressed 10 MB Spline's own CDN does.
      // Pre-compressing here sidesteps that entirely and gets brotli quality
      // 11 rather than whatever an on-the-fly compressor picks. The type we
      // declare is the one Spline's CDN declares for the same bytes.
      //
      // Serving br unconditionally is safe against this project's browser
      // baseline (Chrome 111+, Safari 16.4+ — see the turbopack note below);
      // every browser in it accepts brotli over https.
      //
      // Verify after deploy:
      //   curl -sI https://new.mindlind.de/scenes/<file>.splinecode
      // If Vercel ever strips Content-Encoding, drop the pre-compression from
      // the sync script and keep the Content-Type line — the type alone is
      // enough for the edge to compress it.
      {
        source: "/scenes/:file+",
        headers: [
          { key: "Content-Type", value: "application/json" },
          { key: "Content-Encoding", value: "br" },
          { key: "Vary", value: "Accept-Encoding" },
          // Filenames carry a content hash, so a changed scene is a changed URL.
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },

      // Vercel serves everything under public/ as
      // `public, max-age=0, must-revalidate`, so repeat visitors pay a
      // revalidation round-trip per asset. (Its own /_next/static output gets
      // a year + immutable; that treatment does not extend to public/.)
      //
      // These filenames are NOT content-hashed, so `immutable` would strand
      // any image replaced in place. A day of freshness plus a week of
      // stale-while-revalidate gets most of the benefit and still lets a
      // swapped file propagate on its own.
      //
      // `:path+` (one or more), never `:path*`: public/services and the
      // /services ROUTE share a prefix, and with `*` the bare `/services`
      // document matched too — headers run before the filesystem, so the HTML
      // page silently picked up a day-long cache.
      {
        source: "/:dir(images|videos|assets|production|services)/:path+",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=86400, stale-while-revalidate=604800",
          },
        ],
      },

      // Fonts and the Draco/Spline wasm carry their version in the filename or
      // change only with a dependency bump, so they can be cached hard.
      {
        source: "/:dir(fonts|draco|spline-wasm)/:path+",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
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
