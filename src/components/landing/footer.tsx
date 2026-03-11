import Link from "next/link";
import Image from "next/image";

const reviewsLink =
  "https://yandex.ru/maps/org/krutoy_servis/124779220273/reviews/?from=mapframe&indoorLevel=1&ll=40.384258%2C56.148629&z=17";

export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-background">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-4 px-[18px] py-8 md:gap-5 md:px-16 md:py-12">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Крутой Сервис"
              width={180}
              height={60}
              className="h-12 w-auto md:h-16"
            />
            <span className="hidden text-xl font-medium text-foreground md:block md:text-2xl md:font-bold">
              Крутой Сервис
            </span>
          </Link>
          <nav className="flex flex-col gap-2 md:flex-row md:items-center md:gap-6">
            <Link
              href="/pricing"
              className="text-sm font-medium tracking-wider text-muted-foreground transition-colors hover:text-foreground font-sans"
            >
              Прайс
            </Link>
            <a
              href={reviewsLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium tracking-wider text-muted-foreground transition-colors hover:text-foreground font-sans"
            >
              Отзывы
            </a>
            <Link
              href="/#contacts"
              className="text-sm font-medium tracking-wider text-muted-foreground transition-colors hover:text-foreground font-sans"
            >
              Контакты
            </Link>
          </nav>
        </div>
        <p className="text-xs text-muted-foreground md:text-[13px] font-sans">
          © 2026 Крутой Сервис. Все права защищены.
        </p>
      </div>
    </footer>
  );
}
