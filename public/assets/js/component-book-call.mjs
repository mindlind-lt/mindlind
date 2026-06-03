import { lazyInit as lazyInit } from "./rolldown-runtime.mjs";
import {
	F as t,
	I as rUseState,
	M as rUseMemo,
	N as i,
	P as rUseEffect,
	T as o,
	c as rJsx,
	g as rForwardRef,
	h as rMemo,
	j as rUseContext,
	k as rUseRef,
	l as rJsxs,
	o as rUseDeferredValue,
	y as rUseId,
} from "./react.mjs";
import {
	F as m,
	S as h,
	a as g,
	b as _,
	r as te,
	t as v,
} from "./motion.mjs";
import {
	A as y,
	E as b,
	Et as x,
	F as S,
	G as C,
	H as w,
	I as T,
	O as E,
	P as D,
	Tt as ne,
	U as O,
	W as k,
	X as A,
	a as j,
	f as re,
	k as M,
	lt as ie,
	mt as N,
	r as P,
	vt as F,
	w as ae,
} from "./framer.mjs";
import {
	a as I,
	d as oe,
	f as se,
	h as L,
	l as R,
	m as ce,
	o as z,
	p as le,
	u as B,
} from "./JFkcxmmKA.7qpzn-1x.mjs";
import { i as ue, n as V, r as H, t as U } from "./CD6KIdx_H.Ry_RqQUt.mjs";
import { i as W, n as G, r as K, t as de } from "./j9HsFBXUW.C6zqxVR-.mjs";
import { n as fe, t as q } from "./i_vIzrlMX.C1MfukuD.mjs";
import { n as pe, t as me } from "./psqHvE_iQ.DFa3l-m-.mjs";
var he,
	ge,
	_e,
	J,
	ve,
	ye = lazyInit(() => {
		(rUseDeferredValue(),
			A(),
			o(),
			(he = `var(--framer-icon-mask)`),
			(ge = rForwardRef((e, t) => {
				let { animated: n, layoutId: r, children: i, ...a } = e;
				return n
					? rJsx(h.img, { ...a, layoutId: r, ref: t })
					: rJsx(`img`, { ...a, ref: t });
			})),
			(_e = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(J = x(
				rForwardRef(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: a,
						...o
					} = _e(e);
					return rJsx(ge, {
						...o,
						alt: ``,
						className: D(`huge-logo`, r),
						layoutId: i,
						ref: t,
						src: `data:image/svg+xml,<svg width="300" height="43" viewBox="0 0 300 43" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0 43V0H10.206L16.202 40.7886H16.9674L22.9634 0H33.1694V43H28.194V2.21143H27.4285L21.4325 43H11.7369L5.74085 2.21143H4.97541V43H0Z" fill="white"/><path d="M41.4812 43V38.2086H52.9629V4.79143H41.4812V0H69.8027V4.79143H58.321V38.2086H69.8027V43H41.4812Z" fill="white"/><path d="M79.8368 43V0H90.553L103.438 40.7886H104.203V0H109.562V43H98.8454L85.9603 2.21143H85.1949V43H79.8368Z" fill="white"/><path d="M118.894 43V38.1471H122.721V4.79143H118.894V0H133.565C139.051 0 143.069 1.29 145.621 3.87C148.215 6.40905 149.512 10.4429 149.512 15.9714V27.0286C149.512 32.5571 148.215 36.6114 145.621 39.1914C143.069 41.7305 139.051 43 133.565 43H118.894ZM128.079 38.2086H132.8C135.394 38.2086 137.52 37.881 139.178 37.2257C140.879 36.5295 142.134 35.3419 142.942 33.6629C143.75 31.9838 144.154 29.6495 144.154 26.66V16.34C144.154 13.3505 143.75 11.0162 142.942 9.33714C142.134 7.6581 140.879 6.49095 139.178 5.83572C137.52 5.13952 135.394 4.79143 132.8 4.79143H128.079V38.2086Z" fill="white"/><path d="M158.844 43V0H164.202V38.2086H187.549V43H158.844Z" fill="white"/><path d="M191.969 43V38.2086H203.451V4.79143H191.969V0H220.291V4.79143H208.809V38.2086H220.291V43H191.969Z" fill="white"/><path d="M230.325 43V0H241.041L253.926 40.7886H254.692V0H260.05V43H249.333L236.448 2.21143H235.683V43H230.325Z" fill="white"/><path d="M269.382 43V38.1471H273.209V4.79143H269.382V0H284.053C289.539 0 293.558 1.29 296.109 3.87C298.703 6.40905 300 10.4429 300 15.9714V27.0286C300 32.5571 298.703 36.6114 296.109 39.1914C293.558 41.7305 289.539 43 284.053 43H269.382ZM278.567 38.2086H283.288C285.882 38.2086 288.008 37.881 289.666 37.2257C291.367 36.5295 292.622 35.3419 293.43 33.6629C294.238 31.9838 294.642 29.6495 294.642 26.66V16.34C294.642 13.3505 294.238 11.0162 293.43 9.33714C292.622 7.6581 291.367 6.49095 289.666 5.83572C288.008 5.13952 285.882 4.79143 283.288 4.79143H278.567V38.2086Z" fill="white"/></svg>`,
						style: { ...n },
					});
				}),
				[
					`.huge-logo { -webkit-mask: ${he}; aspect-ratio: 6.976744186046512; display: block; mask: ${he}; user-select: none; width: 300px; }`,
				],
				`huge-logo`,
			)),
			(J.displayName = `White Full Logo`),
			(ve = J));
	});
