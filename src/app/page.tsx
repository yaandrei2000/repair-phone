import { Header } from "@/components/landing/header";
import { HeroHighlight } from "@/components/landing/hero-highlight";
import { Services } from "@/components/landing/services";
import { Trust } from "@/components/landing/trust";
import { ContactForm } from "@/components/landing/contact-form";
import { FAQ } from "@/components/landing/faq";
import { ContactsSection } from "@/components/landing/contacts-section";
import { Footer } from "@/components/landing/footer";

export default function Home() {
  return (
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
  );
}
