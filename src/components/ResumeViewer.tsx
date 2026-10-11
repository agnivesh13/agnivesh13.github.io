import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Download, ExternalLink, FileText, X } from 'lucide-react';

import { profile } from '../data/site';
import { ResumeContext } from '../hooks/useResume';

const buttonBase =
  'inline-flex items-center gap-2 rounded-lg px-3.5 py-2 text-sm font-medium transition-colors duration-300';
const primaryButton = `${buttonBase} bg-gradient-to-r from-accent-400 to-accent-500 font-semibold text-ink-950 shadow-[0_0_20px_-6px_rgba(34,211,238,0.65)] hover:shadow-[0_0_32px_-6px_rgba(34,211,238,0.9)]`;
const secondaryButton = `${buttonBase} border border-white/12 bg-white/[0.04] text-slate-200 hover:border-accent-400/40 hover:bg-accent-400/10 hover:text-white`;

/**
 * Provides `useResume()` and renders the résumé in a modal with Download and
 * Open-in-new-tab actions. Phones get an action card instead of the embedded
 * PDF, since mobile browsers don't render PDFs inside an iframe reliably.
 */
export default function ResumeViewer({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const openResume = useCallback(() => {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  // Esc closes, body scroll locks, and focus moves in and back out.
  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      returnFocusRef.current?.focus();
    };
  }, [open, close]);

  return (
    <ResumeContext.Provider value={openResume}>
      {children}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={close}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink-950/80 p-3 backdrop-blur-sm sm:p-6"
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-title"
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900/95 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.9)] sm:h-[90vh]"
            >
              {/* Toolbar */}
              <div className="flex items-center justify-between gap-3 border-b border-white/[0.07] px-4 py-3 sm:px-5">
                <h2
                  id="resume-title"
                  className="flex min-w-0 items-center gap-2 font-display text-sm font-semibold text-white"
                >
                  <FileText className="h-4 w-4 shrink-0 text-accent-400" />
                  <span className="truncate">{profile.name} — Résumé</span>
                </h2>

                <div className="flex shrink-0 items-center gap-2">
                  <a
                    href={profile.resume}
                    download={profile.resumeFileName}
                    className={`${primaryButton} hidden sm:inline-flex`}
                  >
                    <Download className="h-4 w-4" />
                    Download
                  </a>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${secondaryButton} hidden sm:inline-flex`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open
                  </a>
                  <button
                    ref={closeRef}
                    type="button"
                    onClick={close}
                    aria-label="Close résumé"
                    className="grid h-9 w-9 place-items-center rounded-lg border border-white/12 bg-white/[0.04] text-slate-300 transition-colors hover:text-white"
                  >
                    <X className="h-[18px] w-[18px]" />
                  </button>
                </div>
              </div>

              {/* Desktop: the PDF itself */}
              <iframe
                src={`${profile.resume}#view=FitH&navpanes=0`}
                title={`${profile.name} résumé`}
                className="hidden min-h-0 w-full flex-1 bg-white sm:block"
              />

              {/* Phones: actions instead of an embed */}
              <div className="flex flex-col items-center gap-5 px-6 py-10 text-center sm:hidden">
                <span className="grid h-14 w-14 place-items-center rounded-2xl border border-accent-400/20 bg-accent-400/10 text-accent-300">
                  <FileText className="h-7 w-7" />
                </span>
                <p className="max-w-xs text-sm leading-relaxed text-slate-400">
                  One page, PDF. Download it or open it in your browser&apos;s viewer.
                </p>
                <div className="flex w-full flex-col gap-2">
                  <a
                    href={profile.resume}
                    download={profile.resumeFileName}
                    className={`${primaryButton} justify-center py-3`}
                  >
                    <Download className="h-4 w-4" />
                    Download PDF
                  </a>
                  <a
                    href={profile.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${secondaryButton} justify-center py-3`}
                  >
                    <ExternalLink className="h-4 w-4" />
                    Open in new tab
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </ResumeContext.Provider>
  );
}
