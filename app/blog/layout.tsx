import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog de Limpieza | Consejos y Noticias | Limpiezas en Madrid",
  description:
    "Descubre consejos profesionales de limpieza, noticias del sector y guías prácticas para mantener tus espacios impecables.",
  keywords: "blog limpieza, consejos limpieza, trucos limpieza hogar, limpieza profesional, limpieza madrid",
}

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
