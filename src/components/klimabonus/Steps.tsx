import { SectionHeader } from "./About";

export function Steps() {
  const steps = [
    {
      n: 1,
      title: "Persönliche Daten angeben",
      text: "Name, Anschrift und Kontaktdaten werden erfasst. Die Angaben werden ausschließlich zur Bearbeitung der Bonus-Auszahlung verwendet.",
    },
    {
      n: 2,
      title: "Identität und Bankverbindung verifizieren",
      text: "Die Identität wird online bestätigt und eine gültige österreichische IBAN hinterlegt. Die Verifizierung dient der Missbrauchsprävention.",
    },
    {
      n: 3,
      title: "Bestätigung erhalten und Bonus empfangen",
      text: "Nach Prüfung der Angaben wird eine Bestätigung per E-Mail versendet. Der Bonus wird innerhalb weniger Werktage auf das angegebene Konto überwiesen.",
    },
  ];
  return (
    <section id="ablauf" className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Ablauf"
          title="So läuft die Teilnahme ab"
          description="Der Ablauf ist in drei Schritte gegliedert und vollständig online möglich."
        />
        <ol className="mt-10 divide-y divide-border overflow-hidden rounded-sm border border-border bg-background">
          {steps.map((s) => (
            <li key={s.n} className="grid gap-3 px-6 py-5 md:grid-cols-[64px_260px_1fr] md:items-baseline md:gap-6">
              <span className="text-sm font-semibold text-primary">Schritt {s.n}</span>
              <span className="text-base font-semibold text-foreground">{s.title}</span>
              <span className="text-sm leading-relaxed text-muted-foreground">{s.text}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
