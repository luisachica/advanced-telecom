// data/servicios-hub/antenas-parabolicas.ts
// Contenido del Hub de Servicio según Estructura P1 §2.2 (fusiona el antiguo hub de Antenas TDT)
import type { ServicioHub } from "@/types/servicio-hub"

export const antenasHub: ServicioHub = {
  slug: "antenas-parabolicas",
  titulo: "Antenas y parabólicas",
  tituloCorto: "Antenas",
  metaTitle: "Instalación Antenas y Parabólicas Toledo | Antenas Toledo",
  metaDescription:
    "Instalamos y reparamos antenas TDT, parabólicas, antenas colectivas y SAT en Toledo y zona. Más de 25 años de experiencia. Presupuesto sin compromiso.",
  h1: "Instalación y Reparación de Antenas y Parabólicas en Toledo",
  image: "/images/telecom/antena-parabolica.jpg",
  iconName: "Satellite",
  descripcionCard:
    "Antenas TDT individuales y colectivas, parabólicas para Astra y Hotbird, amplificadores y cableado, con medición de señal profesional y garantía por escrito.",
  intro: [
    "El servicio de antenas y parabólicas cubre desde la instalación de una antena TDT individual en un chalet hasta el diseño completo de una instalación colectiva para una comunidad de propietarios, pasando por la reparación de averías, la renovación de cableado deteriorado y la sustitución de amplificadores. También orientamos e instalamos parabólicas para la recepción de plataformas por satélite (Astra, Hotbird, Hispasat), muy demandadas para canales internacionales.",
    "Cada instalación empieza con una medición real de la señal disponible en su ubicación: la cobertura de TDT varía mucho entre zonas según el repetidor del que se reciba (Toledo, Navahermosa o Madrid), y elegir la antena y la orientación correctas marca la diferencia entre una imagen perfecta y años de problemas. Trabajamos con material homologado de primeras marcas y entregamos todas las instalaciones verificadas con medidor de campo y con garantía por escrito.",
  ],
  problemas: [
    {
      titulo: "Antena caída o desplazada por el viento",
      descripcion:
        "Los temporales desplazan mástiles y rompen anclajes. Reparamos o sustituimos la antena y reforzamos la sujeción para que no vuelva a ocurrir.",
    },
    {
      titulo: "Pérdida de canales o imagen pixelada",
      descripcion:
        "Señal débil, amplificador averiado o cableado antiguo. Medimos la instalación completa y corregimos el punto exacto donde se degrada la señal.",
    },
    {
      titulo: "Cableado y tomas deteriorados",
      descripcion:
        "En edificios con instalaciones antiguas, el cable coaxial y los repartidores pierden apantallamiento y la señal llega mal a las últimas plantas. Renovamos la distribución completa.",
    },
    {
      titulo: "Antena colectiva obsoleta",
      descripcion:
        "Muchas comunidades mantienen cabeceras de hace 20 o 30 años que no cumplen la normativa ICT actual y no filtran el 5G. Proyectamos y ejecutamos la renovación completa.",
    },
    {
      titulo: "Parabólica para canales internacionales",
      descripcion:
        "Instalamos y orientamos parabólicas al satélite adecuado (Astra, Hotbird y otros) para recibir canales de otros países con la máxima calidad.",
    },
  ],
  proceso: [
    {
      titulo: "Inspección del estado actual",
      descripcion:
        "Revisamos antena, mástil, amplificación, distribución y tomas para localizar el origen real del problema o dimensionar la instalación nueva.",
    },
    {
      titulo: "Cálculo de señal disponible",
      descripcion:
        "Medimos con medidor de campo qué señal llega en su ubicación y desde qué repetidor conviene recibir. En zonas límite, esta medición evita instalar una antena insuficiente.",
    },
    {
      titulo: "Presupuesto cerrado",
      descripcion: "Le entregamos presupuesto por escrito con materiales, plazos y garantía antes de empezar cualquier trabajo.",
    },
    {
      titulo: "Instalación y orientación",
      descripcion:
        "Montamos la antena o parabólica con anclajes adecuados al soporte (cubierta, fachada o mástil) y la orientamos con precisión al repetidor o satélite objetivo.",
    },
    {
      titulo: "Medición de calidad de señal",
      descripcion:
        "Verificamos nivel y calidad (MER/CBER) en todas las tomas de la vivienda o del edificio, no solo en la más cercana a la antena.",
    },
    {
      titulo: "Configuración y entrega",
      descripcion:
        "Sintonizamos y ordenamos los canales en sus televisores, le explicamos la instalación realizada y entregamos la garantía por escrito.",
    },
  ],
  equiposIntro:
    "La elección del equipo depende de la señal disponible en su zona y del tipo de instalación (individual o colectiva). Estas son las familias de equipos con las que trabajamos:",
  equipos: [
    {
      categoria: "Antenas TDT (Televes DAT HD, Ikusi)",
      detalle:
        "Antenas de alta ganancia con rechazo LTE/5G integrado, adecuadas tanto para zonas con buena cobertura como para ubicaciones límite entre repetidores.",
    },
    {
      categoria: "Parabólicas de 60 a 90 cm",
      detalle:
        "Discos de 60-80 cm para Astra (canales en español y plataformas europeas) y de 90 cm para Hotbird y satélites con menor huella en España, siempre con LNB universal de calidad.",
    },
    {
      categoria: "Amplificadores de mástil y cabeceras",
      detalle:
        "Amplificación ajustada a la instalación: previos de mástil para viviendas individuales y cabeceras programables o monocanal para comunidades, con filtrado 5G.",
    },
    {
      categoria: "Distribución y tomas",
      detalle:
        "Cable coaxial de bajas pérdidas, derivadores, repartidores y tomas finales que mantienen la calidad de señal en todas las estancias y plantas.",
    },
  ],
  normativa: [
    "La Ley de Propiedad Horizontal (art. 17 y concordantes) regula la instalación y renovación de antenas colectivas en comunidades de propietarios: le orientamos sobre los acuerdos de junta necesarios.",
    "La normativa ICT (Infraestructuras Comunes de Telecomunicación) es obligatoria en edificios posteriores a su entrada en vigor y marca los estándares de calidad que exigimos también en renovaciones de edificios antiguos.",
    "Varias ordenanzas municipales regulan la instalación en fachadas y cubiertas; en cascos históricos protegidos, como el de Toledo, puede requerirse licencia de obra menor. Se lo indicamos en el diagnóstico y preparamos la documentación.",
  ],
  precios: [
    { concepto: "Antena TDT individual instalada (chalet o vivienda)", precio: "80 – 150 €" },
    { concepto: "Parabólica instalada y orientada", precio: "120 – 250 €" },
    { concepto: "Reparación / sustitución de amplificador", precio: "desde 90 €" },
    { concepto: "Renovación de antena colectiva (comunidad)", precio: "según nº de viviendas" },
  ],
  preciosNota:
    "Precios orientativos con IVA. Las instalaciones colectivas se presupuestan según el número de viviendas y el estado de la distribución existente, siempre sin compromiso.", // TODO(verificar): rangos de precio reales del negocio
  casos: [
    {
      titulo: "Comunidad en el casco histórico de Toledo",
      localidadSlug: "toledo",
      localidadNombre: "Toledo",
      problema:
        "Instalación colectiva obsoleta en un edificio protegido, con señal deficiente en la mitad de las viviendas y limitaciones patrimoniales para actuar en cubierta.",
      solucion:
        "Renovación completa de cabecera y distribución respetando la normativa de protección del casco, con antena de alto rechazo y verificación toma a toma.",
      resultado: "Señal óptima en todas las viviendas sin alterar la estética del edificio.",
    },
    {
      titulo: "Chalet en Valdemoro",
      localidadSlug: "valdemoro",
      localidadNombre: "Valdemoro",
      problema: "Antena caída tras una tormenta, con el mástil doblado y el cable dañado en varios tramos.",
      solucion: "Sustitución de mástil y antena con anclaje reforzado, renovación del tramo de cable exterior y nueva orientación al repetidor óptimo.",
      resultado: "Instalación recuperada en el día, con mejor calidad de señal que la original.",
    },
    {
      titulo: "Parabólica para canales internacionales en Getafe",
      localidadSlug: "getafe",
      localidadNombre: "Getafe",
      problema: "Un residente necesitaba recibir los canales de su país, no disponibles por TDT.",
      solucion: "Instalación de parabólica de 80 cm orientada a Hotbird con receptor satélite configurado con la lista de canales solicitada.",
      resultado: "Recepción estable de los canales internacionales deseados desde el primer día.",
    },
  ],
  faqs: [
    {
      question: "¿Cuántos canales puedo recibir con una antena TDT?",
      answer:
        "En la zona de Toledo y sur de Madrid se reciben todos los múltiplex nacionales y autonómicos: en torno a 40 canales de televisión más las emisoras de radio digital. El número exacto depende del repetidor del que se reciba; en la visita le confirmamos la cobertura real de su ubicación con el medidor de campo.",
    },
    {
      question: "¿Es mejor una antena individual o colectiva?",
      answer:
        "Depende del tipo de vivienda. En chalets y unifamiliares, la antena individual es la opción natural. En edificios de pisos, la colectiva es más eficiente y suele ser obligatoria: una sola antena de calidad con una buena distribución da mejor señal a todos que muchas antenas individuales compitiendo en la cubierta.",
    },
    {
      question: "¿Qué parabólica necesito para ver canales internacionales?",
      answer:
        "Depende del satélite que emita los canales de su país. Para Astra 19,2°E suele bastar un disco de 60-80 cm; para Hotbird 13°E recomendamos 80-90 cm en esta zona. En la visita identificamos el satélite correcto y le presupuestamos disco, LNB y receptor adecuados.",
    },
    {
      question: "¿Se puede instalar una antena en un edificio protegido?",
      answer:
        "Sí, pero con condiciones. En cascos históricos como el de Toledo, las ordenanzas de protección patrimonial limitan lo que se puede ver desde la vía pública y suele requerirse licencia de obra menor. Tenemos experiencia en estas actuaciones: elegimos ubicaciones discretas en cubierta y preparamos la documentación necesaria.",
    },
    {
      question: "¿Cuánto cuesta instalar una antena TDT?",
      answer:
        "Una instalación individual estándar (antena, mástil, cable hasta una toma) se mueve entre 80 y 150 € según la dificultad de acceso y los metros de cable. Si hay que distribuir a varias tomas o renovar cableado interior, lo presupuestamos aparte y por escrito antes de empezar.",
    },
    {
      question: "¿Ofrecéis servicio de urgencia?",
      answer:
        "Sí. Las antenas caídas, los amplificadores averiados y las pérdidas totales de señal se atienden con prioridad, normalmente en el mismo día en Toledo y localidades cercanas. Llámenos y le confirmamos la hora de visita.",
    },
    {
      question: "¿Qué diferencia hay entre TDT y TDT HD?",
      answer:
        "Desde febrero de 2024 todas las emisiones nacionales son en alta definición (HD). Si su televisor es anterior a 2010 y no sintoniza los canales HD, puede resolverse con un sintonizador TDT externo sin cambiar de televisor; se lo instalamos y configuramos.",
    },
    {
      question: "¿Puedo tener antena y parabólica a la vez?",
      answer:
        "Sí, es una configuración muy habitual. Ambas señales pueden combinarse en un mismo cable con un mezclador TDT-SAT y separarse en cada toma, evitando duplicar cableado. Lo dejamos preparado para que cada televisor reciba las dos fuentes.",
    },
    {
      question: "¿Con qué marcas trabajáis?",
      answer:
        "Principalmente Televes e Ikusi en antenas, amplificación y cabeceras, y LNB y receptores de fabricantes contrastados. Todo el material es homologado y con garantía oficial del fabricante, además de nuestra garantía de instalación.",
    },
    {
      question: "¿La instalación incluye cableado interior?",
      answer:
        "La instalación estándar incluye el cableado desde la antena hasta la toma principal. Si necesita tomas adicionales en otras estancias o renovar el cableado interior existente, lo incluimos en el presupuesto de forma detallada para que decida con total transparencia.",
    },
  ],
  datosClave: [
    {
      titulo: "Cobertura TDT por zona",
      detalle: "La señal varía según el repetidor más cercano (Toledo, Navahermosa o Madrid). Medimos en su ubicación antes de elegir antena y orientación.",
    },
    {
      titulo: "Tipo de vivienda",
      detalle: "Pisos: antena colectiva y distribución ICT. Chalets: antena individual de alta ganancia. Cada caso tiene su solución óptima.",
    },
    {
      titulo: "Normativa ICT según el edificio",
      detalle: "Los edificios pre-ICT admiten renovaciones que elevan la instalación al estándar actual; los post-ICT deben mantener sus parámetros de calidad.",
    },
    {
      titulo: "Orientación óptima por localidad",
      detalle: "Ajustamos cada antena al repetidor con mejor señal en su localidad concreta, no a una orientación genérica.",
    },
  ],
}
