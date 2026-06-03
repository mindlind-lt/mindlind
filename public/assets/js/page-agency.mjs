import { lazyInit as lazyInit } from "./rolldown-runtime.mjs";
import { n as t, t as n } from "./shared-lib.mjs";
function r(e, n) {
	return {
		breakpoints: [
			{ hash: `1oqgkzr`, mediaQuery: `(min-width: 1200px)` },
			{
				hash: `13faj5l`,
				mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
			},
			{ hash: `1g2g4bg`, mediaQuery: `(max-width: 809.98px)` },
		],
		description: t(e, n).description,
		elements: {},
		robots: `max-image-preview:large`,
		serializationId: `framer-0rrh5`,
		title: t(e, n).title || `Agency`,
		viewport: `width=device-width`,
	};
}
var i,
	a,
	o = lazyInit(() => {
		(n(),
			(i = 1),
			(a = {
				exports: {
					default: {
						type: `function`,
						annotations: { framerContractVersion: `1` },
					},
					metadataVersion: {
						type: `variable`,
						annotations: { framerContractVersion: `1` },
					},
					__FramerMetadata__: { type: `variable` },
				},
			}));
	});
export { i, o as n, r, a as t };
