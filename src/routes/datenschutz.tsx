import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "@/components/klimabonus/LegalLayout";

export const Route = createFileRoute("/datenschutz")({
  head: () => ({
    meta: [
      { title: "Datenschutzerklärung – CHECK24 Bonus-Info" },
      { name: "description", content: "Informationen zur Verarbeitung personenbezogener Daten auf der Informationsseite zur CHECK24 200 €-Bonus-Aktion gemäß DSGVO." },
      { property: "og:title", content: "Datenschutzerklärung – CHECK24 Bonus-Info" },
      { property: "og:description", content: "Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO." },
      { property: "og:url", content: "/datenschutz" },
    ],
    links: [{ rel: "canonical", href: "/datenschutz" }],
  }),
  component: Page,
});

function Page() {
  return (
    <LegalLayout title="Datenschutzerklärung" updated="Juli 2026">
      <p>
        Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges Anliegen.
        Die Verarbeitung personenbezogener Daten erfolgt ausschließlich auf
        Grundlage der Datenschutz-Grundverordnung (DSGVO) sowie des
        österreichischen Datenschutzgesetzes (DSG).
      </p>

      <h2>Verantwortlicher</h2>
      <p>
        Verantwortlicher für die Datenverarbeitung im Sinne des Art. 4 Z 7 DSGVO
        ist der Betreiber dieser Informationsseite. Kontaktdaten entnehmen Sie
        bitte dem <a href="/impressum">Impressum</a>.
      </p>

      <h2>Zweck der Verarbeitung</h2>
      <p>
        Diese Website dient ausschließlich der Bereitstellung allgemeiner
        Informationen zur CHECK24 200 €-Bonus-Aktion. Über diese Website
        werden keine Anmeldungen zur Aktion entgegengenommen, keine
        Auszahlungen abgewickelt und keine Benutzerkonten geführt.
      </p>

      <h2>Erhobene Daten</h2>
      <h3>Server-Logfiles</h3>
      <p>
        Beim Aufruf dieser Website werden vom Hosting-Provider technisch
        notwendige Zugriffsdaten in Server-Logfiles gespeichert. Erhoben werden:
      </p>
      <ul>
        <li>anonymisierte IP-Adresse</li>
        <li>Datum und Uhrzeit des Zugriffs</li>
        <li>aufgerufene Seite</li>
        <li>übertragene Datenmenge</li>
        <li>verwendeter Browser und Betriebssystem</li>
      </ul>
      <p>
        Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO zur
        Gewährleistung eines stabilen, sicheren Betriebs. Eine Zusammenführung
        mit anderen Daten oder eine personenbezogene Auswertung erfolgt nicht.
      </p>

      <h3>Cookies</h3>
      <p>
        Es werden ausschließlich technisch notwendige Cookies eingesetzt. Zur
        Reichweitenmessung im Zusammenhang mit Werbekampagnen kann das Meta-Pixel
        (Facebook) eingesetzt werden. Nähere Informationen dazu finden Sie in
        den Datenschutzhinweisen von Meta.
      </p>

      <h2>Speicherdauer</h2>
      <p>
        Server-Logdaten werden für maximal 30 Tage gespeichert und danach
        automatisch gelöscht.
      </p>

      <h2>Ihre Rechte</h2>
      <p>Ihnen stehen nach der DSGVO folgende Rechte zu:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
      </ul>

      <h2>Beschwerderecht</h2>
      <p>
        Sie haben das Recht, sich bei der österreichischen Datenschutzbehörde
        über die Verarbeitung Ihrer personenbezogenen Daten zu beschweren:
      </p>
      <ul>
        <li>Österreichische Datenschutzbehörde</li>
        <li>Barichgasse 40–42, 1030 Wien</li>
        <li>Telefon: +43 1 52 152-0</li>
        <li>E-Mail: dsb@dsb.gv.at</li>
        <li>Web: <a href="https://www.dsb.gv.at" target="_blank" rel="noreferrer noopener">www.dsb.gv.at</a></li>
      </ul>
    </LegalLayout>
  );
}
