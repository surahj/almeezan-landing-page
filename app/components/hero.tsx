import { site } from "@/content/site";
import { ParallaxHero } from "./motion/parallax-hero";
import { CinematicSlides } from "./motion/cinematic-slides";

export function Hero() {
  const { hero, brand } = site;
  return (
    <section id="top" className="relative">
      <ParallaxHero
        background={<CinematicSlides slides={hero.backdrops} />}
        overlay={
          <>
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-char via-char/50 to-char/10"
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-char/60 via-transparent to-transparent"
            />
          </>
        }
        content={
          <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 pb-16 md:pb-24">
            <p className="eyebrow text-saffron rise" style={{ animationDelay: "0.2s" }}>
              {hero.eyebrow}
            </p>

            <h1 className="display-tight mt-5 md:mt-6 text-parchment text-[clamp(2.9rem,9vw,8.5rem)] wrap-break-word">
              <span className="block rise" style={{ animationDelay: "0.3s" }}>
                {hero.headline[0]}
              </span>
              <span className="block rise" style={{ animationDelay: "0.45s" }}>
                <span className="display-italic text-saffron">{hero.headline[1]}</span>
              </span>
              <span className="block rise" style={{ animationDelay: "0.6s" }}>
                {hero.headline[2]}
              </span>
            </h1>

            <p
              className="mt-6 md:mt-8 max-w-xl text-[1rem] md:text-[1.08rem] leading-relaxed text-parchment/85 rise"
              style={{ animationDelay: "0.8s" }}
            >
              {hero.sub}
            </p>

            <div
              className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 rise"
              style={{ animationDelay: "0.95s" }}
            >
              <a
                href={hero.primaryCta.href}
                className="group inline-flex items-center gap-3 bg-ember text-parchment px-7 py-4 rounded-full hover:bg-saffron hover:text-char transition-colors duration-300"
              >
                <span className="text-[0.92rem] font-medium tracking-wide">
                  {hero.primaryCta.label}
                </span>
                <span className="w-6 h-px bg-current group-hover:w-10 transition-all duration-300" />
              </a>
              <a
                href={hero.secondaryCta.href}
                className="text-[0.92rem] font-medium tracking-wide text-parchment border-b border-parchment/40 pb-1 hover:border-saffron hover:text-saffron transition-colors"
              >
                {hero.secondaryCta.label} →
              </a>
            </div>

            <div
              className="mt-10 md:mt-14 flex items-center gap-4 sm:gap-6 rise"
              style={{ animationDelay: "1.1s" }}
            >
              <div className="h-px w-12 bg-parchment/40" />
              <span className="eyebrow text-parchment/70">
                100% Halal · {brand.establishedHint}
              </span>
            </div>
          </div>
        }
        cue={
          <div
            aria-hidden
            className="absolute bottom-10 right-6 md:right-10 hidden md:flex flex-col items-center gap-3 fade"
            style={{ animationDelay: "1.4s" }}
          >
            <span className="eyebrow text-parchment/60 [writing-mode:vertical-rl]">Scroll</span>
            <div className="h-12 w-px bg-parchment/20 overflow-hidden">
              <div className="h-5 w-px bg-saffron cue" />
            </div>
          </div>
        }
      />

      {/* Marquee — menu highlights */}
      <div className="relative border-y border-char/10 bg-char text-parchment overflow-hidden">
        <div className="flex whitespace-nowrap py-4 md:py-5 scroll-x">
          {[...hero.ticker, ...hero.ticker].map((item, i) => (
            <span
              key={i}
              className="display-italic text-2xl md:text-4xl px-6 md:px-8 flex items-center gap-6 md:gap-8"
            >
              {item}
              <span className="text-ember">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
