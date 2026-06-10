import type React from "react"
import type { Metadata } from "next"
import { withPhone } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Servicios de Telecomunicaciones | ☎️ 668 67 95 00 ",
  description: withPhone(
    "Servicios profesionales de telecomunicaciones: antenas TDT, porteros automáticos, cámaras de seguridad y más en . Presupuesto sin compromiso."
  ),
  keywords:
    "servicios telecomunicaciones , antenas TDT, porteros automaticos, camaras seguridad, reparaciones urgentes, instalaciones telecomunicaciones",
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
  alternates: {
    canonical: "https://antenastoledo.com/servicios",
  },
}

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
