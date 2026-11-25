"use client";

import React, { useEffect, useRef } from "react";

const CURSOR_PATH =
  "M0 0h1v1H0zM0 1h2v1H0zM0 2h3v1H0zM0 3h4v1H0zM0 4h5v1H0zM0 5h6v1H0zM0 6h7v1H0zM0 7h6v1H0zM0 8h3v1H0zM4 8h2v1H4zM0 9h2v1H0zM4 9h2v1H4zM4 10h2v1H4z";

type CursorMode = "default" | "link" | "card" | "hidden";

export function PixelCursor() {
  const [enabled, setEnabled] = React.useState(false);
  const [mode, setMode] = React.useState<CursorMode>("default");
  const [hidden, setHidden] = React.useState(true);
  const [pressed, setPressed] = React.useState(false);
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const finePointer = window.matchMedia("(pointer: fine)");
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!finePointer.matches || reducedMotion.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("pixel-cursor-active");

    let frame = 0;
    let lastMode: CursorMode = "default";

    const resolveMode = (element: Element | null): CursorMode => {
      if (!element || !element.closest) return "default";
      if (element.closest("input, textarea, select, [contenteditable='true']")) {
        return "hidden";
      }
      if (element.closest("[data-cursor='card']")) return "card";
      if (
        element.closest(
          "a, button, [role='button'], summary, label[for], [data-cursor='link']"
        )
      ) {
        return "link";
      }
      return "default";
    };

    const onMove = (event: PointerEvent) => {
      target.current = { x: event.clientX, y: event.clientY };
      setHidden(false);

      const element = event.target as Element | null;
      const nextMode = resolveMode(element);
      if (nextMode !== lastMode) {
        lastMode = nextMode;
        setMode(nextMode);
      }
    };

    const tick = () => {
      const cursor = cursorRef.current;
      if (cursor) {
        current.current.x += (target.current.x - current.current.x) * 0.55;
        current.current.y += (target.current.y - current.current.y) * 0.55;
        cursor.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;
      }

      trailRefs.current.forEach((trail, index) => {
        if (!trail) return;
        const speed = 0.32 - index * 0.07;
        const previousX = Number(trail.dataset.x || target.current.x);
        const previousY = Number(trail.dataset.y || target.current.y);
        const x = previousX + (target.current.x - previousX) * speed;
        const y = previousY + (target.current.y - previousY) * speed;
        trail.dataset.x = String(x);
        trail.dataset.y = String(y);
        trail.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });

      frame = requestAnimationFrame(tick);
    };

    const onLeave = () => setHidden(true);
    const onDown = () => setPressed(true);
    const onUp = () => setPressed(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.documentElement.classList.remove("pixel-cursor-active");
    };
  }, []);

  if (!enabled) return null;

  const isHidden = hidden || mode === "hidden";

  return (
    <>
      {[0, 1, 2].map((index) => (
        <span
          key={index}
          ref={(node) => {
            trailRefs.current[index] = node;
          }}
          aria-hidden="true"
          className="pixel-cursor-trail"
          style={{
            width: 6 - index,
            height: 6 - index,
            backgroundColor:
              index === 0 ? "#E3A23B" : index === 1 ? "#C1542D" : "#2D7770",
            opacity: isHidden ? 0 : 0.7 - index * 0.18,
            transition: "opacity 120ms linear",
          }}
        />
      ))}

      <div
        ref={cursorRef}
        aria-hidden="true"
        className="pixel-cursor"
        style={{
          opacity: isHidden ? 0 : 1,
          transition: "opacity 100ms linear",
        }}
      >
        <div
          style={{
            transform: `scale(${pressed ? 0.82 : mode === "link" ? 1.15 : 1})`,
            transformOrigin: "2px 2px",
            transition: "transform 90ms steps(2, end)",
            color: mode === "link" ? "#C1542D" : "#E3A23B",
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 11 11"
            fill="none"
            shapeRendering="crispEdges"
            style={{ filter: "drop-shadow(1px 1px 0 #191C18)" }}
          >
            <path d={CURSOR_PATH} fill="currentColor" />
          </svg>
        </div>

        {mode === "card" && (
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              left: 8,
              top: 8,
              width: 30,
              height: 30,
              border: "2px solid #E3A23B",
              boxShadow: "2px 2px 0 0 #191C18",
              pointerEvents: "none",
            }}
          >
            <span
              style={{
                position: "absolute",
                left: -6,
                top: -6,
                width: 4,
                height: 4,
                background: "#E3A23B",
              }}
            />
            <span
              style={{
                position: "absolute",
                right: -6,
                bottom: -6,
                width: 4,
                height: 4,
                background: "#E3A23B",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}
