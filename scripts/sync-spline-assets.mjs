/**
 * Downloads the Spline scenes and pins the runtime's wasm assets locally.
 *
 * WHY THIS EXISTS
 *
 * Scenes used to be fetched straight from prod.spline.design at render time.
 * Two problems with that:
 *
 *  1. Spline's CDN serves .splinecode completely uncompressed — it ignores
 *     `Accept-Encoding: br, gzip` — and sends no Cache-Control at all. The
 *     homepage hero alone was 10.09 MB on the wire, every visit.
 *  2. It transmitted every visitor's IP to Spline, Inc. (USA), which forced
 *     the whole "Externe Medien" consent category. Visitors who declined got
 *     a still frame instead of the scene, and the transfer leaned on Art. 49
 *     Abs. 1 lit. a DSGVO as a standing basis, which the EDPB's Guidelines
 *     2/2018 say derogations are not for.
 *
 * Serving the same bytes from our own origin fixes both. Vercel's edge is in
 * fra1, the same city Spline's CloudFront was answering from, so there is no
 * latency trade.
 *
 * WHAT IT WRITES
 *
 *  - public/scenes/<slug>-<hash>.splinecode — brotli-compressed scene bodies.
 *    The bytes on disk are compressed; next.config.ts declares
 *    `Content-Encoding: br` for this directory so the browser inflates them.
 *    The name carries a hash of the RAW scene so it can be cached immutably
 *    and a re-export automatically busts it.
 *  - public/spline-wasm/ — the Draco decoder (see PINNING below).
 *  - lib/spline-scenes.ts — the generated path manifest the components import.
 *
 * All three are committed. This script is not part of `next build`: it is run
 * by hand after re-publishing a scene in the Spline editor, precisely so a
 * deploy can never depend on Spline's CDN being up.
 *
 *     npm run sync:spline
 *
 * PINNING THE WASM
 *
 * @splinetool/runtime has hardcoded fallbacks to unpkg.com (ui.wasm,
 * navmesh.wasm, process.wasm, boolean.wasm) and to gstatic.com (the Draco
 * decoder). They fire only when a scene actually uses that feature — none of
 * ours do today, which is exactly why this is worth pinning now: with the
 * consent gate gone there would be nothing in front of a US request that a
 * future re-export silently introduces.
 *
 * The runtime takes ONE `wasmPath` and looks for all of them under it
 * (`${wasmPath}/ui.wasm`, and DRACOLoader.setDecoderPath(`${wasmPath}/`)).
 * We ship only the Draco decoder there — 760 KB, and a compressed mesh is the
 * realistic way a re-export starts needing one of these. The other three are
 * deliberately absent: ui.wasm alone is 6.2 MB of Skia for a feature no scene
 * uses. If a scene ever needs one it will 404 against our own origin, which
 * is a loud, visible failure at the right moment rather than a silent
 * reintroduction of a third-country request. To add them, drop the matching
 * build from `@splinetool/<name>-wasm@<runtime version>` into
 * public/spline-wasm/.
 */
import { createHash } from "node:crypto";
import { brotliCompressSync, constants as zlibConstants } from "node:zlib";
import {
  copyFileSync,
  existsSync,
  mkdirSync,
  readdirSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import path from "node:path";

/**
 * Scene ids from the Spline editor's export panel. The slug is ours and is
 * what the components refer to, so re-publishing a scene under a new id is a
 * one-line change here rather than a hunt through components/.
 */
const SCENES = [
  { slug: "medusa", id: "qDyNyDswFMuYj9So", note: "homepage hero" },
  { slug: "agency-2", id: "kxUSZ5qeo7bMShUO", note: "agency page" },
  { slug: "cubes", id: "pTGhXiLspT3Mjuvr", note: "services" },
  { slug: "projects-hero", id: "zCxRO74obPaANH83", note: "projects hero" },
  { slug: "torus", id: "o7n-fvcgPIbHv08W", note: "decorative torus" },
];

const SCENE_DIR = path.join("public", "scenes");
const WASM_DIR = path.join("public", "spline-wasm");
const MANIFEST = path.join("lib", "spline-scenes.ts");

/** Same decoder build three.js ships, and the same one public/draco/gltf holds. */
const DRACO_SRC = path.join(
  "node_modules",
  "three",
  "examples",
  "jsm",
  "libs",
  "draco",
  "gltf",
);
const DRACO_FILES = [
  "draco_decoder.js",
  "draco_decoder.wasm",
  "draco_wasm_wrapper.js",
];

const kb = (n) => `${(n / 1024).toFixed(0)} KB`;

async function fetchScene({ slug, id }) {
  const url = `https://prod.spline.design/${id}/scene.splinecode`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`${slug}: ${url} responded ${response.status}`);
  }
  const raw = Buffer.from(await response.arrayBuffer());
  if (raw.length === 0) throw new Error(`${slug}: empty body from ${url}`);
  return raw;
}

