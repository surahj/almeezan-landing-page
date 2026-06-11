"use client";

import { m, useScroll, useSpring } from "motion/react";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 });

  return (
    <m.div
      aria-hidden
      className="fixed top-0 inset-x-0 z-[60] h-[2px] bg-ember origin-left"
      style={{ scaleX }}
    />
  );
}
