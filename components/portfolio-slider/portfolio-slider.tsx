'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';
import './portfolio-slider.css';
import { usePageTransition } from '@/components/page-transition/page-transition-provider';

const SLIDES = [
  {
    src: '/images/portfolio-factorysl.webp',
    left: '0%',
    title: 'FactorySL',
    url: '/portfolio/autosl',
  },
  {
    src: '/images/portfolio-prince.jpg',
    left: '120%',
    title: 'Prince Food',
    url: '/portfolio/princefood',
  },
  {
    src: '/images/portfolio-autosl.webp',
    left: '240%',
    title: 'AutoSL',
    url: '/portfolio/autosl',
  },
  {
    src: '/images/portfolio-mua.jpg',
    left: '360%',
    title: 'MUAFaktur',
    url: '/portfolio/mua',
  },
  // {
  //   src: 'http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex1.jpg',
  //   left: '480%',
  //   title: 'AutoSL',
  // },
  // {
  //   src: '/images/portfolio-wa.jpg',
  //   left: '360%',
  //   title: 'Wedding Aesthetics',
  // },
  // {
  //   src: 'http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex1.jpg',
  //   left: '480%',
  //   title: 'Moonrocket',
  // },
  // {
  //   src: 'http://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex2.jpg',
  //   left: '600%',
  //   title: 'Spaceman',
  // },
  // {
  //   src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex1.jpg',
  //   left: '720%',
  //   title: 'Moonrocket',
  // },
  // {
  //   src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/58281/tex2.jpg',
  //   left: '840%',
  //   title: 'Spaceman',
  // },
];

const TITLES = SLIDES.map((s) => s.title).concat(SLIDES[0].title);
const PROXY_TITLE = SLIDES.reduce(
  (longest, slide) =>
    slide.title.length > longest.length ? slide.title : longest,
  SLIDES[0].title
);

// ─── Shaders ───────────────────────────────────────────────────────────────

const backgroundCoverUv = `
vec2 backgroundCoverUv(vec2 screenSize, vec2 imageSize, vec2 uv) {
  float screenRatio = screenSize.x / screenSize.y;
  float imageRatio = imageSize.x / imageSize.y;

  vec2 newSize = screenRatio < imageRatio
      ? vec2(imageSize.x * screenSize.y / imageSize.y, screenSize.y)
      : vec2(screenSize.x, imageSize.y * screenSize.x / imageSize.x);

  vec2 newOffset = (screenRatio < imageRatio
      ? vec2((newSize.x - screenSize.x) / 2.0, 0.0)
      : vec2(0.0, (newSize.y - screenSize.y) / 2.0)) / newSize;

  return uv * screenSize / newSize + newOffset;
}
`;

const vertexShader = `
precision mediump float;
uniform float uVelo;
varying vec2 vUv;
#define M_PI 3.1415926535897932384626433832795
void main(){
  vec3 pos = position;
  pos.x = pos.x + ((sin(uv.y * M_PI) * uVelo) * 0.125);
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(pos,1.);
}
`;

const fragmentShader = `
precision mediump float;
${backgroundCoverUv}
uniform sampler2D uTexture;
uniform vec2 uMeshSize;
uniform vec2 uImageSize;
uniform float uVelo;
uniform float uScale;
varying vec2 vUv;
void main() {
  vec2 uv = vUv;
  vec2 texCenter = vec2(0.5);
  vec2 texUv = backgroundCoverUv(uMeshSize, uImageSize, uv);
  vec2 texScale = (texUv - texCenter) * uScale + texCenter;
  vec4 texColor = texture2D(uTexture, texScale);
  texScale.x += 0.15 * uVelo;
  if(uv.x < 1.) texColor.g = texture2D(uTexture, texScale).g;
  texScale.x += 0.10 * uVelo;
  if(uv.x < 1.) texColor.b = texture2D(uTexture, texScale).b;
  gl_FragColor = texColor;
}
`;

// ─── Component ─────────────────────────────────────────────────────────────

