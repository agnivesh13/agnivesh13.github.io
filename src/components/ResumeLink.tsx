import type { MouseEvent, ReactNode } from 'react';

import { profile } from '../data/site';
import { useResume } from '../hooks/useResume';

interface ResumeLinkProps {
  className?: string;
  children: ReactNode;
  /** Runs before the viewer opens, e.g. to close the mobile menu. */
  onOpen?: () => void;
}

/**
 * A real link to the PDF that opens the in-page viewer on a plain click.
 * Modified clicks (new tab, new window, save) keep the browser's default.
 */
export default function ResumeLink({ className, children, onOpen }: ResumeLinkProps) {
  const openResume = useResume();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();
    onOpen?.();
    openResume();
  };

  return (
    <a
      href={profile.resume}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
    >
      {children}
    </a>
  );
}
