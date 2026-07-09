// components/ZonasCobertura.tsx
// Bloque «Zonas de cobertura»: enlaza a los 9 Hubs de Localidad T1 y a /cobertura/.
// Sustituye al antiguo MunicipiosServicio (que enlazaba a las páginas antenista-* eliminadas).
import Link from "next/link"
import { MapPin, ArrowRight } from "lucide-react"
import { LOCALIDADES_T1 } from "@/data/localidades"

export function ZonasCobertura({
  titulo = "Zonas donde ofrecemos este servicio",
  descripcion = "Disponibles en Toledo, Getafe, Valdemoro… y más de 100 localidades de la provincia de Toledo, La Sagra y el sur de Madrid.",
}: {
  titulo?: string
  descripcion?: string
}) {
  return (
    <section className="w-full py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">{titulo}</h2>
          <p className="text-brand-black-light text-lg">{descripcion}</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {LOCALIDADES_T1.map((localidad) => (
            <Link
              key={localidad.slug}
              href={`/localidades/${localidad.slug}/`}
              className="flex items-center gap-3 p-4 bg-white rounded-xl shadow-md hover:shadow-lg border border-gray-100 hover:border-brand-green/40 transition-all"
            >
              <div className="bg-brand-green/10 p-2 rounded-lg">
                <MapPin className="h-5 w-5 text-brand-green" />
              </div>
              <span className="font-medium text-brand-black">{localidad.nombre}</span>
            </Link>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <Link
            href="/cobertura/"
            className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green/80 font-semibold"
          >
            Ver todas las zonas de cobertura <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
