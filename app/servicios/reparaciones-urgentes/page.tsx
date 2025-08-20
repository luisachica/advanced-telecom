import type { Metadata } from "next";
import ContenidoReparacionesUrgentes from "@/components/paginas/contenido-reparaciones-urgentes";
import { SERVICIOS } from "@/data/servicios";

export const metadata: Metadata = {
  title: "Reparaciones Urgentes | Advanced Telecom",
  description: "Servicio de reparaciones urgentes para telecomunicaciones. Solucionamos averías en antenas, porteros automáticos y sistemas de seguridad.",
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
    canonical: "https://www.advancedtelecom.es/servicios/reparaciones-urgentes",
  },
  openGraph: {
    title: "Reparaciones Urgentes | Advanced Telecom",
    description: "Servicio de reparaciones urgentes para telecomunicaciones. Solucionamos averías en antenas, porteros automáticos y sistemas de seguridad.",
    url: "https://advancedtelecom.es/servicios/reparaciones-urgentes",
    siteName: "Advanced Telecom",
    images: [
      {
        url: "https://advancedtelecom.es/og-image-reparaciones-urgentes.jpg",
        width: 1200,
        height: 630,
        alt: "Reparaciones Urgentes - Advanced Telecom",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function ReparacionesUrgentes() {
  // Encontrar el servicio correspondiente
  const servicio = SERVICIOS.find((s) => s.slug === "reparaciones-urgentes");
  
  // Datos del servicio
  const serviceData = {
    title: "Reparaciones Urgentes",
    slug: "reparaciones-urgentes",
    shortDescription: "Servicio rápido y eficiente para solucionar averías en sus sistemas de telecomunicaciones. Disponibles 24/7 para emergencias en toda la Comunidad de Madrid.",
    longDescription: "En Advanced Telecom entendemos que los problemas en sus sistemas de telecomunicaciones pueden causar grandes inconvenientes. Por eso, ofrecemos un servicio de reparaciones urgentes con técnicos cualificados disponibles para atender emergencias en el menor tiempo posible. Diagnosticamos y solucionamos averías en antenas, porteros automáticos, sistemas de seguridad y más, utilizando repuestos de calidad y garantizando resultados duraderos.",
    heroImage: "/images/telecom/reparaciones-urgentes.jpg",
    features: [
      {
        title: "Respuesta rápida",
        description: "Atendemos su emergencia en el menor tiempo posible, minimizando el tiempo sin servicio.",
        iconName: "Clock"
      },
      {
        title: "Técnicos cualificados",
        description: "Profesionales con amplia experiencia en la resolución de todo tipo de averías en telecomunicaciones.",
        iconName: "Users"
      },
      {
        title: "Repuestos de calidad",
        description: "Utilizamos componentes originales o equivalentes de alta calidad para garantizar reparaciones duraderas.",
        iconName: "Sparkles"
      },
      {
        title: "Garantía en reparaciones",
        description: "Todas nuestras reparaciones incluyen garantía para su tranquilidad y seguridad.",
        iconName: "Shield"
      },
    ],
    process: [
      {
        title: "Contacto de emergencia",
        description: "Llámenos o envíe un WhatsApp explicando el problema que está experimentando."
      },
      {
        title: "Diagnóstico inicial",
        description: "Realizamos un primer diagnóstico telefónico para preparar la visita técnica adecuadamente."
      },
      {
        title: "Visita técnica urgente",
        description: "Nuestros técnicos acuden a su domicilio con las herramientas y repuestos necesarios."
      },
      {
        title: "Reparación profesional",
        description: "Solucionamos la avería de forma rápida y eficiente, explicándole el origen del problema."
      },
      {
        title: "Verificación y garantía",
        description: "Comprobamos el correcto funcionamiento del sistema y le ofrecemos garantía en la reparación."
      },
    ],
    faqs: [
      {
        question: "¿Cuánto tiempo tardan en atender una emergencia?",
        answer: "Nuestro tiempo de respuesta varía según la ubicación y la carga de trabajo, pero nos comprometemos a atender emergencias en el mismo día en la mayoría de los casos. Para averías críticas, intentamos dar prioridad y acudir en las primeras horas tras su llamada."
      },
      {
        question: "¿Qué tipos de averías urgentes reparan?",
        answer: "Atendemos todo tipo de averías urgentes relacionadas con telecomunicaciones: problemas en antenas TDT, averías en antenas parabólicas, fallos en porteros automáticos, sistemas de videovigilancia caídos, interferencias severas en la señal de TV, y cualquier otra emergencia relacionada con nuestros servicios."
      },
      {
        question: "¿Cuál es el coste de una reparación urgente?",
        answer: "El coste depende del tipo de avería, los repuestos necesarios y la complejidad de la reparación. Siempre realizamos un presupuesto previo sin compromiso, detallando todos los costes para su aprobación antes de proceder con la reparación."
      },
      {
        question: "¿Trabajan los fines de semana y festivos?",
        answer: "Sí, nuestro servicio de reparaciones urgentes está disponible los 365 días del año, incluyendo fines de semana y festivos, para atender emergencias que no pueden esperar."
      },
      {
        question: "¿Qué garantía ofrecen en las reparaciones?",
        answer: "Todas nuestras reparaciones incluyen una garantía mínima de 6 meses que cubre tanto la mano de obra como los repuestos instalados. En caso de que la avería persista o reaparezca durante este periodo, acudiremos sin coste adicional."
      },
    ],
    relatedServices: [
      {
        title: "Antenas Parabólicas",
        image: "/images/telecom/antena-parabolica.jpg",
        link: "/servicios/antenas-parabolicas"
      },
      {
        title: "Antenas TDT",
        image: "/images/telecom/antena-tdt-instalacion-01.jpg",
        link: "/servicios/antenas-tdt"
      },
      {
        title: "Porteros Automáticos",
        image: "/images/telecom/portero-automatico-instalacion-01.jpg",
        link: "/servicios/porteros-automaticos"
      },
    ]
  };

  // Datos estructurados para SEO (Schema.org)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Reparaciones Urgentes",
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
    "description": "Servicio rápido y eficiente para solucionar averías en sus sistemas de telecomunicaciones. Disponibles 24/7 para emergencias en toda la Comunidad de Madrid.",
    "areaServed": {
      "@type": "City",
      "name": "Madrid"
    },
    "serviceType": "Reparación urgente de telecomunicaciones"
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
      <ContenidoReparacionesUrgentes data={serviceData} />
    </>
  );
}