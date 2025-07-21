import type { Metadata } from 'next';
import ContenidoLimpiezaEmpresas from '@/components/paginas/contenido-limpieza-empresas';
import StructuredData from '@/components/StructuredData';

// ==================================================================
// DATOS Y SEO PARA "LIMPIEZA DE EMPRESAS"
// ==================================================================

const serviceData = {
  title: "Limpieza de empresas",
  slug: "servicios/limpieza-empresas",
  description: "Servicios profesionales de limpieza integral para todo tipo de empresas en Madrid. Creamos entornos de trabajo impecables y productivos.",
  heroImage: "/images/limpieza-empresas-madrid.webp",
  shortDescription: "Creamos un ambiente de trabajo impecable y saludable que impulsa la productividad y la imagen de tu negocio.",
  longDescription: "Nuestro servicio de limpieza de empresas está diseñado para ofrecer soluciones integrales de higiene y mantenimiento a todo tipo de negocios, desde pequeñas oficinas hasta grandes corporaciones o naves industriales. Entendemos la importancia de un entorno de trabajo limpio y profesional, por lo que utilizamos técnicas avanzadas, equipos de última generación y productos de alta calidad para garantizar resultados excepcionales y una imagen impecable para tu empresa.",
  features: [
    { title: "Servicio integral", description: "Cubrimos todas las áreas y necesidades de limpieza de tu negocio, adaptándonos a su actividad.", iconName: "Sparkles" },
    { title: "Personal cualificado", description: "Nuestro equipo está formado por profesionales experimentados y de confianza, especializados en limpieza corporativa.", iconName: "Users" },
    { title: "Horarios flexibles", description: "Nos adaptamos a sus operaciones para minimizar interrupciones, ofreciendo limpieza diurna, nocturna o en fines de semana.", iconName: "Clock" },
    { title: "Seguridad y sostenibilidad", description: "Utilizamos productos seguros para el personal y el medio ambiente, cumpliendo con todas las normativas.", iconName: "Shield" },
  ],
  process: [
    { title: "Análisis y diagnóstico", description: "Realizamos una visita para entender las características de su empresa y sus requisitos de limpieza." },
    { title: "Propuesta personalizada", description: "Elaboramos un plan de limpieza detallado y un presupuesto competitivo, sin compromiso." },
    { title: "Implementación del servicio", description: "Asignamos el equipo y los recursos necesarios para comenzar el servicio de forma eficiente." },
    { title: "Ejecución profesional", description: "Nuestro equipo lleva a cabo la limpieza siguiendo los protocolos establecidos y con la máxima discreción." },
    { title: "Supervisión continua", description: "Garantizamos la calidad del servicio mediante controles regulares y comunicación constante con usted." },
  ],
  faqs: [
    { question: "¿Qué tipo de empresas limpian?", answer: "Ofrecemos servicios de limpieza para una amplia gama de empresas, incluyendo oficinas, locales comerciales, clínicas, despachos profesionales, naves industriales, gimnasios, centros educativos y más. Adaptamos el servicio a las particularidades de cada sector." },
    { question: "¿Pueden adaptarse a los horarios de mi empresa?", answer: "Absolutamente. La flexibilidad horaria es una de nuestras prioridades. Podemos realizar la limpieza durante el horario laboral, fuera de él, por las noches o los fines de semana, según lo que mejor se ajuste a la operativa de su empresa." },
    { question: "¿Proporcionan los materiales y productos de limpieza?", answer: "Sí, todos los productos, materiales y maquinaria necesarios para llevar a cabo el servicio de limpieza están incluidos en nuestro presupuesto. Utilizamos productos de calidad profesional, ecológicos y seguros." },
    { question: "¿Ofrecen servicios adicionales como limpieza de cristales o moquetas?", answer: "Sí, además de la limpieza general, ofrecemos servicios complementarios como limpieza de cristales en altura, limpieza de moquetas y tapicerías, tratamientos de suelos, desinfección avanzada y limpieza fin de obra. Puede consultar todas nuestras opciones al solicitar su presupuesto." },
  ],
  testimonials: [
    { stars: 5, text: "El servicio de limpieza de nuestra empresa es impecable. Los empleados notan la diferencia y el ambiente de trabajo es mucho más agradable.", name: "Javier R.", company: "Directora de RRHH, Tech Solutions", date: "18 Mayo 2024", initial: "J" },
    { stars: 5, text: "Profesionalismo y eficiencia son la clave de esta empresa. Han sabido adaptarse a nuestras necesidades específicas y siempre responden rápidamente.", name: "María L.", company: "Gerente de Operaciones, Retail Express", date: "02 Junio 2024", initial: "M" },
    { stars: 5, text: "La limpieza de nuestra nave industrial es un desafío, pero ellos lo manejan a la perfección. Equipo serio y comprometido.", name: "Fernando P.", company: "Jefe de Producción, Logística Avanzada", date: "29 Abril 2024", initial: "F" },
  ],
  galleryImages: [
    { src: "/limpieza-empresas-madrid.webp", alt: "Equipo de limpieza profesional en una oficina moderna", width: 800, height: 600 },
    { src: "/images/limpieza-oficinas-general.webp", alt: "Limpieza profunda de áreas de trabajo en empresa", width: 400, height: 400 },
    { src: "/images/limpieza-corporativa.webp", alt: "Limpieza de áreas comunes en un edificio corporativo", width: 400, height: 400 },
    { src: "/images/limpieza-recepcion-empresa.webp", alt: "Limpieza de la zona de recepción de una empresa", width: 400, height: 400 },
  ],
};

export const metadata: Metadata = {
  title: `${serviceData.title} | Limpiezas en Madrid`,
  description: serviceData.description,
  alternates: {
    canonical: `https://www.limpiezasenmadrid.es/${serviceData.slug}`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: serviceData.title,
    description: serviceData.description,
    url: `https://www.limpiezasenmadrid.es/${serviceData.slug}`,
    images: [{ url: `https://www.limpiezasenmadrid.es${serviceData.heroImage}`, width: 1200, height: 630 }],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceData.title,
  "description": serviceData.longDescription,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Limpiezas en Madrid",
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

export default function LimpiezaEmpresasPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <ContenidoLimpiezaEmpresas data={serviceData} />
    </>
  );
}