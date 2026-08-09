import { motion } from 'framer-motion';

import ProfileCardShell from './ProfileCardShell';
import CountUp from '../ui/CountUp';
import { handles, leetcodeStats, socials } from '../../data/site';
import { LeetCodeIcon } from '../../lib/icons';

const BANDS = [
  { label: 'Easy', value: leetcodeStats.easy, color: '#22d3ee' },
  { label: 'Medium', value: leetcodeStats.medium, color: '#fbbf24' },
  { label: 'Hard', value: leetcodeStats.hard, color: '#f87171' },
];

export default function LeetCodeCard() {
  const max = Math.max(...BANDS.map((b) => b.value), 1);

  return (
    <ProfileCardShell
      Icon={LeetCodeIcon}
      platform="LeetCode"
      handle={handles.leetcode}
      href={socials.leetcode}
      accent="#f59e0b"
      state="manual"
    >
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            Contest rating
          </p>
          <div className="mt-1.5 flex flex-wrap items-baseline gap-3">
            <CountUp
              value={leetcodeStats.rating}
              className="font-mono text-5xl font-bold leading-none tracking-tight text-white"
            />
            <span className="rounded-full border border-amber-400/40 bg-amber-400/[0.12] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wider text-amber-300">
              Top {leetcodeStats.topPercent}%
            </span>
          </div>
        </div>

        {/* Solved, split by difficulty */}
        <div>
          <div className="mb-3 flex items-baseline justify-between">
            <span className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Problems solved
            </span>
            <span className="font-mono text-xl font-semibold text-white">
              <CountUp value={leetcodeStats.solved} />
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {BANDS.map((band, i) => (
              <div key={band.label}>
                <div className="mb-1 flex items-baseline justify-between font-mono text-[10px] uppercase tracking-wider">
                  <span className="text-slate-500">{band.label}</span>
                  <span className="text-slate-300">{band.value}</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
                  <motion.div
                    className="h-full rounded-full"
                    style={{
                      backgroundColor: band.color,
                      boxShadow: `0 0 10px ${band.color}70`,
                    }}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(band.value / max) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.15 + i * 0.1,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Contests
            </p>
            <p className="mt-1 font-mono text-lg font-semibold text-white">
              <CountUp value={leetcodeStats.contests} />
            </p>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Active days
            </p>
            <p className="mt-1 font-mono text-lg font-semibold text-white">
              <CountUp value={leetcodeStats.activeDays} />
            </p>
          </div>
        </div>
      </div>
    </ProfileCardShell>
  );
}
