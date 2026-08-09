import { useEffect, useMemo, useState } from 'react';
import Particles, { ParticlesProvider } from '@tsparticles/react';
import type { Engine, ISourceOptions } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion';

/**
 * @tsparticles/react v4 throws if the `init` callback identity changes across
 * the app lifecycle, so it lives at module scope rather than inside the
 * component.
 */
const initEngine = async (engine: Engine): Promise<void> => {
  await loadSlim(engine);
};

/**
 * Scales the particle count with viewport *area* rather than width, so a wide
 * monitor gets a denser field instead of the same handful of dots spread thin.
 * Clamped at both ends: enough to read as a network on a phone, few enough to
 * stay at 60fps on a large display.
 */
const AREA_PER_PARTICLE = 11000;
const MIN_PARTICLES = 45;
const MAX_PARTICLES = 190;

function useParticleCount(): number {
  const [count, setCount] = useState(110);

  useEffect(() => {
    const update = () => {
      const area = window.innerWidth * window.innerHeight;
      const scaled = Math.round(area / AREA_PER_PARTICLE);
      setCount(Math.min(MAX_PARTICLES, Math.max(MIN_PARTICLES, scaled)));
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return count;
}

export default function ParticleBackground() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const count = useParticleCount();

  const options = useMemo<ISourceOptions>(
    () => ({
      // The canvas fills its parent instead of the viewport.
      fullScreen: { enable: false },
      fpsLimit: 60,
      detectRetina: true,
      background: { color: { value: 'transparent' } },
      interactivity: {
        // Hero content sits above the canvas, so pointer events never reach
        // it — listening on the window keeps the cursor interaction alive.
        detectsOn: 'window',
        events: {
          onHover: { enable: true, mode: 'grab' },
          onClick: { enable: true, mode: 'push' },
        },
        modes: {
          grab: {
            distance: 170,
            links: { opacity: 0.55, color: '#22d3ee' },
          },
          push: { quantity: 3 },
        },
      },
      particles: {
        number: { value: count, density: { enable: false, width: 1920, height: 1080 } },
        color: { value: ['#22d3ee', '#67e8f9', '#a78bfa', '#818cf8'] },
        shape: { type: 'circle' },
        opacity: {
          value: { min: 0.15, max: 0.55 },
          animation: { enable: true, speed: 0.5, sync: false, startValue: 'random' },
        },
        size: { value: { min: 0.8, max: 2.4 } },
        links: {
          enable: true,
          distance: 145,
          color: '#3f5878',
          opacity: 0.3,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.55,
          direction: 'none',
          random: true,
          straight: false,
          outModes: { default: 'bounce' },
        },
      },
    }),
    [count],
  );

  // No animated canvas at all when the OS asks for reduced motion.
  if (prefersReducedMotion) {
    return (
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:44px_44px] opacity-40"
      />
    );
  }

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      <ParticlesProvider init={initEngine}>
        <Particles id="hero-particles" options={options} className="h-full w-full" />
      </ParticlesProvider>
    </div>
  );
}
