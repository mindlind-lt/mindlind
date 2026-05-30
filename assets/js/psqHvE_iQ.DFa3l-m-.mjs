import { lazyInit as lazyInit } from "./rolldown-runtime.mjs";
import {
	F as t,
	M as rUseMemo,
	T as r,
	c as rJsx,
	g as rForwardRef,
	j as rUseContext,
	k as rUseRef,
	l as rJsxs,
	o as rInternalReactHelper,
	y as rUseId,
} from "./react.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.mjs";
import {
	A as h,
	E as g,
	Et as _,
	P as v,
	Tt as y,
	U as b,
	X as x,
	a as S,
	ct as C,
	g as w,
	k as T,
	lt as E,
	vt as D,
} from "./framer.mjs";
import { a as O, i as k, o as A, r as j } from "./shared-lib.mjs";
function M(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var N,
	P,
	F,
	I,
	L,
	R,
	z,
	B,
	V,
	H,
	U,
	W = lazyInit(() => {
		(rInternalReactHelper(),
			x(),
			m(),
			r(),
			A(),
			(N = [
				`kcJJ02qzX`,
				`bCt4mW7uC`,
				`at4YNX0WJ`,
				`Jl_4swOLq`,
				`uKZaL51cy`,
				`U5SDJ0jGi`,
				`qN8QLXSxT`,
				`U8nPMjAS0`,
			]),
			(P = `framer-K57oh`),
			(F = {
				at4YNX0WJ: `framer-v-1k1o3ww`,
				bCt4mW7uC: `framer-v-hsqd9a`,
				Jl_4swOLq: `framer-v-10zt6iz`,
				kcJJ02qzX: `framer-v-1om2a4x`,
				qN8QLXSxT: `framer-v-1necc3s`,
				U5SDJ0jGi: `framer-v-1h50k4p`,
				U8nPMjAS0: `framer-v-8xv6ke`,
				uKZaL51cy: `framer-v-188pu17`,
			}),
			(I = {
				delay: 0,
				duration: 0.3,
				ease: [0.5, 0.34, 0.15, 0.99],
				type: `tween`,
			}),
			(L = ({ value: e, children: t }) => {
				let r = rUseContext(f),
					a = e ?? r.transition,
					s = rUseMemo(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return rJsx(f.Provider, { value: s, children: t });
			}),
			(R = d.create(t)),
			(z = {
				"Big - White - Black Hover - Hover": `U8nPMjAS0`,
				"Big - White - Black Hover": `qN8QLXSxT`,
				"Big Black - Light Gray Hover - Hover": `U5SDJ0jGi`,
				"Big Black - Light Gray Hover": `uKZaL51cy`,
				"Big Black - White Hover - Hover": `Jl_4swOLq`,
				"Big Black - White Hover": `at4YNX0WJ`,
				"Small White - Black Hover - Hover": `bCt4mW7uC`,
				"Small White - Black Hover": `kcJJ02qzX`,
			}),
			(B = ({
				height: e,
				id: t,
				link: n,
				textInButton: r,
				width: i,
				...a
			}) => ({
				...a,
				CKFVUbPix: r ?? a.CKFVUbPix ?? `Send`,
				kT5TElzPn: n ?? a.kT5TElzPn,
				variant: z[a.variant] ?? a.variant ?? `kcJJ02qzX`,
			})),
			(V = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(H = _(
				rForwardRef(function (e, n) {
					let r = rUseRef(null),
						a = n ?? r,
						o = rUseId(),
						{ activeLocale: l, setLocale: f } = D();
					E();
					let {
							style: m,
							className: h,
							layoutId: _,
							variant: b,
							kT5TElzPn: x,
							CKFVUbPix: S,
							...T
						} = B(e),
						{
							baseVariant: O,
							classNames: k,
							clearLoadingGesture: A,
							gestureHandlers: z,
							gestureVariant: H,
							isLoading: U,
							setGestureState: W,
							setVariant: G,
							variants: K,
						} = y({
							cycleOrder: N,
							defaultVariant: `kcJJ02qzX`,
							ref: a,
							variant: b,
							variantClassNames: F,
						}),
						q = V(e, K),
						{ activeVariantCallback: J, delay: ee } = C(O),
						Y = J(async (...e) => {
							(W({ isHovered: !0 }), G(`bCt4mW7uC`));
						}),
						X = J(async (...e) => {
							(W({ isHovered: !1 }), G(`kcJJ02qzX`));
						}),
						Z = J(async (...e) => {
							(W({ isHovered: !0 }), G(`Jl_4swOLq`));
						}),
						Q = J(async (...e) => {
							(W({ isHovered: !1 }), G(`at4YNX0WJ`));
						}),
						$ = J(async (...e) => {
							(W({ isHovered: !0 }), G(`U5SDJ0jGi`));
						}),
						te = J(async (...e) => {
							(W({ isHovered: !1 }), G(`uKZaL51cy`));
						}),
						ne = J(async (...e) => {
							(W({ isHovered: !0 }), G(`U8nPMjAS0`));
						}),
						re = J(async (...e) => {
							(W({ isHovered: !1 }), G(`qN8QLXSxT`));
						}),
						ie = v(P, j);
					return rJsx(p, {
						id: _ ?? o,
						children: rJsx(R, {
							animate: K,
							initial: !1,
							children: rJsx(L, {
								value: I,
								children: rJsx(w, {
									href: x,
									motionChild: !0,
									nodeId: `kcJJ02qzX`,
									openInNewTab: !1,
									scopeId: `psqHvE_iQ`,
									smoothScroll: !0,
									children: rJsxs(d.a, {
										...T,
										...z,
										className: `${v(ie, `framer-1om2a4x`, h, k)} framer-1yzisao`,
										"data-highlight": !0,
										layoutDependency: q,
										layoutId: `kcJJ02qzX`,
										onMouseEnter: Y,
										ref: a,
										style: {
											backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
											borderBottomLeftRadius: 6,
											borderBottomRightRadius: 6,
											borderTopLeftRadius: 6,
											borderTopRightRadius: 6,
											...m,
										},
										variants: {
											at4YNX0WJ: {
												backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
											},
											Jl_4swOLq: {
												backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
											},
											U5SDJ0jGi: {
												backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
											},
											uKZaL51cy: {
												backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
											},
										},
										...M(
											{
												at4YNX0WJ: {
													onMouseEnter: Z,
												},
												bCt4mW7uC: {
													onMouseLeave: X,
												},
												Jl_4swOLq: {
													onMouseEnter: void 0,
													onMouseLeave: Q,
												},
												qN8QLXSxT: {
													onMouseEnter: ne,
												},
												U5SDJ0jGi: {
													onMouseEnter: void 0,
													onMouseLeave: te,
												},
												U8nPMjAS0: {
													onMouseEnter: void 0,
													onMouseLeave: re,
												},
												uKZaL51cy: {
													onMouseEnter: $,
												},
											},
											O,
											H,
										),
										children: [
											rJsx(d.div, {
												className: `framer-b596st`,
												layoutDependency: q,
												layoutId: `zj9X59pvE`,
												style: {
													backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
												},
												variants: {
													at4YNX0WJ: {
														backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													},
													Jl_4swOLq: {
														backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													},
													U5SDJ0jGi: {
														backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
													},
													uKZaL51cy: {
														backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													},
												},
											}),
											rJsx(d.div, {
												className: `framer-avw3zv`,
												layoutDependency: q,
												layoutId: `YHNqCB25G`,
												style: {
													backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
												},
												variants: {
													at4YNX0WJ: {
														backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													},
													Jl_4swOLq: {
														backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													},
													U5SDJ0jGi: {
														backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
													},
													uKZaL51cy: {
														backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													},
												},
											}),
											rJsx(g, {
												__fromCanvasComponent: !0,
												children: rJsx(t, {
													children: rJsx(d.p, {
														className: `framer-styles-preset-mga0mf`,
														"data-styles-preset": `Xrt2y4jBe`,
														style: {
															"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
														},
														children: `Book Call`,
													}),
												}),
												className: `framer-ua84l1`,
												fonts: [`Inter`],
												layoutDependency: q,
												layoutId: `TMvgg6zat`,
												style: {
													"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
													"--framer-paragraph-spacing": `0px`,
												},
												text: S,
												variants: {
													at4YNX0WJ: {
														"--extracted-r6o4lv": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													},
													bCt4mW7uC: {
														"--extracted-r6o4lv": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													},
													U8nPMjAS0: {
														"--extracted-r6o4lv": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													},
													uKZaL51cy: {
														"--extracted-r6o4lv": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													},
												},
												verticalAlignment: `top`,
												withExternalLayout: !0,
												...M(
													{
														at4YNX0WJ: {
															children: rJsx(t, {
																children: rJsx(
																	d.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `Book Call`,
																	},
																),
															}),
														},
														bCt4mW7uC: {
															children: rJsx(t, {
																children: rJsx(
																	d.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `Book Call`,
																	},
																),
															}),
														},
														Jl_4swOLq: {
															children: rJsx(t, {
																children: rJsx(
																	d.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																		},
																		children: `Send`,
																	},
																),
															}),
														},
														U5SDJ0jGi: {
															children: rJsx(t, {
																children: rJsx(
																	d.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																		},
																		children: `Send`,
																	},
																),
															}),
														},
														U8nPMjAS0: {
															children: rJsx(t, {
																children: rJsx(
																	d.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `Send`,
																	},
																),
															}),
														},
														uKZaL51cy: {
															children: rJsx(t, {
																children: rJsx(
																	d.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `Book Call`,
																	},
																),
															}),
														},
													},
													O,
													H,
												),
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
					`.framer-K57oh.framer-1yzisao, .framer-K57oh .framer-1yzisao { display: block; }`,
					`.framer-K57oh.framer-1om2a4x { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 40px; justify-content: center; overflow: hidden; padding: 0px; position: relative; text-decoration: none; width: 155px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-K57oh .framer-b596st { flex: none; height: 1px; left: calc(50.32258064516131% - 106.4516129032258% / 2); overflow: visible; position: absolute; top: -1px; width: 106%; z-index: 1; }`,
					`.framer-K57oh .framer-avw3zv { bottom: -2px; flex: none; height: 1px; left: calc(50.32258064516131% - 106.4516129032258% / 2); overflow: visible; position: absolute; width: 106%; z-index: 1; }`,
					`.framer-K57oh .framer-ua84l1 { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
					`.framer-K57oh.framer-v-hsqd9a .framer-b596st { height: 40px; top: -20px; }`,
					`.framer-K57oh.framer-v-hsqd9a .framer-avw3zv { bottom: -10px; height: 30px; left: calc(50.96774193548389% - 106.4516129032258% / 2); }`,
					`.framer-K57oh.framer-v-1k1o3ww.framer-1om2a4x, .framer-K57oh.framer-v-10zt6iz.framer-1om2a4x, .framer-K57oh.framer-v-188pu17.framer-1om2a4x, .framer-K57oh.framer-v-1h50k4p.framer-1om2a4x { height: 50px; width: 240px; }`,
					`.framer-K57oh.framer-v-1k1o3ww .framer-b596st, .framer-K57oh.framer-v-188pu17 .framer-b596st { height: 28px; left: calc(50.416666666666686% - 106.45833333333334% / 2); top: -28px; width: 106%; }`,
					`.framer-K57oh.framer-v-1k1o3ww .framer-avw3zv, .framer-K57oh.framer-v-188pu17 .framer-avw3zv { bottom: -28px; height: 28px; left: calc(50.416666666666686% - 106.45833333333334% / 2); width: 106%; }`,
					`.framer-K57oh.framer-v-10zt6iz .framer-b596st, .framer-K57oh.framer-v-1h50k4p .framer-b596st { height: 28px; left: calc(50.416666666666686% - 106.45833333333334% / 2); top: -3px; width: 106%; }`,
					`.framer-K57oh.framer-v-10zt6iz .framer-avw3zv, .framer-K57oh.framer-v-1h50k4p .framer-avw3zv { bottom: -3px; height: 28px; left: calc(50.416666666666686% - 106.45833333333334% / 2); width: 106%; }`,
					`.framer-K57oh.framer-v-1necc3s.framer-1om2a4x, .framer-K57oh.framer-v-8xv6ke.framer-1om2a4x { height: 50px; }`,
					`.framer-K57oh.framer-v-8xv6ke .framer-b596st { height: 27px; top: -2px; }`,
					`.framer-K57oh.framer-v-8xv6ke .framer-avw3zv { height: 27px; }`,
					...k,
				],
				`framer-K57oh`,
			)),
			(U = H),
			(H.displayName = `Buttons`),
			(H.defaultProps = { height: 40, width: 155 }),
			h(H, {
				variant: {
					options: [
						`kcJJ02qzX`,
						`bCt4mW7uC`,
						`at4YNX0WJ`,
						`Jl_4swOLq`,
						`uKZaL51cy`,
						`U5SDJ0jGi`,
						`qN8QLXSxT`,
						`U8nPMjAS0`,
					],
					optionTitles: [
						`Small White - Black Hover`,
						`Small White - Black Hover - Hover`,
						`Big Black - White Hover`,
						`Big Black - White Hover - Hover`,
						`Big Black - Light Gray Hover`,
						`Big Black - Light Gray Hover - Hover`,
						`Big - White - Black Hover`,
						`Big - White - Black Hover - Hover`,
					],
					title: `Variant`,
					type: S.Enum,
				},
				kT5TElzPn: { title: `Link`, type: S.Link },
				CKFVUbPix: {
					defaultValue: `Send`,
					displayTextArea: !1,
					title: `Text in Button`,
					type: S.String,
				},
			}),
			T(
				H,
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
					...b(O),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
export { U as n, W as t };
