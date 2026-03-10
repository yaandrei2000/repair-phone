import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Monitor,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Computer,
  Settings,
} from "lucide-react";

const services = [
  {
    icon: Smartphone,
    title: "Ремонт телефонов любой сложности",
    description:
      "Профессиональный ремонт смартфонов всех брендов: замена экрана, аккумулятора, разъемов, восстановление после воды, ремонт платы.",
    features: [
      "Замена дисплея и тачскрина",
      "Замена аккумулятора",
      "Восстановление после воды",
      "Ремонт платы и компонентов",
      "Замена разъемов",
    ],
  },
  {
    icon: Monitor,
    title: "Переклейка дисплеев",
    description:
      "Качественная переклейка дисплеев с использованием оригинальных клеев и профессионального оборудования.",
    features: [
      "Оригинальные материалы",
      "Гарантия на работу",
      "Быстрое выполнение",
      "Сохранение водозащиты",
    ],
  },
  {
    icon: Watch,
    title: "Ремонт Apple Watch",
    description:
      "Специализированный ремонт Apple Watch: замена экрана, аккумулятора, корпуса и других компонентов.",
    features: [
      "Замена экрана",
      "Замена аккумулятора",
      "Ремонт корпуса",
      "Замена ремешка",
      "Диагностика",
    ],
  },
  {
    icon: Computer,
    title: "Ремонт ПК",
    description:
      "Комплексный ремонт персональных компьютеров: диагностика, замена компонентов, чистка, установка ПО.",
    features: [
      "Диагностика неисправностей",
      "Замена комплектующих",
      "Чистка от пыли",
      "Установка и настройка ПО",
      "Восстановление данных",
    ],
  },
  {
    icon: Settings,
    title: "Сборка ПК",
    description:
      "Профессиональная сборка компьютеров под ваши задачи: игровые, рабочие, офисные конфигурации.",
    features: [
      "Подбор комплектующих",
      "Профессиональная сборка",
      "Установка ОС",
      "Настройка и тестирование",
      "Гарантия на сборку",
    ],
  },
  {
    icon: Laptop,
    title: "Ремонт ноутбуков",
    description:
      "Ремонт ноутбуков всех производителей: замена матрицы, клавиатуры, ремонт материнской платы.",
    features: [
      "Замена матрицы",
      "Ремонт клавиатуры",
      "Ремонт материнской платы",
      "Замена аккумулятора",
      "Чистка системы охлаждения",
    ],
  },
  {
    icon: Tablet,
    title: "Ремонт планшетов",
    description:
      "Ремонт планшетов iPad, Samsung, Xiaomi и других брендов: замена экрана, аккумулятора, ремонт платы.",
    features: [
      "Замена дисплея",
      "Замена аккумулятора",
      "Ремонт платы",
      "Восстановление после воды",
    ],
  },
  {
    icon: Camera,
    title: "Ремонт фототехники",
    description:
      "Ремонт фотоаппаратов и видеокамер: чистка матрицы, ремонт объективов, замена компонентов.",
    features: [
      "Чистка матрицы",
      "Ремонт объективов",
      "Замена компонентов",
      "Калибровка",
    ],
  },
];

export function ServicesList() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {services.map((service, index) => (
        <Card key={index} className="py-0">
          <CardHeader className="p-4 md:p-6">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 flex items-center justify-center bg-primary/10 flex-shrink-0">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-[20px] font-medium text-foreground md:text-[22px]">
                {service.title}
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
            <div className="flex flex-col gap-4">
              <p className="text-sm text-muted-foreground font-sans">
                {service.description}
              </p>
              <ul className="flex flex-col gap-2">
                {service.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-start gap-2 text-sm text-foreground font-sans"
                  >
                    <span className="text-primary mt-1">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
