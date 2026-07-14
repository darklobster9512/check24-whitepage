import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./About";

const items = [
  {
    q: "Wer kann an der 200 €-Aktion teilnehmen?",
    a: "Teilnahmeberechtigt sind volljährige Personen mit Hauptwohnsitz in Österreich und einer gültigen österreichischen IBAN – sowohl Neu- als auch Bestandskund:innen.",
  },
  {
    q: "Was kostet die Teilnahme?",
    a: "Die Teilnahme ist kostenlos und unverbindlich. Es entstehen keine Gebühren und es besteht keine Verpflichtung zum Abschluss weiterer Produkte.",
  },
  {
    q: "Wann wird der Bonus ausgezahlt?",
    a: "Nach erfolgreicher Verifizierung der Identität und der Bankverbindung wird der Bonus in der Regel innerhalb weniger Werktage auf das angegebene österreichische Konto überwiesen.",
  },
  {
    q: "Welche Daten werden benötigt?",
    a: "Für die Bearbeitung werden Name, Anschrift, Kontaktdaten sowie eine gültige österreichische IBAN benötigt. Die Angaben werden ausschließlich zur Bonus-Auszahlung verwendet.",
  },
  {
    q: "Was passiert nach dem 01.08.2026?",
    a: "Nach Ablauf der Frist ist keine Anmeldung mehr möglich. Bis dahin eingereichte, vollständig verifizierte Teilnahmen werden regulär bearbeitet.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="border-b border-border bg-background py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader eyebrow="Häufige Fragen" title="Antworten auf einen Blick" />
        <Accordion type="single" collapsible className="mt-8 overflow-hidden rounded-sm border border-border bg-background">
          {items.map((it, i) => (
            <AccordionItem key={i} value={`i-${i}`} className="border-b border-border last:border-0">
              <AccordionTrigger className="px-6 py-4 text-left text-base font-medium text-foreground hover:no-underline">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                {it.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
