'use client';

// Loading Orb — a glassy, slowly-deforming blob with swirling liquid inside and
// a glow that stays OUTSIDE the silhouette. Rendered with a raymarched WebGL2
// shader into a container-sized canvas.

import { useEffect, useRef } from 'react';
import './loading-orb.css';

// ---------------------------------------------------------------------------
// Orb settings
// ---------------------------------------------------------------------------
export type OrbValues = {
    radius: number;        // base size of the blob
    deform: number;        // how far the surface bulges in/out
    frequency: number;     // number of lobes across the surface
    morphSpeed: number;    // how fast the shape changes
    rotSpeed: number;      // how fast the blob tumbles
    specular: number;      // strength of the glints
    shininess: number;     // tightness of the glints
    glowStrength: number;  // brightness of the outer ring glow
    colorBlue: string;
    colorMagenta: string;
    glowA: string;
    glowB: string;
    liquidSpeed: number;   // how fast the liquid flows
    liquidScale: number;   // size of the swirls
    liquidBright: number;  // overall interior brightness
    filament: number;      // brightness of the bright threads
    core: number;          // glow at the very centre
    background: string;    // canvas background
};

// "Auto" | "Glow" (additive) | "Ink" (works on light bg)
export type OrbBlend = 'Auto' | 'Glow' | 'Ink';

export const ORB_PRESETS: Record<string, OrbValues> = {
    Aurora:   { radius: 0.30, deform: 0.36, frequency: 2.0, morphSpeed: 1.30, rotSpeed: 0.12, specular: 1.0, shininess: 140, glowStrength: 0.70, colorBlue: '#4099FF', colorMagenta: '#E633BF', glowA: '#33B5FF', glowB: '#E24DD0', liquidSpeed: 0.50, liquidScale: 2.20, liquidBright: 1.00, filament: 1.40, core: 0.30, background: '#070A18' },
    Ember:    { radius: 0.32, deform: 0.30, frequency: 2.1, morphSpeed: 1.40, rotSpeed: 0.10, specular: 1.2, shininess: 120, glowStrength: 0.85, colorBlue: '#FFC24D', colorMagenta: '#FF3B2F', glowA: '#FF7A18', glowB: '#FF2D55', liquidSpeed: 0.75, liquidScale: 2.40, liquidBright: 1.10, filament: 1.90, core: 0.40, background: '#160806' },
    Toxic:    { radius: 0.28, deform: 0.44, frequency: 2.3, morphSpeed: 1.50, rotSpeed: 0.18, specular: 1.0, shininess: 160, glowStrength: 0.75, colorBlue: '#9CFF4D', colorMagenta: '#00E5A0', glowA: '#57FF3C', glowB: '#00FFC8', liquidSpeed: 0.85, liquidScale: 2.60, liquidBright: 1.00, filament: 1.70, core: 0.25, background: '#04120C' },
    Ice:      { radius: 0.34, deform: 0.20, frequency: 1.8, morphSpeed: 1.18, rotSpeed: 0.08, specular: 1.5, shininess: 210, glowStrength: 0.60, colorBlue: '#9CE3FF', colorMagenta: '#E6F7FF', glowA: '#6FD2FF', glowB: '#BFEFFF', liquidSpeed: 0.32, liquidScale: 2.00, liquidBright: 0.90, filament: 1.00, core: 0.35, background: '#0A1424' },
    Plasma:   { radius: 0.28, deform: 0.40, frequency: 2.4, morphSpeed: 1.60, rotSpeed: 0.20, specular: 1.0, shininess: 130, glowStrength: 0.95, colorBlue: '#B14DFF', colorMagenta: '#FF2DA0', glowA: '#9B5CFF', glowB: '#FF3DBE', liquidSpeed: 1.00, liquidScale: 2.80, liquidBright: 1.20, filament: 2.10, core: 0.30, background: '#10061C' },
    Ghost:    { radius: 0.32, deform: 0.30, frequency: 2.0, morphSpeed: 1.25, rotSpeed: 0.10, specular: 1.6, shininess: 220, glowStrength: 0.55, colorBlue: '#C2CBE6', colorMagenta: '#8893B5', glowA: '#AEB8D8', glowB: '#6E7799', liquidSpeed: 0.45, liquidScale: 2.20, liquidBright: 0.85, filament: 1.20, core: 0.20, background: '#070709' },
    Daylight: { radius: 0.30, deform: 0.34, frequency: 2.0, morphSpeed: 1.30, rotSpeed: 0.12, specular: 1.0, shininess: 150, glowStrength: 0.80, colorBlue: '#2D6CFF', colorMagenta: '#B43CF0', glowA: '#3A82FF', glowB: '#A84DFF', liquidSpeed: 0.50, liquidScale: 2.20, liquidBright: 1.05, filament: 1.50, core: 0.30, background: '#EEF2F8' },
};

