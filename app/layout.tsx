import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Empresa de limpiezas en Madrid | Servicios profesionales de limpieza",
  description:
    "Servicios profesionales de limpieza para empresas, oficinas y comunidades en toda la Comunidad de Madrid. Presupuesto sin compromiso en menos de 24 horas.",
  keywords:
    "limpieza madrid, servicio limpieza, limpieza oficinas, limpieza comunidades, limpieza fin de obra",
  authors: [{ name: "Limpiezas en Madrid" }],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: "https://www.limpiezasenmadrid.es",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.limpiezasenmadrid.es",
    title: "Empresa de limpiezas en Madrid | Servicios profesionales de limpieza",
    description:
      "Servicios profesionales de limpieza para empresas, oficinas y comunidades en toda la Comunidad de Madrid.",
    siteName: "Limpiezas en Madrid",
    images: [
      {
        url: "/Logo-limpiezas-en-madrid.png",
        width: 800,
        height: 600,
        alt: "Limpiezas en Madrid Logo",
      },
    ],
  },
  // ✅ AQUÍ VA LA PROPIEDAD 'icons', DENTRO DEL OBJETO
  icons: {
    icon: '/favicon-limpiezas-en-madrid.png',
  },

   
  verification: {
    google: "tiWL_UNHnP1IAJwvnFHE-yW7Wgt4XHmWaHXGmqkCMRA",
  },
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}