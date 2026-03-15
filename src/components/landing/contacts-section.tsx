"use client";

import { Phone, MapPin, Clock } from "lucide-react";
import { YandexMapOrganization } from "@/components/contacts/yandex-map";

const contactInfo = [
  {
    icon: MapPin,
    label: "Адресс:",
    content: "г. Владимир, ул. Тракторная, д. 46/1",
    description: "Вход со стороны пешеходного перехода, -1 этаж",
  },
  {
    icon: Phone,
    label: "Телефон:",
    content: "+7 (906) 615-00-06",
  },
  {
    icon: Clock,
    label: "Время работы:",
    content: ["Пн-Пт: 10:00-19:00", "Сб-Вс: 12:00-16:00"],
  },
];

export function ContactsSection() {
  const organizationId = "124779220273";

  return (
    <section id="contacts" className="w-full bg-background">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-6 px-[18px] py-7 md:flex-row md:gap-12 md:px-16 md:py-14">
        {/* Left side - Contact information */}
        <div className="flex flex-1 flex-col gap-6">
          <h2 className="text-[30px] font-normal text-foreground md:text-[44px]">
            Контакты
          </h2>

          <div className="flex flex-col gap-5">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div key={index} className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <Icon className="h-5 w-5 text-foreground md:h-6 md:w-6" />
                    <span className="text-sm text-muted-foreground font-sans md:text-base">
                      {info.label}
                    </span>
                  </div>
                  {Array.isArray(info.content) ? (
                    <div className="flex flex-col gap-0.5">
                      {info.content.map((line, lineIndex) => (
                        <p
                          key={lineIndex}
                          className="text-base font-medium text-foreground font-sans md:text-lg"
                        >
                          {line}
                        </p>
                      ))}
                    </div>
                  ) : (
                    <p className="text-base font-medium text-foreground font-sans md:text-lg">
                      {info.content}
                    </p>
                  )}
                  {info.description && (
                    <p className="text-sm text-muted-foreground font-sans md:text-base">
                      {info.description}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Right side - Map */}
        <div className="flex flex-1 flex-col">
          <YandexMapOrganization zoom={17} organizationId={organizationId} />
        </div>
      </div>
    </section>
  );
}
