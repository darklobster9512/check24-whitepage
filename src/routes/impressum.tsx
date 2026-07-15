import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/klimabonus/LegalLayout";
import { useEffect, useRef } from "react";
import "@/lib/fbq";

export const Route = createFileRoute("/impressum")({
  head: () => ({
    meta: [
      { title: "Impressum – CHECK24 Bonus-Info" },
      { name: "description", content: "Impressumsangaben und Offenlegung der Informationsseite zur CHECK24 200 €-Bonus-Aktion gemäß § 5 ECG und § 25 MedienG." },
      { property: "og:title", content: "Impressum – CHECK24 Bonus-Info" },
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
        Diese Website ist eine unabhängige Informationsseite zur CHECK24
        200 €-Bonus-Aktion und keine offizielle Seite der CHECK24-Gruppe.
        Verbindliche Teilnahmebedingungen, die Prüfung der Voraussetzungen
        sowie die Auszahlung des Bonus erfolgen ausschließlich über CHECK24
        Österreich bzw. die offiziellen Kanäle der CHECK24-Gruppe.
      </p>

      <h2>Anbieter der Aktion</h2>
      <p>
        Anbieterin der CHECK24 200 €-Bonus-Aktion ist die CHECK24
        Vergleichsportal GmbH bzw. die für den österreichischen Markt
        zuständige Konzerngesellschaft. Details zu Anschrift,
        Firmenbuchnummer, Aufsichtsbehörde und Kontakt entnehmen Sie bitte
        dem Impressum von CHECK24:
      </p>
      <ul>
        <li>Web: <a href="https://www.check24.at" target="_blank" rel="noreferrer noopener">www.check24.at</a></li>
        <li>Aktions- und Teilnahmebedingungen: über die offizielle CHECK24-Website</li>
      </ul>

      <h2>Offenlegung nach § 25 MedienG</h2>
      <p>
        Blattlinie: Bereitstellung sachlicher, allgemein verständlicher
        Informationen zur CHECK24 200 €-Bonus-Aktion in Österreich. Über
        diese Website werden keine Anmeldungen zur Aktion entgegengenommen
        und keine Auszahlungen abgewickelt.
      </p>

      <h2>Haftungsausschluss</h2>
      <p>
        Alle Inhalte werden mit größter Sorgfalt erstellt. Für Richtigkeit,
        Vollständigkeit und Aktualität wird jedoch keine Gewähr übernommen.
        Bei Abweichungen zwischen den Angaben auf dieser Seite und den
        offiziellen Veröffentlichungen von CHECK24 gelten ausschließlich
        die offiziellen Veröffentlichungen von CHECK24.
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
