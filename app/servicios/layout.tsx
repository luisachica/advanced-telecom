import type React from "react"
import { metadataPagina } from "@/lib/paginas"

export const metadata = metadataPagina({
  title: "Servicios de Telecomunicaciones y Seguridad | Antenas Toledo",
  description:
    "Interferencias 5G, antenas y parabólicas, cámaras de seguridad, alarmas y videoporteros en Toledo y zona. Presupuesto sin compromiso.",
  ruta: "/servicios/",
})

export default function ServicesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
