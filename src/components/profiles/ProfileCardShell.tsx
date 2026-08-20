import type { ComponentType, ReactNode, SVGProps } from 'react';
import { ArrowUpRight } from 'lucide-react';

import BorderBeam from '../ui/BorderBeam';
import SpotlightCard from '../ui/SpotlightCard';
import type { FetchState } from '../../hooks/useCodeforces';
import { cn } from '../../lib/cn';

interface ProfileCardShellProps {
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  platform: string;
  handle: string;
  href: string;
  /** Hex accent driving the glow, icon tint and spotlight for this card. */
  accent: string;
  state?: FetchState;
  featured?: boolean;
  children: ReactNode;
}

function StatusDot({ state }: { state: FetchState }) {
  if (state === 'loading') {
    return (
      <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-slate-500" />
        Syncing
      </span>
    );
  }

  if (state === 'manual') {
    return (
      <span
        title="This platform has no CORS-enabled public API — figures are updated by hand"
        className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
        Manual
      </span>
    );
  }

  if (state === 'fallback') {
    return (
      <span
        title="Live API unreachable — showing the last saved snapshot"
        className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-slate-600" />
        Cached
      </span>
    );
  }

  return (
    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
      </span>
      Live
    </span>
  );
}

export default function ProfileCardShell({
  Icon,
  platform,
  handle,
  href,
  accent,
  state,
  featured = false,
  children,
}: ProfileCardShellProps) {
  return (
    <div className="group relative h-full">
      {/* Coloured bloom behind the card — stronger on the featured one. */}
      <div
        aria-hidden
        className={cn(
          'absolute -inset-px rounded-2xl blur-xl transition-opacity duration-500',
          featured ? 'opacity-40 group-hover:opacity-75' : 'opacity-0 group-hover:opacity-40',
        )}
        style={{ background: `linear-gradient(135deg, ${accent}, transparent 65%)` }}
      />

      <SpotlightCard
        className="relative flex h-full flex-col p-5 sm:p-6"
        glow={`${accent}22`}
      >
        {/* Traveling edge light marks the flagship card. */}
        {featured && <BorderBeam duration={8} colorFrom={accent} />}

        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <span
              className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border transition-transform duration-300 group-hover:scale-105"
              style={{
                borderColor: `${accent}33`,
                backgroundColor: `${accent}14`,
                color: accent,
              }}
            >
              <Icon className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="font-display text-sm font-semibold text-white">{platform}</p>
              <p className="truncate font-mono text-xs text-slate-500">@{handle}</p>
            </div>
          </div>

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${platform} profile`}
            className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-white/10 text-slate-500 transition-all duration-300 hover:border-white/25 hover:text-white"
          >
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 flex-1">{children}</div>

        {state && (
          <div className="mt-5 flex items-center justify-between border-t border-white/[0.07] pt-3">
            <StatusDot state={state} />
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-600">
              {platform}
            </span>
          </div>
        )}
      </SpotlightCard>
    </div>
  );
}
