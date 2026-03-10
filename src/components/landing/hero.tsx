import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-[14px] px-[18px] py-7 md:flex-row md:items-center md:gap-12 md:px-16 md:py-[88px]">
        <div className="flex flex-1 flex-col gap-5">
          {/* Decorative ribbons - mobile first */}
          <div className="mb-0 flex flex-col gap-2 md:hidden">
            <div className="h-0.5 w-[150px] bg-primary" />
            <div className="h-0.5 w-[104px] bg-primary" />
          </div>

          {/* Badge */}
          <Badge variant="default" className="w-fit">
            Срочный ремонт за 30 минут
          </Badge>

          {/* Title */}
          <h1 className="text-[40px] font-normal leading-tight text-foreground md:text-[64px] md:font-bold">
            Ремонтируем смартфоны всех брендов с гарантией{" "}
            <span>12 месяцев</span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm leading-normal text-muted-foreground md:text-lg">
            Замена экрана, аккумулятора, разъемов и восстановление после воды.
            Бесплатная диагностика и прозрачная цена до начала работ.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-2 md:gap-3">
            <Button
              variant="default"
              size="default"
              className="flex-1 md:flex-none"
              asChild
            >
              <Link href="/#contact-form">
                <span className="md:hidden">Записаться</span>
                <span className="hidden md:inline">Записаться на ремонт</span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="default"
              className="flex-1 md:flex-none"
              asChild
            >
              <Link href="/pricing">
                <span className="md:hidden">Прайс</span>
                <span className="hidden md:inline">Смотреть прайс</span>
              </Link>
            </Button>
          </div>

          {/* Hero Image - mobile */}
          <div className="relative h-[228px] w-full overflow-hidden border border-border md:hidden">
            <Image
              src="/heroVisualA.jpg"
              alt="Ремонт смартфонов"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Trust */}
          <p className="text-xs font-semibold text-primary md:text-sm md:font-normal">
            <span className="md:hidden">4.9/5 • 1 200+ отзывов</span>
            <span className="hidden md:inline">
              4.9/5 на основе 1 200+ отзывов клиентов
            </span>
          </p>

          {/* Decorative ribbons - desktop */}
          <div className="mt-3 hidden flex-col gap-3 md:flex">
            <div className="h-0.5 w-[220px] bg-primary" />
            <div className="h-0.5 w-[160px] bg-primary" />
          </div>
        </div>

        {/* Hero Image - desktop */}
        <div className="relative hidden h-[460px] w-[560px] overflow-hidden border border-border md:block">
          <Image
            src="/heroVisualA.jpg"
            alt="Ремонт смартфонов"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}
