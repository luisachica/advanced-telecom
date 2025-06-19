import Image from "next/image"
import Link from "next/link"

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  link?: string
}

interface ImageGalleryProps {
  images: GalleryImage[]
}

export function ImageGallery({ images }: ImageGalleryProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {images.map((image, index) => {
        const content = (
          <div className="relative overflow-hidden rounded-2xl shadow-lg group h-[400px]">
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent px-4 py-2">
              <p className="text-white text-sm font-medium">{image.alt}</p>
            </div>
          </div>
        )

        return image.link ? (
          <Link href={image.link} key={index} className="block group">
            {content}
          </Link>
        ) : (
          <div key={index} className="group">
            {content}
          </div>
        )
      })}
    </div>
  )
}
