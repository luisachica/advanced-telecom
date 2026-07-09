// types/localidad.ts

export interface FaqItem {
  question: string
  answer: string
}

export interface TestimonioLocal {
  nombre: string
  zona: string
  comentario: string
  puntuacion: number
}

export interface ProyectoLocal {
  titulo: string
  descripcion: string
}

export interface BarrioLocal {
  nombre: string
  detalle: string
}

export interface ServicioEnLocalidad {
  slugServicio: string
  titulo: string
  descripcion: string
}

/** Hub de Localidad. Tier 1: contenido completo (P1 §3). Tier 2: plantilla concisa (P2 §4). */
export interface Localidad {
  slug: string
  nombre: string
  tier: 1 | 2
  provincia: string
  comunidad: string
  cluster: string
  metaTitle: string
  metaDescription: string
  h1: string
  /** Párrafos de intro local (hero) */
  intro: string[]
  /** Contexto urbanístico / tipo de vivienda predominante */
  contextoUrbanistico: string
  /** Descripción de cada servicio adaptada a la localidad, con enlace al hub */
  servicios: ServicioEnLocalidad[]
  /** Proyectos o casos de referencia en la zona */
  proyectos: ProyectoLocal[]
  /** Tiempos de desplazamiento y respuesta */
  desplazamiento: string
  tiempoRespuesta: string
  viaAcceso: string
  distanciaKm: string
  /** Normativa municipal relevante (solo T1 normalmente) */
  normativa?: string
  testimonios?: TestimonioLocal[]
  /** Barrios y urbanizaciones cubiertos (captura long-tail Tier 3) */
  barrios: BarrioLocal[]
  /** Slugs de localidades cercanas del clúster (enlazado geográfico §4.3) */
  cercanas: string[]
  /** Proveedores de conectividad en la zona */
  conectividad: string
  puntosInteres?: string[]
}
