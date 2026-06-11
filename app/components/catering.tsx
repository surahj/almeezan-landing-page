"use client";

import Image from "next/image";
import { m } from "motion/react";
import { site } from "@/content/site";
import { Reveal, RevealFade } from "./motion/reveal";

const frameVariants = {
  rest: { x: 16, y: 16 },
  hovered: {
    x: 6,
    y: 6,
    transition: { type: "spring" as const, stiffness: 260, damping: 22 },
  },
};

const imageVariants = {
  rest: { scale: 1 },
  hovered: {
    scale: 1.05,
    transition: { duration: 0.7, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] },
  },
};

export function Catering() {
  const { catering } = site;
  const words = catering.title.split(" ");
  return (
    <section id="catering" className="relative bg-moss text-parchment overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 -right-32 w-[520px] h-[520px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--saffron), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 py-20 md:py-32 grid grid-cols-12 gap-10 md:gap-12 items-center">
        {/* Copy */}
        <Reveal className="col-span-12 lg:col-span-6 min-w-0">
          <p className="eyebrow text-saffron">{catering.eyebrow}</p>
          <h2 className="display mt-5 md:mt-6 text-[clamp(2.4rem,6.5vw,6rem)] wrap-break-word">
            {words.slice(0, -1).join(" ")}{" "}
            <span className="display-italic text-saffron">{words.slice(-1)}</span>
          </h2>
          <p className="mt-6 md:mt-8 max-w-lg text-[1rem] md:text-[1.05rem] leading-[1.75] text-parchment/80">
            {catering.sub}
          </p>

          <div className="mt-8 md:mt-10 flex flex-wrap items-center gap-4">
            <a
              href={catering.primaryCta.href}
              className="group inline-flex items-center gap-3 bg-parchment text-char px-7 py-4 rounded-full hover:bg-saffron transition-colors duration-300"
            >
              <span className="text-[0.92rem] font-medium tracking-wide">
                {catering.primaryCta.label}
              </span>
              <span className="w-6 h-px bg-char group-hover:w-10 transition-all duration-300" />
            </a>
            <a
              href={catering.secondaryCta.href}
              className="text-[0.92rem] font-medium tracking-wide text-parchment border-b border-parchment/40 pb-1 hover:border-saffron hover:text-saffron transition-colors"
            >
              {catering.secondaryCta.label} →
            </a>
          </div>

          <p className="mt-8 eyebrow text-parchment/60">{catering.note}</p>
        </Reveal>

        {/* Figure with spring offset frame */}
        <RevealFade className="col-span-12 lg:col-span-5 lg:col-start-8 min-w-0" delay={0.15}>
          <m.div
            className="relative cursor-default"
            initial="rest"
            whileHover="hovered"
            animate="rest"
          >
            <m.div
              aria-hidden
              variants={frameVariants}
              className="absolute inset-0 border border-parchment/30"
            />
            <div className="relative aspect-4/3 overflow-hidden">
              <m.div variants={imageVariants} className="absolute inset-0">
                <Image
                  src={catering.image}
                  alt="A catered Afghan spread laid across a full table"
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                />
              </m.div>
            </div>
          </m.div>
        </RevealFade>
      </div>
    </section>
  );
}
