"use client";

import React from "react";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  itemCountDescription?: string;
  className?: string;
  tone?: "light" | "dark";
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  itemCountDescription,
  className,
  tone = "light",
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "mt-8 flex flex-col items-center justify-between gap-3 border-t-2 pt-4 sm:flex-row",
        dark ? "border-paper/20" : "border-ink/20",
        className
      )}
    >
      {itemCountDescription ? (
        <span
          className={cn(
            "font-terminal text-base leading-none",
            dark ? "text-paper/50" : "text-muted"
          )}
        >
          {itemCountDescription}
        </span>
      ) : (
        <span />
      )}

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => onPageChange(Math.max(1, currentPage - 1))}
          disabled={currentPage === 1}
          aria-label="Halaman sebelumnya"
          className={cn(
            "flex h-8 w-8 items-center justify-center border-2 transition-transform",
            dark
              ? "border-paper/45 bg-ink-2 text-paper hover:border-gold hover:text-gold"
              : "border-ink bg-paper-light text-ink shadow-[2px_2px_0_0_#191C18] hover:bg-gold-light active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
            "disabled:pointer-events-none disabled:opacity-30"
          )}
        >
          <PixelIcon name="chevron-left" size={13} />
        </button>

        <span
          aria-live="polite"
          className={cn(
            "min-w-[4.5rem] border-2 px-2 py-1 text-center font-pixel text-[8px] uppercase leading-none",
            dark
              ? "border-paper/45 bg-ink-3 text-gold"
              : "border-ink bg-paper-mid text-ink"
          )}
        >
          {currentPage} / {totalPages}
        </span>

        <button
          type="button"
          onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
          disabled={currentPage === totalPages}
          aria-label="Halaman selanjutnya"
          className={cn(
            "flex h-8 w-8 items-center justify-center border-2 transition-transform",
            dark
              ? "border-paper/45 bg-ink-2 text-paper hover:border-gold hover:text-gold"
              : "border-ink bg-paper-light text-ink shadow-[2px_2px_0_0_#191C18] hover:bg-gold-light active:translate-x-0.5 active:translate-y-0.5 active:shadow-none",
            "disabled:pointer-events-none disabled:opacity-30"
          )}
        >
          <PixelIcon name="chevron-right" size={13} />
        </button>
      </div>
    </div>
  );
}
