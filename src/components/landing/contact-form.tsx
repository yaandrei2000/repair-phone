"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Plus } from "lucide-react";

export function ContactForm() {
  return (
    <section className="w-full bg-[#12100D]">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-3 px-[18px] pb-[34px] pt-[30px] md:flex-row md:gap-7 md:px-16 md:pb-20 md:pt-14">
        {/* Left side */}
        <div className="flex flex-1 flex-col gap-3 md:gap-3.5">
          <h2 className="font-serif text-[30px] font-normal text-foreground md:text-[44px]">
            <span className="md:hidden">Оставьте заявку</span>
            <span className="hidden md:inline">Оставьте заявку на ремонт</span>
          </h2>
          <p className="text-[13px] text-muted-foreground md:text-lg">
            <span className="md:hidden">
              Перезвоним за 3 минуты и согласуем удобное время ремонта.
            </span>
            <span className="hidden md:inline">
              Перезвоним за 3 минуты, уточним модель и поломку, сразу
              сориентируем по сроку и цене.
            </span>
          </p>
          <ul className="hidden flex-col gap-0 text-lg text-foreground md:flex">
            <li>• Бесплатная диагностика</li>
            <li>• Курьер по Москве в день обращения</li>
            <li>• Фотоотчет и гарантия до 12 месяцев</li>
          </ul>
        </div>

        {/* Form Card */}
        <Card className="w-full py-0 md:w-[520px]">
          <CardHeader className="flex flex-col gap-1 p-4 pb-0 md:gap-1.5 md:p-5 md:pb-0">
            <h3 className="font-serif text-2xl font-medium text-foreground md:font-sans md:font-semibold">
              Заявка на ремонт
            </h3>
            <p className="hidden text-sm text-muted-foreground md:block">
              Заполните форму и получите скидку 10% на первую услугу
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-[10px] px-4 pb-4 pt-0 md:gap-3 md:px-5 md:pb-5 md:pt-0">
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="name">Ваше имя</Label>
              <Input
                id="name"
                type="text"
                placeholder="Алексей"
                className="bg-background"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="phone">Телефон</Label>
              <Input
                id="phone"
                type="tel"
                placeholder="+7 (___) ___-__-__"
                className="bg-background"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="problem">Модель и проблема</Label>
              <Input
                id="problem"
                type="text"
                placeholder="iPhone 14, разбит экран"
                className="bg-background"
              />
            </div>
            <div className="flex flex-col-reverse gap-[10px] pt-3 md:flex-row md:items-center md:justify-between">
              <p className="text-[11px] text-muted-foreground md:max-w-[250px] md:text-xs">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
              <Button
                variant="default"
                size="default"
                className="w-full md:w-auto"
              >
                Отправить заявку
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
