// data/localidades/t1/yuncos.ts — Hub de Localidad T1 según Estructura P1 §3.9
import type { Localidad } from "@/types/localidad"

export const yuncos: Localidad = {
  slug: "yuncos",
  nombre: "Yuncos",
  tier: 1,
  provincia: "Toledo",
  comunidad: "Castilla-La Mancha",
  cluster: "La Sagra Norte",
  metaTitle: "Instalador Antenas, Cámaras y Alarmas Yuncos | Antenas Toledo",
  metaDescription:
    "Instalador de antenas, cámaras y alarmas en Yuncos y zona de La Sagra. Eje industrial y residencial. Presupuesto gratuito.",
  h1: "Instalador de Antenas, Cámaras y Seguridad en Yuncos",
  intro: [
    "Yuncos es uno de los municipios más dinámicos del eje industrial de La Sagra, con unos 12.000 habitantes y una tasa de crecimiento elevada. Su posición estratégica entre Illescas y Toledo, junto con su polígono industrial, genera demanda tanto residencial como empresarial de servicios de telecomunicaciones y seguridad.",
    "Atendemos Yuncos en 15 minutos por la A-42. El perfil de trabajo es similar al de Illescas a menor escala: cámaras en naves del polígono, interferencias 5G en viviendas del corredor y antenas colectivas en las comunidades del casco.",
  ],
  contextoUrbanistico:
    "Yuncos tiene un casco urbano con pisos de distintas épocas, urbanizaciones de adosados en la periferia y un polígono industrial activo. Las comunidades del casco concentran las renovaciones de antenas y porteros; los adosados, la demanda de cámaras y alarmas; y el polígono, la videovigilancia profesional de naves.",
  servicios: [
    {
      slugServicio: "camaras-seguridad",
      titulo: "Cámaras de seguridad en Yuncos",
      descripcion:
        "Videovigilancia para naves del polígono, comercios y viviendas, con grabación dimensionada y acceso remoto.",
    },
    {
      slugServicio: "solucion-interferencias-5g",
      titulo: "Interferencias 5G en Yuncos",
      descripcion:
        "Filtrado LTE/5G en comunidades y viviendas del corredor de la A-42, con diagnóstico por espectrómetro.",
    },
    {
      slugServicio: "antenas-parabolicas",
      titulo: "Antenas y parabólicas en Yuncos",
      descripcion:
        "Renovación de colectivas en el casco, antenas individuales en adosados y parabólicas para canales internacionales.",
    },
    {
      slugServicio: "alarmas",
      titulo: "Alarmas en Yuncos",
      descripcion:
        "Alarmas para viviendas, comercios y naves, sin cuotas o conectadas a CRA.",
    },
    {
      slugServicio: "porteros-videoporteros",
      titulo: "Porteros y videoporteros en Yuncos",
      descripcion:
        "Renovación de porteros en comunidades y videoporteros con app para unifamiliares.",
    },
  ],
  proyectos: [
    {
      titulo: "Cámaras de seguridad en nave del polígono",
      descripcion:
        "Sistema de cámaras IP en perímetro y accesos de una nave industrial, con grabación de 30 días y avisos de intrusión fuera de horario.",
    },
    {
      titulo: "Filtro 5G en comunidad del centro",
      descripcion:
        "Comunidad de pisos con cortes de señal tras el encendido de una antena cercana: filtro en cabecera y verificación por plantas.",
    },
    {
      titulo: "Videoportero en comunidad nueva",
      descripcion:
        "Instalación de videoportero digital con monitores a color en una promoción reciente del casco.",
    },
  ],
  desplazamiento: "Desplazamiento: 15 minutos por A-42.",
  tiempoRespuesta: "Tiempo medio de respuesta: 2-4 horas.",
  viaAcceso: "A-42 (salidas 31-35), CM-4001",
  distanciaKm: "15 km por A-42",
  normativa:
    "El Ayuntamiento de Yuncos aplica la normativa urbanística estándar, sin restricciones especiales para instalaciones en fachadas. Las cámaras que enfoquen espacios públicos deben cumplir los criterios de la AEPD, que gestionamos en cada instalación.", // TODO(verificar): confirmar ausencia de restricciones municipales específicas
  testimonios: [
    {
      nombre: "Ricardo P.",
      zona: "Casco Urbano",
      comentario: "Nos solucionaron la interferencia rápido y a buen precio.",
      puntuacion: 5,
    },
  ],
  barrios: [
    { nombre: "Casco Urbano", detalle: "pisos de distintas épocas" },
    { nombre: "Urbanizaciones periféricas", detalle: "adosados" },
    { nombre: "Polígono Industrial", detalle: "naves y empresas" },
  ],
  cercanas: ["illescas", "numancia-de-la-sagra", "yeles", "ugena", "cabanas-de-la-sagra"],
  conectividad: "Movistar fibra, Vodafone, Orange, Digi",
  puntosInteres: ["Polígono Industrial de Yuncos", "Centro comercial de la A-42"],
}
