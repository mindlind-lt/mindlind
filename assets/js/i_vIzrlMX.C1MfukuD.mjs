import { t as e } from "./rolldown-runtime.mjs";
import {
	F as t,
	M as rUseMemo,
	T as r,
	c as rJsx,
	g as rForwardRef,
	j as rUseContext,
	k as rUseRef,
	o as c,
	y as rUseId,
} from "./react.mjs";
import { S as u, a as d, r as f, t as p } from "./motion.mjs";
import {
	A as m,
	Et as h,
	P as g,
	Tt as _,
	W as v,
	X as y,
	a as b,
	f as x,
	k as S,
	lt as C,
	vt as w,
} from "./framer.mjs";

/**
 * Small Photo component variants and defaults.
 * Constants are extracted only for readability; runtime behavior is unchanged.
 */
const SMALL_PHOTO_VARIANTS = {
	Small: `It_U6dSzO`,
	Medium: `pI7Yj7FYQ`,
	Big: `GRhQUdS7Z`,
};

const SMALL_PHOTO_VARIANT_ORDER = [
	SMALL_PHOTO_VARIANTS.Small,
	SMALL_PHOTO_VARIANTS.Medium,
	SMALL_PHOTO_VARIANTS.Big,
];

const SMALL_PHOTO_COMPONENT_CLASS = `framer-WiMpr`;
const SMALL_PHOTO_VARIANT_CLASSES = {
	[SMALL_PHOTO_VARIANTS.Big]: `framer-v-23fi3s`,
	[SMALL_PHOTO_VARIANTS.Small]: `framer-v-18dzq2`,
	[SMALL_PHOTO_VARIANTS.Medium]: `framer-v-8n0bxv`,
};

const SMALL_PHOTO_SPRING = {
	bounce: 0.2,
	delay: 0,
	duration: 0.4,
	type: `spring`,
};

const SMALL_PHOTO_DEFAULT_SIZE = 40;

/** @typedef {{ src: string }} SmallPhotoImageAsset */
/** @typedef {string | SmallPhotoImageAsset | undefined} SmallPhotoImage */

/**
 * @typedef {object} SmallPhotoProps
 * @property {number=} height
 * @property {string=} id
 * @property {SmallPhotoImage=} photo
 * @property {number=} width
 * @property {string=} variant
 */

