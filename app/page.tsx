import { Nav } from "./components/nav";
import { Hero } from "./components/hero";
import { About } from "./components/about";
import { Menu } from "./components/menu";
import { Specials } from "./components/specials";
import { Visit } from "./components/visit";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="flex-1">
        <Hero />
        <About />
        <Menu />
        <Specials />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
