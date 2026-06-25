import { Check } from 'lucide-react'

export default function CheckItem({ children, className = '' }) {
  return (
    <li className={`flex items-center gap-2.5 text-sm sm:text-base text-gray-700 ${className}`}>
      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-electric/10 flex items-center justify-center">
        <Check className="w-3 h-3 text-electric" strokeWidth={3} />
      </span>
      {children}
    </li>
  )
}
