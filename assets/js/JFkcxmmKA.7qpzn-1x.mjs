import { t as e } from "./rolldown-runtime.mjs";
import { B as t, M as n, P as r, T as i, z as a } from "./react.mjs";
import { F as o, X as s, a as c, mt as l, w as u } from "./framer.mjs";
var d,
	f,
	p = e(() => {
		(s(),
			(d = {
				position: `relative`,
				width: `100%`,
				height: `100%`,
				display: `flex`,
				justifyContent: `center`,
				alignItems: `center`,
			}),
			{ ...d },
			(f = {
				onClick: { type: c.EventHandler },
				onMouseEnter: { type: c.EventHandler },
				onMouseLeave: { type: c.EventHandler },
			}),
			c.Number,
			c.Boolean,
			c.String,
			c.Enum);
	});
function m(e, t) {
	return g(!0, e, t);
}
function h(e, t) {
	return g(!1, e, t);
}
function g(e, t, n = !0) {
	let i = l();
	r(() => {
		n && i === e && t();
	}, [i]);
}
var _ = e(() => {
		(s(), i());
	}),
	v = e(() => {
		i();
	}),
	y = e(() => {
		s();
	}),
	b = e(() => {
		s();
	}),
	x = e(() => {
		i();
	}),
	S = e(() => {
		s();
	}),
	C,
	w,
	T = e(() => {
		(a(),
			i(),
			(C = () => {
				if (t !== void 0) {
					let e = t.userAgent.toLowerCase();
					return (
						(e.indexOf(`safari`) > -1 ||
							e.indexOf(`framermobile`) > -1 ||
							e.indexOf(`framerx`) > -1) &&
						e.indexOf(`chrome`) < 0
					);
				} else return !1;
			}),
			(w = () => n(() => C(), [])));
	}),
	E = e(() => {
		(i(), b());
	}),
	D = e(() => {
		(i(), s(), b(), v());
	}),
	O = e(() => {
		(s(), i(), p());
	});
function k() {
	return n(() => u.current(), []);
}
function A() {
	return n(() => u.current() === u.canvas, []);
}
var j = e(() => {
		(i(), s());
	}),
	M = e(() => {
		i();
	});
function N(e) {
	let {
		borderRadius: t,
		isMixedBorderRadius: r,
		topLeftRadius: i,
		topRightRadius: a,
		bottomRightRadius: o,
		bottomLeftRadius: s,
	} = e;
	return n(
		() => (r ? `${i}px ${a}px ${o}px ${s}px` : `${t}px`),
		[t, r, i, a, o, s],
	);
}
function P(e) {
	let {
		padding: t,
		paddingPerSide: r,
		paddingTop: i,
		paddingRight: a,
		paddingBottom: o,
		paddingLeft: s,
	} = e;
	return n(() => (r ? `${i}px ${a}px ${o}px ${s}px` : t), [t, r, i, a, o, s]);
}
var F,
	I,
	L = e(() => {
		(i(),
			s(),
			(F = {
				borderRadius: {
					title: `Radius`,
					type: c.FusedNumber,
					toggleKey: `isMixedBorderRadius`,
					toggleTitles: [`Radius`, `Radius per corner`],
					valueKeys: [
						`topLeftRadius`,
						`topRightRadius`,
						`bottomRightRadius`,
						`bottomLeftRadius`,
					],
					valueLabels: [`TL`, `TR`, `BR`, `BL`],
					min: 0,
				},
			}),
			(I = {
				padding: {
					type: c.FusedNumber,
					toggleKey: `paddingPerSide`,
					toggleTitles: [`Padding`, `Padding per side`],
					valueKeys: [
						`paddingTop`,
						`paddingRight`,
						`paddingBottom`,
						`paddingLeft`,
					],
					valueLabels: [`T`, `R`, `B`, `L`],
					min: 0,
					title: `Padding`,
				},
			}));
	}),
	R = e(() => {
		(p(), _(), v(), y(), b(), x(), S(), T(), E(), D(), O(), j(), M(), L());
	}),
	z,
	B,
	V,
	H = e(() => {
		(s(),
			o.loadFonts([
				`GF;Space Mono-regular`,
				`GF;Space Mono-700`,
				`GF;Space Mono-700italic`,
				`GF;Space Mono-italic`,
			]),
			(z = [
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
			(B = [
				`.framer-oi3Va .framer-styles-preset-5fkg2j:not(.rich-text-wrapper), .framer-oi3Va .framer-styles-preset-5fkg2j.rich-text-wrapper p { --framer-font-family: "Space Mono", monospace; --framer-font-family-bold: "Space Mono", monospace; --framer-font-family-bold-italic: "Space Mono", monospace; --framer-font-family-italic: "Space Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
			]),
			(V = `framer-oi3Va`));
	});
export {
	R as a,
	P as c,
	k as d,
	w as f,
	f as h,
	H as i,
	N as l,
	h as m,
	B as n,
	F as o,
	m as p,
	z as r,
	I as s,
	V as t,
	A as u,
};
//# sourceMappingURL=JFkcxmmKA.7qpzn-1x.mjs.map
