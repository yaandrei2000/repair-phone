import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const pricingCategories = [
  {
    category: "Замена дисплея",
    services: [
      {
        device: "iPhone 12/13/14",
        price: "от 4 990 ₽",
        duration: "40-60 мин",
        description: "Оригинальный дисплей",
      },
      {
        device: "iPhone 11/X/XS",
        price: "от 3 490 ₽",
        duration: "40-60 мин",
        description: "Оригинальный дисплей",
      },
      {
        device: "Samsung S21/S22/S23",
        price: "от 5 490 ₽",
        duration: "50-70 мин",
        description: "Оригинальный AMOLED",
      },
      {
        device: "Xiaomi 11/12/13",
        price: "от 3 990 ₽",
        duration: "45-65 мин",
        description: "Оригинальный дисплей",
      },
    ],
  },
  {
    category: "Замена аккумулятора",
    services: [
      {
        device: "iPhone 12/13/14",
        price: "от 2 990 ₽",
        duration: "30-45 мин",
        description: "Оригинальный аккумулятор",
      },
      {
        device: "iPhone 11/X/XS",
        price: "от 2 190 ₽",
        duration: "30-45 мин",
        description: "Оригинальный аккумулятор",
      },
      {
        device: "Samsung S21/S22/S23",
        price: "от 2 490 ₽",
        duration: "35-50 мин",
        description: "Оригинальный аккумулятор",
      },
      {
        device: "Xiaomi 11/12/13",
        price: "от 1 990 ₽",
        duration: "30-45 мин",
        description: "Оригинальный аккумулятор",
      },
    ],
  },
  {
    category: "Восстановление после воды",
    services: [
      {
        device: "Диагностика",
        price: "от 990 ₽",
        duration: "15-20 мин",
        description: "Проверка состояния платы",
      },
      {
        device: "Ультразвуковая чистка",
        price: "от 1 990 ₽",
        duration: "1-2 часа",
        description: "Чистка платы от коррозии",
      },
      {
        device: "Замена компонентов",
        price: "от 2 990 ₽",
        duration: "1-3 дня",
        description: "Замена поврежденных элементов",
      },
      {
        device: "Восстановление платы",
        price: "от 4 990 ₽",
        duration: "2-5 дней",
        description: "Полное восстановление",
      },
    ],
  },
  {
    category: "Замена разъемов",
    services: [
      {
        device: "Разъем зарядки",
        price: "от 1 490 ₽",
        duration: "30-45 мин",
        description: "USB-C / Lightning",
      },
      {
        device: "Разъем наушников",
        price: "от 1 290 ₽",
        duration: "25-40 мин",
        description: "3.5mm jack",
      },
      {
        device: "Разъем SIM-карты",
        price: "от 990 ₽",
        duration: "20-30 мин",
        description: "Tray replacement",
      },
    ],
  },
  {
    category: "Другие услуги",
    services: [
      {
        device: "Замена задней крышки",
        price: "от 1 990 ₽",
        duration: "40-60 мин",
        description: "Стекло / Пластик",
      },
      {
        device: "Замена кнопок",
        price: "от 1 290 ₽",
        duration: "30-45 мин",
        description: "Кнопка питания / Громкости",
      },
      {
        device: "Замена камеры",
        price: "от 2 490 ₽",
        duration: "45-60 мин",
        description: "Основная / Фронтальная",
      },
      {
        device: "Диагностика",
        price: "Бесплатно",
        duration: "10-15 мин",
        description: "При любом ремонте",
      },
    ],
  },
];

export function PricingTable() {
  return (
    <div className="flex flex-col gap-6">
      {pricingCategories.map((category, categoryIndex) => (
        <Card key={categoryIndex} className="py-0">
          <CardHeader className="p-4 md:p-6">
            <h2 className="font-serif text-[22px] font-medium text-foreground md:text-[28px]">
              {category.category}
            </h2>
          </CardHeader>
          <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
            <div className="flex flex-col gap-3">
              {category.services.map((service, serviceIndex) => (
                <div
                  key={serviceIndex}
                  className="flex flex-col gap-2 border-b border-border pb-3 last:border-b-0 last:pb-0 md:flex-row md:items-center md:justify-between md:gap-4"
                >
                  <div className="flex flex-col gap-1 md:flex-1">
                    <h3 className="text-base font-medium text-foreground font-sans">
                      {service.device}
                    </h3>
                    <p className="text-sm text-muted-foreground font-sans">
                      {service.description}
                    </p>
                  </div>
                  <div className="flex items-center justify-between gap-4 md:justify-end">
                    <div className="flex flex-col items-end gap-1">
                      <p className="font-serif text-lg font-medium text-primary md:text-xl">
                        {service.price}
                      </p>
                      <Badge variant="default" className="w-fit">
                        {service.duration}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
