'use client'

import { useCookies } from '@/hooks/use-cookies'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Cookie, Settings, X } from 'lucide-react'
import Link from 'next/link'

export function CookieBanner() {
  const { 
    showBanner, 
    acceptAllCookies, 
    rejectAllCookies, 
    openPreferences, 
    closeBanner 
  } = useCookies()

  if (!showBanner) {
    return null
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black/20 to-transparent">
      <Card className="mx-auto max-w-4xl bg-white/95 backdrop-blur-sm border shadow-lg">
        <div className="p-4 sm:p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <Cookie className="h-6 w-6 text-blue-600" />
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                🍪 Configuración de Cookies
              </h3>
              
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                Utilizamos cookies para mejorar tu experiencia de navegación, analizar el tráfico del sitio y personalizar el contenido. 
                Puedes aceptar todas las cookies, rechazar las opcionales o{' '}
                <button 
                  onClick={openPreferences}
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  configurar tus preferencias
                </button>
                . También puedes consultar nuestra{' '}
                <Link 
                  href="/politica-cookies" 
                  className="text-blue-600 hover:text-blue-800 underline font-medium"
                >
                  política de cookies
                </Link>
                {' '}para más información.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={acceptAllCookies}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Aceptar todas
                </Button>
                
                <Button 
                  onClick={rejectAllCookies}
                  variant="outline"
                  className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  Solo necesarias
                </Button>
                
                <Button 
                  onClick={openPreferences}
                  variant="outline"
                  className="border-blue-300 text-blue-700 hover:bg-blue-50 px-6 py-2 rounded-lg font-medium transition-colors"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Configurar
                </Button>
              </div>
            </div>

            <button
              onClick={closeBanner}
              className="flex-shrink-0 p-1 text-gray-400 hover:text-gray-600 transition-colors"
              aria-label="Cerrar banner"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Card>
    </div>
  )
}

export default CookieBanner