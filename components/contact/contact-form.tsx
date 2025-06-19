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
      className="w-full bg-[#8ed1b7] text-[#0a3b5c] hover:bg-[#7bc0a6] font-bold text-lg py-6 rounded-xl shadow-lg shadow-[#8ed1b7]/20 normal-case"
      disabled={pending}
    >
      {pending ? "Enviando..." : "Enviar mensaje"}
      <ArrowRight className="ml-2 h-5 w-5" />
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
    <>
      <p className="mb-8">
        Rellena este formulario de contacto, o llámanos para hablar con nuestros agentes especializados.
      </p>

      <form action={clientAction} className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div>
            <label htmlFor="nombre" className="block text-sm font-medium mb-2">
              Nombre*
            </label>
            <Input
              name="nombre"
              required
              className="bg-white/90 text-[#0a3b5c] border border-gray-300 focus-visible:ring-2 focus-visible:ring-white rounded-md"
            />
          </div>
          <div>
            <label htmlFor="apellidos" className="block text-sm font-medium mb-2">
              Apellidos
            </label>
            <Input
              name="apellidos"
              className="bg-white/90 text-[#0a3b5c] border border-gray-300 focus-visible:ring-2 focus-visible:ring-white rounded-md"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email*
          </label>
          <Input
            name="email"
            type="email"
            required
            className="bg-white/90 text-[#0a3b5c] border border-gray-300 focus-visible:ring-2 focus-visible:ring-white rounded-md"
          />
        </div>

        <div>
          <label htmlFor="telefono" className="block text-sm font-medium mb-2">
            Teléfono*
          </label>
          <div className="flex">
            <select
              name="pais"
              className="w-16 rounded-l-md border border-gray-300 bg-white/90 text-[#0a3b5c]"
            >
              <option>ES</option>
            </select>
            <Input
              name="telefono"
              type="tel"
              required
              className="rounded-l-none bg-white/90 text-[#0a3b5c] border border-gray-300 focus-visible:ring-2 focus-visible:ring-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="servicio" className="block text-sm font-medium mb-2">
            ¿En qué podemos ayudarte?*
          </label>
          <select
            id="servicio"
            name="servicio"
            className="w-full h-10 rounded-md border border-gray-300 bg-white/90 px-3 py-2 text-[#0a3b5c] focus-visible:ring-2 focus-visible:ring-white"
          >
            <option>Selecciona un servicio</option>
            <option>Fin de obra</option>
            <option>Limpieza de hogar</option>
            <option>Limpieza de comunidades</option>
            <option>Limpieza de oficinas</option>
            <option>Limpieza de clínicas</option>
            <option>Limpieza de cristales</option>
            <option>Limpieza de garajes</option>
          </select>
        </div>

        <div>
          <label htmlFor="mensaje" className="block text-sm font-medium mb-2">
            ¿Podrías contarnos algo más?
          </label>
          <Textarea
            name="mensaje"
            rows={4}
            className="bg-white/90 text-[#0a3b5c] border border-gray-300 focus-visible:ring-2 focus-visible:ring-white"
          />
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="politica"
            required
            className="mt-1 rounded border-0 text-[#8ed1b7] focus:ring-[#8ed1b7]"
          />
          <label htmlFor="politica" className="text-sm">
            Acepto la política de privacidad con el fin de comercialización telefónica o electrónica futura.
          </label>
        </div>

        <div className="flex items-start gap-3">
          <input
            type="checkbox"
            name="comunicaciones"
            className="mt-1 rounded border-0 text-[#8ed1b7] focus:ring-[#8ed1b7]"
          />
          <label htmlFor="comunicaciones" className="text-sm">
            Acepto la comunicación de mis datos personales a otras empresas del grupo para acciones promocionales.
          </label>
        </div>

        <SubmitButton />

        {estado === "ok" && <p className="text-green-600">✅ Mensaje enviado correctamente</p>}
        {estado === "error" && <p className="text-red-600">❌ {mensajeError}</p>}
      </form>
    </>
  )
}