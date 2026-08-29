'use client';

// The services hero, pinned to the viewport while the page scrolls past it.
//
// The read is a camera dolly: the horizon rushes at the viewer, the title flies
// past the lens, and once the band has filled the screen it dissolves. Scroll
// only supplies the position — the drawing is done with transforms and opacity,
// so the whole thing lives on the compositor and the shader underneath never
// re-renders for it.

import { useEffect, useRef } from 'react';

import RainbowHorizon from '@/components/rainbow-horizon/rainbow-horizon';
import './services-hero.css';

// How large the horizon grows by the end of the track. Growth is exponential
// rather than linear because that is what approaching something at a constant
// speed actually looks like — a linear ramp reads as the band inflating.
const ZOOM = 3.4;

// Window, in scroll progress, over which each layer leaves. The title goes
// first — it is the near object, so it passes the camera first — and the
// horizon picks up exactly where it left off.
//
// The horizon's end is set by the overlap in the CSS, not by taste: the section
// below starts rising at 0.30 and covers half the screen by 0.80, so the light
// has to be gone by roughly then. Fading any later means dissolving over
// content that is already on screen and readable.
const TITLE_FADE = [0.02, 0.34] as const;
const FIELD_FADE = [0.34, 0.85] as const;

// How far the title is thrown toward the viewer before it is gone, and how much
// it smears on the way out.
const TITLE_ZOOM = 0.85;
const TITLE_BLUR = 14;

// Time constant of the follow, in ms. This used to carry all of the smoothing
// — wheel and trackpad scrolls arrive in coarse jumps, and easing toward the
// scroll position instead of snapping to it is the difference between a
// slideshow and a camera move. <SmoothScroll /> now eases the page position
// itself, so the jumps are gone before they get here and the old 110ms only
// stacks a second lag on top of the first, leaving the horizon visibly trailing
// the page. What is left absorbs the frame of latency between Lenis writing the
// scroll position and this effect reading it back.
const TAU_FINE = 40;

// A touch scroll is already pixel-continuous and the finger is on the content,
// so the same damping stops reading as smoothing and starts reading as lag —
// worst on a fast flick back up, where the horizon keeps moving after the
// gesture has stopped. Just enough here to absorb event granularity.
const TAU_COARSE = 30;

const clamp = (v: number, lo: number, hi: number) => Math.min(Math.max(v, lo), hi);

/** 0 below `from`, 1 above `to`, eased in between. */
function ramp(v: number, from: number, to: number) {
    const t = clamp((v - from) / (to - from), 0, 1);
    return t * t * (3 - 2 * t);
}

export default function ServicesHero({ title }: { title: string }) {
    const trackRef = useRef<HTMLElement>(null);
    const paneRef = useRef<HTMLDivElement>(null);
    const fieldRef = useRef<HTMLDivElement>(null);
    const zoomRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const track = trackRef.current;
        const pane = paneRef.current;
        const field = fieldRef.current;
        const zoom = zoomRef.current;
        const heading = titleRef.current;
        if (!track || !pane || !field || !zoom || !heading) return;

        // Reduced motion gets the hero as a still image: the track collapses to
        // one screen in CSS, so there is nothing to drive.
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const tau = window.matchMedia('(pointer: coarse)').matches
            ? TAU_COARSE
            : TAU_FINE;

        // `target` is where the scroll says we are; `eased` is where the camera
        // has got to. The gap between them is the smoothing.
        let target = 0;
        let eased = 0;
        let raf = 0;
        let lastTick = 0;
        let inView = false;

        const progress = () => {
            // Distance the pane is pinned for. Measuring the pane rather than
            // using innerHeight keeps this exact on mobile, where the visual
            // viewport and `100svh` disagree while the URL bar moves.
            const span = track.offsetHeight - pane.offsetHeight;
            if (span <= 0) return 0;
            return clamp(-track.getBoundingClientRect().top / span, 0, 1);
        };

        const paint = () => {
            const p = eased;

            zoom.style.transform = `scale(${Math.pow(ZOOM, p).toFixed(4)})`;
            field.style.opacity = (1 - ramp(p, FIELD_FADE[0], FIELD_FADE[1])).toFixed(3);

            const t = ramp(p, TITLE_FADE[0], TITLE_FADE[1]);
            heading.style.opacity = (1 - t).toFixed(3);
            heading.style.transform = `scale(${(1 + TITLE_ZOOM * t).toFixed(4)})`;
            // Skipped entirely once the title is gone — a filter on a live
            // layer is the one expensive thing here, and an invisible blur is
            // pure waste.
            heading.style.filter = t < 1 ? `blur(${(TITLE_BLUR * t).toFixed(2)}px)` : 'none';
        };

        const tick = (now: number) => {
            const dt = lastTick ? Math.min(now - lastTick, 100) : 16;
            lastTick = now;

            // Frame-rate independent damping: the same easing at 60 and 120Hz.
            eased += (target - eased) * (1 - Math.exp(-dt / tau));

            // Settled, and no new scroll to chase: stop until something moves.
            if (Math.abs(target - eased) < 0.0005) {
                eased = target;
                paint();
                raf = 0;
                lastTick = 0;
                return;
            }

            paint();
            raf = requestAnimationFrame(tick);
        };

        const schedule = () => {
            if (!raf) raf = requestAnimationFrame(tick);
        };

        const onScroll = () => {
            if (!inView) return;
            target = progress();
            schedule();
        };

        // Pinned means permanently intersecting, so this really only gates the
        // before/after states — where the loop would otherwise idle for nothing.
        const observer = new IntersectionObserver(
            ([entry]) => {
                inView = entry.isIntersecting;
                const hint = inView ? 'transform, opacity' : 'auto';
                zoom.style.willChange = hint;
                field.style.willChange = hint;
                heading.style.willChange = inView ? 'transform, opacity, filter' : 'auto';
                if (!inView) return;
                // Nothing was tracked while the hero was away, so `eased` is
                // wherever it was left. Snap rather than ease, or scrolling
                // back up fast shows the camera catching up to itself.
                target = progress();
                eased = target;
                paint();
            },
            { rootMargin: '10%' }
        );
        observer.observe(track);

        // A layout change moves the track without a scroll event.
        const resizeObserver = new ResizeObserver(onScroll);
        resizeObserver.observe(track);

        // Land on the right frame when the page opens mid-hero (a reload, or a
        // restored scroll position) instead of animating in from the top.
        target = progress();
        eased = target;
        paint();

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
            observer.disconnect();
            resizeObserver.disconnect();
            if (raf) cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <section ref={trackRef} className="services-hero">
            <div ref={paneRef} className="services-hero__pane">
                <div ref={fieldRef} className="services-hero__field">
                    <div ref={zoomRef} className="services-hero__zoom">
                        <RainbowHorizon blend={0.3} speed={1} />
                    </div>
                    <div className="services-hero-gradient" />
                </div>

                <div ref={titleRef} className="services-hero__title px-5">
                    <h1 className="text-[clamp(2.25rem,11vw,6rem)] font-mono font-bold tracking-tight uppercase">
                        {title}
                    </h1>
                </div>
            </div>
        </section>
    );
}
