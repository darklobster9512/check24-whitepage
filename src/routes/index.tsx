import { createFileRoute } from "@tanstack/react-router";
import { KlimabonusPage } from "@/components/klimabonus/KlimabonusPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Volksbank Investment-Check – Fondsanlage mit persönlicher Beratung" },
      { name: "description", content: "Unverbindliche und kostenlose Standortbestimmung zur Fondsanlage: Anlageziel, Zeithorizont und Risikoneigung – mit individueller Empfehlung aus dem Volksbank-Fondsangebot." },
      { property: "og:title", content: "Volksbank Investment-Check – Fondsanlage mit persönlicher Beratung" },
      { property: "og:description", content: "Unverbindliche und kostenlose Standortbestimmung zur Fondsanlage mit individueller Empfehlung." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],

    scripts: [
      {
        children: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','3481091842052139');fbq('track','PageView');`,
      },
    ],
  }),
  component: Index,
});

function Index() {
  return <KlimabonusPage />;
}