export function PortfolioSlider() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { navigateTo } = usePageTransition();
  // Keep a stable ref so the effect closure always sees the latest navigateTo
  const navigateToRef = useRef(navigateTo);
  navigateToRef.current = navigateTo;

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    // Device detection
    const isDevice = Boolean(
      navigator.userAgent.match(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i
      )
    );

    const store = {
      ww: section.clientWidth,
      wh: section.clientHeight,
      isDevice,
    };

    // ── Three.js GL setup ──────────────────────────────────────────────────

    const scene = new THREE.Scene();
    const camera = new THREE.OrthographicCamera(
      store.ww / -2,
      store.ww / 2,
      store.wh / 2,
      store.wh / -2,
      1,
      10
    );
    camera.lookAt(scene.position);
    camera.position.z = 1;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(store.ww, store.wh);
    renderer.setClearColor(0xffffff, 0);

    const domGl = renderer.domElement;
    domGl.classList.add('dom-gl');
    section.appendChild(domGl);

    const gl = { scene, camera, renderer };

    const loader = new THREE.TextureLoader();
    loader.crossOrigin = 'anonymous';

    // Shared geometry & material
    const planeGeo = new THREE.PlaneGeometry(1, 1, 32, 32);
    const planeMat = new THREE.ShaderMaterial({
      transparent: true,
      fragmentShader,
      vertexShader,
    });

    // ── GlObject ───────────────────────────────────────────────────────────

    class GlObject extends THREE.Object3D {
      el!: Element;
      rect!: DOMRect;
      pos!: { x: number; y: number };

      init(el: Element) {
        this.el = el;
        this.resize();
      }

      resize() {
        this.rect = this.el.getBoundingClientRect();
        const sectionRect = section!.getBoundingClientRect();
        const { left, top, width, height } = this.rect;

        this.pos = {
          x: left - sectionRect.left + width / 2 - store.ww / 2,
          y: -(top - sectionRect.top + height / 2 - store.wh / 2),
        };

        this.position.y = this.pos.y;
        this.position.x = this.pos.x;
        this.updateX();
      }

      updateX(current?: number) {
        if (current !== undefined) {
          this.position.x = current + this.pos.x;
        }
      }
    }

    // ── Plane ──────────────────────────────────────────────────────────────

    class Plane extends GlObject {
      geo!: THREE.PlaneGeometry;
      mat!: THREE.ShaderMaterial;
      mesh!: THREE.Mesh;
      img!: HTMLImageElement | null;
      texture!: THREE.Texture;

      init(el: Element) {
        super.init(el);

        this.geo = planeGeo;
        this.mat = planeMat.clone();

        this.mat.uniforms = {
          uTime: { value: 0 },
          uTexture: { value: 0 },
          uMeshSize: {
            value: new THREE.Vector2(this.rect.width, this.rect.height),
          },
          uImageSize: { value: new THREE.Vector2(0, 0) },
          uScale: { value: 0.75 },
          uVelo: { value: 0 },
        };

        this.img = (el as HTMLElement).querySelector('img');

        if (this.img) {
          this.texture = loader.load(this.img.src, (texture) => {
            texture.minFilter = THREE.LinearFilter;
            texture.generateMipmaps = false;
            this.mat.uniforms.uTexture.value = texture;
            this.mat.uniforms.uImageSize.value = [
              (this.img as HTMLImageElement).naturalWidth,
              (this.img as HTMLImageElement).naturalHeight,
            ];
          });
        }

        this.mesh = new THREE.Mesh(this.geo, this.mat);
        this.mesh.scale.set(this.rect.width, this.rect.height, 1);
        this.add(this.mesh);
        gl.scene.add(this);
      }
    }


    // ── Slider ─────────────────────────────────────────────────────────────

    const sliderEl = section.querySelector('.js-slider') as HTMLElement;

    const state = {
      target: 0,
      current: 0,
      currentRounded: 0,
      y: 0,
      on: { x: 0, y: 0 },
      off: 0,
      progress: 0,
      diff: 0,
      max: 0,
      min: 0,
      snap: { points: [] as number[] },
      flags: { dragging: false, resize: false },
    };

    const opts = { speed: 2, threshold: 50, ease: 0.075 };

    const ui = {
      items: section.querySelectorAll<HTMLElement>('.js-slide'),
      titles: section.querySelectorAll<HTMLElement>('.js-title'),
      lines: section.querySelectorAll<HTMLElement>('.js-progress-line'),
    };

    const items: {
      el: HTMLElement;
      plane: Plane;
      left: number;
      right: number;
      width: number;
      min: number;
      max: number;
      tl: gsap.core.Timeline;
      out: boolean;
      url: string;
    }[] = [];

    // Build global GSAP timeline
    const { ww } = store;

    const { width: wrapWidth, left: wrapDiff } =
      sliderEl.getBoundingClientRect();
    const sectionRect = section.getBoundingClientRect();
    const wrapLeft = wrapDiff - sectionRect.left;

    const lastItem = ui.items[ui.items.length - 1];
    state.max = -(
      lastItem.getBoundingClientRect().right -
      sectionRect.left -
      wrapWidth -
      wrapLeft
    );
    state.min = 0;

    const tl = gsap.timeline({
      paused: true,
      defaults: { duration: 1, ease: 'linear' },
    });

    const progressLine2 = section.querySelector('.js-progress-line-2');
    const titlesEl = section.querySelector('.js-titles');
    const progressLine = section.querySelector('.js-progress-line');

    tl.fromTo(
      progressLine2,
      { scaleX: 1 },
      { scaleX: 0, duration: 0.5, ease: 'power3' },
      0
    )
      .fromTo(
        titlesEl,
        { yPercent: 0 },
        { yPercent: -(100 - 100 / ui.titles.length) },
        0
      )
      .fromTo(progressLine, { scaleX: 0 }, { scaleX: 1 }, 0);

    // Derive wrap thresholds from actual DOM layout so the cycle length is
    // correct regardless of slide width, gap, or padding (portrait vs landscape).
    const slideGap =
      ui.items.length > 1
        ? ui.items[1].getBoundingClientRect().left -
          ui.items[0].getBoundingClientRect().right
        : wrapWidth * 0.2; // fallback: original 20% assumption
    const wrapT1 = wrapWidth + wrapLeft;       // slideWidth + leftPadding
    const wrapT2 = wrapLeft - slideGap;        // leftPadding − gap

    // Cache items
    for (let i = 0; i < ui.items.length; i++) {
      const el = ui.items[i];
      const { left, right, width } = el.getBoundingClientRect();
      const adjustedLeft = left - sectionRect.left;
      const adjustedRight = right - sectionRect.left;

      const plane = new Plane();
      plane.init(el);

      const itemTl = gsap.timeline({ paused: true }).fromTo(
        plane.mat.uniforms.uScale,
        { value: 0.65 },
        { value: 1, duration: 1, ease: 'linear' }
      );

      items.push({
        el,
        plane,
        left: adjustedLeft,
        right: adjustedRight,
        width,
        min:
          adjustedLeft < ww
            ? wrapT1
            : -wrapT2,
        max:
          adjustedLeft > ww
            ? state.max - wrapT1
            : state.max + wrapT2,
        tl: itemTl,
        out: false,
        url: SLIDES[i]?.url ?? '',
      });
    }


    // ── Render loop ────────────────────────────────────────────────────────

    function calc() {
      state.current += (state.target - state.current) * opts.ease;
      state.currentRounded = Math.round(state.current * 100) / 100;
      state.diff = (state.target - state.current) * 0.0005;
      state.progress = gsap.utils.wrap(
        0,
        1,
        state.currentRounded / state.max
      );
      tl.progress(state.progress);
    }

    function isVisible(item: (typeof items)[0]) {
      const { currentRounded } = state;
      const translate = gsap.utils.wrap(item.min, item.max, currentRounded);
      const threshold = opts.threshold;
      const start = item.left + translate;
      const end = item.right + translate;
      const vis =
        start < threshold + store.ww && end > -threshold;
      const progress = gsap.utils.clamp(
        0,
        1,
        1 - (translate + item.left + item.width) / (store.ww + item.width)
      );
      return { translate, isVisible: vis, progress };
    }

    function transformItems() {
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const { translate, isVisible: vis, progress } = isVisible(item);

        item.plane.updateX(translate);
        item.plane.mat.uniforms.uVelo.value = state.diff;

        if (!item.out && item.tl) {
          item.tl.progress(progress);
        }

        if (vis || state.flags.resize) {
          item.out = false;
        } else if (!item.out) {
          item.out = true;
        }
      }
    }

    function tick() {
      calc();
      transformItems();
      gl.renderer.render(gl.scene, gl.camera);
    }

    gsap.ticker.add(tick);


    // ── Pointer events ─────────────────────────────────────────────────────

    const events = {
      move: isDevice ? 'touchmove' : 'mousemove',
      up: isDevice ? 'touchend' : 'mouseup',
      down: isDevice ? 'touchstart' : 'mousedown',
    };

    function getPos(e: MouseEvent | TouchEvent) {
      const te = e as TouchEvent;
      const x = te.changedTouches
        ? te.changedTouches[0].clientX
        : (e as MouseEvent).clientX;
      const y = te.changedTouches
        ? te.changedTouches[0].clientY
        : (e as MouseEvent).clientY;
      return { x, y };
    }

    // Track drag distance to distinguish a click from a drag
    let dragDistance = 0;
    let startedInSection = false;
    let activeSlideUrl = '';

    function onDown(e: Event) {
      const { x, y } = getPos(e as MouseEvent | TouchEvent);
      state.flags.dragging = true;
      state.on.x = x;
      state.on.y = y;
      dragDistance = 0;
      startedInSection = true;

      const clickedSlide = (e.target as HTMLElement).closest('.js-slide');
      if (clickedSlide) {
        const idx = Array.from(ui.items).indexOf(clickedSlide as HTMLElement);
        activeSlideUrl = idx >= 0 ? (items[idx]?.url ?? '') : '';
      } else {
        activeSlideUrl = '';
      }
    }

    function onUp(e: Event) {
      const { x, y } = getPos(e as MouseEvent | TouchEvent);
      dragDistance = Math.abs(x - state.on.x);
      state.flags.dragging = false;
      state.off = state.target;

      if (startedInSection && dragDistance < 5 && activeSlideUrl) {
        // Pass the exact pointer position so the transition grows from there
        navigateToRef.current(activeSlideUrl, state.on.x, state.on.y);
      }
      startedInSection = false;
    }

    function onMove(e: Event) {
      const { x, y } = getPos(e as MouseEvent | TouchEvent);
      if (!state.flags.dragging) return;
      const moveX = x - state.on.x;
      const moveY = y - state.on.y;
      if (Math.abs(moveX) > Math.abs(moveY)) {
        (e as MouseEvent).preventDefault?.();
        (e as MouseEvent).stopPropagation?.();
      }
      state.target = state.off + moveX * opts.speed;
    }

    section.addEventListener(events.down, onDown as EventListener);
    window.addEventListener(events.move, onMove as EventListener, {
      passive: false,
    });
    window.addEventListener(events.up, onUp as EventListener);

    // ── Cleanup ────────────────────────────────────────────────────────────

    return () => {
      gsap.ticker.remove(tick);
      section.removeEventListener(events.down, onDown as EventListener);
      window.removeEventListener(events.move, onMove as EventListener);
      window.removeEventListener(events.up, onUp as EventListener);

      // Dispose Three.js objects
      items.forEach((item) => {
        gl.scene.remove(item.plane);
        item.plane.mat.dispose();
      });
      planeGeo.dispose();
      gl.renderer.dispose();
      if (domGl.parentNode) domGl.parentNode.removeChild(domGl);
    };

  }, []);

  return (
    <section className="portfolio-slider-section" ref={sectionRef}>

      {/* GL canvas will be injected by useEffect */}

      <div className="slider js-drag-area">
        <div className="slider__inner js-slider">
          {SLIDES.map((slide, i) => (
            <div
              key={i}
              className="slide js-slide"
              style={i > 0 ? { left: slide.left } : undefined}
            >
              <div className="slide__inner js-slide__inner">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="js-slide__img"
                  src={slide.src}
                  alt=""
                  crossOrigin="anonymous"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="titles">
        <div className="titles__title titles__title--proxy text-nowrap">----------------------</div>
        <div className="titles__list js-titles">
          {TITLES.map((title, i) => (
            <div key={i} className="titles__title js-title">{title}</div>
          ))}
        </div>
      </div>

      <div className="progress">
        <div className="progress__line js-progress-line" />
        <div className="progress__line js-progress-line-2" />
      </div>

    </section>
  );
}
