'use client';

// Rainbow Horizon — a ray-marched band of spectral light stretched across the
// canvas, drawn as a single full-screen WebGL2 fragment shader. Two marched
// fields are blended: a warped horizon glow and a rippling tunnel behind it.
//
// Adapted from the Shadertoy-style "Rainbow Horizon" demo.
//
// This is a fill-rate bound effect — every pixel walks its own ray, so cost
// scales with the number of pixels drawn, not with the size of the element on
// screen. Straight from the source demo it runs ~11fps full-viewport on an M2.
// Three things fix that, each one measured rather than guessed:
//
//   * the tunnel marches far fewer steps than the horizon. It costs 2.6x what
//     the horizon costs and is mixed in at 30%, so paying full price for it is
//     the worst deal in the shader (91ms -> 45ms for a soft change in the haze).
//   * the horizon drops its two finest warp octaves, which move the image by
//     2.5/255 on average and are smeared away by the exp() falloff anyway.
//   * the backing store is sized to hit a frame budget instead of to the
//     element, and the size is calibrated from the GPU's own timing. On a glow
//     this soft, rendering under CSS resolution is close to invisible.
//
// Things that sound like they should help and measurably do not: breaking out
// of the march once tanh() has saturated (no effect, the branch just diverges),
// and marching the horizon in fewer/longer steps to cover the same depth (a
// worse image than simply truncating the march, for ~the same money).

