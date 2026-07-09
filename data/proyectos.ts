// data/proyectos.ts
// Portfolio de proyectos (/proyectos/) — E-E-A-T con contexto geográfico (Estructura P2 §6.3).
// TODO(verificar): los casos proceden de los ejemplos del documento estratégico; deben
// contrastarse con proyectos reales del negocio (y sustituir las fotos por las de cada obra,
// siempre con permiso del cliente y sin dirección exacta por privacidad).
import type { Proyecto } from "@/types/proyecto"

export const PROYECTOS: Proyecto[] = [
  {
    slug: "interferencia-5g-comunidad-illescas",
    titulo: "Solución de interferencia 5G en comunidad de Illescas",
    localidadSlug: "illescas",
    localidadNombre: "Illescas",
    zona: "Señorío de Illescas",
    servicioSlug: "solucion-interferencias-5g",
    servicioNombre: "Solución interferencias 5G",
    problema:
      "Las 24 viviendas de la comunidad perdieron varios canales de golpe tras la activación de una estación base 5G a menos de 200 metros del edificio. Resintonizar los televisores no servía de nada.",
    solucion:
      "Medición de espectro en la cabecera de la antena colectiva, instalación de filtro 5G y sustitución del amplificador saturado por un modelo con rechazo LTE integrado.",
    resultado:
      "Todos los múltiplex recuperados con calidad de señal óptima en todas las tomas, en una sola mañana de trabajo y con garantía por escrito para la comunidad.",
    imagen: "/images/telecom/trabajo-antena-2023-03-27.jpg",
    imagenAlt: "Trabajo en antena colectiva para eliminar interferencia 5G en comunidad de Illescas",
  },
  {
    slug: "renovacion-ict-casco-historico-toledo",
    titulo: "Renovación de instalación colectiva en el casco histórico de Toledo",
    localidadSlug: "toledo",
    localidadNombre: "Toledo",
    zona: "Casco Histórico (zona Santo Tomé)",
    servicioSlug: "antenas-parabolicas",
    servicioNombre: "Antenas y parabólicas",
    problema:
      "Comunidad en edificio protegido con la instalación colectiva obsoleta: señal deficiente en la mitad de las viviendas y limitaciones patrimoniales para cualquier actuación visible en cubierta.",
    solucion:
      "Renovación completa de antena, cabecera y distribución con ubicación discreta conforme a la protección del casco, y verificación de señal toma a toma.",
    resultado: "Señal óptima en todas las viviendas sin alterar la estética del edificio protegido.",
    imagen: "/images/telecom/trabajo-antena-2023-10-11.jpg",
    imagenAlt: "Renovación de antena colectiva en edificio del casco histórico de Toledo",
  },
  {
    slug: "camaras-garaje-comunitario-getafe",
    titulo: "Videovigilancia en garaje comunitario de Getafe",
    localidadSlug: "getafe",
    localidadNombre: "Getafe",
    zona: "Sector III",
    servicioSlug: "camaras-seguridad",
    servicioNombre: "Cámaras de seguridad",
    problema: "Vandalismo reiterado y robos en vehículos en el garaje de la comunidad, sin forma de identificar a los responsables.",
    solucion:
      "4 cámaras IP antivandálicas con visión nocturna y NVR con 30 días de grabación, con acceso diferenciado para el administrador de la finca.",
    resultado: "Los incidentes cesaron desde la instalación; las grabaciones permitieron resolver el último episodio.",
    imagen: "/images/telecom/trabajo-camara-2023-02-24.jpg",
    imagenAlt: "Instalación de cámaras de seguridad en garaje comunitario de Getafe",
  },
  {
    slug: "camaras-perimetrales-chalet-valdemoro",
    titulo: "Sistema de cámaras perimetrales en chalet de Valdemoro",
    localidadSlug: "valdemoro",
    localidadNombre: "Valdemoro",
    zona: "El Restón",
    servicioSlug: "camaras-seguridad",
    servicioNombre: "Cámaras de seguridad",
    problema: "Vivienda unifamiliar con parcela y varios ángulos muertos, cuyos propietarios pasaban el día trabajando fuera.",
    solucion: "6 cámaras IP con analítica de personas y NVR, cubriendo accesos y perímetro, con avisos verificables al móvil.",
    resultado: "Supervisión completa de la parcela en tiempo real y tranquilidad durante las ausencias.",
    imagen: "/images/telecom/trabajo-camara-2023-11-25.jpg",
    imagenAlt: "Cámaras de seguridad perimetrales en chalet de El Restón, Valdemoro",
    testimonio: { nombre: "Rosa M.", comentario: "Instalación de cámaras impecable, nos explicaron todo perfectamente." },
  },
  {
    slug: "alarma-ajax-chalet-arroyomolinos",
    titulo: "Alarma sin cuotas en chalet de Arroyomolinos",
    localidadSlug: "arroyomolinos",
    localidadNombre: "Arroyomolinos",
    zona: "Urbanización Xanadú",
    servicioSlug: "alarmas",
    servicioNombre: "Instalación de alarmas",
    problema:
      "Chalet en urbanización con intentos de robo en la zona; los propietarios no querían atarse a cuotas mensuales de las grandes comercializadoras.",
    solucion:
      "Sistema Ajax en propiedad: central con doble vía de comunicación, 6 sensores entre perímetro e interior, sirena exterior y app para toda la familia.",
    resultado: "Protección completa sin cuota mensual, con avisos instantáneos y verificables en el móvil.",
    imagen: "/images/telecom/trabajo-instalacion-2024-04-19.jpg",
    imagenAlt: "Instalación de alarma sin cuotas en chalet de Arroyomolinos",
    testimonio: { nombre: "Laura S.", comentario: "Instalación de cámaras y alarma en un día. Ahora me siento segura." },
  },
  {
    slug: "portero-duox-comunidad-toledo",
    titulo: "Sustitución de portero antiguo por Duox en comunidad de Toledo",
    localidadSlug: "toledo",
    localidadNombre: "Toledo",
    zona: "Santa María de Benquerencia",
    servicioSlug: "porteros-videoporteros",
    servicioNombre: "Porteros y videoporteros",
    problema:
      "Portero automático de los años 80 sin repuestos disponibles, con la mitad de los telefonillos mudos y la placa de calle deteriorada.",
    solucion:
      "Sustitución completa por sistema Fermax Duox reutilizando el cableado existente: placa antivandálica nueva y terminal en cada vivienda, sin obra.",
    resultado: "Sistema renovado en todo el edificio en dos jornadas, con audio perfecto en todas las viviendas.",
    imagen: "/images/telecom/trabajo-portero-2023-12-02.jpg",
    imagenAlt: "Sustitución de portero automático por sistema Duox en comunidad de Toledo",
  },
  {
    slug: "videoportero-ip-chalet-fuensalida",
    titulo: "Videoportero IP con apertura desde el móvil en Fuensalida",
    localidadSlug: "fuensalida",
    localidadNombre: "Fuensalida",
    zona: "Urbanización periférica",
    servicioSlug: "porteros-videoporteros",
    servicioNombre: "Porteros y videoporteros",
    problema: "Chalet con parcela grande: la llamada del portero no se oía desde el jardín ni cuando la familia estaba fuera.",
    solucion: "Videoportero IP con desvío a los móviles de la familia y apertura remota de puerta peatonal y garaje.",
    resultado: "Atienden la puerta desde cualquier lugar, con imagen del visitante e historial de llamadas.",
    imagen: "/images/telecom/video-portero-02.jpg",
    imagenAlt: "Videoportero IP con apertura desde el móvil en chalet de Fuensalida",
  },
  {
    slug: "antena-colectiva-quinon-sesena",
    titulo: "Antena colectiva en comunidad de El Quiñón (Seseña)",
    localidadSlug: "sesena",
    localidadNombre: "Seseña",
    zona: "El Quiñón",
    servicioSlug: "antenas-parabolicas",
    servicioNombre: "Antenas y parabólicas",
    problema: "Comunidad de gran tamaño con recepción irregular entre verticales y quejas recurrentes de los vecinos.",
    solucion: "Instalación de antena colectiva con cabecera filtrada 5G y equilibrado de señal en todas las verticales del edificio.",
    resultado: "Recepción uniforme y estable en todas las viviendas de la comunidad.",
    imagen: "/images/telecom/trabajo-antena-2024-04-01.jpg",
    imagenAlt: "Instalación de antena colectiva en comunidad de El Quiñón, Seseña",
  },
  {
    slug: "camaras-nave-poligono-navalcarnero",
    titulo: "Videovigilancia en nave industrial de Navalcarnero",
    localidadSlug: "navalcarnero",
    localidadNombre: "Navalcarnero",
    zona: "Polígono Industrial",
    servicioSlug: "camaras-seguridad",
    servicioNombre: "Cámaras de seguridad",
    problema: "Nave con material de valor, sin vigilancia fuera del horario laboral y con un intento de robo reciente.",
    solucion:
      "Cámaras IP de largo alcance en perímetro y muelles, grabación extendida y avisos de intrusión fuera de horario a los responsables.",
    resultado: "Perímetro supervisado 24/7 con verificación desde el móvil y grabaciones útiles ante cualquier incidencia.",
    imagen: "/images/telecom/trabajo-instalacion-2023-10-27.jpg",
    imagenAlt: "Cámaras de videovigilancia en nave industrial del polígono de Navalcarnero",
  },
  {
    slug: "filtro-5g-comunidad-yuncos",
    titulo: "Filtro 5G en comunidad de pisos de Yuncos",
    localidadSlug: "yuncos",
    localidadNombre: "Yuncos",
    zona: "Casco Urbano",
    servicioSlug: "solucion-interferencias-5g",
    servicioNombre: "Solución interferencias 5G",
    problema: "Cortes de señal y pixelado en toda la comunidad tras el encendido de una antena de operador en el corredor de la A-42.",
    solucion: "Diagnóstico con espectrómetro, filtro 5G en cabecera y verificación de la señal planta por planta.",
    resultado: "Señal estable en todas las viviendas desde el mismo día de la intervención.",
    imagen: "/images/telecom/trabajo-antena-2023-12-22-02.jpg",
    imagenAlt: "Instalación de filtro 5G en antena colectiva de comunidad en Yuncos",
  },
]

export function getProyecto(slug: string): Proyecto | undefined {
  return PROYECTOS.find((p) => p.slug === slug)
}
