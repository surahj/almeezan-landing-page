import Image from "next/image";
import { site } from "@/content/site";

export function Hero() {
  const { hero, brand } = site;
  return (
    <section id="top" className="relative overflow-hidden grain bg-parchment pt-32 md:pt-36 pb-24">
      {/* Decorative ember half-circle */}
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[520px] h-[520px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(circle at 30% 30%, var(--ember), transparent 70%)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 -left-24 w-[360px] h-[360px] rounded-full opacity-[0.10]"
        style={{ background: "radial-gradient(circle, var(--saffron), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-6 md:gap-10 items-end">
        {/* Left — text */}
        <div className="col-span-12 lg:col-span-7 relative z-10">
          <p className="eyebrow text-ember rise" style={{ animationDelay: "0.15s" }}>
            {hero.eyebrow}
          </p>

          <h1 className="display-tight mt-6 text-char text-[clamp(3.2rem,9vw,8.5rem)]">
            <span className="block rise" style={{ animationDelay: "0.25s" }}>
              {hero.headline[0]}
            </span>
            <span className="block rise" style={{ animationDelay: "0.40s" }}>
              <span className="display-italic">{hero.headline[1]}</span>
            </span>
            <span className="block rise" style={{ animationDelay: "0.55s" }}>
              {hero.headline[2]}
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl text-[1.02rem] md:text-[1.08rem] leading-relaxed text-char-soft rise"
            style={{ animationDelay: "0.75s" }}
          >
            {hero.sub}
          </p>

          <div
            className="mt-10 flex flex-wrap items-center gap-4 rise"
            style={{ animationDelay: "0.9s" }}
          >
            <a
              href={hero.primaryCta.href}
              className="group inline-flex items-center gap-3 bg-char text-parchment px-7 py-4 rounded-full hover:bg-ember transition-colors duration-300"
            >
              <span className="text-[0.92rem] font-medium tracking-wide">
                {hero.primaryCta.label}
              </span>
              <span className="w-6 h-px bg-parchment group-hover:w-10 transition-all duration-300" />
            </a>
            <a
              href={hero.secondaryCta.href}
              className="text-[0.92rem] font-medium tracking-wide text-char border-b border-char/40 pb-1 hover:border-ember hover:text-ember transition-colors"
            >
              {hero.secondaryCta.label} →
            </a>
          </div>

          {/* Vertical "halal · since" stamp */}
          <div
            className="mt-16 flex items-center gap-6 rise"
            style={{ animationDelay: "1.05s" }}
          >
            <div className="h-px w-12 bg-char/30" />
            <span className="eyebrow text-char-soft">
              100% Halal · {brand.establishedHint}
            </span>
          </div>
        </div>

        {/* Right — image collage */}
        <div className="col-span-12 lg:col-span-5 relative h-[440px] md:h-[560px] lg:h-[640px]">
          <div
            className="absolute right-0 top-4 bottom-0 w-[78%] overflow-hidden rounded-[2px] fade"
            style={{ animationDelay: "0.6s" }}
          >
            <Image
              src={hero.showcase.large}
              alt="Sultani Kabob platter"
              fill
              sizes="(min-width: 1024px) 40vw, 80vw"
              className="object-cover"
              priority
            />
          </div>
          <div
            className="absolute left-0 top-0 w-[44%] aspect-3/4 overflow-hidden rounded-[2px] shadow-2xl fade drift"
            style={{ animationDelay: "0.85s" }}
          >
            <Image
              src={hero.showcase.smallTop}
              alt="Tandoori salmon"
              fill
              sizes="(min-width: 1024px) 20vw, 40vw"
              className="object-cover"
            />
          </div>
          <div
            className="absolute left-[8%] bottom-0 w-[40%] aspect-square overflow-hidden rounded-[2px] shadow-xl fade"
            style={{ animationDelay: "1s" }}
          >
            <Image
              src={hero.showcase.smallBottom}
              alt="Lamb kabob"
              fill
              sizes="(min-width: 1024px) 18vw, 36vw"
              className="object-cover"
            />
          </div>

          {/* Decorative price tag overlay */}
          <div
            className="absolute right-[6%] top-[12%] bg-parchment border border-char rotate-6 px-4 py-3 fade"
            style={{ animationDelay: "1.2s" }}
          >
            <p className="eyebrow text-ember">House platter</p>
            <p className="display text-2xl mt-1">$17<span className="text-base align-top">25</span></p>
          </div>
        </div>
      </div>

      {/* Marquee — menu highlights */}
      <div className="relative mt-24 md:mt-32 border-y border-char/10 bg-char text-parchment overflow-hidden">
        <div className="flex whitespace-nowrap py-5 scroll-x">
          {[...hero.ticker, ...hero.ticker].map((item, i) => (
            <span
              key={i}
              className="display-italic text-3xl md:text-4xl px-8 flex items-center gap-8"
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
