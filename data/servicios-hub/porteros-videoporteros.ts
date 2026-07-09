// data/servicios-hub/porteros-videoporteros.ts
// Contenido del Hub de Servicio según Estructura P1 §2.5 (antes /servicios/porteros-automaticos/)
import type { ServicioHub } from "@/types/servicio-hub"

export const porterosHub: ServicioHub = {
  slug: "porteros-videoporteros",
  titulo: "Porteros y videoporteros",
  tituloCorto: "Videoporteros",
  metaTitle: "Porteros y Videoporteros Toledo | Antenas Toledo",
  metaDescription:
    "Instalamos y reparamos porteros automáticos y videoporteros en comunidades y chalets en Toledo y zona. Porteros IP, analógicos y GSM. Presupuesto gratuito.",
  h1: "Instalación de Porteros Automáticos y Videoporteros en Toledo",
  image: "/images/telecom/portero-automatico-instalacion-01.jpg",
  iconName: "Phone",
  descripcionCard:
    "Instalación y sustitución de porteros automáticos y videoporteros en comunidades y chalets: sistemas analógicos, digitales, IP y GSM con apertura desde el móvil.",
  intro: [
    "El servicio de porteros y videoporteros abarca tanto la instalación en obra nueva como —el caso más frecuente— la sustitución de porteros antiguos en comunidades existentes: placas de calle deterioradas, telefonillos que no se oyen y sistemas de los años 80 y 90 sin repuestos disponibles. Trabajamos con porteros analógicos, digitales, IP y GSM, esta última una solución excelente para chalets y fincas sin cableado, porque la llamada de la puerta llega directamente a su teléfono móvil.",
    "En comunidades, una de nuestras especialidades es la sustitución sin obra: los sistemas de dos hilos actuales (como Fermax Duox) reutilizan el cableado existente del portero antiguo, lo que permite renovar placa y telefonillos de todo el edificio sin rozas ni molestias para los vecinos. Asesoramos a la comunidad en el proceso completo, desde el presupuesto para la junta hasta la entrega vivienda por vivienda.",
  ],
  problemas: [
    {
      titulo: "El portero no se oye o se corta",
      descripcion:
        "Telefonillos envejecidos, cableado degradado o placa de calle deteriorada por el sol y la lluvia. Diagnosticamos si conviene reparar o renovar el sistema.",
    },
    {
      titulo: "Imagen pixelada o sin imagen en el videoportero",
      descripcion:
        "Cámaras antiguas en blanco y negro o monitores averiados. Los sistemas actuales dan imagen a color de alta calidad incluso reutilizando el cableado antiguo.",
    },
    {
      titulo: "Placa de calle vandalizada o sin pulsadores",
      descripcion:
        "Sustituimos placas completas con pulsadores mecánicos o módulos digitales antivandálicos, con directorio electrónico en comunidades grandes.",
    },
    {
      titulo: "Portero antiguo sin repuestos",
      descripcion:
        "Cuando el fabricante ya no da soporte, cada avería es un parche. Renovamos el sistema completo reutilizando el cableado siempre que es posible.",
    },
    {
      titulo: "Abrir la puerta desde el móvil",
      descripcion:
        "Los videoporteros IP y GSM desvían la llamada de la puerta a su teléfono: vea quién llama y abra desde cualquier lugar, ideal para chalets, alquileres y personas con movilidad reducida.",
    },
  ],
  proceso: [
    {
      titulo: "Diagnóstico del sistema actual",
      descripcion:
        "Identificamos el tipo de instalación existente (4+N hilos, digital, bus de dos hilos) y su estado, para saber qué se puede reutilizar.",
    },
    {
      titulo: "Diseño del nuevo sistema",
      descripcion:
        "Proponemos la tecnología adecuada: analógico o Duox en comunidades, IP o GSM en chalets y fincas sin cableado. Con opciones de monitor por vivienda.",
    },
    {
      titulo: "Presupuesto para la comunidad o el particular",
      descripcion:
        "Presupuesto cerrado por escrito, desglosado por vivienda en comunidades para facilitar la aprobación en junta.",
    },
    {
      titulo: "Instalación de placa de calle",
      descripcion:
        "Montamos la nueva placa con los pulsadores o directorio necesarios, abrepuertas y alimentación, cuidando el acabado en fachada.",
    },
    {
      titulo: "Monitores y telefonillos por vivienda",
      descripcion:
        "Sustituimos los terminales de cada vivienda coordinándonos con los vecinos, con visitas ágiles y sin obra en la mayoría de los casos.",
    },
    {
      titulo: "Pruebas y formación",
      descripcion:
        "Probamos llamada, audio, vídeo y apertura desde todas las viviendas, configuramos los desvíos al móvil si los hay, y entregamos garantía por escrito.",
    },
  ],
  equiposIntro:
    "Trabajamos con los fabricantes de referencia del sector, eligiendo la gama según el tamaño de la comunidad y las funciones deseadas:",
  equipos: [
    {
      categoria: "Fermax (Duox, Citymax)",
      detalle:
        "El estándar en comunidades españolas. Duox renueva porteros antiguos por sistema digital de dos hilos reutilizando el cableado existente, sin obra.",
    },
    {
      categoria: "Tegui y Golmar",
      detalle:
        "Gamas completas de porteros y videoporteros para comunidades de cualquier tamaño, con placas antivandálicas y monitores de 4,3\" a 7\".",
    },
    {
      categoria: "Porteros IP (2N, DoorBird)",
      detalle:
        "Videoporteros conectados a la red: llamada a la app del móvil, apertura remota, historial de visitas e integración con domótica y control de accesos.",
    },
    {
      categoria: "Porteros GSM (sin cableado)",
      detalle:
        "La placa de calle llama por red móvil directamente a los teléfonos que se configuren. Perfectos para chalets, fincas y parcelas donde cablear es inviable.",
    },
  ],
  normativa: [
    "La Ley de Propiedad Horizontal regula la renovación del portero como elemento común: le preparamos el presupuesto y la documentación técnica para la aprobación en junta.",
    "La normativa ICT exige en edificios nuevos infraestructuras de telecomunicación que incluyen la canalización del portero; en renovaciones aprovechamos la canalización existente siempre que es posible.",
    "La normativa de accesibilidad exige en determinados casos que la placa y los terminales sean utilizables por personas con discapacidad (altura de placa, bucle magnético, señalización visual de apertura); lo contemplamos en el diseño.",
  ],
  precios: [
    { concepto: "Portero automático analógico (por vivienda)", precio: "150 – 300 €" },
    { concepto: "Videoportero IP (por vivienda)", precio: "250 – 500 €" },
    { concepto: "Portero GSM para chalet (instalado)", precio: "200 – 400 €" },
    { concepto: "Sustitución completa en comunidad", precio: "según nº de viviendas" },
  ],
  preciosNota:
    "Precios orientativos con IVA. En comunidades, el precio por vivienda baja significativamente con el número de viviendas; entregamos presupuesto desglosado para la junta.", // TODO(verificar): rangos de precio reales del negocio
  casos: [
    {
      titulo: "Comunidad en Toledo",
      localidadSlug: "toledo",
      localidadNombre: "Toledo",
      problema: "Portero de los años 80 sin repuestos, con la mitad de los telefonillos mudos y placa de calle deteriorada.",
      solucion: "Sustitución completa por sistema Fermax Duox reutilizando el cableado existente: placa nueva y telefonillo en cada vivienda, sin obra.",
      resultado: "Sistema renovado en todo el edificio en dos jornadas, con audio perfecto y garantía para la comunidad.",
    },
    {
      titulo: "Chalet en Fuensalida",
      localidadSlug: "fuensalida",
      localidadNombre: "Fuensalida",
      problema: "Vivienda unifamiliar con parcela: la llamada del portero no se oía desde el jardín ni fuera de casa.",
      solucion: "Videoportero IP con desvío a los móviles de la familia y apertura remota de peatonal y garaje.",
      resultado: "Atienden la puerta desde cualquier lugar, con imagen del visitante e historial de llamadas.",
    },
    {
      titulo: "Urbanización en Illescas",
      localidadSlug: "illescas",
      localidadNombre: "Illescas",
      problema: "Acceso común de una urbanización sin cableado hasta las viviendas, con interfono averiado desde hacía años.",
      solucion: "Portero GSM en el acceso: la llamada llega al móvil de cada vecino, con códigos de apertura individualizados.",
      resultado: "Acceso controlado sin necesidad de obra ni cableado nuevo, con gestión sencilla de altas y bajas de vecinos.",
    },
  ],
  faqs: [
    {
      question: "¿Qué diferencia hay entre portero y videoportero?",
      answer:
        "El portero automático es solo audio: hablar con el visitante y abrir. El videoportero añade cámara en la placa de calle y monitor en la vivienda, para ver quién llama antes de abrir. En renovaciones de comunidades, pasar de portero a videoportero es habitual y muchas veces posible sin cambiar el cableado.",
    },
    {
      question: "¿Se puede abrir la puerta desde el móvil?",
      answer:
        "Sí, con dos tecnologías: los videoporteros IP envían la llamada a una aplicación en su móvil con vídeo en directo; los porteros GSM llaman por red móvil a los teléfonos configurados. En ambos casos puede hablar con el visitante y abrir desde cualquier lugar.",
    },
    {
      question: "¿Es posible sustituir un portero antiguo sin obra?",
      answer:
        "En la gran mayoría de los casos, sí. Los sistemas de dos hilos actuales (como Fermax Duox) reutilizan el cableado del portero antiguo, de modo que solo se cambian la placa de calle y los terminales de cada vivienda. Es la forma más económica y rápida de renovar el portero de una comunidad.",
    },
    {
      question: "¿Qué es un portero GSM?",
      answer:
        "Una placa de calle con tarjeta SIM que, al pulsar el timbre, llama por red móvil directamente a los teléfonos que se hayan configurado. No necesita cableado entre la puerta y la vivienda ni conexión a internet, por lo que es ideal para chalets, parcelas y accesos comunes de urbanizaciones.",
    },
    {
      question: "¿Cuánto cuesta instalar un videoportero?",
      answer:
        "En un chalet, un videoportero de calidad instalado se mueve entre 250 y 500 € según el sistema (convencional o IP con app). En comunidades, el coste se calcula por vivienda y baja con el tamaño del edificio; entregamos presupuesto desglosado para la junta sin compromiso.",
    },
    {
      question: "¿Se puede añadir cámara al portero existente?",
      answer:
        "Depende del sistema. En porteros de dos hilos modernos, sí: se sustituye la placa por una con cámara y los telefonillos por monitores compatibles. En sistemas analógicos antiguos suele ser más razonable renovar el conjunto, porque el cableado se reutiliza y el resultado es muy superior.",
    },
    {
      question: "¿Qué marcas recomendáis?",
      answer:
        "Fermax es nuestra referencia en comunidades por fiabilidad y disponibilidad de repuestos, junto a Tegui y Golmar. Para funciones avanzadas (app móvil, integración con domótica) trabajamos con porteros IP de 2N y DoorBird. Elegimos la marca según el edificio, no al revés.",
    },
    {
      question: "¿Ofrecéis servicio de urgencia para porteros?",
      answer:
        "Sí. Un portero averiado es un problema de seguridad y accesibilidad, especialmente para personas mayores. Atendemos averías de placa, abrepuertas y telefonillos con prioridad, normalmente en 24-48 horas según la zona.",
    },
    {
      question: "¿El portero IP necesita WiFi?",
      answer:
        "Necesita conexión a internet, preferiblemente por cable de red hasta la placa; el WiFi es una alternativa cuando cablear no es viable y hay buena cobertura. La app del móvil funciona después desde cualquier lugar, con la conexión de datos de su teléfono.",
    },
    {
      question: "¿Se puede integrar con el control de acceso del garaje?",
      answer:
        "Sí. Los sistemas actuales permiten abrir peatonal y puerta de garaje desde el mismo monitor o app, añadir teclados de código, lectores de proximidad y control de accesos para comunidades. Lo diseñamos como un sistema único para todo el edificio.",
    },
  ],
  datosClave: [
    {
      titulo: "Tipo de cableado existente",
      detalle: "4+N hilos (analógico), bus digital o sin cableado: el diagnóstico determina si se reutiliza la instalación o conviene GSM/IP.",
    },
    {
      titulo: "Edad del edificio",
      detalle: "Determina si la actuación es sustitución sin obra (lo habitual) o instalación nueva con canalización ICT.",
    },
    {
      titulo: "Número de viviendas",
      detalle: "Comunidades grandes: sistemas digitales con directorio. Chalets: videoportero IP o GSM con apertura desde el móvil.",
    },
    {
      titulo: "Accesibilidad",
      detalle: "Contemplamos los requisitos de accesibilidad (altura de placa, señalización, bucle) cuando la normativa lo exige.",
    },
  ],
}
