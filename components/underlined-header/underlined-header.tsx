'use client';

// Section header that fades up into place and draws its rule when it is
// scrolled to. The heading content is arbitrary markup, so it comes in as
// children; the animation is entirely in the CSS and this only flips the flag
// that starts it.

import { useEffect, useLayoutEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';
import './underlined-header.css';

interface UnderlinedHeaderProps {
    children: React.ReactNode;
    /** Extra classes on the wrapper, e.g. spacing from the surrounding page. */
    className?: string;
    /** Heading level. The visual size is fixed by the CSS either way. */
    as?: 'h1' | 'h2' | 'h3' | 'h4';
    /** How much of the header must be inside the trigger box before it animates. */
    threshold?: number;
    /** Shrinks the viewport the header is tested against — see the default. */
    rootMargin?: string;
}

export default function UnderlinedHeader({
    children,
    className,
    as: Heading = 'h2',
    threshold = 0.4,
    // Pulls the bottom edge of the trigger box a quarter of a screen up, so the
    // header animates once it is properly on screen rather than the instant it
    // clips the fold. Without this the whole thing plays out down in the corner
    // of the eye and is over before the header is anywhere near read.
    rootMargin = '0px 0px -25% 0px',
}: UnderlinedHeaderProps) {
    const elementRef = useRef<HTMLDivElement>(null);
    // The hidden state lives in the CSS, so the header is never painted in its
    // final position and then animated away from it — which is what a
    // shown-first render would do once hydration flipped the flag.
    const [shown, setShown] = useState(false);

    useLayoutEffect(() => {
        // Reduced motion gets the finished header, before the first paint and
        // without waiting to be scrolled to.
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setShown(true);
    }, []);

    useEffect(() => {
        const element = elementRef.current;
        if (!element || shown) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (!entry.isIntersecting) return;

                // One-way: the header stays put once it has arrived, so
                // scrolling back up doesn't replay it.
                observer.disconnect();
                setShown(true);
            },
            { threshold, rootMargin }
        );

        observer.observe(element);

        return () => observer.disconnect();
    }, [rootMargin, shown, threshold]);

    return (
        <div
            ref={elementRef}
            data-shown={shown}
            className={cn('underlined-header', className)}
        >
            <Heading className="underlined-header-title">{children}</Heading>
        </div>
    );
}