function compress(raw) {
  return brotliCompressSync(raw, {
    params: {
      // Quality 11 is slow, but this runs by hand a handful of times a year
      // and the result is what every visitor downloads. Vercel's on-the-fly
      // compression would use a much lower quality even if it did compress
      // this content type, which it does not.
      [zlibConstants.BROTLI_PARAM_QUALITY]: 11,
      [zlibConstants.BROTLI_PARAM_SIZE_HINT]: raw.length,
    },
  });
}

/** Remove older hashed builds of a slug so stale scenes do not pile up. */
function pruneStale(slug, keep) {
  for (const entry of readdirSync(SCENE_DIR)) {
    if (entry.startsWith(`${slug}-`) && entry !== keep) {
      rmSync(path.join(SCENE_DIR, entry));
      console.log(`  pruned ${entry}`);
    }
  }
}

function writeManifest(entries) {
  const lines = entries
    .map(({ slug, file, note }) => `  /** ${note} */\n  '${slug}': '/scenes/${file}',`)
    .join("\n");

  writeFileSync(
    MANIFEST,
    `// Generated by scripts/sync-spline-assets.mjs — do not edit by hand.
// Run \`npm run sync:spline\` after re-publishing a scene in the Spline editor.

/**
 * Local paths to the self-hosted Spline scenes. The filenames carry a hash of
 * the scene contents, so next.config.ts can cache them immutably.
 */
export const SPLINE_SCENES = {
${lines}
} as const;

export type SplineSceneName = keyof typeof SPLINE_SCENES;

/**
 * Where @splinetool/runtime looks for its wasm assets. Setting this keeps the
 * runtime from falling back to unpkg.com / gstatic.com — see the header of
 * scripts/sync-spline-assets.mjs for what is and is not shipped there.
 */
export const SPLINE_WASM_PATH = '/spline-wasm';
`,
  );
}

async function main() {
  mkdirSync(SCENE_DIR, { recursive: true });
  mkdirSync(WASM_DIR, { recursive: true });

  if (!existsSync(DRACO_SRC)) {
    throw new Error(`Draco decoder not found at ${DRACO_SRC} — is three installed?`);
  }

  console.log("Scenes");
  const entries = [];
  let rawTotal = 0;
  let compressedTotal = 0;

  for (const scene of SCENES) {
    const raw = await fetchScene(scene);
    const compressed = compress(raw);
    const hash = createHash("sha256").update(raw).digest("hex").slice(0, 8);
    const file = `${scene.slug}-${hash}.splinecode`;

    writeFileSync(path.join(SCENE_DIR, file), compressed);
    pruneStale(scene.slug, file);

    rawTotal += raw.length;
    compressedTotal += compressed.length;
    const saved = (100 * (1 - compressed.length / raw.length)).toFixed(0);
    console.log(
      `  ${file.padEnd(34)} ${kb(raw.length).padStart(9)} -> ${kb(compressed.length).padStart(9)}  (-${saved}%)`,
    );

    entries.push({ ...scene, file });
  }

  console.log(
    `  ${"total".padEnd(34)} ${kb(rawTotal).padStart(9)} -> ${kb(compressedTotal).padStart(9)}` +
      `  (-${(100 * (1 - compressedTotal / rawTotal)).toFixed(0)}%)`,
  );

  console.log("\nRuntime wasm (Draco decoder)");
  for (const file of DRACO_FILES) {
    copyFileSync(path.join(DRACO_SRC, file), path.join(WASM_DIR, file));
    console.log(`  ${file}`);
  }

  writeManifest(entries);
  console.log(`\nWrote ${MANIFEST}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
