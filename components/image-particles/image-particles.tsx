'use client';

// Image Particles — a photograph dissolved into a few hundred thousand GPU
// particles that drift through a simplex noise field and get shoved around by
// the pointer's momentum. Each particle picks its colour from the image at the
// point where it respawns, so the picture keeps re-forming out of the drift.
//
// The simulation runs entirely on the GPU: the vertex shader both integrates
// each particle and rasterises it, and the new state is captured back into
// buffers with transform feedback (ping-ponged between two buffer sets). That
// needs WebGL2 — there is no WebGL1 fallback, so the section renders empty
// (or as a plain image, see `showImage`) on hardware without it.
//
// Adapted from a wtc-gl demo, rewritten against raw WebGL2 so it sizes to its
// container, pauses off-screen, and releases its buffers on unmount.

import { useEffect, useRef } from 'react';
import { useRenderActive } from '@/lib/use-render-active';
import './image-particles.css';

// Retina doubles the particle count needed to cover the same area for no real
// gain — these are 4px blobs.
const MAX_DPR = 2;

// Order matters: with SEPARATE_ATTRIBS these map to transform-feedback binding
// points 0, 1 and 2, which is the order the output buffers are bound in.
const TF_VARYINGS = ['v_posvel', 'v_lifeseed', 'v_color'];

const PARTICLE_VERT = `#version 300 es

layout(location=0) in vec4 a_posvel;   // xy = position (device px), zw = velocity
layout(location=1) in vec4 a_lifeseed; // x = age, y = lifespan, zw = random seed
layout(location=2) in vec3 a_color;    // colour sampled at the last respawn

out vec4 v_posvel;
out vec4 v_lifeseed;
out vec3 v_color;
out float v_alpha;

uniform vec2 u_resolution;
uniform float u_time;
uniform vec2 u_mouse;
uniform vec2 u_mouse_velocity;
uniform sampler2D u_image;
uniform float u_image_aspect;
uniform float u_flow;
uniform float u_drag;
uniform float u_mouse_r2;
uniform float u_point_size;
uniform float u_opacity;

// object-fit: cover, in UV space
vec2 coverUv(vec2 uv) {
  float canvasAspect = u_resolution.x / u_resolution.y;
  float scale = (u_image_aspect > canvasAspect)
    ? canvasAspect / u_image_aspect
    : u_image_aspect / canvasAspect;
  vec2 axis = (u_image_aspect > canvasAspect) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  return (uv - 0.5) * (axis * scale + (1.0 - axis)) + 0.5;
}

#define MOD3 vec3(.1031,.11369,.13787)
vec3 hash33(vec3 p3) {
  p3 = fract(p3 * MOD3);
  p3 += dot(p3, p3.yxz + 19.19);
  return -1.0 + 2.0 * fract(vec3((p3.x+p3.y)*p3.z, (p3.x+p3.z)*p3.y, (p3.y+p3.z)*p3.x));
}

float simplex_noise(vec3 p) {
  const float K1 = 0.333333333;
  const float K2 = 0.166666667;
  vec3 i  = floor(p + (p.x+p.y+p.z)*K1);
  vec3 d0 = p - (i - (i.x+i.y+i.z)*K2);
  vec3 e  = step(vec3(0.0), d0 - d0.yzx);
  vec3 i1 = e * (1.0 - e.zxy);
  vec3 i2 = 1.0 - e.zxy*(1.0 - e);
  vec3 d1 = d0 - (i1 - K2);
  vec3 d2 = d0 - (i2 - 2.0*K2);
  vec3 d3 = d0 - (1.0 - 3.0*K2);
  vec4 h = max(0.6 - vec4(dot(d0,d0),dot(d1,d1),dot(d2,d2),dot(d3,d3)), 0.0);
  vec4 n = h*h*h*h * vec4(
    dot(d0, hash33(i)),
    dot(d1, hash33(i+i1)),
    dot(d2, hash33(i+i2)),
    dot(d3, hash33(i+1.0))
  );
  return dot(vec4(31.316), n);
}

void main() {
  vec2  position = a_posvel.xy;
  vec2  velocity = a_posvel.zw;
  float life     = a_lifeseed.x + 1.0;
  float maxLife  = a_lifeseed.y;
  vec2  seed     = a_lifeseed.zw;

  // Curl-ish acceleration from a slowly evolving noise field.
  float angle      = simplex_noise(vec3(position * 0.004, u_time * 20.0 + life * 0.05)) * 6.2831;
  vec2  noiseForce = vec2(cos(angle), sin(angle)) * 0.04 * u_flow;

  // Pointer momentum: the mouse's own velocity, weighted by how close the
  // particle is to it. Standing still pushes nothing.
  vec2  toMouse   = position - u_mouse;
  float dist2     = dot(toMouse, toMouse);
  float proximity = u_mouse_r2 / (dist2 + u_mouse_r2);
  vec2  mouseForce = u_mouse_velocity * proximity * 0.08 * u_drag;

  velocity = velocity * 0.98 + noiseForce + mouseForce;
  position = position + velocity;

  v_posvel   = vec4(position, velocity);
  v_lifeseed = vec4(life, maxLife, seed);
  v_color    = a_color;

  bool dead = life >= maxLife
           || position.x < 0.0 || position.x > u_resolution.x
           || position.y < 0.0 || position.y > u_resolution.y;

  // Respawning re-reads the image, so the picture survives resizes and the
  // particles never run out of colour.
  if (dead) {
    vec3 h       = hash33(vec3(seed, u_time + life));
    vec2 newSeed = h.xy;
    vec2 uv      = fract(h.xy * 0.5 + 0.5);
    v_posvel     = vec4(uv * u_resolution, 0.0, 0.0);
    v_lifeseed   = vec4(0.0, maxLife, newSeed);
    v_color      = texture(u_image, coverUv(uv)).rgb;
  }

  float lifeRatio = v_lifeseed.x / maxLife;
  float alpha     = smoothstep(0.0, 0.05, lifeRatio) * (1.0 - smoothstep(0.85, 1.0, lifeRatio));
  gl_PointSize    = smoothstep(1.0, 0.5, lifeRatio) * u_point_size * alpha;
  v_alpha         = alpha * u_opacity;

  // Positions are in device pixels with y pointing down, like the DOM.
  vec2 ndc = v_posvel.xy / u_resolution * 2.0 - 1.0;
  ndc.y    = -ndc.y;
  gl_Position = vec4(ndc, 0.0, 1.0);
}`;

