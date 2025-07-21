import type { Metadata } from 'next';
import ContenidoQuienesSomos from '@/components/paginas/contenido-quienes-somos';
import StructuredData from '@/components/StructuredData';

// ==================================================================
// DATOS Y SEO PARA "QUIÉNES SOMOS"
// ==================================================================

const pageData = {
  slug: "quienes-somos",
  hero: {
    title: "Conozca nuestra empresa",
    subtitle: "Descubra por qué somos la empresa de limpieza preferida en Madrid, con más de 10 años de experiencia brindando servicios de calidad."
  },
  mainContent: {
    title: "Los mejores en servicios de limpieza",
    quote: "Nuestro servicio de limpieza no teme a la competencia de Madrid, ya que somos simplemente los mejores!",
    paragraphs: [
      "Estamos listos para limpiar su casa, oficina, casa o almacén con una precisión asombrosa y aguda. Dejaremos sus instalaciones relucientes y con un aroma agradable y fresco.",
      "De hecho, nuestra relación calidad / precio es tan constante, que nos permitió obtener fácilmente el estado del servicio de limpieza de casas favorito de la ciudad de Madrid. Durante años, nuestro equipo ha brindado un nivel incomparable de servicios de limpieza del hogar.",
      "También es importante agregar, según su solicitud, y si la escala de una limpieza es lo suficientemente grande, incluso podemos organizar un viaje a Madrid.",
      "Tenemos más de 10 años trabajando en este rubro, tenemos clientes tanto particulares como empresas, por eso tratamos de satisfacer al cliente en todo lo que nos pide y mantener la confianza."
    ],
    images: [
      { src: "/equipo-limpieza-optimizada.webp", alt: "Equipo de limpieza profesional" },
      { src: "/images/limpieza-empresas.webp", alt: "Limpieza de empresas" },
      { src: "/limpieza-oficinas-en-madrid.webp", alt: "Limpieza de oficinas" },
    ]
  },
  differentiators: {
    title: "Cosas que nos diferencian de otras Empresas de Limpieza en Madrid",
    subtitle: "Descubra por qué somos la opción preferida para servicios de limpieza en toda la Comunidad de Madrid.",
    items: [
      { iconName: "Clock", title: "01. Gran experiencia", text: "¡Con más de 10 años de experiencia, todos nuestros profesionales de limpieza están listos para mantener la suciedad fuera de su propiedad!" },
      { iconName: "Shield", title: "02. Respetuoso del medio ambiente", text: "Todas nuestras herramientas y soluciones de limpieza que utilizamos están certificadas, son ecológicas y seguras de usar." },
      { iconName: "Sparkles", title: "03. Gama de servicios", text: "Cualquier cosa que necesites limpiar, desde un apartamento o una casa hasta una oficina o incluso una nave industrial, ¡¡estamos a la altura!!" },
      { iconName: "Users", title: "04. Precios competitivos", text: "Simplemente compare nuestros precios sorprendentemente bajos y las tasas alucinantes que tienen otras empresas de limpieza con sede en Madrid." }
    ]
  },
  gallery: {
    title: "Servicios de limpieza en Madrid",
    subtitle: "Algunos ejemplos de nuestros servicios de limpieza profesional en diferentes espacios.",
    images: [
      { src: "/limpieza-oficinas-en-madrid.webp", alt: "Limpieza de oficinas en Madrid" },
      { src: "/images/fin-obra.jpg", alt: "Limpieza de obra" },
      { src: "/images/limpieza-oficinas-general.webp", alt: "Limpieza de oficinas" },
      { src: "/images/limpieza-comunidades.jpg", alt: "Limpieza de comunidades" },
      { src: "/images/limpieza-empresas.webp", alt: "Limpieza de empresas" },
      { src: "/images/maquinaria-limpieza-garajes.webp", alt: "Limpieza de garajes" },

    ]
  },
};

export const metadata: Metadata = {
  title: "Quiénes somos | Empresa de Limpiezas en Madrid",
  description: pageData.hero.subtitle,
  alternates: {
    canonical: `https://www.limpiezasenmadrid.es/${pageData.slug}`,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Quiénes Somos | Limpiezas en Madrid",
  "description": pageData.mainContent.paragraphs.join(" "),
  "url": `https://www.limpiezasenmadrid.es/${pageData.slug}`,
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Limpiezas en Madrid",
    "url": "https://www.limpiezasenmadrid.es",
    "logo": "https://www.limpiezasenmadrid.es/logo.png",
    "description": pageData.hero.subtitle
};

export default function QuienesSomosPage() {
  return (
    <>
      <StructuredData data={aboutPageSchema} />
      <StructuredData data={organizationSchema} />
      <ContenidoQuienesSomos data={pageData} />
    </>
  );
}