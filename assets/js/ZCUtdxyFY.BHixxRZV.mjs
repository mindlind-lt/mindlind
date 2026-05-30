import { lazyInit as lazyInit } from "./rolldown-runtime.mjs";
import {
	F as t,
	I as n,
	M as rUseMemo,
	T as i,
	c as rJsx,
	g as rForwardRef,
	j as rUseContext,
	k as rUseRef,
	l as rJsxs,
	o as rUseDeferredValue,
	s as d,
	y as rUseId,
} from "./react.mjs";
import { S as f, a as p, r as m, t as h } from "./motion.mjs";
import {
	A as g,
	E as _,
	Et as v,
	H as y,
	I as b,
	O as x,
	Ot as S,
	P as C,
	Tt as te,
	U as w,
	X as T,
	a as E,
	b as D,
	ct as ne,
	f as re,
	g as O,
	gt as k,
	it as A,
	k as j,
	lt as ie,
	nt as M,
	r as N,
	t as ae,
	vt as oe,
	xt as P,
} from "./framer.mjs";
import { i as F, n as se, r as ce, t as I } from "./hmRgK3K6v.Bb8FQ5b1.mjs";
import { i as L, n as le, r as ue, t as de } from "./hmRgK3K6v.uUKiXrMh.mjs";
import { a as fe, c as R, o as z, s as pe } from "./dBxplyp6M.YfMP-uQE.mjs";
import { i as me, n as he, r as B, t as ge } from "./PxI14If8r.yE6_0MNS.mjs";
import { a as V, i as H } from "./cms-posts.mjs";
import { n as _e, t as ve } from "./sxu281Tck.C6-LoHdO.mjs";
import { i as U, n as ye, r as be, t as xe } from "./NqfjhJTm6.CsmVbARV.mjs";
function Se(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ce,
	we,
	Te,
	Ee,
	De,
	W,
	Oe,
	ke,
	Ae,
	je,
	Me,
	G,
	Ne,
	Pe = lazyInit(() => {
		(rUseDeferredValue(),
			T(),
			h(),
			i(),
			he(),
			L(),
			R(),
			(Ce = S(f.div)),
			(we = { MZhRx4v9y: { hover: !0 } }),
			(Te = `framer-SVJ0f`),
			(Ee = { MZhRx4v9y: `framer-v-1tcauyl` }),
			(De = {
				delay: 0,
				duration: 0.5,
				ease: [0.01, 0.83, 0.57, 0.91],
				type: `tween`,
			}),
			(W = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(Oe = ({ query: e, pageSize: t, children: n }) => n(P(e))),
			(ke = ({ value: e, children: t }) => {
				let n = rUseContext(p),
					i = e ?? n.transition,
					o = rUseMemo(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
				return rJsx(p.Provider, { value: o, children: t });
			}),
			(Ae = f.create(t)),
			(je = ({
				categoriesOfProjects: e,
				height: t,
				id: n,
				mainImageHover: r,
				mainImageNormal: i,
				nameOfProject: a,
				width: o,
				...s
			}) => ({
				...s,
				fqgfcaCZ9: i ?? s.fqgfcaCZ9,
				ko3loeUDM: r ?? s.ko3loeUDM,
				WitypRxvw: e ?? s.WitypRxvw ?? [`n4HXEH4La`, `KudQ__nPJ`],
				X2wHb98uQ: a ?? s.X2wHb98uQ ?? `Lementa`,
			})),
			(Me = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(G = v(
				rForwardRef(function (e, n) {
					let r = rUseRef(null),
						i = n ?? r,
						o = rUseId(),
						{ activeLocale: s, setLocale: u } = oe(),
						p = ie(),
						{
							style: h,
							className: g,
							layoutId: v,
							variant: y,
							fqgfcaCZ9: b,
							ko3loeUDM: x,
							X2wHb98uQ: S,
							WitypRxvw: w,
							Xgdhwh5MebLSgkwKgW: T,
							TBDlVXOGAbLSgkwKgW: E,
							idbLSgkwKgW: ne,
							...O
						} = je(e),
						{
							baseVariant: k,
							classNames: A,
							clearLoadingGesture: j,
							gestureHandlers: M,
							gestureVariant: N,
							isLoading: P,
							setGestureState: F,
							setVariant: se,
							variants: ce,
						} = te({
							defaultVariant: `MZhRx4v9y`,
							enabledGestures: we,
							ref: i,
							variant: y,
							variantClassNames: Ee,
						}),
						I = Me(e, ce),
						L = C(Te, de, fe);
					return rJsx(m, {
						id: v ?? o,
						children: rJsx(Ae, {
							animate: ce,
							initial: !1,
							children: rJsx(ke, {
								value: De,
								children: rJsx(Ce, {
									...O,
									...M,
									className: C(L, `framer-1tcauyl`, g, A),
									layoutDependency: I,
									layoutId: `MZhRx4v9y`,
									ref: i,
									style: { ...h },
									...Se(
										{
											"MZhRx4v9y-hover": {
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
												
											},
										},
										k,
										N,
									),
									children: rJsxs(f.div, {
										className: `framer-9haah5`,
										layoutDependency: I,
										layoutId: `KrLCqZFZW`,
										style: {
											backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
											borderBottomLeftRadius: 10,
											borderBottomRightRadius: 10,
											borderTopLeftRadius: 10,
											borderTopRightRadius: 10,
										},
										children: [
											rJsx(re, {
												background: {
													alt: ``,
													fit: `fill`,
													intrinsicHeight: 720,
													intrinsicWidth: 446,
													pixelHeight: 1440,
													pixelWidth: 892,
													sizes: `calc(${p?.width || `100vw`} - 4px)`,
													...W(b),
												},
												className: `framer-1lnsbo9`,
												
												fitImageDimension: `height`,
												layoutDependency: I,
												layoutId: `jGPfM_pCF`,
												style: {
													borderBottomLeftRadius: 8,
													borderBottomRightRadius: 8,
													borderTopLeftRadius: 8,
													borderTopRightRadius: 8,
												},
												children: rJsx(re, {
													background: {
														alt: ``,
														fit: `fill`,
														intrinsicHeight: 720,
														intrinsicWidth: 446,
														pixelHeight: 1440,
														pixelWidth: 892,
														sizes: `calc(${p?.width || `100vw`} - 4px)`,
														...W(x),
													},
													className: `framer-1xsb0jz`,
													
													layoutDependency: I,
													layoutId: `v_jJEf299`,
													style: {
														borderBottomLeftRadius: 8,
														borderBottomRightRadius: 8,
														borderTopLeftRadius: 8,
														borderTopRightRadius: 8,
														opacity: 0,
													},
													variants: {
														"MZhRx4v9y-hover": {
															opacity: 1,
														},
													},
												}),
											}),
											rJsxs(f.div, {
												className: `framer-1ccrhgi`,
												
												layoutDependency: I,
												layoutId: `UuYknjNBK`,
												style: {
													backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
													borderBottomLeftRadius: 8,
													borderBottomRightRadius: 8,
													borderTopLeftRadius: 8,
													borderTopRightRadius: 8,
												},
												children: [
													rJsx(_, {
														__fromCanvasComponent:
															!0,
														children: rJsx(t, {
															children: rJsx(f.h6, {
																className: `framer-styles-preset-41ki07`,
																"data-styles-preset": `hmRgK3K6v`,
																style: {
																	"--framer-text-alignment": `left`,
																	"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `Mercedes`,
															}),
														}),
														className: `framer-1bafdn`,
														fonts: [`Inter`],
														layoutDependency: I,
														layoutId: `CC3Uvly8u`,
														style: {
															"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
															"--framer-paragraph-spacing": `0px`,
														},
														text: S,
														verticalAlignment: `top`,
														withExternalLayout: !0,
													}),
													rJsx(f.div, {
														className: `framer-1inc8db`,
														layoutDependency: I,
														layoutId: `bLSgkwKgW`,
														children: rJsx(ae, {
															children: rJsx(Oe, {
																query: {
																	from: {
																		alias: `bLSgkwKgW`,
																		data: ge,
																		type: `Collection`,
																	},
																	orderBy: [
																		{
																			arguments:
																				[
																					{
																						type: `LiteralValue`,
																						value: w,
																					},
																					{
																						collection: `bLSgkwKgW`,
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
																			collection: `bLSgkwKgW`,
																			name: `Xgdhwh5Me`,
																			type: `Identifier`,
																		},
																		{
																			collection: `bLSgkwKgW`,
																			name: `TBDlVXOGA`,
																			type: `Identifier`,
																		},
																		{
																			collection: `bLSgkwKgW`,
																			name: `id`,
																			type: `Identifier`,
																		},
																	],
																	where: {
																		left: {
																			collection: `bLSgkwKgW`,
																			name: `id`,
																			type: `Identifier`,
																		},
																		operator: `in`,
																		right: {
																			type: `LiteralValue`,
																			value: w,
																		},
																		type: `BinaryOperation`,
																	},
																},
																children: (
																	e,
																	n,
																	r,
																) =>
																	rJsx(d, {
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
																					i,
																				) => (
																					(r ??= ``),
																					(n ??= ``),
																					rJsx(
																						m,
																						{
																							id: `bLSgkwKgW-${e}`,
																							children:
																								rJsx(
																									D.Provider,
																									{
																										value: {
																											TBDlVXOGA:
																												n,
																										},
																										children:
																											rJsx(
																												f.div,
																												{
																													className: `framer-ielyc9`,
																													layoutDependency:
																														I,
																													layoutId: `bwxSXivjf`,
																													style: {
																														backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																														borderBottomLeftRadius: 8,
																														borderBottomRightRadius: 8,
																														borderTopLeftRadius: 8,
																														borderTopRightRadius: 8,
																													},
																													children:
																														rJsx(
																															_,
																															{
																																__fromCanvasComponent:
																																	!0,
																																children:
																																	rJsx(
																																		t,
																																		{
																																			children:
																																				rJsx(
																																					f.h6,
																																					{
																																						className: `framer-styles-preset-12tby5a`,
																																						"data-styles-preset": `j9HsFBXUW`,
																																						style: {
																																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																						},
																																						children: `Website`,
																																					},
																																				),
																																		},
																																	),
																																className: `framer-3d2c3y`,
																																fonts: [
																																	`Inter`,
																																],
																																layoutDependency:
																																	I,
																																layoutId: `c3tZQoqLJ`,
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
																												},
																											),
																									},
																								),
																						},
																						e,
																					)
																				),
																			),
																	}),
															}),
														}),
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
					`.framer-SVJ0f.framer-168twge, .framer-SVJ0f .framer-168twge { display: block; }`,
					`.framer-SVJ0f.framer-1tcauyl { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 550px; }`,
					`.framer-SVJ0f .framer-9haah5 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: hidden; padding: 2px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-SVJ0f .framer-1lnsbo9 { flex: none; height: auto; overflow: visible; position: relative; width: 100%; }`,
					`.framer-SVJ0f .framer-1xsb0jz { flex: none; height: 100%; left: calc(50.00000000000002% - 100% / 2); overflow: visible; position: absolute; top: calc(49.944506104328546% - 100% / 2); width: 100%; }`,
					`.framer-SVJ0f .framer-1ccrhgi { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 17px; height: min-content; justify-content: center; overflow: hidden; padding: 20px 25px 20px 25px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-SVJ0f .framer-1bafdn { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-SVJ0f .framer-1inc8db { -webkit-user-select: none; align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 1px 1px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; user-select: none; width: 100%; }`,
					`.framer-SVJ0f .framer-ielyc9 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 5px 10px 5px 10px; position: relative; width: min-content; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-SVJ0f .framer-3d2c3y { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					...le,
					...z,
				],
				`framer-SVJ0f`,
			)),
			(Ne = G),
			(G.displayName = `Work - Card`),
			(G.defaultProps = { height: 989.5, width: 550 }),
			g(G, {
				fqgfcaCZ9: {
					title: `Main Image - Normal`,
					type: E.ResponsiveImage,
				},
				ko3loeUDM: {
					title: `Main Image - Hover`,
					type: E.ResponsiveImage,
				},
				X2wHb98uQ: {
					defaultValue: `Lementa`,
					title: `Name of Project`,
					type: E.String,
				},
				WitypRxvw: {
					dataIdentifier: `local-module:collection/PxI14If8r:default`,
					defaultValue: [`n4HXEH4La`, `KudQ__nPJ`],
					title: `Categories Of Projects`,
					type: E.MultiCollectionReference,
				},
			}),
			j(
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
					...w(ue),
					...w(pe),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function Fe(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ie,
	Le,
	Re,
	ze,
	Be,
	Ve,
	He,
	K,
	q,
	Ue = lazyInit(() => {
		(rUseDeferredValue(),
			T(),
			h(),
			i(),
			F(),
			U(),
			(Ie = [`vdPuGcDle`, `j8e4C3z9s`, `GY4BTMz7_`, `VBBSOhe5L`]),
			(Le = `framer-IW4c7`),
			(Re = {
				GY4BTMz7_: `framer-v-r00sf2`,
				j8e4C3z9s: `framer-v-1kssx3k`,
				VBBSOhe5L: `framer-v-1b4p3rh`,
				vdPuGcDle: `framer-v-nowrxt`,
			}),
			(ze = {
				"Active - Phone": `GY4BTMz7_`,
				"Default - Phone": `VBBSOhe5L`,
				Active: `j8e4C3z9s`,
				Default: `vdPuGcDle`,
			}),
			(Be = f.create(t)),
			(Ve = ({
				click: e,
				height: t,
				id: n,
				title: r,
				width: i,
				...a
			}) => ({
				...a,
				eAHGXWjyh: e ?? a.eAHGXWjyh,
				mXpY5N3RA: r ?? a.mXpY5N3RA ?? `Category`,
				variant: ze[a.variant] ?? a.variant ?? `vdPuGcDle`,
			})),
			(He = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(K = v(
				rForwardRef(function (e, n) {
					let r = rUseRef(null),
						i = n ?? r,
						o = rUseId(),
						{ activeLocale: s, setLocale: l } = oe();
					ie();
					let {
							style: u,
							className: d,
							layoutId: p,
							variant: h,
							mXpY5N3RA: g,
							eAHGXWjyh: v,
							...y
						} = Ve(e),
						{
							baseVariant: b,
							classNames: x,
							clearLoadingGesture: S,
							gestureHandlers: w,
							gestureVariant: T,
							isLoading: E,
							setGestureState: D,
							setVariant: re,
							variants: O,
						} = te({
							cycleOrder: Ie,
							defaultVariant: `vdPuGcDle`,
							ref: i,
							variant: h,
							variantClassNames: Re,
						}),
						k = He(e, O),
						{ activeVariantCallback: A, delay: j } = ne(b),
						M = A(async (...e) => {
							if (
								(D({ isPressed: !1 }),
								v && (await v(...e)) === !1)
							)
								return !1;
						}),
						N = C(Le, I, xe);
					return rJsx(m, {
						id: p ?? o,
						children: rJsx(Be, {
							animate: O,
							initial: !1,
							children: rJsx(f.div, {
								...y,
								...w,
								className: C(N, `framer-nowrxt`, d, x),
								"data-highlight": !0,
								layoutDependency: k,
								layoutId: `vdPuGcDle`,
								onTap: M,
								ref: i,
								style: {
									backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
									borderBottomLeftRadius: 8,
									borderBottomRightRadius: 8,
									borderTopLeftRadius: 8,
									borderTopRightRadius: 8,
									...u,
								},
								variants: {
									GY4BTMz7_: {
										backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
									},
									j8e4C3z9s: {
										backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
									},
								},
								...Fe(
									{
										GY4BTMz7_: {
										},
										j8e4C3z9s: {
										},
										VBBSOhe5L: {
										},
									},
									b,
									T,
								),
								children: rJsx(_, {
									__fromCanvasComponent: !0,
									children: rJsx(t, {
										children: rJsx(f.h6, {
											className: `framer-styles-preset-41ki07`,
											"data-styles-preset": `hmRgK3K6v`,
											dir: `auto`,
											children: `Category`,
										}),
									}),
									className: `framer-1wbd5yc`,
									
									fonts: [`Inter`],
									layoutDependency: k,
									layoutId: `oX9BN6kiO`,
									style: {
										"--framer-paragraph-spacing": `0px`,
									},
									text: g,
									variants: {
										GY4BTMz7_: {
											"--extracted-1w1cjl5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
										},
										j8e4C3z9s: {
											"--extracted-1w1cjl5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
										},
									},
									verticalAlignment: `top`,
									withExternalLayout: !0,
									...Fe(
										{
											GY4BTMz7_: {
												children: rJsx(t, {
													children: rJsx(f.h6, {
														className: `framer-styles-preset-8moxfa`,
														"data-styles-preset": `NqfjhJTm6`,
														dir: `auto`,
														style: {
															"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
														},
														children: `Category`,
													}),
												}),
											},
											j8e4C3z9s: {
												children: rJsx(t, {
													children: rJsx(f.h6, {
														className: `framer-styles-preset-41ki07`,
														"data-styles-preset": `hmRgK3K6v`,
														dir: `auto`,
														style: {
															"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
														},
														children: `Category`,
													}),
												}),
											},
											VBBSOhe5L: {
												children: rJsx(t, {
													children: rJsx(f.h6, {
														className: `framer-styles-preset-8moxfa`,
														"data-styles-preset": `NqfjhJTm6`,
														dir: `auto`,
														children: `Category`,
													}),
												}),
											},
										},
										b,
										T,
									),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-IW4c7.framer-v566b5, .framer-IW4c7 .framer-v566b5 { display: block; }`,
					`.framer-IW4c7.framer-nowrxt { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: center; overflow: hidden; padding: 10px 15px 10px 15px; position: relative; width: 128px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-IW4c7 .framer-1wbd5yc { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					...se,
					...ye,
				],
				`framer-IW4c7`,
			)),
			(q = K),
			(K.displayName = `Tab`),
			(K.defaultProps = { height: 41, width: 128 }),
			g(K, {
				variant: {
					options: [
						`vdPuGcDle`,
						`j8e4C3z9s`,
						`GY4BTMz7_`,
						`VBBSOhe5L`,
					],
					optionTitles: [
						`Default`,
						`Active`,
						`Active - Phone`,
						`Default - Phone`,
					],
					title: `Variant`,
					type: E.Enum,
				},
				mXpY5N3RA: {
					defaultValue: `Category`,
					displayTextArea: !1,
					title: `Title`,
					type: E.String,
				},
				onmXpY5N3RAChange: {
					changes: `mXpY5N3RA`,
					type: E.ChangeHandler,
				},
				eAHGXWjyh: { title: `Click`, type: E.EventHandler },
			}),
			j(
				K,
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
					...w(ce),
					...w(be),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function J(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var We,
	Ge,
	Ke,
	qe,
	Je,
	Ye,
	Xe,
	Ze,
	Y,
	Qe,
	$e,
	X,
	et,
	tt,
	nt,
	rt,
	it,
	at,
	ot,
	Z,
	Q,
	st,
	ct,
	lt,
	ut,
	dt,
	ft,
	pt,
	mt,
	ht,
	gt,
	_t,
	vt,
	yt,
	$,
	bt,
	xt = lazyInit(() => {
		(rUseDeferredValue(),
			T(),
			h(),
			i(),
			me(),
			H(),
			Pe(),
			Ue(),
			ve(),
			(We = y(q)),
			(Ge = y(Ne)),
			(Ke = S(x)),
			(qe = y(_e)),
			(Je = [
				`J7DS_HoSO`,
				`xD2gGXCuN`,
				`GLMFLpW43`,
				`eALG5uHM4`,
				`PFQfmNptX`,
			]),
			(Ye = `framer-Ini5G`),
			(Xe = {
				eALG5uHM4: `framer-v-1t7xmfh`,
				GLMFLpW43: `framer-v-1y04xd7`,
				J7DS_HoSO: `framer-v-c9eh0d`,
				PFQfmNptX: `framer-v-a6sapx`,
				xD2gGXCuN: `framer-v-ztny1h`,
			}),
			(Ze = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Y = (e) => {
				if (typeof e != `number`) return e;
				if (Number.isFinite(e)) return Math.max(0, e) + `px`;
			}),
			(Qe = (e) =>
				Array.isArray(e) ? e.length > 0 : e != null && e !== ``),
			($e = (e, t) => (e ? `vdPuGcDle` : `j8e4C3z9s`)),
			(X = (...e) => {
				for (let t of e) if (t && typeof t == `string`) return t;
			}),
			(et = (e, t) => (e ? `VBBSOhe5L` : `GY4BTMz7_`)),
			(tt = (e, t) =>
				typeof e == `string` && typeof t == `string`
					? e.toLowerCase() === t.toLowerCase()
					: e === t),
			(nt = (e, t) => (e ? `j8e4C3z9s` : `vdPuGcDle`)),
			(rt = (e, t) => (e ? `GY4BTMz7_` : `VBBSOhe5L`)),
			(it = () => ({
				from: { alias: `whfOXWobF`, data: B, type: `Collection` },
				select: [
					{ collection: `whfOXWobF`, name: `id`, type: `Identifier` },
					{
						collection: `whfOXWobF`,
						name: `Xgdhwh5Me`,
						type: `Identifier`,
					},
					{
						collection: `whfOXWobF`,
						name: `TBDlVXOGA`,
						type: `Identifier`,
					},
				],
			})),
			(at = ({ query: e, pageSize: t, children: n }) => n(P(e))),
			(ot = {
				opacity: 0,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0,
				x: 0,
				y: 35,
			}),
			(Z = {
				delay: 0,
				duration: 0.6,
				ease: [0.44, 0, 0.16, 1.01],
				type: `tween`,
			}),
			(Q = (e, t) => ({ ...e, delay: (e.delay ?? 0) + t })),
			(st = {
				opacity: 0,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0,
				transition: Z,
				x: 0,
				y: 35,
			}),
			(ct = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(lt = (e, t, n) =>
				e.currentPage >= e.totalPages
					? (t.disabled ?? n)
					: e.isLoading
						? (t.loading ?? n)
						: n),
			(ut = (e) => ({
				from: { alias: `YfdV4JHam`, data: V, type: `Collection` },
				select: [
					{
						collection: `YfdV4JHam`,
						name: `frSm7SqOH`,
						type: `Identifier`,
					},
					{
						collection: `YfdV4JHam`,
						name: `XeBiPQ5VL`,
						type: `Identifier`,
					},
					{
						collection: `YfdV4JHam`,
						name: `t9QzOmy7p`,
						type: `Identifier`,
					},
					{
						collection: `YfdV4JHam`,
						name: `aCxyLQ1t8`,
						type: `Identifier`,
					},
					{
						alias: `Fc9gMlpS8`,
						arguments: [
							{
								from: {
									alias: `Fc9gMlpS8`,
									data: B,
									type: `Collection`,
								},
								orderBy: [
									{
										arguments: [
											{
												collection: `YfdV4JHam`,
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
										collection: `YfdV4JHam`,
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
					{ collection: `YfdV4JHam`, name: `id`, type: `Identifier` },
				],
				where: {
					left: {
						left: { type: `LiteralValue`, value: e },
						operator: `==`,
						right: { type: `LiteralValue`, value: null },
						type: `BinaryOperation`,
					},
					operator: `or`,
					right: {
						left: { type: `LiteralValue`, value: e },
						operator: `in`,
						right: {
							collection: `YfdV4JHam`,
							name: `Fc9gMlpS8`,
							type: `Identifier`,
						},
						type: `BinaryOperation`,
					},
					type: `BinaryOperation`,
				},
			})),
			(dt = (e) => ({
				from: { alias: `YfdV4JHam`, data: V, type: `Collection` },
				limit: { type: `LiteralValue`, value: 3 },
				select: [
					{
						collection: `YfdV4JHam`,
						name: `frSm7SqOH`,
						type: `Identifier`,
					},
					{
						collection: `YfdV4JHam`,
						name: `XeBiPQ5VL`,
						type: `Identifier`,
					},
					{
						collection: `YfdV4JHam`,
						name: `t9QzOmy7p`,
						type: `Identifier`,
					},
					{
						collection: `YfdV4JHam`,
						name: `aCxyLQ1t8`,
						type: `Identifier`,
					},
					{
						alias: `Fc9gMlpS8`,
						arguments: [
							{
								from: {
									alias: `Fc9gMlpS8`,
									data: B,
									type: `Collection`,
								},
								orderBy: [
									{
										arguments: [
											{
												collection: `YfdV4JHam`,
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
										collection: `YfdV4JHam`,
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
					{ collection: `YfdV4JHam`, name: `id`, type: `Identifier` },
				],
				where: {
					left: {
						operator: `not`,
						type: `UnaryOperation`,
						value: {
							left: {
								collection: `YfdV4JHam`,
								name: `aCxyLQ1t8`,
								type: `Identifier`,
							},
							operator: `==`,
							right: { type: `LiteralValue`, value: e },
							type: `BinaryOperation`,
						},
					},
					operator: `and`,
					right: {
						left: {
							left: {
								arguments: [
									{
										from: {
											alias: `Fc9gMlpS8`,
											data: B,
											type: `Collection`,
										},
										orderBy: [
											{
												arguments: [
													{
														collection: `YfdV4JHam`,
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
												collection: `YfdV4JHam`,
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
							operator: `!=`,
							right: { type: `LiteralValue`, value: null },
							type: `BinaryOperation`,
						},
						operator: `and`,
						right: {
							left: {
								arguments: [
									{
										arguments: [
											{
												from: {
													alias: `Fc9gMlpS8`,
													data: B,
													type: `Collection`,
												},
												orderBy: [
													{
														arguments: [
															{
																collection: `YfdV4JHam`,
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
														collection: `YfdV4JHam`,
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
								],
								functionName: `LENGTH`,
								type: `FunctionCall`,
							},
							operator: `>`,
							right: { type: `LiteralValue`, value: 0 },
							type: `BinaryOperation`,
						},
						type: `BinaryOperation`,
					},
					type: `BinaryOperation`,
				},
			})),
			(ft = (e) => ({
				from: { alias: `YfdV4JHam`, data: V, type: `Collection` },
				limit: { type: `LiteralValue`, value: 3 },
				select: [
					{
						collection: `YfdV4JHam`,
						name: `frSm7SqOH`,
						type: `Identifier`,
					},
					{
						collection: `YfdV4JHam`,
						name: `XeBiPQ5VL`,
						type: `Identifier`,
					},
					{
						collection: `YfdV4JHam`,
						name: `t9QzOmy7p`,
						type: `Identifier`,
					},
					{
						collection: `YfdV4JHam`,
						name: `aCxyLQ1t8`,
						type: `Identifier`,
					},
					{
						alias: `Fc9gMlpS8`,
						arguments: [
							{
								from: {
									alias: `Fc9gMlpS8`,
									data: B,
									type: `Collection`,
								},
								orderBy: [
									{
										arguments: [
											{
												collection: `YfdV4JHam`,
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
										collection: `YfdV4JHam`,
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
					{ collection: `YfdV4JHam`, name: `id`, type: `Identifier` },
				],
				where: {
					operator: `not`,
					type: `UnaryOperation`,
					value: {
						left: {
							collection: `YfdV4JHam`,
							name: `aCxyLQ1t8`,
							type: `Identifier`,
						},
						operator: `==`,
						right: { type: `LiteralValue`, value: e },
						type: `BinaryOperation`,
					},
				},
			})),
			(pt = ({ query: e, pageSize: t, children: n }) => {
				let {
					paginatedQuery: r,
					paginationInfo: i,
					loadMore: a,
				} = k(e, t, `YfdV4JHam`);
				return n(P(r), i, a);
			}),
			(mt = ({ value: e, children: t }) => {
				let n = rUseContext(p),
					i = e ?? n.transition,
					o = rUseMemo(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
				return rJsx(p.Provider, { value: o, children: t });
			}),
			(ht = {
				"All - Desktop": `J7DS_HoSO`,
				"All - Phone": `PFQfmNptX`,
				"Limited to 3 - Desktop": `xD2gGXCuN`,
				"Limited to 3 - Phone": `eALG5uHM4`,
				"Limited to 3 - Tablet": `GLMFLpW43`,
			}),
			(gt = f.create(t)),
			(_t = (e, t) => {
				let [r, i] = n(e),
					[a, o] = n(e);
				return t ? [e, t] : (e !== a && (i(e), o(e)), [r, i]);
			}),
			(vt = ({
				bottomSpacer: e,
				categoriesOfProject2: t,
				filter: n,
				gap: r,
				height: i,
				id: a,
				padding: o,
				paddingOfContainer: s,
				showCategories: c,
				showLoadMoreButton: l,
				width: u,
				...d
			}) => ({
				...d,
				fEnNZuEJR: e ?? d.fEnNZuEJR ?? !0,
				FQz_lWggO: s ?? d.FQz_lWggO ?? `0px 40px 90px 40px`,
				OafLKlJQX: r ?? d.OafLKlJQX ?? `20px`,
				sCPIWVnx3: o ?? d.sCPIWVnx3 ?? `0px`,
				tDTWPj9WT: c ?? d.tDTWPj9WT ?? !0,
				TQYuQhxH_: t ?? d.TQYuQhxH_,
				UUUwIxYLW: n ?? d.UUUwIxYLW,
				variant: ht[d.variant] ?? d.variant ?? `J7DS_HoSO`,
				Y2LHe67nO: l ?? d.Y2LHe67nO ?? !0,
			})),
			(yt = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			($ = v(
				rForwardRef(function (e, t) {
					let n = rUseRef(null),
						r = t ?? n,
						i = rUseId(),
						{ activeLocale: o, setLocale: s } = oe(),
						u = ie(),
						{
							style: p,
							className: h,
							layoutId: g,
							variant: _,
							tDTWPj9WT: v,
							Y2LHe67nO: y,
							fEnNZuEJR: b,
							UUUwIxYLW: S,
							OafLKlJQX: w,
							sCPIWVnx3: T,
							FQz_lWggO: E,
							TQYuQhxH_: re,
							onTQYuQhxH_Change: k,
							...A
						} = vt(e),
						[j, P] = _t(re, k),
						{
							baseVariant: F,
							classNames: se,
							clearLoadingGesture: ce,
							gestureHandlers: I,
							gestureVariant: L,
							isLoading: le,
							setGestureState: ue,
							setVariant: de,
							variants: fe,
						} = te({
							cycleOrder: Je,
							defaultVariant: `J7DS_HoSO`,
							ref: r,
							variant: _,
							variantClassNames: Xe,
						}),
						R = yt(e, fe),
						{ activeVariantCallback: z, delay: pe } = ne(F),
						me = z(async (...e) => {
							P?.(void 0);
						}),
						he = ({ argkmv8xa: e }) =>
							z(async (...t) => {
								P?.(e);
							}),
						B = ({ loadMore: e }) =>
							z(async (...t) => {
								e();
							}),
						ge = C(Ye),
						V = () =>
							![`xD2gGXCuN`, `GLMFLpW43`, `eALG5uHM4`].includes(
								F,
							),
						H =
							typeof E == `string`
								? M(E)
								: { top: E, right: E, bottom: E, left: E },
						ve = (e) =>
							[`xD2gGXCuN`, `GLMFLpW43`, `eALG5uHM4`].includes(F)
								? !0
								: e,
						U =
							typeof T == `string`
								? M(T)
								: { top: T, right: T, bottom: T, left: T },
						ye = (e) =>
							[`xD2gGXCuN`, `GLMFLpW43`, `eALG5uHM4`].includes(F)
								? !1
								: e;
					return rJsx(m, {
						id: g ?? i,
						children: rJsx(gt, {
							animate: fe,
							initial: !1,
							children: rJsx(mt, {
								value: Ze,
								children: rJsx(f.div, {
									...A,
									...I,
									className: C(ge, `framer-c9eh0d`, h, se),
									layoutDependency: R,
									layoutId: `J7DS_HoSO`,
									ref: r,
									style: { ...p },
									...J(
										{
											eALG5uHM4: {
											},
											GLMFLpW43: {
											},
											PFQfmNptX: {
											},
											xD2gGXCuN: {
											},
										},
										F,
										L,
									),
									children: rJsxs(f.div, {
										className: `framer-m0f260`,
										
										layoutDependency: R,
										layoutId: `TEyHSanci`,
										style: { "--stg8u9": Y(E) },
										children: [
											V() &&
												rJsx(f.div, {
													className: `framer-68957f`,
													
													layoutDependency: R,
													layoutId: `kuYF4TKNh`,
													children: rJsx(f.div, {
														className: `framer-2ysavs`,
														
														layoutDependency: R,
														layoutId: `whfOXWobF`,
														style: {
															backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
															borderBottomLeftRadius: 10,
															borderBottomRightRadius: 10,
															borderTopLeftRadius: 10,
															borderTopRightRadius: 10,
														},
														children: rJsx(ae, {
															children: rJsx(at, {
																query: it(),
																children: (
																	e,
																	t,
																	n,
																) =>
																	rJsxs(d, {
																		children:
																			[
																				rJsx(
																					N,
																					{
																						height: 41,
																						width: `max(((min(${u?.width || `100vw`}, 1600px) - ${(H?.left ?? 0) + (H?.right ?? 0)}px) - 8px) / 3, 50px)`,
																						...J(
																							{
																								PFQfmNptX:
																									{
																										width: `max(((min(${u?.width || `100vw`}, 1600px) - ${(H?.left ?? 0) + (H?.right ?? 0)}px) - 6px) / 2, 50px)`,
																									},
																							},
																							F,
																							L,
																						),
																						children:
																							rJsx(
																								x,
																								{
																									className: `framer-196mta3-container`,
																									layoutDependency:
																										R,
																									layoutId: `VKmFrEzEx-container`,
																									nodeId: `VKmFrEzEx`,
																									rendersWithMotion:
																										!0,
																									scopeId: `ZCUtdxyFY`,
																									children:
																										rJsx(
																											q,
																											{
																												eAHGXWjyh:
																													me,
																												height: `100%`,
																												id: `VKmFrEzEx`,
																												layoutId: `VKmFrEzEx`,
																												mXpY5N3RA: `All`,
																												style: {
																													width: `100%`,
																												},
																												variant:
																													X(
																														$e(
																															Qe(
																																j,
																															),
																															o,
																														),
																													),
																												width: `100%`,
																												...J(
																													{
																														PFQfmNptX:
																															{
																																variant:
																																	X(
																																		et(
																																			Qe(
																																				j,
																																			),
																																			o,
																																		),
																																	),
																															},
																													},
																													F,
																													L,
																												),
																											},
																										),
																								},
																							),
																					},
																				),
																				e?.map(
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
																						rJsx(
																							m,
																							{
																								id: `whfOXWobF-${e}`,
																								children:
																									rJsx(
																										D.Provider,
																										{
																											value: {
																												TBDlVXOGA:
																													t,
																											},
																											children:
																												rJsx(
																													N,
																													{
																														height: 41,
																														width: `max(((min(${u?.width || `100vw`}, 1600px) - ${(H?.left ?? 0) + (H?.right ?? 0)}px) - 8px) / 3, 50px)`,
																														...J(
																															{
																																PFQfmNptX:
																																	{
																																		width: `max(((min(${u?.width || `100vw`}, 1600px) - ${(H?.left ?? 0) + (H?.right ?? 0)}px) - 6px) / 2, 50px)`,
																																	},
																															},
																															F,
																															L,
																														),
																														children:
																															rJsx(
																																x,
																																{
																																	className: `framer-1xrxip1-container`,
																																	layoutDependency:
																																		R,
																																	layoutId: `QCFvr6kl5-container`,
																																	nodeId: `QCFvr6kl5`,
																																	rendersWithMotion:
																																		!0,
																																	scopeId: `ZCUtdxyFY`,
																																	children:
																																		rJsx(
																																			q,
																																			{
																																				eAHGXWjyh:
																																					he(
																																						{
																																							argkmv8xa:
																																								e,
																																						},
																																					),
																																				height: `100%`,
																																				id: `QCFvr6kl5`,
																																				layoutId: `QCFvr6kl5`,
																																				mXpY5N3RA:
																																					n,
																																				style: {
																																					width: `100%`,
																																				},
																																				variant:
																																					X(
																																						nt(
																																							tt(
																																								j,
																																								e,
																																							),
																																							o,
																																						),
																																					),
																																				width: `100%`,
																																				...J(
																																					{
																																						PFQfmNptX:
																																							{
																																								variant:
																																									X(
																																										rt(
																																											tt(
																																												j,
																																												e,
																																											),
																																											o,
																																										),
																																									),
																																							},
																																					},
																																					F,
																																					L,
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
																							e,
																						)
																					),
																				),
																			],
																	}),
															}),
														}),
													}),
												}),
											rJsx(f.div, {
												className: `framer-1rnifvg`,
												layoutDependency: R,
												layoutId: `YfdV4JHam`,
												style: {
													"--184t3gl": Y(w),
													"--vy8sbp": Y(T),
												},
												children: rJsx(ae, {
													children: rJsx(pt, {
														pageSize: 4,
														query: ut(j),
														...J(
															{
																eALG5uHM4: {
																	pageSize: 3,
																	query: ft(
																		S,
																	),
																},
																GLMFLpW43: {
																	pageSize: 3,
																	query: ft(
																		S,
																	),
																},
																xD2gGXCuN: {
																	pageSize: 3,
																	query: dt(
																		S,
																	),
																},
															},
															F,
															L,
														),
														children: (e, t, n) =>
															rJsxs(d, {
																children: [
																	ve(
																		v !==
																			!1,
																	) &&
																		rJsx(
																			f.div,
																			{
																				className: `framer-lp3l4d`,
																				
																				layoutDependency:
																					R,
																				layoutId: `I_r_nsOac`,
																			},
																		),
																	e?.map(
																		(
																			{
																				aCxyLQ1t8:
																					e,
																				Fc9gMlpS8:
																					t,
																				frSm7SqOH:
																					n,
																				id: r,
																				t9QzOmy7p:
																					i,
																				XeBiPQ5VL:
																					o,
																			},
																			s,
																		) => (
																			(n ??= ``),
																			(e ??= ``),
																			rJsx(
																				m,
																				{
																					id: `YfdV4JHam-${r}`,
																					children:
																						rJsx(
																							D.Provider,
																							{
																								value: {
																									frSm7SqOH:
																										n,
																								},
																								children:
																									rJsx(
																										O,
																										{
																											href: {
																												pathVariables:
																													{
																														frSm7SqOH:
																															n,
																													},
																												webPageId: `luGPP9ZOT`,
																											},
																											motionChild:
																												!0,
																											nodeId: `zBcufHAqi`,
																											scopeId: `ZCUtdxyFY`,
																											children:
																												rJsx(
																													f.a,
																													{
																														className: `framer-qhjird framer-1rr78h`,
																														layoutDependency:
																															R,
																														layoutId: `zBcufHAqi`,
																														children:
																															rJsx(
																																N,
																																{
																																	height: 989,
																																	width: `max((((min(${u?.width || `100vw`}, 1600px) - ${(H?.left ?? 0) + (H?.right ?? 0)}px) - ${(U?.left ?? 0) + (U?.right ?? 0)}px) - ${w * 1}px) / 2, 50px)`,
																																	...J(
																																		{
																																			eALG5uHM4:
																																				{
																																					width: `calc((min(${u?.width || `100vw`}, 1600px) - ${(H?.left ?? 0) + (H?.right ?? 0)}px) - ${(U?.left ?? 0) + (U?.right ?? 0)}px)`,
																																				},
																																			GLMFLpW43:
																																				{
																																					width: `calc(((min(${u?.width || `100vw`}, 1600px) - ${(H?.left ?? 0) + (H?.right ?? 0)}px) - ${(U?.left ?? 0) + (U?.right ?? 0)}px) * 0.32)`,
																																				},
																																			PFQfmNptX:
																																				{
																																					width: `max(((min(${u?.width || `100vw`}, 1600px) - ${(H?.left ?? 0) + (H?.right ?? 0)}px) - ${(U?.left ?? 0) + (U?.right ?? 0)}px) - ${w * 0}px, 50px)`,
																																				},
																																			xD2gGXCuN:
																																				{
																																					width: `calc(((min(${u?.width || `100vw`}, 1600px) - ${(H?.left ?? 0) + (H?.right ?? 0)}px) - ${(U?.left ?? 0) + (U?.right ?? 0)}px) * 0.3)`,
																																				},
																																		},
																																		F,
																																		L,
																																	),
																																	children:
																																		rJsx(
																																			Ke,
																																			{
																																				__framer__animate:
																																					{
																																						transition:
																																							Q(
																																								Z,
																																								(s %
																																									4) *
																																									0.2,
																																							),
																																					},
																																				__framer__animateOnce:
																																					!0,
																																				__framer__enter:
																																					ot,
																																				__framer__exit:
																																					st,
																																				__framer__styleAppearEffectEnabled:
																																					!0,
																																				__framer__threshold: 0,
																																				__perspectiveFX:
																																					!1,
																																				__smartComponentFX:
																																					!0,
																																				__targetOpacity: 1,
																																				className: `framer-1sc2t8y-container`,
																																				layoutDependency:
																																					R,
																																				layoutId: `BrN9jpbvp-container`,
																																				nodeId: `BrN9jpbvp`,
																																				rendersWithMotion:
																																					!0,
																																				scopeId: `ZCUtdxyFY`,
																																				...J(
																																					{
																																						eALG5uHM4:
																																							{
																																								__framer__animate:
																																									{
																																										transition:
																																											Q(
																																												Z,
																																												(s %
																																													3) *
																																													0.2,
																																											),
																																									},
																																							},
																																						GLMFLpW43:
																																							{
																																								__framer__animate:
																																									{
																																										transition:
																																											Q(
																																												Z,
																																												(s %
																																													3) *
																																													0.2,
																																											),
																																									},
																																							},
																																						xD2gGXCuN:
																																							{
																																								__framer__animate:
																																									{
																																										transition:
																																											Q(
																																												Z,
																																												(s %
																																													3) *
																																													0.2,
																																											),
																																									},
																																							},
																																					},
																																					F,
																																					L,
																																				),
																																				children:
																																					rJsx(
																																						Ne,
																																						{
																																							fqgfcaCZ9:
																																								ct(
																																									o,
																																								),
																																							height: `100%`,
																																							id: `BrN9jpbvp`,
																																							ko3loeUDM:
																																								ct(
																																									i,
																																								),
																																							layoutId: `BrN9jpbvp`,
																																							style: {
																																								width: `100%`,
																																							},
																																							width: `100%`,
																																							WitypRxvw:
																																								t,
																																							X2wHb98uQ:
																																								e,
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
																				},
																				r,
																			)
																		),
																	),
																	ye(
																		b !==
																			!1,
																	) &&
																		rJsx(
																			f.div,
																			{
																				className: `framer-bs1tvw`,
																				
																				layoutDependency:
																					R,
																				layoutId: `QcV3UZRKJ`,
																			},
																		),
																	ye(
																		y !==
																			!1,
																	) &&
																		rJsx(N, {
																			height: 50,
																			width: `250px`,
																			...J(
																				{
																					PFQfmNptX:
																						{
																							width: `calc(max(((min(${u?.width || `100vw`}, 1600px) - ${(H?.left ?? 0) + (H?.right ?? 0)}px) - ${(U?.left ?? 0) + (U?.right ?? 0)}px) - ${w * 0}px, 50px) + ${w * 0}px)`,
																						},
																				},
																				F,
																				L,
																			),
																			children:
																				rJsx(
																					x,
																					{
																						className: `framer-7gl3qd-container`,
																						layoutDependency:
																							R,
																						layoutId: `ii0V_cooL-container`,
																						nodeId: `ii0V_cooL`,
																						rendersWithMotion:
																							!0,
																						scopeId: `ZCUtdxyFY`,
																						children:
																							rJsx(
																								_e,
																								{
																									height: `100%`,
																									id: `ii0V_cooL`,
																									layoutId: `ii0V_cooL`,
																									style: {
																										height: `100%`,
																										width: `100%`,
																									},
																									variant:
																										lt(
																											t,
																											{
																												disabled: `ugQupQuy5`,
																												loading: `MnozbBE93`,
																											},
																											X(
																												`D3N7gFuhz`,
																											),
																										),
																									width: `100%`,
																									Wld3NDzSj:
																										B(
																											{
																												loadMore:
																													n,
																											},
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
										],
									}),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-Ini5G.framer-1rr78h, .framer-Ini5G .framer-1rr78h { display: block; }`,
					`.framer-Ini5G.framer-c9eh0d { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 1200px; }`,
					`.framer-Ini5G .framer-m0f260 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: visible; padding: var(--stg8u9); position: relative; width: 100%; }`,
					`.framer-Ini5G .framer-68957f { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 8px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
					`.framer-Ini5G .framer-2ysavs { display: grid; flex: none; gap: 2px 2px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(3, minmax(50px, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 2px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-Ini5G .framer-196mta3-container, .framer-Ini5G .framer-1xrxip1-container { align-self: start; flex: none; height: auto; justify-self: start; position: relative; width: 100%; }`,
					`.framer-Ini5G .framer-1rnifvg { display: grid; flex: none; gap: var(--184t3gl); grid-auto-rows: min-content; grid-template-columns: repeat(2, minmax(50px, 1fr)); height: min-content; justify-content: center; padding: var(--vy8sbp); position: relative; width: 100%; }`,
					`.framer-Ini5G .framer-lp3l4d, .framer-Ini5G .framer-bs1tvw { align-self: start; flex: none; grid-column: span 2; height: 20px; justify-self: start; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-Ini5G .framer-qhjird { align-content: center; align-items: center; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; justify-self: start; padding: 0px; position: relative; text-decoration: none; width: 100%; }`,
					`.framer-Ini5G .framer-1sc2t8y-container { flex: none; height: auto; position: relative; width: 100%; }`,
					`.framer-Ini5G .framer-7gl3qd-container { align-self: start; flex: none; grid-column: span 2; height: 50px; justify-self: center; position: relative; width: 250px; }`,
					`.framer-Ini5G.framer-v-ztny1h .framer-1rnifvg, .framer-Ini5G.framer-v-1y04xd7 .framer-1rnifvg { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: row; flex-wrap: wrap; gap: unset; justify-content: space-between; }`,
					`.framer-Ini5G.framer-v-ztny1h .framer-lp3l4d { align-self: unset; height: 45px; }`,
					`.framer-Ini5G.framer-v-ztny1h .framer-qhjird { align-self: unset; gap: 0px; width: 30%; }`,
					`.framer-Ini5G.framer-v-ztny1h .framer-1sc2t8y-container, .framer-Ini5G.framer-v-1y04xd7 .framer-1sc2t8y-container, .framer-Ini5G.framer-v-1t7xmfh .framer-1sc2t8y-container { order: 0; }`,
					`.framer-Ini5G.framer-v-1y04xd7.framer-c9eh0d { width: 810px; }`,
					`.framer-Ini5G.framer-v-1y04xd7 .framer-lp3l4d { align-self: unset; height: 30px; }`,
					`.framer-Ini5G.framer-v-1y04xd7 .framer-qhjird { align-self: unset; gap: 0px; width: 32%; }`,
					`.framer-Ini5G.framer-v-1t7xmfh.framer-c9eh0d, .framer-Ini5G.framer-v-a6sapx.framer-c9eh0d { width: 390px; }`,
					`.framer-Ini5G.framer-v-1t7xmfh .framer-1rnifvg { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: wrap; gap: 15px 15px; justify-content: flex-start; }`,
					`.framer-Ini5G.framer-v-1t7xmfh .framer-lp3l4d { align-self: unset; height: 10px; }`,
					`.framer-Ini5G.framer-v-1t7xmfh .framer-qhjird { align-self: unset; gap: 0px; }`,
					`.framer-Ini5G.framer-v-a6sapx .framer-2ysavs { grid-template-columns: repeat(2, minmax(50px, 1fr)); }`,
					`.framer-Ini5G.framer-v-a6sapx .framer-1rnifvg { grid-template-columns: repeat(1, minmax(50px, 1fr)); }`,
					`.framer-Ini5G.framer-v-a6sapx .framer-lp3l4d { grid-column: span 1; }`,
					`.framer-Ini5G.framer-v-a6sapx .framer-bs1tvw { grid-column: span 1; height: 10px; }`,
					`.framer-Ini5G.framer-v-a6sapx .framer-7gl3qd-container { grid-column: span 1; width: 100%; }`,
				],
				`framer-Ini5G`,
			)),
			(bt = $),
			($.displayName = `Projects List - Widget`),
			($.defaultProps = { height: 1838, width: 1200 }),
			g($, {
				variant: {
					options: [
						`J7DS_HoSO`,
						`xD2gGXCuN`,
						`GLMFLpW43`,
						`eALG5uHM4`,
						`PFQfmNptX`,
					],
					optionTitles: [
						`All - Desktop`,
						`Limited to 3 - Desktop`,
						`Limited to 3 - Tablet`,
						`Limited to 3 - Phone`,
						`All - Phone`,
					],
					title: `Variant`,
					type: E.Enum,
				},
				tDTWPj9WT: {
					defaultValue: !0,
					title: `Show Categories`,
					type: E.Boolean,
				},
				ontDTWPj9WTChange: {
					changes: `tDTWPj9WT`,
					type: E.ChangeHandler,
				},
				Y2LHe67nO: {
					defaultValue: !0,
					title: `Show Load More Button`,
					type: E.Boolean,
				},
				onY2LHe67nOChange: {
					changes: `Y2LHe67nO`,
					type: E.ChangeHandler,
				},
				fEnNZuEJR: {
					defaultValue: !0,
					title: `Bottom Spacer`,
					type: E.Boolean,
				},
				onfEnNZuEJRChange: {
					changes: `fEnNZuEJR`,
					type: E.ChangeHandler,
				},
				UUUwIxYLW: {
					defaultValue: ``,
					title: `Filter`,
					type: E.String,
				},
				onUUUwIxYLWChange: {
					changes: `UUUwIxYLW`,
					type: E.ChangeHandler,
				},
				OafLKlJQX: { defaultValue: `20px`, title: `Gap`, type: E.Gap },
				sCPIWVnx3: {
					defaultValue: `0px`,
					title: `Padding`,
					type: E.Padding,
				},
				FQz_lWggO: {
					defaultValue: `0px 40px 90px 40px`,
					title: `Padding of Container`,
					type: E.Padding,
				},
				TQYuQhxH_: {
					dataIdentifier: `local-module:collection/PxI14If8r:default`,
					optional: !0,
					title: `Categories Of Project 2`,
					type: E.CollectionReference,
				},
				onTQYuQhxH_Change: {
					changes: `TQYuQhxH_`,
					type: E.ChangeHandler,
				},
			}),
			j($, [{ explicitInter: !0, fonts: [] }, ...We, ...Ge, ...qe], {
				supportsExplicitInterCodegen: !0,
			}),
			($.loader = {
				load: (e, t) => {
					let n = t.locale,
						r = A.get(it(), n);
					return Promise.allSettled([
						r.preload(),
						(async () => {
							let e = (await r.readMaybeAsync()) ?? [];
							return Promise.allSettled(
								e.flatMap((e) => [b(q, {}, t), b(q, {}, t)]),
							);
						})(),
					]);
				},
			}));
	});
export { xt as n, bt as t };
