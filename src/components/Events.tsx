import EventCard from './EventCard';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { events } from '../data/site';

export default function Events() {
  return (
    <section id="events" className="relative py-24 sm:py-28">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Events & Highlights"
          title={
            <>
              Where I&apos;ve been <span className="text-gradient-accent">shipping</span>.
            </>
          }
          description="Hackathons, production deployments, and the infrastructure I run at home — the work that happens outside a repository."
        />

        {/* Timeline: a vertical spine with a node per event. */}
        <div className="relative mt-12">
          <div
            aria-hidden
            className="absolute bottom-0 left-[7px] top-2 hidden w-px bg-gradient-to-b from-accent-400/40 via-white/10 to-transparent md:block"
          />

          <div className="flex flex-col gap-5">
            {events.map((event, i) => (
              <Reveal key={event.title} delay={i * 0.08}>
                <div className="relative md:pl-12">
                  {/* Timeline node */}
                  <span
                    aria-hidden
                    className="absolute left-0 top-8 hidden h-[15px] w-[15px] rounded-full border-2 border-ink-950 md:block"
                    style={{
                      backgroundColor: event.accent,
                      boxShadow: `0 0 14px ${event.accent}99`,
                    }}
                  />
                  <EventCard event={event} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
