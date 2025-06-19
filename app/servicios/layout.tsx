import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Servicios de Limpieza Profesional en Madrid | Limpiezas en Madrid",
  description:
    "Descubre nuestros servicios profesionales de limpieza para hogares, oficinas, comunidades y más en toda la Comunidad de Madrid.",
  keywords:
    "servicios limpieza madrid, limpieza profesional, limpieza hogar, limpieza oficinas, limpieza comunidades, limpieza fin de obra",
}

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
