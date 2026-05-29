import { t as e } from "./rolldown-runtime.mjs";
import {
	F as t,
	M as n,
	T as r,
	c as i,
	g as a,
	j as o,
	k as s,
	l as c,
	o as l,
	s as ee,
	y as u,
} from "./react.mjs";
import { S as d, a as f, r as p, t as m } from "./motion.mjs";
import {
	A as h,
	E as g,
	Et as _,
	F as v,
	H as y,
	O as b,
	Ot as x,
	P as S,
	St as te,
	T as C,
	Tt as w,
	U as T,
	W as E,
	X as D,
	a as O,
	c as k,
	f as A,
	g as j,
	k as M,
	lt as N,
	r as P,
	s as ne,
	vt as F,
} from "./framer.mjs";
import { a as I, i as L, o as re, r as ie } from "./shared-lib.mjs";
import { i as ae, n as R, r as z, t as oe } from "./gKHXfs5yP.DXAB7hHv.mjs";
import {
	a as se,
	c as B,
	i as ce,
	n as le,
	o as ue,
	r as de,
	s as fe,
	t as pe,
} from "./dBxplyp6M.YfMP-uQE.mjs";
import { i as me, n as he, r as ge, t as _e } from "./zczqo4Z8y.BKvtHDpT.mjs";
var V,
	H,
	U,
	ve = e(() => {
		(D(),
			v.loadFonts([
				`FR;InterDisplay`,
				`FR;InterDisplay-Bold`,
				`FR;InterDisplay-BoldItalic`,
				`FR;InterDisplay-Italic`,
			]),
			(V = [
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
			(H = [
				`.framer-sqSnh .framer-styles-preset-11kcybb:not(.rich-text-wrapper), .framer-sqSnh .framer-styles-preset-11kcybb.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: 'cv05' on, 'cv12' on; --framer-font-size: 16px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 25px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
			]),
			(U = `framer-sqSnh`));
	}),
	W,
	G,
	K,
	ye = e(() => {
		(D(),
			v.loadFonts([
				`GF;Space Mono-regular`,
				`GF;Space Mono-700`,
				`GF;Space Mono-700italic`,
				`GF;Space Mono-italic`,
			]),
			(W = [
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
			(G = [
				`.framer-z05no .framer-styles-preset-g6dfhq:not(.rich-text-wrapper), .framer-z05no .framer-styles-preset-g6dfhq.rich-text-wrapper h2 { --framer-font-family: "Space Mono", monospace; --framer-font-family-bold: "Space Mono", monospace; --framer-font-family-bold-italic: "Space Mono", monospace; --framer-font-family-italic: "Space Mono", monospace; --framer-font-open-type-features: normal; --framer-font-size: 84px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: -0.06em; --framer-line-height: 85px; --framer-paragraph-spacing: 40px; --framer-text-alignment: center; --framer-text-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: uppercase; }`,
			]),
			(K = `framer-z05no`));
	}),
	be,
	xe,
	Se,
	Ce = e(() => {
		(D(),
			v.loadFonts([
				`FR;InterDisplay`,
				`FR;InterDisplay-Bold`,
				`FR;InterDisplay-BoldItalic`,
				`FR;InterDisplay-Italic`,
			]),
			(be = [
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
			(xe = [
				`.framer-9934Z .framer-styles-preset-fypikg:not(.rich-text-wrapper), .framer-9934Z .framer-styles-preset-fypikg.rich-text-wrapper p { --framer-font-family: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-bold-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-family-italic: "Inter Display", "Inter Display Placeholder", sans-serif; --framer-font-open-type-features: normal; --framer-font-size: 20px; --framer-font-style: normal; --framer-font-style-bold: normal; --framer-font-style-bold-italic: italic; --framer-font-style-italic: italic; --framer-font-variation-axes: normal; --framer-font-weight: 400; --framer-font-weight-bold: 700; --framer-font-weight-bold-italic: 700; --framer-font-weight-italic: 400; --framer-letter-spacing: 0.02em; --framer-line-height: 28px; --framer-paragraph-spacing: 20px; --framer-text-alignment: start; --framer-text-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); --framer-text-decoration: none; --framer-text-stroke-color: initial; --framer-text-stroke-width: initial; --framer-text-transform: none; }`,
			]),
			(Se = `framer-9934Z`));
	}),
	we,
	Te,
	Ee,
	De = e(() => {
		(D(),
			v.loadFonts([]),
			(we = [{ explicitInter: !0, fonts: [] }]),
			(Te = [
				`.framer-njEjc .framer-styles-preset-mgrqd0:not(.rich-text-wrapper), .framer-njEjc .framer-styles-preset-mgrqd0.rich-text-wrapper a { --framer-link-hover-text-color: var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)); --framer-link-text-color: var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, #000000); transition-delay: 0s; transition-duration: 0.4s; transition-property: color; transition-timing-function: cubic-bezier(0.44, 0, 0.56, 1); }`,
			]),
			(Ee = `framer-njEjc`));
	});