function be(e) {
	let {
		width: t,
		height: n,
		topLeft: r,
		topRight: i,
		bottomRight: a,
		bottomLeft: o,
		id: s,
		children: c,
		...l
	} = e;
	return l;
}
function Y(e) {
	return rJsx(Oe, { ...be(e) });
}
function xe(e) {
	let t = N(),
		n = rUseRef(!1),
		r = rUseRef(!1),
		a = i((t) => {
			if (!e.current) return;
			let n = (t === 1 ? 0.999 : t) * e.current.duration,
				r = Math.abs(e.current.currentTime - n) < 0.1;
			e.current.duration > 0 && !r && (e.current.currentTime = n);
		}, []);
	return {
		play: i(() => {
			let i = e.current;
			i &&
				((i.preload = `auto`),
				!(
					i.currentTime > 0 &&
					i.onplaying &&
					!i.paused &&
					!i.ended &&
					i.readyState >= i.HAVE_CURRENT_DATA
				) &&
					i &&
					!n.current &&
					t &&
					((n.current = !0),
					(r.current = !0),
					i
						.play()
						.catch((e) => {})
						.finally(() => (n.current = !1))));
		}, []),
		pause: i(() => {
			!e.current || n.current || (e.current.pause(), (r.current = !1));
		}, []),
		setProgress: a,
		isPlaying: r,
	};
}
function Se({
	playingProp: e,
	muted: t,
	loop: r,
	playsinline: i,
	controls: a,
}) {
	let [o] = rUseState(e),
		[s, c] = rUseState(!1);
	e !== o && !s && c(!0);
	let l = o && t && r && i && !a && !s,
		u;
	return ((u = l ? `on-viewport` : o ? `on-mount` : `no-autoplay`), u);
}
function Ce(e) {
	return e.charAt(0).toUpperCase() + e.slice(1);
}
function we(e) {
	return (e.match(/[A-Z]{2,}|[A-Z][a-z]+|[a-z]+|[A-Z]|\d+/gu) || [])
		.map(Ce)
		.join(` `);
}
var Te,
	Ee,
	De,
	Oe,
	ke,
	Ae = lazyInit(() => {
		(rUseDeferredValue(),
			A(),
			v(),
			I(),
			o(),
			(function (e) {
				((e.Fill = `fill`),
					(e.Contain = `contain`),
					(e.Cover = `cover`),
					(e.None = `none`),
					(e.ScaleDown = `scale-down`));
			})((Te ||= {})),
			(function (e) {
				((e.Video = `Upload`), (e.Url = `URL`));
			})((Ee ||= {})),
			(De = `/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`),
			(Oe = rMemo(function (e) {
				let {
						srcType: t = `URL`,
						srcUrl: n,
						srcFile: i = ``,
						posterEnabled: o = !1,
						controls: c = !1,
						playing: l = !0,
						loop: u = !0,
						muted: f = !0,
						playsinline: p = !0,
						restartOnEnter: ee = !1,
						objectFit: h = `cover`,
						backgroundColor: g = `rgba(0,0,0,0)`,
						radius: te = 0,
						volume: v = 25,
						startTime: y = 0,
						poster: b,
						playing: x,
						progress: S,
						onSeeked: C,
						onPause: w,
						onPlay: T,
						onEnd: E,
						onClick: D,
						onMouseEnter: ne,
						onMouseLeave: O,
						onMouseDown: k,
						onMouseUp: A,
					} = e,
					j = rUseRef(),
					re = se(),
					M = rUseRef(null),
					ie = rUseRef(null),
					N = B(),
					P = oe(),
					F = N || P === ae.export,
					I = R(e),
					L = F
						? `no-autoplay`
						: Se({
								playingProp: x,
								muted: f,
								loop: u,
								playsinline: p,
								controls: c,
							}),
					z = F ? !0 : m(j),
					ue = F ? !1 : m(j, { margin: `10%`, once: !0 }),
					V = y === 100 ? 99.9 : y,
					{ play: H, pause: U, setProgress: W, isPlaying: G } = xe(j);
				(rUseEffect(() => {
					F || (L !== `on-viewport` && (x ? H() : U()));
				}, [L, x]),
					rUseEffect(() => {
						F ||
							(z && x && L !== `no-autoplay` && H(),
							L === `on-viewport` && U());
					}, [L, z, x]),
					rUseEffect(() => {
						!N ||
							b ||
							o ||
							V ||
							!j.current ||
							(j.current.currentTime = 0.01);
					}, [o, b, V]));
				let K = rUseRef(!1);
				(rUseEffect(() => {
					if (!K.current) {
						K.current = !0;
						return;
					}
					W(
						((_(S) ? S.get() : (S ?? 0) * 0.01) ?? 0) ||
							(V ?? 0) / 100,
					);
				}, [V, i, n, S]),
					rUseEffect(() => {
						if (_(S)) return S.on(`change`, (e) => W(e));
					}, [S]),
					le(() => {
						M.current !== null &&
							j.current &&
							((!ie && u) || !M.current) &&
							H();
					}),
					ce(() => {
						j.current &&
							((ie.current = j.current.ended),
							(M.current = j.current.paused),
							U());
					}));
				let de = rUseMemo(() => {
					if (t === `URL`) return n + ``;
					if (t === `Upload`) return i + ``;
				}, [t, i, n, V]);
				return (
					rUseEffect(() => {
						re &&
							j.current &&
							L === `on-mount` &&
							setTimeout(() => H(), 50);
					}, []),
					rUseEffect(() => {
						j.current && !f && (j.current.volume = (v ?? 0) / 100);
					}, [v]),
					rJsx(`video`, {
						onClick: D,
						onMouseEnter: ne,
						onMouseLeave: O,
						onMouseDown: k,
						onMouseUp: A,
						src: de,
						loop: u,
						ref: j,
						onSeeked: (e) => C?.(e),
						onPause: (e) => w?.(e),
						onPlay: (e) => T?.(e),
						onEnded: (e) => E?.(e),
						autoPlay:
							G.current ||
							L === `on-mount` ||
							(x && L === `on-viewport` && z),
						preload: G.current
							? `auto`
							: F && !b
								? `metadata`
								: L !== `on-mount` && !ue
									? `none`
									: `metadata`,
						poster:
							o && !i && n === De
								? `/assets/5ILRvlYXf72kHSVHqpa3snGzjU.jpg`
								: o && b
									? b
									: void 0,
						onLoadedData: () => {
							let e = j.current;
							e &&
								(e.currentTime < 0.3 &&
									V > 0 &&
									W((V ?? 0) * 0.01),
								(G.current ||
									L === `on-mount` ||
									(x && L === `on-viewport` && z)) &&
									H());
						},
						controls: c,
						muted: F ? !0 : f,
						playsInline: p,
						style: {
							cursor: D ? `pointer` : `auto`,
							width: `100%`,
							height: `100%`,
							borderRadius: I,
							display: `block`,
							objectFit: h,
							backgroundColor: g,
							objectPosition: `50% 50%`,
						},
					})
				);
			})),
			(Y.displayName = `Video`),
			(ke = [`cover`, `fill`, `contain`, `scale-down`, `none`]),
			y(Y, {
				srcType: {
					type: j.Enum,
					displaySegmentedControl: !0,
					title: `Source`,
					options: [`URL`, `Upload`],
				},
				srcUrl: {
					type: j.String,
					title: `URL`,
					defaultValue: `/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
					hidden(e) {
						return e.srcType === `Upload`;
					},
				},
				srcFile: {
					type: j.File,
					title: `File`,
					allowedFileTypes: [`mp4`, `webm`],
					description: `Only MP4 and WebM`,
					hidden(e) {
						return e.srcType === `URL`;
					},
				},
				playing: {
					type: j.Boolean,
					title: `Playing`,
					enabledTitle: `Yes`,
					disabledTitle: `No`,
				},
				...z,
				posterEnabled: {
					type: j.Boolean,
					title: `Poster`,
					enabledTitle: `Yes`,
					disabledTitle: `No`,
				},
				poster: {
					type: j.Image,
					title: `Image`,
					hidden: ({ posterEnabled: e }) => !e,
					description: `We recommend adding a poster. [Learn more](https://www.framer.com/help/articles/how-are-videos-optimized-in-framer/).`,
				},
				backgroundColor: {
					type: j.Color,
					title: `Background`,
					defaultValue: `rgba(0,0,0,0)`,
				},
				startTime: {
					title: `Start Time`,
					type: j.Number,
					min: 0,
					max: 100,
					step: 0.1,
					unit: `%`,
				},
				loop: {
					type: j.Boolean,
					title: `Loop`,
					enabledTitle: `Yes`,
					disabledTitle: `No`,
				},
				objectFit: {
					type: j.Enum,
					title: `Fit`,
					options: ke,
					optionTitles: ke.map(we),
				},
				controls: {
					type: j.Boolean,
					title: `Controls`,
					enabledTitle: `Show`,
					disabledTitle: `Hide`,
					defaultValue: !1,
				},
				muted: {
					type: j.Boolean,
					title: `Muted`,
					enabledTitle: `Yes`,
					disabledTitle: `No`,
				},
				volume: {
					type: j.Number,
					max: 100,
					min: 0,
					unit: `%`,
					hidden: ({ muted: e }) => e,
					defaultValue: 25,
				},
				onEnd: { type: j.EventHandler },
				onSeeked: { type: j.EventHandler },
				onPause: { type: j.EventHandler },
				onPlay: { type: j.EventHandler },
				...L,
			}));
	}),
	je,
	Me,
	Ne,
	Pe = lazyInit(() => {
		(A(),
			S.loadFonts([
				`FR;InterDisplay`,
				`FR;InterDisplay-Bold`,
				`FR;InterDisplay-BoldItalic`,
				`FR;InterDisplay-Italic`,
			]),
			(je = [
				{
					explicitInter: !0,
					fonts: [
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
							url: `../fonts/2uIBiALfCHVpWbHqRMZutfT7giU.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
							url: `../fonts/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+1F00-1FFF`,
							url: `../fonts/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0370-03FF`,
							url: `../fonts/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
							url: `../fonts/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
							url: `../fonts/bHYNJqzTyl2lqvmMiRRS6Y16Es.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
							url: `../fonts/vebZUMjGyKkYsfcY73iwWTzLNag.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
							url: `../fonts/I11LrmuBDQZweplJ62KkVsklU5Y.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
							url: `../fonts/UjFZPDy3qGuDktQM4q9CxhKfIa8.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+1F00-1FFF`,
							url: `../fonts/8exwVHJy2DhJ4N5prYlVMrEKmQ.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0370-03FF`,
							url: `../fonts/UTeedEK21hO5jDxEUldzdScUqpg.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
							url: `../fonts/Ig8B8nzy11hzIWEIYnkg91sofjo.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
							url: `../fonts/qITWJ2WdG0wrgQPDb8lvnYnTXDg.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `normal`,
							unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
							url: `../fonts/qctQFoJqJ9aIbRSIp0AhCQpFxn8.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
							url: `../fonts/fXvVh2JeZlehNcEhKHpHH0frSl0.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
							url: `../fonts/7pScaNeb6M7n2HF2jKemDqzCIr4.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+1F00-1FFF`,
							url: `../fonts/qS4UjQYyATcVV9rODk0Zx9KhkY8.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0370-03FF`,
							url: `../fonts/VfD2n20yM7v0hrUEBHEyafsmMBY.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
							url: `../fonts/4oIO9fB59bn3cKFWz7piCj28z9s.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
							url: `../fonts/MzumQQZJQBC6KM1omtmwOtsogtI.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
							url: `../fonts/F5Lmfd3fCAu7TwiYbI4DLWw4ks.woff2`,
							weight: `700`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
							url: `../fonts/THWAFHoAcmqLMy81E8hCSdziVKA.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
							url: `../fonts/sQxGYWDlRkDr0eOKqiNRl6g5rs.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+1F00-1FFF`,
							url: `../fonts/NNTAT1XAm8ZRkr824inYPkjNeL4.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0370-03FF`,
							url: `../fonts/P2qr9PAWBt905929rHfxmneMUG0.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
							url: `../fonts/2BmSa4TZZvFKAZg2DydxTbvKlTU.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
							url: `../fonts/P0JCAnd2N1Q6qwTQohre3XmQ.woff2`,
							weight: `400`,
						},
						{
							family: `Inter Display`,
							source: `framer`,
							style: `italic`,
							unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
							url: `../fonts/KMFW46iYsEZaUBwXbwPc9nQm71o.woff2`,
							weight: `400`,
						},
					],
				},
			]),
			(Me = [
				`.framer-nsBcn .framer-styles-preset-1sb62jp:not(.rich-text-wrapper), .framer-nsBcn .framer-styles-preset-1sb62jp.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 15px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 17px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
			]),
			(Ne = `framer-nsBcn`));
	});
function X(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Fe,
	Ie,
	Le,
	Re,
	ze,
	Be,
	Ve,
	He,
	Z,
	Ue,
	Q,
	We,
	Ge,
	Ke,
	qe,
	Je,
	Ye,
	$,
	Xe,
	Ze = lazyInit(() => {
		(rUseDeferredValue(),
			A(),
			v(),
			o(),
			Ae(),
			ue(),
			Pe(),
			W(),
			fe(),
			me(),
			(Fe = w(pe)),
			(Ie = w(Y)),
			(Le = w(q)),
			(Re = C(Y)),
			(ze = [`H9MtNDY8s`, `QiQAzkW2U`]),
			(Be = `framer-7iGr3`),
			(Ve = {
				H9MtNDY8s: `framer-v-mwlaz1`,
				QiQAzkW2U: `framer-v-b8ry7a`,
			}),
			(He = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Z = (...e) => {
				for (let t of e) if (t && typeof t == `string`) return t;
			}),
			(Ue = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e.src
					: typeof e == `string`
						? e
						: void 0),
			(Q = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(We = (e, t) => `translateX(-50%) ${t}`),
			(Ge = ({ value: e, children: t }) => {
				let n = rUseContext(g),
					i = e ?? n.transition,
					a = rUseMemo(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
				return rJsx(g.Provider, { value: a, children: t });
			}),
			(Ke = { "Dark - Left": `QiQAzkW2U`, "Light - Right": `H9MtNDY8s` }),
			(qe = h.create(t)),
			(Je = ({
				bottomClients: e,
				bottomTitle: t,
				description: n,
				file: r,
				height: i,
				id: a,
				linkInButton: o,
				nameManager: s,
				photo1: c,
				photo2: l,
				photo3: u,
				photo4: d,
				photoOfManager: f,
				posterForVideo: p,
				posterImage: ee,
				showPhotoOfManager: m,
				showVideo: h,
				textInButton: g,
				title: _,
				width: te,
				...v
			}) => ({
				...v,
				AhgiOIck1: f ??
					v.AhgiOIck1 ?? {
						alt: ``,
						pixelHeight: 800,
						pixelWidth: 404,
						src: `/assets/images/F3t96ozC3GZuPhKwdm5VWtBIZwM.png?width=404&height=800`,
					},
				cEhJlWBK4: _ ?? v.cEhJlWBK4 ?? `Start a Project`,
				GMQy3HIPj: p ?? v.GMQy3HIPj ?? !0,
				Gsrl54N8N:
					t ??
					v.Gsrl54N8N ??
					`Love by
50+ founders`,
				HKlwjP8vx: d ??
					v.HKlwjP8vx ?? {
						pixelHeight: 80,
						pixelWidth: 80,
						src: `/assets/images/Nr8WBl4pdjZi5MeNkf7kGHBknbU.jpg`,
					},
				HsSgj7Fyw: l ??
					v.HsSgj7Fyw ?? {
						pixelHeight: 80,
						pixelWidth: 80,
						src: `/assets/images/DblzQDsny541TSzeqAcowdaAXZk.jpg`,
					},
				IdibjBtEd: ee ?? v.IdibjBtEd,
				IMKZ9o7BF:
					n ?? v.IMKZ9o7BF ?? `Let's book & talk with our manager.`,
				ks_rDRK57: r ?? v.ks_rDRK57,
				LcSrkRYKq: g ?? v.LcSrkRYKq ?? `Book Call`,
				mteyTKK7M: h ?? v.mteyTKK7M ?? !0,
				N7Tu5wmWv: o ?? v.N7Tu5wmWv,
				oyIra8aSp: c ??
					v.oyIra8aSp ?? {
						pixelHeight: 80,
						pixelWidth: 80,
						src: `/assets/images/9GOx4VTT9JaOZMAJy4GdCXy3I.jpg`,
					},
				QaFXteMmg: s ?? v.QaFXteMmg ?? `Kate W.`,
				rOuEaS47u: m ?? v.rOuEaS47u ?? !0,
				variant: Ke[v.variant] ?? v.variant ?? `H9MtNDY8s`,
				x_cGQsZuk: e ?? v.x_cGQsZuk ?? !0,
				xlBFJM_OF: u ??
					v.xlBFJM_OF ?? {
						pixelHeight: 80,
						pixelWidth: 80,
						src: `/assets/images/rZeWINetTprjwMqCAeMugLOkjU.jpg`,
					},
			})),
			(Ye = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			($ = x(
				rForwardRef(function (e, n) {
					let r = rUseRef(null),
						i = n ?? r,
						a = rUseId(),
						{ activeLocale: o, setLocale: c } = F(),
						l = ie(),
						{
							style: u,
							className: p,
							layoutId: m,
							variant: g,
							cEhJlWBK4: _,
							IMKZ9o7BF: v,
							AhgiOIck1: y,
							QaFXteMmg: x,
							LcSrkRYKq: S,
							N7Tu5wmWv: C,
							x_cGQsZuk: w,
							Gsrl54N8N: T,
							oyIra8aSp: O,
							HsSgj7Fyw: A,
							xlBFJM_OF: j,
							HKlwjP8vx: M,
							rOuEaS47u: N,
							mteyTKK7M: ae,
							ks_rDRK57: I,
							GMQy3HIPj: oe,
							IdibjBtEd: se,
							...L
						} = Je(e),
						{
							baseVariant: R,
							classNames: ce,
							clearLoadingGesture: z,
							gestureHandlers: le,
							gestureVariant: B,
							isLoading: ue,
							setGestureState: V,
							setVariant: H,
							variants: W,
						} = ne({
							cycleOrder: ze,
							defaultVariant: `H9MtNDY8s`,
							ref: i,
							variant: g,
							variantClassNames: Ve,
						}),
						G = Ye(e, W),
						K = D(Be, U, Ne, de),
						fe = (e) => (R === `QiQAzkW2U` ? e : !0);
					return rJsx(te, {
						id: m ?? a,
						children: rJsx(qe, {
							animate: W,
							initial: !1,
							children: rJsx(Ge, {
								value: He,
								children: rJsxs(h.div, {
									...L,
									...le,
									className: D(K, `framer-mwlaz1`, p, ce),
									layoutDependency: G,
									layoutId: `H9MtNDY8s`,
									ref: i,
									style: { ...u },
									...X(
										{
											QiQAzkW2U: {
											},
										},
										R,
										B,
									),
									children: [
										rJsxs(h.div, {
											className: `framer-1oi9aob`,
											layoutDependency: G,
											layoutId: `MHtV20YD5`,
											style: {
												backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
												borderBottomLeftRadius: 10,
												borderBottomRightRadius: 10,
												borderTopLeftRadius: 10,
												borderTopRightRadius: 10,
											},
											children: [
												rJsxs(h.div, {
													className: `framer-kf2yor`,
													layoutDependency: G,
													layoutId: `iU4nyVn00`,
													style: {
														backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
														borderBottomLeftRadius: 8,
														borderBottomRightRadius: 8,
														borderTopLeftRadius: 8,
														borderTopRightRadius: 8,
													},
													variants: {
														QiQAzkW2U: {
															backgroundColor: `var(--token-5943631d-b25e-4d17-8eac-40dd8ac14063, rgb(26, 26, 26))`,
														},
													},
													children: [
														rJsx(b, {
															__fromCanvasComponent:
																!0,
															children: rJsx(t, {
																children: rJsxs(
																	h.h6,
																	{
																		className: `framer-styles-preset-17vg3ju`,
																		"data-styles-preset": `CD6KIdx_H`,
																		children:
																			[
																				rJsx(
																					h.span,
																					{
																						style: {
																							"--framer-text-color": `var(--extracted-1vqrutl, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `Start`,
																					},
																				),
																				rJsx(
																					h.br,
																					{},
																				),
																				rJsx(
																					h.span,
																					{
																						style: {
																							"--framer-text-color": `var(--extracted-24qq59, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `a Project`,
																					},
																				),
																			],
																	},
																),
															}),
															className: `framer-j3be5b`,
															fonts: [`Inter`],
															layoutDependency: G,
															layoutId: `J7XTrOqXB`,
															style: {
																"--extracted-1vqrutl": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																"--extracted-24qq59": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																"--framer-paragraph-spacing": `0px`,
															},
															text: _,
															variants: {
																QiQAzkW2U: {
																	"--extracted-1vqrutl": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																	"--extracted-24qq59": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																},
															},
															verticalAlignment: `top`,
															withExternalLayout:
																!0,
															...X(
																{
																	QiQAzkW2U: {
																		children:
																			rJsx(
																				t,
																				{
																					children:
																						rJsxs(
																							h.h6,
																							{
																								className: `framer-styles-preset-17vg3ju`,
																								"data-styles-preset": `CD6KIdx_H`,
																								children:
																									[
																										rJsx(
																											h.span,
																											{
																												style: {
																													"--framer-text-color": `var(--extracted-1vqrutl, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																												},
																												children: `Start`,
																											},
																										),
																										rJsx(
																											h.br,
																											{},
																										),
																										rJsx(
																											h.span,
																											{
																												style: {
																													"--framer-text-color": `var(--extracted-24qq59, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																												},
																												children: `a Project`,
																											},
																										),
																									],
																							},
																						),
																				},
																			),
																	},
																},
																R,
																B,
															),
														}),
														rJsx(h.div, {
															className: `framer-18qh9d1`,
															
															layoutDependency: G,
															layoutId: `P95EtcLj1`,
														}),
														rJsx(b, {
															__fromCanvasComponent:
																!0,
															children: rJsx(t, {
																children: rJsx(
																	h.p,
																	{
																		className: `framer-styles-preset-1sb62jp`,
																		"data-styles-preset": `H4UJEYSZN`,
																		children:
																			rJsx(
																				h.span,
																				{
																					style: {
																						"--framer-text-color": `var(--extracted-1w3ko1f, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																					},
																					children: `Let's book & talk with our manager.`,
																				},
																			),
																	},
																),
															}),
															className: `framer-1q6rsk7`,
															fonts: [`Inter`],
															layoutDependency: G,
															layoutId: `Ff71mqFmO`,
															style: {
																"--extracted-1w3ko1f": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																"--framer-paragraph-spacing": `0px`,
															},
															text: v,
															variants: {
																QiQAzkW2U: {
																	"--extracted-r6o4lv": `var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7))`,
																},
															},
															verticalAlignment: `top`,
															withExternalLayout:
																!0,
															...X(
																{
																	QiQAzkW2U: {
																		children:
																			rJsx(
																				t,
																				{
																					children:
																						rJsx(
																							h.p,
																							{
																								className: `framer-styles-preset-1sb62jp`,
																								"data-styles-preset": `H4UJEYSZN`,
																								style: {
																									"--framer-text-color": `var(--extracted-r6o4lv, var(--token-c07fc053-5056-4de5-91c6-6fd35973440e, rgba(255, 255, 255, 0.7)))`,
																								},
																								children: `Let's book & talk with our manager.`,
																							},
																						),
																				},
																			),
																	},
																},
																R,
																B,
															),
														}),
														rJsx(h.div, {
															className: `framer-13x3qa0`,
															
															layoutDependency: G,
															layoutId: `f6WryI9Hr`,
														}),
														rJsx(P, {
															height: 40,
															width: `calc(max(${l?.width || `100vw`} - 107px, 1px) - 60px)`,
															y:
																(l?.y || 0) +
																0 +
																(((l?.height ||
																	200) -
																	0 -
																	291) /
																	2 +
																	0 +
																	0) +
																2 +
																25 +
																123.5,
															...X(
																{
																	QiQAzkW2U: {
																		y:
																			(l?.y ||
																				0) +
																			0 +
																			(((l?.height ||
																				200) -
																				0 -
																				204) /
																				2 +
																				0 +
																				0) +
																			2 +
																			25 +
																			123.5,
																	},
																},
																R,
																B,
															),
															children: rJsx(E, {
																className: `framer-12iljpq-container`,
																layoutDependency:
																	G,
																layoutId: `K_G0iol4l-container`,
																nodeId: `K_G0iol4l`,
																rendersWithMotion:
																	!0,
																scopeId: `B5N76fW9S`,
																children: rJsx(
																	pe,
																	{
																		CKFVUbPix:
																			S,
																		height: `100%`,
																		id: `K_G0iol4l`,
																		kT5TElzPn:
																			C,
																		layoutId: `K_G0iol4l`,
																		style: {
																			height: `100%`,
																			width: `100%`,
																		},
																		variant:
																			Z(
																				`kcJJ02qzX`,
																			),
																		width: `100%`,
																	},
																),
															}),
														}),
													],
												}),
												rJsxs(h.div, {
													className: `framer-1o7qjjl`,
													
													layoutDependency: G,
													layoutId: `Aq6xwBMEv`,
													style: {
														backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
														borderBottomLeftRadius: 8,
														borderBottomRightRadius: 8,
														borderTopLeftRadius: 8,
														borderTopRightRadius: 8,
													},
													variants: {
														QiQAzkW2U: {
															backgroundColor: `var(--token-5943631d-b25e-4d17-8eac-40dd8ac14063, rgb(26, 26, 26))`,
														},
													},
													children: [
														ae !== !1 &&
															rJsx(P, {
																children: rJsx(E, {
																	className: `framer-6m6suy-container`,
																	isAuthoredByUser:
																		!0,
																	isModuleExternal:
																		!0,
																	layoutDependency:
																		G,
																	layoutId: `hhNiSqU23-container`,
																	nodeId: `hhNiSqU23`,
																	rendersWithMotion:
																		!0,
																	scopeId: `B5N76fW9S`,
																	children: rJsx(
																		Y,
																		{
																			backgroundColor: `rgba(0, 0, 0, 0)`,
																			borderRadius: 8,
																			bottomLeftRadius: 8,
																			bottomRightRadius: 8,
																			controls:
																				!1,
																			height: `100%`,
																			id: `hhNiSqU23`,
																			isMixedBorderRadius:
																				!1,
																			layoutId: `hhNiSqU23`,
																			loop: !0,
																			muted: !0,
																			objectFit: `cover`,
																			playing:
																				!0,
																			poster: Ue(
																				se,
																			),
																			posterEnabled:
																				oe,
																			srcFile:
																				I,
																			srcType: `Upload`,
																			srcUrl: `/assets/MLWPbW1dUQawJLhhun3dBwpgJak.mp4`,
																			startTime: 0,
																			style: {
																				height: `100%`,
																				width: `100%`,
																			},
																			topLeftRadius: 8,
																			topRightRadius: 8,
																			volume: 25,
																			width: `100%`,
																		},
																	),
																}),
															}),
														N !== !1 &&
															rJsx(re, {
																background: {
																	alt: ``,
																	fit: `stretch`,
																	loading: k(
																		(l?.y ||
																			0) +
																			0 +
																			(((l?.height ||
																				200) -
																				0 -
																				291) /
																				2 +
																				0 +
																				0) +
																			2 +
																			0 +
																			100,
																	),
																	pixelHeight: 800,
																	pixelWidth: 404,
																	sizes: `101px`,
																	...Q(y),
																	positionX: `center`,
																	positionY: `center`,
																},
																className: `framer-fu5pzn`,
																layoutDependency:
																	G,
																layoutId: `qy3MZHoLd`,
																...X(
																	{
																		QiQAzkW2U:
																			{
																				background:
																					{
																						alt: ``,
																						fit: `stretch`,
																						loading:
																							k(
																								(l?.y ||
																									0) +
																									0 +
																									(((l?.height ||
																										200) -
																										0 -
																										204) /
																										2 +
																										0 +
																										0) +
																									2 +
																									0 +
																									100,
																							),
																						pixelHeight: 800,
																						pixelWidth: 404,
																						sizes: `101px`,
																						...Q(
																							y,
																						),
																						positionX: `center`,
																						positionY: `center`,
																					},
																			},
																	},
																	R,
																	B,
																),
															}),
														rJsx(b, {
															__fromCanvasComponent:
																!0,
															children: rJsx(t, {
																children: rJsx(
																	h.h6,
																	{
																		className: `framer-styles-preset-12tby5a`,
																		"data-styles-preset": `j9HsFBXUW`,
																		style: {
																			"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `Kate W.`,
																	},
																),
															}),
															className: `framer-1odrz3y`,
															
															fonts: [`Inter`],
															layoutDependency: G,
															layoutId: `xm4mIfC1o`,
															style: {
																"--extracted-1w1cjl5": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																"--framer-paragraph-spacing": `0px`,
															},
															text: x,
															transformTemplate:
																We,
															verticalAlignment: `top`,
															withExternalLayout:
																!0,
															...X(
																{
																	QiQAzkW2U: {
																		children:
																			rJsx(
																				t,
																				{
																					children:
																						rJsx(
																							h.h6,
																							{
																								className: `framer-styles-preset-12tby5a`,
																								"data-styles-preset": `j9HsFBXUW`,
																								style: {
																									"--framer-text-alignment": `center`,
																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																								},
																								children: `Kate W.`,
																							},
																						),
																				},
																			),
																	},
																},
																R,
																B,
															),
														}),
													],
												}),
											],
										}),
										fe(w !== !1) &&
											rJsxs(h.div, {
												className: `framer-1ozcg6v`,
												layoutDependency: G,
												layoutId: `RQZDJYrjq`,
												style: {
													backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													borderBottomLeftRadius: 10,
													borderBottomRightRadius: 10,
													borderTopLeftRadius: 10,
													borderTopRightRadius: 10,
												},
												children: [
													rJsx(b, {
														__fromCanvasComponent:
															!0,
														children: rJsx(t, {
															children: rJsxs(h.h6, {
																className: `framer-styles-preset-12tby5a`,
																"data-styles-preset": `j9HsFBXUW`,
																style: {
																	"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: [
																	`Love by `,
																	rJsx(h.br, {}),
																	`50+ founders`,
																],
															}),
														}),
														className: `framer-arpwxa`,
														fonts: [`Inter`],
														layoutDependency: G,
														layoutId: `kEQ79MzyN`,
														style: {
															"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
															"--framer-paragraph-spacing": `0px`,
														},
														text: T,
														verticalAlignment: `top`,
														withExternalLayout: !0,
													}),
													rJsxs(h.div, {
														className: `framer-1dmx3mh`,
														layoutDependency: G,
														layoutId: `Scdhsd_NS`,
														children: [
															rJsx(P, {
																height: 0,
																width: `40px`,
																y:
																	(l?.y ||
																		0) +
																	0 +
																	(((l?.height ||
																		200) -
																		0 -
																		291) /
																		2 +
																		204 +
																		2) +
																	42.5 +
																	0,
																...X(
																	{
																		QiQAzkW2U:
																			{
																				y:
																					(l?.y ||
																						0) +
																					0 +
																					(((l?.height ||
																						200) -
																						0 -
																						204) /
																						2 +
																						204 +
																						2) +
																					42.5 +
																					0,
																			},
																	},
																	R,
																	B,
																),
																children: rJsx(E, {
																	className: `framer-o80hab-container`,
																	layoutDependency:
																		G,
																	layoutId: `Oef4DVrPn-container`,
																	nodeId: `Oef4DVrPn`,
																	rendersWithMotion:
																		!0,
																	scopeId: `B5N76fW9S`,
																	children: rJsx(
																		q,
																		{
																			hcJOIuTE0:
																				Q(
																					O,
																				),
																			height: `100%`,
																			id: `Oef4DVrPn`,
																			layoutId: `Oef4DVrPn`,
																			style: {
																				height: `100%`,
																				width: `100%`,
																			},
																			variant:
																				Z(
																					`It_U6dSzO`,
																				),
																			width: `100%`,
																		},
																	),
																}),
															}),
															rJsx(P, {
																height: 0,
																width: `40px`,
																y:
																	(l?.y ||
																		0) +
																	0 +
																	(((l?.height ||
																		200) -
																		0 -
																		291) /
																		2 +
																		204 +
																		2) +
																	42.5 +
																	0,
																...X(
																	{
																		QiQAzkW2U:
																			{
																				y:
																					(l?.y ||
																						0) +
																					0 +
																					(((l?.height ||
																						200) -
																						0 -
																						204) /
																						2 +
																						204 +
																						2) +
																					42.5 +
																					0,
																			},
																	},
																	R,
																	B,
																),
																children: rJsx(E, {
																	className: `framer-jcdzoc-container`,
																	layoutDependency:
																		G,
																	layoutId: `ppTqEq9K7-container`,
																	nodeId: `ppTqEq9K7`,
																	rendersWithMotion:
																		!0,
																	scopeId: `B5N76fW9S`,
																	children: rJsx(
																		q,
																		{
																			hcJOIuTE0:
																				Q(
																					A,
																				),
																			height: `100%`,
																			id: `ppTqEq9K7`,
																			layoutId: `ppTqEq9K7`,
																			style: {
																				height: `100%`,
																				width: `100%`,
																			},
																			variant:
																				Z(
																					`It_U6dSzO`,
																				),
																			width: `100%`,
																		},
																	),
																}),
															}),
															rJsx(P, {
																height: 0,
																width: `40px`,
																y:
																	(l?.y ||
																		0) +
																	0 +
																	(((l?.height ||
																		200) -
																		0 -
																		291) /
																		2 +
																		204 +
																		2) +
																	42.5 +
																	0,
																...X(
																	{
																		QiQAzkW2U:
																			{
																				y:
																					(l?.y ||
																						0) +
																					0 +
																					(((l?.height ||
																						200) -
																						0 -
																						204) /
																						2 +
																						204 +
																						2) +
																					42.5 +
																					0,
																			},
																	},
																	R,
																	B,
																),
																children: rJsx(E, {
																	className: `framer-1495g0q-container`,
																	layoutDependency:
																		G,
																	layoutId: `kTiDSBph9-container`,
																	nodeId: `kTiDSBph9`,
																	rendersWithMotion:
																		!0,
																	scopeId: `B5N76fW9S`,
																	children: rJsx(
																		q,
																		{
																			hcJOIuTE0:
																				Q(
																					j,
																				),
																			height: `100%`,
																			id: `kTiDSBph9`,
																			layoutId: `kTiDSBph9`,
																			style: {
																				height: `100%`,
																				width: `100%`,
																			},
																			variant:
																				Z(
																					`It_U6dSzO`,
																				),
																			width: `100%`,
																		},
																	),
																}),
															}),
															rJsx(P, {
																height: 0,
																width: `40px`,
																y:
																	(l?.y ||
																		0) +
																	0 +
																	(((l?.height ||
																		200) -
																		0 -
																		291) /
																		2 +
																		204 +
																		2) +
																	42.5 +
																	0,
																...X(
																	{
																		QiQAzkW2U:
																			{
																				y:
																					(l?.y ||
																						0) +
																					0 +
																					(((l?.height ||
																						200) -
																						0 -
																						204) /
																						2 +
																						204 +
																						2) +
																					42.5 +
																					0,
																			},
																	},
																	R,
																	B,
																),
																children: rJsx(E, {
																	className: `framer-1v3gc9c-container`,
																	layoutDependency:
																		G,
																	layoutId: `cnIFL1GNL-container`,
																	nodeId: `cnIFL1GNL`,
																	rendersWithMotion:
																		!0,
																	scopeId: `B5N76fW9S`,
																	children: rJsx(
																		q,
																		{
																			hcJOIuTE0:
																				Q(
																					M,
																				),
																			height: `100%`,
																			id: `cnIFL1GNL`,
																			layoutId: `cnIFL1GNL`,
																			style: {
																				height: `100%`,
																				width: `100%`,
																			},
																			variant:
																				Z(
																					`It_U6dSzO`,
																				),
																			width: `100%`,
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
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-7iGr3.framer-o04c0z, .framer-7iGr3 .framer-o04c0z { display: block; }`,
					`.framer-7iGr3.framer-mwlaz1 { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 322px; }`,
					`.framer-7iGr3 .framer-1oi9aob { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 2px; height: min-content; justify-content: center; overflow: var(--overflow-clip-fallback, clip); padding: 2px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-7iGr3 .framer-kf2yor { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 200px; justify-content: center; overflow: hidden; padding: 25px 30px 25px 30px; position: relative; width: 1px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-7iGr3 .framer-j3be5b, .framer-7iGr3 .framer-1q6rsk7 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; }`,
					`.framer-7iGr3 .framer-18qh9d1 { flex: none; height: 12px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-7iGr3 .framer-13x3qa0 { flex: none; height: 18px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-7iGr3 .framer-12iljpq-container { flex: none; height: 40px; position: relative; width: 100%; }`,
					`.framer-7iGr3 .framer-1o7qjjl { align-content: center; align-items: center; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 200px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 101px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-7iGr3 .framer-6m6suy-container { flex: none; height: 200px; left: 0px; position: absolute; right: 0px; top: calc(50.00000000000002% - 200px / 2); z-index: 1; }`,
					`.framer-7iGr3 .framer-fu5pzn { aspect-ratio: 0.505 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 200px); position: relative; width: 101px; }`,
					`.framer-7iGr3 .framer-1odrz3y { bottom: 12px; flex: none; height: auto; left: 50%; mix-blend-mode: difference; position: absolute; white-space: pre; width: auto; z-index: 1; }`,
					`.framer-7iGr3 .framer-1ozcg6v { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; height: 85px; justify-content: space-between; overflow: var(--overflow-clip-fallback, clip); padding: 0px 32px 0px 32px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-7iGr3 .framer-arpwxa { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					`.framer-7iGr3 .framer-1dmx3mh { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: center; min-height: 40px; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 130px; }`,
					`.framer-7iGr3 .framer-o80hab-container { bottom: 0px; flex: none; left: 0px; position: absolute; top: 0px; width: 40px; z-index: 1; }`,
					`.framer-7iGr3 .framer-jcdzoc-container { bottom: 0px; flex: none; left: 30px; position: absolute; top: 0px; width: 40px; z-index: 1; }`,
					`.framer-7iGr3 .framer-1495g0q-container { bottom: 0px; flex: none; left: 60px; position: absolute; top: 0px; width: 40px; z-index: 1; }`,
					`.framer-7iGr3 .framer-1v3gc9c-container { bottom: 0px; flex: none; left: 90px; position: absolute; top: 0px; width: 40px; z-index: 1; }`,
					`.framer-7iGr3.framer-v-b8ry7a.framer-mwlaz1 { width: 320px; }`,
					`.framer-7iGr3.framer-v-b8ry7a .framer-kf2yor { order: 1; }`,
					`.framer-7iGr3.framer-v-b8ry7a .framer-1o7qjjl { order: 0; }`,
					...V,
					...Me,
					...G,
				],
				`framer-7iGr3`,
			)),
			(Xe = $),
			($.displayName = `Book and Founders - Widget`),
			($.defaultProps = { height: 291, width: 322 }),
			y($, {
				variant: {
					options: [`H9MtNDY8s`, `QiQAzkW2U`],
					optionTitles: [`Light - Right`, `Dark - Left`],
					title: `Variant`,
					type: j.Enum,
				},
				cEhJlWBK4: {
					defaultValue: `Start a Project`,
					displayTextArea: !0,
					title: `Title`,
					type: j.String,
				},
				oncEhJlWBK4Change: {
					changes: `cEhJlWBK4`,
					type: j.ChangeHandler,
				},
				IMKZ9o7BF: {
					defaultValue: `Let's book & talk with our manager.`,
					displayTextArea: !0,
					title: `Description`,
					type: j.String,
				},
				onIMKZ9o7BFChange: {
					changes: `IMKZ9o7BF`,
					type: j.ChangeHandler,
				},
				AhgiOIck1: {
					__defaultAssetReference: `data:framer/asset-reference,F3t96ozC3GZuPhKwdm5VWtBIZwM.png?preferredSize=full&width=404&height=800`,
					__vekterDefault: {
						alt: ``,
						assetReference: `data:framer/asset-reference,F3t96ozC3GZuPhKwdm5VWtBIZwM.png?preferredSize=full&width=404&height=800`,
					},
					title: `Photo of Manager`,
					type: j.ResponsiveImage,
				},
				QaFXteMmg: {
					defaultValue: `Kate W.`,
					displayTextArea: !1,
					title: `Name Manager`,
					type: j.String,
				},
				onQaFXteMmgChange: {
					changes: `QaFXteMmg`,
					type: j.ChangeHandler,
				},
				LcSrkRYKq: {
					defaultValue: `Book Call`,
					displayTextArea: !1,
					title: `Text In Button`,
					type: j.String,
				},
				onLcSrkRYKqChange: {
					changes: `LcSrkRYKq`,
					type: j.ChangeHandler,
				},
				N7Tu5wmWv: { title: `Link in Button`, type: j.Link },
				x_cGQsZuk: {
					defaultValue: !0,
					title: `Bottom - Clients`,
					type: j.Boolean,
				},
				onx_cGQsZukChange: {
					changes: `x_cGQsZuk`,
					type: j.ChangeHandler,
				},
				Gsrl54N8N: {
					defaultValue: `Love by
50+ founders`,
					displayTextArea: !0,
					title: `Bottom Title`,
					type: j.String,
				},
				onGsrl54N8NChange: {
					changes: `Gsrl54N8N`,
					type: j.ChangeHandler,
				},
				oyIra8aSp: {
					__defaultAssetReference: `data:framer/asset-reference,9GOx4VTT9JaOZMAJy4GdCXy3I.jpg?originalFilename=ava+4.jpg&width=80&height=80`,
					title: `Photo 1`,
					type: j.ResponsiveImage,
				},
				HsSgj7Fyw: {
					__defaultAssetReference: `data:framer/asset-reference,DblzQDsny541TSzeqAcowdaAXZk.jpg?originalFilename=ava+3.jpg&width=80&height=80`,
					title: `Photo 2`,
					type: j.ResponsiveImage,
				},
				xlBFJM_OF: {
					__defaultAssetReference: `data:framer/asset-reference,rZeWINetTprjwMqCAeMugLOkjU.jpg?originalFilename=ava+2.jpg&width=80&height=80`,
					title: `Photo 3`,
					type: j.ResponsiveImage,
				},
				HKlwjP8vx: {
					__defaultAssetReference: `data:framer/asset-reference,Nr8WBl4pdjZi5MeNkf7kGHBknbU.jpg?originalFilename=ava+1.jpg&width=80&height=80`,
					title: `Photo 4`,
					type: j.ResponsiveImage,
				},
				rOuEaS47u: {
					defaultValue: !0,
					title: `Show Photo of Manager`,
					type: j.Boolean,
				},
				onrOuEaS47uChange: {
					changes: `rOuEaS47u`,
					type: j.ChangeHandler,
				},
				mteyTKK7M: {
					defaultValue: !0,
					title: `Show Video`,
					type: j.Boolean,
				},
				onmteyTKK7MChange: {
					changes: `mteyTKK7M`,
					type: j.ChangeHandler,
				},
				ks_rDRK57: Re?.srcFile && {
					...Re.srcFile,
					__defaultAssetReference: ``,
					description: void 0,
					hidden: void 0,
					title: `File`,
				},
				onks_rDRK57Change: {
					changes: `ks_rDRK57`,
					type: j.ChangeHandler,
				},
				GMQy3HIPj: {
					defaultValue: !0,
					title: `Poster for Video`,
					type: j.Boolean,
				},
				onGMQy3HIPjChange: {
					changes: `GMQy3HIPj`,
					type: j.ChangeHandler,
				},
				IdibjBtEd: { title: `Poster Image`, type: j.ResponsiveImage },
			}),
			M(
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
					...Fe,
					...Ie,
					...Le,
					...O(H),
					...O(je),
					...O(K),
				],
				{ supportsExplicitInterCodegen: !0 },
			),
			($.loader = {
				load: (e, t) => (
					t.locale,
					Promise.allSettled([T(pe, {}, t), T(q, {}, t)])
				),
			}));
	}),
	Qe,
	$e,
	et,
	tt = lazyInit(() => {
		(A(),
			S.loadFonts([
				`GF;Space Mono-regular`,
				`GF;Space Mono-700`,
				`GF;Space Mono-700italic`,
				`GF;Space Mono-italic`,
			]),
			(Qe = [
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
			($e = [
				`.framer-zeChO .framer-styles-preset-nkm6se:not(.rich-text-wrapper), .framer-zeChO .framer-styles-preset-nkm6se.rich-text-wrapper h6 { --framer-font-family: "Space Mono", monospace; --framer-font-family-bold: "Space Mono", monospace; --framer-font-family-bold-italic: "Space Mono", monospace; --framer-font-family-italic: "Space Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 28px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 30px; --framer-paragraph-spacing: 40px; --framer-text-alignment: left; --framer-text-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
			]),
			(et = `framer-zeChO`));
	});
export {
	Xe as a,
	ye as c,
	tt as i,
	$e as n,
	Ze as o,
	Qe as r,
	ve as s,
	et as t,
};
