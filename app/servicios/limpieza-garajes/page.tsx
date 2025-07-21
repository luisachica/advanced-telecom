import type { Metadata } from 'next';
import ContenidoLimpiezaGarajes from '@/components/paginas/contenido-limpieza-garajes';
import StructuredData from '@/components/StructuredData';

// ==================================================================
// DATOS Y SEO PARA "LIMPIEZA DE GARAJES"
// ==================================================================

const serviceData = {
  title: "Limpieza de garajes",
  slug: "servicios/limpieza-garajes",
  description: "Servicios especializados de limpieza y mantenimiento para garajes comunitarios y comerciales en Madrid.",
  heroImage: "/images/limpieza-garajes-madrid.webp",
  shortDescription: "Mantenemos tu garaje impecable, seguro y libre de polvo, grasa y suciedad acumulada para todos los usuarios.",
  longDescription: "Nuestro servicio de limpieza de garajes está diseñado para abordar la suciedad y los desafíos específicos de estos espacios. Utilizamos maquinaria especializada de alta presión, aspiradoras industriales y productos desengrasantes potentes para eliminar la acumulación de polvo, hollín, manchas de aceite, rodadas de neumáticos y otros residuos. Un garaje limpio no solo mejora la estética y la seguridad, sino que también prolonga la vida útil de las instalaciones y previene accidentes.",
  features: [
    { title: "Maquinaria especializada", description: "Equipos de alta presión, fregadoras industriales y aspiradoras potentes para una limpieza profunda.", iconName: "Sparkles" },
    { title: "Desengrasado profesional", description: "Productos específicos para eliminar manchas de aceite, grasa y residuos de combustible del suelo.", iconName: "Shield" },
    { title: "Mejora de la seguridad", description: "Eliminación de suciedad que causa resbalones y mejora la visibilidad de señalización.", iconName: "Check" },
    { title: "Eliminación de olores", description: "Tratamiento de superficies para neutralizar olores desagradables y mantener un ambiente fresco.", iconName: "Clock" },
  ],
  process: [
    { title: "Inspección y presupuesto", description: "Evaluamos el tamaño, tipo de suelo y nivel de suciedad para ofrecerte un presupuesto a medida y sin compromiso." },
    { title: "Preparación del área", description: "Señalización de zonas de trabajo, retirada de objetos voluminosos y protección de sumideros." },
    { title: "Limpieza profunda", description: "Aplicación de desengrasantes, fregado industrial con maquinaria y aspirado de residuos." },
    { title: "Limpieza de elementos adicionales", description: "Limpieza de paredes, columnas, extintores, señalización, puntos de luz y rejillas de ventilación." },
    { title: "Acabado y revisión", description: "Secado, repaso final y retirada de toda la maquinaria y residuos para dejar el garaje impecable." },
  ],
  faqs: [
    { question: "¿Cada cuánto tiempo se recomienda limpiar un garaje?", answer: "La frecuencia ideal depende del uso y el tránsito del garaje. Para garajes comunitarios o de alto tránsito, se recomienda una limpieza profunda al menos una o dos veces al año. Para garajes con menos uso, una vez al año podría ser suficiente. Ofrecemos planes personalizados." },
    { question: "¿Pueden limpiar garajes de cualquier tamaño?", answer: "Sí, tenemos la capacidad y la maquinaria para limpiar garajes de todos los tamaños, desde pequeños garajes privados o de comunidades reducidas hasta grandes aparcamientos subterráneos de centros comerciales o edificios de oficinas." },
    { question: "¿Se encargan de las manchas de aceite y grasa?", answer: "Sí, es uno de nuestros puntos fuertes. Utilizamos desengrasantes industriales y técnicas de fregado específicas para tratar y eliminar eficazmente las manchas de aceite, grasa y combustible que son comunes en los garajes." },
    { question: "¿Necesitamos vaciar el garaje para la limpieza?", answer: "No es estrictamente necesario vaciar el garaje por completo. Podemos trabajar por zonas, moviendo los vehículos si es posible, o coordinar con la comunidad para que un sector quede libre en ciertos días. Lo ideal es discutir esto en la visita inicial para planificarlo de la mejor manera." },
  ],
  testimonials: [
    { stars: 5, text: "El garaje de nuestra comunidad nunca había estado tan limpio. Eliminaron todas las manchas de aceite y el olor a humedad. ¡Excelente trabajo!", name: "Presidente Comunidad 'Los Olivos'", company: "Comunidad de Vecinos", date: "05 Junio 2024", initial: "P" },
    { stars: 5, text: "Contratamos su servicio para nuestro parking comercial y los resultados superaron las expectativas. Rapidez y profesionalidad.", name: "Gerente, Parking Central", company: "Gestión de Aparcamientos", date: "20 Mayo 2024", initial: "G" },
    { stars: 5, text: "Un equipo muy eficiente y con maquinaria potente. El garaje de nuestro edificio ahora luce como nuevo. Recomendados al 100%.", name: "Administrador de Fincas Bravo", company: "Administración de Fincas", date: "12 Abril 2024", initial: "A" },
  ],
  galleryImages: [
    { src: "/limpieza-garajes-madrid.webp", alt: "Limpieza profunda de suelo de garaje con fregadora industrial", width: 800, height: 600 },
    { src: "/images/limpieza-parking-subterraneo.webp", alt: "Operario limpiando columnas y paredes de garaje", width: 400, height: 400 },
    { src: "/images/maquinaria-limpieza-garajes.webp", alt: "Maquinaria especializada para limpieza de garajes", width: 400, height: 400 },
    { src: "/images/suelo-garaje-limpio.webp", alt: "Suelo de garaje impecable después de la limpieza", width: 400, height: 400 },
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

export default function LimpiezaGarajesPage() {
  return (
    <>
      <StructuredData data={serviceSchema} />
      <StructuredData data={faqSchema} />
      <ContenidoLimpiezaGarajes data={serviceData} />
    </>
  );
}