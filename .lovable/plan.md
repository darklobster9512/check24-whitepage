## Ziel

Die aktuell verwendete Schrift-Kombination **Libre Baskerville + IBM Plex Sans** wird entfernt und durch die **vorherige Volksbank-Schrift** ersetzt.

## Vorherige Schrift

Die Volksbank-Version dieser Seite hat für Überschriften und Fließtext **Inter** verwendet (Standard-System-Sans, wie in der ursprünglichen Landingpage). Damit sieht die Seite wieder ruhig, redaktionell und neutral aus – ohne den serifen-schweren Baskerville-Look.

## Änderungen

1. **`src/routes/__root.tsx`**
   - Google-Fonts-`<link>` von `Libre+Baskerville` + `IBM+Plex+Sans` zurück auf **`Inter:wght@400;500;600;700`** stellen.
   - `preconnect`-Links bleiben.

2. **`src/styles.css`**
   - `--font-sans` → `"Inter", system-ui, sans-serif`
   - `--font-serif` und `--font-display` → ebenfalls `"Inter", system-ui, sans-serif` (damit `h1–h4` nicht mehr in Baskerville rendern)
   - `@layer base` bleibt strukturell unverändert; `h1–h4` erben so automatisch die neue Schrift.

## Nicht enthalten

- Keine Änderung an Farben, Layout, Struktur, Inhalten oder Komponenten.
- Keine Änderung an Meta-Tags oder Routen.
