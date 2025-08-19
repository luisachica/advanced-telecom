import {
  Radio,
  Tv,
  Lock,
  Camera,
  Wifi,
  Wrench,
  Briefcase,
  Satellite,
  DoorOpen,
  Shield,
  Zap,
  Router
} from "lucide-react"

const iconMap = {
  Radio: Radio,           // Para Antenas Parabólicas
  Tv: Tv,                 // Para Antenas TDT
  Lock: Lock,             // Para Porteros Automáticos
  DoorOpen: DoorOpen,     // Alternativo para Porteros
  Camera: Camera,         // Para Cámaras de Seguridad
  Shield: Shield,         // Alternativo para Cámaras
  Wifi: Wifi,             // Para Solución Interferencias 5G
  Router: Router,         // Alternativo para Interferencias
  Zap: Zap,               // Alternativo para Interferencias
  Wrench: Wrench,         // Para Reparaciones Urgentes
  Satellite: Satellite,   // Alternativo para Antenas
  Briefcase: Briefcase    // Icono por defecto
}

type IconName = keyof typeof iconMap

export function ServiceIcon({ name, className = "h-6 w-6" }: { name: IconName | string; className?: string }) {
  const Icon = iconMap[name as IconName] || Briefcase
  return <Icon className={className} />
}
