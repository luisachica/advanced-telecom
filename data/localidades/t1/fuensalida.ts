// data/localidades/t1/fuensalida.ts — Hub de Localidad T1 según Estructura P1 §3.8
import type { Localidad } from "@/types/localidad"

export const fuensalida: Localidad = {
  slug: "fuensalida",
  nombre: "Fuensalida",
  tier: 1,
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  cluster: "Oeste Toledo",
  metaTitle: "Instalador Antenas, Cámaras y Alarmas Fuensalida | Antenas Toledo",
  metaDescription:
    "Instalador de antenas, cámaras y alarmas en Fuensalida y zona oeste de Toledo. Servicio rápido. Presupuesto gratuito.",
  h1: "Instalador de Antenas, Cámaras y Seguridad en Fuensalida",
  intro: [
    "Fuensalida es el centro comarcal de la zona oeste de la provincia de Toledo, con unos 12.000 habitantes. Su posición como cabecera de servicios para las localidades cercanas —Bargas, Rielves, Villamiel, La Torre de Esteban Hambrán— le confiere una actividad comercial y una demanda de servicios superiores a las que corresponderían solo por su población.",
    "Estamos a 15 minutos por la CM-4005, lo que nos permite atender Fuensalida con tiempos de respuesta muy cortos. El grueso de nuestro trabajo aquí es la renovación de antenas colectivas antiguas del casco y la seguridad (cámaras y alarmas) en las viviendas unifamiliares de la periferia.",
  ],
  contextoUrbanistico:
    "Fuensalida tiene un casco urbano con comunidades de pisos y una periferia de viviendas unifamiliares y urbanizaciones de chalets. La demanda principal es la de antenas —muchas colectivas antiguas necesitan renovación y filtrado 5G—, seguida de cámaras de seguridad en unifamiliares y naves de la zona industrial, ligada a la tradición del calzado local.",
  servicios: [
    {
      slugServicio: "antenas-parabolicas",
      titulo: "Antenas y parabólicas en Fuensalida",
      descripcion:
        "Renovación de antenas colectivas del casco, antenas individuales en chalets y orientación al repetidor con mejor señal de la zona oeste.",
    },
    {
      slugServicio: "camaras-seguridad",
      titulo: "Cámaras de seguridad en Fuensalida",
      descripcion:
        "Videovigilancia para unifamiliares, comercios y naves de la zona industrial, con acceso desde el móvil.",
    },
    {
      slugServicio: "alarmas",
      titulo: "Alarmas en Fuensalida",
      descripcion:
        "Alarmas antirrobo para viviendas y locales, sin cuotas o conectadas a CRA, con sensores pet-friendly.",
    },
    {
      slugServicio: "solucion-interferencias-5g",
      titulo: "Interferencias 5G en Fuensalida",
      descripcion:
        "Diagnóstico con espectrómetro y filtrado en comunidades y viviendas afectadas por el despliegue 5G.",
    },
    {
      slugServicio: "porteros-videoporteros",
      titulo: "Porteros y videoporteros en Fuensalida",
      descripcion:
        "Renovación de porteros en comunidades del casco y videoporteros IP y GSM para unifamiliares y parcelas.",
    },
  ],
  proyectos: [
    {
      titulo: "Sustitución de antena colectiva en el centro",
      descripcion:
        "Renovación completa de antena y cabecera en una comunidad del casco, con filtrado 5G y señal verificada en todas las viviendas en una sola jornada.",
    },
    {
      titulo: "Cámaras en chalet de urbanización periférica",
      descripcion:
        "Sistema de 4 cámaras IP con visión nocturna y avisos al móvil cubriendo accesos y perímetro de la parcela.",
    },
    {
      titulo: "Alarma en vivienda unifamiliar",
      descripcion:
        "Sistema sin cuotas con contactos en accesos, volumétricos interiores y sirena exterior disuasoria.",
    },
  ],
  desplazamiento: "Desplazamiento: 15 minutos por CM-4005.",
  tiempoRespuesta: "Tiempo medio de respuesta: 2-4 horas.",
  viaAcceso: "CM-4005, N-403 (por Bargas)",
  distanciaKm: "12 km por CM-4005",
  normativa:
    "El Ayuntamiento de Fuensalida aplica la normativa urbanística estándar, sin restricciones patrimoniales especiales para instalaciones en fachadas fuera de los entornos protegidos puntuales. Las instalaciones de videovigilancia siguen los criterios generales de la AEPD.", // TODO(verificar): confirmar ausencia de restricciones municipales específicas
  testimonios: [
    {
      nombre: "Fernando G.",
      zona: "Centro",
      comentario: "Sustituyeron la antena de toda la comunidad en un día.",
      puntuacion: 5,
    },
  ],
  barrios: [
    { nombre: "Casco Urbano", detalle: "comunidades de pisos" },
    { nombre: "Urbanizaciones periféricas", detalle: "chalets y unifamiliares" },
    { nombre: "Zona industrial", detalle: "naves y empresas del calzado" },
  ],
  cercanas: ["bargas", "la-torre-de-esteban-hambran", "burguillos-de-toledo", "camarena", "villamiel-de-toledo"],
  conectividad: "Movistar fibra/ADSL, Vodafone, Orange — cobertura irregular en algunas urbanizaciones",
  puntosInteres: ["Plaza de la Constitución", "Zona industrial", "Centro de Salud"],
}
