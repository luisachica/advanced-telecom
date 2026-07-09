// data/localidades/t1/getafe.ts — Hub de Localidad T1 según Estructura P1 §3.2
import type { Localidad } from "@/types/localidad"

export const getafe: Localidad = {
  slug: "getafe",
  nombre: "Getafe",
  tier: 1,
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  cluster: "Sur Madrid",
  metaTitle: "Instalador Antenas, Cámaras y Alarmas Getafe | Antenas Toledo",
  metaDescription:
    "Instalador de antenas, cámaras de seguridad y alarmas en Getafe. Interferencias 5G, antenas TDT, videovigilancia. Atención en 24h. Presupuesto gratuito.",
  h1: "Instalador de Antenas, Cámaras y Seguridad en Getafe",
  intro: [
    "Getafe es la localidad más poblada de nuestra zona de cobertura y uno de los mercados con mayor demanda de servicios de telecomunicaciones y seguridad del sur de Madrid. Sus más de 180.000 habitantes concentran una necesidad muy específica: un parque enorme de bloques de pisos de los años 70 y 80 cuyas antenas colectivas, ya obsoletas, son especialmente vulnerables a las interferencias del despliegue 5G.",
    "Atendemos Getafe a diario desde la A-42, con especial actividad en interferencias 5G en comunidades, videovigilancia de garajes y renovación de porteros automáticos. Conocemos el tejido del municipio barrio a barrio, del Sector III a Perales del Río.",
  ],
  contextoUrbanistico:
    "Getafe tiene un tejido urbanístico muy variado: grandes bloques de pisos de los años 70-80 (Sector III, San Isidro, Las Margaritas), zonas de adosados más recientes (Getafe Norte, El Bercial) y polígonos industriales activos (Los Ángeles, San Marcos, y el cercano Cobo Calleja). Los edificios antiguos concentran antenas colectivas obsoletas muy susceptibles a interferencias 5G, mientras que las zonas de adosados demandan sobre todo cámaras y alarmas perimetrales.",
  servicios: [
    {
      slugServicio: "solucion-interferencias-5g",
      titulo: "Interferencias 5G en Getafe",
      descripcion:
        "El despliegue 5G en Getafe es de los más densos del sur de Madrid y las colectivas de los 70-80 lo acusan. Filtramos y renovamos cabeceras de comunidades enteras en una sola mañana.",
    },
    {
      slugServicio: "antenas-parabolicas",
      titulo: "Antenas y parabólicas en Getafe",
      descripcion:
        "Renovación de antenas colectivas obsoletas en bloques altos, antenas individuales en adosados de Getafe Norte y El Bercial, y parabólicas para canales internacionales.",
    },
    {
      slugServicio: "camaras-seguridad",
      titulo: "Cámaras de seguridad en Getafe",
      descripcion:
        "Videovigilancia para garajes y portales de comunidades, naves de los polígonos y chalets. La normativa municipal de videovigilancia en Getafe es estricta: instalamos conforme a ella.",
    },
    {
      slugServicio: "alarmas",
      titulo: "Alarmas en Getafe",
      descripcion:
        "Alarmas para pisos (contactos en accesos) y adosados (perimetral + interior), sin cuotas o conectadas a CRA, con control desde el móvil.",
    },
    {
      slugServicio: "porteros-videoporteros",
      titulo: "Porteros y videoporteros en Getafe",
      descripcion:
        "Sustitución sin obra de porteros antiguos en comunidades de pisos —el caso más común en Getafe— por sistemas Duox con o sin vídeo.",
    },
  ],
  proyectos: [
    {
      titulo: "Interferencia 5G en comunidad del Sector III",
      descripcion:
        "Comunidad con pérdida de canales tras la activación de una antena 5G cercana. Filtro en cabecera y amplificador con rechazo LTE: señal recuperada en todas las viviendas en una mañana.",
    },
    {
      titulo: "Videovigilancia en nave industrial",
      descripcion:
        "Sistema de cámaras IP perimetrales e interiores para una nave del polígono, con grabación de 30 días y acceso remoto multi-usuario.",
    },
    {
      titulo: "Alarma en chalet de Getafe Norte",
      descripcion:
        "Sistema Ajax con protección perimetral, sensores pet-friendly en interior y avisos al móvil, sin cuotas mensuales.",
    },
  ],
  desplazamiento: "Desplazamiento desde Toledo: 25 minutos por A-42.",
  tiempoRespuesta: "Tiempo medio de respuesta a urgencias: 4-6 horas.",
  viaAcceso: "A-42 (salidas 15-17), M-407, M-50",
  distanciaKm: "25 km por A-42",
  normativa:
    "El Ayuntamiento de Getafe regula la instalación de elementos en fachadas mediante su ordenanza municipal, y la densidad urbana hace que los criterios de videovigilancia (qué puede enfocar una cámara privada en la vía pública) se apliquen con especial rigor. Gestionamos la adecuación de cada instalación a estos requisitos.", // TODO(verificar): referencia exacta de la ordenanza municipal vigente
  testimonios: [
    {
      nombre: "Antonio R.",
      zona: "Sector III",
      comentario: "Nos solucionaron la interferencia en toda la comunidad en una mañana.",
      puntuacion: 5,
    },
    {
      nombre: "Carmen P.",
      zona: "El Bercial",
      comentario: "Cámaras instaladas en un día, muy profesionales.",
      puntuacion: 5,
    },
  ],
  barrios: [
    { nombre: "Sector III", detalle: "bloques altos con antenas colectivas" },
    { nombre: "San Isidro", detalle: "barrio popular, pisos antiguos" },
    { nombre: "Las Margaritas", detalle: "zona residencial, pisos y adosados" },
    { nombre: "Getafe Norte", detalle: "adosados y chalets recientes" },
    { nombre: "El Bercial", detalle: "zona nueva de adosados" },
    { nombre: "Juan de la Cierva", detalle: "centro, pisos" },
    { nombre: "Los Ángeles", detalle: "barrio y zona industrial" },
    { nombre: "Perales del Río", detalle: "urbanización de chalets" },
  ],
  cercanas: ["valdemoro", "ciempozuelos", "torrejon-de-la-calzada", "grinon"],
  conectividad: "Movistar fibra/5G (despliegue masivo), Vodafone fibra, Orange fibra, Digi, Lowi, Yoigo",
  puntosInteres: [
    "Hospital Universitario de Getafe",
    "Universidad Carlos III",
    "Polígono Los Ángeles",
    "Cerro de los Ángeles",
  ],
}