function Oe(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var ke,
	Ae,
	je,
	Me,
	Ne,
	Pe,
	Fe,
	Ie,
	Le,
	Re,
	ze,
	Be,
	Ve,
	He,
	q,
	J,
	Ue = e(() => {
		(l(),
			D(),
			m(),
			r(),
			re(),
			(ke = x(d.div)),
			(Ae = { fTMKyUkx3: { hover: !0 } }),
			(je = [
				`fTMKyUkx3`,
				`QZfS3eLdX`,
				`fOqHfFw57`,
				`BARC7s0O3`,
				`oOFlFJAlU`,
			]),
			(Me = `framer-Ysngk`),
			(Ne = {
				BARC7s0O3: `framer-v-tjks0s`,
				fOqHfFw57: `framer-v-yinyd5`,
				fTMKyUkx3: `framer-v-drhhqo`,
				oOFlFJAlU: `framer-v-1o0hzbw`,
				QZfS3eLdX: `framer-v-f9d46e`,
			}),
			(Pe = {
				delay: 0,
				duration: 0.3,
				ease: [0.5, 0.34, 0.15, 0.99],
				type: `tween`,
			}),
			(Fe = { delay: 0, duration: 1, ease: [0, 0, 1, 1], type: `tween` }),
			(Ie = {
				opacity: 1,
				rotate: 360,
				rotateX: 0,
				rotateY: 0,
				scale: 1,
				skewX: 0,
				skewY: 0,
				x: 0,
				y: 0,
			}),
			(Le = (e, t) => `translateX(-50%) ${t}`),
			(Re = ({ value: e, children: t }) => {
				let r = o(f),
					a = e ?? r.transition,
					s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return i(f.Provider, { value: s, children: t });
			}),
			(ze = d.create(t)),
			(Be = {
				Default: `fTMKyUkx3`,
				Disabled: `fOqHfFw57`,
				Error: `oOFlFJAlU`,
				Loading: `QZfS3eLdX`,
				Success: `BARC7s0O3`,
			}),
			(Ve = ({ height: e, id: t, textInButton: n, width: r, ...i }) => ({
				...i,
				variant: Be[i.variant] ?? i.variant ?? `fTMKyUkx3`,
				XK7_02sWV: n ?? i.XK7_02sWV ?? `Send Message`,
			})),
			(He = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(q = _(
				a(function (e, n) {
					let r = s(null),
						a = n ?? r,
						o = u(),
						{ activeLocale: l, setLocale: ee } = F();
					N();
					let {
							style: f,
							className: m,
							layoutId: h,
							variant: _,
							XK7_02sWV: v,
							...y
						} = Ve(e),
						{
							baseVariant: b,
							classNames: x,
							clearLoadingGesture: te,
							gestureHandlers: C,
							gestureVariant: T,
							isLoading: E,
							setGestureState: D,
							setVariant: O,
							variants: k,
						} = w({
							cycleOrder: je,
							defaultVariant: `fTMKyUkx3`,
							enabledGestures: Ae,
							ref: a,
							variant: _,
							variantClassNames: Ne,
						}),
						A = He(e, k),
						j = S(Me, ie),
						M = () => b !== `QZfS3eLdX`,
						P = () => b === `QZfS3eLdX`;
					return i(p, {
						id: h ?? o,
						children: i(ze, {
							animate: k,
							initial: !1,
							children: i(Re, {
								value: Pe,
								children: c(d.button, {
									...y,
									...C,
									className: S(j, `framer-drhhqo`, m, x),
									"data-reset": `button`,
									layoutDependency: A,
									layoutId: `fTMKyUkx3`,
									ref: a,
									style: {
										backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
										borderBottomLeftRadius: 6,
										borderBottomRightRadius: 6,
										borderTopLeftRadius: 6,
										borderTopRightRadius: 6,
										...f,
									},
									variants: {
										"fTMKyUkx3-hover": {
											backgroundColor: `var(--token-8ad922bb-dfab-40e0-a635-5700a6b7bbd0, rgb(244, 244, 244))`,
										},
									},
									...Oe(
										{
											"fTMKyUkx3-hover": {
												
											},
											BARC7s0O3: {
											},
											fOqHfFw57: {
											},
											oOFlFJAlU: {
											},
											QZfS3eLdX: {
											},
										},
										b,
										T,
									),
									children: [
										M() &&
											i(g, {
												__fromCanvasComponent: !0,
												children: i(t, {
													children: i(d.p, {
														className: `framer-styles-preset-mga0mf`,
														"data-styles-preset": `Xrt2y4jBe`,
														style: {
															"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
														},
														children: `Send Message`,
													}),
												}),
												className: `framer-15pn4e9`,
												fonts: [`Inter`],
												layoutDependency: A,
												layoutId: `HZWlI1UHJ`,
												style: {
													"--extracted-r6o4lv": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
													"--framer-link-text-color": `rgb(0, 153, 255)`,
													"--framer-link-text-decoration": `underline`,
													opacity: 1,
												},
												text: v,
												variants: {
													"fTMKyUkx3-hover": {
														"--extracted-r6o4lv": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
														opacity: 1,
													},
													BARC7s0O3: { opacity: 1 },
													fOqHfFw57: { opacity: 0.5 },
													oOFlFJAlU: { opacity: 1 },
												},
												verticalAlignment: `top`,
												withExternalLayout: !0,
												...Oe(
													{
														"fTMKyUkx3-hover": {
															children: i(t, {
																children: i(
																	d.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																		},
																		children: `Send Message`,
																	},
																),
															}),
														},
														BARC7s0O3: {
															children: i(t, {
																children: i(
																	d.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `Thank you. Please wait`,
																	},
																),
															}),
															text: void 0,
														},
														fOqHfFw57: {
															children: i(t, {
																children: i(
																	d.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `Please Fill Form`,
																	},
																),
															}),
														},
														oOFlFJAlU: {
															children: i(t, {
																children: i(
																	d.p,
																	{
																		className: `framer-styles-preset-mga0mf`,
																		"data-styles-preset": `Xrt2y4jBe`,
																		style: {
																			"--framer-text-color": `var(--extracted-r6o4lv, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																		},
																		children: `Something went wrong`,
																	},
																),
															}),
															text: void 0,
														},
													},
													b,
													T,
												),
											}),
										i(d.div, {
											className: `framer-1oei8tb`,
											layoutDependency: A,
											layoutId: `FXHd4cMDW`,
											style: {
												backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
											},
										}),
										i(d.div, {
											className: `framer-3wdpza`,
											layoutDependency: A,
											layoutId: `uWgBLsxY0`,
											style: {
												backgroundColor: `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
											},
										}),
										P() &&
											i(d.div, {
												className: `framer-2zymhe`,
												layoutDependency: A,
												layoutId: `MR7vzmaAV`,
												style: {
													mask: `url('/assets/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
													WebkitMask: `url('/assets/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
												},
												children: i(ke, {
													__framer__loop: Ie,
													__framer__loopEffectEnabled:
														!0,
													__framer__loopRepeatDelay: 0,
													__framer__loopRepeatType: `loop`,
													__framer__loopTransition:
														Fe,
													__perspectiveFX: !1,
													__smartComponentFX: !0,
													__targetOpacity: 1,
													className: `framer-1tera51`,
													layoutDependency: A,
													layoutId: `PG7GVwyrV`,
													style: {
														background: `conic-gradient(from 0deg at 50% 50%, rgba(255, 255, 255, 0) 7.208614864864882deg, rgb(255, 255, 255) 342deg)`,
														mask: `url('/assets/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
														WebkitMask: `url('/assets/images/pGiXYozQ3mE4cilNOItfe2L2fUA.svg') alpha no-repeat center / cover add`,
													},
													children: i(d.div, {
														className: `framer-z7attb`,
														layoutDependency: A,
														layoutId: `gZgpnBNSM`,
														style: {
															backgroundColor: `rgb(255, 255, 255)`,
															borderBottomLeftRadius: 1,
															borderBottomRightRadius: 1,
															borderTopLeftRadius: 1,
															borderTopRightRadius: 1,
														},
														transformTemplate: Le,
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
					`.framer-Ysngk.framer-wwiv07, .framer-Ysngk .framer-wwiv07 { display: block; }`,
					`.framer-Ysngk.framer-drhhqo { align-content: center; align-items: center; cursor: pointer; display: flex; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: 50px; justify-content: center; overflow: hidden; padding: 0px; position: relative; width: 240px; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-Ysngk .framer-15pn4e9 { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; z-index: 2; }`,
					`.framer-Ysngk .framer-1oei8tb { bottom: 0px; flex: none; height: 26px; left: calc(50.00000000000002% - 106.25% / 2); overflow: visible; position: absolute; width: 106%; z-index: 1; }`,
					`.framer-Ysngk .framer-3wdpza { flex: none; height: 28px; left: calc(49.58333333333336% - 106.66666666666667% / 2); overflow: visible; position: absolute; top: -4px; width: 107%; z-index: 1; }`,
					`.framer-Ysngk .framer-2zymhe { aspect-ratio: 1 / 1; flex: none; gap: 10px; height: var(--framer-aspect-ratio-supported, 20px); overflow: hidden; position: relative; width: 20px; z-index: 2; }`,
					`.framer-Ysngk .framer-1tera51 { bottom: 0px; flex: none; left: 0px; overflow: hidden; position: absolute; right: 0px; top: 0px; }`,
					`.framer-Ysngk .framer-z7attb { aspect-ratio: 1 / 1; flex: none; height: var(--framer-aspect-ratio-supported, 2px); left: 50%; overflow: visible; position: absolute; top: 0px; width: 2px; }`,
					`.framer-Ysngk.framer-v-f9d46e.framer-drhhqo, .framer-Ysngk.framer-v-yinyd5.framer-drhhqo, .framer-Ysngk.framer-v-tjks0s.framer-drhhqo, .framer-Ysngk.framer-v-1o0hzbw.framer-drhhqo { cursor: unset; }`,
					`.framer-Ysngk.framer-v-drhhqo.hover .framer-1oei8tb { bottom: -26px; }`,
					`.framer-Ysngk.framer-v-drhhqo.hover .framer-3wdpza { top: -29px; }`,
					...L,
				],
				`framer-Ysngk`,
			)),
			(J = q),
			(q.displayName = `Form Button - Dark`),
			(q.defaultProps = { height: 50, width: 240 }),
			h(q, {
				variant: {
					options: [
						`fTMKyUkx3`,
						`QZfS3eLdX`,
						`fOqHfFw57`,
						`BARC7s0O3`,
						`oOFlFJAlU`,
					],
					optionTitles: [
						`Default`,
						`Loading`,
						`Disabled`,
						`Success`,
						`Error`,
					],
					title: `Variant`,
					type: O.Enum,
				},
				XK7_02sWV: {
					defaultValue: `Send Message`,
					displayTextArea: !1,
					title: `Text in Button`,
					type: O.String,
				},
			}),
			M(
				q,
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
					...T(I),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function We(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var Ge,
	Ke,
	qe,
	Je,
	Ye,
	Xe,
	Ze,
	Qe,
	$e,
	et,
	tt,
	Y,
	X,
	nt = e(() => {
		(l(),
			D(),
			m(),
			r(),
			ae(),
			B(),
			De(),
			Ue(),
			(Ge = y(J)),
			(Ke = [`uhJRkpKT1`, `znr8CKZKK`, `A_n3qxlua`]),
			(qe = `framer-0Aup3`),
			(Je = {
				A_n3qxlua: `framer-v-1updq72`,
				uhJRkpKT1: `framer-v-1dl0qsi`,
				znr8CKZKK: `framer-v-mlcwr8`,
			}),
			(Ye = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Xe = (e, t, n) => {
				switch (e.state) {
					case `success`:
						return t.success ?? n;
					case `pending`:
						return t.pending ?? n;
					case `error`:
						return t.error ?? n;
					case `incomplete`:
						return t.incomplete ?? n;
				}
			}),
			(Ze = ({ value: e, children: t }) => {
				let r = o(f),
					a = e ?? r.transition,
					s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return i(f.Provider, { value: s, children: t });
			}),
			(Qe = d.create(t)),
			($e = {
				"Form - Desktop": `uhJRkpKT1`,
				"Form - Phone": `A_n3qxlua`,
				"Form - Tablet": `znr8CKZKK`,
			}),
			(et = ({
				additionalFields: e,
				height: t,
				id: n,
				linkToPrivacyPolicy: r,
				linkToTerms: i,
				privacyPolicy: a,
				terms: o,
				width: s,
				...c
			}) => ({
				...c,
				jSPWscupa: e ?? c.jSPWscupa,
				spja1ZIR0: a ?? c.spja1ZIR0 ?? `Privacy Policy.`,
				Ui02R5FGh: r ?? c.Ui02R5FGh,
				variant: $e[c.variant] ?? c.variant ?? `uhJRkpKT1`,
				vcFwDGqGn: i ?? c.vcFwDGqGn,
				WnywsWXvI: o ?? c.WnywsWXvI ?? `Terms`,
			})),
			(tt = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			(Y = _(
				a(function (e, n) {
					let r = s(null),
						a = n ?? r,
						o = u(),
						{ activeLocale: l, setLocale: f } = F(),
						m = N(),
						{
							style: h,
							className: _,
							layoutId: v,
							variant: y,
							jSPWscupa: x,
							WnywsWXvI: te,
							vcFwDGqGn: C,
							spja1ZIR0: T,
							Ui02R5FGh: E,
							...D
						} = et(e),
						{
							baseVariant: O,
							classNames: A,
							clearLoadingGesture: M,
							gestureHandlers: I,
							gestureVariant: L,
							isLoading: re,
							setGestureState: ie,
							setVariant: ae,
							variants: R,
						} = w({
							cycleOrder: Ke,
							defaultVariant: `uhJRkpKT1`,
							ref: a,
							variant: y,
							variantClassNames: Je,
						}),
						z = tt(e, R),
						B = S(qe, se, oe, Ee);
					return i(p, {
						id: v ?? o,
						children: i(Qe, {
							animate: R,
							initial: !1,
							children: i(Ze, {
								value: Ye,
								children: c(d.div, {
									...D,
									...I,
									className: S(B, `framer-1dl0qsi`, _, A),
									layoutDependency: z,
									layoutId: `uhJRkpKT1`,
									ref: a,
									style: {
										backgroundColor: `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
										borderBottomLeftRadius: 10,
										borderBottomRightRadius: 10,
										borderTopLeftRadius: 10,
										borderTopRightRadius: 10,
										...h,
									},
									...We(
										{
											A_n3qxlua: {
											},
											znr8CKZKK: {
											},
										},
										O,
										L,
									),
									children: [
										i(d.div, {
											className: `framer-1ffeqgg`,
											layoutDependency: z,
											layoutId: `NlRrfLDXm`,
											children: i(ne, {
												action: ``,
												className: `framer-vm7dx1`,
												layoutDependency: z,
												layoutId: `wfo4RF9iU`,
												nodeId: `wfo4RF9iU`,
												children: (e) =>
													c(ee, {
														children: [
															c(d.div, {
																className: `framer-1njjiwe`,
																layoutDependency:
																	z,
																layoutId: `RzOEuxw8e`,
																children: [
																	c(d.label, {
																		className: `framer-7ua0l2`,
																		layoutDependency:
																			z,
																		layoutId: `KP02KiYXe`,
																		children:
																			[
																				i(
																					g,
																					{
																						__fromCanvasComponent:
																							!0,
																						children:
																							i(
																								t,
																								{
																									children:
																										i(
																											d.h6,
																											{
																												className: `framer-styles-preset-12tby5a`,
																												"data-styles-preset": `j9HsFBXUW`,
																												style: {
																													"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																												},
																												children: `Your Name`,
																											},
																										),
																								},
																							),
																						className: `framer-jq355p`,
																						fonts: [
																							`Inter`,
																						],
																						layoutDependency:
																							z,
																						layoutId: `baAXKF_aS`,
																						style: {
																							"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																							"--framer-paragraph-spacing": `0px`,
																						},
																						verticalAlignment: `top`,
																						withExternalLayout:
																							!0,
																					},
																				),
																				i(
																					k,
																					{
																						className: `framer-15fscmj`,
																						inputName: `Name`,
																						layoutDependency:
																							z,
																						layoutId: `qgm2zxdEp`,
																						placeholder: `Michael Johnson`,
																						required:
																							!1,
																						style: {
																							"--framer-input-border-bottom-width": `1px`,
																							"--framer-input-border-color": `var(--token-a1cc7f91-23b5-4601-9964-e95094747c32, rgba(0, 0, 0, 0.2))`,
																							"--framer-input-border-left-width": `0px`,
																							"--framer-input-border-right-width": `0px`,
																							"--framer-input-border-style": `solid`,
																							"--framer-input-border-top-width": `0px`,
																							"--framer-input-font-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																							"--framer-input-icon-color": `rgb(153, 153, 153)`,
																							"--framer-input-placeholder-color": `var(--token-d7269bca-97f8-4000-b143-5284031cccb5, rgba(0, 0, 0, 0.4))`,
																						},
																						type: `text`,
																					},
																				),
																			],
																	}),
																	c(d.label, {
																		className: `framer-u98gy5`,
																		layoutDependency:
																			z,
																		layoutId: `IkNps8PwE`,
																		children:
																			[
																				i(
																					g,
																					{
																						__fromCanvasComponent:
																							!0,
																						children:
																							i(
																								t,
																								{
																									children:
																										i(
																											d.h6,
																											{
																												className: `framer-styles-preset-12tby5a`,
																												"data-styles-preset": `j9HsFBXUW`,
																												style: {
																													"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																												},
																												children: `Your Email`,
																											},
																										),
																								},
																							),
																						className: `framer-kfaxo3`,
																						fonts: [
																							`Inter`,
																						],
																						layoutDependency:
																							z,
																						layoutId: `Uc48YpsaI`,
																						style: {
																							"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																							"--framer-paragraph-spacing": `0px`,
																						},
																						verticalAlignment: `top`,
																						withExternalLayout:
																							!0,
																					},
																				),
																				i(
																					k,
																					{
																						className: `framer-fna6t7`,
																						inputName: `Email`,
																						layoutDependency:
																							z,
																						layoutId: `MvHxwpYf2`,
																						placeholder: `email@company.com`,
																						required:
																							!0,
																						style: {
																							"--framer-input-border-bottom-width": `1px`,
																							"--framer-input-border-color": `var(--token-a1cc7f91-23b5-4601-9964-e95094747c32, rgba(0, 0, 0, 0.2))`,
																							"--framer-input-border-left-width": `0px`,
																							"--framer-input-border-right-width": `0px`,
																							"--framer-input-border-style": `solid`,
																							"--framer-input-border-top-width": `0px`,
																							"--framer-input-font-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																							"--framer-input-icon-color": `rgb(153, 153, 153)`,
																							"--framer-input-placeholder-color": `var(--token-d7269bca-97f8-4000-b143-5284031cccb5, rgba(0, 0, 0, 0.4))`,
																						},
																						type: `email`,
																					},
																				),
																			],
																	}),
																],
															}),
															i(d.div, {
																className: `framer-di9trs`,
																
																layoutDependency:
																	z,
																layoutId: `Efnrn2G7V`,
															}),
															x &&
																c(d.div, {
																	className: `framer-14baekc`,
																	layoutDependency:
																		z,
																	layoutId: `iN0evDd1E`,
																	children: [
																		c(
																			d.label,
																			{
																				className: `framer-1hgny3a`,
																				layoutDependency:
																					z,
																				layoutId: `k8UehyQh_`,
																				children:
																					[
																						i(
																							g,
																							{
																								__fromCanvasComponent:
																									!0,
																								children:
																									i(
																										t,
																										{
																											children:
																												i(
																													d.h6,
																													{
																														className: `framer-styles-preset-12tby5a`,
																														"data-styles-preset": `j9HsFBXUW`,
																														style: {
																															"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																														},
																														children: `Phone Number`,
																													},
																												),
																										},
																									),
																								className: `framer-48bw1w`,
																								fonts: [
																									`Inter`,
																								],
																								layoutDependency:
																									z,
																								layoutId: `h94kkCnAq`,
																								style: {
																									"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																									"--framer-paragraph-spacing": `0px`,
																								},
																								verticalAlignment: `top`,
																								withExternalLayout:
																									!0,
																							},
																						),
																						i(
																							k,
																							{
																								className: `framer-v89yc6`,
																								inputName: `Phone Number`,
																								layoutDependency:
																									z,
																								layoutId: `Uue0m215T`,
																								placeholder: `+`,
																								required:
																									!1,
																								style: {
																									"--framer-input-border-bottom-width": `1px`,
																									"--framer-input-border-color": `var(--token-a1cc7f91-23b5-4601-9964-e95094747c32, rgba(0, 0, 0, 0.2))`,
																									"--framer-input-border-left-width": `0px`,
																									"--framer-input-border-right-width": `0px`,
																									"--framer-input-border-style": `solid`,
																									"--framer-input-border-top-width": `0px`,
																									"--framer-input-font-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																									"--framer-input-icon-color": `rgb(153, 153, 153)`,
																									"--framer-input-placeholder-color": `var(--token-d7269bca-97f8-4000-b143-5284031cccb5, rgba(0, 0, 0, 0.4))`,
																								},
																								type: `tel`,
																							},
																						),
																					],
																			},
																		),
																		c(
																			d.label,
																			{
																				className: `framer-1pwjb1h`,
																				layoutDependency:
																					z,
																				layoutId: `x7nvQYof4`,
																				children:
																					[
																						i(
																							g,
																							{
																								__fromCanvasComponent:
																									!0,
																								children:
																									i(
																										t,
																										{
																											children:
																												i(
																													d.h6,
																													{
																														className: `framer-styles-preset-12tby5a`,
																														"data-styles-preset": `j9HsFBXUW`,
																														style: {
																															"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																														},
																														children: `Your Website`,
																													},
																												),
																										},
																									),
																								className: `framer-1omrd1k`,
																								fonts: [
																									`Inter`,
																								],
																								layoutDependency:
																									z,
																								layoutId: `sDxCZ9_p2`,
																								style: {
																									"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																									"--framer-paragraph-spacing": `0px`,
																								},
																								verticalAlignment: `top`,
																								withExternalLayout:
																									!0,
																							},
																						),
																						i(
																							k,
																							{
																								className: `framer-1cqop7l`,
																								inputName: `Website`,
																								layoutDependency:
																									z,
																								layoutId: `OmYhJkgDV`,
																								placeholder: ``,
																								required:
																									!1,
																								style: {
																									"--framer-input-border-bottom-width": `1px`,
																									"--framer-input-border-color": `var(--token-a1cc7f91-23b5-4601-9964-e95094747c32, rgba(0, 0, 0, 0.2))`,
																									"--framer-input-border-left-width": `0px`,
																									"--framer-input-border-right-width": `0px`,
																									"--framer-input-border-style": `solid`,
																									"--framer-input-border-top-width": `0px`,
																									"--framer-input-font-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																									"--framer-input-icon-color": `rgb(153, 153, 153)`,
																									"--framer-input-placeholder-color": `var(--token-d7269bca-97f8-4000-b143-5284031cccb5, rgba(0, 0, 0, 0.4))`,
																								},
																								type: `url`,
																							},
																						),
																					],
																			},
																		),
																	],
																}),
															x &&
																i(d.div, {
																	className: `framer-1uvlnu7`,
																	
																	layoutDependency:
																		z,
																	layoutId: `BgDPm9bGx`,
																}),
															c(d.label, {
																className: `framer-2ke6bt`,
																layoutDependency:
																	z,
																layoutId: `N_5zfRvMd`,
																children: [
																	i(g, {
																		__fromCanvasComponent:
																			!0,
																		children:
																			i(
																				t,
																				{
																					children:
																						i(
																							d.h6,
																							{
																								className: `framer-styles-preset-12tby5a`,
																								"data-styles-preset": `j9HsFBXUW`,
																								style: {
																									"--framer-text-color": `var(--extracted-1w1cjl5, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																								},
																								children: `Message`,
																							},
																						),
																				},
																			),
																		className: `framer-1kat0gx`,
																		fonts: [
																			`Inter`,
																		],
																		layoutDependency:
																			z,
																		layoutId: `XOPKXdAgY`,
																		style: {
																			"--extracted-1w1cjl5": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			"--framer-paragraph-spacing": `0px`,
																		},
																		verticalAlignment: `top`,
																		withExternalLayout:
																			!0,
																	}),
																	i(k, {
																		className: `framer-1t6g7fc`,
																		inputName: `Text`,
																		layoutDependency:
																			z,
																		layoutId: `yFPQyJx1t`,
																		placeholder: `Your Message`,
																		required:
																			!0,
																		style: {
																			"--framer-input-border-bottom-width": `1px`,
																			"--framer-input-border-color": `var(--token-a1cc7f91-23b5-4601-9964-e95094747c32, rgba(0, 0, 0, 0.2))`,
																			"--framer-input-border-left-width": `0px`,
																			"--framer-input-border-right-width": `0px`,
																			"--framer-input-border-style": `solid`,
																			"--framer-input-border-top-width": `0px`,
																			"--framer-input-font-color": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																			"--framer-input-icon-color": `rgb(153, 153, 153)`,
																			"--framer-input-placeholder-color": `var(--token-d7269bca-97f8-4000-b143-5284031cccb5, rgba(0, 0, 0, 0.4))`,
																		},
																		type: `textarea`,
																	}),
																],
															}),
															i(d.div, {
																className: `framer-7e5nw1`,
																
																layoutDependency:
																	z,
																layoutId: `HABgzKaFl`,
															}),
															i(P, {
																height: 50,
																width: `calc(${m?.width || `100vw`} - 104px)`,
																...We(
																	{
																		A_n3qxlua:
																			{
																				width: `calc(${m?.width || `100vw`} - 64px)`,
																			},
																		znr8CKZKK:
																			{
																				width: `calc(${m?.width || `100vw`} - 64px)`,
																			},
																	},
																	O,
																	L,
																),
																children: i(b, {
																	className: `framer-14s5jxp-container`,
																	layoutDependency:
																		z,
																	layoutId: `kJuvQbJC1-container`,
																	nodeId: `kJuvQbJC1`,
																	rendersWithMotion:
																		!0,
																	scopeId: `eGmucQAhJ`,
																	children: i(
																		J,
																		{
																			height: `100%`,
																			id: `kJuvQbJC1`,
																			layoutId: `kJuvQbJC1`,
																			style: {
																				height: `100%`,
																				width: `100%`,
																			},
																			type: `submit`,
																			variant:
																				Xe(
																					e,
																					{
																						error: `oOFlFJAlU`,
																						incomplete: `fOqHfFw57`,
																						pending: `QZfS3eLdX`,
																						success: `BARC7s0O3`,
																					},
																					`fTMKyUkx3`,
																				),
																			width: `100%`,
																			XK7_02sWV: `Send Message`,
																		},
																	),
																}),
															}),
														],
													}),
											}),
										}),
										c(d.div, {
											className: `framer-gg4wvz`,
											layoutDependency: z,
											layoutId: `pO_IIvaeV`,
											style: {
												backgroundColor: `rgb(243, 243, 243)`,
												borderBottomLeftRadius: 9,
												borderBottomRightRadius: 9,
												borderTopLeftRadius: 9,
												borderTopRightRadius: 9,
											},
											children: [
												i(g, {
													__fromCanvasComponent: !0,
													children: i(t, {
														children: i(d.p, {
															className: `framer-styles-preset-bfgzci`,
															"data-styles-preset": `gKHXfs5yP`,
															style: {
																"--framer-text-alignment": `center`,
																"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
															},
															children: `Before submitting, you agree to our`,
														}),
													}),
													className: `framer-12bwo8p`,
													fonts: [`Inter`],
													layoutDependency: z,
													layoutId: `fPwdbZfF4`,
													style: {
														"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
														"--framer-paragraph-spacing": `0px`,
													},
													verticalAlignment: `top`,
													withExternalLayout: !0,
												}),
												i(g, {
													__fromCanvasComponent: !0,
													children: i(t, {
														children: i(d.p, {
															className: `framer-styles-preset-bfgzci`,
															"data-styles-preset": `gKHXfs5yP`,
															style: {
																"--framer-text-alignment": `center`,
																"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
															},
															children: i(j, {
																href: C,
																motionChild: !0,
																nodeId: `AlV1w447R`,
																openInNewTab:
																	!1,
																relValues: [],
																scopeId: `eGmucQAhJ`,
																smoothScroll:
																	!1,
																children: i(
																	d.a,
																	{
																		className: `framer-styles-preset-mgrqd0`,
																		"data-styles-preset": `q7NcKTKUL`,
																		children: `Terms`,
																	},
																),
															}),
														}),
													}),
													className: `framer-s64h48`,
													fonts: [`Inter`],
													layoutDependency: z,
													layoutId: `AlV1w447R`,
													style: {
														"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
														"--framer-paragraph-spacing": `0px`,
													},
													text: te,
													verticalAlignment: `top`,
													withExternalLayout: !0,
												}),
												i(g, {
													__fromCanvasComponent: !0,
													children: i(t, {
														children: i(d.p, {
															className: `framer-styles-preset-bfgzci`,
															"data-styles-preset": `gKHXfs5yP`,
															style: {
																"--framer-text-alignment": `center`,
																"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
															},
															children: `and`,
														}),
													}),
													className: `framer-1wnni8c`,
													fonts: [`Inter`],
													layoutDependency: z,
													layoutId: `S3rCUYbgG`,
													style: {
														"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
														"--framer-paragraph-spacing": `0px`,
													},
													verticalAlignment: `top`,
													withExternalLayout: !0,
												}),
												i(g, {
													__fromCanvasComponent: !0,
													children: i(t, {
														children: i(d.p, {
															className: `framer-styles-preset-bfgzci`,
															"data-styles-preset": `gKHXfs5yP`,
															style: {
																"--framer-text-alignment": `center`,
																"--framer-text-color": `var(--extracted-r6o4lv, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
															},
															children: i(j, {
																href: E,
																motionChild: !0,
																nodeId: `TeJApdJjC`,
																openInNewTab:
																	!1,
																relValues: [],
																scopeId: `eGmucQAhJ`,
																smoothScroll:
																	!1,
																children: i(
																	d.a,
																	{
																		className: `framer-styles-preset-mgrqd0`,
																		"data-styles-preset": `q7NcKTKUL`,
																		children: `Privacy Policy.`,
																	},
																),
															}),
														}),
													}),
													className: `framer-juu7l7`,
													fonts: [`Inter`],
													layoutDependency: z,
													layoutId: `TeJApdJjC`,
													style: {
														"--extracted-r6o4lv": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
														"--framer-paragraph-spacing": `0px`,
													},
													text: T,
													verticalAlignment: `top`,
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
					`.framer-0Aup3.framer-t380ut, .framer-0Aup3 .framer-t380ut { display: block; }`,
					`.framer-0Aup3.framer-1dl0qsi { align-content: flex-start; align-items: flex-start; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 2px; position: relative; width: 660px; }`,
					`.framer-0Aup3 .framer-1ffeqgg { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 20px; height: min-content; justify-content: flex-start; overflow: var(--overflow-clip-fallback, clip); padding: 45px 50px 30px 50px; position: relative; width: 100%; }`,
					`.framer-0Aup3 .framer-vm7dx1 { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 15px; height: min-content; justify-content: flex-start; overflow: hidden; padding: 0px; position: relative; width: 100%; }`,
					`.framer-0Aup3 .framer-1njjiwe, .framer-0Aup3 .framer-14baekc { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 45px; height: min-content; justify-content: center; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-0Aup3 .framer-7ua0l2, .framer-0Aup3 .framer-u98gy5, .framer-0Aup3 .framer-1hgny3a, .framer-0Aup3 .framer-1pwjb1h { align-content: flex-start; align-items: flex-start; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 1px; }`,
					`.framer-0Aup3 .framer-jq355p, .framer-0Aup3 .framer-kfaxo3, .framer-0Aup3 .framer-48bw1w, .framer-0Aup3 .framer-1omrd1k, .framer-0Aup3 .framer-1kat0gx { -webkit-user-select: none; flex: none; height: auto; position: relative; user-select: none; white-space: pre; width: auto; }`,
					`.framer-0Aup3 .framer-15fscmj, .framer-0Aup3 .framer-fna6t7, .framer-0Aup3 .framer-v89yc6, .framer-0Aup3 .framer-1cqop7l { --framer-input-focused-border-color: var(--token-d7269bca-97f8-4000-b143-5284031cccb5, rgba(0, 0, 0, 0.4)); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 0px 0px 1px 0px; --framer-input-font-family: "Inter Display"; --framer-input-font-letter-spacing: 0.02em; --framer-input-font-line-height: 25px; --framer-input-font-open-type-features: 'cv05' on, 'cv12' on; --framer-input-font-size: 16px; --framer-input-font-text-alignment: left; --framer-input-font-weight: 400; --framer-input-padding: 0px; flex: none; height: 50px; position: relative; width: 100%; }`,
					`.framer-0Aup3 .framer-di9trs, .framer-0Aup3 .framer-1uvlnu7, .framer-0Aup3 .framer-7e5nw1 { flex: none; height: 0px; overflow: var(--overflow-clip-fallback, clip); position: relative; width: 100%; }`,
					`.framer-0Aup3 .framer-2ke6bt { align-content: flex-start; align-items: flex-start; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 100%; }`,
					`.framer-0Aup3 .framer-1t6g7fc { --framer-input-focused-border-color: var(--token-d7269bca-97f8-4000-b143-5284031cccb5, rgba(0, 0, 0, 0.4)); --framer-input-focused-border-style: solid; --framer-input-focused-border-width: 0px 0px 1px 0px; --framer-input-font-family: "Inter Display"; --framer-input-font-letter-spacing: 0.02em; --framer-input-font-line-height: 25px; --framer-input-font-open-type-features: 'cv05' on, 'cv12' on; --framer-input-font-size: 16px; --framer-input-font-text-alignment: left; --framer-input-font-weight: 400; --framer-input-padding: 10px 0px 0px 0px; --framer-input-wrapper-height: auto; flex: none; height: auto; min-height: 90px; position: relative; width: 100%; }`,
					`.framer-0Aup3 .framer-14s5jxp-container { flex: none; height: 50px; position: relative; width: 100%; }`,
					`.framer-0Aup3 .framer-gg4wvz { align-content: center; align-items: center; display: flex; flex: none; flex-direction: row; flex-wrap: wrap; gap: 0px 4px; height: min-content; justify-content: center; overflow: hidden; padding: 17px; position: relative; width: 100%; will-change: var(--framer-will-change-override, transform); }`,
					`.framer-0Aup3 .framer-12bwo8p, .framer-0Aup3 .framer-s64h48, .framer-0Aup3 .framer-1wnni8c, .framer-0Aup3 .framer-juu7l7 { flex: none; height: auto; position: relative; white-space: pre; width: auto; }`,
					`.framer-0Aup3.framer-v-mlcwr8.framer-1dl0qsi { width: 500px; }`,
					`.framer-0Aup3.framer-v-mlcwr8 .framer-1ffeqgg, .framer-0Aup3.framer-v-1updq72 .framer-1ffeqgg { padding: 35px 30px 25px 30px; }`,
					`.framer-0Aup3.framer-v-1updq72.framer-1dl0qsi { width: 390px; }`,
					`.framer-0Aup3.framer-v-1updq72 .framer-1njjiwe, .framer-0Aup3.framer-v-1updq72 .framer-14baekc { flex-direction: column; gap: 30px; }`,
					`.framer-0Aup3.framer-v-1updq72 .framer-7ua0l2, .framer-0Aup3.framer-v-1updq72 .framer-u98gy5, .framer-0Aup3.framer-v-1updq72 .framer-1hgny3a, .framer-0Aup3.framer-v-1updq72 .framer-1pwjb1h { flex: none; gap: 5px; width: 100%; }`,
					`.framer-0Aup3.framer-v-1updq72 .framer-2ke6bt { gap: 5px; }`,
					...ue,
					...R,
					...Te,
				],
				`framer-0Aup3`,
			)),
			(X = Y),
			(Y.displayName = `Contact Form`),
			(Y.defaultProps = { height: 426, width: 660 }),
			h(Y, {
				variant: {
					options: [`uhJRkpKT1`, `znr8CKZKK`, `A_n3qxlua`],
					optionTitles: [
						`Form - Desktop`,
						`Form - Tablet`,
						`Form - Phone`,
					],
					title: `Variant`,
					type: O.Enum,
				},
				jSPWscupa: {
					defaultValue: !1,
					title: `Additional Fields`,
					type: O.Boolean,
				},
				WnywsWXvI: {
					defaultValue: `Terms`,
					displayTextArea: !1,
					title: `Terms`,
					type: O.String,
				},
				vcFwDGqGn: { title: `Link to Terms`, type: O.Link },
				spja1ZIR0: {
					defaultValue: `Privacy Policy.`,
					displayTextArea: !1,
					title: `Privacy Policy`,
					type: O.String,
				},
				Ui02R5FGh: { title: `Link to  Privacy Policy`, type: O.Link },
			}),
			M(
				Y,
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
							{
								cssFamilyName: `Inter Display`,
								source: `framer`,
								style: `normal`,
								uiFamilyName: `Inter Display`,
								unicodeRange: `U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F`,
								url: `../fonts/2uIBiALfCHVpWbHqRMZutfT7giU.woff2`,
								weight: `400`,
							},
							{
								cssFamilyName: `Inter Display`,
								source: `framer`,
								style: `normal`,
								uiFamilyName: `Inter Display`,
								unicodeRange: `U+0301, U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116`,
								url: `../fonts/Zwfz6xbVe5pmcWRJRgBDHnMkOkI.woff2`,
								weight: `400`,
							},
							{
								cssFamilyName: `Inter Display`,
								source: `framer`,
								style: `normal`,
								uiFamilyName: `Inter Display`,
								unicodeRange: `U+1F00-1FFF`,
								url: `../fonts/U9LaDDmbRhzX3sB8g8glTy5feTE.woff2`,
								weight: `400`,
							},
							{
								cssFamilyName: `Inter Display`,
								source: `framer`,
								style: `normal`,
								uiFamilyName: `Inter Display`,
								unicodeRange: `U+0370-03FF`,
								url: `../fonts/tVew2LzXJ1t7QfxP1gdTIdj2o0g.woff2`,
								weight: `400`,
							},
							{
								cssFamilyName: `Inter Display`,
								source: `framer`,
								style: `normal`,
								uiFamilyName: `Inter Display`,
								unicodeRange: `U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF`,
								url: `../fonts/DF7bjCRmStYPqSb945lAlMfCCVQ.woff2`,
								weight: `400`,
							},
							{
								cssFamilyName: `Inter Display`,
								source: `framer`,
								style: `normal`,
								uiFamilyName: `Inter Display`,
								unicodeRange: `U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2070, U+2074-207E, U+2080-208E, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD`,
								url: `../fonts/bHYNJqzTyl2lqvmMiRRS6Y16Es.woff2`,
								weight: `400`,
							},
							{
								cssFamilyName: `Inter Display`,
								source: `framer`,
								style: `normal`,
								uiFamilyName: `Inter Display`,
								unicodeRange: `U+0102-0103, U+0110-0111, U+0128-0129, U+0168-0169, U+01A0-01A1, U+01AF-01B0, U+1EA0-1EF9, U+20AB`,
								url: `../fonts/vebZUMjGyKkYsfcY73iwWTzLNag.woff2`,
								weight: `400`,
							},
						],
					},
					...Ge,
					...T(fe),
					...T(z),
					...T(we),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
function Z(e, ...t) {
	let n = {};
	return (t?.forEach((t) => t && Object.assign(n, e[t])), n);
}
var rt,
	it,
	at,
	ot,
	st,
	Q,
	ct,
	lt,
	ut,
	dt,
	ft,
	$,
	pt,
	mt = e(() => {
		(l(),
			D(),
			m(),
			r(),
			ce(),
			B(),
			ye(),
			ve(),
			me(),
			Ce(),
			nt(),
			(rt = y(X)),
			(it = [`eYkSQJiay`, `lJBiFmrj6`, `kke4loMus`, `qjW9xYlwK`]),
			(at = `framer-GcSJj`),
			(ot = {
				eYkSQJiay: `framer-v-m2xmnp`,
				kke4loMus: `framer-v-3adcjh`,
				lJBiFmrj6: `framer-v-1fpwzz6`,
				qjW9xYlwK: `framer-v-1asvh0v`,
			}),
			(st = { bounce: 0.2, delay: 0, duration: 0.4, type: `spring` }),
			(Q = (e) =>
				typeof e == `object` && e && typeof e.src == `string`
					? e
					: typeof e == `string`
						? { src: e }
						: void 0),
			(ct = ({ value: e, children: t }) => {
				let r = o(f),
					a = e ?? r.transition,
					s = n(() => ({ ...r, transition: a }), [JSON.stringify(a)]);
				return i(f.Provider, { value: s, children: t });
			}),
			(lt = d.create(t)),
			(ut = {
				"Desktop Big": `lJBiFmrj6`,
				Desktop: `eYkSQJiay`,
				Phone: `qjW9xYlwK`,
				Tablet: `kke4loMus`,
			}),
			(dt = ({
				additionalFields: e,
				description: t,
				heading: n,
				height: r,
				id: i,
				nameOfManager: a,
				photoOfManager: o,
				width: s,
				...c
			}) => ({
				...c,
				cc8E3AgTV: e ?? c.cc8E3AgTV,
				FHrHVaeq1: o ??
					c.FHrHVaeq1 ?? {
						alt: ``,
						pixelHeight: 1252,
						pixelWidth: 1200,
						src: `/assets/images/EA0iiZULX9XagfD5w4kqZSbyI.png`,
					},
				K7wJlYzkm:
					t ??
					c.K7wJlYzkm ??
					`Tell to our manager about the goal. We’ll reply with scope and timeline.`,
				mq81hiP1W:
					a ??
					c.mq81hiP1W ??
					`Kate
Wilington`,
				variant: ut[c.variant] ?? c.variant ?? `eYkSQJiay`,
				WwskM11_4:
					n ??
					c.WwskM11_4 ??
					`Start
a Project`,
			})),
			(ft = (e, t) =>
				e.layoutDependency
					? t.join(`-`) + e.layoutDependency
					: t.join(`-`)),
			($ = _(
				a(function (e, n) {
					let r = s(null),
						a = n ?? r,
						o = u(),
						{ activeLocale: l, setLocale: ee } = F(),
						f = N(),
						{
							style: m,
							className: h,
							layoutId: _,
							variant: v,
							WwskM11_4: y,
							K7wJlYzkm: x,
							FHrHVaeq1: T,
							mq81hiP1W: D,
							cc8E3AgTV: O,
							...k
						} = dt(e),
						{
							baseVariant: j,
							classNames: M,
							clearLoadingGesture: ne,
							gestureHandlers: I,
							gestureVariant: L,
							isLoading: re,
							setGestureState: ie,
							setVariant: ae,
							variants: R,
						} = w({
							cycleOrder: it,
							defaultVariant: `eYkSQJiay`,
							ref: a,
							variant: v,
							variantClassNames: ot,
						}),
						z = ft(e, R),
						oe = S(at, _e, K, pe, Se, U, se);
					return (
						te(),
						i(p, {
							id: _ ?? o,
							children: i(lt, {
								animate: R,
								initial: !1,
								children: i(ct, {
									value: st,
									children: c(d.div, {
										...k,
										...I,
										className: S(oe, `framer-m2xmnp`, h, M),
										layoutDependency: z,
										layoutId: `eYkSQJiay`,
										ref: a,
										style: { ...m },
										...Z(
											{
												kke4loMus: {
												},
												lJBiFmrj6: {
												},
												qjW9xYlwK: {
												},
											},
											j,
											L,
										),
										children: [
											c(d.div, {
												className: `framer-1flv6ov`,
												layoutDependency: z,
												layoutId: `thPS3HLks`,
												children: [
													c(d.div, {
														className: `framer-s8aimg`,
														layoutDependency: z,
														layoutId: `tK3pvOchY`,
														children: [
															i(g, {
																__fromCanvasComponent:
																	!0,
																children: i(t, {
																	children: c(
																		d.h3,
																		{
																			className: `framer-styles-preset-1yuak3c`,
																			"data-styles-preset": `zczqo4Z8y`,
																			style: {
																				"--framer-text-alignment": `left`,
																			},
																			children:
																				[
																					i(
																						d.span,
																						{
																							style: {
																								"--framer-text-color": `var(--extracted-1k2zljd, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																							},
																							children: `Start `,
																						},
																					),
																					i(
																						d.br,
																						{},
																					),
																					i(
																						d.span,
																						{
																							style: {
																								"--framer-text-color": `var(--extracted-7519bk, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																							},
																							children: `a Project`,
																						},
																					),
																				],
																		},
																	),
																}),
																className: `framer-vwdlq9`,
																fonts: [
																	`Inter`,
																],
																layoutDependency:
																	z,
																layoutId: `JZMn0GQg5`,
																style: {
																	"--extracted-1k2zljd": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																	"--extracted-7519bk": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																	"--framer-paragraph-spacing": `0px`,
																},
																text: y,
																variants: {
																	lJBiFmrj6: {
																		"--extracted-1qn201a": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																		"--extracted-g1tnir": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																	},
																},
																verticalAlignment: `top`,
																withExternalLayout:
																	!0,
																...Z(
																	{
																		kke4loMus:
																			{
																				children:
																					i(
																						t,
																						{
																							children:
																								c(
																									d.h5,
																									{
																										className: `framer-styles-preset-h6j8it`,
																										"data-styles-preset": `dBxplyp6M`,
																										children:
																											[
																												`Start `,
																												i(
																													d.br,
																													{},
																												),
																												`a Project`,
																											],
																									},
																								),
																						},
																					),
																			},
																		lJBiFmrj6:
																			{
																				children:
																					i(
																						t,
																						{
																							children:
																								c(
																									d.h2,
																									{
																										className: `framer-styles-preset-g6dfhq`,
																										"data-styles-preset": `MgmvEPIz7`,
																										style: {
																											"--framer-text-alignment": `left`,
																										},
																										children:
																											[
																												i(
																													d.span,
																													{
																														style: {
																															"--framer-text-color": `var(--extracted-1qn201a, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																														},
																														children: `Start `,
																													},
																												),
																												i(
																													d.br,
																													{},
																												),
																												i(
																													d.span,
																													{
																														style: {
																															"--framer-text-color": `var(--extracted-g1tnir, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
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
																		qjW9xYlwK:
																			{
																				children:
																					i(
																						t,
																						{
																							children:
																								c(
																									d.h5,
																									{
																										className: `framer-styles-preset-h6j8it`,
																										"data-styles-preset": `dBxplyp6M`,
																										children:
																											[
																												`Start `,
																												i(
																													d.br,
																													{},
																												),
																												`a Project`,
																											],
																									},
																								),
																						},
																					),
																			},
																	},
																	j,
																	L,
																),
															}),
															i(g, {
																__fromCanvasComponent:
																	!0,
																children: i(t, {
																	children: c(
																		d.p,
																		{
																			className: `framer-styles-preset-fypikg`,
																			"data-styles-preset": `ZLH30tK8H`,
																			children:
																				[
																					i(
																						d.span,
																						{
																							style: {
																								"--framer-text-color": `var(--extracted-1w3ko1f, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																							},
																							children: `Tell to our manager about the goal.`,
																						},
																					),
																					i(
																						d.span,
																						{
																							style: {
																								"--framer-text-color": `var(--extracted-3sq8v0, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																							},
																							children:
																								i(
																									d.br,
																									{},
																								),
																						},
																					),
																					i(
																						d.span,
																						{
																							style: {
																								"--framer-text-color": `var(--extracted-c9yw3e, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																							},
																							children: `We’ll reply with scope and timeline.`,
																						},
																					),
																				],
																		},
																	),
																}),
																className: `framer-ymhz03`,
																fonts: [
																	`Inter`,
																],
																layoutDependency:
																	z,
																layoutId: `Akt873M1M`,
																style: {
																	"--extracted-1w3ko1f": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																	"--extracted-3sq8v0": `var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0))`,
																	"--extracted-c9yw3e": `var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7))`,
																	"--framer-paragraph-spacing": `0px`,
																},
																text: x,
																verticalAlignment: `top`,
																withExternalLayout:
																	!0,
																...Z(
																	{
																		kke4loMus:
																			{
																				children:
																					i(
																						t,
																						{
																							children:
																								c(
																									d.p,
																									{
																										className: `framer-styles-preset-11kcybb`,
																										"data-styles-preset": `pPuowuywh`,
																										children:
																											[
																												i(
																													d.span,
																													{
																														style: {
																															"--framer-text-color": `var(--extracted-1w3ko1f, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																														},
																														children: `Tell to our manager about the goal.`,
																													},
																												),
																												i(
																													d.span,
																													{
																														style: {
																															"--framer-text-color": `var(--extracted-3sq8v0, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																														},
																														children:
																															i(
																																d.br,
																																{},
																															),
																													},
																												),
																												i(
																													d.span,
																													{
																														style: {
																															"--framer-text-color": `var(--extracted-c9yw3e, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																														},
																														children: `We’ll reply with scope and timeline.`,
																													},
																												),
																											],
																									},
																								),
																						},
																					),
																			},
																		qjW9xYlwK:
																			{
																				children:
																					i(
																						t,
																						{
																							children:
																								c(
																									d.p,
																									{
																										className: `framer-styles-preset-11kcybb`,
																										"data-styles-preset": `pPuowuywh`,
																										children:
																											[
																												i(
																													d.span,
																													{
																														style: {
																															"--framer-text-color": `var(--extracted-1w3ko1f, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																														},
																														children: `Tell to our manager about the goal.`,
																													},
																												),
																												i(
																													d.span,
																													{
																														style: {
																															"--framer-text-color": `var(--extracted-3sq8v0, var(--token-3cdc6fa6-d3d3-48ad-b744-7855447ef4d2, rgb(0, 0, 0)))`,
																														},
																														children:
																															i(
																																d.br,
																																{},
																															),
																													},
																												),
																												i(
																													d.span,
																													{
																														style: {
																															"--framer-text-color": `var(--extracted-c9yw3e, var(--token-be54cbb0-ffd8-47a8-9c63-8f8188406a2d, rgba(0, 0, 0, 0.7)))`,
																														},
																														children: `We’ll reply with scope and timeline.`,
																													},
																												),
																											],
																									},
																								),
																						},
																					),
																			},
																	},
																	j,
																	L,
																),
															}),
														],
													}),
													c(d.div, {
														className: `framer-1c49vtx`,
														
														layoutDependency: z,
														layoutId: `tvvc3VwLO`,
														children: [
															i(g, {
																__fromCanvasComponent:
																	!0,
																children: i(t, {
																	children: c(
																		d.h6,
																		{
																			className: `framer-styles-preset-12tby5a`,
																			"data-styles-preset": `j9HsFBXUW`,
																			style: {
																				"--framer-text-alignment": `right`,
																			},
																			children:
																				[
																					i(
																						d.span,
																						{
																							style: {
																								"--framer-text-color": `var(--extracted-1vqrutl, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																							},
																							children: `Kate`,
																						},
																					),
																					i(
																						d.br,
																						{},
																					),
																					i(
																						d.span,
																						{
																							style: {
																								"--framer-text-color": `var(--extracted-24qq59, var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255)))`,
																							},
																							children: `Wilington`,
																						},
																					),
																				],
																		},
																	),
																}),
																className: `framer-1a0u2y0`,
																fonts: [
																	`Inter`,
																],
																layoutDependency:
																	z,
																layoutId: `E4fMN5oRK`,
																style: {
																	"--extracted-1vqrutl": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																	"--extracted-24qq59": `var(--token-eb75cce0-dceb-4fad-8933-456b75a9eda5, rgb(255, 255, 255))`,
																	"--framer-paragraph-spacing": `0px`,
																},
																text: D,
																verticalAlignment: `top`,
																withExternalLayout:
																	!0,
															}),
															i(A, {
																background: {
																	alt: ``,
																	fit: `stretch`,
																	loading: E(
																		(f?.y ||
																			0) +
																			0 +
																			0 +
																			0 +
																			0 +
																			0 +
																			0.5,
																	),
																	pixelHeight: 1252,
																	pixelWidth: 1200,
																	sizes: `240px`,
																	...Q(T),
																	positionX: `center`,
																	positionY: `center`,
																},
																className: `framer-10rcgy`,
																
																fitImageDimension: `height`,
																layoutDependency:
																	z,
																layoutId: `N_Nr2_VHD`,
																...Z(
																	{
																		kke4loMus:
																			{
																				background:
																					{
																						alt: ``,
																						fit: `stretch`,
																						loading:
																							E(
																								(f?.y ||
																									0) +
																									0 +
																									0 +
																									0 +
																									0 +
																									0 +
																									-41,
																							),
																						pixelHeight: 1252,
																						pixelWidth: 1200,
																						sizes: `calc(${f?.width || `100vw`} * 0.44)`,
																						...Q(
																							T,
																						),
																						positionX: `center`,
																						positionY: `center`,
																					},
																			},
																		lJBiFmrj6:
																			{
																				background:
																					{
																						alt: ``,
																						fit: `stretch`,
																						loading:
																							E(
																								(f?.y ||
																									0) +
																									0 +
																									0 +
																									0 +
																									0 +
																									0 +
																									0,
																							),
																						pixelHeight: 1252,
																						pixelWidth: 1200,
																						sizes: `325px`,
																						...Q(
																							T,
																						),
																						positionX: `center`,
																						positionY: `center`,
																					},
																			},
																		qjW9xYlwK:
																			{
																				background:
																					{
																						alt: ``,
																						fit: `stretch`,
																						loading:
																							E(
																								(f?.y ||
																									0) +
																									0 +
																									0 +
																									0 +
																									0 +
																									0 +
																									31,
																							),
																						pixelHeight: 1252,
																						pixelWidth: 1200,
																						sizes: `calc(${f?.width || `100vw`} * 0.41)`,
																						...Q(
																							T,
																						),
																						positionX: `center`,
																						positionY: `center`,
																					},
																			},
																	},
																	j,
																	L,
																),
															}),
														],
													}),
												],
											}),
											i(C, {
												links: [
													{
														href: {
															webPageId: `rfr9bsCxq`,
														},
														implicitPathVariables:
															void 0,
													},
													{
														href: {
															webPageId: `rfr9bsCxq`,
														},
														implicitPathVariables:
															void 0,
													},
													{
														href: {
															webPageId: `rfr9bsCxq`,
														},
														implicitPathVariables:
															void 0,
													},
													{
														href: {
															webPageId: `rfr9bsCxq`,
														},
														implicitPathVariables:
															void 0,
													},
													{
														href: {
															webPageId: `rfr9bsCxq`,
														},
														implicitPathVariables:
															void 0,
													},
													{
														href: {
															webPageId: `rfr9bsCxq`,
														},
														implicitPathVariables:
															void 0,
													},
													{
														href: {
															webPageId: `rfr9bsCxq`,
														},
														implicitPathVariables:
															void 0,
													},
													{
														href: {
															webPageId: `rfr9bsCxq`,
														},
														implicitPathVariables:
															void 0,
													},
												],
												children: (e) =>
													i(P, {
														height: 426,
														width:
															f?.width || `100vw`,
														y:
															(f?.y || 0) +
															0 +
															250.5,
														...Z(
															{
																kke4loMus: {
																	y:
																		(f?.y ||
																			0) +
																		0 +
																		198,
																},
																lJBiFmrj6: {
																	y:
																		(f?.y ||
																			0) +
																		0 +
																		339,
																},
																qjW9xYlwK: {
																	y:
																		(f?.y ||
																			0) +
																		0 +
																		198,
																},
															},
															j,
															L,
														),
														children: i(b, {
															className: `framer-1hcjf7u-container`,
															layoutDependency: z,
															layoutId: `wKCz8fqYk-container`,
															nodeId: `wKCz8fqYk`,
															rendersWithMotion:
																!0,
															scopeId: `mDZy95zW1`,
															children: i(X, {
																height: `100%`,
																id: `wKCz8fqYk`,
																jSPWscupa: O,
																layoutId: `wKCz8fqYk`,
																spja1ZIR0: `Privacy Policy.`,
																style: {
																	width: `100%`,
																},
																Ui02R5FGh: e[1],
																variant: `uhJRkpKT1`,
																vcFwDGqGn: e[0],
																width: `100%`,
																WnywsWXvI: `Terms`,
																...Z(
																	{
																		kke4loMus:
																			{
																				Ui02R5FGh:
																					e[5],
																				variant: `znr8CKZKK`,
																				vcFwDGqGn:
																					e[4],
																			},
																		lJBiFmrj6:
																			{
																				Ui02R5FGh:
																					e[3],
																				vcFwDGqGn:
																					e[2],
																			},
																		qjW9xYlwK:
																			{
																				Ui02R5FGh:
																					e[7],
																				variant: `A_n3qxlua`,
																				vcFwDGqGn:
																					e[6],
																			},
																	},
																	j,
																	L,
																),
															}),
														}),
													}),
											}),
										],
									}),
								}),
							}),
						})
					);
				}),
				[
					`@supports (aspect-ratio: 1) { body { --framer-aspect-ratio-supported: auto; } }`,
					`.framer-GcSJj.framer-1d40q78, .framer-GcSJj .framer-1d40q78 { display: block; }`,
					`.framer-GcSJj.framer-m2xmnp { align-content: center; align-items: center; display: flex; flex-direction: column; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; padding: 0px; position: relative; width: 525px; }`,
					`.framer-GcSJj .framer-1flv6ov { align-content: flex-end; align-items: flex-end; display: flex; flex: none; flex-direction: row; flex-wrap: nowrap; gap: 0px; height: min-content; justify-content: flex-start; overflow: visible; padding: 0px; position: relative; width: 100%; }`,
					`.framer-GcSJj .framer-s8aimg { align-content: flex-start; align-items: flex-start; align-self: stretch; display: flex; flex: 1 0 0px; flex-direction: column; flex-wrap: nowrap; gap: 25px; height: auto; justify-content: flex-start; overflow: visible; padding: 0px 0px 35px 0px; position: relative; width: 1px; }`,
					`.framer-GcSJj .framer-vwdlq9, .framer-GcSJj .framer-ymhz03 { flex: none; height: auto; position: relative; white-space: pre-wrap; width: 100%; word-break: break-word; word-wrap: break-word; z-index: 3; }`,
					`.framer-GcSJj .framer-1c49vtx { align-content: flex-end; align-items: flex-end; aspect-ratio: 0.9584664536741214 / 1; display: flex; flex: none; flex-direction: column; flex-wrap: nowrap; gap: 10px; height: var(--framer-aspect-ratio-supported, 251px); justify-content: flex-end; overflow: var(--overflow-clip-fallback, clip); padding: 0px; position: relative; width: 240px; z-index: 2; }`,
					`.framer-GcSJj .framer-1a0u2y0 { bottom: 30px; flex: none; height: auto; mix-blend-mode: difference; position: absolute; right: 65px; white-space: pre; width: auto; z-index: 1; }`,
					`.framer-GcSJj .framer-10rcgy, .framer-GcSJj .framer-1hcjf7u-container { flex: none; height: auto; position: relative; width: 100%; }`,
					`.framer-GcSJj.framer-v-1fpwzz6.framer-m2xmnp { width: 750px; }`,
					`.framer-GcSJj.framer-v-1fpwzz6 .framer-s8aimg { gap: 45px; padding: 5px 0px 30px 0px; }`,
					`.framer-GcSJj.framer-v-1fpwzz6 .framer-1c49vtx { height: var(--framer-aspect-ratio-supported, 339px); width: 325px; }`,
					`.framer-GcSJj.framer-v-3adcjh.framer-m2xmnp { width: 520px; }`,
					`.framer-GcSJj.framer-v-3adcjh .framer-s8aimg { gap: 15px; justify-content: center; padding: 0px 0px 25px 0px; }`,
					`.framer-GcSJj.framer-v-3adcjh .framer-1c49vtx { height: var(--framer-aspect-ratio-supported, 239px); width: 44%; }`,
					`.framer-GcSJj.framer-v-3adcjh .framer-1a0u2y0 { bottom: 20px; right: 35px; }`,
					`.framer-GcSJj.framer-v-1asvh0v.framer-m2xmnp { width: 390px; }`,
					`.framer-GcSJj.framer-v-1asvh0v .framer-1flv6ov { gap: 10px; }`,
					`.framer-GcSJj.framer-v-1asvh0v .framer-s8aimg { gap: 15px; padding: 0px 0px 25px 0px; }`,
					`.framer-GcSJj.framer-v-1asvh0v .framer-1c49vtx { height: var(--framer-aspect-ratio-supported, 167px); width: 41%; }`,
					`.framer-GcSJj.framer-v-1asvh0v .framer-1a0u2y0 { bottom: 20px; right: 25px; }`,
					...he,
					...G,
					...le,
					...xe,
					...H,
					...ue,
				],
				`framer-GcSJj`,
			)),
			(pt = $),
			($.displayName = `CTA - Widget`),
			($.defaultProps = { height: 696, width: 525 }),
			h($, {
				variant: {
					options: [
						`eYkSQJiay`,
						`lJBiFmrj6`,
						`kke4loMus`,
						`qjW9xYlwK`,
					],
					optionTitles: [`Desktop`, `Desktop Big`, `Tablet`, `Phone`],
					title: `Variant`,
					type: O.Enum,
				},
				WwskM11_4: {
					defaultValue: `Start
a Project`,
					displayTextArea: !0,
					title: `Heading`,
					type: O.String,
				},
				K7wJlYzkm: {
					defaultValue: `Tell to our manager about the goal. We’ll reply with scope and timeline.`,
					displayTextArea: !0,
					title: `Description`,
					type: O.String,
				},
				FHrHVaeq1: {
					__defaultAssetReference: `data:framer/asset-reference,EA0iiZULX9XagfD5w4kqZSbyI.png?preferredSize=full&width=1200&height=1252`,
					__vekterDefault: {
						alt: ``,
						assetReference: `data:framer/asset-reference,EA0iiZULX9XagfD5w4kqZSbyI.png?preferredSize=full&width=1200&height=1252`,
					},
					title: `Photo of Manager`,
					type: O.ResponsiveImage,
				},
				mq81hiP1W: {
					defaultValue: `Kate
Wilington`,
					displayTextArea: !0,
					title: `Name of Manager`,
					type: O.String,
				},
				cc8E3AgTV: {
					defaultValue: !1,
					title: `Additional Fields`,
					type: O.Boolean,
				},
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
					...rt,
					...T(ge),
					...T(W),
					...T(de),
					...T(be),
					...T(V),
					...T(fe),
				],
				{ supportsExplicitInterCodegen: !0 },
			));
	});
export {
	W as a,
	H as c,
	G as i,
	V as l,
	pt as n,
	ye as o,
	K as r,
	U as s,
	mt as t,
	ve as u,
};
