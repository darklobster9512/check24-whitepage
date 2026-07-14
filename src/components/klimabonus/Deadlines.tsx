import { SectionHeader } from "./About";

export function Deadlines() {
  const rows = [
    { phase: "Bonus-Höhe", period: "200 €", note: "Einmalige Auszahlung pro teilnahmeberechtigter Person." },
    { phase: "Kosten", period: "keine", note: "Die Teilnahme ist kostenlos und unverbindlich." },
    { phase: "Teilnahmeschluss", period: "01.08.2026", note: "Nach Ablauf der Frist sind keine Anmeldungen mehr möglich." },
    { phase: "Auszahlung", period: "nach Verifizierung", note: "Überweisung auf eine gültige österreichische IBAN." },
  ];
  return (
    <section id="fristen" className="border-b border-border bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Konditionen"
          title="Rahmenbedingungen im Überblick"
          description="Die Aktion ist bewusst niedrigschwellig gestaltet – kostenlos, unverbindlich und zeitlich klar begrenzt."
        />

        <div className="mt-8 rounded-sm border border-border bg-background p-6 md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Kernpunkte</div>
              <div className="mt-1 text-3xl font-semibold text-foreground">
                200 €. Kostenlos. Bis 01.08.2026.
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Auszahlung: <span className="font-medium text-foreground">per Überweisung auf AT-IBAN</span>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden rounded-sm border border-border bg-background">
          <table className="w-full text-left text-sm">
            <thead className="bg-surface text-xs uppercase tracking-wider text-muted-foreground">
              <tr>
                <th className="px-6 py-3 font-semibold">Merkmal</th>
                <th className="px-6 py-3 font-semibold">Angabe</th>
                <th className="px-6 py-3 font-semibold">Hinweis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {rows.map((r) => (
                <tr key={r.phase}>
                  <td className="px-6 py-4 font-medium text-foreground">{r.phase}</td>
                  <td className="px-6 py-4 text-foreground/80">{r.period}</td>
                  <td className="px-6 py-4 text-muted-foreground">{r.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
