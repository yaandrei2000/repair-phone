import Link from "next/link"
import { Header } from "@/components/landing/header"
import { Footer } from "@/components/landing/footer"
import { PricingTable } from "@/components/pricing/pricing-table"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="w-full bg-background">
        <div className="container mx-auto flex max-w-[1440px] flex-col gap-6 px-[18px] py-7 md:gap-8 md:px-16 md:py-14">
          <div className="flex flex-col gap-3 md:gap-4">
            <h1 className="font-serif text-[30px] font-normal text-foreground md:text-[44px]">
              Прайс-лист
            </h1>
            <p className="text-sm text-muted-foreground md:text-lg">
              Прозрачные цены на все виды ремонта. Точная стоимость определяется
              после бесплатной диагностики.
            </p>
            <div className="flex flex-col gap-2 md:flex-row md:items-center md:gap-4">
              <Button
                variant="default"
                size="default"
                className="w-full md:w-auto"
                asChild
              >
                <Link href="/#contact-form">Записаться на ремонт</Link>
              </Button>
              <p className="text-xs text-muted-foreground md:text-sm">
                * Диагностика бесплатна при любом ремонте
              </p>
            </div>
          </div>

          <PricingTable />
        </div>
      </section>
      <Footer />
    </main>
  )
}
