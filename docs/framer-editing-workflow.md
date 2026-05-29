# Framer Export Editing Workflow

This repository contains compiled Framer runtime output. The same visible text can be duplicated across:

- breakpoint variants (desktop/tablet/phone branches)
- rendered nodes (`children:`)
- component defaults (`defaultValue:`)
- Framer metadata and editor labels (`data-framer-name`, `title`, `description`)

That is why naive text search often finds many matches for one visible string.

## Safer workflow

1. Build a duplicate index:

```bash
node tools/framer-content-map.mjs
```

2. Inspect where a specific string appears:

```bash
node tools/framer-content-map.mjs --find "Brand transformation end to end"
```

3. Prioritize edits in this order:

- `rendered` hits first (affects what the user sees)
- `default` hits second (fallbacks, may affect reused components)
- `metadata` hits last (usually editor/runtime metadata)

4. After editing, validate in browser on all breakpoints.

## Generated reports

- reports/string-index.json: all extracted string occurrences
- reports/string-duplicates.json: grouped duplicates with edit priority hints

## Important notes

- This workflow does not de-obfuscate Framer internals.
- It gives deterministic edit targeting so the compiled code is easier to maintain while you migrate to a clean React architecture.
