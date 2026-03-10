import Link from "next/link";
import { Button } from "@/components/ui/button";

const reviewsLink =
  "https://yandex.ru/maps/org/krutoy_servis/124779220273/reviews/?from=mapframe&indoorLevel=1&ll=40.384258%2C56.148629&z=17";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[#0A0A0A]">
      <div className="container mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-[18px] py-4 md:h-[88px] md:px-16 md:py-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="h-8 w-8 bg-primary" />
          <span className="font-serif text-xl font-medium text-foreground md:text-2xl md:font-bold">
            Крутой Сервис
          </span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <div className="flex items-center gap-6">
            <Link
              href="/services"
              className="text-sm font-medium tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Услуги
            </Link>
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
              href="/contacts"
              className="text-sm font-medium tracking-wider text-muted-foreground transition-colors hover:text-foreground"
            >
              Контакты
            </Link>
          </div>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="default"
            className="md:hidden"
            asChild
          >
            <a href="tel:+79066150006">Позвонить</a>
          </Button>
          <Button
            variant="outline"
            size="default"
            className="hidden md:flex"
            asChild
          >
            <a href="tel:+79066150006">Позвонить</a>
          </Button>
          <Button variant="default" size="default" className="hidden md:flex">
            Оставить заявку
          </Button>
        </div>
      </div>
    </header>
  );
}
