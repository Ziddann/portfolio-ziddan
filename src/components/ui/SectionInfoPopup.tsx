"use client";

import React, { useEffect, useRef, useState } from "react";
import { SectionInfo } from "@/types";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { useFocusTrap } from "@/hooks/useFocusTrap";
import { cn } from "@/lib/utils";

interface SectionInfoPopupProps {
  info: SectionInfo;
  className?: string;
  triggerLabel?: string;
}

export function SectionInfoPopup({
  info,
  className,
  triggerLabel = "Bantuan",
}: SectionInfoPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useFocusTrap(isOpen, dialogRef);

  useEffect(() => {
    if (!isOpen) return;
    const timer = window.setTimeout(() => closeRef.current?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        triggerRef.current?.focus();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={cn("relative inline-flex items-center", className)}
    >
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="dialog"
        aria-expanded={isOpen}
        aria-label={`${info.title} — bantuan bagian`}
        className={cn(
          "inline-flex items-center gap-1.5 border-2 px-2 py-1 transition-colors",
          isOpen
            ? "border-rust bg-rust text-paper-light shadow-pixel-sm"
            : "border-ink/40 bg-paper-light text-muted hover:border-ink hover:text-ink"
        )}
      >
        <PixelIcon name="info" size={12} />
        <span className="hud-label-sm hidden sm:inline">{triggerLabel}</span>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-ink/60 md:hidden"
            onClick={() => setIsOpen(false)}
            aria-hidden="true"
          />

          <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`section-help-${info.title}`}
            data-lenis-prevent
            className={cn(
              "z-50 border-2 border-ink bg-paper-light text-ink shadow-pixel-md",
              "fixed bottom-0 left-0 right-0 max-h-[82vh] overflow-y-auto p-0",
              "md:absolute md:bottom-auto md:left-0 md:right-auto md:top-full md:mt-3 md:max-h-none md:w-[24rem] md:overflow-visible"
            )}
          >
            <div className="flex items-center justify-between gap-3 border-b-2 border-ink bg-paper-mid px-3 py-2">
              <span className="hud-label-sm text-rust">
                HELP.TXT
              </span>
              <button
                ref={closeRef}
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  triggerRef.current?.focus();
                }}
                aria-label="Tutup bantuan"
                className="border-2 border-ink bg-paper-light p-1 text-ink hover:bg-rust hover:text-paper-light"
              >
                <PixelIcon name="close" size={12} />
              </button>
            </div>

            <div className="space-y-3 p-4 text-xs leading-relaxed">
              <div>
                {info.badge && (
                  <span className="hud-label-sm mb-1 block text-teal">
                    {info.badge}
                  </span>
                )}
                <h4
                  id={`section-help-${info.title}`}
                  className="font-display text-sm uppercase leading-snug text-ink"
                >
                  {info.title}
                </h4>
              </div>

              <p className="border-l-2 border-gold pl-2.5 font-medium text-ink">
                {info.summary}
              </p>

              <div>
                <span className="hud-label-sm mb-1 block text-muted">
                  Fungsi bagian
                </span>
                <p className="text-muted">{info.purpose}</p>
              </div>

              {info.details && info.details.length > 0 && (
                <div>
                  <span className="hud-label-sm mb-1.5 block text-muted">
                    Poin kunci
                  </span>
                  <ul className="space-y-1.5">
                    {info.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2">
                        <PixelIcon
                          name="check"
                          size={11}
                          className="mt-0.5 text-teal"
                        />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {info.tips && info.tips.length > 0 && (
                <div className="border-2 border-ink bg-gold-light/70 p-2.5">
                  <span className="hud-label-sm mb-1 flex items-center gap-1.5 text-gold-dark">
                    <PixelIcon name="sparkle" size={10} />
                    Tips
                  </span>
                  {info.tips.map((tip) => (
                    <p key={tip} className="text-[11px] leading-relaxed">
                      {tip}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="flex items-center justify-between border-t-2 border-ink bg-paper-mid px-3 py-2">
              <span className="hud-label-sm text-muted">ESC = TUTUP</span>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="hud-label-sm text-rust hover:underline md:hidden"
              >
                Tutup
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
