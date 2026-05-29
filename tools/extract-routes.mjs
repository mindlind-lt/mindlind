#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const mainFile = path.join(root, "assets", "js", "script_main.mjs");
const outFile = path.join(root, "docs", "routes-map.md");

if (!fs.existsSync(mainFile)) {
  console.error("Missing:", mainFile);
  process.exit(1);
}

const src = fs.readFileSync(mainFile, "utf8");

const routeObjStart = src.indexOf("(SV = {");
if (routeObjStart < 0) {
  console.error("Could not find route object assignment in script_main.mjs");
  process.exit(1);
}

const segment = src.slice(routeObjStart, routeObjStart + 22000);
const routeRe = /(\w+):\s*\{[\s\S]*?page:\s*ge\(\s*\(\)\s*=>\s*import\(\s*`\.\/(.*?)`\s*\)\s*,?\s*\),[\s\S]*?path:\s*`(.*?)`/g;

const rows = [];
let m;
while ((m = routeRe.exec(segment)) !== null) {
  rows.push({
    routeId: m[1],
    module: m[2],
    path: m[3],
  });
}

rows.sort((a, b) => a.path.localeCompare(b.path));

const lines = [];
lines.push("# Route Map");
lines.push("");
lines.push("Generated from assets/js/script_main.mjs.");
lines.push("");
lines.push("| Path | Route ID | Module |");
lines.push("|---|---|---|");
for (const row of rows) {
  lines.push(`| ${row.path} | ${row.routeId} | assets/js/${row.module} |`);
}
lines.push("");
lines.push(`Total routes: ${rows.length}`);

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, lines.join("\n"));

console.log("Wrote", path.relative(root, outFile));
console.log("Routes", rows.length);
