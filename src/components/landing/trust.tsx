"use client";

import { Badge } from "@/components/ui/badge";
import { motion } from "motion/react";

const reasons = [
  {
    title: "Сразу говорим правду о состоянии телефона",
    description:
      "Показываем, что сломано, какие есть варианты ремонта и чем они отличаются по цене и рискам.",
  },
  {
    title: "Каждый этап прозрачен для клиента",
    description:
      "Вы знаете, что с телефоном происходит прямо сейчас: от диагностики до финальной проверки по чек‑листу.",
  },
  {
    title: "Относимся к репутации как к самому дорогому девайсу",
    description:
      "Работаем так, чтобы за нас было не стыдно порекомендовать друзьям и родственникам.",
  },
];

export function Trust() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-6 px-[18px] pb-[34px] pt-[30px] md:gap-10 md:px-16 md:pb-20 md:pt-14">
        {/* Заголовок */}
        <div className="flex flex-col gap-2 md:gap-3">
          <h2 className="text-[28px] font-normal leading-tight text-foreground md:text-[42px]">
            Почему выбирают нас
          </h2>

          <p className="max-w-[620px] text-[13px] text-muted-foreground md:text-base">
            Мы сделали ремонт смартфона максимально понятным и предсказуемым:
            без давления, с фокусом на результат и ощущение, что о вас правда
            позаботились.
          </p>
        </div>

        {/* Блок с причинами и анимацией на белом фоне */}
        <div className="rounded-[32px] border border-border/40 bg-white px-4 py-6 shadow-sm md:px-8 md:py-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-10">
            {/* Левая часть: крупные цифры и текст без подложки */}
            <div className="flex-1 space-y-5 md:space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground md:text-sm">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  <span>2 500+ ремонтов в месяц</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-300" />
                  <span>4.9/5 по отзывам</span>
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span>гарантия до 12 месяцев</span>
                </span>
              </div>

              <div className="relative mt-2 text-[12px] text-muted-foreground md:text-sm">
                <p>
                  Для нас доверие важнее разового чека. Поэтому если после
                  ремонта что-то пойдёт не так — вы знаете, куда и к кому
                  обратиться, а не ищете новый сервис.
                </p>
              </div>
            </div>

            {/* Правая часть: простая колонка причин без линии и таймлайна */}
            <div className="flex-1">
              <div className="flex flex-col gap-4 md:gap-5">
                {reasons.map((reason, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-20% 0px" }}
                    transition={{ duration: 0.35, delay: index * 0.08 }}
                    whileHover={{ scale: 1.02, x: 2 }}
                    className="group text-left"
                  >
                    <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-primary/70 md:text-xs">
                      Шаг {index + 1}
                    </p>
                    <div className="mt-1 flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-primary group-hover:bg-sky-400" />
                      <div>
                        <h3 className="text-[14px] font-medium text-foreground md:text-[15px]">
                          {reason.title}
                        </h3>
                        <p className="mt-1 text-[11px] text-muted-foreground md:text-sm">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
