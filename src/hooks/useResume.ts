import { createContext, useContext } from 'react';

/** Opens the in-page résumé viewer. Provided by `ResumeViewer`. */
export const ResumeContext = createContext<(() => void) | null>(null);

export function useResume() {
  const open = useContext(ResumeContext);
  if (!open) throw new Error('useResume must be used inside <ResumeViewer>');
  return open;
}
