## Plan

### 1. Lead-Event auf Impressum-Seite auslösen
`src/routes/impressum.tsx`: Im bestehenden `useEffect` (der bereits `meta-traffic-notify` per fetch aufruft) zusätzlich `window.fbq?.("track", "Lead")` aufrufen. Der `notified.current`-Guard verhindert doppeltes Feuern bei Re-Renders/StrictMode. Import `"@/lib/fbq"` hinzufügen für die TypeScript-Deklaration von `window.fbq`.

### 2. Lead-Event vom CTA-Button entfernen
`src/components/klimabonus/CtaButton.tsx`: `onClick`-Handler und `import "@/lib/fbq"` entfernen. Der Button navigiert nur noch zu `/impressum`; das Lead-Event wird dann dort beim Mount ausgelöst.

Damit feuert das Lead-Event zuverlässig sobald die Impressum-Seite geladen ist – auch wenn Nutzer direkt per URL kommen.
