import CodeChefCard from './profiles/CodeChefCard';
import CodeforcesCard from './profiles/CodeforcesCard';
import GitHubCard from './profiles/GitHubCard';
import LeetCodeCard from './profiles/LeetCodeCard';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';
import { useCodeforces } from '../hooks/useCodeforces';
import { codechefStats, leetcodeStats } from '../data/site';

export default function CodingProfiles() {
  // Codeforces' solved count is fetched live; LeetCode and CodeChef are
  // hand-maintained (see the "Manual" badge on those two cards), so the
  // total below updates as soon as the Codeforces call resolves.
  const { stats: cfStats } = useCodeforces();
  const totalSolved = cfStats.solved + leetcodeStats.solved + codechefStats.solved;

  return (
    <section id="profiles" className="relative py-24 sm:py-28">
      {/* Faint grid, faded out toward the edges. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-faint [background-size:56px_56px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]"
      />

      <div className="section-shell relative">
        <SectionHeading
          eyebrow="Competitive Programming"
          title={
            <>
              Consistency, in <span className="text-gradient-accent">numbers</span>.
            </>
          }
          description={`${totalSolved} problems solved across Codeforces, LeetCode, and CodeChef — ratings update live where the platform allows it.`}
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {/* Codeforces leads — it is the deepest dataset of the four. */}
          <Reveal>
            <CodeforcesCard />
          </Reveal>
          <Reveal delay={0.08}>
            <LeetCodeCard />
          </Reveal>
          <Reveal delay={0.16}>
            <CodeChefCard />
          </Reveal>
          <Reveal delay={0.24}>
            <GitHubCard />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
