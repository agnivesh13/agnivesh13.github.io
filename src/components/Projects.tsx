import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

import ProjectCard from './ProjectCard';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { projectFilters, projects, socials, type ProjectCategory } from '../data/site';
import { cn } from '../lib/cn';

type Filter = ProjectCategory | 'all';

export default function Projects() {
  const [filter, setFilter] = useState<Filter>('all');

  const visible = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <section id="projects" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Selected Work"
            title={
              <>
                Things I&apos;ve <span className="text-gradient-accent">built</span>.
              </>
            }
            description="Machine learning models, cloud data pipelines, and the occasional full-stack app. Every entry links to its source."
          />

          {/* Filter tabs */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1">
              {projectFilters.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={cn(
                    'relative rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-200',
                    filter === tab.id ? 'text-ink-950' : 'text-slate-400 hover:text-white',
                  )}
                >
                  {filter === tab.id && (
                    <motion.span
                      layoutId="project-filter"
                      className="absolute inset-0 rounded-lg bg-accent-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                    />
                  )}
                  <span className="relative">{tab.label}</span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/*
          Dense flow lets single-width cards backfill the gap a `col-span-2`
          featured card leaves at the end of a row.
        */}
        <motion.div
          layout
          className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:grid-flow-row-dense"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                // Flagship projects get a wider slot on large screens.
                className={cn('group', project.featured && 'lg:col-span-2')}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <Reveal delay={0.1} className="mt-10 flex justify-center">
          <a
            href={socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.03] px-5 py-3 text-sm font-medium text-slate-300 transition-colors duration-300 hover:border-accent-400/40 hover:bg-accent-400/10 hover:text-white"
          >
            See everything on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
