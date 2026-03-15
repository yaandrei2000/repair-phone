"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Toast, ToastTitle, ToastDescription } from "@/components/ui/toast";
import { CheckCircle2 } from "lucide-react";
import { formatPhoneNumber, validatePhone } from "@/lib/utils";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    problem: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Валидация
    if (!formData.name.trim() || !formData.problem.trim()) {
      return;
    }

    // Валидация телефона с помощью регулярного выражения
    if (!validatePhone(formData.phone)) {
      return;
    }

    setIsSubmitting(true);

    // Имитация отправки формы
    setTimeout(() => {
      setIsSubmitting(false);
      setShowToast(true);
      setFormData({ name: "", phone: "", problem: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    // Для поля телефона применяем форматирование
    if (id === "phone") {
      const formatted = formatPhoneNumber(value);
      setFormData((prev) => ({ ...prev, [id]: formatted }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  };

  return (
    <section
      id="contact-form"
      className="w-full bg-background scroll-mt-20 md:scroll-mt-24"
    >
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-3 px-[18px] pb-[34px] pt-[30px] md:flex-row md:gap-7 md:px-16 md:pb-20 md:pt-14">
        {/* Left side */}
        <div className="flex flex-1 flex-col gap-3 md:gap-3.5">
          <h2 className="text-[30px] font-normal text-foreground md:text-[44px]">
            <span className="md:hidden">Оставьте заявку</span>
            <span className="hidden md:inline">Оставьте заявку на ремонт</span>
          </h2>
          <p className="text-[13px] text-muted-foreground md:text-lg">
            <span className="md:hidden">
              Перезвоним за 5 минут и согласуем удобное время ремонта.
            </span>
            <span className="hidden md:inline">
              Перезвоним за 5 минут, уточним модель и поломку, сразу
              сориентируем по сроку и цене.
            </span>
          </p>
          <ul className="hidden flex-col gap-0 text-lg text-foreground md:flex">
            <li>• Бесплатная диагностика</li>
            <li>• Курьер по городу в день обращения</li>
            <li>• Фотоотчет и гарантия до 12 месяцев</li>
          </ul>
        </div>

        {/* Form Card */}
        <Card className="w-full py-0 md:w-[520px]">
          <CardHeader className="flex flex-col gap-1 p-4 pb-0 md:gap-1.5 md:p-5 md:pb-0">
            <h3 className="text-2xl font-medium text-foreground md:font-semibold">
              Заявка на ремонт
            </h3>
            <p className="hidden text-sm text-muted-foreground md:block">
              Заполните форму и получите скидку 10% на первую услугу
            </p>
          </CardHeader>
          <CardContent className="flex flex-col gap-[10px] px-4 pb-4 pt-0 md:gap-3 md:px-5 md:pb-5 md:pt-0">
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-[10px] md:gap-3"
            >
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="name">Ваше имя</Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Алексей"
                  className="bg-background"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="phone">Телефон</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+7 (___) ___-__-__"
                  className="bg-background"
                  value={formData.phone}
                  onChange={handleChange}
                  pattern="\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}"
                  maxLength={18}
                  required
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="problem">Модель и проблема</Label>
                <Input
                  id="problem"
                  type="text"
                  placeholder="iPhone 14, разбит экран"
                  className="bg-background"
                  value={formData.problem}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex flex-col-reverse gap-[10px] pt-3 md:flex-row md:items-center md:justify-between">
                <p className="text-[11px] text-muted-foreground md:max-w-[250px] md:text-xs">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
                <Button
                  type="submit"
                  variant="default"
                  size="default"
                  className="w-full md:w-auto"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>

      <Toast open={showToast} onOpenChange={setShowToast}>
        <div className="flex items-center gap-3">
          <CheckCircle2 className="h-5 w-5 text-primary" />
          <div className="flex flex-col">
            <ToastTitle>Заявка отправлена</ToastTitle>
            <ToastDescription>
              Мы свяжемся с вами в ближайшее время
            </ToastDescription>
          </div>
        </div>
      </Toast>
    </section>
  );
}
