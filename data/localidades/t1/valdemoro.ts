// data/localidades/t1/valdemoro.ts — Hub de Localidad T1 según Estructura P1 §3.3
import type { Localidad } from "@/types/localidad"

export const valdemoro: Localidad = {
  slug: "valdemoro",
  nombre: "Valdemoro",
  tier: 1,
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  cluster: "Sur Madrid",
  metaTitle: "Instalador Antenas, Cámaras y Alarmas Valdemoro | Antenas Toledo",
  metaDescription:
    "Instalador de antenas, cámaras de seguridad y alarmas en Valdemoro. Interferencias 5G, antenas, videovigilancia. Servicio rápido. Presupuesto sin compromiso.",
  h1: "Instalador de Antenas, Cámaras y Seguridad en Valdemoro",
  intro: [
    "Valdemoro es una ciudad dormitorio del sur de Madrid con más de 82.000 habitantes y un fuerte crecimiento residencial en la última década. La demanda de servicios de seguridad —cámaras y alarmas— es particularmente alta por la tipología de vivienda dominante: muchos adosados y chalets en urbanizaciones nuevas donde la protección perimetral es la primera preocupación de los propietarios.",
    "Damos servicio en Valdemoro de forma habitual, tanto en las urbanizaciones (El Restón, Las Dehesas) como en las comunidades del casco urbano, donde las antenas colectivas y los porteros de las promociones más antiguas empiezan a necesitar renovación.",
  ],
  contextoUrbanistico:
    "Valdemoro tiene dos zonas diferenciadas: el casco urbano, con pisos de distintas épocas, y las urbanizaciones periféricas (El Restón, Las Dehesas, Cerro de la Mula) con chalets y adosados que requieren seguridad perimetral. El crecimiento reciente ha generado muchas comunidades nuevas con infraestructuras de telecomunicaciones modernas, donde el trabajo típico no es renovar sino ampliar: cámaras en garajes, videoporteros con app y alarmas por vivienda.",
  servicios: [
    {
      slugServicio: "camaras-seguridad",
      titulo: "Cámaras de seguridad en Valdemoro",
      descripcion:
        "El servicio más demandado en Valdemoro: sistemas perimetrales para chalets y adosados de las urbanizaciones y videovigilancia de garajes comunitarios.",
    },
    {
      slugServicio: "alarmas",
      titulo: "Alarmas en Valdemoro",
      descripcion:
        "Alarmas sin cuotas o con CRA para adosados y chalets, con sensores perimetrales e interiores y avisos al móvil.",
    },
    {
      slugServicio: "antenas-parabolicas",
      titulo: "Antenas y parabólicas en Valdemoro",
      descripcion:
        "Sustitución de antenas colectivas en comunidades del centro y antenas individuales y parabólicas en las urbanizaciones.",
    },
    {
      slugServicio: "solucion-interferencias-5g",
      titulo: "Interferencias 5G en Valdemoro",
      descripcion:
        "Diagnóstico con espectrómetro y filtrado LTE/5G en comunidades y viviendas afectadas por el despliegue de los operadores en la zona.",
    },
    {
      slugServicio: "porteros-videoporteros",
      titulo: "Porteros y videoporteros en Valdemoro",
      descripcion:
        "Videoporteros con apertura desde el móvil para unifamiliares y renovación de porteros en comunidades del casco.",
    },
  ],
  proyectos: [
    {
      titulo: "Sistema de cámaras en chalet de El Restón",
      descripcion:
        "6 cámaras IP con grabador NVR, analítica de personas y acceso desde el móvil, cubriendo perímetro completo y accesos de la parcela.",
    },
    {
      titulo: "Sustitución de antena colectiva en el centro",
      descripcion:
        "Renovación de cabecera y verificación de tomas en una comunidad del casco urbano con señal degradada en las plantas bajas.",
    },
    {
      titulo: "Alarma con CRA en adosado de Las Dehesas",
      descripcion:
        "Central conectada a Central Receptora, contactos en accesos y volumétricos pet-friendly, con verificación del salto y aviso a policía cuando procede.",
    },
  ],
  desplazamiento: "Desplazamiento desde Toledo: 35 minutos por A-4/A-42.",
  tiempoRespuesta: "Tiempo medio de respuesta: 4-6 horas.",
  viaAcceso: "A-4 (salida 21), M-404, M-407",
  distanciaKm: "35 km por A-4/A-42",
  normativa:
    "Además de la ordenanza municipal de Valdemoro, en las urbanizaciones las comunidades de propietarios suelen tener normas internas específicas sobre instalación de cámaras y elementos en fachadas; preparamos la documentación técnica para la autorización de la comunidad cuando es necesaria.", // TODO(verificar): referencia exacta de la ordenanza municipal vigente
  testimonios: [
    {
      nombre: "Rosa M.",
      zona: "El Restón",
      comentario: "Instalación de cámaras impecable, nos explicaron todo perfectamente.",
      puntuacion: 5,
    },
  ],
  barrios: [
    { nombre: "El Restón", detalle: "urbanización de chalets y adosados" },
    { nombre: "Las Dehesas", detalle: "chalets" },
    { nombre: "Cerro de la Mula", detalle: "adosados" },
    { nombre: "Centro", detalle: "pisos de distintas épocas" },
    { nombre: "Los Rosales", detalle: "pisos nuevos" },
    { nombre: "Zona Hospital", detalle: "residencial reciente" },
  ],
  cercanas: ["getafe", "ciempozuelos", "torrejon-de-la-calzada", "grinon"],
  conectividad: "Movistar fibra/5G, Vodafone, Orange, Digi",
  puntosInteres: ["Hospital Infanta Elena", "Centro Comercial El Restón", "Estación de Cercanías C-3"],
}
