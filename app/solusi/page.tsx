"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AlertCircle, TrendingUp, Laptop, LinkIcon, Target, Copy, Globe, Handshake, Heart, Award } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"

export default function SolusiPage() {
  const { t, lang } = useLanguage()

  const problems = lang === "en" ? [
    { icon: AlertCircle, title: "Lack of digital infrastructure", description: "Limited connectivity and devices hinder operations and data collection" },
    { icon: AlertCircle, title: "Inconsistent product quality", description: "Unstandardized production reduces buyer trust and scalability" },
    { icon: AlertCircle, title: "Predatory supply chains/intermediaries", description: "High intermediary levels erode profit margins for rural SMEs and BUMDes" },
  ] : [
    { icon: AlertCircle, title: "Kurangnya infrastruktur digital", description: "Konektivitas dan perangkat yang terbatas menghambat operasional dan pengambilan data" },
    { icon: AlertCircle, title: "Kualitas produk yang tidak konsisten", description: "Produksi yang tidak terstandarisasi mengurangi kepercayaan pembeli dan skalabilitas" },
    { icon: AlertCircle, title: "Rantai pasokan predator/perantara", description: "Tingkat perantara yang tinggi mengikis margin keuntungan bagi UKM pedesaan dan BUMDes" },
  ]

  const pillars = lang === "en" ? [
    { icon: TrendingUp, title: "Capacity Building", description: "Targeted training for tourism village managers: financial literacy, digital marketing, and production standardization" },
    { icon: Laptop, title: "Digital Integration", description: "bisnisdesa.id ERP & marketplace optimized for low connectivity and basic technology literacy" },
    { icon: LinkIcon, title: "Market Linkage", description: "Direct-to-market pipelines connecting village products to national retail and export hubs" },
  ] : [
    { icon: TrendingUp, title: "Peningkatan Kapasitas", description: "Pelatihan terarah untuk pengelola desa wisata: literasi keuangan, pemasaran digital, dan standardisasi produksi" },
    { icon: Laptop, title: "Integrasi Digital", description: "ERP & marketplace bisnisdesa.id yang dioptimalkan untuk konektivitas rendah dan literasi teknologi dasar" },
    { icon: LinkIcon, title: "Keterkaitan Pasar", description: "Pipelines direct-to-market yang menghubungkan produk desa ke ritel nasional dan hub ekspor" },
  ]

  const advantages = lang === "en" ? [
    { icon: Target, title: "Tailored Solutions", subtitle: "Village-specific design", description: "Approach aligned with local character for targeted implementation" },
    { icon: Copy, title: "Replication Model", subtitle: "Replicable MVP model", description: "Phased model easily replicated across regions" },
    { icon: Globe, title: "Digital Integration", subtitle: "Effective & transparent operations", description: "bisnisdesa.id ERP/marketplace for efficient & accountable operations" },
    { icon: Handshake, title: "Strategic Partnerships", subtitle: "Cross-sector collaboration", description: "Cross-sector partnerships to strengthen scale & sustainability" },
    { icon: Heart, title: "Community Engagement", subtitle: "Ownership & sustainability", description: "Citizen involvement from the start for strong sense of ownership" },
    { icon: Award, title: "Proven Track Record", subtitle: "Experience with diverse villages", description: "Real experience across many villages proves effectiveness" },
  ] : [
    { icon: Target, title: "Solusi Khusus", subtitle: "Desain khusus desa", description: "Pendekatan sesuai karakter lokal agar implementasi tepat sasaran" },
    { icon: Copy, title: "Model Replikasi", subtitle: "Model bertahap MVP replikatif", description: "Model bertahap yang mudah direplikasi lintas wilayah" },
    { icon: Globe, title: "Integrasi Digital", subtitle: "Operasional efektif dan transparan", description: "ERP/marketplace bisnisdesa.id untuk operasi yang efisien & akuntabel" },
    { icon: Handshake, title: "Kemitraan Strategis", subtitle: "Kolaborasi lintas sektor", description: "Kemitraan lintas sektor untuk memperkuat skala & keberlanjutan" },
    { icon: Heart, title: "Keterlibatan Komunitas", subtitle: "Kepemilikan & keberlanjutan", description: "Keterlibatan warga dari awal untuk rasa memiliki yang kuat" },
    { icon: Award, title: "Track Record Terbukti", subtitle: "Pengalaman dengan berbagai desa", description: "Pengalaman nyata di banyak desa membuktikan efektivitas" },
  ]

  // Variasi animasi dasar
  const fadeUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.5 }
  }

  // Animasi khusus card dengan hover
  const cardHover = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    whileHover: {
      y: -8,
      transition: { duration: 0.3 }
    },
    viewport: { once: true }
  }

  // Animasi teks di dalam card saat dihover
  const textAnimation = {
    initial: { opacity: 0.9 },
    whileHover: {
      opacity: 1,
      x: 3,
      transition: { duration: 0.2 }
    }
  }

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-24 md:py-32 overflow-hidden flex items-center justify-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <img
              src="/sawah.jpg" // Ganti dengan path gambar kamu
              alt="Background Solusi"
              className="w-full h-full object-cover"
            />
            {/* Overlay Gradient agar teks putih tetap pop-out dan terbaca */}
            <div className="absolute inset-0 bg-black/50" />
          </div>

          <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="max-w-3xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white tracking-tight">
                {t.solusi.heroTitle}
              </h1>
              <p className="text-lg md:text-xl text-slate-200 text-pretty leading-relaxed">
                {t.solusi.heroDesc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              {...fadeUp}
            >
              <h2 className="text-3xl font-bold mb-4">{t.solusi.problemTitle}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.solusi.problemDesc}</p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-3 mb-8">
              {problems.map((problem, index) => (
                <motion.div
                  key={index}
                  {...cardHover}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="border-green-600/50 h-full transition-shadow hover:shadow-lg hover:shadow-green-600/5">
                    <CardContent className="pt-6">
                      <problem.icon className="h-10 w-10 text-green-600 mb-4 transition-transform group-hover:scale-110" />
                      <motion.h3 variants={textAnimation} className="font-semibold mb-2">{problem.title}</motion.h3>
                      <motion.p variants={textAnimation} className="text-sm text-muted-foreground">{problem.description}</motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="bg-green-600/10 border border-green-600/20 rounded-lg p-6 max-w-8xl mx-auto"
              {...fadeUp}
            >
              <p className="text-center text-muted-foreground">
                <strong className="text-foreground">{t.solusi.riskLabel}</strong> {t.solusi.riskText}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Solution Framework */}
        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              {...fadeUp}
            >
              <h2 className="text-3xl font-bold mb-4">{t.solusi.solutionTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.solusi.solutionDesc}</p>
            </motion.div>
            <div className="grid gap-8 md:grid-cols-3 mb-12">
              {pillars.map((pillar, index) => (
                <motion.div
                  key={index}
                  {...cardHover}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <Card className="border-primary h-full transition-shadow hover:shadow-xl hover:shadow-primary/10">
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <motion.div
                          className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold group-hover:rotate-12 transition-transform"
                        >
                          {index + 1}
                        </motion.div>
                        <CardTitle className="text-lg">{t.solusi.pillarLabel} {index + 1}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <pillar.icon className="h-12 w-12 text-primary mb-4 transition-transform group-hover:scale-110" />
                      <motion.h3 variants={textAnimation} className="font-semibold mb-3">{pillar.title}</motion.h3>
                      <motion.p variants={textAnimation} className="text-sm text-muted-foreground">{pillar.description}</motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
            <motion.div
              className="bg-[#172317] text-primary-foreground rounded-xl p-8 text-center max-w-7xl mx-auto"
              {...fadeUp}
              whileHover={{ scale: 1.02 }}
            >
              <h3 className="text-2xl font-bold mb-3">{t.solusi.platformSectionTitle}</h3>
              <p className="text-lg mb-2">{t.solusi.platformSectionDesc}</p>
              <p className="opacity-90 mb-4">{t.solusi.platformSectionSub}</p>
              <Button
                variant="secondary"
                asChild
                className="bg-[#E67E22] hover:bg-[#D35400] text-white border-none transition-colors"
              >
                <Link href="/platform">{t.solusi.learnPlatform}</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Competitive Advantages */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              className="text-center mb-12"
              {...fadeUp}
            >
              <h2 className="text-3xl font-bold mb-4">{t.solusi.advantageTitle}</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">{t.solusi.advantageDesc}</p>
            </motion.div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={index}
                  {...cardHover}
                  transition={{ delay: (index % 3) * 0.1 }}
                  className="group"
                >
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardContent className="pt-6">
                      <advantage.icon className="h-10 w-10 text-primary mb-4 transition-transform group-hover:scale-110" />
                      <motion.h3 variants={textAnimation} className="font-semibold mb-1">{advantage.title}</motion.h3>
                      <motion.p variants={textAnimation} className="text-sm text-primary/80 mb-2">{advantage.subtitle}</motion.p>
                      <motion.p variants={textAnimation} className="text-sm text-muted-foreground">{advantage.description}</motion.p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-[#172317] text-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div {...fadeUp}>
              <h2 className="text-3xl font-bold mb-4 text-balance">{t.solusi.ctaTitle}</h2>
              <p className="text-lg mb-8 opacity-90 text-pretty max-w-2xl mx-auto">{t.solusi.ctaDesc}</p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button
                  size="lg"
                  className="bg-[#E67E22] hover:bg-[#D35400] text-white border-none px-8 transition-colors"
                  asChild
                >
                  <Link href="/kontak">{t.solusi.ctaBtn}</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}