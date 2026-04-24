import { Reveal } from "@/components/Reveal";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faq = [
  {
    q: "Есть ли общежитие для иногородних?",
    a: "Да, ТулГУ предоставляет места в общежитиях. Распределение — по приоритетам: льготники, иногородние, по рейтингу баллов.",
  },
  {
    q: "Какие формы обучения доступны?",
    a: "Очная — основная форма. По ряду направлений доступна заочная и очно-заочная, а также магистратура и аспирантура.",
  },
  {
    q: "Можно ли перевестись из другого вуза?",
    a: "Да, перевод возможен при наличии вакантных мест и совпадении учебных планов. Подайте заявление в приёмную комиссию.",
  },
  {
    q: "Что такое целевое обучение?",
    a: "Договор с работодателем: компания оплачивает обучение, вы получаете гарантированное трудоустройство после выпуска.",
  },
  {
    q: "Когда начинается приём документов?",
    a: "С 20 июня. Подача — лично, через Госуслуги или почтой. Точные даты — на сайте приёмной комиссии ТулГУ.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-20 md:py-28 bg-surface-alt">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <Reveal>
          <div className="font-mono text-xs uppercase tracking-widest text-primary mb-3">/ часто_спрашивают</div>
          <h2 className="font-display text-3xl md:text-5xl font-bold tracking-tight text-ink">
            Вопросы абитуриентов
          </h2>
        </Reveal>

        <Reveal>
          <Accordion type="single" collapsible className="mt-10">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display text-base md:text-lg font-semibold text-ink hover:text-primary hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-ink-soft leading-relaxed">{item.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
