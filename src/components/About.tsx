import {
  Award,
  BadgeCheck,
  Briefcase,
  Flame,
  GraduationCap,
  TrendingUp,
} from 'lucide-react';

import BorderBeam from './ui/BorderBeam';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import SpotlightCard from './ui/SpotlightCard';
import { about, achievements, education, experience } from '../data/site';

const ACHIEVEMENT_ICONS = {
  flame: Flame,
  award: Award,
  chart: TrendingUp,
  badge: BadgeCheck,
} as const;

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="About me"
          title={
            <>
              Building systems at the intersection of{' '}
              <span className="text-gradient-accent">software, AI, and markets</span>.
            </>
          }
        />

        {/* Bio */}
        <div className="mt-8 max-w-3xl space-y-4">
          {about.map((paragraph, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <p className="text-base leading-relaxed text-slate-400">
                {paragraph.map((segment, j) =>
                  typeof segment === 'string' ? (
                    <span key={j}>{segment}</span>
                  ) : (
                    <strong key={j} className="font-semibold text-slate-200">
                      {segment.bold}
                    </strong>
                  ),
                )}
              </p>
            </Reveal>
          ))}
        </div>

        {/* ---------------- Experience ---------------- */}
        <div className="mt-14">
          <Reveal>
            <h3 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-400">
              <Briefcase className="h-3.5 w-3.5" />
              Experience
            </h3>
          </Reveal>

          {experience.map((role, i) => (
            <Reveal key={role.company} delay={0.08 + i * 0.08} className="mt-5">
              <div className="group relative">
                {/* Bloom marking this as the headline credential */}
                <div
                  aria-hidden
                  className="absolute -inset-px rounded-2xl bg-gradient-to-br from-accent-500/25 to-transparent opacity-40 blur-xl transition-opacity duration-500 group-hover:opacity-75"
                />

                <SpotlightCard className="relative p-5 sm:p-7">
                  {/* Headline credential on the page — give it the beam. */}
                  <BorderBeam duration={9} />

                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h4 className="font-display text-xl font-semibold tracking-tight text-white">
                        {role.title}
                      </h4>
                      <p className="mt-1 text-sm text-accent-300">{role.company}</p>
                    </div>
                    <div className="shrink-0 sm:text-right">
                      <p className="font-mono text-xs text-slate-300">{role.period}</p>
                      <p className="mt-1 font-mono text-[11px] text-slate-500">
                        {role.location}
                      </p>
                    </div>
                  </div>

                  {/* Headline numbers */}
                  <dl className="mt-6 grid gap-2 sm:grid-cols-3">
                    {role.metrics.map((metric) => (
                      <div
                        key={metric.label}
                        className="rounded-xl border border-white/[0.07] bg-white/[0.02] px-3 py-3 text-center"
                      >
                        <dd className="font-mono text-xl font-semibold text-white">
                          {metric.value}
                        </dd>
                        <dt className="mt-1 font-mono text-[10px] uppercase tracking-wider text-slate-500">
                          {metric.label}
                        </dt>
                      </div>
                    ))}
                  </dl>

                  <ul className="mt-6 flex flex-col gap-3.5">
                    {role.highlights.map((highlight) => (
                      <li key={highlight.label} className="text-sm leading-relaxed text-slate-400">
                        <span className="font-medium text-slate-200">{highlight.label}:</span>{' '}
                        {highlight.text}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-1.5">
                    {role.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-slate-400"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>

                  {/* The return figure is backtested, not realised — say so. */}
                  <p className="mt-5 font-mono text-[10px] leading-relaxed text-slate-600">
                    Returns shown are simulated from historical backtests.
                  </p>
                </SpotlightCard>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ---------------- Education + Achievements ---------------- */}
        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <h3 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-400">
                <GraduationCap className="h-3.5 w-3.5" />
                Education
              </h3>
            </Reveal>

            <ol className="mt-5 flex flex-col gap-3">
              {education.map((entry, i) => (
                <Reveal key={entry.institution} delay={i * 0.07}>
                  <li className="glass p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-snug text-white">
                          {entry.qualification}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-400">
                          {entry.institution}
                        </p>
                        <p className="mt-1.5 font-mono text-[11px] text-slate-600">
                          {entry.detail}
                        </p>
                      </div>
                      <div className="shrink-0 text-right">
                        <p className="font-mono text-sm font-semibold text-accent-300">
                          {entry.score}
                        </p>
                        <p className="mt-1 font-mono text-[10px] text-slate-500">{entry.year}</p>
                        <p className="font-mono text-[10px] text-slate-600">{entry.location}</p>
                      </div>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>
          </div>

          <div>
            <Reveal>
              <h3 className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em] text-accent-400">
                <Award className="h-3.5 w-3.5" />
                Achievements
              </h3>
            </Reveal>

            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {achievements.map((achievement, i) => {
                const Icon = ACHIEVEMENT_ICONS[achievement.icon];
                return (
                  <Reveal key={achievement.title} delay={i * 0.07}>
                    <li className="glass h-full p-4">
                      <span className="grid h-9 w-9 place-items-center rounded-lg border border-accent-400/20 bg-accent-400/10 text-accent-300">
                        <Icon className="h-4 w-4" />
                      </span>
                      <p className="mt-3 text-sm font-medium leading-snug text-white">
                        {achievement.title}
                      </p>
                      <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                        {achievement.detail}
                      </p>
                    </li>
                  </Reveal>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
