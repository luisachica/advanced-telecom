import type { Metadata } from 'next';
import ContenidoContacto from '@/components/paginas/contenido-contacto';
import StructuredData from '@/components/StructuredData';

// ==================================================================
// DATOS Y SEO PARA LA PÁGINA DE CONTACTO
// ==================================================================

// Centralizamos los datos de contacto y FAQs para mantener el código limpio.
const contactData = {
  infoCards: [
    {
      iconName: "Phone",
      title: "Llámanos",
      description: "Nuestro equipo está disponible para atenderte",
      contact: "668 83 84 15",
      link: "tel:668838415",
    },
    {
      iconName: "Mail",
      title: "Escríbenos",
      description: "Te responderemos a la mayor brevedad",
      contact: "info@advancedtelecom.es",
      link: "mailto:info@advancedtelecom.es",
    },
    {
      iconName: "MapPin",
      title: "Ubicación",
      contact: "Ubicados en Toledo y Madrid Sur",
      link: "https://maps.google.com/?q=Avenida+de+la+Tecnologia+25+28021+Madrid",
    },
  ],
  faqs: [
    {
      question: "¿Cómo puedo solicitar un presupuesto?",
      answer: "Puedes solicitar un presupuesto sin compromiso a través de nuestro formulario de contacto, llamando al 668 83 84 15 o enviando un email a info@advancedtelecom.es. Te responderemos en menos de 24 horas con un presupuesto personalizado para tu instalación."
    },
    {
      question: "¿Cuál es el área geográfica que cubren vuestros servicios?",
      answer: "Ofrecemos nuestros servicios de telecomunicaciones en Toledo y Madrid Sur, incluyendo todos los municipios de estas zonas. Realizamos instalaciones tanto en viviendas particulares como en comunidades y empresas."
    },
    {
      question: "¿Qué equipos y materiales utilizáis en las instalaciones?",
      answer: "Utilizamos exclusivamente equipos certificados de marcas líderes como Televes, Johansson y Fermax. Todos nuestros materiales cumplen con las normativas europeas y ofrecemos garantía en todas las instalaciones. Nuestros técnicos están certificados y utilizan herramientas profesionales de última generación."
    }
  ]
};

// Metadatos para el <head> de la página
export const metadata: Metadata = {
  title: "Contacto | Solicita Presupuesto | Advanced Telecom Madrid",
  description: "Contacta con nuestro equipo de telecomunicaciones profesional en Madrid. Solicita un presupuesto sin compromiso para antenas, porteros automáticos y sistemas de seguridad.",
  keywords: "contacto telecomunicaciones madrid, presupuesto antenas, teléfono empresa telecomunicaciones, email telecomunicaciones, dirección empresa telecomunicaciones",
  alternates: {
    canonical: "https://www.advancedtelecom.es/contacto",
  },
  robots: {
    index: true,
    follow: true,
  },
};



// Datos estructurados para Google (Schema.org)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Advanced Telecom",
  "image": "https://www.advancedtelecom.es/logo-advanced-telecom.jpg",
  "telephone": "+34668838415",
  "email": "info@advancedtelecom.es",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avenida de la Tecnología 25",
    "addressLocality": "Madrid",
    "postalCode": "28021",
    "addressCountry": "ES"
  },
  "url": "https://www.advancedtelecom.es/contacto",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": contactData.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

// ==================================================================
// COMPONENTE DE PÁGINA
// ==================================================================
export default function ContactoPage() {
  return (
    <>
      <StructuredData data={localBusinessSchema} />
      <StructuredData data={faqSchema} />
      <ContenidoContacto data={contactData} />
    </>
  );
}