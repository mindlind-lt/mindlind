import { t as e } from "./rolldown-runtime.mjs";
import {
	F as t,
	M as n,
	T as r,
	V as i,
	c as a,
	f as o,
	g as s,
	j as c,
	k as l,
	l as u,
	o as d,
	u as f,
	y as ee,
	z as p,
} from "./react.mjs";
import { S as m, a as h, r as te, t as g } from "./motion.mjs";
import {
	A as _,
	C as v,
	Ct as y,
	E as b,
	Et as x,
	H as S,
	I as C,
	K as w,
	P as T,
	S as E,
	St as ne,
	T as re,
	Tt as D,
	U as O,
	W as k,
	X as A,
	_ as ie,
	_t as ae,
	a as j,
	f as oe,
	ft as se,
	g as M,
	ht as ce,
	i as N,
	it as le,
	k as ue,
	lt as de,
	n as fe,
	p as P,
	pt as pe,
	r as F,
	u as me,
	ut as he,
	vt as ge,
	x as I,
	xt as _e,
	yt as ve,
} from "./framer.mjs";
import { i as ye, n as be, r as L, t as xe } from "./hmRgK3K6v.Bb8FQ5b1.mjs";
import { i as Se, n as Ce, r as R, t as we } from "./CD6KIdx_H.Ry_RqQUt.mjs";
import { i as Te, n as Ee, r as De, t as Oe } from "./j9HsFBXUW.C6zqxVR-.mjs";
import { n as ke, t as Ae } from "./i_vIzrlMX.C1MfukuD.mjs";
import { i as je, n as Me, r as Ne, t as Pe } from "./q7NcKTKUL.DsgFejH8.mjs";
import { i as Fe, n as Ie, r as Le, t as Re } from "./BaUGQBb6A.CCunrJSH.mjs";
import {
	a as ze,
	c as Be,
	i as Ve,
	n as He,
	o as Ue,
	r as We,
	s as Ge,
	t as Ke,
} from "./pPuowuywh.BpuFfTb3.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./LuOKrK4j8.BwEhIs1I.mjs";
import {
	a as Ze,
	c as Qe,
	i as $e,
	n as et,
	o as tt,
	r as nt,
	s as rt,
	t as it,
} from "./eUQb69Kqx.CwwLHrtY.mjs";
import { i as at, n as ot, r as st, t as ct } from "./zczqo4Z8y.BT91f-6f.mjs";
import { i as lt, r as ut } from "./iOnt4WyqW.DYSvy5my.mjs";
import { n as dt, t as ft } from "./OWqtFDncb.DnERqnrM.mjs";
import { i as pt, n as mt, r as ht, t as gt } from "./NqfjhJTm6.CsmVbARV.mjs";
import { n as _t, t as vt } from "./lJIHQ29dZ.B2AWu9Us.mjs";
import { a as yt, i as bt } from "./page-blog-post.mjs";
var xt,
	St,
	Ct,
	wt,
	Tt,
	Et,
	Dt,
	Ot,
	kt = e(() => {
		(d(),
			A(),
			r(),
			(xt = `var(--framer-icon-mask)`),
			(St = s(function (e, t) {
				return a(`svg`, { ...e, ref: t, children: e.children });
			})),
			(Ct = m.create(St)),
			(wt = s((e, t) => {
				let { animated: n, layoutId: r, children: i, ...o } = e;
				return n
					? a(Ct, { ...o, layoutId: r, ref: t, children: i })
					: a(`svg`, { ...o, ref: t, children: i });
			})),
			(Tt = `<svg display="block" role="presentation" viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg"><g d="M 0 34 C 0 52.778 15.222 68 34 68 C 52.778 68 68 52.778 68 34 C 68 15.222 52.778 0 34 0 C 15.222 0 0 15.222 0 34 Z M 29 27 L 29 29.673 L 40.139 33.809 L 40.139 34.191 L 29 38.327 L 29 41 L 41 36.418 L 41 31.582 Z" fill="transparent" height="68px" id="Tt0OkOJWN" transform="translate(0 0)" width="68px"><path d="M 0 34 C 0 52.778 15.222 68 34 68 C 52.778 68 68 52.778 68 34 C 68 15.222 52.778 0 34 0 C 15.222 0 0 15.222 0 34 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="68.00000000000026px" id="ENSVRVTeP" transform="translate(0 0)" width="68.00000000000026px"/><path d="M 0 0 L 0 2.673 L 11.139 6.809 L 11.139 7.191 L 0 11.327 L 0 14 L 12 9.418 L 12 4.582 Z" fill="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))" height="14px" id="wFhS_3ovF" transform="translate(29 27)" width="12px"/></g></svg>`),
			(Et = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(Dt = x(
				s(function (e, t) {
					let {
							style: n,
							className: r,
							layoutId: i,
							variant: o,
							...s
						} = Et(e),
						c = y(`2240056095`, Tt);
					return a(wt, {
						...s,
						className: T(`framer-Xo2oE`, r),
						layoutId: i,
						ref: t,
						role: `presentation`,
						style: { ...n },
						viewBox: `0 0 68 68`,
						children: a(`use`, { href: c }),
					});
				}),
				[
					`.framer-Xo2oE { -webkit-mask: ${xt}; aspect-ratio: 1; display: block; mask: ${xt}; width: 68px; }`,
				],
				`framer-Xo2oE`,
			)),
			(Dt.displayName = `Right Black`),
			(Ot = Dt));
	}),
	At,
	jt,
	Mt,
	Nt,
	Pt,
	Ft,
	It,
	Lt,
	Rt = e(() => {
		(d(),
			A(),
			r(),
			(At = `var(--framer-icon-mask)`),
			(jt = s(function (e, t) {
				return a(`svg`, { ...e, ref: t, children: e.children });
			})),
			(Mt = m.create(jt)),
			(Nt = s((e, t) => {
				let { animated: n, layoutId: r, children: i, ...o } = e;
				return n
					? a(Mt, { ...o, layoutId: r, ref: t, children: i })
					: a(`svg`, { ...o, ref: t, children: i });
			})),
			(Pt = `<svg display="block" role="presentation" viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg"><g d="M 0 34 C 0 52.778 15.222 68 34 68 C 52.778 68 68 52.778 68 34 C 68 15.222 52.778 0 34 0 C 15.222 0 0 15.222 0 34 Z M 29 27 L 29 29.673 L 40.139 33.809 L 40.139 34.191 L 29 38.327 L 29 41 L 41 36.418 L 41 31.582 Z" fill="transparent" height="68px" id="DfpytjhIk" transform="translate(0 0)" width="68px"><path d="M 0 34 C 0 52.778 15.222 68 34 68 C 52.778 68 68 52.778 68 34 C 68 15.222 52.778 0 34 0 C 15.222 0 0 15.222 0 34 Z" fill="rgb(255, 255, 255)" height="68.00000000000026px" id="nWsUNEl_6" transform="translate(0 0)" width="68.00000000000026px"/><path d="M 0 0 L 0 2.673 L 11.139 6.809 L 11.139 7.191 L 0 11.327 L 0 14 L 12 9.418 L 12 4.582 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="14px" id="vbJOokiJU" transform="translate(29 27)" width="12px"/></g></svg>`),
			(Ft = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(It = x(
				s(function (e, t) {
					let {
							style: n,
							className: r,
							layoutId: i,
							variant: o,
							...s
						} = Ft(e),
						c = y(`2328283254`, Pt);
					return a(Nt, {
						...s,
						className: T(`framer-GObhA`, r),
						layoutId: i,
						ref: t,
						role: `presentation`,
						style: { ...n },
						viewBox: `0 0 68 68`,
						children: a(`use`, { href: c }),
					});
				}),
				[
					`.framer-GObhA { -webkit-mask: ${At}; aspect-ratio: 1; display: block; mask: ${At}; width: 68px; }`,
				],
				`framer-GObhA`,
			)),
			(It.displayName = `Right`),
			(Lt = It));
	});
function zt(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Bt,
	Vt,
	Ht,
	Ut,
	Wt,
	Gt,
	Kt,
	qt,
	z,
	Jt,
	Yt = e(() => {
		(d(),
			A(),
			g(),
			r(),
			kt(),
			Rt(),
			(Bt = { Yy1Q_F10S: { hover: !0 } }),
			(Vt = `framer-jzrSZ`),
			(Ht = { Yy1Q_F10S: `framer-v-lpzpfr` }),
			(Ut = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Wt = ({ value: e, children: t }) => {
				let r = c(h),
					i = e ?? r.transition,
					o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
				return a(h.Provider, { value: o, children: t });
			}),
			(Gt = m.create(t)),
			(Kt = ({ height: e, id: t, link: n, width: r, ...i }) => ({
				...i,
				gwJ1gaJat: n ?? i.gwJ1gaJat,
			})),
			(qt = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(z = x(
				s(function (e, t) {
					let n = l(null),
						r = t ?? n,
						i = ee(),
						{ activeLocale: o, setLocale: s } = ge();
					de();
					let {
							style: c,
							className: u,
							layoutId: d,
							variant: f,
							gwJ1gaJat: p,
							...h
						} = Kt(e),
						{
							baseVariant: g,
							classNames: _,
							clearLoadingGesture: v,
							gestureHandlers: y,
							gestureVariant: b,
							isLoading: x,
							setGestureState: S,
							setVariant: C,
							variants: w,
						} = D({
							defaultVariant: `Yy1Q_F10S`,
							enabledGestures: Bt,
							ref: r,
							variant: f,
							variantClassNames: Ht,
						}),
						E = qt(e, w),
						ne = T(Vt);
					return a(te, {
						id: d ?? i,
						children: a(Gt, {
							animate: w,
							initial: !1,
							children: a(Wt, {
								value: Ut,
								children: a(M, {
									href: p,
									motionChild: !0,
									nodeId: `Yy1Q_F10S`,
									openInNewTab: !1,
									scopeId: `hdfQPR5o2`,
									children: a(m.a, {
										...h,
										...y,
										className: `${T(ne, `framer-lpzpfr`, u, _)} framer-vpz6iu`,
										layoutDependency: E,
										layoutId: `Yy1Q_F10S`,
										ref: r,
										style: { ...c },
										...zt(
											{
												"Yy1Q_F10S-hover": {
												},
											},
											g,
											b,
										),
										children: a(P, {
											animated: !0,
											className: `framer-h00n7b`,
											Component: Lt,
											layoutDependency: E,
											layoutId: `exCXB2PAO`,
											...zt(
												{
													"Yy1Q_F10S-hover": {
														Component: Ot,
													},
												},
												g,
												b,
											),
										}),
									}),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-jzrSZ.framer-vpz6iu, .framer-jzrSZ .framer-vpz6iu { display: block; }`,
					`.framer-jzrSZ.framer-lpzpfr { cursor: pointer; height: 51px; overflow: var(--overflow-clip-fallback, clip); position: relative; text-decoration: none; width: 51px; }`,
					`.framer-jzrSZ .framer-h00n7b { flex: none; height: var(--framer-aspect-ratio-supported, 51px); left: 0px; position: absolute; right: 0px; top: 0px; width: calc(100% - 0px); }`,
				],
				`framer-jzrSZ`,
			)),
			(Jt = z),
			(z.displayName = `Right - Arrow`),
			(z.defaultProps = { height: 51, width: 51 }),
			_(z, { gwJ1gaJat: { title: `Link`, type: j.Link } }),
			ue(z, [{ explicitInter: !0, fonts: [] }], {
				supportsExplicitInterCodegen: !0,
			}));
	}),
	Xt,
	Zt,
	Qt,
	$t,
	en,
	tn,
	nn,
	rn,
	an = e(() => {
		(d(),
			A(),
			r(),
			(Xt = `var(--framer-icon-mask)`),
			(Zt = s(function (e, t) {
				return a(`svg`, { ...e, ref: t, children: e.children });
			})),
			(Qt = m.create(Zt)),
			($t = s((e, t) => {
				let { animated: n, layoutId: r, children: i, ...o } = e;
				return n
					? a(Qt, { ...o, layoutId: r, ref: t, children: i })
					: a(`svg`, { ...o, ref: t, children: i });
			})),
			(en = `<svg display="block" role="presentation" viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg"><g d="M 68 34 C 68 52.778 52.778 68 34 68 C 15.222 68 0 52.778 0 34 C 0 15.222 15.222 0 34 0 C 52.778 0 68 15.222 68 34 Z M 39 27 L 39 29.673 L 27.861 33.809 L 27.861 34.191 L 39 38.327 L 39 41 L 27 36.418 L 27 31.582 Z" fill="transparent" height="68px" id="LTbgOWlxV" transform="translate(0 0)" width="68px"><path d="M 68 34 C 68 52.778 52.778 68 34 68 C 15.222 68 0 52.778 0 34 C 0 15.222 15.222 0 34 0 C 52.778 0 68 15.222 68 34 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="68px" id="ovdkmF4gD" width="68px"/><path d="M 12 0 L 12 2.673 L 0.861 6.809 L 0.861 7.191 L 12 11.327 L 12 14 L 0 9.418 L 0 4.582 Z" fill="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))" height="14px" id="qiwLGGEqg" transform="translate(27 27)" width="12px"/></g></svg>`),
			(tn = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(nn = x(
				s(function (e, t) {
					let {
							style: n,
							className: r,
							layoutId: i,
							variant: o,
							...s
						} = tn(e),
						c = y(`1927685274`, en);
					return a($t, {
						...s,
						className: T(`framer-93AFQ`, r),
						layoutId: i,
						ref: t,
						role: `presentation`,
						style: { ...n },
						viewBox: `0 0 68 68`,
						children: a(`use`, { href: c }),
					});
				}),
				[
					`.framer-93AFQ { -webkit-mask: ${Xt}; aspect-ratio: 1; display: block; mask: ${Xt}; width: 68px; }`,
				],
				`framer-93AFQ`,
			)),
			(nn.displayName = `Left Black`),
			(rn = nn));
	}),
	on,
	sn,
	cn,
	ln,
	un,
	dn,
	fn,
	pn,
	mn = e(() => {
		(d(),
			A(),
			r(),
			(on = `var(--framer-icon-mask)`),
			(sn = s(function (e, t) {
				return a(`svg`, { ...e, ref: t, children: e.children });
			})),
			(cn = m.create(sn)),
			(ln = s((e, t) => {
				let { animated: n, layoutId: r, children: i, ...o } = e;
				return n
					? a(cn, { ...o, layoutId: r, ref: t, children: i })
					: a(`svg`, { ...o, ref: t, children: i });
			})),
			(un = `<svg display="block" role="presentation" viewBox="0 0 68 68" xmlns="http://www.w3.org/2000/svg"><g d="M 68 34 C 68 52.778 52.778 68 34 68 C 15.222 68 0 52.778 0 34 C 0 15.222 15.222 0 34 0 C 52.778 0 68 15.222 68 34 Z M 39 27 L 39 29.673 L 27.861 33.809 L 27.861 34.191 L 39 38.327 L 39 41 L 27 36.418 L 27 31.582 Z" fill="transparent" height="68px" id="NQgSg1Sey" transform="translate(0 0)" width="68px"><path d="M 68 34 C 68 52.778 52.778 68 34 68 C 15.222 68 0 52.778 0 34 C 0 15.222 15.222 0 34 0 C 52.778 0 68 15.222 68 34 Z" fill="rgb(255, 255, 255)" height="68px" id="fTemFRKNr" width="68px"/><path d="M 12 0 L 12 2.673 L 0.861 6.809 L 0.861 7.191 L 12 11.327 L 12 14 L 0 9.418 L 0 4.582 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="14px" id="jChbYQ7xz" transform="translate(27 27)" width="12px"/></g></svg>`),
			(dn = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(fn = x(
				s(function (e, t) {
					let {
							style: n,
							className: r,
							layoutId: i,
							variant: o,
							...s
						} = dn(e),
						c = y(`3831908099`, un);
					return a(ln, {
						...s,
						className: T(`framer-qoSTW`, r),
						layoutId: i,
						ref: t,
						role: `presentation`,
						style: { ...n },
						viewBox: `0 0 68 68`,
						children: a(`use`, { href: c }),
					});
				}),
				[
					`.framer-qoSTW { -webkit-mask: ${on}; aspect-ratio: 1; display: block; mask: ${on}; width: 68px; }`,
				],
				`framer-qoSTW`,
			)),
			(fn.displayName = `Left`),
			(pn = fn));
	});
function hn(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gn,
	_n,
	vn,
	yn,
	bn,
	xn,
	Sn,
	Cn,
	B,
	wn,
	Tn = e(() => {
		(d(),
			A(),
			g(),
			r(),
			an(),
			mn(),
			(gn = { TTIdOjeaA: { hover: !0 } }),
			(_n = `framer-WNEoH`),
			(vn = { TTIdOjeaA: `framer-v-zqadfu` }),
			(yn = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(bn = ({ value: e, children: t }) => {
				let r = c(h),
					i = e ?? r.transition,
					o = n(() => ({ ...r, transition: i }), [JSON.stringify(i)]);
				return a(h.Provider, { value: o, children: t });
			}),
			(xn = m.create(t)),
			(Sn = ({ height: e, id: t, link: n, width: r, ...i }) => ({
				...i,
				lxWL6u1VJ: n ?? i.lxWL6u1VJ,
			})),
			(Cn = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(B = x(
				s(function (e, t) {
					let n = l(null),
						r = t ?? n,
						i = ee(),
						{ activeLocale: o, setLocale: s } = ge();
					de();
					let {
							style: c,
							className: u,
							layoutId: d,
							variant: f,
							lxWL6u1VJ: p,
							...h
						} = Sn(e),
						{
							baseVariant: g,
							classNames: _,
							clearLoadingGesture: v,
							gestureHandlers: y,
							gestureVariant: b,
							isLoading: x,
							setGestureState: S,
							setVariant: C,
							variants: w,
						} = D({
							defaultVariant: `TTIdOjeaA`,
							enabledGestures: gn,
							ref: r,
							variant: f,
							variantClassNames: vn,
						}),
						E = Cn(e, w),
						ne = T(_n);
					return a(te, {
						id: d ?? i,
						children: a(xn, {
							animate: w,
							initial: !1,
							children: a(bn, {
								value: yn,
								children: a(M, {
									href: p,
									motionChild: !0,
									nodeId: `TTIdOjeaA`,
									openInNewTab: !1,
									scopeId: `sHfzVIw3q`,
									children: a(m.a, {
										...h,
										...y,
										className: `${T(ne, `framer-zqadfu`, u, _)} framer-nyeh8p`,
										layoutDependency: E,
										layoutId: `TTIdOjeaA`,
										ref: r,
										style: { ...c },
										...hn(
											{
												"TTIdOjeaA-hover": {
													
												},
											},
											g,
											b,
										),
										children: a(P, {
											animated: !0,
											className: `framer-1dqv5tb`,
											Component: pn,
											layoutDependency: E,
											layoutId: `udhzaaHho`,
											...hn(
												{
													"TTIdOjeaA-hover": {
														Component: rn,
													},
												},
												g,
												b,
											),
										}),
									}),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-WNEoH.framer-nyeh8p, .framer-WNEoH .framer-nyeh8p { display: block; }`,
					`.framer-WNEoH.framer-zqadfu { cursor: pointer; height: 51px; overflow: var(--overflow-clip-fallback, clip); position: relative; text-decoration: none; width: 51px; }`,
					`.framer-WNEoH .framer-1dqv5tb { bottom: var(--framer-aspect-ratio-supported, 0px); flex: none; height: 51px; left: 0px; position: absolute; right: 0px; top: 0px; width: calc(100% - 0px); }`,
				],
				`framer-WNEoH`,
			)),
			(wn = B),
			(B.displayName = `Left - Arrow`),
			(B.defaultProps = { height: 51, width: 51 }),
			_(B, { lxWL6u1VJ: { title: `Link`, type: j.Link } }),
			ue(B, [{ explicitInter: !0, fonts: [] }], {
				supportsExplicitInterCodegen: !0,
			}));
	});
function En(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function V(e, ...t) {
	if (!e)
		throw Error(
			`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``),
		);
}
function H(e) {
	throw Error(`Unexpected value: ${e}`);
}
function Dn(e) {
	return typeof e == `string`;
}
function U(e) {
	return Number.isFinite(e);
}
function W(e) {
	return e === null;
}
function On(e) {
	if (W(e)) return 0;
	switch (e.type) {
		case j.Array:
			return 1;
		case j.Boolean:
			return 2;
		case j.Color:
			return 3;
		case j.Date:
			return 4;
		case j.Enum:
			return 5;
		case j.File:
			return 6;
		case j.ResponsiveImage:
			return 10;
		case j.Link:
			return 7;
		case j.Number:
			return 8;
		case j.Object:
			return 9;
		case j.RichText:
			return 11;
		case j.String:
			return 12;
		case j.VectorSetItem:
			return 13;
		default:
			H(e);
	}
}
function kn(e) {
	let t = e.readUint16(),
		n = [];
	for (let r = 0; r < t; r++) {
		let t = G.read(e);
		n.push(t);
	}
	return { type: j.Array, value: n };
}
function An(e, t) {
	for (let n of (e.writeUint16(t.value.length), t.value)) G.write(e, n);
}
function jn(e, t, n) {
	let r = e.value.length,
		i = t.value.length;
	if (r < i) return -1;
	if (r > i) return 1;
	for (let i = 0; i < r; i++) {
		let r = e.value[i],
			a = t.value[i],
			o = G.compare(r, a, n);
		if (o !== 0) return o;
	}
	return 0;
}
function Mn(e) {
	return { type: j.Boolean, value: e.readUint8() !== 0 };
}
function Nn(e, t) {
	e.writeUint8(t.value ? 1 : 0);
}
function Pn(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Fn(e) {
	return { type: j.Color, value: e.readString() };
}
function In(e, t) {
	e.writeString(t.value);
}
function Ln(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Rn(e) {
	let t = e.readInt64(),
		n = new Date(t);
	return { type: j.Date, value: n.toISOString() };
}
function zn(e, t) {
	let n = new Date(t.value).getTime();
	e.writeInt64(n);
}
function Bn(e, t) {
	let n = new Date(e.value),
		r = new Date(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function Vn(e) {
	return { type: j.Enum, value: e.readString() };
}
function Hn(e, t) {
	e.writeString(t.value);
}
function Un(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Wn(e) {
	return { type: j.File, value: e.readString() };
}
function Gn(e, t) {
	e.writeString(t.value);
}
function Kn(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function qn(e) {
	return { type: j.Link, value: e.readJson() };
}
function Jn(e, t) {
	e.writeJson(t.value);
}
function Yn(e, t) {
	let n = JSON.stringify(e.value),
		r = JSON.stringify(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function Xn(e) {
	return { type: j.Number, value: e.readFloat64() };
}
function Zn(e, t) {
	e.writeFloat64(t.value);
}
function Qn(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function $n(e) {
	let t = e.readUint16(),
		n = {};
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		n[t] = G.read(e);
	}
	return { type: j.Object, value: n };
}
function er(e, t) {
	let n = Object.entries(t.value);
	for (let [t, r] of (e.writeUint16(n.length), n))
		(e.writeString(t), G.write(e, r));
}
function tr(e, t, n) {
	let r = Object.keys(e.value).sort(),
		i = Object.keys(t.value).sort();
	if (r.length < i.length) return -1;
	if (r.length > i.length) return 1;
	for (let a = 0; a < r.length; a++) {
		let o = r[a],
			s = i[a];
		if (o < s) return -1;
		if (o > s) return 1;
		let c = e.value[o] ?? null,
			l = t.value[s] ?? null,
			u = G.compare(c, l, n);
		if (u !== 0) return u;
	}
	return 0;
}
function nr(e) {
	return { type: j.ResponsiveImage, value: e.readJson() };
}
function rr(e, t) {
	e.writeJson(t.value);
}
function ir(e, t) {
	let n = JSON.stringify(e.value),
		r = JSON.stringify(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function ar(e) {
	let t = e.readInt8();
	if (t === 0) return { type: j.RichText, value: e.readUint32() };
	if (t === 1) return { type: j.RichText, value: e.readString() };
	throw Error(`Invalid rich text pointer`);
}
function or(e, t) {
	if (U(t.value)) {
		(e.writeInt8(0), e.writeUint32(t.value));
		return;
	}
	if (Dn(t.value)) {
		(e.writeInt8(1), e.writeString(t.value));
		return;
	}
	throw Error(`Invalid rich text pointer`);
}
function sr(e, t) {
	let n = e.value,
		r = t.value;
	if ((U(n) && U(r)) || (Dn(n) && Dn(r))) return n < r ? -1 : n > r ? 1 : 0;
	throw Error(`Invalid rich text pointer`);
}
function cr(e) {
	return { type: j.String, value: e.readString() };
}
function lr(e, t) {
	e.writeString(t.value);
}
function ur(e, t, n) {
	let r = e.value,
		i = t.value;
	return (
		n.type === 0 &&
			((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
		r < i ? -1 : r > i ? 1 : 0
	);
}
function dr(e) {
	return { type: j.VectorSetItem, value: e.readUint32() };
}
function fr(e, t) {
	e.writeUint32(t.value);
}
function pr(e, t) {
	let n = e.value,
		r = t.value;
	return n < r ? -1 : n > r ? 1 : 0;
}
async function mr(e) {
	let t = Math.floor(Nr * (Math.random() + 1) * 2 ** (e - 1));
	await new Promise((e) => {
		setTimeout(e, t);
	});
}
async function hr(e, t) {
	let n = _r(t),
		r = [],
		i = 0;
	for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
	let a = new URL(e),
		o = r.join(`,`);
	a.searchParams.set(`range`, o);
	let s = await Fr(a);
	if (s.status !== 200)
		throw Error(`Request failed: ${s.status} ${s.statusText}`);
	let c = await s.arrayBuffer(),
		l = new Uint8Array(c);
	if (l.length !== i)
		throw Error(`Request failed: Unexpected response length`);
	let u = new Ir(),
		d = 0;
	for (let e of n) {
		let t = e.to - e.from,
			n = d + t,
			r = l.subarray(d, n);
		(u.write(e.from, r), (d = n));
	}
	return t.map((e) => u.read(e.from, e.to - e.from));
}
function gr(e, t) {
	let n = e.length + t.length,
		r = new Uint8Array(n);
	return (r.set(e, 0), r.set(t, e.length), r);
}
function _r(e) {
	V(e.length > 0, `Must have at least one range`);
	let t = [...e].sort((e, t) => e.from - t.from),
		n = [];
	for (let e of t) {
		let t = n.length - 1,
			r = n[t];
		r && e.from <= r.to
			? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
			: n.push(e);
	}
	return n;
}
var G,
	vr,
	K,
	yr,
	br,
	xr,
	Sr,
	Cr,
	wr,
	Tr,
	Er,
	q,
	Dr,
	J,
	Or,
	kr,
	Ar,
	jr,
	Y,
	Mr,
	Nr,
	Pr,
	Fr,
	Ir,
	Lr,
	Rr,
	zr,
	Br = e(() => {
		(p(),
			A(),
			(vr = Object.create),
			(K = Object.defineProperty),
			(yr = Object.getOwnPropertyDescriptor),
			(br = Object.getOwnPropertyNames),
			(xr = Object.getPrototypeOf),
			(Sr = Object.prototype.hasOwnProperty),
			(Cr = (e, t, n) =>
				t in e
					? K(e, t, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: n,
						})
					: (e[t] = n)),
			(wr = (e, t) =>
				function () {
					return (
						t || (0, e[br(e)[0]])((t = { exports: {} }).exports, t),
						t.exports
					);
				}),
			(Tr = (e, t, n, r) => {
				if ((t && typeof t == `object`) || typeof t == `function`)
					for (let i of br(t))
						Sr.call(e, i) ||
							i === n ||
							K(e, i, {
								get: () => t[i],
								enumerable: !(r = yr(t, i)) || r.enumerable,
							});
				return e;
			}),
			(Er = (e, t, n) => (
				(n = e == null ? {} : vr(xr(e))),
				Tr(
					!t && e && e.__esModule
						? n
						: K(n, `default`, { value: e, enumerable: !0 }),
					e,
				)
			)),
			(q = (e, t, n) => Cr(e, typeof t == `symbol` ? t : t + ``, n)),
			(Dr = Er(
				wr({
					"../../../node_modules/dataloader/index.js"(e, t) {
						var n,
							r = (function () {
								function e(e, t) {
									if (typeof e != `function`)
										throw TypeError(
											`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
												e +
												`.`,
										);
									((this._batchLoadFn = e),
										(this._maxBatchSize = (function (e) {
											if (!(!e || !1 !== e.batch))
												return 1;
											var t = e && e.maxBatchSize;
											if (t === void 0) return 1 / 0;
											if (typeof t != `number` || t < 1)
												throw TypeError(
													`maxBatchSize must be a positive number: ` +
														t,
												);
											return t;
										})(t)),
										(this._batchScheduleFn = (function (e) {
											var t = e && e.batchScheduleFn;
											if (t === void 0) return i;
											if (typeof t != `function`)
												throw TypeError(
													`batchScheduleFn must be a function: ` +
														t,
												);
											return t;
										})(t)),
										(this._cacheKeyFn = (function (e) {
											var t = e && e.cacheKeyFn;
											if (t === void 0)
												return function (e) {
													return e;
												};
											if (typeof t != `function`)
												throw TypeError(
													`cacheKeyFn must be a function: ` +
														t,
												);
											return t;
										})(t)),
										(this._cacheMap = (function (e) {
											if (!(!e || !1 !== e.cache))
												return null;
											var t = e && e.cacheMap;
											if (t === void 0) return new Map();
											if (t !== null) {
												var n = [
													`get`,
													`set`,
													`delete`,
													`clear`,
												].filter(function (e) {
													return (
														t &&
														typeof t[e] !=
															`function`
													);
												});
												if (n.length !== 0)
													throw TypeError(
														`Custom cacheMap missing methods: ` +
															n.join(`, `),
													);
											}
											return t;
										})(t)),
										(this._batch = null),
										(this.name =
											t && t.name ? t.name : null));
								}
								var t = e.prototype;
								return (
									(t.load = function (e) {
										if (e == null)
											throw TypeError(
												`The loader.load() function must be called with a value, but got: ` +
													String(e) +
													`.`,
											);
										var t = (function (e) {
												var t = e._batch;
												if (
													t !== null &&
													!t.hasDispatched &&
													t.keys.length <
														e._maxBatchSize
												)
													return t;
												var n = {
													hasDispatched: !1,
													keys: [],
													callbacks: [],
												};
												return (
													(e._batch = n),
													e._batchScheduleFn(
														function () {
															(function (e, t) {
																var n;
																if (
																	((t.hasDispatched =
																		!0),
																	t.keys
																		.length ===
																		0)
																) {
																	o(t);
																	return;
																}
																try {
																	n =
																		e._batchLoadFn(
																			t.keys,
																		);
																} catch (n) {
																	return a(
																		e,
																		t,
																		TypeError(
																			`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
																				String(
																					n,
																				) +
																				`.`,
																		),
																	);
																}
																if (
																	!n ||
																	typeof n.then !=
																		`function`
																)
																	return a(
																		e,
																		t,
																		TypeError(
																			`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
																				String(
																					n,
																				) +
																				`.`,
																		),
																	);
																n.then(
																	function (
																		e,
																	) {
																		if (
																			!s(
																				e,
																			)
																		)
																			throw TypeError(
																				`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
																					String(
																						e,
																					) +
																					`.`,
																			);
																		if (
																			e.length !==
																			t
																				.keys
																				.length
																		)
																			throw TypeError(
																				`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
																					String(
																						t.keys,
																					) +
																					`

Values:
` +
																					String(
																						e,
																					),
																			);
																		o(t);
																		for (
																			var n = 0;
																			n <
																			t
																				.callbacks
																				.length;
																			n++
																		) {
																			var r =
																				e[
																					n
																				];
																			r instanceof
																			Error
																				? t.callbacks[
																						n
																					].reject(
																						r,
																					)
																				: t.callbacks[
																						n
																					].resolve(
																						r,
																					);
																		}
																	},
																).catch(
																	function (
																		n,
																	) {
																		a(
																			e,
																			t,
																			n,
																		);
																	},
																);
															})(e, n);
														},
													),
													n
												);
											})(this),
											n = this._cacheMap,
											r = this._cacheKeyFn(e);
										if (n) {
											var i = n.get(r);
											if (i) {
												var c = (t.cacheHits ||= []);
												return new Promise(function (
													e,
												) {
													c.push(function () {
														e(i);
													});
												});
											}
										}
										t.keys.push(e);
										var l = new Promise(function (e, n) {
											t.callbacks.push({
												resolve: e,
												reject: n,
											});
										});
										return (n && n.set(r, l), l);
									}),
									(t.loadMany = function (e) {
										if (!s(e))
											throw TypeError(
												`The loader.loadMany() function must be called with Array<key> but got: ` +
													e +
													`.`,
											);
										for (
											var t = [], n = 0;
											n < e.length;
											n++
										)
											t.push(
												this.load(e[n]).catch(
													function (e) {
														return e;
													},
												),
											);
										return Promise.all(t);
									}),
									(t.clear = function (e) {
										var t = this._cacheMap;
										if (t) {
											var n = this._cacheKeyFn(e);
											t.delete(n);
										}
										return this;
									}),
									(t.clearAll = function () {
										var e = this._cacheMap;
										return (e && e.clear(), this);
									}),
									(t.prime = function (e, t) {
										var n = this._cacheMap;
										if (n) {
											var r,
												i = this._cacheKeyFn(e);
											n.get(i) === void 0 &&
												(t instanceof Error
													? (r =
															Promise.reject(
																t,
															)).catch(
															function () {},
														)
													: (r = Promise.resolve(t)),
												n.set(i, r));
										}
										return this;
									}),
									e
								);
							})(),
							i =
								typeof process == `object` &&
								typeof process.nextTick == `function`
									? function (e) {
											((n ||= Promise.resolve()),
												n.then(function () {
													process.nextTick(e);
												}));
										}
									: typeof setImmediate == `function`
										? function (e) {
												setImmediate(e);
											}
										: function (e) {
												setTimeout(e);
											};
						function a(e, t, n) {
							o(t);
							for (var r = 0; r < t.keys.length; r++)
								(e.clear(t.keys[r]), t.callbacks[r].reject(n));
						}
						function o(e) {
							if (e.cacheHits)
								for (var t = 0; t < e.cacheHits.length; t++)
									e.cacheHits[t]();
						}
						function s(e) {
							return (
								typeof e == `object` &&
								!!e &&
								typeof e.length == `number` &&
								(e.length === 0 ||
									(e.length > 0 &&
										Object.prototype.hasOwnProperty.call(
											e,
											e.length - 1,
										)))
							);
						}
						t.exports = r;
					},
				})(),
			)),
			(J = {
				Uint8: 1,
				Uint16: 2,
				Uint32: 4,
				BigUint64: 8,
				Int8: 1,
				Int16: 2,
				Int32: 4,
				BigInt64: 8,
				Float32: 4,
				Float64: 8,
			}),
			(Or = class {
				getOffset() {
					return this.offset;
				}
				ensureLength(e) {
					let t = this.bytes.length;
					if (!(this.offset + e <= t))
						throw Error(`Reading out of bounds`);
				}
				readUint8() {
					let e = J.Uint8;
					this.ensureLength(e);
					let t = this.view.getUint8(this.offset);
					return ((this.offset += e), t);
				}
				readUint16() {
					let e = J.Uint16;
					this.ensureLength(e);
					let t = this.view.getUint16(this.offset);
					return ((this.offset += e), t);
				}
				readUint32() {
					let e = J.Uint32;
					this.ensureLength(e);
					let t = this.view.getUint32(this.offset);
					return ((this.offset += e), t);
				}
				readUint64() {
					let e = this.readBigUint64();
					return Number(e);
				}
				readBigUint64() {
					let e = J.BigUint64;
					this.ensureLength(e);
					let t = this.view.getBigUint64(this.offset);
					return ((this.offset += e), t);
				}
				readInt8() {
					let e = J.Int8;
					this.ensureLength(e);
					let t = this.view.getInt8(this.offset);
					return ((this.offset += e), t);
				}
				readInt16() {
					let e = J.Int16;
					this.ensureLength(e);
					let t = this.view.getInt16(this.offset);
					return ((this.offset += e), t);
				}
				readInt32() {
					let e = J.Int32;
					this.ensureLength(e);
					let t = this.view.getInt32(this.offset);
					return ((this.offset += e), t);
				}
				readInt64() {
					let e = this.readBigInt64();
					return Number(e);
				}
				readBigInt64() {
					let e = J.BigInt64;
					this.ensureLength(e);
					let t = this.view.getBigInt64(this.offset);
					return ((this.offset += e), t);
				}
				readFloat32() {
					let e = J.Float32;
					this.ensureLength(e);
					let t = this.view.getFloat32(this.offset);
					return ((this.offset += e), t);
				}
				readFloat64() {
					let e = J.Float64;
					this.ensureLength(e);
					let t = this.view.getFloat64(this.offset);
					return ((this.offset += e), t);
				}
				readBytes(e) {
					let t = this.offset,
						n = t + e,
						r = this.bytes.subarray(t, n);
					return ((this.offset = n), r);
				}
				readString() {
					let e = this.readUint32(),
						t = this.readBytes(e);
					return this.decoder.decode(t);
				}
				readJson() {
					let e = this.readString();
					return JSON.parse(e);
				}
				constructor(e) {
					((this.bytes = e),
						q(this, `offset`, 0),
						q(this, `view`),
						q(this, `decoder`, new TextDecoder()),
						(this.view = En(this.bytes)));
				}
			}),
			i !== void 0 && i.requestIdleCallback,
			(kr = (e) => 2 ** e - 1),
			(Ar = (e) => -(2 ** (e - 1))),
			(jr = (e) => 2 ** (e - 1) - 1),
			Ar(8),
			Ar(16),
			Ar(32),
			-(BigInt(2) ** BigInt(63)),
			kr(8),
			kr(16),
			kr(32),
			BigInt(2) ** BigInt(64) - BigInt(1),
			jr(8),
			jr(16),
			jr(32),
			BigInt(2) ** BigInt(63) - BigInt(1),
			(Y = class e {
				static fromString(t) {
					let [n, r, i] = t.split(`/`).map(Number);
					return (
						V(U(n), `Invalid chunkId`),
						V(U(r), `Invalid offset`),
						V(U(i), `Invalid length`),
						new e(n, r, i)
					);
				}
				toString() {
					return `${this.chunkId}/${this.offset}/${this.length}`;
				}
				static read(t) {
					return new e(
						t.readUint16(),
						t.readUint32(),
						t.readUint32(),
					);
				}
				write(e) {
					(e.writeUint16(this.chunkId),
						e.writeUint32(this.offset),
						e.writeUint32(this.length));
				}
				compare(e) {
					return this.chunkId < e.chunkId
						? -1
						: this.chunkId > e.chunkId
							? 1
							: this.offset < e.offset
								? -1
								: this.offset > e.offset
									? 1
									: (V(this.length === e.length), 0);
				}
				constructor(e, t, n) {
					((this.chunkId = e), (this.offset = t), (this.length = n));
				}
			}),
			((e) => {
				((e.read = function (e) {
					let t = e.readUint8();
					switch (t) {
						case 0:
							return null;
						case 1:
							return kn(e);
						case 2:
							return Mn(e);
						case 3:
							return Fn(e);
						case 4:
							return Rn(e);
						case 5:
							return Vn(e);
						case 6:
							return Wn(e);
						case 7:
							return qn(e);
						case 8:
							return Xn(e);
						case 9:
							return $n(e);
						case 10:
							return nr(e);
						case 11:
							return ar(e);
						case 12:
							return cr(e);
						case 13:
							return dr(e);
						default:
							H(t);
					}
				}),
					(e.write = function (e, t) {
						let n = On(t);
						if ((e.writeUint8(n), !W(t)))
							switch (t.type) {
								case j.Array:
									return An(e, t);
								case j.Boolean:
									return Nn(e, t);
								case j.Color:
									return In(e, t);
								case j.Date:
									return zn(e, t);
								case j.Enum:
									return Hn(e, t);
								case j.File:
									return Gn(e, t);
								case j.Link:
									return Jn(e, t);
								case j.Number:
									return Zn(e, t);
								case j.Object:
									return er(e, t);
								case j.ResponsiveImage:
									return rr(e, t);
								case j.RichText:
									return or(e, t);
								case j.VectorSetItem:
									return fr(e, t);
								case j.String:
									return lr(e, t);
								default:
									H(t);
							}
					}),
					(e.compare = function (e, t, n) {
						let r = On(e),
							i = On(t);
						if (r < i) return -1;
						if (r > i) return 1;
						if (W(e) || W(t)) return 0;
						switch (e.type) {
							case j.Array:
								return (V(t.type === j.Array), jn(e, t, n));
							case j.Boolean:
								return (V(t.type === j.Boolean), Pn(e, t));
							case j.Color:
								return (V(t.type === j.Color), Ln(e, t));
							case j.Date:
								return (V(t.type === j.Date), Bn(e, t));
							case j.Enum:
								return (V(t.type === j.Enum), Un(e, t));
							case j.File:
								return (V(t.type === j.File), Kn(e, t));
							case j.Link:
								return (V(t.type === j.Link), Yn(e, t));
							case j.Number:
								return (V(t.type === j.Number), Qn(e, t));
							case j.Object:
								return (V(t.type === j.Object), tr(e, t, n));
							case j.ResponsiveImage:
								return (
									V(t.type === j.ResponsiveImage),
									ir(e, t)
								);
							case j.RichText:
								return (V(t.type === j.RichText), sr(e, t));
							case j.VectorSetItem:
								return (
									V(t.type === j.VectorSetItem),
									pr(e, t)
								);
							case j.String:
								return (V(t.type === j.String), ur(e, t, n));
							default:
								H(e);
						}
					}));
			})((G ||= {})),
			(Mr = 3),
			(Nr = 250),
			(Pr = [408, 429, 500, 502, 503, 504]),
			(Fr = async (e, t) => {
				let n = 0;
				for (;;) {
					try {
						let r = await fetch(e, t);
						if (!Pr.includes(r.status) || ++n > Mr) return r;
					} catch (e) {
						if (t?.signal?.aborted || ++n > Mr) throw e;
					}
					await mr(n);
				}
			}),
			(Ir = class {
				read(e, t) {
					for (let n of this.chunks) {
						if (e < n.start) break;
						if (e > n.end) continue;
						if (e + t > n.end) break;
						let r = e - n.start,
							i = r + t;
						return n.data.slice(r, i);
					}
					throw Error(`Missing data`);
				}
				write(e, t) {
					let n = e,
						r = n + t.length,
						i = 0,
						a = this.chunks.length;
					for (; i < a; i++) {
						let e = this.chunks[i];
						if ((V(e, `Missing chunk`), !(n > e.end))) {
							if (n > e.start) {
								let r = n - e.start;
								((t = gr(e.data.subarray(0, r), t)),
									(n = e.start));
							}
							break;
						}
					}
					for (; a > i; a--) {
						let e = this.chunks[a - 1];
						if ((V(e, `Missing chunk`), !(r < e.start))) {
							if (r < e.end) {
								let n = r - e.start,
									i = e.data.subarray(n);
								((t = gr(t, i)), (r = e.end));
							}
							break;
						}
					}
					let o = { start: n, end: r, data: t },
						s = a - i;
					this.chunks.splice(i, s, o);
				}
				constructor() {
					q(this, `chunks`, []);
				}
			}),
			(Lr = class e {
				static read(t) {
					let n = new e(),
						r = t.readUint16();
					for (let e = 0; e < r; e++) {
						let e = t.readString(),
							r = G.read(t);
						n.setField(e, r);
					}
					return n;
				}
				write(e) {
					for (let [t, n] of (e.writeUint16(this.fields.size),
					this.fields))
						(e.writeString(t), G.write(e, n));
				}
				getData() {
					let e = {};
					for (let [t, n] of this.fields) e[t] = n;
					return e;
				}
				setField(e, t) {
					this.fields.set(e, t);
				}
				getField(e) {
					return this.fields.get(e);
				}
				constructor() {
					q(this, `fields`, new Map());
				}
			}),
			(Rr = class {
				scanItems() {
					return (
						(this.itemsPromise ??= Fr(this.url).then(async (e) => {
							if (!e.ok) { if (e.status === 404) return []; throw Error(`Request failed: ${e.status} ${e.statusText}`); }
							let t = await e.arrayBuffer(),
								n = new Or(new Uint8Array(t)),
								r = [],
								i = n.readUint32();
							for (let e = 0; e < i; e++) {
								let e = n.getOffset(),
									t = Lr.read(n),
									i = n.getOffset() - e,
									a = new Y(this.id, e, i).toString(),
									o = { pointer: a, data: t.getData() };
								(this.itemLoader.prime(a, o), r.push(o));
							}
							return r;
						})),
						this.itemsPromise
					);
				}
				resolveItem(e) {
					return this.itemLoader.load(e);
				}
				constructor(e, t) {
					((this.id = e),
						(this.url = t),
						q(this, `itemsPromise`),
						q(
							this,
							`itemLoader`,
							new Dr.default(async (e) => {
								let t = e.map((e) => {
									let t = Y.fromString(e);
									return {
										from: t.offset,
										to: t.offset + t.length,
									};
								});
								return (await hr(this.url, t)).map((t, n) => {
									let r = new Or(t),
										i = Lr.read(r),
										a = e[n];
									return (
										V(a, `Missing pointer`),
										{ pointer: a, data: i.getData() }
									);
								});
							}),
						));
				}
			}),
			(zr = class {
				async scanItems() {
					return (
						await Promise.all(
							this.chunks.map(async (e) => e.scanItems()),
						)
					).flat();
				}
				async resolveItems(e) {
					return Promise.all(
						e.map((e) => {
							let t = Y.fromString(e),
								n = this.chunks[t.chunkId];
							return (V(n, `Missing chunk`), n.resolveItem(e));
						}),
					);
				}
				compareItems(e, t) {
					let n = Y.fromString(e.pointer),
						r = Y.fromString(t.pointer);
					return n.compare(r);
				}
				compareValues(e, t, n) {
					return G.compare(e, t, n);
				}
				constructor(e) {
					((this.options = e),
						q(this, `schema`),
						q(this, `indexes`),
						q(this, `resolveRichText`),
						q(this, `resolveVectorSetItem`),
						q(this, `chunks`),
						(this.chunks = this.options.chunks.map(
							(e, t) => new Rr(t, e),
						)),
						(this.schema = e.schema),
						(this.indexes = e.indexes),
						(this.resolveRichText = e.resolveRichText),
						(this.resolveVectorSetItem = e.resolveVectorSetItem));
				}
			}));
	});
function Vr(e) {
	return typeof e == `object` && !!e && !o(e) && Wr in e;
}
function Hr(e, ...t) {
	if (!e)
		throw Error(
			`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``),
		);
}
function Ur(e) {
	let n = new Map();
	return (r) => {
		let i = n.get(r);
		if (i) return i;
		let o = (function n(r) {
			switch (r[0]) {
				case 1: {
					let [, ...e] = r;
					return f(t, void 0, ...e.map(n));
				}
				case 2: {
					let [, e, ...t] = r;
					return f(M, e, ...t.map(n));
				}
				case 3: {
					let [, t, n] = r,
						i = e[t];
					return (
						Hr(i, `Module not found`),
						Vr(i) && i.preload(),
						a(fe, {
							componentIdentifier: t,
							children: (e) => a(i, { ...e, ...n }),
						})
					);
				}
				case 4: {
					let [, e, t, ...i] = r,
						a = i.map(n);
					return f(e === `a` ? m.a : e, t, ...a);
				}
				case 5: {
					let [, e] = r;
					return e;
				}
			}
		})(JSON.parse(r));
		return (n.set(r, o), o);
	};
}
var X,
	Wr,
	Gr,
	Kr = e(() => {
		(d(),
			A(),
			r(),
			(Wr = `preload`),
			(Gr =
				(((X = Gr || {})[(X.Fragment = 1)] = `Fragment`),
				(X[(X.Link = 2)] = `Link`),
				(X[(X.Module = 3)] = `Module`),
				(X[(X.Tag = 4)] = `Tag`),
				(X[(X.Text = 5)] = `Text`),
				X)));
	}),
	qr,
	Jr,
	Yr,
	Xr,
	Zr,
	Qr,
	$r = e(() => {
		(A(),
			Br(),
			Kr(),
			(qr = {
				createdAt: { isNullable: !0, type: j.Date },
				ekG3MrkW5: { isNullable: !0, type: j.String },
				HrV5dLLcf: { isNullable: !0, type: j.String },
				id: { isNullable: !1, type: j.String },
				nextItemId: { isNullable: !0, type: j.String },
				Pn5jDwQR6: { isNullable: !0, type: j.ResponsiveImage },
				previousItemId: { isNullable: !0, type: j.String },
				qP13uxHga: { isNullable: !0, type: j.String },
				updatedAt: { isNullable: !0, type: j.Date },
			}),
			(Jr = []),
			(Yr = (e) => {
				let t = Jr[e];
				if (t) return t().then((e) => e.default);
			}),
			(Xr = Ur({})),
			new E(new v()),
			(Zr = {
				collectionByLocaleId: {
					default: new zr({
						chunks: [
							new URL(
								`./i1I6pp4ds-chunk-default-0.framercms`,
								location.origin + `/assets/js/cms-authors.js`,
							).href.replace(`/modules/`, `/cms/`),
						],
						indexes: [],
						resolveRichText: Xr,
						resolveVectorSetItem: Yr,
						schema: qr,
					}),
				},
				displayName: `Authors`,
			}),
			(Qr = Zr),
			_(Zr, {
				HrV5dLLcf: {
					defaultValue: ``,
					title: `Author Name`,
					type: j.String,
				},
				Pn5jDwQR6: { title: `Photo Avatar`, type: j.ResponsiveImage },
				ekG3MrkW5: {
					defaultValue: ``,
					title: `Position in Company`,
					type: j.String,
				},
				qP13uxHga: { title: `Slug`, type: j.String },
				createdAt: { title: `Created`, type: j.Date },
				updatedAt: { title: `Updated`, type: j.Date },
				previousItemId: {
					dataIdentifier: `local-module:collection/i1I6pp4ds:default`,
					title: `Previous`,
					type: j.CollectionReference,
				},
				nextItemId: {
					dataIdentifier: `local-module:collection/i1I6pp4ds:default`,
					title: `Next`,
					type: j.CollectionReference,
				},
			}));
	}),
	ei,
	ti,
	ni,
	ri,
	ii,
	ai = e(() => {
		(d(),
			A(),
			r(),
			(ei = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg"><g d="M 12 0 L 12 2.673 L 0.861 6.809 L 0.861 7.191 L 12 11.327 L 12 14 L 0 9.418 L 0 4.582 Z" fill="transparent" height="14px" id="JTYRgPDoI" transform="translate(6 6)" width="12px"><path d="M 12 0 L 12 2.673 L 0.861 6.809 L 0.861 7.191 L 12 11.327 L 12 14 L 0 9.418 L 0 4.582 Z" fill="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))" height="14px" id="UGfEzvvn2" width="12px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(ti = s((e, t) => {
				let { animated: n, layoutId: r, children: i, ...o } = e;
				return n
					? a(m.div, { ...o, layoutId: r, ref: t })
					: a(`div`, { ...o, ref: t });
			})),
			(ni = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(ri = x(
				s(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: o,
						...s
					} = ni(e);
					return a(ti, {
						...s,
						className: T(`framer-UX8Zr`, r),
						layoutId: i,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-UX8Zr { -webkit-mask: ${ei}; aspect-ratio: 0.96; background-color: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, #ffffff); mask: ${ei}; width: 24px; }`,
				],
				`framer-UX8Zr`,
			)),
			(ri.displayName = `Left One White 1`),
			(ii = ri));
	}),
	oi,
	si,
	ci,
	li,
	ui,
	di,
	fi,
	pi,
	mi,
	hi,
	gi,
	Z,
	_i,
	vi,
	yi,
	bi,
	Q,
	xi,
	Si,
	Ci,
	wi,
	Ti,
	$,
	Ei,
	Di;
e(() => {
	(d(),
		A(),
		g(),
		r(),
		Yt(),
		ke(),
		vt(),
		dt(),
		Tn(),
		$r(),
		lt(),
		Fe(),
		Se(),
		Be(),
		$e(),
		ye(),
		Te(),
		qe(),
		Qe(),
		pt(),
		Ve(),
		je(),
		at(),
		ai(),
		bt(),
		(oi = S(_t)),
		(si = S(Ae)),
		(ci = S(wn)),
		(li = S(Jt)),
		(ui = S(ft)),
		(di = {
			eDWXDaK8q: `(min-width: 810px) and (max-width: 1199.98px)`,
			VKUtkn_tD: `(min-width: 1200px)`,
			wIOMGd3LA: `(max-width: 809.98px)`,
		}),
		(fi = () => typeof document < `u`),
		(pi = []),
		(mi = `framer-LA4OI`),
		(hi = {
			eDWXDaK8q: `framer-v-1s4m657`,
			VKUtkn_tD: `framer-v-1bt0fe1`,
			wIOMGd3LA: `framer-v-11n9y1n`,
		}),
		(gi = (e, t, n) => (e && t ? `position` : n)),
		(Z = (e) =>
			typeof e == `object` && e && typeof e.src == `string`
				? e
				: typeof e == `string`
					? { src: e }
					: void 0),
		(_i = {
			opacity: 0.7,
			rotate: 0,
			rotateX: 0,
			rotateY: 0,
			scale: 1,
			skewX: 0,
			skewY: 0,
			transition: {
				bounce: 0.25,
				delay: 0,
				duration: 0.45,
				type: `spring`,
			},
		}),
		(vi = (e, t, n) => {
			if (typeof e != `string`) return ``;
			let r = new Date(e);
			if (isNaN(r.getTime())) return ``;
			let i = `en-US`;
			try {
				return r.toLocaleString(n || i, t);
			} catch {
				return r.toLocaleString(i, t);
			}
		}),
		(yi = { dateStyle: `medium`, timeZone: `UTC` }),
		(bi = (e, t) => vi(e, yi, t)),
		(Q = (...e) => {
			for (let t of e) if (t && typeof t == `string`) return t;
		}),
		(xi = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
		(Si = {
			"Desktop - 1200": `VKUtkn_tD`,
			Phone: `wIOMGd3LA`,
			Tablet: `eDWXDaK8q`,
		}),
		(Ci = ({ value: e }) =>
			ce()
				? null
				: a(`style`, {
						dangerouslySetInnerHTML: { __html: e },
						"data-framer-html-style": ``,
					})),
		(wi = (e) => ({
			from: {
				constraint: {
					left: {
						collection: `bIrb34sTa`,
						name: `nextItemId`,
						type: `Identifier`,
					},
					operator: `==`,
					right: {
						collection: `nextItemId`,
						name: `id`,
						type: `Identifier`,
					},
					type: `BinaryOperation`,
				},
				left: {
					constraint: {
						left: {
							collection: `bIrb34sTa`,
							name: `previousItemId`,
							type: `Identifier`,
						},
						operator: `==`,
						right: {
							collection: `previousItemId`,
							name: `id`,
							type: `Identifier`,
						},
						type: `BinaryOperation`,
					},
					left: {
						constraint: {
							left: {
								collection: `bIrb34sTa`,
								name: `DmIfvWJXK`,
								type: `Identifier`,
							},
							operator: `==`,
							right: {
								collection: `DmIfvWJXK`,
								name: `id`,
								type: `Identifier`,
							},
							type: `BinaryOperation`,
						},
						left: {
							alias: `bIrb34sTa`,
							data: ut,
							type: `Collection`,
						},
						right: {
							alias: `DmIfvWJXK`,
							data: Qr,
							type: `Collection`,
						},
						type: `LeftJoin`,
					},
					right: {
						alias: `previousItemId`,
						data: ut,
						type: `Collection`,
					},
					type: `LeftJoin`,
				},
				right: { alias: `nextItemId`, data: ut, type: `Collection` },
				type: `LeftJoin`,
			},
			select: [
				{
					collection: `bIrb34sTa`,
					name: `Xk3s85B2e`,
					type: `Identifier`,
				},
				{
					collection: `bIrb34sTa`,
					name: `jQUyHezL3`,
					type: `Identifier`,
				},
				{
					collection: `bIrb34sTa`,
					name: `RXbR2n5hz`,
					type: `Identifier`,
				},
				{
					collection: `bIrb34sTa`,
					name: `tUjGhFa0z`,
					type: `Identifier`,
				},
				{
					collection: `bIrb34sTa`,
					name: `AZrA2zOaE`,
					type: `Identifier`,
				},
				{
					alias: `DmIfvWJXK.HrV5dLLcf`,
					collection: `DmIfvWJXK`,
					name: `HrV5dLLcf`,
					type: `Identifier`,
				},
				{
					alias: `DmIfvWJXK.Pn5jDwQR6`,
					collection: `DmIfvWJXK`,
					name: `Pn5jDwQR6`,
					type: `Identifier`,
				},
				{
					alias: `DmIfvWJXK.ekG3MrkW5`,
					collection: `DmIfvWJXK`,
					name: `ekG3MrkW5`,
					type: `Identifier`,
				},
				{
					alias: `previousItemId.Xk3s85B2e`,
					collection: `previousItemId`,
					name: `Xk3s85B2e`,
					type: `Identifier`,
				},
				{
					alias: `previousItemId.oeVdX_wT7`,
					collection: `previousItemId`,
					name: `oeVdX_wT7`,
					type: `Identifier`,
				},
				{
					alias: `previousItemId`,
					collection: `previousItemId`,
					name: `id`,
					type: `Identifier`,
				},
				{
					alias: `nextItemId.Xk3s85B2e`,
					collection: `nextItemId`,
					name: `Xk3s85B2e`,
					type: `Identifier`,
				},
				{
					alias: `nextItemId.oeVdX_wT7`,
					collection: `nextItemId`,
					name: `oeVdX_wT7`,
					type: `Identifier`,
				},
				{
					alias: `nextItemId`,
					collection: `nextItemId`,
					name: `id`,
					type: `Identifier`,
				},
			],
			where: e,
		})),
		(Ti = ({ height: e, id: t, width: n, ...r }) => ({
			...r,
			variant: Si[r.variant] ?? r.variant ?? `VKUtkn_tD`,
		})),
		($ = x(
			s(function (e, r) {
				let i = l(null),
					o = r ?? i,
					s = ee(),
					{ activeLocale: d, setLocale: f } = ge(),
					p = de(),
					g = he(),
					[_] = _e(wi(w(g, `bIrb34sTa`))),
					v = (e) => {
						if (!_)
							throw new ie(
								`No data matches path variables: ${JSON.stringify(g)}`,
							);
						return _[e];
					},
					{
						style: y,
						className: x,
						layoutId: S,
						variant: C,
						Xk3s85B2e: E = v(`Xk3s85B2e`) ?? ``,
						jQUyHezL3: D = v(`jQUyHezL3`),
						RXbR2n5hz: O = v(`RXbR2n5hz`) ?? ``,
						tUjGhFa0z: A = v(`tUjGhFa0z`),
						AZrA2zOaE: j = v(`AZrA2zOaE`) ?? [],
						DmIfvWJXK_HrV5dLLcf: ce = v(`DmIfvWJXK.HrV5dLLcf`) ??
							``,
						DmIfvWJXK_Pn5jDwQR6: le = v(`DmIfvWJXK.Pn5jDwQR6`),
						DmIfvWJXK_ekG3MrkW5: ue = v(`DmIfvWJXK.ekG3MrkW5`) ??
							``,
						previousItemId_Xk3s85B2e: fe = v(
							`previousItemId.Xk3s85B2e`,
						) ?? ``,
						previousItemId_oeVdX_wT7: P = v(
							`previousItemId.oeVdX_wT7`,
						) ?? ``,
						previousItemId: ye = v(`previousItemId`),
						nextItemId_Xk3s85B2e: be = v(`nextItemId.Xk3s85B2e`) ??
							``,
						nextItemId_oeVdX_wT7: L = v(`nextItemId.oeVdX_wT7`) ??
							``,
						nextItemId: Se = v(`nextItemId`),
						...Ce
					} = Ti(e);
				ve(n(() => yt({ Xk3s85B2e: E }, d), [E, d]));
				let [R, Te] = pe(C, di, !1),
					Ee = T(mi, ct, Xe, Re, gt, it, Ze, ze, we, Ke, Pe, Oe, xe),
					De = c(me)?.isLayoutTemplate,
					ke = gi(De, !!c(h)?.transition?.layout);
				ne();
				let je = bi(D, ae()),
					Me = () => (fi() ? R !== `wIOMGd3LA` : !0),
					Ne = xi(ye),
					Fe = xi(Se);
				return (
					se({}),
					a(me.Provider, {
						value: {
							activeVariantId: R,
							humanReadableVariantMap: Si,
							primaryVariantId: `VKUtkn_tD`,
							variantClassNames: hi,
						},
						children: u(te, {
							id: S ?? s,
							children: [
								a(Ci, {
									value: `html body { background: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)); }`,
								}),
								u(m.div, {
									...Ce,
									className: T(Ee, `framer-1bt0fe1`, x),
									ref: o,
									style: { ...y },
									children: [
										a(m.section, {
											className: `framer-13iovet`,
											layout: ke,
											children: u(`div`, {
												className: `framer-1dsol52`,
												
												children: [
													a(`div`, {
														className: `framer-13voud4`,
														
													}),
													a(I, {
														breakpoint: R,
														overrides: {
															eDWXDaK8q: {
																background: {
																	alt: ``,
																	fit: `fill`,
																	loading: k(
																		(p?.y ||
																			0) +
																			140 +
																			0 +
																			0 +
																			0 +
																			0 +
																			90,
																	),
																	pixelHeight: 1192,
																	pixelWidth: 3040,
																	sizes: `calc(min(${p?.width || `100vw`} - 40px, 1600px) - 60px)`,
																	...Z(A),
																},
															},
															wIOMGd3LA: {
																background: {
																	alt: ``,
																	fit: `fill`,
																	loading: k(
																		(p?.y ||
																			0) +
																			140 +
																			0 +
																			0 +
																			0 +
																			0 +
																			90,
																	),
																	pixelHeight: 1192,
																	pixelWidth: 3040,
																	sizes: `calc(min(${p?.width || `100vw`} - 40px, 1600px) - 4px)`,
																	...Z(A),
																},
															},
														},
														children: u(oe, {
															background: {
																alt: ``,
																fit: `fill`,
																loading: k(
																	(p?.y ||
																		0) +
																		140 +
																		0 +
																		0 +
																		0 +
																		0 +
																		90,
																),
																pixelHeight: 1192,
																pixelWidth: 3040,
																sizes: `calc(min(${p?.width || `100vw`} - 40px, 1600px) - 80px)`,
																...Z(A),
															},
															className: `framer-4xw0m1`,
															children: [
																a(`div`, {
																	className: `framer-1bnqxlz`,
																}),
																a(re, {
																	links: [
																		{
																			href: {
																				webPageId: `jfdaAH2x_`,
																			},
																			implicitPathVariables:
																				void 0,
																		},
																		{
																			href: {
																				webPageId: `jfdaAH2x_`,
																			},
																			implicitPathVariables:
																				void 0,
																		},
																		{
																			href: {
																				webPageId: `jfdaAH2x_`,
																			},
																			implicitPathVariables:
																				void 0,
																		},
																	],
																	children: (
																		e,
																	) =>
																		a(I, {
																			breakpoint:
																				R,
																			overrides:
																				{
																					wIOMGd3LA:
																						{
																							y:
																								(p?.y ||
																									0) +
																								140 +
																								0 +
																								0 +
																								0 +
																								0 +
																								90 +
																								25,
																						},
																				},
																			children:
																				a(
																					F,
																					{
																						height: 39,
																						y:
																							(p?.y ||
																								0) +
																							140 +
																							0 +
																							0 +
																							0 +
																							0 +
																							90 +
																							30,
																						children:
																							a(
																								N,
																								{
																									className: `framer-1ipbzst-container`,
																									name: `Back Link`,
																									nodeId: `jP7cysE1m`,
																									rendersWithMotion:
																										!0,
																									scopeId: `bIrb34sTa`,
																									whileHover:
																										_i,
																									children:
																										a(
																											I,
																											{
																												breakpoint:
																													R,
																												overrides:
																													{
																														eDWXDaK8q:
																															{
																																ZDsHw6oyQ:
																																	e[1],
																															},
																														wIOMGd3LA:
																															{
																																ZDsHw6oyQ:
																																	e[2],
																															},
																													},
																												children:
																													a(
																														_t,
																														{
																															height: `100%`,
																															id: `jP7cysE1m`,
																															layoutId: `jP7cysE1m`,
																															lKGneMq0k: `Back to Blog`,
																															name: `Back Link`,
																															nlWGHHygY:
																																ii,
																															nYSQk00RJ: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																															width: `100%`,
																															ZDsHw6oyQ:
																																e[0],
																														},
																													),
																											},
																										),
																								},
																							),
																					},
																				),
																		}),
																}),
																a(I, {
																	breakpoint:
																		R,
																	overrides: {
																		eDWXDaK8q:
																			{
																				children:
																					a(
																						t,
																						{
																							children:
																								a(
																									`h4`,
																									{
																										className: `framer-styles-preset-1ri87jd`,
																										"data-styles-preset": `LuOKrK4j8`,
																										style: {
																											"--framer-text-alignment": `left`,
																											"--framer-text-color": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																										},
																										children: `Fresh Visual Trends in 2026`,
																									},
																								),
																						},
																					),
																			},
																		wIOMGd3LA:
																			{
																				children:
																					a(
																						t,
																						{
																							children:
																								a(
																									`h6`,
																									{
																										className: `framer-styles-preset-nkm6se`,
																										"data-styles-preset": `BaUGQBb6A`,
																										style: {
																											"--framer-text-alignment": `left`,
																											"--framer-text-color": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																										},
																										children: `Fresh Visual Trends in 2026`,
																									},
																								),
																						},
																					),
																			},
																	},
																	children: a(
																		b,
																		{
																			__fromCanvasComponent:
																				!0,
																			children:
																				a(
																					t,
																					{
																						children:
																							a(
																								`h1`,
																								{
																									className: `framer-styles-preset-1yuak3c`,
																									"data-styles-preset": `zczqo4Z8y`,
																									style: {
																										"--framer-text-alignment": `left`,
																										"--framer-text-color": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																									},
																									children: `Fresh Visual Trends in 2026`,
																								},
																							),
																					},
																				),
																			className: `framer-mg9868`,
																			
																			fonts: [
																				`Inter`,
																			],
																			text: E,
																			verticalAlignment: `top`,
																			withExternalLayout:
																				!0,
																		},
																	),
																}),
																a(b, {
																	__fromCanvasComponent:
																		!0,
																	children: a(
																		t,
																		{
																			children:
																				a(
																					`h6`,
																					{
																						className: `framer-styles-preset-8moxfa`,
																						"data-styles-preset": `NqfjhJTm6`,
																						style: {
																							"--framer-text-alignment": `right`,
																							"--framer-text-color": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																						},
																						children: `Oct 1, 2025`,
																					},
																				),
																		},
																	),
																	className: `framer-xxpuv`,
																	fonts: [
																		`Inter`,
																	],
																	text: a(
																		`time`,
																		{
																			dateTime:
																				D,
																			children:
																				je,
																		},
																	),
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																}),
															],
														}),
													}),
													a(`div`, {
														className: `framer-ilxppo`,
														
													}),
													a(`div`, {
														className: `framer-fejqmp`,
														
														children: a(b, {
															__fromCanvasComponent:
																!0,
															children: O,
															className: `framer-3bo595`,
															fonts: [`Inter`],
															stylesPresetsClassNames:
																{
																	a: `framer-styles-preset-mgrqd0`,
																	h1: `framer-styles-preset-4xb9o`,
																	h2: `framer-styles-preset-g6dfhq`,
																	h3: `framer-styles-preset-1yuak3c`,
																	h4: `framer-styles-preset-1ri87jd`,
																	h5: `framer-styles-preset-h6j8it`,
																	h6: `framer-styles-preset-17vg3ju`,
																	p: `framer-styles-preset-11kcybb`,
																},
															verticalAlignment: `top`,
															withExternalLayout:
																!0,
														}),
													}),
													a(`div`, {
														className: `framer-qhwvnb`,
														
													}),
													a(`div`, {
														className: `framer-60fp0y`,
														children: j?.map(
															(
																{
																	id: e,
																	rSvR3YyOI:
																		t,
																},
																n,
															) =>
																a(
																	te,
																	{
																		id: `sy5oFVQDg-${e ?? n}`,
																		children:
																			a(
																				I,
																				{
																					breakpoint:
																						R,
																					overrides:
																						{
																							eDWXDaK8q:
																								{
																									background:
																										{
																											alt: ``,
																											fit: `fill`,
																											loading:
																												k(
																													(p?.y ||
																														0) +
																														140 +
																														0 +
																														0 +
																														0 +
																														0 +
																														696 +
																														0,
																												),
																											sizes: `calc(min(${p?.width || `100vw`} - 40px, 1600px) - 60px)`,
																											...Z(
																												t,
																											),
																										},
																								},
																							wIOMGd3LA:
																								{
																									background:
																										{
																											alt: ``,
																											fit: `fill`,
																											loading:
																												k(
																													(p?.y ||
																														0) +
																														140 +
																														0 +
																														0 +
																														0 +
																														0 +
																														631 +
																														0,
																												),
																											sizes: `max(min(min(${p?.width || `100vw`} - 40px, 1600px) - 4px, 670px), 1px)`,
																											...Z(
																												t,
																											),
																										},
																								},
																						},
																					children:
																						a(
																							oe,
																							{
																								background:
																									{
																										alt: ``,
																										fit: `fill`,
																										loading:
																											k(
																												(p?.y ||
																													0) +
																													140 +
																													0 +
																													0 +
																													0 +
																													0 +
																													786 +
																													0,
																											),
																										sizes: `min(min(${p?.width || `100vw`} - 40px, 1600px) - 80px, 670px)`,
																										...Z(
																											t,
																										),
																									},
																								className: `framer-1v534zx`,
																								
																								fitImageDimension: `height`,
																							},
																						),
																				},
																			),
																	},
																	e ?? n,
																),
														),
													}),
													u(`div`, {
														className: `framer-cdnkl8`,
														children: [
															a(`div`, {
																className: `framer-1duemje`,
																
															}),
															u(`div`, {
																className: `framer-1l85j7x`,
																children: [
																	u(`div`, {
																		className: `framer-1usmbvg`,
																		children:
																			[
																				a(
																					I,
																					{
																						breakpoint:
																							R,
																						overrides:
																							{
																								eDWXDaK8q:
																									{
																										y:
																											(p?.y ||
																												0) +
																											140 +
																											0 +
																											0 +
																											0 +
																											0 +
																											694 +
																											0 +
																											50 +
																											0 +
																											0 +
																											0 +
																											0,
																									},
																								wIOMGd3LA:
																									{
																										y:
																											(p?.y ||
																												0) +
																											140 +
																											0 +
																											0 +
																											0 +
																											0 +
																											629 +
																											0 +
																											40 +
																											0 +
																											0 +
																											0 +
																											0,
																									},
																							},
																						children:
																							a(
																								F,
																								{
																									height: 66,
																									width: `66px`,
																									y:
																										(p?.y ||
																											0) +
																										140 +
																										0 +
																										0 +
																										0 +
																										0 +
																										784 +
																										0 +
																										60 +
																										0 +
																										0 +
																										0 +
																										0,
																									children:
																										a(
																											N,
																											{
																												className: `framer-xqg3eb-container`,
																												nodeId: `Ob1COx2ES`,
																												scopeId: `bIrb34sTa`,
																												children:
																													a(
																														Ae,
																														{
																															hcJOIuTE0:
																																Z(
																																	le,
																																),
																															height: `100%`,
																															id: `Ob1COx2ES`,
																															layoutId: `Ob1COx2ES`,
																															style: {
																																height: `100%`,
																																width: `100%`,
																															},
																															variant:
																																Q(
																																	`pI7Yj7FYQ`,
																																),
																															width: `100%`,
																														},
																													),
																											},
																										),
																								},
																							),
																					},
																				),
																				a(
																					`div`,
																					{
																						className: `framer-mxqmc5`,
																						
																					},
																				),
																				a(
																					b,
																					{
																						__fromCanvasComponent:
																							!0,
																						children:
																							a(
																								t,
																								{
																									children:
																										a(
																											`h6`,
																											{
																												className: `framer-styles-preset-12tby5a`,
																												"data-styles-preset": `j9HsFBXUW`,
																												style: {
																													"--framer-text-alignment": `center`,
																													"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																												},
																												children: `Author`,
																											},
																										),
																								},
																							),
																						className: `framer-1g7mfs7`,
																						fonts: [
																							`Inter`,
																						],
																						verticalAlignment: `top`,
																						withExternalLayout:
																							!0,
																					},
																				),
																				a(
																					b,
																					{
																						__fromCanvasComponent:
																							!0,
																						children:
																							a(
																								t,
																								{
																									children:
																										a(
																											`h6`,
																											{
																												className: `framer-styles-preset-8moxfa`,
																												"data-styles-preset": `NqfjhJTm6`,
																												style: {
																													"--framer-text-alignment": `center`,
																													"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																												},
																												children: `Margaret Reed`,
																											},
																										),
																								},
																							),
																						className: `framer-6fpyy2`,
																						fonts: [
																							`Inter`,
																						],
																						text: ce,
																						verticalAlignment: `top`,
																						withExternalLayout:
																							!0,
																					},
																				),
																			],
																	}),
																	a(`div`, {
																		className: `framer-j6ybrd`,
																		children:
																			a(
																				b,
																				{
																					__fromCanvasComponent:
																						!0,
																					children:
																						a(
																							t,
																							{
																								children:
																									a(
																										`h6`,
																										{
																											className: `framer-styles-preset-12tby5a`,
																											"data-styles-preset": `j9HsFBXUW`,
																											style: {
																												"--framer-text-alignment": `center`,
																											},
																											children: `Design Director`,
																										},
																									),
																							},
																						),
																					className: `framer-1m4uxbm`,
																					fonts: [
																						`Inter`,
																					],
																					text: ue,
																					verticalAlignment: `top`,
																					withExternalLayout:
																						!0,
																				},
																			),
																	}),
																],
															}),
															a(`div`, {
																className: `framer-twwqpn`,
																
															}),
															u(`div`, {
																className: `framer-zepmgc`,
																children: [
																	Me() &&
																		a(
																			`div`,
																			{
																				className: `framer-13lqs0q hidden-11n9y1n`,
																				
																			},
																		),
																	u(`div`, {
																		className: `framer-1f4zzku`,
																		children:
																			[
																				u(
																					`div`,
																					{
																						className: `framer-iv97xk`,
																						children:
																							[
																								Ne !==
																									!1 &&
																									a(
																										re,
																										{
																											links: [
																												{
																													href: {
																														pathVariables:
																															{
																																oeVdX_wT7:
																																	P,
																															},
																														webPageId: `bIrb34sTa`,
																													},
																													implicitPathVariables:
																														void 0,
																												},
																												{
																													href: {
																														pathVariables:
																															{
																																oeVdX_wT7:
																																	P,
																															},
																														webPageId: `bIrb34sTa`,
																													},
																													implicitPathVariables:
																														void 0,
																												},
																												{
																													href: {
																														pathVariables:
																															{
																																oeVdX_wT7:
																																	P,
																															},
																														webPageId: `bIrb34sTa`,
																													},
																													implicitPathVariables:
																														void 0,
																												},
																											],
																											children:
																												(
																													e,
																												) =>
																													a(
																														I,
																														{
																															breakpoint:
																																R,
																															overrides:
																																{
																																	eDWXDaK8q:
																																		{
																																			y:
																																				(p?.y ||
																																					0) +
																																				140 +
																																				0 +
																																				0 +
																																				0 +
																																				0 +
																																				694 +
																																				0 +
																																				236 +
																																				0 +
																																				30 +
																																				0 +
																																				-25.5,
																																		},
																																	wIOMGd3LA:
																																		{
																																			y:
																																				(p?.y ||
																																					0) +
																																				140 +
																																				0 +
																																				0 +
																																				0 +
																																				0 +
																																				629 +
																																				0 +
																																				241 +
																																				0 +
																																				0 +
																																				0 +
																																				0 +
																																				-25.5,
																																		},
																																},
																															children:
																																a(
																																	F,
																																	{
																																		height: 51,
																																		width: `51px`,
																																		y:
																																			(p?.y ||
																																				0) +
																																			140 +
																																			0 +
																																			0 +
																																			0 +
																																			0 +
																																			784 +
																																			0 +
																																			246 +
																																			0 +
																																			25 +
																																			0 +
																																			-25.5,
																																		children:
																																			a(
																																				N,
																																				{
																																					className: `framer-1khwypy-container`,
																																					nodeId: `DMDGAtOej`,
																																					scopeId: `bIrb34sTa`,
																																					children:
																																						a(
																																							I,
																																							{
																																								breakpoint:
																																									R,
																																								overrides:
																																									{
																																										eDWXDaK8q:
																																											{
																																												lxWL6u1VJ:
																																													e[1],
																																											},
																																										wIOMGd3LA:
																																											{
																																												lxWL6u1VJ:
																																													e[2],
																																											},
																																									},
																																								children:
																																									a(
																																										wn,
																																										{
																																											height: `100%`,
																																											id: `DMDGAtOej`,
																																											layoutId: `DMDGAtOej`,
																																											lxWL6u1VJ:
																																												e[0],
																																											style: {
																																												height: `100%`,
																																												width: `100%`,
																																											},
																																											width: `100%`,
																																										},
																																									),
																																							},
																																						),
																																				},
																																			),
																																	},
																																),
																														},
																													),
																										},
																									),
																								Ne !==
																									!1 &&
																									a(
																										b,
																										{
																											__fromCanvasComponent:
																												!0,
																											children:
																												a(
																													t,
																													{
																														children:
																															a(
																																`h6`,
																																{
																																	className: `framer-styles-preset-41ki07`,
																																	"data-styles-preset": `hmRgK3K6v`,
																																	style: {
																																		"--framer-text-alignment": `left`,
																																		"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																	},
																																	children:
																																		a(
																																			M,
																																			{
																																				href: {
																																					pathVariables:
																																						{
																																							oeVdX_wT7:
																																								P,
																																						},
																																					webPageId: `bIrb34sTa`,
																																				},
																																				motionChild:
																																					!0,
																																				nodeId: `ODnWCimZW`,
																																				openInNewTab:
																																					!1,
																																				relValues:
																																					[],
																																				scopeId: `bIrb34sTa`,
																																				smoothScroll:
																																					!1,
																																				children:
																																					a(
																																						m.a,
																																						{
																																							className: `framer-styles-preset-mgrqd0`,
																																							"data-styles-preset": `q7NcKTKUL`,
																																							children: `Content`,
																																						},
																																					),
																																			},
																																		),
																																},
																															),
																													},
																												),
																											className: `framer-1bio65p`,
																											fonts: [
																												`Inter`,
																											],
																											text: fe,
																											verticalAlignment: `top`,
																											withExternalLayout:
																												!0,
																										},
																									),
																							],
																					},
																				),
																				a(
																					`div`,
																					{
																						className: `framer-1i304bx`,
																						
																					},
																				),
																				u(
																					`div`,
																					{
																						className: `framer-23qc56`,
																						children:
																							[
																								Fe !==
																									!1 &&
																									a(
																										b,
																										{
																											__fromCanvasComponent:
																												!0,
																											children:
																												a(
																													t,
																													{
																														children:
																															a(
																																`h6`,
																																{
																																	className: `framer-styles-preset-41ki07`,
																																	"data-styles-preset": `hmRgK3K6v`,
																																	style: {
																																		"--framer-text-alignment": `right`,
																																		"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																	},
																																	children:
																																		a(
																																			M,
																																			{
																																				href: {
																																					pathVariables:
																																						{
																																							oeVdX_wT7:
																																								L,
																																						},
																																					webPageId: `bIrb34sTa`,
																																				},
																																				motionChild:
																																					!0,
																																				nodeId: `eJ09Sl91S`,
																																				openInNewTab:
																																					!1,
																																				relValues:
																																					[],
																																				scopeId: `bIrb34sTa`,
																																				smoothScroll:
																																					!1,
																																				children:
																																					a(
																																						m.a,
																																						{
																																							className: `framer-styles-preset-mgrqd0`,
																																							"data-styles-preset": `q7NcKTKUL`,
																																							children: `New Demensions  in Marketing`,
																																						},
																																					),
																																			},
																																		),
																																},
																															),
																													},
																												),
																											className: `framer-nx7g1l`,
																											fonts: [
																												`Inter`,
																											],
																											text: be,
																											verticalAlignment: `top`,
																											withExternalLayout:
																												!0,
																										},
																									),
																								Fe !==
																									!1 &&
																									a(
																										re,
																										{
																											links: [
																												{
																													href: {
																														pathVariables:
																															{
																																oeVdX_wT7:
																																	L,
																															},
																														webPageId: `bIrb34sTa`,
																													},
																													implicitPathVariables:
																														void 0,
																												},
																												{
																													href: {
																														pathVariables:
																															{
																																oeVdX_wT7:
																																	L,
																															},
																														webPageId: `bIrb34sTa`,
																													},
																													implicitPathVariables:
																														void 0,
																												},
																												{
																													href: {
																														pathVariables:
																															{
																																oeVdX_wT7:
																																	L,
																															},
																														webPageId: `bIrb34sTa`,
																													},
																													implicitPathVariables:
																														void 0,
																												},
																											],
																											children:
																												(
																													e,
																												) =>
																													a(
																														I,
																														{
																															breakpoint:
																																R,
																															overrides:
																																{
																																	eDWXDaK8q:
																																		{
																																			y:
																																				(p?.y ||
																																					0) +
																																				140 +
																																				0 +
																																				0 +
																																				0 +
																																				0 +
																																				694 +
																																				0 +
																																				236 +
																																				0 +
																																				30 +
																																				0 +
																																				-25.5,
																																		},
																																	wIOMGd3LA:
																																		{
																																			y:
																																				(p?.y ||
																																					0) +
																																				140 +
																																				0 +
																																				0 +
																																				0 +
																																				0 +
																																				629 +
																																				0 +
																																				241 +
																																				0 +
																																				0 +
																																				0 +
																																				40 +
																																				-25.5,
																																		},
																																},
																															children:
																																a(
																																	F,
																																	{
																																		height: 51,
																																		width: `51px`,
																																		y:
																																			(p?.y ||
																																				0) +
																																			140 +
																																			0 +
																																			0 +
																																			0 +
																																			0 +
																																			784 +
																																			0 +
																																			246 +
																																			0 +
																																			25 +
																																			0 +
																																			-25.5,
																																		children:
																																			a(
																																				N,
																																				{
																																					className: `framer-19j2a6q-container`,
																																					nodeId: `MkC3D5B5J`,
																																					scopeId: `bIrb34sTa`,
																																					children:
																																						a(
																																							I,
																																							{
																																								breakpoint:
																																									R,
																																								overrides:
																																									{
																																										eDWXDaK8q:
																																											{
																																												gwJ1gaJat:
																																													e[1],
																																											},
																																										wIOMGd3LA:
																																											{
																																												gwJ1gaJat:
																																													e[2],
																																											},
																																									},
																																								children:
																																									a(
																																										Jt,
																																										{
																																											gwJ1gaJat:
																																												e[0],
																																											height: `100%`,
																																											id: `MkC3D5B5J`,
																																											layoutId: `MkC3D5B5J`,
																																											style: {
																																												height: `100%`,
																																												width: `100%`,
																																											},
																																											width: `100%`,
																																										},
																																									),
																																							},
																																						),
																																				},
																																			),
																																	},
																																),
																														},
																													),
																										},
																									),
																							],
																					},
																				),
																			],
																	}),
																	a(`div`, {
																		className: `framer-1ootmnk`,
																		
																	}),
																],
															}),
														],
													}),
												],
											}),
										}),
										a(re, {
											links: [
												{
													href: {
														webPageId: `jfdaAH2x_`,
													},
													implicitPathVariables:
														void 0,
												},
												{
													href: {
														webPageId: `jfdaAH2x_`,
													},
													implicitPathVariables:
														void 0,
												},
												{
													href: {
														webPageId: `jfdaAH2x_`,
													},
													implicitPathVariables:
														void 0,
												},
											],
											children: (e) =>
												a(I, {
													breakpoint: R,
													overrides: {
														eDWXDaK8q: {
															y:
																(p?.y || 0) +
																140 +
																1145,
														},
														wIOMGd3LA: {
															y:
																(p?.y || 0) +
																140 +
																1090,
														},
													},
													children: a(F, {
														height: 1255,
														width: `calc(${p?.width || `100vw`} - 40px)`,
														y:
															(p?.y || 0) +
															140 +
															1240,
														children: a(N, {
															className: `framer-b0vqmj-container`,
															layout: ke,
															nodeId: `h_sVoZ96T`,
															scopeId: `bIrb34sTa`,
															children: a(I, {
																breakpoint: R,
																overrides: {
																	eDWXDaK8q: {
																		a_RFekTZv: `hW1S5f5S1`,
																		bFCS9vnuq: `60px 30px 60px 30px`,
																		bWjM1v575:
																			e[1],
																		variant:
																			Q(
																				`kSC4wNpBu`,
																			),
																	},
																	wIOMGd3LA: {
																		a_RFekTZv: `oB1JgoU9o`,
																		bFCS9vnuq: `40px 25px 40px 25px`,
																		bWjM1v575:
																			e[2],
																		variant:
																			Q(
																				`MpacA_qwI`,
																			),
																	},
																},
																children: a(
																	ft,
																	{
																		a_RFekTZv: `Hy5imaqGv`,
																		bFCS9vnuq: `90px 40px 90px 40px`,
																		bWjM1v575:
																			e[0],
																		gZ_s_nXv6:
																			!0,
																		height: `100%`,
																		hhaCwl7EP:
																			!1,
																		id: `h_sVoZ96T`,
																		layoutId: `h_sVoZ96T`,
																		lQpFEpV2s: `[ALL POSTS]`,
																		MXlRuQc91:
																			!0,
																		QPWACkysO:
																			E,
																		SE9pFAstj: `[07]`,
																		style: {
																			width: `100%`,
																		},
																		td4zWVChF: `Other Posts`,
																		ThIdWbT5T:
																			!0,
																		variant:
																			Q(
																				`mVhPZw3IV`,
																			),
																		width: `100%`,
																		wPj7cgw7A:
																			!1,
																		wpMFMFfh6:
																			!0,
																		XtswemN6o: `0px 50px 0px 55px`,
																		zWwbGwZv_:
																			!1,
																	},
																),
															}),
														}),
													}),
												}),
										}),
									],
								}),
								a(`div`, { id: `overlay` }),
							],
						}),
					})
				);
			}),
			[
				`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
				`.framer-LA4OI.framer-tfzzsw, .framer-LA4OI .framer-tfzzsw { display: block; }`,
				`.framer-LA4OI.framer-1bt0fe1 { align-content: center; align-items: center; background-color: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
				`.framer-LA4OI .framer-13iovet { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-1dsol52 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-13voud4 { flex: none; height: 90px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-4xw0m1 { align-content: center; align-items: center; border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 440px; overflow: var(--overflow-clip-fallback, clip); padding: 80px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
				`.framer-LA4OI .framer-1bnqxlz { background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); opacity: 0.5; overflow: var(--overflow-clip-fallback, clip); position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
				`.framer-LA4OI .framer-1ipbzst-container { -webkit-user-select: none; flex: none; height: auto; left: 40px; mix-blend-mode: difference; position: absolute; top: 30px; user-select: none; width: auto; will-change: var(--framer-will-change-effect-override, transform); z-index: 3; }`,
				`.framer-LA4OI .framer-mg9868 { --framer-paragraph-spacing: 0px; flex: none; height: auto; max-width: 670px; mix-blend-mode: difference; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 2; }`,
				`.framer-LA4OI .framer-xxpuv { --framer-link-text-color: #0099ff; --framer-link-text-decoration: underline; bottom: 40px; flex: none; height: auto; mix-blend-mode: difference; position: absolute; right: 40px; white-space: pre; width: auto; z-index: 3; }`,
				`.framer-LA4OI .framer-ilxppo, .framer-LA4OI .framer-qhwvnb { flex: none; height: 80px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-fejqmp { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 670px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-3bo595 { --framer-paragraph-spacing: 20px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
				`.framer-LA4OI .framer-60fp0y { display: grid; flex: none; gap: 2px 5px; grid-auto-rows: min-content; grid-template-columns: repeat(1, minmax(0px, 1fr)); height: min-content; justify-content: start; max-width: 670px; padding: 0px; position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-1v534zx { align-self: start; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-cdnkl8 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-1duemje { flex: none; height: 60px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-1l85j7x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-1usmbvg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-xqg3eb-container { flex: none; height: 66px; position: relative; width: 66px; }`,
				`.framer-LA4OI .framer-mxqmc5 { flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-1g7mfs7, .framer-LA4OI .framer-6fpyy2 { --framer-paragraph-spacing: 0px; flex: none; height: 18px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
				`.framer-LA4OI .framer-j6ybrd { align-content: center; align-items: center; background-color: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, #ffffff); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 10px 5px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
				`.framer-LA4OI .framer-1m4uxbm { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
				`.framer-LA4OI .framer-twwqpn { flex: none; height: 25px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-zepmgc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-13lqs0q, .framer-LA4OI .framer-1ootmnk { flex: none; height: 15px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-1f4zzku { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
				`.framer-LA4OI .framer-iv97xk { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
				`.framer-LA4OI .framer-1khwypy-container, .framer-LA4OI .framer-19j2a6q-container { flex: none; height: 51px; position: relative; width: 51px; }`,
				`.framer-LA4OI .framer-1bio65p, .framer-LA4OI .framer-nx7g1l { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
				`.framer-LA4OI .framer-1i304bx { align-self: stretch; flex: none; height: auto; position: relative; width: 20%; }`,
				`.framer-LA4OI .framer-23qc56 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
				`.framer-LA4OI .framer-b0vqmj-container { flex: none; height: auto; position: relative; width: 100%; }`,
				...ot,
				...Je,
				...Ie,
				...mt,
				...et,
				...tt,
				...Ue,
				...Ce,
				...He,
				...Me,
				...Ee,
				...be,
				`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-LA4OI.framer-1bt0fe1 { width: 810px; } .framer-LA4OI .framer-1dsol52 { padding: 0px 30px 0px 30px; } .framer-LA4OI .framer-4xw0m1 { min-height: 385px; padding: 50px; } .framer-LA4OI .framer-1ipbzst-container { left: 30px; } .framer-LA4OI .framer-mg9868, .framer-LA4OI .framer-fejqmp { max-width: 600px; } .framer-LA4OI .framer-xxpuv { bottom: 30px; right: 30px; } .framer-LA4OI .framer-ilxppo { height: 55px; } .framer-LA4OI .framer-qhwvnb { height: 70px; } .framer-LA4OI .framer-60fp0y { max-width: unset; } .framer-LA4OI .framer-1duemje { height: 50px; } .framer-LA4OI .framer-13lqs0q { height: 20px; }}`,
				`@media (max-width: 809.98px) { .framer-LA4OI.framer-1bt0fe1 { width: 390px; } .framer-LA4OI .framer-1dsol52 { padding: 0px 2px 0px 2px; } .framer-LA4OI .framer-4xw0m1 { min-height: 350px; padding: 23px; } .framer-LA4OI .framer-1ipbzst-container { left: 25px; top: 25px; } .framer-LA4OI .framer-mg9868 { max-width: unset; } .framer-LA4OI .framer-xxpuv { bottom: 25px; right: 25px; } .framer-LA4OI .framer-ilxppo { height: 45px; } .framer-LA4OI .framer-fejqmp { max-width: 600px; padding: 0px 20px 0px 20px; } .framer-LA4OI .framer-qhwvnb { height: 50px; } .framer-LA4OI .framer-60fp0y { grid-template-columns: repeat(1, minmax(1px, 1fr)); } .framer-LA4OI .framer-cdnkl8 { padding: 0px 20px 0px 20px; } .framer-LA4OI .framer-1duemje, .framer-LA4OI .framer-twwqpn { height: 40px; } .framer-LA4OI .framer-1f4zzku { flex-direction: column; gap: 10px; } .framer-LA4OI .framer-iv97xk, .framer-LA4OI .framer-23qc56 { flex: none; width: 100%; } .framer-LA4OI .framer-1i304bx { align-self: unset; height: 20px; } .framer-LA4OI .framer-1ootmnk { height: 10px; }}`,
			],
			`framer-LA4OI`,
		)),
		(Ei = $),
		($.displayName = `Page`),
		($.defaultProps = { height: 7290, width: 1200 }),
		ue(
			$,
			[
				{
					explicitInter: !0,
					fonts: [
						{
							cssFamilyName: `Inter`,
							source: `framer`,
							style: `normal`,
							uiFamilyName: `Inter`,
							unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
							url: `../fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
							weight: `400`,
						},
						{
							cssFamilyName: `Inter`,
							source: `framer`,
							style: `normal`,
							uiFamilyName: `Inter`,
							unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
							url: `../fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
							weight: `400`,
						},
						{
							cssFamilyName: `Inter`,
							source: `framer`,
							style: `normal`,
							uiFamilyName: `Inter`,
							unicodeRange: `U+1F00-1FFF`,
							url: `../fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
							weight: `400`,
						},
						{
							cssFamilyName: `Inter`,
							source: `framer`,
							style: `normal`,
							uiFamilyName: `Inter`,
							unicodeRange: `U+0370-03FF`,
							url: `../fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
							weight: `400`,
						},
						{
							cssFamilyName: `Inter`,
							source: `framer`,
							style: `normal`,
							uiFamilyName: `Inter`,
							unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
							url: `../fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
							weight: `400`,
						},
						{
							cssFamilyName: `Inter`,
							source: `framer`,
							style: `normal`,
							uiFamilyName: `Inter`,
							unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
							url: `../fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
							weight: `400`,
						},
						{
							cssFamilyName: `Inter`,
							source: `framer`,
							style: `normal`,
							uiFamilyName: `Inter`,
							unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
							url: `../fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
							weight: `400`,
						},
					],
				},
				...oi,
				...si,
				...ci,
				...li,
				...ui,
				...O(st),
				...O(Ye),
				...O(Le),
				...O(ht),
				...O(nt),
				...O(rt),
				...O(Ge),
				...O(R),
				...O(We),
				...O(Ne),
				...O(De),
				...O(L),
			],
			{ supportsExplicitInterCodegen: !0 },
		),
		($.loader = {
			load: (e, t) => {
				let n = t.locale;
				return Promise.allSettled([
					le.get(wi(w(t.pathVariables, `bIrb34sTa`)), n).preload(),
					C(_t, {}, t),
					C(Ae, {}, t),
					C(wn, {}, t),
					C(Jt, {}, t),
					C(ft, {}, t),
				]);
			},
		}),
		(Di = {
			exports: {
				queryParamNames: {
					type: `variable`,
					annotations: { framerContractVersion: `1` },
				},
				default: {
					type: `reactComponent`,
					name: `FramerbIrb34sTa`,
					slots: [],
					annotations: {
						framerAutoSizeImages: `true`,
						framerLayoutTemplateFlowEffect: `true`,
						framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"eDWXDaK8q":{"layout":["fixed","auto"]},"wIOMGd3LA":{"layout":["fixed","auto"]}}}`,
						framerColorSyntax: `true`,
						framerAcceptsLayoutTemplate: `true`,
						framerIntrinsicWidth: `1200`,
						framerIntrinsicHeight: `7290`,
						framerImmutableVariables: `true`,
						framerDisplayContentsDiv: `false`,
						framerContractVersion: `1`,
						framerScrollSections: `false`,
						framerComponentViewportWidth: `true`,
						framerResponsiveScreen: `true`,
					},
				},
				Props: {
					type: `tsType`,
					annotations: { framerContractVersion: `1` },
				},
				__FramerMetadata__: { type: `variable` },
			},
		}));
})();
export { Di as __FramerMetadata__, Ei as default, pi as queryParamNames };
