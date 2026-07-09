// data/nav.ts
// Datos ligeros para la navegación (cliente): 5 servicios y 9 zonas T1.
// Se mantienen aquí como literales pequeños para no cargar los datos completos en el bundle.

export const NAV_SERVICIOS = [
  {
    title: "Solución Interferencias 5G",
    iconName: "Wifi",
    description: "Filtros LTE/5G y diagnóstico con espectrómetro para su televisión.",
    link: "/servicios/solucion-interferencias-5g",
  },
  {
    title: "Antenas y Parabólicas",
    iconName: "Satellite",
    description: "Instalación y reparación de antenas TDT y parabólicas.",
    link: "/servicios/antenas-parabolicas",
  },
  {
    title: "Cámaras de Seguridad",
    iconName: "Shield",
    description: "Videovigilancia con acceso desde el móvil para hogares y negocios.",
    link: "/servicios/camaras-seguridad",
  },
  {
    title: "Instalación de Alarmas",
    iconName: "Bell",
    description: "Alarmas sin cuotas o conectadas a CRA para viviendas y locales.",
    link: "/servicios/alarmas",
  },
  {
    title: "Porteros y Videoporteros",
    iconName: "DoorOpen",
    description: "Renovación de porteros y videoporteros IP y GSM.",
    link: "/servicios/porteros-videoporteros",
  },
]

export const NAV_ZONAS = [
  { nombre: "Toledo", slug: "toledo" },
  { nombre: "Getafe", slug: "getafe" },
  { nombre: "Valdemoro", slug: "valdemoro" },
  { nombre: "Navalcarnero", slug: "navalcarnero" },
  { nombre: "Arroyomolinos", slug: "arroyomolinos" },
  { nombre: "Illescas", slug: "illescas" },
  { nombre: "Seseña", slug: "sesena" },
  { nombre: "Fuensalida", slug: "fuensalida" },
  { nombre: "Yuncos", slug: "yuncos" },
]
