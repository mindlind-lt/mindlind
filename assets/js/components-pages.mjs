import { t as e } from "./rolldown-runtime.mjs";
import {
	A as t,
	C as n,
	E as r,
	F as i,
	I as a,
	M as o,
	N as s,
	P as c,
	T as l,
	V as u,
	_ as d,
	b as f,
	c as p,
	f as m,
	g as h,
	j as g,
	k as _,
	l as v,
	o as y,
	s as b,
	u as x,
	y as S,
	z as C,
} from "./react.mjs";
import {
	B as w,
	F as T,
	G as E,
	N as D,
	R as O,
	S as k,
	a as A,
	h as j,
	r as M,
	t as N,
} from "./motion.mjs";
import {
	A as P,
	At as F,
	C as I,
	D as L,
	E as R,
	Et as z,
	G as ee,
	H as B,
	I as V,
	O as H,
	Ot as te,
	P as U,
	S as ne,
	St as re,
	T as ie,
	Tt as W,
	U as G,
	W as K,
	X as q,
	a as J,
	b as ae,
	ct as oe,
	f as se,
	ft as Y,
	g as ce,
	ht as le,
	i as ue,
	k as de,
	lt as X,
	n as fe,
	p as pe,
	pt as me,
	r as Z,
	t as he,
	u as ge,
	vt as _e,
	w as ve,
	x as ye,
	xt as be,
	yt as xe,
} from "./framer.mjs";
import { i as Se, n as Ce, r as we, t as Te } from "./hmRgK3K6v.Bb8FQ5b1.mjs";
import {
	a as Ee,
	c as De,
	i as Oe,
	n as ke,
	o as Ae,
	r as je,
	s as Me,
	t as Ne,
} from "./component-book-call.mjs";
import { i as Pe, n as Fe, r as Ie, t as Le } from "./JFkcxmmKA.7qpzn-1x.mjs";
import { i as Re, n as ze, r as Be, t as Ve } from "./j9HsFBXUW.C6zqxVR-.mjs";
import { a as He, i as Ue, o as We, r as Ge } from "./shared-lib.mjs";
import { n as Ke, t as qe } from "./psqHvE_iQ.DFa3l-m-.mjs";
import { i as Je, n as Ye, r as Xe, t as Ze } from "./hmRgK3K6v.uUKiXrMh.mjs";
import { a as Qe, c as $e, o as et, s as tt } from "./dBxplyp6M.YfMP-uQE.mjs";
import { i as nt, n as rt, r as it, t as at } from "./q7NcKTKUL.DsgFejH8.mjs";
import { i as ot, n as st, r as ct, t as lt } from "./PxI14If8r.yE6_0MNS.mjs";
import { a as ut, i as dt } from "./cms-posts.mjs";
import { i as ft, n as pt, r as mt, t as ht } from "./BaUGQBb6A.CCunrJSH.mjs";
import {
	a as gt,
	c as _t,
	i as vt,
	n as yt,
	o as bt,
	r as xt,
	s as St,
	t as Ct,
} from "./pPuowuywh.BpuFfTb3.mjs";
import { i as wt, n as Tt, r as Et, t as Dt } from "./IGVKsj4vh.GXVwIVTj.mjs";
import { i as Ot, n as kt, r as At, t as jt } from "./LuOKrK4j8.BwEhIs1I.mjs";
import {
	a as Mt,
	c as Nt,
	i as Pt,
	n as Ft,
	o as It,
	r as Lt,
	s as Rt,
	t as zt,
} from "./eUQb69Kqx.CwwLHrtY.mjs";
import { i as Bt, n as Vt, r as Ht, t as Ut } from "./zczqo4Z8y.BT91f-6f.mjs";
import { n as Wt, t as Gt } from "./Vimeo.mjs";
import { i as Kt, n as qt, r as Jt, t as Yt } from "./NqfjhJTm6.CzgN9mfI.mjs";
import {
	a as Xt,
	c as Zt,
	d as Qt,
	f as $t,
	i as en,
	l as tn,
	n as nn,
	o as rn,
	r as an,
	s as on,
	t as sn,
	u as cn,
} from "./component-scroll-player.mjs";
import { n as ln, t as un } from "./Text_Hover_Random.mjs";
import {
	a as dn,
	c as fn,
	i as pn,
	l as mn,
	n as hn,
	o as gn,
	r as _n,
	s as vn,
	t as yn,
	u as bn,
} from "./component-contact-form.mjs";
import { i as xn, n as Sn, r as Cn, t as wn } from "./OWqtFDncb.DnERqnrM.mjs";
import { n as Tn, t as En } from "./TwistGallery.mjs";
import { i as Dn, n as On, r as kn, t as An } from "./NqfjhJTm6.CsmVbARV.mjs";
import { i as jn, n as Mn, r as Nn, t as Pn } from "./zczqo4Z8y.BKvtHDpT.mjs";
import { n as Fn, t as In } from "./Rotor_Gallery.mjs";
import { i as Ln, n as Rn, r as zn, t as Bn } from "./y9BUDaD1i.51ShsoHU.mjs";
import { i as Vn, n as Hn, r as Un, t as Wn } from "./LuOKrK4j8.gQvYT-9v.mjs";
import { n as Gn, r as Kn } from "./page-home.mjs";
function qn(e) {
	if (!e) return ``;
	if (typeof e == `string`) return e;
	if (typeof e == `object`) {
		let t = e.src ?? e.url ?? e.default;
		if (typeof t == `string`) return t;
		if (t && typeof t == `object` && typeof t.src == `string`) return t.src;
	}
	return ``;
}
function Jn(e, t = 0, n = 0) {
	return e
		? `url("${e}") ${Math.max(0, Math.round(t))} ${Math.max(0, Math.round(n))}, auto`
		: `auto`;
}
function Yn(e) {
	let {
			imageA: t = Xn,
			imageB: n = Zn,
			direction: r = `ltr`,
			softness: i = 22,
			falloff: s = 1.4,
			duration: c = 600,
			easing: l = `cubic-bezier(.22,.61,.36,1)`,
			borderRadius: u = 16,
			objectFit: d = `cover`,
			trigger: f = `hover`,
			reverseOnLeave: m = !0,
			followMouse: h = !1,
			cursorSvg: g,
			cursorHotspotX: _ = 0,
			cursorHotspotY: y = 0,
			width: b = 800,
			height: x = 600,
		} = e,
		S = o(() => qn(t) || Xn, [t]),
		C = o(() => qn(n) || Zn, [n]),
		w = o(() => qn(g), [g]),
		[T, E] = a(!1),
		[D, O] = a(null),
		[k, A] = a(null),
		[j, M] = a(!1),
		N = o(() => {
			let e = r === `ltr` || r === `rtl`;
			return {
				isH: e,
				angle:
					r === `ltr`
						? 90
						: r === `rtl`
							? 270
							: r === `ttb`
								? 180
								: 0,
				size: e ? `300% 100%` : `100% 300%`,
				fromX: r === `ltr` ? 100 : 0,
				toX: r === `ltr` ? 0 : r === `rtl` ? 100 : 0,
				fromY: r === `ttb` ? 100 : 0,
				toY: r === `ttb` ? 0 : r === `btt` ? 100 : 0,
			};
		}, [r]),
		P = N.isH ? (T ? N.fromX : N.toX) : 0,
		F = N.isH ? 0 : T ? N.fromY : N.toY,
		I = h && D !== null ? D : P,
		L = h && k !== null ? k : F,
		R = o(() => {
			let e = Math.max(0.001, i),
				t = 50 - e / 2,
				n = 50 + e / 2,
				r = [];
			(r.push(`rgba(0,0,0,0) 0%`), r.push(`rgba(0,0,0,0) ${t}%`));
			for (let e = 0; e <= 10; e++) {
				let i = e / 10,
					a = i ** +Math.max(0.05, s),
					o = t + (n - t) * i;
				r.push(`rgba(0,0,0,${a.toFixed(3)}) ${o.toFixed(3)}%`);
			}
			return (
				r.push(`rgba(0,0,0,1) ${n}%`),
				r.push(`rgba(0,0,0,1) 100%`),
				`linear-gradient(${N.angle}deg, ${r.join(`, `)})`
			);
		}, [N.angle, i, s]),
		z = {
			position: `relative`,
			width: `100%`,
			height: `100%`,
			overflow: `hidden`,
			borderRadius: u,
			background: `#111`,
			cursor: j ? Jn(w, _, y) : `auto`,
		},
		ee = {
			position: `absolute`,
			inset: 0,
			width: `100%`,
			height: `100%`,
			display: `block`,
			objectFit: d,
			objectPosition: `50% 50%`,
			borderRadius: u,
			transform: `translateZ(0)`,
			contain: `layout paint size`,
		},
		B = {
			...ee,
			WebkitMaskImage: R,
			maskImage: R,
			WebkitMaskSize: N.size,
			maskSize: N.size,
			WebkitMaskPosition: `${I}% ${L}%`,
			maskPosition: `${I}% ${L}%`,
			WebkitMaskRepeat: `no-repeat`,
			maskRepeat: `no-repeat`,
			transition: h
				? `none`
				: `-webkit-mask-position ${c}ms ${l}, mask-position ${c}ms ${l}`,
			willChange: h ? `auto` : `mask-position`,
		};
	return v(`div`, {
		style: z,
		onMouseEnter: () => {
			(M(!0), f === `hover` && E(!0));
		},
		onMouseLeave: () => {
			(M(!1), !h && f === `hover` && m && E(!1));
		},
		onMouseMove: (e) => {
			if (!h) return;
			let t = e.currentTarget.getBoundingClientRect(),
				n = Math.min(1, Math.max(0, (e.clientX - t.left) / t.width)),
				i = Math.min(1, Math.max(0, (e.clientY - t.top) / t.height));
			if (N.isH) {
				let e = r === `rtl` ? 1 - n : n;
				(O(N.fromX + (N.toX - N.fromX) * e), A(0));
			} else {
				let e = r === `btt` ? 1 - i : i,
					t = N.fromY + (N.toY - N.fromY) * e;
				(O(0), A(t));
			}
		},
		onClick: () => {
			f === `tap` && E((e) => !e);
		},
		children: [
			S &&
				p(`img`, {
					src: S,
					alt: `image A`,
					style: ee,
					referrerPolicy: `no-referrer`,
					decoding: `async`,
					draggable: !1,
				}),
			C &&
				p(`img`, {
					src: C,
					alt: `image B`,
					style: B,
					referrerPolicy: `no-referrer`,
					decoding: `async`,
					draggable: !1,
				}),
		],
	});
}
var Xn,
	Zn,
	Qn = e(() => {
		(y(),
			l(),
			q(),
			(Xn = `https://images.unsplash.com/photo-1526045612212-70caf35c14df?q=80&w=1600&auto=format&fit=crop`),
			(Zn = `https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop`),
			(Yn.defaultProps = { width: 800, height: 600 }),
			P(Yn, {
				imageA: { type: J.Image, title: `Image 1` },
				imageB: { type: J.Image, title: `Image 2` },
				direction: {
					type: J.Enum,
					title: `Direction`,
					options: [`ltr`, `rtl`, `ttb`, `btt`],
					optionTitles: [
						`Right→Left`,
						`Left→Right`,
						`Top→Bottom`,
						`Bottom→Top`,
					],
					defaultValue: `rtl`,
				},
				softness: {
					type: J.Number,
					title: `Softness %`,
					defaultValue: 22,
					min: 0,
					max: 60,
					step: 0.5,
					displayStepper: !0,
				},
				falloff: {
					type: J.Number,
					title: `Falloff`,
					defaultValue: 1.4,
					min: 0.3,
					max: 6,
					step: 0.05,
					displayStepper: !0,
				},
				duration: {
					type: J.Number,
					title: `Duration ms`,
					defaultValue: 600,
					min: 80,
					max: 4e3,
					step: 20,
					displayStepper: !0,
				},
				easing: {
					type: J.Enum,
					title: `Easing`,
					options: [
						`linear`,
						`ease`,
						`ease-in-out`,
						`cubic-bezier(.22,.61,.36,1)`,
						`cubic-bezier(.4,0,.2,1)`,
					],
					optionTitles: [
						`linear`,
						`ease`,
						`ease-in-out`,
						`cubic-bezier (.22,.61,.36,1)`,
						`Material`,
					],
					defaultValue: `cubic-bezier(.22,.61,.36,1)`,
				},
				objectFit: {
					type: J.Enum,
					title: `Object Fit`,
					options: [`cover`, `contain`],
					defaultValue: `cover`,
				},
				borderRadius: {
					type: J.Number,
					title: `Radius`,
					defaultValue: 16,
					min: 0,
					max: 80,
					step: 1,
					displayStepper: !0,
				},
				trigger: {
					type: J.SegmentedEnum,
					title: `Trigger`,
					options: [`hover`, `tap`],
					optionTitles: [`Hover`, `Tap`],
					defaultValue: `hover`,
				},
				reverseOnLeave: {
					type: J.Boolean,
					title: `Reverse on Leave`,
					defaultValue: !0,
					hidden: (e) => e.trigger !== `hover`,
				},
				followMouse: {
					type: J.Boolean,
					title: `Follow Mouse`,
					defaultValue: !1,
				},
				cursorSvg: {
					type: J.File,
					title: `Cursor SVG`,
					allowedFileTypes: [`svg`],
				},
				cursorHotspotX: {
					type: J.Number,
					title: `Cursor X`,
					defaultValue: 0,
					min: 0,
					max: 128,
					step: 1,
					displayStepper: !0,
					hidden: (e) => !e.cursorSvg,
				},
				cursorHotspotY: {
					type: J.Number,
					title: `Cursor Y`,
					defaultValue: 0,
					min: 0,
					max: 128,
					step: 1,
					displayStepper: !0,
					hidden: (e) => !e.cursorSvg,
				},
			}));
	});
function $n(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var er,
	tr,
	nr,
	rr,
	ir,
	ar,
	or,
	sr,
	cr,
	lr,
	ur,
	dr,
	fr,
	pr,
	mr,
	hr,
	gr,
	_r,
	vr,
	yr = e(() => {
		(y(),
			q(),
			N(),
			l(),
			Qn(),
			ot(),
			dt(),
			ft(),
			_t(),
			wt(),
			Re(),
			Ot(),
			Nt(),
			vt(),
			nt(),
			Bt(),
			qe(),
			(er = B(Yn)),
			(tr = B(Ke)),
			(nr = ee(Yn)),
			(rr = [`sERzTRNgP`, `eO6Qopa_m`, `hgNV3iX_3`]),
			(ir = `framer-qhcmX`),
			(ar = {
				eO6Qopa_m: `framer-v-yb9gfw`,
				hgNV3iX_3: `framer-v-26aqdx`,
				sERzTRNgP: `framer-v-1vcyd0t`,
			}),
			(or = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(sr = (e, t) => `translateY(-50%) ${t}`),
			(cr = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e.src
					: typeof e == `string`
						? e
						: void 0),
			(lr = (e, t) => `translate(-50%, -50%) ${t}`),
			(ur = ({ query: e, pageSize: t, children: n }) => n(be(e))),
			(dr = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(fr = k.create(i)),
			(pr = {
				"Bottom→Top": `btt`,
				"Left→Right": `rtl`,
				"Right→Left": `ltr`,
				"Top→Bottom": `ttb`,
			}),
			(mr = {
				"Desktop - 1200": `sERzTRNgP`,
				Phone: `hgNV3iX_3`,
				Tablet: `eO6Qopa_m`,
			}),
			(hr = ({
				cursor: e,
				directionHover: t,
				headingOfSection: n,
				height: r,
				id: i,
				imageBig: a,
				imageHover: o,
				radiusOfImage: s,
				sectionNumber: c,
				selectProject: l,
				whatTransformed: u,
				width: d,
				...f
			}) => ({
				...f,
				DGmW4oqjG: c ?? f.DGmW4oqjG ?? `[06]`,
				f9CT4tTM8:
					u ??
					f.f9CT4tTM8 ??
					`Brand transformation end to end: positioning → identity → web`,
				KMJpy91_d: a ??
					f.KMJpy91_d ?? {
						pixelHeight: 1670,
						pixelWidth: 2016,
						src: `/assets/images/RXynWiEpbvkpuUiRSkSxE6yz4.jpg`,
					},
				koa73A7YO: l ?? f.koa73A7YO ?? `GwbipauMe`,
				QCmtIhV_V: n ?? f.QCmtIhV_V ?? `Before & After`,
				rRGxmCCi3: e ?? f.rRGxmCCi3,
				tku_ZUakr: o ??
					f.tku_ZUakr ?? {
						pixelHeight: 1670,
						pixelWidth: 2016,
						src: `/assets/images/GhqKSdFgiwq6ix3LGBGpGbgWwaw.jpg`,
					},
				variant: mr[f.variant] ?? f.variant ?? `sERzTRNgP`,
				WiMqvlQNF: pr[t] ?? t ?? f.WiMqvlQNF ?? `rtl`,
				WS1SWhlH_: s ?? f.WS1SWhlH_ ?? 8,
			})),
			(gr = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(_r = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e(),
						c = X(),
						{
							style: l,
							className: u,
							layoutId: d,
							variant: f,
							QCmtIhV_V: m,
							f9CT4tTM8: h,
							DGmW4oqjG: g,
							koa73A7YO: y,
							KMJpy91_d: x,
							tku_ZUakr: C,
							WiMqvlQNF: w,
							WS1SWhlH_: T,
							rRGxmCCi3: E,
							p8fxY0bCXV2zPo9_Rs: D,
							frSm7SqOHV2zPo9_Rs: O,
							aCxyLQ1t8V2zPo9_Rs: A,
							Xgdhwh5MeWHRTa2GqN: j,
							TBDlVXOGAWHRTa2GqN: N,
							idWHRTa2GqN: P,
							iprSlvcgSV2zPo9_Rs: F,
							VSmb3sBiuV2zPo9_Rs: I,
							pXUZglhxhV2zPo9_Rs: L,
							iPR_E15paV2zPo9_Rs: z,
							idV2zPo9_Rs: ee,
							...B
						} = hr(e),
						{
							baseVariant: V,
							classNames: te,
							clearLoadingGesture: ne,
							gestureHandlers: G,
							gestureVariant: K,
							isLoading: q,
							setGestureState: J,
							setVariant: oe,
							variants: se,
						} = W({
							cycleOrder: rr,
							defaultVariant: `sERzTRNgP`,
							ref: r,
							variant: f,
							variantClassNames: ar,
						}),
						Y = gr(e, se),
						le = U(ir, Mt, Ut, ht, Dt, jt, gt, at, Ve, Ct);
					return (
						re(),
						p(M, {
							id: d ?? a,
							children: p(fr, {
								animate: se,
								initial: !1,
								children: p(dr, {
									value: or,
									children: p(k.section, {
										...B,
										...G,
										className: U(
											le,
											`framer-1vcyd0t`,
											u,
											te,
										),
										"data-framer-name": `Desktop - 1200`,
										layoutDependency: Y,
										layoutId: `sERzTRNgP`,
										ref: r,
										style: { ...l },
										...$n(
											{
												eO6Qopa_m: {
													"data-framer-name": `Tablet`,
												},
												hgNV3iX_3: {
													"data-framer-name": `Phone`,
												},
											},
											V,
											K,
										),
										children: v(k.div, {
											className: `framer-10uzteq`,
											"data-framer-name": `Container`,
											layoutDependency: Y,
											layoutId: `L6mCFAdJb`,
											children: [
												v(k.div, {
													className: `framer-v22ng3`,
													"data-framer-name": `Heading`,
													layoutDependency: Y,
													layoutId: `JKjX3LE0e`,
													children: [
														p(R, {
															__fromCanvasComponent:
																!0,
															children: p(i, {
																children: p(
																	k.h2,
																	{
																		className: `framer-styles-preset-g6dfhq`,
																		"data-styles-preset": `MgmvEPIz7`,
																		style: {
																			"--framer-text-alignment": `left`,
																			"--framer-text-color": `var(--extracted-1of0zx5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																		},
																		children: `Before & After`,
																	},
																),
															}),
															className: `framer-4n166u`,
															fonts: [`Inter`],
															layoutDependency: Y,
															layoutId: `AbyjAHsVb`,
															style: {
																"--extracted-1of0zx5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																"--framer-paragraph-spacing": `0px`,
															},
															text: m,
															variants: {
																eO6Qopa_m: {
																	"--extracted-a0htzi": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																},
																hgNV3iX_3: {
																	"--extracted-a0htzi": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																},
															},
															verticalAlignment: `top`,
															withExternalLayout:
																!0,
															...$n(
																{
																	eO6Qopa_m: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h3,
																							{
																								className: `framer-styles-preset-1yuak3c`,
																								"data-styles-preset": `zczqo4Z8y`,
																								style: {
																									"--framer-text-alignment": `left`,
																									"--framer-text-color": `var(--extracted-a0htzi, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																								},
																								children: `Before & After`,
																							},
																						),
																				},
																			),
																	},
																	hgNV3iX_3: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h3,
																							{
																								className: `framer-styles-preset-1yuak3c`,
																								"data-styles-preset": `zczqo4Z8y`,
																								style: {
																									"--framer-text-alignment": `left`,
																									"--framer-text-color": `var(--extracted-a0htzi, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																								},
																								children: `Before & After`,
																							},
																						),
																				},
																			),
																	},
																},
																V,
																K,
															),
														}),
														p(k.div, {
															className: `framer-rbhxix`,
															layoutDependency: Y,
															layoutId: `BLQ837g5c`,
															children: p(R, {
																__fromCanvasComponent:
																	!0,
																children: p(i, {
																	children: p(
																		k.h6,
																		{
																			className: `framer-styles-preset-nkm6se`,
																			"data-styles-preset": `BaUGQBb6A`,
																			style: {
																				"--framer-text-alignment": `right`,
																				"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																			},
																			children: `[06]`,
																		},
																	),
																}),
																className: `framer-16626xl`,
																fonts: [
																	`Inter`,
																],
																layoutDependency:
																	Y,
																layoutId: `RsE7wPhiR`,
																style: {
																	"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																	"--framer-paragraph-spacing": `0px`,
																},
																text: g,
																transformTemplate:
																	sr,
																verticalAlignment: `top`,
																withExternalLayout:
																	!0,
																...$n(
																	{
																		hgNV3iX_3:
																			{
																				children:
																					p(
																						i,
																						{
																							children:
																								p(
																									k.h6,
																									{
																										className: `framer-styles-preset-f8hg8j`,
																										"data-styles-preset": `IGVKsj4vh`,
																										style: {
																											"--framer-text-alignment": `right`,
																											"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																										},
																										children: `[06]`,
																									},
																								),
																						},
																					),
																			},
																	},
																	V,
																	K,
																),
															}),
														}),
													],
												}),
												p(k.div, {
													className: `framer-v3fv0a`,
													layoutDependency: Y,
													layoutId: `V2zPo9_Rs`,
													children: p(he, {
														children: p(ur, {
															query: {
																from: {
																	alias: `V2zPo9_Rs`,
																	data: ut,
																	type: `Collection`,
																},
																limit: {
																	type: `LiteralValue`,
																	value: 1,
																},
																select: [
																	{
																		collection: `V2zPo9_Rs`,
																		name: `p8fxY0bCX`,
																		type: `Identifier`,
																	},
																	{
																		collection: `V2zPo9_Rs`,
																		name: `frSm7SqOH`,
																		type: `Identifier`,
																	},
																	{
																		collection: `V2zPo9_Rs`,
																		name: `aCxyLQ1t8`,
																		type: `Identifier`,
																	},
																	{
																		collection: `V2zPo9_Rs`,
																		name: `iprSlvcgS`,
																		type: `Identifier`,
																	},
																	{
																		collection: `V2zPo9_Rs`,
																		name: `VSmb3sBiu`,
																		type: `Identifier`,
																	},
																	{
																		collection: `V2zPo9_Rs`,
																		name: `pXUZglhxh`,
																		type: `Identifier`,
																	},
																	{
																		collection: `V2zPo9_Rs`,
																		name: `iPR_E15pa`,
																		type: `Identifier`,
																	},
																	{
																		collection: `V2zPo9_Rs`,
																		name: `id`,
																		type: `Identifier`,
																	},
																	{
																		alias: `WHRTa2GqN`,
																		arguments:
																			[
																				{
																					from: {
																						alias: `WHRTa2GqN`,
																						data: ct,
																						type: `Collection`,
																					},
																					orderBy:
																						[
																							{
																								arguments:
																									[
																										{
																											collection: `V2zPo9_Rs`,
																											name: `Fc9gMlpS8`,
																											type: `Identifier`,
																										},
																										{
																											collection: `WHRTa2GqN`,
																											name: `id`,
																											type: `Identifier`,
																										},
																									],
																								direction: `asc`,
																								functionName: `INDEX_OF`,
																								type: `FunctionCall`,
																							},
																						],
																					select: [
																						{
																							collection: `WHRTa2GqN`,
																							name: `Xgdhwh5Me`,
																							type: `Identifier`,
																						},
																						{
																							collection: `WHRTa2GqN`,
																							name: `TBDlVXOGA`,
																							type: `Identifier`,
																						},
																						{
																							collection: `WHRTa2GqN`,
																							name: `id`,
																							type: `Identifier`,
																						},
																					],
																					type: `Select`,
																					where: {
																						left: {
																							collection: `WHRTa2GqN`,
																							name: `id`,
																							type: `Identifier`,
																						},
																						operator: `in`,
																						right: {
																							collection: `V2zPo9_Rs`,
																							name: `Fc9gMlpS8`,
																							type: `Identifier`,
																						},
																						type: `BinaryOperation`,
																					},
																				},
																			],
																		functionName: `ARRAY`,
																		type: `FunctionCall`,
																	},
																],
																where: {
																	left: {
																		collection: `V2zPo9_Rs`,
																		name: `id`,
																		type: `Identifier`,
																	},
																	operator: `==`,
																	right: {
																		type: `LiteralValue`,
																		value: y,
																	},
																	type: `BinaryOperation`,
																},
															},
															children: (
																e,
																t,
																n,
															) =>
																p(b, {
																	children:
																		e?.map(
																			(
																				{
																					aCxyLQ1t8:
																						e,
																					frSm7SqOH:
																						t,
																					id: n,
																					iPR_E15pa:
																						r,
																					iprSlvcgS:
																						a,
																					p8fxY0bCX:
																						o,
																					pXUZglhxh:
																						s,
																					VSmb3sBiu:
																						l,
																					WHRTa2GqN:
																						u,
																				},
																				d,
																			) => (
																				(t ??= ``),
																				(e ??= ``),
																				(a ??= ``),
																				(l ??= ``),
																				(s ??= ``),
																				(r ??= ``),
																				p(
																					M,
																					{
																						id: `V2zPo9_Rs-${n}`,
																						children:
																							p(
																								ae.Provider,
																								{
																									value: {
																										frSm7SqOH:
																											t,
																									},
																									children:
																										p(
																											k.div,
																											{
																												className: `framer-16vxxm9`,
																												layoutDependency:
																													Y,
																												layoutId: `HFh6R2l7N`,
																												children:
																													v(
																														k.div,
																														{
																															className: `framer-29ap6m`,
																															layoutDependency:
																																Y,
																															layoutId: `KV1FXtSZV`,
																															children:
																																[
																																	v(
																																		k.div,
																																		{
																																			className: `framer-j39wdh`,
																																			"data-framer-cursor":
																																				E,
																																			"data-framer-name": `Image`,
																																			layoutDependency:
																																				Y,
																																			layoutId: `mW2yiVoh4`,
																																			children:
																																				[
																																					p(
																																						k.div,
																																						{
																																							className: `framer-jf311f`,
																																							layoutDependency:
																																								Y,
																																							layoutId: `IYt2eYFx1`,
																																							style: {
																																								backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																																								borderBottomLeftRadius: 10,
																																								borderBottomRightRadius: 10,
																																								borderTopLeftRadius: 10,
																																								borderTopRightRadius: 10,
																																							},
																																							children:
																																								p(
																																									Z,
																																									{
																																										children:
																																											p(
																																												H,
																																												{
																																													className: `framer-f06g39-container`,
																																													"data-framer-cursor":
																																														E,
																																													isAuthoredByUser:
																																														!0,
																																													layoutDependency:
																																														Y,
																																													layoutId: `dVxcuMbWe-container`,
																																													nodeId: `dVxcuMbWe`,
																																													rendersWithMotion:
																																														!0,
																																													scopeId: `BWLdBuCjx`,
																																													children:
																																														p(
																																															Yn,
																																															{
																																																borderRadius:
																																																	T,
																																																cursorHotspotX: 0,
																																																cursorHotspotY: 0,
																																																direction:
																																																	w,
																																																duration: 2200,
																																																easing: `ease`,
																																																falloff: 3,
																																																followMouse:
																																																	!0,
																																																height: `100%`,
																																																id: `dVxcuMbWe`,
																																																imageA: cr(
																																																	x,
																																																),
																																																imageB: cr(
																																																	C,
																																																),
																																																layoutId: `dVxcuMbWe`,
																																																objectFit: `cover`,
																																																reverseOnLeave:
																																																	!0,
																																																softness: 32,
																																																style: {
																																																	height: `100%`,
																																																	width: `100%`,
																																																},
																																																trigger: `hover`,
																																																width: `100%`,
																																																...$n(
																																																	{
																																																		eO6Qopa_m:
																																																			{
																																																				trigger: `tap`,
																																																			},
																																																		hgNV3iX_3:
																																																			{
																																																				trigger: `tap`,
																																																			},
																																																	},
																																																	V,
																																																	K,
																																																),
																																															},
																																														),
																																												},
																																											),
																																									},
																																								),
																																						},
																																					),
																																					p(
																																						pe,
																																						{
																																							animated:
																																								!0,
																																							className: `framer-encc9g`,
																																							Component:
																																								o,
																																							"data-framer-name": `Logo`,
																																							layoutDependency:
																																								Y,
																																							layoutId: `XdhxckwO4`,
																																							transformTemplate:
																																								lr,
																																						},
																																					),
																																				],
																																		},
																																	),
																																	p(
																																		k.div,
																																		{
																																			className: `framer-1i5hyqj`,
																																			"data-framer-name": `About Project`,
																																			layoutDependency:
																																				Y,
																																			layoutId: `zeEe5RPsa`,
																																			children:
																																				v(
																																					k.div,
																																					{
																																						className: `framer-1o4lrgr`,
																																						"data-framer-name": `Stack`,
																																						layoutDependency:
																																							Y,
																																						layoutId: `QzwdFNJAR`,
																																						children:
																																							[
																																								p(
																																									R,
																																									{
																																										__fromCanvasComponent:
																																											!0,
																																										children:
																																											p(
																																												i,
																																												{
																																													children:
																																														p(
																																															k.h4,
																																															{
																																																className: `framer-styles-preset-1ri87jd`,
																																																"data-styles-preset": `LuOKrK4j8`,
																																																style: {
																																																	"--framer-text-color": `var(--extracted-1eung3n, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																																},
																																																children: `Brand transformation end to end: positioning → identity → web`,
																																															},
																																														),
																																												},
																																											),
																																										className: `framer-qotke6`,
																																										"data-framer-name": `Brand transformation end to end: positioning → identity → web.`,
																																										fonts: [
																																											`Inter`,
																																										],
																																										layoutDependency:
																																											Y,
																																										layoutId: `W4En26Aof`,
																																										style: {
																																											"--extracted-1eung3n": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																											"--framer-paragraph-spacing": `0px`,
																																										},
																																										text: h,
																																										variants:
																																											{
																																												hgNV3iX_3:
																																													{
																																														"--extracted-1lwpl3i": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																													},
																																											},
																																										verticalAlignment: `top`,
																																										withExternalLayout:
																																											!0,
																																										...$n(
																																											{
																																												hgNV3iX_3:
																																													{
																																														children:
																																															p(
																																																i,
																																																{
																																																	children:
																																																		p(
																																																			k.h5,
																																																			{
																																																				className: `framer-styles-preset-h6j8it`,
																																																				"data-styles-preset": `dBxplyp6M`,
																																																				style: {
																																																					"--framer-text-color": `var(--extracted-1lwpl3i, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																																				},
																																																				children: `Brand transformation end to end: positioning → identity → web`,
																																																			},
																																																		),
																																																},
																																															),
																																													},
																																											},
																																											V,
																																											K,
																																										),
																																									},
																																								),
																																								v(
																																									k.div,
																																									{
																																										className: `framer-1mawem3`,
																																										layoutDependency:
																																											Y,
																																										layoutId: `CYCpllJHK`,
																																										children:
																																											[
																																												p(
																																													R,
																																													{
																																														__fromCanvasComponent:
																																															!0,
																																														children:
																																															p(
																																																i,
																																																{
																																																	children:
																																																		p(
																																																			k.h6,
																																																			{
																																																				className: `framer-styles-preset-nkm6se`,
																																																				"data-styles-preset": `BaUGQBb6A`,
																																																				style: {
																																																					"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																																				},
																																																				children:
																																																					p(
																																																						ce,
																																																						{
																																																							href: {
																																																								pathVariables:
																																																									{
																																																										frSm7SqOH:
																																																											t,
																																																									},
																																																								webPageId: `luGPP9ZOT`,
																																																							},
																																																							motionChild:
																																																								!0,
																																																							nodeId: `zDNC_200V`,
																																																							openInNewTab:
																																																								!1,
																																																							relValues:
																																																								[],
																																																							scopeId: `BWLdBuCjx`,
																																																							smoothScroll:
																																																								!1,
																																																							children:
																																																								p(
																																																									k.a,
																																																									{
																																																										className: `framer-styles-preset-mgrqd0`,
																																																										"data-styles-preset": `q7NcKTKUL`,
																																																										children: `Lementa`,
																																																									},
																																																								),
																																																						},
																																																					),
																																																			},
																																																		),
																																																},
																																															),
																																														className: `framer-t53dew`,
																																														"data-framer-name": `LEmenta`,
																																														fonts: [
																																															`Inter`,
																																														],
																																														layoutDependency:
																																															Y,
																																														layoutId: `zDNC_200V`,
																																														style: {
																																															"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																															"--framer-paragraph-spacing": `0px`,
																																														},
																																														text: e,
																																														verticalAlignment: `top`,
																																														withExternalLayout:
																																															!0,
																																													},
																																												),
																																												p(
																																													k.div,
																																													{
																																														className: `framer-1i876ad`,
																																														layoutDependency:
																																															Y,
																																														layoutId: `WHRTa2GqN`,
																																														children:
																																															u?.map(
																																																(
																																																	{
																																																		id: e,
																																																		TBDlVXOGA:
																																																			t,
																																																		Xgdhwh5Me:
																																																			n,
																																																	},
																																																	r,
																																																) => (
																																																	(n ??= ``),
																																																	(t ??= ``),
																																																	p(
																																																		M,
																																																		{
																																																			id: `WHRTa2GqN-${e}`,
																																																			children:
																																																				p(
																																																					ae.Provider,
																																																					{
																																																						value: {
																																																							TBDlVXOGA:
																																																								t,
																																																						},
																																																						children:
																																																							p(
																																																								k.div,
																																																								{
																																																									className: `framer-1l8wzdx`,
																																																									"data-framer-name": `Category`,
																																																									layoutDependency:
																																																										Y,
																																																									layoutId: `Qm57xmwhJ`,
																																																									style: {
																																																										backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																																																										borderBottomLeftRadius: 8,
																																																										borderBottomRightRadius: 8,
																																																										borderTopLeftRadius: 8,
																																																										borderTopRightRadius: 8,
																																																									},
																																																									children:
																																																										p(
																																																											R,
																																																											{
																																																												__fromCanvasComponent:
																																																													!0,
																																																												children:
																																																													p(
																																																														i,
																																																														{
																																																															children:
																																																																p(
																																																																	k.h6,
																																																																	{
																																																																		className: `framer-styles-preset-12tby5a`,
																																																																		"data-styles-preset": `j9HsFBXUW`,
																																																																		style: {
																																																																			"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																																																		},
																																																																		children: `Mercedes`,
																																																																	},
																																																																),
																																																														},
																																																													),
																																																												className: `framer-1ikic2i`,
																																																												"data-framer-name": `Name of Category`,
																																																												fonts: [
																																																													`Inter`,
																																																												],
																																																												layoutDependency:
																																																													Y,
																																																												layoutId: `iOASzroqS`,
																																																												style: {
																																																													"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																																													"--framer-paragraph-spacing": `0px`,
																																																												},
																																																												text: n,
																																																												verticalAlignment: `top`,
																																																												withExternalLayout:
																																																													!0,
																																																											},
																																																										),
																																																								},
																																																							),
																																																					},
																																																				),
																																																		},
																																																		e,
																																																	)
																																																),
																																															),
																																													},
																																												),
																																											],
																																									},
																																								),
																																								p(
																																									R,
																																									{
																																										__fromCanvasComponent:
																																											!0,
																																										children:
																																											p(
																																												i,
																																												{
																																													children:
																																														p(
																																															k.p,
																																															{
																																																className: `framer-styles-preset-11kcybb`,
																																																"data-styles-preset": `pPuowuywh`,
																																																style: {
																																																	"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																																																},
																																																children: `Lementa’s brand was rebuilt end to end: clearer positioning, a modular visual identity, and a streamlined e-commerce UX with faster pages and AA accessibility. Unified content (photo, copy, size/fit notes) and optimized checkout drive conversion and repeat purchase — cleaner story, smoother shopping, better results.`,
																																															},
																																														),
																																												},
																																											),
																																										className: `framer-tc442k`,
																																										"data-framer-name": `Lementa’s brand was rebuilt end to end: clearer positioning, a modular visual identity, and a streamlined e-commerce UX with faster pages and AA accessibility. Unified content (photo, copy, size/fit notes) and optimized checkout drive conversion and repeat purchase — cleaner story, smoother shopping, better results.`,
																																										fonts: [
																																											`Inter`,
																																										],
																																										layoutDependency:
																																											Y,
																																										layoutId: `XdA5C8itk`,
																																										style: {
																																											"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																											"--framer-paragraph-spacing": `0px`,
																																										},
																																										text: a,
																																										verticalAlignment: `top`,
																																										withExternalLayout:
																																											!0,
																																									},
																																								),
																																								v(
																																									k.div,
																																									{
																																										className: `framer-10qze72`,
																																										"data-framer-name": `Info`,
																																										layoutDependency:
																																											Y,
																																										layoutId: `sDy1pKSqR`,
																																										children:
																																											[
																																												p(
																																													k.div,
																																													{
																																														className: `framer-z9vrz7`,
																																														"data-framer-name": `Top Line`,
																																														layoutDependency:
																																															Y,
																																														layoutId: `LT8pPNZ0L`,
																																														style: {
																																															backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																														},
																																													},
																																												),
																																												v(
																																													k.div,
																																													{
																																														className: `framer-127rs5n`,
																																														"data-framer-name": `1`,
																																														layoutDependency:
																																															Y,
																																														layoutId: `W7RsaSIl1`,
																																														children:
																																															[
																																																p(
																																																	R,
																																																	{
																																																		__fromCanvasComponent:
																																																			!0,
																																																		children:
																																																			p(
																																																				i,
																																																				{
																																																					children:
																																																						p(
																																																							k.h6,
																																																							{
																																																								className: `framer-styles-preset-12tby5a`,
																																																								"data-styles-preset": `j9HsFBXUW`,
																																																								style: {
																																																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																																								},
																																																								children: `2025`,
																																																							},
																																																						),
																																																				},
																																																			),
																																																		className: `framer-1go9lmj`,
																																																		"data-framer-name": `2025`,
																																																		fonts: [
																																																			`Inter`,
																																																		],
																																																		layoutDependency:
																																																			Y,
																																																		layoutId: `JmPsJTZ6V`,
																																																		style: {
																																																			"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																																			"--framer-paragraph-spacing": `0px`,
																																																		},
																																																		text: l,
																																																		verticalAlignment: `top`,
																																																		withExternalLayout:
																																																			!0,
																																																	},
																																																),
																																																p(
																																																	R,
																																																	{
																																																		__fromCanvasComponent:
																																																			!0,
																																																		children:
																																																			p(
																																																				i,
																																																				{
																																																					children:
																																																						p(
																																																							k.h6,
																																																							{
																																																								className: `framer-styles-preset-12tby5a`,
																																																								"data-styles-preset": `j9HsFBXUW`,
																																																								style: {
																																																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																																																								},
																																																								children: `Year`,
																																																							},
																																																						),
																																																				},
																																																			),
																																																		className: `framer-3gn1vx`,
																																																		"data-framer-name": `Year`,
																																																		fonts: [
																																																			`Inter`,
																																																		],
																																																		layoutDependency:
																																																			Y,
																																																		layoutId: `zNSYMZJ_2`,
																																																		style: {
																																																			"--extracted-1w1cjl5": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																																			"--framer-paragraph-spacing": `0px`,
																																																		},
																																																		verticalAlignment: `top`,
																																																		withExternalLayout:
																																																			!0,
																																																	},
																																																),
																																																p(
																																																	k.div,
																																																	{
																																																		className: `framer-xfnc06`,
																																																		"data-framer-name": `Line`,
																																																		layoutDependency:
																																																			Y,
																																																		layoutId: `SVs83PDAe`,
																																																		style: {
																																																			backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																																			opacity: 0.15,
																																																		},
																																																	},
																																																),
																																															],
																																													},
																																												),
																																												v(
																																													k.div,
																																													{
																																														className: `framer-1p424m4`,
																																														"data-framer-name": `2`,
																																														layoutDependency:
																																															Y,
																																														layoutId: `EThqXuFMb`,
																																														children:
																																															[
																																																p(
																																																	R,
																																																	{
																																																		__fromCanvasComponent:
																																																			!0,
																																																		children:
																																																			p(
																																																				i,
																																																				{
																																																					children:
																																																						p(
																																																							k.h6,
																																																							{
																																																								className: `framer-styles-preset-12tby5a`,
																																																								"data-styles-preset": `j9HsFBXUW`,
																																																								style: {
																																																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																																								},
																																																								children: `Fashion`,
																																																							},
																																																						),
																																																				},
																																																			),
																																																		className: `framer-107xjbs`,
																																																		fonts: [
																																																			`Inter`,
																																																		],
																																																		layoutDependency:
																																																			Y,
																																																		layoutId: `MTWG9B7eI`,
																																																		style: {
																																																			"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																																			"--framer-paragraph-spacing": `0px`,
																																																		},
																																																		text: s,
																																																		verticalAlignment: `top`,
																																																		withExternalLayout:
																																																			!0,
																																																	},
																																																),
																																																p(
																																																	R,
																																																	{
																																																		__fromCanvasComponent:
																																																			!0,
																																																		children:
																																																			p(
																																																				i,
																																																				{
																																																					children:
																																																						p(
																																																							k.h6,
																																																							{
																																																								className: `framer-styles-preset-12tby5a`,
																																																								"data-styles-preset": `j9HsFBXUW`,
																																																								style: {
																																																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																																																								},
																																																								children: `Industry`,
																																																							},
																																																						),
																																																				},
																																																			),
																																																		className: `framer-1wxqg8j`,
																																																		fonts: [
																																																			`Inter`,
																																																		],
																																																		layoutDependency:
																																																			Y,
																																																		layoutId: `M2W5b4KtV`,
																																																		style: {
																																																			"--extracted-1w1cjl5": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																																			"--framer-paragraph-spacing": `0px`,
																																																		},
																																																		verticalAlignment: `top`,
																																																		withExternalLayout:
																																																			!0,
																																																	},
																																																),
																																																p(
																																																	k.div,
																																																	{
																																																		className: `framer-tc9wev`,
																																																		"data-framer-name": `Line`,
																																																		layoutDependency:
																																																			Y,
																																																		layoutId: `F2Z73hGVB`,
																																																		style: {
																																																			backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																																			opacity: 0.15,
																																																		},
																																																	},
																																																),
																																															],
																																													},
																																												),
																																												v(
																																													k.div,
																																													{
																																														className: `framer-q6fw3l`,
																																														"data-framer-name": `3`,
																																														layoutDependency:
																																															Y,
																																														layoutId: `runpFqyzq`,
																																														children:
																																															[
																																																p(
																																																	R,
																																																	{
																																																		__fromCanvasComponent:
																																																			!0,
																																																		children:
																																																			p(
																																																				i,
																																																				{
																																																					children:
																																																						p(
																																																							k.h6,
																																																							{
																																																								className: `framer-styles-preset-12tby5a`,
																																																								"data-styles-preset": `j9HsFBXUW`,
																																																								style: {
																																																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																																								},
																																																								children: `London, UK`,
																																																							},
																																																						),
																																																				},
																																																			),
																																																		className: `framer-ljpers`,
																																																		fonts: [
																																																			`Inter`,
																																																		],
																																																		layoutDependency:
																																																			Y,
																																																		layoutId: `r6uXEdevn`,
																																																		style: {
																																																			"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																																			"--framer-paragraph-spacing": `0px`,
																																																		},
																																																		text: r,
																																																		verticalAlignment: `top`,
																																																		withExternalLayout:
																																																			!0,
																																																	},
																																																),
																																																p(
																																																	R,
																																																	{
																																																		__fromCanvasComponent:
																																																			!0,
																																																		children:
																																																			p(
																																																				i,
																																																				{
																																																					children:
																																																						p(
																																																							k.h6,
																																																							{
																																																								className: `framer-styles-preset-12tby5a`,
																																																								"data-styles-preset": `j9HsFBXUW`,
																																																								style: {
																																																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																																																								},
																																																								children: `Client Location`,
																																																							},
																																																						),
																																																				},
																																																			),
																																																		className: `framer-49p3ow`,
																																																		fonts: [
																																																			`Inter`,
																																																		],
																																																		layoutDependency:
																																																			Y,
																																																		layoutId: `zpqblNRlu`,
																																																		style: {
																																																			"--extracted-1w1cjl5": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																																			"--framer-paragraph-spacing": `0px`,
																																																		},
																																																		verticalAlignment: `top`,
																																																		withExternalLayout:
																																																			!0,
																																																	},
																																																),
																																																p(
																																																	k.div,
																																																	{
																																																		className: `framer-3p3fyd`,
																																																		"data-framer-name": `Line`,
																																																		layoutDependency:
																																																			Y,
																																																		layoutId: `TLmFt3GUg`,
																																																		style: {
																																																			backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																																			opacity: 0.15,
																																																		},
																																																	},
																																																),
																																															],
																																													},
																																												),
																																											],
																																									},
																																								),
																																								p(
																																									ie,
																																									{
																																										links: [
																																											{
																																												href: {
																																													pathVariables:
																																														{
																																															frSm7SqOH:
																																																t,
																																														},
																																													webPageId: `luGPP9ZOT`,
																																												},
																																												implicitPathVariables:
																																													void 0,
																																											},
																																											{
																																												href: {
																																													pathVariables:
																																														{
																																															frSm7SqOH:
																																																t,
																																														},
																																													webPageId: `luGPP9ZOT`,
																																												},
																																												implicitPathVariables:
																																													void 0,
																																											},
																																											{
																																												href: {
																																													pathVariables:
																																														{
																																															frSm7SqOH:
																																																t,
																																														},
																																													webPageId: `luGPP9ZOT`,
																																												},
																																												implicitPathVariables:
																																													void 0,
																																											},
																																										],
																																										children:
																																											(
																																												e,
																																											) =>
																																												p(
																																													Z,
																																													{
																																														height: 50,
																																														width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 130px) / 6, 50px) * 2 - 50px)`,
																																														...$n(
																																															{
																																																eO6Qopa_m:
																																																	{
																																																		width: `max(min(${c?.width || `100vw`}, 1600px) - 60px, 50px)`,
																																																	},
																																																hgNV3iX_3:
																																																	{
																																																		width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																																																	},
																																															},
																																															V,
																																															K,
																																														),
																																														children:
																																															p(
																																																H,
																																																{
																																																	className: `framer-1to0l4r-container`,
																																																	layoutDependency:
																																																		Y,
																																																	layoutId: `vtaqqWTx2-container`,
																																																	nodeId: `vtaqqWTx2`,
																																																	rendersWithMotion:
																																																		!0,
																																																	scopeId: `BWLdBuCjx`,
																																																	children:
																																																		p(
																																																			Ke,
																																																			{
																																																				CKFVUbPix: `View Project`,
																																																				height: `100%`,
																																																				id: `vtaqqWTx2`,
																																																				kT5TElzPn:
																																																					e[0],
																																																				layoutId: `vtaqqWTx2`,
																																																				style: {
																																																					height: `100%`,
																																																					width: `100%`,
																																																				},
																																																				variant: `at4YNX0WJ`,
																																																				width: `100%`,
																																																				...$n(
																																																					{
																																																						eO6Qopa_m:
																																																							{
																																																								kT5TElzPn:
																																																									e[1],
																																																							},
																																																						hgNV3iX_3:
																																																							{
																																																								kT5TElzPn:
																																																									e[2],
																																																							},
																																																					},
																																																					V,
																																																					K,
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
																																		},
																																	),
																																],
																														},
																													),
																											},
																										),
																								},
																							),
																					},
																					n,
																				)
																			),
																		),
																}),
														}),
													}),
												}),
											],
										}),
									}),
								}),
							}),
						})
					);
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-qhcmX.framer-1pna1m, .framer-qhcmX .framer-1pna1m { display: block; }`,
					`.framer-qhcmX.framer-1vcyd0t { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
					`.framer-qhcmX .framer-10uzteq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 90px 40px 90px 40px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-v22ng3 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-4n166u, .framer-qhcmX .framer-1go9lmj, .framer-qhcmX .framer-107xjbs, .framer-qhcmX .framer-ljpers { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
					`.framer-qhcmX .framer-rbhxix { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 58px; justify-content: center; min-width: 68px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 10px 0px; position: relative; width: min-content; }`,
					`.framer-qhcmX .framer-16626xl { flex: none; height: auto; position: absolute; right: -5px; top: 59%; white-space: pre; width: auto; z-index: 1; }`,
					`.framer-qhcmX .framer-v3fv0a { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-16vxxm9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 70px 0px 0px 0px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-29ap6m { display: grid; flex: none; gap: 10px; grid-auto-rows: min-content; grid-template-columns: repeat(6, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-j39wdh { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; grid-column: span 4; height: 100%; justify-content: center; justify-self: start; padding: 10px 0px 0px 0px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-jf311f { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: center; overflow: visible; padding: 2px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-f06g39-container { flex: 1 0 0px; height: 1px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-encc9g { flex: none; height: var(--framer-aspect-ratio-supported, 22px); left: 50%; position: absolute; top: 50%; width: 180px; z-index: 3; }`,
					`.framer-qhcmX .framer-1i5hyqj { align-content: flex-end; align-items: flex-end; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; grid-column: span 2; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-1o4lrgr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 60px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-qotke6, .framer-qhcmX .framer-t53dew, .framer-qhcmX .framer-tc442k { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-qhcmX .framer-1mawem3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-1i876ad { -webkit-user-select: none; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 1px 1px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; user-select: none; width: 100%; }`,
					`.framer-qhcmX .framer-1l8wzdx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 10px 5px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-qhcmX .framer-1ikic2i, .framer-qhcmX .framer-3gn1vx, .framer-qhcmX .framer-1wxqg8j, .framer-qhcmX .framer-49p3ow { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					`.framer-qhcmX .framer-10qze72 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-z9vrz7 { flex: none; height: 2px; left: calc(50.06518904823992% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 1; }`,
					`.framer-qhcmX .framer-127rs5n, .framer-qhcmX .framer-1p424m4, .framer-qhcmX .framer-q6fw3l { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 20px 0px 20px 0px; position: relative; width: 100%; }`,
					`.framer-qhcmX .framer-xfnc06, .framer-qhcmX .framer-tc9wev, .framer-qhcmX .framer-3p3fyd { bottom: 0px; flex: none; height: 1px; position: absolute; right: 0px; width: 100%; z-index: 1; }`,
					`.framer-qhcmX .framer-1to0l4r-container { flex: none; height: 50px; position: relative; width: 100%; }`,
					`.framer-qhcmX.framer-v-yb9gfw.framer-1vcyd0t { width: 810px; }`,
					`.framer-qhcmX.framer-v-yb9gfw .framer-10uzteq { padding: 60px 30px 60px 30px; }`,
					`.framer-qhcmX.framer-v-yb9gfw .framer-rbhxix { padding: 0px 0px 13px 0px; }`,
					`.framer-qhcmX.framer-v-yb9gfw .framer-16626xl { right: -7px; }`,
					`.framer-qhcmX.framer-v-yb9gfw .framer-16vxxm9 { padding: 35px 0px 0px 0px; }`,
					`.framer-qhcmX.framer-v-yb9gfw .framer-29ap6m { grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); }`,
					`.framer-qhcmX.framer-v-yb9gfw .framer-j39wdh, .framer-qhcmX.framer-v-26aqdx .framer-j39wdh { grid-column: span 1; height: min-content; padding: 0px; }`,
					`.framer-qhcmX.framer-v-yb9gfw .framer-jf311f, .framer-qhcmX.framer-v-26aqdx .framer-jf311f { flex: none; height: min-content; }`,
					`.framer-qhcmX.framer-v-yb9gfw .framer-f06g39-container { flex: none; height: 610px; }`,
					`.framer-qhcmX.framer-v-yb9gfw .framer-1i5hyqj { grid-column: span 1; padding: 30px 0px 0px 0px; }`,
					`.framer-qhcmX.framer-v-yb9gfw .framer-1o4lrgr, .framer-qhcmX.framer-v-26aqdx .framer-16vxxm9, .framer-qhcmX.framer-v-26aqdx .framer-1o4lrgr { padding: 0px; }`,
					`.framer-qhcmX.framer-v-yb9gfw .framer-127rs5n, .framer-qhcmX.framer-v-yb9gfw .framer-1p424m4, .framer-qhcmX.framer-v-yb9gfw .framer-q6fw3l { padding: 17px 0px 17px 0px; }`,
					`.framer-qhcmX.framer-v-26aqdx.framer-1vcyd0t { width: 390px; }`,
					`.framer-qhcmX.framer-v-26aqdx .framer-10uzteq { padding: 40px 25px 40px 25px; }`,
					`.framer-qhcmX.framer-v-26aqdx .framer-rbhxix { padding: 0px 0px 8px 0px; }`,
					`.framer-qhcmX.framer-v-26aqdx .framer-29ap6m { grid-template-columns: repeat(1, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); padding: 20px 0px 0px 0px; }`,
					`.framer-qhcmX.framer-v-26aqdx .framer-f06g39-container { flex: none; height: 285px; }`,
					`.framer-qhcmX.framer-v-26aqdx .framer-encc9g { height: var(--framer-aspect-ratio-supported, 200px); }`,
					`.framer-qhcmX.framer-v-26aqdx .framer-1i5hyqj { grid-column: span 1; padding: 20px 0px 0px 0px; }`,
					`.framer-qhcmX.framer-v-26aqdx .framer-127rs5n, .framer-qhcmX.framer-v-26aqdx .framer-1p424m4, .framer-qhcmX.framer-v-26aqdx .framer-q6fw3l { padding: 15px 0px 15px 0px; }`,
					...It,
					...Vt,
					...pt,
					...Tt,
					...kt,
					...bt,
					...rt,
					...ze,
					...yt,
				],
				`framer-qhcmX`,
			)),
			(vr = _r),
			(_r.displayName = `Before & After Case - Section`),
			(_r.defaultProps = { height: 1251, width: 1200 }),
			P(_r, {
				variant: {
					options: [`sERzTRNgP`, `eO6Qopa_m`, `hgNV3iX_3`],
					optionTitles: [`Desktop - 1200`, `Tablet`, `Phone`],
					title: `Variant`,
					type: J.Enum,
				},
				QCmtIhV_V: {
					defaultValue: `Before & After`,
					displayTextArea: !1,
					title: `Heading of Section`,
					type: J.String,
				},
				f9CT4tTM8: {
					defaultValue: `Brand transformation end to end: positioning → identity → web`,
					displayTextArea: !0,
					title: `What Transformed`,
					type: J.String,
				},
				DGmW4oqjG: {
					defaultValue: `[06]`,
					displayTextArea: !1,
					title: `Section Number`,
					type: J.String,
				},
				koa73A7YO: {
					dataIdentifier: `local-module:collection/tTTLfmF7I:default`,
					defaultValue: `GwbipauMe`,
					description: ``,
					title: `Select Project`,
					type: J.CollectionReference,
				},
				KMJpy91_d: {
					__defaultAssetReference: `data:framer/asset-reference,RXynWiEpbvkpuUiRSkSxE6yz4.jpg?originalFilename=12.jpg&width=2016&height=1670`,
					title: `Image Big`,
					type: J.ResponsiveImage,
				},
				tku_ZUakr: {
					__defaultAssetReference: `data:framer/asset-reference,GhqKSdFgiwq6ix3LGBGpGbgWwaw.jpg?originalFilename=hover.jpg&width=2016&height=1670`,
					title: `Image Hover`,
					type: J.ResponsiveImage,
				},
				WiMqvlQNF: nr?.direction && {
					...nr.direction,
					defaultValue: `rtl`,
					description: void 0,
					hidden: void 0,
					title: `Direction Hover`,
				},
				WS1SWhlH_: {
					defaultValue: 8,
					displayStepper: !0,
					max: 80,
					min: 0,
					step: 1,
					title: `Radius of Image`,
					type: J.Number,
				},
				rRGxmCCi3: { title: `Cursor`, type: J.CustomCursor },
			}),
			de(
				_r,
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
					...er,
					...tr,
					...G(Rt),
					...G(Ht),
					...G(mt),
					...G(Et),
					...G(At),
					...G(St),
					...G(it),
					...G(Be),
					...G(xt),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function br(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var xr,
	Sr,
	Cr,
	wr,
	Tr,
	Er,
	Dr,
	Or,
	kr,
	Ar,
	jr,
	Mr = e(() => {
		(y(),
			q(),
			N(),
			l(),
			(xr = [
				`SP7XAEd6j`,
				`wE1xRBhw2`,
				`b9Wyp8VLX`,
				`KP_2YTyir`,
				`Vc8J_9MHY`,
				`KvncGGvMK`,
			]),
			(Sr = `framer-EV5pa`),
			(Cr = {
				b9Wyp8VLX: `framer-v-1iowgtk`,
				KP_2YTyir: `framer-v-h0lwb7`,
				KvncGGvMK: `framer-v-1rw3vk4`,
				SP7XAEd6j: `framer-v-c8kp1x`,
				Vc8J_9MHY: `framer-v-ngbtse`,
				wE1xRBhw2: `framer-v-k6rv08`,
			}),
			(wr = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Tr = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(Er = k.create(i)),
			(Dr = {
				"Brand Strategy": `SP7XAEd6j`,
				"Content & Art": `KvncGGvMK`,
				"Motion & 3D": `Vc8J_9MHY`,
				"Visual Identity": `KP_2YTyir`,
				"Web Design": `wE1xRBhw2`,
				"Web Dev": `b9Wyp8VLX`,
			}),
			(Or = ({ height: e, id: t, width: n, ...r }) => ({
				...r,
				variant: Dr[r.variant] ?? r.variant ?? `SP7XAEd6j`,
			})),
			(kr = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Ar = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						i = S(),
						{ activeLocale: a, setLocale: o } = _e(),
						s = X(),
						{
							style: c,
							className: l,
							layoutId: u,
							variant: d,
							...f
						} = Or(e),
						{
							baseVariant: m,
							classNames: h,
							clearLoadingGesture: g,
							gestureHandlers: v,
							gestureVariant: y,
							isLoading: b,
							setGestureState: x,
							setVariant: C,
							variants: w,
						} = W({
							cycleOrder: xr,
							defaultVariant: `SP7XAEd6j`,
							ref: r,
							variant: d,
							variantClassNames: Cr,
						}),
						T = kr(e, w),
						E = U(Sr);
					return p(M, {
						id: u ?? i,
						children: p(Er, {
							animate: w,
							initial: !1,
							children: p(Tr, {
								value: wr,
								children: p(k.div, {
									...f,
									...v,
									className: U(E, `framer-c8kp1x`, l, h),
									"data-framer-name": `Brand Strategy`,
									layoutDependency: T,
									layoutId: `SP7XAEd6j`,
									ref: r,
									style: {
										borderBottomLeftRadius: 10,
										borderBottomRightRadius: 10,
										borderTopLeftRadius: 10,
										borderTopRightRadius: 10,
										...c,
									},
									...br(
										{
											b9Wyp8VLX: {
												"data-framer-name": `Web Dev`,
											},
											KP_2YTyir: {
												"data-framer-name": `Visual Identity`,
											},
											KvncGGvMK: {
												"data-framer-name": `Content & Art`,
											},
											Vc8J_9MHY: {
												"data-framer-name": `Motion & 3D`,
											},
											wE1xRBhw2: {
												"data-framer-name": `Web Design`,
											},
										},
										m,
										y,
									),
									children: p(se, {
										background: {
											alt: ``,
											fit: `fill`,
											intrinsicHeight: 272,
											intrinsicWidth: 170,
											loading: K((s?.y || 0) + 0),
											pixelHeight: 544,
											pixelWidth: 340,
											src: `/assets/rfiMsTgUc9TD9Y241Co9J0g2VU.jpg`,
										},
										className: `framer-z129gk`,
										"data-framer-name": `Image`,
										layoutDependency: T,
										layoutId: `cRTjdfu4W`,
										...br(
											{
												b9Wyp8VLX: {
													background: {
														alt: ``,
														fit: `fill`,
														intrinsicHeight: 272,
														intrinsicWidth: 170,
														loading: K(
															(s?.y || 0) + 0,
														),
														pixelHeight: 544,
														pixelWidth: 340,
														src: `/assets/images/aToh3hSxAPCdKYLJeekBXOj8XQ.jpg`,
													},
												},
												KP_2YTyir: {
													background: {
														alt: ``,
														fit: `fill`,
														intrinsicHeight: 272,
														intrinsicWidth: 170,
														loading: K(
															(s?.y || 0) + 0,
														),
														pixelHeight: 544,
														pixelWidth: 340,
														src: `/assets/images/6ogHfJHw8mfHLRExwABlePAVEDk.jpg`,
													},
												},
												KvncGGvMK: {
													background: {
														alt: ``,
														fit: `fill`,
														intrinsicHeight: 272,
														intrinsicWidth: 170,
														loading: K(
															(s?.y || 0) + 0,
														),
														pixelHeight: 544,
														pixelWidth: 340,
														src: `/assets/images/oD64yyuJXFHkuPGpKB7UtnUzHF0.jpg`,
													},
												},
												Vc8J_9MHY: {
													background: {
														alt: ``,
														fit: `fill`,
														intrinsicHeight: 272,
														intrinsicWidth: 170,
														loading: K(
															(s?.y || 0) + 0,
														),
														pixelHeight: 544,
														pixelWidth: 340,
														src: `/assets/images/9BkaMJlNmjo0TlbtcF2PLNFQuc.jpg`,
													},
												},
												wE1xRBhw2: {
													background: {
														alt: ``,
														fit: `fill`,
														intrinsicHeight: 272,
														intrinsicWidth: 170,
														loading: K(
															(s?.y || 0) + 0,
														),
														pixelHeight: 544,
														pixelWidth: 340,
														src: `/assets/images/MGifguJNDsQpaqa3NRXH0BWTJfs.jpg`,
													},
												},
											},
											m,
											y,
										),
									}),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-EV5pa.framer-18m5txr, .framer-EV5pa .framer-18m5txr { display: block; }`,
					`.framer-EV5pa.framer-c8kp1x { height: 272px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 170px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-EV5pa .framer-z129gk { aspect-ratio: 0.625 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 272px); left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
				],
				`framer-EV5pa`,
			)),
			(jr = Ar),
			(Ar.displayName = `Services - Cursors & Images`),
			(Ar.defaultProps = { height: 272, width: 170 }),
			P(Ar, {
				variant: {
					options: [
						`SP7XAEd6j`,
						`wE1xRBhw2`,
						`b9Wyp8VLX`,
						`KP_2YTyir`,
						`Vc8J_9MHY`,
						`KvncGGvMK`,
					],
					optionTitles: [
						`Brand Strategy`,
						`Web Design`,
						`Web Dev`,
						`Visual Identity`,
						`Motion & 3D`,
						`Content & Art`,
					],
					title: `Variant`,
					type: J.Enum,
				},
			}),
			de(Ar, [{ explicitInter: !0, fonts: [] }], {
				supportsExplicitInterCodegen: !0,
			}));
	});
function Nr(e) {
	let {
			img0: t = ``,
			img1: n = ``,
			chaos: r = 0.06,
			speed: i = 0.08,
			hover: a = !0,
			tManual: o = 0,
			gatherGamma: s = 2,
			tile: l = 32,
		} = e,
		d = _(null);
	return (
		c(() => {
			let e = d.current;
			if (!e) return;
			let c = document.createElement(`img`);
			(Object.assign(c.style, {
				position: `absolute`,
				inset: `0px`,
				width: `100%`,
				height: `100%`,
				objectFit: `cover`,
				transformOrigin: `50% 50%`,
				opacity: `0`,
				transition: `opacity 160ms linear`,
				pointerEvents: `none`,
				zIndex: 0,
			}),
				(c.crossOrigin = `anonymous`));
			let f = document.createElement(`img`);
			(Object.assign(f.style, {
				position: `absolute`,
				inset: `0px`,
				width: `100%`,
				height: `100%`,
				objectFit: `cover`,
				transformOrigin: `50% 50%`,
				opacity: `0`,
				transition: `opacity 160ms linear`,
				pointerEvents: `none`,
				zIndex: 0,
			}),
				(f.crossOrigin = `anonymous`));
			let p = document.createElement(`canvas`);
			(Object.assign(p.style, {
				position: `absolute`,
				inset: `0px`,
				width: `100%`,
				height: `100%`,
				display: `block`,
				transformOrigin: `50% 50%`,
				imageRendering: `pixelated`,
				pointerEvents: `none`,
				zIndex: 1,
			}),
				(e.style.position = `relative`),
				e.appendChild(c),
				e.appendChild(f),
				e.appendChild(p));
			let m = p.getContext(`webgl`, {
				alpha: !0,
				antialias: !0,
				premultipliedAlpha: !0,
			});
			if (!m) {
				e.innerHTML = `WebGL is not supported`;
				return;
			}
			(m.disable(m.DEPTH_TEST),
				m.disable(m.BLEND),
				m.clearColor(0, 0, 0, 0));
			let h = (e, t) => {
					let n = m.createShader(e);
					if (
						(m.shaderSource(n, t),
						m.compileShader(n),
						!m.getShaderParameter(n, m.COMPILE_STATUS))
					) {
						let e = m.getShaderInfoLog(n) || `shader error`;
						throw (
							console.error(
								`Shader compile error:
`,
								e,
								`
SRC:
`,
								t,
							),
							Error(e)
						);
					}
					return n;
				},
				g = (e, t) => {
					let n = m.createProgram();
					if (
						(m.attachShader(n, h(m.VERTEX_SHADER, e)),
						m.attachShader(n, h(m.FRAGMENT_SHADER, t)),
						m.linkProgram(n),
						!m.getProgramParameter(n, m.LINK_STATUS))
					) {
						let e = m.getProgramInfoLog(n) || `link error`;
						throw (
							console.error(
								`Program link error:
`,
								e,
							),
							Error(e)
						);
					}
					return n;
				},
				_ = (e) => {
					let t = m.createTexture();
					return (
						m.bindTexture(m.TEXTURE_2D, t),
						m.texParameteri(
							m.TEXTURE_2D,
							m.TEXTURE_MIN_FILTER,
							m.LINEAR,
						),
						m.texParameteri(
							m.TEXTURE_2D,
							m.TEXTURE_MAG_FILTER,
							m.LINEAR,
						),
						m.texParameteri(
							m.TEXTURE_2D,
							m.TEXTURE_WRAP_S,
							m.CLAMP_TO_EDGE,
						),
						m.texParameteri(
							m.TEXTURE_2D,
							m.TEXTURE_WRAP_T,
							m.CLAMP_TO_EDGE,
						),
						m.pixelStorei(m.UNPACK_FLIP_Y_WEBGL, 1),
						m.texImage2D(
							m.TEXTURE_2D,
							0,
							m.RGBA,
							m.RGBA,
							m.UNSIGNED_BYTE,
							e,
						),
						t
					);
				},
				v = (e) =>
					new Promise((t, n) => {
						let r = new Image();
						((r.crossOrigin = `anonymous`),
							(r.onload = () => t(r)),
							(r.onerror = n),
							(r.src = e));
					}),
				y = (e, t) =>
					typeof e == `string` ? e : e && e.src ? e.src : t,
				b = g(
					`
precision highp float;
attribute vec2 aPos0, aPos1, aS0, aS1, aRnd;
uniform float uT, uChaos, uPointSize;
varying highp vec2 vS0, vS1;
void main(){
  float t = clamp(uT, 0.0, 1.0);
  float bell = 4.0 * t * (1.0 - t);
  vec2 uv = mix(aPos0, aPos1, t) + aRnd * (uChaos * bell);
  gl_Position = vec4(uv * 2.0 - 1.0, 0.0, 1.0);
  gl_PointSize = uPointSize;
  vS0 = aS0; vS1 = aS1;
}`,
					`
precision highp float;
varying highp vec2 vS0, vS1;
uniform sampler2D uTex0; uniform sampler2D uTex1;
uniform float uT; uniform vec2 uScale0; uniform vec2 uScale1; uniform float uGammaB;
vec2 cover(vec2 vp, vec2 sc){ return clamp(0.5 + (vp - 0.5) / sc, 0.0, 1.0); }
void main(){
  float t = clamp(uT, 0.0, 1.0);
  vec3 c0 = texture2D(uTex0, cover(vS0, uScale0)).rgb;
  vec3 c1 = texture2D(uTex1, cover(vS1, uScale1)).rgb;
  vec3 l0 = pow(c0, vec3(2.2)), l1 = pow(c1, vec3(2.2));
  vec3 lm = mix(l0, l1, pow(t, max(0.1, uGammaB)));
  gl_FragColor = vec4(pow(lm, vec3(1.0/2.2)), 1.0);
}`,
				);
			m.useProgram(b);
			let x = {
				aPos0: m.getAttribLocation(b, `aPos0`),
				aPos1: m.getAttribLocation(b, `aPos1`),
				aS0: m.getAttribLocation(b, `aS0`),
				aS1: m.getAttribLocation(b, `aS1`),
				aRnd: m.getAttribLocation(b, `aRnd`),
				uT: m.getUniformLocation(b, `uT`),
				uChaos: m.getUniformLocation(b, `uChaos`),
				uScale0: m.getUniformLocation(b, `uScale0`),
				uScale1: m.getUniformLocation(b, `uScale1`),
				uTex0: m.getUniformLocation(b, `uTex0`),
				uTex1: m.getUniformLocation(b, `uTex1`),
				uGammaB: m.getUniformLocation(b, `uGammaB`),
				uPointSize: m.getUniformLocation(b, `uPointSize`),
			};
			(m.uniform1i(x.uTex0, 0),
				m.uniform1i(x.uTex1, 1),
				m.uniform1f(x.uT, 0),
				m.uniform1f(x.uChaos, Math.max(0, r)),
				m.uniform1f(x.uGammaB, s),
				m.uniform2f(x.uScale0, 1, 1),
				m.uniform2f(x.uScale1, 1, 1),
				m.uniform1f(x.uPointSize, 1));
			let S = y(
					t,
					`https://images.pexels.com/photos/8847831/pexels-photo-8847831.jpeg`,
				),
				C = y(
					n,
					`https://images.pexels.com/photos/33671693/pexels-photo-33671693.jpeg`,
				);
			((c.src = S), (f.src = C));
			let w = null,
				T = null,
				E = null,
				D = null,
				O = 0,
				k = 0,
				A = 0,
				j = null,
				M = null,
				N = null,
				P = null,
				F = null,
				I = null,
				L = null,
				R = null,
				z = !1,
				ee = (e) => {
					let t = e % O,
						n = (e / O) | 0;
					return [(t + 0.5) / O, (n + 0.5) / k];
				},
				B = (e, t, n, r) => {
					let i = e / t,
						a = n / r;
					return i > a ? [i / a, 1] : [1, a / i];
				};
			function V(e, t, n, r) {
				e.clearRect(0, 0, n, r);
				let i = Math.max(n / t.width, r / t.height),
					a = t.width * i,
					o = t.height * i,
					s = (n - a) * 0.5,
					c = (r - o) * 0.5;
				e.drawImage(t, s, c, a, o);
			}
			function H(e, t, n) {
				let r = (e) => (
						(e /= 255),
						e <= 0.04045 ? e / 12.92 : ((e + 0.055) / 1.055) ** 2.4
					),
					i = r(e),
					a = r(t),
					o = r(n);
				return 0.2126 * i + 0.7152 * a + 0.0722 * o;
			}
			function te(e, t, n) {
				let r = document.createElement(`canvas`);
				((r.width = t), (r.height = n));
				let i = r.getContext(`2d`, { willReadFrequently: !0 });
				V(i, e, t, n);
				let a = i.getImageData(0, 0, t, n).data,
					o = new Float32Array(t * n);
				for (let e = 0, t = 0; e < a.length; e += 4, t++)
					o[t] = H(a[e], a[e + 1], a[e + 2]);
				return o;
			}
			let U = new Blob(
					[
						`
self.onmessage = (e) => {
  const { W, H, tile, l0, l1 } = e.data;
  const tilesX = Math.ceil(W / tile), tilesY = Math.ceil(H / tile);
  const map01 = new Uint32Array(W*H); const map10 = new Uint32Array(W*H);
  function part1by1(n){ n&=0x0000ffff; n=(n|(n<<8))&0x00FF00FF; n=(n|(n<<4))&0x0F0F0F0F; n=(n|(n<<2))&0x33333333; n=(n|(n<<1))&0x55555555; return n; }
  function morton(x,y){ return (part1by1(y)<<1)|part1by1(x); }
  for (let ty=0; ty<tilesY; ty++){
    const y0 = ty*tile, y1 = Math.min(H, y0+tile);
    for (let tx=0; tx<tilesX; tx++){
      const x0 = tx*tile, x1 = Math.min(W, x0+tile);
      const idx0 = [], idx1 = [];
      for (let y=y0; y<y1; y++) for (let x=x0; x<x1; x++){ const k=y*W+x; idx0.push(k); idx1.push(k); }
      idx0.sort((a,b)=>{ const da=l0[a], db=l0[b]; if (da!==db) return da-db; const ax=a%W, ay=(a/W)|0, bx=b%W, by=(b/W)|0; return morton(ax-x0, ay-y0)-morton(bx-x0, by-y0); });
      idx1.sort((a,b)=>{ const da=l1[a], db=l1[b]; if (da!==db) return da-db; const ax=a%W, ay=(a/W)|0, bx=b%W, by=(b/W)|0; return morton(ax-x0, ay-y0)-morton(bx-x0, by-y0); });
      const n = idx0.length;
      for (let i=0;i<n;i++){ const s=idx0[i], t=idx1[i]; map01[s]=t; map10[t]=s; }
    }
  }
  self.postMessage({ map01, map10 }, [map01.buffer, map10.buffer]);
};`,
					],
					{ type: `application/javascript` },
				),
				ne = new Worker(URL.createObjectURL(U));
			function re(e, t) {
				!e ||
					t < 0 ||
					(m.bindBuffer(m.ARRAY_BUFFER, e),
					m.enableVertexAttribArray(t),
					m.vertexAttribPointer(t, 2, m.FLOAT, !1, 0, 0));
			}
			function ie() {
				if (!w || !T || O <= 0 || k <= 0) return;
				z = !1;
				let e = O * k,
					t = new Float32Array(e * 2);
				for (let n = 0; n < e; n++) {
					let [e, r] = ee(n);
					((t[n * 2] = e), (t[n * 2 + 1] = r));
				}
				let n = te(w, O, k),
					r = te(T, O, k);
				(ne.postMessage({ W: O, H: k, tile: l, l0: n, l1: r }, [
					n.buffer,
					r.buffer,
				]),
					(ne.onmessage = (n) => {
						let { map01: r, map10: i } = n.data,
							a = new Float32Array(e * 2),
							o = new Float32Array(e * 2);
						for (let t = 0; t < e; t++) {
							let e = r[t],
								n = e % O,
								s = (e / O) | 0;
							((a[t * 2] = (n + 0.5) / O),
								(a[t * 2 + 1] = (s + 0.5) / k));
							let c = i[t],
								l = c % O,
								u = (c / O) | 0;
							((o[t * 2] = (l + 0.5) / O),
								(o[t * 2 + 1] = (u + 0.5) / k));
						}
						((M ||= m.createBuffer()),
							m.bindBuffer(m.ARRAY_BUFFER, M),
							m.bufferData(m.ARRAY_BUFFER, a, m.STATIC_DRAW),
							(N ||= m.createBuffer()),
							m.bindBuffer(m.ARRAY_BUFFER, N),
							m.bufferData(m.ARRAY_BUFFER, o, m.STATIC_DRAW),
							(P ||= m.createBuffer()),
							m.bindBuffer(m.ARRAY_BUFFER, P),
							m.bufferData(m.ARRAY_BUFFER, t, m.STATIC_DRAW),
							(F ||= m.createBuffer()),
							m.bindBuffer(m.ARRAY_BUFFER, F),
							m.bufferData(m.ARRAY_BUFFER, a, m.STATIC_DRAW),
							(I ||= m.createBuffer()),
							m.bindBuffer(m.ARRAY_BUFFER, I),
							m.bufferData(m.ARRAY_BUFFER, o, m.STATIC_DRAW),
							(L ||= m.createBuffer()),
							m.bindBuffer(m.ARRAY_BUFFER, L),
							m.bufferData(m.ARRAY_BUFFER, t, m.STATIC_DRAW),
							(z = !0));
					}));
			}
			function W() {
				let t = e.getBoundingClientRect(),
					n = Math.max(1, Math.floor(t.width)),
					r = Math.max(1, Math.floor(t.height));
				if (p.width !== n || p.height !== r) {
					((p.width = n),
						(p.height = r),
						(p.style.width = n + `px`),
						(p.style.height = r + `px`),
						m.viewport(0, 0, n, r));
					let e = O,
						t = k,
						i = l;
					((O = Math.ceil(n / i)),
						(k = Math.ceil(r / i)),
						(A = O * k));
					let a = new Float32Array(A * 2),
						o = new Float32Array(A * 2);
					for (let e = 0; e < A; e++) {
						let t = e % O,
							n = (e / O) | 0,
							r = (t + 0.5) / O,
							i = (n + 0.5) / k;
						((a[e * 2] = r), (a[e * 2 + 1] = i));
						let s = (e ^ 2654435769) >>> 0;
						s = (Math.imul(s, 1664525) + 1013904223) >>> 0;
						let c = ((s >>> 8) & 65535) / 65535;
						s =
							(Math.imul(s ^ 3735929054, 1664525) +
								1013904223) >>>
							0;
						let l = ((s >>> 8) & 65535) / 65535;
						((o[e * 2] = c * 2 - 1), (o[e * 2 + 1] = l * 2 - 1));
					}
					((j ||= m.createBuffer()),
						m.bindBuffer(m.ARRAY_BUFFER, j),
						m.bufferData(m.ARRAY_BUFFER, a, m.STATIC_DRAW),
						(R ||= m.createBuffer()),
						m.bindBuffer(m.ARRAY_BUFFER, R),
						m.bufferData(m.ARRAY_BUFFER, o, m.STATIC_DRAW));
					let s = Math.max(n / O, r / k);
					if ((m.uniform1f(x.uPointSize, s), w && T)) {
						let e = B(w.width, w.height, O, k),
							t = B(T.width, T.height, O, k);
						(m.uniform2f(x.uScale0, e[0], e[1]),
							m.uniform2f(x.uScale1, t[0], t[1]));
					}
					(O !== e || k !== t) && ie();
				}
			}
			(u.addEventListener(`resize`, W),
				Promise.all([v(S), v(C)])
					.then(([e, t]) => {
						((w = e),
							(T = t),
							(E = _(w)),
							(D = _(T)),
							W(),
							ie(),
							oe());
					})
					.catch((t) => {
						(console.error(t), (e.innerHTML = ``));
					}));
			let G = 0,
				K = 0.001,
				q = 0;
			function J() {
				a && q === 0 && (q = 1);
			}
			e.addEventListener(`mouseenter`, J);
			let ae = 0;
			function oe() {
				let e = a ? (q === 1 || q === 2 ? 1 : 0) : o;
				if (
					((G = a
						? Math.abs(e - G) < K
							? e
							: G + (e - G) * Math.max(0.001, Math.min(0.5, i))
						: o),
					a && q === 1 && Math.abs(1 - G) < K && (q = 2),
					m.useProgram(b),
					m.uniform1f(x.uT, G),
					m.uniform1f(x.uChaos, Math.max(0, r)),
					m.uniform1f(x.uGammaB, s),
					m.clear(m.COLOR_BUFFER_BIT),
					E && D && A > 0 && z && j && M && N && R)
				) {
					(m.activeTexture(m.TEXTURE0),
						m.bindTexture(m.TEXTURE_2D, E),
						m.activeTexture(m.TEXTURE1),
						m.bindTexture(m.TEXTURE_2D, D));
					let e = q === 1 || q === 2;
					(re(j, x.aPos0),
						re(e ? M : N, x.aPos1),
						re(e ? P : I, x.aS0),
						re(e ? F : L, x.aS1),
						re(R, x.aRnd),
						m.drawArrays(m.POINTS, 0, A));
				}
				let t = q === 1 || q === 2,
					n = t ? G : 1 - G,
					l = Math.min(1, Math.max(0, (n - 0.9) / 0.1));
				((f.style.opacity = String(t ? l : 0)),
					(c.style.opacity = String(t ? 0 : l)),
					(ae = requestAnimationFrame(oe)));
			}
			return () => {
				(cancelAnimationFrame(ae),
					u.removeEventListener(`resize`, W),
					e.removeEventListener(`mouseenter`, J),
					ne.terminate());
				try {
					(E && m.deleteTexture(E),
						D && m.deleteTexture(D),
						j && m.deleteBuffer(j),
						M && m.deleteBuffer(M),
						N && m.deleteBuffer(N),
						P && m.deleteBuffer(P),
						F && m.deleteBuffer(F),
						I && m.deleteBuffer(I),
						L && m.deleteBuffer(L),
						R && m.deleteBuffer(R),
						b && m.deleteProgram(b));
				} catch {}
				(f && f.parentNode && f.parentNode.removeChild(f),
					c && c.parentNode && c.parentNode.removeChild(c),
					p.parentNode && p.parentNode.removeChild(p));
			};
		}, [t, n, r, i, a, o, s, l]),
		p(`div`, {
			ref: d,
			style: {
				width: `100%`,
				height: `100%`,
				position: `relative`,
				background: `transparent`,
			},
		})
	);
}
var Pr = e(() => {
	(C(),
		y(),
		l(),
		q(),
		(Nr.defaultProps = { width: 600, height: 600 }),
		P(Nr, {
			img0: { type: J.Image, title: `Image 1` },
			img1: { type: J.Image, title: `Image 2` },
			chaos: {
				type: J.Number,
				title: `Chaos`,
				min: 0,
				max: 1.5,
				step: 0.005,
				defaultValue: 0.06,
			},
			speed: {
				type: J.Number,
				title: `Speed`,
				min: 0.01,
				max: 0.3,
				step: 0.005,
				defaultValue: 0.08,
			},
			gatherGamma: {
				type: J.Number,
				title: `Gather γ`,
				min: 0.1,
				max: 20,
				step: 0.1,
				defaultValue: 2,
			},
			tile: {
				type: J.Number,
				title: `Grid Spacing`,
				min: 1,
				max: 64,
				step: 1,
				defaultValue: 32,
			},
			hover: {
				type: J.Boolean,
				title: `Hover`,
				enabledTitle: `on`,
				disabledTitle: `manual`,
				defaultValue: !0,
			},
			tManual: {
				type: J.Number,
				title: `t`,
				min: 0,
				max: 1,
				step: 0.001,
				hidden: (e) => e.hover !== !1,
				defaultValue: 0,
			},
		}));
});
function Fr(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ir,
	Lr,
	Rr,
	zr,
	Br,
	Vr,
	Hr,
	Ur,
	Wr,
	Gr,
	Kr,
	qr,
	Jr,
	Yr,
	Xr,
	Zr,
	Qr,
	$r,
	ei,
	ti = e(() => {
		(y(),
			q(),
			N(),
			l(),
			Wt(),
			Pr(),
			ft(),
			Ot(),
			Bt(),
			$t(),
			(Ir = B(Qt)),
			(Lr = B(Gt)),
			(Rr = B(Nr)),
			(zr = [
				`q3tvGsm_J`,
				`Q8rDTe15S`,
				`c8SrvHYF9`,
				`plIr2m6l7`,
				`VjyEGkyWs`,
				`HYDMSB1QK`,
			]),
			(Br = `framer-FM2T0`),
			(Vr = {
				c8SrvHYF9: `framer-v-j00y6n`,
				HYDMSB1QK: `framer-v-1keryp2`,
				plIr2m6l7: `framer-v-14662ri`,
				q3tvGsm_J: `framer-v-48q2no`,
				Q8rDTe15S: `framer-v-efqczw`,
				VjyEGkyWs: `framer-v-z99p1x`,
			}),
			(Hr = {
				delay: 0,
				duration: 0.6,
				ease: [0.44, 0, 0.56, 1],
				type: `tween`,
			}),
			(Ur = (e, t) => `translateX(-50%) ${t}`),
			(Wr = (e, t) => `translate(-50%, -50%) ${t}`),
			(Gr = (e, t) => `translateY(-50%) ${t}`),
			(Kr = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e.src
					: typeof e == `string`
						? e
						: void 0),
			(qr = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(Jr = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(Yr = k.create(i)),
			(Xr = {
				"Desktop - 1200": `q3tvGsm_J`,
				"Play Video - Desktop": `plIr2m6l7`,
				"Play Video - Phone": `HYDMSB1QK`,
				"Play Video - Tablet": `VjyEGkyWs`,
				Phone: `c8SrvHYF9`,
				Tablet: `Q8rDTe15S`,
			}),
			(Zr = ({
				cursor: e,
				decor: t,
				headingOfSection: n,
				height: r,
				id: i,
				imageForTabletPhone: a,
				imageMorph1: o,
				imageMorph2: s,
				videoURL: c,
				width: l,
				...u
			}) => ({
				...u,
				DPfbMkKqn: e ?? u.DPfbMkKqn,
				MbS_AXcdB: o ??
					u.MbS_AXcdB ?? {
						pixelHeight: 1672,
						pixelWidth: 3032,
						src: `https://framerusercontent.com/images/bkeTimPti7XlErXV4jwwjfiyBWM.jpg?scale-down-to=2048&width=3032&height=1672`,
						srcSet: `https://framerusercontent.com/images/bkeTimPti7XlErXV4jwwjfiyBWM.jpg?scale-down-to=512&width=3032&height=1672 512w,https://framerusercontent.com/images/bkeTimPti7XlErXV4jwwjfiyBWM.jpg?scale-down-to=1024&width=3032&height=1672 1024w,https://framerusercontent.com/images/bkeTimPti7XlErXV4jwwjfiyBWM.jpg?scale-down-to=2048&width=3032&height=1672 2048w,https://framerusercontent.com/images/bkeTimPti7XlErXV4jwwjfiyBWM.jpg?width=3032&height=1672 3032w`,
					},
				QItNFelJa: n ?? u.QItNFelJa ?? `Showreel`,
				S2j9uFa1o: s ??
					u.S2j9uFa1o ?? {
						pixelHeight: 1672,
						pixelWidth: 3032,
						src: `https://framerusercontent.com/images/IILGFHDcQECBZpzfU3sVdnZwN8.jpg?scale-down-to=2048&width=3032&height=1672`,
						srcSet: `https://framerusercontent.com/images/IILGFHDcQECBZpzfU3sVdnZwN8.jpg?scale-down-to=512&width=3032&height=1672 512w,https://framerusercontent.com/images/IILGFHDcQECBZpzfU3sVdnZwN8.jpg?scale-down-to=1024&width=3032&height=1672 1024w,https://framerusercontent.com/images/IILGFHDcQECBZpzfU3sVdnZwN8.jpg?scale-down-to=2048&width=3032&height=1672 2048w,https://framerusercontent.com/images/IILGFHDcQECBZpzfU3sVdnZwN8.jpg?width=3032&height=1672 3032w`,
					},
				variant: Xr[u.variant] ?? u.variant ?? `q3tvGsm_J`,
				vB7BwHDeC: t ?? u.vB7BwHDeC ?? `⧖⧎⟡`,
				Wi_6Jp2U0: c ?? u.Wi_6Jp2U0 ?? `https://vimeo.com/642263700`,
				zCA22Iyd_: a ?? u.zCA22Iyd_,
			})),
			(Qr = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			($r = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e(),
						c = X(),
						{
							style: l,
							className: u,
							layoutId: d,
							variant: f,
							QItNFelJa: m,
							vB7BwHDeC: h,
							DPfbMkKqn: g,
							Wi_6Jp2U0: y,
							MbS_AXcdB: b,
							S2j9uFa1o: x,
							zCA22Iyd_: C,
							...w
						} = Zr(e),
						{
							baseVariant: T,
							classNames: E,
							clearLoadingGesture: D,
							gestureHandlers: O,
							gestureVariant: A,
							isLoading: j,
							setGestureState: N,
							setVariant: P,
							variants: F,
						} = W({
							cycleOrder: zr,
							defaultVariant: `q3tvGsm_J`,
							ref: r,
							variant: f,
							variantClassNames: Vr,
						}),
						I = Qr(e, F),
						{ activeVariantCallback: L, delay: z } = oe(T),
						ee = L(async (...e) => {
							(N({ isPressed: !1 }), P(`VjyEGkyWs`));
						}),
						B = L(async (...e) => {
							(N({ isPressed: !1 }), P(`HYDMSB1QK`));
						}),
						V = L(async (...e) => {
							P(`plIr2m6l7`);
						}),
						te = U(Br, Ut, jt, ht),
						ne = () => !![`Q8rDTe15S`, `c8SrvHYF9`].includes(T),
						re = () =>
							![`plIr2m6l7`, `VjyEGkyWs`, `HYDMSB1QK`].includes(
								T,
							),
						ie = () => ![`Q8rDTe15S`, `c8SrvHYF9`].includes(T);
					return p(M, {
						id: d ?? a,
						children: p(Yr, {
							animate: F,
							initial: !1,
							children: p(Jr, {
								value: Hr,
								children: p(k.section, {
									...w,
									...O,
									className: U(te, `framer-48q2no`, u, E),
									"data-framer-name": `Desktop - 1200`,
									layoutDependency: I,
									layoutId: `q3tvGsm_J`,
									ref: r,
									style: { ...l },
									...Fr(
										{
											c8SrvHYF9: {
												"data-framer-name": `Phone`,
												"data-highlight": !0,
												onTap: B,
											},
											HYDMSB1QK: {
												"data-framer-name": `Play Video - Phone`,
											},
											plIr2m6l7: {
												"data-framer-name": `Play Video - Desktop`,
											},
											Q8rDTe15S: {
												"data-framer-name": `Tablet`,
												"data-highlight": !0,
												onTap: ee,
											},
											VjyEGkyWs: {
												"data-framer-name": `Play Video - Tablet`,
											},
										},
										T,
										A,
									),
									children: v(k.div, {
										className: `framer-vu71w6`,
										"data-framer-cursor": g,
										"data-framer-name": `Container`,
										"data-highlight": !0,
										layoutDependency: I,
										layoutId: `YNhAAYpRe`,
										onTap: V,
										...Fr(
											{
												c8SrvHYF9: {
													"data-framer-cursor":
														void 0,
													"data-highlight": void 0,
													onTap: void 0,
												},
												HYDMSB1QK: {
													"data-framer-cursor":
														void 0,
													"data-highlight": void 0,
													onTap: void 0,
												},
												plIr2m6l7: {
													"data-framer-cursor":
														void 0,
													"data-highlight": void 0,
													onTap: void 0,
												},
												Q8rDTe15S: {
													"data-framer-cursor":
														void 0,
													"data-highlight": void 0,
													onTap: void 0,
												},
												VjyEGkyWs: {
													"data-framer-cursor":
														void 0,
													"data-highlight": void 0,
													onTap: void 0,
												},
											},
											T,
											A,
										),
										children: [
											ne() &&
												p(Z, {
													...Fr(
														{
															c8SrvHYF9: {
																height: 80,
																width: `80px`,
																y:
																	(c?.y ||
																		0) +
																	0 +
																	(((c?.height ||
																		200) -
																		0 -
																		706.5) /
																		2 +
																		0 +
																		0) +
																	313.8207,
															},
															Q8rDTe15S: {
																height: 95,
																width: `95px`,
																y:
																	(c?.y ||
																		0) +
																	0 +
																	(((c?.height ||
																		533.5) -
																		0 -
																		955) /
																		2 +
																		0 +
																		0) +
																	430,
															},
														},
														T,
														A,
													),
													children: p(H, {
														className: `framer-13v8m7x-container`,
														"data-framer-name": `Play`,
														layoutDependency: I,
														layoutId: `JzE5F_0Wn-container`,
														name: `Play`,
														nodeId: `JzE5F_0Wn`,
														rendersWithMotion: !0,
														scopeId: `HUsIeZsxo`,
														transformTemplate: Ur,
														...Fr(
															{
																c8SrvHYF9: {
																	transformTemplate:
																		Gr,
																},
																Q8rDTe15S: {
																	transformTemplate:
																		Wr,
																},
															},
															T,
															A,
														),
														children: p(Qt, {
															height: `100%`,
															id: `JzE5F_0Wn`,
															layoutId: `JzE5F_0Wn`,
															name: `Play`,
															style: {
																height: `100%`,
																width: `100%`,
															},
															variant: `dlI3XgZzv`,
															width: `100%`,
														}),
													}),
												}),
											p(Z, {
												children: p(H, {
													className: `framer-46sdos-container`,
													isAuthoredByUser: !0,
													isModuleExternal: !0,
													layoutDependency: I,
													layoutId: `SImYkWazB-container`,
													nodeId: `SImYkWazB`,
													rendersWithMotion: !0,
													scopeId: `HUsIeZsxo`,
													style: { opacity: 0 },
													variants: {
														HYDMSB1QK: {
															opacity: 1,
														},
														plIr2m6l7: {
															opacity: 1,
														},
														VjyEGkyWs: {
															opacity: 1,
														},
													},
													children: p(Gt, {
														autoplay: !1,
														backgroundColor: `rgba(0, 0, 0, 0)`,
														borderRadius: 10,
														bottomLeftRadius: 10,
														bottomRightRadius: 10,
														controls: !0,
														height: `100%`,
														id: `SImYkWazB`,
														isMixedBorderRadius: !1,
														layoutId: `SImYkWazB`,
														loop: !1,
														mute: !1,
														style: {
															height: `100%`,
															width: `100%`,
														},
														topLeftRadius: 10,
														topRightRadius: 10,
														video: `https://vimeo.com/642263700`,
														width: `100%`,
														...Fr(
															{
																HYDMSB1QK: {
																	autoplay:
																		!0,
																	video: y,
																},
																plIr2m6l7: {
																	autoplay:
																		!0,
																	video: y,
																},
																VjyEGkyWs: {
																	autoplay:
																		!0,
																	video: y,
																},
															},
															T,
															A,
														),
													}),
												}),
											}),
											re() &&
												v(k.div, {
													className: `framer-19kjlvo`,
													"data-framer-name": `Morph`,
													layoutDependency: I,
													layoutId: `SnN3SjnSe`,
													style: {
														backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
														borderBottomLeftRadius: 8,
														borderBottomRightRadius: 8,
														borderTopLeftRadius: 8,
														borderTopRightRadius: 8,
													},
													children: [
														ie() &&
															p(Z, {
																children: p(H, {
																	className: `framer-1d59cz5-container`,
																	isAuthoredByUser:
																		!0,
																	layoutDependency:
																		I,
																	layoutId: `eA95qW61Z-container`,
																	nodeId: `eA95qW61Z`,
																	rendersWithMotion:
																		!0,
																	scopeId: `HUsIeZsxo`,
																	children: p(
																		Nr,
																		{
																			chaos: 0.805,
																			gatherGamma: 17.4,
																			height: `100%`,
																			hover: !0,
																			id: `eA95qW61Z`,
																			img0: Kr(
																				b,
																			),
																			img1: Kr(
																				x,
																			),
																			layoutId: `eA95qW61Z`,
																			speed: 0.08,
																			style: {
																				height: `100%`,
																				width: `100%`,
																			},
																			tile: 1,
																			tManual: 0,
																			width: `100%`,
																		},
																	),
																}),
															}),
														ne() &&
															p(se, {
																background: {
																	alt: ``,
																	fit: `fill`,
																	...qr(C),
																},
																className: `framer-1o22iez`,
																layoutDependency:
																	I,
																layoutId: `VhkX1NtIy`,
																...Fr(
																	{
																		c8SrvHYF9:
																			{
																				background:
																					{
																						alt: ``,
																						fit: `fill`,
																						loading:
																							K(
																								(c?.y ||
																									0) +
																									0 +
																									(((c?.height ||
																										200) -
																										0 -
																										706.5) /
																										2 +
																										0 +
																										0) +
																									40 +
																									213.5 +
																									0 +
																									0,
																							),
																						sizes: `calc(min(${c?.width || `100vw`}, 1600px) - 4px)`,
																						...qr(
																							C,
																						),
																					},
																			},
																		Q8rDTe15S:
																			{
																				background:
																					{
																						alt: ``,
																						fit: `fill`,
																						loading:
																							K(
																								(c?.y ||
																									0) +
																									0 +
																									(((c?.height ||
																										533.5) -
																										0 -
																										955) /
																										2 +
																										0 +
																										0) +
																									60 +
																									422 +
																									0 +
																									0,
																							),
																						sizes: `calc(min(${c?.width || `100vw`}, 1600px) - 60px)`,
																						...qr(
																							C,
																						),
																					},
																			},
																	},
																	T,
																	A,
																),
															}),
													],
												}),
											re() &&
												v(k.div, {
													className: `framer-bdg84c`,
													layoutDependency: I,
													layoutId: `HnSKDUoOm`,
													transformTemplate: Gr,
													children: [
														p(R, {
															__fromCanvasComponent:
																!0,
															children: p(i, {
																children: p(
																	k.h3,
																	{
																		className: `framer-styles-preset-1yuak3c`,
																		"data-styles-preset": `zczqo4Z8y`,
																		style: {
																			"--framer-text-color": `var(--extracted-a0htzi, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `⧖⧎⟡`,
																	},
																),
															}),
															className: `framer-sphilo`,
															"data-framer-name": `⧖⧎⟡`,
															fonts: [`Inter`],
															layoutDependency: I,
															layoutId: `iaZYd_Q8c`,
															style: {
																"--extracted-a0htzi": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																"--framer-paragraph-spacing": `0px`,
															},
															text: h,
															variants: {
																c8SrvHYF9: {
																	"--extracted-1w1cjl5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
																Q8rDTe15S: {
																	"--extracted-1eung3n": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
															},
															verticalAlignment: `top`,
															withExternalLayout:
																!0,
															...Fr(
																{
																	c8SrvHYF9: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h6,
																							{
																								className: `framer-styles-preset-nkm6se`,
																								"data-styles-preset": `BaUGQBb6A`,
																								style: {
																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `⧖⧎⟡`,
																							},
																						),
																				},
																			),
																	},
																	Q8rDTe15S: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h4,
																							{
																								className: `framer-styles-preset-1ri87jd`,
																								"data-styles-preset": `LuOKrK4j8`,
																								style: {
																									"--framer-text-color": `var(--extracted-1eung3n, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `⧖⧎⟡`,
																							},
																						),
																				},
																			),
																	},
																},
																T,
																A,
															),
														}),
														p(R, {
															__fromCanvasComponent:
																!0,
															children: p(i, {
																children: p(
																	k.h3,
																	{
																		className: `framer-styles-preset-1yuak3c`,
																		"data-styles-preset": `zczqo4Z8y`,
																		style: {
																			"--framer-text-color": `var(--extracted-a0htzi, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `Showreel`,
																	},
																),
															}),
															className: `framer-16wec4f`,
															"data-framer-name": `Showreel`,
															fonts: [`Inter`],
															layoutDependency: I,
															layoutId: `ypKoVunAn`,
															style: {
																"--extracted-a0htzi": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																"--framer-paragraph-spacing": `0px`,
															},
															text: m,
															variants: {
																c8SrvHYF9: {
																	"--extracted-1w1cjl5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
																Q8rDTe15S: {
																	"--extracted-1eung3n": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
															},
															verticalAlignment: `top`,
															withExternalLayout:
																!0,
															...Fr(
																{
																	c8SrvHYF9: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h6,
																							{
																								className: `framer-styles-preset-nkm6se`,
																								"data-styles-preset": `BaUGQBb6A`,
																								style: {
																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `Showreel`,
																							},
																						),
																				},
																			),
																	},
																	Q8rDTe15S: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h4,
																							{
																								className: `framer-styles-preset-1ri87jd`,
																								"data-styles-preset": `LuOKrK4j8`,
																								style: {
																									"--framer-text-color": `var(--extracted-1eung3n, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `Showreel`,
																							},
																						),
																				},
																			),
																	},
																},
																T,
																A,
															),
														}),
													],
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
					`.framer-FM2T0.framer-w4rwwp, .framer-FM2T0 .framer-w4rwwp { display: block; }`,
					`.framer-FM2T0.framer-48q2no { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
					`.framer-FM2T0 .framer-vu71w6 { align-content: center; align-items: center; cursor: pointer; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 90px 40px 90px 40px; position: relative; width: 100%; }`,
					`.framer-FM2T0 .framer-13v8m7x-container { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 80px); left: 50%; position: absolute; top: 92px; width: 80px; z-index: 1; }`,
					`.framer-FM2T0 .framer-46sdos-container { aspect-ratio: 1.7781376518218623 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 1px); position: relative; width: 0%; }`,
					`.framer-FM2T0 .framer-19kjlvo { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-FM2T0 .framer-1d59cz5-container { aspect-ratio: 1.8152350081037276 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 617px); position: relative; width: 100%; }`,
					`.framer-FM2T0 .framer-1o22iez { aspect-ratio: 1.8159806295399517 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 110px); overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-FM2T0 .framer-bdg84c { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; mix-blend-mode: difference; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; right: 250px; top: 50%; width: min-content; z-index: 1; }`,
					`.framer-FM2T0 .framer-sphilo, .framer-FM2T0 .framer-16wec4f { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
					`.framer-FM2T0.framer-v-efqczw.framer-48q2no { cursor: pointer; width: 810px; }`,
					`.framer-FM2T0.framer-v-efqczw .framer-vu71w6, .framer-FM2T0.framer-v-z99p1x .framer-vu71w6 { cursor: unset; padding: 60px 30px 60px 30px; }`,
					`.framer-FM2T0.framer-v-efqczw .framer-13v8m7x-container { height: var(--framer-aspect-ratio-supported, 95px); top: 50%; width: 95px; z-index: 4; }`,
					`.framer-FM2T0.framer-v-efqczw .framer-1o22iez { height: var(--framer-aspect-ratio-supported, 413px); }`,
					`.framer-FM2T0.framer-v-efqczw .framer-bdg84c { right: 75px; top: 50%; }`,
					`.framer-FM2T0.framer-v-j00y6n.framer-48q2no { cursor: pointer; width: 390px; }`,
					`.framer-FM2T0.framer-v-j00y6n .framer-vu71w6, .framer-FM2T0.framer-v-1keryp2 .framer-vu71w6 { cursor: unset; padding: 40px 2px 40px 2px; }`,
					`.framer-FM2T0.framer-v-j00y6n .framer-13v8m7x-container { left: unset; right: 35px; top: 50%; z-index: 3; }`,
					`.framer-FM2T0.framer-v-j00y6n .framer-46sdos-container { height: var(--framer-aspect-ratio-supported, 112px); }`,
					`.framer-FM2T0.framer-v-j00y6n .framer-bdg84c { left: 35px; right: unset; top: 50%; }`,
					`.framer-FM2T0.framer-v-14662ri .framer-vu71w6 { cursor: unset; }`,
					`.framer-FM2T0.framer-v-14662ri .framer-46sdos-container { height: var(--framer-aspect-ratio-supported, 630px); width: 100%; }`,
					`.framer-FM2T0.framer-v-z99p1x.framer-48q2no { width: 810px; }`,
					`.framer-FM2T0.framer-v-z99p1x .framer-46sdos-container { height: var(--framer-aspect-ratio-supported, 422px); width: 100%; }`,
					`.framer-FM2T0.framer-v-1keryp2.framer-48q2no { width: 390px; }`,
					`.framer-FM2T0.framer-v-1keryp2 .framer-46sdos-container { height: var(--framer-aspect-ratio-supported, 112px); width: 100%; }`,
					...Vt,
					...kt,
					...pt,
				],
				`framer-FM2T0`,
			)),
			(ei = $r),
			($r.displayName = `Showreel - Section`),
			($r.defaultProps = { height: 798, width: 1200 }),
			P($r, {
				variant: {
					options: [
						`q3tvGsm_J`,
						`Q8rDTe15S`,
						`c8SrvHYF9`,
						`plIr2m6l7`,
						`VjyEGkyWs`,
						`HYDMSB1QK`,
					],
					optionTitles: [
						`Desktop - 1200`,
						`Tablet`,
						`Phone`,
						`Play Video - Desktop`,
						`Play Video - Tablet`,
						`Play Video - Phone`,
					],
					title: `Variant`,
					type: J.Enum,
				},
				QItNFelJa: {
					defaultValue: `Showreel`,
					displayTextArea: !1,
					title: `Heading of Section`,
					type: J.String,
				},
				vB7BwHDeC: {
					defaultValue: `⧖⧎⟡`,
					displayTextArea: !1,
					title: `Decor`,
					type: J.String,
				},
				DPfbMkKqn: { title: `Cursor`, type: J.CustomCursor },
				Wi_6Jp2U0: {
					defaultValue: `https://vimeo.com/642263700`,
					description: `Vimeo`,
					displayTextArea: !0,
					title: `Video URL`,
					type: J.String,
				},
				MbS_AXcdB: {
					__defaultAssetReference: `data:framer/asset-reference,bkeTimPti7XlErXV4jwwjfiyBWM.jpg?originalFilename=Frame+51.jpg&width=3032&height=1672`,
					title: `Image Morph 1`,
					type: J.ResponsiveImage,
				},
				S2j9uFa1o: {
					__defaultAssetReference: `data:framer/asset-reference,IILGFHDcQECBZpzfU3sVdnZwN8.jpg?originalFilename=2%402x.jpg&width=3032&height=1672`,
					title: `Image Morph 2`,
					type: J.ResponsiveImage,
				},
				zCA22Iyd_: {
					title: `Image for Tablet  & Phone`,
					type: J.ResponsiveImage,
				},
			}),
			de(
				$r,
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
					...Ir,
					...Lr,
					...Rr,
					...G(Ht),
					...G(At),
					...G(mt),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function ni(e) {
	return e
		? typeof e == `string`
			? { family: e, weight: 400, style: `normal` }
			: {
					family: e.fontFamily ?? e.family ?? `inherit`,
					weight: e.fontWeight ?? e.weight ?? 400,
					style: e.fontStyle ?? e.style ?? `normal`,
				}
		: { family: `inherit`, weight: 400, style: `normal` };
}
function ri(e) {
	let { style: t, ...r } = e,
		i = _(null),
		s = _(null),
		l = _([]),
		u = _(0),
		[d, f] = a({ w: 0, h: 0 }),
		[m, h] = a(!1);
	n(() => {
		let e = i.current;
		if (!e) return;
		let t = new ResizeObserver((e) => {
			let { width: t, height: n } = e[0].contentRect;
			f({ w: t, h: n });
		});
		return (t.observe(e), () => t.disconnect());
	}, []);
	let g = o(() => (r.text || ``).split(``), [r.text]);
	c(() => {
		l.current = l.current.slice(0, g.length);
	}, [g.length]);
	let v = _([]),
		y = _([]),
		b = _(!1);
	return (
		c(() => {
			let e = !1;
			return (
				(b.current = !1),
				h(!1),
				(async () => {
					let { family: t, weight: n, style: i } = ni(r.font),
						a = ai(t);
					try {
						document.fonts &&
							a !== `inherit` &&
							(await document.fonts.load(
								`${i || `normal`} ${n} ${r.size}px "${a}"`,
							),
							await document.fonts.ready);
					} catch {}
					if (e) return;
					let o = document.createElement(`canvas`).getContext(`2d`);
					if (!o) return;
					o.font = `${i || `normal`} ${n} ${r.size}px "${a}"`;
					let s = g.map((e) =>
						Math.max(1, Math.ceil(o.measureText(e).width)),
					);
					v.current = s;
					let c = Array(s.length).fill(0);
					for (let e = 1; e < s.length; e++)
						c[e] = c[e - 1] + (s[e - 1] + s[e]) / 2 + r.tracking;
					((y.current = c), (b.current = !0));
				})(),
				() => {
					e = !0;
				}
			);
		}, [g.join(``), r.size, r.font, r.tracking]),
		c(() => {
			let e = s.current,
				{ family: t, weight: n, style: i } = ni(r.font);
			e &&
				Object.assign(e.style, {
					position: `absolute`,
					inset: `0px`,
					pointerEvents: `none`,
					userSelect: `none`,
					fontFamily: t,
					fontWeight: String(n),
					fontStyle: i || `normal`,
					fontSize: `${r.size}px`,
					color: r.color,
					opacity: m ? `1` : `0`,
					transition: `opacity 140ms linear`,
				});
		}, [r.font, r.size, r.color, m]),
		c(() => {
			u.current && cancelAnimationFrame(u.current);
			let e = g.length;
			if (e === 0) return;
			let t = (r.angleDeg * Math.PI) / 180,
				n = Math.cos(t),
				a = Math.sin(t);
			Math.abs(n) >= Math.abs(a)
				? n < 0 && ((n = -n), (a = -a))
				: a < 0 && ((n = -n), (a = -a));
			let o = -a,
				s = n,
				c = performance.now(),
				f = 0,
				p = 2 * Math.PI * r.waveSpeed,
				_ = (2 * Math.PI) / Math.max(1, r.waveLength),
				x = (t) => {
					let g = t - c;
					((c = t), (f += g / 1e3));
					let S = i.current?.getBoundingClientRect(),
						C = d.w || S?.width || ii(r.width),
						w = d.h || S?.height || ii(r.height),
						T = v.current,
						E = y.current;
					if (
						!C ||
						!w ||
						!b.current ||
						E.length !== e ||
						T.length !== e
					) {
						(m && h(!1), (u.current = requestAnimationFrame(x)));
						return;
					}
					m || h(!0);
					let D = C * 0.5,
						O = w * 0.5,
						k = e > 1 ? E[e - 1] : 0,
						A = T[0] || 0,
						j = T[e - 1] || 0,
						M = k / 2 + (j - A) / 4,
						N = D - n * M + o * r.offsetNormal,
						P = O - a * M + s * r.offsetNormal;
					for (let t = 0; t < e; t++) {
						let e = N + n * (E[t] || 0),
							i = P + a * (E[t] || 0),
							c = r.waveAmplitude * Math.exp(-t * r.waveDecay),
							u = p * f - _ * t,
							d = e + o * c * Math.sin(u),
							m = i + s * c * Math.sin(u),
							h = l.current[t];
						h &&
							((h.style.position = `absolute`),
							(h.style.transform = `translate3d(${d}px, ${m}px, 0) translate(-50%, -50%)`),
							(h.style.willChange = `transform`));
					}
					u.current = requestAnimationFrame(x);
				};
			return (
				(u.current = requestAnimationFrame(x)),
				() => cancelAnimationFrame(u.current)
			);
		}, [
			g.length,
			r.text,
			r.size,
			r.font,
			r.angleDeg,
			r.offsetNormal,
			r.tracking,
			r.waveAmplitude,
			r.waveLength,
			r.waveSpeed,
			r.waveDecay,
			r.width,
			r.height,
			d.w,
			d.h,
			m,
		]),
		p(`div`, {
			ref: i,
			style: {
				position: `relative`,
				width:
					typeof r.width == `number`
						? `${r.width}px`
						: (r.width ?? `100%`),
				height:
					typeof r.height == `number`
						? `${r.height}px`
						: (r.height ?? `100%`),
				minWidth: 1,
				minHeight: 1,
				overflow: `visible`,
				background: `transparent`,
				...(t || {}),
			},
			children: p(`div`, {
				ref: s,
				children: g.map((e, t) =>
					p(
						`div`,
						{
							ref: (e) => {
								e && (l.current[t] = e);
							},
							children: e,
						},
						t,
					),
				),
			}),
		})
	);
}
var ii,
	ai,
	oi = e(() => {
		(y(),
			l(),
			q(),
			(ii = (e) => (typeof e == `number` ? e : 0)),
			(ai = (e) =>
				e
					.split(`,`)[0]
					.trim()
					.replace(/^['"]|['"]$/g, ``)),
			(ri.defaultProps = { width: `100%`, height: `100%` }),
			P(ri, {
				text: {
					type: J.String,
					title: `Text`,
					defaultValue: `DST AGENCY`,
				},
				size: {
					type: J.Number,
					title: `Font Size`,
					min: 8,
					max: 200,
					step: 1,
					defaultValue: 26,
				},
				color: {
					type: J.Color,
					title: `Color`,
					defaultValue: `#FFFFFF`,
				},
				font: { type: J.Font, title: `Font` },
				angleDeg: {
					type: J.Number,
					title: `Angle°`,
					min: 0,
					max: 360,
					step: 1,
					defaultValue: 200,
				},
				offsetNormal: {
					type: J.Number,
					title: `Normal Offset`,
					min: -400,
					max: 400,
					step: 1,
					defaultValue: 0,
				},
				tracking: {
					type: J.Number,
					title: `Letter-Spacing`,
					min: 0,
					max: 60,
					step: 1,
					defaultValue: 20,
				},
				waveAmplitude: {
					type: J.Number,
					title: `Wave Amp`,
					min: 0,
					max: 200,
					step: 1,
					defaultValue: 40,
				},
				waveLength: {
					type: J.Number,
					title: `Wave Len`,
					min: 1,
					max: 20,
					step: 1,
					defaultValue: 10,
				},
				waveSpeed: {
					type: J.Number,
					title: `Wave Speed`,
					min: 0,
					max: 4,
					step: 0.05,
					defaultValue: 0.7,
				},
				waveDecay: {
					type: J.Number,
					title: `Wave Decay`,
					min: 0,
					max: 0.3,
					step: 0.01,
					defaultValue: 0.07,
				},
			}));
	}),
	si,
	ci,
	li,
	ui,
	di,
	fi = e(() => {
		(y(),
			q(),
			l(),
			(si = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 0 0 L 0 3.391 L 5.6 3.391 L 5.6 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="3.391300000000001px" id="hEmVdjDoE" transform="translate(17.2 28.609)" width="5.600000000000001px"/><path d="M 24.391 5.981 L 3.609 6.207 L 3.609 0 L 0 0 L 0 16.087 L 3.609 16.087 L 3.609 9.599 L 24.391 9.375 L 24.391 16.087 L 28 16.087 L 28 0 L 24.391 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="16.087px" id="c2JHcVE9L" transform="translate(6 8)" width="28px"/><path d="M 0 3.391 L 5.6 3.391 L 5.6 0 L 0 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="3.391300000000001px" id="MRH9jPW1c" transform="translate(21.68 20.696)" width="5.600000000000001px"/><path d="M 0 3.391 L 5.6 3.391 L 5.6 0 L 0 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="3.391300000000001px" id="V2Cv70bu1" transform="translate(12.72 20.696)" width="5.600000000000001px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(ci = h((e, t) => {
				let { animated: n, layoutId: r, children: i, ...a } = e;
				return n
					? p(k.div, { ...a, layoutId: r, ref: t })
					: p(`div`, { ...a, ref: t });
			})),
			(li = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(ui = z(
				h(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: a,
						...o
					} = li(e);
					return p(ci, {
						...o,
						className: U(`framer-CzzDM`, r),
						layoutId: i,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-CzzDM { -webkit-mask: ${si}; aspect-ratio: 1; background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); mask: ${si}; width: 40px; }`,
				],
				`framer-CzzDM`,
			)),
			(ui.displayName = `Logo 4`),
			(di = ui));
	}),
	pi,
	mi,
	hi,
	gi,
	_i,
	vi = e(() => {
		(y(),
			q(),
			l(),
			(pi = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 25 24.602 C 25 28.712 18.275 33.039 16 29.5 C 11.5 22.5 7.991 26.595 2.857 23.829 C 1.094 22.878 0 21.074 0 19.117 C 0 13.759 0 10.755 0 5.398 C 0 1.288 4.551 -1.31 8.254 0.686 C 13.387 3.453 17.009 3.405 22.143 6.172 C 23.906 7.122 25 8.926 25 10.883 C 25 16.241 25 19.245 25 24.602 Z M 19.445 9.167 C 19.445 8.639 19.205 8.137 18.789 7.795 C 15.164 4.82 12.229 4.41 8.604 1.434 C 7.4 0.446 5.556 1.277 5.556 2.806 C 5.556 9.846 5.556 13.793 5.556 20.833 C 5.556 21.361 5.795 21.863 6.211 22.205 C 9.836 25.18 13 21 16.396 28.566 C 17.034 29.986 19.445 28.723 19.445 27.194 C 19.445 20.154 19.445 16.207 19.445 9.167 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="30.80705908281936px" id="TDNUQTOcr" transform="translate(7.5 4.5)" width="25.000144630791077px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(mi = h((e, t) => {
				let { animated: n, layoutId: r, children: i, ...a } = e;
				return n
					? p(k.div, { ...a, layoutId: r, ref: t })
					: p(`div`, { ...a, ref: t });
			})),
			(hi = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(gi = z(
				h(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: a,
						...o
					} = hi(e);
					return p(mi, {
						...o,
						className: U(`framer-FKGnV`, r),
						layoutId: i,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-FKGnV { -webkit-mask: ${pi}; aspect-ratio: 1; background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); mask: ${pi}; width: 40px; }`,
				],
				`framer-FKGnV`,
			)),
			(gi.displayName = `Logo 2`),
			(_i = gi));
	}),
	yi,
	bi,
	xi,
	Si,
	Ci,
	wi = e(() => {
		(y(),
			q(),
			l(),
			(yi = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 15.434 16.572 L 15.434 7.214 L 21 5.184 L 21 31 L 9.772 18.944 C 9.772 18.944 9.627 14.426 8.881 12.15 C 7.397 7.62 5.566 7.214 5.566 7.214 L 5.566 23.786 L 0 26.425 L 0 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="31px" id="gxFWKYmN4" transform="translate(10 5)" width="21px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(bi = h((e, t) => {
				let { animated: n, layoutId: r, children: i, ...a } = e;
				return n
					? p(k.div, { ...a, layoutId: r, ref: t })
					: p(`div`, { ...a, ref: t });
			})),
			(xi = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(Si = z(
				h(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: a,
						...o
					} = xi(e);
					return p(bi, {
						...o,
						className: U(`framer-5kPfP`, r),
						layoutId: i,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-5kPfP { -webkit-mask: ${yi}; aspect-ratio: 1; background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); mask: ${yi}; width: 40px; }`,
				],
				`framer-5kPfP`,
			)),
			(Si.displayName = `Logo 1`),
			(Ci = Si));
	}),
	Ti,
	Ei,
	Di,
	Oi,
	ki,
	Ai = e(() => {
		(y(),
			q(),
			l(),
			(Ti = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 14.536 0 C 10.127 0 6.061 2.352 3.898 6.151 L 0 13 L 0.408 12.804 C 1.213 12.435 2.196 11.622 5.02 10.968 C 9.169 10.006 13.393 10.212 13.438 10.214 L 18.156 10.214 C 21.009 10.214 23.321 7.928 23.321 5.107 C 23.321 2.287 23.009 0 20.156 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="13px" id="Y1vtat5cn" transform="translate(1 21)" width="23.3208px"/><path d="M 14.536 1.098 C 10.127 1.098 6.061 3.449 3.898 7.249 L 0 14.098 L 0.408 13.902 C 1.213 13.532 2.196 12.72 5.02 12.065 C 9.168 11.104 13.39 11.309 13.439 11.312 L 26.607 11.312 C 29.46 11.312 31.772 9.025 31.772 6.205 C 31.772 5.036 31.718 3.958 31.452 3.098 C 29.772 -2.402 30.772 1.098 27.272 1.098 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="14.09758422466254px" id="cfPbAwNpV" transform="translate(7.228 6.902)" width="31.771810000000002px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(Ei = h((e, t) => {
				let { animated: n, layoutId: r, children: i, ...a } = e;
				return n
					? p(k.div, { ...a, layoutId: r, ref: t })
					: p(`div`, { ...a, ref: t });
			})),
			(Di = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(Oi = z(
				h(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: a,
						...o
					} = Di(e);
					return p(Ei, {
						...o,
						className: U(`framer-MRsUn`, r),
						layoutId: i,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-MRsUn { -webkit-mask: ${Ti}; aspect-ratio: 1; background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); mask: ${Ti}; width: 40px; }`,
				],
				`framer-MRsUn`,
			)),
			(Oi.displayName = `Logo 3`),
			(ki = Oi));
	});
function ji(e) {
	let {
			slots: i = [],
			gap: l,
			padding: u,
			paddingPerSide: f,
			paddingTop: m,
			paddingRight: h,
			paddingBottom: g,
			paddingLeft: y,
			speed: b,
			hoverFactor: x,
			direction: S,
			alignment: C,
			sizingOptions: D,
			fadeOptions: A,
			style: N,
		} = e,
		{
			fadeContent: P,
			overflow: F,
			fadeWidth: I,
			fadeInset: L,
			fadeAlpha: R,
		} = A,
		{ widthType: z, heightType: ee } = D,
		B = f ? `${m}px ${h}px ${g}px ${y}px` : `${u}px`,
		V = ve.current(),
		H = V === ve.canvas || V === ve.export,
		te = Mi(),
		U = i.filter(Boolean),
		ne = r.count(U),
		re = ne > 0,
		ie = O(0),
		W = Ni(S === !0 ? `left` : S, te),
		G = W === `left` || W === `right`,
		K = Fi[W];
	E(ie, K);
	let q = _(null),
		J = o(() => [{ current: null }, { current: null }], []),
		[ae, oe] = a({ parent: null, children: null }),
		se = null,
		Y = [],
		ce = 0,
		le = 0;
	(H && ((ce = ne ? Math.floor(10 / ne) : 0), (le = 1)),
		!H &&
			re &&
			ae.parent &&
			((ce = Math.round((ae.parent / ae.children) * 2) + 1),
			(ce = Math.min(ce, Pi)),
			(le = 1)));
	let ue = s(() => {
			if (re && q.current) {
				let e = G ? q.current.offsetWidth : q.current.offsetHeight,
					t = J[0].current
						? G
							? J[0].current.offsetLeft
							: J[0].current.offsetTop
						: 0,
					n =
						(J[1].current
							? G
								? J[1].current.offsetLeft +
									J[1].current.offsetWidth
								: J[1].current.offsetTop +
									J[1].current.offsetHeight
							: 0) -
						t +
						l;
				d(() => {
					oe({ parent: e, children: n });
				});
			}
		}, []),
		de = H ? { contentVisibility: `auto` } : {};
	if (re) {
		if (!H) {
			let e = _(!0);
			n(
				() => (
					j.read(ue, !1, !0),
					cn(q.current, ({ contentSize: t }) => {
						(!e.current &&
							(t.width || t.height) &&
							j.read(ue, !1, !0),
							(e.current = !1));
					})
				),
				[],
			);
		}
		se = r.map(U, (e, n) => {
			let r;
			(n === 0 && (r = J[te === `rtl` && G ? 1 : 0]),
				n === U.length - 1 && (r = J[te === `rtl` && G ? 0 : 1]));
			let i = {
				width: z ? e.props?.width : `100%`,
				height: ee ? e.props?.height : `100%`,
			};
			return p(M, {
				inherit: `id`,
				children: p(Ii, {
					ref: r,
					style: i,
					children: t(
						e,
						{
							style: {
								...e.props?.style,
								...i,
								flexShrink: 0,
								...de,
							},
							layoutId: e.props.layoutId
								? e.props.layoutId + `-original-` + n
								: void 0,
						},
						e.props?.children,
					),
				}),
			});
		});
	}
	let X = H ? !0 : T(q);
	if (!H)
		for (let e = 0; e < ce; e++)
			Y = Y.concat(
				r.map(U, (n, r) =>
					p(
						M,
						{
							inherit: `id`,
							children: p(
								Ii,
								{
									style: {
										width: z ? n.props?.width : `100%`,
										height: ee ? n.props?.height : `100%`,
										willChange: X ? `transform` : void 0,
									},
									children: t(
										n,
										{
											key: e + ` ` + r,
											style: {
												...n.props?.style,
												width: z
													? n.props?.width
													: `100%`,
												height: ee
													? n.props?.height
													: `100%`,
												flexShrink: 0,
												...de,
											},
											layoutId: n.props.layoutId
												? n.props.layoutId +
													`-dupe-` +
													e
												: void 0,
										},
										n.props?.children,
									),
								},
								e + `li` + r,
							),
						},
						e + `lg` + r,
					),
				),
			);
	let fe = ae.children + ae.children * Math.round(ae.parent / ae.children);
	(_(null), _(null), _(0));
	let pe = _(!1),
		me = w(),
		Z = _(null),
		he = _(null);
	if (!H) {
		c(() => {
			if (!(me || !fe || !b))
				return (
					(he.current = Z.current.animate(
						{ transform: [K(0), K(fe)] },
						{
							duration: (Math.abs(fe) / b) * 1e3,
							iterations: 1 / 0,
							iterationStart: te === `rtl` ? 1 : 0,
							easing: `linear`,
						},
					)),
					() => he.current.cancel()
				);
		}, [x, fe, b, te]);
		let e = s(() => {
			if (!he.current) return;
			let e = document.hidden;
			X && !e && he.current.playState === `paused`
				? he.current.play()
				: (!X || e) &&
					he.current.playState === `running` &&
					he.current.pause();
		}, [X]);
		(c(() => {
			e();
		}, [X, x, fe, b]),
			c(
				() => (
					document.addEventListener(`visibilitychange`, e),
					() => {
						document.removeEventListener(`visibilitychange`, e);
					}
				),
				[e],
			));
	}
	let ge = G ? `to right` : `to bottom`,
		_e = I / 2,
		ye = 100 - I / 2,
		be = `linear-gradient(${ge}, rgba(0, 0, 0, ${R}) ${Hi(L, 0, _e)}%, rgba(0, 0, 0, 1) ${_e}%, rgba(0, 0, 0, 1) ${ye}%, rgba(0, 0, 0, ${R}) ${100 - L}%)`;
	return re
		? p(`section`, {
				style: {
					...Li,
					opacity: le,
					WebkitMaskImage: P ? be : void 0,
					maskImage: P ? be : void 0,
					overflow: F ? `visible` : `hidden`,
					padding: B,
				},
				ref: q,
				children: v(k.ul, {
					ref: Z,
					style: {
						...Li,
						gap: l,
						top: S === `bottom` && Ui(fe) ? -fe : void 0,
						left:
							S === `right` && Ui(fe)
								? fe * (te === `rtl` ? 1 : -1)
								: void 0,
						placeItems: C,
						position: `relative`,
						flexDirection: G ? `row` : `column`,
						...N,
						willChange: H || !X ? `auto` : `transform`,
						transform: K(0),
					},
					onMouseEnter: () => {
						((pe.current = !0),
							he.current && (he.current.playbackRate = x));
					},
					onMouseLeave: () => {
						((pe.current = !1),
							he.current && (he.current.playbackRate = 1));
					},
					children: [se, Y],
				}),
			})
		: v(`section`, {
				style: Ri,
				children: [
					p(`div`, { style: zi, children: `✨` }),
					p(`p`, { style: Bi, children: `Connect to Content` }),
					p(`p`, {
						style: Vi,
						children: `Add layers or components to infinitely loop on your page.`,
					}),
				],
			});
}
function Mi() {
	return !u || !u.document || !u.document.documentElement
		? `ltr`
		: u.document.documentElement.dir === `rtl`
			? `rtl`
			: `ltr`;
}
function Ni(e, t) {
	return t === `rtl`
		? e === `left`
			? `right`
			: e === `right`
				? `left`
				: e
		: e;
}
var Pi,
	Fi,
	Ii,
	Li,
	Ri,
	zi,
	Bi,
	Vi,
	Hi,
	Ui,
	Wi = e(() => {
		(C(),
			y(),
			l(),
			q(),
			N(),
			tn(),
			(Pi = 100),
			(Fi = {
				left: (e) => `translateX(-${e}px)`,
				right: (e) => `translateX(${e}px)`,
				top: (e) => `translateY(-${e}px)`,
				bottom: (e) => `translateY(${e}px)`,
			}),
			(Ii = h(({ children: e, ...t }, n) => {
				let r = _(),
					i = T(r);
				return (
					f(n, () => r.current),
					c(() => {
						let e = r.current;
						e &&
							(i
								? e
										.querySelectorAll(`button,a`)
										.forEach((e) => {
											let t = e.dataset.origTabIndex;
											t
												? (e.tabIndex = t)
												: e.removeAttribute(`tabIndex`);
										})
								: e
										.querySelectorAll(`button,a`)
										.forEach((e) => {
											let t = e.getAttribute(`tabIndex`);
											(t && (e.dataset.origTabIndex = t),
												(e.tabIndex = -1));
										}));
					}, [i]),
					p(`li`, { ...t, "aria-hidden": !i, ref: r, children: e })
				);
			})),
			(ji.defaultProps = {
				gap: 10,
				padding: 10,
				sizingOptions: { widthType: !0, heightType: !0 },
				fadeOptions: {
					fadeContent: !0,
					overflow: !1,
					fadeWidth: 25,
					fadeAlpha: 0,
					fadeInset: 0,
				},
				direction: !0,
			}),
			P(ji, {
				slots: {
					type: J.Array,
					title: `Children`,
					control: { type: J.ComponentInstance },
				},
				speed: {
					type: J.Number,
					title: `Speed`,
					min: 0,
					max: 1e3,
					defaultValue: 100,
					unit: `%`,
					displayStepper: !0,
					step: 5,
				},
				direction: {
					type: J.Enum,
					title: `Direction`,
					options: [`left`, `right`, `top`, `bottom`],
					optionIcons: [
						`direction-left`,
						`direction-right`,
						`direction-up`,
						`direction-down`,
					],
					optionTitles: [`Left`, `Right`, `Top`, `Bottom`],
					defaultValue: `left`,
					displaySegmentedControl: !0,
				},
				alignment: {
					type: J.Enum,
					title: `Align`,
					options: [`flex-start`, `center`, `flex-end`],
					optionIcons: {
						direction: {
							right: [
								`align-top`,
								`align-middle`,
								`align-bottom`,
							],
							left: [`align-top`, `align-middle`, `align-bottom`],
							top: [`align-left`, `align-center`, `align-right`],
							bottom: [
								`align-left`,
								`align-center`,
								`align-right`,
							],
						},
					},
					defaultValue: `center`,
					displaySegmentedControl: !0,
				},
				gap: { type: J.Number, title: `Gap` },
				padding: {
					title: `Padding`,
					type: J.FusedNumber,
					toggleKey: `paddingPerSide`,
					toggleTitles: [`Padding`, `Padding per side`],
					valueKeys: [
						`paddingTop`,
						`paddingRight`,
						`paddingBottom`,
						`paddingLeft`,
					],
					valueLabels: [`T`, `R`, `B`, `L`],
					min: 0,
				},
				sizingOptions: {
					type: J.Object,
					title: `Sizing`,
					controls: {
						widthType: {
							type: J.Boolean,
							title: `Width`,
							enabledTitle: `Auto`,
							disabledTitle: `Stretch`,
							defaultValue: !0,
						},
						heightType: {
							type: J.Boolean,
							title: `Height`,
							enabledTitle: `Auto`,
							disabledTitle: `Stretch`,
							defaultValue: !0,
						},
					},
				},
				fadeOptions: {
					type: J.Object,
					title: `Clipping`,
					controls: {
						fadeContent: {
							type: J.Boolean,
							title: `Fade`,
							defaultValue: !0,
						},
						overflow: {
							type: J.Boolean,
							title: `Overflow`,
							enabledTitle: `Show`,
							disabledTitle: `Hide`,
							defaultValue: !1,
							hidden(e) {
								return e.fadeContent === !0;
							},
						},
						fadeWidth: {
							type: J.Number,
							title: `Width`,
							defaultValue: 25,
							min: 0,
							max: 100,
							unit: `%`,
							hidden(e) {
								return e.fadeContent === !1;
							},
						},
						fadeInset: {
							type: J.Number,
							title: `Inset`,
							defaultValue: 0,
							min: 0,
							max: 100,
							unit: `%`,
							hidden(e) {
								return e.fadeContent === !1;
							},
						},
						fadeAlpha: {
							type: J.Number,
							title: `Opacity`,
							defaultValue: 0,
							min: 0,
							max: 1,
							step: 0.05,
							hidden(e) {
								return e.fadeContent === !1;
							},
						},
					},
				},
				hoverFactor: {
					type: J.Number,
					title: `Hover`,
					min: 0,
					max: 1,
					unit: `x`,
					defaultValue: 1,
					step: 0.1,
					displayStepper: !0,
					description: `Slows down the speed while you are hovering.`,
				},
			}),
			(Li = {
				display: `flex`,
				width: `100%`,
				height: `100%`,
				maxWidth: `100%`,
				maxHeight: `100%`,
				placeItems: `center`,
				margin: 0,
				padding: 0,
				listStyleType: `none`,
				textIndent: `none`,
			}),
			(Ri = {
				display: `flex`,
				width: `100%`,
				height: `100%`,
				placeContent: `center`,
				placeItems: `center`,
				flexDirection: `column`,
				color: `#96F`,
				background: `rgba(136, 85, 255, 0.1)`,
				fontSize: 11,
				overflow: `hidden`,
				padding: `20px 20px 30px 20px`,
			}),
			(zi = { fontSize: 32, marginBottom: 10 }),
			(Bi = {
				margin: 0,
				marginBottom: 10,
				fontWeight: 600,
				textAlign: `center`,
			}),
			(Vi = {
				margin: 0,
				opacity: 0.7,
				maxWidth: 150,
				lineHeight: 1.5,
				textAlign: `center`,
			}),
			(Hi = (e, t, n) => Math.min(Math.max(e, t), n)),
			(Ui = (e) => typeof e == `number` && !isNaN(e)));
	}),
	Gi,
	Ki,
	qi,
	Ji,
	Yi,
	Xi = e(() => {
		(y(),
			q(),
			l(),
			(Gi = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 106 40" xmlns="http://www.w3.org/2000/svg"><path d="M 23.391 0 C 24.655 0 25.792 0.141 26.802 0.423 C 27.819 0.698 28.683 1.109 29.394 1.654 C 30.105 2.2 30.651 2.88 31.033 3.695 C 31.415 4.504 31.606 5.439 31.606 6.5 C 31.606 7.561 31.415 8.499 31.033 9.314 C 30.651 10.123 30.105 10.8 29.394 11.346 C 28.683 11.891 27.819 12.305 26.802 12.586 C 25.792 12.862 24.655 13 23.391 13 C 22.128 13 20.985 12.862 19.962 12.586 C 18.946 12.305 18.079 11.891 17.362 11.346 C 16.645 10.8 16.093 10.123 15.705 9.314 C 15.317 8.499 15.123 7.561 15.123 6.5 C 15.123 5.439 15.317 4.504 15.705 3.695 C 16.093 2.88 16.645 2.2 17.362 1.654 C 18.079 1.109 18.946 0.698 19.962 0.423 C 20.985 0.141 22.128 0 23.391 0 Z M 66.157 0 C 67.344 0 68.446 0.105 69.462 0.315 C 70.484 0.518 71.422 0.782 72.274 1.106 L 72.274 4.127 C 71.939 3.935 71.56 3.749 71.137 3.569 C 70.72 3.389 70.265 3.23 69.771 3.093 C 69.277 2.955 68.748 2.844 68.184 2.76 C 67.62 2.676 67.027 2.634 66.404 2.634 C 65.628 2.634 64.952 2.691 64.376 2.805 C 63.801 2.919 63.307 3.072 62.896 3.263 C 62.484 3.455 62.146 3.68 61.882 3.938 C 61.617 4.189 61.409 4.459 61.256 4.747 C 61.103 5.035 60.997 5.328 60.939 5.628 C 60.88 5.928 60.851 6.218 60.851 6.5 C 60.851 6.746 60.874 7.012 60.921 7.3 C 60.974 7.588 61.068 7.876 61.203 8.163 C 61.344 8.451 61.538 8.727 61.785 8.99 C 62.032 9.254 62.352 9.488 62.746 9.692 C 63.145 9.895 63.625 10.06 64.182 10.186 C 64.741 10.306 65.405 10.366 66.174 10.366 C 66.562 10.366 66.9 10.354 67.188 10.33 C 67.476 10.306 67.738 10.273 67.973 10.231 C 68.214 10.189 68.437 10.138 68.642 10.078 C 68.854 10.018 69.072 9.955 69.295 9.889 L 69.295 8.397 L 65.628 8.397 L 65.628 5.691 L 72.565 5.691 L 72.565 12.002 C 72.13 12.152 71.642 12.29 71.102 12.416 C 70.567 12.535 70.012 12.637 69.436 12.721 C 68.866 12.811 68.293 12.88 67.717 12.928 C 67.142 12.976 66.597 13 66.086 13 C 65.293 13 64.532 12.946 63.803 12.838 C 63.075 12.73 62.393 12.565 61.758 12.344 C 61.13 12.116 60.554 11.828 60.031 11.481 C 59.514 11.133 59.07 10.719 58.7 10.24 C 58.336 9.761 58.05 9.212 57.845 8.595 C 57.645 7.971 57.545 7.273 57.545 6.5 C 57.545 5.733 57.651 5.038 57.862 4.414 C 58.074 3.791 58.368 3.239 58.744 2.76 C 59.126 2.281 59.581 1.867 60.11 1.519 C 60.645 1.172 61.23 0.887 61.864 0.665 C 62.505 0.438 63.186 0.27 63.909 0.162 C 64.637 0.054 65.387 0 66.157 0 Z M 8.056 9.611 L 12.455 0.315 L 16.104 0.315 L 9.934 12.667 L 6.126 12.667 L 0 0.315 L 3.649 0.315 Z M 38.223 5.286 L 42.049 0.315 L 45.716 0.315 L 39.845 7.624 L 39.845 12.667 L 36.584 12.667 L 36.584 7.624 L 30.713 0.315 L 34.38 0.315 Z M 58.534 12.667 L 54.885 12.667 L 53.748 10.33 L 46.996 10.33 L 45.859 12.667 L 42.21 12.667 L 48.547 0.315 L 52.197 0.315 Z M 86.366 2.949 L 77.463 2.949 L 77.463 4.99 L 85.908 4.99 L 85.908 7.624 L 77.463 7.624 L 77.463 10.033 L 86.489 10.033 L 86.489 12.667 L 74.105 12.667 L 74.105 0.315 L 86.366 0.315 Z M 95.866 0.315 C 96.747 0.315 97.493 0.408 98.104 0.593 C 98.721 0.779 99.221 1.043 99.603 1.385 C 99.99 1.726 100.27 2.14 100.44 2.625 C 100.616 3.105 100.705 3.641 100.705 4.234 C 100.705 4.756 100.631 5.211 100.484 5.601 C 100.343 5.99 100.149 6.326 99.903 6.608 C 99.662 6.883 99.379 7.117 99.056 7.309 C 98.733 7.501 98.392 7.66 98.034 7.786 L 102 12.667 L 98.175 12.667 L 94.508 8.118 L 90.938 8.118 L 90.938 12.667 L 87.668 12.667 L 87.668 0.315 Z M 23.391 2.652 C 22.733 2.652 22.154 2.706 21.655 2.814 C 21.155 2.916 20.723 3.06 20.359 3.246 C 19.995 3.431 19.689 3.65 19.442 3.902 C 19.195 4.148 18.999 4.414 18.852 4.702 C 18.705 4.984 18.599 5.28 18.534 5.592 C 18.476 5.898 18.446 6.2 18.446 6.5 C 18.446 6.806 18.476 7.114 18.534 7.426 C 18.599 7.738 18.705 8.037 18.852 8.325 C 18.999 8.607 19.195 8.87 19.442 9.116 C 19.689 9.362 19.995 9.578 20.359 9.763 C 20.723 9.943 21.155 10.087 21.655 10.195 C 22.154 10.297 22.733 10.348 23.391 10.348 C 24.372 10.348 25.18 10.234 25.815 10.006 C 26.45 9.778 26.949 9.482 27.314 9.116 C 27.684 8.751 27.939 8.34 28.08 7.885 C 28.227 7.423 28.301 6.961 28.301 6.5 C 28.301 6.038 28.227 5.58 28.08 5.124 C 27.939 4.663 27.684 4.249 27.314 3.884 C 26.949 3.518 26.45 3.222 25.815 2.994 C 25.18 2.766 24.372 2.652 23.391 2.652 Z M 48.168 7.92 L 52.593 7.92 L 50.39 3.371 Z M 91.938 5.538 L 96.416 5.538 C 96.798 5.538 97.115 5.514 97.368 5.466 C 97.626 5.418 97.832 5.343 97.985 5.241 C 98.138 5.133 98.243 4.996 98.302 4.828 C 98.367 4.66 98.399 4.456 98.399 4.216 C 98.399 3.977 98.367 3.773 98.302 3.605 C 98.243 3.437 98.138 3.302 97.985 3.201 C 97.832 3.093 97.626 3.015 97.368 2.967 C 97.115 2.919 96.798 2.895 96.416 2.895 L 91.938 2.895 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="13px" id="oenczLnLe" transform="translate(2.137 12.736)" width="101.99999718147103px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(Ki = h((e, t) => {
				let { animated: n, layoutId: r, children: i, ...a } = e;
				return n
					? p(k.div, { ...a, layoutId: r, ref: t })
					: p(`div`, { ...a, ref: t });
			})),
			(qi = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(Ji = z(
				h(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: a,
						...o
					} = qi(e);
					return p(Ki, {
						...o,
						className: U(`framer-xqf6e`, r),
						layoutId: i,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-xqf6e { -webkit-mask: ${Gi}; aspect-ratio: 2.65; background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); mask: ${Gi}; width: 106px; }`,
				],
				`framer-xqf6e`,
			)),
			(Ji.displayName = `Logo`),
			(Yi = Ji));
	}),
	Zi,
	Qi,
	$i,
	ea,
	ta,
	na = e(() => {
		(y(),
			q(),
			l(),
			(Zi = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 118 40" xmlns="http://www.w3.org/2000/svg"><g d="M 18.48 0 C 19.479 0 20.395 0.164 21.229 0.493 C 22.063 0.822 22.785 1.28 23.396 1.868 C 24.019 2.455 24.494 3.148 24.823 3.947 C 25.163 4.746 25.334 5.621 25.334 6.572 C 25.334 7.524 25.163 8.405 24.823 9.215 C 24.494 10.014 24.019 10.707 23.396 11.294 C 22.785 11.881 22.063 12.34 21.229 12.669 C 20.395 12.997 19.479 13.162 18.48 13.162 C 17.482 13.162 16.565 12.997 15.731 12.669 C 14.898 12.34 14.169 11.881 13.547 11.294 C 12.936 10.707 12.46 10.014 12.119 9.215 C 11.791 8.405 11.626 7.524 11.626 6.572 C 11.626 5.621 11.791 4.746 12.119 3.947 C 12.46 3.148 12.936 2.455 13.547 1.868 C 14.169 1.28 14.898 0.822 15.731 0.493 C 16.565 0.164 17.482 0 18.48 0 Z M 18.448 2.633 C 17.731 2.633 17.097 2.804 16.545 3.145 C 15.993 3.473 15.557 3.932 15.24 4.519 C 14.935 5.106 14.782 5.782 14.782 6.545 C 14.782 7.308 14.935 7.99 15.24 8.589 C 15.557 9.176 15.993 9.64 16.545 9.981 C 17.097 10.31 17.731 10.474 18.448 10.474 C 19.176 10.474 19.809 10.31 20.35 9.981 C 20.902 9.64 21.331 9.176 21.636 8.589 C 21.953 7.99 22.112 7.308 22.112 6.545 C 22.112 5.782 21.953 5.106 21.636 4.519 C 21.331 3.932 20.902 3.473 20.35 3.145 C 19.809 2.804 19.176 2.633 18.448 2.633 Z M 63.895 0 C 64.893 0 65.809 0.164 66.643 0.493 C 67.477 0.822 68.2 1.28 68.811 1.868 C 69.433 2.455 69.909 3.148 70.238 3.947 C 70.578 4.746 70.749 5.621 70.749 6.572 C 70.749 7.524 70.578 8.405 70.238 9.215 C 69.909 10.014 69.433 10.707 68.811 11.294 C 68.2 11.881 67.477 12.34 66.643 12.669 C 65.809 12.997 64.893 13.162 63.895 13.162 C 62.896 13.162 61.98 12.997 61.146 12.669 C 60.312 12.34 59.584 11.881 58.961 11.294 C 58.35 10.707 57.875 10.014 57.534 9.215 C 57.205 8.405 57.041 7.524 57.041 6.572 C 57.041 5.621 57.205 4.746 57.534 3.947 C 57.875 3.148 58.35 2.455 58.961 1.868 C 59.584 1.28 60.312 0.822 61.146 0.493 C 61.98 0.164 62.896 0 63.895 0 Z M 63.862 2.633 C 63.145 2.633 62.511 2.804 61.959 3.145 C 61.407 3.473 60.972 3.932 60.655 4.519 C 60.35 5.106 60.197 5.782 60.197 6.545 C 60.197 7.308 60.35 7.99 60.655 8.589 C 60.972 9.176 61.407 9.64 61.959 9.981 C 62.511 10.31 63.145 10.474 63.862 10.474 C 64.59 10.474 65.225 10.31 65.765 9.981 C 66.317 9.64 66.746 9.176 67.051 8.589 C 67.368 7.99 67.527 7.308 67.527 6.545 C 67.527 5.782 67.368 5.106 67.051 4.519 C 66.746 3.932 66.317 3.473 65.765 3.145 C 65.225 2.804 64.59 2.633 63.862 2.633 Z M 8.405 8.239 L 8.405 0.363 L 11.383 0.363 L 11.383 12.962 L 8.228 12.962 L 2.978 5.086 L 2.978 12.962 L 0 12.962 L 0 0.363 L 3.155 0.363 Z M 31.063 0.363 C 32.003 0.363 32.831 0.534 33.547 0.874 C 34.264 1.215 34.823 1.691 35.222 2.302 C 35.621 2.901 35.82 3.606 35.82 4.416 C 35.82 5.215 35.621 5.92 35.222 6.531 C 34.823 7.141 34.264 7.617 33.547 7.958 C 33.509 7.977 33.467 7.993 33.427 8.01 L 37.043 12.806 L 37.043 0.363 L 41.658 0.363 C 43.056 0.363 44.273 0.634 45.306 1.174 C 46.352 1.703 47.162 2.443 47.737 3.394 C 48.313 4.334 48.601 5.42 48.601 6.654 C 48.601 7.887 48.313 8.98 47.737 9.931 C 47.162 10.871 46.352 11.611 45.306 12.151 C 44.273 12.692 43.056 12.962 41.658 12.962 L 33.495 12.962 L 30.27 8.468 L 28.826 8.468 L 28.826 12.962 L 25.795 12.962 L 25.795 0.363 Z M 39.927 10.416 L 41.512 10.416 C 42.287 10.416 42.952 10.264 43.504 9.958 C 44.068 9.641 44.502 9.201 44.807 8.637 C 45.112 8.073 45.265 7.403 45.265 6.628 C 45.265 5.853 45.112 5.183 44.807 4.619 C 44.502 4.056 44.068 3.621 43.504 3.316 C 42.952 3.01 42.287 2.858 41.512 2.858 L 39.927 2.858 Z M 28.795 5.923 L 31.032 5.923 C 31.549 5.923 31.96 5.788 32.265 5.518 C 32.571 5.236 32.723 4.86 32.723 4.39 C 32.723 3.921 32.571 3.55 32.265 3.28 C 31.96 2.998 31.549 2.858 31.032 2.858 L 28.795 2.858 Z M 57.529 2.883 L 51.715 2.883 L 51.715 5.368 L 55.726 5.368 L 55.726 7.887 L 51.715 7.887 L 51.715 12.962 L 48.684 12.962 L 48.684 0.363 L 57.529 0.363 Z M 76.478 0.363 C 77.418 0.363 78.246 0.534 78.963 0.874 C 79.679 1.215 80.237 1.691 80.637 2.302 C 81.036 2.901 81.235 3.606 81.235 4.416 C 81.235 5.215 81.036 5.92 80.637 6.531 C 80.237 7.141 79.679 7.617 78.963 7.958 C 78.923 7.977 78.882 7.993 78.842 8.01 L 82.44 12.782 L 82.44 0.363 L 85.823 0.363 L 89.576 8.224 L 93.329 0.363 L 96.641 0.363 L 96.641 12.962 L 93.681 12.962 L 93.681 5.144 L 90.668 11.411 L 88.448 11.411 L 85.365 4.996 L 85.365 12.962 L 78.909 12.962 L 75.685 8.468 L 74.241 8.468 L 74.241 12.962 L 71.21 12.962 L 71.21 0.363 Z M 74.209 5.923 L 76.447 5.923 C 76.964 5.923 77.375 5.788 77.681 5.518 C 77.986 5.236 78.139 4.86 78.139 4.39 C 78.139 3.921 77.986 3.55 77.681 3.28 C 77.375 2.998 76.964 2.858 76.447 2.858 L 74.209 2.858 Z M 109.476 12.962 L 106.216 12.962 L 105.384 10.671 L 100.269 10.671 L 99.433 12.962 L 96.279 12.962 L 101.195 0.363 L 104.56 0.363 Z M 101.138 8.118 L 104.419 8.118 L 102.781 3.614 Z" fill="transparent" height="13.161840353435267px" id="vgvYAaFEj" transform="translate(4 13)" width="109.47599588242713px"><path d="M 6.854 0 C 7.853 0 8.769 0.164 9.603 0.493 C 10.437 0.822 11.159 1.28 11.77 1.868 C 12.393 2.455 12.868 3.148 13.197 3.947 C 13.537 4.746 13.708 5.621 13.708 6.572 C 13.708 7.524 13.537 8.405 13.197 9.215 C 12.868 10.014 12.393 10.707 11.77 11.294 C 11.159 11.881 10.437 12.34 9.603 12.669 C 8.769 12.997 7.853 13.162 6.854 13.162 C 5.856 13.162 4.939 12.997 4.105 12.669 C 3.271 12.34 2.543 11.881 1.921 11.294 C 1.31 10.707 0.834 10.014 0.493 9.215 C 0.164 8.405 0 7.524 0 6.572 C 0 5.621 0.164 4.746 0.493 3.947 C 0.834 3.148 1.31 2.455 1.921 1.868 C 2.543 1.28 3.271 0.822 4.105 0.493 C 4.939 0.164 5.856 0 6.854 0 Z M 6.821 2.633 C 6.105 2.633 5.471 2.804 4.918 3.145 C 4.366 3.473 3.931 3.932 3.614 4.519 C 3.309 5.106 3.156 5.782 3.156 6.545 C 3.156 7.308 3.308 7.99 3.614 8.589 C 3.931 9.176 4.366 9.64 4.918 9.981 C 5.471 10.31 6.105 10.474 6.821 10.474 C 7.55 10.474 8.183 10.31 8.724 9.981 C 9.276 9.64 9.704 9.176 10.01 8.589 C 10.327 7.99 10.486 7.308 10.486 6.545 C 10.486 5.782 10.327 5.106 10.01 4.519 C 9.704 3.932 9.276 3.473 8.724 3.145 C 8.183 2.804 7.55 2.633 6.821 2.633 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="13.161840353435267px" id="EXWJ86zwv" transform="translate(11.626 0)" width="13.708239016362882px"/><path d="M 6.854 0 C 7.853 0 8.769 0.164 9.603 0.493 C 10.437 0.822 11.159 1.28 11.77 1.868 C 12.393 2.455 12.868 3.148 13.197 3.947 C 13.538 4.746 13.708 5.621 13.708 6.572 C 13.708 7.524 13.538 8.405 13.197 9.215 C 12.868 10.014 12.393 10.707 11.77 11.294 C 11.159 11.881 10.437 12.34 9.603 12.669 C 8.769 12.997 7.853 13.162 6.854 13.162 C 5.856 13.162 4.939 12.997 4.105 12.669 C 3.271 12.34 2.543 11.881 1.921 11.294 C 1.31 10.707 0.834 10.014 0.493 9.215 C 0.164 8.405 0 7.524 0 6.572 C 0 5.621 0.164 4.746 0.493 3.947 C 0.834 3.148 1.31 2.455 1.921 1.868 C 2.543 1.28 3.271 0.822 4.105 0.493 C 4.939 0.164 5.856 0 6.854 0 Z M 6.821 2.633 C 6.105 2.633 5.471 2.804 4.918 3.145 C 4.366 3.473 3.932 3.932 3.615 4.519 C 3.309 5.106 3.156 5.782 3.156 6.545 C 3.156 7.308 3.309 7.99 3.615 8.589 C 3.932 9.176 4.366 9.64 4.918 9.981 C 5.471 10.31 6.105 10.474 6.821 10.474 C 7.55 10.474 8.184 10.31 8.724 9.981 C 9.276 9.64 9.705 9.176 10.011 8.589 C 10.328 7.99 10.486 7.308 10.486 6.545 C 10.486 5.782 10.328 5.106 10.011 4.519 C 9.705 3.932 9.276 3.473 8.724 3.145 C 8.184 2.804 7.55 2.633 6.821 2.633 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="13.161840353435267px" id="rUicoJcRg" transform="translate(57.041 0)" width="13.708239075140284px"/><path d="M 8.405 7.876 L 8.405 0 L 11.383 0 L 11.383 12.598 L 8.228 12.598 L 2.978 4.723 L 2.978 12.598 L 0 12.598 L 0 0 L 3.155 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="12.598306348360282px" id="qG5t9lzfU" transform="translate(0 0.363)" width="11.383153752144835px"/><path d="M 5.268 0 C 6.207 0 7.035 0.171 7.752 0.511 C 8.469 0.852 9.027 1.328 9.427 1.939 C 9.825 2.538 10.025 3.243 10.025 4.053 C 10.025 4.852 9.825 5.556 9.427 6.167 C 9.027 6.778 8.469 7.254 7.752 7.595 C 7.713 7.613 7.672 7.629 7.632 7.647 L 11.247 12.443 L 11.247 0 L 15.863 0 C 17.261 0 18.477 0.271 19.511 0.811 C 20.556 1.339 21.366 2.079 21.942 3.031 C 22.517 3.97 22.805 5.057 22.805 6.291 C 22.805 7.524 22.517 8.616 21.942 9.568 C 21.366 10.507 20.556 11.248 19.511 11.788 C 18.477 12.329 17.261 12.598 15.863 12.598 L 7.699 12.598 L 4.475 8.105 L 3.031 8.105 L 3.031 12.598 L 0 12.598 L 0 0 Z M 14.132 10.053 L 15.717 10.053 C 16.492 10.053 17.156 9.9 17.708 9.595 C 18.272 9.278 18.706 8.837 19.012 8.274 C 19.317 7.71 19.47 7.04 19.47 6.265 C 19.47 5.489 19.317 4.82 19.012 4.256 C 18.707 3.692 18.272 3.258 17.708 2.952 C 17.156 2.647 16.492 2.494 15.717 2.494 L 14.132 2.494 Z M 3 5.56 L 5.237 5.56 C 5.753 5.56 6.165 5.425 6.47 5.155 C 6.775 4.873 6.928 4.497 6.928 4.027 C 6.928 3.557 6.775 3.187 6.47 2.917 C 6.165 2.635 5.753 2.494 5.237 2.494 L 3 2.494 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="12.598306348269006px" id="A7GzZ6UAw" transform="translate(25.795 0.363)" width="22.805217994380996px"/><path d="M 8.845 2.52 L 3.031 2.52 L 3.031 5.004 L 7.042 5.004 L 7.042 7.524 L 3.031 7.524 L 3.031 12.598 L 0 12.598 L 0 0 L 8.845 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="12.598306348360282px" id="z6UhNimzn" transform="translate(48.684 0.363)" width="8.84516197393367px"/><path d="M 5.268 0 C 6.208 0 7.036 0.171 7.753 0.511 C 8.469 0.852 9.027 1.328 9.427 1.939 C 9.826 2.538 10.025 3.243 10.025 4.053 C 10.025 4.852 9.826 5.556 9.427 6.167 C 9.027 6.778 8.469 7.254 7.753 7.595 C 7.713 7.613 7.672 7.629 7.632 7.647 L 11.23 12.419 L 11.23 0 L 14.613 0 L 18.366 7.861 L 22.119 0 L 25.431 0 L 25.431 12.598 L 22.471 12.598 L 22.471 4.781 L 19.458 11.048 L 17.238 11.048 L 14.155 4.633 L 14.155 12.598 L 7.699 12.598 L 4.475 8.105 L 3.031 8.105 L 3.031 12.598 L 0 12.598 L 0 0 Z M 3 5.56 L 5.237 5.56 C 5.754 5.56 6.165 5.425 6.471 5.155 C 6.776 4.873 6.929 4.497 6.929 4.027 C 6.929 3.557 6.776 3.187 6.471 2.917 C 6.165 2.635 5.754 2.494 5.237 2.494 L 3 2.494 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="12.598306348269006px" id="gky9D4iau" transform="translate(71.21 0.363)" width="25.431308995439963px"/><path d="M 13.197 12.598 L 9.938 12.598 L 9.105 10.308 L 3.99 10.308 L 3.154 12.598 L 0 12.598 L 4.916 0 L 8.281 0 Z M 4.86 7.755 L 8.14 7.755 L 6.503 3.251 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="12.598306348269006px" id="U8T3nfxG4" transform="translate(96.279 0.363)" width="13.19726358262244px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(Qi = h((e, t) => {
				let { animated: n, layoutId: r, children: i, ...a } = e;
				return n
					? p(k.div, { ...a, layoutId: r, ref: t })
					: p(`div`, { ...a, ref: t });
			})),
			($i = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(ea = z(
				h(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: a,
						...o
					} = $i(e);
					return p(Qi, {
						...o,
						className: U(`framer-z3N7u`, r),
						layoutId: i,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-z3N7u { -webkit-mask: ${Zi}; aspect-ratio: 2.95; background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); mask: ${Zi}; width: 118px; }`,
				],
				`framer-z3N7u`,
			)),
			(ea.displayName = `Logo`),
			(ta = ea));
	}),
	ra,
	ia,
	aa,
	oa,
	sa,
	ca = e(() => {
		(y(),
			q(),
			l(),
			(ra = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 122 40" xmlns="http://www.w3.org/2000/svg"><g d="M 16.678 0.583 C 16.895 0.5 17.125 0.493 17.353 0.562 C 17.783 0.692 18.172 1.078 18.543 1.617 C 18.925 2.172 19.336 2.958 19.782 4 C 21.718 8.519 24.302 11.549 26.842 13.159 C 27.05 13.291 27.156 13.496 27.202 13.683 C 27.247 13.87 27.241 14.069 27.202 14.247 C 27.162 14.424 27.084 14.61 26.956 14.759 C 26.825 14.911 26.625 15.042 26.367 15.042 L 13.55 15.042 C 13.246 16.369 12.907 17.628 12.51 18.722 C 11.936 20.306 11.215 21.634 10.242 22.279 C 9.739 22.613 9.169 22.762 8.543 22.671 C 7.928 22.582 7.29 22.265 6.626 21.729 C 5.305 20.662 3.783 18.653 1.998 15.461 C 1.854 15.204 1.87 14.909 1.985 14.681 C 2.101 14.449 2.343 14.251 2.667 14.251 L 12.916 14.251 C 13.006 13.837 13.095 13.417 13.18 12.992 C 13.581 10.988 13.924 8.93 14.274 7.061 C 14.621 5.208 14.975 3.54 15.397 2.376 C 15.607 1.8 15.847 1.305 16.14 0.974 C 16.29 0.806 16.467 0.663 16.678 0.583 Z M 2.684 15.02 C 2.684 15.027 2.686 15.031 2.687 15.034 C 4.461 18.205 5.921 20.105 7.121 21.073 C 7.717 21.554 8.225 21.785 8.655 21.848 C 9.073 21.909 9.447 21.813 9.802 21.578 C 10.544 21.086 11.195 19.98 11.764 18.411 C 12.129 17.404 12.447 16.242 12.736 15.002 L 2.687 15.002 C 2.685 15.007 2.684 15.014 2.684 15.02 Z M 16.926 1.321 C 16.87 1.342 16.793 1.392 16.7 1.497 C 16.509 1.714 16.309 2.094 16.109 2.645 C 15.712 3.739 15.366 5.345 15.018 7.204 C 14.673 9.047 14.325 11.139 13.923 13.145 C 13.849 13.515 13.772 13.884 13.694 14.248 L 26.314 14.248 C 26.316 14.246 26.319 14.244 26.322 14.24 C 26.346 14.211 26.377 14.154 26.395 14.074 C 26.413 13.994 26.411 13.92 26.399 13.868 C 26.392 13.839 26.384 13.826 26.381 13.822 C 23.676 12.105 21.003 8.934 19.021 4.31 C 18.584 3.289 18.198 2.557 17.858 2.064 C 17.509 1.556 17.249 1.366 17.091 1.318 C 17.025 1.298 16.975 1.302 16.926 1.321 Z M 54.94 7.994 C 56.165 7.994 57.044 8.253 57.577 8.772 C 58.11 9.292 58.376 10.131 58.376 11.29 L 58.376 15.843 C 58.389 16.136 58.463 16.356 58.596 16.502 C 58.742 16.635 58.962 16.722 59.255 16.762 L 59.195 18.42 C 58.037 18.42 57.15 18.174 56.538 17.682 C 55.499 18.174 54.427 18.42 53.322 18.42 C 51.338 18.42 50.346 17.361 50.346 15.244 C 50.346 14.232 50.612 13.5 51.145 13.047 C 51.678 12.594 52.51 12.321 53.642 12.228 L 56.219 12.009 L 56.219 11.29 C 56.219 10.757 56.098 10.384 55.859 10.17 C 55.632 9.958 55.292 9.851 54.84 9.851 C 54.414 9.851 53.934 9.865 53.402 9.891 C 52.869 9.918 52.283 9.958 51.644 10.011 L 51.005 10.051 L 50.925 8.512 C 52.417 8.166 53.755 7.994 54.94 7.994 Z M 53.896 13.75 C 52.977 13.83 52.517 14.33 52.517 15.249 C 52.517 16.167 52.923 16.627 53.735 16.627 C 54.427 16.627 55.134 16.521 55.852 16.308 L 56.212 16.188 L 56.212 13.531 Z M 73.525 7.994 C 76.321 7.994 77.72 9.518 77.72 12.567 L 77.58 14.126 L 71.387 14.126 C 71.401 14.951 71.581 15.557 71.927 15.944 C 72.274 16.33 72.92 16.523 73.865 16.523 C 74.81 16.523 75.782 16.483 76.781 16.403 L 77.34 16.343 L 77.38 17.961 C 76.621 18.107 75.908 18.22 75.243 18.3 C 74.577 18.38 73.944 18.42 73.345 18.42 C 71.867 18.42 70.802 18.014 70.15 17.202 C 69.51 16.389 69.19 15.091 69.19 13.307 C 69.19 9.764 70.635 7.994 73.525 7.994 Z M 73.519 9.786 C 72.76 9.786 72.213 9.992 71.88 10.405 C 71.547 10.804 71.375 11.484 71.362 12.442 L 75.576 12.442 C 75.576 11.444 75.423 10.751 75.117 10.365 C 74.81 9.979 74.278 9.786 73.519 9.786 Z M 100.714 7.994 C 102.312 7.994 103.451 8.426 104.13 9.292 C 104.822 10.157 105.168 11.456 105.168 13.187 C 105.168 14.052 105.088 14.811 104.928 15.464 C 104.768 16.116 104.516 16.662 104.169 17.102 C 103.823 17.541 103.364 17.875 102.791 18.101 C 102.232 18.314 101.539 18.42 100.714 18.42 C 99.901 18.42 99.208 18.314 98.636 18.101 C 98.063 17.875 97.604 17.541 97.258 17.102 C 96.912 16.662 96.659 16.116 96.499 15.464 C 96.339 14.811 96.26 14.052 96.26 13.187 C 96.26 12.401 96.332 11.688 96.479 11.049 C 96.625 10.41 96.865 9.864 97.198 9.411 C 97.544 8.959 98.004 8.613 98.576 8.373 C 99.149 8.12 99.861 7.994 100.714 7.994 Z M 100.707 9.826 C 99.855 9.826 99.262 10.079 98.93 10.585 C 98.61 11.091 98.451 11.95 98.451 13.161 C 98.451 14.36 98.604 15.232 98.91 15.778 C 99.203 16.311 99.802 16.578 100.707 16.578 C 101.147 16.578 101.513 16.518 101.806 16.398 C 102.098 16.265 102.333 16.058 102.505 15.778 C 102.679 15.498 102.798 15.145 102.865 14.719 C 102.931 14.28 102.965 13.761 102.965 13.161 C 102.965 11.95 102.798 11.091 102.465 10.585 C 102.146 10.079 101.559 9.826 100.707 9.826 Z M 110.679 7.994 C 112.277 7.994 113.415 8.426 114.094 9.292 C 114.787 10.157 115.133 11.456 115.133 13.187 C 115.133 14.052 115.053 14.811 114.893 15.464 C 114.734 16.116 114.481 16.662 114.134 17.102 C 113.788 17.541 113.328 17.875 112.756 18.101 C 112.197 18.314 111.504 18.42 110.679 18.42 C 109.866 18.42 109.173 18.314 108.601 18.101 C 108.028 17.875 107.569 17.541 107.223 17.102 C 106.877 16.662 106.624 16.116 106.464 15.464 C 106.304 14.811 106.224 14.052 106.224 13.187 C 106.224 12.401 106.297 11.688 106.444 11.049 C 106.59 10.41 106.83 9.864 107.163 9.411 C 107.509 8.959 107.969 8.613 108.541 8.373 C 109.114 8.12 109.826 7.994 110.679 7.994 Z M 110.672 9.826 C 109.82 9.826 109.227 10.079 108.895 10.585 C 108.575 11.091 108.415 11.95 108.415 13.161 C 108.415 14.36 108.569 15.232 108.875 15.778 C 109.168 16.311 109.767 16.578 110.672 16.578 C 111.111 16.578 111.478 16.518 111.771 16.398 C 112.063 16.265 112.298 16.058 112.47 15.778 C 112.644 15.498 112.763 15.145 112.83 14.719 C 112.896 14.28 112.93 13.761 112.93 13.161 C 112.93 11.95 112.763 11.091 112.43 10.585 C 112.111 10.079 111.524 9.826 110.672 9.826 Z M 36.89 16.293 L 37.309 16.293 L 39.906 4.568 L 42.503 4.568 L 45.1 16.293 L 45.539 16.293 L 47.497 4.528 L 49.834 4.528 L 47.137 18.21 L 43.561 18.21 L 41.205 7.244 L 38.867 18.21 L 35.272 18.21 L 32.595 4.528 L 34.932 4.528 Z M 63.74 16.342 L 64.379 16.342 L 66.377 8.212 L 68.594 8.212 L 65.998 18.2 L 62.122 18.2 L 59.545 8.212 L 61.822 8.212 Z M 82.645 16.293 L 83.064 16.293 L 85.66 4.568 L 88.257 4.568 L 90.854 16.293 L 91.293 16.293 L 93.251 4.528 L 95.589 4.528 L 92.892 18.21 L 89.316 18.21 L 86.959 7.244 L 84.622 18.21 L 81.026 18.21 L 78.349 4.528 L 80.687 4.528 Z M 8.683 0.004 C 9.043 0.032 9.399 0.194 9.751 0.46 C 10.446 0.985 11.22 1.99 12.111 3.562 C 12.387 4.05 12.082 4.758 11.439 4.758 L 6.68 4.758 C 6.64 4.952 6.599 5.149 6.561 5.347 C 6.358 6.382 6.187 7.427 6.008 8.392 C 5.833 9.338 5.649 10.204 5.427 10.812 C 5.318 11.111 5.186 11.391 5.011 11.586 C 4.92 11.687 4.803 11.781 4.656 11.834 C 4.502 11.89 4.341 11.89 4.186 11.839 C 3.904 11.748 3.676 11.5 3.482 11.214 C 3.278 10.912 3.065 10.494 2.837 9.954 C 2.109 8.231 1.203 6.938 0.267 6.056 C 0.082 5.881 0.02 5.639 0.005 5.447 C -0.012 5.246 0.017 5.032 0.072 4.838 C 0.127 4.646 0.217 4.448 0.345 4.289 C 0.47 4.135 0.676 3.967 0.958 3.967 L 6.044 3.967 C 6.183 3.366 6.338 2.793 6.515 2.282 C 6.803 1.451 7.176 0.702 7.706 0.303 C 7.986 0.093 8.315 -0.024 8.683 0.004 Z M 0.959 4.774 C 0.914 4.83 0.865 4.924 0.831 5.044 C 0.797 5.162 0.784 5.28 0.791 5.37 C 0.797 5.441 0.812 5.468 0.814 5.472 C 1.84 6.442 2.802 7.83 3.563 9.632 C 3.783 10.151 3.973 10.516 4.136 10.757 C 4.268 10.953 4.36 11.031 4.403 11.059 C 4.408 11.055 4.414 11.049 4.42 11.042 C 4.491 10.963 4.583 10.8 4.682 10.527 C 4.878 9.99 5.051 9.186 5.228 8.233 C 5.401 7.299 5.58 6.214 5.782 5.182 C 5.81 5.036 5.84 4.89 5.869 4.745 L 0.986 4.745 C 0.98 4.751 0.97 4.76 0.959 4.774 Z M 8.604 0.792 C 8.453 0.78 8.311 0.823 8.163 0.934 C 7.838 1.178 7.527 1.722 7.244 2.539 C 7.095 2.968 6.962 3.45 6.838 3.964 L 11.403 3.964 C 11.404 3.962 11.405 3.96 11.405 3.957 L 11.405 3.954 L 11.403 3.95 C 10.523 2.398 9.814 1.512 9.254 1.089 C 8.979 0.881 8.764 0.804 8.604 0.792 Z" fill="transparent" height="22.69759568837049px" id="ZMvPkdk2N" transform="translate(3 9)" width="115.1330030639219px"><path d="M 14.783 0.067 C 15.001 -0.015 15.231 -0.022 15.459 0.047 C 15.888 0.177 16.277 0.563 16.649 1.102 C 17.031 1.657 17.441 2.443 17.888 3.485 C 19.824 8.004 22.408 11.034 24.948 12.644 C 25.156 12.776 25.262 12.981 25.307 13.168 C 25.353 13.355 25.347 13.554 25.307 13.732 C 25.268 13.909 25.189 14.095 25.062 14.244 C 24.931 14.396 24.731 14.527 24.473 14.527 L 11.656 14.527 C 11.352 15.854 11.013 17.113 10.616 18.207 C 10.042 19.791 9.321 21.119 8.348 21.764 C 7.845 22.098 7.275 22.247 6.649 22.156 C 6.033 22.067 5.396 21.75 4.732 21.214 C 3.41 20.147 1.889 18.138 0.104 14.946 C -0.04 14.689 -0.025 14.394 0.09 14.166 C 0.207 13.934 0.448 13.736 0.773 13.736 L 11.022 13.736 C 11.112 13.322 11.2 12.902 11.285 12.477 C 11.687 10.473 12.03 8.415 12.379 6.546 C 12.726 4.693 13.08 3.024 13.503 1.861 C 13.712 1.284 13.953 0.79 14.246 0.459 C 14.395 0.291 14.573 0.148 14.783 0.067 Z M 0.789 14.504 C 0.789 14.512 0.791 14.516 0.793 14.519 C 2.566 17.69 4.027 19.59 5.226 20.558 C 5.823 21.039 6.331 21.27 6.76 21.333 C 7.178 21.394 7.553 21.298 7.908 21.063 C 8.65 20.571 9.301 19.465 9.87 17.896 C 10.235 16.889 10.553 15.727 10.842 14.487 L 0.793 14.487 C 0.791 14.492 0.789 14.499 0.789 14.504 Z M 15.032 0.806 C 14.976 0.827 14.899 0.877 14.806 0.982 C 14.614 1.199 14.415 1.579 14.215 2.13 C 13.817 3.224 13.472 4.83 13.124 6.689 C 12.779 8.532 12.43 10.624 12.029 12.63 C 11.955 13 11.878 13.369 11.799 13.733 L 24.419 13.733 C 24.421 13.731 24.424 13.729 24.427 13.725 C 24.452 13.696 24.483 13.639 24.501 13.559 C 24.519 13.479 24.517 13.405 24.504 13.353 C 24.497 13.324 24.49 13.311 24.487 13.307 C 21.781 11.59 19.108 8.419 17.127 3.795 C 16.689 2.774 16.303 2.041 15.964 1.549 C 15.614 1.041 15.355 0.851 15.196 0.803 C 15.131 0.783 15.081 0.787 15.032 0.806 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="22.18252298500898px" id="l4QoJN6h_" transform="translate(1.894 0.515)" width="25.339105911270746px"/><path d="M 4.594 0 C 5.819 0 6.698 0.259 7.231 0.778 C 7.763 1.298 8.03 2.137 8.03 3.296 L 8.03 7.85 C 8.043 8.143 8.117 8.362 8.25 8.509 C 8.396 8.642 8.616 8.728 8.908 8.768 L 8.849 10.426 C 7.69 10.426 6.804 10.181 6.192 9.688 C 5.153 10.18 4.081 10.426 2.976 10.426 C 0.992 10.426 0 9.368 0 7.25 C 0 6.238 0.266 5.506 0.799 5.053 C 1.332 4.6 2.164 4.327 3.296 4.234 L 5.872 4.015 L 5.872 3.296 C 5.872 2.763 5.752 2.39 5.512 2.177 C 5.286 1.964 4.946 1.858 4.494 1.858 C 4.068 1.858 3.588 1.871 3.056 1.897 C 2.523 1.924 1.937 1.964 1.298 2.017 L 0.659 2.057 L 0.579 0.519 C 2.07 0.172 3.409 0 4.594 0 Z M 3.549 5.757 C 2.631 5.837 2.171 6.336 2.171 7.255 C 2.171 8.174 2.577 8.633 3.389 8.633 C 4.081 8.633 4.787 8.527 5.506 8.314 L 5.866 8.194 L 5.866 5.537 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="10.42643416594554px" id="eBw8nYRKh" transform="translate(50.346 7.994)" width="8.90839747524717px"/><path d="M 4.335 0 C 7.131 0 8.53 1.524 8.53 4.573 L 8.39 6.132 L 2.197 6.132 C 2.211 6.958 2.391 7.564 2.737 7.95 C 3.084 8.336 3.729 8.529 4.675 8.529 C 5.62 8.529 6.592 8.489 7.591 8.409 L 8.15 8.349 L 8.19 9.967 C 7.431 10.114 6.718 10.227 6.052 10.307 C 5.387 10.387 4.754 10.426 4.155 10.426 C 2.677 10.426 1.612 10.02 0.959 9.208 C 0.32 8.396 0 7.097 0 5.313 C 0 1.771 1.445 0 4.335 0 Z M 4.329 1.792 C 3.57 1.792 3.023 1.998 2.69 2.411 C 2.357 2.811 2.185 3.49 2.172 4.449 L 6.386 4.449 C 6.386 3.45 6.233 2.757 5.927 2.371 C 5.62 1.985 5.088 1.792 4.329 1.792 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="10.42643416594554px" id="c_sXz2KX0" transform="translate(69.19 7.994)" width="8.529871163527872px"/><path d="M 4.454 0 C 6.052 0 7.191 0.433 7.87 1.298 C 8.562 2.164 8.908 3.462 8.908 5.193 C 8.908 6.059 8.828 6.818 8.668 7.47 C 8.508 8.123 8.256 8.669 7.909 9.108 C 7.563 9.547 7.104 9.881 6.531 10.107 C 5.972 10.32 5.279 10.426 4.454 10.426 C 3.641 10.426 2.948 10.32 2.376 10.107 C 1.803 9.881 1.344 9.547 0.998 9.108 C 0.652 8.669 0.399 8.123 0.239 7.47 C 0.079 6.818 0 6.059 0 5.193 C 0 4.408 0.072 3.695 0.219 3.055 C 0.365 2.416 0.605 1.871 0.938 1.418 C 1.284 0.965 1.744 0.619 2.316 0.379 C 2.889 0.127 3.601 0 4.454 0 Z M 4.447 1.832 C 3.595 1.832 3.002 2.085 2.67 2.591 C 2.35 3.097 2.191 3.956 2.191 5.168 C 2.191 6.366 2.344 7.238 2.65 7.784 C 2.943 8.317 3.542 8.584 4.447 8.584 C 4.887 8.584 5.253 8.524 5.546 8.404 C 5.838 8.271 6.073 8.064 6.245 7.784 C 6.419 7.505 6.538 7.152 6.605 6.726 C 6.671 6.286 6.705 5.767 6.705 5.168 C 6.705 3.956 6.538 3.097 6.205 2.591 C 5.886 2.085 5.299 1.832 4.447 1.832 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="10.42643416594554px" id="GMBfrK5Q9" transform="translate(96.26 7.994)" width="8.907943497900192px"/><path d="M 4.454 0 C 6.052 0 7.191 0.433 7.87 1.298 C 8.563 2.164 8.909 3.462 8.909 5.193 C 8.909 6.059 8.829 6.818 8.669 7.47 C 8.509 8.123 8.257 8.669 7.91 9.108 C 7.564 9.547 7.104 9.881 6.532 10.107 C 5.973 10.32 5.28 10.426 4.454 10.426 C 3.642 10.426 2.949 10.32 2.377 10.107 C 1.804 9.881 1.345 9.547 0.999 9.108 C 0.653 8.669 0.4 8.123 0.24 7.47 C 0.08 6.818 0 6.059 0 5.193 C 0 4.408 0.073 3.695 0.22 3.055 C 0.366 2.416 0.606 1.871 0.939 1.418 C 1.285 0.965 1.745 0.619 2.317 0.379 C 2.89 0.127 3.602 0 4.454 0 Z M 4.448 1.832 C 3.596 1.832 3.003 2.085 2.671 2.591 C 2.351 3.097 2.191 3.956 2.191 5.168 C 2.191 6.366 2.345 7.238 2.651 7.784 C 2.944 8.317 3.543 8.584 4.448 8.584 C 4.887 8.584 5.254 8.524 5.547 8.404 C 5.839 8.271 6.074 8.064 6.246 7.784 C 6.419 7.505 6.538 7.152 6.606 6.726 C 6.672 6.286 6.705 5.767 6.705 5.168 C 6.705 3.956 6.539 3.097 6.206 2.591 C 5.886 2.085 5.3 1.832 4.448 1.832 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="10.42643416594554px" id="efMtRDvA1" transform="translate(106.224 7.994)" width="8.90885145259378px"/><path d="M 4.295 11.765 L 4.714 11.765 L 7.311 0.04 L 9.908 0.04 L 12.505 11.765 L 12.944 11.765 L 14.902 0 L 17.239 0 L 14.542 13.682 L 10.966 13.682 L 8.61 2.716 L 6.272 13.682 L 2.677 13.682 L 0 0 L 2.337 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="13.682296139997625px" id="djSkSkvRh" transform="translate(32.595 4.528)" width="17.238790992613673px"/><path d="M 4.195 8.13 L 4.834 8.13 L 6.832 0 L 9.048 0 L 6.452 9.988 L 2.577 9.988 L 0 0 L 2.277 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="9.987519787562107px" id="Wp1rjEzXX" transform="translate(59.545 8.212)" width="9.048494884453305px"/><path d="M 4.295 11.765 L 4.714 11.765 L 7.311 0.04 L 9.908 0.04 L 12.505 11.765 L 12.944 11.765 L 14.901 0 L 17.239 0 L 14.542 13.682 L 10.966 13.682 L 8.61 2.716 L 6.272 13.682 L 2.677 13.682 L 0 0 L 2.337 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="13.682296139997625px" id="euQ9F59oX" transform="translate(78.349 4.528)" width="17.239063379021587px"/><path d="M 8.683 0.004 C 9.043 0.032 9.399 0.194 9.751 0.46 C 10.446 0.985 11.22 1.99 12.111 3.562 C 12.387 4.05 12.082 4.758 11.439 4.758 L 6.68 4.758 C 6.64 4.952 6.599 5.149 6.561 5.347 C 6.358 6.382 6.187 7.427 6.008 8.392 C 5.833 9.338 5.649 10.204 5.427 10.812 C 5.318 11.111 5.186 11.391 5.011 11.586 C 4.92 11.687 4.803 11.781 4.656 11.834 C 4.502 11.89 4.341 11.89 4.186 11.839 C 3.904 11.748 3.676 11.5 3.482 11.214 C 3.278 10.912 3.065 10.494 2.837 9.954 C 2.109 8.231 1.203 6.938 0.267 6.056 C 0.082 5.881 0.02 5.639 0.005 5.447 C -0.012 5.246 0.017 5.032 0.072 4.838 C 0.127 4.646 0.217 4.448 0.345 4.289 C 0.47 4.135 0.676 3.967 0.958 3.967 L 6.044 3.967 C 6.183 3.366 6.338 2.793 6.515 2.282 C 6.803 1.451 7.176 0.702 7.706 0.303 C 7.986 0.093 8.315 -0.024 8.683 0.004 Z M 0.959 4.774 C 0.914 4.83 0.865 4.924 0.831 5.044 C 0.797 5.162 0.784 5.28 0.791 5.37 C 0.797 5.441 0.812 5.468 0.814 5.472 C 1.84 6.442 2.802 7.83 3.563 9.632 C 3.783 10.151 3.973 10.516 4.136 10.757 C 4.268 10.953 4.36 11.031 4.403 11.059 C 4.408 11.055 4.414 11.049 4.42 11.042 C 4.491 10.963 4.583 10.8 4.682 10.527 C 4.878 9.99 5.051 9.186 5.228 8.233 C 5.401 7.299 5.58 6.214 5.782 5.182 C 5.81 5.036 5.84 4.89 5.869 4.745 L 0.986 4.745 C 0.98 4.751 0.97 4.76 0.959 4.774 Z M 8.604 0.792 C 8.453 0.78 8.311 0.823 8.163 0.934 C 7.838 1.178 7.527 1.722 7.244 2.539 C 7.095 2.968 6.962 3.45 6.838 3.964 L 11.403 3.964 C 11.404 3.962 11.405 3.96 11.405 3.957 L 11.405 3.954 L 11.403 3.95 C 10.523 2.398 9.814 1.512 9.254 1.089 C 8.979 0.881 8.764 0.804 8.604 0.792 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="11.876402011718309px" id="iyTAuzvGl" transform="translate(0 0)" width="12.213181635298447px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(ia = h((e, t) => {
				let { animated: n, layoutId: r, children: i, ...a } = e;
				return n
					? p(k.div, { ...a, layoutId: r, ref: t })
					: p(`div`, { ...a, ref: t });
			})),
			(aa = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(oa = z(
				h(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: a,
						...o
					} = aa(e);
					return p(ia, {
						...o,
						className: U(`framer-Jxgxb`, r),
						layoutId: i,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-Jxgxb { -webkit-mask: ${ra}; aspect-ratio: 3.05; background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); mask: ${ra}; width: 122px; }`,
				],
				`framer-Jxgxb`,
			)),
			(oa.displayName = `Logo`),
			(sa = oa));
	}),
	la,
	ua,
	da,
	fa,
	pa,
	ma = e(() => {
		(y(),
			q(),
			l(),
			(la = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 130 40" xmlns="http://www.w3.org/2000/svg"><g d="M 15.568 0.079 C 15.726 -0.144 16.408 0.15 16.344 0.418 L 14.527 7.949 L 24.301 7.949 C 24.56 7.949 24.623 8.406 24.377 8.487 C 22.293 9.174 17.561 9.771 14.527 12.051 C 11.052 14.938 10.172 18.216 8.964 19.921 C 8.806 20.144 8.124 19.85 8.188 19.582 L 10.005 12.051 L 0.231 12.051 C -0.028 12.051 -0.091 11.594 0.155 11.513 C 2.239 10.826 6.971 10.229 10.005 7.949 C 13.48 5.062 14.36 1.784 15.568 0.079 Z M 35.709 4.646 C 39.504 4.646 41.781 6.457 41.781 9.486 L 41.781 9.774 L 38.239 9.774 L 38.239 9.486 C 38.239 8.2 37.632 7.692 35.76 7.692 C 33.466 7.692 32.842 8.234 32.842 10.485 C 32.842 12.735 33.466 13.277 35.76 13.277 C 37.632 13.277 38.239 12.769 38.239 11.483 L 38.239 11.195 L 41.781 11.195 L 41.781 11.483 C 41.781 14.512 39.504 16.323 35.709 16.323 C 31.78 16.323 29.469 14.021 29.469 10.485 C 29.469 6.948 31.78 4.646 35.709 4.646 Z M 56.581 16.154 L 52.938 16.154 L 52.078 14.056 L 46.715 14.056 L 45.838 16.154 L 42.28 16.154 L 47.153 4.815 L 51.69 4.815 Z M 48.57 9.605 L 47.912 11.195 L 50.915 11.195 L 50.257 9.605 L 49.515 7.692 L 49.295 7.692 Z M 63.852 4.815 C 66.837 4.815 68.406 6.068 68.406 8.284 C 68.406 10.078 67.512 11.144 65.353 11.415 L 65.353 11.584 C 66.517 11.889 66.889 12.448 67.31 13.311 L 68.71 16.154 L 65.05 16.154 L 63.701 13.378 C 63.296 12.532 62.959 12.296 61.728 12.296 L 60.429 12.296 L 60.429 16.154 L 57.258 16.154 L 57.258 4.815 Z M 60.429 9.926 L 63.819 9.926 C 64.746 9.926 65.084 9.757 65.084 8.792 C 65.084 7.895 64.746 7.675 63.819 7.675 L 60.429 7.675 Z M 75.456 4.815 C 79.183 4.815 81.544 6.897 81.544 10.485 C 81.544 14.072 79.183 16.154 75.456 16.154 L 69.739 16.154 L 69.739 4.815 Z M 72.909 13.294 L 75.456 13.294 C 77.463 13.294 78.154 13.04 78.154 10.485 C 78.154 7.929 77.463 7.675 75.456 7.675 L 72.909 7.675 Z M 85.891 16.154 L 82.72 16.154 L 82.72 4.815 L 85.891 4.815 Z M 93.751 9.063 L 95.404 11.669 L 95.623 11.669 L 95.472 9.198 L 95.472 4.815 L 98.642 4.815 L 98.642 16.154 L 95.269 16.154 L 91.93 11.788 L 90.496 9.554 L 90.278 9.554 L 90.413 11.72 L 90.413 16.154 L 87.242 16.154 L 87.242 4.815 L 90.614 4.815 Z M 113.625 16.154 L 109.982 16.154 L 109.122 14.056 L 103.759 14.056 L 102.881 16.154 L 99.323 16.154 L 104.197 4.815 L 108.734 4.815 Z M 105.614 9.605 L 104.956 11.195 L 107.958 11.195 L 107.301 9.605 L 106.559 7.692 L 106.339 7.692 Z M 117.472 13.294 L 124 13.294 L 124 16.154 L 114.302 16.154 L 114.302 4.815 L 117.472 4.815 Z" fill="transparent" height="20px" id="Vq63r46bv" transform="translate(3 10.01)" width="124.00000097922427px"><path d="M 15.568 0.079 C 15.726 -0.144 16.408 0.15 16.344 0.418 L 14.527 7.949 L 24.301 7.949 C 24.56 7.949 24.623 8.406 24.377 8.487 C 22.293 9.174 17.561 9.771 14.527 12.051 C 11.052 14.938 10.172 18.216 8.964 19.921 C 8.806 20.144 8.124 19.85 8.188 19.582 L 10.005 12.051 L 0.231 12.051 C -0.028 12.051 -0.091 11.594 0.155 11.513 C 2.239 10.826 6.971 10.229 10.005 7.949 C 13.48 5.062 14.36 1.784 15.568 0.079 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="20px" id="JmjmqDIHS" transform="translate(0 0)" width="24.531985408798253px"/><path d="M 6.241 0 C 10.035 0 12.312 1.811 12.312 4.84 L 12.312 5.128 L 8.77 5.128 L 8.77 4.84 C 8.77 3.554 8.163 3.046 6.291 3.046 C 3.997 3.046 3.373 3.588 3.373 5.838 C 3.373 8.089 3.997 8.631 6.291 8.631 C 8.163 8.631 8.77 8.123 8.77 6.837 L 8.77 6.549 L 12.312 6.549 L 12.312 6.837 C 12.312 9.866 10.035 11.677 6.241 11.677 C 2.311 11.677 0 9.375 0 5.838 C 0 2.301 2.311 0 6.241 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="11.676665290531687px" id="k1lLsAlTl" transform="translate(29.469 4.646)" width="12.312373717747413px"/><path d="M 14.302 11.339 L 10.659 11.339 L 9.798 9.241 L 4.435 9.241 L 3.558 11.339 L 0 11.339 L 4.874 0 L 9.411 0 Z M 6.29 4.79 L 5.633 6.38 L 8.635 6.38 L 7.977 4.79 L 7.235 2.877 L 7.016 2.877 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="11.338642087999812px" id="QGZwFhbqM" transform="translate(42.28 4.815)" width="14.301611108184431px"/><path d="M 6.594 0 C 9.579 0 11.148 1.252 11.148 3.469 C 11.148 5.263 10.254 6.329 8.095 6.6 L 8.095 6.769 C 9.259 7.074 9.631 7.632 10.052 8.495 L 11.452 11.339 L 7.792 11.339 L 6.443 8.563 C 6.038 7.717 5.701 7.48 4.469 7.48 L 3.171 7.48 L 3.171 11.339 L 0 11.339 L 0 0 Z M 3.171 5.111 L 6.56 5.111 C 7.488 5.111 7.826 4.941 7.826 3.977 C 7.826 3.08 7.488 2.86 6.56 2.86 L 3.171 2.86 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="11.338642087999812px" id="MfCAKfNND" transform="translate(57.258 4.815)" width="11.452220961917739px"/><path d="M 5.717 0 C 9.444 0 11.805 2.082 11.805 5.669 C 11.805 9.257 9.444 11.339 5.717 11.339 L 0 11.339 L 0 0 Z M 3.171 8.479 L 5.717 8.479 C 7.724 8.479 8.415 8.225 8.415 5.669 C 8.415 3.114 7.724 2.86 5.717 2.86 L 3.171 2.86 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="11.338642087999812px" id="EYnh1FRNR" transform="translate(69.739 4.815)" width="11.805404901032489px"/><path d="M 3.171 11.339 L 0 11.339 L 0 0 L 3.171 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="11.338642087999805px" id="UDb8caXDV" transform="translate(82.72 4.815)" width="3.1707591729150977px"/><path d="M 6.509 4.248 L 8.162 6.854 L 8.382 6.854 L 8.23 4.383 L 8.23 0 L 11.4 0 L 11.4 11.339 L 8.027 11.339 L 4.688 6.973 L 3.254 4.739 L 3.036 4.739 L 3.171 6.905 L 3.171 11.339 L 0 11.339 L 0 0 L 3.372 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="11.338642087999805px" id="SkaNMIQW5" transform="translate(87.242 4.815)" width="11.400473805711016px"/><path d="M 14.302 11.339 L 10.659 11.339 L 9.799 9.241 L 4.436 9.241 L 3.558 11.339 L 0 11.339 L 4.874 0 L 9.411 0 Z M 6.291 4.79 L 5.632 6.38 L 8.634 6.38 L 7.977 4.79 L 7.235 2.877 L 7.016 2.877 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="11.338642087999812px" id="P37dseBKx" transform="translate(99.323 4.815)" width="14.302147775615893px"/><path d="M 3.17 8.479 L 9.698 8.479 L 9.698 11.339 L 0 11.339 L 0 0 L 3.17 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="11.338642087999805px" id="bGMh05ctm" transform="translate(114.302 4.815)" width="9.697800661841455px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(ua = h((e, t) => {
				let { animated: n, layoutId: r, children: i, ...a } = e;
				return n
					? p(k.div, { ...a, layoutId: r, ref: t })
					: p(`div`, { ...a, ref: t });
			})),
			(da = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(fa = z(
				h(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: a,
						...o
					} = da(e);
					return p(ua, {
						...o,
						className: U(`framer-LpksI`, r),
						layoutId: i,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-LpksI { -webkit-mask: ${la}; aspect-ratio: 3.25; background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); mask: ${la}; width: 130px; }`,
				],
				`framer-LpksI`,
			)),
			(fa.displayName = `Logo`),
			(pa = fa));
	}),
	ha,
	ga,
	_a,
	va,
	ya,
	ba,
	xa,
	Sa,
	Ca,
	wa,
	Ta,
	Ea,
	Da,
	Oa,
	ka,
	Aa,
	ja,
	Ma,
	Na = e(() => {
		(y(),
			q(),
			N(),
			l(),
			Wi(),
			fi(),
			vi(),
			Xi(),
			wi(),
			na(),
			ca(),
			Ai(),
			ma(),
			(ha = B(Ci)),
			(ga = B(_i)),
			(_a = B(ki)),
			(va = B(di)),
			(ya = B(ji)),
			(ba = B(pa)),
			(xa = B(Yi)),
			(Sa = B(sa)),
			(Ca = B(ta)),
			(wa = `framer-qfg5h`),
			(Ta = { OkLXuOcbp: `framer-v-l6vzul` }),
			(Ea = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Da = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(Oa = k.create(i)),
			(ka = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(Aa = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(ja = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						i = S(),
						{ activeLocale: a, setLocale: o } = _e();
					X();
					let {
							style: s,
							className: c,
							layoutId: l,
							variant: u,
							...d
						} = ka(e),
						{
							baseVariant: f,
							classNames: m,
							clearLoadingGesture: h,
							gestureHandlers: g,
							gestureVariant: y,
							isLoading: b,
							setGestureState: x,
							setVariant: C,
							variants: w,
						} = W({
							defaultVariant: `OkLXuOcbp`,
							ref: r,
							variant: u,
							variantClassNames: Ta,
						}),
						T = Aa(e, w),
						E = U(wa);
					return p(M, {
						id: l ?? i,
						children: p(Oa, {
							animate: w,
							initial: !1,
							children: p(Da, {
								value: Ea,
								children: v(k.div, {
									...d,
									...g,
									className: U(E, `framer-l6vzul`, c, m),
									"data-framer-name": `Ticker Logotypes`,
									layoutDependency: T,
									layoutId: `OkLXuOcbp`,
									ref: r,
									style: {
										backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
										borderBottomLeftRadius: 10,
										borderBottomRightRadius: 10,
										borderTopLeftRadius: 10,
										borderTopRightRadius: 10,
										...s,
									},
									children: [
										p(Z, {
											children: p(H, {
												className: `framer-fablb1-container`,
												isAuthoredByUser: !0,
												isModuleExternal: !0,
												layoutDependency: T,
												layoutId: `mEuRYLgk2-container`,
												nodeId: `mEuRYLgk2`,
												rendersWithMotion: !0,
												scopeId: `Ip75Ved4s`,
												children: p(ji, {
													alignment: `center`,
													direction: `right`,
													fadeOptions: {
														fadeAlpha: 0,
														fadeContent: !0,
														fadeInset: 0,
														fadeWidth: 25,
														overflow: !1,
													},
													gap: 62,
													height: `100%`,
													hoverFactor: 1,
													id: `mEuRYLgk2`,
													layoutId: `mEuRYLgk2`,
													padding: 15,
													paddingBottom: 15,
													paddingLeft: 15,
													paddingPerSide: !1,
													paddingRight: 15,
													paddingTop: 15,
													sizingOptions: {
														heightType: !0,
														widthType: !0,
													},
													slots: [
														p(k.div, {
															className: `framer-134xv2x`,
															"data-framer-name": `Logo`,
															layoutDependency: T,
															layoutId: `vegcdlROl-Ko5i1yllX-0`,
															children: p(Ci, {
																animated: !0,
																className: `framer-sfvv57`,
																"data-framer-name": `Logo`,
																layoutDependency:
																	T,
																layoutId: `vegcdlROl-Ko5i1yllX-0`,
															}),
														}),
														p(k.div, {
															className: `framer-ggphfz`,
															"data-framer-name": `Logo`,
															layoutDependency: T,
															layoutId: `S4xDLdn5y-uF_dxlerC-1`,
															children: p(_i, {
																animated: !0,
																className: `framer-2x8n9z`,
																"data-framer-name": `Logo`,
																layoutDependency:
																	T,
																layoutId: `S4xDLdn5y-uF_dxlerC-1`,
															}),
														}),
														p(k.div, {
															className: `framer-pvpt4o`,
															"data-framer-name": `Logo`,
															layoutDependency: T,
															layoutId: `Tyq1qSl3N-xJMcdT68T-2`,
															children: p(ki, {
																animated: !0,
																className: `framer-866nug`,
																"data-framer-name": `Logo`,
																layoutDependency:
																	T,
																layoutId: `Tyq1qSl3N-xJMcdT68T-2`,
															}),
														}),
														p(k.div, {
															className: `framer-1b0qi2g`,
															"data-framer-name": `Logo`,
															layoutDependency: T,
															layoutId: `Lr9TRiREP-nZBQJ3CeH-3`,
															children: p(di, {
																animated: !0,
																className: `framer-ij5aeb`,
																"data-framer-name": `Logo`,
																layoutDependency:
																	T,
																layoutId: `Lr9TRiREP-nZBQJ3CeH-3`,
															}),
														}),
													],
													speed: 30,
													style: {
														height: `100%`,
														width: `100%`,
													},
													width: `100%`,
												}),
											}),
										}),
										p(Z, {
											children: p(H, {
												className: `framer-19x4e9y-container`,
												isAuthoredByUser: !0,
												isModuleExternal: !0,
												layoutDependency: T,
												layoutId: `W1fSecL8J-container`,
												nodeId: `W1fSecL8J`,
												rendersWithMotion: !0,
												scopeId: `Ip75Ved4s`,
												children: p(ji, {
													alignment: `center`,
													direction: `left`,
													fadeOptions: {
														fadeAlpha: 0,
														fadeContent: !0,
														fadeInset: 0,
														fadeWidth: 25,
														overflow: !1,
													},
													gap: 35,
													height: `100%`,
													hoverFactor: 1,
													id: `W1fSecL8J`,
													layoutId: `W1fSecL8J`,
													padding: 15,
													paddingBottom: 15,
													paddingLeft: 15,
													paddingPerSide: !1,
													paddingRight: 15,
													paddingTop: 15,
													sizingOptions: {
														heightType: !0,
														widthType: !0,
													},
													slots: [
														p(k.div, {
															className: `framer-e139ye`,
															"data-framer-name": `Logo`,
															layoutDependency: T,
															layoutId: `tjFcN_Ldf-La3YgQKJv-0`,
															children: p(pa, {
																animated: !0,
																className: `framer-jgluzy`,
																layoutDependency:
																	T,
																layoutId: `tjFcN_Ldf-La3YgQKJv-0`,
															}),
														}),
														p(k.div, {
															className: `framer-g5meg7`,
															"data-framer-name": `Logo`,
															layoutDependency: T,
															layoutId: `PlkBCKABb-XYcFcD1h7-1`,
															children: p(Yi, {
																animated: !0,
																className: `framer-1m1ldbd`,
																layoutDependency:
																	T,
																layoutId: `PlkBCKABb-XYcFcD1h7-1`,
															}),
														}),
														p(k.div, {
															className: `framer-1e3uq9i`,
															"data-framer-name": `Logo`,
															layoutDependency: T,
															layoutId: `TbR7eR_48-PYGmlbHWZ-2`,
															children: p(sa, {
																animated: !0,
																className: `framer-1b6pbgh`,
																layoutDependency:
																	T,
																layoutId: `TbR7eR_48-PYGmlbHWZ-2`,
															}),
														}),
														p(k.div, {
															className: `framer-6wuc1j`,
															"data-framer-name": `Logo`,
															layoutDependency: T,
															layoutId: `QRWt5WHqL-OGlwO9zxS-3`,
															children: p(ta, {
																animated: !0,
																className: `framer-6zftp`,
																layoutDependency:
																	T,
																layoutId: `QRWt5WHqL-OGlwO9zxS-3`,
															}),
														}),
													],
													speed: 30,
													style: {
														height: `100%`,
														width: `100%`,
													},
													width: `100%`,
												}),
											}),
										}),
									],
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-qfg5h.framer-1gufl3k, .framer-qfg5h .framer-1gufl3k { display: block; }`,
					`.framer-qfg5h.framer-l6vzul { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 195px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 40px 0px; position: relative; width: 347px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-qfg5h .framer-fablb1-container, .framer-qfg5h .framer-19x4e9y-container { flex: none; height: 50px; position: relative; width: 100%; }`,
					`.framer-qfg5h .framer-134xv2x, .framer-qfg5h .framer-ggphfz, .framer-qfg5h .framer-pvpt4o, .framer-qfg5h .framer-1b0qi2g { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
					`.framer-qfg5h .framer-sfvv57, .framer-qfg5h .framer-2x8n9z, .framer-qfg5h .framer-866nug, .framer-qfg5h .framer-ij5aeb { flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 30px; }`,
					`.framer-qfg5h .framer-e139ye, .framer-qfg5h .framer-g5meg7, .framer-qfg5h .framer-1e3uq9i, .framer-qfg5h .framer-6wuc1j { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: min-content; }`,
					`.framer-qfg5h .framer-jgluzy, .framer-qfg5h .framer-1m1ldbd, .framer-qfg5h .framer-1b6pbgh, .framer-qfg5h .framer-6zftp { flex: none; height: var(--framer-aspect-ratio-supported, 200px); position: relative; }`,
				],
				`framer-qfg5h`,
			)),
			(Ma = ja),
			(ja.displayName = `Logotypes on White Ticker - Widget`),
			(ja.defaultProps = { height: 195, width: 347 }),
			de(
				ja,
				[
					{ explicitInter: !0, fonts: [] },
					...ha,
					...ga,
					..._a,
					...va,
					...ya,
					...ba,
					...xa,
					...Sa,
					...Ca,
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function Pa(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fa,
	Ia,
	La,
	Ra,
	za,
	Ba,
	Va,
	Ha,
	Ua,
	Wa,
	Ga,
	Ka,
	qa = e(() => {
		(y(),
			q(),
			N(),
			l(),
			ln(),
			Je(),
			Pe(),
			(Fa = B(un)),
			(Ia = [
				`DzHMWmjh1`,
				`vrTXDncJ7`,
				`KN8HBoXiR`,
				`Klu5O27zL`,
				`DJYa0xN6I`,
				`yDrvcuK2u`,
			]),
			(La = `framer-75pqZ`),
			(Ra = {
				DJYa0xN6I: `framer-v-q6zaxp`,
				DzHMWmjh1: `framer-v-1hb1e72`,
				Klu5O27zL: `framer-v-y1zw51`,
				KN8HBoXiR: `framer-v-1vt63tt`,
				vrTXDncJ7: `framer-v-1ifg8ul`,
				yDrvcuK2u: `framer-v-za2k6r`,
			}),
			(za = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Ba = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(Va = k.create(i)),
			(Ha = {
				"Left - Desktop": `DzHMWmjh1`,
				"Left - Phone": `KN8HBoXiR`,
				"Left - Tablet": `vrTXDncJ7`,
				"Right - Desktop": `Klu5O27zL`,
				"Right - Phone": `yDrvcuK2u`,
				"Right - Tablet": `DJYa0xN6I`,
			}),
			(Ua = ({
				height: e,
				id: t,
				nameOfMetric: n,
				quantity: r,
				width: i,
				...a
			}) => ({
				...a,
				ie9kQKUTB: n ?? a.ie9kQKUTB ?? `Worldwide  Clients`,
				NniDKySK_: r ?? a.NniDKySK_ ?? `200+`,
				variant: Ha[a.variant] ?? a.variant ?? `DzHMWmjh1`,
			})),
			(Wa = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Ga = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e();
					X();
					let {
							style: c,
							className: l,
							layoutId: u,
							variant: d,
							NniDKySK_: f,
							ie9kQKUTB: m,
							...h
						} = Ua(e),
						{
							baseVariant: g,
							classNames: y,
							clearLoadingGesture: b,
							gestureHandlers: x,
							gestureVariant: C,
							isLoading: w,
							setGestureState: T,
							setVariant: E,
							variants: D,
						} = W({
							cycleOrder: Ia,
							defaultVariant: `DzHMWmjh1`,
							ref: r,
							variant: d,
							variantClassNames: Ra,
						}),
						O = Wa(e, D),
						A = U(La, Ze, Le);
					return p(M, {
						id: u ?? a,
						children: p(Va, {
							animate: D,
							initial: !1,
							children: p(Ba, {
								value: za,
								children: v(k.div, {
									...h,
									...x,
									className: U(A, `framer-1hb1e72`, l, y),
									"data-framer-name": `Left - Desktop`,
									layoutDependency: O,
									layoutId: `DzHMWmjh1`,
									ref: r,
									style: {
										backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
										borderBottomLeftRadius: 10,
										borderBottomRightRadius: 10,
										borderTopLeftRadius: 10,
										borderTopRightRadius: 10,
										...c,
									},
									...Pa(
										{
											DJYa0xN6I: {
												"data-framer-name": `Right - Tablet`,
											},
											Klu5O27zL: {
												"data-framer-name": `Right - Desktop`,
											},
											KN8HBoXiR: {
												"data-framer-name": `Left - Phone`,
											},
											vrTXDncJ7: {
												"data-framer-name": `Left - Tablet`,
											},
											yDrvcuK2u: {
												"data-framer-name": `Right - Phone`,
											},
										},
										g,
										C,
									),
									children: [
										p(Z, {
											children: p(H, {
												className: `framer-ovlb32-container`,
												isAuthoredByUser: !0,
												layoutDependency: O,
												layoutId: `GvUslNjnx-container`,
												nodeId: `GvUslNjnx`,
												rendersWithMotion: !0,
												scopeId: `iUw4tmYkC`,
												children: p(un, {
													ariaLabel: `h1`,
													charset: `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*`,
													color: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
													durationMs: 1e3,
													font: {
														fontFamily: `"Space Mono", monospace`,
														fontSize: `90px`,
														fontStyle: `normal`,
														fontWeight: 400,
														letterSpacing: `-3.7px`,
														lineHeight: `1em`,
														textAlign: `left`,
													},
													fps: 60,
													height: `100%`,
													hoverOnly: !1,
													id: `GvUslNjnx`,
													intensity: 0.08,
													layoutId: `GvUslNjnx`,
													newTab: !0,
													repeatOnHover: !0,
													revealEase: `inOut`,
													style: { width: `100%` },
													text: f,
													width: `100%`,
													...Pa(
														{
															DJYa0xN6I: {
																font: {
																	fontFamily: `"Space Mono", monospace`,
																	fontSize: `84px`,
																	fontStyle: `normal`,
																	fontWeight: 400,
																	letterSpacing: `-0.06em`,
																	lineHeight: `1em`,
																	textAlign: `right`,
																},
															},
															Klu5O27zL: {
																font: {
																	fontFamily: `"Space Mono", monospace`,
																	fontSize: `90px`,
																	fontStyle: `normal`,
																	fontWeight: 400,
																	letterSpacing: `-3.7px`,
																	lineHeight: `1em`,
																	textAlign: `right`,
																},
															},
															KN8HBoXiR: {
																font: {
																	fontFamily: `"Space Mono", monospace`,
																	fontSize: `53px`,
																	fontStyle: `normal`,
																	fontWeight: 400,
																	letterSpacing: `-0.04em`,
																	lineHeight: `1em`,
																	textAlign: `left`,
																},
															},
															vrTXDncJ7: {
																font: {
																	fontFamily: `"Space Mono", monospace`,
																	fontSize: `84px`,
																	fontStyle: `normal`,
																	fontWeight: 400,
																	letterSpacing: `-0.06em`,
																	lineHeight: `1em`,
																	textAlign: `left`,
																},
															},
															yDrvcuK2u: {
																font: {
																	fontFamily: `"Space Mono", monospace`,
																	fontSize: `53px`,
																	fontStyle: `normal`,
																	fontWeight: 400,
																	letterSpacing: `-0.04em`,
																	lineHeight: `1em`,
																	textAlign: `right`,
																},
															},
														},
														g,
														C,
													),
												}),
											}),
										}),
										p(R, {
											__fromCanvasComponent: !0,
											children: p(i, {
												children: p(k.h6, {
													className: `framer-styles-preset-41ki07`,
													"data-styles-preset": `hmRgK3K6v`,
													style: {
														"--framer-text-alignment": `left`,
														"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
													},
													children: `Worldwide  Clients`,
												}),
											}),
											className: `framer-1xcsmzx`,
											fonts: [`Inter`],
											layoutDependency: O,
											layoutId: `NgCPxSHMC`,
											style: {
												"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
												"--framer-paragraph-spacing": `0px`,
											},
											text: m,
											variants: {
												KN8HBoXiR: {
													"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
												},
												yDrvcuK2u: {
													"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
												},
											},
											verticalAlignment: `top`,
											withExternalLayout: !0,
											...Pa(
												{
													DJYa0xN6I: {
														children: p(i, {
															children: p(k.h6, {
																className: `framer-styles-preset-41ki07`,
																"data-styles-preset": `hmRgK3K6v`,
																style: {
																	"--framer-text-alignment": `right`,
																	"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `Worldwide  Clients`,
															}),
														}),
													},
													Klu5O27zL: {
														children: p(i, {
															children: p(k.h6, {
																className: `framer-styles-preset-41ki07`,
																"data-styles-preset": `hmRgK3K6v`,
																style: {
																	"--framer-text-alignment": `right`,
																	"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `Worldwide  Clients`,
															}),
														}),
													},
													KN8HBoXiR: {
														children: p(i, {
															children: p(k.p, {
																className: `framer-styles-preset-5fkg2j`,
																"data-styles-preset": `JFkcxmmKA`,
																style: {
																	"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `Worldwide  Clients`,
															}),
														}),
													},
													yDrvcuK2u: {
														children: p(i, {
															children: p(k.p, {
																className: `framer-styles-preset-5fkg2j`,
																"data-styles-preset": `JFkcxmmKA`,
																style: {
																	"--framer-text-alignment": `right`,
																	"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `Worldwide  Clients`,
															}),
														}),
													},
												},
												g,
												C,
											),
										}),
									],
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-75pqZ.framer-17oda9g, .framer-75pqZ .framer-17oda9g { display: block; }`,
					`.framer-75pqZ.framer-1hb1e72 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: visible; padding: 32px 40px 45px 40px; position: relative; width: 347px; }`,
					`.framer-75pqZ .framer-ovlb32-container { flex: none; height: auto; position: relative; width: 100%; }`,
					`.framer-75pqZ .framer-1xcsmzx { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-75pqZ.framer-v-1ifg8ul.framer-1hb1e72 { padding: 26px 35px 34px 35px; width: 347px; }`,
					`.framer-75pqZ.framer-v-1vt63tt.framer-1hb1e72 { padding: 30px 35px 34px 35px; width: 347px; }`,
					`.framer-75pqZ.framer-v-y1zw51.framer-1hb1e72 { width: 346px; }`,
					`.framer-75pqZ.framer-v-q6zaxp.framer-1hb1e72 { padding: 26px 35px 34px 35px; width: 346px; }`,
					`.framer-75pqZ.framer-v-za2k6r.framer-1hb1e72 { padding: 30px 35px 34px 35px; width: 346px; }`,
					...Ye,
					...Fe,
				],
				`framer-75pqZ`,
			)),
			(Ka = Ga),
			(Ga.displayName = `Metrics on White - Card`),
			(Ga.defaultProps = { height: 193, width: 346.5 }),
			P(Ga, {
				variant: {
					options: [
						`DzHMWmjh1`,
						`vrTXDncJ7`,
						`KN8HBoXiR`,
						`Klu5O27zL`,
						`DJYa0xN6I`,
						`yDrvcuK2u`,
					],
					optionTitles: [
						`Left - Desktop`,
						`Left - Tablet`,
						`Left - Phone`,
						`Right - Desktop`,
						`Right - Tablet`,
						`Right - Phone`,
					],
					title: `Variant`,
					type: J.Enum,
				},
				NniDKySK_: {
					defaultValue: `200+`,
					displayTextArea: !1,
					title: `Quantity`,
					type: J.String,
				},
				ie9kQKUTB: {
					defaultValue: `Worldwide  Clients`,
					displayTextArea: !1,
					title: `Name of Metric`,
					type: J.String,
				},
			}),
			de(
				Ga,
				[
					{
						explicitInter: !0,
						fonts: [
							{
								family: `Space Mono`,
								source: `google`,
								style: `normal`,
								url: `https://fonts.gstatic.com/s/spacemono/v17/i7dPIFZifjKcF5UAWdDRUEN2RFq7AwU.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
								url: `../fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
								url: `../fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+1F00-1FFF`,
								url: `../fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0370-03FF`,
								url: `../fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
								url: `../fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
								url: `../fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
								url: `../fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
								weight: `400`,
							},
						],
					},
					...Fa,
					...G(Xe),
					...G(Ie),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	}),
	Ja,
	Ya,
	Xa,
	Za,
	Qa,
	$a = e(() => {
		(y(),
			q(),
			l(),
			(Ja = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 15.434 16.572 L 15.434 7.214 L 21 5.184 L 21 31 L 9.772 18.944 C 9.772 18.944 9.627 14.426 8.881 12.15 C 7.397 7.62 5.566 7.214 5.566 7.214 L 5.566 23.786 L 0 26.425 L 0 0 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="31px" id="gxFWKYmN4" transform="translate(10 5)" width="21px"/></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(Ya = h((e, t) => {
				let { animated: n, layoutId: r, children: i, ...a } = e;
				return n
					? p(k.div, { ...a, layoutId: r, ref: t })
					: p(`div`, { ...a, ref: t });
			})),
			(Xa = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(Za = z(
				h(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: a,
						...o
					} = Xa(e);
					return p(Ya, {
						...o,
						className: U(`framer-5kPfP`, r),
						layoutId: i,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-5kPfP { -webkit-mask: ${Ja}; aspect-ratio: 1; background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); mask: ${Ja}; width: 40px; }`,
				],
				`framer-5kPfP`,
			)),
			(Za.displayName = `Logo 1`),
			(Qa = Za));
	});
function eo(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var to,
	no,
	ro,
	io,
	ao,
	oo,
	so,
	co,
	lo,
	uo,
	fo,
	po,
	mo = e(() => {
		(y(),
			q(),
			N(),
			l(),
			Je(),
			$e(),
			Pe(),
			bn(),
			$a(),
			(to = [`NhGgdAV1p`, `jlNxyOn5d`]),
			(no = `framer-qEBN1`),
			(ro = {
				jlNxyOn5d: `framer-v-pkhkok`,
				NhGgdAV1p: `framer-v-1wxtkvu`,
			}),
			(io = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(ao = (e, t) => `translateX(-50%) ${t}`),
			(oo = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(so = k.create(i)),
			(co = { "Tabelt & Phone": `jlNxyOn5d`, Desktop: `NhGgdAV1p` }),
			(lo = ({
				height: e,
				id: t,
				logoOfCompany: n,
				name1: r,
				postitionCompany: i,
				testimonialText: a,
				topSpacer: o,
				width: s,
				...c
			}) => ({
				...c,
				N1FqUPL3o: r ?? c.N1FqUPL3o ?? `Alex Chen`,
				sbAUmBoqU:
					a ??
					c.sbAUmBoqU ??
					`The team challenged our assumptions, simplified the story, and shipped a modular site our marketers can actually edit. Performance, accessibility, analytics—nothing was an afterthought. `,
				V4cVQUEJP: o ?? c.V4cVQUEJP ?? !0,
				variant: co[c.variant] ?? c.variant ?? `NhGgdAV1p`,
				Wo6RZFeKg: n ?? c.Wo6RZFeKg ?? Qa,
				WQrvzoTZz: i ?? c.WQrvzoTZz ?? `Founder, Nova AI`,
			})),
			(uo = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(fo = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e();
					X();
					let {
							style: c,
							className: l,
							layoutId: u,
							variant: d,
							V4cVQUEJP: f,
							sbAUmBoqU: m,
							N1FqUPL3o: h,
							WQrvzoTZz: g,
							Wo6RZFeKg: y,
							...b
						} = lo(e),
						{
							baseVariant: x,
							classNames: C,
							clearLoadingGesture: w,
							gestureHandlers: T,
							gestureVariant: E,
							isLoading: D,
							setGestureState: O,
							setVariant: A,
							variants: j,
						} = W({
							cycleOrder: to,
							defaultVariant: `NhGgdAV1p`,
							ref: r,
							variant: d,
							variantClassNames: ro,
						}),
						N = uo(e, j),
						P = U(no, vn, Ze, Le, Qe);
					return p(M, {
						id: u ?? a,
						children: p(so, {
							animate: j,
							initial: !1,
							children: p(oo, {
								value: io,
								children: v(k.div, {
									...b,
									...T,
									className: U(P, `framer-1wxtkvu`, l, C),
									"data-framer-name": `Desktop`,
									layoutDependency: N,
									layoutId: `NhGgdAV1p`,
									ref: r,
									style: { ...c },
									...eo(
										{
											jlNxyOn5d: {
												"data-framer-name": `Tabelt & Phone`,
											},
										},
										x,
										E,
									),
									children: [
										f &&
											p(k.div, {
												className: `framer-p36sng`,
												"data-framer-name": `Spacer`,
												layoutDependency: N,
												layoutId: `sAL5yjniN`,
											}),
										v(k.div, {
											className: `framer-caytni`,
											"data-framer-name": `Block`,
											layoutDependency: N,
											layoutId: `PyPePcEUe`,
											style: {
												backgroundColor: `rgb(255, 255, 255)`,
												borderBottomLeftRadius: 10,
												borderBottomRightRadius: 10,
												borderTopLeftRadius: 10,
												borderTopRightRadius: 10,
											},
											children: [
												p(k.div, {
													className: `framer-yl0ssn`,
													"data-framer-name": `Text`,
													layoutDependency: N,
													layoutId: `qusV_jGS_`,
													style: {
														backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
														borderBottomLeftRadius: 8,
														borderBottomRightRadius: 8,
														borderTopLeftRadius: 8,
														borderTopRightRadius: 8,
													},
													children: p(R, {
														__fromCanvasComponent:
															!0,
														children: p(i, {
															children: p(k.p, {
																className: `framer-styles-preset-11kcybb`,
																"data-styles-preset": `pPuowuywh`,
																style: {
																	"--framer-text-alignment": `center`,
																	"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																},
																children: `The team challenged our assumptions, simplified the story, and shipped a modular site our marketers can actually edit. Performance, accessibility, analytics—nothing was an afterthought. `,
															}),
														}),
														className: `framer-1cg5ynl`,
														"data-framer-name": `The team challenged our assumptions, simplified the story, and shipped a modular site our marketers can actually edit. Performance, accessibility, analytics—nothing was an afterthought.`,
														fonts: [`Inter`],
														layoutDependency: N,
														layoutId: `wqsD4X2Pg`,
														style: {
															"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
															"--framer-paragraph-spacing": `0px`,
														},
														text: m,
														verticalAlignment: `top`,
														withExternalLayout: !0,
													}),
												}),
												v(k.div, {
													className: `framer-92dbjc`,
													"data-framer-name": `From`,
													layoutDependency: N,
													layoutId: `mdEaJIIEo`,
													style: {
														backgroundColor: `rgb(243, 243, 243)`,
														borderBottomLeftRadius: 8,
														borderBottomRightRadius: 8,
														borderTopLeftRadius: 8,
														borderTopRightRadius: 8,
													},
													children: [
														p(k.div, {
															className: `framer-kpgljw`,
															"data-framer-name": `Logo`,
															layoutDependency: N,
															layoutId: `tRrS17bBw`,
															style: {
																backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																borderBottomLeftRadius: 10,
																borderBottomRightRadius: 10,
																borderTopLeftRadius: 10,
																borderTopRightRadius: 10,
															},
															transformTemplate:
																ao,
															children: p(pe, {
																animated: !0,
																className: `framer-xqvjtu`,
																Component: y,
																layoutDependency:
																	N,
																layoutId: `cxnN0La17`,
															}),
														}),
														p(R, {
															__fromCanvasComponent:
																!0,
															children: p(i, {
																children: p(
																	k.h6,
																	{
																		className: `framer-styles-preset-41ki07`,
																		"data-styles-preset": `hmRgK3K6v`,
																		style: {
																			"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																		},
																		children: `Alex Chen`,
																	},
																),
															}),
															className: `framer-17k314z`,
															fonts: [`Inter`],
															layoutDependency: N,
															layoutId: `Yze5NwmdW`,
															style: {
																"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																"--framer-paragraph-spacing": `0px`,
															},
															text: h,
															variants: {
																jlNxyOn5d: {
																	"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																},
															},
															verticalAlignment: `top`,
															withExternalLayout:
																!0,
															...eo(
																{
																	jlNxyOn5d: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.p,
																							{
																								className: `framer-styles-preset-5fkg2j`,
																								"data-styles-preset": `JFkcxmmKA`,
																								style: {
																									"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																								},
																								children: `Alex Chen`,
																							},
																						),
																				},
																			),
																	},
																},
																x,
																E,
															),
														}),
														p(k.div, {
															className: `framer-12xovgh`,
															"data-framer-name": `Category`,
															layoutDependency: N,
															layoutId: `OeGuRaoC3`,
															style: {
																backgroundColor: `rgb(255, 255, 255)`,
																borderBottomLeftRadius: 8,
																borderBottomRightRadius: 8,
																borderTopLeftRadius: 8,
																borderTopRightRadius: 8,
															},
															children: p(R, {
																__fromCanvasComponent:
																	!0,
																children: p(i, {
																	children: p(
																		k.h6,
																		{
																			className: `framer-styles-preset-12tby5a`,
																			"data-styles-preset": `j9HsFBXUW`,
																			style: {
																				"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																			},
																			children: `Founder, Nova AI`,
																		},
																	),
																}),
																className: `framer-4hic1c`,
																fonts: [
																	`Inter`,
																],
																layoutDependency:
																	N,
																layoutId: `BiHgmLgdC`,
																style: {
																	"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																	"--framer-paragraph-spacing": `0px`,
																},
																text: g,
																verticalAlignment: `top`,
																withExternalLayout:
																	!0,
															}),
														}),
													],
												}),
											],
										}),
									],
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-qEBN1.framer-6hgyun, .framer-qEBN1 .framer-6hgyun { display: block; }`,
					`.framer-qEBN1.framer-1wxtkvu { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 347px; }`,
					`.framer-qEBN1 .framer-p36sng { flex: none; height: 70px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-qEBN1 .framer-caytni { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 2px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-qEBN1 .framer-yl0ssn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 65px 45px 85px 45px; position: relative; width: 100%; }`,
					`.framer-qEBN1 .framer-1cg5ynl { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
					`.framer-qEBN1 .framer-92dbjc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 17px; height: min-content; justify-content: center; overflow: visible; padding: 70px 40px 40px 40px; position: relative; width: 100%; }`,
					`.framer-qEBN1 .framer-kpgljw { align-content: center; align-items: center; aspect-ratio: 1 / 1; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 80px); justify-content: center; left: 50%; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: absolute; top: -40px; width: 80px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
					`.framer-qEBN1 .framer-xqvjtu { flex: none; height: var(--framer-aspect-ratio-supported, 40px); position: relative; width: 40px; }`,
					`.framer-qEBN1 .framer-17k314z, .framer-qEBN1 .framer-4hic1c { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					`.framer-qEBN1 .framer-12xovgh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 10px 5px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-qEBN1.framer-v-pkhkok .framer-yl0ssn { padding: 40px 35px 65px 35px; }`,
					`.framer-qEBN1.framer-v-pkhkok .framer-92dbjc { padding: 60px 40px 30px 40px; }`,
					...fn,
					...Ye,
					...Fe,
					...et,
				],
				`framer-qEBN1`,
			)),
			(po = fo),
			(fo.displayName = `Testimonial Card`),
			(fo.defaultProps = { height: 573, width: 347 }),
			P(fo, {
				variant: {
					options: [`NhGgdAV1p`, `jlNxyOn5d`],
					optionTitles: [`Desktop`, `Tabelt & Phone`],
					title: `Variant`,
					type: J.Enum,
				},
				V4cVQUEJP: {
					defaultValue: !0,
					title: `Top Spacer`,
					type: J.Boolean,
				},
				sbAUmBoqU: {
					defaultValue: `The team challenged our assumptions, simplified the story, and shipped a modular site our marketers can actually edit. Performance, accessibility, analytics—nothing was an afterthought. `,
					displayTextArea: !0,
					title: `Testimonial Text`,
					type: J.String,
				},
				N1FqUPL3o: {
					defaultValue: `Alex Chen`,
					displayTextArea: !1,
					title: `Name`,
					type: J.String,
				},
				WQrvzoTZz: {
					defaultValue: `Founder, Nova AI`,
					displayTextArea: !1,
					title: `Postition, Company`,
					type: J.String,
				},
				Wo6RZFeKg: {
					defaultValue: {
						identifier: `local-module:vector/lNbfuZVdW:default`,
						moduleId: `OHydsr6KdTD3VgR5qyta`,
					},
					setModuleId: `pF7pn45qOBTXaNphssuw`,
					title: `Logo of Company`,
					type: J.VectorSetItem,
				},
			}),
			de(
				fo,
				[
					{
						explicitInter: !0,
						fonts: [
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
								url: `../fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
								url: `../fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+1F00-1FFF`,
								url: `../fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0370-03FF`,
								url: `../fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
								url: `../fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
								url: `../fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
								url: `../fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
								weight: `400`,
							},
						],
					},
					...G(mn),
					...G(Xe),
					...G(Ie),
					...G(tt),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function ho(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var go,
	_o,
	vo,
	yo,
	bo,
	xo,
	So,
	Co,
	wo,
	To,
	Eo,
	Do,
	Oo,
	ko,
	Ao,
	jo,
	Mo,
	No,
	Po = e(() => {
		(y(),
			q(),
			N(),
			l(),
			Zt(),
			oi(),
			ft(),
			wt(),
			fi(),
			vi(),
			wi(),
			Ai(),
			Na(),
			qa(),
			mo(),
			(go = B(ri)),
			(_o = B(Ka)),
			(vo = B(Ma)),
			(yo = B(po)),
			(bo = B(on)),
			(xo = [`bYW4OT3Nj`, `Sj2Lti1nD`, `yhXwf1ILE`]),
			(So = `framer-fDGHv`),
			(Co = {
				bYW4OT3Nj: `framer-v-iskzm6`,
				Sj2Lti1nD: `framer-v-10fcwe3`,
				yhXwf1ILE: `framer-v-10n9296`,
			}),
			(wo = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(To = (e, t) => `translateY(-50%) ${t}`),
			(Eo = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(Do = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(Oo = k.create(i)),
			(ko = {
				"Desktop - 1200": `bYW4OT3Nj`,
				Phone: `yhXwf1ILE`,
				Tablet: `Sj2Lti1nD`,
			}),
			(Ao = ({
				height: e,
				id: t,
				leftImage: n,
				rightImage: r,
				sectionNumber: i,
				width: a,
				...o
			}) => ({
				...o,
				a_b3bYSzg: n ??
					o.a_b3bYSzg ?? {
						alt: ``,
						pixelHeight: 390,
						pixelWidth: 904,
						src: `https://framerusercontent.com/images/JaRVOtDLWyzbmlq9DffwGhFiGEk.jpg?width=904&height=390`,
					},
				odvJxZw1T: i ?? o.odvJxZw1T ?? `[05]`,
				variant: ko[o.variant] ?? o.variant ?? `bYW4OT3Nj`,
				Zfo9mJpjF: r ??
					o.Zfo9mJpjF ?? {
						alt: ``,
						pixelHeight: 390,
						pixelWidth: 900,
						src: `https://framerusercontent.com/images/h354KZtk5kmg0VJiEtNwQdpZc.jpg?width=900&height=390`,
					},
			})),
			(jo = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Mo = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e(),
						c = X(),
						{
							style: l,
							className: u,
							layoutId: d,
							variant: f,
							odvJxZw1T: m,
							Zfo9mJpjF: h,
							a_b3bYSzg: g,
							...y
						} = Ao(e),
						{
							baseVariant: b,
							classNames: x,
							clearLoadingGesture: C,
							gestureHandlers: w,
							gestureVariant: T,
							isLoading: E,
							setGestureState: D,
							setVariant: O,
							variants: A,
						} = W({
							cycleOrder: xo,
							defaultVariant: `bYW4OT3Nj`,
							ref: r,
							variant: f,
							variantClassNames: Co,
						}),
						j = jo(e, A),
						N = U(So, ht, Dt),
						P = () => ![`Sj2Lti1nD`, `yhXwf1ILE`].includes(b),
						F = () => b !== `yhXwf1ILE`,
						I = () => b === `yhXwf1ILE`;
					return p(M, {
						id: d ?? a,
						children: p(Oo, {
							animate: A,
							initial: !1,
							children: p(Do, {
								value: wo,
								children: p(k.section, {
									...y,
									...w,
									className: U(N, `framer-iskzm6`, u, x),
									"data-framer-name": `Desktop - 1200`,
									layoutDependency: j,
									layoutId: `bYW4OT3Nj`,
									ref: r,
									style: { ...l },
									...ho(
										{
											Sj2Lti1nD: {
												"data-framer-name": `Tablet`,
											},
											yhXwf1ILE: {
												"data-framer-name": `Phone`,
											},
										},
										b,
										T,
									),
									children: v(k.div, {
										className: `framer-41jlvx`,
										"data-framer-name": `Container`,
										layoutDependency: j,
										layoutId: `v8O5eCnsR`,
										children: [
											v(k.div, {
												className: `framer-ktwlxr`,
												"data-framer-name": `Heading`,
												layoutDependency: j,
												layoutId: `SP3eqvBGU`,
												children: [
													p(k.div, {
														className: `framer-lglisk`,
														"data-framer-name": `Number of Block`,
														layoutDependency: j,
														layoutId: `JPTCvUOse`,
														children: p(R, {
															__fromCanvasComponent:
																!0,
															children: p(i, {
																children: p(
																	k.h6,
																	{
																		className: `framer-styles-preset-nkm6se`,
																		"data-styles-preset": `BaUGQBb6A`,
																		style: {
																			"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																		},
																		children: `[05]`,
																	},
																),
															}),
															className: `framer-1e0tpah`,
															fonts: [`Inter`],
															layoutDependency: j,
															layoutId: `rAy6gfYq6`,
															style: {
																"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																"--framer-paragraph-spacing": `0px`,
															},
															text: m,
															transformTemplate:
																To,
															verticalAlignment: `top`,
															withExternalLayout:
																!0,
															...ho(
																{
																	yhXwf1ILE: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h6,
																							{
																								className: `framer-styles-preset-f8hg8j`,
																								"data-styles-preset": `IGVKsj4vh`,
																								style: {
																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																								},
																								children: `[05]`,
																							},
																						),
																				},
																			),
																	},
																},
																b,
																T,
															),
														}),
													}),
													p(k.div, {
														className: `framer-1n51rvi`,
														layoutDependency: j,
														layoutId: `tAHHEHY8D`,
														children: p(Z, {
															children: p(H, {
																className: `framer-85quuw-container`,
																isAuthoredByUser:
																	!0,
																layoutDependency:
																	j,
																layoutId: `IkQrZd0cN-container`,
																nodeId: `IkQrZd0cN`,
																rendersWithMotion:
																	!0,
																scopeId: `ITrwWYYRo`,
																children: p(
																	ri,
																	{
																		angleDeg: 192,
																		color: `rgb(0, 0, 0)`,
																		font: {
																			fontFamily: `"Space Mono", monospace`,
																			fontStyle: `normal`,
																			fontWeight: 400,
																		},
																		height: `100%`,
																		id: `IkQrZd0cN`,
																		layoutId: `IkQrZd0cN`,
																		offsetNormal: 0,
																		size: 22,
																		style: {
																			height: `100%`,
																			width: `100%`,
																		},
																		text: `TESTIMONIALS`,
																		tracking: 9,
																		waveAmplitude: 25,
																		waveDecay: 0.01,
																		waveLength: 12,
																		waveSpeed: 0.25,
																		width: `100%`,
																		...ho(
																			{
																				yhXwf1ILE:
																					{
																						size: 20,
																						tracking: 6,
																						waveAmplitude: 15,
																					},
																			},
																			b,
																			T,
																		),
																	},
																),
															}),
														}),
													}),
													P() &&
														p(k.div, {
															className: `framer-8xt1wi`,
															"data-framer-name": `Space`,
															layoutDependency: j,
															layoutId: `f6PhG0U14`,
														}),
												],
											}),
											v(k.div, {
												className: `framer-1a15rp2`,
												"data-framer-name": `Content`,
												layoutDependency: j,
												layoutId: `C3ld_mEEY`,
												children: [
													v(k.div, {
														className: `framer-ry0log`,
														"data-framer-name": `1`,
														layoutDependency: j,
														layoutId: `ckOOy1qpJ`,
														children: [
															v(k.div, {
																className: `framer-1gp7eec`,
																"data-framer-name": `Clients`,
																layoutDependency:
																	j,
																layoutId: `ilJBMI5ji`,
																children: [
																	p(se, {
																		background:
																			{
																				alt: ``,
																				fit: `fill`,
																				intrinsicHeight: 195,
																				intrinsicWidth: 452,
																				loading:
																					K(
																						(c?.y ||
																							0) +
																							0 +
																							(((c?.height ||
																								1471) -
																								0 -
																								1516) /
																								2 +
																								0 +
																								0) +
																							90 +
																							100 +
																							40 +
																							0 +
																							0 +
																							0 +
																							0 +
																							0,
																					),
																				pixelHeight: 390,
																				pixelWidth: 904,
																				sizes: `max((min(${c?.width || `100vw`}, 1600px) - 160px) / 3, 50px)`,
																				...Eo(
																					g,
																				),
																			},
																		className: `framer-y9bs89`,
																		"data-framer-name": `Image`,
																		fitImageDimension: `height`,
																		layoutDependency:
																			j,
																		layoutId: `HJo5BMh2Q`,
																		style: {
																			borderBottomLeftRadius: 10,
																			borderBottomRightRadius: 10,
																			borderTopLeftRadius: 10,
																			borderTopRightRadius: 10,
																		},
																		...ho(
																			{
																				Sj2Lti1nD:
																					{
																						background:
																							{
																								alt: ``,
																								fit: `fill`,
																								intrinsicHeight: 195,
																								intrinsicWidth: 452,
																								loading:
																									K(
																										(c?.y ||
																											0) +
																											0 +
																											(((c?.height ||
																												1760) -
																												0 -
																												2039) /
																												2 +
																												0 +
																												0) +
																											60 +
																											100 +
																											40 +
																											0 +
																											0 +
																											0 +
																											0 +
																											0,
																									),
																								pixelHeight: 390,
																								pixelWidth: 904,
																								sizes: `max((min(${c?.width || `100vw`}, 1600px) - 100px) / 2, 50px)`,
																								...Eo(
																									g,
																								),
																							},
																					},
																				yhXwf1ILE:
																					{
																						background:
																							{
																								alt: ``,
																								fit: `fill`,
																								intrinsicHeight: 195,
																								intrinsicWidth: 452,
																								loading:
																									K(
																										(c?.y ||
																											0) +
																											0 +
																											(((c?.height ||
																												1640) -
																												0 -
																												1793) /
																												2 +
																												0 +
																												0) +
																											40 +
																											100 +
																											40 +
																											515 +
																											0 +
																											0 +
																											0 +
																											0,
																									),
																								pixelHeight: 390,
																								pixelWidth: 904,
																								sizes: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																								...Eo(
																									g,
																								),
																							},
																					},
																			},
																			b,
																			T,
																		),
																	}),
																	p(Z, {
																		height: 193,
																		width: `max((min(${c?.width || `100vw`}, 1600px) - 160px) / 3, 50px)`,
																		y:
																			(c?.y ||
																				0) +
																			0 +
																			(((c?.height ||
																				1471) -
																				0 -
																				1516) /
																				2 +
																				0 +
																				0) +
																			90 +
																			100 +
																			40 +
																			0 +
																			0 +
																			0 +
																			0 +
																			152,
																		...ho(
																			{
																				Sj2Lti1nD:
																					{
																						width: `max((min(${c?.width || `100vw`}, 1600px) - 100px) / 2, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								1760) -
																								0 -
																								2039) /
																								2 +
																								0 +
																								0) +
																							60 +
																							100 +
																							40 +
																							0 +
																							0 +
																							0 +
																							0 +
																							156,
																					},
																				yhXwf1ILE:
																					{
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								1640) -
																								0 -
																								1793) /
																								2 +
																								0 +
																								0) +
																							40 +
																							100 +
																							40 +
																							515 +
																							0 +
																							0 +
																							0 +
																							150,
																					},
																			},
																			b,
																			T,
																		),
																		children:
																			p(
																				H,
																				{
																					className: `framer-1ju22ct-container`,
																					layoutDependency:
																						j,
																					layoutId: `H1YOV9oRu-container`,
																					nodeId: `H1YOV9oRu`,
																					rendersWithMotion:
																						!0,
																					scopeId: `ITrwWYYRo`,
																					children:
																						p(
																							Ka,
																							{
																								height: `100%`,
																								id: `H1YOV9oRu`,
																								ie9kQKUTB: `Worldwide  Clients`,
																								layoutId: `H1YOV9oRu`,
																								NniDKySK_: `200+`,
																								style: {
																									width: `100%`,
																								},
																								variant: `DzHMWmjh1`,
																								width: `100%`,
																								...ho(
																									{
																										Sj2Lti1nD:
																											{
																												variant: `vrTXDncJ7`,
																											},
																										yhXwf1ILE:
																											{
																												variant: `KN8HBoXiR`,
																											},
																									},
																									b,
																									T,
																								),
																							},
																						),
																				},
																			),
																	}),
																	p(Z, {
																		height: 195,
																		width: `max((min(${c?.width || `100vw`}, 1600px) - 160px) / 3, 50px)`,
																		y:
																			(c?.y ||
																				0) +
																			0 +
																			(((c?.height ||
																				1471) -
																				0 -
																				1516) /
																				2 +
																				0 +
																				0) +
																			90 +
																			100 +
																			40 +
																			0 +
																			0 +
																			0 +
																			0 +
																			348,
																		...ho(
																			{
																				Sj2Lti1nD:
																					{
																						height: 171,
																						width: `max((min(${c?.width || `100vw`}, 1600px) - 100px) / 2, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								1760) -
																								0 -
																								2039) /
																								2 +
																								0 +
																								0) +
																							60 +
																							100 +
																							40 +
																							0 +
																							0 +
																							0 +
																							0 +
																							352,
																					},
																				yhXwf1ILE:
																					{
																						height: 148,
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								1640) -
																								0 -
																								1793) /
																								2 +
																								0 +
																								0) +
																							40 +
																							100 +
																							40 +
																							515 +
																							0 +
																							0 +
																							0 +
																							346,
																					},
																			},
																			b,
																			T,
																		),
																		children:
																			p(
																				H,
																				{
																					className: `framer-11fp2te-container`,
																					layoutDependency:
																						j,
																					layoutId: `ayZq7CJev-container`,
																					nodeId: `ayZq7CJev`,
																					rendersWithMotion:
																						!0,
																					scopeId: `ITrwWYYRo`,
																					children:
																						p(
																							Ma,
																							{
																								height: `100%`,
																								id: `ayZq7CJev`,
																								layoutId: `ayZq7CJev`,
																								style: {
																									height: `100%`,
																									width: `100%`,
																								},
																								width: `100%`,
																							},
																						),
																				},
																			),
																	}),
																],
															}),
															F() &&
																p(Z, {
																	height: 573,
																	width: `max((min(${c?.width || `100vw`}, 1600px) - 160px) / 3, 50px)`,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			1471) -
																			0 -
																			1516) /
																			2 +
																			0 +
																			0) +
																		90 +
																		100 +
																		40 +
																		0 +
																		0 +
																		593,
																	...ho(
																		{
																			Sj2Lti1nD:
																				{
																					width: `max((min(${c?.width || `100vw`}, 1600px) - 100px) / 2, 50px)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							1760) -
																							0 -
																							2039) /
																							2 +
																							0 +
																							0) +
																						60 +
																						100 +
																						40 +
																						0 +
																						0 +
																						553,
																				},
																		},
																		b,
																		T,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-1809nk0-container`,
																			layoutDependency:
																				j,
																			layoutId: `ckTMyvQm0-container`,
																			nodeId: `ckTMyvQm0`,
																			rendersWithMotion:
																				!0,
																			scopeId: `ITrwWYYRo`,
																			children:
																				p(
																					po,
																					{
																						height: `100%`,
																						id: `ckTMyvQm0`,
																						layoutId: `ckTMyvQm0`,
																						N1FqUPL3o: `Maya Patel`,
																						sbAUmBoqU: `From day one they spoke in outcomes, not art. We got a design system, content guidelines, and a build that measured what mattered. Sales calls now start with "we loved your site" and our CAC is trending down.`,
																						style: {
																							width: `100%`,
																						},
																						V4cVQUEJP:
																							!1,
																						variant: `NhGgdAV1p`,
																						width: `100%`,
																						Wo6RZFeKg:
																							ki,
																						WQrvzoTZz: `Head of Growth, Finch Systems`,
																						...ho(
																							{
																								Sj2Lti1nD:
																									{
																										variant: `jlNxyOn5d`,
																									},
																							},
																							b,
																							T,
																						),
																					},
																				),
																		},
																	),
																}),
														],
													}),
													v(k.div, {
														className: `framer-wza2tk`,
														"data-framer-name": `2`,
														layoutDependency: j,
														layoutId: `ZbZ1sDYCb`,
														children: [
															I() &&
																p(Z, {
																	children: p(
																		H,
																		{
																			className: `framer-t9on8h-container`,
																			isAuthoredByUser:
																				!0,
																			isModuleExternal:
																				!0,
																			layoutDependency:
																				j,
																			layoutId: `yN6QgJDm8-container`,
																			nodeId: `yN6QgJDm8`,
																			rendersWithMotion:
																				!0,
																			scopeId: `ITrwWYYRo`,
																			children:
																				p(
																					on,
																					{
																						align: `flex-start`,
																						ariaLabel: ``,
																						arrowObject:
																							{
																								arrowFill: `rgba(0, 0, 0, 0.2)`,
																								arrowPadding: 20,
																								arrowRadius: 40,
																								arrowSize: 40,
																								showMouseControls:
																									!1,
																							},
																						axis: !0,
																						borderRadius: 0,
																						fadeObject:
																							{
																								fadeAlpha: 0,
																								fadeContent:
																									!1,
																								fadeInset: 0,
																								fadeTransition:
																									{
																										damping: 60,
																										delay: 0,
																										mass: 1,
																										stiffness: 500,
																										type: `spring`,
																									},
																								fadeWidth: 25,
																							},
																						gap: 10,
																						height: `100%`,
																						id: `yN6QgJDm8`,
																						layoutId: `yN6QgJDm8`,
																						padding: 0,
																						paddingBottom: 0,
																						paddingLeft: 0,
																						paddingPerSide:
																							!1,
																						paddingRight: 0,
																						paddingTop: 0,
																						progressObject:
																							{
																								dotsActiveOpacity: 1,
																								dotsBackground: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																								dotsBlur: 0,
																								dotsFill: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																								dotsGap: 8,
																								dotsInset: 15,
																								dotSize: 5,
																								dotsOpacity: 0.1,
																								dotsPadding: 10,
																								dotsRadius: 40,
																								showProgressDots:
																									!0,
																								showScrollbar:
																									!1,
																							},
																						sizingObject:
																							{
																								heightInset: 0,
																								heightRows: 1,
																								heightType: `auto`,
																								widthColumns: 2,
																								widthInset: 0,
																								widthType: `stretch`,
																							},
																						slots: [
																							p(
																								Z,
																								{
																									height: 573,
																									width: `340px`,
																									children:
																										p(
																											H,
																											{
																												className: `framer-3hwaz1-container`,
																												inComponentSlot:
																													!0,
																												layoutDependency:
																													j,
																												layoutId: `eo4F6agi_-container`,
																												nodeId: `eo4F6agi_`,
																												rendersWithMotion:
																													!0,
																												scopeId: `ITrwWYYRo`,
																												children:
																													p(
																														po,
																														{
																															height: `100%`,
																															id: `eo4F6agi_`,
																															layoutId: `eo4F6agi_`,
																															N1FqUPL3o: `Alex Chen`,
																															sbAUmBoqU: `The team challenged our assumptions, simplified the story, and shipped a modular site our marketers can actually edit. Performance, accessibility, analytics – nothing was an afterthought. I like team.`,
																															style: {
																																width: `100%`,
																															},
																															V4cVQUEJP:
																																!1,
																															variant: `jlNxyOn5d`,
																															width: `100%`,
																															Wo6RZFeKg:
																																Ci,
																															WQrvzoTZz: `Founder, Nova AI`,
																														},
																													),
																											},
																										),
																								},
																							),
																							p(
																								Z,
																								{
																									height: 573,
																									width: `340px`,
																									children:
																										p(
																											H,
																											{
																												className: `framer-15utoab-container`,
																												inComponentSlot:
																													!0,
																												layoutDependency:
																													j,
																												layoutId: `i1CAfpnGz-container`,
																												nodeId: `i1CAfpnGz`,
																												rendersWithMotion:
																													!0,
																												scopeId: `ITrwWYYRo`,
																												children:
																													p(
																														po,
																														{
																															height: `100%`,
																															id: `i1CAfpnGz`,
																															layoutId: `i1CAfpnGz`,
																															N1FqUPL3o: `Dana Fox`,
																															sbAUmBoqU: `They brought structure to chaos. \u2028The brief became a clear roadmap, the brand finally had a voice, and the site loaded fast on every device. We launched on schedule and saw meaningful lift in sign-ups within weeks.`,
																															style: {
																																width: `100%`,
																															},
																															V4cVQUEJP:
																																!1,
																															variant: `jlNxyOn5d`,
																															width: `100%`,
																															Wo6RZFeKg:
																																_i,
																															WQrvzoTZz: `VP Marketing, Orbit Labs`,
																														},
																													),
																											},
																										),
																								},
																							),
																							p(
																								Z,
																								{
																									height: 573,
																									width: `340px`,
																									children:
																										p(
																											H,
																											{
																												className: `framer-1bvtzzx-container`,
																												inComponentSlot:
																													!0,
																												layoutDependency:
																													j,
																												layoutId: `VFPKOJJ8Y-container`,
																												nodeId: `VFPKOJJ8Y`,
																												rendersWithMotion:
																													!0,
																												scopeId: `ITrwWYYRo`,
																												children:
																													p(
																														po,
																														{
																															height: `100%`,
																															id: `VFPKOJJ8Y`,
																															layoutId: `VFPKOJJ8Y`,
																															N1FqUPL3o: `Maya Patel`,
																															sbAUmBoqU: `From day one they spoke in outcomes, not art. We got a design system, content guidelines, and a build that measured what mattered. Sales calls now start with ‘we loved your site,’ and our CAC is trending down.`,
																															style: {
																																width: `100%`,
																															},
																															V4cVQUEJP:
																																!1,
																															variant: `jlNxyOn5d`,
																															width: `100%`,
																															Wo6RZFeKg:
																																ki,
																															WQrvzoTZz: `Head of Growth, Finch Systems`,
																														},
																													),
																											},
																										),
																								},
																							),
																							p(
																								Z,
																								{
																									height: 573,
																									width: `340px`,
																									children:
																										p(
																											H,
																											{
																												className: `framer-i9rb1j-container`,
																												inComponentSlot:
																													!0,
																												layoutDependency:
																													j,
																												layoutId: `kZyMJ3OFx-container`,
																												nodeId: `kZyMJ3OFx`,
																												rendersWithMotion:
																													!0,
																												scopeId: `ITrwWYYRo`,
																												children:
																													p(
																														po,
																														{
																															height: `100%`,
																															id: `kZyMJ3OFx`,
																															layoutId: `kZyMJ3OFx`,
																															N1FqUPL3o: `Leon Müller`,
																															sbAUmBoqU: `Clear process, crisp communication, and zero drama. Weekly demos kept us aligned, and every decision was documented. Post-launch we saw faster pages, lower bounce, and a brand narrative our team finally rallies behind.`,
																															style: {
																																width: `100%`,
																															},
																															V4cVQUEJP:
																																!1,
																															variant: `jlNxyOn5d`,
																															width: `100%`,
																															Wo6RZFeKg:
																																di,
																															WQrvzoTZz: `COO, Helix Robotics`,
																														},
																													),
																											},
																										),
																								},
																							),
																						],
																						snapObject:
																							{
																								fluid: !1,
																								snap: !0,
																								snapEdge: `center`,
																							},
																						style: {
																							height: `100%`,
																							width: `100%`,
																						},
																						width: `100%`,
																					},
																				),
																		},
																	),
																}),
															F() &&
																p(Z, {
																	height: 573,
																	width: `max((min(${c?.width || `100vw`}, 1600px) - 160px) / 3, 50px)`,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			1471) -
																			0 -
																			1516) /
																			2 +
																			0 +
																			0) +
																		90 +
																		100 +
																		40 +
																		0 +
																		0 +
																		0,
																	...ho(
																		{
																			Sj2Lti1nD:
																				{
																					width: `max((min(${c?.width || `100vw`}, 1600px) - 100px) / 2, 50px)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							1760) -
																							0 -
																							2039) /
																							2 +
																							0 +
																							0) +
																						60 +
																						100 +
																						40 +
																						0 +
																						0 +
																						0,
																				},
																		},
																		b,
																		T,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-11wjlwd-container`,
																			layoutDependency:
																				j,
																			layoutId: `ukGkzRJMp-container`,
																			nodeId: `ukGkzRJMp`,
																			rendersWithMotion:
																				!0,
																			scopeId: `ITrwWYYRo`,
																			children:
																				p(
																					po,
																					{
																						height: `100%`,
																						id: `ukGkzRJMp`,
																						layoutId: `ukGkzRJMp`,
																						N1FqUPL3o: `Alex Chen`,
																						sbAUmBoqU: `The team challenged our assumptions, simplified the story, and shipped a modular site our marketers can actually edit. Performance, accessibility, analytics – nothing was an afterthought. I like team.`,
																						style: {
																							width: `100%`,
																						},
																						V4cVQUEJP:
																							!0,
																						variant: `NhGgdAV1p`,
																						width: `100%`,
																						Wo6RZFeKg:
																							Ci,
																						WQrvzoTZz: `Founder, Nova AI`,
																						...ho(
																							{
																								Sj2Lti1nD:
																									{
																										variant: `jlNxyOn5d`,
																									},
																							},
																							b,
																							T,
																						),
																					},
																				),
																		},
																	),
																}),
															F() &&
																p(Z, {
																	height: 573,
																	width: `max((min(${c?.width || `100vw`}, 1600px) - 160px) / 3, 50px)`,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			1471) -
																			0 -
																			1516) /
																			2 +
																			0 +
																			0) +
																		90 +
																		100 +
																		40 +
																		0 +
																		0 +
																		623,
																	...ho(
																		{
																			Sj2Lti1nD:
																				{
																					width: `max((min(${c?.width || `100vw`}, 1600px) - 100px) / 2, 50px)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							1760) -
																							0 -
																							2039) /
																							2 +
																							0 +
																							0) +
																						60 +
																						100 +
																						40 +
																						0 +
																						0 +
																						603,
																				},
																		},
																		b,
																		T,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-li5elr-container`,
																			layoutDependency:
																				j,
																			layoutId: `RMgmR3EvU-container`,
																			nodeId: `RMgmR3EvU`,
																			rendersWithMotion:
																				!0,
																			scopeId: `ITrwWYYRo`,
																			children:
																				p(
																					po,
																					{
																						height: `100%`,
																						id: `RMgmR3EvU`,
																						layoutId: `RMgmR3EvU`,
																						N1FqUPL3o: `Leon Müller`,
																						sbAUmBoqU: `Clear process, crisp communication, and zero drama. Weekly demos kept us aligned, and every decision was documented. Post-launch we saw faster pages, lower bounce, and a brand narrative our team finally rallies behind.`,
																						style: {
																							width: `100%`,
																						},
																						V4cVQUEJP:
																							!1,
																						variant: `NhGgdAV1p`,
																						width: `100%`,
																						Wo6RZFeKg:
																							di,
																						WQrvzoTZz: `COO, Helix Robotics`,
																						...ho(
																							{
																								Sj2Lti1nD:
																									{
																										variant: `jlNxyOn5d`,
																									},
																							},
																							b,
																							T,
																						),
																					},
																				),
																		},
																	),
																}),
														],
													}),
													v(k.div, {
														className: `framer-3qdvbm`,
														"data-framer-name": `3`,
														layoutDependency: j,
														layoutId: `J9URtqrEb`,
														children: [
															F() &&
																p(Z, {
																	height: 573,
																	width: `max((min(${c?.width || `100vw`}, 1600px) - 160px) / 3, 50px)`,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			1471) -
																			0 -
																			1516) /
																			2 +
																			0 +
																			0) +
																		90 +
																		100 +
																		40 +
																		0 +
																		0 +
																		0,
																	...ho(
																		{
																			Sj2Lti1nD:
																				{
																					width: `max((max((min(${c?.width || `100vw`}, 1600px) - 100px) / 2, 50px) * 2 - 0px) / 2, 1px)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							1760) -
																							0 -
																							2039) /
																							2 +
																							0 +
																							0) +
																						60 +
																						100 +
																						40 +
																						1206 +
																						0,
																				},
																		},
																		b,
																		T,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-d8jepk-container`,
																			layoutDependency:
																				j,
																			layoutId: `BeKtHoyLZ-container`,
																			nodeId: `BeKtHoyLZ`,
																			rendersWithMotion:
																				!0,
																			scopeId: `ITrwWYYRo`,
																			children:
																				p(
																					po,
																					{
																						height: `100%`,
																						id: `BeKtHoyLZ`,
																						layoutId: `BeKtHoyLZ`,
																						N1FqUPL3o: `Dana Fox`,
																						sbAUmBoqU: `They brought structure to chaos. \u2028The brief became a clear roadmap, the brand finally had a voice, and the site loaded fast on every device. We launched on schedule and saw meaningful lift in sign-ups within weeks.`,
																						style: {
																							width: `100%`,
																						},
																						V4cVQUEJP:
																							!1,
																						variant: `NhGgdAV1p`,
																						width: `100%`,
																						Wo6RZFeKg:
																							_i,
																						WQrvzoTZz: `VP Marketing, Orbit Labs`,
																						...ho(
																							{
																								Sj2Lti1nD:
																									{
																										variant: `jlNxyOn5d`,
																									},
																							},
																							b,
																							T,
																						),
																					},
																				),
																		},
																	),
																}),
															P() &&
																p(k.div, {
																	className: `framer-26igsy`,
																	"data-framer-name": `Spacer`,
																	layoutDependency:
																		j,
																	layoutId: `KF6uh_v6K`,
																}),
															v(k.div, {
																className: `framer-1yw39j4`,
																"data-framer-name": `Clients`,
																layoutDependency:
																	j,
																layoutId: `n5enGaSMb`,
																children: [
																	p(Z, {
																		height: 193,
																		width: `max((min(${c?.width || `100vw`}, 1600px) - 160px) / 3, 50px)`,
																		y:
																			(c?.y ||
																				0) +
																			0 +
																			(((c?.height ||
																				1471) -
																				0 -
																				1516) /
																				2 +
																				0 +
																				0) +
																			90 +
																			100 +
																			40 +
																			0 +
																			0 +
																			623 +
																			0 +
																			0,
																		...ho(
																			{
																				Sj2Lti1nD:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 100px) / 2, 50px) * 2 - 0px) / 2, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								1760) -
																								0 -
																								2039) /
																								2 +
																								0 +
																								0) +
																							60 +
																							100 +
																							40 +
																							1206 +
																							0 +
																							0 +
																							0,
																					},
																				yhXwf1ILE:
																					{
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								1640) -
																								0 -
																								1793) /
																								2 +
																								0 +
																								0) +
																							40 +
																							100 +
																							40 +
																							1034 +
																							0 +
																							0 +
																							0 +
																							0,
																					},
																			},
																			b,
																			T,
																		),
																		children:
																			p(
																				H,
																				{
																					className: `framer-4kxjo9-container`,
																					layoutDependency:
																						j,
																					layoutId: `SLTdhsxcM-container`,
																					nodeId: `SLTdhsxcM`,
																					rendersWithMotion:
																						!0,
																					scopeId: `ITrwWYYRo`,
																					children:
																						p(
																							Ka,
																							{
																								height: `100%`,
																								id: `SLTdhsxcM`,
																								ie9kQKUTB: `Repeat Clients`,
																								layoutId: `SLTdhsxcM`,
																								NniDKySK_: `93%`,
																								style: {
																									width: `100%`,
																								},
																								variant: `Klu5O27zL`,
																								width: `100%`,
																								...ho(
																									{
																										Sj2Lti1nD:
																											{
																												variant: `DJYa0xN6I`,
																											},
																										yhXwf1ILE:
																											{
																												variant: `yDrvcuK2u`,
																											},
																									},
																									b,
																									T,
																								),
																							},
																						),
																				},
																			),
																	}),
																	p(Z, {
																		height: 193,
																		width: `max((min(${c?.width || `100vw`}, 1600px) - 160px) / 3, 50px)`,
																		y:
																			(c?.y ||
																				0) +
																			0 +
																			(((c?.height ||
																				1471) -
																				0 -
																				1516) /
																				2 +
																				0 +
																				0) +
																			90 +
																			100 +
																			40 +
																			0 +
																			0 +
																			623 +
																			0 +
																			196,
																		...ho(
																			{
																				Sj2Lti1nD:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 100px) / 2, 50px) * 2 - 0px) / 2, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								1760) -
																								0 -
																								2039) /
																								2 +
																								0 +
																								0) +
																							60 +
																							100 +
																							40 +
																							1206 +
																							0 +
																							0 +
																							196,
																					},
																				yhXwf1ILE:
																					{
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								1640) -
																								0 -
																								1793) /
																								2 +
																								0 +
																								0) +
																							40 +
																							100 +
																							40 +
																							1034 +
																							0 +
																							0 +
																							0 +
																							196,
																					},
																			},
																			b,
																			T,
																		),
																		children:
																			p(
																				H,
																				{
																					className: `framer-bvtels-container`,
																					layoutDependency:
																						j,
																					layoutId: `xMDaedXth-container`,
																					nodeId: `xMDaedXth`,
																					rendersWithMotion:
																						!0,
																					scopeId: `ITrwWYYRo`,
																					children:
																						p(
																							Ka,
																							{
																								height: `100%`,
																								id: `xMDaedXth`,
																								ie9kQKUTB: `Increased clients profits`,
																								layoutId: `xMDaedXth`,
																								NniDKySK_: `100×`,
																								style: {
																									width: `100%`,
																								},
																								variant: `Klu5O27zL`,
																								width: `100%`,
																								...ho(
																									{
																										Sj2Lti1nD:
																											{
																												variant: `DJYa0xN6I`,
																											},
																										yhXwf1ILE:
																											{
																												variant: `yDrvcuK2u`,
																											},
																									},
																									b,
																									T,
																								),
																							},
																						),
																				},
																			),
																	}),
																	p(se, {
																		background:
																			{
																				alt: ``,
																				fit: `fill`,
																				intrinsicHeight: 195,
																				intrinsicWidth: 450,
																				loading:
																					K(
																						(c?.y ||
																							0) +
																							0 +
																							(((c?.height ||
																								1471) -
																								0 -
																								1516) /
																								2 +
																								0 +
																								0) +
																							90 +
																							100 +
																							40 +
																							0 +
																							0 +
																							623 +
																							0 +
																							392,
																					),
																				pixelHeight: 390,
																				pixelWidth: 900,
																				sizes: `max((min(${c?.width || `100vw`}, 1600px) - 160px) / 3, 50px)`,
																				...Eo(
																					h,
																				),
																			},
																		className: `framer-1b0hv1d`,
																		"data-framer-name": `Image`,
																		fitImageDimension: `height`,
																		layoutDependency:
																			j,
																		layoutId: `EAwzetd8G`,
																		style: {
																			borderBottomLeftRadius: 10,
																			borderBottomRightRadius: 10,
																			borderTopLeftRadius: 10,
																			borderTopRightRadius: 10,
																		},
																		...ho(
																			{
																				Sj2Lti1nD:
																					{
																						background:
																							{
																								alt: ``,
																								fit: `fill`,
																								intrinsicHeight: 195,
																								intrinsicWidth: 450,
																								loading:
																									K(
																										(c?.y ||
																											0) +
																											0 +
																											(((c?.height ||
																												1760) -
																												0 -
																												2039) /
																												2 +
																												0 +
																												0) +
																											60 +
																											100 +
																											40 +
																											1206 +
																											0 +
																											0 +
																											392,
																									),
																								pixelHeight: 390,
																								pixelWidth: 900,
																								sizes: `max((max((min(${c?.width || `100vw`}, 1600px) - 100px) / 2, 50px) * 2 - 0px) / 2, 1px)`,
																								...Eo(
																									h,
																								),
																							},
																					},
																				yhXwf1ILE:
																					{
																						background:
																							{
																								alt: ``,
																								fit: `fill`,
																								intrinsicHeight: 195,
																								intrinsicWidth: 450,
																								loading:
																									K(
																										(c?.y ||
																											0) +
																											0 +
																											(((c?.height ||
																												1640) -
																												0 -
																												1793) /
																												2 +
																												0 +
																												0) +
																											40 +
																											100 +
																											40 +
																											1034 +
																											0 +
																											0 +
																											0 +
																											392,
																									),
																								pixelHeight: 390,
																								pixelWidth: 900,
																								sizes: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																								...Eo(
																									h,
																								),
																							},
																					},
																			},
																			b,
																			T,
																		),
																	}),
																],
															}),
														],
													}),
												],
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
					`.framer-fDGHv.framer-1neseoi, .framer-fDGHv .framer-1neseoi { display: block; }`,
					`.framer-fDGHv.framer-iskzm6 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
					`.framer-fDGHv .framer-41jlvx { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: visible; padding: 90px 40px 90px 40px; position: relative; width: 100%; }`,
					`.framer-fDGHv .framer-ktwlxr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-fDGHv .framer-lglisk { flex: 1 0 0px; height: 28px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
					`.framer-fDGHv .framer-1e0tpah { flex: none; height: auto; left: -5px; position: absolute; top: 50%; white-space: pre; width: auto; }`,
					`.framer-fDGHv .framer-1n51rvi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
					`.framer-fDGHv .framer-85quuw-container { flex: 1 0 0px; height: 100px; position: relative; width: 1px; }`,
					`.framer-fDGHv .framer-8xt1wi { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; min-height: 28px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
					`.framer-fDGHv .framer-1a15rp2 { display: grid; flex: none; gap: 0px 40px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 40px 0px 0px 0px; position: relative; width: 100%; }`,
					`.framer-fDGHv .framer-ry0log, .framer-fDGHv .framer-wza2tk { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-fDGHv .framer-1gp7eec, .framer-fDGHv .framer-1yw39j4 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 3px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-fDGHv .framer-y9bs89, .framer-fDGHv .framer-1b0hv1d { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
					`.framer-fDGHv .framer-1ju22ct-container, .framer-fDGHv .framer-1809nk0-container, .framer-fDGHv .framer-11wjlwd-container, .framer-fDGHv .framer-li5elr-container, .framer-fDGHv .framer-d8jepk-container, .framer-fDGHv .framer-4kxjo9-container, .framer-fDGHv .framer-bvtels-container { flex: none; height: auto; position: relative; width: 100%; }`,
					`.framer-fDGHv .framer-11fp2te-container { flex: none; height: 195px; position: relative; width: 100%; }`,
					`.framer-fDGHv .framer-t9on8h-container { flex: none; height: 490px; position: relative; width: 100%; }`,
					`.framer-fDGHv .framer-3hwaz1-container, .framer-fDGHv .framer-15utoab-container, .framer-fDGHv .framer-1bvtzzx-container, .framer-fDGHv .framer-i9rb1j-container { height: auto; position: relative; width: 340px; }`,
					`.framer-fDGHv .framer-3qdvbm { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-fDGHv .framer-26igsy { flex: none; height: 50px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-fDGHv.framer-v-10fcwe3.framer-iskzm6 { width: 810px; }`,
					`.framer-fDGHv.framer-v-10fcwe3 .framer-41jlvx { padding: 60px 30px 60px 30px; }`,
					`.framer-fDGHv.framer-v-10fcwe3 .framer-1a15rp2 { gap: 30px 40px; grid-template-columns: repeat(2, minmax(50px, 1fr)); }`,
					`.framer-fDGHv.framer-v-10fcwe3 .framer-ry0log { gap: 30px; }`,
					`.framer-fDGHv.framer-v-10fcwe3 .framer-11fp2te-container { height: 171px; }`,
					`.framer-fDGHv.framer-v-10fcwe3 .framer-wza2tk { align-self: end; gap: 30px; justify-self: center; }`,
					`.framer-fDGHv.framer-v-10fcwe3 .framer-3qdvbm { flex-direction: row; gap: 40px; grid-column: span 2; }`,
					`.framer-fDGHv.framer-v-10fcwe3 .framer-d8jepk-container, .framer-fDGHv.framer-v-10fcwe3 .framer-1yw39j4 { flex: 1 0 0px; width: 1px; }`,
					`.framer-fDGHv.framer-v-10n9296.framer-iskzm6 { width: 390px; }`,
					`.framer-fDGHv.framer-v-10n9296 .framer-41jlvx { padding: 40px 25px 40px 25px; }`,
					`.framer-fDGHv.framer-v-10n9296 .framer-ktwlxr { gap: 10px; }`,
					`.framer-fDGHv.framer-v-10n9296 .framer-lglisk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; min-height: 27px; min-width: 100px; padding: 0px; width: min-content; }`,
					`.framer-fDGHv.framer-v-10n9296 .framer-1e0tpah { z-index: 1; }`,
					`.framer-fDGHv.framer-v-10n9296 .framer-1a15rp2 { gap: 25px 25px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }`,
					`.framer-fDGHv.framer-v-10n9296 .framer-ry0log { gap: 25px; order: 1; }`,
					`.framer-fDGHv.framer-v-10n9296 .framer-11fp2te-container { height: 148px; }`,
					`.framer-fDGHv.framer-v-10n9296 .framer-wza2tk { gap: 25px; order: 0; }`,
					`.framer-fDGHv.framer-v-10n9296 .framer-3qdvbm { gap: 25px; grid-column: span 1; order: 2; }`,
					...pt,
					...Tt,
				],
				`framer-fDGHv`,
			)),
			(No = Mo),
			(Mo.displayName = `Testimonials - Section`),
			(Mo.defaultProps = { height: 1471, width: 1200 }),
			P(Mo, {
				variant: {
					options: [`bYW4OT3Nj`, `Sj2Lti1nD`, `yhXwf1ILE`],
					optionTitles: [`Desktop - 1200`, `Tablet`, `Phone`],
					title: `Variant`,
					type: J.Enum,
				},
				odvJxZw1T: {
					defaultValue: `[05]`,
					displayTextArea: !1,
					title: `Section Number`,
					type: J.String,
				},
				Zfo9mJpjF: {
					__defaultAssetReference: `data:framer/asset-reference,h354KZtk5kmg0VJiEtNwQdpZc.jpg?originalFilename=Frame+59%402x.jpg&preferredSize=full&width=900&height=390`,
					__vekterDefault: {
						alt: ``,
						assetReference: `data:framer/asset-reference,h354KZtk5kmg0VJiEtNwQdpZc.jpg?originalFilename=Frame+59%402x.jpg&preferredSize=full&width=900&height=390`,
					},
					title: `Right Image`,
					type: J.ResponsiveImage,
				},
				a_b3bYSzg: {
					__defaultAssetReference: `data:framer/asset-reference,JaRVOtDLWyzbmlq9DffwGhFiGEk.jpg?originalFilename=Frame+59%402x.jpg&preferredSize=full&width=904&height=390`,
					__vekterDefault: {
						alt: ``,
						assetReference: `data:framer/asset-reference,JaRVOtDLWyzbmlq9DffwGhFiGEk.jpg?originalFilename=Frame+59%402x.jpg&preferredSize=full&width=904&height=390`,
					},
					title: `Left Image`,
					type: J.ResponsiveImage,
				},
			}),
			de(
				Mo,
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
							{
								cssFamilyName: `Space Mono`,
								source: `google`,
								style: `normal`,
								uiFamilyName: `Space Mono`,
								url: `https://fonts.gstatic.com/s/spacemono/v17/i7dPIFZifjKcF5UAWdDRUEN2RFq7AwU.woff2`,
								weight: `400`,
							},
						],
					},
					...go,
					..._o,
					...vo,
					...yo,
					...bo,
					...G(mt),
					...G(Et),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function Fo(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Io,
	Lo,
	Ro,
	zo,
	Bo,
	Vo,
	Ho,
	Uo,
	Wo,
	Go,
	Ko,
	qo,
	Jo,
	Yo,
	Xo,
	Zo,
	Qo,
	$o,
	es,
	ts = e(() => {
		(y(),
			q(),
			N(),
			l(),
			Se(),
			Re(),
			Nt(),
			vt(),
			Bt(),
			Mr(),
			(Io = F(te(R))),
			(Lo = B(jr)),
			(Ro = ee(jr)),
			(zo = [
				`ipJnjQMme`,
				`dRvWEwRlb`,
				`wPEgEVXSR`,
				`a29KvRO3R`,
				`ItUJOTNSa`,
				`NsNLyvBWj`,
				`xFImwaHDH`,
				`bNsjfSikG`,
				`nCZKaHek2`,
				`cw8cZIAQT`,
				`HzVeCwGkF`,
				`gtj_ShKNk`,
				`th8xp_CDP`,
			]),
			(Bo = `framer-iMqF7`),
			(Vo = {
				a29KvRO3R: `framer-v-1q1f61f`,
				bNsjfSikG: `framer-v-nxosv9`,
				cw8cZIAQT: `framer-v-1r96jv7`,
				dRvWEwRlb: `framer-v-cgd6n8`,
				gtj_ShKNk: `framer-v-1fbm5wd`,
				HzVeCwGkF: `framer-v-1jxba2v`,
				ipJnjQMme: `framer-v-1r93okk`,
				ItUJOTNSa: `framer-v-1v1oyy2`,
				nCZKaHek2: `framer-v-r9zipn`,
				NsNLyvBWj: `framer-v-s7rfgy`,
				th8xp_CDP: `framer-v-84ea7j`,
				wPEgEVXSR: `framer-v-b6vamc`,
				xFImwaHDH: `framer-v-5uh70z`,
			}),
			(Ho = {
				delay: 0,
				duration: 0.5,
				ease: [0, 0.82, 0.32, 1.02],
				type: `tween`,
			}),
			(Uo = {
				delay: 0,
				duration: 0.8,
				ease: [0, 0.82, 0.32, 1.02],
				type: `tween`,
			}),
			(Wo = {
				opacity: 1,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0,
				transition: {
					bounce: 0.2,
					delay: 0,
					duration: 0.8,
					type: `spring`,
				},
				x: 0,
				y: 0,
			}),
			(Go = {
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
			(Ko = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(qo = k.create(i)),
			(Jo = {
				"Brand Strategy": `SP7XAEd6j`,
				"Content & Art": `KvncGGvMK`,
				"Motion & 3D": `Vc8J_9MHY`,
				"Visual Identity": `KP_2YTyir`,
				"Web Design": `wE1xRBhw2`,
				"Web Dev": `b9Wyp8VLX`,
			}),
			(Yo = {
				"Space Around": `space-around`,
				"Space Between": `space-between`,
				"Space Evenly": `space-evenly`,
				Center: `center`,
				End: `flex-end`,
				Start: `flex-start`,
			}),
			(Xo = {
				"Center - Expand": `bNsjfSikG`,
				"Center - Hover": `a29KvRO3R`,
				"Left - Expand": `xFImwaHDH`,
				"Left - Hover": `dRvWEwRlb`,
				"Phone - Expand": `th8xp_CDP`,
				"Right - Expand": `nCZKaHek2`,
				"Right - Hover": `NsNLyvBWj`,
				"Tablet - Expand": `HzVeCwGkF`,
				Center: `wPEgEVXSR`,
				Left: `ipJnjQMme`,
				Phone: `gtj_ShKNk`,
				Right: `ItUJOTNSa`,
				Tablet: `cw8cZIAQT`,
			}),
			(Zo = ({
				chooseImageEditImageInServicesCursorsComponent: e,
				cursor: t,
				description: n,
				fullDescription: r,
				height: i,
				id: a,
				position: o,
				title: s,
				width: c,
				...l
			}) => ({
				...l,
				CbPs4xTeB:
					r ??
					l.CbPs4xTeB ??
					`We’re a senior creative digital agency focused on clarity and performance. We align strategy, brand, and web into modular systems that ship on time and scale. Our values are simplicity, accountability and measurable impact. The team is small and senior; every project has a lead for strategy, design and build.`,
				FCTykdhGu: s ?? l.FCTykdhGu ?? `Web Design`,
				NKbehdgZd: t ?? l.NKbehdgZd,
				variant: Xo[l.variant] ?? l.variant ?? `ipJnjQMme`,
				WLm9c_UBA: Jo[e] ?? e ?? l.WLm9c_UBA ?? `SP7XAEd6j`,
				xNppcy1V8: Yo[o] ?? o ?? l.xNppcy1V8 ?? `flex-start`,
				zaexmKqZT:
					n ?? l.zaexmKqZT ?? `UX/UI, design systems, prototypes.`,
			})),
			(Qo = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			($o = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e(),
						c = X(),
						{
							style: l,
							className: u,
							layoutId: d,
							variant: f,
							FCTykdhGu: m,
							zaexmKqZT: h,
							CbPs4xTeB: g,
							WLm9c_UBA: y,
							xNppcy1V8: b,
							NKbehdgZd: x,
							...C
						} = Zo(e),
						{
							baseVariant: w,
							classNames: T,
							clearLoadingGesture: E,
							gestureHandlers: D,
							gestureVariant: O,
							isLoading: A,
							setGestureState: j,
							setVariant: N,
							variants: P,
						} = W({
							cycleOrder: zo,
							defaultVariant: `ipJnjQMme`,
							ref: r,
							variant: f,
							variantClassNames: Vo,
						}),
						F = Qo(e, P),
						{ activeVariantCallback: I, delay: z } = oe(w),
						ee = I(async (...e) => {
							(j({ isPressed: !1 }), N(`HzVeCwGkF`));
						}),
						B = I(async (...e) => {
							(j({ isPressed: !1 }), N(`cw8cZIAQT`));
						}),
						V = I(async (...e) => {
							(j({ isPressed: !1 }), N(`th8xp_CDP`));
						}),
						te = I(async (...e) => {
							(j({ isPressed: !1 }), N(`gtj_ShKNk`));
						}),
						ne = I(async (...e) => {
							N(`dRvWEwRlb`);
						}),
						re = I(async (...e) => {
							N(`xFImwaHDH`);
						}),
						ie = I(async (...e) => {
							N(`ipJnjQMme`);
						}),
						G = I(async (...e) => {
							N(`a29KvRO3R`);
						}),
						K = I(async (...e) => {
							N(`bNsjfSikG`);
						}),
						q = I(async (...e) => {
							N(`wPEgEVXSR`);
						}),
						J = I(async (...e) => {
							N(`NsNLyvBWj`);
						}),
						ae = I(async (...e) => {
							N(`nCZKaHek2`);
						}),
						se = I(async (...e) => {
							N(`ItUJOTNSa`);
						}),
						Y = I(async (...e) => {
							N(`dRvWEwRlb`);
						}),
						ce = I(async (...e) => {
							N(`a29KvRO3R`);
						}),
						le = I(async (...e) => {
							N(`NsNLyvBWj`);
						}),
						ue = U(Bo, Mt, Ut, Te, Ve, Ct),
						de = () => ![`cw8cZIAQT`, `gtj_ShKNk`].includes(w),
						fe = () =>
							!![
								`cw8cZIAQT`,
								`HzVeCwGkF`,
								`gtj_ShKNk`,
								`th8xp_CDP`,
							].includes(w),
						pe = () =>
							![
								`xFImwaHDH`,
								`bNsjfSikG`,
								`nCZKaHek2`,
								`cw8cZIAQT`,
								`HzVeCwGkF`,
								`gtj_ShKNk`,
								`th8xp_CDP`,
							].includes(w),
						me = () =>
							!![
								`xFImwaHDH`,
								`bNsjfSikG`,
								`nCZKaHek2`,
								`HzVeCwGkF`,
								`th8xp_CDP`,
							].includes(w),
						he = () => !![`HzVeCwGkF`, `th8xp_CDP`].includes(w);
					return p(M, {
						id: d ?? a,
						children: p(qo, {
							animate: P,
							initial: !1,
							children: p(Ko, {
								value: Ho,
								...Fo(
									{
										bNsjfSikG: { value: Uo },
										nCZKaHek2: { value: Uo },
										xFImwaHDH: { value: Uo },
									},
									w,
									O,
								),
								children: p(k.div, {
									...C,
									...D,
									className: U(ue, `framer-1r93okk`, u, T),
									"data-framer-name": `Left`,
									layoutDependency: F,
									layoutId: `ipJnjQMme`,
									ref: r,
									style: { ...l },
									...Fo(
										{
											a29KvRO3R: {
												"data-framer-name": `Center - Hover`,
											},
											bNsjfSikG: {
												"data-framer-name": `Center - Expand`,
											},
											cw8cZIAQT: {
												"data-framer-name": `Tablet`,
												"data-highlight": !0,
												onTap: ee,
											},
											dRvWEwRlb: {
												"data-framer-name": `Left - Hover`,
											},
											gtj_ShKNk: {
												"data-framer-name": `Phone`,
												"data-highlight": !0,
												onTap: V,
											},
											HzVeCwGkF: {
												"data-framer-name": `Tablet - Expand`,
												"data-highlight": !0,
												onTap: B,
											},
											ItUJOTNSa: {
												"data-framer-name": `Right`,
											},
											nCZKaHek2: {
												"data-framer-name": `Right - Expand`,
											},
											NsNLyvBWj: {
												"data-framer-name": `Right - Hover`,
											},
											th8xp_CDP: {
												"data-framer-name": `Phone - Expand`,
												"data-highlight": !0,
												onTap: te,
											},
											wPEgEVXSR: {
												"data-framer-name": `Center`,
											},
											xFImwaHDH: {
												"data-framer-name": `Left - Expand`,
											},
										},
										w,
										O,
									),
									children: p(k.div, {
										className: `framer-1wjghah`,
										layoutDependency: F,
										layoutId: `ktYcab3XD`,
										style: { "--19c9d69": b },
										children: v(k.div, {
											className: `framer-cotk17`,
											"data-framer-cursor": x,
											"data-framer-name": `Card`,
											"data-highlight": !0,
											layoutDependency: F,
											layoutId: `aAYNkb34_`,
											onMouseEnter: ne,
											style: {
												backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
												borderBottomLeftRadius: 8,
												borderBottomRightRadius: 8,
												borderTopLeftRadius: 8,
												borderTopRightRadius: 8,
											},
											variants: {
												bNsjfSikG: {
													backgroundColor: `var(--token-5943631d-b25e-4d17-8eac-40dd8ac14063, rgb(26, 26, 26))`,
												},
												HzVeCwGkF: {
													backgroundColor: `var(--token-5943631d-b25e-4d17-8eac-40dd8ac14063, rgb(26, 26, 26))`,
												},
												nCZKaHek2: {
													backgroundColor: `var(--token-5943631d-b25e-4d17-8eac-40dd8ac14063, rgb(26, 26, 26))`,
												},
												th8xp_CDP: {
													backgroundColor: `var(--token-5943631d-b25e-4d17-8eac-40dd8ac14063, rgb(26, 26, 26))`,
												},
												xFImwaHDH: {
													backgroundColor: `var(--token-5943631d-b25e-4d17-8eac-40dd8ac14063, rgb(26, 26, 26))`,
												},
											},
											...Fo(
												{
													a29KvRO3R: {
														onMouseEnter: void 0,
														onMouseLeave: q,
														onTap: K,
													},
													bNsjfSikG: {
														onMouseEnter: void 0,
														onTap: ce,
													},
													cw8cZIAQT: {
														"data-highlight":
															void 0,
														onMouseEnter: void 0,
													},
													dRvWEwRlb: {
														onMouseEnter: void 0,
														onMouseLeave: ie,
														onTap: re,
													},
													gtj_ShKNk: {
														"data-highlight":
															void 0,
														onMouseEnter: void 0,
													},
													HzVeCwGkF: {
														"data-highlight":
															void 0,
														onMouseEnter: void 0,
													},
													ItUJOTNSa: {
														onMouseEnter: J,
													},
													nCZKaHek2: {
														onMouseEnter: void 0,
														onTap: le,
													},
													NsNLyvBWj: {
														onMouseEnter: void 0,
														onMouseLeave: se,
														onTap: ae,
													},
													th8xp_CDP: {
														"data-highlight":
															void 0,
														onMouseEnter: void 0,
													},
													wPEgEVXSR: {
														onMouseEnter: G,
													},
													xFImwaHDH: {
														onMouseEnter: void 0,
														onTap: Y,
													},
												},
												w,
												O,
											),
											children: [
												de() &&
													p(k.div, {
														className: `framer-87jfmp`,
														layoutDependency: F,
														layoutId: `bxxg00drm`,
														style: {
															backgroundColor: `var(--token-5943631d-b25e-4d17-8eac-40dd8ac14063, rgb(26, 26, 26))`,
														},
													}),
												de() &&
													p(k.div, {
														className: `framer-1rf6x1y`,
														layoutDependency: F,
														layoutId: `Rey_nWtE2`,
														style: {
															backgroundColor: `var(--token-5943631d-b25e-4d17-8eac-40dd8ac14063, rgb(26, 26, 26))`,
														},
													}),
												v(k.div, {
													className: `framer-gqrxz6`,
													layoutDependency: F,
													layoutId: `bKCO_H0Lw`,
													children: [
														fe() &&
															p(k.div, {
																className: `framer-1pjswn8`,
																"data-framer-name": `Arrow`,
																layoutDependency:
																	F,
																layoutId: `AkzmNojM6`,
																style: {
																	rotate: 0,
																},
																variants: {
																	gtj_ShKNk: {
																		rotate: 0,
																	},
																	HzVeCwGkF: {
																		rotate: 180,
																	},
																	th8xp_CDP: {
																		rotate: 180,
																	},
																},
																children: p(L, {
																	className: `framer-165stwd`,
																	layoutDependency:
																		F,
																	layoutId: `oRHN_CCxP`,
																	opacity: 1,
																	requiresOverflowVisible:
																		!0,
																	svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 4" overflow="visible"><path d="M 0 0 L 4 4 L 8 0" fill="transparent" stroke-width="1.5" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>`,
																	withExternalLayout:
																		!0,
																	...Fo(
																		{
																			HzVeCwGkF:
																				{
																					svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 4" overflow="visible"><path d="M 0 0 L 4 4 L 8 0" fill="transparent" stroke-width="1.5" stroke="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
																				},
																			th8xp_CDP:
																				{
																					svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 4" overflow="visible"><path d="M 0 0 L 4 4 L 8 0" fill="transparent" stroke-width="1.5" stroke="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
																				},
																		},
																		w,
																		O,
																	),
																}),
															}),
														p(R, {
															__fromCanvasComponent:
																!0,
															children: p(i, {
																children: p(
																	k.h2,
																	{
																		className: `framer-styles-preset-g6dfhq`,
																		"data-styles-preset": `MgmvEPIz7`,
																		style: {
																			"--framer-text-color": `var(--extracted-1of0zx5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																		},
																		children: `Web Design`,
																	},
																),
															}),
															className: `framer-cw6b12`,
															"data-framer-name": `Web Design`,
															fonts: [`Inter`],
															layoutDependency: F,
															layoutId: `ub4WxA0q_`,
															style: {
																"--extracted-1of0zx5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																"--framer-paragraph-spacing": `0px`,
															},
															text: m,
															variants: {
																a29KvRO3R: {
																	"--extracted-1of0zx5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
																bNsjfSikG: {
																	"--extracted-1of0zx5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
																cw8cZIAQT: {
																	"--extracted-a0htzi": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																},
																dRvWEwRlb: {
																	"--extracted-1of0zx5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
																gtj_ShKNk: {
																	"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																},
																HzVeCwGkF: {
																	"--extracted-a0htzi": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
																nCZKaHek2: {
																	"--extracted-1of0zx5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
																NsNLyvBWj: {
																	"--extracted-1of0zx5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
																th8xp_CDP: {
																	"--extracted-1w1cjl5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
																xFImwaHDH: {
																	"--extracted-1of0zx5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
															},
															verticalAlignment: `top`,
															withExternalLayout:
																!0,
															...Fo(
																{
																	a29KvRO3R: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h2,
																							{
																								className: `framer-styles-preset-g6dfhq`,
																								"data-styles-preset": `MgmvEPIz7`,
																								style: {
																									"--framer-text-color": `var(--extracted-1of0zx5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `Web Design`,
																							},
																						),
																				},
																			),
																	},
																	bNsjfSikG: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h2,
																							{
																								className: `framer-styles-preset-g6dfhq`,
																								"data-styles-preset": `MgmvEPIz7`,
																								style: {
																									"--framer-text-color": `var(--extracted-1of0zx5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `Web Design`,
																							},
																						),
																				},
																			),
																	},
																	cw8cZIAQT: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h3,
																							{
																								className: `framer-styles-preset-1yuak3c`,
																								"data-styles-preset": `zczqo4Z8y`,
																								style: {
																									"--framer-text-color": `var(--extracted-a0htzi, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																								},
																								children: `Web Design`,
																							},
																						),
																				},
																			),
																	},
																	dRvWEwRlb: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h2,
																							{
																								className: `framer-styles-preset-g6dfhq`,
																								"data-styles-preset": `MgmvEPIz7`,
																								style: {
																									"--framer-text-color": `var(--extracted-1of0zx5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `Web Design`,
																							},
																						),
																				},
																			),
																	},
																	gtj_ShKNk: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h6,
																							{
																								className: `framer-styles-preset-41ki07`,
																								"data-styles-preset": `hmRgK3K6v`,
																								style: {
																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																								},
																								children: `Web Design`,
																							},
																						),
																				},
																			),
																	},
																	HzVeCwGkF: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h3,
																							{
																								className: `framer-styles-preset-1yuak3c`,
																								"data-styles-preset": `zczqo4Z8y`,
																								style: {
																									"--framer-text-color": `var(--extracted-a0htzi, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `Web Design`,
																							},
																						),
																				},
																			),
																	},
																	nCZKaHek2: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h2,
																							{
																								className: `framer-styles-preset-g6dfhq`,
																								"data-styles-preset": `MgmvEPIz7`,
																								style: {
																									"--framer-text-color": `var(--extracted-1of0zx5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `Web Design`,
																							},
																						),
																				},
																			),
																	},
																	NsNLyvBWj: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h2,
																							{
																								className: `framer-styles-preset-g6dfhq`,
																								"data-styles-preset": `MgmvEPIz7`,
																								style: {
																									"--framer-text-color": `var(--extracted-1of0zx5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `Web Design`,
																							},
																						),
																				},
																			),
																	},
																	th8xp_CDP: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h6,
																							{
																								className: `framer-styles-preset-41ki07`,
																								"data-styles-preset": `hmRgK3K6v`,
																								style: {
																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `Web Design`,
																							},
																						),
																				},
																			),
																	},
																	xFImwaHDH: {
																		children:
																			p(
																				i,
																				{
																					children:
																						p(
																							k.h2,
																							{
																								className: `framer-styles-preset-g6dfhq`,
																								"data-styles-preset": `MgmvEPIz7`,
																								style: {
																									"--framer-text-color": `var(--extracted-1of0zx5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `Web Design`,
																							},
																						),
																				},
																			),
																	},
																},
																w,
																O,
															),
														}),
													],
												}),
												pe() &&
													p(Io, {
														__fromCanvasComponent:
															!0,
														children: p(i, {
															children: p(k.h6, {
																className: `framer-styles-preset-12tby5a`,
																"data-styles-preset": `j9HsFBXUW`,
																style: {
																	"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `UX/UI, design systems, prototypes.`,
															}),
														}),
														className: `framer-1lctdt2`,
														"data-framer-appear-id": `1lctdt2`,
														fonts: [`Inter`],
														layoutDependency: F,
														layoutId: `m9gzGh4h6`,
														style: {
															"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
															"--framer-paragraph-spacing": `0px`,
														},
														text: h,
														variants: {
															a29KvRO3R: {
																"--extracted-1w1cjl5": `var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7))`,
															},
															dRvWEwRlb: {
																"--extracted-1w1cjl5": `var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7))`,
															},
															NsNLyvBWj: {
																"--extracted-1w1cjl5": `var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7))`,
															},
														},
														verticalAlignment: `top`,
														withExternalLayout: !0,
														...Fo(
															{
																a29KvRO3R: {
																	__perspectiveFX:
																		!1,
																	__smartComponentFX:
																		!0,
																	__targetOpacity: 1,
																	animate: Wo,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-12tby5a`,
																						"data-styles-preset": `j9HsFBXUW`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7)))`,
																						},
																						children: `UX/UI, design systems, prototypes.`,
																					},
																				),
																		},
																	),
																	initial: Go,
																	optimized:
																		!0,
																},
																dRvWEwRlb: {
																	__perspectiveFX:
																		!1,
																	__smartComponentFX:
																		!0,
																	__targetOpacity: 1,
																	animate: Wo,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-12tby5a`,
																						"data-styles-preset": `j9HsFBXUW`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7)))`,
																						},
																						children: `UX/UI, design systems, prototypes.`,
																					},
																				),
																		},
																	),
																	initial: Go,
																	optimized:
																		!0,
																},
																NsNLyvBWj: {
																	__perspectiveFX:
																		!1,
																	__smartComponentFX:
																		!0,
																	__targetOpacity: 1,
																	animate: Wo,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-12tby5a`,
																						"data-styles-preset": `j9HsFBXUW`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7)))`,
																						},
																						children: `UX/UI, design systems, prototypes.`,
																					},
																				),
																		},
																	),
																	initial: Go,
																	optimized:
																		!0,
																},
															},
															w,
															O,
														),
													}),
												me() &&
													v(k.div, {
														className: `framer-s2axtz`,
														layoutDependency: F,
														layoutId: `SwJurzIcs`,
														children: [
															he() &&
																p(Z, {
																	...Fo(
																		{
																			HzVeCwGkF:
																				{
																					height: 240,
																					width: `150px`,
																					y:
																						(c?.y ||
																							0) +
																						(0 +
																							((c?.height ||
																								442) -
																								0 -
																								442) /
																								2) +
																						0 +
																						35 +
																						127 +
																						0 +
																						0,
																				},
																			th8xp_CDP:
																				{
																					height: 240,
																					width: `calc(max(${c?.width || `100vw`}, 1px) - 50px)`,
																					y:
																						(c?.y ||
																							0) +
																						(0 +
																							((c?.height ||
																								900) -
																								0 -
																								546) /
																								2) +
																						0 +
																						30 +
																						85 +
																						0 +
																						165,
																				},
																		},
																		w,
																		O,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-xnn6rx-container`,
																			layoutDependency:
																				F,
																			layoutId: `L1kTyMMDS-container`,
																			nodeId: `L1kTyMMDS`,
																			rendersWithMotion:
																				!0,
																			scopeId: `KMxOE4SdL`,
																			children:
																				p(
																					jr,
																					{
																						height: `100%`,
																						id: `L1kTyMMDS`,
																						layoutId: `L1kTyMMDS`,
																						style: {
																							height: `100%`,
																							width: `100%`,
																						},
																						variant:
																							y,
																						width: `100%`,
																					},
																				),
																		},
																	),
																}),
															me() &&
																p(Io, {
																	__fromCanvasComponent:
																		!0,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.p,
																					{
																						className: `framer-styles-preset-11kcybb`,
																						"data-styles-preset": `pPuowuywh`,
																						style: {
																							"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																						},
																						children: `We’re a senior creative digital agency focused on clarity and performance. We align strategy, brand, and web into modular systems that ship on time and scale. Our values are simplicity, accountability and measurable impact. The team is small and senior; every project has a lead for strategy, design and build.`,
																					},
																				),
																		},
																	),
																	className: `framer-ak3p8h`,
																	"data-framer-appear-id": `ak3p8h`,
																	fonts: [
																		`Inter`,
																	],
																	layoutDependency:
																		F,
																	layoutId: `j7ibhlYXS`,
																	style: {
																		"--extracted-r6o4lv": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																		"--framer-paragraph-spacing": `0px`,
																	},
																	text: g,
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																	...Fo(
																		{
																			bNsjfSikG:
																				{
																					__perspectiveFX:
																						!1,
																					__smartComponentFX:
																						!0,
																					__targetOpacity: 1,
																					animate:
																						Wo,
																					initial:
																						Go,
																					optimized:
																						!0,
																				},
																			HzVeCwGkF:
																				{
																					__perspectiveFX:
																						!1,
																					__smartComponentFX:
																						!0,
																					__targetOpacity: 1,
																					animate:
																						Wo,
																					initial:
																						Go,
																					optimized:
																						!0,
																				},
																			nCZKaHek2:
																				{
																					__perspectiveFX:
																						!1,
																					__smartComponentFX:
																						!0,
																					__targetOpacity: 1,
																					animate:
																						Wo,
																					initial:
																						Go,
																					optimized:
																						!0,
																				},
																			th8xp_CDP:
																				{
																					__perspectiveFX:
																						!1,
																					__smartComponentFX:
																						!0,
																					__targetOpacity: 1,
																					animate:
																						Wo,
																					initial:
																						Go,
																					optimized:
																						!0,
																				},
																			xFImwaHDH:
																				{
																					__perspectiveFX:
																						!1,
																					__smartComponentFX:
																						!0,
																					__targetOpacity: 1,
																					animate:
																						Wo,
																					initial:
																						Go,
																					optimized:
																						!0,
																				},
																		},
																		w,
																		O,
																	),
																}),
														],
													}),
												me() &&
													p(Io, {
														__fromCanvasComponent:
															!0,
														children: p(i, {
															children: p(k.p, {
																className: `framer-styles-preset-11kcybb`,
																"data-styles-preset": `pPuowuywh`,
																style: {
																	"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																},
																children: `UX/UI, design systems, prototypes.`,
															}),
														}),
														className: `framer-9d8kng`,
														"data-framer-appear-id": `9d8kng`,
														fonts: [`Inter`],
														layoutDependency: F,
														layoutId: `glrq_NazR`,
														style: {
															"--extracted-r6o4lv": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
															"--framer-paragraph-spacing": `0px`,
														},
														text: h,
														variants: {
															bNsjfSikG: {
																"--extracted-1w1cjl5": `var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7))`,
															},
															HzVeCwGkF: {
																"--extracted-1w1cjl5": `var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7))`,
															},
															nCZKaHek2: {
																"--extracted-1w1cjl5": `var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7))`,
															},
															th8xp_CDP: {
																"--extracted-1w1cjl5": `var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7))`,
															},
															xFImwaHDH: {
																"--extracted-1w1cjl5": `var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7))`,
															},
														},
														verticalAlignment: `top`,
														withExternalLayout: !0,
														...Fo(
															{
																bNsjfSikG: {
																	__perspectiveFX:
																		!1,
																	__smartComponentFX:
																		!0,
																	__targetOpacity: 1,
																	animate: Wo,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-12tby5a`,
																						"data-styles-preset": `j9HsFBXUW`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7)))`,
																						},
																						children: `UX/UI, design systems, prototypes.`,
																					},
																				),
																		},
																	),
																	initial: Go,
																	optimized:
																		!0,
																},
																HzVeCwGkF: {
																	__perspectiveFX:
																		!1,
																	__smartComponentFX:
																		!0,
																	__targetOpacity: 1,
																	animate: Wo,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-12tby5a`,
																						"data-styles-preset": `j9HsFBXUW`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7)))`,
																						},
																						children: `UX/UI, design systems, prototypes.`,
																					},
																				),
																		},
																	),
																	initial: Go,
																	optimized:
																		!0,
																},
																nCZKaHek2: {
																	__perspectiveFX:
																		!1,
																	__smartComponentFX:
																		!0,
																	__targetOpacity: 1,
																	animate: Wo,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-12tby5a`,
																						"data-styles-preset": `j9HsFBXUW`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7)))`,
																						},
																						children: `UX/UI, design systems, prototypes.`,
																					},
																				),
																		},
																	),
																	initial: Go,
																	optimized:
																		!0,
																},
																th8xp_CDP: {
																	__perspectiveFX:
																		!1,
																	__smartComponentFX:
																		!0,
																	__targetOpacity: 1,
																	animate: Wo,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-12tby5a`,
																						"data-styles-preset": `j9HsFBXUW`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7)))`,
																						},
																						children: `UX/UI, design systems, prototypes.`,
																					},
																				),
																		},
																	),
																	initial: Go,
																	optimized:
																		!0,
																},
																xFImwaHDH: {
																	__perspectiveFX:
																		!1,
																	__smartComponentFX:
																		!0,
																	__targetOpacity: 1,
																	animate: Wo,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-12tby5a`,
																						"data-styles-preset": `j9HsFBXUW`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7)))`,
																						},
																						children: `UX/UI, design systems, prototypes.`,
																					},
																				),
																		},
																	),
																	initial: Go,
																	optimized:
																		!0,
																},
															},
															w,
															O,
														),
													}),
											],
										}),
									}),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-iMqF7.framer-mzaz98, .framer-iMqF7 .framer-mzaz98 { display: block; }`,
					`.framer-iMqF7.framer-1r93okk { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1316px; }`,
					`.framer-iMqF7 .framer-1wjghah { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
					`.framer-iMqF7 .framer-cotk17 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 35px 50px 35px 50px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-iMqF7 .framer-87jfmp { flex: none; height: 78px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: -79px; z-index: 1; }`,
					`.framer-iMqF7 .framer-1rf6x1y { bottom: -80px; flex: none; height: 78px; left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; z-index: 1; }`,
					`.framer-iMqF7 .framer-gqrxz6 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: min-content; }`,
					`.framer-iMqF7 .framer-1pjswn8 { flex: none; height: 6px; overflow: visible; position: relative; width: 12px; z-index: 1; }`,
					`.framer-iMqF7 .framer-165stwd { height: 4px; left: 2px; position: absolute; top: 1px; width: 8px; }`,
					`.framer-iMqF7 .framer-cw6b12, .framer-iMqF7 .framer-1lctdt2 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; z-index: 2; }`,
					`.framer-iMqF7 .framer-s2axtz { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 60px; height: min-content; justify-content: center; min-height: 313px; overflow: visible; padding: 0px; position: relative; width: 200px; }`,
					`.framer-iMqF7 .framer-xnn6rx-container { aspect-ratio: 0.625 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 240px); position: relative; width: 150px; }`,
					`.framer-iMqF7 .framer-ak3p8h { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 30%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-iMqF7 .framer-9d8kng { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
					`.framer-iMqF7.framer-v-cgd6n8 .framer-cotk17 { cursor: pointer; }`,
					`.framer-iMqF7.framer-v-cgd6n8 .framer-87jfmp, .framer-iMqF7.framer-v-s7rfgy .framer-87jfmp { height: 79px; order: 0; top: 0px; }`,
					`.framer-iMqF7.framer-v-cgd6n8 .framer-1rf6x1y, .framer-iMqF7.framer-v-1q1f61f .framer-1rf6x1y, .framer-iMqF7.framer-v-s7rfgy .framer-1rf6x1y { bottom: 0px; order: 1; }`,
					`.framer-iMqF7.framer-v-cgd6n8 .framer-gqrxz6, .framer-iMqF7.framer-v-b6vamc .framer-1rf6x1y, .framer-iMqF7.framer-v-1v1oyy2 .framer-1rf6x1y { order: 4; }`,
					`.framer-iMqF7.framer-v-cgd6n8 .framer-1lctdt2, .framer-iMqF7.framer-v-b6vamc .framer-gqrxz6, .framer-iMqF7.framer-v-1q1f61f .framer-gqrxz6, .framer-iMqF7.framer-v-1v1oyy2 .framer-gqrxz6, .framer-iMqF7.framer-v-s7rfgy .framer-gqrxz6, .framer-iMqF7.framer-v-5uh70z .framer-1rf6x1y, .framer-iMqF7.framer-v-nxosv9 .framer-1rf6x1y, .framer-iMqF7.framer-v-r9zipn .framer-1rf6x1y, .framer-iMqF7.framer-v-1jxba2v .framer-1rf6x1y, .framer-iMqF7.framer-v-84ea7j .framer-1rf6x1y { order: 5; }`,
					`.framer-iMqF7.framer-v-b6vamc.framer-1r93okk, .framer-iMqF7.framer-v-1q1f61f.framer-1r93okk { justify-content: center; }`,
					`.framer-iMqF7.framer-v-b6vamc .framer-1wjghah, .framer-iMqF7.framer-v-1q1f61f .framer-1wjghah { align-content: center; align-items: center; justify-content: center; }`,
					`.framer-iMqF7.framer-v-b6vamc .framer-87jfmp, .framer-iMqF7.framer-v-1v1oyy2 .framer-87jfmp, .framer-iMqF7.framer-v-1r96jv7 .framer-1pjswn8, .framer-iMqF7.framer-v-1jxba2v .framer-1pjswn8, .framer-iMqF7.framer-v-1jxba2v .framer-xnn6rx-container, .framer-iMqF7.framer-v-1fbm5wd .framer-1pjswn8, .framer-iMqF7.framer-v-84ea7j .framer-1pjswn8 { order: 1; }`,
					`.framer-iMqF7.framer-v-b6vamc .framer-1lctdt2, .framer-iMqF7.framer-v-1v1oyy2 .framer-1lctdt2, .framer-iMqF7.framer-v-5uh70z .framer-87jfmp, .framer-iMqF7.framer-v-nxosv9 .framer-87jfmp, .framer-iMqF7.framer-v-r9zipn .framer-87jfmp, .framer-iMqF7.framer-v-1r96jv7 .framer-cw6b12, .framer-iMqF7.framer-v-1jxba2v .framer-87jfmp, .framer-iMqF7.framer-v-1jxba2v .framer-cw6b12, .framer-iMqF7.framer-v-1fbm5wd .framer-cw6b12, .framer-iMqF7.framer-v-84ea7j .framer-87jfmp, .framer-iMqF7.framer-v-84ea7j .framer-cw6b12 { order: 0; }`,
					`.framer-iMqF7.framer-v-1q1f61f .framer-cotk17 { cursor: pointer; justify-content: center; }`,
					`.framer-iMqF7.framer-v-1q1f61f .framer-87jfmp { height: 80px; order: 0; top: -1px; }`,
					`.framer-iMqF7.framer-v-1q1f61f .framer-1lctdt2, .framer-iMqF7.framer-v-5uh70z .framer-gqrxz6, .framer-iMqF7.framer-v-nxosv9 .framer-gqrxz6, .framer-iMqF7.framer-v-r9zipn .framer-gqrxz6 { order: 2; }`,
					`.framer-iMqF7.framer-v-1v1oyy2.framer-1r93okk, .framer-iMqF7.framer-v-s7rfgy.framer-1r93okk { justify-content: flex-end; }`,
					`.framer-iMqF7.framer-v-1v1oyy2 .framer-1wjghah, .framer-iMqF7.framer-v-s7rfgy .framer-1wjghah { align-content: flex-end; align-items: flex-end; justify-content: flex-end; }`,
					`.framer-iMqF7.framer-v-s7rfgy .framer-cotk17 { cursor: pointer; justify-content: flex-end; }`,
					`.framer-iMqF7.framer-v-s7rfgy .framer-1lctdt2, .framer-iMqF7.framer-v-5uh70z .framer-9d8kng, .framer-iMqF7.framer-v-nxosv9 .framer-9d8kng, .framer-iMqF7.framer-v-r9zipn .framer-9d8kng { order: 3; }`,
					`.framer-iMqF7.framer-v-5uh70z .framer-cotk17, .framer-iMqF7.framer-v-nxosv9 .framer-cotk17, .framer-iMqF7.framer-v-r9zipn .framer-cotk17 { align-content: flex-start; align-items: flex-start; cursor: pointer; flex: 1 0 0px; flex-direction: column; gap: 30px; padding: 50px; width: 1px; }`,
					`.framer-iMqF7.framer-v-5uh70z .framer-s2axtz, .framer-iMqF7.framer-v-nxosv9 .framer-s2axtz, .framer-iMqF7.framer-v-r9zipn .framer-s2axtz { align-content: flex-start; align-items: flex-start; justify-content: flex-start; min-height: unset; order: 4; width: 100%; }`,
					`.framer-iMqF7.framer-v-5uh70z .framer-ak3p8h, .framer-iMqF7.framer-v-nxosv9 .framer-ak3p8h, .framer-iMqF7.framer-v-r9zipn .framer-ak3p8h { width: 50%; }`,
					`.framer-iMqF7.framer-v-1r96jv7.framer-1r93okk, .framer-iMqF7.framer-v-1jxba2v.framer-1r93okk { cursor: pointer; width: 810px; }`,
					`.framer-iMqF7.framer-v-1r96jv7 .framer-1wjghah, .framer-iMqF7.framer-v-1fbm5wd .framer-1wjghah { justify-content: var(--19c9d69); }`,
					`.framer-iMqF7.framer-v-1r96jv7 .framer-cotk17 { padding: 25px 40px 25px 40px; }`,
					`.framer-iMqF7.framer-v-1r96jv7 .framer-gqrxz6 { gap: 20px; }`,
					`.framer-iMqF7.framer-v-1jxba2v .framer-cotk17 { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; flex-direction: column; gap: 25px; padding: 35px 40px 40px 40px; width: 1px; }`,
					`.framer-iMqF7.framer-v-1jxba2v .framer-gqrxz6 { gap: 20px; order: 2; }`,
					`.framer-iMqF7.framer-v-1jxba2v .framer-s2axtz { min-height: unset; order: 4; width: 100%; }`,
					`.framer-iMqF7.framer-v-1jxba2v .framer-ak3p8h { flex: 1 0 0px; order: 0; width: 1px; }`,
					`.framer-iMqF7.framer-v-1jxba2v .framer-9d8kng, .framer-iMqF7.framer-v-84ea7j .framer-9d8kng { order: 3; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-iMqF7.framer-v-1fbm5wd.framer-1r93okk, .framer-iMqF7.framer-v-84ea7j.framer-1r93okk { cursor: pointer; width: 390px; }`,
					`.framer-iMqF7.framer-v-1fbm5wd .framer-cotk17 { flex-direction: column; padding: 15px 22px 15px 22px; }`,
					`.framer-iMqF7.framer-v-1fbm5wd .framer-gqrxz6 { align-self: stretch; gap: 12px; width: auto; }`,
					`.framer-iMqF7.framer-v-84ea7j .framer-cotk17 { align-content: flex-start; align-items: flex-start; flex: 1 0 0px; flex-direction: column; gap: 25px; padding: 30px 25px 26px 25px; width: 1px; }`,
					`.framer-iMqF7.framer-v-84ea7j .framer-gqrxz6 { gap: 12px; justify-content: flex-start; order: 2; }`,
					`.framer-iMqF7.framer-v-84ea7j .framer-s2axtz { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 40px; min-height: unset; order: 4; width: 100%; }`,
					`.framer-iMqF7.framer-v-84ea7j .framer-xnn6rx-container { height: var(--framer-aspect-ratio-supported, 544px); order: 1; width: 100%; }`,
					`.framer-iMqF7.framer-v-84ea7j .framer-ak3p8h { order: 0; width: 100%; }`,
					...It,
					...Vt,
					...Ce,
					...ze,
					...yt,
				],
				`framer-iMqF7`,
			)),
			(es = $o),
			($o.displayName = `Service - Card`),
			($o.defaultProps = { height: 155, width: 1316 }),
			P($o, {
				variant: {
					options: [
						`ipJnjQMme`,
						`dRvWEwRlb`,
						`wPEgEVXSR`,
						`a29KvRO3R`,
						`ItUJOTNSa`,
						`NsNLyvBWj`,
						`xFImwaHDH`,
						`bNsjfSikG`,
						`nCZKaHek2`,
						`cw8cZIAQT`,
						`HzVeCwGkF`,
						`gtj_ShKNk`,
						`th8xp_CDP`,
					],
					optionTitles: [
						`Left`,
						`Left - Hover`,
						`Center`,
						`Center - Hover`,
						`Right`,
						`Right - Hover`,
						`Left - Expand`,
						`Center - Expand`,
						`Right - Expand`,
						`Tablet`,
						`Tablet - Expand`,
						`Phone`,
						`Phone - Expand`,
					],
					title: `Variant`,
					type: J.Enum,
				},
				FCTykdhGu: {
					defaultValue: `Web Design`,
					displayTextArea: !0,
					title: `Title`,
					type: J.String,
				},
				zaexmKqZT: {
					defaultValue: `UX/UI, design systems, prototypes.`,
					displayTextArea: !0,
					title: `Description`,
					type: J.String,
				},
				CbPs4xTeB: {
					defaultValue: `We’re a senior creative digital agency focused on clarity and performance. We align strategy, brand, and web into modular systems that ship on time and scale. Our values are simplicity, accountability and measurable impact. The team is small and senior; every project has a lead for strategy, design and build.`,
					displayTextArea: !0,
					title: `Full Description`,
					type: J.String,
				},
				WLm9c_UBA: Ro?.variant && {
					...Ro.variant,
					defaultValue: `SP7XAEd6j`,
					description: void 0,
					hidden: void 0,
					title: `Choose Image (Edit Image in Services - Cursors Component)`,
				},
				xNppcy1V8: {
					defaultValue: `flex-start`,
					options: [
						`flex-start`,
						`center`,
						`flex-end`,
						`space-between`,
						`space-around`,
						`space-evenly`,
					],
					optionTitles: [
						`Start`,
						`Center`,
						`End`,
						`Space Between`,
						`Space Around`,
						`Space Evenly`,
					],
					title: `Position`,
					type: J.Enum,
				},
				NKbehdgZd: { title: `Cursor`, type: J.CustomCursor },
			}),
			de(
				$o,
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
					...Lo,
					...G(Rt),
					...G(Ht),
					...G(we),
					...G(Be),
					...G(xt),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function ns(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rs,
	is,
	as,
	os,
	ss,
	cs,
	ls,
	us,
	ds,
	fs,
	ps,
	ms,
	hs = e(() => {
		(y(),
			q(),
			N(),
			l(),
			ts(),
			(rs = B(es)),
			(is = [`QChA3vInH`, `Ed8SL43KI`, `KAum8NtpX`]),
			(as = `framer-Ehdo5`),
			(os = {
				Ed8SL43KI: `framer-v-zrmccm`,
				KAum8NtpX: `framer-v-rht3ti`,
				QChA3vInH: `framer-v-16u3uhn`,
			}),
			(ss = {
				delay: 0,
				duration: 0.5,
				ease: [0, 0.82, 0.32, 1.02],
				type: `tween`,
			}),
			(cs = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(ls = k.create(i)),
			(us = {
				Desktop: `QChA3vInH`,
				Phone: `KAum8NtpX`,
				Tablet: `Ed8SL43KI`,
			}),
			(ds = ({
				cursor1: e,
				cursor2: t,
				cursor3: n,
				cursor4: r,
				cursor5: i,
				cursor6: a,
				height: o,
				id: s,
				width: c,
				...l
			}) => ({
				...l,
				CmEbqEo4o: a ?? l.CmEbqEo4o,
				diHxdkm6K: r ?? l.diHxdkm6K,
				qAOdkPwih: t ?? l.qAOdkPwih,
				variant: us[l.variant] ?? l.variant ?? `QChA3vInH`,
				vgv_DzJJt: e ?? l.vgv_DzJJt,
				w5D0A3WqL: n ?? l.w5D0A3WqL,
				WT5AxdDsO: i ?? l.WT5AxdDsO,
			})),
			(fs = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(ps = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						i = S(),
						{ activeLocale: a, setLocale: o } = _e(),
						s = X(),
						{
							style: c,
							className: l,
							layoutId: u,
							variant: d,
							vgv_DzJJt: f,
							qAOdkPwih: m,
							w5D0A3WqL: h,
							diHxdkm6K: g,
							WT5AxdDsO: y,
							CmEbqEo4o: b,
							...x
						} = ds(e),
						{
							baseVariant: C,
							classNames: w,
							clearLoadingGesture: T,
							gestureHandlers: E,
							gestureVariant: D,
							isLoading: O,
							setGestureState: A,
							setVariant: j,
							variants: N,
						} = W({
							cycleOrder: is,
							defaultVariant: `QChA3vInH`,
							ref: r,
							variant: d,
							variantClassNames: os,
						}),
						P = fs(e, N),
						F = U(as);
					return p(M, {
						id: u ?? i,
						children: p(ls, {
							animate: N,
							initial: !1,
							children: p(cs, {
								value: ss,
								children: v(k.div, {
									...x,
									...E,
									className: U(F, `framer-16u3uhn`, l, w),
									"data-framer-name": `Desktop`,
									layoutDependency: P,
									layoutId: `QChA3vInH`,
									ref: r,
									style: {
										backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
										borderBottomLeftRadius: 10,
										borderBottomRightRadius: 10,
										borderTopLeftRadius: 10,
										borderTopRightRadius: 10,
										...c,
									},
									...ns(
										{
											Ed8SL43KI: {
												"data-framer-name": `Tablet`,
											},
											KAum8NtpX: {
												"data-framer-name": `Phone`,
											},
										},
										C,
										D,
									),
									children: [
										p(Z, {
											height: 155,
											width: `calc(${s?.width || `100vw`} - 4px)`,
											y:
												(s?.y || 0) +
												2 +
												(((s?.height || 944) -
													4 -
													940) /
													2 +
													0 +
													0),
											...ns(
												{
													Ed8SL43KI: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																692) -
																4 -
																940) /
																2 +
																0 +
																0),
													},
													KAum8NtpX: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																374) -
																4 -
																940) /
																2 +
																0 +
																0),
													},
												},
												C,
												D,
											),
											children: p(H, {
												className: `framer-212ha-container`,
												layoutDependency: P,
												layoutId: `l_OfOe1mR-container`,
												nodeId: `l_OfOe1mR`,
												rendersWithMotion: !0,
												scopeId: `b1UvUTrBi`,
												children: p(es, {
													CbPs4xTeB: `We design conversion-focused interfaces with clear hierarchy and measurable goals. Layouts are modular and responsive across breakpoints. Accessibility (AA) and performance budgets guide every screen. Deliverables: wireframes, UI kit, prototypes, and page templates.`,
													FCTykdhGu: `Web Design`,
													height: `100%`,
													id: `l_OfOe1mR`,
													layoutId: `l_OfOe1mR`,
													NKbehdgZd: f,
													style: { width: `100%` },
													variant: `ipJnjQMme`,
													width: `100%`,
													WLm9c_UBA: `wE1xRBhw2`,
													xNppcy1V8: `flex-start`,
													zaexmKqZT: `UX/UI, design systems, prototypes.`,
													...ns(
														{
															Ed8SL43KI: {
																variant: `cw8cZIAQT`,
															},
															KAum8NtpX: {
																variant: `gtj_ShKNk`,
															},
														},
														C,
														D,
													),
												}),
											}),
										}),
										p(Z, {
											height: 155,
											width: `calc(${s?.width || `100vw`} - 4px)`,
											y:
												(s?.y || 0) +
												2 +
												(((s?.height || 944) -
													4 -
													940) /
													2 +
													155 +
													2),
											...ns(
												{
													Ed8SL43KI: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																692) -
																4 -
																940) /
																2 +
																155 +
																2),
													},
													KAum8NtpX: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																374) -
																4 -
																940) /
																2 +
																155 +
																2),
													},
												},
												C,
												D,
											),
											children: p(H, {
												className: `framer-g6fg9r-container`,
												layoutDependency: P,
												layoutId: `IbDnq6_cz-container`,
												nodeId: `IbDnq6_cz`,
												rendersWithMotion: !0,
												scopeId: `b1UvUTrBi`,
												children: p(es, {
													CbPs4xTeB: `We build fast, maintainable sites in Framer/Next.js with clean CMS models. Core Web Vitals are monitored from day one. Integrations cover analytics, forms, payments, and automations. Deliverables: component library, CMS setup, environments, and docs.`,
													FCTykdhGu: `Web Development`,
													height: `100%`,
													id: `IbDnq6_cz`,
													layoutId: `IbDnq6_cz`,
													NKbehdgZd: m,
													style: { width: `100%` },
													variant: `wPEgEVXSR`,
													width: `100%`,
													WLm9c_UBA: `b9Wyp8VLX`,
													xNppcy1V8: `flex-start`,
													zaexmKqZT: `Framer/Next.js, CMS, analytics.`,
													...ns(
														{
															Ed8SL43KI: {
																variant: `cw8cZIAQT`,
																xNppcy1V8: `flex-end`,
															},
															KAum8NtpX: {
																variant: `gtj_ShKNk`,
																xNppcy1V8: `flex-end`,
															},
														},
														C,
														D,
													),
												}),
											}),
										}),
										p(Z, {
											height: 155,
											width: `calc(${s?.width || `100vw`} - 4px)`,
											y:
												(s?.y || 0) +
												2 +
												(((s?.height || 944) -
													4 -
													940) /
													2 +
													310 +
													4),
											...ns(
												{
													Ed8SL43KI: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																692) -
																4 -
																940) /
																2 +
																310 +
																4),
													},
													KAum8NtpX: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																374) -
																4 -
																940) /
																2 +
																310 +
																4),
													},
												},
												C,
												D,
											),
											children: p(H, {
												className: `framer-49xs90-container`,
												layoutDependency: P,
												layoutId: `n2wJg1i8j-container`,
												nodeId: `n2wJg1i8j`,
												rendersWithMotion: !0,
												scopeId: `b1UvUTrBi`,
												children: p(es, {
													CbPs4xTeB: `We define positioning, audience, and proof points that set direction. Messaging architecture aligns homepage, product, and campaigns. Differentiation is tested against competitors and constraints. Deliverables: strategy brief, voice guide, and KPI map.`,
													FCTykdhGu: `Brand Strategy`,
													height: `100%`,
													id: `n2wJg1i8j`,
													layoutId: `n2wJg1i8j`,
													NKbehdgZd: h,
													style: { width: `100%` },
													variant: `ItUJOTNSa`,
													width: `100%`,
													WLm9c_UBA: `SP7XAEd6j`,
													xNppcy1V8: `flex-start`,
													zaexmKqZT: `Create history and values.`,
													...ns(
														{
															Ed8SL43KI: {
																variant: `cw8cZIAQT`,
																xNppcy1V8: `center`,
															},
															KAum8NtpX: {
																variant: `gtj_ShKNk`,
																xNppcy1V8: `center`,
															},
														},
														C,
														D,
													),
												}),
											}),
										}),
										p(Z, {
											height: 155,
											width: `calc(${s?.width || `100vw`} - 4px)`,
											y:
												(s?.y || 0) +
												2 +
												(((s?.height || 944) -
													4 -
													940) /
													2 +
													465 +
													6),
											...ns(
												{
													Ed8SL43KI: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																692) -
																4 -
																940) /
																2 +
																465 +
																6),
													},
													KAum8NtpX: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																374) -
																4 -
																940) /
																2 +
																465 +
																6),
													},
												},
												C,
												D,
											),
											children: p(H, {
												className: `framer-1w5dnq5-container`,
												layoutDependency: P,
												layoutId: `cmpIJEV7x-container`,
												nodeId: `cmpIJEV7x`,
												rendersWithMotion: !0,
												scopeId: `b1UvUTrBi`,
												children: p(es, {
													CbPs4xTeB: `We create a scalable system: logo suite, type, color, grid, and iconography. Rules work in light/dark and across web, product, and print. Motion and imagery guidelines keep the brand consistent. Deliverables: guidelines, Figma library, and ready-to-use templates.`,
													FCTykdhGu: `Visual Identity`,
													height: `100%`,
													id: `cmpIJEV7x`,
													layoutId: `cmpIJEV7x`,
													NKbehdgZd: g,
													style: { width: `100%` },
													variant: `wPEgEVXSR`,
													width: `100%`,
													WLm9c_UBA: `KP_2YTyir`,
													xNppcy1V8: `flex-start`,
													zaexmKqZT: `Logo, visual system, guidelines.`,
													...ns(
														{
															Ed8SL43KI: {
																variant: `cw8cZIAQT`,
															},
															KAum8NtpX: {
																variant: `gtj_ShKNk`,
															},
														},
														C,
														D,
													),
												}),
											}),
										}),
										p(Z, {
											height: 155,
											width: `calc(${s?.width || `100vw`} - 4px)`,
											y:
												(s?.y || 0) +
												2 +
												(((s?.height || 944) -
													4 -
													940) /
													2 +
													620 +
													8),
											...ns(
												{
													Ed8SL43KI: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																692) -
																4 -
																940) /
																2 +
																620 +
																8),
													},
													KAum8NtpX: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																374) -
																4 -
																940) /
																2 +
																620 +
																8),
													},
												},
												C,
												D,
											),
											children: p(H, {
												className: `framer-16gzgh0-container`,
												layoutDependency: P,
												layoutId: `BQ3YGwARp-container`,
												nodeId: `BQ3YGwARp`,
												rendersWithMotion: !0,
												scopeId: `b1UvUTrBi`,
												children: p(es, {
													CbPs4xTeB: `We add purposeful motion and lightweight 3D for clarity and impact. Animations use transform/opacity and respect reduced motion. 3D assets are optimized for web and exported as reusable components. Deliverables: motion specs, Lottie/MP4/WebGL assets, and usage rules.`,
													FCTykdhGu: `Motion & 3D`,
													height: `100%`,
													id: `BQ3YGwARp`,
													layoutId: `BQ3YGwARp`,
													NKbehdgZd: y,
													style: { width: `100%` },
													variant: `ipJnjQMme`,
													width: `100%`,
													WLm9c_UBA: `Vc8J_9MHY`,
													xNppcy1V8: `flex-start`,
													zaexmKqZT: `Animation, micro-interactions, launch visuals.`,
													...ns(
														{
															Ed8SL43KI: {
																variant: `cw8cZIAQT`,
																xNppcy1V8: `flex-end`,
															},
															KAum8NtpX: {
																variant: `gtj_ShKNk`,
																xNppcy1V8: `flex-end`,
															},
														},
														C,
														D,
													),
												}),
											}),
										}),
										p(Z, {
											height: 155,
											width: `calc(${s?.width || `100vw`} - 4px)`,
											y:
												(s?.y || 0) +
												2 +
												(((s?.height || 944) -
													4 -
													940) /
													2 +
													775 +
													10),
											...ns(
												{
													Ed8SL43KI: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																692) -
																4 -
																940) /
																2 +
																775 +
																10),
													},
													KAum8NtpX: {
														y:
															(s?.y || 0) +
															2 +
															(((s?.height ||
																374) -
																4 -
																940) /
																2 +
																775 +
																10),
													},
												},
												C,
												D,
											),
											children: p(H, {
												className: `framer-1kw2zpv-container`,
												layoutDependency: P,
												layoutId: `sBpxxTzhq-container`,
												nodeId: `sBpxxTzhq`,
												rendersWithMotion: !0,
												scopeId: `b1UvUTrBi`,
												children: p(es, {
													CbPs4xTeB: `We shape the story with concise copy and consistent visuals. Photo/video direction covers style, framing, and color treatment. Editorial workflow keeps content accurate and easy to update. Deliverables: copy deck, asset pack, shoot guidelines, and CMS fields.`,
													FCTykdhGu: `Content & Art`,
													height: `100%`,
													id: `sBpxxTzhq`,
													layoutId: `sBpxxTzhq`,
													NKbehdgZd: b,
													style: { width: `100%` },
													variant: `wPEgEVXSR`,
													width: `100%`,
													WLm9c_UBA: `KvncGGvMK`,
													xNppcy1V8: `flex-start`,
													zaexmKqZT: `Copy, photo, video.`,
													...ns(
														{
															Ed8SL43KI: {
																variant: `cw8cZIAQT`,
																xNppcy1V8: `center`,
															},
															KAum8NtpX: {
																variant: `gtj_ShKNk`,
																xNppcy1V8: `center`,
															},
														},
														C,
														D,
													),
												}),
											}),
										}),
									],
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-Ehdo5.framer-onj5n5, .framer-Ehdo5 .framer-onj5n5 { display: block; }`,
					`.framer-Ehdo5.framer-16u3uhn { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 2px; position: relative; width: 1320px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-Ehdo5 .framer-212ha-container, .framer-Ehdo5 .framer-g6fg9r-container, .framer-Ehdo5 .framer-49xs90-container, .framer-Ehdo5 .framer-1w5dnq5-container, .framer-Ehdo5 .framer-16gzgh0-container, .framer-Ehdo5 .framer-1kw2zpv-container { flex: none; height: auto; position: relative; width: 100%; }`,
					`.framer-Ehdo5.framer-v-zrmccm.framer-16u3uhn { width: 810px; }`,
					`.framer-Ehdo5.framer-v-rht3ti.framer-16u3uhn { width: 390px; }`,
				],
				`framer-Ehdo5`,
			)),
			(ms = ps),
			(ps.displayName = `Services - Widget`),
			(ps.defaultProps = { height: 944, width: 1320 }),
			P(ps, {
				variant: {
					options: [`QChA3vInH`, `Ed8SL43KI`, `KAum8NtpX`],
					optionTitles: [`Desktop`, `Tablet`, `Phone`],
					title: `Variant`,
					type: J.Enum,
				},
				vgv_DzJJt: { title: `Cursor 1`, type: J.CustomCursor },
				qAOdkPwih: { title: `Cursor 2`, type: J.CustomCursor },
				w5D0A3WqL: { title: `Cursor 3`, type: J.CustomCursor },
				diHxdkm6K: { title: `Cursor 4`, type: J.CustomCursor },
				WT5AxdDsO: { title: `Cursor 5`, type: J.CustomCursor },
				CmEbqEo4o: { title: `Cursor 6`, type: J.CustomCursor },
			}),
			de(ps, [{ explicitInter: !0, fonts: [] }, ...rs], {
				supportsExplicitInterCodegen: !0,
			}));
	});
function gs(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _s,
	vs,
	ys,
	bs,
	xs,
	Ss,
	Cs,
	ws,
	Ts,
	Es,
	Ds,
	Os,
	ks,
	As = e(() => {
		(y(),
			q(),
			N(),
			l(),
			ft(),
			wt(),
			hs(),
			(_s = B(ms)),
			(vs = [`E9BtmEr1x`, `SRe8kAlSA`, `CxxMae0C0`]),
			(ys = `framer-nGGdp`),
			(bs = {
				CxxMae0C0: `framer-v-f4mooq`,
				E9BtmEr1x: `framer-v-6v1ltp`,
				SRe8kAlSA: `framer-v-9sbrud`,
			}),
			(xs = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Ss = (e, t) => `translateY(-50%) ${t}`),
			(Cs = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(ws = k.create(i)),
			(Ts = {
				"Desktop - 1200": `E9BtmEr1x`,
				Phone: `CxxMae0C0`,
				Tablet: `SRe8kAlSA`,
			}),
			(Es = ({
				cursor1: e,
				cursor2: t,
				cursor3: n,
				cursor4: r,
				cursor5: i,
				cursor6: a,
				headingOfSection: o,
				height: s,
				id: c,
				sectionNumber: l,
				width: u,
				...d
			}) => ({
				...d,
				aAXlqje55: i ?? d.aAXlqje55,
				ejz6e1P8F: a ?? d.ejz6e1P8F,
				fJzjnEbk5: r ?? d.fJzjnEbk5,
				gLu9GhK_q: e ?? d.gLu9GhK_q,
				i1iE8HiX9: t ?? d.i1iE8HiX9,
				ImSFbTdhK: n ?? d.ImSFbTdhK,
				maDVhs40g: l ?? d.maDVhs40g ?? `[02]`,
				variant: Ts[d.variant] ?? d.variant ?? `E9BtmEr1x`,
				VtKYpjJCN: o ?? d.VtKYpjJCN ?? `Services`,
			})),
			(Ds = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Os = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e(),
						c = X(),
						{
							style: l,
							className: u,
							layoutId: d,
							variant: f,
							VtKYpjJCN: m,
							gLu9GhK_q: h,
							i1iE8HiX9: g,
							ImSFbTdhK: y,
							fJzjnEbk5: b,
							aAXlqje55: x,
							ejz6e1P8F: C,
							maDVhs40g: w,
							...T
						} = Es(e),
						{
							baseVariant: E,
							classNames: D,
							clearLoadingGesture: O,
							gestureHandlers: A,
							gestureVariant: j,
							isLoading: N,
							setGestureState: P,
							setVariant: F,
							variants: I,
						} = W({
							cycleOrder: vs,
							defaultVariant: `E9BtmEr1x`,
							ref: r,
							variant: f,
							variantClassNames: bs,
						}),
						L = Ds(e, I),
						z = U(ys, ht, Dt);
					return p(M, {
						id: d ?? a,
						children: p(ws, {
							animate: I,
							initial: !1,
							children: p(Cs, {
								value: xs,
								children: p(k.section, {
									...T,
									...A,
									className: U(z, `framer-6v1ltp`, u, D),
									"data-framer-name": `Desktop - 1200`,
									layoutDependency: L,
									layoutId: `E9BtmEr1x`,
									ref: r,
									style: { ...l },
									...gs(
										{
											CxxMae0C0: {
												"data-framer-name": `Phone`,
											},
											SRe8kAlSA: {
												"data-framer-name": `Tablet`,
											},
										},
										E,
										j,
									),
									children: v(k.div, {
										className: `framer-4gh86r`,
										"data-framer-name": `Container`,
										layoutDependency: L,
										layoutId: `JvoV3dCoh`,
										children: [
											v(k.div, {
												className: `framer-1hjuqf3`,
												"data-framer-name": `Heading`,
												layoutDependency: L,
												layoutId: `tnDC9SGKm`,
												children: [
													p(R, {
														__fromCanvasComponent:
															!0,
														children: p(i, {
															children: p(k.h6, {
																className: `framer-styles-preset-nkm6se`,
																"data-styles-preset": `BaUGQBb6A`,
																style: {
																	"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `Services`,
															}),
														}),
														className: `framer-1rtgocx`,
														fonts: [`Inter`],
														layoutDependency: L,
														layoutId: `GqZpCjgHL`,
														style: {
															"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
															"--framer-paragraph-spacing": `0px`,
														},
														text: m,
														verticalAlignment: `top`,
														withExternalLayout: !0,
														...gs(
															{
																CxxMae0C0: {
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-f8hg8j`,
																						"data-styles-preset": `IGVKsj4vh`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `Services`,
																					},
																				),
																		},
																	),
																},
															},
															E,
															j,
														),
													}),
													p(R, {
														__fromCanvasComponent:
															!0,
														children: p(i, {
															children: p(k.h6, {
																className: `framer-styles-preset-nkm6se`,
																"data-styles-preset": `BaUGQBb6A`,
																style: {
																	"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `[02]`,
															}),
														}),
														className: `framer-1bs00o4`,
														"data-framer-name": `[02]`,
														fonts: [`Inter`],
														layoutDependency: L,
														layoutId: `j0RaP7Uyb`,
														style: {
															"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
															"--framer-paragraph-spacing": `0px`,
														},
														text: w,
														transformTemplate: Ss,
														verticalAlignment: `top`,
														withExternalLayout: !0,
														...gs(
															{
																CxxMae0C0: {
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-f8hg8j`,
																						"data-styles-preset": `IGVKsj4vh`,
																						style: {
																							"--framer-text-alignment": `right`,
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `[02]`,
																					},
																				),
																		},
																	),
																},
															},
															E,
															j,
														),
													}),
												],
											}),
											p(k.div, {
												className: `framer-174jbxx`,
												"data-framer-name": `Spacer`,
												layoutDependency: L,
												layoutId: `FReIMr7oB`,
											}),
											p(Z, {
												height: 944,
												width: `calc(min(${c?.width || `100vw`}, 1600px) - 80px)`,
												y:
													(c?.y || 0) +
													0 +
													(((c?.height || 1234) -
														0 -
														1234) /
														2 +
														0 +
														0) +
													90 +
													110,
												...gs(
													{
														CxxMae0C0: {
															width: `min(${c?.width || `100vw`}, 1600px)`,
															y:
																(c?.y || 0) +
																0 +
																(((c?.height ||
																	200) -
																	0 -
																	1084) /
																	2 +
																	0 +
																	0) +
																40 +
																60,
														},
														SRe8kAlSA: {
															width: `calc(min(${c?.width || `100vw`}, 1600px) - 60px)`,
															y:
																(c?.y || 0) +
																0 +
																(((c?.height ||
																	882) -
																	0 -
																	1134) /
																	2 +
																	0 +
																	0) +
																60 +
																70,
														},
													},
													E,
													j,
												),
												children: p(H, {
													className: `framer-om7hid-container`,
													layoutDependency: L,
													layoutId: `Fdzmvs8uG-container`,
													nodeId: `Fdzmvs8uG`,
													rendersWithMotion: !0,
													scopeId: `ojsMtZju9`,
													children: p(ms, {
														CmEbqEo4o: C,
														diHxdkm6K: b,
														height: `100%`,
														id: `Fdzmvs8uG`,
														layoutId: `Fdzmvs8uG`,
														qAOdkPwih: g,
														style: {
															width: `100%`,
														},
														variant: `QChA3vInH`,
														vgv_DzJJt: h,
														w5D0A3WqL: y,
														width: `100%`,
														WT5AxdDsO: x,
														...gs(
															{
																CxxMae0C0: {
																	CmEbqEo4o:
																		void 0,
																	diHxdkm6K:
																		void 0,
																	qAOdkPwih:
																		void 0,
																	variant: `KAum8NtpX`,
																	vgv_DzJJt:
																		void 0,
																	w5D0A3WqL:
																		void 0,
																	WT5AxdDsO:
																		void 0,
																},
																SRe8kAlSA: {
																	CmEbqEo4o:
																		void 0,
																	diHxdkm6K:
																		void 0,
																	qAOdkPwih:
																		void 0,
																	variant: `Ed8SL43KI`,
																	vgv_DzJJt:
																		void 0,
																	w5D0A3WqL:
																		void 0,
																	WT5AxdDsO:
																		void 0,
																},
															},
															E,
															j,
														),
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
					`.framer-nGGdp.framer-1hbt9pc, .framer-nGGdp .framer-1hbt9pc { display: block; }`,
					`.framer-nGGdp.framer-6v1ltp { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
					`.framer-nGGdp .framer-4gh86r { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 30px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 90px 40px 90px 40px; position: relative; width: 100%; }`,
					`.framer-nGGdp .framer-1hjuqf3 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-nGGdp .framer-1rtgocx { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					`.framer-nGGdp .framer-1bs00o4 { flex: none; height: auto; position: absolute; right: -5px; top: 50%; white-space: pre; width: auto; z-index: 1; }`,
					`.framer-nGGdp .framer-174jbxx { flex: none; height: 20px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-nGGdp .framer-om7hid-container { flex: none; height: auto; position: relative; width: 100%; }`,
					`.framer-nGGdp.framer-v-9sbrud.framer-6v1ltp { width: 810px; }`,
					`.framer-nGGdp.framer-v-9sbrud .framer-4gh86r { gap: 10px; padding: 60px 30px 60px 30px; }`,
					`.framer-nGGdp.framer-v-f4mooq.framer-6v1ltp { width: 390px; }`,
					`.framer-nGGdp.framer-v-f4mooq .framer-4gh86r { gap: 10px; padding: 40px 0px 40px 0px; }`,
					`.framer-nGGdp.framer-v-f4mooq .framer-1hjuqf3 { padding: 0px 80px 0px 25px; }`,
					`.framer-nGGdp.framer-v-f4mooq .framer-1rtgocx { flex: 1 0 0px; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
					`.framer-nGGdp.framer-v-f4mooq .framer-1bs00o4 { right: 15px; }`,
					`.framer-nGGdp.framer-v-f4mooq .framer-174jbxx { height: 10px; }`,
					...pt,
					...Tt,
				],
				`framer-nGGdp`,
			)),
			(ks = Os),
			(Os.displayName = `Services - Section`),
			(Os.defaultProps = { height: 1234, width: 1200 }),
			P(Os, {
				variant: {
					options: [`E9BtmEr1x`, `SRe8kAlSA`, `CxxMae0C0`],
					optionTitles: [`Desktop - 1200`, `Tablet`, `Phone`],
					title: `Variant`,
					type: J.Enum,
				},
				VtKYpjJCN: {
					defaultValue: `Services`,
					displayTextArea: !1,
					title: `Heading of Section`,
					type: J.String,
				},
				gLu9GhK_q: { title: `Cursor 1`, type: J.CustomCursor },
				i1iE8HiX9: { title: `Cursor 2`, type: J.CustomCursor },
				ImSFbTdhK: { title: `Cursor 3`, type: J.CustomCursor },
				fJzjnEbk5: { title: `Cursor 4`, type: J.CustomCursor },
				aAXlqje55: { title: `Cursor 5`, type: J.CustomCursor },
				ejz6e1P8F: { title: `Cursor 6`, type: J.CustomCursor },
				maDVhs40g: {
					defaultValue: `[02]`,
					displayTextArea: !1,
					title: `Section Number`,
					type: J.String,
				},
			}),
			de(
				Os,
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
					..._s,
					...G(mt),
					...G(Et),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function js(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ms,
	Ns,
	Ps,
	Fs,
	Is,
	Ls,
	Rs,
	zs,
	Bs,
	Vs,
	Hs,
	Us,
	Ws = e(() => {
		(y(),
			q(),
			N(),
			l(),
			ln(),
			Je(),
			Pe(),
			bn(),
			(Ms = B(un)),
			(Ns = [`EZxrKSuSz`, `Je4Dkk4Gd`, `aCmhujSns`]),
			(Ps = `framer-wdUbx`),
			(Fs = {
				aCmhujSns: `framer-v-1h9et1f`,
				EZxrKSuSz: `framer-v-t56bmb`,
				Je4Dkk4Gd: `framer-v-1apwgkp`,
			}),
			(Is = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Ls = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(Rs = k.create(i)),
			(zs = {
				"Variant 1 - Desktop": `EZxrKSuSz`,
				"Variant 1 - Phone": `aCmhujSns`,
				"Variant 1 - Tablet": `Je4Dkk4Gd`,
			}),
			(Bs = ({
				description: e,
				height: t,
				id: n,
				metricsName: r,
				quantity: i,
				width: a,
				...o
			}) => ({
				...o,
				mFSRU4L0r:
					e ??
					o.mFSRU4L0r ??
					`Uplift after redesign and new funnel (90 days).`,
				oOZL4Z7MG: r ?? o.oOZL4Z7MG ?? `Conversion`,
				RCWRhrHe8: i ?? o.RCWRhrHe8 ?? `+34%`,
				variant: zs[o.variant] ?? o.variant ?? `EZxrKSuSz`,
			})),
			(Vs = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Hs = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e();
					X();
					let {
							style: c,
							className: l,
							layoutId: u,
							variant: d,
							RCWRhrHe8: f,
							oOZL4Z7MG: m,
							mFSRU4L0r: h,
							...g
						} = Bs(e),
						{
							baseVariant: y,
							classNames: b,
							clearLoadingGesture: x,
							gestureHandlers: C,
							gestureVariant: w,
							isLoading: T,
							setGestureState: E,
							setVariant: D,
							variants: O,
						} = W({
							cycleOrder: Ns,
							defaultVariant: `EZxrKSuSz`,
							ref: r,
							variant: d,
							variantClassNames: Fs,
						}),
						A = Vs(e, O),
						j = U(Ps, Ze, Le, vn);
					return p(M, {
						id: u ?? a,
						children: p(Rs, {
							animate: O,
							initial: !1,
							children: p(Ls, {
								value: Is,
								children: v(k.div, {
									...g,
									...C,
									className: U(j, `framer-t56bmb`, l, b),
									"data-framer-name": `Variant 1 - Desktop`,
									layoutDependency: A,
									layoutId: `EZxrKSuSz`,
									ref: r,
									style: { ...c },
									...js(
										{
											aCmhujSns: {
												"data-framer-name": `Variant 1 - Phone`,
											},
											Je4Dkk4Gd: {
												"data-framer-name": `Variant 1 - Tablet`,
											},
										},
										y,
										w,
									),
									children: [
										p(Z, {
											children: p(H, {
												className: `framer-1k31ab5-container`,
												isAuthoredByUser: !0,
												layoutDependency: A,
												layoutId: `sDObhB2pM-container`,
												nodeId: `sDObhB2pM`,
												rendersWithMotion: !0,
												scopeId: `FjWOYZicL`,
												children: p(un, {
													ariaLabel: `h1`,
													charset: `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*`,
													color: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
													durationMs: 1e3,
													font: {
														fontFamily: `"Space Mono", monospace`,
														fontSize: `90px`,
														fontStyle: `normal`,
														fontWeight: 400,
														letterSpacing: `-3.7px`,
														lineHeight: `1em`,
														textAlign: `left`,
													},
													fps: 60,
													height: `100%`,
													hoverOnly: !1,
													id: `sDObhB2pM`,
													intensity: 0.08,
													layoutId: `sDObhB2pM`,
													newTab: !0,
													repeatOnEnter: !0,
													repeatOnHover: !0,
													revealEase: `inOut`,
													style: { width: `100%` },
													text: f,
													width: `100%`,
													...js(
														{
															aCmhujSns: {
																font: {
																	fontFamily: `"Space Mono", monospace`,
																	fontSize: `53px`,
																	fontStyle: `normal`,
																	fontWeight: 400,
																	letterSpacing: `-2.3px`,
																	lineHeight: `1em`,
																	textAlign: `left`,
																},
															},
															Je4Dkk4Gd: {
																font: {
																	fontFamily: `"Space Mono", monospace`,
																	fontSize: `84px`,
																	fontStyle: `normal`,
																	fontWeight: 400,
																	letterSpacing: `-5px`,
																	lineHeight: `1em`,
																	textAlign: `left`,
																},
															},
														},
														y,
														w,
													),
												}),
											}),
										}),
										p(R, {
											__fromCanvasComponent: !0,
											children: p(i, {
												children: p(k.h6, {
													className: `framer-styles-preset-41ki07`,
													"data-styles-preset": `hmRgK3K6v`,
													style: {
														"--framer-text-alignment": `left`,
														"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
													},
													children: `Conversion`,
												}),
											}),
											className: `framer-17q8g5o`,
											"data-framer-name": `Text`,
											fonts: [`Inter`],
											layoutDependency: A,
											layoutId: `R0mjLXRz8`,
											style: {
												"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
												"--framer-paragraph-spacing": `0px`,
											},
											text: m,
											variants: {
												aCmhujSns: {
													"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
												},
											},
											verticalAlignment: `top`,
											withExternalLayout: !0,
											...js(
												{
													aCmhujSns: {
														children: p(i, {
															children: p(k.p, {
																className: `framer-styles-preset-5fkg2j`,
																"data-styles-preset": `JFkcxmmKA`,
																style: {
																	"--framer-text-alignment": `left`,
																	"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `Conversion`,
															}),
														}),
													},
												},
												y,
												w,
											),
										}),
										p(k.div, {
											className: `framer-1fqwt56`,
											"data-framer-name": `Spacer`,
											layoutDependency: A,
											layoutId: `JFcsujvy9`,
										}),
										p(R, {
											__fromCanvasComponent: !0,
											children: p(i, {
												children: p(k.p, {
													className: `framer-styles-preset-11kcybb`,
													"data-styles-preset": `pPuowuywh`,
													style: {
														"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
													},
													children: `Uplift after redesign and new funnel (90 days).`,
												}),
											}),
											className: `framer-135p3ce`,
											"data-framer-name": `Description`,
											fonts: [`Inter`],
											layoutDependency: A,
											layoutId: `QK_IKtn2Y`,
											style: {
												"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
												"--framer-paragraph-spacing": `0px`,
											},
											text: h,
											verticalAlignment: `top`,
											withExternalLayout: !0,
										}),
									],
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-wdUbx.framer-92t6u8, .framer-wdUbx .framer-92t6u8 { display: block; }`,
					`.framer-wdUbx.framer-t56bmb { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 310px; }`,
					`.framer-wdUbx .framer-1k31ab5-container { flex: none; height: auto; position: relative; width: 100%; }`,
					`.framer-wdUbx .framer-17q8g5o, .framer-wdUbx .framer-135p3ce { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-wdUbx .framer-1fqwt56 { flex: none; height: 10px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-wdUbx.framer-v-1h9et1f .framer-1fqwt56 { height: 5px; }`,
					...Ye,
					...Fe,
					...fn,
				],
				`framer-wdUbx`,
			)),
			(Us = Hs),
			(Hs.displayName = `Metrics - Card`),
			(Hs.defaultProps = { height: 186, width: 310 }),
			P(Hs, {
				variant: {
					options: [`EZxrKSuSz`, `Je4Dkk4Gd`, `aCmhujSns`],
					optionTitles: [
						`Variant 1 - Desktop`,
						`Variant 1 - Tablet`,
						`Variant 1 - Phone`,
					],
					title: `Variant`,
					type: J.Enum,
				},
				RCWRhrHe8: {
					defaultValue: `+34%`,
					description: ``,
					displayTextArea: !1,
					title: `Quantity`,
					type: J.String,
				},
				oOZL4Z7MG: {
					defaultValue: `Conversion`,
					displayTextArea: !1,
					title: `Metrics Name`,
					type: J.String,
				},
				mFSRU4L0r: {
					defaultValue: `Uplift after redesign and new funnel (90 days).`,
					displayTextArea: !1,
					title: `Description`,
					type: J.String,
				},
			}),
			de(
				Hs,
				[
					{
						explicitInter: !0,
						fonts: [
							{
								family: `Space Mono`,
								source: `google`,
								style: `normal`,
								url: `https://fonts.gstatic.com/s/spacemono/v17/i7dPIFZifjKcF5UAWdDRUEN2RFq7AwU.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
								url: `../fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
								url: `../fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+1F00-1FFF`,
								url: `../fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0370-03FF`,
								url: `../fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
								url: `../fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
								url: `../fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
								url: `../fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
								weight: `400`,
							},
						],
					},
					...Ms,
					...G(Xe),
					...G(Ie),
					...G(mn),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function Gs(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function Q(e, ...t) {
	if (!e)
		throw Error(
			`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``),
		);
}
function Ks(e) {
	throw Error(`Unexpected value: ${e}`);
}
function qs(e, t, n, r) {
	(Q(e >= t, e, `outside lower bound for`, r),
		Q(e <= n, e, `outside upper bound for`, r));
}
function Js(e) {
	return typeof e == `string`;
}
function Ys(e) {
	return Number.isFinite(e);
}
function Xs(e) {
	return e === null;
}
function Zs(e) {
	if (Xs(e)) return 0;
	switch (e.type) {
		case J.Array:
			return 1;
		case J.Boolean:
			return 2;
		case J.Color:
			return 3;
		case J.Date:
			return 4;
		case J.Enum:
			return 5;
		case J.File:
			return 6;
		case J.ResponsiveImage:
			return 10;
		case J.Link:
			return 7;
		case J.Number:
			return 8;
		case J.Object:
			return 9;
		case J.RichText:
			return 11;
		case J.String:
			return 12;
		case J.VectorSetItem:
			return 13;
		default:
			Ks(e);
	}
}
function Qs(e) {
	let t = e.readUint16(),
		n = [];
	for (let r = 0; r < t; r++) {
		let t = Vc.read(e);
		n.push(t);
	}
	return { type: J.Array, value: n };
}
function $s(e, t) {
	for (let n of (e.writeUint16(t.value.length), t.value)) Vc.write(e, n);
}
function ec(e, t, n) {
	let r = e.value.length,
		i = t.value.length;
	if (r < i) return -1;
	if (r > i) return 1;
	for (let i = 0; i < r; i++) {
		let r = e.value[i],
			a = t.value[i],
			o = Vc.compare(r, a, n);
		if (o !== 0) return o;
	}
	return 0;
}
function tc(e) {
	return { type: J.Boolean, value: e.readUint8() !== 0 };
}
function nc(e, t) {
	e.writeUint8(t.value ? 1 : 0);
}
function rc(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ic(e) {
	return { type: J.Color, value: e.readString() };
}
function ac(e, t) {
	e.writeString(t.value);
}
function oc(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function sc(e) {
	let t = e.readInt64(),
		n = new Date(t);
	return { type: J.Date, value: n.toISOString() };
}
function cc(e, t) {
	let n = new Date(t.value).getTime();
	e.writeInt64(n);
}
function lc(e, t) {
	let n = new Date(e.value),
		r = new Date(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function uc(e) {
	return { type: J.Enum, value: e.readString() };
}
function dc(e, t) {
	e.writeString(t.value);
}
function fc(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function pc(e) {
	return { type: J.File, value: e.readString() };
}
function mc(e, t) {
	e.writeString(t.value);
}
function hc(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function gc(e) {
	return { type: J.Link, value: e.readJson() };
}
function _c(e, t) {
	e.writeJson(t.value);
}
function vc(e, t) {
	let n = JSON.stringify(e.value),
		r = JSON.stringify(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function yc(e) {
	return { type: J.Number, value: e.readFloat64() };
}
function bc(e, t) {
	e.writeFloat64(t.value);
}
function xc(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Sc(e) {
	let t = e.readUint16(),
		n = {};
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		n[t] = Vc.read(e);
	}
	return { type: J.Object, value: n };
}
function Cc(e, t) {
	let n = Object.entries(t.value);
	for (let [t, r] of (e.writeUint16(n.length), n))
		(e.writeString(t), Vc.write(e, r));
}
function wc(e, t, n) {
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
			u = Vc.compare(c, l, n);
		if (u !== 0) return u;
	}
	return 0;
}
function Tc(e) {
	return { type: J.ResponsiveImage, value: e.readJson() };
}
function Ec(e, t) {
	e.writeJson(t.value);
}
function Dc(e, t) {
	let n = JSON.stringify(e.value),
		r = JSON.stringify(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function Oc(e) {
	let t = e.readInt8();
	if (t === 0) return { type: J.RichText, value: e.readUint32() };
	if (t === 1) return { type: J.RichText, value: e.readString() };
	throw Error(`Invalid rich text pointer`);
}
function kc(e, t) {
	if (Ys(t.value)) {
		(e.writeInt8(0), e.writeUint32(t.value));
		return;
	}
	if (Js(t.value)) {
		(e.writeInt8(1), e.writeString(t.value));
		return;
	}
	throw Error(`Invalid rich text pointer`);
}
function Ac(e, t) {
	let n = e.value,
		r = t.value;
	if ((Ys(n) && Ys(r)) || (Js(n) && Js(r))) return n < r ? -1 : n > r ? 1 : 0;
	throw Error(`Invalid rich text pointer`);
}
function jc(e) {
	return { type: J.String, value: e.readString() };
}
function Mc(e, t) {
	e.writeString(t.value);
}
function Nc(e, t, n) {
	let r = e.value,
		i = t.value;
	return (
		n.type === 0 &&
			((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
		r < i ? -1 : r > i ? 1 : 0
	);
}
function Pc(e) {
	return { type: J.VectorSetItem, value: e.readUint32() };
}
function Fc(e, t) {
	e.writeUint32(t.value);
}
function Ic(e, t) {
	let n = e.value,
		r = t.value;
	return n < r ? -1 : n > r ? 1 : 0;
}
async function Lc(e) {
	let t = Math.floor(pl * (Math.random() + 1) * 2 ** (e - 1));
	await new Promise((e) => {
		setTimeout(e, t);
	});
}
async function Rc(e, t) {
	let n = Bc(t),
		r = [],
		i = 0;
	for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
	let a = new URL(e),
		o = r.join(`,`);
	a.searchParams.set(`range`, o);
	let s = await hl(a);
	if (s.status !== 200)
		throw Error(`Request failed: ${s.status} ${s.statusText}`);
	let c = await s.arrayBuffer(),
		l = new Uint8Array(c);
	if (l.length !== i)
		throw Error(`Request failed: Unexpected response length`);
	let u = new gl(),
		d = 0;
	for (let e of n) {
		let t = e.to - e.from,
			n = d + t,
			r = l.subarray(d, n);
		(u.write(e.from, r), (d = n));
	}
	return t.map((e) => u.read(e.from, e.to - e.from));
}
function zc(e, t) {
	let n = e.length + t.length,
		r = new Uint8Array(n);
	return (r.set(e, 0), r.set(t, e.length), r);
}
function Bc(e) {
	Q(e.length > 0, `Must have at least one range`);
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
var Vc,
	Hc,
	Uc,
	Wc,
	Gc,
	Kc,
	qc,
	Jc,
	Yc,
	Xc,
	Zc,
	Qc,
	$c,
	el,
	tl,
	nl,
	rl,
	il,
	al,
	ol,
	sl,
	cl,
	ll,
	ul,
	dl,
	fl,
	pl,
	ml,
	hl,
	gl,
	_l,
	vl,
	yl,
	bl,
	xl = e(() => {
		(C(),
			q(),
			(Hc = Object.create),
			(Uc = Object.defineProperty),
			(Wc = Object.getOwnPropertyDescriptor),
			(Gc = Object.getOwnPropertyNames),
			(Kc = Object.getPrototypeOf),
			(qc = Object.prototype.hasOwnProperty),
			(Jc = (e, t, n) =>
				t in e
					? Uc(e, t, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: n,
						})
					: (e[t] = n)),
			(Yc = (e, t) =>
				function () {
					return (
						t || (0, e[Gc(e)[0]])((t = { exports: {} }).exports, t),
						t.exports
					);
				}),
			(Xc = (e, t, n, r) => {
				if ((t && typeof t == `object`) || typeof t == `function`)
					for (let i of Gc(t))
						qc.call(e, i) ||
							i === n ||
							Uc(e, i, {
								get: () => t[i],
								enumerable: !(r = Wc(t, i)) || r.enumerable,
							});
				return e;
			}),
			(Zc = (e, t, n) => (
				(n = e == null ? {} : Hc(Kc(e))),
				Xc(
					!t && e && e.__esModule
						? n
						: Uc(n, `default`, { value: e, enumerable: !0 }),
					e,
				)
			)),
			(Qc = (e, t, n) => Jc(e, typeof t == `symbol` ? t : t + ``, n)),
			($c = Zc(
				Yc({
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
			(el = {
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
			(tl = class {
				getOffset() {
					return this.offset;
				}
				ensureLength(e) {
					let t = this.bytes.length;
					if (!(this.offset + e <= t))
						throw Error(`Reading out of bounds`);
				}
				readUint8() {
					let e = el.Uint8;
					this.ensureLength(e);
					let t = this.view.getUint8(this.offset);
					return ((this.offset += e), t);
				}
				readUint16() {
					let e = el.Uint16;
					this.ensureLength(e);
					let t = this.view.getUint16(this.offset);
					return ((this.offset += e), t);
				}
				readUint32() {
					let e = el.Uint32;
					this.ensureLength(e);
					let t = this.view.getUint32(this.offset);
					return ((this.offset += e), t);
				}
				readUint64() {
					let e = this.readBigUint64();
					return Number(e);
				}
				readBigUint64() {
					let e = el.BigUint64;
					this.ensureLength(e);
					let t = this.view.getBigUint64(this.offset);
					return ((this.offset += e), t);
				}
				readInt8() {
					let e = el.Int8;
					this.ensureLength(e);
					let t = this.view.getInt8(this.offset);
					return ((this.offset += e), t);
				}
				readInt16() {
					let e = el.Int16;
					this.ensureLength(e);
					let t = this.view.getInt16(this.offset);
					return ((this.offset += e), t);
				}
				readInt32() {
					let e = el.Int32;
					this.ensureLength(e);
					let t = this.view.getInt32(this.offset);
					return ((this.offset += e), t);
				}
				readInt64() {
					let e = this.readBigInt64();
					return Number(e);
				}
				readBigInt64() {
					let e = el.BigInt64;
					this.ensureLength(e);
					let t = this.view.getBigInt64(this.offset);
					return ((this.offset += e), t);
				}
				readFloat32() {
					let e = el.Float32;
					this.ensureLength(e);
					let t = this.view.getFloat32(this.offset);
					return ((this.offset += e), t);
				}
				readFloat64() {
					let e = el.Float64;
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
						Qc(this, `offset`, 0),
						Qc(this, `view`),
						Qc(this, `decoder`, new TextDecoder()),
						(this.view = Gs(this.bytes)));
				}
			}),
			u !== void 0 && u.requestIdleCallback,
			(nl = 1024),
			(rl = 1.5),
			(il = (e) => 2 ** e - 1),
			(al = (e) => -(2 ** (e - 1))),
			(ol = (e) => 2 ** (e - 1) - 1),
			(sl = {
				Uint8: 0,
				Uint16: 0,
				Uint32: 0,
				Uint64: 0,
				BigUint64: 0,
				Int8: al(8),
				Int16: al(16),
				Int32: al(32),
				Int64: -(2 ** 53 - 1),
				BigInt64: -(BigInt(2) ** BigInt(63)),
			}),
			(cl = {
				Uint8: il(8),
				Uint16: il(16),
				Uint32: il(32),
				Uint64: 2 ** 53 - 1,
				BigUint64: BigInt(2) ** BigInt(64) - BigInt(1),
				Int8: ol(8),
				Int16: ol(16),
				Int32: ol(32),
				Int64: 2 ** 53 - 1,
				BigInt64: BigInt(2) ** BigInt(63) - BigInt(1),
			}),
			(ll = class {
				getOffset() {
					return this.offset;
				}
				slice(e = 0, t = this.offset) {
					return this.bytes.slice(e, t);
				}
				subarray(e = 0, t = this.offset) {
					return this.bytes.subarray(e, t);
				}
				ensureLength(e) {
					let t = this.bytes.length;
					if (this.offset + e <= t) return;
					let n = new Uint8Array(Math.ceil(t * rl) + e);
					(n.set(this.bytes), (this.bytes = n), (this.view = Gs(n)));
				}
				writeUint8(e) {
					qs(e, sl.Uint8, cl.Uint8, `Uint8`);
					let t = el.Uint8;
					(this.ensureLength(t),
						this.view.setUint8(this.offset, e),
						(this.offset += t));
				}
				writeUint16(e) {
					qs(e, sl.Uint16, cl.Uint16, `Uint16`);
					let t = el.Uint16;
					(this.ensureLength(t),
						this.view.setUint16(this.offset, e),
						(this.offset += t));
				}
				writeUint32(e) {
					qs(e, sl.Uint32, cl.Uint32, `Uint32`);
					let t = el.Uint32;
					(this.ensureLength(t),
						this.view.setUint32(this.offset, e),
						(this.offset += t));
				}
				writeUint64(e) {
					qs(e, sl.Uint64, cl.Uint64, `Uint64`);
					let t = BigInt(e);
					this.writeBigUint64(t);
				}
				writeBigUint64(e) {
					qs(e, sl.BigUint64, cl.BigUint64, `BigUint64`);
					let t = el.BigUint64;
					(this.ensureLength(t),
						this.view.setBigUint64(this.offset, e),
						(this.offset += t));
				}
				writeInt8(e) {
					qs(e, sl.Int8, cl.Int8, `Int8`);
					let t = el.Int8;
					(this.ensureLength(t),
						this.view.setInt8(this.offset, e),
						(this.offset += t));
				}
				writeInt16(e) {
					qs(e, sl.Int16, cl.Int16, `Int16`);
					let t = el.Int16;
					(this.ensureLength(t),
						this.view.setInt16(this.offset, e),
						(this.offset += t));
				}
				writeInt32(e) {
					qs(e, sl.Int32, cl.Int32, `Int32`);
					let t = el.Int32;
					(this.ensureLength(t),
						this.view.setInt32(this.offset, e),
						(this.offset += t));
				}
				writeInt64(e) {
					qs(e, sl.Int64, cl.Int64, `Int64`);
					let t = BigInt(e);
					this.writeBigInt64(t);
				}
				writeBigInt64(e) {
					qs(e, sl.BigInt64, cl.BigInt64, `BigInt64`);
					let t = el.BigInt64;
					(this.ensureLength(t),
						this.view.setBigInt64(this.offset, e),
						(this.offset += t));
				}
				writeFloat32(e) {
					let t = el.Float32;
					(this.ensureLength(t),
						this.view.setFloat32(this.offset, e),
						(this.offset += t));
				}
				writeFloat64(e) {
					let t = el.Float64;
					(this.ensureLength(t),
						this.view.setFloat64(this.offset, e),
						(this.offset += t));
				}
				writeBytes(e) {
					let t = e.length;
					(this.ensureLength(t),
						this.bytes.set(e, this.offset),
						(this.offset += t));
				}
				encodeString(e) {
					let t = this.encodedStrings.get(e);
					if (t) return t;
					let n = this.encoder.encode(e);
					return (this.encodedStrings.set(e, n), n);
				}
				writeString(e) {
					let t = this.encodeString(e),
						n = t.length;
					(this.writeUint32(n), this.writeBytes(t));
				}
				writeJson(e) {
					let t = JSON.stringify(e);
					this.writeString(t);
				}
				constructor() {
					(Qc(this, `offset`, 0),
						Qc(this, `bytes`, new Uint8Array(nl)),
						Qc(this, `view`, Gs(this.bytes)),
						Qc(this, `encoder`, new TextEncoder()),
						Qc(this, `encodedStrings`, new Map()));
				}
			}),
			(ul = class e {
				static fromString(t) {
					let [n, r, i] = t.split(`/`).map(Number);
					return (
						Q(Ys(n), `Invalid chunkId`),
						Q(Ys(r), `Invalid offset`),
						Q(Ys(i), `Invalid length`),
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
									: (Q(this.length === e.length), 0);
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
							return Qs(e);
						case 2:
							return tc(e);
						case 3:
							return ic(e);
						case 4:
							return sc(e);
						case 5:
							return uc(e);
						case 6:
							return pc(e);
						case 7:
							return gc(e);
						case 8:
							return yc(e);
						case 9:
							return Sc(e);
						case 10:
							return Tc(e);
						case 11:
							return Oc(e);
						case 12:
							return jc(e);
						case 13:
							return Pc(e);
						default:
							Ks(t);
					}
				}),
					(e.write = function (e, t) {
						let n = Zs(t);
						if ((e.writeUint8(n), !Xs(t)))
							switch (t.type) {
								case J.Array:
									return $s(e, t);
								case J.Boolean:
									return nc(e, t);
								case J.Color:
									return ac(e, t);
								case J.Date:
									return cc(e, t);
								case J.Enum:
									return dc(e, t);
								case J.File:
									return mc(e, t);
								case J.Link:
									return _c(e, t);
								case J.Number:
									return bc(e, t);
								case J.Object:
									return Cc(e, t);
								case J.ResponsiveImage:
									return Ec(e, t);
								case J.RichText:
									return kc(e, t);
								case J.VectorSetItem:
									return Fc(e, t);
								case J.String:
									return Mc(e, t);
								default:
									Ks(t);
							}
					}),
					(e.compare = function (e, t, n) {
						let r = Zs(e),
							i = Zs(t);
						if (r < i) return -1;
						if (r > i) return 1;
						if (Xs(e) || Xs(t)) return 0;
						switch (e.type) {
							case J.Array:
								return (Q(t.type === J.Array), ec(e, t, n));
							case J.Boolean:
								return (Q(t.type === J.Boolean), rc(e, t));
							case J.Color:
								return (Q(t.type === J.Color), oc(e, t));
							case J.Date:
								return (Q(t.type === J.Date), lc(e, t));
							case J.Enum:
								return (Q(t.type === J.Enum), fc(e, t));
							case J.File:
								return (Q(t.type === J.File), hc(e, t));
							case J.Link:
								return (Q(t.type === J.Link), vc(e, t));
							case J.Number:
								return (Q(t.type === J.Number), xc(e, t));
							case J.Object:
								return (Q(t.type === J.Object), wc(e, t, n));
							case J.ResponsiveImage:
								return (
									Q(t.type === J.ResponsiveImage),
									Dc(e, t)
								);
							case J.RichText:
								return (Q(t.type === J.RichText), Ac(e, t));
							case J.VectorSetItem:
								return (
									Q(t.type === J.VectorSetItem),
									Ic(e, t)
								);
							case J.String:
								return (Q(t.type === J.String), Nc(e, t, n));
							default:
								Ks(e);
						}
					}));
			})((Vc ||= {})),
			(dl = class e {
				sortEntries() {
					this.entries.sort((e, t) => {
						for (let n = 0; n < this.fieldNames.length; n++) {
							let r = e.values[n],
								i = t.values[n],
								a = Vc.compare(r, i, this.options.collation);
							if (a !== 0) return a;
						}
						return e.pointer.compare(t.pointer);
					});
				}
				static deserialize(t) {
					let n = new tl(t),
						r = n.readJson(),
						i = n.readUint8(),
						a = [];
					for (let e = 0; e < i; e++) {
						let e = n.readString();
						a.push(e);
					}
					let o = new e(a, { collation: r }),
						s = n.readUint32();
					for (let e = 0; e < s; e++) {
						let e = [];
						for (let t = 0; t < i; t++) {
							let t = Vc.read(n);
							e.push(t);
						}
						let t = ul.read(n);
						o.entries.push({ values: e, pointer: t });
					}
					return o;
				}
				serialize() {
					let e = new ll();
					for (let t of (e.writeJson(this.options.collation),
					e.writeUint8(this.fieldNames.length),
					this.fieldNames))
						e.writeString(t);
					for (let t of (this.sortEntries(),
					e.writeUint32(this.entries.length),
					this.entries)) {
						let { values: n, pointer: r } = t;
						for (let t of n) Vc.write(e, t);
						r.write(e);
					}
					return e.subarray();
				}
				addItem(e, t) {
					let n = this.fieldNames.map((t) => e.getField(t) ?? null);
					this.entries.push({ values: n, pointer: t });
				}
				constructor(e, t) {
					((this.fieldNames = e),
						(this.options = t),
						Qc(this, `entries`, []));
				}
			}),
			(fl = 3),
			(pl = 250),
			(ml = [408, 429, 500, 502, 503, 504]),
			(hl = async (e, t) => {
				let n = 0;
				for (;;) {
					try {
						let r = await fetch(e, t);
						if (!ml.includes(r.status) || ++n > fl) return r;
					} catch (e) {
						if (t?.signal?.aborted || ++n > fl) throw e;
					}
					await Lc(n);
				}
			}),
			(gl = class {
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
						if ((Q(e, `Missing chunk`), !(n > e.end))) {
							if (n > e.start) {
								let r = n - e.start;
								((t = zc(e.data.subarray(0, r), t)),
									(n = e.start));
							}
							break;
						}
					}
					for (; a > i; a--) {
						let e = this.chunks[a - 1];
						if ((Q(e, `Missing chunk`), !(r < e.start))) {
							if (r < e.end) {
								let n = r - e.start,
									i = e.data.subarray(n);
								((t = zc(t, i)), (r = e.end));
							}
							break;
						}
					}
					let o = { start: n, end: r, data: t },
						s = a - i;
					this.chunks.splice(i, s, o);
				}
				constructor() {
					Qc(this, `chunks`, []);
				}
			}),
			(_l = class {
				async loadModel() {
					let [e] = await Rc(this.options.url, [this.options.range]);
					return (Q(e, `Failed to load model`), dl.deserialize(e));
				}
				async getModel() {
					return (
						(this.modelPromise ??= this.loadModel()),
						(this.model ??= await this.modelPromise),
						this.model
					);
				}
				async lookupItems(e) {
					Q(e.length === this.fields.length, `Invalid query length`);
					let t = await this.getModel(),
						n = e.reduce(
							(e, t, n) =>
								e.flatMap((e) => {
									switch (t.type) {
										case `All`:
											return [e];
										case `Equals`:
											return this.queryEquals(e, t, n);
										case `NotEquals`:
											return this.queryNotEquals(e, t, n);
										case `LessThan`:
											return this.queryLessThan(e, t, n);
										case `GreaterThan`:
											return this.queryGreaterThan(
												e,
												t,
												n,
											);
										case `Contains`:
											return this.queryContains(e, t, n);
										case `StartsWith`:
											return this.queryStartsWith(
												e,
												t,
												n,
											);
										case `EndsWith`:
											return this.queryEndsWith(e, t, n);
										default:
											Ks(t);
									}
								}),
							[t.entries],
						),
						r = [];
					for (let e of n)
						for (let t of e) {
							let e = {};
							for (
								let n = 0;
								n < this.options.fieldNames.length;
								n++
							) {
								let r = this.options.fieldNames[n];
								e[r] = t.values[n];
							}
							r.push({ pointer: t.pointer.toString(), data: e });
						}
					return r;
				}
				queryEquals(e, t, n) {
					let r = this.getLeftMost(e, n, t.value),
						i = this.getRightMost(e, n, t.value),
						a = e.slice(r, i + 1);
					return a.length > 0 ? [a] : [];
				}
				queryNotEquals(e, t, n) {
					let r = this.getLeftMost(e, n, t.value),
						i = this.getRightMost(e, n, t.value),
						a = [],
						o = e.slice(0, r);
					o.length > 0 && a.push(o);
					let s = e.slice(i + 1);
					return (s.length > 0 && a.push(s), a);
				}
				queryLessThan(e, t, n) {
					let r = this.getRightMost(e, n, null);
					if (((e = e.slice(r + 1)), t.inclusive)) {
						let r = this.getRightMost(e, n, t.value),
							i = e.slice(0, r + 1);
						return i.length > 0 ? [i] : [];
					}
					let i = this.getLeftMost(e, n, t.value),
						a = e.slice(0, i);
					return a.length > 0 ? [a] : [];
				}
				queryGreaterThan(e, t, n) {
					let r = this.getRightMost(e, n, null);
					if (((e = e.slice(r + 1)), t.inclusive)) {
						let r = this.getLeftMost(e, n, t.value),
							i = e.slice(r);
						return i.length > 0 ? [i] : [];
					}
					let i = this.getRightMost(e, n, t.value),
						a = e.slice(i + 1);
					return a.length > 0 ? [a] : [];
				}
				queryContains(e, t, n) {
					return this.findItems(e, n, (e) => {
						if (e?.type !== J.String || t.value?.type !== J.String)
							return !1;
						let n = e.value,
							r = t.value.value;
						return (
							this.collation.type === 0 &&
								((n = n.toLowerCase()), (r = r.toLowerCase())),
							n.includes(r)
						);
					});
				}
				queryStartsWith(e, t, n) {
					return this.findItems(e, n, (e) => {
						if (e?.type !== J.String || t.value?.type !== J.String)
							return !1;
						let n = e.value,
							r = t.value.value;
						return (
							this.collation.type === 0 &&
								((n = n.toLowerCase()), (r = r.toLowerCase())),
							n.startsWith(r)
						);
					});
				}
				queryEndsWith(e, t, n) {
					return this.findItems(e, n, (e) => {
						if (e?.type !== J.String || t.value?.type !== J.String)
							return !1;
						let n = e.value,
							r = t.value.value;
						return (
							this.collation.type === 0 &&
								((n = n.toLowerCase()), (r = r.toLowerCase())),
							n.endsWith(r)
						);
					});
				}
				getLeftMost(e, t, n) {
					let r = 0,
						i = e.length;
					for (; r < i; ) {
						let a = (r + i) >> 1,
							o = e[a].values[t];
						0 > Vc.compare(o, n, this.collation)
							? (r = a + 1)
							: (i = a);
					}
					return r;
				}
				getRightMost(e, t, n) {
					let r = 0,
						i = e.length;
					for (; r < i; ) {
						let a = (r + i) >> 1,
							o = e[a].values[t];
						Vc.compare(o, n, this.collation) > 0
							? (i = a)
							: (r = a + 1);
					}
					return i - 1;
				}
				findItems(e, t, n) {
					let r = [],
						i = 0;
					for (let a = 0; a < e.length; a++) {
						let o = e[a].values[t];
						if (!n(o)) {
							if (i < a) {
								let t = e.slice(i, a);
								r.push(t);
							}
							i = a + 1;
						}
					}
					if (i < e.length) {
						let t = e.slice(i);
						r.push(t);
					}
					return r;
				}
				constructor(e) {
					((this.options = e),
						Qc(this, `schema`),
						Qc(this, `fields`),
						Qc(this, `supportedLookupTypes`, [
							`All`,
							`Equals`,
							`NotEquals`,
							`LessThan`,
							`GreaterThan`,
							`Contains`,
							`StartsWith`,
							`EndsWith`,
						]),
						Qc(this, `modelPromise`),
						Qc(this, `model`),
						Qc(this, `collation`));
					let t = {},
						n = [];
					for (let e of this.options.fieldNames) {
						let r = this.options.collectionSchema[e];
						(Q(r, `Missing definition for field`, e),
							(t[e] = r),
							n.push({ type: `Identifier`, name: e }));
					}
					((this.schema = t),
						(this.fields = n),
						(this.collation = this.options.collation));
				}
			}),
			(vl = class e {
				static read(t) {
					let n = new e(),
						r = t.readUint16();
					for (let e = 0; e < r; e++) {
						let e = t.readString(),
							r = Vc.read(t);
						n.setField(e, r);
					}
					return n;
				}
				write(e) {
					for (let [t, n] of (e.writeUint16(this.fields.size),
					this.fields))
						(e.writeString(t), Vc.write(e, n));
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
					Qc(this, `fields`, new Map());
				}
			}),
			(yl = class {
				scanItems() {
					return (
						(this.itemsPromise ??= hl(this.url).then(async (e) => {
							if (!e.ok)
								throw Error(
									`Request failed: ${e.status} ${e.statusText}`,
								);
							let t = await e.arrayBuffer(),
								n = new tl(new Uint8Array(t)),
								r = [],
								i = n.readUint32();
							for (let e = 0; e < i; e++) {
								let e = n.getOffset(),
									t = vl.read(n),
									i = n.getOffset() - e,
									a = new ul(this.id, e, i).toString(),
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
						Qc(this, `itemsPromise`),
						Qc(
							this,
							`itemLoader`,
							new $c.default(async (e) => {
								let t = e.map((e) => {
									let t = ul.fromString(e);
									return {
										from: t.offset,
										to: t.offset + t.length,
									};
								});
								return (await Rc(this.url, t)).map((t, n) => {
									let r = new tl(t),
										i = vl.read(r),
										a = e[n];
									return (
										Q(a, `Missing pointer`),
										{ pointer: a, data: i.getData() }
									);
								});
							}),
						));
				}
			}),
			(bl = class {
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
							let t = ul.fromString(e),
								n = this.chunks[t.chunkId];
							return (Q(n, `Missing chunk`), n.resolveItem(e));
						}),
					);
				}
				compareItems(e, t) {
					let n = ul.fromString(e.pointer),
						r = ul.fromString(t.pointer);
					return n.compare(r);
				}
				compareValues(e, t, n) {
					return Vc.compare(e, t, n);
				}
				constructor(e) {
					((this.options = e),
						Qc(this, `schema`),
						Qc(this, `indexes`),
						Qc(this, `resolveRichText`),
						Qc(this, `resolveVectorSetItem`),
						Qc(this, `chunks`),
						(this.chunks = this.options.chunks.map(
							(e, t) => new yl(t, e),
						)),
						(this.schema = e.schema),
						(this.indexes = e.indexes),
						(this.resolveRichText = e.resolveRichText),
						(this.resolveVectorSetItem = e.resolveVectorSetItem));
				}
			}));
	});
function Sl(e) {
	return typeof e == `object` && !!e && !m(e) && El in e;
}
function Cl(e, ...t) {
	if (!e)
		throw Error(
			`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``),
		);
}
function wl(e) {
	let t = new Map();
	return (n) => {
		let r = t.get(n);
		if (r) return r;
		let a = (function t(n) {
			switch (n[0]) {
				case 1: {
					let [, ...e] = n;
					return x(i, void 0, ...e.map(t));
				}
				case 2: {
					let [, e, ...r] = n;
					return x(ce, e, ...r.map(t));
				}
				case 3: {
					let [, t, r] = n,
						i = e[t];
					return (
						Cl(i, `Module not found`),
						Sl(i) && i.preload(),
						p(fe, {
							componentIdentifier: t,
							children: (e) => p(i, { ...e, ...r }),
						})
					);
				}
				case 4: {
					let [, e, r, ...i] = n,
						a = i.map(t);
					return x(e === `a` ? k.a : e, r, ...a);
				}
				case 5: {
					let [, e] = n;
					return e;
				}
			}
		})(JSON.parse(n));
		return (t.set(n, a), a);
	};
}
var Tl,
	El,
	Dl,
	Ol = e(() => {
		(y(),
			q(),
			l(),
			(El = `preload`),
			(Dl =
				(((Tl = Dl || {})[(Tl.Fragment = 1)] = `Fragment`),
				(Tl[(Tl.Link = 2)] = `Link`),
				(Tl[(Tl.Module = 3)] = `Module`),
				(Tl[(Tl.Tag = 4)] = `Tag`),
				(Tl[(Tl.Text = 5)] = `Text`),
				Tl)));
	}),
	kl,
	Al,
	jl,
	Ml,
	Nl,
	Pl,
	Fl,
	Il,
	Ll,
	Rl,
	zl,
	Bl,
	Vl,
	Hl,
	Ul,
	Wl,
	Gl,
	Kl,
	ql,
	Jl,
	Yl,
	Xl,
	Zl,
	Ql,
	$l,
	eu,
	tu,
	nu,
	ru,
	iu,
	au,
	ou = e(() => {
		(q(),
			xl(),
			Ol(),
			(kl = {
				aCxyLQ1t8: { isNullable: !0, type: J.String },
				createdAt: { isNullable: !0, type: J.Date },
				CvhGKpfzb: { isNullable: !0, type: J.Enum },
				DcR7dZYg7: { isNullable: !0, type: J.Link },
				Fc9gMlpS8: {
					definition: { isNullable: !0, type: J.String },
					isNullable: !0,
					type: J.Array,
				},
				frSm7SqOH: { isNullable: !0, type: J.String },
				gBohv3AhW: { isNullable: !0, type: J.ResponsiveImage },
				HhZ9YcumA: { isNullable: !0, type: J.ResponsiveImage },
				id: { isNullable: !1, type: J.String },
				iPR_E15pa: { isNullable: !0, type: J.String },
				iprSlvcgS: { isNullable: !0, type: J.String },
				KuMrwvX4m: {
					definition: {
						definitions: {
							CzKJd55Q3: {
								isNullable: !0,
								type: J.ResponsiveImage,
							},
							id: { isNullable: !1, type: J.String },
						},
						isNullable: !0,
						type: J.Object,
					},
					isNullable: !0,
					type: J.Array,
				},
				nextItemId: { isNullable: !0, type: J.String },
				OZdNue_CD: { isNullable: !0, type: J.String },
				p8fxY0bCX: { isNullable: !0, type: J.VectorSetItem },
				PMkPNP5YT: { isNullable: !0, type: J.ResponsiveImage },
				previousItemId: { isNullable: !0, type: J.String },
				pXUZglhxh: { isNullable: !0, type: J.String },
				Rcd9YdMN_: { isNullable: !0, type: J.String },
				t9QzOmy7p: { isNullable: !0, type: J.ResponsiveImage },
				updatedAt: { isNullable: !0, type: J.Date },
				VSmb3sBiu: { isNullable: !0, type: J.String },
				XeBiPQ5VL: { isNullable: !0, type: J.ResponsiveImage },
			}),
			(Al = [`id`]),
			(jl = { type: 1 }),
			(Ml = [`previousItemId`]),
			(Nl = [`nextItemId`]),
			(Pl = [`id`, `frSm7SqOH`]),
			(Fl = [`frSm7SqOH`, `id`]),
			(Il = [`aCxyLQ1t8`]),
			(Ll = { type: 0 }),
			(Rl = [`frSm7SqOH`]),
			(zl = [`iprSlvcgS`]),
			(Bl = [`VSmb3sBiu`]),
			(Vl = [`pXUZglhxh`]),
			(Hl = [`iPR_E15pa`]),
			(Ul = [`CvhGKpfzb`]),
			(Wl = [`Rcd9YdMN_`]),
			(Gl = [`DcR7dZYg7`]),
			(Kl = [`Fc9gMlpS8`]),
			(ql = [`XeBiPQ5VL`]),
			(Jl = [`t9QzOmy7p`]),
			(Yl = [`HhZ9YcumA`]),
			(Xl = [`gBohv3AhW`]),
			(Zl = [`KuMrwvX4m`]),
			(Ql = [`p8fxY0bCX`]),
			($l = [`PMkPNP5YT`]),
			(eu = [`OZdNue_CD`]),
			(tu = [
				() => import(`./dA6tLpTLG.DbEgqBXP.mjs`),
				() => import(`./dT88HHyJ5.CN9jvr3U.mjs`),
			]),
			(nu = (e) => {
				let t = tu[e];
				if (t) return t().then((e) => e.default);
			}),
			(ru = wl({})),
			new ne(new I()),
			(iu = {
				collectionByLocaleId: {
					default: new bl({
						chunks: [
							new URL(
								`./tTTLfmF7I-chunk-default-0.framercms`,
								`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
							).href.replace(`/modules/`, `/cms/`),
						],
						indexes: [
							new _l({
								collation: jl,
								collectionSchema: kl,
								fieldNames: Al,
								range: { from: 0, to: 265 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: jl,
								collectionSchema: kl,
								fieldNames: Ml,
								range: { from: 265, to: 529 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: jl,
								collectionSchema: kl,
								fieldNames: Nl,
								range: { from: 529, to: 789 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: jl,
								collectionSchema: kl,
								fieldNames: Pl,
								range: { from: 789, to: 1230 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: jl,
								collectionSchema: kl,
								fieldNames: Fl,
								range: { from: 1230, to: 1671 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Il,
								range: { from: 1671, to: 1982 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Rl,
								range: { from: 1982, to: 2277 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: zl,
								range: { from: 2277, to: 5670 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Bl,
								range: { from: 5670, to: 5892 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Vl,
								range: { from: 5892, to: 6156 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Hl,
								range: { from: 6156, to: 6440 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Ul,
								range: { from: 6440, to: 6712 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Wl,
								range: { from: 6712, to: 7044 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Gl,
								range: { from: 7044, to: 7469 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Kl,
								range: { from: 7469, to: 8093 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: ql,
								range: { from: 8093, to: 13053 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Jl,
								range: { from: 13053, to: 18003 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Yl,
								range: { from: 18003, to: 20317 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Xl,
								range: { from: 20317, to: 22628 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Zl,
								range: { from: 22628, to: 33146 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: Ql,
								range: { from: 33146, to: 33328 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: $l,
								range: { from: 33328, to: 34850 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
							new _l({
								collation: Ll,
								collectionSchema: kl,
								fieldNames: eu,
								range: { from: 34850, to: 35059 },
								url: new URL(
									`./tTTLfmF7I-indexes-default-0.framercms`,
									`https://framerusercontent.com/modules/0uF1wbiIjOHE0DHE0rFy/7wgO9OHsPb4Qs0FhhqaN/tTTLfmF7I.js`,
								).href.replace(`/modules/`, `/cms/`),
							}),
						],
						resolveRichText: ru,
						resolveVectorSetItem: nu,
						schema: kl,
					}),
				},
				displayName: `Projects`,
			}),
			(au = iu),
			P(iu, {
				aCxyLQ1t8: {
					defaultValue: ``,
					title: `Name of Project`,
					type: J.String,
				},
				frSm7SqOH: { title: `Slug`, type: J.String },
				iprSlvcgS: {
					defaultValue: ``,
					displayTextArea: !0,
					title: `Description`,
					type: J.String,
				},
				VSmb3sBiu: {
					defaultValue: `2025`,
					placeholder: `2025`,
					preventLocalization: !0,
					title: `Year`,
					type: J.String,
				},
				pXUZglhxh: {
					defaultValue: ``,
					placeholder: `Tech, AI, SaaS, Fashion...`,
					title: `Industry`,
					type: J.String,
				},
				iPR_E15pa: {
					defaultValue: ``,
					placeholder: `UK, London`,
					title: `Client Location`,
					type: J.String,
				},
				CvhGKpfzb: {
					defaultValue: `rg3SyvG7V`,
					options: [
						`o8X5QKDVb`,
						`rg3SyvG7V`,
						`q0decFfrp`,
						`G1Nei5M4q`,
						`KLRDHc7Fi`,
						`iZ6TfxuHS`,
						`LaRuPDrM8`,
						`jwGiGj5J3`,
						`wPcjVWN_w`,
						`qc57AqNyV`,
					],
					optionTitles: [
						`3-4 Days`,
						`1 Week`,
						`2 Weeks`,
						`3 Weeks`,
						`1 Month`,
						`2 Months`,
						`3 Months`,
						`4 Months`,
						`5 Months`,
						`6 Months`,
					],
					title: `Duration / Timeline`,
					type: J.Enum,
				},
				Rcd9YdMN_: {
					defaultValue: ``,
					placeholder: `Company Name`,
					title: `Client Name`,
					type: J.String,
				},
				DcR7dZYg7: { title: `Link to Website`, type: J.Link },
				Fc9gMlpS8: {
					dataIdentifier: `local-module:collection/PxI14If8r:default`,
					title: `Categories Of Projects`,
					type: J.MultiCollectionReference,
				},
				XeBiPQ5VL: {
					title: `Main Image - Normal`,
					type: J.ResponsiveImage,
				},
				t9QzOmy7p: {
					title: `Main Image - Hover`,
					type: J.ResponsiveImage,
				},
				HhZ9YcumA: {
					title: `Vertical Image 1`,
					type: J.ResponsiveImage,
				},
				gBohv3AhW: {
					title: `Vertical Image 2`,
					type: J.ResponsiveImage,
				},
				KuMrwvX4m: {
					__vekterDefault: [],
					control: {
						controls: {
							CzKJd55Q3: {
								title: `Image`,
								type: `responsiveimage`,
							},
						},
						type: `object`,
					},
					title: `Other Images`,
					type: J.Array,
				},
				p8fxY0bCX: {
					defaultValue: {
						identifier: `local-module:vector/dT88HHyJ5:default`,
						moduleId: `ki4HEW3bdKotHtJNoMRN`,
					},
					setModuleId: `9dzL7drFgxvALQbKwZIc`,
					title: `Client Logotype`,
					type: J.VectorSetItem,
				},
				PMkPNP5YT: { title: `QR-Code Image`, type: J.ResponsiveImage },
				OZdNue_CD: {
					defaultValue: ``,
					title: `Video URL`,
					type: J.String,
				},
				createdAt: { title: `Created`, type: J.Date },
				updatedAt: { title: `Updated`, type: J.Date },
				previousItemId: {
					dataIdentifier: `local-module:collection/tTTLfmF7I:default`,
					title: `Previous`,
					type: J.CollectionReference,
				},
				nextItemId: {
					dataIdentifier: `local-module:collection/tTTLfmF7I:default`,
					title: `Next`,
					type: J.CollectionReference,
				},
			}));
	});
function su(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var cu,
	lu,
	uu,
	du,
	fu,
	pu,
	mu,
	hu,
	gu,
	_u,
	vu,
	yu,
	bu,
	xu = e(() => {
		(y(),
			q(),
			N(),
			l(),
			st(),
			ou(),
			Je(),
			$e(),
			(cu = te(k.div)),
			(lu = { NB2goFkO3: { hover: !0 } }),
			(uu = `framer-Qi1ie`),
			(du = { NB2goFkO3: `framer-v-1mgwu4q` }),
			(fu = {
				delay: 0,
				duration: 0.5,
				ease: [0.01, 0.83, 0.57, 0.91],
				type: `tween`,
			}),
			(pu = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(mu = ({ query: e, pageSize: t, children: n }) => n(be(e))),
			(hu = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(gu = k.create(i)),
			(_u = ({
				height: e,
				id: t,
				selectProject: n,
				topSpacer: r,
				width: i,
				...a
			}) => ({
				...a,
				au1e3BDx1: r ?? a.au1e3BDx1 ?? !0,
				MvdtxEQLz: n ?? a.MvdtxEQLz,
			})),
			(vu = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(yu = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e(),
						c = X(),
						{
							style: l,
							className: u,
							layoutId: d,
							variant: f,
							au1e3BDx1: m,
							MvdtxEQLz: h,
							frSm7SqOHHtW9HFLbZ: g,
							XeBiPQ5VLHtW9HFLbZ: y,
							t9QzOmy7pHtW9HFLbZ: x,
							aCxyLQ1t8HtW9HFLbZ: C,
							Xgdhwh5Memd3R5ym87: w,
							TBDlVXOGAmd3R5ym87: T,
							idmd3R5ym87: E,
							idHtW9HFLbZ: D,
							...O
						} = _u(e),
						{
							baseVariant: A,
							classNames: j,
							clearLoadingGesture: N,
							gestureHandlers: P,
							gestureVariant: F,
							isLoading: I,
							setGestureState: L,
							setVariant: z,
							variants: ee,
						} = W({
							defaultVariant: `NB2goFkO3`,
							enabledGestures: lu,
							ref: r,
							variant: f,
							variantClassNames: du,
						}),
						B = vu(e, ee),
						V = U(uu, Ze, Qe);
					return p(M, {
						id: d ?? a,
						children: p(gu, {
							animate: ee,
							initial: !1,
							children: p(hu, {
								value: fu,
								children: v(cu, {
									...O,
									...P,
									className: U(V, `framer-1mgwu4q`, u, j),
									"data-framer-name": `Card`,
									layoutDependency: B,
									layoutId: `NB2goFkO3`,
									ref: r,
									style: { ...l },
									...su(
										{
											"NB2goFkO3-hover": {
												__framer__spring: {
													bounce: 0.4,
													damping: 60,
													delay: 0,
													duration: 0.7,
													durationBasedSpring: !0,
													ease: [0.44, 0, 0.56, 1],
													mass: 1,
													stagger: 0,
													stiffness: 500,
													type: `spring`,
												},
												__framer__styleTransformEffectEnabled:
													!0,
												__framer__transformTargets: [
													{
														target: {
															opacity: 1,
															rotate: 0,
															rotateX: 0,
															rotateY: 0,
															scale: 1,
															skewX: 0,
															skewY: 0,
															x: 0,
															y: -15,
														},
													},
													{
														target: {
															opacity: 1,
															rotate: 0,
															rotateX: 0,
															rotateY: 0,
															scale: 1,
															skewX: 0,
															skewY: 0,
															x: 0,
															y: 0,
														},
													},
												],
												__framer__transformTrigger: `onScroll`,
												__perspectiveFX: !1,
												__smartComponentFX: !0,
												__targetOpacity: 1,
												"data-framer-name": void 0,
											},
										},
										A,
										F,
									),
									children: [
										m &&
											p(k.div, {
												className: `framer-1pwqkzy`,
												"data-framer-name": `Spacer`,
												layoutDependency: B,
												layoutId: `mFJJDUUPz`,
											}),
										p(k.div, {
											className: `framer-1o2kr22`,
											layoutDependency: B,
											layoutId: `HtW9HFLbZ`,
											children: p(he, {
												children: p(mu, {
													query: {
														from: {
															alias: `HtW9HFLbZ`,
															data: au,
															type: `Collection`,
														},
														limit: {
															type: `LiteralValue`,
															value: 1,
														},
														offset: {
															type: `LiteralValue`,
															value: 0,
														},
														select: [
															{
																collection: `HtW9HFLbZ`,
																name: `frSm7SqOH`,
																type: `Identifier`,
															},
															{
																collection: `HtW9HFLbZ`,
																name: `XeBiPQ5VL`,
																type: `Identifier`,
															},
															{
																collection: `HtW9HFLbZ`,
																name: `t9QzOmy7p`,
																type: `Identifier`,
															},
															{
																collection: `HtW9HFLbZ`,
																name: `aCxyLQ1t8`,
																type: `Identifier`,
															},
															{
																collection: `HtW9HFLbZ`,
																name: `id`,
																type: `Identifier`,
															},
															{
																alias: `md3R5ym87`,
																arguments: [
																	{
																		from: {
																			alias: `md3R5ym87`,
																			data: lt,
																			type: `Collection`,
																		},
																		orderBy:
																			[
																				{
																					arguments:
																						[
																							{
																								collection: `HtW9HFLbZ`,
																								name: `Fc9gMlpS8`,
																								type: `Identifier`,
																							},
																							{
																								collection: `md3R5ym87`,
																								name: `id`,
																								type: `Identifier`,
																							},
																						],
																					direction: `asc`,
																					functionName: `INDEX_OF`,
																					type: `FunctionCall`,
																				},
																			],
																		select: [
																			{
																				collection: `md3R5ym87`,
																				name: `Xgdhwh5Me`,
																				type: `Identifier`,
																			},
																			{
																				collection: `md3R5ym87`,
																				name: `TBDlVXOGA`,
																				type: `Identifier`,
																			},
																			{
																				collection: `md3R5ym87`,
																				name: `id`,
																				type: `Identifier`,
																			},
																		],
																		type: `Select`,
																		where: {
																			left: {
																				collection: `md3R5ym87`,
																				name: `id`,
																				type: `Identifier`,
																			},
																			operator: `in`,
																			right: {
																				collection: `HtW9HFLbZ`,
																				name: `Fc9gMlpS8`,
																				type: `Identifier`,
																			},
																			type: `BinaryOperation`,
																		},
																	},
																],
																functionName: `ARRAY`,
																type: `FunctionCall`,
															},
														],
														where: {
															left: {
																collection: `HtW9HFLbZ`,
																name: `id`,
																type: `Identifier`,
															},
															operator: `==`,
															right: {
																type: `LiteralValue`,
																value: h,
															},
															type: `BinaryOperation`,
														},
													},
													children: (e, t, n) =>
														p(b, {
															children: e?.map(
																(
																	{
																		aCxyLQ1t8:
																			e,
																		frSm7SqOH:
																			t,
																		id: n,
																		md3R5ym87:
																			r,
																		t9QzOmy7p:
																			a,
																		XeBiPQ5VL:
																			o,
																	},
																	s,
																) => (
																	(t ??= ``),
																	(e ??= ``),
																	p(
																		M,
																		{
																			id: `HtW9HFLbZ-${n}`,
																			children:
																				p(
																					ae.Provider,
																					{
																						value: {
																							frSm7SqOH:
																								t,
																						},
																						children:
																							p(
																								ce,
																								{
																									href: {
																										pathVariables:
																											{
																												frSm7SqOH:
																													t,
																											},
																										webPageId: `luGPP9ZOT`,
																									},
																									motionChild:
																										!0,
																									nodeId: `LRUsNPGN_`,
																									scopeId: `pkfNL_e57`,
																									children:
																										p(
																											k.a,
																											{
																												className: `framer-wjqx8e framer-lwk1ry`,
																												layoutDependency:
																													B,
																												layoutId: `LRUsNPGN_`,
																												children:
																													v(
																														k.div,
																														{
																															className: `framer-1016scr`,
																															"data-framer-name": `Card`,
																															layoutDependency:
																																B,
																															layoutId: `xuOCkyLt2`,
																															style: {
																																backgroundColor: `rgb(255, 255, 255)`,
																																borderBottomLeftRadius: 10,
																																borderBottomRightRadius: 10,
																																borderTopLeftRadius: 10,
																																borderTopRightRadius: 10,
																															},
																															children:
																																[
																																	p(
																																		se,
																																		{
																																			background:
																																				{
																																					alt: ``,
																																					fit: `fill`,
																																					intrinsicHeight: 720,
																																					intrinsicWidth: 446,
																																					pixelHeight: 1440,
																																					pixelWidth: 892,
																																					sizes: `calc(${c?.width || `100vw`} - 4px)`,
																																					...pu(
																																						o,
																																					),
																																				},
																																			className: `framer-1e6uyff`,
																																			"data-framer-name": `Image`,
																																			fitImageDimension: `height`,
																																			layoutDependency:
																																				B,
																																			layoutId: `dnJKfJ701`,
																																			style: {
																																				borderBottomLeftRadius: 8,
																																				borderBottomRightRadius: 8,
																																				borderTopLeftRadius: 8,
																																				borderTopRightRadius: 8,
																																			},
																																			children:
																																				p(
																																					se,
																																					{
																																						background:
																																							{
																																								alt: ``,
																																								fit: `fill`,
																																								intrinsicHeight: 720,
																																								intrinsicWidth: 446,
																																								pixelHeight: 1440,
																																								pixelWidth: 892,
																																								sizes: `calc(${c?.width || `100vw`} - 4px)`,
																																								...pu(
																																									a,
																																								),
																																							},
																																						className: `framer-zwjjy7`,
																																						"data-framer-name": `Image`,
																																						layoutDependency:
																																							B,
																																						layoutId: `gne__IKQI`,
																																						style: {
																																							borderBottomLeftRadius: 8,
																																							borderBottomRightRadius: 8,
																																							borderTopLeftRadius: 8,
																																							borderTopRightRadius: 8,
																																							opacity: 0,
																																						},
																																						variants:
																																							{
																																								"NB2goFkO3-hover":
																																									{
																																										opacity: 1,
																																									},
																																							},
																																						...su(
																																							{
																																								"NB2goFkO3-hover":
																																									{
																																										background:
																																											{
																																												alt: ``,
																																												fit: `fill`,
																																												intrinsicHeight: 720,
																																												intrinsicWidth: 446,
																																												pixelHeight: 1440,
																																												pixelWidth: 892,
																																												...pu(
																																													a,
																																												),
																																											},
																																									},
																																							},
																																							A,
																																							F,
																																						),
																																					},
																																				),
																																		},
																																	),
																																	v(
																																		k.div,
																																		{
																																			className: `framer-6fjuvo`,
																																			"data-framer-name": `Name`,
																																			layoutDependency:
																																				B,
																																			layoutId: `DaurIHbfo`,
																																			style: {
																																				backgroundColor: `rgb(243, 243, 243)`,
																																				borderBottomLeftRadius: 8,
																																				borderBottomRightRadius: 8,
																																				borderTopLeftRadius: 8,
																																				borderTopRightRadius: 8,
																																			},
																																			children:
																																				[
																																					p(
																																						R,
																																						{
																																							__fromCanvasComponent:
																																								!0,
																																							children:
																																								p(
																																									i,
																																									{
																																										children:
																																											p(
																																												k.h6,
																																												{
																																													className: `framer-styles-preset-41ki07`,
																																													"data-styles-preset": `hmRgK3K6v`,
																																													style: {
																																														"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																													},
																																													children: `White Gate Hotel`,
																																												},
																																											),
																																									},
																																								),
																																							className: `framer-gmde6n`,
																																							fonts: [
																																								`Inter`,
																																							],
																																							layoutDependency:
																																								B,
																																							layoutId: `aueaOKGH7`,
																																							style: {
																																								"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																								"--framer-paragraph-spacing": `0px`,
																																							},
																																							text: e,
																																							verticalAlignment: `top`,
																																							withExternalLayout:
																																								!0,
																																						},
																																					),
																																					p(
																																						k.div,
																																						{
																																							className: `framer-140ahbc`,
																																							layoutDependency:
																																								B,
																																							layoutId: `md3R5ym87`,
																																							children:
																																								r?.map(
																																									(
																																										{
																																											id: e,
																																											TBDlVXOGA:
																																												t,
																																											Xgdhwh5Me:
																																												n,
																																										},
																																										r,
																																									) => (
																																										(n ??= ``),
																																										(t ??= ``),
																																										p(
																																											M,
																																											{
																																												id: `md3R5ym87-${e}`,
																																												children:
																																													p(
																																														ae.Provider,
																																														{
																																															value: {
																																																TBDlVXOGA:
																																																	t,
																																															},
																																															children:
																																																p(
																																																	k.div,
																																																	{
																																																		className: `framer-1ibws8z`,
																																																		"data-framer-name": `Category`,
																																																		layoutDependency:
																																																			B,
																																																		layoutId: `md4Z61sY4`,
																																																		style: {
																																																			backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																																																			borderBottomLeftRadius: 8,
																																																			borderBottomRightRadius: 8,
																																																			borderTopLeftRadius: 8,
																																																			borderTopRightRadius: 8,
																																																		},
																																																		children:
																																																			p(
																																																				R,
																																																				{
																																																					__fromCanvasComponent:
																																																						!0,
																																																					children:
																																																						p(
																																																							i,
																																																							{
																																																								children:
																																																									p(
																																																										k.h6,
																																																										{
																																																											className: `framer-styles-preset-12tby5a`,
																																																											"data-styles-preset": `j9HsFBXUW`,
																																																											style: {
																																																												"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																																											},
																																																											children: `Mercedes`,
																																																										},
																																																									),
																																																							},
																																																						),
																																																					className: `framer-xpcnyv`,
																																																					"data-framer-name": `Name of Category`,
																																																					fonts: [
																																																						`Inter`,
																																																					],
																																																					layoutDependency:
																																																						B,
																																																					layoutId: `WF7_HCriN`,
																																																					style: {
																																																						"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																																						"--framer-paragraph-spacing": `0px`,
																																																					},
																																																					text: n,
																																																					verticalAlignment: `top`,
																																																					withExternalLayout:
																																																						!0,
																																																				},
																																																			),
																																																	},
																																																),
																																														},
																																													),
																																											},
																																											e,
																																										)
																																									),
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
																							),
																					},
																				),
																		},
																		n,
																	)
																),
															),
														}),
												}),
											}),
										}),
									],
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-Qi1ie.framer-lwk1ry, .framer-Qi1ie .framer-lwk1ry { display: block; }`,
					`.framer-Qi1ie.framer-1mgwu4q { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 320px; }`,
					`.framer-Qi1ie .framer-1pwqkzy { flex: none; height: 130px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-Qi1ie .framer-1o2kr22 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
					`.framer-Qi1ie .framer-wjqx8e { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
					`.framer-Qi1ie .framer-1016scr { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 2px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-Qi1ie .framer-1e6uyff { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
					`.framer-Qi1ie .framer-zwjjy7 { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(50.00000000000002% - 100% / 2); width: 100%; z-index: 1; }`,
					`.framer-Qi1ie .framer-6fjuvo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 17px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 25px 20px 25px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-Qi1ie .framer-gmde6n { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-Qi1ie .framer-140ahbc { -webkit-user-select: none; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 1px 1px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; user-select: none; width: 100%; }`,
					`.framer-Qi1ie .framer-1ibws8z { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 10px 5px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-Qi1ie .framer-xpcnyv { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					`.framer-Qi1ie.framer-v-1mgwu4q.hover .framer-1e6uyff { z-index: 1; }`,
					`.framer-Qi1ie.framer-v-1mgwu4q.hover .framer-zwjjy7 { left: calc(50.00000000000002% - 1fr / 2); width: 1fr; }`,
					...Ye,
					...et,
				],
				`framer-Qi1ie`,
			)),
			(bu = yu),
			(yu.displayName = `Selected Works - Card`),
			(yu.defaultProps = { height: 210, width: 320 }),
			P(yu, {
				au1e3BDx1: {
					defaultValue: !0,
					title: `Top Spacer`,
					type: J.Boolean,
				},
				MvdtxEQLz: {
					dataIdentifier: `local-module:collection/tTTLfmF7I:default`,
					title: `Select Project`,
					type: J.CollectionReference,
				},
			}),
			de(
				yu,
				[
					{
						explicitInter: !0,
						fonts: [
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
								url: `../fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
								url: `../fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+1F00-1FFF`,
								url: `../fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0370-03FF`,
								url: `../fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
								url: `../fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
								url: `../fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
								url: `../fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
								weight: `400`,
							},
						],
					},
					...G(Xe),
					...G(tt),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function Su(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Cu,
	wu,
	Tu,
	Eu,
	Du,
	Ou,
	ku,
	Au,
	ju,
	Mu,
	Nu,
	Pu,
	Fu,
	Iu,
	Lu,
	Ru,
	zu,
	Bu,
	Vu,
	Hu,
	Uu,
	Wu = e(() => {
		(y(),
			q(),
			N(),
			l(),
			ft(),
			Pt(),
			wt(),
			Nt(),
			vt(),
			Bt(),
			xn(),
			Ws(),
			xu(),
			(Cu = B(Cn)),
			(wu = B(Us)),
			(Tu = B(bu)),
			(Eu = te(H)),
			(Du = [
				`camO0iR5M`,
				`Y3MInZ9G7`,
				`rWN7ullcS`,
				`CP8Wi04KU`,
				`Mw72qruSr`,
				`nWu67d1C9`,
				`VEvPF1ITZ`,
				`fokodO6Yd`,
				`klSVgkPCI`,
			]),
			(Ou = `framer-FvXt4`),
			(ku = {
				camO0iR5M: `framer-v-xemiho`,
				CP8Wi04KU: `framer-v-x2fshm`,
				fokodO6Yd: `framer-v-kny7dw`,
				klSVgkPCI: `framer-v-17mogja`,
				Mw72qruSr: `framer-v-1b8zifv`,
				nWu67d1C9: `framer-v-y4apig`,
				rWN7ullcS: `framer-v-1qiz2e2`,
				VEvPF1ITZ: `framer-v-1sp1m0h`,
				Y3MInZ9G7: `framer-v-1vf6u35`,
			}),
			(Au = {
				delay: 0,
				duration: 0.3,
				ease: [0.14, 0.41, 0.53, 0.89],
				type: `tween`,
			}),
			(ju = (e, t) => `translateY(-50%) ${t}`),
			(Mu = {
				opacity: 0,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0,
				x: 0,
				y: 50,
			}),
			(Nu = {
				delay: 0,
				duration: 0.6,
				ease: [0.44, 0, 0.26, 1.01],
				type: `tween`,
			}),
			(Pu = {
				delay: 0.4,
				duration: 0.6,
				ease: [0.44, 0, 0.26, 1.01],
				type: `tween`,
			}),
			(Fu = {
				delay: 0.2,
				duration: 0.6,
				ease: [0.44, 0, 0.26, 1.01],
				type: `tween`,
			}),
			(Iu = {
				delay: 0.6,
				duration: 0.6,
				ease: [0.44, 0, 0.26, 1.01],
				type: `tween`,
			}),
			(Lu = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(Ru = k.create(i)),
			(zu = {
				"Variant 1 - Desktop": `camO0iR5M`,
				"Variant 1 - Phone": `rWN7ullcS`,
				"Variant 1 - Tablet": `Y3MInZ9G7`,
				"Variant 2 - Desktop": `CP8Wi04KU`,
				"Variant 2 - Phone": `nWu67d1C9`,
				"Variant 2 - Tablet": `Mw72qruSr`,
				"Variant 3 - Desktop": `VEvPF1ITZ`,
				"Variant 4 - Desktop": `fokodO6Yd`,
				"Variant 4 - Tablet": `klSVgkPCI`,
			}),
			(Bu = ({
				amountOfWorks: e,
				description: t,
				headingOfSection: n,
				height: r,
				id: i,
				sectionNumber: a,
				showHeading: o,
				topSpacer: s,
				verticalLinkText: c,
				verticalLinkURL: l,
				width: u,
				...d
			}) => ({
				...d,
				ahFD0KbW0: s ?? d.ahFD0KbW0 ?? !0,
				AyMyvfqA5: e ?? d.AyMyvfqA5 ?? `12`,
				pZhrKeTu2: l ?? d.pZhrKeTu2,
				QujjwCxUD:
					t ??
					d.QujjwCxUD ??
					`Recent launches with real outcomes. Explore the brief, the system we built, and the impact — each case shows problem → approach → result.Every case lists scope, timeline, stack and KPI movement with before and after. `,
				QvSNHBP5X: o ?? d.QvSNHBP5X ?? !0,
				ugJ8Iq0fa: a ?? d.ugJ8Iq0fa ?? `[03]`,
				uqZ2XSbpC: n ?? d.uqZ2XSbpC ?? `Featured Works`,
				variant: zu[d.variant] ?? d.variant ?? `camO0iR5M`,
				VSaINvhjc: c ?? d.VSaINvhjc ?? `[VIEW ALL]`,
			})),
			(Vu = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Hu = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e(),
						c = X(),
						{
							style: l,
							className: u,
							layoutId: d,
							variant: f,
							uqZ2XSbpC: m,
							ugJ8Iq0fa: h,
							QujjwCxUD: g,
							VSaINvhjc: y,
							pZhrKeTu2: b,
							AyMyvfqA5: x,
							QvSNHBP5X: C,
							ahFD0KbW0: w,
							...T
						} = Bu(e),
						{
							baseVariant: E,
							classNames: D,
							clearLoadingGesture: O,
							gestureHandlers: A,
							gestureVariant: j,
							isLoading: N,
							setGestureState: P,
							setVariant: F,
							variants: I,
						} = W({
							cycleOrder: Du,
							defaultVariant: `camO0iR5M`,
							ref: r,
							variant: f,
							variantClassNames: ku,
						}),
						L = Vu(e, I),
						z = U(Ou, ht, Dt, zt, Mt, Ut, Ct),
						ee = (e) => (E === `fokodO6Yd` ? !0 : e),
						B = () =>
							![
								`CP8Wi04KU`,
								`Mw72qruSr`,
								`nWu67d1C9`,
								`VEvPF1ITZ`,
							].includes(E);
					return p(M, {
						id: d ?? a,
						children: p(Ru, {
							animate: I,
							initial: !1,
							children: p(Lu, {
								value: Au,
								children: p(k.section, {
									...T,
									...A,
									className: U(z, `framer-xemiho`, u, D),
									"data-framer-name": `Variant 1 - Desktop`,
									layoutDependency: L,
									layoutId: `camO0iR5M`,
									ref: r,
									style: { ...l },
									...Su(
										{
											CP8Wi04KU: {
												"data-framer-name": `Variant 2 - Desktop`,
											},
											fokodO6Yd: {
												"data-framer-name": `Variant 4 - Desktop`,
											},
											klSVgkPCI: {
												"data-framer-name": `Variant 4 - Tablet`,
											},
											Mw72qruSr: {
												"data-framer-name": `Variant 2 - Tablet`,
											},
											nWu67d1C9: {
												"data-framer-name": `Variant 2 - Phone`,
											},
											rWN7ullcS: {
												"data-framer-name": `Variant 1 - Phone`,
											},
											VEvPF1ITZ: {
												"data-framer-name": `Variant 3 - Desktop`,
											},
											Y3MInZ9G7: {
												"data-framer-name": `Variant 1 - Tablet`,
											},
										},
										E,
										j,
									),
									children: v(k.div, {
										className: `framer-6z6glm`,
										"data-framer-name": `Container`,
										layoutDependency: L,
										layoutId: `CuBvJLmkY`,
										children: [
											w &&
												p(k.div, {
													className: `framer-tiypy6`,
													"data-framer-name": `Spacer`,
													layoutDependency: L,
													layoutId: `ZVWrfVLvY`,
												}),
											ee(C) &&
												v(k.div, {
													className: `framer-fw9sbq`,
													"data-framer-name": `Heading`,
													layoutDependency: L,
													layoutId: `bc0hrIdyN`,
													children: [
														p(k.div, {
															className: `framer-8holjj`,
															"data-framer-name": `Number of Block`,
															layoutDependency: L,
															layoutId: `M34Rj6L7E`,
															children: p(R, {
																__fromCanvasComponent:
																	!0,
																children: p(i, {
																	children: p(
																		k.h6,
																		{
																			className: `framer-styles-preset-nkm6se`,
																			"data-styles-preset": `BaUGQBb6A`,
																			style: {
																				"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																			},
																			children: `[03]`,
																		},
																	),
																}),
																className: `framer-hxgzd6`,
																fonts: [
																	`Inter`,
																],
																layoutDependency:
																	L,
																layoutId: `yrnsA1QpK`,
																style: {
																	"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																	"--framer-paragraph-spacing": `0px`,
																},
																text: h,
																transformTemplate:
																	ju,
																verticalAlignment: `top`,
																withExternalLayout:
																	!0,
																...Su(
																	{
																		nWu67d1C9:
																			{
																				children:
																					p(
																						i,
																						{
																							children:
																								p(
																									k.h6,
																									{
																										className: `framer-styles-preset-f8hg8j`,
																										"data-styles-preset": `IGVKsj4vh`,
																										style: {
																											"--framer-text-alignment": `left`,
																											"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																										},
																										children: `[03]`,
																									},
																								),
																						},
																					),
																			},
																		rWN7ullcS:
																			{
																				children:
																					p(
																						i,
																						{
																							children:
																								p(
																									k.h6,
																									{
																										className: `framer-styles-preset-f8hg8j`,
																										"data-styles-preset": `IGVKsj4vh`,
																										style: {
																											"--framer-text-alignment": `left`,
																											"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																										},
																										children: `[03]`,
																									},
																								),
																						},
																					),
																			},
																	},
																	E,
																	j,
																),
															}),
														}),
														p(k.div, {
															className: `framer-1405tmt`,
															layoutDependency: L,
															layoutId: `ROiUlQ5vB`,
															children: p(R, {
																__fromCanvasComponent:
																	!0,
																children: p(i, {
																	children: p(
																		k.h6,
																		{
																			className: `framer-styles-preset-nkm6se`,
																			"data-styles-preset": `BaUGQBb6A`,
																			style: {
																				"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																			},
																			children: `Featured Works`,
																		},
																	),
																}),
																className: `framer-1dmjgr`,
																fonts: [
																	`Inter`,
																],
																layoutDependency:
																	L,
																layoutId: `XsCHlImB9`,
																style: {
																	"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																	"--framer-paragraph-spacing": `0px`,
																},
																text: m,
																verticalAlignment: `top`,
																withExternalLayout:
																	!0,
																...Su(
																	{
																		nWu67d1C9:
																			{
																				children:
																					p(
																						i,
																						{
																							children:
																								p(
																									k.h6,
																									{
																										className: `framer-styles-preset-f8hg8j`,
																										"data-styles-preset": `IGVKsj4vh`,
																										style: {
																											"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																										},
																										children: `Featured Works`,
																									},
																								),
																						},
																					),
																			},
																		rWN7ullcS:
																			{
																				children:
																					p(
																						i,
																						{
																							children:
																								p(
																									k.h6,
																									{
																										className: `framer-styles-preset-f8hg8j`,
																										"data-styles-preset": `IGVKsj4vh`,
																										style: {
																											"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																										},
																										children: `Featured Works`,
																									},
																								),
																						},
																					),
																			},
																	},
																	E,
																	j,
																),
															}),
														}),
														v(k.div, {
															className: `framer-hybll`,
															"data-framer-name": `Count Works`,
															layoutDependency: L,
															layoutId: `H97U2Jw3f`,
															children: [
																p(R, {
																	__fromCanvasComponent:
																		!0,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h1,
																					{
																						className: `framer-styles-preset-4xb9o`,
																						"data-styles-preset": `eUQb69Kqx`,
																						style: {
																							"--framer-text-alignment": `right`,
																							"--framer-text-color": `var(--extracted-gdpscs, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `12`,
																					},
																				),
																		},
																	),
																	className: `framer-70ffel`,
																	"data-framer-name": `12`,
																	fonts: [
																		`Inter`,
																	],
																	layoutDependency:
																		L,
																	layoutId: `t9V3SOYcn`,
																	style: {
																		"--extracted-gdpscs": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																		"--framer-paragraph-spacing": `0px`,
																	},
																	text: x,
																	variants: {
																		klSVgkPCI:
																			{
																				"--extracted-1of0zx5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			},
																		nWu67d1C9:
																			{
																				"--extracted-a0htzi": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			},
																		rWN7ullcS:
																			{
																				"--extracted-a0htzi": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			},
																		Y3MInZ9G7:
																			{
																				"--extracted-1of0zx5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			},
																	},
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																	...Su(
																		{
																			klSVgkPCI:
																				{
																					children:
																						p(
																							i,
																							{
																								children:
																									p(
																										k.h2,
																										{
																											className: `framer-styles-preset-g6dfhq`,
																											"data-styles-preset": `MgmvEPIz7`,
																											style: {
																												"--framer-text-alignment": `right`,
																												"--framer-text-color": `var(--extracted-1of0zx5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																											},
																											children: `12`,
																										},
																									),
																							},
																						),
																				},
																			nWu67d1C9:
																				{
																					children:
																						p(
																							i,
																							{
																								children:
																									p(
																										k.h3,
																										{
																											className: `framer-styles-preset-1yuak3c`,
																											"data-styles-preset": `zczqo4Z8y`,
																											style: {
																												"--framer-text-alignment": `right`,
																												"--framer-text-color": `var(--extracted-a0htzi, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																											},
																											children: `12`,
																										},
																									),
																							},
																						),
																				},
																			rWN7ullcS:
																				{
																					children:
																						p(
																							i,
																							{
																								children:
																									p(
																										k.h3,
																										{
																											className: `framer-styles-preset-1yuak3c`,
																											"data-styles-preset": `zczqo4Z8y`,
																											style: {
																												"--framer-text-alignment": `right`,
																												"--framer-text-color": `var(--extracted-a0htzi, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																											},
																											children: `12`,
																										},
																									),
																							},
																						),
																				},
																			Y3MInZ9G7:
																				{
																					children:
																						p(
																							i,
																							{
																								children:
																									p(
																										k.h2,
																										{
																											className: `framer-styles-preset-g6dfhq`,
																											"data-styles-preset": `MgmvEPIz7`,
																											style: {
																												"--framer-text-alignment": `right`,
																												"--framer-text-color": `var(--extracted-1of0zx5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																											},
																											children: `12`,
																										},
																									),
																							},
																						),
																				},
																		},
																		E,
																		j,
																	),
																}),
																p(Z, {
																	height: 48,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			1376) -
																			0 -
																			1221) /
																			2 +
																			0 +
																			0) +
																		0 +
																		0 +
																		14 +
																		0 -
																		-2.047,
																	...Su(
																		{
																			CP8Wi04KU:
																				{
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							768) /
																							2 +
																							0 +
																							0) +
																						0 +
																						0 +
																						14 +
																						0 -
																						-1.9415,
																				},
																			fokodO6Yd:
																				{
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							1169) /
																							2 +
																							0 +
																							0) +
																						0 +
																						0 +
																						14 +
																						0 -
																						0.0585,
																				},
																			klSVgkPCI:
																				{
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							1198) /
																							2 +
																							0 +
																							0) +
																						0 +
																						0 +
																						14 +
																						28.9415,
																				},
																			Mw72qruSr:
																				{
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						0 +
																						0 +
																						0 +
																						14 +
																						0 -
																						-1.9415,
																				},
																			nWu67d1C9:
																				{
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							1081) /
																							2 +
																							0 +
																							0) +
																						0 +
																						0 +
																						0 +
																						0 +
																						40.9415,
																				},
																			rWN7ullcS:
																				{
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							1907) /
																							2 +
																							0 +
																							0) +
																						0 +
																						0 +
																						0 +
																						0 +
																						43.9415,
																				},
																			VEvPF1ITZ:
																				{
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							1238) /
																							2 +
																							0 +
																							0) +
																						0 +
																						0 +
																						14 +
																						0 -
																						-6.9415,
																				},
																			Y3MInZ9G7:
																				{
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							2826.5) -
																							0 -
																							1198) /
																							2 +
																							0 +
																							0) +
																						0 +
																						0 +
																						14 +
																						28.9415,
																				},
																		},
																		E,
																		j,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-m0bl2u-container`,
																			layoutDependency:
																				L,
																			layoutId: `WAS1IfAEY-container`,
																			nodeId: `WAS1IfAEY`,
																			rendersWithMotion:
																				!0,
																			scopeId: `qgkFtzQK7`,
																			style: {
																				rotate: -90,
																			},
																			children:
																				p(
																					Cn,
																					{
																						a10ufliJT:
																							y,
																						FnHJ3auI6:
																							b,
																						GvlBMQefU:
																							!1,
																						height: `100%`,
																						id: `WAS1IfAEY`,
																						Kq_CijUyE: `15px 50px 15px 50px`,
																						layoutId: `WAS1IfAEY`,
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
															],
														}),
													],
												}),
											v(k.div, {
												className: `framer-1nmehoo`,
												"data-framer-name": `Content`,
												layoutDependency: L,
												layoutId: `p5NSYq4O2`,
												children: [
													B() &&
														v(k.div, {
															className: `framer-fwcio`,
															"data-framer-name": `Text and Metrics`,
															layoutDependency: L,
															layoutId: `wB67Tma9J`,
															children: [
																p(R, {
																	__fromCanvasComponent:
																		!0,
																	children: v(
																		i,
																		{
																			children:
																				[
																					p(
																						k.p,
																						{
																							className: `framer-styles-preset-11kcybb`,
																							"data-styles-preset": `pPuowuywh`,
																							style: {
																								"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																							},
																							children: `Recent launches with real outcomes. Explore the brief, the system we built, and the impact — each case shows problem → approach → result.`,
																						},
																					),
																					p(
																						k.p,
																						{
																							className: `framer-styles-preset-11kcybb`,
																							"data-styles-preset": `pPuowuywh`,
																							style: {
																								"--framer-text-color": `var(--extracted-2gxw0f, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																							},
																							children: `Every case lists scope, timeline, stack and KPI movement with before and after. `,
																						},
																					),
																				],
																		},
																	),
																	className: `framer-1rk3n29`,
																	"data-framer-name": `Recent launches with real outcomes. Explore the brief, the system we built, and the impact — each case shows problem → approach → result. Every case lists scope, timeline, stack and KPI movement with before and after.`,
																	fonts: [
																		`Inter`,
																	],
																	layoutDependency:
																		L,
																	layoutId: `vX_Leaqsh`,
																	style: {
																		"--extracted-2gxw0f": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																		"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																		"--framer-paragraph-spacing": `0px`,
																	},
																	text: g,
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																}),
																p(k.div, {
																	className: `framer-111wmmy`,
																	"data-framer-name": `Spacer`,
																	layoutDependency:
																		L,
																	layoutId: `P6vBJvc8m`,
																}),
																v(k.div, {
																	className: `framer-ykzhgf`,
																	"data-framer-name": `Metrics`,
																	layoutDependency:
																		L,
																	layoutId: `z2yrGiuad`,
																	children: [
																		p(Z, {
																			height: 186,
																			width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) - 50px)`,
																			y:
																				(c?.y ||
																					0) +
																				0 +
																				(((c?.height ||
																					1376) -
																					0 -
																					1221) /
																					2 +
																					0 +
																					0) +
																				0 +
																				0 +
																				90 +
																				0 +
																				0 +
																				235 +
																				0 +
																				0,
																			...Su(
																				{
																					fokodO6Yd:
																						{
																							width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 90px) / 3, 1px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									200) -
																									0 -
																									1169) /
																									2 +
																									0 +
																									0) +
																								0 +
																								28 +
																								90 +
																								0 +
																								0 +
																								165 +
																								0,
																						},
																					klSVgkPCI:
																						{
																							width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) - 30px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									200) -
																									0 -
																									1198) /
																									2 +
																									0 +
																									0) +
																								0 +
																								0 +
																								120 +
																								0 +
																								0 +
																								185 +
																								0 +
																								0,
																						},
																					rWN7ullcS:
																						{
																							width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									200) -
																									0 -
																									1907) /
																									2 +
																									0 +
																									0) +
																								0 +
																								0 +
																								30 +
																								935 +
																								0 +
																								165 +
																								0 +
																								0,
																						},
																					Y3MInZ9G7:
																						{
																							width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) - 20px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									2826.5) -
																									0 -
																									1198) /
																									2 +
																									0 +
																									0) +
																								0 +
																								0 +
																								120 +
																								0 +
																								0 +
																								185 +
																								0 +
																								0,
																						},
																				},
																				E,
																				j,
																			),
																			children:
																				p(
																					H,
																					{
																						className: `framer-1s7kvfo-container`,
																						layoutDependency:
																							L,
																						layoutId: `kaYwfJkV7-container`,
																						nodeId: `kaYwfJkV7`,
																						rendersWithMotion:
																							!0,
																						scopeId: `qgkFtzQK7`,
																						children:
																							p(
																								Us,
																								{
																									height: `100%`,
																									id: `kaYwfJkV7`,
																									layoutId: `kaYwfJkV7`,
																									mFSRU4L0r: `Uplift after redesign and new funnel (90 days).`,
																									oOZL4Z7MG: `Conversion`,
																									RCWRhrHe8: `+34%`,
																									style: {
																										width: `100%`,
																									},
																									variant: `EZxrKSuSz`,
																									width: `100%`,
																									...Su(
																										{
																											fokodO6Yd:
																												{
																													variant: `aCmhujSns`,
																												},
																											klSVgkPCI:
																												{
																													variant: `aCmhujSns`,
																												},
																											rWN7ullcS:
																												{
																													variant: `aCmhujSns`,
																												},
																											Y3MInZ9G7:
																												{
																													variant: `Je4Dkk4Gd`,
																												},
																										},
																										E,
																										j,
																									),
																								},
																							),
																					},
																				),
																		}),
																		p(Z, {
																			height: 186,
																			width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) - 50px)`,
																			y:
																				(c?.y ||
																					0) +
																				0 +
																				(((c?.height ||
																					1376) -
																					0 -
																					1221) /
																					2 +
																					0 +
																					0) +
																				0 +
																				0 +
																				90 +
																				0 +
																				0 +
																				235 +
																				0 +
																				251,
																			...Su(
																				{
																					fokodO6Yd:
																						{
																							width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 90px) / 3, 1px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									200) -
																									0 -
																									1169) /
																									2 +
																									0 +
																									0) +
																								0 +
																								28 +
																								90 +
																								0 +
																								0 +
																								165 +
																								0,
																						},
																					klSVgkPCI:
																						{
																							width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) - 30px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									200) -
																									0 -
																									1198) /
																									2 +
																									0 +
																									0) +
																								0 +
																								0 +
																								120 +
																								0 +
																								0 +
																								185 +
																								0 +
																								226,
																						},
																					rWN7ullcS:
																						{
																							width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									200) -
																									0 -
																									1907) /
																									2 +
																									0 +
																									0) +
																								0 +
																								0 +
																								30 +
																								935 +
																								0 +
																								165 +
																								0 +
																								216,
																						},
																					Y3MInZ9G7:
																						{
																							width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) - 20px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									2826.5) -
																									0 -
																									1198) /
																									2 +
																									0 +
																									0) +
																								0 +
																								0 +
																								120 +
																								0 +
																								0 +
																								185 +
																								0 +
																								226,
																						},
																				},
																				E,
																				j,
																			),
																			children:
																				p(
																					H,
																					{
																						className: `framer-1rq51fj-container`,
																						layoutDependency:
																							L,
																						layoutId: `IA_A7ti1_-container`,
																						nodeId: `IA_A7ti1_`,
																						rendersWithMotion:
																							!0,
																						scopeId: `qgkFtzQK7`,
																						children:
																							p(
																								Us,
																								{
																									height: `100%`,
																									id: `IA_A7ti1_`,
																									layoutId: `IA_A7ti1_`,
																									mFSRU4L0r: `Increase in registrations from organic/paid.`,
																									oOZL4Z7MG: `Sign-Ups`,
																									RCWRhrHe8: `+41%`,
																									style: {
																										width: `100%`,
																									},
																									variant: `EZxrKSuSz`,
																									width: `100%`,
																									...Su(
																										{
																											fokodO6Yd:
																												{
																													variant: `aCmhujSns`,
																												},
																											klSVgkPCI:
																												{
																													variant: `aCmhujSns`,
																												},
																											rWN7ullcS:
																												{
																													variant: `aCmhujSns`,
																												},
																											Y3MInZ9G7:
																												{
																													variant: `Je4Dkk4Gd`,
																												},
																										},
																										E,
																										j,
																									),
																								},
																							),
																					},
																				),
																		}),
																		p(Z, {
																			height: 186,
																			width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) - 50px)`,
																			y:
																				(c?.y ||
																					0) +
																				0 +
																				(((c?.height ||
																					1376) -
																					0 -
																					1221) /
																					2 +
																					0 +
																					0) +
																				0 +
																				0 +
																				90 +
																				0 +
																				0 +
																				235 +
																				0 +
																				502,
																			...Su(
																				{
																					fokodO6Yd:
																						{
																							width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 90px) / 3, 1px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									200) -
																									0 -
																									1169) /
																									2 +
																									0 +
																									0) +
																								0 +
																								28 +
																								90 +
																								0 +
																								0 +
																								165 +
																								0,
																						},
																					klSVgkPCI:
																						{
																							width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) - 30px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									200) -
																									0 -
																									1198) /
																									2 +
																									0 +
																									0) +
																								0 +
																								0 +
																								120 +
																								0 +
																								0 +
																								185 +
																								0 +
																								452,
																						},
																					rWN7ullcS:
																						{
																							width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									200) -
																									0 -
																									1907) /
																									2 +
																									0 +
																									0) +
																								0 +
																								0 +
																								30 +
																								935 +
																								0 +
																								165 +
																								0 +
																								432,
																						},
																					Y3MInZ9G7:
																						{
																							width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) - 20px)`,
																							y:
																								(c?.y ||
																									0) +
																								0 +
																								(((c?.height ||
																									2826.5) -
																									0 -
																									1198) /
																									2 +
																									0 +
																									0) +
																								0 +
																								0 +
																								120 +
																								0 +
																								0 +
																								185 +
																								0 +
																								452,
																						},
																				},
																				E,
																				j,
																			),
																			children:
																				p(
																					H,
																					{
																						className: `framer-1pllb93-container`,
																						layoutDependency:
																							L,
																						layoutId: `FDpbQg_OH-container`,
																						nodeId: `FDpbQg_OH`,
																						rendersWithMotion:
																							!0,
																						scopeId: `qgkFtzQK7`,
																						children:
																							p(
																								Us,
																								{
																									height: `100%`,
																									id: `FDpbQg_OH`,
																									layoutId: `FDpbQg_OH`,
																									mFSRU4L0r: `Return on ad spend for campaign N.`,
																									oOZL4Z7MG: `ROAS`,
																									RCWRhrHe8: `3.8×`,
																									style: {
																										width: `100%`,
																									},
																									variant: `EZxrKSuSz`,
																									width: `100%`,
																									...Su(
																										{
																											fokodO6Yd:
																												{
																													variant: `aCmhujSns`,
																												},
																											klSVgkPCI:
																												{
																													variant: `aCmhujSns`,
																												},
																											rWN7ullcS:
																												{
																													variant: `aCmhujSns`,
																												},
																											Y3MInZ9G7:
																												{
																													variant: `Je4Dkk4Gd`,
																												},
																										},
																										E,
																										j,
																									),
																								},
																							),
																					},
																				),
																		}),
																	],
																}),
															],
														}),
													v(k.div, {
														className: `framer-1ghvwtn`,
														layoutDependency: L,
														layoutId: `yUA5VGlRI`,
														children: [
															v(k.div, {
																className: `framer-1r7styf`,
																layoutDependency:
																	L,
																layoutId: `hyCdYj9E5`,
																children: [
																	p(Z, {
																		height: 210,
																		width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 2 - 80px) / 2, 1px)`,
																		y:
																			(c?.y ||
																				0) +
																			0 +
																			(((c?.height ||
																				1376) -
																				0 -
																				1221) /
																				2 +
																				0 +
																				0) +
																			0 +
																			0 +
																			90 +
																			0 +
																			0 +
																			0 +
																			0,
																		...Su(
																			{
																				CP8Wi04KU:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 60px) / 2, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								768) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							90 +
																							0 +
																							0 +
																							0 +
																							0,
																					},
																				fokodO6Yd:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 80px) / 1.5, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1169) /
																								2 +
																								0 +
																								0) +
																							0 +
																							28 +
																							90 +
																							351 +
																							60 +
																							0 +
																							0,
																					},
																				klSVgkPCI:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) * 2 + 20px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1198) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							120 +
																							0 +
																							0 +
																							0 +
																							0 +
																							0,
																					},
																				Mw72qruSr:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 10px) / 2, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							0 +
																							0 +
																							0 +
																							90 +
																							0 +
																							0 +
																							0 +
																							0,
																					},
																				nWu67d1C9:
																					{
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1081) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							40 +
																							0 +
																							0 +
																							0 +
																							0 +
																							0,
																					},
																				rWN7ullcS:
																					{
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1907) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							30 +
																							0 +
																							0 +
																							0 +
																							0 +
																							0,
																					},
																				VEvPF1ITZ:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 + 40px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1238) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							30 +
																							0 +
																							0 +
																							0 +
																							0 +
																							0,
																					},
																				Y3MInZ9G7:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) * 2 + 20px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								2826.5) -
																								0 -
																								1198) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							120 +
																							0 +
																							0 +
																							0 +
																							0 +
																							0,
																					},
																			},
																			E,
																			j,
																		),
																		children:
																			p(
																				Eu,
																				{
																					__framer__animate:
																						{
																							transition:
																								Nu,
																						},
																					__framer__animateOnce:
																						!0,
																					__framer__enter:
																						Mu,
																					__framer__styleAppearEffectEnabled:
																						!0,
																					__framer__threshold: 0,
																					__perspectiveFX:
																						!1,
																					__smartComponentFX:
																						!0,
																					__targetOpacity: 1,
																					className: `framer-n9sist-container`,
																					layoutDependency:
																						L,
																					layoutId: `NDkqmTghK-container`,
																					nodeId: `NDkqmTghK`,
																					rendersWithMotion:
																						!0,
																					scopeId: `qgkFtzQK7`,
																					children:
																						p(
																							bu,
																							{
																								au1e3BDx1:
																									!1,
																								height: `100%`,
																								id: `NDkqmTghK`,
																								layoutId: `NDkqmTghK`,
																								MvdtxEQLz: `TIdyfCoAn`,
																								style: {
																									width: `100%`,
																								},
																								width: `100%`,
																								...Su(
																									{
																										VEvPF1ITZ:
																											{
																												au1e3BDx1:
																													!0,
																											},
																									},
																									E,
																									j,
																								),
																							},
																						),
																				},
																			),
																	}),
																	p(Z, {
																		height: 210,
																		width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 2 - 80px) / 2, 1px)`,
																		y:
																			(c?.y ||
																				0) +
																			0 +
																			(((c?.height ||
																				1376) -
																				0 -
																				1221) /
																				2 +
																				0 +
																				0) +
																			0 +
																			0 +
																			90 +
																			0 +
																			0 +
																			0 +
																			260,
																		...Su(
																			{
																				CP8Wi04KU:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 60px) / 2, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								768) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							90 +
																							0 +
																							0 +
																							0 +
																							260,
																					},
																				fokodO6Yd:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 80px) / 1.5, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1169) /
																								2 +
																								0 +
																								0) +
																							0 +
																							28 +
																							90 +
																							351 +
																							60 +
																							0 +
																							250,
																					},
																				klSVgkPCI:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) * 2 + 20px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1198) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							120 +
																							0 +
																							0 +
																							0 +
																							0 +
																							240,
																					},
																				Mw72qruSr:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 10px) / 2, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							0 +
																							0 +
																							0 +
																							90 +
																							0 +
																							0 +
																							0 +
																							260,
																					},
																				nWu67d1C9:
																					{
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1081) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							40 +
																							0 +
																							0 +
																							0 +
																							0 +
																							225,
																					},
																				rWN7ullcS:
																					{
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1907) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							30 +
																							0 +
																							0 +
																							0 +
																							0 +
																							225,
																					},
																				VEvPF1ITZ:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 + 40px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1238) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							30 +
																							0 +
																							0 +
																							0 +
																							0 +
																							250,
																					},
																				Y3MInZ9G7:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) * 2 + 20px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								2826.5) -
																								0 -
																								1198) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							120 +
																							0 +
																							0 +
																							0 +
																							0 +
																							240,
																					},
																			},
																			E,
																			j,
																		),
																		children:
																			p(
																				Eu,
																				{
																					__framer__animate:
																						{
																							transition:
																								Pu,
																						},
																					__framer__animateOnce:
																						!0,
																					__framer__enter:
																						Mu,
																					__framer__styleAppearEffectEnabled:
																						!0,
																					__framer__threshold: 0,
																					__perspectiveFX:
																						!1,
																					__smartComponentFX:
																						!0,
																					__targetOpacity: 1,
																					className: `framer-1d6cpq6-container`,
																					layoutDependency:
																						L,
																					layoutId: `fGCtXeiCy-container`,
																					nodeId: `fGCtXeiCy`,
																					rendersWithMotion:
																						!0,
																					scopeId: `qgkFtzQK7`,
																					children:
																						p(
																							bu,
																							{
																								au1e3BDx1:
																									!1,
																								height: `100%`,
																								id: `fGCtXeiCy`,
																								layoutId: `fGCtXeiCy`,
																								MvdtxEQLz: `x21SPdMQp`,
																								style: {
																									width: `100%`,
																								},
																								width: `100%`,
																							},
																						),
																				},
																			),
																	}),
																],
															}),
															v(k.div, {
																className: `framer-uxlnr1`,
																layoutDependency:
																	L,
																layoutId: `QDUz0oy4z`,
																children: [
																	p(Z, {
																		height: 210,
																		width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 2 - 80px) / 2, 1px)`,
																		y:
																			(c?.y ||
																				0) +
																			0 +
																			(((c?.height ||
																				1376) -
																				0 -
																				1221) /
																				2 +
																				0 +
																				0) +
																			0 +
																			0 +
																			90 +
																			0 +
																			0 +
																			0 +
																			0,
																		...Su(
																			{
																				CP8Wi04KU:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 60px) / 2, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								768) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							90 +
																							0 +
																							0 +
																							0 +
																							0,
																					},
																				fokodO6Yd:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 80px) / 3, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1169) /
																								2 +
																								0 +
																								0) +
																							0 +
																							28 +
																							90 +
																							351 +
																							60 +
																							0 +
																							0,
																					},
																				klSVgkPCI:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) * 2 + 20px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1198) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							120 +
																							0 +
																							0 +
																							480 +
																							0 +
																							0,
																					},
																				Mw72qruSr:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 10px) / 2, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							0 +
																							0 +
																							0 +
																							90 +
																							0 +
																							0 +
																							0 +
																							0,
																					},
																				nWu67d1C9:
																					{
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1081) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							40 +
																							0 +
																							0 +
																							450 +
																							0 +
																							0,
																					},
																				rWN7ullcS:
																					{
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1907) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							30 +
																							0 +
																							0 +
																							450 +
																							0 +
																							0,
																					},
																				VEvPF1ITZ:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 + 40px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1238) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							30 +
																							0 +
																							0 +
																							520 +
																							0 +
																							0,
																					},
																				Y3MInZ9G7:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) * 2 + 20px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								2826.5) -
																								0 -
																								1198) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							120 +
																							0 +
																							0 +
																							480 +
																							0 +
																							0,
																					},
																			},
																			E,
																			j,
																		),
																		children:
																			p(
																				Eu,
																				{
																					__framer__animate:
																						{
																							transition:
																								Fu,
																						},
																					__framer__animateOnce:
																						!0,
																					__framer__enter:
																						Mu,
																					__framer__styleAppearEffectEnabled:
																						!0,
																					__framer__threshold: 0,
																					__perspectiveFX:
																						!1,
																					__smartComponentFX:
																						!0,
																					__targetOpacity: 1,
																					className: `framer-a9ybmv-container`,
																					layoutDependency:
																						L,
																					layoutId: `H_MDEfKwp-container`,
																					nodeId: `H_MDEfKwp`,
																					rendersWithMotion:
																						!0,
																					scopeId: `qgkFtzQK7`,
																					children:
																						p(
																							bu,
																							{
																								au1e3BDx1:
																									!0,
																								height: `100%`,
																								id: `H_MDEfKwp`,
																								layoutId: `H_MDEfKwp`,
																								MvdtxEQLz: `Gk1RQ34zm`,
																								style: {
																									width: `100%`,
																								},
																								width: `100%`,
																								...Su(
																									{
																										fokodO6Yd:
																											{
																												au1e3BDx1:
																													!1,
																											},
																										klSVgkPCI:
																											{
																												au1e3BDx1:
																													!1,
																											},
																										nWu67d1C9:
																											{
																												au1e3BDx1:
																													!1,
																											},
																										rWN7ullcS:
																											{
																												au1e3BDx1:
																													!1,
																											},
																										VEvPF1ITZ:
																											{
																												au1e3BDx1:
																													!1,
																											},
																										Y3MInZ9G7:
																											{
																												au1e3BDx1:
																													!1,
																											},
																									},
																									E,
																									j,
																								),
																							},
																						),
																				},
																			),
																	}),
																	p(Z, {
																		height: 210,
																		width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 2 - 80px) / 2, 1px)`,
																		y:
																			(c?.y ||
																				0) +
																			0 +
																			(((c?.height ||
																				1376) -
																				0 -
																				1221) /
																				2 +
																				0 +
																				0) +
																			0 +
																			0 +
																			90 +
																			0 +
																			0 +
																			0 +
																			260,
																		...Su(
																			{
																				CP8Wi04KU:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 60px) / 2, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								768) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							90 +
																							0 +
																							0 +
																							0 +
																							260,
																					},
																				fokodO6Yd:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 80px) / 3, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1169) /
																								2 +
																								0 +
																								0) +
																							0 +
																							28 +
																							90 +
																							351 +
																							60 +
																							0 +
																							250,
																					},
																				klSVgkPCI:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) * 2 + 20px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1198) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							120 +
																							0 +
																							0 +
																							480 +
																							0 +
																							240,
																					},
																				Mw72qruSr:
																					{
																						width: `max((max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 - 10px) / 2, 1px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							0 +
																							0 +
																							0 +
																							90 +
																							0 +
																							0 +
																							0 +
																							260,
																					},
																				nWu67d1C9:
																					{
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1081) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							40 +
																							0 +
																							0 +
																							450 +
																							0 +
																							225,
																					},
																				rWN7ullcS:
																					{
																						width: `max(min(${c?.width || `100vw`}, 1600px) - 50px, 50px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1907) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							30 +
																							0 +
																							0 +
																							450 +
																							0 +
																							225,
																					},
																				VEvPF1ITZ:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 120px) / 3, 50px) * 3 + 40px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								200) -
																								0 -
																								1238) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							30 +
																							0 +
																							0 +
																							520 +
																							0 +
																							270,
																					},
																				Y3MInZ9G7:
																					{
																						width: `calc(max((min(${c?.width || `100vw`}, 1600px) - 100px) / 3, 50px) * 2 + 20px)`,
																						y:
																							(c?.y ||
																								0) +
																							0 +
																							(((c?.height ||
																								2826.5) -
																								0 -
																								1198) /
																								2 +
																								0 +
																								0) +
																							0 +
																							0 +
																							120 +
																							0 +
																							0 +
																							480 +
																							0 +
																							240,
																					},
																			},
																			E,
																			j,
																		),
																		children:
																			p(
																				Eu,
																				{
																					__framer__animate:
																						{
																							transition:
																								Iu,
																						},
																					__framer__animateOnce:
																						!0,
																					__framer__enter:
																						Mu,
																					__framer__styleAppearEffectEnabled:
																						!0,
																					__framer__threshold: 0,
																					__perspectiveFX:
																						!1,
																					__smartComponentFX:
																						!0,
																					__targetOpacity: 1,
																					className: `framer-1w5x4ws-container`,
																					layoutDependency:
																						L,
																					layoutId: `pRQySiXUO-container`,
																					nodeId: `pRQySiXUO`,
																					rendersWithMotion:
																						!0,
																					scopeId: `qgkFtzQK7`,
																					children:
																						p(
																							bu,
																							{
																								au1e3BDx1:
																									!1,
																								height: `100%`,
																								id: `pRQySiXUO`,
																								layoutId: `pRQySiXUO`,
																								MvdtxEQLz: `GwbipauMe`,
																								style: {
																									width: `100%`,
																								},
																								width: `100%`,
																							},
																						),
																				},
																			),
																	}),
																],
															}),
														],
													}),
												],
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
					`.framer-FvXt4.framer-ay3qlg, .framer-FvXt4 .framer-ay3qlg { display: block; }`,
					`.framer-FvXt4.framer-xemiho { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
					`.framer-FvXt4 .framer-6z6glm { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: visible; padding: 0px 40px 90px 40px; position: relative; width: 100%; }`,
					`.framer-FvXt4 .framer-tiypy6, .framer-FvXt4 .framer-111wmmy { flex: none; height: 90px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-FvXt4 .framer-fw9sbq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-FvXt4 .framer-8holjj { flex: 1 0 0px; height: 28px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 1px; }`,
					`.framer-FvXt4 .framer-hxgzd6 { flex: none; height: auto; left: -6px; position: absolute; top: 50%; white-space: pre; width: auto; }`,
					`.framer-FvXt4 .framer-1405tmt { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 28px; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
					`.framer-FvXt4 .framer-1dmjgr { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
					`.framer-FvXt4 .framer-hybll { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-end; min-height: 28px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
					`.framer-FvXt4 .framer-70ffel { flex: none; height: auto; position: absolute; right: -1px; top: 130px; white-space: pre; width: auto; z-index: 1; }`,
					`.framer-FvXt4 .framer-m0bl2u-container { bottom: -50px; flex: none; height: 48px; position: absolute; right: -51px; width: auto; z-index: 1; }`,
					`.framer-FvXt4 .framer-1nmehoo { display: grid; flex: none; gap: 0px 20px; grid-auto-rows: min-content; grid-template-columns: repeat(3, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 90px 0px 0px 0px; position: relative; width: 100%; }`,
					`.framer-FvXt4 .framer-fwcio { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px 50px 0px 0px; position: sticky; top: 120px; width: 100%; z-index: 1; }`,
					`.framer-FvXt4 .framer-1rk3n29 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-FvXt4 .framer-ykzhgf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 65px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-FvXt4 .framer-1s7kvfo-container, .framer-FvXt4 .framer-1rq51fj-container, .framer-FvXt4 .framer-1pllb93-container, .framer-FvXt4 .framer-n9sist-container, .framer-FvXt4 .framer-1d6cpq6-container, .framer-FvXt4 .framer-a9ybmv-container, .framer-FvXt4 .framer-1w5x4ws-container { flex: none; height: auto; position: relative; width: 100%; }`,
					`.framer-FvXt4 .framer-1ghvwtn { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 100px; grid-column: span 2; height: min-content; justify-content: flex-start; justify-self: start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-FvXt4 .framer-1r7styf, .framer-FvXt4 .framer-uxlnr1 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 50px 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
					`.framer-FvXt4.framer-v-1vf6u35.framer-xemiho, .framer-FvXt4.framer-v-17mogja.framer-xemiho { width: 810px; }`,
					`.framer-FvXt4.framer-v-1vf6u35 .framer-6z6glm, .framer-FvXt4.framer-v-17mogja .framer-6z6glm { padding: 0px 30px 60px 30px; }`,
					`.framer-FvXt4.framer-v-1vf6u35 .framer-tiypy6, .framer-FvXt4.framer-v-1b8zifv .framer-tiypy6, .framer-FvXt4.framer-v-17mogja .framer-tiypy6 { height: 60px; }`,
					`.framer-FvXt4.framer-v-1vf6u35 .framer-70ffel, .framer-FvXt4.framer-v-17mogja .framer-70ffel { right: 45px; top: -12px; }`,
					`.framer-FvXt4.framer-v-1vf6u35 .framer-m0bl2u-container { bottom: unset; right: -51px; top: 29px; }`,
					`.framer-FvXt4.framer-v-1vf6u35 .framer-1nmehoo, .framer-FvXt4.framer-v-17mogja .framer-1nmehoo { padding: 120px 0px 0px 0px; }`,
					`.framer-FvXt4.framer-v-1vf6u35 .framer-fwcio { order: 0; padding: 0px 20px 0px 0px; top: 100px; }`,
					`.framer-FvXt4.framer-v-1vf6u35 .framer-111wmmy, .framer-FvXt4.framer-v-17mogja .framer-111wmmy { height: 40px; }`,
					`.framer-FvXt4.framer-v-1vf6u35 .framer-ykzhgf, .framer-FvXt4.framer-v-17mogja .framer-ykzhgf { gap: 40px; }`,
					`.framer-FvXt4.framer-v-1vf6u35 .framer-1ghvwtn { flex-direction: column; gap: 30px; order: 1; }`,
					`.framer-FvXt4.framer-v-1vf6u35 .framer-1r7styf, .framer-FvXt4.framer-v-1vf6u35 .framer-uxlnr1, .framer-FvXt4.framer-v-17mogja .framer-1r7styf, .framer-FvXt4.framer-v-17mogja .framer-uxlnr1 { flex: none; gap: 30px 10px; width: 100%; }`,
					`.framer-FvXt4.framer-v-1qiz2e2.framer-xemiho, .framer-FvXt4.framer-v-y4apig.framer-xemiho { width: 390px; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-6z6glm, .framer-FvXt4.framer-v-y4apig .framer-6z6glm { padding: 0px 25px 40px 25px; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-tiypy6, .framer-FvXt4.framer-v-1qiz2e2 .framer-111wmmy, .framer-FvXt4.framer-v-y4apig .framer-tiypy6, .framer-FvXt4.framer-v-kny7dw .framer-111wmmy { height: 20px; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-fw9sbq { flex-direction: column; gap: 71px; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-8holjj { flex: none; left: 2px; order: 1; position: absolute; top: 18px; width: 340px; z-index: 1; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-1405tmt, .framer-FvXt4.framer-v-y4apig .framer-1405tmt { flex: none; order: 2; width: 100%; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-1dmjgr, .framer-FvXt4.framer-v-y4apig .framer-1dmjgr { flex: none; white-space: pre; width: auto; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-hybll, .framer-FvXt4.framer-v-y4apig .framer-hybll { flex: none; order: 0; width: 100%; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-70ffel { right: 28px; top: 69px; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-m0bl2u-container { bottom: unset; right: -48px; top: 44px; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-1nmehoo { gap: 50px 20px; grid-template-columns: repeat(1, minmax(50px, 1fr)); padding: 30px 0px 0px 0px; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-fwcio { order: 1; padding: 0px; position: relative; top: unset; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-ykzhgf { gap: 30px; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-1ghvwtn, .framer-FvXt4.framer-v-y4apig .framer-1ghvwtn { flex-direction: column; gap: 15px; grid-column: span 1; order: 0; }`,
					`.framer-FvXt4.framer-v-1qiz2e2 .framer-1r7styf, .framer-FvXt4.framer-v-1qiz2e2 .framer-uxlnr1, .framer-FvXt4.framer-v-y4apig .framer-1r7styf, .framer-FvXt4.framer-v-y4apig .framer-uxlnr1 { flex: none; gap: 15px 10px; width: 100%; }`,
					`.framer-FvXt4.framer-v-x2fshm .framer-8holjj { flex: none; width: 10%; }`,
					`.framer-FvXt4.framer-v-x2fshm .framer-70ffel { right: -2px; }`,
					`.framer-FvXt4.framer-v-x2fshm .framer-m0bl2u-container { bottom: -50px; right: -48px; }`,
					`.framer-FvXt4.framer-v-x2fshm .framer-1ghvwtn { grid-column: span 3; order: 0; }`,
					`.framer-FvXt4.framer-v-1b8zifv.framer-xemiho { justify-content: flex-start; width: 810px; }`,
					`.framer-FvXt4.framer-v-1b8zifv .framer-6z6glm { padding: 0px 40px 60px 40px; }`,
					`.framer-FvXt4.framer-v-1b8zifv .framer-8holjj { flex: none; width: 12%; }`,
					`.framer-FvXt4.framer-v-1b8zifv .framer-hybll { flex: none; width: 20%; }`,
					`.framer-FvXt4.framer-v-1b8zifv .framer-70ffel { right: 1px; }`,
					`.framer-FvXt4.framer-v-1b8zifv .framer-m0bl2u-container { bottom: -50px; right: -47px; }`,
					`.framer-FvXt4.framer-v-1b8zifv .framer-1ghvwtn { gap: 50px; grid-column: span 3; order: 0; }`,
					`.framer-FvXt4.framer-v-y4apig .framer-fw9sbq { flex-direction: column; }`,
					`.framer-FvXt4.framer-v-y4apig .framer-8holjj { flex: none; order: 1; width: 100%; }`,
					`.framer-FvXt4.framer-v-y4apig .framer-70ffel { right: 27px; top: 69px; }`,
					`.framer-FvXt4.framer-v-y4apig .framer-m0bl2u-container { bottom: unset; right: -48px; top: 41px; }`,
					`.framer-FvXt4.framer-v-y4apig .framer-1nmehoo { grid-template-columns: repeat(1, minmax(50px, 1fr)); padding: 40px 0px 0px 0px; }`,
					`.framer-FvXt4.framer-v-1sp1m0h .framer-8holjj, .framer-FvXt4.framer-v-kny7dw .framer-8holjj { flex: none; width: 15%; }`,
					`.framer-FvXt4.framer-v-1sp1m0h .framer-70ffel { right: 52px; top: 35px; }`,
					`.framer-FvXt4.framer-v-1sp1m0h .framer-m0bl2u-container { bottom: -55px; right: -50px; }`,
					`.framer-FvXt4.framer-v-1sp1m0h .framer-1nmehoo { padding: 30px 0px 0px 0px; }`,
					`.framer-FvXt4.framer-v-1sp1m0h .framer-1ghvwtn { flex-direction: column; gap: 60px; grid-column: span 3; order: 0; }`,
					`.framer-FvXt4.framer-v-1sp1m0h .framer-1r7styf { flex: none; gap: 40px 10px; width: 100%; }`,
					`.framer-FvXt4.framer-v-1sp1m0h .framer-uxlnr1 { flex: none; gap: 60px 10px; width: 100%; }`,
					`.framer-FvXt4.framer-v-kny7dw .framer-70ffel { right: 47px; top: -15px; }`,
					`.framer-FvXt4.framer-v-kny7dw .framer-m0bl2u-container { bottom: -48px; right: -50px; }`,
					`.framer-FvXt4.framer-v-kny7dw .framer-fwcio { grid-column: span 3; order: 0; padding: 0px; position: relative; top: unset; }`,
					`.framer-FvXt4.framer-v-kny7dw .framer-1rk3n29 { max-width: 650px; }`,
					`.framer-FvXt4.framer-v-kny7dw .framer-ykzhgf { align-content: flex-start; align-items: flex-start; flex-direction: row; }`,
					`.framer-FvXt4.framer-v-kny7dw .framer-1s7kvfo-container, .framer-FvXt4.framer-v-kny7dw .framer-1rq51fj-container, .framer-FvXt4.framer-v-kny7dw .framer-1pllb93-container { flex: 1 0 0px; width: 1px; }`,
					`.framer-FvXt4.framer-v-kny7dw .framer-1ghvwtn { gap: 120px; grid-column: span 3; order: 1; padding: 60px 0px 0px 0px; }`,
					`.framer-FvXt4.framer-v-kny7dw .framer-1r7styf { flex: 2 0 0px; gap: 40px 10px; }`,
					`.framer-FvXt4.framer-v-kny7dw .framer-n9sist-container, .framer-FvXt4.framer-v-kny7dw .framer-a9ybmv-container { order: 0; }`,
					`.framer-FvXt4.framer-v-kny7dw .framer-1d6cpq6-container, .framer-FvXt4.framer-v-kny7dw .framer-1w5x4ws-container { order: 1; }`,
					`.framer-FvXt4.framer-v-kny7dw .framer-uxlnr1 { gap: 40px 10px; }`,
					`.framer-FvXt4.framer-v-17mogja .framer-m0bl2u-container { bottom: unset; right: -50px; top: 29px; }`,
					`.framer-FvXt4.framer-v-17mogja .framer-fwcio { order: 1; padding: 0px 0px 0px 30px; top: 100px; }`,
					`.framer-FvXt4.framer-v-17mogja .framer-1ghvwtn { flex-direction: column; gap: 30px; order: 0; }`,
					...pt,
					...Tt,
					...Ft,
					...It,
					...Vt,
					...yt,
				],
				`framer-FvXt4`,
			)),
			(Uu = Hu),
			(Hu.displayName = `Featured Works - Section`),
			(Hu.defaultProps = { height: 1376, width: 1200 }),
			P(Hu, {
				variant: {
					options: [
						`camO0iR5M`,
						`Y3MInZ9G7`,
						`rWN7ullcS`,
						`CP8Wi04KU`,
						`Mw72qruSr`,
						`nWu67d1C9`,
						`VEvPF1ITZ`,
						`fokodO6Yd`,
						`klSVgkPCI`,
					],
					optionTitles: [
						`Variant 1 - Desktop`,
						`Variant 1 - Tablet`,
						`Variant 1 - Phone`,
						`Variant 2 - Desktop`,
						`Variant 2 - Tablet`,
						`Variant 2 - Phone`,
						`Variant 3 - Desktop`,
						`Variant 4 - Desktop`,
						`Variant 4 - Tablet`,
					],
					title: `Variant`,
					type: J.Enum,
				},
				uqZ2XSbpC: {
					defaultValue: `Featured Works`,
					displayTextArea: !1,
					title: `Heading of Section`,
					type: J.String,
				},
				ugJ8Iq0fa: {
					defaultValue: `[03]`,
					displayTextArea: !1,
					title: `Section Number`,
					type: J.String,
				},
				QujjwCxUD: {
					defaultValue: `Recent launches with real outcomes. Explore the brief, the system we built, and the impact — each case shows problem → approach → result.Every case lists scope, timeline, stack and KPI movement with before and after. `,
					displayTextArea: !0,
					title: `Description`,
					type: J.String,
				},
				VSaINvhjc: {
					defaultValue: `[VIEW ALL]`,
					displayTextArea: !1,
					title: `Vertical Link Text`,
					type: J.String,
				},
				pZhrKeTu2: { title: `Vertical Link URL`, type: J.Link },
				AyMyvfqA5: {
					defaultValue: `12`,
					displayTextArea: !1,
					title: `Amount of Works`,
					type: J.String,
				},
				QvSNHBP5X: {
					defaultValue: !0,
					title: `Show Heading`,
					type: J.Boolean,
				},
				ahFD0KbW0: {
					defaultValue: !0,
					title: `Top Spacer`,
					type: J.Boolean,
				},
			}),
			de(
				Hu,
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
					...Cu,
					...wu,
					...Tu,
					...G(mt),
					...G(Et),
					...G(Lt),
					...G(Rt),
					...G(Ht),
					...G(xt),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function Gu(e) {
	let t = new Uint16Array(e);
	for (let n = 0; n < e; n++) t[n] = n;
	return t;
}
function Ku(e) {
	for (let t = e.length - 1; t > 0; t--) {
		let n = (Math.random() * (t + 1)) | 0,
			r = e[t];
		((e[t] = e[n]), (e[n] = r));
	}
}
function qu(e, t) {
	return t === `linear`
		? e
		: t === `out`
			? 1 - (1 - e) ** 3
			: e < 0.5
				? 4 * e * e * e
				: 1 - (-2 * e + 2) ** 3 / 2;
}
function Ju(e, t) {
	return !e || typeof e != `object` ? t : e.fontFamily || e.family || t;
}
function Yu(e, t) {
	if (!e || typeof e != `object`) return t;
	let n = e.fontWeight ?? e.weight ?? e.variant,
		r = Number(n);
	return Number.isFinite(r) ? r : t;
}
function Xu(e, t) {
	if (!e || typeof e != `object`) return t;
	let n = e.textAlign || e.align;
	return n === `center` || n === `right` ? n : `left`;
}
function Zu(e, t, n) {
	if (!e || typeof e != `object`) return n;
	let r = e[t];
	return typeof r == `string` || typeof r == `number` ? String(r) : n;
}
function Qu(e) {
	return e
		? typeof e == `string`
			? e.trim() || null
			: (typeof e == `object` && (e.url ?? e.href ?? e.target ?? ``)) ||
				null
		: null;
}
function $u(e, t) {
	if (!(!e || u === void 0))
		try {
			let n = new URL(e, u.location.href).toString();
			t
				? u.open(n, `_blank`, `noopener,noreferrer`)
				: u.location.assign(n);
		} catch (t) {
			console.warn(`Invalid link:`, e, t);
		}
}
function ed(e) {
	let {
			text: t = `Hover to decode`,
			font: n,
			color: r = `#111`,
			link: i,
			newTab: l = !0,
			ariaLabel: d,
			durationMs: f = 900,
			fps: m = 30,
			revealEase: h = `out`,
			intensity: g = 1,
			charset: v = `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*`,
			hoverOnly: y = !0,
			repeatOnHover: b = !0,
			repeatOnEnter: x = !1,
			style: S = {},
		} = e,
		C = o(
			() =>
				Ju(
					n,
					`Inter, system-ui, Segoe UI, Roboto, Helvetica, Arial, sans-serif`,
				),
			[n],
		),
		w = o(() => Yu(n, 600), [n]),
		T = o(() => Zu(n, `fontSize`, `18px`), [n]),
		E = o(() => Zu(n, `lineHeight`, `1.1`), [n]),
		O = o(() => Zu(n, `letterSpacing`, `0px`), [n]),
		A = o(() => Xu(n, `left`), [n]),
		j = o(() => Qu(i), [i]),
		[M, N] = a(t),
		P = D(),
		F = o(() => t, [t]),
		I = o(() => F.length, [F]),
		L = o(() => Gu(I), [I]),
		R = o(() => v.split(``), [v]);
	c(() => {
		ee.current || N(F);
	}, [F]);
	let z = ve.current() === ve.canvas,
		ee = _(!1),
		B = _(null),
		V = s(() => {
			if (ee.current) return;
			ee.current = !0;
			let e = Math.max(1, Math.round((f / 1e3) * m)),
				t = Array(e);
			for (let n = 0; n < e; n++) t[n] = qu((n + 1) / e, h);
			let n = F.split(``),
				r = Array(I),
				i = new Uint16Array(L);
			Ku(i);
			let a = 0,
				o = () => {
					let s = t[Math.min(a, e - 1)],
						c = Math.floor(s * I),
						l = new Uint8Array(I);
					for (let e = 0; e < c; e++) l[i[e]] = 1;
					let u = I - c,
						d = Math.max(0, Math.floor(g * u)),
						f = c,
						p = Math.min(d, I - f),
						m = new Uint8Array(I);
					for (let e = 0; e < p; e++) m[i[f + e]] = 1;
					for (let e = 0; e < I; e++)
						l[e]
							? (r[e] = n[e])
							: ((r[e] = R[(Math.random() * R.length) | 0]),
								!m[e] &&
									!((e + a) & 1) &&
									(r[e] = R[(Math.random() * R.length) | 0]));
					(N(r.join(``)),
						a++,
						a < e
							? (B.current = requestAnimationFrame(o))
							: (N(F), (ee.current = !1), (B.current = null)));
				};
			B.current = requestAnimationFrame(o);
		}, [F, I, L, R, f, m, h, g]),
		H = s(() => {
			y && ((b || (!b && !ee.current)) && V(), P.start({ opacity: 1 }));
		}, [y, b, V, P]),
		te = s(() => {
			P.start({ opacity: 1 });
		}, [P]),
		U = _(null),
		ne = _(!1);
	(c(() => {
		if (y || z || u === void 0 || !U.current) return;
		let e = U.current,
			t = new IntersectionObserver(
				(e) => {
					for (let n of e)
						if (n.isIntersecting && n.intersectionRatio >= 0.25) {
							if (!x) {
								ne.current ||
									((ne.current = !0), V(), t.disconnect());
								continue;
							}
							ee.current || V();
						}
				},
				{
					root: null,
					rootMargin: `0px`,
					threshold: [0, 0.25, 0.5, 0.75, 1],
				},
			);
		return (t.observe(e), () => t.disconnect());
	}, [y, z, x, V]),
		c(
			() => () => {
				B.current != null && cancelAnimationFrame(B.current);
			},
			[],
		));
	let re = j ? `link` : void 0,
		ie = j ? 0 : void 0,
		W = d || (j ? `Open link: ${F}` : void 0);
	return p(k.div, {
		ref: U,
		role: re,
		tabIndex: ie,
		"aria-label": W,
		onKeyDown: (e) => {
			j &&
				(e.key === `Enter` || e.key === ` `) &&
				(e.preventDefault(), $u(j, l));
		},
		onClick: () => $u(j, l),
		onHoverStart: H,
		onHoverEnd: te,
		animate: P,
		style: {
			display: `flex`,
			alignItems: `center`,
			justifyContent:
				A === `center`
					? `center`
					: A === `right`
						? `flex-end`
						: `flex-start`,
			width: `100%`,
			height: `100%`,
			overflow: `hidden`,
			cursor: j ? `pointer` : `default`,
			...S,
		},
		children: p(`div`, {
			style: {
				width: `100%`,
				textAlign: A,
				color: r,
				fontFamily: C,
				fontWeight: w,
				fontSize: T,
				lineHeight: E,
				letterSpacing: O,
				whiteSpace: `pre-wrap`,
				wordBreak: `break-word`,
				willChange: `contents`,
			},
			children: M,
		}),
	});
}
var td = e(() => {
	(C(),
		y(),
		l(),
		q(),
		N(),
		P(ed, {
			text: {
				type: J.String,
				title: `Text`,
				defaultValue: `Hover to decode`,
				displayTextArea: !0,
			},
			font: {
				type: J.Font,
				title: `Typography`,
				controls: `extended`,
				defaultFontType: `sans-serif`,
				displayTextAlignment: !0,
				displayFontSize: !0,
				defaultValue: {
					fontFamily: `Inter`,
					fontWeight: 600,
					fontSize: `18px`,
					lineHeight: `1.1`,
					letterSpacing: `0px`,
					textAlign: `left`,
				},
			},
			color: { type: J.Color, title: `Color`, defaultValue: `#111111` },
			link: { type: J.Link ?? J.String, title: `Link`, defaultValue: `` },
			newTab: {
				type: J.Boolean,
				title: `Open in new tab`,
				defaultValue: !0,
			},
			ariaLabel: {
				type: J.String,
				title: `Aria Label`,
				defaultValue: ``,
			},
			durationMs: {
				type: J.Number,
				title: `Duration`,
				min: 120,
				max: 4e3,
				step: 10,
				defaultValue: 900,
				unit: `ms`,
			},
			fps: {
				type: J.Number,
				title: `FPS`,
				min: 12,
				max: 60,
				step: 1,
				defaultValue: 30,
			},
			revealEase: {
				type: J.Enum,
				title: `Ease`,
				options: [`linear`, `out`, `inOut`],
				optionTitles: [`Linear`, `Out`, `InOut`],
				defaultValue: `out`,
			},
			intensity: {
				type: J.Number,
				title: `Intensity`,
				min: 0,
				max: 1,
				step: 0.01,
				defaultValue: 1,
			},
			charset: {
				type: J.String,
				title: `Charset`,
				defaultValue: `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*`,
			},
			hoverOnly: {
				type: J.Boolean,
				title: `Hover only`,
				defaultValue: !0,
			},
			repeatOnHover: {
				type: J.Boolean,
				title: `Restart on hover`,
				defaultValue: !0,
			},
			repeatOnEnter: {
				type: J.Boolean,
				title: `Repeat on enter`,
				defaultValue: !1,
			},
		}));
});
function nd(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rd,
	id,
	ad,
	od,
	sd,
	cd,
	ld,
	ud,
	dd,
	fd,
	pd,
	md,
	hd,
	gd,
	_d,
	vd = e(() => {
		(y(),
			q(),
			N(),
			l(),
			td(),
			Tn(),
			De(),
			Ae(),
			(rd = B(En)),
			(id = B(Ee)),
			(ad = B(ed)),
			(od = [`ssk3UDGEg`, `Yqp02agwX`, `H7foNv_Ti`]),
			(sd = `framer-WS7VN`),
			(cd = {
				H7foNv_Ti: `framer-v-rdo6j0`,
				ssk3UDGEg: `framer-v-10gfi13`,
				Yqp02agwX: `framer-v-1ej34i1`,
			}),
			(ld = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(ud = (e, t) => {
				if (!(!e || typeof e != `object`)) return { ...e, alt: t };
			}),
			(dd = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(fd = k.create(i)),
			(pd = {
				"Desktop - 1200": `ssk3UDGEg`,
				Phone: `H7foNv_Ti`,
				Tablet: `Yqp02agwX`,
			}),
			(md = ({
				height: e,
				id: t,
				logo: n,
				showStartAProject: r,
				width: i,
				...a
			}) => ({
				...a,
				USjDcbWV6: r ?? a.USjDcbWV6 ?? !0,
				variant: pd[a.variant] ?? a.variant ?? `ssk3UDGEg`,
				zpScFJqti: n ?? a.zpScFJqti ?? Me,
			})),
			(hd = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(gd = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						i = S(),
						{ activeLocale: a, setLocale: o } = _e(),
						s = X(),
						{
							style: c,
							className: l,
							layoutId: u,
							variant: d,
							zpScFJqti: f,
							USjDcbWV6: m,
							...h
						} = md(e),
						{
							baseVariant: g,
							classNames: y,
							clearLoadingGesture: b,
							gestureHandlers: x,
							gestureVariant: C,
							isLoading: w,
							setGestureState: T,
							setVariant: E,
							variants: D,
						} = W({
							cycleOrder: od,
							defaultVariant: `ssk3UDGEg`,
							ref: r,
							variant: d,
							variantClassNames: cd,
						}),
						O = hd(e, D),
						A = U(sd);
					return (
						re(),
						p(M, {
							id: u ?? i,
							children: p(fd, {
								animate: D,
								initial: !1,
								children: p(dd, {
									value: ld,
									children: p(k.section, {
										...h,
										...x,
										className: U(A, `framer-10gfi13`, l, y),
										"data-framer-name": `Desktop - 1200`,
										layoutDependency: O,
										layoutId: `ssk3UDGEg`,
										ref: r,
										style: {
											backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
											...c,
										},
										...nd(
											{
												H7foNv_Ti: {
													"data-framer-name": `Phone`,
												},
												Yqp02agwX: {
													"data-framer-name": `Tablet`,
												},
											},
											g,
											C,
										),
										children: v(k.div, {
											className: `framer-1g95upt`,
											"data-framer-name": `Container`,
											layoutDependency: O,
											layoutId: `KfQQSjJYk`,
											children: [
												p(se, {
													background: {
														alt: ``,
														backgroundSize: 2,
														fit: `tile`,
														intrinsicHeight: 790,
														intrinsicWidth: 1600,
														loading: K(
															(s?.y || 0) +
																0 +
																0 +
																200,
														),
														pixelHeight: 44,
														pixelWidth: 44,
														positionX: `center`,
														positionY: `top`,
														src: `https://framerusercontent.com/images/yhlV6BFO3bhzXeyZiXDsNwf6E.svg?width=44&height=44`,
													},
													className: `framer-1akijo1`,
													"data-framer-name": `White Dots Background`,
													layoutDependency: O,
													layoutId: `BcPatyCJ2`,
													...nd(
														{
															H7foNv_Ti: {
																background: {
																	alt: ``,
																	backgroundSize: 2,
																	fit: `tile`,
																	intrinsicHeight: 790,
																	intrinsicWidth: 1600,
																	loading: K(
																		(s?.y ||
																			0) +
																			0 +
																			0 +
																			100,
																	),
																	pixelHeight: 44,
																	pixelWidth: 44,
																	positionX: `center`,
																	positionY: `top`,
																	src: `https://framerusercontent.com/images/yhlV6BFO3bhzXeyZiXDsNwf6E.svg?width=44&height=44`,
																},
															},
															Yqp02agwX: {
																background: {
																	alt: ``,
																	backgroundSize: 2,
																	fit: `tile`,
																	intrinsicHeight: 790,
																	intrinsicWidth: 1600,
																	loading: K(
																		(s?.y ||
																			0) +
																			0 +
																			0 +
																			100,
																	),
																	pixelHeight: 44,
																	pixelWidth: 44,
																	positionX: `center`,
																	positionY: `top`,
																	src: `https://framerusercontent.com/images/yhlV6BFO3bhzXeyZiXDsNwf6E.svg?width=44&height=44`,
																},
															},
														},
														g,
														C,
													),
												}),
												p(Z, {
													children: p(H, {
														className: `framer-1x3slx0-container`,
														isAuthoredByUser: !0,
														layoutDependency: O,
														layoutId: `tjqkO5hPa-container`,
														nodeId: `tjqkO5hPa`,
														rendersWithMotion: !0,
														scopeId: `S54hnaiS9`,
														children: p(En, {
															angleDeg: -31,
															camDist: 3e3,
															camFovDeg: 19,
															camPitchDeg: -11,
															camRollDeg: -10,
															camTargetX: 0,
															camTargetY: 17,
															camTargetZ: 18,
															camYawDeg: -17,
															cardH: 370,
															cardW: 138,
															count: 83,
															curveAmp: 0,
															height: `100%`,
															id: `tjqkO5hPa`,
															images: [
																`https://framerusercontent.com/images/QmjNb5WuAsU8pA4OabSgTDdjZQ.jpg?width=300&height=660`,
																`https://framerusercontent.com/images/LlBTpAra5dI0pBuu7EUc6IwFPM.jpg?width=300&height=660`,
																`https://framerusercontent.com/images/bzmsEZLxMUpFBvYqK3HnRVAlzy8.jpg?width=300&height=660`,
																`https://framerusercontent.com/images/hb7d24VUUMQx6CRiUhkYuK9UaWI.jpg?width=300&height=660`,
																`https://framerusercontent.com/images/apdrGXNFA4sR4rckxD4vdggJbkk.jpg?width=300&height=660`,
															],
															layoutId: `tjqkO5hPa`,
															phaseStepDeg: 12.5,
															radius: 130,
															scrollSpeed: 0.47,
															spacing: 73,
															spinDeg: 25,
															stopMotionInEditor:
																!0,
															style: {
																height: `100%`,
																width: `100%`,
															},
															tiltYdeg: 35,
															width: `100%`,
															...nd(
																{
																	H7foNv_Ti: {
																		camTargetY:
																			-138,
																		count: 44,
																	},
																	Yqp02agwX: {
																		camTargetY: 30,
																	},
																},
																g,
																C,
															),
														}),
													}),
												}),
												v(k.div, {
													className: `framer-fouekl`,
													layoutDependency: O,
													layoutId: `GFBKJ9DTd`,
													children: [
														v(k.div, {
															className: `framer-hl1zq3`,
															"data-framer-name": `Book and Founders`,
															layoutDependency: O,
															layoutId: `rnn7BKQAN`,
															children: [
																p(k.div, {
																	className: `framer-2krt27`,
																	"data-framer-name": `Spacer`,
																	layoutDependency:
																		O,
																	layoutId: `LquPYZUDM`,
																}),
																m &&
																	p(ie, {
																		links: [
																			{
																				href: {
																					webPageId: `BCJD0WnMV`,
																				},
																				implicitPathVariables:
																					void 0,
																			},
																			{
																				href: {
																					webPageId: `BCJD0WnMV`,
																				},
																				implicitPathVariables:
																					void 0,
																			},
																			{
																				href: {
																					webPageId: `BCJD0WnMV`,
																				},
																				implicitPathVariables:
																					void 0,
																			},
																		],
																		children:
																			(
																				e,
																			) =>
																				p(
																					Z,
																					{
																						height: 291,
																						width: `340px`,
																						y:
																							(s?.y ||
																								0) +
																							0 +
																							0 +
																							0 +
																							0 +
																							0 +
																							0 +
																							0 +
																							148,
																						...nd(
																							{
																								H7foNv_Ti:
																									{
																										width: `calc(min(${s?.width || `100vw`}, 1600px) - 50px)`,
																										y:
																											(s?.y ||
																												0) +
																											0 +
																											0 +
																											0 +
																											0 +
																											0 +
																											178 +
																											0 +
																											90,
																									},
																								Yqp02agwX:
																									{
																										width: `310px`,
																										y:
																											(s?.y ||
																												0) +
																											0 +
																											0 +
																											0 +
																											0 +
																											0 +
																											0 +
																											0 +
																											100,
																									},
																							},
																							g,
																							C,
																						),
																						children:
																							p(
																								H,
																								{
																									className: `framer-usxnsm-container`,
																									layoutDependency:
																										O,
																									layoutId: `rh9iuev3C-container`,
																									nodeId: `rh9iuev3C`,
																									rendersWithMotion:
																										!0,
																									scopeId: `S54hnaiS9`,
																									children:
																										p(
																											Ee,
																											{
																												cEhJlWBK4: `Start
a Project`,
																												GMQy3HIPj:
																													!0,
																												Gsrl54N8N: `Liked by 
50+ founders`,
																												height: `100%`,
																												id: `rh9iuev3C`,
																												IdibjBtEd:
																													ud(
																														{
																															pixelHeight: 400,
																															pixelWidth: 202,
																															src: `/assets/images/mIWtzyau0sMyaJrDQmerbyy5A.png`,
																														},
																														``,
																													),
																												IMKZ9o7BF: `Let's book & talk with our manager.`,
																												ks_rDRK57: `/assets/PNQxI2Ed9uKXPFfH9IkZlg9f9qU.mp4`,
																												layoutId: `rh9iuev3C`,
																												LcSrkRYKq: `Book Call`,
																												mteyTKK7M:
																													!0,
																												N7Tu5wmWv:
																													e[0],
																												QaFXteMmg: `Kate W.`,
																												rOuEaS47u:
																													!0,
																												style: {
																													width: `100%`,
																												},
																												variant: `H9MtNDY8s`,
																												width: `100%`,
																												x_cGQsZuk:
																													!0,
																												...nd(
																													{
																														H7foNv_Ti:
																															{
																																N7Tu5wmWv:
																																	e[2],
																															},
																														Yqp02agwX:
																															{
																																N7Tu5wmWv:
																																	e[1],
																															},
																													},
																													g,
																													C,
																												),
																											},
																										),
																								},
																							),
																					},
																				),
																	}),
															],
														}),
														v(k.div, {
															className: `framer-nit37j`,
															"data-framer-name": `Full Wide Logo`,
															layoutDependency: O,
															layoutId: `ezjNJWtOw`,
															children: [
																p(Z, {
																	children: p(
																		H,
																		{
																			className: `framer-13metsy-container`,
																			isAuthoredByUser:
																				!0,
																			layoutDependency:
																				O,
																			layoutId: `NTOozAt2W-container`,
																			nodeId: `NTOozAt2W`,
																			rendersWithMotion:
																				!0,
																			scopeId: `S54hnaiS9`,
																			children:
																				p(
																					ed,
																					{
																						ariaLabel: `h1`,
																						charset: `ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%*`,
																						color: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																						durationMs: 2e3,
																						font: {
																							fontFamily: `"Space Mono", monospace`,
																							fontSize: `28px`,
																							fontStyle: `normal`,
																							fontWeight: 400,
																							letterSpacing: `-0.3px`,
																							lineHeight: `1em`,
																							textAlign: `left`,
																						},
																						fps: 60,
																						height: `100%`,
																						hoverOnly:
																							!1,
																						id: `NTOozAt2W`,
																						intensity: 0.08,
																						layoutId: `NTOozAt2W`,
																						newTab: !0,
																						repeatOnEnter:
																							!1,
																						repeatOnHover:
																							!0,
																						revealEase: `inOut`,
																						text: `DIGITAL CREATIVE AGENCY`,
																						width: `100%`,
																						...nd(
																							{
																								H7foNv_Ti:
																									{
																										font: {
																											fontFamily: `"Space Mono", monospace`,
																											fontSize: `17px`,
																											fontStyle: `normal`,
																											fontWeight: 400,
																											letterSpacing: `-0.2px`,
																											lineHeight: `1em`,
																											textAlign: `left`,
																										},
																									},
																								Yqp02agwX:
																									{
																										font: {
																											fontFamily: `"Space Mono", monospace`,
																											fontSize: `24px`,
																											fontStyle: `normal`,
																											fontWeight: 400,
																											letterSpacing: `0px`,
																											lineHeight: `1em`,
																											textAlign: `center`,
																										},
																									},
																							},
																							g,
																							C,
																						),
																					},
																				),
																		},
																	),
																}),
																p(pe, {
																	animated:
																		!0,
																	className: `framer-lookle`,
																	Component:
																		f,
																	layoutDependency:
																		O,
																	layoutId: `woG9B_ywr`,
																}),
															],
														}),
													],
												}),
											],
										}),
									}),
								}),
							}),
						})
					);
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-WS7VN.framer-1rxhqfc, .framer-WS7VN .framer-1rxhqfc { display: block; }`,
					`.framer-WS7VN.framer-10gfi13 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
					`.framer-WS7VN .framer-1g95upt { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; height: calc(var(--framer-viewport-height, 100vh) * 0.9); justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-WS7VN .framer-1akijo1 { flex: none; height: 600px; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: 200px; width: 100%; z-index: 1; }`,
					`.framer-WS7VN .framer-1x3slx0-container { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 1; }`,
					`.framer-WS7VN .framer-fouekl { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; height: 1px; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-WS7VN .framer-hl1zq3 { align-content: flex-end; align-items: flex-end; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: 1px; justify-content: flex-start; max-width: 1600px; overflow: visible; padding: 0px 40px 0px 40px; position: relative; width: 100%; z-index: 6; }`,
					`.framer-WS7VN .framer-2krt27 { flex: none; height: 25%; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-WS7VN .framer-usxnsm-container { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; width: 340px; z-index: 1; }`,
					`.framer-WS7VN .framer-nit37j { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: center; max-width: 1600px; mix-blend-mode: difference; overflow: var(--overflow-clip-fallback, clip); padding: 80px 40px 0px 40px; position: relative; width: 100%; z-index: 5; }`,
					`.framer-WS7VN .framer-13metsy-container { flex: none; height: auto; position: relative; width: auto; }`,
					`.framer-WS7VN .framer-lookle { flex: none; height: var(--framer-aspect-ratio-supported, 161px); position: relative; width: 100%; }`,
					`.framer-WS7VN.framer-v-1ej34i1.framer-10gfi13 { width: 810px; }`,
					`.framer-WS7VN.framer-v-1ej34i1 .framer-1g95upt { height: 650px; }`,
					`.framer-WS7VN.framer-v-1ej34i1 .framer-1akijo1 { top: 100px; }`,
					`.framer-WS7VN.framer-v-1ej34i1 .framer-hl1zq3 { padding: 0px 30px 0px 30px; }`,
					`.framer-WS7VN.framer-v-1ej34i1 .framer-2krt27 { height: 90px; }`,
					`.framer-WS7VN.framer-v-1ej34i1 .framer-usxnsm-container { width: 310px; }`,
					`.framer-WS7VN.framer-v-1ej34i1 .framer-nit37j { padding: 90px 30px 0px 30px; }`,
					`.framer-WS7VN.framer-v-1ej34i1 .framer-lookle { height: var(--framer-aspect-ratio-supported, 108px); }`,
					`.framer-WS7VN.framer-v-rdo6j0.framer-10gfi13 { width: 390px; }`,
					`.framer-WS7VN.framer-v-rdo6j0 .framer-1g95upt { gap: 10px; height: calc(var(--framer-viewport-height, 100vh) * 0.85); justify-content: flex-end; }`,
					`.framer-WS7VN.framer-v-rdo6j0 .framer-1akijo1 { height: 385px; top: 100px; }`,
					`.framer-WS7VN.framer-v-rdo6j0 .framer-1x3slx0-container { height: 400px; }`,
					`.framer-WS7VN.framer-v-rdo6j0 .framer-fouekl { gap: 10px; justify-content: flex-end; }`,
					`.framer-WS7VN.framer-v-rdo6j0 .framer-hl1zq3 { flex: none; height: min-content; padding: 0px 25px 0px 25px; }`,
					`.framer-WS7VN.framer-v-rdo6j0 .framer-2krt27 { height: 80px; }`,
					`.framer-WS7VN.framer-v-rdo6j0 .framer-usxnsm-container { width: 100%; }`,
					`.framer-WS7VN.framer-v-rdo6j0 .framer-nit37j { gap: 8px; padding: 30px 25px 0px 25px; }`,
					`.framer-WS7VN.framer-v-rdo6j0 .framer-lookle { height: var(--framer-aspect-ratio-supported, 49px); }`,
				],
				`framer-WS7VN`,
			)),
			(_d = gd),
			(gd.displayName = `Hero - Section`),
			(gd.defaultProps = { height: 720, width: 1200 }),
			P(gd, {
				variant: {
					options: [`ssk3UDGEg`, `Yqp02agwX`, `H7foNv_Ti`],
					optionTitles: [`Desktop - 1200`, `Tablet`, `Phone`],
					title: `Variant`,
					type: J.Enum,
				},
				zpScFJqti: {
					defaultValue: {
						identifier: `local-module:vector/eUARyGGYh:default`,
						moduleId: `IN4n9QQhPGopZKZhKvzp`,
					},
					setModuleId: `FRa2SJ9WRROf5Dy752jS`,
					title: `Logo`,
					type: J.VectorSetItem,
				},
				USjDcbWV6: {
					defaultValue: !0,
					title: `Show Start a Project`,
					type: J.Boolean,
				},
			}),
			de(
				gd,
				[
					{
						explicitInter: !0,
						fonts: [
							{
								cssFamilyName: `Space Mono`,
								source: `google`,
								style: `normal`,
								uiFamilyName: `Space Mono`,
								url: `https://fonts.gstatic.com/s/spacemono/v17/i7dPIFZifjKcF5UAWdDRUEN2RFq7AwU.woff2`,
								weight: `400`,
							},
						],
					},
					...rd,
					...id,
					...ad,
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function yd(e) {
	let {
			words: t = [
				`Design`,
				`Figma`,
				`Framer`,
				`Type`,
				`Layout`,
				`Grid`,
				`Fonts`,
				`UI`,
				`React`,
				`WebGL`,
				`Canvas`,
				`JS`,
				`Kerning`,
				`Tracking`,
				`LineHeight`,
				`CSS`,
				`HTML`,
				`API`,
			],
			bgColor: r = `#ffffff`,
			textColor: i = `#111111`,
			font: o = { family: `Inter`, weight: 700, style: `normal` },
			speed: s = 0.01,
			fontScale: l = 0.06,
			letterSpacingEm: d = 0,
			dragToScrub: f = !0,
			scrubSensitivity: m = 0.003,
		} = e,
		h = xd(o),
		g = _(null),
		y = _(null),
		b = _(null),
		[x, S] = a(0);
	n(() => {
		let e = g.current;
		if (!e) return;
		let t = () => S(Math.max(0, Math.min(e.clientWidth, e.clientHeight)));
		t();
		let n = new ResizeObserver(t);
		return (n.observe(e), () => n.disconnect());
	}, []);
	let C = _([]);
	(c(() => {
		let e = Math.max(1, t.length),
			n = [],
			r = Math.PI * (3 - Math.sqrt(5));
		for (let t = 0; t < e; t++) {
			let i = 1 - (t / Math.max(1, e - 1)) * 2,
				a = Math.sqrt(Math.max(0, 1 - i * i)),
				o = r * t,
				s = Math.cos(o) * a,
				c = Math.sin(o) * a;
			n.push([s, i, c]);
		}
		C.current = n;
	}, [t]),
		c(() => {
			if (!y.current) return;
			let e = y.current.querySelectorAll(`li.tag`);
			b.current = Array.from(e);
		}, [t]));
	let w = _(0),
		T = _(0),
		E = bd([0.6, 1, 0.2]);
	(c(() => {
		if (!f || !g.current) return;
		let e = g.current,
			t = !1,
			n = 0,
			r = (r) => {
				((t = !0),
					(n = r.clientX),
					e.classList.add(`dragging`),
					e.setPointerCapture(r.pointerId));
			},
			i = (e) => {
				if (!t) return;
				let r = e.clientX - n;
				((n = e.clientX), (T.current += r * m));
			},
			a = (n) => {
				if (t) {
					((t = !1), e.classList.remove(`dragging`));
					try {
						e.releasePointerCapture(n.pointerId);
					} catch {}
				}
			};
		return (
			e.addEventListener(`pointerdown`, r),
			e.addEventListener(`pointermove`, i),
			u.addEventListener(`pointerup`, a),
			u.addEventListener(`pointercancel`, a),
			() => {
				(e.removeEventListener(`pointerdown`, r),
					e.removeEventListener(`pointermove`, i),
					u.removeEventListener(`pointerup`, a),
					u.removeEventListener(`pointercancel`, a));
			}
		);
	}, [f, m]),
		c(() => {
			let e = 0,
				t = () => {
					((w.current += Math.max(0, s)),
						D(),
						(e = requestAnimationFrame(t)));
				};
			return (
				(e = requestAnimationFrame(t)),
				() => cancelAnimationFrame(e)
			);
		}, [x, s]));
	let D = () => {
		let e = b.current,
			t = C.current;
		if (!e || !t || e.length === 0 || t.length === 0) return;
		let n = x * 0.5,
			r = w.current + T.current,
			[i, a, o] = E,
			s = Math.sin(r),
			c = Math.cos(r),
			l = 1 - c,
			u = c + i * i * l,
			d = i * a * l - o * s,
			f = i * o * l + a * s,
			p = a * i * l + o * s,
			m = c + a * a * l,
			h = a * o * l - i * s,
			g = o * i * l - a * s,
			_ = o * a * l + i * s,
			v = c + o * o * l;
		for (let r = 0; r < e.length; r++) {
			let [i, a, o] = t[r],
				s = u * i + d * a + f * o,
				c = p * i + m * a + h * o,
				l = g * i + _ * a + v * o,
				y = n * s,
				b = n * c,
				x = (l + 2) / 3,
				S = (l + 1.5) / 2.5,
				C = e[r];
			((C.style.transform = `translate(${y}px, ${b}px) scale(${x})`),
				(C.style.opacity = String(Math.max(0, Math.min(1, S)))));
		}
	};
	return v(`div`, {
		ref: g,
		style: {
			position: `relative`,
			width: `100%`,
			height: `100%`,
			overflow: `visible`,
			background: r,
			userSelect: `none`,
			touchAction: `none`,
		},
		className: `texts-cloud-host`,
		children: [
			p(`style`, {
				children: `
                .texts-cloud-host { cursor: grab; }
                .texts-cloud-host.dragging { cursor: grabbing; }
            `,
			}),
			p(`ul`, {
				ref: y,
				className: `tags-cloud`,
				style: {
					position: `absolute`,
					left: `calc(50% - ${x / 2}px)`,
					top: `calc(50% - ${x / 2}px)`,
					width: `${x}px`,
					height: `${x}px`,
					listStyle: `none`,
					margin: 0,
					padding: 0,
					pointerEvents: `auto`,
				},
				children: t.map((e, t) =>
					p(
						`li`,
						{
							className: `tag`,
							style: {
								position: `absolute`,
								left: `50%`,
								top: `50%`,
								transform: `translate(-50%, -50%)`,
								...h,
								color: i,
								fontSize: `${Math.max(10, x * l)}px`,
								lineHeight: 1,
								transition: `transform .5s linear, opacity .5s linear`,
								willChange: `transform, opacity`,
								whiteSpace: `nowrap`,
								pointerEvents: `auto`,
								WebkitUserSelect: `none`,
								userSelect: `none`,
							},
							children: p(`span`, {
								className: `wrap`,
								style: {
									display: `inline-block`,
									transform: `translate(-50%, -50%)`,
									letterSpacing: `${d}em`,
								},
								children: e,
							}),
						},
						t,
					),
				),
			}),
		],
	});
}
function bd(e) {
	let t = Math.hypot(e[0], e[1], e[2]) || 1;
	return [e[0] / t, e[1] / t, e[2] / t];
}
function xd(e) {
	return e
		? typeof e == `string`
			? { fontFamily: e }
			: {
					fontFamily: (e.family ?? e.fontFamily) || `Inter`,
					fontWeight: e.weight ?? e.fontWeight ?? 700,
					fontStyle: e.style ?? e.fontStyle ?? `normal`,
				}
		: { fontFamily: `Inter`, fontWeight: 700, fontStyle: `normal` };
}
var Sd = e(() => {
	(C(),
		y(),
		l(),
		q(),
		P(yd, {
			words: {
				type: J.Array,
				title: `Words`,
				propertyControl: { type: J.String, title: `Word` },
				defaultValue: [
					`Design`,
					`Figma`,
					`Framer`,
					`Type`,
					`Layout`,
					`Grid`,
					`Fonts`,
					`UI`,
					`React`,
					`WebGL`,
					`Canvas`,
					`JS`,
				],
			},
			bgColor: {
				type: J.Color,
				title: `Background`,
				defaultValue: `#ffffff`,
			},
			textColor: {
				type: J.Color,
				title: `Text`,
				defaultValue: `#111111`,
			},
			font: {
				type: J.Font,
				title: `Font`,
				defaultValue: { family: `Inter`, weight: 700, style: `normal` },
			},
			fontScale: {
				type: J.Number,
				title: `Font Size`,
				min: 0.02,
				max: 0.18,
				step: 0.002,
				defaultValue: 0.06,
				displayStepper: !1,
			},
			letterSpacingEm: {
				type: J.Number,
				title: `Letter-spacing`,
				min: -0.1,
				max: 0.5,
				step: 0.01,
				defaultValue: 0,
				displayStepper: !1,
			},
			speed: {
				type: J.Number,
				title: `Auto Speed`,
				min: 0,
				max: 0.025,
				step: 5e-4,
				defaultValue: 0.01,
				displayStepper: !1,
			},
			dragToScrub: {
				type: J.Boolean,
				title: `Drag Scrub`,
				enabledTitle: `On`,
				disabledTitle: `Off`,
				defaultValue: !0,
			},
			scrubSensitivity: {
				type: J.Number,
				title: `Scrub Sens.`,
				min: 5e-4,
				max: 0.02,
				step: 5e-4,
				defaultValue: 0.003,
				hidden: (e) => !e.dragToScrub,
			},
		}));
});
function Cd(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var wd,
	Td,
	Ed,
	Dd,
	Od,
	kd,
	Ad,
	jd,
	Md,
	Nd,
	Pd,
	Fd,
	Id,
	Ld,
	Rd,
	zd,
	Bd = e(() => {
		(y(),
			q(),
			N(),
			l(),
			Sd(),
			ft(),
			wt(),
			Ot(),
			Dn(),
			vt(),
			Bt(),
			xn(),
			(wd = B(Cn)),
			(Td = te(H)),
			(Ed = B(yd)),
			(Dd = [`yDsUBoQFy`, `LBb1scSzl`, `tVhqx8SVi`]),
			(Od = `framer-IaFmd`),
			(kd = {
				LBb1scSzl: `framer-v-13bn4gq`,
				tVhqx8SVi: `framer-v-kxw771`,
				yDsUBoQFy: `framer-v-1uquttl`,
			}),
			(Ad = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(jd = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(Md = (e, t) => `translateX(-50%) ${t}`),
			(Nd = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(Pd = k.create(i)),
			(Fd = {
				"Desktop - 1200": `yDsUBoQFy`,
				Phone: `tVhqx8SVi`,
				Tablet: `LBb1scSzl`,
			}),
			(Id = ({
				cloudText: e,
				height: t,
				id: n,
				imageInAbout: r,
				sectionNumber: i,
				shortAbout: a,
				verticalLinkText: o,
				verticalLinkURL: s,
				welcomeText: c,
				width: l,
				...u
			}) => ({
				...u,
				ax9UfBvMl: i ?? u.ax9UfBvMl ?? `[01]`,
				DAAG0VqYR:
					a ??
					u.DAAG0VqYR ??
					`         We’re a senior creative digital agency focused on clarity and performance. We align strategy, brand, and web into modular systems that ship on time and scale. Our values are simplicity, accountability and measurable impact. The team is small and senior; every project has a lead for strategy, design and build. `,
				dGuW_vCBk: e ?? u.dGuW_vCBk ?? `Our Stack`,
				EvIF7w2AA: s ?? u.EvIF7w2AA,
				H5WebbGbQ: o ?? u.H5WebbGbQ ?? `[MORE ABOUT]`,
				LI7feEXC0: r ??
					u.LI7feEXC0 ?? {
						alt: ``,
						pixelHeight: 366,
						pixelWidth: 645,
						src: `/assets/images/lb6woL5uVYj2x1tjjPMrpxnlSaA.png?width=645&height=366`,
						srcSet: `/assets/images/lb6woL5uVYj2x1tjjPMrpxnlSaA.png?scale-down-to=512&width=645&height=366 512w,/assets/images/lb6woL5uVYj2x1tjjPMrpxnlSaA.png?width=645&height=366 645w`,
					},
				rJHb064PE:
					c ??
					u.rJHb064PE ??
					`       From strategy to launch we deliver fast, accessible sites and clear brands with Growth-driven results`,
				variant: Fd[u.variant] ?? u.variant ?? `yDsUBoQFy`,
			})),
			(Ld = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Rd = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e(),
						c = X(),
						{
							style: l,
							className: u,
							layoutId: d,
							variant: f,
							rJHb064PE: m,
							DAAG0VqYR: h,
							dGuW_vCBk: g,
							H5WebbGbQ: y,
							EvIF7w2AA: b,
							ax9UfBvMl: x,
							LI7feEXC0: C,
							...w
						} = Id(e),
						{
							baseVariant: T,
							classNames: E,
							clearLoadingGesture: D,
							gestureHandlers: O,
							gestureVariant: A,
							isLoading: j,
							setGestureState: N,
							setVariant: P,
							variants: F,
						} = W({
							cycleOrder: Dd,
							defaultVariant: `yDsUBoQFy`,
							ref: r,
							variant: f,
							variantClassNames: kd,
						}),
						I = Ld(e, F),
						L = U(Od, Ut, jt, ht, Dt, Ct, An);
					return p(M, {
						id: d ?? a,
						children: p(Pd, {
							animate: F,
							initial: !1,
							children: p(Nd, {
								value: Ad,
								children: p(k.section, {
									...w,
									...O,
									className: U(L, `framer-1uquttl`, u, E),
									"data-framer-name": `Desktop - 1200`,
									layoutDependency: I,
									layoutId: `yDsUBoQFy`,
									ref: r,
									style: { ...l },
									...Cd(
										{
											LBb1scSzl: {
												"data-framer-name": `Tablet`,
											},
											tVhqx8SVi: {
												"data-framer-name": `Phone`,
											},
										},
										T,
										A,
									),
									children: v(k.div, {
										className: `framer-v5x0et`,
										"data-framer-name": `Container`,
										layoutDependency: I,
										layoutId: `wPKPeK6Jx`,
										children: [
											v(k.div, {
												className: `framer-1ggv7xe`,
												"data-framer-name": `Welcome Text`,
												layoutDependency: I,
												layoutId: `I5XNW0TKp`,
												children: [
													p(R, {
														__fromCanvasComponent:
															!0,
														children: p(i, {
															children: p(k.h1, {
																className: `framer-styles-preset-1yuak3c`,
																"data-styles-preset": `zczqo4Z8y`,
																style: {
																	"--framer-text-color": `var(--extracted-gdpscs, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `       From strategy to launch we deliver fast, accessible sites and clear brands with Growth-driven results`,
															}),
														}),
														className: `framer-13q9l6d`,
														"data-framer-name": `Heading Welcome`,
														fonts: [`Inter`],
														layoutDependency: I,
														layoutId: `DL251TzzV`,
														style: {
															"--extracted-gdpscs": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
															"--framer-paragraph-spacing": `0px`,
														},
														text: m,
														variants: {
															LBb1scSzl: {
																"--extracted-1eung3n": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
															},
															tVhqx8SVi: {
																"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
															},
														},
														verticalAlignment: `top`,
														withExternalLayout: !0,
														...Cd(
															{
																LBb1scSzl: {
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h4,
																					{
																						className: `framer-styles-preset-1ri87jd`,
																						"data-styles-preset": `LuOKrK4j8`,
																						style: {
																							"--framer-text-color": `var(--extracted-1eung3n, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `       From strategy to launch we deliver fast, accessible sites and clear brands with Growth-driven results`,
																					},
																				),
																		},
																	),
																},
																tVhqx8SVi: {
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-nkm6se`,
																						"data-styles-preset": `BaUGQBb6A`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `       From strategy to launch we deliver fast, accessible sites and clear brands with Growth-driven results`,
																					},
																				),
																		},
																	),
																},
															},
															T,
															A,
														),
													}),
													p(R, {
														__fromCanvasComponent:
															!0,
														children: p(i, {
															children: p(k.h6, {
																className: `framer-styles-preset-nkm6se`,
																"data-styles-preset": `BaUGQBb6A`,
																style: {
																	"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `[01]`,
															}),
														}),
														className: `framer-1y3gofu`,
														"data-framer-name": `[01]`,
														fonts: [`Inter`],
														layoutDependency: I,
														layoutId: `scpmoryz7`,
														style: {
															"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
															"--framer-paragraph-spacing": `0px`,
														},
														text: x,
														verticalAlignment: `top`,
														withExternalLayout: !0,
														...Cd(
															{
																tVhqx8SVi: {
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-f8hg8j`,
																						"data-styles-preset": `IGVKsj4vh`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `[01]`,
																					},
																				),
																		},
																	),
																},
															},
															T,
															A,
														),
													}),
													p(Z, {
														height: 48,
														y:
															(c?.y || 0) +
															0 +
															(((c?.height ||
																832) -
																0 -
																643) /
																2 +
																0 +
																0) +
															140 +
															0 +
															50.047,
														...Cd(
															{
																LBb1scSzl: {
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			988) -
																			0 -
																			817) /
																			2 +
																			0 +
																			0) +
																		120 +
																		0 +
																		50.047,
																},
																tVhqx8SVi: {
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			200) -
																			0 -
																			958) /
																			2 +
																			0 +
																			0) +
																		80 +
																		0 +
																		0 +
																		45,
																},
															},
															T,
															A,
														),
														children: p(Td, {
															className: `framer-1f3leh3-container`,
															layoutDependency: I,
															layoutId: `xwltV5Z_G-container`,
															nodeId: `xwltV5Z_G`,
															rendersWithMotion:
																!0,
															scopeId: `vA87PgNaQ`,
															style: {
																rotate: -90,
															},
															variants: {
																tVhqx8SVi: {
																	rotate: 0,
																},
															},
															...Cd(
																{
																	tVhqx8SVi: {
																		__framer__styleTransformEffectEnabled:
																			!0,
																		__framer__transformTargets:
																			[
																				{
																					target: {
																						opacity: 1,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0,
																						scale: 1,
																						skewX: 0,
																						skewY: 0,
																						x: 6,
																						y: 0,
																					},
																				},
																				{
																					target: {
																						opacity: 1,
																						rotate: 0,
																						rotateX: 0,
																						rotateY: 0,
																						scale: 1,
																						skewX: 0,
																						skewY: 0,
																						x: 0,
																						y: 0,
																					},
																				},
																			],
																		__framer__transformTrigger: `onScroll`,
																		__perspectiveFX:
																			!1,
																		__smartComponentFX:
																			!0,
																		__targetOpacity: 1,
																	},
																},
																T,
																A,
															),
															children: p(Cn, {
																a10ufliJT: y,
																FnHJ3auI6: b,
																GvlBMQefU: !1,
																height: `100%`,
																id: `xwltV5Z_G`,
																Kq_CijUyE: `15px 70px 15px 70px`,
																layoutId: `xwltV5Z_G`,
																mSNDO3YW7: !0,
																ok7eKoPLP: !1,
																style: {
																	height: `100%`,
																},
																uziNdYDRk: !0,
																variant: `UnuGN3X_1`,
																width: `100%`,
																xuXj4zldx: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																...Cd(
																	{
																		tVhqx8SVi:
																			{
																				Kq_CijUyE: `15px 60px 15px 70px`,
																			},
																	},
																	T,
																	A,
																),
															}),
														}),
													}),
												],
											}),
											p(k.div, {
												className: `framer-w9bobr`,
												"data-framer-name": `Spacer`,
												layoutDependency: I,
												layoutId: `zAnzswpa7`,
											}),
											v(k.div, {
												className: `framer-u75t1w`,
												"data-framer-name": `Content`,
												layoutDependency: I,
												layoutId: `L09Gl4iwa`,
												style: {
													backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
												},
												children: [
													v(k.div, {
														className: `framer-vhd2ns`,
														layoutDependency: I,
														layoutId: `JKxcc9aoZ`,
														children: [
															v(k.div, {
																className: `framer-1si1syd`,
																"data-framer-name": `Image`,
																layoutDependency:
																	I,
																layoutId: `jWTCHvN7g`,
																children: [
																	p(se, {
																		background:
																			{
																				alt: ``,
																				fit: `fill`,
																				intrinsicHeight: 183,
																				intrinsicWidth: 322.5,
																				loading:
																					K(
																						(c?.y ||
																							0) +
																							0 +
																							(((c?.height ||
																								832) -
																								0 -
																								643) /
																								2 +
																								0 +
																								0) +
																							140 +
																							128 +
																							77.5 +
																							0 +
																							0 +
																							160 -
																							161,
																					),
																				pixelHeight: 366,
																				pixelWidth: 645,
																				sizes: `calc(min(max(((min(${c?.width || `100vw`}, 1600px) - 80px) * 0.7 - 10px) / 2, 1px), 380px) * 0.8197)`,
																				...jd(
																					C,
																				),
																			},
																		className: `framer-o2dijj`,
																		"data-framer-name": `Image`,
																		fitImageDimension: `height`,
																		layoutDependency:
																			I,
																		layoutId: `b0ATDNwp1`,
																		transformTemplate:
																			Md,
																		...Cd(
																			{
																				LBb1scSzl:
																					{
																						background:
																							{
																								alt: ``,
																								fit: `fill`,
																								intrinsicHeight: 183,
																								intrinsicWidth: 322.5,
																								loading:
																									K(
																										(c?.y ||
																											0) +
																											0 +
																											(((c?.height ||
																												988) -
																												0 -
																												817) /
																												2 +
																												0 +
																												0) +
																											120 +
																											92 +
																											0 +
																											0 +
																											0 +
																											0 +
																											160 -
																											163,
																									),
																								pixelHeight: 366,
																								pixelWidth: 645,
																								sizes: `calc(min(max((min(${c?.width || `100vw`}, 1600px) - 70px) / 2, 1px), 380px) * 0.8197)`,
																								...jd(
																									C,
																								),
																							},
																					},
																				tVhqx8SVi:
																					{
																						background:
																							{
																								alt: ``,
																								fit: `fill`,
																								intrinsicHeight: 183,
																								intrinsicWidth: 322.5,
																								loading:
																									K(
																										(c?.y ||
																											0) +
																											0 +
																											(((c?.height ||
																												200) -
																												0 -
																												958) /
																												2 +
																												0 +
																												0) +
																											80 +
																											138 +
																											0 +
																											0 +
																											0 +
																											0 +
																											160 -
																											231,
																									),
																								pixelHeight: 366,
																								pixelWidth: 645,
																								sizes: `calc(min(min(${c?.width || `100vw`}, 1600px) - 50px, 380px) * 0.8197)`,
																								...jd(
																									C,
																								),
																							},
																					},
																			},
																			T,
																			A,
																		),
																	}),
																	p(k.div, {
																		className: `framer-a6u6x`,
																		"data-framer-name": `Back`,
																		layoutDependency:
																			I,
																		layoutId: `oAFKJjBRi`,
																		style: {
																			background: `linear-gradient(180deg, rgb(187, 183, 184) 0%, rgb(216, 215, 215) 100%)`,
																			borderBottomLeftRadius: 10,
																			borderBottomRightRadius: 10,
																			borderTopLeftRadius: 10,
																			borderTopRightRadius: 10,
																		},
																	}),
																],
															}),
															p(k.div, {
																className: `framer-qlaxu0`,
																"data-framer-name": `Text`,
																layoutDependency:
																	I,
																layoutId: `CjYd3Js02`,
																children: p(R, {
																	__fromCanvasComponent:
																		!0,
																	children: p(
																		i,
																		{
																			children:
																				v(
																					k.p,
																					{
																						className: `framer-styles-preset-11kcybb`,
																						"data-styles-preset": `pPuowuywh`,
																						children:
																							[
																								p(
																									k.span,
																									{
																										style: {
																											"--framer-text-color": `var(--extracted-1w3ko1f, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																										},
																										children: `         We’re a senior creative digital agency focused on clarity and performance. We align strategy, brand, and web into modular systems that ship on time and scale. Our values are simplicity, accountability and measurable impact. `,
																									},
																								),
																								p(
																									k.br,
																									{},
																								),
																								p(
																									k.span,
																									{
																										style: {
																											"--framer-text-color": `var(--extracted-c9yw3e, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																										},
																										children: `The team is small and senior; every project has a lead for strategy, design and build. `,
																									},
																								),
																							],
																					},
																				),
																		},
																	),
																	className: `framer-1679kgq`,
																	"data-framer-name": `Text`,
																	fonts: [
																		`Inter`,
																	],
																	layoutDependency:
																		I,
																	layoutId: `PfjLeGlbN`,
																	style: {
																		"--extracted-1w3ko1f": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																		"--extracted-c9yw3e": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																		"--framer-paragraph-spacing": `0px`,
																	},
																	text: h,
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																}),
															}),
														],
													}),
													v(k.div, {
														className: `framer-1rc9j14`,
														"data-framer-name": `Stack - JS`,
														layoutDependency: I,
														layoutId: `IGmb2H77o`,
														children: [
															p(R, {
																__fromCanvasComponent:
																	!0,
																children: p(i, {
																	children: p(
																		k.h6,
																		{
																			className: `framer-styles-preset-8moxfa`,
																			"data-styles-preset": `NqfjhJTm6`,
																			style: {
																				"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																			},
																			children: `Our Stack`,
																		},
																	),
																}),
																className: `framer-vhrigk`,
																fonts: [
																	`Inter`,
																],
																layoutDependency:
																	I,
																layoutId: `MXm_kaqFJ`,
																style: {
																	"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																	"--framer-paragraph-spacing": `0px`,
																},
																text: g,
																transformTemplate:
																	Md,
																verticalAlignment: `top`,
																withExternalLayout:
																	!0,
															}),
															p(Z, {
																children: p(H, {
																	className: `framer-1segggm-container`,
																	isAuthoredByUser:
																		!0,
																	layoutDependency:
																		I,
																	layoutId: `V2yJvt_lW-container`,
																	nodeId: `V2yJvt_lW`,
																	rendersWithMotion:
																		!0,
																	scopeId: `vA87PgNaQ`,
																	children: p(
																		yd,
																		{
																			bgColor: `rgb(244, 244, 244)`,
																			dragToScrub:
																				!0,
																			font: {
																				fontFamily: `"Space Mono", monospace`,
																				fontStyle: `normal`,
																				fontWeight: 400,
																			},
																			fontScale: 0.074,
																			height: `100%`,
																			id: `V2yJvt_lW`,
																			layoutId: `V2yJvt_lW`,
																			letterSpacingEm: 0,
																			scrubSensitivity: 0.003,
																			speed: 0.0058,
																			style: {
																				height: `100%`,
																				width: `100%`,
																			},
																			textColor: `rgb(0, 0, 0)`,
																			width: `100%`,
																			words: [
																				`Framer`,
																				`Design`,
																				`Figma`,
																				`Typography`,
																				`Next.js`,
																				`Balance`,
																				`Node.js`,
																				`Three.js`,
																				`React`,
																				`WebGL`,
																				`3D`,
																				`JavaScript`,
																			],
																			...Cd(
																				{
																					tVhqx8SVi:
																						{
																							fontScale: 0.068,
																						},
																				},
																				T,
																				A,
																			),
																		},
																	),
																}),
															}),
														],
													}),
												],
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
					`.framer-IaFmd.framer-a8flku, .framer-IaFmd .framer-a8flku { display: block; }`,
					`.framer-IaFmd.framer-1uquttl { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
					`.framer-IaFmd .framer-v5x0et { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 140px 40px 60px 40px; position: relative; width: 100%; }`,
					`.framer-IaFmd .framer-1ggv7xe { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 30px 0px 0px; position: relative; width: 100%; }`,
					`.framer-IaFmd .framer-13q9l6d { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-IaFmd .framer-1y3gofu { flex: none; height: auto; left: 0px; position: absolute; top: 13px; white-space: pre; width: auto; z-index: 1; }`,
					`.framer-IaFmd .framer-1f3leh3-container { flex: none; height: 48px; position: absolute; right: -67px; top: 50px; width: auto; z-index: 1; }`,
					`.framer-IaFmd .framer-w9bobr { flex: none; height: 45px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-IaFmd .framer-u75t1w { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-IaFmd .framer-vhd2ns { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 70%; }`,
					`.framer-IaFmd .framer-1si1syd { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-end; max-width: 380px; overflow: visible; padding: 0px; position: relative; width: 1px; }`,
					`.framer-IaFmd .framer-o2dijj { bottom: 0px; flex: none; height: auto; left: 50%; overflow: visible; position: absolute; width: 82%; z-index: 1; }`,
					`.framer-IaFmd .framer-a6u6x { aspect-ratio: 2.54375 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 137px); position: relative; width: 100%; }`,
					`.framer-IaFmd .framer-qlaxu0 { align-content: center; align-items: center; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 1px; }`,
					`.framer-IaFmd .framer-1679kgq { flex: none; height: auto; max-width: 500px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-IaFmd .framer-1rc9j14 { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-end; overflow: visible; padding: 10px 50px 0px 0px; position: relative; width: 30%; }`,
					`.framer-IaFmd .framer-vhrigk { flex: none; height: auto; left: 50%; position: absolute; top: -40px; white-space: pre; width: auto; z-index: 1; }`,
					`.framer-IaFmd .framer-1segggm-container { flex: none; height: 305px; position: relative; width: 100%; }`,
					`.framer-IaFmd.framer-v-13bn4gq.framer-1uquttl { width: 810px; }`,
					`.framer-IaFmd.framer-v-13bn4gq .framer-v5x0et { padding: 120px 30px 30px 30px; }`,
					`.framer-IaFmd.framer-v-13bn4gq .framer-1ggv7xe { padding: 0px 40px 0px 0px; }`,
					`.framer-IaFmd.framer-v-13bn4gq .framer-w9bobr { height: 20px; }`,
					`.framer-IaFmd.framer-v-13bn4gq .framer-u75t1w { flex-direction: column; gap: 60px; justify-content: flex-start; }`,
					`.framer-IaFmd.framer-v-13bn4gq .framer-vhd2ns { width: 100%; }`,
					`.framer-IaFmd.framer-v-13bn4gq .framer-a6u6x { height: var(--framer-aspect-ratio-supported, 138px); }`,
					`.framer-IaFmd.framer-v-13bn4gq .framer-qlaxu0 { padding: 0px 0px 0px 40px; }`,
					`.framer-IaFmd.framer-v-13bn4gq .framer-1rc9j14 { align-content: center; align-items: center; gap: 30px; padding: 50px 30px 0px 0px; width: 60%; }`,
					`.framer-IaFmd.framer-v-13bn4gq .framer-vhrigk { top: -5px; }`,
					`.framer-IaFmd.framer-v-13bn4gq .framer-1segggm-container { width: 450px; }`,
					`.framer-IaFmd.framer-v-kxw771.framer-1uquttl { width: 390px; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-v5x0et { padding: 80px 25px 30px 25px; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-1ggv7xe { align-content: flex-end; align-items: flex-end; gap: 15px; overflow: visible; padding: 0px; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-1y3gofu { left: -4px; top: 0px; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-1f3leh3-container { position: relative; right: unset; top: unset; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-w9bobr { height: 25px; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-u75t1w { flex-direction: column; gap: 30px; justify-content: flex-start; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-vhd2ns { flex-direction: column; gap: 30px; width: 100%; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-1si1syd { flex: none; width: 100%; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-a6u6x { height: var(--framer-aspect-ratio-supported, 79px); }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-qlaxu0 { flex: none; padding: 0px; width: 100%; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-1rc9j14 { align-content: center; align-items: center; gap: 40px; padding: 60px 40px 0px 0px; width: 100%; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-vhrigk { top: 10px; }`,
					`.framer-IaFmd.framer-v-kxw771 .framer-1segggm-container { width: 300px; }`,
					...Vt,
					...kt,
					...pt,
					...Tt,
					...yt,
					...On,
				],
				`framer-IaFmd`,
			)),
			(zd = Rd),
			(Rd.displayName = `Short About - Section`),
			(Rd.defaultProps = { height: 832, width: 1200 }),
			P(Rd, {
				variant: {
					options: [`yDsUBoQFy`, `LBb1scSzl`, `tVhqx8SVi`],
					optionTitles: [`Desktop - 1200`, `Tablet`, `Phone`],
					title: `Variant`,
					type: J.Enum,
				},
				rJHb064PE: {
					defaultValue: `       From strategy to launch we deliver fast, accessible sites and clear brands with Growth-driven results`,
					displayTextArea: !0,
					title: `Welcome Text`,
					type: J.String,
				},
				DAAG0VqYR: {
					defaultValue: `         We’re a senior creative digital agency focused on clarity and performance. We align strategy, brand, and web into modular systems that ship on time and scale. Our values are simplicity, accountability and measurable impact. The team is small and senior; every project has a lead for strategy, design and build. `,
					displayTextArea: !0,
					title: `Short About`,
					type: J.String,
				},
				dGuW_vCBk: {
					defaultValue: `Our Stack`,
					displayTextArea: !0,
					title: `Cloud Text`,
					type: J.String,
				},
				H5WebbGbQ: {
					defaultValue: `[MORE ABOUT]`,
					displayTextArea: !1,
					title: `Vertical Link Text`,
					type: J.String,
				},
				EvIF7w2AA: { title: `Vertical Link URL`, type: J.Link },
				ax9UfBvMl: {
					defaultValue: `[01]`,
					displayTextArea: !1,
					title: `Section Number`,
					type: J.String,
				},
				LI7feEXC0: {
					__defaultAssetReference: `data:framer/asset-reference,lb6woL5uVYj2x1tjjPMrpxnlSaA.png?originalFilename=Group+154%402x.png&width=645&height=366`,
					__vekterDefault: {
						alt: ``,
						assetReference: `data:framer/asset-reference,lb6woL5uVYj2x1tjjPMrpxnlSaA.png?originalFilename=Group+154%402x.png&width=645&height=366`,
					},
					title: `Image in About`,
					type: J.ResponsiveImage,
				},
			}),
			de(
				Rd,
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
							{
								cssFamilyName: `Space Mono`,
								source: `google`,
								style: `normal`,
								uiFamilyName: `Space Mono`,
								url: `https://fonts.gstatic.com/s/spacemono/v17/i7dPIFZifjKcF5UAWdDRUEN2RFq7AwU.woff2`,
								weight: `400`,
							},
						],
					},
					...wd,
					...Ed,
					...G(Ht),
					...G(At),
					...G(mt),
					...G(Et),
					...G(xt),
					...G(kn),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function Vd(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Hd,
	Ud,
	Wd,
	Gd,
	Kd,
	qd,
	Jd,
	Yd,
	Xd,
	Zd,
	Qd,
	$d,
	ef = e(() => {
		(y(),
			q(),
			N(),
			l(),
			Je(),
			en(),
			bn(),
			(Hd = { gS5VzDuOb: { hover: !0 } }),
			(Ud = [`gS5VzDuOb`, `sLaFe1zrq`, `NPW5ss4Tj`, `De4Ri6k8c`]),
			(Wd = `framer-2XnQe`),
			(Gd = {
				De4Ri6k8c: `framer-v-1szxls2`,
				gS5VzDuOb: `framer-v-1x1nhym`,
				NPW5ss4Tj: `framer-v-cxvwq1`,
				sLaFe1zrq: `framer-v-fg3e7j`,
			}),
			(Kd = {
				delay: 0,
				duration: 0.8,
				ease: [0.45, 0.35, 0.12, 1.04],
				type: `tween`,
			}),
			(qd = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(Jd = k.create(i)),
			(Yd = {
				"Closed - Dektop": `gS5VzDuOb`,
				"Closed - Tablet & Phone": `NPW5ss4Tj`,
				"Open - Dektop": `sLaFe1zrq`,
				"Open - Tablet & Phone": `De4Ri6k8c`,
			}),
			(Xd = ({
				answer: e,
				height: t,
				id: n,
				question: r,
				width: i,
				...a
			}) => ({
				...a,
				hY5XhO8w5: r ?? a.hY5XhO8w5 ?? `What’s the typical timeline?`,
				Qu3va2e35:
					e ??
					a.Qu3va2e35 ??
					`Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Maecenas malesuada. Praesent congue erat at massa. Fusce fermentum odio nec arcu. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
				variant: Yd[a.variant] ?? a.variant ?? `gS5VzDuOb`,
			})),
			(Zd = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Qd = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e();
					X();
					let {
							style: c,
							className: l,
							layoutId: u,
							variant: d,
							hY5XhO8w5: f,
							Qu3va2e35: m,
							...h
						} = Xd(e),
						{
							baseVariant: g,
							classNames: y,
							clearLoadingGesture: b,
							gestureHandlers: x,
							gestureVariant: C,
							isLoading: w,
							setGestureState: T,
							setVariant: E,
							variants: D,
						} = W({
							cycleOrder: Ud,
							defaultVariant: `gS5VzDuOb`,
							enabledGestures: Hd,
							ref: r,
							variant: d,
							variantClassNames: Gd,
						}),
						O = Zd(e, D),
						{ activeVariantCallback: A, delay: j } = oe(g),
						N = A(async (...e) => {
							(T({ isPressed: !1 }), E(`sLaFe1zrq`));
						}),
						P = A(async (...e) => {
							(T({ isPressed: !1 }), E(`gS5VzDuOb`));
						}),
						F = A(async (...e) => {
							(T({ isPressed: !1 }), E(`De4Ri6k8c`));
						}),
						I = A(async (...e) => {
							(T({ isPressed: !1 }), E(`NPW5ss4Tj`));
						}),
						z = U(Wd, sn, Ze, vn),
						ee = () => !![`NPW5ss4Tj`, `De4Ri6k8c`].includes(g),
						B = () => ![`NPW5ss4Tj`, `De4Ri6k8c`].includes(g),
						V = () => !![`sLaFe1zrq`, `De4Ri6k8c`].includes(g);
					return p(M, {
						id: u ?? a,
						children: p(Jd, {
							animate: D,
							initial: !1,
							children: p(qd, {
								value: Kd,
								children: v(k.div, {
									...h,
									...x,
									className: U(z, `framer-1x1nhym`, l, y),
									"data-framer-name": `Closed - Dektop`,
									"data-highlight": !0,
									layoutDependency: O,
									layoutId: `gS5VzDuOb`,
									onTap: N,
									ref: r,
									style: { ...c },
									...Vd(
										{
											"gS5VzDuOb-hover": {
												"data-framer-name": void 0,
											},
											De4Ri6k8c: {
												"data-framer-name": `Open - Tablet & Phone`,
												onTap: I,
											},
											NPW5ss4Tj: {
												"data-framer-name": `Closed - Tablet & Phone`,
												onTap: F,
											},
											sLaFe1zrq: {
												"data-framer-name": `Open - Dektop`,
												onTap: P,
											},
										},
										g,
										C,
									),
									children: [
										v(k.div, {
											className: `framer-1gpi7dr`,
											layoutDependency: O,
											layoutId: `WmUFLcbpG`,
											children: [
												p(R, {
													__fromCanvasComponent: !0,
													children: p(i, {
														children: p(k.h6, {
															className: `framer-styles-preset-f8hg8j`,
															"data-styles-preset": `IGVKsj4vh`,
															style: {
																"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
															},
															children: `What’s the typical timeline?`,
														}),
													}),
													className: `framer-15ct3q0`,
													fonts: [`Inter`],
													layoutDependency: O,
													layoutId: `jtx53SsiI`,
													style: {
														"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
														"--framer-paragraph-spacing": `0px`,
													},
													text: f,
													verticalAlignment: `top`,
													withExternalLayout: !0,
													...Vd(
														{
															De4Ri6k8c: {
																children: p(i, {
																	children: p(
																		k.h6,
																		{
																			className: `framer-styles-preset-41ki07`,
																			"data-styles-preset": `hmRgK3K6v`,
																			style: {
																				"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																			},
																			children: `What’s the typical timeline?`,
																		},
																	),
																}),
															},
															NPW5ss4Tj: {
																children: p(i, {
																	children: p(
																		k.h6,
																		{
																			className: `framer-styles-preset-41ki07`,
																			"data-styles-preset": `hmRgK3K6v`,
																			style: {
																				"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																			},
																			children: `What’s the typical timeline?`,
																		},
																	),
																}),
															},
														},
														g,
														C,
													),
												}),
												ee() &&
													p(k.div, {
														className: `framer-g6en2c`,
														"data-framer-name": `Arrow`,
														layoutDependency: O,
														layoutId: `N79ElAIeu`,
														style: { rotate: 0 },
														variants: {
															De4Ri6k8c: {
																rotate: 180,
															},
														},
														children: p(L, {
															className: `framer-12icp3x`,
															layoutDependency: O,
															layoutId: `ikekEqNJ0`,
															opacity: 1,
															requiresOverflowVisible:
																!0,
															svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 4" overflow="visible"><path d="M 0 0 L 4 4 L 8 0" fill="transparent" stroke-width="1.5" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>`,
															withExternalLayout:
																!0,
														}),
													}),
											],
										}),
										B() &&
											p(k.div, {
												className: `framer-1f60i6l`,
												"data-framer-name": `Arrow`,
												layoutDependency: O,
												layoutId: `nEumlIc2T`,
												style: { opacity: 0 },
												variants: {
													"gS5VzDuOb-hover": {
														opacity: 0.65,
													},
													sLaFe1zrq: { opacity: 1 },
												},
												children: p(L, {
													className: `framer-1mms4p6`,
													layoutDependency: O,
													layoutId: `wDqPVNguF`,
													opacity: 0.6,
													requiresOverflowVisible: !0,
													style: { opacity: 0.6 },
													svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 4" overflow="visible"><path d="M 0 0 L 4 4 L 8 0" fill="transparent" stroke-width="1.5" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */" opacity="0.6"></path></svg>`,
													variants: {
														"gS5VzDuOb-hover": {
															opacity: void 0,
														},
														sLaFe1zrq: {
															opacity: void 0,
															rotate: -180,
														},
													},
													withExternalLayout: !0,
													...Vd(
														{
															"gS5VzDuOb-hover": {
																opacity: 1,
																svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 4" overflow="visible"><path d="M 0 0 L 4 4 L 8 0" fill="transparent" stroke-width="1.5" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>`,
															},
															sLaFe1zrq: {
																opacity: 1,
																svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 8 4" overflow="visible"><path d="M 0 0 L 4 4 L 8 0" fill="transparent" stroke-width="1.5" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>`,
															},
														},
														g,
														C,
													),
												}),
											}),
										V() &&
											p(k.div, {
												className: `framer-v22y37`,
												"data-framer-name": `Spacer`,
												layoutDependency: O,
												layoutId: `zE3ChQdt_`,
											}),
										p(R, {
											__fromCanvasComponent: !0,
											children: p(i, {
												children: p(k.p, {
													className: `framer-styles-preset-11kcybb`,
													"data-styles-preset": `pPuowuywh`,
													style: {
														"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
													},
													children: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Maecenas malesuada. Praesent congue erat at massa. Fusce fermentum odio nec arcu. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
												}),
											}),
											className: `framer-1qsuzft`,
											fonts: [`Inter`],
											layoutDependency: O,
											layoutId: `amPBdZ_db`,
											style: {
												"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
												"--framer-link-text-color": `rgb(0, 153, 255)`,
												"--framer-link-text-decoration": `underline`,
												opacity: 0,
											},
											text: m,
											variants: {
												De4Ri6k8c: { opacity: 1 },
												sLaFe1zrq: { opacity: 1 },
											},
											verticalAlignment: `top`,
											withExternalLayout: !0,
										}),
										V() &&
											p(k.div, {
												className: `framer-1g468ad`,
												"data-framer-name": `Spacer`,
												layoutDependency: O,
												layoutId: `dLugUNHwV`,
											}),
										p(k.div, {
											className: `framer-xsa57j`,
											"data-framer-name": `Line`,
											layoutDependency: O,
											layoutId: `sEYBHFvFn`,
											style: {
												backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
												opacity: 0.15,
											},
										}),
									],
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-2XnQe.framer-2wrhs4, .framer-2XnQe .framer-2wrhs4 { display: block; }`,
					`.framer-2XnQe.framer-1x1nhym { align-content: flex-start; align-items: flex-start; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; min-height: 80px; overflow: visible; padding: 25px 0px 20px 0px; position: relative; width: 560px; }`,
					`.framer-2XnQe .framer-1gpi7dr { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-2XnQe .framer-15ct3q0 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
					`.framer-2XnQe .framer-g6en2c { flex: none; height: 6px; overflow: visible; position: relative; width: 12px; z-index: 1; }`,
					`.framer-2XnQe .framer-12icp3x, .framer-2XnQe .framer-1mms4p6 { height: 4px; left: 2px; position: absolute; top: 1px; width: 8px; }`,
					`.framer-2XnQe .framer-1f60i6l { flex: none; height: 6px; left: -20px; overflow: visible; position: absolute; top: 38px; width: 12px; z-index: 3; }`,
					`.framer-2XnQe .framer-v22y37 { flex: none; height: 11px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-2XnQe .framer-1qsuzft { flex: none; height: 1px; overflow: var(--overflow-clip-fallback, clip); position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-2XnQe .framer-1g468ad { flex: none; height: 21px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-2XnQe .framer-xsa57j { bottom: 0px; flex: none; height: 1px; left: calc(50.16393442622953% - 100% / 2); position: absolute; width: 100%; z-index: 1; }`,
					`.framer-2XnQe.framer-v-fg3e7j.framer-1x1nhym { gap: 5px; }`,
					`.framer-2XnQe.framer-v-fg3e7j .framer-1gpi7dr { order: 0; padding: 0px 0px 0px 25px; }`,
					`.framer-2XnQe.framer-v-fg3e7j .framer-15ct3q0, .framer-2XnQe.framer-v-cxvwq1 .framer-1gpi7dr { order: 0; }`,
					`.framer-2XnQe.framer-v-fg3e7j .framer-1f60i6l { left: 0px; order: 1; }`,
					`.framer-2XnQe.framer-v-fg3e7j .framer-v22y37 { height: 10px; order: 4; }`,
					`.framer-2XnQe.framer-v-fg3e7j .framer-1qsuzft { -webkit-user-select: none; height: auto; order: 3; user-select: none; }`,
					`.framer-2XnQe.framer-v-fg3e7j .framer-1g468ad { height: 20px; order: 2; }`,
					`.framer-2XnQe.framer-v-fg3e7j .framer-xsa57j, .framer-2XnQe.framer-v-cxvwq1 .framer-xsa57j { order: 5; }`,
					`.framer-2XnQe.framer-v-cxvwq1.framer-1x1nhym { min-height: 60px; padding: 20px 0px 19px 0px; }`,
					`.framer-2XnQe.framer-v-cxvwq1 .framer-1qsuzft { order: 3; }`,
					`.framer-2XnQe.framer-v-1szxls2.framer-1x1nhym { min-height: 60px; padding: 20px 0px 15px 0px; }`,
					`.framer-2XnQe.framer-v-1szxls2 .framer-v22y37 { height: 20px; }`,
					`.framer-2XnQe.framer-v-1szxls2 .framer-1qsuzft { height: auto; }`,
					`.framer-2XnQe.framer-v-1szxls2 .framer-1g468ad { height: 10px; }`,
					`.framer-2XnQe.framer-v-1x1nhym.hover .framer-1gpi7dr { padding: 0px 0px 0px 25px; }`,
					`.framer-2XnQe.framer-v-1x1nhym.hover .framer-1f60i6l { left: 0px; }`,
					...nn,
					...Ye,
					...fn,
				],
				`framer-2XnQe`,
			)),
			($d = Qd),
			(Qd.displayName = `FAQ - Card`),
			(Qd.defaultProps = { height: 80, width: 560 }),
			P(Qd, {
				variant: {
					options: [
						`gS5VzDuOb`,
						`sLaFe1zrq`,
						`NPW5ss4Tj`,
						`De4Ri6k8c`,
					],
					optionTitles: [
						`Closed - Dektop`,
						`Open - Dektop`,
						`Closed - Tablet & Phone`,
						`Open - Tablet & Phone`,
					],
					title: `Variant`,
					type: J.Enum,
				},
				hY5XhO8w5: {
					defaultValue: `What’s the typical timeline?`,
					displayTextArea: !0,
					title: `Question`,
					type: J.String,
				},
				Qu3va2e35: {
					defaultValue: `Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Maecenas malesuada. Praesent congue erat at massa. Fusce fermentum odio nec arcu. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
					displayTextArea: !0,
					title: `Answer`,
					type: J.String,
				},
			}),
			de(
				Qd,
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
					...G(an),
					...G(Xe),
					...G(mn),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function tf(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var nf,
	rf,
	af,
	of,
	sf,
	cf,
	lf,
	uf,
	df,
	ff,
	pf,
	mf,
	hf,
	gf = e(() => {
		(y(),
			q(),
			N(),
			l(),
			Oe(),
			en(),
			ef(),
			(nf = B($d)),
			(rf = [`DbNLhiD8V`, `clN00I6D9`, `tM7AN0qXX`]),
			(af = `framer-nqnCP`),
			(of = {
				clN00I6D9: `framer-v-12l7put`,
				DbNLhiD8V: `framer-v-1cpe7iw`,
				tM7AN0qXX: `framer-v-1ah8ho8`,
			}),
			(sf = {
				delay: 0,
				duration: 0.8,
				ease: [0.45, 0.35, 0.12, 1.04],
				type: `tween`,
			}),
			(cf = (e, t) => `translateY(-50%) ${t}`),
			(lf = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(uf = k.create(i)),
			(df = {
				Desktop: `DbNLhiD8V`,
				Phone: `tM7AN0qXX`,
				Tablet: `clN00I6D9`,
			}),
			(ff = ({
				headingOfSection: e,
				height: t,
				id: n,
				sectionNumber: r,
				width: i,
				...a
			}) => ({
				...a,
				lzdMPED3l: r ?? a.lzdMPED3l ?? `[08]`,
				variant: df[a.variant] ?? a.variant ?? `DbNLhiD8V`,
				ywNT1RT4x: e ?? a.ywNT1RT4x ?? `FAQ`,
			})),
			(pf = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(mf = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e(),
						c = X(),
						{
							style: l,
							className: u,
							layoutId: d,
							variant: f,
							ywNT1RT4x: m,
							lzdMPED3l: h,
							...g
						} = ff(e),
						{
							baseVariant: y,
							classNames: b,
							clearLoadingGesture: x,
							gestureHandlers: C,
							gestureVariant: w,
							isLoading: T,
							setGestureState: E,
							setVariant: D,
							variants: O,
						} = W({
							cycleOrder: rf,
							defaultVariant: `DbNLhiD8V`,
							ref: r,
							variant: f,
							variantClassNames: of,
						}),
						A = pf(e, O),
						j = U(af, Ne, sn);
					return p(M, {
						id: d ?? a,
						children: p(uf, {
							animate: O,
							initial: !1,
							children: p(lf, {
								value: sf,
								children: v(k.div, {
									...g,
									...C,
									className: U(j, `framer-1cpe7iw`, u, b),
									"data-framer-name": `Desktop`,
									layoutDependency: A,
									layoutId: `DbNLhiD8V`,
									ref: r,
									style: { ...l },
									...tf(
										{
											clN00I6D9: {
												"data-framer-name": `Tablet`,
											},
											tM7AN0qXX: {
												"data-framer-name": `Phone`,
											},
										},
										y,
										w,
									),
									children: [
										v(k.div, {
											className: `framer-1diubxh`,
											"data-framer-name": `Heading`,
											layoutDependency: A,
											layoutId: `P_DAzpLVk`,
											children: [
												p(R, {
													__fromCanvasComponent: !0,
													children: p(i, {
														children: p(k.h6, {
															className: `framer-styles-preset-nkm6se`,
															"data-styles-preset": `BaUGQBb6A`,
															style: {
																"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
															},
															children: `FAQ`,
														}),
													}),
													className: `framer-92awvz`,
													fonts: [`Inter`],
													layoutDependency: A,
													layoutId: `GCYsDNVXB`,
													style: {
														"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
														"--framer-paragraph-spacing": `0px`,
													},
													text: m,
													verticalAlignment: `top`,
													withExternalLayout: !0,
													...tf(
														{
															tM7AN0qXX: {
																children: p(i, {
																	children: p(
																		k.h6,
																		{
																			className: `framer-styles-preset-f8hg8j`,
																			"data-styles-preset": `IGVKsj4vh`,
																			style: {
																				"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																			},
																			children: `FAQ`,
																		},
																	),
																}),
															},
														},
														y,
														w,
													),
												}),
												p(R, {
													__fromCanvasComponent: !0,
													children: p(i, {
														children: p(k.h6, {
															className: `framer-styles-preset-nkm6se`,
															"data-styles-preset": `BaUGQBb6A`,
															style: {
																"--framer-text-alignment": `right`,
																"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
															},
															children: `[08]`,
														}),
													}),
													className: `framer-hmvcgn`,
													fonts: [`Inter`],
													layoutDependency: A,
													layoutId: `NGcu8moEE`,
													style: {
														"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
														"--framer-paragraph-spacing": `0px`,
													},
													text: h,
													transformTemplate: cf,
													verticalAlignment: `top`,
													withExternalLayout: !0,
													...tf(
														{
															tM7AN0qXX: {
																children: p(i, {
																	children: p(
																		k.h6,
																		{
																			className: `framer-styles-preset-f8hg8j`,
																			"data-styles-preset": `IGVKsj4vh`,
																			style: {
																				"--framer-text-alignment": `right`,
																				"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																			},
																			children: `[08]`,
																		},
																	),
																}),
															},
														},
														y,
														w,
													),
												}),
											],
										}),
										v(k.div, {
											className: `framer-16czpw`,
											"data-framer-name": `Content`,
											layoutDependency: A,
											layoutId: `QkbZKiUQb`,
											children: [
												p(k.div, {
													className: `framer-i5n8wz`,
													"data-framer-name": `Top Line`,
													layoutDependency: A,
													layoutId: `nerL1Cpmj`,
													style: {
														backgroundColor: `rgb(0, 0, 0)`,
													},
												}),
												p(Z, {
													height: 80,
													width: c?.width || `100vw`,
													y:
														(c?.y || 0) +
														15 +
														100 +
														0 +
														0,
													...tf(
														{
															clN00I6D9: {
																y:
																	(c?.y ||
																		0) +
																	15 +
																	90 +
																	0 +
																	0,
															},
															tM7AN0qXX: {
																y:
																	(c?.y ||
																		0) +
																	0 +
																	60 +
																	0 +
																	0,
															},
														},
														y,
														w,
													),
													children: p(H, {
														className: `framer-1oomx8i-container`,
														layoutDependency: A,
														layoutId: `gLSMp0nl1-container`,
														nodeId: `gLSMp0nl1`,
														rendersWithMotion: !0,
														scopeId: `yiIEt6mdf`,
														children: p($d, {
															height: `100%`,
															hY5XhO8w5: `What’s the typical timeline?`,
															id: `gLSMp0nl1`,
															layoutId: `gLSMp0nl1`,
															Qu3va2e35: `Every project is unique, so timelines can vary. A simple landing page might take 2-4 weeks, while a comprehensive corporate website could take 8-12 weeks. An e-commerce platform or a custom web application with complex features could take 3-6 months or more. The final timeline depends on the project's scope, complexity, and how quickly we receive feedback and content. We always provide a detailed project schedule with key milestones before we begin.`,
															style: {
																width: `100%`,
															},
															variant: `gS5VzDuOb`,
															width: `100%`,
															...tf(
																{
																	clN00I6D9: {
																		variant: `NPW5ss4Tj`,
																	},
																	tM7AN0qXX: {
																		variant: `NPW5ss4Tj`,
																	},
																},
																y,
																w,
															),
														}),
													}),
												}),
												p(Z, {
													height: 80,
													width: c?.width || `100vw`,
													y:
														(c?.y || 0) +
														15 +
														100 +
														0 +
														80,
													...tf(
														{
															clN00I6D9: {
																y:
																	(c?.y ||
																		0) +
																	15 +
																	90 +
																	0 +
																	80,
															},
															tM7AN0qXX: {
																y:
																	(c?.y ||
																		0) +
																	0 +
																	60 +
																	0 +
																	80,
															},
														},
														y,
														w,
													),
													children: p(H, {
														className: `framer-aq4uqy-container`,
														layoutDependency: A,
														layoutId: `OHWFZGTn9-container`,
														nodeId: `OHWFZGTn9`,
														rendersWithMotion: !0,
														scopeId: `yiIEt6mdf`,
														children: p($d, {
															height: `100%`,
															hY5XhO8w5: `How do you price?`,
															id: `OHWFZGTn9`,
															layoutId: `OHWFZGTn9`,
															Qu3va2e35: `Our pricing is tailored to the specific needs of each project. We don't offer one-size-fits-all packages because we believe in providing custom solutions that deliver real value. After our initial discovery call, we'll provide a detailed proposal with a full breakdown of the costs, scope of work, and timeline. Key factors that influence the price include project complexity, the number of unique page designs, custom features, and third-party integrations.`,
															style: {
																width: `100%`,
															},
															variant: `gS5VzDuOb`,
															width: `100%`,
															...tf(
																{
																	clN00I6D9: {
																		variant: `NPW5ss4Tj`,
																	},
																	tM7AN0qXX: {
																		variant: `NPW5ss4Tj`,
																	},
																},
																y,
																w,
															),
														}),
													}),
												}),
												p(Z, {
													height: 80,
													width: c?.width || `100vw`,
													y:
														(c?.y || 0) +
														15 +
														100 +
														0 +
														160,
													...tf(
														{
															clN00I6D9: {
																y:
																	(c?.y ||
																		0) +
																	15 +
																	90 +
																	0 +
																	160,
															},
															tM7AN0qXX: {
																y:
																	(c?.y ||
																		0) +
																	0 +
																	60 +
																	0 +
																	160,
															},
														},
														y,
														w,
													),
													children: p(H, {
														className: `framer-tntxi3-container`,
														layoutDependency: A,
														layoutId: `JvLoPAuF1-container`,
														nodeId: `JvLoPAuF1`,
														rendersWithMotion: !0,
														scopeId: `yiIEt6mdf`,
														children: p($d, {
															height: `100%`,
															hY5XhO8w5: `Do you develop in-house?`,
															id: `JvLoPAuF1`,
															layoutId: `JvLoPAuF1`,
															Qu3va2e35: `Yes, our entire core team of designers, developers, and project managers is in-house. This ensures seamless communication, a cohesive workflow, and complete quality control over every aspect of your project. By working together under one roof, we can collaborate efficiently to bring your vision to life and respond quickly to any challenges that may arise.`,
															style: {
																width: `100%`,
															},
															variant: `gS5VzDuOb`,
															width: `100%`,
															...tf(
																{
																	clN00I6D9: {
																		variant: `NPW5ss4Tj`,
																	},
																	tM7AN0qXX: {
																		variant: `NPW5ss4Tj`,
																	},
																},
																y,
																w,
															),
														}),
													}),
												}),
												p(Z, {
													height: 80,
													width: c?.width || `100vw`,
													y:
														(c?.y || 0) +
														15 +
														100 +
														0 +
														240,
													...tf(
														{
															clN00I6D9: {
																y:
																	(c?.y ||
																		0) +
																	15 +
																	90 +
																	0 +
																	240,
															},
															tM7AN0qXX: {
																y:
																	(c?.y ||
																		0) +
																	0 +
																	60 +
																	0 +
																	240,
															},
														},
														y,
														w,
													),
													children: p(H, {
														className: `framer-1w6dvui-container`,
														layoutDependency: A,
														layoutId: `hIPRsca8V-container`,
														nodeId: `hIPRsca8V`,
														rendersWithMotion: !0,
														scopeId: `yiIEt6mdf`,
														children: p($d, {
															height: `100%`,
															hY5XhO8w5: `Can you work with our brand team?`,
															id: `hIPRsca8V`,
															layoutId: `hIPRsca8V`,
															Qu3va2e35: `Absolutely. We view ourselves as an extension of your team and welcome collaboration with your in-house brand or marketing departments. We can work closely with them to ensure the final website is a perfect digital representation of your brand identity, adhering to all guidelines and amplifying your marketing efforts. Great things happen when our teams collaborate.`,
															style: {
																width: `100%`,
															},
															variant: `gS5VzDuOb`,
															width: `100%`,
															...tf(
																{
																	clN00I6D9: {
																		variant: `NPW5ss4Tj`,
																	},
																	tM7AN0qXX: {
																		variant: `NPW5ss4Tj`,
																	},
																},
																y,
																w,
															),
														}),
													}),
												}),
												p(Z, {
													height: 80,
													width: c?.width || `100vw`,
													y:
														(c?.y || 0) +
														15 +
														100 +
														0 +
														320,
													...tf(
														{
															clN00I6D9: {
																y:
																	(c?.y ||
																		0) +
																	15 +
																	90 +
																	0 +
																	320,
															},
															tM7AN0qXX: {
																y:
																	(c?.y ||
																		0) +
																	0 +
																	60 +
																	0 +
																	320,
															},
														},
														y,
														w,
													),
													children: p(H, {
														className: `framer-1yqdsdm-container`,
														layoutDependency: A,
														layoutId: `n_aNl8Zb4-container`,
														nodeId: `n_aNl8Zb4`,
														rendersWithMotion: !0,
														scopeId: `yiIEt6mdf`,
														children: p($d, {
															height: `100%`,
															hY5XhO8w5: `What do you need to start?`,
															id: `n_aNl8Zb4`,
															layoutId: `n_aNl8Zb4`,
															Qu3va2e35: `To get started, the best first step is a discovery call where we can discuss your goals, target audience, and vision. Ideally, you would have a project brief, any existing brand guidelines, and an idea of the content you want to include. But don't worry if you don't have everything figured out—we can help you define the project scope and strategy during our initial workshops.`,
															style: {
																width: `100%`,
															},
															variant: `gS5VzDuOb`,
															width: `100%`,
															...tf(
																{
																	clN00I6D9: {
																		variant: `NPW5ss4Tj`,
																	},
																	tM7AN0qXX: {
																		variant: `NPW5ss4Tj`,
																	},
																},
																y,
																w,
															),
														}),
													}),
												}),
												p(Z, {
													height: 80,
													width: c?.width || `100vw`,
													y:
														(c?.y || 0) +
														15 +
														100 +
														0 +
														400,
													...tf(
														{
															clN00I6D9: {
																y:
																	(c?.y ||
																		0) +
																	15 +
																	90 +
																	0 +
																	400,
															},
															tM7AN0qXX: {
																y:
																	(c?.y ||
																		0) +
																	0 +
																	60 +
																	0 +
																	400,
															},
														},
														y,
														w,
													),
													children: p(H, {
														className: `framer-1hgv7d9-container`,
														layoutDependency: A,
														layoutId: `W6wXtrdbP-container`,
														nodeId: `W6wXtrdbP`,
														rendersWithMotion: !0,
														scopeId: `yiIEt6mdf`,
														children: p($d, {
															height: `100%`,
															hY5XhO8w5: `Do you support after launch?`,
															id: `W6wXtrdbP`,
															layoutId: `W6wXtrdbP`,
															Qu3va2e35: `Yes, we believe in building long-term partnerships. After your website goes live, we offer a range of ongoing support and maintenance packages to ensure it remains secure, fast, and up-to-date. Our services include technical support, security monitoring, regular backups, and retainers for content updates or new feature development.`,
															style: {
																width: `100%`,
															},
															variant: `gS5VzDuOb`,
															width: `100%`,
															...tf(
																{
																	clN00I6D9: {
																		variant: `NPW5ss4Tj`,
																	},
																	tM7AN0qXX: {
																		variant: `NPW5ss4Tj`,
																	},
																},
																y,
																w,
															),
														}),
													}),
												}),
												p(Z, {
													height: 80,
													width: c?.width || `100vw`,
													y:
														(c?.y || 0) +
														15 +
														100 +
														0 +
														480,
													...tf(
														{
															clN00I6D9: {
																y:
																	(c?.y ||
																		0) +
																	15 +
																	90 +
																	0 +
																	480,
															},
															tM7AN0qXX: {
																y:
																	(c?.y ||
																		0) +
																	0 +
																	60 +
																	0 +
																	480,
															},
														},
														y,
														w,
													),
													children: p(H, {
														className: `framer-conh9e-container`,
														layoutDependency: A,
														layoutId: `tA1HBw28K-container`,
														nodeId: `tA1HBw28K`,
														rendersWithMotion: !0,
														scopeId: `yiIEt6mdf`,
														children: p($d, {
															height: `100%`,
															hY5XhO8w5: `How do we measure success?`,
															id: `tA1HBw28K`,
															layoutId: `tA1HBw28K`,
															Qu3va2e35: `Success is measured against the goals we define together at the start of the project. We focus on tangible Key Performance Indicators (KPIs) that matter to your business. This could include metrics like conversion rates, lead generation, user engagement, bounce rate, or online sales. We integrate analytics tools like Google Analytics to track performance and provide you with regular reports, ensuring your new website delivers a measurable return on investment.`,
															style: {
																width: `100%`,
															},
															variant: `gS5VzDuOb`,
															width: `100%`,
															...tf(
																{
																	clN00I6D9: {
																		variant: `NPW5ss4Tj`,
																	},
																	tM7AN0qXX: {
																		variant: `NPW5ss4Tj`,
																	},
																},
																y,
																w,
															),
														}),
													}),
												}),
											],
										}),
									],
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-nqnCP.framer-1ugkxw1, .framer-nqnCP .framer-1ugkxw1 { display: block; }`,
					`.framer-nqnCP.framer-1cpe7iw { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 70px; height: min-content; justify-content: flex-start; padding: 15px 0px 0px 0px; position: relative; width: 560px; }`,
					`.framer-nqnCP .framer-1diubxh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-nqnCP .framer-92awvz { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					`.framer-nqnCP .framer-hmvcgn { flex: none; height: auto; position: absolute; right: -6px; top: 50%; white-space: pre; width: auto; z-index: 1; }`,
					`.framer-nqnCP .framer-16czpw { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-nqnCP .framer-i5n8wz { flex: none; height: 2px; left: calc(50.06518904823992% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 1; }`,
					`.framer-nqnCP .framer-1oomx8i-container, .framer-nqnCP .framer-aq4uqy-container, .framer-nqnCP .framer-tntxi3-container, .framer-nqnCP .framer-1w6dvui-container, .framer-nqnCP .framer-1yqdsdm-container, .framer-nqnCP .framer-1hgv7d9-container, .framer-nqnCP .framer-conh9e-container { flex: none; height: auto; position: relative; width: 100%; }`,
					`.framer-nqnCP.framer-v-12l7put.framer-1cpe7iw { gap: 60px; }`,
					`.framer-nqnCP.framer-v-12l7put .framer-hmvcgn { right: -7px; }`,
					`.framer-nqnCP.framer-v-1ah8ho8.framer-1cpe7iw { gap: 30px; padding: 0px; width: 360px; }`,
					...ke,
					...nn,
				],
				`framer-nqnCP`,
			)),
			(hf = mf),
			(mf.displayName = `FAQ - Widget`),
			(mf.defaultProps = { height: 675, width: 560 }),
			P(mf, {
				variant: {
					options: [`DbNLhiD8V`, `clN00I6D9`, `tM7AN0qXX`],
					optionTitles: [`Desktop`, `Tablet`, `Phone`],
					title: `Variant`,
					type: J.Enum,
				},
				ywNT1RT4x: {
					defaultValue: `FAQ`,
					displayTextArea: !1,
					title: `Heading of Section`,
					type: J.String,
				},
				lzdMPED3l: {
					defaultValue: `[08]`,
					displayTextArea: !1,
					title: `Section Number`,
					type: J.String,
				},
			}),
			de(
				mf,
				[
					{
						explicitInter: !0,
						fonts: [
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
								url: `../fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
								url: `../fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+1F00-1FFF`,
								url: `../fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0370-03FF`,
								url: `../fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
								url: `../fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
								url: `../fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
								url: `../fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
								weight: `400`,
							},
						],
					},
					...nf,
					...G(je),
					...G(an),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function _f(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var vf,
	yf,
	bf,
	xf,
	Sf,
	Cf,
	wf,
	Tf,
	Ef,
	Df,
	Of,
	kf,
	Af,
	jf = e(() => {
		(y(),
			q(),
			N(),
			l(),
			yn(),
			gf(),
			(vf = B(hf)),
			(yf = B(hn)),
			(bf = [`XOO4g1eJ2`, `ptktdtr8e`, `p916nDvLq`]),
			(xf = `framer-6nMyY`),
			(Sf = {
				p916nDvLq: `framer-v-hwblyq`,
				ptktdtr8e: `framer-v-jlc595`,
				XOO4g1eJ2: `framer-v-1jprlzd`,
			}),
			(Cf = {
				delay: 0,
				duration: 0.8,
				ease: [0.45, 0.35, 0.12, 1.04],
				type: `tween`,
			}),
			(wf = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(Tf = k.create(i)),
			(Ef = {
				"Desktop - 1200": `XOO4g1eJ2`,
				Phone: `p916nDvLq`,
				Tablet: `ptktdtr8e`,
			}),
			(Df = ({ height: e, id: t, width: n, ...r }) => ({
				...r,
				variant: Ef[r.variant] ?? r.variant ?? `XOO4g1eJ2`,
			})),
			(Of = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(kf = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						i = S(),
						{ activeLocale: a, setLocale: o } = _e(),
						s = X(),
						{
							style: c,
							className: l,
							layoutId: u,
							variant: d,
							...f
						} = Df(e),
						{
							baseVariant: m,
							classNames: h,
							clearLoadingGesture: g,
							gestureHandlers: y,
							gestureVariant: b,
							isLoading: x,
							setGestureState: C,
							setVariant: w,
							variants: T,
						} = W({
							cycleOrder: bf,
							defaultVariant: `XOO4g1eJ2`,
							ref: r,
							variant: d,
							variantClassNames: Sf,
						}),
						E = Of(e, T),
						D = U(xf);
					return p(M, {
						id: u ?? i,
						children: p(Tf, {
							animate: T,
							initial: !1,
							children: p(wf, {
								value: Cf,
								children: p(k.section, {
									...f,
									...y,
									className: U(D, `framer-1jprlzd`, l, h),
									"data-framer-name": `Desktop - 1200`,
									layoutDependency: E,
									layoutId: `XOO4g1eJ2`,
									ref: r,
									style: { ...c },
									..._f(
										{
											p916nDvLq: {
												"data-framer-name": `Phone`,
											},
											ptktdtr8e: {
												"data-framer-name": `Tablet`,
											},
										},
										m,
										b,
									),
									children: p(k.div, {
										className: `framer-1bwewhu`,
										"data-framer-name": `Container`,
										layoutDependency: E,
										layoutId: `ev33zp7LE`,
										children: v(k.div, {
											className: `framer-1x6n9is`,
											layoutDependency: E,
											layoutId: `RVCoitUnO`,
											children: [
												p(Z, {
													height: 675,
													width: `max((min(${s?.width || `100vw`}, 1600px) - 150px) / 2, 50px)`,
													y:
														(s?.y || 0) +
														0 +
														(((s?.height || 904) -
															0 -
															876) /
															2 +
															0 +
															0) +
														90 +
														0 +
														0 +
														0,
													..._f(
														{
															p916nDvLq: {
																width: `max(min(${s?.width || `100vw`}, 1600px) - 50px, 50px)`,
																y:
																	(s?.y ||
																		0) +
																	0 +
																	(((s?.height ||
																		200) -
																		0 -
																		1521) /
																		2 +
																		0 +
																		0) +
																	40 +
																	0 +
																	0 +
																	0,
															},
															ptktdtr8e: {
																width: `max((min(${s?.width || `100vw`}, 1600px) - 130px) / 2, 50px)`,
																y:
																	(s?.y ||
																		0) +
																	0 +
																	(((s?.height ||
																		757) -
																		0 -
																		816) /
																		2 +
																		0 +
																		0) +
																	60 +
																	0 +
																	0 +
																	0,
															},
														},
														m,
														b,
													),
													children: p(H, {
														className: `framer-fnta36-container`,
														layoutDependency: E,
														layoutId: `Xp2eOTsYc-container`,
														nodeId: `Xp2eOTsYc`,
														rendersWithMotion: !0,
														scopeId: `yaX61cjU2`,
														children: p(hf, {
															height: `100%`,
															id: `Xp2eOTsYc`,
															layoutId: `Xp2eOTsYc`,
															lzdMPED3l: `[08]`,
															style: {
																width: `100%`,
															},
															variant: `DbNLhiD8V`,
															width: `100%`,
															ywNT1RT4x: `FAQ`,
															..._f(
																{
																	p916nDvLq: {
																		variant: `tM7AN0qXX`,
																	},
																	ptktdtr8e: {
																		variant: `clN00I6D9`,
																	},
																},
																m,
																b,
															),
														}),
													}),
												}),
												p(Z, {
													height: 696,
													width: `max((min(${s?.width || `100vw`}, 1600px) - 150px) / 2, 50px)`,
													y:
														(s?.y || 0) +
														0 +
														(((s?.height || 904) -
															0 -
															876) /
															2 +
															0 +
															0) +
														90 +
														0 +
														0 +
														0,
													..._f(
														{
															p916nDvLq: {
																width: `max(min(${s?.width || `100vw`}, 1600px) - 50px, 50px)`,
																y:
																	(s?.y ||
																		0) +
																	0 +
																	(((s?.height ||
																		200) -
																		0 -
																		1521) /
																		2 +
																		0 +
																		0) +
																	40 +
																	0 +
																	0 +
																	745,
															},
															ptktdtr8e: {
																width: `max((min(${s?.width || `100vw`}, 1600px) - 130px) / 2, 50px)`,
																y:
																	(s?.y ||
																		0) +
																	0 +
																	(((s?.height ||
																		757) -
																		0 -
																		816) /
																		2 +
																		0 +
																		0) +
																	60 +
																	0 +
																	0 +
																	0,
															},
														},
														m,
														b,
													),
													children: p(H, {
														className: `framer-79mvfn-container`,
														layoutDependency: E,
														layoutId: `rDqoUk1Ms-container`,
														nodeId: `rDqoUk1Ms`,
														rendersWithMotion: !0,
														scopeId: `yaX61cjU2`,
														children: p(hn, {
															cc8E3AgTV: !1,
															height: `100%`,
															id: `rDqoUk1Ms`,
															K7wJlYzkm: `Tell to our manager about the goal.
We’ll reply with scope and timeline.`,
															layoutId: `rDqoUk1Ms`,
															mq81hiP1W: `Kate
Wilington`,
															style: {
																height: `100%`,
																width: `100%`,
															},
															variant: `eYkSQJiay`,
															width: `100%`,
															WwskM11_4: `Start
a Project`,
															..._f(
																{
																	p916nDvLq: {
																		variant: `qjW9xYlwK`,
																	},
																	ptktdtr8e: {
																		variant: `kke4loMus`,
																	},
																},
																m,
																b,
															),
														}),
													}),
												}),
											],
										}),
									}),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-6nMyY.framer-qaypg6, .framer-6nMyY .framer-qaypg6 { display: block; }`,
					`.framer-6nMyY.framer-1jprlzd { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
					`.framer-6nMyY .framer-1bwewhu { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 90px 40px 90px 40px; position: relative; width: 100%; }`,
					`.framer-6nMyY .framer-1x6n9is { display: grid; flex: none; gap: 0px 70px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-6nMyY .framer-fnta36-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
					`.framer-6nMyY .framer-79mvfn-container { align-self: start; flex: none; height: 100%; justify-self: end; position: relative; width: 100%; }`,
					`.framer-6nMyY.framer-v-jlc595.framer-1jprlzd { width: 810px; }`,
					`.framer-6nMyY.framer-v-jlc595 .framer-1bwewhu { padding: 60px 30px 60px 30px; }`,
					`.framer-6nMyY.framer-v-hwblyq.framer-1jprlzd { width: 390px; }`,
					`.framer-6nMyY.framer-v-hwblyq .framer-1bwewhu { padding: 40px 25px 40px 25px; }`,
					`.framer-6nMyY.framer-v-hwblyq .framer-1x6n9is { gap: 70px 0px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }`,
				],
				`framer-6nMyY`,
			)),
			(Af = kf),
			(kf.displayName = `FAQ & CTA - Section`),
			(kf.defaultProps = { height: 904, width: 1200 }),
			P(kf, {
				variant: {
					options: [`XOO4g1eJ2`, `ptktdtr8e`, `p916nDvLq`],
					optionTitles: [`Desktop - 1200`, `Tablet`, `Phone`],
					title: `Variant`,
					type: J.Enum,
				},
			}),
			de(kf, [{ explicitInter: !0, fonts: [] }, ...vf, ...yf], {
				supportsExplicitInterCodegen: !0,
			}));
	});
function Mf(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Nf,
	Pf,
	Ff,
	If,
	Lf,
	Rf,
	zf,
	Bf,
	Vf,
	Hf,
	Uf,
	Wf,
	Gf,
	Kf,
	qf = e(() => {
		(y(),
			q(),
			N(),
			l(),
			We(),
			Ln(),
			(Nf = { td0vABXtP: { hover: !0 } }),
			(Pf = [`td0vABXtP`, `sgY9pM7ej`, `zPFlJlWOv`]),
			(Ff = `framer-OuU1b`),
			(If = {
				sgY9pM7ej: `framer-v-eklj6q`,
				td0vABXtP: `framer-v-1lxb0kk`,
				zPFlJlWOv: `framer-v-urdaix`,
			}),
			(Lf = {
				delay: 0,
				duration: 0.7,
				ease: [0, 0.29, 0.18, 1.07],
				type: `tween`,
			}),
			(Rf = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(zf = (e, t) => `translateX(-50%) ${t}`),
			(Bf = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(Vf = k.create(i)),
			(Hf = {
				"Desktop - 1200": `td0vABXtP`,
				Phone: `zPFlJlWOv`,
				Tablet: `sgY9pM7ej`,
			}),
			(Uf = ({
				height: e,
				id: t,
				imageLeft1: n,
				imageLeft2: r,
				link: i,
				photoOfManager: a,
				textInButton: o,
				width: s,
				...c
			}) => ({
				...c,
				IyEnpMJn_: n ??
					c.IyEnpMJn_ ?? {
						alt: ``,
						pixelHeight: 356,
						pixelWidth: 356,
						src: `https://framerusercontent.com/images/sBQL5XuNYFmQDOH3Af1fncon8o.png?width=356&height=356`,
					},
				pN1QHQjCf: a ??
					c.pN1QHQjCf ?? {
						alt: ``,
						pixelHeight: 404,
						pixelWidth: 372,
						src: `https://framerusercontent.com/images/p7oB50p8WqXZT97Rllw62Pfl8IM.png?width=372&height=404`,
					},
				V89JRwCvI: o ?? c.V89JRwCvI ?? `Contact our manager`,
				variant: Hf[c.variant] ?? c.variant ?? `td0vABXtP`,
				voZT7kFsz: r ??
					c.voZT7kFsz ?? {
						alt: ``,
						pixelHeight: 288,
						pixelWidth: 289,
						src: `https://framerusercontent.com/images/BijWSeC9c8hXz4aAcuCOPEuJvw.png?width=289&height=288`,
					},
				w7nSV5d6G: i ?? c.w7nSV5d6G,
			})),
			(Wf = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Gf = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e(),
						c = X(),
						{
							style: l,
							className: u,
							layoutId: d,
							variant: f,
							w7nSV5d6G: m,
							V89JRwCvI: h,
							IyEnpMJn_: g,
							voZT7kFsz: y,
							pN1QHQjCf: b,
							...x
						} = Uf(e),
						{
							baseVariant: C,
							classNames: w,
							clearLoadingGesture: T,
							gestureHandlers: E,
							gestureVariant: D,
							isLoading: O,
							setGestureState: A,
							setVariant: j,
							variants: N,
						} = W({
							cycleOrder: Pf,
							defaultVariant: `td0vABXtP`,
							enabledGestures: Nf,
							ref: r,
							variant: f,
							variantClassNames: If,
						}),
						P = Wf(e, N),
						F = U(Ff, Bn, Ge);
					return p(M, {
						id: d ?? a,
						children: p(Vf, {
							animate: N,
							initial: !1,
							children: p(Bf, {
								value: Lf,
								children: p(ce, {
									href: m,
									motionChild: !0,
									nodeId: `td0vABXtP`,
									openInNewTab: !1,
									scopeId: `nNEbukwW5`,
									smoothScroll: !0,
									children: v(k.a, {
										...x,
										...E,
										className: `${U(F, `framer-1lxb0kk`, u, w)} framer-3zbxli`,
										"data-framer-name": `Desktop - 1200`,
										layoutDependency: P,
										layoutId: `td0vABXtP`,
										ref: r,
										style: {
											backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
											borderBottomLeftRadius: 8,
											borderBottomRightRadius: 8,
											borderTopLeftRadius: 8,
											borderTopRightRadius: 8,
											...l,
										},
										variants: {
											"td0vABXtP-hover": {
												backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
											},
										},
										...Mf(
											{
												"td0vABXtP-hover": {
													"data-framer-name": void 0,
												},
												sgY9pM7ej: {
													"data-framer-name": `Tablet`,
												},
												zPFlJlWOv: {
													"data-framer-name": `Phone`,
												},
											},
											C,
											D,
										),
										children: [
											p(R, {
												__fromCanvasComponent: !0,
												children: p(i, {
													children: p(k.p, {
														className: `framer-styles-preset-xbh3jg`,
														"data-styles-preset": `y9BUDaD1i`,
														style: {
															"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
														},
														children: `Contact our manager`,
													}),
												}),
												className: `framer-1of1xsj`,
												"data-framer-name": `Contact our manager`,
												fonts: [`Inter`],
												layoutDependency: P,
												layoutId: `T9qsUu7bE`,
												style: {
													"--extracted-r6o4lv": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													"--framer-paragraph-spacing": `0px`,
												},
												text: h,
												verticalAlignment: `top`,
												withExternalLayout: !0,
												...Mf(
													{
														sgY9pM7ej: {
															children: p(i, {
																children: p(
																	k.p,
																	{
																		className: `framer-styles-preset-xbh3jg`,
																		"data-styles-preset": `y9BUDaD1i`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `Contact our Manager`,
																	},
																),
															}),
														},
														zPFlJlWOv: {
															children: p(i, {
																children: p(
																	k.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-alignment": `left`,
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `Contact our manager`,
																	},
																),
															}),
														},
													},
													C,
													D,
												),
											}),
											v(k.div, {
												className: `framer-cbfy0m`,
												"data-framer-name": `Images`,
												layoutDependency: P,
												layoutId: `wqjbCkgx6`,
												children: [
													p(se, {
														background: {
															alt: ``,
															fit: `stretch`,
															loading: K(
																(c?.y || 0) +
																	0 +
																	-32,
															),
															pixelHeight: 356,
															pixelWidth: 356,
															sizes: `88px`,
															...Rf(g),
															positionX: `center`,
															positionY: `center`,
														},
														className: `framer-103s5gp`,
														"data-framer-name": `Phone`,
														layoutDependency: P,
														layoutId: `QfkQMrHSo`,
														transformTemplate: zf,
														...Mf(
															{
																"td0vABXtP-hover":
																	{
																		background:
																			{
																				alt: ``,
																				fit: `stretch`,
																				loading:
																					K(
																						(c?.y ||
																							0) +
																							0 +
																							-37,
																					),
																				pixelHeight: 356,
																				pixelWidth: 356,
																				sizes: `88px`,
																				...Rf(
																					g,
																				),
																				positionX: `center`,
																				positionY: `center`,
																			},
																	},
																sgY9pM7ej: {
																	background:
																		{
																			alt: ``,
																			fit: `stretch`,
																			loading:
																				K(
																					(c?.y ||
																						0) +
																						0 +
																						-31,
																				),
																			pixelHeight: 356,
																			pixelWidth: 356,
																			sizes: `78px`,
																			...Rf(
																				g,
																			),
																			positionX: `center`,
																			positionY: `center`,
																		},
																	transformTemplate:
																		void 0,
																},
																zPFlJlWOv: {
																	background:
																		{
																			alt: ``,
																			fit: `stretch`,
																			loading:
																				K(
																					(c?.y ||
																						0) +
																						(c?.height ||
																							75) -
																						75 +
																						-19,
																				),
																			pixelHeight: 356,
																			pixelWidth: 356,
																			sizes: `56px`,
																			...Rf(
																				g,
																			),
																			positionX: `center`,
																			positionY: `center`,
																		},
																	transformTemplate:
																		void 0,
																},
															},
															C,
															D,
														),
													}),
													p(se, {
														background: {
															alt: ``,
															fit: `stretch`,
															loading: K(
																(c?.y || 0) +
																	0 +
																	((c?.height ||
																		85) -
																		0) -
																	101,
															),
															pixelHeight: 404,
															pixelWidth: 372,
															sizes: `93px`,
															...Rf(b),
															positionX: `center`,
															positionY: `center`,
														},
														className: `framer-d2fngp`,
														"data-framer-name": `Manager`,
														fitImageDimension: `width`,
														layoutDependency: P,
														layoutId: `twiKj4ban`,
														transformTemplate: zf,
														...Mf(
															{
																sgY9pM7ej: {
																	background:
																		{
																			alt: ``,
																			fit: `stretch`,
																			loading:
																				K(
																					(c?.y ||
																						0) +
																						0 +
																						((c?.height ||
																							75) -
																							0) -
																						95.5,
																				),
																			pixelHeight: 404,
																			pixelWidth: 372,
																			sizes: `87.9356px`,
																			...Rf(
																				b,
																			),
																			positionX: `center`,
																			positionY: `center`,
																		},
																	transformTemplate:
																		void 0,
																},
																zPFlJlWOv: {
																	background:
																		{
																			alt: ``,
																			fit: `stretch`,
																			loading:
																				K(
																					(c?.y ||
																						0) +
																						(c?.height ||
																							75) -
																						75 +
																						75 -
																						85,
																				),
																			pixelHeight: 404,
																			pixelWidth: 372,
																			sizes: `78.2673px`,
																			...Rf(
																				b,
																			),
																			positionX: `center`,
																			positionY: `center`,
																		},
																},
															},
															C,
															D,
														),
													}),
													p(se, {
														background: {
															alt: ``,
															fit: `fit`,
															loading: K(
																(c?.y || 0) +
																	0 +
																	((c?.height ||
																		85) -
																		0) -
																	36,
															),
															pixelHeight: 288,
															pixelWidth: 289,
															sizes: `55px`,
															...Rf(y),
															positionX: `center`,
															positionY: `center`,
														},
														className: `framer-wjhhfl`,
														"data-framer-name": `Email`,
														layoutDependency: P,
														layoutId: `HHBAIp9oe`,
														transformTemplate: zf,
														...Mf(
															{
																"td0vABXtP-hover":
																	{
																		background:
																			{
																				alt: ``,
																				fit: `fit`,
																				loading:
																					K(
																						(c?.y ||
																							0) +
																							0 +
																							((c?.height ||
																								85) -
																								0) -
																							26,
																					),
																				pixelHeight: 288,
																				pixelWidth: 289,
																				sizes: `55px`,
																				...Rf(
																					y,
																				),
																				positionX: `center`,
																				positionY: `center`,
																			},
																	},
																sgY9pM7ej: {
																	background:
																		{
																			alt: ``,
																			fit: `fit`,
																			loading:
																				K(
																					(c?.y ||
																						0) +
																						0 +
																						((c?.height ||
																							75) -
																							0) -
																						27,
																				),
																			pixelHeight: 288,
																			pixelWidth: 289,
																			sizes: `51px`,
																			...Rf(
																				y,
																			),
																			positionX: `center`,
																			positionY: `center`,
																		},
																},
																zPFlJlWOv: {
																	background:
																		{
																			alt: ``,
																			fit: `fit`,
																			loading:
																				K(
																					(c?.y ||
																						0) +
																						(c?.height ||
																							75) -
																						75 +
																						75 -
																						39,
																				),
																			pixelHeight: 288,
																			pixelWidth: 289,
																			sizes: `51px`,
																			...Rf(
																				y,
																			),
																			positionX: `center`,
																			positionY: `center`,
																		},
																	transformTemplate:
																		void 0,
																},
															},
															C,
															D,
														),
													}),
												],
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
					`.framer-OuU1b.framer-3zbxli, .framer-OuU1b .framer-3zbxli { display: block; }`,
					`.framer-OuU1b.framer-1lxb0kk { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 85px; justify-content: center; overflow: visible; padding: 0px; position: relative; text-decoration: none; width: 800px; }`,
					`.framer-OuU1b .framer-1of1xsj { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; z-index: 5; }`,
					`.framer-OuU1b .framer-cbfy0m { align-content: flex-end; align-items: flex-end; bottom: 0px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; justify-content: center; left: calc(50.00000000000002% - 80% / 2); overflow: visible; padding: 0px; position: absolute; top: 0px; width: 80%; z-index: 4; }`,
					`.framer-OuU1b .framer-103s5gp { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 88px); left: 32%; position: absolute; top: -32px; width: 88px; z-index: 1; }`,
					`.framer-OuU1b .framer-d2fngp { bottom: 0px; flex: none; height: 101px; left: 70%; position: absolute; width: auto; z-index: 1; }`,
					`.framer-OuU1b .framer-wjhhfl { aspect-ratio: 1 / 1; bottom: -19px; flex: none; height: var(--framer-aspect-ratio-supported, 55px); left: 34%; position: absolute; width: 55px; z-index: 1; }`,
					`.framer-OuU1b.framer-v-eklj6q.framer-1lxb0kk { cursor: unset; height: 75px; width: 500px; }`,
					`.framer-OuU1b.framer-v-eklj6q .framer-103s5gp { height: var(--framer-aspect-ratio-supported, 78px); left: 42px; order: 0; top: -31px; width: 78px; }`,
					`.framer-OuU1b.framer-v-eklj6q .framer-d2fngp { height: 96px; left: unset; order: 2; right: 30px; }`,
					`.framer-OuU1b.framer-v-eklj6q .framer-wjhhfl { bottom: -24px; height: var(--framer-aspect-ratio-supported, 51px); left: 22%; order: 1; width: 51px; }`,
					`.framer-OuU1b.framer-v-urdaix.framer-1lxb0kk { cursor: unset; height: 75px; padding: 0px 20px 0px 0px; width: 360px; }`,
					`.framer-OuU1b.framer-v-urdaix .framer-cbfy0m { height: 75px; left: calc(50.00000000000002% - 100% / 2); top: unset; width: 100%; }`,
					`.framer-OuU1b.framer-v-urdaix .framer-103s5gp { height: var(--framer-aspect-ratio-supported, 56px); left: 5px; order: 0; top: -19px; width: 56px; }`,
					`.framer-OuU1b.framer-v-urdaix .framer-d2fngp { height: 85px; left: 86%; order: 1; }`,
					`.framer-OuU1b.framer-v-urdaix .framer-wjhhfl { bottom: -12px; height: var(--framer-aspect-ratio-supported, 51px); left: 18px; order: 2; width: 51px; }`,
					`.framer-OuU1b.framer-v-1lxb0kk.hover .framer-103s5gp { left: 29%; top: -37px; }`,
					`.framer-OuU1b.framer-v-1lxb0kk.hover .framer-d2fngp { left: 72%; }`,
					`.framer-OuU1b.framer-v-1lxb0kk.hover .framer-wjhhfl { bottom: -29px; left: 32%; }`,
					...Rn,
					...Ue,
				],
				`framer-OuU1b`,
			)),
			(Kf = Gf),
			(Gf.displayName = `Button Big - Contact Our Manager`),
			(Gf.defaultProps = { height: 85, width: 800 }),
			P(Gf, {
				variant: {
					options: [`td0vABXtP`, `sgY9pM7ej`, `zPFlJlWOv`],
					optionTitles: [`Desktop - 1200`, `Tablet`, `Phone`],
					title: `Variant`,
					type: J.Enum,
				},
				w7nSV5d6G: { title: `Link`, type: J.Link },
				V89JRwCvI: {
					defaultValue: `Contact our manager`,
					displayTextArea: !1,
					title: `Text in Button`,
					type: J.String,
				},
				IyEnpMJn_: {
					__defaultAssetReference: `data:framer/asset-reference,sBQL5XuNYFmQDOH3Af1fncon8o.png?preferredSize=full&width=356&height=356`,
					__vekterDefault: {
						alt: ``,
						assetReference: `data:framer/asset-reference,sBQL5XuNYFmQDOH3Af1fncon8o.png?preferredSize=full&width=356&height=356`,
					},
					title: `Image Left 1`,
					type: J.ResponsiveImage,
				},
				voZT7kFsz: {
					__defaultAssetReference: `data:framer/asset-reference,BijWSeC9c8hXz4aAcuCOPEuJvw.png?preferredSize=full&width=289&height=288`,
					__vekterDefault: {
						alt: ``,
						assetReference: `data:framer/asset-reference,BijWSeC9c8hXz4aAcuCOPEuJvw.png?preferredSize=full&width=289&height=288`,
					},
					title: `Image Left 2`,
					type: J.ResponsiveImage,
				},
				pN1QHQjCf: {
					__defaultAssetReference: `data:framer/asset-reference,p7oB50p8WqXZT97Rllw62Pfl8IM.png?width=372&height=404`,
					__vekterDefault: {
						alt: ``,
						assetReference: `data:framer/asset-reference,p7oB50p8WqXZT97Rllw62Pfl8IM.png?width=372&height=404`,
					},
					title: `Photo of Manager`,
					type: J.ResponsiveImage,
				},
			}),
			de(
				Gf,
				[
					{
						explicitInter: !0,
						fonts: [
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
								url: `../fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
								url: `../fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+1F00-1FFF`,
								url: `../fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0370-03FF`,
								url: `../fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
								url: `../fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
								url: `../fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
								url: `../fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
								weight: `400`,
							},
						],
					},
					...G(zn),
					...G(He),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function Jf(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Yf,
	Xf,
	Zf,
	Qf,
	$f,
	ep,
	tp,
	np,
	rp,
	ip,
	ap,
	op = e(() => {
		(y(),
			q(),
			N(),
			l(),
			Pe(),
			Vn(),
			gn(),
			Kt(),
			bn(),
			jn(),
			(Yf = [`HIBZ9_8Rt`, `dYYpyaADt`, `vaZPvQuoW`, `LBDK0yOcv`]),
			(Xf = `framer-TDDbW`),
			(Zf = {
				dYYpyaADt: `framer-v-15e5yc6`,
				HIBZ9_8Rt: `framer-v-ooz597`,
				LBDK0yOcv: `framer-v-1awjty1`,
				vaZPvQuoW: `framer-v-16oh90j`,
			}),
			(Qf = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			($f = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(ep = k.create(i)),
			(tp = {
				"Left - Desktop ": `HIBZ9_8Rt`,
				"Left - Phone": `LBDK0yOcv`,
				"Left - Tablet": `vaZPvQuoW`,
				"Right - Desktop ": `dYYpyaADt`,
			}),
			(np = ({
				bottomSpacer: e,
				description: t,
				height: n,
				id: r,
				number: i,
				timeline: a,
				title: o,
				topSpacer: s,
				width: c,
				...l
			}) => ({
				...l,
				a0Sfx2xvU:
					t ??
					l.a0Sfx2xvU ??
					`We align on goals, audience, and constraints. We review analytics and current assets, run stakeholder interviews, and map risks and assumptions. The outcome is shared clarity on what success looks like.`,
				hZRf0y0WQ: o ?? l.hZRf0y0WQ ?? `Discover`,
				J36kSrKUN: e ?? l.J36kSrKUN ?? !0,
				oAlrN2aib: a ?? l.oAlrN2aib ?? `2–4 days`,
				oUHdq7Gz6: i ?? l.oUHdq7Gz6 ?? `[001]`,
				QDfo7wsI3: s ?? l.QDfo7wsI3,
				variant: tp[l.variant] ?? l.variant ?? `HIBZ9_8Rt`,
			})),
			(rp = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(ip = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e();
					X();
					let {
							style: c,
							className: l,
							layoutId: u,
							variant: d,
							hZRf0y0WQ: f,
							oUHdq7Gz6: m,
							a0Sfx2xvU: h,
							oAlrN2aib: g,
							QDfo7wsI3: y,
							J36kSrKUN: b,
							...x
						} = np(e),
						{
							baseVariant: C,
							classNames: w,
							clearLoadingGesture: T,
							gestureHandlers: E,
							gestureVariant: D,
							isLoading: O,
							setGestureState: A,
							setVariant: j,
							variants: N,
						} = W({
							cycleOrder: Yf,
							defaultVariant: `HIBZ9_8Rt`,
							ref: r,
							variant: d,
							variantClassNames: Zf,
						}),
						P = rp(e, N),
						F = U(Xf, Le, _n, Pn, Wn, vn, Yt);
					return p(M, {
						id: u ?? a,
						children: p(ep, {
							animate: N,
							initial: !1,
							children: p($f, {
								value: Qf,
								children: v(k.div, {
									...x,
									...E,
									className: U(F, `framer-ooz597`, l, w),
									"data-framer-name": `Left - Desktop `,
									layoutDependency: P,
									layoutId: `HIBZ9_8Rt`,
									ref: r,
									style: { ...c },
									...Jf(
										{
											dYYpyaADt: {
												"data-framer-name": `Right - Desktop `,
											},
											LBDK0yOcv: {
												"data-framer-name": `Left - Phone`,
											},
											vaZPvQuoW: {
												"data-framer-name": `Left - Tablet`,
											},
										},
										C,
										D,
									),
									children: [
										y &&
											p(k.div, {
												className: `framer-1qi42od`,
												"data-framer-name": `Spacer`,
												layoutDependency: P,
												layoutId: `uPvKg3HRm`,
											}),
										v(k.div, {
											className: `framer-sspnfq`,
											"data-framer-name": `Heading`,
											layoutDependency: P,
											layoutId: `ELtNLJjH6`,
											children: [
												p(R, {
													__fromCanvasComponent: !0,
													children: p(i, {
														children: p(k.p, {
															className: `framer-styles-preset-5fkg2j`,
															"data-styles-preset": `JFkcxmmKA`,
															style: {
																"--framer-text-alignment": `left`,
																"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
															},
															children: `[001]`,
														}),
													}),
													className: `framer-gtz929`,
													"data-framer-name": `[001]`,
													fonts: [`Inter`],
													layoutDependency: P,
													layoutId: `yx7Yg8Vjp`,
													style: {
														"--extracted-r6o4lv": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
														"--framer-paragraph-spacing": `0px`,
													},
													text: m,
													verticalAlignment: `top`,
													withExternalLayout: !0,
													...Jf(
														{
															dYYpyaADt: {
																children: p(i, {
																	children: p(
																		k.p,
																		{
																			className: `framer-styles-preset-5fkg2j`,
																			"data-styles-preset": `JFkcxmmKA`,
																			style: {
																				"--framer-text-alignment": `right`,
																				"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																			},
																			children: `[001]`,
																		},
																	),
																}),
															},
														},
														C,
														D,
													),
												}),
												p(R, {
													__fromCanvasComponent: !0,
													children: p(i, {
														children: p(k.h2, {
															className: `framer-styles-preset-g6dfhq`,
															"data-styles-preset": `MgmvEPIz7`,
															style: {
																"--framer-text-alignment": `left`,
																"--framer-text-color": `var(--extracted-1of0zx5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
															},
															children: `Discover`,
														}),
													}),
													className: `framer-xn020h`,
													"data-framer-name": `Discover`,
													fonts: [`Inter`],
													layoutDependency: P,
													layoutId: `lNtX0V9aH`,
													style: {
														"--extracted-1of0zx5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
														"--framer-paragraph-spacing": `0px`,
													},
													text: f,
													variants: {
														LBDK0yOcv: {
															"--extracted-1eung3n": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
														},
														vaZPvQuoW: {
															"--extracted-a0htzi": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
														},
													},
													verticalAlignment: `top`,
													withExternalLayout: !0,
													...Jf(
														{
															dYYpyaADt: {
																children: p(i, {
																	children: p(
																		k.h2,
																		{
																			className: `framer-styles-preset-g6dfhq`,
																			"data-styles-preset": `MgmvEPIz7`,
																			style: {
																				"--framer-text-alignment": `right`,
																				"--framer-text-color": `var(--extracted-1of0zx5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																			},
																			children: `Discover`,
																		},
																	),
																}),
															},
															LBDK0yOcv: {
																children: p(i, {
																	children: p(
																		k.h4,
																		{
																			className: `framer-styles-preset-1ri87jd`,
																			"data-styles-preset": `LuOKrK4j8`,
																			style: {
																				"--framer-text-color": `var(--extracted-1eung3n, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																			},
																			children: `Discover`,
																		},
																	),
																}),
															},
															vaZPvQuoW: {
																children: p(i, {
																	children: p(
																		k.h3,
																		{
																			className: `framer-styles-preset-1yuak3c`,
																			"data-styles-preset": `zczqo4Z8y`,
																			style: {
																				"--framer-text-color": `var(--extracted-a0htzi, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																			},
																			children: `Discover`,
																		},
																	),
																}),
															},
														},
														C,
														D,
													),
												}),
											],
										}),
										p(k.div, {
											className: `framer-142k4by`,
											"data-framer-name": `Spacer`,
											layoutDependency: P,
											layoutId: `tBxWBfGRi`,
										}),
										v(k.div, {
											className: `framer-1af8dsx`,
											"data-framer-name": `Text`,
											layoutDependency: P,
											layoutId: `ux4HT7hjO`,
											children: [
												p(R, {
													__fromCanvasComponent: !0,
													children: p(i, {
														children: p(k.p, {
															className: `framer-styles-preset-11kcybb`,
															"data-styles-preset": `pPuowuywh`,
															style: {
																"--framer-text-color": `var(--extracted-r6o4lv, var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7)))`,
															},
															children: `We align on goals, audience, and constraints. We review analytics and current assets, run stakeholder interviews, and map risks and assumptions. The outcome is shared clarity on what success looks like.`,
														}),
													}),
													className: `framer-1njzv24`,
													"data-framer-name": `We align on goals, audience, and constraints. We review analytics and current assets, run stakeholder interviews, and map risks and assumptions. The outcome is shared clarity on what success looks like.`,
													fonts: [`Inter`],
													layoutDependency: P,
													layoutId: `oqGklutyU`,
													style: {
														"--extracted-r6o4lv": `var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7))`,
														"--framer-paragraph-spacing": `0px`,
													},
													text: h,
													verticalAlignment: `top`,
													withExternalLayout: !0,
													...Jf(
														{
															dYYpyaADt: {
																children: p(i, {
																	children: p(
																		k.p,
																		{
																			className: `framer-styles-preset-11kcybb`,
																			"data-styles-preset": `pPuowuywh`,
																			style: {
																				"--framer-text-alignment": `right`,
																				"--framer-text-color": `var(--extracted-r6o4lv, var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7)))`,
																			},
																			children: `We align on goals, audience, and constraints. We review analytics and current assets, run stakeholder interviews, and map risks and assumptions. The outcome is shared clarity on what success looks like.`,
																		},
																	),
																}),
															},
														},
														C,
														D,
													),
												}),
												p(R, {
													__fromCanvasComponent: !0,
													children: p(i, {
														children: p(k.h6, {
															className: `framer-styles-preset-8moxfa`,
															"data-styles-preset": `NqfjhJTm6`,
															style: {
																"--framer-text-alignment": `left`,
																"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
															},
															children: `2–4 days`,
														}),
													}),
													className: `framer-f472zj`,
													"data-framer-name": `2–4 days`,
													fonts: [`Inter`],
													layoutDependency: P,
													layoutId: `jx6DiviUh`,
													style: {
														"--extracted-1w1cjl5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
														"--framer-paragraph-spacing": `0px`,
													},
													text: g,
													verticalAlignment: `top`,
													withExternalLayout: !0,
													...Jf(
														{
															dYYpyaADt: {
																children: p(i, {
																	children: p(
																		k.h6,
																		{
																			className: `framer-styles-preset-8moxfa`,
																			"data-styles-preset": `NqfjhJTm6`,
																			style: {
																				"--framer-text-alignment": `right`,
																				"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																			},
																			children: `2–4 days`,
																		},
																	),
																}),
															},
														},
														C,
														D,
													),
												}),
											],
										}),
										b &&
											p(k.div, {
												className: `framer-1u7re6j`,
												"data-framer-name": `Spacer`,
												layoutDependency: P,
												layoutId: `GP9DHqkQ3`,
											}),
									],
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-TDDbW.framer-1ifvccc, .framer-TDDbW .framer-1ifvccc { display: block; }`,
					`.framer-TDDbW.framer-ooz597 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 493px; }`,
					`.framer-TDDbW .framer-1qi42od { flex: none; height: 350px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-TDDbW .framer-sspnfq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-TDDbW .framer-gtz929, .framer-TDDbW .framer-xn020h, .framer-TDDbW .framer-f472zj { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-TDDbW .framer-142k4by { flex: none; height: 65px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-TDDbW .framer-1af8dsx { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 28px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-TDDbW .framer-1njzv24 { flex: none; height: auto; max-width: 400px; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-TDDbW .framer-1u7re6j { flex: none; height: 80px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-TDDbW.framer-v-15e5yc6 .framer-1af8dsx { align-content: flex-end; align-items: flex-end; }`,
					`.framer-TDDbW.framer-v-16oh90j .framer-142k4by { height: 35px; }`,
					`.framer-TDDbW.framer-v-1awjty1 .framer-142k4by { height: 20px; }`,
					`.framer-TDDbW.framer-v-1awjty1 .framer-1af8dsx { gap: 20px; }`,
					...Fe,
					...pn,
					...Mn,
					...Hn,
					...fn,
					...qt,
				],
				`framer-TDDbW`,
			)),
			(ap = ip),
			(ip.displayName = `Step Work - Card`),
			(ip.defaultProps = { height: 416, width: 493 }),
			P(ip, {
				variant: {
					options: [
						`HIBZ9_8Rt`,
						`dYYpyaADt`,
						`vaZPvQuoW`,
						`LBDK0yOcv`,
					],
					optionTitles: [
						`Left - Desktop `,
						`Right - Desktop `,
						`Left - Tablet`,
						`Left - Phone`,
					],
					title: `Variant`,
					type: J.Enum,
				},
				hZRf0y0WQ: {
					defaultValue: `Discover`,
					displayTextArea: !0,
					title: `Title`,
					type: J.String,
				},
				oUHdq7Gz6: {
					defaultValue: `[001]`,
					displayTextArea: !1,
					title: `Number`,
					type: J.String,
				},
				a0Sfx2xvU: {
					defaultValue: `We align on goals, audience, and constraints. We review analytics and current assets, run stakeholder interviews, and map risks and assumptions. The outcome is shared clarity on what success looks like.`,
					displayTextArea: !0,
					title: `Description`,
					type: J.String,
				},
				oAlrN2aib: {
					defaultValue: `2–4 days`,
					displayTextArea: !1,
					title: `Timeline`,
					type: J.String,
				},
				QDfo7wsI3: {
					defaultValue: !1,
					title: `Top Spacer`,
					type: J.Boolean,
				},
				J36kSrKUN: {
					defaultValue: !0,
					title: `Bottom Spacer`,
					type: J.Boolean,
				},
			}),
			de(
				ip,
				[
					{
						explicitInter: !0,
						fonts: [
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
								url: `../fonts/5vvr9Vy74if2I6bQbJvbw7SY1pQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
								url: `../fonts/EOr0mi4hNtlgWNn9if640EZzXCo.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+1F00-1FFF`,
								url: `../fonts/Y9k9QrlZAqio88Klkmbd8VoMQc.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0370-03FF`,
								url: `../fonts/OYrD2tBIBPvoJXiIHnLoOXnY9M.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
								url: `../fonts/JeYwfuaPfZHQhEG8U5gtPDZ7WQ.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
								url: `../fonts/GrgcKwrN6d3Uz8EwcLHZxwEfC4.woff2`,
								weight: `400`,
							},
							{
								family: `Inter`,
								source: `framer`,
								style: `normal`,
								unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
								url: `../fonts/b6Y37FthZeALduNqHicBT6FutY.woff2`,
								weight: `400`,
							},
						],
					},
					...G(Ie),
					...G(dn),
					...G(Nn),
					...G(Un),
					...G(mn),
					...G(Jt),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function sp(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var cp,
	lp,
	up,
	dp,
	fp,
	pp,
	mp,
	hp,
	gp,
	_p,
	vp,
	yp,
	bp,
	xp,
	Sp,
	Cp,
	wp = e(() => {
		(y(),
			q(),
			N(),
			l(),
			Fn(),
			ft(),
			wt(),
			qf(),
			op(),
			(cp = B(In)),
			(lp = B(ap)),
			(up = B(Kf)),
			(dp = [`tjnyEoAIU`, `jbmHX5nok`, `UVQ9QPaeD`]),
			(fp = `framer-KaCUQ`),
			(pp = {
				jbmHX5nok: `framer-v-puw4pf`,
				tjnyEoAIU: `framer-v-mrlkn7`,
				UVQ9QPaeD: `framer-v-clw6o6`,
			}),
			(mp = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(hp = (e, t) => `translateY(-50%) ${t}`),
			(gp = (e, t) => {
				if (!(!e || typeof e != `object`)) return { ...e, alt: t };
			}),
			(_p = ({ value: e, children: t }) => {
				let n = g(A),
					r = e ?? n.transition,
					i = o(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return p(A.Provider, { value: i, children: t });
			}),
			(vp = k.create(i)),
			(yp = {
				"Desktop - 1200": `tjnyEoAIU`,
				Phone: `UVQ9QPaeD`,
				Tablet: `jbmHX5nok`,
			}),
			(bp = ({
				headingOfSection: e,
				height: t,
				id: n,
				sectionNumber: r,
				width: i,
				...a
			}) => ({
				...a,
				FzOK0w5HB: e ?? a.FzOK0w5HB ?? `How We Work`,
				P8rztijIj: r ?? a.P8rztijIj ?? `[04]`,
				variant: yp[a.variant] ?? a.variant ?? `tjnyEoAIU`,
			})),
			(xp = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Sp = z(
				h(function (e, t) {
					let n = _(null),
						r = t ?? n,
						a = S(),
						{ activeLocale: o, setLocale: s } = _e(),
						c = X(),
						{
							style: l,
							className: u,
							layoutId: d,
							variant: f,
							FzOK0w5HB: m,
							P8rztijIj: h,
							...g
						} = bp(e),
						{
							baseVariant: y,
							classNames: b,
							clearLoadingGesture: x,
							gestureHandlers: C,
							gestureVariant: w,
							isLoading: T,
							setGestureState: E,
							setVariant: D,
							variants: O,
						} = W({
							cycleOrder: dp,
							defaultVariant: `tjnyEoAIU`,
							ref: r,
							variant: f,
							variantClassNames: pp,
						}),
						A = xp(e, O),
						j = U(fp, ht, Dt),
						N = () => y === `UVQ9QPaeD`;
					return (
						re(),
						p(M, {
							id: d ?? a,
							children: p(vp, {
								animate: O,
								initial: !1,
								children: p(_p, {
									value: mp,
									children: p(k.section, {
										...g,
										...C,
										className: U(j, `framer-mrlkn7`, u, b),
										"data-framer-name": `Desktop - 1200`,
										layoutDependency: A,
										layoutId: `tjnyEoAIU`,
										ref: r,
										style: { ...l },
										...sp(
											{
												jbmHX5nok: {
													"data-framer-name": `Tablet`,
												},
												UVQ9QPaeD: {
													"data-framer-name": `Phone`,
												},
											},
											y,
											w,
										),
										children: p(k.div, {
											className: `framer-1wg2rrc`,
											"data-framer-name": `Container`,
											layoutDependency: A,
											layoutId: `p2_bg2N8J`,
											children: p(k.div, {
												className: `framer-offvkk`,
												"data-framer-name": `Dark Block`,
												layoutDependency: A,
												layoutId: `Jpv0fpfSp`,
												style: {
													backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													borderBottomLeftRadius: 10,
													borderBottomRightRadius: 10,
													borderTopLeftRadius: 10,
													borderTopRightRadius: 10,
												},
												children: v(k.div, {
													className: `framer-18karg7`,
													"data-framer-name": `Content`,
													layoutDependency: A,
													layoutId: `ZjURA6x1s`,
													style: {
														backgroundColor: `var(--token-5943631d-b25e-4d17-8eac-40dd8ac14063, rgb(26, 26, 26))`,
														borderBottomLeftRadius: 8,
														borderBottomRightRadius: 8,
														borderTopLeftRadius: 8,
														borderTopRightRadius: 8,
													},
													children: [
														v(k.div, {
															className: `framer-riq0zg`,
															"data-framer-name": `Heading`,
															layoutDependency: A,
															layoutId: `kpctG8ynL`,
															children: [
																p(R, {
																	__fromCanvasComponent:
																		!0,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-nkm6se`,
																						"data-styles-preset": `BaUGQBb6A`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																						},
																						children: `How we work`,
																					},
																				),
																		},
																	),
																	className: `framer-l17xu3`,
																	fonts: [
																		`Inter`,
																	],
																	layoutDependency:
																		A,
																	layoutId: `sEWwVC4pt`,
																	style: {
																		"--extracted-1w1cjl5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																		"--framer-paragraph-spacing": `0px`,
																	},
																	text: m,
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																	...sp(
																		{
																			UVQ9QPaeD:
																				{
																					children:
																						p(
																							i,
																							{
																								children:
																									p(
																										k.h6,
																										{
																											className: `framer-styles-preset-f8hg8j`,
																											"data-styles-preset": `IGVKsj4vh`,
																											style: {
																												"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																											},
																											children: `How we work`,
																										},
																									),
																							},
																						),
																				},
																		},
																		y,
																		w,
																	),
																}),
																p(R, {
																	__fromCanvasComponent:
																		!0,
																	children: p(
																		i,
																		{
																			children:
																				p(
																					k.h6,
																					{
																						className: `framer-styles-preset-nkm6se`,
																						"data-styles-preset": `BaUGQBb6A`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																						},
																						children: `[04]`,
																					},
																				),
																		},
																	),
																	className: `framer-101p2du`,
																	"data-framer-name": `[02]`,
																	fonts: [
																		`Inter`,
																	],
																	layoutDependency:
																		A,
																	layoutId: `INPnN5zkw`,
																	style: {
																		"--extracted-1w1cjl5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																		"--framer-paragraph-spacing": `0px`,
																	},
																	text: h,
																	transformTemplate:
																		hp,
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																	...sp(
																		{
																			UVQ9QPaeD:
																				{
																					children:
																						p(
																							i,
																							{
																								children:
																									p(
																										k.h6,
																										{
																											className: `framer-styles-preset-f8hg8j`,
																											"data-styles-preset": `IGVKsj4vh`,
																											style: {
																												"--framer-text-alignment": `right`,
																												"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																											},
																											children: `[04]`,
																										},
																									),
																							},
																						),
																				},
																		},
																		y,
																		w,
																	),
																}),
															],
														}),
														v(k.div, {
															className: `framer-f2orl7`,
															layoutDependency: A,
															layoutId: `IzUXsvaDW`,
															children: [
																p(k.div, {
																	className: `framer-14n49c6`,
																	"data-framer-name": `3D Rotor`,
																	layoutDependency:
																		A,
																	layoutId: `Se383yVZL`,
																	children: p(
																		Z,
																		{
																			children:
																				p(
																					H,
																					{
																						className: `framer-egs7xf-container`,
																						isAuthoredByUser:
																							!0,
																						layoutDependency:
																							A,
																						layoutId: `aZ5uAgzSb-container`,
																						nodeId: `aZ5uAgzSb`,
																						rendersWithMotion:
																							!0,
																						scopeId: `YhGiHN0Sg`,
																						children:
																							p(
																								In,
																								{
																									borderRadius: 50,
																									camX: 90,
																									camY: 90,
																									camZ: -67,
																									cardColor: `rgb(235, 247, 255)`,
																									cardHeight: 250,
																									cardWidth: 250,
																									count: 4,
																									height: `100%`,
																									id: `aZ5uAgzSb`,
																									images: [
																										`https://framerusercontent.com/images/S2IVnI63QsNhoslIUkEg2cLRac.jpg?width=500&height=500`,
																										`https://framerusercontent.com/images/iuH6QoCVkOyINcIECFQTFq5ObA.jpg?width=500&height=500`,
																										`https://framerusercontent.com/images/5AvFpUR4u3sU6UoMU6MtUVbJZQ.jpg?width=500&height=500`,
																										`https://framerusercontent.com/images/qFl4cnO4pRr0RWWCqPJgGEcLzqM.jpg?width=500&height=500`,
																									],
																									imgRotateDeg:
																										-90,
																									layoutId: `aZ5uAgzSb`,
																									offsetX: 4,
																									offsetY: 125,
																									perspective: 1350,
																									speedSec: 15.25,
																									staggerMs: 3810,
																									style: {
																										height: `100%`,
																										width: `100%`,
																									},
																									width: `100%`,
																									...sp(
																										{
																											jbmHX5nok:
																												{
																													cardHeight: 170,
																													cardWidth: 170,
																												},
																											UVQ9QPaeD:
																												{
																													cardHeight: 170,
																													cardWidth: 170,
																													offsetY: 75,
																												},
																										},
																										y,
																										w,
																									),
																								},
																							),
																					},
																				),
																		},
																	),
																}),
																p(Z, {
																	height: 416,
																	width: `max((max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 300px) / 2, 50px)`,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			3332) -
																			0 -
																			2307) /
																			2 +
																			0 +
																			0) +
																		90 +
																		0 +
																		2 +
																		160 +
																		40 +
																		0 +
																		380,
																	...sp(
																		{
																			jbmHX5nok:
																				{
																					width: `calc(max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 120px, 50px) / 2)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							3068) -
																							0 -
																							3735) /
																							2 +
																							0 +
																							0) +
																						60 +
																						0 +
																						2 +
																						60 +
																						40 +
																						0 +
																						380,
																				},
																			UVQ9QPaeD:
																				{
																					width: `max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 60px, 50px)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							3725) /
																							2 +
																							0 +
																							0) +
																						40 +
																						0 +
																						2 +
																						50 +
																						40 +
																						30 +
																						330,
																				},
																		},
																		y,
																		w,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-1uc19w-container`,
																			layoutDependency:
																				A,
																			layoutId: `L4_1EHot7-container`,
																			nodeId: `L4_1EHot7`,
																			rendersWithMotion:
																				!0,
																			scopeId: `YhGiHN0Sg`,
																			children:
																				p(
																					ap,
																					{
																						a0Sfx2xvU: `We align on goals, audience, and constraints. We review analytics and current assets, run stakeholder interviews, and map risks and assumptions. The outcome is shared clarity on what success looks like.`,
																						height: `100%`,
																						hZRf0y0WQ: `Discover`,
																						id: `L4_1EHot7`,
																						J36kSrKUN:
																							!1,
																						layoutId: `L4_1EHot7`,
																						oAlrN2aib: `2–4 days`,
																						oUHdq7Gz6: `[001]`,
																						QDfo7wsI3:
																							!1,
																						style: {
																							width: `100%`,
																						},
																						variant: `HIBZ9_8Rt`,
																						width: `100%`,
																						...sp(
																							{
																								jbmHX5nok:
																									{
																										variant: `vaZPvQuoW`,
																									},
																								UVQ9QPaeD:
																									{
																										variant: `LBDK0yOcv`,
																									},
																							},
																							y,
																							w,
																						),
																					},
																				),
																		},
																	),
																}),
																N() &&
																	p(k.div, {
																		className: `framer-1y94dwt`,
																		"data-framer-name": `Line`,
																		layoutDependency:
																			A,
																		layoutId: `xAZkYHy2f`,
																		style: {
																			backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																			opacity: 0.1,
																		},
																	}),
																N() &&
																	p(k.div, {
																		className: `framer-1ch87p8`,
																		"data-framer-name": `Line`,
																		layoutDependency:
																			A,
																		layoutId: `t9ZTXjN1E`,
																		style: {
																			backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																			opacity: 0.1,
																		},
																	}),
																p(Z, {
																	height: 416,
																	width: `max((max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 300px) / 2, 50px)`,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			3332) -
																			0 -
																			2307) /
																			2 +
																			0 +
																			0) +
																		90 +
																		0 +
																		2 +
																		160 +
																		40 +
																		0 +
																		380,
																	...sp(
																		{
																			jbmHX5nok:
																				{
																					width: `calc(max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 120px, 50px) / 2)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							3068) -
																							0 -
																							3735) /
																							2 +
																							0 +
																							0) +
																						60 +
																						0 +
																						2 +
																						60 +
																						40 +
																						0 +
																						876,
																				},
																			UVQ9QPaeD:
																				{
																					width: `max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 60px, 50px)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							3725) /
																							2 +
																							0 +
																							0) +
																						40 +
																						0 +
																						2 +
																						50 +
																						40 +
																						30 +
																						847,
																				},
																		},
																		y,
																		w,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-1lo3lif-container`,
																			layoutDependency:
																				A,
																			layoutId: `MnXhjakeW-container`,
																			nodeId: `MnXhjakeW`,
																			rendersWithMotion:
																				!0,
																			scopeId: `YhGiHN0Sg`,
																			children:
																				p(
																					ap,
																					{
																						a0Sfx2xvU: `We translate goals into scope, timeline, and KPIs. We draft the roadmap, responsibilities, and the measurement plan so every step is testable. \u2028Trade-offs are explicit and documented.`,
																						height: `100%`,
																						hZRf0y0WQ: `Define`,
																						id: `MnXhjakeW`,
																						J36kSrKUN:
																							!0,
																						layoutId: `MnXhjakeW`,
																						oAlrN2aib: `2–4 days`,
																						oUHdq7Gz6: `[002]`,
																						QDfo7wsI3:
																							!0,
																						style: {
																							width: `100%`,
																						},
																						variant: `dYYpyaADt`,
																						width: `100%`,
																						...sp(
																							{
																								jbmHX5nok:
																									{
																										J36kSrKUN:
																											!1,
																										QDfo7wsI3:
																											!1,
																										variant: `vaZPvQuoW`,
																									},
																								UVQ9QPaeD:
																									{
																										J36kSrKUN:
																											!1,
																										QDfo7wsI3:
																											!1,
																										variant: `LBDK0yOcv`,
																									},
																							},
																							y,
																							w,
																						),
																					},
																				),
																		},
																	),
																}),
																N() &&
																	p(k.div, {
																		className: `framer-1cyzi0h`,
																		"data-framer-name": `Line`,
																		layoutDependency:
																			A,
																		layoutId: `YUFTBD1GB`,
																		style: {
																			backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																			opacity: 0.1,
																		},
																	}),
																p(Z, {
																	height: 416,
																	width: `max((max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 300px) / 2, 50px)`,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			3332) -
																			0 -
																			2307) /
																			2 +
																			0 +
																			0) +
																		90 +
																		0 +
																		2 +
																		160 +
																		40 +
																		0 +
																		796,
																	...sp(
																		{
																			jbmHX5nok:
																				{
																					width: `calc(max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 120px, 50px) / 2)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							3068) -
																							0 -
																							3735) /
																							2 +
																							0 +
																							0) +
																						60 +
																						0 +
																						2 +
																						60 +
																						40 +
																						0 +
																						1372,
																				},
																			UVQ9QPaeD:
																				{
																					width: `max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 60px, 50px)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							3725) /
																							2 +
																							0 +
																							0) +
																						40 +
																						0 +
																						2 +
																						50 +
																						40 +
																						30 +
																						1364,
																				},
																		},
																		y,
																		w,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-1mf7ec0-container`,
																			layoutDependency:
																				A,
																			layoutId: `lLRrT6QyA-container`,
																			nodeId: `lLRrT6QyA`,
																			rendersWithMotion:
																				!0,
																			scopeId: `YhGiHN0Sg`,
																			children:
																				p(
																					ap,
																					{
																						a0Sfx2xvU: `We explore concepts, then systematize into a modular UI and brand toolkit. Content structure, accessibility, and motion are specified so the build phase is predictable. Iterations are time-boxed with weekly reviews.`,
																						height: `100%`,
																						hZRf0y0WQ: `Design`,
																						id: `lLRrT6QyA`,
																						J36kSrKUN:
																							!1,
																						layoutId: `lLRrT6QyA`,
																						oAlrN2aib: `1–2 weeks`,
																						oUHdq7Gz6: `[003]`,
																						QDfo7wsI3:
																							!1,
																						style: {
																							width: `100%`,
																						},
																						variant: `HIBZ9_8Rt`,
																						width: `100%`,
																						...sp(
																							{
																								jbmHX5nok:
																									{
																										variant: `vaZPvQuoW`,
																									},
																								UVQ9QPaeD:
																									{
																										variant: `LBDK0yOcv`,
																									},
																							},
																							y,
																							w,
																						),
																					},
																				),
																		},
																	),
																}),
																N() &&
																	p(k.div, {
																		className: `framer-17wmt9r`,
																		"data-framer-name": `Line`,
																		layoutDependency:
																			A,
																		layoutId: `yMG4dcNKw`,
																		style: {
																			backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																			opacity: 0.1,
																		},
																	}),
																p(Z, {
																	height: 416,
																	width: `max((max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 300px) / 2, 50px)`,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			3332) -
																			0 -
																			2307) /
																			2 +
																			0 +
																			0) +
																		90 +
																		0 +
																		2 +
																		160 +
																		40 +
																		0 +
																		796,
																	...sp(
																		{
																			jbmHX5nok:
																				{
																					width: `calc(max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 120px, 50px) / 2)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							3068) -
																							0 -
																							3735) /
																							2 +
																							0 +
																							0) +
																						60 +
																						0 +
																						2 +
																						60 +
																						40 +
																						0 +
																						1868,
																				},
																			UVQ9QPaeD:
																				{
																					width: `max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 60px, 50px)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							3725) /
																							2 +
																							0 +
																							0) +
																						40 +
																						0 +
																						2 +
																						50 +
																						40 +
																						30 +
																						1881,
																				},
																		},
																		y,
																		w,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-1redhy8-container`,
																			layoutDependency:
																				A,
																			layoutId: `hwCCURnEW-container`,
																			nodeId: `hwCCURnEW`,
																			rendersWithMotion:
																				!0,
																			scopeId: `YhGiHN0Sg`,
																			children:
																				p(
																					ap,
																					{
																						a0Sfx2xvU: `We implement production-ready components, CMS schemas and integrations. Performance budgets guide choices; QA runs continuously across devices. Analytics and events are instrumented from day one.`,
																						height: `100%`,
																						hZRf0y0WQ: `Build`,
																						id: `hwCCURnEW`,
																						J36kSrKUN:
																							!0,
																						layoutId: `hwCCURnEW`,
																						oAlrN2aib: `1–2 weeks`,
																						oUHdq7Gz6: `[004]`,
																						QDfo7wsI3:
																							!0,
																						style: {
																							width: `100%`,
																						},
																						variant: `dYYpyaADt`,
																						width: `100%`,
																						...sp(
																							{
																								jbmHX5nok:
																									{
																										J36kSrKUN:
																											!1,
																										QDfo7wsI3:
																											!1,
																										variant: `vaZPvQuoW`,
																									},
																								UVQ9QPaeD:
																									{
																										J36kSrKUN:
																											!1,
																										QDfo7wsI3:
																											!1,
																										variant: `LBDK0yOcv`,
																									},
																							},
																							y,
																							w,
																						),
																					},
																				),
																		},
																	),
																}),
																N() &&
																	p(k.div, {
																		className: `framer-mek5ub`,
																		"data-framer-name": `Line`,
																		layoutDependency:
																			A,
																		layoutId: `IF5D0uxEJ`,
																		style: {
																			backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																			opacity: 0.1,
																		},
																	}),
																p(Z, {
																	height: 416,
																	width: `max((max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 300px) / 2, 50px)`,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			3332) -
																			0 -
																			2307) /
																			2 +
																			0 +
																			0) +
																		90 +
																		0 +
																		2 +
																		160 +
																		40 +
																		0 +
																		1212,
																	...sp(
																		{
																			jbmHX5nok:
																				{
																					width: `calc(max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 120px, 50px) / 2)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							3068) -
																							0 -
																							3735) /
																							2 +
																							0 +
																							0) +
																						60 +
																						0 +
																						2 +
																						60 +
																						40 +
																						0 +
																						2364,
																				},
																			UVQ9QPaeD:
																				{
																					width: `max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 60px, 50px)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							3725) /
																							2 +
																							0 +
																							0) +
																						40 +
																						0 +
																						2 +
																						50 +
																						40 +
																						30 +
																						2398,
																				},
																		},
																		y,
																		w,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-1458znq-container`,
																			layoutDependency:
																				A,
																			layoutId: `exDPckWth-container`,
																			nodeId: `exDPckWth`,
																			rendersWithMotion:
																				!0,
																			scopeId: `YhGiHN0Sg`,
																			children:
																				p(
																					ap,
																					{
																						a0Sfx2xvU: `We ship behind a checklist: QA, Core Web Vitals, redirects, tracking, and security. We monitor the first 72 hours and fix issues fast. Your team gets a short handover and edit training.`,
																						height: `100%`,
																						hZRf0y0WQ: `Launch`,
																						id: `exDPckWth`,
																						J36kSrKUN:
																							!1,
																						layoutId: `exDPckWth`,
																						oAlrN2aib: `2–4 days`,
																						oUHdq7Gz6: `[005]`,
																						QDfo7wsI3:
																							!1,
																						style: {
																							width: `100%`,
																						},
																						variant: `HIBZ9_8Rt`,
																						width: `100%`,
																						...sp(
																							{
																								jbmHX5nok:
																									{
																										variant: `vaZPvQuoW`,
																									},
																								UVQ9QPaeD:
																									{
																										variant: `LBDK0yOcv`,
																									},
																							},
																							y,
																							w,
																						),
																					},
																				),
																		},
																	),
																}),
																p(Z, {
																	height: 416,
																	width: `max((max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 300px) / 2, 50px)`,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			3332) -
																			0 -
																			2307) /
																			2 +
																			0 +
																			0) +
																		90 +
																		0 +
																		2 +
																		160 +
																		40 +
																		0 +
																		1212,
																	...sp(
																		{
																			jbmHX5nok:
																				{
																					width: `calc(max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 120px, 50px) / 2)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							3068) -
																							0 -
																							3735) /
																							2 +
																							0 +
																							0) +
																						60 +
																						0 +
																						2 +
																						60 +
																						40 +
																						0 +
																						2860,
																				},
																			UVQ9QPaeD:
																				{
																					width: `max(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 60px, 50px)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							3725) /
																							2 +
																							0 +
																							0) +
																						40 +
																						0 +
																						2 +
																						50 +
																						40 +
																						30 +
																						2915,
																				},
																		},
																		y,
																		w,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-ou8ovk-container`,
																			layoutDependency:
																				A,
																			layoutId: `lbCL0ty7c-container`,
																			nodeId: `lbCL0ty7c`,
																			rendersWithMotion:
																				!0,
																			scopeId: `YhGiHN0Sg`,
																			children:
																				p(
																					ap,
																					{
																						a0Sfx2xvU: `We run experiments against KPIs and maintain in focused sprints. Insights feed the backlog; releases are small and frequent to keep momentum.`,
																						height: `100%`,
																						hZRf0y0WQ: `Improve`,
																						id: `lbCL0ty7c`,
																						J36kSrKUN:
																							!0,
																						layoutId: `lbCL0ty7c`,
																						oAlrN2aib: `2–3 weeks`,
																						oUHdq7Gz6: `[006]`,
																						QDfo7wsI3:
																							!0,
																						style: {
																							width: `100%`,
																						},
																						variant: `dYYpyaADt`,
																						width: `100%`,
																						...sp(
																							{
																								jbmHX5nok:
																									{
																										J36kSrKUN:
																											!1,
																										QDfo7wsI3:
																											!1,
																										variant: `vaZPvQuoW`,
																									},
																								UVQ9QPaeD:
																									{
																										J36kSrKUN:
																											!1,
																										QDfo7wsI3:
																											!1,
																										variant: `LBDK0yOcv`,
																									},
																							},
																							y,
																							w,
																						),
																					},
																				),
																		},
																	),
																}),
															],
														}),
														p(k.div, {
															className: `framer-7anoff`,
															"data-framer-name": `Spacer`,
															layoutDependency: A,
															layoutId: `t_6gIg4UT`,
														}),
														p(ie, {
															links: [
																{
																	href: {
																		webPageId: `BCJD0WnMV`,
																	},
																	implicitPathVariables:
																		void 0,
																},
																{
																	href: {
																		webPageId: `BCJD0WnMV`,
																	},
																	implicitPathVariables:
																		void 0,
																},
																{
																	href: {
																		webPageId: `BCJD0WnMV`,
																	},
																	implicitPathVariables:
																		void 0,
																},
															],
															children: (e) =>
																p(Z, {
																	height: 85,
																	width: `calc(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 200px)`,
																	y:
																		(c?.y ||
																			0) +
																		0 +
																		(((c?.height ||
																			3332) -
																			0 -
																			2307) /
																			2 +
																			0 +
																			0) +
																		90 +
																		0 +
																		2 +
																		160 +
																		1718,
																	...sp(
																		{
																			jbmHX5nok:
																				{
																					height: 75,
																					width: `686px`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							3068) -
																							0 -
																							3735) /
																							2 +
																							0 +
																							0) +
																						60 +
																						0 +
																						2 +
																						60 +
																						3416,
																				},
																			UVQ9QPaeD:
																				{
																					height: 75,
																					width: `calc(max(min(${c?.width || `100vw`}, 1600px) - 4px, 1px) - 60px)`,
																					y:
																						(c?.y ||
																							0) +
																						0 +
																						(((c?.height ||
																							200) -
																							0 -
																							3725) /
																							2 +
																							0 +
																							0) +
																						40 +
																						0 +
																						2 +
																						50 +
																						3466,
																				},
																		},
																		y,
																		w,
																	),
																	children: p(
																		H,
																		{
																			className: `framer-1e14a7l-container`,
																			layoutDependency:
																				A,
																			layoutId: `beKEJC88u-container`,
																			nodeId: `beKEJC88u`,
																			rendersWithMotion:
																				!0,
																			scopeId: `YhGiHN0Sg`,
																			children:
																				p(
																					Kf,
																					{
																						height: `100%`,
																						id: `beKEJC88u`,
																						layoutId: `beKEJC88u`,
																						pN1QHQjCf:
																							gp(
																								{
																									pixelHeight: 223,
																									pixelWidth: 234,
																									src: `https://framerusercontent.com/images/2LNXYiAniIfhsviVxeWmASxL8gs.png?width=234&height=223`,
																								},
																								``,
																							),
																						style: {
																							height: `100%`,
																							width: `100%`,
																						},
																						V89JRwCvI: `Contact Manager`,
																						variant: `td0vABXtP`,
																						w7nSV5d6G:
																							e[0],
																						width: `100%`,
																						...sp(
																							{
																								jbmHX5nok:
																									{
																										variant: `sgY9pM7ej`,
																										w7nSV5d6G:
																											e[1],
																									},
																								UVQ9QPaeD:
																									{
																										variant: `zPFlJlWOv`,
																										w7nSV5d6G:
																											e[2],
																									},
																							},
																							y,
																							w,
																						),
																					},
																				),
																		},
																	),
																}),
														}),
													],
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
					`.framer-KaCUQ.framer-1tuacy1, .framer-KaCUQ .framer-1tuacy1 { display: block; }`,
					`.framer-KaCUQ.framer-mrlkn7 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
					`.framer-KaCUQ .framer-1wg2rrc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: visible; padding: 90px 0px 90px 0px; position: relative; width: 100%; }`,
					`.framer-KaCUQ .framer-offvkk { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 2px; position: relative; width: 100%; }`,
					`.framer-KaCUQ .framer-18karg7 { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 160px 100px 160px 100px; position: relative; width: 1px; }`,
					`.framer-KaCUQ .framer-riq0zg { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-KaCUQ .framer-l17xu3 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					`.framer-KaCUQ .framer-101p2du { flex: none; height: auto; position: absolute; right: -5px; top: 50%; white-space: pre; width: auto; z-index: 1; }`,
					`.framer-KaCUQ .framer-f2orl7 { display: grid; flex: none; gap: 0px 100px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(4, min-content); height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-KaCUQ .framer-14n49c6 { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; grid-column: span 2; height: 380px; justify-content: center; justify-self: center; overflow: visible; padding: 0px; position: sticky; top: 350px; width: 100%; z-index: 1; }`,
					`.framer-KaCUQ .framer-egs7xf-container { flex: none; height: 380px; position: relative; width: 400px; }`,
					`.framer-KaCUQ .framer-1uc19w-container, .framer-KaCUQ .framer-1lo3lif-container, .framer-KaCUQ .framer-1mf7ec0-container, .framer-KaCUQ .framer-1redhy8-container, .framer-KaCUQ .framer-1458znq-container, .framer-KaCUQ .framer-ou8ovk-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
					`.framer-KaCUQ .framer-1y94dwt, .framer-KaCUQ .framer-1ch87p8, .framer-KaCUQ .framer-1cyzi0h, .framer-KaCUQ .framer-17wmt9r, .framer-KaCUQ .framer-mek5ub { align-self: start; flex: none; height: 1px; justify-self: start; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-KaCUQ .framer-7anoff { flex: none; height: 30px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-KaCUQ .framer-1e14a7l-container { flex: none; height: 85px; position: relative; width: 100%; }`,
					`.framer-KaCUQ.framer-v-puw4pf.framer-mrlkn7 { width: 810px; }`,
					`.framer-KaCUQ.framer-v-puw4pf .framer-1wg2rrc { padding: 60px 0px 60px 0px; }`,
					`.framer-KaCUQ.framer-v-puw4pf .framer-18karg7 { padding: 60px; }`,
					`.framer-KaCUQ.framer-v-puw4pf .framer-f2orl7 { gap: 80px 90px; grid-template-columns: repeat(1, minmax(50px, 1fr)); }`,
					`.framer-KaCUQ.framer-v-puw4pf .framer-14n49c6 { align-content: flex-end; align-items: flex-end; grid-column: span 1; height: min-content; justify-content: flex-end; top: 300px; }`,
					`.framer-KaCUQ.framer-v-puw4pf .framer-egs7xf-container { height: 300px; width: 300px; }`,
					`.framer-KaCUQ.framer-v-puw4pf .framer-1uc19w-container, .framer-KaCUQ.framer-v-puw4pf .framer-1lo3lif-container, .framer-KaCUQ.framer-v-puw4pf .framer-1mf7ec0-container, .framer-KaCUQ.framer-v-puw4pf .framer-1redhy8-container, .framer-KaCUQ.framer-v-puw4pf .framer-1458znq-container, .framer-KaCUQ.framer-v-puw4pf .framer-ou8ovk-container { width: 50%; }`,
					`.framer-KaCUQ.framer-v-puw4pf .framer-7anoff { height: 80px; }`,
					`.framer-KaCUQ.framer-v-puw4pf .framer-1e14a7l-container { height: 75px; width: 686px; }`,
					`.framer-KaCUQ.framer-v-clw6o6.framer-mrlkn7 { width: 390px; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-1wg2rrc { padding: 40px 0px 40px 0px; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-18karg7 { padding: 50px 30px 50px 30px; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-f2orl7 { gap: 50px 0px; grid-template-columns: repeat(1, minmax(50px, 1fr)); padding: 30px 0px 0px 0px; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-14n49c6 { grid-column: span 1; height: min-content; justify-content: flex-end; order: 0; position: relative; top: unset; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-egs7xf-container { height: 280px; width: 100%; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-1uc19w-container { order: 1; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-1y94dwt { order: 2; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-1ch87p8 { order: 4; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-1lo3lif-container { order: 3; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-1cyzi0h { order: 6; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-1mf7ec0-container { order: 5; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-17wmt9r { order: 8; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-1redhy8-container { order: 7; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-mek5ub { order: 10; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-1458znq-container { order: 9; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-ou8ovk-container { order: 11; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-7anoff { height: 45px; }`,
					`.framer-KaCUQ.framer-v-clw6o6 .framer-1e14a7l-container { height: 75px; }`,
					...pt,
					...Tt,
				],
				`framer-KaCUQ`,
			)),
			(Cp = Sp),
			(Sp.displayName = `How We Work - Section`),
			(Sp.defaultProps = { height: 3332, width: 1200 }),
			P(Sp, {
				variant: {
					options: [`tjnyEoAIU`, `jbmHX5nok`, `UVQ9QPaeD`],
					optionTitles: [`Desktop - 1200`, `Tablet`, `Phone`],
					title: `Variant`,
					type: J.Enum,
				},
				FzOK0w5HB: {
					defaultValue: `How We Work`,
					displayTextArea: !1,
					title: `Heading of Section`,
					type: J.String,
				},
				P8rztijIj: {
					defaultValue: `[04]`,
					displayTextArea: !1,
					title: `Section Number`,
					type: J.String,
				},
			}),
			de(
				Sp,
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
					...cp,
					...lp,
					...up,
					...G(mt),
					...G(Et),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	}),
	Tp,
	Ep,
	Dp,
	Op,
	kp,
	Ap,
	jp,
	Mp,
	Np,
	Pp,
	Fp,
	Ip,
	Lp,
	Rp,
	zp,
	Bp,
	Vp,
	Hp,
	$,
	Up,
	Wp,
	Gp,
	Kp,
	qp,
	Jp,
	Yp,
	Xp,
	Zp,
	Qp,
	$p,
	em,
	tm,
	nm,
	rm,
	im,
	am;
e(() => {
	(y(),
		q(),
		N(),
		l(),
		yr(),
		Mr(),
		ti(),
		Po(),
		rn(),
		As(),
		Sn(),
		Wu(),
		vd(),
		Bd(),
		$t(),
		jf(),
		wp(),
		De(),
		Gn(),
		(Tp = B(_d)),
		(Ep = B(zd)),
		(Dp = B(ei)),
		(Op = B(ks)),
		(kp = B(Uu)),
		(Ap = B(Cp)),
		(jp = B(No)),
		(Mp = B(vr)),
		(Np = B(wn)),
		(Pp = B(Af)),
		(Fp = B(Qt)),
		(Ip = B(jr)),
		(Lp = B(Xt)),
		(Rp = {
			jNbjJW280: `(min-width: 810px) and (max-width: 1199.98px)`,
			wHqghBgtW: `(max-width: 809.98px)`,
			WQLkyLRf1: `(min-width: 1200px)`,
		}),
		(zp = []),
		(Bp = `framer-kIudB`),
		(Vp = {
			jNbjJW280: `framer-v-7wmc59`,
			wHqghBgtW: `framer-v-iigsnu`,
			WQLkyLRf1: `framer-v-72rtr7`,
		}),
		(Hp = (e, t, n) => (e && t ? `position` : n)),
		($ = (...e) => {
			for (let t of e) if (t && typeof t == `string`) return t;
		}),
		(Up = (e) => !!e),
		(Wp = (e, t) => {
			if (!(!e || typeof e != `object`)) return { ...e, alt: t };
		}),
		(Gp = {
			"Desktop - 1200": `WQLkyLRf1`,
			Phone: `wHqghBgtW`,
			Tablet: `jNbjJW280`,
		}),
		(Kp = ({ value: e }) =>
			le()
				? null
				: p(`style`, {
						dangerouslySetInnerHTML: { __html: e },
						"data-framer-html-style": ``,
					})),
		(qp = ({ height: e, id: t, width: n, ...r }) => ({
			...r,
			variant: Gp[r.variant] ?? r.variant ?? `WQLkyLRf1`,
		})),
		(Jp = {
			component: Qt,
			transition: {
				damping: 50,
				delay: 0,
				mass: 0.1,
				stiffness: 700,
				type: `spring`,
			},
			variant: `dAo9ApRb4`,
		}),
		(Yp = {
			damping: 60,
			delay: 0,
			mass: 1,
			stiffness: 500,
			type: `spring`,
		}),
		(Xp = {
			alignment: `center`,
			component: jr,
			offset: { x: 40, y: 40 },
			placement: `right`,
			transition: Yp,
			variant: `wE1xRBhw2`,
		}),
		(Zp = {
			alignment: `center`,
			component: jr,
			offset: { x: 40, y: 40 },
			placement: `right`,
			transition: Yp,
			variant: `b9Wyp8VLX`,
		}),
		(Qp = {
			alignment: `center`,
			component: jr,
			offset: { x: 40, y: 40 },
			placement: `right`,
			transition: Yp,
			variant: `SP7XAEd6j`,
		}),
		($p = {
			alignment: `center`,
			component: jr,
			offset: { x: 40, y: 40 },
			placement: `right`,
			transition: Yp,
			variant: `KP_2YTyir`,
		}),
		(em = {
			alignment: `center`,
			component: jr,
			offset: { x: 40, y: 40 },
			placement: `right`,
			transition: Yp,
			variant: `Vc8J_9MHY`,
		}),
		(tm = {
			alignment: `center`,
			component: jr,
			offset: { x: 40, y: 40 },
			placement: `right`,
			transition: Yp,
			variant: `KvncGGvMK`,
		}),
		(nm = {
			component: Xt,
			transition: {
				damping: 30,
				delay: 0,
				mass: 0.5,
				stiffness: 600,
				type: `spring`,
			},
			variant: `MSDybJ82G`,
		}),
		(rm = z(
			h(function (e, t) {
				let n = _(null),
					r = t ?? n,
					i = S(),
					{ activeLocale: a, setLocale: s } = _e(),
					c = X(),
					{
						style: l,
						className: u,
						layoutId: d,
						variant: f,
						...m
					} = qp(e);
				xe(o(() => Kn({}, a), [a]));
				let [h, y] = me(f, Rp, !1),
					b = U(Bp),
					x = g(ge)?.isLayoutTemplate,
					C = Hp(x, !!g(A)?.transition?.layout);
				return (
					re(),
					Y({
						"1bj26gy": $p,
						"1d2ihzx": Jp,
						"8maxe8": tm,
						"8wyxgg": Zp,
						bdpno0: em,
						q28pct: Xp,
						uzyese: Qp,
						w5gwub: nm,
					}),
					p(ge.Provider, {
						value: {
							activeVariantId: h,
							humanReadableVariantMap: Gp,
							primaryVariantId: `WQLkyLRf1`,
							variantClassNames: Vp,
						},
						children: v(M, {
							id: d ?? i,
							children: [
								p(Kp, {
									value: `html body { background: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)); }`,
								}),
								v(k.div, {
									...m,
									className: U(b, `framer-72rtr7`, u),
									ref: r,
									style: { ...l },
									children: [
										p(Z, {
											height: 720,
											width: c?.width || `100vw`,
											y: (c?.y || 0) + 0 + 0,
											children: p(ue, {
												className: `framer-1y5g06k-container`,
												layout: C,
												nodeId: `zMFfjURLp`,
												scopeId: `augiA20Il`,
												children: p(ye, {
													breakpoint: h,
													overrides: {
														jNbjJW280: {
															variant:
																$(`Yqp02agwX`),
														},
														wHqghBgtW: {
															USjDcbWV6: Up(!0),
															variant:
																$(`H7foNv_Ti`),
														},
													},
													children: p(_d, {
														height: `100%`,
														id: `zMFfjURLp`,
														layoutId: `zMFfjURLp`,
														style: {
															width: `100%`,
														},
														USjDcbWV6: !0,
														variant: $(`ssk3UDGEg`),
														width: `100%`,
														zpScFJqti: Me,
													}),
												}),
											}),
										}),
										p(ie, {
											links: [
												{
													href: {
														webPageId: `rfr9bsCxq`,
													},
													implicitPathVariables:
														void 0,
												},
												{
													href: {
														webPageId: `rfr9bsCxq`,
													},
													implicitPathVariables:
														void 0,
												},
												{
													href: {
														webPageId: `rfr9bsCxq`,
													},
													implicitPathVariables:
														void 0,
												},
											],
											children: (e) =>
												p(Z, {
													height: 832,
													width: c?.width || `100vw`,
													y: (c?.y || 0) + 0 + 720,
													children: p(ue, {
														className: `framer-k9rqsz-container`,
														layout: C,
														nodeId: `QuBhvkSAZ`,
														scopeId: `augiA20Il`,
														children: p(ye, {
															breakpoint: h,
															overrides: {
																jNbjJW280: {
																	EvIF7w2AA:
																		e[1],
																	variant:
																		$(
																			`LBb1scSzl`,
																		),
																},
																wHqghBgtW: {
																	EvIF7w2AA:
																		e[2],
																	variant:
																		$(
																			`tVhqx8SVi`,
																		),
																},
															},
															children: p(zd, {
																ax9UfBvMl: `[01]`,
																DAAG0VqYR: `         We’re a senior creative digital agency focused on clarity and performance. We align strategy, brand, and web into modular systems that ship on time and scale. Our values are simplicity, accountability and measurable impact. The team is small and senior; every project has a lead for strategy, design and build. We partner long-term, iterating with data to keep products fast. `,
																dGuW_vCBk: `Our Stack`,
																EvIF7w2AA: e[0],
																H5WebbGbQ: `[MORE ABOUT]`,
																height: `100%`,
																id: `QuBhvkSAZ`,
																layoutId: `QuBhvkSAZ`,
																rJHb064PE: `       From strategy to launch we deliver fast, accessible sites and clear brands with Growth-driven results`,
																style: {
																	width: `100%`,
																},
																variant:
																	$(
																		`yDsUBoQFy`,
																	),
																width: `100%`,
															}),
														}),
													}),
												}),
										}),
										p(Z, {
											height: 798,
											width: c?.width || `100vw`,
											y: (c?.y || 0) + 0 + 1552,
											children: p(ue, {
												className: `framer-1ctdcfb-container`,
												layout: C,
												nodeId: `UvOy1WM6j`,
												scopeId: `augiA20Il`,
												children: p(ye, {
													breakpoint: h,
													overrides: {
														jNbjJW280: {
															variant:
																$(`Q8rDTe15S`),
														},
														wHqghBgtW: {
															variant:
																$(`c8SrvHYF9`),
														},
													},
													children: p(ei, {
														DPfbMkKqn: `1d2ihzx`,
														height: `100%`,
														id: `UvOy1WM6j`,
														layoutId: `UvOy1WM6j`,
														QItNFelJa: `Showreel`,
														style: {
															width: `100%`,
														},
														variant: $(`q3tvGsm_J`),
														vB7BwHDeC: `⧖⧎⟡`,
														Wi_6Jp2U0: `https://vimeo.com/642263700`,
														width: `100%`,
														zCA22Iyd_: Wp(
															{
																pixelHeight: 1672,
																pixelWidth: 3032,
																src: `https://framerusercontent.com/images/bkeTimPti7XlErXV4jwwjfiyBWM.jpg?width=3032&height=1672`,
																srcSet: `https://framerusercontent.com/images/bkeTimPti7XlErXV4jwwjfiyBWM.jpg?scale-down-to=512&width=3032&height=1672 512w,https://framerusercontent.com/images/bkeTimPti7XlErXV4jwwjfiyBWM.jpg?scale-down-to=1024&width=3032&height=1672 1024w,https://framerusercontent.com/images/bkeTimPti7XlErXV4jwwjfiyBWM.jpg?scale-down-to=2048&width=3032&height=1672 2048w,https://framerusercontent.com/images/bkeTimPti7XlErXV4jwwjfiyBWM.jpg?width=3032&height=1672 3032w`,
															},
															``,
														),
													}),
												}),
											}),
										}),
										p(Z, {
											height: 1234,
											width: c?.width || `100vw`,
											y: (c?.y || 0) + 0 + 2350,
											children: p(ue, {
												className: `framer-kwz84l-container`,
												layout: C,
												nodeId: `kPaST7FtD`,
												scopeId: `augiA20Il`,
												children: p(ye, {
													breakpoint: h,
													overrides: {
														jNbjJW280: {
															aAXlqje55: void 0,
															ejz6e1P8F: void 0,
															fJzjnEbk5: void 0,
															gLu9GhK_q: void 0,
															i1iE8HiX9: void 0,
															ImSFbTdhK: void 0,
															variant:
																$(`SRe8kAlSA`),
														},
														wHqghBgtW: {
															aAXlqje55: void 0,
															ejz6e1P8F: void 0,
															fJzjnEbk5: void 0,
															gLu9GhK_q: void 0,
															i1iE8HiX9: void 0,
															ImSFbTdhK: void 0,
															variant:
																$(`CxxMae0C0`),
														},
													},
													children: p(ks, {
														aAXlqje55: `bdpno0`,
														ejz6e1P8F: `8maxe8`,
														fJzjnEbk5: `1bj26gy`,
														gLu9GhK_q: `q28pct`,
														height: `100%`,
														i1iE8HiX9: `8wyxgg`,
														id: `kPaST7FtD`,
														ImSFbTdhK: `uzyese`,
														layoutId: `kPaST7FtD`,
														maDVhs40g: `[02]`,
														style: {
															width: `100%`,
														},
														variant: $(`E9BtmEr1x`),
														VtKYpjJCN: `Services`,
														width: `100%`,
													}),
												}),
											}),
										}),
										p(ie, {
											links: [
												{
													href: {
														webPageId: `zDbFohvvw`,
													},
													implicitPathVariables:
														void 0,
												},
												{
													href: {
														webPageId: `zDbFohvvw`,
													},
													implicitPathVariables:
														void 0,
												},
												{
													href: {
														webPageId: `zDbFohvvw`,
													},
													implicitPathVariables:
														void 0,
												},
											],
											children: (e) =>
												p(Z, {
													height: 1376,
													width: c?.width || `100vw`,
													y: (c?.y || 0) + 0 + 3584,
													children: p(ue, {
														className: `framer-1pwtp3g-container`,
														layout: C,
														nodeId: `GLS8Fanqv`,
														scopeId: `augiA20Il`,
														children: p(ye, {
															breakpoint: h,
															overrides: {
																jNbjJW280: {
																	pZhrKeTu2:
																		e[1],
																	variant:
																		$(
																			`Y3MInZ9G7`,
																		),
																},
																wHqghBgtW: {
																	pZhrKeTu2:
																		e[2],
																	variant:
																		$(
																			`rWN7ullcS`,
																		),
																},
															},
															children: p(Uu, {
																ahFD0KbW0: !0,
																AyMyvfqA5: `12`,
																height: `100%`,
																id: `GLS8Fanqv`,
																layoutId: `GLS8Fanqv`,
																pZhrKeTu2: e[0],
																QujjwCxUD: `Recent launches with real outcomes. Explore the brief, the system we built, and the impact — each case shows problem → approach → result. Every case lists scope, timeline, stack and KPI movement with before and after. `,
																QvSNHBP5X: !0,
																style: {
																	width: `100%`,
																},
																ugJ8Iq0fa: `[03]`,
																uqZ2XSbpC: `Featured Works`,
																variant:
																	$(
																		`camO0iR5M`,
																	),
																VSaINvhjc: `[VIEW ALL]`,
																width: `100%`,
															}),
														}),
													}),
												}),
										}),
										p(Z, {
											height: 3332,
											width: c?.width || `100vw`,
											y: (c?.y || 0) + 0 + 4960,
											children: p(ue, {
												className: `framer-1s9429u-container`,
												layout: C,
												nodeId: `Ldo9lFWvp`,
												scopeId: `augiA20Il`,
												children: p(ye, {
													breakpoint: h,
													overrides: {
														jNbjJW280: {
															variant:
																$(`jbmHX5nok`),
														},
														wHqghBgtW: {
															variant:
																$(`UVQ9QPaeD`),
														},
													},
													children: p(Cp, {
														FzOK0w5HB: `How We Work`,
														height: `100%`,
														id: `Ldo9lFWvp`,
														layoutId: `Ldo9lFWvp`,
														P8rztijIj: `[04]`,
														style: {
															width: `100%`,
														},
														variant: $(`tjnyEoAIU`),
														width: `100%`,
													}),
												}),
											}),
										}),
										p(Z, {
											height: 1471,
											width: c?.width || `100vw`,
											y: (c?.y || 0) + 0 + 8292,
											children: p(ue, {
												className: `framer-1l682ez-container`,
												layout: C,
												nodeId: `sHjZ31Hgw`,
												scopeId: `augiA20Il`,
												children: p(ye, {
													breakpoint: h,
													overrides: {
														jNbjJW280: {
															variant:
																$(`Sj2Lti1nD`),
														},
														wHqghBgtW: {
															variant:
																$(`yhXwf1ILE`),
														},
													},
													children: p(No, {
														height: `100%`,
														id: `sHjZ31Hgw`,
														layoutId: `sHjZ31Hgw`,
														odvJxZw1T: `[05]`,
														style: {
															width: `100%`,
														},
														variant: $(`bYW4OT3Nj`),
														width: `100%`,
													}),
												}),
											}),
										}),
										p(Z, {
											height: 1251,
											width: c?.width || `100vw`,
											y: (c?.y || 0) + 0 + 9763,
											children: p(ue, {
												className: `framer-1f8njzc-container`,
												layout: C,
												nodeId: `OIS2VyznR`,
												scopeId: `augiA20Il`,
												children: p(ye, {
													breakpoint: h,
													overrides: {
														jNbjJW280: {
															variant:
																$(`eO6Qopa_m`),
														},
														wHqghBgtW: {
															variant:
																$(`hgNV3iX_3`),
														},
													},
													children: p(vr, {
														DGmW4oqjG: `[06]`,
														f9CT4tTM8: `Brand transformation end to end: positioning → identity → web`,
														height: `100%`,
														id: `OIS2VyznR`,
														koa73A7YO: `GwbipauMe`,
														layoutId: `OIS2VyznR`,
														QCmtIhV_V: `Before & After`,
														rRGxmCCi3: `w5gwub`,
														style: {
															width: `100%`,
														},
														variant: $(`sERzTRNgP`),
														width: `100%`,
														WiMqvlQNF: `rtl`,
														WS1SWhlH_: 8,
													}),
												}),
											}),
										}),
										p(ie, {
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
												p(Z, {
													height: 1255,
													width: c?.width || `100vw`,
													y: (c?.y || 0) + 0 + 11014,
													children: p(ue, {
														className: `framer-1v9pogr-container`,
														layout: C,
														nodeId: `RoIHViA7b`,
														scopeId: `augiA20Il`,
														children: p(ye, {
															breakpoint: h,
															overrides: {
																jNbjJW280: {
																	a_RFekTZv: `hW1S5f5S1`,
																	bFCS9vnuq: `60px 30px 60px 30px`,
																	bWjM1v575:
																		e[1],
																	variant:
																		$(
																			`kSC4wNpBu`,
																		),
																},
																wHqghBgtW: {
																	a_RFekTZv: `oB1JgoU9o`,
																	bFCS9vnuq: `40px 25px 40px 25px`,
																	bWjM1v575:
																		e[2],
																	variant:
																		$(
																			`MpacA_qwI`,
																		),
																},
															},
															children: p(wn, {
																a_RFekTZv: `Hy5imaqGv`,
																bFCS9vnuq: `90px 40px 90px 40px`,
																bWjM1v575: e[0],
																gZ_s_nXv6: !0,
																height: `100%`,
																hhaCwl7EP: !1,
																id: `RoIHViA7b`,
																layoutId: `RoIHViA7b`,
																lQpFEpV2s: `[ALL POSTS]`,
																MXlRuQc91: !0,
																QPWACkysO: ``,
																SE9pFAstj: `[07]`,
																style: {
																	width: `100%`,
																},
																td4zWVChF: `Insights`,
																ThIdWbT5T: !0,
																variant:
																	$(
																		`mVhPZw3IV`,
																	),
																width: `100%`,
																wPj7cgw7A: !1,
																wpMFMFfh6: !0,
																XtswemN6o: `0px 50px 0px 55px`,
																zWwbGwZv_: !1,
															}),
														}),
													}),
												}),
										}),
										p(Z, {
											height: 904,
											width: c?.width || `100vw`,
											y: (c?.y || 0) + 0 + 12269,
											children: p(ue, {
												className: `framer-12sxgw8-container`,
												layout: C,
												nodeId: `igqN9d_gH`,
												scopeId: `augiA20Il`,
												children: p(ye, {
													breakpoint: h,
													overrides: {
														jNbjJW280: {
															variant:
																$(`ptktdtr8e`),
														},
														wHqghBgtW: {
															variant:
																$(`p916nDvLq`),
														},
													},
													children: p(Af, {
														height: `100%`,
														id: `igqN9d_gH`,
														layoutId: `igqN9d_gH`,
														style: {
															width: `100%`,
														},
														variant: $(`XOO4g1eJ2`),
														width: `100%`,
													}),
												}),
											}),
										}),
									],
								}),
								p(`div`, { id: `overlay` }),
							],
						}),
					})
				);
			}),
			[
				`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
				`.framer-kIudB.framer-lux5qc, .framer-kIudB .framer-lux5qc { display: block; }`,
				`.framer-kIudB.framer-72rtr7 { align-content: center; align-items: center; background-color: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 14165px; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
				`.framer-kIudB .framer-1y5g06k-container, .framer-kIudB .framer-k9rqsz-container, .framer-kIudB .framer-1ctdcfb-container, .framer-kIudB .framer-kwz84l-container, .framer-kIudB .framer-1pwtp3g-container, .framer-kIudB .framer-1s9429u-container, .framer-kIudB .framer-1l682ez-container, .framer-kIudB .framer-1f8njzc-container, .framer-kIudB .framer-1v9pogr-container, .framer-kIudB .framer-12sxgw8-container { flex: none; height: auto; position: relative; width: 100%; }`,
				`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-kIudB.framer-72rtr7 { height: 15671px; width: 810px; }}`,
				`@media (max-width: 809.98px) { .framer-kIudB.framer-72rtr7 { height: 15599px; width: 390px; }}`,
			],
			`framer-kIudB`,
		)),
		(im = rm),
		(rm.displayName = `Home`),
		(rm.defaultProps = { height: 14351, width: 1200 }),
		de(
			rm,
			[
				{ explicitInter: !0, fonts: [] },
				...Tp,
				...Ep,
				...Dp,
				...Op,
				...kp,
				...Ap,
				...jp,
				...Mp,
				...Np,
				...Pp,
				...Fp,
				...Ip,
				...Lp,
			],
			{ supportsExplicitInterCodegen: !0 },
		),
		(rm.loader = {
			load: (e, t) => (
				t.locale,
				Promise.allSettled([
					V(_d, {}, t),
					V(zd, {}, t),
					V(ei, {}, t),
					V(ks, {}, t),
					V(Uu, {}, t),
					V(Cp, {}, t),
					V(No, {}, t),
					V(vr, {}, t),
					V(wn, {}, t),
					V(Af, {}, t),
				])
			),
		}),
		(am = {
			exports: {
				queryParamNames: {
					type: `variable`,
					annotations: { framerContractVersion: `1` },
				},
				default: {
					type: `reactComponent`,
					name: `FrameraugiA20Il`,
					slots: [],
					annotations: {
						framerResponsiveScreen: `true`,
						framerContractVersion: `1`,
						framerAcceptsLayoutTemplate: `true`,
						framerColorSyntax: `true`,
						framerImmutableVariables: `true`,
						framerIntrinsicWidth: `1200`,
						framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","fixed"]},"jNbjJW280":{"layout":["fixed","fixed"]},"wHqghBgtW":{"layout":["fixed","fixed"]}}}`,
						framerScrollSections: `false`,
						framerAutoSizeImages: `true`,
						framerComponentViewportWidth: `true`,
						framerDisplayContentsDiv: `false`,
						framerIntrinsicHeight: `14351`,
						framerLayoutTemplateFlowEffect: `true`,
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
export { am as __FramerMetadata__, im as default, zp as queryParamNames };
//# sourceMappingURL=components-pages.mjs.map
