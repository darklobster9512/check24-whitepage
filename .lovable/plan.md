## Ziel

Die bestehende Volksbank-Investment-Landingpage inhaltlich auf die **CHECK24 200 €-Verlosung (Österreich)** umstellen – **Struktur, Ton, Ruhe und Layout der aktuellen Seite bleiben 1:1 erhalten**. Also: sachlich, redaktionell, keine Countdown-Zahlen, keine Testimonials, keine Marketing-Ausrufezeichen, keine Produktkacheln. Nur der zentrale CTA-Button wird ergänzt (ohne Redirect / ohne Handler).

## Design-Richtung

Bestehendes Layout und Komponentengerüst der aktuellen Seite bleibt (Nav → Hero → About → Eligibility → Steps → Deadlines → FAQ → SiteFooter). Nur Farbtokens und Schriften werden angepasst:

- Palette (in `src/styles.css` gemappt):
  - `--background: #ffffff`
  - `--foreground: #1a1a1a`
  - `--primary: #003d8f` (CHECK24-Blau, Buttons/Links/Marke)
  - `--accent: #ffcc00` (nur für kleine Highlights: „200 €"-Betrag, Kicker-Punkt, Info-Icons)
  - Dezente Grautöne für `--muted`, `--border`, `--surface`
- Typografie: **Libre Baskerville** (700) für Überschriften, **IBM Plex Sans** (400/500/600) für Fließtext/UI. Google-Fonts-`<link>` in `src/routes/__root.tsx` austauschen; Familien in `@theme` als `--font-display` / `--font-sans` registrieren.
- Keine strukturellen Redesigns, keine neuen Sektionen, kein Countdown, keine Teilnehmerzahl, keine Testimonials.

## Inhaltliche Umstellung (Sektion für Sektion)

Bestehende Dateien in `src/components/klimabonus/` werden **inhaltlich neu befüllt**, Struktur/Props bleiben. Ordner darf gleich heißen (kein Rename nötig, Imports bleiben stabil).

1. **`Nav.tsx`**
   - Marke: „CHECK24 · Bonus-Info" (statt Volksbank).
   - Topbar-Text: „Information zur CHECK24 200 €-Bonus-Aktion · Österreich".
   - Sprungmarken bleiben (Überblick, Für wen, Ablauf, Konditionen, FAQ).
   - `VolksbankMark` → generisches Markenkürzel „C24" in Primärfarbe.

2. **`Hero.tsx`**
   - Kicker: „CHECK24 Bonus-Aktion · Österreich".
   - H1: „CHECK24 200 €-Bonus".
   - Sub: „Sonderaktion für Neu- und Bestandskund:innen mit Wohnsitz in Österreich."
   - Fließtext (redaktionell, ruhig): Was die Aktion ist, dass sie kostenlos und unverbindlich ist, dass die Auszahlung nach Verifizierung auf ein österreichisches Bankkonto erfolgt, dass die Frist der 01.08.2026 ist.
   - **Primärer CTA-Button „Jetzt 200 €-Bonus anfordern"** – `<button type="button">`, **kein `onClick`, kein `href`, kein Navigate, kein Tracking, kein `fetch`**. Sekundärer Textlink „Überblick lesen" (Anker `#ueberblick`) bleibt.
   - Rechte Info-Karte (aside) bleibt strukturell erhalten, Inhalte angepasst: „Bonus-Höhe 200 €", „Teilnahme kostenlos & unverbindlich", „Frist 01.08.2026".
   - Info-Kasten unten: „Unabhängige Informationsseite zur CHECK24 200 €-Aktion. Verbindliche Teilnahmebedingungen und Auszahlung erfolgen über CHECK24 Österreich."
   - Bestehendes Meta-Pixel-Lead-Tracking und `meta-traffic-notify`-Fetch **entfernen**.

3. **`About.tsx`** – „Überblick": zwei bis drei sachliche Absätze über die Aktion (Dankeschön-Aktion, Zielgruppe, Ablaufprinzip, Frist).

4. **`Eligibility.tsx`** – „Für wen": vier Punkte
   - Hauptwohnsitz in Österreich
   - Mindestalter 18 Jahre
   - Gültige österreichische IBAN
   - Teilnahme bis 01.08.2026

5. **`Steps.tsx`** – „Ablauf": drei nummerierte Schritte, sachlich formuliert
   1. Persönliche Daten angeben
   2. Identität und Bankverbindung verifizieren
   3. Bestätigung erhalten, Bonus wird überwiesen

6. **`Deadlines.tsx`** – „Konditionen": Definitionsliste
   - Bonus-Höhe: 200 €
   - Kosten: keine
   - Teilnahmeschluss: 01.08.2026
   - Auszahlung: nach erfolgreicher Verifizierung per Überweisung
   Kein Countdown-Timer.

7. **`FAQ.tsx`** – ca. 5 Fragen, redaktionell:
   - Wer kann teilnehmen?
   - Was kostet die Teilnahme?
   - Wann wird der Bonus ausgezahlt?
   - Welche Daten werden benötigt?
   - Was passiert nach dem 01.08.2026?

8. **`SiteFooter.tsx`** – Wortlaut aktualisieren (CHECK24 statt Volksbank), Links auf Impressum/Datenschutz/Barrierefreiheit bleiben.

9. **`KlimabonusPage.tsx`** – bleibt als Wrapper unverändert.

10. **Abschluss-CTA** – am Ende der Seite (unter FAQ, vor Footer) eine kleine, ruhige Sektion „Bereit für Ihren Bonus?" mit derselben CTA-Button-Komponente. Ebenfalls ohne Handler.

## Technische Änderungen

- **`src/routes/index.tsx`**
  - Head-Meta neu: Title „CHECK24 200 €-Bonus für Österreich – Information zur Aktion", passende `description`, `og:title`, `og:description`, `canonical`.
  - Inline **Meta-Pixel-`<script>`-Block entfernen**.
- **`src/routes/__root.tsx`**
  - `og:site_name`: „CHECK24 Bonus-Info".
  - Google-Fonts-`<link>` auf `Libre+Baskerville:wght@400;700` + `IBM+Plex+Sans:wght@400;500;600;700` umstellen.
- **`src/styles.css`**
  - `@theme`/Token-Werte an neue Palette anpassen; `--font-display`, `--font-sans` setzen.
  - shadcn-Variablen (`--primary`, `--accent`, `--background`, `--foreground`, `--muted`, `--border`, `--secondary`) auf die neuen Werte mappen, damit vorhandene Komponenten (Buttons, Cards) konsistent bleiben.
- **CTA-Button**: kleine gemeinsame Komponente `src/components/klimabonus/CtaButton.tsx`, in Hero und Abschluss-Sektion verwendet. `<button type="button" …>`. Kommentar im Code: „Zielaktion wird später ergänzt".
- **Keine neuen Routen**, **keine Cloud**, **kein Formular**, **kein Tracking**, **kein Redirect**.
- Alte `Hero.tsx`-Logik (`useNavigate`, `window.fbq`, `fetch(...)`) und der zugehörige globale `fbq`-Type-Declare werden entfernt.

## Ausdrücklich nicht enthalten

- Kein Countdown-Widget, keine „38.400 Teilnehmer"-Zeile, keine Testimonials, keine Produktkacheln (Hotels/Strom/Handy/…), keine Marketing-Ausrufezeichen.
- Keine Änderungen an Inhalten der Legal-Routen (`/impressum`, `/datenschutz`, `/barrierefreiheit`).
- Kein Backend, kein Analytics, kein E-Mail-Versand.
