export function About() {
  return (
    <section id="ueberblick" className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Überblick" title="Worum es bei der 200 €-Aktion geht" />
        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <p className="text-base leading-relaxed text-foreground/85">
            Als Dankeschön an seine Nutzer:innen vergibt CHECK24 Österreich im
            Rahmen einer zeitlich begrenzten Sonderaktion einen Bonus in Höhe von
            200 €. Teilnahmeberechtigt sind Neu- und Bestandskund:innen mit
            Hauptwohnsitz in Österreich.
          </p>
          <p className="text-base leading-relaxed text-foreground/85">
            Die Teilnahme ist kostenlos und unverbindlich. Nach erfolgreicher
            Verifizierung der Identität und der angegebenen Bankverbindung wird
            der Bonus direkt auf das genannte österreichische Konto überwiesen.
            Die Aktion endet am 01.08.2026.
          </p>
        </div>

        <dl className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
          {[
            { k: "Bonus", v: "200 €" },
            { k: "Kosten", v: "keine" },
            { k: "Frist", v: "01.08.2026" },
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
