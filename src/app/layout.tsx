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
  title: "Крутой Сервис - Ремонт смартфонов",
  description: "Ремонтируем смартфоны всех брендов с гарантией 12 месяцев",
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
