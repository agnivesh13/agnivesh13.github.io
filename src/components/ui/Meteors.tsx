import { useMemo } from 'react';

import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';

interface MeteorsProps {
  count?: number;
  className?: string;
}

/**
 * Occasional diagonal streaks falling across the background.
 *
 * Positions and timings are randomised once per mount (not per render), so the
 * field doesn't reshuffle when the parent re-renders.
 */
export default function Meteors({ count = 12 }: MeteorsProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  const meteors = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        // Spread across a wider range than the viewport: the 215° travel angle
        // carries them down-left, so starts need to begin off to the right.
        left: `${Math.random() * 140 - 20}%`,
        top: `${Math.random() * 60 - 20}%`,
        delay: `${Math.random() * 8}s`,
        duration: `${4 + Math.random() * 4}s`,
      })),
    [count],
  );

  if (prefersReducedMotion) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {meteors.map((m) => (
        <span
          key={m.id}
          className="absolute h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-accent-200 shadow-[0_0_0_1px_rgba(165,243,252,0.12)]
                     before:absolute before:top-1/2 before:h-px before:w-[60px] before:-translate-y-1/2
                     before:bg-gradient-to-r before:from-accent-300 before:to-transparent before:content-['']"
          style={{
            left: m.left,
            top: m.top,
            animationDelay: m.delay,
            ['--meteor-duration' as string]: m.duration,
          }}
        />
      ))}
    </div>
  );
}
