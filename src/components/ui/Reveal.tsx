"use client";

import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type RevealDirection = "up" | "left" | "right" | "scale";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: RevealDirection;
  as?: "div" | "section" | "article" | "aside" | "header" | "li" | "span";
  once?: boolean;
}

export function Reveal({
  children,
  className,
  delay = 0,
  direction = "up",
  as = "div",
  once = true,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const Tag = as as React.ElementType;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      node.classList.add("is-visible");
      return;
    }

    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.94 && rect.bottom > 0) {
      node.classList.add("is-visible");
      if (once) return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      data-reveal={direction === "up" ? "true" : direction}
      className={cn(className)}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