const PARTICLE_FRAG = `#version 300 es
precision highp float;

in vec3 v_color;
in float v_alpha;

out vec4 fragColor;

void main() {
  float dist  = length(gl_PointCoord - 0.5);
  float shape = 1.0 - smoothstep(0.3, 0.5, dist);
  float a     = v_alpha * shape;

  // Premultiplied: blended with (ONE, ONE_MINUS_SRC_ALPHA).
  fragColor = vec4(v_color * a, a);
}`;

// Fullscreen triangle straight from gl_VertexID — no geometry, no attributes.
const BG_VERT = `#version 300 es
out vec2 v_uv;
void main() {
  vec2 p = vec2(float((gl_VertexID << 1) & 2), float(gl_VertexID & 2));
  v_uv = p;
  gl_Position = vec4(p * 2.0 - 1.0, 0.0, 1.0);
}`;

const BG_FRAG = `#version 300 es
precision highp float;

uniform sampler2D u_image;
uniform vec2 u_resolution;
uniform float u_image_aspect;
uniform float u_image_opacity;

in vec2 v_uv;
out vec4 fragColor;

vec2 coverUv(vec2 uv) {
  float canvasAspect = u_resolution.x / u_resolution.y;
  float scale = (u_image_aspect > canvasAspect)
    ? canvasAspect / u_image_aspect
    : u_image_aspect / canvasAspect;
  vec2 axis = (u_image_aspect > canvasAspect) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  return (uv - 0.5) * (axis * scale + (1.0 - axis)) + 0.5;
}

void main() {
  // The texture is uploaded unflipped, so row 0 is the top of the image.
  vec2 uv = vec2(v_uv.x, 1.0 - v_uv.y);
  vec3 rgb = texture(u_image, coverUv(uv)).rgb;
  fragColor = vec4(rgb * u_image_opacity, u_image_opacity);
}`;

