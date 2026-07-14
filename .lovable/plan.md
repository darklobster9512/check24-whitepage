## Plan

### 1. CTA-Button → Impressum-Redirect
`src/components/klimabonus/CtaButton.tsx`: Aus `<button>` einen `<Link to="/impressum">` (TanStack) machen, gleiche Styles, gleiche Varianten. Bestehende Aufrufe (`Hero`, evtl. finaler CTA) funktionieren unverändert weiter.

### 2. Rechtstexte auf CHECK24 umstellen
Alle Volksbank-/Investment-Check-Referenzen ersetzen durch CHECK24 200 €-Bonus-Aktion.

**`src/routes/impressum.tsx`**
- Meta (title, description, og:*) auf „Impressum – CHECK24 Bonus-Info"
- Abschnitt „Hinweis zur Trägerschaft": unabhängige Informationsseite zur CHECK24 200 €-Bonus-Aktion, keine offizielle Seite der CHECK24-Gruppe
- „Anbieter der Bankdienstleistungen" → **„Anbieter der Aktion"**: Aktion wird von CHECK24 Vergleichsportal GmbH betrieben; Links auf `https://www.check24.at`
- „Offenlegung nach § 25 MedienG": Blattlinie zur CHECK24 200 €-Bonus-Aktion
- Haftungsausschluss: Verweise auf offizielle CHECK24-Veröffentlichungen; Anlage-/Fondsrisiko-Satz entfernen (nicht anwendbar)
- Urheberrecht: unverändert (allgemein)

**`src/routes/datenschutz.tsx`**
- Meta auf CHECK24 Bonus-Info
- „Zweck der Verarbeitung": Bereitstellung allgemeiner Informationen zur CHECK24 200 €-Bonus-Aktion; keine Anmeldung/Teilnahme/Auszahlung über diese Website
- Rest (Logfiles, Cookies, Meta-Pixel, Rechte, Beschwerdestelle) inhaltlich unverändert

**`src/routes/barrierefreiheit.tsx`**
- Meta + Einleitung auf CHECK24 Bonus-Info (statt Volksbank Investment-Check)
- Rest unverändert

### 3. Kleinigkeiten
- `SiteFooter.tsx`: Import/Verwendung von `VolksbankMark` beibehalten (rein visuell, wird schon als CHECK24-Mark genutzt) — kein Umbenennen, keine Logikänderung.

Keine Änderungen an Farben, Layout, Home-Content oder Komponentenstruktur außerhalb der genannten Dateien.