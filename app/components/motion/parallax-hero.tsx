"use client";

import { Fragment, useRef, type PointerEvent, type ReactNode } from "react";
import { m, useScroll, useSpring, useTransform, useReducedMotion } from "motion/react";

type ParallaxHeroProps = {
  /** Full-bleed backdrop (e.g. next/image with fill, or a slideshow). */
  background: ReactNode;
  /** Gradient grades / vignettes layered over the backdrop. */
  overlay?: ReactNode;
  /** Foreground copy block, pinned to the bottom. */
  content: ReactNode;
  /** Optional extras (scroll cue etc.) rendered unparallaxed. */
  cue?: ReactNode;
};

/**
 * Cinematic hero choreography:
 * - the backdrop drifts slower than the page on scroll (classic parallax)
 * - it also leans gently toward the cursor (pointer parallax)
 * - the copy lifts away and fades as you scroll past
 * Server-rendered children are slotted in via props.
 */
export function ParallaxHero({ background, overlay, content, cue }: ParallaxHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-3%", "4%"]);
  const fgY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  // Pointer parallax — the scene leans a few px toward the cursor
  const mx = useSpring(0, { stiffness: 45, damping: 18, mass: 0.6 });
  const my = useSpring(0, { stiffness: 45, damping: 18, mass: 0.6 });

  function onPointerMove(e: PointerEvent<HTMLDivElement>) {
    if (reduceMotion || e.pointerType !== "mouse" || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * -14);
    my.set(((e.clientY - r.top) / r.height - 0.5) * -9);
  }

  function onPointerLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <div
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      className="relative h-svh min-h-[640px] overflow-hidden bg-char"
    >
      {/* Overscanned just enough that the parallax drift never exposes an edge —
          every extra % here is wasted image resolution, so keep it tight.
          Each slot is keyed: these elements are created by the caller, so React
          treats them as list children and asks for keys. */}
      <m.div
        key="backdrop"
        className="absolute inset-x-0 -top-[5%] -bottom-[5%]"
        style={reduceMotion ? undefined : { y: bgY }}
      >
        <m.div
          className="absolute inset-0 scale-[1.02]"
          style={reduceMotion ? undefined : { x: mx, y: my }}
        >
          {background}
        </m.div>
      </m.div>
      <Fragment key="overlay">{overlay}</Fragment>
      <m.div
        key="copy"
        className="absolute inset-x-0 bottom-0"
        style={reduceMotion ? undefined : { y: fgY, opacity: fade }}
      >
        {content}
      </m.div>
      <Fragment key="cue">{cue}</Fragment>
    </div>
  );
}
