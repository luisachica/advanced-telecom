import type React from "react"
import type { Metadata } from "next"
import { withPhone } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contacto | Presupuesto | ☎️ 668 67 95 00 ",
  description: withPhone(
    "Contacta con nuestro equipo de telecomunicaciones en . Solicita presupuesto sin compromiso para antenas, cámaras de seguridad y porteros automáticos."
  ),
  keywords:
    "contacto telecomunicaciones , presupuesto antenas, teléfono empresa telecomunicaciones, email telecomunicaciones, dirección empresa telecomunicaciones",
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
