import { site } from "@/content/site";
import { RevealStagger, StaggerItem } from "./motion/reveal";

export function Footer() {
  const { footer, brand } = site;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-char text-parchment py-12 sm:py-16 border-t border-parchment/10">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-12 gap-8 md:gap-10 md:items-end">
          <div className="col-span-12 md:col-span-5 min-w-0">
            <div className="flex items-baseline gap-2 flex-wrap">
              <span className="display text-3xl sm:text-4xl md:text-5xl">{brand.name}</span>
              <span className="display-italic text-saffron text-xl sm:text-2xl md:text-3xl">
                {brand.suffix.toLowerCase()}
              </span>
            </div>
            <p className="mt-4 text-parchment/60 max-w-sm text-[0.92rem] sm:text-[0.95rem] leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          <nav className="col-span-6 md:col-span-3 md:col-start-7 flex flex-col gap-0 min-w-0">
            <p className="eyebrow text-saffron mb-3">Visit</p>
            <RevealStagger className="flex flex-col gap-2">
              {footer.links.map((l) => (
                <StaggerItem key={l.label}>
                  <a
                    href={l.href}
                    className="text-[0.92rem] sm:text-[0.95rem] text-parchment/80 hover:text-saffron transition-colors w-fit"
                  >
                    {l.label}
                  </a>
                </StaggerItem>
              ))}
            </RevealStagger>
          </nav>

          <nav className="col-span-6 md:col-span-2 md:col-start-11 flex flex-col gap-0 min-w-0">
            <p className="eyebrow text-saffron mb-3">Follow</p>
            <RevealStagger className="flex flex-col gap-2">
              {footer.social.map((l) => (
                <StaggerItem key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-[0.92rem] sm:text-[0.95rem] text-parchment/80 hover:text-saffron transition-colors w-fit"
                  >
                    {l.label}
                  </a>
                </StaggerItem>
              ))}
            </RevealStagger>
          </nav>
        </div>

        <div className="mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-parchment/10 flex flex-wrap items-center justify-between gap-3 sm:gap-4 text-[0.78rem] sm:text-[0.82rem] text-parchment/50">
          <p>
            © {year} {brand.name} {brand.suffix}. {footer.rights}
          </p>
          <p className="display-italic text-saffron/80">Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
