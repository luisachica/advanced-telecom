// app/sitemap.ts
// Sitemap generado desde los registros de datos (servicios, localidades, combos, proyectos,
// blog). Nunca listas manuales: así el sitemap coincide siempre 1:1 con las rutas reales.
// Prioridades según Estrategia SEO §5.2.
import type { MetadataRoute } from "next"
import { SERVICIOS_HUB } from "@/data/servicios-hub"
import { LOCALIDADES_T1, LOCALIDADES_T2 } from "@/data/localidades"
import { COMBOS_ACTIVOS } from "@/data/combos"
import { PROYECTOS } from "@/data/proyectos"
import { POSTS } from "@/data/blog"
import { NEGOCIO } from "@/lib/negocio"

export const dynamic = "force-static"

const BASE = NEGOCIO.url
const lastModified = new Date()

export default function sitemap(): MetadataRoute.Sitemap {
  const entradas: MetadataRoute.Sitemap = [
    // Home
    { url: `${BASE}/`, lastModified, changeFrequency: "weekly", priority: 1.0 },

    // Hubs de Servicio (prioridad 0.9, semanal)
    { url: `${BASE}/servicios/`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...SERVICIOS_HUB.map((s) => ({
      url: `${BASE}/servicios/${s.slug}/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),

    // Servicio+Localidad activas (prioridad 0.9)
    ...COMBOS_ACTIVOS.map((c) => ({
      url: `${BASE}/${c.slug}/`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),

    // Localidades (T1: 0.8 / T2: 0.7, mensual)
    { url: `${BASE}/localidades/`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    ...LOCALIDADES_T1.map((l) => ({
      url: `${BASE}/localidades/${l.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...LOCALIDADES_T2.map((l) => ({
      url: `${BASE}/localidades/${l.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    { url: `${BASE}/cobertura/`, lastModified, changeFrequency: "monthly", priority: 0.8 },

    // Contenido (blog, proyectos): 0.6-0.7
    { url: `${BASE}/blog/`, lastModified, changeFrequency: "weekly", priority: 0.7 },
    ...POSTS.map((p) => ({
      url: `${BASE}/blog/${p.slug}/`,
      lastModified: new Date(p.fecha),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
    { url: `${BASE}/proyectos/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    ...PROYECTOS.map((p) => ({
      url: `${BASE}/proyectos/${p.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),

    // Páginas de soporte
    { url: `${BASE}/contacto/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE}/quienes-somos/`, lastModified, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/politica-privacidad/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/politica-de-cookies/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE}/terminos-condiciones/`, lastModified, changeFrequency: "yearly", priority: 0.2 },
  ]

  return entradas
}
