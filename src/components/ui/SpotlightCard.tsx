import { useCallback, useRef, type ReactNode } from 'react';

import { cn } from '../../lib/cn';

interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  /** Colour of the cursor-tracking glow. */
  glow?: string;
}

/**
 * Glass panel with a soft radial highlight that follows the cursor.
 * The position is written to CSS custom properties so tracking the pointer
 * never triggers a React re-render.
 */
export default function SpotlightCard({
  children,
  className,
  glow = 'rgba(34,211,238,0.16)',
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--spot-x', `${event.clientX - rect.left}px`);
    el.style.setProperty('--spot-y', `${event.clientY - rect.top}px`);
  }, []);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      style={{ '--spot-color': glow } as React.CSSProperties}
      className={cn(
        'group/spot glass overflow-hidden transition-colors duration-300 hover:border-white/20',
        className,
      )}
    >
      {/* Cursor spotlight */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/spot:opacity-100"
        style={{
          background:
            'radial-gradient(340px circle at var(--spot-x, 50%) var(--spot-y, 50%), var(--spot-color), transparent 70%)',
        }}
      />
      {/* Top hairline that catches the light */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <div className="relative">{children}</div>
    </div>
  );
}
