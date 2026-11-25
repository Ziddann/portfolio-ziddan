"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import Lenis from "lenis";

type ScrollTarget = string | number | HTMLElement;

interface ScrollOptions {
  offset?: number;
  immediate?: boolean;
  duration?: number;
}

interface SmoothScrollContextValue {
  lenis: Lenis | null;
  scrollTo: (target: ScrollTarget, options?: ScrollOptions) => void;
  stop: () => void;
  start: () => void;
}

const NAV_OFFSET = 92;
const SmoothScrollContext = createContext<SmoothScrollContextValue | null>(null);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const instanceRef = useRef<Lenis | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const teardown = () => {
      cancelAnimationFrame(frame);
      if (instanceRef.current) {
        instanceRef.current.destroy();
        instanceRef.current = null;
        setLenis(null);
      }
    };

    const setup = () => {
      if (media.matches) {
        teardown();
        return;
      }

      const instance = new Lenis({
        duration: 1.05,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        wheelMultiplier: 0.95,
        touchMultiplier: 1,
        lerp: 0.1,
      });

      instanceRef.current = instance;
      setLenis(instance);

      const raf = (time: number) => {
        instance.raf(time);
        frame = requestAnimationFrame(raf);
      };
      frame = requestAnimationFrame(raf);

      if (window.location.hash) {
        const hash = window.location.hash;
        window.setTimeout(() => {
          const element = document.querySelector(hash);
          if (element) {
            instance.scrollTo(element as HTMLElement, {
              offset: 0,
              immediate: true,
            });
          }
        }, 80);
      }
    };

    setup();

    const handleChange = () => setup();
    media.addEventListener("change", handleChange);

    const handlePopState = () => {
      const instance = instanceRef.current;
      const hash = window.location.hash;
      if (!instance) return;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          instance.scrollTo(element as HTMLElement, {
            offset: 0,
            immediate: true,
          });
        }
      } else {
        instance.scrollTo(0, { immediate: true });
      }
    };

    const handleAnchorClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.metaKey || event.ctrlKey || event.shiftKey) {
        return;
      }
      const target = event.target as Element | null;
      const anchor = target?.closest?.('a[href^="#"]') as HTMLAnchorElement | null;
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      if (!href || href === "#") return;

      const element = document.querySelector(href);
      if (!element) return;

      event.preventDefault();
      instanceRef.current?.scrollTo(element as HTMLElement, {
        offset: 0,
        duration: 1.1,
      });
      if (window.location.hash !== href) {
        window.history.pushState(null, "", href);
      }
    };

    window.addEventListener("popstate", handlePopState);
    document.addEventListener("click", handleAnchorClick);

    return () => {
      media.removeEventListener("change", handleChange);
      window.removeEventListener("popstate", handlePopState);
      document.removeEventListener("click", handleAnchorClick);
      teardown();
    };
  }, []);

  const scrollTo = useCallback(
    (target: ScrollTarget, options?: ScrollOptions) => {
      const instance = instanceRef.current;
      if (instance) {
        instance.scrollTo(target, {
          offset: options?.offset ?? 0,
          immediate: options?.immediate ?? false,
          duration: options?.duration ?? 1.1,
        });
        return;
      }

      const reduced =
        typeof window !== "undefined" &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const behavior: ScrollBehavior = reduced ? "auto" : "smooth";

      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior });
        return;
      }

      const element =
        typeof target === "string" ? document.querySelector(target) : target;
      if (element) {
        const top =
          element.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
        window.scrollTo({ top, behavior });
      }
    },
    []
  );

  const stop = useCallback(() => {
    instanceRef.current?.stop();
  }, []);

  const start = useCallback(() => {
    instanceRef.current?.start();
  }, []);

  return (
    <SmoothScrollContext.Provider value={{ lenis, scrollTo, stop, start }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

export function useSmoothScroll() {
  const context = useContext(SmoothScrollContext);
  if (!context) {
    throw new Error("useSmoothScroll must be used within SmoothScrollProvider");
  }
  return context;
}
