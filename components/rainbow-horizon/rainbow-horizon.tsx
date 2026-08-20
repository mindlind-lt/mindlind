'use client';

// Rainbow Horizon — a ray-marched band of spectral light stretched across the
// canvas, drawn as a single full-screen WebGL2 fragment shader. Two marched
// fields are blended: a warped horizon glow and a rippling tunnel.
//
// Adapted from the Shadertoy-style "Rainbow Horizon" demo.
//
// This one is expensive: every pixel marches `steps` times, so it renders at
// device pixel ratio 1 by default. Turn `pixelRatio` up only on small surfaces.

import { Renderer, Program, Mesh, Triangle } from 'ogl';
import { useEffect, useRef } from 'react';
import { useRenderActive } from '@/lib/use-render-active';
import './rainbow-horizon.css';

// Compile-time ceiling for the march; `uSteps` clamps it at runtime.
const MAX_STEPS = 100;

const MAX_DPR = 2;

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
uniform float uBand;
uniform float uBlend;
uniform float uHueShift;
uniform float uIntensity;
uniform float uSaturation;
uniform float uOpacity;

out vec4 fragColor;

// Fraction of the full march actually walked, used to keep the exposure
// roughly constant as uSteps drops.
float stepScale() {
  return max(float(uSteps) / float(${MAX_STEPS}), 0.01);
}

// The horizon: a thin slab of turbulent fog lit by a phase-shifted cosine
// palette, so the band reads as a spectrum smeared along the x axis.
vec4 horizon(vec2 I, vec3 R, float t) {
  float z = 0.0, d, s;
  vec4 O = vec4(0.0);

  for (int i = 0; i < ${MAX_STEPS}; i++) {
    if (i >= uSteps) break;

    vec3 p = z * normalize(vec3(I + I, 0.0) - R.xyy);

    // octaves of domain warp, each half the amplitude and twice the frequency
    for (d = 5.0; d < 2e2; d += d) p += 0.6 * sin(p.yzx * d - 0.2 * t) / d;

    // distance to the slab: positive inside it, gently negative outside
    s = uBand - abs(p.y);
    d = 0.005 + max(s, -s * 0.2) / 4.0;
    z += d;

    O += (cos(s / 0.07 + p.x + 0.5 * t + uHueShift - vec4(3, 4, 5, 0)) + 1.5) * exp(s / 0.1) / d;
  }

  float k = stepScale();
  return tanh(O * O * uIntensity / (4e8 * k * k));
}

// The tunnel: the same march folded around a cylinder that drifts toward the
// camera, adding depth and motion behind the horizon.
vec4 tunnel(vec2 I, vec3 R, float t) {
  float d = 0.0, s;
  vec4 O = vec4(0.0);

  for (int i = 0; i < ${MAX_STEPS}; i++) {
    if (i >= uSteps) break;

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

  float k = stepScale();
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
     * March length as a fraction of the full 100 steps. Lower is much cheaper
     * but truncates the far distance, so the horizon softens.
     */
    quality?: number;
    /** Vertical thickness of the glowing band. */
    band?: number;
    /** Mix between the horizon (0) and the tunnel (1). */
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
     * Device pixel ratio to render at (clamped to 2). Defaults to 1 — this
     * shader is fill-rate bound, so retina costs 4x for a soft glow.
     */
    pixelRatio?: number;
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
    Omit<RainbowHorizonProps, 'className' | 'style' | 'background' | 'pixelRatio'>
>;

const marchSteps = (quality: number) =>
    Math.min(Math.max(Math.round(quality * MAX_STEPS), 8), MAX_STEPS);

export default function RainbowHorizon({
    speed = 1,
    quality = 1,
    band = 0.3,
    blend = 0.3,
    hueShift = 0,
    intensity = 1,
    saturation = 1,
    opacity = 1,
    pixelRatio = 1,
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

        const dpr = Math.min(pixelRatio, window.devicePixelRatio || 1, MAX_DPR);
        const renderer = new Renderer({
            alpha: true,
            premultipliedAlpha: true,
            antialias: false,
            dpr,
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
                uResolution: { value: [ctn.offsetWidth * dpr, ctn.offsetHeight * dpr] },
                uSteps: { value: marchSteps(initial.quality) },
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

        function resize() {
            const width = ctn!.offsetWidth;
            const height = ctn!.offsetHeight;
            if (!width || !height) return;
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
            shaderTime += (delta * 0.001) * current.speed;

            program.uniforms.uTime.value = shaderTime;
            program.uniforms.uSteps.value = marchSteps(current.quality);
            program.uniforms.uBand.value = current.band;
            program.uniforms.uBlend.value = current.blend;
            program.uniforms.uHueShift.value = current.hueShift;
            program.uniforms.uIntensity.value = current.intensity;
            program.uniforms.uSaturation.value = current.saturation;
            program.uniforms.uOpacity.value = current.opacity;

            renderer.render({ scene: mesh });
        }

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

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
            const update = (t: number) => {
                animateId = requestAnimationFrame(update);
                // resync the clock after a pause so it does not jump on resume
                if (!activeRef.current) {
                    lastFrame = 0;
                    return;
                }
                draw(t);
            };
            animateId = requestAnimationFrame(update);
        }

        return () => {
            cancelAnimationFrame(animateId);
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
