import Image from "next/image";
import { site } from "@/content/site";

export function Specials() {
  const { specials } = site;
  return (
    <section id="specials" className="relative bg-char text-parchment py-28 md:py-36 overflow-hidden">
      {/* Saffron glow */}
      <div
        aria-hidden
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] rounded-full opacity-[0.08] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--saffron), transparent 60%)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-12 gap-10 mb-20">
          <div className="col-span-12 md:col-span-7">
            <p className="eyebrow text-saffron">{specials.eyebrow}</p>
            <h2 className="display mt-6 text-[clamp(2.6rem,6vw,5.5rem)]">
              {specials.title.split(" ")[0]}{" "}
              <span className="display-italic text-saffron">
                {specials.title.split(" ").slice(1).join(" ")}
              </span>
            </h2>
          </div>
          <div className="col-span-12 md:col-span-4 md:col-start-9 md:pt-8">
            <p className="text-[1.02rem] leading-[1.75] text-parchment/70">
              {specials.sub}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {specials.items.map((item, i) => (
            <article
              key={item.name}
              className={`group relative overflow-hidden bg-char-soft/30 border border-parchment/10 transition-transform hover:-translate-y-1 duration-500 ${
                i === 1 ? "md:mt-12" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(min-width: 768px) 30vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4 bg-parchment text-char px-3 py-1.5">
                  <p className="eyebrow">{item.serves}</p>
                </div>
              </div>
              <div className="p-7">
                <div className="flex items-baseline justify-between">
                  <h3 className="display text-3xl">{item.name}</h3>
                  <span className="display text-2xl text-saffron tabular-nums">
                    ${item.price}
                  </span>
                </div>
                <ul className="mt-5 space-y-2">
                  {item.includes.map((inc) => (
                    <li
                      key={inc}
                      className="flex items-baseline gap-3 text-[0.92rem] text-parchment/75"
                    >
                      <span className="text-ember">·</span>
                      {inc}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
