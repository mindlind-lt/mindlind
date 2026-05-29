import { t as e } from "./rolldown-runtime.mjs";
import {
	F as t,
	I as n,
	M as r,
	P as i,
	T as a,
	V as o,
	c as s,
	g as c,
	j as l,
	k as u,
	l as d,
	o as f,
	y as p,
	z as m,
} from "./react.mjs";
import { S as h, a as g, r as _, t as v } from "./motion.mjs";
import {
	A as y,
	E as b,
	Et as x,
	G as S,
	H as C,
	I as w,
	O as T,
	Ot as E,
	P as D,
	Tt as ee,
	U as O,
	X as k,
	a as A,
	ft as te,
	g as j,
	ht as ne,
	i as re,
	k as M,
	lt as N,
	pt as P,
	r as F,
	u as I,
	vt as ie,
	w as ae,
	wt as oe,
	x as L,
	yt as R,
} from "./framer.mjs";
import { i as z, n as B, r as V, t as se } from "./hmRgK3K6v.Bb8FQ5b1.mjs";
import {
	a as ce,
	c as le,
	d as H,
	f as ue,
	i as U,
	l as de,
	m as fe,
	n as W,
	o as G,
	p as pe,
	r as me,
	s as he,
	t as ge,
	u as K,
} from "./component-icon-button.mjs";
import { i as q, n as _e, r as ve, t as ye } from "./q7NcKTKUL.DsgFejH8.mjs";
import { i as be, n as xe, r as Se, t as Ce } from "./BaUGQBb6A.CCunrJSH.mjs";
import {
	a as we,
	c as Te,
	i as Ee,
	n as De,
	o as Oe,
	r as ke,
	s as Ae,
	t as je,
} from "./pPuowuywh.BpuFfTb3.mjs";
import { i as Me, n as Ne, r as Pe, t as Fe } from "./IGVKsj4vh.GXVwIVTj.mjs";
import { i as Ie, n as Le, r as Re, t as ze } from "./LuOKrK4j8.BwEhIs1I.mjs";
import { n as Be, t as Ve } from "./component-contact-form.mjs";
import { n as He, t as Ue } from "./Rotor_Gallery-shared.mjs";
import { n as We, r as Ge } from "./page-contact.mjs";
function Ke(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var qe,
	Je,
	Ye,
	Xe,
	Ze,
	Qe,
	$e,
	et,
	tt,
	nt,
	rt,
	J,
	it,
	at = e(() => {
		(f(),
			k(),
			v(),
			a(),
			He(),
			(qe = E(b)),
			(Je = C(Ue)),
			(Ye = [`kyFKAMX03`, `wPg_bfYE3`, `QrmbrSoVs`]),
			(Xe = `framer-5NvFE`),
			(Ze = {
				kyFKAMX03: `framer-v-1rmbsm8`,
				QrmbrSoVs: `framer-v-xj2yk8`,
				wPg_bfYE3: `framer-v-14g39q0`,
			}),
			(Qe = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			($e = ({ value: e, children: t }) => {
				let n = l(g),
					i = e ?? n.transition,
					a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
				return s(g.Provider, { value: a, children: t });
			}),
			(et = h.create(t)),
			(tt = {
				Desktop: `kyFKAMX03`,
				Phone: `QrmbrSoVs`,
				Tablet: `wPg_bfYE3`,
			}),
			(nt = ({ height: e, id: t, width: n, ...r }) => ({
				...r,
				variant: tt[r.variant] ?? r.variant ?? `kyFKAMX03`,
			})),
			(rt = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(J = x(
				c(function (e, n) {
					let r = u(null),
						i = n ?? r,
						a = p(),
						{ activeLocale: o, setLocale: c } = ie();
					N();
					let {
							style: l,
							className: f,
							layoutId: m,
							variant: g,
							...v
						} = nt(e),
						{
							baseVariant: y,
							classNames: b,
							clearLoadingGesture: x,
							gestureHandlers: S,
							gestureVariant: C,
							isLoading: w,
							setGestureState: E,
							setVariant: O,
							variants: k,
						} = ee({
							cycleOrder: Ye,
							defaultVariant: `kyFKAMX03`,
							ref: i,
							variant: g,
							variantClassNames: Ze,
						}),
						A = rt(e, k),
						te = D(Xe);
					return s(_, {
						id: m ?? a,
						children: s(et, {
							animate: k,
							initial: !1,
							children: s($e, {
								value: Qe,
								children: s(h.div, {
									...v,
									...S,
									className: D(te, `framer-1rmbsm8`, f, b),
									// "data-framer-name": `Desktop`,
									layoutDependency: A,
									layoutId: `kyFKAMX03`,
									ref: i,
									style: { ...l },
									...Ke(
										{
											QrmbrSoVs: {
												// "data-framer-name": `Phone`,
											},
											wPg_bfYE3: {
												// "data-framer-name": `Tablet`,
											},
										},
										y,
										C,
									),
									children: d(h.div, {
										className: `framer-1x2rraq`,
										
										layoutDependency: A,
										layoutId: `e8uHpMq9q`,
										children: [
											s(h.div, {
												className: `framer-giljom`,
												
												layoutDependency: A,
												layoutId: `FSDiyGkAR`,
											}),
											d(h.div, {
												className: `framer-1gsl0iv`,
												// "data-framer-name": `Big Heading`,
												layoutDependency: A,
												layoutId: `E2OOkwiCu`,
												children: [
													s(qe, {
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
																		x: -11,
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
																		x: -11,
																		y: 0,
																	},
																},
															],
														__framer__transformTrigger: `onScroll`,
														__fromCanvasComponent:
															!0,
														__perspectiveFX: !1,
														__smartComponentFX: !0,
														__targetOpacity: 1,
														children: s(t, {
															children: s(h.h1, {
																style: {
																	"--font-selector": `R0Y7U3BhY2UgTW9uby1yZWd1bGFy`,
																	"--framer-font-family": `"Space Mono", monospace`,
																	"--framer-font-size": `244px`,
																	"--framer-letter-spacing": `-0.06em`,
																	"--framer-line-height": `100%`,
																	"--framer-text-alignment": `left`,
																	"--framer-text-color": `var(--extracted-gdpscs, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																	"--framer-text-transform": `uppercase`,
																},
																children: `Contact`,
															}),
														}),
														className: `framer-1deab4i`,
														// "data-framer-name": `Fit Heading`,
														fonts: [
															`GF;Space Mono-regular`,
														],
														layoutDependency: A,
														layoutId: `trSl3wlNN`,
														style: {
															"--extracted-gdpscs": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
															"--framer-paragraph-spacing": `0px`,
														},
														verticalAlignment: `top`,
														viewBox: `0 0 957.64 244`,
														withExternalLayout: !0,
														...Ke(
															{
																QrmbrSoVs: {
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
																					x: -4,
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
																					x: -4,
																					y: 0,
																				},
																			},
																		],
																},
																wPg_bfYE3: {
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
															},
															y,
															C,
														),
													}),
													s(F, {
														children: s(T, {
															className: `framer-1b5no8l-container`,
															isAuthoredByUser:
																!0,
															layoutDependency: A,
															layoutId: `lDwBqaCq4-container`,
															nodeId: `lDwBqaCq4`,
															rendersWithMotion:
																!0,
															scopeId: `c2cHODrNG`,
															children: s(Ue, {
																borderRadius: 500,
																camX: 90,
																camY: 90,
																camZ: -67,
																cardColor: `rgb(235, 247, 255)`,
																cardHeight: 220,
																cardWidth: 220,
																count: 3,
																height: `100%`,
																id: `lDwBqaCq4`,
																images: [
																	`/assets/images/IzX1r5477UW6F4vikaIiAABdGmA.jpg`,
																	`/assets/images/A8LH07ZA2YBbI1jr4u0eeUKnWzQ.jpg`,
																	`/assets/images/ZOtqzD6rhDE2oD5RR5BQkEhs7E.jpg`,
																],
																imgRotateDeg:
																	-90,
																layoutId: `lDwBqaCq4`,
																offsetX: 4,
																offsetY: 117,
																perspective: 1350,
																speedSec: 17,
																staggerMs: 5700,
																style: {
																	height: `100%`,
																	width: `100%`,
																},
																width: `100%`,
																...Ke(
																	{
																		QrmbrSoVs:
																			{
																				cardHeight: 160,
																				cardWidth: 160,
																				offsetY: 77,
																			},
																		wPg_bfYE3:
																			{
																				cardHeight: 180,
																				cardWidth: 180,
																				offsetY: 77,
																			},
																	},
																	y,
																	C,
																),
															}),
														}),
													}),
												],
											}),
											s(h.div, {
												className: `framer-16xrj1i`,
												
												layoutDependency: A,
												layoutId: `xKE1YCJx3`,
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
					`.framer-5NvFE.framer-17809g8, .framer-5NvFE .framer-17809g8 { display: block; }`,
					`.framer-5NvFE.framer-1rmbsm8 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px 0px 5px 0px; position: relative; width: 1200px; }`,
					`.framer-5NvFE .framer-1x2rraq { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 0px 40px 0px 40px; position: relative; width: 100%; }`,
					`.framer-5NvFE .framer-giljom { flex: none; height: 90px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-5NvFE .framer-1gsl0iv { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 25px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: visible; padding: 0px; position: relative; width: 100%; z-index: 5; }`,
					`.framer-5NvFE .framer-1deab4i { -webkit-user-select: none; flex: 1 0 0px; height: auto; mix-blend-mode: difference; position: relative; user-select: none; white-space: pre; width: 1px; }`,
					`.framer-5NvFE .framer-1b5no8l-container { flex: none; height: 380px; position: relative; width: 400px; }`,
					`.framer-5NvFE .framer-16xrj1i { flex: none; height: 15px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-5NvFE.framer-v-14g39q0.framer-1rmbsm8 { width: 810px; }`,
					`.framer-5NvFE.framer-v-14g39q0 .framer-1x2rraq { padding: 0px 30px 0px 30px; }`,
					`.framer-5NvFE.framer-v-14g39q0 .framer-giljom, .framer-5NvFE.framer-v-xj2yk8 .framer-giljom { height: 85px; }`,
					`.framer-5NvFE.framer-v-14g39q0 .framer-1b5no8l-container { height: 320px; width: 320px; }`,
					`.framer-5NvFE.framer-v-xj2yk8.framer-1rmbsm8 { padding: 0px 0px 10px 0px; width: 390px; }`,
					`.framer-5NvFE.framer-v-xj2yk8 .framer-1x2rraq { padding: 0px 25px 0px 25px; }`,
					`.framer-5NvFE.framer-v-xj2yk8 .framer-1gsl0iv { flex-direction: column; gap: 20px; }`,
					`.framer-5NvFE.framer-v-xj2yk8 .framer-1deab4i { flex: none; order: 1; width: 100%; }`,
					`.framer-5NvFE.framer-v-xj2yk8 .framer-1b5no8l-container { height: 230px; order: 0; width: 320px; }`,
					`.framer-5NvFE.framer-v-xj2yk8 .framer-16xrj1i { height: 10px; }`,
				],
				`framer-5NvFE`,
			)),
			(it = J),
			(J.displayName = `Contact - Page Header`),
			(J.defaultProps = { height: 490, width: 1200 }),
			y(J, {
				variant: {
					options: [`kyFKAMX03`, `wPg_bfYE3`, `QrmbrSoVs`],
					optionTitles: [`Desktop`, `Tablet`, `Phone`],
					title: `Variant`,
					type: A.Enum,
				},
			}),
			M(
				J,
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
					...Je,
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function ot() {
	return typeof document > `u` ? !0 : !!document.querySelector(ut);
}
function st(e) {
	let {
			styleOptions: t,
			hoverOptions: n,
			iconOptions: r,
			trackingId: i,
			onClick: a,
		} = e,
		{
			backgroundColor: o,
			color: c,
			borderRadius: l,
			padding: u,
			paddingPerSide: f,
			paddingTop: p,
			paddingRight: m,
			paddingBottom: g,
			paddingLeft: _,
			gap: v,
		} = t,
		y = oe(),
		b = ot(),
		x;
	b &&
		(e.srcType === `URL` && (x = e.srcURL),
		e.srcType === `Upload` && (x = e.srcFile));
	let S = f ? `${p}px ${m}px ${g}px ${_}px` : `${u}px`,
		C = () => {
			if (!r) return;
			let e = { order: r.alignment === `start` ? 0 : 2, flexShrink: 0 };
			return r.type === `Custom` && r.image?.src
				? s(`img`, {
						style: e,
						alt:
							r.image?.alt && r.image.alt.length > 0
								? r.image.alt
								: `download icon`,
						src: r.image.src,
						width: r.size,
						height: r.size,
					})
				: s(`svg`, {
						style: e,
						xmlns: `http://www.w3.org/2000/svg`,
						width: r.size,
						height: r.size,
						fill: r.color,
						viewBox: `0 0 256 256`,
						children: s(`path`, {
							d: `M228 152v56a20 20 0 0 1-20 20H48a20 20 0 0 1-20-20v-56a12 12 0 0 1 24 0v52h152v-52a12 12 0 0 1 24 0Zm-108.49 8.49a12 12 0 0 0 17 0l40-40a12 12 0 0 0-17-17L140 123V40a12 12 0 0 0-24 0v83l-19.51-19.49a12 12 0 0 0-17 17Z`,
						}),
					});
		},
		w = () =>
			(e.srcType === `URL` && e.srcURL) ||
			(e.srcType === `Upload` && e.srcFile)
				? `pointer`
				: `auto`,
		T = b ? `Download File` : `Publish to Download`,
		E = (e) => {
			(i && y(i), a?.(e));
		};
	return d(h.a, {
		target: `_blank`,
		href: x,
		download: e.downloadName ?? `file.txt`,
		title: T,
		style: {
			gap: v,
			fontSize: 16,
			lineHeight: 1,
			fontFamily: `Inter`,
			fontWeight: 500,
			width: `max-content`,
			...e.style,
			...dt,
			...e.fontControl,
			padding: S,
			color: c,
			backgroundColor: o,
			borderRadius: l,
			userSelect: `none`,
			placeContent: ft(e.fontControl),
			whiteSpace: `nowrap`,
			cursor: w(),
		},
		whileHover: n,
		transition: n?.transition,
		onClick: E,
		children: [C(), e.text],
	});
}
var ct,
	lt,
	ut,
	dt,
	ft,
	pt = e(() => {
		(f(),
			k(),
			v(),
			(function (e) {
				((e.Default = `Default`), (e.Custom = `Custom`));
			})((ct ||= {})),
			(function (e) {
				((e.Upload = `Upload`), (e.URL = `URL`));
			})((lt ||= {})),
			(ut = `meta[name="framer-search-index"]`),
			(st.displayName = `Download`),
			y(st, {
				text: {
					title: `Text`,
					type: A.String,
					defaultValue: `Download`,
				},
				srcType: {
					type: A.Enum,
					displaySegmentedControl: !0,
					title: `Source`,
					options: [`Upload`, `URL`],
				},
				srcURL: {
					type: A.String,
					title: ` `,
					placeholder: `../example.pdf`,
					hidden: (e) => e.srcType === `Upload`,
				},
				srcFile: {
					type: A.File,
					title: ` `,
					allowedFileTypes: [`*`],
					hidden: (e) => e.srcType === `URL`,
				},
				fontControl: {
					type: A.Font,
					title: `Font`,
					controls: `extended`,
				},
				trackingId: {
					title: `Tracking`,
					type: A.TrackingId,
					placeholder: `ID`,
				},
				iconOptions: {
					type: A.Object,
					optional: !0,
					title: `Icon`,
					buttonTitle: `Size, Color`,
					controls: {
						type: {
							title: `Type`,
							type: A.Enum,
							options: Object.values(ct),
							optionTitles: Object.values(ct),
							displaySegmentedControl: !0,
						},
						color: {
							title: `Color`,
							type: A.Color,
							defaultValue: `#FFF`,
							hidden: (e) => e.type === `Custom`,
						},
						image: {
							title: `File`,
							type: A.ResponsiveImage,
							allowedFileTypes: [`jpg`, `png`, `svg`],
							hidden: (e) => e.type === `Default`,
						},
						size: {
							type: A.Number,
							displayStepper: !0,
							min: 5,
							defaultValue: 16,
							max: 250,
						},
						alignment: {
							title: `Align`,
							type: A.Enum,
							displaySegmentedControl: !0,
							options: [`start`, `end`],
							optionTitles: [`Start`, `End`],
						},
					},
				},
				styleOptions: {
					type: A.Object,
					title: `Styles`,
					buttonTitle: `Button, Font`,
					controls: {
						backgroundColor: {
							type: A.Color,
							title: `Fill`,
							defaultValue: `#111`,
						},
						color: { type: A.Color, defaultValue: `#FFF` },
						borderRadius: {
							type: A.Number,
							title: `Radius`,
							displayStepper: !0,
							defaultValue: 50,
						},
						padding: {
							title: `Padding`,
							type: A.FusedNumber,
							toggleKey: `paddingPerSide`,
							toggleTitles: [`Padding`, `Padding per side`],
							defaultValue: 10,
							valueKeys: [
								`paddingTop`,
								`paddingRight`,
								`paddingBottom`,
								`paddingLeft`,
							],
							valueLabels: [`T`, `R`, `B`, `L`],
							min: 0,
						},
						gap: {
							title: `Gap`,
							type: A.Number,
							displayStepper: !0,
							defaultValue: 5,
						},
					},
				},
				hoverOptions: {
					type: A.Object,
					title: `Hover`,
					buttonTitle: `Effect`,
					optional: !0,
					controls: {
						scale: {
							type: A.Number,
							title: `Scale`,
							min: 0,
							max: 10,
							displayStepper: !0,
							step: 0.01,
							defaultValue: 1.1,
						},
						backgroundColor: {
							type: A.Color,
							title: `Fill`,
							defaultValue: `#333`,
							optional: !0,
						},
						color: {
							type: A.Color,
							title: `Color`,
							defaultValue: `#FFF`,
							optional: !0,
						},
						transition: {
							type: A.Transition,
							title: `Transition`,
							defaultValue: {
								type: `spring`,
								stiffness: 400,
								damping: 30,
							},
						},
					},
				},
			}),
			(dt = {
				display: `flex`,
				placeItems: `center`,
				placeContent: `center`,
				textDecoration: `none`,
			}),
			(ft = (e) =>
				e?.textAlign
					? e.textAlign === `left`
						? `flex-start`
						: e.textAlign === `right`
							? `flex-end`
							: `center`
					: `left`));
	});
function mt({ progress: e }) {
	return d(`div`, {
		style: {
			position: `absolute`,
			inset: 0,
			display: `flex`,
			alignItems: `center`,
			justifyContent: `center`,
			background: `rgba(0,0,0,0)`,
			color: `#000`,
			zIndex: 10,
			fontSize: 10,
		},
		children: [
			d(`div`, {
				children: [
					s(`div`, {
						style: {
							width: 36,
							height: 36,
							borderRadius: `50%`,
							border: `3px solid rgba(0,0,0,.2)`,
							borderTopColor: `#000`,
							animation: `spin .8s linear infinite`,
						},
					}),
					d(`div`, {
						style: { marginTop: 8, textAlign: `center` },
						children: [Math.round(e), `%`],
					}),
				],
			}),
			s(`style`, {
				children: `@keyframes spin{to{transform:rotate(360deg)}}`,
			}),
		],
	});
}
function ht(e) {
	let t = { ...X, ...e },
		r = u(null),
		a = u(0),
		c = u(!1),
		[l, f] = n(!0),
		[p, m] = n(0),
		h = u(!!t.stopMotionInEditor);
	return (
		i(() => {
			h.current = !!t.stopMotionInEditor;
		}, [t.stopMotionInEditor]),
		i(() => {
			let e;
			return (
				(async () => {
					(f(!0), m(0));
					let n = r.current;
					if (!n) return;
					for (; n.firstChild; ) n.removeChild(n.firstChild);
					let i = n.clientWidth || 800,
						s = n.clientHeight || 800;
					(m(10), (Y ||= await import(Mt)));
					let { OrbitControls: l } = await import(Nt);
					m(20);
					let u = new Y.Scene(),
						d = new Y.PerspectiveCamera(55, i / s, 0.1, 100);
					d.position.set(0, 0, 3);
					let p = new Y.WebGLRenderer({
						antialias: !1,
						alpha: !0,
						powerPreference: `low-power`,
						premultipliedAlpha: !0,
					});
					(p.setPixelRatio(Math.min(o.devicePixelRatio || 1, Ft)),
						p.setSize(i, s),
						p.setClearColor(0, 0),
						n.appendChild(p.domElement));
					let g = new l(d, p.domElement);
					((g.enableDamping = !0),
						(g.enablePan = !1),
						(g.enableZoom = !!t.zoom));
					let _ = new Y.Group();
					(u.add(_), (zt ||= Et(64)), (Bt ||= Tt()));
					let v = [],
						y = [];
					(t.pins.forEach((e) => {
						let n = wt(
							_,
							e,
							Bt,
							null,
							t.labelColor,
							t.pinDotColor,
							t.pinPanelBgColor,
							t.pinPanelBgOpacity,
							t.pinPanelBorderColor,
							t.labelFont,
							t.labelFontSize,
							t.pinSize,
							t.haloScale,
						);
						(v.push(n), y.push(n.children[0]));
					}),
						m(35));
					let { polys: b, geoPolys: x } = await gt().catch(() => ({
						polys: null,
						geoPolys: null,
					}));
					if (!b || !b.length || !x) throw Error(`No land polygons`);
					let S = vt(b, x);
					((b = S.polys), (x = S.geoPolys));
					let C = kt(t.pointColor, t.pointSize, t.backOpacity, zt),
						w = kt(
							t.fillColor,
							Math.max(0.75 * t.pointSize, 0.003),
							t.backOpacity,
							zt,
							t.fillOpacity,
							t.killBack,
						),
						T,
						E,
						D = t.tileDeg,
						ee = Rt.get(D);
					if (ee) ((T = ee.edge), (E = ee.fill), m(65));
					else
						try {
							m(40);
							let e = await yt(b, Math.max(0.2, t.tileDeg));
							m(70);
							let n = await bt(x, t.tileDeg);
							((T = e),
								(E = At(n, Lt)),
								Rt.set(D, { edge: T, fill: E }),
								m(100));
						} catch {
							let { edge: e } = jt(b, Math.max(0.2, t.tileDeg));
							((T = e), (E = new Float32Array()), m(100));
						}
					let O = new Y.BufferGeometry();
					O.setAttribute(
						`position`,
						new Y.Float32BufferAttribute(T, 3),
					);
					let k = new Y.Points(O, C);
					_.add(k);
					let A = new Y.BufferGeometry();
					A.setAttribute(
						`position`,
						new Y.Float32BufferAttribute(E, 3),
					);
					let te = new Y.Points(A, w);
					_.add(te);
					let { CSS2DRenderer: j, CSS2DObject: ne } = await import(
						`./CSS2DRenderer.mjs`
					);
					function re() {
						try {
							if (o.top && o.top.document && o.top.document.body)
								return o.top.document;
						} catch {}
						return document;
					}
					let M = re(),
						N = M.createElement(`div`);
					(Object.assign(N.style, {
						position: `fixed`,
						inset: `0`,
						pointerEvents: `none`,
						zIndex: `2147483647`,
						overflow: `visible`,
					}),
						M.body.appendChild(N));
					let P = M.createElement(`div`);
					(Object.assign(P.style, {
						position: `absolute`,
						left: `0px`,
						top: `0px`,
						width: `0px`,
						height: `0px`,
						overflow: `visible`,
					}),
						N.appendChild(P));
					let F = new j();
					(P.appendChild(F.domElement),
						Object.assign(F.domElement.style, {
							position: `absolute`,
							left: `0`,
							top: `0`,
							pointerEvents: `none`,
							background: `transparent`,
						}));
					let I = () => {
						let e = p.domElement.getBoundingClientRect(),
							t = e.left,
							n = e.top;
						if (M !== document) {
							let e = o.frameElement;
							if (e) {
								let r = e.getBoundingClientRect();
								((t += r.left), (n += r.top));
							}
						}
						((P.style.left = `${t}px`),
							(P.style.top = `${n}px`),
							(P.style.width = `${e.width}px`),
							(P.style.height = `${e.height}px`),
							F.setSize(e.width, e.height));
					};
					I();
					let ie = null,
						oe = null;
					try {
						((ie = new ResizeObserver(I)),
							ie.observe(document.documentElement));
					} catch {}
					try {
						M !== document &&
							((oe = new ResizeObserver(I)),
							oe.observe(M.documentElement));
					} catch {}
					let L = () => I(),
						R = () => I();
					(o.addEventListener(`resize`, L, { passive: !0 }),
						o.addEventListener(`scroll`, R, { passive: !0 }));
					try {
						o.top?.addEventListener(`resize`, L, { passive: !0 });
					} catch {}
					try {
						o.top?.addEventListener(`scroll`, R, { passive: !0 });
					} catch {}
					let z = t.pins.some((e) => e.name || e.address || e.phone);
					z &&
						v.forEach((e) => {
							let n = e.__pin;
							if (!(n.name || n.address || n.phone)) return;
							let r = M.createElement(`div`),
								i = Dt(t.pinPanelBgColor, t.pinPanelBgOpacity),
								a = Ct(t.labelFont);
							((r.style.cssText = `max-width:280px;white-space:normal;overflow-wrap:anywhere;word-break:break-word;line-break:anywhere;hyphens:auto;padding:12px;border-radius:8px;background:${i};backdrop-filter:blur(6px);border:1px solid ${t.pinPanelBorderColor};color:${t.labelColor};pointer-events:none;font-family:${a};font-size:${t.labelFontSize}px;line-height:1.35;`),
								(r.innerHTML = `${n.name ? `<b>${n.name}</b><br/>` : ``}${n.address ? `${((e) => e.replace(/\n/g, `<br/>`))(n.address)}<br/>` : ``}${n.phone ?? ``}`));
							let o = new ne(r);
							(o.position.set(0, 0.08, 0),
								(o.visible = !!t.showLabels),
								(e.__labelObj = o),
								e.add(o));
						});
					let B = new Y.Raycaster(),
						V = new Y.Vector2();
					function se(e) {
						let t = p.domElement.getBoundingClientRect();
						((V.x = ((e.clientX - t.left) / t.width) * 2 - 1),
							(V.y = -((e.clientY - t.top) / t.height) * 2 + 1));
					}
					function ce() {
						v.forEach((e) => {
							let t = e.__labelObj;
							t && (t.visible = !1);
						});
					}
					let le = (e) => {
						if (!z || t.showLabels) return;
						(se(e), B.setFromCamera(V, d));
						let n = B.intersectObjects(y, !0);
						if (n.length) {
							let e = n[0].object.parent?.__labelObj;
							e && (ce(), (e.visible = !0));
						} else ce();
					};
					p.domElement.addEventListener(`click`, le);
					let H = !1,
						ue = !1,
						U = () => {
							p.domElement.style.cursor = ue
								? `pointer`
								: H
									? `grabbing`
									: `grab`;
						},
						de = () => {
							((H = !0), U());
						},
						fe = () => {
							((H = !1), U());
						};
					(g.addEventListener(`start`, de),
						g.addEventListener(`end`, fe));
					let W = () => {
							((H = !0), U());
						},
						G = () => {
							((H = !1), U());
						},
						pe = () => {
							((H = !1), U());
						};
					(p.domElement.addEventListener(`mousedown`, W),
						p.domElement.addEventListener(`mouseup`, G),
						p.domElement.addEventListener(`mouseleave`, pe),
						p.domElement.addEventListener(`touchstart`, W, {
							passive: !0,
						}),
						p.domElement.addEventListener(`touchend`, G, {
							passive: !0,
						}));
					function me(e) {
						let t = p.domElement.getBoundingClientRect();
						((V.x = ((e.clientX - t.left) / t.width) * 2 - 1),
							(V.y = -((e.clientY - t.top) / t.height) * 2 + 1),
							B.setFromCamera(V, d),
							(ue = B.intersectObjects(y, !0).length > 0),
							U());
					}
					(p.domElement.addEventListener(`mousemove`, me),
						U(),
						f(!1));
					let he = new Y.Clock(),
						ge = 1 / It,
						K = ge,
						q = () => {
							([k.material, te.material].forEach((e) => {
								let n = e?.userData?.shader;
								n &&
									(n.uniforms.uCamPos.value.copy(d.position),
									(n.uniforms.uBackOpacity.value =
										t.backOpacity));
							}),
								g.update(),
								p.render(u, d),
								F.render(u, d));
						},
						_e = () => {
							if (!c.current) return;
							let e = he.getDelta(),
								n =
									h.current && ae.current() === ae.canvas
										? 0
										: e;
							((K += n),
								t.autoRotateSpeed > 0 &&
									(_.rotation.y += t.autoRotateSpeed * n),
								!document.hidden && K >= ge && (q(), (K = 0)),
								(a.current = requestAnimationFrame(_e)));
						},
						ve = () => {
							c.current || ((c.current = !0), (K = ge), _e());
						},
						ye = () => {
							((c.current = !1), cancelAnimationFrame(a.current));
						},
						be = () => (document.hidden ? ye() : ve());
					document.addEventListener(`visibilitychange`, be);
					let xe = new IntersectionObserver(
						(e) => {
							e[0]?.isIntersecting ? ve() : ye();
						},
						{ root: null, threshold: 0 },
					);
					(xe.observe(n), q(), ve());
					let Se = () => {
						let e = n.clientWidth || 800,
							t = n.clientHeight || 800;
						((d.aspect = e / t),
							d.updateProjectionMatrix(),
							p.setPixelRatio(
								Math.min(o.devicePixelRatio || 1, Ft),
							),
							p.setSize(e, t),
							I(),
							(K = ge),
							q());
					};
					(o.addEventListener(`resize`, Se),
						(e = () => {
							(ye(),
								o.removeEventListener(`resize`, Se),
								document.removeEventListener(
									`visibilitychange`,
									be,
								),
								xe.disconnect());
							try {
								o.removeEventListener(`resize`, L);
							} catch {}
							try {
								o.removeEventListener(`scroll`, R);
							} catch {}
							try {
								o.top?.removeEventListener(`resize`, L);
							} catch {}
							try {
								o.top?.removeEventListener(`scroll`, R);
							} catch {}
							try {
								ie?.disconnect();
							} catch {}
							try {
								oe?.disconnect();
							} catch {}
							try {
								N.remove();
							} catch {}
							try {
								(p.domElement.removeEventListener(`click`, le),
									p.domElement.removeEventListener(
										`mousemove`,
										me,
									),
									p.domElement.removeEventListener(
										`mousedown`,
										W,
									),
									p.domElement.removeEventListener(
										`mouseup`,
										G,
									),
									p.domElement.removeEventListener(
										`mouseleave`,
										pe,
									),
									p.domElement.removeEventListener(
										`touchstart`,
										W,
									),
									p.domElement.removeEventListener(
										`touchend`,
										G,
									));
							} catch {}
							try {
								(g.removeEventListener(`start`, de),
									g.removeEventListener(`end`, fe));
							} catch {}
							(g.dispose(),
								Ot(u),
								p.dispose(),
								p.domElement.parentNode &&
									p.domElement.parentNode.removeChild(
										p.domElement,
									));
						}));
				})().catch(() => f(!1)),
				() => {
					try {
						e?.();
					} catch {}
				}
			);
		}, [
			e.autoRotateSpeed,
			e.pointSize,
			e.tileDeg,
			e.zoom,
			e.pointColor,
			e.labelColor,
			e.pinDotColor,
			e.pinPanelBgColor,
			e.pinPanelBgOpacity,
			e.pinPanelBorderColor,
			e.backOpacity,
			e.fillColor,
			e.fillOpacity,
			e.killBack,
			e.showLabels,
			e.pinSize,
			e.haloScale,
			JSON.stringify(e.pins),
			JSON.stringify(e.labelFont),
			e.labelFontSize,
		]),
		d(`div`, {
			style: {
				width: `100%`,
				height: `100%`,
				position: `relative`,
				overflow: `visible`,
			},
			children: [
				l && s(mt, { progress: p }),
				s(`div`, {
					ref: r,
					style: {
						width: `100%`,
						height: `100%`,
						position: `relative`,
						overflow: `visible`,
					},
				}),
			],
		})
	);
}
async function gt() {
	if (Vt && Ht) return { polys: Vt, geoPolys: Ht };
	let e = [
			`https://cdn.jsdelivr.net/npm/world-atlas@2/land-110m.json`,
			`https://unpkg.com/world-atlas@2/land-110m.json`,
		],
		t = null;
	for (let n of e)
		try {
			let e = await fetch(n, { cache: `force-cache` });
			if (e.ok) {
				t = await e.json();
				break;
			}
		} catch {}
	if (!t) throw Error(`land-110m.json unavailable`);
	let { feature: n } = await import(Pt),
		r = n(t, t.objects.land),
		i = [],
		a = [];
	return (
		(r.features || []).forEach((e) => {
			let t = e.geometry;
			t &&
				(t.type === `Polygon`
					? (i.push(t.coordinates.map((e, t) => _t(e, t))),
						a.push({ type: `Polygon`, coordinates: t.coordinates }))
					: t.type === `MultiPolygon` &&
						t.coordinates.forEach((e) => {
							(i.push(e.map((e, t) => _t(e, t))),
								a.push({ type: `Polygon`, coordinates: e }));
						}));
		}),
		(Vt = i),
		(Ht = a),
		{ polys: i, geoPolys: a }
	);
}
function _t(e, t) {
	if (t > 0) {
		let t = new Float32Array((e.length + 1) * 2),
			n = 0;
		for (let r = 0; r < e.length; r++)
			((t[n++] = e[r][0]), (t[n++] = e[r][1]));
		let r = e[e.length - 1];
		return ((t[n++] = r[0]), (t[n++] = r[1]), t.subarray(0, n));
	}
	let n = e.length,
		r = 3e3,
		i = n > r ? Math.floor(n / r) : 1,
		a = new Float32Array(((Math.ceil(n / i) + 1) | 0) * 2),
		o = 0;
	for (let t = 0; t < n; t += i) ((a[o++] = e[t][0]), (a[o++] = e[t][1]));
	let s = e[n - 1];
	return ((a[o++] = s[0]), (a[o++] = s[1]), a.subarray(0, o));
}
function vt(e, t) {
	let n = [],
		r = [];
	for (let i = 0; i < e.length; i++) {
		let a = e[i][0];
		if (!a || a.length < 4) continue;
		let o = xt(a),
			s = o.maxLon - o.minLon,
			c = (o.minLat + o.maxLat) / 2;
		(s > 300 && Math.abs(c) > 60) || (n.push(e[i]), r.push(t[i]));
	}
	return { polys: n, geoPolys: r };
}
function yt(e, t) {
	return new Promise((n, r) => {
		let i = e.map((e) => e.map((e) => new Float32Array(e))),
			a = new Blob(
				[
					`
            function wrapLon(lon){ return ((lon + 540) % 360) - 180; }
            function sampleEdgeFlat(ring, maxDegStep){
                var out = [];
                for (var i=0;i<ring.length-2;i+=2){
                    var lon1 = ring[i],   lat1 = ring[i+1];
                    var lon2 = ring[i+2], lat2 = ring[i+3];
                    var dLon = lon2 - lon1, lon2n = lon2;
                    if (Math.abs(dLon)>180){ lon2n += dLon>0?-360:360; dLon = lon2n - lon1; }
                    var dLat = lat2 - lat1;
                    var maxSpan = Math.max(Math.abs(dLon), Math.abs(dLat));
                    var steps = Math.max(1, Math.ceil(maxSpan / maxDegStep));
                    for (var s=0;s<=steps;s++){
                        var t = s/steps;
                        var lon = lon1 + dLon*t;
                        var lat = lat1 + dLat*t;
                        out.push(wrapLon(lon), lat);
                    }
                }
                return new Float32Array(out);
            }
            function lonLatToVec3(lon,lat,r){
                if (r === void 0) r = 1;
                var phi = (90 - lat) * Math.PI/180;
                var theta = (lon + 180) * Math.PI/180;
                return [-Math.sin(phi) * Math.cos(theta), Math.cos(phi), Math.sin(phi) * Math.sin(theta)];
            }
            onmessage = function(e){
                var densityDeg = e.data.densityDeg, polysIn = e.data.polysIn;
                var edgeOut = [];
                for (var p=0;p<polysIn.length;p++){
                    var poly = polysIn[p];
                    for (var r=0;r<poly.length;r++){
                        var sampled = sampleEdgeFlat(poly[r], Math.max(0.2, densityDeg));
                        for (var i=0;i<sampled.length;i+=2){
                            var v = lonLatToVec3(sampled[i], sampled[i+1], 1);
                            edgeOut.push(v[0],v[1],v[2]);
                        }
                    }
                }
                var arr = new Float32Array(edgeOut);
                postMessage({ ok:true, edge:arr }, [arr.buffer]);
            };
        `,
				],
				{ type: `application/javascript` },
			),
			o = URL.createObjectURL(a),
			s = new Worker(o);
		((s.onmessage = (e) => {
			(URL.revokeObjectURL(o), s.terminate());
			let t = e.data;
			t && t.ok ? n(t.edge) : r(Error(`worker failed`));
		}),
			(s.onerror = (e) => {
				(URL.revokeObjectURL(o), s.terminate(), r(e));
			}),
			s.postMessage({ densityDeg: t, polysIn: i }));
	});
}
function bt(e, t) {
	return new Promise((n, r) => {
		let i = JSON.parse(JSON.stringify(e)),
			a = new Blob(
				[
					`
var PI=Math.PI;
function wrap180(lon){ return ((lon+540)%360)-180; }
function vec3(lon,lat){
  var phi=(90-lat)*PI/180, th=(lon+180)*PI/180;
  return [-Math.sin(phi)*Math.cos(th), Math.cos(phi), Math.sin(phi)*Math.sin(th)];
}
function unwrapRing(ring, refLon){
  var out=new Array(ring.length), prev=null;
  for(var i=0;i<ring.length;i++){
    var L=ring[i][0], A=ring[i][1];
    var d=L-refLon;
    if(d>180) L-=360; else if(d<-180) L+=360;
    if(prev){
      var step=L-prev[0];
      if(step>180) L-=360; else if(step<-180) L+=360;
    }
    out[i]=[L,A]; prev=out[i];
  }
  return out;
}
function pointInRing(pt, ring){
  var x=pt[0], y=pt[1], inside=false, n=ring.length;
  for(var i=0,j=n-1;i<n;j=i++){
    var xi=ring[i][0], yi=ring[i][1];
    var xj=ring[j][0], yj=ring[j][1];
    var denom=yj-yi; if(denom===0) continue;
    var inter=((yi>y)!==(yj>y)) && (x < (xj-xi)*(y-yi)/denom + xi);
    if(inter) inside=!inside;
  }
  return inside;
}
function containsUnwrapped(poly, refLon, lon, lat){
  var rings=poly.coordinates; if(!rings||!rings.length) return false;
  var r0=unwrapRing(rings[0], refLon);
  var pt=[lon,lat];
  if(!pointInRing(pt, r0)) return false;
  for(var k=1;k<rings.length;k++){
    var rk=unwrapRing(rings[k], refLon);
    if(pointInRing(pt, rk)) return false;
  }
  return true;
}
function bbox(r){
  var minLon=1e9,maxLon=-1e9,minLat=90,maxLat=-90;
  for(var i=0;i<r.length;i++){
    var L=r[i][0], A=r[i][1];
    if(L<minLon)minLon=L; if(L>maxLon)maxLon=L;
    if(A<minLat)minLat=A; if(A>maxLat)maxLat=A;
  }
  return {minLon,maxLon,minLat,maxLat};
}

onmessage=function(e){
  var geos=e.data.geos, step=Math.max(0.2, Math.min(6.0, e.data.tileDeg||1.0));
  var out=[];
  for(var p=0;p<geos.length;p++){
    var r0 = unwrapRing(geos[p].coordinates[0], 0);
    var bb = bbox(r0);
    var refLon = (bb.minLon+bb.maxLon)/2;
    r0 = unwrapRing(geos[p].coordinates[0], refLon);
    bb = bbox(r0);

    var latStart = Math.floor((bb.minLat-1)/step)*step;
    var latEnd   = Math.ceil((bb.maxLat+1)/step)*step;

    for(var lat=latStart; lat<=latEnd; lat+=step){
      var odd = Math.round(Math.abs(lat/step))%2;
      var lonStart = Math.floor((bb.minLon-1)/step)*step + (odd? step*0.5 : 0);
      var lonEnd   = Math.ceil((bb.maxLon+1)/step)*step;
      for(var lon=lonStart; lon<=lonEnd; lon+=step){
        var llLon = lon, llLat = Math.max(-90, Math.min(90, lat));
        if(containsUnwrapped(geos[p], refLon, llLon, llLat)){
          var v = vec3(wrap180(llLon), llLat);
          out.push(v[0],v[1],v[2]);
        }
      }
    }
  }
  var arr=new Float32Array(out);
  postMessage({ok:true, fill:arr}, [arr.buffer]);
};
`,
				],
				{ type: `application/javascript` },
			),
			o = URL.createObjectURL(a),
			s = new Worker(o);
		((s.onmessage = (e) => {
			(URL.revokeObjectURL(o), s.terminate());
			let t = e.data;
			t && t.ok ? n(t.fill) : r(Error(`worker failed`));
		}),
			(s.onerror = (e) => {
				(URL.revokeObjectURL(o), s.terminate(), r(e));
			}),
			s.postMessage({ geos: i, tileDeg: t }));
	});
}
function xt(e) {
	let t = 180,
		n = -180,
		r = 90,
		i = -90;
	for (let a = 0; a < e.length; a += 2) {
		let o = e[a],
			s = e[a + 1];
		(o < t && (t = o),
			o > n && (n = o),
			s < r && (r = s),
			s > i && (i = s));
	}
	return { minLon: t, maxLon: n, minLat: r, maxLat: i };
}
function St(e, t, n = 1) {
	let r = Y.MathUtils.degToRad(90 - t),
		i = Y.MathUtils.degToRad(e + 180);
	return new Y.Vector3(
		-n * Math.sin(r) * Math.cos(i),
		n * Math.cos(r),
		n * Math.sin(r) * Math.sin(i),
	);
}
function Ct(e, t = `system-ui,-apple-system,Segoe UI,Roboto,sans-serif`) {
	return e ? (typeof e == `string` ? e : e.family || e.fontFamily || t) : t;
}
function wt(e, t, n, r, i, a, o, s, c, l, u, d, f) {
	let p = St(t.lon, t.lat, 1),
		m = new Y.Group();
	((m.__pin = t), m.position.copy(p));
	let h = new Y.Mesh(
		new Y.SphereGeometry(d, 16, 16),
		new Y.MeshBasicMaterial({ color: new Y.Color(a) }),
	);
	m.add(h);
	let g = new Y.Sprite(
			new Y.SpriteMaterial({
				color: new Y.Color(a),
				map: n,
				transparent: !0,
				blending: Y.AdditiveBlending,
				depthWrite: !1,
			}),
		),
		_ = d * f;
	if (
		(g.scale.set(_, _, _), m.add(g), (t.name || t.address || t.phone) && r)
	) {
		let e = document.createElement(`div`),
			n = Dt(o, s),
			a = Ct(l);
		((e.style.cssText = `width:280px;max-width:280px;white-space:normal;overflow-wrap:anywhere;word-break:break-word;line-break:anywhere;hyphens:auto;padding:12px;border-radius:8px;background:${n};backdrop-filter:blur(10px);border:1px solid ${c};color:${i};pointer-events:none;font-family:${a};font-size:${u}px;line-height:1.35;`),
			(e.innerHTML = `${t.name ? `<b>${t.name}</b><br/>` : ``}${t.address ? `${((e) => e.replace(/\n/g, `<br/>`))(t.address)}<br/>` : ``}${t.phone ?? ``}`));
		let d = new r(e);
		(d.position.set(0, 0.08, 0), (m.__labelObj = d), m.add(d));
	}
	return (e.add(m), m);
}
function Tt(e = 128) {
	let t = document.createElement(`canvas`);
	t.width = t.height = e;
	let n = t.getContext(`2d`),
		r = n.createRadialGradient(e / 2, e / 2, 0, e / 2, e / 2, e / 2);
	(r.addColorStop(0, `rgba(255,255,255,0.25)`),
		r.addColorStop(0.35, `rgba(255,255,255,0.1)`),
		r.addColorStop(1, `rgba(255,255,255,0)`),
		(n.fillStyle = r),
		n.fillRect(0, 0, e, e));
	let i = new Y.CanvasTexture(t);
	return ((i.minFilter = Y.LinearFilter), (i.magFilter = Y.LinearFilter), i);
}
function Et(e = 64) {
	let t = document.createElement(`canvas`);
	t.width = t.height = e;
	let n = t.getContext(`2d`);
	n.clearRect(0, 0, e, e);
	let r = e / 2,
		i = n.createRadialGradient(r, r, r * 0.82, r, r, r);
	(i.addColorStop(0, `rgba(255,255,255,1)`),
		i.addColorStop(1, `rgba(255,255,255,0)`),
		(n.fillStyle = i),
		n.beginPath(),
		n.arc(r, r, r - 0.5, 0, Math.PI * 2),
		n.closePath(),
		n.fill());
	let a = new Y.CanvasTexture(t);
	return (
		(a.minFilter = Y.LinearFilter),
		(a.magFilter = Y.LinearFilter),
		(a.anisotropy = 1),
		(a.generateMipmaps = !1),
		a
	);
}
function Dt(e, t = 1) {
	try {
		if (/^rgba?\(/i.test(e))
			return e.replace(/rgba?\(([^)]+)\)/i, (e, n) => {
				let [r, i, a] = n.split(`,`).map((e) => parseFloat(e.trim()));
				return `rgba(${r},${i},${a},${Math.max(0, Math.min(1, t))})`;
			});
		let n = e.replace(`#`, ``),
			r =
				n.length === 3
					? n
							.split(``)
							.map((e) => e + e)
							.join(``)
					: n,
			i = parseInt(r, 16);
		return `rgba(${(i >> 16) & 255},${(i >> 8) & 255},${i & 255},${Math.max(0, Math.min(1, t))})`;
	} catch {
		return `rgba(255,255,255,${t})`;
	}
}
function Ot(e) {
	e.traverse((e) => {
		(e.geometry && e.geometry.dispose(),
			e.material &&
				(Array.isArray(e.material)
					? e.material.forEach((e) => e.dispose())
					: e.material.dispose()));
	});
}
function kt(e, t, n, r, i, a) {
	let o = new Y.PointsMaterial({
		color: new Y.Color(e),
		size: t,
		sizeAttenuation: !0,
		depthWrite: !1,
		transparent: !0,
		map: r,
		alphaTest: 0,
		opacity: i ?? 1,
	});
	return (
		(o.toneMapped = !1),
		(o.precision = `mediump`),
		(o.onBeforeCompile = (e) => {
			((e.uniforms.uCamPos = { value: new Y.Vector3() }),
				(e.uniforms.uBackOpacity = { value: n }),
				(e.defines = e.defines || {}),
				a && (e.defines.KILL_BACK = 1),
				(e.vertexShader = e.vertexShader
					.replace(
						`#include <common>`,
						`#include <common>
 varying vec3 vWorldPos;
 uniform vec3 uCamPos;`,
					)
					.replace(
						`#include <begin_vertex>`,
						`#include <begin_vertex>
 vWorldPos = (modelMatrix * vec4(transformed,1.0)).xyz;`,
					)
					.replace(
						`#include <project_vertex>`,
						`#include <project_vertex>
                float ndv = dot(normalize(uCamPos - vWorldPos), normalize(vWorldPos));
                gl_PointSize *= mix(0.6, 1.0, smoothstep(0.0, 0.25, ndv));`,
					)),
				(e.fragmentShader = e.fragmentShader
					.replace(
						`#include <common>`,
						`#include <common>
 varying vec3 vWorldPos; uniform vec3 uCamPos; uniform float uBackOpacity;`,
					)
					.replace(
						`#include <output_fragment>`,
						`{
                vec3 viewDir = normalize(uCamPos - vWorldPos);
                vec3 normalDir = normalize(vWorldPos);
                float nd = dot(viewDir, normalDir);
                #ifdef KILL_BACK
                    if (nd <= 0.0) discard;
                #else
                    diffuseColor.a *= mix(uBackOpacity, 1.0, smoothstep(0.0, 0.25, nd));
                #endif
            }
            #include <output_fragment>`,
					)),
				(o.userData.shader = e));
		}),
		o
	);
}
function At(e, t) {
	let n = e.length / 3;
	if (n <= t) return e;
	let r = new Uint32Array(n);
	for (let e = 0; e < n; e++) r[e] = e;
	for (let e = n - 1; e > 0; e--) {
		let t = (Math.random() * (e + 1)) | 0,
			n = r[e];
		((r[e] = r[t]), (r[t] = n));
	}
	let i = new Float32Array(t * 3);
	for (let n = 0; n < t; n++) {
		let t = r[n] * 3;
		((i[n * 3 + 0] = e[t + 0]),
			(i[n * 3 + 1] = e[t + 1]),
			(i[n * 3 + 2] = e[t + 2]));
	}
	return i;
}
function jt(e, t) {
	let n = [];
	for (let a of e)
		for (let e of a) {
			let a = r(e, Math.max(0.2, t));
			for (let e = 0; e < a.length; e += 2) {
				let t = i(a[e], a[e + 1], 1);
				n.push(t[0], t[1], t[2]);
			}
		}
	return { edge: new Float32Array(n) };
	function r(e, t) {
		let n = [];
		for (let r = 0; r < e.length - 2; r += 2) {
			let i = e[r],
				a = e[r + 1],
				o = e[r + 2],
				s = e[r + 3],
				c = o - i;
			Math.abs(c) > 180 && ((o += c > 0 ? -360 : 360), (c = o - i));
			let l = s - a,
				u = Math.max(Math.abs(c), Math.abs(l)),
				d = Math.max(1, Math.ceil(u / t));
			for (let e = 0; e <= d; e++) {
				let t = e / d,
					r = i + c * t,
					o = a + l * t;
				n.push(((r + 540) % 360) - 180, o);
			}
		}
		return new Float32Array(n);
	}
	function i(e, t, n = 1) {
		let r = ((90 - t) * Math.PI) / 180;
		return [
			-Math.sin(r) * Math.cos(((e + 180) * Math.PI) / 180),
			Math.cos(r),
			Math.sin(r) * Math.sin(((e + 180) * Math.PI) / 180),
		];
	}
}
var Mt,
	Nt,
	Pt,
	Y,
	Ft,
	It,
	Lt,
	X,
	Rt,
	zt,
	Bt,
	Vt,
	Ht,
	Ut = e(() => {
		(m(),
			f(),
			a(),
			k(),
			(Mt = `https://esm.sh/three@0.157?bundle`),
			(Nt = `https://esm.sh/three@0.157/examples/jsm/controls/OrbitControls?bundle`),
			(Pt = `https://esm.sh/topojson-client@3?bundle`),
			(Ft = 2),
			(It = 50),
			(Lt = 12e4),
			(X = {
				autoRotateSpeed: 0.03,
				pointSize: 0.006,
				tileDeg: 1,
				zoom: !1,
				pins: [
					{
						lon: -118.2437,
						lat: 34.0522,
						name: `USA`,
						address: `Los Angeles, Beverly Hills 55a`,
						phone: `+1 213-555-0173`,
					},
					{
						lon: -0.1278,
						lat: 51.5074,
						name: `United Kingdom`,
						address: `London, Borton str. 88`,
						phone: `+44 20 7946 0958`,
					},
				],
				pointColor: `#7AE1FF`,
				labelColor: `#E7F8FF`,
				pinDotColor: `#7AE1FF`,
				pinPanelBgColor: `#0C2A33`,
				pinPanelBgOpacity: 0.75,
				pinPanelBorderColor: `#7AE1FF`,
				backOpacity: 0.06,
				fillColor: `#7AE1FF`,
				fillOpacity: 0.6,
				killBack: !0,
				showLabels: !0,
				pinSize: 0.012,
				haloScale: 10,
				labelFont: { family: `Inter`, style: `Regular` },
				labelFontSize: 12,
				stopMotionInEditor: !1,
			}),
			(Rt = new Map()),
			(Vt = null),
			(Ht = null),
			y(ht, {
				stopMotionInEditor: {
					type: A.Boolean,
					defaultValue: X.stopMotionInEditor,
					title: `Stop Motion in Editor`,
				},
				autoRotateSpeed: {
					type: A.Number,
					defaultValue: X.autoRotateSpeed,
					min: 0.01,
					max: 0.15,
					step: 0.01,
				},
				pointSize: {
					type: A.Number,
					defaultValue: X.pointSize,
					min: 0.002,
					max: 0.05,
					step: 0.001,
					title: `Land Dot Size`,
				},
				tileDeg: {
					type: A.Number,
					defaultValue: X.tileDeg,
					min: 0.2,
					max: 6,
					step: 0.1,
					title: `Tile Step (deg)`,
				},
				pointColor: {
					type: A.Color,
					defaultValue: X.pointColor,
					title: `Edge Color`,
				},
				labelFont: {
					type: A.Font,
					defaultValue: { family: `Inter`, style: `Regular` },
					title: `Label Font`,
				},
				labelFontSize: {
					type: A.Number,
					defaultValue: X.labelFontSize,
					min: 8,
					max: 32,
					step: 1,
					title: `Label Size`,
				},
				labelColor: {
					type: A.Color,
					defaultValue: X.labelColor,
					title: `Label Color`,
				},
				fillColor: {
					type: A.Color,
					defaultValue: X.fillColor,
					title: `Fill Color`,
				},
				fillOpacity: {
					type: A.Number,
					defaultValue: X.fillOpacity,
					min: 0,
					max: 1,
					step: 0.01,
					title: `Fill Opacity`,
				},
				killBack: {
					type: A.Boolean,
					defaultValue: X.killBack,
					title: `Hide Back Hemisphere`,
				},
				showLabels: {
					type: A.Boolean,
					defaultValue: X.showLabels,
					title: `Show Labels`,
				},
				pinSize: {
					type: A.Number,
					defaultValue: X.pinSize,
					min: 0.004,
					max: 0.1,
					step: 0.001,
					title: `Pin Size`,
				},
				haloScale: {
					type: A.Number,
					defaultValue: X.haloScale,
					min: 4,
					max: 20,
					step: 0.5,
					title: `Halo Scale`,
				},
				pinDotColor: {
					type: A.Color,
					defaultValue: X.pinDotColor,
					title: `Pin Color`,
				},
				pinPanelBgColor: {
					type: A.Color,
					defaultValue: X.pinPanelBgColor,
					title: `Panel BG`,
				},
				pinPanelBgOpacity: {
					type: A.Number,
					defaultValue: X.pinPanelBgOpacity,
					min: 0,
					max: 1,
					step: 0.01,
					title: `Panel BG Opacity`,
				},
				pinPanelBorderColor: {
					type: A.Color,
					defaultValue: X.pinPanelBorderColor,
					title: `Panel Border`,
				},
				zoom: { type: A.Boolean, defaultValue: X.zoom, title: `Zoom` },
				pins: {
					type: A.Array,
					propertyControl: {
						type: A.Object,
						controls: {
							lon: { type: A.Number, defaultValue: 0 },
							lat: { type: A.Number, defaultValue: 0 },
							name: { type: A.String },
							address: {
								type: A.String,
								defaultValue: ``,
								displayTextArea: !0,
								title: `Address`,
							},
							phone: { type: A.String },
						},
					},
					defaultValue: X.pins,
					title: `Pins`,
				},
			}));
	});
function Z(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Wt,
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
	sn,
	Q,
	cn,
	ln = e(() => {
		(f(),
			k(),
			v(),
			a(),
			pt(),
			Ut(),
			be(),
			Te(),
			z(),
			Me(),
			fe(),
			Ie(),
			Ee(),
			q(),
			K(),
			le(),
			G(),
			me(),
			Ve(),
			ge(),
			(Wt = C(st)),
			(Gt = E(T)),
			(Kt = C(W)),
			(qt = C(ht)),
			(Jt = C(Be)),
			(Yt = S(st)),
			(Xt = [`xBwdZ2302`, `FndEef2iH`, `scq1czhhz`]),
			(Zt = `framer-Huwj2`),
			(Qt = {
				FndEef2iH: `framer-v-1y13jz`,
				scq1czhhz: `framer-v-qhr7l`,
				xBwdZ2302: `framer-v-n4libs`,
			}),
			($t = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(en = (e, t) => {
				if (!(!e || typeof e != `object`)) return { ...e, alt: t };
			}),
			(tn = (e) =>
				Array.isArray(e) ? e.length > 0 : e != null && e !== ``),
			(nn = ({ value: e, children: t }) => {
				let n = l(g),
					i = e ?? n.transition,
					a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
				return s(g.Provider, { value: a, children: t });
			}),
			(rn = h.create(t)),
			(an = {
				Desktop: `xBwdZ2302`,
				Phone: `scq1czhhz`,
				Tablet: `FndEef2iH`,
			}),
			(on = ({
				address1: e,
				address2: t,
				bigText: n,
				email: r,
				emailLink: i,
				file: a,
				height: o,
				id: s,
				linkToCall1: c,
				linkToCall2: l,
				linkToCall3: u,
				linkToMap: d,
				linkToMap2: f,
				newTab: p,
				phoneNumber1: m,
				phoneNumber2: h,
				phoneNumber3: g,
				showEmail: _,
				showPhoneNumber2: v,
				sourceOfFile: y,
				spacerInLeft: b,
				textOnDownloadButton: x,
				width: S,
				...C
			}) => ({
				...C,
				cZliJr1fY: d ?? C.cZliJr1fY,
				G76JEsByQ: i ?? C.G76JEsByQ,
				gzrTq0KBM: y ?? C.gzrTq0KBM ?? `Upload`,
				j5QyC5_gf: g ?? C.j5QyC5_gf ?? `+1 (323) 825-9734`,
				kvSY2fkrc: v ?? C.kvSY2fkrc,
				mB6852oUG: m ?? C.mB6852oUG ?? `+44 20 3999 1245`,
				mBMR2ZX6p:
					e ??
					C.mBMR2ZX6p ??
					`United Kingdom 27 Whitfield Yard, Shoreditch, London E2 7NX`,
				mDq8aipvo: u ?? C.mDq8aipvo,
				MGASvD8yt: f ?? C.MGASvD8yt,
				p37vUF_Ml: p ?? C.p37vUF_Ml ?? !0,
				P5sqkr8ox: _ ?? C.P5sqkr8ox ?? !0,
				qnCRNahx1:
					a ??
					C.qnCRNahx1 ??
					`https://framerusercontent.com/assets/8KkWsOcMK9vtDV7xJsDGlD4KPeQ.docx`,
				T4tKkfOQ_:
					t ??
					C.T4tKkfOQ_ ??
					`USA
Los Angeles,
Beverly Hills 55a`,
				tmbcEcegZ: h ?? C.tmbcEcegZ ?? `+44 20 3999 1288`,
				variant: an[C.variant] ?? C.variant ?? `xBwdZ2302`,
				w7w6iyFCE: r ?? C.w7w6iyFCE ?? `project@mondragon.com`,
				wjXyHYkNN: b ?? C.wjXyHYkNN ?? !0,
				WqLKGMkXV: c ?? C.WqLKGMkXV,
				YB2qkx_Zo:
					n ??
					C.YB2qkx_Zo ??
					`      Get in touch. From first ideas to full projects, \u2028we’re here to support. Tell to our manager about the goal. We’ll reply with scope and timeline.`,
				yzKYJO4q7: x ?? C.yzKYJO4q7 ?? `DOWNLOAD BRIEF (DOCX)`,
				Zm6VxDJpA: l ?? C.Zm6VxDJpA,
			})),
			(sn = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Q = x(
				c(function (e, n) {
					let r = u(null),
						i = n ?? r,
						a = p(),
						{ activeLocale: o, setLocale: c } = ie(),
						l = N(),
						{
							style: f,
							className: m,
							layoutId: g,
							variant: v,
							YB2qkx_Zo: y,
							yzKYJO4q7: x,
							gzrTq0KBM: S,
							qnCRNahx1: C,
							w7w6iyFCE: w,
							G76JEsByQ: E,
							mBMR2ZX6p: O,
							cZliJr1fY: k,
							mB6852oUG: A,
							WqLKGMkXV: te,
							kvSY2fkrc: ne,
							tmbcEcegZ: re,
							Zm6VxDJpA: M,
							T4tKkfOQ_: P,
							MGASvD8yt: I,
							j5QyC5_gf: ae,
							mDq8aipvo: oe,
							P5sqkr8ox: L,
							wjXyHYkNN: R,
							p37vUF_Ml: z,
							...B
						} = on(e),
						{
							baseVariant: V,
							classNames: le,
							clearLoadingGesture: ue,
							gestureHandlers: fe,
							gestureVariant: G,
							isLoading: pe,
							setGestureState: me,
							setVariant: ge,
							variants: K,
						} = ee({
							cycleOrder: Xt,
							defaultVariant: `xBwdZ2302`,
							ref: i,
							variant: v,
							variantClassNames: Qt,
						}),
						q = sn(e, K),
						_e = D(Zt, je, Fe, ye, H, se, we, Ce, ze),
						ve = tn(P),
						be = tn(ae);
					return s(_, {
						id: g ?? a,
						children: s(rn, {
							animate: K,
							initial: !1,
							children: s(nn, {
								value: $t,
								children: s(h.div, {
									...B,
									...fe,
									className: D(_e, `framer-n4libs`, m, le),
									// "data-framer-name": `Desktop`,
									layoutDependency: q,
									layoutId: `xBwdZ2302`,
									ref: i,
									style: { ...f },
									...Z(
										{
											FndEef2iH: {
												// "data-framer-name": `Tablet`,
											},
											scq1czhhz: {
												// "data-framer-name": `Phone`,
											},
										},
										V,
										G,
									),
									children: s(h.div, {
										className: `framer-1kjhgix`,
										
										layoutDependency: q,
										layoutId: `siz1wrhtg`,
										children: d(h.div, {
											className: `framer-u2dxip`,
											
											layoutDependency: q,
											layoutId: `fNCaVjnan`,
											children: [
												d(h.div, {
													className: `framer-ymnuw5`,
													// "data-framer-name": `Left`,
													layoutDependency: q,
													layoutId: `KCcw0UlwH`,
													children: [
														s(F, {
															children: s(Gt, {
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
																				x: -21,
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
																				x: -21,
																				y: 0,
																			},
																		},
																	],
																__framer__transformTrigger: `onInView`,
																__perspectiveFX:
																	!1,
																__smartComponentFX:
																	!0,
																__targetOpacity: 1,
																className: `framer-1a159sl-container`,
																isAuthoredByUser:
																	!0,
																isModuleExternal:
																	!0,
																layoutDependency:
																	q,
																layoutId: `HZLhcnRst-container`,
																nodeId: `HZLhcnRst`,
																rendersWithMotion:
																	!0,
																scopeId: `xKgtfqhor`,
																...Z(
																	{
																		FndEef2iH:
																			{
																				__framer__styleTransformEffectEnabled:
																					void 0,
																			},
																		scq1czhhz:
																			{
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
																								x: -3,
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
																								x: -3,
																								y: 0,
																							},
																						},
																					],
																			},
																	},
																	V,
																	G,
																),
																children: s(
																	st,
																	{
																		fontControl:
																			{
																				fontFamily: `"Space Mono", monospace`,
																				fontSize: `17px`,
																				fontStyle: `normal`,
																				fontWeight: 400,
																				letterSpacing: `-0.01em`,
																				lineHeight: `1em`,
																			},
																		height: `100%`,
																		hoverOptions:
																			{
																				backgroundColor: `rgba(255, 255, 255, 0)`,
																				color: `var(--token-d7269bca-97f8-4000-b143-5284031cccb5, rgba(0, 0, 0, 0.4))`,
																				scale: 1,
																				transition:
																					{
																						delay: 0,
																						duration: 0.4,
																						ease: [
																							0.44,
																							0,
																							0.56,
																							1,
																						],
																						type: `tween`,
																					},
																			},
																		iconOptions:
																			{
																				alignment: `start`,
																				color: `rgb(255, 255, 255)`,
																				image: en(
																					{
																						pixelHeight: 134,
																						pixelWidth: 134,
																						src: `/assets/images/Vbq7Fp6o8KdtjpOPsc8wVaQWxYY.png`,
																					},
																					``,
																				),
																				size: 61,
																				type: `Custom`,
																			},
																		id: `HZLhcnRst`,
																		layoutId: `HZLhcnRst`,
																		srcFile:
																			C,
																		srcType:
																			S,
																		srcURL: ``,
																		styleOptions:
																			{
																				backgroundColor: `rgba(255, 255, 255, 0)`,
																				borderRadius: 8,
																				color: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																				gap: 15,
																				padding: 10,
																				paddingBottom: 10,
																				paddingLeft: 18,
																				paddingPerSide:
																					!0,
																				paddingRight: 18,
																				paddingTop: 10,
																			},
																		text: x,
																		width: `100%`,
																		...Z(
																			{
																				FndEef2iH:
																					{
																						hoverOptions:
																							void 0,
																						iconOptions:
																							{
																								alignment: `start`,
																								color: `rgb(255, 255, 255)`,
																								image: en(
																									{
																										pixelHeight: 134,
																										pixelWidth: 134,
																										src: `/assets/images/Vbq7Fp6o8KdtjpOPsc8wVaQWxYY.png`,
																									},
																									``,
																								),
																								size: 35,
																								type: `Custom`,
																							},
																						styleOptions:
																							{
																								backgroundColor: `rgba(255, 255, 255, 0)`,
																								borderRadius: 8,
																								color: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																								gap: 10,
																								padding: 10,
																								paddingBottom: 10,
																								paddingLeft: 0,
																								paddingPerSide:
																									!0,
																								paddingRight: 0,
																								paddingTop: 10,
																							},
																					},
																				scq1czhhz:
																					{
																						style: {
																							width: `100%`,
																						},
																						styleOptions:
																							{
																								backgroundColor: `rgba(255, 255, 255, 0)`,
																								borderRadius: 8,
																								color: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																								gap: 15,
																								padding: 10,
																								paddingBottom: 10,
																								paddingLeft: 0,
																								paddingPerSide:
																									!0,
																								paddingRight: 0,
																								paddingTop: 10,
																							},
																					},
																			},
																			V,
																			G,
																		),
																	},
																),
															}),
														}),
														L &&
															d(h.div, {
																className: `framer-1981dwa`,
																// "data-framer-name": `Email`,
																layoutDependency:
																	q,
																layoutId: `rIK15r1s_`,
																children: [
																	s(b, {
																		__fromCanvasComponent:
																			!0,
																		children:
																			s(
																				t,
																				{
																					children:
																						s(
																							h.p,
																							{
																								className: `framer-styles-preset-11kcybb`,
																								"data-styles-preset": `pPuowuywh`,
																								style: {
																									"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																								},
																								children: `Please tell us about your project and brief to:`,
																							},
																						),
																				},
																			),
																		className: `framer-1ln6nqs`,
																		// "data-framer-name": `Please tell us about your project and brief to:`,
																		fonts: [
																			`Inter`,
																		],
																		layoutDependency:
																			q,
																		layoutId: `PpdyHh9g8`,
																		style: {
																			"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																			"--framer-paragraph-spacing": `0px`,
																		},
																		verticalAlignment: `top`,
																		withExternalLayout:
																			!0,
																	}),
																	s(b, {
																		__fromCanvasComponent:
																			!0,
																		children:
																			s(
																				t,
																				{
																					children:
																						s(
																							h.h6,
																							{
																								className: `framer-styles-preset-f8hg8j`,
																								"data-styles-preset": `IGVKsj4vh`,
																								children:
																									s(
																										j,
																										{
																											href: E,
																											motionChild:
																												!0,
																											nodeId: `Hii5F75Up`,
																											openInNewTab:
																												!1,
																											relValues:
																												[],
																											scopeId: `xKgtfqhor`,
																											smoothScroll:
																												!1,
																											children:
																												s(
																													h.a,
																													{
																														className: `framer-styles-preset-mgrqd0`,
																														"data-styles-preset": `q7NcKTKUL`,
																														children: `project@mondragon.com`,
																													},
																												),
																										},
																									),
																							},
																						),
																				},
																			),
																		className: `framer-120nkbp`,
																		// "data-framer-name": `project@mondragon.com`,
																		fonts: [
																			`Inter`,
																		],
																		layoutDependency:
																			q,
																		layoutId: `Hii5F75Up`,
																		style: {
																			"--framer-paragraph-spacing": `0px`,
																		},
																		text: w,
																		verticalAlignment: `top`,
																		withExternalLayout:
																			!0,
																		...Z(
																			{
																				FndEef2iH:
																					{
																						children:
																							s(
																								t,
																								{
																									children:
																										s(
																											h.p,
																											{
																												className: `framer-styles-preset-5fkg2j`,
																												"data-styles-preset": `JFkcxmmKA`,
																												children:
																													s(
																														j,
																														{
																															href: E,
																															motionChild:
																																!0,
																															nodeId: `Hii5F75Up`,
																															openInNewTab:
																																!1,
																															relValues:
																																[],
																															scopeId: `xKgtfqhor`,
																															smoothScroll:
																																!1,
																															children:
																																s(
																																	h.a,
																																	{
																																		className: `framer-styles-preset-mgrqd0`,
																																		"data-styles-preset": `q7NcKTKUL`,
																																		children: `project@mondragon.com`,
																																	},
																																),
																														},
																													),
																											},
																										),
																								},
																							),
																					},
																				scq1czhhz:
																					{
																						children:
																							s(
																								t,
																								{
																									children:
																										s(
																											h.h6,
																											{
																												className: `framer-styles-preset-41ki07`,
																												"data-styles-preset": `hmRgK3K6v`,
																												children:
																													s(
																														j,
																														{
																															href: E,
																															motionChild:
																																!0,
																															nodeId: `Hii5F75Up`,
																															openInNewTab:
																																!1,
																															relValues:
																																[],
																															scopeId: `xKgtfqhor`,
																															smoothScroll:
																																!1,
																															children:
																																s(
																																	h.a,
																																	{
																																		className: `framer-styles-preset-mgrqd0`,
																																		"data-styles-preset": `q7NcKTKUL`,
																																		children: `project@mondragon.com`,
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
																			G,
																		),
																	}),
																],
															}),
														R &&
															s(h.div, {
																className: `framer-1r2uu7o`,
																
																layoutDependency:
																	q,
																layoutId: `BSGj4Pz7S`,
															}),
														d(h.div, {
															className: `framer-7218di`,
															// "data-framer-name": `Follow Us`,
															layoutDependency: q,
															layoutId: `JNBzV6cg6`,
															children: [
																s(b, {
																	__fromCanvasComponent:
																		!0,
																	children: s(
																		t,
																		{
																			children:
																				s(
																					h.h5,
																					{
																						className: `framer-styles-preset-h6j8it`,
																						"data-styles-preset": `dBxplyp6M`,
																						style: {
																							"--framer-text-color": `var(--extracted-1lwpl3i, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `Follow Us`,
																					},
																				),
																		},
																	),
																	className: `framer-1ca7e0f`,
																	fonts: [
																		`Inter`,
																	],
																	layoutDependency:
																		q,
																	layoutId: `FQT48g3e2`,
																	style: {
																		"--extracted-1lwpl3i": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																		"--framer-paragraph-spacing": `0px`,
																	},
																	variants: {
																		FndEef2iH:
																			{
																				"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			},
																		scq1czhhz:
																			{
																				"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			},
																	},
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																	...Z(
																		{
																			FndEef2iH:
																				{
																					children:
																						s(
																							t,
																							{
																								children:
																									s(
																										h.h6,
																										{
																											className: `framer-styles-preset-nkm6se`,
																											"data-styles-preset": `BaUGQBb6A`,
																											style: {
																												"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																											},
																											children: `Follow Us`,
																										},
																									),
																							},
																						),
																				},
																			scq1czhhz:
																				{
																					children:
																						s(
																							t,
																							{
																								children:
																									s(
																										h.h6,
																										{
																											className: `framer-styles-preset-nkm6se`,
																											"data-styles-preset": `BaUGQBb6A`,
																											style: {
																												"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																											},
																											children: `Follow Us`,
																										},
																									),
																							},
																						),
																				},
																		},
																		V,
																		G,
																	),
																}),
																s(F, {
																	height: 0,
																	width: `calc(max((max(min(${l?.width || `100vw`}, 1600px) - 80px, 1px) - 70px) / 8, 50px) * 3 - 40px)`,
																	y:
																		(l?.y ||
																			0) +
																		0 +
																		(((l?.height ||
																			200) -
																			0 -
																			1560) /
																			2 +
																			0 +
																			0) +
																		90 +
																		0 +
																		0 +
																		0 +
																		327.5 +
																		0 +
																		55,
																	...Z(
																		{
																			FndEef2iH:
																				{
																					width: `calc(max((max(min(${l?.width || `100vw`}, 1600px) - 60px, 1px) - 70px) / 8, 50px) * 3 - 30px)`,
																					y:
																						(l?.y ||
																							0) +
																						0 +
																						(((l?.height ||
																							200) -
																							0 -
																							1485) /
																							2 +
																							0 +
																							0) +
																						60 +
																						0 +
																						0 +
																						0 +
																						362.5 +
																						0 +
																						50,
																				},
																			scq1czhhz:
																				{
																					width: `calc(max((max(min(${l?.width || `100vw`}, 1600px) - 50px, 1px) - 30px) / 4, 50px) * 4 + 30px)`,
																					y:
																						(l?.y ||
																							0) +
																						0 +
																						(((l?.height ||
																							200) -
																							0 -
																							2102) /
																							2 +
																							0 +
																							0) +
																						40 +
																						0 +
																						0 +
																						0 +
																						240.5 +
																						0 +
																						50,
																				},
																		},
																		V,
																		G,
																	),
																	children: s(
																		T,
																		{
																			className: `framer-1or1wtu-container`,
																			layoutDependency:
																				q,
																			layoutId: `ZNLQgzJNE-container`,
																			nodeId: `ZNLQgzJNE`,
																			rendersWithMotion:
																				!0,
																			scopeId: `xKgtfqhor`,
																			children:
																				s(
																					W,
																					{
																						BpZuAjo8u:
																							U,
																						CH5TPWpzq: `https://x.com/`,
																						cUcZIlV8K: `15px 25px`,
																						height: `100%`,
																						id: `ZNLQgzJNE`,
																						JcnQOhlFO:
																							ce,
																						JgEcj5MZ2: `https://www.behance.net/`,
																						layoutId: `ZNLQgzJNE`,
																						mBKweeyKN: `https://contra.com/`,
																						pnjY4frPA:
																							de,
																						style: {
																							width: `100%`,
																						},
																						TF4NQ4wK2:
																							he,
																						variant: `p_hW1uUUY`,
																						width: `100%`,
																						wzwb8FVyv: `https://www.instagram.com/`,
																						...Z(
																							{
																								FndEef2iH:
																									{
																										cUcZIlV8K: `15px 15px`,
																									},
																								scq1czhhz:
																									{
																										cUcZIlV8K: `15px 15px`,
																									},
																							},
																							V,
																							G,
																						),
																					},
																				),
																		},
																	),
																}),
															],
														}),
														R &&
															s(h.div, {
																className: `framer-a96spj`,
																
																layoutDependency:
																	q,
																layoutId: `T3Pc9ToPh`,
															}),
														d(h.div, {
															className: `framer-1h6auop`,
															// "data-framer-name": `Address & Phone`,
															layoutDependency: q,
															layoutId: `PuFB8FBIu`,
															children: [
																s(F, {
																	children: s(
																		T,
																		{
																			className: `framer-e8k41j-container`,
																			isAuthoredByUser:
																				!0,
																			layoutDependency:
																				q,
																			layoutId: `IjthpUQzP-container`,
																			nodeId: `IjthpUQzP`,
																			rendersWithMotion:
																				!0,
																			scopeId: `xKgtfqhor`,
																			children:
																				s(
																					ht,
																					{
																						autoRotateSpeed: 0.1,
																						fillColor: `rgb(0, 0, 0)`,
																						fillOpacity: 0.6,
																						haloScale: 10,
																						height: `100%`,
																						id: `IjthpUQzP`,
																						killBack:
																							!0,
																						labelColor: `rgb(0, 0, 0)`,
																						labelFont:
																							{
																								fontFamily: `"Space Mono", monospace`,
																								fontStyle: `normal`,
																								fontWeight: 400,
																							},
																						labelFontSize: 15,
																						layoutId: `IjthpUQzP`,
																						pinDotColor: `rgb(43, 43, 43)`,
																						pinPanelBgColor: `rgb(255, 255, 255)`,
																						pinPanelBgOpacity: 0.53,
																						pinPanelBorderColor: `rgba(255, 255, 255, 0.61)`,
																						pins: [
																							{
																								address: `LOS ANGELES,
BEVERLY HILLS 55A`,
																								lat: 34.0522,
																								lon: -118.2437,
																								name: `USA`,
																								phone: `+1 213-555-0173`,
																							},
																							{
																								address: `27 WHITFIELD YARD,
SHOREDITCH,
LONDON E2 7NX`,
																								lat: 51.5074,
																								lon: -0.1278,
																								name: `UNITED KINGDOM`,
																								phone: `+44 20 7946 0958`,
																							},
																						],
																						pinSize: 0.081,
																						pointColor: `rgb(74, 74, 74)`,
																						pointSize: 0.012,
																						showLabels:
																							!1,
																						stopMotionInEditor:
																							!0,
																						style: {
																							height: `100%`,
																							width: `100%`,
																						},
																						tileDeg: 1,
																						width: `100%`,
																						zoom: !1,
																						...Z(
																							{
																								FndEef2iH:
																									{
																										pinSize: 0.1,
																									},
																								scq1czhhz:
																									{
																										pinSize: 0.1,
																									},
																							},
																							V,
																							G,
																						),
																					},
																				),
																		},
																	),
																}),
																d(h.div, {
																	className: `framer-1y15zn1`,
																	// "data-framer-name": `Address & Phone 1`,
																	layoutDependency:
																		q,
																	layoutId: `pnE5dELcn`,
																	children: [
																		s(b, {
																			__fromCanvasComponent:
																				!0,
																			children:
																				s(
																					t,
																					{
																						children:
																							d(
																								h.p,
																								{
																									style: {
																										"--font-selector": `R0Y7U3BhY2UgTW9uby1yZWd1bGFy`,
																										"--framer-font-family": `"Space Mono", monospace`,
																										"--framer-font-size": `20px`,
																										"--framer-letter-spacing": `0.01em`,
																										"--framer-line-height": `21px`,
																										"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																										"--framer-text-transform": `uppercase`,
																									},
																									children:
																										[
																											s(
																												j,
																												{
																													href: k,
																													motionChild:
																														!0,
																													nodeId: `Av3_3_RB2`,
																													openInNewTab:
																														z,
																													relValues:
																														[],
																													scopeId: `xKgtfqhor`,
																													smoothScroll:
																														!1,
																													children:
																														s(
																															h.a,
																															{
																																className: `framer-styles-preset-mgrqd0`,
																																"data-styles-preset": `q7NcKTKUL`,
																																children: `United Kingdom`,
																															},
																														),
																												},
																											),
																											s(
																												j,
																												{
																													href: k,
																													motionChild:
																														!0,
																													nodeId: `Av3_3_RB2`,
																													openInNewTab:
																														!0,
																													relValues:
																														[],
																													scopeId: `xKgtfqhor`,
																													smoothScroll:
																														!1,
																													children:
																														s(
																															h.a,
																															{
																																className: `framer-styles-preset-mgrqd0`,
																																"data-styles-preset": `q7NcKTKUL`,
																																children:
																																	s(
																																		h.br,
																																		{},
																																	),
																															},
																														),
																												},
																											),
																											s(
																												j,
																												{
																													href: k,
																													motionChild:
																														!0,
																													nodeId: `Av3_3_RB2`,
																													openInNewTab:
																														z,
																													relValues:
																														[],
																													scopeId: `xKgtfqhor`,
																													smoothScroll:
																														!1,
																													children:
																														s(
																															h.a,
																															{
																																className: `framer-styles-preset-mgrqd0`,
																																"data-styles-preset": `q7NcKTKUL`,
																																children: `27 Whitfield Yard, Shoreditch, London E2 7NX`,
																															},
																														),
																												},
																											),
																										],
																								},
																							),
																					},
																				),
																			className: `framer-d88h2l`,
																			// "data-framer-name": `27 Whitfield Yard, \u2028Shoreditch, London E2 7NX`,
																			fonts: [
																				`GF;Space Mono-regular`,
																			],
																			layoutDependency:
																				q,
																			layoutId: `Av3_3_RB2`,
																			style: {
																				"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																				"--framer-paragraph-spacing": `0px`,
																				"--variable-reference-p37vUF_Ml-xKgtfqhor":
																					z,
																			},
																			text: O,
																			verticalAlignment: `top`,
																			withExternalLayout:
																				!0,
																		}),
																		d(
																			h.div,
																			{
																				className: `framer-vj2voa`,
																				layoutDependency:
																					q,
																				layoutId: `nBN9z2TZk`,
																				children:
																					[
																						s(
																							b,
																							{
																								__fromCanvasComponent:
																									!0,
																								children:
																									s(
																										t,
																										{
																											children:
																												s(
																													h.p,
																													{
																														style: {
																															"--font-selector": `R0Y7U3BhY2UgTW9uby1yZWd1bGFy`,
																															"--framer-font-family": `"Space Mono", monospace`,
																															"--framer-font-size": `20px`,
																															"--framer-letter-spacing": `0.01em`,
																															"--framer-line-height": `21px`,
																															"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																															"--framer-text-transform": `uppercase`,
																														},
																														children:
																															s(
																																j,
																																{
																																	href: te,
																																	motionChild:
																																		!0,
																																	nodeId: `KpymBgdux`,
																																	openInNewTab:
																																		!1,
																																	relValues:
																																		[],
																																	scopeId: `xKgtfqhor`,
																																	smoothScroll:
																																		!1,
																																	children:
																																		s(
																																			h.a,
																																			{
																																				className: `framer-styles-preset-mgrqd0`,
																																				"data-styles-preset": `q7NcKTKUL`,
																																				children: `+44 20 3999 1245`,
																																			},
																																		),
																																},
																															),
																													},
																												),
																										},
																									),
																								className: `framer-v9xz0e`,
																								// "data-framer-name": `+44 20 3999 1245`,
																								fonts: [
																									`GF;Space Mono-regular`,
																								],
																								layoutDependency:
																									q,
																								layoutId: `KpymBgdux`,
																								style: {
																									"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																									"--framer-paragraph-spacing": `0px`,
																								},
																								text: A,
																								verticalAlignment: `top`,
																								withExternalLayout:
																									!0,
																							},
																						),
																						ne &&
																							s(
																								b,
																								{
																									__fromCanvasComponent:
																										!0,
																									children:
																										s(
																											t,
																											{
																												children:
																													s(
																														h.p,
																														{
																															style: {
																																"--font-selector": `R0Y7U3BhY2UgTW9uby1yZWd1bGFy`,
																																"--framer-font-family": `"Space Mono", monospace`,
																																"--framer-font-size": `20px`,
																																"--framer-letter-spacing": `0.01em`,
																																"--framer-line-height": `21px`,
																																"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																																"--framer-text-transform": `uppercase`,
																															},
																															children:
																																s(
																																	j,
																																	{
																																		href: M,
																																		motionChild:
																																			!0,
																																		nodeId: `K_55JXgCB`,
																																		openInNewTab:
																																			!1,
																																		relValues:
																																			[],
																																		scopeId: `xKgtfqhor`,
																																		smoothScroll:
																																			!1,
																																		children:
																																			s(
																																				h.a,
																																				{
																																					className: `framer-styles-preset-mgrqd0`,
																																					"data-styles-preset": `q7NcKTKUL`,
																																					children: `+44 20 3999 1288`,
																																				},
																																			),
																																	},
																																),
																														},
																													),
																											},
																										),
																									className: `framer-crijmw`,
																									// "data-framer-name": `+44 20 3999 1245`,
																									fonts: [
																										`GF;Space Mono-regular`,
																									],
																									layoutDependency:
																										q,
																									layoutId: `K_55JXgCB`,
																									style: {
																										"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																										"--framer-paragraph-spacing": `0px`,
																									},
																									text: re,
																									verticalAlignment: `top`,
																									withExternalLayout:
																										!0,
																								},
																							),
																					],
																			},
																		),
																	],
																}),
																d(h.div, {
																	className: `framer-158hnfg`,
																	// "data-framer-name": `Address & Phone 2`,
																	layoutDependency:
																		q,
																	layoutId: `QXFd8Ismn`,
																	children: [
																		ve &&
																			s(
																				b,
																				{
																					__fromCanvasComponent:
																						!0,
																					children:
																						s(
																							t,
																							{
																								children:
																									d(
																										h.p,
																										{
																											style: {
																												"--font-selector": `R0Y7U3BhY2UgTW9uby1yZWd1bGFy`,
																												"--framer-font-family": `"Space Mono", monospace`,
																												"--framer-font-size": `20px`,
																												"--framer-letter-spacing": `0.01em`,
																												"--framer-line-height": `21px`,
																												"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																												"--framer-text-transform": `uppercase`,
																											},
																											children:
																												[
																													s(
																														j,
																														{
																															href: I,
																															motionChild:
																																!0,
																															nodeId: `wNIMCpJ3g`,
																															openInNewTab:
																																z,
																															relValues:
																																[],
																															scopeId: `xKgtfqhor`,
																															smoothScroll:
																																!1,
																															children:
																																s(
																																	h.a,
																																	{
																																		className: `framer-styles-preset-mgrqd0`,
																																		"data-styles-preset": `q7NcKTKUL`,
																																		children: `USA`,
																																	},
																																),
																														},
																													),
																													s(
																														j,
																														{
																															href: I,
																															motionChild:
																																!0,
																															nodeId: `wNIMCpJ3g`,
																															openInNewTab:
																																!0,
																															relValues:
																																[],
																															scopeId: `xKgtfqhor`,
																															smoothScroll:
																																!1,
																															children:
																																s(
																																	h.a,
																																	{
																																		className: `framer-styles-preset-mgrqd0`,
																																		"data-styles-preset": `q7NcKTKUL`,
																																		children:
																																			s(
																																				h.br,
																																				{},
																																			),
																																	},
																																),
																														},
																													),
																													s(
																														j,
																														{
																															href: I,
																															motionChild:
																																!0,
																															nodeId: `wNIMCpJ3g`,
																															openInNewTab:
																																z,
																															relValues:
																																[],
																															scopeId: `xKgtfqhor`,
																															smoothScroll:
																																!1,
																															children:
																																s(
																																	h.a,
																																	{
																																		className: `framer-styles-preset-mgrqd0`,
																																		"data-styles-preset": `q7NcKTKUL`,
																																		children: `Los Angeles,`,
																																	},
																																),
																														},
																													),
																													s(
																														j,
																														{
																															href: I,
																															motionChild:
																																!0,
																															nodeId: `wNIMCpJ3g`,
																															openInNewTab:
																																!0,
																															relValues:
																																[],
																															scopeId: `xKgtfqhor`,
																															smoothScroll:
																																!1,
																															children:
																																s(
																																	h.a,
																																	{
																																		className: `framer-styles-preset-mgrqd0`,
																																		"data-styles-preset": `q7NcKTKUL`,
																																		children:
																																			s(
																																				h.br,
																																				{},
																																			),
																																	},
																																),
																														},
																													),
																													s(
																														j,
																														{
																															href: I,
																															motionChild:
																																!0,
																															nodeId: `wNIMCpJ3g`,
																															openInNewTab:
																																z,
																															relValues:
																																[],
																															scopeId: `xKgtfqhor`,
																															smoothScroll:
																																!1,
																															children:
																																s(
																																	h.a,
																																	{
																																		className: `framer-styles-preset-mgrqd0`,
																																		"data-styles-preset": `q7NcKTKUL`,
																																		children: `Beverly Hills 55a`,
																																	},
																																),
																														},
																													),
																												],
																										},
																									),
																							},
																						),
																					className: `framer-tes8qb`,
																					// "data-framer-name": `27 Whitfield Yard, \u2028Shoreditch, London E2 7NX`,
																					fonts: [
																						`GF;Space Mono-regular`,
																					],
																					layoutDependency:
																						q,
																					layoutId: `wNIMCpJ3g`,
																					style: {
																						"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																						"--framer-paragraph-spacing": `0px`,
																						"--variable-reference-p37vUF_Ml-xKgtfqhor":
																							z,
																					},
																					text: P,
																					verticalAlignment: `top`,
																					withExternalLayout:
																						!0,
																				},
																			),
																		s(
																			h.div,
																			{
																				className: `framer-1wf50o2`,
																				layoutDependency:
																					q,
																				layoutId: `WR1CVmfl9`,
																				children:
																					be &&
																					s(
																						b,
																						{
																							__fromCanvasComponent:
																								!0,
																							children:
																								s(
																									t,
																									{
																										children:
																											s(
																												h.p,
																												{
																													style: {
																														"--font-selector": `R0Y7U3BhY2UgTW9uby1yZWd1bGFy`,
																														"--framer-font-family": `"Space Mono", monospace`,
																														"--framer-font-size": `20px`,
																														"--framer-letter-spacing": `0.01em`,
																														"--framer-line-height": `21px`,
																														"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																														"--framer-text-transform": `uppercase`,
																													},
																													children:
																														s(
																															j,
																															{
																																href: oe,
																																motionChild:
																																	!0,
																																nodeId: `pvTHW5aiM`,
																																openInNewTab:
																																	!1,
																																relValues:
																																	[],
																																scopeId: `xKgtfqhor`,
																																smoothScroll:
																																	!1,
																																children:
																																	s(
																																		h.a,
																																		{
																																			className: `framer-styles-preset-mgrqd0`,
																																			"data-styles-preset": `q7NcKTKUL`,
																																			children: `+1 (323) 825-9734`,
																																		},
																																	),
																															},
																														),
																												},
																											),
																									},
																								),
																							className: `framer-1mbb2yv`,
																							fonts: [
																								`GF;Space Mono-regular`,
																							],
																							layoutDependency:
																								q,
																							layoutId: `pvTHW5aiM`,
																							style: {
																								"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																								"--framer-paragraph-spacing": `0px`,
																							},
																							text: ae,
																							verticalAlignment: `top`,
																							withExternalLayout:
																								!0,
																						},
																					),
																			},
																		),
																	],
																}),
															],
														}),
													],
												}),
												d(h.div, {
													className: `framer-n8fmaa`,
													// "data-framer-name": `Right`,
													layoutDependency: q,
													layoutId: `WawPk0DLE`,
													children: [
														d(h.div, {
															className: `framer-18xbwe5`,
															// "data-framer-name": `Text`,
															layoutDependency: q,
															layoutId: `GhHzhLdrw`,
															children: [
																s(b, {
																	__fromCanvasComponent:
																		!0,
																	children: s(
																		t,
																		{
																			children:
																				s(
																					h.h4,
																					{
																						className: `framer-styles-preset-1ri87jd`,
																						"data-styles-preset": `LuOKrK4j8`,
																						style: {
																							"--framer-text-alignment": `left`,
																							"--framer-text-color": `var(--extracted-1eung3n, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `       Get in touch. From first ideas to full projects, \u2028\u2028we’re here to support.`,
																					},
																				),
																		},
																	),
																	className: `framer-d9oetm`,
																	fonts: [
																		`Inter`,
																	],
																	layoutDependency:
																		q,
																	layoutId: `aO3j81PES`,
																	style: {
																		"--extracted-1eung3n": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																		"--framer-paragraph-spacing": `0px`,
																	},
																	text: y,
																	variants: {
																		FndEef2iH:
																			{
																				"--extracted-1lwpl3i": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			},
																		scq1czhhz:
																			{
																				"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			},
																	},
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																	...Z(
																		{
																			FndEef2iH:
																				{
																					children:
																						s(
																							t,
																							{
																								children:
																									s(
																										h.h5,
																										{
																											className: `framer-styles-preset-h6j8it`,
																											"data-styles-preset": `dBxplyp6M`,
																											style: {
																												"--framer-text-alignment": `left`,
																												"--framer-text-color": `var(--extracted-1lwpl3i, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																											},
																											children: `       Get in touch. From first ideas to full projects, \u2028\u2028we’re here to support.`,
																										},
																									),
																							},
																						),
																				},
																			scq1czhhz:
																				{
																					children:
																						s(
																							t,
																							{
																								children:
																									s(
																										h.h6,
																										{
																											className: `framer-styles-preset-nkm6se`,
																											"data-styles-preset": `BaUGQBb6A`,
																											style: {
																												"--framer-text-alignment": `left`,
																												"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																											},
																											children: `       Get in touch. From first ideas to full projects, \u2028\u2028we’re here to support.`,
																										},
																									),
																							},
																						),
																				},
																		},
																		V,
																		G,
																	),
																}),
																s(b, {
																	__fromCanvasComponent:
																		!0,
																	children: s(
																		t,
																		{
																			children:
																				s(
																					h.h6,
																					{
																						className: `framer-styles-preset-nkm6se`,
																						"data-styles-preset": `BaUGQBb6A`,
																						style: {
																							"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `[01 CCC]`,
																					},
																				),
																		},
																	),
																	className: `framer-168m9mv`,
																	// "data-framer-name": `[01 DDD]`,
																	fonts: [
																		`Inter`,
																	],
																	layoutDependency:
																		q,
																	layoutId: `j0HUPFzUI`,
																	style: {
																		"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																		"--framer-paragraph-spacing": `0px`,
																	},
																	verticalAlignment: `top`,
																	withExternalLayout:
																		!0,
																	...Z(
																		{
																			scq1czhhz:
																				{
																					children:
																						s(
																							t,
																							{
																								children:
																									s(
																										h.h6,
																										{
																											className: `framer-styles-preset-f8hg8j`,
																											"data-styles-preset": `IGVKsj4vh`,
																											style: {
																												"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																											},
																											children: `[01 EEE]`,
																										},
																									),
																							},
																						),
																				},
																		},
																		V,
																		G,
																	),
																}),
															],
														}),
														s(F, {
															height: 696,
															width: `min(max((max(min(${l?.width || `100vw`}, 1600px) - 80px, 1px) - 70px) / 8, 50px) * 5 + 40px, 700px)`,
															y:
																(l?.y || 0) +
																0 +
																(((l?.height ||
																	200) -
																	0 -
																	1560) /
																	2 +
																	0 +
																	0) +
																90 +
																0 +
																0 +
																0 +
																107,
															...Z(
																{
																	FndEef2iH: {
																		width: `min(max((max(min(${l?.width || `100vw`}, 1600px) - 60px, 1px) - 70px) / 8, 50px) * 5 + 40px, 700px)`,
																		y:
																			(l?.y ||
																				0) +
																			0 +
																			(((l?.height ||
																				200) -
																				0 -
																				1485) /
																				2 +
																				0 +
																				0) +
																			60 +
																			0 +
																			0 +
																			0 +
																			90,
																	},
																	scq1czhhz: {
																		width: `min(max((max(min(${l?.width || `100vw`}, 1600px) - 50px, 1px) - 30px) / 4, 50px) * 4 + 30px, 700px)`,
																		y:
																			(l?.y ||
																				0) +
																			0 +
																			(((l?.height ||
																				200) -
																				0 -
																				2102) /
																				2 +
																				0 +
																				0) +
																			40 +
																			0 +
																			1236 +
																			0 +
																			90,
																	},
																},
																V,
																G,
															),
															children: s(T, {
																className: `framer-1t3k01l-container`,
																layoutDependency:
																	q,
																layoutId: `v6Vac7lkb-container`,
																nodeId: `v6Vac7lkb`,
																rendersWithMotion:
																	!0,
																scopeId: `xKgtfqhor`,
																children: s(
																	Be,
																	{
																		cc8E3AgTV:
																			!0,
																		height: `100%`,
																		id: `v6Vac7lkb`,
																		K7wJlYzkm: `Our manager Kate Wilington now online and can help to you with your project.`,
																		layoutId: `v6Vac7lkb`,
																		mq81hiP1W: ``,
																		style: {
																			maxWidth: `100%`,
																			width: `100%`,
																		},
																		variant: `eYkSQJiay`,
																		width: `100%`,
																		WwskM11_4: `Start
a Project`,
																		...Z(
																			{
																				FndEef2iH:
																					{
																						variant: `kke4loMus`,
																					},
																				scq1czhhz:
																					{
																						variant: `qjW9xYlwK`,
																					},
																			},
																			V,
																			G,
																		),
																	},
																),
															}),
														}),
													],
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
					`.framer-Huwj2.framer-2kkey4, .framer-Huwj2 .framer-2kkey4 { display: block; }`,
					`.framer-Huwj2.framer-n4libs { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
					`.framer-Huwj2 .framer-1kjhgix { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 5px; height: min-content; justify-content: flex-start; max-width: 1600px; overflow: var(--overflow-clip-fallback, clip); padding: 90px 40px 90px 40px; position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-u2dxip { display: grid; flex: 1 0 0px; gap: 10px; grid-auto-rows: minmax(0, 1fr); grid-template-columns: repeat(8, minmax(50px, 1fr)); grid-template-rows: repeat(1, minmax(0, 1fr)); height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1px; }`,
					`.framer-Huwj2 .framer-ymnuw5 { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 35px; grid-column: span 3; height: min-content; justify-content: center; justify-self: start; overflow: visible; padding: 0px 60px 0px 0px; position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-1a159sl-container { flex: none; height: auto; position: relative; width: auto; }`,
					`.framer-Huwj2 .framer-1981dwa { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-1ln6nqs, .framer-Huwj2 .framer-120nkbp, .framer-Huwj2 .framer-v9xz0e, .framer-Huwj2 .framer-crijmw, .framer-Huwj2 .framer-1mbb2yv { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-Huwj2 .framer-1r2uu7o { flex: none; height: 75px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-7218di { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-1ca7e0f { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-Huwj2 .framer-1or1wtu-container { flex: none; height: auto; position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-a96spj { flex: none; height: 40px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-1h6auop { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 40px; height: min-content; justify-content: flex-start; overflow: visible; padding: 280px 0px 0px 0px; position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-e8k41j-container { aspect-ratio: 1.2857142857142858 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 389px); left: -111px; position: absolute; top: -90px; width: 500px; z-index: 1; }`,
					`.framer-Huwj2 .framer-1y15zn1, .framer-Huwj2 .framer-158hnfg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-d88h2l, .framer-Huwj2 .framer-tes8qb { flex: none; height: auto; max-width: 80%; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-Huwj2 .framer-vj2voa, .framer-Huwj2 .framer-1wf50o2 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-n8fmaa { align-content: flex-start; align-items: flex-start; align-self: start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 55px; grid-column: span 5; height: min-content; justify-content: center; justify-self: end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-18xbwe5 { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 100%; }`,
					`.framer-Huwj2 .framer-d9oetm { flex: 1 0 0px; height: auto; position: relative; white-space: pre-wrap; width: 1px; word-break: break-word; word-wrap: break-word; }`,
					`.framer-Huwj2 .framer-168m9mv { flex: none; height: auto; left: 1px; position: absolute; top: 12px; white-space: pre; width: auto; z-index: 1; }`,
					`.framer-Huwj2 .framer-1t3k01l-container { flex: none; height: auto; max-width: 700px; position: relative; width: 100%; }`,
					`.framer-Huwj2.framer-v-1y13jz.framer-n4libs { width: 810px; }`,
					`.framer-Huwj2.framer-v-1y13jz .framer-1kjhgix { padding: 60px 30px 60px 30px; }`,
					`.framer-Huwj2.framer-v-1y13jz .framer-ymnuw5 { padding: 0px 50px 0px 0px; }`,
					`.framer-Huwj2.framer-v-1y13jz .framer-1r2uu7o { height: 110px; }`,
					`.framer-Huwj2.framer-v-1y13jz .framer-a96spj { height: 5px; }`,
					`.framer-Huwj2.framer-v-1y13jz .framer-1h6auop { padding: 200px 0px 0px 0px; }`,
					`.framer-Huwj2.framer-v-1y13jz .framer-e8k41j-container { height: var(--framer-aspect-ratio-supported, 257px); left: -66px; top: -44px; width: 330px; }`,
					`.framer-Huwj2.framer-v-1y13jz .framer-d88h2l, .framer-Huwj2.framer-v-1y13jz .framer-tes8qb, .framer-Huwj2.framer-v-qhr7l .framer-d88h2l, .framer-Huwj2.framer-v-qhr7l .framer-tes8qb { max-width: unset; }`,
					`.framer-Huwj2.framer-v-1y13jz .framer-168m9mv { left: -4px; top: 1px; }`,
					`.framer-Huwj2.framer-v-qhr7l.framer-n4libs { width: 390px; }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-1kjhgix { padding: 40px 25px 40px 25px; }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-u2dxip { gap: 65px 10px; grid-auto-rows: min-content; grid-template-columns: repeat(4, minmax(50px, 1fr)); grid-template-rows: repeat(1, min-content); }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-ymnuw5 { gap: 20px; grid-column: span 4; padding: 0px; }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-1a159sl-container { order: 0; width: 100%; }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-1981dwa { order: 1; }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-1r2uu7o { height: 15px; order: 2; }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-7218di { order: 3; }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-a96spj { height: 10px; order: 4; }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-1h6auop { gap: 30px; order: 5; padding: 260px 0px 0px 0px; }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-e8k41j-container { height: var(--framer-aspect-ratio-supported, 156px); left: -51px; top: -65px; width: 130%; }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-n8fmaa { gap: 60px; grid-column: span 4; }`,
					`.framer-Huwj2.framer-v-qhr7l .framer-168m9mv { left: -4px; top: 2px; }`,
					...De,
					...Ne,
					..._e,
					...ue,
					...B,
					...Oe,
					...xe,
					...Le,
				],
				`framer-Huwj2`,
			)),
			(cn = Q),
			(Q.displayName = `Contact - Section`),
			(Q.defaultProps = { height: 1275, width: 1200 }),
			y(Q, {
				variant: {
					options: [`xBwdZ2302`, `FndEef2iH`, `scq1czhhz`],
					optionTitles: [`Desktop`, `Tablet`, `Phone`],
					title: `Variant`,
					type: A.Enum,
				},
				YB2qkx_Zo: {
					defaultValue: `      Get in touch. From first ideas to full projects, \u2028we’re here to support. Tell to our manager about the goal. We’ll reply with scope and timeline.`,
					displayTextArea: !0,
					title: `Big Text`,
					type: A.String,
				},
				yzKYJO4q7: {
					defaultValue: `DOWNLOAD BRIEF (DOCX)`,
					displayTextArea: !1,
					title: `Text on Download Button`,
					type: A.String,
				},
				gzrTq0KBM: Yt?.srcType && {
					...Yt.srcType,
					defaultValue: `Upload`,
					description: void 0,
					hidden: void 0,
					title: `Source of File`,
				},
				qnCRNahx1: Yt?.srcFile && {
					...Yt.srcFile,
					__defaultAssetReference: `data:framer/asset-reference,8KkWsOcMK9vtDV7xJsDGlD4KPeQ.docx?originalFilename=sample_brief.docx`,
					description: void 0,
					hidden: void 0,
					title: `File`,
				},
				w7w6iyFCE: {
					defaultValue: `project@mondragon.com`,
					displayTextArea: !1,
					title: `Email`,
					type: A.String,
				},
				G76JEsByQ: { title: `Email Link`, type: A.Link },
				mBMR2ZX6p: {
					defaultValue: `United Kingdom
27 Whitfield Yard, Shoreditch, London E2 7NX`,
					displayTextArea: !0,
					title: `Address 1`,
					type: A.String,
				},
				cZliJr1fY: {
					description: `Google Maps`,
					title: `Link to Map`,
					type: A.Link,
				},
				mB6852oUG: {
					defaultValue: `+44 20 3999 1245`,
					displayTextArea: !1,
					title: `Phone Number 1`,
					type: A.String,
				},
				WqLKGMkXV: { title: `Link to Call 1`, type: A.Link },
				kvSY2fkrc: {
					defaultValue: !1,
					title: `Show Phone Number 2`,
					type: A.Boolean,
				},
				tmbcEcegZ: {
					defaultValue: `+44 20 3999 1288`,
					displayTextArea: !1,
					title: `Phone Number 2`,
					type: A.String,
				},
				Zm6VxDJpA: { title: `Link to Call 2`, type: A.Link },
				T4tKkfOQ_: {
					defaultValue: `USA
Los Angeles,
Beverly Hills 55a`,
					displayTextArea: !0,
					title: `Address 2`,
					type: A.String,
				},
				MGASvD8yt: {
					description: `Google Maps`,
					title: `Link to Map 2`,
					type: A.Link,
				},
				j5QyC5_gf: {
					defaultValue: `+1 (323) 825-9734`,
					description: `For Second Address`,
					displayTextArea: !1,
					title: `Phone Number 3`,
					type: A.String,
				},
				mDq8aipvo: {
					description: `For Second Address`,
					title: `Link to Call 3`,
					type: A.Link,
				},
				P5sqkr8ox: {
					defaultValue: !0,
					title: `Show Email`,
					type: A.Boolean,
				},
				wjXyHYkNN: {
					defaultValue: !0,
					title: `Spacer in Left`,
					type: A.Boolean,
				},
				p37vUF_Ml: {
					defaultValue: !0,
					title: `New Tab`,
					type: A.Boolean,
				},
			}),
			M(
				Q,
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
					...Wt,
					...Kt,
					...qt,
					...Jt,
					...O(ke),
					...O(Pe),
					...O(ve),
					...O(pe),
					...O(V),
					...O(Ae),
					...O(Se),
					...O(Re),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	}),
	un,
	dn,
	fn,
	pn,
	mn,
	hn,
	gn,
	$,
	_n,
	vn,
	yn,
	bn,
	xn,
	Sn;
e(() => {
	(f(),
		k(),
		v(),
		a(),
		at(),
		ln(),
		We(),
		(un = C(it)),
		(dn = C(cn)),
		(fn = {
			byM02ZR3A: `(min-width: 1200px)`,
			Y46BmMzV1: `(min-width: 810px) and (max-width: 1199.98px)`,
			zCE8NxDId: `(max-width: 809.98px)`,
		}),
		(pn = []),
		(mn = `framer-zpUBU`),
		(hn = {
			byM02ZR3A: `framer-v-1mm9958`,
			Y46BmMzV1: `framer-v-mlap6i`,
			zCE8NxDId: `framer-v-1mxonzb`,
		}),
		(gn = (e, t, n) => (e && t ? `position` : n)),
		($ = (...e) => {
			for (let t of e) if (t && typeof t == `string`) return t;
		}),
		(_n = {
			Desktop: `byM02ZR3A`,
			Phone: `zCE8NxDId`,
			Tablet: `Y46BmMzV1`,
		}),
		(vn = ({ value: e }) =>
			ne()
				? null
				: s(`style`, {
						dangerouslySetInnerHTML: { __html: e },
						"data-framer-html-style": ``,
					})),
		(yn = ({ height: e, id: t, width: n, ...r }) => ({
			...r,
			variant: _n[r.variant] ?? r.variant ?? `byM02ZR3A`,
		})),
		(bn = x(
			c(function (e, t) {
				let n = u(null),
					i = t ?? n,
					a = p(),
					{ activeLocale: o, setLocale: c } = ie(),
					f = N(),
					{
						style: m,
						className: v,
						layoutId: y,
						variant: b,
						...x
					} = yn(e);
				R(r(() => Ge({}, o), [o]));
				let [S, C] = P(b, fn, !1),
					w = D(mn),
					T = l(I)?.isLayoutTemplate,
					E = gn(T, !!l(g)?.transition?.layout);
				return (
					te({}),
					s(I.Provider, {
						value: {
							activeVariantId: S,
							humanReadableVariantMap: _n,
							primaryVariantId: `byM02ZR3A`,
							variantClassNames: hn,
						},
						children: d(_, {
							id: y ?? a,
							children: [
								s(vn, {
									value: `html body { background: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)); }`,
								}),
								d(h.div, {
									...x,
									className: D(w, `framer-1mm9958`, v),
									ref: i,
									style: { ...m },
									children: [
										s(F, {
											height: 490,
											width: f?.width || `100vw`,
											y: (f?.y || 0) + 0 + 0,
											children: s(re, {
												className: `framer-1ot8nsi-container`,
												layout: E,
												nodeId: `s1rCYwLMg`,
												scopeId: `BCJD0WnMV`,
												children: s(L, {
													breakpoint: S,
													overrides: {
														Y46BmMzV1: {
															variant:
																$(`wPg_bfYE3`),
														},
														zCE8NxDId: {
															variant:
																$(`QrmbrSoVs`),
														},
													},
													children: s(it, {
														height: `100%`,
														id: `s1rCYwLMg`,
														layoutId: `s1rCYwLMg`,
														style: {
															width: `100%`,
														},
														variant: $(`kyFKAMX03`),
														width: `100%`,
													}),
												}),
											}),
										}),
										s(F, {
											height: 1275,
											width: f?.width || `100vw`,
											y: (f?.y || 0) + 0 + 490,
											children: s(re, {
												className: `framer-wcqa3w-container`,
												layout: E,
												nodeId: `VBZGeHrsL`,
												scopeId: `BCJD0WnMV`,
												children: s(L, {
													breakpoint: S,
													overrides: {
														Y46BmMzV1: {
															variant:
																$(`FndEef2iH`),
														},
														zCE8NxDId: {
															variant:
																$(`scq1czhhz`),
														},
													},
													children: s(cn, {
														cZliJr1fY: `https://maps.app.goo.gl/mFzHrdjVoW5kQEgB6`,
														G76JEsByQ: `mailto:project@mondragon-template.com`,
														gzrTq0KBM: `Upload`,
														height: `100%`,
														id: `VBZGeHrsL`,
														j5QyC5_gf: `+1 (323) 825-9734`,
														kvSY2fkrc: !1,
														layoutId: `VBZGeHrsL`,
														mB6852oUG: `+44 20 3999 1245`,
														mBMR2ZX6p: `United Kingdom
27 Whitfield Yard,
Shoreditch, London E2 7NX`,
														mDq8aipvo: `tel:+1 (323) 825-9734`,
														MGASvD8yt: `https://maps.app.goo.gl/BUmwoQvuCC8sg1pd9`,
														p37vUF_Ml: !0,
														P5sqkr8ox: !0,
														style: {
															width: `100%`,
														},
														T4tKkfOQ_: `USA
Los Angeles,
Beverly Hills 55a`,
														tmbcEcegZ: `+44 20 3999 1288`,
														variant: $(`xBwdZ2302`),
														w7w6iyFCE: `project@mondragon.com`,
														width: `100%`,
														wjXyHYkNN: !0,
														WqLKGMkXV: `tel:+44 20 3999 1245`,
														YB2qkx_Zo: `      Get in touch. From first ideas to full projects, \u2028we’re here to support. Tell to our manager about the goal. We’ll reply with scope and timeline.`,
														yzKYJO4q7: `DOWNLOAD BRIEF (DOCX)`,
													}),
												}),
											}),
										}),
									],
								}),
								s(`div`, { id: `overlay` }),
							],
						}),
					})
				);
			}),
			[
				`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
				`.framer-zpUBU.framer-lvxtob, .framer-zpUBU .framer-lvxtob { display: block; }`,
				`.framer-zpUBU.framer-1mm9958 { align-content: center; align-items: center; background-color: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, #ffffff); display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 1200px; }`,
				`.framer-zpUBU .framer-1ot8nsi-container, .framer-zpUBU .framer-wcqa3w-container { flex: none; height: auto; position: relative; width: 100%; }`,
				`@media (min-width: 810px) and (max-width: 1199.98px) { .framer-zpUBU.framer-1mm9958 { width: 810px; }}`,
				`@media (max-width: 809.98px) { .framer-zpUBU.framer-1mm9958 { width: 390px; }}`,
			],
			`framer-zpUBU`,
		)),
		(xn = bn),
		(bn.displayName = `Agency`),
		(bn.defaultProps = { height: 2944, width: 1200 }),
		M(bn, [{ explicitInter: !0, fonts: [] }, ...un, ...dn], {
			supportsExplicitInterCodegen: !0,
		}),
		(bn.loader = {
			load: (e, t) => (
				t.locale,
				Promise.allSettled([w(it, {}, t), w(cn, {}, t)])
			),
		}),
		(Sn = {
			exports: {
				default: {
					type: `reactComponent`,
					name: `FramerBCJD0WnMV`,
					slots: [],
					annotations: {
						framerDisplayContentsDiv: `false`,
						framerResponsiveScreen: `true`,
						framerColorSyntax: `true`,
						framerLayoutTemplateFlowEffect: `true`,
						framerIntrinsicHeight: `2944`,
						framerAutoSizeImages: `true`,
						framerContractVersion: `1`,
						framerIntrinsicWidth: `1200`,
						framerImmutableVariables: `true`,
						framerComponentViewportWidth: `true`,
						framerAcceptsLayoutTemplate: `true`,
						framerScrollSections: `false`,
						framerCanvasComponentVariantDetails: `{"propertyName":"variant","data":{"default":{"layout":["fixed","auto"]},"Y46BmMzV1":{"layout":["fixed","auto"]},"zCE8NxDId":{"layout":["fixed","auto"]}}}`,
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
export { Sn as __FramerMetadata__, xn as default, pn as queryParamNames };
//# sourceMappingURL=component-contact-page.mjs.map
