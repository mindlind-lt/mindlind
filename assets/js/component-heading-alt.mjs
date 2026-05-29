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
	y as u,
} from "./react.mjs";
import { S as d, a as f, r as ee, t as p } from "./motion.mjs";
import {
	A as m,
	E as h,
	Et as g,
	H as _,
	I as v,
	O as te,
	Ot as y,
	P as b,
	Tt as x,
	X as ne,
	a as S,
	ft as C,
	ht as w,
	i as T,
	k as E,
	lt as D,
	pt as O,
	r as k,
	u as A,
	vt as re,
	x as j,
	yt as ie,
} from "./framer.mjs";
import { n as ae, t as M } from "./OWqtFDncb.DnERqnrM.mjs";
import { n as oe, t as N } from "./TwistGallery.mjs";
import { n as se, r as ce } from "./page-blog.mjs";
function P(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var F,
	I,
	L,
	R,
	z,
	B,
	V,
	le,
	H,
	U,
	W,
	G,
	K,
	ue = e(() => {
		(l(),
			ne(),
			p(),
			r(),
			oe(),
			(F = y(h)),
			(I = _(N)),
			(L = [`F25usRD5T`, `uT8G9AAwR`, `AlghAwUC2`]),
			(R = `framer-uFM0X`),
			(z = {
				AlghAwUC2: `framer-v-1q2ai5e`,
				F25usRD5T: `framer-v-it1vf6`,
				uT8G9AAwR: `framer-v-140gyui`,
			}),
			(B = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(V = ({ value: e, children: t }) => {
				let r = o(f),
					a = e ?? r.transition,
					s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return i(f.Provider, { value: s, children: t });
			}),
			(le = d.create(t)),
			(H = {
				Desktop: `F25usRD5T`,
				Phone: `AlghAwUC2`,
				Tablet: `uT8G9AAwR`,
			}),
			(U = ({ height: e, id: t, width: n, ...r }) => ({
				...r,
				variant: H[r.variant] ?? r.variant ?? `F25usRD5T`,
			})),
			(W = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(G = g(
				a(function (e, n) {
					let r = s(null),
						a = n ?? r,
						o = u(),
						{ activeLocale: l, setLocale: f } = re();
					D();
					let {
							style: p,
							className: m,
							layoutId: h,
							variant: g,
							..._
						} = U(e),
						{
							baseVariant: v,
							classNames: y,
							clearLoadingGesture: ne,
							gestureHandlers: S,
							gestureVariant: C,
							isLoading: w,
							setGestureState: T,
							setVariant: E,
							variants: O,
						} = x({
							cycleOrder: L,
							defaultVariant: `F25usRD5T`,
							ref: a,
							variant: g,
							variantClassNames: z,
						}),
						A = W(e, O),
						j = b(R);
					return i(ee, {
						id: h ?? o,
						children: i(le, {
							animate: O,
							initial: !1,
							children: i(V, {
								value: B,
								children: c(d.div, {
									..._,
									...S,
									className: b(j, `framer-it1vf6`, m, y),
									// "data-framer-name": `Desktop`,
									layoutDependency: A,
									layoutId: `F25usRD5T`,
									ref: a,
									style: { ...p },
									...P(
										{
											AlghAwUC2: {
												// "data-framer-name": `Phone`,
											},
											uT8G9AAwR: {
												// "data-framer-name": `Tablet`,
											},
										},
										v,
										C,
									),
									children: [
										c(d.div, {
											className: `framer-12j6zf1`,
											// "data-framer-name": `Container`,
											layoutDependency: A,
											layoutId: `hrI1_Z_NW`,
											children: [
												i(d.div, {
													className: `framer-1dq7hqo`,
													// "data-framer-name": `Spacer`,
													layoutDependency: A,
													layoutId: `jQv3L8FgC`,
												}),
												c(d.div, {
													className: `framer-iwzlxf`,
													// "data-framer-name": `Big Heading`,
													layoutDependency: A,
													layoutId: `GbpOjiomY`,
													children: [
														i(F, {
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
																			x: -10,
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
																			x: -10,
																			y: 0,
																		},
																	},
																],
															__framer__transformTrigger: `onScroll`,
															__fromCanvasComponent:
																!0,
															__perspectiveFX: !1,
															__smartComponentFX:
																!0,
															__targetOpacity: 1,
															children: i(t, {
																children: i(
																	d.h1,
																	{
																		style: {
																			"--font-selector": `R0Y7U3BhY2UgTW9uby1yZWd1bGFy`,
																			"--framer-font-family": `"Space Mono", monospace`,
																			"--framer-font-size": `250.2161543435998px`,
																			"--framer-letter-spacing": `-0.06em`,
																			"--framer-line-height": `100%`,
																			"--framer-text-alignment": `left`,
																			"--framer-text-color": `var(--extracted-gdpscs, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																			"--framer-text-transform": `uppercase`,
																		},
																		children: `Blog`,
																	},
																),
															}),
															className: `framer-44boz3`,
															// "data-framer-name": `Fit Heading`,
															fonts: [
																`GF;Space Mono-regular`,
															],
															layoutDependency: A,
															layoutId: `D9ImKQCzx`,
															style: {
																"--extracted-gdpscs": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																"--framer-paragraph-spacing": `0px`,
															},
															verticalAlignment: `top`,
															viewBox: `0 0 567.0129692606159 250`,
															withExternalLayout:
																!0,
															...P(
																{
																	AlghAwUC2: {
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
																						x: -5,
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
																						x: -5,
																						y: 0,
																					},
																				},
																			],
																	},
																	uT8G9AAwR: {
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
																						x: -7,
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
																						x: -7,
																						y: 0,
																					},
																				},
																			],
																	},
																},
																v,
																C,
															),
														}),
														i(d.div, {
															className: `framer-301cph`,
															// "data-framer-name": `Spacer`,
															layoutDependency: A,
															layoutId: `v7_AF0y37`,
														}),
													],
												}),
											],
										}),
										i(k, {
											children: i(te, {
												className: `framer-janbcd-container`,
												isAuthoredByUser: !0,
												layoutDependency: A,
												layoutId: `NU7oOaec3-container`,
												nodeId: `NU7oOaec3`,
												rendersWithMotion: !0,
												scopeId: `PcmTg0xzz`,
												children: i(N, {
													angleDeg: 16,
													camDist: 3e3,
													camFovDeg: 22,
													camPitchDeg: 11,
													camRollDeg: -10,
													camTargetX: 1097,
													camTargetY: 143,
													camTargetZ: 18,
													camYawDeg: -17,
													cardH: 310,
													cardW: 115,
													count: 93,
													curveAmp: 0,
													height: `100%`,
													id: `NU7oOaec3`,
													images: [
														`assets/images/GhqKSdFgiwq6ix3LGBGpGbgWwaw.jpg`,
														`assets/images/GhqKSdFgiwq6ix3LGBGpGbgWwaw.jpg`,
														`assets/images/GhqKSdFgiwq6ix3LGBGpGbgWwaw.jpg`,
														`assets/images/GhqKSdFgiwq6ix3LGBGpGbgWwaw.jpg`,
														`assets/images/GhqKSdFgiwq6ix3LGBGpGbgWwaw.jpg`,
													],
													layoutId: `NU7oOaec3`,
													phaseStepDeg: 13.5,
													radius: 130,
													scrollSpeed: 0.34,
													spacing: 50,
													spinDeg: 14,
													stopMotionInEditor: !0,
													style: {
														height: `100%`,
														width: `100%`,
													},
													tiltYdeg: -60,
													width: `100%`,
													...P(
														{
															AlghAwUC2: {
																angleDeg: -1,
																camFovDeg: 52,
																camRollDeg: -26,
																camTargetX: 50,
																camTargetY:
																	-915,
																camYawDeg: -22,
																cardH: 580,
																cardW: 187,
																count: 70,
																spacing: 118,
																tiltYdeg: -28.5,
															},
															uT8G9AAwR: {
																camFovDeg: 28,
																camTargetY: -24,
																cardH: 331,
																tiltYdeg: -54,
															},
														},
														v,
														C,
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
					`.framer-uFM0X.framer-q34e64, .framer-uFM0X .framer-q34e64 { display: block; }`,
					`.framer-uFM0X.framer-it1vf6 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px 0px 45px 0px; position: relative; width: 1200px; }`,
					`.framer-uFM0X .framer-12j6zf1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
					`.framer-uFM0X .framer-1dq7hqo { flex: none; height: 140px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-uFM0X .framer-iwzlxf { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; max-width: 1600px; mix-blend-mode: difference; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 5; }`,
					`.framer-uFM0X .framer-44boz3 { -webkit-user-select: none; flex: 1 0 0px; height: auto; position: relative; user-select: none; white-space: pre; width: 1px; }`,
					`.framer-uFM0X .framer-301cph { flex: none; height: 105px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 60%; }`,
					`.framer-uFM0X .framer-janbcd-container { flex: none; height: 1100px; left: calc(50.00000000000002% - 100% / 2); position: absolute; top: 0px; width: 100%; z-index: 1; }`,
					`.framer-uFM0X.framer-v-140gyui.framer-it1vf6 { width: 810px; }`,
					`.framer-uFM0X.framer-v-140gyui .framer-12j6zf1 { padding: 0px 30px 0px 30px; }`,
					`.framer-uFM0X.framer-v-140gyui .framer-1dq7hqo { height: 85px; }`,
					`.framer-uFM0X.framer-v-140gyui .framer-301cph { width: 56%; }`,
					`.framer-uFM0X.framer-v-140gyui .framer-janbcd-container { height: 800px; }`,
					`.framer-uFM0X.framer-v-1q2ai5e.framer-it1vf6 { padding: 0px; width: 390px; }`,
					`.framer-uFM0X.framer-v-1q2ai5e .framer-12j6zf1 { padding: 0px 25px 0px 25px; }`,
					`.framer-uFM0X.framer-v-1q2ai5e .framer-301cph { width: 33%; }`,
					`.framer-uFM0X.framer-v-1q2ai5e .framer-janbcd-container { height: 600px; }`,
				],
				`framer-uFM0X`,
			)),
			(K = G),
			(G.displayName = `Blog - Page Header`),
			(G.defaultProps = { height: 371.5, width: 1200 }),
			m(G, {
				variant: {
					options: [`F25usRD5T`, `uT8G9AAwR`, `AlghAwUC2`],
					optionTitles: [`Desktop`, `Tablet`, `Phone`],
					title: `Variant`,
					type: S.Enum,
				},
			}),
			E(
				G,
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
					...I,
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	}),
	q,
	J,
	de,
	fe,
	pe,
	me,
	he,
	Y,
	X,
	Z,
	ge,
	Q,
	_e,
	$;
e(() => {
	(l(),
		ne(),
		p(),
		r(),
		ae(),
		ue(),
		se(),
		(q = _(K)),
		(J = _(M)),
		(de = {
			ee1KZQmPb: `(max-width: 809.98px)`,
			HknaBT9GZ: `(min-width: 810px) and (max-width: 1199.98px)`,
			zkZoFpCEV: `(min-width: 1200px)`,
		}),
		(fe = []),
		(pe = `framer-dREwl`),
		(me = {
			ee1KZQmPb: `framer-v-1ket2x`,
			HknaBT9GZ: `framer-v-4dh54a`,
			zkZoFpCEV: `framer-v-33dhgi`,
		}),
		(he = (e, t, n) => (e && t ? `position` : n)),
		(Y = (...e) => {
			for (let t of e) if (t && typeof t == `string`) return t;
		}),
		(X = { Desktop: `zkZoFpCEV`, Phone: `ee1KZQmPb`, Tablet: `HknaBT9GZ` }),
		(Z = ({ value: e }) =>
			w()
				? null
				: i(`style`, {
						dangerouslySetInnerHTML: { __html: e },
						"data-framer-html-style": ``,
					})),
		(ge = ({ height: e, id: t, width: n, ...r }) => ({
			...r,
			variant: X[r.variant] ?? r.variant ?? `zkZoFpCEV`,
		})),
		(Q = g(
			a(function (e, t) {
				let r = s(null),
					a = t ?? r,
					l = u(),
					{ activeLocale: p, setLocale: m } = re(),
					h = D(),
					{
						style: g,
						className: _,
						layoutId: v,
						variant: te,
						...y
					} = ge(e);
				ie(n(() => ce({}, p), [p]));
				let [x, ne] = O(te, de, !1),
					S = b(pe),
					w = o(A)?.isLayoutTemplate,
					E = he(w, !!o(f)?.transition?.layout);
				return (
					C({}),
					i(A.Provider, {
						value: {
							activeVariantId: x,
							humanReadableVariantMap: X,
							primaryVariantId: `zkZoFpCEV`,
							variantClassNames: me,
						},
						children: c(ee, {
							id: v ?? l,
							children: [
								i(Z, {
									value: `html body { background: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)); }`,
								}),
								c(d.div, {
									...y,
									className: b(S, `framer-33dhgi`, _),
									ref: a,
									style: { ...g },
									children: [
										i(k, {
											height: 371,
											width: h?.width || `100vw`,
											y: (h?.y || 0) + 0 + 0,
											children: i(T, {
												className: `framer-aa6g54-container`,
												layout: E,
												nodeId: `oogMYPIy3`,
												scopeId: `jfdaAH2x_`,
												children: i(j, {
													breakpoint: x,
													overrides: {
														ee1KZQmPb: {
															variant:
																Y(`AlghAwUC2`),
														},
														HknaBT9GZ: {
															variant:
																Y(`uT8G9AAwR`),
														},
													},
													children: i(K, {
														height: `100%`,
														id: `oogMYPIy3`,
														layoutId: `oogMYPIy3`,
														style: {
															width: `100%`,
														},
														variant: Y(`F25usRD5T`),
														width: `100%`,
													}),
												}),
											}),
										}),
										i(k, {
											height: 1255,
											width: h?.width || `100vw`,
											y: (h?.y || 0) + 0 + 371,
											children: i(T, {
												className: `framer-wfx7zu-container`,
												layout: E,
												nodeId: `LrMDCE4Fi`,
												scopeId: `jfdaAH2x_`,
												children: i(j, {
													breakpoint: x,
													overrides: {
														ee1KZQmPb: {
															a_RFekTZv: `e_indrHZ3`,
															bFCS9vnuq: `30px 25px 15px 25px`,
															variant:
																Y(`MpacA_qwI`),
														},
														HknaBT9GZ: {
															a_RFekTZv: `Ke3Z8JMZB`,
															bFCS9vnuq: `40px 30px 10px 30px`,
															variant:
																Y(`kSC4wNpBu`),
														},
													},
													children: i(M, {
														a_RFekTZv: `GWdkepxAn`,
														bFCS9vnuq: `90px 40px 40px 40px`,
														gZ_s_nXv6: !1,
														height: `100%`,
														hhaCwl7EP: !1,
														id: `LrMDCE4Fi`,
														layoutId: `LrMDCE4Fi`,
														lQpFEpV2s: ``,
														MXlRuQc91: !0,
														QPWACkysO: ``,
														SE9pFAstj: ``,
														style: {
															width: `100%`,
														},
														td4zWVChF: ``,
														ThIdWbT5T: !0,
														variant: Y(`mVhPZw3IV`),
														width: `100%`,
														wPj7cgw7A: !0,
														wpMFMFfh6: !1,
														XtswemN6o: `0px 50px 0px 55px`,
														zWwbGwZv_: !0,
													}),
												}),
											}),
										}),
									],
								}),
								i(`div`, { id: `overlay` }),
							],
						}),
					})
				);
			}),
			[
				`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
				`.framer-dREwl.framer-cq8ri1, .framer-dREwl .framer-cq8ri1 { display: block; }`,
				`.framer-dREwl.framer-33dhgi { align-content: center; align-items: center; background-color: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
				`.framer-dREwl .framer-aa6g54-container { flex: none; height: auto; position: relative; width: 100%; }`,
				`.framer-dREwl .framer-wfx7zu-container { flex: none; height: auto; position: relative; width: 100%; z-index: 2; }`,
				`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-dREwl.framer-33dhgi { width: 810px; }}`,
				`@media (max-width: 809.98px) { .framer-dREwl.framer-33dhgi { width: 390px; }}`,
			],
			`framer-dREwl`,
		)),
		(_e = Q),
		(Q.displayName = `Contact`),
		(Q.defaultProps = { height: 3003, width: 1200 }),
		E(Q, [{ explicitInter: !0, fonts: [] }, ...q, ...J], {
			supportsExplicitInterCodegen: !0,
		}),
		(Q.loader = {
			load: (e, t) => (
				t.locale,
				Promise.allSettled([v(K, {}, t), v(M, {}, t)])
			),
		}),
		($ = {
			exports: {
				default: {
					type: `reactComponent`,
					name: `FramerjfdaAH2x_`,
					slots: [],
					annotations: {
						framerIntrinsicHeight: `3003`,
						framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"HknaBT9GZ":{"layout":["fixed","auto"]},"ee1KZQmPb":{"layout":["fixed","auto"]}}}`,
						framerResponsiveScreen: `true`,
						framerComponentViewportWidth: `true`,
						framerScrollSections: `false`,
						framerLayoutTemplateFlowEffect: `true`,
						framerDisplayContentsDiv: `false`,
						framerAcceptsLayoutTemplate: `true`,
						framerIntrinsicWidth: `1200`,
						framerAutoSizeImages: `true`,
						framerColorSyntax: `true`,
						framerContractVersion: `1`,
						framerImmutableVariables: `true`,
					},
				},
				Props: {
					type: `tsType`,
					annotations: { framerContractVersion: `1` },
				},
				queryParamNames: {
					type: `variable`,
					annotations: { framerContractVersion: `1` },
				},
				__FramerMetadata__: { type: `variable` },
			},
		}));
})();
export { $ as __FramerMetadata__, _e as default, fe as queryParamNames };
//# sourceMappingURL=component-heading-alt.mjs.map
