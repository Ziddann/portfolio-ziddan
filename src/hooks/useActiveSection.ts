"use client";

import { useCallback, useEffect, useState } from "react";
import { SectionId } from "@/types";
import { useSmoothScroll } from "@/components/providers/SmoothScrollProvider";

export function useActiveSection(
  sectionIds: SectionId[],
  offsetPixels: number = 100
) {
  const { scrollTo } = useSmoothScroll();
  const [activeSection, setActiveSection] = useState<SectionId>(
    sectionIds[0] || "home"
  );

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const scrollPosition = window.scrollY + offsetPixels;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (!element) continue;

        if (scrollPosition >= element.offsetTop) {
          setActiveSection(id);
          return;
        }
      }

      if (window.scrollY < 200 && sectionIds.length > 0) {
        setActiveSection(sectionIds[0]);
      }
    };

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    update();

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [sectionIds, offsetPixels]);

  const scrollToSection = useCallback(
    (id: SectionId) => {
      setActiveSection(id);
      scrollTo(`#${id}`, { duration: 1.05 });

      if (typeof window !== "undefined") {
        const nextHash = `#${id}`;
        if (window.location.hash !== nextHash) {
          window.history.pushState(null, "", nextHash);
        }
      }
    },
    [scrollTo]
  );

  return { activeSection, setActiveSection, scrollToSection };
}
