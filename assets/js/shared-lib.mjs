import { lazyInit as lazyInit } from "./rolldown-runtime.mjs";
import { F as t, X as n } from "./framer.mjs";
var r,
	i,
	a,
	o = lazyInit(() => {
		(n(),
			t.loadFonts([`GF;Space Mono-700`, `GF;Space Mono-700italic`]),
			(r = [
				{
					explicitInter: !0,
					fonts: [
						{
							family: `Space Mono`,
							source: `google`,
							style: `normal`,
							url: `https://fonts.gstatic.com/s/spacemono/v17/i7dMIFZifjKcF5UAWdDRaPpZYFeQHwyVd3U.woff2`,
							weight: `700`,
						},
						{
							family: `Space Mono`,
							source: `google`,
							style: `italic`,
							url: `https://fonts.gstatic.com/s/spacemono/v17/i7dSIFZifjKcF5UAWdDRYERE_FeaHi6QZ3WfYg.woff2`,
							weight: `700`,
						},
					],
				},
			]),
			(i = [
				`.framer-CwqPw .framer-styles-preset-mga0mf:not(.rich-text-wrapper), .framer-CwqPw .framer-styles-preset-mga0mf.rich-text-wrapper p { --framer-font-family: "Space Mono", monospace; --framer-font-family-italic: "Space Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 700; --framer-font-weight-italic: 700; --framer-letter-spacing: -0.01em; --framer-line-height: 17px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
			]),
			(a = `framer-CwqPw`));
	});
function s(e, t) {
	return {
		// description: `Framer Template for Digital Creative Agency with Future Design`,
		// favicon: `../images/uGRAp8supPvhoUPaFg224ylEEs.png`,
		// robots: `max-image-preview:large`,
		// socialImage: `../images/T8IXg2Azyj5ZDOkMUn1tw6Q2zy4.jpg`,
		title: `Mindlind Agency`,
	};
}
var c = lazyInit(() => {});
export { r as a, i, s as n, o, a as r, c as t };
