import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contacto | Presupuesto | Advanced Telecom Madrid",
  description:
    "Contacta con nuestro equipo de telecomunicaciones en Madrid. Solicita presupuesto sin compromiso para antenas, cámaras de seguridad y porteros automáticos.",
  keywords:
    "contacto telecomunicaciones madrid, presupuesto antenas, teléfono empresa telecomunicaciones, email telecomunicaciones, dirección empresa telecomunicaciones",
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
}

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
