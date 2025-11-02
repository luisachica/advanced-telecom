import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Cookie, Shield, BarChart3, Target, Settings, Mail, Phone } from 'lucide-react'
import Link from 'next/link'
import { withPhone } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Política de Cookies | Advanced Telecom',
  description: withPhone('Información detallada sobre el uso de cookies en nuestro sitio web y cómo gestionar tus preferencias.'),
  alternates: {
    canonical: 'https://www.advancedtelecom.es/politica-de-cookies/'
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function PoliticaCookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center gap-3">
            <Cookie className="h-8 w-8 text-blue-600" />
            Política de Cookies
          </h1>
          <p className="text-lg text-gray-600">
            Última actualización: {new Date().toLocaleDateString('es-ES', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

        <div className="space-y-8">
          {/* Introducción */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                ¿Qué son las cookies?
              </CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo (ordenador, tablet o móvil) 
                cuando visitas un sitio web. Estas cookies permiten que el sitio web recuerde tus acciones y preferencias 
                durante un período de tiempo, para que no tengas que volver a configurarlas cada vez que regreses al sitio 
                o navegues de una página a otra.
              </p>
            </CardContent>
          </Card>

          {/* Tipos de cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Tipos de cookies que utilizamos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex gap-4 p-4 bg-green-50 rounded-lg border border-green-200">
                  <Shield className="h-6 w-6 text-green-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-green-900 mb-2">Cookies Necesarias</h3>
                    <p className="text-green-800 mb-3">
                      Estas cookies son esenciales para el funcionamiento del sitio web y no se pueden desactivar. 
                      Generalmente se establecen en respuesta a acciones realizadas por ti, como establecer tus 
                      preferencias de privacidad, iniciar sesión o completar formularios.
                    </p>
                    <p className="text-sm text-green-700">
                      <strong>Ejemplos:</strong> Cookies de sesión, preferencias de idioma, carrito de compras.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <BarChart3 className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-2">Cookies de Análisis</h3>
                    <p className="text-blue-800 mb-3">
                      Estas cookies nos permiten contar las visitas y fuentes de tráfico para poder medir y mejorar 
                      el rendimiento de nuestro sitio. Nos ayudan a saber qué páginas son las más y menos populares 
                      y ver cómo se mueven los visitantes por el sitio.
                    </p>
                    <p className="text-sm text-blue-700">
                      <strong>Ejemplos:</strong> Google Analytics, métricas de rendimiento, estadísticas de uso.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-purple-50 rounded-lg border border-purple-200">
                  <Target className="h-6 w-6 text-purple-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-purple-900 mb-2">Cookies de Marketing</h3>
                    <p className="text-purple-800 mb-3">
                      Estas cookies pueden ser establecidas a través de nuestro sitio por nuestros socios publicitarios. 
                      Pueden ser utilizadas por esas empresas para construir un perfil de tus intereses y mostrarte 
                      anuncios relevantes en otros sitios.
                    </p>
                    <p className="text-sm text-purple-700">
                      <strong>Ejemplos:</strong> Publicidad personalizada, seguimiento de conversiones, remarketing.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                  <Settings className="h-6 w-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-orange-900 mb-2">Cookies de Preferencias</h3>
                    <p className="text-orange-800 mb-3">
                      Estas cookies permiten que el sitio web recuerde información que cambia la forma en que se 
                      comporta o se ve el sitio, como tu idioma preferido o la región en la que te encuentras.
                    </p>
                    <p className="text-sm text-orange-700">
                      <strong>Ejemplos:</strong> Configuración de idioma, tema visual, preferencias de interfaz.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Gestión de cookies */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Cómo gestionar tus cookies
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p>
                  Puedes gestionar tus preferencias de cookies de las siguientes maneras:
                </p>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-900 mb-2">En nuestro sitio web</h4>
                  <p className="text-blue-800 mb-3">
                    Utiliza nuestro centro de preferencias de cookies para activar o desactivar diferentes 
                    categorías de cookies en cualquier momento.
                  </p>
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">
                    Gestionar Preferencias de Cookies
                  </Button>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">En tu navegador</h4>
                  <p className="text-gray-700 mb-3">
                    También puedes gestionar las cookies directamente desde la configuración de tu navegador:
                  </p>
                  <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                    <li><strong>Chrome:</strong> Configuración → Privacidad y seguridad → Cookies</li>
                    <li><strong>Firefox:</strong> Opciones → Privacidad y seguridad → Cookies</li>
                    <li><strong>Safari:</strong> Preferencias → Privacidad → Cookies</li>
                    <li><strong>Edge:</strong> Configuración → Privacidad → Cookies</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cookies de terceros */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Cookies de terceros
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Nuestro sitio web puede utilizar cookies de terceros para proporcionar funcionalidades adicionales:
              </p>
              
              <div className="space-y-3">
                <div className="border border-gray-200 rounded-lg p-3">
                  <h4 className="font-semibold text-gray-900">Google Analytics</h4>
                  <p className="text-sm text-gray-600">
                    Utilizamos Google Analytics para analizar el uso de nuestro sitio web. 
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" 
                       className="text-blue-600 hover:text-blue-800 underline ml-1">
                      Política de privacidad de Google
                    </a>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Derechos del usuario */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Tus derechos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Bajo el Reglamento General de Protección de Datos (RGPD), tienes los siguientes derechos:
              </p>
              
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Derecho de acceso:</strong> Puedes solicitar información sobre qué datos personales tenemos sobre ti.</li>
                <li><strong>Derecho de rectificación:</strong> Puedes solicitar que corrijamos datos inexactos.</li>
                <li><strong>Derecho de supresión:</strong> Puedes solicitar que eliminemos tus datos personales.</li>
                <li><strong>Derecho de portabilidad:</strong> Puedes solicitar una copia de tus datos en formato estructurado.</li>
                <li><strong>Derecho de oposición:</strong> Puedes oponerte al procesamiento de tus datos personales.</li>
              </ul>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Si tienes alguna pregunta sobre esta política de cookies o sobre cómo gestionamos tus datos, 
                puedes contactarnos:
              </p>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <span>info@advancedtelecom.es</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <span>+34 668 83 84 15</span>
                </div>
              </div>
              
              <div className="mt-6">
                <Link href="/contacto">
                  <Button variant="outline" className="border-blue-300 text-blue-700 hover:bg-blue-50">
                    Ir a la página de contacto
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>

          {/* Cambios en la política */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">
                Cambios en esta política
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>
                Podemos actualizar esta política de cookies de vez en cuando para reflejar cambios en nuestras 
                prácticas o por otras razones operativas, legales o reglamentarias. Te recomendamos que revises 
                esta página periódicamente para estar informado de cualquier cambio.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}