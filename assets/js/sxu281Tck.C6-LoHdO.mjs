import { t as e } from "./rolldown-runtime.mjs";
import {
	F as t,
	T as n,
	c as r,
	g as i,
	k as a,
	l as o,
	o as s,
	y as c,
} from "./react.mjs";
import { S as l, r as u, t as d } from "./motion.mjs";
import {
	A as f,
	At as p,
	E as m,
	Et as h,
	Ot as g,
	P as _,
	Tt as v,
	U as y,
	X as b,
	a as x,
	ct as S,
	k as C,
	lt as w,
	vt as T,
} from "./framer.mjs";
import { a as E, i as D, o as O, r as k } from "./shared-lib.mjs";
function A(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var j,
	M,
	N,
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
	W,
	G,
	K,
	q = e(() => {
		(s(),
			b(),
			d(),
			n(),
			O(),
			(j = g(l.div)),
			(M = p(g(l.div))),
			(N = { D3N7gFuhz: { hover: !0 } }),
			(P = [`D3N7gFuhz`, `MnozbBE93`, `ugQupQuy5`]),
			(F = `framer-ILz0s`),
			(I = {
				D3N7gFuhz: `framer-v-40o873`,
				MnozbBE93: `framer-v-supgvb`,
				ugQupQuy5: `framer-v-1rggsl0`,
			}),
			(L = {
				opacity: 1,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0,
				transition: {
					delay: 0,
					duration: 0.3,
					ease: [0.44, 0, 0.56, 1],
					type: `tween`,
				},
				x: 0,
				y: 0,
			}),
			(R = {
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
			(z = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
			(B = {
				opacity: 1,
				rotate: 360,
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0,
				x: 0,
				y: 0,
			}),
			(V = l.create(t)),
			(H = {
				Default: `D3N7gFuhz`,
				Hidden: `ugQupQuy5`,
				Loading: `MnozbBE93`,
			}),
			(U = ({ click: e, height: t, id: n, width: r, ...i }) => ({
				...i,
				variant: H[i.variant] ?? i.variant ?? `D3N7gFuhz`,
				Wld3NDzSj: e ?? i.Wld3NDzSj,
			})),
			(W = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(G = h(
				i(function (e, n) {
					let i = a(null),
						s = n ?? i,
						d = c(),
						{ activeLocale: f, setLocale: p } = T();
					w();
					let {
							style: h,
							className: g,
							layoutId: y,
							variant: b,
							Wld3NDzSj: x,
							...C
						} = U(e),
						{
							baseVariant: E,
							classNames: D,
							clearLoadingGesture: O,
							gestureHandlers: H,
							gestureVariant: G,
							isLoading: K,
							setGestureState: q,
							setVariant: ee,
							variants: J,
						} = v({
							cycleOrder: P,
							defaultVariant: `D3N7gFuhz`,
							enabledGestures: N,
							ref: s,
							variant: b,
							variantClassNames: I,
						}),
						Y = W(e, J),
						{ activeVariantCallback: X, delay: te } = S(E),
						Z = X(async (...e) => {
							if (
								(q({ isPressed: !1 }),
								x && (await x(...e)) === !1)
							)
								return !1;
						}),
						Q = [k],
						$ = () => E !== `ugQupQuy5`,
						ne = _(F, ...Q),
						re = () => E !== `MnozbBE93`,
						ie = () => E === `MnozbBE93`;
					return r(u, {
						id: y ?? d,
						children: r(V, {
							animate: J,
							initial: !1,
							children:
								$() &&
								o(l.button, {
									...C,
									...H,
									className: _(ne, `framer-40o873`, g, D),
									// "data-framer-name": `Default`,
									"data-highlight": !0,
									"data-reset": `button`,
									layoutDependency: Y,
									layoutId: `D3N7gFuhz`,
									onTap: Z,
									ref: s,
									style: {
										backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
										borderBottomLeftRadius: 6,
										borderBottomRightRadius: 6,
										borderTopLeftRadius: 6,
										borderTopRightRadius: 6,
										...h,
									},
									...A(
										{
											"D3N7gFuhz-hover": {
												// "data-framer-name": void 0,
											},
											MnozbBE93: {
												// "data-framer-name": `Loading`,
											},
										},
										E,
										G,
									),
									children: [
										re() &&
											r(m, {
												__fromCanvasComponent: !0,
												children: r(t, {
													children: r(l.p, {
														className: `framer-styles-preset-mga0mf`,
														"data-styles-preset": `Xrt2y4jBe`,
														style: {
															"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
														},
														children: `Load More`,
													}),
												}),
												className: `framer-1xjs1wq`,
												fonts: [`Inter`],
												layoutDependency: Y,
												layoutId: `bOAqej_LF`,
												style: {
													"--extracted-r6o4lv": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													"--framer-paragraph-spacing": `0px`,
												},
												variants: {
													"D3N7gFuhz-hover": {
														"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
													},
												},
												verticalAlignment: `top`,
												withExternalLayout: !0,
												...A(
													{
														"D3N7gFuhz-hover": {
															children: r(t, {
																children: r(
																	l.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																		},
																		children: `Load More`,
																	},
																),
															}),
														},
													},
													E,
													G,
												),
											}),
										ie() &&
											r(M, {
												__perspectiveFX: !1,
												__smartComponentFX: !0,
												__targetOpacity: 1,
												animate: L,
												className: `framer-1hjvj8k`,
												"data-framer-appear-id": `1hjvj8k`,
												// "data-framer-name": `Spinner`,
												initial: R,
												layoutDependency: Y,
												layoutId: `MKg9WEnzI`,
												optimized: !0,
												style: {
													mask: `url('/assets/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
													WebkitMask: `url('/assets/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
												},
												children: r(j, {
													__framer__loop: B,
													__framer__loopEffectEnabled:
														!0,
													__framer__loopRepeatDelay: 0,
													__framer__loopRepeatType: `loop`,
													__framer__loopTransition: z,
													__perspectiveFX: !1,
													__smartComponentFX: !0,
													__targetOpacity: 1,
													className: `framer-3awrmc`,
													// "data-framer-name": `Conic`,
													layoutDependency: Y,
													layoutId: `K46IWOAyl`,
													style: {
														background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 0deg, rgb(255, 255, 255) 342deg)`,
													},
													children: r(l.div, {
														className: `framer-1fncieu`,
														// "data-framer-name": `Round`,
														layoutDependency: Y,
														layoutId: `uGcgzawYE`,
														style: {
															backgroundColor: `rgb(255, 255, 255)`,
															borderBottomLeftRadius: 1,
															borderBottomRightRadius: 1,
															borderTopLeftRadius: 1,
															borderTopRightRadius: 1,
														},
													}),
												}),
											}),
										r(l.div, {
											className: `framer-lu2xsl`,
											// "data-framer-name": `Fill`,
											layoutDependency: Y,
											layoutId: `ftClNyYoj`,
											style: {
												backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
											},
										}),
										r(l.div, {
											className: `framer-zvmp5m`,
											// "data-framer-name": `Fill`,
											layoutDependency: Y,
											layoutId: `yYAhxji9B`,
											style: {
												backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
											},
										}),
									],
								}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-ILz0s.framer-qm1pqs, .framer-ILz0s .framer-qm1pqs { display: block; }`,
					`.framer-ILz0s.framer-40o873 { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 5px; height: 50px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 250px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-ILz0s .framer-1xjs1wq { flex: none; height: auto; position: relative; white-space: pre; width: auto; z-index: 2; }`,
					`.framer-ILz0s .framer-1hjvj8k { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: visible; position: relative; width: 20px; }`,
					`.framer-ILz0s .framer-3awrmc { bottom: 0px; flex: none; gap: 10px; left: 0px; overflow: visible; position: absolute; right: 0px; top: 0px; }`,
					`.framer-ILz0s .framer-1fncieu { flex: none; height: 2px; left: calc(50.00000000000002% - 2px / 2); overflow: visible; position: absolute; top: 0px; width: 2px; }`,
					`.framer-ILz0s .framer-lu2xsl { flex: none; height: 28px; left: calc(50.40000000000002% - 106.45833333333334% / 2); overflow: visible; position: absolute; top: -28px; width: 106%; z-index: 1; }`,
					`.framer-ILz0s .framer-zvmp5m { bottom: -28px; flex: none; height: 28px; left: calc(50.40000000000002% - 106.45833333333334% / 2); overflow: visible; position: absolute; width: 106%; z-index: 1; }`,
					`.framer-ILz0s.framer-v-40o873.hover .framer-1xjs1wq { order: 2; }`,
					`.framer-ILz0s.framer-v-40o873.hover .framer-lu2xsl { order: 0; top: -3px; }`,
					`.framer-ILz0s.framer-v-40o873.hover .framer-zvmp5m { bottom: -2px; order: 1; }`,
					...D,
				],
				`framer-ILz0s`,
			)),
			(K = G),
			(G.displayName = `Button - Load More`),
			(G.defaultProps = { height: 50, width: 250 }),
			f(G, {
				variant: {
					options: [`D3N7gFuhz`, `MnozbBE93`, `ugQupQuy5`],
					optionTitles: [`Default`, `Loading`, `Hidden`],
					title: `Variant`,
					type: x.Enum,
				},
				Wld3NDzSj: { title: `Click`, type: x.EventHandler },
			}),
			C(
				G,
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
					...y(E),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
export { K as n, q as t };
//# sourceMappingURL=sxu281Tck.C6-LoHdO.mjs.map
