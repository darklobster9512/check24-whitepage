import { SectionHeader } from "./About";

export function Deadlines() {
  const rows = [
    { phase: "Dauer", period: "ca. 20 Minuten", note: "Kompakte, strukturierte Standortbestimmung." },
    { phase: "Kosten", period: "keine", note: "Der Investment-Check ist kostenfrei." },
    { phase: "Verbindlichkeit", period: "unverbindlich", note: "Keine Verpflichtung zur Depoteröffnung oder Veranlagung." },
    { phase: "Ort", period: "Filiale oder Video-Beratung", note: "Wählbar nach Ihrem Wunsch bei der Terminvereinbarung." },
  ];
  return (
    <section id="fristen" className="border-b border-border bg-surface py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Konditionen"
          title="Rahmenbedingungen im Überblick"
          description="Der Investment-Check ist bewusst niedrigschwellig gestaltet – kostenlos, unverbindlich und zeitlich überschaubar."
        />

        <div className="mt-8 rounded-sm border border-border bg-background p-6 md:p-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-baseline">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Kernpunkte</div>
              <div className="mt-1 text-3xl font-semibold text-foreground">
                Kostenlos. Unverbindlich. Persönlich.
              </div>
            </div>
            <div className="text-sm text-muted-foreground">
              Format: <span className="font-medium text-foreground">Filiale oder Video-Beratung</span>
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
