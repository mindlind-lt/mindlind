#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const jsRoot = path.join(projectRoot, "assets", "js");
const outDir = path.join(projectRoot, "reports");

const args = process.argv.slice(2);
const queryFlagIndex = args.findIndex((a) => a === "--find");
const query = queryFlagIndex >= 0 ? args[queryFlagIndex + 1] : null;

if (!fs.existsSync(jsRoot)) {
  console.error("Expected assets/js directory at:", jsRoot);
  process.exit(1);
}

const stringPattern = /`([^`\\]*(?:\\.[^`\\]*)*)`|"([^"\\]*(?:\\.[^"\\]*)*)"|'([^'\\]*(?:\\.[^'\\]*)*)'/g;

function walk(dir) {
  const result = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      result.push(...walk(full));
    } else if (entry.isFile() && entry.name.endsWith(".mjs")) {
      result.push(full);
    }
  }
  return result;
}

function inferKind(line) {
  const normalized = line.toLowerCase();
  if (normalized.includes("children:")) return "rendered";
  if (normalized.includes("defaultvalue:")) return "default";
  if (normalized.includes("data-framer-name")) return "metadata";
  if (
    normalized.includes("optiontitles:") ||
    normalized.includes("title:") ||
    normalized.includes("description:") ||
    normalized.includes("type:")
  ) {
    return "metadata";
  }
  if (normalized.includes("variant") || normalized.includes("breakpoint")) {
    return "variant";
  }
  return "other";
}

function shouldKeep(value) {
  const v = value.trim();
  if (v.length < 4) return false;
  if (/^[a-zA-Z0-9_-]{1,8}$/.test(v)) return false;
  if (/^(framer-|rgba\(|rgb\(|#|var\()/.test(v)) return false;
  if (/^\/?assets\//.test(v)) return false;
  if (/^https?:\/\//.test(v)) return false;
  return true;
}

function getLineOffsets(text) {
  const offsets = [0];
  for (let i = 0; i < text.length; i++) {
    if (text[i] === "\n") offsets.push(i + 1);
  }
  return offsets;
}

function lineNumberFromOffset(offsets, idx) {
  let lo = 0;
  let hi = offsets.length - 1;
  while (lo <= hi) {
    const mid = (lo + hi) >> 1;
    if (offsets[mid] <= idx) lo = mid + 1;
    else hi = mid - 1;
  }
  return hi + 1;
}

function shorten(text, max = 140) {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.length <= max ? clean : clean.slice(0, max - 1) + "...";
}

const files = walk(jsRoot);
const occurrences = [];

for (const file of files) {
  const raw = fs.readFileSync(file, "utf8");
  const rel = path.relative(projectRoot, file).replaceAll(path.sep, "/");
  const lines = raw.split(/\r?\n/);
  const offsets = getLineOffsets(raw);

  let m;
  while ((m = stringPattern.exec(raw)) !== null) {
    const value = m[1] ?? m[2] ?? m[3] ?? "";
    if (!shouldKeep(value)) continue;

    const lineNo = lineNumberFromOffset(offsets, m.index);
    const line = lines[lineNo - 1] ?? "";
    const kind = inferKind(line);

    occurrences.push({
      text: value,
      normalized: value.replace(/\s+/g, " ").trim(),
      file: rel,
      line: lineNo,
      kind,
      lineSnippet: shorten(line),
    });
  }
}

const grouped = new Map();
for (const occ of occurrences) {
  const key = occ.normalized;
  if (!grouped.has(key)) grouped.set(key, []);
  grouped.get(key).push(occ);
}

const duplicates = [];
for (const [text, hits] of grouped.entries()) {
  if (hits.length < 2) continue;

  const byKind = hits.reduce((acc, hit) => {
    acc[hit.kind] = (acc[hit.kind] || 0) + 1;
    return acc;
  }, {});

  const editPriority = hits
    .map((hit) => ({
      ...hit,
      score:
        (hit.kind === "rendered" ? 100 : 0) +
        (hit.kind === "default" ? 40 : 0) +
        (hit.kind === "metadata" ? 10 : 0),
    }))
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(({ score, ...rest }) => rest);

  duplicates.push({
    text,
    count: hits.length,
    kindSummary: byKind,
    files: [...new Set(hits.map((h) => h.file))],
    editPriority,
  });
}

duplicates.sort((a, b) => b.count - a.count);

if (query) {
  const needle = query.toLowerCase();
  const filtered = duplicates.filter((d) => d.text.toLowerCase().includes(needle));
  if (!filtered.length) {
    console.log("No duplicate strings matched query:", query);
    process.exit(0);
  }

  for (const row of filtered.slice(0, 25)) {
    console.log("\n===", row.text);
    console.log("count:", row.count, "kindSummary:", JSON.stringify(row.kindSummary));
    for (const hit of row.editPriority.slice(0, 6)) {
      console.log(`- ${hit.kind.padEnd(8)} ${hit.file}:${hit.line} :: ${hit.lineSnippet}`);
    }
  }
  process.exit(0);
}

fs.mkdirSync(outDir, { recursive: true });

const indexPath = path.join(outDir, "string-index.json");
const dupPath = path.join(outDir, "string-duplicates.json");

fs.writeFileSync(indexPath, JSON.stringify({ total: occurrences.length, occurrences }, null, 2));
fs.writeFileSync(
  dupPath,
  JSON.stringify({ totalDuplicates: duplicates.length, duplicates }, null, 2)
);

console.log("Scanned files:", files.length);
console.log("Total string occurrences:", occurrences.length);
console.log("Duplicate groups:", duplicates.length);
console.log("Wrote:", path.relative(projectRoot, indexPath));
console.log("Wrote:", path.relative(projectRoot, dupPath));
