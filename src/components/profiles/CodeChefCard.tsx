import { ChefHat, Star } from 'lucide-react';
import { motion } from 'framer-motion';

import ProfileCardShell from './ProfileCardShell';
import CountUp from '../ui/CountUp';
import { codechefStats, handles, socials } from '../../data/site';
import { cn } from '../../lib/cn';

/** CodeChef star bands — the rating floor that earns each star. */
const STAR_BANDS = [0, 1400, 1600, 1800, 2000, 2200, 2500];
const STAR_COLOR = '#4ade80'; // 2★ green, brightened for a dark background

export default function CodeChefCard() {
  const { rating, stars } = codechefStats;

  const nextFloor = STAR_BANDS[stars];
  const currentFloor = STAR_BANDS[stars - 1] ?? 0;
  const percent = nextFloor
    ? Math.min(100, ((rating - currentFloor) / (nextFloor - currentFloor)) * 100)
    : 100;

  return (
    <ProfileCardShell
      Icon={ChefHat}
      platform="CodeChef"
      handle={handles.codechef}
      href={socials.codechef}
      accent="#a16207"
      state="manual"
    >
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            Current rating
          </p>
          <div className="mt-1.5 flex flex-wrap items-baseline gap-3">
            <CountUp
              value={rating}
              className="font-mono text-5xl font-bold leading-none tracking-tight text-white"
            />
            <span
              className="rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider"
              style={{
                color: STAR_COLOR,
                borderColor: `${STAR_COLOR}44`,
                backgroundColor: `${STAR_COLOR}18`,
              }}
            >
              {stars} star
            </span>
          </div>
        </div>

        {/* Earned stars out of the seven CodeChef bands */}
        <div className="flex items-center gap-1.5">
          {STAR_BANDS.map((_, i) => (
            <Star
              key={i}
              className={cn('h-4 w-4', i < stars ? 'fill-current' : 'text-white/12')}
              style={i < stars ? { color: STAR_COLOR } : undefined}
              strokeWidth={1.5}
            />
          ))}
        </div>

        {nextFloor && (
          <div>
            <div className="mb-2 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-wider">
              <span className="text-slate-500">
                <span className="text-slate-300">{nextFloor - rating}</span> to {stars + 1} star
              </span>
              <span className="text-slate-600">{Math.round(percent)}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${STAR_COLOR}, #60a5fa)`,
                  boxShadow: `0 0 12px ${STAR_COLOR}80`,
                }}
                initial={{ width: 0 }}
                whileInView={{ width: `${percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              />
            </div>
          </div>
        )}
      </div>
    </ProfileCardShell>
  );
}
