import type { CSSProperties } from 'react';

import { cn } from '../../lib/cn';

interface BorderBeamProps {
  /** Seconds for one full lap of the border. */
  duration?: number;
  /** Offsets the start position, so sibling cards aren't in lockstep. */
  delay?: number;
  colorFrom?: string;
  colorTo?: string;
  className?: string;
}

/**
 * A light that travels around the edge of its parent.
 *
 * The parent must be `relative` and carry the border radius — this element
 * inherits it. Styling lives in `.border-beam` (index.css); everything tunable
 * is passed through as a CSS custom property.
 */
export default function BorderBeam({
  duration = 7,
  delay = 0,
  colorFrom,
  colorTo,
  className,
}: BorderBeamProps) {
  return (
    <span
      aria-hidden
      className={cn('border-beam', className)}
      style={
        {
          '--beam-duration': `${duration}s`,
          // Negative delay starts mid-cycle instead of pausing first.
          '--beam-delay': `${-delay}s`,
          ...(colorFrom ? { '--beam-from': colorFrom } : {}),
          ...(colorTo ? { '--beam-to': colorTo } : {}),
        } as CSSProperties
      }
    />
  );
}
