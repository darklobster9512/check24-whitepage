import { SectionHeader } from "./About";

export function Steps() {
  const steps = [
    { n: 1, title: "Online voranmelden", text: "Sie melden sich unverbindlich für den Investment-Check an. Ihre Angaben werden vertraulich behandelt." },
    { n: 2, title: "Termin vereinbaren", text: "Eine Beraterin oder ein Berater Ihrer Volksbank meldet sich, um einen passenden Termin zu vereinbaren – in der Filiale oder per Video." },
    { n: 3, title: "Persönliches Gespräch", text: "Gemeinsam werden Anlageziel, Zeithorizont, bisherige Erfahrung und Risikoneigung strukturiert erhoben." },
    { n: 4, title: "Individuelle Empfehlung", text: "Sie erhalten eine auf Ihr Profil abgestimmte Fondsempfehlung. Eine Depoteröffnung ist optional und jederzeit freiwillig." },
  ];
  return (
    <section id="ablauf" className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          eyebrow="Ablauf"
          title="So läuft der Investment-Check ab"
          description="Der Ablauf ist einfach und vollständig unverbindlich – Sie entscheiden nach dem Gespräch, ob und wie Sie weitermachen."
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
