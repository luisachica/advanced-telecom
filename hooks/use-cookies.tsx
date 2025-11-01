'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export interface CookiePreferences {
  necessary: boolean
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

interface CookieContextType {
  cookiePreferences: CookiePreferences | null
  showBanner: boolean
  showPreferences: boolean
  acceptAllCookies: () => void
  rejectAllCookies: () => void
  savePreferences: (preferences: CookiePreferences) => void
  openPreferences: () => void
  closePreferences: () => void
  closeBanner: () => void
}

const CookieContext = createContext<CookieContextType | undefined>(undefined)

const defaultPreferences: CookiePreferences = {
  necessary: true, // Siempre true, no se puede desactivar
  analytics: false,
  marketing: false,
  preferences: false,
}

export function CookieProvider({ children }: { children: ReactNode }) {
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences | null>(null)
  const [showBanner, setShowBanner] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)

  useEffect(() => {
    // Verificar si ya existen preferencias guardadas
    const savedPreferences = localStorage.getItem('cookie-preferences')
    if (savedPreferences) {
      try {
        const preferences = JSON.parse(savedPreferences)
        setCookiePreferences(preferences)
        setShowBanner(false)
      } catch (error) {
        console.error('Error parsing saved cookie preferences:', error)
        setShowBanner(true)
      }
    } else {
      // Si no hay preferencias guardadas, mostrar el banner
      setShowBanner(true)
    }
  }, [])

  const savePreferences = (preferences: CookiePreferences) => {
    const preferencesWithNecessary = {
      ...preferences,
      necessary: true, // Las cookies necesarias siempre están activas
    }
    
    setCookiePreferences(preferencesWithNecessary)
    localStorage.setItem('cookie-preferences', JSON.stringify(preferencesWithNecessary))
    setShowBanner(false)
    setShowPreferences(false)

    // Disparar evento personalizado para que otros componentes puedan reaccionar
    window.dispatchEvent(new CustomEvent('cookiePreferencesChanged', {
      detail: preferencesWithNecessary
    }))
  }

  const acceptAllCookies = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    savePreferences(allAccepted)
  }

  const rejectAllCookies = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }
    savePreferences(onlyNecessary)
  }

  const openPreferences = () => {
    setShowPreferences(true)
  }

  const closePreferences = () => {
    setShowPreferences(false)
  }

  const closeBanner = () => {
    setShowBanner(false)
  }

  return (
    <CookieContext.Provider
      value={{
        cookiePreferences,
        showBanner,
        showPreferences,
        acceptAllCookies,
        rejectAllCookies,
        savePreferences,
        openPreferences,
        closePreferences,
        closeBanner,
      }}
    >
      {children}
    </CookieContext.Provider>
  )
}

export function useCookies() {
  const context = useContext(CookieContext)
  if (context === undefined) {
    throw new Error('useCookies must be used within a CookieProvider')
  }
  return context
}

// Hook para verificar si un tipo específico de cookie está permitido
export function useCookieConsent(type: keyof CookiePreferences): boolean {
  const { cookiePreferences } = useCookies()
  
  if (!cookiePreferences) {
    return false // Si no hay preferencias, no permitir cookies opcionales
  }
  
  return cookiePreferences[type]
}