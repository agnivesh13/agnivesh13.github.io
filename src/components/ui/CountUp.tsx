import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface CountUpProps {
  value: number;
  duration?: number;
  className?: string;
  suffix?: string;
}

/**
 * Animates an integer from 0 to `value` when it scrolls into view.
 * Writes to the DOM node directly so each frame does not re-render React.
 */
export default function CountUp({ value, duration = 1.4, className, suffix = '' }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView) return;

    if (prefersReducedMotion) {
      node.textContent = `${value}${suffix}`;
      return;
    }

    const controls = animate(0, value, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = `${Math.round(latest)}${suffix}`;
      },
    });

    return () => controls.stop();
  }, [inView, value, duration, suffix, prefersReducedMotion]);

  // Rendered text is replaced by the animation; this is the pre-animation state.
  return (
    <span ref={ref} className={className}>
      {prefersReducedMotion ? `${value}${suffix}` : `0${suffix}`}
    </span>
  );
}
