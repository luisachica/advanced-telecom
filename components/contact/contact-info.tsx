import Link from "next/link"
import type { ReactNode } from "react"

interface ContactInfoProps {
  icon: ReactNode
  title: string
  description: string
  contact: string
  link: string
  bgColor: string
  iconColor: string
  textColor?: string
}

export function ContactInfo({
  icon,
  title,
  description,
  contact,
  link,
  bgColor,
  iconColor,
  textColor = "text-brand-black",
}: ContactInfoProps) {
  return (
    <div className={`${bgColor} rounded-xl p-7 shadow-lg transition-transform hover:-translate-y-1`}>
      <div className="flex items-start gap-5">
        <div className={`p-3 rounded-full ${iconColor} bg-white/20 flex-shrink-0`}>{icon}</div>
        <div className="w-full pr-2">
          <h3 className={`text-xl font-bold mb-2 ${textColor}`}>{title}</h3>
          <p className={`text-sm mb-3 ${textColor === "text-white" ? "text-white/80" : "text-[#5a7184]"}`}>
            {description}
          </p>
          <Link
            href={link}
            className={`font-medium text-base break-all hover:underline ${textColor === "text-white" ? "text-white" : "text-green-600"}`}
          >
            {contact}
          </Link>
        </div>
      </div>
    </div>
  )
}
