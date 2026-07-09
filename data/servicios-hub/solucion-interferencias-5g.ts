// data/servicios-hub/solucion-interferencias-5g.ts
// Contenido del Hub de Servicio según Estructura P1 §2.1
import type { ServicioHub } from "@/types/servicio-hub"

export const interferenciasHub: ServicioHub = {
  slug: "solucion-interferencias-5g",
  titulo: "Solución interferencias 5G",
  tituloCorto: "Interferencias 5G",
  metaTitle: "Solución Interferencias 5G Toledo | Antenas Toledo",
  metaDescription:
    "Solucionamos interferencias de señal 5G en su televisión. Filtros LTE, ajuste de antenas y soluciones definitivas en Toledo y zona. Presupuesto gratuito.",
  h1: "Solución Profesional a Interferencias 5G en Toledo y Alrededores",
  image: "/images/telecom/antena-profesional.jpg",
  iconName: "Wifi",
  descripcionCard:
    "Diagnóstico con espectrómetro, filtros LTE/5G y reorientación de antena para eliminar de forma definitiva las interferencias 5G en su televisión.",
  intro: [
    "El despliegue de las redes 5G en España está provocando interferencias masivas en las señales de televisión terrestre, especialmente en las comunidades de propietarios que reciben la señal a través de antenas colectivas antiguas. Los nuevos emisores 5G utilizan frecuencias muy próximas a las de la TDT, y cuando una estación base se instala cerca de su edificio, la señal de telefonía «invade» la banda de televisión: aparecen pixelados, cortes de imagen y canales que desaparecen sin previo aviso.",
    "Nuestro servicio aborda el problema desde la raíz: medimos el espectro con equipamiento profesional para identificar la frecuencia exacta que interfiere, y aplicamos la solución definitiva en cada caso: filtro LTE/5G, amplificador con filtrado integrado o reorientación de la antena. Trabajamos en Toledo, La Sagra y el sur de la Comunidad de Madrid, tanto para viviendas individuales como para comunidades completas, y le informamos de si su caso puede acogerse a la subvención estatal para afectados.",
  ],
  problemas: [
    {
      titulo: "Pixelado en canales HD",
      descripcion:
        "La imagen se congela o se descompone en cuadros, sobre todo en los canales de alta definición, que son los más sensibles a la pérdida de calidad de señal.",
    },
    {
      titulo: "Pérdida de señal a determinadas horas",
      descripcion:
        "Los canales se ven bien por la mañana y fallan por la tarde-noche: es el patrón típico de una interferencia 5G, que aumenta cuando crece el tráfico de datos móviles en la zona.",
    },
    {
      titulo: "Canales que desaparecen tras una nueva antena 5G",
      descripcion:
        "Si los problemas empezaron de forma repentina, es muy probable que un operador haya activado una estación base cercana. Lo confirmamos con la medición de espectro.",
    },
    {
      titulo: "Toda la comunidad afectada a la vez",
      descripcion:
        "Cuando el problema afecta a todas las viviendas del edificio, el origen suele estar en el amplificador de la antena colectiva, que se satura con la señal 5G y degrada todos los canales.",
    },
    {
      titulo: "Resintonizar no soluciona nada",
      descripcion:
        "Ha resintonizado el televisor varias veces y el problema vuelve. La resintonización no elimina una interferencia de radiofrecuencia: hace falta filtrarla físicamente en la instalación.",
    },
  ],
  proceso: [
    {
      titulo: "Visita de diagnóstico",
      descripcion:
        "Nos desplazamos a su vivienda o comunidad y medimos la señal con espectrómetro de RF en vivo, no con estimaciones. Identificamos la frecuencia interferente y su origen.",
    },
    {
      titulo: "Presupuesto cerrado",
      descripcion:
        "Le entregamos un presupuesto por escrito con la solución concreta para su caso, sin sorpresas. Le indicamos si puede acogerse a la subvención del Ministerio.",
    },
    {
      titulo: "Instalación del filtro LTE/5G",
      descripcion:
        "Instalamos el filtro adecuado a la frecuencia detectada: en la toma individual, en el mástil o en la cabecera de la antena colectiva, según dónde entre la interferencia.",
    },
    {
      titulo: "Ajuste y reorientación si es necesario",
      descripcion:
        "Si la antena apunta hacia la estación base 5G, la reorientamos hacia el repetidor de TDT óptimo y sustituimos el amplificador por uno con rechazo 5G si está saturado.",
    },
    {
      titulo: "Verificación con medición",
      descripcion:
        "Volvemos a medir todos los múltiplex de TDT para comprobar que la calidad de señal (MER/CBER) queda dentro de los parámetros correctos en todas las tomas.",
    },
    {
      titulo: "Entrega y garantía",
      descripcion:
        "Le mostramos el resultado, dejamos los canales ordenados y entregamos garantía por escrito de la intervención.",
    },
  ],
  equiposIntro:
    "No todos los filtros valen para todos los casos: la elección depende de la frecuencia interferente detectada y del tipo de instalación. Estas son las familias de equipos que utilizamos, siempre de marcas homologadas:",
  equipos: [
    {
      categoria: "Filtros LTE/5G (Televes, Ikusi, Emme Esse)",
      detalle:
        "Filtran las frecuencias de telefonía móvil (canal 48+ / banda 700 MHz) dejando pasar íntegra la señal de TDT. Existen versiones para toma individual, mástil y cabecera de comunidad.",
    },
    {
      categoria: "Amplificadores con filtro integrado",
      detalle:
        "Sustituyen al amplificador saturado de la antena colectiva por un modelo con rechazo 5G incorporado. Es la solución habitual en comunidades con instalaciones anteriores a 2020.",
    },
    {
      categoria: "Antenas de alta ganancia con rechazo LTE",
      detalle:
        "Cuando la antena está al final de su vida útil, instalamos antenas modernas (tipo Televes DAT BOSS) que ya incorporan filtrado y mejoran la relación señal/ruido.",
    },
    {
      categoria: "Sintonizadores y medidores TDT",
      detalle:
        "En casos concretos, un sintonizador TDT de calidad resuelve problemas de recepción en televisores antiguos. Todas las intervenciones se verifican con medidor de campo profesional.",
    },
  ],
  normativa: [
    "El Real Decreto 579/2019 y el marco del segundo dividendo digital regulan el despliegue 5G en la banda de 700 MHz y establecen las obligaciones de los operadores frente a las afectaciones de la TDT.",
    "Los operadores de telecomunicaciones están obligados a garantizar la convivencia del 5G con la televisión terrestre: si su instalación resulta afectada por una nueva estación base, tiene derecho a que se corrija sin coste a través de la entidad gestora (Llega700) en los supuestos previstos.",
    "El Ministerio de Asuntos Económicos y Transformación Digital ha habilitado ayudas que cubren la adaptación de instalaciones afectadas. Le informamos de si su caso cumple los requisitos y qué documentación necesita.", // TODO(verificar): estado actual del programa de ayudas y cuantía vigente
    "En Castilla-La Mancha y la Comunidad de Madrid no se exige licencia para instalar un filtro, pero las actuaciones en cubiertas de edificios protegidos (por ejemplo, el casco histórico de Toledo) pueden requerir autorización municipal. Nos encargamos de indicárselo en el diagnóstico.",
  ],
  precios: [
    { concepto: "Filtro LTE/5G en vivienda individual (instalado)", precio: "desde 80 €" },
    { concepto: "Filtro + ajuste en antena colectiva (comunidad pequeña)", precio: "150 – 250 €" },
    { concepto: "Solución completa en comunidad (filtro + amplificador + verificación por tomas)", precio: "250 – 400 €" },
  ],
  preciosNota:
    "Precios orientativos con IVA; cada instalación se presupuesta de forma personalizada y sin compromiso tras el diagnóstico. En muchos casos la actuación puede quedar cubierta por la ayuda estatal para afectados por el 5G.", // TODO(verificar): rangos de precio reales del negocio
  casos: [
    {
      titulo: "Comunidad de vecinos en Illescas",
      localidadSlug: "illescas",
      localidadNombre: "Illescas",
      problema:
        "Pérdida total de varios canales en las 24 viviendas tras la activación de una antena 5G de un operador a menos de 200 metros del edificio.",
      solucion:
        "Medición de espectro en cabecera, instalación de filtro 5G y sustitución del amplificador por un modelo con rechazo LTE.",
      resultado: "Recuperación de todos los múltiplex con calidad de señal óptima en todas las tomas, en una sola mañana de trabajo.",
    },
    {
      titulo: "Urbanización en Arroyomolinos",
      localidadSlug: "arroyomolinos",
      localidadNombre: "Arroyomolinos",
      problema: "Pixelado intermitente en los canales HD de varios chalets, más intenso por las tardes.",
      solucion: "Filtros LTE individuales en cada vivienda afectada y reorientación de dos antenas que apuntaban hacia la estación base.",
      resultado: "Imagen estable en todos los canales; el problema no ha vuelto a reproducirse.",
    },
    {
      titulo: "Edificio en Getafe",
      localidadSlug: "getafe",
      localidadNombre: "Getafe",
      problema: "Canales desaparecidos en un bloque de pisos de los años 80 con antena colectiva obsoleta.",
      solucion: "Renovación de la cabecera con amplificador monocanal filtrado y comprobación toma a toma.",
      resultado: "Señal correcta en las 40 viviendas y garantía por escrito para la comunidad.",
    },
  ],
  faqs: [
    {
      question: "¿Por qué el 5G interfiere con mi televisión?",
      answer:
        "El 5G utiliza la banda de 700 MHz, que hasta el segundo dividendo digital ocupaba la televisión terrestre. Las frecuencias de telefonía quedan pegadas a las de la TDT, y si una estación base emite cerca de su antena, el amplificador de la instalación se satura y degrada los canales. Por eso el problema aparece de repente cuando un operador activa una antena nueva en la zona.",
    },
    {
      question: "¿Tengo derecho a que me solucionen la interferencia gratis?",
      answer:
        "En los supuestos previstos por la normativa del despliegue 5G, los afectados por las emisiones en la banda de 700 MHz tienen derecho a la adaptación sin coste a través de la entidad gestora del proceso. En el diagnóstico le confirmamos si su caso está dentro de esos supuestos y cómo tramitarlo; si no lo está, le damos presupuesto cerrado de la solución.",
    },
    {
      question: "¿Qué es un filtro LTE y es necesario en mi caso?",
      answer:
        "Es un componente que se instala en la antena, el mástil o la toma y que bloquea las frecuencias de telefonía móvil dejando pasar la señal de televisión. Es necesario cuando la medición confirma que la interferencia entra por radiofrecuencia. No siempre basta: si el amplificador ya está saturado, hay que filtrarlo antes de la amplificación o sustituirlo.",
    },
    {
      question: "¿La interferencia 5G afecta también a internet por fibra?",
      answer:
        "No. La fibra óptica transmite por luz en un cable cerrado y es inmune a las interferencias de radiofrecuencia. El 5G solo afecta a lo que se recibe por antena: la TDT y, en algunos casos, la radio FM/DAB. Su router y su WiFi no tienen relación con este problema.",
    },
    {
      question: "¿Cuánto cuesta solucionar una interferencia 5G?",
      answer:
        "Depende del punto de entrada de la interferencia. Un filtro en una vivienda individual parte de unos 80 € instalado; una solución completa en una comunidad (filtro, amplificador y verificación de tomas) suele moverse entre 250 y 400 €. Siempre damos presupuesto cerrado tras la medición, y le informamos si puede acogerse a la ayuda estatal.",
    },
    {
      question: "¿Puedo solicitar la subvención del Ministerio?",
      answer:
        "Si su instalación resultó afectada por el encendido de emisores 5G en la banda de 700 MHz, es probable que sí. Los requisitos y cuantías dependen del programa vigente en cada momento; nosotros comprobamos su caso durante el diagnóstico y le indicamos la documentación necesaria para tramitarla.",
    },
    {
      question: "¿El filtro reduce la calidad de otros canales?",
      answer:
        "No, si está bien elegido e instalado. Un filtro de calidad atenúa únicamente las frecuencias de telefonía y tiene una pérdida de inserción mínima en la banda de TDT. Tras instalarlo medimos todos los múltiplex para confirmar que ningún canal pierde calidad.",
    },
    {
      question: "¿Qué marcas de filtros instaláis?",
      answer:
        "Trabajamos principalmente con Televes e Ikusi, fabricantes españoles de referencia en cabeceras y filtrado, y con Emme Esse para configuraciones concretas. Todos los componentes son homologados y con garantía de fabricante.",
    },
    {
      question: "¿Cuánto tiempo tarda la instalación?",
      answer:
        "Un filtro individual se instala en menos de una hora. Una actuación completa en la antena colectiva de una comunidad (filtro, amplificador y verificación por plantas) suele resolverse en una mañana de trabajo.",
    },
    {
      question: "¿Ofrecéis garantía en la solución?",
      answer:
        "Sí. Todas nuestras intervenciones incluyen garantía por escrito, tanto de la mano de obra como de los materiales instalados. Si la interferencia reapareciera por la misma causa, volvemos sin coste a revisarla.",
    },
  ],
  datosClave: [
    {
      titulo: "Frecuencias afectadas localmente",
      detalle: "Los canales de TDT afectados varían según la estación base 5G más cercana a su zona; lo determinamos con la medición de espectro, no con suposiciones.",
    },
    {
      titulo: "Operadores 5G desplegados",
      detalle: "Movistar, Vodafone, Orange y Digi emiten 5G en la zona, cada uno en frecuencias distintas. Identificar el emisor concreto permite elegir el filtro exacto.",
    },
    {
      titulo: "Ayudas para afectados",
      detalle: "Existen ayudas estatales que cubren la adaptación de instalaciones afectadas por el 5G. Le confirmamos si su caso aplica durante el diagnóstico.",
    },
    {
      titulo: "Método de diagnóstico",
      detalle: "Espectrómetro de RF en vivo sobre la propia instalación: vemos la interferencia en pantalla antes de proponer ninguna solución.",
    },
  ],
}
