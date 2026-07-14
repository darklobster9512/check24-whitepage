export function About() {
  return (
    <section id="ueberblick" className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Überblick" title="Was ist der Investment-Check?" />
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <p className="text-base leading-relaxed text-foreground/85">
            Der Investment-Check ist eine strukturierte Analyse Ihrer finanziellen
            Situation, Ihrer persönlichen Ziele, Ihres Zeithorizonts und Ihrer
            Risikoneigung. Ziel ist eine sachliche Standortbestimmung, bevor Sie
            eine Anlageentscheidung treffen.
          </p>
          <p className="text-base leading-relaxed text-foreground/85">
            Auf Basis der Analyse erhalten Sie eine individuelle Empfehlung aus
            dem Fondsangebot der Volksbank – von gemanagten Fondslösungen über
            nachhaltige Fonds bis hin zu einem Fondssparplan für den langfristigen
            Vermögensaufbau.
          </p>
        </div>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {[
            { k: "Dauer", v: "ca. 20 Minuten" },
            { k: "Kosten", v: "kostenlos" },
            { k: "Ergebnis", v: "individuelle Empfehlung" },
          ].map((i) => (
            <div key={i.k} className="bg-background px-6 py-5">
              <dt className="text-xs uppercase tracking-wider text-muted-foreground">{i.k}</dt>
              <dd className="mt-1 text-2xl font-semibold text-foreground">{i.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="max-w-3xl">
      <div className="text-xs font-semibold uppercase tracking-wider text-primary">{eyebrow}</div>
      <h2 className="mt-2 text-3xl text-foreground md:text-4xl">{title}</h2>
      {description && <p className="mt-3 text-base text-muted-foreground">{description}</p>}
    </div>
  );
}
