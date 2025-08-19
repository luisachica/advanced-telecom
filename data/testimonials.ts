export interface Testimonial {
  id: string
  author: string
  rating: number
  comment: string
  date: string
  avatar?: string
}

// Datos mock de testimonios - estos se reemplazarán con datos reales de Google My Business
export const mockTestimonials: Testimonial[] = [
  {
    id: "1",
    author: "María González",
    rating: 5,
    comment: "Excelente servicio de instalación de antena TDT. Los técnicos llegaron puntuales, trabajaron de forma muy profesional y dejaron todo perfectamente instalado. La señal es perfecta ahora. Muy recomendable.",
    date: "Hace 2 semanas"
  },
  {
    id: "2",
    author: "Carlos Ruiz",
    rating: 5,
    comment: "Contraté sus servicios para reparar el portero automático de mi edificio. Solucionaron el problema rápidamente y el precio fue muy justo. Personal muy amable y profesional.",
    date: "Hace 1 mes"
  },
  {
    id: "3",
    author: "Ana Martín",
    rating: 5,
    comment: "Instalaron cámaras de seguridad en mi negocio. El trabajo fue impecable, me explicaron todo el funcionamiento y el sistema funciona perfectamente. Muy satisfecha con el servicio.",
    date: "Hace 3 semanas"
  },
  {
    id: "4",
    author: "José Luis Fernández",
    rating: 4,
    comment: "Buen servicio de reparación de antena parabólica. Vinieron el mismo día que llamé y solucionaron el problema de señal. Técnicos competentes y precio razonable.",
    date: "Hace 1 semana"
  },
  {
    id: "5",
    author: "Laura Sánchez",
    rating: 5,
    comment: "Servicio de urgencia 24h excelente. Tuvimos un problema con la antena durante el fin de semana y vinieron inmediatamente. Solucionaron todo en poco tiempo. Muy profesionales.",
    date: "Hace 4 días"
  },
  {
    id: "6",
    author: "Miguel Ángel Torres",
    rating: 5,
    comment: "Instalación de antena TDT y configuración de todos los canales. Trabajo muy profesional, limpio y eficiente. Los recomiendo sin dudarlo. Excelente relación calidad-precio.",
    date: "Hace 2 meses"
  },
  {
    id: "7",
    author: "Carmen López",
    rating: 4,
    comment: "Muy contentos con la instalación del videoportero. Los técnicos fueron muy educados y explicaron todo el funcionamiento. El sistema funciona perfectamente.",
    date: "Hace 3 días"
  },
  {
    id: "8",
    author: "Roberto Jiménez",
    rating: 5,
    comment: "Solucionaron las interferencias 5G que teníamos en la televisión. Trabajo rápido y eficaz. Ahora la señal es perfecta en todos los canales. Muy recomendable.",
    date: "Hace 1 semana"
  }
]

// Función para obtener testimonios (usando datos mock)
export async function getTestimonials(): Promise<Testimonial[]> {
  // Simular delay de API
  await new Promise(resolve => setTimeout(resolve, 100))
  return mockTestimonials
}

// Función para obtener estadísticas de testimonios
export function getTestimonialsStats(testimonials: Testimonial[]) {
  const totalReviews = testimonials.length
  const averageRating = totalReviews > 0 
    ? testimonials.reduce((sum, t) => sum + t.rating, 0) / totalReviews
    : 0
  
  const ratingDistribution = {
    5: testimonials.filter(t => t.rating === 5).length,
    4: testimonials.filter(t => t.rating === 4).length,
    3: testimonials.filter(t => t.rating === 3).length,
    2: testimonials.filter(t => t.rating === 2).length,
    1: testimonials.filter(t => t.rating === 1).length,
  }
  
  return {
    totalReviews,
    averageRating,
    ratingDistribution
  }
}