import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { Shield, User, Database, Mail, Phone, MapPin, Clock, AlertTriangle, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Política de Privacidad | Advanced Telecom',
  description: 'Política de privacidad de Advanced Telecom. Información sobre cómo recopilamos, utilizamos y protegemos sus datos personales.',
  robots: 'index, follow',
}

export default function PoliticaPrivacidadPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-blue-600 p-3 rounded-full">
              <Shield className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Política de Privacidad
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            En Advanced Telecom respetamos su privacidad y nos comprometemos a proteger sus datos personales
          </p>
          <Badge variant="outline" className="mt-4">
            <Clock className="h-4 w-4 mr-2" />
            Última actualización: Diciembre 2024
          </Badge>
        </div>

        <div className="space-y-8">
          {/* Responsable del tratamiento */}
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-blue-600" />
                Responsable del Tratamiento
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Advanced Telecom</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-blue-600" />
                    <span>Toledo, España</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-blue-600" />
                    <span>+34 668 83 84 15</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-blue-600" />
                    <span>info@advancedtelecom.es</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Datos que recopilamos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="h-5 w-5 text-green-600" />
                Datos que Recopilamos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Datos de Contacto
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li>• Nombre y apellidos</li>
                    <li>• Dirección de correo electrónico</li>
                    <li>• Número de teléfono</li>
                    <li>• Dirección postal</li>
                    <li>• Localidad y código postal</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-600" />
                    Datos Técnicos
                  </h3>
                  <ul className="space-y-2 text-gray-700 ml-6">
                    <li>• Dirección IP</li>
                    <li>• Tipo de navegador</li>
                    <li>• Páginas visitadas</li>
                    <li>• Tiempo de navegación</li>
                    <li>• Cookies y tecnologías similares</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Finalidades del tratamiento */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                Finalidades del Tratamiento
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Prestación de Servicios</h3>
                  <p className="text-gray-700 mb-2">
                    Utilizamos sus datos para proporcionar nuestros servicios de instalación y mantenimiento de antenas.
                  </p>
                  <Badge variant="secondary">Base legal: Ejecución de contrato</Badge>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Comunicación Comercial</h3>
                  <p className="text-gray-700 mb-2">
                    Envío de información sobre nuestros servicios, promociones y novedades del sector.
                  </p>
                  <Badge variant="secondary">Base legal: Consentimiento</Badge>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Mejora de la Web</h3>
                  <p className="text-gray-700 mb-2">
                    Análisis del uso de la web para mejorar la experiencia del usuario y optimizar nuestros servicios.
                  </p>
                  <Badge variant="secondary">Base legal: Interés legítimo</Badge>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Cumplimiento Legal</h3>
                  <p className="text-gray-700 mb-2">
                    Cumplimiento de obligaciones legales y fiscales aplicables a nuestra actividad.
                  </p>
                  <Badge variant="secondary">Base legal: Obligación legal</Badge>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Conservación de datos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-600" />
                Conservación de Datos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Datos de Clientes</h3>
                  <p className="text-gray-700">
                    Los datos de clientes se conservan durante la relación contractual y posteriormente durante los plazos legales de prescripción (6 años para obligaciones contractuales).
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Datos de Contacto Web</h3>
                  <p className="text-gray-700">
                    Los datos obtenidos a través de formularios de contacto se conservan durante 2 años desde la última comunicación.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Datos de Navegación</h3>
                  <p className="text-gray-700">
                    Los datos de navegación y cookies se conservan según los períodos establecidos en nuestra política de cookies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Derechos del usuario */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-indigo-600" />
                Sus Derechos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Acceso</h4>
                      <p className="text-sm text-gray-600">Conocer qué datos tenemos sobre usted</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Rectificación</h4>
                      <p className="text-sm text-gray-600">Corregir datos inexactos o incompletos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Supresión</h4>
                      <p className="text-sm text-gray-600">Solicitar la eliminación de sus datos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Limitación</h4>
                      <p className="text-sm text-gray-600">Restringir el tratamiento de sus datos</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Portabilidad</h4>
                      <p className="text-sm text-gray-600">Recibir sus datos en formato estructurado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Oposición</h4>
                      <p className="text-sm text-gray-600">Oponerse al tratamiento de sus datos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Revocación</h4>
                      <p className="text-sm text-gray-600">Retirar el consentimiento otorgado</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Reclamación</h4>
                      <p className="text-sm text-gray-600">Presentar reclamación ante la AEPD</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <Separator className="my-6" />
              
              <div className="bg-indigo-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">¿Cómo ejercer sus derechos?</h3>
                <p className="text-gray-700 mb-3">
                  Para ejercer cualquiera de estos derechos, puede contactarnos a través de:
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-indigo-600" />
                    <span className="text-gray-700">info@advancedtelecom.es</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-indigo-600" />
                    <span className="text-gray-700">+34 668 83 84 15</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Seguridad */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-red-600" />
                Medidas de Seguridad
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Implementamos medidas técnicas y organizativas apropiadas para proteger sus datos personales contra:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Acceso no autorizado
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Alteración de datos
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Pérdida accidental
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Divulgación no autorizada
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Destrucción accidental
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Tratamiento ilícito
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="border-l-4 border-l-blue-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Si tiene alguna pregunta sobre esta política de privacidad o sobre el tratamiento de sus datos personales, no dude en contactarnos:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">info@advancedtelecom.es</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">+34 668 83 84 15</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="font-medium">Toledo, España</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cambios en la política */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Cambios en esta Política
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Nos reservamos el derecho a modificar esta política de privacidad en cualquier momento. 
                Los cambios serán publicados en esta página y, cuando sean significativos, se lo notificaremos 
                por correo electrónico o mediante un aviso destacado en nuestro sitio web.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}