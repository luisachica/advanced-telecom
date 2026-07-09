// types/combo.ts
import type { FaqItem } from "./localidad"

/** Página Servicio+Localidad (solo Tier 1 con volumen verificado — Estrategia §3.4, Estructura P2 §5) */
export interface ComboServicioLocalidad {
  /** Slug raíz de la URL, ej. "camaras-seguridad-toledo" */
  slug: string
  servicioSlug: string
  localidadSlug: string
  nombre: string
  prioridad: 1 | 2 | 3
  /** Solo se genera la página si activa=true (volumen de búsqueda verificado) */
  activa: boolean
  metaTitle?: string
  metaDescription?: string
  h1?: string
  intro?: string[]
  porQue?: string[]
  tiposPorZona?: { zona: string; recomendacion: string }[]
  normativa?: string
  conectividad?: string
  proyecto?: { titulo: string; descripcion: string }
  faqs?: FaqItem[]
}
