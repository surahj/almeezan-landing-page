"use client";

import { getImageProps } from "next/image";
import { useEffect, useRef, useState, type CSSProperties } from "react";
import { m, useReducedMotion } from "motion/react";

type Slide = { src: string; portrait: string; alt: string };

const HOLD_MS = 7000;
const FADE_S = 1.8;

/**
 * Art-directed slide: phones get a 9:16 crop, larger screens the wide frame,
 * so object-cover never has to magnify a sliver of a landscape photo.
 */
function SlideImage({
  slide,
  first,
  style,
  onLoaded,
}: {
  slide: Slide;
  first: boolean;
  style: CSSProperties;
  onLoaded: () => void;
}) {
  const common = { alt: slide.alt, fill: true as const, sizes: "100vw", quality: 90 };
  const {
    props: { srcSet: wideSrcSet },
  } = getImageProps({ ...common, src: slide.src });
  const {
    props: { srcSet: portraitSrcSet, alt, ...rest },
  } = getImageProps({ ...common, src: slide.portrait });

  return (
    <picture>
      <source media="(min-width: 768px)" srcSet={wideSrcSet} sizes="100vw" />
      <source srcSet={portraitSrcSet} sizes="100vw" />
      <img
        {...rest}
        alt={alt}
        loading="eager"
        fetchPriority={first ? "high" : "low"}
        ref={(el) => {
          if (el?.complete) onLoaded();
        }}
        onLoad={onLoaded}
        className="object-cover kenburns"
        style={{ ...rest.style, ...style }}
      />
    </picture>
  );
}

/**
 * Full-bleed crossfading slideshow for the hero.
 * - never advances to a frame that hasn't finished downloading
 * - the incoming frame fades in ON TOP of the still-visible outgoing one,
 *   so there is never a blank moment between slides
 * - each frame keeps the looping Ken Burns breathe, phase-offset
 * Reduced-motion users get the first frame only.
 */
export function CinematicSlides({ slides }: { slides: readonly Slide[] }) {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const loadedRef = useRef<boolean[]>([]);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (reduceMotion || slides.length < 2) return;
    const t = setInterval(() => {
      setIndex((i) => {
        const next = (i + 1) % slides.length;
        if (!loadedRef.current[next]) return i; // hold until the frame is ready
        setPrev(i);
        return next;
      });
    }, HOLD_MS);
    return () => clearInterval(t);
  }, [reduceMotion, slides.length]);

  return (
    <>
      {slides.map((slide, i) => (
        <m.div
          key={slide.src}
          className="absolute inset-0"
          style={{ zIndex: i === index ? 2 : i === prev ? 1 : 0 }}
          initial={false}
          animate={{ opacity: i === index ? 1 : 0 }}
          transition={
            i === index
              ? { duration: FADE_S, ease: "easeInOut" }
              : // outgoing frame stays painted beneath the incoming fade,
                // then snaps off once it is fully covered
                { duration: 0, delay: FADE_S + 0.2 }
          }
        >
          {/* Phase-offset so no two frames breathe in sync */}
          <SlideImage
            slide={slide}
            first={i === 0}
            style={{ animationDelay: `${i * -6}s` }}
            onLoaded={() => {
              loadedRef.current[i] = true;
            }}
          />
        </m.div>
      ))}
    </>
  );
}
