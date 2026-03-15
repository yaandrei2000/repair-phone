import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToForm } from "@/components/landing/scroll-to-form";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "https://krutoiservis.ru/",
  ),
  title: {
    default: "Крутой Сервис - Ремонт смартфонов во Владимире",
    template: "%s | Крутой Сервис",
  },
  description:
    "Ремонт смартфонов всех брендов во Владимире. Замена экрана, аккумулятора, разъемов. Гарантия 12 месяцев. Бесплатная диагностика. Срочный ремонт за 30-90 минут. Рейтинг 4.9/5.",
  keywords: [
    "ремонт смартфонов",
    "ремонт телефонов Владимир",
    "замена экрана iPhone",
    "замена аккумулятора",
    "ремонт Samsung",
    "ремонт Xiaomi",
    "сервисный центр Владимир",
    "срочный ремонт телефонов",
    "ремонт после воды",
    "замена разъема зарядки",
  ],
  authors: [{ name: "Крутой Сервис" }],
  creator: "Крутой Сервис",
  publisher: "Крутой Сервис",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "/",
    siteName: "Крутой Сервис",
    title: "Крутой Сервис - Ремонт смартфонов во Владимире",
    description:
      "Ремонт смартфонов всех брендов во Владимире. Замена экрана, аккумулятора, разъемов. Гарантия 12 месяцев. Бесплатная диагностика. Срочный ремонт за 30-90 минут.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Крутой Сервис - Ремонт смартфонов",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  // verification: {
  //   yandex: process.env.NEXT_PUBLIC_YANDEX_VERIFICATION,
  //   google: process.env.NEXT_PUBLIC_GOOGLE_VERIFICATION,
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <body className="antialiased">
        <TooltipProvider>
          <Suspense fallback={null}>
            <ScrollToForm />
          </Suspense>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
