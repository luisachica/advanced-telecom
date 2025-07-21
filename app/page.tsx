import Image from "next/image"
import Link from "next/link"
import {
  Check,
  Star,
  Phone,
  Mail,
  ArrowRight,
  Send,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { PhoneBanner } from "@/components/phone-banner"
import { ServiceCard } from "@/components/ServiceCard"
import { ImageGallery } from "@/components/image-gallery"
import { MainNavigation } from "@/components/main-navigation"
import { SchemaMarkup } from "@/components/schema-markup"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import WhatsappFloating from "@/components/WhatsappFloating"

// Definir rutas de imágenes para servicios
const serviceImages = {
  finObra: "/images/fin-obra.jpg",
  limpiezaHogar: "/images/limpieza-hogar.jpg",
  limpiezaComunidades: "/images/limpieza-comunidades.jpg",
  limpiezaOficinas: "/cheerful-office-cleaner.png", // Actualizado a la nueva imagen
  limpiezaEmpresas: "/images/limpieza-empresas.webp",
  limpiezaCristales: "/images/Limpieza-cristales.PNG",
  limpiezaGarajes: "/images/limpieza-garajes.webp",
}

// Imagen de respaldo para cualquier imagen que no se pueda cargar
const fallbackImage = "/sparkling-clean-home.png"

// Verificar que todas las rutas de imágenes sean válidas
const validateImagePath = (path: string | undefined | null): string => {
  if (!path || path.trim() === "") {
    return fallbackImage
  }
  return path
}

// Definir imágenes para la galería con validación
const galleryImages = [
  {
    src: validateImagePath("/images/limpieza-garajes.webp"),
    alt: "Limpieza profesional de garajes",
    width: 400,
    height: 400,
    link: "/servicios/limpieza-garajes",
  },
  {
    src: validateImagePath("/limpieza-oficinas-en-madrid.webp"), // Reemplazado con la nueva imagen
    alt: "Limpieza profesional de oficinas",
    width: 400,
    height: 400,
    link: "/servicios/limpieza-oficinas",
  },
  {
    src: validateImagePath("/images/limpieza-cristales.png"),
    alt: "Limpieza de cristales",
    width: 400,
    height: 400,
    link: "/servicios/limpieza-cristales",
  },
  {
    src: validateImagePath("/images/limpieza-comunidades.jpg"),
    alt: "Limpieza de comunidades",
    width: 400,
    height: 400,
    link: "/servicios/limpieza-comunidades",
  },
  {
    src: validateImagePath("/images/limpieza-empresas.webp"),
    alt: "Limpieza de empresas",
    width: 400,
    height: 400,
    link: "/servicios/limpieza-empresas",
  },
  {
    src: validateImagePath("/cheerful-office-cleaner.png"),
    alt: "Servicio de limpieza de oficinas",
    width: 400,
    height: 400,
    link: "/servicios/limpieza-oficinas",
  },
 
]

export default function HomePage() {
  // Definir servicios con sus imágenes correspondientes
  const services = [
    {
      title: "Fin de obra",
      image: validateImagePath(serviceImages.finObra),
      iconName: "Building2",
      description: "Limpieza profesional tras finalizar obras de construcción o reformas.",
      features: ["Eliminación de residuos", "Limpieza de polvo y escombros", "Tratamiento de superficies"],
      slug: "/servicios/limpieza-fin-obra",
    },
    {
      title: "Limpieza de comunidades",
      image: validateImagePath(serviceImages.limpiezaComunidades),
      iconName: "Building",
      description: "Mantenimiento y limpieza de zonas comunes en comunidades de vecinos.",
      features: ["Zonas comunes", "Escaleras y pasillos", "Garajes comunitarios"],
      slug: "/servicios/limpieza-comunidades",
    },
    {
      title: "Limpieza de oficinas",
      image: validateImagePath(serviceImages.limpiezaOficinas),
      iconName: "Briefcase",
      description: "Servicios especializados para mantener tu espacio de trabajo limpio y organizado.",
      features: ["Puestos de trabajo", "Salas de reuniones", "Zonas de descanso"],
      slug: "/servicios/limpieza-oficinas",
    },
    {
      title: "Limpieza de empresas",
      image: validateImagePath(serviceImages.limpiezaEmpresas),
      iconName: "Heart",
      description: "Limpieza sanitaria con protocolos específicos para centros médicos y clínicas.",
      features: ["Desinfección especializada", "Protocolos sanitarios", "Productos homologados"],
      slug: "/servicios/limpieza-empresas",
    },
    {
      title: "Limpieza de cristales",
      image: validateImagePath(serviceImages.limpiezaCristales),
      iconName: "Glasses",
      description: "Servicio especializado para cristales y ventanas con resultados impecables.",
      features: ["Sin marcas ni residuos", "Acceso a altura", "Cristales y espejos"],
      slug: "/servicios/limpieza-cristales",
    },
    {
      title: "Limpieza de garajes",
      image: validateImagePath(serviceImages.limpiezaGarajes),
      iconName: "Car",
      description: "Limpieza y mantenimiento de garajes comunitarios y parkings.",
      features: ["Eliminación de manchas", "Limpieza de suelos", "Desengrasado"],
      slug: "/servicios/limpieza-garajes",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <SchemaMarkup />
      <PhoneBanner />
      <MainNavigation services={[]} />

      <main className="flex-1">
        {/* Nuevo Hero Section */}
        <section className="w-full bg-[#e8f7fa] relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-[#00b3d7] font-medium">Desinfección profesional</p>
                <h1 className="text-5xl md:text-6xl font-bold text-[#0a3b5c] leading-tight">
                  El mejor
                  <br />
                  servicio de
                  <br />
                  limpieza
                </h1>
                <p className="text-[#5a7184] text-lg max-w-lg">
                  Ofrecemos servicios profesionales de limpieza para hogares y empresas en toda la Comunidad de Madrid,
                  con personal cualificado y productos de alta calidad.
                </p>
                <div className="flex flex-wrap gap-4 pt-4">
                  <a href="https://wa.me/34608305354?text=Hola%2C%20quiero%20más%20información">
                    <Button className="bg-[#00b3d7] hover:bg-[#0095b3] text-white rounded-full px-8 py-6 normal-case">
                      Me gustaría solicitar un servicio
                    </Button>
                  </a>
                  <Link href="/servicios">
                    <Button
                      variant="outline"
                      className="bg-[#8ed1b7] hover:bg-[#7bc0a6] text-white border-none rounded-full px-8 py-6 normal-case"
                    >
                      Vea nuestros servicios
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="relative">
                <div className="relative z-10">
                  <div className="rounded-full overflow-hidden w-[400px] h-[400px] mx-auto">
                    <Image
                      src={validateImagePath("/yellow-glove-cleaning.png") || "/placeholder.svg"}
                      alt="Profesional de limpieza con guantes amarillos realizando tareas de desinfección en Madrid"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -bottom-20 -right-10 w-[300px] h-[200px] rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={validateImagePath("/bathroom-clean.png") || "/placeholder.svg"}
                      alt="Baño limpio"
                      width={300}
                      height={200}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Nueva sección Sobre Nosotros */}
        <section className="w-full py-16 md:py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative">
                  <Image
                    src={validateImagePath("/vacuum-cleaner.jpg") || "/placeholder.svg"}
                    alt="Aspiradora profesional"
                    width={600}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                  <div className="absolute top-1/2 right-0 transform translate-x-1/3 -translate-y-1/2">
                    <div className="bg-white rounded-full p-8 shadow-xl w-40 h-40 flex flex-col items-center justify-center text-center">
                      <span className="text-[#00b3d7] text-4xl font-bold">10+</span>
                      <span className="text-[#0a3b5c] font-medium text-sm">
                        Años de
                        <br />
                        experiencia
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="text-[#00b3d7] font-medium">Sobre nosotros</div>
                <h2 className="text-4xl font-bold text-[#0a3b5c] leading-tight">
                  La forma unida de encontrar servicios especializados
                </h2>
                <div className="border-l-4 border-[#00b3d7] pl-4 italic text-[#5a7184]">
                  "Somos expertos en servicios de limpieza profesional, comprometidos con la excelencia y la
                  satisfacción total de nuestros clientes en cada proyecto que realizamos."
                </div>
                <p className="text-[#5a7184]">
                  En Limpiezas en Madrid contamos con un equipo de profesionales altamente cualificados y con amplia
                  experiencia en el sector. Nos especializamos en ofrecer soluciones de limpieza personalizadas para
                  hogares, oficinas, comunidades y espacios comerciales, utilizando productos ecológicos y técnicas
                  avanzadas que garantizan resultados impecables respetando el medio ambiente.
                </p>
                <div className="flex flex-wrap items-center gap-6 pt-4">
                  <Link href="/servicios">
                    <Button className="bg-[#00b3d7] hover:bg-[#0095b3] text-white rounded-full px-8 py-3 normal-case">
                      Ver nuestros servicios
                    </Button>
                  </Link>
                  <div className="flex items-center gap-2 text-[#0a3b5c] font-medium">
                    <span>o llame al</span>
                    <Link href="tel:611174552" className="text-[#00b3d7] hover:underline">
                      611 174 552
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Servicios Section - Versión Mejorada */}
        <section className="w-full py-16 md:py-24 bg-[#f8f9fa] relative overflow-hidden">
          {/* Elementos decorativos de fondo */}
          <div className="absolute inset-0 bg-[url('/images/service-background.jpg')] opacity-5 bg-cover bg-center"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00b3d7]/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#8ed1b7]/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          {/* Círculos decorativos */}
          <div className="absolute top-1/4 left-10 w-20 h-20 bg-[#00b3d7]/10 rounded-full"></div>
          <div className="absolute bottom-1/4 right-10 w-16 h-16 bg-[#8ed1b7]/10 rounded-full"></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-[#0a3b5c]/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>

          <div className="container px-4 md:px-6 relative z-10">
            {/* Encabezado de la sección */}
            <div className="flex flex-col items-center justify-center space-y-4 text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Nuestros servicios</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight">
                Servicios de limpieza <span className="text-[#00b3d7]">profesionales</span> para empresas
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl">
                Ofrecemos soluciones de limpieza personalizadas con personal cualificado y productos de alta calidad
                para toda la Comunidad de Madrid.
              </p>
            </div>

            {/* Tarjetas de servicios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={index}
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  iconName={service.iconName}
                  slug={`/servicios/${service.slug}`} 
                />
              ))}
            </div>

            {/* Botón de acción */}
            <div className="flex justify-center mt-12">
              <Link href="/servicios">
                <Button className="bg-[#00b3d7] hover:bg-[#0095b3] text-white rounded-full px-8 py-6 shadow-lg shadow-[#00b3d7]/20 transition-all hover:translate-y-[-2px]">
                  Ver todos nuestros servicios <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA persuasivo */}
        <section className="w-full py-16 bg-gradient-to-r from-[#0a3b5c] to-[#00b3d7] relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                  ¿Necesita un servicio de limpieza profesional y confiable?
                </h2>
                <p className="text-white/90 text-lg">
                  En <span className="font-bold">Limpiezas en Madrid</span> ofrecemos soluciones personalizadas para
                  cada necesidad. Nuestro equipo de profesionales está listo para transformar su espacio con los más
                  altos estándares de calidad.
                </p>
                <ul className="space-y-3">
                  {[
                    "Personal cualificado y en plantilla",
                    "Productos ecológicos de alta calidad",
                    "Flexibilidad horaria y sin permanencia",
                    "Presupuesto sin compromiso en 24h",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-white">
                      <div className="bg-white/20 rounded-full p-1">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-4 pt-6">
                  <a href="https://wa.me/34608305354?text=Hola%2C%20quiero%20más%20información">
                    <Button className="bg-white hover:bg-gray-100 text-[#00b3d7] font-bold rounded-full px-8 py-6 shadow-lg shadow-black/20 transition-all hover:translate-y-[-2px] normal-case">
                      Solicitar presupuesto ahora <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                  <a href="tel:611174552">
                  <Button
                    variant="outline"
                    className="bg-transparent hover:bg-white/10 text-white border-white rounded-full px-8 py-6"
                  >
                    <Phone className="mr-2 h-5 w-5" /> Llamar: 611 174 552
                  </Button>
                  </a>
                </div>
              </div>
              <div className="relative hidden lg:block">
                <div className="relative">
                  <Image
                    src={validateImagePath("/equipo-limpieza-optimizada.webp") || "/placeholder.svg"}
                    alt="Equipo de limpieza profesional"
                    width={600}
                    height={450}
                    className="rounded-2xl shadow-lg object-cover h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a3b5c]/80 to-transparent rounded-2xl"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">Equipo profesional</h3>
                    <p className="text-white/90">Confía en nuestros especialistas certificados</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progreso Del Trabajo Section - Galería Mejorada */}
        <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#00b3d7]/5 rounded-full -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#8ed1b7]/5 rounded-full translate-y-1/2 translate-x-1/2 blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center justify-center p-2 bg-[#e8f7fa] rounded-full mb-2">
                <span className="text-[#00b3d7] font-medium px-3 py-1">Progreso del trabajo</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-[#0a3b5c] leading-tight mt-4">
                Hacemos la vida <span className="text-[#00b3d7]">más fácil</span>
              </h2>
              <p className="text-[#5a7184] text-lg max-w-2xl mx-auto mt-4">
                Nuestro equipo de profesionales se encarga de todas las tareas de limpieza para que usted pueda
                disfrutar de su tiempo en lo que realmente importa.
              </p>
            </div>

            {/* Nueva galería de imágenes mejorada */}
            <div className="mb-12">
              <ImageGallery images={galleryImages} />
            </div>

            {/* Sección de compromiso */}
            <div className="bg-gray-100 rounded-3xl p-8 md:p-12 mt-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[#0a3b5c] mb-4">
                    Nos comprometemos a brindar nuestros servicios con excelencia
                  </h3>
                  <p className="text-[#5a7184] mb-6">
                    Nuestro equipo está formado por profesionales cualificados que se dedican a ofrecer un servicio
                    excepcional, utilizando productos de alta calidad y técnicas avanzadas para garantizar resultados
                    impecables en cada proyecto.
                  </p>
                  <Link href="https://wa.me/34608305354?text=Hola%2C%20quiero%20más%20información">
                    <Button className="bg-[#00b3d7] hover:bg-[#0095b3] text-white rounded-full px-8 py-3">
                      Obtener un presupuesto
                    </Button>
                  </Link>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#00b3d7]/20 to-[#8ed1b7]/20 rounded-3xl blur-2xl opacity-30 transform rotate-3"></div>
                  <div className="relative">
                    <Image
                      src={validateImagePath("/images/limpieza-comunidades.jpg") || "/placeholder.svg"}
                      alt="Equipo de limpieza profesional"
                      width={600}
                      height={400}
                      className="rounded-2xl shadow-lg"
                    />
                    <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg">
                      <div className="flex items-center gap-2">
                        <div className="bg-[#00b3d7] p-2 rounded-lg">
                          <Check className="h-5 w-5 text-white" />
                        </div>
                        <p className="font-bold text-[#0a3b5c]">100% garantizado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios Section */}
        <section className="w-full py-16 md:py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#8ed1b7]/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00b3d7]/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <p className="text-[#00b3d7] font-medium mb-2">Testimonios</p>
              <h2 className="text-3xl font-bold text-[#0a3b5c] mb-4">¿Qué opinan nuestros clientes?</h2>
              <p className="text-[#5a7184]">
                Todas las valoraciones de nuestros clientes están verificadas y reflejan su experiencia real con
                nuestros servicios.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <div className="flex items-center gap-3 bg-[#e8f7fa]/30 px-6 py-3 rounded-full">
                <span className="font-bold text-[#0a3b5c]">EXCELENTE</span>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-[#8ed1b7] text-[#8ed1b7]" />
                  ))}
                </div>
                <span className="text-sm text-[#5a7184]">3012 reseñas en Google</span>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  stars: 5,
                  text: "Solo llevo un mes con este servicio, pero la chica que hay está haciendo un trabajo excelente en todos los aspectos.",
                  name: "Pedro S.",
                  date: "7 Abril 2023",
                  initial: "P",
                  color: "bg-[#e8f7fa] text-[#00b3d7]",
                },
                {
                  stars: 5,
                  text: "La puntualidad es muy importante para mí y es muy positivo que sean muy puntuales y hacen su trabajo muy bien.",
                  name: "Ana M.",
                  date: "15 Abril 2023",
                  initial: "A",
                  color: "bg-[#e8f7fa] text-[#00b3d7]",
                },
                {
                  stars: 5,
                  text: "Muy buen servicio, profesional y eficiente. Recomendable 100%.",
                  name: "Sara R.",
                  date: "3 Mayo 2023",
                  initial: "S",
                  color: "bg-[#e8f7fa] text-[#00b3d7]",
                },
              ].map((testimonial, index) => (
                <div key={index} className="group">
                  <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-[#00b3d7] h-full flex flex-col transition-transform duration-300 group-hover:translate-y-[-5px] group-hover:shadow-xl">
                    <div className="flex mb-4">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-[#8ed1b7] text-[#8ed1b7]" />
                      ))}
                    </div>
                    <p className="text-[#5a7184] mb-6 flex-grow">{`"${testimonial.text}"`}</p>
                    <div className="flex items-center gap-3 mt-auto">
                      <div
                        className={`w-10 h-10 rounded-full ${testimonial.color} flex items-center justify-center font-bold text-lg`}
                      >
                        {testimonial.initial}
                      </div>
                      <div>
                        <div className="font-medium text-[#0a3b5c]">{testimonial.name}</div>
                        <div className="text-xs text-[#5a7184]">{testimonial.date}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contacto Section */}
        <section className="w-full py-16 md:py-24 bg-gradient-to-br from-[#e8f7fa] to-white relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/cleaning-pattern.png')] opacity-5"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#00b3d7]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#8ed1b7]/10 rounded-full blur-3xl"></div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-12 lg:grid-cols-2">
              <div className="space-y-6">
                <p className="text-[#00b3d7] font-medium mb-2">Contacto</p>
                <h2 className="text-3xl font-bold text-[#00b3d7]">
                  ¿Necesitas más información sobre nuestros servicios?
                </h2>
                <p className="text-[#0a3b5c] text-lg">
                  Deja tus datos de contacto y contactaremos contigo para informarte y facilitarte un presupuesto
                  personalizado sin compromiso.
                </p>

                <div className="bg-white rounded-2xl p-6 shadow-lg space-y-4">
                  <h3 className="font-bold text-[#0a3b5c] text-xl">Contacta directamente</h3>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#00b3d7] rounded-full p-3 text-white">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-[#5a7184]">Llámanos</p>
                      <p className="font-bold text-[#0a3b5c]">611 174 552</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-[#00b3d7] rounded-full p-3 text-white">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-[#5a7184]">Escríbenos</p>
                      <p className="font-bold text-[#0a3b5c]">contacto@limpiezasenmadrid.es</p>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <Image
                    src={validateImagePath("/customer-service-chat.png") || "/placeholder.svg"}
                    alt="Atención al cliente"
                    width={500}
                    height={400}
                    className="w-full rounded-2xl object-cover shadow-lg"
                  />
                </div>
              </div>

              <div className="bg-gradient-to-br from-[#00b3d7] to-[#0095b3] rounded-3xl p-8 text-white shadow-2xl">
                <div className="flex items-center pb-4">
                    <div className="p-3 text-white">
                      <Send className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-2xl text-white font-bold ">Solicitar un presupuesto</h3>
                    </div>
                  </div>


                <ContactForm />
              </div>
            </div>
          </div>
          <WhatsappFloating />
        </section>
      </main>
      <Footer />
    </div>
  )
}
