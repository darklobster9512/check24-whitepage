## Plan

`src/routes/impressum.tsx`: Statt `window.fbq?.("track", "Lead")` im `useEffect` wird ein `<script>`-Tag mit exakt dem Inhalt `fbq('track', 'Lead');` in die Seite injiziert — 1:1 wie vom Nutzer angegeben.

### Umsetzung

Im `head()` der Route ein zusätzliches Script eintragen:

```ts
scripts: [
  { children: "fbq('track', 'Lead');" },
],
```

Das rendert im HTML als:

```html
<script>fbq('track', 'Lead');</script>
```

Damit ist der Code 1:1 wie gewünscht auf der Impressum-Seite eingebettet und feuert beim Laden. Das bestehende `useEffect` mit `meta-traffic-notify` fetch bleibt erhalten, aber der `window.fbq?.("track","Lead")`-Aufruf dort wird entfernt (sonst doppeltes Feuern). Der `import "@/lib/fbq"` kann ebenfalls raus.
