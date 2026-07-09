// data/localidades/t1/navalcarnero.ts — Hub de Localidad T1 según Estructura P1 §3.4
import type { Localidad } from "@/types/localidad"

export const navalcarnero: Localidad = {
  slug: "navalcarnero",
  nombre: "Navalcarnero",
  tier: 1,
  provincia: "Madrid",
  comunidad: "Comunidad de Madrid",
  cluster: "Navalcarnero",
  metaTitle: "Instalador Antenas, Cámaras y Alarmas Navalcarnero | Antenas Toledo",
  metaDescription:
    "Instalador de antenas, cámaras y alarmas en Navalcarnero. Cubrimos toda la zona suroeste. Atención rápida. Presupuesto gratuito.",
  h1: "Instalador de Antenas, Cámaras y Seguridad en Navalcarnero",
  intro: [
    "Navalcarnero es la cabecera comarcal del suroeste madrileño, con más de 46.000 habitantes. Su posición estratégica como centro de servicios de la zona la convierte en un mercado clave: desde Navalcarnero atendemos también a las localidades y urbanizaciones cercanas (El Álamo, Villamanta, Batres) que dependen de la cabecera para los servicios profesionales.",
    "Trabajamos tanto en el casco histórico —con edificios tradicionales y comunidades que renuevan antenas y porteros— como en las urbanizaciones de expansión y en el polígono industrial, donde la videovigilancia de naves es el servicio más solicitado.",
  ],
  contextoUrbanistico:
    "Navalcarnero combina un casco histórico con edificios tradicionales y una amplia zona de expansión reciente con urbanizaciones de chalets y adosados. Su polígono industrial alberga numerosas empresas con necesidades de videovigilancia y control de accesos. Esta mezcla hace que el trabajo típico vaya desde renovar la antena colectiva de una comunidad del centro hasta el sistema perimetral completo de una nave.",
  servicios: [
    {
      slugServicio: "antenas-parabolicas",
      titulo: "Antenas y parabólicas en Navalcarnero",
      descripcion:
        "Renovación de colectivas en el casco, antenas individuales en urbanizaciones y orientación al repetidor óptimo de la zona suroeste.",
    },
    {
      slugServicio: "solucion-interferencias-5g",
      titulo: "Interferencias 5G en Navalcarnero",
      descripcion:
        "Filtrado LTE/5G en comunidades y viviendas afectadas por el despliegue de los operadores a lo largo de la A-5.",
    },
    {
      slugServicio: "camaras-seguridad",
      titulo: "Cámaras de seguridad en Navalcarnero",
      descripcion:
        "Videovigilancia para naves del polígono industrial, comercios del centro y chalets de las urbanizaciones.",
    },
    {
      slugServicio: "alarmas",
      titulo: "Alarmas en Navalcarnero",
      descripcion:
        "Sistemas antirrobo para viviendas, locales y naves, sin cuotas o conectados a CRA, con avisos al móvil.",
    },
    {
      slugServicio: "porteros-videoporteros",
      titulo: "Porteros y videoporteros en Navalcarnero",
      descripcion:
        "Videoporteros IP para unifamiliares y renovación de porteros de comunidades sin obra, reutilizando el cableado existente.",
    },
  ],
  proyectos: [
    {
      titulo: "Videovigilancia en nave del polígono",
      descripcion:
        "Sistema de cámaras IP perimetrales e interiores para una nave industrial, con grabación extendida y acceso remoto para gerencia.",
    },
    {
      titulo: "Antena TDT + filtro 5G en comunidad del centro",
      descripcion:
        "Renovación de antena y cabecera con filtrado 5G en una comunidad del casco con pérdida intermitente de canales.",
    },
    {
      titulo: "Videoportero IP en urbanización de chalets",
      descripcion:
        "Videoportero con desvío al móvil y apertura remota de peatonal y garaje en vivienda unifamiliar.",
    },
  ],
  desplazamiento: "Desplazamiento desde Toledo: 40 minutos por N-403/A-5.",
  tiempoRespuesta: "Tiempo medio de respuesta: 5-7 horas.",
  viaAcceso: "A-5, N-403, M-404",
  distanciaKm: "45 km por N-403/A-5",
  normativa:
    "La ordenanza de fachadas de Navalcarnero regula las instalaciones visibles en el casco, con criterios menos restrictivos que los del casco histórico de Toledo. En el polígono industrial, las instalaciones de videovigilancia deben respetar la normativa de protección de datos también respecto a trabajadores; le asesoramos en su cumplimiento.", // TODO(verificar): referencia exacta de la ordenanza municipal vigente
  testimonios: [
    {
      nombre: "José L.",
      zona: "Centro",
      comentario: "Solucionaron la interferencia 5G y ahora vemos todos los canales perfectamente.",
      puntuacion: 5,
    },
  ],
  barrios: [
    { nombre: "Casco Histórico", detalle: "pisos tradicionales" },
    { nombre: "Las Pilitas", detalle: "zona residencial nueva" },
    { nombre: "Valdelaguila", detalle: "urbanización" },
    { nombre: "El Hoyo", detalle: "chalets" },
    { nombre: "Los Llanos", detalle: "urbanización" },
    { nombre: "Polígono Industrial", detalle: "naves y empresas" },
  ],
  cercanas: ["villamanta", "moraleja-de-enmedio", "torrejon-de-velasco", "arroyomolinos"],
  conectividad: "Movistar, Vodafone, Orange (fibra en casco; ADSL/4G en algunas urbanizaciones)",
  puntosInteres: ["Plaza de Segovia", "Centro Comercial Las Pilitas", "Polígono Industrial", "Ayuntamiento"],
}
