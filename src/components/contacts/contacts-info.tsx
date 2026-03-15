import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Адрес",
    content: "г. Владимир, ул. Тракторная , д. 46/1",
    description: "Вход со стороны пешеходного перехода, -1 этаж",
  },
  {
    icon: Phone,
    title: "Телефон",
    content: "+7 (906) 615-00-06",
    description: "Пн-Пт: 10:00-19:00, Сб-Вс: 12:00-16:00",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@krutoiservis.ru",
    description: "Ответим в течение часа",
  },
  {
    icon: Clock,
    title: "Режим работы",
    content: "Пн-Пт: 10:00-19:00, Сб-Вс: 12:00-16:00",
    description: "Работаем в будни и выходные",
  },
];

export function ContactsInfo() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {contactInfo.map((info, index) => (
        <Card key={index} className="py-0">
          <CardHeader className="p-4 md:p-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 flex items-center justify-center bg-primary/10">
                <info.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-base font-medium text-card-foreground font-sans md:text-lg">
                {info.title}
              </h3>
            </div>
          </CardHeader>
          <CardContent className="p-4 pt-0 md:p-6 md:pt-0">
            <div className="flex flex-col gap-1">
              <p className="text-base font-medium text-card-foreground font-sans">
                {info.content}
              </p>
              <p className="text-sm text-muted-foreground font-sans">
                {info.description}
              </p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
