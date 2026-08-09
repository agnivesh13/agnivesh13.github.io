import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

import { cn } from '../../lib/cn';

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger offset in seconds, for revealing a row of siblings in sequence. */
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  as?: 'div' | 'section' | 'li' | 'article' | 'span';
}

const OFFSET = 28;

const offsetFor = (direction: RevealProps['direction']) => {
  switch (direction) {
    case 'down':
      return { y: -OFFSET, x: 0 };
    case 'left':
      return { x: OFFSET, y: 0 };
    case 'right':
      return { x: -OFFSET, y: 0 };
    case 'none':
      return { x: 0, y: 0 };
    default:
      return { y: OFFSET, x: 0 };
  }
};

/** Fades + slides its children in the first time they scroll into view. */
export default function Reveal({
  children,
  className,
  delay = 0,
  direction = 'up',
  as = 'div',
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const Component = motion[as];
  const offset = offsetFor(direction);

  return (
    <Component
      className={cn(className)}
      initial={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{
        duration: prefersReducedMotion ? 0.2 : 0.6,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}
