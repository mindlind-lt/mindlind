import { t as e } from "./rolldown-runtime.mjs";
import { C as t, K as n, X as r } from "./framer.mjs";
import { n as i, t as a } from "./shared-lib.mjs";
import { a as o, i as s } from "./cms-posts.mjs";
function c(e, t) {
	let n = e?.iprSlvcgS;
	return {
		breakpoints: [
			{ hash: `17009su`, mediaQuery: `(min-width: 1200px)` },
			{
				hash: `1bg0chp`,
				mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
			},
			{ hash: `qxlbtg`, mediaQuery: `(max-width: 809.98px)` },
		],
		description: `${n === void 0 ? `{{iprSlvcgS}}` : d(n)}`,
		elements: {},
		robots: `max-image-preview:large`,
		serializationId: `framer-Zfthd`,
		title: i(e, t).title || `Projects Detail`,
		viewport: `width=device-width`,
	};
}
async function l(e, r) {
	let i = new t(),
		a = {
			from: { alias: `luGPP9ZOT`, data: o, type: `Collection` },
			select: [
				{
					collection: `luGPP9ZOT`,
					name: `iprSlvcgS`,
					type: `Identifier`,
				},
			],
			where: n(e, `luGPP9ZOT`),
		},
		s = await i.query(a, r);
	if (s.length === 0) throw Error(`No data matches pathVariables`);
	let l = s[0];
	return c(l, r);
}
async function u(e, n) {
	let r = new t(),
		i = {
			from: { alias: `luGPP9ZOT`, data: o, type: `Collection` },
			select: [
				{
					collection: `luGPP9ZOT`,
					name: `iprSlvcgS`,
					type: `Identifier`,
				},
			],
		};
	for (let t of e)
		i.select.push({ collection: `luGPP9ZOT`, name: t, type: `Identifier` });
	return (await r.query(i, n)).map((t) => ({
		metadata: c(t, n),
		pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
	}));
}
var d,
	f,
	p,
	m = e(() => {
		(r(),
			s(),
			a(),
			(d = (e) => (typeof e == `string` ? e : String(e))),
			(f = 1),
			(p = {
				exports: {
					metadataVersion: {
						type: `variable`,
						annotations: { framerContractVersion: `1` },
					},
					fetchAllMetadata: {
						type: `function`,
						annotations: { framerContractVersion: `1` },
					},
					fetchMetadata: {
						type: `function`,
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
export { c as a, m as i, u as n, f as o, l as r, p as t };
//# sourceMappingURL=page-project-detail.mjs.map
