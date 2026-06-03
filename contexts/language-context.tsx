"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Lang, type Translations, translations } from "@/lib/translations"

type LanguageCtx = {
  lang: Lang
  setLang: (l: Lang) => void
  t: Translations
}

const Ctx = createContext<LanguageCtx | null>(null)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("id")

  useEffect(() => {
    const saved = localStorage.getItem("natadesa-lang") as Lang | null
    if (saved === "en" || saved === "id") setLangState(saved)
  }, [])

  const setLang = (l: Lang) => {
    setLangState(l)
    localStorage.setItem("natadesa-lang", l)
  }

  return (
    <Ctx.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </Ctx.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("useLanguage must be inside LanguageProvider")
  return ctx
}
