'use client'

import { useState, useEffect } from 'react'
import { useCookies, CookiePreferences } from '@/hooks/use-cookies'
import { Button } from '@/components/ui/button'
import { Switch } from '@/components/ui/switch'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Shield, BarChart3, Target, Settings, Info } from 'lucide-react'

const cookieCategories = [
  {
    id: 'necessary' as keyof CookiePreferences,
    title: 'Cookies Necesarias',
    description: 'Estas cookies son esenciales para el funcionamiento básico del sitio web y no se pueden desactivar.',
    details: 'Incluyen cookies de sesión, autenticación y preferencias básicas de navegación.',
    icon: Shield,
    required: true,
  },
  {
    id: 'analytics' as keyof CookiePreferences,
    title: 'Cookies de Análisis',
    description: 'Nos ayudan a entender cómo los visitantes interactúan con nuestro sitio web.',
    details: 'Google Analytics, métricas de rendimiento y estadísticas de uso anónimas.',
    icon: BarChart3,
    required: false,
  },
  {
    id: 'marketing' as keyof CookiePreferences,
    title: 'Cookies de Marketing',
    description: 'Se utilizan para mostrar anuncios relevantes y medir la efectividad de las campañas.',
    details: 'Publicidad personalizada, seguimiento de conversiones y remarketing.',
    icon: Target,
    required: false,
  },
  {
    id: 'preferences' as keyof CookiePreferences,
    title: 'Cookies de Preferencias',
    description: 'Permiten recordar tus preferencias y personalizar tu experiencia.',
    details: 'Idioma, tema, configuraciones de interfaz y preferencias de usuario.',
    icon: Settings,
    required: false,
  },
]

export function CookiePreferencesModal() {
  const { 
    showPreferences, 
    closePreferences, 
    savePreferences, 
    cookiePreferences 
  } = useCookies()

  const [localPreferences, setLocalPreferences] = useState<CookiePreferences>({
    necessary: true,
    analytics: false,
    marketing: false,
    preferences: false,
  })

  useEffect(() => {
    if (cookiePreferences) {
      setLocalPreferences(cookiePreferences)
    }
  }, [cookiePreferences])

  const handleToggle = (category: keyof CookiePreferences, value: boolean) => {
    if (category === 'necessary') return // No se puede desactivar

    setLocalPreferences(prev => ({
      ...prev,
      [category]: value,
    }))
  }

  const handleSave = () => {
    savePreferences(localPreferences)
  }

  const handleAcceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      preferences: true,
    }
    setLocalPreferences(allAccepted)
    savePreferences(allAccepted)
  }

  const handleRejectAll = () => {
    const onlyNecessary: CookiePreferences = {
      necessary: true,
      analytics: false,
      marketing: false,
      preferences: false,
    }
    setLocalPreferences(onlyNecessary)
    savePreferences(onlyNecessary)
  }

  return (
    <Dialog open={showPreferences} onOpenChange={closePreferences}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-gray-900">
            Configuración de Cookies
          </DialogTitle>
          <DialogDescription className="text-gray-600">
            Gestiona tus preferencias de cookies. Puedes cambiar estas configuraciones en cualquier momento.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6 mt-6">
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Info className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-medium text-blue-900 mb-1">
                  ¿Qué son las cookies?
                </h4>
                <p className="text-sm text-blue-800">
                  Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo cuando visitas un sitio web. 
                  Nos ayudan a mejorar tu experiencia y proporcionar funcionalidades personalizadas.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {cookieCategories.map((category) => {
              const Icon = category.icon
              const isEnabled = localPreferences[category.id]

              return (
                <Card key={category.id} className="border-2 hover:border-blue-200 transition-colors">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${
                          category.required 
                            ? 'bg-green-100 text-green-600' 
                            : isEnabled 
                              ? 'bg-blue-100 text-blue-600' 
                              : 'bg-gray-100 text-gray-400'
                        }`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <CardTitle className="text-lg font-semibold">
                            {category.title}
                            {category.required && (
                              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                                Requeridas
                              </span>
                            )}
                          </CardTitle>
                        </div>
                      </div>
                      
                      <Switch
                        checked={isEnabled}
                        onCheckedChange={(checked) => handleToggle(category.id, checked)}
                        disabled={category.required}
                        className="data-[state=checked]:bg-blue-600"
                      />
                    </div>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <CardDescription className="text-gray-600 mb-2">
                      {category.description}
                    </CardDescription>
                    <p className="text-sm text-gray-500">
                      {category.details}
                    </p>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t">
            <Button 
              onClick={handleAcceptAll}
              className="bg-blue-600 hover:bg-blue-700 text-white flex-1"
            >
              Aceptar todas
            </Button>
            
            <Button 
              onClick={handleRejectAll}
              variant="outline"
              className="border-gray-300 text-gray-700 hover:bg-gray-50 flex-1"
            >
              Solo necesarias
            </Button>
            
            <Button 
              onClick={handleSave}
              variant="outline"
              className="border-blue-300 text-blue-700 hover:bg-blue-50 flex-1"
            >
              Guardar preferencias
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default CookiePreferencesModal