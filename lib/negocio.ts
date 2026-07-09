// lib/negocio.ts
// Datos únicos del negocio (NAP). Deben ser IDÉNTICOS en web, GBP y directorios
// (consistencia NAP — Estrategia SEO §5.3 y §5.9).

export const NEGOCIO = {
  nombre: "Antenas Toledo",
  url: "https://antenastoledo.com",
  telefonoDisplay: "668 67 95 00",
  telefonoTel: "+34668679500",
  whatsapp: "34668679500",
  email: "antenastoledo@yahoo.com",
  // TODO(verificar): dirección física exacta del negocio (calle y CP reales).
  // No se publica calle inventada; el schema funciona como service-area business.
  direccion: {
    localidad: "Toledo",
    provincia: "Toledo",
    region: "Castilla-La Mancha",
    codigoPostal: "45003",
    pais: "ES",
  },
  geo: {
    latitud: "39.8628",
    longitud: "-4.0273",
  },
  // TODO(verificar): horario comercial real (propuesto en doc Estructura P2 §6.4)
  horario: {
    laborables: "L-V 8:00-20:00",
    sabado: "S 9:00-14:00",
    urgencias: "Urgencias 24h",
  },
  experiencia: "desde 1995", // claim actual del sitio
  aniosExperiencia: "más de 25 años",
  redes: [
    "https://www.facebook.com/antenistatoledo",
    "https://twitter.com/antenistatoledo",
    "https://www.instagram.com/antenistatoledo/",
    "https://es.linkedin.com/in/antenistatoledo",
  ],
  logo: "https://antenastoledo.com/logo-antenas-toledo.png",
  imagenPrincipal: "https://antenastoledo.com/images/telecom/antenistas-en-toledo.jpg",
} as const

export function waLink(texto: string): string {
  return `https://wa.me/${NEGOCIO.whatsapp}?text=${encodeURIComponent(texto)}`
}
