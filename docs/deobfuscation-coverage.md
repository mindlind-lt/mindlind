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
- `assets/js/component-contact-form.mjs`
- `assets/js/component-icon-button.mjs`
- `assets/js/PxI14If8r.yE6_0MNS.mjs` (partial conservative pass)
- `assets/js/JFkcxmmKA.7qpzn-1x.mjs` (partial conservative pass)
- `assets/js/component-scroll-player.mjs`
- `assets/js/component-book-call.mjs`
- `assets/js/cms-posts.mjs` (partial conservative pass)
- `assets/js/iOnt4WyqW.DYSvy5my.mjs` (partial conservative pass)
- `assets/js/Vimeo.mjs` (partial conservative pass)
- `assets/js/sxu281Tck.C6-LoHdO.mjs` (partial conservative pass)
- `assets/js/Rotor_Gallery-shared.mjs` (partial conservative pass)
- `assets/js/Rotor_Gallery.mjs` (partial conservative pass)
- `assets/js/Text_Hover_Random.mjs` (partial conservative pass)
- `assets/js/psqHvE_iQ.DFa3l-m-.mjs` (partial conservative pass)
- `assets/js/TwistGallery.mjs` (partial conservative pass)
- `assets/js/i_vIzrlMX.C1MfukuD.mjs` (partial conservative pass)

## Reviewed as style/font-only (no meaningful React deobfuscation target)

- `assets/js/q7NcKTKUL.DsgFejH8.mjs`
- `assets/js/NqfjhJTm6.CzgN9mfI.mjs`
- `assets/js/CD6KIdx_H.Ry_RqQUt.mjs`
- `assets/js/gKHXfs5yP.DXAB7hHv.mjs`
- `assets/js/H4UJEYSZN.CDiKVH-O.mjs`
- `assets/js/NqfjhJTm6.CsmVbARV.mjs`
- `assets/js/shared-lib.mjs` (logic helper present, but no meaningful React alias deobfuscation target)

## Validation status

- All completed modules have no editor diagnostics after rename.
- Renames were not performed by text replace; each symbol was renamed semantically.

## Notes

- Some React imports remain intentionally unchanged when API mapping confidence is low.
- Runtime/vendor files (`react.mjs`, `framer.mjs`, `motion.mjs`, `script_main.mjs`) are intentionally not deobfuscated in this pass.
- Some utility-heavy modules only receive partial alias renames when symbol mapping confidence is not absolute.
