import type { ReactNode } from 'react';

import { cn } from '../../lib/cn';

interface AuroraTextProps {
  children: ReactNode;
  className?: string;
}

/**
 * Gradient text whose colours drift slowly across the glyphs.
 *
 * Uses an oversized `background-size` so `background-position` has room to
 * travel — animating the gradient stops directly isn't interpolatable.
 */
export default function AuroraText({ children, className }: AuroraTextProps) {
  return (
    <span
      className={cn(
        'animate-aurora bg-gradient-to-r from-accent-300 via-plasma-400 via-40% to-accent-200',
        'bg-[length:200%_auto] bg-clip-text text-transparent',
        className,
      )}
    >
      {children}
    </span>
  );
}
