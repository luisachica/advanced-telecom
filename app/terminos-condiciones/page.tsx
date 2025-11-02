import { Metadata } from 'next'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { FileText, User, Wrench, CreditCard, Shield, AlertTriangle, Clock, CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import { withPhone } from '@/lib/seo'

export const metadata: Metadata = {
  title: 'Términos y Condiciones | Advanced Telecom',
  description: withPhone('Términos y condiciones de uso de los servicios de Advanced Telecom. Condiciones generales de contratación y prestación de servicios.'),
  robots: 'index, follow',
}

export default function TerminosCondicionesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="bg-slate-600 p-3 rounded-full">
              <FileText className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Términos y Condiciones
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Condiciones generales de contratación y prestación de servicios de Advanced Telecom
          </p>
          <Badge variant="outline" className="mt-4">
            <Clock className="h-4 w-4 mr-2" />
            Última actualización: Diciembre 2024
          </Badge>
        </div>

        <div className="space-y-8">
          {/* Información de la empresa */}
          <Card className="border-l-4 border-l-slate-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <User className="h-5 w-5 text-slate-600" />
                Información de la Empresa
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Advanced Telecom</h3>
                <div className="space-y-2 text-gray-700">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-slate-600" />
                    <span>Toledo, España</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-slate-600" />
                    <span>+34 668 83 84 15</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-slate-600" />
                    <span>info@advancedtelecom.es</span>
                  </div>
                </div>
                <p className="text-gray-600 mt-3">
                  Empresa especializada en servicios de instalación, mantenimiento y reparación de sistemas de telecomunicaciones.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Objeto y ámbito */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-blue-600" />
                Objeto y Ámbito de Aplicación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <p className="text-gray-700">
                  Los presentes términos y condiciones regulan la prestación de servicios de telecomunicaciones 
                  ofrecidos por Advanced Telecom, incluyendo:
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Instalación de antenas TDT
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Reparación de sistemas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Mantenimiento preventivo
                    </li>
                  </ul>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Orientación de antenas
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Amplificación de señal
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      Asesoramiento técnico
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Servicios */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5 text-orange-600" />
                Descripción de Servicios
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Servicios de Instalación</h3>
                  <p className="text-gray-700 mb-3">
                    Instalación completa de sistemas de antenas TDT, incluyendo:
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Estudio previo de la ubicación</li>
                    <li>• Suministro de materiales necesarios</li>
                    <li>• Instalación y orientación de antenas</li>
                    <li>• Configuración de equipos receptores</li>
                    <li>• Pruebas de funcionamiento</li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Servicios de Reparación</h3>
                  <p className="text-gray-700 mb-3">
                    Diagnóstico y reparación de averías en sistemas existentes:
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Diagnóstico técnico de la avería</li>
                    <li>• Presupuesto detallado de reparación</li>
                    <li>• Sustitución de componentes defectuosos</li>
                    <li>• Verificación del correcto funcionamiento</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-3">Servicios de Mantenimiento</h3>
                  <p className="text-gray-700 mb-3">
                    Mantenimiento preventivo y correctivo de instalaciones:
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Revisión periódica de la instalación</li>
                    <li>• Limpieza y ajuste de componentes</li>
                    <li>• Verificación de niveles de señal</li>
                    <li>• Informe técnico del estado</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Condiciones de contratación */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-purple-600" />
                Condiciones de Contratación
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Solicitud de Servicio</h3>
                  <p className="text-gray-700">
                    La solicitud de servicios se puede realizar a través de nuestro sitio web, teléfono o correo electrónico. 
                    Toda solicitud será confirmada por nuestro equipo técnico.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Presupuesto</h3>
                  <p className="text-gray-700">
                    Proporcionamos presupuestos detallados sin compromiso. Los precios incluyen mano de obra, 
                    materiales y desplazamiento en un radio de 50km desde Toledo.
                  </p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Aceptación</h3>
                  <p className="text-gray-700">
                    La aceptación del presupuesto constituye la formalización del contrato de prestación de servicios 
                    bajo estas condiciones generales.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Precios y pagos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CreditCard className="h-5 w-5 text-green-600" />
                Precios y Condiciones de Pago
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Precios</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Los precios incluyen IVA y están expresados en euros</li>
                    <li>• Incluyen mano de obra, materiales y desplazamiento</li>
                    <li>• Válidos durante 30 días desde la fecha del presupuesto</li>
                    <li>• Pueden variar según la complejidad de la instalación</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Formas de Pago</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Efectivo al finalizar el servicio</li>
                    <li>• Transferencia bancaria</li>
                    <li>• Bizum</li>
                    <li>• Para servicios superiores a 300€, posibilidad de pago fraccionado</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Facturación</h3>
                  <p className="text-gray-700">
                    Se emitirá factura por todos los servicios prestados. La factura se entregará 
                    al finalizar el servicio o se enviará por correo electrónico según preferencia del cliente.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Garantías */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-indigo-600" />
                Garantías
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Garantía de Instalación</h3>
                  <p className="text-gray-700">
                    Ofrecemos 12 meses de garantía en todas nuestras instalaciones, cubriendo defectos 
                    de montaje y funcionamiento de los equipos instalados.
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Garantía de Materiales</h3>
                  <p className="text-gray-700">
                    Los materiales suministrados mantienen la garantía del fabricante. 
                    Gestionamos directamente cualquier incidencia durante el período de garantía.
                  </p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Exclusiones</h3>
                  <ul className="space-y-1 text-gray-700">
                    <li>• Daños por fenómenos meteorológicos extremos</li>
                    <li>• Manipulación por terceros no autorizados</li>
                    <li>• Desgaste normal por uso</li>
                    <li>• Daños por sobretensiones eléctricas</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Responsabilidades */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="h-5 w-5 text-yellow-600" />
                Responsabilidades y Limitaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Responsabilidad de Advanced Telecom</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Prestación del servicio con la máxima calidad técnica</li>
                    <li>• Cumplimiento de los plazos acordados</li>
                    <li>• Uso de materiales de calidad certificada</li>
                    <li>• Respeto por la propiedad del cliente</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Responsabilidad del Cliente</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Facilitar el acceso a la zona de trabajo</li>
                    <li>• Proporcionar información veraz sobre la instalación</li>
                    <li>• Cumplir con las condiciones de pago acordadas</li>
                    <li>• Comunicar cualquier incidencia en tiempo oportuno</li>
                  </ul>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Limitaciones</h3>
                  <p className="text-gray-700">
                    Nuestra responsabilidad se limita al importe del servicio contratado. 
                    No nos hacemos responsables de daños indirectos o lucro cesante.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Cancelaciones y modificaciones */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-red-600" />
                Cancelaciones y Modificaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Cancelación por el Cliente</h3>
                  <p className="text-gray-700 mb-2">
                    El cliente puede cancelar el servicio con las siguientes condiciones:
                  </p>
                  <ul className="space-y-1 text-gray-700 ml-4">
                    <li>• Con más de 24h de antelación: sin coste</li>
                    <li>• Con menos de 24h: 50% del importe del desplazamiento</li>
                    <li>• Una vez iniciado el servicio: importe completo</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Modificaciones</h3>
                  <p className="text-gray-700">
                    Las modificaciones en el servicio contratado pueden implicar variaciones en el precio 
                    y plazo de ejecución, que serán comunicadas previamente al cliente.
                  </p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Causas de Fuerza Mayor</h3>
                  <p className="text-gray-700">
                    Advanced Telecom no será responsable de retrasos o cancelaciones debidos a 
                    condiciones meteorológicas adversas, huelgas, o cualquier otra causa de fuerza mayor.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Protección de datos */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-blue-600" />
                Protección de Datos
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  El tratamiento de datos personales se rige por nuestra Política de Privacidad, 
                  disponible en nuestro sitio web, que cumple con el Reglamento General de Protección de Datos (RGPD).
                </p>
                <p className="text-gray-700">
                  Los datos proporcionados serán utilizados exclusivamente para la prestación del servicio 
                  contratado y la gestión de la relación comercial.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Legislación aplicable */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5 text-gray-600" />
                Legislación Aplicable y Jurisdicción
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Legislación Aplicable</h3>
                  <p className="text-gray-700">
                    Estos términos y condiciones se rigen por la legislación española vigente, 
                    especialmente por el Código Civil y la Ley General para la Defensa de los Consumidores y Usuarios.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Resolución de Conflictos</h3>
                  <p className="text-gray-700">
                    Para la resolución de cualquier controversia, las partes se someten a los Juzgados y 
                    Tribunales de Toledo, renunciando expresamente a cualquier otro fuero que pudiera corresponderles.
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Mediación</h3>
                  <p className="text-gray-700">
                    Antes de acudir a la vía judicial, las partes se comprometen a intentar resolver 
                    cualquier conflicto mediante mediación o arbitraje de consumo.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Contacto */}
          <Card className="border-l-4 border-l-slate-600">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-slate-600" />
                Contacto
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-slate-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Para cualquier consulta sobre estos términos y condiciones o sobre nuestros servicios:
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-slate-600" />
                    <span className="font-medium">info@advancedtelecom.es</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-slate-600" />
                    <span className="font-medium">+34 668 83 84 15</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-slate-600" />
                    <span className="font-medium">Toledo, España</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Vigencia */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-purple-600" />
                Vigencia y Modificaciones
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-gray-700 mb-3">
                  Estos términos y condiciones entran en vigor desde su publicación y permanecerán vigentes 
                  hasta su modificación o sustitución por una nueva versión.
                </p>
                <p className="text-gray-700">
                  Nos reservamos el derecho a modificar estos términos en cualquier momento. 
                  Las modificaciones serán comunicadas a través de nuestro sitio web y entrarán en vigor 
                  inmediatamente tras su publicación.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}