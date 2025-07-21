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
      contact: "611 174 552",
      link: "tel:611174552",
    },
    {
      iconName: "Mail",
      title: "Escríbenos",
      description: "Te responderemos a la mayor brevedad",
      contact: "contacto@limpiezasenmadrid.es",
      link: "mailto:contacto@limpiezasenmadrid.es",
    },
    {
      iconName: "MapPin",
      title: "Visítanos",
      description: "Nuestras oficinas en Madrid",
      contact: "Calle Velázquez 59 – 28001 Madrid",
      link: "https://maps.google.com/?q=Calle+Velazquez+59+28001+Madrid",
    },
  ],
  faqs: [
    {
      question: "¿Cómo puedo solicitar un presupuesto?",
      answer: "Puedes solicitar un presupuesto sin compromiso a través de nuestro formulario de contacto, llamando al 611 174 552 o enviando un email a contacto@limpiezasenmadrid.es. Te responderemos en menos de 24 horas con un presupuesto personalizado."
    },
    {
      question: "¿Cuál es el área geográfica que cubren vuestros servicios?",
      answer: "Ofrecemos nuestros servicios de limpieza en toda la Comunidad de Madrid, incluyendo la capital y municipios cercanos. Si tienes dudas sobre si tu ubicación está dentro de nuestra área de servicio, no dudes en contactarnos."
    },
    {
      question: "¿Proporcionáis los productos y equipos de limpieza?",
      answer: "Sí, nosotros proporcionamos todos los productos y equipos necesarios para realizar el servicio de limpieza. Utilizamos productos profesionales de alta calidad y respetuosos con el medio ambiente. Si prefieres que utilicemos productos específicos, podemos adaptarnos a tus necesidades."
    }
  ]
};

// Metadatos para el <head> de la página
export const metadata: Metadata = {
  title: "Contacto | Solicita Presupuesto | Limpiezas en Madrid",
  description: "Contacta con nuestro equipo de limpieza profesional en Madrid. Solicita un presupuesto sin compromiso para servicios de empresas, oficinas y comunidades.",
  keywords: "contacto limpieza madrid, presupuesto limpieza, teléfono empresa limpieza, email limpieza, dirección empresa limpieza",
  alternates: {
    canonical: "https://www.limpiezasenmadrid.es/contacto",
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
  "name": "Limpiezas en Madrid",
  "image": "https://www.limpiezasenmadrid.es/logo.png",
  "telephone": "+34611174552",
  "email": "contacto@limpiezasenmadrid.es",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Velázquez 59",
    "addressLocality": "Madrid",
    "postalCode": "28001",
    "addressCountry": "ES"
  },
  "url": "https://www.limpiezasenmadrid.es/contacto",
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