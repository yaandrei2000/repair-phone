import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

const stats = [
  {
    title: "Ремонтов в месяц",
    value: "2 500+",
    badge: "+18%",
  },
  {
    title: "Средний рейтинг",
    value: "4.9/5",
    badge: "1 200 отзывов",
  },
  {
    title: "Гарантия",
    value: "12 мес.",
    badge: "на работы и детали",
  },
];

const steps = [
  {
    step: "Шаг 1",
    title: "Диагностика",
    description:
      "Проверяем устройство за 10-15 минут и фиксируем стоимость до старта работ.",
  },
  {
    step: "Шаг 2",
    title: "Ремонт",
    description:
      "Мастер заменяет детали и тестирует смартфон по чек-листу качества.",
  },
  {
    step: "Шаг 3",
    title: "Выдача и гарантия",
    description:
      "Получаете готовый телефон, акт работ и гарантию до 12 месяцев.",
  },
];

export function Trust() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-3 px-[18px] pb-[34px] pt-[30px] md:gap-6 md:px-16 md:pb-20 md:pt-14">
        <h2 className="text-[30px] font-normal text-foreground md:text-[44px]">
          <span className="md:hidden">Почему выбирают нас</span>
          <span className="hidden md:inline">Почему выбирают нас</span>
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardHeader>
                <h3 className="text-base font-medium text-foreground font-sans">
                  {stat.title}
                </h3>
              </CardHeader>
              <CardContent className="flex flex-col gap-2">
                <p className="text-2xl font-medium text-foreground font-sans">
                  {stat.value}
                </p>
                <Badge variant="default">{stat.badge}</Badge>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Steps - hidden on mobile */}
        {/* <div className="hidden grid-cols-1 gap-4 md:grid md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index}>
              <CardHeader className="flex flex-col gap-1.5">
                <Badge variant="default" className="w-fit">
                  {step.step}
                </Badge>
                <h3 className="text-[22px] font-semibold text-foreground font-sans">
                  {step.title}
                </h3>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div> */}
      </div>
    </section>
  );
}
