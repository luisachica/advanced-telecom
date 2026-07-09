// data/servicios-hub/index.ts
import type { ServicioHub } from "@/types/servicio-hub"
import { interferenciasHub } from "./solucion-interferencias-5g"
import { antenasHub } from "./antenas-parabolicas"
import { camarasHub } from "./camaras-seguridad"
import { alarmasHub } from "./alarmas"
import { porterosHub } from "./porteros-videoporteros"

export const SERVICIOS_HUB: ServicioHub[] = [
  interferenciasHub,
  antenasHub,
  camarasHub,
  alarmasHub,
  porterosHub,
]

export function getServicioHub(slug: string): ServicioHub | undefined {
  return SERVICIOS_HUB.find((s) => s.slug === slug)
}
