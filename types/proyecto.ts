// types/proyecto.ts

/** Proyecto del portfolio (/proyectos/) — E-E-A-T con contexto geográfico (P2 §6.3) */
export interface Proyecto {
  slug: string
  titulo: string
  localidadSlug: string
  localidadNombre: string
  zona: string
  servicioSlug: string
  servicioNombre: string
  problema: string
  solucion: string
  resultado: string
  imagen: string
  imagenAlt: string
  testimonio?: { nombre: string; comentario: string }
}
