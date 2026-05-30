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
	o as rUseDeferredValue,
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
	g as C,
	k as w,
	lt as T,
	p as E,
	vt as D,
} from "./framer.mjs";
import { i as O, n as k, r as A, t as j } from "./NqfjhJTm6.CzgN9mfI.mjs";
var M,
	N,
	P,
	F,
	I,
	L = lazyInit(() => {
		(rUseDeferredValue(),
			x(),
			r(),
			(M = `url('data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 24 25" xmlns="http://www.w3.org/2000/svg"><g d="M 12 0 L 12 2.673 L 0.861 6.809 L 0.861 7.191 L 12 11.327 L 12 14 L 0 9.418 L 0 4.582 Z" fill="transparent" height="14px" id="JTYRgPDoI" transform="translate(6 6)" width="12px"><path d="M 12 0 L 12 2.673 L 0.861 6.809 L 0.861 7.191 L 12 11.327 L 12 14 L 0 9.418 L 0 4.582 Z" fill="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))" height="14px" id="UGfEzvvn2" width="12px"/></g></svg>') alpha no-repeat center / auto var(--framer-icon-mask-mode, add), var(--framer-icon-mask, none)`),
			(N = rForwardRef((e, t) => {
				let { animated: n, layoutId: r, children: a, ...o } = e;
				return n
					? rJsx(d.div, { ...o, layoutId: r, ref: t })
					: rJsx(`div`, { ...o, ref: t });
			})),
			(P = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(F = _(
				rForwardRef(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: a,
						variant: o,
						...s
					} = P(e);
					return rJsx(N, {
						...s,
						className: v(`framer-UX8Zr`, r),
						layoutId: a,
						ref: t,
						style: { ...n },
					});
				}),
				[
					`.framer-UX8Zr { -webkit-mask: ${M}; aspect-ratio: 0.96; background-color: var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, #ffffff); mask: ${M}; width: 24px; }`,
				],
				`framer-UX8Zr`,
			)),
			(F.displayName = `Left One White 1`),
			(I = F));
	}),
	R,
	z,
	B,
	V,
	H,
	U,
	W,
	G,
	K,
	q = lazyInit(() => {
		(rUseDeferredValue(),
			x(),
			m(),
			r(),
			O(),
			L(),
			(R = `framer-fr2Wp`),
			(z = { L7j75_085: `framer-v-f48u4i` }),
			(B = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(V = ({ value: e, children: t }) => {
				let r = rUseContext(f),
					a = e ?? r.transition,
					s = rUseMemo(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return rJsx(f.Provider, { value: s, children: t });
			}),
			(H = d.create(t)),
			(U = ({
				backTo: e,
				color: t,
				height: n,
				icon: r,
				id: i,
				link: a,
				width: o,
				...s
			}) => ({
				...s,
				lKGneMq0k: e ?? s.lKGneMq0k ?? `Back to Blog`,
				nlWGHHygY: r ?? s.nlWGHHygY ?? I,
				nYSQk00RJ:
					t ??
					s.nYSQk00RJ ??
					`var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
				ZDsHw6oyQ: a ?? s.ZDsHw6oyQ,
			})),
			(W = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(G = _(
				rForwardRef(function (e, n) {
					let r = rUseRef(null),
						a = n ?? r,
						o = rUseId(),
						{ activeLocale: l, setLocale: f } = D();
					T();
					let {
							style: m,
							className: h,
							layoutId: _,
							variant: b,
							lKGneMq0k: x,
							ZDsHw6oyQ: S,
							nYSQk00RJ: w,
							nlWGHHygY: O,
							...k
						} = U(e),
						{
							baseVariant: A,
							classNames: M,
							clearLoadingGesture: N,
							gestureHandlers: P,
							gestureVariant: F,
							isLoading: I,
							setGestureState: L,
							setVariant: G,
							variants: K,
						} = y({
							defaultVariant: `L7j75_085`,
							ref: a,
							variant: b,
							variantClassNames: z,
						}),
						q = W(e, K),
						J = v(R, j);
					return rJsx(p, {
						id: _ ?? o,
						children: rJsx(H, {
							animate: K,
							initial: !1,
							children: rJsx(V, {
								value: B,
								children: rJsx(C, {
									href: S,
									motionChild: !0,
									nodeId: `L7j75_085`,
									openInNewTab: !1,
									scopeId: `lJIHQ29dZ`,
									children: rJsxs(d.a, {
										...k,
										...P,
										className: `${v(J, `framer-f48u4i`, h, M)} framer-1l2ul8j`,
										layoutDependency: q,
										layoutId: `L7j75_085`,
										ref: a,
										style: { ...m },
										children: [
											rJsx(E, {
												animated: !0,
												className: `framer-1fol01y`,
												Component: O,
												layoutDependency: q,
												layoutId: `kUqZ5nGFM`,
											}),
											rJsx(g, {
												__fromCanvasComponent: !0,
												children: rJsx(t, {
													children: rJsx(d.h6, {
														className: `framer-styles-preset-8moxfa`,
														"data-styles-preset": `NqfjhJTm6`,
														style: {
															"--framer-text-color": `var(--extracted-1w1cjl5, var(--variable-reference-nYSQk00RJ-lJIHQ29dZ))`,
														},
														children: `Back to Blog`,
													}),
												}),
												className: `framer-x5sk78`,
												fonts: [`Inter`],
												layoutDependency: q,
												layoutId: `ppE_0KrG9`,
												style: {
													"--extracted-1w1cjl5": `var(--variable-reference-nYSQk00RJ-lJIHQ29dZ)`,
													"--framer-paragraph-spacing": `0px`,
													"--variable-reference-nYSQk00RJ-lJIHQ29dZ":
														w,
												},
												text: x,
												verticalAlignment: `top`,
												withExternalLayout: !0,
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
					`.framer-fr2Wp.framer-1l2ul8j, .framer-fr2Wp .framer-1l2ul8j { display: block; }`,
					`.framer-fr2Wp.framer-f48u4i { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 10px 0px 10px 0px; position: relative; text-decoration: none; width: min-content; }`,
					`.framer-fr2Wp .framer-1fol01y { flex: none; height: var(--framer-aspect-ratio-supported, 19px); position: relative; width: 18px; }`,
					`.framer-fr2Wp .framer-x5sk78 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					...k,
				],
				`framer-fr2Wp`,
			)),
			(K = G),
			(G.displayName = `Back Link`),
			(G.defaultProps = { height: 39, width: 161 }),
			h(G, {
				lKGneMq0k: {
					defaultValue: `Back to Blog`,
					displayTextArea: !1,
					title: `Back to`,
					type: S.String,
				},
				ZDsHw6oyQ: { title: `Link`, type: S.Link },
				nYSQk00RJ: {
					defaultValue: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
					title: `Color`,
					type: S.Color,
				},
				nlWGHHygY: {
					defaultValue: {
						identifier: `local-module:vector/lS3Ns2rxm:default`,
						moduleId: `OmR2Umwsvi61hbRlgM3s`,
					},
					setModuleId: `lHslVDJafOQaK6SNjMYY`,
					title: `Icon`,
					type: S.VectorSetItem,
				},
			}),
			w(
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
					...b(A),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
export { K as n, q as t };
