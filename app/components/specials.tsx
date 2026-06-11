"use client";

import Image from "next/image";
import { m } from "motion/react";
import { site, menuItems } from "@/content/site";
import { Reveal } from "./motion/reveal";

export function Specials() {
  const { specials } = site;
  const familyItems = menuItems.filter((m) => m.category === "family");

  return (
    <section id="specials" className="relative bg-char text-parchment py-20 md:py-36 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--saffron), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <Reveal className="grid grid-cols-12 gap-8 md:gap-10 mb-14 md:mb-20">
          <div className="col-span-12 md:col-span-7 min-w-0">
            <p className="eyebrow text-saffron">{specials.eyebrow}</p>
            <h2 className="display mt-5 md:mt-6 text-[clamp(2.2rem,6vw,5.5rem)] wrap-break-word">
              {specials.title.split(" ")[0]}{" "}
              <span className="display-italic text-saffron">
                {specials.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-8 min-w-0">
            <p className="text-[1rem] md:text-[1.02rem] leading-[1.7] md:leading-[1.75] text-parchment/70">
              {specials.sub}
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {familyItems.map((item, i) => (
            <Reveal
              key={item.id}
              delay={i * 0.12}
              className={`min-w-0 ${i === 1 ? "md:mt-12" : ""}`}
            >
            <m.article
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 320, damping: 26 }}
              className="group relative overflow-hidden bg-char-soft/30 border border-parchment/10"
            >
              <div className="relative aspect-4/3 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {item.serves && (
                  <div className="absolute top-4 left-4 bg-parchment text-char px-3 py-1.5">
                    <p className="eyebrow">{item.serves}</p>
                  </div>
                )}
              </div>
              <div className="p-6 sm:p-7">
                <div className="flex items-baseline justify-between gap-3">
                  <h3 className="display text-2xl sm:text-3xl wrap-break-word">{item.name}</h3>
                  <span className="display text-xl sm:text-2xl text-saffron tabular-nums whitespace-nowrap">
                    ${item.price}
                  </span>
                </div>
                <p className="mt-4 text-[0.92rem] sm:text-[0.93rem] leading-relaxed text-parchment/70">
                  {item.description}
                </p>
                {item.ingredients && (
                  <div className="mt-5 pt-4 border-t border-parchment/10">
                    <p className="eyebrow text-saffron/80 mb-2">Includes</p>
                    <p className="text-[0.85rem] leading-relaxed text-parchment/70">
                      {item.ingredients}
                    </p>
                  </div>
                )}
              </div>
            </m.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
