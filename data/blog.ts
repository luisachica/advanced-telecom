// data/blog.ts
// Posts del blog (Estructura P2 §6.2). El blog crece de forma progresiva; estos son los
// tres primeros posts semilla de la tabla del documento. Cada post enlaza a 1-2 Hubs de
// Servicio y 1 Hub de Localidad (regla de enlazado interno del blog).

export interface SeccionPost {
  h2: string
  parrafos: string[]
  lista?: string[]
}

export interface PostBlog {
  slug: string
  titulo: string
  metaTitle: string
  metaDescription: string
  fecha: string // ISO
  fechaDisplay: string
  imagen: string
  imagenAlt: string
  resumen: string
  secciones: SeccionPost[]
  /** Enlaces internos obligatorios del post */
  enlaces: { texto: string; href: string }[]
}

export const POSTS: PostBlog[] = [
  {
    slug: "como-solucionar-interferencias-5g-television",
    titulo: "Guía completa: cómo solucionar las interferencias 5G en su televisión",
    metaTitle: "Cómo Solucionar Interferencias 5G en la TDT | Guía Completa | Antenas Toledo",
    metaDescription:
      "Guía completa sobre las interferencias 5G en la televisión: por qué ocurren, cómo identificarlas y qué soluciones existen (filtros LTE, cabeceras, ayudas).",
    fecha: "2026-06-15",
    fechaDisplay: "15 de junio de 2026",
    imagen: "/images/telecom/antena-profesional.jpg",
    imagenAlt: "Técnico midiendo señal de antena para diagnosticar interferencias 5G",
    resumen:
      "Pixelados, cortes y canales que desaparecen: si su televisión empezó a fallar de repente, es muy probable que la causa sea el despliegue 5G. Explicamos por qué ocurre y cómo se soluciona de forma definitiva.",
    secciones: [
      {
        h2: "Por qué el 5G interfiere con la TDT",
        parrafos: [
          "Hasta el llamado segundo dividendo digital, la banda de 700 MHz pertenecía a la televisión terrestre. Hoy esa banda la ocupan las redes 5G de los operadores móviles, y sus frecuencias quedan pegadas a las que siguen usando los canales de TDT. Cuando un operador enciende una estación base cerca de su edificio, la señal de telefonía entra por la antena de televisión con mucha más potencia que los propios canales.",
          "El eslabón débil suele ser el amplificador de la instalación: los equipos anteriores al despliegue no filtran esas frecuencias, se saturan con la señal 5G y degradan todos los canales a la vez. Por eso el problema aparece de repente, afecta a comunidades enteras y no se arregla resintonizando el televisor.",
        ],
      },
      {
        h2: "Cómo saber si su problema es una interferencia 5G",
        parrafos: ["Hay tres síntomas que apuntan claramente al 5G como causa:"],
        lista: [
          "Los fallos empezaron de forma repentina, sin que nadie tocara la instalación.",
          "Empeoran por la tarde-noche, cuando crece el tráfico de datos móviles en la zona.",
          "Afectan a varias viviendas del edificio a la vez (señal de que el problema está en la antena colectiva, no en su televisor).",
        ],
      },
      {
        h2: "Las soluciones, de menos a más",
        parrafos: [
          "La solución correcta depende de dónde entra la interferencia, y eso solo se determina midiendo el espectro con un equipo profesional. En términos generales, las opciones son tres.",
          "Primera: el filtro LTE/5G, un componente que bloquea las frecuencias de telefonía dejando pasar la TDT. Puede instalarse en la toma de una vivienda, en el mástil de la antena o en la cabecera de la instalación colectiva. Segunda: la sustitución del amplificador por un modelo con rechazo 5G integrado, necesaria cuando el equipo ya está saturado (filtrar después de la saturación no sirve). Tercera: la reorientación o renovación de la antena, si apunta hacia la estación base o está al final de su vida útil.",
          "En comunidades de propietarios, la actuación correcta casi siempre es en cabecera: se resuelven todas las viviendas de una vez y el coste repartido por vecino es reducido.",
        ],
      },
      {
        h2: "Ayudas para los afectados",
        parrafos: [
          "El despliegue de la banda de 700 MHz incluyó mecanismos de protección para los usuarios de TDT: en los supuestos previstos, los afectados tienen derecho a la adaptación de su instalación sin coste a través de la entidad gestora del proceso, y han existido programas de ayudas públicas para las adaptaciones. Un instalador profesional puede confirmarle en la propia visita de diagnóstico si su caso cumple los requisitos y qué documentación necesita.",
        ],
      },
      {
        h2: "Qué hacemos nosotros",
        parrafos: [
          "En Antenas Toledo diagnosticamos con espectrómetro de RF sobre la propia instalación —vemos la interferencia en pantalla antes de proponer nada—, presupuestamos por escrito la solución exacta y la dejamos verificada midiendo todos los múltiplex en las tomas. Trabajamos en Toledo, La Sagra y el sur de la Comunidad de Madrid, tanto para particulares como para comunidades.",
        ],
      },
    ],
    enlaces: [
      { texto: "Servicio de solución de interferencias 5G", href: "/servicios/solucion-interferencias-5g/" },
      { texto: "Instalador en Toledo", href: "/localidades/toledo/" },
    ],
  },
  {
    slug: "antena-colectiva-o-individual",
    titulo: "Antenas colectivas vs. individuales: qué le conviene",
    metaTitle: "Antena Colectiva o Individual: Cuál Elegir | Antenas Toledo",
    metaDescription:
      "¿Antena colectiva o individual? Diferencias reales, qué dice la normativa, costes y qué conviene según su tipo de vivienda. Guía práctica del instalador.",
    fecha: "2026-06-22",
    fechaDisplay: "22 de junio de 2026",
    imagen: "/images/telecom/antena-tdt-instalacion-01.jpg",
    imagenAlt: "Instalación de antena TDT en vivienda",
    resumen:
      "¿La comunidad debe arreglar la antena o me pongo una propia? ¿En un chalet compensa la colectiva de la urbanización? Aclaramos las diferencias reales entre antena colectiva e individual y qué conviene en cada caso.",
    secciones: [
      {
        h2: "Qué es cada cosa",
        parrafos: [
          "La antena individual da servicio a una sola vivienda: es la configuración natural de chalets y unifamiliares. La antena colectiva es un elemento común del edificio: una sola antena de calidad en la cubierta, una cabecera que amplifica y una red de distribución que lleva la señal a todas las viviendas.",
          "En un edificio de pisos, la colectiva no es solo la opción razonable: una cubierta llena de antenas individuales compitiendo entre sí da peor resultado técnico que una colectiva bien mantenida, y muchas comunidades y ordenanzas la prohíben.",
        ],
      },
      {
        h2: "Si vive en un piso: la colectiva es un derecho",
        parrafos: [
          "La antena colectiva es un elemento común y su conservación corresponde a la comunidad: cualquier propietario puede exigir que la recepción sea correcta en su vivienda. Si la instalación es antigua y falla, la vía correcta no es el parche individual, sino un informe técnico con mediciones que sirva de base para que la junta apruebe la renovación.",
          "Una renovación de colectiva incluye hoy, de serie, el filtrado 5G en cabecera: renovar sin filtrar es dejar sembrada la siguiente avería.",
        ],
      },
      {
        h2: "Si vive en un chalet o adosado",
        parrafos: [
          "La antena individual moderna (alta ganancia y rechazo LTE integrado) instalada y orientada correctamente da una recepción excelente. La clave está en la orientación: en zonas límite entre repetidores, medir cuál da mejor calidad estable marca la diferencia entre una instalación sin problemas y años de pixelados.",
          "Si además quiere canales por satélite, antena y parabólica pueden combinarse en un solo cable con un mezclador TDT-SAT, evitando duplicar cableado por la vivienda.",
        ],
      },
      {
        h2: "Costes orientativos",
        parrafos: [
          "Una antena individual instalada se mueve entre 80 y 150 € según acceso y metros de cable. La renovación de una colectiva se presupuesta según el número de viviendas y el estado de la distribución, pero repartida entre los vecinos suele suponer una cantidad contenida por vivienda, muy inferior a lo que cuestan años de reparaciones parciales.",
        ],
      },
    ],
    enlaces: [
      { texto: "Servicio de antenas y parabólicas", href: "/servicios/antenas-parabolicas/" },
      { texto: "Instalador en Valdemoro", href: "/localidades/valdemoro/" },
    ],
  },
  {
    slug: "normativa-videovigilancia-espana",
    titulo: "Normativa de videovigilancia en España: lo que debe saber antes de instalar cámaras",
    metaTitle: "Normativa de Videovigilancia en España: Guía Práctica | Antenas Toledo",
    metaDescription:
      "Qué exige la ley antes de instalar cámaras de seguridad: protección de datos, cartel de zona videovigilada, grabación de vía pública y comunidades de propietarios.",
    fecha: "2026-07-01",
    fechaDisplay: "1 de julio de 2026",
    imagen: "/images/telecom/camaras-seguridad.jpg",
    imagenAlt: "Cámara de videovigilancia instalada conforme a la normativa",
    resumen:
      "Instalar una cámara es fácil; instalarla legalmente, no tanto. Repasamos las reglas clave de la normativa española de videovigilancia: qué puede grabar, qué cartel necesita y qué debe aprobar su comunidad.",
    secciones: [
      {
        h2: "El marco: RGPD y LOPDGDD",
        parrafos: [
          "Las imágenes de personas identificables son datos personales, así que cualquier sistema de videovigilancia queda sujeto al Reglamento General de Protección de Datos y a la LOPDGDD. La Agencia Española de Protección de Datos (AEPD) es quien supervisa su cumplimiento y quien sanciona las instalaciones irregulares, normalmente a raíz de denuncias de vecinos.",
        ],
      },
      {
        h2: "La regla de oro: mínima captación de vía pública",
        parrafos: [
          "Una cámara privada no puede vigilar la calle. La normativa solo permite captar la porción mínima de vía pública imprescindible para proteger el acceso a la propiedad (la puerta y su entorno inmediato). Enfocar la acera entera, la calzada o la propiedad del vecino es motivo de sanción.",
          "En la práctica, esto se resuelve con la orientación correcta y con máscaras de privacidad: zonas de la imagen que la propia cámara difumina o excluye de la grabación de forma permanente.",
        ],
      },
      {
        h2: "El cartel es obligatorio",
        parrafos: [
          "Toda zona videovigilada debe señalizarse con el cartel informativo homologado, colocado en lugar visible antes de entrar en la zona grabada, con la identidad del responsable del tratamiento y cómo ejercer los derechos. Un sistema perfecto sin cartel es un sistema ilegal.",
        ],
      },
      {
        h2: "Comunidades de propietarios y negocios",
        parrafos: [
          "En comunidades, la instalación de cámaras en zonas comunes (garaje, portal, trasteros) requiere acuerdo de junta con la mayoría de tres quintos prevista en la Ley de Propiedad Horizontal, y las grabaciones deben limitarse a las zonas comunes con acceso restringido a las personas designadas.",
          "En negocios, además de la cartelería, hay reglas específicas si las cámaras captan puestos de trabajo: los empleados deben estar informados, y las cámaras nunca pueden instalarse en zonas de descanso, vestuarios o aseos.",
        ],
      },
      {
        h2: "Cuánto tiempo se pueden guardar las grabaciones",
        parrafos: [
          "El plazo general de conservación es de un máximo de un mes, salvo que las imágenes deban preservarse como prueba de un delito o infracción, en cuyo caso se bloquean y se ponen a disposición de las autoridades. Los grabadores que instalamos se configuran con la retención adecuada desde el primer día.",
          "Si está pensando en instalar cámaras, nuestro consejo es simple: hágalo con un instalador que resuelva a la vez la parte técnica y la legal. El sistema queda protegiendo su propiedad, no generándole un problema nuevo.",
        ],
      },
    ],
    enlaces: [
      { texto: "Servicio de cámaras de seguridad", href: "/servicios/camaras-seguridad/" },
      { texto: "Instalador en Getafe", href: "/localidades/getafe/" },
    ],
  },
]

export function getPost(slug: string): PostBlog | undefined {
  return POSTS.find((p) => p.slug === slug)
}
