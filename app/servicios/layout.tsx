import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de Telecomunicaciones | Advanced Telecom Madrid",
  description:
    "Servicios profesionales de telecomunicaciones: antenas TDT, porteros automáticos, cámaras de seguridad y más en Madrid. Presupuesto sin compromiso.",
  keywords:
    "servicios telecomunicaciones madrid, antenas TDT, porteros automaticos, camaras seguridad, reparaciones urgentes, instalaciones telecomunicaciones",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: "https://www.advancedtelecom.es/servicios",
  },
}

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
