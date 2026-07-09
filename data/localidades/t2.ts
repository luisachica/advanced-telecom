// data/localidades/t2.ts
// Las 34 localidades Tier 2 según la plantilla de Estructura P2 §4 y su tabla de
// variables semánticas (§4.3). La plantilla común (metadatos, H1) se aplica con el
// builder t2(); los campos únicos (intro, contexto, caso, barrios) son por localidad.
//
// TODO(verificar): las variables (vías, distancias, conectividad, barrios) proceden de la
// tabla del documento estratégico y deben contrastarse con datos reales (INE, Google Maps).

import type { Localidad, BarrioLocal, ProyectoLocal } from "@/types/localidad"

interface DatosT2 {
  nombre: string
  slug: string
  provincia: "Toledo" | "Madrid"
  cluster: string
  distanciaKm: string
  viaAcceso: string
  minutos: string
  respuesta: string
  conectividad: string
  barrios: BarrioLocal[]
  cercanas: string[]
  intro: string[]
  contexto: string
  /** Fragmento sobre vivienda para el texto de antenas, ej. "las comunidades del casco y los adosados de la periferia" */
  viviendaAntenas: string
  /** Fragmento sobre vivienda para cámaras/alarmas, ej. "los chalets de las urbanizaciones" */
  viviendaSeguridad: string
  caso: ProyectoLocal
}

function t2(d: DatosT2): Localidad {
  return {
    slug: d.slug,
    nombre: d.nombre,
    tier: 2,
    provincia: d.provincia,
    comunidad: d.provincia === "Madrid" ? "Comunidad de Madrid" : "Castilla-La Mancha",
    cluster: d.cluster,
    metaTitle: `Instalador Antenas, Cámaras y Alarmas ${d.nombre} | Antenas Toledo`,
    metaDescription: `Instalador de antenas, cámaras de seguridad y alarmas en ${d.nombre}. Servicio rápido desde Toledo. Interferencias 5G, videovigilancia, videoporteros. Presupuesto gratuito.`,
    h1: `Instalador de Antenas, Cámaras y Seguridad en ${d.nombre}`,
    intro: d.intro,
    contextoUrbanistico: d.contexto,
    servicios: [
      {
        slugServicio: "solucion-interferencias-5g",
        titulo: `Interferencias 5G en ${d.nombre}`,
        descripcion: `Diagnóstico con espectrómetro y filtros LTE/5G para las viviendas de ${d.nombre} afectadas por el despliegue de los operadores móviles.`,
      },
      {
        slugServicio: "antenas-parabolicas",
        titulo: `Antenas y parabólicas en ${d.nombre}`,
        descripcion: `Instalación y reparación de antenas TDT y parabólicas en ${d.nombre}: atendemos ${d.viviendaAntenas}, con medición de señal profesional y garantía por escrito.`,
      },
      {
        slugServicio: "camaras-seguridad",
        titulo: `Cámaras de seguridad en ${d.nombre}`,
        descripcion: `Videovigilancia con visión nocturna y acceso desde el móvil, diseñada para ${d.viviendaSeguridad}.`,
      },
      {
        slugServicio: "alarmas",
        titulo: `Alarmas en ${d.nombre}`,
        descripcion: `Sistemas antirrobo sin cuotas o conectados a CRA, dimensionados para ${d.viviendaSeguridad}.`,
      },
      {
        slugServicio: "porteros-videoporteros",
        titulo: `Porteros y videoporteros en ${d.nombre}`,
        descripcion: `Renovación de porteros de comunidad sin obra y videoporteros IP o GSM con apertura desde el móvil para unifamiliares de ${d.nombre}.`,
      },
    ],
    proyectos: [d.caso],
    desplazamiento: `Desplazamiento desde Toledo: ${d.minutos} por ${d.viaAcceso.split(",")[0].trim()}.`,
    tiempoRespuesta: `Tiempo medio de respuesta: ${d.respuesta}.`,
    viaAcceso: d.viaAcceso,
    distanciaKm: d.distanciaKm,
    barrios: d.barrios,
    cercanas: d.cercanas,
    conectividad: d.conectividad,
  }
}

