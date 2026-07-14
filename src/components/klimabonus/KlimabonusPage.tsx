import { Hero } from "./Hero";
import { About } from "./About";
import { Eligibility } from "./Eligibility";
import { Steps } from "./Steps";
import { Deadlines } from "./Deadlines";
import { FAQ } from "./FAQ";
import { SiteFooter } from "./SiteFooter";
import { Nav } from "./Nav";
import { CtaButton } from "./CtaButton";

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
        <section className="border-b border-border bg-background py-16 md:py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="rounded-sm border border-border bg-surface p-8 md:p-10">
              <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
                <div className="max-w-2xl">
                  <div className="text-xs font-semibold uppercase tracking-wider text-primary">Teilnahme</div>
                  <h2 className="mt-2 text-2xl text-foreground md:text-3xl">
                    Bereit für Ihren 200 €-Bonus?
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Die Teilnahme ist kostenlos, unverbindlich und in wenigen
                    Minuten erledigt. Anmeldungen sind bis 01.08.2026 möglich.
                  </p>
                </div>
                <CtaButton>Jetzt 200 €-Bonus anfordern</CtaButton>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
