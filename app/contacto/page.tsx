import type { Metadata } from 'next';
import ContenidoContacto from '@/components/paginas/contenido-contacto';
import StructuredData from '@/components/StructuredData';
import { withPhone } from '@/lib/seo';

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
      contact: "668 67 95 00",
      link: "tel:+34668679500",
    },
    {
      iconName: "Mail",
      title: "Escríbenos",
      description: "Te responderemos a la mayor brevedad",
      contact: "antenastoledo@yahoo.com",
      link: "mailto:antenastoledo@yahoo.com",
    },
    {
      iconName: "MapPin",
      title: "Ubicación",
      description: "Nuestra sede",
      contact: "Polígono Santa María de Benquerencia (Toledo), España",
      link: "",
    },
  ],
  faqs: [
    {
      question: "¿Cómo puedo solicitar un presupuesto?",
      answer: "Puedes solicitar un presupuesto sin compromiso a través de nuestro formulario de contacto, llamando al 668 67 95 00 o enviando un email a antenastoledo@yahoo.com. Te responderemos en menos de 24 horas con un presupuesto personalizado para tu instalación."
    },
    {
      question: "¿Cuál es el área geográfica que cubren vuestros servicios?",
      answer: "Ofrecemos nuestros servicios de telecomunicaciones en Toledo y  Sur, incluyendo todos los municipios de estas zonas. Realizamos instalaciones tanto en viviendas particulares como en comunidades y empresas."
    },
    {
      question: "¿Qué equipos y materiales utilizáis en las instalaciones?",
      answer: "Utilizamos exclusivamente equipos certificados de marcas líderes como Televes, Johansson y Fermax. Todos nuestros materiales cumplen con las normativas europeas y ofrecemos garantía en todas las instalaciones. Nuestros técnicos están certificados y utilizan herramientas profesionales de última generación."
    }
  ]
};

// Metadatos para el <head> de la página
export const metadata: Metadata = {
  title: "Contacto | Solicita Presupuesto | ☎️ 668 67 95 00 ",
  description: withPhone("Contacta con nuestro equipo de telecomunicaciones en . Presupuesto sin compromiso para antenas, porteros automáticos y cámaras de seguridad."),
  keywords: "contacto telecomunicaciones , presupuesto antenas, teléfono empresa telecomunicaciones, email telecomunicaciones, dirección empresa telecomunicaciones",
  alternates: {
    canonical: "https://antenastoledo.com/contacto",
  },
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};



// Datos estructurados para Google (Schema.org)
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Antenas Toledo",
  "image": "https://antenastoledo.com/logo-advanced-telecom.jpg",
  "telephone": "+34668679500",
  "email": "antenastoledo@yahoo.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Avenida de la Tecnología 25",
    "addressLocality": "",
    "postalCode": "28021",
    "addressCountry": "ES"
  },
  "url": "https://antenastoledo.com/contacto",
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
