// data/localidades/t1/arroyomolinos.ts — Hub de Localidad T1 según Estructura P1 §3.5
import type { Localidad } from "@/types/localidad"

export const arroyomolinos: Localidad = {
  slug: "arroyomolinos",
  nombre: "Arroyomolinos",
  tier: 1,
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  cluster: "Arroyomolinos",
  metaTitle: "Instalador Cámaras, Alarmas y Antenas Arroyomolinos | Antenas Toledo",
  metaDescription:
    "Instalador de cámaras de seguridad, alarmas y antenas en Arroyomolinos. Urbanizaciones nuevas, videovigilancia perimetral. Presupuesto gratuito.",
  h1: "Instalador de Cámaras, Alarmas y Antenas en Arroyomolinos",
  intro: [
    "Arroyomolinos ha experimentado un crecimiento residencial explosivo en los últimos 15 años, pasando de ser un pueblo pequeño a una ciudad de más de 36.000 habitantes con urbanizaciones modernas de adosados y chalets. Esta tipología de vivienda genera una demanda especialmente alta de sistemas de seguridad perimetral: cámaras y alarmas son, con diferencia, nuestros servicios más solicitados en el municipio.",
    "Conocemos bien las urbanizaciones de la zona —Xanadú, Las Vilas, El Vallejo— y sus normas de comunidad, lo que agiliza tanto el diseño técnico como las autorizaciones necesarias para instalar en fachadas y parcelas.",
  ],
  contextoUrbanistico:
    "La mayoría de viviendas de Arroyomolinos son adosados y chalets en urbanizaciones privadas. Esto define el trabajo del instalador: seguridad perimetral (cámaras + alarma) como servicio principal, videoportero como equipamiento básico de cada vivienda y antenas individuales en lugar de colectivas. Al ser un parque de vivienda reciente, la fibra llega a prácticamente todo el municipio, lo que permite sistemas IP de alta resolución sin limitaciones.",
  servicios: [
    {
      slugServicio: "camaras-seguridad",
      titulo: "Cámaras de seguridad en Arroyomolinos",
      descripcion:
        "Sistemas perimetrales de 4 a 8 cámaras para chalets y adosados, con analítica de personas, visión nocturna y acceso desde el móvil.",
    },
    {
      slugServicio: "alarmas",
      titulo: "Alarmas en Arroyomolinos",
      descripcion:
        "Alarmas sin cuotas (Ajax) o con CRA para viviendas unifamiliares, combinables con las cámaras en una protección integral de la parcela.",
    },
    {
      slugServicio: "porteros-videoporteros",
      titulo: "Videoporteros en Arroyomolinos",
      descripcion:
        "Videoporteros IP con apertura desde el móvil, el equipamiento estándar de las viviendas de la zona.",
    },
    {
      slugServicio: "antenas-parabolicas",
      titulo: "Antenas y parabólicas en Arroyomolinos",
      descripcion:
        "Antenas TDT individuales y parabólicas para las urbanizaciones, con orientación óptima y medición de señal.",
    },
    {
      slugServicio: "solucion-interferencias-5g",
      titulo: "Interferencias 5G en Arroyomolinos",
      descripcion:
        "Filtrado LTE/5G en viviendas afectadas por el despliegue de los operadores; el pixelado en canales HD es la incidencia más habitual.",
    },
  ],
  proyectos: [
    {
      titulo: "Sistema perimetral en chalet de Xanadú",
      descripcion:
        "8 cámaras IP con analítica más alarma integrada en un chalet de la urbanización: detección temprana en el perímetro y verificación visual desde el móvil.",
    },
    {
      titulo: "Videoportero IP en adosado de Las Vilas",
      descripcion:
        "Videoportero con desvío al móvil y apertura remota, integrado con el motor de la puerta de garaje.",
    },
    {
      titulo: "Antena TDT en urbanización",
      descripcion:
        "Instalación de antena individual de alta ganancia con rechazo LTE en vivienda unifamiliar, verificada en todas las tomas.",
    },
  ],
  desplazamiento: "Desplazamiento desde Toledo: 35 minutos por A-42/M-407.",
  tiempoRespuesta: "Tiempo medio de respuesta: 4-6 horas.",
  viaAcceso: "M-407, A-5, R-5",
  distanciaKm: "35 km por A-42/M-407",
  normativa:
    "En Arroyomolinos, además de la normativa municipal, las urbanizaciones privadas suelen tener normas internas de comunidad sobre instalación de cámaras y elementos en fachadas: qué puede enfocar cada cámara y qué elementos son visibles desde los viales. Preparamos la documentación para la autorización de la comunidad como parte del servicio.", // TODO(verificar): referencia exacta de la normativa municipal vigente
  testimonios: [
    {
      nombre: "Laura S.",
      zona: "Xanadú",
      comentario: "Instalación de cámaras y alarma en un día. Ahora me siento segura.",
      puntuacion: 5,
    },
  ],
  // TODO(verificar): nombres reales de urbanizaciones de Arroyomolinos (el doc estratégico
  // lista "Carraci" y "Soto de Viñuelas", que no se han podido confirmar como zonas del municipio)
  barrios: [
    { nombre: "Xanadú", detalle: "urbanización residencial junto al centro comercial" },
    { nombre: "Las Vilas", detalle: "adosados" },
    { nombre: "El Vallejo", detalle: "zona residencial" },
    { nombre: "Centro Urbano", detalle: "casco original, pisos" },
    { nombre: "Zona del Parque de las Comunidades", detalle: "adosados y chalets" },
  ],
  cercanas: ["serranillos-del-valle", "grinon", "cubas-de-la-sagra", "navalcarnero"],
  conectividad: "Movistar fibra, Vodafone fibra, Orange fibra — cobertura completa por ser zona de construcción reciente",
  puntosInteres: ["Centro Comercial Intu Xanadú", "Madrid Snowzone", "Parque de las Comunidades"],
}
