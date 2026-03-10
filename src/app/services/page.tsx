import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { ServicesList } from "@/components/services/services-list";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ServicesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="w-full bg-background">
        <div className="container mx-auto flex max-w-[1440px] flex-col gap-6 px-[18px] py-7 md:gap-8 md:px-16 md:py-14">
          <div className="flex flex-col gap-3 md:gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="font-serif text-[30px] font-normal text-foreground md:text-[44px]">
                Наши услуги
              </h1>
              <p className="text-sm text-muted-foreground md:text-lg">
                Профессиональный ремонт и обслуживание техники любой сложности
              </p>
            </div>
          </div>

          <ServicesList />
        </div>
      </section>
      <Footer />
    </main>
  );
}
