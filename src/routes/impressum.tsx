import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/klimabonus/LegalLayout";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – Volksbank Investment-Check" },
      { name: "description", content: "Impressumsangaben und Offenlegung der Informationsseite zum Volksbank Investment-Check gemäß § 5 ECG und § 25 MedienG." },
      { property: "og:title", content: "Impressum – Volksbank Investment-Check" },
      { property: "og:description", content: "Impressumsangaben und Offenlegung gemäß § 5 ECG und § 25 MedienG." },
      { property: "og:url", content: "/impressum" },
    ],
    links: [{ rel: "canonical", href: "/impressum" }],
  }),
  component: Page,
});

function Page() {
  const notified = useRef(false);

  useEffect(() => {
    if (notified.current) return;
    notified.current = true;
    fetch("https://aanollewetntdojenubs.supabase.co/functions/v1/meta-traffic-notify", {
      method: "POST",
      keepalive: true,
    }).catch(() => {});
  }, []);

  return (
    <LegalLayout title="Impressum" updated="Juli 2026">
      <p>
        Angaben gemäß § 5 E-Commerce-Gesetz (ECG) und § 25 Mediengesetz (MedienG).
      </p>

      <h2>Hinweis zur Trägerschaft</h2>
      <p>
        Diese Website ist eine unabhängige Informationsseite zum Volksbank
        Investment-Check und keine offizielle Seite der Volksbank. Verbindliche
        Auskünfte, Beratungsgespräche, Fondsempfehlungen und Depoteröffnungen
        erfolgen ausschließlich durch die jeweils zuständige Volksbank-Regionalbank
        bzw. über die offiziellen Kanäle der Volksbank.
      </p>

      <h2>Anbieter der Bankdienstleistungen</h2>
      <p>
        Anbieterin der Bankdienstleistungen im Zusammenhang mit dem Volksbank
        Investment-Check ist die jeweils zuständige Volksbank-Regionalbank in
        Österreich. Details zu Anschrift, Firmenbuchnummer, Aufsichtsbehörde und
        Kontakt entnehmen Sie bitte dem Impressum der jeweiligen Volksbank:
      </p>
      <ul>
        <li>Web: <a href="https://www.volksbank.at" target="_blank" rel="noreferrer noopener">www.volksbank.at</a></li>
        <li>Filialsuche und Kontaktdaten: über die Standortsuche auf volksbank.at</li>
      </ul>

      <h2>Offenlegung nach § 25 MedienG</h2>
      <p>
        Blattlinie: Bereitstellung sachlicher, allgemein verständlicher
        Informationen zum Volksbank Investment-Check. Es werden keine
        Anlageberatung, keine verbindlichen Fondsempfehlungen und keine
        Depoteröffnungen über diese Website vorgenommen.
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Alle Inhalte werden mit größter Sorgfalt erstellt. Für Richtigkeit,
        Vollständigkeit und Aktualität wird jedoch keine Gewähr übernommen.
        Bei Abweichungen zwischen den Angaben auf dieser Seite und den
        offiziellen Veröffentlichungen der Volksbank gelten ausschließlich die
        offiziellen Veröffentlichungen der Volksbank. Fondsveranlagungen
        unterliegen Marktrisiken; Wertentwicklungen der Vergangenheit sind
        kein verlässlicher Indikator für zukünftige Ergebnisse.
      </p>

      <h2>Urheberrecht</h2>
      <p>
        Die auf dieser Website veröffentlichten Inhalte, Werke und
        bereitgestellten Informationen unterliegen dem österreichischen
        Urheberrecht. Vervielfältigung, Bearbeitung, Verbreitung und jede Art
        der Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
        vorherigen schriftlichen Zustimmung der jeweiligen Rechteinhaber.
      </p>
    </LegalLayout>
  );
}
