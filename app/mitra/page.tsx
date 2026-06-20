"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Building2, Briefcase, Handshake, HeartHandshake } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

const investasiB2B = [
  { name: "Extragen", desc: "Pupuk Cair Organik" },
  { name: "Bolesca Food", desc: "Frozen Food" },
  { name: "Rodagilas", desc: "Merchandise" },
  { name: "Dua Kawan Digital", desc: "IT Solution" },
  { name: "Konten Keren", desc: "Media Social Management" },
  { name: "Orra Narupa", desc: "Design, Interior & Contractor" },
  { name: "Marani Pangan", desc: "Agriculture Companies" },
  { name: "Kedung Sumber Panguripan", desc: "Konsultan Pendamping Desa" },
]

const csrMitra = [
  "Bank Syariah Indonesia (BSI)",
  "Bank Negara Indonesia (BNI)",
  "PT. Tirta Investama (Aqua)",
  "PT. Rimba Raya Conservation",
]

const partnershipMitra = [
  "Asosiasi Pemerintah Desa Seluruh Indonesia (APDESI)",
  "Solo Techno Park (STP)",
  "Universitas Jendral Soedirman",
  "Universitas Surakarta",
  "Universitas Aisyah Jogyakarta",
  "Universitas Politeknik Negeri Samarinda",
  "Pemerintah Desa Barudua",
  "Pemerintah Desa Cisitu",
  "Pemerintah Desa Grenggeng",
  "Pemerintah Desa Gatak",
  "Pemerintah Desa Ponggok",
  "Pemerintah Desa Sidowayah",
  "Pemerintah Desa Muara Muntai Ilir",
  "Pemerintah Desa Bumi Etam",
  "Bumdesa Tirta Mandiri",
  "Bumdesa Sinergi",
  "Bumdes Gatak Mandiri Sejahterah",
  "Bumdes Artha Desa",
  "Bumdes Citra Mandiri Sejahtera",
  "Bumdes Mitra Sejahtera",
  "Bumdes Bumi Etam Sejahtera",
  "Bumdes Mandiri Sakti",
  "Koperasi Desa Merah Putih Bentangan",
  "Koperasi Desa Merah Putih Ponggok",
  "Koperasi Desa Merah Putih Sidowayah",
]

export default function MitraPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-balance">{t.mitra.heroTitle}</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{t.mitra.heroDesc}</p>
            </div>
          </div>
        </section>

        {/* Partners Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8 space-y-8">

            {/* Row 1: Investasi & CSR */}
            <div className="grid gap-8 md:grid-cols-2">
              {/* Investasi & B2B */}
              <Card>
                <CardHeader>
                  <Building2 className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>{t.mitra.investasiTitle}</CardTitle>
                  <CardDescription>Entitas bisnis dan investasi strategis Natadesa</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {investasiB2B.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5 shrink-0">•</span>
                        <span>
                          <span className="font-medium">{item.name}</span>
                          <span className="text-muted-foreground"> — {item.desc}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* CSR */}
              <Card>
                <CardHeader>
                  <HeartHandshake className="h-10 w-10 text-primary mb-3" />
                  <CardTitle>{t.mitra.csrTitle}</CardTitle>
                  <CardDescription>Institusi pendukung program CSR desa</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {csrMitra.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-primary mt-0.5 shrink-0">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Row 2: Partnership (full width) */}
            <Card>
              <CardHeader>
                <Handshake className="h-10 w-10 text-primary mb-3" />
                <CardTitle>{t.mitra.partnershipTitle}</CardTitle>
                <CardDescription>Jaringan kemitraan pemerintah desa, BUMDes, perguruan tinggi, dan koperasi</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid gap-x-8 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
                  {partnershipMitra.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5 shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

          </div>
        </section>

        {/* Partner with Us */}
        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <Card className="border-primary">
                <CardHeader className="text-center">
                  <Briefcase className="h-16 w-16 text-primary mb-4 mx-auto" />
                  <CardTitle className="text-2xl">{t.mitra.ctaTitle}</CardTitle>
                  <CardDescription className="text-base">{t.mitra.ctaDesc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-3 text-center">
                    <div>
                      <p className="font-semibold mb-2">Pemerintah Daerah</p>
                      <p className="text-sm text-muted-foreground">Kolaborasi program pemberdayaan</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Institusi Akademik</p>
                      <p className="text-sm text-muted-foreground">Riset dan pengembangan</p>
                    </div>
                    <div>
                      <p className="font-semibold mb-2">Sektor Swasta</p>
                      <p className="text-sm text-muted-foreground">Investasi dan CSR</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
