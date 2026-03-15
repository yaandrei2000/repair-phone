import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";

export const metadata: Metadata = {
  title: "404 - Страница не найдена | Крутой Сервис",
  description: "Страница не найдена. Вернитесь на главную страницу сервисного центра по ремонту смартфонов.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="flex flex-1 items-center justify-center bg-background">
        <div className="container mx-auto flex max-w-[1440px] flex-col items-center justify-center gap-6 px-[18px] py-16 text-center md:gap-8 md:px-16 md:py-24">
          <div className="flex flex-col items-center gap-4 md:gap-6">
            <h1 className="text-[80px] font-bold leading-none text-foreground md:text-[120px]">
              404
            </h1>
            <div className="flex flex-col gap-2 md:gap-3">
              <h2 className="text-[24px] font-medium text-foreground md:text-[32px]">
                Страница не найдена
              </h2>
              <p className="max-w-md text-sm text-muted-foreground md:text-base">
                К сожалению, запрашиваемая страница не существует или была
                перемещена.
              </p>
            </div>
            <Button
              variant="default"
              size="default"
              className="mt-4"
              asChild
            >
              <Link href="/">Вернуться на главную</Link>
            </Button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
