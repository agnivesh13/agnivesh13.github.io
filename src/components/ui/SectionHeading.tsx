import type { ReactNode } from 'react';

import Reveal from './Reveal';
import { cn } from '../../lib/cn';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  description?: string;
  className?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  className,
  align = 'left',
}: SectionHeadingProps) {
  const centered = align === 'center';

  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}>
      <Reveal>
        <span className="eyebrow">
          <span className="h-1 w-1 rounded-full bg-accent-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]" />
          {eyebrow}
        </span>
      </Reveal>

      <Reveal delay={0.06}>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
          {title}
        </h2>
      </Reveal>

      {description && (
        <Reveal delay={0.12}>
          <p className="mt-4 text-base leading-relaxed text-slate-400">{description}</p>
        </Reveal>
      )}
    </div>
  );
}
