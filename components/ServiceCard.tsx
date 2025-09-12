// components/ServiceCard.tsx

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"
import { ServiceIcon } from "./ServiceIcon"

interface ServiceCardProps {
  title: string
  description: string
  icon: string
  features?: string[]
  image?: string
  slug?: string
}

export function ServiceCard({
  title,
  description,
  icon,
  features,
  image,
  slug
}: ServiceCardProps) {
  // Si no hay imagen, usar un diseño basado en icono
  if (!image) {
    return (
      <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl border border-gray-100">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="p-3 bg-green-100 text-green-600 rounded-lg mr-4 group-hover:bg-green-600 group-hover:text-white transition-colors duration-300">
              <ServiceIcon name={icon as any} className="h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors duration-300">{title}</h3>
          </div>
          
          <p className="text-gray-600 mb-4 leading-relaxed">
            {description}
          </p>
          
          {features && features.length > 0 && (
            <ul className="space-y-2">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }

  // Diseño con imagen para páginas de servicios principales
  const imageSrc = image && image.trim() !== "" ? image : "/placeholder.svg"

  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-2xl">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 via-transparent to-transparent z-10"></div>
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
          priority={false}
        />
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm p-3 rounded-full shadow-lg z-20 transition-all duration-300 group-hover:bg-white group-hover:shadow-xl">
          <ServiceIcon name={icon as any} />
        </div>
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-green transition-colors duration-300">{title}</h3>
        <p className="text-brand-black-light mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>
        {slug && (
          <Link
            href={`/servicios/${slug}`}
            className="text-brand-green hover:text-brand-green/80 font-semibold inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
          >
            Más información <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        )}
        {features && features.length > 0 && (
          <ul className="space-y-1 mt-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
