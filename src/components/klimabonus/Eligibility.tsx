import { SectionHeader } from "./About";

export function Eligibility() {
  const items = [
    {
      title: "Einsteigerinnen und Einsteiger",
      text: "Sie interessieren sich erstmals für die Fondsanlage und möchten die Grundlagen strukturiert kennenlernen, bevor Sie eine Entscheidung treffen.",
    },
    {
      title: "Sparerinnen und Sparer",
      text: "Sie möchten regelmäßig einen Betrag ansparen und prüfen, ob ein Fondssparplan zu Ihren Zielen und Ihrem Zeithorizont passt.",
    },
    {
      title: "Bestehende Anlegerinnen und Anleger",
      text: "Sie halten bereits Fonds oder Wertpapiere und möchten Ihr Depot im Hinblick auf Ziele, Risikoprofil und Diversifikation überprüfen lassen.",
    },
    {
      title: "Nachhaltig Interessierte",
      text: "Sie möchten Aspekte der Nachhaltigkeit (ESG-Kriterien) bei Ihrer Veranlagung berücksichtigen und passende Fondslösungen kennenlernen.",
    },
  ];
  return (
    <section id="anspruch" className="border-b border-border bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Für wen"
          title="Für wen ist der Investment-Check geeignet?"
          description="Der Investment-Check ist offen für alle Interessierten – unabhängig davon, ob Sie bereits Fonds halten oder neu einsteigen möchten."
        />
        <dl className="mt-10 divide-y divide-border overflow-hidden rounded-sm border border-border bg-background">
          {items.map((i) => (
            <div key={i.title} className="grid gap-2 px-6 py-5 md:grid-cols-[280px_1fr] md:gap-8">
              <dt className="text-sm font-semibold text-foreground">{i.title}</dt>
              <dd className="text-sm leading-relaxed text-muted-foreground">{i.text}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
