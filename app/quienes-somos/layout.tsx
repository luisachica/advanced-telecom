import type React from "react"
import type { Metadata } from "next"
import { withPhone } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Quiénes Somos | Antenas Toledo ",
  description: withPhone(
    "Conozca Antenas Toledo, empresa de telecomunicaciones en  con más de 25 años de experiencia. Servicios especializados en antenas y porteros automáticos."
  ),
  keywords:
    "empresa telecomunicaciones , quienes somos, servicios telecomunicaciones, experiencia telecomunicaciones, antenas , porteros automaticos ",
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

export default function QuienesSomosLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
