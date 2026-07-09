// data/localidades/t1/illescas.ts — Hub de Localidad T1 según Estructura P1 §3.6
import type { Localidad } from "@/types/localidad"

export const illescas: Localidad = {
  slug: "illescas",
  nombre: "Illescas",
  tier: 1,
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  cluster: "La Sagra Norte",
  metaTitle: "Instalador Antenas, Cámaras y Alarmas Illescas | Antenas Toledo",
  metaDescription:
    "Instalador de antenas, cámaras y alarmas en Illescas y Señorío de Illescas. Polígono industrial y zona residencial. Presupuesto sin compromiso.",
  h1: "Instalador de Antenas, Cámaras y Seguridad en Illescas",
  intro: [
    "Illescas es el polo industrial y logístico más importante de La Sagra, con más de 31.000 habitantes y un tejido empresarial que genera demanda tanto residencial como industrial de servicios de telecomunicaciones y seguridad. La proximidad de la plataforma logística —con el centro de distribución de Amazon como referencia— y de los polígonos aporta un volumen de trabajo constante en videovigilancia de naves.",
    "En el plano residencial, el Señorío de Illescas concentra comunidades de pisos recientes donde las interferencias 5G y los videoporteros son los servicios más solicitados. Estamos a 20 minutos por la A-42, lo que nos permite dar respuesta rápida en todo el municipio.",
  ],
  contextoUrbanistico:
    "Illescas combina un casco urbano tradicional con la enorme zona residencial del Señorío de Illescas y los polígonos industriales. La demanda dual (residencial + industrial) hace que todos los servicios sean relevantes, pero destacan las cámaras de seguridad para naves y las interferencias 5G en viviendas, favorecidas por la densidad de antenas de telefonía del corredor de la A-42.",
  servicios: [
    {
      slugServicio: "camaras-seguridad",
      titulo: "Cámaras de seguridad en Illescas",
      descripcion:
        "Videovigilancia profesional para naves de los polígonos, comercios y viviendas, con grabación extendida y acceso remoto multi-usuario.",
    },
    {
      slugServicio: "solucion-interferencias-5g",
      titulo: "Interferencias 5G en Illescas",
      descripcion:
        "La densidad de antenas del corredor A-42 hace del filtrado 5G un servicio muy demandado en las comunidades del Señorío y del casco.",
    },
    {
      slugServicio: "antenas-parabolicas",
      titulo: "Antenas y parabólicas en Illescas",
      descripcion:
        "Antenas colectivas para las comunidades nuevas del Señorío, renovaciones en el casco y parabólicas para canales internacionales.",
    },
    {
      slugServicio: "alarmas",
      titulo: "Alarmas en Illescas",
      descripcion:
        "Alarmas para viviendas, comercios y naves industriales, sin cuotas o conectadas a CRA, con detección perimetral en parcelas.",
    },
    {
      slugServicio: "porteros-videoporteros",
      titulo: "Porteros y videoporteros en Illescas",
      descripcion:
        "Videoporteros para las comunidades del Señorío y renovación de porteros antiguos en el casco, sin obra.",
    },
  ],
  proyectos: [
    {
      titulo: "Videovigilancia en nave del polígono",
      descripcion:
        "Sistema completo de cámaras IP para una nave logística: perímetro, muelles y acceso, con grabación de 30 días y usuarios diferenciados para gerencia y seguridad.",
    },
    {
      titulo: "Filtro 5G en comunidad del Señorío de Illescas",
      descripcion:
        "Comunidad con pixelado y cortes tras el encendido de una antena 5G cercana: filtro en cabecera y verificación de señal en todas las plantas.",
    },
    {
      titulo: "Videoportero Duox en comunidad del casco",
      descripcion:
        "Sustitución del portero antiguo por sistema Fermax Duox con vídeo reutilizando el cableado existente, sin obra.",
    },
  ],
  desplazamiento: "Desplazamiento desde Toledo: 20 minutos por A-42.",
  tiempoRespuesta: "Tiempo medio de respuesta: 3-5 horas.",
  viaAcceso: "A-42 (salida 31-37), CM-4010",
  distanciaKm: "20 km por A-42",
  normativa:
    "El Ayuntamiento de Illescas regula las instalaciones en los polígonos (licencias y condiciones para elementos exteriores), y el Señorío de Illescas —una entidad urbanística de gran tamaño— cuenta con normas propias que afectan a instalaciones visibles. Conocemos ambos marcos y tramitamos lo necesario.", // TODO(verificar): referencia exacta de la normativa municipal vigente
  testimonios: [
    {
      nombre: "Miguel A.",
      zona: "Señorío de Illescas",
      comentario: "Rápidos y eficaces. La interferencia 5G nos tenía locos y la solucionaron en una mañana.",
      puntuacion: 5,
    },
  ],
  barrios: [
    { nombre: "Casco Urbano", detalle: "pisos tradicionales" },
    { nombre: "Señorío de Illescas", detalle: "zona residencial nueva, comunidades de pisos" },
    { nombre: "Polígonos industriales", detalle: "naves logísticas y empresas" },
    { nombre: "El Mirador", detalle: "urbanización" },
    { nombre: "La Tabla", detalle: "zona residencial" },
  ],
  cercanas: ["yuncos", "numancia-de-la-sagra", "yeles", "ugena", "cabanas-de-la-sagra"],
  conectividad: "Movistar fibra/5G (despliegue intenso en la zona industrial), Vodafone, Orange, Digi",
  puntosInteres: ["Plataforma Central Iberum (Amazon)", "Hospital Universitario de Illescas", "Polígonos industriales"],
}
