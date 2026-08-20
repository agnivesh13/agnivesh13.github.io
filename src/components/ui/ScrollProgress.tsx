import { motion, useScroll, useSpring } from 'framer-motion';

/**
 * Thin gradient bar across the top of the viewport tracking read progress.
 * Sits above the navbar (z-[60] vs the navbar's z-50).
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Spring smooths the jitter of raw scroll, especially on trackpads.
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent-400 via-accent-300 to-plasma-400"
    />
  );
}
