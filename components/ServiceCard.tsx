// components/ServiceCard.tsx

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ServiceIcon } from "./ServiceIcon"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  slug: string
  iconName: string
}

export function ServiceCard({
  title,
  description,
  image,
  slug,
  iconName
}: ServiceCardProps) {
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
          <ServiceIcon name={iconName as any} />
        </div>
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-green transition-colors duration-300">{title}</h3>
        <p className="text-brand-black-light mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>
        <Link
          href={`/servicios/${slug}`}
          className="text-brand-green hover:text-brand-green/80 font-semibold inline-flex items-center gap-2 transition-all duration-300 group-hover:gap-3"
        >
          Más información <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
