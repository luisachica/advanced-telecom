import type React from "react"
import "@/app/globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CookieProvider } from "@/hooks/use-cookies"
import CookieBanner from "@/components/cookie-banner"
import CookiePreferencesModal from "@/components/cookie-preferences-modal"
import GoogleAnalytics from "@/components/google-analytics"
import type { Metadata } from "next"
import { withPhone } from "@/lib/seo"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://antenastoledo.com"),
  title: "Antenas Toledo | Servicios de telecomunicaciones",
  description: withPhone(
    "Servicios profesionales de telecomunicaciones en Toledo. Instalación de antenas, porteros automáticos y sistemas de seguridad. Presupuesto sin compromiso."
  ),
  keywords:
    "telecomunicaciones toledo, antenas TDT, antenas parabólicas, porteros automáticos, cámaras seguridad, interferencias 4G",
  authors: [{ name: "Antenas Toledo" }],
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
  alternates: {
    canonical: "https://antenastoledo.com/",
    languages: {
      "es-ES": "https://antenastoledo.com/",
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://antenastoledo.com",
    title: "Antenas Toledo | Servicios de telecomunicaciones",
    description: withPhone(
      "Servicios profesionales de telecomunicaciones en Toledo. Instalación de antenas, porteros automáticos y sistemas de seguridad."
    ),
    siteName: "Antenas Toledo",
    images: [
      {
        url: "/logo-antenas-toledo.PNG",
        width: 800,
        height: 600,
        alt: "Antenas Toledo Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Antenas Toledo | Servicios de telecomunicaciones",
    description: withPhone(
      "Servicios profesionales de telecomunicaciones en Toledo    . Instalación de antenas, porteros automáticos y sistemas de seguridad."
    ),
    images: ["/logo-antenas-toledo.PNG"],
  },
  // ✅ AQUÍ VA LA PROPIEDAD 'icons', DENTRO DEL OBJETO
  icons: {
    icon: [
      { url: '/favicon-antenas-toledo.webp', sizes: '16x16', type: 'image/webp' },
      { url: '/favicon-antenas-toledo.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/favicon-antenas-toledo.webp', sizes: '48x48', type: 'image/webp' },
      { url: '/favicon-antenas-toledo.webp', sizes: '64x64', type: 'image/webp' },
      { url: '/favicon-antenas-toledo.webp', sizes: '96x96', type: 'image/webp' },
      { url: '/favicon-antenas-toledo.webp', sizes: '128x128', type: 'image/webp' },
      { url: '/favicon-antenas-toledo.webp', sizes: '192x192', type: 'image/webp' },
    ],
    apple: [
      { url: '/favicon-antenas-toledo.webp', sizes: '180x180', type: 'image/webp' },
    ],
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
        <CookieProvider>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            <GoogleAnalytics />
            {children}
            <CookieBanner />
            <CookiePreferencesModal />
          </ThemeProvider>
        </CookieProvider>
      </body>
    </html>
  )
}