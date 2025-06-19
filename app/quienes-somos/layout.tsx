import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiénes Somos | Empresa de Limpieza en Madrid",
  description:
    "Conozca nuestra empresa de limpieza en Madrid con más de 10 años de experiencia. Servicios profesionales para hogares, oficinas y comunidades.",
  keywords:
    "empresa limpieza madrid, quienes somos, servicios limpieza, experiencia limpieza, limpieza profesional madrid",
}

export default function QuienesSomosLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
