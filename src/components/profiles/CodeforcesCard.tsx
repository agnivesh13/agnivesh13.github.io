import { motion } from 'framer-motion';
import { TrendingUp, Trophy } from 'lucide-react';

import ProfileCardShell from './ProfileCardShell';
import Sparkline from './Sparkline';
import CountUp from '../ui/CountUp';
import { rankColor, rankProgress, useCodeforces } from '../../hooks/useCodeforces';
import { socials } from '../../data/site';
import { CodeforcesIcon } from '../../lib/icons';

export default function CodeforcesCard() {
  const { stats, state } = useCodeforces();

  const color = rankColor(stats.rank);
  const { percent, next, remaining } = rankProgress(stats.rating);

  return (
    <ProfileCardShell
      Icon={CodeforcesIcon}
      platform="Codeforces"
      handle={stats.handle}
      href={socials.codeforces}
      accent="#22d3ee"
      state={state}
      featured
    >
      <div className="flex flex-col gap-5">
        {/* Current rating */}
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            Current rating
          </p>
          <div className="mt-1.5 flex flex-wrap items-baseline gap-3">
            <CountUp
              value={stats.rating}
              className="font-mono text-5xl font-bold leading-none tracking-tight text-white"
            />
            <span
              className="rounded-full border px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider"
              style={{
                color,
                borderColor: `${color}44`,
                backgroundColor: `${color}18`,
              }}
            >
              {stats.rank}
            </span>
          </div>
        </div>

        {/* Rating curve across every rated contest */}
        <Sparkline data={stats.history} color={color} className="h-12 w-full" />

        {/* Secondary metrics */}
        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
            <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
              <Trophy className="h-3 w-3" />
              Max rating
            </p>
            <p className="mt-1 font-mono text-xl font-semibold text-white">
              <CountUp value={stats.maxRating} />
            </p>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
            <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
              <TrendingUp className="h-3 w-3" />
              Contests
            </p>
            <p className="mt-1 font-mono text-xl font-semibold text-white">
              <CountUp value={stats.contests} />
            </p>
          </div>
        </div>

        {/* Distance to the next rank band */}
        {next && (
          <div>
            <div className="mb-2 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-wider">
              <span className="text-slate-500">
                <span className="text-slate-300">{remaining}</span> to {next.name}
              </span>
              <span className="text-slate-600">{Math.round(percent)}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: `linear-gradient(90deg, ${color}, ${next.color})`,
                  boxShadow: `0 0 12px ${color}80`,
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
