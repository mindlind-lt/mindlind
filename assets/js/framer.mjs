import { lazyInit as lazyInit } from "./rolldown-runtime.mjs";
import {
	A as t,
	B as n,
	C as r,
	E as i,
	F as a,
	I as o,
	L as s,
	M as c,
	N as l,
	O as u,
	P as d,
	S as f,
	T as p,
	V as m,
	_ as h,
	a as g,
	c as _,
	d as v,
	f as y,
	g as b,
	h as x,
	i as S,
	j as C,
	k as w,
	l as T,
	m as E,
	o as D,
	s as O,
	u as k,
	v as A,
	w as j,
	x as ee,
	y as te,
	z as ne,
} from "./react.mjs";
import {
	$ as M,
	A as re,
	C as ie,
	D as ae,
	E as oe,
	G as se,
	H as ce,
	I as le,
	J as ue,
	K as de,
	L as fe,
	M as pe,
	O as me,
	Q as N,
	R as he,
	S as P,
	T as F,
	U as ge,
	V as _e,
	W as ve,
	X as ye,
	Y as be,
	Z as xe,
	_ as Se,
	a as Ce,
	b as we,
	c as Te,
	d as Ee,
	et as De,
	f as Oe,
	g as ke,
	h as Ae,
	i as je,
	it as Me,
	j as Ne,
	k as Pe,
	l as Fe,
	m as Ie,
	n as Le,
	nt as Re,
	o as ze,
	p as Be,
	q as Ve,
	r as He,
	rt as Ue,
	s as We,
	tt as I,
	u as Ge,
	v as Ke,
	w as qe,
	x as Je,
	y as Ye,
	z as Xe,
} from "./motion.mjs";
function Ze(e) {
	return typeof e == `function`;
}
function Qe(e) {
	return typeof e == `boolean`;
}
function L(e) {
	return typeof e == `string`;
}
function R(e) {
	return Number.isFinite(e);
}
function $e(e) {
	return Array.isArray(e);
}
function z(e) {
	return typeof e == `object` && !!e && !$e(e);
}
function et(e) {
	for (let t in e) return !1;
	return !0;
}
function tt(e) {
	return e === void 0;
}
function nt(e) {
	return e === null;
}
function rt(e) {
	return e == null;
}
function it(e) {
	return e instanceof Date && !Number.isNaN(e.getTime());
}
function at(e) {
	return z(e) && Ze(e.return);
}
function ot(e) {
	return z(e) && Ze(e.then);
}
function st(e) {
	return e instanceof Promise;
}
function ct(e) {
	return `url('${lt(e)}')`;
}
function lt(e) {
	return `data:image/svg+xml,${e.replaceAll(`#`, `%23`).replaceAll(`'`, `%27`).replaceAll(`"`, `%22`)}`;
}
function ut(e, t) {
	let n = t instanceof Error ? (t.stack ?? t.message) : t;
	return `${
		e
			? `${e}
`
			: ``
	}In case the issue persists, report this to the Framer team via https://www.framer.com/contact/${
		n
			? `:
${n}`
			: `.`
	}`;
}
function dt() {
	if (!xg) return;
	let e = document.querySelectorAll(
		`[rel="modulepreload"][data-framer-lazy]`,
	);
	for (let t of e) {
		let e = t.getAttribute(`data-framer-lazy`),
			n = t.getAttribute(`href`);
		if (!e || !n) continue;
		let r = import(n)
			.then((t) => (Og.set(e, t), t))
			.catch((t) => {
				throw (
					Og.delete(e),
					console.warn(`Failed to import lazy module: ${n}`, t),
					t
				);
			});
		(r.catch(bg), Og.set(e, r));
	}
}
function ft(e) {
	return typeof e == `object` && !!e && !y(e) && Ag in e;
}
function pt(e, t) {
	if (t in e) return e[t];
	throw Error(`Module does not contain export '${t}'`);
}
function lazyComponent(e, t = `default`, n) {
	let r,
		i,
		a,
		o = () => {
			if (i || !n || !Og.has(n)) return;
			let e = Og.get(n);
			st(e) ? s(() => e) : (i = pt(e, t));
		},
		s = (e) =>
			i
				? Promise.resolve(i)
				: ((r ||= e()
						.then((e) => {
							let n = pt(e, t);
							return ((i = n), n);
						})
						.catch((e) => {
							a = e;
						})),
					r),
		c = !1,
		l = b(function (t, r) {
			if (
				(d(() => {
					c = !0;
				}, []),
				a)
			)
				throw a;
			if ((o(), n !== void 0 && kg !== void 0 && kg.add(n), !i))
				throw s(e);
			return _(i, { ref: r, ...t });
		});
	return (
		(l.preload = () => (o(), s(e))),
		(l.getStatus = () => ({ hasLoaded: i !== void 0, hasRendered: c })),
		l
	);
}
function ht(e, t) {
	return Object.prototype.hasOwnProperty.call(e, t);
}
function gt(e) {
	return e === null || !(Mg in e) ? !1 : typeof e.equals == `function`;
}
function _t(e, t) {
	return e === t ? !0 : e !== e && t !== t;
}
function vt(e, t) {
	let n = e.length;
	if (n !== t.length) return !1;
	for (let r = n; r-- !== 0; ) if (!_t(e[r], t[r])) return !1;
	return !0;
}
function yt(e, t) {
	let n = e.length;
	if (n !== t.length) return !1;
	for (let r = n; r-- !== 0; ) if (!Tt(e[r], t[r], !0)) return !1;
	return !0;
}
function bt(e, t) {
	if (e.size !== t.size) return !1;
	for (let [n, r] of e.entries()) if (!_t(r, t.get(n))) return !1;
	return !0;
}
function xt(e, t) {
	if (e.size !== t.size) return !1;
	for (let [n, r] of e.entries()) if (!Tt(r, t.get(n), !0)) return !1;
	return !0;
}
function St(e, t) {
	if (e.size !== t.size) return !1;
	for (let n of e.keys()) if (!t.has(n)) return !1;
	return !0;
}
function Ct(e, t) {
	let n = jg(e);
	if (n.length !== jg(t).length) return !1;
	for (let r of n)
		if (
			!ht(t, r) ||
			(!(r === `_owner` && ht(e, `$$typeof`) && e.$$typeof) &&
				!_t(e[r], t[r]))
		)
			return !1;
	return !0;
}
function wt(e, t) {
	let n = jg(e);
	if (n.length !== jg(t).length) return !1;
	for (let r of n)
		if (
			!ht(t, r) ||
			(!(r === `_owner` && ht(e, `$$typeof`) && e.$$typeof) &&
				!Tt(e[r], t[r], !0))
		)
			return !1;
	return !0;
}
function Tt(e, t, n) {
	if (e === t) return !0;
	if (!e || !t) return e !== e && t !== t;
	let r = typeof e;
	if (r !== typeof t || r !== `object`) return !1;
	let i = Array.isArray(e),
		a = Array.isArray(t);
	if (i && a) return n ? yt(e, t) : vt(e, t);
	if (i !== a) return !1;
	let o = e instanceof Map,
		s = t instanceof Map;
	if (o && s) return n ? xt(e, t) : bt(e, t);
	if (o !== s) return !1;
	let c = e instanceof Set,
		l = t instanceof Set;
	if (c && l) return St(e, t);
	if (c !== l) return !1;
	let u = e instanceof Date,
		d = t instanceof Date;
	if (u && d) return e.getTime() === t.getTime();
	if (u !== d) return !1;
	let f = e instanceof RegExp,
		p = t instanceof RegExp;
	return f && p
		? e.toString() === t.toString()
		: f === p
			? gt(e) && gt(t)
				? e.equals(t)
				: n
					? wt(e, t)
					: Ct(e, t)
			: !1;
}
function Et(e, t, n = !0) {
	try {
		return Tt(e, t, n);
	} catch (e) {
		if (e instanceof Error && /stack|recursion/iu.exec(e.message))
			return (
				console.warn(
					`Warning: isEqual does not handle circular references.`,
					e.name,
					e.message,
				),
				!1
			);
		throw e;
	}
}
function Dt(e) {
	return f.useCallback((t) => e[t], [e]);
}
function Ot({ api: e, children: t }) {
	return _(Ng.Provider, { value: e, children: t });
}
function kt() {
	return f.useContext(Ng);
}
function At({ routes: e, children: t }) {
	let n = Dt(e),
		r = c(() => ({ getRoute: n }), [n]);
	return _(Ng.Provider, { value: r, children: t });
}
function jt() {
	let e = kt(),
		t = C(Pg),
		n = t?.routeId ?? e.currentRouteId,
		r = t?.routeId ? t.pathVariables : e.currentPathVariables,
		i = n ? e.getRoute?.(n) : void 0;
	return c(() => {
		if (!(!n || !i)) return { ...i, id: n, pathVariables: r };
	}, [n, r, i]);
}
function Mt() {
	let e = jt();
	if (e) return `${e.id}-${JSON.stringify(e.pathVariables)}`;
}
function Nt(e) {
	let t = jt(),
		n = f.useRef(t);
	Et(n.current, t) || !t || ((n.current = t), e(t));
}
function Pt(e, t) {
	if (t && e) return e.elements && t in e.elements ? e.elements[t] : t;
}
function Ft(e) {
	let t = [`pointerdown`, `pointerup`, `keydown`, `keyup`],
		n = (e) => {
			let n = e.type;
			t.includes(n) &&
				performance.mark(`framer-navigation-input`, {
					detail: { type: n },
				});
		};
	for (let r = 0; r < t.length; r++)
		document.addEventListener(t[r], n, { signal: e });
	return () => {
		for (let e = 0; e < t.length; e++)
			document.removeEventListener(t[e], n);
	};
}
function It() {
	return jt()?.pathVariables;
}
function B(e, ...t) {
	if (e) return;
	let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
	if (n.stack)
		try {
			let e = n.stack.split(`
`);
			e[1]?.includes(`assert`)
				? (e.splice(1, 1),
					(n.stack = e.join(`
`)))
				: e[0]?.includes(`assert`) &&
					(e.splice(0, 1),
					(n.stack = e.join(`
`)));
		} catch {}
	throw n;
}
function V(e, t) {
	throw t instanceof Error
		? t
		: t === void 0
			? Error(
					e
						? `Unexpected value: ${e}`
						: `Application entered invalid state`,
				)
			: Error(String(t));
}
function Lt(e) {
	return Object(e) !== e;
}
function Rt(e) {
	let t = Object.getPrototypeOf(e);
	return (
		t === Object.prototype ||
		t === null ||
		Object.getPrototypeOf(t) === null ||
		Object.getOwnPropertyNames(t).sort().join(`\0`) === Ug
	);
}
function zt(e) {
	return Object.prototype.toString.call(e).slice(8, -1);
}
function Bt(e) {
	switch (e) {
		case `"`:
			return `\\"`;
		case `<`:
			return `\\u003C`;
		case `\\`:
			return `\\\\`;
		case `
`:
			return `\\n`;
		case `\r`:
			return `\\r`;
		case `	`:
			return `\\t`;
		case `\b`:
			return `\\b`;
		case `\f`:
			return `\\f`;
		case `\u2028`:
			return `\\u2028`;
		case `\u2029`:
			return `\\u2029`;
		default:
			return e < ` `
				? `\\u${e.charCodeAt(0).toString(16).padStart(4, `0`)}`
				: ``;
	}
}
function Vt(e) {
	let t = ``,
		n = 0,
		r = e.length;
	for (let i = 0; i < r; i += 1) {
		let r = e[i],
			a = Bt(r);
		a && ((t += e.slice(n, i) + a), (n = i + 1));
	}
	return `"${n === 0 ? e : t + e.slice(n)}"`;
}
function Ht(e) {
	return Object.getOwnPropertySymbols(e).filter(
		(t) => Object.getOwnPropertyDescriptor(e, t).enumerable,
	);
}
function Ut(e) {
	return Wg.test(e) ? `.` + e : `[` + JSON.stringify(e) + `]`;
}
function Wt(e) {
	if (e.length === 0 || (e.length > 1 && e.charCodeAt(0) === 48)) return !1;
	for (let t = 0; t < e.length; t++) {
		let n = e.charCodeAt(t);
		if (n < 48 || n > 57) return !1;
	}
	let t = +e;
	return !(t >= 2 ** 32 - 1 || t < 0);
}
function Gt(e) {
	let t = Object.keys(e);
	for (var n = t.length - 1; n >= 0 && !Wt(t[n]); n--);
	return ((t.length = n + 1), t);
}
function Kt(e) {
	let t = new DataView(e),
		n = ``;
	for (let r = 0; r < e.byteLength; r++)
		n += String.fromCharCode(t.getUint8(r));
	return Yt(n);
}
function qt(e) {
	let t = Jt(e),
		n = new ArrayBuffer(t.length),
		r = new DataView(n);
	for (let e = 0; e < n.byteLength; e++) r.setUint8(e, t.charCodeAt(e));
	return n;
}
function Jt(e) {
	e.length % 4 == 0 && (e = e.replace(/==?$/, ``));
	let t = ``,
		n = 0,
		r = 0;
	for (let i = 0; i < e.length; i++)
		((n <<= 6),
			(n |= Gg.indexOf(e[i])),
			(r += 6),
			r === 24 &&
				((t += String.fromCharCode((n & 16711680) >> 16)),
				(t += String.fromCharCode((n & 65280) >> 8)),
				(t += String.fromCharCode(n & 255)),
				(n = r = 0)));
	return (
		r === 12
			? ((n >>= 4), (t += String.fromCharCode(n)))
			: r === 18 &&
				((n >>= 2),
				(t += String.fromCharCode((n & 65280) >> 8)),
				(t += String.fromCharCode(n & 255))),
		t
	);
}
function Yt(e) {
	let t = ``;
	for (let n = 0; n < e.length; n += 3) {
		let r = [void 0, void 0, void 0, void 0];
		((r[0] = e.charCodeAt(n) >> 2),
			(r[1] = (e.charCodeAt(n) & 3) << 4),
			e.length > n + 1 &&
				((r[1] |= e.charCodeAt(n + 1) >> 4),
				(r[2] = (e.charCodeAt(n + 1) & 15) << 2)),
			e.length > n + 2 &&
				((r[2] |= e.charCodeAt(n + 2) >> 6),
				(r[3] = e.charCodeAt(n + 2) & 63)));
		for (let e = 0; e < r.length; e++)
			r[e] === void 0 ? (t += `=`) : (t += Gg[r[e]]);
	}
	return t;
}
function Xt(e, t) {
	return Zt(JSON.parse(e), t);
}
function Zt(e, t) {
	if (typeof e == `number`) return a(e, !0);
	if (!Array.isArray(e) || e.length === 0) throw Error(`Invalid input`);
	let n = e,
		r = Array(n.length),
		i = null;
	function a(e, o = !1) {
		if (e === Kg) return;
		if (e === Jg) return NaN;
		if (e === Yg) return 1 / 0;
		if (e === Xg) return -1 / 0;
		if (e === Zg) return -0;
		if (o || typeof e != `number`) throw Error(`Invalid input`);
		if (e in r) return r[e];
		let s = n[e];
		if (!s || typeof s != `object`) r[e] = s;
		else if (Array.isArray(s))
			if (typeof s[0] == `string`) {
				let o = s[0],
					c = t && Object.hasOwn(t, o) ? t[o] : void 0;
				if (c) {
					let t = s[1];
					if (
						(typeof t != `number` && (t = n.push(s[1]) - 1),
						(i ??= new Set()),
						i.has(t))
					)
						throw Error(`Invalid circular reference`);
					return (i.add(t), (r[e] = c(a(t))), i.delete(t), r[e]);
				}
				switch (o) {
					case `Date`:
						r[e] = new Date(s[1]);
						break;
					case `Set`:
						let t = new Set();
						r[e] = t;
						for (let e = 1; e < s.length; e += 1) t.add(a(s[e]));
						break;
					case `Map`:
						let i = new Map();
						r[e] = i;
						for (let e = 1; e < s.length; e += 2)
							i.set(a(s[e]), a(s[e + 1]));
						break;
					case `RegExp`:
						r[e] = new RegExp(s[1], s[2]);
						break;
					case `Object`:
						let c = Object(s[1]);
						if (Object.hasOwn(c, `__proto__`))
							throw Error(
								"Cannot parse an object with a `__proto__` property",
							);
						r[e] = c;
						break;
					case `BigInt`:
						r[e] = BigInt(s[1]);
						break;
					case `null`:
						let l = Object.create(null);
						r[e] = l;
						for (let e = 1; e < s.length; e += 2) {
							if (s[e] === `__proto__`)
								throw Error(
									"Cannot parse an object with a `__proto__` property",
								);
							l[s[e]] = a(s[e + 1]);
						}
						break;
					case `Int8Array`:
					case `Uint8Array`:
					case `Uint8ClampedArray`:
					case `Int16Array`:
					case `Uint16Array`:
					case `Int32Array`:
					case `Uint32Array`:
					case `Float32Array`:
					case `Float64Array`:
					case `BigInt64Array`:
					case `BigUint64Array`: {
						if (n[s[1]][0] !== `ArrayBuffer`)
							throw Error(`Invalid data`);
						let t = globalThis[o],
							i = new t(a(s[1]));
						r[e] = s[2] === void 0 ? i : i.subarray(s[2], s[3]);
						break;
					}
					case `ArrayBuffer`: {
						let t = s[1];
						if (typeof t != `string`)
							throw Error(`Invalid ArrayBuffer encoding`);
						r[e] = qt(t);
						break;
					}
					case `Temporal.Duration`:
					case `Temporal.Instant`:
					case `Temporal.PlainDate`:
					case `Temporal.PlainTime`:
					case `Temporal.PlainDateTime`:
					case `Temporal.PlainMonthDay`:
					case `Temporal.PlainYearMonth`:
					case `Temporal.ZonedDateTime`: {
						let t = o.slice(9);
						r[e] = Temporal[t].from(s[1]);
						break;
					}
					case `URL`:
						r[e] = new URL(s[1]);
						break;
					case `URLSearchParams`:
						r[e] = new URLSearchParams(s[1]);
						break;
					default:
						throw Error(`Unknown type ${o}`);
				}
			} else if (s[0] === Qg) {
				let t = s[1];
				if (!Number.isInteger(t) || t < 0) throw Error(`Invalid input`);
				let n = Array(t);
				r[e] = n;
				for (let e = 2; e < s.length; e += 2) {
					let r = s[e];
					if (!Number.isInteger(r) || r < 0 || r >= t)
						throw Error(`Invalid input`);
					n[r] = a(s[e + 1]);
				}
			} else {
				let t = Array(s.length);
				r[e] = t;
				for (let e = 0; e < s.length; e += 1) {
					let n = s[e];
					n !== qg && (t[e] = a(n));
				}
			}
		else {
			let t = {};
			r[e] = t;
			for (let e of Object.keys(s)) {
				if (e === `__proto__`)
					throw Error(
						"Cannot parse an object with a `__proto__` property",
					);
				let n = s[e];
				t[e] = a(n);
			}
		}
		return r[e];
	}
	return a(0);
}
function Qt(e, t) {
	let n = [],
		r = new Map(),
		i = [];
	if (t)
		for (let e of Object.getOwnPropertyNames(t))
			i.push({ key: e, fn: t[e] });
	let a = [],
		o = 0;
	function s(t) {
		if (t === void 0) return Kg;
		if (Number.isNaN(t)) return Jg;
		if (t === 1 / 0) return Yg;
		if (t === -1 / 0) return Xg;
		if (t === 0 && 1 / t < 0) return Zg;
		if (r.has(t)) return r.get(t);
		let c = o++;
		r.set(t, c);
		for (let { key: e, fn: r } of i) {
			let i = r(t);
			if (i) return ((n[c] = `["${e}",${s(i)}]`), c);
		}
		if (typeof t == `function`)
			throw new Hg(`Cannot stringify a function`, a, t, e);
		let l = ``;
		if (Lt(t)) l = $t(t);
		else {
			let n = zt(t);
			switch (n) {
				case `Number`:
				case `String`:
				case `Boolean`:
					l = `["Object",${$t(t)}]`;
					break;
				case `BigInt`:
					l = `["BigInt",${t}]`;
					break;
				case `Date`:
					l = `["Date","${isNaN(t.getDate()) ? `` : t.toISOString()}"]`;
					break;
				case `URL`:
					l = `["URL",${Vt(t.toString())}]`;
					break;
				case `URLSearchParams`:
					l = `["URLSearchParams",${Vt(t.toString())}]`;
					break;
				case `RegExp`:
					let { source: r, flags: i } = t;
					l = i
						? `["RegExp",${Vt(r)},"${i}"]`
						: `["RegExp",${Vt(r)}]`;
					break;
				case `Array`: {
					let e = !1;
					l = `[`;
					for (let n = 0; n < t.length; n += 1)
						if ((n > 0 && (l += `,`), Object.hasOwn(t, n)))
							(a.push(`[${n}]`), (l += s(t[n])), a.pop());
						else if (e) l += qg;
						else {
							let n = Gt(t),
								r = n.length,
								i = String(t.length).length;
							if ((t.length - r) * 3 > 4 + i + r * (i + 1)) {
								l = `[` + Qg + `,` + t.length;
								for (let e = 0; e < n.length; e++) {
									let r = n[e];
									(a.push(`[${r}]`),
										(l += `,` + r + `,` + s(t[r])),
										a.pop());
								}
								break;
							} else ((e = !0), (l += qg));
						}
					l += `]`;
					break;
				}
				case `Set`:
					l = `["Set"`;
					for (let e of t) l += `,${s(e)}`;
					l += `]`;
					break;
				case `Map`:
					l = `["Map"`;
					for (let [e, n] of t)
						(a.push(`.get(${Lt(e) ? $t(e) : `...`})`),
							(l += `,${s(e)},${s(n)}`),
							a.pop());
					l += `]`;
					break;
				case `Int8Array`:
				case `Uint8Array`:
				case `Uint8ClampedArray`:
				case `Int16Array`:
				case `Uint16Array`:
				case `Int32Array`:
				case `Uint32Array`:
				case `Float32Array`:
				case `Float64Array`:
				case `BigInt64Array`:
				case `BigUint64Array`: {
					let e = t;
					l = `["` + n + `",` + s(e.buffer);
					let r = t.byteOffset,
						i = r + t.byteLength;
					if (r > 0 || i !== e.buffer.byteLength) {
						let e = /(\d+)/.exec(n)[1] / 8;
						l += `,${r / e},${i / e}`;
					}
					l += `]`;
					break;
				}
				case `ArrayBuffer`:
					l = `["ArrayBuffer","${Kt(t)}"]`;
					break;
				case `Temporal.Duration`:
				case `Temporal.Instant`:
				case `Temporal.PlainDate`:
				case `Temporal.PlainTime`:
				case `Temporal.PlainDateTime`:
				case `Temporal.PlainMonthDay`:
				case `Temporal.PlainYearMonth`:
				case `Temporal.ZonedDateTime`:
					l = `["${n}",${Vt(t.toString())}]`;
					break;
				default:
					if (!Rt(t))
						throw new Hg(
							`Cannot stringify arbitrary non-POJOs`,
							a,
							t,
							e,
						);
					if (Ht(t).length > 0)
						throw new Hg(
							`Cannot stringify POJOs with symbolic keys`,
							a,
							t,
							e,
						);
					if (Object.getPrototypeOf(t) === null) {
						l = `["null"`;
						for (let n of Object.keys(t)) {
							if (n === `__proto__`)
								throw new Hg(
									`Cannot stringify objects with __proto__ keys`,
									a,
									t,
									e,
								);
							(a.push(Ut(n)),
								(l += `,${Vt(n)},${s(t[n])}`),
								a.pop());
						}
						l += `]`;
					} else {
						l = `{`;
						let n = !1;
						for (let r of Object.keys(t)) {
							if (r === `__proto__`)
								throw new Hg(
									`Cannot stringify objects with __proto__ keys`,
									a,
									t,
									e,
								);
							(n && (l += `,`),
								(n = !0),
								a.push(Ut(r)),
								(l += `${Vt(r)}:${s(t[r])}`),
								a.pop());
						}
						l += `}`;
					}
			}
		}
		return ((n[c] = l), c);
	}
	let c = s(e);
	return c < 0 ? `${c}` : `[${n.join(`,`)}]`;
}
function $t(e) {
	let t = typeof e;
	return t === `string`
		? Vt(e)
		: e instanceof String
			? Vt(e.toString())
			: e === void 0
				? Kg.toString()
				: e === 0 && 1 / e < 0
					? Zg.toString()
					: t === `bigint`
						? `["BigInt","${e}"]`
						: String(e);
}
function en(e, t, n = `lazy`) {
	switch ((G.__framer_events?.push([e, t, n]), e)) {
		case `published_site_click`: {
			let { trackingId: e, href: n } = t;
			e &&
				document.dispatchEvent(
					new CustomEvent(`framer:click`, {
						detail: { trackingId: e, href: n },
					}),
				);
			break;
		}
		case `published_site_form_submit`: {
			let { trackingId: e } = t;
			e &&
				document.dispatchEvent(
					new CustomEvent(`framer:formsubmit`, {
						detail: { trackingId: e },
					}),
				);
			break;
		}
		case `published_site_pageview`: {
			let { framerLocale: e } = t;
			document.dispatchEvent(
				new CustomEvent(`framer:pageview`, {
					detail: { framerLocale: e },
				}),
			);
			break;
		}
		case `published_site_trigger_invoke`: {
			let { trackingId: e } = t;
			e &&
				document.dispatchEvent(
					new CustomEvent(`framer:triggerinvoke`, {
						detail: { trackingId: e },
					}),
				);
			break;
		}
	}
}
function tn(e) {
	return L(e) && (e === `` || e_.test(e));
}
function nn() {
	return { [t_.QueryCache]: new Map(), [t_.CollectionUtilsCache]: new Map() };
}
function rn() {
	if (!xg) return;
	if (n_ !== void 0) return n_;
	let e = document.getElementById(`__framer__handoverData`);
	if (e) {
		try {
			n_ = Xt(e.text) ?? nn();
		} catch (e) {
			((n_ = nn()),
				console.warn(
					`Failed to parse handover data. Falling back to network.`,
					e,
				));
		}
		return (
			wg(() => {
				(e?.remove(), (e = null));
			}),
			n_
		);
	}
}
function an(e, t) {
	if (
		(console.warn(
			ut(
				`Failed to resolve raw query result from DOM during hydration for: ${t}. This might make the page load slightly slower.`,
			),
		),
		Math.random() < 0.01)
	) {
		let t =
			e instanceof Error && typeof e.stack == `string` ? e.stack : null;
		en(`published_site_load_error`, { message: String(e), stack: t });
	}
}
function on(e, t) {
	let n = rn();
	return n ? n[e].has(t) : !1;
}
function sn(e, t) {
	let n = rn();
	if (!n) return;
	let r = n[e];
	if (!r.has(t)) return;
	let i = r.get(t);
	return (r.delete(t), i);
}
function cn(e) {
	return e?.id ?? zg;
}
function ln(e, t, n, r) {
	return `${e}|${t}|${n}|${r}`;
}
function un(e) {
	return (t) => {
		if (!e) return;
		let n = e[t];
		if (!n) return;
		if (o_.has(n)) return o_.get(n);
		let r = new c_(n, t);
		return (o_.set(n, r), r);
	};
}
function dn({ children: e, collectionUtils: t }) {
	let n = c(() => ({ get: un(t) }), [t]);
	return _(s_.Provider, { value: n, children: e });
}
function fn() {
	return C(s_);
}
function pn() {
	for (let e of d_) e();
	d_.clear();
}
function mn(e) {
	return new Promise((t) => {
		if ((d_.add(t), document.hidden)) {
			pn();
			return;
		}
		(document.addEventListener(`visibilitychange`, pn),
			document.addEventListener(`pagehide`, pn),
			Ae.read(() => {
				gn(e).then(() => {
					(d_.delete(t), !e?.signal?.aborted && t());
				});
			}));
	});
}
function hn(e) {
	return new Promise((t) => {
		(setTimeout(t, 100),
			Ae.read(
				() => {
					gn(e).then(t);
				},
				!1,
				!0,
			));
	});
}
function gn(e) {
	let t = e?.priority;
	return l_ || u_
		? t === `background`
			? new Promise((e) => {
					setTimeout(e, 1);
				})
			: l_
				? G.scheduler.yield(e).catch(bg)
				: G.scheduler.postTask(() => {}, e).catch(bg)
		: t === `user-blocking`
			? Promise.resolve()
			: new Promise((e) => {
					setTimeout(e, t === `background` ? 1 : 0);
				});
}
function _n(e) {
	let { continueAfter: t, ensureContinueBeforeUnload: n, ...r } = e ?? {};
	return n ? mn(r) : t === `paint` ? hn(r) : gn(r);
}
function vn() {
	let e = fn(),
		{ autobahnNavigation: t } = Rg(),
		{ getRoute: n } = kt();
	return l(
		(r, i, a = !0, o = !0) => {
			if (!r || !n) return;
			let s = n(r),
				{ pathVariables: c, locale: l } = i;
			return bn(
				s,
				{ routeId: r, pathVariables: c, locale: l, collectionUtils: e },
				a,
				o && t,
			);
		},
		[n, e, t],
	);
}
function yn(e, t = !0) {
	let n = vn();
	d(() => {
		if (!(!t || !f_)) for (let t of e) n(t, {});
	}, [e, t, n]);
}
async function bn(e, t, n = !0, r = !0) {
	if (!f_ || !e) return;
	let i = e.page;
	if (!(!i || !ft(i))) {
		n && (await _n());
		try {
			let e = await i.preload();
			r && t && e && (await xn(e, t));
		} catch {}
	}
}
async function xn(e, t) {
	let n = e.loader;
	if (!n?.load) return;
	let r = {
		signal: t.signal ?? new AbortController().signal,
		pathVariables: t.pathVariables ?? {},
		routeId: t.routeId,
		locale: t.locale,
		collectionUtils: t.collectionUtils,
	};
	try {
		await n.load({}, r);
	} catch {}
}
function Sn(e, t) {
	if (!e.startsWith(`/`) || !t.startsWith(`/`))
		throw Error(`from/to paths are expected to be absolute`);
	let [n] = Cn(e),
		[r, i] = Cn(t),
		a = wn(n, r);
	return (
		a === `` && (a = `.`),
		!a.startsWith(`.`) && !a.startsWith(`/`) && (a = `./` + a),
		a + `/` + i
	);
}
function Cn(e) {
	let t = e.lastIndexOf(`/`);
	return [e.substring(0, t + 1), e.substring(t + 1)];
}
function wn(e, t) {
	if (e === t || ((e = `/` + Tn(e)), (t = `/` + Tn(t)), e === t)) return ``;
	let n = e.length,
		r = n - 1,
		i = t.length - 1,
		a = r < i ? r : i,
		o = -1,
		s = 0;
	for (; s < a; s++) {
		let n = h_(e, 1 + s);
		if (n !== h_(t, 1 + s)) break;
		n === m_ && (o = s);
	}
	if (s === a)
		if (i > a) {
			if (h_(t, 1 + s) === m_) return __(t, 1 + s + 1);
			if (s === 0) return __(t, 1 + s);
		} else r > a && (h_(e, 1 + s) === m_ ? (o = s) : s === 0 && (o = 0));
	let c = ``;
	for (s = 1 + o + 1; s <= n; ++s)
		(s === n || h_(e, s) === m_) && (c += c.length === 0 ? `..` : `/..`);
	return `${c}${__(t, 1 + o)}`;
}
function Tn(e) {
	let t = ``,
		n = 0,
		r = -1,
		i = 0,
		a = 0;
	for (let o = 0; o <= e.length; ++o) {
		if (o < e.length) a = h_(e, o);
		else if (b_(a)) break;
		else a = m_;
		if (b_(a)) {
			if (!(r === o - 1 || i === 1))
				if (i === 2) {
					if (
						t.length < 2 ||
						n !== 2 ||
						h_(t, t.length - 1) !== p_ ||
						h_(t, t.length - 2) !== p_
					) {
						if (t.length > 2) {
							let e = g_(t, y_);
							(e === -1
								? ((t = ``), (n = 0))
								: ((t = __(t, 0, e)),
									(n = t.length - 1 - g_(t, y_))),
								(r = o),
								(i = 0));
							continue;
						} else if (t.length !== 0) {
							((t = ``), (n = 0), (r = o), (i = 0));
							continue;
						}
					}
					v_ && ((t += t.length > 0 ? `${y_}..` : `..`), (n = 2));
				} else
					(t.length > 0
						? (t += `${y_}${__(e, r + 1, o)}`)
						: (t = __(e, r + 1, o)),
						(n = o - r - 1));
			((r = o), (i = 0));
		} else a === p_ && i !== -1 ? ++i : (i = -1);
	}
	return t;
}
function En(e, t) {
	return e.replace(S_, (e, n) => {
		let r = t[n];
		return typeof r != `string` || r.length === 0
			? e
			: encodeURIComponent(r);
	});
}
function Dn(e, t = !1) {
	let n = ``;
	if (m !== void 0)
		if (t) n = m.location.search;
		else {
			let e = m.history?.state?.queryParamBackAnchorSearch;
			n = e === void 0 ? m.location.search : e === `` ? `` : `?${e}`;
		}
	return n ? On(n, e) : e;
}
function On(e, t) {
	let n = t.indexOf(`#`),
		r = n === -1 ? t : t.substring(0, n),
		i = n === -1 ? `` : t.substring(n),
		a = r.indexOf(`?`),
		o = a === -1 ? r : r.substring(0, a),
		s = a === -1 ? `` : r.substring(a),
		c = new URLSearchParams(s),
		l = new URLSearchParams(e);
	for (let [e, t] of l) c.has(e) || (e !== C_ && c.append(e, t));
	let u = c.toString();
	return u === `` ? r + i : o + `?` + u + i;
}
async function kn(e, t, n, r, i, a, o) {
	let s = e,
		c = !1,
		l = { ...a },
		u = Array.from(s.matchAll(S_)),
		d = await Promise.all(
			u.map(async (e) => {
				let s = e?.[0],
					u = e?.[1];
				if (!s || !u)
					throw Error(
						`Failed to replace path variables: unexpected regex match group`,
					);
				let d = a[u];
				if (!d || !L(d))
					throw Error(`No slug found for path variable ${u}`);
				let f = o?.get(i);
				if (!f || !t) return d;
				let p = f.getRecordIdBySlug(d, t),
					m = st(p) ? await p : p;
				if (!m) return d;
				let h = f.getSlugByRecordId(m, n),
					g = st(h) ? await h : h;
				if (!g) {
					c = !0;
					let e = f.getSlugByRecordId(m, r),
						t = st(e) ? await e : e;
					return (t && (l[u] = t), t ?? d);
				}
				return ((l[u] = g), g);
			}),
		),
		f = 0,
		p = ``,
		m = !1;
	for (let e = 0; e < u.length; e++) {
		let t = u[e],
			n = d[e];
		!t ||
			!n ||
			((p += s.substring(f, t.index)),
			(f = (t.index ?? 0) + (t[0]?.length ?? 0)),
			(p += d[e]),
			(m = !0));
	}
	return (
		m && ((p += s.substring(f)), (s = p)),
		{ path: s, pathVariables: l, isMissingInLocale: c }
	);
}
async function An({
	currentLocale: e,
	nextLocale: t,
	defaultLocale: n,
	route: r,
	pathVariables: i,
	collectionUtils: a,
	preserveQueryParams: o,
}) {
	let { path: s, pathLocalized: c } = r,
		l = c?.[t.id] ?? s,
		u = { path: l, pathVariables: i, isMissingInLocale: !1 };
	if (!l) return u;
	if (i && r.collectionId)
		try {
			u = await kn(l, e, t, n, r.collectionId, i, a);
		} catch {}
	return (
		t.slug && (u.path = `/` + t.slug + u.path),
		o && u.path && (u.path = Dn(u.path, !0)),
		u
	);
}
function jn(e) {
	if (!e) return ``;
	let t;
	try {
		t = new URL(e);
	} catch {
		return ``;
	}
	return t.pathname === `/` || m.location.origin !== t.origin
		? ``
		: t.pathname.endsWith(`/`)
			? t.pathname.slice(0, -1)
			: t.pathname;
}
function Mn({ children: e, value: t }) {
	return _(w_.Provider, { value: t, children: e });
}
function Nn() {
	return f.useContext(w_);
}
function Pn(e, t, { global: n, routes: r }) {
	return r[e]?.[t] || n;
}
function Fn(e) {
	let t = T_,
		n = e.next(0),
		r = [n.value];
	for (; !n.done && t < E_; ) ((n = e.next(t)), r.push(n.value), (t += T_));
	return (
		r.length === 1 && r.push(n.value),
		{ easing: `linear(${r.join(`,`)})`, duration: t - T_ }
	);
}
function In(e) {
	return [parseFloat(e), e.endsWith(`px`) ? `px` : `%`];
}
function Ln(e) {
	let { innerWidth: t, innerHeight: n } = m,
		[r, i] = In(e.x),
		[a, o] = In(e.y);
	return {
		x: i === `px` ? r : (r / 100) * t,
		y: o === `px` ? a : (a / 100) * n,
	};
}
function Rn(e, t, n, r) {
	let i = `
      opacity: ${e.opacity};
      transform: translate(${e.x}, ${e.y}) scale(${e.scale}) rotateX(${e.rotateX}deg) rotateY(${e.rotateY}deg) rotateZ(${e.rotate}deg);
    `;
	return (e.mask && (i += r?.makeKeyframe?.(e.mask, t, n) || ``), i);
}
function zn(e) {
	return e ? O_[e] : void 0;
}
function Bn(e, { transition: t, ...n }) {
	let r = `view-transition-` + e,
		i = { duration: `0s`, easing: `linear` };
	if (t.type === `tween`)
		((i.duration = t.duration + `s`),
			(i.easing = `cubic-bezier(${t.ease.join(`,`)})`));
	else if (Vn(t)) {
		let { easing: e, duration: n } = Fn(
			ae({
				keyframes: [0, 1],
				...Hn(t),
				restDelta: 0.001,
				restSpeed: 1e-4,
			}),
		);
		((i.duration = n + `ms`), (i.easing = e));
	}
	let a = zn(n?.mask?.type),
		o = Rn(n, `start`, e, a),
		s = Rn({ ...k_, mask: n.mask }, `end`, e, a);
	return (
		e === `exit` && ([o, s] = [s, o]),
		`
        ${n.mask && a?.makePropertyRules ? a.makePropertyRules(n.mask) : ``}

        @keyframes ${r} {
            0% {
                ${o}
            }

            100% {
                ${s}
            }
        }

        ::view-transition-${e === `enter` ? `new` : `old`}(root) {
            animation-name: ${r};
            animation-duration: ${i.duration};
            animation-delay: ${t.delay}s;
            animation-timing-function: ${i.easing};
            animation-fill-mode: both;
            ${n.mask && a?.makeStyles ? a.makeStyles(n.mask, e) : ``}
        }
    `
	);
}
function Vn(e) {
	return e.type === `spring`;
}
function Hn(e) {
	return e.durationBasedSpring
		? { duration: e.duration * 1e3, bounce: e.bounce }
		: { stiffness: e.stiffness, damping: e.damping, mass: e.mass };
}
function Un({ exit: e = j_, enter: t }) {
	let n = document.createElement(`style`);
	n.id = A_;
	let r = `
        @media (prefers-reduced-motion) {
            ::view-transition-group(*),
            ::view-transition-old(*),
            ::view-transition-new(*) {
                animation: none !important;
            }
        }
    `;
	((e.mask ||
		t.mask ||
		e.opacity ||
		t.opacity ||
		e.transition.delay ||
		t.transition.delay) &&
		(r += `
            ::view-transition-old(*),
            ::view-transition-new(*) {
                mix-blend-mode: normal;
            }
        `),
		(r += `
        ::view-transition-old(*),
        ::view-transition-new(*) {
            backface-visibility: hidden;
        }
    `),
		(r += Bn(`exit`, e)),
		(r += Bn(`enter`, t)),
		(n.textContent = r),
		document.head.appendChild(n));
}
function Wn() {
	wg(() => {
		Ae.render(() => {
			performance.mark(`framer-vt-remove`);
			let e = document.getElementById(A_);
			e && document.head.removeChild(e);
		});
	});
}
function Gn() {
	return false;
}
function Kn(e) {
	return new Promise((t) => {
		Ae.render(() => {
			(performance.mark(`framer-vt-style`), Un(e), t());
		});
	});
}
async function qn(e, t, n) {
	if (!Gn()) {
		e();
		return;
	}
	if ((await Kn(t), n?.aborted)) return;
	performance.mark(`framer-vt`);
	let r = document.startViewTransition(async () => {
		(performance.mark(`framer-vt-freeze`),
			!n?.aborted &&
				(n?.addEventListener(`abort`, () => r.skipTransition()),
				await e()));
	});
	return (
		r.updateCallbackDone
			.then(() => {
				performance.mark(`framer-vt-unfreeze`);
			})
			.catch(M_),
		Promise.all([r.ready, r.finished])
			.then(() => {
				(performance.mark(`framer-vt-finished`), Wn());
			})
			.catch(M_),
		r
	);
}
function Jn() {
	let e = Nn(),
		t = w(void 0);
	return (
		d(() => {
			t.current &&= (t.current(), void 0);
		}),
		l(
			(n, r, i, a) => {
				let o = Pn(n, r, e);
				if (o) {
					let e = new Promise((e) => {
						t.current = e;
					});
					return qn(
						async () => {
							(i(), await e);
						},
						o,
						a,
					);
				}
				i();
			},
			[e],
		)
	);
}
function Yn(e, t) {
	wg(() => {
		let n = document.querySelector(`link[rel='canonical']`);
		if (!n) return;
		let r = new URL(e, t);
		((r.search = ``), n.setAttribute(`href`, r.toString()));
	});
}
function Xn(e, t, n, i = r) {
	i(() => {
		let t = async (e) => (await _n({ ...n, continueAfter: `paint` }), e()),
			r = t(e);
		return () => {
			(async () => {
				let e = await r;
				e && t(e);
			})();
		};
	}, t);
}
function Zn(e) {
	let t = w(void 0);
	return (
		Xn(
			() => {
				t.current &&= (t.current(), void 0);
			},
			void 0,
			{ priority: `user-blocking` },
		),
		l(
			(n) => {
				let r = new Promise((e) => {
					t.current = e;
				});
				if (!e) return { promise: r, measureDetail: n, ignore: null };
				let i = `${e}-start`,
					a = `${e}-end`,
					o = !1;
				return (
					performance.mark(i),
					r
						.finally(() => {
							o ||
								(performance.mark(a),
								performance.measure(e, {
									start: i,
									end: a,
									detail: n,
								}));
						})
						.catch((e) => {
							console.error(e);
						}),
					{
						promise: r,
						measureDetail: n,
						ignore: () => {
							((o = !0), t.current?.(), (t.current = void 0));
						},
					}
				);
			},
			[e],
		)
	);
}
async function Qn(
	e,
	t,
	{
		currentRoutePath: n,
		currentRoutePathLocalized: r,
		currentPathVariables: i,
		hash: a,
		pathVariables: o,
		localeId: s,
		preserveQueryParams: c,
		siteCanonicalURL: l,
	},
	u = !1,
) {
	let { path: d } = t;
	if (!d) return;
	let f = ar(t, {
			currentRoutePath: n,
			currentRoutePathLocalized: r,
			currentPathVariables: i,
			hash: a,
			pathVariables: o,
			preserveQueryParams: c,
			siteCanonicalURL: l,
			localeId: s,
		}),
		p = n !== void 0 && n === d,
		h = $n(m.history.state) ? m.history.state : void 0,
		g = p ? h?.queryParamBackAnchorSearch : void 0;
	try {
		return await tr(
			{
				routeId: e,
				hash: a,
				pathVariables: o,
				localeId: s,
				queryParamBackAnchorSearch: g,
			},
			f,
			u,
		);
	} catch {}
}
function $n(e) {
	return z(e) && L(e.routeId);
}
function er(e, t, n = !1) {
	(performance.mark(`framer-history-replace`),
		t && Yn(t, m.location.href),
		(n ? m.history.__proto__.replaceState : m.history.replaceState).call(
			m.history,
			e,
			``,
			t,
		));
}
async function tr(e, t, n = !1) {
	if ((performance.mark(`framer-history-push`), Yn(t, m.location.href), !n)) {
		m.history.pushState(e, ``, t);
		return;
	}
	let r = !1,
		i;
	(F_ &&
		((i = () => {
			if (((r = !0), I_)) return;
			let e = `Popstate called after intercept(). Please report this to the Framer team.`;
			(console.error(e),
				en(`published_site_load_recoverable_error`, { message: e }));
		}),
		m.addEventListener(`popstate`, i, { once: !0 })),
		I_ && F_
			? m.history.__proto__.pushState.call(m.history, e, ``, t)
			: m.history.pushState(e, ``, t),
		F_ &&
			queueMicrotask(() => {
				r || ((F_ = !1), m.removeEventListener(`popstate`, i));
			}));
}
function nr({
	disabled: e,
	routeId: t,
	initialPathVariables: n,
	initialLocaleId: i,
}) {
	r(() => {
		if (e) return;
		performance.mark(`framer-history-set-initial-state`);
		let r = z(m.history.state) ? m.history.state : {},
			a = m.location.hash ? m.location.hash.slice(1) : void 0;
		er(
			{ ...r, routeId: t, hash: a, pathVariables: n, localeId: i },
			void 0,
			!0,
		);
	}, []);
}
function rr(e, t) {
	let n = Jn(),
		r = Zn(`framer-route-change`),
		i = w(void 0),
		a = l(
			async ({ state: a }) => {
				if (
					(m.navigation?.transition &&
						m.navigation?.transition?.navigationType !==
							`traverse`) ||
					!z(a)
				)
					return;
				let { routeId: o, hash: s, pathVariables: c, localeId: l } = a;
				if (!L(o)) return;
				let u = r({ popstate: !0 }),
					d = Ft();
				u.promise.finally(d);
				let f = await n(e.current, o, () => {
						t(
							o,
							L(l) ? l : void 0,
							L(s) ? s : void 0,
							m.location.pathname +
								m.location.search +
								m.location.hash,
							z(c) ? c : void 0,
							!0,
							u,
							!1,
						);
					}),
					p = m.navigation?.transition;
				(await (f?.updateCallbackDone ?? Promise.resolve())
					.then(i.current?.resolve)
					.catch(i.current?.reject),
					await u.promise);
				try {
					await p?.finished;
				} catch (e) {
					console.warn(`Popstate transition failed`, e);
				}
				(P_(), Yn(m.location.href));
			},
			[e, r, t, n],
		),
		o = l((e) => {
			e.navigationType !== `traverse` ||
				!e.canIntercept ||
				e.intercept({
					async handler() {
						(await new Promise((e, t) => {
							i.current = { resolve: e, reject: t };
						}),
							(i.current = void 0));
					},
					scroll: `after-transition`,
				});
		}, []);
	d(
		() => (
			m.addEventListener(`popstate`, a),
			L_ && m.navigation.addEventListener(`navigate`, o),
			() => {
				(m.removeEventListener(`popstate`, a),
					L_ && m.navigation.removeEventListener(`navigate`, o));
			}
		),
		[a, o],
	);
}
function ir(e, t, n) {
	let r = Pt(t, e);
	if (!r) return;
	let i = Object.assign({}, t?.elements, n);
	return r.replace(S_, (e, t) => i[t] ?? e);
}
function ar(
	e,
	{
		currentRoutePath: t,
		currentRoutePathLocalized: n,
		currentPathVariables: r,
		hash: i,
		pathVariables: a,
		hashVariables: o,
		relative: s = !0,
		preserveQueryParams: c,
		onlyHash: l = !1,
		siteCanonicalURL: u,
		localeId: d,
	},
) {
	let f = ir(i, e, o);
	if (l) return f ?? ``;
	let p = t ?? `/`;
	(n && d && (p = n[d] ?? p),
		r && (p = p.replace(S_, (e, t) => String(r[t] || e))));
	let h = (d ? e?.pathLocalized?.[d] : void 0) ?? e?.path ?? `/`;
	a && (h = h.replace(S_, (e, t) => String(a[t] || e)));
	let g = !!(p === h && f),
		_ =
			!g &&
			a !== void 0 &&
			t !== void 0 &&
			e?.path !== void 0 &&
			t === e.path &&
			p !== h;
	if (s)
		if (x_.has(p) && m !== void 0) {
			let e = jn(u);
			h = Sn(m.location.pathname, e + h);
		} else h = Sn(p, h);
	let v = g || _;
	return ((c || v) && (h = Dn(h, v)), f && (h = `${h}#${f}`), h);
}
async function or(e, t, n) {
	if (!e.path || !t) return !1;
	let r = `${n.slug ? `/${n.slug}` : ``}${En(e.path, t)}`;
	return (await fetch(r, { method: `HEAD`, redirect: `manual` })).type ===
		`opaqueredirect`
		? ((m.location.href = m.location.origin + r), !0)
		: !1;
}
function sr() {
	let e = fn();
	return l((t) => cr({ ...t, collectionUtils: e }), [e]);
}
async function cr(e) {
	let t = await An(e);
	if (t) {
		try {
			localStorage.preferredLocale = e.nextLocale.code;
		} catch {}
		try {
			if (!L(t.path)) throw Error(`Expected result.path to be a string`);
			if (
				t.isMissingInLocale &&
				(await or(e.route, t.pathVariables, e.nextLocale))
			)
				return;
		} catch {}
		return t;
	}
}
function lr(e, t) {
	try {
		let n = m.history.state;
		if (!$n(n)) return;
		let r = n?.paginationInfo === void 0 || n.paginationInfo[e] === void 0,
			i = { ...n.paginationInfo, [e]: t };
		er({ ...n, paginationInfo: i }, void 0, r);
	} catch {}
}
function ur() {
	let e = w(Promise.resolve()),
		t = w(),
		n = l((n) => {
			if (n.navigationType === `traverse` || !n.canIntercept) return;
			let r = t.current;
			(r?.signal.addEventListener(`abort`, () => {
				r.abort(`user aborted`);
			}),
				n.intercept({ handler: () => e.current }));
		}, []);
	return l(
		(r, i, a) => {
			if (!L_) {
				i();
				return;
			}
			((e.current = r),
				(t.current = a),
				m.navigation.addEventListener(`navigate`, n),
				i(!0),
				r.finally(() => {
					m.navigation.removeEventListener(`navigate`, n);
				}));
		},
		[n],
	);
}
function dr(e) {
	let t = 0,
		n = e.length;
	for (; t < n && e[t] === `-`; ) t++;
	for (; n > t && e[n - 1] === `-`; ) n--;
	return e.slice(t, n);
}
function fr(e) {
	return dr(e.trim().toLowerCase().replace(R_, `-`));
}
function pr() {
	let e = kt(),
		t = C(z_);
	return l(
		(n) => {
			if (e.pageviewEventData?.current) {
				if (!tn(n)) throw Error(`Invalid tracking ID: ${n}`);
				e.pageviewEventData.current instanceof Promise
					? e.pageviewEventData.current.then((e) => mr(e, t, n))
					: mr(e.pageviewEventData.current, t, n);
			}
		},
		[e, t],
	);
}
function mr(e, t, n) {
	en(
		`published_site_custom_event`,
		{ ...e, nodeId: t, trackingId: n || null },
		`eager`,
	);
}
function hr({ children: e, value: t }) {
	return _(B_.Provider, { value: t, children: e });
}
function gr() {
	return C(B_);
}
function _r(e, t) {
	let n = o(() => ({ inputs: t, result: e() }))[0],
		r = w(!0),
		i = w(n),
		a =
			r.current || (t && i.current.inputs && Et(t, i.current.inputs, !1))
				? i.current
				: { inputs: t, result: e() };
	return (
		d(() => {
			((r.current = !1), (i.current = a));
		}, [a]),
		a.result
	);
}
function vr(e, t) {
	return _r(() => e, t);
}
function yr() {
	return f.useContext(U_);
}
function br() {
	return yr().activeLocale?.code ?? `en-US`;
}
function xr() {
	return m.location.search;
}
function Sr() {
	return ``;
}
function Cr(e) {
	return (
		G_.add(e),
		m.addEventListener(`popstate`, e),
		() => {
			(G_.delete(e), m.removeEventListener(`popstate`, e));
		}
	);
}
function wr() {
	for (let e of G_) e();
}
function Tr({ children: e }) {
	let t = gr() === `preview`,
		[n, r] = o(``),
		i = u(ee(Cr, xr, Sr));
	kt();
	let a = t ? n : i,
		s = l(
			async (e) => {
				if (t) {
					h(() => {
						r((t) => e(new URLSearchParams(t)).toString());
					});
					return;
				}
				await _n({ continueAfter: `paint` });
				let n = m.history.state,
					i = new URL(m.location.href),
					a = e(i.searchParams).toString();
				i.search = a;
				let o = n?.queryParamBackAnchorSearch,
					s = m.location.search.slice(1),
					c = o === void 0 && a !== s,
					l = o !== void 0 && a === o,
					u = {
						...n,
						queryParamBackAnchorSearch: l
							? void 0
							: (o ?? (c ? s : void 0)),
					},
					d = i.toString();
				(c || l ? await tr(u, d) : er(u, d), wr());
			},
			[t],
		),
		c = _r(
			() => ({
				urlSearchParams: new URLSearchParams(a),
				replaceSearchParams: s,
			}),
			[a, s],
		);
	return _(K_.Provider, { value: c, children: e });
}
function Er() {
	let e = new Event(`change`, { bubbles: !0 });
	return ((e[q_] = 1), e);
}
function Dr() {
	let e = new MouseEvent(`click`, { bubbles: !0 });
	return ((e[q_] = 1), e);
}
function Or(e) {
	return e instanceof HTMLInputElement &&
		(e.type === `checkbox` || e.type === `radio`)
		? `checked`
		: `value`;
}
function kr(e) {
	return q_ in e && e[q_] === 1;
}
function Ar(e) {
	return J_ in e.nativeEvent && e.nativeEvent[J_] === 1;
}
function jr(e) {
	let t = w(!1),
		n = w(null),
		r = ee(Tg, Dg, Y_);
	return (
		d(() => {
			if (!r) return;
			let i = n.current;
			if (t.current || !i) return;
			t.current = !0;
			let a = Or(i),
				o = i[a];
			if (o === e) return;
			if (i.type === `radio` && o === !0) {
				((i.checked = !1), i.dispatchEvent(Dr()));
				return;
			}
			if (a === `checked`) {
				let e = Dr();
				((e[J_] = 1), i.dispatchEvent(e), i.dispatchEvent(Dr()));
				return;
			}
			if (i.nodeName === `SELECT`) {
				i.dispatchEvent(Er());
				return;
			}
			let s = Object.getOwnPropertyDescriptor(
				Object.getPrototypeOf(i),
				a,
			)?.set;
			if (!s) return;
			s.call(i, ``);
			let c = Er();
			((c[J_] = 1),
				i.dispatchEvent(c),
				queueMicrotask(() => {
					(s.call(i, o), i.dispatchEvent(Er()));
				}));
		}, [r]),
		n
	);
}
function Mr() {
	if (!X_) return;
	((Q_ = !0), performance.mark(`framer-react-event-handling-start`));
	let e = { capture: !0 },
		t = document.body;
	X_.forEach((n) => t.addEventListener(n, Z_, e));
}
function Nr() {
	return (
		d(() => {
			if (!Q_ || !X_) return;
			let e = { capture: !0 },
				t = document.body;
			(X_.forEach((n) => t.removeEventListener(n, Z_, e)),
				(X_ = void 0),
				performance.mark(`framer-react-event-handling-end`));
		}, []),
		null
	);
}
function Pr(e) {
	let t = !1;
	return function (...n) {
		if (!t) return ((t = !0), e.apply(this, n));
	};
}
function Fr(e, t, n) {
	try {
		performance.measure(e, t, n);
	} catch (t) {
		console.warn(`Could not measure ${e}`, t);
	}
}
function Ir() {
	((vv = new _v()), vv.render.markStart());
}
function Lr() {
	(j(() => {
		vv?.useInsertionEffects.markRouterStart();
	}, []),
		r(() => {
			vv?.useLayoutEffects.markRouterStart();
		}, []),
		d(() => {
			vv?.useEffects.markRouterStart();
		}, []));
}
function Rr() {
	(j(() => {
		(vv?.render.markEnd(), vv?.useInsertionEffects.markStart());
	}, []),
		r(() => {
			if (
				(vv?.useLayoutEffects.markStart(),
				document.visibilityState !== `visible`)
			) {
				yv = !0;
				return;
			}
			Ae.read(() => {
				(vv?.browserRendering.requestAnimationFrame.markStart(),
					vv?.unattributedHydrationOverhead.measure());
			});
		}, []),
		d(() => {
			(vv?.useEffects.markStart(),
				vv?.browserRendering.hasStarted ||
					(vv?.mutationEffects.measure(),
					vv?.useEffects.markAreSynchronous()));
		}, []));
}
function zr() {
	(j(() => {
		vv?.useInsertionEffects.markEnd();
	}, []),
		r(() => {
			(vv?.useLayoutEffects.markEnd(),
				!(yv || document.visibilityState !== `visible`) &&
					Ae.read(() => {
						(vv?.browserRendering.requestAnimationFrame.markEnd(),
							_n().then(() => {
								vv?.browserRendering.layoutStylePaint.markEnd();
							}));
					}));
		}, []),
		d(() => {
			vv?.useEffects.markEnd();
		}, []));
}
function Br() {
	return (Rr(), null);
}
function Vr() {
	return (zr(), null);
}
function Hr(e, t) {
	let n = { style: t, "data-framer-root": `` };
	return f.isValidElement(e) ? f.cloneElement(e, n) : _(e, { ...n });
}
function Ur() {
	return Cv;
}
function Wr(e) {
	if (wv?.lastRoutes !== e) {
		let t = {},
			n = {},
			r = [],
			i = {},
			a = e;
		for (let r in e) {
			let i = e[r];
			B(i, `route must be defined`);
			let { path: a, pathLocalized: o } = i;
			if (a && ((t[a] = { path: a, depth: qr(a), routeId: r }), o))
				for (let e in o) {
					let t = o[e];
					B(t, `localizedPath must be defined`);
					let i = qr(t),
						a = (n[e] ||= {});
					a[t] = { path: t, depth: i, routeId: r };
				}
		}
		for (let e in ((r = Object.values(t)),
		r.sort(({ depth: e }, { depth: t }) => t - e),
		n)) {
			let t = n[e];
			if (!t) continue;
			let r = Object.values(t);
			(r.sort(({ depth: e }, { depth: t }) => t - e), (i[e] = r));
		}
		wv = {
			pathRoutes: t,
			pathRoutesLocalized: n,
			paths: r,
			pathsLocalized: i,
			lastRoutes: a,
		};
	}
	return {
		pathRoutes: wv.pathRoutes,
		paths: wv.paths,
		pathRoutesLocalized: wv.pathRoutesLocalized,
		pathsLocalized: wv.pathsLocalized,
	};
}
function Gr(e, t, n = !0, r = Ur()) {
	return Kr(e, t, r, n);
}
function Kr(e, t, n, r = !0) {
	let {
			pathRoutes: i,
			paths: a,
			pathRoutesLocalized: o,
			pathsLocalized: s,
		} = Wr(e),
		c,
		l,
		u = !1;
	if (n.length > 0) {
		let e = t.split(`/`).find(Boolean);
		if (
			(e &&
				((c = n.find(({ slug: t }) => t === e)),
				c &&
					((l = c.id),
					(t = t.substring(c.slug.length + 1)),
					(u = !0))),
			!l)
		) {
			let e = n.find(({ slug: e }) => e === ``);
			e && (l = e.id);
		}
	}
	if (l && u) {
		let e = o[l],
			n = e ? e[t] : void 0;
		if (n) {
			let e = Jr(t, n.path);
			if (e.isMatch)
				return {
					routeId: n.routeId,
					localeId: l,
					pathVariables: e.pathVariables,
				};
		}
	}
	let d = i[t];
	if (d) {
		let e = Jr(t, d.path);
		if (e.isMatch)
			return {
				routeId: d.routeId,
				localeId: l,
				pathVariables: e.pathVariables,
			};
	}
	if (l && u) {
		let e = s[l];
		if (e)
			for (let { path: n, routeId: r } of e) {
				let e = Jr(t, n);
				if (e.isMatch)
					return {
						routeId: r,
						localeId: l,
						pathVariables: e.pathVariables,
					};
			}
	}
	for (let { path: e, routeId: n } of a) {
		let r = Jr(t, e);
		if (r.isMatch)
			return { routeId: n, localeId: l, pathVariables: r.pathVariables };
	}
	if (!r) throw Error(`No exact match found for path`);
	let f = i[`/`];
	if (f) return { routeId: f.routeId, localeId: l };
	let p = Object.keys(e)[0];
	if (!p) throw Error(`Router should not have undefined routes`);
	return { routeId: p, localeId: l };
}
function qr(e) {
	let t = e.replace(/^\/|\/$/gu, ``);
	return t === `` ? 0 : t.split(`/`).length;
}
function Jr(e, t) {
	let n = [],
		r = Yr(t).replace(S_, (e, t) => (n.push(t), `([^/]+)`)),
		i = RegExp(r + `$`),
		a = e.match(i);
	if (!a) return { isMatch: !1 };
	if (a.length === 1) return { isMatch: !0 };
	let o = {},
		s = a.slice(1);
	for (let e = 0; e < n.length; ++e) {
		let t = n[e];
		if (t === void 0) continue;
		let r = s[e],
			i = o[t];
		if (i) {
			if (i !== r) return { isMatch: !1 };
			continue;
		}
		if (r === void 0)
			throw Error(`Path variable values cannot be undefined`);
		o[t] = r;
	}
	return { isMatch: !0, pathVariables: o };
}
function Yr(e) {
	return e.replace(/[|\\{}()[\]^$+*?.]/gu, `\\$&`).replace(/-/gu, `\\x2d`);
}
function Xr() {
	if (`PerformanceServerTiming` in m) {
		let e = performance.getEntriesByType(`navigation`)[0]?.serverTiming;
		if (!e || e.length === 0) return new URLSearchParams();
		let t = e.find((e) => e.name === `abtests`);
		return t ? new URLSearchParams(t.description) : new URLSearchParams();
	}
	return new URLSearchParams();
}
function Zr(e, t, n) {
	let r = e[n];
	if (!r) return;
	let i = r.abTestingParentId ?? n;
	if (!e[i]) return;
	let { abTestingParentId: a, ...o } = r,
		s =
			e[i].elements || r.elements
				? { ...e[i].elements, ...r.elements }
				: void 0;
	e[i] = { ...o, elements: s, abTestingVariantId: n, abTestId: t };
}
function Qr(e, t) {
	for (let [n, r] of t) Zr(e, n, r);
}
function $r(e) {
	for (let t in e) e[t]?.abTestingParentId && delete e[t];
}
function ei(e, t) {
	if (!e[t] || !e[t].abTestingParentId) return;
	let n = e[t].abTestingParentId,
		{ abTestingParentId: r, ...i } = e[t],
		a =
			e[n]?.elements || i.elements
				? { ...e[n]?.elements, ...i.elements }
				: void 0;
	e[n] = { ...i, elements: a, abTestingVariantId: t };
}
function ti(e, t) {
	if (m === void 0) return t;
	let n = t;
	if (t) {
		ei(e, t);
		let r = e[t]?.abTestingParentId;
		r && (n = r);
	}
	return (Qr(e, Xr()), $r(e), n);
}
function ni(e) {
	(d(() => {
		if (e.robots) {
			let t = document.querySelector(`meta[name="robots"]`);
			t
				? t.setAttribute(`content`, e.robots)
				: ((t = document.createElement(`meta`)),
					t.setAttribute(`name`, `robots`),
					t.setAttribute(`content`, e.robots),
					document.head.appendChild(t));
		}
	}, [e.robots]),
		j(() => {
			((document.title = e.title || ``),
				e.viewport &&
					document
						.querySelector(`meta[name="viewport"]`)
						?.setAttribute(`content`, e.viewport));
		}, [e.title, e.viewport]));
}
function ri(e, ...t) {
	Tv.has(e) || (Tv.add(e), console.warn(e, ...t));
}
function ii(e, t, n) {
	ri(
		`Deprecation warning: ${e} will be removed in version ${t}${n ? `, use ${n} instead` : ``}.`,
	);
}
function ai(e) {
	return (
		typeof e == `object` &&
		!!e &&
		Dv in e &&
		e[Dv] instanceof Function &&
		Ov in e &&
		e[Ov] instanceof Function
	);
}
function oi(e, t) {
	return {
		interpolate(e, n) {
			let r = e.get(),
				i = n.get(),
				a = K(r);
			return (e) => {
				let n = t.interpolate(r, i)(e);
				return (a.set(n), a);
			};
		},
		difference(e, n) {
			let r = e.get();
			return t.difference(r, n.get());
		},
	};
}
function si(e, t) {
	let n = 10 ** Math.round(Math.abs(t));
	return Math.round(e * n) / n;
}
function ci(e, t) {
	return t === 0
		? Math.round(e)
		: ((t -= t | 0), t < 0 && (t = 1 - t), Math.round(e - t) + t);
}
function li(e) {
	return Math.round(e * 2) / 2;
}
function ui(e, t) {
	return { x: e, y: t };
}
function di(e, t, n, r = !1) {
	let [i, a] = t,
		[o, s] = n,
		c = a - i;
	if (c === 0) return (s + o) / 2;
	let l = s - o;
	if (l === 0) return o;
	let u = o + ((e - i) / c) * l;
	if (r === !0)
		if (o < s) {
			if (u < o) return o;
			if (u > s) return s;
		} else {
			if (u > o) return o;
			if (u < s) return s;
		}
	return u;
}
function fi(e) {
	return !Number.isNaN(e) && Number.isFinite(e);
}
function pi(e) {
	let t = mi(e);
	return t === void 0 ? 0 : e.includes(`%`) ? t / 100 : t;
}
function mi(e) {
	let t = /\d?\.?\d+/u.exec(e);
	return t ? Number(t[0]) : void 0;
}
function hi(e, t, n) {
	return (
		(jv.rgb_r = e / 255),
		(jv.rgb_g = t / 255),
		(jv.rgb_b = n / 255),
		jv.rgbToHsluv(),
		{ h: jv.hsluv_h, s: jv.hsluv_s, l: jv.hsluv_l }
	);
}
function gi(e, t, n, r = 1) {
	return (
		(jv.hsluv_h = e),
		(jv.hsluv_s = t),
		(jv.hsluv_l = n),
		jv.hsluvToRgb(),
		{ r: jv.rgb_r * 255, g: jv.rgb_g * 255, b: jv.rgb_b * 255, a: r }
	);
}
function _i(e, t, n, r) {
	let i = Math.round(e),
		a = Math.round(t * 100),
		o = Math.round(n * 100);
	return r === void 0 || r === 1
		? `hsv(` + i + `, ` + a + `%, ` + o + `%)`
		: `hsva(` + i + `, ` + a + `%, ` + o + `%, ` + r + `)`;
}
function vi(e, t, n) {
	return {
		r: fi(e) ? Ti(e, 255) * 255 : 0,
		g: fi(t) ? Ti(t, 255) * 255 : 0,
		b: fi(n) ? Ti(n, 255) * 255 : 0,
	};
}
function yi(e, t, n, r) {
	let i = [
		Oi(Math.round(e).toString(16)),
		Oi(Math.round(t).toString(16)),
		Oi(Math.round(n).toString(16)),
	];
	return r &&
		i[0].charAt(0) === i[0].charAt(1) &&
		i[1].charAt(0) === i[1].charAt(1) &&
		i[2].charAt(0) === i[2].charAt(1)
		? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
		: i.join(``);
}
function bi(e, t, n) {
	let r,
		i,
		a = Ti(e, 255),
		o = Ti(t, 255),
		s = Ti(n, 255),
		c = Math.max(a, o, s),
		l = Math.min(a, o, s),
		u = (i = r = (c + l) / 2);
	if (c === l) u = i = 0;
	else {
		let e = c - l;
		switch (((i = r > 0.5 ? e / (2 - c - l) : e / (c + l)), c)) {
			case a:
				u = (o - s) / e + (o < s ? 6 : 0);
				break;
			case o:
				u = (s - a) / e + 2;
				break;
			case s:
				u = (a - o) / e + 4;
				break;
		}
		u /= 6;
	}
	return { h: u * 360, s: i, l: r };
}
function xi(e, t, n) {
	return (
		n < 0 && (n += 1),
		n > 1 && --n,
		n < 1 / 6
			? e + (t - e) * 6 * n
			: n < 1 / 2
				? t
				: n < 2 / 3
					? e + (t - e) * (2 / 3 - n) * 6
					: e
	);
}
function Si(e, t, n) {
	let r, i, a;
	if (
		((e = Ti(e, 360)),
		(t = Ti(t * 100, 100)),
		(n = Ti(n * 100, 100)),
		t === 0)
	)
		r = i = a = n;
	else {
		let o = n < 0.5 ? n * (1 + t) : n + t - n * t,
			s = 2 * n - o;
		((r = xi(s, o, e + 1 / 3)),
			(i = xi(s, o, e)),
			(a = xi(s, o, e - 1 / 3)));
	}
	return { r: r * 255, g: i * 255, b: a * 255 };
}
function Ci(e, t, n) {
	((e = Ti(e, 255)), (t = Ti(t, 255)), (n = Ti(n, 255)));
	let r = Math.max(e, t, n),
		i = Math.min(e, t, n),
		a = r - i,
		o = 0,
		s = r === 0 ? 0 : a / r,
		c = r;
	if (r === i) o = 0;
	else {
		switch (r) {
			case e:
				o = (t - n) / a + (t < n ? 6 : 0);
				break;
			case t:
				o = (n - e) / a + 2;
				break;
			case n:
				o = (e - t) / a + 4;
				break;
		}
		o /= 6;
	}
	return { h: o, s, v: c };
}
function wi(e, t, n) {
	((e = Ti(e, 360) * 6), (t = Ti(t * 100, 100)), (n = Ti(n * 100, 100)));
	let r = Math.floor(e),
		i = e - r,
		a = n * (1 - t),
		o = n * (1 - i * t),
		s = n * (1 - (1 - i) * t),
		c = r % 6,
		l = [n, o, a, a, s, n][c],
		u = [s, n, n, o, a, a][c],
		d = [a, a, s, n, n, o][c];
	return { r: l * 255, g: u * 255, b: d * 255 };
}
function Ti(e, t) {
	let n, r;
	if (
		((n = typeof t == `string` ? parseFloat(t) : t), typeof e == `string`)
	) {
		Ei(e) && (e = `100%`);
		let t = Di(e);
		((r = Math.min(n, Math.max(0, parseFloat(e)))),
			t && (r = Math.floor(r * n) / 100));
	} else r = e;
	return Math.abs(r - n) < 1e-6 ? 1 : (r % n) / n;
}
function Ei(e) {
	return typeof e == `string` && e.includes(`.`) && parseFloat(e) === 1;
}
function Di(e) {
	return typeof e == `string` && e.includes(`%`);
}
function Oi(e) {
	return e.length === 1 ? `0` + e : `` + e;
}
function ki(e) {
	if (e.includes(`gradient(`) || e.includes(`var(`)) return !1;
	let t = e
			.replace(/^[\s,#]+/u, ``)
			.trimEnd()
			.toLowerCase(),
		n = Av[t];
	if ((n && (t = n), t === `transparent`))
		return { r: 0, g: 0, b: 0, a: 0, format: `name` };
	let r;
	return (r = Mv.rgb.exec(t))
		? {
				r: parseInt(r[1] ?? ``),
				g: parseInt(r[2] ?? ``),
				b: parseInt(r[3] ?? ``),
				a: 1,
				format: `rgb`,
			}
		: (r = Mv.rgba.exec(t))
			? {
					r: parseInt(r[1] ?? ``),
					g: parseInt(r[2] ?? ``),
					b: parseInt(r[3] ?? ``),
					a: parseFloat(r[4] ?? ``),
					format: `rgb`,
				}
			: (r = Mv.hsl.exec(t))
				? {
						h: parseInt(r[1] ?? ``),
						s: pi(r[2] ?? ``),
						l: pi(r[3] ?? ``),
						a: 1,
						format: `hsl`,
					}
				: (r = Mv.hsla.exec(t))
					? {
							h: parseInt(r[1] ?? ``),
							s: pi(r[2] ?? ``),
							l: pi(r[3] ?? ``),
							a: parseFloat(r[4] ?? ``),
							format: `hsl`,
						}
					: (r = Mv.hsv.exec(t))
						? {
								h: parseInt(r[1] ?? ``),
								s: pi(r[2] ?? ``),
								v: pi(r[3] ?? ``),
								a: 1,
								format: `hsv`,
							}
						: (r = Mv.hsva.exec(t))
							? {
									h: parseInt(r[1] ?? ``),
									s: pi(r[2] ?? ``),
									v: pi(r[3] ?? ``),
									a: parseFloat(r[4] ?? ``),
									format: `hsv`,
								}
							: (r = Mv.hex8.exec(t))
								? {
										r: Ai(r[1] ?? ``),
										g: Ai(r[2] ?? ``),
										b: Ai(r[3] ?? ``),
										a: ji(r[4] ?? ``),
										format: n ? `name` : `hex`,
									}
								: (r = Mv.hex6.exec(t))
									? {
											r: Ai(r[1] ?? ``),
											g: Ai(r[2] ?? ``),
											b: Ai(r[3] ?? ``),
											a: 1,
											format: n ? `name` : `hex`,
										}
									: (r = Mv.hex4.exec(t))
										? {
												r: Ai(`${r[1]}${r[1]}`),
												g: Ai(`${r[2]}${r[2]}`),
												b: Ai(`${r[3]}${r[3]}`),
												a: ji(r[4] + `` + r[4]),
												format: n ? `name` : `hex`,
											}
										: (r = Mv.hex3.exec(t))
											? {
													r: Ai(`${r[1]}${r[1]}`),
													g: Ai(`${r[2]}${r[2]}`),
													b: Ai(`${r[3]}${r[3]}`),
													a: 1,
													format: n ? `name` : `hex`,
												}
											: !1;
}
function Ai(e) {
	return parseInt(e, 16);
}
function ji(e) {
	return Ai(e) / 255;
}
function Mi(e) {
	let t = Nv.exec(e);
	if (!t) return null;
	let { r: n = `0`, g: r = `0`, b: i = `0`, a } = t.groups ?? {};
	return {
		r: parseFloat(n),
		g: parseFloat(r),
		b: parseFloat(i),
		a: a ? parseFloat(a) : 1,
	};
}
function Ni(e = 0) {
	let t = Math.abs(e);
	return t <= 0.04045
		? e / 12.92
		: (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
}
function Pi({ r: e, g: t, b: n, a: r }) {
	return { r: Ni(e), g: Ni(t), b: Ni(n), a: r };
}
function Fi(e = 0) {
	let t = Math.abs(e);
	return t > 0.0031308
		? (Math.sign(e) || 1) * (1.055 * t ** (1 / 2.4) - 0.055)
		: e * 12.92;
}
function Ii({ r: e, g: t, b: n, a: r }) {
	return { r: Fi(e), g: Fi(t), b: Fi(n), a: r };
}
function Li({ r: e, g: t, b: n, a: r }) {
	let i = Math.max(e, t, n),
		a = Math.min(e, t, n),
		o = { h: 0, s: i === 0 ? 0 : 1 - a / i, v: i, a: r };
	return (
		i - a !== 0 &&
			(o.h =
				(i === e
					? (t - n) / (i - a) + (t < n ? 6 : 0)
					: i === t
						? (n - e) / (i - a) + 2
						: (e - t) / (i - a) + 4) * 60),
		o
	);
}
function Ri(e) {
	return (e %= 360) < 0 ? e + 360 : e;
}
function zi({ h: e = 0, s: t = 0, v: n = 0, a: r = 1 }) {
	let i = Ri(e),
		a = Math.abs(((i / 60) % 2) - 1);
	switch (Math.floor(i / 60)) {
		case 0:
			return { r: n, g: n * (1 - t * a), b: n * (1 - t), a: r };
		case 1:
			return { r: n * (1 - t * a), g: n, b: n * (1 - t), a: r };
		case 2:
			return { r: n * (1 - t), g: n, b: n * (1 - t * a), a: r };
		case 3:
			return { r: n * (1 - t), g: n * (1 - t * a), b: n, a: r };
		case 4:
			return { r: n * (1 - t * a), g: n * (1 - t), b: n, a: r };
		case 5:
			return { r: n, g: n * (1 - t), b: n * (1 - t * a), a: r };
		default:
			return { r: n * (1 - t), g: n * (1 - t), b: n * (1 - t), a: r };
	}
}
function Bi(e) {
	return Lv(Iv(e));
}
function Vi(e) {
	return Fv(Pv(e));
}
function Hi(e) {
	return Rv.srgbFromValue(e);
}
function Ui(e, t, n, r = 1) {
	let i;
	return (
		typeof e == `number` &&
		!Number.isNaN(e) &&
		typeof t == `number` &&
		!Number.isNaN(t) &&
		typeof n == `number` &&
		!Number.isNaN(n)
			? (i = Ki({ r: e, g: t, b: n, a: r }))
			: typeof e == `string`
				? (i = Wi(e))
				: typeof e == `object` &&
					(i =
						e.hasOwnProperty(`r`) &&
						e.hasOwnProperty(`g`) &&
						e.hasOwnProperty(`b`)
							? Ki(e)
							: qi(e)),
		i
	);
}
function Wi(e) {
	let t = ki(e);
	if (t)
		return t.format === `hsl` ? qi(t) : t.format === `hsv` ? Gi(t) : Ki(t);
}
function Gi(e) {
	let t = wi(e.h, e.s, e.v);
	return {
		...bi(t.r, t.g, t.b),
		...t,
		format: `rgb`,
		a: e.a === void 0 ? 1 : Ji(e.a),
	};
}
function Ki(e) {
	let t = vi(e.r, e.g, e.b);
	return {
		...bi(t.r, t.g, t.b),
		...t,
		format: `rgb`,
		a: e.a === void 0 ? 1 : Ji(e.a),
	};
}
function qi(e) {
	let t,
		n,
		r,
		i = { r: 0, g: 0, b: 0 },
		a = { h: 0, s: 0, l: 0 };
	return (
		(t = fi(e.h) ? e.h : 0),
		(t = (t + 360) % 360),
		(n = fi(e.s) ? e.s : 1),
		typeof e.s == `string` && (n = mi(e.s)),
		(r = fi(e.l) ? e.l : 0.5),
		typeof e.l == `string` && (r = mi(e.l)),
		(i = Si(t, n, r)),
		(a = { h: t, s: n, l: r }),
		{ ...i, ...a, a: e.a === void 0 ? 1 : e.a, format: `hsl` }
	);
}
function Ji(e) {
	return (
		(e = parseFloat(e)),
		e < 0 && (e = 0),
		(Number.isNaN(e) || e > 1) && (e = 1),
		e
	);
}
function Yi({ children: e }) {
	if (C(Zv).top) return _(O, { children: e });
	let t = w({
			byId: {},
			byName: {},
			byLastId: {},
			byPossibleId: {},
			byLastName: {},
			byLayoutId: {},
			count: { byId: {}, byName: {} },
		}),
		n = w({
			byId: {},
			byName: {},
			byLastId: {},
			byPossibleId: {},
			byLastName: {},
			byLayoutId: {},
		}),
		r = w(new Set()).current,
		i = w({
			getLayoutId: l(({ id: e, name: i, duplicatedFrom: a }) => {
				if (!e) return null;
				let o = i ? `byName` : `byId`,
					s = t.current[o][e];
				if (s) return s;
				let c = i || e;
				if (
					!a &&
					!r.has(c) &&
					(!t.current.byLayoutId[c] || t.current.byLayoutId[c] === c)
				)
					return (
						t.current.count[o][c] === void 0 &&
							((t.current.count[o][c] = 0),
							(t.current.byLayoutId[c] = c),
							(n.current[o][e] = c)),
						r.add(c),
						c
					);
				let l;
				if (a?.length)
					for (let s = a.length - 1; s >= 0; s--) {
						let c = a[s];
						B(!!c, `duplicatedId must be defined`);
						let u = t.current[o][c],
							d = t.current.byLastId[c];
						if (d && !l) {
							let e = t.current.byLayoutId[d],
								n = !e || e === i;
							d && !r.has(d) && (!i || n) && (l = [d, c]);
						}
						let f = u ? t.current.byLayoutId[u] : void 0,
							p = !f || f === i;
						if (u && !r.has(u) && (!i || p))
							return (
								(n.current[o][e] = u),
								(n.current.byLastId[c] = u),
								r.add(u),
								u
							);
					}
				let u = t.current.byLastId[e];
				if (u && !r.has(u))
					return (r.add(u), (n.current.byId[e] = u), u);
				if (l) {
					let [t, i] = l;
					return (
						(n.current[o][e] = t),
						(n.current.byLastId[i] = t),
						r.add(t),
						t
					);
				}
				let d = t.current.byPossibleId[e];
				if (d && !r.has(d))
					return (r.add(d), (n.current.byId[e] = d), d);
				let f = a?.[0],
					p = i || f || e,
					{ layoutId: m, value: h } = Xi(
						p,
						(t.current.count[o][p] ?? -1) + 1,
						r,
					);
				if (
					((t.current.count[o][p] = h),
					(n.current[o][e] = m),
					a?.length && !i)
				) {
					let e = a[a.length - 1];
					if ((e && (n.current.byLastId[e] = m), a.length > 1))
						for (let e = 0; e < a.length - 1; e++) {
							let t = a[e];
							t !== void 0 &&
								(n.current.byPossibleId[t] ||
									(n.current.byPossibleId[t] = m));
						}
				}
				return ((n.current.byLayoutId[m] = c), r.add(m), m);
			}, []),
			persistLayoutIdCache: l(() => {
				((t.current = {
					byId: { ...t.current.byId, ...n.current.byId },
					byLastId: { ...t.current.byLastId, ...n.current.byLastId },
					byPossibleId: {
						...t.current.byPossibleId,
						...n.current.byPossibleId,
					},
					byName: { ...t.current.byName, ...n.current.byName },
					byLastName: {
						...t.current.byLastName,
						...n.current.byLastName,
					},
					byLayoutId: {
						...t.current.byLayoutId,
						...n.current.byLayoutId,
					},
					count: { ...t.current.count, byName: {} },
				}),
					(n.current = {
						byId: {},
						byName: {},
						byLastId: {},
						byPossibleId: {},
						byLastName: {},
						byLayoutId: {},
					}),
					r.clear());
			}, []),
			top: !0,
			enabled: !0,
		}).current;
	return _(Zv.Provider, { value: i, children: e });
}
function Xi(e, t, n) {
	let r = t,
		i = r ? `${e}-${r}` : e;
	for (; n.has(i); ) (r++, (i = `${e}-${r}`));
	return { layoutId: i, value: r };
}
function Zi({ enabled: e = !0, ...t }) {
	let n = C(Zv),
		r = c(() => ({ ...n, enabled: e }), [e]);
	return _(Zv.Provider, { ...t, value: r });
}
function Qi(e) {
	let t = w(null);
	return (t.current === null && (t.current = e()), t.current);
}
function $i(e) {
	let { error: t, file: n } = e,
		r = n ? `Error in ${ea(n)}` : `Error`,
		i = t instanceof Error ? t.message : `` + t;
	return T(`div`, {
		style: $v,
		children: [
			_(`div`, { className: `text`, style: ty, children: r }),
			i && _(`div`, { className: `text`, style: ny, children: i }),
		],
	});
}
function ea(e) {
	return e.startsWith(`./`) ? e.replace(`./`, ``) : e;
}
function H(e) {
	return Number.isFinite(e);
}
function ta(e) {
	return !e || (!Object.keys(e).length && e.constructor === Object);
}
function na(e) {
	return typeof e != `string` && typeof e != `number`;
}
function ra(e) {
	return e != null && typeof e != `boolean` && !ta(e);
}
function ia(e) {
	return e * (Math.PI / 180);
}
function aa(e) {
	return tt(e) ? !1 : e === 2 || e === 5;
}
function oa(e) {
	return !(!ra(e) || !na(e));
}
function sa(e) {
	if (typeof e == `string`) {
		let t = e.trim();
		if (t === `auto`) return 2;
		if (t.endsWith(`fr`)) return 3;
		if (t.endsWith(`%`)) return 1;
		if (t.endsWith(`vw`) || t.endsWith(`vh`)) return 4;
	}
	return 0;
}
function ca(e, t, n, r) {
	if (typeof t == `string`) {
		if (t.endsWith(`%`) && n)
			switch (e) {
				case `maxWidth`:
				case `minWidth`:
					return (parseFloat(t) / 100) * n.width;
				case `maxHeight`:
				case `minHeight`:
					return (parseFloat(t) / 100) * n.height;
				default:
					break;
			}
		if (t.endsWith(`vh`)) {
			if (!r) return la(e);
			switch (e) {
				case `maxWidth`:
				case `minWidth`:
					return (parseFloat(t) / 100) * r.width;
				case `maxHeight`:
				case `minHeight`:
					return (parseFloat(t) / 100) * r.height;
				default:
					break;
			}
		}
		return parseFloat(t);
	}
	return t;
}
function la(e) {
	switch (e) {
		case `minWidth`:
		case `minHeight`:
			return -1 / 0;
		case `maxWidth`:
		case `maxHeight`:
			return 1 / 0;
		default:
			V(e, `unknown constraint key`);
	}
}
function ua(e, t, n, r) {
	return (
		t.minHeight && (e = Math.max(ca(`minHeight`, t.minHeight, n, r), e)),
		t.maxHeight && (e = Math.min(ca(`maxHeight`, t.maxHeight, n, r), e)),
		e
	);
}
function da(e, t, n, r) {
	return (
		t.minWidth && (e = Math.max(ca(`minWidth`, t.minWidth, n, r), e)),
		t.maxWidth && (e = Math.min(ca(`maxWidth`, t.maxWidth, n, r), e)),
		e
	);
}
function fa(e, t, n, r, i) {
	let a = da(H(e) ? e : cy, n, r, i),
		o = ua(H(t) ? t : ly, n, r, i);
	return (
		H(n.aspectRatio) &&
			n.aspectRatio > 0 &&
			(H(n.left) && H(n.right)
				? (o = a / n.aspectRatio)
				: (H(n.top) && H(n.bottom)) || n.widthType === 0
					? (a = o * n.aspectRatio)
					: (o = a / n.aspectRatio)),
		{ width: a, height: o }
	);
}
function pa(e, t) {
	return !H(e) || !H(t) ? null : e + t;
}
function ma(e) {
	return (
		typeof e.right == `string` ||
		typeof e.bottom == `string` ||
		(typeof e.left == `string` && (!e.center || e.center === `y`)) ||
		(typeof e.top == `string` && (!e.center || e.center === `x`))
	);
}
function ha(e) {
	return !e._constraints || ma(e) ? !1 : e._constraints.enabled;
}
function ga(e) {
	let { size: t } = e,
		{ width: n, height: r } = e;
	return (
		H(t) && (n === void 0 && (n = t), r === void 0 && (r = t)),
		H(n) && H(r) ? { width: n, height: r } : null
	);
}
function _a(e) {
	let t = ga(e);
	if (t === null) return null;
	let { left: n, top: r } = e;
	return H(n) && H(r) ? { x: n, y: r, ...t } : null;
}
function va(e, t, n = !0) {
	if (e.positionFixed || e.positionAbsolute) return null;
	let r = t === 1 || t === 2;
	if (!ha(e) || r) return _a(e);
	let i = ya(e),
		a = ba(t),
		o = a ? { sizing: a, positioning: a, viewport: null } : null;
	return sy.toRect(i, o, null, n, null);
}
function ya(e) {
	let {
			left: t,
			right: n,
			top: r,
			bottom: i,
			center: a,
			_constraints: o,
			size: s,
		} = e,
		{ width: c, height: l } = e;
	(c === void 0 && (c = s), l === void 0 && (l = s));
	let { aspectRatio: u, autoSize: d } = o,
		f = oy.quickfix({
			left: H(t),
			right: H(n),
			top: H(r),
			bottom: H(i),
			widthType: sa(c),
			heightType: sa(l),
			aspectRatio: u || null,
			fixedSize: d === !0,
		}),
		p = null,
		m = null,
		h = 0,
		g = 0;
	if (f.widthType !== 0 && typeof c == `string`) {
		let e = parseFloat(c);
		c.endsWith(`fr`)
			? ((h = 3), (p = e))
			: c === `auto`
				? (h = 2)
				: ((h = 1), (p = e / 100));
	} else c !== void 0 && typeof c != `string` && (p = c);
	if (f.heightType !== 0 && typeof l == `string`) {
		let e = parseFloat(l);
		l.endsWith(`fr`)
			? ((g = 3), (m = e))
			: l === `auto`
				? (g = 2)
				: ((g = 1), (m = parseFloat(l) / 100));
	} else l !== void 0 && typeof l != `string` && (m = l);
	let _ = 0.5,
		v = 0.5;
	return (
		(a === !0 || a === `x`) &&
			((f.left = !1), typeof t == `string` && (_ = parseFloat(t) / 100)),
		(a === !0 || a === `y`) &&
			((f.top = !1), typeof r == `string` && (v = parseFloat(r) / 100)),
		{
			left: f.left ? t : null,
			right: f.right ? n : null,
			top: f.top ? r : null,
			bottom: f.bottom ? i : null,
			widthType: h,
			heightType: g,
			width: p,
			height: m,
			aspectRatio: f.aspectRatio || null,
			centerAnchorX: _,
			centerAnchorY: v,
			minHeight: e.minHeight,
			maxHeight: e.maxHeight,
			minWidth: e.minWidth,
			maxWidth: e.maxWidth,
		}
	);
}
function ba(e) {
	return e === 0 || e === 1 || e === 2 ? null : e;
}
function xa() {
	return f.useContext(uy).parentSize;
}
function Sa(e) {
	return typeof e == `object`;
}
function Ca(e) {
	return Sa(e) ? e.width : e;
}
function wa(e) {
	return Sa(e) ? e.height : e;
}
function Ta(e, t) {
	return _(dy, { parentSize: t, children: e });
}
function Ea(e) {
	return va(e, xa(), !0);
}
function Da({ width: e, height: t }) {
	return (
		e === `auto` ||
		e === `min-content` ||
		t === `auto` ||
		t === `min-content`
	);
}
function Oa() {
	return n === void 0 ? void 0 : n;
}
function ka() {
	return m === void 0 ? void 0 : m;
}
function Aa() {
	let e = Oa();
	return e ? py.test(e.platform) : !1;
}
function ja() {
	let e = Oa();
	return e
		? my.test(e.platform)
			? !0
			: hy.test(e.platform) &&
				e.maxTouchPoints != null &&
				e.maxTouchPoints > 2
		: !1;
}
function Ma() {
	return Aa() || ja();
}
function Na() {
	let e = Oa();
	return e ? gy.test(e.userAgent) : !1;
}
function Pa() {
	let e = Oa();
	return e ? _y.test(e.userAgent) && vy.test(e.vendor) && !Na() : !1;
}
function Fa() {
	let e = Oa();
	return e ? yy.test(e.userAgent) && by.test(e.vendor) : !1;
}
function Ia() {
	let e = Oa();
	return e ? xy.test(e.userAgent) : !1;
}
function La() {
	return typeof document == `object`;
}
function Ra() {
	let e = Oa();
	return e ? Sy.test(e.userAgent) : !1;
}
function za() {
	return !1;
}
function Ba() {
	let e = ka(),
		t = Oa();
	return !e || !t ? !1 : `ontouchstart` in e || t.maxTouchPoints > 0;
}
function Va() {
	let e = Oa();
	return e && Cy.test(e.userAgent)
		? `tablet`
		: e && wy.test(e.userAgent)
			? `phone`
			: `desktop`;
}
function Ha() {
	return Va() === `desktop`;
}
function Ua(e) {
	return Ma() ? e.metaKey : e.ctrlKey;
}
function Wa(e, t, n = Ey) {
	if (!(!e || n.has(e) || typeof document > `u`)) {
		if ((n.add(e), !t)) {
			if (!Dy) {
				let e = document.createElement(`style`);
				if (
					(e.setAttribute(`type`, `text/css`),
					e.setAttribute(`data-framer-css`, `true`),
					!document.head)
				) {
					console.warn(
						`not injecting CSS: the document is missing a <head> element`,
					);
					return;
				}
				if ((document.head.appendChild(e), e.sheet)) Dy = e.sheet;
				else {
					console.warn(
						`not injecting CSS: injected <style> element does not have a sheet`,
						e,
					);
					return;
				}
			}
			t = Dy;
		}
		try {
			t.insertRule(e, t.cssRules.length);
		} catch {}
	}
}
function Ga() {
	if (Py !== void 0) return Py;
	let e = document.createElement(`div`);
	(Object.assign(e.style, {
		position: `absolute`,
		display: `flex`,
		flexDirection: `column`,
		rowGap: `1px`,
	}),
		e.appendChild(document.createElement(`div`)),
		e.appendChild(document.createElement(`div`)),
		document.body.appendChild(e));
	let t = e.scrollHeight === 1;
	return (e.parentNode && e.parentNode.removeChild(e), (Py = t), t);
}
function Ka() {
	Iy || ((Iy = !0), !Ga() && document.body.classList.add(Fy));
}
function qa(e) {
	return typeof e == `number`
		? e
		: e.startsWith(`--`)
			? Z.variable(e)
			: e === ``
				? `""`
				: e;
}
function Ja(e) {
	return e !== qy && e !== Jy;
}
function Ya(e) {
	for (let t in e) if (Ja(t) && e?.[t] === !0) return !0;
	return !1;
}
function Xa(e, t, n, r, i) {
	let a = f.useRef(null),
		o = f.useCallback(
			(e) => {
				t &&
					a.current !== !1 &&
					((a.current = !1),
					e.currentTarget.setCustomValidity(` `),
					e.currentTarget.reportValidity(),
					t(e));
			},
			[t],
		),
		s = f.useCallback(
			(r) => {
				if ((n?.(r), !t && !e)) return;
				let i = r.target.validity;
				a.current === !1 &&
					!Ya(i) &&
					(r.currentTarget.setCustomValidity(``),
					r.target.reportValidity(),
					(a.current = !0),
					e?.());
			},
			[t, e, n],
		),
		c = f.useCallback(
			(e) => {
				if (!t) {
					r?.(e);
					return;
				}
				if (a.current === !1) return;
				let n = e.currentTarget.validity;
				if (Ya(n)) {
					o(e);
					return;
				}
				r?.(e);
			},
			[o, r, t],
		);
	return f.useMemo(
		() => ({ onInvalid: o, onChange: s, onBlur: c, onFocus: i }),
		[o, s, c, i],
	);
}
function Za(e, t) {
	return Z.variable(...e.flatMap((e) => [`${e}-rgb`, e]), t);
}
function Qa(e, t) {
	return `${e} > ${t}, ${e} > .ssr-variant > ${t}`;
}
function $a() {
	return FramerEnvironment.current() === FramerEnvironment.preview ? Kb : Gb;
}
function eo(e) {
	return jy(e, $a, `framer-lib-combinedCSSRules`);
}
function to(e) {
	return z(e) || Ze(e);
}
function no(e) {
	return !!e && qb in e && e[qb] === !0;
}
function ro(e) {
	try {
		switch (e.type) {
			case `string`:
			case `collectionreference`:
			case `color`:
			case `date`:
			case `link`:
			case `boxshadow`:
			case `padding`:
			case `borderradius`:
			case `gap`:
				return L(e.defaultValue) ? e.defaultValue : void 0;
			case `boolean`:
				return Qe(e.defaultValue) ? e.defaultValue : void 0;
			case `enum`:
				return tt(e.defaultValue)
					? void 0
					: e.options.includes(e.defaultValue)
						? e.defaultValue
						: void 0;
			case `fusednumber`:
			case `number`:
				return R(e.defaultValue) ? e.defaultValue : void 0;
			case `transition`:
				return z(e.defaultValue) ? e.defaultValue : void 0;
			case `border`:
				return z(e.defaultValue) ? e.defaultValue : void 0;
			case `font`:
			case `location`:
				return z(e.defaultValue) ? e.defaultValue : void 0;
			case `linkrelvalues`:
				return $e(e.defaultValue) ? e.defaultValue : void 0;
			case `multicollectionreference`:
				return $e(e.defaultValue) ? e.defaultValue : void 0;
			case `object`: {
				let t = z(e.defaultValue) ? e.defaultValue : {};
				return (z(e.controls) && io(t, e.controls), t);
			}
			case `array`:
				return $e(e.defaultValue) ? e.defaultValue : void 0;
			case `file`:
			case `image`:
			case `richtext`:
			case `pagescope`:
			case `eventhandler`:
			case `changehandler`:
			case `segmentedenum`:
			case `responsiveimage`:
			case `componentinstance`:
			case `slot`:
			case `scrollsectionref`:
			case `customcursor`:
			case `cursor`:
			case `trackingid`:
			case `vectorsetitem`:
				return;
			default:
				return;
		}
	} catch {
		return;
	}
}
function io(e, t) {
	for (let n in t) {
		let r = t[n];
		if (!r) continue;
		let i = e[n];
		if (!tt(i) || no(r)) continue;
		let a = ro(r);
		tt(a) || (e[n] = a);
	}
}
function ao(e) {
	if (z(e.defaultProps)) return e.defaultProps;
	let t = {};
	return ((e.defaultProps = t), t);
}
function oo(e, t) {
	to(e) && io(ao(e), t);
}
function addPropertyControls(e, t) {
	(Object.assign(e, { propertyControls: t }), oo(e, t));
}
function co(e) {
	return e.propertyControls;
}
function lo() {
	let e = FramerEnvironment.current();
	return e === FramerEnvironment.canvas || e === FramerEnvironment.export;
}
function uo() {
	let [e] = o(() => lo());
	return e;
}
function fo(e) {
	let t = Object.create(Object.prototype);
	return (n) => (t[n] === void 0 && (t[n] = e(n)), t[n]);
}
function po(e, t) {
	if (e === void 0 || t === void 0) return;
	let n = e,
		r = t,
		i = 0;
	t > e && ((n = t), (r = e), (i = 1));
	let a = n / r,
		o = [];
	for (let e of ix) {
		if (n <= e) return o;
		o.push({ maxSideSize: e, width: i === 0 ? e : Math.trunc(e / a) });
	}
	return o;
}
function mo(e, t) {
	try {
		let n = new URL(e);
		return (
			t
				? n.searchParams.set(`scale-down-to`, `${t}`)
				: n.searchParams.delete(`scale-down-to`),
			n.toString()
		);
	} catch {
		return e;
	}
}
function ho(e, t, n) {
	if (!n || n.length === 0 || !t.pixelWidth) return;
	let r = [];
	for (let t of n) {
		if (t.width < ax) continue;
		let n = mo(e, t.maxSideSize);
		r.push(`${n} ${t.width}w`);
	}
	return (r.push(`${mo(e, null)} ${t.pixelWidth}w`), r.join(`, `) || void 0);
}
function go(e, t, n) {
	if (!t.pixelWidth || !t.pixelHeight || !n?.width || !n?.height) return;
	let r = [],
		i = Math.max(t.pixelWidth, t.pixelHeight),
		a = Math.max(n.width / t.pixelWidth, n.height / t.pixelHeight);
	for (let t of rx) {
		let n = mo(e, Math.round(i * t * a));
		r.push({ src: n, scale: t });
	}
	return r;
}
function _o(e, t, n) {
	if (![`auto`, `lossless`].includes(t.preferredSize ?? ``))
		return { src: n, srcSet: void 0 };
	if (e) {
		let r = go(n, t, e);
		if (!r?.length) return { src: n, srcSet: void 0 };
		let [i, ...a] = r;
		return {
			src: i?.src,
			srcSet: a.map(({ src: e, scale: t }) => `${e} ${t}x`).join(`, `),
		};
	} else return { src: n, srcSet: ho(n, t, po(t.pixelWidth, t.pixelHeight)) };
}
function vo() {
	return {
		backgroundRepeat: `repeat`,
		backgroundPosition: `left top`,
		backgroundSize: `64px auto`,
		backgroundImage: ct(tx.imagePlaceholderSvg),
	};
}
function yo(e) {
	switch (e) {
		case `fit`:
			return `contain`;
		case `stretch`:
			return `fill`;
		default:
			return `cover`;
	}
}
function bo(e, t) {
	let n = e ?? `center`,
		r = t ?? `center`;
	return n === `center` && r === `center` ? `center` : n + ` ` + r;
}
function xo(e) {
	return {
		display: `block`,
		width: `100%`,
		height: `100%`,
		...nx,
		objectPosition: bo(e.positionX, e.positionY),
		objectFit: yo(e.fit),
	};
}
function So(e) {
	let t = f.useRef(e ? `auto` : `async`),
		n = l((e) => {
			((t.current = `auto`), (e.decoding = `auto`));
		}, []),
		r = l(
			(e) => {
				n(e.currentTarget);
			},
			[n],
		),
		i = l(
			(e) => {
				e?.complete && n(e);
			},
			[n],
		);
	return { decoding: t.current, onImageLoad: r, onImageMount: i };
}
function Co({
	image: e,
	containerSize: t,
	nodeId: n,
	alt: r,
	draggable: i,
	avoidAsyncDecoding: a,
}) {
	let o = tx.useImageSource(e, t, n),
		s = xo(e),
		{ decoding: c, onImageLoad: l, onImageMount: u } = So(a),
		{ srcSet: d, src: f } =
			`srcSet` in e
				? { src: o, srcSet: e.srcSet }
				: _o(e.nodeFixedSize, e, o);
	return _(`img`, {
		suppressHydrationWarning: !0,
		ref: u,
		decoding: c,
		fetchpriority: e.fetchPriority,
		loading: e.loading,
		width: e.pixelWidth,
		height: e.pixelHeight,
		sizes: d ? e.sizes : void 0,
		srcSet: d,
		src: f,
		onLoad: l,
		alt: r ?? e.alt ?? ``,
		style: s,
		draggable: i,
	});
}
function wo({ image: e, containerSize: t, nodeId: n }) {
	let r = f.useRef(null),
		i = tx.useImageElement(e, t, n),
		a = xo(e);
	return (
		f.useLayoutEffect(() => {
			let e = r.current;
			if (e !== null)
				return (
					e.appendChild(i),
					() => {
						e.removeChild(i);
					}
				);
		}, [i]),
		Object.assign(i.style, a),
		_(`div`, { ref: r, style: { display: `contents`, ...nx } })
	);
}
function To({ nodeId: e, image: t, containerSize: n }) {
	let r = f.useRef(null),
		i = tx.useImageSource(t, n, e);
	return (
		f.useLayoutEffect(() => {
			let n = r.current;
			if (n === null) return;
			let a = xo(t);
			tx.renderOptimizedCanvasImage(n, i, a, e);
		}, [e, t, i]),
		_(`div`, { ref: r, style: { display: `contents`, ...nx } })
	);
}
function Eo({ layoutId: e, image: t, ...n }) {
	e && (e += `-background`);
	let r = null,
		i = !!e,
		a = null;
	if (L(t.src))
		if (t.fit === `tile` && t.pixelWidth && t.pixelHeight) {
			let e = R(t.backgroundSize) ? t.backgroundSize : 1,
				n = {
					width: Math.round(e * t.pixelWidth),
					height: Math.round(e * t.pixelHeight),
				},
				o = li(e * (t.pixelWidth / 2)),
				s = tx.useImageSource(t, n);
			((r = {
				...ox,
				backgroundImage: `url(${s})`,
				backgroundRepeat: `repeat`,
				backgroundPosition: bo(t.positionX, t.positionY),
				opacity: void 0,
				border: 0,
				backgroundSize: `${o}px auto`,
			}),
				(a = null),
				(i = !0));
		} else
			a =
				FramerEnvironment.current() === FramerEnvironment.canvas
					? tx.canRenderOptimizedCanvasImage(tx.useImageSource(t))
						? _(To, { image: t, ...n })
						: _(wo, { image: t, ...n })
					: _(Co, {
							image: t,
							avoidAsyncDecoding: FramerEnvironment.current() === FramerEnvironment.export,
							...n,
						});
	let o = a ? ox : (r ?? { ...ox, ...vo() });
	return i
		? _(P.div, {
				layoutId: e,
				style: o,
				"data-framer-background-image-wrapper": !0,
				children: a,
			})
		: _(`div`, {
				style: o,
				"data-framer-background-image-wrapper": !0,
				children: a,
			});
}
function Do(e, t, n = !0) {
	let { borderWidth: r, borderStyle: i, borderColor: a } = e;
	if (!r) return;
	let o, s, c, l;
	if (
		(typeof r == `number`
			? (o = s = c = l = r)
			: ((o = r.top || 0),
				(s = r.bottom || 0),
				(c = r.left || 0),
				(l = r.right || 0)),
		!(o === 0 && s === 0 && c === 0 && l === 0))
	) {
		if (n && o === s && o === c && o === l) {
			t.border = `${o}px ${i} ${a}`;
			return;
		}
		((t.borderStyle = e.borderStyle),
			(t.borderColor = e.borderColor),
			(t.borderTopWidth = `${o}px`),
			(t.borderBottomWidth = `${s}px`),
			(t.borderLeftWidth = `${c}px`),
			(t.borderRightWidth = `${l}px`));
	}
}
function Oo(e) {
	let t = e.layoutId ? `${e.layoutId}-border` : void 0;
	if (!e.borderWidth) return null;
	let n = {
		position: `absolute`,
		left: 0,
		right: 0,
		top: 0,
		bottom: 0,
		...nx,
		pointerEvents: `none`,
	};
	return e.border
		? ((n.border = e.border), _(P.div, { style: n }))
		: (Do(e, n, !1),
			_(P.div, { "data-frame-border": !0, style: n, layoutId: t }));
}
function ko(e, t) {
	let { _forwardedOverrideId: n, _forwardedOverrides: r, id: i } = t,
		a = n ?? i,
		o = r && a ? r[a] : void 0;
	return (o && typeof o == `string` && (e = { ...e, src: o }), e);
}
function Ao(e) {
	let { background: t, image: n } = e;
	if (n !== void 0 && t && !cx.isImageObject(t)) return;
	let r = null;
	if (
		((r = L(n) ? { alt: ``, src: n } : K.get(t, null)), cx.isImageObject(r))
	)
		return ko(r, e);
}
function jo(e) {
	if (e) {
		if (e.pixelHeight && e.pixelWidth)
			return { width: e.pixelWidth, height: e.pixelHeight };
		if (e.src === void 0) return { width: 1, height: 1 };
	}
}
function Mo(e) {
	return e && e !== `search` && e !== `slot` && e !== `template`
		? P[e]
		: P.div;
}
function No(e, t) {
	((e[`data-framer-layout-hint-center-x`] =
		t === !0 || t === `x` ? !0 : void 0),
		(e[`data-framer-layout-hint-center-y`] =
			t === !0 || t === `y` ? !0 : void 0));
}
function Po(e) {
	let t = {};
	return (!e || !lx || FramerEnvironment.current() !== FramerEnvironment.canvas || No(t, e), t);
}
function Fo(e) {
	return e.replace(/^id_/u, ``).replace(/\\/gu, ``);
}
function Io(e, t) {
	if (!t && ((t = e.children), !t)) return { props: e, children: t };
	let n = e._forwardedOverrides;
	return (
		n &&
			(t = f.Children.map(t, (e) =>
				f.isValidElement(e)
					? f.cloneElement(e, { _forwardedOverrides: n })
					: e,
			)),
		{ props: e, children: t }
	);
}
function Lo(e) {
	return (t, n) =>
		e === !0
			? `translate(-50%, -50%) ${n}`
			: e === `x`
				? `translateX(-50%) ${n}`
				: e === `y`
					? `translateY(-50%) ${n}`
					: n || `none`;
}
function Ro(e, { specificLayoutId: t, postfix: n } = {}) {
	let {
			name: r,
			layoutIdKey: i,
			duplicatedFrom: a,
			__fromCodeComponentNode: o = !1,
			drag: s,
		} = e,
		{ getLayoutId: l, enabled: u } = C(Zv);
	return c(() => {
		if (!u) return e.layoutId;
		let c = t || e.layoutId;
		if (!c && (s || !i || o)) return;
		let d = c || l({ id: i, name: r, duplicatedFrom: a });
		if (d) return n ? `${d}-${n}` : d;
	}, [u]);
}
function zo() {
	let [e, t] = f.useState(0);
	return f.useCallback(() => t((e) => e + 1), []);
}
function Bo(e) {
	let t = zo();
	d(() => {
		let n = e?.current;
		if (n)
			return (
				px?.observeElementWithCallback(e.current, t),
				() => {
					px?.unobserve(n);
				}
			);
	}, [e, t]);
}
function Vo(e) {
	return [
		...(e.firstElementChild && e.firstElementChild.hasAttribute(mx)
			? e.firstElementChild.children
			: e.children),
	]
		.filter(Ho)
		.map(Uo);
}
function Ho(e) {
	return e instanceof HTMLBaseElement ||
		e instanceof HTMLHeadElement ||
		e instanceof HTMLLinkElement ||
		e instanceof HTMLMetaElement ||
		e instanceof HTMLScriptElement ||
		e instanceof HTMLStyleElement ||
		e instanceof HTMLTitleElement
		? !1
		: e instanceof HTMLElement || e instanceof SVGElement;
}
function Uo(e) {
	if (
		!(e instanceof HTMLElement) ||
		e.children.length === 0 ||
		e.style.display !== `contents`
	)
		return e;
	let t = [...e.children].find(Ho);
	return t ? Uo(t) : e;
}
function Wo(e, t, n = () => [], r = {}) {
	let { id: i, visible: a, _needsMeasure: o } = e,
		{ skipHook: s = !1 } = r,
		c = C(dx),
		l = FramerEnvironment.current() === FramerEnvironment.canvas;
	ux(() => {
		!l ||
			c ||
			s ||
			(t.current &&
				i &&
				a &&
				o &&
				tx.queueMeasureRequest(Fo(i), t.current, n(t.current)));
	});
}
function Go(e) {
	let t = e.closest(`[data-framer-component-container]`);
	t && tx.queueMeasureRequest(Fo(t.id), t, Vo(t));
}
function Ko(e) {
	e.willChange = `transform`;
	let t = FramerEnvironment.current() === FramerEnvironment.canvas;
	_x && t && (e.translateZ = hx);
}
function qo(e) {
	((e.willChange = `transform`), Jo(e, !0));
}
function Jo(e, t) {
	let n = FramerEnvironment.current() === FramerEnvironment.canvas;
	if (!_x || !n) return;
	let r = (L(e.transform) && e.transform) || ``;
	t
		? r.includes(gx) || (e.transform = r + gx)
		: (e.transform = r.replace(gx, ``));
}
function Yo(e, t, n, r = !0) {
	if (!e) return;
	let i = Jb(e.style),
		a = n || i[t],
		o = () => {
			Xo(a) && (i[t] = a);
		};
	((i[t] = null), r ? Promise.resolve().then(o) : setTimeout(o, 0));
}
function Xo(e) {
	return L(e) || R(e) || nt(e);
}
function Zo(e, t) {
	if (e.size < t) return;
	let n = Math.round(Math.random());
	for (let t of e.keys()) (++n & 1) != 1 && e.delete(t);
}
function Qo(e, t, n, r) {
	let i = t.get(n);
	if (i) return i;
	Zo(t, e);
	let a = r(n);
	return (t.set(n, a), a);
}
function $o(e, t) {
	let n = [e, t];
	return xx.test(e) ? e : Qo(1e3, Sx, n, () => bx.multiplyAlpha(e, t));
}
function es(e, t = 1) {
	let n;
	return (
		(n =
			`stops` in e
				? e.stops
				: [
						{ value: e.start, position: 0 },
						{ value: e.end, position: 1 },
					]),
		t === 1 ? n : n.map((e) => ({ ...e, value: $o(e.value, t) }))
	);
}
function ts(e, t) {
	let n = 0;
	return (
		es(e, t).forEach((e) => {
			n ^= yx(e.value) ^ e.position;
		}),
		n
	);
}
function ns(e) {
	return e && Cx.every((t) => t in e);
}
function rs(e) {
	return e && wx.every((t) => t in e);
}
function is({ background: e, backgroundColor: t }, n) {
	t
		? typeof t == `string` || Bv(t)
			? (n.backgroundColor = t)
			: q.isColorObject(e) &&
				(n.backgroundColor = e.initialValue || q.toRgbString(e))
		: e &&
			((e = K.get(e, null)),
			typeof e == `string` || Bv(e)
				? (n.background = e)
				: Ex.isLinearGradient(e)
					? (n.background = Ex.toCSS(e))
					: Ox.isRadialGradient(e)
						? (n.background = Ox.toCSS(e))
						: q.isColorObject(e) &&
							(n.backgroundColor =
								e.initialValue || q.toRgbString(e)));
}
function U(e, t, n, r) {
	if ((r === void 0 && (r = t), e[t] !== void 0)) {
		n[r] = e[t];
		return;
	}
}
function as(e) {
	return e ? e.left !== void 0 && e.right !== void 0 : !1;
}
function os(e) {
	return e ? e.top !== void 0 && e.bottom !== void 0 : !1;
}
function ss(e) {
	if (!e) return {};
	let t = {};
	(e.preserve3d === !0
		? (t.transformStyle = `preserve-3d`)
		: e.preserve3d === !1 && (t.transformStyle = `flat`),
		e.backfaceVisible === !0
			? (t.backfaceVisibility = `visible`)
			: e.backfaceVisible === !1 && (t.backfaceVisibility = `hidden`),
		t.backfaceVisibility &&
			(t.WebkitBackfaceVisibility = t.backfaceVisibility),
		e.perspective !== void 0 &&
			(t.perspective = t.WebkitPerspective = e.perspective),
		e.__fromCanvasComponent ||
			(e.center === !0
				? ((t.left = `50%`), (t.top = `50%`))
				: e.center === `x`
					? (t.left = `50%`)
					: e.center === `y` && (t.top = `50%`)));
	let { cornerShape: n } = e;
	return (
		we(n)
			? (t.cornerShape = re(() => `superellipse(${n.get()})`))
			: n !== void 0 && (t.cornerShape = `superellipse(${n})`),
		U(e, `size`, t),
		U(e, `width`, t),
		U(e, `height`, t),
		U(e, `minWidth`, t),
		U(e, `minHeight`, t),
		U(e, `top`, t),
		U(e, `right`, t),
		U(e, `bottom`, t),
		U(e, `left`, t),
		U(e, `position`, t),
		U(e, `overflow`, t),
		U(e, `opacity`, t),
		(!e._border || !e._border.borderWidth) && U(e, `border`, t),
		U(e, `borderRadius`, t),
		U(e, `radius`, t, `borderRadius`),
		U(e, `color`, t),
		U(e, `shadow`, t, `boxShadow`),
		U(e, `x`, t),
		U(e, `y`, t),
		U(e, `z`, t),
		U(e, `rotate`, t),
		U(e, `rotateX`, t),
		U(e, `rotateY`, t),
		U(e, `rotateZ`, t),
		U(e, `scale`, t),
		U(e, `scaleX`, t),
		U(e, `scaleY`, t),
		U(e, `skew`, t),
		U(e, `skewX`, t),
		U(e, `skewY`, t),
		U(e, `originX`, t),
		U(e, `originY`, t),
		U(e, `originZ`, t),
		is(e, t),
		t
	);
}
function cs(e) {
	for (let t in e)
		if (
			t === `drag` ||
			t.startsWith(`while`) ||
			(typeof Jb(e)[t] == `function` &&
				t.startsWith(`on`) &&
				!t.includes(`Animation`))
		)
			return !0;
	return !1;
}
function ls(e) {
	if (e.drag) return `grab`;
	for (let t in e) if (Ax.has(t)) return `pointer`;
}
function us(e) {
	return ds(e) ? !0 : e.style ? !!ds(e.style) : !1;
}
function ds(e) {
	return jx in e && (e[jx] === `scroll` || e[jx] === `auto`);
}
function fs(e) {
	let {
			left: t,
			top: n,
			bottom: r,
			right: i,
			width: a,
			height: o,
			center: s,
			_constraints: c,
			size: l,
			widthType: u,
			heightType: d,
			positionFixed: f,
			positionAbsolute: p,
		} = e,
		m = F(e.minWidth),
		h = F(e.minHeight),
		g = F(e.maxWidth),
		_ = F(e.maxHeight);
	return {
		top: F(n),
		left: F(t),
		bottom: F(r),
		right: F(i),
		width: F(a),
		height: F(o),
		size: F(l),
		center: s,
		_constraints: c,
		widthType: u,
		heightType: d,
		positionFixed: f,
		positionAbsolute: p,
		minWidth: m,
		minHeight: h,
		maxWidth: g,
		maxHeight: _,
	};
}
function ps(e) {
	let t = C(dx),
		{ style: n, _initialStyle: r, __fromCanvasComponent: i, size: a } = e,
		o = fs(e),
		s = Ea(o),
		c = {
			display: `block`,
			flex: n?.flex ?? `0 0 auto`,
			userSelect: FramerEnvironment.current() === FramerEnvironment.preview ? void 0 : `none`,
		};
	e.__fromCanvasComponent ||
		(c.backgroundColor =
			e.background === void 0 ? `rgba(0, 170, 255, 0.3)` : void 0);
	let l = !cs(e) && !e.__fromCanvasComponent && !us(e),
		u = e.style ? !(`pointerEvents` in e.style) : !0;
	l && u && (c.pointerEvents = `none`);
	let d = f.Children.count(e.children) > 0 &&
			f.Children.toArray(e.children).every(
				(e) => typeof e == `string` || typeof e == `number`,
			) && {
				display: `flex`,
				alignItems: `center`,
				justifyContent: `center`,
				textAlign: `center`,
			},
		p = ss(e);
	(a === void 0 &&
		!i &&
		(as(p) || (c.width = Mx.width), os(p) || (c.height = Mx.height)),
		o.minWidth !== void 0 && (c.minWidth = o.minWidth),
		o.minHeight !== void 0 && (c.minHeight = o.minHeight));
	let m = {};
	(ha(o) &&
		s &&
		!Da(e) &&
		(m = {
			left: s.x,
			top: s.y,
			width: s.width,
			height: s.height,
			right: void 0,
			bottom: void 0,
		}),
		Object.assign(c, d, r, p, m, n),
		Object.assign(c, {
			overflowX: c.overflowX ?? c.overflow,
			overflowY: c.overflowY ?? c.overflow,
			overflow: void 0,
		}),
		vx.applyWillChange(e, c, !0));
	let h = c;
	c.transform || (h = { x: 0, y: 0, ...c });
	let g = lo();
	return (
		e.positionSticky
			? (!g || tx.isOnPageCanvas || t) &&
				((h.position = `sticky`),
				(h.willChange = `transform`),
				(h.top = e.positionStickyTop),
				(h.right = e.positionStickyRight),
				(h.bottom = e.positionStickyBottom),
				(h.left = e.positionStickyLeft))
			: g &&
				(e.positionFixed
					? (h.position = tx.isOnPageCanvas ? `fixed` : `absolute`)
					: e.positionAbsolute && (h.position = `absolute`)),
		`rotate` in h && h.rotate === void 0 && delete h.rotate,
		[h, s]
	);
}
function ms(e) {
	let t = {};
	for (let n in e)
		(Je(n) || Xb(n)) && !Nx.has(n)
			? (t[n] = Jb(e)[n])
			: (n === `positionTransition` || n === `layoutTransition`) &&
				((t.layout = !0),
				typeof Jb(e)[n] != `boolean` &&
					!e.transition &&
					(t.transition = Jb(e)[n]));
	return t;
}
function hs(e) {
	return `data-framer-name` in e;
}
function gs(e, t, n, r) {
	if (r) return n ? { width: n.width, height: n.height } : 1;
	let { _usesDOMRect: i } = e,
		{ widthType: a = 0, heightType: o = 0, width: s, height: c } = t;
	return n && !i
		? n
		: a === 0 && o === 0 && typeof s == `number` && typeof c == `number`
			? { width: s, height: c }
			: i || e.positionFixed || e.positionAbsolute
				? 2
				: 0;
}
function _s(e) {
	return _(P.div, { layoutId: Ix, style: zx, children: e.children });
}
function vs(e, t) {
	Ze(e) ? e(t) : ys(e) && (e.current = t);
}
function ys(e) {
	return z(e) && `current` in e;
}
function bs() {
	let e = Qi(() => new Set()),
		t = Qi(() => new Map());
	return Qi(() => (n, r) => ({
		get current() {
			return n.current;
		},
		set current(i) {
			if (i !== n.current) {
				if (
					((n.current = i),
					r && r(i),
					t.forEach((e, t) => {
						e ? e() : t(null);
					}),
					i === null)
				) {
					(t.clear(), e.clear());
					return;
				}
				e.forEach((e) => {
					let n = e(i);
					t.set(e, n);
				});
			}
		},
		observe(r) {
			e.add(r);
			let i = n.current;
			if (i) {
				let e = r(i);
				t.set(r, e);
			}
		},
		unobserve(n) {
			if (!n || (e.delete(n), !t.has(n))) return;
			let r = t.get(n);
			(r ? r() : n(null), t.delete(n));
		},
	}));
}
function xs(e) {
	let t = w(null),
		n = bs();
	return Qi(() => (ys(e) ? n(e) : Ze(e) ? n(t, e) : n(t)));
}
function Ss(e, t, n) {
	let r = w(),
		i = w();
	(_r(
		() => {
			i.current !== void 0 && (i.current = !0);
		},
		n ?? [{}],
	),
		e &&
			i.current !== !1 &&
			((i.current = !1),
			e.unobserve(r.current),
			e.observe(t),
			(r.current = t)));
}
function Cs(e, t, n, r, i, a, o) {
	let s = e.get(t);
	return (
		(!s || s.root !== r?.current) &&
			((s = new Bx({ root: r?.current, rootMargin: a, threshold: o })),
			e.set(t, s)),
		s.observeElementWithCallback(n, i),
		() => {
			s.unobserve(n);
		}
	);
}
function ws(e, t, n) {
	let r = Qi(() => `${n.rootMargin}`),
		i = C(Vx),
		{ enabled: a, root: o, rootMargin: s, threshold: c } = n;
	Ss(
		e,
		(e) => {
			if (a && e !== null) return Cs(i, r, e, o, t, s, c);
		},
		[a, t, o, s, c],
	);
}
function Ts(e, t, n) {
	let r = f.useRef({ isInView: !1, hasAnimatedOnce: !1 }),
		{
			enabled: i,
			animateOnce: a,
			threshold: o,
			rootMargin: s = `0px 0px 0px 0px`,
		} = n;
	Hx(
		e,
		f.useCallback(
			(e) => {
				let { isInView: n, hasAnimatedOnce: i } = r.current,
					s = Ds(e, o?.y ?? 0);
				if (s && !n) {
					if (a && i) return;
					((r.current.hasAnimatedOnce = !0),
						(r.current.isInView = !0),
						t(!0));
					return;
				}
				if (!s && n) {
					if (((r.current.isInView = !1), a)) return;
					t(!1);
					return;
				}
			},
			[a, o?.y, t],
		),
		{ threshold: Ux, rootMargin: s, enabled: i ?? !0 },
	);
}
function Es(e, t) {
	return t.height === 0 ? 0 : e.height / Math.min(t.height, G.innerHeight);
}
function Ds(
	{ boundingClientRect: e, intersectionRect: t, isIntersecting: n },
	r,
) {
	return e.height === 0 ? n : n && Es(t, e) >= r;
}
function Os() {
	return C(qx);
}
function ks() {
	return new Map();
}
function As() {
	return Qi(ks);
}
function js(e, t = []) {
	let { register: n, deregister: r } = C(Jx);
	d(() => {
		if (e) return (n(e), () => r(e));
	}, [n, r, ...t]);
}
function Ms(e, t) {
	return !(
		t.isCurrent === void 0 ||
		e.isCurrent !== t.isCurrent ||
		e.isPrevious !== t.isPrevious ||
		(t.isCurrent && e.isOverlayed !== t.isOverlayed)
	);
}
function Ns(e, t, n) {
	let r = { ...e };
	return (
		t &&
			(H(t.originX) && (r.originX = t.originX),
			H(t.originY) && (r.originY = t.originY),
			H(t.originZ) && (r.originZ = t.originZ)),
		n &&
			(H(n.originX) && (r.originX = n.originX),
			H(n.originY) && (r.originY = n.originY),
			H(n.originZ) && (r.originZ = n.originZ)),
		r
	);
}
function Ps(e) {
	if (!e || !(`rotateX` in e || `rotateY` in e || `z` in e)) return !1;
	let t = e.rotateX !== 0 || e.rotateY !== 0 || e.z !== 0,
		n =
			e?.transition?.rotateX.from !== 0 ||
			e?.transition?.rotateY.from !== 0 ||
			e?.transition?.z.from !== 0;
	return t || n;
}
function Fs(e) {
	switch (e && e.appearsFrom ? e.appearsFrom : `right`) {
		case `right`:
			return eS.PushLeft;
		case `left`:
			return eS.PushRight;
		case `bottom`:
			return eS.PushUp;
		case `top`:
			return eS.PushDown;
	}
}
function Is(e) {
	switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
		case `right`:
			return eS.OverlayLeft;
		case `left`:
			return eS.OverlayRight;
		case `bottom`:
			return eS.OverlayUp;
		case `top`:
			return eS.OverlayDown;
	}
}
function Ls(e) {
	switch (e && e.appearsFrom ? e.appearsFrom : `bottom`) {
		case `right`:
			return eS.FlipLeft;
		case `left`:
			return eS.FlipRight;
		case `bottom`:
			return eS.FlipUp;
		case `top`:
			return eS.FlipDown;
	}
}
function Rs(e, t) {
	switch (t.type) {
		case `addOverlay`:
			return Bs(e, t.transition, t.component);
		case `removeOverlay`:
			return Vs(e);
		case `add`:
			return Hs(e, t.key, t.transition, t.component);
		case `remove`:
			return Gs(e);
		case `update`:
			return zs(e, t.key, t.component);
		case `back`:
			return Us(e);
		case `forward`:
			return Ws(e);
		default:
			return;
	}
}
function zs(e, t, n) {
	return { ...e, containers: { ...e.containers, [t]: n } };
}
function Bs(e, t, n) {
	let r = e.overlayStack[e.currentOverlay];
	if (r && r.component === n) return;
	let i = e.overlayItemId + 1,
		a = [
			...e.overlayStack,
			{ key: `stack-${i}`, component: n, transition: t },
		];
	return {
		...e,
		overlayStack: a,
		overlayItemId: i,
		currentOverlay: Math.max(
			0,
			Math.min(e.currentOverlay + 1, a.length - 1),
		),
		previousOverlay: e.currentOverlay,
	};
}
function Vs(e) {
	return {
		...e,
		overlayStack: [],
		currentOverlay: -1,
		previousOverlay: e.currentOverlay,
	};
}
function Hs(e, t, n, r) {
	(e.containers[t] || (e.containers[t] = r),
		(e.history = e.history.slice(0, e.current + 1)),
		(e.visualIndex = Math.max(e.history.length, 0)));
	let i = e.history[e.history.length - 1],
		a = i && i.key === t;
	if (((e.overlayStack = []), a && e.currentOverlay > -1))
		return { ...e, currentOverlay: -1, previousOverlay: e.currentOverlay };
	if (a) return;
	let o = e.containerVisualIndex[t],
		s = e.containerIsRemoved[t],
		c = i?.key && n.withMagicMotion ? Xs(t, o, s, e.history) : !0;
	e.history.push({
		key: t,
		transition: n,
		visualIndex: c ? Math.max(e.visualIndex, 0) : e.containerVisualIndex[t],
	});
	let l = e.current + 1,
		u = e.current;
	for (let t in e.containerIndex)
		e.containerIndex[t] === l && (e.containerIndex[t] = Js(t, e.history));
	e.containerIndex[t] = l;
	let { containerVisualIndex: d, containerIsRemoved: f } = Ks(e, t, c),
		p = Ys(l, u, e.history, e.containerIndex, e.transitionForContainer);
	return {
		...e,
		current: l,
		previous: u,
		containerVisualIndex: d,
		containerIsRemoved: f,
		transitionForContainer: p,
		previousTransition: null,
		currentOverlay: -1,
		historyItemId: e.historyItemId + 1,
		previousOverlay: e.currentOverlay,
	};
}
function Us(e) {
	let t = { ...e.containers },
		n = Gs(e);
	if (n) return ((n.containers = t), n);
}
function Ws(e) {
	let t = e.history[e.current + 1];
	if (!t) return;
	let { key: n, transition: r, component: i } = t,
		a = [...e.history],
		o = Hs(e, n, r, i);
	if (o) return ((o.history = a), o);
}
function Gs(e) {
	let t = [...e.history.slice(0, e.current + 1)];
	if (t.length === 1) return;
	let n = t.pop();
	if (!n) return;
	let r = t[t.length - 1];
	(B(r, `The navigation history must have at least one component`),
		(e.containerIndex[r.key] = t.length - 1),
		t.every((e) => e.key !== n.key) && delete e.containers[n.key]);
	let i = e.current - 1,
		a = e.current,
		{
			containerIsRemoved: o,
			containerVisualIndex: s,
			previousTransition: c,
			visualIndex: l,
		} = qs(e, r, n),
		u = Ys(i, a, e.history, e.containerIndex, e.transitionForContainer);
	return {
		...e,
		current: i,
		previous: a,
		containerIsRemoved: o,
		containerVisualIndex: s,
		previousTransition: c,
		visualIndex: l,
		transitionForContainer: u,
	};
}
function Ks(e, t, n) {
	let r = {
		containerVisualIndex: { ...e.containerVisualIndex },
		containerIsRemoved: { ...e.containerIsRemoved },
	};
	if (n)
		((r.containerVisualIndex[t] = e.history.length - 1),
			(r.containerIsRemoved[t] = !1));
	else {
		let n = e.containerVisualIndex[t];
		for (let [t, i] of Object.entries(e.containerVisualIndex))
			n !== void 0 && i > n && (r.containerIsRemoved[t] = !0);
	}
	return r;
}
function qs(e, t, n) {
	let r = [t.key, n.key],
		i = e.history[e.history.length - 2],
		a = e.previousTransition === null ? null : { ...e.previousTransition },
		o = {
			containerIsRemoved: { ...e.containerIsRemoved },
			containerVisualIndex: { ...e.containerVisualIndex },
			previousTransition: a,
			visualIndex: e.visualIndex,
		};
	i && r.push(i.key);
	let s = e.containerVisualIndex[t.key],
		c = e.containerVisualIndex[n.key],
		l =
			(s !== void 0 && c !== void 0 && s <= c) ||
			(t.visualIndex !== void 0 && t.visualIndex < e.history.length - 1),
		u = t.visualIndex;
	return (
		l
			? ((o.containerIsRemoved[n.key] = !0),
				(o.containerVisualIndex[t.key] =
					u === void 0 ? e.history.length - 1 : u))
			: ((o.visualIndex = e.visualIndex + 1),
				(o.containerVisualIndex[t.key] = e.visualIndex + 1)),
		n.transition.withMagicMotion &&
			(o.previousTransition = n.transition || null),
		(e.containerIsRemoved[t.key] = !1),
		o
	);
}
function Js(e, t) {
	for (let n = t.length; n > t.length; n--) if (t[n]?.key === e) return n;
	return -1;
}
function Ys(e, t, n, r, i) {
	let a = { ...i };
	for (let [i, o] of Object.entries(r)) {
		let r = Zs(o, { current: e, previous: t, history: n });
		r && (a[i] = r);
	}
	return a;
}
function Xs(e, t, n, r) {
	return n || t === void 0
		? !0
		: t === 0
			? !1
			: r.slice(t, r.length).findIndex((t) => t.key === e) > -1
				? !0
				: !(r.slice(0, t - 1).findIndex((t) => t.key === e) > -1);
}
function Zs(e, t) {
	let { current: n, previous: r, history: i } = t;
	if (!(e !== n && e !== r)) {
		if (e === n && n > r) {
			let t = i[e];
			return Qs(`enter`, t?.transition.enter, t?.transition.animation);
		}
		if (e === r && n > r) {
			let t = i[e + 1];
			return Qs(`exit`, t?.transition.exit, t?.transition.animation);
		}
		if (e === n && n < r) {
			let t = i[e + 1];
			return Qs(`enter`, t?.transition.exit, t?.transition.animation);
		}
		if (e === r && n < r) {
			let t = i[e];
			return Qs(`exit`, t?.transition.enter, t?.transition.animation);
		}
	}
}
function Qs(e, t, n) {
	let r = {},
		i = {};
	return (
		nS.forEach((e) => {
			((r[e] = Zx[e]), (i[e] = { ...n, from: Zx[e] }));
		}),
		t &&
			Object.keys(t).forEach((a) => {
				if (t[a] === void 0) return;
				let o = t[a],
					s = typeof t[a] == `string` ? `${Jb(Zx)[a]}%` : Jb(Zx)[a];
				((Jb(r)[a] = e === `enter` ? s : o),
					(i[a] = {
						...n,
						from: e === `enter` ? o : s,
						velocity: 0,
					}));
			}),
		{ ...r, transition: { ...i } }
	);
}
function $s(e) {
	let t, n;
	return (
		e.current === -1
			? (n = e.history[e.previous])
			: (t = e.history[e.current]),
		{ currentOverlayItem: t, previousOverlayItem: n }
	);
}
function ec({ currentOverlayItem: e }) {
	return e && e.transition.exit;
}
function tc({ currentOverlayItem: e, previousOverlayItem: t }) {
	return e && e.transition.animation
		? e.transition.animation
		: t && t.transition.animation
			? t.transition.animation
			: oS;
}
function nc({ currentOverlayItem: e, previousOverlayItem: t }) {
	return e ? e.transition.backfaceVisible : t && t.transition.backfaceVisible;
}
function rc(e) {
	if (e.backdropColor) return e.backdropColor;
	if (e.overCurrentContext) return `rgba(4,4,15,.4)`;
}
function ic(e, t) {
	let { current: n, history: r } = t;
	if (e === n) {
		let t = r[e];
		return t && t.transition ? t.transition.backfaceVisible : !0;
	} else if (e < n) {
		let t = r[e + 1];
		return t && t.transition ? t.transition.backfaceVisible : !0;
	} else {
		let t = r[e];
		return t && t.transition ? t.transition.backfaceVisible : !0;
	}
}
function ac(e, t) {
	let n = t.history[e];
	if (n) return n.transition.enter;
}
function oc(e, t) {
	let { current: n, previous: r, history: i } = t;
	return (e === r && n > r) || (e === n && n < r)
		? i[e + 1]?.transition?.backfaceVisible
		: i[e]?.transition?.backfaceVisible;
}
function sc(e, t) {
	let { current: n, history: r } = t;
	if (e !== n)
		if (e < n) {
			let t = r[e + 1];
			if (t && t.transition) return t.transition.exit;
		} else {
			let t = r[e];
			if (t && t.transition) return t.transition.enter;
		}
}
function cc(e, t) {
	let { current: n, previous: r, history: i } = t,
		a = r > n ? r : n;
	if (e < a) {
		let t = i[e + 1];
		if (t && t.transition.animation) return t.transition.animation;
	} else if (e !== a) {
		let t = i[e];
		if (t && t.transition.animation) return t.transition.animation;
	} else {
		let t = i[e];
		if (t?.transition.animation) return t.transition.animation;
	}
	return oS;
}
function lc(e, t, n) {
	let { current: r, previous: i, history: a } = t;
	return !!((n && a.length > 1) || (e !== i && e !== r) || r === i);
}
function uc(e, t) {
	let { current: n, previous: r } = t;
	return e > n && e > r ? !1 : e === n;
}
function dc(e) {
	return f.Children.map(e.component, (t) => {
		if (!ra(t) || !na(t) || !t.props) return t;
		let n = { style: t.props.style ?? {} },
			r = e?.transition?.position,
			i = !r || (r.left !== void 0 && r.right !== void 0),
			a = !r || (r.top !== void 0 && r.bottom !== void 0),
			o = `style` in t.props ? z(t.props.style) : !0;
		return (
			i &&
				(`width` in t.props && (n.width = `100%`),
				o && (n.style.width = `100%`)),
			a &&
				(`height` in t.props && (n.height = `100%`),
				o && (n.style.height = `100%`)),
			f.cloneElement(t, n)
		);
	});
}
function fc(e, t) {
	if (e.goBackOnTapOutside !== !1) return t;
}
function pc(e) {
	let t = ce(),
		n = le();
	return _(aS, {
		...e,
		resetProjection: t,
		skipLayoutAnimation: n,
		children: e.children,
	});
}
function mc(e, t = null) {
	let n;
	if (
		(t instanceof HTMLElement && (n = t),
		!n && e.target instanceof HTMLElement && (n = e.target),
		!n)
	)
		return { x: e.pageX, y: e.pageY };
	if (typeof G.webkitConvertPointFromPageToNode == `function`) {
		let t = new G.WebKitPoint(e.pageX, e.pageY);
		return (
			(t = G.webkitConvertPointFromPageToNode(n, t)),
			{ x: t.x, y: t.y }
		);
	}
	let r = n.getBoundingClientRect(),
		i = parseFloat(n.style.width),
		a = parseFloat(n.style.height),
		o = { x: i ? i / r.width : 1, y: a ? a / r.height : 1 };
	return {
		x: o.x * (e.pageX - r.left - n.clientLeft + n.scrollLeft),
		y: o.y * (e.pageY - r.top - n.clientTop + n.scrollTop),
	};
}
function hc(e) {
	var t;
	let n =
		((t = class extends f.Component {
			constructor() {
				(super(...arguments),
					I(this, `shouldCancelTap`, !1),
					I(this, `activeEventListeners`, new Map()),
					I(this, `hasFramerEventListener`, !1),
					I(this, `component`, f.createRef()));
			}
			get element() {
				return this.component.current && this.component.current.element;
			}
			componentDidMount() {
				this.addEventListeners();
			}
			componentDidUpdate(e) {
				this.addEventListeners(e);
			}
			componentWillUnmount() {
				this.removeEventListeners();
			}
			addEventListeners(e) {
				this.element && !this.hasFramerEventListener
					? (this.element.addEventListener(
							`FramerEvent`,
							({ detail: e }) => {
								let t = e.type,
									n = e.event;
								this.handleEvent(t, n);
							},
						),
						fS.forEach((e) => this.addHoverEvent(e)),
						(this.hasFramerEventListener = !0))
					: this.element && e
						? fS.forEach((t) => this.checkHoverEvent(t, e))
						: this.element || (this.hasFramerEventListener = !1);
			}
			removeEventListeners() {
				fS.forEach((e) => this.removeHoverEvent(e));
			}
			addHoverEvent(e) {
				let t = this.props[e];
				if (this.element && t) {
					let n = (e) => {
						t(new lS(e));
					};
					this.activeEventListeners.set(e, n);
					let r = dS[e];
					this.element.addEventListener(r, n);
				}
			}
			removeHoverEvent(e) {
				let t = this.activeEventListeners.get(e);
				if (this.element && t) {
					let n = dS[e];
					(this.element.removeEventListener(n, t),
						this.activeEventListeners.delete(e));
				}
			}
			checkHoverEvent(e, t) {
				t[e] !== this.props[e] &&
					(this.removeHoverEvent(e), this.addHoverEvent(e));
			}
			handleEvent(e, t) {
				let n = pS[e];
				n &&
					n.forEach((e) => {
						let n = this.props[e],
							r = this.shouldCancelTap && mS.has(e);
						n && !r && n(t);
					});
			}
			render() {
				return _(uS.Consumer, {
					children: (t) => (
						(this.shouldCancelTap = t.dragging),
						_(e, { ...this.props, ref: this.component })
					),
				});
			}
		}),
		I(t, `defaultProps`, Object.assign({}, e.defaultProps)),
		t);
	return ((0, cS.default)(n, e), n);
}
function gc(e, t) {
	!e.blendingMode ||
		e.blendingMode === `normal` ||
		(t.mixBlendMode = e.blendingMode);
}
function _c(e) {
	return bS in e;
}
function vc(e, t) {
	if (!_c(e)) return;
	let n = K.getNumber(e.opacity);
	n !== 1 && (t.opacity = n);
}
function yc(e, t) {
	e.overflow && (t.overflow = e.overflow);
}
function bc(e) {
	return xS in e;
}
function xc(e) {
	let t = Number(e);
	return typeof e == `string` && Number.isNaN(t)
		? e
		: (ai(e) && (t = K.getNumber(e)), t ? `${t}px` : `0`);
}
function Sc(e) {
	return e && e !== `0`;
}
function Cc(e, t) {
	if (!bc(e)) return;
	let { radius: n } = e;
	if (typeof n == `string` || ai(n) || H(n)) {
		let e = xc(n);
		Sc(e) &&
			(t.borderTopLeftRadius =
				t.borderTopRightRadius =
				t.borderBottomRightRadius =
				t.borderBottomLeftRadius =
					e);
	} else if (n) {
		let e = xc(n.topLeft),
			r = xc(n.topRight),
			i = xc(n.bottomRight),
			a = xc(n.bottomLeft);
		(Sc(e) || Sc(r) || Sc(i) || Sc(a)) &&
			((t.borderTopLeftRadius = e),
			(t.borderTopRightRadius = r),
			(t.borderBottomRightRadius = i),
			(t.borderBottomLeftRadius = a));
	}
}
function wc(e, t) {
	let { color: n } = e;
	typeof n == `string`
		? (t.color = n)
		: q.isColorObject(n) && (t.color = n.initialValue || q.toRgbString(n));
}
function Tc(e) {
	let t = [];
	if (e && e.length) {
		let n = e.map(
			(e) => `drop-shadow(${e.x}px ${e.y}px ${e.blur}px ${e.color})`,
		);
		t.push(...n);
	}
	return t;
}
function Ec(e, t) {
	if (!e.shadows || e.shadows.length === 0) return;
	let n = e.shadows
		.map((e) => `${e.x}px ${e.y}px ${e.blur}px ${e.color}`)
		.join(`, `);
	n && (t.textShadow = n);
}
function Dc(e, t) {
	if (!e.shadows || e.shadows.length === 0) return;
	let n = e.shadows.map((e) => CS.toCSS(e)).join(`, `);
	n && (t.boxShadow = n);
}
function Oc(e, t) {
	let n = [];
	(H(e.brightness) && n.push(`brightness(${e.brightness / 100})`),
		H(e.contrast) && n.push(`contrast(${e.contrast / 100})`),
		H(e.grayscale) && n.push(`grayscale(${e.grayscale / 100})`),
		H(e.hueRotate) && n.push(`hue-rotate(${e.hueRotate}deg)`),
		H(e.invert) && n.push(`invert(${e.invert / 100})`),
		H(e.saturate) && n.push(`saturate(${e.saturate / 100})`),
		H(e.sepia) && n.push(`sepia(${e.sepia / 100})`),
		H(e.blur) && n.push(`blur(${e.blur}px)`),
		e.dropShadows && n.push(...Tc(e.dropShadows)),
		n.length !== 0 && (t.filter = t.WebkitFilter = n.join(` `)));
}
function kc(e, t) {
	H(e.backgroundBlur) &&
		(t.backdropFilter = t.WebkitBackdropFilter =
			`blur(${e.backgroundBlur}px)`);
}
function Ac(e, t) {
	(kc(e, t), Oc(e, t));
}
function jc(e, t, n = !1) {
	(is(e, t),
		Cc(e, t),
		Ac(e, t),
		gc(e, t),
		yc(e, t),
		vc(e, t),
		wc(e, t),
		n ? Ec(e, t) : Dc(e, t));
}
function Mc(e, t) {
	return (typeof t == `string` && (t = parseFloat(t)), H(t) ? t : wS(e));
}
function Nc(e, t, n) {
	let r = n,
		i = typeof t.x == `number` ? `${t.x}px` : t.x,
		a = typeof t.y == `number` ? `${t.y}px` : t.y,
		o = wS(e.z),
		s = wS(e.scaleZ),
		c = wS(e.originZ),
		l = Mc(e.rotationZ, F(r.rotateZ)),
		u = Mc(e.rotationX, F(r.rotateX)),
		d = Mc(e.rotationY, F(r.rotateY)),
		f = wS(e.scale),
		p = wS(e.scaleX),
		m = wS(e.scaleY),
		h = wS(e.skew),
		g = wS(e.skewX),
		_ = wS(e.skewY),
		v = Mc(e.rotation, F(r.rotate));
	Yv.target === FramerEnvironment.export ||
	o !== 0 ||
	s !== 1 ||
	c !== 0 ||
	l !== 0 ||
	u !== 0 ||
	d !== 0
		? (n.transform = `
            ${`translate3d(${i}, ${a}, ${o}px)`}
            scale3d(${p * f}, ${m * f}, ${s})
            skew(${h}deg,${h}deg)
            skewX(${g}deg)
            skewY(${_}deg)
            translateZ(${c}px)
            rotateX(${u}deg)
            rotateY(${d}deg)
            rotateZ(${(v + l).toFixed(4)}deg)
            translateZ(${-c}px)`)
		: (n.transform = `
            ${`translate(${i}, ${a})`}
            scale(${p * f}, ${m * f})
            skew(${h}deg,${h}deg)
            skewX(${g}deg)
            skewY(${_}deg)
            rotate(${v.toFixed(4)}deg)`);
	let y = `${wS(e.originX) * 100}% ${wS(e.originY) * 100}%`;
	((n.transformOrigin = y), (n.WebkitTransformOrigin = y));
}
function Pc(e) {
	switch (e) {
		case `fit`:
			return `contain`;
		case `stretch`:
			return `100% 100%`;
		default:
			return `cover`;
	}
}
function Fc(e, t) {
	let n = Ao(e);
	n &&
		((t.backgroundImage = `url("${n.src}")`),
		(t.backgroundSize = Pc(n.fit)),
		(t.backgroundRepeat = `no-repeat`),
		(t.backgroundPosition = `center`));
}
function Ic(e) {
	return H(e) ? `${e}px` : e;
}
function Lc(e, t, n) {
	if (t[n] !== void 0) {
		let r = K.get(t[n], void 0);
		Jb(e)[n] = Ic(r);
	}
}
function Rc(e) {
	return _(`div`, {
		style: Object.assign(
			{},
			{
				height: `100%`,
				display: `flex`,
				alignItems: `center`,
				justifyContent: `center`,
				fontFamily: `Helvetica`,
			},
			e.style || {},
		),
		children: e.children,
	});
}
function zc(e) {
	for (let t in e) if (ai(e[t])) return !0;
	for (let t of DS) if (e.hasOwnProperty(t)) return !1;
	for (let t of OS) if (e.hasOwnProperty(t)) return !0;
	return !1;
}
function Bc(e, t) {
	let n,
		r = (...r) => {
			(G.clearTimeout(n), (n = G.setTimeout(e, t, ...r)));
		};
	return (
		(r.cancel = () => {
			G.clearTimeout(n);
		}),
		r
	);
}
function Vc(e, t = 2) {
	let n = 0;
	if (typeof e == `number`) n = e;
	else if (typeof e == `string`) n = parseFloat(e);
	else return;
	if (Number.isInteger(n)) return n;
	let r = 1;
	for (; t-- > 0; ) r *= 10;
	return (n < 0 && (r *= -1), Math.round(n * r) / r);
}
function Hc(e) {
	if (e === `none`) return null;
	let t = e
			.trim()
			.split(/\s+/)
			.map((e) => Vc(e)),
		[n, r, i, a] = t;
	switch (t.length) {
		case 1:
			return H(n) ? { top: n, right: n, bottom: n, left: n } : null;
		case 2:
			return !H(n) || !H(r)
				? null
				: { top: n, right: r, bottom: n, left: r };
		case 3:
			return !H(n) || !H(r) || !H(i)
				? null
				: { top: n, right: r, bottom: i, left: r };
		case 4:
			return !H(n) || !H(r) || !H(i) || !H(a)
				? null
				: { top: n, right: r, bottom: i, left: a };
		default:
			return null;
	}
}
function Uc(...e) {
	return e.filter(Boolean).join(` `);
}
function Wc(e) {
	if (e.startsWith(FS)) return e.substr(IS);
}
function Gc(e, n, r) {
	let a = i.map(e, (e) => (y(e) ? t(e, n) : e));
	return r ? a : _(O, { children: a });
}
function Kc(e) {
	let t = Qi(() => qc(e));
	return (t.useSetup(e), t.cloneAsElement);
}
function qc(e) {
	let n = { forwardedRef: e, childRef: null, ref: null };
	n.ref = Jc(n);
	let r = (e, t) => {
			if (!n.forwardedRef && n.forwardedRef === e) {
				n.ref = t;
				return;
			}
			let r = !1;
			(n.childRef !== t && ((n.childRef = t), (r = !0)),
				n.forwardedRef !== e && ((n.forwardedRef = e), (r = !0)),
				r && (n.ref = Jc(n)));
		},
		a = !1;
	function o(o, s) {
		if (a)
			throw ReferenceError(
				`useCloneChildrenWithPropsAndRef: You should not call cloneChildrenWithPropsAndRef more than once during the render cycle.`,
			);
		return (
			(a = !0),
			i.count(o) > 1 &&
				e &&
				((n.forwardedRef = void 0), (n.ref = n.childRef)),
			i.map(o, (e) => {
				if (y(e)) {
					let i = `ref` in e ? e.ref : void 0;
					r(n.forwardedRef, i);
					let a = Ze(s) ? s(e.props) : s;
					return t(e, n.ref === i ? a : { ...a, ref: n.ref });
				}
				return e;
			})
		);
	}
	let s = function (e, t) {
		return _(O, { children: o(e, t) });
	};
	return (
		(s.cloneAsArray = o),
		{
			useSetup: (e) => {
				((a = !1), r(e, n.childRef));
			},
			cloneAsElement: s,
		}
	);
}
function Jc(e) {
	if (!e.forwardedRef) return e.childRef;
	let { forwardedRef: t, childRef: n } = e;
	return (e) => {
		(vs(n, e), vs(t, e));
	};
}
function Yc(e, t, n, r, i, a, o, s) {
	let c = f.Children.toArray(t),
		l = c[0];
	if (c.length !== 1 || !f.isValidElement(l))
		return (
			console.warn(
				`PropertyOverrides: expected exactly one React element for a child`,
				t,
			),
			o(t, n)
		);
	let u = [],
		d = [];
	for (let [t] of Object.entries(r)) {
		if (t === i) continue;
		let n = e[t];
		if (!n || !$c(l.props, n)) {
			d.push(t);
			continue;
		}
		let r = Qc([t], a);
		r.length && u.push({ variants: r, propOverrides: n });
	}
	if (u.length === 0) return o(l, n);
	let p = Qc([i, ...d], a);
	p.length && u.unshift({ variants: p });
	let m = [];
	for (let { variants: e, propOverrides: t } of u) {
		if (s && !e.includes(s)) continue;
		let c = e.join(`+`),
			d = _(
				RS.Provider,
				{
					value: { primaryVariantId: i, variants: new Set(e) },
					children: o(l, t ? { ...n, ...t } : n),
				},
				c,
			),
			f = Zc(e, a, r);
		(f.length
			? (B(
					u.length > 1,
					`Must branch out when there are hiddenClassNames`,
				),
				(d = _(
					`div`,
					{
						className: `${zS} ${f.join(` `)}`,
						suppressHydrationWarning: !0,
						children: d,
					},
					c,
				)))
			: B(
					u.length === 1,
					`Cannot branch out when hiddenClassNames is empty`,
				),
			m.push(d));
	}
	return (
		B(
			!s || m.length === 1,
			`Must render exactly one branch when activeVariantId is given`,
		),
		s
			? m
			: [
					...m,
					_(`div`, { className: BS }, `property-overrides-separator`),
				]
	);
}
function Xc(e) {
	return e.split(`-`)[2];
}
function Zc(e, t, n) {
	let r = [];
	for (let [i, a] of Object.entries(n)) {
		let n = t && !t.has(i);
		e.includes(i) || n || r.push(`hidden-${Xc(a)}`);
	}
	return r;
}
function Qc(e, t) {
	return t ? e.filter((e) => t.has(e)) : e;
}
function $c(e, t) {
	for (let n of Object.keys(t)) if (!Et(e[n], t[n], !0)) return !0;
	return !1;
}
function el(e, t, n) {
	return !n || !e ? t : { ...t, ...n[e] };
}
function tl(e) {
	return f.forwardRef(({ optimized: t, ...n }, r) => {
		let i = f.useContext(LS),
			a = f.useContext(RS)?.variants,
			o = n[YS];
		o && !La() && qS.setAll(o, a, t ? n : null, i);
		let s = ZS(n);
		return _(e, { ref: r, ...n, ...s });
	});
}
function nl(e) {
	return L(e) || Array.isArray(e);
}
function rl(e) {
	return e in eC;
}
function il(e, t) {
	let n = Qi(() => ({ values: $S(t ? e : void 0) }));
	return (
		f.useEffect(() => {
			if (!t)
				for (let e of QS) {
					let t = eC[e];
					tt(t) || n.values[e].set(t);
				}
		}, [t]),
		n
	);
}
function al(
	{
		loopEffectEnabled: e,
		loopRepeatDelay: t,
		loopTransition: n,
		loopRepeatType: r,
		loop: i,
		loopPauseOffscreen: a,
	},
	s,
) {
	let u = _e(),
		f = Qi($S),
		p = w(!1),
		m = iC(),
		g = w(null),
		_ = l(async () => {
			if (!i) return;
			let e = n || void 0,
				t = p.current && r === `mirror`,
				a = t ? eC : i,
				o = t ? i : eC;
			return (
				(p.current = !p.current),
				(g.current = Promise.all(
					QS.map((t) => {
						if (!(u && t !== `opacity`))
							return (
								f[t].jump(o[t] ?? eC[t]),
								new Promise((n) => {
									let r = { ...e, onComplete: () => n() },
										i = a[t] ?? o[t];
									typeof i == `number` && Oe(f[t], i, r);
								})
							);
					}),
				)),
				g.current
			);
		}, [i, r, n, u]),
		[v, y] = o(!1),
		b = w(!1),
		x = l(async () => {
			!e || !b.current || (await _(), await m(t ?? 0), x());
		}, [_, m, e, t]),
		S = l(() => {
			b.current || ((b.current = !0), h(() => y(!0)), x());
		}, [x]),
		C = l((e = !0) => {
			(QS.forEach((e) => {
				f[e].stop();
			}),
				QS.forEach((e) => {
					f[e].set(eC[e]);
				}),
				(p.current = !1),
				e && ((b.current = !1), h(() => y(!1))));
		}, []),
		T = e && i,
		E = l(() => {
			document.hidden ? C(!1) : b.current && ((b.current = !1), S());
		}, [S, C]);
	(d(() => {
		if (T)
			return (
				document.addEventListener(`visibilitychange`, E),
				() => {
					document.removeEventListener(`visibilitychange`, E);
				}
			);
	}, [T, E]),
		d(() => {
			(T && a) || (T ? S() : C());
		}, [S, C, a, T]),
		d(() => () => C(), [C]));
	let D = w(!1),
		O = l(async () => {
			g.current && (await g.current, !D.current && C());
		}, [C]);
	Hx(
		s,
		l(
			(e) => {
				e.isIntersecting
					? ((D.current = !0), S())
					: ((D.current = !1), O());
			},
			[S, O],
		),
		{ enabled: T && a },
	);
	let k = v || !a;
	return c(() => ({ values: f, style: T && k ? tC : nC }), [T, k]);
}
function ol(e, t, n, r, i) {
	let a = n / 100 - 1;
	return (i ? (t - r) * a : 0) + -e * a;
}
function sl(e, t, n) {
	let {
			speed: r = 100,
			offset: i = 0,
			adjustPosition: a = !1,
			parallaxTransformEnabled: o,
		} = e,
		s = f.useRef(null),
		c = _e(),
		l = f.useCallback(
			(e) =>
				s.current === null || r === 100 ? 0 : ol(e, s.current, r, i, a),
			[r, i, a],
		),
		{ scrollY: u } = ge(),
		d = se(u, l),
		p = he(a && s.current === null ? `hidden` : n),
		m = he(0),
		h = C(Vx);
	return (
		Ss(
			t,
			(e) => {
				if (e === null || !o) return;
				let t = Cs(h, `undefined`, e, null, (e) => {
					((s.current = e.boundingClientRect.top),
						Ae.update(() => {
							(d.set(l(u.get())), a && p.set(n ?? `initial`));
						}),
						t());
				});
				return t;
			},
			[a, o],
		),
		Nt(() => {
			o && d.set(0);
		}),
		{
			values: { y: c || !o ? m : d },
			style: o ? { ...tC, visibility: p } : nC,
		}
	);
}
function cl(e) {
	return typeof e == `object` && !!e;
}
function ll(e) {
	if (cl(e)) return e?.transition;
}
function ul(e, t, n, r, i, a) {
	let o = ll(e);
	return Promise.all(
		QS.map(
			(s) =>
				new Promise((c) => {
					if (n && s !== `opacity`) return c();
					let l = t.values[s];
					l.stop();
					let u = cl(e) ? (e?.[s] ?? eC[s]) : eC[s];
					if ((we(u) && (u = u.get()), !R(u))) return c();
					let d = de.get(r.current);
					d && d.setBaseTarget(s, u);
					let f;
					if (L(i) && !l?.hasAnimated && G.MotionHandoffAnimation) {
						let e = G.MotionHandoffAnimation(i, s, Ae);
						e && (f = e);
					}
					a
						? l.set(u)
						: Oe(l, u, {
								...o,
								velocity: 0,
								startTime: f,
								onComplete: () => c(),
							});
				}),
		),
	);
}
function dl(
	{
		initial: e,
		animate: t,
		exit: n,
		presenceInitial: r,
		presenceAnimate: i,
		presenceExit: a,
	},
	o,
	s,
	l,
	u,
) {
	let d = r ?? e,
		f = i ?? t,
		p = a ?? n,
		[m, h] = Xe(),
		g = w({
			lastPresence: !1,
			lastAnimate: f,
			hasMounted: !1,
			running: !1,
		}),
		_ = Qi(() => {
			let e = d ?? l;
			if (!z(e)) return { values: $S() };
			let t = {};
			for (let n in e) {
				let r = z(e) ? e[n] : void 0;
				R(r) && (t[n] = r);
			}
			return { values: $S(t) };
		});
	Ss(
		o,
		(e) => {
			let { hasMounted: t } = g.current;
			if (t && f) return;
			let n = de.get(e);
			if (n)
				for (let e in (Object.assign(g.current, { hasMounted: !0 }),
				_.values)) {
					if (!rl(e)) continue;
					let t = l?.[e];
					n.setBaseTarget(e, R(t) ? t : eC[e]);
				}
		},
		[f],
	);
	let v = _e();
	Ss(o, (e) => {
		if (!s) {
			h?.();
			return;
		}
		if (e === null) return;
		if (m !== g.current.lastPresence) {
			(Object.assign(g.current, { lastPresence: m }),
				m
					? d &&
						f &&
						(Object.assign(g.current, { running: !0 }),
						ul(f, _, v, o, u).then(() =>
							Object.assign(g.current, { running: !1 }),
						))
					: p
						? (Object.assign(g.current, { running: !0 }),
							ul(p, _, v, o, u)
								.then(() =>
									Object.assign(g.current, { running: !1 }),
								)
								.then(() => h()))
						: h());
			return;
		}
		let { lastAnimate: t, running: n } = g.current;
		Et(f, t) ||
			!f ||
			(Object.assign(g.current, { lastAnimate: f }),
			ul(f, _, v, o, u, !n).then(() =>
				Object.assign(g.current, { running: !1 }),
			));
	});
	let y = s && f;
	return c(() => ({ values: _.values, style: y ? tC : nC }), [y]);
}
function fl(e, t) {
	let n = 0,
		r = e;
	for (; r && r !== t && r instanceof HTMLElement; )
		((n += r.offsetTop), (r = r.offsetParent));
	return n;
}
function pl(e, t = 0, n) {
	let r = [],
		i = [];
	for (let a = e.length; a >= 0; a--) {
		let { ref: o, offset: s } = e[a] ?? {};
		if (!o || !o.current) continue;
		let c = fl(o.current, document.documentElement) - sC - (s ?? 0) - t,
			l = o.current?.clientHeight ?? 0,
			u = r[r.length - 1],
			d = Math.max(c + l, 0);
		(r.push(c),
			i.unshift(
				Math.max(c, 0),
				u === void 0 ? d : Math.min(d, Math.max(u - 1, 0)),
			),
			n?.(a));
	}
	return i;
}
function ml(e, t = 0) {
	return e < t ? `up` : `down`;
}
function hl(e, t, n = {}) {
	let { direction: r, target: i } = e ?? {},
		{ repeat: a = !0, enabled: o = !0 } = n,
		s = Mt();
	f.useEffect(() => {
		if (!r || !o) return;
		let e,
			n = 0,
			s,
			c;
		return oe((o, { y: l }) => {
			if ((!a && c === i) || l.current > l.scrollLength || l.current < 0)
				return;
			let u = ml(l.current, e);
			e = l.current;
			let d = u !== s;
			if (((s = u), d)) n = l.current;
			else {
				if (Math.abs(l.current - n) < cC) return;
				let e = u === r ? i : void 0;
				(e !== c && t(e), (c = e));
			}
		});
	}, [s, r, a, i, o, t]);
}
function gl(e, t, n) {
	let r = pl(e, t),
		i = [...uC],
		a = r[0];
	if (!R(a)) return dC;
	if ((a > 1 && (r.unshift(0, a - 1), i.unshift(`initial`, `initial`)), n)) {
		let e = r[r.length - 1];
		if (!R(e)) return dC;
		(r.push(e + 1), i.push(`exit`));
	}
	return { inputRange: r, outputRange: i };
}
function _l(e) {
	return {
		x: e?.x ?? eC.x,
		y: e?.y ?? eC.y,
		scale: e?.scale ?? eC.scale,
		opacity: e?.opacity ?? eC.opacity,
		transformPerspective:
			e?.transformPerspective ?? eC.transformPerspective,
		rotate: e?.rotate ?? eC.rotate,
		rotateX: e?.rotateX ?? eC.rotateX,
		rotateY: e?.rotateY ?? eC.rotateY,
		skewX: e?.skewX ?? eC.skewX,
		skewY: e?.skewY ?? eC.skewY,
		transition: e?.transition ?? void 0,
	};
}
function vl({
	opacity: e,
	targetOpacity: t,
	perspective: n,
	enter: r,
	exit: i,
	animate: a,
	...o
}) {
	return f.useMemo(
		() => ({
			initial:
				r ??
				_l({ ...o, opacity: e ?? t ?? 1, transformPerspective: n }),
			animate: a ?? _l({ opacity: t }),
			exit: i ?? _l(),
		}),
		[a, o, r, i, e, t, n],
	);
}
function yl(e, t) {
	let n = _e(),
		r = vl(e),
		i = e.styleAppearEffectEnabled,
		a = il(i ? r.initial : r.animate, i),
		o = f.useRef({
			isPlaying: !1,
			scheduledAppearState: void 0,
			lastAppearState: !e.styleAppearEffectEnabled,
		}),
		s = Mt(),
		l = f.useRef(),
		u = f.useCallback(async ({ transition: i, ...o }, s) => {
			let c = i ?? r.animate.transition ?? e.transition;
			await l.current;
			let u = de.get(t.current);
			l.current = Promise.all(
				QS.map((e) => {
					s && a.values[e].set(r.initial[e] ?? eC[e]);
					let t = o[e] ?? eC[e];
					return (
						u && typeof t != `object` && u.setBaseTarget(e, t),
						new Promise((r) => {
							if (n && e !== `opacity`)
								(R(t) && a.values[e].set(t), r());
							else {
								let n = {
									restDelta: e === `scale` ? 0.001 : void 0,
									...c,
									onComplete: () => r(),
								};
								typeof t == `number` && Oe(a.values[e], t, n);
							}
						})
					);
				}),
			);
		}, []),
		d = e.animateOnce && o.current.lastAppearState === !0;
	Ts(
		t,
		(e) => {
			let { isPlaying: t, lastAppearState: n } = o.current;
			if (t) {
				o.current.scheduledAppearState = e;
				return;
			}
			((o.current.scheduledAppearState = void 0),
				(o.current.lastAppearState = e),
				n !== e && u(e ? r.animate : r.exit, e));
		},
		{
			enabled:
				!e.targets &&
				e.styleAppearEffectEnabled &&
				!e.scrollDirection &&
				!d,
			animateOnce: !!e.animateOnce,
			threshold: { y: e.threshold },
		},
	);
	let p = e.targets && i && !e.scrollDirection;
	return (
		f.useEffect(() => {
			if (!p) return;
			let t = { initial: !0 },
				n = `initial`;
			return oe((i, { y: a }) => {
				let { targets: o } = e;
				if (!o || !o[0] || (o[0].ref && !o[0].ref.current)) return;
				let { inputRange: s, outputRange: c } = gl(
					o,
					(e.threshold ?? 0) * a.containerLength,
					!!e.exit,
				);
				if (s.length === 0 || s.length !== c.length) return;
				let l = Pe(a.current, s, c);
				if ((e.animateOnce && t[l]) || ((t[l] = !0), n === l)) return;
				n = l;
				let d = Jb(r)[l];
				d && u(d);
			});
		}, [s, p]),
		hl(e.scrollDirection, (e) => void u(e ?? r.animate), {
			enabled: i,
			repeat: !e.animateOnce,
		}),
		Nt(() => {
			if (i && !(!e.targets && !e.scrollDirection))
				for (let e of QS) a.values[e].set(r.initial?.[e] ?? eC[e]);
		}),
		c(() => ({ values: a.values, style: i ? tC : nC }), [i])
	);
}
function bl(e, t) {
	let n = f.useRef({});
	f.useEffect(() => {
		if (t !== void 0)
			for (let r of jg(e)) {
				let i = function () {
						let e = n.current[r];
						(e && e.stop(),
							(n.current[r] = Be({
								keyframes: [a.get(), s],
								velocity: a.getVelocity(),
								...t,
								restDelta: 0.001,
								onUpdate: o,
							})));
					},
					a = e[r],
					o,
					s;
				a.attach(
					(e, t) => ((s = e), (o = t), Ae.postRender(i), a.get()),
				);
			}
	}, [JSON.stringify(t)]);
}
function xl(e, t) {
	let n = mC();
	return {
		inputRange: pl(e, t, (t) => {
			let r = e[t - 1]?.target,
				i = e[t]?.target;
			for (let e of QS) n[e]?.unshift(r?.[e] ?? 0, i?.[e] ?? 0);
		}),
		effectKeyOutputRange: n,
	};
}
function Sl(e) {
	let t = mC();
	for (let { target: n } of e) for (let e of QS) t[e]?.push(n[e]);
	return t;
}
function Cl(
	{
		transformTrigger: e,
		styleTransformEffectEnabled: t,
		transformTargets: n,
		spring: i,
		transformViewportThreshold: a = 0,
	},
	o,
) {
	let s = _e(),
		c = il(pC(n, s), t),
		l = !t || !n,
		u = e === `onScrollTarget`,
		d = Mt();
	return (
		r(() => {
			if (!(l || !u))
				return oe((e, { y: t }) => {
					if (!n[0] || (n[0].ref && !n[0].ref.current)) return;
					let { inputRange: r, effectKeyOutputRange: i } = xl(
						n,
						a * t.containerLength,
					);
					if (r.length !== 0)
						for (let e of QS)
							(s && e !== `opacity`) ||
								(r.length === i[e].length &&
									i[e][0] !== void 0 &&
									c.values[e].set(Pe(t.current, r, i[e])));
				});
		}, [s, u, a, n, l]),
		Ss(
			o,
			(t) => {
				if (l || u || t === null) return;
				let r = Sl(n);
				return oe(
					(e, { y: t }) => {
						for (let e of QS)
							(s && e !== `opacity`) ||
								(hC.length === r[e].length &&
									r[e][0] !== void 0 &&
									c.values[e].set(Pe(t.progress, hC, r[e])));
					},
					e === `onInView`
						? {
								target: t ?? void 0,
								offset: [`start end`, `end end`],
							}
						: void 0,
				);
			},
			[d, s, e, u, n, l],
		),
		bl(c.values, i),
		Nt(() => {
			if (l) return;
			let e = pC(n, s);
			for (let t of QS) c.values[t].set(e?.[t] ?? eC[t]);
		}),
		f.useMemo(() => ({ values: c.values, style: t ? tC : nC }), [t])
	);
}
function wl(e, t, n) {
	return (!(e in n) && t in n) || n[e] === !0;
}
function Tl(e) {
	let t = {
		parallax: {},
		styleAppear: {},
		styleTransform: {},
		presence: { animate: e.animate, initial: e.initial, exit: e.exit },
		loop: {},
		forwardedProps: {},
		targetOpacityValue: e.__targetOpacity,
		withPerspective: e.__perspectiveFX,
		inSmartComponent: e.__smartComponentFX,
	};
	for (let n in e) {
		if (
			n === `__targetOpacity` ||
			n === `__perspectiveFX` ||
			n === `__smartComponentFX`
		)
			continue;
		let r = Wc(n);
		if (r) {
			for (let i of _C)
				if (gC[i]?.has(r)) {
					t[i][r] = Jb(e)[n];
					break;
				}
		} else t.forwardedProps[n] = Jb(e)[n];
	}
	return (
		(t.parallax.parallaxTransformEnabled = wl(
			`parallaxTransformEnabled`,
			`speed`,
			t.parallax,
		)),
		(t.styleAppear.styleAppearEffectEnabled = wl(
			`styleAppearEffectEnabled`,
			`animateOnce`,
			t.styleAppear,
		)),
		t
	);
}
function El(e) {
	return z(e) && bC in e;
}
function Dl(e, t) {
	if (!e || !z(e)) return t;
	for (let n in e) {
		let r = e[n];
		!we(r) || !rl(n) || (R(r.get()) && t[n].push(r));
	}
}
function Ol(e) {
	return L(e) || Array.isArray(e);
}
function kl({ componentIdentifier: e, children: t }) {
	return t(C(SC)[e] ?? {});
}
function Al() {
	return f.useContext(CC);
}
function jl(e) {
	return (
		e instanceof Error &&
		(e.message.includes(
			`A component suspended while responding to synchronous input.`,
		) ||
			e.message.includes(`Minified React error #426`))
	);
}
function Ml() {
	if (m === void 0 || EC)
		return _(`div`, {
			hidden: !0,
			dangerouslySetInnerHTML: {
				__html: `<!-- SuspenseThatPreservesDOM fallback rendered -->`,
			},
		});
	throw OC;
}
function Nl({ children: e }) {
	return C(AC) ? _(O, { children: e }) : _(E, { fallback: kC, children: e });
}
function Pl() {
	return _(`div`, {
		hidden: !0,
		dangerouslySetInnerHTML: {
			__html: `<!-- Code boundary fallback rendered -->`,
		},
	});
}
function Fl(e, t) {
	if (!xg || Math.random() > 0.01) return;
	let n = e instanceof Error && typeof e.stack == `string` ? e.stack : null,
		r = t?.componentStack;
	en(`published_site_load_recoverable_error`, {
		message: String(e),
		stack: n,
		componentStack: n ? void 0 : r,
	});
}
function Il(...e) {
	console.error(...e);
}
function Ll() {
	return FramerEnvironment.current() !== FramerEnvironment.canvas;
}
function Rl({ getErrorMessage: e, fallback: t, children: n }) {
	return Ll()
		? _(zl, {
				fallback: t,
				children: _(MC, {
					fallback: t,
					getErrorMessage: e,
					children: n,
				}),
			})
		: n;
}
function zl({ children: e, fallback: t = jC }) {
	return m === void 0
		? _(E, { fallback: t, children: e })
		: _(Nl, { children: e });
}
function Bl() {
	return f.useContext(PC);
}
function Vl() {
	let e = Bl();
	return f.useMemo(() => {
		if (!e) return;
		let t = e;
		for (; t.parent && t.parent.level > 0; ) t = t.parent;
		return t;
	}, [e]);
}
function Hl({ children: e, scopeId: t, nodeId: n }) {
	let r = Bl(),
		i = f.useMemo(
			() => ({
				level: (r?.level ?? 0) + 1,
				scopeId: t,
				nodeId: n,
				parent: r,
			}),
			[t, n, r],
		);
	return _(PC.Provider, { value: i, children: e });
}
function Ul(e, t) {
	return `${FC}${e}:${t}`;
}
function Wl(e, t) {
	return Kl(`component`, e, t);
}
function Gl(e, t) {
	return Kl(`override`, e, t);
}
function Kl(e, t, n) {
	return `A code ${e} crashed while rendering due to the error above. To find and fix it, open the project in the editor \u2192 open Quick Actions (press Cmd+K or Ctrl+K) \u2192 paste this: ${Ul(t, n)} \u2192 click \u201CShow Layer\u201D.`;
}
function ql(e, t, n, r, i, a) {
	let o = Yl(e, t, n, a);
	return (o && !i && r) || (o && i);
}
function Jl(e, t, n, r) {
	return Yl(e, t, n, r);
}
function Yl(e, t, n, r) {
	return !!(tt(n) || (n === 1 && r && e === t));
}
function Xl(e, t, n, r, i, a) {
	let o = Bl(),
		{ disableCustomCode: s } = Rg();
	return tt(t) || tt(n)
		? _(NC, { children: e })
		: s && r
			? _(`div`, {
					style: {
						padding: `12px 16px`,
						borderWidth: 1,
						borderRadius: 6,
						borderStyle: `solid`,
						borderColor: `rgba(149, 149, 149, 0.15)`,
						backgroundColor: `rgba(149, 149, 149, 0.1)`,
						fontSize: 12,
						color: `#a5a5a5`,
					},
					children: `Code component disabled`,
				})
			: (ql(t, o?.scopeId, o?.level, r ?? !1, i ?? !1, a ?? !1) &&
					(e = _(Rl, {
						getErrorMessage: Wl.bind(null, t, n),
						fallback: null,
						children: e,
					})),
				i && (e = _(Hl, { scopeId: t, nodeId: n, children: e })),
				e);
}
function Zl(e, t, n) {
	let r = {};
	for (let [, i] of e)
		for (let e of i) {
			let i = r[e] ?? t[e] ?? n[e];
			i && (r[e] = i);
		}
	return r;
}
function Ql(e) {
	return !(!e || e.placement || e.alignment);
}
function $l(e) {
	switch (e) {
		case `start`:
			return `0%`;
		case `center`:
			return `-50%`;
		case `end`:
			return `-100%`;
		default:
			V(e);
	}
}
function eu(e, t = `center`) {
	switch (e) {
		case `top`:
			return `${$l(t)}, -100%`;
		case `right`:
			return `0%, ${$l(t)}`;
		case `bottom`:
			return `${$l(t)}, 0%`;
		case `left`:
			return `-100%, ${$l(t)}`;
		default:
			return `-50%, -50%`;
	}
}
function tu(e, t) {
	let n = document.elementFromPoint(e, t);
	for (; n; ) {
		if (n === document.body) return;
		let e = n.getAttribute(`data-framer-cursor`);
		if (e) return e;
		if (n.hasAttribute(WC)) {
			let e = n.getAttribute(WC);
			((n = n.parentElement), e && (n = document.getElementById(e) ?? n));
		} else n = n.parentElement;
	}
}
function nu(e) {
	let { registerCursors: t } = C(RC),
		n = Qi(() => e),
		i = te();
	r(() => t(n, i), [t, i]);
}
function ru(e) {
	return !!(e && typeof e == `object` && KC in e);
}
function iu(e) {
	return `${e.scopeId}:${e.nodeId}:${e.furthestExternalComponent?.scopeId}:${e.furthestExternalComponent?.nodeId}`;
}
function au() {
	return FramerEnvironment.current() === FramerEnvironment.canvas;
}
function ou(e) {
	return e === void 0
		? !1
		: !!(e.startsWith(`#`) || e.startsWith(`/`) || e.startsWith(`.`));
}
function su(e, t) {
	try {
		return !!new URL(e).protocol;
	} catch {}
	return t;
}
function cu(e, t, n, r) {
	if (L(e)) {
		let i = ou(e);
		if (!t.routes || !t.getRoute || !n || !i) return;
		let [a] = e.split(`#`, 2);
		if (a === void 0) return;
		let [o] = a.split(`?`, 2);
		if (o === void 0) return;
		let { routeId: s } = Gr(t.routes, o, void 0, r);
		return t.getRoute(s);
	}
	let { webPageId: i } = e;
	return t.getRoute?.(i);
}
function lu(e) {
	return L(e) && e.startsWith(`data:${$C}`);
}
function uu(e) {
	if (lu(e))
		try {
			let t = new URL(e),
				n = t.pathname.substring($C.length),
				r = t.searchParams,
				i = r.has(YC) ? r.get(YC) : void 0,
				a,
				o = r.get(XC),
				s = r.get(ZC),
				c = r.get(QC);
			return (
				o &&
					s &&
					c &&
					(a = {
						collection: o,
						collectionItemId: s,
						pathVariables: Object.fromEntries(
							new URLSearchParams(c).entries(),
						),
					}),
				{
					target: n === `none` ? null : n,
					element: i === `none` ? void 0 : i,
					collectionItem: a,
				}
			);
		} catch {
			return;
		}
}
function du(e, t, n) {
	let r = t.getAttribute(`data-framer-page-link-target`),
		i,
		a;
	if (r) {
		i = t.getAttribute(`data-framer-page-link-element`) ?? void 0;
		let e = t.getAttribute(`data-framer-page-link-path-variables`);
		e && (a = Object.fromEntries(new URLSearchParams(e).entries()));
	} else {
		let e = t.getAttribute(`href`);
		if (!e) return !1;
		let n = uu(e);
		if (!n || !n.target) return !1;
		((r = n.target),
			(i = n.element ?? void 0),
			(a = n.collectionItem?.pathVariables));
	}
	let o = i ? t.dataset.framerSmoothScroll !== void 0 : void 0;
	return (e(r, i, Object.assign({}, n, a), o), !0);
}
function fu(e) {
	if (!lu(e)) return e;
	let t = uu(e);
	if (!t) return;
	let { target: n, element: r, collectionItem: i } = t;
	if (n) return { webPageId: n, hash: r ?? void 0, pathVariables: pu(i) };
}
function pu(e) {
	if (!e) return;
	let t = {};
	for (let n in e.pathVariables) {
		let r = e.pathVariables[n];
		r && (t[n] = r);
	}
	return t;
}
function mu(e, t, n, r, a, o) {
	let s = C(ew),
		u = Vl(),
		d = c(
			() => ({ scopeId: t, nodeId: n, furthestExternalComponent: u }),
			[t, n, u],
		),
		f = kt(),
		p = jt(),
		{ locales: m } = yr(),
		h = c(() => {
			let e = ru(r) ? r : fu(r);
			if (e) return cu(e, f, p, m);
		}, [p, r, f, m]),
		g = !!(!au() && s?.nodeId && d.nodeId),
		v = l(
			(e) => {
				if (a.href) {
					if ((e.preventDefault(), e.stopPropagation(), Ua(e))) {
						_u(a.href, ``, `_blank`);
						return;
					}
					h ? a.navigate?.() : _u(a.href, a.rel, a.target);
				}
			},
			[a, h],
		),
		y = l(
			(e) => {
				a.href &&
					(e.preventDefault(),
					e.stopPropagation(),
					_u(a.href, ``, `_blank`));
			},
			[a],
		),
		b = l(
			(e) => {
				a.href &&
					e.key === `Enter` &&
					(e.preventDefault(),
					e.stopPropagation(),
					h ? a.navigate?.() : _u(a.href, a.rel, a.target));
			},
			[a, h],
		);
	Ss(
		o,
		(e) => {
			e !== null && g && (e.dataset.hydrated = `true`);
		},
		[g],
	);
	let x = e;
	return (
		g &&
			(i.forEach(e, (e) => {
				gu(e) &&
					(B(
						hu(s),
						"outerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above",
					),
					B(
						hu(d),
						"innerLink must have nodeId defined at this point; this was verified with `shouldReplaceLink` above",
					),
					JC.collectNestedLink(s, d));
			}),
			(x = i.map(e, (e) => {
				if (!gu(e)) return e;
				let t = vu(e.type),
					{ children: n, ...r } = e.props,
					i = {
						...r,
						"data-nested-link": !0,
						role: `link`,
						tabIndex: 0,
						onClick: v,
						onAuxClick: y,
						onKeyDown: b,
						as: r.as && vu(r.as),
					},
					a = `ref` in e ? e.ref : void 0;
				return k(t, { ...i, ref: a }, n);
			}))),
		_(ew.Provider, { value: d, children: x })
	);
}
function hu(e) {
	return !tt(e?.nodeId);
}
function gu(e) {
	return y(e) && (vu(e.type) !== e.type || vu(e.props.as) !== e.props.as);
}
function _u(e, t, n) {
	let r = document.createElement(`a`);
	((r.href = e),
		t && (r.rel = t),
		n && (r.target = n),
		document.body.appendChild(r),
		r.click(),
		r.remove());
}
function vu(e) {
	return e === `a` ? `span` : Ye(e) && Ne(e) === `a` ? P.span : e;
}
function yu(e, t) {
	return e instanceof HTMLAnchorElement
		? e
		: e instanceof Element
			? e === t
				? null
				: yu(e.parentElement, t)
			: null;
}
function bu({ children: e }) {
	return _(Nl, { children: e });
}
function xu(e) {
	return b(function (t, n) {
		return _(bu, { children: _(e, { ...t, ref: n }) });
	});
}
function Su(e, t, n, r, i, a) {
	let { webPageId: o, hash: s, pathVariables: c, hashVariables: l } = n;
	return wu(e, t, o, s, a, c, l, i, r);
}
function Cu(e, t, n, r) {
	if (!(!e.routes || !e.getRoute) && ou(t))
		try {
			let [i, a] = t.split(`#`, 2);
			B(i !== void 0, `A href must have a defined pathname.`);
			let [o] = i.split(`?`, 2);
			B(o !== void 0, `A href must have a defined pathname.`);
			let {
					routeId: s,
					pathVariables: c,
					localeId: l,
				} = Gr(e.routes, o, void 0, r),
				u = e.getRoute(s);
			if (u)
				return {
					routeId: s,
					route: u,
					href: t,
					elementId: a,
					pathVariables: Object.assign({}, n, c),
					locale: l ? r?.find(({ id: e }) => e === l) : void 0,
				};
		} catch {}
}
function wu(e, t, n, r, i, a, o, s, c) {
	let l = { ...i, ...a, ...s?.path },
		u = { ...i, ...o, ...s?.hash },
		d = e.getRoute?.(n),
		f = ar(d, {
			currentRoutePath: t?.path,
			currentRoutePathLocalized: t?.pathLocalized,
			currentPathVariables: t?.pathVariables,
			hash: r,
			pathVariables: l,
			hashVariables: u,
			preserveQueryParams: e.preserveQueryParams,
			siteCanonicalURL: e.siteCanonicalURL,
			localeId: c?.id,
		});
	return {
		routeId: n,
		route: d,
		href: f,
		elementId: f.split(`#`, 2)[1],
		pathVariables: l,
		locale: c ?? void 0,
	};
}
function Tu() {
	let e = C(ow),
		t = jt()?.pathVariables;
	return e || t;
}
function Eu(e, { webPageId: t, hash: n, pathVariables: r }, i) {
	if (t !== e.id || n) return !1;
	if (e.path && e.pathVariables) {
		let t = Object.assign({}, i, r);
		for (let [, n] of e.path.matchAll(aw))
			if (!n || e.pathVariables[n] !== t[n]) return !1;
	}
	return !0;
}
function Du() {
	let e = n.connection || n.mozConnection || n.webkitConnection || {},
		t = n.deviceMemory && n.deviceMemory > lw,
		r,
		i,
		a;
	function o() {
		((r = e.effectiveType || ``),
			(i = e.saveData || r.includes(`2g`)),
			(a = r === `3g` || t ? uw : dw));
	}
	(e.addEventListener?.(`change`, o), o());
	let s = new IntersectionObserver(u, { threshold: cw }),
		c = 0;
	async function l(e, t) {
		if (i) return;
		let { id: n, preload: r } = e,
			a = mw.get(n);
		if (!a?.size || pw.has(n)) return;
		(++c, pw.add(n));
		let o = r()?.catch(() => {});
		(s.unobserve(t), fw.delete(t));
		for (let e of a) (s.unobserve(e), fw.delete(e));
		(a.clear(), mw.delete(n), await o, --c);
	}
	function u(e) {
		for (let t of e) {
			let e = t.target,
				n = fw.get(e);
			if (!n || pw.has(n.id)) {
				(s.unobserve(e), fw.delete(e));
				continue;
			}
			let r = n.id,
				i = mw.get(r),
				o = mw.get(r)?.size ?? 0;
			if (t.isIntersecting) {
				if (c >= a) continue;
				(i ? i.add(e) : mw.set(r, new Set([e])),
					setTimeout(l, sw, n, e));
			} else (i && i.delete(e), o <= 1 && mw.delete(r));
		}
	}
	return (e, t, n) => {
		if (!pw.has(n))
			return (
				fw.set(e, { id: n, preload: t }),
				s.observe(e),
				() => {
					(fw.delete(e), s.unobserve(e));
				}
			);
	};
}
function Ou(e, t) {
	let n = ou(e),
		r = {
			href: e === `` || su(e, n) ? e : `https://${e}`,
			target: ku(t?.openInNewTab, n),
			rel: n ? void 0 : Au(`noopener`, t?.rel),
		};
	return (
		t?.preserveParams &&
			((r.href = Dn(r.href ?? e)),
			(r[`data-framer-preserve-params`] = !0)),
		t?.trackLinkClick &&
			(r.onClick = () => {
				t.trackLinkClick(e);
			}),
		r
	);
}
function ku(e, t) {
	return e === void 0 ? (t ? void 0 : `_blank`) : e ? `_blank` : void 0;
}
function Au(e, t) {
	if (e && !t) return e;
	if (!e && t) return t;
	if (e && t) return `${e} ${t}`;
}
function ju(e, t) {
	console.warn(
		ut(
			`Failed to resolve slug: ${e instanceof Error ? e.message : (t ?? `Unknown error`)}`,
		),
	);
}
function Mu(e, t, n) {
	try {
		let r = t?.get(e.collectionId);
		if (!r)
			return ju(
				void 0,
				`Couldn't find collection utils for collection id: "${e.collectionId}"`,
			);
		let i = r.getSlugByRecordId(e.collectionItemId, n ?? void 0);
		return st(i) ? i.catch(ju) : i;
	} catch (e) {
		ju(e);
	}
}
async function Nu(e, t, n, r) {
	async function i(e) {
		if (!e) return {};
		let t = {};
		for (let i in e) {
			let a = e[i];
			B(a, `unresolvedSlug should be defined`);
			let o = Mu(a, r, n),
				s = st(o) ? await o : o;
			s && (t[i] = s);
		}
		return t;
	}
	let [a, o] = await Promise.allSettled([i(e), i(t)]);
	return {
		path: a.status === `fulfilled` ? a.value : void 0,
		hash: o.status === `fulfilled` ? o.value : void 0,
	};
}
function Pu(e, t, n, r, i = []) {
	function a(e) {
		if (!e) return;
		let t = {};
		for (let a in e) {
			let o = e[a];
			if (!o) continue;
			let s = Mu(o, r, n);
			st(s) ? i.push(s) : s && (t[a] = s);
		}
		return t;
	}
	let o = { path: a(e), hash: a(t) };
	return i.length > 0 ? Promise.allSettled(i) : o;
}
function Fu() {
	let e = fn();
	return l((t, n, r, i = []) => Pu(t, n, r, e, i), [e]);
}
function Iu({
	nodeId: e,
	clickTrackingId: t,
	router: n,
	href: r,
	activeLocale: i,
}) {
	let a = fn();
	return l(
		async (o) => {
			if (!n.pageviewEventData?.current) return;
			let s =
					n.pageviewEventData.current instanceof Promise
						? await n.pageviewEventData.current
						: n.pageviewEventData.current,
				c = ru(r) ? r : fu(r);
			if (!ru(c))
				return en(
					`published_site_click`,
					{
						...s,
						href: o ? Lu(o) : null,
						nodeId: e ?? null,
						trackingId: t || null,
						targetRoutePath: null,
						targetWebPageId: null,
						targetCollectionItemId: null,
					},
					`eager`,
				);
			let l = c.webPageId,
				u = n?.getRoute?.(l),
				d = u?.path ?? null,
				f = null;
			if (u?.collectionId && c.pathVariables) {
				let e = a?.get(u.collectionId);
				if (!e) return;
				let [t] = Object.values(c.pathVariables);
				if (L(t)) {
					let n = e.getRecordIdBySlug(t, i || void 0);
					f = (st(n) ? await n : n) ?? null;
				}
			}
			return en(
				`published_site_click`,
				{
					...s,
					href: o ? Lu(o) : null,
					nodeId: e ?? null,
					trackingId: t ?? null,
					targetRoutePath: d,
					targetWebPageId: l,
					targetCollectionItemId: f,
				},
				`eager`,
			);
		},
		[e, t, n, r, i, a],
	);
}
function Lu(e) {
	try {
		let t = new URL(e, G.document.baseURI);
		return t.origin === G.location.origin
			? t.pathname + t.search + t.hash
			: t.href;
	} catch {
		return e;
	}
}
function Ru(e, t, n, r, i, a, o) {
	(n(), e.navigate?.(t, r, i, a, o));
}
function zu(e, t, n) {
	return async (r) => {
		let i = Ua(r),
			a = yu(r.target),
			o = !a || a.getAttribute(`target`) === `_blank`,
			s = !i && !o,
			c = () => void t(e);
		if (!s) {
			(await _n({
				priority: `user-blocking`,
				ensureContinueBeforeUnload: !0,
				continueAfter: `paint`,
			}),
				c());
			return;
		}
		(r.preventDefault(), n(c));
	};
}
function Bu(e, t, n, r, i, a, o, s) {
	if (!n) return Ou(e, r);
	let c = Cu(t, e, s, o);
	if (!c) return Ou(e, r);
	let { routeId: l, route: u, elementId: d, pathVariables: f, locale: p } = c;
	if (!u) return Ou(e, r);
	let m = ar(u, {
			currentRoutePath: n.path,
			currentRoutePathLocalized: n.pathLocalized,
			currentPathVariables: n.pathVariables,
			hash: d,
			pathVariables: f,
			preserveQueryParams: t.preserveQueryParams && !Sg,
			siteCanonicalURL: t.siteCanonicalURL,
			localeId: a,
		}),
		h = ku(r.openInNewTab, !0),
		g = h === `_blank`,
		_ = { pathVariables: f, locale: p },
		v = (e) => Ru(t, l, () => i(l, _, !1, !g), d, f, r.smoothScroll, e);
	return {
		href: m,
		target: h,
		onClick: zu(m, r.trackLinkClick, v),
		navigate: v,
		"data-framer-page-link-current":
			(n && Eu(n, { webPageId: l, hash: d, pathVariables: f }, s)) ||
			void 0,
		preload: () => i(l, _, !0, !g),
		_routeId: l,
		_pathVariables: f,
		_locale: p,
	};
}
function Vu(e, t, n) {
	let r = Hu(e.style, t.style),
		i = { ...e, ...t, ...(r && { style: r }), ref: n },
		{ onTap: a, onClick: o } = t;
	if (!a && !o) return i;
	let { onClick: s, onTap: c } = e;
	return {
		...i,
		onClick:
			o || s
				? (e) => {
						(Ze(s) && s?.(e), o?.(e));
					}
				: void 0,
		onTap:
			a || c
				? (e, t) => {
						(Ze(c) && c?.(e, t), a?.(e, t));
					}
				: void 0,
	};
}
function Hu(e, t) {
	let n = z(e) ? e : void 0,
		r = n && !et(n),
		i = t && !et(t);
	if (!(!r && !i)) return { ...n, ...t };
}
function Uu(e, t, n) {
	if (!(t && ja())) return e;
	let { onClick: r, ...i } = e;
	return r ? (n ? { ...i, onTap: r, onClick: Wu } : { ...i, onTap: r }) : e;
}
function Wu(e) {
	let t = yu(e.target);
	!t || t.getAttribute(`target`) === `_blank` || e.preventDefault();
}
function Gu(e, t, n, r, i, a) {
	let o = ru(e) ? e : fu(e);
	if (!ru(o)) return L(e) ? Ou(e).href : void 0;
	if (!t.getRoute || !t.currentRouteId) return;
	let s = t.getRoute(t.currentRouteId),
		{
			webPageId: c,
			hash: l,
			pathVariables: u,
			hashVariables: d,
			unresolvedHashSlugs: f,
			unresolvedPathSlugs: p,
		} = o,
		m = t.getRoute(c),
		h = p || f ? a?.(p, f) : void 0;
	if (st(h)) return;
	let g = Object.assign({}, t.currentPathVariables, n, u, h?.path),
		_ = Object.assign({}, t.currentPathVariables, n, d, h?.hash),
		v = ar(m, {
			currentRoutePath: s?.path,
			currentRoutePathLocalized: s?.pathLocalized,
			currentPathVariables: t.currentPathVariables,
			hash: l,
			pathVariables: g,
			hashVariables: _,
			relative: !1,
			preserveQueryParams: t.preserveQueryParams,
			onlyHash: r,
			siteCanonicalURL: t.siteCanonicalURL,
			localeId: i?.id,
		});
	return r ? v : (i?.slug ? `/${i.slug}` : ``) + v;
}
function Ku() {
	return function () {
		async function e(e) {
			let t = new TextEncoder().encode(e),
				n = await crypto.subtle.digest(`SHA-256`, t);
			return Array.from(new Uint8Array(n))
				.map((e) => e.toString(16).padStart(2, `0`))
				.join(``);
		}
		function t(e) {
			let t = ``;
			for (let n = 0; n < e; n++)
				t +=
					`ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789`.charAt(
						Math.floor(Math.random() * 62),
					);
			return t;
		}
		addEventListener(`message`, async (n) => {
			let { salt: r, difficulty: i, tokenLength: a, maxTime: o } = n.data,
				s = `0`.repeat(i),
				c = performance.now(),
				l = !0;
			for (; l; ) {
				if (performance.now() - c > o) {
					((l = !1), postMessage({ success: !1 }));
					return;
				}
				let n = t(a),
					i = `${Date.now()}:${n}`,
					u = await e(r + i);
				if (u.startsWith(s)) {
					postMessage({ success: !0, secret: i, hash: u });
					return;
				}
			}
		});
	}.toString();
}
async function qu() {
	return new Promise((e, t) => {
		let n = URL.createObjectURL(
				new Blob([`(`, Ku(), `)()`], {
					type: `application/javascript`,
				}),
			),
			r = new Worker(n);
		((r.onmessage = (t) => {
			(r.terminate(),
				URL.revokeObjectURL(n),
				t.data.success
					? e({ secret: t.data.secret, hash: t.data.hash })
					: e(void 0));
		}),
			(r.onerror = (e) => {
				(r.terminate(), URL.revokeObjectURL(n), t(e));
			}),
			r.postMessage({
				salt: _w,
				difficulty: vw,
				tokenLength: yw,
				maxTime: bw,
			}));
	});
}
function Ju(e) {
	return Array.from(e.keys()).map(encodeURIComponent).join(`,`);
}
function Yu(e, t) {
	try {
		let n = t.cookie.match(`(^|;) ?framerFormsUTMTags=([^;]*)(;|$)`);
		if (n !== null && n[2]) {
			let t = JSON.parse(decodeURIComponent(n[2]));
			if (!t || typeof t != `object`) return;
			[
				`utm_source`,
				`utm_medium`,
				`utm_campaign`,
				`utm_term`,
				`utm_content`,
				`gclid`,
			].forEach((n) => {
				typeof t[n] == `string` && e.append(n, t[n]);
			});
		}
	} catch {}
}
function Xu(e) {
	let t = f.useContext(Iw),
		n = f.useMemo(
			() =>
				e
					? Cw.map((e) => ({
							inputRef: f.createRef(),
							originalName: e,
							methodsUsed: {
								setAttribute: !1,
								valueProperty: !1,
							},
						}))
					: [],
			[e],
		);
	return {
		states: n,
		convertHoneypotFieldsForSubmission: f.useCallback(() => {
			n.forEach((e) => {
				let t = e.inputRef.current;
				t && (t.name = `${Sw}_${e.originalName}`);
			});
		}, [n]),
		replaceHoneypotWithMetadata: f.useCallback(
			(r) => {
				if (!e) return;
				let i = n.length,
					a = 0,
					o = [];
				(n.forEach((e) => {
					let t = e.inputRef.current;
					if (t) {
						let n = t.name,
							i = t.value;
						if (i) {
							a++;
							let t = {
								[Tw.name]: e.originalName,
								[Tw.value]: i,
								[Tw.setAttribute]: e.methodsUsed.setAttribute,
								[Tw.valueProperty]: e.methodsUsed.valueProperty,
								[Tw.isInputEventTrusted]:
									e.methodsUsed.isInputEventTrusted,
								[Tw.inputChangeTimeSinceModuleLoad]:
									e.methodsUsed
										.inputChangeTimeSinceModuleLoad,
								[Tw.wasFilledBeforeHydration]:
									e.methodsUsed.wasFilledBeforeHydration,
							};
							o.push(JSON.stringify(t));
						}
						(r.delete(n), (t.name = e.originalName));
					}
				}),
					r.append(`${Sw}_${Ew.fieldData}`, `[${o.join(`,`)}]`),
					r.append(`${Sw}_${Ew.fieldCount}`, i.toString()),
					r.append(`${Sw}_${Ew.fieldFilledCount}`, a.toString()),
					r.append(`${Sw}_${Ew.hpVersion}`, xw),
					r.append(`${Sw}_${Ew.siteId}`, t || ``),
					r.append(
						`${Sw}_${Ew.timeToSubmissionSinceModuleLoad}`,
						Dw(),
					));
			},
			[e, n, t],
		),
	};
}
function Zu({ states: e }) {
	return _(O, {
		children: e.map((e) =>
			_(Ow, { inputStateRef: e }, `hp_${e.originalName}`),
		),
	});
}
function Qu({ router: e, nodeId: t, submitTrackingId: n }) {
	e?.pageviewEventData?.current &&
		(e.pageviewEventData.current instanceof Promise
			? e.pageviewEventData.current.then((e) => {
					$u(e, t, n);
				})
			: $u(e.pageviewEventData.current, t, n));
}
function $u(e, t, n) {
	return en(
		`published_site_form_submit`,
		{ ...e, nodeId: t ?? null, trackingId: n || null },
		`eager`,
	);
}
function ed(e) {
	return `${kw}?render=${encodeURIComponent(e)}&badge=bottomleft`;
}
function td(e) {
	let t = Aw.get(e);
	if (t) return t;
	let n = ed(e);
	if (document.querySelector(`script[src="${n}"]`)) {
		let t = Promise.resolve();
		return (Aw.set(e, t), t);
	}
	let r = new Promise((t, r) => {
		let i = document.createElement(`script`);
		((i.src = n),
			(i.onload = () => t()),
			(i.onerror = () => {
				(Aw.delete(e),
					i.remove(),
					r(Error(`Failed to load captcha script`)));
			}),
			document.head.appendChild(i));
	});
	return (Aw.set(e, r), r);
}
function nd(e, t) {
	return new Promise((t, n) => {
		let { grecaptcha: r } = m;
		if (!r) {
			n(Error(`Captcha script not available`));
			return;
		}
		r.ready(() => {
			r.execute(e).then(t, n);
		});
	});
}
function rd({ provider: e, siteKey: t }) {
	return (
		f.useEffect(() => {
			e === `recaptcha_v3` &&
				t &&
				wg(() => {
					td(t).catch(() => {});
				});
		}, [e, t]),
		{
			executeChallenge: f.useCallback(
				async (n) => {
					if (!(e !== `recaptcha_v3` || !t))
						return (await td(t), nd(t, n));
				},
				[e, t],
			),
		}
	);
}
function id({ state: e }, { type: t }) {
	switch (t) {
		case `complete`:
			return e === `error` ? Fw : Pw;
		case `incomplete`:
			return e === `error` ? Fw : Nw;
		case `submit`:
			return jw;
		case `success`:
			return Mw;
		case `error`:
			return Fw;
		default:
			V(t);
	}
}
function ad({ state: e }) {
	return e === `incomplete` || e === `complete`;
}
function od(e) {
	e.preventDefault();
}
function sd(e, t) {
	let n = su(e, !1) ? e : `https://${e}`,
		r = document.createElement(`a`);
	((r.href = n),
		(r.target = `_self`),
		(r.style.display = `none`),
		`current` in t &&
			t.current &&
			(t.current.appendChild(r), r.click(), r.remove()));
}
function cd(e) {
	if (e.children.length === 0) return !1;
	for (let t of e.children)
		if (
			t instanceof HTMLInputElement ||
			t instanceof HTMLTextAreaElement ||
			t instanceof HTMLSelectElement
		) {
			if (t.required && t.value === ``) return !0;
		} else if (cd(t)) return !0;
	return !1;
}
async function ld(e, t, n, r) {
	let i = await qu();
	if (!i) throw Error(`Failed to calculate proof of work`);
	let a = await r(`submit`),
		o = {
			"Framer-Site-Id": n,
			"Framer-POW": i.secret,
			"Framer-Form-Fields": Ju(t),
		};
	a && (o[`Framer-Captcha-Response`] = a);
	let s = await fetch(e, { body: t, method: `POST`, headers: o });
	if (s.ok) return s;
	{
		let e = await s.json(),
			t = `Failed to submit form`;
		throw ud(e) ? Error(`${t} - ${e.error.message}`) : Error(t);
	}
}
function ud(e) {
	return (
		typeof e == `object` &&
		!!e &&
		`error` in e &&
		z(e.error) &&
		`message` in e.error &&
		typeof e.error.message == `string`
	);
}
function dd({ EditorBar: e, fast: t = !1 }) {
	let n = Rg(),
		r = C(Iw),
		i = ee(Tg, t ? Bw : Vw, Dg),
		a = c(() => {
			let e = {},
				t;
			for (t in n)
				n.hasOwnProperty(t) &&
					(t.startsWith(`editorBar`) || t.startsWith(`onPage`)) &&
					(e[t] = n[t]);
			return e;
		}, [n]);
	return !e || !r || !i
		? null
		: _(zw, {
				children: _(E, {
					children: _(e, { framerSiteId: r, features: a }),
				}),
			});
}
function fd({ currentRoutePath: e, routerAPI: t, children: n }) {
	let r = w(),
		i = w(),
		a = w(t),
		s = w(null);
	((a.current = t),
		d(() => {
			e && ((r.current ??= new Set()), r.current.add(e), i.current?.(e));
		}, [e]));
	let [c] = o(() => ({
		getInitialState: () => ({
			visitedPages: r.current ?? new Set(),
			getCurrentRoutePath: () =>
				a.current
					? md(
							a.current,
							a.current.currentRouteId,
							a.current.currentPathVariables,
						)
					: ``,
			resolveRoute: (e) =>
				a.current ? md(a.current, e.webPageId, e.pathVariables) : ``,
			setRouteChangeHandler: (e) => {
				i.current = e;
			},
			sendTrackingEvent: async (e) => {
				a.current && pd(a.current.pageviewEventData.current, e);
			},
		}),
		triggerStateRef: s,
	}));
	return _(Hw.Provider, { value: c, children: n });
}
async function pd(e, t) {
	if (!tn(t.trackingId)) return;
	let n = e instanceof Promise ? await e : e;
	n &&
		en(
			`published_site_trigger_invoke`,
			{ ...n, ...t, trackingId: t.trackingId || null },
			`lazy`,
		);
}
function md(e, t, n) {
	let r = e.getRoute(t);
	return !r || !r.path ? `` : n ? En(r.path, n) : r.path;
}
function hd({ children: e, loadSnippetsModule: t }) {
	return _($w.Provider, { value: t, children: e });
}
function gd() {
	return f.useContext($w);
}
function _d(e) {
	return {
		start: `<!-- Snippet: ${e} -->`,
		end: `<!-- SnippetEnd: ${e} -->`,
	};
}
async function vd(e, t, n = `beforeend`) {
	let r, i;
	switch (n) {
		case `beforebegin`:
			(B(
				t.parentNode,
				`Can't use 'beforebegin' with a referenceNode at the top level`,
			),
				(r = t.parentNode),
				(i = t));
			break;
		case `afterend`:
			(B(
				t.parentNode,
				`Can't use 'afterend' with a referenceNode at the top level`,
			),
				(r = t.parentNode),
				(i = t.nextSibling));
			break;
		case `afterbegin`:
			((r = t), (i = t.firstChild));
			break;
		case `beforeend`:
			((r = t), (i = null));
			break;
		default:
			V(n);
	}
	let a = document.createRange();
	(a.selectNodeContents(r), await yd(a.createContextualFragment(e), r, i));
}
async function yd(e, t, n) {
	for (let r = e.firstChild; r; r = r.nextSibling) {
		if (r instanceof HTMLScriptElement) {
			let e = bd(r, t, n);
			e !== void 0 && (await e);
			continue;
		}
		let e = r.cloneNode(!1);
		(t.insertBefore(e, n), r.firstChild && (await yd(r, e, null)));
	}
}
function bd(e, t, n) {
	let r = e.cloneNode(!0);
	if (
		!e.hasAttribute(`src`) ||
		e.hasAttribute(`async`) ||
		e.hasAttribute(`defer`) ||
		e.getAttribute(`type`)?.toLowerCase() === `module`
	)
		t.insertBefore(r, n);
	else return xd(r, t, n);
}
function xd(e, t, n) {
	return new Promise((r) => {
		((e.onload = e.onerror = r), t.insertBefore(e, n));
	});
}
function Sd(e) {
	let t, n;
	switch (e) {
		case `bodyStart`:
			((t = Yw), (n = Xw));
			break;
		case `bodyEnd`:
			((t = Zw), (n = Qw));
			break;
		case `headStart`:
			((t = Gw), (n = Kw));
			break;
		case `headEnd`:
			((t = qw), (n = Jw));
			break;
	}
	let r =
			e === `bodyStart` || e === `bodyEnd`
				? document.body
				: document.head,
		i = null,
		a = null;
	for (let e of r.childNodes) {
		if (e.nodeType !== Node.COMMENT_NODE) continue;
		let r = `<!--${e.nodeValue}-->`;
		r === t ? (i = e) : r === n && (a = e);
	}
	return { start: i, end: a };
}
function Cd(e, t, n) {
	if (!t || !n) return { start: null, end: null };
	let r = null,
		i = null,
		{ start: a, end: o } = _d(e),
		s = t.nextSibling;
	for (; s && s !== n; ) {
		if (s.nodeType !== Node.COMMENT_NODE) {
			s = s.nextSibling;
			continue;
		}
		let e = `<!--${s.nodeValue}-->`;
		if (e === a) r = s;
		else if (e === o) {
			i = s;
			break;
		}
		s = s.nextSibling;
	}
	return { start: r, end: i };
}
async function wd(e, t, n) {
	if (t.length === 0) return;
	let { start: r, end: i } = Sd(e),
		a =
			e === `bodyStart` || e === `bodyEnd`
				? document.body
				: document.head;
	for (let e of t) {
		let { start: t, end: o } = Cd(e.id, r, i),
			s = t && o;
		if (s && e.loadMode === `once`) continue;
		if ((Td(t, o), s)) {
			await vd(e.code, o, `beforebegin`);
			continue;
		}
		let { start: c, end: l } = _d(e.id),
			u = `${c}
${e.code}
${l}`,
			d = Dd(e.id, n, r, i);
		d
			? await vd(u, d, `afterend`)
			: await vd(u, r ?? a, r ? `afterend` : `beforeend`);
	}
}
function Td(e, t) {
	if (!e || !t) return;
	let n = e.nextSibling;
	for (; n && n !== t; ) {
		let e = n.nextSibling;
		(Ed(n) && n.remove(), (n = e));
	}
}
function Ed(e) {
	if (e.nodeType !== Node.ELEMENT_NODE) return !0;
	if (e.nodeName === `SCRIPT`) {
		let t = e.type;
		if (!t || t === `text/javascript` || t === `module`) return !1;
	}
	return !0;
}
function Dd(e, t, n, r) {
	let i = t.indexOf(e) - 1;
	if (i < 0) return null;
	for (let e = i; e >= 0; e--) {
		let i = t[e];
		if (!i) continue;
		let a = Cd(i, n, r).end;
		if (a) return a;
	}
	return null;
}
function Od() {
	let e = gd();
	return l(
		async (t, n, r, i) => {
			if (!e) return;
			let a = document.getElementById(Uw),
				o = a && a.dataset[Ww] !== void 0;
			if (i && o) return;
			let { getSnippets: s, snippetsSorting: c } =
					await e.readMaybeAsync();
			if (typeof s !== 'function') return;
			let l = await s(t, n, r);
			for (let e in l) {
				let t = e,
					n = l[t],
					r = c[t];
				await wd(t, n, r);
			}
		},
		[e],
	);
}
function kd(e, t) {
	if (e.routeId !== t.routeId) return !1;
	if (e.pathVariables === t.pathVariables) return !0;
	let n = e.pathVariables || {},
		r = t.pathVariables || {};
	return n.length === r.length && Object.keys(n).every((e) => n[e] === r[e]);
}
function Ad() {
	let e = Intl.DateTimeFormat().resolvedOptions();
	((eT = e.timeZone), (tT = e.locale));
}
function jd() {
	let [e, t] = f.useState(0);
	return [e, f.useCallback(() => t((e) => e + 1), [])];
}
function Md(e, t, n) {
	let r = e && document.getElementById(e);
	if (r) {
		Rd(r, t);
		return;
	}
	n || m.scrollTo(0, 0);
}
function Nd(e) {
	let t = w([]);
	return (
		r(() => {
			t.current?.length &&
				(t.current.forEach((e) => e()), (t.current = []));
		}, [e]),
		l((e) => {
			t.current.push(e);
		}, [])
	);
}
function Pd(e) {
	if (!e) return bg;
	let t = !1;
	return () => {
		t || ((t = !0), e?.());
	};
}
function Fd() {
	let e = ur(),
		t = w(void 0);
	return l(
		async (n, r, i, a = !0) => {
			let o = i !== void 0;
			t.current?.abort();
			let s = a ? new AbortController() : void 0;
			t.current = s;
			let c = s?.signal,
				l = Ft(c);
			if ((r.promise.finally(l), !o))
				return ((t.current = void 0), n(c), r.promise);
			n(c);
			let u;
			if (
				(e(
					new Promise((e, t) => {
						((u = e), c?.addEventListener(`abort`, t));
					}).catch(bg),
					i,
					s,
				),
				await r.promise,
				c?.aborted)
			)
				return;
			let d = m.navigation?.transition;
			u();
			try {
				await d?.finished;
			} catch (e) {
				console.error(`Navigation transition failed`, e);
			}
			c?.aborted || P_();
		},
		[e],
	);
}
function Id({
	defaultPageStyle: e,
	disableHistory: t,
	initialPathVariables: n,
	initialRoute: i,
	notFoundPage: o,
	collectionUtils: s,
	routes: u,
	initialLocaleId: f,
	initialCollectionItemId: p,
	locales: g = Fg,
	preserveQueryParams: v = !1,
	LayoutTemplate: y,
	EditorBar: b,
	siteCanonicalURL: x,
	adaptLayoutToTextDirection: S,
}) {
	(Lr(),
		nr({
			disabled: t,
			routeId: i,
			initialPathVariables: n,
			initialLocaleId: f,
		}));
	let C = Jn(),
		[E, D] = jd(),
		O = Nd(E),
		k = Fd(),
		A = Zn(`framer-route-change`),
		{ synchronousNavigationOnDesktop: j } = Rg(),
		ee = c(() => (!j || !Ha() ? h : (e) => e()), [j]),
		te = Od(),
		ne = w(!0),
		M = w(),
		re = w(i),
		ie = w(n),
		ae = w(f),
		oe = ae.current,
		se = c(
			() => g.find(({ id: e }) => (oe ? e === oe : e === zg)) ?? null,
			[oe, g],
		),
		ce = se?.textDirection ?? `ltr`,
		le = S ? ce : `ltr`;
	r(() => {
		S && document.documentElement.setAttribute(`dir`, ce);
	}, [ce, S]);
	let ue = sr(),
		de = c(
			() => ({
				activeLocale: se,
				locales: g,
				setLocale: async (e) => {
					let t = A({ localized: !0 });
					await _n({
						priority: `user-blocking`,
						continueAfter: `paint`,
					});
					let n;
					L(e) ? (n = e) : z(e) && (n = e.id);
					let r = g.find(({ id: e }) => e === zg),
						i = g.find(({ id: e }) => e === n);
					if (!i) return;
					let a = re.current,
						o = u[a];
					if (o)
						try {
							let e = await ue({
								currentLocale: se,
								nextLocale: i,
								route: o,
								routeId: a,
								defaultLocale: r,
								pathVariables: ie.current,
								preserveQueryParams: v,
							});
							if (!e) return;
							let n = $n(m.history.state)
									? m.history.state.paginationInfo
									: void 0,
								s = e.path;
							((ne.current = !1),
								(ie.current = e.pathVariables),
								(ae.current = i.id),
								k(
									() => {
										C(a, a, () => ee(D));
									},
									t,
									async (t = !1) => {
										if (s)
											return tr(
												{
													routeId: a,
													pathVariables:
														e.pathVariables,
													localeId: i.id,
													paginationInfo: n,
												},
												s,
												t,
											);
									},
									!1,
								));
						} catch {}
				},
			}),
			[se, D, g, v, u, k, C, A, ee, ue],
		),
		fe = l(
			(e, t, n, r, i, a, o, s = !1, c) => {
				ne.current = !1;
				let l = re.current;
				if (
					((re.current = e),
					(ie.current = i),
					(ae.current = t),
					(M.current = r),
					O(() => {
						Md(n, s, a);
					}),
					a)
				) {
					ee(D);
					return;
				}
				k(
					(t) => {
						C(l, e, () => ee(D), t);
					},
					o,
					c,
					!0,
				);
			},
			[D, O, k, C, ee],
		);
	rr(re, fe);
	let pe = l(
			async (e, n, r, i, a) => {
				let o = u[e],
					s = ft(o?.page) ? o.page.getStatus() : void 0,
					c = s?.hasRendered,
					l = A({ cached: c, preloaded: c ? void 0 : s?.hasLoaded }),
					d = Pd(a);
				if (
					(_n({
						priority: `background`,
						ensureContinueBeforeUnload: !0,
						continueAfter: `paint`,
					}).then(d),
					await _n({
						priority: `user-blocking`,
						continueAfter: `paint`,
					}),
					r)
				) {
					let e = new Set(),
						t = o?.path ?? `/`;
					for (let n of t.matchAll(S_)) {
						let t = n[1];
						if (t === void 0)
							throw Error(
								`A matching path variable should not be undefined`,
							);
						e.add(t);
					}
					r = Object.fromEntries(
						Object.entries(r).filter(([t]) => e.has(t)),
					);
				}
				let f = Pt(o, n),
					p = ie.current,
					h = ae.current;
				if (
					kd(
						{ routeId: re.current, pathVariables: p },
						{ routeId: e, pathVariables: r },
					)
				) {
					l.ignore?.();
					let a = u[e];
					(m.history.state?.hash !== n &&
						!t &&
						a &&
						(d(),
						await Qn(e, a, {
							currentRoutePath: a.path,
							currentPathVariables: p,
							pathVariables: r,
							hash: n,
							localeId: h,
							preserveQueryParams: v,
							siteCanonicalURL: x,
							currentRoutePathLocalized: a.pathLocalized,
						})),
						Md(f, i, !1));
					return;
				}
				if (!o) return;
				let g = u[re.current];
				fe(
					e,
					h,
					f,
					jn(x) +
						ar(o, {
							currentRoutePath: g?.path,
							currentRoutePathLocalized: g?.pathLocalized,
							currentPathVariables: p,
							hash: n,
							pathVariables: r,
							localeId: h,
							preserveQueryParams: v,
							siteCanonicalURL: x,
							relative: !1,
						}),
					r,
					!1,
					l,
					i,
					t
						? void 0
						: async (t = !1) => (
								d(),
								Qn(
									e,
									o,
									{
										currentRoutePath: g?.path,
										currentPathVariables: p,
										currentRoutePathLocalized:
											g?.pathLocalized,
										hash: n,
										pathVariables: r,
										localeId: h,
										preserveQueryParams: v,
										siteCanonicalURL: x,
									},
									t,
								)
							),
				);
			},
			[u, fe, t, v, x, A],
		),
		me = Dt(u),
		N = re.current,
		he = M.current,
		P = ie.current,
		F = u[N],
		ge = F?.path,
		_e = nT(F, N, he, P, se, p),
		ve = ne.current;
	d(() => {
		te(N, P ?? {}, de.activeLocale, ve);
	}, [te, N, P, de, ve]);
	let ye = c(
		() => ({
			navigate: pe,
			getRoute: me,
			currentRouteId: N,
			currentPathVariables: P,
			routes: u,
			collectionUtils: s,
			preserveQueryParams: v,
			pageviewEventData: _e,
			siteCanonicalURL: x,
			isInitialNavigation: ve,
		}),
		[pe, me, N, P, u, s, v, x, _e, ve],
	);
	if (!F) throw Error(`Router cannot find route for ${N}`);
	let be = !se || !F.includedLocales || F.includedLocales.includes(se.id),
		xe = ge && P ? En(ge, P) : ge,
		Se = String(oe) + xe,
		Ce = Qi(() => ({ ...e, display: `contents` }));
	return _(Ot, {
		api: ye,
		children: _(U_.Provider, {
			value: de,
			children: _(W_.Provider, {
				value: le,
				children: _(HC, {
					children: _(Tr, {
						children: T(fd, {
							currentRoutePath: xe,
							routerAPI: ye,
							children: [
								b && _(dd, { EditorBar: b, fast: !0 }),
								_(DC, {
									children: T(Nl, {
										children: [
											T(Sv, {
												notFoundPage: o,
												defaultPageStyle: e,
												forceUpdateKey: E,
												children: [
													_(bv.Start, {}),
													_(Ld, {
														LayoutTemplate: y,
														webPageId:
															F?.abTestingVariantId ??
															N,
														style: e,
														children: (t) =>
															_(
																a,
																{
																	children: be
																		? Hr(
																				F.page,
																				t
																					? Ce
																					: e,
																			)
																		: o &&
																			Hr(
																				o,
																				e,
																			),
																},
																Se,
															),
													}),
												],
											}),
											b && _(dd, { EditorBar: b }),
											_(Nr, {}),
											_(bv.End, {}),
										],
									}),
								}),
							],
						}),
					}),
				}),
			}),
		}),
	});
}
function Ld({ LayoutTemplate: e, webPageId: t, style: n, children: r }) {
	return e ? _(e, { webPageId: t, style: n, children: r }) : r(!1);
}
function Rd(e, t) {
	let n = t
		? { behavior: `smooth`, block: `start`, inline: `nearest` }
		: void 0;
	e.scrollIntoView(n);
}
function zd(e) {
	return new Promise((t, n) => {
		try {
			new URL(e);
			let r = new Image();
			((r.onload = () => t()), (r.onerror = n), (r.src = e));
		} catch (e) {
			n(e);
		}
	});
}
function Bd(e) {
	return typeof e == `object` && !!e;
}
function Vd(e, t) {
	if (t === ``) return e;
	let n = t.split(/[.[\]]+/u).filter((e) => e.length > 0),
		r = e;
	for (let e of n) {
		if (!Bd(r)) return;
		r = r[e];
	}
	return r;
}
function Hd(e) {
	return `${e.credentials}:${e.url}`;
}
function Ud(e) {
	return L(e) && !Number.isNaN(Number(e));
}
function Wd(e, t) {
	switch (e) {
		case `string`:
			return L(t) || R(t);
		case `color`:
			return L(t);
		case `boolean`:
			return Qe(t);
		case `number`:
			return R(t) || Ud(t);
		case `link`:
		case `image`:
			return L(t) && su(t, !1);
		default:
			return !1;
	}
}
function Gd(e, t) {
	if (e.status === `loading`) return t.fallbackValue;
	if (e.status === `error`) throw e.error;
	let n = Vd(e.data, t.resultKeyPath);
	if (tt(n)) throw Error(`Key '${t.resultKeyPath}' not found in response`);
	if (!Wd(t.resultOutputType, n))
		throw Error(
			`Resolved value '${n}' is not valid for type '${t.resultOutputType}'`,
		);
	return n;
}
function Kd(e, t) {
	if (FramerEnvironment.current() === FramerEnvironment.canvas) return !1;
	let n = Math.max(t * 1e3, iT);
	return Date.now() >= e + n;
}
function qd(e) {
	let {
		RootComponent: t,
		isWebsite: n,
		environment: r,
		routeId: i,
		framerSiteId: a,
		pathVariables: o,
		routes: s,
		collectionUtils: c,
		notFoundPage: l,
		isReducedMotion: u = !1,
		skipAnimations: d = !1,
		includeDataObserver: p = !1,
		localeId: m,
		locales: h,
		preserveQueryParams: g,
		EditorBar: v,
		defaultPageStyle: y,
		disableHistory: b,
		LayoutTemplate: x,
		siteCanonicalURL: S,
		adaptLayoutToTextDirection: C,
		loadSnippetsModule: w,
		initialCollectionItemId: T,
	} = e;
	return (
		f.useEffect(() => {
			n || Jv.start();
		}, []),
		n
			? _(hr, {
					value: r ?? `preview`,
					children: _(je, {
						reducedMotion: d ? `always` : u ? `user` : `never`,
						skipAnimations: d,
						children: _(dn, {
							collectionUtils: c,
							children: _(gT, {
								children: _(Iw.Provider, {
									value: a,
									children: _(hd, {
										loadSnippetsModule: w,
										children: _(Id, {
											initialRoute: i,
											initialPathVariables: o,
											initialLocaleId: m,
											initialCollectionItemId: T,
											routes: s,
											collectionUtils: c,
											notFoundPage: l,
											locales: h,
											defaultPageStyle: y ?? {
												minHeight: `100vh`,
												width: `auto`,
											},
											preserveQueryParams: g,
											EditorBar: v,
											disableHistory: b,
											LayoutTemplate: x,
											siteCanonicalURL: S,
											adaptLayoutToTextDirection: C,
										}),
									}),
								}),
							}),
						}),
					}),
				})
			: _(p ? PS : f.Fragment, {
					children: _(At, {
						routes: s,
						children: _(sS, {
							children: f.isValidElement(t)
								? t
								: f.createElement(t, { key: i }),
						}),
					}),
				})
	);
}
function Jd(e) {
	return {
		trace(...t) {
			return tx.getLogger(e)?.trace(...t);
		},
		debug(...t) {
			return tx.getLogger(e)?.debug(...t);
		},
		info(...t) {
			return tx.getLogger(e)?.info(...t);
		},
		warn(...t) {
			return tx.getLogger(e)?.warn(...t);
		},
		error(...t) {
			return tx.getLogger(e)?.error(...t);
		},
		get enabled() {
			return tx.getLogger(e) !== void 0;
		},
	};
}
function Yd(e) {
	let t = e.next();
	return (B(t.done, `Generator must not yield`), t.value);
}
async function Xd(e, t = e.next()) {
	for (; !t.done; ) {
		let n = await t.value;
		t = e.next(n);
	}
	return t.value;
}
function Zd(e) {
	let t = e.next();
	return t.done ? t.value : Xd(e, t);
}
function* Qd(e) {
	let t = {},
		n = Object.keys(e),
		r = [];
	for (let i of n) {
		let n = e[i];
		if (at(n)) {
			let e = n.next();
			e.done
				? (t[i] = e.value)
				: r.push(
						Xd(n, e).then((e) => {
							t[i] = e;
						}),
					);
		} else t[i] = n;
	}
	return (r.length > 0 && (yield Promise.all(r)), t);
}
function* $d(e) {
	let t = [],
		n = e.keys(),
		r = [];
	for (let i of n) {
		let n = e[i];
		if (at(n)) {
			let e = n.next();
			e.done
				? (t[i] = e.value)
				: r.push(
						Xd(n, e).then((e) => {
							t[i] = e;
						}),
					);
		} else t[i] = n;
	}
	return (r.length > 0 && (yield Promise.all(r)), t);
}
function ef(e) {
	return rf(e) || sf(e);
}
function tf(e) {
	return $e(e) && e.every(z);
}
function nf(e) {
	return z(e) && Ze(e.read) && Ze(e.preload);
}
function rf(e) {
	return tf(e) || nf(e);
}
function af(e) {
	return z(e) && z(e.schema);
}
function of(e) {
	return z(e) && z(e.collectionByLocaleId);
}
function sf(e) {
	return af(e) || of(e);
}
function cf(e, t, n) {
	let r = e.value.length,
		i = t.value.length;
	if (r < i) return -1;
	if (r > i) return 1;
	for (let i = 0; i < r; i++) {
		let r = e.value[i],
			a = t.value[i],
			o = Lf(r, a, n);
		if (o !== 0) return o;
	}
	return 0;
}
function lf(e, t) {
	switch (e?.type) {
		case `array`:
			return {
				type: `array`,
				value: e.value.map((e) => vT.cast(e, t.definition)),
			};
	}
	return null;
}
function uf(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function df(e) {
	switch (e?.type) {
		case `boolean`:
			return e;
		case `number`:
		case `string`:
			return { type: `boolean`, value: !!e.value };
	}
	return null;
}
function ff(e) {
	return df(e)?.value ?? !1;
}
function pf(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function mf(e) {
	switch (e?.type) {
		case `color`:
			return e;
	}
	return null;
}
function hf(e, t) {
	let n = new Date(e.value),
		r = new Date(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function gf(e) {
	switch (e?.type) {
		case `date`:
			return e;
		case `number`:
		case `string`: {
			let t = new Date(e.value);
			return it(t) ? { type: `date`, value: t.toISOString() } : null;
		}
	}
	return null;
}
function _f(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function vf(e) {
	switch (e?.type) {
		case `enum`:
			return e;
		case `string`:
			return { type: `enum`, value: e.value };
	}
	return null;
}
function yf(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function bf(e) {
	switch (e?.type) {
		case `file`:
			return e;
	}
	return null;
}
function xf(e, t) {
	let n = JSON.stringify(e.value),
		r = JSON.stringify(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function Sf(e) {
	switch (e?.type) {
		case `link`:
			return e;
		case `string`:
			try {
				let { protocol: t } = new URL(e.value);
				return t === `http:` || t === `https:`
					? { type: `link`, value: e.value }
					: null;
			} catch {
				return null;
			}
	}
	return null;
}
function Cf(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function wf(e) {
	switch (e?.type) {
		case `number`:
		case `string`: {
			let t = Number(e.value);
			return Number.isFinite(t) ? { type: `number`, value: t } : null;
		}
	}
	return null;
}
function Tf(e) {
	return wf(e)?.value ?? null;
}
function Ef(e, t, n) {
	let r = Object.keys(e.value).sort(),
		i = Object.keys(t.value).sort();
	if (r.length < i.length) return -1;
	if (r.length > i.length) return 1;
	for (let a = 0; a < r.length; a++) {
		let o = r[a],
			s = i[a];
		if (o < s) return -1;
		if (o > s) return 1;
		let c = Lf(e.value[o] ?? null, t.value[s] ?? null, n);
		if (c !== 0) return c;
	}
	return 0;
}
function Df(e, t) {
	switch (e?.type) {
		case `object`: {
			let n = {},
				r = Object.entries(t.definitions);
			for (let [t, i] of r) {
				let r = e.value[t] ?? null;
				n[t] = vT.cast(r, i);
			}
			return { type: `object`, value: n };
		}
	}
	return null;
}
function Of(e, t) {
	let n = JSON.stringify(e.value),
		r = JSON.stringify(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function kf(e) {
	switch (e?.type) {
		case `responsiveimage`:
			return e;
	}
	return null;
}
function Af(e, t) {
	let n = e.value,
		r = t.value;
	return n < r ? -1 : n > r ? 1 : 0;
}
function jf(e) {
	switch (e?.type) {
		case `richtext`:
			return e;
	}
	return null;
}
function Mf(e, t) {
	let n = e.value,
		r = t.value;
	return n < r ? -1 : n > r ? 1 : 0;
}
function Nf(e) {
	switch (e?.type) {
		case `vectorsetitem`:
			return e;
	}
	return null;
}
function Pf(e, t, n) {
	let r = e.value,
		i = t.value;
	return (
		n.type === 0 &&
			((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
		r < i ? -1 : r > i ? 1 : 0
	);
}
function Ff(e) {
	switch (e?.type) {
		case `string`:
			return e;
		case `number`:
			return { type: `string`, value: String(e.value) };
	}
	return null;
}
function If(e) {
	return Ff(e)?.value ?? null;
}
function Lf(e, t, n) {
	if (nt(e) || nt(t)) return (B(e === t), 0);
	switch (e.type) {
		case `array`:
			return (B(e.type === t.type), cf(e, t, n));
		case `boolean`:
			return (B(e.type === t.type), uf(e, t));
		case `color`:
			return (B(e.type === t.type), pf(e, t));
		case `date`:
			return (B(e.type === t.type), hf(e, t));
		case `enum`:
			return (B(e.type === t.type), _f(e, t));
		case `file`:
			return (B(e.type === t.type), yf(e, t));
		case `link`:
			return (B(e.type === t.type), xf(e, t));
		case `number`:
			return (B(e.type === t.type), Cf(e, t));
		case `object`:
			return (B(e.type === t.type), Ef(e, t, n));
		case `responsiveimage`:
			return (B(e.type === t.type), Of(e, t));
		case `richtext`:
			return (B(e.type === t.type), Af(e, t));
		case `vectorsetitem`:
			return (B(e.type === t.type), Mf(e, t));
		case `string`:
			return (B(e.type === t.type), Pf(e, t, n));
		default:
			V(e);
	}
}
async function Rf(e, t) {
	return nf(e) ? (await e.preload(t), e.read(t)) : e;
}
function zf(e) {
	return e.includes(CT);
}
function Bf(e) {
	if (!sf(e) || !e.id) return;
	let t = xT.get(e.id);
	if (!t) return (xT.set(e.id, new WeakRef(e)), e.id);
	if (t.deref() === e) return e.id;
}
function Vf(e) {
	let t = Bf(e);
	if (t) return t;
	let n = ST.get(e);
	if (n) return n;
	let r = `${CT}${Math.random().toString(16).slice(2)}`;
	return (ST.set(e, r), r);
}
function Hf(e, t) {
	if (rf(e)) {
		let n = Vf(e) + (t?.id ?? zg),
			r = wT.get(n);
		if (r) return r;
		let i = new bT(e, t);
		return (wT.set(n, i), i);
	}
	if (af(e)) return e;
	if (of(e)) {
		for (; t; ) {
			let n = e.collectionByLocaleId[t.id];
			if (n) return n;
			t = t.fallback;
		}
		return e.collectionByLocaleId.default;
	}
	V(e, `Unsupported collection type`);
}
function Uf() {
	return 25;
}
function Wf() {
	return 12500;
}
function Gf(e) {
	return e;
}
function Kf(e) {
	return e;
}
function qf(e) {
	return z(e) && Ze(e.getHash);
}
function W(e, ...t) {
	return Kf(
		`${e}(${t.map((e) => (B(!(e instanceof NT), `Pass CollectionMetadata.id instead`), B(!(e instanceof IT), `Pass FieldMetadata.id instead`), B(!(e instanceof PT), `Pass IndexMetadata.id instead`), B(!(e instanceof kT), `Pass RelationalNode.group.id instead`), B(!(e instanceof ET), `Pass Group.id instead`), qf(e) ? e.getHash() : JSON.stringify(e))).join(`, `)})`,
	);
}
function Jf(e, t) {
	return { collectionId: Vf(e), pointer: t };
}
function Yf(e) {
	return z(e) && L(e.collectionId);
}
function Xf(e, t) {
	return { collectionId: Vf(e), pointer: t };
}
function Zf(e) {
	return z(e) && L(e.collectionId);
}
function Qf(e, t) {
	let n = new Map();
	function r(e) {
		if (z(e))
			if (e.type === `Collection` && ef(e.data)) {
				let r = Hf(e.data, t),
					i = Vf(r);
				n.set(i, r);
			} else
				for (let t in e) {
					let n = e[t];
					r(n);
				}
		else if ($e(e)) for (let t of e) r(t);
	}
	return (r(e), n);
}
function $f(e) {
	return e;
}
function ep(e) {
	return e;
}
function tp(e) {
	return e;
}
function np(e) {
	return Array(e).fill({ type: `All` });
}
function rp(e, ...t) {
	if (e) return;
	let n = Error(`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``));
	if (n.stack)
		try {
			let e = n.stack.split(`
`);
			e[1]?.includes(`assert`)
				? (e.splice(1, 1),
					(n.stack = e.join(`
`)))
				: e[0]?.includes(`assert`) &&
					(e.splice(0, 1),
					(n.stack = e.join(`
`)));
		} catch {}
	throw n;
}
function ip(e) {
	let t = new Set();
	if (!e) return t;
	rp(e.type === `array`, `ScalarIntersection expects an array, got:`, e.type);
	for (let n of e.value)
		n &&
			(rp(
				n.type === `string`,
				`ScalarIntersection expects an array of strings, got an array with:`,
				n.type,
			),
			t.add(n.value));
	return t;
}
function ap(e) {
	return e.collection ? `"${e.collection}"."${e.name}"` : `"${e.name}"`;
}
function op(e) {
	return typeof e.value == `string` ? `'${e.value}'` : e.value;
}
function sp(e) {
	return `${e.functionName}(${e.arguments.map((e) => fp(e)).join(`, `)})`;
}
function cp(e) {
	let t = `CASE`;
	e.value && (t += ` ${fp(e.value)}`);
	for (let n of e.conditions) t += ` WHEN ${fp(n.when)} THEN ${fp(n.then)}`;
	return (e.else && (t += ` ELSE ${fp(e.else)}`), (t += ` END`), t);
}
function lp(e) {
	let t = fp(e.value);
	return `${e.operator.toUpperCase()} ${t}`;
}
function up(e) {
	let t = fp(e.left),
		n = fp(e.right);
	return `${t} ${e.operator.toUpperCase()} ${n}`;
}
function dp(e) {
	return `CAST(${fp(e.value)} as ${e.dataType})`;
}
function fp(e) {
	switch (e.type) {
		case `Identifier`:
			return ap(e);
		case `LiteralValue`:
			return op(e);
		case `FunctionCall`:
			return sp(e);
		case `Case`:
			return cp(e);
		case `UnaryOperation`:
			return lp(e);
		case `BinaryOperation`:
			return up(e);
		case `TypeCast`:
			return dp(e);
		case `Select`:
			return `${_p(e)}`;
		default:
			V(e);
	}
}
function pp(e) {
	return af(e.data)
		? `Collection`
		: e.alias
			? `"${e.data.displayName}" AS "${e.alias}"`
			: `"${e.data.displayName}"`;
}
function mp(e) {
	let t = `${hp(e.left)} LEFT JOIN ${hp(e.right)}`;
	return (e.constraint && (t += ` ON ${fp(e.constraint)}`), t);
}
function hp(e) {
	switch (e.type) {
		case `Collection`:
			return pp(e);
		case `LeftJoin`:
			return mp(e);
		default:
			V(e);
	}
}
function gp(e) {
	let t = ``;
	return (
		e.split(/\s+/u).forEach((e) => {
			e !== `` &&
				([
					`SELECT`,
					`FROM`,
					`WHERE`,
					`ORDER`,
					`LIMIT`,
					`OFFSET`,
				].includes(e)
					? (t += `
${e}`)
					: [`AND`, `OR`].includes(e)
						? (t += `
	${e}`)
						: (t += ` ${e}`));
		}),
		t.trim()
	);
}
function _p(e) {
	let t = ``;
	return (
		(t += `SELECT ${e.select
			.map((e) => {
				let t = fp(e);
				return e.alias ? `${t} AS "${e.alias}"` : t;
			})
			.join(`, `)}`),
		(t += ` FROM ${hp(e.from)}`),
		e.where && (t += ` WHERE ${fp(e.where)}`),
		e.orderBy &&
			(t += ` ORDER BY ${e.orderBy.map((e) => `${fp(e)} ${e.direction ?? `asc`}`).join(`, `)}`),
		e.limit && (t += ` LIMIT ${fp(e.limit)}`),
		e.offset && (t += ` OFFSET ${fp(e.offset)}`),
		gp(t)
	);
}
function vp(e) {
	return z(e) && e.type === `Collection`;
}
function yp(e, t) {
	return vp(t) && ef(t.data) ? Vf(t.data) : t;
}
function bp(e, t) {
	let n = t?.id ?? `default`;
	return JSON.stringify(e, yp) + n;
}
function xp(e) {
	let { activeLocale: t } = yr();
	return qE.get(e, t).use();
}
function Sp(e) {
	return xp({ ...e, select: [] }).length;
}
function createFilterQuery(e, t) {
	let n = Object.entries(e ?? {})
		.filter(([, e]) => !(tt(e) || z(e)))
		.map(([e, n]) => ({
			type: `BinaryOperation`,
			operator: `==`,
			left: {
				type: `TypeCast`,
				value: { type: `Identifier`, name: e, collection: t },
				dataType: `STRING`,
			},
			right: { type: `LiteralValue`, value: String(n) },
		}));
	return n.length === 0
		? { type: `LiteralValue`, value: !1 }
		: n.reduce((e, t) => ({
				type: `BinaryOperation`,
				operator: `and`,
				left: e,
				right: t,
			}));
}
function wp(e) {
	let t = w(e);
	return (
		j(() => {
			t.current = e;
		}, [e]),
		vr((...e) => {
			let n = t.current;
			return n(...e);
		}, [])
	);
}
function Tp(e, t) {
	(e.forEach((e) => clearTimeout(e)),
		e.clear(),
		t.forEach((e) => e?.(`Callback cancelled by variant change`)),
		t.clear());
}
function Ep() {
	return new Set();
}
function Dp(e) {
	let t = Qi(Ep),
		n = Qi(Ep);
	return (
		js(() => () => Tp(n, t)),
		d(() => () => Tp(n, t), []),
		d(() => {
			Tp(n, t);
		}, [e]),
		w({
			activeVariantCallback:
				(e) =>
				async (...n) =>
					new Promise((r, i) => {
						(t.add(i), e(...n).then(r));
					}).catch(() => {}),
			delay: async (e, t) => {
				(await new Promise((e) => {
					n.add(globalThis.setTimeout(() => e(!0), t));
				}),
					e());
			},
		}).current
	);
}
function Op(e, t, n) {
	return f.useCallback(
		(r) =>
			!n || !e
				? {}
				: t
					? Object.assign({}, n[e]?.[r], n[t]?.[r])
					: n[e]?.[r] || {},
		[e, t, n],
	);
}
function kp(e) {
	for (let [t, n] of Object.entries(e)) if (G.matchMedia(n).matches) return t;
}
function Ap(e) {
	let t = [];
	for (let { hash: n, mediaQuery: r } of e)
		r && G.matchMedia(r).matches && t.push(n);
	if (t.length > 0) return t;
	let n = e[0]?.hash;
	if (n) return [n];
}
function jp(e, t, n = !0) {
	let r = C(iS),
		i = uo(),
		a = w(!i && La() ? (kp(t) ?? e) : e),
		o = w(n && r ? e : a.current),
		s = zo(),
		c = fe(),
		u = l(
			(e) => {
				if (e !== a.current || e !== o.current) {
					let t = function () {
						((a.current = o.current = e),
							h(() => {
								s();
							}));
					};
					i
						? t()
						: c(() => {
								t();
							});
				}
			},
			[c, s, i],
		);
	return (
		ux(() => {
			i && u(e);
		}, [e, i, u]),
		ux(() => {
			!n || r !== !0 || u(a.current);
		}, []),
		d(() => {
			let e = [];
			for (let [n, r] of Object.entries(t)) {
				let t = G.matchMedia(r),
					i = (e) => {
						e.matches && u(n);
					};
				(Mp(t, i), e.push([t, i]));
			}
			return () => e.forEach(([e, t]) => Np(e, t));
		}, [t, u]),
		[a.current, o.current]
	);
}
function Mp(e, t) {
	e.addEventListener ? e.addEventListener(`change`, t) : e.addListener(t);
}
function Np(e, t) {
	e.removeEventListener
		? e.removeEventListener(`change`, t)
		: e.removeListener(t);
}
function Pp(e) {
	setTimeout(e, 1);
}
function Fp(e) {
	let t = new Set(),
		n = Ap(e);
	if (n)
		for (let e of n)
			for (let n of document.querySelectorAll(`.hidden-` + e))
				(Ip(n.previousSibling) && t.add(n.previousSibling),
					n.parentNode?.removeChild(n));
	(Cg ? G.requestIdleCallback : Pp)(() => {
		document.querySelector(JE)?.remove();
	});
	for (let e of document.querySelectorAll(`.ssr-variant:empty`))
		(Ip(e.previousSibling) && t.add(e.previousSibling),
			e.parentNode?.removeChild(e));
	for (let e of t)
		Lp(e.nextSibling) &&
			(e.parentNode?.removeChild(e.nextSibling),
			e.parentNode?.removeChild(e));
}
function Ip(e) {
	return e?.nodeType === Node.COMMENT_NODE && e.textContent === `$`;
}
function Lp(e) {
	return e?.nodeType === Node.COMMENT_NODE && e.textContent === `/$`;
}
function Rp(e, t) {
	if (e[t]) return e[t];
	if (!(t in e)) return e.default;
}
function zp(e, t) {
	if (lo()) return;
	let n = f.useRef(!0),
		r = f.useRef(t);
	(js((t, i) => {
		let a = t && !i;
		if (!n.current && a) {
			let t = Rp(r.current, e);
			t && t();
		}
		n.current = a;
	}, []),
		f.useEffect(() => {
			if (n.current) {
				let t = Rp(r.current, e);
				t && t();
			}
		}, [e]));
}
function Bp(e) {
	return z(e) && YE in e && e.page !== void 0;
}
function Vp(e, t, n, r = !1) {
	let [i, a] = A(),
		s = Math.ceil(e / t),
		[u, f] = o(
			globalThis?.history?.state?.paginationInfo?.[n]?.currentPage ?? 1,
		),
		p = w(u),
		m = c(
			() => ({ currentPage: u, totalPages: s, isLoading: i }),
			[u, s, i],
		);
	d(() => {
		lr(n, m);
	}, [n, m]);
	let g = au();
	return {
		paginationInfo: m,
		loadMore: l(
			async () =>
				g ||
				p.current >= s ||
				(await _n({
					priority: `user-blocking`,
					continueAfter: `paint`,
				}),
				p.current >= s)
					? void 0
					: ((e) => {
							e(() => {
								f((e) => {
									let t = Math.min(e + 1, s);
									return ((p.current = t), t);
								});
							});
						})(r ? a : h),
			[s, r],
		),
	};
}
function Hp(e, t, n) {
	let { paginationInfo: r, loadMore: i } = Vp(Sp(e), t, n, !0);
	return {
		paginatedQuery: c(() => {
			let n = t * r.currentPage;
			if (e.limit) {
				if (
					e.limit.type !== `LiteralValue` ||
					typeof e.limit.value != `number`
				)
					throw Error(`Unexpected type for query limit`);
				n = Math.min(n, e.limit.value);
			}
			return { ...e, limit: { type: `LiteralValue`, value: n } };
		}, [e, t, r]),
		paginationInfo: r,
		loadMore: i,
	};
}
function Up(e, t) {
	return `${e}-${t}`;
}
function Wp(e, t) {
	let n = e.indexOf(t) + 1;
	n >= e.length && (n = 0);
	let r = e[n];
	return (B(r !== void 0, `nextVariant should be defined`), r);
}
function Gp(e, t) {
	if (e) {
		if (t) {
			let n = e[t];
			if (n) return n;
		}
		return e.default;
	}
}
function Kp(e, t, n, r, i) {
	let { hover: a, pressed: o, loading: s, error: c } = e || {};
	if (c && i) return `error`;
	if (s && r) return `loading`;
	if (o && n) return `pressed`;
	if (a && t) return `hover`;
}
function qp(e, t) {
	return t[e] || `framer-v-${e}`;
}
function Jp(e, t, n) {
	return e && n.has(e) ? e : t;
}
function Yp() {
	let e = w(),
		t = w(),
		n = l(() => {
			e.current &&
				(document.removeEventListener(`visibilitychange`, e.current),
				(e.current = void 0),
				(t.current = void 0));
		}, []);
	return (
		d(
			() => () => {
				n();
			},
			[n],
		),
		l(
			(r) => {
				if (!document.hidden) {
					(r(), n());
					return;
				}
				if (((t.current = r), e.current)) return;
				let i = () => {
					document.hidden || (t.current?.(), n());
				};
				((e.current = i),
					document.addEventListener(`visibilitychange`, i));
			},
			[n],
		)
	);
}
function Xp() {
	let e = w(),
		t = w(!1),
		n = w(),
		r = C(Vx);
	return (
		d(
			() => () => {
				(e.current?.(), (n.current = void 0), (e.current = void 0));
			},
			[],
		),
		l(
			(i, a) => {
				if (!a?.current || t.current) {
					i();
					return;
				}
				if (((n.current = i), e.current)) return;
				let o = !1;
				e.current = Cs(r, `undefined`, a.current, null, (e) => {
					((t.current = e.isIntersecting),
						!o &&
							((o = !0),
							queueMicrotask(() => {
								((o = !1), t.current && n.current?.());
							})));
				});
			},
			[r],
		)
	);
}
function Zp(e) {
	let t = Yp(),
		n = Xp();
	return l(
		(r, i = !1) => {
			if (Sg) {
				r();
				return;
			}
			t(i && e ? () => n(r, e) : r);
		},
		[t, n, e],
	);
}
async function Qp() {
	return new Promise((e) => {
		let t = e;
		(setTimeout(() => {
			t && (performance.mark(`wait-for-click-fallback`), t());
		}, 150),
			(QE = () => {
				(e(), (t = void 0));
			}));
	});
}
function $p(e) {
	e.button === 0 && (performance.mark(`pointerdown-listener`), (ZE = Qp()));
}
function em() {
	(performance.mark(`click-received-listener`),
		(ZE = void 0),
		QE?.(),
		(QE = void 0));
}
function tm(e = !1) {
	d(() => {
		e &&
			(document.addEventListener(`pointerup`, $p, !0),
			document.__proto__.addEventListener.call(
				document,
				`click`,
				em,
				!0,
			));
	}, [e]);
}
function nm({
	variant: e,
	defaultVariant: t,
	transitions: n,
	enabledGestures: r,
	cycleOrder: i = [],
	variantProps: a = {},
	variantClassNames: o = {},
	ref: s,
}) {
	let u = zo(),
		d = au(),
		f = Qi(() => new Set(i)),
		{ yieldOnTap: p } = Rg();
	tm(p);
	let m = Zp(s),
		g = w({
			isHovered: !1,
			isHoveredHasUpdated: !1,
			isPressed: !1,
			isPressedHasUpdated: !1,
			isError: !1,
			hasPressedVariants: !0,
			baseVariant: Jp(e, t, f),
			lastVariant: e,
			gestureVariant: void 0,
			loadedBaseVariant: {},
			defaultVariant: t,
			enabledGestures: r,
			cycleOrder: i,
			transitions: n,
		}),
		_ = l((e) => {
			let {
					isHovered: t,
					isPressed: n,
					isError: r,
					enabledGestures: i,
					defaultVariant: a,
				} = g.current,
				o = Jp(e, a, f),
				s = Kp(i?.[o], t, n, !1, r);
			return [o, s ? Up(o, s) : void 0];
		}, []),
		v = l(
			async (e, t, n, r, i = !1, a = !1) => {
				let [o, s] = _(r);
				if (o === e && s === t) return;
				(a && (g.current.isError = !1),
					(g.current.baseVariant = o || n),
					(g.current.gestureVariant = s));
				let c = p && g.current.isPressedHasUpdated;
				(c &&
					ZE &&
					(performance.mark(`wait-for-tap-start`),
					await ZE,
					performance.measure(`wait-for-tap`, `wait-for-tap-start`)),
					c &&
						(performance.mark(`yield-on-tap-start`),
						await _n({
							priority: `user-blocking`,
							continueAfter: `paint`,
						}),
						performance.measure(
							`yield-on-tap`,
							`yield-on-tap-start`,
						)));
				let {
					isHovered: l,
					isPressed: d,
					isHoveredHasUpdated: f,
					isPressedHasUpdated: v,
				} = g.current;
				if (l || f || d || v) {
					h(u);
					return;
				}
				m(() => h(u), i);
			},
			[_, u, m, p],
		),
		y = l(
			({ isHovered: e, isPressed: t, isError: n }) => {
				let r = t !== g.current.isPressed,
					i = e !== g.current.isHovered;
				(e !== void 0 && (g.current.isHovered = e),
					t !== void 0 && (g.current.isPressed = t),
					n !== void 0 && (g.current.isError = n));
				let {
					baseVariant: a,
					gestureVariant: o,
					defaultVariant: s,
				} = g.current;
				((g.current.isPressedHasUpdated = r),
					(g.current.isHoveredHasUpdated = i),
					v(a, o, s, a, !1));
			},
			[v],
		),
		b = l(
			(e, t = !1) => {
				let {
					defaultVariant: n,
					cycleOrder: r,
					baseVariant: i,
					gestureVariant: a,
				} = g.current;
				v(i, a, n, e === XE ? Wp(r || [], i || n) : e, t, !0);
			},
			[v],
		),
		x = l(() => {
			let { baseVariant: e } = g.current;
			((g.current.loadedBaseVariant[e] = !0), m(() => h(u), !0));
		}, [u, m]);
	if (e !== g.current.lastVariant) {
		let [t, n] = _(e);
		((g.current.lastVariant = t),
			(t !== g.current.baseVariant || n !== g.current.gestureVariant) &&
				((g.current.baseVariant = t), (g.current.gestureVariant = n)));
	}
	let {
			baseVariant: S,
			gestureVariant: C,
			defaultVariant: T,
			enabledGestures: E,
			isHovered: D,
			isPressed: O,
			isError: k,
			loadedBaseVariant: A,
		} = g.current,
		j = Op(g.current.baseVariant, g.current.gestureVariant, a);
	return c(() => {
		let e = [];
		S !== T && e.push(S);
		let t = E?.[S]?.loading,
			n = !k && !d && !!t && !A[S],
			r = n ? Up(S, `loading`) : C;
		r && e.push(r);
		let i = E?.[S],
			a = {
				onMouseEnter: () => y({ isHovered: !0 }),
				onMouseLeave: () => y({ isHovered: !1 }),
			};
		return (
			i?.pressed &&
				Object.assign(a, {
					onTapStart: () => y({ isPressed: !0 }),
					onTapCancel: () => y({ isPressed: !1 }),
					onTap: () => y({ isPressed: !1 }),
				}),
			{
				variants: e,
				baseVariant: S,
				gestureVariant: r,
				isLoading: n,
				transition: Gp(g.current.transitions, S),
				setVariant: b,
				setGestureState: y,
				clearLoadingGesture: x,
				addVariantProps: j,
				gestureHandlers: a,
				classNames: Uc(qp(S, o), Kp(i, D, O, n, k)),
			}
		);
	}, [S, C, D, O, A, j, b, T, E, y, x, o]);
}
function rm(e, { scopeId: t, nodeId: n, override: r, inComponentSlot: i }) {
	if (!Ll()) return r(e);
	let a = im(e, r),
		o = !1;
	function s(r, s) {
		let { disableCustomCode: c } = Rg(),
			l = Bl();
		if (c) return _(e, { ...r, ref: s });
		if (Jl(t, l?.scopeId, l?.level, i ?? !1))
			return a.status === `success`
				? _(z_.Provider, {
						value: n,
						children: _(Rl, {
							getErrorMessage: Gl.bind(null, t, n),
							fallback: _(e, { ...r, ref: s }),
							children: _(a.Component, { ...r, ref: s }),
						}),
					})
				: ((o ||= (Il(a.error), Il(Gl(t, n)), Fl(a.error), !0)),
					_(e, { ...r, ref: s }));
		if (a.status === `success`)
			return _(z_.Provider, {
				value: n,
				children: _(a.Component, { ...r, ref: s }),
			});
		throw a.error;
	}
	return f.forwardRef(s);
}
function im(e, t) {
	try {
		return { status: `success`, Component: t(e) };
	} catch (e) {
		return { status: `error`, error: e };
	}
}
function am(e) {
	return e.weight !== void 0 && e.style !== void 0;
}
function om(e, t) {
	let n = t === `normal` ? `Regular` : `Italic`;
	return e === 400 ? n : t === `normal` ? `${cD[e]}` : `${cD[e]} ${n}`;
}
function sm() {
	return m === void 0 ? {} : uD || ((uD = cm()), uD);
}
function cm() {
	let e = m.location,
		t = m?.bootstrap?.services;
	if (t) return t;
	let n;
	try {
		if (((n = m.top.location.origin), (t = m.top?.bootstrap?.services), t))
			return t;
	} catch {}
	if (n && n !== e.origin)
		throw Error(`Unexpectedly embedded by ${n} (expected ${e.origin})`);
	if (e.origin.endsWith(`framer.com`) || e.origin.endsWith(`framer.dev`))
		throw Error(`ServiceMap data was not provided in document`);
	try {
		let n =
			new URLSearchParams(e.search).get(`services`) ||
			new URLSearchParams(e.hash.substring(1)).get(`services`);
		n && (t = JSON.parse(n));
	} catch {}
	if (t && typeof t == `object` && t.api) return t;
	throw Error(`ServiceMap requested but not available`);
}
function lm(e) {
	return e.key + e.extension;
}
function um(e) {
	return `${sm().userContent}/assets/${e}`;
}
function dm(e) {
	return um(lm(e));
}
function fm(e, t) {
	return t ? `${e} ${dD}` : e;
}
function pm(e, t) {
	switch (t) {
		case `custom`:
			throw Error(`Custom fonts are not supported`);
		default:
			return fm(e.name, e.isVariable);
	}
}
function mm(e) {
	return !!(e && Array.isArray(e));
}
function hm(e) {
	if (!e || !Array.isArray(e)) return;
	let t = [];
	for (let n of e)
		_m(n) &&
			t.push({
				tag: n.tag,
				name: n.name,
				minValue: n.minValue,
				maxValue: n.maxValue,
				defaultValue: n.defaultValue,
			});
	return t;
}
function gm(e) {
	return !(
		typeof e != `object` ||
		!e ||
		!(`tag` in e) ||
		typeof e.tag != `string` ||
		(`coverage` in e && e.coverage !== void 0 && !Array.isArray(e.coverage))
	);
}
function _m(e) {
	return !(
		typeof e != `object` ||
		!e ||
		!(`tag` in e) ||
		typeof e.tag != `string` ||
		(`name` in e && typeof e.name != `string`) ||
		!(`minValue` in e) ||
		typeof e.minValue != `number` ||
		!(`maxValue` in e) ||
		typeof e.maxValue != `number` ||
		!(`defaultValue` in e) ||
		typeof e.defaultValue != `number`
	);
}
function vm(e) {
	return mD[ym(e)];
}
function ym(e) {
	return e.toLowerCase().replace(/\s+/gu, `-`);
}
function bm(e) {
	return (
		(e = e.toLowerCase()),
		e.includes(`italic`) || e.includes(`oblique`) || e.includes(`slanted`)
			? `italic`
			: `normal`
	);
}
function xm(e, t) {
	return { ...Sm(e, t), ...Cm(e, t) };
}
function Sm(e, t) {
	if (t.length === 0)
		return {
			variantBold: void 0,
			variantBoldItalic: void 0,
			variantItalic: void 0,
		};
	let { weight: n, style: r } = e,
		i = new Map(),
		a = new Map();
	for (let r of t)
		r.isVariable === e.isVariable &&
			(i.set(`${r.weight}-${r.style}`, r),
			!(r.weight <= n) && (a.has(r.style) || a.set(r.style, r)));
	let o = a.get(r),
		s = a.get(`italic`),
		c = e.weight;
	c <= 300
		? ((o = i.get(`400-${r}`) ?? o), (s = i.get(`400-italic`) ?? s))
		: c <= 500
			? ((o = i.get(`700-${r}`) ?? o), (s = i.get(`700-italic`) ?? s))
			: ((o = i.get(`900-${r}`) ?? o), (s = i.get(`900-italic`) ?? s));
	let l = i.get(`${n}-italic`);
	return { variantBold: o, variantItalic: l, variantBoldItalic: s };
}
function Cm(e, t) {
	if (t.length === 0)
		return { variantVariable: void 0, variantVariableItalic: void 0 };
	let n, r, i, a;
	for (let o of t) {
		if (!o.isVariable) continue;
		let t = o.weight === e.weight,
			s = o.weight === 400;
		o.style === `normal`
			? t
				? (n = o)
				: s
					? (i = o)
					: (i ||= o)
			: o.style === `italic` && (t ? (r = o) : s ? (a = o) : (a ||= o));
	}
	return { variantVariable: n ?? i, variantVariableItalic: r ?? a };
}
function wm(e) {
	return !!e.variationAxes;
}
function Tm(e) {
	return Em(e) || Dm(e);
}
function Em(e) {
	return e.startsWith(_D);
}
function Dm(e) {
	return e.startsWith(gD);
}
function Om(e, t) {
	for (let n = 0; n < e.length; n++) {
		let r = e[n];
		if (r) {
			if (r.owner !== t.owner && r.file === t.file)
				return { existingFont: r, index: n, projectDuplicate: !0 };
			if (r && r.selector === t.selector)
				return { existingFont: r, index: n, projectDuplicate: !1 };
		}
	}
}
function km(e) {
	let { font: t } = e,
		n = t.fontFamily,
		r = Array.isArray(t.variationAxes);
	if (r && n.toLowerCase().includes(`variable`)) return n;
	let i = r ? dD : t.fontSubFamily.trim();
	return i === `` ? n : `${n} ${i}`;
}
function Am({
	fontFamily: e,
	fontSubFamily: t,
	variationAxes: n,
	faceDescriptors: r,
}) {
	let i = t.trim() || `Regular`,
		a = i.toLocaleLowerCase().includes(`variable`),
		o = hm(n) && !a ? `Variable ${i}` : i,
		s = `normal`,
		c = 400;
	return (
		r &&
			((c = r.weight), (s = r.italic || r.oblique ? `italic` : `normal`)),
		{ family: e, variant: o, weight: c, style: s }
	);
}
function jm(e) {
	if (!(!e.weight || !e.style))
		return {
			weight: e.weight,
			style: e.style,
			isVariable: wm(e),
			selector: e.selector,
		};
}
function Mm(e) {
	let t = e.fonts.map((e) => jm(e)).filter((e) => e !== void 0);
	for (let n of e.fonts) {
		let e = jm(n);
		if (!e) continue;
		let r = xm(e, t);
		((n.selectorVariable = r.variantVariable?.selector),
			(n.selectorVariableItalic = r.variantVariableItalic?.selector),
			(n.selectorBold = r.variantBold?.selector),
			(n.selectorBoldItalic = r.variantBoldItalic?.selector),
			(n.selectorItalic = r.variantItalic?.selector));
	}
}
function Nm(e) {
	return e.ownerTypes.includes(`team`) ? `team` : `project`;
}
async function Pm(e) {
	switch (e) {
		case `google`:
			return (await import(`./google-fonts-2.mjs`)).default;
		case `fontshare`:
			return (await import(`./fontshare-B2QLD7YB.BBfcfLmP.mjs`)).default;
		default:
			throw Error(`Unknown font source: ${e}`);
	}
}
async function Fm(e) {
	switch (e) {
		case `google`:
			return (await import(`./google-fonts-1.mjs`)).default;
		case `fontshare`:
			return (await import(`./fontshare-4THNDPMZ.CUgKu1lc.mjs`)).default;
		case `framer`:
			return (await import(`./framer-font.mjs`))
				.default;
		default:
			throw Error(`Unknown font source: ${e}`);
	}
}
function Im(e) {
	return e
		.split(`,`)
		.map((e) => e.trim().toLowerCase())
		.filter(Lm);
}
function Lm(e) {
	return yD.includes(e);
}
function Rm(e) {
	let t = {
			serif: `serif`,
			sans: `sans-serif`,
			slab: `slab`,
			display: `display`,
			handwritten: `handwriting`,
			script: `handwriting`,
		},
		n = Im(e)[0];
	return n && t[n];
}
function zm(e) {
	let t = {
		serif: `serif`,
		"sans-serif": `sans-serif`,
		display: `display`,
		handwriting: `handwriting`,
		monospace: `monospace`,
	};
	if (e) return t[e];
}
function Bm(e, t) {
	return e.reduce((e, n) => ((e[t(n)] = n), e), {});
}
async function Vm(e, t, n = 0) {
	let { family: r, url: i, stretch: a, unicodeRange: o } = e,
		s = e.weight,
		c = e.style || `normal`,
		l = `${r}-${c}-${s}-${i}`;
	if (!FD.has(l) || n > 0) {
		let u = new FontFace(r, `url(${i})`, {
				weight: L(s) ? s : s?.toString(),
				style: c,
				stretch: a,
				unicodeRange: o,
			}),
			d = u
				.load()
				.then(() => (t.fonts.add(u), Hm(r, c, s)))
				.catch((l) => {
					if (l.name !== `NetworkError`) throw l;
					if (n < ND) return Vm(e, t, n + 1);
					throw new PD(
						`Font loading failed after ${n} retries due to network error: ${JSON.stringify({ family: r, style: c, weight: s, url: i, stretch: a, unicodeRange: o })}`,
					);
				});
		FD.set(l, d);
	}
	await FD.get(l);
}
async function Hm(e, t, n) {
	let r = `${e}-${t}-${n}`;
	if (!ID.has(r)) {
		let i = new jD.default(e, { style: t, weight: n }).load(null, MD);
		ID.set(r, i);
	}
	try {
		await ID.get(r);
	} catch {
		throw new PD(
			`Failed to check if font is ready (${MD}ms timeout exceeded): ${JSON.stringify({ family: e, style: t, weight: n })}`,
		);
	}
}
function Um(e) {
	try {
		if (e === `framer`) return Wm(RD) ? RD : void 0;
		{
			let t = (async () => {
				switch (e) {
					case `google`:
						return (await import(`./google-fonts-3.mjs`))
							.default;
					case `fontshare`:
						return (
							await import(`./fontshare-O22OBJ3D.CRLyt6Mz.mjs`)
						).default;
					default:
						V(e);
				}
			})();
			return Wm(t) ? t : void 0;
		}
	} catch (e) {
		console.error(e);
		return;
	}
}
function Wm(e) {
	return z(e) && Object.values(e).every(Km);
}
function Gm(e) {
	return z(e) && L(e.tag);
}
function Km(e) {
	return Array.isArray(e) && e.every(Gm);
}
function qm(e, t, n, r = VD) {
	let [i, a] = f.useState(e),
		[o, s] = f.useState(e);
	return (
		t && e !== o && (s(e), a(e)),
		[
			i,
			a,
			f.useCallback(
				(e) => {
					Ar(e) ||
						(t && a(r(e)),
						n &&
							f.startTransition(() => {
								n(e);
							}));
				},
				[r, n, t],
			),
		]
	);
}
function Jm(e, t) {
	return !e || t !== `date` ? e : e.includes(`T`) ? e.split(`T`)[0] : e;
}
function Ym() {
	return _(`svg`, {
		xmlns: `http://www.w3.org/2000/svg`,
		width: `8`,
		height: `8`,
		viewBox: `0 0 8 8`,
		"aria-hidden": `true`,
		children: _(`path`, {
			d: `m1.5 6.5 5-5M6.5 6.5l-5-5`,
			fill: `none`,
			stroke: `currentColor`,
			strokeWidth: `1.5`,
			strokeLinecap: `round`,
		}),
	});
}
function Xm(e, t) {
	d(() => {
		function n(n) {
			n.key === `Escape` &&
				e &&
				(n.preventDefault(), n.stopPropagation(), t());
		}
		return (
			m.addEventListener(`keyup`, n),
			() => m.removeEventListener(`keyup`, n)
		);
	}, [e, t]);
}
function Zm(e, t, n, r) {
	let i = m.innerHeight - r,
		a = Math.min(m.innerWidth - n, t),
		o = i / e;
	return Math.min(a, o);
}
function Qm(e, { width: t, height: n }) {
	if (!e.src || !e.srcSet) return;
	let r = new m.Image();
	return (
		(r.src = e.src),
		(r.srcset = e.srcSet),
		(r.sizes = e.sizes || ``),
		(r.width = t),
		(r.height = n),
		r.decode()
	);
}
function $m() {
	return (
		document.getElementById(nw) ??
		document.getElementById(tw) ??
		document.body
	);
}
function eh(e, t) {
	return R(e) ? e : (t ?? 0);
}
function th(e) {
	return eh(e?.paddingTop, e?.padding) + eh(e?.paddingBottom, e?.padding);
}
function nh(e) {
	return eh(e?.paddingLeft, e?.padding) + eh(e?.paddingRight, e?.padding);
}
function rh(e, t) {
	if (!e || !t || !t.src) return t;
	let n = new URL(t.src);
	return (
		n.searchParams.delete(`scale-down-to`),
		n.searchParams.delete(`lossless`),
		{
			...t,
			sizes: `min(100vw, ${e.maxWidth - nh(e)}px)`,
			srcSet: _o(t.nodeFixedSize, t, t.src).srcSet,
		}
	);
}
function ih(e) {
	if (!e) return !1;
	for (let t in e) {
		if (!(t in $D)) continue;
		let n = $D[t],
			r = e[t];
		if (!(!R(n) || !R(r)) && n !== r) return !0;
	}
	return !1;
}
function ah(e) {
	let t = de.get(e.current);
	if (!t) return !1;
	if (ih(t.projection?.latestValues)) return !0;
	let n = t.projection?.path;
	if (!n || n.length === 0) return !1;
	for (let e of n) if (ih(e.latestValues)) return !0;
	return !1;
}
function oh(e) {
	return b(function (
		{ lightbox: t, lightboxClassName: n, onClick: r, ...i },
		s,
	) {
		let u = C(Ce),
			f = C($E),
			p = !!f,
			m = w(null),
			g = s ?? m,
			v = w(),
			y = c(() => rh(t, i.background), [t, i.background]),
			[b, x] = o(!1),
			[E, D] = o(),
			k = l(() => {
				if (t) {
					if (b) {
						h(() => {
							x(!0);
						});
						return;
					}
					Ae.read(() => {
						if (!g.current) return;
						let e = getComputedStyle(g.current),
							n =
								g.current.getAttribute(`data-border`) === `true`
									? getComputedStyle(g.current, `::after`)
									: void 0,
							r = g.current.offsetWidth ?? 1,
							i = g.current.offsetHeight ?? 1,
							a = ah(g) || p ? { duration: 0 } : t.transition;
						h(() => {
							(D({
								borderRadius: e.borderRadius,
								aspectRatio: r / (i || 1),
								borderTop: n?.borderTopWidth,
								borderRight: n?.borderRightWidth,
								borderBottom: n?.borderBottomWidth,
								borderLeft: n?.borderLeftWidth,
								borderStyle: n?.borderStyle,
								borderColor: n?.borderColor,
								transition: a,
								imageRendering: e.imageRendering,
								filter: e.filter,
							}),
								x(!0),
								f?.stop());
						});
					});
				}
			}, [t, b, g, f?.stop, p]),
			A = E?.aspectRatio ?? 1,
			j = wp(() => {
				if (!t || !y || !y.src) return;
				let e = v.current?.[y.src];
				if (e) return e;
				let n = Zm(A, t.maxWidth, nh(t), th(t)),
					r = Qm(y, { width: n, height: n * A });
				return ((v.current = { [y.src]: r }), r);
			}),
			ee = l(
				async (e) => {
					(r?.(e), !(b || !t || !y) && (await j(), k()));
				},
				[r, k, b, y, t, j],
			),
			ne = l((e) => {
				(e?.stopPropagation(),
					h(() => {
						x(!1);
					}));
			}, []);
		(Xm(b, ne),
			d(() => {
				if (!t) return;
				let e;
				function n() {
					e = setTimeout(() => {
						j();
					}, 50);
				}
				function r() {
					clearTimeout(e);
				}
				let i = g.current;
				return (
					i?.addEventListener(`mouseenter`, n),
					i?.addEventListener(`mouseleave`, r),
					i?.addEventListener(`pointerdown`, j),
					() => {
						(r(),
							i?.removeEventListener(`mouseenter`, n),
							i?.removeEventListener(`mouseleave`, r),
							i?.removeEventListener(`pointerdown`, j));
					}
				);
			}, [j, g, t]));
		let M = te(),
			re = E?.transition ?? i.transition ?? u.transition,
			ie = E?.borderRadius,
			ae = E?.imageRendering,
			oe = E?.filter,
			se = E?.borderTop,
			ce = E?.borderRight,
			le = E?.borderBottom,
			ue = E?.borderLeft,
			de = E?.borderStyle,
			fe = E?.borderColor,
			pe = !!(se || ce || le || ue || de || fe),
			me = pe
				? {
						"--border-top-width": se,
						"--border-right-width": ce,
						"--border-bottom-width": le,
						"--border-left-width": ue,
						"--border-style": de,
						"--border-color": fe,
					}
				: void 0,
			N = { [WC]: i.id },
			he = eh(t?.paddingTop, t?.padding),
			F = eh(t?.paddingBottom, t?.padding),
			ge = eh(t?.paddingLeft, t?.padding),
			_e = eh(t?.paddingRight, t?.padding),
			ve = E?.borderRadius
				? { ...i.style, borderRadius: E.borderRadius }
				: i.style,
			ye = b
				? i.layoutDependency
					? `${i.layoutDependency}-open`
					: `open`
				: i.layoutDependency,
			be = p && b ? void 0 : (i.layoutId ?? (t ? M : void 0));
		return T(O, {
			children: [
				_(e, {
					...i,
					style: ve,
					onClick: ee,
					layoutId: be,
					ref: g,
					layoutDependency: ye,
					transition: re,
				}),
				_(Le, {
					onExitComplete: () => {
						h(() => {
							(D(void 0), f?.start());
						});
					},
					children:
						b &&
						t &&
						y &&
						_(
							a,
							{
								children: S(
									T(O, {
										children: [
											_(P.div, {
												...N,
												className: n,
												onClick: ne,
												style: {
													position: `fixed`,
													inset: 0,
													zIndex: t.zIndex,
													backgroundColor:
														t.backdrop ??
														`transparent`,
												},
												transition: re,
												initial: eO,
												animate: tO,
												exit: eO,
											}),
											_(P.div, {
												...N,
												className: n,
												style: {
													alignItems: `center`,
													display: `flex`,
													inset: `${he}px ${_e}px ${F}px ${ge}px`,
													justifyContent: `center`,
													pointerEvents: `none`,
													position: `fixed`,
													zIndex: t.zIndex,
												},
												children: _(`div`, {
													style: {
														alignItems: `center`,
														aspectRatio: A,
														display: `flex`,
														justifyContent: `center`,
														maxHeight: `100%`,
														position: `relative`,
														width: `100%`,
														maxWidth: t.maxWidth,
													},
													children: _(P.div, {
														layoutId: be,
														transition: re,
														onClick: k,
														className: `framer-lightbox-container`,
														"data-border": pe,
														style: {
															aspectRatio: A,
															borderRadius: ie,
															bottom: 0,
															position: `absolute`,
															top: 0,
															userSelect: `none`,
															imageRendering: ae,
															filter: oe,
															...me,
														},
														children: _(Eo, {
															image: y,
															alt: y.alt,
															draggable:
																i.draggable,
														}),
													}),
												}),
											}),
										],
									}),
									$m(),
								),
							},
							`backdrop`,
						),
				}),
			],
		});
	});
}
function sh(e, t) {
	return iO && !t
		? Document.parseHTMLUnsafe(e)
		: ((rO ??= new DOMParser()), rO.parseFromString(e, t ?? `text/html`));
}
function ch(e) {
	return e
		.replaceAll(`&`, `&amp;`)
		.replaceAll(`<`, `&lt;`)
		.replaceAll(`>`, `&gt;`)
		.replaceAll(`"`, `&quot;`)
		.replaceAll(`'`, `&#39;`);
}
function lh(e, t, n, r) {
	return e.replace(aO, (e, i, a, o, s, c, l) => {
		if (a.toLowerCase() !== `a`) return e;
		let u = s || c,
			d = uu(u.replace(/&amp;/gu, `&`));
		if (!d || !d.target) return e;
		let f = t(d.target);
		if (!Bp(f) || !Bp(n)) return e;
		let p = f.path,
			m = n.path;
		if (!p || !m) return e;
		let h = ` data-framer-page-link-target="${d.target}"`,
			g = Pt(f, d.element ?? void 0);
		g && (h += ` data-framer-page-link-element="${d.element}"`);
		let _ = fu(u);
		if (!_ || L(_)) return e;
		Eu(n, _, r) && (h += ` data-framer-page-link-current`);
		let v = p,
			y = Object.assign({}, r, d.collectionItem?.pathVariables);
		if (
			(Object.keys(y).length > 0 &&
				(v = v.replace(aw, (e, t) => `` + y[t])),
			d.collectionItem?.pathVariables)
		) {
			let e = new URLSearchParams(d.collectionItem.pathVariables);
			h += ` data-framer-page-link-path-variables="${e}"`;
		}
		return (
			(v = Sn(m, v)),
			i + o + `"${ch(v + (g ? `#${g}` : ``))}"` + h + l
		);
	});
}
function uh(e, t) {
	return e.length === t.length && e.every((e, n) => e === t[n]);
}
function dh(e) {
	switch (e) {
		case `top`:
			return `flex-start`;
		case `center`:
			return `center`;
		case `bottom`:
			return `flex-end`;
	}
}
function fh(e, t, n) {
	let r = w([]);
	uh(r.current, e) ||
		((r.current = e),
		FontLoader.loadFonts(e).then(({ newlyLoadedFontCount: e }) => {
			!t ||
				!n.current ||
				J.current() !== J.canvas ||
				(e > 0 && Go(n.current));
		}));
}
function ph() {
	return { current: null };
}
async function mh(e, t) {
	let n = e.current;
	if (n) return n;
	let r,
		i = new Promise((e, n) => {
			((r = e), t.signal.addEventListener(`abort`, () => n()));
		});
	return (
		Object.defineProperty(e, `current`, {
			get() {
				return n;
			},
			set(e) {
				if (((n = e), e === null)) {
					t.abort();
					return;
				}
				r(e);
			},
			configurable: !0,
		}),
		i
	);
}
function hh(e) {
	return e in lO;
}
function gh(e, t) {
	let n = {};
	for (let r in e) {
		if (!hh(r)) continue;
		let i = e[r],
			a = lO[r];
		tt(i) || tt(a) || (t && r !== `opacity`) || (n[r] = [i, a]);
	}
	return n;
}
function _h(e, t = `character`, n, r, i) {
	if (r) {
		let t = ph();
		return (n.add(t), _(`span`, { ref: t, style: i, children: e }));
	}
	switch (t) {
		case `character`:
		case `line`: {
			let t = e.split(` `),
				r = t.length - 1;
			return t.map((e, t) => {
				let o = t === r;
				return T(
					a,
					{
						children: [
							_(`span`, {
								style: {
									whiteSpace:
										e.length <= 12 ? `nowrap` : `unset`,
								},
								children: e.match(uO)?.map((e, t) => {
									let r = ph();
									return (
										n.add(r),
										_(
											`span`,
											{ ref: r, style: i, children: e },
											e + t,
										)
									);
								}),
							}),
							o ? null : ` `,
						],
					},
					e + t + o,
				);
			});
		}
		case `word`: {
			let t = e.split(` `),
				r = t.length - 1;
			return t.map((e, t) => {
				let o = t === r,
					s = ph();
				return (
					n.add(s),
					T(
						a,
						{
							children: [
								_(`span`, { ref: s, style: i, children: e }),
								o ? null : ` `,
							],
						},
						e + t + o,
					)
				);
			});
		}
		case `element`:
		default:
			return e;
	}
}
function vh(e) {
	let t = e.type;
	switch (t) {
		case `appear`:
			return e.tokenization ?? `character`;
		default:
			V(t);
	}
}
function yh(e) {
	let t = [];
	return (
		R(e.x) && t.push(`translateX(${e.x}px)`),
		R(e.y) && t.push(`translateY(${e.y}px)`),
		R(e.scale) && t.push(`scale(${e.scale})`),
		R(e.rotate) && t.push(`rotate(${e.rotate}deg)`),
		R(e.rotateX) && t.push(`rotateX(${e.rotateX}deg)`),
		R(e.rotateY) && t.push(`rotateY(${e.rotateY}deg)`),
		R(e.skewX) && t.push(`skewX(${e.skewX}deg)`),
		R(e.skewY) && t.push(`skewY(${e.skewY}deg)`),
		t.join(` `)
	);
}
function bh(e, t, n, r) {
	if (!n || !n.effect) return;
	let i = n.type;
	switch (i) {
		case `appear`:
			switch (n.tokenization) {
				case `element`:
					return !e || !t
						? void 0
						: {
								opacity: n.effect.opacity,
								filter: r ? void 0 : n.effect.filter,
								transform: r ? void 0 : yh(n.effect),
							};
				case `line`:
				case `word`:
				case `character`:
				default:
					return !e || !t
						? { display: `inline-block` }
						: {
								display: `inline-block`,
								opacity: n.effect.opacity,
								filter: r ? void 0 : n.effect.filter,
								transform: r ? void 0 : yh(n.effect),
							};
			}
		default:
			V(i);
	}
}
function xh(e, t, n) {
	let r = Qi(() => new Set()),
		i = lo(),
		a = n || !i,
		o = _e(),
		s = w({
			hasMounted: !1,
			hasAnimatedOnce: !1,
			isAnimating: !1,
			effect: e,
		});
	s.current.effect = e;
	let l = e?.trigger ?? `onMount`,
		u = e?.target,
		f = e?.threshold;
	d(() => {
		if (!a || n) return;
		s.current.hasMounted = !0;
		function e() {
			let { effect: e } = s.current;
			if (
				!a ||
				!e ||
				(e?.repeat !== !0 && s.current.hasAnimatedOnce) ||
				(e?.type === `appear` && s.current.isAnimating)
			)
				return;
			Object.assign(s.current, { hasAnimatedOnce: !0, isAnimating: !0 });
			let t = e.type;
			switch (t) {
				case `appear`: {
					let {
							transition: t,
							startDelay: n,
							repeat: i,
							tokenization: a,
						} = e,
						c = { current: void 0 };
					return (
						Ch(
							a,
							e.effect,
							r,
							t,
							n,
							i,
							o,
							() => {
								Object.assign(s.current, { isAnimating: !1 });
							},
							c,
						),
						() => c.current?.()
					);
				}
				default:
					V(t);
			}
		}
		switch (l) {
			case `onMount`:
				e();
				return;
			case `onInView`: {
				let n = t?.current;
				return n ? ke(n, e, { amount: f ?? 0 }) : void 0;
			}
			case `onScrollTarget`: {
				let t = u?.ref?.current;
				return t
					? ke(t, e, {
							amount: f ?? 0,
							root: document,
							margin: u?.offset
								? `${u.offset}px 0px 0px 0px`
								: void 0,
						})
					: void 0;
			}
			default:
				V(l);
		}
	}, [a, r, n, t, u, f, l]);
	let p = !!e,
		m = e ? vh(e) : void 0;
	return c(
		() => ({
			getTokenizer: () => {
				if ((r.clear(), !p)) return;
				let {
						hasMounted: e,
						hasAnimatedOnce: t,
						effect: i,
					} = s.current,
					c = bh(a, n || Sh(e, t, i), s.current.effect, o);
				return {
					text: (e) => _h(e, m, r, o, c),
					props: (e) => {
						if (i?.tokenization !== `element`) return;
						let t = ph();
						return (r.add(t), { ref: t, style: { ...e, ...c } });
					},
				};
			},
			play: () => {
				let { effect: e } = s.current;
				if (!e) return;
				let t = e.type;
				switch (t) {
					case `appear`: {
						let { transition: t, startDelay: n } = e;
						Ch(m, e.effect, r, t, n, !1, o);
						break;
					}
					default:
						V(t);
				}
			},
		}),
		[a, p, r, n, m],
	);
}
function Sh(e, t, n) {
	return !(
		(e && n?.trigger === `onMount`) ||
		(t &&
			!n?.repeat &&
			(n?.trigger === `onInView` || n?.trigger === `onScrollTarget`))
	);
}
async function Ch(e = `character`, t, n, r, i = 0, a = !1, o, s, c) {
	let l = gh(t, o),
		u = new AbortController();
	switch ((c && (c.current = () => u.abort()), e)) {
		case `character`:
		case `element`:
		case `word`: {
			let e = await wh(n, u);
			if (
				e === null ||
				(Oe(e, l, {
					...r,
					restDelta: 0.001,
					delay: me(r?.delay ?? 0, { startDelay: i }),
				}).then(() => s?.()),
				!a || !c)
			)
				return;
			c.current = () => {
				Oe(e, o ? { opacity: t.opacity } : t, {
					...r,
					restDelta: 0.001,
					delay: me(r?.delay ?? 0, { startDelay: i }),
				});
			};
			return;
		}
		case `line`: {
			try {
				for (let e of n) await mh(e, u);
			} catch {
				return;
			}
			let e;
			if (
				(Ae.read(() => {
					((e = Th(n)),
						e.length !== 0 &&
							Ae.update(() => {
								let t = e.map((e, t) =>
									Oe(e, l, {
										...r,
										restDelta: 0.001,
										delay: i + t * (r?.delay ?? 0),
									}),
								);
								Promise.all(t).then(() => s?.());
							}));
				}),
				!a || !c)
			)
				return;
			c.current = () => {
				if (e.length === 0) return;
				let n = o ? { opacity: t.opacity } : t;
				e.forEach((e, t) => {
					Oe(e, n, {
						...r,
						restDelta: 0.001,
						delay: i + t * (r?.delay ?? 0),
					});
				});
			};
			return;
		}
		default:
			V(e);
	}
}
async function wh(e, t) {
	if (e.size === 0) return null;
	let n = [];
	for (let r of e)
		try {
			let e = await mh(r, t);
			e && n.push(e);
		} catch {
			return null;
		}
	return n;
}
function Th(e) {
	let t = [],
		n = [],
		r = null;
	for (let i of e) {
		if (!i.current) continue;
		let e = i.current.offsetTop,
			a = i.current.offsetHeight;
		(!a || r === null || e === r
			? n.push(i.current)
			: (t.push(n), (n = [i.current])),
			a && (r = e));
	}
	return (t.push(n), t);
}
function Eh(e) {
	let t = {};
	for (let n in e) (Je(n) || Xb(n)) && (t[n] = e[n]);
	return t;
}
function Dh(e) {
	return e.type === a;
}
function Oh(e) {
	return e.type === `br`;
}
function kh(e, n, r, a, o = {}, s, c = Dh(e) ? -1 : 0) {
	let l = i.toArray(e.props.children);
	tt(r) || (l = l.slice(0, 1));
	let u = !0;
	l = l.map((e) => {
		if (((!y(e) || !Oh(e)) && (u = !1), y(e)))
			return kh(e, n, r, a, o, s, c + 1);
		let t = tt(r) ? e : r;
		return L(t) && s ? s.text(t) : t;
	});
	let { "data-preset-tag": d, ...f } = e.props;
	if (L(e.type) || Ye(e.type)) {
		let t = Ne(e.type) || e.type,
			r = d || t,
			i = L(r) ? n?.[r] : void 0;
		((f.className = Uc(`framer-text`, f.className, i)),
			s && c === 0 && !u && Object.assign(f, s.props(f.style)));
		let p =
				t === `h1` ||
				t === `h2` ||
				t === `h3` ||
				t === `h4` ||
				t === `h5` ||
				t === `h6`,
			m = n?.anchor;
		if (p && m) {
			let e = Ah(l, o);
			f.id = e;
			let t = Uc(`framer-text`, m),
				n = _(`a`, { href: `#${e}`, className: t, children: l });
			((f.style = { ...(f.style ?? {}), scrollMarginTop: a }), (l = [n]));
		}
	}
	return t(e, f, ...l);
}
function Ah(e, t) {
	let n = fr(e.map(jh).join(``)),
		r = t[n] ?? 0;
	return (r > 0 && (n += `-${r}`), (t[n] = r + 1), n);
}
function jh(e) {
	return L(e) || R(e)
		? e.toString()
		: y(e)
			? jh(e.props.children)
			: Array.isArray(e)
				? e.map(jh).join(``)
				: ``;
}
function Mh(e) {
	let t = (e * Math.PI) / 180,
		n = { x: -Math.sin(t) * 100, y: Math.cos(t) * 100 },
		r = ui(n.x, n.y),
		i = ry(ui(0.5, 0.5), r),
		a = Y.points({ x: 0, y: 0, width: 1, height: 1 }),
		o = a
			.map((e) => ({ point: e, distance: ui.distance(r, e) }))
			.sort((e, t) => e.distance - t.distance),
		s = o[0]?.point,
		c = o[1]?.point;
	B(s && c, `linearGradientLine: Must have 2 closest points.`);
	let [l, u] = a.filter((e) => !ui.isEqual(e, s) && !ui.isEqual(e, c));
	B(l && u, `linearGradientLine: Must have 2 opposing points.`);
	let d = ry.intersection(i, ry(s, c)),
		f = ry.intersection(i, ry(l, u));
	return (
		B(d && f, `linearGradientLine: Must have a start and end point.`),
		ry(d, f)
	);
}
function Nh(e, t) {
	let n = Mh(e.angle),
		r = es(e),
		i = r[0]?.position ?? 0,
		a = r[r.length - 1]?.position ?? 1,
		o = ry.pointAtPercentDistance(n, i),
		s = ry.pointAtPercentDistance(n, a),
		c = Ke([i, a], [0, 1]);
	return {
		id: `id${t}g${Ex.hash(e)}`,
		x1: o.x,
		y1: o.y,
		x2: s.x,
		y2: s.y,
		stops: r.map((t) => ({
			color: t.value,
			alpha: bx.getAlpha(t.value) * e.alpha,
			position: c(t.position),
		})),
	};
}
function Ph(e, t) {
	return {
		id: `id${t}g${Ox.hash(e)}`,
		widthFactor: e.widthFactor,
		heightFactor: e.heightFactor,
		centerAnchorX: e.centerAnchorX,
		centerAnchorY: e.centerAnchorY,
		stops: es(e).map((t) => ({
			color: t.value,
			alpha: bx.getAlpha(t.value) * e.alpha,
			position: t.position,
		})),
	};
}
function Fh(e) {
	if (!L(e) || e.charAt(e.length - 1) !== `%`) return !1;
	let t = e.slice(0, -1);
	return R(parseFloat(t));
}
function Ih(e) {
	let t = e.slice(0, -1),
		n = parseFloat(t);
	return R(n) ? n : 50;
}
function Lh(e) {
	return Fh(e) ? Ih(e) / 100 : e === `left` ? 0 : e === `right` ? 1 : 0.5;
}
function Rh(e) {
	return Fh(e) ? Ih(e) / 100 : e === `top` ? 0 : e === `bottom` ? 1 : 0.5;
}
function zh(e, t, n, r) {
	if (
		((e = K.get(e, `#09F`)),
		!cx.isImageObject(e) || !e.pixelWidth || !e.pixelHeight)
	)
		return;
	let i = e.pixelWidth,
		a = e.pixelHeight,
		o,
		{ fit: s } = e,
		c = 1,
		l = 1,
		u = 0,
		d = 0;
	if (s === `fill` || s === `fit` || s === `tile` || !s) {
		let n = 1,
			f = 1,
			p = i / a,
			m = t.height * p,
			h = t.width / p,
			g = m / t.width,
			_ = h / t.height;
		if (s === `tile`) {
			((e.backgroundSize ??= 1),
				(c = Math.round(e.backgroundSize * (i / 2))),
				(l = Math.round(e.backgroundSize * (a / 2))));
			let n = t.x ?? 0,
				s = t.y ?? 0,
				f = 0,
				p = 0;
			(r && ((f = n), (p = s)),
				(u = (t.width - c) * Lh(e.positionX) + f),
				(d = (t.height - l) * Rh(e.positionY) + p),
				(o = `translate(${u + n}, ${d + s})`));
		} else
			((s === `fill` || !s ? _ > g : _ < g)
				? ((f = _), (d = (1 - _) * Rh(e.positionY)))
				: ((n = g), (u = (1 - g) * Lh(e.positionX))),
				(o = `translate(${u}, ${d}) scale(${n}, ${f})`));
	}
	return {
		id: `id${n}g-fillImage`,
		path: e.src ?? ``,
		transform: o,
		width: c,
		height: l,
		offsetX: u,
		offsetY: d,
	};
}
function Bh(e) {
	return e.startsWith(`data:${vO}`);
}
function Vh(e, t) {
	if (/^\w+:/u.test(e) && !Bh(e)) return e;
	t =
		typeof t == `number`
			? t <= 512
				? 512
				: t <= 1024
					? 1024
					: t <= 2048
						? 2048
						: 4096
			: void 0;
	let n = FramerEnvironment.current() === FramerEnvironment.export;
	return tx.assetResolver(e, { pixelSize: t, isExport: n }) ?? ``;
}
function Hh(e, t) {
	return (d(() => wO.subscribeToTemplate(e), [e]), wO.template(e, t));
}
function Uh(e) {
	try {
		let t = sh(e).getElementsByTagName(`svg`)[0];
		if (!t) throw Error(`no svg element found`);
		return t;
	} catch {
		return;
	}
}
function Wh(e, t) {
	Kh(e, Gh(t));
}
function Gh(e) {
	return e.replace(/[^\w\-:.]|^[^a-z]+/gi, ``);
}
function Kh(e, t) {
	(qh(e, t),
		Array.from(e.children).forEach((e) => {
			Kh(e, t);
		}));
}
function qh(e, t) {
	e.getAttributeNames().forEach((n) => {
		let r = e.getAttribute(n);
		if (!r) return;
		if (
			(n === `id` && e.setAttribute(n, `${t}_${r}`),
			n === `href` || n === `xlink:href`)
		) {
			let [i, a] = r.split(`#`);
			if (i) return;
			e.setAttribute(n, `#${t}_${a}`);
			return;
		}
		let i = `url(#`;
		if (r.includes(i)) {
			let a = r.replace(i, `${i}${t}_`);
			e.setAttribute(n, a);
		}
	});
}
function Jh(e) {
	if (!e) return;
	let t = /(-?[\d.]+)([a-z%]*)/u.exec(e);
	if (!(t?.[1] === void 0 || t?.[2] === void 0) && !t[2]?.startsWith(`%`))
		return Math.round(parseFloat(t[1]) * (TO[t[2]] || 1));
}
function Yh(e) {
	let t = Jh(e.getAttribute(`width`)),
		n = Jh(e.getAttribute(`height`));
	if (!(typeof t != `number` || typeof n != `number`) && !(t <= 0 || n <= 0))
		return { width: t, height: n };
}
function Xh(e) {
	return e.indexOf(`image`) >= 0;
}
function Zh(e) {
	return e.indexOf(`var(--`) >= 0;
}
function Qh(e) {
	return !!(
		e.borderRadius ||
		e.borderBottomLeftRadius ||
		e.borderBottomRightRadius ||
		e.borderTopLeftRadius ||
		e.borderTopRightRadius
	);
}
function $h(e, t) {
	let n = e.current;
	if (!n) return;
	let r = t.providedWindow ?? G,
		i = n.firstElementChild;
	if (!i || !(i instanceof r.SVGSVGElement)) return;
	if (!i.getAttribute(`viewBox`)) {
		let e = wO.getViewBox(t.svg);
		e && i.setAttribute(`viewBox`, e);
	}
	let { withExternalLayout: a, parentSize: o } = t;
	if (!a && ha(t) && o !== 1 && o !== 2) return;
	let { intrinsicWidth: s, intrinsicHeight: c, _constraints: l } = t;
	(i.viewBox?.baseVal?.width === 0 &&
		i.viewBox?.baseVal?.height === 0 &&
		H(s) &&
		H(c) &&
		i.setAttribute(`viewBox`, `0 0 ${s} ${c}`),
		l && l.aspectRatio
			? i.setAttribute(`preserveAspectRatio`, ``)
			: i.setAttribute(`preserveAspectRatio`, `none`),
		i.setAttribute(`width`, `100%`),
		i.setAttribute(`height`, `100%`));
}
function eg(e) {
	return e > AO ? `lazy` : void 0;
}
function tg(e, t, n) {
	let r = ig(t);
	(!n?.supportsExplicitInterCodegen &&
		!r.some((e) => e.explicitInter === !1) &&
		r.push({ explicitInter: !1, fonts: [] }),
		Object.assign(e, { fonts: r }));
}
function ng(e) {
	return e ? (e.fonts ?? Ur()) : Ur();
}
function rg(e) {
	return e.length === 0 ? [{ explicitInter: !1, fonts: [] }] : ig(e);
}
function ig(e) {
	let t = { explicitInter: !1, fonts: [] },
		n = [];
	for (let r of e)
		ag(r)
			? n.push({ explicitInter: r.explicitInter, fonts: r.fonts.map(og) })
			: t.fonts.push(og(r));
	return (t.fonts.length > 0 && n.push(t), n);
}
function ag(e) {
	return jO in e;
}
function og(e) {
	let t = sg(e) || cg(e) ? e : lg(e);
	return cg(t) ? t : ug(t);
}
function sg(e) {
	return `source` in e;
}
function cg(e) {
	return `cssFamilyName` in e;
}
function lg(e) {
	let t;
	return (
		(t = e.url.startsWith(`https://fonts.gstatic.com/s/`)
			? `google`
			: e.url.startsWith(
						`https://framerusercontent.com/third-party-assets/fontshare/`,
				  )
				? `fontshare`
				: `custom`),
		{ ...e, source: t }
	);
}
function ug(e) {
	let { family: t, ...n } = e,
		r = e.variationAxes && e.source !== `custom` ? `${t} ${dD}` : t;
	return { ...n, uiFamilyName: t, cssFamilyName: r };
}
function dg(e, t) {
	let n = `${e}-start`;
	(performance.mark(n), t());
	let r = `${e}-end`;
	(performance.mark(r), performance.measure(e, n, r));
}
function fg(e) {
	return e.loader;
}
function pg(e, t, n) {
	let r = fg(e);
	return r ? r.load(t, n) : Promise.resolve(void 0);
}
var mg,
	hg,
	gg,
	_g,
	vg,
	yg,
	bg,
	xg,
	Sg,
	Cg,
	wg,
	Tg,
	Eg,
	Dg,
	Og,
	kg,
	Ag,
	jg,
	Mg,
	Ng,
	Pg,
	Fg,
	Ig,
	Lg,
	Rg,
	zg,
	Bg,
	Vg,
	Hg,
	Ug,
	Wg,
	Gg,
	Kg,
	qg,
	Jg,
	Yg,
	Xg,
	Zg,
	Qg,
	G,
	$g,
	e_,
	t_,
	n_,
	r_,
	i_,
	a_,
	o_,
	s_,
	c_,
	l_,
	u_,
	d_,
	f_,
	p_,
	m_,
	h_,
	g_,
	__,
	v_,
	y_,
	b_,
	x_,
	S_,
	C_,
	w_,
	T_,
	E_,
	D_,
	O_,
	k_,
	A_,
	j_,
	M_,
	N_,
	P_,
	F_,
	I_,
	L_,
	R_,
	z_,
	B_,
	V_,
	H_,
	U_,
	W_,
	G_,
	K_,
	q_,
	J_,
	Y_,
	X_,
	Z_,
	Q_,
	$_,
	ev,
	tv,
	nv,
	rv,
	iv,
	av,
	ov,
	sv,
	cv,
	lv,
	uv,
	dv,
	fv,
	pv,
	mv,
	hv,
	gv,
	_v,
	vv,
	yv,
	bv,
	xv,
	Sv,
	Cv,
	wv,
	Tv,
	Ev,
	K,
	Dv,
	Ov,
	kv,
	Av,
	jv,
	Mv,
	Nv,
	Pv,
	Fv,
	Iv,
	Lv,
	Rv,
	zv,
	q,
	Bv,
	Vv,
	Hv,
	Uv,
	Wv,
	Gv,
	Kv,
	qv,
	Jv,
	Yv,
	FramerEnvironment,
	Xv,
	Zv,
	Qv,
	$v,
	ey,
	ty,
	ny,
	ry,
	Y,
	iy,
	ay,
	oy,
	sy,
	cy,
	ly,
	uy,
	dy,
	PropertyControlTypes,
	py,
	my,
	hy,
	gy,
	_y,
	vy,
	yy,
	by,
	xy,
	Sy,
	Cy,
	wy,
	Ty,
	Ey,
	Dy,
	Oy,
	ky,
	Ay,
	jy,
	My,
	Ny,
	Py,
	Fy,
	Iy,
	Ly,
	Ry,
	X,
	zy,
	By,
	Vy,
	Hy,
	Z,
	Uy,
	Wy,
	Gy,
	Ky,
	qy,
	Jy,
	Yy,
	Xy,
	Zy,
	Qy,
	$y,
	eb,
	tb,
	nb,
	rb,
	ib,
	ab,
	ob,
	sb,
	cb,
	lb,
	ub,
	db,
	fb,
	pb,
	mb,
	hb,
	gb,
	_b,
	vb,
	yb,
	bb,
	xb,
	Sb,
	Cb,
	wb,
	Tb,
	Eb,
	Db,
	Ob,
	kb,
	Ab,
	jb,
	Mb,
	Nb,
	Pb,
	Fb,
	Ib,
	Lb,
	Rb,
	zb,
	Bb,
	Vb,
	Hb,
	Ub,
	Wb,
	Gb,
	Kb,
	qb,
	Jb,
	Yb,
	Xb,
	Zb,
	Qb,
	$b,
	ex,
	tx,
	nx,
	rx,
	ix,
	ax,
	ox,
	sx,
	cx,
	lx,
	ux,
	dx,
	fx,
	px,
	mx,
	hx,
	gx,
	_x,
	vx,
	yx,
	bx,
	xx,
	Sx,
	Cx,
	wx,
	Tx,
	Ex,
	Dx,
	Ox,
	kx,
	Ax,
	jx,
	Mx,
	Nx,
	Px,
	Fx,
	Ix,
	Lx,
	Rx,
	zx,
	Bx,
	Vx,
	Hx,
	Ux,
	Wx,
	Gx,
	Kx,
	qx,
	Jx,
	Yx,
	Xx,
	Zx,
	Qx,
	$x,
	eS,
	tS,
	nS,
	rS,
	iS,
	aS,
	oS,
	sS,
	cS,
	lS,
	uS,
	dS,
	fS,
	pS,
	mS,
	hS,
	gS,
	_S,
	vS,
	yS,
	bS,
	xS,
	SS,
	CS,
	wS,
	TS,
	ES,
	DS,
	OS,
	kS,
	AS,
	jS,
	MS,
	NS,
	PS,
	FS,
	IS,
	LS,
	RS,
	zS,
	BS,
	VS,
	HS,
	US,
	WS,
	GS,
	KS,
	qS,
	JS,
	YS,
	XS,
	ZS,
	QS,
	$S,
	eC,
	tC,
	nC,
	rC,
	iC,
	aC,
	oC,
	sC,
	cC,
	lC,
	uC,
	dC,
	fC,
	pC,
	mC,
	hC,
	gC,
	_C,
	vC,
	yC,
	bC,
	xC,
	SC,
	CC,
	wC,
	TC,
	EC,
	DC,
	OC,
	kC,
	AC,
	jC,
	MC,
	NC,
	PC,
	FC,
	IC,
	LC,
	RC,
	zC,
	BC,
	VC,
	HC,
	UC,
	WC,
	GC,
	KC,
	qC,
	JC,
	YC,
	XC,
	ZC,
	QC,
	$C,
	ew,
	tw,
	nw,
	rw,
	iw,
	aw,
	ow,
	sw,
	cw,
	lw,
	uw,
	dw,
	fw,
	pw,
	mw,
	hw,
	gw,
	_w,
	vw,
	yw,
	bw,
	xw,
	Sw,
	Cw,
	ww,
	Tw,
	Ew,
	Dw,
	Ow,
	kw,
	Aw,
	jw,
	Mw,
	Nw,
	Pw,
	Fw,
	Iw,
	Lw,
	Rw,
	zw,
	Bw,
	Vw,
	Hw,
	Uw,
	Ww,
	Gw,
	Kw,
	qw,
	Jw,
	Yw,
	Xw,
	Zw,
	Qw,
	$w,
	eT,
	tT,
	nT,
	rT,
	iT,
	aT,
	oT,
	sT,
	cT,
	lT,
	uT,
	dT,
	fT,
	pT,
	mT,
	hT,
	gT,
	_T,
	vT,
	yT,
	bT,
	xT,
	ST,
	CT,
	wT,
	TT,
	Q,
	ET,
	DT,
	OT,
	kT,
	AT,
	jT,
	MT,
	NT,
	PT,
	FT,
	IT,
	$,
	LT,
	RT,
	zT,
	BT,
	VT,
	HT,
	UT,
	WT,
	GT,
	KT,
	qT,
	JT,
	YT,
	XT,
	ZT,
	QT,
	$T,
	eE,
	tE,
	nE,
	rE,
	iE,
	aE,
	oE,
	sE,
	cE,
	lE,
	uE,
	dE,
	fE,
	pE,
	mE,
	hE,
	gE,
	_E,
	vE,
	yE,
	bE,
	xE,
	SE,
	CE,
	wE,
	TE,
	EE,
	DE,
	OE,
	kE,
	AE,
	jE,
	ME,
	NE,
	PE,
	FE,
	IE,
	LE,
	RE,
	zE,
	BE,
	VE,
	HE,
	UE,
	QueryEngine,
	GE,
	KE,
	qE,
	JE,
	YE,
	XE,
	ZE,
	QE,
	$E,
	eD,
	tD,
	nD,
	rD,
	iD,
	aD,
	oD,
	sD,
	cD,
	lD,
	uD,
	dD,
	fD,
	pD,
	mD,
	hD,
	gD,
	_D,
	vD,
	yD,
	bD,
	xD,
	SD,
	CD,
	wD,
	TD,
	ED,
	DD,
	OD,
	kD,
	AD,
	jD,
	MD,
	ND,
	PD,
	FD,
	ID,
	LD,
	RD,
	zD,
	FontLoader,
	VD,
	HD,
	UD,
	WD,
	GD,
	KD,
	qD,
	JD,
	YD,
	XD,
	ZD,
	QD,
	$D,
	eO,
	tO,
	nO,
	rO,
	iO,
	aO,
	oO,
	sO,
	cO,
	lO,
	uO,
	dO,
	fO,
	pO,
	mO,
	hO,
	gO,
	_O,
	vO,
	yO,
	bO,
	xO,
	SO,
	CO,
	wO,
	TO,
	EO,
	DO,
	OO,
	kO,
	AO,
	jO,
	FramerUtils = lazyInit(() => {
		(ne(),
		//! Credit to Astro | MIT License
		/**
		 * @license Emotion v11.0.0
		 * MIT License
		 *
		 * Copyright (c) Emotion team and other contributors
		 *
		 * Permission is hereby granted, free of charge, to any person obtaining a copy
		 * of this software and associated documentation files (the "Software"), to deal
		 * in the Software without restriction, including without limitation the rights
		 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		 * copies of the Software, and to permit persons to whom the Software is
		 * furnished to do so, subject to the following conditions:
		 *
		 * The above copyright notice and this permission notice shall be included in all
		 * copies or substantial portions of the Software.
		 *
		 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		 * SOFTWARE.
		 */
		/*! Bundled license information:

react-is/cjs/react-is.production.min.js:
(** @license React v16.13.1
* react-is.production.min.js
*
* Copyright (c) Facebook, Inc. and its affiliates.
*
* This source code is licensed under the MIT license found in the
* LICENSE file in the root directory of this source tree.
*)
*/
			Se(),
			Me(),
			p(),
			D(),
			g(),
			(mg = Ve({
				"../../../node_modules/hsluv/dist/hsluv.cjs"(e) {
					(Object.defineProperty(e, `__esModule`, { value: !0 }),
						(e.Hsluv = void 0));
					var t = class e {
						constructor() {
							((this.hex = `#000000`),
								(this.rgb_r = 0),
								(this.rgb_g = 0),
								(this.rgb_b = 0),
								(this.xyz_x = 0),
								(this.xyz_y = 0),
								(this.xyz_z = 0),
								(this.luv_l = 0),
								(this.luv_u = 0),
								(this.luv_v = 0),
								(this.lch_l = 0),
								(this.lch_c = 0),
								(this.lch_h = 0),
								(this.hsluv_h = 0),
								(this.hsluv_s = 0),
								(this.hsluv_l = 0),
								(this.hpluv_h = 0),
								(this.hpluv_p = 0),
								(this.hpluv_l = 0),
								(this.r0s = 0),
								(this.r0i = 0),
								(this.r1s = 0),
								(this.r1i = 0),
								(this.g0s = 0),
								(this.g0i = 0),
								(this.g1s = 0),
								(this.g1i = 0),
								(this.b0s = 0),
								(this.b0i = 0),
								(this.b1s = 0),
								(this.b1i = 0));
						}
						static fromLinear(e) {
							return e <= 0.0031308
								? 12.92 * e
								: 1.055 * e ** (1 / 2.4) - 0.055;
						}
						static toLinear(e) {
							return e > 0.04045
								? ((e + 0.055) / 1.055) ** 2.4
								: e / 12.92;
						}
						static yToL(t) {
							return t <= e.epsilon
								? (t / e.refY) * e.kappa
								: 116 * (t / e.refY) ** (1 / 3) - 16;
						}
						static lToY(t) {
							return t <= 8
								? (e.refY * t) / e.kappa
								: e.refY * ((t + 16) / 116) ** 3;
						}
						static rgbChannelToHex(t) {
							let n = Math.round(t * 255),
								r = n % 16,
								i = ((n - r) / 16) | 0;
							return e.hexChars.charAt(i) + e.hexChars.charAt(r);
						}
						static hexToRgbChannel(t, n) {
							let r = e.hexChars.indexOf(t.charAt(n)),
								i = e.hexChars.indexOf(t.charAt(n + 1));
							return (r * 16 + i) / 255;
						}
						static distanceFromOriginAngle(e, t, n) {
							let r = t / (Math.sin(n) - e * Math.cos(n));
							return r < 0 ? 1 / 0 : r;
						}
						static distanceFromOrigin(e, t) {
							return Math.abs(t) / Math.sqrt(e ** 2 + 1);
						}
						static min6(e, t, n, r, i, a) {
							return Math.min(
								e,
								Math.min(
									t,
									Math.min(n, Math.min(r, Math.min(i, a))),
								),
							);
						}
						rgbToHex() {
							((this.hex = `#`),
								(this.hex += e.rgbChannelToHex(this.rgb_r)),
								(this.hex += e.rgbChannelToHex(this.rgb_g)),
								(this.hex += e.rgbChannelToHex(this.rgb_b)));
						}
						hexToRgb() {
							((this.hex = this.hex.toLowerCase()),
								(this.rgb_r = e.hexToRgbChannel(this.hex, 1)),
								(this.rgb_g = e.hexToRgbChannel(this.hex, 3)),
								(this.rgb_b = e.hexToRgbChannel(this.hex, 5)));
						}
						xyzToRgb() {
							((this.rgb_r = e.fromLinear(
								e.m_r0 * this.xyz_x +
									e.m_r1 * this.xyz_y +
									e.m_r2 * this.xyz_z,
							)),
								(this.rgb_g = e.fromLinear(
									e.m_g0 * this.xyz_x +
										e.m_g1 * this.xyz_y +
										e.m_g2 * this.xyz_z,
								)),
								(this.rgb_b = e.fromLinear(
									e.m_b0 * this.xyz_x +
										e.m_b1 * this.xyz_y +
										e.m_b2 * this.xyz_z,
								)));
						}
						rgbToXyz() {
							let t = e.toLinear(this.rgb_r),
								n = e.toLinear(this.rgb_g),
								r = e.toLinear(this.rgb_b);
							((this.xyz_x =
								0.41239079926595 * t +
								0.35758433938387 * n +
								0.18048078840183 * r),
								(this.xyz_y =
									0.21263900587151 * t +
									0.71516867876775 * n +
									0.072192315360733 * r),
								(this.xyz_z =
									0.019330818715591 * t +
									0.11919477979462 * n +
									0.95053215224966 * r));
						}
						xyzToLuv() {
							let t =
									this.xyz_x +
									15 * this.xyz_y +
									3 * this.xyz_z,
								n = 4 * this.xyz_x,
								r = 9 * this.xyz_y;
							(t === 0
								? ((n = NaN), (r = NaN))
								: ((n /= t), (r /= t)),
								(this.luv_l = e.yToL(this.xyz_y)),
								this.luv_l === 0
									? ((this.luv_u = 0), (this.luv_v = 0))
									: ((this.luv_u =
											13 * this.luv_l * (n - e.refU)),
										(this.luv_v =
											13 * this.luv_l * (r - e.refV))));
						}
						luvToXyz() {
							if (this.luv_l === 0) {
								((this.xyz_x = 0),
									(this.xyz_y = 0),
									(this.xyz_z = 0));
								return;
							}
							let t = this.luv_u / (13 * this.luv_l) + e.refU,
								n = this.luv_v / (13 * this.luv_l) + e.refV;
							((this.xyz_y = e.lToY(this.luv_l)),
								(this.xyz_x =
									0 -
									(9 * this.xyz_y * t) /
										((t - 4) * n - t * n)),
								(this.xyz_z =
									(9 * this.xyz_y -
										15 * n * this.xyz_y -
										n * this.xyz_x) /
									(3 * n)));
						}
						luvToLch() {
							((this.lch_l = this.luv_l),
								(this.lch_c = Math.sqrt(
									this.luv_u * this.luv_u +
										this.luv_v * this.luv_v,
								)),
								this.lch_c < 1e-8
									? (this.lch_h = 0)
									: ((this.lch_h =
											(Math.atan2(
												this.luv_v,
												this.luv_u,
											) *
												180) /
											Math.PI),
										this.lch_h < 0 &&
											(this.lch_h = 360 + this.lch_h)));
						}
						lchToLuv() {
							let e = (this.lch_h / 180) * Math.PI;
							((this.luv_l = this.lch_l),
								(this.luv_u = Math.cos(e) * this.lch_c),
								(this.luv_v = Math.sin(e) * this.lch_c));
						}
						calculateBoundingLines(t) {
							let n = (t + 16) ** 3 / 1560896,
								r = n > e.epsilon ? n : t / e.kappa,
								i = r * (284517 * e.m_r0 - 94839 * e.m_r2),
								a =
									r *
									(838422 * e.m_r2 +
										769860 * e.m_r1 +
										731718 * e.m_r0),
								o = r * (632260 * e.m_r2 - 126452 * e.m_r1),
								s = r * (284517 * e.m_g0 - 94839 * e.m_g2),
								c =
									r *
									(838422 * e.m_g2 +
										769860 * e.m_g1 +
										731718 * e.m_g0),
								l = r * (632260 * e.m_g2 - 126452 * e.m_g1),
								u = r * (284517 * e.m_b0 - 94839 * e.m_b2),
								d =
									r *
									(838422 * e.m_b2 +
										769860 * e.m_b1 +
										731718 * e.m_b0),
								f = r * (632260 * e.m_b2 - 126452 * e.m_b1);
							((this.r0s = i / o),
								(this.r0i = (a * t) / o),
								(this.r1s = i / (o + 126452)),
								(this.r1i = ((a - 769860) * t) / (o + 126452)),
								(this.g0s = s / l),
								(this.g0i = (c * t) / l),
								(this.g1s = s / (l + 126452)),
								(this.g1i = ((c - 769860) * t) / (l + 126452)),
								(this.b0s = u / f),
								(this.b0i = (d * t) / f),
								(this.b1s = u / (f + 126452)),
								(this.b1i = ((d - 769860) * t) / (f + 126452)));
						}
						calcMaxChromaHpluv() {
							let t = e.distanceFromOrigin(this.r0s, this.r0i),
								n = e.distanceFromOrigin(this.r1s, this.r1i),
								r = e.distanceFromOrigin(this.g0s, this.g0i),
								i = e.distanceFromOrigin(this.g1s, this.g1i),
								a = e.distanceFromOrigin(this.b0s, this.b0i),
								o = e.distanceFromOrigin(this.b1s, this.b1i);
							return e.min6(t, n, r, i, a, o);
						}
						calcMaxChromaHsluv(t) {
							let n = (t / 360) * Math.PI * 2,
								r = e.distanceFromOriginAngle(
									this.r0s,
									this.r0i,
									n,
								),
								i = e.distanceFromOriginAngle(
									this.r1s,
									this.r1i,
									n,
								),
								a = e.distanceFromOriginAngle(
									this.g0s,
									this.g0i,
									n,
								),
								o = e.distanceFromOriginAngle(
									this.g1s,
									this.g1i,
									n,
								),
								s = e.distanceFromOriginAngle(
									this.b0s,
									this.b0i,
									n,
								),
								c = e.distanceFromOriginAngle(
									this.b1s,
									this.b1i,
									n,
								);
							return e.min6(r, i, a, o, s, c);
						}
						hsluvToLch() {
							(this.hsluv_l > 99.9999999
								? ((this.lch_l = 100), (this.lch_c = 0))
								: this.hsluv_l < 1e-8
									? ((this.lch_l = 0), (this.lch_c = 0))
									: ((this.lch_l = this.hsluv_l),
										this.calculateBoundingLines(
											this.hsluv_l,
										),
										(this.lch_c =
											(this.calcMaxChromaHsluv(
												this.hsluv_h,
											) /
												100) *
											this.hsluv_s)),
								(this.lch_h = this.hsluv_h));
						}
						lchToHsluv() {
							if (this.lch_l > 99.9999999)
								((this.hsluv_s = 0), (this.hsluv_l = 100));
							else if (this.lch_l < 1e-8)
								((this.hsluv_s = 0), (this.hsluv_l = 0));
							else {
								this.calculateBoundingLines(this.lch_l);
								let e = this.calcMaxChromaHsluv(this.lch_h);
								((this.hsluv_s = (this.lch_c / e) * 100),
									(this.hsluv_l = this.lch_l));
							}
							this.hsluv_h = this.lch_h;
						}
						hpluvToLch() {
							(this.hpluv_l > 99.9999999
								? ((this.lch_l = 100), (this.lch_c = 0))
								: this.hpluv_l < 1e-8
									? ((this.lch_l = 0), (this.lch_c = 0))
									: ((this.lch_l = this.hpluv_l),
										this.calculateBoundingLines(
											this.hpluv_l,
										),
										(this.lch_c =
											(this.calcMaxChromaHpluv() / 100) *
											this.hpluv_p)),
								(this.lch_h = this.hpluv_h));
						}
						lchToHpluv() {
							if (this.lch_l > 99.9999999)
								((this.hpluv_p = 0), (this.hpluv_l = 100));
							else if (this.lch_l < 1e-8)
								((this.hpluv_p = 0), (this.hpluv_l = 0));
							else {
								this.calculateBoundingLines(this.lch_l);
								let e = this.calcMaxChromaHpluv();
								((this.hpluv_p = (this.lch_c / e) * 100),
									(this.hpluv_l = this.lch_l));
							}
							this.hpluv_h = this.lch_h;
						}
						hsluvToRgb() {
							(this.hsluvToLch(),
								this.lchToLuv(),
								this.luvToXyz(),
								this.xyzToRgb());
						}
						hpluvToRgb() {
							(this.hpluvToLch(),
								this.lchToLuv(),
								this.luvToXyz(),
								this.xyzToRgb());
						}
						hsluvToHex() {
							(this.hsluvToRgb(), this.rgbToHex());
						}
						hpluvToHex() {
							(this.hpluvToRgb(), this.rgbToHex());
						}
						rgbToHsluv() {
							(this.rgbToXyz(),
								this.xyzToLuv(),
								this.luvToLch(),
								this.lchToHpluv(),
								this.lchToHsluv());
						}
						rgbToHpluv() {
							(this.rgbToXyz(),
								this.xyzToLuv(),
								this.luvToLch(),
								this.lchToHpluv(),
								this.lchToHpluv());
						}
						hexToHsluv() {
							(this.hexToRgb(), this.rgbToHsluv());
						}
						hexToHpluv() {
							(this.hexToRgb(), this.rgbToHpluv());
						}
					};
					((e.Hsluv = t),
						(t.hexChars = `0123456789abcdef`),
						(t.refY = 1),
						(t.refU = 0.19783000664283),
						(t.refV = 0.46831999493879),
						(t.kappa = 903.2962962),
						(t.epsilon = 0.0088564516),
						(t.m_r0 = 3.240969941904521),
						(t.m_r1 = -1.537383177570093),
						(t.m_r2 = -0.498610760293),
						(t.m_g0 = -0.96924363628087),
						(t.m_g1 = 1.87596750150772),
						(t.m_g2 = 0.041555057407175),
						(t.m_b0 = 0.055630079696993),
						(t.m_b1 = -0.20397695888897),
						(t.m_b2 = 1.056971514242878));
				},
			})),
			(hg = Ve({
				"../../../node_modules/eventemitter3/index.js"(e, t) {
					var n = Object.prototype.hasOwnProperty,
						r = `~`;
					function i() {}
					Object.create &&
						((i.prototype = Object.create(null)),
						new i().__proto__ || (r = !1));
					function a(e, t, n) {
						((this.fn = e),
							(this.context = t),
							(this.once = n || !1));
					}
					function o(e, t, n, i, o) {
						if (typeof n != `function`)
							throw TypeError(`The listener must be a function`);
						var s = new a(n, i || e, o),
							c = r ? r + t : t;
						return (
							e._events[c]
								? e._events[c].fn
									? (e._events[c] = [e._events[c], s])
									: e._events[c].push(s)
								: ((e._events[c] = s), e._eventsCount++),
							e
						);
					}
					function s(e, t) {
						--e._eventsCount === 0
							? (e._events = new i())
							: delete e._events[t];
					}
					function c() {
						((this._events = new i()), (this._eventsCount = 0));
					}
					((c.prototype.eventNames = function () {
						var e = [],
							t,
							i;
						if (this._eventsCount === 0) return e;
						for (i in (t = this._events))
							n.call(t, i) && e.push(r ? i.slice(1) : i);
						return Object.getOwnPropertySymbols
							? e.concat(Object.getOwnPropertySymbols(t))
							: e;
					}),
						(c.prototype.listeners = function (e) {
							var t = r ? r + e : e,
								n = this._events[t];
							if (!n) return [];
							if (n.fn) return [n.fn];
							for (
								var i = 0, a = n.length, o = Array(a);
								i < a;
								i++
							)
								o[i] = n[i].fn;
							return o;
						}),
						(c.prototype.listenerCount = function (e) {
							var t = r ? r + e : e,
								n = this._events[t];
							return n ? (n.fn ? 1 : n.length) : 0;
						}),
						(c.prototype.emit = function (e, t, n, i, a, o) {
							var s = r ? r + e : e;
							if (!this._events[s]) return !1;
							var c = this._events[s],
								l = arguments.length,
								u,
								d;
							if (c.fn) {
								switch (
									(c.once &&
										this.removeListener(
											e,
											c.fn,
											void 0,
											!0,
										),
									l)
								) {
									case 1:
										return (c.fn.call(c.context), !0);
									case 2:
										return (c.fn.call(c.context, t), !0);
									case 3:
										return (c.fn.call(c.context, t, n), !0);
									case 4:
										return (
											c.fn.call(c.context, t, n, i),
											!0
										);
									case 5:
										return (
											c.fn.call(c.context, t, n, i, a),
											!0
										);
									case 6:
										return (
											c.fn.call(c.context, t, n, i, a, o),
											!0
										);
								}
								for (d = 1, u = Array(l - 1); d < l; d++)
									u[d - 1] = arguments[d];
								c.fn.apply(c.context, u);
							} else {
								var f = c.length,
									p;
								for (d = 0; d < f; d++)
									switch (
										(c[d].once &&
											this.removeListener(
												e,
												c[d].fn,
												void 0,
												!0,
											),
										l)
									) {
										case 1:
											c[d].fn.call(c[d].context);
											break;
										case 2:
											c[d].fn.call(c[d].context, t);
											break;
										case 3:
											c[d].fn.call(c[d].context, t, n);
											break;
										case 4:
											c[d].fn.call(c[d].context, t, n, i);
											break;
										default:
											if (!u)
												for (
													p = 1, u = Array(l - 1);
													p < l;
													p++
												)
													u[p - 1] = arguments[p];
											c[d].fn.apply(c[d].context, u);
									}
							}
							return !0;
						}),
						(c.prototype.on = function (e, t, n) {
							return o(this, e, t, n, !1);
						}),
						(c.prototype.once = function (e, t, n) {
							return o(this, e, t, n, !0);
						}),
						(c.prototype.removeListener = function (e, t, n, i) {
							var a = r ? r + e : e;
							if (!this._events[a]) return this;
							if (!t) return (s(this, a), this);
							var o = this._events[a];
							if (o.fn)
								o.fn === t &&
									(!i || o.once) &&
									(!n || o.context === n) &&
									s(this, a);
							else {
								for (
									var c = 0, l = [], u = o.length;
									c < u;
									c++
								)
									(o[c].fn !== t ||
										(i && !o[c].once) ||
										(n && o[c].context !== n)) &&
										l.push(o[c]);
								l.length
									? (this._events[a] =
											l.length === 1 ? l[0] : l)
									: s(this, a);
							}
							return this;
						}),
						(c.prototype.removeAllListeners = function (e) {
							var t;
							return (
								e
									? ((t = r ? r + e : e),
										this._events[t] && s(this, t))
									: ((this._events = new i()),
										(this._eventsCount = 0)),
								this
							);
						}),
						(c.prototype.off = c.prototype.removeListener),
						(c.prototype.addListener = c.prototype.on),
						(c.prefixed = r),
						(c.EventEmitter = c),
						t !== void 0 && (t.exports = c));
				},
			})),
			(gg = Ve({
				"../../../node_modules/hoist-non-react-statics/node_modules/react-is/cjs/react-is.production.min.js"(
					e,
				) {
					var t = typeof Symbol == `function` && Symbol.for,
						n = t ? Symbol.for(`react.element`) : 60103,
						r = t ? Symbol.for(`react.portal`) : 60106,
						i = t ? Symbol.for(`react.fragment`) : 60107,
						a = t ? Symbol.for(`react.strict_mode`) : 60108,
						o = t ? Symbol.for(`react.profiler`) : 60114,
						s = t ? Symbol.for(`react.provider`) : 60109,
						c = t ? Symbol.for(`react.context`) : 60110,
						l = t ? Symbol.for(`react.async_mode`) : 60111,
						u = t ? Symbol.for(`react.concurrent_mode`) : 60111,
						d = t ? Symbol.for(`react.forward_ref`) : 60112,
						f = t ? Symbol.for(`react.suspense`) : 60113,
						p = t ? Symbol.for(`react.suspense_list`) : 60120,
						m = t ? Symbol.for(`react.memo`) : 60115,
						h = t ? Symbol.for(`react.lazy`) : 60116,
						g = t ? Symbol.for(`react.block`) : 60121,
						_ = t ? Symbol.for(`react.fundamental`) : 60117,
						v = t ? Symbol.for(`react.responder`) : 60118,
						y = t ? Symbol.for(`react.scope`) : 60119;
					function b(e) {
						if (typeof e == `object` && e) {
							var t = e.$$typeof;
							switch (t) {
								case n:
									switch (((e = e.type), e)) {
										case l:
										case u:
										case i:
										case o:
										case a:
										case f:
											return e;
										default:
											switch (((e &&= e.$$typeof), e)) {
												case c:
												case d:
												case h:
												case m:
												case s:
													return e;
												default:
													return t;
											}
									}
								case r:
									return t;
							}
						}
					}
					function x(e) {
						return b(e) === u;
					}
					((e.AsyncMode = l),
						(e.ConcurrentMode = u),
						(e.ContextConsumer = c),
						(e.ContextProvider = s),
						(e.Element = n),
						(e.ForwardRef = d),
						(e.Fragment = i),
						(e.Lazy = h),
						(e.Memo = m),
						(e.Portal = r),
						(e.Profiler = o),
						(e.StrictMode = a),
						(e.Suspense = f),
						(e.isAsyncMode = function (e) {
							return x(e) || b(e) === l;
						}),
						(e.isConcurrentMode = x),
						(e.isContextConsumer = function (e) {
							return b(e) === c;
						}),
						(e.isContextProvider = function (e) {
							return b(e) === s;
						}),
						(e.isElement = function (e) {
							return (
								typeof e == `object` && !!e && e.$$typeof === n
							);
						}),
						(e.isForwardRef = function (e) {
							return b(e) === d;
						}),
						(e.isFragment = function (e) {
							return b(e) === i;
						}),
						(e.isLazy = function (e) {
							return b(e) === h;
						}),
						(e.isMemo = function (e) {
							return b(e) === m;
						}),
						(e.isPortal = function (e) {
							return b(e) === r;
						}),
						(e.isProfiler = function (e) {
							return b(e) === o;
						}),
						(e.isStrictMode = function (e) {
							return b(e) === a;
						}),
						(e.isSuspense = function (e) {
							return b(e) === f;
						}),
						(e.isValidElementType = function (e) {
							return (
								typeof e == `string` ||
								typeof e == `function` ||
								e === i ||
								e === u ||
								e === o ||
								e === a ||
								e === f ||
								e === p ||
								(typeof e == `object` &&
									!!e &&
									(e.$$typeof === h ||
										e.$$typeof === m ||
										e.$$typeof === s ||
										e.$$typeof === c ||
										e.$$typeof === d ||
										e.$$typeof === _ ||
										e.$$typeof === v ||
										e.$$typeof === y ||
										e.$$typeof === g))
							);
						}),
						(e.typeOf = b));
				},
			})),
			(_g = Ve({
				"../../../node_modules/hoist-non-react-statics/node_modules/react-is/index.js"(
					e,
					t,
				) {
					t.exports = gg();
				},
			})),
			(vg = Ve({
				"../../../node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js"(
					e,
					t,
				) {
					var n = _g(),
						r = {
							childContextTypes: !0,
							contextType: !0,
							contextTypes: !0,
							defaultProps: !0,
							displayName: !0,
							getDefaultProps: !0,
							getDerivedStateFromError: !0,
							getDerivedStateFromProps: !0,
							mixins: !0,
							propTypes: !0,
							type: !0,
						},
						i = {
							name: !0,
							length: !0,
							prototype: !0,
							caller: !0,
							callee: !0,
							arguments: !0,
							arity: !0,
						},
						a = {
							$$typeof: !0,
							render: !0,
							defaultProps: !0,
							displayName: !0,
							propTypes: !0,
						},
						o = {
							$$typeof: !0,
							compare: !0,
							defaultProps: !0,
							displayName: !0,
							propTypes: !0,
							type: !0,
						},
						s = {};
					((s[n.ForwardRef] = a), (s[n.Memo] = o));
					function c(e) {
						return n.isMemo(e) ? o : s[e.$$typeof] || r;
					}
					var l = Object.defineProperty,
						u = Object.getOwnPropertyNames,
						d = Object.getOwnPropertySymbols,
						f = Object.getOwnPropertyDescriptor,
						p = Object.getPrototypeOf,
						m = Object.prototype;
					function h(e, t, n) {
						if (typeof t != `string`) {
							if (m) {
								var r = p(t);
								r && r !== m && h(e, r, n);
							}
							var a = u(t);
							d && (a = a.concat(d(t)));
							for (
								var o = c(e), s = c(t), g = 0;
								g < a.length;
								++g
							) {
								var _ = a[g];
								if (
									!i[_] &&
									!(n && n[_]) &&
									!(s && s[_]) &&
									!(o && o[_])
								) {
									var v = f(t, _);
									try {
										l(e, _, v);
									} catch {}
								}
							}
						}
						return e;
					}
					t.exports = h;
				},
			})),
			(yg = Ve({
				"../../../node_modules/fontfaceobserver/fontfaceobserver.standalone.js"(
					e,
					t,
				) {
					(function () {
						function e(e, t) {
							document.addEventListener
								? e.addEventListener(`scroll`, t, !1)
								: e.attachEvent(`scroll`, t);
						}
						function n(e) {
							document.body
								? e()
								: document.addEventListener
									? document.addEventListener(
											`DOMContentLoaded`,
											function t() {
												(document.removeEventListener(
													`DOMContentLoaded`,
													t,
												),
													e());
											},
										)
									: document.attachEvent(
											`onreadystatechange`,
											function t() {
												(document.readyState ==
													`interactive` ||
													document.readyState ==
														`complete`) &&
													(document.detachEvent(
														`onreadystatechange`,
														t,
													),
													e());
											},
										);
						}
						function r(e) {
							((this.g = document.createElement(`div`)),
								this.g.setAttribute(`aria-hidden`, `true`),
								this.g.appendChild(document.createTextNode(e)),
								(this.h = document.createElement(`span`)),
								(this.i = document.createElement(`span`)),
								(this.m = document.createElement(`span`)),
								(this.j = document.createElement(`span`)),
								(this.l = -1),
								(this.h.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
								(this.i.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
								(this.j.style.cssText = `max-width:none;display:inline-block;position:absolute;height:100%;width:100%;overflow:scroll;font-size:16px;`),
								(this.m.style.cssText = `display:inline-block;width:200%;height:200%;font-size:16px;max-width:none;`),
								this.h.appendChild(this.m),
								this.i.appendChild(this.j),
								this.g.appendChild(this.h),
								this.g.appendChild(this.i));
						}
						function i(e, t) {
							e.g.style.cssText =
								`max-width:none;min-width:20px;min-height:20px;display:inline-block;overflow:hidden;position:absolute;width:auto;margin:0;padding:0;top:-999px;white-space:nowrap;font-synthesis:none;font:` +
								t +
								`;`;
						}
						function a(e) {
							var t = e.g.offsetWidth,
								n = t + 100;
							return (
								(e.j.style.width = n + `px`),
								(e.i.scrollLeft = n),
								(e.h.scrollLeft = e.h.scrollWidth + 100),
								e.l === t ? !1 : ((e.l = t), !0)
							);
						}
						function o(t, n) {
							function r() {
								var e = i;
								a(e) && e.g.parentNode !== null && n(e.l);
							}
							var i = t;
							(e(t.h, r), e(t.i, r), a(t));
						}
						function s(e, t, n) {
							((t ||= {}),
								(n ||= m),
								(this.family = e),
								(this.style = t.style || `normal`),
								(this.weight = t.weight || `normal`),
								(this.stretch = t.stretch || `normal`),
								(this.context = n));
						}
						var c = null,
							l = null,
							u = null,
							d = null;
						function f(e) {
							return (
								l === null &&
									(p(e) && /Apple/.test(m.navigator.vendor)
										? ((e =
												/AppleWebKit\/([0-9]+)(?:\.([0-9]+))(?:\.([0-9]+))/.exec(
													m.navigator.userAgent,
												)),
											(l =
												!!e &&
												603 > parseInt(e[1], 10)))
										: (l = !1)),
								l
							);
						}
						function p(e) {
							return (d === null && (d = !!e.document.fonts), d);
						}
						function h(e, t) {
							var n = e.style,
								r = e.weight;
							if (u === null) {
								var i = document.createElement(`div`);
								try {
									i.style.font = `condensed 100px sans-serif`;
								} catch {}
								u = i.style.font !== ``;
							}
							return [n, r, u ? e.stretch : ``, `100px`, t].join(
								` `,
							);
						}
						((s.prototype.load = function (e, t) {
							var a = this,
								s = e || `BESbswy`,
								l = 0,
								u = t || 3e3,
								d = new Date().getTime();
							return new Promise(function (e, t) {
								if (p(a.context) && !f(a.context)) {
									var g = new Promise(function (e, t) {
											function n() {
												new Date().getTime() - d >= u
													? t(
															Error(
																`` +
																	u +
																	`ms timeout exceeded`,
															),
														)
													: a.context.document.fonts
															.load(
																h(
																	a,
																	`"` +
																		a.family +
																		`"`,
																),
																s,
															)
															.then(function (t) {
																1 <= t.length
																	? e()
																	: setTimeout(
																			n,
																			25,
																		);
															}, t);
											}
											n();
										}),
										_ = new Promise(function (e, t) {
											l = setTimeout(function () {
												t(
													Error(
														`` +
															u +
															`ms timeout exceeded`,
													),
												);
											}, u);
										});
									Promise.race([_, g]).then(function () {
										(clearTimeout(l), e(a));
									}, t);
								} else
									n(function () {
										function n() {
											var t;
											((t =
												(v != -1 && y != -1) ||
												(v != -1 && b != -1) ||
												(y != -1 && b != -1)) &&
												((t =
													v != y &&
													v != b &&
													y != b) ||
													(c === null &&
														((t =
															/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(
																m.navigator
																	.userAgent,
															)),
														(c =
															!!t &&
															(536 >
																parseInt(
																	t[1],
																	10,
																) ||
																(parseInt(
																	t[1],
																	10,
																) === 536 &&
																	11 >=
																		parseInt(
																			t[2],
																			10,
																		))))),
													(t =
														c &&
														((v == x &&
															y == x &&
															b == x) ||
															(v == S &&
																y == S &&
																b == S) ||
															(v == C &&
																y == C &&
																b == C)))),
												(t = !t)),
												t &&
													(w.parentNode !== null &&
														w.parentNode.removeChild(
															w,
														),
													clearTimeout(l),
													e(a)));
										}
										function f() {
											if (new Date().getTime() - d >= u)
												(w.parentNode !== null &&
													w.parentNode.removeChild(w),
													t(
														Error(
															`` +
																u +
																`ms timeout exceeded`,
														),
													));
											else {
												var e =
													a.context.document.hidden;
												((!0 === e || e === void 0) &&
													((v = p.g.offsetWidth),
													(y = g.g.offsetWidth),
													(b = _.g.offsetWidth),
													n()),
													(l = setTimeout(f, 50)));
											}
										}
										var p = new r(s),
											g = new r(s),
											_ = new r(s),
											v = -1,
											y = -1,
											b = -1,
											x = -1,
											S = -1,
											C = -1,
											w = document.createElement(`div`);
										((w.dir = `ltr`),
											i(p, h(a, `sans-serif`)),
											i(g, h(a, `serif`)),
											i(_, h(a, `monospace`)),
											w.appendChild(p.g),
											w.appendChild(g.g),
											w.appendChild(_.g),
											a.context.document.body.appendChild(
												w,
											),
											(x = p.g.offsetWidth),
											(S = g.g.offsetWidth),
											(C = _.g.offsetWidth),
											f(),
											o(p, function (e) {
												((v = e), n());
											}),
											i(
												p,
												h(
													a,
													`"` +
														a.family +
														`",sans-serif`,
												),
											),
											o(g, function (e) {
												((y = e), n());
											}),
											i(
												g,
												h(
													a,
													`"` + a.family + `",serif`,
												),
											),
											o(_, function (e) {
												((b = e), n());
											}),
											i(
												_,
												h(
													a,
													`"` +
														a.family +
														`",monospace`,
												),
											));
									});
							});
						}),
							typeof t == `object`
								? (t.exports = s)
								: ((m.FontFaceObserver = s),
									(m.FontFaceObserver.prototype.load =
										s.prototype.load)));
					})();
				},
			})),
			(bg = () => {}),
			(xg = m !== void 0),
			(Sg = (() =>
				xg &&
				(n.webdriver ||
					/bot|-google|google-|yandex|ia_archiver|crawl|spider/iu.test(
						n.userAgent,
					)))()),
			(Cg = xg && typeof m.requestIdleCallback == `function`),
			(wg = (() => (Cg ? m.requestIdleCallback : setTimeout))()),
			(Tg = () => () => {}),
			(Eg = () => !0),
			(Dg = () => !1),
			(Og = new Map()),
			(kg = xg ? void 0 : new Set()),
			(Ag = `preload`),
			(jg = Object.keys),
			(Mg = `equals`),
			(Ng = (() => f.createContext({}))()),
			(Pg = (() => f.createContext({}))()),
			(Fg = []),
			(Ig = f.createContext(void 0)),
			(Ig.displayName = `LibraryFeaturesContext`),
			(Lg = (() => Ig.Provider)()),
			(Rg = () => f.useContext(Ig) ?? {}),
			(zg = `default`),
			(Bg = {
				Pending: `pending`,
				Fulfilled: `fulfilled`,
				Rejected: `rejected`,
			}),
			(Vg = class e {
				constructor(e, t) {
					((this.resolver = e),
						(this.cacheHash = t),
						I(this, `promiseState`, Bg.Pending),
						I(this, `preloadPromise`),
						I(this, `value`),
						I(this, `reason`),
						I(this, `read`, () => {
							if (this.promiseState === Bg.Fulfilled)
								return this.value;
							throw this.promiseState === Bg.Rejected
								? this.reason
								: Error(`Need to call preload() before read()`);
						}));
				}
				static is(t) {
					return t instanceof e;
				}
				get status() {
					return (this.preload(), this.state);
				}
				get state() {
					return this.promiseState;
				}
				then(e, t) {
					return this.promiseState === Bg.Fulfilled
						? Promise.resolve(this.value).then(e, t)
						: this.promiseState === Bg.Rejected
							? Promise.reject(this.reason).then(e, t)
							: this.readAsync().then(e, t);
				}
				preload() {
					if (this.promiseState !== Bg.Pending) return;
					if (this.preloadPromise) return this.preloadPromise;
					this.cacheHash !== void 0 &&
						kg !== void 0 &&
						kg.add(this.cacheHash);
					let e = (e) => {
							((this.promiseState = Bg.Fulfilled),
								(this.value = e));
						},
						t = (e) => {
							((this.promiseState = Bg.Rejected),
								(this.reason = e));
						},
						n;
					try {
						n =
							this.cacheHash && Og.has(this.cacheHash)
								? Og.get(this.cacheHash)
								: this.resolver();
					} catch (e) {
						t(e);
						return;
					}
					if (!st(n)) {
						e(n);
						return;
					}
					let r = n.then(e, t);
					return ((this.preloadPromise = r), r);
				}
				async readAsync() {
					return this.readMaybeAsync();
				}
				readMaybeAsync() {
					let e = this.preload();
					return e ? e.then(this.read) : this.read();
				}
				use() {
					let e = this.preload();
					if (e) throw e;
					return this.read();
				}
			}),
			(Hg = class extends Error {
				constructor(e, t, n, r) {
					(super(e),
						(this.name = `DevalueError`),
						(this.path = t.join(``)),
						(this.value = n),
						(this.root = r));
				}
			}),
			(Ug = Object.getOwnPropertyNames(Object.prototype)
				.sort()
				.join(`\0`)),
			(Wg = /^[a-zA-Z_$][a-zA-Z_$0-9]*$/),
			(Gg = `ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/`),
			(Kg = -1),
			(qg = -2),
			(Jg = -3),
			(Yg = -4),
			(Xg = -5),
			(Zg = -6),
			(Qg = -7),
			(G = xg
				? m
				: {
						addEventListener: () => {},
						removeEventListener: () => {},
						dispatchEvent: () => !1,
						ResizeObserver: void 0,
						onpointerdown: !1,
						onpointermove: !1,
						onpointerup: !1,
						ontouchstart: !1,
						ontouchmove: !1,
						ontouchend: !1,
						onmousedown: !1,
						onmousemove: !1,
						onmouseup: !1,
						devicePixelRatio: 1,
						scrollX: 0,
						scrollY: 0,
						location: {
							hash: ``,
							hostname: ``,
							href: ``,
							origin: ``,
							pathname: ``,
							search: ``,
						},
						document: { baseURI: ``, cookie: ``, referrer: null },
						setTimeout: () => 0,
						clearTimeout: () => {},
						setInterval: () => 0,
						clearInterval: () => {},
						requestAnimationFrame: () => 0,
						cancelAnimationFrame: () => {},
						requestIdleCallback: () => 0,
						getSelection: () => null,
						matchMedia: (e) => ({
							matches: !1,
							media: e,
							onchange: () => {},
							addEventListener: () => {},
							removeEventListener: () => {},
							addListener: () => {},
							removeListener: () => {},
							dispatchEvent: () => !1,
						}),
						innerHeight: 0,
						innerWidth: 0,
						SVGSVGElement: {},
						scheduler: void 0,
						open: function (e, t, n) {},
						__framer_events: [],
					}),
			($g = 2),
			(e_ = /^[a-z0-9]+(?:-[a-z0-9]+)*$/u),
			(t_ = { QueryCache: 0, CollectionUtilsCache: 1 }),
			(r_ = class {
				constructor() {
					(I(this, `payload`, nn()), I(this, `isEmpty`, !0));
				}
				set(e, t, n) {
					(this.payload[e].set(t, n), (this.isEmpty = !1));
				}
				has(e, t) {
					return this.payload[e].has(t);
				}
				get(e, t) {
					return this.payload[e].get(t);
				}
				toString() {
					if (!this.isEmpty)
						try {
							return Qt(this.payload);
						} catch (e) {
							console.error(
								`Failed to serialize handover data.`,
								e,
							);
							return;
						}
				}
				clear() {
					for (let e of Object.values(this.payload)) e.clear();
					this.isEmpty = !0;
				}
			}),
			(i_ = (() => (xg ? void 0 : new r_()))()),
			(a_ = (() => t_.CollectionUtilsCache)()),
			(o_ = new WeakMap()),
			(s_ = s(void 0)),
			(c_ = class {
				constructor(e, t) {
					((this.collectionId = t),
						I(this, `module`),
						I(this, `cacheMap`, new Map()),
						(this.module = new Vg(async () => {
							try {
								let t = await e();
								return (
									B(t, `Couldn't find CollectionUtils`),
									t
								);
							} catch (e) {
								console.error(
									ut(
										`Failed to import collection module.`,
										e,
									),
								);
								return;
							}
						})));
				}
				callUtilsMethod(e, t, n) {
					let r = cn(n),
						i = ln(e, this.collectionId, r, t);
					if (this.cacheMap.has(i)) {
						let e = this.cacheMap.get(i)?.readMaybeAsync();
						if (i_ !== void 0) {
							if (st(e))
								return e.then((e) => (i_.set(a_, i, e), e));
							i_.set(a_, i, e);
						}
						return e;
					}
					if (on(a_, i)) {
						let e = sn(a_, i);
						return (this.cacheMap.set(i, new Vg(() => e)), e);
					}
					let a = this.module.readMaybeAsync(),
						o = st(a),
						s;
					try {
						s = o ? a.then((r) => r?.[e](t, n)) : a?.[e](t, n);
					} catch (e) {
						(console.error(
							ut(`Failed to call CollectionUtils method.`, e),
						),
							(s = void 0));
					}
					if (s === void 0) {
						(i_ !== void 0 && i_.set(a_, i, s),
							this.cacheMap.set(i, s));
						return;
					}
					let c = new Vg(() =>
						s
							.then((e) => (i_ !== void 0 && i_.set(a_, i, e), e))
							.catch((e) => {
								console.error(
									ut(
										`Failed to call CollectionUtils method.`,
										e,
									),
								);
							}),
					);
					return (this.cacheMap.set(i, c), c.readMaybeAsync());
				}
				getSlugByRecordId(e, t) {
					return this.callUtilsMethod(`getSlugByRecordId`, e, t);
				}
				getRecordIdBySlug(e, t) {
					return this.callUtilsMethod(`getRecordIdBySlug`, e, t);
				}
			}),
			(l_ = (() => G.scheduler && `yield` in G.scheduler)()),
			(u_ = (() => G.scheduler && `postTask` in G.scheduler)()),
			(d_ = new Set()),
			(f_ = !Sg),
			(p_ = 46),
			(m_ = 47),
			(h_ = (e, t) => e.charCodeAt(t)),
			(g_ = (e, t) => e.lastIndexOf(t)),
			(__ = (e, t, n) => e.slice(t, n)),
			(v_ = !1),
			(y_ = `/`),
			(b_ = (e) => e === m_),
			(x_ = new Set([`/404.html`, `/404`, `/404/`])),
			(S_ = RegExp(`:([a-z]\\w*)`, `gi`)),
			(C_ = `framer_variant`),
			(w_ = f.createContext({ global: void 0, routes: {} })),
			(T_ = 10),
			(E_ = 1e4),
			(D_ = (e) => `--view-transition-${e}`),
			(O_ = {
				circle: {
					makeKeyframe: (e, t) => {
						let { x: n, y: r } = Ln(e);
						return t === `start`
							? `clip-path: circle(0 at ${n}px ${r}px);`
							: `clip-path: circle(${Math.hypot(Math.max(n, m.innerWidth - n), Math.max(r, m.innerHeight - r))}px at ${n}px ${r}px);`;
					},
				},
				conic: {
					makeKeyframe: (e, t, n) => {
						let r = 0;
						return (
							((n === `exit` &&
								e.angularDirection === `clockwise` &&
								t === `start`) ||
								(n === `exit` &&
									e.angularDirection ===
										`counter-clockwise` &&
									t === `end`) ||
								(n === `enter` &&
									e.angularDirection ===
										`counter-clockwise` &&
									t === `start`) ||
								(n === `enter` &&
									e.angularDirection === `clockwise` &&
									t === `end`)) &&
								(r = (e.sweepAngle / 360) * 100),
							`${D_(`conic-offset`)}: ${r}%;`
						);
					},
					makeStyles: (e, t) => {
						let n = `var(${D_(`conic-offset`)})`,
							r =
								(t === `exit` &&
									e.angularDirection === `clockwise`) ||
								(t === `enter` &&
									e.angularDirection === `counter-clockwise`),
							i = r ? `transparent` : `black`,
							a = r ? `black` : `transparent`,
							o = `conic-gradient(from `;
						return (
							(o += `${e.angle}deg at ${e.x} ${e.y}, `),
							(o += `${i} 0%, ${i} ${n}, `),
							(o += `${a} ${n}, ${a} 100%)`),
							`mask-image: ${o}; -webkit-mask-image: ${o};`
						);
					},
					makePropertyRules: () => `
        @property ${D_(`conic-offset`)} {
            syntax: '<percentage>';
            initial-value: 0%;
            inherits: false;
        }
    `,
				},
				inset: {
					makeKeyframe: (e, t) => {
						let { x: n, y: r } = Ln(e),
							i = m.innerHeight - r,
							a = m.innerWidth - n;
						return t === `start`
							? `clip-path: inset(${r}px ${a}px ${i}px ${n}px round ${e.round}px);`
							: `clip-path: inset(0 round 0);`;
					},
				},
				blinds: {
					makeKeyframe: (e, t, n) => {
						let [, r] = In(e.width),
							i = `0${r}`;
						return (
							((t === `start` && n === `exit`) ||
								(t === `end` && n === `enter`)) &&
								(i = e.width),
							`${D_(`blinds-width`)}: ${i};`
						);
					},
					makeStyles: (e, t) => {
						let n = `var(${D_(`blinds-width`)})`,
							r = t === `exit` ? `transparent` : `black`,
							i = t === `exit` ? `black` : `transparent`,
							a = `repeating-linear-gradient(`;
						return (
							(a += e.angle + 90 + `deg, `),
							(a += `${r} 0px, ${r} ${n}, `),
							(a += `${i} ${n}, ${i} ${e.width})`),
							`mask-image: ${a}; -webkit-mask-image: ${a};`
						);
					},
					makePropertyRules: () => `
            @property ${D_(`blinds-width`)} {
                syntax: '<length-percentage>';
                initial-value: 0px;
                inherits: false;
            }
        `,
				},
				wipe: {
					makeKeyframe: (e, t, n) => {
						let r =
							(t === `start` && n === `exit`) ||
							(t === `end` && n === `enter`)
								? 1
								: 0;
						return `${D_(`wipe-offset`)}: ${r};`;
					},
					makeStyles: (e, t) => {
						let n = `var(${D_(`wipe-offset`)})`,
							r = t === `exit` ? `transparent` : `black`,
							i = t === `exit` ? `black` : `transparent`,
							a = `linear-gradient(`;
						return (
							(a += e.angle + 90 + `deg, `),
							(a += `${r} calc(calc(0% - ${e.width}) + calc(calc(100% + ${e.width}) * ${n})), `),
							(a += `${i} calc(calc(100% + ${e.width}) * ${n}))`),
							`mask-image: ${a}; -webkit-mask-image: ${a};`
						);
					},
					makePropertyRules: () => `
            @property ${D_(`wipe-offset`)} {
                syntax: '<number>';
                initial-value: 0;
                inherits: false;
            }
        `,
				},
			}),
			(k_ = {
				opacity: 1,
				x: `0px`,
				y: `0px`,
				scale: 1,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				mask: void 0,
			}),
			(A_ = `view-transition-styles`),
			(j_ = {
				x: `0px`,
				y: `0px`,
				scale: 1,
				opacity: 1,
				rotate3d: !1,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				mask: void 0,
				transition: {
					type: `tween`,
					delay: 0,
					duration: 0.2,
					ease: [0.27, 0, 0.51, 1],
					stiffness: 400,
					damping: 30,
					mass: 1,
				},
			}),
			(M_ = () => {}),
			(P_ = () => {
				(N_ ||
					((N_ = document.createElement(`div`)),
					N_.setAttribute(`aria-live`, `assertive`),
					N_.setAttribute(`aria-atomic`, `true`),
					(N_.style.position = `absolute`),
					(N_.style.transform = `scale(0)`),
					document.body.append(N_)),
					setTimeout(() => {
						N_.textContent = document.title;
					}, 60));
			}),
			(F_ = !0),
			(I_ = (() => {
				if (n === void 0) return !1;
				let e = n.userAgent,
					t = e.indexOf(`Chrome/`),
					r = +e.slice(t + 7, e.indexOf(`.`, t));
				return r > 101 && r < 128;
			})()),
			(L_ = (() => xg && typeof m.navigation?.back == `function`)()),
			(R_ = /[\s?#[\]@!$&'*+,;:="<>%{}|\\^`/]+/gu),
			(z_ = f.createContext(null)),
			(B_ = (() => {
				let e = s(`preview`);
				return ((e.displayName = `RenderTargetEnvironmentContext`), e);
			})()),
			(V_ = async () => {}),
			(H_ = { activeLocale: null, locales: [], setLocale: V_ }),
			(U_ = (() => {
				let e = f.createContext(H_);
				return ((e.displayName = `LocaleInfoContext`), e);
			})()),
			(W_ = (() => {
				let e = f.createContext(`ltr`);
				return ((e.displayName = `LayoutDirectionContext`), e);
			})()),
			(G_ = new Set()),
			(K_ = (() => {
				let e = s({
					urlSearchParams: new URLSearchParams(),
					replaceSearchParams: async () => {},
				});
				return ((e.displayName = `URLSearchParamsContext`), e);
			})()),
			(q_ = `__f_replay`),
			(J_ = `__f_replay_ignore`),
			(Y_ = () => xg),
			(X_ =
				`mousedown.mouseup.touchcancel.touchend.touchstart.auxclick.dblclick.pointercancel.pointerdown.pointerup.dragend.dragstart.drop.compositionend.compositionstart.keydown.keypress.keyup.input.textInput.copy.cut.paste.click.change.contextmenu.reset`.split(
					`.`,
				)),
			(Z_ = (e) => {
				e.target?.closest?.(`#main`) &&
					(kr(e) ||
						(e.stopPropagation(),
						performance.mark(
							`framer-react-event-handling-prevented`,
						)));
			}),
			(Q_ = !1),
			(hv = [Pr]),
			(mv = [Pr]),
			(pv = [Pr]),
			(fv = [Pr]),
			(dv = [Pr]),
			(uv = [Pr]),
			(lv = [Pr]),
			(cv = [Pr]),
			(sv = [Pr]),
			(ov = [Pr]),
			(av = [Pr]),
			(iv = [Pr]),
			(rv = [Pr]),
			(nv = [Pr]),
			(tv = [Pr]),
			(ev = [Pr]),
			($_ = [Pr]),
			(_v = class {
				constructor() {
					(Re(gv, 5, this),
						I(this, `render`, {
							markStart: () => this.markRenderStart(),
							markEnd: () => this.markRenderEnd(),
						}),
						I(this, `mutationEffects`, {
							measure: () => this.measureMutationEffects(),
						}),
						I(this, `useInsertionEffects`, {
							markStart: () =>
								this.markUseInsertionEffectsStart(),
							markRouterStart: () =>
								this.markUseInsertionEffectRouterStart(),
							markEnd: () => this.markUseInsertionEffectsEnd(),
						}),
						I(this, `useLayoutEffects`, {
							markStart: () => this.markUseLayoutEffectsStart(),
							markRouterStart: () =>
								this.markRouterUseLayoutEffectStart(),
							markEnd: () => this.markUseLayoutEffectsEnd(),
						}),
						I(this, `useEffects`, {
							markStart: () => this.markUseEffectsStart(),
							markRouterStart: () =>
								this.markUseEffectsRouterStart(),
							markEnd: () => this.markUseEffectsEnd(),
							markAreSynchronous: () =>
								this.markUseEffectsAreSynchronous(),
						}),
						I(this, `browserRendering`, {
							hasStarted: !1,
							requestAnimationFrame: {
								markStart: () => this.markRafStart(),
								markEnd: () => this.markRafEnd(),
							},
							layoutStylePaint: {
								markEnd: () => this.markLayoutStylePaintEnd(),
							},
						}),
						I(this, `unattributedHydrationOverhead`, {
							measure: () =>
								this.measureUnattributedHydrationOverhead(),
						}));
				}
				markRenderStart() {
					performance.mark(`framer-hydration-start`);
				}
				markRenderEnd() {
					(performance.mark(`framer-hydration-render-end`),
						Fr(
							`framer-hydration-render`,
							`framer-hydration-start`,
							`framer-hydration-render-end`,
						));
				}
				markUseInsertionEffectsStart() {
					performance.mark(
						`framer-hydration-insertion-effects-start`,
					);
				}
				markUseInsertionEffectRouterStart() {
					performance.mark(
						`framer-hydration-router-insertion-effect`,
					);
				}
				markUseInsertionEffectsEnd() {
					(performance.mark(`framer-hydration-insertion-effects-end`),
						Fr(
							`framer-hydration-insertion-effects`,
							`framer-hydration-insertion-effects-start`,
							`framer-hydration-insertion-effects-end`,
						));
				}
				markUseLayoutEffectsStart() {
					performance.mark(`framer-hydration-layout-effects-start`);
				}
				markRouterUseLayoutEffectStart() {
					performance.mark(`framer-hydration-router-layout-effect`);
				}
				markUseLayoutEffectsEnd() {
					(performance.mark(`framer-hydration-layout-effects-end`),
						Fr(
							`framer-hydration-layout-effects`,
							`framer-hydration-layout-effects-start`,
							`framer-hydration-layout-effects-end`,
						));
				}
				markUseEffectsStart() {
					performance.mark(`framer-hydration-effects-start`);
				}
				markUseEffectsRouterStart() {
					performance.mark(`framer-hydration-router-effect`);
				}
				markUseEffectsAreSynchronous() {
					performance.mark(`framer-hydration-effects-sync`);
				}
				markUseEffectsEnd() {
					(performance.mark(`framer-hydration-effects-end`),
						Fr(
							`framer-hydration-effects`,
							performance.getEntriesByName(
								`framer-hydration-first-paint`,
							)[0]?.name ??
								performance.getEntriesByName(
									`framer-hydration-effects-start`,
								)[0]?.name,
							`framer-hydration-effects-end`,
						));
				}
				markRafStart() {
					((this.browserRendering.hasStarted = !0),
						performance.mark(
							`framer-hydration-browser-render-start`,
						));
				}
				markRafEnd() {
					(performance.mark(`framer-hydration-browser-raf-end`),
						Fr(
							`framer-hydration-raf`,
							`framer-hydration-browser-render-start`,
							`framer-hydration-browser-raf-end`,
						));
				}
				markLayoutStylePaintEnd() {
					(performance.mark(`framer-hydration-first-paint`),
						Fr(
							`framer-hydration-time-to-first-paint`,
							`framer-hydration-start`,
							`framer-hydration-first-paint`,
						),
						Fr(
							`framer-hydration-browser-render`,
							`framer-hydration-browser-raf-end`,
							`framer-hydration-first-paint`,
						));
				}
				measureMutationEffects() {
					Fr(
						`framer-hydration-commit`,
						`framer-hydration-layout-effects-end`,
						`framer-hydration-effects-start`,
					);
				}
				measureUnattributedHydrationOverhead() {
					Fr(
						`framer-hydration-uho`,
						performance.getEntriesByName(
							`framer-hydration-effects-end`,
						)[0]?.name ??
							performance.getEntriesByName(
								`framer-hydration-layout-effects-end`,
							)[0]?.name,
						`framer-hydration-browser-render-start`,
					);
				}
			}),
			(gv = ye(null)),
			ue(gv, 1, `markRenderStart`, hv, _v),
			ue(gv, 1, `markRenderEnd`, mv, _v),
			ue(gv, 1, `markUseInsertionEffectsStart`, pv, _v),
			ue(gv, 1, `markUseInsertionEffectRouterStart`, fv, _v),
			ue(gv, 1, `markUseInsertionEffectsEnd`, dv, _v),
			ue(gv, 1, `markUseLayoutEffectsStart`, uv, _v),
			ue(gv, 1, `markRouterUseLayoutEffectStart`, lv, _v),
			ue(gv, 1, `markUseLayoutEffectsEnd`, cv, _v),
			ue(gv, 1, `markUseEffectsStart`, sv, _v),
			ue(gv, 1, `markUseEffectsRouterStart`, ov, _v),
			ue(gv, 1, `markUseEffectsAreSynchronous`, av, _v),
			ue(gv, 1, `markUseEffectsEnd`, iv, _v),
			ue(gv, 1, `markRafStart`, rv, _v),
			ue(gv, 1, `markRafEnd`, nv, _v),
			ue(gv, 1, `markLayoutStylePaintEnd`, tv, _v),
			ue(gv, 1, `measureMutationEffects`, ev, _v),
			ue(gv, 1, `measureUnattributedHydrationOverhead`, $_, _v),
			be(gv, _v),
			(yv = !1),
			(bv = { Start: Br, End: Vr }),
			(xv = class extends Error {}),
			(Sv = class extends v {
				constructor(e) {
					(super(e),
						(this.state = {
							error: void 0,
							forceUpdateKey: e.forceUpdateKey,
						}));
				}
				static getDerivedStateFromError(e) {
					return { error: e };
				}
				static getDerivedStateFromProps(e, t) {
					if (e.forceUpdateKey !== t.forceUpdateKey) {
						let n = { forceUpdateKey: e.forceUpdateKey };
						return (t.error && (n.error = void 0), n);
					}
					return null;
				}
				render() {
					if (this.state.error === void 0) return this.props.children;
					if (!(this.state.error instanceof xv))
						throw this.state.error;
					let { notFoundPage: e, defaultPageStyle: t } = this.props;
					if (!e) throw this.state.error;
					return Hr(e, t);
				}
			}),
			(Cv = Object.freeze([])),
			(Tv = new Set()),
			(Ev = class {
				constructor() {
					(I(this, `observers`, new Set()),
						I(this, `transactions`, {}));
				}
				add(e) {
					this.observers.add(e);
					let t = !1;
					return () => {
						t || ((t = !0), this.remove(e));
					};
				}
				remove(e) {
					this.observers.delete(e);
				}
				notify(e, t) {
					if (t) {
						let n = this.transactions[t] || e;
						((n.value = e.value), (this.transactions[t] = n));
					} else this.callObservers(e);
				}
				finishTransaction(e) {
					let t = this.transactions[e];
					return (
						delete this.transactions[e],
						this.callObservers(t, e)
					);
				}
				callObservers(e, t) {
					let n = [];
					return (
						new Set(this.observers).forEach((r) => {
							typeof r == `function`
								? r(e, t)
								: (r.update(e, t), n.push(r.finish));
						}),
						n
					);
				}
			}),
			(K = (() => {
				function e(e) {
					return (
						ii(
							`Animatable()`,
							`2.0.0`,
							`the new animation API (https://www.framer.com/api/animation/)`,
						),
						ai(e) ? e : new kv(e)
					);
				}
				return (
					(e.transaction = (e) => {
						let t = Math.random(),
							n = new Set();
						e((e, r) => {
							(e.set(r, t), n.add(e));
						}, t);
						let r = [];
						(n.forEach((e) => {
							r.push(...e.finishTransaction(t));
						}),
							r.forEach((e) => {
								e(t);
							}));
					}),
					(e.getNumber = (t, n = 0) => e.get(t, n)),
					(e.get = (e, t) => (e == null ? t : ai(e) ? e.get() : e)),
					(e.objectToValues = (e) => {
						if (!e) return e;
						let t = {};
						for (let n in e) {
							let r = e[n];
							ai(r) ? (t[n] = r.get()) : (t[n] = r);
						}
						return t;
					}),
					e
				);
			})()),
			(Dv = `onUpdate`),
			(Ov = `finishTransaction`),
			(kv = class {
				constructor(e) {
					((this.value = e), I(this, `observers`, new Ev()));
				}
				static interpolationFor(e, t) {
					if (ai(e)) return oi(e, t);
				}
				get() {
					return this.value;
				}
				set(e, t) {
					let n = this.value;
					(ai(e) && (e = e.get()), (this.value = e));
					let r = { value: e, oldValue: n };
					this.observers.notify(r, t);
				}
				finishTransaction(e) {
					return this.observers.finishTransaction(e);
				}
				onUpdate(e) {
					return this.observers.add(e);
				}
			}),
			((e) => {
				((e.isQuadrilateralPoints = (e) => e?.length === 4),
					(e.add = (...e) =>
						e.reduce((e, t) => ({ x: e.x + t.x, y: e.y + t.y }), {
							x: 0,
							y: 0,
						})),
					(e.subtract = (e, t) => ({ x: e.x - t.x, y: e.y - t.y })),
					(e.multiply = (e, t) => ({ x: e.x * t, y: e.y * t })),
					(e.divide = (e, t) => ({ x: e.x / t, y: e.y / t })),
					(e.absolute = (e) => ({
						x: Math.abs(e.x),
						y: Math.abs(e.y),
					})),
					(e.reverse = (e) => ({ x: e.x * -1, y: e.y * -1 })),
					(e.pixelAligned = (e, t = { x: 0, y: 0 }) => ({
						x: ci(e.x, t.x),
						y: ci(e.y, t.y),
					})),
					(e.distance = (e, t) => {
						let n = Math.abs(e.x - t.x),
							r = Math.abs(e.y - t.y);
						return Math.sqrt(n * n + r * r);
					}),
					(e.angle = (e, t) =>
						(Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI -
						90),
					(e.angleFromX = (e, t) =>
						(Math.atan2(t.y - e.y, t.x - e.x) * 180) / Math.PI),
					(e.isEqual = (e, t) => e.x === t.x && e.y === t.y),
					(e.rotationNormalizer = () => {
						let e;
						return (t) => {
							typeof e != `number` && (e = t);
							let n = e - t,
								r = Math.abs(n) + 180,
								i = Math.floor(r / 360);
							return (
								n < 180 && (t -= i * 360),
								n > 180 && (t += i * 360),
								(e = t),
								t
							);
						};
					}));
				function t(e, t) {
					return { x: (e.x + t.x) / 2, y: (e.y + t.y) / 2 };
				}
				e.center = t;
				function n(e) {
					let t = 0,
						n = 0;
					return (
						e.forEach((e) => {
							((t += e.x), (n += e.y));
						}),
						{ x: t / e.length, y: n / e.length }
					);
				}
				e.centroid = n;
				function r(t) {
					let n = e.centroid(t),
						r = new Map();
					for (let e = 0; e < t.length; e++) {
						let i = t[e];
						i && r.set(i, Math.atan2(i.y - n.y, i.x - n.x));
					}
					return t.sort((e, t) => (r.get(e) ?? 0) - (r.get(t) ?? 0));
				}
				e.sortClockwise = r;
			})((ui ||= {})),
			(Av = {
				aliceblue: `f0f8ff`,
				antiquewhite: `faebd7`,
				aqua: `0ff`,
				aquamarine: `7fffd4`,
				azure: `f0ffff`,
				beige: `f5f5dc`,
				bisque: `ffe4c4`,
				black: `000`,
				blanchedalmond: `ffebcd`,
				blue: `00f`,
				blueviolet: `8a2be2`,
				brown: `a52a2a`,
				burlywood: `deb887`,
				burntsienna: `ea7e5d`,
				cadetblue: `5f9ea0`,
				chartreuse: `7fff00`,
				chocolate: `d2691e`,
				coral: `ff7f50`,
				cornflowerblue: `6495ed`,
				cornsilk: `fff8dc`,
				crimson: `dc143c`,
				cyan: `0ff`,
				darkblue: `00008b`,
				darkcyan: `008b8b`,
				darkgoldenrod: `b8860b`,
				darkgray: `a9a9a9`,
				darkgreen: `006400`,
				darkgrey: `a9a9a9`,
				darkkhaki: `bdb76b`,
				darkmagenta: `8b008b`,
				darkolivegreen: `556b2f`,
				darkorange: `ff8c00`,
				darkorchid: `9932cc`,
				darkred: `8b0000`,
				darksalmon: `e9967a`,
				darkseagreen: `8fbc8f`,
				darkslateblue: `483d8b`,
				darkslategray: `2f4f4f`,
				darkslategrey: `2f4f4f`,
				darkturquoise: `00ced1`,
				darkviolet: `9400d3`,
				deeppink: `ff1493`,
				deepskyblue: `00bfff`,
				dimgray: `696969`,
				dimgrey: `696969`,
				dodgerblue: `1e90ff`,
				firebrick: `b22222`,
				floralwhite: `fffaf0`,
				forestgreen: `228b22`,
				fuchsia: `f0f`,
				gainsboro: `dcdcdc`,
				ghostwhite: `f8f8ff`,
				gold: `ffd700`,
				goldenrod: `daa520`,
				gray: `808080`,
				green: `008000`,
				greenyellow: `adff2f`,
				grey: `808080`,
				honeydew: `f0fff0`,
				hotpink: `ff69b4`,
				indianred: `cd5c5c`,
				indigo: `4b0082`,
				ivory: `fffff0`,
				khaki: `f0e68c`,
				lavender: `e6e6fa`,
				lavenderblush: `fff0f5`,
				lawngreen: `7cfc00`,
				lemonchiffon: `fffacd`,
				lightblue: `add8e6`,
				lightcoral: `f08080`,
				lightcyan: `e0ffff`,
				lightgoldenrodyellow: `fafad2`,
				lightgray: `d3d3d3`,
				lightgreen: `90ee90`,
				lightgrey: `d3d3d3`,
				lightpink: `ffb6c1`,
				lightsalmon: `ffa07a`,
				lightseagreen: `20b2aa`,
				lightskyblue: `87cefa`,
				lightslategray: `789`,
				lightslategrey: `789`,
				lightsteelblue: `b0c4de`,
				lightyellow: `ffffe0`,
				lime: `0f0`,
				limegreen: `32cd32`,
				linen: `faf0e6`,
				magenta: `f0f`,
				maroon: `800000`,
				mediumaquamarine: `66cdaa`,
				mediumblue: `0000cd`,
				mediumorchid: `ba55d3`,
				mediumpurple: `9370db`,
				mediumseagreen: `3cb371`,
				mediumslateblue: `7b68ee`,
				mediumspringgreen: `00fa9a`,
				mediumturquoise: `48d1cc`,
				mediumvioletred: `c71585`,
				midnightblue: `191970`,
				mintcream: `f5fffa`,
				mistyrose: `ffe4e1`,
				moccasin: `ffe4b5`,
				navajowhite: `ffdead`,
				navy: `000080`,
				oldlace: `fdf5e6`,
				olive: `808000`,
				olivedrab: `6b8e23`,
				orange: `ffa500`,
				orangered: `ff4500`,
				orchid: `da70d6`,
				palegoldenrod: `eee8aa`,
				palegreen: `98fb98`,
				paleturquoise: `afeeee`,
				palevioletred: `db7093`,
				papayawhip: `ffefd5`,
				peachpuff: `ffdab9`,
				peru: `cd853f`,
				pink: `ffc0cb`,
				plum: `dda0dd`,
				powderblue: `b0e0e6`,
				purple: `800080`,
				rebeccapurple: `663399`,
				red: `f00`,
				rosybrown: `bc8f8f`,
				royalblue: `4169e1`,
				saddlebrown: `8b4513`,
				salmon: `fa8072`,
				sandybrown: `f4a460`,
				seagreen: `2e8b57`,
				seashell: `fff5ee`,
				sienna: `a0522d`,
				silver: `c0c0c0`,
				skyblue: `87ceeb`,
				slateblue: `6a5acd`,
				slategray: `708090`,
				slategrey: `708090`,
				snow: `fffafa`,
				springgreen: `00ff7f`,
				steelblue: `4682b4`,
				tan: `d2b48c`,
				teal: `008080`,
				thistle: `d8bfd8`,
				tomato: `ff6347`,
				turquoise: `40e0d0`,
				violet: `ee82ee`,
				wheat: `f5deb3`,
				white: `fff`,
				whitesmoke: `f5f5f5`,
				yellow: `ff0`,
				yellowgreen: `9acd32`,
			}),
			(jv = new ((() => mg().Hsluv)())()),
			(Mv = (() => {
				let e = `(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,
					t =
						`[\\s|\\(]+(` +
						e +
						`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,
					n =
						`[\\s|\\(]+(` +
						e +
						`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`;
				return {
					rgb: RegExp(`rgb` + t),
					rgba: RegExp(`rgba` + n),
					hsl: RegExp(`hsl` + t),
					hsla: RegExp(`hsla` + n),
					hsv: RegExp(`hsv` + t),
					hsva: RegExp(`hsva` + n),
					hex3: /^([\da-f])([\da-f])([\da-f])$/iu,
					hex6: /^([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
					hex4: /^#?([\da-f])([\da-f])([\da-f])([\da-f])$/iu,
					hex8: /^#?([\da-f]{2})([\da-f]{2})([\da-f]{2})([\da-f]{2})$/iu,
				};
			})()),
			(Nv =
				/^color\(display-p3\s+(?<r>\d+\.\d+|\d+|\.\d+)\s+(?<g>\d+\.\d+|\d+|\.\d+)\s+(?<b>\d+\.\d+|\d+|\.\d+)(?:\s*\/\s*(?<a>\d+\.\d+|\d+|\.\d+))?\)$/u),
			(Pv = (e) => {
				let { r: t, g: n, b: r, a: i } = Pi(e);
				return {
					x:
						0.486570948648216 * t +
						0.265667693169093 * n +
						0.1982172852343625 * r,
					y:
						0.2289745640697487 * t +
						0.6917385218365062 * n +
						0.079286914093745 * r,
					z: 0 * t + 0.0451133818589026 * n + 1.043944368900976 * r,
					a: i,
				};
			}),
			(Fv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
				Ii({
					r:
						e * 3.2409699419045226 -
						t * 1.537383177570094 -
						0.4986107602930034 * n,
					g:
						e * -0.9692436362808796 +
						t * 1.8759675015077204 +
						0.0415550574071756 * n,
					b:
						e * 0.0556300796969936 -
						t * 0.2039769588889765 +
						1.0569715142428784 * n,
					a: r,
				})),
			(Iv = (e) => {
				let { r: t, g: n, b: r, a: i } = Pi(e);
				return {
					x:
						0.4123907992659593 * t +
						0.357584339383878 * n +
						0.1804807884018343 * r,
					y:
						0.2126390058715102 * t +
						0.715168678767756 * n +
						0.0721923153607337 * r,
					z:
						0.0193308187155918 * t +
						0.119194779794626 * n +
						0.9505321522496607 * r,
					a: i,
				};
			}),
			(Lv = ({ x: e = 0, y: t = 0, z: n = 0, a: r = 1 }) =>
				Ii({
					r:
						e * 2.4934969119414263 -
						t * 0.9313836179191242 -
						0.402710784450717 * n,
					g:
						e * -0.8294889695615749 +
						t * 1.7626640603183465 +
						0.0236246858419436 * n,
					b:
						e * 0.0358458302437845 -
						t * 0.0761723892680418 +
						0.9568845240076871 * n,
					a: r,
				})),
			(Rv = class e {
				constructor(e) {
					(I(this, `format`, `p3`),
						I(this, `r`),
						I(this, `g`),
						I(this, `b`),
						I(this, `a`),
						(this.r = e.r ?? 0),
						(this.g = e.g ?? 0),
						(this.b = e.b ?? 0),
						(this.a = e.a ?? 1));
				}
				hsv() {
					return Li(this);
				}
				rgb() {
					return Vi(this);
				}
				hsl() {
					return bi(this.r, this.g, this.b);
				}
				toString(e = `p3`, t) {
					switch (e) {
						case `p3`: {
							let e = t?.r ?? this.r,
								n = t?.g ?? this.g,
								r = t?.b ?? this.b,
								i = t?.a ?? this.a;
							return i === 1
								? `color(display-p3 ${e} ${n} ${r})`
								: `color(display-p3 ${e} ${n} ${r} / ${i})`;
						}
						case `srgb`: {
							let e = this.rgb(),
								n =
									Math.round(
										Math.max(0, Math.min(e.r, 1)) * 100,
									) / 100,
								r =
									Math.round(
										Math.max(0, Math.min(e.g, 1)) * 100,
									) / 100,
								i =
									Math.round(
										Math.max(0, Math.min(e.b, 1)) * 100,
									) / 100,
								a = t?.r ?? n * 255,
								o = t?.g ?? r * 255,
								s = t?.b ?? i * 255,
								c = t?.a ?? e.a ?? 1;
							return c === 1
								? `rgb(${a}, ${o}, ${s})`
								: `rgba(${a}, ${o}, ${s}, ${c})`;
						}
					}
				}
				static isP3String(e) {
					return e.startsWith(`color(display-p3`);
				}
				static fromHSV(t, n = `p3`) {
					switch (n) {
						case `p3`:
							return new e(zi(t));
						case `srgb`:
							return new e(Bi(zi(t)));
					}
				}
				static fromRGB(t) {
					return new e(
						Bi({
							r: Math.round((t.r / 255) * 1e4) / 1e4,
							g: Math.round((t.g / 255) * 1e4) / 1e4,
							b: Math.round((t.b / 255) * 1e4) / 1e4,
							a: t.a ?? 1,
						}),
					);
				}
				static fromRGBString(t) {
					let n = q(t);
					if (n) return e.fromRGB(n);
				}
				static fromString(t) {
					if (!e.isP3String(t)) return;
					let n = Mi(t);
					if (n) return new e({ r: n.r, g: n.g, b: n.b, a: n.a });
				}
				static srgbFromValue(t) {
					if (!L(t) || !q.isP3String(t)) return t;
					let n = e.fromString(t);
					return n ? n.toString(`srgb`) : t;
				}
				static multiplyAlpha(t, n) {
					return new e({ r: t.r, g: t.g, b: t.b, a: t.a * n });
				}
			}),
			(zv = new Map()),
			(q = (() => {
				function e(n, r, i, a) {
					if (typeof n == `string`) {
						let r = zv.get(n);
						return (
							r ||
							((r = t(n)),
							r === void 0
								? { ...e(`black`), isValid: !1 }
								: (zv.set(n, r), r))
						);
					}
					let o = t(n, r, i, a);
					return o === void 0 ? { ...e(`black`), isValid: !1 } : o;
				}
				function t(t, n, r, i) {
					if (t === ``) return;
					let a = Ui(t, n, r, i);
					if (a) {
						let n = {
							r: a.r,
							g: a.g,
							b: a.b,
							a: a.a,
							h: a.h,
							s: a.s,
							l: a.l,
							initialValue:
								typeof t == `string` && a.format !== `hsv`
									? t
									: void 0,
							roundA: Math.round(100 * a.a) / 100,
							format: a.format,
							mix: e.mix,
							toValue: () => e.toRgbString(n),
						};
						return n;
					} else return;
				}
				let n = {
					isRGB(e) {
						return e === `rgb` || e === `rgba`;
					},
					isHSL(e) {
						return e === `hsl` || e === `hsla`;
					},
				};
				((e.inspect = (e, t) =>
					e.format === `hsl`
						? `<${e.constructor.name} h:${e.h} s:${e.s} l:${e.l} a:${e.a}>`
						: e.format === `hex` || e.format === `name`
							? `<${e.constructor.name} "${t}">`
							: `<${e.constructor.name} r:${e.r} g:${e.g} b:${e.b} a:${e.a}>`),
					(e.isColor = (t) =>
						typeof t == `string`
							? e.isColorString(t)
							: e.isColorObject(t)),
					(e.isColorString = (e) =>
						typeof e == `string` ? ki(e) !== !1 : !1),
					(e.isColorObject = (e) =>
						z(e) &&
						typeof e.r == `number` &&
						typeof e.g == `number` &&
						typeof e.b == `number` &&
						typeof e.h == `number` &&
						typeof e.s == `number` &&
						typeof e.l == `number` &&
						typeof e.a == `number` &&
						typeof e.roundA == `number` &&
						typeof e.format == `string`),
					(e.toString = (t) => e.toRgbString(t)),
					(e.toHex = (e, t = !1) => yi(e.r, e.g, e.b, t)),
					(e.toHexString = (t, n = !1) => `#${e.toHex(t, n)}`),
					(e.isP3String = (e) =>
						typeof e == `string` ? Rv.isP3String(e) : !1),
					(e.toRgbString = (e) =>
						e.a === 1
							? `rgb(` +
								Math.round(e.r) +
								`, ` +
								Math.round(e.g) +
								`, ` +
								Math.round(e.b) +
								`)`
							: `rgba(` +
								Math.round(e.r) +
								`, ` +
								Math.round(e.g) +
								`, ` +
								Math.round(e.b) +
								`, ` +
								e.roundA +
								`)`),
					(e.toHusl = (e) => ({ ...hi(e.r, e.g, e.b), a: e.roundA })),
					(e.toHslString = (t) => {
						let n = e.toHsl(t),
							r = Math.round(n.h),
							i = Math.round(n.s * 100),
							a = Math.round(n.l * 100);
						return t.a === 1
							? `hsl(` + r + `, ` + i + `%, ` + a + `%)`
							: `hsla(` +
									r +
									`, ` +
									i +
									`%, ` +
									a +
									`%, ` +
									t.roundA +
									`)`;
					}),
					(e.toHsv = (e) => {
						let t = Ci(e.r, e.g, e.b);
						return { h: t.h * 360, s: t.s, v: t.v, a: e.a };
					}),
					(e.toHsvString = (e) => {
						let t = Ci(e.r, e.g, e.b),
							n = Math.round(t.h * 360),
							r = Math.round(t.s * 100),
							i = Math.round(t.v * 100);
						return e.a === 1
							? `hsv(` + n + `, ` + r + `%, ` + i + `%)`
							: `hsva(` +
									n +
									`, ` +
									r +
									`%, ` +
									i +
									`%, ` +
									e.roundA +
									`)`;
					}),
					(e.toName = (e) => {
						if (e.a === 0) return `transparent`;
						if (e.a < 1) return !1;
						let t = yi(e.r, e.g, e.b, !0);
						for (let e of Object.keys(Av))
							if (Av[e] === t) return e;
						return !1;
					}),
					(e.toHsl = (e) => ({
						h: Math.round(e.h),
						s: e.s,
						l: e.l,
						a: e.a,
					})),
					(e.toRgb = (e) => ({
						r: Math.round(e.r),
						g: Math.round(e.g),
						b: Math.round(e.b),
						a: e.a,
					})),
					(e.brighten = (t, n = 10) => {
						let r = e.toRgb(t);
						return (
							(r.r = Math.max(
								0,
								Math.min(
									255,
									r.r - Math.round(255 * -(n / 100)),
								),
							)),
							(r.g = Math.max(
								0,
								Math.min(
									255,
									r.g - Math.round(255 * -(n / 100)),
								),
							)),
							(r.b = Math.max(
								0,
								Math.min(
									255,
									r.b - Math.round(255 * -(n / 100)),
								),
							)),
							e(r)
						);
					}),
					(e.lighten = (t, n = 10) => {
						let r = e.toHsl(t);
						return (
							(r.l += n / 100),
							(r.l = Math.min(1, Math.max(0, r.l))),
							e(r)
						);
					}),
					(e.darken = (t, n = 10) => {
						let r = e.toHsl(t);
						return (
							(r.l -= n / 100),
							(r.l = Math.min(1, Math.max(0, r.l))),
							e(r)
						);
					}),
					(e.saturate = (t, n = 10) => {
						let r = e.toHsl(t);
						return (
							(r.s += n / 100),
							(r.s = Math.min(1, Math.max(0, r.s))),
							e(r)
						);
					}),
					(e.desaturate = (t, n = 10) => {
						let r = e.toHsl(t);
						return (
							(r.s -= n / 100),
							(r.s = Math.min(1, Math.max(0, r.s))),
							e(r)
						);
					}),
					(e.grayscale = (t) => e.desaturate(t, 100)),
					(e.hueRotate = (t, n) => {
						let r = e.toHsl(t);
						return (
							(r.h += n),
							(r.h = r.h > 360 ? r.h - 360 : r.h),
							e(r)
						);
					}),
					(e.alpha = (t, n = 1) =>
						e({ r: t.r, g: t.g, b: t.b, a: n })),
					(e.transparent = (t) => e.alpha(t, 0)),
					(e.multiplyAlpha = (t, n = 1) =>
						e({ r: t.r, g: t.g, b: t.b, a: t.a * n })),
					(e.alphaComposite = (t, n) => {
						if (t.a === 1) return t;
						if (n.a < 1)
							throw Error(
								"Bottom color must be fully opaque for alpha blending, you should check and determine your own strategy for resolving alpha bottom layers, ie. `Color.alphaComposite(bottom, Color('white'))`",
							);
						return t.a === 0
							? n
							: e({
									r: Math.round(t.r * t.a + n.r * (1 - t.a)),
									g: Math.round(t.g * t.a + n.g * (1 - t.a)),
									b: Math.round(t.b * t.a + n.b * (1 - t.a)),
									a: 1,
								});
					}),
					(e.interpolate = (t, n, r = `rgb`) => {
						if (!e.isColorObject(t) || !e.isColorObject(n))
							throw TypeError(
								`Both arguments for Color.interpolate must be Color objects`,
							);
						return (i) => e.mixAsColor(t, n, i, !1, r);
					}),
					(e.mix = (t, n, { model: r = `rgb` } = {}) => {
						let i = typeof t == `string` ? e(t) : t,
							a = e.interpolate(i, n, r);
						return (t) => e.toRgbString(a(t));
					}),
					(e.mixAsColor = (t, r, i = 0.5, a = !1, o = `rgb`) => {
						let s = null;
						if (n.isRGB(o))
							s = e({
								r: di(i, [0, 1], [t.r, r.r], a),
								g: di(i, [0, 1], [t.g, r.g], a),
								b: di(i, [0, 1], [t.b, r.b], a),
								a: di(i, [0, 1], [t.a, r.a], a),
							});
						else {
							let c, l;
							(n.isHSL(o)
								? ((c = e.toHsl(t)), (l = e.toHsl(r)))
								: ((c = e.toHusl(t)), (l = e.toHusl(r))),
								c.s === 0
									? (c.h = l.h)
									: l.s === 0 && (l.h = c.h));
							let u = c.h,
								d = l.h,
								f = d - u;
							f > 180
								? (f = d - 360 - u)
								: f < -180 && (f = d + 360 - u);
							let p = {
								h: di(i, [0, 1], [u, u + f], a),
								s: di(i, [0, 1], [c.s, l.s], a),
								l: di(i, [0, 1], [c.l, l.l], a),
								a: di(i, [0, 1], [t.a, r.a], a),
							};
							s = n.isHSL(o) ? e(p) : e(gi(p.h, p.s, p.l, p.a));
						}
						return s;
					}),
					(e.random = (t = 1) => {
						function n() {
							return Math.floor(Math.random() * 255);
						}
						return e(
							`rgba(` +
								n() +
								`, ` +
								n() +
								`, ` +
								n() +
								`, ` +
								t +
								`)`,
						);
					}),
					(e.grey = (t = 0.5, n = 1) => (
						(t = Math.floor(t * 255)),
						e(`rgba(` + t + `, ` + t + `, ` + t + `, ` + n + `)`)
					)),
					(e.gray = e.grey),
					(e.rgbToHsl = (e, t, n) => bi(e, t, n)),
					(e.isValidColorProperty = (t, n) =>
						!!(
							(t.toLowerCase().slice(-5) === `color` ||
								t === `fill` ||
								t === `stroke`) &&
							typeof n == `string` &&
							e.isColorString(n)
						)),
					(e.difference = (e, t) => {
						let n = (e.r + t.r) / 2,
							r = e.r - t.r,
							i = e.g - t.g,
							a = e.b - t.b,
							o = r ** 2,
							s = i ** 2,
							c = a ** 2;
						return Math.sqrt(
							2 * o + 4 * s + 3 * c + (n * (o - c)) / 256,
						);
					}),
					(e.equal = (e, t, n = 0.1) =>
						!(
							Math.abs(e.r - t.r) >= n ||
							Math.abs(e.g - t.g) >= n ||
							Math.abs(e.b - t.b) >= n ||
							Math.abs(e.a - t.a) * 256 >= n
						)));
				let r = Ke([0, 255], [0, 1]);
				function i(e) {
					e = r(e);
					let t = Math.abs(e);
					return t < 0.04045
						? e / 12.92
						: (Math.sign(e) || 1) * ((t + 0.055) / 1.055) ** 2.4;
				}
				return (
					(e.luminance = (t) => {
						let { r: n, g: r, b: a } = e.toRgb(t);
						return 0.2126 * i(n) + 0.7152 * i(r) + 0.0722 * i(a);
					}),
					(e.contrast = (t, n) => {
						let r = e.luminance(t),
							i = e.luminance(n);
						return (
							(Math.max(r, i) + 0.05) / (Math.min(r, i) + 0.05)
						);
					}),
					e
				);
			})()),
			(Bv = (e) => e instanceof We),
			(Vv = (() => hg().EventEmitter)()),
			(Hv = class {
				constructor() {
					I(this, `_emitter`, new Vv());
				}
				eventNames() {
					return this._emitter.eventNames();
				}
				eventListeners() {
					let e = {};
					for (let t of this._emitter.eventNames())
						e[t] = this._emitter.listeners(t);
					return e;
				}
				on(e, t) {
					this.addEventListener(e, t, !1, !1, this);
				}
				off(e, t) {
					this.removeEventListeners(e, t);
				}
				once(e, t) {
					this.addEventListener(e, t, !0, !1, this);
				}
				unique(e, t) {
					this.addEventListener(e, t, !1, !0, this);
				}
				addEventListener(e, t, n, r, i) {
					if (r) {
						for (let e of this._emitter.eventNames())
							if (t === this._emitter.listeners(e)) return;
					}
					n === !0
						? this._emitter.once(e, t, i)
						: this._emitter.addListener(e, t, i);
				}
				removeEventListeners(e, t) {
					e
						? this._emitter.removeListener(e, t)
						: this.removeAllEventListeners();
				}
				removeAllEventListeners() {
					this._emitter.removeAllListeners();
				}
				countEventListeners(e) {
					if (e) return this._emitter.listeners(e).length;
					{
						let e = 0;
						for (let t of this._emitter.eventNames())
							e += this._emitter.listeners(t).length;
						return e;
					}
				}
				emit(e, ...t) {
					this._emitter.emit(e, ...t);
				}
			}),
			(Uv = (e) => {
				setTimeout(e, 1 / 60);
			}),
			(Wv = (() => G.requestAnimationFrame || Uv)()),
			(Gv = (e) => Wv(e)),
			(Kv = (() => 1 / 60)()),
			(qv = class extends Hv {
				constructor(e = !1) {
					(super(),
						I(this, `_started`, !1),
						I(this, `_frame`, 0),
						I(this, `_frameTasks`, []),
						I(this, `tick`, () => {
							this._started &&
								(Gv(this.tick),
								this.emit(`update`, this._frame, Kv),
								this.emit(`render`, this._frame, Kv),
								this._processFrameTasks(),
								this._frame++);
						}),
						e && this.start());
				}
				addFrameTask(e) {
					this._frameTasks.push(e);
				}
				_processFrameTasks() {
					let e = this._frameTasks,
						t = e.length;
					if (t !== 0) {
						for (let n = 0; n < t; n++) e[n]?.();
						e.length = 0;
					}
				}
				static set TimeStep(e) {
					Kv = e;
				}
				static get TimeStep() {
					return Kv;
				}
				start() {
					return this._started
						? this
						: ((this._frame = 0),
							(this._started = !0),
							Gv(this.tick),
							this);
				}
				stop() {
					return ((this._started = !1), this);
				}
				get frame() {
					return this._frame;
				}
				get time() {
					return this._frame * Kv;
				}
			}),
			(Jv = new qv()),
			(Yv = {
				target:
					G.location.origin === `https://screenshot.framer.invalid`
						? `EXPORT`
						: `PREVIEW`,
				zoom: 1,
			}),
			(FramerEnvironment = {
				canvas: `CANVAS`,
				export: `EXPORT`,
				thumbnail: `THUMBNAIL`,
				preview: `PREVIEW`,
				current: () => Yv.target,
				hasRestrictions: () => {
					let e = Yv.target;
					return e === `CANVAS` || e === `EXPORT`;
				},
			}),
			(Xv = (e) => ({
				correct: (t, { projectionDelta: n, treeScale: r }) => {
					if ((typeof t == `string` && (t = parseFloat(t)), t === 0))
						return `0px`;
					let i = t;
					return (
						n &&
							r &&
							((i = Math.round(t / n[e].scale / r[e])),
							(i = Math.max(i, 1))),
						i + `px`
					);
				},
			})),
			Ee({
				borderTopWidth: Xv(`y`),
				borderLeftWidth: Xv(`x`),
				borderRightWidth: Xv(`x`),
				borderBottomWidth: Xv(`y`),
			}),
			(Zv = f.createContext({
				getLayoutId: (e) => null,
				persistLayoutIdCache: () => {},
				top: !1,
				enabled: !0,
			})),
			(Qv = {
				background: void 0,
				display: `flex`,
				flexDirection: `column`,
				justifyContent: `center`,
				alignItems: `center`,
				lineHeight: `1.4em`,
				textOverflow: `ellipsis`,
				overflow: `hidden`,
				minHeight: 0,
				width: `100%`,
				height: `100%`,
			}),
			($v = (() => ({
				...Qv,
				border: `1px solid rgba(149, 149, 149, 0.15)`,
				borderRadius: 6,
				fontSize: `12px`,
				backgroundColor: `rgba(149, 149, 149, 0.1)`,
				color: `#a5a5a5`,
			}))()),
			(ey = {
				overflow: `hidden`,
				whiteSpace: `nowrap`,
				textOverflow: `ellipsis`,
				maxWidth: `100%`,
				flexShrink: 0,
				padding: `0 10px`,
			}),
			(ty = (() => ({ ...ey, fontWeight: 500 }))()),
			(ny = (() => ({
				...ey,
				whiteSpace: `pre`,
				maxHeight: `calc(50% - calc(20px * var(--framerInternalCanvas-canvasPlaceholderContentScaleFactor, 1)))`,
				WebkitMaskImage: `linear-gradient(to bottom, black 80%, transparent 100%)`,
			}))()),
			(ry = (() => {
				function e(e, t) {
					return { a: e, b: t };
				}
				return (
					(e.offset = (t, n) => {
						let r = ia(ui.angleFromX(t.a, t.b)),
							i = n * Math.sin(r),
							a = n * Math.cos(r);
						return e(
							{ x: t.a.x + i, y: t.a.y - a },
							{ x: t.b.x + i, y: t.b.y - a },
						);
					}),
					(e.intersection = (e, t, n) => {
						let r = e.a.x,
							i = e.a.y,
							a = e.b.x,
							o = e.b.y,
							s = t.a.x,
							c = t.a.y,
							l = t.b.x,
							u = t.b.y,
							d = (l - s) * (c - i) - (u - c) * (s - r),
							f = (l - s) * (o - i) - (u - c) * (a - r),
							p = (a - r) * (c - i) - (o - i) * (s - r);
						if ((d === 0 && f === 0) || f === 0) return null;
						let m = d / f,
							h = p / f;
						return n && (m < 0 || m > 1 || h < 0 || h > 1)
							? null
							: { x: r + m * (a - r), y: i + m * (o - i) };
					}),
					(e.intersectionAngle = (e, t) => {
						let n = e.b.x - e.a.x,
							r = e.b.y - e.a.y,
							i = t.b.x - t.a.x,
							a = t.b.y - t.a.y;
						return (
							Math.atan2(n * a - r * i, n * i + r * a) *
							(180 / Math.PI)
						);
					}),
					(e.isOrthogonal = (e) =>
						e.a.x === e.b.x || e.a.y === e.b.y),
					(e.perpendicular = (t, n) => {
						let r = t.a.x - t.b.x,
							i = t.a.y - t.b.y;
						return e(ui(n.x - i, n.y + r), n);
					}),
					(e.projectPoint = (t, n) => {
						let r = e.perpendicular(t, n);
						return e.intersection(t, r);
					}),
					(e.pointAtPercentDistance = (t, n) => {
						let r = e.distance(t),
							i = (n * r) / r;
						return {
							x: i * t.b.x + (1 - i) * t.a.x,
							y: i * t.b.y + (1 - i) * t.a.y,
						};
					}),
					(e.distance = (e) => ui.distance(e.a, e.b)),
					e
				);
			})()),
			(Y = {
				equals: function (e, t) {
					return e === t
						? !0
						: !e || !t
							? !1
							: e.x === t.x &&
								e.y === t.y &&
								e.width === t.width &&
								e.height === t.height;
				},
				from: (e) => ({
					x: e.x,
					y: e.y,
					width: e.width,
					height: e.height,
				}),
				atOrigin: (e) => ({
					x: 0,
					y: 0,
					width: e.width,
					height: e.height,
				}),
				fromTwoPoints: (e, t) => ({
					x: Math.min(e.x, t.x),
					y: Math.min(e.y, t.y),
					width: Math.abs(e.x - t.x),
					height: Math.abs(e.y - t.y),
				}),
				fromRect: (e) => ({
					x: e.left,
					y: e.top,
					width: e.right - e.left,
					height: e.bottom - e.top,
				}),
				multiply: (e, t) => ({
					x: e.x * t,
					y: e.y * t,
					width: e.width * t,
					height: e.height * t,
				}),
				divide: (e, t) => Y.multiply(e, 1 / t),
				offset: (e, t) => {
					let n = typeof t.x == `number` ? t.x : 0,
						r = typeof t.y == `number` ? t.y : 0;
					return { ...e, x: e.x + n, y: e.y + r };
				},
				inflate: (e, t) => {
					if (t === 0) return e;
					let n = 2 * t;
					return {
						x: e.x - t,
						y: e.y - t,
						width: e.width + n,
						height: e.height + n,
					};
				},
				pixelAligned: (e) => {
					let t = Math.round(e.x),
						n = Math.round(e.y),
						r = Math.round(e.x + e.width),
						i = Math.round(e.y + e.height);
					return {
						x: t,
						y: n,
						width: Math.max(r - t, 0),
						height: Math.max(i - n, 0),
					};
				},
				halfPixelAligned: (e) => {
					let t = Math.round(e.x * 2) / 2,
						n = Math.round(e.y * 2) / 2,
						r = Math.round((e.x + e.width) * 2) / 2,
						i = Math.round((e.y + e.height) * 2) / 2;
					return {
						x: t,
						y: n,
						width: Math.max(r - t, 1),
						height: Math.max(i - n, 1),
					};
				},
				round: (e, t = 0) => ({
					x: si(e.x, t),
					y: si(e.y, t),
					width: si(e.width, t),
					height: si(e.height, t),
				}),
				roundToOutside: (e) => {
					let t = Math.floor(e.x),
						n = Math.floor(e.y),
						r = Math.ceil(e.x + e.width),
						i = Math.ceil(e.y + e.height);
					return {
						x: t,
						y: n,
						width: Math.max(r - t, 0),
						height: Math.max(i - n, 0),
					};
				},
				minX: (e) => e.x,
				maxX: (e) => e.x + e.width,
				minY: (e) => e.y,
				maxY: (e) => e.y + e.height,
				positions: (e) => ({
					minX: e.x,
					midX: e.x + e.width / 2,
					maxX: Y.maxX(e),
					minY: e.y,
					midY: e.y + e.height / 2,
					maxY: Y.maxY(e),
				}),
				center: (e) => ({
					x: e.x + e.width / 2,
					y: e.y + e.height / 2,
				}),
				boundingRectFromPoints: (e) => {
					let t = 1 / 0,
						n = -1 / 0,
						r = 1 / 0,
						i = -1 / 0;
					for (let a = 0; a < e.length; a++) {
						let o = e[a];
						((t = Math.min(t, o.x)),
							(n = Math.max(n, o.x)),
							(r = Math.min(r, o.y)),
							(i = Math.max(i, o.y)));
					}
					return { x: t, y: r, width: n - t, height: i - r };
				},
				fromPoints: (e) => {
					let [t, n, r, i] = e,
						{ x: a, y: o } = t;
					return {
						x: a,
						y: o,
						width: ui.distance(t, n),
						height: ui.distance(t, i),
					};
				},
				merge: (...e) => {
					let t = {
							x: Math.min(...e.map(Y.minX)),
							y: Math.min(...e.map(Y.minY)),
						},
						n = {
							x: Math.max(...e.map(Y.maxX)),
							y: Math.max(...e.map(Y.maxY)),
						};
					return Y.fromTwoPoints(t, n);
				},
				intersection: (e, t) => {
					let n = Math.max(e.x, t.x),
						r = Math.min(e.x + e.width, t.x + t.width),
						i = Math.max(e.y, t.y),
						a = Math.min(e.y + e.height, t.y + t.height);
					return { x: n, y: i, width: r - n, height: a - i };
				},
				points: (e) => [
					{ x: Y.minX(e), y: Y.minY(e) },
					{ x: Y.minX(e), y: Y.maxY(e) },
					{ x: Y.maxX(e), y: Y.minY(e) },
					{ x: Y.maxX(e), y: Y.maxY(e) },
				],
				pointsAtOrigin: (e) => [
					{ x: 0, y: 0 },
					{ x: e.width, y: 0 },
					{ x: e.width, y: e.height },
					{ x: 0, y: e.height },
				],
				transform: (e, t) => {
					let { x: n, y: r } = t.transformPoint({ x: e.x, y: e.y }),
						{ x: i, y: a } = t.transformPoint({
							x: e.x + e.width,
							y: e.y,
						}),
						{ x: o, y: s } = t.transformPoint({
							x: e.x + e.width,
							y: e.y + e.height,
						}),
						{ x: c, y: l } = t.transformPoint({
							x: e.x,
							y: e.y + e.height,
						}),
						u = Math.min(n, i, o, c),
						d = Math.max(n, i, o, c) - u,
						f = Math.min(r, a, s, l);
					return {
						x: u,
						y: f,
						width: d,
						height: Math.max(r, a, s, l) - f,
					};
				},
				containsPoint: (e, t) =>
					!(
						t.x < Y.minX(e) ||
						t.x > Y.maxX(e) ||
						t.y < Y.minY(e) ||
						t.y > Y.maxY(e) ||
						Number.isNaN(e.x) ||
						Number.isNaN(e.y)
					),
				containsRect: (e, t) => {
					for (let n of Y.points(t))
						if (!Y.containsPoint(e, n)) return !1;
					return !0;
				},
				toCSS: (e) => ({
					display: `block`,
					transform: `translate(${e.x}px, ${e.y}px)`,
					width: `${e.width}px`,
					height: `${e.height}px`,
				}),
				inset: (e, t) => ({
					x: e.x + t,
					y: e.y + t,
					width: Math.max(0, e.width - 2 * t),
					height: Math.max(0, e.height - 2 * t),
				}),
				intersects: (e, t) =>
					!(
						t.x >= Y.maxX(e) ||
						Y.maxX(t) <= e.x ||
						t.y >= Y.maxY(e) ||
						Y.maxY(t) <= e.y
					),
				overlapHorizontally: (e, t) => {
					let n = Y.maxX(e),
						r = Y.maxX(t);
					return n > t.x && r > e.x;
				},
				overlapVertically: (e, t) => {
					let n = Y.maxY(e),
						r = Y.maxY(t);
					return n > t.y && r > e.y;
				},
				doesNotIntersect: (e, t) =>
					t.find((t) => Y.intersects(t, e)) === void 0,
				isEqual: (e, t) => Y.equals(e, t),
				cornerPoints: (e) => {
					let t = e.x,
						n = e.x + e.width,
						r = e.y,
						i = e.y + e.height;
					return [
						{ x: t, y: r },
						{ x: n, y: r },
						{ x: n, y: i },
						{ x: t, y: i },
					];
				},
				midPoints: (e) => {
					let t = e.x,
						n = e.x + e.width / 2,
						r = e.x + e.width,
						i = e.y,
						a = e.y + e.height / 2,
						o = e.y + e.height;
					return [
						{ x: n, y: i },
						{ x: r, y: a },
						{ x: n, y: o },
						{ x: t, y: a },
					];
				},
				pointDistance: (e, t) => {
					let n = 0,
						r = 0;
					return (
						t.x < e.x
							? (n = e.x - t.x)
							: t.x > Y.maxX(e) && (n = t.x - Y.maxX(e)),
						t.y < e.y
							? (r = e.y - t.y)
							: t.y > Y.maxY(e) && (r = t.y - Y.maxY(e)),
						ui.distance({ x: n, y: r }, { x: 0, y: 0 })
					);
				},
				delta: (e, t) => {
					let n = { x: Y.minX(e), y: Y.minY(e) },
						r = { x: Y.minX(t), y: Y.minY(t) };
					return { x: n.x - r.x, y: n.y - r.y };
				},
				withMinSize: (e, t) => {
					let { width: n, height: r } = t,
						i = e.width - n,
						a = e.height - r;
					return {
						width: Math.max(e.width, n),
						height: Math.max(e.height, r),
						x: e.width < n ? e.x + i / 2 : e.x,
						y: e.height < r ? e.y + a / 2 : e.y,
					};
				},
				anyPointsOutsideRect: (e, t) => {
					let n = Y.minX(e),
						r = Y.minY(e),
						i = Y.maxX(e),
						a = Y.maxY(e);
					for (let e of t)
						if (e.x < n || e.x > i || e.y < r || e.y > a) return !0;
					return !1;
				},
				edges: (e) => {
					let [t, n, r, i] = Y.cornerPoints(e);
					return [ry(t, n), ry(n, r), ry(r, i), ry(i, t)];
				},
				rebaseRectOnto: (e, t, n, r) => {
					let i = { ...e };
					switch (n) {
						case `bottom`:
						case `top`:
							switch (r) {
								case `start`:
									i.x = t.x;
									break;
								case `center`:
									i.x = t.x + t.width / 2 - e.width / 2;
									break;
								case `end`:
									i.x = t.x + t.width - e.width;
									break;
								default:
									V(r);
							}
							break;
						case `left`:
							i.x = t.x - e.width;
							break;
						case `right`:
							i.x = t.x + t.width;
							break;
						default:
							V(n);
					}
					switch (n) {
						case `left`:
						case `right`:
							switch (r) {
								case `start`:
									i.y = t.y;
									break;
								case `center`:
									i.y = t.y + t.height / 2 - e.height / 2;
									break;
								case `end`:
									i.y = t.y + t.height - e.height;
									break;
								default:
									V(r);
							}
							break;
						case `top`:
							i.y = t.y - e.height;
							break;
						case `bottom`:
							i.y = t.y + t.height;
							break;
						default:
							V(n);
					}
					return i;
				},
				constrain: (e, t) => {
					if (!t) return e;
					let n = Math.max(e.y, t.y);
					n = Math.min(n, t.y + t.height - e.height);
					let r = Math.max(e.x, t.x);
					return (
						(r = Math.min(r, t.x + t.width - e.width)),
						{ x: r, y: n, width: e.width, height: e.height }
					);
				},
				closestEdge: (e, t) => {
					let n = ry(t, Y.center(e)),
						r = Y.edges(e);
					for (let e = 0; e < r.length; e++) {
						let t = r[e];
						if (t && ry.intersection(n, t, !0)) {
							let n = iy[e];
							return (
								B(n, `Invalid edge name`, iy),
								{ edge: t, name: n }
							);
						}
					}
				},
				closestRect: (e, t) => {
					let n = 0,
						r = e[0];
					B(r, `Rect array is empty`);
					let i = Y.pointDistance(r, t);
					for (let a = 1; a < e.length; a += 1) {
						let o = e[a];
						B(o);
						let s = Y.pointDistance(o, t);
						if ((s < i && ((n = a), (r = o), (i = s)), i === 0))
							break;
					}
					return { rect: r, index: n };
				},
			}),
			(iy = [`top`, `right`, `bottom`, `left`]),
			(ay = {
				left: null,
				right: null,
				top: null,
				bottom: null,
				centerX: `50%`,
				centerY: `50%`,
				aspectRatio: null,
				parentSize: null,
				width: 100,
				height: 100,
			}),
			(oy = {
				quickfix: (e) => (
					(aa(e.widthType) || aa(e.heightType)) &&
						(e.aspectRatio = null),
					H(e.aspectRatio) &&
						(e.left && e.right && (e.widthType = 0),
						e.top && e.bottom && (e.heightType = 0),
						e.left &&
							e.right &&
							e.top &&
							e.bottom &&
							(e.bottom = !1),
						e.widthType !== 0 &&
							e.heightType !== 0 &&
							(e.heightType = 0)),
					e.left &&
						e.right &&
						((e.fixedSize || aa(e.widthType) || H(e.maxWidth)) &&
							(e.right = !1),
						(e.widthType = 0)),
					e.top &&
						e.bottom &&
						((e.fixedSize || aa(e.heightType) || H(e.maxHeight)) &&
							(e.bottom = !1),
						(e.heightType = 0)),
					e
				),
			}),
			(sy = {
				fromProperties: (e) => {
					let {
							left: t,
							right: n,
							top: r,
							bottom: i,
							width: a,
							height: o,
							centerX: s,
							centerY: c,
							aspectRatio: l,
							autoSize: u,
						} = e,
						d = oy.quickfix({
							left: H(t) || ai(t),
							right: H(n) || ai(n),
							top: H(r) || ai(r),
							bottom: H(i) || ai(i),
							widthType: sa(a),
							heightType: sa(o),
							aspectRatio: l || null,
							fixedSize: u === !0,
						}),
						f = null,
						p = null,
						m = 0,
						h = 0;
					if (d.widthType !== 0 && typeof a == `string`) {
						let e = parseFloat(a);
						a.endsWith(`fr`)
							? ((m = 3), (f = e))
							: a === `auto`
								? (m = 2)
								: ((m = 1), (f = e / 100));
					} else
						a !== void 0 &&
							typeof a != `string` &&
							(f = K.getNumber(a));
					if (d.heightType !== 0 && typeof o == `string`) {
						let e = parseFloat(o);
						o.endsWith(`fr`)
							? ((h = 3), (p = e))
							: o === `auto`
								? (h = 2)
								: ((h = 1), (p = parseFloat(o) / 100));
					} else
						o !== void 0 &&
							typeof o != `string` &&
							(p = K.getNumber(o));
					let g = 0.5,
						_ = 0.5;
					return (
						s && (g = parseFloat(s) / 100),
						c && (_ = parseFloat(c) / 100),
						{
							left: d.left ? K.getNumber(t) : null,
							right: d.right ? K.getNumber(n) : null,
							top: d.top ? K.getNumber(r) : null,
							bottom: d.bottom ? K.getNumber(i) : null,
							widthType: m,
							heightType: h,
							width: f,
							height: p,
							aspectRatio: d.aspectRatio || null,
							centerAnchorX: g,
							centerAnchorY: _,
						}
					);
				},
				toSize: (e, t, n, r) => {
					let i = null,
						a = null,
						o = t?.sizing ? K.getNumber(t?.sizing.width) : null,
						s = t?.sizing ? K.getNumber(t?.sizing.height) : null,
						c = pa(e.left, e.right);
					if (o && H(c)) i = o - c;
					else if (n && aa(e.widthType)) i = n.width;
					else if (H(e.width))
						switch (e.widthType) {
							case 0:
								i = e.width;
								break;
							case 3:
								i = r
									? (r.freeSpaceInParent.width /
											r.freeSpaceUnitDivisor.width) *
										e.width
									: null;
								break;
							case 1:
							case 4:
								o && (i = o * e.width);
								break;
							case 2:
							case 5:
								break;
							default:
								V(e.widthType);
						}
					let l = pa(e.top, e.bottom);
					if (s && H(l)) a = s - l;
					else if (n && aa(e.heightType)) a = n.height;
					else if (H(e.height))
						switch (e.heightType) {
							case 0:
								a = e.height;
								break;
							case 3:
								a = r
									? (r.freeSpaceInParent.height /
											r.freeSpaceUnitDivisor.height) *
										e.height
									: null;
								break;
							case 1:
							case 4:
								s && (a = s * e.height);
								break;
							case 2:
							case 5:
								break;
							default:
								V(e.heightType);
						}
					return fa(
						i,
						a,
						e,
						{ height: s ?? 0, width: o ?? 0 },
						t?.viewport,
					);
				},
				toRect: (e, t = null, n = null, r = !1, i = null) => {
					let a = e.left || 0,
						o = e.top || 0,
						{ width: s, height: c } = sy.toSize(e, t, n, i),
						l = t?.positioning ?? null,
						u = l ? K.getNumber(l.width) : null,
						d = l ? K.getNumber(l.height) : null;
					(e.left === null
						? u && e.right !== null
							? (a = u - e.right - s)
							: u && (a = e.centerAnchorX * u - s / 2)
						: (a = e.left),
						e.top === null
							? d && e.bottom !== null
								? (o = d - e.bottom - c)
								: d && (o = e.centerAnchorY * d - c / 2)
							: (o = e.top));
					let f = { x: a, y: o, width: s, height: c };
					return r ? Y.pixelAligned(f) : f;
				},
			}),
			(cy = 200),
			(ly = 200),
			(uy = f.createContext({ parentSize: 0 })),
			(dy = (e) => {
				let t = xa(),
					{ parentSize: n, children: r } = e,
					i = f.useMemo(() => ({ parentSize: n }), [Ca(n), wa(n)]);
				return t === 1
					? r
						? _(O, { children: r })
						: null
					: _(uy.Provider, { value: i, children: r });
			}),
			(PropertyControlTypes = ((e) => (
				(e.Boolean = `boolean`),
				(e.Number = `number`),
				(e.String = `string`),
				(e.RichText = `richtext`),
				(e.FusedNumber = `fusednumber`),
				(e.Enum = `enum`),
				(e.SegmentedEnum = `segmentedenum`),
				(e.Color = `color`),
				(e.Image = `image`),
				(e.ResponsiveImage = `responsiveimage`),
				(e.File = `file`),
				(e.ComponentInstance = `componentinstance`),
				(e.Slot = `slot`),
				(e.Array = `array`),
				(e.EventHandler = `eventhandler`),
				(e.ChangeHandler = `changehandler`),
				(e.Transition = `transition`),
				(e.BoxShadow = `boxshadow`),
				(e.Link = `link`),
				(e.Date = `date`),
				(e.Object = `object`),
				(e.Font = `font`),
				(e.PageScope = `pagescope`),
				(e.ScrollSectionRef = `scrollsectionref`),
				(e.CustomCursor = `customcursor`),
				(e.Border = `border`),
				(e.Cursor = `cursor`),
				(e.Padding = `padding`),
				(e.BorderRadius = `borderradius`),
				(e.Gap = `gap`),
				(e.CollectionReference = `collectionreference`),
				(e.MultiCollectionReference = `multicollectionreference`),
				(e.TrackingId = `trackingid`),
				(e.VectorSetItem = `vectorsetitem`),
				(e.LinkRelValues = `linkrelvalues`),
				(e.Location = `location`),
				e
			))(PropertyControlTypes || {})),
			(py = /Mac/u),
			(my = /iPhone|iPod|iPad/iu),
			(hy = /MacIntel/iu),
			(gy = /Edg\//u),
			(_y = /Chrome/u),
			(vy = /Google Inc/u),
			(yy = /Safari/u),
			(by = /Apple Computer/u),
			(xy = /Firefox\/\d+\.\d+$/u),
			(Sy = /FramerX/u),
			(Cy = /tablet|iPad|Nexus 9/iu),
			(wy = /mobi/iu),
			(Ty = f.createContext(void 0)),
			(Ey = new Set()),
			(Oy = `style[data-framer-css-ssr-minified]`),
			(ky = (() => {
				if (!La()) return new Set();
				let e = document
					.querySelector(Oy)
					?.getAttribute(`data-framer-components`);
				return e ? new Set(e.split(` `)) : new Set();
			})()),
			(Ay = `data-framer-css-ssr`),
			(jy = (e, t, n) =>
				f.forwardRef((r, i) => {
					let { sheet: a, cache: o } = f.useContext(Ty) ?? {},
						s = n;
					if (!La()) {
						Ze(t) && (t = t(FramerEnvironment.current(), r));
						let e = Array.isArray(t)
							? t.join(`
`)
							: t;
						Ny.add(e, s);
					}
					return (
						j(() => {
							(s && ky.has(s)) ||
								(Ze(t)
									? t(FramerEnvironment.current(), r)
									: Array.isArray(t)
										? t
										: t.split(`
`)
								).forEach((e) => e && Wa(e, a, o));
						}, []),
						_(e, { ...r, ref: i })
					);
				})),
			(My = class {
				constructor() {
					(I(this, `styles`, new Set()),
						I(this, `componentIds`, new Set()));
				}
				add(e, t) {
					(this.styles.add(e), t && this.componentIds.add(t));
				}
				getStyles() {
					return this.styles;
				}
				getComponentIds() {
					return this.componentIds;
				}
				clear() {
					(this.styles.clear(), this.componentIds.clear());
				}
			}),
			(Ny = new My()),
			(Fy = `flexbox-gap-not-supported`),
			(Iy = !1),
			(Ly = [
				`[data-framer-component-type="DeprecatedRichText"] { cursor: inherit; }`,
				`
[data-framer-component-type="DeprecatedRichText"] .text-styles-preset-reset {
    --framer-font-family: Inter, Inter Placeholder, sans-serif;
    --framer-font-style: normal;
    --framer-font-weight: 500;
    --framer-text-color: #000;
    --framer-font-size: 16px;
    --framer-letter-spacing: 0;
    --framer-text-transform: none;
    --framer-text-decoration: none;
    --framer-line-height: 1.2em;
    --framer-text-alignment: start;
    --framer-font-open-type-features: normal;
    --font-variation-settings: normal;
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6 {
    margin: 0;
    padding: 0;
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] p,
[data-framer-component-type="DeprecatedRichText"] div,
[data-framer-component-type="DeprecatedRichText"] h1,
[data-framer-component-type="DeprecatedRichText"] h2,
[data-framer-component-type="DeprecatedRichText"] h3,
[data-framer-component-type="DeprecatedRichText"] h4,
[data-framer-component-type="DeprecatedRichText"] h5,
[data-framer-component-type="DeprecatedRichText"] h6,
[data-framer-component-type="DeprecatedRichText"] li,
[data-framer-component-type="DeprecatedRichText"] ol,
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] span:not([data-text-fill]) {
    font-family: var(--framer-font-family, Inter, Inter Placeholder, sans-serif);
    font-style: var(--framer-font-style, normal);
    font-weight: var(--framer-font-weight, 400);
    color: var(--framer-text-color, #000);
    font-size: var(--framer-font-size, 16px);
    letter-spacing: var(--framer-letter-spacing, 0);
    text-transform: var(--framer-text-transform, none);
    text-decoration: var(--framer-text-decoration, none);
    line-height: var(--framer-line-height, 1.2em);
    text-align: var(--framer-text-alignment, start);
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] p:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] div:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h1:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h2:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h3:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h4:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h5:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] h6:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ol:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] ul:not(:first-child),
[data-framer-component-type="DeprecatedRichText"] .framer-image:not(:first-child) {
    margin-top: var(--framer-paragraph-spacing, 0);
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] span[data-text-fill] {
    display: inline-block;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] a,
[data-framer-component-type="DeprecatedRichText"] a span:not([data-text-fill]) {
    font-family: var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
    font-style: var(--framer-link-font-style, var(--framer-font-style, normal));
    font-weight: var(--framer-link-font-weight, var(--framer-font-weight, 400));
    color: var(--framer-link-text-color, var(--framer-text-color, #000));
    font-size: var(--framer-link-font-size, var(--framer-font-size, 16px));
    text-transform: var(--framer-link-text-transform, var(--framer-text-transform, none));
    text-decoration: var(--framer-link-text-decoration, var(--framer-text-decoration, none));
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] a:hover,
[data-framer-component-type="DeprecatedRichText"] a:hover span:not([data-text-fill]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current],
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current] span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
    font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)));
    font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)));
    color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
    font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)));
    text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
    text-decoration: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none)));
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover,
[data-framer-component-type="DeprecatedRichText"] a[data-framer-page-link-current]:hover span:not([data-text-fill]):not([data-nested-link]) {
    font-family: var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
    font-style: var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
    font-weight: var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
    color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
    font-size: var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))));
    text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
    text-decoration: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))));
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] strong {
    font-weight: bolder;
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] em {
    font-style: italic;
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] .framer-image {
    display: block;
    max-width: 100%;
    height: auto;
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] ul,
[data-framer-component-type="DeprecatedRichText"] ol {
    display: table;
    width: 100%;
    padding-left: 0;
    margin: 0;
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] li {
    display: table-row;
    counter-increment: list-item;
    list-style: none;
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] ol > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: counter(list-item) ".";
    white-space: nowrap;
}
`,
				`
[data-framer-component-type="DeprecatedRichText"] ul > li::before {
    display: table-cell;
    width: 2.25ch;
    box-sizing: border-box;
    padding-right: 0.75ch;
    content: "•";
}
`,
			]),
			(Ry = ((e) => (
				(e.Padding = `--framer-input-padding`),
				(e.BorderRadiusTopLeft = `--framer-input-border-radius-top-left`),
				(e.BorderRadiusTopRight = `--framer-input-border-radius-top-right`),
				(e.BorderRadiusBottomRight = `--framer-input-border-radius-bottom-right`),
				(e.BorderRadiusBottomLeft = `--framer-input-border-radius-bottom-left`),
				(e.CornerShape = `--framer-input-corner-shape`),
				(e.BorderColor = `--framer-input-border-color`),
				(e.BorderTopWidth = `--framer-input-border-top-width`),
				(e.BorderRightWidth = `--framer-input-border-right-width`),
				(e.BorderBottomWidth = `--framer-input-border-bottom-width`),
				(e.BorderLeftWidth = `--framer-input-border-left-width`),
				(e.BorderStyle = `--framer-input-border-style`),
				(e.Background = `--framer-input-background`),
				(e.FontFamily = `--framer-input-font-family`),
				(e.FontWeight = `--framer-input-font-weight`),
				(e.FontSize = `--framer-input-font-size`),
				(e.FontColor = `--framer-input-font-color`),
				(e.FontStyle = `--framer-input-font-style`),
				(e.FontLetterSpacing = `--framer-input-font-letter-spacing`),
				(e.FontTextAlignment = `--framer-input-font-text-alignment`),
				(e.FontLineHeight = `--framer-input-font-line-height`),
				(e.FontOpenType = `--framer-input-font-open-type-features`),
				(e.FontVariationAxes = `--framer-input-font-variation-axes`),
				(e.PlaceholderColor = `--framer-input-placeholder-color`),
				(e.BoxShadow = `--framer-input-box-shadow`),
				(e.FocusedBorderColor = `--framer-input-focused-border-color`),
				(e.FocusedBorderWidth = `--framer-input-focused-border-width`),
				(e.FocusedBorderStyle = `--framer-input-focused-border-style`),
				(e.FocusedBackground = `--framer-input-focused-background`),
				(e.FocusedBoxShadow = `--framer-input-focused-box-shadow`),
				(e.FocusedTransition = `--framer-input-focused-transition`),
				(e.BooleanCheckedBackground = `--framer-input-boolean-checked-background`),
				(e.BooleanCheckedBorderColor = `--framer-input-boolean-checked-border-color`),
				(e.BooleanCheckedBorderWidth = `--framer-input-boolean-checked-border-width`),
				(e.BooleanCheckedBorderStyle = `--framer-input-boolean-checked-border-style`),
				(e.BooleanCheckedBoxShadow = `--framer-input-boolean-checked-box-shadow`),
				(e.BooleanCheckedTransition = `--framer-input-boolean-checked-transition`),
				(e.InvalidTextColor = `--framer-input-invalid-text-color`),
				(e.IconBackgroundImage = `--framer-input-icon-image`),
				(e.IconMaskImage = `--framer-input-icon-mask-image`),
				(e.IconColor = `--framer-input-icon-color`),
				(e.IconContent = `--framer-input-icon-content`),
				(e.WrapperHeight = `--framer-input-wrapper-height`),
				e
			))(Ry || {})),
			(X = Ry),
			(zy = `framer-form-input`),
			(By = `framer-form-input-wrapper`),
			(Vy = `framer-form-input-empty`),
			(Hy = `framer-form-input-forced-focus`),
			(Z = (() => {
				function e(e, t) {
					let n = ` `;
					for (let e in t) {
						let r = t[e];
						(B(
							r !== void 0,
							"Encountered `undefined` in CSSDeclaration",
						),
							(n += `${e.replace(/([A-Z])/gu, `-$1`).toLowerCase()}: ${qa(r)}; `));
					}
					return e + ` {` + n + `}`;
				}
				return (
					(e.variable = (...e) => {
						let t = e[e.length - 1];
						B(
							t !== void 0,
							"Zero variables passed to `css.variable`",
						);
						let n = t.startsWith(`--`) ? `var(${t})` : t;
						for (let t = e.length - 2; t >= 0; t--)
							n = `var(${e[t]}, ${n})`;
						return n;
					}),
					e
				);
			})()),
			(Uy = (() => [
				Z(`.${zy}`, {
					padding: Z.variable(X.Padding),
					background: `transparent`,
					fontFamily: Z.variable(X.FontFamily),
					fontWeight: Z.variable(X.FontWeight),
					fontSize: Z.variable(X.FontSize),
					fontStyle: Z.variable(X.FontStyle),
					color: Z.variable(X.FontColor),
					fontFeatureSettings: Z.variable(X.FontOpenType),
					fontVariationSettings: Z.variable(X.FontVariationAxes),
					border: `none`,
					textOverflow: `ellipsis`,
					whiteSpace: `nowrap`,
					overflow: `hidden`,
					width: `100%`,
					height: Z.variable(X.WrapperHeight, `100%`),
					letterSpacing: Z.variable(X.FontLetterSpacing),
					textAlign: Z.variable(X.FontTextAlignment),
					lineHeight: Z.variable(X.FontLineHeight),
				}),
				Z(`.${zy}:focus-visible`, { outline: `none` }),
			])()),
			(Wy = (() => [Z(`.${By}`, { overflow: `hidden` })])()),
			(Gy = `var(${X.BorderTopWidth}) var(${X.BorderRightWidth}) var(${X.BorderBottomWidth}) var(${X.BorderLeftWidth})`),
			(Ky = (() => [
				`.${By}:after {
        content: "";
        pointer-events: none;
        box-sizing: border-box;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-top-left-radius: var(${X.BorderRadiusTopLeft});
        border-top-right-radius: var(${X.BorderRadiusTopRight});
        border-bottom-right-radius: var(${X.BorderRadiusBottomRight});
        border-bottom-left-radius: var(${X.BorderRadiusBottomLeft});
        corner-shape: var(${X.CornerShape});
        border-color: var(${X.BorderColor});
        border-top-width: var(${X.BorderTopWidth});
        border-right-width: var(${X.BorderRightWidth});
        border-bottom-width: var(${X.BorderBottomWidth});
        border-left-width: var(${X.BorderLeftWidth});
        border-style: var(${X.BorderStyle});
        transition: var(${X.FocusedTransition});
        transition-property: border-color, border-width, border-style, border-top-left-radius, border-top-right-radius, border-bottom-right-radius, border-bottom-left-radius, corner-shape;
    }`,
			])()),
			(qy = `customError`),
			(Jy = `valid`),
			(Yy = 10),
			(Xy = 8),
			(Zy = 16),
			(Qy = (() => ({
				backgroundRepeat: `no-repeat`,
				backgroundSize: `${Zy}px`,
				maskRepeat: `no-repeat`,
				maskSize: `${Zy}px`,
				backgroundColor: Z.variable(X.IconColor),
			}))()),
			($y = (() => ({
				content: ``,
				display: `block`,
				position: `absolute`,
				right: 0,
				top: 0,
				bottom: 0,
				width: `${Zy}px`,
				boxSizing: `content-box`,
				padding: Z.variable(X.Padding),
				border: `none`,
				pointerEvents: `none`,
				...Qy,
			}))()),
			(eb = {
				display: `flex`,
				flexDirection: `column`,
				justifyContent: `flex-start`,
			}),
			(tb = { display: `inline-block` }),
			(nb = { display: `block` }),
			(rb = (() => [
				`
        [data-framer-component-type="RichTextContainer"] {
            display: ${eb.display};
            flex-direction: ${eb.flexDirection};
            justify-content: ${eb.justifyContent};
            outline: none;
            flex-shrink: 0;
        }
    `,
				`
        p.framer-text,
        div.framer-text,
        figure.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        ol.framer-text,
        ul.framer-text {
            margin: 0;
            padding: 0;
        }
    `,
				`
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text,
        mark.framer-text,
        span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-text-color, #000));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-text-transform, none));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-text-decoration, initial));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-text-decoration-style, initial));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-text-decoration-color, initial));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-text-decoration-thickness, initial));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-text-decoration-offset, initial));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
            text-align: var(--framer-blockquote-text-alignment, var(--framer-text-alignment, start));
            -webkit-text-stroke-width: var(--framer-text-stroke-width, initial);
            -webkit-text-stroke-color: var(--framer-text-stroke-color, initial);
            -moz-font-feature-settings: var(--framer-font-open-type-features, initial);
            -webkit-font-feature-settings: var(--framer-font-open-type-features, initial);
            font-feature-settings: var(--framer-font-open-type-features, initial);
            font-variation-settings: var(--framer-font-variation-axes-preview, var(--framer-font-variation-axes, normal));
            text-wrap: var(--framer-text-wrap-override, var(--framer-text-wrap));
        }
    `,
				`
        mark.framer-text,
        p.framer-text,
        div.framer-text,
        h1.framer-text,
        h2.framer-text,
        h3.framer-text,
        h4.framer-text,
        h5.framer-text,
        h6.framer-text,
        li.framer-text,
        ol.framer-text,
        ul.framer-text {
            background-color: var(--framer-blockquote-text-background-color, var(--framer-text-background-color, initial));
            border-radius: var(--framer-blockquote-text-background-radius, var(--framer-text-background-radius, initial));
            corner-shape: var(--framer-blockquote-text-background-corner-shape, var(--framer-text-background-corner-shape, initial));
            padding: var(--framer-blockquote-text-background-padding, var(--framer-text-background-padding, initial));
        }
    `,
				`
        @supports not (color: color(display-p3 1 1 1)) {
            p.framer-text,
            div.framer-text,
            h1.framer-text,
            h2.framer-text,
            h3.framer-text,
            h4.framer-text,
            h5.framer-text,
            h6.framer-text,
            li.framer-text,
            ol.framer-text,
            ul.framer-text,
            span.framer-text:not([data-text-fill]) {
                color: ${Za([`--framer-blockquote-text-color`, `--framer-text-color`], `#000`)};
                -webkit-text-stroke-color: ${Za([`--framer-text-stroke-color`], `initial`)};
            }

            mark.framer-text {
                background-color: ${Za([`--framer-blockquote-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
				`
        .framer-fit-text .framer-text {
            white-space: nowrap;
            white-space-collapse: preserve;
        }
    `,
				`
        strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold, var(--framer-font-family-bold));
            font-style: var(--framer-blockquote-font-style-bold, var(--framer-font-style-bold));
            font-weight: var(--framer-blockquote-font-weight-bold, var(--framer-font-weight-bold, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold, var(--framer-font-variation-axes-bold));
        }
    `,
				`
        em.framer-text {
            font-family: var(--framer-blockquote-font-family-italic, var(--framer-font-family-italic));
            font-style: var(--framer-blockquote-font-style-italic, var(--framer-font-style-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-italic, var(--framer-font-weight-italic));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-italic, var(--framer-font-variation-axes-italic));
        }
    `,
				`
        em.framer-text > strong.framer-text {
            font-family: var(--framer-blockquote-font-family-bold-italic, var(--framer-font-family-bold-italic));
            font-style: var(--framer-blockquote-font-style-bold-italic, var(--framer-font-style-bold-italic, italic));
            font-weight: var(--framer-blockquote-font-weight-bold-italic, var(--framer-font-weight-bold-italic, bolder));
            font-variation-settings: var(--framer-blockquote-font-variation-axes-bold-italic, var(--framer-font-variation-axes-bold-italic));
        }
    `,
				`
        p.framer-text:not(:first-child),
        div.framer-text:not(:first-child),
        h1.framer-text:not(:first-child),
        h2.framer-text:not(:first-child),
        h3.framer-text:not(:first-child),
        h4.framer-text:not(:first-child),
        h5.framer-text:not(:first-child),
        h6.framer-text:not(:first-child),
        ol.framer-text:not(:first-child),
        ul.framer-text:not(:first-child),
        blockquote.framer-text:not(:first-child),
        table.framer-text:not(:first-child),
        figure.framer-text:not(:first-child),
        .framer-image.framer-text:not(:first-child) {
            margin-top: var(--framer-blockquote-paragraph-spacing, var(--framer-paragraph-spacing, 0));
        }
    `,
				`
        li.framer-text > ul.framer-text:nth-child(2),
        li.framer-text > ol.framer-text:nth-child(2) {
            margin-top: 0;
        }
    `,
				`
        .framer-text[data-text-fill] {
            display: ${tb.display};
            background-clip: text;
            -webkit-background-clip: text;
            /* make this a transparent color if you want to visualise the clipping  */
            -webkit-text-fill-color: transparent;
            padding: max(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / 2));
            margin: min(0em, calc(calc(1.3em - var(--framer-blockquote-line-height, var(--framer-line-height, 1.3em))) / -2));
        }
    `,
				`
        code.framer-text,
        code.framer-text span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
            font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
            color: var(--framer-blockquote-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            letter-spacing: var(--framer-blockquote-letter-spacing, var(--framer-letter-spacing, 0));
            line-height: var(--framer-blockquote-line-height, var(--framer-line-height, 1.2em));
        }
    `,
				`
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text,
            code.framer-text span.framer-text:not([data-text-fill]) {
                color: ${Za([`--framer-blockquote-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
            }
        }
    `,
				`
        blockquote.framer-text {
            margin-block-start: initial;
            margin-block-end: initial;
            margin-inline-start: initial;
            margin-inline-end: initial;
            unicode-bidi: initial;
        }
    `,
				`
        a.framer-text,
        a.framer-text span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link],
        span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            /* Ensure the color is inherited from the link style rather than the parent text for nested spans */
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            /* Cursor inherit to overwrite the user agent stylesheet on rich text links. */
            cursor: var(--framer-custom-cursors, pointer);
            /* Don't inherit background styles from any parent text style. */
            background-color: initial;
            border-radius: var(--framer-link-text-background-radius, initial);
            corner-shape: var(--framer-link-text-background-corner-shape, initial);
            padding: var(--framer-link-text-background-padding, initial);
        }
    `,
				`
        a.framer-text,
        span.framer-text[data-nested-link] {
            color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            /* Don't inherit background styles from any parent text style. */
            background-color: var(--framer-link-text-background-color, initial);
        }
    `,
				`
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text,
            span.framer-text[data-nested-link] {
                color: ${Za([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Za([`--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Za([`--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
				`
    code.framer-text a.framer-text,
    code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
    code.framer-text span.framer-text[data-nested-link],
    code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
        font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
        font-style: var(--framer-blockquote-font-style, var(--framer-code-font-style, var(--framer-font-style, normal)));
        font-weight: var(--framer-blockquote-font-weight, var(--framer-code-font-weight, var(--framer-font-weight, 400)));
        color: inherit;
        font-size: calc(var(--framer-blockquote-font-size, var(--framer-font-size, 16px)) * var(--framer-font-size-scale, 1));
    }
`,
				`
    code.framer-text a.framer-text,
    code.framer-text span.framer-text[data-nested-link] {
        color: var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
    }
`,
				`
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text,
        code.framer-text a.framer-text span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-nested-link],
        code.framer-text span.framer-text[data-nested-link] span.framer-text:not([data-text-fill]) {
            color: ${Za([`--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
`,
				`
        a.framer-text:hover,
        a.framer-text:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-nested-link]:hover,
        span.framer-text[data-nested-link]:hover span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-blockquote-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-blockquote-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-blockquote-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-blockquote-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-blockquote-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-text-background-radius, var(--framer-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-text-background-corner-shape, var(--framer-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-text-background-padding, var(--framer-text-background-padding, initial)));
        }
    `,
				`
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-blockquote-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-blockquote-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-blockquote-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-blockquote-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-blockquote-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-blockquote-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
				`
    @supports not (color: color(display-p3 1 1 1)) {
        a.framer-text:hover,
        span.framer-text[data-nested-link]:hover {
            color: ${Za([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
            background-color: ${Za([`--framer-link-hover-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            text-decoration-color: ${Za([`--framer-link-hover-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
        }
    }
    `,
				`
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-blockquote-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
				`
    @supports not (color: color(display-p3 1 1 1)) {
        code.framer-text a.framer-text:hover,
        code.framer-text span.framer-text[data-nested-link]:hover {
            color: ${Za([`--framer-link-hover-text-color`, `--framer-blockquote-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
        }
    }
   `,
				`
        a.framer-text[data-framer-page-link-current],
        a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-font-family-preview, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif))));
            font-style: var(--framer-font-style-preview, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400))));
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none)));
            border-radius: var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial));
            corner-shape: var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial));
            padding: var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial));
        }
    `,
				`
        a.framer-text[data-framer-page-link-current],
        span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000)));
            text-decoration-line: var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial)));
            text-decoration-style: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial)));
            text-decoration-color: var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial)));
            text-decoration-thickness: var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial)));
            text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial)));
            text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial)));
            background-color: var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, var(--framer-text-background-color, initial)));
        }
    `,
				`
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current],
            span.framer-text[data-framer-page-link-current]{
                color: ${Za([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Za([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
                text-decoration-color: ${Za([`--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
				`
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
        code.framer-text span.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
            font-family: var(--framer-code-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif));
            font-style: var(--framer-code-font-style, var(--framer-font-style, normal));
            font-weight: var(--framer-code-font-weight, var(--framer-font-weight, 400));
            color: inherit;
            font-size: calc(var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px))) * var(--framer-font-size-scale, 1));
        }
    `,
				`
        code.framer-text a.framer-text[data-framer-page-link-current],
        code.framer-text span.framer-text[data-framer-page-link-current] {
            color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000))));
        }
    `,
				`
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current],
            code.framer-text a.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current],
            code.framer-text span.framer-text[data-framer-page-link-current] span.framer-text:not([data-text-fill]) {
                color: ${Za([`--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Za([`--framer-link-current-text-background-color`, `--framer-link-text-background-color`, `--framer-text-background-color`], `initial`)};
            }
        }
    `,
				`
        a.framer-text[data-framer-page-link-current]:hover,
        a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
        span.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
            color: inherit;
            font-family: var(--framer-font-family-preview, var(--framer-link-hover-font-family, var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family, Inter, Inter Placeholder, sans-serif)))));
            font-style: var(--framer-font-style-preview, var(--framer-link-hover-font-style, var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style, normal)))));
            font-weight: var(--framer-font-weight-preview, var(--framer-link-hover-font-weight, var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight, 400)))));
            font-size: calc(var(--framer-link-hover-font-size, var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size, 16px)))) * var(--framer-font-size-scale, 1));
            text-transform: var(--framer-link-hover-text-transform, var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform, none))));
            border-radius: var(--framer-link-hover-text-background-radius, var(--framer-link-current-text-background-radius, var(--framer-link-text-background-radius, initial)));
            corner-shape: var(--framer-link-hover-text-background-corner-shape, var(--framer-link-current-text-background-corner-shape, var(--framer-link-text-background-corner-shape, initial)));
            padding: var(--framer-link-hover-text-background-padding, var(--framer-link-current-text-background-padding, var(--framer-link-text-background-padding, initial)));
        }
    `,
				`
        a.framer-text[data-framer-page-link-current]:hover,
        span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color, #000))));
            text-decoration-line: var(--framer-link-hover-text-decoration, var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, initial))));
            text-decoration-style: var(--framer-link-hover-text-decoration-style, var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, initial))));
            text-decoration-color: var(--framer-link-hover-text-decoration-color, var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, initial))));
            text-decoration-thickness: var(--framer-link-hover-text-decoration-thickness, var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, initial))));
            text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink, initial))));
            text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset, initial))));
            background-color: var(--framer-link-hover-text-background-color, var(--framer-link-current-text-background-color, var(--framer-link-text-background-color, initial)));
        }
    `,
				`
        @supports not (color: color(display-p3 1 1 1)) {
            a.framer-text[data-framer-page-link-current]:hover,
            span.framer-text[data-framer-page-link-current]:hover {
                color: ${Za([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Za([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
                text-decoration-color: ${Za([`--framer-link-hover-text-decoration-color`, `--framer-link-current-text-decoration-color`, `--framer-link-text-decoration-color`, `--framer-text-decoration-color`], `currentcolor`)};
            }
        }
    `,
				`
        code.framer-text a.framer-text[data-framer-page-link-current]:hover,
        code.framer-text span.framer-text[data-framer-page-link-current]:hover {
            color: var(--framer-link-hover-text-color, var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-code-text-color, var(--framer-text-color, #000)))));
        }
    `,
				`
        @supports not (color: color(display-p3 1 1 1)) {
            code.framer-text a.framer-text[data-framer-page-link-current]:hover,
            code.framer-text a.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]),
            code.framer-text span.framer-text[data-framer-page-link-current]:hover,
            code.framer-text span.framer-text[data-framer-page-link-current]:hover span.framer-text:not([data-text-fill]) {
                color: ${Za([`--framer-link-hover-text-color`, `--framer-link-current-text-color`, `--framer-link-text-color`, `--framer-code-text-color`, `--framer-text-color`], `#000`)};
                background-color: ${Za([`--framer-link-hover-text-background-color`, `--framer-link-current-text-background-color`, `--framer-link-text-background-color`], `initial`)};
            }
        }
    `,
				`
        .framer-image.framer-text {
            display: ${nb.display};
            max-width: 100%;
            height: auto;
        }
    `,
				`
        .text-styles-preset-reset.framer-text {
            --framer-font-family: Inter, Inter Placeholder, sans-serif;
            --framer-font-style: normal;
            --framer-font-weight: 500;
            --framer-text-color: #000;
            --framer-font-size: 16px;
            --framer-letter-spacing: 0;
            --framer-text-transform: none;
            --framer-text-decoration: none;
            --framer-text-decoration-style: none;
            --framer-text-decoration-color: none;
            --framer-text-decoration-thickness: none;
            --framer-text-decoration-skip-ink: none;
            --framer-text-decoration-offset: none;
            --framer-line-height: 1.2em;
            --framer-text-alignment: start;
            --framer-font-open-type-features: normal;
            --framer-text-background-color: initial;
            --framer-text-background-radius: initial;
            --framer-text-background-corner-shape: initial;
            --framer-text-background-padding: initial;
        }
    `,
				`
        ol.framer-text {
            --list-style-type: decimal;
        }
    `,
				`
        ul.framer-text,
        ol.framer-text {
            padding-inline-start: 0;
            position: relative;
        }
    `,
				`
        li.framer-text {
            counter-increment: list-item;
            list-style: none;
            padding-inline-start: 2ch;
        }
    `,
				`
        ol.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: counter(list-item, var(--list-style-type)) ".";
            font-variant-numeric: tabular-nums;
        }
    `,
				`
        ol.framer-text > li.framer-text:nth-last-child(n + 10),
        ol.framer-text > li.framer-text:nth-last-child(n + 10) ~ li {
            padding-inline-start: 3ch;
        }
    `,
				`
        ol.framer-text > li.framer-text:nth-last-child(n + 100),
        ol.framer-text > li.framer-text:nth-last-child(n + 100) ~ li {
            padding-inline-start: 4ch;
        }
    `,
				`
        ol.framer-text > li.framer-text:nth-last-child(n + 1000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000) ~ li {
            padding-inline-start: 5ch;
        }
    `,
				`
        ol.framer-text > li.framer-text:nth-last-child(n + 10000),
        ol.framer-text > li.framer-text:nth-last-child(n + 10000) ~ li {
            padding-inline-start: 6ch;
        }
    `,
				`
        ol.framer-text > li.framer-text:nth-last-child(n + 100000),
        ol.framer-text > li.framer-text:nth-last-child(n + 100000) ~ li {
            padding-inline-start: 7ch;
        }
    `,
				`
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000),
        ol.framer-text > li.framer-text:nth-last-child(n + 1000000) ~ li {
            padding-inline-start: 8ch;
        }
    `,
				`
        ul.framer-text > li.framer-text::before {
            position: absolute;
            inset-inline-start: 0;
            content: "•";
        }
    `,
				`
        .framer-table-wrapper {
            overflow-x: auto;
        }
    `,
				`
        table.framer-text,
        .framer-table-wrapper table.framer-text {
            border-collapse: separate;
            border-spacing: 0;
            table-layout: auto;
            word-break: normal;
            width: 100%;
        }
    `,
				`
        td.framer-text,
        th.framer-text {
            min-width: 16ch;
            vertical-align: top;
        }
    `,
				`
        ${Qa(`.framer-text-module[data-width="fill"]`, `:first-child`)} {
            width: 100% !important;
        }
    `,
			])()),
			(ib = `--text-truncation-display-inline-for-safari-16`),
			(ab = `--text-truncation-display-none-for-safari-16`),
			(ob = `--text-truncation-line-break-for-safari-16`),
			(sb = [
				`div.framer-text`,
				`p.framer-text`,
				`h1.framer-text`,
				`h2.framer-text`,
				`h3.framer-text`,
				`h4.framer-text`,
				`h5.framer-text`,
				`h6.framer-text`,
				`ol.framer-text`,
				`ul.framer-text`,
				`li.framer-text`,
				`blockquote.framer-text`,
				`.framer-text.framer-image`,
			]),
			(cb = `(background: -webkit-named-image(i))`),
			(lb = `(contain-intrinsic-size: inherit)`),
			(ub = (() => [
				`@supports ${cb} and (not ${lb}) {
        /* Render block-like elements inline when text is truncated, otherwise default to user agent (revert)  */
        ${sb.join(`, `)} { display: var(${ib}, revert) }

        /* Add a line break after each block-like element that we render inline, to resemble the block-like behavior */
        ${sb.map((e) => `${e}::after`).join(`, `)} { content: var(${ob}); white-space: pre; }

        /* Don't render modules (e.g. videos, code-blocks), or tables when text is truncated, because often these can't be truncated and their children might be block elements */
        .framer-text.framer-text-module,
        .framer-text.framer-table-wrapper { display: var(${ab}, revert) }

        /* Render text-fill elements inline when text is truncated, otherwise default to their default value (e.g. inline-block) */
        p.framer-text[data-text-fill] { display: var(${ib}, ${tb.display}) }
    }`,
			])()),
			(db = [`[data-framer-component-type] { position: absolute; }`]),
			(fb = [
				`[data-framer-component-type="Text"] { cursor: inherit; }`,
				`[data-framer-component-text-autosized] * { white-space: pre; }`,
				`
[data-framer-component-type="Text"] > * {
    text-align: var(--framer-text-alignment, start);
}`,
				`
[data-framer-component-type="Text"] span span,
[data-framer-component-type="Text"] p span,
[data-framer-component-type="Text"] h1 span,
[data-framer-component-type="Text"] h2 span,
[data-framer-component-type="Text"] h3 span,
[data-framer-component-type="Text"] h4 span,
[data-framer-component-type="Text"] h5 span,
[data-framer-component-type="Text"] h6 span {
    display: block;
}`,
				`
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span {
    display: unset;
}`,
				`
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    font-family: var(--font-family);
    font-style: var(--font-style);
    font-weight: min(calc(var(--framer-font-weight-increase, 0) + var(--font-weight, 400)), 900);
    color: var(--text-color);
    letter-spacing: var(--letter-spacing);
    font-size: var(--font-size);
    text-transform: var(--text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    line-height: var(--line-height);
}`,
				`
[data-framer-component-type="Text"] div div span,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] span span span,
[data-framer-component-type="Text"] p span span,
[data-framer-component-type="Text"] h1 span span,
[data-framer-component-type="Text"] h2 span span,
[data-framer-component-type="Text"] h3 span span,
[data-framer-component-type="Text"] h4 span span,
[data-framer-component-type="Text"] h5 span span,
[data-framer-component-type="Text"] h6 span span,
[data-framer-component-type="Text"] a {
    --font-family: var(--framer-font-family);
    --font-style: var(--framer-font-style);
    --font-weight: var(--framer-font-weight);
    --text-color: var(--framer-text-color);
    --letter-spacing: var(--framer-letter-spacing);
    --font-size: var(--framer-font-size);
    --text-transform: var(--framer-text-transform);
    --text-decoration: var(--framer-text-decoration-style, solid) var(--framer-text-decoration, none) var(--framer-text-decoration-color, currentcolor) var(--framer-text-decoration-thickness, auto);
    --text-decoration-skip-ink: var(--framer-text-decoration-skip-ink);
    --text-underline-offset: var(--framer-text-decoration-offset);
    --line-height: var(--framer-line-height);
}`,
				`
[data-framer-component-type="Text"] a,
[data-framer-component-type="Text"] a div span,
[data-framer-component-type="Text"] a span span span,
[data-framer-component-type="Text"] a p span span,
[data-framer-component-type="Text"] a h1 span span,
[data-framer-component-type="Text"] a h2 span span,
[data-framer-component-type="Text"] a h3 span span,
[data-framer-component-type="Text"] a h4 span span,
[data-framer-component-type="Text"] a h5 span span,
[data-framer-component-type="Text"] a h6 span span {
    --font-family: var(--framer-link-font-family, var(--framer-font-family));
    --font-style: var(--framer-link-font-style, var(--framer-font-style));
    --font-weight: var(--framer-link-font-weight, var(--framer-font-weight));
    --text-color: var(--framer-link-text-color, var(--framer-text-color));
    --font-size: var(--framer-link-font-size, var(--framer-font-size));
    --text-transform: var(--framer-link-text-transform, var(--framer-text-transform));
    --text-decoration: var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid)) var(--framer-link-text-decoration, var(--framer-text-decoration, none)) var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor)) var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto));
    --text-decoration-skip-ink: var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink));
    --text-underline-offset: var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset));
}`,
				`
[data-framer-component-type="Text"] a:hover,
[data-framer-component-type="Text"] a div span:hover,
[data-framer-component-type="Text"] a span span span:hover,
[data-framer-component-type="Text"] a p span span:hover,
[data-framer-component-type="Text"] a h1 span span:hover,
[data-framer-component-type="Text"] a h2 span span:hover,
[data-framer-component-type="Text"] a h3 span span:hover,
[data-framer-component-type="Text"] a h4 span span:hover,
[data-framer-component-type="Text"] a h5 span span:hover,
[data-framer-component-type="Text"] a h6 span span:hover {
    --font-family: var(--framer-link-hover-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-hover-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-hover-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-hover-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-hover-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-hover-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-hover-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-hover-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-hover-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-hover-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-hover-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-hover-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
				`
[data-framer-component-type="Text"].isCurrent a,
[data-framer-component-type="Text"].isCurrent a div span,
[data-framer-component-type="Text"].isCurrent a span span span,
[data-framer-component-type="Text"].isCurrent a p span span,
[data-framer-component-type="Text"].isCurrent a h1 span span,
[data-framer-component-type="Text"].isCurrent a h2 span span,
[data-framer-component-type="Text"].isCurrent a h3 span span,
[data-framer-component-type="Text"].isCurrent a h4 span span,
[data-framer-component-type="Text"].isCurrent a h5 span span,
[data-framer-component-type="Text"].isCurrent a h6 span span {
    --font-family: var(--framer-link-current-font-family, var(--framer-link-font-family, var(--framer-font-family)));
    --font-style: var(--framer-link-current-font-style, var(--framer-link-font-style, var(--framer-font-style)));
    --font-weight: var(--framer-link-current-font-weight, var(--framer-link-font-weight, var(--framer-font-weight)));
    --text-color: var(--framer-link-current-text-color, var(--framer-link-text-color, var(--framer-text-color)));
    --font-size: var(--framer-link-current-font-size, var(--framer-link-font-size, var(--framer-font-size)));
    --text-transform: var(--framer-link-current-text-transform, var(--framer-link-text-transform, var(--framer-text-transform)));
    --text-decoration: var(--framer-link-current-text-decoration-style, var(--framer-link-text-decoration-style, var(--framer-text-decoration-style, solid))) var(--framer-link-current-text-decoration, var(--framer-link-text-decoration, var(--framer-text-decoration, none))) var(--framer-link-current-text-decoration-color, var(--framer-link-text-decoration-color, var(--framer-text-decoration-color, currentcolor))) var(--framer-link-current-text-decoration-thickness, var(--framer-link-text-decoration-thickness, var(--framer-text-decoration-thickness, auto)));
    --text-decoration-skip-ink: var(--framer-link-current-text-decoration-skip-ink, var(--framer-link-text-decoration-skip-ink, var(--framer-text-decoration-skip-ink)));
    --text-underline-offset: var(--framer-link-current-text-decoration-offset, var(--framer-link-text-decoration-offset, var(--framer-text-decoration-offset)));
}`,
			]),
			(pb = `
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-component-type],
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > *,
:not([data-framer-generated]) > [data-framer-stack-content-wrapper] > [data-framer-legacy-stack-gap-enabled] > [data-framer-component-type] {
    position: relative;
}`),
			(mb = (() => [
				`[data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: var(--stack-native-row-gap);
        column-gap: var(--stack-native-column-gap);
    }`,
				`.${Fy} [data-framer-stack-content-wrapper][data-framer-stack-gap-enabled="true"] {
        row-gap: unset;
        column-gap: unset;
    }`,
			])()),
			(hb = (() => `
.${Fy} [data-framer-legacy-stack-gap-enabled="true"] > *, [data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"] {
    margin-top: calc(var(--stack-gap-y) / 2);
    margin-bottom: calc(var(--stack-gap-y) / 2);
    margin-right: calc(var(--stack-gap-x) / 2);
    margin-left: calc(var(--stack-gap-x) / 2);
}
`)()),
			(gb = (() => `
.${Fy}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child,
.${Fy}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child {
    margin-top: 0;
    margin-left: 0;
}`)()),
			(_b = (() => `
.${Fy}
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:last-child,
[data-framer-stack-direction-reverse="false"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:last-child,
.${Fy}
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"]
> *:first-child,
[data-framer-stack-direction-reverse="true"]
[data-framer-legacy-stack-gap-enabled="true"][data-framer-stack-flexbox-gap="false"]
> *:first-child {
    margin-right: 0;
    margin-bottom: 0;
}`)()),
			(vb = (() => [pb, hb, ...mb, gb, _b])()),
			(yb = [
				`
NavigationContainer
[data-framer-component-type="NavigationContainer"] > *,
[data-framer-component-type="NavigationContainer"] > [data-framer-component-type] {
    position: relative;
}`,
			]),
			(bb = [
				`[data-framer-component-type="Scroll"]::-webkit-scrollbar { display: none; }`,
				`[data-framer-component-type="ScrollContentWrapper"] > * { position: relative; }`,
			]),
			(xb = [
				`[data-framer-component-type="NativeScroll"] { -webkit-overflow-scrolling: touch; }`,
				`[data-framer-component-type="NativeScroll"] > * { position: relative; }`,
				`[data-framer-component-type="NativeScroll"].direction-both { overflow-x: auto; overflow-y: auto; }`,
				`[data-framer-component-type="NativeScroll"].direction-vertical { overflow-x: hidden; overflow-y: auto; }`,
				`[data-framer-component-type="NativeScroll"].direction-horizontal { overflow-x: auto; overflow-y: hidden; }`,
				`[data-framer-component-type="NativeScroll"].direction-vertical > * { width: 100% !important; }`,
				`[data-framer-component-type="NativeScroll"].direction-horizontal > * { height: 100% !important; }`,
				`[data-framer-component-type="NativeScroll"].scrollbar-hidden::-webkit-scrollbar { display: none; }`,
			]),
			(Sb = [
				`[data-framer-component-type="DeviceComponent"].no-device > * { width: 100% !important; height: 100% !important; }`,
			]),
			(Cb = [
				`[data-framer-component-type="PageContentWrapper"] > *, [data-framer-component-type="PageContentWrapper"] > [data-framer-component-type] { position: relative; }`,
			]),
			(wb = [
				`[data-is-present="false"], [data-is-present="false"] * { pointer-events: none !important; }`,
			]),
			(Tb = [
				`.framer-lightbox-container { opacity: 1 !important; pointer-events: auto !important; }`,
			]),
			(Eb = [
				`[data-framer-cursor="pointer"] { cursor: pointer; }`,
				`[data-framer-cursor="grab"] { cursor: grab; }`,
				`[data-framer-cursor="grab"]:active { cursor: grabbing; }`,
			]),
			(Db = [
				`[data-framer-component-type="Frame"] *, [data-framer-component-type="Stack"] * { pointer-events: auto; }`,
				`[data-framer-generated] * { pointer-events: unset }`,
			]),
			(Ob = [
				`[data-reset="button"] {
        border-width: 0;
        padding: 0;
        background: none;
}`,
			]),
			(kb = [
				`[data-hide-scrollbars="true"]::-webkit-scrollbar { width: 0px; height: 0px; }`,
				`[data-hide-scrollbars="true"]::-webkit-scrollbar-thumb { background: transparent; }`,
				`[data-hide-scrollbars="true"] { scrollbar-width: none; }`,
			]),
			(Ab = `--framer-will-change-override`),
			(jb = `--framer-will-change-effect-override`),
			(Mb = `--framer-will-change-filter-override`),
			(Nb = `(background: -webkit-named-image(i))`),
			(Pb = `(grid-template-rows: subgrid)`),
			(Fb = `(position-area: top right)`),
			(Ib = (e) =>
				e
					? [
							`body { ${Ab}: none; }`,
							`@supports ${Nb} and (not ${Pb}) { body { ${Ab}: transform; } }`,
						]
					: [`body { ${Ab}: none; ${jb}: none; }`]),
			(Lb = (e) =>
				e
					? [
							`body { ${Mb}: none; }`,
							`@supports ${Nb} and (not ${Fb}) { body { ${Mb}: filter; } }`,
						]
					: [`body { ${Mb}: none; }`]),
			(Rb = (e) => (e ? Db : [])),
			(zb = [`.svgContainer svg { display: block; }`]),
			(Bb = `--overflow-clip-fallback`),
			(Vb = (() => [
				`@supports (not (overflow: clip)) {
        :root { ${Bb}: hidden; }
    }`,
			])()),
			(Hb = `--one-if-corner-shape-supported`),
			(Ub = (() => [
				`@supports (corner-shape: superellipse(2)) { :root { ${Hb}: 1 } }`,
			])()),
			(Wb = (e) => [
				...Ib(e),
				...Lb(e),
				...db,
				...fb,
				...rb,
				...Ly,
				...vb,
				...yb,
				...bb,
				...xb,
				...Cb,
				...Sb,
				...wb,
				...Eb,
				...Rb(e),
				...zb,
				...Ob,
				...kb,
				...Vb,
				...Tb,
				...ub,
				...Ub,
			]),
			(Gb = Wb(!1)),
			(Kb = Wb(!0)),
			(qb = `optional`),
			(Jb = (e) => e),
			(Yb =
				/^(?:children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|[dkrxyz]|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y1|y2|yChannelSelector|zoomAndPan|for|class|autofocus|(?:[Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*)$/u),
			(Xb = fo(
				(e) =>
					Yb.test(e) ||
					(e.charCodeAt(0) === 111 &&
						e.charCodeAt(1) === 110 &&
						e.charCodeAt(2) < 91),
			)),
			(Zb = (e) => () => {
				ri(e);
			}),
			(Qb = () => () => {}),
			($b = {
				imagePlaceholderSvg: `<svg xmlns="http://www.w3.org/2000/svg" width="126" height="126"><path id="a" d="M126 0v21.584L21.584 126H0v-17.585L108.415 0H126Zm0 108.414V126h-17.586L126 108.414Zm0-84v39.171L63.585 126H24.414L126 24.414Zm0 42v39.17L105.584 126h-39.17L126 66.414ZM105.586 0 0 105.586V66.415L66.415 0h39.171Zm-42 0L0 63.586V24.415L24.415 0h39.171Zm-42 0L0 21.586V0h21.586Z" fill="rgb(136, 136, 136, 0.2)" fill-rule="evenodd"/></svg>`,
				useImageSource(e) {
					return e.src ?? ``;
				},
				useImageElement(e, t, n) {
					let r = tx.useImageSource(e, t, n);
					return c(() => {
						let t = new Image();
						return (
							(t.src = r),
							e.srcSet && (t.srcset = e.srcSet),
							t
						);
					}, [r, e.srcSet]);
				},
				canRenderOptimizedCanvasImage() {
					return !1;
				},
				isOnPageCanvas: !1,
			}),
			(ex = !1),
			(tx = new Proxy($b, {
				get(e, t, n) {
					return Reflect.has(e, t)
						? Reflect.get(e, t, n)
						: [`getLogger`].includes(String(t))
							? Qb()
							: Zb(
									ex
										? `${String(t)} is not available in this version of Framer.`
										: `${String(t)} is only available inside of Framer. https://www.framer.com/`,
								);
				},
			})),
			(nx = { borderRadius: `inherit`, cornerShape: `inherit` }),
			(rx = [1, 2, 2.2]),
			(ix = [512, 1024, 2048, 4096]),
			(ax = 512),
			(ox = (() => ({
				position: `absolute`,
				...nx,
				top: 0,
				right: 0,
				bottom: 0,
				left: 0,
			}))()),
			(sx = `src`),
			(cx = {
				isImageObject: function (e) {
					return !e || typeof e == `string`
						? !1
						: typeof e == `object` && sx in e;
				},
			}),
			(lx = Pa()),
			(ux = typeof document < `u` ? r : d),
			(dx = f.createContext(!1)),
			(fx = class {
				constructor() {
					(I(this, `sharedResizeObserver`),
						I(this, `callbacks`, new WeakMap()),
						(this.sharedResizeObserver = new ResizeObserver(
							this.updateResizedElements.bind(this),
						)));
				}
				updateResizedElements(e) {
					for (let t of e) {
						let e = this.callbacks.get(t.target);
						e && e(t.contentRect);
					}
				}
				observeElementWithCallback(e, t) {
					(this.sharedResizeObserver.observe(e),
						this.callbacks.set(e, t));
				}
				unobserve(e) {
					(this.sharedResizeObserver.unobserve(e),
						this.callbacks.delete(e));
				}
			}),
			(px = (() => (La() ? new fx() : void 0))()),
			(mx = `data-framer-size-compatibility-wrapper`),
			(hx = `0.000001px`),
			(gx = (() => ` translateZ(${hx})`)()),
			(_x = (() => Ra() || Fa() || za())()),
			(vx = (() => {
				class e extends v {
					constructor() {
						(super(...arguments),
							I(this, `layerElement`, null),
							I(this, `setLayerElement`, (e) => {
								this.layerElement = e;
							}));
					}
					static applyWillChange(e, t, n) {
						e.willChangeTransform && (n ? Ko(t) : qo(t));
					}
					shouldComponentUpdate(e, t) {
						return (
							e._needsMeasure ||
							this.state !== t ||
							!Et(this.props, e)
						);
					}
					componentDidUpdate(e) {
						Jb(this.props).clip &&
							Jb(this.props).radius === 0 &&
							Jb(e).radius !== 0 &&
							Yo(this.layerElement, `overflow`, `hidden`, !1);
					}
				}
				return (I(e, `defaultProps`, {}), e);
			})()),
			(yx = (e) => {
				let t = 0,
					n,
					r;
				if (e.length === 0) return t;
				for (n = 0; n < e.length; n++)
					((r = e.charCodeAt(n)), (t = (t << 5) - t + r), (t |= 0));
				return t;
			}),
			(bx = {
				hueRotate: (e, t) => q.toHslString(q.hueRotate(q(e), t)),
				setAlpha: (e, t) => q.toRgbString(q.alpha(q(e), t)),
				getAlpha: (e) => {
					let t = ki(e);
					return t ? t.a : 1;
				},
				multiplyAlpha: (e, t) =>
					q.toRgbString(q.multiplyAlpha(q(e), t)),
				toHexValue: (e) => q.toHex(q(e)).toUpperCase(),
				toHex: (e) => q.toHexString(q(e)).toUpperCase(),
				toRgb: (e) => q.toRgb(q(e)),
				toRgbString: (e) => q.toRgbString(q(e)),
				toHSV: (e) => q.toHsv(q(e)),
				toHSL: (e) => q.toHsl(q(e)),
				toHslString: (e) => q.toHslString(q(e)),
				toHsvString: (e) => q.toHsvString(q(e)),
				hsvToHSLString: (e) => q.toHslString(q(_i(e.h, e.s, e.v, e.a))),
				hsvToHexValue: (e) =>
					q.toHex(q(_i(e.h, e.s, e.v, e.a))).toUpperCase(),
				hsvToHex: (e) =>
					q.toHexString(q(_i(e.h, e.s, e.v, e.a))).toUpperCase(),
				hsvToRgbString: (e) => q.toRgbString(q(_i(e.h, e.s, e.v, e.a))),
				hsvToString: (e) => _i(e.h, e.s, e.v),
				rgbaToString: (e) => q.toRgbString(q(e)),
				rgbToHexValue: (e) => q.toHex(q(e)),
				rgbToHexString: (e) => q.toHexString(q(e)),
				hslToString: (e) => q.toHslString(q(e)),
				hslToRgbString: (e) => q.toRgbString(q(e)),
				toColorPickerSquare: (e) =>
					q.toRgbString(q({ h: e, s: 1, l: 0.5, a: 1 })),
				isValid: (e) => q(e).isValid !== !1,
				equals: (e, t) =>
					q.isP3String(e) || q.isP3String(t)
						? e === t
						: (typeof e == `string` && (e = q(e)),
							typeof t == `string` && (t = q(t)),
							q.equal(e, t)),
				toHexOrRgbaString: (e) => {
					let t = q(e);
					return t.a === 1 ? q.toHexString(t) : q.toRgbString(t);
				},
				toFormatString: (e) =>
					q.isP3String(e) ? e : q.toRgbString(q(e)),
			}),
			(xx = /var\(.+\)/u),
			(Sx = new Map()),
			(Cx = [`stops`]),
			(wx = [`start`, `end`]),
			(Tx = [`angle`, `alpha`]),
			(Ex = {
				isLinearGradient: (e) =>
					z(e) && Tx.every((t) => t in e) && (rs(e) || ns(e)),
				hash: (e) => e.angle ^ ts(e, e.alpha),
				toCSS: (e, t, n) => {
					let r = es(e, e.alpha),
						i = t === void 0 ? e.angle : t;
					return `linear-gradient(${Math.round(i)}deg, ${r.map((e) => `${n?.(e.value) ?? e.value} ${e.position * 100}%`).join(`, `)})`;
				},
			}),
			(Dx = [
				`widthFactor`,
				`heightFactor`,
				`centerAnchorX`,
				`centerAnchorY`,
				`alpha`,
			]),
			(Ox = {
				isRadialGradient: (e) =>
					z(e) && Dx.every((t) => t in e) && (rs(e) || ns(e)),
				hash: (e) =>
					e.centerAnchorX ^
					e.centerAnchorY ^
					e.widthFactor ^
					e.heightFactor ^
					ts(e, e.alpha),
				toCSS: (e, t) => {
					let {
							alpha: n,
							widthFactor: r,
							heightFactor: i,
							centerAnchorX: a,
							centerAnchorY: o,
						} = e,
						s = es(e, n),
						c = s.map((e, n) => {
							let r = s[n + 1],
								i =
									e.position === 1 && r?.position === 1
										? e.position - 1e-4
										: e.position;
							return `${t?.(e.value) ?? e.value} ${i * 100}%`;
						});
					return `radial-gradient(${r * 100}% ${i * 100}% at ${a * 100}% ${o * 100}%, ${c.join(`, `)})`;
				},
			}),
			(kx = [
				`onClick`,
				`onDoubleClick`,
				`onMouse`,
				`onMouseDown`,
				`onMouseUp`,
				`onTapDown`,
				`onTap`,
				`onTapUp`,
				`onPointer`,
				`onPointerDown`,
				`onPointerUp`,
				`onTouch`,
				`onTouchDown`,
				`onTouchUp`,
			]),
			(Ax = (() => new Set([...kx, ...kx.map((e) => `${e}Capture`)]))()),
			(jx = `overflow`),
			(Mx = { x: 0, y: 0, width: 200, height: 200 }),
			(Nx = new Set([
				`width`,
				`height`,
				`opacity`,
				`overflow`,
				`radius`,
				`background`,
				`color`,
				`x`,
				`y`,
				`z`,
				`rotate`,
				`rotateX`,
				`rotateY`,
				`rotateZ`,
				`scale`,
				`scaleX`,
				`scaleY`,
				`skew`,
				`skewX`,
				`skewY`,
				`originX`,
				`originY`,
				`originZ`,
			])),
			(Px = b(function (e, t) {
				let {
						name: n,
						center: r,
						border: i,
						_border: a,
						__portal: o,
					} = e,
					{ props: s, children: c } = Io(e),
					l = ms(s),
					u = Ro(e),
					d = ls(e),
					f = w(null),
					p = t ?? f,
					m = {
						"data-framer-component-type":
							e.componentType ?? `Frame`,
						"data-framer-cursor": d,
						"data-framer-highlight": d === `pointer` ? !0 : void 0,
						"data-layoutid": u,
						"data-framer-offset-parent-id":
							Jb(e)[`data-framer-offset-parent-id`],
					};
				!hs(e) && n && (Jb(m)[`data-framer-name`] = n);
				let [h, g] = ps(s),
					v = fs(s),
					y = Da(v);
				(r && !(g && !y && ha(v))
					? ((l.transformTemplate ||= Lo(r)), Object.assign(m, Po(r)))
					: (l.transformTemplate ||= void 0),
					Wo(e, p));
				let b = Ao(e),
					x = gs(s, v, g, C(dx)),
					S = Ta(
						T(O, {
							children: [
								b
									? _(Eo, {
											alt: e.alt ?? ``,
											image: b,
											containerSize: g ?? void 0,
											nodeId: e.id && Fo(e.id),
											layoutId: u,
										})
									: null,
								c,
								_(Oo, { ...a, border: i, layoutId: u }),
							],
						}),
						x,
					),
					E = Mo(e.as),
					D = jo(b);
				return (
					e.fitImageDimension &&
						D &&
						((h[e.fitImageDimension] = `auto`),
						(h.aspectRatio = D.width / D.height)),
					T(E, {
						...m,
						...l,
						layoutId: u,
						style: h,
						ref: p,
						children: [S, o],
					})
				);
			})),
			(Fx = eo(
				b(function (e, t) {
					let { visible: n = !0 } = e;
					return n ? _(Px, { ...e, ref: t }) : null;
				}),
			)),
			(Ix = `__LAYOUT_TREE_ROOT`),
			(Lx = f.createContext({
				schedulePromoteTree: () => {},
				scheduleProjectionDidUpdate: () => {},
				initLead: () => {},
			})),
			(Rx = class extends v {
				constructor() {
					(super(...arguments),
						I(this, `shouldAnimate`, !1),
						I(this, `transition`),
						I(this, `lead`),
						I(this, `follow`),
						I(this, `scheduledPromotion`, !1),
						I(this, `scheduledDidUpdate`, !1),
						I(this, `scheduleProjectionDidUpdate`, () => {
							this.scheduledDidUpdate = !0;
						}),
						I(this, `schedulePromoteTree`, (e, t, n) => {
							((this.follow = this.lead),
								(this.shouldAnimate = n),
								(this.lead = e),
								(this.transition = t),
								(this.scheduledPromotion = !0));
						}),
						I(this, `initLead`, (e, t) => {
							((this.follow = this.lead),
								(this.lead = e),
								this.follow &&
									t &&
									(this.follow.layoutMaybeMutated = !0));
						}),
						I(this, `sharedLayoutContext`, {
							schedulePromoteTree: this.schedulePromoteTree,
							scheduleProjectionDidUpdate:
								this.scheduleProjectionDidUpdate,
							initLead: this.initLead,
						}));
				}
				getSnapshotBeforeUpdate() {
					if (!this.scheduledPromotion || !this.lead || !this.follow)
						return null;
					let e =
						this.lead?.layoutMaybeMutated && !this.shouldAnimate;
					return (
						this.lead.projectionNodes.forEach((t) => {
							t?.promote({
								needsReset: e,
								transition: this.shouldAnimate
									? this.transition
									: void 0,
								preserveFollowOpacity:
									t.options.layoutId === Ix &&
									!this.follow?.isExiting,
							});
						}),
						this.shouldAnimate
							? (this.follow.layoutMaybeMutated = !0)
							: this.scheduleProjectionDidUpdate(),
						(this.lead.layoutMaybeMutated = !1),
						(this.transition = void 0),
						(this.scheduledPromotion = !1),
						null
					);
				}
				componentDidUpdate() {
					if (!this.lead) return null;
					this.scheduledDidUpdate &&=
						(this.lead.rootProjectionNode?.root?.didUpdate(), !1);
				}
				render() {
					return _(Lx.Provider, {
						value: this.sharedLayoutContext,
						children: this.props.children,
					});
				}
			}),
			(zx = { width: `100%`, height: `100%`, backgroundColor: `none` }),
			(Bx = class {
				constructor(e) {
					(I(this, `sharedIntersectionObserver`),
						I(this, `callbacks`, new WeakMap()),
						(this.sharedIntersectionObserver =
							new IntersectionObserver(
								this.intersectionObserverCallback.bind(this),
								e,
							)));
				}
				intersectionObserverCallback(e, t) {
					for (let n of e) {
						let e = this.callbacks.get(n.target);
						e && e(n, t);
					}
				}
				observeElementWithCallback(e, t) {
					this.sharedIntersectionObserver &&
						(this.sharedIntersectionObserver.observe(e),
						this.callbacks.set(e, t));
				}
				unobserve(e) {
					this.sharedIntersectionObserver &&
						(this.sharedIntersectionObserver.unobserve(e),
						this.callbacks.delete(e));
				}
				get root() {
					return this.sharedIntersectionObserver?.root;
				}
			}),
			(Vx = s(new Map())),
			(Hx = typeof IntersectionObserver > `u` ? bg : ws),
			(Ux = Array(100)
				.fill(void 0)
				.map((e, t) => t * 0.01)),
			(Wx = f.createContext(null)),
			(Gx = class extends v {
				constructor() {
					(super(...arguments),
						I(this, `layoutMaybeMutated`, !1),
						I(this, `projectionNodes`, new Map()),
						I(this, `rootProjectionNode`),
						I(this, `isExiting`),
						I(
							this,
							`shouldPreserveFollowOpacity`,
							(e) =>
								e.options.layoutId === Ix &&
								!this.props.isExiting,
						),
						I(this, `switchLayoutGroupContext`, {
							register: (e) => this.addChild(e),
							deregister: (e) => this.removeChild(e),
							transition:
								this.props.isLead !== void 0 &&
								this.props.animatesLayout
									? this.props.transition
									: void 0,
							shouldPreserveFollowOpacity:
								this.shouldPreserveFollowOpacity,
						}));
				}
				componentDidMount() {
					this.props.isLead &&
						this.props.sharedLayoutContext.initLead(
							this,
							!!this.props.animatesLayout,
						);
				}
				shouldComponentUpdate(e) {
					let {
						isLead: t,
						isExiting: n,
						isOverlayed: r,
						animatesLayout: i,
						transition: a,
						sharedLayoutContext: o,
					} = e;
					if (((this.isExiting = n), t === void 0)) return !0;
					let s = !this.props.isLead && t,
						c = this.props.isExiting && !n,
						l = s || c,
						u = !!this.props.isLead && !t,
						d = this.props.isOverlayed !== r;
					return (
						(l || u) &&
							this.projectionNodes.forEach((e) =>
								e?.willUpdate(),
							),
						l
							? o.schedulePromoteTree(this, a, !!i)
							: d && o.scheduleProjectionDidUpdate(),
						!!l && !!i
					);
				}
				addChild(e) {
					let t = e.options.layoutId;
					t && (this.projectionNodes.set(t, e), this.setRootChild(e));
				}
				setRootChild(e) {
					if (!this.rootProjectionNode)
						return (this.rootProjectionNode = e);
					this.rootProjectionNode =
						this.rootProjectionNode.depth < e.depth
							? this.rootProjectionNode
							: e;
				}
				removeChild(e) {
					let t = e.options.layoutId;
					t && this.projectionNodes.delete(t);
				}
				render() {
					return _(Fe.Provider, {
						value: this.switchLayoutGroupContext,
						children: this.props.children,
					});
				}
			}),
			(Kx = (e) => {
				let t = f.useContext(Lx);
				return _(Gx, { ...e, sharedLayoutContext: t });
			}),
			(qx = f.createContext(!0)),
			(Jx = s({ register: () => {}, deregister: () => {} })),
			(Yx = ({ isCurrent: e, isOverlayed: t, children: n }) => {
				let r = As(),
					i = w({
						register: l(
							(e) => {
								if (r.has(e)) {
									console.warn(
										`NavigationTargetWrapper: already registered`,
									);
									return;
								}
								r.set(e, void 0);
							},
							[r],
						),
						deregister: l(
							(e) => {
								(r.get(e)?.(), r.delete(e));
							},
							[r],
						),
					}).current;
				return (
					d(
						() => (
							r.forEach((n, i) => {
								let a = i(e, t);
								r.set(i, Ze(a) ? a : void 0);
							}),
							() => {
								r.forEach((e, t) => {
									e && (e(), r.set(t, void 0));
								});
							}
						),
						[e, t, r],
					),
					_(Jx.Provider, { value: i, children: n })
				);
			}),
			(Xx = f.memo(function ({
				isLayeredContainer: e,
				isCurrent: t,
				isPrevious: n,
				isOverlayed: r = !1,
				visible: i,
				transitionProps: a,
				children: o,
				backdropColor: s,
				onTapBackdrop: c,
				backfaceVisible: l,
				exitBackfaceVisible: u,
				animation: f,
				exitAnimation: p,
				instant: m,
				initialProps: h,
				exitProps: g,
				position: v = { top: 0, right: 0, bottom: 0, left: 0 },
				withMagicMotion: y,
				index: b,
				areMagicMotionLayersPresent: x,
				id: S,
				isInitial: E,
			}) {
				let D = pe(),
					O = C(Te),
					{ persistLayoutIdCache: k } = C(Zv),
					A = w({
						wasCurrent: void 0,
						wasPrevious: !1,
						wasBeingRemoved: !1,
						wasReset: !0,
						origins: Ns({}, h, a),
					}),
					j = w(null),
					ee = O !== null && !O.isPresent;
				(t && A.current.wasCurrent === void 0 && k(),
					d(() => {
						if (e || !D) return;
						if (ee) {
							A.current = { ...A.current, wasBeingRemoved: ee };
							return;
						}
						let { wasPrevious: r, wasCurrent: i } = A.current,
							o =
								(t && !i) ||
								(!ee && A.current.wasBeingRemoved && t),
							s = n && !r,
							c = Ns(A.current.origins, h, a),
							l = A.current.wasReset;
						(o || s
							? (D.stop(),
								D.start({ zIndex: b, ...c, ...a }),
								(l = !1))
							: l === !1 &&
								(D.stop(),
								D.set({ zIndex: b, ...Zx, opacity: 0 }),
								(l = !0)),
							(A.current = {
								wasCurrent: !!t,
								wasPrevious: !!n,
								wasBeingRemoved: !1,
								wasReset: l,
								origins: c,
							}));
					}, [t, n, ee]));
				let te = m
						? { type: !1 }
						: `velocity` in f
							? { ...f, velocity: 0 }
							: f,
					ne = m ? { type: !1 } : p || f,
					M = { ...v };
				((M.left === void 0 || M.right === void 0) &&
					(M.width = `auto`),
					(M.top === void 0 || M.bottom === void 0) &&
						(M.height = `auto`));
				let re = (Ps(a) || Ps(h)) && (e || t || n) ? 1200 : void 0,
					ie = { ...Zx, ...A.current.origins },
					ae = e
						? {
								initial: { ...ie, ...h },
								animate: { ...ie, ...a, transition: te },
								exit: { ...ie, ...g, transition: f },
							}
						: { animate: D, exit: { ...ie, ...g, transition: ne } },
					oe = !(ee || x === !1),
					se = !!t && oe,
					ce = t && E;
				return T(Fx, {
					"data-framer-component-type": `NavigationContainerWrapper`,
					width: `100%`,
					height: `100%`,
					style: {
						position: `absolute`,
						transformStyle: `flat`,
						backgroundColor: `transparent`,
						overflow: `hidden`,
						zIndex: e || ee || (t && y) ? b : void 0,
						pointerEvents: void 0,
						visibility: i ? `visible` : `hidden`,
						perspective: re,
					},
					children: [
						e &&
							_(Fx, {
								width: `100%`,
								height: `100%`,
								"data-framer-component-type": `NavigationContainerBackdrop`,
								transition: f,
								initial: { opacity: m && i ? 1 : 0 },
								animate: { opacity: 1 },
								exit: { opacity: 0 },
								backgroundColor: s || `transparent`,
								onTap: ee ? void 0 : c,
							}),
						_(Fx, {
							...M,
							...ae,
							transition: {
								default: te,
								originX: { type: !1 },
								originY: { type: !1 },
								originZ: { type: !1 },
							},
							backgroundColor: `transparent`,
							backfaceVisible: ee ? u : l,
							"data-framer-component-type": `NavigationContainer`,
							"data-framer-is-current-navigation-target": !!t,
							style: {
								pointerEvents: void 0,
								opacity: ce || e || (t && y) ? 1 : 0,
							},
							"data-is-present": oe ? void 0 : !1,
							ref: j,
							children: _(Wx.Provider, {
								value: j,
								children: _(qx.Provider, {
									value: se,
									children: _(Yx, {
										isCurrent: se,
										isOverlayed: r,
										children: _(Kx, {
											isLead: t,
											animatesLayout: !!y,
											transition: te,
											isExiting: !oe,
											isOverlayed: r,
											id: S,
											children: o,
										}),
									}),
								}),
							}),
						}),
					],
				});
			}, Ms)),
			(Zx = {
				x: 0,
				y: 0,
				z: 0,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				rotateZ: 0,
				scale: 1,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1,
				skew: 0,
				skewX: 0,
				skewY: 0,
				originX: 0.5,
				originY: 0.5,
				originZ: 0,
				opacity: 1,
			}),
			(Qx = class {
				constructor() {
					(I(this, `warning`, () => {
						ri(
							`The Navigator API is only available inside of Framer: https://www.framer.com/`,
						);
					}),
						I(this, `goBack`, () => this.warning()),
						I(this, `instant`, () => this.warning()),
						I(this, `fade`, () => this.warning()),
						I(this, `push`, () => this.warning()),
						I(this, `modal`, () => this.warning()),
						I(this, `overlay`, () => this.warning()),
						I(this, `flip`, () => this.warning()),
						I(this, `customTransition`, () => this.warning()),
						I(this, `magicMotion`, () => this.warning()));
				}
			}),
			($x = s(new Qx())),
			(eS = {
				Fade: { exit: { opacity: 0 }, enter: { opacity: 0 } },
				PushLeft: { exit: { x: `-30%` }, enter: { x: `100%` } },
				PushRight: { exit: { x: `30%` }, enter: { x: `-100%` } },
				PushUp: { exit: { y: `-30%` }, enter: { y: `100%` } },
				PushDown: { exit: { y: `30%` }, enter: { y: `-100%` } },
				Instant: { animation: { type: !1 }, enter: { opacity: 0 } },
				Modal: {
					overCurrentContext: !0,
					goBackOnTapOutside: !0,
					position: { center: !0 },
					enter: { opacity: 0, scale: 1.2 },
				},
				OverlayLeft: {
					overCurrentContext: !0,
					goBackOnTapOutside: !0,
					position: { right: 0, top: 0, bottom: 0 },
					enter: { x: `100%` },
				},
				OverlayRight: {
					overCurrentContext: !0,
					goBackOnTapOutside: !0,
					position: { left: 0, top: 0, bottom: 0 },
					enter: { x: `-100%` },
				},
				OverlayUp: {
					overCurrentContext: !0,
					goBackOnTapOutside: !0,
					position: { bottom: 0, left: 0, right: 0 },
					enter: { y: `100%` },
				},
				OverlayDown: {
					overCurrentContext: !0,
					goBackOnTapOutside: !0,
					position: { top: 0, left: 0, right: 0 },
					enter: { y: `-100%` },
				},
				FlipLeft: {
					backfaceVisible: !1,
					exit: { rotateY: -180 },
					enter: { rotateY: 180 },
				},
				FlipRight: {
					backfaceVisible: !1,
					exit: { rotateY: 180 },
					enter: { rotateY: -180 },
				},
				FlipUp: {
					backfaceVisible: !1,
					exit: { rotateX: 180 },
					enter: { rotateX: -180 },
				},
				FlipDown: {
					backfaceVisible: !1,
					exit: { rotateX: -180 },
					enter: { rotateX: 180 },
				},
				MagicMotion: { withMagicMotion: !0 },
			}),
			(tS = () => ({
				current: -1,
				previous: -1,
				currentOverlay: -1,
				previousOverlay: -1,
				visualIndex: 0,
				overlayItemId: 0,
				historyItemId: 0,
				history: [],
				overlayStack: [],
				containers: {},
				containerIndex: {},
				containerVisualIndex: {},
				containerIsRemoved: {},
				transitionForContainer: {},
				previousTransition: null,
			})),
			(nS = jg(Zx)),
			(rS = f.createContext(void 0)),
			(iS = f.createContext(void 0)),
			(aS = (() => {
				var e, t, n, r, i, a, o;
				return (
					(t = class extends v {
						constructor(t) {
							(super(t),
								xe(this, n),
								xe(this, e, null),
								I(this, `state`, tS()),
								xe(this, a, (e) => {
									if (
										!this.props.enabled &&
										this.state.history.length > 0
									)
										return;
									let t = Rs(this.state, e);
									if (!t) return;
									let { skipLayoutAnimation: n } = this.props,
										r = t.history[t.current],
										i =
											(e.type === `add` &&
												e.transition.withMagicMotion) ||
											(e.type === `forward` &&
												r?.transition
													.withMagicMotion) ||
											(e.type === `remove` &&
												!!t.previousTransition),
										a = () => {
											(this.setState(t),
												r?.key &&
													this.context?.(r.key));
										};
									n && !i ? n(a) : a();
								}),
								I(this, `goBack`, () => {
									if (!M(this, n, i).call(this))
										return (
											De(
												this,
												e,
												globalThis.event?.timeStamp ||
													null,
											),
											this.state.currentOverlay === -1
												? N(this, a).call(this, {
														type: `remove`,
													})
												: N(this, a).call(this, {
														type: `removeOverlay`,
													})
										);
								}));
							let r = this.props.children;
							if (!r || !ra(r) || !na(r)) return;
							let o = { ...eS.Instant },
								s = {
									type: `add`,
									key:
										r.key?.toString() ||
										`stack-${this.state.historyItemId + 1}`,
									transition: o,
									component: r,
								},
								c = Rs(this.state, s);
							c && (this.state = c);
						}
						componentDidMount() {
							let e = this.state.history[this.state.current];
							e && this.context?.(e.key);
						}
						UNSAFE_componentWillReceiveProps(e) {
							let t = e.children;
							if (!ra(t) || !na(t)) return;
							let r = t.key?.toString();
							r &&
								(this.state.history.length === 0
									? M(this, n, o).call(this, t, eS.Instant)
									: N(this, a).call(this, {
											type: `update`,
											key: r,
											component: t,
										}));
						}
						componentWillUnmount() {
							this.props.resetProjection?.();
						}
						instant(e) {
							M(this, n, o).call(this, e, eS.Instant, void 0);
						}
						fade(e, t) {
							M(this, n, o).call(this, e, eS.Fade, t);
						}
						push(e, t) {
							M(this, n, o).call(this, e, Fs(t), t);
						}
						modal(e, t) {
							M(this, n, o).call(this, e, eS.Modal, t);
						}
						overlay(e, t) {
							M(this, n, o).call(this, e, Is(t), t);
						}
						flip(e, t) {
							M(this, n, o).call(this, e, Ls(t), t);
						}
						magicMotion(e, t) {
							M(this, n, o).call(this, e, eS.MagicMotion, t);
						}
						customTransition(e, t) {
							M(this, n, o).call(this, e, t);
						}
						render() {
							let e = M(this, n, r).call(this, {
									overCurrentContext: !1,
								}),
								t = M(this, n, r).call(this, {
									overCurrentContext: !0,
								}),
								i = $s(t),
								a = t.current > -1,
								o = this.state.history.length === 1,
								s = [];
							for (let [t, n] of Object.entries(
								this.state.containers,
							)) {
								let r = this.state.containerIndex[t];
								B(
									r !== void 0,
									`Container's index must be registered`,
								);
								let i = this.state.containerVisualIndex[t];
								B(
									i !== void 0,
									`Container's visual index must be registered`,
								);
								let c = this.state.containerIsRemoved[t],
									l = this.state.history[r],
									u = this.state.transitionForContainer[t],
									d = r === this.state.current,
									f = r === this.state.previous,
									p = d ? !1 : c,
									m =
										l?.transition?.withMagicMotion ||
										(d && !!this.state.previousTransition);
								s.push(
									_(
										Xx,
										{
											id: t,
											index: i,
											isInitial: o,
											isCurrent: d,
											isPrevious: f,
											isOverlayed: a,
											visible: d || f,
											position: l?.transition?.position,
											instant: lc(r, e),
											transitionProps: u,
											animation: cc(r, e),
											backfaceVisible: oc(r, e),
											exitAnimation:
												l?.transition?.animation,
											exitBackfaceVisible:
												l?.transition?.backfaceVisible,
											exitProps: l?.transition?.enter,
											withMagicMotion: m,
											areMagicMotionLayersPresent: p
												? !1
												: void 0,
											children: _(_s, {
												children: dc({
													component: n,
													transition: l?.transition,
												}),
											}),
										},
										t,
									),
								);
							}
							let c = this.state.overlayStack.map((e, n) =>
								_(
									Xx,
									{
										isLayeredContainer: !0,
										isCurrent:
											n === this.state.currentOverlay,
										position: e.transition.position,
										initialProps: ac(n, t),
										transitionProps: sc(n, t),
										instant: lc(n, t, !0),
										animation: cc(n, t),
										exitProps: e.transition.enter,
										visible: uc(n, t),
										backdropColor: rc(e.transition),
										backfaceVisible: ic(n, t),
										onTapBackdrop: fc(
											e.transition,
											this.goBack,
										),
										index: this.state.current + 1 + n,
										children: dc({
											component: e.component,
											transition: e.transition,
										}),
									},
									e.key,
								),
							);
							return _(Fx, {
								"data-framer-component-type": `NavigationRoot`,
								top: 0,
								left: 0,
								width: `100%`,
								height: `100%`,
								position: `relative`,
								style: {
									overflow: `hidden`,
									backgroundColor: `unset`,
									pointerEvents: void 0,
									...this.props.style,
								},
								children: _($x.Provider, {
									value: this,
									children: T(iS.Provider, {
										value: o,
										children: [
											_(Xx, {
												isLayeredContainer: !0,
												position: void 0,
												initialProps: {},
												instant: !1,
												transitionProps: ec(i),
												animation: tc(i),
												backfaceVisible: nc(i),
												visible: !0,
												backdropColor: void 0,
												onTapBackdrop: void 0,
												index: 0,
												children: _(Yi, {
													children: _(Rx, {
														children: _(Le, {
															presenceAffectsLayout:
																!1,
															children: s,
														}),
													}),
												}),
											}),
											_(Le, { children: c }),
										],
									}),
								}),
							});
						}
					}),
					(e = new WeakMap()),
					(n = new WeakSet()),
					(r = function (e) {
						let {
							current: t,
							previous: n,
							currentOverlay: r,
							previousOverlay: i,
						} = this.state;
						return e.overCurrentContext
							? {
									current: r,
									previous: i,
									history: this.state.overlayStack,
								}
							: {
									current: t,
									previous: n,
									history: this.state.history,
								};
					}),
					(i = function () {
						return globalThis.event
							? N(this, e) === globalThis.event.timeStamp
							: !1;
					}),
					(a = new WeakMap()),
					(o = function (t, r, o) {
						if (
							M(this, n, i).call(this) ||
							(De(this, e, globalThis.event?.timeStamp || null),
							!t || !ra(t) || !na(t))
						)
							return;
						let s = { ...r, ...o };
						if (s.overCurrentContext)
							return N(this, a).call(this, {
								type: `addOverlay`,
								transition: s,
								component: t,
							});
						let c =
							t.key?.toString() ||
							`stack-${this.state.historyItemId + 1}`;
						N(this, a).call(this, {
							type: `add`,
							key: c,
							transition: s,
							component: t,
						});
					}),
					I(t, `defaultProps`, { enabled: !0 }),
					I(t, `contextType`, rS),
					t
				);
			})()),
			(oS = {
				stiffness: 500,
				damping: 50,
				restDelta: 1,
				type: `spring`,
			}),
			(sS = eo(pc)),
			Ue(vg(), 1),
			(cS = Ue(vg(), 1)),
			(lS = class e {
				constructor(t, n) {
					((this.originalEvent = t),
						(this.session = n),
						I(this, `time`, Date.now()),
						I(this, `loopTime`, Jv.time),
						I(this, `point`),
						I(this, `devicePoint`),
						I(this, `target`),
						I(this, `delta`));
					let r =
							(n && n.startEvent && n.startEvent.target) ||
							t.target,
						i = e.eventLikeFromOriginalEvent(t);
					((this.point = mc(i, r)),
						(this.devicePoint = mc(
							i,
							n && n.originElement
								? n.originElement
								: document.body,
						)),
						(this.target = t.target || null));
					let a = n && n.lastEvent;
					t instanceof WheelEvent
						? (this.delta = { x: t.deltaX, y: t.deltaY })
						: a && this.devicePoint && a.devicePoint
							? (this.delta = ui.subtract(
									this.devicePoint,
									a.devicePoint,
								))
							: (this.delta = { x: 0, y: 0 });
				}
				static eventLikeFromOriginalEvent(e) {
					if (`touches` in e) {
						let t = e.touches;
						(!t || !t.length) &&
							e.changedTouches &&
							e.changedTouches.length &&
							(t = e.changedTouches);
						let n = t[0];
						return !t || !n
							? { pageX: 0, pageY: 0, target: null }
							: {
									pageX: n.clientX || n.screenX || n.pageX,
									pageY: n.clientY || n.screenY || n.pageY,
									target: e.target,
								};
					}
					return e;
				}
				velocity(e) {
					return this.session
						? this.session.velocity(e)
						: { x: 0, y: 0 };
				}
				get offset() {
					return this.session
						? this.session.offset(this)
						: { x: 0, y: 0 };
				}
				get isLeftMouseClick() {
					if (!Ba())
						return `button` in this.originalEvent &&
							`buttons` in this.originalEvent &&
							`ctrlKey` in this.originalEvent
							? (this.originalEvent.button === 0 ||
									this.originalEvent.buttons === 1) &&
									!this.originalEvent.ctrlKey
							: !1;
				}
			}),
			Ue(vg(), 1),
			(uS = f.createContext({ dragging: !1 })),
			(dS = { onMouseEnter: `mouseenter`, onMouseLeave: `mouseleave` }),
			(fS = Object.keys(dS)),
			(pS = {
				panstart: [`onPanStart`],
				pan: [`onPan`],
				panend: [`onPanEnd`],
				tapstart: [`onTapStart`, `onMouseDown`],
				tap: [`onTap`, `onClick`],
				tapend: [`onTapEnd`, `onMouseUp`],
				mousewheelstart: [`onMouseWheelStart`],
				mousewheel: [`onMouseWheel`],
				mousewheelend: [`onMouseWheelEnd`],
			}),
			(mS = new Set([`tapstart`, `tap`, `tapend`])),
			(hS = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
			(gS = Symbol(`private`)),
			(_S = (() => {
				function e(e = {}, t = !1, n = !0) {
					let r = {
							[gS]: {
								makeAnimatables: t,
								observeAnimatables: n,
								observers: new Ev(),
								reset() {
									for (let t in i)
										if (hS(i, t)) {
											let n = hS(e, t)
												? Jb(e)[t]
												: void 0;
											n === void 0
												? delete i[t]
												: (i[t] = n);
										}
								},
								transactions: new Set(),
							},
						},
						i = new Proxy(r, yS);
					return (Object.assign(i, e), i);
				}
				return (
					(e.resetObject = (e) => e[gS].reset()),
					(e.addObserver = (e, t) => e[gS].observers.add(t)),
					e
				);
			})()),
			(vS = class {
				constructor() {
					(I(this, `set`, (e, t, n, r) => {
						if (t === gS) return !1;
						let i = e[gS],
							a,
							o;
						if (
							(ai(n) ? ((a = n), (o = a.get())) : (o = n),
							i.makeAnimatables &&
								typeof n != `function` &&
								typeof n != `object` &&
								!a &&
								(a = K(n)),
							i.observeAnimatables && a)
						) {
							let e = i.transactions;
							a.onUpdate({
								update: (t, n) => {
									(n && e.add(n),
										i.observers.notify({ value: r }, n));
								},
								finish: (t) => {
									e.delete(t) &&
										i.observers.finishTransaction(t);
								},
							});
						}
						let s = !1,
							c = !0,
							l = Jb(e)[t];
						if (l !== void 0) {
							ai(l)
								? ((c = l.get() !== o), l.set(o))
								: ((c = l !== o), (Jb(e)[t] = o));
							let n = typeof o == `object` && !!o;
							((Array.isArray(o) || n) && (c = !0), (s = !0));
						} else (a && (n = a), (s = Reflect.set(e, t, n)));
						return (c && i.observers.notify({ value: r }), s);
					}),
						I(this, `get`, (e, t, n) => {
							if (t === gS) return Jb(e)[t];
							let r = Reflect.get(e, t, n);
							return typeof r == `function` ? r.bind(n) : r;
						}));
				}
				deleteProperty(e, t) {
					let n = Reflect.deleteProperty(e, t);
					return (e[gS].observers.notify({ value: e }), n);
				}
				ownKeys(e) {
					let t = Reflect.ownKeys(e),
						n = t.indexOf(gS);
					return (n !== -1 && t.splice(n, 1), t);
				}
				getOwnPropertyDescriptor(e, t) {
					if (t !== gS) return Reflect.getOwnPropertyDescriptor(e, t);
				}
			}),
			(yS = new vS()),
			(bS = `opacity`),
			(xS = `radius`),
			(SS = [`x`, `y`, `color`, `inset`, `blur`, `spread`]),
			(CS = {
				is: (e) => e && SS.every((t) => t in e),
				toCSS: (e) =>
					`${e.inset ? `inset ` : ``}${e.x}px ${e.y}px ${e.blur}px ${e.spread}px ${e.color}`,
			}),
			(wS = (() => K.getNumber)()),
			(TS = {
				z: 0,
				rotation: 0,
				rotationX: 0,
				rotationY: 0,
				rotationZ: 0,
				scale: 1,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1,
				skew: 0,
				skewX: 0,
				skewY: 0,
				originX: 0.5,
				originY: 0.5,
				originZ: 0,
			}),
			(ES = (() => {
				let e = class e extends vx {
					constructor() {
						(super(...arguments),
							I(this, `element`, null),
							I(this, `imageDidChange`, !1),
							I(this, `state`, { size: null }),
							I(this, `updateStyle`, () => {
								this.element &&
									Object.assign(
										this.element.style,
										this.getStyle(),
									);
							}),
							I(this, `setElement`, (e) => {
								((this.element = e), this.setLayerElement(e));
							}),
							I(this, `propsObserver`),
							I(this, `propsObserverCancel`),
							I(this, `sizeObserver`),
							I(this, `sizeObserverCancel`),
							I(this, `onPropsChange`, (t) => {
								let n = e.rect(K.objectToValues(t.value));
								(this.state.size &&
									ai(this.state.size.width) &&
									ai(t.value.width) &&
									this.state.size.width.set(n.width),
									this.state.size &&
										ai(this.state.size.height) &&
										ai(t.value.height) &&
										this.state.size.height.set(n.height),
									this.updateStyle());
							}),
							I(this, `onSizeChange`, () => {
								this.updateStyle();
							}));
					}
					static rect(e) {
						let t = sy.fromProperties(e),
							n = e.parentSize
								? {
										sizing: e.parentSize,
										positioning: e.parentSize,
										viewport: null,
									}
								: null;
						return sy.toRect(t, n, null, !0);
					}
					get rect() {
						return e.rect(this.props);
					}
					static getDerivedStateFromProps(t, n) {
						let r = e.updatedSize(t, n),
							{ target: i } = Yv;
						return t.background &&
							cx.isImageObject(t.background) &&
							t.background.src
							? { size: r }
							: n.size &&
								  (i === FramerEnvironment.preview ||
										(n.size.width === r.width &&
											n.size.height === r.height))
								? null
								: { size: r };
					}
					static updatedSize(t, n) {
						let r = e.rect(t),
							i = n.size,
							a = { width: r.width, height: r.height },
							{ target: o } = Yv;
						return (
							i
								? ai(i.width) && ai(i.height)
									? (i.width.set(a.width),
										i.height.set(a.height))
									: (i = a)
								: (i = o === FramerEnvironment.preview ? _S(a, !0) : a),
							i
						);
					}
					getStyle() {
						let e = this.rect,
							t = {
								display: `block`,
								position: `absolute`,
								width: `${e.width}px`,
								height: `${e.height}px`,
								pointerEvents: void 0,
								userSelect: `none`,
							},
							n = K.get(this.props.left, void 0),
							r = K.get(this.props.top, void 0);
						Object.assign(t, this.props._initialStyle);
						let i = this.context.parentSize !== 1,
							a = K.get(this.props.perspective, void 0);
						((t.perspective = a), (t.WebkitPerspective = a));
						let o,
							s = K.get(this.props.backfaceVisible, void 0);
						(s === !0
							? (o = `visible`)
							: s === !1 && (o = `hidden`),
							(t.backfaceVisibility = o),
							(t.WebkitBackfaceVisibility = o));
						let c = K.get(this.props.preserve3d, void 0);
						if (
							(c === !0
								? (t.transformStyle = `preserve-3d`)
								: c === !1 && (t.transformStyle = `flat`),
							!i)
						) {
							(Lc(t, this.props, `right`),
								Lc(t, this.props, `bottom`));
							let e = Ic(K.get(this.props.width, void 0)),
								i = Ic(K.get(this.props.height, void 0));
							(typeof n == `string` &&
								n.endsWith(`%`) &&
								this.props.right === null &&
								((n = `calc(${n} - calc(${e}} / 2))`),
								(t.width = e)),
								typeof r == `string` &&
									r.endsWith(`%`) &&
									this.props.bottom === null &&
									((r = `calc(${r} - calc(${i} / 2))`),
									(t.height = i)),
								r !== void 0 && t.bottom !== void 0
									? ((t.height = void 0),
										(r = Ic(K.get(this.props.top, void 0))))
									: (t.height = i),
								n !== void 0 && t.right !== void 0
									? ((t.width = void 0),
										(n = Ic(
											K.get(this.props.left, void 0),
										)))
									: (t.width = e));
						}
						let l = { ...e };
						return (
							n !== void 0 && (l.x = n),
							r !== void 0 && (l.y = r),
							Nc(this.props, l, t),
							jc(this.props, t),
							Fc(this.props, t),
							vx.applyWillChange(this.props, t, !1),
							this.props.style &&
								Object.assign(t, this.props.style),
							t
						);
					}
					componentDidMount() {
						let { target: e } = Yv;
						e === FramerEnvironment.preview &&
							((this.propsObserver = _S(this.props, !0)),
							(this.propsObserverCancel = _S.addObserver(
								this.propsObserver,
								this.onPropsChange,
							)),
							this.props.parentSize &&
								ai(this.props.parentSize.width) &&
								ai(this.props.parentSize.height) &&
								((this.sizeObserver = _S(
									this.props.parentSize,
									!0,
								)),
								(this.sizeObserverCancel = _S.addObserver(
									this.sizeObserver,
									this.onSizeChange,
								))));
					}
					componentDidUpdate() {
						let { target: e } = Yv;
						(this.propsObserverCancel && this.propsObserverCancel(),
							this.sizeObserverCancel &&
								this.sizeObserverCancel(),
							e === FramerEnvironment.preview &&
								((this.propsObserver = _S(this.props, !0)),
								(this.propsObserverCancel = _S.addObserver(
									this.propsObserver,
									this.onPropsChange,
								)),
								this.props.parentSize &&
									ai(this.props.parentSize.width) &&
									ai(this.props.parentSize.height) &&
									((this.sizeObserver = _S(
										this.props.parentSize,
										!0,
									)),
									(this.sizeObserverCancel = _S.addObserver(
										this.sizeObserver,
										this.onSizeChange,
									)))));
					}
					componentWillUnmount() {
						(this.propsObserverCancel && this.propsObserverCancel(),
							(this.propsObserverCancel = void 0),
							this.sizeObserverCancel &&
								this.sizeObserverCancel(),
							(this.sizeObserverCancel = void 0));
					}
					render() {
						let { visible: e, id: t, className: n } = this.props;
						if (!e) return null;
						let r = this.getStyle(),
							i = this.rect,
							a = { width: i.width, height: i.height };
						return T(`div`, {
							id: t,
							style: r,
							ref: this.setElement,
							className: n,
							children: [
								_(dy, {
									parentSize: a,
									children: this.layoutChildren(),
								}),
								_(Oo, { ...this.props }),
							],
						});
					}
					layoutChildren() {
						let e = this.props._forwardedOverrides,
							t = f.Children.map(this.props.children, (t) =>
								oa(t)
									? f.cloneElement(t, {
											parentSize: this.state.size,
											_forwardedOverrides: e,
										})
									: e && t
										? f.cloneElement(t, {
												_forwardedOverrides: e,
											})
										: t,
							);
						return (
							t &&
								t.length === 1 &&
								typeof t[0] == `string` &&
								(t = [_(Rc, { children: t }, `0`)]),
							t
						);
					}
				};
				(I(e, `supportsConstraints`, !0),
					I(e, `defaultFrameSpecificProps`, {
						...ay,
						...TS,
						opacity: 1,
						background: q(`rgba(0, 170, 255, 0.3)`),
						visible: !0,
						borderWidth: 0,
						borderColor: `#222`,
						borderStyle: `solid`,
					}),
					I(e, `defaultProps`, {
						...vx.defaultProps,
						...e.defaultFrameSpecificProps,
					}));
				let t = e;
				return ((t.contextType = uy), t);
			})()),
			(DS =
				`_border._constraints.animate.initial.variants.transition.inherit.center.initial.transformTemplate.animate.variants.transition.onUpdate.onAnimationComplete.onPanSessionStart.onTapCancel.whileTap.whileHover.onHoverStart.onHoverEnd.drag.dragDirectionLock.dragPropagation.dragConstraints.dragElastic.dragMomentum.dragTransition.onDragStart.onDragEnd.onDrag.onDirectionLock.onDragTransitionEnd.x.y.rotate.rotateX.rotateY.rotateZ.position.border.borderRadius.cornerShape.shadow.size`.split(
					`.`,
				)),
			(OS = [
				`autoSize`,
				`aspectRatio`,
				`borderWidth`,
				`borderStyle`,
				`borderColor`,
				`centerX`,
				`centerY`,
			]),
			(kS = hc(ES)),
			(AS = (() => {
				let e = b(function (e, t) {
					let n = xa();
					if (zc(e)) {
						let t = e.parentSize || ba(n);
						return _(kS, { ...e, parentSize: t });
					}
					return _(Fx, { ...e, ref: t });
				});
				return ((e.displayName = `Frame`), e);
			})()),
			(jS = (() => {
				function e(t = {}) {
					let n = _S(t, !1, !1);
					return (e.addData(n), n);
				}
				return (
					(e._stores = []),
					(e.addData = (t) => {
						e._stores.push(t);
					}),
					(e.reset = () => {
						e._stores.forEach((e) => _S.resetObject(e));
					}),
					(e.addObserver = (e, t) => _S.addObserver(e, t)),
					e
				);
			})()),
			(MS = { update: 0 }),
			(NS = f.createContext({ update: NaN })),
			(PS = class extends v {
				constructor() {
					(super(...arguments),
						I(this, `observers`, []),
						I(this, `state`, MS),
						I(this, `taskAdded`, !1),
						I(this, `frameTask`, () => {
							(this.setState({ update: this.state.update + 1 }),
								(this.taskAdded = !1));
						}),
						I(this, `observer`, () => {
							this.taskAdded ||
								((this.taskAdded = !0),
								Jv.addFrameTask(this.frameTask));
						}));
				}
				componentWillUnmount() {
					(this.observers.map((e) => e()), jS.reset());
				}
				render() {
					let { children: e } = this.props;
					return (
						this.observers.map((e) => e()),
						(this.observers = []),
						jS._stores.forEach((e) => {
							let t = jS.addObserver(e, this.observer);
							this.observers.push(t);
						}),
						_(NS.Provider, {
							value: { ...this.state },
							children: e,
						})
					);
				}
			}),
			Ue(vg(), 1),
			(FS = `__framer__`),
			(IS = (() => FS.length)()),
			(LS = f.createContext(void 0)),
			(RS = f.createContext(void 0)),
			(zS = `ssr-variant`),
			(BS = `ssr-variant-group-separator`),
			(VS = f.forwardRef(function (e, t) {
				let n = Kc(t),
					r = f.useContext(RS),
					i = f.useSyncExternalStore(Tg, Dg, Eg),
					a = Qi(() => (i ? (La() ? 1 : 2) : 0)),
					o = f.useContext(LS);
				return _r(() => {
					let { breakpoint: t, overrides: i, children: s, ...c } = e;
					if (!o)
						return (
							console.warn(
								`PropertyOverrides is missing GeneratedComponentContext`,
							),
							n(s, c)
						);
					let { primaryVariantId: l, variantClassNames: u } = o,
						d = r?.primaryVariantId === l ? r?.variants : void 0;
					switch (a) {
						case 0:
							return n(s, el(t, c, i));
						case 1:
							return Yc(i, s, c, u, l, d, n, t);
						case 2:
							return Yc(i, s, c, u, l, d, Gc, void 0);
						default:
							V(a);
					}
				}, [o, r, n, e]);
			})),
			(HS = (() =>
				jy(VS, `.${zS} { display: contents }`, `PropertyOverrides`))()),
			(US = `default`),
			(WS = new Set([US])),
			(KS = class {
				constructor() {
					(I(this, `entries`, new Map()), xe(this, GS, {}));
				}
				set(e, t, n, r) {
					switch (t) {
						case `transformTemplate`:
							(B(
								typeof n == `string`,
								`transformTemplate must be a string, received: ${n}`,
							),
								this.setHash(e, r, {
									transformTemplate: n,
									legacy: !0,
								}));
							break;
						case `initial`:
						case `animate`:
							(B(
								typeof n == `object`,
								`${t} must be a valid object, received: ${n}`,
							),
								this.setHash(e, r, { [t]: n, legacy: !0 }));
							break;
						default:
							break;
					}
				}
				setHash(e, t = US, n) {
					let r = this.entries.get(e) ?? {},
						i = r[t] ?? {};
					((r[t] = n === null ? null : { ...i, ...n }),
						this.entries.set(e, r));
				}
				variantHash(e, t) {
					if (e === t?.primaryVariantId) return US;
					let n = N(this, GS)[e];
					if (n) return n;
					let r = t?.variantClassNames[e];
					return r ? (N(this, GS)[e] = Xc(r)) : US;
				}
				setAll(e, t = WS, n, r) {
					if (n === null) {
						for (let n of t)
							this.setHash(e, this.variantHash(n, r), null);
						return;
					}
					let i = Ze(n.transformTemplate)
							? n.transformTemplate?.({}, JS)
							: void 0,
						a = n.__framer__presenceInitial ?? n.initial,
						o = n.__framer__presenceAnimate ?? n.animate,
						s = {
							initial: z(a) ? a : void 0,
							animate: z(o) ? o : void 0,
							transformTemplate: L(i) ? i : void 0,
						};
					for (let n of t) this.setHash(e, this.variantHash(n, r), s);
				}
				clear() {
					this.entries.clear();
				}
				toObject() {
					return Object.fromEntries(this.entries);
				}
			}),
			(GS = new WeakMap()),
			(qS = new KS()),
			(JS = `__Appear_Animation_Transform__`),
			(YS = `data-framer-appear-id`),
			(XS = `data-framer-appear-animation`),
			(ZS = (e) => {
				if (lo())
					return {
						animate: nl(e.animate) ? e.animate : void 0,
						initial: nl(e.initial) ? e.initial : void 0,
						exit: void 0,
					};
			}),
			(QS = [
				`opacity`,
				`x`,
				`y`,
				`scale`,
				`rotate`,
				`rotateX`,
				`rotateY`,
				`skewX`,
				`skewY`,
				`transformPerspective`,
			]),
			($S = (e) => ({
				x: ie(e?.x ?? 0),
				y: ie(e?.y ?? 0),
				opacity: ie(e?.opacity ?? 1),
				scale: ie(e?.scale ?? 1),
				rotate: ie(e?.rotate ?? 0),
				rotateX: ie(e?.rotateX ?? 0),
				rotateY: ie(e?.rotateY ?? 0),
				skewX: ie(e?.skewX ?? 0),
				skewY: ie(e?.skewY ?? 0),
				transformPerspective: ie(e?.transformPerspective ?? 0),
			})),
			(eC = {
				x: 0,
				y: 0,
				scale: 1,
				opacity: 1,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				skewX: 0,
				skewY: 0,
				transformPerspective: 0,
			}),
			(tC = { willChange: `transform` }),
			Object.freeze(tC),
			(nC = {}),
			Object.freeze(nC),
			(rC = new Set([
				`loopEffectEnabled`,
				`loopTransition`,
				`loop`,
				`loopRepeatType`,
				`loopRepeatDelay`,
				`loopPauseOffscreen`,
			])),
			(iC = () => {
				let e = w();
				return (
					d(
						() => () => {
							clearTimeout(e.current);
						},
						[],
					),
					async (t) =>
						new Promise((n) => {
							e.current = setTimeout(() => {
								n(!0);
							}, t * 1e3);
						})
				);
			}),
			(aC = new Set([
				`speed`,
				`adjustPosition`,
				`offset`,
				`parallaxTransformEnabled`,
			])),
			(oC = new Set([
				`presenceInitial`,
				`presenceAnimate`,
				`presenceExit`,
			])),
			(sC = 1),
			(cC = 4),
			(lC = new Set([
				`threshold`,
				`animateOnce`,
				`opacity`,
				`targetOpacity`,
				`x`,
				`y`,
				`scale`,
				`transition`,
				`rotate`,
				`rotateX`,
				`rotateY`,
				`perspective`,
				`enter`,
				`exit`,
				`animate`,
				`styleAppearEffectEnabled`,
				`targets`,
				`scrollDirection`,
			])),
			(uC = [`animate`, `animate`]),
			(dC = { inputRange: [], outputRange: [] }),
			(fC = new Set([
				`transformViewportThreshold`,
				`styleTransformEffectEnabled`,
				`transformTargets`,
				`spring`,
				`transformTrigger`,
			])),
			(pC = (e, t) => {
				let n = e?.[0]?.target;
				return t ? { opacity: n?.opacity ?? 1 } : n;
			}),
			(mC = () => ({
				opacity: [],
				x: [],
				y: [],
				scale: [],
				rotate: [],
				rotateX: [],
				rotateY: [],
				skewX: [],
				skewY: [],
				transformPerspective: [],
			})),
			(hC = [0, 1]),
			(gC = {
				parallax: aC,
				styleAppear: lC,
				styleTransform: fC,
				loop: rC,
				presence: oC,
			}),
			(_C = jg(gC)),
			(vC = (e) => e.reduce((e, t) => (e += t), 0)),
			(yC = (e) => e.reduce((e, t) => (e *= t), 1)),
			(bC = `current`),
			(xC = (e) =>
				f.forwardRef((t, n) => {
					if (t.__withFX)
						return _(e, {
							...t,
							animate: void 0,
							initial: void 0,
							exit: void 0,
							ref: n,
						});
					let r = ZS(t);
					if (r) return _(e, { ...t, ...r, ref: n });
					let {
							parallax: i = {},
							styleAppear: a = {},
							styleTransform: o = {},
							presence: s = {},
							loop: c = {},
							forwardedProps: l,
							targetOpacityValue: u,
							withPerspective: d,
							inSmartComponent: p = !1,
						} = Tl(t),
						m = xs(n),
						{ values: h, style: g } = dl(s, m, p, t.style, t[qe]),
						{ values: v, style: y } = sl(i, m, t.style?.visibility),
						{ values: b, style: x } = Cl(o, m),
						{ values: S, style: C } = yl(a, m),
						{ values: w, style: T } = al(c, m),
						E = f.useMemo(() => {
							let e = new We(u ?? 1);
							return {
								scale: [S.scale, w.scale, h.scale, b.scale],
								opacity: [
									S.opacity,
									w.opacity,
									h.opacity,
									e,
									b.opacity,
								],
								x: [S.x, w.x, h.x, b.x],
								y: [S.y, w.y, v.y, h.y, b.y],
								rotate: [
									S.rotate,
									w.rotate,
									h.rotate,
									b.rotate,
								],
								rotateX: [
									S.rotateX,
									w.rotateX,
									h.rotateX,
									b.rotateX,
								],
								rotateY: [
									S.rotateY,
									w.rotateY,
									h.rotateY,
									b.rotateY,
								],
								skewX: [S.skewX, w.skewX, h.skewX, b.skewX],
								skewY: [S.skewY, w.skewY, h.skewY, b.skewY],
								transformPerspective: [
									b.transformPerspective,
									S.transformPerspective,
								],
							};
						}, [u, b, v, S, w, h]);
					Dl(t.style, E);
					let D = se(E.scale, yC),
						O = se(E.opacity, yC),
						k = se(E.x, vC),
						A = se(E.y, vC),
						j = se(E.rotate, vC),
						ee = se(E.rotateX, vC),
						te = se(E.rotateY, vC),
						ne = se(E.skewX, vC),
						M = se(E.skewY, vC),
						re = se(E.transformPerspective, vC),
						{ drag: ie, dragConstraints: ae } = l;
					Bo(ie && El(ae) ? ae : void 0);
					let oe = {
						opacity: O,
						scale: D,
						x: k,
						y: A,
						rotate: j,
						rotateX: ee,
						rotateY: te,
						skewX: ne,
						skewY: M,
					};
					tt(d) && (oe.transformPerspective = re);
					let ce = Ol(t.animate) ? t.animate : void 0,
						le = Ol(t.initial) ? t.initial : void 0,
						ue = Ol(t.exit) ? t.exit : void 0,
						de =
							p && !s.presenceInitial
								? { initial: le, animate: ce, exit: ue }
								: {};
					return _(e, {
						...l,
						...de,
						__withFX: !0,
						style: {
							...t.style,
							...y,
							...x,
							...T,
							...oe,
							...C,
							...g,
						},
						values: h,
						ref: m,
					});
				})),
			(SC = s({})),
			(CC = f.createContext({})),
			(wC = f.forwardRef(function (
				{ width: e, height: t, y: n, children: r, ...i },
				a,
			) {
				let o = f.useMemo(
						() => ({ width: e, height: t, y: n }),
						[e, t, n],
					),
					s = Kc(a);
				return _(CC.Provider, { value: o, children: s(r, i) });
			})),
			(TC = (e) =>
				f.forwardRef((t, n) =>
					_(e, {
						layoutId: Ro(t),
						...t,
						layoutIdKey: void 0,
						duplicatedFrom: void 0,
						ref: n,
					}),
				)),
			(EC = !1),
			(DC = class extends v {
				constructor() {
					(super(...arguments), I(this, `state`, { error: void 0 }));
				}
				static getDerivedStateFromError(e) {
					return { error: e };
				}
				componentDidCatch(e, t) {
					if (!jl(e)) return;
					let n = t?.componentStack;
					console.error(
						`Caught an error in SynchronousSuspenseErrorBoundary:

`,
						e,
						`

Component stack:
`,
						n,
						`

This error indicates a state update wasn’t wrapped with \`startTransition\`. Some of the UI might flash as a result. ` +
							ut(
								`If you are the author of this website, update external components and check recently added custom code or code overrides.`,
							),
					);
					let r =
						e instanceof Error && typeof e.stack == `string`
							? e.stack
							: void 0;
					en(`published_site_load_recoverable_error`, {
						message: String(e),
						stack: r,
						componentStack: r ? void 0 : n,
					});
				}
				render() {
					let e = this.state.error;
					if (e === void 0) return this.props.children;
					if (!jl(e)) throw e;
					return ((EC = !0), this.props.children);
				}
			}),
			(OC = (() => (m === void 0 ? null : new Promise(() => {})))()),
			(kC = _(Ml, {})),
			(AC = s(!1)),
			(AC.displayName = `DisableSuspenseSuspenseThatPreservesDomContext`),
			(jC = _(Pl, {})),
			(MC = class extends v {
				constructor() {
					(super(...arguments), I(this, `state`, { hasError: !1 }));
				}
				static getDerivedStateFromError() {
					return { hasError: !0 };
				}
				componentDidCatch(e, t) {
					(Il(this.props.getErrorMessage(), t?.componentStack),
						Fl(e, t));
				}
				render() {
					let { children: e, fallback: t = jC } = this.props,
						{ hasError: n } = this.state;
					return n ? t : e;
				}
			}),
			(NC = class extends v {
				constructor() {
					(super(...arguments), I(this, `state`, { hasError: !1 }));
				}
				componentDidCatch(e, t) {
					let n = t?.componentStack;
					(console.error(
						`Error in component (see previous log). This component has been hidden. Please check any custom code or code overrides to fix.`,
						n,
					),
						this.setState({ hasError: !0 }),
						Fl(e, t));
				}
				render() {
					let { children: e } = this.props,
						{ hasError: t } = this.state;
					return t ? null : e;
				}
			}),
			(PC = (() => f.createContext(void 0))()),
			(FC = `code-crash:`),
			(IC = TC(
				f.forwardRef(function (
					{
						children: e,
						layoutId: t,
						as: n,
						scopeId: r,
						nodeId: i,
						isAuthoredByUser: a,
						isModuleExternal: o,
						inComponentSlot: s,
						...c
					},
					l,
				) {
					let u = Qi(() => (t ? `${t}-container` : void 0)),
						d = Mo(n),
						p = Xl(
							f.Children.map(e, (e) =>
								f.isValidElement(e)
									? f.cloneElement(e, { layoutId: t })
									: e,
							),
							r,
							i,
							a,
							o,
							s,
						);
					return _(d, {
						layoutId: u,
						...c,
						ref: l,
						children: _(dx.Provider, {
							value: !0,
							children: _(z_.Provider, {
								value: i ?? null,
								children: _(Zi, {
									enabled: !1,
									children: _(He, {
										id: t ?? ``,
										inherit: c.layout ? !0 : `id`,
										children: p,
									}),
								}),
							}),
						}),
					});
				}),
			)),
			(LC = f.forwardRef(function (e, t) {
				let {
						as: n,
						children: r,
						scopeId: i,
						nodeId: a,
						isAuthoredByUser: o,
						rendersWithMotion: s,
						isModuleExternal: c,
						inComponentSlot: l,
						...u
					} = e,
					d = Xl(r, i, a, o, c, l),
					f = e.as ?? `div`;
				if (e.rendersWithMotion) {
					let n = Mo(f);
					return _(z_.Provider, {
						value: a ?? null,
						children: _(n, {
							...u,
							ref: t,
							style: e.style,
							children: d,
						}),
					});
				} else {
					let n = f,
						{ layoutId: r, layoutDependency: i, ...o } = u;
					return _(z_.Provider, {
						value: a ?? null,
						children: _(n, {
							...o,
							ref: t,
							style: e.style,
							children: d,
						}),
					});
				}
			})),
			(RC = s({
				onRegisterCursors: () => () => {},
				registerCursors: () => {},
			})),
			(zC = `framer-cursor-none`),
			(BC = `framer-pointer-events-none`),
			(VC = x(function ({ children: e }) {
				let t = Qi(() => {
						let e = new Set(),
							t = {},
							n = new Map();
						return {
							onRegisterCursors: (n) => (
								n(t),
								e.add(n),
								() => e.delete(n)
							),
							registerCursors: (r, i) => {
								(n.set(i, Object.keys(r)), (t = Zl(n, t, r)));
								for (let n of e) n(t);
								return () => {
									n.delete(i);
								};
							},
						};
					}),
					n = _e();
				return T(RC.Provider, {
					value: t,
					children: [e, !n && _(GC, {})],
				});
			})),
			(HC = (() =>
				jy(
					VC,
					[
						`.${zC}, .${zC} * { cursor: none !important; }`,
						`.${BC}, .${BC} * { pointer-events: none !important; }`,
					],
					`framer-lib-cursors-host`,
				))()),
			(UC = (() => ({
				position: `fixed`,
				top: 0,
				left: 0,
				zIndex: 13,
				pointerEvents: `none`,
			}))()),
			(WC = `data-framer-portal-id`),
			(GC = x(function () {
				let { onRegisterCursors: e } = C(RC),
					[t, n] = o(!1),
					i = he(0),
					a = he(0),
					s = he(0),
					c = w(null),
					u = w({ cursors: {}, cursorHash: void 0 }),
					f = zo();
				(r(() => {
					let e = G.matchMedia(`(any-hover: none)`);
					function t(e) {
						e.matches ? h(() => n(!1)) : n(!0);
					}
					return (
						e.addEventListener(`change`, t),
						e.matches || n(!0),
						() => {
							e.removeEventListener(`change`, t);
						}
					);
				}, []),
					d(() => {
						if (!t) return;
						let e = 0,
							n = 0;
						function r() {
							(i.set(e),
								a.set(n),
								Oe(s, 1, { type: `tween`, duration: 0.2 }));
						}
						let o = () => {
							if (et(u.current.cursors)) return;
							let t = tu(e, n);
							t !== u.current.cursorHash &&
								((u.current.cursorHash = t),
								Ae.update(() => f()));
						};
						function l(t) {
							if (t.pointerType === `touch`) {
								Ie(o);
								return;
							}
							(Ae.read(o, !0),
								(e = t.clientX),
								(n = t.clientY),
								Ae.update(r));
						}
						function d(e) {
							if (e.target === c.current || !c.current) return;
							let t = new PointerEvent(e.type, {
								bubbles: !0,
								cancelable: e.cancelable,
								pointerType: e.pointerType,
								pointerId: e.pointerId,
								composed: e.composed,
								isPrimary: e.isPrimary,
								buttons: e.buttons,
								button: e.button,
							});
							Ae.update(() => {
								c.current?.dispatchEvent(t);
							});
						}
						return (
							G.addEventListener(`pointermove`, l),
							document.addEventListener(`pointerdown`, d),
							document.addEventListener(`pointerup`, d),
							Ae.read(o, !0),
							() => {
								(G.removeEventListener(`pointermove`, l),
									document.removeEventListener(
										`pointerdown`,
										d,
									),
									document.removeEventListener(
										`pointerup`,
										d,
									),
									Ie(o));
							}
						);
					}, [s, i, a, f, t]),
					d(() => {
						if (!t) return;
						function e() {
							Oe(s, 0, { type: `tween`, duration: 0.2 });
						}
						return (
							document.addEventListener(`mouseleave`, e),
							G.addEventListener(`blur`, e),
							() => {
								(document.removeEventListener(`mouseleave`, e),
									G.removeEventListener(`blur`, e));
							}
						);
					}, [s, t]),
					r(() => {
						function t(e) {
							((u.current.cursors = e),
								(u.current.cursorHash = et(e)
									? null
									: tu(i.get(), a.get())),
								f());
						}
						let n = e(t);
						return () => {
							(n(), document.body.classList.toggle(zC, !1));
						};
					}, [i, a, e, f]));
				let { cursors: p, cursorHash: m } = u.current,
					g = m ? p[m] : null,
					v = Ql(g);
				r(() => {
					t && document.body.classList.toggle(zC, v);
				}, [v, t]);
				let y = g?.component,
					b = g?.transition ?? { duration: 0 },
					x =
						b.duration === void 0
							? b
							: { ...b, duration: b.duration * 1e3 },
					S = ve(i, x),
					T = ve(a, x),
					D = se(() => S.get() + (g?.offset?.x ?? 0)),
					O = se(() => T.get() + (g?.offset?.y ?? 0)),
					k = g?.alignment,
					A = g?.placement,
					j = l((e, t) => `translate(${eu(A, k)}) ${t}`, [k, A]);
				return !t || !g || !y
					? null
					: _(E, {
							children: _(y, {
								transformTemplate: j,
								style: { ...UC, x: D, y: O, opacity: s },
								globalTapTarget: !0,
								variant: g?.variant,
								ref: c,
								className: BC,
							}),
						});
			})),
			(KC = `webPageId`),
			(qC = class {
				constructor() {
					(I(this, `collectedLinks`, new Map()),
						I(this, `nestingInfo`, new Map()));
				}
				clear() {
					(this.collectedLinks.clear(), this.nestingInfo.clear());
				}
				getLinks() {
					let e = new Map();
					for (let [t, n] of this.nestingInfo) {
						let r = this.collectedLinks.get(t);
						B(r, `Outer link not found: ${t}`);
						let i = Array.from(n).map((e) => {
							let t = this.collectedLinks.get(e);
							return (B(t, `Inner link not found: ${e}`), t);
						});
						e.set(r, i);
					}
					return e;
				}
				collectNestedLink(e, t) {
					if ((xg && !za()) || !e.nodeId || !t.nodeId) return;
					(this.collectedLinks.set(iu(e), e),
						this.collectedLinks.set(iu(t), t));
					let n = this.nestingInfo.get(iu(e)) ?? new Set();
					(n.add(iu(t)), this.nestingInfo.set(iu(e), n));
				}
			}),
			(JC = new qC()),
			(YC = `element`),
			(XC = `collection`),
			(ZC = `collectionItemId`),
			(QC = `pathVariables`),
			($C = `framer/page-link,`),
			(ew = s(void 0)),
			(tw = `overlay`),
			(nw = `template-overlay`),
			(rw = f.forwardRef(function ({ Component: e, ...t }, n) {
				return e ? _(e, { ...t, ref: n }) : null;
			})),
			(iw = class extends v {
				constructor() {
					(super(...arguments),
						I(this, `state`, { error: void 0 }),
						I(
							this,
							`message`,
							`Made UI non-interactive due to an error.`,
						),
						I(this, `messageFatal`, `Fatal error.`));
				}
				static getDerivedStateFromError(e) {
					return { error: e };
				}
				componentDidCatch(e) {
					if (
						((m.__framer_hadFatalError = !0),
						`cause` in e && (e = e.cause),
						console.error(
							ut(Sg ? this.message : this.messageFatal, e),
						),
						Math.random() > 0.5)
					)
						return;
					let t =
						e instanceof Error && typeof e.stack == `string`
							? e.stack
							: null;
					en(`published_site_load_error`, {
						message: String(e),
						stack: t,
					});
				}
				render() {
					let e = this.state.error;
					if (!e) return this.props.children;
					let t = `cause` in e ? e.cause : e,
						n = /-->/gu,
						r =
							(Sg &&
								document.getElementById(`main`)?.innerHTML) ||
							``;
					return _(`div`, {
						style: { display: `contents` },
						suppressHydrationWarning: !0,
						dangerouslySetInnerHTML: {
							__html:
								`<!-- DOM replaced by GracefullyDegradingErrorBoundary due to "${t.message.replace(n, `--!>`)}". ${ut()}: --><!-- Stack: ${e.stack?.replace(n, `--!>`)} -->` +
								r,
						},
					});
				}
			}),
			(aw = /:([a-z]\w*)/gi),
			(ow = s(void 0)),
			(sw = 500),
			(cw = 0.9),
			(lw = 1.7),
			(uw = 4),
			(dw = 1 / 0),
			(fw = new WeakMap()),
			(pw = new Set()),
			(mw = new Map()),
			(hw = !f_ || typeof IntersectionObserver > `u` ? null : Du()),
			(gw = xu(
				b(function (
					{
						children: e,
						href: t,
						openInNewTab: n,
						smoothScroll: r,
						clickTrackingId: i,
						relValues: a,
						preserveParams: o,
						nodeId: s,
						scopeId: l,
						motionChild: u,
						...d
					},
					f,
				) {
					let p = kt(),
						m = jt(),
						h = Tu(),
						{ activeLocale: g, locales: _ } = yr(),
						v = Fu(),
						b = vn(),
						x = au(),
						S = Iu({
							nodeId: s,
							clickTrackingId: i,
							router: p,
							href: t,
							activeLocale: g,
						}),
						C = c(() => {
							if (!t) return {};
							let e = ru(t) ? t : fu(t);
							if (!e) return {};
							if (L(e))
								return Bu(
									e,
									p,
									m,
									{
										openInNewTab: n,
										trackLinkClick: S,
										rel: a?.join(` `),
										preserveParams: o,
										smoothScroll: r,
									},
									b,
									g?.id,
									_,
									h,
								);
							let {
									unresolvedPathSlugs: i,
									unresolvedHashSlugs: s,
								} = e,
								c = v(i, s, g);
							if (st(c)) throw c;
							let {
									routeId: l,
									href: u,
									elementId: d,
									pathVariables: f,
									locale: y,
								} = Su(p, m, e, g, c, h),
								x = ku(n, !0),
								C = x === `_blank`,
								w = { pathVariables: f, locale: y },
								T = (e) =>
									Ru(p, l, () => b(l, w, !1, !C), d, f, r, e);
							return {
								href: u,
								target: x,
								onClick: zu(u, S, T),
								"data-framer-page-link-current":
									(m && Eu(m, e, h)) || void 0,
								navigate: T,
								preload: () => b(l, w, !0, !C),
								_routeId: l,
								_pathVariables: f,
								_locale: y,
							};
						}, [t, p, g, h, n, m, r, S, a, _, o, v, b]),
						w = xs(y(e) && `ref` in e ? e.ref : void 0),
						{
							navigate: T,
							preload: E,
							_routeId: D,
							_pathVariables: O,
							_locale: k,
							...A
						} = C;
					Ss(
						w,
						(e) => {
							if (!(e === null || !D || !E || x))
								return hw?.(
									e,
									E,
									`${D}:${k?.id}:${JSON.stringify(O)}`,
								);
						},
						[E, D, O, k],
					);
					let j = !!T;
					return mu(
						Kc(f).cloneAsArray(e, (e) =>
							Vu(e, { ...d, ...Uu(A, u, j) }, w),
						),
						l,
						s,
						t,
						C,
						w,
					);
				}),
			)),
			(_w = `framer`),
			(vw = 3),
			(yw = 30),
			(bw = 1e4),
			(xw = `3`),
			(Sw = `__framer`),
			(Cw = [
				`website`,
				`company`,
				`message`,
				`subject`,
				`title`,
				`description`,
				`feedback`,
				`notes`,
				`details`,
				`remarks`,
				`comments`,
			]),
			(ww = (() => Date.now())()),
			(Tw = {
				name: 0,
				value: 1,
				setAttribute: 2,
				valueProperty: 3,
				isInputEventTrusted: 4,
				inputChangeTimeSinceModuleLoad: 5,
				wasFilledBeforeHydration: 6,
			}),
			(Ew = {
				fieldData: 0,
				fieldCount: 1,
				fieldFilledCount: 2,
				hpVersion: 3,
				siteId: 4,
				timeToSubmissionSinceModuleLoad: 5,
			}),
			(Dw = () => ((Date.now() - ww) / 1e3).toFixed(2)),
			(Ow = ({ inputStateRef: e }) => {
				let { inputRef: t, originalName: n } = e;
				return (
					f.useLayoutEffect(() => {
						let n = t.current;
						if (!n) return;
						let r = e.methodsUsed;
						n.value && (r.wasFilledBeforeHydration = !0);
					}, [t, e]),
					f.useEffect(() => {
						let n = t.current;
						if (!n) return;
						let r = e.methodsUsed,
							i = Element.prototype.setAttribute,
							a = i.bind(n);
						n.setAttribute = function (e, t) {
							(e === `value` &&
								((r.setAttribute = !0),
								(r.inputChangeTimeSinceModuleLoad = Dw())),
								a(e, t));
						};
						let o = Object.getOwnPropertyDescriptor(
							HTMLInputElement.prototype,
							`value`,
						);
						o &&
							Object.defineProperty(n, `value`, {
								configurable: !0,
								enumerable: !0,
								get: function () {
									return o.get?.call(this) ?? ``;
								},
								set: function (e) {
									((r.valueProperty = !0),
										(r.inputChangeTimeSinceModuleLoad =
											Dw()),
										o.set?.call(this, e));
								},
							});
						let s = (e) => {
							((r.isInputEventTrusted = e.isTrusted),
								(r.inputChangeTimeSinceModuleLoad = Dw()));
						};
						return (
							n.addEventListener(`input`, s),
							() => {
								((n.setAttribute = i.bind(n)),
									o && Object.defineProperty(n, `value`, o),
									n.removeEventListener(`input`, s));
							}
						);
					}, [t, e]),
					_(`input`, {
						ref: t,
						type: `text`,
						name: n,
						suppressHydrationWarning: !0,
						tabIndex: -1,
						autoComplete: `one-time-code`,
						"aria-hidden": `true`,
						style: { position: `absolute`, transform: `scale(0)` },
						defaultValue: ``,
						"data-1p-ignore": !0,
						"data-lpignore": `true`,
						"data-form-type": `other`,
						"data-bwignore": !0,
					})
				);
			}),
			(kw = `https://www.google.com/recaptcha/api.js`),
			(Aw = new Map()),
			(jw = { state: `pending` }),
			(Mw = { state: `success` }),
			(Nw = { state: `incomplete` }),
			(Pw = { state: `complete` }),
			(Fw = { state: `error` }),
			(Iw = f.createContext(void 0)),
			(Lw = f.forwardRef(function (
				{
					action: e,
					children: t,
					redirectUrl: n,
					onSuccess: r,
					onError: i,
					onLoading: a,
					submitTrackingId: o,
					nodeId: s,
					formCaptchaProvider: c,
					formCaptchaSiteKey: l,
					...u
				},
				d,
			) {
				let p = f.useRef(null),
					m = d ?? p,
					g = !(c && l),
					{
						states: v,
						convertHoneypotFieldsForSubmission: y,
						replaceHoneypotWithMetadata: b,
					} = Xu(g),
					x = kt(),
					S = jt(),
					w = Tu(),
					E = fn(),
					{ executeChallenge: D } = rd({ provider: c, siteKey: l }),
					[O, k] = f.useReducer(id, Nw),
					{ activeLocale: A, locales: j } = yr(),
					ee = C(Iw),
					te = f.useRef({ onSuccess: r, onError: i, onLoading: a });
				te.current = { onSuccess: r, onError: i, onLoading: a };
				let ne = f.useRef(!1);
				async function M(e) {
					if (L(e)) {
						let t = Cu(x, e, w, j);
						if (!t) {
							sd(e, m);
							return;
						}
						let { routeId: n, elementId: r, pathVariables: i } = t;
						x.navigate?.(n, r, i);
						return;
					}
					B(
						ru(e),
						`Expected link to be either a LinkToWebPage or a string`,
						e,
					);
					let {
						routeId: t,
						elementId: n,
						pathVariables: r,
					} = Su(
						x,
						S,
						e,
						A,
						await Nu(
							e.unresolvedPathSlugs,
							e.unresolvedHashSlugs,
							A,
							E,
						),
						w,
					);
					x.navigate?.(t, n, r);
				}
				let re = async (t) => {
						if ((t.preventDefault(), !e || !ee || ne.current))
							return;
						((ne.current = !0), y());
						let r = new FormData(t.currentTarget);
						(await _n({
							priority: `user-visible`,
							continueAfter: `paint`,
						}),
							b(r),
							h(() => k({ type: `submit` })),
							Yu(r, G.document));
						for (let [e, t] of r) t instanceof File && r.delete(e);
						try {
							(te.current.onLoading?.(),
								Qu({
									router: x,
									nodeId: s,
									submitTrackingId: o,
									activeLocale: A,
								}),
								await ld(e, r, ee, D),
								h(() => k({ type: `success` })),
								te.current.onSuccess?.(),
								n && (await M(n)));
						} catch (e) {
							(h(() => k({ type: `error` })),
								te.current.onError?.(),
								console.error(e));
						}
						ne.current = !1;
					},
					ie = (e) => {
						let { target: t, currentTarget: n, key: r } = e;
						t instanceof HTMLTextAreaElement ||
							(r === `Enter` &&
								n.checkValidity() &&
								(e.preventDefault(), re(e)));
					},
					ae = async (e) => {
						let t = e.currentTarget;
						(await _n({
							priority: `background`,
							continueAfter: `paint`,
						}),
							h(() =>
								k({ type: cd(t) ? `incomplete` : `complete` }),
							));
					};
				return T(P.form, {
					...u,
					onSubmit: ad(O) ? re : od,
					onKeyDown: ie,
					onChange: ae,
					ref: m,
					children: [t(O), g && _(Zu, { states: v })],
				});
			})),
			(Rw = `__framer_force_showing_editorbar_since`),
			(zw = class extends v {
				constructor() {
					(super(...arguments), I(this, `state`, { error: void 0 }));
				}
				static getDerivedStateFromError(e) {
					return { error: e };
				}
				render() {
					return this.state.error ? null : this.props.children;
				}
			}),
			(Bw = () => {
				try {
					return !!localStorage[Rw];
				} catch {
					return !1;
				}
			}),
			(Vw = () => !Bw()),
			(Hw = (() => {
				let e = s(void 0);
				return ((e.displayName = `TriggerStateContext`), e);
			})()),
			(Uw = `main`),
			(Ww = `framerGeneratedPage`),
			(Gw = ``),
			(Kw = `<!-- End of headStart -->`),
			(qw = `<!-- Start of headEnd -->`),
			(Jw = `<!-- End of headEnd -->`),
			(Yw = `<!-- Start of bodyStart -->`),
			(Xw = `<!-- End of bodyStart -->`),
			(Zw = `<!-- Start of bodyEnd -->`),
			(Qw = `<!-- End of bodyEnd -->`),
			($w = (() => f.createContext(void 0))()),
			(eT = null),
			(tT = null),
			wg(Ad),
			(nT = (e, t, n, r, i, a) => {
				let o = C(Iw),
					s = w(),
					c = fn(),
					l = w(!0);
				return (
					d(() => {
						function u() {
							(!eT || !tT) && Ad();
							let s = n
									? new URL(G.location.origin + n)
									: G.location,
								u = {
									version: $g,
									abTestId: e?.abTestId,
									framerSiteId: o ?? null,
									webPageId: e?.abTestingVariantId ?? t,
									routePath: e?.path || `/`,
									collectionItemId: null,
									framerLocale: i?.code || null,
									referrer: null,
									url: s.href,
									hostname: s.hostname,
									pathname: s.pathname,
									search: s.search || null,
									hash: s.hash || null,
									timezone: eT,
									locale: tT,
								},
								d = l.current && a !== void 0 ? a : void 0;
							return e?.collectionId && r
								? (async () => {
										let t = d ?? null;
										if (d === void 0) {
											let n =
													e.collectionId &&
													c?.get(e.collectionId),
												[a] = Object.values(r);
											if (n && L(a)) {
												let e = n.getRecordIdBySlug(
													a,
													i || void 0,
												);
												t =
													(st(e) ? await e : e) ??
													null;
											}
										}
										return { ...u, collectionItemId: t };
									})()
								: u;
						}
						(async () => {
							let e = (s.current = u()),
								t = e instanceof Promise ? await e : e;
							((s.current = t),
								l.current
									? (l.current = !1)
									: en(
											`published_site_pageview`,
											t,
											`eager`,
										));
						})();
						let d = async (e) => {
							if (e.persisted) {
								let e = (s.current = u()),
									t = e instanceof Promise ? await e : e;
								((s.current = t),
									en(`published_site_pageview`, t, `eager`));
							}
						};
						return (
							m.addEventListener(`pageshow`, d),
							() => {
								m.removeEventListener(`pageshow`, d);
							}
						);
					}, [e, t, n, r, i, o, c, a]),
					s
				);
			}),
			(rT = { status: `loading`, data: void 0 }),
			(iT = 5e3),
			(aT = () => {}),
			(fT = class e {
				constructor() {
					(I(this, `responseValues`, new Map()),
						xe(this, oT, new Map()),
						xe(this, sT, new Set()),
						xe(this, cT, new Map()),
						xe(this, lT, new Map()),
						xe(this, uT, new Map()),
						xe(this, dT, new Map()),
						I(
							this,
							`persistCache`,
							Bc(() => {
								let t = {};
								for (let [e, n] of this.responseValues) {
									if (!n || n.status !== `success`) continue;
									let r = N(this, cT).get(e);
									if (!r || r === 0) continue;
									let i = N(this, lT).get(e);
									i &&
										((i && Kd(i, r)) ||
											(t[e] = [i, r, n.data]));
								}
								try {
									localStorage.setItem(
										e.cacheKey,
										JSON.stringify(t),
									);
								} catch {}
							}, 500),
						));
				}
				unmount() {
					for (let [e, t] of N(this, dT))
						(clearInterval(t), N(this, dT).delete(e));
				}
				stopQueryRefetching(e) {
					let t = Hd(e),
						n = N(this, dT).get(t);
					n && (clearInterval(n), N(this, dT).delete(t));
				}
				startQueryRefetching(e) {
					let t = Hd(e),
						n = N(this, dT).get(t),
						r = N(this, cT).get(t);
					if (n || !r) return;
					let i = G.setInterval(() => {
						if (document.visibilityState === `hidden`) return;
						let n = N(this, lT).get(t);
						!r ||
							!n ||
							this.fetchWithCache({ ...e, cacheDuration: r });
					}, r);
					N(this, dT).set(t, i);
				}
				hydrateCache() {
					try {
						let t = localStorage.getItem(e.cacheKey);
						if (!t) return;
						let n = JSON.parse(t);
						if (typeof n != `object`)
							throw Error(`Invalid cache data`);
						for (let e in n) {
							let t = n[e];
							if (!Array.isArray(t) || t.length !== 3)
								throw Error(`Invalid cache data`);
							let [r, i, a] = t;
							Kd(r, i) ||
								(N(this, lT).set(e, r),
								N(this, cT).set(e, i),
								this.responseValues.set(e, {
									status: `success`,
									data: a,
								}));
						}
					} catch {
						try {
							localStorage.removeItem(e.cacheKey);
						} catch {}
					}
				}
				setResponseValue(e, t) {
					(this.responseValues.set(e, t), this.persistCache());
					let n = N(this, oT).get(e);
					if (n) for (let e of n) e();
				}
				async prefetch(e) {
					if (!La() || !su(e.url, !1)) return;
					let t = Hd(e);
					(N(this, sT).add(t), await this.fetchWithCache(e));
					let n = this.getValue(t);
					if (!n || n.status === `loading`)
						throw Error(`Unexpected result status for prefetch`);
					let r = N(this, oT).get(t);
					for (let e of r ?? []) e();
					let i = Gd(n, e);
					return (
						e.resultOutputType === `image` &&
							L(i) &&
							(await zd(i).catch(aT)),
						i
					);
				}
				async fetchWithCache(e) {
					if (!La()) return;
					let t = Hd(e),
						n = N(this, uT).get(t);
					if (n) return n;
					let r = N(this, lT).get(t),
						i = r && Kd(r, e.cacheDuration);
					if (this.responseValues.has(t) && !i) return;
					this.responseValues.get(t) || this.setResponseValue(t, rT);
					let a = (async () => {
						try {
							let n = await fetch(e.url, {
								method: `GET`,
								credentials: e.credentials,
							});
							if (!n.ok) {
								this.setResponseValue(t, {
									status: `error`,
									error: Error(`Invalid Response Status`),
									data: void 0,
								});
								return;
							}
							let r = await n.json();
							(this.setResponseValue(t, {
								status: `success`,
								data: r,
							}),
								N(this, lT).set(t, Date.now()));
						} catch (e) {
							this.setResponseValue(t, {
								status: `error`,
								error: e,
								data: void 0,
							});
						}
					})();
					return (
						N(this, uT).set(t, a),
						a.finally(() => {
							N(this, uT).delete(t);
						}),
						a
					);
				}
				getValue(e, t = !1) {
					if (!(t && !N(this, sT).has(e)))
						return this.responseValues.get(e);
				}
				subscribe(e, t, n = !1) {
					let { url: r, cacheDuration: i } = e;
					if (!su(r, !1)) return aT;
					let a = Hd(e),
						o = N(this, cT).get(a);
					((!o || i < o) && N(this, cT).set(a, i),
						n ||
							(this.startQueryRefetching(e),
							this.fetchWithCache(e)));
					let s = N(this, oT).get(a) ?? new Set();
					return (
						s.add(t),
						N(this, oT).set(a, s),
						() => {
							let n = N(this, oT).get(a);
							n &&
								(n.delete(t),
								n.size === 0 && N(this, oT).delete(a),
								N(this, oT).size === 0 &&
									this.stopQueryRefetching(e));
						}
					);
				}
			}),
			(oT = new WeakMap()),
			(sT = new WeakMap()),
			(cT = new WeakMap()),
			(lT = new WeakMap()),
			(uT = new WeakMap()),
			(dT = new WeakMap()),
			I(fT, `cacheKey`, `framer-fetch-client-cache`),
			(pT = fT),
			(mT = s(void 0)),
			(hT = s(!0)),
			(gT = ({ children: e, client: t }) => {
				let [n] = o(() => t ?? new pT()),
					[r, i] = o(!0);
				return (
					d(
						() => (
							n.hydrateCache(),
							h(() => {
								i(!1);
							}),
							() => n.unmount()
						),
						[n],
					),
					_(hT.Provider, {
						value: r,
						children: _(mT.Provider, { value: n, children: e }),
					})
				);
			}),
			(ze.WillChange = Ge),
			(_T = xu(
				b(function ({ links: e, children: t, ...n }, r) {
					let i = kt(),
						{ activeLocale: a } = yr(),
						o = Kc(r),
						s = Fu(),
						c = [],
						l = e.map((e) => {
							if (e)
								return L(e)
									? Gu(e, i, void 0, void 0, a)
									: Gu(
											e.href,
											i,
											e.implicitPathVariables,
											e.refKey,
											a,
											(e, t) => s(e, t, a, c),
										);
						});
					if (c.length > 0) throw Promise.allSettled(c);
					return o(t(l), n);
				}),
			)),
			(vT = {
				cast(e, t) {
					switch (t.type) {
						case `array`:
							return lf(e, t);
						case `boolean`:
							return df(e);
						case `color`:
							return mf(e);
						case `date`:
							return gf(e);
						case `enum`:
							return vf(e);
						case `file`:
							return bf(e);
						case `link`:
							return Sf(e);
						case `number`:
							return wf(e);
						case `object`:
							return Df(e, t);
						case `responsiveimage`:
							return kf(e);
						case `richtext`:
							return jf(e);
						case `string`:
							return Ff(e);
						case `vectorsetitem`:
							return Nf(e);
						case `unknown`:
							return e;
						default:
							V(t, `Unsupported cast`);
					}
				},
				parse(e) {
					return Qe(e)
						? { type: `boolean`, value: e }
						: it(e)
							? { type: `date`, value: e.toISOString() }
							: R(e)
								? { type: `number`, value: e }
								: L(e)
									? { type: `string`, value: e }
									: $e(e)
										? {
												type: `array`,
												value: e.map(vT.parse),
											}
										: null;
				},
				equal(e, t, n) {
					return e?.type === t?.type ? Lf(e, t, n) === 0 : !1;
				},
				lessThan(e, t, n) {
					return e?.type === t?.type ? Lf(e, t, n) < 0 : !1;
				},
				lessThanOrEqual(e, t, n) {
					return e?.type === t?.type ? Lf(e, t, n) <= 0 : !1;
				},
				greaterThan(e, t, n) {
					return e?.type === t?.type ? Lf(e, t, n) > 0 : !1;
				},
				greaterThanOrEqual(e, t, n) {
					return e?.type === t?.type ? Lf(e, t, n) >= 0 : !1;
				},
				in(e, t, n) {
					return t?.type === `array`
						? t.value.some((t) => vT.equal(t, e, n))
						: !1;
				},
				indexOf(e, t, n) {
					return e?.type === `array`
						? e.value.findIndex((e) => vT.equal(e, t, n))
						: -1;
				},
				contains(e, t, n) {
					let r = If(e),
						i = If(t);
					return nt(r) || nt(i)
						? !1
						: (n.type === 0 &&
								((r = r.toLowerCase()), (i = i.toLowerCase())),
							r.includes(i));
				},
				startsWith(e, t, n) {
					let r = If(e),
						i = If(t);
					return nt(r) || nt(i)
						? !1
						: (n.type === 0 &&
								((r = r.toLowerCase()), (i = i.toLowerCase())),
							r.startsWith(i));
				},
				endsWith(e, t, n) {
					let r = If(e),
						i = If(t);
					return nt(r) || nt(i)
						? !1
						: (n.type === 0 &&
								((r = r.toLowerCase()), (i = i.toLowerCase())),
							r.endsWith(i));
				},
				length(e) {
					switch (e?.type) {
						case `array`:
							return e.value.length;
					}
					return 0;
				},
				stringify(e) {
					if (e === null) return `null`;
					switch (e.type) {
						case `array`:
							return `[${e.value.map(vT.stringify).join(`, `)}]`;
						case `boolean`:
						case `number`:
							return String(e.value);
						case `string`:
							return `'${e.value}'`;
						case `enum`:
							return `'${e.value}' /* Enum */`;
						case `color`:
							return `'${e.value}' /* Color */`;
						case `date`:
							return `'${e.value}' /* Date */`;
						case `richtext`:
							return `RichText`;
						case `vectorsetitem`:
							return `VectorSetItem`;
						case `responsiveimage`:
							return `ResponsiveImage`;
						case `file`:
							return `File`;
						case `link`:
							return L(e.value)
								? `'${e.value}' /* Link */`
								: `Link`;
						case `object`:
							return `Object`;
						default:
							V(e);
					}
				},
			}),
			(yT = { type: `unknown`, isNullable: !0 }),
			(bT = class {
				constructor(e, t) {
					((this.collection = e),
						(this.locale = t),
						I(this, `schema`),
						I(this, `indexes`, []));
					let n = co(e);
					B(n, `Collection does not have properties`);
					let r = { id: { type: `string`, isNullable: !1 } },
						i = Object.entries(n);
					for (let [e, t] of i) {
						if (!t) continue;
						let n = t.type;
						(B(n !== `array`, `Array properties are not supported`),
							B(
								n !== `object`,
								`Object properties are not supported`,
							),
							(r[e] = { type: n, isNullable: !0 }));
					}
					this.schema = r;
				}
				getDatabaseItem(e, t) {
					let n = {},
						r = Number(t);
					for (let t in this.schema) {
						let i = e[t];
						if (rt(i)) continue;
						let a = this.schema[t];
						if (!tt(a)) {
							if (
								(B(
									a.type !== `unknown`,
									`Invalid definition type`,
								),
								a.type === `richtext`)
							) {
								n[t] = {
									type: a.type,
									value: { itemIndex: r, key: t },
								};
								continue;
							}
							n[t] = { type: a.type, value: i };
						}
					}
					return { pointer: t, data: n };
				}
				async resolveRichText(e) {
					let { itemIndex: t, key: n } = e,
						r = (await Rf(this.collection, this.locale))[t]?.[n];
					return Vg.is(r) ? r.readMaybeAsync() : r;
				}
				async scanItems() {
					return (await Rf(this.collection, this.locale)).map(
						(e, t) => {
							let n = String(t);
							return this.getDatabaseItem(e, n);
						},
					);
				}
				async resolveItems(e) {
					let t = await Rf(this.collection, this.locale);
					return e.map((e) => {
						let n = t[Number(e)];
						return (
							B(n, `Can't find collection item`),
							this.getDatabaseItem(n, e)
						);
					});
				}
				compareItems(e, t) {
					return Number(e.pointer) - Number(t.pointer);
				}
			}),
			(xT = new Map()),
			(ST = new WeakMap()),
			(CT = `$r_`),
			(wT = new Map()),
			(TT = 1e3),
			(Q = class e {
				constructor(e) {
					this.network = e;
				}
				static estimate(t, n) {
					let r = Uf(),
						i = Wf();
					return new e(t * r + n / i);
				}
				static max(t, n) {
					return new e(Math.max(t.network, n.network));
				}
				static compare(e, t) {
					return e.network < t.network
						? -1
						: e.network > t.network
							? 1
							: 0;
				}
				add(e) {
					return ((this.network += e.network), this);
				}
				toString() {
					return `${this.network}ms`;
				}
			}),
			(ET = class {
				constructor(e, t) {
					((this.id = e),
						(this.relational = t),
						I(this, `nodes`, []),
						I(this, `winners`, new Map()));
				}
				addNode(e) {
					(this.nodes.push(e), e.setGroup(this));
				}
				getWinner(e) {
					let t = e.getHash(),
						n = this.winners.get(t);
					if (n) return n;
					let r = new DT();
					return (this.winners.set(t, r), r);
				}
				getOptimized(e) {
					let t = this.getWinner(e);
					B(t.node, `Group not optimized`);
					let n = t.node.getOptimized(e);
					return (n.setGroup(this), n);
				}
			}),
			(DT = class {
				constructor() {
					(I(this, `node`),
						I(this, `cost`, new Q(1 / 0)),
						I(this, `nodes`, []));
				}
				update(e, t) {
					(this.nodes.push(e),
						Q.compare(t, this.cost) < 0 &&
							((this.node = e), (this.cost = t)));
				}
			}),
			(OT = class {
				constructor(e) {
					this.isSynchronous = e;
				}
			}),
			(kT = class extends OT {
				constructor() {
					(super(...arguments), I(this, `group`));
				}
				getGroup() {
					return (
						B(this.group, `Node must be in a group`),
						this.group
					);
				}
				setGroup(e) {
					(B(!this.group, `Node is already in a group`),
						(this.group = e));
				}
				evaluateSync() {
					return Yd(this.evaluate(void 0));
				}
				evaluateAsync() {
					return Xd(this.evaluate(void 0));
				}
			}),
			(AT = class {
				constructor(e, t, n = {}) {
					((this.options = n),
						I(this, `collections`),
						I(this, `richTextCache`, new WeakMap()),
						I(this, `vectorSetItemCache`, new WeakMap()),
						(this.collections = Qf(e, t)));
				}
				*resolveArrayValue(e) {
					return yield* $d(e.value.map((e) => this.resolveValue(e)));
				}
				*resolveObjectValue(e) {
					let t = {};
					for (let n in e.value) {
						let r = e.value[n];
						t[n] = this.resolveValue(r);
					}
					return yield* Qd(t);
				}
				loadRichTextValue(e) {
					let t = e.value;
					B(Yf(t), `Rich text pointer must be wrapped`);
					let n = this.collections.get(t.collectionId);
					B(n, `Can't find collection for rich text pointer`);
					let r = this.richTextCache.get(n) ?? new Map();
					this.richTextCache.set(n, r);
					let i = r.get(t.pointer);
					if (i) return i;
					let a =
						this.options.richTextMode === `raw`
							? t.pointer
							: n.resolveRichText(t.pointer);
					return (r.set(t.pointer, a), a);
				}
				preloadRichTextValue(e) {
					this.loadRichTextValue(e);
				}
				*resolveRichTextValue(e) {
					let t = this.loadRichTextValue(e);
					return ot(t) ? yield t : t;
				}
				loadVectorSetItemValue(e) {
					let t = e.value;
					B(Zf(t), `Vector set item pointer must be wrapped`);
					let n = this.collections.get(t.collectionId);
					(B(n, `Can't find collection for vector set item pointer`),
						B(
							n.resolveVectorSetItem,
							`Can't resolve vector set item pointer`,
						));
					let r = this.vectorSetItemCache.get(n) ?? new Map();
					this.vectorSetItemCache.set(n, r);
					let i = r.get(t.pointer);
					if (i) return i;
					let a = n.resolveVectorSetItem(t.pointer);
					return (r.set(t.pointer, a), a);
				}
				preloadVectorSetItemValue(e) {
					this.loadVectorSetItemValue(e);
				}
				*resolveVectorSetItemValue(e) {
					let t = this.loadVectorSetItemValue(e);
					return ot(t) ? yield t : t;
				}
				*resolveValue(e) {
					switch (e?.type) {
						case `array`:
							return yield* this.resolveArrayValue(e);
						case `object`:
							return yield* this.resolveObjectValue(e);
						case `richtext`:
							return yield* this.resolveRichTextValue(e);
						case `vectorsetitem`:
							return yield* this.resolveVectorSetItemValue(e);
					}
					return e?.value ?? null;
				}
			}),
			(jT = `index`),
			(MT = class extends Set {
				merge(e) {
					for (let t of e) this.add(t);
				}
				equals(e) {
					if (this === e) return !0;
					if (this.size !== e.size) return !1;
					for (let t of this) if (!e.has(t)) return !1;
					return !0;
				}
				subsetOf(e) {
					if (this === e) return !0;
					if (this.size > e.size) return !1;
					for (let t of this) if (!e.has(t)) return !1;
					return !0;
				}
				getHash() {
					let e = [];
					for (let t of this) e.push(t.id);
					return (e.sort((e, t) => e - t), W(this.name, ...e));
				}
			}),
			(NT = class {
				constructor(e, t, n) {
					((this.id = e),
						(this.name = t),
						(this.data = n),
						I(this, `indexes`, new FT()),
						I(this, `fields`, new $()));
				}
			}),
			(PT = class {
				constructor(e, t, n, r, i, a) {
					for (let o in ((this.id = e),
					(this.data = t),
					(this.collection = n),
					(this.lookupNodes = r),
					(this.constraint = i),
					(this.ordering = a),
					I(this, `resolvedFields`, new $()),
					t.schema))
						for (let e of n.fields)
							e.name === o && this.resolvedFields.add(e);
				}
			}),
			(FT = class extends MT {
				constructor() {
					(super(...arguments), I(this, `name`, `Indexes`));
				}
			}),
			(IT = class {
				constructor(e, t, n, r) {
					((this.id = e),
						(this.name = t),
						(this.definition = n),
						(this.collection = r));
				}
				getValue(e) {
					B(this.name, `Can only get value of field with a name`);
					let t = e.data[this.name];
					switch (t?.type) {
						case `richtext`:
							return (
								B(
									this.collection,
									`Rich text field must have a collection`,
								),
								{
									type: `richtext`,
									value: Jf(this.collection.data, t.value),
								}
							);
						case `vectorsetitem`:
							return (
								B(
									this.collection,
									`Vector set item field must have a collection`,
								),
								{
									type: `vectorsetitem`,
									value: Xf(this.collection.data, t.value),
								}
							);
					}
					return t ?? null;
				}
			}),
			($ = class extends MT {
				constructor() {
					(super(...arguments), I(this, `name`, `Fields`));
				}
			}),
			(LT = class {
				constructor(e, t = `asc`) {
					((this.field = e), (this.direction = t));
				}
				getHash() {
					return W(`OrderingField`, this.field.id, this.direction);
				}
			}),
			(RT = class {
				constructor(e) {
					(I(this, `fields`, []), e && this.merge(e));
				}
				get length() {
					return this.fields.length;
				}
				getHash() {
					return W(`Ordering`, ...this.fields);
				}
				push(e) {
					this.fields.push(e);
				}
				merge(e) {
					this.fields.push(...e.fields);
				}
				equals(e) {
					return this === e
						? !0
						: this.length === e.length
							? this.getHash() === e.getHash()
							: !1;
				}
				providedByFields(e) {
					for (let { field: t } of this.fields)
						if (!e.has(t) && t.name !== jT) return !1;
					return !0;
				}
			}),
			(zT = class {
				constructor(e, t) {
					((this.ordering = e), (this.resolvedFields = t));
				}
				getHash() {
					return W(
						`RequiredProps`,
						this.ordering,
						this.resolvedFields,
					);
				}
				get isMinimal() {
					return (
						this.ordering.length === 0 &&
						this.resolvedFields.size === 0
					);
				}
				canProvide(e) {
					return (
						this.canProvideOrdering(e) &&
						this.canProvideResolvedFields(e)
					);
				}
				canProvideOrdering(e) {
					return this.ordering.length === 0
						? !0
						: e.canProvideOrdering(this.ordering);
				}
				canProvideResolvedFields(e) {
					return this.resolvedFields.size === 0
						? !0
						: e.canProvideResolvedFields(this.resolvedFields);
				}
			}),
			(BT = class e {
				constructor(e) {
					((this.parent = e),
						I(this, `node`),
						I(this, `ordering`),
						I(this, `fields`, []));
				}
				takeNode() {
					let e = this.node;
					return (B(e, `Node is missing`), (this.node = void 0), e);
				}
				setNode(e) {
					(B(!this.node, `Node already set`), (this.node = e));
				}
				setOrdering(e) {
					this.ordering = e;
				}
				push() {
					return new e(this);
				}
				replace() {
					return new e(this.parent);
				}
				addField(e) {
					this.fields.push(e);
				}
				addFieldsFromScope(e) {
					for (let t of e.fields) this.addField(t);
				}
				resolveField(e, t) {
					let n = [];
					for (let r of this.fields)
						r.name === e &&
							((t && r.collectionName !== t) || n.push(r));
					if (n.length === 1) return n[0];
					if (n.length > 1) throw Error(`Ambiguous fields`);
					return this.parent?.resolveField(e, t);
				}
				has(e) {
					return this.fields.includes(e)
						? !0
						: (this.parent?.has(e) ?? !1);
				}
				getRequiredOrdering() {
					return this.ordering ?? new RT();
				}
				getRequiredResolvedFields() {
					let e = new $();
					for (let { field: t } of this.fields)
						t.collection && e.add(t);
					return e;
				}
				getRequiredProps() {
					return new zT(
						this.getRequiredOrdering(),
						this.getRequiredResolvedFields(),
					);
				}
				getNamedFields() {
					let e = {};
					for (let { name: t, field: n } of this.fields) e[t] = n;
					return e;
				}
				getSingleField() {
					B(
						this.fields.length === 1,
						`Scope must contain exactly one field`,
					);
					let e = this.fields[0];
					return (B(e, `Field must exist`), e.field);
				}
			}),
			(VT = class {
				constructor() {
					(I(this, `pointers`, new Map()),
						I(this, `values`, new Map()));
				}
				getKey() {
					let e = [];
					for (let [t, n] of this.pointers) e.push(`${t.id}-${n}`);
					return e.sort().join(`-`);
				}
				addValue(e, t) {
					this.values.set(e, t);
				}
				getValue(e) {
					return this.values.get(e) ?? null;
				}
				mergeValues(e) {
					for (let [t, n] of e.values) this.addValue(t, n);
				}
				addPointer(e, t) {
					this.pointers.set(e, t);
				}
				getPointer(e) {
					return this.pointers.get(e);
				}
				mergePointers(e) {
					for (let [t, n] of e.pointers) this.addPointer(t, n);
				}
				merge(e) {
					(this.mergeValues(e), this.mergePointers(e));
				}
			}),
			(HT = class e {
				constructor(e, t = []) {
					((this.fields = e), (this.tuples = t));
				}
				push(e) {
					this.tuples.push(e);
				}
				filter(t) {
					let n = this.tuples.filter(t);
					return new e(this.fields, n);
				}
				map(t, n) {
					return new e(t, this.tuples.map(n));
				}
				sort(t) {
					let n = Array.from(this.tuples).sort(t);
					return new e(this.fields, n);
				}
				slice(t, n) {
					let r = this.tuples.slice(t, n);
					return new e(this.fields, r);
				}
				union(t) {
					let n = new $();
					for (let e of this.fields) t.fields.has(e) && n.add(e);
					let r = new Set(),
						i = new e(n);
					for (let e of this.tuples) {
						let t = e.getKey();
						(r.add(t), i.push(e));
					}
					for (let e of t.tuples) {
						let t = e.getKey();
						r.has(t) || i.push(e);
					}
					return i;
				}
				intersection(t) {
					let n = new $();
					for (let e of this.fields) t.fields.has(e) && n.add(e);
					let r = new Set(),
						i = new e(n);
					for (let e of this.tuples) {
						let t = e.getKey();
						r.add(t);
					}
					for (let e of t.tuples) {
						let t = e.getKey();
						r.has(t) && i.push(e);
					}
					return i;
				}
			}),
			(UT = class {
				constructor(e, t) {
					((this.input = e), (this.field = t));
				}
				getHash() {
					return W(`ProjectionField`, this.input, this.field.id);
				}
			}),
			(WT = class e extends kT {
				constructor(e, t, n) {
					let r = e.isSynchronous;
					for (let e of t) r &&= e.input.isSynchronous;
					(super(r),
						(this.input = e),
						(this.projections = t),
						(this.passthrough = n),
						I(this, `inputGroup`),
						(this.inputGroup = e.getGroup()));
				}
				getHash() {
					return W(
						`RelationalProject`,
						this.inputGroup.id,
						...this.projections,
						this.passthrough,
					);
				}
				getOutputFields() {
					let e = new $();
					e.merge(this.passthrough);
					for (let t of this.projections) e.add(t.field);
					return e;
				}
				canProvideOrdering(e) {
					let t = new $();
					for (let e of this.projections) t.add(e.field);
					for (let { field: n } of e.fields) if (t.has(n)) return !1;
					return !0;
				}
				canProvideResolvedFields() {
					return !0;
				}
				getInputRequiredProps(e) {
					let t = new $(e.resolvedFields);
					for (let e of this.projections)
						(t.merge(e.input.referencedFields), t.delete(e.field));
					return new zT(e.ordering, t);
				}
				optimize(e, t) {
					let n = this.getInputRequiredProps(t),
						r = e.optimizeGroup(this.inputGroup, n),
						i = new Q(0);
					for (let t of this.projections) {
						let n = t.input.optimize(e);
						i = Q.max(i, n);
					}
					return new Q(0).add(Q.max(r, i));
				}
				getOptimized(t) {
					let n = this.getInputRequiredProps(t);
					return new e(
						this.inputGroup.getOptimized(n),
						this.projections.map(
							(e) => new UT(e.input.getOptimized(), e.field),
						),
						this.passthrough,
					);
				}
				*evaluate(e) {
					let t = this.getOutputFields(),
						n = yield* this.input.evaluate(e),
						r = yield* $d(
							n.tuples.map((t) =>
								$d(
									this.projections.map((n) =>
										Qd({
											field: n.field,
											value: n.input.evaluate(e, t),
										}),
									),
								),
							),
						);
					return n.map(t, (e, t) => {
						let n = new VT();
						n.mergePointers(e);
						for (let t of this.passthrough) {
							let r = e.getValue(t);
							n.addValue(t, r);
						}
						let i = r[t];
						B(i, `Projections must exist`);
						for (let { field: e, value: t } of i) n.addValue(e, t);
						return n;
					});
				}
			}),
			(GT = { type: 0 }),
			(KT = class extends OT {
				constructor(e, t, n) {
					(super(n),
						(this.referencedFields = e),
						(this.referencedOuterFields = t),
						(this.isSynchronous = n));
				}
				evaluateSync() {
					return Yd(this.evaluate(void 0, void 0));
				}
				evaluateAsync() {
					return Xd(this.evaluate(void 0, void 0));
				}
			}),
			(qT = { type: 0 }),
			(JT = class {
				constructor(e, t) {
					((this.when = e), (this.then = t));
				}
				getHash() {
					return W(`CaseCondition`, this.when, this.then);
				}
			}),
			(YT = class e extends KT {
				constructor(e, t, n) {
					let r = new $(),
						i = new $(),
						a = !0;
					e &&
						(r.merge(e.referencedFields),
						i.merge(e.referencedOuterFields),
						(a &&= e.isSynchronous));
					for (let { when: e, then: n } of t)
						(r.merge(e.referencedFields),
							i.merge(e.referencedOuterFields),
							(a &&= e.isSynchronous),
							r.merge(n.referencedFields),
							i.merge(n.referencedOuterFields),
							(a &&= n.isSynchronous));
					(n &&
						(r.merge(n.referencedFields),
						i.merge(n.referencedOuterFields),
						(a &&= n.isSynchronous)),
						super(r, i, a),
						(this.input = e),
						(this.conditions = t),
						(this.otherwise = n),
						I(this, `definition`, {
							type: `unknown`,
							isNullable: !0,
						}));
				}
				getHash() {
					return W(
						`ScalarCase`,
						this.input,
						...this.conditions,
						this.otherwise,
					);
				}
				optimize(e) {
					this.input?.optimize(e);
					for (let t of this.conditions)
						(t.when.optimize(e), t.then.optimize(e));
					return (this.otherwise?.optimize(e), new Q(0));
				}
				getOptimized() {
					let t = this.input?.getOptimized(),
						n = this.conditions.map(
							(e) =>
								new JT(
									e.when.getOptimized(),
									e.then.getOptimized(),
								),
						),
						r = this.otherwise?.getOptimized();
					return new e(t, n, r);
				}
				*evaluate(e, t) {
					let {
						input: n,
						conditions: r,
						otherwise: i,
					} = yield* Qd({
						input: this.input?.evaluate(e, t) ?? null,
						conditions: $d(
							this.conditions.map((n) =>
								Qd({
									when: n.when.evaluate(e, t),
									then: n.then.evaluate(e, t),
								}),
							),
						),
						otherwise: this.otherwise?.evaluate(e, t) ?? null,
					});
					if (this.input) {
						for (let { when: e, then: t } of r)
							if (vT.equal(n, e, qT)) return t;
					} else
						for (let { when: e, then: t } of r) if (ff(e)) return t;
					return i;
				}
			}),
			(XT = class {
				constructor(e, t, n) {
					((this.normalizer = e),
						(this.query = t),
						(this.locale = n),
						I(this, `collectionId`, 0),
						I(this, `indexId`, 0),
						I(this, `fieldId`, 0),
						I(this, `subqueries`, []));
				}
				build() {
					let e = new BT();
					return this.buildQuery(e, this.query);
				}
				buildQuery(e, t) {
					let n = { type: `Select`, ...t };
					return this.buildSelect(e, n);
				}
				buildSelect(e, t) {
					let n = this.buildFrom(e, t.from),
						r = n.getRequiredOrdering();
					if (t.where) {
						let e = n.takeNode(),
							r = this.buildExpression(n, t.where),
							i = this.normalizer.newRelationalFilter(e, r);
						n.setNode(i);
					}
					let i = [],
						a = new $(),
						o;
					if (t.orderBy) {
						o = new RT();
						for (let e of t.orderBy)
							if (e.type === `Identifier`) {
								let t = n.resolveField(e.name, e.collection);
								if (tt(t)) continue;
								a.add(t.field);
								let r = new LT(t.field, e.direction);
								o.push(r);
							} else {
								let t = this.buildExpression(n, e),
									r = new IT(
										tp(this.fieldId++),
										void 0,
										t.definition,
										void 0,
									),
									a = new UT(t, r);
								i.push(a);
								let s = new LT(r, e.direction);
								o.push(s);
							}
						o.merge(r);
					} else o = r;
					let s = this.buildSelectList(n, t.select, a, i);
					if ((s.setOrdering(o), t.offset)) {
						let n = s.takeNode(),
							r = this.buildExpression(e, t.offset),
							i = this.normalizer.newRelationalOffset(n, r, o);
						s.setNode(i);
					}
					if (t.limit) {
						let n = s.takeNode(),
							r = this.buildExpression(e, t.limit),
							i = this.normalizer.newRelationalLimit(n, r, o);
						s.setNode(i);
					}
					return s;
				}
				buildSelectList(e, t, n, r) {
					let i = e.push(),
						a = new $(n),
						o = [...r];
					for (let n of t)
						if (n.type === `Identifier`) {
							let t = e.resolveField(n.name, n.collection);
							if (tt(t)) continue;
							(a.add(t.field),
								i.addField({ ...t, name: n.alias ?? t.name }));
						} else {
							let t = this.buildExpression(e, n);
							B(n.alias, `Subqueries should have an alias`);
							let r = tp(this.fieldId++),
								a = n.alias,
								s = new IT(r, a, t.definition, void 0),
								c = new UT(t, s);
							(o.push(c), i.addField({ field: s, name: a }));
						}
					let s = e.takeNode(),
						c = this.normalizer.newRelationalProject(s, o, a);
					return (i.setNode(c), i);
				}
				buildFrom(e, t) {
					switch (t.type) {
						case `Collection`:
							return this.buildCollection(e, t);
						case `LeftJoin`:
							return this.buildJoin(e, t);
						default:
							V(t, `Unsupported from type`);
					}
				}
				buildCollection(e, t) {
					let n = e.push(),
						r = Hf(t.data, this.locale),
						i = t.alias,
						a = new NT($f(this.collectionId++), i, r);
					for (let [e, t] of Object.entries(r.schema)) {
						let r = new IT(tp(this.fieldId++), e, t, a);
						(n.addField({ field: r, name: e, collectionName: i }),
							a.fields.add(r));
					}
					{
						let e = new IT(
							tp(this.fieldId++),
							jT,
							{ type: `number`, isNullable: !1 },
							a,
						);
						n.addField({ field: e, name: jT, collectionName: i });
						let t = new RT(),
							r = new LT(e);
						(t.push(r), n.setOrdering(t));
					}
					for (let e of r.indexes) {
						let t = [];
						for (let r of e.fields) {
							let e = this.buildExpression(n, r);
							t.push(e);
						}
						let r;
						e.where && (r = this.buildExpression(n, e.where));
						let i = new RT(),
							o = new PT(ep(this.indexId++), e, a, t, r, i);
						a.indexes.add(o);
					}
					let o = this.normalizer.newRelationalScan(a);
					return (n.setNode(o), n);
				}
				buildJoin(e, t) {
					let n = this.buildFrom(e, t.left),
						r = this.buildFrom(e, t.right),
						i = new RT(),
						a = n.getRequiredOrdering();
					i.merge(a);
					let o = r.getRequiredOrdering();
					i.merge(o);
					let s = e.push();
					(s.addFieldsFromScope(n),
						s.addFieldsFromScope(r),
						s.setOrdering(i));
					let c = this.buildExpression(s, t.constraint),
						l = n.takeNode(),
						u = r.takeNode(),
						d;
					switch (t.type) {
						case `LeftJoin`:
							d = this.normalizer.newRelationalLeftJoin(l, u, c);
							break;
						default:
							V(t.type, `Unsupported join type`);
					}
					return (s.setNode(d), s);
				}
				buildExpression(e, t) {
					switch (t.type) {
						case `Identifier`:
							return this.buildIdentifier(e, t);
						case `LiteralValue`:
							return this.buildLiteralValue(t);
						case `FunctionCall`:
							return this.buildFunctionCall(e, t);
						case `Case`:
							return this.buildCase(e, t);
						case `UnaryOperation`:
							return this.buildUnaryOperation(e, t);
						case `BinaryOperation`:
							return this.buildBinaryOperation(e, t);
						case `TypeCast`:
							return this.buildTypeCast(e, t);
						case `Select`:
							throw Error(
								`Subqueries are only supported inside subquery function calls`,
							);
						default:
							V(t, `Unsupported expression`);
					}
				}
				buildIdentifier(e, t) {
					let n = e.resolveField(t.name, t.collection);
					if (n) {
						let e = !1;
						for (let t of this.subqueries)
							e
								? t.referencedOuterFields.add(n.field)
								: ((e = t.inScope.has(n)),
									e && t.referencedFields.add(n.field));
						return this.normalizer.newScalarVariable(n.field, e);
					}
					return this.normalizer.newScalarConstant(yT, null);
				}
				buildLiteralValue(e) {
					let t = vT.parse(e.value);
					return this.normalizer.newScalarConstant(yT, t);
				}
				buildFunctionCall(e, t) {
					let n = (n) => {
							let r = t.arguments[n];
							return (
								B(r, `Missing argument`),
								this.buildExpression(e, r)
							);
						},
						r = t.functionName;
					switch (r) {
						case `CONTAINS`: {
							let e = n(0),
								t = n(1);
							return this.normalizer.newScalarContains(e, t);
						}
						case `STARTS_WITH`: {
							let e = n(0),
								t = n(1);
							return this.normalizer.newScalarStartsWith(e, t);
						}
						case `ENDS_WITH`: {
							let e = n(0),
								t = n(1);
							return this.normalizer.newScalarEndsWith(e, t);
						}
						case `LENGTH`: {
							let e = n(0);
							return this.normalizer.newScalarLength(e);
						}
						case `INDEX_OF`: {
							let e = n(0),
								t = n(1);
							return this.normalizer.newScalarIndexOf(e, t);
						}
						case `ARRAY`: {
							let n = t.arguments[0];
							return (
								B(n, `Missing argument`),
								B(
									n.type === `Select`,
									`Subqueries require a select expression`,
								),
								this.buildSubqueryArray(e, n)
							);
						}
						case `FLAT_ARRAY`: {
							let n = t.arguments[0];
							return (
								B(n, `Missing argument`),
								B(
									n.type === `Select`,
									`Subqueries require a select expression`,
								),
								this.buildSubqueryFlatArray(e, n)
							);
						}
						case `INTERSECT`: {
							let e = n(0),
								t = n(1);
							return this.normalizer.newScalarIntersection(e, t);
						}
						default:
							V(r, `Unsupported function name`);
					}
				}
				buildSubqueryArray(e, t) {
					try {
						let n = new ZT(e);
						this.subqueries.push(n);
						let r = this.buildSelect(e, t),
							i = r.takeNode(),
							a = r.getNamedFields(),
							o = r.getRequiredOrdering(),
							s = n.referencedFields,
							c = n.referencedOuterFields;
						return this.normalizer.newScalarArray(i, a, o, s, c);
					} finally {
						this.subqueries.pop();
					}
				}
				buildSubqueryFlatArray(e, t) {
					try {
						let n = new ZT(e);
						this.subqueries.push(n);
						let r = this.buildSelect(e, t),
							i = r.takeNode(),
							a = r.getSingleField(),
							o = r.getRequiredOrdering(),
							s = n.referencedFields,
							c = n.referencedOuterFields;
						return this.normalizer.newScalarFlatArray(
							i,
							a,
							o,
							s,
							c,
						);
					} finally {
						this.subqueries.pop();
					}
				}
				buildCase(e, t) {
					let n;
					t.value && (n = this.buildExpression(e, t.value));
					let r = t.conditions.map(
							(t) =>
								new JT(
									this.buildExpression(e, t.when),
									this.buildExpression(e, t.then),
								),
						),
						i;
					return (
						t.else && (i = this.buildExpression(e, t.else)),
						this.normalizer.newScalarCase(n, r, i)
					);
				}
				buildUnaryOperation(e, t) {
					let n = this.buildExpression(e, t.value);
					switch (t.operator) {
						case `not`:
							return this.normalizer.newScalarNot(n);
						default:
							V(t.operator, `Unsupported unary operator`);
					}
				}
				buildBinaryOperation(e, t) {
					let n = this.buildExpression(e, t.left),
						r = this.buildExpression(e, t.right);
					switch (t.operator) {
						case `and`:
							return this.normalizer.newScalarAnd(n, r);
						case `or`:
							return this.normalizer.newScalarOr(n, r);
						case `==`:
							return this.normalizer.newScalarEquals(n, r);
						case `!=`:
							return this.normalizer.newScalarNotEquals(n, r);
						case `<`:
							return this.normalizer.newScalarLessThan(n, r);
						case `<=`:
							return this.normalizer.newScalarLessThanOrEqual(
								n,
								r,
							);
						case `>`:
							return this.normalizer.newScalarGreaterThan(n, r);
						case `>=`:
							return this.normalizer.newScalarGreaterThanOrEqual(
								n,
								r,
							);
						case `in`:
							return this.normalizer.newScalarIn(n, r);
						default:
							V(t.operator, `Unsupported binary operator`);
					}
				}
				buildTypeCast(e, t) {
					let n = this.buildExpression(e, t.value);
					switch (t.dataType) {
						case `BOOLEAN`:
							return this.normalizer.newScalarCast(n, {
								type: `boolean`,
								isNullable: !0,
							});
						case `DATE`:
							return this.normalizer.newScalarCast(n, {
								type: `date`,
								isNullable: !0,
							});
						case `NUMBER`:
							return this.normalizer.newScalarCast(n, {
								type: `number`,
								isNullable: !0,
							});
						case `STRING`:
							return this.normalizer.newScalarCast(n, {
								type: `string`,
								isNullable: !0,
							});
						default:
							throw Error(`Unsupported data type`);
					}
				}
			}),
			(ZT = class {
				constructor(e) {
					((this.inScope = e),
						I(this, `referencedFields`, new $()),
						I(this, `referencedOuterFields`, new $()));
				}
			}),
			(QT = class e extends kT {
				constructor(e, t) {
					(super(e.isSynchronous && t.isSynchronous),
						(this.input = e),
						(this.predicate = t),
						I(this, `inputGroup`),
						(this.inputGroup = e.getGroup()));
				}
				getHash() {
					return W(
						`RelationalFilter`,
						this.inputGroup.id,
						this.predicate,
					);
				}
				getOutputFields() {
					return this.inputGroup.relational.outputFields;
				}
				canProvideOrdering() {
					return !0;
				}
				canProvideResolvedFields() {
					return !0;
				}
				getInputRequiredProps(e) {
					let t = new $(e.resolvedFields);
					return (
						t.merge(this.predicate.referencedFields),
						new zT(e.ordering, t)
					);
				}
				optimize(e, t) {
					let n = this.getInputRequiredProps(t),
						r = e.optimizeGroup(this.inputGroup, n),
						i = this.predicate.optimize(e);
					return new Q(0).add(Q.max(r, i));
				}
				getOptimized(t) {
					let n = this.getInputRequiredProps(t);
					return new e(
						this.inputGroup.getOptimized(n),
						this.predicate.getOptimized(),
					);
				}
				*evaluate(e) {
					let t = yield* this.input.evaluate(e),
						n = yield* $d(
							t.tuples.map((t) => this.predicate.evaluate(e, t)),
						);
					return t.filter((e, t) => ff(n[t] ?? null));
				}
			}),
			($T = class e extends kT {
				constructor(e, t) {
					(super(!1), (this.index = e), (this.query = t));
				}
				getHash() {
					return W(
						`RelationalIndexLookup`,
						this.index.id,
						...this.query,
					);
				}
				getOutputFields() {
					return this.index.collection.fields;
				}
				canProvideOrdering(e) {
					return e.equals(this.index.ordering);
				}
				canProvideResolvedFields(e) {
					return e.subsetOf(this.index.resolvedFields);
				}
				optimize() {
					let e = this.query.every((e) => e.type === `All`);
					return Q.estimate(1, e ? 100 * TT : 50 * TT);
				}
				getOptimized() {
					return new e(this.index, this.query);
				}
				*evaluate() {
					let e = this.index,
						t = e.collection;
					return new HT(
						this.getOutputFields(),
						(yield e.data.lookupItems(this.query)).map((n) => {
							let r = new VT();
							for (let i of e.resolvedFields) {
								let e = i.getValue(n);
								(r.addPointer(t, n.pointer), r.addValue(i, e));
							}
							return r;
						}),
					);
				}
			}),
			(eE = class e extends kT {
				constructor(e, t) {
					(super(e.isSynchronous && t.isSynchronous),
						(this.left = e),
						(this.right = t),
						I(this, `leftGroup`),
						I(this, `rightGroup`),
						(this.leftGroup = e.getGroup()),
						(this.rightGroup = t.getGroup()));
				}
				getHash() {
					return W(
						`RelationalIntersection`,
						this.leftGroup.id,
						this.rightGroup.id,
					);
				}
				getOutputFields() {
					let e = new $(),
						t = this.leftGroup.relational.outputFields,
						n = this.rightGroup.relational.outputFields;
					for (let r of t) n.has(r) && e.add(r);
					return e;
				}
				canProvideOrdering() {
					return !1;
				}
				canProvideResolvedFields() {
					return !0;
				}
				getChildRequiredProps(e) {
					return new zT(new RT(), e.resolvedFields);
				}
				optimize(e, t) {
					let n = this.getChildRequiredProps(t),
						r = e.optimizeGroup(this.leftGroup, n),
						i = this.getChildRequiredProps(t),
						a = e.optimizeGroup(this.rightGroup, i);
					return Q.max(r, a);
				}
				getOptimized(t) {
					let n = this.getChildRequiredProps(t),
						r = this.leftGroup.getOptimized(n),
						i = this.getChildRequiredProps(t);
					return new e(r, this.rightGroup.getOptimized(i));
				}
				*evaluate(e) {
					let { left: t, right: n } = yield* Qd({
						left: this.left.evaluate(e),
						right: this.right.evaluate(e),
					});
					return t.intersection(n);
				}
			}),
			(tE = class e extends kT {
				constructor(e) {
					(super(!1), (this.collection = e));
				}
				getHash() {
					return W(`RelationalScan`, this.collection.id);
				}
				getOutputFields() {
					return this.collection.fields;
				}
				canProvideOrdering() {
					return !1;
				}
				canProvideResolvedFields(e) {
					return e.subsetOf(this.collection.fields);
				}
				optimize() {
					return Q.estimate(1, 200 * TT);
				}
				getOptimized() {
					return new e(this.collection);
				}
				*evaluate() {
					let e = this.collection,
						t = this.getOutputFields();
					return new HT(
						t,
						(yield e.data.scanItems()).map((n) => {
							let r = new VT();
							for (let i of t) {
								let t = i.getValue(n);
								(r.addPointer(e, n.pointer), r.addValue(i, t));
							}
							return r;
						}),
					);
				}
			}),
			(nE = class e extends kT {
				constructor(e, t) {
					(super(e.isSynchronous && t.isSynchronous),
						(this.left = e),
						(this.right = t),
						I(this, `leftGroup`),
						I(this, `rightGroup`),
						(this.leftGroup = e.getGroup()),
						(this.rightGroup = t.getGroup()));
				}
				getHash() {
					return W(
						`RelationalUnion`,
						this.leftGroup.id,
						this.rightGroup.id,
					);
				}
				getOutputFields() {
					let e = new $(),
						t = this.leftGroup.relational.outputFields,
						n = this.rightGroup.relational.outputFields;
					for (let r of t) n.has(r) && e.add(r);
					return e;
				}
				canProvideOrdering() {
					return !1;
				}
				canProvideResolvedFields() {
					return !0;
				}
				getChildRequiredProps(e) {
					return new zT(new RT(), e.resolvedFields);
				}
				optimize(e, t) {
					let n = this.getChildRequiredProps(t),
						r = e.optimizeGroup(this.leftGroup, n),
						i = this.getChildRequiredProps(t),
						a = e.optimizeGroup(this.rightGroup, i);
					return Q.max(r, a);
				}
				getOptimized(t) {
					let n = this.getChildRequiredProps(t),
						r = this.leftGroup.getOptimized(n),
						i = this.getChildRequiredProps(t);
					return new e(r, this.rightGroup.getOptimized(i));
				}
				*evaluate(e) {
					let { left: t, right: n } = yield* Qd({
						left: this.left.evaluate(e),
						right: this.right.evaluate(e),
					});
					return t.union(n);
				}
			}),
			(rE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.left = e),
						(this.right = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarAnd`, this.left, this.right);
				}
				optimize(e) {
					let t = this.left.optimize(e),
						n = this.right.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.left.getOptimized(),
						this.right.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { left: n, right: r } = yield* Qd({
						left: this.left.evaluate(e, t),
						right: this.right.evaluate(e, t),
					});
					return { type: `boolean`, value: ff(n) && ff(r) };
				}
			}),
			(iE = class extends KT {
				constructor(e, t) {
					let n = new $(),
						r = new $();
					(super(n, r, !0), (this.definition = e), (this.value = t));
				}
				getHash() {
					return W(`ScalarConstant`, this.definition, this.value);
				}
				optimize() {
					return new Q(0);
				}
				getOptimized() {
					return this;
				}
				*evaluate() {
					return this.value;
				}
			}),
			(aE = { type: 0 }),
			(oE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.source = e),
						(this.target = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarContains`, this.source, this.target);
				}
				optimize(e) {
					let t = this.source.optimize(e),
						n = this.target.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.source.getOptimized(),
						this.target.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { source: n, target: r } = yield* Qd({
						source: this.source.evaluate(e, t),
						target: this.target.evaluate(e, t),
					});
					return { type: `boolean`, value: vT.contains(n, r, aE) };
				}
			}),
			(sE = { type: 0 }),
			(cE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.source = e),
						(this.target = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarEndsWith`, this.source, this.target);
				}
				optimize(e) {
					let t = this.source.optimize(e),
						n = this.target.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.source.getOptimized(),
						this.target.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { source: n, target: r } = yield* Qd({
						source: this.source.evaluate(e, t),
						target: this.target.evaluate(e, t),
					});
					return { type: `boolean`, value: vT.endsWith(n, r, sE) };
				}
			}),
			(lE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.left = e),
						(this.right = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarEquals`, this.left, this.right);
				}
				optimize(e) {
					let t = this.left.optimize(e),
						n = this.right.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.left.getOptimized(),
						this.right.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { left: n, right: r } = yield* Qd({
						left: this.left.evaluate(e, t),
						right: this.right.evaluate(e, t),
					});
					return { type: `boolean`, value: vT.equal(n, r, GT) };
				}
			}),
			(uE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.left = e),
						(this.right = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarGreaterThan`, this.left, this.right);
				}
				optimize(e) {
					let t = this.left.optimize(e),
						n = this.right.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.left.getOptimized(),
						this.right.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { left: n, right: r } = yield* Qd({
						left: this.left.evaluate(e, t),
						right: this.right.evaluate(e, t),
					});
					return { type: `boolean`, value: vT.greaterThan(n, r, GT) };
				}
			}),
			(dE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.left = e),
						(this.right = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarGreaterThanOrEqual`, this.left, this.right);
				}
				optimize(e) {
					let t = this.left.optimize(e),
						n = this.right.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.left.getOptimized(),
						this.right.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { left: n, right: r } = yield* Qd({
						left: this.left.evaluate(e, t),
						right: this.right.evaluate(e, t),
					});
					return {
						type: `boolean`,
						value: vT.greaterThanOrEqual(n, r, GT),
					};
				}
			}),
			(fE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.left = e),
						(this.right = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarLessThan`, this.left, this.right);
				}
				optimize(e) {
					let t = this.left.optimize(e),
						n = this.right.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.left.getOptimized(),
						this.right.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { left: n, right: r } = yield* Qd({
						left: this.left.evaluate(e, t),
						right: this.right.evaluate(e, t),
					});
					return { type: `boolean`, value: vT.lessThan(n, r, GT) };
				}
			}),
			(pE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.left = e),
						(this.right = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarLessThanOrEqual`, this.left, this.right);
				}
				optimize(e) {
					let t = this.left.optimize(e),
						n = this.right.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.left.getOptimized(),
						this.right.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { left: n, right: r } = yield* Qd({
						left: this.left.evaluate(e, t),
						right: this.right.evaluate(e, t),
					});
					return {
						type: `boolean`,
						value: vT.lessThanOrEqual(n, r, GT),
					};
				}
			}),
			(mE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.left = e),
						(this.right = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarNotEquals`, this.left, this.right);
				}
				optimize(e) {
					let t = this.left.optimize(e),
						n = this.right.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.left.getOptimized(),
						this.right.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { left: n, right: r } = yield* Qd({
						left: this.left.evaluate(e, t),
						right: this.right.evaluate(e, t),
					});
					return { type: `boolean`, value: !vT.equal(n, r, GT) };
				}
			}),
			(hE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.left = e),
						(this.right = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarOr`, this.left, this.right);
				}
				optimize(e) {
					let t = this.left.optimize(e),
						n = this.right.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.left.getOptimized(),
						this.right.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { left: n, right: r } = yield* Qd({
						left: this.left.evaluate(e, t),
						right: this.right.evaluate(e, t),
					});
					return { type: `boolean`, value: ff(n) || ff(r) };
				}
			}),
			(gE = { type: 0 }),
			(_E = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.source = e),
						(this.target = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarStartsWith`, this.source, this.target);
				}
				optimize(e) {
					let t = this.source.optimize(e),
						n = this.target.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.source.getOptimized(),
						this.target.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { source: n, target: r } = yield* Qd({
						source: this.source.evaluate(e, t),
						target: this.target.evaluate(e, t),
					});
					return { type: `boolean`, value: vT.startsWith(n, r, gE) };
				}
			}),
			(vE = class {
				constructor(e) {
					((this.normalizer = e),
						I(this, `memo`),
						(this.memo = e.memo));
				}
				explore(e) {
					let t = e.getGroup();
					if (e instanceof QT) {
						if (e.predicate instanceof rE) {
							let n = new eE(
								this.normalizer.newRelationalFilter(
									e.input,
									e.predicate.left,
								),
								this.normalizer.newRelationalFilter(
									e.input,
									e.predicate.right,
								),
							);
							this.memo.addRelational(n, t);
						}
						if (e.predicate instanceof hE) {
							let n = new nE(
								this.normalizer.newRelationalFilter(
									e.input,
									e.predicate.left,
								),
								this.normalizer.newRelationalFilter(
									e.input,
									e.predicate.right,
								),
							);
							this.memo.addRelational(n, t);
						}
					}
					if (e instanceof tE)
						for (let n of e.collection.indexes) {
							if (n.constraint) continue;
							let e = new $T(n, np(n.lookupNodes.length));
							this.memo.addRelational(e, t);
						}
					if (e instanceof QT) {
						for (let n of e.inputGroup.nodes)
							if (n instanceof tE)
								for (let r of n.collection.indexes) {
									if (
										e.predicate instanceof lE &&
										e.predicate.left === r.lookupNodes[0] &&
										e.predicate.right instanceof iE &&
										r.data.supportedLookupTypes.includes(
											`Equals`,
										)
									) {
										let n = np(r.lookupNodes.length);
										n[0] = {
											type: `Equals`,
											value: e.predicate.right.value,
										};
										let i = new $T(r, n);
										this.memo.addRelational(i, t);
									}
									if (
										e.predicate instanceof mE &&
										e.predicate.left === r.lookupNodes[0] &&
										e.predicate.right instanceof iE &&
										r.data.supportedLookupTypes.includes(
											`NotEquals`,
										)
									) {
										let n = np(r.lookupNodes.length);
										n[0] = {
											type: `NotEquals`,
											value: e.predicate.right.value,
										};
										let i = new $T(r, n);
										this.memo.addRelational(i, t);
									}
									if (
										e.predicate instanceof fE &&
										e.predicate.left === r.lookupNodes[0] &&
										e.predicate.right instanceof iE &&
										r.data.supportedLookupTypes.includes(
											`LessThan`,
										)
									) {
										let n = np(r.lookupNodes.length);
										n[0] = {
											type: `LessThan`,
											value: e.predicate.right.value,
											inclusive: !1,
										};
										let i = new $T(r, n);
										this.memo.addRelational(i, t);
									}
									if (
										e.predicate instanceof pE &&
										e.predicate.left === r.lookupNodes[0] &&
										e.predicate.right instanceof iE &&
										r.data.supportedLookupTypes.includes(
											`LessThan`,
										)
									) {
										let n = np(r.lookupNodes.length);
										n[0] = {
											type: `LessThan`,
											value: e.predicate.right.value,
											inclusive: !0,
										};
										let i = new $T(r, n);
										this.memo.addRelational(i, t);
									}
									if (
										e.predicate instanceof uE &&
										e.predicate.left === r.lookupNodes[0] &&
										e.predicate.right instanceof iE &&
										r.data.supportedLookupTypes.includes(
											`GreaterThan`,
										)
									) {
										let n = np(r.lookupNodes.length);
										n[0] = {
											type: `GreaterThan`,
											value: e.predicate.right.value,
											inclusive: !1,
										};
										let i = new $T(r, n);
										this.memo.addRelational(i, t);
									}
									if (
										e.predicate instanceof dE &&
										e.predicate.left === r.lookupNodes[0] &&
										e.predicate.right instanceof iE &&
										r.data.supportedLookupTypes.includes(
											`GreaterThan`,
										)
									) {
										let n = np(r.lookupNodes.length);
										n[0] = {
											type: `GreaterThan`,
											value: e.predicate.right.value,
											inclusive: !0,
										};
										let i = new $T(r, n);
										this.memo.addRelational(i, t);
									}
									if (
										e.predicate instanceof oE &&
										e.predicate.source ===
											r.lookupNodes[0] &&
										e.predicate.target instanceof iE &&
										r.data.supportedLookupTypes.includes(
											`Contains`,
										)
									) {
										let n = np(r.lookupNodes.length);
										n[0] = {
											type: `Contains`,
											value: e.predicate.target.value,
										};
										let i = new $T(r, n);
										this.memo.addRelational(i, t);
									}
									if (
										e.predicate instanceof _E &&
										e.predicate.source ===
											r.lookupNodes[0] &&
										e.predicate.target instanceof iE &&
										r.data.supportedLookupTypes.includes(
											`StartsWith`,
										)
									) {
										let n = np(r.lookupNodes.length);
										n[0] = {
											type: `StartsWith`,
											value: e.predicate.target.value,
										};
										let i = new $T(r, n);
										this.memo.addRelational(i, t);
									}
									if (
										e.predicate instanceof cE &&
										e.predicate.source ===
											r.lookupNodes[0] &&
										e.predicate.target instanceof iE &&
										r.data.supportedLookupTypes.includes(
											`EndsWith`,
										)
									) {
										let n = np(r.lookupNodes.length);
										n[0] = {
											type: `EndsWith`,
											value: e.predicate.target.value,
										};
										let i = new $T(r, n);
										this.memo.addRelational(i, t);
									}
								}
					}
				}
			}),
			(yE = class {
				constructor(e) {
					this.outputFields = e;
				}
				isCompatible(e) {
					return this.outputFields.equals(e.outputFields);
				}
			}),
			(bE = class {
				constructor() {
					(I(this, `nodes`, new Map()), I(this, `groups`, []));
				}
				addGroup(e) {
					let t = new ET(Gf(this.groups.length), e);
					return (this.groups.push(t), t);
				}
				addRelational(e, t) {
					let n = e.getHash(),
						r = this.nodes.get(n);
					if (r) return r;
					this.nodes.set(n, e);
					let i = new yE(e.getOutputFields());
					return (
						(t ??= this.addGroup(i)),
						t.addNode(e),
						B(
							i.isCompatible(t.relational),
							`Group has inconsistent relational props`,
						),
						e
					);
				}
				addScalar(e) {
					let t = e.getHash();
					return this.nodes.get(t) || (this.nodes.set(t, e), e);
				}
			}),
			(xE = class e extends kT {
				constructor(e, t, n) {
					(super(
						e.isSynchronous && t.isSynchronous && n.isSynchronous,
					),
						(this.left = e),
						(this.right = t),
						(this.constraint = n),
						I(this, `leftGroup`),
						I(this, `rightGroup`),
						(this.leftGroup = e.getGroup()),
						(this.rightGroup = t.getGroup()));
				}
				getHash() {
					return W(
						`RelationalLeftJoin`,
						this.leftGroup.id,
						this.rightGroup.id,
						this.constraint,
					);
				}
				getOutputFields() {
					let e = new $();
					return (
						e.merge(this.leftGroup.relational.outputFields),
						e.merge(this.rightGroup.relational.outputFields),
						e
					);
				}
				canProvideOrdering() {
					return !1;
				}
				canProvideResolvedFields() {
					return !0;
				}
				getChildRequiredProps(e, t) {
					let n = new $(),
						r = e.relational.outputFields;
					for (let e of t.resolvedFields) r.has(e) && n.add(e);
					for (let e of this.constraint.referencedFields)
						r.has(e) && n.add(e);
					return new zT(new RT(), n);
				}
				optimize(e, t) {
					let n = this.getChildRequiredProps(this.leftGroup, t),
						r = e.optimizeGroup(this.leftGroup, n),
						i = this.getChildRequiredProps(this.rightGroup, t),
						a = e.optimizeGroup(this.rightGroup, i),
						o = this.constraint.optimize(e);
					return Q.max(Q.max(r, a), o);
				}
				getOptimized(t) {
					let n = this.getChildRequiredProps(this.leftGroup, t),
						r = this.leftGroup.getOptimized(n),
						i = this.getChildRequiredProps(this.rightGroup, t);
					return new e(
						r,
						this.rightGroup.getOptimized(i),
						this.constraint.getOptimized(),
					);
				}
				*evaluateScalarEquals(e, t, n, r, i) {
					let a = new Map();
					for (let e of t.tuples) {
						let t = yield* r.evaluate(i, e),
							n = JSON.stringify(t?.value ?? null),
							o = a.get(n) ?? [];
						(o.push(e), a.set(n, o));
					}
					let o = new HT(this.getOutputFields());
					for (let t of e.tuples) {
						let e = yield* n.evaluate(i, t),
							r = JSON.stringify(e?.value ?? null),
							s = a.get(r) ?? [];
						if (s.length === 0) o.push(t);
						else
							for (let e of s) {
								let n = new VT();
								(n.merge(t), n.merge(e), o.push(n));
							}
					}
					return o;
				}
				*evaluate(e) {
					let { left: t, right: n } = yield* Qd({
						left: this.left.evaluate(e),
						right: this.right.evaluate(e),
					});
					if (this.constraint instanceof lE) {
						if (
							this.constraint.left.referencedFields.subsetOf(
								this.leftGroup.relational.outputFields,
							) &&
							this.constraint.right.referencedFields.subsetOf(
								this.rightGroup.relational.outputFields,
							)
						)
							return yield* this.evaluateScalarEquals(
								t,
								n,
								this.constraint.left,
								this.constraint.right,
								e,
							);
						if (
							this.constraint.right.referencedFields.subsetOf(
								this.leftGroup.relational.outputFields,
							) &&
							this.constraint.left.referencedFields.subsetOf(
								this.rightGroup.relational.outputFields,
							)
						)
							return yield* this.evaluateScalarEquals(
								t,
								n,
								this.constraint.right,
								this.constraint.left,
								e,
							);
					}
					let r = new HT(this.getOutputFields());
					for (let i of t.tuples) {
						let t = !1;
						for (let a of n.tuples) {
							let n = new VT();
							(n.merge(i),
								n.merge(a),
								ff(yield* this.constraint.evaluate(e, n)) &&
									(r.push(n), (t = !0)));
						}
						t || r.push(i);
					}
					return r;
				}
			}),
			(SE = class e extends kT {
				constructor(e, t, n) {
					(super(e.isSynchronous && t.isSynchronous),
						(this.input = e),
						(this.limit = t),
						(this.ordering = n),
						I(this, `inputGroup`),
						(this.inputGroup = e.getGroup()));
				}
				getHash() {
					return W(`RelationalLimit`, this.inputGroup.id, this.limit);
				}
				getOutputFields() {
					return this.inputGroup.relational.outputFields;
				}
				canProvideOrdering(e) {
					return e.equals(this.ordering);
				}
				canProvideResolvedFields() {
					return !0;
				}
				getInputRequiredProps(e) {
					let t = new $(e.resolvedFields);
					return (
						t.merge(this.limit.referencedFields),
						new zT(this.ordering, t)
					);
				}
				optimize(e, t) {
					let n = this.getInputRequiredProps(t),
						r = e.optimizeGroup(this.inputGroup, n),
						i = this.limit.optimize(e);
					return new Q(0).add(Q.max(r, i));
				}
				getOptimized(t) {
					let n = this.getInputRequiredProps(t);
					return new e(
						this.inputGroup.getOptimized(n),
						this.limit.getOptimized(),
						this.ordering,
					);
				}
				*evaluate(e) {
					let { input: t, limit: n } = yield* Qd({
							input: this.input.evaluate(e),
							limit: this.limit.evaluate(e, void 0),
						}),
						r = Tf(n) ?? 1 / 0;
					return r === 1 / 0 ? t : t.slice(0, r);
				}
			}),
			(CE = class e extends kT {
				constructor(e, t, n) {
					(super(e.isSynchronous && t.isSynchronous),
						(this.input = e),
						(this.offset = t),
						(this.ordering = n),
						I(this, `inputGroup`),
						(this.inputGroup = e.getGroup()));
				}
				getHash() {
					return W(
						`RelationalOffset`,
						this.inputGroup.id,
						this.offset,
					);
				}
				getOutputFields() {
					return this.inputGroup.relational.outputFields;
				}
				canProvideOrdering(e) {
					return e.equals(this.ordering);
				}
				canProvideResolvedFields() {
					return !0;
				}
				getInputRequiredProps(e) {
					let t = new $(e.resolvedFields);
					return (
						t.merge(this.offset.referencedFields),
						new zT(this.ordering, t)
					);
				}
				optimize(e, t) {
					let n = this.getInputRequiredProps(t),
						r = e.optimizeGroup(this.inputGroup, n),
						i = this.offset.optimize(e);
					return new Q(0).add(Q.max(r, i));
				}
				getOptimized(t) {
					let n = this.getInputRequiredProps(t);
					return new e(
						this.inputGroup.getOptimized(n),
						this.offset.getOptimized(),
						this.ordering,
					);
				}
				*evaluate(e) {
					let { input: t, offset: n } = yield* Qd({
							input: this.input.evaluate(e),
							offset: this.offset.evaluate(e, void 0),
						}),
						r = Tf(n) ?? 0;
					return r === 0 ? t : t.slice(r);
				}
			}),
			(wE = class e extends KT {
				constructor(e, t, n, r, i) {
					(super(r, i, e.isSynchronous),
						(this.input = e),
						(this.namedFields = t),
						(this.ordering = n),
						(this.referencedFields = r),
						(this.referencedOuterFields = i),
						I(this, `inputGroup`),
						I(this, `definition`),
						(this.inputGroup = e.getGroup()));
					let a = {},
						o = Object.entries(t);
					for (let [e, t] of o) a[e] = t.definition;
					this.definition = {
						type: `array`,
						isNullable: !1,
						definition: {
							type: `object`,
							isNullable: !1,
							definitions: a,
						},
					};
				}
				getHash() {
					let e = {},
						t = Object.entries(this.namedFields);
					for (let [n, r] of t) e[n] = r.id;
					return W(
						`ScalarArray`,
						this.inputGroup.id,
						e,
						this.ordering,
						this.referencedFields,
						this.referencedOuterFields,
					);
				}
				getInputRequiredProps() {
					let e = new $(),
						t = Object.values(this.namedFields);
					for (let n of t) tt(n.collection) || e.add(n);
					return new zT(this.ordering, e);
				}
				optimize(e) {
					let t = this.getInputRequiredProps(),
						n = e.optimizeGroup(this.inputGroup, t);
					return new Q(0).add(n);
				}
				getOptimized() {
					let t = this.getInputRequiredProps();
					return new e(
						this.inputGroup.getOptimized(t),
						this.namedFields,
						this.ordering,
						this.referencedFields,
						this.referencedOuterFields,
					);
				}
				*evaluate(e, t) {
					let n = new VT();
					(e && n.merge(e), t && n.merge(t));
					let r = yield* this.input.evaluate(n),
						i = Object.entries(this.namedFields);
					return {
						type: `array`,
						value: r.tuples.map((e) => {
							let t = {};
							for (let [n, r] of i) t[n] = e.getValue(r);
							return { type: `object`, value: t };
						}),
					};
				}
			}),
			(TE = class e extends KT {
				constructor(e, t) {
					(super(
						e.referencedFields,
						e.referencedOuterFields,
						e.isSynchronous,
					),
						(this.input = e),
						(this.definition = t),
						B(t.isNullable, `Unsupported non-nullable cast`));
				}
				getHash() {
					return W(`ScalarCast`, this.input, this.definition);
				}
				optimize(e) {
					return this.input.optimize(e);
				}
				getOptimized() {
					return new e(this.input.getOptimized(), this.definition);
				}
				*evaluate(e, t) {
					let n = yield* this.input.evaluate(e, t);
					return vT.cast(n, this.definition);
				}
			}),
			(EE = class e extends KT {
				constructor(e, t, n, r, i) {
					(super(r, i, e.isSynchronous),
						(this.input = e),
						(this.field = t),
						(this.ordering = n),
						(this.referencedFields = r),
						(this.referencedOuterFields = i),
						I(this, `inputGroup`),
						I(this, `definition`),
						(this.inputGroup = e.getGroup()),
						(this.definition = {
							type: `array`,
							isNullable: !1,
							definition: t.definition,
						}));
				}
				getHash() {
					return W(
						`ScalarFlatArray`,
						this.inputGroup.id,
						this.field.id,
						this.ordering,
						this.referencedFields,
						this.referencedOuterFields,
					);
				}
				getInputRequiredProps() {
					let e = new $();
					return (
						tt(this.field.collection) || e.add(this.field),
						new zT(this.ordering, e)
					);
				}
				optimize(e) {
					let t = this.getInputRequiredProps(),
						n = e.optimizeGroup(this.inputGroup, t);
					return new Q(0).add(n);
				}
				getOptimized() {
					let t = this.getInputRequiredProps();
					return new e(
						this.inputGroup.getOptimized(t),
						this.field,
						this.ordering,
						this.referencedFields,
						this.referencedOuterFields,
					);
				}
				*evaluate(e, t) {
					let n = new VT();
					return (
						e && n.merge(e),
						t && n.merge(t),
						{
							type: `array`,
							value: (yield* this.input.evaluate(n)).tuples.map(
								(e) => e.getValue(this.field),
							),
						}
					);
				}
			}),
			(DE = { type: 0 }),
			(OE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.left = e),
						(this.right = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarIn`, this.left, this.right);
				}
				optimize(e) {
					let t = this.left.optimize(e),
						n = this.right.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.left.getOptimized(),
						this.right.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { left: n, right: r } = yield* Qd({
						left: this.left.evaluate(e, t),
						right: this.right.evaluate(e, t),
					});
					return { type: `boolean`, value: vT.in(n, r, DE) };
				}
			}),
			(kE = { type: 1 }),
			(AE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.source = e),
						(this.target = t),
						I(this, `definition`, {
							type: `number`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarIndexOf`, this.source, this.target);
				}
				optimize(e) {
					let t = this.source.optimize(e),
						n = this.target.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.source.getOptimized(),
						this.target.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { source: n, target: r } = yield* Qd({
						source: this.source.evaluate(e, t),
						target: this.target.evaluate(e, t),
					});
					return { type: `number`, value: vT.indexOf(n, r, kE) };
				}
			}),
			(jE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.left = e),
						(this.right = t),
						I(this, `definition`, {
							type: `array`,
							definition: { type: `string`, isNullable: !1 },
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarIntersection`, this.left, this.right);
				}
				optimize(e) {
					let t = this.left.optimize(e),
						n = this.right.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.left.getOptimized(),
						this.right.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { left: n, right: r } = yield* Qd({
							left: this.left.evaluate(e, t),
							right: this.right.evaluate(e, t),
						}),
						i = ip(n),
						a = ip(r),
						o = [],
						s = i.size < a.size ? i : a,
						c = s === i ? a : i;
					for (let e of s)
						c.has(e) && o.push({ type: `string`, value: e });
					return { type: `array`, value: o };
				}
			}),
			(ME = class e extends KT {
				constructor(e) {
					(super(
						e.referencedFields,
						e.referencedOuterFields,
						e.isSynchronous,
					),
						(this.input = e),
						I(this, `definition`, {
							type: `number`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarLength`, this.input);
				}
				optimize(e) {
					return this.input.optimize(e);
				}
				getOptimized() {
					return new e(this.input.getOptimized());
				}
				*evaluate(e, t) {
					let n = yield* this.input.evaluate(e, t);
					return { type: `number`, value: vT.length(n) };
				}
			}),
			(NE = class e extends KT {
				constructor(e) {
					(super(
						e.referencedFields,
						e.referencedOuterFields,
						e.isSynchronous,
					),
						(this.input = e),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarNot`, this.input);
				}
				optimize(e) {
					return this.input.optimize(e);
				}
				getOptimized() {
					return new e(this.input.getOptimized());
				}
				*evaluate(e, t) {
					return {
						type: `boolean`,
						value: !ff(yield* this.input.evaluate(e, t)),
					};
				}
			}),
			(PE = { type: 0 }),
			(FE = class e extends KT {
				constructor(e, t) {
					let n = new $();
					(n.merge(e.referencedFields), n.merge(t.referencedFields));
					let r = new $();
					(r.merge(e.referencedOuterFields),
						r.merge(t.referencedOuterFields));
					let i = e.isSynchronous && t.isSynchronous;
					(super(n, r, i),
						(this.left = e),
						(this.right = t),
						I(this, `definition`, {
							type: `boolean`,
							isNullable: !1,
						}));
				}
				getHash() {
					return W(`ScalarNotIn`, this.left, this.right);
				}
				optimize(e) {
					let t = this.left.optimize(e),
						n = this.right.optimize(e);
					return Q.max(t, n);
				}
				getOptimized() {
					return new e(
						this.left.getOptimized(),
						this.right.getOptimized(),
					);
				}
				*evaluate(e, t) {
					let { left: n, right: r } = yield* Qd({
						left: this.left.evaluate(e, t),
						right: this.right.evaluate(e, t),
					});
					return { type: `boolean`, value: !vT.in(n, r, PE) };
				}
			}),
			(IE = class extends KT {
				constructor(e, t) {
					B(e.name !== jT, `Invalid field name`);
					let n = new $(),
						r = new $();
					(t ? r.add(e) : n.add(e),
						super(n, r, !0),
						(this.field = e),
						(this.isOuterField = t),
						I(this, `definition`),
						(this.definition = e.definition));
				}
				getHash() {
					return W(
						`ScalarVariable`,
						this.field.id,
						this.isOuterField,
					);
				}
				optimize() {
					return new Q(0);
				}
				getOptimized() {
					return this;
				}
				*evaluate(e, t) {
					return this.isOuterField
						? (B(e, `Context must exist`), e.getValue(this.field))
						: (B(t, `Tuple must exist`), t.getValue(this.field));
				}
			}),
			(LE = class {
				constructor(e) {
					this.memo = e;
				}
				finishRelational(e) {
					return this.memo.addRelational(e);
				}
				newRelationalScan(e) {
					let t = new tE(e);
					return this.finishRelational(t);
				}
				newRelationalIndexLookup(e, t) {
					let n = new $T(e, t);
					return this.finishRelational(n);
				}
				newRelationalLeftJoin(e, t, n) {
					let r = new xE(e, t, n);
					return this.finishRelational(r);
				}
				newRelationalRightJoin(e, t, n) {
					return this.newRelationalLeftJoin(t, e, n);
				}
				newRelationalFilter(e, t) {
					if (
						t instanceof iE &&
						t.value?.type === `boolean` &&
						t.value.value === !0
					)
						return e;
					if (
						e instanceof xE &&
						t.referencedFields.subsetOf(
							e.leftGroup.relational.outputFields,
						)
					) {
						let n = this.newRelationalFilter(e.left, t);
						return this.newRelationalLeftJoin(
							n,
							e.right,
							e.constraint,
						);
					}
					let n = new QT(e, t);
					return this.finishRelational(n);
				}
				newRelationalProject(e, t, n) {
					let r = new WT(e, t, n);
					return this.finishRelational(r);
				}
				newRelationalLimit(e, t, n) {
					if (
						e instanceof WT &&
						t.referencedFields.subsetOf(
							e.inputGroup.relational.outputFields,
						) &&
						n.providedByFields(e.inputGroup.relational.outputFields)
					) {
						let r = this.newRelationalLimit(e.input, t, n);
						return this.newRelationalProject(
							r,
							e.projections,
							e.passthrough,
						);
					}
					let r = new SE(e, t, n);
					return this.finishRelational(r);
				}
				newRelationalOffset(e, t, n) {
					let r = new CE(e, t, n);
					return this.finishRelational(r);
				}
				finishScalar(e) {
					if (
						!(e instanceof iE) &&
						e.isSynchronous &&
						e.referencedFields.size === 0 &&
						e.referencedOuterFields.size === 0
					) {
						let t = e.evaluateSync();
						return this.newScalarConstant(e.definition, t);
					}
					return this.memo.addScalar(e);
				}
				removeUnknown(e, t) {
					if (e.definition.type !== `unknown` || t.type === `unknown`)
						return e;
					let n = { ...t, isNullable: !0 };
					return this.newScalarCast(e, n);
				}
				newScalarVariable(e, t) {
					let n = new IE(e, t);
					return this.finishScalar(n);
				}
				newScalarConstant(e, t) {
					let n = new iE(e, t);
					return this.finishScalar(n);
				}
				newScalarNot(e) {
					if (e instanceof NE)
						return e.input.definition.type === `boolean`
							? e.input
							: this.newScalarCast(e.input, {
									type: `boolean`,
									isNullable: !0,
								});
					if (e instanceof lE)
						return this.newScalarNotEquals(e.left, e.right);
					if (e instanceof mE)
						return this.newScalarEquals(e.left, e.right);
					if (e instanceof fE)
						return this.newScalarGreaterThanOrEqual(
							e.left,
							e.right,
						);
					if (e instanceof pE)
						return this.newScalarGreaterThan(e.left, e.right);
					if (e instanceof uE)
						return this.newScalarLessThanOrEqual(e.left, e.right);
					if (e instanceof dE)
						return this.newScalarLessThan(e.left, e.right);
					if (e instanceof rE) {
						let t = this.newScalarNot(e.left),
							n = this.newScalarNot(e.right);
						return this.newScalarOr(t, n);
					}
					if (e instanceof hE) {
						let t = this.newScalarNot(e.left),
							n = this.newScalarNot(e.right);
						return this.newScalarAnd(t, n);
					}
					let t = new NE(e);
					return this.finishScalar(t);
				}
				newScalarAnd(e, t) {
					if (
						t instanceof iE &&
						t.value?.type === `boolean` &&
						t.value.value === !0
					)
						return e;
					if (
						(e instanceof iE &&
							e.value?.type === `boolean` &&
							e.value.value === !0) ||
						(t instanceof iE &&
							t.value?.type === `boolean` &&
							t.value.value === !1)
					)
						return t;
					if (
						e instanceof iE &&
						e.value?.type === `boolean` &&
						e.value.value === !1
					)
						return e;
					let n = new rE(e, t);
					return this.finishScalar(n);
				}
				newScalarOr(e, t) {
					if (
						t instanceof iE &&
						t.value?.type === `boolean` &&
						t.value.value === !0
					)
						return t;
					if (
						(e instanceof iE &&
							e.value?.type === `boolean` &&
							e.value.value === !0) ||
						(t instanceof iE &&
							t.value?.type === `boolean` &&
							t.value.value === !1)
					)
						return e;
					if (
						e instanceof iE &&
						e.value?.type === `boolean` &&
						e.value.value === !1
					)
						return t;
					let n = new hE(e, t);
					return this.finishScalar(n);
				}
				newScalarEquals(e, t) {
					let n = e instanceof IE;
					if (t instanceof IE && !n)
						return this.newScalarEquals(t, e);
					((e = this.removeUnknown(e, t.definition)),
						(t = this.removeUnknown(t, e.definition)));
					let r = new lE(e, t);
					return this.finishScalar(r);
				}
				newScalarNotEquals(e, t) {
					let n = e instanceof IE;
					if (t instanceof IE && !n)
						return this.newScalarNotEquals(t, e);
					((e = this.removeUnknown(e, t.definition)),
						(t = this.removeUnknown(t, e.definition)));
					let r = new mE(e, t);
					return this.finishScalar(r);
				}
				newScalarLessThan(e, t) {
					let n = e instanceof IE;
					if (t instanceof IE && !n)
						return this.newScalarGreaterThan(t, e);
					((e = this.removeUnknown(e, t.definition)),
						(t = this.removeUnknown(t, e.definition)));
					let r = new fE(e, t);
					return this.finishScalar(r);
				}
				newScalarLessThanOrEqual(e, t) {
					let n = e instanceof IE;
					if (t instanceof IE && !n)
						return this.newScalarGreaterThanOrEqual(t, e);
					((e = this.removeUnknown(e, t.definition)),
						(t = this.removeUnknown(t, e.definition)));
					let r = new pE(e, t);
					return this.finishScalar(r);
				}
				newScalarGreaterThan(e, t) {
					let n = e instanceof IE;
					if (t instanceof IE && !n)
						return this.newScalarLessThan(t, e);
					((e = this.removeUnknown(e, t.definition)),
						(t = this.removeUnknown(t, e.definition)));
					let r = new uE(e, t);
					return this.finishScalar(r);
				}
				newScalarGreaterThanOrEqual(e, t) {
					let n = e instanceof IE;
					if (t instanceof IE && !n)
						return this.newScalarLessThanOrEqual(t, e);
					((e = this.removeUnknown(e, t.definition)),
						(t = this.removeUnknown(t, e.definition)));
					let r = new dE(e, t);
					return this.finishScalar(r);
				}
				newScalarIn(e, t) {
					t.definition.type === `array` &&
						(e = this.removeUnknown(e, t.definition.definition));
					let n = {
						type: `array`,
						isNullable: !0,
						definition: e.definition,
					};
					t = this.removeUnknown(t, n);
					let r = new OE(e, t);
					return this.finishScalar(r);
				}
				newScalarNotIn(e, t) {
					t.definition.type === `array` &&
						(e = this.removeUnknown(e, t.definition.definition));
					let n = {
						type: `array`,
						isNullable: !0,
						definition: e.definition,
					};
					t = this.removeUnknown(t, n);
					let r = new FE(e, t);
					return this.finishScalar(r);
				}
				newScalarCase(e, t, n) {
					if (e) {
						let n = [];
						for (let { when: r, then: i } of t) {
							let t = new JT(
								this.removeUnknown(r, e.definition),
								i,
							);
							n.push(t);
						}
						t = n;
					}
					let r = new YT(e, t, n);
					return this.finishScalar(r);
				}
				newScalarContains(e, t) {
					let n = new oE(e, t);
					return this.finishScalar(n);
				}
				newScalarStartsWith(e, t) {
					let n = new _E(e, t);
					return this.finishScalar(n);
				}
				newScalarEndsWith(e, t) {
					let n = new cE(e, t);
					return this.finishScalar(n);
				}
				newScalarLength(e) {
					let t = new ME(e);
					return this.finishScalar(t);
				}
				newScalarIndexOf(e, t) {
					let n = new AE(e, t);
					return this.finishScalar(n);
				}
				newScalarArray(e, t, n, r, i) {
					let a = new wE(e, t, n, r, i);
					return this.finishScalar(a);
				}
				newScalarFlatArray(e, t, n, r, i) {
					let a = new EE(e, t, n, r, i);
					return this.finishScalar(a);
				}
				newScalarIntersection(e, t) {
					let n = new jE(e, t);
					return this.finishScalar(n);
				}
				newScalarCast(e, t) {
					if (e.definition.type === t.type) return e;
					let n = new TE(e, t);
					return this.finishScalar(n);
				}
			}),
			(RE = class extends kT {}),
			(zE = class e extends RE {
				constructor(e, t, n) {
					(super(!1),
						(this.input = e),
						(this.fields = t),
						(this.resolver = n),
						I(this, `inputGroup`),
						(this.inputGroup = e.getGroup()));
				}
				getHash() {
					return W(
						`EnforcerResolve`,
						this.inputGroup.id,
						this.fields,
					);
				}
				getOutputFields() {
					return this.inputGroup.relational.outputFields;
				}
				canProvideOrdering() {
					return !0;
				}
				canProvideResolvedFields(e) {
					return e.subsetOf(this.fields);
				}
				getInputRequiredProps(e) {
					let t = new $();
					return new zT(e.ordering, t);
				}
				optimize(e, t) {
					let n = this.getInputRequiredProps(t),
						r = e.optimizeGroup(this.inputGroup, n);
					return Q.estimate(0, 100 * TT).add(r);
				}
				getOptimized(t) {
					let n = this.getInputRequiredProps(t);
					return new e(
						this.inputGroup.getOptimized(n),
						this.fields,
						this.resolver,
					);
				}
				*evaluate(e) {
					let t = yield* this.input.evaluate(e);
					B(
						this.fields.subsetOf(t.fields),
						`Fields can't be resolved`,
					);
					let n = new Set();
					for (let e of this.fields)
						(B(
							e.collection,
							`Collection required to resolve field`,
						),
							n.add(e.collection));
					for (let e of t.tuples)
						for (let t of this.fields) {
							let n = e.getValue(t);
							n?.type === `richtext`
								? this.resolver.preloadRichTextValue(n)
								: n?.type === `vectorsetitem` &&
									this.resolver.preloadVectorSetItemValue(n);
						}
					let r = yield Promise.all(
						Array.from(n).map(async (e) => {
							let n = [];
							for (let r of t.tuples) {
								let t = r.getPointer(e);
								t && n.push(t);
							}
							let r = await e.data.resolveItems(n);
							return (
								B(
									r.length === n.length,
									`Invalid number of items`,
								),
								[e, r]
							);
						}),
					);
					return t.map(t.fields, (e) => {
						let t = new VT();
						t.merge(e);
						for (let [n, i] of r) {
							let r = e.getPointer(n);
							if (!r) continue;
							let a = i.shift();
							(B(a, `Item not found`),
								B(a.pointer === r, `Pointer mismatch`));
							for (let e of n.fields) {
								let n = e.getValue(a);
								t.addValue(e, n);
							}
						}
						return t;
					});
				}
			}),
			(BE = { type: 0 }),
			(VE = class e extends RE {
				constructor(e, t) {
					(super(e.isSynchronous),
						(this.input = e),
						(this.ordering = t),
						I(this, `inputGroup`),
						(this.inputGroup = e.getGroup()));
				}
				getHash() {
					return W(`EnforcerSort`, this.inputGroup.id, this.ordering);
				}
				getOutputFields() {
					return this.inputGroup.relational.outputFields;
				}
				canProvideOrdering(e) {
					return e.equals(this.ordering);
				}
				canProvideResolvedFields() {
					return !0;
				}
				getInputRequiredProps(e) {
					let t = new $(e.resolvedFields);
					for (let { field: e } of this.ordering.fields)
						e.name !== jT && (tt(e.collection) || t.add(e));
					return new zT(new RT(), t);
				}
				optimize(e, t) {
					let n = this.getInputRequiredProps(t),
						r = e.optimizeGroup(this.inputGroup, n);
					return new Q(0).add(r);
				}
				getOptimized(t) {
					let n = this.getInputRequiredProps(t);
					return new e(
						this.inputGroup.getOptimized(n),
						this.ordering,
					);
				}
				*evaluate(e) {
					return (yield* this.input.evaluate(e)).sort((e, t) => {
						for (let { field: n, direction: r } of this.ordering
							.fields) {
							let i = r === `asc`;
							if (n.name === jT) {
								let r = n.collection;
								B(r, `Collection required for sorting`);
								let a = e.getPointer(r);
								B(a, `Pointer required for sorting`);
								let o = { pointer: a, data: {} },
									s = t.getPointer(r);
								B(s, `Pointer required for sorting`);
								let c = { pointer: s, data: {} },
									l = r.data.compareItems(o, c);
								return i ? l : -l;
							}
							let a = e.getValue(n),
								o = t.getValue(n);
							if (!vT.equal(a, o, BE)) {
								if (nt(a) || vT.lessThan(a, o, BE))
									return i ? -1 : 1;
								if (nt(o) || vT.greaterThan(a, o, BE))
									return i ? 1 : -1;
								throw Error(`Invalid comparison`);
							}
						}
						return 0;
					});
				}
			}),
			(HE = class {
				constructor(e, t, n) {
					((this.query = e),
						(this.locale = t),
						(this.resolver = n),
						I(this, `memo`, new bE()),
						I(this, `normalizer`, new LE(this.memo)),
						I(this, `explorer`, new vE(this.normalizer)));
				}
				optimize() {
					let e = new XT(
							this.normalizer,
							this.query,
							this.locale,
						).build(),
						t = e.takeNode().getGroup(),
						n = e.getRequiredProps();
					return (
						this.optimizeGroup(t, n),
						[t.getOptimized(n), e.getNamedFields()]
					);
				}
				optimizeGroup(e, t) {
					let n = e.getWinner(t);
					if (n.node) return n.cost;
					let r = e.nodes[0];
					(B(r, `Normalized node not found`),
						this.createEnforcer(n, r, t));
					for (let r of e.nodes) {
						if (t.canProvide(r)) {
							let e = r.optimize(this, t);
							n.update(r, e);
						}
						t.isMinimal && this.explorer.explore(r);
					}
					return n.cost;
				}
				createEnforcer(e, t, n) {
					if (n.resolvedFields.size > 0) {
						let r = new zE(t, n.resolvedFields, this.resolver),
							i = r.optimize(this, n);
						e.update(r, i);
					}
					if (n.ordering.length > 0) {
						let r = new VE(t, n.ordering),
							i = r.optimize(this, n);
						e.update(r, i);
					}
				}
			}),
			(UE = Jd(`query-engine`)),
			(QueryEngine = class {
				async evalQuery(e, t, n, r = {}) {
					UE.enabled &&
						UE.debug(`Query:
${_p(e)}`);
					let i = new AT(e, t, r),
						[a, o] = new HE(e, t, i).optimize(),
						s = await a.evaluateAsync(),
						c = Object.entries(o),
						l = [],
						u = Zd(
							$d(
								s.tuples.map((e) => {
									let t = {},
										r = {};
									for (let [a, o] of c) {
										let s = e.getValue(o);
										((t[a] = i.resolveValue(s)),
											n && (r[a] = s));
									}
									return (n && l.push(r), Qd(t));
								}),
							),
						);
					return n ? [st(u) ? await u : u, l] : u;
				}
				async serializeableQuery(e, t) {
					return this.evalQuery(e, t, !0);
				}
				async query(e, t, n) {
					return this.evalQuery(e, t, !1, n);
				}
				resolveSerializableQueryResult(e, t, n) {
					let r = new AT(t, n);
					return Zd(
						$d(
							e.map((e) => {
								let t = {},
									n;
								for (n in e) {
									let i = e[n];
									t[n] = r.resolveValue(i);
								}
								return Qd(t);
							}),
						),
					);
				}
			}),
			(GE = (() => t_.QueryCache)()),
			(KE = class {
				constructor(e, t = 1 / 0) {
					((this.queryEngine = e),
						(this.maxSize = t),
						I(this, `cache`, new Map()),
						I(
							this,
							`serializedCache`,
							i_ === void 0 ? void 0 : new Map(),
						));
				}
				prune() {
					if (!(this.cache.size <= this.maxSize))
						for (let [e, t] of this.cache) {
							if (this.cache.size <= this.maxSize) break;
							t.state !== `pending` &&
								(this.cache.delete(e),
								this.serializedCache?.delete(e));
						}
				}
				get(e, t) {
					let n = bp(e, t),
						r = this.cache.get(n);
					if (r) {
						if (
							(this.cache.delete(n),
							this.cache.set(n, r),
							i_ !== void 0 &&
								this.serializedCache !== void 0 &&
								!zf(n) &&
								r.state === `fulfilled`)
						) {
							let e = this.serializedCache.get(n);
							e !== void 0 && i_.set(GE, n, e);
						}
						return r;
					}
					let i = new Vg(() => {
						let r = zf(n),
							i = r ? void 0 : sn(GE, n);
						if (i)
							try {
								return this.queryEngine.resolveSerializableQueryResult(
									i,
									e,
									t,
								);
							} catch (e) {
								an(e, n);
							}
						return i_ !== void 0 && !r
							? this.queryEngine
									.serializeableQuery(e, t)
									.then(
										([e, t]) => (
											this.serializedCache?.set(n, t),
											i_.set(GE, n, t),
											e
										),
									)
							: this.queryEngine.query(e, t);
					});
					return (this.cache.set(n, i), this.prune(), i);
				}
			}),
			(qE = new KE(new QueryEngine())),
			(JE = `style[data-framer-breakpoint-css]`),
			(YE = `page`),
			(XE = Symbol(`cycle`)),
			($E = (() => {
				let e = s(void 0);
				return ((e.displayName = `TickerContext`), e);
			})()),
			(eD = (e) =>
				f.forwardRef((t, n) => {
					let {
							flowEffectEnabled: r,
							flowEffectTransition: i,
							isNestedFlowEffect: a,
							transition: o,
							...s
						} = t,
						l = c(
							() => (i ? { default: o, layout: i } : o),
							[o, i],
						);
					if (!r) return _(e, { ...s, ref: n, transition: o });
					let u = _(e, { ...s, ref: n });
					return (
						i && (u = _(je, { transition: l, children: u })),
						a || (u = _(He, { children: u })),
						u
					);
				})),
			(tD = f.createContext(void 0)),
			(nD = () => f.useContext(tD)),
			(rD = {
				Arial: {
					Regular: { selector: `Arial`, weight: void 0 },
					Black: { selector: `Arial-Black`, weight: void 0 },
					Narrow: { selector: `Arial Narrow`, weight: void 0 },
					"Rounded Bold": {
						selector: `Arial Rounded MT Bold`,
						weight: void 0,
					},
				},
				Avenir: {
					Book: { selector: `Avenir`, weight: void 0 },
					Light: { selector: `Avenir-Light`, weight: void 0 },
					Medium: { selector: `Avenir-Medium`, weight: void 0 },
					Heavy: { selector: `Avenir-Heavy`, weight: void 0 },
					Black: { selector: `Avenir-Black`, weight: void 0 },
				},
				"Avenir Next": {
					Regular: { selector: `Avenir Next`, weight: void 0 },
					"Ultra Light": {
						selector: `AvenirNext-UltraLight`,
						weight: void 0,
					},
					Medium: { selector: `AvenirNext-Medium`, weight: void 0 },
					"Demi Bold": {
						selector: `AvenirNext-DemiBold`,
						weight: void 0,
					},
					Heavy: { selector: `AvenirNext-Heavy`, weight: void 0 },
				},
				"Avenir Next Condensed": {
					Regular: {
						selector: `Avenir Next Condensed`,
						weight: void 0,
					},
					"Ultra Light": {
						selector: `AvenirNextCondensed-UltraLight`,
						weight: void 0,
					},
					Medium: {
						selector: `AvenirNextCondensed-Medium`,
						weight: void 0,
					},
					"Demi Bold": {
						selector: `AvenirNextCondensed-DemiBold`,
						weight: void 0,
					},
					Heavy: {
						selector: `AvenirNextCondensed-Heavy`,
						weight: void 0,
					},
				},
				Baskerville: {
					Regular: { selector: `Baskerville`, weight: void 0 },
					"Semi Bold": {
						selector: `Baskerville-SemiBold`,
						weight: void 0,
					},
				},
				"Bodoni 72": {
					Book: { selector: `Bodoni 72`, weight: void 0 },
					Oldstyle: {
						selector: `Bodoni 72 Oldstyle`,
						weight: void 0,
					},
					Smallcaps: {
						selector: `Bodoni 72 Smallcaps`,
						weight: void 0,
					},
				},
				Courier: { Regular: { selector: `Courier`, weight: void 0 } },
				"Courier New": {
					Regular: { selector: `Courier New`, weight: void 0 },
				},
				Futura: {
					Medium: { selector: `Futura`, weight: void 0 },
					Condensed: {
						selector: `Futura-CondensedMedium`,
						weight: void 0,
					},
					"Condensed ExtraBold": {
						selector: `Futura-CondensedExtraBold`,
						weight: void 0,
					},
				},
				Georgia: { Regular: { selector: `Georgia`, weight: void 0 } },
				"Gill Sans": {
					Regular: { selector: `Gill Sans`, weight: void 0 },
					Light: { selector: `GillSans-Light`, weight: void 0 },
					SemiBold: { selector: `GillSans-SemiBold`, weight: void 0 },
					UltraBold: {
						selector: `GillSans-UltraBold`,
						weight: void 0,
					},
				},
				Helvetica: {
					Regular: { selector: `Helvetica`, weight: void 0 },
					Light: { selector: `Helvetica-Light`, weight: void 0 },
					Bold: { selector: `Helvetica-Bold`, weight: void 0 },
					Oblique: { selector: `Helvetica-Oblique`, weight: void 0 },
					"Light Oblique": {
						selector: `Helvetica-LightOblique`,
						weight: void 0,
					},
					"Bold Oblique": {
						selector: `Helvetica-BoldOblique`,
						weight: void 0,
					},
				},
				"Helvetica Neue": {
					Regular: { selector: `Helvetica Neue`, weight: void 0 },
					UltraLight: {
						selector: `HelveticaNeue-UltraLight`,
						weight: void 0,
					},
					Thin: { selector: `HelveticaNeue-Thin`, weight: void 0 },
					Light: { selector: `HelveticaNeue-Light`, weight: void 0 },
					Medium: {
						selector: `HelveticaNeue-Medium`,
						weight: void 0,
					},
					Bold: { selector: `HelveticaNeue-Bold`, weight: void 0 },
					Italic: {
						selector: `HelveticaNeue-Italic`,
						weight: void 0,
					},
					"UltraLight Italic": {
						selector: `HelveticaNeue-UltraLightItalic`,
						weight: void 0,
					},
					"Thin Italic": {
						selector: `HelveticaNeue-ThinItalic`,
						weight: void 0,
					},
					"Light Italic": {
						selector: `HelveticaNeue-LightItalic`,
						weight: void 0,
					},
					"Medium Italic": {
						selector: `HelveticaNeue-MediumItalic`,
						weight: void 0,
					},
					"Bold Italic": {
						selector: `HelveticaNeue-BoldItalic`,
						weight: void 0,
					},
					"Condensed Bold": {
						selector: `HelveticaNeue-CondensedBold`,
						weight: void 0,
					},
					"Condensed Black": {
						selector: `HelveticaNeue-CondensedBlack`,
						weight: void 0,
					},
				},
				"Hoefler Text": {
					Regular: { selector: `Hoefler Text`, weight: void 0 },
				},
				Impact: { Regular: { selector: `Impact`, weight: void 0 } },
				"Lucida Grande": {
					Regular: { selector: `Lucida Grande`, weight: void 0 },
				},
				Menlo: { Regular: { selector: `Menlo`, weight: void 0 } },
				Monaco: { Regular: { selector: `Monaco`, weight: void 0 } },
				Optima: {
					Regular: { selector: `Optima`, weight: void 0 },
					ExtraBlack: {
						selector: `Optima-ExtraBlack`,
						weight: void 0,
					},
				},
				Palatino: { Regular: { selector: `Palatino`, weight: void 0 } },
				"SF Pro Display": {
					Regular: {
						selector: `__SF-UI-Display-Regular__`,
						weight: 400,
					},
					Ultralight: {
						selector: `__SF-UI-Display-Ultralight__`,
						weight: 100,
					},
					Thin: { selector: `__SF-UI-Display-Thin__`, weight: 200 },
					Light: { selector: `__SF-UI-Display-Light__`, weight: 300 },
					Medium: {
						selector: `__SF-UI-Display-Medium__`,
						weight: 500,
					},
					Semibold: {
						selector: `__SF-UI-Display-Semibold__`,
						weight: 600,
					},
					Bold: { selector: `__SF-UI-Display-Bold__`, weight: 700 },
					Heavy: { selector: `__SF-UI-Display-Heavy__`, weight: 800 },
					Black: { selector: `__SF-UI-Display-Black__`, weight: 900 },
					Italic: {
						selector: `__SF-UI-Display-Italic__`,
						weight: 400,
					},
					"Ultralight Italic": {
						selector: `__SF-UI-Display-Ultralight-Italic__`,
						weight: 100,
					},
					"Thin Italic": {
						selector: `__SF-UI-Display-Thin-Italic__`,
						weight: 200,
					},
					"Light Italic": {
						selector: `__SF-UI-Display-Light-Italic__`,
						weight: 300,
					},
					"Medium Italic": {
						selector: `__SF-UI-Display-Medium-Italic__`,
						weight: 500,
					},
					"Semibold Italic": {
						selector: `__SF-UI-Display-Semibold-Italic__`,
						weight: 600,
					},
					"Bold Italic": {
						selector: `__SF-UI-Display-Bold-Italic__`,
						weight: 700,
					},
					"Heavy Italic": {
						selector: `__SF-UI-Display-Heavy-Italic__`,
						weight: 800,
					},
					"Black Italic": {
						selector: `__SF-UI-Display-Black-Italic__`,
						weight: 900,
					},
				},
				"SF Pro Display Condensed": {
					Regular: {
						selector: `__SF-UI-Display-Condensed-Regular__`,
						weight: 400,
					},
					Ultralight: {
						selector: `__SF-UI-Display-Condensed-Ultralight__`,
						weight: 100,
					},
					Thin: {
						selector: `__SF-UI-Display-Condensed-Thin__`,
						weight: 200,
					},
					Light: {
						selector: `__SF-UI-Display-Condensed-Light__`,
						weight: 300,
					},
					Medium: {
						selector: `__SF-UI-Display-Condensed-Medium__`,
						weight: 500,
					},
					Semibold: {
						selector: `__SF-UI-Display-Condensed-Semibold__`,
						weight: 600,
					},
					Bold: {
						selector: `__SF-UI-Display-Condensed-Bold__`,
						weight: 700,
					},
					Heavy: {
						selector: `__SF-UI-Display-Condensed-Heavy__`,
						weight: 800,
					},
					Black: {
						selector: `__SF-UI-Display-Condensed-Black__`,
						weight: 900,
					},
				},
				"SF Pro Text": {
					Regular: {
						selector: `__SF-UI-Text-Regular__`,
						weight: 400,
					},
					Light: { selector: `__SF-UI-Text-Light__`, weight: 200 },
					Medium: { selector: `__SF-UI-Text-Medium__`, weight: 500 },
					Semibold: {
						selector: `__SF-UI-Text-Semibold__`,
						weight: 600,
					},
					Bold: { selector: `__SF-UI-Text-Bold__`, weight: 700 },
					Heavy: { selector: `__SF-UI-Text-Heavy__`, weight: 800 },
					Italic: { selector: `__SF-UI-Text-Italic__`, weight: 400 },
					"Light Italic": {
						selector: `__SF-UI-Text-Light-Italic__`,
						weight: 200,
					},
					"Medium Italic": {
						selector: `__SF-UI-Text-Medium-Italic__`,
						weight: 500,
					},
					"Semibold Italic": {
						selector: `__SF-UI-Text-Semibold-Italic__`,
						weight: 600,
					},
					"Bold Italic": {
						selector: `__SF-UI-Text-Bold-Italic__`,
						weight: 700,
					},
					"Heavy Italic": {
						selector: `__SF-UI-Text-Heavy-Italic__`,
						weight: 800,
					},
				},
				"SF Pro Text Condensed": {
					Regular: {
						selector: `__SF-UI-Text-Condensed-Regular__`,
						weight: 400,
					},
					Light: {
						selector: `__SF-UI-Text-Condensed-Light__`,
						weight: 200,
					},
					Medium: {
						selector: `__SF-UI-Text-Condensed-Medium__`,
						weight: 500,
					},
					Semibold: {
						selector: `__SF-UI-Text-Condensed-Semibold__`,
						weight: 600,
					},
					Bold: {
						selector: `__SF-UI-Text-Condensed-Bold__`,
						weight: 700,
					},
					Heavy: {
						selector: `__SF-UI-Text-Condensed-Heavy__`,
						weight: 800,
					},
				},
				Tahoma: { Regular: { selector: `Tahoma`, weight: void 0 } },
				Times: { Regular: { selector: `Times`, weight: void 0 } },
				"Times New Roman": {
					Regular: { selector: `Times New Roman`, weight: void 0 },
				},
				Trebuchet: {
					Regular: { selector: `Trebuchet MS`, weight: void 0 },
				},
				Verdana: { Regular: { selector: `Verdana`, weight: void 0 } },
			}),
			(iD = {
				"__SF-Compact-Display-Regular__": `SFCompactDisplay-Regular|.SFCompactDisplay-Regular`,
				"__SF-Compact-Display-Ultralight__": `SFCompactDisplay-Ultralight|.SFCompactDisplay-Ultralight`,
				"__SF-Compact-Display-Thin__": `SFCompactDisplay-Thin|.SFCompactDisplay-Thin`,
				"__SF-Compact-Display-Light__": `SFCompactDisplay-Light|.SFCompactDisplay-Light`,
				"__SF-Compact-Display-Medium__": `SFCompactDisplay-Medium|.SFCompactDisplay-Medium`,
				"__SF-Compact-Display-Semibold__": `SFCompactDisplay-Semibold|.SFCompactDisplay-Semibold`,
				"__SF-Compact-Display-Heavy__": `SFCompactDisplay-Heavy|.SFCompactDisplay-Heavy`,
				"__SF-Compact-Display-Black__": `SFCompactDisplay-Black|.SFCompactDisplay-Black`,
				"__SF-Compact-Display-Bold__": `SFCompactDisplay-Bold|.SFCompactDisplay-Bold`,
				"__SF-UI-Text-Regular__": `.SFNSText|SFProText-Regular|SFUIText-Regular|.SFUIText`,
				"__SF-UI-Text-Light__": `.SFNSText-Light|SFProText-Light|SFUIText-Light|.SFUIText-Light`,
				"__SF-UI-Text-Medium__": `.SFNSText-Medium|SFProText-Medium|SFUIText-Medium|.SFUIText-Medium`,
				"__SF-UI-Text-Semibold__": `.SFNSText-Semibold|SFProText-Semibold|SFUIText-Semibold|.SFUIText-Semibold`,
				"__SF-UI-Text-Bold__": `.SFNSText-Bold|SFProText-Bold|SFUIText-Bold|.SFUIText-Bold`,
				"__SF-UI-Text-Heavy__": `.SFNSText-Heavy|SFProText-Heavy|.SFUIText-Heavy`,
				"__SF-UI-Text-Italic__": `.SFNSText-Italic|SFProText-Italic|SFUIText-Italic|.SFUIText-Italic`,
				"__SF-UI-Text-Light-Italic__": `.SFNSText-LightItalic|SFProText-LightItalic|SFUIText-LightItalic|.SFUIText-LightItalic`,
				"__SF-UI-Text-Medium-Italic__": `.SFNSText-MediumItalic|SFProText-MediumItalic|SFUIText-MediumItalic|.SFUIText-MediumItalic`,
				"__SF-UI-Text-Semibold-Italic__": `.SFNSText-SemiboldItalic|SFProText-SemiboldItalic|SFUIText-SemiboldItalic|.SFUIText-SemiboldItalic`,
				"__SF-UI-Text-Bold-Italic__": `.SFNSText-BoldItalic|SFProText-BoldItalic|SFUIText-BoldItalic|.SFUIText-BoldItalic`,
				"__SF-UI-Text-Heavy-Italic__": `.SFNSText-HeavyItalic|SFProText-HeavyItalic|.SFUIText-HeavyItalic`,
				"__SF-Compact-Text-Regular__": `SFCompactText-Regular|.SFCompactText-Regular`,
				"__SF-Compact-Text-Light__": `SFCompactText-Light|.SFCompactText-Light`,
				"__SF-Compact-Text-Medium__": `SFCompactText-Medium|.SFCompactText-Medium`,
				"__SF-Compact-Text-Semibold__": `SFCompactText-Semibold|.SFCompactText-Semibold`,
				"__SF-Compact-Text-Bold__": `SFCompactText-Bold|.SFCompactText-Bold`,
				"__SF-Compact-Text-Heavy__": `SFCompactText-Heavy|.SFCompactText-Heavy`,
				"__SF-Compact-Text-Italic__": `SFCompactText-Italic|.SFCompactText-Italic`,
				"__SF-Compact-Text-Light-Italic__": `SFCompactText-LightItalic|.SFCompactText-LightItalic`,
				"__SF-Compact-Text-Medium-Italic__": `SFCompactText-MediumItalic|.SFCompactText-MediumItalic`,
				"__SF-Compact-Text-Semibold-Italic__": `SFCompactText-SemiboldItalic|.SFCompactText-SemiboldItalic`,
				"__SF-Compact-Text-Bold-Italic__": `SFCompactText-BoldItalic|.SFCompactText-BoldItalic`,
				"__SF-Compact-Text-Heavy-Italic__": `SFCompactText-HeavyItalic|.SFCompactText-HeavyItalic`,
				"__SF-UI-Display-Condensed-Regular__": `.SFNSDisplayCondensed-Regular|SFUIDisplayCondensed-Regular|.SFUIDisplayCondensed-Regular`,
				"__SF-UI-Display-Condensed-Ultralight__": `.SFNSDisplayCondensed-Ultralight|SFUIDisplayCondensed-Ultralight|.SFUIDisplayCondensed-Ultralight`,
				"__SF-UI-Display-Condensed-Thin__": `.SFNSDisplayCondensed-Thin|SFUIDisplayCondensed-Thin|.SFUIDisplayCondensed-Thin`,
				"__SF-UI-Display-Condensed-Light__": `.SFNSDisplayCondensed-Light|SFUIDisplayCondensed-Light|.SFUIDisplayCondensed-Light`,
				"__SF-UI-Display-Condensed-Medium__": `.SFNSDisplayCondensed-Medium|SFUIDisplayCondensed-Medium|.SFUIDisplayCondensed-Medium`,
				"__SF-UI-Display-Condensed-Semibold__": `.SFNSDisplayCondensed-Semibold|SFUIDisplayCondensed-Semibold|.SFUIDisplayCondensed-Semibold`,
				"__SF-UI-Display-Condensed-Bold__": `.SFNSDisplayCondensed-Bold|SFUIDisplayCondensed-Bold|.SFUIDisplayCondensed-Bold`,
				"__SF-UI-Display-Condensed-Heavy__": `.SFNSDisplayCondensed-Heavy|SFUIDisplayCondensed-Heavy|.SFUIDisplayCondensed-Heavy`,
				"__SF-UI-Display-Condensed-Black__": `.SFNSDisplayCondensed-Black|.SFUIDisplayCondensed-Black`,
				"__SF-UI-Display-Regular__": `.SFNSDisplay|SFProDisplay-Regular|SFUIDisplay-Regular|.SFUIDisplay`,
				"__SF-UI-Display-Ultralight__": `.SFNSDisplay-Ultralight|SFProDisplay-Ultralight|SFUIDisplay-Ultralight|.SFUIDisplay-Ultralight`,
				"__SF-UI-Display-Thin__": `.SFNSDisplay-Thin|SFProDisplay-Thin|SFUIDisplay-Thin|.SFUIDisplay-Thin`,
				"__SF-UI-Display-Light__": `.SFNSDisplay-Light|SFProDisplay-Light|SFUIDisplay-Light|.SFUIDisplay-Light`,
				"__SF-UI-Display-Medium__": `.SFNSDisplay-Medium|SFProDisplay-Medium|SFUIDisplay-Medium|.SFUIDisplay-Medium`,
				"__SF-UI-Display-Semibold__": `.SFNSDisplay-Semibold|SFProDisplay-Semibold|SFUIDisplay-Semibold|.SFUIDisplay-Semibold`,
				"__SF-UI-Display-Bold__": `.SFNSDisplay-Bold|SFProDisplay-Bold|SFUIDisplay-Bold|.SFUIDisplay-Bold`,
				"__SF-UI-Display-Heavy__": `.SFNSDisplay-Heavy|SFProDisplay-Heavy|SFUIDisplay-Heavy|.SFUIDisplay-Heavy`,
				"__SF-UI-Display-Black__": `.SFNSDisplay-Black|SFProDisplay-Black|.SFUIDisplay-Black`,
				"__SF-UI-Display-Italic__": `.SFNSDisplay-Italic|SFProDisplay-Italic|SFUIDisplay-Italic`,
				"__SF-UI-Display-Ultralight-Italic__": `.SFNSDisplay-UltralightItalic|SFProDisplay-UltralightItalic|SFUIDisplay-UltralightItalic|.SFUIDisplay-UltralightItalic`,
				"__SF-UI-Display-Thin-Italic__": `.SFNSDisplay-ThinItalic|SFProDisplay-ThinItalic|SFUIDisplay-ThinItalic|.SFUIDisplay-ThinItalic`,
				"__SF-UI-Display-Light-Italic__": `.SFNSDisplay-LightItalic|SFProDisplay-LightItalic|SFUIDisplay-LightItalic|.SFUIDisplay-LightItalic`,
				"__SF-UI-Display-Medium-Italic__": `.SFNSDisplay-MediumItalic|SFProDisplay-MediumItalic|SFUIDisplay-MediumItalic|.SFUIDisplay-MediumItalic`,
				"__SF-UI-Display-Semibold-Italic__": `.SFNSDisplay-SemiboldItalic|SFProDisplay-SemiboldItalic|SFUIDisplay-SemiboldItalic|.SFUIDisplay-SemiboldItalic`,
				"__SF-UI-Display-Bold-Italic__": `.SFNSDisplay-BoldItalic|SFProDisplay-BoldItalic|SFUIDisplay-BoldItalic|.SFUIDisplay-BoldItalic`,
				"__SF-UI-Display-Heavy-Italic__": `.SFNSDisplay-HeavyItalic|SFProDisplay-HeavyItalic|SFUIDisplay-HeavyItalic|.SFUIDisplay-HeavyItalic`,
				"__SF-UI-Display-Black-Italic__": `.SFNSDisplay-BlackItalic|SFProDisplay-BlackItalic|.SFUIDisplay-BlackItalic`,
				"__SF-UI-Text-Condensed-Regular__": `.SFNSTextCondensed-Regular|SFUITextCondensed-Regular|.SFUITextCondensed-Regular`,
				"__SF-UI-Text-Condensed-Light__": `.SFNSTextCondensed-Light|SFUITextCondensed-Light|.SFUITextCondensed-Light`,
				"__SF-UI-Text-Condensed-Medium__": `.SFNSTextCondensed-Medium|SFUITextCondensed-Medium|.SFUITextCondensed-Medium`,
				"__SF-UI-Text-Condensed-Semibold__": `.SFNSTextCondensed-Semibold|SFUITextCondensed-Semibold|.SFUITextCondensed-Semibold`,
				"__SF-UI-Text-Condensed-Bold__": `.SFNSTextCondensed-Bold|SFUITextCondensed-Bold|.SFUITextCondensed-Bold`,
				"__SF-UI-Text-Condensed-Heavy__": `.SFNSTextCondensed-Heavy|.SFUITextCondensed-Heavy`,
				"__SF-Compact-Rounded-Regular__": `SFCompactRounded-Regular|.SFCompactRounded-Regular`,
				"__SF-Compact-Rounded-Ultralight__": `SFCompactRounded-Ultralight|.SFCompactRounded-Ultralight`,
				"__SF-Compact-Rounded-Thin__": `SFCompactRounded-Thin|.SFCompactRounded-Thin`,
				"__SF-Compact-Rounded-Light__": `SFCompactRounded-Light|.SFCompactRounded-Light`,
				"__SF-Compact-Rounded-Medium__": `SFCompactRounded-Medium|.SFCompactRounded-Medium`,
				"__SF-Compact-Rounded-Semibold__": `SFCompactRounded-Semibold|.SFCompactRounded-Semibold`,
				"__SF-Compact-Rounded-Bold__": `SFCompactRounded-Bold|.SFCompactRounded-Bold`,
				"__SF-Compact-Rounded-Heavy__": `SFCompactRounded-Heavy|.SFCompactRounded-Heavy`,
				"__SF-Compact-Rounded-Black__": `SFCompactRounded-Black|.SFCompactRounded-Black`,
			}),
			(aD = rD),
			(oD = `System Default`),
			(sD = class {
				constructor() {
					(I(this, `name`, `local`),
						I(this, `fontFamilies`, []),
						I(this, `byFamilyName`, new Map()),
						I(this, `fontAliasBySelector`, new Map()),
						I(this, `fontAliases`, new Map()));
				}
				getFontFamilyByName(e) {
					return this.byFamilyName.get(e) ?? null;
				}
				createFontFamily(e) {
					let t = { name: e, fonts: [], source: this.name };
					return (this.addFontFamily(t), t);
				}
				addFontFamily(e) {
					(this.fontFamilies.push(e),
						this.byFamilyName.set(e.name, e));
				}
				importFonts() {
					let e = [];
					for (let t of Object.keys(aD)) {
						let n = aD[t];
						if (!n) continue;
						let r = this.createFontFamily(t);
						for (let e of Object.keys(n)) {
							let t = n[e];
							if (!t) continue;
							let { selector: i, weight: a } = t,
								o = {
									variant: e,
									selector: i,
									weight: a,
									family: r,
									cssFamilyName: r.name,
								};
							r.fonts.push(o);
						}
						e.push(...r.fonts);
					}
					for (let [e, t] of Object.entries(iD))
						this.addFontAlias(e, t);
					let { fontFamily: t, aliases: n } =
						this.getSystemFontFamily();
					this.addFontFamily(t);
					for (let [e, t] of n) this.addFontAlias(e, t);
					return (e.push(...t.fonts), e);
				}
				addFontAlias(e, t) {
					(this.fontAliases.set(e, t),
						this.fontAliasBySelector.set(t, e));
				}
				getSystemFontFamily() {
					let e = { name: oD, fonts: [], source: this.name },
						t = new Map(),
						n = [400, 100, 200, 300, 500, 600, 700, 800, 900];
					for (let r of [`normal`, `italic`])
						for (let i of n) {
							let n = om(i, r),
								a = `__SystemDefault-${i}-${r}__`,
								o = {
									variant: n,
									selector: a,
									style: r,
									weight: i,
									family: e,
									cssFamilyName: e.name,
								};
							(e.fonts.push(o),
								t.set(
									a,
									`system-ui|-apple-system|BlinkMacSystemFont|Segoe UI|Roboto|Oxygen|Ubuntu|Cantarell|Fira Sans|Droid Sans|Helvetica Neue|sans-serif`,
								));
						}
					return { fontFamily: e, aliases: t };
				}
				getFontAliasBySelector(e) {
					return this.fontAliasBySelector.get(e) || null;
				}
				getFontSelectorByAlias(e) {
					return this.fontAliases.get(e) || null;
				}
				isFontFamilyAlias(e) {
					return !!(e && /^__.*__$/u.exec(e));
				}
			}),
			(cD = {
				100: `Thin`,
				200: `Extra Light`,
				300: `Light`,
				400: `Normal`,
				500: `Medium`,
				600: `Semi Bold`,
				700: `Bold`,
				800: `Extra Bold`,
				900: `Black`,
			}),
			(lD = class extends Map {
				constructor() {
					(super(...arguments), I(this, `_hash`, 0));
				}
				get hash() {
					return this._hash;
				}
				set(e, t) {
					return (this._hash++, super.set(e, t));
				}
				delete(e) {
					return (this._hash++, super.delete(e));
				}
				clear() {
					return (this._hash++, super.clear());
				}
			}),
			(dD = `Variable`),
			(fD = `BI;`),
			(pD = class {
				constructor() {
					(I(this, `name`, `builtIn`),
						I(this, `fontFamilies`, []),
						I(this, `byFamilyName`, new Map()),
						I(this, `assetByKey`, new Map()));
				}
				importFonts(e) {
					((this.fontFamilies.length = 0),
						this.byFamilyName.clear(),
						this.assetByKey.clear());
					let t = [];
					for (let n of e) {
						if (!this.isValidBuiltInFont(n)) continue;
						let { properties: e } = n,
							r = e.font.fontFamily,
							i = this.createFontFamily(
								r,
								e.font.foundryName,
								e.font.fontVersion,
							),
							a = e.font.openTypeData,
							o = e.font.variationAxes,
							s = Array.isArray(o),
							c = s
								? `variable`
								: e.font.fontSubFamily || `regular`,
							l = dm(n),
							u = {
								assetKey: n.key,
								family: i,
								selector: this.createSelector(
									r,
									c,
									e.font.fontVersion,
								),
								variant: c,
								file: l,
								hasOpenTypeFeatures: mm(a),
								variationAxes: hm(o),
								category: e.font.fontCategory,
								weight: vm(c),
								style: bm(c),
								cssFamilyName: fm(r, s),
							};
						(i.fonts.push(u),
							this.assetByKey.set(n.key, n),
							t.push(u));
					}
					for (let e of this.fontFamilies)
						e.fonts.sort((e, t) => {
							let n = vm(e.variant),
								r = vm(t.variant);
							return !n || !r ? 1 : n - r;
						});
					return t;
				}
				static parseVariant(e) {
					return { weight: mD[ym(e)], style: bm(e) };
				}
				getFontBySelector(e) {
					let t = this.parseSelector(e);
					if (!t) return;
					let n = this.getFontFamilyByName(t.name);
					if (n) return n.fonts.find((t) => t.selector === e);
				}
				getFontFamilyByName(e) {
					return this.byFamilyName.get(e) ?? null;
				}
				createFontFamily(e, t, n) {
					let r = this.byFamilyName.get(e);
					if (r && r.version === n) return r;
					let i = {
						source: this.name,
						name: e,
						fonts: [],
						foundryName: t,
						version: n,
					};
					return (this.addFontFamily(i), i);
				}
				getOpenTypeFeatures(e) {
					B(e.assetKey, `Font must have an asset key`);
					let t = this.assetByKey.get(e.assetKey)?.properties?.font
						?.openTypeData;
					return mm(t)
						? t?.map((e) => {
								if (gm(e))
									return { tag: e.tag, coverage: e.coverage };
							})
						: [];
				}
				isValidBuiltInFont(e) {
					return !e.mimeType.startsWith(`font/`) ||
						e.properties?.kind !== `font` ||
						!e.properties.font ||
						!e.properties.font.fontVersion ||
						!e.properties.font.fontFamily
						? !1
						: `fontFamily` in e.properties.font;
				}
				createSelector(e, t, n) {
					return `${fD}${e}/${t}/${n}`;
				}
				parseSelector(e) {
					if (!e.startsWith(fD)) return null;
					let [t, n] = e.split(fD);
					if (n === void 0) return null;
					let [r, i, a] = n.split(`/`);
					return !r || !i || !a
						? null
						: {
								name: r,
								variant: i,
								source: this.name,
								isVariable: i
									.toLowerCase()
									.includes(`variable`),
							};
				}
				addFontFamily(e) {
					(this.fontFamilies.push(e),
						this.byFamilyName.set(e.name, e));
				}
			}),
			(mD = {
				ultralight: 100,
				"ultralight-italic": 100,
				thin: 200,
				"thin-italic": 200,
				demi: 200,
				light: 300,
				"light-italic": 300,
				normal: 350,
				base: 400,
				regular: 400,
				classic: 400,
				"regular-slanted": 400,
				italic: 400,
				oblique: 400,
				dense: 400,
				brukt: 300,
				book: 400,
				"book-italic": 400,
				text: 400,
				"text-italic": 400,
				medium: 500,
				solid: 500,
				"medium-oblique": 500,
				"medium-italic": 500,
				mittel: 500,
				semibold: 600,
				"semibold-italic": 600,
				bold: 700,
				"bold-italic": 700,
				"bold-oblique": 700,
				fett: 700,
				ultrabold: 800,
				"ultrabold-italic": 800,
				extrabold: 800,
				"extrabold-italic": 800,
				black: 900,
				extralight: 100,
				"extralight-italic": 100,
				"black-italic": 900,
				"extra-italic": 900,
				"extra-italic-bold": 900,
				satt: 900,
				heavy: 900,
				"heavy-italic": 900,
				serif: 100,
				school: 200,
				expanded: 300,
				gothique: 500,
				"dense-light": 200,
				"dense-regular": 300,
				"dense-medium": 400,
				"dense-bold": 500,
				"solid-light": 600,
				"solid-regular": 700,
				"solid-medium": 800,
				"solid-bold": 900,
				53: 400,
				55: 600,
				"narrow-regular": 350,
				"narrow-black": 850,
				variable: 1e3,
				"variable-italic": 1e3,
			}),
			(hD = Jd(`custom-font-source`)),
			(gD = `CUSTOM;`),
			(_D = `CUSTOMV2;`),
			(vD = class e {
				constructor() {
					(I(this, `name`, `custom`),
						I(this, `fontFamilies`, []),
						I(this, `byFamilyName`, new Map()),
						I(this, `assetsByKey`, new Map()));
				}
				deprecatedImportFonts(t) {
					((this.fontFamilies.length = 0),
						this.byFamilyName.clear(),
						this.assetsByKey.clear());
					let n = [];
					for (let r of t) {
						if (!this.isValidCustomFontAsset(r)) continue;
						let t = r.properties?.font.variationAxes,
							i = Array.isArray(t),
							a = km(r.properties),
							o = this.createFontFamily(a),
							s = r.properties?.font.openTypeData,
							c = i ? `variable` : this.inferVariantName(a),
							l = dm(r),
							u = e.createLegacySelector(a),
							{ family: d, variant: f } = Am(r.properties.font),
							p = e.createSelector(d, f),
							m = {
								assetKey: r.key,
								family: o,
								selector: u,
								variant: c,
								file: l,
								hasOpenTypeFeatures: mm(s),
								variationAxes: hm(t),
								owner: Nm(r),
								cssFamilyName: e.cssFontFamilyFromSelector(u),
								alternativeSelectors: {
									[p]: {
										variant: f,
										cssFamilyName:
											e.cssFontFamilyFromSelector(p),
									},
								},
							};
						(o.fonts.push(m),
							this.assetsByKey.set(r.key, r),
							n.push(...o.fonts));
					}
					return n;
				}
				importFonts(t, n) {
					if (!n) return this.deprecatedImportFonts(t);
					((this.fontFamilies.length = 0),
						this.byFamilyName.clear(),
						this.assetsByKey.clear());
					let r = {};
					for (let n of t) {
						if (!this.isValidCustomFontAsset(n)) continue;
						let {
								family: t,
								variant: i,
								weight: a,
								style: o,
							} = Am(n.properties.font),
							s = n.properties.font.variationAxes,
							c = Array.isArray(s),
							l = n.properties.font.openTypeData,
							u = dm(n),
							d = Nm(n),
							f = km(n.properties),
							p = e.createLegacySelector(f),
							m = this.createFontFamily(t),
							h = e.createSelector(m.name, i),
							g = {
								assetKey: n.key,
								family: m,
								selector: h,
								variant: i,
								weight: a,
								style: o,
								file: u,
								hasOpenTypeFeatures: mm(l),
								variationAxes: hm(s),
								owner: d,
								alternativeSelectors: {
									[p]: {
										variant: c
											? `variable`
											: this.inferVariantName(f),
										cssFamilyName:
											e.cssFontFamilyFromSelector(p),
									},
								},
								cssFamilyName: e.cssFontFamilyFromSelector(h),
							},
							_ = Om(m.fonts, g);
						if (_?.projectDuplicate)
							g.owner === `project` &&
								((m.fonts[_.index] = g), (r[h] = g));
						else if (_) {
							hD.debug(
								`Duplicate font found for:`,
								g,
								`with existing font:`,
								_.existingFont,
							);
							let e = _.existingFont,
								t = g.file?.endsWith(`.woff2`) ?? !1,
								n = e.file?.endsWith(`.woff2`) ?? !1;
							t && !n && ((m.fonts[_.index] = g), (r[h] = g));
						} else (m.fonts.push(g), (r[h] = g));
						this.assetsByKey.set(n.key, n);
					}
					for (let e of this.fontFamilies)
						e.fonts.length > 0 && Mm(e);
					return Object.values(r);
				}
				static createSelector(e, t) {
					return `${_D}${e}${t ? ` ${t}` : ``}`;
				}
				static createLegacySelector(e) {
					return `${gD}${e}`;
				}
				static cssFontFamilyFromSelector(e) {
					return (
						B(Tm(e), `Selector must be a custom font selector`),
						Dm(e) ? e.slice(gD.length) : e.slice(_D.length)
					);
				}
				isValidCustomFontAsset(e) {
					return !e.mimeType.startsWith(`font/`) ||
						e.properties?.kind !== `font` ||
						!e.properties.font
						? !1
						: `fontFamily` in e.properties.font;
				}
				getOpenTypeFeatures(e) {
					B(e.assetKey, `Font must have an asset key`);
					let t = this.assetsByKey.get(e.assetKey)?.properties?.font
						?.openTypeData;
					return mm(t)
						? t?.map((e) => {
								if (gm(e))
									return { tag: e.tag, coverage: e.coverage };
							})
						: [];
				}
				inferVariantName(e) {
					let t = [
							`thin`,
							`ultra light`,
							`extra light`,
							`light`,
							`normal`,
							`medium`,
							`semi bold`,
							`bold`,
							`extra bold`,
							`black`,
						],
						n = [...t.map((e) => `${e} italic`), ...t],
						r = e.toLowerCase(),
						i = [...r.split(` `), ...r.split(`-`), ...r.split(`_`)],
						a = n.find(
							(e) =>
								i.includes(e) ||
								i.includes(e.replace(/\s+/gu, ``)),
						);
					return a
						? a.replace(/^\w|\s\w/gu, (e) => e.toUpperCase())
						: `Regular`;
				}
				createFontFamily(e) {
					let t = this.byFamilyName.get(e);
					if (t) return t;
					let n = { source: this.name, name: e, fonts: [] };
					return (this.addFontFamily(n), n);
				}
				addFontFamily(e) {
					(this.fontFamilies.push(e),
						this.byFamilyName.set(e.name, e));
				}
				getFontFamilyByName(e) {
					return this.byFamilyName.get(e) || null;
				}
			}),
			(yD = [
				`display`,
				`sans`,
				`serif`,
				`slab`,
				`handwritten`,
				`script`,
			]),
			(bD = `FS;`),
			(xD = {
				thin: 100,
				hairline: 100,
				extralight: 200,
				light: 300,
				regular: 400,
				medium: 500,
				semibold: 600,
				bold: 700,
				extrabold: 800,
				ultra: 800,
				black: 900,
				heavy: 900,
			}),
			(SD = Object.keys(xD)),
			(CD = (() =>
				RegExp(
					`^(?:${[...SD, `italic`, `variable`].join(`|`)})`,
					`u`,
				))()),
			(wD = class e {
				constructor() {
					(I(this, `name`, `fontshare`),
						I(this, `fontFamilies`, []),
						I(this, `byFamilyName`, new Map()));
				}
				getFontFamilyByName(e) {
					return this.byFamilyName.get(e) ?? null;
				}
				static parseVariant(e) {
					let t = e.toLowerCase().split(` `),
						n = SD.find((e) => t.includes(e)),
						r = e.toLowerCase().includes(`italic`)
							? `italic`
							: `normal`;
					return {
						weight: (n && xD[n]) || 400,
						style: r === `italic` ? r : `normal`,
					};
				}
				parseSelector(e) {
					if (!e.startsWith(bD)) return null;
					let t = e.split(`-`);
					if (t.length !== 2) return null;
					let [n, r] = t;
					return !n || !r
						? null
						: {
								name: n.replace(bD, ``),
								variant: r,
								source: this.name,
								isVariable: r
									.toLowerCase()
									.includes(`variable`),
							};
				}
				static createSelector(e, t) {
					return `${bD}${e}-${t.toLowerCase()}`;
				}
				static createMetadataSelector(e) {
					return `${bD}${e}`;
				}
				addFontFamily(e) {
					(this.fontFamilies.push(e),
						this.byFamilyName.set(e.name, e));
				}
				async importFonts(t, n) {
					((this.fontFamilies.length = 0), this.byFamilyName.clear());
					let r = await Pm(`fontshare`),
						i = [];
					for (let a of t) {
						let t = a.font_styles
								.filter((e) => {
									let t = e.name.toLowerCase();
									return !(
										!CD.exec(t) ||
										t.split(` `).includes(`wide`)
									);
								})
								.map((t) => ({
									...e.parseVariant(t.name),
									selector: e.createSelector(a.name, t.name),
									isVariable: t.is_variable,
									fontshareVariantName: t.name,
									file: t.file,
								})),
							o = e.createMetadataSelector(a.name),
							s = n?.[o],
							c = a.name,
							l = this.getFontFamilyByName(c);
						l ||
							((l = { name: c, fonts: [], source: this.name }),
							this.addFontFamily(l));
						let u = r[e.createMetadataSelector(a.name)];
						for (let e of t) {
							let {
									variantBold: n,
									variantBoldItalic: r,
									variantItalic: o,
									variantVariable: c,
									variantVariableItalic: d,
								} = xm(e, t),
								f = {
									family: l,
									variant:
										e.fontshareVariantName.toLowerCase(),
									selector: e.selector,
									selectorBold: n?.selector,
									selectorBoldItalic: r?.selector,
									selectorItalic: o?.selector,
									selectorVariable: c?.selector,
									selectorVariableItalic: d?.selector,
									weight: e.weight,
									style: e.style,
									file: e.file,
									category: Rm(a.category),
									hasOpenTypeFeatures: u,
									variationAxes: e.isVariable ? s : void 0,
									cssFamilyName: fm(l.name, e.isVariable),
								};
							(l.fonts.push(f), i.push(f));
						}
					}
					return i;
				}
				async getOpenTypeFeatures(t) {
					return (await Fm(`fontshare`))[
						e.createMetadataSelector(t.family.name)
					];
				}
			}),
			(TD = `Inter`),
			(ED = `FR;`),
			(DD = {
				Thin: 100,
				ExtraLight: 200,
				Light: 300,
				"": 400,
				Medium: 500,
				SemiBold: 600,
				Bold: 700,
				ExtraBold: 800,
				Black: 900,
			}),
			(OD = class e {
				constructor() {
					(I(this, `name`, `framer`),
						I(this, `fontFamilies`, []),
						I(this, `byFamilyName`, new Map()));
				}
				getFontFamilyByName(e) {
					return this.byFamilyName.get(e) ?? null;
				}
				addFontFamily(e) {
					let t = { name: e, fonts: [], source: this.name };
					return (
						this.fontFamilies.push(t),
						this.byFamilyName.set(t.name, t),
						t
					);
				}
				static getDraftFontPropertiesBySelector(e) {
					if (!e.startsWith(ED) && !e.startsWith(TD)) return null;
					let [t, n = ``] = e.split(`-`);
					if (!t) return null;
					let r = n.includes(`Italic`) ? `italic` : `normal`,
						i = n.replace(`Italic`, ``);
					return {
						cssFamilyName: t,
						style: r,
						weight: (i && DD[i]) || 400,
						source: `framer`,
						variant: void 0,
						category: `sans-serif`,
					};
				}
				static createMetadataSelector(e) {
					return `${ED}${e}`;
				}
				importFonts(t, n) {
					((this.fontFamilies.length = 0), this.byFamilyName.clear());
					let r = [];
					return (
						t.forEach((t) => {
							let { uiFamilyName: i, ...a } = t,
								o = e.createMetadataSelector(t.uiFamilyName),
								s = n?.[o],
								c = this.getFontFamilyByName(i);
							c ||= this.addFontFamily(i);
							let l =
									t.selector === t.selectorVariable ||
									t.selector === t.selectorVariableItalic,
								u = {
									...a,
									family: c,
									variationAxes: l ? s : void 0,
								};
							(c.fonts.push(u), r.push(u));
						}),
						r
					);
				}
				async getOpenTypeFeatures(t) {
					return (await Fm(`framer`))[
						e.createMetadataSelector(t.family.name)
					];
				}
			}),
			(kD = `GF;`),
			(AD = class e {
				constructor() {
					(I(this, `name`, `google`),
						I(this, `fontFamilies`, []),
						I(this, `byFamilyName`, new Map()));
				}
				getFontFamilyByName(e) {
					return this.byFamilyName.get(e) ?? null;
				}
				static parseVariant(e) {
					if (e === `regular`)
						return { style: `normal`, weight: 400 };
					let t = /(\d*)(normal|italic)?/u.exec(e);
					return t
						? {
								weight: parseInt(t[1] || `400`),
								style: t[2] === `italic` ? `italic` : `normal`,
							}
						: {};
				}
				parseSelector(e) {
					if (!e.startsWith(kD)) return null;
					let t = e.includes(`-variable-`),
						n = t ? e.split(`-variable-`) : e.split(`-`);
					if (n.length !== 2) return null;
					let [r, i] = n;
					return !r || !i
						? null
						: {
								name: r.replace(kD, ``),
								variant: i,
								source: this.name,
								isVariable: t,
							};
				}
				static createSelector(e, t, n) {
					return `${kD}${e}-${n ? `variable-` : ``}${t}`;
				}
				static createMetadataSelector(e) {
					return `${kD}${e}`;
				}
				addFontFamily(e) {
					let t = { name: e, fonts: [], source: this.name };
					return (
						this.fontFamilies.push(t),
						this.byFamilyName.set(t.name, t),
						t
					);
				}
				async importFonts(t, n, r) {
					((this.fontFamilies.length = 0), this.byFamilyName.clear());
					let i = await Pm(`google`),
						a = [],
						o = Bm(t, (e) => e.family),
						s = Bm(n, (e) => e.family);
					for (let t in o) {
						let n = o[t];
						if (!n) continue;
						let c = this.getFontFamilyByName(n.family);
						c ||= this.addFontFamily(n.family);
						let l = n.variants.map((r) => ({
								...e.parseVariant(r),
								googleFontsVariantName: r,
								selector: e.createSelector(t, r, !1),
								isVariable: !1,
								file: n.files[r],
							})),
							u = s[t],
							d = u?.axes
								? u.variants.map((n) => ({
										...e.parseVariant(n),
										googleFontsVariantName: n,
										selector: e.createSelector(t, n, !0),
										isVariable: !0,
										file: u.files[n],
									}))
								: [],
							f = e.createMetadataSelector(n.family),
							p = r?.[f],
							m = [...l, ...d],
							h = m.filter(am),
							g = i[e.createMetadataSelector(t)];
						for (let e of m) {
							let {
									weight: t,
									style: r,
									selector: i,
									googleFontsVariantName: o,
								} = e,
								{
									variantBold: s,
									variantItalic: l,
									variantBoldItalic: u,
									variantVariable: d,
									variantVariableItalic: f,
								} = (am(e) ? xm(e, h) : void 0) ?? {},
								m = {
									family: c,
									variant: o,
									selector: i,
									selectorBold: s?.selector,
									selectorBoldItalic: u?.selector,
									selectorItalic: l?.selector,
									selectorVariable: d?.selector,
									selectorVariableItalic: f?.selector,
									weight: t,
									style: r,
									category: zm(n.category),
									file: e.file?.replace(
										`http://`,
										`https://`,
									),
									variationAxes: e.isVariable ? p : void 0,
									hasOpenTypeFeatures: g,
									cssFamilyName: fm(c.name, e.isVariable),
								};
							(c.fonts.push(m), a.push(m));
						}
					}
					return a;
				}
				async getOpenTypeFeatures(t) {
					return (await Fm(`google`))[
						e.createMetadataSelector(t.family.name)
					];
				}
			}),
			(jD = Ue(yg(), 1)),
			(MD = 5e3),
			(ND = 3),
			(PD = class extends Error {
				constructor(e) {
					(super(e), (this.name = `FontLoadingError`));
				}
			}),
			(FD = new Map()),
			(ID = new Map()),
			(LD = (e, t) => Vm(e, t)),
			(RD = {
				"FR;Inter": [
					{
						tag: `opsz`,
						minValue: 14,
						maxValue: 32,
						defaultValue: 14,
						name: `Optical size`,
					},
					{
						tag: `wght`,
						minValue: 100,
						maxValue: 900,
						defaultValue: 400,
						name: `Weight`,
					},
				],
			}),
			(zD = class {
				constructor() {
					(I(this, `enabled`, !1),
						I(this, `bySelector`, new lD()),
						I(this, `loadedSelectors`, new Set()),
						I(this, `getGoogleFontsListPromise`),
						I(this, `getFontshareFontsListPromise`),
						I(this, `getBuiltInFontsListPromise`),
						I(
							this,
							`customFontsImportPromise`,
							new Promise((e) => {
								this.resolveCustomFontsImportPromise = e;
							}),
						),
						I(this, `local`),
						I(this, `google`),
						I(this, `fontshare`),
						I(this, `builtIn`),
						I(this, `framer`),
						I(this, `custom`),
						I(this, `bySelectorValuesCache`),
						I(this, `testing`, {
							addFont: this.addFont.bind(this),
						}),
						(this.local = new sD()),
						(this.google = new AD()),
						(this.fontshare = new wD()),
						(this.framer = new OD()),
						(this.custom = new vD()),
						(this.builtIn = new pD()),
						this.importLocalFonts());
				}
				get hash() {
					return this.bySelector.hash;
				}
				addFont(e) {
					if (
						(this.bySelector.set(e.selector, e),
						e.alternativeSelectors)
					)
						for (let t of Object.keys(e.alternativeSelectors))
							this.bySelector.set(t, e);
				}
				getAvailableFonts() {
					if (
						!this.bySelectorValuesCache ||
						this.bySelectorValuesCache.hash !== this.bySelector.hash
					) {
						let e = new Map();
						for (let t of this.bySelector.values()) e.set(t, !0);
						this.bySelectorValuesCache = {
							result: Array.from(e.keys()),
							hash: this.bySelector.hash,
						};
					}
					return this.bySelectorValuesCache.result;
				}
				importLocalFonts() {
					for (let e of this.local.importFonts())
						(this.addFont(e), this.loadFont(e.selector));
				}
				async importGoogleFonts() {
					return (
						(this.getGoogleFontsListPromise ||=
							Promise.resolve().then(async () => {
								let { staticFonts: e, variableFonts: t } =
										await tx.fetchGoogleFontsList(),
									n = await Um(`google`);
								for (let r of await this.google.importFonts(
									e,
									t,
									n,
								))
									this.addFont(r);
								return { staticFonts: e, variableFonts: t };
							})),
						this.getGoogleFontsListPromise
					);
				}
				async importFontshareFonts() {
					if (!this.getFontshareFontsListPromise) {
						this.getFontshareFontsListPromise =
							tx.fetchFontshareFontsList();
						let e = await this.getFontshareFontsListPromise,
							t = await Um(`fontshare`);
						for (let n of await this.fontshare.importFonts(e, t))
							this.addFont(n);
					}
					return this.getFontshareFontsListPromise;
				}
				async importAllWebFonts() {
					await Promise.all([
						this.importGoogleFonts(),
						this.importFontshareFonts(),
						this.importBuiltInFonts(),
					]);
				}
				async importBuiltInFonts() {
					if (!this.getBuiltInFontsListPromise) {
						this.getBuiltInFontsListPromise =
							tx.fetchBuiltInFontsList();
						let e = await this.getBuiltInFontsListPromise;
						for (let t of await this.builtIn.importFonts(e))
							this.addFont(t);
					}
					return this.getBuiltInFontsListPromise;
				}
				importFramerFonts(e) {
					let t = Um(`framer`);
					this.framer.importFonts(e, t).forEach((e) => {
						this.addFont(e);
					});
				}
				importCustomFonts(e, t) {
					this.bySelector.forEach((e, t) => {
						Tm(t) && this.bySelector.delete(t);
					});
					let n = this.custom.importFonts(e, t);
					for (let e of n) this.addFont(e);
					this.resolveCustomFontsImportPromise();
				}
				getCustomFontsImportPromise() {
					return this.customFontsImportPromise;
				}
				getFontFamily(e) {
					return this[e.source].getFontFamilyByName(e.name);
				}
				getFontBySelector(e) {
					if (!e) return;
					let t;
					if (((t = this.bySelector.get(e)), t))
						return t.alternativeSelectors &&
							e in t.alternativeSelectors
							? { ...t, ...t.alternativeSelectors[e] }
							: t;
				}
				getDraftPropertiesBySelector(e) {
					let t = this.getFontBySelector(e);
					if (t)
						return {
							style: t.style,
							weight: t.weight,
							variant: t.variant,
							cssFamilyName: t.cssFamilyName,
							source: t.family.source,
							category: t.category,
						};
					let n = this.google.parseSelector(e);
					if (n) {
						let e = AD.parseVariant(n.variant);
						if (am(e))
							return {
								style: e.style,
								weight: e.weight,
								variant: n.variant,
								cssFamilyName: pm(n, `google`),
								source: `google`,
								category: void 0,
							};
					}
					let r = this.fontshare.parseSelector(e);
					if (r) {
						let e = wD.parseVariant(r.variant);
						if (am(e))
							return {
								style: e.style,
								weight: e.weight,
								variant: r.variant,
								cssFamilyName: pm(r, `fontshare`),
								source: `fontshare`,
								category: void 0,
							};
					}
					let i = this.builtIn.parseSelector(e);
					if (i) {
						let e = pD.parseVariant(i.variant);
						if (am(e))
							return {
								style: e.style,
								weight: e.weight,
								variant: i.variant,
								cssFamilyName: pm(i, `builtIn`),
								source: `builtIn`,
								category: void 0,
							};
					}
					return OD.getDraftFontPropertiesBySelector(e) || null;
				}
				isSelectorLoaded(e) {
					return this.loadedSelectors.has(e);
				}
				async loadFont(e) {
					let t = this.getFontBySelector(e);
					if (!t) return 2;
					if (this.loadedSelectors.has(e)) return 0;
					let n = t.cssFamilyName,
						r = t.family.source,
						i = wm(t);
					switch (r) {
						case `local`:
							return (this.loadedSelectors.add(e), 1);
						case `framer`:
							if (
								(za() ||
									(await Hm(
										t.family.name,
										t.style,
										t.weight,
									)),
								i)
							) {
								if (!t.file)
									return Promise.reject(
										`Unable to load font: ${e}`,
									);
								await LD(
									{
										family: n,
										url: t.file,
										weight: t.weight,
										style: t.style,
									},
									document,
								);
							}
							return (this.loadedSelectors.add(e), 1);
						case `google`:
						case `fontshare`:
						case `builtIn`:
						case `custom`:
							return t.file
								? (await LD(
										{
											family: n,
											url: t.file,
											weight: t.weight,
											style: t.style,
										},
										document,
									),
									this.loadedSelectors.add(e),
									1)
								: Promise.reject(`Unable to load font: ${e}`);
						default:
							V(r);
					}
				}
				async loadFontsFromSelectors(e) {
					if (!this.enabled) return [];
					let t = [];
					(e.some((e) => e.startsWith(bD)) &&
						t.push(
							this.importFontshareFonts().catch((e) => {
								ri(`Failed to load Fontshare fonts:`, e);
							}),
						),
						e.some((e) => e.startsWith(kD)) &&
							t.push(
								this.importGoogleFonts().catch((e) => {
									ri(`Failed to load Google fonts:`, e);
								}),
							),
						e.some((e) => e.startsWith(fD)) &&
							t.push(
								this.importBuiltInFonts().catch((e) => {
									ri(`Failed to load built-in fonts:`, e);
								}),
							),
						e.some(Tm) &&
							t.push(
								this.customFontsImportPromise.catch((e) => {
									ri(`Failed to load custom fonts:`, e);
								}),
							),
						t.length > 0 && (await Promise.all(t)));
					let n = [];
					for (let t of e) n.push(this.loadFont(t));
					return Promise.allSettled(n);
				}
				async loadFonts(e) {
					return {
						newlyLoadedFontCount: (
							await this.loadFontsFromSelectors(e)
						).filter(
							(e) => e.status === `fulfilled` && e.value === 1,
						).length,
					};
				}
				async loadMissingFonts(e, t) {
					let n = e.filter((e) => !FontLoader.loadedSelectors.has(e));
					n.length !== 0 &&
						(await FontLoader.loadWebFontsFromSelectors(n),
						n.every((e) => FontLoader.loadedSelectors.has(e)) && t && t());
				}
				async loadWebFontsFromSelectors(e) {
					return this.loadFontsFromSelectors(e);
				}
				get defaultFont() {
					let e = this.getFontBySelector(`Inter`);
					return (B(e, `Can’t find Inter font`), e);
				}
			}),
			(FontLoader = new zD()),
			(VD = (e) => e.target.value),
			(HD = {
				"data-1p-ignore": !0,
				"data-lpignore": !0,
				"data-form-type": `other`,
				autocomplete: `off`,
			}),
			(UD = b(function (e, t) {
				let {
						autoFocus: n,
						className: r,
						inputName: i,
						max: a,
						min: o,
						placeholder: s,
						required: c,
						step: u,
						style: d,
						type: f,
						maxLength: p,
						value: m,
						defaultValue: g,
						autofillEnabled: v,
						onChange: y,
						onBlur: b,
						onInvalid: x,
						onFocus: S,
						onValid: C,
						onClear: w,
						...E
					} = e,
					D = Jm(m ?? g, f),
					[O, k, A] = qm(D ?? ``, !0, y),
					j = jr(D),
					ee = l(() => {
						(k(``), w && h(() => w()));
					}, [w, k]),
					te = Xa(C, x, A, b, S),
					ne = l(
						(e) => {
							e.target === e.currentTarget && j.current?.focus();
						},
						[j],
					);
				if (f === `hidden`)
					return _(P.input, {
						type: `hidden`,
						name: i,
						defaultValue: g,
					});
				let M = v === !1 ? HD : void 0,
					re = !!O,
					ie = !!w && re,
					ae = Uc(
						WD,
						By,
						r,
						f === `text` && GD,
						f === `textarea` && KD,
					);
				return T(P.div, {
					ref: t,
					onClick: ne,
					style: d,
					className: ae,
					...E,
					children: [
						f === `textarea`
							? _(P.textarea, {
									ref: j,
									...M,
									...te,
									required: c,
									autoFocus: n,
									name: i,
									placeholder: s,
									className: zy,
									value: O,
									maxLength: p,
								})
							: _(P.input, {
									ref: j,
									...M,
									...te,
									type: f,
									required: c,
									autoFocus: n,
									name: i,
									placeholder: s,
									className: Uc(zy, !re && Vy),
									value: O,
									min: o,
									max: a,
									step: u,
									maxLength: p,
								}),
						ie &&
							_(`button`, {
								type: `button`,
								className: qD,
								onClick: ee,
								"aria-label": `Clear`,
								children: _(Ym, {}),
							}),
					],
				});
			})),
			(WD = `framer-form-text-input`),
			(GD = `framer-form-text-input-type`),
			(KD = `framer-form-textarea-input-type`),
			(qD = `framer-form-text-input-clear`),
			(JD = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
			(YD = `<svg xmlns="http://www.w3.org/2000/svg" transform="scale(-1, 1)" width="14" height="14"><path d="m1.5 8 7-7M9 5.5l-3 3" stroke="%23999" stroke-width="1.5" stroke-linecap="round"></path></svg>`),
			(XD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="rgb(153, 153, 153)" d="M3 5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H3Z" opacity=".3"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M3.25 5.25a2 2 0 0 1 2-2h5.5a2 2 0 0 1 2 2v5.5a2 2 0 0 1-2 2h-5.5a2 2 0 0 1-2-2ZM3 6.75h9.5"/></svg>`),
			(ZD = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-width="1.5" d="M2.5 8a5.5 5.5 0 1 1 11 0 5.5 5.5 0 1 1-11 0Z"/><path fill="transparent" stroke="rgb(153, 153, 153)" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M7.75 8.25v-3m0 3h2"/></svg>`),
			(QD = jy(
				UD,
				(() => [
					...Uy,
					...Ky,
					...Wy,
					Z(`.${By}`, {
						boxShadow: Z.variable(`--framer-input-box-shadow`),
						borderTopLeftRadius: Z.variable(
							`--framer-input-border-radius-top-left`,
						),
						borderTopRightRadius: Z.variable(
							`--framer-input-border-radius-top-right`,
						),
						borderBottomRightRadius: Z.variable(
							`--framer-input-border-radius-bottom-right`,
						),
						borderBottomLeftRadius: Z.variable(
							`--framer-input-border-radius-bottom-left`,
						),
						cornerShape: Z.variable(`--framer-input-corner-shape`),
						background: Z.variable(`--framer-input-background`),
						transition: Z.variable(
							`--framer-input-focused-transition`,
						),
						transitionProperty: `background, box-shadow`,
					}),
					Z(`.${WD} .${zy}::placeholder`, {
						color: Z.variable(`--framer-input-placeholder-color`),
					}),
					Z(`.${WD}`, {
						display: `flex`,
						alignItems: `center`,
						padding: Z.variable(`--framer-input-padding`),
					}),
					Z(`.${WD} .${zy}`, {
						flex: 1,
						minWidth: 0,
						width: `auto`,
						padding: 0,
					}),
					Z(`.${WD}.${KD}`, { padding: 0 }),
					Z(`.${WD}.${KD} textarea.${zy}`, {
						width: `100%`,
						padding: Z.variable(`--framer-input-padding`),
					}),
					Z(
						`.${WD} .${zy}[type="date"], .${WD} .${zy}[type="time"]`,
						{ "-webkit-appearance": `none`, appearance: `none` },
					),
					Z(`.${WD} .${zy}::-webkit-date-and-time-value`, {
						textAlign: `start`,
					}),
					Z(`.${WD} textarea`, {
						display: `flex`,
						resize: Z.variable(`--framer-textarea-resize`),
						overflowY: `auto`,
						minHeight: `inherit`,
						maxHeight: `inherit`,
						whiteSpace: `break-spaces`,
					}),
					Z(`.${WD} textarea::-webkit-resizer`, {
						background: `no-repeat ${ct(JD)}`,
					}),
					Z(`.${WD}:dir(rtl) textarea::-webkit-resizer`, {
						background: `no-repeat ${ct(YD)}`,
					}),
					Z(`.${WD} textarea::-webkit-scrollbar`, {
						cursor: `pointer`,
						background: `transparent`,
					}),
					Z(
						`.${WD} textarea::-webkit-scrollbar-thumb:window-inactive`,
						{ opacity: 0 },
					),
					Z(`.${WD} textarea::-webkit-scrollbar-corner`, {
						background: `none`,
						backgroundColor: `transparent`,
						outline: `none`,
					}),
					Z(`.${WD} .${zy}::-webkit-datetime-edit`, {
						height: Z.variable(`--framer-input-font-line-height`),
					}),
					Z(`.${WD} .${zy}.${Vy}::-webkit-datetime-edit`, {
						color: Z.variable(`--framer-input-placeholder-color`),
						"-webkit-text-fill-color": Z.variable(
							`--framer-input-placeholder-color`,
						),
						overflow: `visible`,
					}),
					Z(`.${WD}.${GD}::before`, {
						content: Z.variable(
							`--framer-input-icon-content`,
							`none`,
						),
						display: `block`,
						flexShrink: 0,
						width: `${Zy}px`,
						height: `${Zy}px`,
						marginRight: `${Xy}px`,
						...Qy,
						backgroundPosition: `center`,
						maskPosition: `center`,
						maskImage: Z.variable(`--framer-input-icon-mask-image`),
						backgroundImage: Z.variable(
							`--framer-input-icon-image`,
						),
					}),
					Z(
						`.${WD} .${zy}[type="date"]::before, .${WD} .${zy}[type="time"]::before`,
						{
							...$y,
							paddingLeft: `${Yy}px`,
							maskPosition: `${Yy}px center`,
							backgroundPosition: `${Yy}px center`,
						},
					),
					Z(`.${WD} .${zy}[type="date"]::before`, {
						maskImage: Z.variable(
							`--framer-input-icon-mask-image`,
							ct(XD),
						),
						backgroundImage: Z.variable(
							`--framer-input-icon-image`,
						),
					}),
					Z(`.${WD} .${zy}[type="time"]::before`, {
						maskImage: Z.variable(
							`--framer-input-icon-mask-image`,
							ct(ZD),
						),
						backgroundImage: Z.variable(
							`--framer-input-icon-image`,
						),
					}),
					Z(`.${WD} .${zy}::-webkit-calendar-picker-indicator`, {
						opacity: 0,
						position: `absolute`,
						right: 0,
						top: 0,
						bottom: 0,
						padding: Z.variable(`--framer-input-padding`),
						paddingTop: 0,
						paddingBottom: 0,
						width: `${Zy}px`,
						height: `100%`,
					}),
					Z(`.${WD}:focus-within, .${WD}.${Hy}`, {
						boxShadow: Z.variable(
							`--framer-input-focused-box-shadow`,
							`--framer-input-box-shadow`,
						),
						background: Z.variable(
							`--framer-input-focused-background`,
							`--framer-input-background`,
						),
					}),
					Z(`.${WD}:focus-within::after, .${WD}.${Hy}::after`, {
						borderColor: Z.variable(
							`--framer-input-focused-border-color`,
							`--framer-input-border-color`,
						),
						borderStyle: Z.variable(
							`--framer-input-focused-border-style`,
							`--framer-input-border-style`,
						),
						borderWidth: Z.variable(
							`--framer-input-focused-border-width`,
							Gy,
						),
					}),
					Z(`.${qD}`, {
						display: `flex`,
						order: 2,
						alignItems: `center`,
						justifyContent: `center`,
						flexShrink: 0,
						width: `${Zy}px`,
						height: `${Zy}px`,
						marginLeft: `${Xy}px`,
						padding: 0,
						border: `none`,
						background: `transparent`,
						cursor: `pointer`,
						color: Z.variable(`--framer-input-placeholder-color`),
						transition: `color 0.15s ease`,
						outline: `none`,
					}),
					Z(`.${qD}:hover, .${qD}:focus-visible`, {
						color: Z.variable(`--framer-input-font-color`),
					}),
				])(),
				`framer-lib-form-plain-text-input`,
			)),
			($D = (() => ({
				x: void 0,
				y: void 0,
				z: 0,
				translateX: void 0,
				translateY: void 0,
				translateZ: 0,
				rotate: void 0,
				rotateX: 0,
				rotateY: 0,
				rotateZ: void 0,
				scale: 1,
				scaleX: 1,
				scaleY: 1,
				scaleZ: 1,
				skew: 0,
				skewX: 0,
				skewY: 0,
				originX: void 0,
				originY: void 0,
				originZ: void 0,
				perspective: 0,
				transformPerspective: 0,
			}))()),
			(eO = { opacity: 0 }),
			(tO = { opacity: 1 }),
			(nO = oh(
				f.forwardRef(function (e, t) {
					let {
							background: n,
							children: r,
							alt: i,
							draggable: a,
							fitImageDimension: s,
							style: l,
							...u
						} = e,
						d = { ...l },
						p = c(() => jo(n), [n]),
						[m, h] = o();
					f.useLayoutEffect(() => {
						if (!n?.src || !s || p) return;
						let e = document.createElement(`img`);
						((e.onload = () => {
							e.naturalWidth &&
								e.naturalHeight &&
								h({
									width: e.naturalWidth,
									height: e.naturalHeight,
								});
						}),
							(e.src = n.src));
					}, [n?.src, s, p]);
					let g = p ?? m;
					return (
						s &&
							g &&
							((d[s] = `auto`),
							(d.aspectRatio = g.width / g.height)),
						n && delete d.background,
						T(Mo(e.as), {
							...u,
							style: d,
							ref: t,
							draggable: a,
							children: [
								n && _(Eo, { image: n, alt: i, draggable: a }),
								r,
							],
						})
					);
				}),
			)),
			(iO = (() =>
				!Ia() &&
				typeof Document < `u` &&
				typeof Document.parseHTMLUnsafe == `function`)()),
			(aO =
				/(<([a-z]+)(?:\s+(?!href[\s=])[^=\s]+=(?:'[^']*'|"[^"]*"))*)(?:(\s+href\s*=)(?:'([^']*)'|"([^"]*)"))?((?:\s+[^=\s]+=(?:'[^']*'|"[^"]*"))*>)/gi),
			(oO = `{{ text-placeholder }}`),
			(sO = `rich-text-wrapper`),
			(cO = eo(
				b(function (e, t) {
					let {
							id: n,
							name: r,
							html: i,
							htmlFromDesign: a,
							text: o,
							textFromDesign: s,
							fonts: l = [],
							width: u,
							height: f,
							left: p,
							right: m,
							top: h,
							bottom: g,
							center: v,
							className: y,
							stylesPresetsClassName: b,
							visible: x = !0,
							opacity: S,
							rotation: T = 0,
							verticalAlignment: E = `top`,
							isEditable: D = !1,
							environment: O = FramerEnvironment.current,
							withExternalLayout: k = !1,
							positionSticky: A,
							positionStickyTop: j,
							positionStickyRight: ee,
							positionStickyBottom: te,
							positionStickyLeft: ne,
							__htmlStructure: M,
							__fromCanvasComponent: re = !1,
							_forwardedOverrideId: ie,
							_forwardedOverrides: ae,
							_usesDOMRect: oe,
							children: se,
							...ce
						} = e,
						le = xa(),
						ue = Ro(e),
						de = w(null),
						fe = t ?? de,
						{ navigate: pe, getRoute: me } = kt(),
						N = jt();
					(yn(e.preload ?? []), Wo(e, fe));
					let he = C(dx),
						F = au(),
						ge = o,
						_e = ie ?? n;
					if (_e && ae) {
						let e = ae[_e];
						typeof e == `string` && (ge = e);
					}
					let ve = ``;
					if (ge) {
						let e = ch(ge);
						ve = M ? M.replace(oO, e) : `<p>${e}</p>`;
					} else if (i) ve = i;
					else if (s) {
						let e = ch(s);
						ve = M ? M.replace(oO, e) : `<p>${e}</p>`;
					} else a && (ve = a);
					let ye = Tu(),
						be = c(
							() => (F || !me || !N ? ve : lh(ve, me, N, ye)),
							[ve, me, N, ye],
						);
					if (
						(d(() => {
							let e = fe.current;
							if (e === null) return;
							function t(e) {
								let t = yu(e.target, fe.current);
								Ua(e) ||
									!pe ||
									!t ||
									t.getAttribute(`target`) === `_blank` ||
									(du(pe, t, ye) && e.preventDefault());
							}
							return (
								e.addEventListener(`click`, t),
								() => {
									e.removeEventListener(`click`, t);
								}
							);
						}, [pe, ye]),
						fh(l, re, fe),
						!x)
					)
						return null;
					let xe = D && O() === FramerEnvironment.canvas,
						Se = {
							outline: `none`,
							display: `flex`,
							flexDirection: `column`,
							justifyContent: dh(E),
							opacity: xe ? 0 : S,
							flexShrink: 0,
						},
						Ce = FramerEnvironment.hasRestrictions(),
						we = va(e, le || 0, !1),
						Te = oe && (u === `auto` || f === `auto`),
						Ee =
							e.transformTemplate || !we || !Ce || re || Te
								? (e.transformTemplate ?? Lo(v))
								: void 0;
					if (!k) {
						if (we && Ce && !Te) {
							let e = K.getNumber(T).toFixed(4);
							((Se.transform = `translate(${we.x}px, ${we.y}px) rotate(${e}deg)`),
								(Se.width = we.width),
								(Se.minWidth = we.width),
								(Se.height = we.height));
						} else
							((Se.left = p),
								(Se.right = m),
								(Se.top = h),
								(Se.bottom = g),
								(Se.width = u),
								(Se.height = f),
								(Se.rotate = T));
						A
							? (!F || he) &&
								((Se.position = `sticky`),
								(Se.willChange = `transform`),
								(Se.top = j),
								(Se.right = ee),
								(Se.bottom = te),
								(Se.left = ne))
							: F &&
								(e.positionFixed || e.positionAbsolute) &&
								(Se.position = `absolute`);
					}
					return (
						Ac(e, Se),
						Ec(e, Se),
						Object.assign(Se, e.style),
						_(P.div, {
							id: n,
							ref: fe,
							...ce,
							style: Se,
							layoutId: ue,
							"data-framer-component-type": `DeprecatedRichText`,
							"data-center": v,
							className: Uc(y, b, sO),
							transformTemplate: Ee,
							dangerouslySetInnerHTML: { __html: be },
						})
					);
				}),
			)),
			(lO = {
				opacity: 1,
				y: 0,
				x: 0,
				scale: 1,
				rotate: 0,
				rotateX: 0,
				rotateY: 0,
				skewX: 0,
				skewY: 0,
				filter: `none`,
			}),
			(uO = (() =>
				RegExp(
					`\\p{Regional_Indicator}{2}|\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?(?:\\u{200d}\\p{Emoji}\\p{Emoji_Modifier}?\\p{Variation_Selector}?)*|.`,
					`gu`,
				))()),
			(dO = b(function (e, t) {
				return _(`svg`, { ...e, ref: t, children: e.children });
			})),
			(fO = P.create(dO)),
			(pO = b(function (
				{ viewBoxScale: e, viewBox: t, children: n, ...r },
				i,
			) {
				return _(fO, {
					...r,
					ref: i,
					viewBox: t,
					children: _(P.foreignObject, {
						width: `100%`,
						height: `100%`,
						className: `framer-fit-text`,
						transform: `scale(${e})`,
						style: {
							overflow: `visible`,
							transformOrigin: `center center`,
						},
						children: n,
					}),
				});
			})),
			(mO = []),
			(hO = `RichTextContainer`),
			(gO = b(function (e, t) {
				let {
						__fromCanvasComponent: n = !1,
						_forwardedOverrideId: r,
						_forwardedOverrides: i,
						_usesDOMRect: a,
						anchorLinkOffsetY: o,
						as: s,
						bottom: l,
						center: u,
						children: d,
						environment: f = FramerEnvironment.current,
						fonts: p = mO,
						height: m,
						isEditable: h = !1,
						left: g,
						name: v,
						opacity: y,
						positionSticky: b,
						positionStickyBottom: x,
						positionStickyLeft: S,
						positionStickyRight: T,
						positionStickyTop: E,
						right: D,
						rotation: O = 0,
						style: k,
						_initialStyle: A,
						stylesPresetsClassNames: j,
						text: ee,
						top: te,
						verticalAlignment: ne = `top`,
						visible: M = !0,
						width: re,
						withExternalLayout: ie = !1,
						viewBox: ae,
						viewBoxScale: oe = 1,
						effect: se,
						...ce
					} = e,
					le = xa(),
					ue = f() === FramerEnvironment.canvas,
					de = C(dx),
					fe = Ro(e),
					pe = w(null),
					me = t ?? pe;
				(Wo(e, me), fh(p, n, me));
				let N = xh(se, me),
					he = c(() => {
						if (d) return kh(d, j, ee, o, void 0, N.getTokenizer());
					}, [d, j, ee, o, N]);
				if (!M) return null;
				let P = { opacity: h && ue ? 0 : y },
					F = dh(ne);
				F !== eb.justifyContent && (P.justifyContent = F);
				let ge = {},
					_e = FramerEnvironment.hasRestrictions(),
					ve = va(e, le || 0, !1),
					ye = a && (re === `auto` || m === `auto`),
					be =
						e.transformTemplate || !ve || !_e || n || ye
							? (e.transformTemplate ?? Lo(u))
							: void 0;
				(ie ||
					(ve && _e && !ye
						? ((ge.x = ve.x + (R(k?.x) ? k.x : 0)),
							(ge.y = ve.y + (R(k?.y) ? k.y : 0)),
							(ge.left = 0),
							(ge.top = 0),
							(P.rotate = K.getNumber(O)),
							(P.width = ve.width),
							(P.minWidth = ve.width),
							(P.height = ve.height))
						: ((P.left = g),
							(P.right = D),
							(P.top = te),
							(P.bottom = l),
							(P.width = re),
							(P.height = m),
							(P.rotate = O)),
					b
						? (!ue || de) &&
							((P.position = `sticky`),
							(P.willChange = `transform`),
							(P.top = E),
							(P.right = T),
							(P.bottom = x),
							(P.left = S))
						: ue &&
							(e.positionFixed || e.positionAbsolute) &&
							(P.position = `absolute`)),
					Ac(e, P),
					Ec(e, P),
					Object.assign(P, A, k, ge),
					fe && (ce.layout = `preserve-aspect`));
				let xe = Mo(e.as),
					Se = ce[`data-framer-name`] ?? v,
					Ce = ue ? Eh(Jb(ce)) : ce;
				return L(e.viewBox)
					? e.as === void 0
						? _(pO, {
								...Ce,
								ref: me,
								style: P,
								layoutId: fe,
								viewBox: ae,
								viewBoxScale: oe,
								transformTemplate: be,
								"data-framer-component-type": hO,
								children: he,
							})
						: _(xe, {
								...Ce,
								ref: me,
								style: P,
								layoutId: fe,
								transformTemplate: be,
								"data-framer-component-type": hO,
								children: _(pO, {
									viewBox: ae,
									viewBoxScale: oe,
									style: { width: `100%`, height: `100%` },
									children: he,
								}),
							})
					: _(xe, {
							...Ce,
							ref: me,
							style: P,
							layoutId: fe,
							transformTemplate: be,
							"data-framer-component-type": hO,
							children: he,
						});
			})),
			(_O = eo(
				b(function (
					{ children: e, html: t, htmlFromDesign: n, ...r },
					i,
				) {
					let a = t || e || n;
					if (L(a)) {
						!r.stylesPresetsClassName &&
							z(r.stylesPresetsClassNames) &&
							(r.stylesPresetsClassName = Object.values(
								r.stylesPresetsClassNames,
							).join(` `));
						let e = { [L(t) ? `html` : `htmlFromDesign`]: a };
						return _(cO, { ...r, ...e, ref: i });
					}
					if (
						!r.stylesPresetsClassNames &&
						L(r.stylesPresetsClassName)
					) {
						let [e, t, n, i, a] =
							r.stylesPresetsClassName.split(` `);
						e === void 0 ||
						t === void 0 ||
						n === void 0 ||
						i === void 0 ||
						a === void 0
							? console.warn(
									`Encountered invalid stylesPresetsClassNames: ${r.stylesPresetsClassNames}`,
								)
							: (r.stylesPresetsClassNames = {
									h1: e,
									h2: t,
									h3: n,
									p: i,
									a,
								});
					}
					return _(gO, { ...r, ref: i, children: y(a) ? a : void 0 });
				}),
			)),
			(vO = `framer/asset-reference,`),
			(yO = ({
				id: e,
				path: t,
				transform: n,
				repeat: r,
				width: i,
				height: a,
				offsetX: o,
				offsetY: s,
			}) => {
				let c = Vh(t);
				return _(`pattern`, {
					id: e,
					width: r ? i : `100%`,
					height: r ? a : `100%`,
					patternContentUnits: r ? void 0 : `objectBoundingBox`,
					patternUnits: r ? `userSpaceOnUse` : void 0,
					x: r ? o : void 0,
					y: r ? s : void 0,
					children: _(
						`image`,
						{
							width: r ? i : 1,
							height: r ? a : 1,
							href: c,
							preserveAspectRatio: `none`,
							transform: r ? void 0 : n,
							x: r ? 0 : void 0,
							y: r ? 0 : void 0,
						},
						c,
					),
				});
			}),
			(bO = La()),
			(xO = class {
				constructor(e, t, n, r, i = 0) {
					((this.id = e),
						(this.svg = t),
						(this.innerHTML = n),
						(this.viewBox = r),
						(this.count = i));
				}
			}),
			(SO = `position: absolute; overflow: hidden; bottom: 0; left: 0; width: 0; height: 0; z-index: 0; contain: strict`),
			(CO = class {
				constructor() {
					(I(this, `entries`, new Map()),
						I(this, `vectorSetItems`, new Map()));
				}
				debugGetEntries() {
					return this.entries;
				}
				subscribe(e, t, n, r) {
					if (!e || e === ``) return ``;
					let i = this.entries.get(e);
					if (!i) {
						n ||= `svg${String(yx(e))}_${String(e.length)}`;
						let a = e,
							o,
							s = Uh(e);
						(s &&
							(t && Wh(s, n),
							(s.id = n),
							(o = Yh(s)),
							s.removeAttribute(`xmlns`),
							s.removeAttribute(`xlink`),
							s.removeAttribute(`xmlns:xlink`),
							(a = s.outerHTML)),
							(i = this.createDOMElementFor(a, n, o, r)),
							this.entries.set(e, i));
					}
					return ((i.count += 1), i.innerHTML);
				}
				getViewBox(e) {
					if (!(!e || e === ``)) return this.entries.get(e)?.viewBox;
				}
				unsubscribe(e) {
					if (!e || e === ``) return;
					let t = this.entries.get(e);
					t &&
						(--t.count,
						!(t.count > 0) &&
							setTimeout(() => this.maybeRemoveEntry(e), 5e3));
				}
				maybeRemoveEntry(e) {
					let t = this.entries.get(e);
					t &&
						(t.count > 0 ||
							(this.entries.delete(e), this.removeDOMElement(t)));
				}
				removeDOMElement(e) {
					bO && document?.getElementById(e.id)?.remove();
				}
				getOrCreateTemplateContainer() {
					let e = document.getElementById(`svg-templates`);
					if (e) return e;
					let t = document.createElement(`div`);
					return (
						(t.id = `svg-templates`),
						(t.ariaHidden = `true`),
						(t.style.cssText = SO),
						document.body.appendChild(t),
						t
					);
				}
				maybeAppendTemplate(e, t) {
					if (document.getElementById(e)) return;
					let n = document.createElement(`div`);
					n.innerHTML = t;
					let r = n.firstElementChild;
					r &&
						((r.id = e),
						this.getOrCreateTemplateContainer().appendChild(r));
				}
				createDOMElementFor(e, t, n, r) {
					bO && this.maybeAppendTemplate(t, e);
					let i = n ? `0 0 ${n.width} ${n.height}` : void 0,
						a = i ? ` viewBox="${i}"` : ``;
					return new xO(
						t,
						e,
						`<svg style="width:100%;height:100%;${r ? `overflow: visible;` : ``}"${a}><use href="#${t}"/></svg>`,
						i,
					);
				}
				template(e, t) {
					return (
						this.vectorSetItems.get(e) ||
							(this.vectorSetItems.set(e, { svg: t, count: 0 }),
							!bO) ||
							this.maybeAppendTemplate(e, t),
						`#${e}`
					);
				}
				subscribeToTemplate(e) {
					let t = this.vectorSetItems.get(e);
					if (t)
						return (
							t.count++,
							() => {
								let t = this.vectorSetItems.get(e);
								t &&
									(t.count--,
									!(t.count > 0) &&
										setTimeout(() => {
											this.vectorSetItems.get(e)?.count ||
												(this.vectorSetItems.delete(e),
												bO &&
													document
														?.getElementById(e)
														?.remove());
										}, 5e3));
							}
						);
				}
				clear() {
					this.entries.clear();
				}
				generateTemplates() {
					let e = [];
					return (
						e.push(
							`<div id="svg-templates" style="${SO}" aria-hidden="true">`,
						),
						this.entries.forEach((t) => e.push(t.svg)),
						this.vectorSetItems.forEach((t) => e.push(t.svg)),
						e.push(`</div>`),
						e.join(`
`)
					);
				}
			}),
			(wO = new CO()),
			(TO = (() => ({
				cm: 96 / 2.54,
				mm: 96 / 2.54 / 10,
				Q: 96 / 2.54 / 40,
				in: 96,
				pc: 96 / 6,
				pt: 96 / 72,
				px: 1,
				em: 16,
				ex: 8,
				ch: 8,
				rem: 16,
			}))()),
			(EO = b(function (e, t) {
				let n = xa(),
					r = Ro(e),
					i = f.useRef(null),
					a = t ?? i,
					o = nD();
				return (
					Wo(e, i),
					_(OO, {
						...e,
						innerRef: a,
						parentSize: n,
						layoutId: r,
						providedWindow: o,
					})
				);
			})),
			(DO = 5e4),
			(OO = (() => {
				var e;
				return (
					(e = class extends vx {
						constructor() {
							(super(...arguments),
								I(this, `container`, f.createRef()),
								I(this, `svgElement`, null),
								I(this, `setSVGElement`, (e) => {
									((this.svgElement = e),
										this.setLayerElement(e));
								}),
								I(this, `previouslyRenderedSVG`, ``),
								I(this, `unmountedSVG`, ``));
						}
						static frame(e) {
							return va(e, e.parentSize || 0);
						}
						get frame() {
							return va(this.props, this.props.parentSize || 0);
						}
						componentDidMount() {
							if (this.unmountedSVG) {
								let { svgContentId: e } = this.props,
									t = e ? `svg${e}` : null;
								(wO.subscribe(this.unmountedSVG, !e, t),
									(this.previouslyRenderedSVG =
										this.unmountedSVG));
							}
							this.props.svgContentId ||
								$h(this.container, this.props);
						}
						componentWillUnmount() {
							(wO.unsubscribe(this.previouslyRenderedSVG),
								(this.unmountedSVG =
									this.previouslyRenderedSVG),
								(this.previouslyRenderedSVG = ``));
						}
						componentDidUpdate(e) {
							if (
								(super.componentDidUpdate(e),
								this.props.svgContentId)
							)
								return;
							let { fill: t } = this.props;
							(cx.isImageObject(t) &&
								cx.isImageObject(e.fill) &&
								t.src !== e.fill.src &&
								Yo(this.svgElement, `fill`, null, !1),
								$h(this.container, this.props));
						}
						collectLayout(e, t) {
							if (this.props.withExternalLayout) {
								((t.width = `100%`),
									(t.height = `100%`),
									(t.aspectRatio = `inherit`));
								return;
							}
							let n = this.frame,
								{
									rotation: r,
									intrinsicWidth: i,
									intrinsicHeight: a,
									width: o,
									height: s,
								} = this.props,
								c = K.getNumber(r);
							if (
								((e.opacity = H(this.props.opacity)
									? this.props.opacity
									: 1),
								FramerEnvironment.hasRestrictions() && n)
							) {
								(Object.assign(e, {
									transform: `translate(${n.x}px, ${n.y}px) rotate(${c.toFixed(4)}deg)`,
									width: `${n.width}px`,
									height: `${n.height}px`,
								}),
									ha(this.props) &&
										(e.position = `absolute`));
								let r = n.width / (i || 1),
									o = n.height / (a || 1);
								t.transformOrigin = `top left`;
								let { zoom: s, target: l } = Yv;
								if (l === FramerEnvironment.export) {
									let e = s > 1 ? s : 1;
									((t.transform = `scale(${r * e}, ${o * e})`),
										(t.zoom = 1 / e));
								} else t.transform = `scale(${r}, ${o})`;
								i && a && ((t.width = i), (t.height = a));
								return;
							}
							let {
								left: l,
								right: u,
								top: d,
								bottom: f,
							} = this.props;
							(Object.assign(e, {
								left: l,
								right: u,
								top: d,
								bottom: f,
								width: o,
								height: s,
								rotate: c,
							}),
								Object.assign(t, {
									left: 0,
									top: 0,
									bottom: 0,
									right: 0,
									position: `absolute`,
								}));
						}
						render() {
							let {
								id: e,
								visible: t,
								style: n,
								fill: r,
								svg: i,
								intrinsicHeight: a,
								intrinsicWidth: o,
								title: s,
								description: c,
								layoutId: l,
								className: u,
								variants: d,
								withExternalLayout: f,
								innerRef: p,
								svgContentId: m,
								height: h,
								opacity: g,
								width: v,
								requiresOverflowVisible: y,
								...b
							} = this.props;
							if (!f && (!t || !e)) return null;
							let x = e ?? l ?? `svg`,
								S = this.frame,
								C = S || { width: o || 100, height: a || 100 },
								w = {
									...n,
									imageRendering: `pixelated`,
									flexShrink: 0,
								},
								E = {};
							(this.collectLayout(w, E),
								vc(this.props, w),
								Ac(this.props, w),
								vx.applyWillChange(this.props, w, !1));
							let D = null;
							if (typeof r == `string` || q.isColorObject(r)) {
								let e = q.isColorObject(r)
									? r.initialValue || q.toRgbString(r)
									: r;
								((w.fill = e), (w.color = e));
							} else if (Ex.isLinearGradient(r)) {
								let t = r,
									n = `${encodeURI(e || ``)}g${Ex.hash(t)}`;
								w.fill = `url(#${n})`;
								let {
									stops: i,
									x1: a,
									x2: o,
									y1: s,
									y2: c,
								} = Nh(t, x);
								D = _(`svg`, {
									ref: this.setSVGElement,
									width: `100%`,
									height: `100%`,
									style: { position: `absolute` },
									role: `presentation`,
									children: _(`linearGradient`, {
										id: n,
										x1: a,
										x2: o,
										y1: s,
										y2: c,
										children: i.map((e, t) =>
											_(
												`stop`,
												{
													offset: e.position,
													stopColor: e.color,
													stopOpacity: e.alpha,
												},
												t,
											),
										),
									}),
								});
							} else if (Ox.isRadialGradient(r)) {
								let t = r,
									n = `${encodeURI(e || ``)}g${Ox.hash(t)}`;
								w.fill = `url(#${n})`;
								let i = Ph(t, x);
								D = _(`svg`, {
									ref: this.setSVGElement,
									width: `100%`,
									height: `100%`,
									style: { position: `absolute` },
									role: `presentation`,
									children: _(`radialGradient`, {
										id: n,
										cy: t.centerAnchorY,
										cx: t.centerAnchorX,
										r: t.widthFactor,
										children: i.stops.map((e, t) =>
											_(
												`stop`,
												{
													offset: e.position,
													stopColor: e.color,
													stopOpacity: e.alpha,
												},
												t,
											),
										),
									}),
								});
							} else if (cx.isImageObject(r)) {
								let e = zh(r, C, x);
								e &&
									((w.fill = `url(#${e.id})`),
									(D = _(`svg`, {
										ref: this.setSVGElement,
										width: `100%`,
										height: `100%`,
										style: { position: `absolute` },
										role: `presentation`,
										children: _(`defs`, {
											children: _(yO, { ...e }),
										}),
									})));
							}
							let k = { "data-framer-component-type": `SVG` },
								A = !S;
							A && Object.assign(k, Po(this.props.center));
							let j =
									!y &&
									!D &&
									!w.fill &&
									!w.background &&
									!w.backgroundImage &&
									i.length < DO &&
									!Xh(i) &&
									!Zh(i),
								ee = null;
							if (j)
								((w.backgroundSize = `100% 100%`),
									(w.backgroundImage = ct(i)),
									wO.unsubscribe(this.previouslyRenderedSVG),
									(this.previouslyRenderedSVG = ``));
							else {
								let e = m ? `svg${m}` : null,
									t = wO.subscribe(i, !m, e, y);
								(wO.unsubscribe(this.previouslyRenderedSVG),
									(this.previouslyRenderedSVG = i),
									Qh(w) && (w.overflow = `hidden`),
									(ee = T(O, {
										children: [
											D,
											_(
												`div`,
												{
													className: `svgContainer`,
													style: E,
													ref: this.container,
													dangerouslySetInnerHTML: {
														__html: t,
													},
												},
												cx.isImageObject(r)
													? r.src
													: ``,
											),
										],
									})));
							}
							let te = Mo(this.props.as),
								{
									href: ne,
									target: M,
									rel: re,
									onClick: ie,
									onTap: ae,
								} = this.props,
								oe = s || c;
							return _(te, {
								...k,
								...b,
								layoutId: l,
								transformTemplate: A
									? Lo(this.props.center)
									: void 0,
								id: e,
								ref: p,
								style: w,
								className: u,
								variants: d,
								tabIndex: this.props.tabIndex,
								role: oe ? `img` : void 0,
								"aria-label": s,
								"aria-description": c,
								"aria-hidden": oe ? void 0 : `true`,
								onTap: ae,
								onClick: ie,
								href: ne,
								target: M,
								rel: re,
								children: ee,
							});
						}
					}),
					I(e, `supportsConstraints`, !0),
					I(e, `defaultSVGProps`, {
						left: void 0,
						right: void 0,
						top: void 0,
						bottom: void 0,
						style: void 0,
						_constraints: { enabled: !0, aspectRatio: null },
						parentSize: 0,
						rotation: 0,
						visible: !0,
						svg: ``,
						shadows: [],
					}),
					I(e, `defaultProps`, {
						...vx.defaultProps,
						...e.defaultSVGProps,
					}),
					e
				);
			})()),
			(kO = eo(EO)),
			(AO = 1e3),
			(jO = `explicitInter`),
			(We.prototype.addChild = function ({ transformer: e = (e) => e }) {
				let t = ie(e(this.get()));
				return (this.onChange((n) => t.set(e(n))), t);
			}));
	});
export {
	kg as $,
	addPropertyControls as A,
	tl as At,
	JS as B,
	QueryEngine as C,
	Hh as Ct,
	kO as D,
	rm as Dt,
	_O as E,
	jy as Et,
	FontLoader as F,
	co as G,
	ng as H,
	pg as I,
	Gr as J,
	createFilterQuery as K,
	XS as L,
	Kb as M,
	_n as Mt,
	Ny as N,
	LC as O,
	xC as Ot,
	Uc as P,
	lazyComponent as Q,
	qS as R,
	KE as S,
	kt as St,
	_T as T,
	nm as Tt,
	rg as U,
	Ay as V,
	eg as W,
	FramerUtils as X,
	dt as Y,
	Ka as Z,
	xv as _,
	br as _t,
	PropertyControlTypes as a,
	Fp as at,
	ow as b,
	zp as bt,
	QD as c,
	Dp as ct,
	iw as d,
	jt as dt,
	Ir as et,
	nO as f,
	nu as ft,
	gw as g,
	Hp as gt,
	Lg as h,
	au as ht,
	IC as i,
	qE as it,
	Hi as j,
	dg as jt,
	tg as k,
	eD as kt,
	AS as l,
	Al as lt,
	Vg as m,
	Os as mt,
	kl as n,
	Hc as nt,
	$i as o,
	wO as ot,
	rw as p,
	jp as pt,
	i_ as q,
	wC as r,
	ti as rt,
	Lw as s,
	Mr as st,
	bu as t,
	JC as tt,
	LS as u,
	It as ut,
	Mn as v,
	yr as vt,
	FramerEnvironment as w,
	pr as wt,
	HS as x,
	xp as xt,
	qd as y,
	ni as yt,
	YS as z,
};
