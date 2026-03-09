export function Footer() {
  return (
    <footer className="w-full border-t border-border bg-[#0A0A0A]">
      <div className="container mx-auto flex max-w-[1440px] flex-col gap-2 px-[18px] py-5 md:gap-2.5 md:px-16 md:py-7">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="font-serif text-base font-medium text-foreground md:text-lg">
            Ремонт • Ремонт смартфонов
          </p>
          <nav className="hidden text-sm text-muted-foreground md:block">
            Услуги &nbsp; Прайс &nbsp; Отзывы &nbsp; Контакты
          </nav>
        </div>
        <p className="text-xs text-muted-foreground md:text-[13px]">
          © 2026 Ремонт
        </p>
      </div>
    </footer>
  )
}
