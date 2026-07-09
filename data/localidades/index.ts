// data/localidades/index.ts
// Registro único de localidades (T1 + T2) y clústeres geográficos (Estrategia §4.3).
import type { Localidad } from "@/types/localidad"
import { toledo } from "./t1/toledo"
import { getafe } from "./t1/getafe"
import { valdemoro } from "./t1/valdemoro"
import { navalcarnero } from "./t1/navalcarnero"
import { arroyomolinos } from "./t1/arroyomolinos"
import { illescas } from "./t1/illescas"
import { sesena } from "./t1/sesena"
import { fuensalida } from "./t1/fuensalida"
import { yuncos } from "./t1/yuncos"
import { LOCALIDADES_T2 } from "./t2"

export { ZONAS_T3 } from "./t3"

export const LOCALIDADES_T1: Localidad[] = [
  toledo,
  getafe,
  valdemoro,
  navalcarnero,
  arroyomolinos,
  illescas,
  sesena,
  fuensalida,
  yuncos,
]

export { LOCALIDADES_T2 }

export const LOCALIDADES: Localidad[] = [...LOCALIDADES_T1, ...LOCALIDADES_T2]

export function getLocalidad(slug: string): Localidad | undefined {
  return LOCALIDADES.find((l) => l.slug === slug)
}

/** Clústeres geográficos para el enlazado entre localidades cercanas (Estrategia §4.3) */
export const CLUSTERS: { nombre: string; localidades: string[] }[] = [
  { nombre: "Toledo Centro", localidades: ["toledo"] },
  {
    nombre: "La Sagra Norte",
    localidades: [
      "illescas",
      "yuncos",
      "numancia-de-la-sagra",
      "ugena",
      "cabanas-de-la-sagra",
      "villaluenga-de-la-sagra",
      "recas",
      "el-viso-de-san-juan",
      "alameda-de-la-sagra",
    ],
  },
  { nombre: "La Sagra Sur", localidades: ["mocejon", "yeles", "magan", "nambroca", "palomeque"] },
  {
    nombre: "Sur Madrid",
    localidades: ["getafe", "valdemoro", "ciempozuelos", "torrejon-de-la-calzada", "grinon"],
  },
  {
    nombre: "Navalcarnero",
    localidades: ["navalcarnero", "villamanta", "moraleja-de-enmedio", "torrejon-de-velasco", "villa-del-prado"],
  },
  { nombre: "Arroyomolinos", localidades: ["arroyomolinos", "serranillos-del-valle", "cubas-de-la-sagra"] },
  {
    nombre: "Oeste Toledo",
    localidades: [
      "fuensalida",
      "bargas",
      "la-torre-de-esteban-hambran",
      "burguillos-de-toledo",
      "olias-del-rey",
      "arges",
      "cobisa",
      "camarena",
      "mentrida",
      "villamiel-de-toledo",
    ],
  },
  { nombre: "Seseña-Este", localidades: ["sesena", "esquivias", "valmojado", "casarrubios-del-monte", "carranque"] },
]
