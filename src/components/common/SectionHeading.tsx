import React from "react";
import { SectionInfo } from "@/types";
import { SectionInfoPopup } from "@/components/ui/SectionInfoPopup";
import { PixelIcon } from "@/components/ui/PixelIcon";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index?: string;
  badge?: string;
  title: string;
  description?: string;
  info?: SectionInfo;
  className?: string;
  align?: "left" | "center";
  aside?: React.ReactNode;
  tone?: "light" | "dark";
}

export function SectionHeading({
  index = "01",
  badge,
  title,
  description,
  info,
  className,
  align = "left",
  aside,
  tone = "light",
}: SectionHeadingProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "mb-8 flex flex-col gap-5 sm:mb-10",
        aside ? "lg:flex-row lg:items-end lg:justify-between" : "",
        align === "center" ? "mx-auto max-w-2xl text-center" : "",
        className
      )}
    >
      <div className={cn("min-w-0", align === "center" ? "mx-auto" : "")}>
        <div className="mb-3 flex flex-wrap items-center gap-2.5">
          <span
            className={cn(
              "hud-label border-2 px-1.5 py-1",
              dark
                ? "border-paper/60 bg-ink-3 text-gold"
                : "border-ink bg-paper-light text-rust"
            )}
          >
            {index}
          </span>
          {badge && (
            <span
              className={cn(
                "hud-label flex items-center gap-1.5",
                dark ? "text-gold" : "text-rust"
              )}
            >
              <PixelIcon name="sparkle" size={11} />
              {badge}
            </span>
          )}
          {info && <SectionInfoPopup info={info} />}
        </div>

        <h2
          className={cn(
            "font-display text-2xl uppercase leading-[1.25] tracking-tight sm:text-3xl lg:text-[2.1rem]",
            dark ? "text-paper" : "text-ink"
          )}
        >
          {title}
        </h2>

        {description && (
          <p
            className={cn(
              "mt-3 max-w-2xl text-sm leading-relaxed sm:text-[0.95rem]",
              dark ? "text-paper/65" : "text-muted"
            )}
          >
            {description}
          </p>
        )}
      </div>

      {aside ? <div className="shrink-0">{aside}</div> : null}
    </div>
  );
}
