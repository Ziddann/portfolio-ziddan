import React from "react";
import { cn } from "@/lib/utils";

export function PixelDivider({
  tone = "ink",
  className,
}: {
  tone?: "ink" | "rust" | "paper";
  className?: string;
}) {
  return (
    <div
      aria-hidden="true"
      className={cn("h-3 w-full", className)}
      style={{
        backgroundImage: `conic-gradient(from 90deg at 2px 2px, ${
          tone === "rust" ? "#C1542D" : tone === "paper" ? "#F2E7D2" : "#191C18"
        } 90deg, transparent 0)`,
        backgroundSize: "4px 4px",
      }}
    />
  );
}
