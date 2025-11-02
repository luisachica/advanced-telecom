import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://advancedtelecom.es"

  // Todos los municipios con antenistas
  const municipios = [
    'alameda-de-la-sagra',
    'anover-del-tajo',
    'arcicollar',
    'bargas',
    'batres',
    'borox',
    'burguillos-de-toledo',
    'cabanas-de-la-sagra',
    'calypo-fado',
    'camarena',
    'carranque',
    'casarrubios-del-monte',
    'casarrubuelos',
    'cedillo-del-condado',
    'chozas-de-canales',
    'ciempozuelos',
    'cigarales',
    'cobeja',
    'cobisa',
    'coto-del-zagal',
    'cubas-de-la-sagra',
    'el-alamo',
    'el-quinon',
    'el-viso-de-san-juan',
    'fuensalida',
    'getafe',
    'grinon',
    'illescas',
    'las-ventas-de-retamosa',
    'la-torre-de-esteban-hambran',
    'layos',
    'lominchar',
    'los-cisneros',
    'los-palominos',
    'los-pozuelos',
    'los-pradillos',
    'magan',
    'mentrida',
    'mocejon',
    'montesion',
    'moraleja-de-enmedio',
    'mostoles',
    'nambroca',
    'nuevo-borox',
    'numancia-de-la-sagra',
    'olias-del-rey',
    'pinar-de-villeriche',
    'recas',
    'renta-de-la-casa',
    'santa-cruz-del-retamar',
    'senorio-de-illescas',
    'serranillos-del-valle',
    'sesena',
    'sesena-viejo',
    'talavera-de-la-reina',
    'toledo',
    'torrecastillo',
    'torrejon-de-la-calzada',
    'torrejon-de-velasco',
    'valdemoro',
    'valmojado',
    'valparaiso',
    'villaluenga-de-la-sagra',
    'villamanta',
    'villamiel-de-toledo',
    'villanueva-de-la-sagra',
    'yeles',
    'yuncler',
    'yunclillos',
    'yuncos'
  ]

  // Servicios específicos
  const servicios = [
    'antenas-tdt',
    'antenas-parabolicas',
    'camaras-seguridad',
    'porteros-automaticos',
    'reparaciones-urgentes',
    'solucion-interferencias-5g'
  ]

  // Páginas especiales con prefijo "en-"
  const municipiosEspeciales = [
    'aldea-del-fresno',
    'arroyomolinos',
    'calalberche',
    'esquivias',
    'navalcarnero',
    'villa-del-prado'
  ]

  // Páginas con prefijo "tecnico-antenista-"
  const municipiosTecnico = [
    'palomeque',
    'pantoja'
  ]

  const municipioUrls = municipios.map(municipio => ({
    url: `${baseUrl}/antenista-${municipio}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const municipioEspecialUrls = municipiosEspeciales.map(municipio => ({
    url: `${baseUrl}/antenista-en-${municipio}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const municipioTecnicoUrls = municipiosTecnico.map(municipio => ({
    url: `${baseUrl}/tecnico-antenista-${municipio}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  const servicioUrls = servicios.map(servicio => ({
    url: `${baseUrl}/servicios/${servicio}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/servicios/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/quienes-somos/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contacto/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/politica-de-cookies/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/politica-de-privacidad/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terminos-condiciones/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/antenista-de-confianza-en-toledo-y-madrid-sur/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...servicioUrls,
    ...municipioUrls,
    ...municipioEspecialUrls,
    ...municipioTecnicoUrls,
  ]
}
