// data/servicios-hub/camaras-seguridad.ts
// Contenido del Hub de Servicio según Estructura P1 §2.3
import type { ServicioHub } from "@/types/servicio-hub"

export const camarasHub: ServicioHub = {
  slug: "camaras-seguridad",
  titulo: "Cámaras de seguridad",
  tituloCorto: "Cámaras",
  metaTitle: "Instalación Cámaras Seguridad Toledo | Antenas Toledo",
  metaDescription:
    "Instalamos cámaras de seguridad CCTV y videovigilancia en viviendas, comunidades y negocios en Toledo y zona. Vea las cámaras desde el móvil. Presupuesto gratuito.",
  h1: "Instalación de Cámaras de Seguridad y Videovigilancia en Toledo",
  image: "/images/telecom/camaras-seguridad.jpg",
  iconName: "Camera",
  descripcionCard:
    "Videovigilancia CCTV para viviendas, comunidades y negocios: cámaras IP con visión nocturna, grabador y acceso desde el móvil, cumpliendo la normativa de protección de datos.",
  intro: [
    "El servicio de cámaras de seguridad abarca desde la instalación de una sola cámara en la puerta de un chalet hasta sistemas completos de videovigilancia para comunidades de propietarios, comercios y naves industriales. Diseñamos cada sistema a medida: número y tipo de cámaras, grabador con la capacidad adecuada, cableado estructurado y configuración del acceso remoto para que pueda ver sus cámaras desde el móvil en cualquier momento.",
    "Además de la parte técnica, le asesoramos sobre la normativa de videovigilancia (protección de datos, cartelería obligatoria y límites de grabación de la vía pública), un aspecto que muchas instalaciones improvisadas incumplen. Todos nuestros sistemas quedan entregados funcionando, con la aplicación configurada en sus dispositivos y con formación para que sepa manejar la grabación y las alertas.",
  ],
  problemas: [
    {
      titulo: "Robos en viviendas",
      descripcion:
        "Las cámaras visibles son el disuasorio más eficaz contra los robos en chalets y adosados, y las grabaciones resultan decisivas para la denuncia si llega a producirse un intento.",
    },
    {
      titulo: "Vandalismo en comunidades",
      descripcion:
        "Garajes, trasteros y portales concentran los daños y hurtos en comunidades. Un sistema comunitario bien diseñado protege las zonas comunes y reduce la siniestralidad.",
    },
    {
      titulo: "Acceso no autorizado a garajes",
      descripcion:
        "Los «inquilinos» de garaje no autorizados y los robos en vehículos se cortan con cámaras en accesos y plazas, con grabación continua o por detección de movimiento.",
    },
    {
      titulo: "Vigilar una segunda residencia",
      descripcion:
        "Vea su casa del pueblo o su vivienda vacía desde el móvil, con alertas de movimiento y visión nocturna. Hay soluciones incluso para zonas sin internet fijo, con cámaras 4G.",
    },
    {
      titulo: "Control en comercios y naves",
      descripcion:
        "Videovigilancia de caja, almacén y perímetro para negocios, integrable con el control de accesos y adaptada a la normativa laboral y de protección de datos.",
    },
  ],
  proceso: [
    {
      titulo: "Estudio de seguridad in situ",
      descripcion:
        "Visitamos la vivienda o el negocio y analizamos accesos, puntos ciegos y necesidades reales antes de proponer nada.",
    },
    {
      titulo: "Diseño del sistema",
      descripcion:
        "Definimos número y tipo de cámaras, ubicación exacta, grabador (NVR/DVR) y capacidad de disco según los días de grabación que necesite.",
    },
    {
      titulo: "Presupuesto cerrado",
      descripcion: "Presupuesto por escrito con equipos, instalación y garantía. Sin sorpresas ni ampliaciones improvisadas.",
    },
    {
      titulo: "Cableado e instalación",
      descripcion:
        "Cableado estructurado (Cat6/coaxial) con canalización discreta, montaje de cámaras y grabador, y protección de la alimentación.",
    },
    {
      titulo: "Configuración y acceso remoto",
      descripcion:
        "Configuramos grabación, detección de movimiento y la aplicación móvil en sus dispositivos, con usuarios y contraseñas seguros.",
    },
    {
      titulo: "Formación y entrega",
      descripcion:
        "Le enseñamos a revisar grabaciones, exportar vídeos y gestionar alertas. Entregamos el sistema funcionando y con garantía por escrito.",
    },
  ],
  equiposIntro:
    "Trabajamos con fabricantes líderes en CCTV, eligiendo la gama según el uso (doméstico, comunitario o profesional) y la conectividad disponible en la zona:",
  equipos: [
    {
      categoria: "Cámaras IP (Dahua, Hikvision, Ezviz)",
      detalle:
        "Resolución de 4 a 8 MP, visión nocturna infrarroja o a color, y análisis inteligente de movimiento que distingue personas y vehículos para evitar falsas alertas.",
    },
    {
      categoria: "Cámaras bullet y domo",
      detalle:
        "Bullet para perímetros y largas distancias; domos antivandálicos para portales, garajes e interiores. Domos motorizados (PTZ) para cubrir grandes superficies.",
    },
    {
      categoria: "Grabadores NVR/DVR de 4 a 16 canales",
      detalle:
        "Con discos duros específicos de videovigilancia (WD Purple / Seagate SkyHawk) dimensionados para los días de retención que necesite.",
    },
    {
      categoria: "Cableado y conectividad",
      detalle:
        "Cable Cat6 con alimentación PoE para instalaciones limpias, y cámaras WiFi o 4G con SIM para ubicaciones sin cableado o sin internet fijo.",
    },
  ],
  normativa: [
    "El Reglamento General de Protección de Datos y la LOPDGDD regulan la captación de imágenes: las cámaras privadas no pueden grabar la vía pública más allá de lo imprescindible para proteger el acceso.",
    "La Agencia Española de Protección de Datos (AEPD) exige el cartel informativo de zona videovigilada en un lugar visible, con el responsable del tratamiento identificado. Lo incluimos en todas nuestras instalaciones.",
    "En comunidades de propietarios, la instalación de cámaras en zonas comunes requiere acuerdo de junta con la mayoría prevista en la Ley de Propiedad Horizontal; le facilitamos la documentación técnica para la votación.",
    "Algunos ayuntamientos añaden requisitos propios para cámaras que enfoquen espacios públicos; lo verificamos en cada municipio antes de instalar.",
  ],
  precios: [
    { concepto: "1 cámara instalada y configurada (con acceso móvil)", precio: "150 – 300 €" },
    { concepto: "Pack 4 cámaras + grabador NVR + disco", precio: "600 – 1.200 €" },
    { concepto: "Sistemas para comunidades y naves industriales", precio: "según proyecto" },
  ],
  preciosNota:
    "Precios orientativos con IVA según gama de cámara y dificultad del cableado. Cada sistema se presupuesta de forma personalizada tras el estudio de seguridad, sin compromiso.", // TODO(verificar): rangos de precio reales del negocio
  casos: [
    {
      titulo: "Garaje comunitario en Getafe",
      localidadSlug: "getafe",
      localidadNombre: "Getafe",
      problema: "Vandalismo reiterado y robos en vehículos en el garaje de una comunidad del Sector III.",
      solucion: "4 cámaras IP antivandálicas con visión nocturna + NVR con 30 días de grabación y acceso para el administrador.",
      resultado: "Los incidentes cesaron desde la instalación; las grabaciones sirvieron para resolver el último episodio.",
    },
    {
      titulo: "Chalet en Navalcarnero",
      localidadSlug: "navalcarnero",
      localidadNombre: "Navalcarnero",
      problema: "Vivienda unifamiliar con intentos de intrusión por la parte trasera de la parcela.",
      solucion: "Sistema perimetral de 6 cámaras con analítica de personas y avisos al móvil, integrado con la iluminación exterior.",
      resultado: "Detección temprana en el perímetro y tranquilidad total para la familia, también en vacaciones.",
    },
    {
      titulo: "Local comercial en Illescas",
      localidadSlug: "illescas",
      localidadNombre: "Illescas",
      problema: "Comercio con necesidad de vigilar caja, almacén y acceso, cumpliendo la normativa de protección de datos.",
      solucion: "5 cámaras IP + NVR con retención configurada, cartelería AEPD y registro de tratamiento entregado al titular.",
      resultado: "Sistema profesional y conforme a normativa, con visualización en tiempo real desde el móvil del propietario.",
    },
  ],
  faqs: [
    {
      question: "¿Puedo ver las cámaras desde el móvil?",
      answer:
        "Sí, es el estándar en todas nuestras instalaciones. Configuramos la aplicación oficial del fabricante en sus dispositivos para ver las cámaras en directo, recibir alertas de movimiento y revisar grabaciones desde cualquier lugar, con usuarios y contraseñas seguros.",
    },
    {
      question: "¿Necesito internet para las cámaras?",
      answer:
        "Para verlas desde fuera de casa, sí: basta la fibra o el ADSL que ya tenga. Sin internet, el sistema graba igualmente en local y puede consultarse en un monitor. Para fincas o parcelas sin conexión ofrecemos cámaras 4G con tarjeta SIM que envían las imágenes por la red móvil.",
    },
    {
      question: "¿Cuánto tiempo de grabación almacena el sistema?",
      answer:
        "Depende del disco duro y del número y resolución de las cámaras. Un sistema doméstico típico de 4 cámaras con un disco de 2 TB guarda entre 15 y 30 días de grabación continua, y más si se graba solo por detección de movimiento. Lo dimensionamos según los días de retención que necesite.",
    },
    {
      question: "¿Es legal grabar la calle desde mi cámara?",
      answer:
        "Solo de forma muy limitada. La normativa de protección de datos permite captar la porción mínima de vía pública imprescindible para vigilar el acceso a su propiedad, pero no la calle en general ni las propiedades vecinas. Orientamos y enmascaramos las cámaras para que su instalación sea legal, y colocamos la cartelería obligatoria.",
    },
    {
      question: "¿Qué diferencia hay entre cámaras IP y analógicas?",
      answer:
        "Las IP transmiten vídeo digital por cable de red (o WiFi), ofrecen más resolución y analítica inteligente, y son el estándar actual. Las analógicas HD siguen siendo útiles para aprovechar cableado coaxial existente. En instalaciones nuevas recomendamos IP con alimentación PoE: un solo cable por cámara.",
    },
    {
      question: "¿Puedo instalar cámaras sin cable (WiFi)?",
      answer:
        "Sí, para 1 o 2 cámaras en ubicaciones con buena cobertura WiFi son una solución rápida. Para sistemas de varias cámaras o exteriores amplios recomendamos cableado: es más fiable, no depende de la señal inalámbrica y alimenta la cámara por el mismo cable (PoE).",
    },
    {
      question: "¿Qué ocurre si se va la luz?",
      answer:
        "El sistema se detiene salvo que instalemos un SAI (sistema de alimentación ininterrumpida), que mantiene cámaras y grabador funcionando durante el corte. Es un complemento económico que recomendamos en instalaciones de seguridad serias, y lo incluimos en el presupuesto si lo desea.",
    },
    {
      question: "¿Ofrecéis mantenimiento del sistema?",
      answer:
        "Sí. Ofrecemos revisiones periódicas de cámaras, discos y grabación, limpieza de ópticas y actualización de firmware, además de soporte remoto para incidencias de la aplicación. Puede contratarse por visita o como mantenimiento anual para comunidades y negocios.",
    },
    {
      question: "¿Se pueden añadir cámaras después?",
      answer:
        "Sí, siempre dimensionamos el grabador con canales libres para futuras ampliaciones. Añadir una cámara a un sistema existente es una intervención sencilla si el cableado se planificó bien desde el principio, que es exactamente lo que hacemos.",
    },
    {
      question: "¿Cuánto cuesta un sistema de 4 cámaras?",
      answer:
        "Un pack de 4 cámaras IP con grabador y disco duro, instalado y configurado con acceso móvil, se mueve entre 600 y 1.200 € según la gama de las cámaras y la dificultad del cableado. Tras el estudio de seguridad le damos presupuesto cerrado sin compromiso.",
    },
  ],
  datosClave: [
    {
      titulo: "Conectividad por zona",
      detalle: "Con fibra, instalamos sistemas IP con acceso remoto pleno; en zonas solo con cobertura móvil, cámaras 4G con SIM.",
    },
    {
      titulo: "Tipo de vivienda y necesidades",
      detalle: "Piso: 1-2 cámaras en acceso. Chalet: 4-8 cámaras perimetrales con analítica. Comunidad: portal, garaje y trasteros.",
    },
    {
      titulo: "Normativa municipal",
      detalle: "Los requisitos para cámaras que enfocan espacios públicos varían entre ayuntamientos; los verificamos en cada municipio.",
    },
    {
      titulo: "Cumplimiento AEPD",
      detalle: "Cartel de zona videovigilada, enmascaramiento de vía pública y configuración conforme a protección de datos en todas las instalaciones.",
    },
  ],
}
