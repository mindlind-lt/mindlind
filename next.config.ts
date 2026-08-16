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
