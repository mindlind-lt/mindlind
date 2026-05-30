import { lazyInit as lazyInit } from "./rolldown-runtime.mjs";
import {
	F as t,
	T as n,
	V as r,
	c as rJsx,
	f as rIsValidElement,
	o,
	u as rCreateElement,
	z as c,
} from "./react.mjs";
import { S as l } from "./motion.mjs";
import {
	A as u,
	C as d,
	S as ee,
	X as f,
	a as p,
	g as te,
	n as ne,
} from "./framer.mjs";
function re(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function m(e, ...t) {
	if (!e)
		throw Error(
			`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``),
		);
}
function h(e) {
	throw Error(`Unexpected value: ${e}`);
}
function ie(e) {
	return typeof e == `string`;
}
function g(e) {
	return Number.isFinite(e);
}
function _(e) {
	return e === null;
}
function v(e) {
	if (_(e)) return 0;
	switch (e.type) {
		case p.Array:
			return 1;
		case p.Boolean:
			return 2;
		case p.Color:
			return 3;
		case p.Date:
			return 4;
		case p.Enum:
			return 5;
		case p.File:
			return 6;
		case p.ResponsiveImage:
			return 10;
		case p.Link:
			return 7;
		case p.Number:
			return 8;
		case p.Object:
			return 9;
		case p.RichText:
			return 11;
		case p.String:
			return 12;
		case p.VectorSetItem:
			return 13;
		default:
			h(e);
	}
}
function ae(e) {
	let t = e.readUint16(),
		n = [];
	for (let r = 0; r < t; r++) {
		let t = y.read(e);
		n.push(t);
	}
	return { type: p.Array, value: n };
}
function oe(e, t) {
	for (let n of (e.writeUint16(t.value.length), t.value)) y.write(e, n);
}
function se(e, t, n) {
	let r = e.value.length,
		i = t.value.length;
	if (r < i) return -1;
	if (r > i) return 1;
	for (let i = 0; i < r; i++) {
		let r = e.value[i],
			a = t.value[i],
			o = y.compare(r, a, n);
		if (o !== 0) return o;
	}
	return 0;
}
function ce(e) {
	return { type: p.Boolean, value: e.readUint8() !== 0 };
}
function le(e, t) {
	e.writeUint8(t.value ? 1 : 0);
}
function ue(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function de(e) {
	return { type: p.Color, value: e.readString() };
}
function fe(e, t) {
	e.writeString(t.value);
}
function pe(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function me(e) {
	let t = e.readInt64(),
		n = new Date(t);
	return { type: p.Date, value: n.toISOString() };
}
function he(e, t) {
	let n = new Date(t.value).getTime();
	e.writeInt64(n);
}
function ge(e, t) {
	let n = new Date(e.value),
		r = new Date(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function _e(e) {
	return { type: p.Enum, value: e.readString() };
}
function ve(e, t) {
	e.writeString(t.value);
}
function ye(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function be(e) {
	return { type: p.File, value: e.readString() };
}
function xe(e, t) {
	e.writeString(t.value);
}
function Se(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Ce(e) {
	return { type: p.Link, value: e.readJson() };
}
function we(e, t) {
	e.writeJson(t.value);
}
function Te(e, t) {
	let n = JSON.stringify(e.value),
		r = JSON.stringify(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function Ee(e) {
	return { type: p.Number, value: e.readFloat64() };
}
function De(e, t) {
	e.writeFloat64(t.value);
}
function Oe(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function ke(e) {
	let t = e.readUint16(),
		n = {};
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		n[t] = y.read(e);
	}
	return { type: p.Object, value: n };
}
function Ae(e, t) {
	let n = Object.entries(t.value);
	for (let [t, r] of (e.writeUint16(n.length), n))
		(e.writeString(t), y.write(e, r));
}
function je(e, t, n) {
	let r = Object.keys(e.value).sort(),
		i = Object.keys(t.value).sort();
	if (r.length < i.length) return -1;
	if (r.length > i.length) return 1;
	for (let a = 0; a < r.length; a++) {
		let o = r[a],
			s = i[a];
		if (o < s) return -1;
		if (o > s) return 1;
		let c = e.value[o] ?? null,
			l = t.value[s] ?? null,
			u = y.compare(c, l, n);
		if (u !== 0) return u;
	}
	return 0;
}
function Me(e) {
	return { type: p.ResponsiveImage, value: e.readJson() };
}
function Ne(e, t) {
	e.writeJson(t.value);
}
function Pe(e, t) {
	let n = JSON.stringify(e.value),
		r = JSON.stringify(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function Fe(e) {
	let t = e.readInt8();
	if (t === 0) return { type: p.RichText, value: e.readUint32() };
	if (t === 1) return { type: p.RichText, value: e.readString() };
	throw Error(`Invalid rich text pointer`);
}
function Ie(e, t) {
	if (g(t.value)) {
		(e.writeInt8(0), e.writeUint32(t.value));
		return;
	}
	if (ie(t.value)) {
		(e.writeInt8(1), e.writeString(t.value));
		return;
	}
	throw Error(`Invalid rich text pointer`);
}
function Le(e, t) {
	let n = e.value,
		r = t.value;
	if ((g(n) && g(r)) || (ie(n) && ie(r))) return n < r ? -1 : n > r ? 1 : 0;
	throw Error(`Invalid rich text pointer`);
}
function Re(e) {
	return { type: p.String, value: e.readString() };
}
function ze(e, t) {
	e.writeString(t.value);
}
function Be(e, t, n) {
	let r = e.value,
		i = t.value;
	return (
		n.type === 0 &&
			((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
		r < i ? -1 : r > i ? 1 : 0
	);
}
function Ve(e) {
	return { type: p.VectorSetItem, value: e.readUint32() };
}
function He(e, t) {
	e.writeUint32(t.value);
}
function Ue(e, t) {
	let n = e.value,
		r = t.value;
	return n < r ? -1 : n > r ? 1 : 0;
}
async function We(e) {
	let t = Math.floor(rt * (Math.random() + 1) * 2 ** (e - 1));
	await new Promise((e) => {
		setTimeout(e, t);
	});
}
async function Ge(e, t) {
	let n = qe(t),
		r = [],
		i = 0;
	for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
	let a = new URL(e),
		o = r.join(`,`);
	a.searchParams.set(`range`, o);
	let s = await A(a);
	if (s.status !== 200)
		throw Error(`Request failed: ${s.status} ${s.statusText}`);
	let c = await s.arrayBuffer(),
		l = new Uint8Array(c);
	if (l.length !== i)
		throw Error(`Request failed: Unexpected response length`);
	let u = new at(),
		d = 0;
	for (let e of n) {
		let t = e.to - e.from,
			n = d + t,
			r = l.subarray(d, n);
		(u.write(e.from, r), (d = n));
	}
	return t.map((e) => u.read(e.from, e.to - e.from));
}
function Ke(e, t) {
	let n = e.length + t.length,
		r = new Uint8Array(n);
	return (r.set(e, 0), r.set(t, e.length), r);
}
function qe(e) {
	m(e.length > 0, `Must have at least one range`);
	let t = [...e].sort((e, t) => e.from - t.from),
		n = [];
	for (let e of t) {
		let t = n.length - 1,
			r = n[t];
		r && e.from <= r.to
			? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
			: n.push(e);
	}
	return n;
}
var y,
	Je,
	b,
	Ye,
	x,
	Xe,
	Ze,
	Qe,
	$e,
	et,
	tt,
	S,
	nt,
	C,
	w,
	T,
	E,
	D,
	O,
	k,
	rt,
	it,
	A,
	at,
	j,
	ot,
	st,
	ct = lazyInit(() => {
		(c(),
			f(),
			(Je = Object.create),
			(b = Object.defineProperty),
			(Ye = Object.getOwnPropertyDescriptor),
			(x = Object.getOwnPropertyNames),
			(Xe = Object.getPrototypeOf),
			(Ze = Object.prototype.hasOwnProperty),
			(Qe = (e, t, n) =>
				t in e
					? b(e, t, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: n,
						})
					: (e[t] = n)),
			($e = (e, t) =>
				function () {
					return (
						t || (0, e[x(e)[0]])((t = { exports: {} }).exports, t),
						t.exports
					);
				}),
			(et = (e, t, n, r) => {
				if ((t && typeof t == `object`) || typeof t == `function`)
					for (let i of x(t))
						Ze.call(e, i) ||
							i === n ||
							b(e, i, {
								get: () => t[i],
								enumerable: !(r = Ye(t, i)) || r.enumerable,
							});
				return e;
			}),
			(tt = (e, t, n) => (
				(n = e == null ? {} : Je(Xe(e))),
				et(
					!t && e && e.__esModule
						? n
						: b(n, `default`, { value: e, enumerable: !0 }),
					e,
				)
			)),
			(S = (e, t, n) => Qe(e, typeof t == `symbol` ? t : t + ``, n)),
			(nt = tt(
				$e({
					"../../../node_modules/dataloader/index.js"(e, t) {
						var n,
							r = (function () {
								function e(e, t) {
									if (typeof e != `function`)
										throw TypeError(
											`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
												e +
												`.`,
										);
									((this._batchLoadFn = e),
										(this._maxBatchSize = (function (e) {
											if (!(!e || !1 !== e.batch))
												return 1;
											var t = e && e.maxBatchSize;
											if (t === void 0) return 1 / 0;
											if (typeof t != `number` || t < 1)
												throw TypeError(
													`maxBatchSize must be a positive number: ` +
														t,
												);
											return t;
										})(t)),
										(this._batchScheduleFn = (function (e) {
											var t = e && e.batchScheduleFn;
											if (t === void 0) return i;
											if (typeof t != `function`)
												throw TypeError(
													`batchScheduleFn must be a function: ` +
														t,
												);
											return t;
										})(t)),
										(this._cacheKeyFn = (function (e) {
											var t = e && e.cacheKeyFn;
											if (t === void 0)
												return function (e) {
													return e;
												};
											if (typeof t != `function`)
												throw TypeError(
													`cacheKeyFn must be a function: ` +
														t,
												);
											return t;
										})(t)),
										(this._cacheMap = (function (e) {
											if (!(!e || !1 !== e.cache))
												return null;
											var t = e && e.cacheMap;
											if (t === void 0) return new Map();
											if (t !== null) {
												var n = [
													`get`,
													`set`,
													`delete`,
													`clear`,
												].filter(function (e) {
													return (
														t &&
														typeof t[e] !=
															`function`
													);
												});
												if (n.length !== 0)
													throw TypeError(
														`Custom cacheMap missing methods: ` +
															n.join(`, `),
													);
											}
											return t;
										})(t)),
										(this._batch = null),
										(this.name =
											t && t.name ? t.name : null));
								}
								var t = e.prototype;
								return (
									(t.load = function (e) {
										if (e == null)
											throw TypeError(
												`The loader.load() function must be called with a value, but got: ` +
													String(e) +
													`.`,
											);
										var t = (function (e) {
												var t = e._batch;
												if (
													t !== null &&
													!t.hasDispatched &&
													t.keys.length <
														e._maxBatchSize
												)
													return t;
												var n = {
													hasDispatched: !1,
													keys: [],
													callbacks: [],
												};
												return (
													(e._batch = n),
													e._batchScheduleFn(
														function () {
															(function (e, t) {
																var n;
																if (
																	((t.hasDispatched =
																		!0),
																	t.keys
																		.length ===
																		0)
																) {
																	o(t);
																	return;
																}
																try {
																	n =
																		e._batchLoadFn(
																			t.keys,
																		);
																} catch (n) {
																	return a(
																		e,
																		t,
																		TypeError(
																			`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
																				String(
																					n,
																				) +
																				`.`,
																		),
																	);
																}
																if (
																	!n ||
																	typeof n.then !=
																		`function`
																)
																	return a(
																		e,
																		t,
																		TypeError(
																			`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
																				String(
																					n,
																				) +
																				`.`,
																		),
																	);
																n.then(
																	function (
																		e,
																	) {
																		if (
																			!s(
																				e,
																			)
																		)
																			throw TypeError(
																				`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
																					String(
																						e,
																					) +
																					`.`,
																			);
																		if (
																			e.length !==
																			t
																				.keys
																				.length
																		)
																			throw TypeError(
																				`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
																					String(
																						t.keys,
																					) +
																					`

Values:
` +
																					String(
																						e,
																					),
																			);
																		o(t);
																		for (
																			var n = 0;
																			n <
																			t
																				.callbacks
																				.length;
																			n++
																		) {
																			var r =
																				e[
																					n
																				];
																			r instanceof
																			Error
																				? t.callbacks[
																						n
																					].reject(
																						r,
																					)
																				: t.callbacks[
																						n
																					].resolve(
																						r,
																					);
																		}
																	},
																).catch(
																	function (
																		n,
																	) {
																		a(
																			e,
																			t,
																			n,
																		);
																	},
																);
															})(e, n);
														},
													),
													n
												);
											})(this),
											n = this._cacheMap,
											r = this._cacheKeyFn(e);
										if (n) {
											var i = n.get(r);
											if (i) {
												var c = (t.cacheHits ||= []);
												return new Promise(function (
													e,
												) {
													c.push(function () {
														e(i);
													});
												});
											}
										}
										t.keys.push(e);
										var l = new Promise(function (e, n) {
											t.callbacks.push({
												resolve: e,
												reject: n,
											});
										});
										return (n && n.set(r, l), l);
									}),
									(t.loadMany = function (e) {
										if (!s(e))
											throw TypeError(
												`The loader.loadMany() function must be called with Array<key> but got: ` +
													e +
													`.`,
											);
										for (
											var t = [], n = 0;
											n < e.length;
											n++
										)
											t.push(
												this.load(e[n]).catch(
													function (e) {
														return e;
													},
												),
											);
										return Promise.all(t);
									}),
									(t.clear = function (e) {
										var t = this._cacheMap;
										if (t) {
											var n = this._cacheKeyFn(e);
											t.delete(n);
										}
										return this;
									}),
									(t.clearAll = function () {
										var e = this._cacheMap;
										return (e && e.clear(), this);
									}),
									(t.prime = function (e, t) {
										var n = this._cacheMap;
										if (n) {
											var r,
												i = this._cacheKeyFn(e);
											n.get(i) === void 0 &&
												(t instanceof Error
													? (r =
															Promise.reject(
																t,
															)).catch(
															function () {},
														)
													: (r = Promise.resolve(t)),
												n.set(i, r));
										}
										return this;
									}),
									e
								);
							})(),
							i =
								typeof process == `object` &&
								typeof process.nextTick == `function`
									? function (e) {
											((n ||= Promise.resolve()),
												n.then(function () {
													process.nextTick(e);
												}));
										}
									: typeof setImmediate == `function`
										? function (e) {
												setImmediate(e);
											}
										: function (e) {
												setTimeout(e);
											};
						function a(e, t, n) {
							o(t);
							for (var r = 0; r < t.keys.length; r++)
								(e.clear(t.keys[r]), t.callbacks[r].reject(n));
						}
						function o(e) {
							if (e.cacheHits)
								for (var t = 0; t < e.cacheHits.length; t++)
									e.cacheHits[t]();
						}
						function s(e) {
							return (
								typeof e == `object` &&
								!!e &&
								typeof e.length == `number` &&
								(e.length === 0 ||
									(e.length > 0 &&
										Object.prototype.hasOwnProperty.call(
											e,
											e.length - 1,
										)))
							);
						}
						t.exports = r;
					},
				})(),
			)),
			(C = {
				Uint8: 1,
				Uint16: 2,
				Uint32: 4,
				BigUint64: 8,
				Int8: 1,
				Int16: 2,
				Int32: 4,
				BigInt64: 8,
				Float32: 4,
				Float64: 8,
			}),
			(w = class {
				getOffset() {
					return this.offset;
				}
				ensureLength(e) {
					let t = this.bytes.length;
					if (!(this.offset + e <= t))
						throw Error(`Reading out of bounds`);
				}
				readUint8() {
					let e = C.Uint8;
					this.ensureLength(e);
					let t = this.view.getUint8(this.offset);
					return ((this.offset += e), t);
				}
				readUint16() {
					let e = C.Uint16;
					this.ensureLength(e);
					let t = this.view.getUint16(this.offset);
					return ((this.offset += e), t);
				}
				readUint32() {
					let e = C.Uint32;
					this.ensureLength(e);
					let t = this.view.getUint32(this.offset);
					return ((this.offset += e), t);
				}
				readUint64() {
					let e = this.readBigUint64();
					return Number(e);
				}
				readBigUint64() {
					let e = C.BigUint64;
					this.ensureLength(e);
					let t = this.view.getBigUint64(this.offset);
					return ((this.offset += e), t);
				}
				readInt8() {
					let e = C.Int8;
					this.ensureLength(e);
					let t = this.view.getInt8(this.offset);
					return ((this.offset += e), t);
				}
				readInt16() {
					let e = C.Int16;
					this.ensureLength(e);
					let t = this.view.getInt16(this.offset);
					return ((this.offset += e), t);
				}
				readInt32() {
					let e = C.Int32;
					this.ensureLength(e);
					let t = this.view.getInt32(this.offset);
					return ((this.offset += e), t);
				}
				readInt64() {
					let e = this.readBigInt64();
					return Number(e);
				}
				readBigInt64() {
					let e = C.BigInt64;
					this.ensureLength(e);
					let t = this.view.getBigInt64(this.offset);
					return ((this.offset += e), t);
				}
				readFloat32() {
					let e = C.Float32;
					this.ensureLength(e);
					let t = this.view.getFloat32(this.offset);
					return ((this.offset += e), t);
				}
				readFloat64() {
					let e = C.Float64;
					this.ensureLength(e);
					let t = this.view.getFloat64(this.offset);
					return ((this.offset += e), t);
				}
				readBytes(e) {
					let t = this.offset,
						n = t + e,
						r = this.bytes.subarray(t, n);
					return ((this.offset = n), r);
				}
				readString() {
					let e = this.readUint32(),
						t = this.readBytes(e);
					return this.decoder.decode(t);
				}
				readJson() {
					let e = this.readString();
					return JSON.parse(e);
				}
				constructor(e) {
					((this.bytes = e),
						S(this, `offset`, 0),
						S(this, `view`),
						S(this, `decoder`, new TextDecoder()),
						(this.view = re(this.bytes)));
				}
			}),
			r !== void 0 && r.requestIdleCallback,
			(T = (e) => 2 ** e - 1),
			(E = (e) => -(2 ** (e - 1))),
			(D = (e) => 2 ** (e - 1) - 1),
			E(8),
			E(16),
			E(32),
			-(BigInt(2) ** BigInt(63)),
			T(8),
			T(16),
			T(32),
			BigInt(2) ** BigInt(64) - BigInt(1),
			D(8),
			D(16),
			D(32),
			BigInt(2) ** BigInt(63) - BigInt(1),
			(O = class e {
				static fromString(t) {
					let [n, r, i] = t.split(`/`).map(Number);
					return (
						m(g(n), `Invalid chunkId`),
						m(g(r), `Invalid offset`),
						m(g(i), `Invalid length`),
						new e(n, r, i)
					);
				}
				toString() {
					return `${this.chunkId}/${this.offset}/${this.length}`;
				}
				static read(t) {
					return new e(
						t.readUint16(),
						t.readUint32(),
						t.readUint32(),
					);
				}
				write(e) {
					(e.writeUint16(this.chunkId),
						e.writeUint32(this.offset),
						e.writeUint32(this.length));
				}
				compare(e) {
					return this.chunkId < e.chunkId
						? -1
						: this.chunkId > e.chunkId
							? 1
							: this.offset < e.offset
								? -1
								: this.offset > e.offset
									? 1
									: (m(this.length === e.length), 0);
				}
				constructor(e, t, n) {
					((this.chunkId = e), (this.offset = t), (this.length = n));
				}
			}),
			((e) => {
				((e.read = function (e) {
					let t = e.readUint8();
					switch (t) {
						case 0:
							return null;
						case 1:
							return ae(e);
						case 2:
							return ce(e);
						case 3:
							return de(e);
						case 4:
							return me(e);
						case 5:
							return _e(e);
						case 6:
							return be(e);
						case 7:
							return Ce(e);
						case 8:
							return Ee(e);
						case 9:
							return ke(e);
						case 10:
							return Me(e);
						case 11:
							return Fe(e);
						case 12:
							return Re(e);
						case 13:
							return Ve(e);
						default:
							h(t);
					}
				}),
					(e.write = function (e, t) {
						let n = v(t);
						if ((e.writeUint8(n), !_(t)))
							switch (t.type) {
								case p.Array:
									return oe(e, t);
								case p.Boolean:
									return le(e, t);
								case p.Color:
									return fe(e, t);
								case p.Date:
									return he(e, t);
								case p.Enum:
									return ve(e, t);
								case p.File:
									return xe(e, t);
								case p.Link:
									return we(e, t);
								case p.Number:
									return De(e, t);
								case p.Object:
									return Ae(e, t);
								case p.ResponsiveImage:
									return Ne(e, t);
								case p.RichText:
									return Ie(e, t);
								case p.VectorSetItem:
									return He(e, t);
								case p.String:
									return ze(e, t);
								default:
									h(t);
							}
					}),
					(e.compare = function (e, t, n) {
						let r = v(e),
							i = v(t);
						if (r < i) return -1;
						if (r > i) return 1;
						if (_(e) || _(t)) return 0;
						switch (e.type) {
							case p.Array:
								return (m(t.type === p.Array), se(e, t, n));
							case p.Boolean:
								return (m(t.type === p.Boolean), ue(e, t));
							case p.Color:
								return (m(t.type === p.Color), pe(e, t));
							case p.Date:
								return (m(t.type === p.Date), ge(e, t));
							case p.Enum:
								return (m(t.type === p.Enum), ye(e, t));
							case p.File:
								return (m(t.type === p.File), Se(e, t));
							case p.Link:
								return (m(t.type === p.Link), Te(e, t));
							case p.Number:
								return (m(t.type === p.Number), Oe(e, t));
							case p.Object:
								return (m(t.type === p.Object), je(e, t, n));
							case p.ResponsiveImage:
								return (
									m(t.type === p.ResponsiveImage),
									Pe(e, t)
								);
							case p.RichText:
								return (m(t.type === p.RichText), Le(e, t));
							case p.VectorSetItem:
								return (
									m(t.type === p.VectorSetItem),
									Ue(e, t)
								);
							case p.String:
								return (m(t.type === p.String), Be(e, t, n));
							default:
								h(e);
						}
					}));
			})((y ||= {})),
			(k = 3),
			(rt = 250),
			(it = [408, 429, 500, 502, 503, 504]),
			(A = async (e, t) => {
				let n = 0;
				for (;;) {
					try {
						let r = await fetch(e, t);
						if (!it.includes(r.status) || ++n > k) return r;
					} catch (e) {
						if (t?.signal?.aborted || ++n > k) throw e;
					}
					await We(n);
				}
			}),
			(at = class {
				read(e, t) {
					for (let n of this.chunks) {
						if (e < n.start) break;
						if (e > n.end) continue;
						if (e + t > n.end) break;
						let r = e - n.start,
							i = r + t;
						return n.data.slice(r, i);
					}
					throw Error(`Missing data`);
				}
				write(e, t) {
					let n = e,
						r = n + t.length,
						i = 0,
						a = this.chunks.length;
					for (; i < a; i++) {
						let e = this.chunks[i];
						if ((m(e, `Missing chunk`), !(n > e.end))) {
							if (n > e.start) {
								let r = n - e.start;
								((t = Ke(e.data.subarray(0, r), t)),
									(n = e.start));
							}
							break;
						}
					}
					for (; a > i; a--) {
						let e = this.chunks[a - 1];
						if ((m(e, `Missing chunk`), !(r < e.start))) {
							if (r < e.end) {
								let n = r - e.start,
									i = e.data.subarray(n);
								((t = Ke(t, i)), (r = e.end));
							}
							break;
						}
					}
					let o = { start: n, end: r, data: t },
						s = a - i;
					this.chunks.splice(i, s, o);
				}
				constructor() {
					S(this, `chunks`, []);
				}
			}),
			(j = class e {
				static read(t) {
					let n = new e(),
						r = t.readUint16();
					for (let e = 0; e < r; e++) {
						let e = t.readString(),
							r = y.read(t);
						n.setField(e, r);
					}
					return n;
				}
				write(e) {
					for (let [t, n] of (e.writeUint16(this.fields.size),
					this.fields))
						(e.writeString(t), y.write(e, n));
				}
				getData() {
					let e = {};
					for (let [t, n] of this.fields) e[t] = n;
					return e;
				}
				setField(e, t) {
					this.fields.set(e, t);
				}
				getField(e) {
					return this.fields.get(e);
				}
				constructor() {
					S(this, `fields`, new Map());
				}
			}),
			(ot = class {
				scanItems() {
					return (
						(this.itemsPromise ??= A(this.url).then(async (e) => {
							if (!e.ok)
								throw Error(
									`Request failed: ${e.status} ${e.statusText}`,
								);
							let t = await e.arrayBuffer(),
								n = new w(new Uint8Array(t)),
								r = [],
								i = n.readUint32();
							for (let e = 0; e < i; e++) {
								let e = n.getOffset(),
									t = j.read(n),
									i = n.getOffset() - e,
									a = new O(this.id, e, i).toString(),
									o = { pointer: a, data: t.getData() };
								(this.itemLoader.prime(a, o), r.push(o));
							}
							return r;
						})),
						this.itemsPromise
					);
				}
				resolveItem(e) {
					return this.itemLoader.load(e);
				}
				constructor(e, t) {
					((this.id = e),
						(this.url = t),
						S(this, `itemsPromise`),
						S(
							this,
							`itemLoader`,
							new nt.default(async (e) => {
								let t = e.map((e) => {
									let t = O.fromString(e);
									return {
										from: t.offset,
										to: t.offset + t.length,
									};
								});
								return (await Ge(this.url, t)).map((t, n) => {
									let r = new w(t),
										i = j.read(r),
										a = e[n];
									return (
										m(a, `Missing pointer`),
										{ pointer: a, data: i.getData() }
									);
								});
							}),
						));
				}
			}),
			(st = class {
				async scanItems() {
					return (
						await Promise.all(
							this.chunks.map(async (e) => e.scanItems()),
						)
					).flat();
				}
				async resolveItems(e) {
					return Promise.all(
						e.map((e) => {
							let t = O.fromString(e),
								n = this.chunks[t.chunkId];
							return (m(n, `Missing chunk`), n.resolveItem(e));
						}),
					);
				}
				compareItems(e, t) {
					let n = O.fromString(e.pointer),
						r = O.fromString(t.pointer);
					return n.compare(r);
				}
				compareValues(e, t, n) {
					return y.compare(e, t, n);
				}
				constructor(e) {
					((this.options = e),
						S(this, `schema`),
						S(this, `indexes`),
						S(this, `resolveRichText`),
						S(this, `resolveVectorSetItem`),
						S(this, `chunks`),
						(this.chunks = this.options.chunks.map(
							(e, t) => new ot(t, e),
						)),
						(this.schema = e.schema),
						(this.indexes = e.indexes),
						(this.resolveRichText = e.resolveRichText),
						(this.resolveVectorSetItem = e.resolveVectorSetItem));
				}
			}));
	});
