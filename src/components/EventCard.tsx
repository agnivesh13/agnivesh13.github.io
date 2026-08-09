import { useState } from 'react';
import { Calendar, Linkedin, MapPin, Server, ShieldCheck, Trophy } from 'lucide-react';

import SpotlightCard from './ui/SpotlightCard';
import type { EventItem } from '../data/site';

const ICONS = {
  trophy: Trophy,
  server: Server,
  shield: ShieldCheck,
} as const;

/**
 * Photo panel. Falls back to a designed gradient with the event icon whenever
 * no image is configured or the file fails to load, so a missing photo still
 * looks deliberate rather than broken.
 */
function EventMedia({ event }: { event: EventItem }) {
  const [failed, setFailed] = useState(false);
  const Icon = ICONS[event.icon];
  const showImage = Boolean(event.image) && !failed;

  return (
    <div className="relative h-48 overflow-hidden rounded-xl border border-white/[0.07] sm:h-full sm:min-h-[15rem]">
      {showImage ? (
        <img
          src={event.image}
          alt={event.title}
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover transition-transform duration-700 group-hover/spot:scale-105"
        />
      ) : (
        <div
          className="grid h-full w-full place-items-center"
          style={{
            background: `radial-gradient(120% 100% at 20% 0%, ${event.accent}26, transparent 60%), linear-gradient(160deg, rgba(255,255,255,0.05), rgba(255,255,255,0.01))`,
          }}
        >
          <div
            aria-hidden
            className="absolute inset-0 bg-grid-faint [background-size:28px_28px] opacity-50"
          />
          <Icon
            className="relative h-12 w-12 transition-transform duration-500 group-hover/spot:scale-110"
            style={{ color: event.accent }}
            strokeWidth={1.25}
          />
        </div>
      )}

      {/* Keeps the kind badge readable over any photo. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent"
      />

      <span
        className="absolute left-3 top-3 rounded-full border px-2.5 py-1 font-mono text-[10px] font-medium uppercase tracking-wider backdrop-blur-md"
        style={{
          color: event.accent,
          borderColor: `${event.accent}44`,
          backgroundColor: `${event.accent}1f`,
        }}
      >
        {event.kind}
      </span>
    </div>
  );
}

export default function EventCard({ event }: { event: EventItem }) {
  return (
    <SpotlightCard className="p-4 sm:p-5" glow={`${event.accent}1f`}>
      <div className="grid gap-5 sm:grid-cols-5">
        <div className="sm:col-span-2">
          <EventMedia event={event} />
        </div>

        <div className="sm:col-span-3">
          {/* Meta line */}
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 font-mono text-[11px] text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <Calendar className="h-3.5 w-3.5" />
              <time dateTime={event.isoDate}>{event.date}</time>
            </span>
            {event.location && (
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" />
                {event.location}
              </span>
            )}
          </div>

          <div className="mt-2.5 flex flex-wrap items-center gap-3">
            <h3 className="font-display text-lg font-semibold leading-snug tracking-tight text-white sm:text-xl">
              {event.title}
            </h3>
            {event.result && (
              <span
                className="rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider"
                style={{
                  color: event.accent,
                  borderColor: `${event.accent}44`,
                  backgroundColor: `${event.accent}18`,
                }}
              >
                {event.result}
              </span>
            )}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-slate-400">{event.summary}</p>

          <ul className="mt-4 flex flex-col gap-2">
            {event.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-2.5 text-sm leading-relaxed text-slate-400">
                <span
                  aria-hidden
                  className="mt-[0.5rem] h-1 w-1 shrink-0 rounded-full"
                  style={{ backgroundColor: event.accent }}
                />
                {highlight}
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
            <ul className="flex flex-wrap gap-1.5">
              {event.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-md border border-white/[0.07] bg-white/[0.03] px-2 py-1 font-mono text-[10px] text-slate-400"
                >
                  {tag}
                </li>
              ))}
            </ul>

            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center gap-1.5 font-mono text-[11px] text-slate-500 transition-colors duration-300 hover:text-[#0A66C2]"
            >
              <Linkedin className="h-3.5 w-3.5" />
              Read the post
            </a>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}
