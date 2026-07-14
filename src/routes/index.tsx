import { createFileRoute } from "@tanstack/react-router";
import { KlimabonusPage } from "@/components/klimabonus/KlimabonusPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CHECK24 200 €-Bonus für Österreich – Information zur Aktion" },
      { name: "description", content: "Sachliche Information zur CHECK24 200 €-Bonus-Aktion in Österreich: Voraussetzungen, Ablauf, Konditionen und Frist (01.08.2026)." },
      { property: "og:title", content: "CHECK24 200 €-Bonus für Österreich – Information zur Aktion" },
      { property: "og:description", content: "Sachliche Information zur CHECK24 200 €-Bonus-Aktion: Voraussetzungen, Ablauf, Konditionen und Frist." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <KlimabonusPage />;
}
