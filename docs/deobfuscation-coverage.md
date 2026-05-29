# Deobfuscation Coverage

This file tracks modules where React alias symbols were semantically renamed to readable names using language-server rename (binding-safe).

## Naming scheme

- `rJsx`
- `rJsxs`
- `rForwardRef`
- `rUseContext`
- `rUseRef`
- `rUseState` (when imported)
- `rUseMemo`
- `rUseDeferredValue`
- `rUseId`

## Completed modules

- `assets/js/components-pages.mjs`
- `assets/js/components-site.mjs`
- `assets/js/component-contact-page.mjs`
- `assets/js/component-heading-alt.mjs`
- `assets/js/component-heading.mjs`
- `assets/js/component-blog-bundle.mjs`
- `assets/js/component-projects-section.mjs`
- `assets/js/OWqtFDncb.DnERqnrM.mjs`
- `assets/js/lJIHQ29dZ.B2AWu9Us.mjs`
- `assets/js/ZCUtdxyFY.BHixxRZV.mjs`
- `assets/js/PPpYTPv46.C_co8ntZ.mjs`

## Validation status

- All completed modules have no editor diagnostics after rename.
- Renames were not performed by text replace; each symbol was renamed semantically.

## Notes

- Some React imports remain intentionally unchanged when API mapping confidence is low.
- Runtime/vendor files (`react.mjs`, `framer.mjs`, `motion.mjs`, `script_main.mjs`) are intentionally not deobfuscated in this pass.
