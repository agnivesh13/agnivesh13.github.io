import { useEffect, useState } from 'react';

import { githubFallback, handles } from '../data/site';
import type { FetchState } from './useCodeforces';

export interface GitHubStats {
  publicRepos: number;
  followers: number;
  following: number;
  stars: number;
  languages: { name: string; count: number }[];
}

interface GhUser {
  public_repos: number;
  followers: number;
  following: number;
}

interface GhRepo {
  language: string | null;
  stargazers_count: number;
  fork: boolean;
}

const INITIAL: GitHubStats = { ...githubFallback, stars: 1, languages: [] };

/**
 * GitHub's REST API is CORS-enabled for unauthenticated reads, but rate-limits
 * to 60 requests/hour per IP — the fallback covers a throttled visitor.
 */
export function useGitHub(username: string = handles.github) {
  const [stats, setStats] = useState<GitHubStats>(INITIAL);
  const [state, setState] = useState<FetchState>('loading');

  useEffect(() => {
    const controller = new AbortController();

    async function load() {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${username}`, { signal: controller.signal }),
          fetch(`https://api.github.com/users/${username}/repos?per_page=100&sort=updated`, {
            signal: controller.signal,
          }),
        ]);

        if (!userRes.ok) throw new Error(`users ${userRes.status}`);
        const user: GhUser = await userRes.json();

        let stars = 0;
        let languages: GitHubStats['languages'] = [];

        if (reposRes.ok) {
          const repos: GhRepo[] = await reposRes.json();
          const owned = repos.filter((r) => !r.fork);

          stars = owned.reduce((sum, r) => sum + r.stargazers_count, 0);

          const tally = new Map<string, number>();
          for (const repo of owned) {
            if (!repo.language) continue;
            tally.set(repo.language, (tally.get(repo.language) ?? 0) + 1);
          }
          languages = [...tally.entries()]
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 4);
        }

        setStats({
          publicRepos: user.public_repos,
          followers: user.followers,
          following: user.following,
          stars,
          languages,
        });
        setState('live');
      } catch {
        if (controller.signal.aborted) return;
        setState('fallback');
      }
    }

    load();
    return () => controller.abort();
  }, [username]);

  return { stats, state };
}
