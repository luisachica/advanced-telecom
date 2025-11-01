import type { Metadata } from 'next';
import ContenidoAntenasTDT from '@/components/paginas/contenido-antenas-tdt';
import StructuredData from '@/components/StructuredData';

// ==================================================================
// DATOS Y SEO PARA "ANTENAS TDT"
// ==================================================================

const serviceData = {
  title: "Antenas TDT",
  slug: "servicios/antenas-tdt",
  description: "Instalación y reparación de antenas TDT en Madrid. Servicio técnico especializado con atención el mismo día.",
  heroImage: "/images/telecom/antena-tdt-instalacion-01.jpg",
  shortDescription: "Instalación y reparación de antenas de televisión TDT - HD - 4K con reparaciones en el mismo día.",
  longDescription: "Nuestro servicio de instalación y reparación de antenas TDT está diseñado para garantizar la mejor calidad de señal en su televisor. Contamos con técnicos especializados que diagnostican y solucionan cualquier problema con su antena, desde la pérdida de canales hasta la instalación completa de nuevos sistemas. Trabajamos con equipos de última generación para asegurar una recepción óptima de la señal digital terrestre en cualquier condición.",
  features: [
    { title: "Servicio rápido", description: "Atención el mismo día para solucionar sus problemas de señal sin largas esperas.", iconName: "Clock" },
    { title: "Técnicos certificados", description: "Profesionales con amplia experiencia en instalación y reparación de sistemas de antenas TDT.", iconName: "Users" },
    { title: "Equipos de calidad", description: "Utilizamos componentes y materiales de primeras marcas para garantizar durabilidad y rendimiento.", iconName: "Wrench" },
    { title: "Garantía en el servicio", description: "Todos nuestros trabajos cuentan con garantía para su tranquilidad y satisfacción.", iconName: "Shield" },
  ],
  process: [
    { title: "Diagnóstico inicial", description: "Evaluamos el estado de su instalación actual o las necesidades para una nueva instalación." },
    { title: "Presupuesto sin compromiso", description: "Le ofrecemos un presupuesto detallado y transparente antes de iniciar cualquier trabajo." },
    { title: "Instalación o reparación", description: "Nuestros técnicos realizan el trabajo con precisión, siguiendo todas las normativas de seguridad." },
    { title: "Configuración y pruebas", description: "Configuramos su televisor y realizamos pruebas exhaustivas para asegurar la correcta recepción de todos los canales." },
    { title: "Seguimiento post-servicio", description: "Nos mantenemos disponibles para resolver cualquier duda o incidencia posterior al servicio." },
  ],
  faqs: [
    { question: "¿Cuánto tiempo tarda la instalación de una antena TDT?", answer: "El tiempo de instalación varía según la complejidad, pero generalmente se completa en 2-4 horas para instalaciones estándar." },
    { question: "¿Qué hago si pierdo canales en mi televisor?", answer: "La pérdida de canales puede deberse a diversos factores como desajustes en la antena, problemas con el amplificador o cambios en las frecuencias de emisión. Nuestros técnicos pueden diagnosticar y solucionar el problema rápidamente." },
    { question: "¿Ofrecen garantía en sus servicios?", answer: "Sí, todos nuestros trabajos de instalación y reparación cuentan con garantía. La duración depende del tipo de servicio realizado." },
    { question: "¿Trabajan con comunidades de vecinos?", answer: "Sí, tenemos amplia experiencia en instalaciones colectivas para comunidades de vecinos, ofreciendo soluciones adaptadas a las necesidades específicas de cada edificio." },
    { question: "¿Cuánto cuesta instalar una antena TDT?", answer: "El precio varía según factores como el tipo de antena, la complejidad de la instalación y los materiales necesarios. Ofrecemos presupuestos personalizados sin compromiso." },
  ],
  relatedServices: [
    { title: "Antenas Parabólicas", image: "/images/telecom/antena-parabolica.jpg", link: "/servicios/antenas-parabolicas" },
    { title: "Porteros Automáticos", image: "/images/telecom/portero-automatico-instalacion-01.jpg", link: "/servicios/porteros-automaticos" },
    { title: "Cámaras de Seguridad", image: "/images/telecom/camaras-seguridad.jpg", link: "/servicios/camaras-seguridad" },
  ],
};

export const metadata: Metadata = {
  title: `${serviceData.title} | Advanced Telecom`,
  description: serviceData.description,
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
    },
  },
  alternates: {
    canonical: `https://www.advancedtelecom.es/${serviceData.slug}`,
  },
  openGraph: {
    title: serviceData.title,
    description: serviceData.description,
    url: `https://www.advancedtelecom.es/${serviceData.slug}`,
    images: [{ url: `https://www.advancedtelecom.es${serviceData.heroImage}`, width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceData.title,
  "description": serviceData.longDescription,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Advanced Telecom",
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": serviceData.faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": { "@type": "Answer", "text": faq.answer }
  }))
};

export default function AntenasTDTPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <ContenidoAntenasTDT data={serviceData} />
    </>
  );
}