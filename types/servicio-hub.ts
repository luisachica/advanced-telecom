// types/servicio-hub.ts
import type { FaqItem } from "./localidad"

export interface ProblemaServicio {
  titulo: string
  descripcion: string
}

export interface PasoProceso {
  titulo: string
  descripcion: string
}

export interface CategoriaEquipos {
  categoria: string
  detalle: string
}

export interface RangoPrecio {
  concepto: string
  precio: string
}

export interface CasoExito {
  titulo: string
  localidadSlug: string
  localidadNombre: string
  problema: string
  solucion: string
  resultado: string
}

/** Hub de Servicio: contenido exhaustivo según Estructura P1 §2 */
export interface ServicioHub {
  slug: string
  titulo: string
  tituloCorto: string
  metaTitle: string
  metaDescription: string
  h1: string
  image: string
  iconName: string
  /** Descripción corta para tarjetas / índice */
  descripcionCard: string
  /** Párrafos de intro (hero) */
  intro: string[]
  problemas: ProblemaServicio[]
  proceso: PasoProceso[]
  equipos: CategoriaEquipos[]
  equiposIntro: string
  normativa: string[]
  precios: RangoPrecio[]
  preciosNota: string
  casos: CasoExito[]
  faqs: FaqItem[]
  /** Datos diferenciales del servicio (variables semánticas §2.x.3) */
  datosClave: { titulo: string; detalle: string }[]
}