// ---------------------------------------------------------------------------
// Shaders
// ---------------------------------------------------------------------------
const VERT = `#version 300 es
layout(location=0) in vec2 a_pos;
out vec2 v_uv;
void main(){ v_uv = a_pos * 0.5 + 0.5; gl_Position = vec4(a_pos, 0.0, 1.0); }`;

const FRAG = `#version 300 es
precision highp float;
in vec2 v_uv;
out vec4 fragColor;

uniform float u_time;
uniform vec2  u_res;
uniform float u_radius;
uniform float u_deform;
uniform float u_freq;
uniform float u_morphSpeed;
uniform float u_rotSpeed;
uniform float u_specular;
uniform float u_shininess;
uniform float u_glowStrength;
uniform vec3  u_colBlue;
uniform vec3  u_colMag;
uniform vec3  u_glowA;
uniform vec3  u_glowB;
uniform float u_liquidSpeed;
uniform float u_liquidScale;
uniform float u_liquidBright;
uniform float u_filament;
uniform float u_core;
uniform vec3  u_bg;
uniform float u_blend;   // 0 = additive glow, 1 = ink (works on light backgrounds)

mat2 rot(float a){ float c=cos(a), s=sin(a); return mat2(c,-s,s,c); }

// organic blob: a sphere whose radius is modulated by slow drifting sine lobes
float blobField(vec3 p){
  float t = u_time * u_morphSpeed;
  float f = u_freq;
  float d = 0.0;
  d += sin(p.x * 2.6 * f + t * 1.00);
  d += sin(p.y * 2.9 * f - t * 0.80 + 1.3);
  d += sin(p.z * 3.2 * f + t * 1.20 + 2.7);
  d += sin((p.x + p.z) * 2.2 * f - t * 0.90 + 4.1);
  d += sin((p.y - p.x) * 2.4 * f + t * 0.70 + 0.6);
  return d * 0.2;
}

float mapBlob(vec3 p){
  float t = u_time * u_rotSpeed;
  p.xy *= rot(t * 0.7);
  p.yz *= rot(t * 0.5);
  float r = u_radius + u_deform * blobField(p);
  return length(p) - r;              // approx SDF; under-step while marching
}

vec3 calcNormal(vec3 p){
  vec2 e = vec2(0.0015, 0.0);
  return normalize(vec3(
    mapBlob(p + e.xyy) - mapBlob(p - e.xyy),
    mapBlob(p + e.yxy) - mapBlob(p - e.yxy),
    mapBlob(p + e.yyx) - mapBlob(p - e.yyx)));
}

// 3D noise for the swirling liquid inside the glass
float hash13(vec3 p3){ p3 = fract(p3 * 0.1031); p3 += dot(p3, p3.zyx + 31.32); return fract((p3.x + p3.y) * p3.z); }
float vnoise3(vec3 p){
  vec3 i = floor(p), f = fract(p); f = f * f * (3.0 - 2.0 * f);
  return mix(mix(mix(hash13(i + vec3(0,0,0)), hash13(i + vec3(1,0,0)), f.x),
                 mix(hash13(i + vec3(0,1,0)), hash13(i + vec3(1,1,0)), f.x), f.y),
             mix(mix(hash13(i + vec3(0,0,1)), hash13(i + vec3(1,0,1)), f.x),
                 mix(hash13(i + vec3(0,1,1)), hash13(i + vec3(1,1,1)), f.x), f.y), f.z);
}
float fbm3(vec3 p){ float v = 0.0, a = 0.5; for (int i = 0; i < 3; i++){ v += a * vnoise3(p); p *= 2.03; a *= 0.5; } return v; }

// domain-warped 3D field -> flowing liquid filaments
float liquid(vec3 p){
  float t = u_time * u_liquidSpeed;
  p *= u_liquidScale;
  p.xy *= rot(t * 0.15);
  p.yz *= rot(t * 0.10);
  vec3 w = vec3(fbm3(p + t * 0.2), fbm3(p + vec3(4.3, 1.2, -t * 0.15)), fbm3(p.zxy + vec3(7.7, 2.3, t * 0.10)));
  return fbm3(p + 1.8 * w);
}

void main(){
  vec2 p = v_uv * 2.0 - 1.0;
  p.x *= u_res.x / u_res.y;

  vec3 ro = vec3(0.0, 0.0, 3.0);
  vec3 rd = normalize(vec3(p, -1.8));

  // raymarch; track closest approach so the glow stays OUTSIDE the orb
  float t = 0.0;
  bool hit = false;
  vec3 pos = ro;
  float minD = 1e3;
  for (int i = 0; i < 160; i++) {
    pos = ro + rd * t;
    float d = mapBlob(pos);
    minD = min(minD, d);
    if (d < 0.001) { hit = true; break; }
    t += d * 0.40;
    if (t > 6.0) break;
  }

  vec3 E = vec3(0.0);   // emissive light the orb contributes

  if (hit) {
    vec3 n = calcNormal(pos);
    vec3 v = -rd;
    float fres = pow(1.0 - max(dot(n, v), 0.0), 3.0);

    // liquid interior: short volumetric march of swirling noise through the glass
    vec3 rp = pos + rd * 0.04;
    float trans = 1.0;
    vec3 inner = vec3(0.0);
    for (int k = 0; k < 10; k++) {
      float raw = liquid(rp);
      float dens = smoothstep(0.30, 0.70, raw);             // contrast -> distinct swirls
      float fil = pow(1.0 - abs(2.0 * raw - 1.0), 5.0);     // thin bright filaments
      vec3 c = mix(u_colMag, u_colBlue, 0.5 + 0.5 * sin(raw * 6.0 + u_time * 0.3 + rp.y * 2.5));
      vec3 emit = c * dens * 0.55 + c * fil * u_filament + vec3(1.0) * pow(fil, 3.0) * u_filament * 0.4;
      emit += u_colBlue * smoothstep(0.5, 0.0, length(rp)) * u_core;   // bright bluish core
      inner += trans * emit * 0.17;
      trans *= 0.84;
      rp += rd * 0.11;
      if (length(rp) > 1.0) break;
    }
    E += inner * (1.0 - fres * 0.6) * u_liquidBright;       // fades toward the rim

    // glassy rim + specular glints (front surface)
    vec3 rim = mix(u_colMag, u_colBlue, 0.5 + 0.5 * (n.x * 0.7 + n.y * 0.45));
    E += rim * fres * 1.3;
    vec3 l1 = normalize(vec3(0.6, 0.85, 0.6));
    vec3 l2 = normalize(vec3(-0.7, 0.25, 0.55));
    vec3 h1 = normalize(l1 + v);
    vec3 h2 = normalize(l2 + v);
    E += vec3(1.0) * pow(max(dot(n, h1), 0.0), u_shininess) * 1.3 * u_specular;
    E += vec3(0.8, 0.9, 1.0) * pow(max(dot(n, h2), 0.0), u_shininess * 0.45) * 0.6 * u_specular;
  } else {
    // glow ONLY outside: brightest at the silhouette, radiating outward
    float g = exp(-minD * 5.5);
    float ang = atan(rd.y, rd.x);
    vec3 gc = mix(u_glowA, u_glowB, 0.5 + 0.5 * sin(ang * 3.0 + u_time * 0.5));
    E += (gc * g * 1.4 + vec3(0.6, 0.8, 1.0) * pow(g, 3.0) * 0.7) * u_glowStrength;
  }

  // composite over the background:
  //  - Glow (additive)  - bright on dark backgrounds
  //  - Ink  ("over" with a tone-mapped colour) - stays visible on light ones
  vec3 glowCol = u_bg + E;
  float cov = clamp(max(E.r, max(E.g, E.b)), 0.0, 1.0);
  vec3 inkCol = mix(u_bg, E / (1.0 + E), cov);
  vec3 col = mix(glowCol, inkCol, u_blend);

  fragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}`;

