import { motion } from 'framer-motion';
import { ArrowDown, ArrowUpRight, MapPin, Sparkles } from 'lucide-react';

import ParticleBackground from './ParticleBackground';
import SocialLinks from './SocialLinks';
import AuroraText from './ui/AuroraText';
import Meteors from './ui/Meteors';
import { profile } from '../data/site';
import portrait from '../assets/portrait.jpg';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function Hero() {
  return (
    <section id="top" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      <ParticleBackground />
      <Meteors count={10} />

      {/* Ambient light: a cyan bloom top-left, violet bottom-right. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-accent-500/12 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-52 -right-32 h-[32rem] w-[32rem] rounded-full bg-plasma-600/12 blur-[130px]"
      />
      {/* Fades the hero into the next section. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-ink-950"
      />

      <div className="section-shell relative z-10 py-28 sm:py-32">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10"
        >
          {/* ---------------- Copy ---------------- */}
          <div className="lg:col-span-7">
            <motion.div variants={item} className="flex flex-wrap items-center gap-3">
              {profile.available && (
                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Open to opportunities
                </span>
              )}
              <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                <MapPin className="h-3.5 w-3.5" />
                {profile.location}
              </span>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-7 font-mono text-xs uppercase tracking-[0.28em] text-accent-400"
            >
              {profile.role}
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-4 font-display text-[2.75rem] font-bold leading-[0.98] tracking-[-0.03em] text-white sm:text-6xl lg:text-[4.25rem]"
            >
              Swami Agnivesh
              <br />
              <AuroraText>Shaga</AuroraText>
              <span className="text-slate-600">.</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
            >
              {profile.tagline}
            </motion.p>

            {/* Headline credential, straight from the resume. */}
            <motion.p variants={item} className="mt-5 text-sm text-slate-500">
              Quantitative Research Intern at{' '}
              <span className="text-slate-300">Alfago Research</span> · CSE (AI &amp; ML) at{' '}
              <span className="text-slate-300">VNR VJIET</span>
            </motion.p>

            <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="shimmer-sheen group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-accent-400 to-accent-500 px-5 py-3 text-sm font-semibold text-ink-950 shadow-[0_0_28px_-6px_rgba(34,211,238,0.65)] transition-all duration-300 hover:shadow-[0_0_44px_-6px_rgba(34,211,238,0.9)] focus-visible:ring-offset-0"
              >
                <span className="relative">View Projects</span>
                <ArrowUpRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#profiles"
                className="inline-flex items-center gap-2 rounded-xl border border-white/12 bg-white/[0.04] px-5 py-3 text-sm font-medium text-slate-200 backdrop-blur transition-colors duration-300 hover:border-accent-400/40 hover:bg-accent-400/10 hover:text-white"
              >
                <Sparkles className="h-4 w-4 text-accent-400" />
                Coding Profiles
              </a>
            </motion.div>

            <motion.div variants={item} className="mt-9">
              <SocialLinks />
            </motion.div>
          </div>

          {/* ---------------- Portrait ---------------- */}
          <motion.div variants={item} className="lg:col-span-5">
            <div className="group relative mx-auto w-full max-w-[19rem] sm:max-w-[21rem] lg:ml-auto lg:mr-0">
              {/* Glow behind the frame */}
              <div
                aria-hidden
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-accent-500/25 via-transparent to-plasma-500/25 opacity-70 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="glass relative overflow-hidden rounded-[1.75rem] p-2">
                <div className="relative overflow-hidden rounded-[1.35rem]">
                  <img
                    src={portrait}
                    alt={`${profile.name}, ${profile.role}`}
                    width={900}
                    height={1200}
                    loading="eager"
                    decoding="async"
                    className="aspect-[4/5] w-full object-cover [object-position:50%_22%] transition-transform duration-700 group-hover:scale-[1.03]"
                  />

                  {/* Legibility scrim for the caption */}
                  <div
                    aria-hidden
                    className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent"
                  />

                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="font-display text-base font-semibold leading-tight text-white">
                      {profile.name}
                    </p>
                    <p className="mt-0.5 font-mono text-[11px] uppercase tracking-[0.14em] text-accent-300">
                      {profile.role} · {profile.institution}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.a
        href="#profiles"
        aria-label="Scroll to coding profiles"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 text-slate-600 transition-colors hover:text-accent-400 md:block"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
