import { ArrowUpRight, Mail } from 'lucide-react';

import Reveal from './ui/Reveal';
import SocialLinks from './SocialLinks';
import { navLinks, profile } from '../data/site';

export default function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden pt-24 sm:pt-28">
      {/* Warm accent bloom anchoring the bottom of the page */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[26rem] w-[52rem] -translate-x-1/2 rounded-full bg-accent-500/10 blur-[120px]"
      />

      <div className="section-shell relative">
        {/* ---------------- Contact CTA ---------------- */}
        <div className="flex flex-col items-center text-center">
          <Reveal>
            <span className="eyebrow">
              <span className="h-1 w-1 rounded-full bg-accent-400 shadow-[0_0_8px_2px_rgba(34,211,238,0.7)]" />
              Get in touch
            </span>
          </Reveal>

          <Reveal delay={0.06}>
            <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-5xl sm:leading-[1.08]">
              Let&apos;s build something{' '}
              <span className="text-gradient-accent">intelligent</span>.
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-400">
              I&apos;m looking for roles in quantitative research, algorithmic trading and applied
              machine learning. If you have an interesting problem — or just want to talk markets
              and models — my inbox is open.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-400 to-accent-500 px-5 py-3 text-sm font-semibold text-ink-950 shadow-[0_0_28px_-6px_rgba(34,211,238,0.65)] transition-all duration-300 hover:shadow-[0_0_44px_-6px_rgba(34,211,238,0.9)]"
              >
                <Mail className="h-4 w-4" />
                {profile.email}
              </a>
              <a
                href={profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 transition-colors duration-300 hover:border-accent-400/40 hover:bg-accent-400/10 hover:text-white"
              >
                Résumé
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.24}>
            <SocialLinks className="mt-9 justify-center" />
          </Reveal>
        </div>

        {/* ---------------- Bottom bar ---------------- */}
        <div className="mt-20 flex flex-col items-center gap-5 border-t border-white/[0.07] py-8 sm:flex-row sm:justify-between">
          <p className="font-mono text-xs text-slate-600">
            © {new Date().getFullYear()} {profile.name}
          </p>

          <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs text-slate-500 transition-colors hover:text-slate-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#top"
              className="text-xs text-slate-500 transition-colors hover:text-slate-200"
            >
              Back to top
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
