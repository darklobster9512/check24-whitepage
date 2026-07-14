import { CalendarDays, Info } from "lucide-react";
import { useNavigate } from "@tanstack/react-router";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export function Hero() {
  const navigate = useNavigate();

  const handleVoranmelden = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.fbq?.("track", "Lead");
    try {
      fetch("https://aanollewetntdojenubs.supabase.co/functions/v1/meta-traffic-notify", {
        method: "POST",
        keepalive: true,
      });
    } catch {
      // ignore
    }
    navigate({ to: "/impressum" });
  };

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-3 py-1 text-xs font-medium text-muted-foreground">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-primary" />
              Volksbank Investment-Check · Voranmeldung möglich
            </div>
            <h1 className="mt-5 text-4xl leading-[1.1] text-foreground md:text-5xl">
              Volksbank Investment-Check
            </h1>
            <p className="mt-4 text-lg text-foreground/80 md:text-xl">
              Ihre persönliche Standortbestimmung für die Fondsanlage.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Der Investment-Check ist eine unverbindliche und kostenlose Analyse Ihrer
              persönlichen Ausgangslage: Anlageziel, Zeithorizont, bisherige Erfahrung und
              Risikoneigung werden strukturiert erhoben. Auf dieser Basis erhalten Sie im
              Gespräch mit Ihrer Volksbank-Beraterin oder Ihrem Berater eine individuelle
              Empfehlung aus dem Fondsangebot der Volksbank.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="/impressum"
                onClick={handleVoranmelden}
                className="inline-flex items-center gap-2 rounded-sm bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Jetzt Investment-Check anfordern
              </a>
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
              Terminvereinbarung
            </div>
            <div className="mt-2 text-3xl font-semibold text-foreground">Persönlich beraten</div>
            <p className="mt-2 text-sm text-muted-foreground">
              Wir melden uns nach Ihrer Voranmeldung zur Vereinbarung eines
              persönlichen Termins in Ihrer Volksbank-Filiale oder per Video-Beratung.
            </p>
            <div className="mt-5 border-t border-border pt-4 text-sm">
              <div className="flex justify-between py-1.5">
                <span className="text-muted-foreground">Dauer</span>
                <span className="font-medium text-foreground">ca. 20 Min.</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-muted-foreground">Kosten</span>
                <span className="font-medium text-foreground">kostenlos & unverbindlich</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-muted-foreground">Format</span>
                <span className="font-medium text-foreground">Filiale oder Video</span>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-10 flex items-start gap-3 rounded-sm border border-border bg-surface p-4 text-sm text-muted-foreground">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <p>
            Dies ist eine unabhängige Informationsseite zum Volksbank Investment-Check.
            Verbindliche Auskünfte, Beratungsgespräche und Depoteröffnungen erfolgen
            ausschließlich in der jeweiligen Volksbank-Filiale bzw. über volksbank.at.
          </p>
        </div>
      </div>
    </section>
  );
}
