import type { Metadata } from 'next';
import ContenidoPorterosAutomaticos from '@/components/paginas/contenido-porteros-automaticos';
import StructuredData from '@/components/StructuredData';

// ==================================================================
// DATOS Y SEO PARA "PORTEROS AUTOMÁTICOS"
// ==================================================================

const serviceData = {
  title: "Porteros Automáticos",
  slug: "servicios/porteros-automaticos",
  description: "Instalación y reparación de porteros automáticos, videoporteros y telefonillos en Madrid. Servicio técnico especializado con atención rápida.",
  heroImage: "/images/telecom/portero-automatico-instalacion-01.jpg",
  shortDescription: "Instalación y reparación de porteros automáticos, citófonos, telefonillos y vídeo porteros.",
  longDescription: "Nuestro servicio de instalación y reparación de porteros automáticos está diseñado para garantizar la seguridad y comodidad en el acceso a su vivienda o comunidad. Contamos con técnicos especializados que instalan y reparan todo tipo de sistemas: desde telefonillos básicos hasta modernos videoporteros con las últimas tecnologías. Trabajamos con las mejores marcas del mercado para asegurar la fiabilidad y durabilidad de cada instalación.",
  features: [
    { title: "Servicio integral", description: "Desde la instalación inicial hasta el mantenimiento y reparación de cualquier sistema de portero automático.", iconName: "Sparkles" },
    { title: "Técnicos certificados", description: "Profesionales con amplia experiencia en sistemas de comunicación y acceso para edificios.", iconName: "Users" },
    { title: "Equipos de calidad", description: "Trabajamos con las mejores marcas del mercado como Fermax, Tegui, Golmar y Bticino.", iconName: "Wrench" },
    { title: "Respuesta rápida", description: "Atendemos urgencias y averías en el menor tiempo posible para restaurar la seguridad de su acceso.", iconName: "Clock" },
  ],
  process: [
    { title: "Evaluación inicial", description: "Analizamos sus necesidades y las características de su edificio para recomendar el sistema más adecuado." },
    { title: "Presupuesto detallado", description: "Le ofrecemos un presupuesto claro y sin sorpresas antes de iniciar cualquier trabajo." },
    { title: "Instalación profesional", description: "Nuestros técnicos realizan la instalación con precisión, minimizando molestias y siguiendo todas las normativas." },
    { title: "Configuración y pruebas", description: "Configuramos el sistema y realizamos pruebas exhaustivas para garantizar su correcto funcionamiento." },
    { title: "Servicio post-instalación", description: "Ofrecemos soporte técnico y mantenimiento para asegurar el funcionamiento óptimo de su sistema." },
  ],
  faqs: [
    { question: "¿Cuánto tiempo tarda la instalación de un portero automático?", answer: "El tiempo de instalación varía según la complejidad del sistema y el tipo de edificio, pero generalmente se completa en 1-2 días para comunidades de vecinos y en unas horas para viviendas unifamiliares." },
    { question: "¿Puedo actualizar mi telefonillo antiguo a un videoportero?", answer: "Sí, en la mayoría de los casos es posible actualizar sistemas antiguos a nuevos videoporteros, aprovechando parte del cableado existente. Realizamos una evaluación previa para determinar la viabilidad." },
    { question: "¿Qué ventajas tiene un videoportero frente a un telefonillo convencional?", answer: "Los videoporteros ofrecen mayor seguridad al permitir ver quién llama, tienen funciones adicionales como grabación de visitas, conexión con smartphones y mayor protección contra manipulaciones." },
    { question: "¿Realizan mantenimiento de porteros automáticos?", answer: "Sí, ofrecemos servicios de mantenimiento preventivo y correctivo para todo tipo de sistemas de porteros automáticos, asegurando su funcionamiento óptimo y prolongando su vida útil." },
    { question: "¿Cuánto cuesta reparar un portero automático?", answer: "El coste de reparación depende del tipo de avería y del sistema instalado. Ofrecemos presupuestos sin compromiso tras diagnosticar el problema específico." },
  ],
  relatedServices: [
    { title: "Antenas Parabólicas", image: "/images/telecom/antena-parabolica.jpg", link: "/servicios/antenas-parabolicas" },
    { title: "Cámaras de Seguridad", image: "/images/telecom/camaras-seguridad.jpg", link: "/servicios/camaras-seguridad" },
    { title: "Antenas TDT", image: "/images/telecom/antena-tdt-instalacion-01.jpg", link: "/servicios/antenas-tdt" },
  ],
};

export const metadata: Metadata = {
  title: `${serviceData.title} | Advanced Telecom`,
  description: serviceData.description,
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

export default function PorterosAutomaticosPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <ContenidoPorterosAutomaticos data={serviceData} />
    </>
  );
}