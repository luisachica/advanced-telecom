// data/localidades/t3.ts
// Zonas Tier 3 (urbanizaciones, barrios y núcleos <5.000 hab.) — Estrategia §1.3.
// NO generan página propia: se agrupan en /cobertura/ y se mencionan en las páginas
// de su localidad de referencia como «también cubrimos».

export interface GrupoT3 {
  referencia: string
  /** Slug del hub de localidad de referencia, si existe */
  referenciaSlug?: string
  zonas: string[]
}

export const ZONAS_T3: GrupoT3[] = [
  {
    referencia: "Toledo ciudad y entorno",
    referenciaSlug: "toledo",
    zonas: [
      "Azucaica",
      "Santa María de Benquerencia",
      "Casco Histórico",
      "Covachuelas",
      "Antequeruela",
      "Avenida de Europa",
      "Avenida Reconquista",
      "Barrio del Polígono",
      "Los Cigarrales",
      "Montesión",
      "Olivar de los Pozos",
      "Palomarejos",
      "San Bernardo",
      "San Martín",
      "Santa Bárbara",
      "Santa Teresa",
      "Buenavista",
      "Vega Baja",
      "Valparaíso",
      "Vista Hermosa",
      "La Bastida",
      "La Legua",
      "Las Tres Culturas",
      "Torrecastillo",
      "Layos",
      "Cobisa (entorno)",
    ],
  },
  {
    referencia: "La Sagra (eje Illescas-Yuncos)",
    referenciaSlug: "illescas",
    zonas: [
      "Señorío de Illescas",
      "Yuncler",
      "Yunclillos",
      "Cedillo del Condado",
      "Chozas de Canales",
      "Lominchar",
      "Cobeja",
      "Pantoja",
      "Añover de Tajo",
      "Alameda de la Sagra (entorno)",
    ],
  },
  {
    referencia: "Zona de Seseña",
    referenciaSlug: "sesena",
    zonas: ["El Quiñón", "Seseña Viejo", "Vallegrande", "Pinar de Villeriche", "Borox", "Nuevo Borox", "Esquivias (entorno)"],
  },
  {
    referencia: "Oeste de Toledo",
    referenciaSlug: "fuensalida",
    zonas: [
      "Rielves",
      "Barcience",
      "Arcicollar",
      "Camarenilla",
      "Santa Cruz del Retamar",
      "Calalberche",
      "Calypo Fado",
      "Renta de la Casa",
    ],
  },
  {
    referencia: "Sur de Madrid",
    referenciaSlug: "getafe",
    zonas: ["Perales del Río", "Los Pradillos", "Casarrubuelos", "Batres", "El Álamo", "Aldea del Fresno", "Los Cisneros", "Los Palominos"],
  },
]
