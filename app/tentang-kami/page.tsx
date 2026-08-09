"use client";

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActions } from "@/components/floating-actions"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React, { useRef, useEffect } from "react"; // Tambahkan useEffect di sini
import { motion, useScroll, useSpring, useTransform, useMotionValue, animate, useInView } from "framer-motion" // Tambahkan useMotionValue, animate, useInView
import Typewriter from 'typewriter-effect';


import {
  Target,
  Users,
  TrendingUp,
  Leaf,
  Heart,
  Handshake,
  CheckCircle,
  Briefcase,
  Building,
  Code,
  ShoppingCart,
  Camera,
  PenTool,
  FileCheck,
  Award,
  Globe,
  Lightbulb,
  Sprout,
  Palette,
  Rocket,
  ArrowRight,
  Download,
  Phone,
} from "lucide-react"
import Link from "next/link"

function CounterWrapper({ value, delay }: { value: number; delay: number }) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) =>
    Math.round(latest).toLocaleString("id-ID")
  );
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, count, value, delay]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
}


import { useLanguage } from "@/contexts/language-context"

export default function TentangKamiPage() {
  const { t, lang } = useLanguage()
  const missions = lang === "en" ? [
    { icon: Lightbulb, title: "Develop Economic Potential", description: "Product innovation based on local resources", detail: "Village economic diversification" },
    { icon: Users, title: "Improve Community Skills", description: "Sustainable training", detail: "Local human resource empowerment" },
    { icon: Code, title: "Drive Digitalization", description: "Village digital transformation", detail: "Increasing efficiency & competitiveness" },
    { icon: Sprout, title: "Preserve the Environment", description: "Adopting sustainable practices", detail: "Green economy" },
    { icon: Palette, title: "Promote Local Wisdom", description: "Preserving unique cultural identity", detail: "Cultural preservation" },
    { icon: Handshake, title: "Build Strategic Partnerships", description: "Fair and resilient economy", detail: "Multi-stakeholder collaboration" },
  ] : [
    { icon: Lightbulb, title: "Mengembangkan Potensi Ekonomi", description: "Inovasi produk berbasis sumber daya lokal", detail: "Diversifikasi ekonomi desa" },
    { icon: Users, title: "Meningkatkan Keterampilan Masyarakat", description: "Pelatihan berkelanjutan", detail: "Pemberdayaan SDM lokal" },
    { icon: Code, title: "Mendorong Digitalisasi", description: "Transformasi digital desa", detail: "Meningkatkan efisiensi & daya saing" },
    { icon: Sprout, title: "Melestarikan Lingkungan", description: "Mengadopsi praktik berkelanjutan", detail: "Green economy" },
    { icon: Palette, title: "Mempromosikan Kearifan Lokal", description: "Mempertahankan identitas budaya unik", detail: "Cultural preservation" },
    { icon: Handshake, title: "Membangun Kemitraan Strategis", description: "Ekonomi yang adil dan tangguh", detail: "Kolaborasi multi-stakeholder" },
  ]

  const mainMissions = lang === "en" ? [
    { icon: TrendingUp, title: "Improve Community Welfare", points: ["Local economic empowerment", "Increasing village income"] },
    { icon: Briefcase, title: "Reduce Unemployment", points: ["Creating job opportunities", "Developing local MSMEs"] },
    { icon: Leaf, title: "Preserve Nature", points: ["Sustainable practices", "Environmental conservation"] },
    { icon: Building, title: "Strengthen Local Identity", points: ["Cultural preservation", "Local wisdom"] },
  ] : [
    { icon: TrendingUp, title: "Meningkatkan Kesejahteraan Masyarakat", points: ["Pemberdayaan ekonomi lokal", "Peningkatan pendapatan desa"] },
    { icon: Briefcase, title: "Mengurangi Pengangguran", points: ["Menciptakan lapangan kerja", "Mengembangkan UMKM lokal"] },
    { icon: Leaf, title: "Melestarikan Alam", points: ["Praktik berkelanjutan", "Konservasi lingkungan"] },
    { icon: Building, title: "Memperkuat Identitas Lokal", points: ["Pelestarian budaya", "Kearifan lokal"] },
  ]

  const timeline = lang === "en" ? [
    { year: "Late 2021", title: "Initial Program", description: "Start of post-COVID village assistance program", detail: "Early phase of village community mentoring" },
    { year: "2021-2023", title: "Regional Expansion", description: "Expansion to various regions (NTT, Riau Islands, Central Java)", detail: "20+ village masterplan projects" },
    { year: "2024", title: "Official Establishment", description: "Official establishment of PT Natadesa Bangun Negeri", detail: "Launch of bisnisdesa.id platform and digital technology implementation (RFID, ERP)" },
    { year: "2025", title: "Continued Expansion", description: "Expansion to East Kalimantan & West Java", detail: "District-scale KDMP training" },
  ] : [
    { year: "Akhir 2021", title: "Program Awal", description: "Dimulainya program bantuan desa pasca-COVID", detail: "Fase awal pendampingan masyarakat desa" },
    { year: "2021-2023", title: "Ekspansi Regional", description: "Ekspansi ke berbagai daerah (NTT, Kepulauan Riau, Jawa Tengah)", detail: "20+ proyek rencana induk desa" },
    { year: "2024", title: "Pendirian Resmi", description: "Pendirian resmi PT Natadesa Bangun Negeri", detail: "Peluncuran platform bisnisdesa.id dan implementasi teknologi digital (RFID, ERP)" },
    { year: "2025", title: "Ekspansi Berkelanjutan", description: "Ekspansi ke Kalimantan Timur & Jawa Barat", detail: "Pelatihan KDMP skala kabupaten" },
  ]

  const teamLeaders = [
    { name: "Prof. Dr. dr. Asra AlFauzi, Sp.BS, Subsp. N Vas", position: lang === "en" ? "Advisor" : "Penasihat", image: "/dr.jpeg" },
    { name: "Harri Yudho P .SE", position: "Founder", image: "/HARRI.png" },
    { name: "Salim Khan", position: "Co Founder", image: "/salim-khan.jpg" },
    { name: "Alifta Asyari R, A.MD", position: "Business Development", image: "/TATA.png" },
    { name: "Irfan Saputra S. Ars", position: "Operational", image: "/IRFAN.png" },
    { name: "Dinda P", position: "Marketing", image: "/dinda-p.jpg" },
  ]

  const teamSupport = [
    { department: "IT Support", icon: Code, members: ["P Alifian Nugroho ( Software Engineer)", "Arnold Tumewu", "Kholilurrohman"] },
    {
      department: "Media & Content", icon: Camera,
      members: lang === "en"
        ? ["M. Rafly Nur Iswandi (Videographer)", "Nizam Rifyal Aufa (Social Media Specialist)", "Farih Zuhair Al Haidar (Photographer)"]
        : ["M. Rafly Nur Iswandi (Videografer)", "Nizam Rifyal Aufa (Media Sosial Spesialis)", "Farih Zuhair Al Haidar (Fotografer)"],
    },
    {
      department: lang === "en" ? "Planning & Design" : "Perencanaan & Desain", icon: PenTool,
      members: lang === "en"
        ? ["Fatimah Azahro (Urban Planning)", "Nafila Nur Izza (Area Design)", "Thifaltsabita Zharifah Hanin (Area Design)", "Auuwalatussa'iyah Nurrohmah (Architecture)", "Muhammad Fathir Al Kahfi (Architecture)", "Muhammad Galvani Nauval Zahid (Civil Engineering)"]
        : ["Fatimah Azahro (Plano)", "Nafila Nur Izza (Perancangan Kawasan)", "Thifaltsabita Zharifah Hanin (Perancangan Kawasan)", "Auuwalatussa'iyah Nurrohmah (Arsitektur)", "Muhammad Fathir Al Kahfi (Arsitektur)", "Muhammad Galvani Nauval Zahid (Teknik Sipil)"],
    },
    { department: "E-Commerce", icon: ShoppingCart, members: ["Fatichah Eri (E-commerce Team)"] },
  ]

  const values = lang === "en" ? [
    { icon: Target, title: "Transparency", description: "Accountable operations" },
    { icon: Globe, title: "Sustainability", description: "Environmentally friendly practices" },
    { icon: Handshake, title: "Collaboration", description: "Strong partnerships" },
    { icon: Lightbulb, title: "Innovation", description: "Creative solutions for villages" },
    { icon: Heart, title: "Empowerment", description: "Focus on communities" },
  ] : [
    { icon: Target, title: "Transparansi", description: "Operasional yang akuntabel" },
    { icon: Globe, title: "Keberlanjutan", description: "Praktik ramah lingkungan" },
    { icon: Handshake, title: "Kolaborasi", description: "Kemitraan yang kuat" },
    { icon: Lightbulb, title: "Inovasi", description: "Solusi kreatif untuk desa" },
    { icon: Heart, title: "Pemberdayaan", description: "Fokus pada masyarakat" },
  ]

  const impactMetrics = lang === "en" ? [
    { number: 83971, label: "Total villages in Indonesia (TAM)", suffix: "" },
    { number: 6042, label: "Active tourism villages (SAM)", suffix: "" },
    { number: 1921, label: "Target villages in Java & Bali (SOM)", suffix: "" },
    { number: 20, label: "Completed projects", suffix: "+" },
    { number: 5, label: "Provinces reached", suffix: "" },
  ] : [
    { number: 83971, label: "Total desa di Indonesia (TAM)", suffix: "" },
    { number: 6042, label: "Desa wisata aktif (SAM)", suffix: "" },
    { number: 1921, label: "Target desa di Jawa & Bali (SOM)", suffix: "" },
    { number: 20, label: "Proyek selesai", suffix: "+" },
    { number: 5, label: "Provinsi jangkauan", suffix: "" },
  ];



  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]

  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const staticImages = [
    "/tentangkami1.JPG",
    "/tentangkami2.png",
    "/tentangkami3.jpg",
    "/tentangkami4.jpg",

  ];

  const workSteps = lang === "en" ? [
    {
      title: "Capacity Building",
      items: ["Financial literacy training", "Digital marketing training", "Production standardization"],
    },
    {
      title: "Digital Integration",
      items: ["ERP system for villages", "Marketplace bisnisdesa.id", "Designed for low connectivity", "Technology literacy optimization"],
    },
    {
      title: "Market Linkage",
      items: ["Direct distribution channels", "Connection to national retail", "Access to export hubs"],
    },
  ] : [
    {
      title: "Peningkatan Kapasitas",
      items: ["Pelatihan literasi keuangan", "Pelatihan pemasaran digital", "Standarisasi produksi"],
    },
    {
      title: "Integrasi Digital",
      items: ["ERP system untuk desa", "Marketplace bisnisdesa.id", "Dirancang untuk konektivitas rendah", "Optimasi literasi teknologi"],
    },
    {
      title: "Keterkaitan Pasar",
      items: ["Jalur distribusi langsung", "Koneksi ke ritel nasional", "Akses ke pusat ekspor"],
    },
  ]

  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative py-24 md:py-22 overflow-hidden flex items-center justify-center">
          {/* Background Image Container */}
          <div className="absolute inset-0 z-0">
            <img
              src="/sawah.jpg" // Ganti dengan path gambar tentang kami
              alt="Background Tentang Kami"
              className="w-full h-full object-cover"
            />
            {/* Overlay Hijau Khas Natadesa */}
            <div className="absolute inset-0 bg-black/40 " />
          </div>

          <div className="container relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-3xl mx-auto text-center"
            >
              {/* Judul diubah menjadi Putih karena BG Gelap */}
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white">
                {t.about.heroTitle}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 text-pretty leading-relaxed">
                {t.about.heroSubtitle}
              </p>
              <p className="mt-4 text-base md:text-lg text-white/80 text-pretty leading-relaxed">
                {t.about.heroDesc}
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16 bg-[#172317] text-white overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="container max-w-7xl mx-auto px-6 lg:px-8"
          >
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="space-y-6">
                <div>
                  {/* Ukuran judul dikurangi agar tidak terlalu raksasa */}
                  <h2 className="text-2xl font-bold mb-6 text-white">{t.about.profileTitle}</h2>
                  <div className="space-y-4">
                    <div>
                      <p className="font-medium text-xs text-white-200 uppercase tracking-wider mb-1">{t.about.officialName}</p>
                      <p className="text-base text-white">PT Natadesa Bangun Negeri</p>
                    </div>
                    <div>
                      <p className="font-medium text-xs text-white-200 uppercase tracking-wider mb-1">{t.about.trademark}</p>
                      <p className="text-base text-white">Natadesa Nusantara</p>
                    </div>
                    <div>
                      <p className="font-medium text-xs text-white-200 uppercase tracking-wider mb-1">{t.about.website}</p>
                      <div className="flex flex-wrap gap-2 text-base">
                        <Link href="https://v0-nata-desa.vercel.app/" className="text-yellow-400 hover:text-yellow-300 transition-colors underline-offset-4 hover:underline">
                          bisnisdesa.id
                        </Link>
                        <span className="text-green-400">•</span>
                        <Link href="https://natadesanusantara.com" className="text-yellow-400 hover:text-yellow-300 transition-colors underline-offset-4 hover:underline">
                          natadesanusantara.com
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white">
                  <CardContent className="pt-6 space-y-5">
                    {/* Komponen Card dan isinya tetap utuh 100% */}
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm mb-1 text-white">{t.about.companyDescLabel}</p>
                        <p className="text-sm text-green-50/90 leading-relaxed">{t.about.companyDescText}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm mb-1 text-white">{t.about.approachLabel}</p>
                        <p className="text-sm text-green-50/90 leading-relaxed">{t.about.approachText}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-sm mb-1 text-white">{t.about.resultLabel}</p>
                        <p className="text-sm text-green-50/90 leading-relaxed">{t.about.resultText}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Pastikan kamu mendefinisikan array ini di dalam komponen sebelum return */}
        {/* const staticImages = ["/img1.jpg", "/img2.jpg", "/img3.jpg"]; */}

        <section className="py-12 md:py-20 bg-muted/30 overflow-hidden">
          <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#172317]">{t.about.historyTitle}</h2>
              <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">{t.about.historyDesc}</p>
            </div>

            <div ref={containerRef} className="relative max-w-5xl mx-auto">
              {/* Track & Progress Line */}
              <div className="absolute left-[20px] md:left-[23px] top-2 bottom-2 w-[2px] bg-green-100" />
              <motion.div
                className="absolute left-[20px] md:left-[23px] top-2 bottom-2 w-[2px] bg-green-600 origin-top z-10"
                style={{ scaleY }}
              />

              <div className="space-y-8 md:space-y-12">
                {timeline && timeline.map((item, index) => (
                  <div key={index} className="flex gap-6 md:gap-10 relative group">

                    {/* Dot Numbering */}
                    <div className="flex flex-col items-center flex-shrink-0">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border-2 border-green-600 text-green-600 group-hover:bg-green-600 group-hover:text-white flex items-center justify-center font-bold text-xs md:text-sm z-20 shadow-sm transition-all duration-300">
                        {index + 1}
                      </div>
                    </div>

                    {/* Content Card */}
                    <motion.div
                      className="flex-1 min-w-0"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-50px" }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card className="relative overflow-hidden border-none shadow-lg bg-slate-900 group/card min-h-[220px] md:min-h-[260px]">

                        {/* Background Image Logic: Static Images from Public Folder */}
                        <div className="absolute inset-0 z-0">
                          <img
                            src={staticImages[index % staticImages.length]}
                            alt={item.title}
                            className="w-full h-full object-cover opacity-100 transition-transform duration-700 group-hover/card:scale-105"
                          />
                          {/* Gradient: Gelap lebih ke kanan agar teks putih pop out */}
                          <div className="absolute inset-0 bg-gradient-to-r from-[#172317] via-black/70 via-[30%] to-transparent" />
                        </div>

                        <CardContent className="relative z-10 p-0 h-full">
                          <div className="grid grid-cols-1 md:grid-cols-2 h-full">

                            {/* Text Section */}
                            <div className="p-6 md:p-8 flex flex-col justify-center">
                              <div className="flex items-center mb-3">
                                <span className="text-[10px] md:text-xs font-bold tracking-wider text-white bg-green-600 px-3 py-1 rounded-full shadow-lg">
                                  {item.year}
                                </span>
                              </div>

                              <h3 className="font-bold text-xl md:text-2xl mb-2 text-white group-hover/card:text-green-400 transition-colors duration-300">
                                {item.title}
                              </h3>

                              <p className="text-sm md:text-base text-slate-200 leading-relaxed mb-4">
                                {item.description}
                              </p>

                              {item.detail && (
                                <div className="pt-4 border-t border-white/10">
                                  <p className="text-xs md:text-sm text-slate-300 font-normal flex items-start gap-2 italic">
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0" />
                                    {item.detail}
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* Empty Space for Background Visibility on Desktop */}
                            <div className="hidden md:block pointer-events-none" />
                          </div>
                        </CardContent>

                        {/* Bottom Border Accent */}
                        <div className="absolute bottom-0 left-0 h-1 bg-green-500 w-0 group-hover/card:w-full transition-all duration-500" />
                      </Card>
                    </motion.div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-24 overflow-hidden">
          {/* Image Background */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/sawah.jpg"
              alt="Background"
              className="w-full h-full object-cover scale-105" // Sedikit scale agar tidak ada gap putih di pinggir
            />
            {/* Overlay Overlay yang lebih gelap agar teks terbaca jelas */}
            <div className="absolute inset-0 bg-black/60 dark:bg-black/80 backdrop-grayscale-[20%]" />
          </div>

          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-extrabold mb-4 text-white tracking-tight">{t.about.mainMissionTitle}</h2>
              <p className="text-white/70 text-lg max-w-2xl mx-auto">{t.about.mainMissionDesc}</p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {mainMissions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                >
                  <Card className="group relative h-full text-center transition-all duration-500 cursor-pointer overflow-hidden
                /* Base Style (Biasa) */
                bg-white/10 dark:bg-zinc-900/40 backdrop-blur-md border border-white/20 
                
                /* Hover Style (Glassmorphism Tinggi) */
                hover:bg-white/20 hover:dark:bg-white/10 
                hover:backdrop-blur-xl 
                hover:border-white/40 
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)] 
                hover:-translate-y-3">

                    {/* Efek Cahaya Halus saat Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <CardContent className="relative z-10 pt-10 pb-8 px-6">
                      {/* Icon Container */}
                      <div className="rounded-2xl bg-primary/20 w-16 h-16 flex items-center justify-center mx-auto mb-6 
                    transition-all duration-500 group-hover:scale-110 group-hover:bg-primary group-hover:rotate-3">
                        <mission.icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                      </div>

                      <h3 className="font-bold text-xl mb-4 text-white transition-colors duration-300">
                        {mission.title}
                      </h3>

                      <ul className="space-y-3 text-sm">
                        {mission.points.map((point, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-left">
                            <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0 transition-colors duration-300 group-hover:text-white" />
                            <span className="leading-snug text-white/80 group-hover:text-white transition-colors duration-300">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#172317] text-white overflow-hidden">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-white">{t.about.howWeWorkTitle}</h2>
              <p className="text-green-50/80 max-w-3xl mx-auto text-pretty leading-relaxed">
                {t.about.howWeWorkDesc}{" "}
                <a
                  href="https://v0-nata-desa.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-[#E67E22] hover:text-yellow-500 underline underline-offset-4 decoration-yellow-400 transition-colors"
                >
                  bisnisdesa.id
                </a>{t.about.howWeWorkDesc2}
              </p>
            </motion.div>

            <div className="grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
              {workSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
                >
                  <Card className="bg-white border-none shadow-xl h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                    <CardHeader>
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 ring-8 ring-green-50">
                        <span className="text-xl font-bold text-green-600">{index + 1}</span>
                      </div>
                      <CardTitle className="text-slate-900 font-bold">{step.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {step.items.map((item, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-slate-600 leading-snug">{item}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 overflow-hidden bg-white"> {/* Background putih sesuai preferensi sebelumnya */}
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <Card className="relative border-none bg-gradient-to-br from-primary/[0.08] via-transparent to-accent/[0.08] shadow-2xl shadow-primary/5 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

                  <CardContent className="pt-16 pb-16 px-8 md:px-16">
                    <div className="text-center mb-8">
                      <motion.div
                        initial={{ scale: 0.8 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <Award className="h-16 w-16 text-primary mx-auto mb-6 opacity-80" />
                      </motion.div>
                      <h2 className="text-4xl font-bold mb-6 tracking-tight text-slate-900 dark:text-white">
                        {t.about.visionTitle}
                      </h2>
                    </div>

                    <blockquote className="relative min-h-[160px] flex items-center justify-center">
                      {/* Tanda kutip dekoratif */}
                      <span className="absolute -top-8 -left-4 text-8xl text-primary/10 font-serif leading-none">“</span>

                      <div className="text-xl md:text-2xl text-center text-muted-foreground text-pretty leading-relaxed italic relative z-10">
                        <Typewriter
                          options={{
                            delay: 40, // Kecepatan mengetik (ms)
                            cursor: "|",
                            autoStart: true,
                            loop: false,
                          }}
                          onInit={(typewriter) => {
                            typewriter
                              .typeString(t.about.visionText)
                              .start();
                          }}
                        />
                      </div>

                      <span className="absolute -bottom-16 -right-4 text-8xl text-primary/10 font-serif leading-none">”</span>
                    </blockquote>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-slate-900">{t.about.strategicMissionsTitle}</h2>
              <p className="text-muted-foreground">{t.about.strategicMissionsDesc}</p>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {missions.map((mission, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1
                  }}
                >
                  <Card className="bg-white border-2 border-transparent hover:border-green-600 transition-all duration-300 shadow-sm hover:shadow-lg h-full">
                    <CardContent className="pt-6">
                      <mission.icon className="h-10 w-10 text-green-600 mb-4" />
                      <h3 className="font-semibold mb-2 text-lg text-slate-900">{mission.title}</h3>
                      <p className="text-sm text-slate-600 mb-1">{mission.description}</p>
                      <p className="text-xs text-slate-500">{mission.detail}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">{t.about.teamTitle}</h2>
              <p className="text-muted-foreground">{t.about.teamDesc}</p>
            </div>

            {/* Leadership Team - Dengan Foto & Layout Keren */}
            <div className="mb-20">
              <h3 className="text-3xl font-bold text-center mb-12 text-slate-800 tracking-tight">{t.about.leadershipTitle}</h3>

              {/* Menggunakan Flexbox agar item ke-4 & 5 otomatis di tengah */}
              <div className="flex flex-wrap justify-center gap-8 lg:gap-10 max-w-6xl mx-auto px-4">
                {teamLeaders.map((leader, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="w-full sm:w-[280px] lg:w-[300px]"
                  >
                    <div className="group relative flex flex-col items-center">

                      {/* Frame Foto Unik */}
                      <div className="relative w-full aspect-[3/4] overflow-hidden rounded-2xl mb-6 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2">

                        {leader.image ? (
                          <img
                            src={leader.image}
                            alt={leader.name}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center bg-slate-100 text-slate-300">
                            <Users className="h-20 w-20" />
                          </div>
                        )}
                      </div>

                      {/* Info Text - Always Visible */}
                      <div className="text-center relative z-10 w-full px-2">
                        <h3 className="font-bold text-xl text-slate-900 leading-tight">
                          {leader.name}
                        </h3>
                        <p className="text-sm font-medium uppercase tracking-wider text-green-600 mt-2 border-t border-slate-200 pt-2 inline-block">
                          {leader.position}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Support Team - Tetap Minimalis (Tanpa Foto) */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">{t.about.supportTitle}</h3>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {teamSupport.map((team, index) => (
                  <Card
                    key={index}
                    className="bg-white border-transparent hover:border-primary/50 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <CardHeader>
                      <team.icon className="h-8 w-8 text-primary mb-2" />
                      <CardTitle className="text-lg">{team.department}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {team.members.map((member, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{member}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold mb-4 text-center">{t.about.legalityTitle}</h2>
              <p className="text-center text-muted-foreground mb-12">{t.about.legalityDesc}</p>
              <div className="grid gap-6 md:grid-cols-2">
                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <FileCheck className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{t.about.foundingDeed}</h3>
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">
                        {t.about.registeredTag}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{t.about.foundingDesc}</p>
                      <div className="w-full bg-muted p-3 rounded">
                        <p className="text-xs text-muted-foreground mb-1">{t.about.ahuNumber}</p>
                        <p className="font-mono text-sm font-semibold">AHU-00910.AH.02.01.TAHUN2021</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-primary/50 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Award className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="font-bold text-lg mb-2">{t.about.businessLicense}</h3>
                      <div className="inline-block px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-3">
                        {t.about.activeTag}
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">{t.about.operationalAuth}</p>
                      <p className="text-sm text-muted-foreground">{t.about.validFor}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
              <p className="text-center text-sm text-muted-foreground mt-8">{t.about.docsOnRequest}</p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            {/* Animasi untuk Header Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4">{t.about.valuesTitle}</h2>
              <p className="text-muted-foreground">{t.about.valuesDesc}</p>
            </motion.div>

            {/* Container untuk Grid dengan Stagger Effect */}
            <motion.div
              className="grid gap-6 md:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto"
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15 // Memberikan jeda antar kartu 0.15 detik
                  }
                }
              }}
            >
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 }, // Mulai dari bawah (y: 30)
                    show: { opacity: 1, y: 0 }    // Berakhir di posisi asli (y: 0)
                  }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                >
                  <Card className="text-center h-full hover:shadow-lg transition-shadow border-2 hover:border-primary/20">
                    <CardContent className="pt-6">
                      <value.icon className="h-10 w-10 text-primary mx-auto mb-4" />
                      <h3 className="font-semibold mb-2">{value.title}</h3>
                      <p className="text-sm text-muted-foreground">{value.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="relative py-20 overflow-hidden">
          {/* Gambar Background */}
          <div className="absolute inset-0 -z-10">
            <img
              src="/sawah.jpg"
              alt="Pencapaian Background"
              className="w-full h-full object-cover"
            />
            {/* Overlay Hijau Gelap dengan gradien agar lebih dalam */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#172317]/95 via-[#172317]/80 to-[#172317]/95" />
          </div>

          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4 text-white tracking-tight">{t.about.impactTitle}</h2>
              <p className="text-green-50/70 max-w-2xl mx-auto">{t.about.impactDesc}</p>
            </div>

            {/* Container Grid */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1 }
                }
              }}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5 max-w-6xl mx-auto"
            >
              {impactMetrics.map((metric, index) => (
                <motion.div
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                  }}
                  whileHover={{ y: -10 }} // Card naik sedikit saat dihover
                  className="h-full"
                >
                  <Card className="group relative h-full overflow-hidden border-none bg-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/20 ring-1 ring-white/20 hover:ring-[#E67E22]/50">
                    {/* Efek Cahaya Orange saat Hover */}
                    <div className="absolute -right-4 -top-4 h-16 w-16 rounded-full bg-[#E67E22]/20 blur-2xl transition-opacity opacity-0 group-hover:opacity-100" />

                    <CardContent className="relative pt-8 pb-6 px-4">
                      <div className="text-center">
                        <p className="text-4xl font-extrabold text-white mb-2 tracking-tighter group-hover:text-[#E67E22] transition-colors duration-300">
                          <CounterWrapper value={metric.number} delay={0.6 + (index * 0.1)} />
                          <span className="text-[#E67E22]">{metric.suffix}</span>
                        </p>
                        <div className="h-1 w-8 bg-[#E67E22] mx-auto mb-4 rounded-full opacity-50 group-hover:w-12 group-hover:opacity-100 transition-all duration-300" />
                        <p className="text-[11px] font-medium uppercase tracking-widest text-green-50/80 leading-snug">
                          {metric.label}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="py-20 from-primary/10 via-background to-accent/10 bg-[#172317]">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              {/* Rocket Putih */}
              <Rocket className="h-16 w-16 text-white mx-auto mb-6" />

              <h2 className="text-3xl font-bold mb-4 text-white">{t.about.ctaTitle}</h2>
              <p className="text-lg text-muted-foreground mb-8 text-pretty text-white">{t.about.ctaDesc}</p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                {/* Hubungi Kami */}
                <Button asChild size="lg">
                  <Link href="/kontak">
                    <Phone className="mr-2 h-5 w-5" />
                    {t.about.ctaContact}
                  </Link>
                </Button>

                {/* Portfolio: Awal Orange, Hover Outline */}
                <Button
                  asChild
                  size="lg"
                  className="bg-[#E67E22] text-white border-2 border-[#E67E22] hover:bg-transparent hover:text-[#E67E22] transition-all duration-300"
                >
                  <Link href="/portfolio">
                    {t.about.ctaPortfolio}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>

                {/* Download: PAKSA Teks Hitam (!text-black) */}
                <Button
                  asChild
                  size="lg"
                  className="bg-white !text-black border-2 border-white hover:bg-transparent hover:!text-white transition-all duration-300"
                >
                  <a href="https://drive.google.com/file/d/1WiQJcSd8FrrU_rjYAcEYH-YMqfHzMWxn/view?usp=sharing" download>
                    <Download className="mr-2 h-5 w-5" />
                    {t.about.ctaDownload}
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingActions />
    </>
  )
}
