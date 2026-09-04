import { readFile } from "node:fs/promises";
import path from "node:path";

import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

/**
 * `output: "export"` prerenders the generated route behind this file at build
 * time, but it only accepts that opt-in through a route segment config — hence
 * the explicit `force-static` on this and the other generated routes
 * (app/sitemap.ts, app/robots.ts, app/llms.txt/route.ts).
 */
export const dynamic = "force-static";

export const alt = `${siteConfig.legalName} — ${siteConfig.description}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const BRAND = "#0fd680";
const INK = "#17130d";

// Satori only accepts ttf/otf/woff — the woff2 files next to these won't load.
const fontPath = (file: string) =>
  path.join(process.cwd(), "public", "fonts", "space-mono", file);

/**
 * Reading the fonts off disk happens once, at build time: `output: "export"`
 * plus the `force-static` above prerender this card into out/opengraph-image
 * and nothing re-renders it at request time.
 *
 * Base64 rather than raw bytes, kept from when this was a `use cache`
 * function: it costs nothing and keeps the values plain.
 */
async function loadFonts() {
  const [regular, bold] = await Promise.all([
    readFile(fontPath("space-mono-v17-latin-regular.ttf")),
    readFile(fontPath("space-mono-v17-latin-700.ttf")),
  ]);
  return {
    regular: regular.toString("base64"),
    bold: bold.toString("base64"),
  };
}

/** `ImageResponse` wants a real ArrayBuffer, not a pooled Buffer view. */
function decodeFont(base64: string): ArrayBuffer {
  const buf = Buffer.from(base64, "base64");
  return buf.buffer.slice(
    buf.byteOffset,
    buf.byteOffset + buf.byteLength,
  ) as ArrayBuffer;
}

export default async function OpengraphImage() {
  const fonts = await loadFonts();
  const regular = decodeFont(fonts.regular);
  const bold = decodeFont(fonts.bold);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: INK,
          padding: 80,
          fontFamily: "Space Mono",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 28,
              height: 28,
              borderRadius: 999,
              backgroundColor: BRAND,
            }}
          />
          <div style={{ fontSize: 32, color: "#ffffff", fontWeight: 700 }}>
            {siteConfig.name}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
          {/* Satori has no <br> and needs an explicit display on any element
              with more than one child — so each line is its own flex row. */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              color: "#ffffff",
              letterSpacing: "-0.03em",
            }}
          >
            <div style={{ display: "flex" }}>Werbeagentur</div>
            <div style={{ display: "flex" }}>für digitale</div>
            <div style={{ display: "flex", color: BRAND }}>Markenauftritte</div>
          </div>
          <div style={{ fontSize: 28, color: "#a5a09a", lineHeight: 1.4 }}>
            Strategie · Web-Design · UX/UI · Entwicklung
          </div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Space Mono", data: regular, weight: 400, style: "normal" },
        { name: "Space Mono", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
