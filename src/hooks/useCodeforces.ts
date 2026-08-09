import { useEffect, useState } from 'react';

import { codeforcesFallback, handles } from '../data/site';

export interface CodeforcesStats {
  handle: string;
  rating: number;
  maxRating: number;
  rank: string;
  maxRank: string;
  contests: number;
  history: number[];
}

/** `manual` marks a card whose platform has no CORS-enabled public API. */
export type FetchState = 'loading' | 'live' | 'fallback' | 'manual';

interface CfUserInfo {
  handle: string;
  rating?: number;
  maxRating?: number;
  rank?: string;
  maxRank?: string;
}

interface CfRatingChange {
  newRating: number;
}

const API = 'https://codeforces.com/api';

/**
 * Codeforces' public API sends `Access-Control-Allow-Origin: *`, so the browser
 * can read it directly — no proxy or key needed.
 *
 * The snapshot in `site.ts` renders immediately and stays put if the request
 * fails, so the card is never empty or broken.
 */
export function useCodeforces(handle: string = handles.codeforces) {
  const [stats, setStats] = useState<CodeforcesStats>(codeforcesFallback);
  const [state, setState] = useState<FetchState>('loading');

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const [infoRes, ratingRes] = await Promise.all([
          fetch(`${API}/user.info?handles=${encodeURIComponent(handle)}`, {
            signal: controller.signal,
          }),
          fetch(`${API}/user.rating?handle=${encodeURIComponent(handle)}`, {
            signal: controller.signal,
          }),
        ]);

        if (!infoRes.ok) throw new Error(`user.info ${infoRes.status}`);

        const infoJson: { status: string; result?: CfUserInfo[] } = await infoRes.json();
        if (infoJson.status !== 'OK' || !infoJson.result?.length) {
          throw new Error('user.info returned no result');
        }
        const user = infoJson.result[0];

        // The rating history is a nice-to-have — a failure here should not
        // discard the profile data we already have.
        let history: number[] = [];
        if (ratingRes.ok) {
          const ratingJson: { status: string; result?: CfRatingChange[] } =
            await ratingRes.json();
          if (ratingJson.status === 'OK' && ratingJson.result) {
            history = ratingJson.result.map((r) => r.newRating);
          }
        }

        setStats({
          handle: user.handle,
          rating: user.rating ?? 0,
          maxRating: user.maxRating ?? 0,
          rank: user.rank ?? 'unrated',
          maxRank: user.maxRank ?? 'unrated',
          contests: history.length || codeforcesFallback.contests,
          history: history.length ? history : codeforcesFallback.history,
        });
        setState('live');
      } catch (error) {
        if (controller.signal.aborted) return;
        setState('fallback');
      }
    }

    load();
    return () => controller.abort();
  }, [handle]);

  return { stats, state };
}

/* ------------------------------------------------------------------ *
 * Rank presentation
 * ------------------------------------------------------------------ */

/** Codeforces rank bands, brightened for a dark background. */
const RANKS: { name: string; min: number; max: number; color: string }[] = [
  { name: 'newbie', min: 0, max: 1199, color: '#94a3b8' },
  { name: 'pupil', min: 1200, max: 1399, color: '#4ade80' },
  { name: 'specialist', min: 1400, max: 1599, color: '#22d3ee' },
  { name: 'expert', min: 1600, max: 1899, color: '#60a5fa' },
  { name: 'candidate master', min: 1900, max: 2099, color: '#c084fc' },
  { name: 'master', min: 2100, max: 2299, color: '#fb923c' },
  { name: 'international master', min: 2300, max: 2399, color: '#f97316' },
  { name: 'grandmaster', min: 2400, max: 2599, color: '#f87171' },
  { name: 'international grandmaster', min: 2600, max: 2999, color: '#ef4444' },
  { name: 'legendary grandmaster', min: 3000, max: Infinity, color: '#dc2626' },
];

export function rankColor(rank: string): string {
  return RANKS.find((r) => r.name === rank.toLowerCase())?.color ?? '#94a3b8';
}

/** Progress through the current band, plus what the next rank needs. */
export function rankProgress(rating: number) {
  const index = RANKS.findIndex((r) => rating >= r.min && rating <= r.max);
  const band = RANKS[index] ?? RANKS[0];
  const next = RANKS[index + 1];

  if (!next) return { percent: 100, next: null, remaining: 0 };

  const span = next.min - band.min;
  const percent = Math.min(100, Math.max(0, ((rating - band.min) / span) * 100));

  return { percent, next, remaining: next.min - rating };
}
