import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Сколько длится ремонт?",
    answer:
      "Большинство работ выполняем в течение 30-90 минут. Сложные случаи по плате занимают 1-3 дня.",
  },
  {
    question: "Вы используете оригинальные запчасти?",
    answer:
      "Да, по возможности ставим оригинал. Также можем предложить качественные аналоги в нескольких ценовых категориях.",
  },
  {
    question: "Что если телефон не включается после воды?",
    answer:
      "Сразу отключите устройство и не ставьте на зарядку. Привозите к нам на срочную диагностику и сушку платы.",
  },
];

export function FAQ() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-2.5 px-[18px] pb-[42px] pt-7 md:gap-4.5 md:px-16 md:pb-22 md:pt-11">
        <h2 className="font-serif text-[30px] font-normal text-foreground md:text-[44px]">
          Частые вопросы
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border"
            >
              <AccordionTrigger>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
