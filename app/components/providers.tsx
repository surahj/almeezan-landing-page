"use client";

import { useEffect, type ReactNode } from "react";
import { LazyMotion, MotionConfig, domMax } from "motion/react";
import Lenis from "lenis";

/**
 * Client shell for the whole app:
 * - Lenis buttery smooth scrolling (skipped for reduced-motion users)
 * - LazyMotion with domMax so `m.*` components stay tree-shaken
 * - MotionConfig honours the user's reduced-motion preference
 *
 * Children passed through remain Server Components.
 */
export function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.115,
      anchors: { offset: -88 }, // clear the fixed pill nav
    });
    return () => lenis.destroy();
  }, []);

  return (
    <LazyMotion strict features={domMax}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
