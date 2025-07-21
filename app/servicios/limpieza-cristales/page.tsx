import type { Metadata } from 'next';
import ContenidoLimpiezaCristales from '@/components/paginas/contenido-limpieza-cristales';
import StructuredData from '@/components/StructuredData';

// ==================================================================
// DATOS Y SEO PARA "LIMPIEZA DE CRISTALES"
// ==================================================================

const serviceData = {
  title: "Limpieza de cristales",
  slug: "servicios/limpieza-cristales",
  description: "Servicios profesionales de limpieza de cristales para hogares y negocios en Madrid, garantizando resultados impecables y duraderos.",
  heroImage: "/images/limpieza-cristales-en-madrid.webp",
  shortDescription: "Garantizamos cristales impecables y una visibilidad perfecta para tu espacio.",
  longDescription: "Nuestro servicio de limpieza de cristales está diseñado para eliminar la suciedad, manchas y marcas de agua, dejando tus ventanas, espejos y superficies de cristal relucientes. Utilizamos técnicas avanzadas y productos especializados para asegurar un acabado sin rayas, tanto en interiores como exteriores, y en cualquier altura.",
  features: [
    { title: "Resultados impecables", description: "Cristales sin marcas ni residuos, con un brillo duradero.", iconName: "Sparkles" },
    { title: "Profesionales experimentados", description: "Equipo cualificado y con experiencia en limpieza de cristales de todo tipo y altura.", iconName: "Users" },
    { title: "Equipos especializados", description: "Utilizamos herramientas y sistemas de seguridad adecuados para cada trabajo, incluyendo trabajos en altura.", iconName: "Wrench" },
    { title: "Productos seguros", description: "Empleamos productos específicos para cristales, que son respetuosos con el medio ambiente y no dejan residuos.", iconName: "Shield" },
  ],
  process: [
    { title: "Evaluación y presupuesto", description: "Visitamos tu ubicación para evaluar el tipo y la altura de los cristales, y te ofrecemos un presupuesto ajustado." },
    { title: "Planificación del servicio", description: "Acordamos el horario que mejor se adapte a ti, minimizando cualquier interrupción." },
    { title: "Preparación y seguridad", description: "Implementamos todas las medidas de seguridad necesarias para proteger tanto a nuestro equipo como tu propiedad." },
    { title: "Limpieza profesional", description: "Nuestro equipo ejecuta la limpieza con precisión, utilizando las técnicas y productos adecuados para cada superficie." },
    { title: "Revisión final", description: "Realizamos una inspección detallada para asegurar que cada cristal esté perfectamente limpio y brillante." },
  ],
  faqs: [
    { question: "¿Qué tipos de cristales limpian?", answer: "Limpiamos todo tipo de cristales: ventanas, escaparates, espejos, mamparas, techos acristalados, fachadas de cristal y más, tanto en interiores como exteriores. Nos adaptamos a cualquier tamaño y altura." },
    { question: "¿Cómo garantizan que no queden marcas?", answer: "Utilizamos técnicas de limpieza profesionales, agua desmineralizada, herramientas específicas como raquetas y bayetas de microfibra de alta calidad, y productos anti-marcas. Nuestro personal está capacitado para asegurar un acabado impecable." },
    { question: "¿Pueden limpiar cristales de difícil acceso o en altura?", answer: "Sí, estamos equipados y certificados para realizar trabajos de limpieza de cristales en altura y de difícil acceso, utilizando pértigas, plataformas elevadoras o sistemas de descuelgue vertical, siempre bajo estrictas normas de seguridad." },
    { question: "¿Con qué frecuencia debo limpiar mis cristales?", answer: "La frecuencia ideal depende del entorno y el uso. Para negocios o zonas de alto tránsito, recomendamos limpiezas semanales o quincenales. Para hogares, cada uno o tres meses suele ser suficiente para mantenerlos brillantes." },
  ],
  testimonials: [
    { stars: 5, text: "Mis ventanas nunca estuvieron tan limpias. El equipo fue muy rápido y profesional, dejando un brillo espectacular.", name: "Ana S.", company: "Casa particular", date: "10 Abril 2024", initial: "A" },
    { stars: 5, text: "Contratamos sus servicios para la limpieza de los escaparates de nuestra tienda y el resultado es excelente. ¡Totalmente recomendados!", name: "Roberto G.", company: "Tienda de Ropa", date: "28 Marzo 2024", initial: "R" },
    { stars: 5, text: "Impresionante trabajo en los cristales de mi terraza, que estaban muy sucios. Ahora lucen como nuevos.", name: "Elena F.", company: "Apartamento", date: "5 Mayo 2024", initial: "E" },
  ],
  galleryImages: [
    { src: "/images/limpieza-cristales-en-madrid.webp", alt: "Profesional limpiando cristales de una oficina", width: 800, height: 600 },
    { src: "/images/limpieza-cristales-interior.webp", alt: "Limpieza de cristales interiores", width: 400, height: 400 },
    { src: "/images/limpieza-cristales-altura.webp", alt: "Limpieza de cristales en altura con pértiga", width: 400, height: 400 },
    { src: "/images/limpieza-cristales-empresas.webp", alt: "Limpieza de ventanas en un empresas", width: 400, height: 400 },
  ],
};

export const metadata: Metadata = {
  title: `${serviceData.title} | Limpiezas en Madrid`,
  description: serviceData.description,
  alternates: {
    canonical: `https://limpiezasenmadrid.es/${serviceData.slug}`,
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

export default function LimpiezaCristalesPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <ContenidoLimpiezaCristales data={serviceData} />
    </>
  );
}