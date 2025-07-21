import type { Metadata } from 'next';
import ContenidoLimpiezaOficinas from '@/components/paginas/contenido-limpieza-oficinas';
import StructuredData from '@/components/StructuredData';

// ==================================================================
// DATOS Y SEO PARA "LIMPIEZA DE OFICINAS"
// ==================================================================

const serviceData = {
  title: "Limpieza de oficinas",
  slug: "servicios/limpieza-oficinas",
  description: "Servicios profesionales de limpieza para oficinas y espacios de trabajo en Madrid. Creamos entornos limpios y productivos.",
  heroImage: "/limpieza-oficinas-en-madrid.webp",
  shortDescription: "Mantenemos tu espacio de trabajo limpio, organizado y saludable para aumentar la productividad.",
  longDescription: "Nuestro servicio de limpieza de oficinas está diseñado para mantener su espacio de trabajo en condiciones óptimas, creando un ambiente limpio, saludable y profesional para sus empleados y clientes. Utilizamos productos de alta calidad y técnicas especializadas para garantizar resultados excepcionales.",
  features: [
    { title: "Limpieza integral", description: "Limpieza completa de todas las áreas de trabajo, incluyendo escritorios, salas de reuniones, áreas comunes y baños.", iconName: "Sparkles" },
    { title: "Personal cualificado", description: "Equipo de profesionales formados específicamente en limpieza de entornos de oficina.", iconName: "Users" },
    { title: "Horarios flexibles", description: "Nos adaptamos a sus horarios para realizar la limpieza sin interrumpir su actividad empresarial.", iconName: "Clock" },
    { title: "Productos ecológicos", description: "Utilizamos productos respetuosos con el medio ambiente y seguros para la salud de sus empleados.", iconName: "Shield" },
  ],
  process: [
    { title: "Evaluación inicial", description: "Visitamos su oficina para evaluar sus necesidades específicas y elaborar un plan personalizado." },
    { title: "Presupuesto detallado", description: "Le proporcionamos un presupuesto claro y sin compromiso, detallando todos los servicios incluidos." },
    { title: "Programación", description: "Acordamos un horario que se adapte a su actividad empresarial, minimizando las interrupciones." },
    { title: "Ejecución del servicio", description: "Nuestro equipo realiza la limpieza siguiendo protocolos estrictos y utilizando equipos profesionales." },
    { title: "Control de calidad", description: "Realizamos inspecciones regulares para garantizar que se mantienen nuestros altos estándares." },
  ],
  faqs: [
    { question: "¿Con qué frecuencia recomiendan la limpieza de oficinas?", answer: "Recomendamos una limpieza diaria para áreas de alto tránsito como recepciones, baños y cocinas, y una limpieza más profunda semanal o quincenal para otras áreas. No obstante, adaptamos la frecuencia según las necesidades específicas de cada cliente." },
    { question: "¿Proporcionan los productos de limpieza o debo suministrarlos yo?", answer: "Nosotros proporcionamos todos los productos y equipos de limpieza necesarios, incluidos en el precio del servicio. Utilizamos productos profesionales de alta calidad y respetuosos con el medio ambiente." },
    { question: "¿Pueden realizar la limpieza fuera del horario laboral?", answer: "Sí, de hecho, la mayoría de nuestros servicios de limpieza de oficinas se realizan fuera del horario laboral para no interrumpir la actividad de su empresa. Nos adaptamos completamente a sus necesidades horarias." },
    { question: "¿Ofrecen contratos a largo plazo o puedo contratar servicios puntuales?", answer: "Ofrecemos ambas opciones. Puede contratar servicios puntuales para necesidades específicas, como una limpieza profunda ocasional, o establecer un contrato regular sin permanencia. Nuestros contratos regulares incluyen descuentos especiales." },
  ],
  testimonials: [
    { stars: 5, text: "Desde que contratamos sus servicios, nuestra oficina luce impecable. El personal es muy profesional y cuidadoso con nuestros equipos y documentos.", name: "Carlos M.", company: "Agencia de Marketing", date: "15 Marzo 2023", initial: "C" },
    { stars: 5, text: "Excelente servicio y muy flexible con los horarios. Han sabido adaptarse perfectamente a nuestras necesidades cambiantes.", name: "Laura P.", company: "Despacho de Abogados", date: "22 Abril 2023", initial: "L" },
    { stars: 5, text: "La diferencia es notable. Nuestros clientes comentan lo limpia y ordenada que está siempre nuestra oficina. Totalmente recomendable.", name: "Miguel A.", company: "Consultoría Financiera", date: "8 Mayo 2023", initial: "M" },
  ],
  galleryImages: [
    { src: "/limpieza-oficinas-en-madrid.webp", alt: "Limpieza de escritorios en oficina", width: 800, height: 600 },
    { src: "/cheerful-office-cleaner.png", alt: "Limpieza de áreas comunes", width: 400, height: 400 },
    { src: "/images/limpieza-cristales.png", alt: "Limpieza de ventanas y cristales", width: 400, height: 400 },
    { src: "/bathroom-clean.png", alt: "Limpieza de baños de oficina", width: 400, height: 400 },
  ],
  relatedServices: [
    { title: "Limpieza de Comunidades", link: "/servicios/limpieza-comunidades", image: "/images/limpieza-comunidades.jpg" },
    { title: "Limpieza de Cristales", link: "/servicios/limpieza-cristales", image: "/images/limpieza-cristales.png" },
    { title: "Limpieza Fin de Obra", link: "/servicios/limpieza-fin-obra", image: "/images/fin-obra.jpg" },
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
    url: `https://www.limpiezasenmadrid.es/servicios/${serviceData.slug}`,
    images: [{ url: `https://www.limpiezasenmadrid.es/${serviceData.heroImage}`, width: 1200, height: 630 }],
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

export default function LimpiezaOficinasPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <ContenidoLimpiezaOficinas data={serviceData} />
    </>
  );
}