import Image from "next/image";
import { site } from "@/content/site";
import { Reveal, RevealFade, RevealStagger, StaggerItem } from "./motion/reveal";

export function About() {
  const { about } = site;
  return (
    <section id="about" className="relative bg-parchment py-20 md:py-36 overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-10 items-start">
        {/* Left — figure */}
        <RevealFade className="col-span-12 lg:col-span-5 relative min-w-0">
          <div className="group relative aspect-4/5 overflow-hidden rounded-[2px]">
            <Image
              src={about.figureImage}
              alt="An Afghan table set with pulao, salad and naan"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          {/* Stat overlay */}
          <div className="absolute -bottom-6 sm:-bottom-8 right-2 sm:-right-4 lg:-right-10 bg-char text-parchment px-5 py-5 sm:px-7 sm:py-6 max-w-[180px] sm:max-w-[200px]">
            <p className="display-tight text-4xl sm:text-5xl text-saffron">{about.smallStat.value}</p>
            <p className="eyebrow text-parchment/70 mt-2">{about.smallStat.label}</p>
          </div>
        </RevealFade>

        {/* Right — copy */}
        <Reveal className="col-span-12 lg:col-span-6 lg:col-start-7 pt-10 lg:pt-12 min-w-0">
          <p className="eyebrow text-ember">{about.eyebrow}</p>
          <h2 className="display mt-5 md:mt-6 text-char text-[clamp(2rem,5vw,4.5rem)] wrap-break-word">
            {about.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="display-italic text-ember">
              {about.title.split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <div className="mt-8 md:mt-10 space-y-5 md:space-y-6 text-[1rem] md:text-[1.05rem] leading-[1.7] md:leading-[1.75] text-char-soft max-w-xl">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Detail strip */}
          <RevealStagger className="mt-10 md:mt-12 grid grid-cols-3 gap-4 sm:gap-6 max-w-xl">
            {[
              { k: "Charcoal", v: "Grilled" },
              { k: "Daily", v: "Fresh" },
              { k: "Halal", v: "Certified" },
            ].map((d) => (
              <StaggerItem key={d.k} className="border-t border-char/15 pt-4 min-w-0">
                <p className="eyebrow text-char-soft">{d.k}</p>
                <p className="display text-xl sm:text-2xl mt-2 text-char">{d.v}</p>
              </StaggerItem>
            ))}
          </RevealStagger>
        </Reveal>
      </div>
    </section>
  );
}
