"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion, AnimatePresence } from "motion/react";

const repairCards = [
  {
    device: "IPhone 13",
    service: "Замена задней крышки • от 1 часа",
    image: "/iphone14.png",
  },
  {
    device: "IPhone 14 Pro",
    service: "Замена аккумулятора • 45 мин",
    image: "/iPhone14Pro.png",
  },
  {
    device: "Samsung Galaxy S24 Ultra",
    service: "Замена дисплея • 60 мин",
    image: "/SamsungGalaxyS24Ultra.png",
  },
];

export function HeroHighlight() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % repairCards.length);
    }, 6000); // Смена каждые 6 секунд

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-background">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-10 px-[18px] pb-10 pt-9 md:flex-row md:items-center md:gap-14 md:px-16 md:pb-16 md:pt-14">
        {/* Left content */}
        <div className="relative flex flex-1 flex-col gap-5">
          <Badge
            variant="secondary"
            className="rounded-full px-3 py-1 text-xs md:text-sm"
          >
            г. Владимир • Сервис по ремонту смартфонов
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

          {/* Address and rating - desktop only */}
          <div className="mt-4 hidden flex-col gap-3 md:flex">
            <div className="flex flex-col gap-1 text-xs text-muted-foreground md:text-sm">
              <p className="font-medium text-foreground">
                ул. Тракторная, д. 46/1
              </p>
              <p>Вход со стороны пешеходного перехода, -1 этаж</p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground md:text-sm">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>4.9/5 по отзывам клиентов</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="relative flex flex-1 flex-col items-center">
          {/* Big accent circle */}
          <div className="relative h-[260px] w-[260px] rounded-full bg-primary shadow-[0_40px_80px_rgba(0,0,0,0.18)] md:h-[360px] md:w-[360px]">
            {/* Phone image with animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="absolute inset-[-10%]"
              >
                <Image
                  src={repairCards[currentIndex].image}
                  alt={`Ремонт ${repairCards[currentIndex].device} - ${repairCards[currentIndex].service} в сервисе Крутой Сервис, Владимир`}
                  fill
                  className="object-contain"
                  priority={currentIndex === 0}
                />
              </motion.div>
            </AnimatePresence>

            {/* Floating card with animation */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -50, scale: 0.8 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="absolute -bottom-6 right-0 flex items-center gap-2 rounded-xl bg-card px-3 py-2 text-xs shadow-lg md:-bottom-10 md:right-4 md:text-sm"
              >
                <span className="h-2 w-2 rounded-full bg-primary" />
                <div className="flex flex-col">
                  <span className="font-medium">
                    {repairCards[currentIndex].device}
                  </span>
                  <span className="text-muted-foreground">
                    {repairCards[currentIndex].service}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Address and rating - mobile only */}
          <div className="mt-10 flex w-full flex-col gap-3 md:hidden">
            <div className="flex flex-col gap-1 text-xs text-muted-foreground">
              <p className="font-medium text-foreground">
                ул. Тракторная, д. 46/1
              </p>
              <p>Вход со стороны пешеходного перехода, -1 этаж</p>
            </div>
            <div className="flex flex-wrap gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-primary" />
                <span>4.9/5 по отзывам клиентов</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
