import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { SectionHeader } from "./About";

const items = [
  { q: "Was kostet der Investment-Check?", a: "Der Investment-Check ist für Sie kostenfrei und vollkommen unverbindlich. Es entstehen keine Beratungshonorare." },
  { q: "Muss ich Volksbank-Kundin oder -Kunde sein?", a: "Nein. Der Investment-Check steht auch Interessentinnen und Interessenten offen, die aktuell keine Kundenbeziehung zur Volksbank haben." },
  { q: "Welche Fonds werden empfohlen?", a: "Die Empfehlung erfolgt auf Basis Ihres persönlichen Profils und stammt aus dem Fondsangebot der Volksbank – etwa gemanagte Fondslösungen, thematische Fonds oder Fondssparpläne. Fondsveranlagungen unterliegen Marktrisiken." },
  { q: "Gibt es auch nachhaltige Fonds?", a: "Ja. Auf Wunsch werden Nachhaltigkeitspräferenzen (z. B. ESG-Kriterien) im Gespräch berücksichtigt und in die Empfehlung einbezogen." },
  { q: "Muss ich nach dem Gespräch sofort ein Depot eröffnen?", a: "Nein. Sie erhalten eine Empfehlung und entscheiden anschließend in Ruhe, ob und wann Sie weitere Schritte setzen möchten." },
  { q: "Wie lange dauert das Gespräch?", a: "In der Regel dauert der Investment-Check ca. 20 Minuten. Je nach individuellem Beratungsbedarf kann das Gespräch auch länger geführt werden." },
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
