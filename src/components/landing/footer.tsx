import Link from "next/link";

const reviewsLink =
  "https://yandex.ru/maps/org/krutoy_servis/124779220273/reviews/?from=mapframe&indoorLevel=1&ll=40.384258%2C56.148629&z=17";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-[#0A0A0A]">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-2 px-[18px] py-5 md:gap-2.5 md:px-16 md:py-7">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <Link href="/">
            <p className="font-serif text-base font-medium text-foreground md:text-lg">
              Крутой Сервис • Ремонт смартфонов
            </p>
          </Link>
          <nav className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <Link
              href="/services"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Услуги
            </Link>
            <Link
              href="/pricing"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Прайс
            </Link>
            <a
              href={reviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Отзывы
            </a>
            <Link
              href="/contacts"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Контакты
            </Link>
          </nav>
        </div>
        <p className="text-xs text-muted-foreground md:text-[13px]">
          © 2026 Крутой Сервис
        </p>
      </div>
    </footer>
  );
}
