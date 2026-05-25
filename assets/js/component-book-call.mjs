import { t as e } from "./rolldown-runtime.mjs";
import {
	F as t,
	I as n,
	M as r,
	N as i,
	P as a,
	T as o,
	c as s,
	g as c,
	h as l,
	j as u,
	k as d,
	l as f,
	o as p,
	y as ee,
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
	ye = e(() => {
		(p(),
			A(),
			o(),
			(he = `var(--framer-icon-mask)`),
			(ge = c((e, t) => {
				let { animated: n, layoutId: r, children: i, ...a } = e;
				return n
					? s(h.img, { ...a, layoutId: r, ref: t })
					: s(`img`, { ...a, ref: t });
			})),
			(_e = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(J = x(
				c(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: i,
						variant: a,
						...o
					} = _e(e);
					return s(ge, {
						...o,
						alt: ``,
						className: D(`framer-OkjKH`, r),
						layoutId: i,
						ref: t,
						src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 300 43" xmlns="http://www.w3.org/2000/svg"><path d="M 294.409 39.52 L 295.107 39.52 L 295.107 0.816 L 300 0.816 L 300 41.618 L 290.216 41.618 L 278.453 2.914 L 277.755 2.914 L 277.755 41.618 L 272.862 41.618 L 272.862 0.816 L 282.645 0.816 Z M 238.194 16.671 C 238.194 11.386 239.455 7.286 241.98 4.372 C 244.502 1.457 248.017 0 252.519 0 C 257.023 0 260.536 1.457 263.061 4.372 C 265.585 7.286 266.846 11.386 266.846 16.671 L 266.846 25.764 C 266.846 31.204 265.585 35.342 263.061 38.179 C 260.536 41.016 257.023 42.434 252.519 42.434 C 248.017 42.434 244.502 41.016 241.98 38.179 C 239.455 35.342 238.194 31.204 238.194 25.764 Z M 252.519 37.888 C 255.665 37.888 258.014 36.819 259.567 34.682 C 261.158 32.506 261.953 29.416 261.953 25.414 L 261.953 17.02 C 261.953 13.29 261.158 10.278 259.567 7.986 C 258.014 5.693 255.665 4.547 252.519 4.547 C 249.375 4.547 247.007 5.693 245.416 7.986 C 243.863 10.278 243.085 13.29 243.085 17.02 L 243.085 25.414 C 243.085 29.416 243.863 32.506 245.416 34.682 C 247.007 36.819 249.375 37.888 252.519 37.888 Z M 214.707 22.033 L 232.877 22.033 L 232.877 41.618 L 228.334 41.618 L 228.334 36.722 L 227.635 36.722 C 226.976 38.432 225.811 39.811 224.141 40.86 C 222.472 41.91 220.53 42.434 218.317 42.434 C 213.93 42.434 210.476 41.016 207.951 38.179 C 205.466 35.342 204.225 31.204 204.225 25.764 L 204.225 16.671 C 204.225 11.386 205.486 7.286 208.011 4.372 C 210.533 1.457 214.046 0 218.55 0 C 220.879 0 222.938 0.389 224.724 1.166 C 226.51 1.904 228.004 2.953 229.208 4.313 C 230.412 5.635 231.324 7.208 231.945 9.035 C 232.565 10.822 232.877 12.746 232.877 14.805 L 232.877 15.505 L 227.984 15.505 L 227.984 14.805 C 227.984 13.484 227.791 12.202 227.402 10.958 C 227.053 9.715 226.49 8.627 225.713 7.694 C 224.976 6.723 224.005 5.965 222.801 5.421 C 221.637 4.838 220.22 4.547 218.55 4.547 C 215.406 4.547 213.038 5.693 211.445 7.986 C 209.893 10.278 209.116 13.29 209.116 17.02 L 209.116 25.414 C 209.116 29.416 209.893 32.506 211.445 34.682 C 213.038 36.819 215.445 37.888 218.666 37.888 C 221.58 37.888 223.849 36.955 225.48 35.09 C 227.149 33.225 227.984 30.621 227.984 27.279 L 227.984 26.58 L 214.707 26.58 Z M 193.433 31.476 L 175.962 31.476 L 172.992 41.618 L 167.751 41.618 L 180.097 0.816 L 189.298 0.816 L 201.643 41.618 L 196.403 41.618 Z M 184.348 2.914 L 177.301 26.929 L 192.093 26.929 L 185.047 2.914 Z M 163.54 41.618 L 158.648 41.618 L 158.648 27.979 C 158.648 26.968 158.415 26.191 157.949 25.647 C 157.483 25.103 156.668 24.831 155.503 24.831 L 142.808 24.831 L 142.808 41.618 L 137.916 41.618 L 137.916 0.816 L 152.475 0.816 C 154.571 0.816 156.396 1.127 157.949 1.749 C 159.502 2.332 160.783 3.128 161.793 4.139 C 162.841 5.149 163.618 6.334 164.122 7.694 C 164.666 9.015 164.938 10.414 164.938 11.891 L 164.938 13.64 C 164.938 15.155 164.511 16.671 163.656 18.186 C 162.841 19.702 161.56 20.867 159.813 21.683 L 159.813 22.383 C 160.978 22.577 161.89 23.044 162.55 23.782 C 163.21 24.52 163.54 25.569 163.54 26.929 Z M 142.808 20.285 L 151.893 20.285 C 154.649 20.285 156.687 19.702 158.007 18.536 C 159.366 17.331 160.046 15.583 160.046 13.29 L 160.046 12.241 C 160.046 10.181 159.366 8.53 158.007 7.286 C 156.687 6.004 154.649 5.363 151.893 5.363 L 142.808 5.363 Z M 103.306 0.816 L 116.7 0.816 C 121.747 0.816 125.436 2.021 127.765 4.43 C 130.095 6.839 131.259 10.686 131.259 15.971 L 131.259 26.463 C 131.259 31.748 130.095 35.595 127.765 38.004 C 125.436 40.414 121.747 41.618 116.7 41.618 L 103.306 41.618 L 103.306 37.013 L 106.8 37.013 L 106.8 5.363 L 103.306 5.363 Z M 116.001 37.072 C 117.787 37.072 119.321 36.897 120.602 36.547 C 121.922 36.197 123.009 35.614 123.863 34.798 C 124.717 33.943 125.339 32.817 125.727 31.418 C 126.154 30.019 126.367 28.251 126.367 26.113 L 126.367 16.321 C 126.367 14.184 126.154 12.416 125.727 11.017 C 125.339 9.618 124.717 8.51 123.863 7.694 C 123.009 6.839 121.922 6.237 120.602 5.887 C 119.321 5.537 117.787 5.363 116.001 5.363 L 111.692 5.363 L 111.692 37.072 Z M 90.942 39.52 L 91.641 39.52 L 91.641 0.816 L 96.533 0.816 L 96.533 41.618 L 86.749 41.618 L 74.985 2.914 L 74.287 2.914 L 74.287 41.618 L 69.395 41.618 L 69.395 0.816 L 79.178 0.816 Z M 35.727 16.671 C 35.727 11.386 36.988 7.286 39.512 4.372 C 42.035 1.457 45.549 0 50.053 0 C 54.556 0 58.07 1.457 60.593 4.372 C 63.117 7.286 64.379 11.386 64.379 16.671 L 64.379 25.764 C 64.379 31.204 63.117 35.342 60.593 38.179 C 58.07 41.016 54.556 42.434 50.053 42.434 C 45.549 42.434 42.035 41.016 39.512 38.179 C 36.988 35.342 35.727 31.204 35.727 25.764 Z M 50.053 37.888 C 53.197 37.888 55.546 36.819 57.099 34.682 C 58.691 32.506 59.487 29.416 59.487 25.414 L 59.487 17.02 C 59.487 13.29 58.691 10.278 57.099 7.986 C 55.546 5.693 53.197 4.547 50.053 4.547 C 46.908 4.547 44.54 5.693 42.948 7.986 C 41.395 10.278 40.618 13.29 40.618 17.02 L 40.618 25.414 C 40.618 29.416 41.395 32.506 42.948 34.682 C 44.54 36.819 46.908 37.888 50.053 37.888 Z M 0 0.816 L 9.318 0.816 L 14.792 39.52 L 15.491 39.52 L 20.965 0.816 L 30.283 0.816 L 30.283 41.618 L 25.74 41.618 L 25.74 2.914 L 25.042 2.914 L 19.567 41.618 L 10.715 41.618 L 5.241 2.914 L 4.542 2.914 L 4.542 41.618 L 0 41.618 Z" fill="rgb(255, 255, 255)" height="42.43421052631578px" id="sSEOgdsmY" width="300.000004818565px"/></svg>`,
						style: { ...n },
					});
				}),
				[
					`.framer-OkjKH { -webkit-mask: ${he}; aspect-ratio: 6.976744186046512; display: block; mask: ${he}; user-select: none; width: 300px; }`,
				],
				`framer-OkjKH`,
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
	return s(Oe, { ...be(e) });
}
function xe(e) {
	let t = N(),
		n = d(!1),
		r = d(!1),
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
	let [o] = n(e),
		[s, c] = n(!1);
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
	Ae = e(() => {
		(p(),
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
			(Oe = l(function (e) {
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
					j = d(),
					re = se(),
					M = d(null),
					ie = d(null),
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
				(a(() => {
					F || (L !== `on-viewport` && (x ? H() : U()));
				}, [L, x]),
					a(() => {
						F ||
							(z && x && L !== `no-autoplay` && H(),
							L === `on-viewport` && U());
					}, [L, z, x]),
					a(() => {
						!N ||
							b ||
							o ||
							V ||
							!j.current ||
							(j.current.currentTime = 0.01);
					}, [o, b, V]));
				let K = d(!1);
				(a(() => {
					if (!K.current) {
						K.current = !0;
						return;
					}
					W(
						((_(S) ? S.get() : (S ?? 0) * 0.01) ?? 0) ||
							(V ?? 0) / 100,
					);
				}, [V, i, n, S]),
					a(() => {
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
				let de = r(() => {
					if (t === `URL`) return n + ``;
					if (t === `Upload`) return i + ``;
				}, [t, i, n, V]);
				return (
					a(() => {
						re &&
							j.current &&
							L === `on-mount` &&
							setTimeout(() => H(), 50);
					}, []),
					a(() => {
						j.current && !f && (j.current.volume = (v ?? 0) / 100);
					}, [v]),
					s(`video`, {
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
	Pe = e(() => {
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
	Ze = e(() => {
		(p(),
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
				let n = u(g),
					i = e ?? n.transition,
					a = r(() => ({ ...n, transition: i }), [JSON.stringify(i)]);
				return s(g.Provider, { value: a, children: t });
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
				c(function (e, n) {
					let r = d(null),
						i = n ?? r,
						a = ee(),
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
					return s(te, {
						id: m ?? a,
						children: s(qe, {
							animate: W,
							initial: !1,
							children: s(Ge, {
								value: He,
								children: f(h.div, {
									...L,
									...le,
									className: D(K, `framer-mwlaz1`, p, ce),
									"data-framer-name": `Light - Right`,
									layoutDependency: G,
									layoutId: `H9MtNDY8s`,
									ref: i,
									style: { ...u },
									...X(
										{
											QiQAzkW2U: {
												"data-framer-name": `Dark - Left`,
											},
										},
										R,
										B,
									),
									children: [
										f(h.div, {
											className: `framer-1oi9aob`,
											"data-framer-name": `Book Call`,
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
												f(h.div, {
													className: `framer-kf2yor`,
													"data-framer-name": `Frame 98`,
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
														s(b, {
															__fromCanvasComponent:
																!0,
															children: s(t, {
																children: f(
																	h.h6,
																	{
																		className: `framer-styles-preset-17vg3ju`,
																		"data-styles-preset": `CD6KIdx_H`,
																		children:
																			[
																				s(
																					h.span,
																					{
																						style: {
																							"--framer-text-color": `var(--extracted-1vqrutl, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																						},
																						children: `Start`,
																					},
																				),
																				s(
																					h.br,
																					{},
																				),
																				s(
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
															"data-framer-name": `Start\u2028a Project`,
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
																			s(
																				t,
																				{
																					children:
																						f(
																							h.h6,
																							{
																								className: `framer-styles-preset-17vg3ju`,
																								"data-styles-preset": `CD6KIdx_H`,
																								children:
																									[
																										s(
																											h.span,
																											{
																												style: {
																													"--framer-text-color": `var(--extracted-1vqrutl, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																												},
																												children: `Start`,
																											},
																										),
																										s(
																											h.br,
																											{},
																										),
																										s(
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
														s(h.div, {
															className: `framer-18qh9d1`,
															"data-framer-name": `Spacer`,
															layoutDependency: G,
															layoutId: `P95EtcLj1`,
														}),
														s(b, {
															__fromCanvasComponent:
																!0,
															children: s(t, {
																children: s(
																	h.p,
																	{
																		className: `framer-styles-preset-1sb62jp`,
																		"data-styles-preset": `H4UJEYSZN`,
																		children:
																			s(
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
															"data-framer-name": `Let's talk & book \u2028with our manager`,
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
																			s(
																				t,
																				{
																					children:
																						s(
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
														s(h.div, {
															className: `framer-13x3qa0`,
															"data-framer-name": `Spacer`,
															layoutDependency: G,
															layoutId: `f6WryI9Hr`,
														}),
														s(P, {
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
															children: s(E, {
																className: `framer-12iljpq-container`,
																layoutDependency:
																	G,
																layoutId: `K_G0iol4l-container`,
																nodeId: `K_G0iol4l`,
																rendersWithMotion:
																	!0,
																scopeId: `B5N76fW9S`,
																children: s(
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
												f(h.div, {
													className: `framer-1o7qjjl`,
													"data-framer-name": `Image`,
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
															s(P, {
																children: s(E, {
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
																	children: s(
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
															s(re, {
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
																"data-framer-name": `Manager`,
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
														s(b, {
															__fromCanvasComponent:
																!0,
															children: s(t, {
																children: s(
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
															"data-framer-name": `Name`,
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
																			s(
																				t,
																				{
																					children:
																						s(
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
											f(h.div, {
												className: `framer-1ozcg6v`,
												"data-framer-name": `Founders`,
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
													s(b, {
														__fromCanvasComponent:
															!0,
														children: s(t, {
															children: f(h.h6, {
																className: `framer-styles-preset-12tby5a`,
																"data-styles-preset": `j9HsFBXUW`,
																style: {
																	"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																},
																children: [
																	`Love by `,
																	s(h.br, {}),
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
													f(h.div, {
														className: `framer-1dmx3mh`,
														"data-framer-name": `Founders`,
														layoutDependency: G,
														layoutId: `Scdhsd_NS`,
														children: [
															s(P, {
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
																children: s(E, {
																	className: `framer-o80hab-container`,
																	layoutDependency:
																		G,
																	layoutId: `Oef4DVrPn-container`,
																	nodeId: `Oef4DVrPn`,
																	rendersWithMotion:
																		!0,
																	scopeId: `B5N76fW9S`,
																	children: s(
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
															s(P, {
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
																children: s(E, {
																	className: `framer-jcdzoc-container`,
																	layoutDependency:
																		G,
																	layoutId: `ppTqEq9K7-container`,
																	nodeId: `ppTqEq9K7`,
																	rendersWithMotion:
																		!0,
																	scopeId: `B5N76fW9S`,
																	children: s(
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
															s(P, {
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
																children: s(E, {
																	className: `framer-1495g0q-container`,
																	layoutDependency:
																		G,
																	layoutId: `kTiDSBph9-container`,
																	nodeId: `kTiDSBph9`,
																	rendersWithMotion:
																		!0,
																	scopeId: `B5N76fW9S`,
																	children: s(
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
															s(P, {
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
																children: s(E, {
																	className: `framer-1v3gc9c-container`,
																	layoutDependency:
																		G,
																	layoutId: `cnIFL1GNL-container`,
																	nodeId: `cnIFL1GNL`,
																	rendersWithMotion:
																		!0,
																	scopeId: `B5N76fW9S`,
																	children: s(
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
	tt = e(() => {
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
//# sourceMappingURL=component-book-call.mjs.map
