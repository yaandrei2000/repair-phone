import { Header } from "@/components/landing/header"
import { Hero } from "@/components/landing/hero"
import { Services } from "@/components/landing/services"
import { Trust } from "@/components/landing/trust"
import { ContactForm } from "@/components/landing/contact-form"
import { FAQ } from "@/components/landing/faq"
import { Footer } from "@/components/landing/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />
      <Hero />
      <Services />
      <Trust />
      <ContactForm />
      <FAQ />
      <Footer />
    </main>
  )
}
