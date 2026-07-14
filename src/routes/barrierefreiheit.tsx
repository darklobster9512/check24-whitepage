import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/klimabonus/LegalLayout";

export const Route = createFileRoute("/barrierefreiheit")({
  head: () => ({
    meta: [
      { title: "Barrierefreiheitserklärung – Volksbank Investment-Check" },
      { name: "description", content: "Barrierefreiheitserklärung der Informationsseite zum Volksbank Investment-Check nach WZG und WCAG 2.1 AA." },
      { property: "og:title", content: "Barrierefreiheitserklärung – Volksbank Investment-Check" },
      { property: "og:description", content: "Erklärung zur digitalen Barrierefreiheit nach WZG und WCAG 2.1 AA." },
      { property: "og:url", content: "/barrierefreiheit" },
    ],
    links: [{ rel: "canonical", href: "/barrierefreiheit" }],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalLayout title="Barrierefreiheitserklärung" updated="Juli 2026">
      <p>
        Der Betreiber dieser Informationsseite zum Volksbank Investment-Check
        ist bemüht, seine Website im Einklang mit dem österreichischen
        Web-Zugänglichkeits-Gesetz (WZG) in Umsetzung der Richtlinie (EU) 2016/2102
        barrierefrei zugänglich zu machen.
      </p>

      <h2>Konformitätsstatus</h2>
      <p>
        Diese Website ist mit den Web Content Accessibility Guidelines (WCAG)
        2.1 in der Konformitätsstufe AA <strong>weitgehend konform</strong>.
        Weitgehende Konformität bedeutet, dass einzelne Inhalte oder
        Funktionen die Anforderungen aus den nachstehend genannten Gründen
        möglicherweise noch nicht vollständig erfüllen.
      </p>

      <h2>Nicht barrierefreie Inhalte</h2>
      <p>Folgende Inhalte sind aus den angeführten Gründen nicht barrierefrei:</p>
      <ul>
        <li>
          Einzelne dekorative Grafiken enthalten möglicherweise noch keine
          Alternativtexte.
        </li>
        <li>
          Für einzelne PDF-Dokumente, sofern sie von Drittstellen verlinkt
          werden, kann die Barrierefreiheit nicht garantiert werden.
        </li>
      </ul>

      <h2>Erstellung dieser Erklärung</h2>
      <p>
        Diese Erklärung wurde am 1. Juli 2026 auf Grundlage einer
        Selbstbewertung erstellt.
      </p>

      <h2>Feedback und Kontaktangaben</h2>
      <p>
        Wenn Ihnen Mängel bei der Einhaltung der Barrierefreiheitsanforderungen
        auffallen oder Sie Inhalte in einer barrierefreien Form benötigen,
        wenden Sie sich bitte an den Betreiber. Kontaktdaten entnehmen Sie
        dem <a href="/impressum">Impressum</a>.
      </p>

      <h2>Durchsetzungsverfahren</h2>
      <p>
        Wenn keine zufriedenstellende Antwort auf Ihre Rückmeldung erfolgt,
        können Sie sich an die zuständige Schlichtungsstelle beim
        Sozialministeriumservice wenden:
      </p>
      <ul>
        <li>Sozialministeriumservice – Schlichtungsstelle nach dem Behinderten­gleichstellungs­gesetz</li>
        <li>Babenbergerstraße 5, 1010 Wien</li>
        <li>Telefon: +43 1 588 31</li>
        <li>E-Mail: post.wien@sozialministeriumservice.at</li>
        <li>Web: <a href="https://www.sozialministeriumservice.at" target="_blank" rel="noreferrer noopener">www.sozialministeriumservice.at</a></li>
      </ul>
    </LegalLayout>
  );
}
