import { Github } from 'lucide-react';
import { motion } from 'framer-motion';

import ProfileCardShell from './ProfileCardShell';
import CountUp from '../ui/CountUp';
import { useGitHub } from '../../hooks/useGitHub';
import { handles, socials } from '../../data/site';

/** Brand colours for the language bar, with a neutral default. */
const LANG_COLORS: Record<string, string> = {
  Python: '#3572A5',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  'Jupyter Notebook': '#DA5B0B',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  'C++': '#f34b7d',
  HCL: '#844FBA',
  Shell: '#89e051',
};

export default function GitHubCard() {
  const { stats, state } = useGitHub();

  const totalLangRepos = stats.languages.reduce((sum, l) => sum + l.count, 0) || 1;

  return (
    <ProfileCardShell
      Icon={Github}
      platform="GitHub"
      handle={handles.github}
      href={socials.github}
      accent="#a78bfa"
      state={state}
    >
      <div className="flex flex-col gap-5">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
            Public repositories
          </p>
          <CountUp
            value={stats.publicRepos}
            className="mt-1.5 block font-mono text-5xl font-bold leading-none tracking-tight text-white"
          />
        </div>

        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Followers', value: stats.followers },
            { label: 'Following', value: stats.following },
            { label: 'Stars', value: stats.stars },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/[0.07] bg-white/[0.02] p-3 text-center"
            >
              <p className="font-mono text-lg font-semibold text-white">
                <CountUp value={stat.value} />
              </p>
              <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-slate-500">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Language mix across owned (non-fork) repos */}
        {stats.languages.length > 0 && (
          <div>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-wider text-slate-500">
              Most used
            </p>
            <div className="flex h-1.5 w-full overflow-hidden rounded-full bg-white/[0.07]">
              {stats.languages.map((lang, i) => (
                <motion.span
                  key={lang.name}
                  className="h-full first:rounded-l-full last:rounded-r-full"
                  style={{ backgroundColor: LANG_COLORS[lang.name] ?? '#64748b' }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${(lang.count / totalLangRepos) * 100}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                />
              ))}
            </div>
            <div className="mt-2.5 flex flex-wrap gap-x-3 gap-y-1">
              {stats.languages.map((lang) => (
                <span
                  key={lang.name}
                  className="inline-flex items-center gap-1.5 font-mono text-[10px] text-slate-400"
                >
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ backgroundColor: LANG_COLORS[lang.name] ?? '#64748b' }}
                  />
                  {lang.name}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </ProfileCardShell>
  );
}
