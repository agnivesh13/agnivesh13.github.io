import CodeChefCard from './profiles/CodeChefCard';
import CodeforcesCard from './profiles/CodeforcesCard';
import GitHubCard from './profiles/GitHubCard';
import LeetCodeCard from './profiles/LeetCodeCard';
import Reveal from './ui/Reveal';
import SectionHeading from './ui/SectionHeading';

export default function CodingProfiles() {
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
              Metrics, pulled <span className="text-gradient-accent">live</span>.
            </>
          }
          description="Codeforces and GitHub are fetched from their public APIs on every page load. LeetCode and CodeChef publish no open API, so those two are kept up to date by hand."
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
