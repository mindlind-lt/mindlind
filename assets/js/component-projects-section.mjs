import { t as e } from "./rolldown-runtime.mjs";
import {
	F as t,
	M as rUseMemo,
	T as r,
	c as rJsx,
	g as rForwardRef,
	j as rUseContext,
	k as rUseRef,
	l as rJsxs,
	o as rUseDeferredValue,
	s as ee,
	y as rUseId,
} from "./react.mjs";
import { S as u, a as d, r as f, t as p } from "./motion.mjs";
import {
	A as m,
	D as h,
	E as g,
	Et as _,
	H as v,
	I as y,
	K as b,
	O as x,
	P as S,
	St as C,
	T as w,
	Tt as ne,
	U as T,
	W as E,
	X as D,
	_ as O,
	a as k,
	b as re,
	bt as ie,
	ct as A,
	f as j,
	ft as M,
	g as ae,
	ht as oe,
	i as N,
	it as P,
	k as F,
	lt as se,
	p as ce,
	pt as le,
	r as I,
	t as ue,
	u as de,
	ut as fe,
	vt as pe,
	x as L,
	xt as me,
	yt as he,
} from "./framer.mjs";
import { i as R, n as ge, r as z, t as _e } from "./j9HsFBXUW.C6zqxVR-.mjs";
import { a as B, i as V, o as H, r as ve } from "./shared-lib.mjs";
import { i as ye, n as be, r as xe, t as Se } from "./H4UJEYSZN.CDiKVH-O.mjs";
import { i as U, r as Ce } from "./PxI14If8r.yE6_0MNS.mjs";
import { a as we, i as Te, r as Ee } from "./cms-posts.mjs";
import { i as W, n as De, r as Oe, t as ke } from "./BaUGQBb6A.CCunrJSH.mjs";
import {
	a as Ae,
	c as je,
	i as Me,
	n as Ne,
	o as Pe,
	r as Fe,
	s as Ie,
	t as Le,
} from "./pPuowuywh.BpuFfTb3.mjs";
import { i as Re, n as ze, r as Be, t as Ve } from "./IGVKsj4vh.GXVwIVTj.mjs";
import { n as He, t as Ue } from "./Vimeo.mjs";
import { i as G, n as We, r as Ge, t as Ke } from "./y9BUDaD1i.51ShsoHU.mjs";
import { i as qe, n as Je, r as Ye, t as Xe } from "./PPpYTPv46.C_co8ntZ.mjs";
import { n as Ze, t as Qe } from "./ZCUtdxyFY.BHixxRZV.mjs";
import { n as $e, t as et } from "./lJIHQ29dZ.B2AWu9Us.mjs";
import { a as tt, i as nt } from "./page-project-detail.mjs";
function rt(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var it,
	at,
	ot,
	st,
	K,
	ct,
	lt,
	ut,
	dt,
	ft,
	q,
	pt,
	mt = e(() => {
		(rUseDeferredValue(),
			D(),
			p(),
			r(),
			ye(),
			G(),
			(it = [`WtpbfKxMy`, `eiFIzOFII`, `vAPv2qbmb`]),
			(at = `framer-BgxhG`),
			(ot = {
				eiFIzOFII: `framer-v-f848kh`,
				vAPv2qbmb: `framer-v-192xz9b`,
				WtpbfKxMy: `framer-v-144f5fo`,
			}),
			(st = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(K = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(ct = ({ value: e, children: t }) => {
				let r = rUseContext(d),
					a = e ?? r.transition,
					s = rUseMemo(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return rJsx(d.Provider, { value: s, children: t });
			}),
			(lt = u.create(t)),
			(ut = {
				Desktop: `WtpbfKxMy`,
				Phone: `vAPv2qbmb`,
				Tablet: `eiFIzOFII`,
			}),
			(dt = ({
				description: e,
				heading: t,
				height: n,
				id: r,
				qRCodeImage: i,
				width: a,
				...o
			}) => ({
				...o,
				kwYoNIFOo: t ?? o.kwYoNIFOo ?? `Check mobile version`,
				PuPkBiwHw: i ??
					o.PuPkBiwHw ?? {
						alt: ``,
						pixelHeight: 1e3,
						pixelWidth: 1e3,
						src: `/assets/images/MUAILEacVzJgHCh4jb8TThY1HA.png`,
					},
				RqhoLhdJv:
					e ?? o.RqhoLhdJv ?? `Scan QR-code on smartphone and check.`,
				variant: ut[o.variant] ?? o.variant ?? `WtpbfKxMy`,
			})),
			(ft = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(q = _(
				rForwardRef(function (e, n) {
					let r = rUseRef(null),
						a = n ?? r,
						o = rUseId(),
						{ activeLocale: l, setLocale: ee } = pe(),
						d = se(),
						{
							style: p,
							className: m,
							layoutId: h,
							variant: _,
							PuPkBiwHw: v,
							kwYoNIFOo: y,
							RqhoLhdJv: b,
							...x
						} = dt(e),
						{
							baseVariant: C,
							classNames: w,
							clearLoadingGesture: T,
							gestureHandlers: D,
							gestureVariant: O,
							isLoading: k,
							setGestureState: re,
							setVariant: ie,
							variants: A,
						} = ne({
							cycleOrder: it,
							defaultVariant: `WtpbfKxMy`,
							ref: a,
							variant: _,
							variantClassNames: ot,
						}),
						M = ft(e, A),
						ae = S(at, Ke, Se);
					return rJsx(f, {
						id: h ?? o,
						children: rJsx(lt, {
							animate: A,
							initial: !1,
							children: rJsx(ct, {
								value: st,
								children: rJsx(u.div, {
									...x,
									...D,
									className: S(ae, `framer-144f5fo`, m, w),
									layoutDependency: M,
									layoutId: `WtpbfKxMy`,
									ref: a,
									style: { ...p },
									...rt(
										{
											eiFIzOFII: {
											},
											vAPv2qbmb: {
											},
										},
										C,
										O,
									),
									children: rJsxs(u.div, {
										className: `framer-1u9njy5`,
										layoutDependency: M,
										layoutId: `iFMRpLB03`,
										style: {
											backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
											borderBottomLeftRadius: 10,
											borderBottomRightRadius: 10,
											borderTopLeftRadius: 10,
											borderTopRightRadius: 10,
										},
										children: [
											rJsx(u.div, {
												className: `framer-jbgk7v`,
												layoutDependency: M,
												layoutId: `FbsWVcIIH`,
												style: {
													backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													borderBottomLeftRadius: 8,
													borderBottomRightRadius: 8,
													borderTopLeftRadius: 8,
													borderTopRightRadius: 8,
												},
												children: rJsx(j, {
													background: {
														alt: ``,
														fit: `fill`,
														loading: E(
															(d?.y || 0) +
																0 +
																(((d?.height ||
																	169) -
																	0 -
																	260) /
																	2 +
																	0 +
																	0) +
																2 +
																0 +
																83,
														),
														pixelHeight: 1e3,
														pixelWidth: 1e3,
														sizes: `95px`,
														...K(v),
													},
													className: `framer-1tvivlu`,
													layoutDependency: M,
													layoutId: `kShcxmh5T`,
													...rt(
														{
															eiFIzOFII: {
																background: {
																	alt: ``,
																	fit: `fill`,
																	loading: E(
																		(d?.y ||
																			0) +
																			0 +
																			(((d?.height ||
																				249) -
																				0 -
																				357) /
																				2 +
																				0 +
																				0) +
																			2 +
																			0 +
																			0 +
																			12.5,
																	),
																	pixelHeight: 1e3,
																	pixelWidth: 1e3,
																	sizes: `95px`,
																	...K(v),
																},
															},
															vAPv2qbmb: {
																background: {
																	alt: ``,
																	fit: `fill`,
																	loading: E(
																		(d?.y ||
																			0) +
																			0 +
																			(((d?.height ||
																				132) -
																				0 -
																				240) /
																				2 +
																				0 +
																				0) +
																			62.5 +
																			0 +
																			12.5,
																	),
																	pixelHeight: 1e3,
																	pixelWidth: 1e3,
																	sizes: `95px`,
																	...K(v),
																},
															},
														},
														C,
														O,
													),
												}),
											}),
											rJsxs(u.div, {
												className: `framer-wg6b2a`,
												layoutDependency: M,
												layoutId: `nGrMs0ffF`,
												style: {
													backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
													borderBottomLeftRadius: 8,
													borderBottomRightRadius: 8,
													borderTopLeftRadius: 8,
													borderTopRightRadius: 8,
												},
												children: [
													rJsx(g, {
														__fromCanvasComponent:
															!0,
														children: rJsx(t, {
															children: rJsx(u.p, {
																className: `framer-styles-preset-xbh3jg`,
																"data-styles-preset": `y9BUDaD1i`,
																style: {
																	"--framer-text-alignment": `left`,
																	"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `Check mobile version`,
															}),
														}),
														className: `framer-36xczs`,
														fonts: [`Inter`],
														layoutDependency: M,
														layoutId: `UgQm_1745`,
														style: {
															"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
															"--framer-paragraph-spacing": `0px`,
														},
														text: y,
														verticalAlignment: `top`,
														withExternalLayout: !0,
													}),
													rJsx(u.div, {
														className: `framer-w9pfqr`,
														
														layoutDependency: M,
														layoutId: `IgBj6_esC`,
													}),
													rJsx(g, {
														__fromCanvasComponent:
															!0,
														children: rJsx(t, {
															children: rJsx(u.p, {
																className: `framer-styles-preset-1sb62jp`,
																"data-styles-preset": `H4UJEYSZN`,
																style: {
																	"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																},
																children: `Scan QR-code on smartphone and check.`,
															}),
														}),
														className: `framer-hxq9sn`,
														fonts: [`Inter`],
														layoutDependency: M,
														layoutId: `oIZcbKLSb`,
														style: {
															"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
															"--framer-paragraph-spacing": `0px`,
														},
														text: b,
														verticalAlignment: `top`,
														withExternalLayout: !0,
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
					`.framer-BgxhG.framer-ekt9bc, .framer-BgxhG .framer-ekt9bc { display: block; }`,
					`.framer-BgxhG.framer-144f5fo { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 315px; }`,
					`.framer-BgxhG .framer-1u9njy5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 2px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-BgxhG .framer-jbgk7v { align-content: center; align-items: center; align-self: stretch; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: auto; justify-content: center; overflow: hidden; padding: 0px 10px 0px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-BgxhG .framer-1tvivlu { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 95px); position: relative; width: 95px; }`,
					`.framer-BgxhG .framer-wg6b2a { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: hidden; padding: 30px 20px 30px 25px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-BgxhG .framer-36xczs, .framer-BgxhG .framer-hxq9sn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-BgxhG .framer-w9pfqr { flex: none; height: 16px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-BgxhG.framer-v-f848kh.framer-144f5fo { width: 210px; }`,
					`.framer-BgxhG.framer-v-f848kh .framer-1u9njy5 { flex-direction: column; }`,
					`.framer-BgxhG.framer-v-f848kh .framer-jbgk7v, .framer-BgxhG.framer-v-192xz9b .framer-jbgk7v { align-self: unset; height: 115px; }`,
					`.framer-BgxhG.framer-v-f848kh .framer-wg6b2a { flex: none; padding: 20px; width: 100%; }`,
					`.framer-BgxhG.framer-v-192xz9b.framer-144f5fo { width: 340px; }`,
					`.framer-BgxhG.framer-v-192xz9b .framer-wg6b2a { padding: 20px 15px 20px 15px; }`,
					...We,
					...be,
				],
				`framer-BgxhG`,
			)),
			(pt = q),
			(q.displayName = `QR Code - Widget`),
			(q.defaultProps = { height: 169, width: 315 }),
			m(q, {
				variant: {
					options: [`WtpbfKxMy`, `eiFIzOFII`, `vAPv2qbmb`],
					optionTitles: [`Desktop`, `Tablet`, `Phone`],
					title: `Variant`,
					type: k.Enum,
				},
				PuPkBiwHw: {
					__defaultAssetReference: `data:framer/asset-reference,MUAILEacVzJgHCh4jb8TThY1HA.png?width=1000&height=1000`,
					__vekterDefault: {
						alt: ``,
						assetReference: `data:framer/asset-reference,MUAILEacVzJgHCh4jb8TThY1HA.png?width=1000&height=1000`,
					},
					description: `200x200 px`,
					title: `QR-Code Image`,
					type: k.ResponsiveImage,
				},
				kwYoNIFOo: {
					defaultValue: `Check mobile version`,
					displayTextArea: !0,
					title: `Heading`,
					type: k.String,
				},
				RqhoLhdJv: {
					defaultValue: `Scan QR-code on smartphone and check.`,
					displayTextArea: !0,
					title: `Description`,
					type: k.String,
				},
			}),
			F(
				q,
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
					...T(Ge),
					...T(xe),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function ht(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var gt,
	_t,
	vt,
	yt,
	bt,
	xt,
	St,
	Ct,
	wt,
	J,
	Tt,
	Et = e(() => {
		(rUseDeferredValue(),
			D(),
			p(),
			r(),
			(gt = [`mkWQJv0fv`, `i7ki4MlBU`, `IHRQEa0sQ`]),
			(_t = `framer-Dbccl`),
			(vt = {
				i7ki4MlBU: `framer-v-drpkwg`,
				IHRQEa0sQ: `framer-v-1km06fs`,
				mkWQJv0fv: `framer-v-eajeud`,
			}),
			(yt = {
				delay: 0,
				duration: 0.4,
				ease: [0.44, 0, 0.41, 1.02],
				type: `tween`,
			}),
			(bt = ({ value: e, children: t }) => {
				let r = rUseContext(d),
					a = e ?? r.transition,
					s = rUseMemo(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return rJsx(d.Provider, { value: s, children: t });
			}),
			(xt = u.create(t)),
			(St = {
				"Next State": `IHRQEa0sQ`,
				Animation: `mkWQJv0fv`,
				Normal: `i7ki4MlBU`,
			}),
			(Ct = ({ height: e, id: t, width: n, ...r }) => ({
				...r,
				variant: St[r.variant] ?? r.variant ?? `mkWQJv0fv`,
			})),
			(wt = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(J = _(
				rForwardRef(function (e, t) {
					let n = rUseRef(null),
						r = t ?? n,
						a = rUseId(),
						{ activeLocale: o, setLocale: l } = pe();
					se();
					let {
							style: ee,
							className: d,
							layoutId: p,
							variant: m,
							...g
						} = Ct(e),
						{
							baseVariant: _,
							classNames: v,
							clearLoadingGesture: y,
							gestureHandlers: b,
							gestureVariant: x,
							isLoading: C,
							setGestureState: w,
							setVariant: T,
							variants: E,
						} = ne({
							cycleOrder: gt,
							defaultVariant: `mkWQJv0fv`,
							ref: r,
							variant: m,
							variantClassNames: vt,
						}),
						D = wt(e, E),
						{ activeVariantCallback: O, delay: k } = A(_);
					ie(_, {
						default: O(async (...e) => {
							await k(() => T(`IHRQEa0sQ`), 100);
						}),
						i7ki4MlBU: void 0,
					});
					let re = S(_t);
					return rJsx(f, {
						id: p ?? a,
						children: rJsx(xt, {
							animate: E,
							initial: !1,
							children: rJsx(bt, {
								value: yt,
								children: rJsxs(u.div, {
									...g,
									...b,
									className: S(re, `framer-eajeud`, d, v),
									"data-highlight": !0,
									layoutDependency: D,
									layoutId: `mkWQJv0fv`,
									ref: r,
									style: { ...ee },
									...ht(
										{
											i7ki4MlBU: {
												"data-highlight": void 0,
											},
											IHRQEa0sQ: {
											},
										},
										_,
										x,
									),
									children: [
										rJsx(h, {
											className: `framer-1n9de0x`,
											layoutDependency: D,
											layoutId: `WgusUtfCB`,
											opacity: 0.6,
											requiresOverflowVisible: !0,
											style: { opacity: 0.6 },
											svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9 9" overflow="visible"><path d="M 7 9 C 8.105 9 9 8.105 9 7 L 9 2 C 9 0.895 8.105 0 7 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 7 C 0 8.105 0.895 9 2 9 Z" fill="transparent" stroke-width="1.5" stroke="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-miterlimit="10" stroke-dasharray="" opacity="0.6"></path></svg>`,
											withExternalLayout: !0,
										}),
										rJsx(h, {
											className: `framer-1lm19pu`,
											layoutDependency: D,
											layoutId: `Wu1v0Tybm`,
											opacity: 1,
											requiresOverflowVisible: !0,
											svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9 9" overflow="visible"><path d="M 7 9 C 8.105 9 9 8.105 9 7 L 9 2 C 9 0.895 8.105 0 7 0 L 2 0 C 0.895 0 0 0.895 0 2 L 0 7 C 0 8.105 0.895 9 2 9 Z" fill="transparent" stroke-width="1.5" stroke="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */" stroke-miterlimit="10" stroke-dasharray=""></path></svg>`,
											withExternalLayout: !0,
										}),
										rJsx(h, {
											className: `framer-1u2j5zy`,
											layoutDependency: D,
											layoutId: `HNBC4292P`,
											opacity: 1,
											requiresOverflowVisible: !0,
											style: { rotate: -45 },
											svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 4 8" overflow="visible"><path d="M 0 8 L 4 4 L 0 0" fill="transparent" stroke-width="1.5" stroke="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
											withExternalLayout: !0,
										}),
										rJsx(h, {
											className: `framer-uedxqe`,
											layoutDependency: D,
											layoutId: `ug8IZTEk6`,
											opacity: 1,
											requiresOverflowVisible: !0,
											svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 6 6" overflow="visible"><path d="M 0 6 L 6 0" fill="transparent" stroke-width="1.5" stroke="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
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
					`.framer-Dbccl.framer-1mjpnps, .framer-Dbccl .framer-1mjpnps { display: block; }`,
					`.framer-Dbccl.framer-eajeud { height: 17px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 17px; }`,
					`.framer-Dbccl .framer-1n9de0x { height: 9px; left: 2px; position: absolute; top: 6px; width: 9px; }`,
					`.framer-Dbccl .framer-1lm19pu { height: 9px; left: 6px; position: absolute; top: 2px; width: 9px; }`,
					`.framer-Dbccl .framer-1u2j5zy { height: 8px; left: -5px; position: absolute; top: 3px; width: 4px; }`,
					`.framer-Dbccl .framer-uedxqe { height: 6px; left: -8px; position: absolute; top: 6px; width: 6px; }`,
					`.framer-Dbccl.framer-v-1km06fs.framer-eajeud { height: 18px; width: 18px; }`,
					`.framer-Dbccl.framer-v-1km06fs .framer-1n9de0x { left: -9px; top: 18px; }`,
					`.framer-Dbccl.framer-v-1km06fs .framer-1lm19pu { left: 18px; top: -10px; }`,
					`.framer-Dbccl.framer-v-1km06fs .framer-1u2j5zy { left: 8px; }`,
					`.framer-Dbccl.framer-v-1km06fs .framer-uedxqe { left: 5px; }`,
				],
				`framer-Dbccl`,
			)),
			(Tt = J),
			(J.displayName = `Animation Windows for Button`),
			(J.defaultProps = { height: 17, width: 17 }),
			m(J, {
				variant: {
					options: [`mkWQJv0fv`, `i7ki4MlBU`, `IHRQEa0sQ`],
					optionTitles: [`Animation`, `Normal`, `Next State`],
					title: `Variant`,
					type: k.Enum,
				},
			}),
			F(J, [{ explicitInter: !0, fonts: [] }], {
				supportsExplicitInterCodegen: !0,
			}));
	});
function Dt(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ot,
	kt,
	At,
	jt,
	Mt,
	Nt,
	Pt,
	Ft,
	It,
	Y,
	Lt,
	Rt = e(() => {
		(rUseDeferredValue(),
			D(),
			p(),
			r(),
			H(),
			Et(),
			(Ot = v(Tt)),
			(kt = { hDKrQIe5u: { hover: !0 } }),
			(At = `framer-AJxtW`),
			(jt = { hDKrQIe5u: `framer-v-6id3vt` }),
			(Mt = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Nt = ({ value: e, children: t }) => {
				let r = rUseContext(d),
					a = e ?? r.transition,
					s = rUseMemo(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return rJsx(d.Provider, { value: s, children: t });
			}),
			(Pt = u.create(t)),
			(Ft = ({
				height: e,
				id: t,
				link: n,
				newTab: r,
				textInButton: i,
				width: a,
				...o
			}) => ({
				...o,
				Ijr7Moz5R: i ?? o.Ijr7Moz5R ?? `Open Website`,
				PJIPuOIqn: r ?? o.PJIPuOIqn,
				yCwKnnOkh: n ?? o.yCwKnnOkh,
			})),
			(It = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Y = _(
				rForwardRef(function (e, n) {
					let r = rUseRef(null),
						a = n ?? r,
						o = rUseId(),
						{ activeLocale: l, setLocale: ee } = pe(),
						d = se(),
						{
							style: p,
							className: m,
							layoutId: h,
							variant: _,
							yCwKnnOkh: v,
							PJIPuOIqn: y,
							Ijr7Moz5R: b,
							...C
						} = Ft(e),
						{
							baseVariant: w,
							classNames: T,
							clearLoadingGesture: E,
							gestureHandlers: D,
							gestureVariant: O,
							isLoading: k,
							setGestureState: re,
							setVariant: ie,
							variants: A,
						} = ne({
							defaultVariant: `hDKrQIe5u`,
							enabledGestures: kt,
							ref: a,
							variant: _,
							variantClassNames: jt,
						}),
						j = It(e, A),
						M = S(At, ve);
					return rJsx(f, {
						id: h ?? o,
						children: rJsx(Pt, {
							animate: A,
							initial: !1,
							children: rJsx(Nt, {
								value: Mt,
								children: rJsx(ae, {
									href: v,
									motionChild: !0,
									nodeId: `hDKrQIe5u`,
									openInNewTab: y,
									scopeId: `WfndxhK5H`,
									children: rJsxs(u.a, {
										...C,
										...D,
										className: `${S(M, `framer-6id3vt`, m, T)} framer-yjny53`,
										layoutDependency: j,
										layoutId: `hDKrQIe5u`,
										ref: a,
										style: {
											backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
											borderBottomLeftRadius: 6,
											borderBottomRightRadius: 6,
											borderTopLeftRadius: 6,
											borderTopRightRadius: 6,
											...p,
										},
										variants: {
											"hDKrQIe5u-hover": {
												backgroundColor: `var(--token-5943631d-b25e-4d17-8eac-40dd8ac14063, rgb(26, 26, 26))`,
											},
										},
										...Dt(
											{
												"hDKrQIe5u-hover": {
													
												},
											},
											w,
											O,
										),
										children: [
											rJsx(g, {
												__fromCanvasComponent: !0,
												children: rJsx(t, {
													children: rJsx(u.p, {
														className: `framer-styles-preset-mga0mf`,
														"data-styles-preset": `Xrt2y4jBe`,
														style: {
															"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
														},
														children: `Open website`,
													}),
												}),
												className: `framer-1465n6v`,
												fonts: [`Inter`],
												layoutDependency: j,
												layoutId: `nSIYWMcwU`,
												style: {
													"--extracted-r6o4lv": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													"--framer-paragraph-spacing": `0px`,
												},
												text: b,
												verticalAlignment: `top`,
												withExternalLayout: !0,
											}),
											rJsx(I, {
												height: 17,
												width: `17px`,
												y:
													(d?.y || 0) +
													(15 +
														((d?.height || 60) -
															31 -
															17) /
															2),
												children: rJsx(x, {
													className: `framer-172snp0-container`,
													layoutDependency: j,
													layoutId: `JAEzTWw1j-container`,
													nodeId: `JAEzTWw1j`,
													rendersWithMotion: !0,
													scopeId: `WfndxhK5H`,
													children: rJsx(Tt, {
														height: `100%`,
														id: `JAEzTWw1j`,
														layoutId: `JAEzTWw1j`,
														style: {
															height: `100%`,
															width: `100%`,
														},
														variant: `i7ki4MlBU`,
														width: `100%`,
														...Dt(
															{
																"hDKrQIe5u-hover":
																	{
																		variant: `mkWQJv0fv`,
																	},
															},
															w,
															O,
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
					`.framer-AJxtW.framer-yjny53, .framer-AJxtW .framer-yjny53 { display: block; }`,
					`.framer-AJxtW.framer-6id3vt { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 60px; justify-content: center; padding: 15px 15px 16px 15px; position: relative; text-decoration: none; width: 314px; }`,
					`.framer-AJxtW .framer-1465n6v { flex: none; height: auto; mix-blend-mode: difference; position: relative; white-space: pre; width: auto; }`,
					`.framer-AJxtW .framer-172snp0-container { flex: none; height: 17px; position: relative; width: 17px; }`,
					...V,
				],
				`framer-AJxtW`,
			)),
			(Lt = Y),
			(Y.displayName = `Button - Open in New Window`),
			(Y.defaultProps = { height: 60, width: 314 }),
			m(Y, {
				yCwKnnOkh: { title: `Link`, type: k.Link },
				PJIPuOIqn: {
					defaultValue: !1,
					title: `New Tab`,
					type: k.Boolean,
				},
				Ijr7Moz5R: {
					defaultValue: `Open Website`,
					displayTextArea: !1,
					title: `Text in Button`,
					type: k.String,
				},
			}),
			F(
				Y,
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
					...Ot,
					...T(B),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	}),
	zt,
	Bt,
	Vt,
	Ht,
	Ut,
	Wt = e(() => {
		(rUseDeferredValue(),
			D(),
			r(),
			(zt = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg"><g d="M 12 0 L 12 2.673 L 0.861 6.809 L 0.861 7.191 L 12 11.327 L 12 14 L 0 9.418 L 0 4.582 Z" fill="transparent" height="14px" id="k2p9ldKT_" transform="translate(6 6)" width="12px"><path d="M 12 0 L 12 2.673 L 0.861 6.809 L 0.861 7.191 L 12 11.327 L 12 14 L 0 9.418 L 0 4.582 Z" fill="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))" height="14px" id="WtujmgdU9" width="12px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(Bt = rForwardRef((e, t) => {
				let { animated: n, layoutId: r, children: a, ...o } = e;
				return n
					? rJsx(u.div, { ...o, layoutId: r, ref: t })
					: rJsx(`div`, { ...o, ref: t });
			})),
			(Vt = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(Ht = _(
				rForwardRef(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: a,
						variant: o,
						...s
					} = Vt(e);
					return rJsx(Bt, {
						...s,
						className: S(`framer-B3jSF`, r),
						layoutId: a,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-B3jSF { -webkit-mask: ${zt}; aspect-ratio: 0.96; background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); mask: ${zt}; width: 24px; }`,
				],
				`framer-B3jSF`,
			)),
			(Ht.displayName = `Left One Black 2`),
			(Ut = Ht));
	}),
	Gt,
	Kt,
	qt,
	Jt,
	Yt,
	Xt,
	Zt,
	Qt,
	$t,
	en,
	tn,
	nn,
	rn,
	an,
	on,
	X,
	Z,
	sn,
	cn,
	Q,
	ln,
	un,
	dn,
	fn,
	pn,
	$,
	mn,
	hn;
e(() => {
	(rUseDeferredValue(),
		D(),
		p(),
		r(),
		He(),
		mt(),
		et(),
		Ye(),
		Je(),
		Rt(),
		Ze(),
		U(),
		Te(),
		W(),
		je(),
		Re(),
		R(),
		Me(),
		Wt(),
		nt(),
		(Gt = v($e)),
		(Kt = v(Ue)),
		(qt = v(Lt)),
		(Jt = v(pt)),
		(Yt = v(Qe)),
		(Xt = v(qe)),
		(Zt = v(Xe)),
		(Qt = {
			bdZml3n5i: `(min-width: 1200px)`,
			I36zWPs9o: `(min-width: 810px) and (max-width: 1199.98px)`,
			tGWXDOPHc: `(max-width: 809.98px)`,
		}),
		($t = () => typeof document < `u`),
		(en = []),
		(tn = `framer-Zfthd`),
		(nn = {
			bdZml3n5i: `framer-v-17009su`,
			I36zWPs9o: `framer-v-1bg0chp`,
			tGWXDOPHc: `framer-v-qxlbtg`,
		}),
		(rn = (e, t, n) => (e && t ? `position` : n)),
		(an = {
			opacity: 0.6,
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
		(on = (e, t) => `translateY(-50%) ${t}`),
		(X = (e) => (Array.isArray(e) ? e.length > 0 : e != null && e !== ``)),
		(Z = (e) =>
			typeof e == `object` && e && typeof e.src == `string`
				? e
				: typeof e == `string`
					? { src: e }
					: void 0),
		(sn = (e) => ({
			from: { alias: `VB1nd7WnP`, data: Ce, type: `Collection` },
			orderBy: [
				{
					arguments: [
						{ type: `LiteralValue`, value: e },
						{
							collection: `VB1nd7WnP`,
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
					collection: `VB1nd7WnP`,
					name: `Xgdhwh5Me`,
					type: `Identifier`,
				},
				{
					collection: `VB1nd7WnP`,
					name: `TBDlVXOGA`,
					type: `Identifier`,
				},
				{ collection: `VB1nd7WnP`, name: `id`, type: `Identifier` },
			],
			where: {
				left: {
					collection: `VB1nd7WnP`,
					name: `id`,
					type: `Identifier`,
				},
				operator: `in`,
				right: { type: `LiteralValue`, value: e },
				type: `BinaryOperation`,
			},
		})),
		(cn = ({ query: e, pageSize: t, children: n }) => n(me(e))),
		(Q = (...e) => {
			for (let t of e) if (t && typeof t == `string`) return t;
		}),
		(ln = (e, t) => {
			if (!(!e || typeof e != `object`)) return { ...e, alt: t };
		}),
		(un = {
			"Desktop - 1200": `bdZml3n5i`,
			Phone: `tGWXDOPHc`,
			Tablet: `I36zWPs9o`,
		}),
		(dn = ({ value: e }) =>
			oe()
				? null
				: rJsx(`style`, {
						dangerouslySetInnerHTML: { __html: e },
						"data-framer-html-style": ``,
					})),
		(fn = (e) => ({
			from: { alias: `luGPP9ZOT`, data: we, type: `Collection` },
			select: [
				{
					collection: `luGPP9ZOT`,
					name: `aCxyLQ1t8`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `iprSlvcgS`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `VSmb3sBiu`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `pXUZglhxh`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `iPR_E15pa`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `CvhGKpfzb`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `Rcd9YdMN_`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `DcR7dZYg7`,
					type: `Identifier`,
				},
				{
					alias: `Fc9gMlpS8`,
					arguments: [
						{
							from: {
								alias: `Fc9gMlpS8`,
								data: Ce,
								type: `Collection`,
							},
							orderBy: [
								{
									arguments: [
										{
											collection: `luGPP9ZOT`,
											name: `Fc9gMlpS8`,
											type: `Identifier`,
										},
										{
											collection: `Fc9gMlpS8`,
											name: `id`,
											type: `Identifier`,
										},
									],
									functionName: `INDEX_OF`,
									type: `FunctionCall`,
								},
							],
							select: [
								{
									collection: `Fc9gMlpS8`,
									name: `id`,
									type: `Identifier`,
								},
							],
							type: `Select`,
							where: {
								left: {
									collection: `Fc9gMlpS8`,
									name: `id`,
									type: `Identifier`,
								},
								operator: `in`,
								right: {
									collection: `luGPP9ZOT`,
									name: `Fc9gMlpS8`,
									type: `Identifier`,
								},
								type: `BinaryOperation`,
							},
						},
					],
					functionName: `FLAT_ARRAY`,
					type: `FunctionCall`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `XeBiPQ5VL`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `t9QzOmy7p`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `HhZ9YcumA`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `gBohv3AhW`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `KuMrwvX4m`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `p8fxY0bCX`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `PMkPNP5YT`,
					type: `Identifier`,
				},
				{
					collection: `luGPP9ZOT`,
					name: `OZdNue_CD`,
					type: `Identifier`,
				},
			],
			where: e,
		})),
		(pn = ({ height: e, id: t, width: n, ...r }) => ({
			...r,
			variant: un[r.variant] ?? r.variant ?? `bdZml3n5i`,
		})),
		($ = _(
			rForwardRef(function (e, r) {
				let a = rUseRef(null),
					l = r ?? a,
					p = rUseId(),
					{ activeLocale: m, setLocale: h } = pe(),
					_ = se(),
					v = fe(),
					[y] = me(fn(b(v, `luGPP9ZOT`))),
					x = (e) => {
						if (!y)
							throw new O(
								`No data matches path variables: ${JSON.stringify(v)}`,
							);
						return y[e];
					},
					{
						style: ne,
						className: T,
						layoutId: E,
						variant: D,
						aCxyLQ1t8: k = x(`aCxyLQ1t8`) ?? ``,
						iprSlvcgS: ie = x(`iprSlvcgS`) ?? ``,
						VSmb3sBiu: A = x(`VSmb3sBiu`) ?? ``,
						pXUZglhxh: ae = x(`pXUZglhxh`) ?? ``,
						iPR_E15pa: oe = x(`iPR_E15pa`) ?? ``,
						CvhGKpfzb: P = x(`CvhGKpfzb`),
						Rcd9YdMN_: F = x(`Rcd9YdMN_`) ?? ``,
						DcR7dZYg7: R = x(`DcR7dZYg7`) ?? ``,
						Fc9gMlpS8: ge = x(`Fc9gMlpS8`),
						XeBiPQ5VL: z = x(`XeBiPQ5VL`),
						t9QzOmy7p: B = x(`t9QzOmy7p`),
						HhZ9YcumA: V = x(`HhZ9YcumA`),
						gBohv3AhW: H = x(`gBohv3AhW`),
						KuMrwvX4m: ve = x(`KuMrwvX4m`) ?? [],
						p8fxY0bCX: ye = x(`p8fxY0bCX`),
						PMkPNP5YT: be = x(`PMkPNP5YT`),
						OZdNue_CD: xe = x(`OZdNue_CD`) ?? ``,
						...Se
					} = pn(e);
				he(rUseMemo(() => tt({ iprSlvcgS: ie }, m), [ie, m]));
				let [U, Ce] = le(D, Qt, !1),
					we = S(tn, ke, Ve, Ae, _e, Le),
					Te = rUseContext(de)?.isLayoutTemplate,
					W = rn(Te, !!rUseContext(d)?.transition?.layout);
				C();
				let De = X(z),
					Oe = X(B),
					je = X(V),
					Me = X(ve),
					Ne = X(xe),
					Pe = X(A),
					Fe = X(ae),
					Ie = X(oe),
					Re = X(Ee.CvhGKpfzb?.(P, m)),
					ze = Ee.CvhGKpfzb?.(P, m),
					Be = X(F),
					He = X(R),
					G = X(be),
					We = (e) => ($t() ? (U === `tGWXDOPHc` ? !1 : e) : !0);
				return (
					M({}),
					rJsx(de.Provider, {
						value: {
							activeVariantId: U,
							humanReadableVariantMap: un,
							primaryVariantId: `bdZml3n5i`,
							variantClassNames: nn,
						},
						children: rJsxs(f, {
							id: E ?? p,
							children: [
								rJsx(dn, {
									value: `html body { background: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)); }`,
								}),
								rJsxs(u.div, {
									...Se,
									className: S(we, `framer-17009su`, T),
									ref: l,
									style: { ...ne },
									children: [
										rJsx(u.div, {
											className: `framer-kucupd`,
											layout: W,
											children: rJsxs(`div`, {
												className: `framer-170vse4`,
												
												children: [
													rJsxs(`div`, {
														className: `framer-x2jtaw`,
														
														children: [
															rJsx(w, {
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
																	rJsx(I, {
																		height: 39,
																		children:
																			rJsx(
																				N,
																				{
																					className: `framer-1iz8dmw-container`,
																					nodeId: `KV7w9xruR`,
																					rendersWithMotion:
																						!0,
																					scopeId: `luGPP9ZOT`,
																					whileHover:
																						an,
																					children:
																						rJsx(
																							L,
																							{
																								breakpoint:
																									U,
																								overrides:
																									{
																										I36zWPs9o:
																											{
																												ZDsHw6oyQ:
																													e[1],
																											},
																										tGWXDOPHc:
																											{
																												ZDsHw6oyQ:
																													e[2],
																											},
																									},
																								children:
																									rJsx(
																										$e,
																										{
																											height: `100%`,
																											id: `KV7w9xruR`,
																											layoutId: `KV7w9xruR`,
																											lKGneMq0k: `Back to Projects`,
																											nlWGHHygY:
																												Ut,
																											nYSQk00RJ: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																											width: `100%`,
																											ZDsHw6oyQ:
																												e[0],
																										},
																									),
																							},
																						),
																				},
																			),
																	}),
															}),
															rJsx(L, {
																breakpoint: U,
																overrides: {
																	tGWXDOPHc: {
																		children:
																			rJsx(
																				t,
																				{
																					children:
																						rJsx(
																							`h6`,
																							{
																								className: `framer-styles-preset-f8hg8j`,
																								"data-styles-preset": `IGVKsj4vh`,
																								style: {
																									"--framer-text-alignment": `right`,
																									"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																								},
																								children: `[01 FFF]`,
																							},
																						),
																				},
																			),
																		transformTemplate:
																			void 0,
																	},
																},
																children: rJsx(g, {
																	__fromCanvasComponent:
																		!0,
																	children: rJsx(
																		t,
																		{
																			children:
																				rJsx(
																					`h6`,
																					{
																						className: `framer-styles-preset-nkm6se`,
																						"data-styles-preset": `BaUGQBb6A`,
																						style: {
																							"--framer-text-alignment": `right`,
																							"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																						},
																						children: `[01 DDD]`,
																					},
																				),
																		},
																	),
																	className: `framer-1lq5247`,
																	fonts: [
																		`Inter`,
																	],
																	transformTemplate:
																		on,
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																}),
															}),
														],
													}),
													rJsxs(`div`, {
														className: `framer-1yiu76m`,
														children: [
															rJsx(`div`, {
																className: `framer-15yb2lp`,
																children: rJsxs(
																	`div`,
																	{
																		className: `framer-xk4c75`,
																		children:
																			[
																				De !==
																					!1 &&
																					rJsx(
																						`div`,
																						{
																							className: `framer-1n5one1`,
																							children:
																								rJsx(
																									L,
																									{
																										breakpoint:
																											U,
																										overrides:
																											{
																												I36zWPs9o:
																													{
																														background:
																															{
																																alt: ``,
																																fit: `fill`,
																																intrinsicHeight: 445,
																																intrinsicWidth: 446,
																																pixelHeight: 1672,
																																pixelWidth: 2016,
																																sizes: `calc(max((min(${_?.width || `100vw`} - 40px, 1600px) - 60px) / 6, 50px) * 4 - 4px)`,
																																...Z(
																																	z,
																																),
																															},
																													},
																												tGWXDOPHc:
																													{
																														background:
																															{
																																alt: ``,
																																fit: `fill`,
																																intrinsicHeight: 445,
																																intrinsicWidth: 446,
																																pixelHeight: 1672,
																																pixelWidth: 2016,
																																sizes: `calc(max(min(${_?.width || `100vw`} - 40px, 1600px), 50px) - 4px)`,
																																...Z(
																																	z,
																																),
																															},
																													},
																											},
																										children:
																											rJsx(
																												j,
																												{
																													background:
																														{
																															alt: ``,
																															fit: `fill`,
																															intrinsicHeight: 445,
																															intrinsicWidth: 446,
																															pixelHeight: 1672,
																															pixelWidth: 2016,
																															sizes: `calc(max((min(${_?.width || `100vw`} - 40px, 1600px) - 80px) / 6, 50px) * 4 - 4px)`,
																															...Z(
																																z,
																															),
																														},
																													className: `framer-klkdly`,
																													
																													fitImageDimension: `height`,
																													children:
																														rJsx(
																															ce,
																															{
																																animated:
																																	!1,
																																className: `framer-1vdkiai`,
																																Component:
																																	ye,
																																layoutId: `g6H0pQrhW`,
																															},
																														),
																												},
																											),
																									},
																								),
																						},
																					),
																				Oe !==
																					!1 &&
																					rJsx(
																						`div`,
																						{
																							className: `framer-j764vd`,
																							children:
																								rJsx(
																									L,
																									{
																										breakpoint:
																											U,
																										overrides:
																											{
																												I36zWPs9o:
																													{
																														background:
																															{
																																alt: ``,
																																fit: `fill`,
																																intrinsicHeight: 445,
																																intrinsicWidth: 446,
																																pixelHeight: 1350,
																																pixelWidth: 2016,
																																sizes: `calc(max((min(${_?.width || `100vw`} - 40px, 1600px) - 60px) / 6, 50px) * 4 - 4px)`,
																																...Z(
																																	B,
																																),
																															},
																													},
																												tGWXDOPHc:
																													{
																														background:
																															{
																																alt: ``,
																																fit: `fill`,
																																intrinsicHeight: 445,
																																intrinsicWidth: 446,
																																pixelHeight: 1350,
																																pixelWidth: 2016,
																																sizes: `calc(max(min(${_?.width || `100vw`} - 40px, 1600px), 50px) - 4px)`,
																																...Z(
																																	B,
																																),
																															},
																													},
																											},
																										children:
																											rJsx(
																												j,
																												{
																													background:
																														{
																															alt: ``,
																															fit: `fill`,
																															intrinsicHeight: 445,
																															intrinsicWidth: 446,
																															pixelHeight: 1350,
																															pixelWidth: 2016,
																															sizes: `calc(max((min(${_?.width || `100vw`} - 40px, 1600px) - 80px) / 6, 50px) * 4 - 4px)`,
																															...Z(
																																B,
																															),
																														},
																													className: `framer-1l1kie`,
																													
																													fitImageDimension: `height`,
																												},
																											),
																									},
																								),
																						},
																					),
																				je !==
																					!1 &&
																					rJsxs(
																						`div`,
																						{
																							className: `framer-3x8cxm`,
																							children:
																								[
																									rJsx(
																										`div`,
																										{
																											className: `framer-12f439j`,
																											
																											children:
																												rJsx(
																													L,
																													{
																														breakpoint:
																															U,
																														overrides:
																															{
																																I36zWPs9o:
																																	{
																																		background:
																																			{
																																				alt: ``,
																																				fit: `fill`,
																																				intrinsicHeight: 445,
																																				intrinsicWidth: 446,
																																				pixelHeight: 1670,
																																				pixelWidth: 1006,
																																				sizes: `max((max((min(${_?.width || `100vw`} - 40px, 1600px) - 60px) / 6, 50px) * 4 - 6px) / 2, 50px)`,
																																				...Z(
																																					V,
																																				),
																																			},
																																	},
																																tGWXDOPHc:
																																	{
																																		background:
																																			{
																																				alt: ``,
																																				fit: `fill`,
																																				intrinsicHeight: 445,
																																				intrinsicWidth: 446,
																																				pixelHeight: 1670,
																																				pixelWidth: 1006,
																																				sizes: `max(max(min(${_?.width || `100vw`} - 40px, 1600px), 50px) - 4px, 50px)`,
																																				...Z(
																																					V,
																																				),
																																			},
																																	},
																															},
																														children:
																															rJsx(
																																j,
																																{
																																	background:
																																		{
																																			alt: ``,
																																			fit: `fill`,
																																			intrinsicHeight: 445,
																																			intrinsicWidth: 446,
																																			pixelHeight: 1670,
																																			pixelWidth: 1006,
																																			sizes: `max((max((min(${_?.width || `100vw`} - 40px, 1600px) - 80px) / 6, 50px) * 4 - 6px) / 2, 50px)`,
																																			...Z(
																																				V,
																																			),
																																		},
																																	className: `framer-x2karc`,
																																	
																																	fitImageDimension: `height`,
																																},
																															),
																													},
																												),
																										},
																									),
																									rJsx(
																										`div`,
																										{
																											className: `framer-dh7kld`,
																											children:
																												rJsx(
																													L,
																													{
																														breakpoint:
																															U,
																														overrides:
																															{
																																I36zWPs9o:
																																	{
																																		background:
																																			{
																																				alt: ``,
																																				fit: `fill`,
																																				intrinsicHeight: 445,
																																				intrinsicWidth: 446,
																																				pixelHeight: 1670,
																																				pixelWidth: 1006,
																																				sizes: `max((max((min(${_?.width || `100vw`} - 40px, 1600px) - 60px) / 6, 50px) * 4 - 6px) / 2, 50px)`,
																																				...Z(
																																					H,
																																				),
																																			},
																																	},
																																tGWXDOPHc:
																																	{
																																		background:
																																			{
																																				alt: ``,
																																				fit: `fill`,
																																				intrinsicHeight: 445,
																																				intrinsicWidth: 446,
																																				pixelHeight: 1670,
																																				pixelWidth: 1006,
																																				sizes: `max(max(min(${_?.width || `100vw`} - 40px, 1600px), 50px) - 4px, 50px)`,
																																				...Z(
																																					H,
																																				),
																																			},
																																	},
																															},
																														children:
																															rJsx(
																																j,
																																{
																																	background:
																																		{
																																			alt: ``,
																																			fit: `fill`,
																																			intrinsicHeight: 445,
																																			intrinsicWidth: 446,
																																			pixelHeight: 1670,
																																			pixelWidth: 1006,
																																			sizes: `max((max((min(${_?.width || `100vw`} - 40px, 1600px) - 80px) / 6, 50px) * 4 - 6px) / 2, 50px)`,
																																			...Z(
																																				H,
																																			),
																																		},
																																	className: `framer-1osuayq`,
																																	
																																	fitImageDimension: `height`,
																																},
																															),
																													},
																												),
																										},
																									),
																								],
																						},
																					),
																				Me !==
																					!1 &&
																					rJsx(
																						`div`,
																						{
																							className: `framer-1904zut`,
																							children:
																								rJsx(
																									`div`,
																									{
																										className: `framer-1bebgym`,
																										children:
																											ve?.map(
																												(
																													{
																														CzKJd55Q3:
																															e,
																														id: t,
																													},
																													n,
																												) =>
																													rJsx(
																														f,
																														{
																															id: `kwZ48PT2A-${t ?? n}`,
																															children:
																																rJsx(
																																	L,
																																	{
																																		breakpoint:
																																			U,
																																		overrides:
																																			{
																																				I36zWPs9o:
																																					{
																																						background:
																																							{
																																								alt: ``,
																																								fit: `fill`,
																																								sizes: `calc(max((min(${_?.width || `100vw`} - 40px, 1600px) - 60px) / 6, 50px) * 4 - 4px)`,
																																								...Z(
																																									e,
																																								),
																																							},
																																					},
																																				tGWXDOPHc:
																																					{
																																						background:
																																							{
																																								alt: ``,
																																								fit: `fill`,
																																								sizes: `calc(max(min(${_?.width || `100vw`} - 40px, 1600px), 50px) - 4px)`,
																																								...Z(
																																									e,
																																								),
																																							},
																																					},
																																			},
																																		children:
																																			rJsx(
																																				j,
																																				{
																																					background:
																																						{
																																							alt: ``,
																																							fit: `fill`,
																																							sizes: `calc(max((min(${_?.width || `100vw`} - 40px, 1600px) - 80px) / 6, 50px) * 4 - 4px)`,
																																							...Z(
																																								e,
																																							),
																																						},
																																					className: `framer-k3znkc`,
																																					
																																					fitImageDimension: `height`,
																																				},
																																			),
																																	},
																																),
																														},
																														t ??
																															n,
																													),
																											),
																									},
																								),
																						},
																					),
																				Ne !==
																					!1 &&
																					rJsx(
																						`div`,
																						{
																							className: `framer-rix1aa`,
																							children:
																								rJsx(
																									I,
																									{
																										children:
																											rJsx(
																												N,
																												{
																													className: `framer-58ubb0-container`,
																													isAuthoredByUser:
																														!0,
																													isModuleExternal:
																														!0,
																													nodeId: `FBbFfFApM`,
																													scopeId: `luGPP9ZOT`,
																													children:
																														rJsx(
																															Ue,
																															{
																																autoplay:
																																	!1,
																																backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																																borderRadius: 8,
																																bottomLeftRadius: 8,
																																bottomRightRadius: 8,
																																controls:
																																	!0,
																																height: `100%`,
																																id: `FBbFfFApM`,
																																isMixedBorderRadius:
																																	!1,
																																layoutId: `FBbFfFApM`,
																																loop: !1,
																																mute: !0,
																																style: {
																																	height: `100%`,
																																	width: `100%`,
																																},
																																topLeftRadius: 8,
																																topRightRadius: 8,
																																video: xe,
																																width: `100%`,
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
															}),
															rJsx(`div`, {
																className: `framer-qzwaoa`,
																children: rJsxs(
																	`div`,
																	{
																		className: `framer-o475f0`,
																		children:
																			[
																				rJsxs(
																					`div`,
																					{
																						className: `framer-hbbsi2`,
																						children:
																							[
																								rJsx(
																									g,
																									{
																										__fromCanvasComponent:
																											!0,
																										children:
																											rJsx(
																												t,
																												{
																													children:
																														rJsx(
																															`h1`,
																															{
																																className: `framer-styles-preset-h6j8it`,
																																"data-styles-preset": `dBxplyp6M`,
																																style: {
																																	"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																},
																																children: `Lementa`,
																															},
																														),
																												},
																											),
																										className: `framer-s722ob`,
																										fonts: [
																											`Inter`,
																										],
																										text: k,
																										verticalAlignment: `top`,
																										withExternalLayout:
																											!0,
																									},
																								),
																								rJsx(
																									`div`,
																									{
																										className: `framer-1chq3y8`,
																										children:
																											rJsx(
																												ue,
																												{
																													children:
																														rJsx(
																															cn,
																															{
																																query: sn(
																																	ge,
																																),
																																children:
																																	(
																																		e,
																																		n,
																																		r,
																																	) =>
																																		rJsx(
																																			ee,
																																			{
																																				children:
																																					e?.map(
																																						(
																																							{
																																								id: e,
																																								TBDlVXOGA:
																																									n,
																																								Xgdhwh5Me:
																																									r,
																																							},
																																							a,
																																						) => (
																																							(r ??= ``),
																																							(n ??= ``),
																																							rJsx(
																																								f,
																																								{
																																									id: `VB1nd7WnP-${e}`,
																																									children:
																																										rJsx(
																																											re.Provider,
																																											{
																																												value: {
																																													TBDlVXOGA:
																																														n,
																																												},
																																												children:
																																													rJsx(
																																														`div`,
																																														{
																																															className: `framer-mfvmk2`,
																																															children:
																																																rJsx(
																																																	g,
																																																	{
																																																		__fromCanvasComponent:
																																																			!0,
																																																		children:
																																																			rJsx(
																																																				t,
																																																				{
																																																					children:
																																																						rJsx(
																																																							`h6`,
																																																							{
																																																								className: `framer-styles-preset-12tby5a`,
																																																								"data-styles-preset": `j9HsFBXUW`,
																																																								children: `Website`,
																																																							},
																																																						),
																																																				},
																																																			),
																																																		className: `framer-upgovp`,
																																																		fonts: [
																																																			`Inter`,
																																																		],
																																																		text: r,
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
																															},
																														),
																												},
																											),
																									},
																								),
																							],
																					},
																				),
																				rJsx(
																					g,
																					{
																						__fromCanvasComponent:
																							!0,
																						children:
																							rJsx(
																								t,
																								{
																									children:
																										rJsx(
																											`p`,
																											{
																												className: `framer-styles-preset-11kcybb`,
																												"data-styles-preset": `pPuowuywh`,
																												style: {
																													"--framer-text-color": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																												},
																												children: `Lementa’s brand was rebuilt end to end: clearer positioning, a modular visual identity, and a streamlined e-commerce UX with faster pages and AA accessibility. Unified content (photo, copy, size/fit notes) and optimized checkout drive conversion and repeat purchase — cleaner story, smoother shopping, better results.`,
																											},
																										),
																								},
																							),
																						className: `framer-1nxen2r`,
																						fonts: [
																							`Inter`,
																						],
																						text: ie,
																						verticalAlignment: `top`,
																						withExternalLayout:
																							!0,
																					},
																				),
																				rJsxs(
																					`div`,
																					{
																						className: `framer-1jb6pjo`,
																						children:
																							[
																								Pe !==
																									!1 &&
																									rJsx(
																										`div`,
																										{
																											className: `framer-gchtux`,
																										},
																									),
																								Pe !==
																									!1 &&
																									rJsxs(
																										`div`,
																										{
																											className: `framer-12kkedg`,
																											
																											children:
																												[
																													rJsx(
																														g,
																														{
																															__fromCanvasComponent:
																																!0,
																															children:
																																rJsx(
																																	t,
																																	{
																																		children:
																																			rJsx(
																																				`h6`,
																																				{
																																					className: `framer-styles-preset-12tby5a`,
																																					"data-styles-preset": `j9HsFBXUW`,
																																					style: {
																																						"--framer-text-alignment": `left`,
																																						"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																					},
																																					children: `2025`,
																																				},
																																			),
																																	},
																																),
																															className: `framer-1b31kny`,
																															fonts: [
																																`Inter`,
																															],
																															text: A,
																															verticalAlignment: `top`,
																															withExternalLayout:
																																!0,
																														},
																													),
																													rJsx(
																														L,
																														{
																															breakpoint:
																																U,
																															overrides:
																																{
																																	I36zWPs9o:
																																		{
																																			children:
																																				rJsx(
																																					t,
																																					{
																																						children:
																																							rJsx(
																																								`h6`,
																																								{
																																									className: `framer-styles-preset-12tby5a`,
																																									"data-styles-preset": `j9HsFBXUW`,
																																									style: {
																																										"--framer-text-alignment": `left`,
																																										"--framer-text-color": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																									},
																																									children: `Year`,
																																								},
																																							),
																																					},
																																				),
																																		},
																																},
																															children:
																																rJsx(
																																	g,
																																	{
																																		__fromCanvasComponent:
																																			!0,
																																		children:
																																			rJsx(
																																				t,
																																				{
																																					children:
																																						rJsx(
																																							`h6`,
																																							{
																																								className: `framer-styles-preset-12tby5a`,
																																								"data-styles-preset": `j9HsFBXUW`,
																																								style: {
																																									"--framer-text-alignment": `right`,
																																									"--framer-text-color": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																								},
																																								children: `Year`,
																																							},
																																						),
																																				},
																																			),
																																		className: `framer-1ulwsu6`,
																																		fonts: [
																																			`Inter`,
																																		],
																																		verticalAlignment: `top`,
																																		withExternalLayout:
																																			!0,
																																	},
																																),
																														},
																													),
																													rJsx(
																														`div`,
																														{
																															className: `framer-1kdzhw8`,
																														},
																													),
																												],
																										},
																									),
																								Fe !==
																									!1 &&
																									rJsxs(
																										`div`,
																										{
																											className: `framer-s8rrnw`,
																											children:
																												[
																													rJsx(
																														g,
																														{
																															__fromCanvasComponent:
																																!0,
																															children:
																																rJsx(
																																	t,
																																	{
																																		children:
																																			rJsx(
																																				`h6`,
																																				{
																																					className: `framer-styles-preset-12tby5a`,
																																					"data-styles-preset": `j9HsFBXUW`,
																																					style: {
																																						"--framer-text-alignment": `left`,
																																						"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																					},
																																					children: `Fashion`,
																																				},
																																			),
																																	},
																																),
																															className: `framer-ek9z2t`,
																															fonts: [
																																`Inter`,
																															],
																															text: ae,
																															verticalAlignment: `top`,
																															withExternalLayout:
																																!0,
																														},
																													),
																													rJsx(
																														L,
																														{
																															breakpoint:
																																U,
																															overrides:
																																{
																																	I36zWPs9o:
																																		{
																																			children:
																																				rJsx(
																																					t,
																																					{
																																						children:
																																							rJsx(
																																								`h6`,
																																								{
																																									className: `framer-styles-preset-12tby5a`,
																																									"data-styles-preset": `j9HsFBXUW`,
																																									style: {
																																										"--framer-text-alignment": `left`,
																																										"--framer-text-color": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																									},
																																									children: `Industry`,
																																								},
																																							),
																																					},
																																				),
																																		},
																																},
																															children:
																																rJsx(
																																	g,
																																	{
																																		__fromCanvasComponent:
																																			!0,
																																		children:
																																			rJsx(
																																				t,
																																				{
																																					children:
																																						rJsx(
																																							`h6`,
																																							{
																																								className: `framer-styles-preset-12tby5a`,
																																								"data-styles-preset": `j9HsFBXUW`,
																																								style: {
																																									"--framer-text-alignment": `right`,
																																									"--framer-text-color": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																								},
																																								children: `Industry`,
																																							},
																																						),
																																				},
																																			),
																																		className: `framer-1rt3tuh`,
																																		fonts: [
																																			`Inter`,
																																		],
																																		verticalAlignment: `top`,
																																		withExternalLayout:
																																			!0,
																																	},
																																),
																														},
																													),
																													rJsx(
																														`div`,
																														{
																															className: `framer-t3jk6d`,
																														},
																													),
																												],
																										},
																									),
																								Ie !==
																									!1 &&
																									rJsxs(
																										`div`,
																										{
																											className: `framer-10mrayy`,
																											children:
																												[
																													rJsx(
																														g,
																														{
																															__fromCanvasComponent:
																																!0,
																															children:
																																rJsx(
																																	t,
																																	{
																																		children:
																																			rJsx(
																																				`h6`,
																																				{
																																					className: `framer-styles-preset-12tby5a`,
																																					"data-styles-preset": `j9HsFBXUW`,
																																					style: {
																																						"--framer-text-alignment": `left`,
																																						"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																					},
																																					children: `UK, London`,
																																				},
																																			),
																																	},
																																),
																															className: `framer-1ykve2h`,
																															fonts: [
																																`Inter`,
																															],
																															text: oe,
																															verticalAlignment: `top`,
																															withExternalLayout:
																																!0,
																														},
																													),
																													rJsx(
																														L,
																														{
																															breakpoint:
																																U,
																															overrides:
																																{
																																	I36zWPs9o:
																																		{
																																			children:
																																				rJsx(
																																					t,
																																					{
																																						children:
																																							rJsx(
																																								`h6`,
																																								{
																																									className: `framer-styles-preset-12tby5a`,
																																									"data-styles-preset": `j9HsFBXUW`,
																																									style: {
																																										"--framer-text-alignment": `left`,
																																										"--framer-text-color": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																									},
																																									children: `Client Location`,
																																								},
																																							),
																																					},
																																				),
																																		},
																																},
																															children:
																																rJsx(
																																	g,
																																	{
																																		__fromCanvasComponent:
																																			!0,
																																		children:
																																			rJsx(
																																				t,
																																				{
																																					children:
																																						rJsx(
																																							`h6`,
																																							{
																																								className: `framer-styles-preset-12tby5a`,
																																								"data-styles-preset": `j9HsFBXUW`,
																																								style: {
																																									"--framer-text-alignment": `right`,
																																									"--framer-text-color": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																								},
																																								children: `Client Location`,
																																							},
																																						),
																																				},
																																			),
																																		className: `framer-h0sgki`,
																																		fonts: [
																																			`Inter`,
																																		],
																																		verticalAlignment: `top`,
																																		withExternalLayout:
																																			!0,
																																	},
																																),
																														},
																													),
																													rJsx(
																														`div`,
																														{
																															className: `framer-o3ff3`,
																														},
																													),
																												],
																										},
																									),
																								Re !==
																									!1 &&
																									rJsxs(
																										`div`,
																										{
																											className: `framer-ulgnz7`,
																											children:
																												[
																													rJsx(
																														g,
																														{
																															__fromCanvasComponent:
																																!0,
																															children:
																																rJsx(
																																	t,
																																	{
																																		children:
																																			rJsx(
																																				`h6`,
																																				{
																																					className: `framer-styles-preset-12tby5a`,
																																					"data-styles-preset": `j9HsFBXUW`,
																																					style: {
																																						"--framer-text-alignment": `left`,
																																						"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																					},
																																					children: `1 Month`,
																																				},
																																			),
																																	},
																																),
																															className: `framer-fay8lw`,
																															fonts: [
																																`Inter`,
																															],
																															text: ze,
																															verticalAlignment: `top`,
																															withExternalLayout:
																																!0,
																														},
																													),
																													rJsx(
																														L,
																														{
																															breakpoint:
																																U,
																															overrides:
																																{
																																	I36zWPs9o:
																																		{
																																			children:
																																				rJsx(
																																					t,
																																					{
																																						children:
																																							rJsx(
																																								`h6`,
																																								{
																																									className: `framer-styles-preset-12tby5a`,
																																									"data-styles-preset": `j9HsFBXUW`,
																																									style: {
																																										"--framer-text-alignment": `left`,
																																										"--framer-text-color": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																									},
																																									children: `Duration`,
																																								},
																																							),
																																					},
																																				),
																																		},
																																},
																															children:
																																rJsx(
																																	g,
																																	{
																																		__fromCanvasComponent:
																																			!0,
																																		children:
																																			rJsx(
																																				t,
																																				{
																																					children:
																																						rJsx(
																																							`h6`,
																																							{
																																								className: `framer-styles-preset-12tby5a`,
																																								"data-styles-preset": `j9HsFBXUW`,
																																								style: {
																																									"--framer-text-alignment": `right`,
																																									"--framer-text-color": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																								},
																																								children: `Duration`,
																																							},
																																						),
																																				},
																																			),
																																		className: `framer-m9347r`,
																																		fonts: [
																																			`Inter`,
																																		],
																																		verticalAlignment: `top`,
																																		withExternalLayout:
																																			!0,
																																	},
																																),
																														},
																													),
																													rJsx(
																														`div`,
																														{
																															className: `framer-1onel1i`,
																														},
																													),
																												],
																										},
																									),
																								Be !==
																									!1 &&
																									rJsxs(
																										`div`,
																										{
																											className: `framer-1o8zyk1`,
																											children:
																												[
																													rJsx(
																														L,
																														{
																															breakpoint:
																																U,
																															overrides:
																																{
																																	tGWXDOPHc:
																																		{
																																			children:
																																				rJsx(
																																					t,
																																					{
																																						children:
																																							rJsx(
																																								`h6`,
																																								{
																																									className: `framer-styles-preset-12tby5a`,
																																									"data-styles-preset": `j9HsFBXUW`,
																																									style: {
																																										"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																									},
																																									children: `Barone Group Inc. Barone Group Inc.Barone Group Inc.`,
																																								},
																																							),
																																					},
																																				),
																																		},
																																},
																															children:
																																rJsx(
																																	g,
																																	{
																																		__fromCanvasComponent:
																																			!0,
																																		children:
																																			rJsx(
																																				t,
																																				{
																																					children:
																																						rJsx(
																																							`h6`,
																																							{
																																								className: `framer-styles-preset-12tby5a`,
																																								"data-styles-preset": `j9HsFBXUW`,
																																								style: {
																																									"--framer-text-alignment": `left`,
																																									"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																																								},
																																								children: `Barone Group Inc.`,
																																							},
																																						),
																																				},
																																			),
																																		className: `framer-1drin9f`,
																																		fonts: [
																																			`Inter`,
																																		],
																																		text: F,
																																		verticalAlignment: `top`,
																																		withExternalLayout:
																																			!0,
																																	},
																																),
																														},
																													),
																													rJsx(
																														L,
																														{
																															breakpoint:
																																U,
																															overrides:
																																{
																																	I36zWPs9o:
																																		{
																																			children:
																																				rJsx(
																																					t,
																																					{
																																						children:
																																							rJsx(
																																								`h6`,
																																								{
																																									className: `framer-styles-preset-12tby5a`,
																																									"data-styles-preset": `j9HsFBXUW`,
																																									style: {
																																										"--framer-text-alignment": `left`,
																																										"--framer-text-color": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																									},
																																									children: `Client`,
																																								},
																																							),
																																					},
																																				),
																																		},
																																},
																															children:
																																rJsx(
																																	g,
																																	{
																																		__fromCanvasComponent:
																																			!0,
																																		children:
																																			rJsx(
																																				t,
																																				{
																																					children:
																																						rJsx(
																																							`h6`,
																																							{
																																								className: `framer-styles-preset-12tby5a`,
																																								"data-styles-preset": `j9HsFBXUW`,
																																								style: {
																																									"--framer-text-alignment": `right`,
																																									"--framer-text-color": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																																								},
																																								children: `Client`,
																																							},
																																						),
																																				},
																																			),
																																		className: `framer-neqyh0`,
																																		fonts: [
																																			`Inter`,
																																		],
																																		verticalAlignment: `top`,
																																		withExternalLayout:
																																			!0,
																																	},
																																),
																														},
																													),
																													rJsx(
																														`div`,
																														{
																															className: `framer-ar6c0s`,
																														},
																													),
																												],
																										},
																									),
																							],
																					},
																				),
																				rJsxs(
																					`div`,
																					{
																						className: `framer-2s6kax`,
																						children:
																							[
																								He !==
																									!1 &&
																									rJsx(
																										w,
																										{
																											links: [
																												{
																													href: R,
																													implicitPathVariables:
																														void 0,
																												},
																												{
																													href: R,
																													implicitPathVariables:
																														void 0,
																												},
																												{
																													href: R,
																													implicitPathVariables:
																														void 0,
																												},
																											],
																											children:
																												(
																													e,
																												) =>
																													rJsx(
																														L,
																														{
																															breakpoint:
																																U,
																															overrides:
																																{
																																	I36zWPs9o:
																																		{
																																			height: 50,
																																			width: `calc(max((min(${_?.width || `100vw`} - 40px, 1600px) - 60px) / 6, 50px) * 2 - 40px)`,
																																		},
																																	tGWXDOPHc:
																																		{
																																			height: 55,
																																			width: `calc(max(min(${_?.width || `100vw`} - 40px, 1600px), 50px) - 50px)`,
																																		},
																																},
																															children:
																																rJsx(
																																	I,
																																	{
																																		height: 60,
																																		width: `calc(max((min(${_?.width || `100vw`} - 40px, 1600px) - 80px) / 6, 50px) * 2 - 60px)`,
																																		children:
																																			rJsx(
																																				N,
																																				{
																																					className: `framer-h2401o-container`,
																																					nodeId: `zgWVc839y`,
																																					scopeId: `luGPP9ZOT`,
																																					children:
																																						rJsx(
																																							L,
																																							{
																																								breakpoint:
																																									U,
																																								overrides:
																																									{
																																										I36zWPs9o:
																																											{
																																												yCwKnnOkh:
																																													e[1],
																																											},
																																										tGWXDOPHc:
																																											{
																																												yCwKnnOkh:
																																													e[2],
																																											},
																																									},
																																								children:
																																									rJsx(
																																										Lt,
																																										{
																																											height: `100%`,
																																											id: `zgWVc839y`,
																																											Ijr7Moz5R: `Open Website`,
																																											layoutId: `zgWVc839y`,
																																											PJIPuOIqn:
																																												!0,
																																											style: {
																																												height: `100%`,
																																												width: `100%`,
																																											},
																																											width: `100%`,
																																											yCwKnnOkh:
																																												e[0],
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
																								We(
																									G !==
																										!1,
																								) &&
																									rJsx(
																										L,
																										{
																											breakpoint:
																												U,
																											overrides:
																												{
																													I36zWPs9o:
																														{
																															width: `calc(max((min(${_?.width || `100vw`} - 40px, 1600px) - 60px) / 6, 50px) * 2 - 40px)`,
																														},
																												},
																											children:
																												rJsx(
																													I,
																													{
																														height: 169,
																														width: `calc(max((min(${_?.width || `100vw`} - 40px, 1600px) - 80px) / 6, 50px) * 2 - 60px)`,
																														children:
																															rJsx(
																																N,
																																{
																																	className:
																																		S(
																																			`framer-kc7or9-container`,
																																			`hidden-qxlbtg`,
																																			G ===
																																				!1 &&
																																				`hidden-17009su`,
																																			G ===
																																				!1 &&
																																				`hidden-1bg0chp`,
																																		),
																																	nodeId: `s5gNU_FzS`,
																																	scopeId: `luGPP9ZOT`,
																																	children:
																																		rJsx(
																																			L,
																																			{
																																				breakpoint:
																																					U,
																																				overrides:
																																					{
																																						I36zWPs9o:
																																							{
																																								variant:
																																									Q(
																																										`eiFIzOFII`,
																																									),
																																							},
																																					},
																																				children:
																																					rJsx(
																																						pt,
																																						{
																																							height: `100%`,
																																							id: `s5gNU_FzS`,
																																							kwYoNIFOo: `Check mobile version`,
																																							layoutId: `s5gNU_FzS`,
																																							PuPkBiwHw:
																																								Z(
																																									be,
																																								),
																																							RqhoLhdJv: `Scan QR-code on smartphone with camera and open.`,
																																							style: {
																																								width: `100%`,
																																							},
																																							variant:
																																								Q(
																																									`WtpbfKxMy`,
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
																										},
																									),
																							],
																					},
																				),
																			],
																	},
																),
															}),
														],
													}),
												],
											}),
										}),
										rJsx(u.div, {
											className: `framer-1lpf79x`,
											layout: W,
											children: rJsx(`div`, {
												className: `framer-196dyeq`,
												
												children: rJsxs(`div`, {
													className: `framer-l8ufmn`,
													
													children: [
														rJsx(L, {
															breakpoint: U,
															overrides: {
																tGWXDOPHc: {
																	children: rJsx(
																		t,
																		{
																			children:
																				rJsx(
																					`h6`,
																					{
																						className: `framer-styles-preset-f8hg8j`,
																						"data-styles-preset": `IGVKsj4vh`,
																						style: {
																							"--framer-text-alignment": `left`,
																							"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																						},
																						children: `Other Projects`,
																					},
																				),
																		},
																	),
																},
															},
															children: rJsx(g, {
																__fromCanvasComponent:
																	!0,
																children: rJsx(t, {
																	children: rJsx(
																		`h6`,
																		{
																			className: `framer-styles-preset-nkm6se`,
																			"data-styles-preset": `BaUGQBb6A`,
																			style: {
																				"--framer-text-alignment": `left`,
																				"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			},
																			children: `Other Projects`,
																		},
																	),
																}),
																className: `framer-1gdi9w7`,
																fonts: [
																	`Inter`,
																],
																verticalAlignment: `top`,
																withExternalLayout:
																	!0,
															}),
														}),
														rJsx(L, {
															breakpoint: U,
															overrides: {
																tGWXDOPHc: {
																	children: rJsx(
																		t,
																		{
																			children:
																				rJsx(
																					`h6`,
																					{
																						className: `framer-styles-preset-f8hg8j`,
																						"data-styles-preset": `IGVKsj4vh`,
																						style: {
																							"--framer-text-alignment": `right`,
																							"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																						},
																						children: `[02]`,
																					},
																				),
																		},
																	),
																},
															},
															children: rJsx(g, {
																__fromCanvasComponent:
																	!0,
																children: rJsx(t, {
																	children: rJsx(
																		`h6`,
																		{
																			className: `framer-styles-preset-nkm6se`,
																			"data-styles-preset": `BaUGQBb6A`,
																			style: {
																				"--framer-text-alignment": `right`,
																				"--framer-text-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			},
																			children: `[02]`,
																		},
																	),
																}),
																className: `framer-rg0hfd`,
																fonts: [
																	`Inter`,
																],
																verticalAlignment: `top`,
																withExternalLayout:
																	!0,
															}),
														}),
													],
												}),
											}),
										}),
										rJsx(I, {
											height: 1838,
											width: `calc(${_?.width || `100vw`} - 40px)`,
											children: rJsx(N, {
												className: `framer-10q4b7r-container`,
												layout: W,
												nodeId: `vPgRBAFo5`,
												scopeId: `luGPP9ZOT`,
												children: rJsx(L, {
													breakpoint: U,
													overrides: {
														I36zWPs9o: {
															FQz_lWggO: `0px 30px 60px 30px`,
															variant:
																Q(`GLMFLpW43`),
														},
														tGWXDOPHc: {
															FQz_lWggO: `0px 25px 40px 25px`,
															OafLKlJQX: `15px 15px`,
															variant:
																Q(`eALG5uHM4`),
														},
													},
													children: rJsx(Qe, {
														fEnNZuEJR: !0,
														FQz_lWggO: `0px 40px 90px 40px`,
														height: `100%`,
														id: `vPgRBAFo5`,
														layoutId: `vPgRBAFo5`,
														OafLKlJQX: `20px`,
														sCPIWVnx3: `0px`,
														style: {
															width: `100%`,
														},
														tDTWPj9WT: !1,
														UUUwIxYLW: k,
														variant: Q(`xD2gGXCuN`),
														width: `100%`,
														Y2LHe67nO: !1,
													}),
												}),
											}),
										}),
										rJsx(I, {
											height: 845,
											width: `calc(${_?.width || `100vw`} - 40px)`,
											children: rJsx(N, {
												className: `framer-w0z124-container`,
												layout: W,
												nodeId: `YQiX_DjTN`,
												scopeId: `luGPP9ZOT`,
												children: rJsx(L, {
													breakpoint: U,
													overrides: {
														I36zWPs9o: {
															variant:
																Q(`yhiDoP7Ob`),
														},
														tGWXDOPHc: {
															variant:
																Q(`t19QzsBBr`),
														},
													},
													children: rJsx(qe, {
														height: `100%`,
														id: `YQiX_DjTN`,
														layoutId: `YQiX_DjTN`,
														RRI5tEhQp: `[03]`,
														style: {
															width: `100%`,
														},
														variant: Q(`UUBCRSHpV`),
														width: `100%`,
														WOX4_og97: `Our Packages`,
													}),
												}),
											}),
										}),
										rJsx(I, {
											height: 945,
											width: `calc(${_?.width || `100vw`} - 40px)`,
											children: rJsx(N, {
												className: `framer-dnmbiq-container`,
												layout: W,
												nodeId: `os0ojwl0Y`,
												scopeId: `luGPP9ZOT`,
												children: rJsx(L, {
													breakpoint: U,
													overrides: {
														I36zWPs9o: {
															variant:
																Q(`Tv_osDAig`),
														},
														tGWXDOPHc: {
															variant:
																Q(`z_2AweZZU`),
														},
													},
													children: rJsx(Xe, {
														height: `100%`,
														id: `os0ojwl0Y`,
														j3RW8NS6C: `Start a Project`,
														kZYrX9giG: `Tell to our manager about the goal. We’ll reply with scope and timeline.`,
														layoutId: `os0ojwl0Y`,
														style: {
															width: `100%`,
														},
														variant: Q(`BKQiC5z2f`),
														W6BjriyYG: `Kate Wilington`,
														width: `100%`,
														xPVCPlZSm: ln(
															{
																pixelHeight: 668,
																pixelWidth: 612,
																src: `/assets/images/2YL516FViaQR5PQUdsoIvoMjdc.png`,
															},
															``,
														),
													}),
												}),
											}),
										}),
									],
								}),
								rJsx(`div`, { id: `overlay` }),
							],
						}),
					})
				);
			}),
			[
				`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
				`.framer-Zfthd.framer-1d42cai, .framer-Zfthd .framer-1d42cai { display: block; }`,
				`.framer-Zfthd.framer-17009su { align-content: center; align-items: center; background-color: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 160px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 140px 20px 140px 20px; position: relative; width: 1200px; }`,
				`.framer-Zfthd .framer-kucupd, .framer-Zfthd .framer-1lpf79x { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-170vse4 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 90px 40px 90px 40px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-x2jtaw { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-1iz8dmw-container { flex: none; height: auto; position: relative; width: auto; will-change: var(--framer-will-change-effect-override, transform); }`,
				`.framer-Zfthd .framer-1lq5247 { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: absolute; right: -17px; top: 49%; transform: translateY(-50%); white-space: pre; width: auto; z-index: 1; }`,
				`.framer-Zfthd .framer-1yiu76m { display: grid; flex: none; gap: 10px 0px; grid-auto-rows: min-content; grid-template-columns: repeat(6, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 20px 0px 0px 0px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-15yb2lp { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; grid-column: span 4; height: min-content; justify-content: center; justify-self: start; padding: 0px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-xk4c75 { align-content: flex-start; align-items: flex-start; background-color: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, #ffffff); border-bottom-left-radius: 10px; border-bottom-right-radius: 10px; border-top-left-radius: 10px; border-top-right-radius: 10px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 2px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
				`.framer-Zfthd .framer-1n5one1, .framer-Zfthd .framer-j764vd, .framer-Zfthd .framer-1904zut { align-content: center; align-items: center; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
				`.framer-Zfthd .framer-klkdly, .framer-Zfthd .framer-1l1kie, .framer-Zfthd .framer-x2karc, .framer-Zfthd .framer-1osuayq { flex: none; gap: 10px; height: auto; overflow: visible; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-1vdkiai { flex: none; height: var(--framer-aspect-ratio-supported, 200px); left: 50%; position: absolute; top: 50%; transform: translate(-50%, -50%); width: 180px; }`,
				`.framer-Zfthd .framer-3x8cxm { display: grid; flex: none; gap: 0px 2px; grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); grid-template-rows: repeat(2, min-content); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-12f439j, .framer-Zfthd .framer-dh7kld { align-content: center; align-items: center; align-self: start; border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; justify-self: start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
				`.framer-Zfthd .framer-1bebgym { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; padding: 0px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-k3znkc { border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; flex: none; height: auto; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-rix1aa { align-content: center; align-items: center; background-color: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, #ffffff); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
				`.framer-Zfthd .framer-58ubb0-container { aspect-ratio: 1.7768496420047732 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 113px); position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-qzwaoa { align-content: flex-end; align-items: flex-end; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; grid-column: span 2; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: sticky; top: 149px; width: 100%; z-index: 1; }`,
				`.framer-Zfthd .framer-o475f0 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px 0px 0px 60px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-hbbsi2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-s722ob, .framer-Zfthd .framer-1nxen2r { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
				`.framer-Zfthd .framer-1chq3y8 { -webkit-user-select: none; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 1px 1px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; user-select: none; width: 100%; }`,
				`.framer-Zfthd .framer-mfvmk2 { align-content: center; align-items: center; background-color: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, #ffffff); border-bottom-left-radius: 8px; border-bottom-right-radius: 8px; border-top-left-radius: 8px; border-top-right-radius: 8px; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 10px 5px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
				`.framer-Zfthd .framer-upgovp, .framer-Zfthd .framer-1ulwsu6, .framer-Zfthd .framer-1rt3tuh, .framer-Zfthd .framer-h0sgki, .framer-Zfthd .framer-m9347r, .framer-Zfthd .framer-neqyh0, .framer-Zfthd .framer-1gdi9w7, .framer-Zfthd .framer-rg0hfd { --framer-paragraph-spacing: 0px; flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
				`.framer-Zfthd .framer-1jb6pjo { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-gchtux { background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); flex: none; height: 2px; left: calc(50.06518904823992% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 1; }`,
				`.framer-Zfthd .framer-12kkedg, .framer-Zfthd .framer-s8rrnw, .framer-Zfthd .framer-10mrayy, .framer-Zfthd .framer-ulgnz7, .framer-Zfthd .framer-1o8zyk1 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: visible; padding: 18px 0px 18px 0px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-1b31kny, .framer-Zfthd .framer-ek9z2t, .framer-Zfthd .framer-1ykve2h, .framer-Zfthd .framer-fay8lw, .framer-Zfthd .framer-1drin9f { --framer-paragraph-spacing: 0px; flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
				`.framer-Zfthd .framer-1kdzhw8, .framer-Zfthd .framer-t3jk6d, .framer-Zfthd .framer-o3ff3, .framer-Zfthd .framer-1onel1i, .framer-Zfthd .framer-ar6c0s { background-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); bottom: 0px; flex: none; height: 1px; opacity: 0.15; position: absolute; right: 0px; width: 100%; z-index: 1; }`,
				`.framer-Zfthd .framer-2s6kax { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 50px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 15px 0px 20px 0px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-h2401o-container { flex: none; height: 60px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-kc7or9-container, .framer-Zfthd .framer-10q4b7r-container, .framer-Zfthd .framer-w0z124-container, .framer-Zfthd .framer-dnmbiq-container { flex: none; height: auto; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-196dyeq { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 60px 40px 0px 40px; position: relative; width: 100%; }`,
				`.framer-Zfthd .framer-l8ufmn { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: min-content; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
				...De,
				...ze,
				...Pe,
				...ge,
				...Ne,
				`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-Zfthd.framer-17009su { width: 810px; } .framer-Zfthd .framer-170vse4 { padding: 100px 30px 60px 30px; } .framer-Zfthd .framer-1lq5247 { right: -10px; } .framer-Zfthd .framer-1yiu76m { padding: 25px 0px 0px 0px; } .framer-Zfthd .framer-1vdkiai { width: 150px; } .framer-Zfthd .framer-o475f0 { padding: 0px 0px 0px 40px; } .framer-Zfthd .framer-12kkedg, .framer-Zfthd .framer-s8rrnw, .framer-Zfthd .framer-10mrayy, .framer-Zfthd .framer-ulgnz7, .framer-Zfthd .framer-1o8zyk1 { align-content: flex-start; align-items: flex-start; flex-direction: column; gap: 7px; justify-content: flex-start; padding: 15px 0px 15px 0px; } .framer-Zfthd .framer-1b31kny, .framer-Zfthd .framer-ek9z2t, .framer-Zfthd .framer-1ykve2h, .framer-Zfthd .framer-fay8lw, .framer-Zfthd .framer-1drin9f { flex: none; width: 100%; } .framer-Zfthd .framer-h2401o-container { height: 50px; } .framer-Zfthd .framer-196dyeq { padding: 30px 30px 0px 30px; }}`,
				`@media (max-width: 809.98px) { .framer-Zfthd.framer-17009su { width: 390px; } .framer-Zfthd .framer-170vse4 { padding: 100px 0px 40px 0px; } .framer-Zfthd .framer-x2jtaw { padding: 0px 19px 0px 21px; } .framer-Zfthd .framer-1lq5247 { position: relative; right: unset; top: unset; transform: unset; } .framer-Zfthd .framer-1yiu76m { grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-Zfthd .framer-15yb2lp { grid-column: span 1; } .framer-Zfthd .framer-1vdkiai { width: 140px; } .framer-Zfthd .framer-3x8cxm { gap: 2px 2px; grid-template-columns: repeat(1, minmax(50px, 1fr)); } .framer-Zfthd .framer-qzwaoa { grid-column: span 1; position: relative; top: unset; } .framer-Zfthd .framer-o475f0 { gap: 25px; padding: 30px 25px 0px 25px; } .framer-Zfthd .framer-2s6kax { padding: 15px 0px 0px 0px; } .framer-Zfthd .framer-h2401o-container { height: 55px; } .framer-Zfthd .framer-196dyeq { padding: 20px 25px 0px 25px; }}`,
			],
			`framer-Zfthd`,
		)),
		(mn = $),
		($.displayName = `Page`),
		($.defaultProps = { height: 6962, width: 1200 }),
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
				...Gt,
				...Kt,
				...qt,
				...Jt,
				...Yt,
				...Xt,
				...Zt,
				...T(Oe),
				...T(Be),
				...T(Ie),
				...T(z),
				...T(Fe),
			],
			{ supportsExplicitInterCodegen: !0 },
		),
		($.loader = {
			load: (e, t) => {
				let n = t.locale,
					r = P.get(
						fn(b(t.pathVariables, `luGPP9ZOT`)),
						n,
					).readMaybeAsync();
				return Promise.allSettled([
					y($e, {}, t),
					y(Lt, {}, t),
					y(pt, {}, t),
					y(Qe, {}, t),
					y(qe, {}, t),
					y(Xe, {}, t),
					(async () => {
						let [e] = (await r) ?? [];
						return P.get(sn(e?.Fc9gMlpS8), n).preload();
					})(),
				]);
			},
		}),
		(hn = {
			exports: {
				Props: {
					type: `tsType`,
					annotations: { framerContractVersion: `1` },
				},
				default: {
					type: `reactComponent`,
					name: `FramerluGPP9ZOT`,
					slots: [],
					annotations: {
						framerContractVersion: `1`,
						framerScrollSections: `false`,
						framerIntrinsicHeight: `6962`,
						framerIntrinsicWidth: `1200`,
						framerResponsiveScreen: `true`,
						framerColorSyntax: `true`,
						framerDisplayContentsDiv: `false`,
						framerImmutableVariables: `true`,
						framerLayoutTemplateFlowEffect: `true`,
						framerAutoSizeImages: `true`,
						framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"I36zWPs9o":{"layout":["fixed","auto"]},"tGWXDOPHc":{"layout":["fixed","auto"]}}}`,
						framerVectorSets: `["1jZGksYOiHy4OlO1BsPl"]`,
						framerComponentViewportWidth: `true`,
						framerAcceptsLayoutTemplate: `true`,
					},
				},
				queryParamNames: {
					type: `variable`,
					annotations: { framerContractVersion: `1` },
				},
				__FramerMetadata__: { type: `variable` },
			},
		}));
})();
export { hn as __FramerMetadata__, mn as default, en as queryParamNames };
