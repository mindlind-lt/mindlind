import { lazyInit as lazyInit } from "./rolldown-runtime.mjs";
import { C as t, K as n, X as r } from "./framer.mjs";
import { n as i, t as a } from "./shared-lib.mjs";
import { i as o, r as s } from "./iOnt4WyqW.DYSvy5my.mjs";
function c(e, t) {
	let n = e?.Xk3s85B2e;
	return {
		breakpoints: [
			{ hash: `1bt0fe1`, mediaQuery: `(min-width: 1200px)` },
			{
				hash: `1s4m657`,
				mediaQuery: `(min-width: 810px) and (max-width: 1199.98px)`,
			},
			{ hash: `11n9y1n`, mediaQuery: `(max-width: 809.98px)` },
		],
		description: i(e, t).description,
		elements: {},
		robots: `max-image-preview:large`,
		serializationId: `framer-LA4OI`,
		title: `${n === void 0 ? `{{Xk3s85B2e}}` : d(n)} - Mondragon –\xa0Digital Creative Agency – Framer Template`,
		viewport: `width=device-width`,
	};
}
async function l(e, r) {
	let i = new t(),
		a = {
			from: { alias: `bIrb34sTa`, data: s, type: `Collection` },
			select: [
				{
					collection: `bIrb34sTa`,
					name: `Xk3s85B2e`,
					type: `Identifier`,
				},
			],
			where: n(e, `bIrb34sTa`),
		},
		o = await i.query(a, r);
	if (o.length === 0) throw Error(`No data matches pathVariables`);
	let l = o[0];
	return c(l, r);
}
async function u(e, n) {
	let r = new t(),
		i = {
			from: { alias: `bIrb34sTa`, data: s, type: `Collection` },
			select: [
				{
					collection: `bIrb34sTa`,
					name: `Xk3s85B2e`,
					type: `Identifier`,
				},
			],
		};
	for (let t of e)
		i.select.push({ collection: `bIrb34sTa`, name: t, type: `Identifier` });
	return (await r.query(i, n)).map((t) => ({
		metadata: c(t, n),
		pathVariables: Object.fromEntries(e.map((e) => [e, t[e]])),
	}));
}
var d,
	f,
	p,
	m = lazyInit(() => {
		(r(),
			o(),
			a(),
			(d = (e) => (typeof e == `string` ? e : String(e))),
			(f = 1),
			(p = {
				exports: {
					fetchAllMetadata: {
						type: `function`,
						annotations: { framerContractVersion: `1` },
					},
					fetchMetadata: {
						type: `function`,
						annotations: { framerContractVersion: `1` },
					},
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
export { c as a, m as i, u as n, f as o, l as r, p as t };
