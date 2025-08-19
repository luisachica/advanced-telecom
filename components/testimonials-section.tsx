import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Testimonial {
  id: string
  author: string
  rating: number
  comment: string
  date: string
  avatar?: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300"
          }`}
        />
      ))}
    </div>
  )
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <Card className="h-full bg-white border-gray-200 hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="bg-primary/10 rounded-full p-2 flex-shrink-0">
            <Quote className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-3">
              <StarRating rating={testimonial.rating} />
              <span className="text-sm text-gray-500">{testimonial.date}</span>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              {testimonial.comment}
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <span className="text-primary font-semibold text-sm">
                  {testimonial.author.charAt(0).toUpperCase()}
                </span>
              </div>
              <div>
                <p className="font-semibold text-gray-900">{testimonial.author}</p>
                <p className="text-sm text-gray-500">Cliente verificado</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  // Calcular rating promedio
  const averageRating = testimonials.length > 0 
    ? testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
    : 0

  return (
    <section className="w-full py-16 md:py-24 bg-white">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-black mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-brand-black text-lg mb-6">
            Testimonios reales de clientes satisfechos con nuestros servicios de telecomunicaciones.
          </p>
          
          {/* Rating promedio */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex items-center gap-2">
              <StarRating rating={Math.round(averageRating)} />
              <span className="text-2xl font-bold text-brand-black">
                {averageRating.toFixed(1)}
              </span>
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">{testimonials.length}</span> reseñas en Google
            </div>
          </div>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(0, 6).map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* CTA para ver más reseñas */}
        <div className="text-center mt-12">
          <a
            href="https://www.google.com/search?sca_esv=9dd6fa6532a43e61&rlz=1C1CHZN_enCO1141CO1141&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-EzK8akobKwQFEMkoOcskyLNdRVVf4jkYVm6CbnSdKtVTs42K5q057zZSXRnO77j3A2I3GjvmJIaPqnHvM7gAKH8roDklvBFS_f-xw7n9hU3KW7lBsgzKOs36BixoBAMPFu2htiE%3D&q=ADVANCED+TELECOM+-+Antenas+y+Videoporteros+Opiniones&sa=X&ved=2ahUKEwjI9MS9lpePAxVlSTABHdOEE0gQ0bkNegQIHhAD&biw=1366&bih=607&dpr=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
          >
            Ver todas las reseñas en Google
            <Star className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection