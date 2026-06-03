"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { useLanguage } from "@/contexts/language-context"

const faqsData = {
  id: [
    { question: "Apa itu Natadesa Nusantara?", answer: "Natadesa Nusantara adalah perusahaan sosial yang fokus pada pengembangan desa wisata dan berkelanjutan melalui kolaborasi antara komunitas, pemerintah, dan mitra swasta." },
    { question: "Layanan apa saja yang ditawarkan Natadesa?", answer: "Kami menawarkan empat layanan utama: Rencana Jangka Panjang Desa, Peningkatan Kapasitas HR, Digitalisasi dan Teknologi, serta Bantuan Manajemen Bisnis." },
    { question: "Bagaimana cara bekerjasama dengan Natadesa?", answer: "Anda dapat menghubungi kami melalui halaman kontak untuk konsultasi gratis. Tim kami akan menghubungi Anda untuk membahas kebutuhan dan solusi terbaik." },
    { question: "Apa itu platform bisnisdesa.id?", answer: "Bisnisdesa.id adalah platform digital terpadu yang menyediakan ekosistem dari hulu ke hilir untuk mengorganisir desa, termasuk ERP, marketplace, dan sistem manajemen." },
    { question: "Berapa lama durasi proyek pengembangan desa?", answer: "Durasi proyek bervariasi tergantung pada kebutuhan dan skala proyek. Kami akan mendiskusikan timeline yang realistis dalam konsultasi awal." },
  ],
  en: [
    { question: "What is Natadesa Nusantara?", answer: "Natadesa Nusantara is a social enterprise focused on developing sustainable tourism villages through collaboration between communities, government, and private partners." },
    { question: "What services does Natadesa offer?", answer: "We offer four main services: Village Long-Term Plan, HR Capacity Building, Digitalization & Technology, and Business Management Assistance." },
    { question: "How do I partner with Natadesa?", answer: "You can contact us through the contact page for a free consultation. Our team will reach out to discuss your needs and the best solutions." },
    { question: "What is the bisnisdesa.id platform?", answer: "Bisnisdesa.id is an integrated digital platform providing an end-to-end ecosystem for organizing villages, including ERP, marketplace, and management systems." },
    { question: "How long does a village development project take?", answer: "Project duration varies depending on the needs and scale of the project. We will discuss a realistic timeline during the initial consultation." },
  ],
}

export default function FAQPage() {
  const { lang, t } = useLanguage()
  const faqs = faqsData[lang]

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-balance">{t.faq.heroTitle}</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{t.faq.heroDesc}</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent>{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
