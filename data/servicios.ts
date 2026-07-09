// data/servicios.ts
// Los 5 Hubs de Servicio de la arquitectura SEO (Estrategia §2.2).
// Orden según blueprint de la Home (P1 §1.2): Interferencias 5G, Antenas, Cámaras, Alarmas, Videoporteros.
import type { Servicio } from "@/types/servicio"

export const SERVICIOS: Servicio[] = [
  {
    title: "Solución interferencias 5G",
    slug: "solucion-interferencias-5g",
    description:
      "Diagnóstico y solución definitiva de interferencias 5G en su televisión: medición con espectrómetro, filtros LTE/5G y reorientación de antena. Tramitamos la subvención estatal cuando aplica.",
    image: "/images/telecom/antena-profesional.jpg",
    iconName: "Wifi",
  },
  {
    title: "Antenas y parabólicas",
    slug: "antenas-parabolicas",
    description:
      "Instalación y reparación de antenas TDT individuales y colectivas, parabólicas para Astra y Hotbird, amplificadores y cableado. Medición de señal profesional y garantía por escrito.",
    image: "/images/telecom/antena-parabolica.jpg",
    iconName: "Satellite",
  },
  {
    title: "Cámaras de seguridad",
    slug: "camaras-seguridad",
    description:
      "Sistemas de videovigilancia CCTV para viviendas, comunidades y negocios. Cámaras IP de alta definición con visión nocturna y acceso desde el móvil. Cumplimiento de la normativa de videovigilancia.",
    image: "/images/telecom/camaras-seguridad.jpg",
    iconName: "Camera",
  },
  {
    title: "Instalación de alarmas",
    slug: "alarmas",
    description:
      "Alarmas antirrobo para viviendas, locales y comunidades: sistemas sin cuotas o con conexión a Central Receptora de Alarmas (CRA). Sensores pet-friendly y control desde el móvil.",
    // TODO(verificar): sustituir por una foto real de instalación de alarma
    image: "/images/telecom/trabajo-instalacion-2024-04-19.jpg",
    iconName: "Shield",
  },
  {
    title: "Porteros y videoporteros",
    slug: "porteros-videoporteros",
    description:
      "Instalación y sustitución de porteros automáticos y videoporteros en comunidades y chalets: sistemas analógicos, digitales, IP y GSM con apertura desde el móvil.",
    image: "/images/telecom/portero-automatico-instalacion-01.jpg",
    iconName: "Phone",
  },
]

export function getServicio(slug: string): Servicio | undefined {
  return SERVICIOS.find((s) => s.slug === slug)
}
