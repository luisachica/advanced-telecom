import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Blog de Telecomunicaciones | Consejos y Noticias | Advanced Telecom",
  description:
    "Descubre consejos profesionales de telecomunicaciones, noticias del sector y guías prácticas para mantener tus sistemas de comunicación optimizados.",
  keywords: "blog telecomunicaciones, consejos antenas, trucos telecomunicaciones, telecomunicaciones profesional, telecomunicaciones madrid",
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

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
