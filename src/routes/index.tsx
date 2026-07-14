import { createFileRoute } from "@tanstack/react-router";
import { KlimabonusPage } from "@/components/klimabonus/KlimabonusPage";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "CHECK24 200 €-Bonus Österreich 2026 – Aktion, Ablauf & Frist" },
      { name: "description", content: "Alle Infos zur CHECK24 200 €-Bonus-Aktion in Österreich 2026: Teilnahme, Voraussetzungen, Ablauf und Einsendefrist bis 01.08.2026." },
      { property: "og:title", content: "CHECK24 200 €-Bonus Österreich 2026 – Aktion, Ablauf & Frist" },
      { property: "og:description", content: "Alle Infos zur CHECK24 200 €-Bonus-Aktion in Österreich 2026: Teilnahme, Voraussetzungen, Ablauf und Einsendefrist bis 01.08.2026." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return <KlimabonusPage />;
}
