import { ArrowUpRight, FileText, GitFork, Github } from 'lucide-react';

import BorderBeam from './ui/BorderBeam';
import SpotlightCard from './ui/SpotlightCard';
import type { Project } from '../data/site';
import { cn } from '../lib/cn';

const CATEGORY_STYLES: Record<Project['category'], { label: string; className: string }> = {
  quant: {
    label: 'Quant & Trading',
    className: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
  },
  ml: { label: 'AI / ML', className: 'border-accent-400/30 bg-accent-400/10 text-accent-300' },
  infra: {
    label: 'Infra',
    className: 'border-plasma-400/30 bg-plasma-400/10 text-plasma-300',
  },
  web: { label: 'Web', className: 'border-emerald-400/25 bg-emerald-400/10 text-emerald-300' },
};

export default function ProjectCard({ project }: { project: Project }) {
  const category = CATEGORY_STYLES[project.category];

  return (
    <SpotlightCard className="flex h-full flex-col p-5 sm:p-6">
      {/* Flagship projects get the traveling edge light. */}
      {project.featured && <BorderBeam duration={10} />}

      {/* Header: category + status, then the outbound links */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              'rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider',
              category.className,
            )}
          >
            {category.label}
          </span>

          {project.status && (
            <span className="rounded-full border border-sky-400/25 bg-sky-400/10 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-sky-300">
              {project.status}
            </span>
          )}

          {/* Makes clear this is someone else's project that I work in. */}
          {project.fork && (
            <span className="inline-flex items-center gap-1 rounded-full border border-white/12 bg-white/5 px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider text-slate-400">
              <GitFork className="h-3 w-3" />
              Fork
            </span>
          )}
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} source on GitHub`}
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-500 transition-all duration-300 hover:border-white/25 hover:text-white"
            >
              <Github className="h-4 w-4" />
            </a>
          )}
          {/* Private work links to the write-up instead of a repo. */}
          {project.writeup && (
            <a
              href={project.writeup}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} write-up`}
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-500 transition-all duration-300 hover:border-white/25 hover:text-white"
            >
              <FileText className="h-4 w-4" />
            </a>
          )}
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="grid h-8 w-8 place-items-center rounded-lg border border-white/10 text-slate-500 transition-all duration-300 hover:border-accent-400/40 hover:text-accent-300"
            >
              <ArrowUpRight className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>

      <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-white transition-colors duration-300 group-hover/spot:text-accent-200">
          {project.title}
        </h3>
        {project.period && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600">
            {project.period}
          </span>
        )}
      </div>

      <p className="mt-2.5 flex-1 text-sm leading-relaxed text-slate-400">{project.blurb}</p>

      {project.metrics && (
        // Column count follows the metric count so the row never leaves a gap.
        <dl
          className={cn(
            'mt-5 grid gap-2',
            project.metrics.length === 2 ? 'grid-cols-2' : 'grid-cols-3',
          )}
        >
          {project.metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-2 py-2.5 text-center"
            >
              <dd className="font-mono text-base font-semibold text-white">{metric.value}</dd>
              <dt className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-500">
                {metric.label}
              </dt>
            </div>
          ))}
        </dl>
      )}

      <ul className="mt-5 flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-slate-400 transition-colors duration-300 group-hover/spot:border-white/12 group-hover/spot:text-slate-300"
          >
            {tag}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}
