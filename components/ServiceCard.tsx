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
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a3b5c]/90 to-transparent z-10"></div>
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg z-20">
          <ServiceIcon name={iconName as any} />
        </div>
      </div>
      <div className="p-6 bg-white">
        <h3 className="text-xl font-bold text-[#0a3b5c] mb-2">{title}</h3>
        <p className="text-[#5a7184] mb-4 line-clamp-2 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
        <Link
          href={`/servicios/${slug}`}
          className="text-[#00b3d7] hover:text-[#0095b3] font-medium inline-flex items-center gap-1 transition-colors"
        >
          Más información <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </div>
  )
}
