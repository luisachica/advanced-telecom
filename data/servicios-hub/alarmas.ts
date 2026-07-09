// data/servicios-hub/alarmas.ts
// Contenido del Hub de Servicio según Estructura P1 §2.4 (hub nuevo en la arquitectura)
import type { ServicioHub } from "@/types/servicio-hub"

export const alarmasHub: ServicioHub = {
  slug: "alarmas",
  titulo: "Instalación de alarmas",
  tituloCorto: "Alarmas",
  metaTitle: "Instalación Alarmas Toledo | Antenas Toledo",
  metaDescription:
    "Instalamos alarmas antirrobo en viviendas, locales y comunidades en Toledo y zona. Alarmas con conexión a CRA, sin cuotas o con monitorización. Presupuesto gratuito.",
  h1: "Instalación de Alarmas Antirrobo en Toledo y Alrededores",
  // TODO(verificar): sustituir por una foto real de instalación de alarma
  image: "/images/telecom/trabajo-instalacion-2024-04-19.jpg",
  iconName: "Shield",
  descripcionCard:
    "Sistemas de alarma para viviendas, locales y comunidades: sin cuotas o con conexión a Central Receptora (CRA), sensores pet-friendly y control total desde el móvil.",
  intro: [
    "El servicio de alarmas cubre desde sistemas básicos sin cuotas mensuales hasta sistemas completos con conexión a Central Receptora de Alarmas (CRA) y aviso a los cuerpos de seguridad. Cada instalación incluye el diseño de zonas de la vivienda o local, sensores de movimiento (también aptos para hogares con mascotas), contactos magnéticos en puertas y ventanas, sirenas disuasorias y, si lo desea, detectores de humo e inundación integrados en el mismo sistema.",
    "Somos instaladores independientes: no le atamos a permanencias innecesarias ni a un único fabricante. Le explicamos con claridad las dos vías —alarma en propiedad sin cuotas, controlada desde su móvil, o alarma conectada a CRA con monitorización profesional— y le recomendamos la que de verdad encaja con su vivienda, su zona y su presupuesto. Damos servicio en Toledo, La Sagra y el sur de la Comunidad de Madrid.",
  ],
  problemas: [
    {
      titulo: "Robos con fuerza en viviendas",
      descripcion:
        "Los robos en chalets y adosados se concentran en accesos traseros y horas de ausencia. Una alarma con sirena exterior y aviso inmediato al móvil corta el intento en segundos.",
    },
    {
      titulo: "Segundas residencias sin vigilancia",
      descripcion:
        "Las viviendas vacías durante semanas son objetivo prioritario. Los sistemas con comunicación GSM avisan aunque corten la luz o no haya internet en la vivienda.",
    },
    {
      titulo: "Falsas alarmas de sistemas antiguos",
      descripcion:
        "Los equipos obsoletos saltan sin motivo y acaban desconectados. Los sustituimos por centrales modernas con sensores inteligentes que distinguen mascotas y corrientes de aire.",
    },
    {
      titulo: "Necesidad de disuasión visible",
      descripcion:
        "La sirena exterior con señalización luminosa es un disuasorio probado: la mayoría de intrusos descarta una vivienda visiblemente protegida antes de intentarlo.",
    },
    {
      titulo: "Locales y comunidades sin protección",
      descripcion:
        "Comercios, trasteros y garajes comunitarios sufren robos recurrentes. Diseñamos sistemas por zonas con usuarios independientes para cada vecino o empleado.",
    },
  ],
  proceso: [
    {
      titulo: "Estudio de seguridad",
      descripcion:
        "Analizamos los accesos, los puntos vulnerables y sus hábitos de uso de la vivienda o local para dimensionar el sistema correcto, sin sobrevender equipos.",
    },
    {
      titulo: "Diseño del sistema por zonas",
      descripcion:
        "Definimos zonas (perímetro, interior, garaje), sensores necesarios y modo de armado parcial para que la alarma sea cómoda de usar en el día a día.",
    },
    {
      titulo: "Presupuesto cerrado",
      descripcion:
        "Presupuesto por escrito, con la opción sin cuotas y la opción con CRA claramente separadas para que compare sin letra pequeña.",
    },
    {
      titulo: "Instalación de central y sensores",
      descripcion:
        "Montamos central, teclado, sensores y sirenas con instalación limpia, y configuramos la comunicación (IP, GSM o doble vía).",
    },
    {
      titulo: "Programación y pruebas",
      descripcion:
        "Programamos usuarios, horarios y avisos, y probamos cada sensor y cada vía de comunicación simulando saltos reales de alarma.",
    },
    {
      titulo: "Alta en CRA y formación",
      descripcion:
        "Si elige monitorización, tramitamos el alta en la Central Receptora. Le enseñamos a manejar el sistema y la aplicación móvil, y entregamos garantía por escrito.",
    },
  ],
  equiposIntro:
    "Instalamos sistemas de fabricantes de referencia en seguridad profesional, eligiendo la plataforma según el tipo de inmueble y la conectividad de la zona:",
  equipos: [
    {
      categoria: "Centrales de alarma (Ajax, DSC, Risco)",
      detalle:
        "Plataformas fiables y ampliables: Ajax destaca en sistemas vía radio sin cuotas con una app excelente; DSC y Risco son estándar en instalaciones conectadas a CRA.",
    },
    {
      categoria: "Sensores de movimiento pet-friendly",
      detalle:
        "Detectores volumétricos que ignoran mascotas de hasta 20 kg, evitando las falsas alarmas típicas de los sistemas antiguos.",
    },
    {
      categoria: "Contactos magnéticos y detectores técnicos",
      detalle:
        "Apertura de puertas y ventanas, rotura de cristal, humo, monóxido e inundación: todo integrado en la misma central y con aviso al móvil.",
    },
    {
      categoria: "Sirenas y comunicación GSM/IP",
      detalle:
        "Sirenas interiores y exteriores con flash, y módulos de doble vía (internet + SIM) para que la alarma comunique aunque corten la luz o la línea.",
    },
  ],
  normativa: [
    "La Ley 5/2014 de Seguridad Privada y su reglamento regulan los sistemas de alarma: solo las alarmas conectadas a una Central Receptora autorizada pueden dar aviso directo a la policía.",
    "Las alarmas con CRA requieren contrato con una central homologada por el Ministerio del Interior y verificación de los saltos antes del aviso a los cuerpos de seguridad; le tramitamos el alta con centrales autorizadas.",
    "Los sistemas sin cuotas en propiedad son perfectamente legales: le avisan a usted (y a quien designe) por la aplicación y por llamada, pero el aviso a la policía debe hacerlo el usuario.",
    "En comunidades de propietarios, la instalación de alarmas en zonas comunes requiere acuerdo de junta; preparamos la documentación técnica para facilitarlo.",
  ],
  precios: [
    { concepto: "Sistema básico sin cuotas (central, 2-3 sensores, sirena, app)", precio: "300 – 600 €" },
    { concepto: "Sistema conectado a CRA (instalación)", precio: "0 – 300 €" },
    { concepto: "Cuota mensual de monitorización CRA", precio: "25 – 45 €/mes" },
    { concepto: "Sistemas premium y por zonas (chalets grandes, locales)", precio: "según proyecto" },
  ],
  preciosNota:
    "Precios orientativos con IVA. Le presentamos siempre las dos opciones (propiedad sin cuotas vs. CRA con cuota) con números cerrados para que compare el coste real a 3-5 años.", // TODO(verificar): rangos de precio y condiciones CRA reales del negocio
  casos: [
    {
      titulo: "Chalet en Arroyomolinos",
      localidadSlug: "arroyomolinos",
      localidadNombre: "Arroyomolinos",
      problema: "Vivienda unifamiliar en urbanización, con intentos de robo en la zona y sin querer pagar cuotas mensuales.",
      solucion: "Sistema Ajax sin cuotas: central con doble vía, 6 sensores entre perímetro e interior, sirena exterior y app para toda la familia.",
      resultado: "Protección completa en propiedad, con avisos instantáneos al móvil y cero cuotas mensuales.",
    },
    {
      titulo: "Piso en Getafe",
      localidadSlug: "getafe",
      localidadNombre: "Getafe",
      problema: "Vivienda habitual en bloque de pisos cuyo propietario quería monitorización profesional 24 horas.",
      solucion: "Central DSC conectada a CRA homologada, contactos en puerta y ventanas accesibles y detector interior pet-friendly.",
      resultado: "Saltos verificados por la central receptora y aviso a policía cuando procede, con cuota mensual ajustada.",
    },
    {
      titulo: "Comunidad en Valdemoro",
      localidadSlug: "valdemoro",
      localidadNombre: "Valdemoro",
      problema: "Garaje y trasteros comunitarios con robos reiterados y vecinos alarmados.",
      solucion: "Sistema por zonas con detectores en accesos y trasteros, sirena en garaje y usuarios independientes por vivienda.",
      resultado: "Fin de los robos y control de accesos claro para la comunidad, integrado con la videovigilancia existente.",
    },
  ],
  faqs: [
    {
      question: "¿Es mejor una alarma con o sin cuotas?",
      answer:
        "Depende de lo que busque. La alarma sin cuotas es suya en propiedad, le avisa al móvil y no tiene gasto mensual: ideal si usted puede reaccionar al aviso. La alarma con CRA añade monitorización profesional 24 h y aviso a la policía con verificación, a cambio de una cuota. Le damos ambos presupuestos con el coste real a varios años para que decida con datos.",
    },
    {
      question: "¿Qué es una CRA y es obligatoria?",
      answer:
        "La Central Receptora de Alarmas es una central autorizada que recibe los saltos de su alarma 24 horas, los verifica y avisa a la policía cuando procede. No es obligatoria: puede tener una alarma en propiedad que le avise solo a usted. Lo que sí exige la ley es que, si quiere aviso directo a la policía, sea a través de una CRA homologada.",
    },
    {
      question: "¿Las alarmas modernas funcionan si cortan la luz?",
      answer:
        "Sí. Las centrales llevan batería de respaldo que las mantiene operativas durante horas, y los sistemas con módulo GSM siguen comunicando por la red móvil aunque corten también internet. El corte de suministro genera además su propio aviso, para que sepa al momento que algo ocurre.",
    },
    {
      question: "¿Puedo instalar una alarma yo mismo?",
      answer:
        "Los kits de autoinstalación existen, pero suelen fallar en lo importante: ubicación de sensores, cobertura radio, configuración de comunicaciones y zonas mal diseñadas que generan falsas alarmas. Además, una alarma conectada a CRA debe instalarla una empresa habilitada. Nuestra instalación incluye diseño, pruebas reales y garantía.",
    },
    {
      question: "¿Qué mantenimiento necesita una alarma?",
      answer:
        "Poco, pero constante: revisión de baterías de sensores y central, prueba de comunicaciones y actualización de firmware. Recomendamos una revisión anual; en sistemas conectados a CRA suele estar incluida en la cuota. También atendemos averías puntuales de sistemas que no hayamos instalado nosotros.",
    },
    {
      question: "¿Las mascotas activan la alarma?",
      answer:
        "Con los sensores adecuados, no. Instalamos detectores pet-friendly que ignoran animales de hasta 20 kg aproximadamente, y ajustamos su altura y orientación en la instalación. Para mascotas grandes hay alternativas: proteger solo perímetro (puertas y ventanas) y dejar el interior sin volumétricos.",
    },
    {
      question: "¿Puedo controlar la alarma desde el móvil?",
      answer:
        "Sí, todos los sistemas que instalamos incluyen aplicación móvil: armar y desarmar, ver el estado de cada sensor, recibir avisos instantáneos y consultar el historial. En sistemas con cámaras integradas, también verificación visual del salto de alarma desde la propia app.",
    },
    {
      question: "¿Cuánto cuesta instalar una alarma?",
      answer:
        "Un sistema básico sin cuotas para una vivienda (central, dos o tres sensores, sirena y app) se mueve entre 300 y 600 € instalado. Los sistemas con CRA suelen tener instalación reducida (0-300 €) más una cuota mensual de 25-45 €. El estudio de seguridad y el presupuesto son gratuitos.",
    },
    {
      question: "¿Qué marcas instaláis?",
      answer:
        "Principalmente Ajax para sistemas vía radio sin cuotas —por fiabilidad y calidad de su aplicación— y DSC y Risco para instalaciones conectadas a CRA. Todas son marcas de grado profesional, con repuestos y soporte garantizados a largo plazo.",
    },
    {
      question: "¿Ofrecéis servicio de respuesta ante saltos de alarma?",
      answer:
        "El servicio de acuda o custodia de llaves lo prestan las centrales receptoras y empresas de seguridad con las que trabajamos: si contrata monitorización CRA, puede añadirlo a su plan. En sistemas sin cuotas, el aviso le llega a usted y a los contactos que designe para que decidan la respuesta.",
    },
  ],
  datosClave: [
    {
      titulo: "Riesgo por zona",
      detalle: "En zonas con más incidencia de robos reforzamos perímetro y disuasión visible; el estudio de seguridad se adapta a la realidad de cada localidad.",
    },
    {
      titulo: "Conectividad disponible",
      detalle: "Con fibra, comunicación IP con respaldo GSM; en zonas sin internet fijo, módulo SIM como vía principal.",
    },
    {
      titulo: "Tipo de vivienda",
      detalle: "Piso: contactos en puerta y ventanas accesibles. Chalet: protección perimetral + interior por zonas.",
    },
    {
      titulo: "Cuotas vs. propiedad",
      detalle: "Le presentamos siempre ambas opciones con el coste real a 3-5 años, sin permanencias encubiertas.",
    },
  ],
}
