"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { sendContactAction } from "@/app/actions/send-contact"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button
      type="submit"
      className="w-full bg-brand-green text-white hover:bg-brand-green-dark font-semibold text-sm py-3 rounded-lg shadow-md shadow-brand-green/20 normal-case"
      disabled={pending}
    >
      {pending ? "Enviando..." : "Enviar mensaje"}
      <ArrowRight className="ml-2 h-4 w-4" />
    </Button>
  )
}

export function ContactForm() {
  const [estado, setEstado] = useState<"idle" | "ok" | "error">("idle")
  const [mensajeError, setMensajeError] = useState("")

  async function clientAction(formData: FormData) {
    const res = await sendContactAction(formData)
    if ("success" in res) {
      setEstado("ok")
      setMensajeError("")
    } else {
      setEstado("error")
      setMensajeError(res.error)
    }
  }

  return (
    <div className="bg-gray-100 p-3 rounded-xl">
      <p className="mb-4 text-brand-black text-sm leading-tight">
        Rellena este formulario de contacto, o llámanos para hablar con nuestros técnicos especializados en telecomunicaciones.
      </p>

      <form action={clientAction} className="space-y-3">
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

        <SubmitButton />

        {estado === "ok" && <p className="text-green-600">✅ Mensaje enviado correctamente</p>}
        {estado === "error" && <p className="text-red-600">❌ {mensajeError}</p>}
      </form>
    </div>
  )
}