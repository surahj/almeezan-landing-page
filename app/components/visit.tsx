import { site } from "@/content/site";
import { Reveal, RevealFade, RevealStagger, StaggerItem } from "./motion/reveal";

export function Visit() {
  const { visit } = site;
  return (
    <section id="visit" className="relative bg-parchment py-20 md:py-36 overflow-hidden grain">
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] rounded-full opacity-[0.07] pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--ember), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10 grid grid-cols-12 gap-8 md:gap-10">
        {/* Left — heading & address */}
        <Reveal className="col-span-12 lg:col-span-7 min-w-0">
          <p className="eyebrow text-ember">{visit.eyebrow}</p>
          <h2 className="display mt-5 md:mt-6 text-char text-[clamp(2.2rem,7vw,6.5rem)] wrap-break-word">
            {visit.title.split(" ").slice(0, 1).join(" ")}{" "}
            <span className="display-italic">
              {visit.title.split(" ").slice(1).join(" ")}
            </span>
          </h2>
          <p className="mt-6 md:mt-8 max-w-md text-[1rem] md:text-[1.05rem] leading-[1.7] md:leading-[1.75] text-char-soft">
            {visit.sub}
          </p>

          {/* Big hours block — items stagger in */}
          <RevealStagger className="mt-12 md:mt-16 inline-flex flex-col gap-1 border border-char/20 px-6 py-5 sm:px-8 sm:py-7">
            <StaggerItem>
              <p className="eyebrow text-ember">{visit.hoursLabel}</p>
            </StaggerItem>
            <StaggerItem>
              <p className="display mt-3 text-char text-5xl md:text-6xl">
                11<span className="display-italic text-ember">—</span>11
              </p>
            </StaggerItem>
            <StaggerItem>
              <p className="mt-2 text-[0.92rem] text-char-soft">11:00 AM to 11:00 PM</p>
            </StaggerItem>
          </RevealStagger>
        </Reveal>

        {/* Right — contact card */}
        <RevealFade className="col-span-12 lg:col-span-4 lg:col-start-9 lg:mt-8 min-w-0" delay={0.15}>
          <div className="bg-char text-parchment p-6 sm:p-9 md:p-11">
            <p className="eyebrow text-saffron">The address</p>
            <p className="display mt-4 text-[1.65rem] sm:text-3xl md:text-4xl leading-tight wrap-break-word">
              {visit.address.line1}
              <br />
              <span className="display-italic text-saffron text-xl sm:text-2xl md:text-3xl">
                {visit.address.line2}
              </span>
            </p>

            <RevealStagger className="mt-8 md:mt-10 space-y-5">
              <StaggerItem>
                <p className="eyebrow text-parchment/60">Phone</p>
                <a
                  href={visit.telUrl}
                  className="display mt-2 block text-xl sm:text-2xl hover:text-saffron transition-colors"
                >
                  {visit.phone}
                </a>
              </StaggerItem>

              <StaggerItem className="pt-4 flex flex-col gap-3">
                <a
                  href={visit.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-parchment text-char px-5 sm:px-6 py-3.5 sm:py-4 hover:bg-saffron transition-colors duration-300 group"
                >
                  <span className="text-[0.9rem] sm:text-[0.92rem] font-medium tracking-wide">
                    Open in Maps
                  </span>
                  <span className="w-5 h-px bg-char group-hover:w-9 transition-all duration-300" />
                </a>
                <a
                  href={visit.telUrl}
                  className="inline-flex items-center justify-center gap-3 border border-parchment/40 px-5 sm:px-6 py-3.5 sm:py-4 hover:border-saffron hover:text-saffron transition-colors"
                >
                  <span className="text-[0.9rem] sm:text-[0.92rem] font-medium tracking-wide">
                    Call to order
                  </span>
                </a>
              </StaggerItem>
            </RevealStagger>
          </div>
        </RevealFade>
      </div>
    </section>
  );
}
