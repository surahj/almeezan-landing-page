import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { Pillars } from "./components/pillars";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Menu } from "./components/menu";
import { Specials } from "./components/specials";
import { Catering } from "./components/catering";
import { Faq } from "./components/faq";
import { Visit } from "./components/visit";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <Pillars />
        <About />
        <Gallery />
        <Menu />
        <Specials />
        <Catering />
        <Faq />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
