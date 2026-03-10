import { Header } from "@/components/landing/header";
import { Footer } from "@/components/landing/footer";
import { ContactsInfo } from "@/components/contacts/contacts-info";
import { YandexMapOrganization } from "@/components/contacts/yandex-map";

export default function ContactsPage() {
  // ID организации в Яндекс.Картах
  const organizationId = "124779220273";

  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <section className="w-full bg-background">
        <div className="container mx-auto flex max-w-[1440px] flex-col gap-6 px-[18px] py-7 md:gap-8 md:px-16 md:py-14">
          <div className="flex flex-col gap-2">
            <h1 className="font-serif text-[30px] font-normal text-foreground md:text-[44px]">
              Контакты
            </h1>
            <p className="text-sm text-muted-foreground md:text-lg">
              Мы всегда рады помочь вам с ремонтом вашего устройства
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-[24px] font-medium text-foreground md:text-[32px]">
              Как нас найти
            </h2>
            <YandexMapOrganization zoom={17} organizationId={organizationId} />
          </div>

          <ContactsInfo />
        </div>
      </section>
      <Footer />
    </main>
  );
}
