import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus } from "lucide-react";

const services = [
  {
    title: "Замена дисплея",
    description:
      "Оригинальные и качественные OLED/LCD модули для iPhone, Samsung, Xiaomi.",
    price: "от 3 490 ₽",
    duration: "40-60 мин",
    image: "/card1HeadB.jpg",
  },
  {
    title: "Замена аккумулятора",
    description:
      "Быстро восстановим автономность устройства и проверим контроллер питания.",
    price: "от 2 190 ₽",
    duration: "30-45 мин",
    image: "/card2HeadB.jpg",
  },
  {
    title: "Восстановление после воды",
    description:
      "Ультразвуковая чистка, диагностика плат и замена поврежденных компонентов.",
    price: "от 1 990 ₽",
    duration: "в день обращения",
    image: "/card3HeadB.jpg",
  },
];

export function Services() {
  return (
    <section className="w-full bg-[#12100D]">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-[14px] px-[18px] pb-[34px] pt-[30px] md:gap-6 md:px-16 md:pb-20 md:pt-14">
        <div className="flex flex-col gap-[14px] md:gap-6">
          <h2 className="font-serif text-[30px] font-normal text-foreground md:text-[44px]">
            Популярные услуги
          </h2>
          <p className="max-w-[860px] text-[13px] text-muted-foreground md:text-lg">
            <span className="md:hidden">
              Точная цена до начала работ и детали под ваш бюджет.
            </span>
            <span className="hidden md:inline">
              Быстро устраняем типовые и сложные поломки с оригинальными или
              проверенными аналоговыми запчастями.
            </span>
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden gap-0 p-0">
              <div className="relative h-[150px] w-full md:h-[180px]">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-1.5 p-4 md:gap-2 md:p-5">
                <h3 className="font-serif text-[22px] font-medium text-foreground">
                  {service.title}
                </h3>
                <p className="hidden text-sm text-muted-foreground md:block">
                  {service.description}
                </p>
                <p className="font-serif text-lg font-medium text-primary md:text-xl md:font-bold">
                  {service.price}
                </p>
              </div>
              <div className="flex items-center justify-between px-4 pb-4 md:px-5 md:pb-5">
                <Badge variant="default">{service.duration}</Badge>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
