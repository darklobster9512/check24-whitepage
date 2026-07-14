import { CalendarDays, Info } from "lucide-react";
import { CtaButton } from "./CtaButton";

export function Hero() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
              CHECK24 Bonus-Aktion · Österreich
            </div>
            <h1 className="mt-5 text-4xl leading-[1.1] text-foreground md:text-5xl">
              CHECK24 200 €-Bonus
            </h1>
            <p className="mt-4 text-lg text-foreground/80 md:text-xl">
              Sonderaktion für Neu- und Bestandskund:innen mit Wohnsitz in Österreich.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Im Rahmen einer zeitlich begrenzten Aktion vergibt CHECK24 Österreich
              einen Bonus von 200 € an teilnahmeberechtigte Personen. Die Teilnahme
              ist kostenlos und unverbindlich. Die Auszahlung erfolgt nach
              erfolgreicher Verifizierung auf ein österreichisches Bankkonto.
              Teilnahmeschluss ist der 01.08.2026.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <CtaButton>Jetzt 200 €-Bonus anfordern</CtaButton>
              <a
                href="#ueberblick"
                className="inline-flex items-center gap-2 rounded-sm border border-border bg-background px-5 py-2.5 text-sm font-medium text-foreground transition hover:bg-surface"
              >
                Überblick lesen
              </a>
            </div>
          </div>

          <aside className="rounded-sm border border-border bg-surface p-6">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <CalendarDays className="h-4 w-4" />
              Aktion im Überblick
            </div>
            <div className="mt-2 text-3xl font-semibold text-foreground">
              200 € Bonus
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Für Neu- und Bestandskund:innen mit Hauptwohnsitz in Österreich.
              Auszahlung nach erfolgreicher Verifizierung.
            </p>
            <div className="mt-5 border-t border-border pt-4 text-sm">
              <div className="flex justify-between py-1.5">
                <span className="text-muted-foreground">Bonus-Höhe</span>
                <span className="font-medium text-foreground">200 €</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-muted-foreground">Kosten</span>
                <span className="font-medium text-foreground">kostenlos & unverbindlich</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-muted-foreground">Frist</span>
                <span className="font-medium text-foreground">01.08.2026</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-sm border border-border bg-surface p-4 text-sm text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p>
            Unabhängige Informationsseite zur CHECK24 200 €-Bonus-Aktion.
            Verbindliche Teilnahmebedingungen und die Auszahlung erfolgen
            ausschließlich über CHECK24 Österreich.
          </p>
        </div>
      </div>
    </section>
  );
}
