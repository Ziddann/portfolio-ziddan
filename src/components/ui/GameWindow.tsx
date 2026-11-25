import React from "react";
import { cn } from "@/lib/utils";

interface GameWindowProps {
  title: string;
  meta?: string;
  tone?: "light" | "dark" | "rust";
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  id?: string;
}

export function GameWindow({
  title,
  meta,
  tone = "light",
  children,
  className,
  contentClassName,
  id,
}: GameWindowProps) {
  const isDark = tone === "dark";
  const isRust = tone === "rust";

  return (
    <div
      id={id}
      className={cn(
        "min-w-0",
        isDark
          ? "pixel-panel-dark"
          : isRust
            ? "pixel-panel-rust"
            : "pixel-panel",
        className
      )}
    >
      <div
        className={cn(
          "flex items-center justify-between gap-3 border-b-2 px-3 py-2",
          isDark
            ? "border-paper/70 bg-ink-3"
            : isRust
              ? "border-ink bg-rust-dark"
              : "border-ink bg-paper-mid"
        )}
      >
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-1.5 w-1.5 bg-rust" />
          <span className="h-1.5 w-1.5 bg-gold" />
          <span className="h-1.5 w-1.5 bg-teal" />
        </div>
        <span
          className={cn(
            "hud-label-sm truncate",
            isDark ? "text-paper/80" : isRust ? "text-paper/85" : "text-ink/75"
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            "hud-label-sm hidden truncate sm:block",
            isDark ? "text-paper/45" : isRust ? "text-paper/55" : "text-muted"
          )}
        >
          {meta ?? "OK"}
        </span>
      </div>
      <div className={cn("min-w-0", contentClassName)}>{children}</div>
    </div>
  );
}
