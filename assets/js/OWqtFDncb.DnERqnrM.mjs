import { t as e } from "./rolldown-runtime.mjs";
import {
	F as t,
	M as n,
	T as r,
	c as i,
	g as a,
	j as o,
	k as s,
	l as c,
	o as l,
	s as u,
	y as d,
} from "./react.mjs";
import { S as f, a as p, r as m, t as h } from "./motion.mjs";
import {
	A as g,
	At as _,
	E as v,
	Et as y,
	G as b,
	H as x,
	O as S,
	Ot as C,
	P as w,
	St as T,
	T as E,
	Tt as D,
	U as O,
	W as k,
	X as A,
	a as j,
	b as M,
	ct as ee,
	f as te,
	g as N,
	gt as P,
	k as F,
	lt as I,
	r as L,
	t as R,
	vt as z,
	xt as B,
} from "./framer.mjs";
import { i as ne, n as re, r as V, t as H } from "./q7NcKTKUL.DsgFejH8.mjs";
import { i as ie, n as ae, r as oe, t as se } from "./BaUGQBb6A.CCunrJSH.mjs";
import {
	a as ce,
	c as U,
	i as le,
	n as ue,
	o as de,
	r as fe,
	s as W,
	t as pe,
} from "./pPuowuywh.BpuFfTb3.mjs";
import { i as me, n as he, r as ge, t as _e } from "./IGVKsj4vh.GXVwIVTj.mjs";
import { n as ve, t as G } from "./Text_Hover_Random.mjs";
import { i as ye, r as be } from "./iOnt4WyqW.DYSvy5my.mjs";
import { n as xe, t as Se } from "./sxu281Tck.C6-LoHdO.mjs";
function Ce(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var we,
	Te,
	Ee,
	De,
	Oe,
	ke,
	Ae,
	je,
	Me,
	Ne,
	Pe,
	K,
	Fe,
	Ie = e(() => {
		(l(),
			A(),
			h(),
			r(),
			ve(),
			(we = x(G)),
			(Te = [`UnuGN3X_1`, `X8hKcyMev`]),
			(Ee = `framer-Xes0c`),
			(De = {
				UnuGN3X_1: `framer-v-1enx3dv`,
				X8hKcyMev: `framer-v-1tdalvp`,
			}),
			(Oe = (e) => {
				if (typeof e != `number`) return e;
				if (Number.isFinite(e)) return Math.max(0, e) + `px`;
			}),
			(ke = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Ae = ({ value: e, children: t }) => {
				let r = o(p),
					a = e ?? r.transition,
					s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return i(p.Provider, { value: s, children: t });
			}),
			(je = f.create(t)),
			(Me = { Normal: `UnuGN3X_1`, Vertical: `X8hKcyMev` }),
			(Ne = ({
				color: e,
				height: t,
				hoverOnly: n,
				id: r,
				link: i,
				openInNewTab: a,
				repeatOnEnter: o,
				restartOnHover: s,
				spacing: c,
				text: l,
				width: u,
				...d
			}) => ({
				...d,
				a10ufliJT: l ?? d.a10ufliJT ?? `[VIEW ALL]`,
				FnHJ3auI6: i ?? d.FnHJ3auI6,
				GvlBMQefU: a ?? d.GvlBMQefU,
				Kq_CijUyE: c ?? d.Kq_CijUyE ?? `15px 50px 15px 50px`,
				mSNDO3YW7: n ?? d.mSNDO3YW7 ?? !0,
				ok7eKoPLP: o ?? d.ok7eKoPLP,
				uziNdYDRk: s ?? d.uziNdYDRk ?? !0,
				variant: Me[d.variant] ?? d.variant ?? `UnuGN3X_1`,
				xuXj4zldx:
					e ??
					d.xuXj4zldx ??
					`var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
			})),
			(Pe = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(K = y(
				a(function (e, t) {
					let n = s(null),
						r = t ?? n,
						a = d(),
						{ activeLocale: o, setLocale: c } = z();
					I();
					let {
							style: l,
							className: u,
							layoutId: p,
							variant: h,
							xuXj4zldx: g,
							FnHJ3auI6: _,
							a10ufliJT: v,
							Kq_CijUyE: y,
							GvlBMQefU: b,
							mSNDO3YW7: x,
							uziNdYDRk: C,
							ok7eKoPLP: T,
							...E
						} = Ne(e),
						{
							baseVariant: O,
							classNames: k,
							clearLoadingGesture: A,
							gestureHandlers: j,
							gestureVariant: M,
							isLoading: ee,
							setGestureState: te,
							setVariant: N,
							variants: P,
						} = D({
							cycleOrder: Te,
							defaultVariant: `UnuGN3X_1`,
							ref: r,
							variant: h,
							variantClassNames: De,
						}),
						F = Pe(e, P),
						R = w(Ee);
					return i(m, {
						id: p ?? a,
						children: i(je, {
							animate: P,
							initial: !1,
							children: i(Ae, {
								value: ke,
								children: i(f.div, {
									...E,
									...j,
									className: w(R, `framer-1enx3dv`, u, k),
									// "data-framer-name": `Normal`,
									layoutDependency: F,
									layoutId: `UnuGN3X_1`,
									ref: r,
									style: {
										"--azteil": Oe(y),
										rotate: 0,
										...l,
									},
									variants: { X8hKcyMev: { rotate: -90 } },
									...Ce(
										{
											X8hKcyMev: {
												// "data-framer-name": `Vertical`,
											},
										},
										O,
										M,
									),
									children: i(L, {
										children: i(S, {
											className: `framer-1xi5k3-container`,
											isAuthoredByUser: !0,
											layoutDependency: F,
											layoutId: `xZfo8S9Ac-container`,
											nodeId: `xZfo8S9Ac`,
											rendersWithMotion: !0,
											scopeId: `dw6Y8o7e5`,
											children: i(G, {
												ariaLabel: `h1`,
												charset: `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*`,
												color: g,
												durationMs: 600,
												font: {
													fontFamily: `"Space Mono", monospace`,
													fontSize: `14px`,
													fontStyle: `normal`,
													fontWeight: 700,
													letterSpacing: `0.18em`,
													lineHeight: `1em`,
													textAlign: `left`,
												},
												fps: 60,
												height: `100%`,
												hoverOnly: x,
												id: `xZfo8S9Ac`,
												intensity: 0.08,
												layoutId: `xZfo8S9Ac`,
												link: _,
												newTab: b,
												repeatOnEnter: T,
												repeatOnHover: C,
												revealEase: `inOut`,
												text: v,
												width: `100%`,
											}),
										}),
									}),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-Xes0c.framer-n572cd, .framer-Xes0c .framer-n572cd { display: block; }`,
					`.framer-Xes0c.framer-1enx3dv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: var(--azteil); position: relative; width: min-content; }`,
					`.framer-Xes0c .framer-1xi5k3-container { flex: none; height: auto; position: relative; width: auto; }`,
				],
				`framer-Xes0c`,
			)),
			(Fe = K),
			(K.displayName = `Vertical - Horizontal Link`),
			(K.defaultProps = { height: 44, width: 111 }),
			g(K, {
				variant: {
					options: [`UnuGN3X_1`, `X8hKcyMev`],
					optionTitles: [`Normal`, `Vertical`],
					title: `Variant`,
					type: j.Enum,
				},
				xuXj4zldx: {
					defaultValue: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {"name":"Black"} */`,
					title: `Color`,
					type: j.Color,
				},
				FnHJ3auI6: { title: `Link`, type: j.Link },
				a10ufliJT: {
					defaultValue: `[VIEW ALL]`,
					displayTextArea: !1,
					title: `Text`,
					type: j.String,
				},
				Kq_CijUyE: {
					defaultValue: `15px 50px 15px 50px`,
					title: `Spacing`,
					type: j.Padding,
				},
				GvlBMQefU: {
					defaultValue: !1,
					title: `Open In New Tab`,
					type: j.Boolean,
				},
				mSNDO3YW7: {
					defaultValue: !0,
					title: `Hover Only`,
					type: j.Boolean,
				},
				uziNdYDRk: {
					defaultValue: !0,
					title: `Restart On Hover`,
					type: j.Boolean,
				},
				ok7eKoPLP: {
					defaultValue: !1,
					title: `Repeat On Enter`,
					type: j.Boolean,
				},
			}),
			F(
				K,
				[
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
						],
					},
					...we,
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function Le(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Re,
	ze,
	Be,
	Ve,
	He,
	Ue,
	We,
	Ge,
	Ke,
	qe,
	Je,
	q,
	Ye,
	Xe = e(() => {
		(l(),
			A(),
			h(),
			r(),
			Ie(),
			(Re = x(Fe)),
			(ze = { vKKbtDO1N: { hover: !0 } }),
			(Be = [`vKKbtDO1N`, `X3qFlTbTF`]),
			(Ve = `framer-fLRsI`),
			(He = {
				vKKbtDO1N: `framer-v-1n7pgpj`,
				X3qFlTbTF: `framer-v-q33iy6`,
			}),
			(Ue = {
				delay: 0,
				duration: 0.3,
				ease: [0.44, 0, 0.14, 1.03],
				type: `tween`,
			}),
			(We = ({ value: e, children: t }) => {
				let r = o(p),
					a = e ?? r.transition,
					s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return i(p.Provider, { value: s, children: t });
			}),
			(Ge = f.create(t)),
			(Ke = { Horizontal: `X3qFlTbTF`, Vertical: `vKKbtDO1N` }),
			(qe = ({
				height: e,
				id: t,
				link: n,
				textOnCard: r,
				width: i,
				...a
			}) => ({
				...a,
				aNcBB1l2I: r ?? a.aNcBB1l2I ?? `[READ MORE]`,
				fWogkGBfe: n ?? a.fWogkGBfe,
				variant: Ke[a.variant] ?? a.variant ?? `vKKbtDO1N`,
			})),
			(Je = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(q = y(
				a(function (e, t) {
					let n = s(null),
						r = t ?? n,
						a = d(),
						{ activeLocale: o, setLocale: c } = z(),
						l = I(),
						{
							style: u,
							className: p,
							layoutId: h,
							variant: g,
							aNcBB1l2I: _,
							fWogkGBfe: v,
							...y
						} = qe(e),
						{
							baseVariant: b,
							classNames: x,
							clearLoadingGesture: C,
							gestureHandlers: T,
							gestureVariant: E,
							isLoading: O,
							setGestureState: k,
							setVariant: A,
							variants: j,
						} = D({
							cycleOrder: Be,
							defaultVariant: `vKKbtDO1N`,
							enabledGestures: ze,
							ref: r,
							variant: g,
							variantClassNames: He,
						}),
						M = Je(e, j),
						ee = w(Ve);
					return i(m, {
						id: h ?? a,
						children: i(Ge, {
							animate: j,
							initial: !1,
							children: i(We, {
								value: Ue,
								children: i(N, {
									href: v,
									motionChild: !0,
									nodeId: `vKKbtDO1N`,
									openInNewTab: !1,
									scopeId: `quc6LB8jz`,
									smoothScroll: !0,
									children: i(f.a, {
										...y,
										...T,
										className: `${w(ee, `framer-1n7pgpj`, p, x)} framer-1n4dfmi`,
										// "data-framer-name": `Vertical`,
										layoutDependency: M,
										layoutId: `vKKbtDO1N`,
										ref: r,
										style: {
											backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
											borderBottomLeftRadius: 10,
											borderBottomRightRadius: 10,
											borderTopLeftRadius: 10,
											borderTopRightRadius: 10,
											...u,
										},
										variants: {
											"vKKbtDO1N-hover": {
												backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
											},
										},
										...Le(
											{
												"vKKbtDO1N-hover": {
													
												},
												X3qFlTbTF: {
													// "data-framer-name": `Horizontal`,
												},
											},
											b,
											E,
										),
										children: i(L, {
											height:
												Math.max(
													0,
													((l?.height || 299) -
														0 -
														0) /
														1,
												) * 1,
											width: l?.width || `100vw`,
											y:
												(l?.y || 0) +
												0 +
												(((l?.height || 299) -
													0 -
													(Math.max(
														0,
														((l?.height || 299) -
															0 -
															0) /
															1,
													) *
														1 +
														0)) /
													2 +
													0 +
													0),
											...Le(
												{
													X3qFlTbTF: {
														height: 44,
														width: void 0,
														y:
															(l?.y || 0) +
															15 +
															(((l?.height ||
																74) -
																30 -
																44) /
																2 +
																0 +
																0),
													},
												},
												b,
												E,
											),
											children: i(S, {
												className: `framer-9ix7ur-container`,
												layoutDependency: M,
												layoutId: `Ao_gCu6n6-container`,
												nodeId: `Ao_gCu6n6`,
												rendersWithMotion: !0,
												scopeId: `quc6LB8jz`,
												children: i(Fe, {
													a10ufliJT: _,
													FnHJ3auI6: v,
													GvlBMQefU: !1,
													height: `100%`,
													id: `Ao_gCu6n6`,
													Kq_CijUyE: `15px 60px 15px 60px`,
													layoutId: `Ao_gCu6n6`,
													mSNDO3YW7: !0,
													ok7eKoPLP: !1,
													style: {
														height: `100%`,
														width: `100%`,
													},
													uziNdYDRk: !1,
													variant: `X8hKcyMev`,
													width: `100%`,
													xuXj4zldx: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
													...Le(
														{
															"vKKbtDO1N-hover": {
																mSNDO3YW7: !1,
																ok7eKoPLP: !0,
																xuXj4zldx: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
															},
															X3qFlTbTF: {
																variant: `UnuGN3X_1`,
															},
														},
														b,
														E,
													),
												}),
											}),
										}),
									}),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-fLRsI.framer-1n4dfmi, .framer-fLRsI .framer-1n4dfmi { display: block; }`,
					`.framer-fLRsI.framer-1n7pgpj { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: 299px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 120px; }`,
					`.framer-fLRsI .framer-9ix7ur-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
					`.framer-fLRsI.framer-v-q33iy6.framer-1n7pgpj { cursor: unset; height: min-content; padding: 15px 25px 15px 25px; width: min-content; }`,
					`.framer-fLRsI.framer-v-q33iy6 .framer-9ix7ur-container { flex: none; height: auto; width: auto; }`,
				],
				`framer-fLRsI`,
			)),
			(Ye = q),
			(q.displayName = `Read More - Card`),
			(q.defaultProps = { height: 299, width: 120 }),
			g(q, {
				variant: {
					options: [`vKKbtDO1N`, `X3qFlTbTF`],
					optionTitles: [`Vertical`, `Horizontal`],
					title: `Variant`,
					type: j.Enum,
				},
				aNcBB1l2I: {
					defaultValue: `[READ MORE]`,
					displayTextArea: !1,
					title: `Text on Card`,
					type: j.String,
				},
				fWogkGBfe: { title: `Link`, type: j.Link },
			}),
			F(q, [{ explicitInter: !0, fonts: [] }, ...Re], {
				supportsExplicitInterCodegen: !0,
			}));
	});
function J(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ze,
	Qe,
	$e,
	et,
	tt,
	nt,
	rt,
	it,
	at,
	ot,
	st,
	ct,
	lt,
	Y,
	ut,
	dt,
	ft,
	pt,
	mt,
	ht,
	gt,
	_t,
	X,
	vt,
	yt = e(() => {
		(l(),
			A(),
			h(),
			r(),
			ye(),
			ie(),
			U(),
			le(),
			ne(),
			Xe(),
			Se(),
			(Ze = x(Ye)),
			(Qe = _(C(f.div))),
			($e = x(xe)),
			(et = [
				`Hy5imaqGv`,
				`hW1S5f5S1`,
				`oB1JgoU9o`,
				`GWdkepxAn`,
				`Ke3Z8JMZB`,
				`e_indrHZ3`,
			]),
			(tt = `framer-nONIL`),
			(nt = {
				e_indrHZ3: `framer-v-z4r4vt`,
				GWdkepxAn: `framer-v-len3lo`,
				hW1S5f5S1: `framer-v-1cdm7bf`,
				Hy5imaqGv: `framer-v-1tsnwg4`,
				Ke3Z8JMZB: `framer-v-9p8a3r`,
				oB1JgoU9o: `framer-v-191rkvx`,
			}),
			(rt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(it = (e) => !e),
			(at = {
				delay: 0,
				duration: 0.5,
				ease: [0.44, 0, 0.56, 1],
				type: `tween`,
			}),
			(ot = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
			(st = {
				opacity: 0.001,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0,
				x: 0,
				y: 0,
			}),
			(ct = { bounce: 0.25, delay: 0, duration: 0.45, type: `spring` }),
			(lt = {
				opacity: 0.6,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0,
				transition: ct,
			}),
			(Y = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(ut = {
				opacity: 0.9,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0,
				transition: ct,
			}),
			(dt = (e, t, n) =>
				e.currentPage >= e.totalPages
					? (t.disabled ?? n)
					: e.isLoading
						? (t.loading ?? n)
						: n),
			(ft = ({ query: e, pageSize: t, children: n }) => {
				let {
					paginatedQuery: r,
					paginationInfo: i,
					loadMore: a,
				} = P(e, t, `fLhiRBExr`);
				return n(B(r), i, a);
			}),
			(pt = ({ value: e, children: t }) => {
				let r = o(p),
					a = e ?? r.transition,
					s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return i(p.Provider, { value: s, children: t });
			}),
			(mt = f.create(t)),
			(ht = {
				"10 Posts - Desktop": `GWdkepxAn`,
				"10 Posts - Phone": `e_indrHZ3`,
				"10 Posts - Tablet": `Ke3Z8JMZB`,
				"3 Posts - Desktop": `Hy5imaqGv`,
				"3 Posts - Phone": `oB1JgoU9o`,
				"3 Posts - Tablet": `hW1S5f5S1`,
			}),
			(gt = ({
				filter: e,
				height: t,
				id: n,
				showBottomSpacer: r,
				showLoadMore: i,
				width: a,
				...o
			}) => ({
				...o,
				bjjrUBwdp: r ?? o.bjjrUBwdp ?? !0,
				DO8XpcJMl: e ?? o.DO8XpcJMl,
				Pnw_XprOy: i ?? o.Pnw_XprOy ?? !0,
				variant: ht[o.variant] ?? o.variant ?? `Hy5imaqGv`,
			})),
			(_t = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(X = y(
				a(function (e, n) {
					let r = s(null),
						a = n ?? r,
						o = d(),
						{ activeLocale: l, setLocale: p } = z(),
						h = I(),
						{
							style: g,
							className: _,
							layoutId: y,
							variant: b,
							bjjrUBwdp: x,
							Pnw_XprOy: C,
							DO8XpcJMl: O,
							u3FsyzNM_fLhiRBExr: A,
							oeVdX_wT7fLhiRBExr: j,
							Xk3s85B2efLhiRBExr: P,
							Eq05S6sQ_fLhiRBExr: F,
							tUjGhFa0zfLhiRBExr: B,
							idfLhiRBExr: ne,
							...re
						} = gt(e),
						{
							baseVariant: V,
							classNames: ie,
							clearLoadingGesture: ae,
							gestureHandlers: oe,
							gestureVariant: U,
							isLoading: le,
							setGestureState: ue,
							setVariant: de,
							variants: fe,
						} = D({
							cycleOrder: et,
							defaultVariant: `Hy5imaqGv`,
							ref: a,
							variant: b,
							variantClassNames: nt,
						}),
						W = _t(e, fe),
						{ activeVariantCallback: me, delay: he } = ee(V),
						ge = ({ overlay: e, loadMore: t }) =>
							me(async (...e) => {
								t();
							}),
						_e = w(tt, ce, H, se, pe);
					return (
						T(),
						i(m, {
							id: y ?? o,
							children: i(mt, {
								animate: fe,
								initial: !1,
								children: i(pt, {
									value: rt,
									children: i(f.div, {
										...re,
										...oe,
										className: w(
											_e,
											`framer-1tsnwg4`,
											_,
											ie,
										),
										// "data-framer-name": `3 Posts - Desktop`,
										layoutDependency: W,
										layoutId: `Hy5imaqGv`,
										ref: a,
										style: { ...g },
										...J(
											{
												e_indrHZ3: {
													// "data-framer-name": `10 Posts - Phone`,
												},
												GWdkepxAn: {
													// "data-framer-name": `10 Posts - Desktop`,
												},
												hW1S5f5S1: {
													// "data-framer-name": `3 Posts - Tablet`,
												},
												Ke3Z8JMZB: {
													// "data-framer-name": `10 Posts - Tablet`,
												},
												oB1JgoU9o: {
													// "data-framer-name": `3 Posts - Phone`,
												},
											},
											V,
											U,
										),
										children: i(f.div, {
											className: `framer-5nkas6`,
											layoutDependency: W,
											layoutId: `fLhiRBExr`,
											children: i(R, {
												children: i(ft, {
													pageSize: 3,
													query: {
														from: {
															alias: `fLhiRBExr`,
															data: be,
															type: `Collection`,
														},
														select: [
															{
																collection: `fLhiRBExr`,
																name: `u3FsyzNM_`,
																type: `Identifier`,
															},
															{
																collection: `fLhiRBExr`,
																name: `oeVdX_wT7`,
																type: `Identifier`,
															},
															{
																collection: `fLhiRBExr`,
																name: `Xk3s85B2e`,
																type: `Identifier`,
															},
															{
																collection: `fLhiRBExr`,
																name: `Eq05S6sQ_`,
																type: `Identifier`,
															},
															{
																collection: `fLhiRBExr`,
																name: `tUjGhFa0z`,
																type: `Identifier`,
															},
															{
																collection: `fLhiRBExr`,
																name: `id`,
																type: `Identifier`,
															},
														],
														where: {
															operator: `not`,
															type: `UnaryOperation`,
															value: {
																left: {
																	collection: `fLhiRBExr`,
																	name: `Xk3s85B2e`,
																	type: `Identifier`,
																},
																operator: `==`,
																right: {
																	type: `LiteralValue`,
																	value: O,
																},
																type: `BinaryOperation`,
															},
														},
													},
													...J(
														{
															e_indrHZ3: {
																pageSize: 10,
																query: {
																	from: {
																		alias: `fLhiRBExr`,
																		data: be,
																		type: `Collection`,
																	},
																	select: [
																		{
																			collection: `fLhiRBExr`,
																			name: `u3FsyzNM_`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `oeVdX_wT7`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `Xk3s85B2e`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `Eq05S6sQ_`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `tUjGhFa0z`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `id`,
																			type: `Identifier`,
																		},
																	],
																	where: {
																		operator: `not`,
																		type: `UnaryOperation`,
																		value: {
																			left: {
																				collection: `fLhiRBExr`,
																				name: `Xk3s85B2e`,
																				type: `Identifier`,
																			},
																			operator: `==`,
																			right: {
																				type: `LiteralValue`,
																				value: O,
																			},
																			type: `BinaryOperation`,
																		},
																	},
																},
															},
															GWdkepxAn: {
																pageSize: 10,
																query: {
																	from: {
																		alias: `fLhiRBExr`,
																		data: be,
																		type: `Collection`,
																	},
																	select: [
																		{
																			collection: `fLhiRBExr`,
																			name: `u3FsyzNM_`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `oeVdX_wT7`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `Xk3s85B2e`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `Eq05S6sQ_`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `tUjGhFa0z`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `id`,
																			type: `Identifier`,
																		},
																	],
																	where: {
																		operator: `not`,
																		type: `UnaryOperation`,
																		value: {
																			left: {
																				collection: `fLhiRBExr`,
																				name: `Xk3s85B2e`,
																				type: `Identifier`,
																			},
																			operator: `==`,
																			right: {
																				type: `LiteralValue`,
																				value: O,
																			},
																			type: `BinaryOperation`,
																		},
																	},
																},
															},
															Ke3Z8JMZB: {
																pageSize: 10,
																query: {
																	from: {
																		alias: `fLhiRBExr`,
																		data: be,
																		type: `Collection`,
																	},
																	select: [
																		{
																			collection: `fLhiRBExr`,
																			name: `u3FsyzNM_`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `oeVdX_wT7`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `Xk3s85B2e`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `Eq05S6sQ_`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `tUjGhFa0z`,
																			type: `Identifier`,
																		},
																		{
																			collection: `fLhiRBExr`,
																			name: `id`,
																			type: `Identifier`,
																		},
																	],
																	where: {
																		operator: `not`,
																		type: `UnaryOperation`,
																		value: {
																			left: {
																				collection: `fLhiRBExr`,
																				name: `Xk3s85B2e`,
																				type: `Identifier`,
																			},
																			operator: `==`,
																			right: {
																				type: `LiteralValue`,
																				value: O,
																			},
																			type: `BinaryOperation`,
																		},
																	},
																},
															},
														},
														V,
														U,
													),
													children: (e, n, r) =>
														c(u, {
															children: [
																e?.map(
																	(
																		{
																			Eq05S6sQ_:
																				e,
																			id: n,
																			oeVdX_wT7:
																				r,
																			tUjGhFa0z:
																				a,
																			u3FsyzNM_:
																				o,
																			Xk3s85B2e:
																				s,
																		},
																		l,
																	) => {
																		((o ??=
																			!0),
																			(r ??= ``),
																			(s ??= ``),
																			(e ??= ``));
																		let u =
																			it(
																				o,
																			);
																		return i(
																			m,
																			{
																				id: `fLhiRBExr-${n}`,
																				children:
																					i(
																						M.Provider,
																						{
																							value: {
																								oeVdX_wT7:
																									r,
																							},
																							children:
																								c(
																									f.div,
																									{
																										className: `framer-6t1xi5`,
																										layoutDependency:
																											W,
																										layoutId: `J1uiEJ9z2`,
																										children:
																											[
																												u &&
																													c(
																														Qe,
																														{
																															className: `framer-1lzrxid`,
																															"data-framer-appear-id": `1lzrxid-${l}`,
																															// "data-framer-name": `Right`,
																															layoutDependency:
																																W,
																															layoutId: `I0Jm29vwp`,
																															...J(
																																{
																																	GWdkepxAn:
																																		{
																																			__perspectiveFX:
																																				!1,
																																			__smartComponentFX:
																																				!0,
																																			__targetOpacity: 1,
																																			animate:
																																				{
																																					opacity: 1,
																																					rotate: 0,
																																					rotateX: 0,
																																					rotateY: 0,
																																					scale: 1,
																																					skewX: 0,
																																					skewY: 0,
																																					transition:
																																						ot(
																																							at,
																																							(l %
																																								10) *
																																								0.3,
																																						),
																																					x: 0,
																																					y: 0,
																																				},
																																			initial:
																																				st,
																																			optimized:
																																				!0,
																																		},
																																},
																																V,
																																U,
																															),
																															children:
																																[
																																	c(
																																		f.div,
																																		{
																																			className: `framer-1tr3203`,
																																			// "data-framer-name": `Text & Image`,
																																			layoutDependency:
																																				W,
																																			layoutId: `r_ojdbPam`,
																																			style: {
																																				backgroundColor: `rgb(255, 255, 255)`,
																																				borderBottomLeftRadius: 10,
																																				borderBottomRightRadius: 10,
																																				borderTopLeftRadius: 10,
																																				borderTopRightRadius: 10,
																																			},
																																			children:
																																				[
																																					c(
																																						f.div,
																																						{
																																							className: `framer-7pv3ri`,
																																							// "data-framer-name": `Text`,
																																							layoutDependency:
																																								W,
																																							layoutId: `LW5YqIv3m`,
																																							style: {
																																								backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
																																								borderBottomLeftRadius: 8,
																																								borderBottomRightRadius: 8,
																																								borderTopLeftRadius: 8,
																																								borderTopRightRadius: 8,
																																							},
																																							children:
																																								[
																																									i(
																																										v,
																																										{
																																											__fromCanvasComponent:
																																												!0,
																																											children:
																																												i(
																																													t,
																																													{
																																														children:
																																															i(
																																																f.h5,
																																																{
																																																	className: `framer-styles-preset-h6j8it`,
																																																	"data-styles-preset": `dBxplyp6M`,
																																																	style: {
																																																		"--framer-text-alignment": `left`,
																																																		"--framer-text-color": `var(--extracted-1lwpl3i, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																																	},
																																																	children:
																																																		i(
																																																			N,
																																																			{
																																																				href: {
																																																					pathVariables:
																																																						{
																																																							oeVdX_wT7:
																																																								r,
																																																						},
																																																					webPageId: `bIrb34sTa`,
																																																				},
																																																				motionChild:
																																																					!0,
																																																				nodeId: `B1eAq1CJX`,
																																																				openInNewTab:
																																																					!1,
																																																				relValues:
																																																					[],
																																																				scopeId: `BhIrHMnrg`,
																																																				smoothScroll:
																																																					!1,
																																																				children:
																																																					i(
																																																						f.a,
																																																						{
																																																							className: `framer-styles-preset-mgrqd0`,
																																																							"data-styles-preset": `q7NcKTKUL`,
																																																							children: `Fresh Visual Trends in 2026`,
																																																						},
																																																					),
																																																			},
																																																		),
																																																},
																																															),
																																													},
																																												),
																																											className: `framer-39vir8`,
																																											
																																											fonts: [
																																												`Inter`,
																																											],
																																											layoutDependency:
																																												W,
																																											layoutId: `B1eAq1CJX`,
																																											style: {
																																												"--extracted-1lwpl3i": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																												"--framer-paragraph-spacing": `0px`,
																																											},
																																											text: s,
																																											verticalAlignment: `top`,
																																											whileHover:
																																												lt,
																																											withExternalLayout:
																																												!0,
																																											...J(
																																												{
																																													e_indrHZ3:
																																														{
																																															children:
																																																i(
																																																	t,
																																																	{
																																																		children:
																																																			i(
																																																				f.h6,
																																																				{
																																																					className: `framer-styles-preset-nkm6se`,
																																																					"data-styles-preset": `BaUGQBb6A`,
																																																					children:
																																																						i(
																																																							N,
																																																							{
																																																								href: {
																																																									pathVariables:
																																																										{
																																																											oeVdX_wT7:
																																																												r,
																																																										},
																																																									webPageId: `bIrb34sTa`,
																																																								},
																																																								motionChild:
																																																									!0,
																																																								nodeId: `B1eAq1CJX`,
																																																								openInNewTab:
																																																									!1,
																																																								relValues:
																																																									[],
																																																								scopeId: `BhIrHMnrg`,
																																																								smoothScroll:
																																																									!1,
																																																								children:
																																																									i(
																																																										f.a,
																																																										{
																																																											className: `framer-styles-preset-mgrqd0`,
																																																											"data-styles-preset": `q7NcKTKUL`,
																																																											children: `Fresh Visual Trends in 2026`,
																																																										},
																																																									),
																																																							},
																																																						),
																																																				},
																																																			),
																																																	},
																																																),
																																														},
																																													oB1JgoU9o:
																																														{
																																															children:
																																																i(
																																																	t,
																																																	{
																																																		children:
																																																			i(
																																																				f.h6,
																																																				{
																																																					className: `framer-styles-preset-nkm6se`,
																																																					"data-styles-preset": `BaUGQBb6A`,
																																																					children:
																																																						i(
																																																							N,
																																																							{
																																																								href: {
																																																									pathVariables:
																																																										{
																																																											oeVdX_wT7:
																																																												r,
																																																										},
																																																									webPageId: `bIrb34sTa`,
																																																								},
																																																								motionChild:
																																																									!0,
																																																								nodeId: `B1eAq1CJX`,
																																																								openInNewTab:
																																																									!1,
																																																								relValues:
																																																									[],
																																																								scopeId: `BhIrHMnrg`,
																																																								smoothScroll:
																																																									!1,
																																																								children:
																																																									i(
																																																										f.a,
																																																										{
																																																											className: `framer-styles-preset-mgrqd0`,
																																																											"data-styles-preset": `q7NcKTKUL`,
																																																											children: `Fresh Visual Trends in 2026`,
																																																										},
																																																									),
																																																							},
																																																						),
																																																				},
																																																			),
																																																	},
																																																),
																																														},
																																												},
																																												V,
																																												U,
																																											),
																																										},
																																									),
																																									i(
																																										v,
																																										{
																																											__fromCanvasComponent:
																																												!0,
																																											children:
																																												i(
																																													t,
																																													{
																																														children:
																																															i(
																																																f.p,
																																																{
																																																	className: `framer-styles-preset-11kcybb`,
																																																	"data-styles-preset": `pPuowuywh`,
																																																	style: {
																																																		"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																																																	},
																																																	children: `Design systems fail when they become museums. Ours start as a minimal kit built around the next launch date. We define tokens (type, color, spacing), 8–12 core components, and rules for states and content density. `,
																																																},
																																															),
																																													},
																																												),
																																											className: `framer-5sg2a3`,
																																											// "data-framer-name": `Short Text`,
																																											fonts: [
																																												`Inter`,
																																											],
																																											layoutDependency:
																																												W,
																																											layoutId: `DDREsm1iO`,
																																											style: {
																																												"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																												"--framer-paragraph-spacing": `0px`,
																																											},
																																											text: e,
																																											verticalAlignment: `top`,
																																											withExternalLayout:
																																												!0,
																																										},
																																									),
																																								],
																																						},
																																					),
																																					i(
																																						N,
																																						{
																																							href: {
																																								pathVariables:
																																									{
																																										oeVdX_wT7:
																																											r,
																																									},
																																								webPageId: `bIrb34sTa`,
																																							},
																																							motionChild:
																																								!0,
																																							nodeId: `xF8c7T3gn`,
																																							openInNewTab:
																																								!1,
																																							scopeId: `BhIrHMnrg`,
																																							children:
																																								i(
																																									te,
																																									{
																																										as: `a`,
																																										background:
																																											{
																																												alt: ``,
																																												fit: `fill`,
																																												loading:
																																													k(
																																														(h?.y ||
																																															0) +
																																															(0 +
																																																((h?.height ||
																																																	1052) -
																																																	0 -
																																																	419) /
																																																	2) +
																																															0 +
																																															52.5 +
																																															0 +
																																															0 +
																																															0 +
																																															2,
																																													),
																																												pixelHeight: 510,
																																												pixelWidth: 1300,
																																												sizes: `max((max(max(${h?.width || `100vw`}, 1px) - 121px, 1px) - 6px) / 2, 1px)`,
																																												...Y(
																																													a,
																																												),
																																											},
																																										className: `framer-1b1rghs framer-1ul97yi`,
																																										
																																										layoutDependency:
																																											W,
																																										layoutId: `xF8c7T3gn`,
																																										style: {
																																											borderBottomLeftRadius: 8,
																																											borderBottomRightRadius: 8,
																																											borderTopLeftRadius: 8,
																																											borderTopRightRadius: 8,
																																										},
																																										whileHover:
																																											ut,
																																										...J(
																																											{
																																												e_indrHZ3:
																																													{
																																														background:
																																															{
																																																alt: ``,
																																																fit: `fill`,
																																																loading:
																																																	k(
																																																		(h?.y ||
																																																			0) +
																																																			0 +
																																																			(((h?.height ||
																																																				1830.5) -
																																																				0 -
																																																				759) /
																																																				2 +
																																																				0 +
																																																				0) +
																																																			0 +
																																																			47.5 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			2 +
																																																			0,
																																																	),
																																																pixelHeight: 510,
																																																pixelWidth: 1300,
																																																sizes: `calc(${h?.width || `100vw`} - 4px)`,
																																																...Y(
																																																	a,
																																																),
																																															},
																																														fitImageDimension: `height`,
																																													},
																																												GWdkepxAn:
																																													{
																																														background:
																																															{
																																																alt: ``,
																																																fit: `fill`,
																																																loading:
																																																	k(
																																																		(h?.y ||
																																																			0) +
																																																			(0 +
																																																				((h?.height ||
																																																					1376) -
																																																					0 -
																																																					419) /
																																																					2) +
																																																			0 +
																																																			52.5 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			2,
																																																	),
																																																pixelHeight: 510,
																																																pixelWidth: 1300,
																																																sizes: `max((max(max(${h?.width || `100vw`}, 1px) - 121px, 1px) - 6px) / 2, 1px)`,
																																																...Y(
																																																	a,
																																																),
																																															},
																																													},
																																												hW1S5f5S1:
																																													{
																																														background:
																																															{
																																																alt: ``,
																																																fit: `fill`,
																																																loading:
																																																	k(
																																																		(h?.y ||
																																																			0) +
																																																			(0 +
																																																				((h?.height ||
																																																					1633.5) -
																																																					0 -
																																																					631) /
																																																					2) +
																																																			0 +
																																																			55 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			2 +
																																																			0,
																																																	),
																																																pixelHeight: 510,
																																																pixelWidth: 1300,
																																																sizes: `calc(max(max(${h?.width || `100vw`}, 1px) - 121px, 1px) - 4px)`,
																																																...Y(
																																																	a,
																																																),
																																															},
																																														fitImageDimension: `height`,
																																													},
																																												Ke3Z8JMZB:
																																													{
																																														background:
																																															{
																																																alt: ``,
																																																fit: `fill`,
																																																loading:
																																																	k(
																																																		(h?.y ||
																																																			0) +
																																																			(0 +
																																																				((h?.height ||
																																																					2150) -
																																																					0 -
																																																					621) /
																																																					2) +
																																																			0 +
																																																			50 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			2 +
																																																			0,
																																																	),
																																																pixelHeight: 510,
																																																pixelWidth: 1300,
																																																sizes: `calc(max(max(${h?.width || `100vw`}, 1px) - 121px, 1px) - 4px)`,
																																																...Y(
																																																	a,
																																																),
																																															},
																																														fitImageDimension: `height`,
																																													},
																																												oB1JgoU9o:
																																													{
																																														background:
																																															{
																																																alt: ``,
																																																fit: `fill`,
																																																loading:
																																																	k(
																																																		(h?.y ||
																																																			0) +
																																																			0 +
																																																			(((h?.height ||
																																																				1411.5) -
																																																				0 -
																																																				779) /
																																																				2 +
																																																				0 +
																																																				0) +
																																																			0 +
																																																			57.5 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			2 +
																																																			0,
																																																	),
																																																pixelHeight: 510,
																																																pixelWidth: 1300,
																																																sizes: `calc(${h?.width || `100vw`} - 4px)`,
																																																...Y(
																																																	a,
																																																),
																																															},
																																														fitImageDimension: `height`,
																																													},
																																											},
																																											V,
																																											U,
																																										),
																																									},
																																								),
																																						},
																																					),
																																				],
																																		},
																																	),
																																	i(
																																		E,
																																		{
																																			links: [
																																				{
																																					href: {
																																						pathVariables:
																																							{
																																								oeVdX_wT7:
																																									r,
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
																																									r,
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
																																									r,
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
																																									r,
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
																																									r,
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
																																									r,
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
																																					i(
																																						L,
																																						{
																																							height: 314,
																																							width: `119px`,
																																							y:
																																								(h?.y ||
																																									0) +
																																								(0 +
																																									((h?.height ||
																																										1052) -
																																										0 -
																																										419) /
																																										2) +
																																								0 +
																																								52.5 +
																																								0 +
																																								0 +
																																								0,
																																							...J(
																																								{
																																									e_indrHZ3:
																																										{
																																											height: 299,
																																											width:
																																												h?.width ||
																																												`100vw`,
																																											y:
																																												(h?.y ||
																																													0) +
																																												0 +
																																												(((h?.height ||
																																													1830.5) -
																																													0 -
																																													759) /
																																													2 +
																																													0 +
																																													0) +
																																												0 +
																																												47.5 +
																																												0 +
																																												0 +
																																												0 +
																																												563,
																																										},
																																									GWdkepxAn:
																																										{
																																											y:
																																												(h?.y ||
																																													0) +
																																												(0 +
																																													((h?.height ||
																																														1376) -
																																														0 -
																																														419) /
																																														2) +
																																												0 +
																																												52.5 +
																																												0 +
																																												0 +
																																												0,
																																										},
																																									hW1S5f5S1:
																																										{
																																											height: 606,
																																											y:
																																												(h?.y ||
																																													0) +
																																												(0 +
																																													((h?.height ||
																																														1633.5) -
																																														0 -
																																														631) /
																																														2) +
																																												0 +
																																												55 +
																																												0 +
																																												0 +
																																												0,
																																										},
																																									Ke3Z8JMZB:
																																										{
																																											height: 606,
																																											y:
																																												(h?.y ||
																																													0) +
																																												(0 +
																																													((h?.height ||
																																														2150) -
																																														0 -
																																														621) /
																																														2) +
																																												0 +
																																												50 +
																																												0 +
																																												0 +
																																												0,
																																										},
																																									oB1JgoU9o:
																																										{
																																											height: 299,
																																											width:
																																												h?.width ||
																																												`100vw`,
																																											y:
																																												(h?.y ||
																																													0) +
																																												0 +
																																												(((h?.height ||
																																													1411.5) -
																																													0 -
																																													779) /
																																													2 +
																																													0 +
																																													0) +
																																												0 +
																																												57.5 +
																																												0 +
																																												0 +
																																												0 +
																																												563,
																																										},
																																								},
																																								V,
																																								U,
																																							),
																																							children:
																																								i(
																																									S,
																																									{
																																										className: `framer-1lay61e-container`,
																																										layoutDependency:
																																											W,
																																										layoutId: `VvY9KM9bS-container`,
																																										nodeId: `VvY9KM9bS`,
																																										rendersWithMotion:
																																											!0,
																																										scopeId: `BhIrHMnrg`,
																																										children:
																																											i(
																																												Ye,
																																												{
																																													aNcBB1l2I: `[READ MORE]`,
																																													fWogkGBfe:
																																														e[0],
																																													height: `100%`,
																																													id: `VvY9KM9bS`,
																																													layoutId: `VvY9KM9bS`,
																																													style: {
																																														height: `100%`,
																																														width: `100%`,
																																													},
																																													variant: `vKKbtDO1N`,
																																													width: `100%`,
																																													...J(
																																														{
																																															e_indrHZ3:
																																																{
																																																	fWogkGBfe:
																																																		e[5],
																																																	style: {
																																																		width: `100%`,
																																																	},
																																																	variant: `X3qFlTbTF`,
																																																},
																																															GWdkepxAn:
																																																{
																																																	fWogkGBfe:
																																																		e[3],
																																																},
																																															hW1S5f5S1:
																																																{
																																																	fWogkGBfe:
																																																		e[1],
																																																},
																																															Ke3Z8JMZB:
																																																{
																																																	fWogkGBfe:
																																																		e[4],
																																																},
																																															oB1JgoU9o:
																																																{
																																																	fWogkGBfe:
																																																		e[2],
																																																	style: {
																																																		width: `100%`,
																																																	},
																																																	variant: `X3qFlTbTF`,
																																																},
																																														},
																																														V,
																																														U,
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
																												o &&
																													c(
																														Qe,
																														{
																															className: `framer-1q1cjus`,
																															"data-framer-appear-id": `1q1cjus-${l}`,
																															// "data-framer-name": `Left`,
																															layoutDependency:
																																W,
																															layoutId: `CzB2HUMNs`,
																															...J(
																																{
																																	GWdkepxAn:
																																		{
																																			__perspectiveFX:
																																				!1,
																																			__smartComponentFX:
																																				!0,
																																			__targetOpacity: 1,
																																			animate:
																																				{
																																					opacity: 1,
																																					rotate: 0,
																																					rotateX: 0,
																																					rotateY: 0,
																																					scale: 1,
																																					skewX: 0,
																																					skewY: 0,
																																					transition:
																																						ot(
																																							at,
																																							(l %
																																								10) *
																																								0.3,
																																						),
																																					x: 0,
																																					y: 0,
																																				},
																																			initial:
																																				st,
																																			optimized:
																																				!0,
																																		},
																																},
																																V,
																																U,
																															),
																															children:
																																[
																																	c(
																																		f.div,
																																		{
																																			className: `framer-vajzqs`,
																																			// "data-framer-name": `Text & Image`,
																																			layoutDependency:
																																				W,
																																			layoutId: `Z7poyxi9E`,
																																			style: {
																																				backgroundColor: `rgb(255, 255, 255)`,
																																				borderBottomLeftRadius: 10,
																																				borderBottomRightRadius: 10,
																																				borderTopLeftRadius: 10,
																																				borderTopRightRadius: 10,
																																			},
																																			children:
																																				[
																																					i(
																																						N,
																																						{
																																							href: {
																																								pathVariables:
																																									{
																																										oeVdX_wT7:
																																											r,
																																									},
																																								webPageId: `bIrb34sTa`,
																																							},
																																							motionChild:
																																								!0,
																																							nodeId: `jBCDkaZUd`,
																																							openInNewTab:
																																								!1,
																																							scopeId: `BhIrHMnrg`,
																																							children:
																																								i(
																																									te,
																																									{
																																										as: `a`,
																																										background:
																																											{
																																												alt: ``,
																																												fit: `fill`,
																																												loading:
																																													k(
																																														(h?.y ||
																																															0) +
																																															(0 +
																																																((h?.height ||
																																																	1052) -
																																																	0 -
																																																	419) /
																																																	2) +
																																															0 +
																																															52.5 +
																																															0 +
																																															0 +
																																															0 +
																																															2,
																																													),
																																												pixelHeight: 510,
																																												pixelWidth: 1300,
																																												sizes: `max((max(max(${h?.width || `100vw`}, 1px) - 121px, 1px) - 6px) / 2, 1px)`,
																																												...Y(
																																													a,
																																												),
																																											},
																																										className: `framer-ep6kc2 framer-1ul97yi`,
																																										
																																										layoutDependency:
																																											W,
																																										layoutId: `jBCDkaZUd`,
																																										style: {
																																											borderBottomLeftRadius: 8,
																																											borderBottomRightRadius: 8,
																																											borderTopLeftRadius: 8,
																																											borderTopRightRadius: 8,
																																										},
																																										whileHover:
																																											ut,
																																										...J(
																																											{
																																												e_indrHZ3:
																																													{
																																														background:
																																															{
																																																alt: ``,
																																																fit: `fill`,
																																																loading:
																																																	k(
																																																		(h?.y ||
																																																			0) +
																																																			0 +
																																																			(((h?.height ||
																																																				1830.5) -
																																																				0 -
																																																				759) /
																																																				2 +
																																																				0 +
																																																				0) +
																																																			0 +
																																																			47.5 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			2 +
																																																			0,
																																																	),
																																																pixelHeight: 510,
																																																pixelWidth: 1300,
																																																sizes: `calc(${h?.width || `100vw`} - 4px)`,
																																																...Y(
																																																	a,
																																																),
																																															},
																																														fitImageDimension: `height`,
																																													},
																																												GWdkepxAn:
																																													{
																																														background:
																																															{
																																																alt: ``,
																																																fit: `fill`,
																																																loading:
																																																	k(
																																																		(h?.y ||
																																																			0) +
																																																			(0 +
																																																				((h?.height ||
																																																					1376) -
																																																					0 -
																																																					419) /
																																																					2) +
																																																			0 +
																																																			52.5 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			2,
																																																	),
																																																pixelHeight: 510,
																																																pixelWidth: 1300,
																																																sizes: `max((max(max(${h?.width || `100vw`}, 1px) - 121px, 1px) - 6px) / 2, 1px)`,
																																																...Y(
																																																	a,
																																																),
																																															},
																																													},
																																												hW1S5f5S1:
																																													{
																																														background:
																																															{
																																																alt: ``,
																																																fit: `fill`,
																																																loading:
																																																	k(
																																																		(h?.y ||
																																																			0) +
																																																			(0 +
																																																				((h?.height ||
																																																					1633.5) -
																																																					0 -
																																																					631) /
																																																					2) +
																																																			0 +
																																																			55 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			2 +
																																																			0,
																																																	),
																																																pixelHeight: 510,
																																																pixelWidth: 1300,
																																																sizes: `calc(max(max(${h?.width || `100vw`}, 1px) - 121px, 1px) - 4px)`,
																																																...Y(
																																																	a,
																																																),
																																															},
																																														fitImageDimension: `height`,
																																													},
																																												Ke3Z8JMZB:
																																													{
																																														background:
																																															{
																																																alt: ``,
																																																fit: `fill`,
																																																loading:
																																																	k(
																																																		(h?.y ||
																																																			0) +
																																																			(0 +
																																																				((h?.height ||
																																																					2150) -
																																																					0 -
																																																					621) /
																																																					2) +
																																																			0 +
																																																			50 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			2 +
																																																			0,
																																																	),
																																																pixelHeight: 510,
																																																pixelWidth: 1300,
																																																sizes: `calc(max(max(${h?.width || `100vw`}, 1px) - 121px, 1px) - 4px)`,
																																																...Y(
																																																	a,
																																																),
																																															},
																																														fitImageDimension: `height`,
																																													},
																																												oB1JgoU9o:
																																													{
																																														background:
																																															{
																																																alt: ``,
																																																fit: `fill`,
																																																loading:
																																																	k(
																																																		(h?.y ||
																																																			0) +
																																																			0 +
																																																			(((h?.height ||
																																																				1411.5) -
																																																				0 -
																																																				779) /
																																																				2 +
																																																				0 +
																																																				0) +
																																																			0 +
																																																			57.5 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			0 +
																																																			2 +
																																																			0,
																																																	),
																																																pixelHeight: 510,
																																																pixelWidth: 1300,
																																																sizes: `calc(${h?.width || `100vw`} - 4px)`,
																																																...Y(
																																																	a,
																																																),
																																															},
																																														fitImageDimension: `height`,
																																													},
																																											},
																																											V,
																																											U,
																																										),
																																									},
																																								),
																																						},
																																					),
																																					c(
																																						f.div,
																																						{
																																							className: `framer-rfzun6`,
																																							// "data-framer-name": `Text`,
																																							layoutDependency:
																																								W,
																																							layoutId: `rQp8rvlRs`,
																																							style: {
																																								backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
																																								borderBottomLeftRadius: 8,
																																								borderBottomRightRadius: 8,
																																								borderTopLeftRadius: 8,
																																								borderTopRightRadius: 8,
																																							},
																																							children:
																																								[
																																									i(
																																										v,
																																										{
																																											__fromCanvasComponent:
																																												!0,
																																											children:
																																												i(
																																													t,
																																													{
																																														children:
																																															i(
																																																f.h5,
																																																{
																																																	className: `framer-styles-preset-h6j8it`,
																																																	"data-styles-preset": `dBxplyp6M`,
																																																	style: {
																																																		"--framer-text-alignment": `left`,
																																																		"--framer-text-color": `var(--extracted-1lwpl3i, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																																	},
																																																	children:
																																																		i(
																																																			N,
																																																			{
																																																				href: {
																																																					pathVariables:
																																																						{
																																																							oeVdX_wT7:
																																																								r,
																																																						},
																																																					webPageId: `bIrb34sTa`,
																																																				},
																																																				motionChild:
																																																					!0,
																																																				nodeId: `BuFpmk4aT`,
																																																				openInNewTab:
																																																					!1,
																																																				relValues:
																																																					[],
																																																				scopeId: `BhIrHMnrg`,
																																																				smoothScroll:
																																																					!1,
																																																				children:
																																																					i(
																																																						f.a,
																																																						{
																																																							className: `framer-styles-preset-mgrqd0`,
																																																							"data-styles-preset": `q7NcKTKUL`,
																																																							children: `Fresh Visual Trends in 2026`,
																																																						},
																																																					),
																																																			},
																																																		),
																																																},
																																															),
																																													},
																																												),
																																											className: `framer-blvxw9`,
																																											
																																											fonts: [
																																												`Inter`,
																																											],
																																											layoutDependency:
																																												W,
																																											layoutId: `BuFpmk4aT`,
																																											style: {
																																												"--extracted-1lwpl3i": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																												"--framer-paragraph-spacing": `0px`,
																																											},
																																											text: s,
																																											verticalAlignment: `top`,
																																											whileHover:
																																												lt,
																																											withExternalLayout:
																																												!0,
																																											...J(
																																												{
																																													e_indrHZ3:
																																														{
																																															children:
																																																i(
																																																	t,
																																																	{
																																																		children:
																																																			i(
																																																				f.h6,
																																																				{
																																																					className: `framer-styles-preset-nkm6se`,
																																																					"data-styles-preset": `BaUGQBb6A`,
																																																					children:
																																																						i(
																																																							N,
																																																							{
																																																								href: {
																																																									pathVariables:
																																																										{
																																																											oeVdX_wT7:
																																																												r,
																																																										},
																																																									webPageId: `bIrb34sTa`,
																																																								},
																																																								motionChild:
																																																									!0,
																																																								nodeId: `BuFpmk4aT`,
																																																								openInNewTab:
																																																									!1,
																																																								relValues:
																																																									[],
																																																								scopeId: `BhIrHMnrg`,
																																																								smoothScroll:
																																																									!1,
																																																								children:
																																																									i(
																																																										f.a,
																																																										{
																																																											className: `framer-styles-preset-mgrqd0`,
																																																											"data-styles-preset": `q7NcKTKUL`,
																																																											children: `Fresh Visual Trends in 2026`,
																																																										},
																																																									),
																																																							},
																																																						),
																																																				},
																																																			),
																																																	},
																																																),
																																														},
																																													oB1JgoU9o:
																																														{
																																															children:
																																																i(
																																																	t,
																																																	{
																																																		children:
																																																			i(
																																																				f.h6,
																																																				{
																																																					className: `framer-styles-preset-nkm6se`,
																																																					"data-styles-preset": `BaUGQBb6A`,
																																																					children:
																																																						i(
																																																							N,
																																																							{
																																																								href: {
																																																									pathVariables:
																																																										{
																																																											oeVdX_wT7:
																																																												r,
																																																										},
																																																									webPageId: `bIrb34sTa`,
																																																								},
																																																								motionChild:
																																																									!0,
																																																								nodeId: `BuFpmk4aT`,
																																																								openInNewTab:
																																																									!1,
																																																								relValues:
																																																									[],
																																																								scopeId: `BhIrHMnrg`,
																																																								smoothScroll:
																																																									!1,
																																																								children:
																																																									i(
																																																										f.a,
																																																										{
																																																											className: `framer-styles-preset-mgrqd0`,
																																																											"data-styles-preset": `q7NcKTKUL`,
																																																											children: `Fresh Visual Trends in 2026`,
																																																										},
																																																									),
																																																							},
																																																						),
																																																				},
																																																			),
																																																	},
																																																),
																																														},
																																												},
																																												V,
																																												U,
																																											),
																																										},
																																									),
																																									i(
																																										v,
																																										{
																																											__fromCanvasComponent:
																																												!0,
																																											children:
																																												i(
																																													t,
																																													{
																																														children:
																																															i(
																																																f.p,
																																																{
																																																	className: `framer-styles-preset-11kcybb`,
																																																	"data-styles-preset": `pPuowuywh`,
																																																	style: {
																																																		"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																																																	},
																																																	children: `Design systems fail when they become museums. Ours start as a minimal kit built around the next launch date. We define tokens (type, color, spacing), 8–12 core components, and rules for states and content density. `,
																																																},
																																															),
																																													},
																																												),
																																											className: `framer-137g36m`,
																																											// "data-framer-name": `Short Text`,
																																											fonts: [
																																												`Inter`,
																																											],
																																											layoutDependency:
																																												W,
																																											layoutId: `l2zLX4yfq`,
																																											style: {
																																												"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																												"--framer-paragraph-spacing": `0px`,
																																											},
																																											text: e,
																																											verticalAlignment: `top`,
																																											withExternalLayout:
																																												!0,
																																										},
																																									),
																																								],
																																						},
																																					),
																																				],
																																		},
																																	),
																																	i(
																																		E,
																																		{
																																			links: [
																																				{
																																					href: {
																																						pathVariables:
																																							{
																																								oeVdX_wT7:
																																									r,
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
																																									r,
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
																																									r,
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
																																									r,
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
																																									r,
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
																																									r,
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
																																					i(
																																						L,
																																						{
																																							height: 314,
																																							width: `119px`,
																																							y:
																																								(h?.y ||
																																									0) +
																																								(0 +
																																									((h?.height ||
																																										1052) -
																																										0 -
																																										419) /
																																										2) +
																																								0 +
																																								52.5 +
																																								0 +
																																								0 +
																																								0,
																																							...J(
																																								{
																																									e_indrHZ3:
																																										{
																																											height: 299,
																																											width:
																																												h?.width ||
																																												`100vw`,
																																											y:
																																												(h?.y ||
																																													0) +
																																												0 +
																																												(((h?.height ||
																																													1830.5) -
																																													0 -
																																													759) /
																																													2 +
																																													0 +
																																													0) +
																																												0 +
																																												47.5 +
																																												0 +
																																												0 +
																																												0 +
																																												365,
																																										},
																																									GWdkepxAn:
																																										{
																																											y:
																																												(h?.y ||
																																													0) +
																																												(0 +
																																													((h?.height ||
																																														1376) -
																																														0 -
																																														419) /
																																														2) +
																																												0 +
																																												52.5 +
																																												0 +
																																												0 +
																																												0,
																																										},
																																									hW1S5f5S1:
																																										{
																																											height: 521,
																																											y:
																																												(h?.y ||
																																													0) +
																																												(0 +
																																													((h?.height ||
																																														1633.5) -
																																														0 -
																																														631) /
																																														2) +
																																												0 +
																																												55 +
																																												0 +
																																												0 +
																																												0,
																																										},
																																									Ke3Z8JMZB:
																																										{
																																											height: 521,
																																											y:
																																												(h?.y ||
																																													0) +
																																												(0 +
																																													((h?.height ||
																																														2150) -
																																														0 -
																																														621) /
																																														2) +
																																												0 +
																																												50 +
																																												0 +
																																												0 +
																																												0,
																																										},
																																									oB1JgoU9o:
																																										{
																																											height: 299,
																																											width:
																																												h?.width ||
																																												`100vw`,
																																											y:
																																												(h?.y ||
																																													0) +
																																												0 +
																																												(((h?.height ||
																																													1411.5) -
																																													0 -
																																													779) /
																																													2 +
																																													0 +
																																													0) +
																																												0 +
																																												57.5 +
																																												0 +
																																												0 +
																																												0 +
																																												365,
																																										},
																																								},
																																								V,
																																								U,
																																							),
																																							children:
																																								i(
																																									S,
																																									{
																																										className: `framer-g7absq-container`,
																																										layoutDependency:
																																											W,
																																										layoutId: `XnZ1SDP3e-container`,
																																										nodeId: `XnZ1SDP3e`,
																																										rendersWithMotion:
																																											!0,
																																										scopeId: `BhIrHMnrg`,
																																										children:
																																											i(
																																												Ye,
																																												{
																																													aNcBB1l2I: `[READ MORE]`,
																																													fWogkGBfe:
																																														e[0],
																																													height: `100%`,
																																													id: `XnZ1SDP3e`,
																																													layoutId: `XnZ1SDP3e`,
																																													style: {
																																														height: `100%`,
																																														width: `100%`,
																																													},
																																													variant: `vKKbtDO1N`,
																																													width: `100%`,
																																													...J(
																																														{
																																															e_indrHZ3:
																																																{
																																																	fWogkGBfe:
																																																		e[5],
																																																	style: {
																																																		width: `100%`,
																																																	},
																																																	variant: `X3qFlTbTF`,
																																																},
																																															GWdkepxAn:
																																																{
																																																	fWogkGBfe:
																																																		e[3],
																																																},
																																															hW1S5f5S1:
																																																{
																																																	fWogkGBfe:
																																																		e[1],
																																																},
																																															Ke3Z8JMZB:
																																																{
																																																	fWogkGBfe:
																																																		e[4],
																																																},
																																															oB1JgoU9o:
																																																{
																																																	fWogkGBfe:
																																																		e[2],
																																																	style: {
																																																		width: `100%`,
																																																	},
																																																	variant: `X3qFlTbTF`,
																																																},
																																														},
																																														V,
																																														U,
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
																									},
																								),
																						},
																					),
																			},
																			n,
																		);
																	},
																),
																x &&
																	i(f.div, {
																		className: `framer-2ck25m`,
																		
																		layoutDependency:
																			W,
																		layoutId: `CNynIs6uR`,
																	}),
																C &&
																	i(L, {
																		height: 50,
																		y:
																			(h?.y ||
																				0) +
																			(0 +
																				((h?.height ||
																					1052) -
																					0 -
																					419) /
																					2) +
																			0 +
																			391.5,
																		...J(
																			{
																				e_indrHZ3:
																					{
																						width:
																							h?.width ||
																							`100vw`,
																						y:
																							(h?.y ||
																								0) +
																							0 +
																							(((h?.height ||
																								1830.5) -
																								0 -
																								759) /
																								2 +
																								0 +
																								0) +
																							0 +
																							731.5,
																					},
																				GWdkepxAn:
																					{
																						y:
																							(h?.y ||
																								0) +
																							(0 +
																								((h?.height ||
																									1376) -
																									0 -
																									419) /
																									2) +
																							0 +
																							391.5,
																					},
																				hW1S5f5S1:
																					{
																						y:
																							(h?.y ||
																								0) +
																							(0 +
																								((h?.height ||
																									1633.5) -
																									0 -
																									631) /
																									2) +
																							0 +
																							596,
																					},
																				Ke3Z8JMZB:
																					{
																						y:
																							(h?.y ||
																								0) +
																							(0 +
																								((h?.height ||
																									2150) -
																									0 -
																									621) /
																									2) +
																							0 +
																							591,
																					},
																				oB1JgoU9o:
																					{
																						width:
																							h?.width ||
																							`100vw`,
																						y:
																							(h?.y ||
																								0) +
																							0 +
																							(((h?.height ||
																								1411.5) -
																								0 -
																								779) /
																								2 +
																								0 +
																								0) +
																							0 +
																							741.5,
																					},
																			},
																			V,
																			U,
																		),
																		children:
																			i(
																				S,
																				{
																					className: `framer-1lxueen-container`,
																					layoutDependency:
																						W,
																					layoutId: `OjYwVIc0A-container`,
																					nodeId: `OjYwVIc0A`,
																					rendersWithMotion:
																						!0,
																					scopeId: `BhIrHMnrg`,
																					children:
																						i(
																							xe,
																							{
																								height: `100%`,
																								id: `OjYwVIc0A`,
																								layoutId: `OjYwVIc0A`,
																								variant:
																									dt(
																										n,
																										{
																											disabled: `ugQupQuy5`,
																											loading: `MnozbBE93`,
																										},
																										`D3N7gFuhz`,
																									),
																								width: `100%`,
																								Wld3NDzSj:
																									ge(
																										{
																											loadMore:
																												r,
																										},
																									),
																								...J(
																									{
																										e_indrHZ3:
																											{
																												style: {
																													width: `100%`,
																												},
																											},
																										oB1JgoU9o:
																											{
																												style: {
																													width: `100%`,
																												},
																											},
																									},
																									V,
																									U,
																								),
																							},
																						),
																				},
																			),
																	}),
															],
														}),
												}),
											}),
										}),
									}),
								}),
							}),
						})
					);
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-nONIL.framer-1ul97yi, .framer-nONIL .framer-1ul97yi { display: block; }`,
					`.framer-nONIL.framer-1tsnwg4 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1120px; }`,
					`.framer-nONIL .framer-5nkas6 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 1px; }`,
					`.framer-nONIL .framer-6t1xi5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
					`.framer-nONIL .framer-1lzrxid, .framer-nONIL .framer-1q1cjus { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-nONIL .framer-1tr3203, .framer-nONIL .framer-vajzqs { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 2px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-nONIL .framer-7pv3ri, .framer-nONIL .framer-rfzun6 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: center; overflow: visible; padding: 60px; position: relative; width: 1px; }`,
					`.framer-nONIL .framer-39vir8, .framer-nONIL .framer-blvxw9 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; will-change: var(--framer-will-change-effect-override, transform); word-break: break-word; word-wrap: break-word; }`,
					`.framer-nONIL .framer-5sg2a3, .framer-nONIL .framer-137g36m { --text-truncation-display-inline-for-safari-16: inline; --text-truncation-display-none-for-safari-16: none; --text-truncation-line-break-for-safari-16: "\\A"; -webkit-box-orient: vertical; -webkit-line-clamp: 3; display: -webkit-box; flex: none; height: auto; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-line; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-nONIL .framer-1b1rghs, .framer-nONIL .framer-ep6kc2 { align-self: stretch; flex: 1 0 0px; gap: 17px; height: auto; overflow: visible; position: relative; text-decoration: none; width: 1px; will-change: var(--framer-will-change-effect-override, transform); }`,
					`.framer-nONIL .framer-1lay61e-container, .framer-nONIL .framer-g7absq-container { align-self: stretch; flex: none; height: auto; position: relative; width: 119px; }`,
					`.framer-nONIL .framer-2ck25m { flex: none; height: 5px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-nONIL .framer-1lxueen-container { flex: none; height: auto; position: relative; width: auto; }`,
					`.framer-nONIL.framer-v-1cdm7bf.framer-1tsnwg4, .framer-nONIL.framer-v-9p8a3r.framer-1tsnwg4 { width: 750px; }`,
					`.framer-nONIL.framer-v-1cdm7bf .framer-5nkas6, .framer-nONIL.framer-v-9p8a3r .framer-5nkas6 { gap: 20px; }`,
					`.framer-nONIL.framer-v-1cdm7bf .framer-1tr3203, .framer-nONIL.framer-v-1cdm7bf .framer-vajzqs, .framer-nONIL.framer-v-191rkvx .framer-1lzrxid, .framer-nONIL.framer-v-191rkvx .framer-1q1cjus, .framer-nONIL.framer-v-9p8a3r .framer-1tr3203, .framer-nONIL.framer-v-9p8a3r .framer-vajzqs, .framer-nONIL.framer-v-z4r4vt .framer-1lzrxid, .framer-nONIL.framer-v-z4r4vt .framer-1q1cjus { flex-direction: column; }`,
					`.framer-nONIL.framer-v-1cdm7bf .framer-7pv3ri, .framer-nONIL.framer-v-1cdm7bf .framer-rfzun6, .framer-nONIL.framer-v-9p8a3r .framer-7pv3ri, .framer-nONIL.framer-v-9p8a3r .framer-rfzun6 { flex: none; order: 1; padding: 40px; width: 100%; }`,
					`.framer-nONIL.framer-v-1cdm7bf .framer-1b1rghs, .framer-nONIL.framer-v-1cdm7bf .framer-ep6kc2, .framer-nONIL.framer-v-191rkvx .framer-1b1rghs, .framer-nONIL.framer-v-191rkvx .framer-ep6kc2, .framer-nONIL.framer-v-9p8a3r .framer-1b1rghs, .framer-nONIL.framer-v-9p8a3r .framer-ep6kc2, .framer-nONIL.framer-v-z4r4vt .framer-1b1rghs, .framer-nONIL.framer-v-z4r4vt .framer-ep6kc2 { align-self: unset; flex: none; order: 0; width: 100%; }`,
					`.framer-nONIL.framer-v-1cdm7bf .framer-2ck25m { height: 20px; }`,
					`.framer-nONIL.framer-v-191rkvx.framer-1tsnwg4, .framer-nONIL.framer-v-z4r4vt.framer-1tsnwg4 { flex-direction: column; width: 340px; }`,
					`.framer-nONIL.framer-v-191rkvx .framer-5nkas6, .framer-nONIL.framer-v-z4r4vt .framer-5nkas6 { flex: none; gap: 20px; width: 100%; }`,
					`.framer-nONIL.framer-v-191rkvx .framer-1tr3203, .framer-nONIL.framer-v-191rkvx .framer-vajzqs, .framer-nONIL.framer-v-z4r4vt .framer-1tr3203, .framer-nONIL.framer-v-z4r4vt .framer-vajzqs { flex: none; flex-direction: column; width: 100%; }`,
					`.framer-nONIL.framer-v-191rkvx .framer-7pv3ri, .framer-nONIL.framer-v-191rkvx .framer-rfzun6, .framer-nONIL.framer-v-z4r4vt .framer-7pv3ri, .framer-nONIL.framer-v-z4r4vt .framer-rfzun6 { flex: none; gap: 20px; order: 1; padding: 25px; width: 100%; }`,
					`.framer-nONIL.framer-v-191rkvx .framer-1lay61e-container, .framer-nONIL.framer-v-191rkvx .framer-g7absq-container, .framer-nONIL.framer-v-z4r4vt .framer-1lay61e-container, .framer-nONIL.framer-v-z4r4vt .framer-g7absq-container { align-self: unset; width: 100%; }`,
					`.framer-nONIL.framer-v-191rkvx .framer-2ck25m { height: 25px; }`,
					`.framer-nONIL.framer-v-191rkvx .framer-1lxueen-container, .framer-nONIL.framer-v-z4r4vt .framer-1lxueen-container { width: 100%; }`,
					`.framer-nONIL.framer-v-9p8a3r .framer-2ck25m { height: 10px; }`,
					...de,
					...re,
					...ae,
					...ue,
				],
				`framer-nONIL`,
			)),
			(vt = X),
			(X.displayName = `Posts`),
			(X.defaultProps = { height: 1052, width: 1120 }),
			g(X, {
				variant: {
					options: [
						`Hy5imaqGv`,
						`hW1S5f5S1`,
						`oB1JgoU9o`,
						`GWdkepxAn`,
						`Ke3Z8JMZB`,
						`e_indrHZ3`,
					],
					optionTitles: [
						`3 Posts - Desktop`,
						`3 Posts - Tablet`,
						`3 Posts - Phone`,
						`10 Posts - Desktop`,
						`10 Posts - Tablet`,
						`10 Posts - Phone`,
					],
					title: `Variant`,
					type: j.Enum,
				},
				bjjrUBwdp: {
					defaultValue: !0,
					title: `Show Bottom Spacer`,
					type: j.Boolean,
				},
				Pnw_XprOy: {
					defaultValue: !0,
					title: `Show Load More`,
					type: j.Boolean,
				},
				DO8XpcJMl: {
					defaultValue: ``,
					title: `Filter`,
					type: j.String,
				},
			}),
			F(
				X,
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
					...Ze,
					...$e,
					...O(W),
					...O(V),
					...O(oe),
					...O(fe),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function bt(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xt,
	St,
	Ct,
	wt,
	Tt,
	Et,
	Dt,
	Ot,
	kt,
	At,
	jt,
	Z,
	Q,
	Mt = e(() => {
		(l(),
			A(),
			h(),
			r(),
			ve(),
			(xt = x(G)),
			(St = [`UnuGN3X_1`, `X8hKcyMev`]),
			(Ct = `framer-Xes0c`),
			(wt = {
				UnuGN3X_1: `framer-v-1enx3dv`,
				X8hKcyMev: `framer-v-1tdalvp`,
			}),
			(Tt = (e) => {
				if (typeof e != `number`) return e;
				if (Number.isFinite(e)) return Math.max(0, e) + `px`;
			}),
			(Et = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Dt = ({ value: e, children: t }) => {
				let r = o(p),
					a = e ?? r.transition,
					s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return i(p.Provider, { value: s, children: t });
			}),
			(Ot = f.create(t)),
			(kt = { Normal: `UnuGN3X_1`, Vertical: `X8hKcyMev` }),
			(At = ({
				color: e,
				height: t,
				hoverOnly: n,
				id: r,
				link: i,
				openInNewTab: a,
				repeatOnEnter: o,
				restartOnHover: s,
				spacing: c,
				text: l,
				width: u,
				...d
			}) => ({
				...d,
				a10ufliJT: l ?? d.a10ufliJT ?? `[VIEW ALL]`,
				FnHJ3auI6: i ?? d.FnHJ3auI6,
				GvlBMQefU: a ?? d.GvlBMQefU,
				Kq_CijUyE: c ?? d.Kq_CijUyE ?? `15px 50px 15px 50px`,
				mSNDO3YW7: n ?? d.mSNDO3YW7 ?? !0,
				ok7eKoPLP: o ?? d.ok7eKoPLP,
				uziNdYDRk: s ?? d.uziNdYDRk ?? !0,
				variant: kt[d.variant] ?? d.variant ?? `UnuGN3X_1`,
				xuXj4zldx:
					e ??
					d.xuXj4zldx ??
					`var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
			})),
			(jt = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Z = y(
				a(function (e, t) {
					let n = s(null),
						r = t ?? n,
						a = d(),
						{ activeLocale: o, setLocale: c } = z();
					I();
					let {
							style: l,
							className: u,
							layoutId: p,
							variant: h,
							xuXj4zldx: g,
							FnHJ3auI6: _,
							a10ufliJT: v,
							Kq_CijUyE: y,
							GvlBMQefU: b,
							mSNDO3YW7: x,
							uziNdYDRk: C,
							ok7eKoPLP: T,
							...E
						} = At(e),
						{
							baseVariant: O,
							classNames: k,
							clearLoadingGesture: A,
							gestureHandlers: j,
							gestureVariant: M,
							isLoading: ee,
							setGestureState: te,
							setVariant: N,
							variants: P,
						} = D({
							cycleOrder: St,
							defaultVariant: `UnuGN3X_1`,
							ref: r,
							variant: h,
							variantClassNames: wt,
						}),
						F = jt(e, P),
						R = w(Ct);
					return i(m, {
						id: p ?? a,
						children: i(Ot, {
							animate: P,
							initial: !1,
							children: i(Dt, {
								value: Et,
								children: i(f.div, {
									...E,
									...j,
									className: w(R, `framer-1enx3dv`, u, k),
									// "data-framer-name": `Normal`,
									layoutDependency: F,
									layoutId: `UnuGN3X_1`,
									ref: r,
									style: {
										"--azteil": Tt(y),
										rotate: 0,
										...l,
									},
									variants: { X8hKcyMev: { rotate: -90 } },
									...bt(
										{
											X8hKcyMev: {
												// "data-framer-name": `Vertical`,
											},
										},
										O,
										M,
									),
									children: i(L, {
										children: i(S, {
											className: `framer-1xi5k3-container`,
											isAuthoredByUser: !0,
											layoutDependency: F,
											layoutId: `xZfo8S9Ac-container`,
											nodeId: `xZfo8S9Ac`,
											rendersWithMotion: !0,
											scopeId: `dw6Y8o7e5`,
											children: i(G, {
												ariaLabel: `h1`,
												charset: `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*`,
												color: g,
												durationMs: 600,
												font: {
													fontFamily: `"Space Mono", monospace`,
													fontSize: `14px`,
													fontStyle: `normal`,
													fontWeight: 700,
													letterSpacing: `0.18em`,
													lineHeight: `1em`,
													textAlign: `left`,
												},
												fps: 60,
												height: `100%`,
												hoverOnly: x,
												id: `xZfo8S9Ac`,
												intensity: 0.08,
												layoutId: `xZfo8S9Ac`,
												link: _,
												newTab: b,
												repeatOnEnter: T,
												repeatOnHover: C,
												revealEase: `inOut`,
												text: v,
												width: `100%`,
											}),
										}),
									}),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-Xes0c.framer-n572cd, .framer-Xes0c .framer-n572cd { display: block; }`,
					`.framer-Xes0c.framer-1enx3dv { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: var(--azteil); position: relative; width: min-content; }`,
					`.framer-Xes0c .framer-1xi5k3-container { flex: none; height: auto; position: relative; width: auto; }`,
				],
				`framer-Xes0c`,
			)),
			(Q = Z),
			(Z.displayName = `Vertical - Horizontal Link`),
			(Z.defaultProps = { height: 44, width: 111 }),
			g(Z, {
				variant: {
					options: [`UnuGN3X_1`, `X8hKcyMev`],
					optionTitles: [`Normal`, `Vertical`],
					title: `Variant`,
					type: j.Enum,
				},
				xuXj4zldx: {
					defaultValue: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {"name":"Black"} */`,
					title: `Color`,
					type: j.Color,
				},
				FnHJ3auI6: { title: `Link`, type: j.Link },
				a10ufliJT: {
					defaultValue: `[VIEW ALL]`,
					displayTextArea: !1,
					title: `Text`,
					type: j.String,
				},
				Kq_CijUyE: {
					defaultValue: `15px 50px 15px 50px`,
					title: `Spacing`,
					type: j.Padding,
				},
				GvlBMQefU: {
					defaultValue: !1,
					title: `Open In New Tab`,
					type: j.Boolean,
				},
				mSNDO3YW7: {
					defaultValue: !0,
					title: `Hover Only`,
					type: j.Boolean,
				},
				uziNdYDRk: {
					defaultValue: !0,
					title: `Restart On Hover`,
					type: j.Boolean,
				},
				ok7eKoPLP: {
					defaultValue: !1,
					title: `Repeat On Enter`,
					type: j.Boolean,
				},
			}),
			F(
				Z,
				[
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
						],
					},
					...xt,
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function Nt(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Pt,
	Ft,
	It,
	Lt,
	Rt,
	zt,
	Bt,
	Vt,
	Ht,
	Ut,
	Wt,
	Gt,
	Kt,
	qt,
	Jt,
	$,
	Yt,
	Xt = e(() => {
		(l(),
			A(),
			h(),
			r(),
			ie(),
			me(),
			yt(),
			Mt(),
			(Pt = x(Q)),
			(Ft = x(vt)),
			(It = b(vt)),
			(Lt = [`mVhPZw3IV`, `kSC4wNpBu`, `MpacA_qwI`]),
			(Rt = `framer-VLLcs`),
			(zt = {
				kSC4wNpBu: `framer-v-1wm77o7`,
				MpacA_qwI: `framer-v-1ugsl05`,
				mVhPZw3IV: `framer-v-rpnakr`,
			}),
			(Bt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Vt = (e) => {
				if (typeof e != `number`) return e;
				if (Number.isFinite(e)) return Math.max(0, e) + `px`;
			}),
			(Ht = (e, t) => `translateY(-50%) ${t}`),
			(Ut = ({ value: e, children: t }) => {
				let r = o(p),
					a = e ?? r.transition,
					s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return i(p.Provider, { value: s, children: t });
			}),
			(Wt = f.create(t)),
			(Gt = {
				"10 Posts - Desktop": `GWdkepxAn`,
				"10 Posts - Phone": `e_indrHZ3`,
				"10 Posts - Tablet": `Ke3Z8JMZB`,
				"3 Posts - Desktop": `Hy5imaqGv`,
				"3 Posts - Phone": `oB1JgoU9o`,
				"3 Posts - Tablet": `hW1S5f5S1`,
			}),
			(Kt = {
				"Desktop - 1200": `mVhPZw3IV`,
				Phone: `MpacA_qwI`,
				Tablet: `kSC4wNpBu`,
			}),
			(qt = ({
				filter: e,
				headingOfSection: t,
				height: n,
				id: r,
				linkToBlog: i,
				linkToBlogURL: a,
				padding: o,
				sectionNumber: s,
				showAlternateLinkAllPosts: c,
				showBottomSpacer: l,
				showHeading: u,
				showLinkAllPosts: d,
				showLoadMore: f,
				showSectionNumber: p,
				spacingOfLink: m,
				topSpacer: h,
				typeOfList: g,
				width: _,
				...v
			}) => ({
				...v,
				a_RFekTZv: Gt[g] ?? g ?? v.a_RFekTZv ?? `Hy5imaqGv`,
				bFCS9vnuq: o ?? v.bFCS9vnuq ?? `90px 40px 90px 40px`,
				bWjM1v575: a ?? v.bWjM1v575,
				gZ_s_nXv6: u ?? v.gZ_s_nXv6 ?? !0,
				hhaCwl7EP: c ?? v.hhaCwl7EP,
				lQpFEpV2s: i ?? v.lQpFEpV2s ?? `[ALL POSTS]`,
				MXlRuQc91: p ?? v.MXlRuQc91 ?? !0,
				QPWACkysO: e ?? v.QPWACkysO,
				SE9pFAstj: s ?? v.SE9pFAstj ?? `[07]`,
				td4zWVChF: t ?? v.td4zWVChF ?? `Insights`,
				ThIdWbT5T: d ?? v.ThIdWbT5T ?? !0,
				variant: Kt[v.variant] ?? v.variant ?? `mVhPZw3IV`,
				wPj7cgw7A: l ?? v.wPj7cgw7A,
				wpMFMFfh6: h ?? v.wpMFMFfh6 ?? !0,
				XtswemN6o: m ?? v.XtswemN6o ?? `0px 50px 0px 55px`,
				zWwbGwZv_: f ?? v.zWwbGwZv_,
			})),
			(Jt = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			($ = y(
				a(function (e, n) {
					let r = s(null),
						a = n ?? r,
						o = d(),
						{ activeLocale: l, setLocale: u } = z(),
						p = I(),
						{
							style: h,
							className: g,
							layoutId: _,
							variant: y,
							td4zWVChF: b,
							SE9pFAstj: x,
							lQpFEpV2s: C,
							bWjM1v575: T,
							XtswemN6o: E,
							gZ_s_nXv6: O,
							wpMFMFfh6: k,
							MXlRuQc91: A,
							wPj7cgw7A: j,
							zWwbGwZv_: M,
							a_RFekTZv: ee,
							bFCS9vnuq: te,
							QPWACkysO: N,
							ThIdWbT5T: P,
							hhaCwl7EP: F,
							...R
						} = qt(e),
						{
							baseVariant: B,
							classNames: ne,
							clearLoadingGesture: re,
							gestureHandlers: V,
							gestureVariant: H,
							isLoading: ie,
							setGestureState: ae,
							setVariant: oe,
							variants: ce,
						} = D({
							cycleOrder: Lt,
							defaultVariant: `mVhPZw3IV`,
							ref: a,
							variant: y,
							variantClassNames: zt,
						}),
						U = Jt(e, ce),
						le = w(Rt, se, _e),
						ue = (e) => (B === `MpacA_qwI` ? e : !1);
					return i(m, {
						id: _ ?? o,
						children: i(Wt, {
							animate: ce,
							initial: !1,
							children: i(Ut, {
								value: Bt,
								children: i(f.section, {
									...R,
									...V,
									className: w(le, `framer-rpnakr`, g, ne),
									// "data-framer-name": `Desktop - 1200`,
									layoutDependency: U,
									layoutId: `mVhPZw3IV`,
									ref: a,
									style: { ...h },
									...Nt(
										{
											kSC4wNpBu: {
												// "data-framer-name": `Tablet`,
											},
											MpacA_qwI: {
												// "data-framer-name": `Phone`,
											},
										},
										B,
										H,
									),
									children: c(f.div, {
										className: `framer-1vky8zs`,
										
										layoutDependency: U,
										layoutId: `vvGCIIPhr`,
										style: { "--1po8p6w": Vt(te) },
										children: [
											O &&
												c(f.div, {
													className: `framer-1aog0n9`,
													
													layoutDependency: U,
													layoutId: `GeX1clO7y`,
													children: [
														c(f.div, {
															className: `framer-1um0kcp`,
															
															layoutDependency: U,
															layoutId: `BNctDMGLI`,
															children: [
																A &&
																	i(v, {
																		__fromCanvasComponent:
																			!0,
																		children:
																			i(
																				t,
																				{
																					children:
																						i(
																							f.h6,
																							{
																								className: `framer-styles-preset-nkm6se`,
																								"data-styles-preset": `BaUGQBb6A`,
																								style: {
																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																								},
																								children: `[07]`,
																							},
																						),
																				},
																			),
																		className: `framer-1jf63sq`,
																		fonts: [
																			`Inter`,
																		],
																		layoutDependency:
																			U,
																		layoutId: `TNOd2oGuU`,
																		style: {
																			"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			"--framer-paragraph-spacing": `0px`,
																		},
																		text: x,
																		transformTemplate:
																			Ht,
																		verticalAlignment: `top`,
																		withExternalLayout:
																			!0,
																		...Nt(
																			{
																				MpacA_qwI:
																					{
																						children:
																							i(
																								t,
																								{
																									children:
																										i(
																											f.h6,
																											{
																												className: `framer-styles-preset-f8hg8j`,
																												"data-styles-preset": `IGVKsj4vh`,
																												style: {
																													"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																												},
																												children: `[07]`,
																											},
																										),
																								},
																							),
																						transformTemplate:
																							void 0,
																					},
																			},
																			B,
																			H,
																		),
																	}),
																ue(F) &&
																	i(L, {
																		...Nt(
																			{
																				MpacA_qwI:
																					{
																						height: 48,
																					},
																			},
																			B,
																			H,
																		),
																		children:
																			i(
																				S,
																				{
																					className: `framer-1dyytny-container`,
																					layoutDependency:
																						U,
																					layoutId: `ZV9HJTlqL-container`,
																					nodeId: `ZV9HJTlqL`,
																					rendersWithMotion:
																						!0,
																					scopeId: `OWqtFDncb`,
																					children:
																						i(
																							Q,
																							{
																								a10ufliJT:
																									C,
																								FnHJ3auI6:
																									T,
																								GvlBMQefU:
																									!1,
																								height: `100%`,
																								id: `ZV9HJTlqL`,
																								Kq_CijUyE: `15px 50px 15px 50px`,
																								layoutId: `ZV9HJTlqL`,
																								mSNDO3YW7:
																									!0,
																								ok7eKoPLP:
																									!1,
																								style: {
																									height: `100%`,
																								},
																								uziNdYDRk:
																									!0,
																								variant: `UnuGN3X_1`,
																								width: `100%`,
																								xuXj4zldx: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																							},
																						),
																				},
																			),
																	}),
																i(v, {
																	__fromCanvasComponent:
																		!0,
																	children: i(
																		t,
																		{
																			children:
																				i(
																					f.h6,
																					{
																						className: `framer-styles-preset-nkm6se`,
																						"data-styles-preset": `BaUGQBb6A`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `Insights`,
																					},
																				),
																		},
																	),
																	className: `framer-rs9w8r`,
																	fonts: [
																		`Inter`,
																	],
																	layoutDependency:
																		U,
																	layoutId: `FRDpBGloi`,
																	style: {
																		"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																		"--framer-paragraph-spacing": `0px`,
																	},
																	text: b,
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																	...Nt(
																		{
																			MpacA_qwI:
																				{
																					children:
																						i(
																							t,
																							{
																								children:
																									i(
																										f.h6,
																										{
																											className: `framer-styles-preset-f8hg8j`,
																											"data-styles-preset": `IGVKsj4vh`,
																											style: {
																												"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																											},
																											children: `Insights`,
																										},
																									),
																							},
																						),
																				},
																		},
																		B,
																		H,
																	),
																}),
															],
														}),
														P &&
															i(L, {
																height: 48,
																children: i(S, {
																	className: `framer-9zgw36-container`,
																	layoutDependency:
																		U,
																	layoutId: `ZzgCrgvKU-container`,
																	nodeId: `ZzgCrgvKU`,
																	rendersWithMotion:
																		!0,
																	scopeId: `OWqtFDncb`,
																	children: i(
																		Q,
																		{
																			a10ufliJT:
																				C,
																			FnHJ3auI6:
																				T,
																			GvlBMQefU:
																				!1,
																			height: `100%`,
																			id: `ZzgCrgvKU`,
																			Kq_CijUyE:
																				Vt(
																					E,
																				),
																			layoutId: `ZzgCrgvKU`,
																			mSNDO3YW7:
																				!0,
																			ok7eKoPLP:
																				!1,
																			style: {
																				height: `100%`,
																			},
																			uziNdYDRk:
																				!0,
																			variant: `UnuGN3X_1`,
																			width: `100%`,
																			xuXj4zldx: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																		},
																	),
																}),
															}),
													],
												}),
											k &&
												i(f.div, {
													className: `framer-1i1n185`,
													
													layoutDependency: U,
													layoutId: `W6xhhEAhP`,
												}),
											i(f.div, {
												className: `framer-1s28jwd`,
												// "data-framer-name": `All`,
												layoutDependency: U,
												layoutId: `x9qk1avyx`,
												children: i(L, {
													height: 1052,
													width: `calc(min(${p?.width || `100vw`}, 1600px) - ${te * 2}px)`,
													children: i(S, {
														className: `framer-e0lr2o-container`,
														layoutDependency: U,
														layoutId: `lQoRGCESx-container`,
														nodeId: `lQoRGCESx`,
														rendersWithMotion: !0,
														scopeId: `OWqtFDncb`,
														children: i(vt, {
															bjjrUBwdp: j,
															DO8XpcJMl: N,
															height: `100%`,
															id: `lQoRGCESx`,
															layoutId: `lQoRGCESx`,
															Pnw_XprOy: M,
															style: {
																width: `100%`,
															},
															variant: ee,
															width: `100%`,
														}),
													}),
												}),
											}),
										],
									}),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-VLLcs.framer-1v0sah4, .framer-VLLcs .framer-1v0sah4 { display: block; }`,
					`.framer-VLLcs.framer-rpnakr { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
					`.framer-VLLcs .framer-1vky8zs { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: var(--1po8p6w); position: relative; width: 100%; }`,
					`.framer-VLLcs .framer-1aog0n9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-VLLcs .framer-1um0kcp { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 0px 150px; position: relative; width: 1px; }`,
					`.framer-VLLcs .framer-1jf63sq { flex: none; height: auto; left: -5px; position: absolute; top: 50%; white-space: pre; width: auto; z-index: 1; }`,
					`.framer-VLLcs .framer-1dyytny-container, .framer-VLLcs .framer-9zgw36-container { flex: none; height: 48px; position: relative; width: auto; z-index: 1; }`,
					`.framer-VLLcs .framer-rs9w8r { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					`.framer-VLLcs .framer-1i1n185 { flex: none; height: 60px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-VLLcs .framer-1s28jwd { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-VLLcs .framer-e0lr2o-container { flex: none; height: auto; position: relative; width: 100%; }`,
					`.framer-VLLcs.framer-v-1wm77o7.framer-rpnakr { width: 810px; }`,
					`.framer-VLLcs.framer-v-1wm77o7 .framer-1um0kcp { padding: 0px 0px 0px 120px; }`,
					`.framer-VLLcs.framer-v-1wm77o7 .framer-1jf63sq { left: -4px; }`,
					`.framer-VLLcs.framer-v-1wm77o7 .framer-1i1n185 { height: 50px; }`,
					`.framer-VLLcs.framer-v-1wm77o7 .framer-1s28jwd { gap: 15px; }`,
					`.framer-VLLcs.framer-v-1ugsl05.framer-rpnakr { width: 390px; }`,
					`.framer-VLLcs.framer-v-1ugsl05 .framer-1aog0n9 { align-content: flex-end; align-items: flex-end; flex-direction: column; gap: 20px; justify-content: flex-start; }`,
					`.framer-VLLcs.framer-v-1ugsl05 .framer-1um0kcp { align-content: flex-start; align-items: flex-start; flex: none; flex-direction: column; gap: 15px; padding: 0px; width: 100%; }`,
					`.framer-VLLcs.framer-v-1ugsl05 .framer-1jf63sq { left: unset; order: 0; position: relative; top: unset; }`,
					`.framer-VLLcs.framer-v-1ugsl05 .framer-1dyytny-container { order: 2; }`,
					`.framer-VLLcs.framer-v-1ugsl05 .framer-rs9w8r { order: 1; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-VLLcs.framer-v-1ugsl05 .framer-9zgw36-container { bottom: -12px; position: absolute; right: 0px; }`,
					`.framer-VLLcs.framer-v-1ugsl05 .framer-1i1n185 { height: 15px; }`,
					`.framer-VLLcs.framer-v-1ugsl05 .framer-1s28jwd { gap: 30px; }`,
					...ae,
					...he,
				],
				`framer-VLLcs`,
			)),
			(Yt = $),
			($.displayName = `Blog Posts - Section`),
			($.defaultProps = { height: 1255, width: 1200 }),
			g($, {
				variant: {
					options: [`mVhPZw3IV`, `kSC4wNpBu`, `MpacA_qwI`],
					optionTitles: [`Desktop - 1200`, `Tablet`, `Phone`],
					title: `Variant`,
					type: j.Enum,
				},
				td4zWVChF: {
					defaultValue: `Insights`,
					displayTextArea: !1,
					title: `Heading of Section`,
					type: j.String,
				},
				SE9pFAstj: {
					defaultValue: `[07]`,
					displayTextArea: !1,
					title: `Section Number`,
					type: j.String,
				},
				lQpFEpV2s: {
					defaultValue: `[ALL POSTS]`,
					displayTextArea: !1,
					title: `Link to Blog`,
					type: j.String,
				},
				bWjM1v575: { title: `Link to Blog URL`, type: j.Link },
				XtswemN6o: {
					defaultValue: `0px 50px 0px 55px`,
					title: `Spacing of Link`,
					type: j.Padding,
				},
				gZ_s_nXv6: {
					defaultValue: !0,
					title: `Show Heading`,
					type: j.Boolean,
				},
				wpMFMFfh6: {
					defaultValue: !0,
					title: `Top Spacer`,
					type: j.Boolean,
				},
				MXlRuQc91: {
					defaultValue: !0,
					title: `Show Section Number`,
					type: j.Boolean,
				},
				wPj7cgw7A: {
					defaultValue: !1,
					title: `Show Bottom Spacer`,
					type: j.Boolean,
				},
				zWwbGwZv_: {
					defaultValue: !1,
					title: `Show Load More`,
					type: j.Boolean,
				},
				a_RFekTZv: It?.variant && {
					...It.variant,
					defaultValue: `Hy5imaqGv`,
					description: void 0,
					hidden: void 0,
					title: `Type of List`,
				},
				bFCS9vnuq: {
					defaultValue: `90px 40px 90px 40px`,
					title: `Padding`,
					type: j.Padding,
				},
				QPWACkysO: {
					defaultValue: ``,
					title: `Filter`,
					type: j.String,
				},
				ThIdWbT5T: {
					defaultValue: !0,
					title: `Show Link - All Posts`,
					type: j.Boolean,
				},
				hhaCwl7EP: {
					defaultValue: !1,
					title: `Show Alternate Link - All Posts`,
					type: j.Boolean,
				},
			}),
			F(
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
					...Pt,
					...Ft,
					...O(oe),
					...O(ge),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
export { Mt as i, Xt as n, Q as r, Yt as t };
//# sourceMappingURL=OWqtFDncb.DnERqnrM.mjs.map
