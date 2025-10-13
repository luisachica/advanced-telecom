import type { Metadata } from "next";
import ContenidoSolucionInterferencias5G from "@/components/paginas/contenido-solucion-interferencias-5g";
import { SERVICIOS } from "@/data/servicios";

export const metadata: Metadata = {
  title: "Solución Interferencias 5G | Advanced Telecom",
  description: "Eliminamos las interferencias 5G en su señal de televisión. Servicio profesional de instalación de filtros LTE para recuperar la calidad.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: "https://www.advancedtelecom.es/servicios/solucion-interferencias-5g",
  },
  openGraph: {
    title: "Solución Interferencias 5G | Advanced Telecom",
    description: "Eliminamos las interferencias 5G en su señal de televisión. Servicio profesional de instalación de filtros LTE para recuperar la calidad.",
    url: "https://advancedtelecom.es/servicios/solucion-interferencias-5g",
    siteName: "Advanced Telecom",
    images: [
      {
        url: "https://advancedtelecom.es/og-image-solucion-interferencias-5g.jpg",
        width: 1200,
        height: 630,
        alt: "Solución Interferencias 5G - Advanced Telecom",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function SolucionInterferencias5G() {
  // Encontrar el servicio correspondiente
  const servicio = SERVICIOS.find((s) => s.slug === "solucion-interferencias-5g");
  
  // Datos del servicio
  const serviceData = {
    title: "Solución interferencias 5G",
    slug: "solucion-interferencias-5g",
    shortDescription: "Eliminamos las interferencias causadas por la red 5G en su señal de televisión. Recupere la calidad de imagen y sonido con nuestro servicio profesional de instalación de filtros LTE.",
    longDescription: "Las redes de telefonía móvil 5G pueden causar interferencias en la señal de televisión, provocando cortes, pixelaciones o pérdida total de canales. En Advanced Telecom somos especialistas en la instalación de filtros LTE que eliminan estas interferencias, permitiéndole disfrutar nuevamente de una recepción óptima en su televisor. Nuestros técnicos realizan un diagnóstico completo y aplican la solución más adecuada para cada caso particular.",
    heroImage: "/images/telecom/antena-profesional.jpg",
    features: [
      {
        title: "Diagnóstico preciso",
        description: "Análisis profesional para identificar el origen exacto de las interferencias en su señal de TV.",
        iconName: "Sparkles"
      },
      {
        title: "Filtros LTE profesionales",
        description: "Instalación de filtros de alta calidad que bloquean las frecuencias que causan interferencias.",
        iconName: "Shield"
      },
      {
        title: "Solución permanente",
        description: "Nuestras soluciones están diseñadas para funcionar a largo plazo, incluso con la expansión de redes 5G.",
        iconName: "Wrench"
      },
      {
        title: "Servicio rápido",
        description: "Resolución eficiente del problema, minimizando el tiempo sin servicio de televisión.",
        iconName: "Clock"
      },
    ],
    process: [
      {
        title: "Diagnóstico inicial",
        description: "Analizamos su instalación y realizamos mediciones para identificar el tipo y origen de las interferencias."
      },
      {
        title: "Propuesta de solución",
        description: "Determinamos el tipo de filtro LTE necesario y otras posibles mejoras en la instalación existente."
      },
      {
        title: "Instalación profesional",
        description: "Nuestros técnicos instalan los filtros y realizan los ajustes necesarios en su sistema de antena."
      },
      {
        title: "Verificación de resultados",
        description: "Comprobamos que todos los canales se reciben correctamente y que las interferencias han sido eliminadas."
      },
      {
        title: "Garantía de servicio",
        description: "Ofrecemos garantía en nuestras instalaciones y soporte técnico ante cualquier incidencia posterior."
      },
    ],
    faqs: [
      {
        question: "¿Cómo sé si tengo interferencias 5G en mi televisión?",
        answer: "Los síntomas más comunes son la pérdida repentina de canales, pixelaciones en la imagen, congelación momentánea de la pantalla o mensajes de 'sin señal'. Estos problemas suelen aparecer o empeorar después de la activación de antenas 5G cercanas a su domicilio."
      },
      {
        question: "¿El filtro LTE afecta a mi conexión móvil 5G?",
        answer: "No, el filtro LTE solo bloquea las interferencias en la señal de televisión. Su conexión móvil 5G seguirá funcionando perfectamente, ya que el filtro actúa únicamente sobre la instalación de antena de televisión."
      },
      {
        question: "¿Es necesario cambiar la antena para solucionar las interferencias?",
        answer: "En la mayoría de los casos no es necesario cambiar la antena. La instalación de un filtro LTE adecuado suele ser suficiente para eliminar las interferencias. Sin embargo, en instalaciones muy antiguas o deterioradas, podríamos recomendar actualizar algunos componentes para garantizar un resultado óptimo."
      },
      {
        question: "¿Cuánto tiempo dura la instalación del filtro LTE?",
        answer: "La instalación de un filtro LTE es relativamente rápida, generalmente entre 1 y 2 horas dependiendo de la complejidad de su instalación. Nuestros técnicos trabajan de forma eficiente para minimizar las molestias."
      },
      {
        question: "¿El filtro LTE funciona para las interferencias 5G?",
        answer: "Sí, los filtros LTE que instalamos están específicamente diseñados para eliminar interferencias de las redes 5G. Utilizamos equipos de última generación que se adaptan a las frecuencias actuales de telefonía móvil 5G."
      },
    ],
    relatedServices: [
      {
        title: "Antenas TDT",
        image: "/images/telecom/antena-tdt-instalacion-01.jpg",
        link: "/servicios/antenas-tdt"
      },
      {
        title: "Antenas Parabólicas",
        image: "/images/telecom/antena-parabolica.jpg",
        link: "/servicios/antenas-parabolicas"
      },
      {
        title: "Cámaras de Seguridad",
        image: "/images/telecom/camaras-seguridad.jpg",
        link: "/servicios/camaras-seguridad"
      },
    ]
  };

  // Datos estructurados para SEO (Schema.org)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Solución Interferencias 4G",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Advanced Telecom",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenida de la Tecnología 25",
        "addressLocality": "Madrid",
        "postalCode": "28021",
        "addressCountry": "ES"
      },
      "telephone": "+34668838415",
      "priceRange": "€€",
      "image": "https://advancedtelecom.es/logo-advanced-telecom.jpg"
    },
    "description": "Eliminamos las interferencias causadas por la red 4G/5G en su señal de televisión. Recupere la calidad de imagen y sonido con nuestro servicio profesional de instalación de filtros LTE.",
    "areaServed": {
      "@type": "City",
      "name": "Madrid"
    },
    "serviceType": "Instalación de filtros LTE"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": serviceData.faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ContenidoSolucionInterferencias5G data={serviceData} />
    </>
  );
}