import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Solicita Presupuesto | Limpiezas en Madrid",
  description:
    "Contacta con nuestro equipo de limpieza profesional en Madrid. Solicita un presupuesto sin compromiso para servicios de limpieza para hogares, oficinas y comunidades.",
  keywords:
    "contacto limpieza madrid, presupuesto limpieza, teléfono empresa limpieza, email limpieza, dirección empresa limpieza",
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
