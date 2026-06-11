"use client";

import { useState } from "react";
import { m, AnimatePresence } from "motion/react";
import { site } from "@/content/site";
import { Reveal, RevealFade } from "./motion/reveal";

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <RevealFade>
      <div className="border-b border-char/15">
        <button
          type="button"
          aria-expanded={open}
          onClick={onToggle}
          className="flex w-full cursor-pointer items-baseline justify-between gap-6 py-6 text-left"
        >
          <h3 className="display text-xl sm:text-2xl text-char leading-snug wrap-break-word">
            {q}
          </h3>
          <m.span
            aria-hidden
            animate={{ rotate: open ? 45 : 0 }}
            transition={{ type: "spring", stiffness: 340, damping: 28 }}
            className="display shrink-0 text-2xl text-ember"
          >
            +
          </m.span>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <m.div
              key="answer"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.2, 0.7, 0.2, 1] }}
              className="overflow-hidden"
            >
              <p className="pb-7 max-w-2xl text-[0.95rem] leading-relaxed text-char-soft">
                {a}
              </p>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </RevealFade>
  );
}

export function Faq() {
  const { faq } = site;
  const words = faq.title.split(" ");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="relative bg-parchment-deep py-20 md:py-32">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-10">
        <Reveal className="col-span-12 lg:col-span-4 min-w-0">
          <p className="eyebrow text-ember">{faq.eyebrow}</p>
          <h2 className="display mt-5 md:mt-6 text-char text-[clamp(2rem,4.5vw,3.8rem)] wrap-break-word">
            {words.slice(0, -1).join(" ")}{" "}
            <span className="display-italic text-ember">{words.slice(-1)}</span>
          </h2>
          <p className="mt-6 max-w-sm text-[0.97rem] leading-[1.7] text-char-soft">
            {faq.sub}
          </p>
        </Reveal>

        <div className="col-span-12 lg:col-span-7 lg:col-start-6 min-w-0 border-t border-char/15">
          {faq.items.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              open={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
