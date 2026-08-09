import { Flame } from 'lucide-react';

import ProfileCardShell from './ProfileCardShell';
import CountUp from '../ui/CountUp';
import { handles, leetcodeStats, socials } from '../../data/site';
import { LeetCodeIcon } from '../../lib/icons';

export default function LeetCodeCard() {
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
          <CountUp
            value={leetcodeStats.rating}
            className="mt-1.5 block font-mono text-5xl font-bold leading-none tracking-tight text-white"
          />
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
            <p className="font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Problems solved
            </p>
            <p className="mt-1 font-mono text-xl font-semibold text-white">
              <CountUp value={leetcodeStats.solved} suffix="+" />
            </p>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3">
            <p className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-slate-500">
              <Flame className="h-3 w-3" />
              Daily streak
            </p>
            <p className="mt-1 font-mono text-xl font-semibold text-white">
              <CountUp value={leetcodeStats.streakDays} />
              <span className="ml-1 text-xs font-normal text-slate-500">days</span>
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-amber-400/20 bg-amber-400/[0.06] px-3 py-2.5">
          <p className="text-xs leading-relaxed text-amber-200/90">
            A full year of solving, without missing a day.
          </p>
        </div>
      </div>
    </ProfileCardShell>
  );
}
