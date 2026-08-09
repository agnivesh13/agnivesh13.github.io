import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  /** Seconds for one full loop. Larger is slower. */
  duration?: number;
  className?: string;
}

/**
 * Seamless horizontal scroller. The track holds two identical copies of the
 * content and translates by exactly -50%, so the loop has no visible seam.
 */
export default function Marquee({
  children,
  reverse = false,
  duration = 40,
  className,
}: MarqueeProps) {
  return (
    <div className={cn('pause-on-hover group relative overflow-hidden', className)}>
      <div
        data-marquee
        className={cn('flex w-max', reverse ? 'animate-marquee-reverse' : 'animate-marquee')}
        style={{ '--marquee-duration': `${duration}s` } as React.CSSProperties}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
