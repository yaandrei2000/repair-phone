import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const reviewsLink =
  "https://yandex.ru/maps/org/krutoy_servis/124779220273/reviews/?from=mapframe&indoorLevel=1&ll=40.384258%2C56.148629&z=17";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-[18px] py-4 md:h-[88px] md:px-16 md:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt="Крутой Сервис - Логотип сервисного центра по ремонту смартфонов во Владимире"
            width={120}
            height={40}
            className="h-8 w-auto md:h-10"
            priority
          />
          <span className="text-xl font-medium text-foreground md:text-2xl md:font-bold">
            Крутой Сервис
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <div className="flex items-center gap-6">
            <Link
              href="/pricing"
              className="text-sm font-medium tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Цены
            </Link>
            <a
              href={reviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Отзывы
            </a>
            <Link
              href="/#contacts"
              className="text-sm font-medium tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Контакты
            </Link>
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+79066150006"
            className="group flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-primary md:text-base"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground transition-all group-hover:scale-105 group-hover:shadow-md md:h-9 md:w-9">
              <Phone className="h-4 w-4 md:h-5 md:w-5" />
            </div>
            <span className="hidden sm:inline">+7 (906) 615-00-06</span>
            <span className="sm:hidden">Позвонить</span>
          </a>
          <Button
            variant="default"
            size="default"
            className="hidden md:flex"
            asChild
          >
            <Link href="/#contact-form">Оставить заявку</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
