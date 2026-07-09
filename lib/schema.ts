// lib/schema.ts
// Generadores de datos estructurados (Schema.org) — Estrategia SEO §5.1.
// Todos devuelven objetos listos para <StructuredData data={...} />.

import { NEGOCIO } from "./negocio"
import type { FaqItem, TestimonioLocal } from "@/types/localidad"

const BASE = NEGOCIO.url

/** LocalBusiness canónico (mismo @id en todo el sitio para consolidar la entidad) */
export function schemaLocalBusiness(opciones?: {
  areaServed?: string[]
  aggregateRating?: { ratingValue: string; reviewCount: string }
  reviews?: TestimonioLocal[]
}) {
  const schema: Record<string, unknown> = {
    "@type": "LocalBusiness",
    "@id": `${BASE}/#localbusiness`,
    name: NEGOCIO.nombre,
    url: BASE,
    logo: NEGOCIO.logo,
    image: NEGOCIO.imagenPrincipal,
    telephone: NEGOCIO.telefonoTel,
    email: NEGOCIO.email,
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: NEGOCIO.direccion.localidad,
      addressRegion: NEGOCIO.direccion.provincia,
      postalCode: NEGOCIO.direccion.codigoPostal,
      addressCountry: NEGOCIO.direccion.pais,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: NEGOCIO.geo.latitud,
      longitude: NEGOCIO.geo.longitud,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: NEGOCIO.redes,
  }
  if (opciones?.areaServed?.length) {
    schema.areaServed = opciones.areaServed.map((nombre) => ({
      "@type": "AdministrativeArea",
      name: nombre,
    }))
  }
  if (opciones?.aggregateRating) {
    schema.aggregateRating = {
      "@type": "AggregateRating",
      ...opciones.aggregateRating,
    }
  }
  if (opciones?.reviews?.length) {
    schema.review = opciones.reviews.map((t) => ({
      "@type": "Review",
      author: { "@type": "Person", name: t.nombre },
      reviewRating: { "@type": "Rating", ratingValue: String(t.puntuacion), bestRating: "5" },
      reviewBody: t.comentario,
    }))
  }
  return schema
}

/** Service con areaServed (Hub de Servicio y páginas Servicio+Localidad) */
export function schemaService(opciones: {
  nombre: string
  descripcion: string
  url: string
  areaServed: string[]
  precioDesde?: string
}) {
  const schema: Record<string, unknown> = {
    "@type": "Service",
    "@id": `${opciones.url}#service`,
    name: opciones.nombre,
    description: opciones.descripcion,
    url: opciones.url,
    provider: { "@id": `${BASE}/#localbusiness` },
    areaServed: opciones.areaServed.map((nombre) => ({
      "@type": "AdministrativeArea",
      name: nombre,
    })),
  }
  if (opciones.precioDesde) {
    schema.offers = {
      "@type": "Offer",
      priceCurrency: "EUR",
      price: opciones.precioDesde,
      description: "Precio orientativo; presupuesto personalizado sin compromiso",
    }
  }
  return schema
}

/** FAQPage */
export function schemaFaqPage(url: string, faqs: FaqItem[]) {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  }
}

/** BreadcrumbList — obligatorio en todas las páginas salvo Home (§4.4) */
export function schemaBreadcrumb(url: string, items: { nombre: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${url}#breadcrumb`,
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.nombre,
      item: item.url,
    })),
  }
}

/** ImageObject para fotos de proyectos */
export function schemaImageObject(url: string, imagen: string, alt: string) {
  return {
    "@type": "ImageObject",
    "@id": `${url}#imagen`,
    contentUrl: imagen.startsWith("http") ? imagen : `${BASE}${imagen}`,
    description: alt,
  }
}

/** Envoltorio @graph */
export function schemaGraph(...schemas: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": schemas,
  }
}
