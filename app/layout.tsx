import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Empresa de Limpiezas en Madrid | Servicios Profesionales de Limpieza",
  description:
    "Servicios profesionales de limpieza para empresas, oficinas y comunidades en toda la Comunidad de Madrid. Presupuesto sin compromiso en menos de 24 horas.",
  keywords:
    "limpieza madrid, servicio limpieza, limpieza oficinas, limpieza comunidades, limpieza fin de obra",
  authors: [{ name: "Limpiezas en Madrid" }],
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
    canonical: "https://www.limpiezasenmadrid.com",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.limpiezasenmadrid.com",
    title: "Empresa de Limpiezas en Madrid | Servicios Profesionales de Limpieza",
    description:
      "Servicios profesionales de limpieza para empresas, oficinas y comunidades en toda la Comunidad de Madrid.",
    siteName: "Limpiezas en Madrid",
    images: [
      {
        url: "/cleaning-logo.png",
        width: 800,
        height: 600,
        alt: "Limpiezas en Madrid Logo",
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <meta name="robots" content="noindex, nofollow" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
