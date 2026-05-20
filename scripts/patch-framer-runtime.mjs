#!/usr/bin/env node
/**
 * Post-export patches for self-hosted Framer + Next.js.
 * Re-run after replacing script_main.*.mjs from a new Framer export.
 */
import { readdir, readFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const assetsDir = new URL("../public/assets/", import.meta.url);
const files = await readdir(assetsDir);
const scriptMain = files.find((f) => f.startsWith("script_main.") && f.endsWith(".mjs"));
if (!scriptMain) {
  console.error("No script_main.*.mjs found in public/assets/");
  process.exit(1);
}

const path = join(assetsDir.pathname, scriptMain);
let text = await readFile(path, "utf8");

const editorBarBlock =
  /EditorBar:l===void 0\?void 0:\(\(\)=>\{if\(xV\)\{console\.log\(`\[Framer On-Page Editing\] Unavailable because navigator is bot`\);return\}return pe\(async\(\)=>\{l\.__framer_editorBarDependencies=\{__version:3,framer:\{useCurrentRoute:De,useLocaleInfo:Ye,useRouter:me\},react:\{createElement:ee,Fragment:r,memo:m,useCallback:o,useEffect:s,useRef:_,useState:i,useLayoutEffect:n\},"react-dom":\{createPortal:h\}\};let\{createEditorBar:e\}=await import\(`https:\/\/framer\.com\/edit\/init\.mjs`\);return\{default:e\(\)\}\}\)\}\)\(\),/;

if (!editorBarBlock.test(text)) {
  if (text.includes("EditorBar:void 0,")) {
    console.log(`OK: ${scriptMain} already patched (EditorBar disabled).`);
  } else {
    console.error(
      `Could not find EditorBar block in ${scriptMain}. Framer export format may have changed.`
    );
    process.exit(1);
  }
} else {
  text = text.replace(editorBarBlock, "EditorBar:void 0,");
  await writeFile(path, text);
  console.log(`Patched ${scriptMain}: disabled Framer on-page editor.`);
}
