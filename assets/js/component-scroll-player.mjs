import { lazyInit as e } from "./rolldown-runtime.mjs";
import {
	A as t,
	E as n,
	F as r,
	I as rUseState,
	M as rUseMemo,
	N as o,
	P as rUseEffect,
	T as c,
	V as l,
	_ as u,
	c as rJsx,
	g as rForwardRef,
	j as rUseContext,
	k as rUseRef,
	l as rJsxs,
	o as rUseDeferredValue,
	y as rUseId,
	z as v,
} from "./react.mjs";
import {
	B as ee,
	G as y,
	R as b,
	S as x,
	a as S,
	f as te,
	r as ne,
	t as C,
} from "./motion.mjs";
import {
	A as w,
	D as T,
	E,
	Et as D,
	F as re,
	P as O,
	Tt as ie,
	U as k,
	X as A,
	a as j,
	k as M,
	lt as ae,
	vt as N,
	w as oe,
} from "./framer.mjs";
import { c as se, s as ce } from "./JFkcxmmKA.7qpzn-1x.mjs";
import { r as le } from "./Vimeo.mjs";
import { i as ue, n as de, r as fe, t as pe } from "./NqfjhJTm6.CzgN9mfI.mjs";
function me(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var he,
	ge,
	_e,
	ve,
	ye,
	be,
	xe,
	Se,
	Ce,
	we,
	P,
	Te,
	Ee = e(() => {
		(rUseDeferredValue(),
			A(),
			C(),
			c(),
			ue(),
			(he = [`dAo9ApRb4`, `ohrw2fwzF`, `dlI3XgZzv`]),
			(ge = `framer-jil4K`),
			(_e = {
				dAo9ApRb4: `framer-v-w7ykn8`,
				dlI3XgZzv: `framer-v-xci0ga`,
				ohrw2fwzF: `framer-v-xr9dzy`,
			}),
			(ve = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(ye = (e, t) => `translate(-50%, -50%) ${t}`),
			(be = ({ value: e, children: t }) => {
				let n = rUseContext(S),
					r = e ?? n.transition,
					i = rUseMemo(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return rJsx(S.Provider, { value: i, children: t });
			}),
			(xe = x.create(r)),
			(Se = {
				"Play Mobile": `dlI3XgZzv`,
				Play: `dAo9ApRb4`,
				View: `ohrw2fwzF`,
			}),
			(Ce = ({ height: e, id: t, width: n, ...r }) => ({
				...r,
				variant: Se[r.variant] ?? r.variant ?? `dAo9ApRb4`,
			})),
			(we = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(P = D(
				rForwardRef(function (e, t) {
					let n = rUseRef(null),
						i = t ?? n,
						a = rUseId(),
						{ activeLocale: o, setLocale: s } = N();
					ae();
					let {
							style: c,
							className: l,
							layoutId: u,
							variant: f,
							...p
						} = Ce(e),
						{
							baseVariant: g,
							classNames: v,
							clearLoadingGesture: ee,
							gestureHandlers: y,
							gestureVariant: b,
							isLoading: S,
							setGestureState: te,
							setVariant: C,
							variants: w,
						} = ie({
							cycleOrder: he,
							defaultVariant: `dAo9ApRb4`,
							ref: i,
							variant: f,
							variantClassNames: _e,
						}),
						T = we(e, w),
						D = O(ge, pe);
					return rJsx(ne, {
						id: u ?? a,
						children: rJsx(xe, {
							animate: w,
							initial: !1,
							children: rJsx(be, {
								value: ve,
								children: rJsxs(x.div, {
									...p,
									...y,
									className: O(D, `framer-w7ykn8`, l, v),
									layoutDependency: T,
									layoutId: `dAo9ApRb4`,
									ref: i,
									style: { ...c },
									...me(
										{
											dlI3XgZzv: {
											},
											ohrw2fwzF: {
											},
										},
										g,
										b,
									),
									children: [
										rJsx(x.div, {
											className: `framer-tnhzud`,
											layoutDependency: T,
											layoutId: `k5hBx1QO5`,
											style: {
												backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
												borderBottomLeftRadius: `100%`,
												borderBottomRightRadius: `100%`,
												borderTopLeftRadius: `100%`,
												borderTopRightRadius: `100%`,
											},
										}),
										rJsx(E, {
											__fromCanvasComponent: !0,
											children: rJsx(r, {
												children: rJsx(x.h6, {
													className: `framer-styles-preset-8moxfa`,
													"data-styles-preset": `NqfjhJTm6`,
													style: {
														"--framer-text-alignment": `center`,
														"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
													},
													children: `[Play]`,
												}),
											}),
											className: `framer-1wi0lgo`,
											fonts: [`Inter`],
											layoutDependency: T,
											layoutId: `MCUDimx56`,
											style: {
												"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
												"--framer-paragraph-spacing": `0px`,
											},
											transformTemplate: ye,
											verticalAlignment: `top`,
											withExternalLayout: !0,
											...me(
												{
													ohrw2fwzF: {
														children: rJsx(r, {
															children: rJsx(x.h6, {
																className: `framer-styles-preset-8moxfa`,
																"data-styles-preset": `NqfjhJTm6`,
																style: {
																	"--framer-text-alignment": `center`,
																	"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: `[View]`,
															}),
														}),
													},
												},
												g,
												b,
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
					`.framer-jil4K.framer-1g568wu, .framer-jil4K .framer-1g568wu { display: block; }`,
					`.framer-jil4K.framer-w7ykn8 { height: 125px; overflow: visible; position: relative; width: 125px; }`,
					`.framer-jil4K .framer-tnhzud { flex: none; height: 125px; left: calc(50% - 125px / 2); position: absolute; top: calc(50% - 125px / 2); width: 125px; }`,
					`.framer-jil4K .framer-1wi0lgo { flex: none; height: auto; left: 50%; position: absolute; top: 50%; white-space: pre; width: auto; }`,
					`.framer-jil4K.framer-v-xci0ga.framer-w7ykn8 { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 95px); width: 95px; }`,
					`.framer-jil4K.framer-v-xci0ga .framer-tnhzud { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 95px); left: 0px; right: 0px; top: 0px; width: unset; }`,
					`.framer-jil4K.framer-v-xci0ga .framer-1wi0lgo { left: 51%; top: 49%; }`,
					...de,
				],
				`framer-jil4K`,
			)),
			(Te = P),
			(P.displayName = `Play, View - Cursors`),
			(P.defaultProps = { height: 125, width: 125 }),
			w(P, {
				variant: {
					options: [`dAo9ApRb4`, `ohrw2fwzF`, `dlI3XgZzv`],
					optionTitles: [`Play`, `View`, `Play Mobile`],
					title: `Variant`,
					type: j.Enum,
				},
			}),
			M(
				P,
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
					...k(fe),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function F(e, t) {
	return L(e) ? e[R(0, e.length, t)] : e;
}
function De(e, t) {
	let n = e[e.length - 1];
	for (let r = 1; r <= t; r++) {
		let i = B(0, t, r);
		e.push(Me(n, 1, i));
	}
}
function Oe(e) {
	let t = [0];
	return (De(t, e - 1), t);
}
function ke(e, t = Oe(e.length), n = z) {
	let r = e.length,
		i = r - t.length;
	return (
		i > 0 && De(t, i),
		(i) => {
			let a = 0;
			for (; a < r - 2 && !(i < t[a + 1]); a++);
			let o = je(0, 1, B(t[a], t[a + 1], i));
			return ((o = F(n, a)(o)), Me(e[a], e[a + 1], o));
		}
	);
}
function Ae(e, t) {
	return t ? (1e3 / t) * e : 0;
}
var je,
	I,
	L,
	R,
	Me,
	z,
	B,
	V,
	Ne = e(() => {
		((je = (e, t, n) => Math.min(Math.max(n, e), t)),
			(I = (e) => typeof e == `number`),
			(L = (e) => Array.isArray(e) && !I(e[0])),
			(R = (e, t, n) => {
				let r = t - e;
				return ((((n - e) % r) + r) % r) + e;
			}),
			(Me = (e, t, n) => -n * e + n * t + e),
			(z = (e) => e),
			(B = (e, t, n) => (t - e === 0 ? 1 : (n - e) / (t - e))),
			(V = (e) => typeof e == `string`));
	}),
	Pe = e(() => {
		Ne();
	}),
	Fe = e(() => {
		Pe();
	});
function Ie(e, t) {
	var n = {};
	for (var r in e)
		Object.prototype.hasOwnProperty.call(e, r) &&
			t.indexOf(r) < 0 &&
			(n[r] = e[r]);
	if (e != null && typeof Object.getOwnPropertySymbols == `function`) {
		var i = 0;
		for (r = Object.getOwnPropertySymbols(e); i < r.length; i++)
			t.indexOf(r[i]) < 0 &&
				Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
				(n[r[i]] = e[r[i]]);
	}
	return n;
}
var Le = e(() => {}),
	H,
	U = e(() => {
		((H = {}),
			Object.defineProperty(H, `__esModule`, { value: !0 }),
			(H.warning = function () {}),
			(H.invariant = function () {}),
			H.__esModule,
			H.warning,
			H.invariant);
	}),
	W = e(() => {
		Ne();
	});
function Re(e, t) {
	return (
		typeof e == `string`
			? t
				? (t[e] ?? (t[e] = document.querySelectorAll(e)), (e = t[e]))
				: (e = document.querySelectorAll(e))
			: e instanceof Element && (e = [e]),
		Array.from(e || [])
	);
}
function G(e, t, { root: n, margin: r, amount: i = `any` } = {}) {
	if (typeof IntersectionObserver > `u`) return () => {};
	let a = Re(e),
		o = new WeakMap(),
		s = new IntersectionObserver(
			(e) => {
				e.forEach((e) => {
					let n = o.get(e.target);
					if (e.isIntersecting !== !!n)
						if (e.isIntersecting) {
							let n = t(e);
							typeof n == `function`
								? o.set(e.target, n)
								: s.unobserve(e.target);
						} else n && (n(e), o.delete(e.target));
				});
			},
			{
				root: n,
				rootMargin: r,
				threshold: typeof i == `number` ? i : mt[i],
			},
		);
	return (a.forEach((e) => s.observe(e)), () => s.disconnect());
}
function K(e, t) {
	if (t) {
		let { inlineSize: e, blockSize: n } = t[0];
		return { width: e, height: n };
	}
	return e instanceof SVGElement && `getBBox` in e
		? e.getBBox()
		: { width: e.offsetWidth, height: e.offsetHeight };
}
function ze({ target: e, contentRect: t, borderBoxSize: n }) {
	var r;
	(r = J.get(e)) == null ||
		r.forEach((r) => {
			r({
				target: e,
				contentSize: t,
				get size() {
					return K(e, n);
				},
			});
		});
}
function Be(e) {
	e.forEach(ze);
}
function Ve() {
	typeof ResizeObserver < `u` && (Y = new ResizeObserver(Be));
}
function He(e, t) {
	Y || Ve();
	let n = Re(e);
	return (
		n.forEach((e) => {
			let n = J.get(e);
			(n || ((n = new Set()), J.set(e, n)), n.add(t), Y?.observe(e));
		}),
		() => {
			n.forEach((e) => {
				let n = J.get(e);
				(n?.delete(t),
					(n != null && n.size) || Y == null || Y.unobserve(e));
			});
		}
	);
}
function Ue() {
	((Z = () => {
		let e = { width: l.innerWidth, height: l.innerHeight },
			t = { target: l, size: e, contentSize: e };
		X.forEach((e) => e(t));
	}),
		l.addEventListener(`resize`, Z));
}
function We(e) {
	return (
		X.add(e),
		Z || Ue(),
		() => {
			(X.delete(e), !X.size && Z && (Z = void 0));
		}
	);
}
function Ge(e, t) {
	return typeof e == `function` ? We(e) : He(e, t);
}
function Ke(e, t, n, r) {
	let i = n[t],
		{ length: a, position: o } = vt[t],
		s = i.current,
		c = n.time;
	((i.current = e[`scroll` + o]),
		(i.scrollLength = e[`scroll` + a] - e[`client` + a]),
		(i.offset.length = 0),
		(i.offset[0] = 0),
		(i.offset[1] = i.scrollLength),
		(i.progress = B(0, i.scrollLength, i.current)));
	let l = r - c;
	i.velocity = l > ht ? 0 : Ae(i.current - s, l);
}
function qe(e, t, n) {
	(Ke(e, `x`, t, n), Ke(e, `y`, t, n), (t.time = n));
}
function Je(e, t) {
	let n = { x: 0, y: 0 },
		r = e;
	for (; r && r !== t; )
		if (r instanceof HTMLElement)
			((n.x += r.offsetLeft), (n.y += r.offsetTop), (r = r.offsetParent));
		else if (r instanceof SVGGraphicsElement && `getBBox` in r) {
			let { top: e, left: t } = r.getBBox();
			for (n.x += t, n.y += e; r && r.tagName !== `svg`; )
				r = r.parentNode;
		}
	return n;
}
function q(e, t, n = 0) {
	let r = 0;
	if ((bt[e] !== void 0 && (e = bt[e]), V(e))) {
		let t = parseFloat(e);
		e.endsWith(`px`)
			? (r = t)
			: e.endsWith(`%`)
				? (e = t / 100)
				: e.endsWith(`vw`)
					? (r = (t / 100) * document.documentElement.clientWidth)
					: e.endsWith(`vh`)
						? (r =
								(t / 100) *
								document.documentElement.clientHeight)
						: (e = t);
	}
	return (I(e) && (r = t * e), n + r);
}
function Ye(e, t, n, r) {
	let i = Array.isArray(e) ? e : xt,
		a = 0,
		o = 0;
	return (
		I(e)
			? (i = [e, e])
			: V(e) &&
				((e = e.trim()),
				(i = e.includes(` `) ? e.split(` `) : [e, bt[e] ? e : `0`])),
		(a = q(i[0], n, r)),
		(o = q(i[1], t)),
		a - o
	);
}
function Xe(e, t, n) {
	let { offset: r = yt.All } = n,
		{ target: i = e, axis: a = `y` } = n,
		o = a === `y` ? `height` : `width`,
		s = i === e ? St : Je(i, e),
		c =
			i === e
				? { width: e.scrollWidth, height: e.scrollHeight }
				: { width: i.clientWidth, height: i.clientHeight },
		l = { width: e.clientWidth, height: e.clientHeight };
	t[a].offset.length = 0;
	let u = !t[a].interpolate,
		d = r.length;
	for (let e = 0; e < d; e++) {
		let n = Ye(r[e], l[o], c[o], s[a]);
		(u || n === t[a].interpolatorOffsets[e] || (u = !0),
			(t[a].offset[e] = n));
	}
	(u &&
		((t[a].interpolate = ke(Oe(d), t[a].offset)),
		(t[a].interpolatorOffsets = [...t[a].offset])),
		(t[a].progress = t[a].interpolate(t[a].current)));
}
function Ze(e, t = e, n) {
	if (((n.x.targetOffset = 0), (n.y.targetOffset = 0), t !== e)) {
		let r = t;
		for (; r && r != e; )
			((n.x.targetOffset += r.offsetLeft),
				(n.y.targetOffset += r.offsetTop),
				(r = r.offsetParent));
	}
	((n.x.targetLength = t === e ? t.scrollWidth : t.clientWidth),
		(n.y.targetLength = t === e ? t.scrollHeight : t.clientHeight),
		(n.x.containerLength = e.clientWidth),
		(n.y.containerLength = e.clientHeight));
}
function Qe(e, t, n, r = {}) {
	let i = r.axis || `y`;
	return {
		measure: () => Ze(e, r.target, n),
		update: (t) => {
			(qe(e, n, t), (r.offset || r.target) && Xe(e, n, r));
		},
		notify: typeof t == `function` ? () => t(n) : $e(t, n[i]),
	};
}
function $e(e, t) {
	return (
		e.pause(),
		e.forEachNative((e, { easing: t }) => {
			var n, r;
			if (e.updateDuration) (t || (e.easing = z), e.updateDuration(1));
			else {
				let i = { duration: 1e3 };
				(t || (i.easing = `linear`),
					(r = (n = e.effect)?.updateTiming) == null || r.call(n, i));
			}
		}),
		() => {
			e.currentTime = t.progress;
		}
	);
}
function et(e, t = {}) {
	var { container: n = document.documentElement } = t,
		r = Ie(t, [`container`]);
	let i = wt.get(n);
	i || ((i = new Set()), wt.set(n, i));
	let a = Qe(n, e, _t(), r);
	if ((i.add(a), !Q.has(n))) {
		let e = () => {
			let e = performance.now();
			for (let e of i) e.measure();
			for (let t of i) t.update(e);
			for (let e of i) e.notify();
		};
		Q.set(n, e);
		let t = Tt(n);
		(l.addEventListener(`resize`, e, { passive: !0 }),
			n !== document.documentElement && Ct.set(n, Ge(n, e)),
			t.addEventListener(`scroll`, e, { passive: !0 }));
	}
	let o = Q.get(n),
		s = requestAnimationFrame(o);
	return () => {
		var t;
		(typeof e != `function` && e.stop(), cancelAnimationFrame(s));
		let r = wt.get(n);
		if (!r || (r.delete(a), r.size)) return;
		let i = Q.get(n);
		(Q.delete(n),
			i &&
				(Tt(n).removeEventListener(`scroll`, i),
				(t = Ct.get(n)) == null || t(),
				l.removeEventListener(`resize`, i)));
	};
}
function tt(e, t, n) {
	e.dispatchEvent(new CustomEvent(t, { detail: { originalEvent: n } }));
}
function nt(e, t, n) {
	e.dispatchEvent(new CustomEvent(t, { detail: { originalEntry: n } }));
}
var rt,
	it,
	at,
	ot,
	st,
	ct,
	lt,
	ut,
	dt,
	ft,
	pt,
	mt,
	J,
	Y,
	X,
	Z,
	ht,
	gt,
	_t,
	vt,
	yt,
	bt,
	xt,
	St,
	Q,
	Ct,
	wt,
	Tt,
	Et,
	Dt,
	Ot,
	kt = e(() => {
		for (let e in (v(),
		Ne(),
		Fe(),
		Le(),
		U(),
		W(),
		(rt = [``, `X`, `Y`, `Z`]),
		(it = [`translate`, `scale`, `rotate`, `skew`]),
		(at = {
			syntax: `<angle>`,
			initialValue: `0deg`,
			toDefaultUnit: (e) => e + `deg`,
		}),
		(ot = {
			translate: {
				syntax: `<length-percentage>`,
				initialValue: `0px`,
				toDefaultUnit: (e) => e + `px`,
			},
			rotate: at,
			scale: { syntax: `<number>`, initialValue: 1, toDefaultUnit: z },
			skew: at,
		}),
		(st = new Map()),
		(ct = (e) => `--motion-${e}`),
		(lt = [`x`, `y`, `z`]),
		it.forEach((e) => {
			rt.forEach((t) => {
				(lt.push(e + t), st.set(ct(e + t), ot[e]));
			});
		}),
		new Set(lt),
		(ut = (e) =>
			document.createElement(`div`).animate(e, { duration: 0.001 })),
		(dt = {
			cssRegisterProperty: () =>
				typeof CSS < `u` &&
				Object.hasOwnProperty.call(CSS, `registerProperty`),
			waapi: () =>
				Object.hasOwnProperty.call(Element.prototype, `animate`),
			partialKeyframes: () => {
				try {
					ut({ opacity: [1] });
				} catch {
					return !1;
				}
				return !0;
			},
			finished: () => !!ut({ opacity: [0, 1] }).finished,
		}),
		(ft = {}),
		(pt = {}),
		dt))
			pt[e] = () => (ft[e] === void 0 && (ft[e] = dt[e]()), ft[e]);
		((mt = { any: 0, all: 1 }),
			(J = new WeakMap()),
			(X = new Set()),
			(ht = 50),
			(gt = () => ({
				current: 0,
				offset: [],
				progress: 0,
				scrollLength: 0,
				targetOffset: 0,
				targetLength: 0,
				containerLength: 0,
				velocity: 0,
			})),
			(_t = () => ({ time: 0, x: gt(), y: gt() })),
			(vt = {
				x: { length: `Width`, position: `Left` },
				y: { length: `Height`, position: `Top` },
			}),
			(yt = {
				Enter: [
					[0, 1],
					[1, 1],
				],
				Exit: [
					[0, 0],
					[1, 0],
				],
				Any: [
					[1, 0],
					[0, 1],
				],
				All: [
					[0, 0],
					[1, 1],
				],
			}),
			(bt = { start: 0, center: 0.5, end: 1 }),
			(xt = [0, 0]),
			(St = { x: 0, y: 0 }),
			(Q = new WeakMap()),
			(Ct = new WeakMap()),
			(wt = new WeakMap()),
			(Tt = (e) => (e === document.documentElement ? l : e)),
			(Et = {
				isActive: (e) => !!e.inView,
				subscribe: (
					e,
					{ enable: t, disable: n },
					{ inViewOptions: r = {} },
				) => {
					let { once: i } = r;
					return G(
						e,
						(r) => {
							if ((t(), nt(e, `viewenter`, r), !i))
								return (t) => {
									(n(), nt(e, `viewleave`, t));
								};
						},
						Ie(r, [`once`]),
					);
				},
			}),
			(Dt = (e, t, n) => (r) => {
				(!r.pointerType || r.pointerType === `mouse`) &&
					(n(), tt(e, t, r));
			}),
			(Ot = {
				inView: Et,
				hover: {
					isActive: (e) => !!e.hover,
					subscribe: (e, { enable: t, disable: n }) => {
						let r = Dt(e, `hoverstart`, t),
							i = Dt(e, `hoverend`, n);
						return (
							e.addEventListener(`pointerenter`, r),
							e.addEventListener(`pointerleave`, i),
							() => {
								(e.removeEventListener(`pointerenter`, r),
									e.removeEventListener(`pointerleave`, i));
							}
						);
					},
				},
				press: {
					isActive: (e) => !!e.press,
					subscribe: (e, { enable: t, disable: n }) => {
						let r = (t) => {
								(n(),
									tt(e, `pressend`, t),
									l.removeEventListener(`pointerup`, r));
							},
							i = (n) => {
								(t(),
									tt(e, `pressstart`, n),
									l.addEventListener(`pointerup`, r));
							};
						return (
							e.addEventListener(`pointerdown`, i),
							() => {
								(e.removeEventListener(`pointerdown`, i),
									l.removeEventListener(`pointerup`, r));
							}
						);
					},
				},
			}),
			[...Object.keys(Ot)]);
	}),
	At,
	jt = e(() => {
		At = (e, t, n) => Math.min(Math.max(n, e), t);
	});
function Mt([e, t]) {
	return e + (100 - e) * (t / 100) * 0.5;
}
function Nt(e, t, { edgeOpacity: n, moreItems: r, buttonRef: i }, a) {
	r.current && e === t
		? ((r.current = !1),
			te(n, 1, a),
			i.current?.setAttribute(`disabled`, ``))
		: !r.current &&
			e !== t &&
			((r.current = !0),
			te(n, 0, a),
			i.current?.removeAttribute(`disabled`));
}
function Pt(e, t) {
	let n = rUseRef(e),
		r = b(n.current ? 0 : 1),
		i = y(r, [0, 1], [t || 0, 1]),
		a = y(r, (e) => 1 - e),
		o = rUseRef(null),
		s = y(a, (e) => (e > 0.2 ? `auto` : `none`)),
		c = y(s, (e) => (e === `auto` ? `pointer` : `default`));
	return {
		moreItems: n,
		fadeOpacity: i,
		edgeOpacity: r,
		buttonStyle: { ...Yt, opacity: a, pointerEvents: s, cursor: c },
		buttonRef: o,
	};
}
function Ft({ element: e }) {
	e.setAttribute(`aria-hidden`, !1);
}
function It(e, t, n, r, i, a, o, c) {
	rUseEffect(() => {
		if (!e.current) return;
		let s = et(
				(e) => {
					((r.current = e[t]),
						e[t].current * n === a.current && (a.current = void 0),
						i(e[t].current),
						o());
				},
				{ container: e.current, axis: t },
			),
			l = Ge(e.current, () => {
				(c(), o());
			});
		return () => {
			(s(), l());
		};
	}, [o, c]);
}
function Lt({
	slots: e,
	gap: r,
	axis: a,
	align: c,
	sizingObject: l,
	fadeObject: f,
	arrowObject: p,
	snapObject: g,
	progressObject: _,
	ariaLabel: v,
	borderRadius: S,
	effectsObject: te,
	...ne
}) {
	let C = e?.filter(Boolean),
		w = n.count(C),
		T = oe.current() === oe.canvas,
		E = Vt(),
		D = a && E === `rtl` ? -1 : 1,
		re = se(ne),
		O = a ? `x` : `y`,
		{
			fadeContent: ie,
			fadeWidth: k,
			fadeInset: A,
			fadeTransition: j,
			fadeAlpha: M,
		} = f,
		{ snap: ae, snapEdge: N, fluid: ce } = g,
		{
			widthType: le,
			widthInset: ue,
			widthColumns: de,
			heightType: fe,
			heightInset: pe,
			heightRows: me,
		} = l,
		{
			showScrollbar: he,
			showProgressDots: ge,
			dotSize: _e,
			dotsInset: ve,
			dotsRadius: ye,
			dotsPadding: be,
			dotsGap: xe,
			dotsFill: Se,
			dotsBackground: Ce,
			dotsActiveOpacity: we,
			dotsOpacity: P,
			dotsBlur: Te,
		} = _,
		{
			showMouseControls: Ee,
			arrowSize: F,
			arrowRadius: De,
			arrowFill: Oe,
			leftArrow: ke,
			rightArrow: Ae,
			arrowPadding: je,
		} = p,
		I = rUseRef(void 0),
		L = rUseRef(void 0),
		R = b(0),
		Me = (e) => {
			R.set(L.current === void 0 ? e : L.current);
		},
		z = Pt(E === `rtl`, M),
		B = Pt(E !== `rtl`, M),
		V = b(A * 0.5),
		Ne = y(V, (e) => 100 - e),
		Pe = b(k),
		Fe = y([V, Pe], Mt),
		Ie = y(Fe, (e) => 100 - e),
		Le = b(a ? `right` : `bottom`),
		H = y(
			[Le, z.fadeOpacity, V, Fe, B.fadeOpacity, Ne, Ie],
			(e) =>
				`linear-gradient(to ${e[0]}, rgb(0, 0, 0, ${e[1]}) ${e[2]}%, rgb(0, 0, 0, 1) ${e[3]}%, rgba(0, 0, 0, 1) ${e[6]}%, rgb(0, 0, 0, ${e[4]}) ${e[5]}%)`,
		),
		U = rUseRef(null),
		[W, Re] = rUseState(T ? 4 : 1),
		G = { scrollSnapAlign: N, flexShrink: 0 },
		K = {};
	(c === `stretch` &&
		(a
			? ((K.height = `100%`), (G.height = `auto`))
			: ((K.width = `100%`), (G.width = `auto`))),
		ce || (G.scrollSnapStop = `always`),
		le === `stretch`
			? ((G.width = `calc(100% - ${ue || 0}px)`), (K.width = `100%`))
			: le === `columns` &&
				((G.width = `calc(${100 / de}% - ${r}px + ${r / de}px)`),
				(K.width = `100%`)),
		fe === `stretch`
			? ((G.height = `calc(100% - ${pe || 0}px)`), (K.height = `100%`))
			: fe === `rows` &&
				((G.height = `calc(${100 / me}% - ${r}px + ${r / me}px)`),
				(K.height = `100%`)));
	let ze = T ? `hidden` : `auto`,
		Be = { ...qt, padding: re },
		Ve = {
			...Jt,
			gap: r,
			alignItems: c,
			flexDirection: a ? `row` : `column`,
			overflowX: a ? ze : `hidden`,
			overflowY: a ? `hidden` : ze,
			scrollSnapType: ae ? `${O} mandatory` : void 0,
			WebkitOverflowScrolling: `touch`,
			WebkitMaskImage: ie ? H : void 0,
			maskImage: ie ? H : void 0,
			borderRadius: S,
		},
		He = { "aria-roledescription": `carousel` };
	v && (He[`aria-title`] = v);
	let Ue = {};
	if (
		(c === `stretch` &&
			((Ue[`aria-role`] = `group`),
			(Ue[`aria-roledescription`] = `slide`)),
		!T)
	) {
		let e = rUseRef([]);
		It(
			U,
			O,
			D,
			I,
			Me,
			L,
			o(() => {
				if (!I.current) return;
				let {
						targetLength: t,
						containerLength: n,
						scrollLength: r,
					} = I.current,
					i = R.get();
				if (!t && !n) return;
				if (t > n) {
					(Nt(i * D, 0, z, j), Nt(i * D, r, B, j));
					for (let t = 0; t < e.current.length; t++) {
						let { element: r, start: a, end: o } = e.current[t],
							s = o < i || a > i + n;
						(r.setAttribute(`aria-hidden`, s),
							s
								? r
										.querySelectorAll(`button,a`)
										.forEach((e) => {
											let t = e.getAttribute(`tabIndex`);
											(t && (e.dataset.origTabIndex = t),
												(e.tabIndex = -1));
										})
								: r
										.querySelectorAll(`button,a`)
										.forEach((e) => {
											let t = e.dataset.origTabIndex;
											t
												? (e.tabIndex = t)
												: e.removeAttribute(`tabIndex`);
										}));
					}
				} else (Nt(0, 0, z, j), Nt(1, 1, B, j), e.current.forEach(Ft));
				let a = Math.ceil(t / n);
				isNaN(a) || (a / w > 0.65 && (a = w), a !== W && Re(a));
			}, [W]),
			o(() => {
				U.current &&
					(e.current = Array.from(U.current.children).map((e) =>
						a
							? {
									element: e,
									start: e.offsetLeft,
									end: e.offsetLeft + e.offsetWidth,
								}
							: {
									element: e,
									start: e.offsetTop,
									end: e.offsetTop + e.offsetHeight,
								},
					));
			}, []),
		);
	}
	T &&
		(rUseEffect(() => {
			Pe.set(k);
		}, [k]),
		rUseEffect(() => {
			V.set(A * 0.5);
		}, [A]),
		rUseEffect(() => {
			Le.set(a ? `right` : `bottom`);
		}, [a]));
	let We = ee(),
		Ge = (e) => {
			L.current = e;
			let t = a ? { left: e } : { top: e };
			U.current.scrollTo({ ...t, behavior: We ? `auto` : `smooth` });
		},
		Ke = (e, t = 0) => {
			if (!I.current) return;
			let { scrollLength: n } = I.current,
				r = n / (W - 1);
			Ge((e * r + t * r) * D);
		},
		qe = (e) => () => {
			if (!I.current) return;
			let { containerLength: t, scrollLength: n } = I.current,
				r = R.get() * D,
				i = n / W,
				a = At(0, W - 1, Math.floor(r / i)),
				o = 0;
			(ae && (N === `start` || N === `end`) && e >= 1 && (o = 0.4),
				Ke(a + e, o));
		};
	if (w === 0) return rJsx(zt, {});
	let Je = [],
		q = {};
	if (W > 1 && ge && !he) {
		for (let e = 0; e < W; e++) {
			let t = (T && !e) || !1;
			Je.push(
				rJsx(Rt, {
					dotStyle: {
						...Qt,
						width: _e,
						height: _e,
						backgroundColor: Se,
					},
					buttonStyle: Yt,
					isSelected: t,
					selectedOpacity: we,
					opacity: P,
					onClick: () => u(() => Ke(e)),
					currentScroll: R,
					scrollInfo: I,
					total: W,
					index: e,
					gap: xe,
					padding: be,
					axis: a,
					directionModifier: D,
				}),
			);
		}
		Te && (q.backdropFilter = q.WebkitBackdropFilter = `blur(${Te}px)`);
	}
	let Ye =
			ke ||
			`/assets/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg`,
		Xe =
			Ae ||
			`/assets/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg`;
	return rJsxs(`section`, {
		style: Be,
		...He,
		children: [
			rJsx(x.ul, {
				ref: U,
				style: Ve,
				className: `framer--carousel`,
				"data-show-scrollbar": he,
				"aria-atomic": `false`,
				"aria-live": `polite`,
				onWheel: () => (L.current = void 0),
				children: n.map(C, (e, n) =>
					rJsx(Ht, {
						inherit: `id`,
						children: rJsx(`li`, {
							style: G,
							...Ue,
							"aria-label": `${n + 1} of ${w}`,
							children: t(e, {
								...e.props,
								style: { ...e.props?.style, ...K },
							}),
						}),
					}),
				),
			}),
			rJsxs(`fieldset`, {
				style: {
					...Xt,
					padding: je,
					display: `flex`,
					flexDirection: a ? `row` : `column`,
				},
				"aria-label": `Carousel pagination controls`,
				className: `framer--carousel-controls`,
				"data-show-mouse-controls": Ee,
				children: [
					rJsx(x.button, {
						ref: z.buttonRef,
						type: `button`,
						style: {
							...z.buttonStyle,
							backgroundColor: Oe,
							width: F,
							height: F,
							borderRadius: De,
							rotate: a ? 0 : 90,
							display: Ee ? `block` : `none`,
						},
						onClick: qe(-1),
						"aria-label": `Previous`,
						whileTap: { scale: 0.9 },
						transition: { duration: 0.05 },
						children: rJsx(`img`, {
							decoding: `async`,
							alt: ``,
							width: F,
							height: F,
							src: E === `rtl` && a ? Xe : Ye,
						}),
					}),
					rJsx(x.button, {
						ref: B.buttonRef,
						type: `button`,
						style: {
							...B.buttonStyle,
							backgroundColor: Oe,
							width: F,
							height: F,
							borderRadius: De,
							rotate: a ? 0 : 90,
							display: Ee ? `block` : `none`,
						},
						onClick: qe(1),
						"aria-label": `Next`,
						whileTap: { scale: 0.9 },
						transition: { duration: 0.05 },
						children: rJsx(`img`, {
							decoding: `async`,
							alt: ``,
							width: F,
							height: F,
							src: E === `rtl` && a ? Ye : Xe,
						}),
					}),
					Je.length > 1
						? rJsx(`div`, {
								style: {
									...Zt,
									left: a ? `50%` : ve,
									top: a ? `unset` : `50%`,
									transform: a
										? `translateX(-50%)`
										: `translateY(-50%)`,
									flexDirection: a ? `row` : `column`,
									bottom: a ? ve : `unset`,
									borderRadius: ye,
									backgroundColor: Ce,
									...q,
								},
								children: Je,
							})
						: null,
				],
			}),
			rJsx(Bt, {}),
		],
	});
}
function Rt({
	currentScroll: e,
	scrollInfo: t,
	isSelected: n,
	selectedOpacity: r,
	opacity: i,
	total: a,
	index: o,
	dotStyle: s,
	buttonStyle: c,
	gap: l,
	padding: u,
	axis: f,
	directionModifier: p,
	...m
}) {
	let h = y(e, (e) => {
			if (!t.current?.scrollLength) return o === 0 ? r : i;
			let n = e * p,
				s = t.current?.scrollLength / a,
				c = s * o,
				l = c + s;
			return n >= c && (o < a - 1 ? n < l : o === a - 1) ? r : i;
		}),
		g = l / 2,
		_ = !f && o > 0 ? g : u,
		v = !f && o !== a - 1 ? g : u,
		ee = f && o !== a - 1 ? g : u,
		b = f && o > 0 ? g : u;
	return rJsx(`button`, {
		"aria-label": `Scroll to page ${o + 1}`,
		type: `button`,
		...m,
		style: { ...c, padding: `${_}px ${ee}px ${v}px ${b}px` },
		children: rJsx(x.div, { style: { ...s, opacity: h } }),
	});
}
function zt() {
	return rJsxs(`section`, {
		style: Ut,
		children: [
			rJsx(`div`, { style: Wt, children: `✨` }),
			rJsx(`p`, { style: Gt, children: `Connect to Content` }),
			rJsx(`p`, {
				style: Kt,
				children: `Add layers or components to swipe between.`,
			}),
		],
	});
}
function Bt() {
	return rJsx(`div`, {
		dangerouslySetInnerHTML: {
			__html: `<style>@media (pointer: fine) {
                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar {
                    display: none;
                    -webkit-appearance: none;
                    width: 0;
                    height: 0;
                }

                .framer--carousel[data-show-scrollbar="false"]::-webkit-scrollbar-thumb {
                    display: none;
                }

                .framer--carousel[data-show-scrollbar="false"] {
                    scrollbar-width: none;
                    scrollbar-height: none;
                }
            }</style>`,
		},
	});
}
function Vt() {
	let [e, t] = rUseState(`ltr`);
	return (
		rUseEffect(() => {
			l?.document?.documentElement?.dir === `rtl` && t(`rtl`);
		}, []),
		e
	);
}
function Ht({ children: e, ...t }) {
	return rJsx(ne, { id: rUseId(), ...t, children: e });
}
var Ut,
	Wt,
	Gt,
	Kt,
	qt,
	Jt,
	Yt,
	Xt,
	Zt,
	Qt,
	$t = e(() => {
		(v(),
			rUseDeferredValue(),
			c(),
			A(),
			kt(),
			jt(),
			C(),
			le(),
			(Lt.defaultProps = {
				gap: 10,
				padding: 10,
				progressObject: { showScrollbar: !1, showProgressDots: !1 },
				sizingObject: {
					widthType: `auto`,
					widthOffset: 0,
					widthColumns: 2,
					heightType: `auto`,
					heightOffset: 0,
					heightRows: 2,
				},
				borderRadius: 0,
			}),
			w(Lt, {
				slots: {
					type: j.Array,
					title: `Children`,
					control: { type: j.ComponentInstance },
				},
				axis: {
					type: j.Enum,
					title: `Direction`,
					options: [!0, !1],
					optionIcons: [`direction-horizontal`, `direction-vertical`],
					displaySegmentedControl: !0,
				},
				align: {
					type: j.Enum,
					title: `Align`,
					options: [`flex-start`, `center`, `flex-end`],
					optionIcons: {
						axis: {
							true: [`align-top`, `align-middle`, `align-bottom`],
							false: [
								`align-left`,
								`align-center`,
								`align-right`,
							],
						},
					},
					defaultValue: `center`,
					displaySegmentedControl: !0,
				},
				gap: { type: j.Number, title: `Gap` },
				...ce,
				sizingObject: {
					type: j.Object,
					title: `Sizing`,
					controls: {
						widthType: {
							type: j.Enum,
							title: `Width`,
							options: [`auto`, `stretch`, `columns`],
							optionTitles: [`Auto`, `Stretch`, `Columns`],
							defaultValue: `auto`,
						},
						widthInset: {
							type: j.Number,
							title: `Inset`,
							min: 0,
							max: 500,
							defaultValue: 0,
							hidden: (e) => e.widthType !== `stretch`,
						},
						widthColumns: {
							type: j.Number,
							title: `Columns`,
							min: 1,
							max: 10,
							defaultValue: 2,
							displayStepper: !0,
							hidden: (e) => e.widthType !== `columns`,
						},
						heightType: {
							type: j.Enum,
							title: `Height`,
							options: [`auto`, `stretch`, `rows`],
							optionTitles: [`Auto`, `Stretch`, `Rows`],
							defaultValue: `auto`,
						},
						heightInset: {
							type: j.Number,
							title: `Inset`,
							min: 0,
							max: 500,
							defaultValue: 0,
							hidden: (e) => e.heightType !== `stretch`,
						},
						heightRows: {
							type: j.Number,
							title: `Rows`,
							min: 1,
							max: 10,
							defaultValue: 2,
							displayStepper: !0,
							hidden: (e) => e.heightType !== `rows`,
						},
					},
				},
				snapObject: {
					type: j.Object,
					title: `Snapping`,
					controls: {
						snap: { type: j.Boolean, title: `Enable` },
						snapEdge: {
							type: j.Enum,
							title: `Edge`,
							options: [`start`, `center`, `end`],
							optionTitles: [`Left`, `Center`, `Right`],
							defaultValue: `center`,
							hidden: (e) => !e.snap,
						},
						fluid: {
							type: j.Boolean,
							title: `Fluid`,
							defaultValue: !1,
							hidden: (e) => !e.snap,
						},
					},
				},
				fadeObject: {
					type: j.Object,
					title: `Fading`,
					controls: {
						fadeContent: {
							type: j.Boolean,
							title: `Enable`,
							defaultValue: !1,
						},
						fadeWidth: {
							type: j.Number,
							title: `Width`,
							defaultValue: 25,
							min: 0,
							max: 100,
							unit: `%`,
							hidden: (e) => !e.fadeContent,
						},
						fadeInset: {
							type: j.Number,
							title: `Inset`,
							defaultValue: 0,
							min: 0,
							max: 100,
							unit: `%`,
							hidden: (e) => !e.fadeContent,
						},
						fadeAlpha: {
							type: j.Number,
							title: `Opacity`,
							hidden: (e) => !e.fadeContent,
							min: 0,
							max: 1,
							step: 0.05,
							defaultValue: 0,
						},
						fadeTransition: {
							type: j.Transition,
							title: `Transition`,
							hidden: (e) => !e.fadeContent,
						},
					},
				},
				progressObject: {
					type: j.Object,
					title: `Progress`,
					controls: {
						showScrollbar: {
							type: j.Boolean,
							title: `Scroll Bar`,
							defaultValue: !1,
						},
						showProgressDots: {
							type: j.Boolean,
							title: `Dots`,
							defaultValue: !1,
							hidden: (e) => e.showScrollbar,
						},
						dotSize: {
							type: j.Number,
							title: `Size`,
							min: 1,
							max: 100,
							defaultValue: 10,
							displayStepper: !0,
							hidden: (e) =>
								!e.showProgressDots || e.showScrollbar,
						},
						dotsInset: {
							type: j.Number,
							title: `Inset`,
							min: 0,
							max: 100,
							defaultValue: 10,
							displayStepper: !0,
							hidden: (e) =>
								!e.showProgressDots || e.showScrollbar,
						},
						dotsGap: {
							type: j.Number,
							title: `Gap`,
							min: 0,
							max: 100,
							defaultValue: 10,
							displayStepper: !0,
							hidden: (e) =>
								!e.showProgressDots || e.showScrollbar,
						},
						dotsPadding: {
							type: j.Number,
							title: `Padding`,
							min: 0,
							max: 100,
							defaultValue: 10,
							displayStepper: !0,
							hidden: (e) =>
								!e.showProgressDots || e.showScrollbar,
						},
						dotsFill: {
							type: j.Color,
							title: `Fill`,
							defaultValue: `#fff`,
							hidden: (e) =>
								!e.showProgressDots || e.showScrollbar,
						},
						dotsBackground: {
							type: j.Color,
							title: `Backdrop`,
							defaultValue: `rgba(0,0,0,0.2)`,
							hidden: (e) =>
								!e.showProgressDots || e.showScrollbar,
						},
						dotsRadius: {
							type: j.Number,
							title: `Radius`,
							min: 0,
							max: 200,
							defaultValue: 50,
							hidden: (e) =>
								!e.showProgressDots || e.showScrollbar,
						},
						dotsOpacity: {
							type: j.Number,
							title: `Opacity`,
							min: 0,
							max: 1,
							defaultValue: 0.5,
							step: 0.1,
							displayStepper: !0,
							hidden: (e) =>
								!e.showProgressDots || e.showScrollbar,
						},
						dotsActiveOpacity: {
							type: j.Number,
							title: `Current`,
							min: 0,
							max: 1,
							defaultValue: 1,
							step: 0.1,
							displayStepper: !0,
							hidden: (e) =>
								!e.showProgressDots || e.showScrollbar,
						},
						dotsBlur: {
							type: j.Number,
							title: `Blur`,
							min: 0,
							max: 50,
							defaultValue: 4,
							step: 1,
							hidden: (e) =>
								!e.showProgressDots || e.showScrollbar,
						},
					},
				},
				arrowObject: {
					type: j.Object,
					title: `Arrows`,
					controls: {
						showMouseControls: {
							type: j.Boolean,
							title: `Show`,
							defaultValue: !0,
						},
						arrowFill: {
							type: j.Color,
							title: `Fill`,
							defaultValue: `rgba(0,0,0,0.2)`,
							hidden: (e) => !e.showMouseControls,
						},
						leftArrow: {
							type: j.Image,
							title: `Previous`,
							hidden: (e) => !e.showMouseControls,
						},
						rightArrow: {
							type: j.Image,
							title: `Next`,
							hidden: (e) => !e.showMouseControls,
						},
						arrowSize: {
							type: j.Number,
							title: `Size`,
							min: 0,
							max: 200,
							displayStepper: !0,
							defaultValue: 40,
							hidden: (e) => !e.showMouseControls,
						},
						arrowRadius: {
							type: j.Number,
							title: `Radius`,
							min: 0,
							max: 500,
							defaultValue: 40,
							hidden: (e) => !e.showMouseControls,
						},
						arrowPadding: {
							type: j.Number,
							title: `Inset`,
							min: 0,
							max: 100,
							defaultValue: 20,
							displayStepper: !0,
							hidden: (e) => !e.showMouseControls,
						},
					},
				},
				ariaLabel: {
					type: j.String,
					title: `Aria Label`,
					placeholder: `Movies...`,
				},
				borderRadius: {
					type: j.Number,
					title: `Radius`,
					min: 0,
					max: 500,
					displayStepper: !0,
					defaultValue: 0,
				},
			}),
			(Ut = {
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
			(Wt = { fontSize: 32, marginBottom: 10 }),
			(Gt = {
				margin: 0,
				marginBottom: 10,
				fontWeight: 600,
				textAlign: `center`,
			}),
			(Kt = {
				margin: 0,
				opacity: 0.7,
				maxWidth: 130,
				lineHeight: 1.5,
				textAlign: `center`,
			}),
			(qt = {
				display: `flex`,
				overflow: `hidden`,
				width: `100%`,
				height: `100%`,
				position: `relative`,
			}),
			(Jt = {
				padding: 0,
				margin: 0,
				listStyle: `none`,
				position: `relative`,
				display: `flex`,
				flex: `1 1 100%`,
				width: `100%`,
				height: `100%`,
			}),
			(Yt = {
				border: `none`,
				display: `flex`,
				placeContent: `center`,
				placeItems: `center`,
				overflow: `hidden`,
				background: `transparent`,
				cursor: `pointer`,
				margin: 0,
				padding: 0,
			}),
			(Xt = {
				display: `flex`,
				justifyContent: `space-between`,
				alignItems: `center`,
				position: `absolute`,
				top: 0,
				left: 0,
				right: 0,
				bottom: 0,
				pointerEvents: `none`,
				border: 0,
				padding: 0,
				margin: 0,
			}),
			(Zt = {
				display: `flex`,
				placeContent: `center`,
				placeItems: `center`,
				overflow: `hidden`,
				position: `absolute`,
				pointerEvents: `auto`,
			}),
			(Qt = {
				borderRadius: `50%`,
				background: `white`,
				cursor: `pointer`,
				border: `none`,
				placeContent: `center`,
				placeItems: `center`,
				padding: 0,
			}));
	});
function en(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var tn,
	nn,
	rn,
	an,
	on,
	sn,
	cn,
	ln,
	un,
	$,
	dn,
	fn = e(() => {
		(rUseDeferredValue(),
			A(),
			C(),
			c(),
			(tn = [`MSDybJ82G`, `oZBUbuNQW`, `C4ti1Zm4o`, `o1tTqkD7S`]),
			(nn = `framer-2pLhZ`),
			(rn = {
				C4ti1Zm4o: `framer-v-qdw09p`,
				MSDybJ82G: `framer-v-133arvs`,
				o1tTqkD7S: `framer-v-1uzsk5e`,
				oZBUbuNQW: `framer-v-1awf2lm`,
			}),
			(an = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(on = ({ value: e, children: t }) => {
				let n = rUseContext(S),
					r = e ?? n.transition,
					i = rUseMemo(() => ({ ...n, transition: r }), [JSON.stringify(r)]);
				return rJsx(S.Provider, { value: i, children: t });
			}),
			(sn = x.create(r)),
			(cn = {
				"Arrow - Up Right - Small": `o1tTqkD7S`,
				"Arrow - Up Right": `C4ti1Zm4o`,
				"Scroll - Horizontal": `MSDybJ82G`,
				"Scroll - Vertical": `oZBUbuNQW`,
			}),
			(ln = ({ height: e, id: t, width: n, ...r }) => ({
				...r,
				variant: cn[r.variant] ?? r.variant ?? `MSDybJ82G`,
			})),
			(un = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			($ = D(
				rForwardRef(function (e, t) {
					let n = rUseRef(null),
						r = t ?? n,
						i = rUseId(),
						{ activeLocale: a, setLocale: o } = N();
					ae();
					let {
							style: s,
							className: c,
							layoutId: l,
							variant: u,
							...f
						} = ln(e),
						{
							baseVariant: p,
							classNames: g,
							clearLoadingGesture: v,
							gestureHandlers: ee,
							gestureVariant: y,
							isLoading: b,
							setGestureState: S,
							setVariant: te,
							variants: C,
						} = ie({
							cycleOrder: tn,
							defaultVariant: `MSDybJ82G`,
							ref: r,
							variant: u,
							variantClassNames: rn,
						}),
						w = un(e, C),
						E = O(nn),
						D = () => ![`C4ti1Zm4o`, `o1tTqkD7S`].includes(p),
						re = () => p === `C4ti1Zm4o`,
						k = () => p === `o1tTqkD7S`;
					return rJsx(ne, {
						id: l ?? i,
						children: rJsx(sn, {
							animate: C,
							initial: !1,
							children: rJsx(on, {
								value: an,
								children: rJsxs(x.div, {
									...f,
									...ee,
									className: O(E, `framer-133arvs`, c, g),
									layoutDependency: w,
									layoutId: `MSDybJ82G`,
									ref: r,
									style: { rotate: 0, ...s },
									variants: {
										C4ti1Zm4o: { rotate: 0 },
										o1tTqkD7S: { rotate: 0 },
										oZBUbuNQW: { rotate: 90 },
									},
									...en(
										{
											C4ti1Zm4o: {
											},
											o1tTqkD7S: {
											},
											oZBUbuNQW: {
											},
										},
										p,
										y,
									),
									children: [
										D() &&
											rJsxs(T, {
												className: `framer-1k8tops`,
												layoutDependency: w,
												layoutId: `xB4zGfQmL`,
												opacity: 1,
												requiresOverflowVisible: !1,
												svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.309 25.995" overflow="visible"><g><path d="M 24.115 13.177 L 24.113 13.192 C 24.108 13.216 24.098 13.237 24.092 13.26 C 24.085 13.284 24.08 13.309 24.071 13.332 C 24.034 13.419 23.983 13.499 23.918 13.568 L 23.891 13.597 L 19.586 17.902 C 19.281 18.186 18.806 18.178 18.511 17.883 C 18.216 17.588 18.208 17.113 18.492 16.808 L 21.483 13.816 L 8.615 13.816 L 11.605 16.807 C 11.889 17.112 11.881 17.587 11.586 17.882 C 11.291 18.177 10.816 18.185 10.511 17.901 L 6.207 13.596 C 6.197 13.588 6.189 13.578 6.181 13.568 C 6.116 13.499 6.064 13.42 6.028 13.333 C 6.018 13.31 6.013 13.288 6.007 13.264 C 6 13.24 5.991 13.217 5.986 13.192 C 5.984 13.188 5.984 13.182 5.983 13.177 C 5.975 13.133 5.97 13.088 5.969 13.042 L 5.97 13.04 L 5.97 13.037 C 5.97 12.833 6.051 12.637 6.196 12.493 L 10.511 8.178 C 10.816 7.894 11.291 7.902 11.586 8.197 C 11.881 8.492 11.889 8.967 11.605 9.272 L 8.612 12.268 L 21.487 12.268 L 18.491 9.272 C 18.207 8.967 18.215 8.492 18.51 8.197 C 18.805 7.902 19.28 7.894 19.585 8.178 L 23.9 12.493 C 24.08 12.672 24.16 12.928 24.115 13.177 Z" fill="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path><path d="M 30.309 12.998 C 30.309 20.177 24.49 25.995 17.311 25.995 L 12.996 25.995 C 5.819 25.996 0.001 20.177 0 12.999 C -0.001 5.82 5.819 0 12.997 0 L 17.312 0 C 24.49 0 30.309 5.819 30.309 12.998 Z M 28.761 12.998 C 28.761 6.675 23.635 1.548 17.311 1.548 L 12.996 1.548 C 6.674 1.548 1.547 6.675 1.547 12.998 C 1.547 19.321 6.674 24.447 12.997 24.447 L 17.312 24.447 C 23.635 24.447 28.76 19.321 28.761 12.998 Z" fill="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></g></svg>`,
												withExternalLayout: !0,
												children: [
													rJsx(T, {
														className: `framer-1d7ffmm`,
														layoutDependency: w,
														layoutId: `KAfLGDjF5`,
														opacity: 1,
														requiresOverflowVisible:
															!1,
														svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 18.158 10.139" overflow="visible"><path d="M 18.146 5.207 L 18.144 5.221 C 18.139 5.245 18.13 5.267 18.123 5.29 C 18.116 5.313 18.111 5.339 18.102 5.362 C 18.066 5.449 18.014 5.529 17.949 5.597 L 17.922 5.627 L 13.618 9.932 C 13.313 10.216 12.837 10.208 12.542 9.913 C 12.248 9.618 12.239 9.143 12.523 8.837 L 15.514 5.846 L 2.646 5.846 L 5.636 8.836 C 5.92 9.141 5.912 9.617 5.617 9.912 C 5.322 10.206 4.847 10.215 4.542 9.931 L 0.238 5.626 C 0.228 5.618 0.22 5.608 0.212 5.597 C 0.147 5.529 0.095 5.45 0.059 5.363 C 0.05 5.34 0.044 5.317 0.038 5.294 C 0.031 5.27 0.022 5.246 0.018 5.221 C 0.015 5.217 0.015 5.212 0.014 5.207 C 0.006 5.162 0.001 5.117 0 5.072 L 0.001 5.07 L 0.001 5.067 C 0.001 4.862 0.083 4.667 0.227 4.523 L 4.542 0.208 C 4.847 -0.076 5.322 -0.068 5.617 0.227 C 5.912 0.522 5.92 0.997 5.636 1.302 L 2.643 4.298 L 15.518 4.298 L 12.522 1.302 C 12.238 0.997 12.246 0.522 12.541 0.227 C 12.836 -0.068 13.311 -0.076 13.617 0.208 L 17.931 4.523 C 18.111 4.702 18.191 4.957 18.146 5.207 Z" fill="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
														withExternalLayout: !0,
													}),
													rJsxs(T, {
														className: `framer-1iwbmds`,
														layoutDependency: w,
														layoutId: `bSxwJUPvX`,
														opacity: 1,
														requiresOverflowVisible:
															!1,
														svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.309 25.995" overflow="visible"><path d="M 30.309 12.998 C 30.309 20.177 24.49 25.995 17.311 25.995 L 12.996 25.995 C 5.819 25.996 0.001 20.177 0 12.999 C -0.001 5.82 5.819 0 12.997 0 L 17.312 0 C 24.49 0 30.309 5.819 30.309 12.998 Z M 28.761 12.998 C 28.761 6.675 23.635 1.548 17.311 1.548 L 12.996 1.548 C 6.674 1.548 1.547 6.675 1.547 12.998 C 1.547 19.321 6.674 24.447 12.997 24.447 L 17.312 24.447 C 23.635 24.447 28.76 19.321 28.761 12.998 Z" fill="var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)) /* {&quot;name&quot;:&quot;White&quot;} */"></path></svg>`,
														withExternalLayout: !0,
														children: [
															rJsx(T, {
																className: `framer-1s6d5ud`,
																layoutDependency:
																	w,
																layoutId: `m0QGwwRDh`,
																opacity: 1,
																requiresOverflowVisible:
																	!1,
																svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 30.309 25.995" overflow="visible"><path d="M 30.309 12.998 C 30.309 20.177 24.49 25.995 17.311 25.995 L 12.996 25.995 C 5.819 25.996 0.001 20.177 0 12.999 C -0.001 5.82 5.819 0 12.997 0 L 17.312 0 C 24.49 0 30.309 5.819 30.309 12.998 Z" fill="transparent"></path></svg>`,
																withExternalLayout:
																	!0,
															}),
															rJsx(T, {
																className: `framer-x567ro`,
																layoutDependency:
																	w,
																layoutId: `cP9giTM6I`,
																opacity: 1,
																requiresOverflowVisible:
																	!1,
																svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 27.213 22.899" overflow="visible"><path d="M 27.213 11.45 C 27.213 5.126 22.087 0 15.764 0 L 11.449 0 C 5.126 0 0 5.126 0 11.45 C 0 17.772 5.126 22.899 11.45 22.899 L 15.765 22.899 C 22.087 22.899 27.212 17.772 27.213 11.45 Z" fill="transparent"></path></svg>`,
																withExternalLayout:
																	!0,
															}),
														],
													}),
												],
											}),
										re() &&
											rJsxs(T, {
												className: `framer-19rqjzb`,
												layoutDependency: w,
												layoutId: `ZUZ5gXsCP`,
												opacity: 1,
												requiresOverflowVisible: !0,
												svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.5 14.5" overflow="visible"></svg>`,
												withExternalLayout: !0,
												...en(
													{
														C4ti1Zm4o: {
															svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14.5 14.5" overflow="visible"><g><path d="M 3.5 0 L 14.5 0 L 14.5 11" fill="transparent" stroke-width="2" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path><path d="M 14 0.5 L 0 14.5" fill="transparent" stroke-width="2" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></g></svg>`,
														},
													},
													p,
													y,
												),
												children: [
													rJsx(T, {
														className: `framer-1ithlkh`,
														layoutDependency: w,
														layoutId: `C54NQdA0F`,
														opacity: 1,
														requiresOverflowVisible:
															!0,
														svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11 11" overflow="visible"><path d="M 0 0 L 11 0 L 11 11" fill="transparent" stroke-width="2" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>`,
														withExternalLayout: !0,
													}),
													rJsx(T, {
														className: `framer-1lxyrbc`,
														layoutDependency: w,
														layoutId: `zQl85_0dv`,
														opacity: 1,
														requiresOverflowVisible:
															!0,
														svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 14 14" overflow="visible"><path d="M 14 0 L 0 14" fill="transparent" stroke-width="2" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>`,
														withExternalLayout: !0,
													}),
												],
											}),
										k() &&
											rJsxs(T, {
												className: `framer-izp4uj`,
												layoutDependency: w,
												layoutId: `MtZAjiotZ`,
												opacity: 1,
												requiresOverflowVisible: !0,
												svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 12" overflow="visible"></svg>`,
												withExternalLayout: !0,
												...en(
													{
														o1tTqkD7S: {
															svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 12 11" overflow="visible"><g><path d="M 3 0 L 12 0 L 12 9" fill="transparent" stroke-width="2" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path><path d="M 11 1 L 0 12" fill="transparent" stroke-width="2" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></g></svg>`,
														},
													},
													p,
													y,
												),
												children: [
													rJsx(T, {
														className: `framer-1azbzyh`,
														layoutDependency: w,
														layoutId: `EXxbCq2WD`,
														opacity: 1,
														requiresOverflowVisible:
															!0,
														svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 9 9" overflow="visible"><path d="M 0 0 L 9 0 L 9 9" fill="transparent" stroke-width="2" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>`,
														withExternalLayout: !0,
													}),
													rJsx(T, {
														className: `framer-18zsxm7`,
														layoutDependency: w,
														layoutId: `v1REvAIJD`,
														opacity: 1,
														requiresOverflowVisible:
															!0,
														svg: `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 11 11" overflow="visible"><path d="M 11 0 L 0 11" fill="transparent" stroke-width="2" stroke="var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)) /* {&quot;name&quot;:&quot;Black&quot;} */"></path></svg>`,
														withExternalLayout: !0,
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
					`.framer-2pLhZ.framer-1fnlev3, .framer-2pLhZ .framer-1fnlev3 { display: block; }`,
					`.framer-2pLhZ.framer-133arvs { height: 32px; mix-blend-mode: difference; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 32px; }`,
					`.framer-2pLhZ .framer-1k8tops { height: 26px; left: 1px; position: absolute; top: 3px; width: 31px; }`,
					`.framer-2pLhZ .framer-1d7ffmm { height: 10px; left: 6px; position: absolute; top: 8px; width: 18px; }`,
					`.framer-2pLhZ .framer-1iwbmds, .framer-2pLhZ .framer-1s6d5ud { height: 26px; left: 0px; position: absolute; top: 0px; width: 31px; }`,
					`.framer-2pLhZ .framer-x567ro { height: 23px; left: 2px; position: absolute; top: 2px; width: 27px; }`,
					`.framer-2pLhZ .framer-19rqjzb { height: 15px; left: 9px; position: absolute; top: 9px; width: 15px; }`,
					`.framer-2pLhZ .framer-1ithlkh { height: 11px; left: 4px; position: absolute; top: 0px; width: 11px; }`,
					`.framer-2pLhZ .framer-1lxyrbc { height: 14px; left: 0px; position: absolute; top: 1px; width: 14px; }`,
					`.framer-2pLhZ .framer-izp4uj { height: 12px; left: 6px; position: absolute; top: 5px; width: 12px; }`,
					`.framer-2pLhZ .framer-1azbzyh { height: 9px; left: 3px; position: absolute; top: 0px; width: 9px; }`,
					`.framer-2pLhZ .framer-18zsxm7 { height: 11px; left: 0px; position: absolute; top: 1px; width: 11px; }`,
					`.framer-2pLhZ.framer-v-1awf2lm.framer-133arvs { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 32px); }`,
					`.framer-2pLhZ.framer-v-qdw09p.framer-133arvs { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 32px); mix-blend-mode: unset; }`,
					`.framer-2pLhZ.framer-v-1uzsk5e.framer-133arvs { aspect-ratio: 1 / 1; height: var(--framer-aspect-ratio-supported, 22px); mix-blend-mode: unset; width: 22px; }`,
					`.framer-2pLhZ.framer-v-1uzsk5e .framer-izp4uj { height: 11px; }`,
				],
				`framer-2pLhZ`,
			)),
			(dn = $),
			($.displayName = `Small - Cursors`),
			($.defaultProps = { height: 32, width: 32 }),
			w($, {
				variant: {
					options: [
						`MSDybJ82G`,
						`oZBUbuNQW`,
						`C4ti1Zm4o`,
						`o1tTqkD7S`,
					],
					optionTitles: [
						`Scroll - Horizontal`,
						`Scroll - Vertical`,
						`Arrow - Up Right`,
						`Arrow - Up Right - Small`,
					],
					title: `Variant`,
					type: j.Enum,
				},
			}),
			M($, [{ explicitInter: !0, fonts: [] }], {
				supportsExplicitInterCodegen: !0,
			}));
	}),
	pn,
	mn,
	hn,
	gn = e(() => {
		(A(),
			re.loadFonts([
				`GF;Space Mono-regular`,
				`GF;Space Mono-700`,
				`GF;Space Mono-700italic`,
				`GF;Space Mono-italic`,
			]),
			(pn = [
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
							family: `Space Mono`,
							source: `google`,
							style: `normal`,
							url: `https://fonts.gstatic.com/s/spacemono/v17/i7dMIFZifjKcF5UAWdDRaPpZYFeQHwyVd3U.woff2`,
							weight: `700`,
						},
						{
							family: `Space Mono`,
							source: `google`,
							style: `italic`,
							url: `https://fonts.gstatic.com/s/spacemono/v17/i7dSIFZifjKcF5UAWdDRYERE_FeaHi6QZ3WfYg.woff2`,
							weight: `700`,
						},
						{
							family: `Space Mono`,
							source: `google`,
							style: `italic`,
							url: `https://fonts.gstatic.com/s/spacemono/v17/i7dNIFZifjKcF5UAWdDRYER8RXi-EwWMbg.woff2`,
							weight: `400`,
						},
					],
				},
			]),
			(mn = [
				`.framer-50Zsm .framer-styles-preset-f8hg8j:not(.rich-text-wrapper), .framer-50Zsm .framer-styles-preset-f8hg8j.rich-text-wrapper h6 { --framer-font-family: "Space Mono", monospace; --framer-font-family-bold: "Space Mono", monospace; --framer-font-family-bold-italic: "Space Mono", monospace; --framer-font-family-italic: "Space Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 24px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0em; --framer-line-height: 30px; --framer-paragraph-spacing: 40px; --framer-text-alignment: start; --framer-text-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
			]),
			(hn = `framer-50Zsm`));
	});
export {
	dn as a,
	$t as c,
	Te as d,
	Ee as f,
	gn as i,
	kt as l,
	mn as n,
	fn as o,
	pn as r,
	Lt as s,
	hn as t,
	Ge as u,
};
