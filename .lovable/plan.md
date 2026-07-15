## Plan

### 1. Meta Pixel global einbauen
`src/routes/__root.tsx`: Im `head()` den Pixel-Loader als `scripts`-Eintrag und das `<noscript>`-Fallback-Bild als `<img>`-Tag im `<body>` (im `RootShell`, nicht im `<head>` – TanStack/parse5 verbietet `<img>` in `<noscript>` im `<head>`).

- `scripts: [{ children: "!function(f,b,e,v,n,t,s){…}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js'); fbq('init','4766653096894299'); fbq('track','PageView');" }]`
- Im `RootShell` direkt nach `<body>` ein `<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=4766653096894299&ev=PageView&noscript=1" /></noscript>`.
- TypeScript: kleine `declare global { interface Window { fbq?: (...args: unknown[]) => void } }` (z. B. in `src/lib/fbq.ts`), damit der CTA `window.fbq?.('track','Lead')` typsicher aufrufen kann.

### 2. CTA-Button feuert „Lead"
`src/components/klimabonus/CtaButton.tsx`: `<Link to="/impressum">` behalten, zusätzlich `onClick={() => window.fbq?.('track','Lead')}`. Navigation zu `/impressum` bleibt unverändert; Event wird vor dem Routenwechsel abgesetzt.

Keine weiteren Dateien betroffen.
