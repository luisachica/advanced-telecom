// data/combos.ts
// Páginas Servicio+Localidad (Estructura P2 §5). Solo se generan las combinaciones con
// activa=true (Prioridad 1 y 2). Las de Prioridad 3 quedan definidas pero desactivadas
// hasta verificar volumen de búsqueda con Keyword Planner/Semrush (requisito Estrategia §3.4).
import type { ComboServicioLocalidad } from "@/types/combo"

export const COMBOS: ComboServicioLocalidad[] = [
  {
    slug: "camaras-seguridad-toledo",
    servicioSlug: "camaras-seguridad",
    localidadSlug: "toledo",
    nombre: "Cámaras de Seguridad en Toledo",
    prioridad: 1,
    activa: true,
    metaTitle: "Cámaras de Seguridad en Toledo | Instalador Profesional | Antenas Toledo",
    metaDescription:
      "Instalador profesional de cámaras de seguridad en Toledo. Atención en 24h. Presupuesto sin compromiso. Llame ahora al 668 67 95 00.",
    h1: "Cámaras de Seguridad en Toledo: Instalador Profesional",
    intro: [
      "Instalar cámaras de seguridad en Toledo tiene condicionantes que no existen en otras ciudades: en el casco histórico, la protección patrimonial limita dónde y cómo pueden fijarse cámaras en fachadas, mientras que en los barrios y urbanizaciones la prioridad es cubrir garajes comunitarios, portales y perímetros de parcela. Somos instaladores locales: conocemos ambos escenarios y diseñamos cada sistema para el edificio concreto, no con un kit genérico.",
      "Trabajamos en toda la ciudad —del Casco a Santa María de Benquerencia, de Azucaica a Los Cigarrales— con visita de estudio gratuita, presupuesto cerrado y sistemas que cumplen la normativa de videovigilancia.",
    ],
    porQue: [
      "La tipología de vivienda de Toledo empuja la demanda: las comunidades del Polígono y de los barrios de los 80 buscan videovigilancia para garajes y trasteros, mientras que las urbanizaciones periféricas (Azucaica, Los Cigarrales, Valparaíso) necesitan protección perimetral de parcela. En el casco, comercios y hostelería concentran las instalaciones.",
      "A esto se suma el factor patrimonial: una cámara mal ubicada en un edificio protegido puede obligar a retirar la instalación. Nuestra experiencia en el casco evita ese problema desde el diseño.",
    ],
    tiposPorZona: [
      {
        zona: "Casco Histórico (comercios y edificios protegidos)",
        recomendacion:
          "Cámaras compactas en ubicaciones discretas aprobables por patrimonio, minidomos interiores en comercios y grabación local con acceso remoto.",
      },
      {
        zona: "Santa María de Benquerencia y barrios de pisos",
        recomendacion:
          "Sistemas comunitarios: domos antivandálicos en garaje, portal y trasteros con NVR de 8-16 canales y acceso para el administrador.",
      },
      {
        zona: "Azucaica, Los Cigarrales y urbanizaciones",
        recomendacion:
          "Perimetral de parcela: 4-8 cámaras bullet con analítica de personas, visión nocturna y avisos al móvil, integrable con alarma.",
      },
    ],
    normativa:
      "Además de los criterios generales de la AEPD, en Toledo las instalaciones visibles en edificios del casco histórico están sujetas a la ordenanza de protección del patrimonio: la ubicación de cámaras en fachada puede requerir autorización. Gestionamos el expediente cuando es necesario.", // TODO(verificar): referencia exacta de la ordenanza
    conectividad:
      "Toledo cuenta con fibra de Movistar, Vodafone, Orange y Digi en prácticamente toda la ciudad, lo que permite cámaras IP de alta resolución con visualización remota fluida. En parcelas del entorno rural sin fibra, instalamos cámaras 4G con SIM.",
    proyecto: {
      titulo: "8 cámaras IP en urbanización de Azucaica",
      descripcion:
        "Sistema perimetral con analítica de personas para una urbanización residencial: accesos, viales interiores y zona común, con grabación de 30 días y usuarios diferenciados para la comunidad.",
    },
    faqs: [
      {
        question: "¿Puedo poner cámaras en la fachada de un edificio del casco histórico de Toledo?",
        answer:
          "Depende de la protección del edificio y de la visibilidad del elemento desde la vía pública. En muchos casos es viable con cámaras compactas en ubicaciones discretas y, si procede, autorización municipal. Lo estudiamos en la visita y gestionamos el trámite.",
      },
      {
        question: "¿Qué necesita una comunidad de Toledo para instalar cámaras en el garaje?",
        answer:
          "Un acuerdo de junta con la mayoría prevista en la Ley de Propiedad Horizontal, el cartel de zona videovigilada y una configuración que limite la captación a las zonas comunes. Preparamos la documentación técnica para la votación y entregamos el sistema conforme a la normativa.",
      },
      {
        question: "¿Cuánto tardáis en instalar un sistema de cámaras en Toledo?",
        answer:
          "Al ser nuestra base de operaciones, la visita de estudio suele programarse en 24-48 horas y una instalación doméstica típica (4 cámaras + grabador) se ejecuta en una jornada.",
      },
      {
        question: "¿Las cámaras funcionan bien en parcelas de Los Cigarrales sin fibra?",
        answer:
          "Sí. Donde no llega la fibra instalamos cámaras con conexión 4G mediante tarjeta SIM, con avisos de movimiento y visualización remota. La grabación queda además en local, de modo que no se pierde nada si la cobertura fluctúa.",
      },
      {
        question: "¿Podéis integrar las cámaras con una alarma en Toledo?",
        answer:
          "Sí, es la configuración que más recomendamos en chalets: la alarma detecta y las cámaras permiten verificar visualmente el salto desde el móvil antes de avisar a la policía. Instalamos ambos sistemas coordinados en una sola intervención.",
      },
    ],
  },
  {
    slug: "antenas-toledo",
    servicioSlug: "antenas-parabolicas",
    localidadSlug: "toledo",
    nombre: "Antenas en Toledo",
    prioridad: 1,
    activa: true,
    metaTitle: "Antenas en Toledo | Instalador Profesional | Antenas Toledo",
    metaDescription:
      "Instalador profesional de antenas TDT y parabólicas en Toledo. Atención en 24h. Presupuesto sin compromiso. Llame ahora al 668 67 95 00.",
    h1: "Antenas en Toledo: Instalador Profesional",
    intro: [
      "Instalar o reparar una antena en Toledo no es igual en el casco histórico que en el Polígono. Los muros de piedra del casco debilitan la señal interior y la protección patrimonial condiciona dónde puede ir la antena; en los barrios modernos, el reto son las instalaciones colectivas envejecidas; y en las urbanizaciones, la elección correcta del repetidor. Somos el instalador local de referencia y trabajamos cada zona con su solución específica.",
      "Ofrecemos instalación individual y colectiva, reparaciones con prioridad en el día, renovaciones ICT y parabólicas, siempre con medición de señal profesional y garantía por escrito.",
    ],
    porQue: [
      "Toledo capital recibe señal principalmente del repetidor local, pero varias zonas de la ciudad quedan en sombra por la orografía del Tajo y la altura de los edificios, y captan mejor otros reemisores. Elegir el repetidor y la ganancia adecuados es lo que diferencia una instalación estable de una con problemas crónicos, y solo se acierta midiendo in situ.",
      "En el casco histórico, además, las cubiertas protegidas obligan a ubicar antenas en puntos no visibles desde la vía pública, algo que hemos resuelto en decenas de comunidades.",
    ],
    tiposPorZona: [
      {
        zona: "Casco Histórico",
        recomendacion:
          "Antenas colectivas en ubicaciones discretas de cubierta, con amplificación dimensionada para compensar las distribuciones antiguas y los muros gruesos.",
      },
      {
        zona: "Santa María de Benquerencia y barrios de los 80-2000",
        recomendacion:
          "Renovación de cabeceras colectivas con filtrado 5G y verificación toma a toma; es el parque con más incidencias de la ciudad.",
      },
      {
        zona: "Azucaica, Valparaíso, Montesión y urbanizaciones",
        recomendacion:
          "Antenas individuales de alta ganancia con rechazo LTE orientadas al repetidor óptimo de cada zona, y parabólicas si se desean canales por satélite.",
      },
    ],
    normativa:
      "La ordenanza de protección del Patrimonio Histórico de Toledo condiciona las instalaciones visibles en el casco: para antenas en edificios protegidos suele requerirse licencia de obra menor y ubicación no visible desde la vía pública. Preparamos la documentación y proponemos ubicaciones aprobables.", // TODO(verificar): referencia exacta de la ordenanza
    conectividad:
      "El despliegue 5G de los operadores en Toledo afecta a las antenas colectivas antiguas: al renovar una antena incluimos siempre filtrado LTE/5G, evitando que la instalación nueva nazca con interferencias.",
    proyecto: {
      titulo: "Renovación ICT en comunidad del casco",
      descripcion:
        "Sustitución completa de antena, cabecera y distribución en un edificio protegido de la zona de Santo Tomé, con ubicación discreta aprobada y señal verificada en todas las viviendas.",
    },
    faqs: [
      {
        question: "¿Por qué se ve mal la TDT en algunas calles del casco de Toledo?",
        answer:
          "Por la combinación de muros de piedra muy gruesos, calles estrechas que hacen sombra a la señal y distribuciones interiores antiguas. La solución pasa por medir qué llega a la cubierta, amplificar correctamente y renovar los tramos de cable degradados, no por añadir amplificadores sin criterio.",
      },
      {
        question: "¿Puedo instalar antena propia si vivo en un piso de Toledo?",
        answer:
          "En edificios con antena colectiva, lo razonable es que la comunidad la mantenga en condiciones: la ley ampara la recepción correcta en todas las viviendas. Si la colectiva es deficiente, presupuestamos su renovación a la comunidad; la antena individual en fachada rara vez es la mejor vía y en el casco puede no estar permitida.",
      },
      {
        question: "¿Qué repetidor da mejor señal en Toledo?",
        answer:
          "Depende del barrio: buena parte de la ciudad recibe del repetidor local, pero hay zonas que captan mejor otros reemisores por la orografía del Tajo. Medimos en su cubierta las dos opciones y orientamos hacia la que da mejor calidad estable, no solo más nivel.",
      },
      {
        question: "¿Cuánto tarda una reparación de antena en Toledo ciudad?",
        answer:
          "Al ser nuestra base, las averías urgentes (antena caída, pérdida total de señal) se atienden normalmente en el mismo día, con un tiempo de respuesta medio de 2 a 4 horas.",
      },
      {
        question: "¿Instaláis parabólicas en el casco histórico?",
        answer:
          "Sí, con las mismas cautelas patrimoniales que las antenas: ubicaciones en cubierta no visibles desde la vía pública y fijaciones que no dañen elementos protegidos. En la visita le confirmamos la viabilidad para el satélite que necesite.",
      },
    ],
  },
  {
    slug: "antenas-getafe",
    servicioSlug: "antenas-parabolicas",
    localidadSlug: "getafe",
    nombre: "Antenas y Parabólicas en Getafe",
    prioridad: 1,
    activa: true,
    metaTitle: "Antenas y Parabólicas en Getafe | Antenas Toledo",
    metaDescription:
      "Instalador profesional de antenas TDT y parabólicas en Getafe. Atención en 24h. Presupuesto sin compromiso. Llame ahora al 668 67 95 00.",
    h1: "Antenas y Parabólicas en Getafe: Instalador Profesional",
    intro: [
      "Getafe tiene uno de los parques de antenas colectivas más envejecidos del sur de Madrid: miles de viviendas en bloques de los años 70 y 80 —Sector III, San Isidro, Las Margaritas— reciben la televisión a través de instalaciones que superan los 30 años. Ese envejecimiento, unido al denso despliegue 5G del municipio, explica que la renovación de antenas colectivas sea aquí nuestro trabajo más habitual.",
      "Atendemos Getafe a 25 minutos por la A-42, con renovaciones colectivas, antenas individuales en los adosados de Getafe Norte y El Bercial, y parabólicas para canales internacionales, muy demandadas en el municipio.",
    ],
    porQue: [
      "Cuando una antena colectiva de los 80 empieza a fallar, los parches (amplificar más, cambiar una toma) solo aplazan el problema: el cable pierde apantallamiento, los derivadores se degradan y la cabecera no filtra el 5G. La renovación completa con cabecera filtrada resuelve todas las viviendas de una vez y suele costar menos que años de reparaciones parciales.",
      "En los adosados de las zonas nuevas el escenario es el contrario: instalaciones individuales que se resuelven en unas horas con antena de alta ganancia y orientación al repetidor óptimo.",
    ],
    tiposPorZona: [
      {
        zona: "Sector III, San Isidro, Las Margaritas (bloques de pisos)",
        recomendacion:
          "Renovación de antena colectiva con cabecera filtrada 5G y verificación toma a toma; presupuesto desglosado para la junta de propietarios.",
      },
      {
        zona: "Getafe Norte y El Bercial (adosados)",
        recomendacion: "Antena individual de alta ganancia con rechazo LTE, con distribución a varias tomas si la vivienda lo requiere.",
      },
      {
        zona: "Perales del Río y urbanizaciones",
        recomendacion: "Antenas individuales y parabólicas (Astra/Hotbird) para canales internacionales, con mezcla TDT-SAT en un solo cable.",
      },
    ],
    normativa:
      "La ordenanza municipal de Getafe regula los elementos visibles en fachada; en instalaciones colectivas aplicamos además la normativa ICT como estándar de calidad, aunque el edificio sea anterior a ella. Preparamos la documentación para la aprobación en junta.", // TODO(verificar): referencia exacta de la ordenanza
    conectividad:
      "Getafe concentra uno de los despliegues 5G más densos del sur de Madrid, con estaciones base de los cuatro operadores. Toda renovación de antena que hacemos en el municipio incluye filtrado LTE/5G de serie: renovar sin filtrar es dejar la avería siguiente ya sembrada.",
    proyecto: {
      titulo: "Renovación colectiva en el Sector III",
      descripcion:
        "Sustitución de cabecera y amplificación en un bloque de 40 viviendas con señal degradada e interferencias: cabecera monocanal filtrada, verificación por plantas y garantía para la comunidad.",
    },
    faqs: [
      {
        question: "¿Cuánto cuesta renovar la antena colectiva de una comunidad en Getafe?",
        answer:
          "Depende del número de viviendas y del estado de la distribución. La cabecera y el trabajo en cubierta se reparten entre todos los vecinos, por lo que el coste por vivienda suele ser sorprendentemente contenido. Entregamos presupuesto desglosado por vivienda para facilitar la votación en junta.",
      },
      {
        question: "¿Por qué en mi bloque de Getafe se ven mal los canales desde hace poco?",
        answer:
          "El patrón más común en Getafe es la combinación de instalación envejecida más una estación 5G nueva en la zona: el amplificador antiguo se satura y degrada todos los canales. Se confirma con una medición de espectro y se resuelve filtrando o renovando la cabecera.",
      },
      {
        question: "¿Instaláis parabólicas para canales de otros países en Getafe?",
        answer:
          "Sí, es una demanda muy habitual en el municipio. Identificamos el satélite que emite los canales deseados (Astra, Hotbird u otros), instalamos el disco adecuado y dejamos configurado el receptor con la lista de canales solicitada.",
      },
      {
        question: "¿Cuánto tardáis en venir a Getafe?",
        answer:
          "Estamos a 25 minutos por la A-42 y trabajamos en Getafe prácticamente a diario. Las visitas de presupuesto se programan en 24-48 horas y las urgencias se atienden con un tiempo medio de 4 a 6 horas.",
      },
      {
        question: "¿La comunidad está obligada a arreglar la antena colectiva?",
        answer:
          "La antena colectiva es un elemento común: su conservación corresponde a la comunidad y cualquier vecino puede exigir que la recepción sea correcta en su vivienda. Emitimos un informe técnico con mediciones que sirve de base objetiva para la decisión de la junta.",
      },
    ],
  },
  {
    slug: "camaras-seguridad-getafe",
    servicioSlug: "camaras-seguridad",
    localidadSlug: "getafe",
    nombre: "Cámaras de Seguridad en Getafe",
    prioridad: 1,
    activa: true,
    metaTitle: "Cámaras de Seguridad en Getafe | Antenas Toledo",
    metaDescription:
      "Instalador profesional de cámaras de seguridad en Getafe. Atención en 24h. Presupuesto sin compromiso. Llame ahora al 668 67 95 00.",
    h1: "Cámaras de Seguridad en Getafe: Instalador Profesional",
    intro: [
      "Las cámaras de seguridad en Getafe deben diseñarse pensando en su tejido urbano: grandes comunidades con garajes y trasteros que concentran el vandalismo, polígonos industriales activos y zonas de adosados en expansión. Además, la densidad urbana del municipio hace que los límites de grabación de la vía pública se apliquen con especial rigor: una cámara mal orientada puede suponer una sanción.",
      "Instalamos sistemas para comunidades, negocios y viviendas en todo Getafe, con estudio de seguridad gratuito, cumplimiento estricto de la normativa de videovigilancia y acceso desde el móvil en todas las configuraciones.",
    ],
    porQue: [
      "El grueso de la demanda en Getafe viene de las comunidades de propietarios: garajes con robos en vehículos, trasteros forzados y portales con accesos no controlados. Un sistema comunitario bien diseñado (domos antivandálicos, grabación de 30 días, acceso para el administrador) resuelve el problema y se amortiza con la reducción de incidencias.",
      "El segundo bloque son los negocios de los polígonos, con necesidades de perímetro y control fuera de horario, y el tercero los adosados de Getafe Norte y El Bercial, donde la protección perimetral con analítica evita falsas alertas.",
    ],
    tiposPorZona: [
      {
        zona: "Sector III y bloques de pisos (comunidades)",
        recomendacion:
          "Domos antivandálicos en garaje, trasteros y portal con NVR de 8-16 canales, grabación de 30 días y acceso para administrador y presidencia.",
      },
      {
        zona: "Getafe Norte y El Bercial (adosados)",
        recomendacion: "Sistema perimetral de 4-6 cámaras con analítica de personas y avisos al móvil, integrable con alarma.",
      },
      {
        zona: "Polígonos industriales",
        recomendacion:
          "Cámaras bullet de largo alcance en perímetro y muelles, grabación extendida y usuarios diferenciados para gerencia y seguridad.",
      },
    ],
    normativa:
      "En Getafe aplican los criterios de la AEPD con especial atención a la vía pública por la densidad urbana: las cámaras privadas solo pueden captar la porción mínima imprescindible del espacio público. En comunidades se requiere acuerdo de junta; en negocios, cartelería e información a los trabajadores cuando proceda.", // TODO(verificar): requisitos municipales adicionales
    conectividad:
      "Getafe dispone de fibra simétrica de todos los operadores en prácticamente todo el municipio, lo que permite cámaras IP de alta resolución con visualización remota sin latencia, también en sistemas comunitarios con muchos usuarios.",
    proyecto: {
      titulo: "4 cámaras + NVR en garaje del Sector III",
      descripcion:
        "Comunidad con vandalismo reiterado en garaje: domos antivandálicos con visión nocturna, grabación de 30 días y acceso para el administrador. Los incidentes cesaron desde la instalación.",
    },
    faqs: [
      {
        question: "¿Qué mayoría necesita mi comunidad de Getafe para poner cámaras en el garaje?",
        answer:
          "La Ley de Propiedad Horizontal exige el acuerdo de junta con la mayoría prevista para este tipo de instalaciones (tres quintos de propietarios y cuotas). Preparamos el presupuesto desglosado y la memoria técnica para facilitar la votación.",
      },
      {
        question: "¿Puede mi cámara enfocar la acera o la calle en Getafe?",
        answer:
          "Solo la franja mínima imprescindible para vigilar su acceso. La densidad urbana de Getafe hace muy fácil invadir espacio público o propiedades vecinas con un mal ángulo; lo resolvemos con la orientación correcta y máscaras de privacidad configuradas en la cámara.",
      },
      {
        question: "¿Cuánto cuesta un sistema para un garaje comunitario en Getafe?",
        answer:
          "Un sistema típico de 4 cámaras antivandálicas con grabador y disco para 30 días se mueve entre 800 y 1.400 € según el tamaño del garaje y el cableado necesario; repartido entre los vecinos de una comunidad media, el coste por vivienda es reducido. Presupuesto cerrado tras la visita.",
      },
      {
        question: "¿Instaláis cámaras en naves de los polígonos de Getafe?",
        answer:
          "Sí, es uno de nuestros trabajos habituales en el municipio: perímetro, muelles de carga y accesos con cámaras de largo alcance, avisos de intrusión fuera de horario y retención de grabación adaptada a la actividad.",
      },
      {
        question: "¿El administrador puede ver las cámaras de la comunidad desde su oficina?",
        answer:
          "Sí. Configuramos accesos diferenciados: visualización en directo para quien la comunidad decida y exportación de grabaciones limitada a los responsables designados, dejando el uso del sistema documentado conforme a protección de datos.",
      },
    ],
  },
  {
    slug: "alarmas-getafe",
    servicioSlug: "alarmas",
    localidadSlug: "getafe",
    nombre: "Alarmas en Getafe",
    prioridad: 2,
    activa: true,
    metaTitle: "Alarmas en Getafe | Instalador Profesional | Antenas Toledo",
    metaDescription:
      "Instalador profesional de alarmas antirrobo en Getafe. Sin cuotas o con CRA. Presupuesto sin compromiso. Llame al 668 67 95 00.",
    h1: "Alarmas en Getafe: Instalador Profesional",
    intro: [
      "En Getafe conviven dos perfiles de alarma muy distintos: la del piso —contactos en la puerta y ventanas accesibles, armado nocturno cómodo— y la del adosado de Getafe Norte o El Bercial, que necesita protección perimetral de parcela antes de que el intruso llegue a la vivienda. Diseñamos cada sistema para su caso concreto y le presentamos siempre las dos vías: en propiedad sin cuotas o conectada a CRA.",
      "Como instaladores independientes, no le atamos a permanencias: compare nuestro presupuesto cerrado con las cuotas de las grandes comercializadoras y decida con números reales.",
    ],
    porQue: [
      "Getafe es un mercado donde las grandes empresas de alarmas con cuota hacen mucha presión comercial. Nuestra propuesta es diferente: sistemas de grado profesional (Ajax, DSC) en propiedad, sin cuota obligatoria, o con monitorización CRA si de verdad la quiere. En un piso, un sistema sin cuotas se amortiza frente a la cuota típica en menos de dos años.",
      "En adosados, la clave es detectar en el perímetro: sensores exteriores y cámaras integradas que verifican el salto antes de que nadie toque una ventana.",
    ],
    tiposPorZona: [
      {
        zona: "Pisos (Sector III, Juan de la Cierva, centro)",
        recomendacion:
          "Contactos en puerta y ventanas accesibles, volumétrico pet-friendly y armado parcial nocturno; sin cuotas o con CRA según preferencia.",
      },
      {
        zona: "Adosados (Getafe Norte, El Bercial)",
        recomendacion: "Protección perimetral con sensores exteriores + interior por zonas, sirena exterior disuasoria y verificación visual.",
      },
      {
        zona: "Locales y naves",
        recomendacion: "Sistemas por zonas con horarios, aviso a varios responsables y conexión a CRA para respuesta profesional.",
      },
    ],
    normativa:
      "Solo las alarmas conectadas a una Central Receptora homologada pueden dar aviso directo a la policía (Ley de Seguridad Privada). Los sistemas en propiedad avisan al usuario y sus contactos. Le explicamos las implicaciones reales de cada opción antes de decidir.",
    conectividad:
      "La cobertura de fibra total de Getafe permite comunicación IP como vía principal con respaldo GSM: la alarma sigue comunicando aunque corten la luz o la línea, el estándar que instalamos por defecto en el municipio.",
    proyecto: {
      titulo: "Alarma DSC con CRA en piso de Getafe",
      descripcion:
        "Vivienda habitual con monitorización profesional: contactos en accesos, volumétrico pet-friendly y verificación del salto por la central receptora, con cuota mensual ajustada.",
    },
    faqs: [
      {
        question: "¿Qué es mejor en un piso de Getafe: alarma con cuota o sin cuota?",
        answer:
          "Si usted puede reaccionar a un aviso en el móvil (o tiene familiares cerca), el sistema en propiedad sin cuotas suele ganar: se amortiza en menos de dos años frente a una cuota típica. Si pasa largas temporadas fuera o quiere respuesta profesional verificada, la CRA aporta valor real. Le damos ambos números cerrados.",
      },
      {
        question: "¿La alarma funciona si okupan el piso y cortan la luz?",
        answer:
          "Sí: la central tiene batería de respaldo y comunicación GSM que sigue operativa sin luz ni internet. El propio corte de suministro genera un aviso inmediato, uno de los indicadores tempranos más útiles en viviendas vacías.",
      },
      {
        question: "¿Cuánto cuesta una alarma para un adosado en Getafe Norte?",
        answer:
          "Un sistema sin cuotas con protección perimetral e interior para un adosado se mueve entre 500 y 900 € instalado, según el número de sensores exteriores. Con CRA, la instalación baja y se añade la cuota mensual. Presupuesto cerrado tras el estudio de seguridad gratuito.",
      },
      {
        question: "¿Podéis quitarme la permanencia de mi alarma actual?",
        answer:
          "La permanencia es un contrato con su proveedor actual y hay que respetarla o negociarla, pero cuando venza podemos sustituir el sistema por uno en propiedad reutilizando parte de la instalación cuando es técnicamente viable, eliminando la cuota para siempre.",
      },
      {
        question: "¿Integráis la alarma con cámaras en Getafe?",
        answer:
          "Sí, y lo recomendamos especialmente en adosados: la alarma detecta y las cámaras verifican visualmente el salto desde el móvil. Instalamos ambos sistemas coordinados y con una sola app cuando la plataforma lo permite.",
      },
    ],
  },
  {
    slug: "interferencias-5g-getafe",
    servicioSlug: "solucion-interferencias-5g",
    localidadSlug: "getafe",
    nombre: "Interferencias 5G en Getafe",
    prioridad: 2,
    activa: true,
    metaTitle: "Interferencias 5G en Getafe | Solución Definitiva | Antenas Toledo",
    metaDescription:
      "Solucionamos interferencias 5G en la TDT en Getafe: filtros LTE y renovación de cabeceras. Presupuesto sin compromiso. Llame al 668 67 95 00.",
    h1: "Interferencias 5G en Getafe: Solución Definitiva",
    intro: [
      "Getafe reúne las dos condiciones que disparan las interferencias 5G: uno de los despliegues de estaciones base más densos del sur de Madrid y un parque enorme de antenas colectivas de los años 70-80 sin filtrado. El resultado lo conocen miles de vecinos: pixelados por la tarde, canales que desaparecen y comunidades enteras con la televisión inservible tras el encendido de una antena cercana.",
      "Diagnosticamos con espectrómetro en su edificio, identificamos la frecuencia y el punto de entrada de la interferencia, y aplicamos la solución definitiva: filtro, renovación de cabecera o ambas cosas.",
    ],
    porQue: [
      "En Getafe la interferencia rara vez se arregla con un filtro de toma: el problema suele estar en la cabecera de la colectiva, donde el amplificador antiguo se satura con la señal 5G y degrada todos los canales de todas las viviendas a la vez. Por eso el diagnóstico en cabecera es imprescindible antes de gastar un euro.",
      "La buena noticia: la solución es colectiva y se reparte entre todos los vecinos, y en los supuestos previstos puede canalizarse por la vía de los afectados por el despliegue 700 MHz sin coste.",
    ],
    tiposPorZona: [
      {
        zona: "Sector III, San Isidro, Las Margaritas (colectivas antiguas)",
        recomendacion: "Diagnóstico en cabecera, filtro 5G y sustitución del amplificador saturado; verificación por plantas.",
      },
      {
        zona: "Getafe Norte y El Bercial (antenas individuales)",
        recomendacion: "Filtro LTE en mástil o toma y reorientación si la antena apunta hacia la estación base.",
      },
      {
        zona: "Perales del Río",
        recomendacion: "Medición específica: la zona recibe de repetidores distintos y el tratamiento del filtrado varía.",
      },
    ],
    normativa:
      "Los afectados por las emisiones 5G en la banda de 700 MHz tienen derecho, en los supuestos previstos, a la adaptación sin coste a través de la entidad gestora del despliegue. Comprobamos si su comunidad cumple los requisitos y cómo tramitarlo.", // TODO(verificar): estado del programa de ayudas vigente
    conectividad:
      "Los cuatro operadores emiten 5G en Getafe en frecuencias distintas. Identificar el emisor concreto que interfiere permite elegir el filtro exacto y no degradar los múltiplex de TDT próximos a la banda filtrada.",
    proyecto: {
      titulo: "Comunidad del Sector III recuperada en una mañana",
      descripcion:
        "Bloque con pérdida de canales en todas las viviendas tras el encendido de una antena de operador: filtro en cabecera, amplificador con rechazo LTE y verificación toma a toma.",
    },
    faqs: [
      {
        question: "¿Por qué toda mi comunidad de Getafe ve mal la tele desde el mismo día?",
        answer:
          "Porque la interferencia entra por la cabecera de la antena colectiva y afecta a todas las viviendas a la vez. Es el patrón típico del encendido de una estación 5G cercana y se resuelve filtrando o renovando la cabecera, no tocando cada televisor.",
      },
      {
        question: "¿Quién paga la solución de la interferencia 5G en Getafe?",
        answer:
          "Si su caso está en los supuestos del despliegue de la banda 700 MHz, la adaptación puede tramitarse sin coste a través de la entidad gestora. Fuera de esos supuestos, es un gasto de la comunidad que presupuestamos cerrado; por vivienda suele ser una cantidad pequeña.",
      },
      {
        question: "¿Un filtro de toma comprado por internet soluciona el problema?",
        answer:
          "Casi nunca en Getafe: si el amplificador de la colectiva ya está saturado, filtrar en la toma llega tarde. Hay que filtrar antes de la amplificación, en cabecera. Por eso medimos dónde entra la interferencia antes de proponer nada.",
      },
      {
        question: "¿Cuánto tardáis en solucionar una interferencia en Getafe?",
        answer:
          "La medición diagnóstica se hace en una visita y la actuación completa en cabecera (filtro + amplificador + verificación) se ejecuta normalmente en una mañana de trabajo.",
      },
      {
        question: "¿Puede volver la interferencia después de arreglarla?",
        answer:
          "Si un operador activa una nueva frecuencia distinta a la filtrada, podría aparecer una interferencia nueva. Nuestras cabeceras filtradas cubren la banda 5G completa precisamente para minimizar ese riesgo, y la intervención queda garantizada por escrito.",
      },
    ],
  },
  {
    slug: "alarmas-valdemoro",
    servicioSlug: "alarmas",
    localidadSlug: "valdemoro",
    nombre: "Alarmas en Valdemoro",
    prioridad: 2,
    activa: true,
    metaTitle: "Alarmas en Valdemoro | Instalador Profesional | Antenas Toledo",
    metaDescription:
      "Instalador profesional de alarmas antirrobo en Valdemoro. Chalets y adosados de urbanizaciones. Presupuesto sin compromiso. Llame al 668 67 95 00.",
    h1: "Alarmas en Valdemoro: Instalador Profesional",
    intro: [
      "Valdemoro es un municipio de adosados y chalets: El Restón, Las Dehesas y el resto de urbanizaciones concentran miles de viviendas unifamiliares con parcela donde la alarma eficaz no es la que suena cuando el intruso ya está dentro, sino la que lo detecta en el perímetro. Ese es el enfoque con el que diseñamos cada sistema en el municipio.",
      "Instalamos sistemas en propiedad sin cuotas o conectados a CRA, siempre con estudio de seguridad gratuito y presupuesto cerrado, y los integramos con cámaras cuando se desea verificación visual.",
    ],
    porQue: [
      "En una vivienda con parcela, los volumétricos interiores llegan tarde: la protección correcta empieza en el perímetro, con sensores exteriores inmunes a mascotas y meteorología que avisan cuando alguien salta la valla, no cuando fuerza la ventana. En Valdemoro este diseño marca la diferencia real de seguridad.",
      "El municipio combina además vivienda habitual y personas que pasan el día fuera trabajando en Madrid: los avisos verificables al móvil y el armado por zonas (perímetro sí, interior no) hacen la alarma útil también mientras se está en casa.",
    ],
    tiposPorZona: [
      {
        zona: "El Restón y Las Dehesas (chalets)",
        recomendacion: "Perimetral exterior + interior por zonas, sirena exterior y verificación visual con cámaras integradas.",
      },
      {
        zona: "Adosados (Cerro de la Mula y zonas nuevas)",
        recomendacion: "Contactos en accesos y ventanas de planta baja, volumétrico pet-friendly y armado nocturno parcial.",
      },
      {
        zona: "Pisos del centro",
        recomendacion: "Sistema compacto de contactos + volumétrico, sin cuotas o con CRA según preferencia del propietario.",
      },
    ],
    normativa:
      "Las alarmas conectadas a CRA deben instalarse por empresa habilitada y la central receptora verifica los saltos antes de avisar a la policía (Ley de Seguridad Privada). En urbanizaciones con normas de comunidad, los elementos exteriores (sirenas, sensores de valla) pueden requerir autorización; preparamos la documentación.",
    conectividad:
      "Las urbanizaciones de Valdemoro disponen de fibra, lo que permite comunicación IP con respaldo GSM: doble vía de serie en nuestras instalaciones del municipio.",
    proyecto: {
      titulo: "Alarma con CRA en adosado de Las Dehesas",
      descripcion:
        "Sistema con contactos en accesos, volumétricos pet-friendly y conexión a central receptora: salto verificado y aviso a policía cuando procede.",
    },
    faqs: [
      {
        question: "¿Qué alarma recomendáis para un chalet de El Restón?",
        answer:
          "Protección en dos anillos: sensores perimetrales exteriores que detectan la intrusión en la parcela y protección interior por zonas. Con sirena exterior visible y verificación por cámara, la mayoría de intentos se aborta antes de tocar la vivienda.",
      },
      {
        question: "¿Los sensores exteriores dan falsas alarmas con perros o gatos?",
        answer:
          "Los sensores exteriores de grado profesional que instalamos discriminan mascotas y pequeños animales mediante doble tecnología y ajuste de altura. Es la diferencia entre un sistema útil y uno que se acaba desconectando.",
      },
      {
        question: "¿Merece la pena la CRA en Valdemoro o basta el aviso al móvil?",
        answer:
          "Depende de su capacidad de reacción: si trabaja en Madrid y tarda una hora en llegar, la verificación profesional y el aviso a policía de la CRA aportan valor. Si hay siempre alguien cerca, el sistema en propiedad sin cuotas suele ser más eficiente. Le damos ambos presupuestos cerrados.",
      },
      {
        question: "¿Podéis integrar la alarma con las cámaras que ya tengo?",
        answer:
          "En muchos casos sí: si sus cámaras son de una plataforma compatible las vinculamos a la verificación del salto; si no, añadimos cámaras de verificación de la propia plataforma de alarma. El objetivo es que cada aviso llegue con imagen.",
      },
      {
        question: "¿Cuánto cuesta una alarma para adosado en Valdemoro?",
        answer:
          "Un sistema sin cuotas con contactos en accesos, volumétrico y sirena se mueve entre 400 y 700 € instalado; añadir protección perimetral exterior sube el rango según los metros de parcela. Estudio de seguridad y presupuesto, gratuitos y sin compromiso.",
      },
    ],
  },
  {
    slug: "camaras-seguridad-valdemoro",
    servicioSlug: "camaras-seguridad",
    localidadSlug: "valdemoro",
    nombre: "Cámaras de Seguridad en Valdemoro",
    prioridad: 2,
    activa: true,
    metaTitle: "Cámaras de Seguridad en Valdemoro | Antenas Toledo",
    metaDescription:
      "Instalador profesional de cámaras de seguridad en Valdemoro. Chalets, adosados y comunidades. Presupuesto sin compromiso. Llame al 668 67 95 00.",
    h1: "Cámaras de Seguridad en Valdemoro: Instalador Profesional",
    intro: [
      "La demanda de cámaras de seguridad en Valdemoro está marcada por su urbanismo: miles de chalets y adosados en urbanizaciones (El Restón, Las Dehesas, Cerro de la Mula) donde la videovigilancia perimetral de parcela es la instalación tipo, junto a comunidades del casco que protegen garajes y portales.",
      "Diseñamos cada sistema tras un estudio de seguridad gratuito, con cámaras IP con analítica de personas, grabación local y acceso desde el móvil, cumpliendo la normativa de protección de datos.",
    ],
    porQue: [
      "En las urbanizaciones de Valdemoro las parcelas son el punto débil: accesos traseros, vallas compartidas y horas de ausencia previsibles. Un sistema perimetral con analítica avisa cuando una persona entra en la parcela —no cuando pasa un gato— y disuade con visión nocturna visible.",
      "En el casco, el patrón es el de todo el sur de Madrid: garajes comunitarios con incidencias que se cortan con domos antivandálicos y grabación suficiente para identificar.",
    ],
    tiposPorZona: [
      {
        zona: "El Restón y Las Dehesas (chalets)",
        recomendacion: "6-8 cámaras perimetrales con analítica de personas, visión nocturna y avisos verificables al móvil.",
      },
      {
        zona: "Adosados de las zonas nuevas",
        recomendacion: "4 cámaras cubriendo fachada, acceso y patio trasero, integrables con la alarma.",
      },
      {
        zona: "Comunidades del centro",
        recomendacion: "Domos antivandálicos en garaje y portal con NVR y acceso para el administrador.",
      },
    ],
    normativa:
      "Aplican los criterios de la AEPD (captación mínima de vía pública, cartelería) y, en urbanizaciones con normas internas, la autorización de la comunidad para elementos visibles; preparamos la documentación técnica.",
    conectividad:
      "Valdemoro dispone de fibra en todas las zonas residenciales, lo que permite sistemas IP con visualización remota fluida y almacenamiento local ampliable.",
    proyecto: {
      titulo: "6 cámaras IP en chalet de El Restón",
      descripcion:
        "Sistema perimetral completo con NVR, analítica de personas y acceso móvil para toda la familia, cubriendo accesos y parcela.",
    },
    faqs: [
      {
        question: "¿Cuántas cámaras necesita un chalet en El Restón?",
        answer:
          "Lo habitual son 4 a 8: accesos principal y trasero, laterales de parcela y, si se desea, interior del porche. El número exacto sale del estudio de seguridad gratuito, donde identificamos los ángulos muertos reales de su parcela.",
      },
      {
        question: "¿Las cámaras pueden grabar la calle de mi urbanización?",
        answer:
          "Solo la franja mínima imprescindible del acceso. En urbanizaciones con viales privados, la grabación de zonas comunes corresponde a la comunidad, no al particular; configuramos máscaras de privacidad para respetar ambos límites.",
      },
      {
        question: "¿Puedo ver las cámaras de mi casa de Valdemoro desde el trabajo en Madrid?",
        answer:
          "Sí, en tiempo real y con historial, desde la aplicación del fabricante en su móvil u ordenador. Configuramos usuarios para cada miembro de la familia con los permisos que decidan.",
      },
      {
        question: "¿Qué pasa con las grabaciones si me roban el grabador?",
        answer:
          "Ubicamos el NVR en un punto no evidente y, si lo desea, añadimos copia en la nube o grabación redundante en tarjeta dentro de las propias cámaras, de modo que la evidencia sobreviva incluso si manipulan el equipo.",
      },
      {
        question: "¿Cuánto cuesta un sistema de cámaras para adosado en Valdemoro?",
        answer:
          "Un sistema de 4 cámaras IP con grabador y acceso móvil se mueve entre 600 y 1.100 € instalado según gama y cableado. Presupuesto cerrado tras la visita, sin compromiso.",
      },
    ],
  },
  // ——— Prioridad 3: definidas pero DESACTIVADAS hasta verificar volumen de búsqueda ———
  { slug: "videoporteros-getafe", servicioSlug: "porteros-videoporteros", localidadSlug: "getafe", nombre: "Videoporteros en Getafe", prioridad: 3, activa: false },
  { slug: "alarmas-arroyomolinos", servicioSlug: "alarmas", localidadSlug: "arroyomolinos", nombre: "Alarmas en Arroyomolinos", prioridad: 3, activa: false },
  { slug: "camaras-seguridad-arroyomolinos", servicioSlug: "camaras-seguridad", localidadSlug: "arroyomolinos", nombre: "Cámaras de Seguridad en Arroyomolinos", prioridad: 3, activa: false },
  { slug: "interferencias-5g-toledo", servicioSlug: "solucion-interferencias-5g", localidadSlug: "toledo", nombre: "Interferencias 5G en Toledo", prioridad: 3, activa: false },
  { slug: "antenas-illescas", servicioSlug: "antenas-parabolicas", localidadSlug: "illescas", nombre: "Antenas en Illescas", prioridad: 3, activa: false },
  { slug: "camaras-seguridad-navalcarnero", servicioSlug: "camaras-seguridad", localidadSlug: "navalcarnero", nombre: "Cámaras de Seguridad en Navalcarnero", prioridad: 3, activa: false },
  { slug: "videoporteros-toledo", servicioSlug: "porteros-videoporteros", localidadSlug: "toledo", nombre: "Videoporteros en Toledo", prioridad: 3, activa: false },
]

export const COMBOS_ACTIVOS = COMBOS.filter((c) => c.activa)

export function getCombo(slug: string): ComboServicioLocalidad | undefined {
  return COMBOS_ACTIVOS.find((c) => c.slug === slug)
}
