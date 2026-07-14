import { Hero } from "./Hero";
import { About } from "./About";
import { Eligibility } from "./Eligibility";
import { Steps } from "./Steps";
import { Deadlines } from "./Deadlines";
import { FAQ } from "./FAQ";
import { SiteFooter } from "./SiteFooter";
import { Nav } from "./Nav";

export function KlimabonusPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Eligibility />
        <Steps />
        <Deadlines />
        <FAQ />
      </main>
      <SiteFooter />
    </div>
  );
}