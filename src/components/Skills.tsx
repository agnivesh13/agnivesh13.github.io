import Marquee from './ui/Marquee';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { marqueeSkills, skillGroups } from '../data/site';

/** Split into two rows that scroll in opposite directions. */
const half = Math.ceil(marqueeSkills.length / 2);
const rowOne = marqueeSkills.slice(0, half);
const rowTwo = marqueeSkills.slice(half);

function Pill({ label }: { label: string }) {
  return (
    <span className="mx-1.5 whitespace-nowrap rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-2.5 font-mono text-sm text-slate-400 transition-colors duration-300 hover:border-accent-400/35 hover:bg-accent-400/[0.08] hover:text-accent-200">
      {label}
    </span>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Tech Stack"
          title={
            <>
              Tools I reach <span className="text-gradient-accent">for</span>.
            </>
          }
          description="The languages, quantitative methods, libraries and infrastructure behind the work above."
        />
      </div>

      {/* Full-bleed marquee rows */}
      <div className="mask-fade-x mt-12 flex flex-col gap-3">
        <Marquee duration={46}>
          {rowOne.map((skill) => (
            <Pill key={skill} label={skill} />
          ))}
        </Marquee>
        <Marquee duration={52} reverse>
          {rowTwo.map((skill) => (
            <Pill key={skill} label={skill} />
          ))}
        </Marquee>
      </div>

      {/* Grouped breakdown */}
      <div className="section-shell mt-14">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.title} delay={i * 0.08}>
              <div className="glass h-full p-5">
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-400">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2.5 text-sm text-slate-400 transition-colors duration-200 hover:text-slate-200"
                    >
                      <span className="h-1 w-1 shrink-0 rounded-full bg-slate-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
