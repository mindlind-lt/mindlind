/**
 * Serves out/ the way the shared host will, so the export can be checked
 * before it is uploaded. `next start` cannot do this any more: it boots the
 * Next server, which `output: "export"` no longer produces.
 *
 * The point is not to be a good web server — it is to reproduce the three
 * rules from public/.htaccess that the export depends on and that a generic
 * static server (`npx serve`, `python -m http.server`) gets wrong:
 *
 *   1. extensionless URLs resolve to <path>.html, ahead of the same-named
 *      directory of RSC payloads;
 *   2. /scenes/*.splinecode are brotli on disk and need Content-Encoding: br;
 *   3. /opengraph-image has no extension but is a PNG.
 *
 * If a page looks right here it will look right on the host. If it doesn't,
 * the bug is in the export, not in the upload.
 *
 *     npm start            # http://localhost:3000
 *     PORT=4000 npm start
 */
import { createReadStream } from "node:fs";
import { stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "out");
const port = Number(process.env.PORT ?? 3000);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".wasm": "application/wasm",
};

async function fileAt(candidate) {
  try {
    const info = await stat(candidate);
    return info.isFile() ? candidate : null;
  } catch {
    return null;
  }
}

/** Mirrors the .htaccess rewrite: /agency -> /agency.html. */
async function resolve(pathname) {
  const clean = decodeURIComponent(pathname).replace(/\/+$/, "") || "/";
  const rel = path.normalize(clean).replace(/^(\.\.[/\\])+/, "");
  const base = path.join(root, rel);

  return (
    (await fileAt(base)) ??
    (await fileAt(`${base}.html`)) ??
    (await fileAt(path.join(base, "index.html")))
  );
}

const server = createServer(async (req, res) => {
  const { pathname } = new URL(req.url, "http://localhost");

  // .htaccess 301s /agency/ to /agency so there is one canonical URL per page.
  if (pathname.length > 1 && pathname.endsWith("/")) {
    const target = pathname.replace(/\/+$/, "");
    if (await resolve(target)) {
      res.writeHead(301, { Location: target });
      res.end();
      return;
    }
  }

  const file = await resolve(pathname);

  if (!file) {
    const notFound = path.join(root, "404.html");
    res.writeHead(404, { "Content-Type": TYPES[".html"] });
    createReadStream(notFound).on("error", () => res.end("404")).pipe(res);
    return;
  }

  const ext = path.extname(file);
  const headers = {
    "Content-Type": TYPES[ext] ?? "application/octet-stream",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
  };

  // Payload files are noindex on the host; nothing but a crawler cares, but
  // keeping it here means the preview and the host answer the same headers.
  if (ext === ".txt" && !["llms.txt", "robots.txt"].includes(path.basename(file))) {
    headers["X-Robots-Tag"] = "noindex";
  }

  if (ext === ".splinecode") {
    headers["Content-Type"] = "application/json";
    headers["Content-Encoding"] = "br";
  } else if (path.basename(file) === "opengraph-image") {
    headers["Content-Type"] = "image/png";
  }

  res.writeHead(200, headers);
  createReadStream(file).pipe(res);
});

server.listen(port, () => {
  console.log(`Serving out/ on http://localhost:${port}`);
});
