import type { Metadata } from "next";
import { Header } from "@/components/landing/header";
import { HeroHighlight } from "@/components/landing/hero-highlight";
import { Services } from "@/components/landing/services";
import { Trust } from "@/components/landing/trust";
import { ContactForm } from "@/components/landing/contact-form";
import { FAQ } from "@/components/landing/faq";
import { ContactsSection } from "@/components/landing/contacts-section";
import { Footer } from "@/components/landing/footer";
import { StructuredData } from "@/components/seo/structured-data";

export const metadata: Metadata = {
  title: "Ремонт смартфонов во Владимире - Крутой Сервис",
  description:
    "Профессиональный ремонт смартфонов всех брендов во Владимире. Замена экрана, аккумулятора, разъемов за 30-90 минут. Гарантия 12 месяцев. Бесплатная диагностика. Рейтинг 4.9/5. ул. Тракторная, д. 46/1",
  keywords: [
    "ремонт смартфонов Владимир",
    "ремонт телефонов Владимир",
    "замена экрана iPhone Владимир",
    "замена аккумулятора Владимир",
    "ремонт Samsung Владимир",
    "сервисный центр Владимир",
    "срочный ремонт телефонов Владимир",
    "ремонт после воды Владимир",
  ],
  openGraph: {
    title: "Ремонт смартфонов во Владимире - Крутой Сервис",
    description:
      "Профессиональный ремонт смартфонов всех брендов. Замена экрана, аккумулятора, разъемов за 30-90 минут. Гарантия 12 месяцев.",
    url: "/",
    siteName: "Крутой Сервис",
    locale: "ru_RU",
    type: "website",
  },
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <StructuredData />
      <main className="flex min-h-screen flex-col">
        <Header />
        <HeroHighlight />
        <Services />
        <Trust />
        <ContactForm />
        <FAQ />
        <ContactsSection />
        <Footer />
      </main>
    </>
  );
}
