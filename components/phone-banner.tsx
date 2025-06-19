import { Phone } from "lucide-react"
import Link from "next/link"

export function PhoneBanner() {
  return (
    <div className="bg-[#0a3b5c] py-2">
      <div className="container mx-auto px-4 md:px-6 flex justify-end">
        <Link
          href="tel:611174552"
          className="bg-[#00b3d7] hover:bg-[#0095b3] text-white px-6 py-2 rounded-full flex items-center transition-colors font-medium"
        >
          <Phone className="h-4 w-4 mr-2" />
          <span>611 174 552</span>
          <span className="ml-2 font-bold">¡Llámanos!</span>
        </Link>
      </div>
    </div>
  )
}