function lt(e) {
	return typeof e == `object` && !!e && !rIsValidElement(e) && ft in e;
}
function ut(e, ...t) {
	if (!e)
		throw Error(
			`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``),
		);
}
function dt(e) {
	let n = new Map();
	return (r) => {
		let a = n.get(r);
		if (a) return a;
		let o = (function n(r) {
			switch (r[0]) {
				case 1: {
					let [, ...e] = r;
					return rCreateElement(t, void 0, ...e.map(n));
				}
				case 2: {
					let [, e, ...t] = r;
					return rCreateElement(te, e, ...t.map(n));
				}
				case 3: {
					let [, t, n] = r,
						a = e[t];
					return (
						ut(a, `Module not found`),
						lt(a) && a.preload(),
						rJsx(ne, {
							componentIdentifier: t,
							children: (e) => rJsx(a, { ...e, ...n }),
						})
					);
				}
				case 4: {
					let [, e, t, ...i] = r,
						a = i.map(n);
					return rCreateElement(e === `a` ? l.a : e, t, ...a);
				}
				case 5: {
					let [, e] = r;
					return e;
				}
			}
		})(JSON.parse(r));
		return (n.set(r, o), o);
	};
}
var M,
	ft,
	pt,
	mt = lazyInit(() => {
		(o(),
			f(),
			n(),
			(ft = `preload`),
			(pt =
				(((M = pt || {})[(M.Fragment = 1)] = `Fragment`),
				(M[(M.Link = 2)] = `Link`),
				(M[(M.Module = 3)] = `Module`),
				(M[(M.Tag = 4)] = `Tag`),
				(M[(M.Text = 5)] = `Text`),
				M)));
	}),
	ht,
	gt,
	_t,
	vt,
	N,
	yt,
	bt = lazyInit(() => {
		(f(),
			ct(),
			mt(),
			(ht = {
				createdAt: { isNullable: !0, type: p.Date },
				ewiVsVh5f: { isNullable: !0, type: p.String },
				id: { isNullable: !1, type: p.String },
				nextItemId: { isNullable: !0, type: p.String },
				previousItemId: { isNullable: !0, type: p.String },
				TBDlVXOGA: { isNullable: !0, type: p.String },
				updatedAt: { isNullable: !0, type: p.Date },
				Xgdhwh5Me: { isNullable: !0, type: p.String },
				yi1VnvdUf: { isNullable: !0, type: p.ResponsiveImage },
			}),
			(gt = []),
			(_t = (e) => {
				let t = gt[e];
				if (t) return t().then((e) => e.default);
			}),
			(vt = dt({})),
			new ee(new d()),
			(N = {
				collectionByLocaleId: {
					default: new st({
						chunks: [
							new URL(
								`./PxI14If8r-chunk-default-0.framercms`,
								`https://framerusercontent.com/modules/gZLqE5bXQMiifJkQz1rO/JPVtHwf7CJIt9Q1XdNFQ/PxI14If8r.js`,
							).href.replace(`/modules/`, `/cms/`),
						],
						indexes: [],
						resolveRichText: vt,
						resolveVectorSetItem: _t,
						schema: ht,
					}),
				},
				displayName: `Categories of Projects`,
			}),
			(yt = N),
			u(N, {
				Xgdhwh5Me: {
					defaultValue: ``,
					title: `Name of Category`,
					type: p.String,
				},
				TBDlVXOGA: { title: `Slug`, type: p.String },
				ewiVsVh5f: {
					defaultValue: ``,
					displayTextArea: !0,
					title: `Description`,
					type: p.String,
				},
				yi1VnvdUf: { title: `Image`, type: p.ResponsiveImage },
				createdAt: { title: `Created`, type: p.Date },
				updatedAt: { title: `Updated`, type: p.Date },
				previousItemId: {
					dataIdentifier: `local-module:collection/PxI14If8r:default`,
					title: `Previous`,
					type: p.CollectionReference,
				},
				nextItemId: {
					dataIdentifier: `local-module:collection/PxI14If8r:default`,
					title: `Next`,
					type: p.CollectionReference,
				},
			}));
	});
