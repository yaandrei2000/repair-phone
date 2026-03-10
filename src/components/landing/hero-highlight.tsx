import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function HeroHighlight() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-10 px-[18px] pb-10 pt-9 md:flex-row md:items-center md:gap-14 md:px-16 md:pb-16 md:pt-14">
        {/* Left content */}
        <div className="relative flex flex-1 flex-col gap-5">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-xs md:text-sm"
          >
            Владимир • Крутой сервис по ремонту смартфонов
          </Badge>

          <h1 className="text-[40px] font-semibold leading-tight text-foreground md:text-[64px]">
            Ремонт смартфонов
            <br />
            <span className="font-normal">с гарантией до 12 месяцев</span>
          </h1>

          <p className="max-w-xl text-sm text-muted-foreground md:text-lg">
            Восстанавливаем технику после любых поломок: разбитый экран,
            батарея, вода, разъёмы. Диагностика в день обращения и честная цена
            до старта работ.
          </p>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="flex flex-row gap-2 md:gap-3">
              <Button
                variant="default"
                size="default"
                className="flex-1 md:flex-none"
                asChild
              >
                <Link href="/#contact-form">
                  <span>Узнать стоимость</span>
                </Link>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground md:text-sm">
              Перезвоним за 5 минут и подскажем по срокам и стоимости.
            </p>
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-muted-foreground md:text-sm">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span>4.9/5 по отзывам клиентов</span>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex flex-1 items-center justify-center">
          {/* Big accent circle */}
          <div className="relative h-[260px] w-[260px] rounded-full bg-primary shadow-[0_40px_80px_rgba(0,0,0,0.18)] md:h-[360px] md:w-[360px]">
            {/* Phone image */}
            <div className="absolute inset-[-10%]">
              <Image
                src="/iphone1.png"
                alt="Ремонт смартфонов"
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Floating card */}
            <div className="absolute -bottom-6 right-0 flex items-center gap-2 rounded-xl bg-card px-3 py-2 text-xs shadow-lg md:-bottom-10 md:right-4 md:text-sm">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <div className="flex flex-col">
                <span className="font-medium">IPhone 14 Pro</span>
                <span className="text-muted-foreground">
                  Замена аккумулятора • 45 мин
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
