import type { Metadata } from "next";
import ContenidoCamarasSeguridad from "@/components/paginas/contenido-camaras-seguridad";
import { SERVICIOS } from "@/data/servicios";

export const metadata: Metadata = {
  title: "Cámaras de Seguridad | Advanced Telecom",
  description: "Instalación y mantenimiento de cámaras de seguridad para hogares y empresas. Sistemas de videovigilancia profesionales con tecnología avanzada.",
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
    canonical: "https://www.advancedtelecom.es/servicios/camaras-seguridad",
  },
  openGraph: {
    title: "Cámaras de Seguridad | Advanced Telecom",
    description: "Instalación y mantenimiento de cámaras de seguridad para hogares y empresas. Sistemas de videovigilancia profesionales con tecnología avanzada.",
    url: "https://advancedtelecom.es/servicios/camaras-seguridad",
    siteName: "Advanced Telecom",
    images: [
      {
        url: "https://advancedtelecom.es/og-image-camaras-seguridad.jpg",
        width: 1200,
        height: 630,
        alt: "Cámaras de Seguridad - Advanced Telecom",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
};

export default function CamarasSeguridad() {
  // Encontrar el servicio correspondiente
  const servicio = SERVICIOS.find((s) => s.slug === "camaras-seguridad");
  
  // Datos del servicio
  const serviceData = {
    title: "Cámaras de Seguridad",
    slug: "camaras-seguridad",
    shortDescription: "Instalación y mantenimiento de sistemas de videovigilancia profesionales para hogares y empresas. Proteja su propiedad con tecnología de última generación.",
    longDescription: "Ofrecemos soluciones completas de videovigilancia adaptadas a sus necesidades específicas. Nuestros sistemas de cámaras de seguridad proporcionan vigilancia continua, grabación de alta calidad y acceso remoto desde su smartphone o tablet. Trabajamos con las mejores marcas del mercado para garantizar un rendimiento óptimo y duradero.",
    heroImage: "/images/telecom/camaras-seguridad.jpg",
    features: [
      {
        title: "Cámaras IP HD",
        description: "Sistemas de alta definición con resolución 1080p o 4K para una imagen nítida y detallada.",
        iconName: "Camera"
      },
      {
        title: "Visión nocturna",
        description: "Tecnología infrarroja que permite la vigilancia continua incluso en condiciones de poca luz.",
        iconName: "Sparkles"
      },
      {
        title: "Grabación inteligente",
        description: "Sistemas que activan la grabación por detección de movimiento, ahorrando espacio de almacenamiento.",
        iconName: "Shield"
      },
      {
        title: "Acceso remoto",
        description: "Visualización en tiempo real desde cualquier dispositivo móvil o computadora.",
        iconName: "Wifi"
      },
    ],
    process: [
      {
        title: "Evaluación de necesidades",
        description: "Analizamos su propiedad y sus requisitos específicos para diseñar un sistema de seguridad a medida."
      },
      {
        title: "Propuesta personalizada",
        description: "Presentamos un proyecto detallado con las mejores opciones de equipos y ubicaciones estratégicas."
      },
      {
        title: "Instalación profesional",
        description: "Nuestros técnicos realizan la instalación minimizando el impacto estético y optimizando la cobertura."
      },
      {
        title: "Configuración y formación",
        description: "Configuramos el sistema y le enseñamos a utilizar todas sus funcionalidades de manera sencilla."
      },
      {
        title: "Servicio postventa",
        description: "Ofrecemos mantenimiento y soporte técnico para garantizar el funcionamiento óptimo de su sistema."
      },
    ],
    faqs: [
      {
        question: "¿Qué tipos de cámaras de seguridad ofrecen?",
        answer: "Ofrecemos una amplia gama de cámaras de seguridad, incluyendo cámaras IP, analógicas HD, cámaras con visión nocturna, cámaras PTZ (con movimiento), cámaras térmicas y cámaras ocultas. Cada tipo tiene sus ventajas específicas según las necesidades de seguridad."
      },
      {
        question: "¿Puedo ver las cámaras desde mi teléfono móvil?",
        answer: "Sí, todos nuestros sistemas de videovigilancia incluyen aplicaciones móviles que permiten visualizar las cámaras en tiempo real desde cualquier lugar, recibir notificaciones de alertas y revisar grabaciones anteriores, todo desde su smartphone o tablet."
      },
      {
        question: "¿Cuánto tiempo se guardan las grabaciones?",
        answer: "El tiempo de almacenamiento depende de la capacidad del disco duro instalado y de la configuración del sistema. Podemos configurar sistemas que guarden desde varios días hasta varios meses de grabación, según sus necesidades específicas."
      },
      {
        question: "¿Las cámaras funcionan si se va la luz?",
        answer: "Podemos instalar sistemas con baterías de respaldo (SAI/UPS) que mantienen el funcionamiento de las cámaras durante cortes eléctricos. También existen opciones de cámaras con baterías integradas para ubicaciones sin acceso a electricidad."
      },
      {
        question: "¿Es legal instalar cámaras de seguridad en mi propiedad?",
        answer: "Sí, es legal instalar cámaras en su propiedad privada. Sin embargo, existen normativas sobre la grabación en espacios públicos o que afecten a terceros. Nuestros técnicos le asesorarán sobre la ubicación correcta de las cámaras para cumplir con la legislación vigente en materia de protección de datos."
      },
    ],
    relatedServices: [
      {
        title: "Antenas Parabólicas",
        image: "/images/telecom/antena-parabolica.jpg",
        link: "/servicios/antenas-parabolicas"
      },
      {
        title: "Porteros Automáticos",
        image: "/images/telecom/portero-automatico-instalacion-01.jpg",
        link: "/servicios/porteros-automaticos"
      },
      {
        title: "Antenas TDT",
        image: "/images/telecom/antena-tdt-instalacion-01.jpg",
        link: "/servicios/antenas-tdt"
      },
    ]
  };

  // Datos estructurados para SEO (Schema.org)
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Cámaras de Seguridad",
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
    "description": "Instalación y mantenimiento de sistemas de videovigilancia profesionales para hogares y empresas. Proteja su propiedad con tecnología de última generación.",
    "areaServed": {
      "@type": "City",
      "name": "Madrid"
    },
    "serviceType": "Instalación de cámaras de seguridad"
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
      <ContenidoCamarasSeguridad data={serviceData} />
    </>
  );
}