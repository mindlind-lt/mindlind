/**
 * Fails if the client bundle ships polyfills for features that are already
 * native in Next 16's browser baseline (Chrome/Edge/Firefox 111+, Safari 16.4+).
 *
 * This is what Lighthouse reports as "Legacy JavaScript". Run after `next build`.
 *
 * Only chunks referenced by prerendered HTML are checked — lazily loaded
 * vendor chunks (e.g. three.js's WOFF/OpenType text loader, which carries a
 * guarded String.prototype.codePointAt shim) are outside our control and are
 * never part of an initial page load.
 */
import { readdirSync, readFileSync, existsSync } from "node:fs";
import path from "node:path";

const CHUNK_DIR = path.join(".next", "static", "chunks");
const HTML_DIR = path.join(".next", "server", "app");

// Prototype/static patching of features native to the baseline.
const POLYFILL = /(String|Array|Object|Number|Promise|Symbol)\.prototype\.[A-Za-z]+\s*\|\||Object\.(fromEntries|hasOwn)\s*\|\|/g;
// ES5 downlevel helpers from Babel/TypeScript.
const HELPERS =
  /_classCallCheck|_asyncToGenerator|regeneratorRuntime|_toConsumableArray|__awaiter\b|__generator\b|__extends\b/g;

if (!existsSync(CHUNK_DIR)) {
  console.error(`${CHUNK_DIR} not found — run \`npm run build\` first.`);
  process.exit(2);
}

/** Chunk filenames referenced by any prerendered HTML document. */
function referencedChunks() {
  const referenced = new Set();
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith(".html")) {
        const html = readFileSync(full, "utf8");
        for (const m of html.matchAll(/\/_next\/static\/chunks\/([^"']+\.js)/g)) {
          // Skip the legacy bundle: it is served with `nomodule`, so modern
          // browsers never download it.
          referenced.add(m[1]);
        }
      }
    }
  };
  if (existsSync(HTML_DIR)) walk(HTML_DIR);
  return referenced;
}

const nomodule = new Set();
if (existsSync(HTML_DIR)) {
  const walk = (dir) => {
    for (const entry of readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.name.endsWith(".html")) {
        const html = readFileSync(full, "utf8");
        for (const m of html.matchAll(
          /<script[^>]*\/_next\/static\/chunks\/([^"']+\.js)"[^>]*noModule/gi,
        )) {
          nomodule.add(m[1]);
        }
      }
    }
  };
  walk(HTML_DIR);
}

const findings = [];
for (const file of referencedChunks()) {
  if (nomodule.has(file)) continue;
  const full = path.join(CHUNK_DIR, file);
  if (!existsSync(full)) continue;
  const src = readFileSync(full, "utf8");
  const hits = [
    ...new Set([
      ...(src.match(POLYFILL) ?? []),
      ...(src.match(HELPERS) ?? []),
    ]),
  ];
  if (hits.length) findings.push({ file, hits });
}

if (findings.length === 0) {
  console.log("✓ No legacy JavaScript in eagerly loaded client chunks.");
  process.exit(0);
}

console.error("✗ Legacy JavaScript found in client chunks:\n");
for (const { file, hits } of findings) {
  console.error(`  ${file}`);
  for (const hit of hits) console.error(`    - ${hit}`);
}
console.error(
  "\nIf this is Next's own polyfill bundle, the `turbopack.resolveAlias`" +
    "\nentry in next.config.ts has stopped matching — check the path.",
);
process.exit(1);
