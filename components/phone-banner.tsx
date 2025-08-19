import { Phone } from "lucide-react"
import Link from "next/link"

export function PhoneBanner() {
  return (
    <div className="bg-brand-black py-2">
      <div className="container mx-auto px-4 md:px-6 flex justify-end">
        <Link
          href="tel:668838415"
          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full flex items-center transition-colors font-medium"
        >
          <Phone className="h-4 w-4 mr-2" />
          <span>668 83 84 15</span>
          <span className="ml-2 font-bold">¡Llámanos!</span>
        </Link>
      </div>
    </div>
  )
}
