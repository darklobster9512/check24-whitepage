## Plan

Neues Favicon, Titel & Beschreibung passend zur CHECK24-Bonus-Info-Seite.

### 1. Favicon generieren
- `imagegen` (premium, transparent) → `public/favicon.png`, 512×512
- Motiv: quadratisches Markenzeichen im CHECK24-Stil — gelbes Quadrat mit weißem großem "24", darüber kleiner blauer "check"-Schriftzug; klar & lesbar bei 16 px.
- Alte Referenz in `src/routes/__root.tsx` (`/favicon.svg`) ersetzen durch `{ rel: "icon", type: "image/png", href: "/favicon.png" }`.
- `public/favicon.svg` löschen.

### 2. Titel & Beschreibung aktualisieren
`src/routes/index.tsx`:
- Titel: **„CHECK24 200 €-Bonus Österreich 2026 – Aktion, Ablauf & Frist"**
- Description: **„Alle Infos zur CHECK24 200 €-Bonus-Aktion in Österreich 2026: Teilnahme, Voraussetzungen, Ablauf und Einsendefrist bis 01.08.2026."**
- `og:title` / `og:description` entsprechend synchron.

`src/routes/__root.tsx`:
- `og:site_name` bleibt „CHECK24 Bonus-Info".

### Hinweis
Keine sonstigen Änderungen an Inhalten, Farben oder Layout.