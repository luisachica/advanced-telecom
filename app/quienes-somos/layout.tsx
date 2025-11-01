import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quiénes Somos | Advanced Telecom Madrid",
  description:
    "Conozca Advanced Telecom, empresa de telecomunicaciones en Madrid con más de 25 años de experiencia. Servicios especializados en antenas y porteros automáticos.",
  keywords:
    "empresa telecomunicaciones madrid, quienes somos, servicios telecomunicaciones, experiencia telecomunicaciones, antenas madrid, porteros automaticos madrid",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
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
