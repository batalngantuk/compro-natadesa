import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Users,
  TrendingUp,
  Globe,
  Lightbulb,
  Heart,
  Target,
  Laptop,
  Handshake,
  FileText,
  GraduationCap,
  Smartphone,
  Briefcase,
  CheckCircle,
  Copy,
  Network,
  UserCheck,
  Award,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="container relative mx-auto max-w-7xl px-6 lg:px-8 py-24 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <div className="mb-6">
                <p className="text-3xl font-bold text-primary mb-2">NATADESA NUSANTARA</p>
                <p className="text-sm text-muted-foreground">PT. Natadesa Bangun Negeri</p>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-balance sm:text-6xl lg:text-7xl mb-6">
                Penggerak Desa Berkelanjutan di Indonesia
              </h1>
              <p className="text-lg text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
                Membangun potensi lokal, memberdayakan masyarakat, melestarikan kearifan budaya dan lingkungan melalui
                produk yang inovatif dan kolaboratif
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/kontak">Konsultasi Gratis</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/portfolio">Lihat Portfolio</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Statistics */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="pt-6 text-center">
                  <MapPin className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-3xl font-bold mb-2">75,000+</p>
                  <p className="text-sm text-muted-foreground">Desa di Indonesia yang perlu pemberdayaan</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Award className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-3xl font-bold mb-2">20+</p>
                  <p className="text-sm text-muted-foreground">Proyek selesai (2021-2025)</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Globe className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-3xl font-bold mb-2">6,042</p>
                  <p className="text-sm text-muted-foreground">Desa wisata aktif di Indonesia</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Target className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <p className="text-3xl font-bold mb-2">1,921</p>
                  <p className="text-sm text-muted-foreground">Desa di Jawa & Bali (target market)</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Focus Areas */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Area Fokus Kami</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Lima pilar utama dalam pemberdayaan desa berkelanjutan
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
              <Card className="text-center">
                <CardContent className="pt-6">
                  <TrendingUp className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Pertumbuhan Ekonomi Inklusif</h3>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Lightbulb className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Literasi Digital</h3>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Handshake className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Mata Pencaharian Berkelanjutan</h3>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Heart className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">GEDSI</h3>
                </CardContent>
              </Card>
              <Card className="text-center">
                <CardContent className="pt-6">
                  <Users className="h-10 w-10 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold mb-2">Pendekatan Terukur & Teknologi</h3>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Tentang Kami */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6 text-balance">Tentang Kami</h2>
              <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
                <strong className="text-foreground">PT. Natadesa Bangun Negeri</strong> adalah perusahaan sosial yang
                berfokus pada pengembangan desa wisata dan berkelanjutan di Indonesia.
              </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Kami menggunakan pendekatan kolaboratif antara komunitas, pemerintah, dan mitra swasta untuk menciptakan
                dampak positif yang berkelanjutan bagi masyarakat desa.
              </p>
              <Button variant="outline" asChild>
                <Link href="/tentang-kami">Selengkapnya →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Solusi Kami - 3 Pilar */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Solusi Kami</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Tiga pilar strategi untuk pemberdayaan desa berkelanjutan
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3 mb-8">
              <Card>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <GraduationCap className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Pilar 1: Peningkatan Kapasitas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pelatihan dan pendampingan untuk meningkatkan kompetensi sumber daya manusia desa dalam pengelolaan
                    bisnis dan pariwisata berkelanjutan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Pilar 2: Integrasi Digital</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Digitalisasi proses bisnis dan pemasaran melalui platform teknologi untuk meningkatkan efisiensi dan
                    jangkauan pasar.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                    <Network className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">Pilar 3: Keterkaitan Pasar</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Membangun koneksi dengan pasar dan mitra strategis untuk memastikan keberlanjutan ekonomi desa.
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 text-center">
              <p className="text-lg font-semibold text-primary mb-2">
                Platform <span className="font-bold">bisnisdesa.id</span> sebagai tulang punggung operasional
              </p>
              <p className="text-sm text-muted-foreground">
                Solusi digital terintegrasi untuk manajemen desa wisata dan BUMDes
              </p>
            </div>
          </div>
        </section>

        {/* Layanan Utama */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Layanan Utama</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Layanan komprehensif untuk pengembangan desa berkelanjutan
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardContent className="pt-6">
                  <FileText className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Rencana Jangka Panjang Desa</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Penyusunan masterplan dan strategi pengembangan desa wisata yang berkelanjutan dan terukur.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <GraduationCap className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Peningkatan Kapasitas HR</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pelatihan SDM desa dalam manajemen, pemasaran, dan operasional bisnis pariwisata.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Laptop className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Digitalisasi dan Teknologi</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Implementasi sistem digital untuk reservasi, pembayaran, dan manajemen operasional desa.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Briefcase className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-3">Bantuan Manajemen Bisnis</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pendampingan dalam pengelolaan keuangan, operasional, dan pengembangan produk wisata desa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Highlights */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Portfolio Highlights</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Proyek-proyek unggulan yang telah kami kerjakan
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <Image
                    src="/ponggok-fish-farm-sustainable-village.jpg"
                    alt="Ponggok Fish & Farm"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <Badge className="mb-3">Jawa Tengah</Badge>
                  <h3 className="text-xl font-bold mb-2">Ponggok Fish & Farm</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Pengembangan desa wisata berbasis perikanan dan pertanian berkelanjutan di Klaten.
                  </p>
                  <p className="text-sm text-primary font-semibold">2023-2024</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <Image
                    src="/delanggu-eco-park-sustainable-tourism.jpg"
                    alt="Delanggu Eco Park"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <Badge className="mb-3">Jawa Tengah</Badge>
                  <h3 className="text-xl font-bold mb-2">Delanggu Eco Park</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Transformasi area hijau menjadi destinasi ekowisata edukasi dengan fasilitas modern.
                  </p>
                  <p className="text-sm text-primary font-semibold">2022-2023</p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 relative">
                  <Image
                    src="/situ-salawe-lake-tourism-destination.jpg"
                    alt="Situ Salawe"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="pt-6">
                  <Badge className="mb-3">Jawa Barat</Badge>
                  <h3 className="text-xl font-bold mb-2">Situ Salawe</h3>
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    Revitalisasi danau dan pengembangan kawasan wisata alam dengan konsep ramah lingkungan.
                  </p>
                  <p className="text-sm text-primary font-semibold">2023</p>
                </CardContent>
              </Card>
            </div>
            <div className="text-center mt-8">
              <Button variant="outline" size="lg" asChild>
                <Link href="/portfolio">Lihat Semua Portfolio →</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Keunggulan Kompetitif */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Keunggulan Kompetitif</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Mengapa memilih Natadesa Nusantara sebagai mitra pengembangan desa
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="pt-6">
                  <CheckCircle className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Solusi Khusus</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pendekatan customized sesuai karakteristik dan potensi unik setiap desa.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Copy className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Model Replikasi</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Framework teruji yang dapat diadaptasi untuk berbagai konteks desa di Indonesia.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Smartphone className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Integrasi Digital</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Platform teknologi bisnisdesa.id untuk operasional dan pemasaran yang efisien.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Handshake className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Kemitraan Strategis</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Jaringan luas dengan pemerintah, universitas, dan sektor swasta untuk keberlanjutan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <UserCheck className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Keterlibatan Komunitas</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Pendekatan partisipatif yang memberdayakan masyarakat sebagai aktor utama pembangunan.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Award className="h-10 w-10 mb-4 text-primary" />
                  <h3 className="text-lg font-bold mb-2">Track Record Terbukti</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    20+ proyek sukses dengan dampak nyata bagi ekonomi dan masyarakat desa.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Mitra & Klien */}
        <section className="py-16">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-balance">Mitra & Klien</h2>
              <p className="text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
                Dipercaya oleh berbagai institusi dan organisasi terkemuka
              </p>
            </div>
            <div className="grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center">
              <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
                <p className="text-center font-semibold text-sm">BUM Desa Tirta Mandiri</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
                <p className="text-center font-semibold text-sm">Universitas Jenderal Soedirman</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
                <p className="text-center font-semibold text-sm">Politeknik Negeri Samarinda</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
                <p className="text-center font-semibold text-sm">Universitas Surakarta</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
                <p className="text-center font-semibold text-sm">PT. Dolan Kreasi Indonesia</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
                <p className="text-center font-semibold text-sm">Kementerian Desa PDTT</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
                <p className="text-center font-semibold text-sm">Pemerintah Daerah</p>
              </div>
              <div className="flex items-center justify-center p-6 bg-muted/30 rounded-lg">
                <p className="text-center font-semibold text-sm">BUMDes Se-Indonesia</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial / Success Story */}
        <section className="py-16 bg-primary/5">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <svg
                  className="h-12 w-12 mx-auto text-primary opacity-50"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
              </div>
              <blockquote className="text-xl font-medium text-foreground mb-6 leading-relaxed">
                "Berkat pendampingan Natadesa Nusantara, desa kami berhasil meningkatkan pendapatan dari sektor
                pariwisata hingga 300% dalam setahun. Platform bisnisdesa.id sangat membantu dalam mengelola reservasi
                dan keuangan."
              </blockquote>
              <div className="flex items-center justify-center gap-4">
                <div className="text-right">
                  <p className="font-bold">Pak Budi Santoso</p>
                  <p className="text-sm text-muted-foreground">Direktur BUMDes Tirta Mandiri, Klaten</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Akhir */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4 text-balance">Siap Membangun Desa Berkelanjutan?</h2>
            <p className="text-lg mb-8 opacity-90 text-pretty max-w-2xl mx-auto leading-relaxed">
              Konsultasikan kebutuhan desa Anda dengan tim expert kami
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/kontak">Hubungi Kami</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                asChild
              >
                <a href="#" download>
                  Download Company Profile
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