import { Renderer, Program, Mesh, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';
import { useRenderActive } from '@/lib/use-render-active';
import './rainbow-horizon.css';

// Compile-time ceiling for each march; the uniforms clamp them at runtime.
const MAX_STEPS = 100;
const MAX_TUNNEL_STEPS = 40;

// Steps each layer walks at quality 1. The tunnel reads as a soft haze, so it
// gets a fraction of the horizon's budget — see the note above.
const HORIZON_STEPS = 100;
const TUNNEL_STEPS = 30;

// Device pixels the shader may fill per frame. This is the opening bid and the
// upper bound — measured GPU time only ever trims it. Calibrated so a
// full-viewport background lands on a 60fps budget on mid-range hardware; a
// small element is under it anyway and renders at full device resolution.
const PIXEL_BUDGET = 450_000;

// Resolution scales, relative to CSS pixels. The ceiling goes above 1 only on a
// retina display, and only if the GPU turns out to have room for it.
const MIN_SCALE = 0.33;
const MAX_SCALE = 2;

// Share of the frame the shader may spend. The rest is the browser's: page
// compositing, the upscale blit, and whatever else is on the page.
const FRAME_SHARE = 0.7;

const VERT = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

const FRAG = `#version 300 es
precision highp float;

uniform vec2 uResolution;
uniform float uTime;
uniform int uSteps;
uniform int uTunnelSteps;
uniform float uBand;
uniform float uBlend;
uniform float uHueShift;
uniform float uIntensity;
uniform float uSaturation;
uniform float uOpacity;

out vec4 fragColor;

// A shorter march covers less depth and so accumulates less light. Dividing the
// exposure by the fraction of the march actually walked keeps the brightness
// steady as the step budget moves.
float exposure(int steps, int full) {
  return max(float(steps) / float(full), 0.01);
}

// The horizon: a thin slab of turbulent fog lit by a phase-shifted cosine
// palette, so the band reads as a spectrum smeared along the x axis.
vec4 horizon(vec2 I, vec3 R, float t) {
  float z = 0.0, d, s;
  vec4 O = vec4(0.0);

  for (int i = 0; i < ${MAX_STEPS}; i++) {
    if (i >= uSteps) break;

    vec3 p = z * normalize(vec3(I + I, 0.0) - R.xyy);

    // Octaves of domain warp, each half the amplitude and twice the frequency.
    // The source ran this to d=200 (6 octaves); the last two land under half a
    // pixel of displacement once exp() smears the slab, so they are dropped —
    // 9% cheaper for a mean difference of 2.5/255.
    for (d = 5.0; d < 41.0; d += d) p += 0.6 * sin(p.yzx * d - 0.2 * t) / d;

    // distance to the slab: positive inside it, gently negative outside
    s = uBand - abs(p.y);
    d = 0.005 + max(s, -s * 0.2) / 4.0;
    z += d;

    O += (cos(s / 0.07 + p.x + 0.5 * t + uHueShift - vec4(3, 4, 5, 0)) + 1.5) * exp(s / 0.1) / d;
  }

  float k = exposure(uSteps, ${HORIZON_STEPS});
  return tanh(O * O * uIntensity / (4e8 * k * k));
}

// The tunnel: the same march folded around a cylinder that drifts toward the
// camera, adding depth and motion behind the horizon.
vec4 tunnel(vec2 I, vec3 R, float t) {
  float d = 0.0, s;
  vec4 O = vec4(0.0);

  for (int i = 0; i < ${MAX_TUNNEL_STEPS}; i++) {
    if (i >= uTunnelSteps) break;

    vec3 p = d * normalize(vec3(I + I, 0.0) - R.xyy);
    p.z -= t;

    for (s = 0.1; s < 2.0; s *= 1.42) {
      p -= dot(cos(t + p * s * 16.0), vec3(0.01)) / s;
      p += sin(p.yzx * 0.9) * 0.3;
    }

    s = 0.02 + abs(3.0 - length(p.yx)) * 0.1;
    d += s;

    O += (1.0 + cos(d + uHueShift + vec4(4, 2, 1, 0))) / s;
  }

  float k = exposure(uTunnelSteps, ${TUNNEL_STEPS});
  return tanh(O * uIntensity / (2e3 * k));
}

void main() {
  vec3 R = vec3(uResolution, 1.0);
  float blend = clamp(uBlend, 0.0, 1.0);

  // Both branches are uniform across the draw, so a blend pinned to 0 or 1
  // costs one march instead of two.
  vec4 a = blend < 1.0 ? horizon(gl_FragCoord.xy, R, uTime) : vec4(0.0);
  vec4 b = blend > 0.0 ? tunnel(gl_FragCoord.xy, R, uTime) : vec4(0.0);

  vec3 col = mix(a.rgb, b.rgb, blend);

  float gray = dot(col, vec3(0.2126, 0.7152, 0.0722));
  col = max(mix(vec3(gray), col, uSaturation), 0.0);

  // Alpha follows luminance so the dark half of the frame lets whatever sits
  // behind the component show through. Output is premultiplied.
  float lum = clamp(max(max(col.r, col.g), col.b), 0.0, 1.0);
  fragColor = vec4(col * uOpacity, lum * uOpacity);
}
`;

export type RainbowHorizonProps = {
    /** How quickly the light ripples and drifts. */
    speed?: number;
    /**
     * March length, as a multiple of the default step budget. Below 1 the far
     * distance is truncated and the horizon softens; above 1 (up to 1.33) buys
     * back the tunnel detail the cheap march gives up, at a steep price. Cost
     * is linear in this — resolution is the better knob, and it is automatic.
     */
    quality?: number;
    /** Vertical thickness of the glowing band. */
    band?: number;
    /**
     * Mix between the horizon (0) and the tunnel (1). Exactly 0 or 1 skips the
     * unused march entirely, which is the cheapest this effect gets.
     */
    blend?: number;
    /** Rotates the spectrum through the palette, in radians. */
    hueShift?: number;
    /** Overall brightness of the effect. */
    intensity?: number;
    /** Vibrance. Above 1 intensifies, below 1 fades toward greyscale. */
    saturation?: number;
    /** Overall transparency of the rendered effect. */
    opacity?: number;
    /**
     * Fixes the backing-store scale relative to CSS pixels, 0.33–2, and turns
     * off automatic sizing. Leave unset: by default the size comes from a
     * pixel budget, so a small element renders at full device resolution and a
     * full-viewport one renders below it and is scaled up.
     */
    resolution?: number;
    /**
     * Let measured GPU time trim the resolution when the machine can't hold
     * `maxFps`. It only ever trims, and stops once it fits, so a scene settles
     * at one quality instead of visibly breathing in and out of focus.
     */
    adaptive?: boolean;
    /**
     * Frame ceiling. Ticks above it are skipped, which halves the cost on a
     * 120Hz display and paces the frames evenly instead of unevenly dropping.
     */
    maxFps?: number;
    /**
     * Colour painted behind the effect. The canvas is cleared transparent, so
     * the default lets the page show through; the source demo used `#000011`.
     */
    background?: string;
    className?: string;
    style?: React.CSSProperties;
};

// Only the uniforms the render loop reads — the rest are DOM or GL setup.
type LiveProps = Required<
    Omit<
        RainbowHorizonProps,
        'className' | 'style' | 'background' | 'resolution' | 'adaptive' | 'maxFps'
    >
>;

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

const horizonSteps = (quality: number) =>
    clamp(Math.round(quality * HORIZON_STEPS), 8, MAX_STEPS);

const tunnelSteps = (quality: number) =>
    clamp(Math.round(quality * TUNNEL_STEPS), 4, MAX_TUNNEL_STEPS);

/** Largest scale that keeps the drawing buffer inside the pixel budget. */
function budgetScale(width: number, height: number, ceiling: number) {
    const area = Math.max(width * height, 1);
    return clamp(Math.sqrt(PIXEL_BUDGET / area), MIN_SCALE, ceiling);
}

function median(values: number[]) {
    const sorted = [...values].sort((a, b) => a - b);
    return sorted[sorted.length >> 1];
}

export default function RainbowHorizon({
    speed = 1,
    quality = 1,
    band = 0.3,
    blend = 0.3,
    hueShift = 0,
    intensity = 1,
    saturation = 1,
    opacity = 1,
    resolution,
    adaptive = true,
    maxFps = 60,
    background = 'transparent',
    className = '',
    style
}: RainbowHorizonProps) {
    // Draw frames only while the element is near the viewport and the tab is
    // visible; scrolled past, this costs ~zero GPU.
    const { ref: ctnDom, active } = useRenderActive<HTMLDivElement>();

    // Props are read inside the animation loop rather than re-running the
    // effect, so changing them never rebuilds the GL context. The mirror is
    // written in an effect declared ABOVE the GL effect, so it is already
    // current by the time it reads it on mount.
    const propsRef = useRef<LiveProps>({
        speed, quality, band, blend, hueShift, intensity, saturation, opacity
    });
    useEffect(() => {
        propsRef.current = {
            speed, quality, band, blend, hueShift, intensity, saturation, opacity
        };
    });

    const activeRef = useRef(active);
    useEffect(() => {
        activeRef.current = active;
    }, [active]);

    useEffect(() => {
        const ctn = ctnDom.current;
        if (!ctn) return;

        // The shader is GLSL ES 3.00; without WebGL2 there is nothing to fall
        // back to, so leave the container empty rather than logging a failure.
        const probe = document.createElement('canvas');
        if (!probe.getContext('webgl2')) return;

        const renderer = new Renderer({
            alpha: true,
            premultipliedAlpha: true,
            antialias: false,
            dpr: 1,
            webgl: 2
        });
        const gl = renderer.gl;
        gl.clearColor(0, 0, 0, 0);
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
        gl.canvas.style.backgroundColor = 'transparent';

        const geometry = new Triangle(gl);
        if (geometry.attributes.uv) {
            delete geometry.attributes.uv;
        }

        const initial = propsRef.current;

        const program = new Program(gl, {
            vertex: VERT,
            fragment: FRAG,
            uniforms: {
                uTime: { value: 0 },
                uResolution: { value: [1, 1] },
                uSteps: { value: horizonSteps(initial.quality) },
                uTunnelSteps: { value: tunnelSteps(initial.quality) },
                uBand: { value: initial.band },
                uBlend: { value: initial.blend },
                uHueShift: { value: initial.hueShift },
                uIntensity: { value: initial.intensity },
                uSaturation: { value: initial.saturation },
                uOpacity: { value: initial.opacity }
            }
        });

        const mesh = new Mesh(gl, { geometry, program });
        ctn.appendChild(gl.canvas);

        const fixedScale = resolution !== undefined;

        // Sharpest this machine could ever want. Only a retina panel gains
        // anything from rendering past CSS resolution.
        const ceiling = clamp(window.devicePixelRatio || 1, MIN_SCALE, MAX_SCALE);

        // Resolution the effect renders at, as a fraction of CSS pixels. Two
        // independent inputs: the element's size against the pixel budget, and
        // `trim`, which is how much of that this machine turned out to afford.
        // Keeping them separate is what lets an element that grows to fill the
        // viewport re-derive its budget instead of carrying a scale that was
        // only ever affordable at card size.
        let scale = 0;
        let trim = 1;

        // Last-resort relief once the resolution has bottomed out: shorten the
        // march. Applied as a multiplier on the caller's quality.
        let loadRelief = 1;

        function resize() {
            const width = ctn!.offsetWidth;
            const height = ctn!.offsetHeight;
            if (!width || !height) return;

            scale = fixedScale
                ? clamp(resolution!, MIN_SCALE, MAX_SCALE)
                : clamp(budgetScale(width, height, ceiling) * trim, MIN_SCALE, ceiling);

            renderer.dpr = scale;
            renderer.setSize(width, height);

            // uResolution is compared against gl_FragCoord, which counts DEVICE
            // pixels, so it has to be the drawing-buffer size — not the CSS size.
            program.uniforms.uResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight];
        }
        resize();

        // Time is integrated rather than taken from the RAF clock so that
        // changing `speed` eases from where the animation is instead of jumping.
        let shaderTime = 0;
        let lastFrame = 0;

        function draw(t: number) {
            const current = propsRef.current;
            const delta = lastFrame ? Math.min(t - lastFrame, 100) : 0;
            lastFrame = t;
            shaderTime += delta * 0.001 * current.speed;

            const q = current.quality * loadRelief;
            program.uniforms.uTime.value = shaderTime;
            program.uniforms.uSteps.value = horizonSteps(q);
            program.uniforms.uTunnelSteps.value = tunnelSteps(q);
            program.uniforms.uBand.value = current.band;
            program.uniforms.uBlend.value = current.blend;
            program.uniforms.uHueShift.value = current.hueShift;
            program.uniforms.uIntensity.value = current.intensity;
            program.uniforms.uSaturation.value = current.saturation;
            program.uniforms.uOpacity.value = current.opacity;

            renderer.render({ scene: mesh });
        }

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        let cleanupQuery = () => {};

        const ro = new ResizeObserver(() => {
            resize();
            // the animation loop repaints on its own; a held frame does not
            if (reduceMotion) draw(0);
        });
        ro.observe(ctn);

        let animateId = 0;
        if (reduceMotion) {
            // a reduced-motion viewer still gets the horizon, held on one frame
            draw(0);
        } else {
            const frameBudget = 1000 / Math.max(maxFps, 1);
            const target = frameBudget * FRAME_SHARE;

            // GPU time for one draw. Wall-clock timing cannot see this: the
            // draw call returns long before the GPU is done with it, and RAF
            // intervals only ever come back as multiples of the refresh rate.
            //
            // ogl types its context as WebGL1. The renderer was built with
            // webgl: 2 and the probe above already gated this effect on WebGL2,
            // so the query calls below are real.
            const gl2 = gl as unknown as WebGL2RenderingContext;
            const timer = gl.getExtension('EXT_disjoint_timer_query_webgl2');
            let query: WebGLQuery | null = null;
            let sinceQuery = 0;
            let samples: number[] = [];
            let settled = 0;
            let calibrating = !!timer;

            // Cost scales with pixels, so the trim that fits the budget is a
            // calculation, not a search: to halve the time, halve the area.
            // Damped, because a single correction that overshoots is a visible
            // jump in sharpness.
            const shrink = (budget: number, measured: number) => {
                const factor = clamp(Math.sqrt(budget / measured), 0, 1);
                const next = trim * (1 + (factor - 1) * 0.75);
                if (trim - next < 0.02) return;
                trim = next;
                resize();
            };

            // This only ever trims. Climbing would mean trusting the timer to
            // report headroom, and it carries several ms of fixed per-frame
            // overhead that swamps a cheap draw — a small element measures far
            // slower than its pixel count says, and would never sharpen up.
            // Over-budget readings are dominated by real shader cost, so the
            // downward direction is the one the number can be trusted for.
            //
            // Single frames are too noisy to act on, so this runs off a median,
            // damps the correction, and stops once two readings come back
            // inside budget: a resolution that keeps moving is visible as a
            // slow breathing blur.
            const calibrate = (ms: number) => {
                samples.push(ms);
                if (samples.length < 8) return;
                const measured = median(samples);
                samples = [];

                if (measured <= target * 1.1) {
                    if (++settled >= 2) calibrating = false;
                    return;
                }
                settled = 0;
                shrink(target, measured);
            };

            const readQuery = () => {
                if (!query) return;
                if (!gl2.getQueryParameter(query, gl2.QUERY_RESULT_AVAILABLE)) return;
                // A disjoint means the GPU was interrupted and the number is junk.
                const usable = !gl.getParameter(timer!.GPU_DISJOINT_EXT);
                const ms = gl2.getQueryParameter(query, gl2.QUERY_RESULT) / 1e6;
                gl2.deleteQuery(query);
                query = null;
                if (usable && ms > 0) calibrate(ms);
            };

            // Backstop for browsers without timer queries, and for when the
            // page is slow for reasons the GPU timing cannot see: a saturated
            // frame stretches the RAF interval itself. Two triggers, because
            // "slightly over budget" and "one frame per second" need very
            // different reaction times.
            let lastTick = 0;
            let lastDraw = 0;
            let deltas: number[] = [];
            let slowTicks = 0;
            const mountedAt = performance.now();

            const relax = (measured: number) => {
                if (scale > MIN_SCALE) {
                    shrink(frameBudget, measured);
                    // The GPU timer cannot see whatever is actually eating the
                    // frame here, so leaving it running would just have it
                    // declare everything fine at the new size.
                    calibrating = false;
                } else if (loadRelief > 0.6) {
                    // Resolution has bottomed out; give up march length instead.
                    loadRelief = 0.6;
                }
            };

            const update = (t: number) => {
                animateId = requestAnimationFrame(update);

                // Paused: drop the clocks so the effect resumes where it left
                // off and the gap is not read as a stall.
                if (!activeRef.current) {
                    lastTick = 0;
                    lastFrame = 0;
                    deltas = [];
                    return;
                }

                if (lastTick) {
                    const delta = t - lastTick;
                    deltas.push(delta);
                    slowTicks = delta > frameBudget * 1.5 ? slowTicks + 1 : 0;
                }
                lastTick = t;

                // Mount, shader compile and first paint are slow for reasons
                // that have nothing to do with steady-state cost.
                if (t - mountedAt < 1000) {
                    deltas = [];
                    slowTicks = 0;
                } else if (adaptive && !fixedScale) {
                    if (calibrating) readQuery();

                    if (slowTicks >= 6) {
                        // Badly over budget: react now, and jump most of the
                        // way rather than creeping down a notch at a time.
                        relax(median(deltas.slice(-6)));
                        deltas = [];
                        slowTicks = 0;
                    } else if (deltas.length >= 60) {
                        const med = median(deltas);
                        if (med > frameBudget * 1.4) relax(med);
                        deltas = [];
                    }
                }

                // Hold the pace at maxFps: on a 120Hz panel this draws every
                // other tick, which is both evenly spaced and half the work.
                if (t - lastDraw < frameBudget - 1) return;
                lastDraw = t;

                // Time one draw in four while calibrating, then stop.
                const timing = calibrating && !query && ++sinceQuery >= 4;
                if (timing) {
                    sinceQuery = 0;
                    query = gl2.createQuery();
                    gl2.beginQuery(timer!.TIME_ELAPSED_EXT, query);
                }

                draw(t);

                if (timing) gl2.endQuery(timer!.TIME_ELAPSED_EXT);
            };
            animateId = requestAnimationFrame(update);

            cleanupQuery = () => {
                if (query) gl2.deleteQuery(query);
            };
        }

        return () => {
            cancelAnimationFrame(animateId);
            cleanupQuery();
            ro.disconnect();
            if (gl.canvas.parentNode === ctn) {
                ctn.removeChild(gl.canvas);
            }
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            ref={ctnDom}
            className={`rainbow-horizon ${className}`.trim()}
            // `style` last so a caller-supplied background still wins.
            style={{ backgroundColor: background, ...style }}
            aria-hidden="true"
        />
    );
}
