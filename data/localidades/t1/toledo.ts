// data/localidades/t1/toledo.ts — Hub de Localidad T1 según Estructura P1 §3.1
import type { Localidad } from "@/types/localidad"

export const toledo: Localidad = {
  slug: "toledo",
  nombre: "Toledo",
  tier: 1,
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  cluster: "Toledo Centro",
  metaTitle: "Instalador Antenas, Cámaras y Alarmas Toledo | Antenas Toledo",
  metaDescription:
    "Instalador de antenas, cámaras de seguridad, alarmas y videoporteros en Toledo ciudad. Servicio en 24h. Más de 25 años de experiencia. Llame ahora.",
  h1: "Instalador de Antenas, Cámaras y Seguridad en Toledo",
  intro: [
    "Toledo capital es nuestro mercado principal y donde concentramos el mayor número de intervenciones. La ciudad presenta particularidades únicas para un instalador: un casco histórico con edificios protegidos donde la normativa de instalación en fachadas es muy restrictiva, barrios modernos como Santa María de Benquerencia con comunidades de alta densidad, y urbanizaciones periféricas con necesidades de seguridad perimetral.",
    "Trabajar en Toledo exige conocer estas tres realidades. Nuestro equipo lleva más de 25 años instalando antenas, cámaras, alarmas y videoporteros en todos los barrios de la ciudad, con la experiencia necesaria para actuar en cubiertas protegidas del casco con la misma solvencia que en un chalet de Los Cigarrales.",
  ],
  contextoUrbanistico:
    "Toledo tiene dos realidades urbanísticas: el casco histórico (edificios de piedra con protección patrimonial, donde las antenas colectivas van en cubiertas protegidas y la señal sufre con los muros gruesos) y la expansión moderna —Santa María de Benquerencia, Azucaica, Vega Baja— con edificios de pisos de los años 80 a 2000 y urbanizaciones de chalets y adosados. Cada zona requiere un enfoque de instalación diferente: renovaciones ICT discretas en el casco, filtrado 5G en las colectivas del Polígono y seguridad perimetral en las urbanizaciones.",
  servicios: [
    {
      slugServicio: "solucion-interferencias-5g",
      titulo: "Interferencias 5G en Toledo",
      descripcion:
        "El despliegue 5G afecta especialmente a las antenas colectivas antiguas de Santa María de Benquerencia y los barrios de los 80. Medimos con espectrómetro e instalamos el filtro exacto para su comunidad.",
    },
    {
      slugServicio: "antenas-parabolicas",
      titulo: "Antenas y parabólicas en Toledo",
      descripcion:
        "Desde renovaciones ICT completas en el casco histórico —respetando la protección patrimonial— hasta antenas individuales en chalets de Azucaica o Los Cigarrales, con medición de señal en cada toma.",
    },
    {
      slugServicio: "camaras-seguridad",
      titulo: "Cámaras de seguridad en Toledo",
      descripcion:
        "Videovigilancia para comunidades, comercios y chalets: garajes comunitarios en el Polígono, locales del centro y sistemas perimetrales en urbanizaciones, siempre conforme a la normativa de protección de datos.",
    },
    {
      slugServicio: "alarmas",
      titulo: "Alarmas en Toledo",
      descripcion:
        "Sistemas sin cuotas o conectados a CRA para viviendas y locales de toda la ciudad, con sensores pet-friendly y control desde el móvil.",
    },
    {
      slugServicio: "porteros-videoporteros",
      titulo: "Porteros y videoporteros en Toledo",
      descripcion:
        "Sustituimos porteros antiguos de comunidades del casco y de los barrios sin obra, reutilizando el cableado, e instalamos videoporteros IP y GSM en unifamiliares.",
    },
  ],
  proyectos: [
    {
      titulo: "Renovación ICT en el casco histórico",
      descripcion:
        "Sustitución de la instalación colectiva completa en una comunidad de la zona de Santo Tomé, con ubicación discreta en cubierta conforme a la protección patrimonial y señal verificada toma a toma.",
    },
    {
      titulo: "Videovigilancia en urbanización de Azucaica",
      descripcion:
        "Instalación de 8 cámaras IP con analítica de personas y acceso remoto para una urbanización residencial, cubriendo accesos, viales interiores y zona común.",
    },
    {
      titulo: "Alarma Ajax en chalet de Los Cigarrales",
      descripcion:
        "Sistema de alarma sin cuotas con protección perimetral e interior, sirena exterior y avisos al móvil de toda la familia.",
    },
  ],
  desplazamiento: "Desplazamiento desde nuestra base: 5-15 minutos a cualquier punto de Toledo ciudad.",
  tiempoRespuesta: "Tiempo medio de respuesta a urgencias: 2-4 horas.",
  viaAcceso: "N-400, CM-4000, A-42 (salidas 79-83)",
  distanciaKm: "0-8 km — somos de Toledo",
  normativa:
    "La ordenanza municipal de protección del Patrimonio Histórico afecta a cualquier instalación visible en fachadas y cubiertas del casco: para antenas en edificios protegidos suele requerirse licencia de obra menor y ubicaciones no visibles desde la vía pública. El Ayuntamiento de Toledo aplica además los criterios generales de videovigilancia (AEPD) para cámaras que enfoquen espacios públicos. Conocemos estos trámites y los gestionamos como parte del servicio.", // TODO(verificar): referencia exacta de la ordenanza municipal vigente
  testimonios: [
    {
      nombre: "María G.",
      zona: "Santa María de Benquerencia",
      comentario: "Nos instalaron las cámaras en un día y ahora vemos todo desde el móvil.",
      puntuacion: 5,
    },
    {
      nombre: "Pedro L.",
      zona: "Casco Histórico",
      comentario: "Solucionaron la interferencia 5G sin tocar la fachada.",
      puntuacion: 5,
    },
  ],
  barrios: [
    { nombre: "Santa María de Benquerencia", detalle: "la zona más poblada: pisos y adosados con antenas colectivas" },
    { nombre: "Azucaica", detalle: "urbanización residencial de chalets" },
    { nombre: "Los Cigarrales", detalle: "zona residencial de chalets con vistas" },
    { nombre: "Casco Histórico", detalle: "edificios protegidos y antenas colectivas en cubierta" },
    { nombre: "Vega Baja", detalle: "zona universitaria, pisos" },
    { nombre: "Torrecastillo", detalle: "urbanización de chalets" },
    { nombre: "San Bernardo", detalle: "barrio de pisos" },
    { nombre: "Montesión", detalle: "zona residencial" },
    { nombre: "Barrio del Polígono", detalle: "zona industrial y viviendas" },
    { nombre: "Olivar de los Pozos", detalle: "urbanización" },
    { nombre: "Covachuelas", detalle: "barrio junto al casco" },
    { nombre: "Palomarejos", detalle: "barrio de pisos" },
    { nombre: "Valparaíso y Vista Hermosa", detalle: "urbanizaciones residenciales" },
  ],
  cercanas: ["olias-del-rey", "arges", "bargas", "cobisa", "nambroca"],
  conectividad: "Movistar fibra/5G, Vodafone fibra, Orange fibra, Digi fibra, Lowi",
  puntosInteres: ["Hospital Universitario de Toledo", "Zocodover", "Polígono Industrial", "UCLM Fábrica de Armas"],
}
