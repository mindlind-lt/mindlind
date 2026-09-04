// Pixel-art down-arrow: an 8-bit sprite blown up until each of its "pixels" is
// a solid block tens of screen pixels across. Purely decorative — it points at
// the section below, it is not a link to it.
//
// Position and size come from the CSS, which pins it to its nearest positioned
// ancestor — give that ancestor `position: relative`.

import type { CSSProperties } from 'react';

import './scroll-arrow.css';

// The sprite, written the way it renders. Every `#` becomes one block; the grid
// is deliberately tiny, because the whole look depends on there being few
// enough pixels that each one can be huge.
//
// The head's diagonals step one across for every one down, which is what puts
// them at a true 45 degrees and the tip at a right angle.
const SPRITE = [
  '...#...',
  '...#...',
  '...#...',
  '#..#..#',
  '.#.#.#.',
  '..###..',
  '...#...',
];

const COLS = SPRITE[0].length;
const ROWS = SPRITE.length;

export default function ScrollArrow({ className = '' }: { className?: string }) {
  return (
    <div
      className={`scroll-arrow ${className}`.trim()}
      aria-hidden="true"
      // The CSS sizes the sprite by block, not by overall dimension, so editing
      // SPRITE above resizes the arrow correctly without touching the CSS.
      style={{ '--scroll-arrow-cols': COLS, '--scroll-arrow-rows': ROWS } as CSSProperties}
    >
      <svg viewBox={`0 0 ${COLS} ${ROWS}`} role="presentation" focusable="false">
        {SPRITE.flatMap((row, y) =>
          [...row].map((cell, x) =>
            cell === '#' ? <rect key={`${x}-${y}`} x={x} y={y} width="1" height="1" /> : null,
          ),
        )}
      </svg>
    </div>
  );
}
