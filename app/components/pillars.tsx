import Image from "next/image";
import { site } from "@/content/site";
import { Reveal, HoverLift } from "./motion/reveal";

const tones: Record<string, string> = {
  ember: "bg-ember text-parchment",
  saffron: "bg-saffron text-char",
  moss: "bg-moss text-parchment",
  char: "bg-char text-parchment",
};

export function Pillars() {
  const { pillars } = site;
  const words = pillars.title.split(" ");
  return (
    <section className="relative bg-parchment py-20 md:py-32 overflow-hidden grain">
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <Reveal className="max-w-2xl mb-12 md:mb-20">
          <p className="eyebrow text-ember">{pillars.eyebrow}</p>
          <h2 className="display mt-5 md:mt-6 text-char text-[clamp(2.2rem,5.5vw,4.8rem)] wrap-break-word">
            {words.slice(0, -2).join(" ")}{" "}
            <span className="display-italic text-ember">
              {words.slice(-2).join(" ")}
            </span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {pillars.items.map((p, i) => (
            <Reveal
              key={p.title}
              delay={i * 0.1}
              className={`min-w-0 ${i % 2 === 1 ? "lg:mt-12" : ""}`}
            >
              <HoverLift>
                <article className="group shadow-[0_0_0_rgba(27,19,12,0)] hover:shadow-[0_24px_50px_-20px_rgba(27,19,12,0.45)] transition-shadow duration-500">
                  <div className="relative aspect-3/4 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Warm wash sweeps in on hover */}
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-char/55 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                    <div className={`absolute top-4 left-4 px-2.5 py-1.5 ${tones[p.tone]}`}>
                      <span className="eyebrow">{p.n}</span>
                    </div>
                  </div>
                  <div className={`p-6 sm:p-7 ${tones[p.tone]}`}>
                    <h3 className="display text-2xl sm:text-[1.7rem]">{p.title}</h3>
                    <p className="mt-3 text-[0.92rem] leading-relaxed opacity-85">
                      {p.text}
                    </p>
                  </div>
                </article>
              </HoverLift>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
