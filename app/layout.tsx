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
  metadataBase: new URL("https://advancedtelecom.es"),
  title: "Advanced Telecom Madrid | Servicios de telecomunicaciones",
  description: withPhone(
    "Servicios profesionales de telecomunicaciones en Madrid. Instalación de antenas, porteros automáticos y sistemas de seguridad. Presupuesto sin compromiso."
  ),
  keywords:
    "telecomunicaciones madrid, antenas TDT, antenas parabólicas, porteros automáticos, cámaras seguridad, interferencias 4G",
  authors: [{ name: "Advanced Telecom" }],
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
  alternates: {
    canonical: "https://advancedtelecom.es",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://advancedtelecom.es",
    title: "Advanced Telecom Madrid | Servicios de telecomunicaciones",
    description: withPhone(
      "Servicios profesionales de telecomunicaciones en Madrid. Instalación de antenas, porteros automáticos y sistemas de seguridad."
    ),
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
  twitter: {
    card: "summary_large_image",
    title: "Advanced Telecom Madrid | Servicios de telecomunicaciones",
    description: withPhone(
      "Servicios profesionales de telecomunicaciones en Madrid. Instalación de antenas, porteros automáticos y sistemas de seguridad."
    ),
    images: ["/logo-advanced-telecom.jpg"],
  },
  // ✅ AQUÍ VA LA PROPIEDAD 'icons', DENTRO DEL OBJETO
  icons: {
    icon: [
      { url: '/favicon-advanced-telecom.webp', sizes: '16x16', type: 'image/webp' },
      { url: '/favicon-advanced-telecom.webp', sizes: '32x32', type: 'image/webp' },
      { url: '/favicon-advanced-telecom.webp', sizes: '48x48', type: 'image/webp' },
      { url: '/favicon-advanced-telecom.webp', sizes: '64x64', type: 'image/webp' },
      { url: '/favicon-advanced-telecom.webp', sizes: '96x96', type: 'image/webp' },
      { url: '/favicon-advanced-telecom.webp', sizes: '128x128', type: 'image/webp' },
      { url: '/favicon-advanced-telecom.webp', sizes: '192x192', type: 'image/webp' },
    ],
    apple: [
      { url: '/favicon-advanced-telecom.webp', sizes: '180x180', type: 'image/webp' },
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