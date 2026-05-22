import { site } from "@/content/site";

export function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 fade" style={{ animationDelay: "0.1s" }}>
      <div className="mx-auto max-w-[1400px] px-6 md:px-10 pt-6">
        <nav className="flex items-center justify-between rounded-full border border-char/10 bg-parchment/80 backdrop-blur-md px-5 md:px-7 py-3 shadow-[0_1px_0_rgba(27,19,12,0.04)]">
          <a href="#top" className="flex items-baseline gap-2">
            <span className="display text-[1.4rem] text-char">{site.brand.name}</span>
            <span className="display-italic text-[0.95rem] text-ember">{site.brand.suffix.toLowerCase()}</span>
          </a>
          <div className="hidden md:flex items-center gap-8 text-[0.82rem] text-char-soft">
            <a href="#menu" className="hover:text-ember transition-colors">Menu</a>
            <a href="#specials" className="hover:text-ember transition-colors">Family Dinners</a>
            <a href="#about" className="hover:text-ember transition-colors">Our Table</a>
            <a href="#visit" className="hover:text-ember transition-colors">Visit</a>
          </div>
          <a
            href={site.visit.telUrl}
            className="text-[0.78rem] font-medium tracking-wide bg-char text-parchment px-4 py-2 rounded-full hover:bg-ember transition-colors"
          >
            <span className="hidden md:inline">Call </span>
            {site.visit.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
