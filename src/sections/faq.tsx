import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/content/faqs";

export function FAQSection() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-600">FAQ</p>
        <h2 className="text-3xl font-semibold text-foreground">Questions we get the most</h2>
        <p className="text-muted-foreground">Straight answers before you book.</p>
      </div>
      <Accordion type="single" collapsible className="grid gap-3">
        {faqs.map((faq) => (
          <AccordionItem key={faq.question} value={faq.question} className="rounded-xl border px-4">
            <AccordionTrigger className="text-left text-base font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent className="text-sm text-foreground/90">{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

