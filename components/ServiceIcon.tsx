import {
  Home,
  Briefcase,
  Building,
  Building2,
  Heart,
  Glasses,
  Car
} from "lucide-react"

const iconMap = {
  Home,
  Briefcase,
  Building,
  Building2,
  Heart,
  Glasses,
  Car
}

export function ServiceIcon({ name }: { name: keyof typeof iconMap }) {
  const Icon = iconMap[name] || Briefcase
  return <Icon className="h-6 w-6 text-[#00b3d7]" />
}
