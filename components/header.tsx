"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [tentangKamiOpen, setTentangKamiOpen] = useState(false)
  const [layananOpen, setLayananOpen] = useState(false)
  const [portfolioOpen, setPortfolioOpen] = useState(false)

  const navigation = [
    { name: "Beranda", href: "/" },
    {
      name: "Tentang Kami",
      href: "/tentang-kami",
      submenu: [
        { name: "Profil Perusahaan", href: "/tentang-kami" },
        { name: "Solusi & Framework", href: "/solusi" },
        { name: "Analisis Bisnis", href: "/analisis" },
      ],
    },
    {
      name: "Layanan",
      href: "/layanan",
      submenu: [
        { name: "Layanan Kami", href: "/layanan" },
        { name: "Platform Bisnisdesa.id", href: "/platform" },
      ],
    },
    {
      name: "Portfolio",
      href: "/portfolio",
      submenu: [
        { name: "Proyek Kami", href: "/portfolio" },
        { name: "Mitra", href: "/mitra" },
      ],
    },
    { name: "Artikel", href: "/artikel" },
    { name: "Kontak", href: "/kontak" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container mx-auto flex items-center justify-between p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="text-xl font-bold text-primary">NATADESA</span>
            <span className="ml-2 text-sm text-muted-foreground">NUSANTARA</span>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Toggle menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) =>
            item.submenu ? (
              <div key={item.name} className="relative group">
                <button className="flex items-center gap-1 text-sm font-medium leading-6 hover:text-primary transition-colors">
                  {item.name}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-background border rounded-md shadow-lg">
                  {item.submenu.map((subitem) => (
                    <Link
                      key={subitem.name}
                      href={subitem.href}
                      className="block px-4 py-3 text-sm hover:bg-muted transition-colors first:rounded-t-md last:rounded-b-md"
                    >
                      {subitem.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium leading-6 hover:text-primary transition-colors"
              >
                {item.name}
              </Link>
            ),
          )}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <Button variant="outline" size="sm" asChild>
            <Link href="/kontak">Konsultasi Gratis</Link>
          </Button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="lg:hidden border-t">
          <div className="space-y-1 px-4 pb-3 pt-2">
            {navigation.map((item) =>
              item.submenu ? (
                <div key={item.name}>
                  <button
                    className="flex w-full items-center justify-between rounded-md px-3 py-2 text-base font-medium hover:bg-muted"
                    onClick={() => {
                      if (item.name === "Tentang Kami") {
                        setTentangKamiOpen(!tentangKamiOpen)
                      } else if (item.name === "Layanan") {
                        setLayananOpen(!layananOpen)
                      } else if (item.name === "Portfolio") {
                        setPortfolioOpen(!portfolioOpen)
                      }
                    }}
                  >
                    {item.name}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        (item.name === "Tentang Kami" && tentangKamiOpen) ||
                        (item.name === "Layanan" && layananOpen) ||
                        (item.name === "Portfolio" && portfolioOpen)
                          ? "rotate-180"
                          : ""
                      }`}
                    />
                  </button>
                  {((item.name === "Tentang Kami" && tentangKamiOpen) ||
                    (item.name === "Layanan" && layananOpen) ||
                    (item.name === "Portfolio" && portfolioOpen)) && (
                    <div className="ml-4 space-y-1 mt-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          href={subitem.href}
                          className="block rounded-md px-3 py-2 text-sm hover:bg-muted"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-md px-3 py-2 text-base font-medium hover:bg-muted"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ),
            )}
            <div className="pt-2">
              <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                <Link href="/kontak">Konsultasi Gratis</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
