import type { Metadata } from 'next';
import ContenidoQuienesSomos from '@/components/paginas/contenido-quienes-somos';
import StructuredData from '@/components/StructuredData';
import { withPhone } from '@/lib/seo';

// ==================================================================
// DATOS Y SEO PARA "QUIÉNES SOMOS"
// ==================================================================

const pageData = {
  slug: "quienes-somos",
  hero: {
    title: "Conozca Advanced Telecom",
    subtitle: "Descubra por qué somos la empresa de telecomunicaciones preferida en Madrid, con más de 25 años de experiencia brindando servicios técnicos especializados."
  },
  mainContent: {
    title: "Líderes en servicios de telecomunicaciones",
    quote: "Advanced Telecom se posiciona como referente en Madrid por nuestra excelencia técnica y compromiso con la innovación tecnológica.",
    paragraphs: [
      "Somos especialistas en instalación y mantenimiento de sistemas de telecomunicaciones. Nuestro equipo técnico altamente cualificado garantiza soluciones precisas y duraderas para antenas TDT, parabólicas, porteros automáticos y sistemas de videovigilancia.",
      "Nuestra trayectoria de más de 25 años nos ha consolidado como la empresa de confianza en Madrid para servicios de telecomunicaciones. Trabajamos con las mejores marcas del sector como Televes, Johansson y Fermax, asegurando la máxima calidad en cada instalación.",
      "Ofrecemos cobertura en Toledo y Madrid Sur, adaptándonos a las necesidades específicas de cada cliente, desde viviendas particulares hasta grandes comunidades de propietarios y empresas.",
      "Con más de 25 años de experiencia en el sector, atendemos tanto a clientes particulares como empresariales, manteniendo siempre nuestro compromiso con la excelencia técnica y la satisfacción del cliente."
    ],
    images: [
      { src: "/images/telecom/empresa-advanced-telecom.jpg", alt: "Equipo técnico especializado" },
      { src: "/images/telecom/antena-profesional.jpg", alt: "Instalaciones profesionales" },
      { src: "/images/telecom/video-portero-02.jpg", alt: "Sistemas de comunicación" },
    ]
  },
  differentiators: {
    title: "Qué nos diferencia de otras empresas de telecomunicaciones en Madrid",
    subtitle: "Descubra por qué Advanced Telecom es la opción preferida para servicios técnicos especializados en Toledo y Madrid Sur.",
    items: [
      { iconName: "Clock", title: "01. Experiencia consolidada", text: "Con más de 25 años de experiencia, nuestros técnicos especializados dominan las últimas tecnologías en telecomunicaciones y sistemas de comunicación." },
      { iconName: "Shield", title: "02. Certificaciones oficiales", text: "Trabajamos exclusivamente con equipos certificados de marcas líderes como Televes, Johansson y Fermax, garantizando la máxima calidad y durabilidad." },
      { iconName: "Sparkles", title: "03. Servicios integrales", text: "Desde antenas TDT y parabólicas hasta porteros automáticos y cámaras de seguridad, cubrimos todas sus necesidades de telecomunicaciones." },
      { iconName: "Users", title: "04. Precios transparentes", text: "Ofrecemos presupuestos claros y competitivos, sin sorpresas. Compare nuestra relación calidad-precio con otras empresas del sector." }
    ]
  },
  gallery: {
    title: "Servicios de telecomunicaciones en Madrid",
    subtitle: "Ejemplos de nuestras instalaciones y servicios técnicos especializados en diferentes entornos.",
    images: [
      { src: "/images/telecom/antena-tdt-instalacion-01.jpg", alt: "Instalación de antenas TDT en Madrid" },
      { src: "/images/telecom/antena-parabolica.jpg", alt: "Instalación de antenas parabólicas" },
      { src: "/images/telecom/portero-automatico-instalacion-01.jpg", alt: "Porteros automáticos" },
      { src: "/images/telecom/camaras-seguridad.jpg", alt: "Sistemas de videovigilancia" },
      { src: "/images/telecom/trabajo-antena-2024-04-01.jpg", alt: "Solución de interferencias" },
      { src: "/images/telecom/reparacion-urgente-01.jpg", alt: "Reparaciones urgentes 24/7" },
    ]
  },
};

export const metadata: Metadata = {
  title: "Quiénes somos | Advanced Telecom - Empresa de Telecomunicaciones en Madrid",
  description: withPhone(pageData.hero.subtitle),
  alternates: {
    canonical: `https://www.advancedtelecom.es/${pageData.slug}`,
  },
  robots: {
    index: false,
    follow: false,
    nocache: false,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "Quiénes Somos | Advanced Telecom",
  "description": pageData.mainContent.paragraphs.join(" "),
  "url": `https://www.advancedtelecom.es/${pageData.slug}`,
};

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Advanced Telecom",
    "url": "https://www.advancedtelecom.es",
    "logo": "https://advancedtelecom.es/logo-advanced-telecom.jpg",
    "description": pageData.hero.subtitle,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Calle Velázquez 59",
      "addressLocality": "Madrid",
      "postalCode": "28001",
      "addressCountry": "ES"
    },
    "telephone": "+34668838415",
    "email": "info@advancedtelecom.es"
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