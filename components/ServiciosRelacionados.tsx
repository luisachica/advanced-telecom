// components/ServiciosRelacionados.tsx

"use client"

import { useEffect, useState } from "react"
import { SERVICIOS } from "@/data/servicios"
import { ServiceCard } from "./ServiceCard"
import type { Servicio } from "@/types/servicio"

export function ServiciosRelacionados({ actualSlug }: { actualSlug: string }) {
  const [relacionados, setRelacionados] = useState<Servicio[]>([])

  useEffect(() => {
    const otros = SERVICIOS.filter(serv => serv.slug !== actualSlug)
    const aleatorios = otros.sort(() => 0.5 - Math.random()).slice(0, 3)
    setRelacionados(aleatorios)
  }, [actualSlug])

  return (
    <section className="py-16">
      <h3 className="text-2xl font-bold text-brand-black mb-8">Servicios relacionados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {relacionados.map((serv: Servicio) => (
          <ServiceCard
            key={serv.slug}
            title={serv.title}
            description={serv.description}
            image={serv.image}
            slug={serv.slug}
            iconName={serv.iconName}
          />
        ))}
      </div>
    </section>
  )
}
