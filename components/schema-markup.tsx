export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Limpiezas en Madrid",
    image: "https://www.limpiezasenmadrid.com/cleaning-logo.png",
    url: "https://www.limpiezasenmadrid.com",
    telephone: "611174552",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Calle Principal 123",
      addressLocality: "Madrid",
      postalCode: "28001",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 40.4168,
      longitude: -3.7038,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    sameAs: [
      "https://www.facebook.com/limpiezasenmadrid",
      "https://www.instagram.com/limpiezasenmadrid",
      "https://twitter.com/limpiezasmadrid",
    ],
    priceRange: "€€",
    servesCuisine: "Servicios de limpieza",
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Servicios de limpieza",
    provider: {
      "@type": "LocalBusiness",
      name: "Limpiezas en Madrid",
    },
    areaServed: {
      "@type": "City",
      name: "Madrid",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de limpieza",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Limpieza de hogar",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Limpieza de oficinas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Limpieza de comunidades",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Limpieza fin de obra",
          },
        },
      ],
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
    </>
  )
}
