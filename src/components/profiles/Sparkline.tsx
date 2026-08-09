import { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

interface SparklineProps {
  data: number[];
  color: string;
  className?: string;
}

const W = 100;
const H = 30;

/**
 * Tiny rating curve. Drawn in a 100×30 user-space box and stretched with
 * `preserveAspectRatio="none"`, so it fills whatever width the card gives it.
 */
export default function Sparkline({ data, color, className }: SparklineProps) {
  const id = useId();
  const prefersReducedMotion = useReducedMotion();

  if (data.length < 2) return null;

  const min = Math.min(...data);
  const max = Math.max(...data);
  // Guard against a flat series producing a divide-by-zero.
  const span = max - min || 1;

  const points = data.map((value, i) => {
    const x = (i / (data.length - 1)) * W;
    // Inset by 2px top and bottom so the stroke is never clipped.
    const y = H - 2 - ((value - min) / span) * (H - 4);
    return [x, y] as const;
  });

  const line = points.map(([x, y], i) => `${i === 0 ? 'M' : 'L'}${x.toFixed(2)},${y.toFixed(2)}`).join(' ');
  const area = `${line} L${W},${H} L0,${H} Z`;
  const [lastX, lastY] = points[points.length - 1];

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      preserveAspectRatio="none"
      className={className}
      aria-hidden
      role="presentation"
    >
      <defs>
        <linearGradient id={`fill-${id}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d={area} fill={`url(#fill-${id})`} />

      <motion.path
        d={line}
        fill="none"
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
        initial={prefersReducedMotion ? false : { pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4, ease: 'easeOut' }}
      />

      {/* Current-value marker */}
      <circle cx={lastX} cy={lastY} r={2} fill={color} vectorEffect="non-scaling-stroke" />
    </svg>
  );
}
