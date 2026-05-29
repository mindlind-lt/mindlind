import { t as e } from "./rolldown-runtime.mjs";
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
import { S as d, a as f, r as ee, t as p } from "./motion.mjs";
import {
	A as m,
	Et as h,
	F as g,
	H as _,
	O as v,
	P as y,
	Tt as te,
	X as b,
	a as x,
	ct as ne,
	g as S,
	k as C,
	lt as re,
	p as w,
	r as T,
	vt as ie,
} from "./framer.mjs";
var E,
	D,
	O,
	k = e(() => {
		(b(),
			g.loadFonts([
				`GF;Space Mono-regular`,
				`GF;Space Mono-700`,
				`GF;Space Mono-700italic`,
				`GF;Space Mono-italic`,
			]),
			(E = [
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
			(D = [
				`.framer-oi3Va .framer-styles-preset-5fkg2j:not(.rich-text-wrapper), .framer-oi3Va .framer-styles-preset-5fkg2j.rich-text-wrapper p { --framer-font-family: "Space Mono", monospace; --framer-font-family-bold: "Space Mono", monospace; --framer-font-family-bold-italic: "Space Mono", monospace; --framer-font-family-italic: "Space Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 17px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.01em; --framer-line-height: 20px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
			]),
			(O = `framer-oi3Va`));
	}),
	A,
	j,
	M,
	ae,
	N,
	P = e(() => {
		(rUseDeferredValue(),
			b(),
			r(),
			(A = `var(--framer-icon-mask)`),
			(j = rForwardRef((e, t) => {
				let { animated: n, layoutId: r, children: a, ...o } = e;
				return n
					? rJsx(d.img, { ...o, layoutId: r, ref: t })
					: rJsx(`img`, { ...o, ref: t });
			})),
			(M = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(ae = h(
				rForwardRef(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: a,
						variant: o,
						...s
					} = M(e);
					return rJsx(j, {
						...s,
						alt: ``,
						className: y(`framer-Lk9hO`, r),
						layoutId: a,
						ref: t,
						src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 14.811 13.043 C 14.669 13.043 14.554 12.928 14.554 12.787 L 14.554 0.257 C 14.554 0.115 14.669 0 14.811 0 L 15.123 0 C 15.24 0.001 15.341 0.079 15.371 0.192 C 16.921 6.063 21.523 10.638 27.404 12.153 C 27.517 12.182 27.597 12.285 27.597 12.402 L 27.597 12.786 C 27.597 12.928 27.482 13.043 27.34 13.043 Z M 14.811 27.581 C 14.669 27.581 14.554 27.466 14.554 27.325 L 14.554 14.795 C 14.554 14.653 14.668 14.539 14.81 14.538 L 27.34 14.538 C 27.482 14.539 27.596 14.653 27.596 14.795 L 27.596 15.106 C 27.597 15.223 27.519 15.326 27.406 15.356 C 21.535 16.905 16.959 21.508 15.444 27.388 C 15.415 27.501 15.312 27.581 15.195 27.581 Z M 12.226 27.389 C 10.676 21.518 6.073 16.943 0.193 15.429 C 0.08 15.399 0 15.297 0 15.179 L 0 14.795 C 0 14.653 0.115 14.538 0.257 14.538 L 12.786 14.538 C 12.928 14.538 13.043 14.653 13.043 14.795 L 13.043 27.324 C 13.043 27.466 12.928 27.581 12.786 27.581 L 12.474 27.581 C 12.357 27.581 12.256 27.503 12.226 27.389 Z M 0 12.786 L 0 12.475 C 0 12.358 0.078 12.256 0.191 12.226 C 6.063 10.676 10.638 6.074 12.153 0.193 C 12.182 0.08 12.285 0 12.402 0 L 12.786 0 C 12.928 0 13.043 0.115 13.043 0.257 L 13.043 12.786 C 13.043 12.928 12.928 13.043 12.786 13.043 L 0.257 13.043 C 0.115 13.043 0 12.928 0 12.786 Z" fill="rgb(19, 19, 19)" height="27.581000106811526px" id="K60wO1mQ5" transform="translate(6 6)" width="27.597000854492183px"/></svg>`,
						style: { ...n },
					});
				}),
				[
					`.framer-Lk9hO { -webkit-mask: ${A}; aspect-ratio: 1; display: block; mask: ${A}; user-select: none; width: 40px; }`,
				],
				`framer-Lk9hO`,
			)),
			(ae.displayName = `Contra`),
			(N = ae));
	}),
	F,
	I,
	L,
	R,
	z,
	B = e(() => {
		(rUseDeferredValue(),
			b(),
			r(),
			(F = `var(--framer-icon-mask)`),
			(I = rForwardRef((e, t) => {
				let { animated: n, layoutId: r, children: a, ...o } = e;
				return n
					? rJsx(d.img, { ...o, layoutId: r, ref: t })
					: rJsx(`img`, { ...o, ref: t });
			})),
			(L = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(R = h(
				rForwardRef(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: a,
						variant: o,
						...s
					} = L(e);
					return rJsx(I, {
						...s,
						alt: ``,
						className: y(`framer-1kxPX`, r),
						layoutId: a,
						ref: t,
						src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 9.598 0 C 10.551 0 11.43 0.074 12.236 0.297 C 13.042 0.445 13.701 0.742 14.288 1.113 C 14.874 1.484 15.313 2.004 15.606 2.671 C 15.9 3.339 16.046 4.155 16.046 5.046 C 16.046 6.085 15.826 6.975 15.313 7.643 C 14.874 8.311 14.141 8.905 13.262 9.35 C 14.507 9.721 15.46 10.389 16.046 11.279 C 16.632 12.17 16.999 13.283 16.999 14.544 C 16.999 15.583 16.779 16.473 16.412 17.216 C 16.046 17.958 15.46 18.625 14.8 19.071 C 14.141 19.516 13.335 19.887 12.456 20.11 C 11.577 20.332 10.697 20.481 9.818 20.481 L 0 20.481 L 0 0 Z M 9.012 8.311 C 9.818 8.311 10.478 8.088 10.99 7.717 C 11.503 7.346 11.723 6.678 11.723 5.862 C 11.723 5.417 11.65 4.972 11.503 4.675 C 11.357 4.378 11.137 4.155 10.844 3.933 C 10.551 3.784 10.258 3.636 9.891 3.562 C 9.525 3.488 9.159 3.488 8.719 3.488 L 4.469 3.488 L 4.469 8.311 Z M 9.232 17.067 C 9.672 17.067 10.111 16.993 10.478 16.919 C 10.844 16.845 11.21 16.696 11.503 16.473 C 11.796 16.251 12.016 16.028 12.236 15.657 C 12.383 15.286 12.529 14.841 12.529 14.322 C 12.529 13.283 12.236 12.541 11.65 12.021 C 11.064 11.576 10.258 11.353 9.305 11.353 L 4.469 11.353 L 4.469 17.067 Z M 23.373 16.993 C 23.959 17.587 24.838 17.883 26.011 17.883 C 26.817 17.883 27.549 17.661 28.136 17.29 C 28.722 16.845 29.088 16.399 29.235 15.954 L 32.825 15.954 C 32.239 17.735 31.359 18.996 30.187 19.813 C 29.015 20.555 27.623 21 25.937 21 C 24.765 21 23.739 20.777 22.787 20.406 C 21.834 20.035 21.102 19.516 20.442 18.774 C 19.783 18.106 19.27 17.29 18.977 16.325 C 18.61 15.36 18.464 14.322 18.464 13.134 C 18.464 12.021 18.61 10.982 18.977 10.018 C 19.343 9.053 19.856 8.237 20.515 7.495 C 21.175 6.827 21.981 6.233 22.86 5.862 C 23.813 5.491 24.765 5.269 25.937 5.269 C 27.183 5.269 28.282 5.491 29.235 6.011 C 30.187 6.53 30.92 7.124 31.506 8.014 C 32.092 8.83 32.532 9.795 32.825 10.834 C 32.971 11.873 33.044 12.912 32.971 14.099 L 22.347 14.099 C 22.347 15.286 22.787 16.399 23.373 16.993 Z M 27.989 9.201 C 27.476 8.682 26.67 8.385 25.718 8.385 C 25.058 8.385 24.545 8.534 24.106 8.756 C 23.666 8.979 23.373 9.276 23.08 9.572 C 22.787 9.869 22.64 10.24 22.567 10.611 C 22.494 10.982 22.42 11.279 22.42 11.576 L 29.015 11.576 C 28.868 10.463 28.502 9.721 27.989 9.201 Z M 21.541 1.41 L 29.747 1.41 L 29.747 3.413 L 21.541 3.413 Z" fill="rgb(0, 0, 0)" height="21px" id="ndezpvvYY" transform="translate(4 9.5)" width="33px"/></svg>`,
						style: { ...n },
					});
				}),
				[
					`.framer-1kxPX { -webkit-mask: ${F}; aspect-ratio: 1; display: block; mask: ${F}; user-select: none; width: 40px; }`,
				],
				`framer-1kxPX`,
			)),
			(R.displayName = `Behance`),
			(z = R));
	}),
	V,
	oe,
	se,
	H,
	U,
	ce = e(() => {
		(rUseDeferredValue(),
			b(),
			r(),
			(V = `var(--framer-icon-mask)`),
			(oe = rForwardRef((e, t) => {
				let { animated: n, layoutId: r, children: a, ...o } = e;
				return n
					? rJsx(d.img, { ...o, layoutId: r, ref: t })
					: rJsx(`img`, { ...o, ref: t });
			})),
			(se = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(H = h(
				rForwardRef(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: a,
						variant: o,
						...s
					} = se(e);
					return rJsx(oe, {
						...s,
						alt: ``,
						className: y(`framer-TwpIa`, r),
						layoutId: a,
						ref: t,
						src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><g d="M 13.513 6.576 C 11.675 6.575 9.913 7.305 8.614 8.604 C 7.315 9.903 6.585 11.666 6.585 13.503 C 6.585 15.341 7.315 17.103 8.614 18.402 C 9.913 19.701 11.675 20.431 13.513 20.431 C 15.35 20.431 17.113 19.701 18.412 18.402 C 19.711 17.103 20.441 15.341 20.441 13.503 C 20.441 11.666 19.711 9.903 18.412 8.604 C 17.113 7.305 15.35 6.575 13.513 6.576 Z M 13.513 18 C 11.03 17.999 9.018 15.986 9.018 13.504 C 9.019 11.021 11.031 9.009 13.514 9.009 C 15.996 9.009 18.009 11.021 18.009 13.503 C 18.01 14.696 17.537 15.84 16.693 16.683 C 15.85 17.527 14.706 18 13.513 18 Z M 19.067 0.085 C 16.583 -0.031 10.43 -0.025 7.944 0.085 C 5.759 0.187 3.832 0.715 2.278 2.268 C -0.318 4.865 0.014 8.364 0.014 13.495 C 0.014 18.746 -0.279 22.164 2.278 24.721 C 4.885 27.326 8.434 26.985 13.505 26.985 C 18.707 26.985 20.502 26.989 22.342 26.277 C 24.843 25.306 26.73 23.07 26.915 19.055 C 27.032 16.57 27.025 10.419 26.915 7.933 C 26.692 3.193 24.148 0.319 19.067 0.085 Z M 22.999 23.003 C 21.297 24.705 18.935 24.553 13.472 24.553 C 7.847 24.553 5.592 24.636 3.946 22.986 C 2.05 21.099 2.393 18.07 2.393 13.477 C 2.393 7.261 1.755 2.785 7.993 2.465 C 9.427 2.415 9.849 2.398 13.456 2.398 L 13.507 2.432 C 19.502 2.432 24.206 1.804 24.488 8.041 C 24.552 9.464 24.567 9.891 24.567 13.493 C 24.566 19.053 24.672 21.322 22.999 23.003 Z M 19.09 6.285 C 19.09 5.391 19.815 4.666 20.709 4.666 C 21.603 4.666 22.328 5.391 22.328 6.285 C 22.328 7.179 21.603 7.904 20.709 7.904 C 19.815 7.904 19.09 7.179 19.09 6.285 Z" fill="transparent" height="27px" id="XW97vzXqM" transform="translate(6.5 7)" width="27px"><path d="M 6.928 0 C 5.09 0 3.328 0.729 2.029 2.029 C 0.729 3.328 0 5.09 0 6.928 C 0 8.765 0.729 10.527 2.029 11.827 C 3.328 13.126 5.09 13.856 6.928 13.855 C 8.765 13.856 10.527 13.126 11.827 11.827 C 13.126 10.527 13.856 8.765 13.856 6.928 C 13.856 5.09 13.126 3.328 11.827 2.029 C 10.527 0.729 8.765 0 6.928 0 Z M 6.928 11.424 C 4.445 11.424 2.433 9.411 2.433 6.928 C 2.434 4.446 4.446 2.434 6.929 2.433 C 9.411 2.433 11.424 4.445 11.424 6.928 C 11.425 8.12 10.951 9.264 10.108 10.108 C 9.265 10.951 8.121 11.425 6.928 11.424 Z" fill="rgb(0, 0, 0)" height="13.855258207601745px" id="NA0lN9YDd" transform="translate(6.585 6.576)" width="13.855503667549195px"/><path d="M 19.067 0.085 C 16.583 -0.031 10.43 -0.025 7.944 0.085 C 5.759 0.187 3.832 0.715 2.278 2.268 C -0.318 4.865 0.014 8.364 0.014 13.495 C 0.014 18.746 -0.279 22.164 2.278 24.721 C 4.885 27.326 8.434 26.985 13.505 26.985 C 18.707 26.985 20.502 26.989 22.342 26.277 C 24.843 25.306 26.73 23.07 26.915 19.055 C 27.032 16.57 27.025 10.419 26.915 7.933 C 26.692 3.193 24.148 0.319 19.067 0.085 Z M 22.999 23.003 C 21.297 24.705 18.935 24.553 13.472 24.553 C 7.847 24.553 5.592 24.636 3.946 22.986 C 2.05 21.099 2.393 18.07 2.393 13.477 C 2.393 7.261 1.755 2.785 7.993 2.465 C 9.427 2.415 9.849 2.398 13.456 2.398 L 13.507 2.432 C 19.502 2.432 24.206 1.804 24.488 8.041 C 24.552 9.464 24.567 9.891 24.567 13.493 C 24.566 19.053 24.672 21.322 22.999 23.003 Z" fill="rgb(0, 0, 0)" height="27px" id="Uddm_tH8Q" transform="translate(0 0)" width="27px"/><path d="M 0 1.619 C 0 0.725 0.725 0 1.619 0 C 2.513 0 3.238 0.725 3.238 1.619 C 3.238 2.513 2.513 3.238 1.619 3.238 C 0.725 3.238 0 2.513 0 1.619 Z" fill="rgb(0, 0, 0)" height="3.237693362952033px" id="MFzHC1Kyg" transform="translate(19.09 4.666)" width="3.237750814265464px"/></g></svg>`,
						style: { ...n },
					});
				}),
				[
					`.framer-TwpIa { -webkit-mask: ${V}; aspect-ratio: 1; display: block; mask: ${V}; user-select: none; width: 40px; }`,
				],
				`framer-TwpIa`,
			)),
			(H.displayName = `Instagram`),
			(U = H));
	}),
	W,
	le,
	ue,
	G,
	K,
	de = e(() => {
		(rUseDeferredValue(),
			b(),
			r(),
			(W = `var(--framer-icon-mask)`),
			(le = rForwardRef((e, t) => {
				let { animated: n, layoutId: r, children: a, ...o } = e;
				return n
					? rJsx(d.img, { ...o, layoutId: r, ref: t })
					: rJsx(`img`, { ...o, ref: t });
			})),
			(ue = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(G = h(
				rForwardRef(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: a,
						variant: o,
						...s
					} = ue(e);
					return rJsx(le, {
						...s,
						alt: ``,
						className: y(`framer-gPUmW`, r),
						layoutId: a,
						ref: t,
						src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 20.475 0 L 24.462 0 L 15.752 9.742 L 26 23 L 17.977 23 L 11.689 14.96 L 4.502 23 L 0.511 23 L 9.826 12.577 L 0 0.002 L 8.227 0.002 L 13.903 7.349 Z M 19.073 20.665 L 21.283 20.665 L 7.02 2.213 L 4.65 2.213 Z" fill="rgb(0, 0, 0)" height="23px" id="k_aEvNaGj" transform="translate(7.5 8.5)" width="26px"/></svg>`,
						style: { ...n },
					});
				}),
				[
					`.framer-gPUmW { -webkit-mask: ${W}; aspect-ratio: 1; display: block; mask: ${W}; user-select: none; width: 40px; }`,
				],
				`framer-gPUmW`,
			)),
			(G.displayName = `X`),
			(K = G));
	}),
	q,
	fe,
	pe,
	J,
	me,
	he = e(() => {
		(rUseDeferredValue(),
			b(),
			r(),
			(q = `var(--framer-icon-mask)`),
			(fe = rForwardRef((e, t) => {
				let { animated: n, layoutId: r, children: a, ...o } = e;
				return n
					? rJsx(d.img, { ...o, layoutId: r, ref: t })
					: rJsx(`img`, { ...o, ref: t });
			})),
			(pe = ({ height: e, id: t, width: n, ...r }) => ({ ...r })),
			(J = h(
				rForwardRef(function (e, t) {
					let {
						style: n,
						className: r,
						layoutId: a,
						variant: o,
						...s
					} = pe(e);
					return rJsx(fe, {
						...s,
						alt: ``,
						className: y(`framer-nd14A`, r),
						layoutId: a,
						ref: t,
						src: `data:image/svg+xml,<svg display="block" role="presentation" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M 23.4 0 L 2.6 0 C 1.17 0 0 1.17 0 2.6 L 0 23.4 C 0 24.83 1.17 26 2.6 26 L 23.4 26 C 24.83 26 26 24.83 26 23.4 L 26 2.6 C 26 1.17 24.83 0 23.4 0 Z M 7.8 22.1 L 3.9 22.1 L 3.9 10.4 L 7.8 10.4 Z M 5.85 8.19 C 4.55 8.19 3.51 7.15 3.51 5.85 C 3.51 4.55 4.55 3.51 5.85 3.51 C 7.15 3.51 8.19 4.55 8.19 5.85 C 8.19 7.15 7.15 8.19 5.85 8.19 Z M 22.1 22.1 L 18.2 22.1 L 18.2 15.21 C 18.2 14.17 17.29 13.26 16.25 13.26 C 15.21 13.26 14.3 14.17 14.3 15.21 L 14.3 22.1 L 10.4 22.1 L 10.4 10.4 L 14.3 10.4 L 14.3 11.96 C 14.95 10.92 16.38 10.14 17.55 10.14 C 20.02 10.14 22.1 12.22 22.1 14.69 Z" fill="rgb(0, 0, 0)" height="26px" id="rLyD0KG0h" transform="translate(7 7)" width="26px"/></svg>`,
						style: { ...n },
					});
				}),
				[
					`.framer-nd14A { -webkit-mask: ${q}; aspect-ratio: 1; display: block; mask: ${q}; user-select: none; width: 40px; }`,
				],
				`framer-nd14A`,
			)),
			(J.displayName = `Linkedin`),
			(me = J));
	});
