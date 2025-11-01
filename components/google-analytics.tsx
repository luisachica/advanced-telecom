'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import { useCookieConsent } from '@/hooks/use-cookies'

// Reemplaza con tu ID de Google Analytics
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX'

declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export function GoogleAnalytics() {
  const analyticsConsent = useCookieConsent('analytics')

  useEffect(() => {
    if (typeof window !== 'undefined' && window.gtag) {
      // Actualizar el consentimiento cuando cambie
      window.gtag('consent', 'update', {
        analytics_storage: analyticsConsent ? 'granted' : 'denied',
        ad_storage: 'denied', // Siempre denegado por defecto
      })
    }
  }, [analyticsConsent])

  useEffect(() => {
    // Escuchar cambios en las preferencias de cookies
    const handleCookieChange = (event: CustomEvent) => {
      const preferences = event.detail
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('consent', 'update', {
          analytics_storage: preferences.analytics ? 'granted' : 'denied',
          ad_storage: preferences.marketing ? 'granted' : 'denied',
        })
      }
    }

    window.addEventListener('cookiePreferencesChanged', handleCookieChange as EventListener)
    
    return () => {
      window.removeEventListener('cookiePreferencesChanged', handleCookieChange as EventListener)
    }
  }, [])

  if (!analyticsConsent) {
    return null
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            
            // Configurar el consentimiento por defecto
            gtag('consent', 'default', {
              analytics_storage: 'denied',
              ad_storage: 'denied',
              wait_for_update: 500,
            });
            
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          `,
        }}
      />
    </>
  )
}

// Hook para enviar eventos personalizados a Google Analytics
export function useGoogleAnalytics() {
  const analyticsConsent = useCookieConsent('analytics')

  const trackEvent = (
    action: string,
    category: string,
    label?: string,
    value?: number
  ) => {
    if (!analyticsConsent || typeof window === 'undefined' || !window.gtag) {
      return
    }

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }

  const trackPageView = (url: string, title?: string) => {
    if (!analyticsConsent || typeof window === 'undefined' || !window.gtag) {
      return
    }

    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path: url,
      page_title: title,
    })
  }

  return {
    trackEvent,
    trackPageView,
    isEnabled: analyticsConsent,
  }
}

export default GoogleAnalytics