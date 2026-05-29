#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const file = path.join(root, "assets", "js", "react.mjs");
const out = path.join(root, "docs", "react-alias-map.md");

if (!fs.existsSync(file)) {
  console.error("Missing file:", file);
  process.exit(1);
}

const src = fs.readFileSync(file, "utf8");

// Capture assignments like: (Me = y.createElement)
const reactNameByVar = new Map();
for (const m of src.matchAll(/\((\w+)\s*=\s*y\.(\w+)\)/g)) {
  reactNameByVar.set(m[1], m[2]);
}

// Capture jsx runtime assignments like: (mt = ot.jsx)
for (const m of src.matchAll(/\((\w+)\s*=\s*ot\.(jsx|jsxs)\)/g)) {
  reactNameByVar.set(m[1], m[2]);
}

// Capture ReactDOM/root-ish names from mp/Bc assignment area.
for (const m of src.matchAll(/\((\w+)\s*=\s*mp\.(\w+)\)/g)) {
  reactNameByVar.set(m[1], `reactDom.${m[2]}`);
}
for (const m of src.matchAll(/\((\w+)\s*=\s*Ap\.(\w+)\)/g)) {
  reactNameByVar.set(m[1], `reactDomClient.${m[2]}`);
}

const exportStart = src.lastIndexOf("export {");
if (exportStart < 0) {
  console.error("Could not find export block in react.mjs");
  process.exit(1);
}
const exportChunk = src.slice(exportStart, exportStart + 4000);

const rows = [];
for (const m of exportChunk.matchAll(/\s*(\w+)\s+as\s+([A-Za-z_][\w]*)\s*,?/g)) {
  const internalVar = m[1];
  const exportedAlias = m[2];
  const mapped = reactNameByVar.get(internalVar) || "(internal/helper)";
  rows.push({ exportedAlias, internalVar, mapped });
}

rows.sort((a, b) => a.exportedAlias.localeCompare(b.exportedAlias));

const lines = [];
lines.push("# React Runtime Alias Map");
lines.push("");
lines.push("Generated from assets/js/react.mjs.");
lines.push("");
lines.push("This helps map obfuscated exports to likely React or ReactDOM APIs.");
lines.push("");
lines.push("| Exported Alias | Internal Var | Likely API |" );
lines.push("|---|---|---|");
for (const r of rows) {
  lines.push(`| ${r.exportedAlias} | ${r.internalVar} | ${r.mapped} |`);
}

const known = rows.filter((r) => r.mapped !== "(internal/helper)").length;
lines.push("");
lines.push(`Resolved aliases: ${known}/${rows.length}`);

fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, lines.join("\n"));

console.log("Wrote", path.relative(root, out));
console.log("Resolved", `${known}/${rows.length}`);
