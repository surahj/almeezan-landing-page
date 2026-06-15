"use client";

import { getImageProps } from "next/image";
import { useRef, useEffect, useCallback } from "react";
import { m, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { site } from "@/content/site";

type Slide = { src: string; portrait: string; alt: string };

const SPEED = 0.4; // px per frame at 60fps
const GAP = 16; // px — matches gap-4

function GalleryImage({ slide, index }: { slide: Slide; index: number }) {
  const common = { alt: slide.alt, fill: true as const, sizes: "100vw", quality: 90 };
  const { props: { srcSet: wideSrcSet } } = getImageProps({ ...common, src: slide.src });
  const { props: { srcSet: portraitSrcSet, alt, ...rest } } = getImageProps({ ...common, src: slide.portrait });

  return (
    <picture className="relative block shrink-0 w-[72vw] sm:w-[55vw] md:w-[38vw] lg:w-[28vw] aspect-[3/4] overflow-hidden snap-center">
      <source media="(min-width: 768px)" srcSet={wideSrcSet} sizes="38vw" />
      <source srcSet={portraitSrcSet} sizes="72vw" />
      <img
        {...rest}
        alt={alt}
        loading={index < 3 ? "eager" : "lazy"}
        className="object-cover w-full h-full transition-transform duration-700 hover:scale-105"
        style={rest.style}
      />
      <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-char/40 to-transparent" />
    </picture>
  );
}

/** Desktop: a continuously scrolling marquee of images driven by rAF. */
function DesktopMarquee({ slides }: { slides: readonly Slide[] }) {
  const reduceMotion = useReducedMotion();
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);

  // Calculate total width of one set of slides to know when to loop
  const getTrackWidth = useCallback(() => {
    if (!trackRef.current) return 0;
    const children = Array.from(trackRef.current.children) as HTMLElement[];
    const half = Math.floor(children.length / 2);
    return children.slice(0, half).reduce((sum, el) => sum + el.offsetWidth + GAP, 0);
  }, []);

  useAnimationFrame(() => {
    if (paused.current || reduceMotion) return;
    const trackWidth = getTrackWidth();
    if (trackWidth === 0) return;
    const next = x.get() - SPEED;
    x.set(next <= -trackWidth ? 0 : next);
  });

  if (reduceMotion) {
    return (
      <div className="flex gap-4 overflow-hidden">
        {slides.map((slide, i) => (
          <GalleryImage key={slide.src} slide={slide} index={i} />
        ))}
      </div>
    );
  }

  const doubled = [...slides, ...slides];

  return (
    <div
      className="w-full overflow-hidden cursor-grab active:cursor-grabbing"
      onPointerEnter={() => { paused.current = true; }}
      onPointerLeave={() => { paused.current = false; }}
    >
      <m.div
        ref={trackRef}
        style={{ x }}
        className="flex gap-4 will-change-transform"
      >
        {doubled.map((slide, i) => (
          <GalleryImage key={`${slide.src}-${i}`} slide={slide} index={i} />
        ))}
      </m.div>
    </div>
  );
}

/** Mobile: horizontal scroll-snap strip. */
function MobileStrip({ slides }: { slides: readonly Slide[] }) {
  return (
    <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden px-5 sm:px-6">
      {slides.map((slide, i) => (
        <GalleryImage key={slide.src} slide={slide} index={i} />
      ))}
      {/* Right-edge padding element */}
      <div className="shrink-0 w-5 sm:w-6" aria-hidden />
    </div>
  );
}

export function Gallery() {
  const slides = site.hero.backdrops;

  return (
    <section aria-label="Food gallery" className="relative bg-parchment py-16 md:py-20 overflow-hidden">
      {/* Heading */}
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 mb-8 md:mb-10">
        <p className="eyebrow text-ember">From the grill</p>
      </div>

      {/* Desktop marquee */}
      <div className="hidden md:block">
        <DesktopMarquee slides={slides} />
      </div>

      {/* Mobile snap strip */}
      <div className="md:hidden -mx-0">
        <MobileStrip slides={slides} />
      </div>
    </section>
  );
}
