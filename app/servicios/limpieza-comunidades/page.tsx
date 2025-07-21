import type { Metadata } from 'next';
import ContenidoLimpiezaComunidades from '@/components/paginas/contenido-limpieza-comunidades';
import StructuredData from '@/components/StructuredData';

// ==================================================================
// DATOS Y SEO
// ==================================================================

const serviceData = {
  title: "Limpieza de comunidades",
  slug: "servicios/limpieza-comunidades", // He añadido el slug para usarlo después
  description: "Servicios profesionales de limpieza para comunidades de vecinos y edificios residenciales en Madrid.",
  heroImage: "/images/limpieza-comunidades-madrid.webp",
  iconName: "Building2",
  shortDescription: "Mantenemos las zonas comunes de tu comunidad impecables y acogedoras para todos los vecinos.",
  longDescription: "Nuestro servicio de limpieza de comunidades de vecinos está diseñado para garantizar la higiene y el mantenimiento óptimo de todas las áreas comunes. Contamos con personal cualificado y utilizamos productos y técnicas específicas para cada superficie, asegurando un ambiente limpio, saludable y agradable para todos los residentes.",
  features: [
    { title: "Higiene garantizada", description: "Limpieza profunda y desinfección de todas las áreas para un ambiente saludable.", iconName: "Sparkles" },
    { title: "Personal de confianza", description: "Equipo profesional, discreto y con experiencia en entornos residenciales.", iconName: "Users" },
    { title: "Flexibilidad de horarios", description: "Nos adaptamos a las necesidades de tu comunidad para realizar la limpieza en el mejor momento.", iconName: "Clock" },
    { title: "Productos ecológicos", description: "Utilizamos productos respetuosos con el medio ambiente y seguros para la salud de los vecinos y mascotas.", iconName: "Shield" },
  ],
  process: [
    { title: "Inspección y evaluación", description: "Visitamos tu comunidad para evaluar las necesidades específicas y diseñar un plan de limpieza personalizado." },
    { title: "Presupuesto a medida", description: "Te proporcionamos un presupuesto detallado y transparente, sin compromiso, con todos los servicios incluidos." },
    { title: "Asignación de equipo", description: "Un equipo de profesionales habitual se encargará de la limpieza para asegurar consistencia y familiaridad con la comunidad." },
    { title: "Ejecución del servicio", description: "Nuestro equipo realiza la limpieza siguiendo el plan acordado, con la máxima eficiencia y atención al detalle." },
    { title: "Seguimiento y calidad", description: "Mantenemos una comunicación constante con la comunidad y realizamos controles de calidad periódicos." },
  ],
  faqs: [
    { question: "¿Qué áreas comunes incluyen en la limpieza?", answer: "Nuestro servicio de limpieza de comunidades incluye portales, escaleras, pasillos, ascensores, buzones, puertas de acceso, barandillas, zonas de recreo infantil, garajes, cuartos de contadores, y cualquier otra zona común que la comunidad solicite." },
    { question: "¿Proporcionan los productos y la maquinaria necesaria?", answer: "Sí, nosotros nos encargamos de suministrar todos los productos de limpieza de alta calidad, desinfectantes y la maquinaria profesional necesaria para realizar el servicio de manera eficiente, todo incluido en el presupuesto." },
    { question: "¿Con qué frecuencia recomiendan la limpieza?", answer: "La frecuencia ideal varía según el tamaño de la comunidad y el tránsito. Ofrecemos desde limpiezas diarias hasta semanales o quincenales. Realizamos un estudio previo para recomendar la frecuencia más adecuada para su edificio." },
    { question: "¿Tienen seguro de responsabilidad civil?", answer: "Sí, contamos con un seguro de responsabilidad civil que cubre cualquier eventualidad o daño que pudiera ocurrir durante la prestación de nuestros servicios, brindando total tranquilidad a la comunidad." },
  ],
  testimonials: [
    { stars: 5, text: "La limpieza en nuestra comunidad ha mejorado muchísimo desde que contratamos sus servicios. El portal siempre está impecable.", name: "Vecinos de C/Sol, 15", company: "Comunidad de Propietarios", date: "12 Abril 2024", initial: "V" },
    { stars: 5, text: "Muy profesionales y se adaptan perfectamente a nuestros horarios. La comunicación con ellos es excelente.", name: "Administrador de Fincas García", company: "Administración de Fincas", date: "20 Marzo 2024", initial: "A" },
    { stars: 5, text: "Estamos muy contentos con el servicio. El equipo de limpieza es muy atento y cuidadoso con los detalles.", name: "Presidente de C/Luna, 22", company: "Comunidad de Propietarios", date: "03 Mayo 2024", initial: "P" },
  ],
  galleryImages: [
    { src: "/limpieza-comunidades-madrid.webp", alt: "Limpieza de portal en comunidad", width: 800, height: 600 },
    { src: "/images/limpieza-escaleras-comunidad.webp", alt: "Limpieza de escaleras en edificio", width: 400, height: 400 },
    { src: "/images/limpieza-ascensor.webp", alt: "Limpieza de ascensor en comunidad", width: 400, height: 400 },
    { src: "/images/limpieza-garaje-comunidad.webp", alt: "Limpieza de garaje en comunidad", width: 400, height: 400 },
  ],
};

// Objeto de metadatos actualizado y completo
export const metadata: Metadata = {
  title: `${serviceData.title} | Limpiezas en Madrid`,
  description: serviceData.description,
  
  // CORRECCIÓN 1: URL Canónica
  alternates: {
    canonical: `https://limpiezasenmadrid.es/${serviceData.slug}`,
  },
  
  // CORRECCIÓN 2: Robots (para permitir la indexación)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  // MEJORA: Metadatos para redes sociales
  openGraph: {
    title: serviceData.title,
    description: serviceData.description,
    url: `https://www.limpiezasenmadrid.es/servicios/${serviceData.slug}`,
    images: [
      {
        url: `https://www.limpiezasenmadrid.es${serviceData.heroImage}`,
        width: 1200,
        height: 630,
      },
    ],
  },
};

// Datos estructurados para Google (Schema.org)
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceData.title,
  "description": serviceData.longDescription,
  "provider": {
    "@type": "LocalBusiness",
    "name": "Limpiezas en Madrid", // Cambia por el nombre de tu empresa
    "telephone": "+34000000000" // Tu teléfono
  }
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": serviceData.faqs.map(faq => ({
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
export default function LimpiezaComunidadesPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      
      <ContenidoLimpiezaComunidades data={serviceData} />
    </>
  );
}