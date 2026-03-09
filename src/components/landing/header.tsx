import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-[#0A0A0A]">
      <div className="container mx-auto flex h-[72px] max-w-[1440px] items-center justify-between px-[18px] py-4 md:h-[88px] md:px-16 md:py-5">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 bg-primary" />
          <span className="font-serif text-xl font-medium text-foreground md:text-2xl md:font-bold">
            Ремонт
          </span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <span className="text-sm font-medium tracking-wider text-muted-foreground">
            Услуги &nbsp; Цены &nbsp; Отзывы &nbsp; Контакты
          </span>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <Button variant="outline" size="default" className="hidden md:flex">
            Позвонить
          </Button>
          <Button variant="default" size="default">
            <span className="md:hidden">Заявка</span>
            <span className="hidden md:inline">Оставить заявку</span>
          </Button>
        </div>
      </div>
    </header>
  )
}