export type ImageParticlesProps = {
    /** Image the particles take their colour from. Same-origin, or CORS-enabled. */
    src: string;
    /** Alternative text. Only used by the static fallback image. */
    alt?: string;
    /**
     * Particle count. The default is tuned for a full-width section on a
     * laptop; it is halved automatically on small screens.
     */
    particles?: number;
    /** Diameter of each particle in CSS pixels. */
    particleSize?: number;
    /** Overall opacity of the particle layer. */
    particleOpacity?: number;
    /**
     * How hard the noise field pushes the particles around. The default keeps
     * the drift gentle enough that the picture stays readable; 1 is the full
     * dissolve.
     */
    flow?: number;
    /** How strongly pointer momentum drags particles along. 0 disables it. */
    drag?: number;
    /** Radius in CSS pixels within which the pointer has half its influence. */
    mouseRadius?: number;
    /** Draw the source image behind the particles. */
    showImage?: boolean;
    /** Opacity of that background image, when shown. */
    imageOpacity?: number;
    /**
     * Overlay content stacked above the canvas. Rendered as real DOM — it is
     * in the served HTML and the accessibility tree — but it is inert: not
     * selectable, and transparent to pointer events, so the section behaves
     * like one painted surface. Interactive controls belong outside it.
     */
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
};

// Everything the render loop reads live, so prop changes never rebuild the GL
// context. `src` and `particles` are structural and DO rebuild it.
type LiveProps = {
    particleSize: number;
    particleOpacity: number;
    flow: number;
    drag: number;
    mouseRadius: number;
    showImage: boolean;
    imageOpacity: number;
};

function compile(gl: WebGL2RenderingContext, type: number, source: string) {
    const shader = gl.createShader(type)!;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        const log = gl.getShaderInfoLog(shader);
        gl.deleteShader(shader);
        throw new Error(`shader compile failed: ${log}`);
    }
    return shader;
}

function link(
    gl: WebGL2RenderingContext,
    vertSrc: string,
    fragSrc: string,
    varyings?: string[]
) {
    const vert = compile(gl, gl.VERTEX_SHADER, vertSrc);
    const frag = compile(gl, gl.FRAGMENT_SHADER, fragSrc);
    const program = gl.createProgram()!;
    gl.attachShader(program, vert);
    gl.attachShader(program, frag);
    // Has to happen before linking, or the varyings are not captured.
    if (varyings) gl.transformFeedbackVaryings(program, varyings, gl.SEPARATE_ATTRIBS);
    gl.linkProgram(program);
    // The shaders are reference-counted by the program; drop our handles now.
    gl.deleteShader(vert);
    gl.deleteShader(frag);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const log = gl.getProgramInfoLog(program);
        gl.deleteProgram(program);
        throw new Error(`program link failed: ${log}`);
    }
    return program;
}

/** Collects every uniform location up front so the loop never queries by name. */
function uniformsOf(gl: WebGL2RenderingContext, program: WebGLProgram) {
    const map: Record<string, WebGLUniformLocation | null> = {};
    const count = gl.getProgramParameter(program, gl.ACTIVE_UNIFORMS) as number;
    for (let i = 0; i < count; i++) {
        const name = gl.getActiveUniform(program, i)!.name;
        map[name] = gl.getUniformLocation(program, name);
    }
    return map;
}

function loadImage(src: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        // Needed to read the pixels back out of a canvas for the initial colours.
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = () => reject(new Error(`could not load ${src}`));
        img.src = src;
    });
}

