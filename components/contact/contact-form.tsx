"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ContactForm() {
  const [estado, setEstado] = useState<"idle" | "ok" | "error" | "redirecting" | "loading">("idle")
  const [mensajeError, setMensajeError] = useState("")
  const [debugInfo, setDebugInfo] = useState("")

  function processContactForm(formData: FormData) {
    const nombre = formData.get("nombre")?.toString() || ""
    const email = formData.get("email")?.toString() || ""
    const telefono = formData.get("telefono")?.toString() || ""
    const mensaje = formData.get("mensaje")?.toString() || ""
    const servicio = formData.get("servicio")?.toString() || ""

    console.log("🔍 Validando campos:", { nombre, email, telefono, mensaje, servicio })

    if (!nombre || !email || !telefono) {
      return { error: "Por favor completa todos los campos obligatorios (nombre, email y teléfono)." }
    }

    try {
      // Generar mensaje para WhatsApp
      let whatsappMessage = `¡Hola! Me gustaría solicitar información sobre sus servicios.\n\n`
      whatsappMessage += `*Nombre:* ${nombre}\n`
      whatsappMessage += `*Email:* ${email}\n`
      
      if (telefono) {
        whatsappMessage += `*Teléfono:* ${telefono}\n`
      }
      
      if (servicio && servicio !== "Selecciona un servicio") {
        whatsappMessage += `🔧 *Servicio:* ${servicio}\n`
      }
      
      if (mensaje) {
        whatsappMessage += `\n *Mensaje:*\n${mensaje}\n\n`
      } else {
        whatsappMessage += `\n *Mensaje:*\nSolicito información sobre sus servicios.\n\n`
      }
      whatsappMessage += `Enviado desde: https://advancedtelecom.es`

      // Codificar el mensaje para URL
      const encodedMessage = encodeURIComponent(whatsappMessage)
      
      // Número de WhatsApp de la empresa
      const whatsappNumber = "34668838415" // +34 668 83 84 15
      
      // Generar URL de WhatsApp
      const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`

      return { 
        success: true, 
        whatsappUrl: whatsappUrl,
        message: "Formulario procesado correctamente. Serás redirigido a WhatsApp."
      }
    } catch (error) {
      console.error("❌ Error al procesar formulario:", error)
      return { error: "No se pudo procesar el formulario. Intenta más tarde." }
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setEstado("loading")
    setMensajeError("")

    const formData = new FormData(event.currentTarget)
    
    // Debug: Mostrar datos del formulario
    console.log("📝 Datos del formulario:")
    let debugText = "Datos del formulario:\n"
    for (let [key, value] of formData.entries()) {
      console.log(`${key}: ${value}`)
      debugText += `${key}: ${value}\n`
    }
    setDebugInfo(debugText)
    
    const res = processContactForm(formData)
    console.log("🔄 Resultado del procesamiento:", res)
    setDebugInfo(prev => prev + `\nResultado: ${JSON.stringify(res, null, 2)}`)
    
    if ("success" in res && "whatsappUrl" in res) {
      console.log("✅ Éxito, URL de WhatsApp:", res.whatsappUrl)
      setEstado("redirecting")
      
      // Mostrar mensaje de éxito por un momento antes de redirigir
      setTimeout(() => {
        console.log("🚀 Abriendo WhatsApp...")
        window.open(res.whatsappUrl, '_blank')
        setEstado("ok")
      }, 1500)
    } else if ("error" in res) {
      console.log("❌ Error:", res.error)
      setEstado("error")
      setMensajeError(res.error)
    }
  }

  return (
    <div className="bg-gray-100 p-3 rounded-xl">
      <p className="mb-4 text-brand-black text-sm leading-tight">
        Rellena este formulario de contacto, o llámanos para hablar con nuestros técnicos especializados en telecomunicaciones.
      </p>

      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label htmlFor="nombre" className="block text-xs font-medium mb-1 text-brand-black">
              Nombre*
            </label>
            <Input
              name="nombre"
              required
              className="bg-white text-brand-black border border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-green rounded-md"
            />
          </div>
          <div>
            <label htmlFor="apellidos" className="block text-xs font-medium mb-1 text-brand-black">
              Apellidos
            </label>
            <Input
              name="apellidos"
              className="bg-white text-brand-black border border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-green rounded-md"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-medium mb-1 text-brand-black">
            Email*
          </label>
          <Input
            name="email"
            type="email"
            required
            className="bg-white text-brand-black border border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-green rounded-md"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-xs font-medium mb-1 text-brand-black">
            Teléfono*
          </label>
          <div className="flex">
            <select
              name="pais"
              className="w-16 rounded-l-md border border-gray-300 bg-white text-brand-black"
            >
              <option>ES</option>
            </select>
            <Input
              name="telefono"
              type="tel"
              required
              className="rounded-l-none bg-white text-brand-black border border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-green"
            />
          </div>
        </div>

        <div>
          <label htmlFor="servicio" className="block text-xs font-medium mb-1 text-brand-black">
            ¿En qué podemos ayudarte?*
          </label>
          <select
            id="servicio"
            name="servicio"
            className="w-full h-10 rounded-md border border-gray-300 bg-white px-3 py-2 text-brand-black focus-visible:ring-2 focus-visible:ring-brand-green"
          >
            <option>Selecciona un servicio</option>
            <option>Instalación de antenas TDT</option>
            <option>Instalación de antenas parabólicas</option>
            <option>Instalación de porteros automáticos</option>
            <option>Instalación de cámaras de seguridad</option>
            <option>Solución de interferencias 4G</option>
            <option>Reparaciones urgentes</option>
            <option>Mantenimiento de equipos</option>
            <option>Consultoría técnica</option>
          </select>
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-xs font-medium mb-1 text-brand-black">
            ¿Podrías contarnos algo más?
          </label>
          <Textarea
            name="mensaje"
            rows={2}
            className="bg-white text-brand-black border border-gray-300 focus-visible:ring-2 focus-visible:ring-brand-green resize-none"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="politica"
              required
              className="mt-0.5 rounded border-0 text-brand-green focus:ring-brand-green"
            />
            <label htmlFor="politica" className="text-xs text-brand-black">
              Acepto la política de privacidad con el fin de comercialización telefónica o electrónica futura.
            </label>
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              name="comunicaciones"
              className="mt-0.5 rounded border-0 text-brand-green focus:ring-brand-green"
            />
            <label htmlFor="comunicaciones" className="text-xs text-brand-black">
              Acepto la comunicación de mis datos personales a otras empresas del grupo para acciones promocionales.
            </label>
          </div>
        </div>

        <Button
          type="submit"
          className="w-full bg-brand-green text-white hover:bg-brand-green-dark font-semibold text-sm py-3 rounded-lg shadow-md shadow-brand-green/20 normal-case"
          disabled={estado === "loading" || estado === "redirecting"}
        >
          {estado === "loading" ? "Enviando..." : "Enviar mensaje"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>

        {estado === "redirecting" && (
          <p className="text-blue-600">🔄 Preparando redirección a WhatsApp...</p>
        )}
        {estado === "ok" && (
          <p className="text-green-600">✅ ¡Perfecto! Te hemos redirigido a WhatsApp para continuar la conversación</p>
        )}
        {estado === "error" && <p className="text-red-600">❌ {mensajeError}</p>}
      </form>
    </div>
  )
}