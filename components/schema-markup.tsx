export function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Advanced Telecom Madrid",
    image: "https://advancedtelecom.es/telecom-logo.png",
    url: "https://advancedtelecom.es",
    telephone: "+34668838415",
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
      "https://www.facebook.com/advancedtelecom",
      "https://www.instagram.com/advancedtelecom",
      "https://twitter.com/advancedtelecom",
    ],
    priceRange: "€€",
    servesCuisine: "Servicios de telecomunicaciones",
  }

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Servicios de telecomunicaciones",
    provider: {
      "@type": "LocalBusiness",
      name: "Advanced Telecom Madrid",
    },
    areaServed: {
      "@type": "City",
      name: "Madrid",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de telecomunicaciones",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Instalación de antenas parabólicas",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Instalación de cámaras de seguridad",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Instalación de porteros automáticos",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Reparaciones urgentes de telecomunicaciones",
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
