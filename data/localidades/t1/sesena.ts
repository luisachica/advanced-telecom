// data/localidades/t1/sesena.ts — Hub de Localidad T1 según Estructura P1 §3.7
import type { Localidad } from "@/types/localidad"

export const sesena: Localidad = {
  slug: "sesena",
  nombre: "Seseña",
  tier: 1,
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  cluster: "Seseña-Este",
  metaTitle: "Instalador Antenas, Cámaras y Alarmas Seseña | Antenas Toledo",
  metaDescription:
    "Instalador de antenas, cámaras y alarmas en Seseña (Nuevo y Viejo). Zona en expansión entre Madrid y Toledo. Presupuesto gratuito.",
  h1: "Instalador de Antenas, Cámaras y Seguridad en Seseña",
  intro: [
    "Seseña es un núcleo en plena expansión situado estratégicamente entre Madrid y Toledo, con una población combinada de unos 25.000 habitantes. La zona de Seseña Nuevo y El Quiñón ha experimentado un crecimiento residencial masivo, con grandes comunidades de pisos recientes, mientras que Seseña Viejo conserva el carácter original del pueblo.",
    "La mayor parte de nuestro trabajo en Seseña se concentra en El Quiñón: antenas colectivas, videoporteros y videovigilancia de garajes para comunidades grandes, además del filtrado 5G en las viviendas afectadas por el despliegue de los operadores en el corredor de la A-4.",
  ],
  contextoUrbanistico:
    "Seseña tiene dos realidades: Seseña Nuevo / El Quiñón (bloques de pisos recientes con grandes comunidades y garajes comunitarios) y Seseña Viejo (casco tradicional con viviendas más antiguas). La demanda principal viene de las comunidades nuevas, que necesitan antenas colectivas bien dimensionadas, videoporteros fiables para muchos vecinos y videovigilancia en zonas comunes.",
  servicios: [
    {
      slugServicio: "antenas-parabolicas",
      titulo: "Antenas y parabólicas en Seseña",
      descripcion:
        "Antenas colectivas para las comunidades de El Quiñón y renovaciones e instalaciones individuales en Seseña Viejo.",
    },
    {
      slugServicio: "camaras-seguridad",
      titulo: "Cámaras de seguridad en Seseña",
      descripcion:
        "Videovigilancia de garajes y zonas comunes en comunidades grandes, y sistemas para viviendas y locales.",
    },
    {
      slugServicio: "porteros-videoporteros",
      titulo: "Porteros y videoporteros en Seseña",
      descripcion:
        "Mantenimiento y renovación de videoporteros en bloques nuevos y sustitución de porteros antiguos en el casco.",
    },
    {
      slugServicio: "solucion-interferencias-5g",
      titulo: "Interferencias 5G en Seseña",
      descripcion:
        "Diagnóstico y filtrado en comunidades afectadas por las antenas del corredor A-4, con verificación de señal por plantas.",
    },
    {
      slugServicio: "alarmas",
      titulo: "Alarmas en Seseña",
      descripcion:
        "Alarmas para pisos, chalets y locales, sin cuotas o conectadas a CRA, con avisos y control desde el móvil.",
    },
  ],
  proyectos: [
    {
      titulo: "Antena colectiva en comunidad de El Quiñón",
      descripcion:
        "Instalación de antena colectiva con cabecera filtrada 5G para una comunidad de gran tamaño, con señal verificada en todas las verticales.",
    },
    {
      titulo: "Cámaras en garaje comunitario",
      descripcion:
        "Sistema de cámaras antivandálicas en garaje y trasteros de una comunidad, con grabación de 30 días y acceso para el administrador.",
    },
    {
      titulo: "Videoportero en bloque de pisos",
      descripcion:
        "Renovación del videoportero de un portal completo con monitores nuevos en cada vivienda y placa antivandálica.",
    },
  ],
  desplazamiento: "Desplazamiento: 20-25 minutos por A-4.",
  tiempoRespuesta: "Tiempo medio de respuesta: 3-5 horas.",
  viaAcceso: "A-4 (salida 36), CM-4010",
  distanciaKm: "25 km por A-4",
  normativa:
    "Además de la normativa del Ayuntamiento de Seseña, las grandes comunidades de El Quiñón cuentan con normas internas propias que afectan a las instalaciones en elementos comunes; preparamos la documentación técnica para su aprobación por la comunidad.", // TODO(verificar): referencia exacta de la normativa municipal vigente
  testimonios: [
    {
      nombre: "Ana B.",
      zona: "El Quiñón",
      comentario: "Instalaron el videoportero y las cámaras del garaje. Todo perfecto.",
      puntuacion: 5,
    },
  ],
  barrios: [
    { nombre: "Seseña Nuevo / El Quiñón", detalle: "bloques de pisos nuevos, grandes comunidades" },
    { nombre: "Seseña Viejo", detalle: "casco tradicional" },
    { nombre: "Vallegrande", detalle: "zona residencial" },
    { nombre: "Nuevo Borox (entorno)", detalle: "urbanización cercana que también cubrimos" },
  ],
  cercanas: ["esquivias", "valmojado", "casarrubios-del-monte", "illescas"],
  conectividad: "Movistar, Vodafone, Orange — cobertura completa de fibra en la zona nueva",
  puntosInteres: ["El Quiñón", "Polígono industrial", "Estación de autobuses"],
}
