import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Advanced Telecom Madrid | Servicios de telecomunicaciones",
  description:
    "Servicios profesionales de telecomunicaciones en Madrid. Instalación de antenas, porteros automáticos y sistemas de seguridad. Presupuesto sin compromiso.",
  keywords:
    "telecomunicaciones madrid, antenas TDT, antenas parabólicas, porteros automáticos, cámaras seguridad, interferencias 4G",
  authors: [{ name: "Advanced Telecom" }],
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
    canonical: "https://www.advancedtelecom.es",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.advancedtelecom.es",
    title: "Advanced Telecom Madrid | Servicios de telecomunicaciones",
    description:
      "Servicios profesionales de telecomunicaciones en Madrid. Instalación de antenas, porteros automáticos y sistemas de seguridad.",
    siteName: "Advanced Telecom",
    images: [
      {
        url: "/logo-advanced-telecom.jpg",
        width: 800,
        height: 600,
        alt: "Advanced Telecom Logo",
      },
    ],
  },
  // ✅ AQUÍ VA LA PROPIEDAD 'icons', DENTRO DEL OBJETO
  icons: {
    icon: [
      { url: '/favicon-advanced-telecom.webp', sizes: '16x16', type: 'image/webp' },
      { url: '/favicon-advanced-telecom.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/favicon-advanced-telecom.webp', sizes: '48x48', type: 'image/webp' },
      { url: '/favicon-advanced-telecom.webp', sizes: '64x64', type: 'image/webp' },
    ],
    apple: '/favicon-advanced-telecom.webp',
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