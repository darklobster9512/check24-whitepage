import { SectionHeader } from "./About";

export function Eligibility() {
  const items = [
    {
      title: "Hauptwohnsitz in Österreich",
      text: "Teilnahmeberechtigt sind Personen mit einem gemeldeten Hauptwohnsitz in Österreich.",
    },
    {
      title: "Mindestalter 18 Jahre",
      text: "Die Teilnahme steht volljährigen Personen mit gültigem amtlichem Ausweisdokument offen.",
    },
    {
      title: "Gültige österreichische IBAN",
      text: "Für die Auszahlung wird eine gültige IBAN eines österreichischen Bankkontos benötigt.",
    },
    {
      title: "Teilnahme bis 01.08.2026",
      text: "Die Aktion ist zeitlich begrenzt. Anmeldungen sind bis einschließlich 01.08.2026 möglich.",
    },
  ];
  return (
    <section id="anspruch" className="border-b border-border bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Für wen"
          title="Voraussetzungen für die Teilnahme"
          description="Die 200 €-Aktion richtet sich an Neu- und Bestandskund:innen in Österreich. Für die Teilnahme sind vier Voraussetzungen zu erfüllen."
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