function T(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var E,
	D,
	O,
	k,
	A,
	j,
	M,
	N,
	P,
	F,
	I,
	L,
	R = e(() => {
		(c(),
			y(),
			p(),
			r(),
			(E = SMALL_PHOTO_VARIANT_ORDER),
			(D = SMALL_PHOTO_COMPONENT_CLASS),
			(O = SMALL_PHOTO_VARIANT_CLASSES),
			(k = SMALL_PHOTO_SPRING),
			(A = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(j = ({ value: e, children: t }) => {
				let r = rUseContext(d),
					a = e ?? r.transition,
					s = rUseMemo(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return rJsx(d.Provider, { value: s, children: t });
			}),
			(M = u.create(t)),
			(N = SMALL_PHOTO_VARIANTS),
			(P =
				/** @param {SmallPhotoProps} e */
				({ height: e, id: t, photo: n, width: r, ...i }) => ({
				...i,
				hcJOIuTE0: n ?? i.hcJOIuTE0,
				variant: N[i.variant] ?? i.variant ?? SMALL_PHOTO_VARIANTS.Small,
			})),
			(F = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(I = h(
				rForwardRef(function (e, t) {
					let n = rUseRef(null),
						r = t ?? n,
						a = rUseId(),
						{ activeLocale: o, setLocale: c } = w(),
						d = C(),
						{
							style: p,
							className: m,
							layoutId: h,
							variant: y,
							hcJOIuTE0: b,
							...S
						} = P(e),
						{
							baseVariant: N,
							classNames: I,
							clearLoadingGesture: L,
							gestureHandlers: R,
							gestureVariant: z,
							isLoading: B,
							setGestureState: V,
							setVariant: H,
							variants: U,
						} = _({
							cycleOrder: E,
							defaultVariant: SMALL_PHOTO_VARIANTS.Small,
							ref: r,
							variant: y,
							variantClassNames: O,
						}),
						W = F(e, U),
						G = g(D);
					return rJsx(f, {
						id: h ?? a,
						children: rJsx(M, {
							animate: U,
							initial: !1,
							children: rJsx(j, {
								value: k,
								children: rJsx(u.div, {
									...S,
									...R,
									className: g(G, `framer-18dzq2`, m, I),
									layoutDependency: W,
									layoutId: `It_U6dSzO`,
									ref: r,
									style: {
										backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
										borderBottomLeftRadius: 20,
										borderBottomRightRadius: 20,
										borderTopLeftRadius: 20,
										borderTopRightRadius: 20,
										...p,
									},
									variants: {
										GRhQUdS7Z: {
											borderBottomLeftRadius: 45,
											borderBottomRightRadius: 45,
											borderTopLeftRadius: 45,
											borderTopRightRadius: 45,
										},
										pI7Yj7FYQ: {
											borderBottomLeftRadius: 45,
											borderBottomRightRadius: 45,
											borderTopLeftRadius: 45,
											borderTopRightRadius: 45,
										},
									},
									...T(
										{
											GRhQUdS7Z: {
											},
											pI7Yj7FYQ: {
											},
										},
										N,
										z,
									),
									children: rJsx(x, {
										background: {
											alt: ``,
											fit: `fill`,
											loading: v(
												(d?.y || 0) +
													(0 +
														((d?.height || 40) -
															0 -
															38) /
															2),
											),
											sizes: `38px`,
											...A(b),
										},
										className: `framer-184kotc`,
										layoutDependency: W,
										layoutId: `UswqG1SFW`,
										style: {
											borderBottomLeftRadius: 50,
											borderBottomRightRadius: 50,
											borderTopLeftRadius: 50,
											borderTopRightRadius: 50,
										},
										...T(
											{
												GRhQUdS7Z: {
													background: {
														alt: ``,
														fit: `fill`,
														loading: v(
															(d?.y || 0) +
																(0 +
																	((d?.height ||
																		90) -
																		0 -
																		88) /
																		2),
														),
														sizes: `88px`,
														...A(b),
													},
												},
												pI7Yj7FYQ: {
													background: {
														alt: ``,
														fit: `fill`,
														loading: v(
															(d?.y || 0) +
																(0 +
																	((d?.height ||
																		65) -
																		0 -
																		59) /
																		2),
														),
														sizes: `64px`,
														...A(b),
													},
												},
											},
											N,
											z,
										),
									}),
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-WiMpr.framer-1jchgh5, .framer-WiMpr .framer-1jchgh5 { display: block; }`,
					`.framer-WiMpr.framer-18dzq2 { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 10px; height: 40px; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 40px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-WiMpr .framer-184kotc { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 38px); overflow: visible; position: relative; width: 38px; }`,
					`.framer-WiMpr.framer-v-8n0bxv.framer-18dzq2 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 65px); width: 65px; }`,
					`.framer-WiMpr.framer-v-8n0bxv .framer-184kotc { height: var(--framer-aspect-ratio-supported, 64px); width: 64px; }`,
					`.framer-WiMpr.framer-v-23fi3s.framer-18dzq2 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 90px); width: 90px; }`,
					`.framer-WiMpr.framer-v-23fi3s .framer-184kotc { height: var(--framer-aspect-ratio-supported, 88px); width: 88px; }`,
				],
				`framer-WiMpr`,
			)),
			(L = I),
			(I.displayName = `Small Photo`),
			(I.defaultProps = {
				height: SMALL_PHOTO_DEFAULT_SIZE,
				width: SMALL_PHOTO_DEFAULT_SIZE,
			}),
			m(I, {
				variant: {
					options: SMALL_PHOTO_VARIANT_ORDER,
					optionTitles: [`Small`, `Medium`, `Big`],
					title: `Variant`,
					type: b.Enum,
				},
				hcJOIuTE0: { title: `Photo`, type: b.ResponsiveImage },
			}),
			S(I, [{ explicitInter: !0, fonts: [] }], {
				supportsExplicitInterCodegen: !0,
			}));
	});
export { R as n, L as t };
