import Image from "next/image";
import { site } from "@/content/site";

export function About() {
  const { about } = site;
  return (
    <section id="about" className="relative bg-parchment py-28 md:py-36">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 grid grid-cols-12 gap-10 items-start">
        {/* Left — figure */}
        <div className="col-span-12 lg:col-span-5 relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-[2px]">
            <Image
              src={about.figureImage}
              alt="A dish on the table at Al-Meezan"
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
          {/* Stat overlay */}
          <div className="absolute -bottom-8 -right-4 lg:-right-10 bg-char text-parchment px-7 py-6 max-w-[200px]">
            <p className="display-tight text-5xl text-saffron">{about.smallStat.value}</p>
            <p className="eyebrow text-parchment/70 mt-2">{about.smallStat.label}</p>
          </div>
        </div>

        {/* Right — copy */}
        <div className="col-span-12 lg:col-span-6 lg:col-start-7 pt-6 lg:pt-12">
          <p className="eyebrow text-ember">{about.eyebrow}</p>
          <h2 className="display mt-6 text-char text-[clamp(2.4rem,5vw,4.5rem)]">
            {about.title.split(" ").slice(0, -2).join(" ")}{" "}
            <span className="display-italic text-ember">
              {about.title.split(" ").slice(-2).join(" ")}
            </span>
          </h2>
          <div className="mt-10 space-y-6 text-[1.05rem] leading-[1.75] text-char-soft max-w-xl">
            {about.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          {/* Detail strip */}
          <div className="mt-12 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "Charcoal", v: "Grilled" },
              { k: "Daily", v: "Fresh" },
              { k: "Halal", v: "Certified" },
            ].map((d) => (
              <div key={d.k} className="border-t border-char/15 pt-4">
                <p className="eyebrow text-char-soft">{d.k}</p>
                <p className="display text-2xl mt-2 text-char">{d.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
