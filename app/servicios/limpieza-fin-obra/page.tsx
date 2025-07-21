import type { Metadata } from 'next';
import ContenidoLimpiezaFinObra from '@/components/paginas/contenido-limpieza-fin-obra';
import StructuredData from '@/components/StructuredData';

// ==================================================================
// DATOS Y SEO PARA "LIMPIEZA FIN DE OBRA"
// ==================================================================

const serviceData = {
  title: "Limpieza fin de obra",
  slug: "servicios/limpieza-fin-obra",
  description: "Servicios profesionales de limpieza post-construcción para dejar tu espacio impecable y listo para ser usado en Madrid.",
  heroImage: "/images/fin-obra.jpg",
  shortDescription: "Eliminamos a fondo polvo, escombros y residuos después de cualquier construcción o reforma, dejando tu espacio listo para usar.",
  longDescription: "Nuestro servicio de limpieza fin de obra está diseñado para eliminar de manera exhaustiva toda la suciedad, polvo y residuos generados tras trabajos de construcción, renovación o reforma. Garantizamos una limpieza profunda para entregar espacios impecables, listos para ser habitados o utilizados.",
  features: [
    { title: "Limpieza profunda", description: "Eliminación de polvo fino, restos de cemento, pintura, yeso y cualquier residuo post-construcción.", iconName: "Sparkles" },
    { title: "Profesionales especializados", description: "Equipo capacitado y con experiencia específica en limpieza de obras, utilizando técnicas y maquinaria adecuadas.", iconName: "Users" },
    { title: "Rapidez y eficiencia", description: "Realizamos el trabajo en el menor tiempo posible sin comprometer la calidad, para que puedas disfrutar de tu espacio.", iconName: "Clock" },
    { title: "Seguridad y productos", description: "Empleamos productos específicos y seguros para cada superficie, protegiendo los materiales y el medio ambiente.", iconName: "Shield" },
  ],
  process: [
    { title: "Inspección y presupuesto", description: "Evaluamos el estado de la obra para ofrecer un presupuesto detallado y ajustado a tus necesidades." },
    { title: "Planificación del trabajo", description: "Diseñamos un plan de limpieza personalizado, coordinando horarios y fases para una ejecución eficiente." },
    { title: "Preparación del área", description: "Protegemos áreas sensibles y elementos específicos antes de iniciar la limpieza intensiva." },
    { title: "Limpieza intensiva", description: "Procedemos con la eliminación de residuos gruesos, aspirado, fregado, desincrustación y limpieza de todas las superficies." },
    { title: "Revisión final", description: "Realizamos una inspección detallada para asegurar que el espacio cumple con los más altos estándares de limpieza." },
  ],
  faqs: [
    { question: "¿Qué incluye un servicio de limpieza fin de obra?", answer: "Nuestro servicio incluye la eliminación de restos de obra (yeso, pintura, cemento), limpieza profunda de suelos, ventanas, marcos, puertas, paredes, baños y cocinas, aspirado, fregado y desinfección general, dejando el espacio impecable." },
    { question: "¿Necesito preparar algo antes de la limpieza?", answer: "Idealmente, el espacio debe estar libre de escombros grandes y herramientas de construcción para que nuestro equipo pueda trabajar de manera más eficiente y segura. Si hay objetos personales, te recomendamos retirarlos." },
    { question: "¿Cuánto tiempo tarda la limpieza fin de obra?", answer: "La duración depende del tamaño del inmueble, el nivel de suciedad y los detalles específicos de la obra. Tras nuestra evaluación inicial, te daremos un estimado de tiempo preciso." },
    { question: "¿Utilizan productos ecológicos o seguros?", answer: "Sí, priorizamos el uso de productos profesionales de alta calidad, seguros para las superficies, para las personas y respetuosos con el medio ambiente, garantizando resultados óptimos sin dañar los materiales." },
  ],
  testimonials: [
    { stars: 5, text: "El equipo hizo un trabajo increíble. Nuestra casa quedó impecable después de la reforma, no quedó ni rastro de polvo.", name: "Ana S.", company: "Propietaria de vivienda", date: "10 Mayo 2024", initial: "A" },
    { stars: 5, text: "Contratamos para la limpieza de un local comercial tras una obra y superaron nuestras expectativas. Muy profesionales y rápidos.", name: "Roberto G.", company: "Dueño de Negocio", date: "28 Abril 2024", initial: "R" },
    { stars: 5, text: "La mejor decisión para la limpieza post-construcción. El personal fue muy detallista, dejando todo brillante.", name: "Elena V.", company: "Administradora de Fincas", date: "15 Marzo 2024", initial: "E" },
  ],
  galleryImages: [
    { src: "/limpieza-fin-obra-1.webp", alt: "Limpieza profunda de suelos tras obra", width: 800, height: 600 },
    { src: "/limpieza-fin-obra-2.webp", alt: "Limpieza de cristales y ventanas en fin de obra", width: 400, height: 400 },
    { src: "/limpieza-fin-obra-3.webp", alt: "Eliminación de polvo y residuos de construcción", width: 400, height: 400 },
    { src: "/limpieza-fin-obra-4.webp", alt: "Equipo de limpieza fin de obra trabajando", width: 400, height: 400 },
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

export default function LimpiezaFinObraPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <ContenidoLimpiezaFinObra data={serviceData} />
    </>
  );
}