import { Github, Linkedin, Twitter } from 'lucide-react';

import { socials } from '../data/site';
import { CodeforcesIcon, LeetCodeIcon } from '../lib/icons';
import { cn } from '../lib/cn';

const links = [
  { label: 'GitHub', href: socials.github, Icon: Github },
  { label: 'LinkedIn', href: socials.linkedin, Icon: Linkedin },
  { label: 'X', href: socials.x, Icon: Twitter },
  { label: 'Codeforces', href: socials.codeforces, Icon: CodeforcesIcon },
  { label: 'LeetCode', href: socials.leetcode, Icon: LeetCodeIcon },
];

export default function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cn('flex items-center gap-2', className)}>
      {links.map(({ label, href, Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="group grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/[0.03] text-slate-400 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent-400/40 hover:bg-accent-400/10 hover:text-accent-300"
          >
            <Icon className="h-[18px] w-[18px] transition-transform duration-300 group-hover:scale-110" />
          </a>
        </li>
      ))}
    </ul>
  );
}
