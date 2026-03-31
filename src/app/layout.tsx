
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