export const LOCALIDADES_T2: Localidad[] = [
  t2({
    nombre: "Numancia de la Sagra",
    slug: "numancia-de-la-sagra",
    provincia: "Toledo",
    cluster: "La Sagra Norte",
    distanciaKm: "18 km",
    viaAcceso: "A-42 (salida 37)",
    minutos: "20 minutos",
    respuesta: "3-5 horas",
    conectividad: "Movistar fibra, Vodafone, Orange",
    barrios: [
      { nombre: "Casco Urbano", detalle: "pisos y viviendas tradicionales" },
      { nombre: "Urbanización El Bosque", detalle: "adosados" },
      { nombre: "Zona Industrial", detalle: "naves" },
    ],
    cercanas: ["illescas", "yuncos", "yeles"],
    intro: [
      "Numancia de la Sagra es uno de los municipios en crecimiento del eje de La Sagra, con promociones de pisos nuevos en el casco y adosados en la periferia. Esa mezcla de vivienda nueva y tradicional marca el tipo de trabajo que realizamos aquí: antenas colectivas para las comunidades recientes y seguridad para los adosados.",
      "Atendemos el municipio en unos 20 minutos por la A-42, con el mismo equipo que da servicio a Illescas y Yuncos.",
    ],
    contexto:
      "Predominan los pisos nuevos en el casco y los adosados de la periferia, junto a una zona industrial activa que demanda videovigilancia.",
    viviendaAntenas: "las comunidades de pisos nuevos del casco y los adosados de la periferia",
    viviendaSeguridad: "los adosados de la periferia y las naves de la zona industrial",
    caso: {
      titulo: "Antena colectiva en promoción nueva",
      descripcion:
        "Instalación de antena colectiva con cabecera filtrada 5G en una comunidad reciente del casco, con señal verificada en todas las viviendas.",
    },
  }),
  t2({
    nombre: "El Viso de San Juan",
    slug: "el-viso-de-san-juan",
    provincia: "Toledo",
    cluster: "La Sagra Norte",
    distanciaKm: "30 km",
    viaAcceso: "M-407 / A-42",
    minutos: "30 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar fibra, Vodafone",
    barrios: [
      { nombre: "Casco Urbano", detalle: "viviendas tradicionales" },
      { nombre: "Urbanización El Encín", detalle: "adosados y chalets" }, // TODO(verificar): nombre real de la urbanización
      { nombre: "Señorío del Viso", detalle: "urbanización residencial" },
    ],
    cercanas: ["ugena", "carranque", "illescas"],
    intro: [
      "El Viso de San Juan es una zona en plena expansión residencial en el límite entre Toledo y Madrid, con urbanizaciones de adosados y chalets que multiplican la población del casco original.",
      "En las urbanizaciones, la demanda típica es seguridad perimetral y videoportero; en el casco, renovación de antenas e interferencias 5G.",
    ],
    contexto:
      "Urbanizaciones de adosados y chalets en torno a un casco pequeño: el perfil de vivienda unifamiliar domina el municipio.",
    viviendaAntenas: "el casco y las urbanizaciones de adosados",
    viviendaSeguridad: "los chalets y adosados de las urbanizaciones",
    caso: {
      titulo: "Cámaras y alarma en chalet de urbanización",
      descripcion:
        "Sistema combinado de 4 cámaras IP y alarma sin cuotas en una parcela de las urbanizaciones, con avisos al móvil.",
    },
  }),
  t2({
    nombre: "Casarrubios del Monte",
    slug: "casarrubios-del-monte",
    provincia: "Toledo",
    cluster: "Seseña-Este",
    distanciaKm: "40 km",
    viaAcceso: "N-403 / A-5",
    minutos: "40 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar fibra/ADSL, Vodafone",
    barrios: [
      { nombre: "Casco", detalle: "viviendas tradicionales" },
      { nombre: "Urbanización Los Prados", detalle: "chalets" }, // TODO(verificar): nombre real de la urbanización
      { nombre: "Zona del aeródromo", detalle: "empresas y parcelas" },
    ],
    cercanas: ["valmojado", "mentrida", "sesena"],
    intro: [
      "Casarrubios del Monte es cabecera local del suroeste, con un casco tradicional y urbanizaciones dispersas donde la cobertura de servicios técnicos escasea. El aeródromo y su entorno empresarial añaden demanda de videovigilancia profesional.",
      "Cubrimos el municipio y sus urbanizaciones con desplazamiento por la A-5/N-403.",
    ],
    contexto:
      "Casco tradicional más urbanizaciones de chalets dispersas; en varias de ellas la conectividad es limitada y las soluciones GSM/4G son la opción adecuada.",
    viviendaAntenas: "el casco tradicional y las urbanizaciones dispersas",
    viviendaSeguridad: "los chalets de las urbanizaciones y las empresas del entorno del aeródromo",
    caso: {
      titulo: "Cámaras 4G en parcela sin internet fijo",
      descripcion:
        "Instalación de cámaras con SIM 4G en una parcela de urbanización sin fibra, con avisos de movimiento al móvil del propietario.",
    },
  }),
  t2({
    nombre: "Ugena",
    slug: "ugena",
    provincia: "Toledo",
    cluster: "La Sagra Norte",
    distanciaKm: "22 km",
    viaAcceso: "A-42 (salida 35)",
    minutos: "25 minutos",
    respuesta: "3-5 horas",
    conectividad: "Movistar fibra, Vodafone, Orange",
    barrios: [
      { nombre: "Casco", detalle: "viviendas tradicionales" },
      { nombre: "Urbanizaciones nuevas", detalle: "adosados" },
      { nombre: "Zona residencial", detalle: "unifamiliares" },
    ],
    cercanas: ["illescas", "yuncos", "el-viso-de-san-juan"],
    intro: [
      "Ugena ha crecido con fuerza en la última década como área residencial de La Sagra, con urbanizaciones de adosados que rodean el casco original.",
      "El perfil de trabajo dominante es el de vivienda unifamiliar: antenas individuales, videoporteros y seguridad perimetral.",
    ],
    contexto:
      "Crecimiento residencial reciente con predominio de adosados; el casco conserva viviendas tradicionales con antenas por renovar.",
    viviendaAntenas: "el casco y las urbanizaciones de adosados",
    viviendaSeguridad: "los adosados y unifamiliares de las urbanizaciones",
    caso: {
      titulo: "Videoportero con app en adosado",
      descripcion:
        "Sustitución del portero convencional por videoportero con desvío al móvil en un adosado de las urbanizaciones nuevas.",
    },
  }),
  t2({
    nombre: "Cubas de la Sagra",
    slug: "cubas-de-la-sagra",
    provincia: "Madrid",
    cluster: "Arroyomolinos",
    distanciaKm: "30 km",
    viaAcceso: "M-407",
    minutos: "30 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar fibra, Vodafone",
    barrios: [
      { nombre: "Casco", detalle: "viviendas tradicionales" },
      { nombre: "Urbanización nueva", detalle: "adosados" },
      { nombre: "Zona de expansión", detalle: "pisos recientes" },
    ],
    cercanas: ["arroyomolinos", "grinon", "serranillos-del-valle"],
    intro: [
      "Cubas de la Sagra es un núcleo residencial madrileño en auge, con adosados y pisos en expansión en torno a un casco pequeño.",
      "Trabajamos la zona junto con Arroyomolinos y Griñón, con los mismos equipos y tiempos de respuesta.",
    ],
    contexto:
      "Adosados y pisos recientes en expansión: vivienda nueva con fibra completa, ideal para sistemas IP de cámaras y videoporteros.",
    viviendaAntenas: "las promociones recientes y el casco",
    viviendaSeguridad: "los adosados de las zonas nuevas",
    caso: {
      titulo: "Alarma sin cuotas en adosado",
      descripcion:
        "Sistema Ajax con contactos en accesos, volumétrico pet-friendly y sirena exterior en un adosado de la zona nueva.",
    },
  }),
  t2({
    nombre: "Torrejón de la Calzada",
    slug: "torrejon-de-la-calzada",
    provincia: "Madrid",
    cluster: "Sur Madrid",
    distanciaKm: "35 km",
    viaAcceso: "M-407 / A-42",
    minutos: "35 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar fibra, Vodafone, Orange",
    barrios: [
      { nombre: "Casco", detalle: "pisos" },
      { nombre: "Urbanizaciones", detalle: "adosados" },
      { nombre: "Zona residencial", detalle: "unifamiliares" },
    ],
    cercanas: ["getafe", "valdemoro", "grinon", "torrejon-de-velasco"],
    intro: [
      "Torrejón de la Calzada combina pisos en el casco con adosados en las zonas de expansión, en pleno corredor de la A-42 madrileña.",
      "La proximidad del corredor hace frecuentes las interferencias 5G en las comunidades con antenas antiguas.",
    ],
    contexto:
      "Pisos y adosados a partes iguales; las comunidades del casco concentran renovaciones de antena y portero.",
    viviendaAntenas: "las comunidades del casco y los adosados",
    viviendaSeguridad: "los adosados y unifamiliares",
    caso: {
      titulo: "Filtro 5G en comunidad del casco",
      descripcion:
        "Comunidad con cortes de señal tras el encendido de una antena cercana: filtro en cabecera y verificación por plantas.",
    },
  }),
  t2({
    nombre: "Ciempozuelos",
    slug: "ciempozuelos",
    provincia: "Madrid",
    cluster: "Sur Madrid",
    distanciaKm: "40 km",
    viaAcceso: "A-4 (salida 33)",
    minutos: "35 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar fibra, Vodafone",
    barrios: [
      { nombre: "Casco Histórico", detalle: "pisos y viviendas tradicionales" },
      { nombre: "Urbanizaciones", detalle: "adosados" },
      { nombre: "Zona Hospital", detalle: "residencial" },
    ],
    cercanas: ["valdemoro", "getafe", "sesena"],
    intro: [
      "Ciempozuelos es cabecera del sureste madrileño, con un casco histórico de pisos y viviendas tradicionales y urbanizaciones de adosados en la periferia.",
      "Llegamos por la A-4 junto con Valdemoro y Seseña, con jornadas frecuentes en la zona.",
    ],
    contexto:
      "Casco con comunidades antiguas —renovación de antenas y porteros— y urbanizaciones con demanda de cámaras y alarmas.",
    viviendaAntenas: "las comunidades del casco histórico",
    viviendaSeguridad: "los adosados de las urbanizaciones y los comercios del centro",
    caso: {
      titulo: "Renovación de portero en comunidad",
      descripcion:
        "Sustitución sin obra del portero antiguo de un portal del casco por sistema digital de dos hilos con telefonillos nuevos.",
    },
  }),
  t2({
    nombre: "Olías del Rey",
    slug: "olias-del-rey",
    provincia: "Toledo",
    cluster: "Oeste Toledo",
    distanciaKm: "8 km",
    viaAcceso: "A-42",
    minutos: "10 minutos",
    respuesta: "2-4 horas",
    conectividad: "Movistar fibra, Vodafone",
    barrios: [
      { nombre: "Casco", detalle: "viviendas tradicionales y pisos" },
      { nombre: "Urbanizaciones", detalle: "chalets y adosados" },
      { nombre: "Zona industrial", detalle: "naves junto a la A-42" },
    ],
    cercanas: ["toledo", "bargas", "magan"],
    intro: [
      "Olías del Rey es el periurbano inmediato de Toledo por la A-42, con urbanizaciones de chalets, un casco tradicional y una zona industrial activa junto a la autovía.",
      "Al estar a 10 minutos de nuestra base, es una de las localidades con mejor tiempo de respuesta de toda la cobertura.",
    ],
    contexto:
      "Pisos periurbanos y chalets en urbanizaciones, más naves industriales en el corredor: demanda equilibrada entre antenas y seguridad.",
    viviendaAntenas: "el casco y las urbanizaciones de chalets",
    viviendaSeguridad: "los chalets de las urbanizaciones y las naves del polígono",
    caso: {
      titulo: "Videovigilancia en nave junto a la A-42",
      descripcion:
        "Sistema de cámaras IP perimetrales con avisos de intrusión fuera de horario para una nave del polígono.",
    },
  }),
  t2({
    nombre: "Argés",
    slug: "arges",
    provincia: "Toledo",
    cluster: "Oeste Toledo",
    distanciaKm: "10 km",
    viaAcceso: "CM-4000",
    minutos: "12 minutos",
    respuesta: "2-4 horas",
    conectividad: "Movistar fibra/ADSL, Vodafone",
    barrios: [
      { nombre: "Casco", detalle: "viviendas tradicionales" },
      { nombre: "Urbanizaciones", detalle: "chalets y adosados" },
      { nombre: "Zona residencial", detalle: "unifamiliares" },
    ],
    cercanas: ["toledo", "cobisa", "burguillos-de-toledo"],
    intro: [
      "Argés es uno de los municipios residenciales del sur de Toledo, con chalets y adosados periurbanos donde vive mucha gente que trabaja en la capital.",
      "El perfil de vivienda unifamiliar concentra la demanda en seguridad perimetral, videoporteros y antenas individuales.",
    ],
    contexto:
      "Chalets y adosados periurbanos con parcela: la seguridad perimetral es el servicio más solicitado.",
    viviendaAntenas: "los unifamiliares y el casco",
    viviendaSeguridad: "los chalets y adosados con parcela",
    caso: {
      titulo: "Sistema perimetral en chalet",
      descripcion:
        "4 cámaras IP más alarma integrada en un chalet con parcela, con verificación visual desde el móvil.",
    },
  }),
  t2({
    nombre: "Mocejón",
    slug: "mocejon",
    provincia: "Toledo",
    cluster: "La Sagra Sur",
    distanciaKm: "15 km",
    viaAcceso: "N-400 / CM-4001",
    minutos: "18 minutos",
    respuesta: "2-4 horas",
    conectividad: "Movistar fibra/ADSL, Vodafone",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Urbanizaciones", detalle: "unifamiliares" },
      { nombre: "Zona agrícola", detalle: "parcelas y naves" },
    ],
    cercanas: ["magan", "olias-del-rey", "toledo"],
    intro: [
      "Mocejón es un municipio agrícola de La Sagra sur con casco tradicional y urbanizaciones de unifamiliares, a un cuarto de hora de Toledo.",
      "Las parcelas y naves agrícolas añaden una demanda particular: cámaras 4G y alarmas en instalaciones sin internet fijo.",
    ],
    contexto:
      "Casco rural con viviendas de pueblo y urbanizaciones de unifamiliares; parcelas agrícolas con necesidades de vigilancia remota.",
    viviendaAntenas: "las viviendas del casco y las urbanizaciones",
    viviendaSeguridad: "los unifamiliares y las parcelas agrícolas",
    caso: {
      titulo: "Cámaras 4G en parcela agrícola",
      descripcion:
        "Vigilancia con cámaras de SIM 4G y panel solar en una parcela sin suministro fijo, con avisos al móvil.",
    },
  }),
  t2({
    nombre: "Cobisa",
    slug: "cobisa",
    provincia: "Toledo",
    cluster: "Oeste Toledo",
    distanciaKm: "12 km",
    viaAcceso: "CM-4000",
    minutos: "15 minutos",
    respuesta: "2-4 horas",
    conectividad: "Movistar fibra/ADSL",
    barrios: [
      { nombre: "Casco", detalle: "viviendas tradicionales" },
      { nombre: "Urbanización", detalle: "chalets y adosados" },
    ],
    cercanas: ["arges", "toledo", "burguillos-de-toledo"],
    intro: [
      "Cobisa es un municipio residencial pegado a Toledo por el sur, crecido a base de chalets y adosados de familias jóvenes.",
      "Como en el resto del cinturón sur, la seguridad perimetral y los videoporteros con app son los servicios estrella.",
    ],
    contexto: "Residencial periurbano de chalets y adosados con parcela, de construcción mayoritariamente reciente.",
    viviendaAntenas: "los unifamiliares del municipio",
    viviendaSeguridad: "los chalets y adosados con parcela",
    caso: {
      titulo: "Alarma y videoportero en adosado",
      descripcion:
        "Instalación conjunta de alarma sin cuotas y videoportero con desvío al móvil en un adosado de la urbanización.",
    },
  }),
  t2({
    nombre: "Cabañas de la Sagra",
    slug: "cabanas-de-la-sagra",
    provincia: "Toledo",
    cluster: "La Sagra Norte",
    distanciaKm: "20 km",
    viaAcceso: "A-42",
    minutos: "20 minutos",
    respuesta: "3-5 horas",
    conectividad: "Movistar fibra, Vodafone",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Zona nueva", detalle: "adosados y pisos recientes" },
    ],
    cercanas: ["villaluenga-de-la-sagra", "recas", "yuncos"],
    intro: [
      "Cabañas de la Sagra combina el casco tradicional con una zona nueva de adosados y pisos, en el corredor de la A-42.",
      "Damos servicio junto con Villaluenga y Recas, con el mismo equipo que cubre La Sagra norte.",
    ],
    contexto: "Casco de pueblo más zona nueva residencial; comunidades pequeñas y unifamiliares a partes iguales.",
    viviendaAntenas: "el casco y las promociones de la zona nueva",
    viviendaSeguridad: "los adosados de la zona nueva",
    caso: {
      titulo: "Antena y filtro 5G en comunidad pequeña",
      descripcion:
        "Renovación de antena con cabecera filtrada en una comunidad de la zona nueva afectada por interferencias.",
    },
  }),
  t2({
    nombre: "Yeles",
    slug: "yeles",
    provincia: "Toledo",
    cluster: "La Sagra Sur",
    distanciaKm: "25 km",
    viaAcceso: "N-400 / A-4",
    minutos: "25 minutos",
    respuesta: "3-5 horas",
    conectividad: "Movistar fibra, Vodafone",
    barrios: [
      { nombre: "Casco", detalle: "pisos y viviendas de pueblo" },
      { nombre: "Polígono", detalle: "naves industriales" },
    ],
    cercanas: ["esquivias", "illescas", "numancia-de-la-sagra"],
    intro: [
      "Yeles es un municipio industrial y residencial de La Sagra, con un polígono activo y un casco en crecimiento.",
      "La videovigilancia de naves y las antenas de las comunidades del casco concentran nuestro trabajo en la zona.",
    ],
    contexto: "Mezcla industrial y residencial: naves con necesidades de seguridad profesional y casco con comunidades por renovar.",
    viviendaAntenas: "las comunidades del casco",
    viviendaSeguridad: "las naves del polígono y los unifamiliares",
    caso: {
      titulo: "Cámaras en nave del polígono",
      descripcion:
        "Sistema de cámaras IP con grabación extendida y usuarios diferenciados para una empresa del polígono de Yeles.",
    },
  }),
  t2({
    nombre: "Villaluenga de la Sagra",
    slug: "villaluenga-de-la-sagra",
    provincia: "Toledo",
    cluster: "La Sagra Norte",
    distanciaKm: "22 km",
    viaAcceso: "A-42",
    minutos: "22 minutos",
    respuesta: "3-5 horas",
    conectividad: "Movistar fibra/ADSL",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo y pisos" },
      { nombre: "Zona nueva", detalle: "adosados" },
    ],
    cercanas: ["cabanas-de-la-sagra", "recas", "numancia-de-la-sagra"],
    intro: [
      "Villaluenga de la Sagra, en el eje Toledo-Madrid, combina el casco tradicional con promociones de adosados y la actividad de la cementera y su entorno industrial.",
      "Atendemos el municipio dentro de nuestras rutas por la A-42, con tiempos de respuesta cortos.",
    ],
    contexto: "Pisos y adosados en el casco y la zona nueva, más el entorno industrial de la cementera.",
    viviendaAntenas: "el casco y las promociones de adosados",
    viviendaSeguridad: "los adosados y las instalaciones industriales",
    caso: {
      titulo: "Alarma en vivienda del casco",
      descripcion:
        "Sistema sin cuotas con contactos en accesos y sirena exterior en una vivienda tradicional reformada.",
    },
  }),
  t2({
    nombre: "Bargas",
    slug: "bargas",
    provincia: "Toledo",
    cluster: "Oeste Toledo",
    distanciaKm: "10 km",
    viaAcceso: "N-403 / CM-4000",
    minutos: "12 minutos",
    respuesta: "2-4 horas",
    conectividad: "Movistar fibra/ADSL",
    barrios: [
      { nombre: "Casco", detalle: "pisos y viviendas de pueblo" },
      { nombre: "Urbanizaciones", detalle: "chalets" },
    ],
    cercanas: ["toledo", "olias-del-rey", "fuensalida"],
    intro: [
      "Bargas es un municipio periurbano al norte de Toledo, con casco tradicional, pisos y urbanizaciones de chalets muy consolidadas.",
      "A 12 minutos de nuestra base, mantenemos aquí uno de los mejores tiempos de respuesta de la provincia.",
    ],
    contexto: "Pisos en el casco y chalets periurbanos en urbanizaciones: demanda mixta de antenas y seguridad.",
    viviendaAntenas: "las comunidades del casco y los chalets",
    viviendaSeguridad: "los chalets de las urbanizaciones",
    caso: {
      titulo: "Renovación de antena colectiva",
      descripcion:
        "Sustitución de antena y cabecera con filtrado 5G en una comunidad del casco con señal degradada.",
    },
  }),
  t2({
    nombre: "Carranque",
    slug: "carranque",
    provincia: "Toledo",
    cluster: "Seseña-Este",
    distanciaKm: "28 km",
    viaAcceso: "A-42 / CM-4009",
    minutos: "30 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar fibra, Vodafone",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Urbanizaciones", detalle: "adosados y chalets" },
      { nombre: "Polígono", detalle: "naves" },
    ],
    cercanas: ["ugena", "el-viso-de-san-juan", "palomeque"],
    intro: [
      "Carranque, conocido por su parque arqueológico, es también un municipio residencial e industrial en crecimiento en el norte de la provincia.",
      "Sus urbanizaciones de adosados y su polígono concentran la demanda de seguridad; el casco, la de antenas.",
    ],
    contexto: "Residencial e industrial: urbanizaciones de adosados y chalets junto a un polígono en desarrollo.",
    viviendaAntenas: "el casco y las urbanizaciones",
    viviendaSeguridad: "los adosados de las urbanizaciones y las naves del polígono",
    caso: {
      titulo: "Videoportero GSM en urbanización",
      descripcion:
        "Portero GSM para el acceso común de una urbanización sin cableado, con llamada al móvil de cada vecino.",
    },
  }),
  t2({
    nombre: "Camarena",
    slug: "camarena",
    provincia: "Toledo",
    cluster: "Oeste Toledo",
    distanciaKm: "18 km",
    viaAcceso: "CM-4005 / N-403",
    minutos: "22 minutos",
    respuesta: "3-5 horas",
    conectividad: "Movistar ADSL/fibra, Vodafone",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Urbanizaciones nuevas", detalle: "unifamiliares" },
    ],
    cercanas: ["fuensalida", "la-torre-de-esteban-hambran", "mentrida"],
    intro: [
      "Camarena es un núcleo rural en crecimiento de la zona oeste, con urbanizaciones nuevas de unifamiliares en torno al casco tradicional.",
      "Lo atendemos desde Fuensalida, cabecera de la comarca, con desplazamientos cortos.",
    ],
    contexto: "Núcleo rural en transición residencial: viviendas de pueblo y urbanizaciones nuevas de unifamiliares.",
    viviendaAntenas: "las viviendas del casco y las urbanizaciones nuevas",
    viviendaSeguridad: "los unifamiliares de las urbanizaciones",
    caso: {
      titulo: "Antena individual en unifamiliar",
      descripcion:
        "Instalación de antena de alta ganancia con rechazo LTE en una vivienda nueva, verificada en todas las tomas.",
    },
  }),
  t2({
    nombre: "Esquivias",
    slug: "esquivias",
    provincia: "Toledo",
    cluster: "Seseña-Este",
    distanciaKm: "25 km",
    viaAcceso: "A-4 / CM-4010",
    minutos: "25 minutos",
    respuesta: "3-5 horas",
    conectividad: "Movistar fibra, Vodafone",
    barrios: [
      { nombre: "Casco", detalle: "viviendas tradicionales" },
      { nombre: "Urbanizaciones", detalle: "adosados" },
    ],
    cercanas: ["sesena", "yeles", "valmojado"],
    intro: [
      "Esquivias, villa cervantina de La Sagra, combina su casco histórico con zonas residenciales y comerciales en crecimiento junto al corredor de la A-4.",
      "Trabajamos la zona junto con Seseña, con presencia frecuente en el municipio.",
    ],
    contexto: "Casco tradicional con comunidades pequeñas y urbanizaciones de adosados en la periferia.",
    viviendaAntenas: "las comunidades del casco",
    viviendaSeguridad: "los adosados y los comercios",
    caso: {
      titulo: "Filtro 5G en comunidad",
      descripcion:
        "Eliminación de interferencias en una comunidad del casco con filtro en cabecera y verificación de señal.",
    },
  }),
  t2({
    nombre: "Griñón",
    slug: "grinon",
    provincia: "Madrid",
    cluster: "Sur Madrid",
    distanciaKm: "32 km",
    viaAcceso: "M-407 / A-42",
    minutos: "32 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar fibra, Vodafone, Orange",
    barrios: [
      { nombre: "Casco", detalle: "viviendas tradicionales" },
      { nombre: "Urbanizaciones", detalle: "chalets y adosados" },
      { nombre: "Zona residencial", detalle: "unifamiliares" },
    ],
    cercanas: ["arroyomolinos", "cubas-de-la-sagra", "serranillos-del-valle", "torrejon-de-la-calzada"],
    intro: [
      "Griñón es un municipio residencial del sur de Madrid con fuerte presencia de chalets y adosados, entre Arroyomolinos y el corredor de la A-42.",
      "La vivienda unifamiliar con parcela define la demanda: cámaras perimetrales, alarmas y videoporteros.",
    ],
    contexto: "Predominio claro de chalets y adosados con parcela en urbanizaciones consolidadas.",
    viviendaAntenas: "los unifamiliares y el casco",
    viviendaSeguridad: "los chalets y adosados con parcela",
    caso: {
      titulo: "Sistema perimetral en chalet",
      descripcion:
        "6 cámaras IP con analítica de personas y alarma integrada en un chalet, con avisos verificables desde el móvil.",
    },
  }),
  t2({
    nombre: "La Torre de Esteban Hambrán",
    slug: "la-torre-de-esteban-hambran",
    provincia: "Toledo",
    cluster: "Oeste Toledo",
    distanciaKm: "25 km",
    viaAcceso: "CM-4005 / N-403",
    minutos: "28 minutos",
    respuesta: "3-5 horas",
    conectividad: "Movistar ADSL/fibra",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Urbanizaciones", detalle: "unifamiliares y segunda residencia" },
    ],
    cercanas: ["fuensalida", "mentrida", "camarena"],
    intro: [
      "La Torre de Esteban Hambrán es un municipio rural de la zona oeste con urbanizaciones de unifamiliares y segunda residencia.",
      "Las viviendas no habitadas todo el año hacen de la vigilancia remota (cámaras con avisos) el servicio más valorado.",
    ],
    contexto: "Rural con urbanizaciones; abundante segunda residencia que demanda vigilancia remota y alarmas.",
    viviendaAntenas: "las viviendas del casco y las urbanizaciones",
    viviendaSeguridad: "las segundas residencias y unifamiliares",
    caso: {
      titulo: "Vigilancia remota de segunda residencia",
      descripcion:
        "Cámaras con avisos de movimiento y alarma con módulo GSM en una vivienda de fin de semana.",
    },
  }),
  t2({
    nombre: "Recas",
    slug: "recas",
    provincia: "Toledo",
    cluster: "La Sagra Norte",
    distanciaKm: "22 km",
    viaAcceso: "A-42 / CM-4001",
    minutos: "24 minutos",
    respuesta: "3-5 horas",
    conectividad: "Movistar ADSL/fibra",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Zona nueva", detalle: "adosados" },
    ],
    cercanas: ["villaluenga-de-la-sagra", "cabanas-de-la-sagra", "olias-del-rey"],
    intro: [
      "Recas es un municipio de La Sagra en transición de lo rural a lo residencial, con promociones de adosados junto al casco tradicional.",
      "Cubrimos el municipio en nuestras rutas por la A-42 y la CM-4001.",
    ],
    contexto: "Rural en transición: viviendas de pueblo y adosados nuevos, con conectividad desigual entre zonas.",
    viviendaAntenas: "el casco y los adosados de la zona nueva",
    viviendaSeguridad: "los adosados y las parcelas",
    caso: {
      titulo: "Antena y videoportero en vivienda nueva",
      descripcion:
        "Instalación completa de antena TDT y videoportero con app en un adosado de nueva construcción.",
    },
  }),
  t2({
    nombre: "Nambroca",
    slug: "nambroca",
    provincia: "Toledo",
    cluster: "Oeste Toledo",
    distanciaKm: "12 km",
    viaAcceso: "N-400 / CM-410",
    minutos: "15 minutos",
    respuesta: "2-4 horas",
    conectividad: "Movistar fibra/ADSL",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Urbanizaciones", detalle: "chalets y adosados" },
    ],
    cercanas: ["toledo", "cobisa", "burguillos-de-toledo"],
    intro: [
      "Nambroca es un municipio periurbano al sureste de Toledo, con urbanizaciones de chalets y adosados que han crecido alrededor del casco.",
      "A 15 minutos de nuestra base, mantiene tiempos de respuesta cortos durante toda la semana.",
    ],
    contexto: "Periurbano de Toledo con predominio de unifamiliares en urbanizaciones.",
    viviendaAntenas: "el casco y las urbanizaciones",
    viviendaSeguridad: "los chalets y adosados con parcela",
    caso: {
      titulo: "Cámaras perimetrales en chalet",
      descripcion:
        "4 cámaras IP con visión nocturna cubriendo accesos y perímetro de una parcela, con avisos al móvil.",
    },
  }),
  t2({
    nombre: "Magán",
    slug: "magan",
    provincia: "Toledo",
    cluster: "Oeste Toledo",
    distanciaKm: "14 km",
    viaAcceso: "N-400 / CM-4001",
    minutos: "17 minutos",
    respuesta: "2-4 horas",
    conectividad: "Movistar ADSL/fibra",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Urbanización", detalle: "unifamiliares" },
    ],
    cercanas: ["mocejon", "olias-del-rey", "toledo"],
    intro: [
      "Magán es un municipio periurbano al norte de Toledo, con viviendas de pueblo en el casco y una urbanización de unifamiliares.",
      "Lo atendemos junto a Mocejón y Olías del Rey, con desplazamientos muy cortos.",
    ],
    contexto: "Periurbano tranquilo: casco tradicional y unifamiliares, con demanda estable de antenas y alarmas.",
    viviendaAntenas: "las viviendas del casco",
    viviendaSeguridad: "los unifamiliares de la urbanización",
    caso: {
      titulo: "Alarma sin cuotas en vivienda",
      descripcion:
        "Sistema con contactos en accesos, volumétrico interior y avisos al móvil en vivienda unifamiliar.",
    },
  }),
  t2({
    nombre: "Burguillos de Toledo",
    slug: "burguillos-de-toledo",
    provincia: "Toledo",
    cluster: "Oeste Toledo",
    distanciaKm: "10 km",
    viaAcceso: "CM-410",
    minutos: "13 minutos",
    respuesta: "2-4 horas",
    conectividad: "Movistar ADSL/fibra",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Urbanizaciones", detalle: "chalets y adosados" },
    ],
    cercanas: ["arges", "cobisa", "nambroca", "toledo"],
    intro: [
      "Burguillos de Toledo es un municipio residencial del cinturón sur de la capital, crecido con urbanizaciones de chalets y adosados.",
      "Forma parte de nuestra zona de respuesta rápida junto con Argés y Cobisa.",
    ],
    contexto: "Periurbano residencial de unifamiliares; la seguridad perimetral es la demanda principal.",
    viviendaAntenas: "los unifamiliares y el casco",
    viviendaSeguridad: "los chalets y adosados con parcela",
    caso: {
      titulo: "Videoportero IP en adosado",
      descripcion:
        "Videoportero con desvío al móvil y apertura remota de peatonal en un adosado de urbanización.",
    },
  }),
  t2({
    nombre: "Serranillos del Valle",
    slug: "serranillos-del-valle",
    provincia: "Madrid",
    cluster: "Arroyomolinos",
    distanciaKm: "33 km",
    viaAcceso: "M-407",
    minutos: "33 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar fibra, Vodafone",
    barrios: [
      { nombre: "Casco", detalle: "viviendas tradicionales" },
      { nombre: "Urbanizaciones", detalle: "adosados y chalets" },
    ],
    cercanas: ["arroyomolinos", "grinon", "cubas-de-la-sagra"],
    intro: [
      "Serranillos del Valle es un municipio residencial del suroeste madrileño con adosados y chalets en urbanizaciones tranquilas.",
      "Lo cubrimos en las mismas rutas que Arroyomolinos y Griñón.",
    ],
    contexto: "Adosados y chalets en urbanizaciones: vivienda unifamiliar con parcela como perfil dominante.",
    viviendaAntenas: "los unifamiliares y el casco",
    viviendaSeguridad: "los adosados y chalets con parcela",
    caso: {
      titulo: "Alarma con CRA en chalet",
      descripcion:
        "Central conectada a Central Receptora con detección perimetral e interior en vivienda unifamiliar.",
    },
  }),
  t2({
    nombre: "Moraleja de Enmedio",
    slug: "moraleja-de-enmedio",
    provincia: "Madrid",
    cluster: "Navalcarnero",
    distanciaKm: "38 km",
    viaAcceso: "M-413 / M-407",
    minutos: "38 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar fibra/ADSL",
    barrios: [
      { nombre: "Casco", detalle: "viviendas tradicionales" },
      { nombre: "Urbanizaciones", detalle: "adosados" },
    ],
    cercanas: ["navalcarnero", "arroyomolinos", "serranillos-del-valle"],
    intro: [
      "Moraleja de Enmedio es un municipio residencial del suroeste de Madrid con urbanizaciones de adosados en torno al casco tradicional.",
      "Lo atendemos desde las rutas de Navalcarnero y Arroyomolinos.",
    ],
    contexto: "Residencial con urbanizaciones de adosados; demanda centrada en seguridad y videoporteros.",
    viviendaAntenas: "el casco y las urbanizaciones",
    viviendaSeguridad: "los adosados de las urbanizaciones",
    caso: {
      titulo: "Cámaras con app en adosado",
      descripcion: "Sistema de 4 cámaras con acceso móvil y grabación local en un adosado con parcela.",
    },
  }),
  t2({
    nombre: "Valmojado",
    slug: "valmojado",
    provincia: "Toledo",
    cluster: "Seseña-Este",
    distanciaKm: "28 km",
    viaAcceso: "A-5 / CM-4008",
    minutos: "30 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar fibra/ADSL",
    barrios: [
      { nombre: "Casco", detalle: "pisos y viviendas de pueblo" },
      { nombre: "Zona nueva", detalle: "adosados" },
    ],
    cercanas: ["casarrubios-del-monte", "mentrida", "camarena"],
    intro: [
      "Valmojado, en el eje de la A-5 entre Toledo y Madrid, combina pisos y viviendas de pueblo en el casco con adosados en la zona nueva.",
      "Su posición en el corredor lo hace propenso a interferencias 5G en las comunidades con antenas antiguas.",
    ],
    contexto: "Casco con comunidades pequeñas y zona nueva de adosados en el corredor de la A-5.",
    viviendaAntenas: "las comunidades del casco",
    viviendaSeguridad: "los adosados de la zona nueva",
    caso: {
      titulo: "Filtro 5G en comunidad",
      descripcion: "Filtro en cabecera y verificación de señal en una comunidad afectada por una antena del corredor A-5.",
    },
  }),
  t2({
    nombre: "Alameda de la Sagra",
    slug: "alameda-de-la-sagra",
    provincia: "Toledo",
    cluster: "La Sagra Norte",
    distanciaKm: "24 km",
    viaAcceso: "A-42 / CM-4001",
    minutos: "26 minutos",
    respuesta: "3-5 horas",
    conectividad: "Movistar ADSL/fibra",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo y pisos" },
      { nombre: "Zona residencial", detalle: "unifamiliares" },
    ],
    cercanas: ["villaluenga-de-la-sagra", "magan", "mocejon"],
    intro: [
      "Alameda de la Sagra es un municipio de perfil mixto rural-residencial en el centro de La Sagra.",
      "Las viviendas de pueblo y los pisos del casco concentran la demanda de antenas; los unifamiliares, la de seguridad.",
    ],
    contexto: "Pisos y viviendas de pueblo con zona residencial de unifamiliares; conectividad desigual entre calles.",
    viviendaAntenas: "las viviendas y comunidades del casco",
    viviendaSeguridad: "los unifamiliares de la zona residencial",
    caso: {
      titulo: "Renovación de antena en comunidad",
      descripcion: "Sustitución de antena y amplificador en una comunidad pequeña con señal deficiente.",
    },
  }),
  t2({
    nombre: "Palomeque",
    slug: "palomeque",
    provincia: "Toledo",
    cluster: "La Sagra Sur",
    distanciaKm: "20 km",
    viaAcceso: "CM-4009 / N-400",
    minutos: "24 minutos",
    respuesta: "3-5 horas",
    conectividad: "Movistar ADSL/fibra",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Urbanizaciones", detalle: "unifamiliares" },
    ],
    cercanas: ["carranque", "el-viso-de-san-juan", "ugena"],
    intro: [
      "Palomeque es un municipio pequeño de La Sagra con urbanizaciones de unifamiliares que han ampliado el casco rural original.",
      "Lo atendemos en las rutas del norte de la provincia, junto a Carranque y El Viso.",
    ],
    contexto: "Rural con urbanizaciones de unifamiliares; abundan las parcelas que requieren soluciones GSM/4G.",
    viviendaAntenas: "las viviendas del casco y las urbanizaciones",
    viviendaSeguridad: "los unifamiliares y parcelas",
    caso: {
      titulo: "Alarma GSM en unifamiliar",
      descripcion: "Sistema de alarma con comunicación por SIM en una vivienda sin internet fijo.",
    },
  }),
  t2({
    nombre: "Torrejón de Velasco",
    slug: "torrejon-de-velasco",
    provincia: "Madrid",
    cluster: "Navalcarnero",
    distanciaKm: "38 km",
    viaAcceso: "M-407 / A-42",
    minutos: "36 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar fibra/ADSL",
    barrios: [
      { nombre: "Casco", detalle: "viviendas tradicionales" },
      { nombre: "Urbanizaciones", detalle: "adosados" },
    ],
    cercanas: ["torrejon-de-la-calzada", "valdemoro", "grinon"],
    intro: [
      "Torrejón de Velasco es un municipio residencial del sur de Madrid, con casco tradicional y urbanizaciones de adosados.",
      "Lo cubrimos en las rutas del corredor A-42/M-407 junto a Torrejón de la Calzada.",
    ],
    contexto: "Residencial tranquilo con casco tradicional y adosados en la periferia.",
    viviendaAntenas: "el casco y las urbanizaciones",
    viviendaSeguridad: "los adosados de las urbanizaciones",
    caso: {
      titulo: "Videoportero en adosado",
      descripcion: "Videoportero con monitor a color y desvío al móvil en adosado de urbanización.",
    },
  }),
  t2({
    nombre: "Villamanta",
    slug: "villamanta",
    provincia: "Madrid",
    cluster: "Navalcarnero",
    distanciaKm: "45 km",
    viaAcceso: "M-507",
    minutos: "45 minutos",
    respuesta: "5-7 horas",
    conectividad: "Movistar ADSL",
    barrios: [{ nombre: "Casco", detalle: "viviendas de pueblo" }],
    cercanas: ["navalcarnero", "villa-del-prado", "mentrida"],
    intro: [
      "Villamanta es un municipio rural del suroeste madrileño donde el servicio técnico local escasea y los vecinos dependen de instaladores de la comarca.",
      "Lo atendemos desde las rutas de Navalcarnero, programando las visitas para reducir esperas.",
    ],
    contexto: "Municipio rural de viviendas de pueblo; la conectividad limitada hace útiles las soluciones GSM/4G.",
    viviendaAntenas: "las viviendas del casco",
    viviendaSeguridad: "las viviendas y parcelas del municipio",
    caso: {
      titulo: "Antena TDT en vivienda de pueblo",
      descripcion: "Sustitución de antena antigua con orientación al repetidor óptimo y verificación de señal.",
    },
  }),
  t2({
    nombre: "Villa del Prado",
    slug: "villa-del-prado",
    provincia: "Madrid",
    cluster: "Navalcarnero",
    distanciaKm: "55 km",
    viaAcceso: "M-507",
    minutos: "55 minutos",
    respuesta: "5-7 horas",
    conectividad: "Movistar ADSL/fibra",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Urbanizaciones de la ribera", detalle: "segunda residencia" },
    ],
    cercanas: ["villamanta", "mentrida", "navalcarnero"],
    intro: [
      "Villa del Prado, en la ribera del Alberche, combina el casco tradicional con urbanizaciones de segunda residencia muy pobladas en verano.",
      "Las viviendas de temporada hacen de la vigilancia remota y las alarmas el servicio más solicitado.",
    ],
    contexto: "Rural con urbanizaciones de segunda residencia en la ribera; alta demanda estacional de seguridad remota.",
    viviendaAntenas: "el casco y las urbanizaciones de la ribera",
    viviendaSeguridad: "las segundas residencias de las urbanizaciones",
    caso: {
      titulo: "Vigilancia remota de segunda residencia",
      descripcion: "Cámaras con SIM 4G y alarma GSM en una vivienda de temporada de la ribera, con avisos al móvil.",
    },
  }),
  t2({
    nombre: "Méntrida",
    slug: "mentrida",
    provincia: "Toledo",
    cluster: "Oeste Toledo",
    distanciaKm: "30 km",
    viaAcceso: "CM-4008 / M-507",
    minutos: "34 minutos",
    respuesta: "4-6 horas",
    conectividad: "Movistar ADSL",
    barrios: [
      { nombre: "Casco", detalle: "viviendas de pueblo" },
      { nombre: "Urbanizaciones", detalle: "unifamiliares y segunda residencia" },
    ],
    cercanas: ["la-torre-de-esteban-hambran", "valmojado", "villa-del-prado"],
    intro: [
      "Méntrida, en la zona de viñedos del noroeste de la provincia, combina el casco tradicional con urbanizaciones de unifamiliares y segunda residencia.",
      "La cobertura ADSL de buena parte del municipio hace que recomendemos soluciones GSM/4G en cámaras y alarmas.",
    ],
    contexto: "Rural vitivinícola con urbanizaciones; conectividad limitada que condiciona el diseño de los sistemas.",
    viviendaAntenas: "las viviendas del casco y las urbanizaciones",
    viviendaSeguridad: "los unifamiliares y segundas residencias",
    caso: {
      titulo: "Alarma GSM en casa de pueblo",
      descripcion: "Alarma con comunicación por SIM y sirena exterior en vivienda del casco sin internet fijo.",
    },
  }),
  t2({
    nombre: "Villamiel de Toledo",
    slug: "villamiel-de-toledo",
    provincia: "Toledo",
    cluster: "Oeste Toledo",
    distanciaKm: "15 km",
    viaAcceso: "CM-4005",
    minutos: "18 minutos",
    respuesta: "2-4 horas",
    conectividad: "Movistar ADSL",
    barrios: [{ nombre: "Casco", detalle: "viviendas de pueblo" }],
    cercanas: ["fuensalida", "bargas", "camarena"],
    intro: [
      "Villamiel de Toledo es un municipio rural periurbano entre Toledo y Fuensalida, con viviendas de pueblo y parcelas.",
      "Su cercanía a nuestra base permite tiempos de respuesta cortos pese a su tamaño.",
    ],
    contexto: "Rural periurbano de viviendas de pueblo; la conectividad ADSL condiciona el diseño de cámaras y alarmas.",
    viviendaAntenas: "las viviendas del casco",
    viviendaSeguridad: "las viviendas y parcelas del municipio",
    caso: {
      titulo: "Antena y alarma en vivienda de pueblo",
      descripcion: "Renovación de antena TDT y alarma GSM en una vivienda tradicional reformada.",
    },
  }),
]
