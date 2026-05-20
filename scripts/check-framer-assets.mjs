#!/usr/bin/env node
/**
 * Ensures every relative .mjs import in public/assets resolves to a local file.
 * Run before deploy: node scripts/check-framer-assets.mjs
 */
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";

const assetsDir = new URL("../public/assets/", import.meta.url);

const files = (await readdir(assetsDir)).filter((f) => f.endsWith(".mjs"));
const importRe =
  /(?:from\s*[`"']\.\/([^`"']+\.mjs)[`"']|import\([`"']\.\/([^`"']+\.mjs)[`"']\))/g;

const allImports = new Set();
for (const file of files) {
  const text = await readFile(join(assetsDir.pathname, file), "utf8");
  for (const match of text.matchAll(importRe)) {
    allImports.add(match[1] ?? match[2]);
  }
}

const missing = [...allImports].filter(
  (name) => !files.includes(name)
);

if (missing.length > 0) {
  console.error(
    `Missing ${missing.length} Framer asset chunk(s) in public/assets/:\n` +
      missing.map((m) => `  - ${m}`).join("\n") +
      "\n\nRe-export from Framer or copy from framerusercontent.com/sites/<siteId>/"
  );
  process.exit(1);
}

console.log(`OK: ${files.length} asset files, ${allImports.size} imports resolved.`);
