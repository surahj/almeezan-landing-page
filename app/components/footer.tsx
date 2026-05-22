import { site } from "@/content/site";

export function Footer() {
  const { footer, brand } = site;
  const year = new Date().getFullYear();
  return (
    <footer className="bg-char text-parchment py-16 border-t border-parchment/10">
      <div className="mx-auto max-w-[1400px] px-6 md:px-10">
        <div className="grid grid-cols-12 gap-10 items-end">
          <div className="col-span-12 md:col-span-5">
            <div className="flex items-baseline gap-2">
              <span className="display text-4xl md:text-5xl">{brand.name}</span>
              <span className="display-italic text-saffron text-2xl md:text-3xl">
                {brand.suffix.toLowerCase()}
              </span>
            </div>
            <p className="mt-4 text-parchment/60 max-w-sm text-[0.95rem] leading-relaxed">
              {brand.tagline}
            </p>
          </div>

          <nav className="col-span-6 md:col-span-3 md:col-start-7 flex flex-col gap-2">
            <p className="eyebrow text-saffron mb-2">Visit</p>
            {footer.links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[0.95rem] text-parchment/80 hover:text-saffron transition-colors w-fit"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <nav className="col-span-6 md:col-span-2 md:col-start-11 flex flex-col gap-2">
            <p className="eyebrow text-saffron mb-2">Follow</p>
            {footer.social.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noreferrer"
                className="text-[0.95rem] text-parchment/80 hover:text-saffron transition-colors w-fit"
              >
                {l.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-16 pt-8 border-t border-parchment/10 flex flex-wrap items-center justify-between gap-4 text-[0.82rem] text-parchment/50">
          <p>
            © {year} {brand.name} {brand.suffix}. {footer.rights}
          </p>
          <p className="display-italic text-saffron/80">Built with care.</p>
        </div>
      </div>
    </footer>
  );
}
