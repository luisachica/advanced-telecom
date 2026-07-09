// components/schema-markup.tsx
// Schema global LocalBusiness + Service con los datos reales del negocio (lib/negocio.ts).
import { schemaGraph, schemaLocalBusiness, schemaService } from "@/lib/schema"
import { SERVICIOS } from "@/data/servicios"
import { NAV_ZONAS } from "@/data/nav"
import { NEGOCIO } from "@/lib/negocio"

export function SchemaMarkup() {
  const areaServed = NAV_ZONAS.map((z) => z.nombre)
  const schema = schemaGraph(
    schemaLocalBusiness({ areaServed }),
    ...SERVICIOS.map((s) =>
      schemaService({
        nombre: s.title,
        descripcion: s.description,
        url: `${NEGOCIO.url}/servicios/${s.slug}/`,
        areaServed,
      })
    )
  )

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