// ---------------------------------------------------------------------------
// Colour helpers
// ---------------------------------------------------------------------------
function hexToRgb(hex: string): [number, number, number] {
    let h = hex.replace('#', '');
    if (h.length === 3) h = h.split('').map((c) => c + c).join('');
    const n = parseInt(h, 16);
    return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255];
}

function luminance(hex: string): number {
    const [r, g, b] = hexToRgb(hex);
    return 0.299 * r + 0.587 * g + 0.114 * b;
}

// 0 = additive glow, 1 = ink; "Auto" picks by background luminance
function blendFor(v: OrbValues, blend: OrbBlend): number {
    if (blend === 'Glow') return 0;
    if (blend === 'Ink') return 1;
    return Math.min(Math.max((luminance(v.background) - 0.35) / 0.30, 0), 1);
}

const MAX_MAIN = 1000; // device-px cap for the orb (raise for sharper output)

type LoadingOrbProps = {
    /** Named preset from ORB_PRESETS. */
    preset?: keyof typeof ORB_PRESETS;
    /** Per-value overrides applied on top of the preset. */
    values?: Partial<OrbValues>;
    blend?: OrbBlend;
    className?: string;
};

export default function LoadingOrb({
    preset = 'Aurora',
    values,
    blend = 'Auto',
    className = '',
}: LoadingOrbProps) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);

    // keep the latest settings readable from inside the render loop without
    // tearing the WebGL context down on every prop change
    const paramsRef = useRef<OrbValues>({ ...ORB_PRESETS[preset], ...values });
    const blendRef = useRef<OrbBlend>(blend);

    useEffect(() => {
        paramsRef.current = { ...ORB_PRESETS[preset], ...values };
        blendRef.current = blend;
    });

    useEffect(() => {
        const wrap = wrapRef.current;
        const canvas = canvasRef.current;
        if (!wrap || !canvas) return;

        const gl = canvas.getContext('webgl2', { antialias: false, alpha: false });
        // no WebGL2, or a context the GPU already dropped — leave the slot
        // empty rather than throw and take the whole footer down with it
        if (!gl || gl.isContextLost()) return;

        // -------------------------------------------------------------------
        // WebGL plumbing
        // -------------------------------------------------------------------
        function compile(type: number, src: string): WebGLShader {
            const sh = gl!.createShader(type)!;
            gl!.shaderSource(sh, src);
            gl!.compileShader(sh);
            if (!gl!.getShaderParameter(sh, gl!.COMPILE_STATUS)) {
                // an empty info log almost always means the context is lost,
                // not that the GLSL is bad — say which one it is
                const log = gl!.getShaderInfoLog(sh);
                throw new Error(
                    log || (gl!.isContextLost()
                        ? 'shader compile failed: WebGL context lost'
                        : 'shader compile failed (no info log)')
                );
            }
            return sh;
        }

        const program = gl.createProgram()!;
        gl.attachShader(program, compile(gl.VERTEX_SHADER, VERT));
        gl.attachShader(program, compile(gl.FRAGMENT_SHADER, FRAG));
        gl.linkProgram(program);
        if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
            throw new Error(gl.getProgramInfoLog(program) || 'link failed');
        }
        gl.useProgram(program);

        // fullscreen triangle-strip quad
        const vao = gl.createVertexArray();
        gl.bindVertexArray(vao);
        const buf = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buf);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
        gl.enableVertexAttribArray(0);
        gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);

        // uniform locations
        const U = {
            time: gl.getUniformLocation(program, 'u_time'),
            res: gl.getUniformLocation(program, 'u_res'),
            radius: gl.getUniformLocation(program, 'u_radius'),
            deform: gl.getUniformLocation(program, 'u_deform'),
            freq: gl.getUniformLocation(program, 'u_freq'),
            morphSpeed: gl.getUniformLocation(program, 'u_morphSpeed'),
            rotSpeed: gl.getUniformLocation(program, 'u_rotSpeed'),
            specular: gl.getUniformLocation(program, 'u_specular'),
            shininess: gl.getUniformLocation(program, 'u_shininess'),
            glowStrength: gl.getUniformLocation(program, 'u_glowStrength'),
            colBlue: gl.getUniformLocation(program, 'u_colBlue'),
            colMag: gl.getUniformLocation(program, 'u_colMag'),
            glowA: gl.getUniformLocation(program, 'u_glowA'),
            glowB: gl.getUniformLocation(program, 'u_glowB'),
            liquidSpeed: gl.getUniformLocation(program, 'u_liquidSpeed'),
            liquidScale: gl.getUniformLocation(program, 'u_liquidScale'),
            liquidBright: gl.getUniformLocation(program, 'u_liquidBright'),
            filament: gl.getUniformLocation(program, 'u_filament'),
            core: gl.getUniformLocation(program, 'u_core'),
            bg: gl.getUniformLocation(program, 'u_bg'),
            blend: gl.getUniformLocation(program, 'u_blend'),
        };

        // draw the orb (from a values object `v`) into one scissor region of the canvas
        function drawOrb(x: number, y: number, w: number, h: number, v: OrbValues, time: number) {
            gl!.viewport(x, y, w, h);
            gl!.scissor(x, y, w, h);
            gl!.uniform1f(U.time, time);
            gl!.uniform2f(U.res, w, h);
            gl!.uniform1f(U.radius, v.radius);
            gl!.uniform1f(U.deform, v.deform);
            gl!.uniform1f(U.freq, v.frequency);
            gl!.uniform1f(U.morphSpeed, v.morphSpeed);
            gl!.uniform1f(U.rotSpeed, v.rotSpeed);
            gl!.uniform1f(U.specular, v.specular);
            gl!.uniform1f(U.shininess, v.shininess);
            gl!.uniform1f(U.glowStrength, v.glowStrength);
            gl!.uniform3fv(U.colBlue, hexToRgb(v.colorBlue));
            gl!.uniform3fv(U.colMag, hexToRgb(v.colorMagenta));
            gl!.uniform3fv(U.glowA, hexToRgb(v.glowA));
            gl!.uniform3fv(U.glowB, hexToRgb(v.glowB));
            gl!.uniform1f(U.liquidSpeed, v.liquidSpeed);
            gl!.uniform1f(U.liquidScale, v.liquidScale);
            gl!.uniform1f(U.liquidBright, v.liquidBright);
            gl!.uniform1f(U.filament, v.filament);
            gl!.uniform1f(U.core, v.core);
            gl!.uniform3fv(U.bg, hexToRgb(v.background));
            gl!.uniform1f(U.blend, blendFor(v, blendRef.current));
            gl!.drawArrays(gl!.TRIANGLE_STRIP, 0, 4);
        }

        // -------------------------------------------------------------------
        // Resize + render loop
        // -------------------------------------------------------------------
        let dpr = 1;

        function resize() {
            dpr = Math.min(window.devicePixelRatio || 1, 1.5);
            const rect = wrap!.getBoundingClientRect();
            const w = Math.max(1, Math.floor(rect.width * dpr));
            const h = Math.max(1, Math.floor(rect.height * dpr));
            if (canvas!.width !== w || canvas!.height !== h) {
                canvas!.width = w;
                canvas!.height = h;
            }
        }

        const ro = new ResizeObserver(resize);
        ro.observe(wrap);
        resize();

        // don't burn GPU on a footer that's scrolled out of view
        let visible = true;
        const io = new IntersectionObserver(
            ([entry]) => { visible = entry.isIntersecting; },
            { rootMargin: '100px' }
        );
        io.observe(wrap);

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function render(time: number) {
            resize();
            const params = paramsRef.current;

            const bg = hexToRgb(params.background);   // gaps around the orb use the background
            gl!.clearColor(bg[0], bg[1], bg[2], 1.0);
            gl!.disable(gl!.SCISSOR_TEST);
            gl!.clear(gl!.COLOR_BUFFER_BIT);
            gl!.enable(gl!.SCISSOR_TEST);

            // centred square, capped resolution
            const side = Math.min(Math.min(canvas!.width, canvas!.height), MAX_MAIN);
            drawOrb(
                Math.floor((canvas!.width - side) / 2),
                Math.floor((canvas!.height - side) / 2),
                side, side, params, time
            );
        }

        let raf = 0;
        if (reduceMotion) {
            // a reduced-motion viewer still gets the orb, just held on a single frame
            render(0);
        } else {
            const frame = (now: number) => {
                raf = requestAnimationFrame(frame);
                if (visible) render(now * 0.001);
            };
            raf = requestAnimationFrame(frame);
        }

        return () => {
            cancelAnimationFrame(raf);
            ro.disconnect();
            io.disconnect();
            gl.deleteBuffer(buf);
            gl.deleteVertexArray(vao);
            gl.deleteProgram(program);
            // NOTE: deliberately no WEBGL_lose_context.loseContext() here.
            // getContext() hands back the *same* context object for a given
            // canvas, so losing it would leave the next mount (React Strict
            // Mode remounts every effect in dev) with a dead context, where
            // shader compilation fails with an empty info log. Dropping the
            // GL objects is enough; the context dies with the canvas.
        };
    }, []);

    return (
        <div ref={wrapRef} className={`orb ${className}`.trim()} aria-hidden="true">
            <canvas ref={canvasRef} className="orb__canvas" />
        </div>
    );
}