export default function ImageParticles({
    src,
    alt = '',
    particles = 200_000,
    particleSize = 4,
    particleOpacity = 0.35,
    flow = 0.25,
    drag = 0.5,
    mouseRadius = 80,
    showImage = true,
    imageOpacity = 1,
    children,
    className = '',
    style
}: ImageParticlesProps) {
    // Only simulate while the section is near the viewport and the tab is
    // visible. Scrolled past, this costs nothing.
    const { ref: containerRef, active } = useRenderActive<HTMLDivElement>();

    const propsRef = useRef<LiveProps>({
        particleSize, particleOpacity, flow, drag, mouseRadius, showImage, imageOpacity
    });
    useEffect(() => {
        propsRef.current = {
            particleSize, particleOpacity, flow, drag, mouseRadius, showImage, imageOpacity
        };
    });

    const activeRef = useRef(active);
    useEffect(() => {
        activeRef.current = active;
    }, [active]);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const canvas = document.createElement('canvas');
        const gl = canvas.getContext('webgl2', {
            alpha: true,
            premultipliedAlpha: true,
            antialias: false,
            depth: false,
            powerPreference: 'high-performance'
        });
        // No WebGL2 means no transform feedback and no GLSL ES 3.00. The static
        // <img> underneath stays visible instead.
        if (!gl) return;

        // 3 separate feedback attributes is the guaranteed minimum, but check.
        if ((gl.getParameter(gl.MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS) as number) < 3) return;

        canvas.className = 'image-particles-canvas';
        container.appendChild(canvas);

        const dpr = Math.min(window.devicePixelRatio || 1, MAX_DPR);
        // Half the particles below the `sm` breakpoint: mobile GPUs, and the
        // area to cover is far smaller anyway.
        const count = Math.max(
            1,
            Math.round(window.innerWidth < 640 ? particles / 2 : particles)
        );

        gl.clearColor(0, 0, 0, 0);
        gl.disable(gl.DEPTH_TEST);
        gl.depthMask(false);
        gl.enable(gl.BLEND);
        // Premultiplied alpha: the fragment shaders output colour * alpha.
        gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);

        let particleProgram: WebGLProgram;
        let bgProgram: WebGLProgram;
        try {
            particleProgram = link(gl, PARTICLE_VERT, PARTICLE_FRAG, TF_VARYINGS);
            bgProgram = link(gl, BG_VERT, BG_FRAG);
        } catch (err) {
            if (process.env.NODE_ENV !== 'production') console.error(err);
            canvas.remove();
            return;
        }

        const pu = uniformsOf(gl, particleProgram);
        const bu = uniformsOf(gl, bgProgram);

        // Resolution in DEVICE pixels — particle positions live in that space,
        // so this must be the drawing-buffer size, not the CSS size.
        let width = 1;
        let height = 1;

        function resize() {
            const w = container!.clientWidth;
            const h = container!.clientHeight;
            if (!w || !h) return;
            width = Math.max(1, Math.round(w * dpr));
            height = Math.max(1, Math.round(h * dpr));
            canvas.width = width;
            canvas.height = height;
            gl!.viewport(0, 0, width, height);
        }
        resize();

        // --- pointer -------------------------------------------------------
        // Tracked on the window so a pointer approaching from outside the
        // section already has momentum by the time it arrives. Distance
        // falloff does the rest — a pointer far away pushes nothing.
        const mouse = new Float32Array([-1e5, -1e5]);
        const lastMouse = new Float32Array([-1e5, -1e5]);
        const mouseVelocity = new Float32Array([0, 0]);
        let seenPointer = false;

        function onPointerMove(e: PointerEvent) {
            const rect = canvas.getBoundingClientRect();
            const x = (e.clientX - rect.left) * dpr;
            const y = (e.clientY - rect.top) * dpr;
            // First sighting: snap history to it, or the initial frame reads a
            // velocity of tens of thousands of pixels and blows the field apart.
            if (!seenPointer) {
                seenPointer = true;
                lastMouse[0] = x;
                lastMouse[1] = y;
            }
            mouse[0] = x;
            mouse[1] = y;
        }
        window.addEventListener('pointermove', onPointerMove, { passive: true });

        const ro = new ResizeObserver(resize);
        ro.observe(container);

        // --- GL objects, filled in once the image has decoded ---------------
        const buffers: WebGLBuffer[] = [];
        const vaos: WebGLVertexArrayObject[] = [];
        const feedbacks: WebGLTransformFeedback[] = [];
        let emptyVao: WebGLVertexArrayObject | null = null;
        let texture: WebGLTexture | null = null;
        let imageAspect = 1;
        let ready = false;
        let cancelled = false;
        let frame = 0;
        let read = 0;
        let time = 0;
        let lastTime = 0;

        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        function setup(img: HTMLImageElement) {
            const g = gl!;
            const iw = img.naturalWidth || img.width;
            const ih = img.naturalHeight || img.height;
            imageAspect = iw / ih;

            texture = g.createTexture();
            g.bindTexture(g.TEXTURE_2D, texture);
            // Unflipped: texture row 0 is the top of the image, which is what
            // both shaders' coverUv() assumes.
            g.pixelStorei(g.UNPACK_FLIP_Y_WEBGL, false);
            g.texImage2D(g.TEXTURE_2D, 0, g.RGBA, g.RGBA, g.UNSIGNED_BYTE, img);
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MIN_FILTER, g.LINEAR);
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_MAG_FILTER, g.LINEAR);
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE);
            g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE);

            // Seed colours on the CPU so the very first frame is already the
            // picture rather than a grey cloud. After this the vertex shader
            // resamples the texture on every respawn.
            const off = document.createElement('canvas');
            off.width = iw;
            off.height = ih;
            const ctx = off.getContext('2d', { willReadFrequently: true })!;
            ctx.drawImage(img, 0, 0);
            let pixels: Uint8ClampedArray | null = null;
            try {
                pixels = ctx.getImageData(0, 0, iw, ih).data;
            } catch {
                // Cross-origin image without CORS headers taints the canvas.
                // The GPU can still sample it, so only the seed colours are lost.
                pixels = null;
            }

            const posvel = new Float32Array(count * 4);
            const lifeseed = new Float32Array(count * 4);
            const color = new Float32Array(count * 3);

            const canvasAspect = width / height;
            for (let i = 0; i < count; i++) {
                const x = Math.random() * width;
                const y = Math.random() * height;
                const maxLife = 100 + Math.random() * 300;

                posvel[i * 4] = x;
                posvel[i * 4 + 1] = y;
                posvel[i * 4 + 2] = (Math.random() - 0.5) * 0.5;
                posvel[i * 4 + 3] = (Math.random() - 0.5) * 0.5;

                // Stagger the ages so they do not all die on the same frame.
                lifeseed[i * 4] = Math.random() * maxLife;
                lifeseed[i * 4 + 1] = maxLife;
                lifeseed[i * 4 + 2] = Math.random() * 2 - 1;
                lifeseed[i * 4 + 3] = Math.random() * 2 - 1;

                if (!pixels) continue;
                let cu = x / width;
                let cv = y / height;
                if (imageAspect > canvasAspect) {
                    cu = (cu - 0.5) * (canvasAspect / imageAspect) + 0.5;
                } else {
                    cv = (cv - 0.5) * (imageAspect / canvasAspect) + 0.5;
                }
                const px = Math.min(iw - 1, Math.max(0, Math.floor(cu * iw)));
                const py = Math.min(ih - 1, Math.max(0, Math.floor(cv * ih)));
                const di = (py * iw + px) * 4;
                color[i * 3] = pixels[di] / 255;
                color[i * 3 + 1] = pixels[di + 1] / 255;
                color[i * 3 + 2] = pixels[di + 2] / 255;
            }

            // Two identical sets of state buffers, ping-ponged: one is read as
            // vertex attributes while the other is written by transform feedback.
            const sources = [posvel, lifeseed, color];
            const sizes = [4, 4, 3];
            for (let set = 0; set < 2; set++) {
                const vao = g.createVertexArray()!;
                g.bindVertexArray(vao);
                for (let a = 0; a < 3; a++) {
                    const buf = g.createBuffer()!;
                    buffers.push(buf);
                    g.bindBuffer(g.ARRAY_BUFFER, buf);
                    g.bufferData(g.ARRAY_BUFFER, sources[a], g.DYNAMIC_COPY);
                    g.enableVertexAttribArray(a);
                    g.vertexAttribPointer(a, sizes[a], g.FLOAT, false, 0, 0);
                }
                vaos.push(vao);
            }
            g.bindVertexArray(null);
            g.bindBuffer(g.ARRAY_BUFFER, null);

            // One transform-feedback object per set, wired up once. Binding the
            // output buffers per frame would risk them being attached as both
            // feedback target and attribute source at the same time.
            for (let set = 0; set < 2; set++) {
                const tf = g.createTransformFeedback()!;
                g.bindTransformFeedback(g.TRANSFORM_FEEDBACK, tf);
                for (let a = 0; a < 3; a++) {
                    g.bindBufferBase(g.TRANSFORM_FEEDBACK_BUFFER, a, buffers[set * 3 + a]);
                }
                feedbacks.push(tf);
            }
            g.bindTransformFeedback(g.TRANSFORM_FEEDBACK, null);

            // WebGL2 still needs *a* vertex array bound for attributeless draws.
            emptyVao = g.createVertexArray();

            g.useProgram(particleProgram);
            g.uniform1i(pu.u_image, 0);
            g.useProgram(bgProgram);
            g.uniform1i(bu.u_image, 0);

            ready = true;
        }

        function draw(dt: number) {
            const g = gl!;
            const p = propsRef.current;

            time += dt * 0.00005;

            // Momentum, smoothed so a flick keeps sliding for a few frames.
            const vx = mouse[0] - lastMouse[0];
            const vy = mouse[1] - lastMouse[1];
            mouseVelocity[0] += (vx - mouseVelocity[0]) * 0.15;
            mouseVelocity[1] += (vy - mouseVelocity[1]) * 0.15;
            lastMouse[0] = mouse[0];
            lastMouse[1] = mouse[1];

            g.clear(g.COLOR_BUFFER_BIT);

            g.activeTexture(g.TEXTURE0);
            g.bindTexture(g.TEXTURE_2D, texture);

            if (p.showImage && p.imageOpacity > 0) {
                g.useProgram(bgProgram);
                g.uniform2f(bu.u_resolution, width, height);
                g.uniform1f(bu.u_image_aspect, imageAspect);
                g.uniform1f(bu.u_image_opacity, p.imageOpacity);
                g.bindVertexArray(emptyVao);
                g.drawArrays(g.TRIANGLES, 0, 3);
            }

            const write = 1 - read;

            g.useProgram(particleProgram);
            g.uniform2f(pu.u_resolution, width, height);
            g.uniform1f(pu.u_time, time);
            g.uniform2f(pu.u_mouse, mouse[0], mouse[1]);
            g.uniform2f(pu.u_mouse_velocity, mouseVelocity[0], mouseVelocity[1]);
            g.uniform1f(pu.u_image_aspect, imageAspect);
            g.uniform1f(pu.u_flow, p.flow);
            g.uniform1f(pu.u_drag, p.drag);
            g.uniform1f(pu.u_mouse_r2, (p.mouseRadius * dpr) ** 2);
            g.uniform1f(pu.u_point_size, p.particleSize * dpr);
            g.uniform1f(pu.u_opacity, p.particleOpacity);

            // One draw call both rasterises the particles and captures their
            // new state into the other buffer set.
            g.bindVertexArray(vaos[read]);
            g.bindTransformFeedback(g.TRANSFORM_FEEDBACK, feedbacks[write]);
            g.beginTransformFeedback(g.POINTS);
            g.drawArrays(g.POINTS, 0, count);
            g.endTransformFeedback();
            g.bindTransformFeedback(g.TRANSFORM_FEEDBACK, null);
            g.bindVertexArray(null);

            read = write;
        }

        function loop(t: number) {
            frame = requestAnimationFrame(loop);
            if (!ready || !activeRef.current) {
                // Swallow the gap so resuming does not jump the noise field.
                lastTime = t;
                return;
            }
            // A backgrounded tab or a slow first frame can hand us a huge delta.
            const dt = lastTime ? Math.min(t - lastTime, 100) : 16;
            lastTime = t;
            draw(dt);
        }

        loadImage(src)
            .then((img) => {
                if (cancelled) return;
                setup(img);
                container.classList.add('image-particles-ready');
                if (reduceMotion) {
                    // Reduced motion still gets the picture, held on one frame.
                    draw(16);
                    ro.disconnect();
                    ro.observe(container);
                } else {
                    frame = requestAnimationFrame(loop);
                }
            })
            .catch((err) => {
                if (cancelled) return;
                if (process.env.NODE_ENV !== 'production') console.error(err);
                canvas.remove();
            });

        if (reduceMotion) {
            // Repaint the held frame after a resize, since nothing else will.
            ro.disconnect();
            ro.observe(container);
        }

        return () => {
            cancelled = true;
            cancelAnimationFrame(frame);
            ro.disconnect();
            window.removeEventListener('pointermove', onPointerMove);
            container.classList.remove('image-particles-ready');

            // Several hundred megabytes of vertex data — worth releasing
            // explicitly rather than waiting on context GC.
            for (const b of buffers) gl.deleteBuffer(b);
            for (const v of vaos) gl.deleteVertexArray(v);
            for (const f of feedbacks) gl.deleteTransformFeedback(f);
            if (emptyVao) gl.deleteVertexArray(emptyVao);
            if (texture) gl.deleteTexture(texture);
            gl.deleteProgram(particleProgram);
            gl.deleteProgram(bgProgram);
            canvas.remove();
            gl.getExtension('WEBGL_lose_context')?.loseContext();
        };
        // `src` and `particles` are structural: changing either rebuilds the
        // scene. Every other prop is read live from propsRef inside the loop.
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [src, particles]);

    return (
        <div ref={containerRef} className={`image-particles ${className}`.trim()} style={style}>
            {/* Shown until the canvas takes over, and left in place as the
                fallback when WebGL2 is unavailable or the effect fails. */}
            {showImage && (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                    className="image-particles-fallback"
                    src={src}
                    alt={alt}
                    aria-hidden={!alt}
                    draggable={false}
                />
            )}
            {children != null && <div className="image-particles-content">{children}</div>}
        </div>
    );
}
