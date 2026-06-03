"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"

export default function KarirPage() {
  const { t } = useLanguage()

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl font-bold mb-6 text-balance">{t.karir.heroTitle}</h1>
              <p className="text-lg text-muted-foreground text-pretty leading-relaxed">{t.karir.heroDesc}</p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <Card className="max-w-2xl mx-auto text-center">
              <CardHeader>
                <CardTitle>{t.karir.cardTitle}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Saat ini kami sedang tidak membuka lowongan, namun kami selalu mencari talenta terbaik untuk bergabung
                  dengan tim kami.
                </p>
                <Button asChild>
                  <Link href="/kontak">Kirim CV Anda</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
