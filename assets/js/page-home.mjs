import { lazyInit as e } from "./rolldown-runtime.mjs";
import { n as t, t as n } from "./shared-lib.mjs";
function r(e, n) {
	return {
		breakpoints: [
			{ hash: `72rtr7`, mediaQuery: `(min-width: 1200px)` },
			{
				hash: `7wmc59`,
				mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
			},
			{ hash: `iigsnu`, mediaQuery: `(max-width: 809.98px)` },
		],
		description: t(e, n).description,
		elements: {},
		robots: `max-image-preview:large`,
		serializationId: `framer-kIudB`,
		title: t(e, n).title || `Home`,
		viewport: `width=device-width`,
	};
}
var i,
	a,
	o = e(() => {
		(n(),
			(i = 1),
			(a = {
				exports: {
					metadataVersion: {
						type: `variable`,
						annotations: { framerContractVersion: `1` },
					},
					default: {
						type: `function`,
						annotations: { framerContractVersion: `1` },
					},
					__FramerMetadata__: { type: `variable` },
				},
			}));
	});
export { i, o as n, r, a as t };