function ge(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var _e,
	ve,
	ye,
	be,
	xe,
	Se,
	Ce,
	we,
	Te,
	Y,
	X,
	Ee = e(() => {
		(rUseDeferredValue(),
			b(),
			p(),
			r(),
			he(),
			(_e = [`SojIkM7y_`, `jfDccm5D1`, `RXAfMhx00`, `KcF5q6tQW`]),
			(ve = `framer-FJV3P`),
			(ye = {
				jfDccm5D1: `framer-v-19ytd3j`,
				KcF5q6tQW: `framer-v-178k2qh`,
				RXAfMhx00: `framer-v-7zgxf8`,
				SojIkM7y_: `framer-v-gaqzk1`,
			}),
			(be = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(xe = ({ value: e, children: t }) => {
				let r = rUseContext(f),
					a = e ?? r.transition,
					s = rUseMemo(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return rJsx(f.Provider, { value: s, children: t });
			}),
			(Se = d.create(t)),
			(Ce = {
				"Variant 1 - Hover": `jfDccm5D1`,
				"Variant 1": `SojIkM7y_`,
				"Variant 2 - Hover": `KcF5q6tQW`,
				"Variant 2": `RXAfMhx00`,
			}),
			(we = ({ height: e, icon: t, id: n, link: r, width: i, ...a }) => ({
				...a,
				ag4ehmkPZ: t ?? a.ag4ehmkPZ ?? me,
				bwzBtr_4j: r ?? a.bwzBtr_4j,
				variant: Ce[a.variant] ?? a.variant ?? `SojIkM7y_`,
			})),
			(Te = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Y = h(
				rForwardRef(function (e, t) {
					let n = rUseRef(null),
						r = t ?? n,
						a = rUseId(),
						{ activeLocale: o, setLocale: l } = ie();
					re();
					let {
							style: f,
							className: p,
							layoutId: m,
							variant: h,
							ag4ehmkPZ: g,
							bwzBtr_4j: _,
							...v
						} = we(e),
						{
							baseVariant: b,
							classNames: x,
							clearLoadingGesture: C,
							gestureHandlers: T,
							gestureVariant: E,
							isLoading: D,
							setGestureState: O,
							setVariant: k,
							variants: A,
						} = te({
							cycleOrder: _e,
							defaultVariant: `SojIkM7y_`,
							ref: r,
							variant: h,
							variantClassNames: ye,
						}),
						j = Te(e, A),
						{ activeVariantCallback: M, delay: ae } = ne(b),
						N = M(async (...e) => {
							(O({ isHovered: !0 }), k(`jfDccm5D1`));
						}),
						P = M(async (...e) => {
							(O({ isHovered: !1 }), k(`SojIkM7y_`));
						}),
						F = M(async (...e) => {
							(O({ isHovered: !0 }), k(`KcF5q6tQW`));
						}),
						I = M(async (...e) => {
							(O({ isHovered: !1 }), k(`RXAfMhx00`));
						}),
						L = y(ve),
						R = () => !![`jfDccm5D1`, `KcF5q6tQW`].includes(b);
					return rJsx(ee, {
						id: m ?? a,
						children: rJsx(Se, {
							animate: A,
							initial: !1,
							children: rJsx(xe, {
								value: be,
								children: rJsx(S, {
									href: _,
									motionChild: !0,
									nodeId: `SojIkM7y_`,
									openInNewTab: !0,
									scopeId: `yLwPnPhIz`,
									smoothScroll: !1,
									children: rJsxs(d.a, {
										...v,
										...T,
										className: `${y(L, `framer-gaqzk1`, p, x)} framer-f16gsk`,
										"data-highlight": !0,
										layoutDependency: j,
										layoutId: `SojIkM7y_`,
										onMouseEnter: N,
										ref: r,
										style: { ...f },
										...ge(
											{
												jfDccm5D1: {
													onMouseLeave: P,
												},
												KcF5q6tQW: {
													onMouseEnter: void 0,
													onMouseLeave: I,
												},
												RXAfMhx00: {
													onMouseEnter: F,
												},
											},
											b,
											E,
										),
										children: [
											R() &&
												rJsx(d.div, {
													className: `framer-phmb5k`,
													layoutDependency: j,
													layoutId: `s2kBNgEy6`,
													style: {
														backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
														borderBottomLeftRadius: 6,
														borderBottomRightRadius: 6,
														borderTopLeftRadius: 6,
														borderTopRightRadius: 6,
														opacity: 0.57,
													},
													variants: {
														jfDccm5D1: {
															opacity: 0.05,
														},
														KcF5q6tQW: {
															backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
															opacity: 0.04,
														},
													},
												}),
											rJsx(w, {
												animated: !0,
												className: `framer-jq73x8`,
												Component: g,
												layoutDependency: j,
												layoutId: `KWEs8z2x_`,
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
					`.framer-FJV3P.framer-f16gsk, .framer-FJV3P .framer-f16gsk { display: block; }`,
					`.framer-FJV3P.framer-gaqzk1 { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: 40px; justify-content: center; overflow: visible; padding: 10px; position: relative; text-decoration: none; width: 40px; }`,
					`.framer-FJV3P .framer-phmb5k { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 40px); left: 0px; overflow: var(--overflow-clip-fallback, clip); position: absolute; right: 0px; top: 0px; will-change: var(--framer-will-change-override, transform); z-index: 1; }`,
					`.framer-FJV3P .framer-jq73x8 { flex: none; height: var(--framer-aspect-ratio-supported, 30px); position: relative; width: 30px; z-index: 2; }`,
					`.framer-FJV3P.framer-v-19ytd3j .framer-phmb5k, .framer-FJV3P.framer-v-178k2qh .framer-phmb5k { order: 0; }`,
					`.framer-FJV3P.framer-v-19ytd3j .framer-jq73x8, .framer-FJV3P.framer-v-178k2qh .framer-jq73x8 { order: 1; }`,
				],
				`framer-FJV3P`,
			)),
			(X = Y),
			(Y.displayName = `Social Network Icon and Link`),
			(Y.defaultProps = { height: 40, width: 40 }),
			m(Y, {
				variant: {
					options: [
						`SojIkM7y_`,
						`jfDccm5D1`,
						`RXAfMhx00`,
						`KcF5q6tQW`,
					],
					optionTitles: [
						`Variant 1`,
						`Variant 1 - Hover`,
						`Variant 2`,
						`Variant 2 - Hover`,
					],
					title: `Variant`,
					type: x.Enum,
				},
				ag4ehmkPZ: {
					defaultValue: {
						identifier: `local-module:vector/cu9apDj9s:default`,
						moduleId: `B1sjnFBIFiZ9aW8BCV6j`,
					},
					setModuleId: `ZCFu2K1zhbebpbFdqjyv`,
					title: `Icon`,
					type: x.VectorSetItem,
				},
				bwzBtr_4j: { title: `Link`, type: x.Link },
			}),
			C(Y, [{ explicitInter: !0, fonts: [] }], {
				supportsExplicitInterCodegen: !0,
			}));
	});
function Z(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var De,
	Oe,
	ke,
	Ae,
	je,
	Me,
	Q,
	Ne,
	Pe,
	Fe,
	Ie,
	Le,
	$,
	Re,
	ze = e(() => {
		(rUseDeferredValue(),
			b(),
			p(),
			r(),
			P(),
			B(),
			ce(),
			de(),
			Ee(),
			(De = _(X)),
			(Oe = [`p_hW1uUUY`, `skpqRIFOX`]),
			(ke = `framer-vvcUa`),
			(Ae = {
				p_hW1uUUY: `framer-v-173n7xw`,
				skpqRIFOX: `framer-v-tw42d1`,
			}),
			(je = (e) => {
				if (typeof e != `number`) return e;
				if (Number.isFinite(e)) return Math.max(0, e) + `px`;
			}),
			(Me = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Q = (e) =>
				Array.isArray(e) ? e.length > 0 : e != null && e !== ``),
			(Ne = ({ value: e, children: t }) => {
				let r = rUseContext(f),
					a = e ?? r.transition,
					s = rUseMemo(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return rJsx(f.Provider, { value: s, children: t });
			}),
			(Pe = d.create(t)),
			(Fe = { "Variant 1": `p_hW1uUUY`, "Variant 2": `skpqRIFOX` }),
			(Ie = ({
				gap: e,
				height: t,
				icon1: n,
				icon2: r,
				icon3: i,
				icon4: a,
				id: o,
				link1: s,
				link2: c,
				link3: l,
				link4: u,
				width: d,
				...f
			}) => ({
				...f,
				BpZuAjo8u: r ?? f.BpZuAjo8u ?? K,
				CH5TPWpzq: c ?? f.CH5TPWpzq,
				cUcZIlV8K: e ?? f.cUcZIlV8K ?? `15px 25px`,
				JcnQOhlFO: a ?? f.JcnQOhlFO ?? U,
				JgEcj5MZ2: l ?? f.JgEcj5MZ2,
				mBKweeyKN: s ?? f.mBKweeyKN,
				pnjY4frPA: n ?? f.pnjY4frPA ?? N,
				TF4NQ4wK2: i ?? f.TF4NQ4wK2 ?? z,
				variant: Fe[f.variant] ?? f.variant ?? `p_hW1uUUY`,
				wzwb8FVyv: u ?? f.wzwb8FVyv,
			})),
			(Le = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			($ = h(
				rForwardRef(function (e, t) {
					let n = rUseRef(null),
						r = t ?? n,
						a = rUseId(),
						{ activeLocale: o, setLocale: l } = ie();
					re();
					let {
							style: f,
							className: p,
							layoutId: m,
							variant: h,
							pnjY4frPA: g,
							mBKweeyKN: _,
							BpZuAjo8u: b,
							CH5TPWpzq: x,
							TF4NQ4wK2: ne,
							JgEcj5MZ2: S,
							JcnQOhlFO: C,
							wzwb8FVyv: w,
							cUcZIlV8K: E,
							...D
						} = Ie(e),
						{
							baseVariant: O,
							classNames: k,
							clearLoadingGesture: A,
							gestureHandlers: j,
							gestureVariant: M,
							isLoading: ae,
							setGestureState: N,
							setVariant: P,
							variants: F,
						} = te({
							cycleOrder: Oe,
							defaultVariant: `p_hW1uUUY`,
							ref: r,
							variant: h,
							variantClassNames: Ae,
						}),
						I = Le(e, F),
						L = y(ke),
						R = Q(_),
						z = Q(x),
						B = Q(S),
						V = Q(w);
					return rJsx(ee, {
						id: m ?? a,
						children: rJsx(Pe, {
							animate: F,
							initial: !1,
							children: rJsx(Ne, {
								value: Me,
								children: rJsxs(d.div, {
									...D,
									...j,
									className: y(L, `framer-173n7xw`, p, k),
									layoutDependency: I,
									layoutId: `p_hW1uUUY`,
									ref: r,
									style: { "--12xdw42": je(E), ...f },
									...Z(
										{
											skpqRIFOX: {
											},
										},
										O,
										M,
									),
									children: [
										R &&
											rJsx(T, {
												height: 40,
												width: `40px`,
												children: rJsx(v, {
													className: `framer-y0u1op-container`,
													layoutDependency: I,
													layoutId: `cgop1Z5iN-container`,
													nodeId: `cgop1Z5iN`,
													rendersWithMotion: !0,
													scopeId: `zdF0WZXbC`,
													children: rJsx(X, {
														ag4ehmkPZ: g,
														bwzBtr_4j: _,
														height: `100%`,
														id: `cgop1Z5iN`,
														layoutId: `cgop1Z5iN`,
														style: {
															height: `100%`,
															width: `100%`,
														},
														variant: `SojIkM7y_`,
														width: `100%`,
														...Z(
															{
																skpqRIFOX: {
																	variant: `RXAfMhx00`,
																},
															},
															O,
															M,
														),
													}),
												}),
											}),
										z &&
											rJsx(T, {
												height: 40,
												width: `40px`,
												children: rJsx(v, {
													className: `framer-1iwg1bv-container`,
													layoutDependency: I,
													layoutId: `jzGHwGcFs-container`,
													nodeId: `jzGHwGcFs`,
													rendersWithMotion: !0,
													scopeId: `zdF0WZXbC`,
													children: rJsx(X, {
														ag4ehmkPZ: b,
														bwzBtr_4j: x,
														height: `100%`,
														id: `jzGHwGcFs`,
														layoutId: `jzGHwGcFs`,
														style: {
															height: `100%`,
															width: `100%`,
														},
														variant: `SojIkM7y_`,
														width: `100%`,
														...Z(
															{
																skpqRIFOX: {
																	variant: `RXAfMhx00`,
																},
															},
															O,
															M,
														),
													}),
												}),
											}),
										B &&
											rJsx(T, {
												height: 40,
												width: `40px`,
												children: rJsx(v, {
													className: `framer-i7m4r0-container`,
													layoutDependency: I,
													layoutId: `aEZPsbe_r-container`,
													nodeId: `aEZPsbe_r`,
													rendersWithMotion: !0,
													scopeId: `zdF0WZXbC`,
													children: rJsx(X, {
														ag4ehmkPZ: ne,
														bwzBtr_4j: S,
														height: `100%`,
														id: `aEZPsbe_r`,
														layoutId: `aEZPsbe_r`,
														style: {
															height: `100%`,
															width: `100%`,
														},
														variant: `SojIkM7y_`,
														width: `100%`,
														...Z(
															{
																skpqRIFOX: {
																	variant: `RXAfMhx00`,
																},
															},
															O,
															M,
														),
													}),
												}),
											}),
										V &&
											rJsx(T, {
												height: 40,
												width: `40px`,
												children: rJsx(v, {
													className: `framer-grshjn-container`,
													layoutDependency: I,
													layoutId: `JTz9dDVZz-container`,
													nodeId: `JTz9dDVZz`,
													rendersWithMotion: !0,
													scopeId: `zdF0WZXbC`,
													children: rJsx(X, {
														ag4ehmkPZ: C,
														bwzBtr_4j: w,
														height: `100%`,
														id: `JTz9dDVZz`,
														layoutId: `JTz9dDVZz`,
														style: {
															height: `100%`,
															width: `100%`,
														},
														variant: `SojIkM7y_`,
														width: `100%`,
														...Z(
															{
																skpqRIFOX: {
																	variant: `RXAfMhx00`,
																},
															},
															O,
															M,
														),
													}),
												}),
											}),
									],
								}),
							}),
						}),
					});
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-vvcUa.framer-1bcnldn, .framer-vvcUa .framer-1bcnldn { display: block; }`,
					`.framer-vvcUa.framer-173n7xw { align-content: center; align-items: center; display: flex; flex-direction: row; flex-wrap: wrap; gap: var(--12xdw42); height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 300px; }`,
					`.framer-vvcUa .framer-y0u1op-container, .framer-vvcUa .framer-1iwg1bv-container, .framer-vvcUa .framer-i7m4r0-container, .framer-vvcUa .framer-grshjn-container { flex: none; height: 40px; position: relative; width: 40px; }`,
				],
				`framer-vvcUa`,
			)),
			(Re = $),
			($.displayName = `Social Networks - Widget`),
			($.defaultProps = { height: 0, width: 300 }),
			m($, {
				variant: {
					options: [`p_hW1uUUY`, `skpqRIFOX`],
					optionTitles: [`Variant 1`, `Variant 2`],
					title: `Variant`,
					type: x.Enum,
				},
				pnjY4frPA: {
					defaultValue: {
						identifier: `local-module:vector/J6cZUZ3hL:default`,
						moduleId: `gaOqMHtDxWN4cfFIGlLd`,
					},
					setModuleId: `ZCFu2K1zhbebpbFdqjyv`,
					title: `Icon 1`,
					type: x.VectorSetItem,
				},
				mBKweeyKN: { title: `Link 1`, type: x.Link },
				BpZuAjo8u: {
					defaultValue: {
						identifier: `local-module:vector/zbiGnuvOK:default`,
						moduleId: `zjrYjn7gbP1ZRldSfdit`,
					},
					setModuleId: `ZCFu2K1zhbebpbFdqjyv`,
					title: `Icon 2`,
					type: x.VectorSetItem,
				},
				CH5TPWpzq: { title: `Link 2`, type: x.Link },
				TF4NQ4wK2: {
					defaultValue: {
						identifier: `local-module:vector/P9X4NEFGD:default`,
						moduleId: `osHcFer79cPD20d4bNi5`,
					},
					setModuleId: `ZCFu2K1zhbebpbFdqjyv`,
					title: `Icon 3`,
					type: x.VectorSetItem,
				},
				JgEcj5MZ2: { title: `Link 3`, type: x.Link },
				JcnQOhlFO: {
					defaultValue: {
						identifier: `local-module:vector/SWa6oNEEu:default`,
						moduleId: `9oSZ99kMoFEZi6tNc0mg`,
					},
					setModuleId: `ZCFu2K1zhbebpbFdqjyv`,
					title: `Icon 4`,
					type: x.VectorSetItem,
				},
				wzwb8FVyv: { title: `Link 4`, type: x.Link },
				cUcZIlV8K: {
					defaultValue: `15px 25px`,
					title: `Gap`,
					type: x.Gap,
				},
			}),
			C($, [{ explicitInter: !0, fonts: [] }, ...De], {
				supportsExplicitInterCodegen: !0,
			}));
	});
export {
	U as a,
	B as c,
	O as d,
	D as f,
	K as i,
	N as l,
	k as m,
	Re as n,
	ce as o,
	E as p,
	de as r,
	z as s,
	ze as t,
	P as u,
};
