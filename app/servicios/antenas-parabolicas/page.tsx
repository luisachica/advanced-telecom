import type { Metadata } from 'next';
import ContenidoAntenasParabolicas from '@/components/paginas/contenido-antenas-parabolicas';
import StructuredData from '@/components/StructuredData';

// ==================================================================
// DATOS Y SEO PARA "ANTENAS PARABÓLICAS"
// ==================================================================

const serviceData = {
  title: "Antenas parabólicas",
  slug: "servicios/antenas-parabolicas",
  description: "Instalación y reparación de antenas parabólicas en Madrid. Servicio técnico especializado con reorientaciones a satélites.",
  heroImage: "/images/antenas-parabolicas-madrid.webp",
  shortDescription: "Instalación y reparación de antenas parabólicas con reorientaciones a diferentes satélites.",
  longDescription: "Nuestro servicio de instalación y reparación de antenas parabólicas está diseñado para ofrecerle acceso a canales internacionales y contenido exclusivo vía satélite. Contamos con técnicos especializados que realizan instalaciones precisas y reorientaciones a diferentes satélites como Astra, Hispasat, Hotbird y más. Trabajamos con los mejores equipos para garantizar una recepción óptima de la señal satelital en cualquier condición.",
  features: [
    { title: "Instalación profesional", description: "Montaje preciso de antenas parabólicas orientadas a los satélites que necesite.", iconName: "Sparkles" },
    { title: "Técnicos especializados", description: "Profesionales con amplia experiencia en sistemas de recepción satelital.", iconName: "Users" },
    { title: "Equipos de calidad", description: "Utilizamos componentes y materiales de primeras marcas para garantizar durabilidad y rendimiento.", iconName: "Wrench" },
    { title: "Servicio de reorientación", description: "Ajustamos su antena existente para captar nuevos satélites según sus necesidades.", iconName: "Shield" },
  ],
  process: [
    { title: "Evaluación inicial", description: "Analizamos sus necesidades y las condiciones de su ubicación para determinar la mejor solución." },
    { title: "Presupuesto detallado", description: "Le ofrecemos un presupuesto claro y sin sorpresas antes de iniciar cualquier trabajo." },
    { title: "Instalación profesional", description: "Nuestros técnicos realizan la instalación con precisión, siguiendo todas las normativas de seguridad." },
    { title: "Configuración y sintonización", description: "Configuramos su receptor y sintonizamos todos los canales disponibles en los satélites seleccionados." },
    { title: "Servicio post-instalación", description: "Ofrecemos soporte técnico después de la instalación para resolver cualquier duda o incidencia." },
  ],
  faqs: [
    { question: "¿Qué satélites puedo captar con una antena parabólica?", answer: "Dependiendo de la ubicación y el tipo de instalación, se pueden captar satélites como Astra (canales alemanes, ingleses), Hispasat (canales españoles y portugueses), Hotbird (canales italianos, franceses), entre otros." },
    { question: "¿Es necesario tener una antena parabólica si ya tengo TDT?", answer: "La TDT ofrece canales nacionales y regionales, mientras que la antena parabólica permite acceder a canales internacionales y contenidos exclusivos no disponibles en la TDT." },
    { question: "¿Cuánto espacio necesito para instalar una antena parabólica?", answer: "El espacio necesario depende del tamaño de la antena, pero generalmente se requiere un área despejada con buena visibilidad hacia el sur para la mayoría de los satélites." },
    { question: "¿Puedo instalar una antena parabólica en un piso alquilado?", answer: "Generalmente sí, pero es recomendable consultar con el propietario o la comunidad de vecinos, ya que pueden existir normativas específicas al respecto." },
    { question: "¿Cuánto cuesta instalar una antena parabólica?", answer: "El precio varía según factores como el tipo de antena, la complejidad de la instalación y los materiales necesarios. Ofrecemos presupuestos personalizados sin compromiso." },
  ],
  relatedServices: [
    { title: "Antenas TDT", image: "/images/telecom/antena-tdt-instalacion-01.jpg", link: "/servicios/antenas-tdt" },
    { title: "Cámaras de seguridad", image: "/images/telecom/camaras-seguridad.jpg", link: "/servicios/camaras-seguridad" },
    { title: "Porteros automáticos", image: "/images/telecom/portero-automatico-instalacion-01.jpg", link: "/servicios/porteros-automaticos" },
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

export default function AntenasParabolicasPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <ContenidoAntenasParabolicas data={serviceData} />
    </>
  );
}