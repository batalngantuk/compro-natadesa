"use client"

import { MessageCircle, FileDown, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function FloatingActions() {
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp */}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg bg-[#25D366] hover:bg-[#20BA5A] text-white"
        onClick={() => window.open("https://wa.me/6288200637845", "_blank")}
      >
        <MessageCircle className="h-5 w-5" />
        <span className="sr-only">{t.floating.whatsapp}</span>
      </Button>

      {/* Konsultasi */}
      <Button
        size="icon"
        className="h-12 w-12 rounded-full shadow-lg"
        onClick={() => (window.location.href = "/kontak")}
      >
        <Phone className="h-5 w-5" />
        <span className="sr-only">{t.floating.consult}</span>
      </Button>

      {/* Download Company Profile */}
      <Button
        size="icon"
        variant="secondary"
        className="h-12 w-12 rounded-full shadow-lg"
        onClick={() => alert(t.floating.downloadAlert)}
      >
        <FileDown className="h-5 w-5" />
        <span className="sr-only">{t.floating.download}</span>
      </Button>
    </div>
  )
}