function xt(e) {
	return new DataView(e.buffer, e.byteOffset, e.byteLength);
}
function P(e, ...t) {
	if (!e)
		throw Error(
			`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``),
		);
}
function F(e) {
	throw Error(`Unexpected value: ${e}`);
}
function I(e) {
	return typeof e == `string`;
}
function L(e) {
	return Number.isFinite(e);
}
function R(e) {
	return e === null;
}
function z(e) {
	if (R(e)) return 0;
	switch (e.type) {
		case p.Array:
			return 1;
		case p.Boolean:
			return 2;
		case p.Color:
			return 3;
		case p.Date:
			return 4;
		case p.Enum:
			return 5;
		case p.File:
			return 6;
		case p.ResponsiveImage:
			return 10;
		case p.Link:
			return 7;
		case p.Number:
			return 8;
		case p.Object:
			return 9;
		case p.RichText:
			return 11;
		case p.String:
			return 12;
		case p.VectorSetItem:
			return 13;
		default:
			F(e);
	}
}
function St(e) {
	let t = e.readUint16(),
		n = [];
	for (let r = 0; r < t; r++) {
		let t = B.read(e);
		n.push(t);
	}
	return { type: p.Array, value: n };
}
function Ct(e, t) {
	for (let n of (e.writeUint16(t.value.length), t.value)) B.write(e, n);
}
function wt(e, t, n) {
	let r = e.value.length,
		i = t.value.length;
	if (r < i) return -1;
	if (r > i) return 1;
	for (let i = 0; i < r; i++) {
		let r = e.value[i],
			a = t.value[i],
			o = B.compare(r, a, n);
		if (o !== 0) return o;
	}
	return 0;
}
function Tt(e) {
	return { type: p.Boolean, value: e.readUint8() !== 0 };
}
function Et(e, t) {
	e.writeUint8(t.value ? 1 : 0);
}
function Dt(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Ot(e) {
	return { type: p.Color, value: e.readString() };
}
function kt(e, t) {
	e.writeString(t.value);
}
function At(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function jt(e) {
	let t = e.readInt64(),
		n = new Date(t);
	return { type: p.Date, value: n.toISOString() };
}
function Mt(e, t) {
	let n = new Date(t.value).getTime();
	e.writeInt64(n);
}
function Nt(e, t) {
	let n = new Date(e.value),
		r = new Date(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function Pt(e) {
	return { type: p.Enum, value: e.readString() };
}
function Ft(e, t) {
	e.writeString(t.value);
}
function It(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Lt(e) {
	return { type: p.File, value: e.readString() };
}
function Rt(e, t) {
	e.writeString(t.value);
}
function zt(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Bt(e) {
	return { type: p.Link, value: e.readJson() };
}
function Vt(e, t) {
	e.writeJson(t.value);
}
function Ht(e, t) {
	let n = JSON.stringify(e.value),
		r = JSON.stringify(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function Ut(e) {
	return { type: p.Number, value: e.readFloat64() };
}
function Wt(e, t) {
	e.writeFloat64(t.value);
}
function Gt(e, t) {
	return e.value < t.value ? -1 : e.value > t.value ? 1 : 0;
}
function Kt(e) {
	let t = e.readUint16(),
		n = {};
	for (let r = 0; r < t; r++) {
		let t = e.readString();
		n[t] = B.read(e);
	}
	return { type: p.Object, value: n };
}
function qt(e, t) {
	let n = Object.entries(t.value);
	for (let [t, r] of (e.writeUint16(n.length), n))
		(e.writeString(t), B.write(e, r));
}
function Jt(e, t, n) {
	let r = Object.keys(e.value).sort(),
		i = Object.keys(t.value).sort();
	if (r.length < i.length) return -1;
	if (r.length > i.length) return 1;
	for (let a = 0; a < r.length; a++) {
		let o = r[a],
			s = i[a];
		if (o < s) return -1;
		if (o > s) return 1;
		let c = e.value[o] ?? null,
			l = t.value[s] ?? null,
			u = B.compare(c, l, n);
		if (u !== 0) return u;
	}
	return 0;
}
function Yt(e) {
	return { type: p.ResponsiveImage, value: e.readJson() };
}
function Xt(e, t) {
	e.writeJson(t.value);
}
function Zt(e, t) {
	let n = JSON.stringify(e.value),
		r = JSON.stringify(t.value);
	return n < r ? -1 : n > r ? 1 : 0;
}
function Qt(e) {
	let t = e.readInt8();
	if (t === 0) return { type: p.RichText, value: e.readUint32() };
	if (t === 1) return { type: p.RichText, value: e.readString() };
	throw Error(`Invalid rich text pointer`);
}
function $t(e, t) {
	if (L(t.value)) {
		(e.writeInt8(0), e.writeUint32(t.value));
		return;
	}
	if (I(t.value)) {
		(e.writeInt8(1), e.writeString(t.value));
		return;
	}
	throw Error(`Invalid rich text pointer`);
}
function en(e, t) {
	let n = e.value,
		r = t.value;
	if ((L(n) && L(r)) || (I(n) && I(r))) return n < r ? -1 : n > r ? 1 : 0;
	throw Error(`Invalid rich text pointer`);
}
function tn(e) {
	return { type: p.String, value: e.readString() };
}
function nn(e, t) {
	e.writeString(t.value);
}
function rn(e, t, n) {
	let r = e.value,
		i = t.value;
	return (
		n.type === 0 &&
			((r = e.value.toLowerCase()), (i = t.value.toLowerCase())),
		r < i ? -1 : r > i ? 1 : 0
	);
}
function an(e) {
	return { type: p.VectorSetItem, value: e.readUint32() };
}
function on(e, t) {
	e.writeUint32(t.value);
}
function sn(e, t) {
	let n = e.value,
		r = t.value;
	return n < r ? -1 : n > r ? 1 : 0;
}
async function cn(e) {
	let t = Math.floor(xn * (Math.random() + 1) * 2 ** (e - 1));
	await new Promise((e) => {
		setTimeout(e, t);
	});
}
async function ln(e, t) {
	let n = dn(t),
		r = [],
		i = 0;
	for (let e of n) (r.push(`${e.from}-${e.to - 1}`), (i += e.to - e.from));
	let a = new URL(e),
		o = r.join(`,`);
	a.searchParams.set(`range`, o);
	let s = await Z(a);
	if (s.status !== 200)
		throw Error(`Request failed: ${s.status} ${s.statusText}`);
	let c = await s.arrayBuffer(),
		l = new Uint8Array(c);
	if (l.length !== i)
		throw Error(`Request failed: Unexpected response length`);
	let u = new Cn(),
		d = 0;
	for (let e of n) {
		let t = e.to - e.from,
			n = d + t,
			r = l.subarray(d, n);
		(u.write(e.from, r), (d = n));
	}
	return t.map((e) => u.read(e.from, e.to - e.from));
}
function un(e, t) {
	let n = e.length + t.length,
		r = new Uint8Array(n);
	return (r.set(e, 0), r.set(t, e.length), r);
}
function dn(e) {
	P(e.length > 0, `Must have at least one range`);
	let t = [...e].sort((e, t) => e.from - t.from),
		n = [];
	for (let e of t) {
		let t = n.length - 1,
			r = n[t];
		r && e.from <= r.to
			? (n[t] = { from: r.from, to: Math.max(r.to, e.to) })
			: n.push(e);
	}
	return n;
}
var B,
	fn,
	V,
	pn,
	H,
	mn,
	hn,
	gn,
	_n,
	vn,
	yn,
	U,
	bn,
	W,
	G,
	K,
	q,
	J,
	Y,
	X,
	xn,
	Sn,
	Z,
	Cn,
	Q,
	wn,
	Tn,
	En = lazyInit(() => {
		(c(),
			f(),
			(fn = Object.create),
			(V = Object.defineProperty),
			(pn = Object.getOwnPropertyDescriptor),
			(H = Object.getOwnPropertyNames),
			(mn = Object.getPrototypeOf),
			(hn = Object.prototype.hasOwnProperty),
			(gn = (e, t, n) =>
				t in e
					? V(e, t, {
							enumerable: !0,
							configurable: !0,
							writable: !0,
							value: n,
						})
					: (e[t] = n)),
			(_n = (e, t) =>
				function () {
					return (
						t || (0, e[H(e)[0]])((t = { exports: {} }).exports, t),
						t.exports
					);
				}),
			(vn = (e, t, n, r) => {
				if ((t && typeof t == `object`) || typeof t == `function`)
					for (let i of H(t))
						hn.call(e, i) ||
							i === n ||
							V(e, i, {
								get: () => t[i],
								enumerable: !(r = pn(t, i)) || r.enumerable,
							});
				return e;
			}),
			(yn = (e, t, n) => (
				(n = e == null ? {} : fn(mn(e))),
				vn(
					!t && e && e.__esModule
						? n
						: V(n, `default`, { value: e, enumerable: !0 }),
					e,
				)
			)),
			(U = (e, t, n) => gn(e, typeof t == `symbol` ? t : t + ``, n)),
			(bn = yn(
				_n({
					"../../../node_modules/dataloader/index.js"(e, t) {
						var n,
							r = (function () {
								function e(e, t) {
									if (typeof e != `function`)
										throw TypeError(
											`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but got: ` +
												e +
												`.`,
										);
									((this._batchLoadFn = e),
										(this._maxBatchSize = (function (e) {
											if (!(!e || !1 !== e.batch))
												return 1;
											var t = e && e.maxBatchSize;
											if (t === void 0) return 1 / 0;
											if (typeof t != `number` || t < 1)
												throw TypeError(
													`maxBatchSize must be a positive number: ` +
														t,
												);
											return t;
										})(t)),
										(this._batchScheduleFn = (function (e) {
											var t = e && e.batchScheduleFn;
											if (t === void 0) return i;
											if (typeof t != `function`)
												throw TypeError(
													`batchScheduleFn must be a function: ` +
														t,
												);
											return t;
										})(t)),
										(this._cacheKeyFn = (function (e) {
											var t = e && e.cacheKeyFn;
											if (t === void 0)
												return function (e) {
													return e;
												};
											if (typeof t != `function`)
												throw TypeError(
													`cacheKeyFn must be a function: ` +
														t,
												);
											return t;
										})(t)),
										(this._cacheMap = (function (e) {
											if (!(!e || !1 !== e.cache))
												return null;
											var t = e && e.cacheMap;
											if (t === void 0) return new Map();
											if (t !== null) {
												var n = [
													`get`,
													`set`,
													`delete`,
													`clear`,
												].filter(function (e) {
													return (
														t &&
														typeof t[e] !=
															`function`
													);
												});
												if (n.length !== 0)
													throw TypeError(
														`Custom cacheMap missing methods: ` +
															n.join(`, `),
													);
											}
											return t;
										})(t)),
										(this._batch = null),
										(this.name =
											t && t.name ? t.name : null));
								}
								var t = e.prototype;
								return (
									(t.load = function (e) {
										if (e == null)
											throw TypeError(
												`The loader.load() function must be called with a value, but got: ` +
													String(e) +
													`.`,
											);
										var t = (function (e) {
												var t = e._batch;
												if (
													t !== null &&
													!t.hasDispatched &&
													t.keys.length <
														e._maxBatchSize
												)
													return t;
												var n = {
													hasDispatched: !1,
													keys: [],
													callbacks: [],
												};
												return (
													(e._batch = n),
													e._batchScheduleFn(
														function () {
															(function (e, t) {
																var n;
																if (
																	((t.hasDispatched =
																		!0),
																	t.keys
																		.length ===
																		0)
																) {
																	o(t);
																	return;
																}
																try {
																	n =
																		e._batchLoadFn(
																			t.keys,
																		);
																} catch (n) {
																	return a(
																		e,
																		t,
																		TypeError(
																			`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function errored synchronously: ` +
																				String(
																					n,
																				) +
																				`.`,
																		),
																	);
																}
																if (
																	!n ||
																	typeof n.then !=
																		`function`
																)
																	return a(
																		e,
																		t,
																		TypeError(
																			`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise: ` +
																				String(
																					n,
																				) +
																				`.`,
																		),
																	);
																n.then(
																	function (
																		e,
																	) {
																		if (
																			!s(
																				e,
																			)
																		)
																			throw TypeError(
																				`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array: ` +
																					String(
																						e,
																					) +
																					`.`,
																			);
																		if (
																			e.length !==
																			t
																				.keys
																				.length
																		)
																			throw TypeError(
																				`DataLoader must be constructed with a function which accepts Array<key> and returns Promise<Array<value>>, but the function did not return a Promise of an Array of the same length as the Array of keys.

Keys:
` +
																					String(
																						t.keys,
																					) +
																					`

Values:
` +
																					String(
																						e,
																					),
																			);
																		o(t);
																		for (
																			var n = 0;
																			n <
																			t
																				.callbacks
																				.length;
																			n++
																		) {
																			var r =
																				e[
																					n
																				];
																			r instanceof
																			Error
																				? t.callbacks[
																						n
																					].reject(
																						r,
																					)
																				: t.callbacks[
																						n
																					].resolve(
																						r,
																					);
																		}
																	},
																).catch(
																	function (
																		n,
																	) {
																		a(
																			e,
																			t,
																			n,
																		);
																	},
																);
															})(e, n);
														},
													),
													n
												);
											})(this),
											n = this._cacheMap,
											r = this._cacheKeyFn(e);
										if (n) {
											var i = n.get(r);
											if (i) {
												var c = (t.cacheHits ||= []);
												return new Promise(function (
													e,
												) {
													c.push(function () {
														e(i);
													});
												});
											}
										}
										t.keys.push(e);
										var l = new Promise(function (e, n) {
											t.callbacks.push({
												resolve: e,
												reject: n,
											});
										});
										return (n && n.set(r, l), l);
									}),
									(t.loadMany = function (e) {
										if (!s(e))
											throw TypeError(
												`The loader.loadMany() function must be called with Array<key> but got: ` +
													e +
													`.`,
											);
										for (
											var t = [], n = 0;
											n < e.length;
											n++
										)
											t.push(
												this.load(e[n]).catch(
													function (e) {
														return e;
													},
												),
											);
										return Promise.all(t);
									}),
									(t.clear = function (e) {
										var t = this._cacheMap;
										if (t) {
											var n = this._cacheKeyFn(e);
											t.delete(n);
										}
										return this;
									}),
									(t.clearAll = function () {
										var e = this._cacheMap;
										return (e && e.clear(), this);
									}),
									(t.prime = function (e, t) {
										var n = this._cacheMap;
										if (n) {
											var r,
												i = this._cacheKeyFn(e);
											n.get(i) === void 0 &&
												(t instanceof Error
													? (r =
															Promise.reject(
																t,
															)).catch(
															function () {},
														)
													: (r = Promise.resolve(t)),
												n.set(i, r));
										}
										return this;
									}),
									e
								);
							})(),
							i =
								typeof process == `object` &&
								typeof process.nextTick == `function`
									? function (e) {
											((n ||= Promise.resolve()),
												n.then(function () {
													process.nextTick(e);
												}));
										}
									: typeof setImmediate == `function`
										? function (e) {
												setImmediate(e);
											}
										: function (e) {
												setTimeout(e);
											};
						function a(e, t, n) {
							o(t);
							for (var r = 0; r < t.keys.length; r++)
								(e.clear(t.keys[r]), t.callbacks[r].reject(n));
						}
						function o(e) {
							if (e.cacheHits)
								for (var t = 0; t < e.cacheHits.length; t++)
									e.cacheHits[t]();
						}
						function s(e) {
							return (
								typeof e == `object` &&
								!!e &&
								typeof e.length == `number` &&
								(e.length === 0 ||
									(e.length > 0 &&
										Object.prototype.hasOwnProperty.call(
											e,
											e.length - 1,
										)))
							);
						}
						t.exports = r;
					},
				})(),
			)),
			(W = {
				Uint8: 1,
				Uint16: 2,
				Uint32: 4,
				BigUint64: 8,
				Int8: 1,
				Int16: 2,
				Int32: 4,
				BigInt64: 8,
				Float32: 4,
				Float64: 8,
			}),
			(G = class {
				getOffset() {
					return this.offset;
				}
				ensureLength(e) {
					let t = this.bytes.length;
					if (!(this.offset + e <= t))
						throw Error(`Reading out of bounds`);
				}
				readUint8() {
					let e = W.Uint8;
					this.ensureLength(e);
					let t = this.view.getUint8(this.offset);
					return ((this.offset += e), t);
				}
				readUint16() {
					let e = W.Uint16;
					this.ensureLength(e);
					let t = this.view.getUint16(this.offset);
					return ((this.offset += e), t);
				}
				readUint32() {
					let e = W.Uint32;
					this.ensureLength(e);
					let t = this.view.getUint32(this.offset);
					return ((this.offset += e), t);
				}
				readUint64() {
					let e = this.readBigUint64();
					return Number(e);
				}
				readBigUint64() {
					let e = W.BigUint64;
					this.ensureLength(e);
					let t = this.view.getBigUint64(this.offset);
					return ((this.offset += e), t);
				}
				readInt8() {
					let e = W.Int8;
					this.ensureLength(e);
					let t = this.view.getInt8(this.offset);
					return ((this.offset += e), t);
				}
				readInt16() {
					let e = W.Int16;
					this.ensureLength(e);
					let t = this.view.getInt16(this.offset);
					return ((this.offset += e), t);
				}
				readInt32() {
					let e = W.Int32;
					this.ensureLength(e);
					let t = this.view.getInt32(this.offset);
					return ((this.offset += e), t);
				}
				readInt64() {
					let e = this.readBigInt64();
					return Number(e);
				}
				readBigInt64() {
					let e = W.BigInt64;
					this.ensureLength(e);
					let t = this.view.getBigInt64(this.offset);
					return ((this.offset += e), t);
				}
				readFloat32() {
					let e = W.Float32;
					this.ensureLength(e);
					let t = this.view.getFloat32(this.offset);
					return ((this.offset += e), t);
				}
				readFloat64() {
					let e = W.Float64;
					this.ensureLength(e);
					let t = this.view.getFloat64(this.offset);
					return ((this.offset += e), t);
				}
				readBytes(e) {
					let t = this.offset,
						n = t + e,
						r = this.bytes.subarray(t, n);
					return ((this.offset = n), r);
				}
				readString() {
					let e = this.readUint32(),
						t = this.readBytes(e);
					return this.decoder.decode(t);
				}
				readJson() {
					let e = this.readString();
					return JSON.parse(e);
				}
				constructor(e) {
					((this.bytes = e),
						U(this, `offset`, 0),
						U(this, `view`),
						U(this, `decoder`, new TextDecoder()),
						(this.view = xt(this.bytes)));
				}
			}),
			r !== void 0 && r.requestIdleCallback,
			(K = (e) => 2 ** e - 1),
			(q = (e) => -(2 ** (e - 1))),
			(J = (e) => 2 ** (e - 1) - 1),
			q(8),
			q(16),
			q(32),
			-(BigInt(2) ** BigInt(63)),
			K(8),
			K(16),
			K(32),
			BigInt(2) ** BigInt(64) - BigInt(1),
			J(8),
			J(16),
			J(32),
			BigInt(2) ** BigInt(63) - BigInt(1),
			(Y = class e {
				static fromString(t) {
					let [n, r, i] = t.split(`/`).map(Number);
					return (
						P(L(n), `Invalid chunkId`),
						P(L(r), `Invalid offset`),
						P(L(i), `Invalid length`),
						new e(n, r, i)
					);
				}
				toString() {
					return `${this.chunkId}/${this.offset}/${this.length}`;
				}
				static read(t) {
					return new e(
						t.readUint16(),
						t.readUint32(),
						t.readUint32(),
					);
				}
				write(e) {
					(e.writeUint16(this.chunkId),
						e.writeUint32(this.offset),
						e.writeUint32(this.length));
				}
				compare(e) {
					return this.chunkId < e.chunkId
						? -1
						: this.chunkId > e.chunkId
							? 1
							: this.offset < e.offset
								? -1
								: this.offset > e.offset
									? 1
									: (P(this.length === e.length), 0);
				}
				constructor(e, t, n) {
					((this.chunkId = e), (this.offset = t), (this.length = n));
				}
			}),
			((e) => {
				((e.read = function (e) {
					let t = e.readUint8();
					switch (t) {
						case 0:
							return null;
						case 1:
							return St(e);
						case 2:
							return Tt(e);
						case 3:
							return Ot(e);
						case 4:
							return jt(e);
						case 5:
							return Pt(e);
						case 6:
							return Lt(e);
						case 7:
							return Bt(e);
						case 8:
							return Ut(e);
						case 9:
							return Kt(e);
						case 10:
							return Yt(e);
						case 11:
							return Qt(e);
						case 12:
							return tn(e);
						case 13:
							return an(e);
						default:
							F(t);
					}
				}),
					(e.write = function (e, t) {
						let n = z(t);
						if ((e.writeUint8(n), !R(t)))
							switch (t.type) {
								case p.Array:
									return Ct(e, t);
								case p.Boolean:
									return Et(e, t);
								case p.Color:
									return kt(e, t);
								case p.Date:
									return Mt(e, t);
								case p.Enum:
									return Ft(e, t);
								case p.File:
									return Rt(e, t);
								case p.Link:
									return Vt(e, t);
								case p.Number:
									return Wt(e, t);
								case p.Object:
									return qt(e, t);
								case p.ResponsiveImage:
									return Xt(e, t);
								case p.RichText:
									return $t(e, t);
								case p.VectorSetItem:
									return on(e, t);
								case p.String:
									return nn(e, t);
								default:
									F(t);
							}
					}),
					(e.compare = function (e, t, n) {
						let r = z(e),
							i = z(t);
						if (r < i) return -1;
						if (r > i) return 1;
						if (R(e) || R(t)) return 0;
						switch (e.type) {
							case p.Array:
								return (P(t.type === p.Array), wt(e, t, n));
							case p.Boolean:
								return (P(t.type === p.Boolean), Dt(e, t));
							case p.Color:
								return (P(t.type === p.Color), At(e, t));
							case p.Date:
								return (P(t.type === p.Date), Nt(e, t));
							case p.Enum:
								return (P(t.type === p.Enum), It(e, t));
							case p.File:
								return (P(t.type === p.File), zt(e, t));
							case p.Link:
								return (P(t.type === p.Link), Ht(e, t));
							case p.Number:
								return (P(t.type === p.Number), Gt(e, t));
							case p.Object:
								return (P(t.type === p.Object), Jt(e, t, n));
							case p.ResponsiveImage:
								return (
									P(t.type === p.ResponsiveImage),
									Zt(e, t)
								);
							case p.RichText:
								return (P(t.type === p.RichText), en(e, t));
							case p.VectorSetItem:
								return (
									P(t.type === p.VectorSetItem),
									sn(e, t)
								);
							case p.String:
								return (P(t.type === p.String), rn(e, t, n));
							default:
								F(e);
						}
					}));
			})((B ||= {})),
			(X = 3),
			(xn = 250),
			(Sn = [408, 429, 500, 502, 503, 504]),
			(Z = async (e, t) => {
				let n = 0;
				for (;;) {
					try {
						let r = await fetch(e, t);
						if (!Sn.includes(r.status) || ++n > X) return r;
					} catch (e) {
						if (t?.signal?.aborted || ++n > X) throw e;
					}
					await cn(n);
				}
			}),
			(Cn = class {
				read(e, t) {
					for (let n of this.chunks) {
						if (e < n.start) break;
						if (e > n.end) continue;
						if (e + t > n.end) break;
						let r = e - n.start,
							i = r + t;
						return n.data.slice(r, i);
					}
					throw Error(`Missing data`);
				}
				write(e, t) {
					let n = e,
						r = n + t.length,
						i = 0,
						a = this.chunks.length;
					for (; i < a; i++) {
						let e = this.chunks[i];
						if ((P(e, `Missing chunk`), !(n > e.end))) {
							if (n > e.start) {
								let r = n - e.start;
								((t = un(e.data.subarray(0, r), t)),
									(n = e.start));
							}
							break;
						}
					}
					for (; a > i; a--) {
						let e = this.chunks[a - 1];
						if ((P(e, `Missing chunk`), !(r < e.start))) {
							if (r < e.end) {
								let n = r - e.start,
									i = e.data.subarray(n);
								((t = un(t, i)), (r = e.end));
							}
							break;
						}
					}
					let o = { start: n, end: r, data: t },
						s = a - i;
					this.chunks.splice(i, s, o);
				}
				constructor() {
					U(this, `chunks`, []);
				}
			}),
			(Q = class e {
				static read(t) {
					let n = new e(),
						r = t.readUint16();
					for (let e = 0; e < r; e++) {
						let e = t.readString(),
							r = B.read(t);
						n.setField(e, r);
					}
					return n;
				}
				write(e) {
					for (let [t, n] of (e.writeUint16(this.fields.size),
					this.fields))
						(e.writeString(t), B.write(e, n));
				}
				getData() {
					let e = {};
					for (let [t, n] of this.fields) e[t] = n;
					return e;
				}
				setField(e, t) {
					this.fields.set(e, t);
				}
				getField(e) {
					return this.fields.get(e);
				}
				constructor() {
					U(this, `fields`, new Map());
				}
			}),
			(wn = class {
				scanItems() {
					return (
						(this.itemsPromise ??= Z(this.url).then(async (e) => {
							if (!e.ok)
								throw Error(
									`Request failed: ${e.status} ${e.statusText}`,
								);
							let t = await e.arrayBuffer(),
								n = new G(new Uint8Array(t)),
								r = [],
								i = n.readUint32();
							for (let e = 0; e < i; e++) {
								let e = n.getOffset(),
									t = Q.read(n),
									i = n.getOffset() - e,
									a = new Y(this.id, e, i).toString(),
									o = { pointer: a, data: t.getData() };
								(this.itemLoader.prime(a, o), r.push(o));
							}
							return r;
						})),
						this.itemsPromise
					);
				}
				resolveItem(e) {
					return this.itemLoader.load(e);
				}
				constructor(e, t) {
					((this.id = e),
						(this.url = t),
						U(this, `itemsPromise`),
						U(
							this,
							`itemLoader`,
							new bn.default(async (e) => {
								let t = e.map((e) => {
									let t = Y.fromString(e);
									return {
										from: t.offset,
										to: t.offset + t.length,
									};
								});
								return (await ln(this.url, t)).map((t, n) => {
									let r = new G(t),
										i = Q.read(r),
										a = e[n];
									return (
										P(a, `Missing pointer`),
										{ pointer: a, data: i.getData() }
									);
								});
							}),
						));
				}
			}),
			(Tn = class {
				async scanItems() {
					return (
						await Promise.all(
							this.chunks.map(async (e) => e.scanItems()),
						)
					).flat();
				}
				async resolveItems(e) {
					return Promise.all(
						e.map((e) => {
							let t = Y.fromString(e),
								n = this.chunks[t.chunkId];
							return (P(n, `Missing chunk`), n.resolveItem(e));
						}),
					);
				}
				compareItems(e, t) {
					let n = Y.fromString(e.pointer),
						r = Y.fromString(t.pointer);
					return n.compare(r);
				}
				compareValues(e, t, n) {
					return B.compare(e, t, n);
				}
				constructor(e) {
					((this.options = e),
						U(this, `schema`),
						U(this, `indexes`),
						U(this, `resolveRichText`),
						U(this, `resolveVectorSetItem`),
						U(this, `chunks`),
						(this.chunks = this.options.chunks.map(
							(e, t) => new wn(t, e),
						)),
						(this.schema = e.schema),
						(this.indexes = e.indexes),
						(this.resolveRichText = e.resolveRichText),
						(this.resolveVectorSetItem = e.resolveVectorSetItem));
				}
			}));
	});
function Dn(e) {
	return typeof e == `object` && !!e && !rIsValidElement(e) && An in e;
}
function On(e, ...t) {
	if (!e)
		throw Error(
			`Assertion Error` + (t.length > 0 ? `: ` + t.join(` `) : ``),
		);
}
function kn(e) {
	let n = new Map();
	return (r) => {
		let a = n.get(r);
		if (a) return a;
		let o = (function n(r) {
			switch (r[0]) {
				case 1: {
					let [, ...e] = r;
					return rCreateElement(t, void 0, ...e.map(n));
				}
				case 2: {
					let [, e, ...t] = r;
					return rCreateElement(te, e, ...t.map(n));
				}
				case 3: {
					let [, t, n] = r,
						a = e[t];
					return (
						On(a, `Module not found`),
						Dn(a) && a.preload(),
						rJsx(ne, {
							componentIdentifier: t,
							children: (e) => rJsx(a, { ...e, ...n }),
						})
					);
				}
				case 4: {
					let [, e, t, ...i] = r,
						a = i.map(n);
					return rCreateElement(e === `a` ? l.a : e, t, ...a);
				}
				case 5: {
					let [, e] = r;
					return e;
				}
			}
		})(JSON.parse(r));
		return (n.set(r, o), o);
	};
}
var $,
	An,
	jn,
	Mn = lazyInit(() => {
		(o(),
			f(),
			n(),
			(An = `preload`),
			(jn =
				((($ = jn || {})[($.Fragment = 1)] = `Fragment`),
				($[($.Link = 2)] = `Link`),
				($[($.Module = 3)] = `Module`),
				($[($.Tag = 4)] = `Tag`),
				($[($.Text = 5)] = `Text`),
				$)));
	}),
	Nn,
	Pn,
	Fn,
	In,
	Ln,
	Rn,
	zn = lazyInit(() => {
		(f(),
			En(),
			Mn(),
			(Nn = {
				createdAt: { isNullable: !0, type: p.Date },
				ewiVsVh5f: { isNullable: !0, type: p.String },
				id: { isNullable: !1, type: p.String },
				nextItemId: { isNullable: !0, type: p.String },
				previousItemId: { isNullable: !0, type: p.String },
				TBDlVXOGA: { isNullable: !0, type: p.String },
				updatedAt: { isNullable: !0, type: p.Date },
				Xgdhwh5Me: { isNullable: !0, type: p.String },
				yi1VnvdUf: { isNullable: !0, type: p.ResponsiveImage },
			}),
			(Pn = []),
			(Fn = (e) => {
				let t = Pn[e];
				if (t) return t().then((e) => e.default);
			}),
			(In = kn({})),
			new ee(new d()),
			(Ln = {
				collectionByLocaleId: {
					default: new Tn({
						chunks: [
							new URL(
								`./PxI14If8r-chunk-default-0.framercms`,
								`https://framerusercontent.com/modules/SCArNPeINkPrqR3gGs8i/aMMtzLBrCllI9FtStRMt/PxI14If8r.js`,
							).href.replace(`/modules/`, `/cms/`),
						],
						indexes: [],
						resolveRichText: In,
						resolveVectorSetItem: Fn,
						schema: Nn,
					}),
				},
				displayName: `Categories of Projects`,
			}),
			(Rn = Ln),
			u(Ln, {
				Xgdhwh5Me: {
					defaultValue: ``,
					title: `Name of Category`,
					type: p.String,
				},
				TBDlVXOGA: { title: `Slug`, type: p.String },
				ewiVsVh5f: {
					defaultValue: ``,
					displayTextArea: !0,
					title: `Description`,
					type: p.String,
				},
				yi1VnvdUf: { title: `Image`, type: p.ResponsiveImage },
				createdAt: { title: `Created`, type: p.Date },
				updatedAt: { title: `Updated`, type: p.Date },
				previousItemId: {
					dataIdentifier: `local-module:collection/PxI14If8r:default`,
					title: `Previous`,
					type: p.CollectionReference,
				},
				nextItemId: {
					dataIdentifier: `local-module:collection/PxI14If8r:default`,
					title: `Next`,
					type: p.CollectionReference,
				},
			}));
	});
export { bt as i, zn as n, yt as r, Rn as t };
