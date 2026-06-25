import {
  FileCheck,
  BookOpen,
  TrendingUp,
  LineChart,
  Calculator,
  LayoutDashboard,
  Truck,
  ShieldCheck,
  Zap,
  Handshake,
} from 'lucide-react'

const ICON_MAP = {
  FileCheck,
  BookOpen,
  TrendingUp,
  LineChart,
  Calculator,
  LayoutDashboard,
  Truck,
  ShieldCheck,
  Zap,
  Handshake,
}

export default function DynamicIcon({ name, className = 'w-6 h-6', ...props }) {
  const Icon = ICON_MAP[name]
  if (!Icon) return null
  return <Icon className={className} {...props} />
}
